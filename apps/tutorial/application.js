var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var mh = Object.create;
var Bi = Object.defineProperty;
var rc = Object.getOwnPropertyDescriptor;
var gh = Object.getOwnPropertyNames;
var bh = Object.getPrototypeOf;
var yh = Object.prototype.hasOwnProperty;
var wh = /* @__PURE__ */ __name((r) => Bi(r, "__esModule", { value: true }), "wh");
var u = /* @__PURE__ */ __name((r, e) => Bi(r, "name", { value: e, configurable: true }), "u");
var pa = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "pa");
var xh = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of gh(e))
      !yh.call(r, l) && (t || l !== "default") && Bi(r, l, { get: () => e[l], enumerable: !(i = rc(e, l)) || i.enumerable });
  return r;
}, "xh");
var Cn = /* @__PURE__ */ __name((r, e) => xh(wh(Bi(r != null ? mh(bh(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Cn");
var A = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? rc(e, t) : e, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(e, t, l) : f(l)) || l);
  return i && l && Bi(e, t, l), l;
}, "A");
var nc = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "nc");
var da = /* @__PURE__ */ __name((r, e, t) => (nc(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "da");
var fa = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "fa");
var ha = /* @__PURE__ */ __name((r, e, t, i) => (nc(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "ha");
var oc = pa((Vs, ic) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(w, S) {
      if (isNaN(w = parseInt(w, 10)))
        throw b.InvalidParameter;
      return w * S;
    }
    __name(i, "i");
    u(i, "assign");
    function l(w, S) {
      if (S === 0)
        throw b.DivisionByZero;
      var C = Object.create(b.prototype);
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
      var C = 0, M = 1, _ = 1, q = 0, L = 0, W = 0, I = 1, J = 1, z = 0, j = 1, Y = 1, ee = 1, ie = 1e7, ne;
      if (w != null)
        if (S !== void 0) {
          if (C = w, M = S, _ = C * M, C % 1 !== 0 || M % 1 !== 0)
            throw b.NonIntegerParameter;
        } else
          switch (typeof w) {
            case "object": {
              if ("d" in w && "n" in w)
                C = w.n, M = w.d, "s" in w && (C *= w.s);
              else if (0 in w)
                C = w[0], 1 in w && (M = w[1]);
              else
                throw b.InvalidParameter;
              _ = C * M;
              break;
            }
            case "number": {
              if (w < 0 && (_ = w, w = -w), w % 1 === 0)
                C = w;
              else if (w > 0) {
                for (w >= 1 && (J = Math.pow(10, Math.floor(1 + Math.log(w) / Math.LN10)), w /= J); j <= ie && ee <= ie; )
                  if (ne = (z + Y) / (j + ee), w === ne) {
                    j + ee <= ie ? (C = z + Y, M = j + ee) : ee > j ? (C = Y, M = ee) : (C = z, M = j);
                    break;
                  } else
                    w > ne ? (z += Y, j += ee) : (Y += z, ee += j), j > ie ? (C = Y, M = ee) : (C = z, M = j);
                C *= J;
              } else
                (isNaN(w) || isNaN(S)) && (M = C = NaN);
              break;
            }
            case "string": {
              if (j = w.match(/\d+|./g), j === null)
                throw b.InvalidParameter;
              if (j[z] === "-" ? (_ = -1, z++) : j[z] === "+" && z++, j.length === z + 1 ? L = i(j[z++], _) : j[z + 1] === "." || j[z] === "." ? (j[z] !== "." && (q = i(j[z++], _)), z++, (z + 1 === j.length || j[z + 1] === "(" && j[z + 3] === ")" || j[z + 1] === "'" && j[z + 3] === "'") && (L = i(j[z], _), I = Math.pow(10, j[z].length), z++), (j[z] === "(" && j[z + 2] === ")" || j[z] === "'" && j[z + 2] === "'") && (W = i(j[z + 1], _), J = Math.pow(10, j[z + 1].length) - 1, z += 3)) : j[z + 1] === "/" || j[z + 1] === ":" ? (L = i(j[z], _), I = i(j[z + 2], 1), z += 3) : j[z + 3] === "/" && j[z + 1] === " " && (q = i(j[z], _), L = i(j[z + 2], _), I = i(j[z + 4], 1), z += 5), j.length <= z) {
                M = I * J, _ = C = W + M * q + J * L;
                break;
              }
            }
            default:
              throw b.InvalidParameter;
          }
      if (M === 0)
        throw b.DivisionByZero;
      t.s = _ < 0 ? -1 : 1, t.n = Math.abs(C), t.d = Math.abs(M);
    }, "parse");
    function y(w, S, C) {
      for (var M = 1; S > 0; w = w * w % C, S >>= 1)
        S & 1 && (M = M * w % C);
      return M;
    }
    __name(y, "y");
    u(y, "modpow");
    function v(w, S) {
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
    __name(v, "v");
    u(v, "cycleLen");
    function p(w, S, C) {
      for (var M = 1, _ = y(10, C, S), q = 0; q < 300; q++) {
        if (M === _)
          return q;
        M = M * 10 % S, _ = _ * 10 % S;
      }
      return 0;
    }
    __name(p, "p");
    u(p, "cycleStart");
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
    function b(w, S) {
      if (f(w, S), this instanceof b)
        w = h(t.d, t.n), this.s = t.s, this.n = t.n / w, this.d = t.d / w;
      else
        return l(t.s * t.n, t.d);
    }
    __name(b, "b");
    u(b, "Fraction"), b.DivisionByZero = new Error("Division by Zero"), b.InvalidParameter = new Error("Invalid argument"), b.NonIntegerParameter = new Error("Parameters must be integer"), b.prototype = { s: 1, n: 0, d: 1, abs: function() {
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
        return new b(NaN);
      if (w === void 0)
        return l(this.s * this.n % this.d, 1);
      if (f(w, S), t.n === 0 && this.d === 0)
        throw b.DivisionByZero;
      return l(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d);
    }, gcd: function(w, S) {
      return f(w, S), l(h(t.n, this.n) * h(t.d, this.d), t.d * this.d);
    }, lcm: function(w, S) {
      return f(w, S), t.n === 0 && this.n === 0 ? l(0, 1) : l(t.n * this.n, h(t.n, this.n) * h(t.d, this.d));
    }, ceil: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new b(NaN) : l(Math.ceil(w * this.s * this.n / this.d), w);
    }, floor: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new b(NaN) : l(Math.floor(w * this.s * this.n / this.d), w);
    }, round: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new b(NaN) : l(Math.round(w * this.s * this.n / this.d), w);
    }, inverse: function() {
      return l(this.s * this.d, this.n);
    }, pow: function(w, S) {
      if (f(w, S), t.d === 1)
        return t.s < 0 ? l(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : l(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var C = c(this.n), M = c(this.d), _ = 1, q = 1;
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
          q *= Math.pow(L, M[L]);
        }
      return t.s < 0 ? l(q, _) : l(_, q);
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
        for (var _ = l(C[M - 1], 1), q = M - 2; q >= 0; q--)
          _ = _.inverse().add(C[q]);
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
      var M = v(S, C), _ = p(S, C, M), q = this.s < 0 ? "-" : "";
      if (q += S / C | 0, S %= C, S *= 10, S && (q += "."), M) {
        for (var L = _; L--; )
          q += S / C | 0, S %= C, S *= 10;
        q += "(";
        for (var L = M; L--; )
          q += S / C | 0, S %= C, S *= 10;
        q += ")";
      } else
        for (var L = w; S && L--; )
          q += S / C | 0, S %= C, S *= 10;
      return q;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return b;
    }) : typeof Vs == "object" ? (Object.defineProperty(b, "__esModule", { value: true }), b.default = b, b.Fraction = b, ic.exports = b) : r.Fraction = b;
  })(Vs);
});
var so = pa((tp, Il) => {
  (function(r) {
    typeof tp == "object" && typeof Il != "undefined" ? Il.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    var y = u(function(n) {
      return !!n && f(n) === "object";
    }, "s"), v = u(function(n) {
      return typeof n == "function";
    }, "l"), p = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return y(n) && n.nodeType === 11;
    }, object: y, func: v, number: function(n) {
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
      return y(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return y(n) && n.length !== void 0 && v(n.splice);
    } };
    c.default = p;
    var h = {};
    function b(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.prepared.axis;
        a === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : a === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(b, "b");
    u(b, "f");
    function w(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var d = s === "x" ? "y" : "x";
          o.page[d] = a.coords.start.page[d], o.client[d] = a.coords.start.client[d], o.delta[d] = 0;
        }
      }
    }
    __name(w, "w");
    u(w, "d"), Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
    var S = { id: "actions/drag", install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", s.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": b, "interactions:action-resume": b, "interactions:action-move": w, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.buttons, d = a.options.drag;
      if (d && d.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: d.lockAxis === "start" ? d.startAxis : d.lockAxis }, false;
    } }, draggable: function(n) {
      return c.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: b, move: w, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, C = S;
    h.default = C;
    var M = {};
    Object.defineProperty(M, "__esModule", { value: true }), M.default = void 0;
    var _ = { init: function(n) {
      var o = n;
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || q, _.SVGElement = o.SVGElement || q, _.SVGSVGElement = o.SVGSVGElement || q, _.SVGElementInstance = o.SVGElementInstance || q, _.Element = o.Element || q, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || q, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function q() {
    }
    __name(q, "q");
    u(q, "y");
    var L = _;
    M.default = L;
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = void 0;
    var I = { init: function(n) {
      var o = M.default.Element, a = n.navigator || {};
      I.supportsTouch = "ontouchstart" in n || c.default.func(n.DocumentTouch) && M.default.document instanceof n.DocumentTouch, I.supportsPointerEvent = a.pointerEnabled !== false && !!M.default.PointerEvent, I.isIOS = /iP(hone|od|ad)/.test(a.platform), I.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), I.isIe9 = /MSIE 9/.test(a.userAgent), I.isOperaMobile = a.appName === "Opera" && I.supportsTouch && /Presto/.test(a.userAgent), I.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", I.pEventTypes = I.supportsPointerEvent ? M.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, I.wheelEvent = M.default.document && "onmousewheel" in M.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, J = I;
    W.default = J;
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
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[W.default.prefixedMatchesSelector](o);
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
      if (!W.default.isIOS7 && o) {
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
        var d = n[s], m = n[o];
        if (d && s !== o)
          if (m) {
            var E = ee(d), g = ee(m);
            if (E !== d.ownerDocument)
              if (g !== d.ownerDocument)
                if (E !== g) {
                  a = a.length ? a : ie(m);
                  var x = void 0;
                  if (m instanceof M.default.HTMLElement && d instanceof M.default.SVGElement && !(d instanceof M.default.SVGSVGElement)) {
                    if (d === g)
                      continue;
                    x = d.ownerSVGElement;
                  } else
                    x = d;
                  for (var T = ie(x, m.ownerDocument), O = 0; T[O] && T[O] === a[O]; )
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
                  G = d, R = m, (parseInt(e.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(e.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (o = s);
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
    var ee = u(function(n) {
      return n.parentNode || n.host;
    }, "E");
    function ie(n, o) {
      for (var a, s = [], d = n; (a = ee(d)) && d !== o && a !== d.ownerDocument; )
        s.unshift(d), d = a;
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
    var U = {};
    Object.defineProperty(U, "__esModule", { value: true }), U.default = function(n, o) {
      for (var a in o)
        n[a] = o[a];
      return n;
    };
    var ce = {};
    function ke(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(ke, "ke");
    u(ke, "I");
    function Ye(n, o, a) {
      return n === "parent" ? (0, z.parentNode)(a) : n === "self" ? o.getRect(a) : (0, z.closest)(a, n);
    }
    __name(Ye, "Ye");
    u(Ye, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.addEdges = function(n, o, a) {
      n.left && (o.left += a.x), n.right && (o.right += a.x), n.top && (o.top += a.y), n.bottom && (o.bottom += a.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ce.getStringOptionResult = Ye, ce.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ce.resolveRectLike = function(n, o, a, s) {
      var d, m = n;
      return c.default.string(m) ? m = Ye(m, o, a) : c.default.func(m) && (m = m.apply(void 0, function(E) {
        if (Array.isArray(E))
          return ke(E);
      }(d = s) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(d) || function(E, g) {
        if (E) {
          if (typeof E == "string")
            return ke(E, g);
          var x = Object.prototype.toString.call(E).slice(8, -1);
          return x === "Object" && E.constructor && (x = E.constructor.name), x === "Map" || x === "Set" ? Array.from(E) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? ke(E, g) : void 0;
        }
      }(d) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c.default.element(m) && (m = (0, z.getElementRect)(m)), m;
    }, ce.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, U.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ce.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, U.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    };
    var je = {};
    Object.defineProperty(je, "__esModule", { value: true }), je.default = function(n, o, a) {
      var s = n.options[a], d = s && s.origin || n.options.origin, m = (0, ce.resolveRectLike)(d, n, o, [n && o]);
      return (0, ce.rectToXY)(m) || { x: 0, y: 0 };
    };
    var ve = {};
    function Ke(n) {
      return n.trim().split(/ +/);
    }
    __name(Ke, "Ke");
    u(Ke, "C"), Object.defineProperty(ve, "__esModule", { value: true }), ve.default = u(/* @__PURE__ */ __name(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Ke(o)), c.default.array(o))
        return o.reduce(function(x, T) {
          return (0, U.default)(x, n(T, a, s));
        }, s);
      if (c.default.object(o) && (a = o, o = ""), c.default.func(a))
        s[o] = s[o] || [], s[o].push(a);
      else if (c.default.array(a))
        for (var d = 0; d < a.length; d++) {
          var m;
          m = a[d], n(o, m, s);
        }
      else if (c.default.object(a))
        for (var E in a) {
          var g = Ke(E).map(function(x) {
            return "".concat(o).concat(x);
          });
          n(g, a[E], s);
        }
      return s;
    }, "n"), "t");
    var nt = {};
    Object.defineProperty(nt, "__esModule", { value: true }), nt.default = void 0, nt.default = function(n, o) {
      return Math.sqrt(n * n + o * o);
    };
    var Wt = {};
    Object.defineProperty(Wt, "__esModule", { value: true }), Wt.default = function(n, o) {
      n.__set || (n.__set = {});
      var a = u(function(d) {
        typeof n[d] != "function" && d !== "__set" && Object.defineProperty(n, d, { get: function() {
          return d in n.__set ? n.__set[d] : n.__set[d] = o[d];
        }, set: function(m) {
          n.__set[d] = m;
        }, configurable: true });
      }, "n");
      for (var s in o)
        a(s);
      return n;
    };
    var K = {};
    function dr(n) {
      return n instanceof M.default.Event || n instanceof M.default.Touch;
    }
    __name(dr, "dr");
    u(dr, "B");
    function It(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    __name(It, "It");
    u(It, "Y");
    function Dt(n, o) {
      return o = o || { x: 0, y: 0 }, W.default.isOperaMobile && dr(n) ? (It("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : It("page", n, o), o;
    }
    __name(Dt, "Dt");
    u(Dt, "W");
    function Ut(n, o) {
      return o = o || {}, W.default.isOperaMobile && dr(n) ? It("screen", n, o) : It("client", n, o), o;
    }
    __name(Ut, "Ut");
    u(Ut, "L");
    function fr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
    __name(fr, "fr");
    u(fr, "U");
    function Vt(n) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var d in o)
          o[d] += s[d];
      }
      for (var m in o)
        o[m] /= n.length;
      return o;
    }
    __name(Vt, "Vt");
    u(Vt, "V"), Object.defineProperty(K, "__esModule", { value: true }), K.coordsToEvent = function(n) {
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
    }, K.copyCoords = function(n, o) {
      n.page = n.page || {}, n.page.x = o.page.x, n.page.y = o.page.y, n.client = n.client || {}, n.client.x = o.client.x, n.client.y = o.client.y, n.timeStamp = o.timeStamp;
    }, K.getClientXY = Ut, K.getEventTargets = function(n) {
      var o = c.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [z.getActualElement(o ? o[0] : n.target), z.getActualElement(n.currentTarget)];
    }, K.getPageXY = Dt, K.getPointerId = function(n) {
      return c.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.getPointerType = function(n) {
      return c.default.string(n.pointerType) ? n.pointerType : c.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof M.default.Touch ? "touch" : "mouse";
    }, K.getTouchPair = fr, K.getXY = It, K.isNativePointer = dr, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.pointerAverage = Vt, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return Wt.default;
    } }), K.setCoordDeltas = function(n, o, a) {
      n.page.x = a.page.x - o.page.x, n.page.y = a.page.y - o.page.y, n.client.x = a.client.x - o.client.x, n.client.y = a.client.y - o.client.y, n.timeStamp = a.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(n, o) {
      var a = Math.max(o.timeStamp / 1e3, 1e-3);
      n.page.x = o.page.x / a, n.page.y = o.page.y / a, n.client.x = o.client.x / a, n.client.y = o.client.y / a, n.timeStamp = a;
    }, K.setCoords = function(n, o, a) {
      var s = o.length > 1 ? Vt(o) : o[0];
      Dt(s, n.page), Ut(s, n.client), n.timeStamp = a;
    }, K.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, K.touchAngle = function(n, o) {
      var a = o + "X", s = o + "Y", d = fr(n), m = d[1][a] - d[0][a], E = d[1][s] - d[0][s];
      return 180 * Math.atan2(E, m) / Math.PI;
    }, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o = fr(n), a = Math.min(o[0].pageX, o[1].pageX), s = Math.min(o[0].pageY, o[1].pageY), d = Math.max(o[0].pageX, o[1].pageX), m = Math.max(o[0].pageY, o[1].pageY);
      return { x: a, y: s, left: a, top: s, right: d, bottom: m, width: d - a, height: m - s };
    }, K.touchDistance = function(n, o) {
      var a = o + "X", s = o + "Y", d = fr(n), m = d[0][a] - d[1][a], E = d[0][s] - d[1][s];
      return (0, nt.default)(m, E);
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
    function Rr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Rr, "Rr");
    u(Rr, "G"), Object.defineProperty(Lt, "__esModule", { value: true }), Lt.BaseEvent = void 0;
    var dn = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Rr(this, "immediatePropagationStopped", false), Rr(this, "propagationStopped", false), this._interaction = s;
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
    Lt.BaseEvent = dn, Object.defineProperty(dn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Ie = {};
    Object.defineProperty(Ie, "__esModule", { value: true }), Ie.remove = Ie.merge = Ie.from = Ie.findIndex = Ie.find = Ie.contains = void 0, Ie.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, Ie.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var fn = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "K");
    Ie.merge = fn, Ie.from = function(n) {
      return fn([], n);
    };
    var hn = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Z");
    Ie.findIndex = hn, Ie.find = function(n, o) {
      return n[hn(n, o)];
    };
    var Pt = {};
    function Dr(n) {
      return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Dr(n);
    }
    __name(Dr, "Dr");
    u(Dr, "Q");
    function Yn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Yn, "Yn");
    u(Yn, "tt");
    function Xr(n, o) {
      return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Xr(n, o);
    }
    __name(Xr, "Xr");
    u(Xr, "et");
    function hr(n, o) {
      if (o && (Dr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return St(n);
    }
    __name(hr, "hr");
    u(hr, "nt");
    function St(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(St, "St");
    u(St, "rt");
    function xr(n) {
      return xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, xr(n);
    }
    __name(xr, "xr");
    u(xr, "ot");
    function kt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(kt, "kt");
    u(kt, "it"), Object.defineProperty(Pt, "__esModule", { value: true }), Pt.DropEvent = void 0;
    var vn = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Xr(g, x);
      })(E, n);
      var o, a, s, d, m = (s = E, d = function() {
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
        if (d) {
          var T = xr(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return hr(this, g);
      });
      function E(g, x, T) {
        var O;
        (function(R, B) {
          if (!(R instanceof B))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), kt(St(O = m.call(this, x._interaction)), "dropzone", void 0), kt(St(O), "dragEvent", void 0), kt(St(O), "relatedTarget", void 0), kt(St(O), "draggable", void 0), kt(St(O), "propagationStopped", false), kt(St(O), "immediatePropagationStopped", false);
        var P = T === "dragleave" ? g.prev : g.cur, k = P.element, G = P.dropzone;
        return O.type = T, O.target = k, O.currentTarget = k, O.dropzone = G, O.dragEvent = x, O.relatedTarget = x.target, O.draggable = x.interactable, O.timeStamp = x.timeStamp, O;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (a = [{ key: "reject", value: function() {
        var g = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var T = x.activeDrops, O = Ie.findIndex(T, function(k) {
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
      } }]) && Yn(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Pt.DropEvent = vn;
    var kr = {};
    function mn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], d = s.dropzone, m = s.element;
        o.dropzone = d, o.target = m, d.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(mn, "mn");
    u(mn, "lt");
    function Zr(n, o) {
      for (var a = function(m, E) {
        for (var g = m.interactables, x = [], T = 0; T < g.list.length; T++) {
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
        var d = a[s];
        d.rect = d.dropzone.getRect(d.element);
      }
      return a;
    }
    __name(Zr, "Zr");
    u(Zr, "ut");
    function gn(n, o, a) {
      for (var s = n.dropState, d = n.interactable, m = n.element, E = [], g = 0; g < s.activeDrops.length; g++) {
        var x = s.activeDrops[g], T = x.dropzone, O = x.element, P = x.rect;
        E.push(T.dropCheck(o, a, d, m, O, P) ? O : null);
      }
      var k = z.indexOfDeepestElement(E);
      return s.activeDrops[k] || null;
    }
    __name(gn, "gn");
    u(gn, "ct");
    function Si(n, o, a) {
      var s = n.dropState, d = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (d.activate = new Pt.DropEvent(s, a, "dropactivate"), d.activate.target = null, d.activate.dropzone = null), a.type === "dragend" && (d.deactivate = new Pt.DropEvent(s, a, "dropdeactivate"), d.deactivate.target = null, d.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (d.leave = new Pt.DropEvent(s, a, "dragleave"), a.dragLeave = d.leave.target = s.prev.element, a.prevDropzone = d.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (d.enter = new Pt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (d.drop = new Pt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (d.move = new Pt.DropEvent(s, a, "dropmove"), d.move.dragmove = a, a.dropzone = s.cur.dropzone)), d;
    }
    __name(Si, "Si");
    u(Si, "ft");
    function Ti(n, o) {
      var a = n.dropState, s = a.activeDrops, d = a.cur, m = a.prev;
      o.leave && m.dropzone.fire(o.leave), o.enter && d.dropzone.fire(o.enter), o.move && d.dropzone.fire(o.move), o.drop && d.dropzone.fire(o.drop), o.deactivate && mn(s, o.deactivate), a.prev.dropzone = d.dropzone, a.prev.element = d.element;
    }
    __name(Ti, "Ti");
    u(Ti, "dt");
    function Ro(n, o) {
      var a = n.interaction, s = n.iEvent, d = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var m = a.dropState;
        o.dynamicDrop && (m.activeDrops = Zr(o, a.element));
        var E = s, g = gn(a, E, d);
        m.rejected = m.rejected && !!g && g.dropzone === m.cur.dropzone && g.element === m.cur.element, m.cur.dropzone = g && g.dropzone, m.cur.element = g && g.element, m.events = Si(a, 0, E);
      }
    }
    __name(Ro, "Ro");
    u(Ro, "pt"), Object.defineProperty(kr, "__esModule", { value: true }), kr.default = void 0;
    var Do = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, d = n.defaults;
      n.usePlugin(h.default), s.prototype.dropzone = function(m) {
        return function(E, g) {
          if (c.default.object(g)) {
            if (E.options.drop.enabled = g.enabled !== false, g.listeners) {
              var x = (0, ve.default)(g.listeners), T = Object.keys(x).reduce(function(O, P) {
                return O[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], O;
              }, {});
              E.off(E.options.drop.listeners), E.on(T), E.options.drop.listeners = T;
            }
            return c.default.func(g.ondrop) && E.on("drop", g.ondrop), c.default.func(g.ondropactivate) && E.on("dropactivate", g.ondropactivate), c.default.func(g.ondropdeactivate) && E.on("dropdeactivate", g.ondropdeactivate), c.default.func(g.ondragenter) && E.on("dragenter", g.ondragenter), c.default.func(g.ondragleave) && E.on("dragleave", g.ondragleave), c.default.func(g.ondropmove) && E.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? E.options.drop.overlap = g.overlap : c.default.number(g.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (E.options.drop.accept = g.accept), "checker" in g && (E.options.drop.checker = g.checker), E;
          }
          return c.default.bool(g) ? (E.options.drop.enabled = g, E) : E.options.drop;
        }(this, m);
      }, s.prototype.dropCheck = function(m, E, g, x, T, O) {
        return function(P, k, G, R, B, X, $) {
          var re = false;
          if (!($ = $ || P.getRect(X)))
            return !!P.options.drop.checker && P.options.drop.checker(k, G, re, P, X, R, B);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var de = (0, je.default)(R, B, "drag"), Ae = K.getPageXY(k);
            Ae.x += de.x, Ae.y += de.y;
            var He = Ae.x > $.left && Ae.x < $.right, ye = Ae.y > $.top && Ae.y < $.bottom;
            re = He && ye;
          }
          var Ge = R.getRect(B);
          if (Ge && oe === "center") {
            var Zt = Ge.left + Ge.width / 2, jr = Ge.top + Ge.height / 2;
            re = Zt >= $.left && Zt <= $.right && jr >= $.top && jr <= $.bottom;
          }
          return Ge && c.default.number(oe) && (re = Math.max(0, Math.min($.right, Ge.right) - Math.max($.left, Ge.left)) * Math.max(0, Math.min($.bottom, Ge.bottom) - Math.max($.top, Ge.top)) / (Ge.width * Ge.height) >= oe), P.options.drop.checker && (re = P.options.drop.checker(k, G, re, P, X, R, B)), re;
        }(this, m, E, g, x, T, O);
      }, a.dynamicDrop = function(m) {
        return c.default.bool(m) ? (n.dynamicDrop = m, a) : n.dynamicDrop;
      }, (0, U.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, d.actions.drop = Do.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var d = a.dropState;
        d.activeDrops = null, d.events = null, d.activeDrops = Zr(o, a.element), d.events = Si(a, 0, s), d.events.activate && (mn(d.activeDrops, d.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": Ro, "interactions:after-action-move": function(n, o) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (Ti(a, a.dropState.events), o.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        Ro(n, o), Ti(a, a.dropState.events), o.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      if (o.prepared.name === "drag") {
        var a = o.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: Zr, getDrop: gn, getDropEvents: Si, fireDropEvents: Ti, defaults: { enabled: false, accept: null, overlap: "pointer" } }, hs = Do;
    kr.default = hs;
    var N = {};
    function te(n) {
      var o = n.interaction, a = n.iEvent, s = n.phase;
      if (o.prepared.name === "gesture") {
        var d = o.pointers.map(function(T) {
          return T.pointer;
        }), m = s === "start", E = s === "end", g = o.interactable.options.deltaSource;
        if (a.touches = [d[0], d[1]], m)
          a.distance = K.touchDistance(d, g), a.box = K.touchBBox(d), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(d, g), a.da = 0, o.gesture.startDistance = a.distance, o.gesture.startAngle = a.angle;
        else if (E) {
          var x = o.prevEvent;
          a.distance = x.distance, a.box = x.box, a.scale = x.scale, a.ds = 0, a.angle = x.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(d, g), a.box = K.touchBBox(d), a.scale = a.distance / o.gesture.startDistance, a.angle = K.touchAngle(d, g), a.ds = a.scale - o.gesture.scale, a.da = a.angle - o.gesture.angle;
        o.gesture.distance = a.distance, o.gesture.angle = a.angle, c.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o.gesture.scale = a.scale);
      }
    }
    __name(te, "te");
    u(te, "yt"), Object.defineProperty(N, "__esModule", { value: true }), N.default = void 0;
    var ae = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(d) {
        return c.default.object(d) ? (this.options.gesture.enabled = d.enabled !== false, this.setPerAction("gesture", d), this.setOnEvents("gesture", d), this) : c.default.bool(d) ? (this.options.gesture.enabled = d, this) : this.options.gesture;
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
    } }, Pe = ae;
    N.default = Pe;
    var me = {};
    function mt(n, o, a, s, d, m, E) {
      if (!o)
        return false;
      if (o === true) {
        var g = c.default.number(m.width) ? m.width : m.right - m.left, x = c.default.number(m.height) ? m.height : m.bottom - m.top;
        if (E = Math.min(E, Math.abs((n === "left" || n === "right" ? g : x) / 2)), g < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), x < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left") {
          var T = g >= 0 ? m.left : m.right;
          return a.x < T + E;
        }
        if (n === "top") {
          var O = x >= 0 ? m.top : m.bottom;
          return a.y < O + E;
        }
        if (n === "right")
          return a.x > (g >= 0 ? m.right : m.left) - E;
        if (n === "bottom")
          return a.y > (x >= 0 ? m.bottom : m.top) - E;
      }
      return !!c.default.element(s) && (c.default.element(o) ? o === s : z.matchesUpTo(s, o, d));
    }
    __name(mt, "mt");
    u(mt, "wt");
    function At(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(At, "At");
    u(At, "_t"), Object.defineProperty(me, "__esModule", { value: true }), me.default = void 0;
    var Tt = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o = n.actions, a = n.browser, s = n.Interactable, d = n.defaults;
      Tt.cursors = function(m) {
        return m.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), Tt.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(m) {
        return function(E, g, x) {
          return c.default.object(g) ? (E.options.resize.enabled = g.enabled !== false, E.setPerAction("resize", g), E.setOnEvents("resize", g), c.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? E.options.resize.axis = g.axis : g.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), c.default.bool(g.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = g.preserveAspectRatio : c.default.bool(g.square) && (E.options.resize.square = g.square), E) : c.default.bool(g) ? (E.options.resize.enabled = g, E) : E.options.resize;
        }(this, m, n);
      }, o.map.resize = Tt, o.methodDict.resize = "resizable", d.actions.resize = Tt.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, m = s.rect;
          s._rects = { start: (0, U.default)({}, m), corrected: (0, U.default)({}, m), previous: (0, U.default)({}, m), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, d.edges = s.prepared.edges, d.rect = s._rects.corrected, d.deltaRect = s._rects.delta;
        }
      })(n), At(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, m = s.interactable.options.resize.invert, E = m === "reposition" || m === "negate", g = s.rect, x = s._rects, T = x.start, O = x.corrected, P = x.delta, k = x.previous;
          if ((0, U.default)(k, O), E) {
            if ((0, U.default)(O, g), m === "reposition") {
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
          for (var B in O.width = O.right - O.left, O.height = O.bottom - O.top, O)
            P[B] = O[B] - k[B];
          d.edges = s.prepared.edges, d.rect = O, d.deltaRect = P;
        }
      })(n), At(n);
    }, "interactions:action-end": function(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o = n.interaction, a = n.interactable, s = n.element, d = n.rect, m = n.buttons;
      if (d) {
        var E = (0, U.default)({}, o.coords.cur.page), g = a.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || (m & g.mouseButtons) != 0)) {
          if (c.default.object(g.edges)) {
            var x = { left: false, right: false, top: false, bottom: false };
            for (var T in x)
              x[T] = mt(T, g.edges[T], E, o._latestPointer.eventTarget, s, d, g.margin || Tt.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (n.action = { name: "resize", edges: x });
          } else {
            var O = g.axis !== "y" && E.x > d.right - Tt.defaultMargin, P = g.axis !== "x" && E.y > d.bottom - Tt.defaultMargin;
            (O || P) && (n.action = { name: "resize", axes: (O ? "x" : "") + (P ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o = n.edges, a = n.axis, s = n.name, d = Tt.cursors, m = null;
      if (a)
        m = d[s + a];
      else if (o) {
        for (var E = "", g = ["top", "bottom", "left", "right"], x = 0; x < g.length; x++) {
          var T = g[x];
          o[T] && (E += T);
        }
        m = d[E];
      }
      return m;
    }, defaultMargin: null }, ko = Tt;
    me.default = ko;
    var Yt = {};
    Object.defineProperty(Yt, "__esModule", { value: true }), Yt.default = void 0;
    var Ci = { id: "actions", install: function(n) {
      n.usePlugin(N.default), n.usePlugin(me.default), n.usePlugin(h.default), n.usePlugin(kr.default);
    } };
    Yt.default = Ci;
    var Ct = {};
    Object.defineProperty(Ct, "__esModule", { value: true }), Ct.default = void 0;
    var Ot, Nr, Xn = 0, Zn = { request: function(n) {
      return Ot(n);
    }, cancel: function(n) {
      return Nr(n);
    }, init: function(n) {
      if (Ot = n.requestAnimationFrame, Nr = n.cancelAnimationFrame, !Ot)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Ot = n["".concat(s, "RequestAnimationFrame")], Nr = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Ot = Ot && Ot.bind(n), Nr = Nr && Nr.bind(n), Ot || (Ot = u(function(d) {
        var m = Date.now(), E = Math.max(0, 16 - (m - Xn)), g = n.setTimeout(function() {
          d(m + E);
        }, E);
        return Xn = m + E, g;
      }, "jt"), Nr = u(function(d) {
        return clearTimeout(d);
      }, "Mt"));
    } };
    Ct.default = Zn;
    var Qr = {};
    Object.defineProperty(Qr, "__esModule", { value: true }), Qr.default = void 0, Qr.getContainer = No, Qr.getScroll = Oi, Qr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Qr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, d = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!d || !d.enabled)
        return o(), { x: 0, y: 0 };
      var m = No(d.container, a.interactable, s), E = Oi(m);
      o();
      var g = Oi(m);
      return { x: g.x - E.x, y: g.y - E.y };
    };
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      le.isScrolling = true, Ct.default.cancel(le.i), n.autoScroll = le, le.interaction = n, le.prevTime = le.now(), le.i = Ct.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), Ct.default.cancel(le.i);
    }, scroll: function() {
      var n = le.interaction, o = n.interactable, a = n.element, s = n.prepared.name, d = o.options[s].autoScroll, m = No(d.container, o, a), E = le.now(), g = (E - le.prevTime) / 1e3, x = d.speed * g;
      if (x >= 1) {
        var T = { x: le.x * x, y: le.y * x };
        if (T.x || T.y) {
          var O = Oi(m);
          c.default.window(m) ? m.scrollBy(T.x, T.y) : m && (m.scrollLeft += T.x, m.scrollTop += T.y);
          var P = Oi(m), k = { x: P.x - O.x, y: P.y - O.y };
          (k.x || k.y) && o.fire({ type: "autoscroll", target: a, interactable: o, delta: k, interaction: n, container: m });
        }
        le.prevTime = E;
      }
      le.isScrolling && (Ct.default.cancel(le.i), le.i = Ct.default.request(le.scroll));
    }, check: function(n, o) {
      var a;
      return (a = n.options[o].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o = n.interaction, a = n.pointer;
      if (o.interacting() && le.check(o.interactable, o.prepared.name))
        if (o.simulation)
          le.x = le.y = 0;
        else {
          var s, d, m, E, g = o.interactable, x = o.element, T = o.prepared.name, O = g.options[T].autoScroll, P = No(O.container, g, x);
          if (c.default.window(P))
            E = a.clientX < le.margin, s = a.clientY < le.margin, d = a.clientX > P.innerWidth - le.margin, m = a.clientY > P.innerHeight - le.margin;
          else {
            var k = z.getElementClientRect(P);
            E = a.clientX < k.left + le.margin, s = a.clientY < k.top + le.margin, d = a.clientX > k.right - le.margin, m = a.clientY > k.bottom - le.margin;
          }
          le.x = d ? 1 : E ? -1 : 0, le.y = m ? 1 : s ? -1 : 0, le.isScrolling || (le.margin = O.margin, le.speed = O.speed, le.start(o));
        }
    } };
    function No(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    __name(No, "No");
    u(No, "zt");
    function Oi(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Oi, "Oi");
    u(Oi, "Ct");
    var Rd = { id: "auto-scroll", install: function(n) {
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
    } } }, Dd = Rd;
    Qr.default = Dd;
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
    var Go = {};
    function kd(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(kd, "kd");
    u(kd, "Yt");
    function Nd(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Nd, "Nd");
    u(Nd, "Wt"), Object.defineProperty(Go, "__esModule", { value: true }), Go.default = void 0;
    var Gd = { id: "auto-start/interactableMethods", install: function(n) {
      var o = n.Interactable;
      o.prototype.getAction = function(a, s, d, m) {
        var E = function(g, x, T, O, P) {
          var k = g.getRect(O), G = { action: null, interactable: g, interaction: T, element: O, rect: k, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", G), G.action;
        }(this, s, d, m, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, E, this, m, d) : E;
      }, o.prototype.ignoreFrom = (0, jt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, jt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Nd, o.prototype.styleCursor = kd;
    } };
    Go.default = Gd;
    var Qn = {};
    function lu(n, o, a, s, d) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Lo(o, a, n, d) ? n : null;
    }
    __name(lu, "lu");
    u(lu, "Vt");
    function Ld(n, o, a, s, d, m, E) {
      for (var g = 0, x = s.length; g < x; g++) {
        var T = s[g], O = d[g], P = T.getAction(o, a, n, O);
        if (P) {
          var k = lu(P, T, O, m, E);
          if (k)
            return { action: k, interactable: T, element: O };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Ld, "Ld");
    u(Ld, "Nt");
    function uu(n, o, a, s, d) {
      var m = [], E = [], g = s;
      function x(O) {
        m.push(O), E.push(g);
      }
      __name(x, "x");
      for (u(x, "u"); c.default.element(g); ) {
        m = [], E = [], d.interactables.forEachMatch(g, x);
        var T = Ld(n, o, a, m, E, s, d);
        if (T.action && !T.interactable.options[T.action.name].manualStart)
          return T;
        g = z.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(uu, "uu");
    u(uu, "qt");
    function cu(n, o, a) {
      var s = o.action, d = o.interactable, m = o.element;
      s = s || { name: null }, n.interactable = d, n.element = m, (0, jt.copyAction)(n.prepared, s), n.rect = d && s.name ? d.getRect(m) : null, du(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(cu, "cu");
    u(cu, "Gt");
    function Lo(n, o, a, s) {
      var d = n.options, m = d[a.name].max, E = d[a.name].maxPerElement, g = s.autoStart.maxInteractions, x = 0, T = 0, O = 0;
      if (!(m && E && g))
        return false;
      for (var P = 0; P < s.interactions.list.length; P++) {
        var k = s.interactions.list[P], G = k.prepared.name;
        if (k.interacting() && (++x >= g || k.interactable === n && ((T += G === a.name ? 1 : 0) >= m || k.element === o && (O++, G === a.name && O >= E))))
          return false;
      }
      return g > 0;
    }
    __name(Lo, "Lo");
    u(Lo, "$t");
    function pu(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    __name(pu, "pu");
    u(pu, "Ht");
    function vs(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    __name(vs, "vs");
    u(vs, "Kt");
    function du(n, o) {
      var a = n.interactable, s = n.element, d = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var m = "";
        if (d.name) {
          var E = a.options[d.name].cursorChecker;
          m = c.default.func(E) ? E(d, a, s, n._interacting) : o.actions.map[d.name].getCursor(d);
        }
        vs(n.element, m || "", o);
      } else
        o.autoStart.cursorElement && vs(o.autoStart.cursorElement, "", o);
    }
    __name(du, "du");
    u(du, "Zt"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = void 0;
    var jd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(Go.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, U.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return pu(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Lo, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget;
      a.interacting() || cu(a, uu(a, s, d, m, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var d = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        d.pointerType !== "mouse" || d.pointerIsDown || d.interacting() || cu(d, uu(d, m, E, g, s), s);
      })(n, o), function(a, s) {
        var d = a.interaction;
        if (d.pointerIsDown && !d.interacting() && d.pointerWasMoved && d.prepared.name) {
          s.fire("autoStart:before-start", a);
          var m = d.interactable, E = d.prepared.name;
          E && m && (m.options[E].manualStart || !Lo(m, d.element, d.prepared, s) ? d.stop() : (d.start(d.prepared, m, d.element), du(d, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && vs(a.element, "", o);
    } }, maxInteractions: pu, withinInteractionLimit: Lo, validateAction: lu }, Hd = jd;
    Qn.default = Hd;
    var jo = {};
    Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0;
    var Bd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, d = n.dx, m = n.dy;
      if (a.prepared.name === "drag") {
        var E = Math.abs(d), g = Math.abs(m), x = a.interactable.options.drag, T = x.startAxis, O = E > g ? "x" : E < g ? "y" : "xy";
        if (a.prepared.axis = x.lockAxis === "start" ? O[0] : x.lockAxis, O !== "xy" && T !== "xy" && T !== O) {
          a.prepared.name = null;
          for (var P = s, k = function(R) {
            if (R !== a.interactable) {
              var B = a.interactable.options.drag;
              if (!B.manualStart && R.testIgnoreAllow(B, P, s)) {
                var X = R.getAction(a.downPointer, a.downEvent, a, P);
                if (X && X.name === "drag" && function($, re) {
                  if (!re)
                    return false;
                  var oe = re.options.drag.startAxis;
                  return $ === "xy" || oe === "xy" || oe === $;
                }(O, R) && Qn.default.validateAction(X, R, P, s, o))
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
    jo.default = Bd;
    var Ho = {};
    function ms(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    __name(ms, "ms");
    u(ms, "re"), Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var $d = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Qn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o = n.interaction, a = ms(o);
      a > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, a));
    }, "interactions:move": function(n) {
      var o = n.interaction, a = n.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !a && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o = n.interaction;
      ms(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: ms }, qd = $d;
    Ho.default = qd;
    var Bo = {};
    Object.defineProperty(Bo, "__esModule", { value: true }), Bo.default = void 0;
    var Fd = { id: "auto-start", install: function(n) {
      n.usePlugin(Qn.default), n.usePlugin(Ho.default), n.usePlugin(jo.default);
    } };
    Bo.default = Fd;
    var Jn = {};
    function Wd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Wd, "Wd");
    u(Wd, "ue");
    function Ud(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    __name(Ud, "Ud");
    u(Ud, "ce");
    function fu(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Wd, o.prototype.checkAndPreventDefault = function(a) {
        return function(s, d, m) {
          var E = s.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (d.events.supportsPassive && /^touch(start|move)$/.test(m.type)) {
                var g = (0, e.getWindow)(m.target).document, x = d.getDocOptions(g);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(m.type) || c.default.element(m.target) && (0, z.matchesSelector)(m.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || m.preventDefault();
            } else
              m.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var d = n.interactions.list[s];
          if (d.element && (d.element === a.target || (0, z.nodeContains)(d.element, a.target)))
            return void d.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(fu, "fu");
    u(fu, "fe"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = void 0, Jn.install = fu;
    var Vd = { id: "core/interactablePreventDefault", install: fu, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = Ud, n;
    }, {}) };
    Jn.default = Vd;
    var gs = {};
    Object.defineProperty(gs, "__esModule", { value: true }), gs.default = void 0, gs.default = {};
    var Mi, bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), bs.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Mi || (Mi = {})), Mi.touchAction, Mi.boxSizing, Mi.noListeners;
    var Yd = { id: "dev-tools", install: function() {
    } };
    bs.default = Yd;
    var bn = {};
    Object.defineProperty(bn, "__esModule", { value: true }), bn.default = u(/* @__PURE__ */ __name(function n(o) {
      var a = {};
      for (var s in o) {
        var d = o[s];
        c.default.plainObject(d) ? a[s] = n(d) : c.default.array(d) ? a[s] = Ie.from(d) : a[s] = d;
      }
      return a;
    }, "n"), "t");
    var yn = {};
    function hu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var d = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(a); !(x = (m = d.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
          } finally {
            try {
              x || d.return == null || d.return();
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
            return vu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? vu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(hu, "hu");
    u(hu, "be");
    function vu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(vu, "vu");
    u(vu, "xe");
    function Xd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Xd, "Xd");
    u(Xd, "we");
    function wn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(wn, "wn");
    u(wn, "_e"), Object.defineProperty(yn, "__esModule", { value: true }), yn.default = void 0, yn.getRectOffset = mu;
    var Zd = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), wn(this, "states", []), wn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), wn(this, "startDelta", void 0), wn(this, "result", void 0), wn(this, "endResult", void 0), wn(this, "edges", void 0), wn(this, "interaction", void 0), this.interaction = s, this.result = $o();
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s, d) {
        var m = s.phase, E = this.interaction, g = function(T) {
          var O = T.interactable.options[T.prepared.name], P = O.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(k) {
            var G = O[k];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(k) {
            return !!k;
          });
        }(E);
        this.prepareStates(g), this.edges = (0, U.default)({}, E.edges), this.startOffset = mu(E.rect, d), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: m, pageCoords: d, preEnd: false });
        return this.result = $o(), this.startAll(x), this.result = this.setAll(x);
      } }, { key: "fillArg", value: function(s) {
        var d = this.interaction;
        return s.interaction = d, s.interactable = d.interactable, s.element = d.element, s.rect = s.rect || d.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var d = 0; d < this.states.length; d++) {
          var m = this.states[d];
          m.methods.start && (s.state = m, m.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var d = s.phase, m = s.preEnd, E = s.skipModifiers, g = s.rect;
        s.coords = (0, U.default)({}, s.pageCoords), s.rect = (0, U.default)({}, g);
        for (var x = E ? this.states.slice(E) : this.states, T = $o(s.coords, s.rect), O = 0; O < x.length; O++) {
          var P, k = x[O], G = k.options, R = (0, U.default)({}, s.coords), B = null;
          (P = k.methods) != null && P.set && this.shouldDo(G, m, d) && (s.state = k, B = k.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - R.x, y: s.coords.y - R.y })), T.eventProps.push(B);
        }
        T.delta.x = s.coords.x - s.pageCoords.x, T.delta.y = s.coords.y - s.pageCoords.y, T.rectDelta.left = s.rect.left - g.left, T.rectDelta.right = s.rect.right - g.right, T.rectDelta.top = s.rect.top - g.top, T.rectDelta.bottom = s.rect.bottom - g.bottom;
        var X = this.result.coords, $ = this.result.rect;
        if (X && $) {
          var re = T.rect.left !== $.left || T.rect.right !== $.right || T.rect.top !== $.top || T.rect.bottom !== $.bottom;
          T.changed = re || X.x !== T.coords.x || X.y !== T.coords.y;
        }
        return T;
      } }, { key: "applyToInteraction", value: function(s) {
        var d = this.interaction, m = s.phase, E = d.coords.cur, g = d.coords.start, x = this.result, T = this.startDelta, O = x.delta;
        m === "start" && (0, U.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[g, T], [E, O]].length; P++) {
          var k = hu([[g, T], [E, O]][P], 2), G = k[0], R = k[1];
          G.page.x += R.x, G.page.y += R.y, G.client.x += R.x, G.client.y += R.y;
        }
        var B = this.result.rectDelta, X = s.rect || d.rect;
        X.left += B.left, X.right += B.right, X.top += B.top, X.bottom += B.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(s) {
        var d = this.interaction, m = s.phase, E = s.preEnd, g = s.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: m, pageCoords: s.modifiedCoords || d.coords.cur.page }));
        if (this.result = x, !x.changed && (!g || g < this.states.length) && d.interacting())
          return false;
        if (s.modifiedCoords) {
          var T = d.coords.cur.page, O = { x: s.modifiedCoords.x - T.x, y: s.modifiedCoords.y - T.y };
          x.coords.x += O.x, x.coords.y += O.y, x.delta.x += O.x, x.delta.y += O.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var d = s.interaction, m = s.event, E = this.states;
        if (E && E.length) {
          for (var g = false, x = 0; x < E.length; x++) {
            var T = E[x];
            s.state = T;
            var O = T.options, P = T.methods, k = P.beforeEnd && P.beforeEnd(s);
            if (k)
              return this.endResult = k, false;
            g = g || !g && this.shouldDo(O, true, s.phase, true);
          }
          g && d.move({ event: m, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var d = s.interaction;
        if (this.states && this.states.length) {
          var m = (0, U.default)({ states: this.states, interactable: d.interactable, element: d.element, rect: null }, s);
          this.fillArg(m);
          for (var E = 0; E < this.states.length; E++) {
            var g = this.states[E];
            m.state = g, g.methods.stop && g.methods.stop(m);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var d = 0; d < s.length; d++) {
          var m = s[d], E = m.options, g = m.methods, x = m.name;
          this.states.push({ options: E, methods: g, index: d, name: x });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var d = s.interaction, m = d.coords, E = d.rect, g = d.modification;
        if (g.result) {
          for (var x = g.startDelta, T = g.result, O = T.delta, P = T.rectDelta, k = [[m.start, x], [m.cur, O]], G = 0; G < k.length; G++) {
            var R = hu(k[G], 2), B = R[0], X = R[1];
            B.page.x -= X.x, B.page.y -= X.y, B.client.x -= X.x, B.client.y -= X.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(s, d, m, E) {
        return !(!s || s.enabled === false || E && !s.endOnly || s.endOnly && !d || m === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(d) {
          return (0, bn.default)(d);
        }), this.result = $o((0, U.default)({}, s.result.coords), (0, U.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && Xd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function $o(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name($o, "$o");
    u($o, "Oe");
    function mu(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(mu, "mu");
    u(mu, "Ee"), yn.default = Zd;
    var gt = {};
    function qo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
    __name(qo, "qo");
    u(qo, "Te"), Object.defineProperty(gt, "__esModule", { value: true }), gt.addEventModifiers = qo, gt.default = void 0, gt.makeModifier = function(n, o) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, d = u(function(m) {
        var E = m || {};
        for (var g in E.enabled = E.enabled !== false, a)
          g in E || (E[g] = a[g]);
        var x = { options: E, methods: s, name: o, enable: function() {
          return E.enabled = true, x;
        }, disable: function() {
          return E.enabled = false, x;
        } };
        return x;
      }, "o");
      return o && typeof o == "string" && (d._defaults = a, d._methods = s), d;
    };
    var Qd = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.modification = new yn.default(o);
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
    } } }, Jd = Qd;
    gt.default = Jd;
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.defaults = void 0, Ii.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Pi = {};
    function ys(n) {
      return ys = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ys(n);
    }
    __name(ys, "ys");
    u(ys, "De");
    function Kd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Kd, "Kd");
    u(Kd, "Ae");
    function ws(n, o) {
      return ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, ws(n, o);
    }
    __name(ws, "ws");
    u(ws, "ze");
    function ef(n, o) {
      if (o && (ys(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ne(n);
    }
    __name(ef, "ef");
    u(ef, "Ce");
    function Ne(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Ne, "Ne");
    u(Ne, "Re");
    function Fo(n) {
      return Fo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Fo(n);
    }
    __name(Fo, "Fo");
    u(Fo, "Fe");
    function qe(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(qe, "qe");
    u(qe, "Xe"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.InteractEvent = void 0;
    var gu = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && ws(g, x);
      })(E, n);
      var o, a, s, d, m = (s = E, d = function() {
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
        var g, x = Fo(s);
        if (d) {
          var T = Fo(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return ef(this, g);
      });
      function E(g, x, T, O, P, k, G) {
        var R;
        (function(He, ye) {
          if (!(He instanceof ye))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), qe(Ne(R = m.call(this, g)), "relatedTarget", null), qe(Ne(R), "screenX", void 0), qe(Ne(R), "screenY", void 0), qe(Ne(R), "button", void 0), qe(Ne(R), "buttons", void 0), qe(Ne(R), "ctrlKey", void 0), qe(Ne(R), "shiftKey", void 0), qe(Ne(R), "altKey", void 0), qe(Ne(R), "metaKey", void 0), qe(Ne(R), "page", void 0), qe(Ne(R), "client", void 0), qe(Ne(R), "delta", void 0), qe(Ne(R), "rect", void 0), qe(Ne(R), "x0", void 0), qe(Ne(R), "y0", void 0), qe(Ne(R), "t0", void 0), qe(Ne(R), "dt", void 0), qe(Ne(R), "duration", void 0), qe(Ne(R), "clientX0", void 0), qe(Ne(R), "clientY0", void 0), qe(Ne(R), "velocity", void 0), qe(Ne(R), "speed", void 0), qe(Ne(R), "swipe", void 0), qe(Ne(R), "axes", void 0), qe(Ne(R), "preEnd", void 0), P = P || g.element;
        var B = g.interactable, X = (B && B.options || Ii.defaults).deltaSource, $ = (0, je.default)(B, P, T), re = O === "start", oe = O === "end", de = re ? Ne(R) : g.prevEvent, Ae = re ? g.coords.start : oe ? { page: de.page, client: de.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return R.page = (0, U.default)({}, Ae.page), R.client = (0, U.default)({}, Ae.client), R.rect = (0, U.default)({}, g.rect), R.timeStamp = Ae.timeStamp, oe || (R.page.x -= $.x, R.page.y -= $.y, R.client.x -= $.x, R.client.y -= $.y), R.ctrlKey = x.ctrlKey, R.altKey = x.altKey, R.shiftKey = x.shiftKey, R.metaKey = x.metaKey, R.button = x.button, R.buttons = x.buttons, R.target = P, R.currentTarget = P, R.preEnd = k, R.type = G || T + (O || ""), R.interactable = B, R.t0 = re ? g.pointers[g.pointers.length - 1].downTime : de.t0, R.x0 = g.coords.start.page.x - $.x, R.y0 = g.coords.start.page.y - $.y, R.clientX0 = g.coords.start.client.x - $.x, R.clientY0 = g.coords.start.client.y - $.y, R.delta = re || oe ? { x: 0, y: 0 } : { x: R[X].x - de[X].x, y: R[X].y - de[X].y }, R.dt = g.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, U.default)({}, g.coords.velocity[X]), R.speed = (0, nt.default)(R.velocity.x, R.velocity.y), R.swipe = oe || O === "inertiastart" ? R.getSwipe() : null, R;
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
      } }]) && Kd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Pi.InteractEvent = gu, Object.defineProperties(gu.prototype, { pageX: { get: function() {
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
    var Ai = {};
    function bu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(bu, "bu");
    u(bu, "We");
    function tf(n, o, a) {
      return o && bu(n.prototype, o), a && bu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(tf, "tf");
    u(tf, "Le");
    function zi(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(zi, "zi");
    u(zi, "Ue"), Object.defineProperty(Ai, "__esModule", { value: true }), Ai.PointerInfo = void 0;
    var rf = tf(u(/* @__PURE__ */ __name(function n(o, a, s, d, m) {
      (function(E, g) {
        if (!(E instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), zi(this, "id", void 0), zi(this, "pointer", void 0), zi(this, "event", void 0), zi(this, "downTime", void 0), zi(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = d, this.downTarget = m;
    }, "n"), "t"));
    Ai.PointerInfo = rf;
    var Wo, Uo, Nt = {};
    function nf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(nf, "nf");
    u(nf, "$e");
    function We(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(We, "We");
    u(We, "He"), Object.defineProperty(Nt, "__esModule", { value: true }), Nt.Interaction = void 0, Object.defineProperty(Nt, "PointerInfo", { enumerable: true, get: function() {
      return Ai.PointerInfo;
    } }), Nt.default = Nt._ProxyValues = Nt._ProxyMethods = void 0, Nt._ProxyValues = Wo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Wo || (Nt._ProxyValues = Wo = {})), Nt._ProxyMethods = Uo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Uo || (Nt._ProxyMethods = Uo = {}));
    var of = 0, yu = function() {
      function n(s) {
        var d = this, m = s.pointerType, E = s.scopeFire;
        (function(k, G) {
          if (!(k instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), We(this, "interactable", null), We(this, "element", null), We(this, "rect", null), We(this, "_rects", void 0), We(this, "edges", null), We(this, "_scopeFire", void 0), We(this, "prepared", { name: null, axis: null, edges: null }), We(this, "pointerType", void 0), We(this, "pointers", []), We(this, "downEvent", null), We(this, "downPointer", {}), We(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), We(this, "prevEvent", null), We(this, "pointerIsDown", false), We(this, "pointerWasMoved", false), We(this, "_interacting", false), We(this, "_ending", false), We(this, "_stopped", true), We(this, "_proxy", null), We(this, "simulation", null), We(this, "doMove", (0, jt.warnOnce)(function(k) {
          this.move(k);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), We(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), We(this, "_id", of++), this._scopeFire = E, this.pointerType = m;
        var g = this;
        this._proxy = {};
        var x = u(function(k) {
          Object.defineProperty(d._proxy, k, { get: function() {
            return g[k];
          } });
        }, "a");
        for (var T in Wo)
          x(T);
        var O = u(function(k) {
          Object.defineProperty(d._proxy, k, { value: function() {
            return g[k].apply(g, arguments);
          } });
        }, "l");
        for (var P in Uo)
          O(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, d, m) {
        var E = this.updatePointer(s, d, m, true), g = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: s, event: d, eventTarget: m, pointerIndex: E, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(s, d, m) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !d.options[s.name].enabled) && ((0, jt.copyAction)(this.prepared, s), this.interactable = d, this.element = m, this.rect = d.getRect(m), this.edges = this.prepared.edges ? (0, U.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, d, m) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, d, m, false);
        var E, g, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, nt.default)(E, g) > this.pointerMoveTolerance);
        var T = this.getPointerIndex(s), O = { pointer: s, pointerIndex: T, pointerInfo: this.pointers[T], event: d, type: "move", eventTarget: m, dx: E, dy: g, duplicate: x, interaction: this };
        x || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", O), x || this.simulation || (this.interacting() && (O.type = null, this.move(O)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, U.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, d, m, E) {
        var g = this.getPointerIndex(s);
        g === -1 && (g = this.updatePointer(s, d, m, false));
        var x = /cancel$/i.test(d.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(x), { pointer: s, pointerIndex: g, pointerInfo: this.pointers[g], event: d, eventTarget: m, type: x, curEventTarget: E, interaction: this }), this.simulation || this.end(d), this.removePointer(s, d);
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
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Ie.findIndex(this.pointers, function(m) {
          return m.id === d;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, d, m, E) {
        var g = K.getPointerId(s), x = this.getPointerIndex(s), T = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(d.type)), T ? T.pointer = s : (T = new Ai.PointerInfo(g, s, d, null, null), x = this.pointers.length, this.pointers.push(T)), K.setCoords(this.coords.cur, this.pointers.map(function(O) {
          return O.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, T.downTime = this.coords.cur.timeStamp, T.downTarget = m, K.pointerExtend(this.downPointer, s), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = d, this.pointerWasMoved = false)), this._updateLatestPointer(s, d, m), this._scopeFire("interactions:update-pointer", { pointer: s, event: d, eventTarget: m, down: E, pointerInfo: T, pointerIndex: x, interaction: this }), x;
      } }, { key: "removePointer", value: function(s, d) {
        var m = this.getPointerIndex(s);
        if (m !== -1) {
          var E = this.pointers[m];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: d, eventTarget: null, pointerIndex: m, pointerInfo: E, interaction: this }), this.pointers.splice(m, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, d, m) {
        this._latestPointer.pointer = s, this._latestPointer.event = d, this._latestPointer.eventTarget = m;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, d, m, E) {
        return new Pi.InteractEvent(this, s, this.prepared.name, d, this.element, m, E);
      } }, { key: "_fireEvent", value: function(s) {
        var d;
        (d = this.interactable) == null || d.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var d = s.event, m = s.phase, E = s.preEnd, g = s.type, x = this.rect;
        if (x && m === "move" && (ce.addEdges(this.edges, x, this.coords.delta[this.interactable.options.deltaSource]), x.width = x.right - x.left, x.height = x.bottom - x.top), this._scopeFire("interactions:before-action-".concat(m), s) === false)
          return false;
        var T = s.iEvent = this._createPreparedEvent(d, m, E, g);
        return this._scopeFire("interactions:action-".concat(m), s), m === "start" && (this.prevEvent = T), this._fireEvent(T), this._scopeFire("interactions:after-action-".concat(m), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], a && nf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Nt.Interaction = yu;
    var af = yu;
    Nt.default = af;
    var xn = {};
    function wu(n) {
      n.pointerIsDown && (Es(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(wu, "wu");
    u(wu, "tn");
    function xu(n) {
      xs(n.interaction);
    }
    __name(xu, "xu");
    u(xu, "en");
    function xs(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return Es(n.coords.cur, o), Es(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(xs, "xs");
    u(xs, "nn");
    function sf(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    __name(sf, "sf");
    u(sf, "rn");
    function Es(n, o) {
      var a = n.page, s = n.client, d = o.x, m = o.y;
      a.x += d, a.y += m, s.x += d, s.y += m;
    }
    __name(Es, "Es");
    u(Es, "on"), Object.defineProperty(xn, "__esModule", { value: true }), xn.addTotal = wu, xn.applyPending = xs, xn.default = void 0, Nt._ProxyMethods.offsetBy = "";
    var lf = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = sf;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return wu(n.interaction);
    }, "interactions:before-action-start": xu, "interactions:before-action-move": xu, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (xs(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, uf = lf;
    xn.default = uf;
    var Kn = {};
    function cf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(cf, "cf");
    u(cf, "un");
    function ft(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(ft, "ft");
    u(ft, "cn"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = Kn.InertiaState = void 0;
    var Eu = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ft(this, "active", false), ft(this, "isModified", false), ft(this, "smoothEnd", false), ft(this, "allowResume", false), ft(this, "modification", void 0), ft(this, "modifierCount", 0), ft(this, "modifierArg", void 0), ft(this, "startCoords", void 0), ft(this, "t0", 0), ft(this, "v0", 0), ft(this, "te", 0), ft(this, "targetOffset", void 0), ft(this, "modifiedOffset", void 0), ft(this, "currentOffset", void 0), ft(this, "lambda_v0", 0), ft(this, "one_ve_v0", 0), ft(this, "timeout", void 0), ft(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var d = this.interaction, m = Vo(d);
        if (!m || !m.enabled)
          return false;
        var E = d.coords.velocity.client, g = (0, nt.default)(E.x, E.y), x = this.modification || (this.modification = new yn.default(d));
        if (x.copyFrom(d.modification), this.t0 = d._now(), this.allowResume = m.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = d.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - d.coords.cur.timeStamp < 50 && g > m.minSpeed && g > m.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return d.modification.result.rect = null, d.offsetBy(this.targetOffset), d._doPhase({ interaction: d, event: s, phase: "inertiastart" }), d.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), d.modification.result.rect = null, this.active = true, d.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, d = this.interaction.coords.velocity.client, m = Vo(this.interaction), E = m.resistance, g = -Math.log(m.endSpeed / this.v0) / E;
        this.targetOffset = { x: (d.x - g) / E, y: (d.y - g) / E }, this.te = g, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - m.endSpeed / this.v0;
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
        var d = this;
        this.timeout = Ct.default.request(function() {
          d.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, d, m, E, g, x = this, T = this.interaction, O = Vo(T).resistance, P = (T._now() - this.t0) / 1e3;
        if (P < this.te) {
          var k, G = 1 - (Math.exp(-O * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, d = this.targetOffset.y, m = this.modifiedOffset.x, E = this.modifiedOffset.y, k = { x: Su(g = G, 0, s, m), y: Su(g, 0, d, E) }) : k = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var R = { x: k.x - this.currentOffset.x, y: k.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, T.offsetBy(R), T.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          T.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, d = this.interaction, m = d._now() - this.t0, E = Vo(d).smoothEndDuration;
        if (m < E) {
          var g = { x: Tu(m, 0, this.targetOffset.x, E), y: Tu(m, 0, this.targetOffset.y, E) }, x = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += x.x, this.currentOffset.y += x.y, d.offsetBy(x), d.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          d.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var d = s.pointer, m = s.event, E = s.eventTarget, g = this.interaction;
        g.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), g.updatePointer(d, m, E, true), g._doPhase({ interaction: g, event: m, phase: "resume" }), (0, K.copyCoords)(g.coords.prev, g.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Ct.default.cancel(this.timeout);
      } }]) && cf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Vo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    __name(Vo, "Vo");
    u(Vo, "dn"), Kn.InertiaState = Eu;
    var pf = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(xn.default), n.usePlugin(gt.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new Eu(o);
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
          d = z.parentNode(d);
        }
    }, "interactions:stop": function(n) {
      var o = n.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(n) {
      var o = n.interaction.modification;
      o.stop(n), o.start(n, n.interaction.coords.cur.page), o.applyToInteraction(n);
    }, "interactions:before-action-inertiastart": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:action-resume": gt.addEventModifiers, "interactions:action-inertiastart": gt.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    function Su(n, o, a, s) {
      var d = 1 - n;
      return d * d * o + 2 * d * n * a + n * n * s;
    }
    __name(Su, "Su");
    u(Su, "vn");
    function Tu(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    __name(Tu, "Tu");
    u(Tu, "hn");
    var df = pf;
    Kn.default = df;
    var _i = {};
    function ff(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(ff, "ff");
    u(ff, "mn");
    function Ri(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ri, "Ri");
    u(Ri, "bn");
    function Cu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name(Cu, "Cu");
    u(Cu, "xn"), Object.defineProperty(_i, "__esModule", { value: true }), _i.Eventable = void 0;
    var hf = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ri(this, "options", void 0), Ri(this, "types", {}), Ri(this, "propagationStopped", false), Ri(this, "immediatePropagationStopped", false), Ri(this, "global", void 0), this.options = (0, U.default)({}, s || {});
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var d, m = this.global;
        (d = this.types[s.type]) && Cu(s, d), !s.propagationStopped && m && (d = m[s.type]) && Cu(s, d);
      } }, { key: "on", value: function(s, d) {
        var m = (0, ve.default)(s, d);
        for (s in m)
          this.types[s] = Ie.merge(this.types[s] || [], m[s]);
      } }, { key: "off", value: function(s, d) {
        var m = (0, ve.default)(s, d);
        for (s in m) {
          var E = this.types[s];
          if (E && E.length)
            for (var g = 0; g < m[s].length; g++) {
              var x = m[s][g], T = E.indexOf(x);
              T !== -1 && E.splice(T, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && ff(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    _i.Eventable = hf;
    var Di = {};
    Object.defineProperty(Di, "__esModule", { value: true }), Di.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var Ss = {};
    Object.defineProperty(Ss, "__esModule", { value: true }), Ss.createInteractStatic = function(n) {
      var o = u(/* @__PURE__ */ __name(function a(s, d) {
        var m = n.interactables.get(s, d);
        return m || ((m = n.interactables.new(s, d)).events.global = a.globalEvents), m;
      }, "a"), "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = n, o.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o.on = (0, jt.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var m = 0; m < a.length; m++) {
            var E = a[m];
            this.on(E, s, d);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.on(g, a[g], s);
          return this;
        }
        return (0, Di.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: d }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, jt.warnOnce)(function(a, s, d) {
        if (c.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c.default.array(a)) {
          for (var m = 0; m < a.length; m++) {
            var E = a[m];
            this.off(E, s, d);
          }
          return this;
        }
        if (c.default.object(a)) {
          for (var g in a)
            this.off(g, a[g], s);
          return this;
        }
        var x;
        return (0, Di.default)(a, this.scope.actions) ? a in this.globalEvents && (x = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(x, 1) : this.scope.events.remove(this.scope.document, a, s, d), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return W.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return W.default.supportsPointerEvent;
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
    var Yo = {};
    function vf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(vf, "vf");
    u(vf, "En");
    function Gr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Gr, "Gr");
    u(Gr, "Sn"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.Interactable = void 0;
    var mf = function() {
      function n(s, d, m, E) {
        (function(g, x) {
          if (!(g instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Gr(this, "options", void 0), Gr(this, "_actions", void 0), Gr(this, "target", void 0), Gr(this, "events", new _i.Eventable()), Gr(this, "_context", void 0), Gr(this, "_win", void 0), Gr(this, "_doc", void 0), Gr(this, "_scopeEvents", void 0), Gr(this, "_rectChecker", void 0), this._actions = d.actions, this.target = s, this._context = d.context || m, this._win = (0, e.getWindow)((0, z.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = E, this.set(d);
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
        for (var E in d) {
          var g = E, x = this.options[s], T = d[g];
          g === "listeners" && this.updatePerActionListeners(s, x.listeners, T), c.default.array(T) ? x[g] = Ie.from(T) : c.default.plainObject(T) ? (x[g] = (0, U.default)(x[g] || {}, (0, bn.default)(T)), c.default.object(m.perAction[g]) && "enabled" in m.perAction[g] && (x[g].enabled = T.enabled !== false)) : c.default.bool(T) && c.default.object(m.perAction[g]) ? x[g].enabled = T : x[g] = T;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, z.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var d = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(m) {
          var E = (0, U.default)({}, d._rectChecker(m));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, d) {
        if ((0, z.trySelector)(d) || c.default.object(d)) {
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
        return this._context === s.ownerDocument || (0, z.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, d, m) {
        return !this.testIgnore(s.ignoreFrom, d, m) && this.testAllow(s.allowFrom, d, m);
      } }, { key: "testAllow", value: function(s, d, m) {
        return !s || !!c.default.element(m) && (c.default.string(s) ? (0, z.matchesUpTo)(m, s, d) : !!c.default.element(s) && (0, z.nodeContains)(s, m));
      } }, { key: "testIgnore", value: function(s, d, m) {
        return !(!s || !c.default.element(m)) && (c.default.string(s) ? (0, z.matchesUpTo)(m, s, d) : !!c.default.element(s) && (0, z.nodeContains)(s, m));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, d, m, E) {
        c.default.object(d) && !c.default.array(d) && (E = m, m = null);
        var g = s === "on" ? "add" : "remove", x = (0, ve.default)(d, m);
        for (var T in x) {
          T === "wheel" && (T = W.default.wheelEvent);
          for (var O = 0; O < x[T].length; O++) {
            var P = x[T][O];
            (0, Di.default)(T, this._actions) ? this.events[s](T, P) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, T, P, E) : this._scopeEvents[g](this.target, T, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(s, d, m) {
        return this._onOff("on", s, d, m);
      } }, { key: "off", value: function(s, d, m) {
        return this._onOff("off", s, d, m);
      } }, { key: "set", value: function(s) {
        var d = this._defaults;
        for (var m in c.default.object(s) || (s = {}), this.options = (0, bn.default)(d.base), this._actions.methodDict) {
          var E = m, g = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, U.default)((0, U.default)({}, d.perAction), d.actions[E])), this[g](s[E]);
        }
        for (var x in s)
          c.default.func(this[x]) && this[x](s[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (c.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var d = this._scopeEvents.delegatedEvents[s], m = d.length - 1; m >= 0; m--) {
              var E = d[m], g = E.selector, x = E.context, T = E.listeners;
              g === this.target && x === this._context && d.splice(m, 1);
              for (var O = T.length - 1; O >= 0; O--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, T[O][0], T[O][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && vf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Yo.Interactable = mf;
    var Xo = {};
    function gf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(gf, "gf");
    u(gf, "Mn");
    function Ts(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Ts, "Ts");
    u(Ts, "kn"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.InteractableSet = void 0;
    var bf = function() {
      function n(s) {
        var d = this;
        (function(m, E) {
          if (!(m instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ts(this, "list", []), Ts(this, "selectorMap", {}), Ts(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(m) {
          var E = m.interactable, g = E.target, x = E._context, T = c.default.string(g) ? d.selectorMap[g] : g[d.scope.id], O = Ie.findIndex(T, function(P) {
            return P.context === x;
          });
          T[O] && (T[O].context = null, T[O].interactable = null), T.splice(O, 1);
        } });
      }
      __name(n, "n");
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, d) {
        d = (0, U.default)(d || {}, { actions: this.scope.actions });
        var m = new this.scope.Interactable(s, d, this.scope.document, this.scope.events), E = { context: m._context, interactable: m };
        return this.scope.addDocument(m._doc), this.list.push(m), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(E)) : (m.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: s, options: d, interactable: m, win: this.scope._win }), m;
      } }, { key: "get", value: function(s, d) {
        var m = d && d.context || this.scope.document, E = c.default.string(s), g = E ? this.selectorMap[s] : s[this.scope.id];
        if (!g)
          return null;
        var x = Ie.find(g, function(T) {
          return T.context === m && (E || T.interactable.inContext(s));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(s, d) {
        for (var m = 0; m < this.list.length; m++) {
          var E = this.list[m], g = void 0;
          if ((c.default.string(E.target) ? c.default.element(s) && z.matchesSelector(s, E.target) : s === E.target) && E.inContext(s) && (g = d(E)), g !== void 0)
            return g;
        }
      } }]) && gf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Xo.InteractableSet = bf;
    var Zo = {};
    function yf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(yf, "yf");
    u(yf, "An");
    function Cs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Cs, "Cs");
    u(Cs, "zn");
    function Os(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var d = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(a); !(x = (m = d.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
          } finally {
            try {
              x || d.return == null || d.return();
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
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Ou(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Os, "Os");
    u(Os, "Cn");
    function Ou(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Ou, "Ou");
    u(Ou, "Rn"), Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var wf = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Cs(this, "currentTarget", void 0), Cs(this, "originalEvent", void 0), Cs(this, "type", void 0), this.originalEvent = s, (0, Wt.default)(this, s);
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
      } }]) && yf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function ki(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, U.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    __name(ki, "ki");
    u(ki, "Xn");
    var xf = { id: "events", install: function(n) {
      var o, a = [], s = {}, d = [], m = { add: E, remove: g, addDelegate: function(O, P, k, G, R) {
        var B = ki(R);
        if (!s[k]) {
          s[k] = [];
          for (var X = 0; X < d.length; X++) {
            var $ = d[X];
            E($, k, x), E($, k, T, true);
          }
        }
        var re = s[k], oe = Ie.find(re, function(de) {
          return de.selector === O && de.context === P;
        });
        oe || (oe = { selector: O, context: P, listeners: [] }, re.push(oe)), oe.listeners.push([G, B]);
      }, removeDelegate: function(O, P, k, G, R) {
        var B, X = ki(R), $ = s[k], re = false;
        if ($)
          for (B = $.length - 1; B >= 0; B--) {
            var oe = $[B];
            if (oe.selector === O && oe.context === P) {
              for (var de = oe.listeners, Ae = de.length - 1; Ae >= 0; Ae--) {
                var He = Os(de[Ae], 2), ye = He[0], Ge = He[1], Zt = Ge.capture, jr = Ge.passive;
                if (ye === G && Zt === X.capture && jr === X.passive) {
                  de.splice(Ae, 1), de.length || ($.splice(B, 1), g(P, k, x), g(P, k, T, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: T, delegatedEvents: s, documents: d, targets: a, supportsOptions: false, supportsPassive: false };
      function E(O, P, k, G) {
        var R = ki(G), B = Ie.find(a, function(X) {
          return X.eventTarget === O;
        });
        B || (B = { eventTarget: O, events: {} }, a.push(B)), B.events[P] || (B.events[P] = []), O.addEventListener && !Ie.contains(B.events[P], k) && (O.addEventListener(P, k, m.supportsOptions ? R : R.capture), B.events[P].push(k));
      }
      __name(E, "E");
      u(E, "s");
      function g(O, P, k, G) {
        var R = ki(G), B = Ie.findIndex(a, function(Ae) {
          return Ae.eventTarget === O;
        }), X = a[B];
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
                  O.removeEventListener(P, k, m.supportsOptions ? R : R.capture), re.splice(de, 1), re.length === 0 && (delete X.events[P], $ = true);
                  break;
                }
            }
            $ && !Object.keys(X.events).length && a.splice(B, 1);
          } else
            for (P in X.events)
              X.events.hasOwnProperty(P) && g(O, P, "all");
      }
      __name(g, "g");
      u(g, "l");
      function x(O, P) {
        for (var k = ki(P), G = new wf(O), R = s[O.type], B = Os(K.getEventTargets(O), 1)[0], X = B; c.default.element(X); ) {
          for (var $ = 0; $ < R.length; $++) {
            var re = R[$], oe = re.selector, de = re.context;
            if (z.matchesSelector(X, oe) && z.nodeContains(de, B) && z.nodeContains(de, X)) {
              var Ae = re.listeners;
              G.currentTarget = X;
              for (var He = 0; He < Ae.length; He++) {
                var ye = Os(Ae[He], 2), Ge = ye[0], Zt = ye[1], jr = Zt.capture, Us = Zt.passive;
                jr === k.capture && Us === k.passive && Ge(G);
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
        return m.supportsOptions = true;
      }, get passive() {
        return m.supportsPassive = true;
      } }), n.events = m, m;
    } };
    Zo.default = xf;
    var Qo = {};
    Object.defineProperty(Qo, "__esModule", { value: true }), Qo.default = void 0;
    var Jo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o = 0; o < Jo.methodOrder.length; o++) {
        var a;
        a = Jo.methodOrder[o];
        var s = Jo[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o = n.pointerType, a = n.eventType, s = n.eventTarget, d = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var m = 0; m < d.interactions.list.length; m++) {
        var E = d.interactions.list[m], g = s;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; g; ) {
            if (g === E.element)
              return E;
            g = z.parentNode(g);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o, a = n.pointerId, s = n.pointerType, d = n.eventType, m = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var E = 0; E < m.interactions.list.length; E++) {
        var g = m.interactions.list[E];
        if (g.pointerType === s) {
          if (g.simulation && !Mu(g, a))
            continue;
          if (g.interacting())
            return g;
          o || (o = g);
        }
      }
      if (o)
        return o;
      for (var x = 0; x < m.interactions.list.length; x++) {
        var T = m.interactions.list[x];
        if (!(T.pointerType !== s || /down/i.test(d) && T.simulation))
          return T;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var d = a.interactions.list[s];
        if (Mu(d, o))
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
    function Mu(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    __name(Mu, "Mu");
    u(Mu, "Ln");
    var Ef = Jo;
    Qo.default = Ef;
    var Ko = {};
    function Ms(n) {
      return Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ms(n);
    }
    __name(Ms, "Ms");
    u(Ms, "Nn");
    function Iu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var d = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(a); !(x = (m = d.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
          } finally {
            try {
              x || d.return == null || d.return();
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
            return Pu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Pu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Iu, "Iu");
    u(Iu, "qn");
    function Pu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Pu, "Pu");
    u(Pu, "Gn");
    function Sf(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Sf, "Sf");
    u(Sf, "$n");
    function Tf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Tf, "Tf");
    u(Tf, "Hn");
    function Is(n, o) {
      return Is = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Is(n, o);
    }
    __name(Is, "Is");
    u(Is, "Kn");
    function Cf(n, o) {
      if (o && (Ms(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(Cf, "Cf");
    u(Cf, "Zn");
    function ea(n) {
      return ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, ea(n);
    }
    __name(ea, "ea");
    u(ea, "Jn"), Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var Ps = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Au(n, o) {
      return function(a) {
        var s = o.interactions.list, d = K.getPointerType(a), m = Iu(K.getEventTargets(a), 2), E = m[0], g = m[1], x = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var T = 0; T < a.changedTouches.length; T++) {
            var O = a.changedTouches[T], P = { pointer: O, pointerId: K.getPointerId(O), pointerType: d, eventType: a.type, eventTarget: E, curEventTarget: g, scope: o }, k = zu(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, k]);
          }
        } else {
          var G = false;
          if (!W.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var R = 0; R < s.length && !G; R++)
              G = s[R].pointerType !== "mouse" && s[R].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!G) {
            var B = { pointer: a, pointerId: K.getPointerId(a), pointerType: d, eventType: a.type, curEventTarget: g, eventTarget: E, scope: o }, X = zu(B);
            x.push([B.pointer, B.eventTarget, B.curEventTarget, X]);
          }
        }
        for (var $ = 0; $ < x.length; $++) {
          var re = Iu(x[$], 4), oe = re[0], de = re[1], Ae = re[2];
          re[3][n](oe, a, de, Ae);
        }
      };
    }
    __name(Au, "Au");
    u(Au, "tr");
    function zu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Qo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    __name(zu, "zu");
    u(zu, "er");
    function As(n, o) {
      var a = n.doc, s = n.scope, d = n.options, m = s.interactions.docEvents, E = s.events, g = E[o];
      for (var x in s.browser.isIOS && !d.events && (d.events = { passive: false }), E.delegatedEvents)
        g(a, x, E.delegateListener), g(a, x, E.delegateUseCapture, true);
      for (var T = d && d.events, O = 0; O < m.length; O++) {
        var P = m[O];
        g(a, P.type, P.listener, T);
      }
    }
    __name(As, "As");
    u(As, "nr");
    var Of = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < Ps.length; a++) {
        var s = Ps[a];
        o[s] = Au(s, n);
      }
      var d, m = W.default.pEventTypes;
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
      u(E, "a"), (d = M.default.PointerEvent ? [{ type: m.down, listener: E }, { type: m.down, listener: o.pointerDown }, { type: m.move, listener: o.pointerMove }, { type: m.up, listener: o.pointerUp }, { type: m.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var x = 0; x < n.interactions.list.length; x++)
          n.interactions.list[x].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(R, B) {
          if (typeof B != "function" && B !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(B && B.prototype, { constructor: { value: R, writable: true, configurable: true } }), Object.defineProperty(R, "prototype", { writable: false }), B && Is(R, B);
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
          var R, B = ea(O);
          if (P) {
            var X = ea(this).constructor;
            R = Reflect.construct(B, arguments, X);
          } else
            R = B.apply(this, arguments);
          return Cf(this, R);
        });
        function G() {
          return Sf(this, G), k.apply(this, arguments);
        }
        __name(G, "G");
        return u(G, "s"), x = G, (T = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(R) {
          n.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && Tf(x.prototype, T), Object.defineProperty(x, "prototype", { writable: false }), G;
      }(Nt.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(T, O) {
          return n.fire(T, O);
        };
        var x = new n.Interaction(g);
        return n.interactions.list.push(x), x;
      }, listeners: o, docEvents: d, pointerMoveTolerance: 1 }, n.usePlugin(Jn.default);
    }, listeners: { "scope:add-document": function(n) {
      return As(n, "add");
    }, "scope:remove-document": function(n) {
      return As(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var d = o.interactions.list[s];
        d.interactable === a && (d.stop(), o.fire("interactions:destroy", { interaction: d }), d.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: As, doOnInteractions: Au, methodNames: Ps }, Mf = Of;
    Ko.default = Mf;
    var Ni = {};
    function zs(n) {
      return zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, zs(n);
    }
    __name(zs, "zs");
    u(zs, "ar");
    function Gi() {
      return Gi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(n, o, a) {
        var s = If(n, o);
        if (s) {
          var d = Object.getOwnPropertyDescriptor(s, o);
          return d.get ? d.get.call(arguments.length < 3 ? n : a) : d.value;
        }
      }, Gi.apply(this, arguments);
    }
    __name(Gi, "Gi");
    u(Gi, "sr");
    function If(n, o) {
      for (; !Object.prototype.hasOwnProperty.call(n, o) && (n = Jr(n)) !== null; )
        ;
      return n;
    }
    __name(If, "If");
    u(If, "lr");
    function _s(n, o) {
      return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, _s(n, o);
    }
    __name(_s, "_s");
    u(_s, "ur");
    function Pf(n, o) {
      if (o && (zs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n);
    }
    __name(Pf, "Pf");
    u(Pf, "cr");
    function Jr(n) {
      return Jr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Jr(n);
    }
    __name(Jr, "Jr");
    u(Jr, "fr");
    function _u(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(_u, "_u");
    u(_u, "dr");
    function Ru(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ru, "Ru");
    u(Ru, "pr");
    function Du(n, o, a) {
      return o && Ru(n.prototype, o), a && Ru(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    __name(Du, "Du");
    u(Du, "vr");
    function bt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(bt, "bt");
    u(bt, "hr"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.Scope = void 0, Ni.initScope = ku;
    var Af = function() {
      function n() {
        var o = this;
        _u(this, n), bt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), bt(this, "isInitialized", false), bt(this, "listenerMaps", []), bt(this, "browser", W.default), bt(this, "defaults", (0, bn.default)(Ii.defaults)), bt(this, "Eventable", _i.Eventable), bt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), bt(this, "interactStatic", (0, Ss.createInteractStatic)(this)), bt(this, "InteractEvent", Pi.InteractEvent), bt(this, "Interactable", void 0), bt(this, "interactables", new Xo.InteractableSet(this)), bt(this, "_win", void 0), bt(this, "document", void 0), bt(this, "window", void 0), bt(this, "documents", []), bt(this, "_plugins", { list: [], map: {} }), bt(this, "onWindowUnload", function(s) {
          return o.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(x, T) {
            if (typeof T != "function" && T !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(T && T.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), T && _s(x, T);
          })(g, s);
          var d, m, E = (d = g, m = function() {
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
            var x, T = Jr(d);
            if (m) {
              var O = Jr(this).constructor;
              x = Reflect.construct(T, arguments, O);
            } else
              x = T.apply(this, arguments);
            return Pf(this, x);
          });
          function g() {
            return _u(this, g), E.apply(this, arguments);
          }
          __name(g, "g");
          return u(g, "i"), Du(g, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(x) {
            return Gi(Jr(g.prototype), "set", this).call(this, x), a.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Gi(Jr(g.prototype), "unset", this).call(this);
            var x = a.interactables.list.indexOf(this);
            x < 0 || (Gi(Jr(g.prototype), "unset", this).call(this), a.interactables.list.splice(x, 1), a.fire("interactable:unset", { interactable: this }));
          } }]), g;
        }(Yo.Interactable);
      }
      __name(n, "n");
      return u(n, "t"), Du(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var d = this.listenerMaps[s].map[o];
          if (d && d(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : ku(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, d = this.listenerMaps.length, m = o.before.reduce(function(g, x) {
            return g[x] = true, g[Nu(x)] = true, g;
          }, {}); s < d; s++) {
            var E = this.listenerMaps[s].id;
            if (m[E] || m[Nu(E)])
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
    function ku(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), M.default.init(o), W.default.init(o), Ct.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Ko.default), n.usePlugin(Zo.default), n;
    }
    __name(ku, "ku");
    u(ku, "yr");
    function Nu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(Nu, "Nu");
    u(Nu, "mr"), Ni.Scope = Af;
    var Rs = {}, it = {};
    Object.defineProperty(it, "__esModule", { value: true });
    var zf = {};
    it.default = void 0, Object.keys(Rs).forEach(function(n) {
      n !== "default" && n !== "__esModule" && (Object.prototype.hasOwnProperty.call(zf, n) || n in it && it[n] === Rs[n] || Object.defineProperty(it, n, { enumerable: true, get: function() {
        return Rs[n];
      } }));
    });
    var Gu = new Ni.Scope(), _f = Gu.interactStatic;
    it.default = _f;
    var Rf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Gu.init(Rf);
    var ta = {};
    Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0, ta.default = function() {
    };
    var ra = {};
    Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0, ra.default = function() {
    };
    var na = {};
    function Lu(n, o) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        var d = a == null ? null : typeof Symbol != "undefined" && a[Symbol.iterator] || a["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(a); !(x = (m = d.next()).done) && (g.push(m.value), !s || g.length !== s); x = true)
              ;
          } catch (O) {
            T = true, E = O;
          } finally {
            try {
              x || d.return == null || d.return();
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
            return ju(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? ju(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Lu, "Lu");
    u(Lu, "jr");
    function ju(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(ju, "ju");
    u(ju, "Mr"), Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0, na.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var d = Lu(s, 2), m = d[0], E = d[1];
        return m in n || E in n;
      }), a = u(function(s, d) {
        for (var m = n.range, E = n.limits, g = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = n.offset, T = x === void 0 ? { x: 0, y: 0 } : x, O = { range: m, grid: n, x: null, y: null }, P = 0; P < o.length; P++) {
          var k = Lu(o[P], 2), G = k[0], R = k[1], B = Math.round((s - T.x) / n[G]), X = Math.round((d - T.y) / n[R]);
          O[G] = Math.max(g.left, Math.min(g.right, B * n[G] + T.x)), O[R] = Math.max(g.top, Math.min(g.bottom, X * n[R] + T.y));
        }
        return O;
      }, "n");
      return a.grid = n, a.coordFields = o, a;
    };
    var Li = {};
    Object.defineProperty(Li, "__esModule", { value: true }), Object.defineProperty(Li, "edgeTarget", { enumerable: true, get: function() {
      return ta.default;
    } }), Object.defineProperty(Li, "elements", { enumerable: true, get: function() {
      return ra.default;
    } }), Object.defineProperty(Li, "grid", { enumerable: true, get: function() {
      return na.default;
    } });
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var Df = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, U.default)(o.snappers || {}, Li), o.createSnapGrid = o.snappers.grid;
    } }, kf = Df;
    ia.default = kf;
    var ei = {};
    function Hu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(d) {
          return Object.getOwnPropertyDescriptor(n, d).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(Hu, "Hu");
    u(Hu, "Cr");
    function Ds(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Hu(Object(a), true).forEach(function(s) {
          Nf(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Hu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(Ds, "Ds");
    u(Ds, "Rr");
    function Nf(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    __name(Nf, "Nf");
    u(Nf, "Fr"), Object.defineProperty(ei, "__esModule", { value: true }), ei.default = ei.aspectRatio = void 0;
    var Bu = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, d = n.pageCoords, m = o.options.ratio, E = o.options, g = E.equalDelta, x = E.modifiers;
      m === "preserve" && (m = a.width / a.height), o.startCoords = (0, U.default)({}, d), o.startRect = (0, U.default)({}, a), o.ratio = m, o.equalDelta = g;
      var T = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta) {
        var O = (T.left ? 1 : -1) * (T.top ? 1 : -1);
        o.edgeSign = { x: O, y: O };
      } else
        o.edgeSign = { x: T.left ? -1 : 1, y: T.top ? -1 : 1 };
      if ((0, U.default)(n.edges, T), x && x.length) {
        var P = new yn.default(n.interaction);
        P.copyFrom(n.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(Ds({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, d = (0, U.default)({}, s), m = o.equalDelta ? Gf : Lf;
      if (m(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var E = (0, U.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, E, { x: s.x - d.x, y: s.y - d.y });
      var g = o.subModification.setAll(Ds(Ds({}, n), {}, { rect: E, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: E })), x = g.delta;
      return g.changed && (m(o, Math.abs(x.x) > Math.abs(x.y), g.coords, g.rect), (0, U.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Gf(n, o, a) {
      var s = n.startCoords, d = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * d.y : a.x = s.x + (a.y - s.y) * d.x;
    }
    __name(Gf, "Gf");
    u(Gf, "Br");
    function Lf(n, o, a, s) {
      var d = n.startRect, m = n.startCoords, E = n.ratio, g = n.edgeSign;
      if (o) {
        var x = s.width / E;
        a.y = m.y + (x - d.height) * g.y;
      } else {
        var T = s.height * E;
        a.x = m.x + (T - d.width) * g.x;
      }
    }
    __name(Lf, "Lf");
    u(Lf, "Yr"), ei.aspectRatio = Bu;
    var jf = (0, gt.makeModifier)(Bu, "aspectRatio");
    ei.default = jf;
    var En = {};
    Object.defineProperty(En, "__esModule", { value: true }), En.default = void 0;
    var $u = u(function() {
    }, "Ur");
    $u._defaults = {};
    var Hf = $u;
    En.default = Hf;
    var ks = {};
    Object.defineProperty(ks, "__esModule", { value: true }), Object.defineProperty(ks, "default", { enumerable: true, get: function() {
      return En.default;
    } });
    var zt = {};
    function Ns(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    __name(Ns, "Ns");
    u(Ns, "Gr"), Object.defineProperty(zt, "__esModule", { value: true }), zt.default = void 0, zt.getRestrictionRect = Ns, zt.restrict = void 0;
    var qu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, d = n.interaction, m = n.pageCoords, E = s.options, g = E.elementRect, x = (0, U.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && g) {
        var T = Ns(E.restriction, d, m);
        if (T) {
          var O = T.right - T.left - o.width, P = T.bottom - T.top - o.height;
          O < 0 && (x.left += O, x.right += O), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += a.left - o.width * g.left, x.top += a.top - o.height * g.top, x.right += a.right - o.width * (1 - g.right), x.bottom += a.bottom - o.height * (1 - g.bottom);
      }
      s.offset = x;
    }, set: function(n) {
      var o = n.coords, a = n.interaction, s = n.state, d = s.options, m = s.offset, E = Ns(d.restriction, a, o);
      if (E) {
        var g = ce.xywhToTlbr(E);
        o.x = Math.max(Math.min(g.right - m.right, o.x), g.left + m.left), o.y = Math.max(Math.min(g.bottom - m.bottom, o.y), g.top + m.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    zt.restrict = qu;
    var Bf = (0, gt.makeModifier)(qu, "restrict");
    zt.default = Bf;
    var Er = {};
    Object.defineProperty(Er, "__esModule", { value: true }), Er.restrictEdges = Er.default = void 0;
    var Fu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Wu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Uu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var d = a[s];
        d in n || (n[d] = o[d]);
      }
      return n;
    }
    __name(Uu, "Uu");
    u(Uu, "Qr");
    var Vu = { noInner: Fu, noOuter: Wu, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, d = n.state, m = d.options;
      if (m) {
        var E = (0, zt.getRestrictionRect)(m.offset, a, a.coords.start.page);
        o = ce.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, d.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, d = n.state, m = d.offset, E = d.options;
      if (a) {
        var g = (0, U.default)({}, o), x = (0, zt.getRestrictionRect)(E.inner, s, g) || {}, T = (0, zt.getRestrictionRect)(E.outer, s, g) || {};
        Uu(x, Fu), Uu(T, Wu), a.top ? o.y = Math.min(Math.max(T.top + m.top, g.y), x.top + m.top) : a.bottom && (o.y = Math.max(Math.min(T.bottom + m.bottom, g.y), x.bottom + m.bottom)), a.left ? o.x = Math.min(Math.max(T.left + m.left, g.x), x.left + m.left) : a.right && (o.x = Math.max(Math.min(T.right + m.right, g.x), x.right + m.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Er.restrictEdges = Vu;
    var $f = (0, gt.makeModifier)(Vu, "restrictEdges");
    Er.default = $f;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictRect = ti.default = void 0;
    var qf = (0, U.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, zt.restrict.defaults), Yu = { start: zt.restrict.start, set: zt.restrict.set, defaults: qf };
    ti.restrictRect = Yu;
    var Ff = (0, gt.makeModifier)(Yu, "restrictRect");
    ti.default = Ff;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.restrictSize = ri.default = void 0;
    var Wf = { width: -1 / 0, height: -1 / 0 }, Uf = { width: 1 / 0, height: 1 / 0 }, Xu = { start: function(n) {
      return Er.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, d = n.edges, m = a.options;
      if (d) {
        var E = ce.tlbrToXywh((0, zt.getRestrictionRect)(m.min, o, n.coords)) || Wf, g = ce.tlbrToXywh((0, zt.getRestrictionRect)(m.max, o, n.coords)) || Uf;
        a.options = { endOnly: m.endOnly, inner: (0, U.default)({}, Er.restrictEdges.noInner), outer: (0, U.default)({}, Er.restrictEdges.noOuter) }, d.top ? (a.options.inner.top = s.bottom - E.height, a.options.outer.top = s.bottom - g.height) : d.bottom && (a.options.inner.bottom = s.top + E.height, a.options.outer.bottom = s.top + g.height), d.left ? (a.options.inner.left = s.right - E.width, a.options.outer.left = s.right - g.width) : d.right && (a.options.inner.right = s.left + E.width, a.options.outer.right = s.left + g.width), Er.restrictEdges.set(n), a.options = m;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ri.restrictSize = Xu;
    var Vf = (0, gt.makeModifier)(Xu, "restrictSize");
    ri.default = Vf;
    var Gs = {};
    Object.defineProperty(Gs, "__esModule", { value: true }), Object.defineProperty(Gs, "default", { enumerable: true, get: function() {
      return En.default;
    } });
    var Kr = {};
    Object.defineProperty(Kr, "__esModule", { value: true }), Kr.snap = Kr.default = void 0;
    var Zu = { start: function(n) {
      var o, a = n.interaction, s = n.interactable, d = n.element, m = n.rect, E = n.state, g = n.startOffset, x = E.options, T = x.offsetWithOrigin ? function(k) {
        var G = k.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(k.state.options.origin, null, null, [G])) || (0, je.default)(k.interactable, G, k.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var O = (0, ce.resolveRectLike)(x.offset, s, d, [a]);
        (o = (0, ce.rectToXY)(O) || { x: 0, y: 0 }).x += T.x, o.y += T.y;
      }
      var P = x.relativePoints;
      E.offsets = m && P && P.length ? P.map(function(k, G) {
        return { index: G, relativePoint: k, x: g.left - m.width * k.x + o.x, y: g.top - m.height * k.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(n) {
      var o = n.interaction, a = n.coords, s = n.state, d = s.options, m = s.offsets, E = (0, je.default)(o.interactable, o.element, o.prepared.name), g = (0, U.default)({}, a), x = [];
      d.offsetWithOrigin || (g.x -= E.x, g.y -= E.y);
      for (var T = 0; T < m.length; T++)
        for (var O = m[T], P = g.x - O.x, k = g.y - O.y, G = 0, R = d.targets.length; G < R; G++) {
          var B, X = d.targets[G];
          (B = c.default.func(X) ? X(P, k, o._proxy, O, G) : X) && x.push({ x: (c.default.number(B.x) ? B.x : P) + O.x, y: (c.default.number(B.y) ? B.y : k) + O.y, range: c.default.number(B.range) ? B.range : d.range, source: X, index: G, offset: O });
        }
      for (var $ = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < x.length; re++) {
        var oe = x[re], de = oe.range, Ae = oe.x - g.x, He = oe.y - g.y, ye = (0, nt.default)(Ae, He), Ge = ye <= de;
        de === 1 / 0 && $.inRange && $.range !== 1 / 0 && (Ge = false), $.target && !(Ge ? $.inRange && de !== 1 / 0 ? ye / de < $.distance / $.range : de === 1 / 0 && $.range !== 1 / 0 || ye < $.distance : !$.inRange && ye < $.distance) || ($.target = oe, $.distance = ye, $.range = de, $.inRange = Ge, $.delta.x = Ae, $.delta.y = He);
      }
      return $.inRange && (a.x = $.target.x, a.y = $.target.y), s.closest = $, $;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Kr.snap = Zu;
    var Yf = (0, gt.makeModifier)(Zu, "snap");
    Kr.default = Yf;
    var Lr = {};
    function Qu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    __name(Qu, "Qu");
    u(Qu, "yo"), Object.defineProperty(Lr, "__esModule", { value: true }), Lr.snapSize = Lr.default = void 0;
    var Ju = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Kr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, d = n.state, m = n.coords, E = d.options, g = d.offsets, x = { x: m.x - g[0].x, y: m.y - g[0].y };
      d.options = (0, U.default)({}, E), d.options.targets = [];
      for (var T = 0; T < (E.targets || []).length; T++) {
        var O = (E.targets || [])[T], P = void 0;
        if (P = c.default.func(O) ? O(x.x, x.y, s) : O) {
          for (var k = 0; k < d.targetFields.length; k++) {
            var G = (o = d.targetFields[k], a = 2, function($) {
              if (Array.isArray($))
                return $;
            }(o) || function($, re) {
              var oe = $ == null ? null : typeof Symbol != "undefined" && $[Symbol.iterator] || $["@@iterator"];
              if (oe != null) {
                var de, Ae, He = [], ye = true, Ge = false;
                try {
                  for (oe = oe.call($); !(ye = (de = oe.next()).done) && (He.push(de.value), !re || He.length !== re); ye = true)
                    ;
                } catch (Zt) {
                  Ge = true, Ae = Zt;
                } finally {
                  try {
                    ye || oe.return == null || oe.return();
                  } finally {
                    if (Ge)
                      throw Ae;
                  }
                }
                return He;
              }
            }(o, a) || function($, re) {
              if ($) {
                if (typeof $ == "string")
                  return Qu($, re);
                var oe = Object.prototype.toString.call($).slice(8, -1);
                return oe === "Object" && $.constructor && (oe = $.constructor.name), oe === "Map" || oe === "Set" ? Array.from($) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Qu($, re) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = G[0], B = G[1];
            if (R in P || B in P) {
              P.x = P[R], P.y = P[B];
              break;
            }
          }
          d.options.targets.push(P);
        }
      }
      var X = Kr.snap.set(n);
      return d.options = E, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Lr.snapSize = Ju;
    var Xf = (0, gt.makeModifier)(Ju, "snapSize");
    Lr.default = Xf;
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.snapEdges = ni.default = void 0;
    var Ku = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Lr.snapSize.start(n)) : null;
    }, set: Lr.snapSize.set, defaults: (0, U.default)((0, bn.default)(Lr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ni.snapEdges = Ku;
    var Zf = (0, gt.makeModifier)(Ku, "snapEdges");
    ni.default = Zf;
    var Ls = {};
    Object.defineProperty(Ls, "__esModule", { value: true }), Object.defineProperty(Ls, "default", { enumerable: true, get: function() {
      return En.default;
    } });
    var js = {};
    Object.defineProperty(js, "__esModule", { value: true }), Object.defineProperty(js, "default", { enumerable: true, get: function() {
      return En.default;
    } });
    var ii = {};
    Object.defineProperty(ii, "__esModule", { value: true }), ii.default = void 0;
    var Qf = { aspectRatio: ei.default, restrictEdges: Er.default, restrict: zt.default, restrictRect: ti.default, restrictSize: ri.default, snapEdges: ni.default, snap: Kr.default, snapSize: Lr.default, spring: Ls.default, avoid: ks.default, transform: js.default, rubberband: Gs.default };
    ii.default = Qf;
    var oa = {};
    Object.defineProperty(oa, "__esModule", { value: true }), oa.default = void 0;
    var Jf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(gt.default), n.usePlugin(ia.default), o.modifiers = ii.default, ii.default) {
        var s = ii.default[a], d = s._defaults, m = s._methods;
        d._methods = m, n.defaults.perAction[a] = d;
      }
    } }, Kf = Jf;
    oa.default = Kf;
    var Sn = {};
    function Hs(n) {
      return Hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Hs(n);
    }
    __name(Hs, "Hs");
    u(Hs, "Io");
    function eh(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(eh, "eh");
    u(eh, "Do");
    function Bs(n, o) {
      return Bs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Bs(n, o);
    }
    __name(Bs, "Bs");
    u(Bs, "Ao");
    function th(n, o) {
      if (o && (Hs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return $s(n);
    }
    __name(th, "th");
    u(th, "zo");
    function $s(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name($s, "$s");
    u($s, "Co");
    function aa(n) {
      return aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, aa(n);
    }
    __name(aa, "aa");
    u(aa, "Ro"), Object.defineProperty(Sn, "__esModule", { value: true }), Sn.default = Sn.PointerEvent = void 0;
    var rh = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Bs(g, x);
      })(E, n);
      var o, a, s, d, m = (s = E, d = function() {
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
        var g, x = aa(s);
        if (d) {
          var T = aa(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return th(this, g);
      });
      function E(g, x, T, O, P, k) {
        var G;
        if (function(X, $) {
          if (!(X instanceof $))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), G = m.call(this, P), K.pointerExtend($s(G), T), T !== x && K.pointerExtend($s(G), x), G.timeStamp = k, G.originalEvent = T, G.type = g, G.pointerId = K.getPointerId(x), G.pointerType = K.getPointerType(x), G.target = O, G.currentTarget = null, g === "tap") {
          var R = P.getPointerIndex(x);
          G.dt = G.timeStamp - P.pointers[R].downTime;
          var B = G.timeStamp - P.tapTime;
          G.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === G.target && B < 500;
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
      } }]) && eh(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Sn.PointerEvent = Sn.default = rh;
    var ji = {};
    Object.defineProperty(ji, "__esModule", { value: true }), ji.default = void 0;
    var sa = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = sa, n.defaults.actions.pointerEvents = sa.defaults, (0, U.default)(n.actions.phaselessTypes, sa.types);
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o = n.down, a = n.pointerInfo;
      !o && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && qs(n), en({ interaction: a, pointer: s, event: d, eventTarget: m, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var d = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget, x = a.pointerIndex, T = d.pointers[x].hold, O = z.getPath(g), P = { interaction: d, pointer: m, event: E, eventTarget: g, type: "hold", targets: [], path: O, node: null }, k = 0; k < O.length; k++) {
          var G = O[k];
          P.node = G, s.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var R = 1 / 0, B = 0; B < P.targets.length; B++) {
            var X = P.targets[B].eventable.options.holdDuration;
            X < R && (R = X);
          }
          T.duration = R, T.timeout = setTimeout(function() {
            en({ interaction: d, eventTarget: g, pointer: m, event: E, type: "hold" }, s);
          }, R);
        }
      })(n, o), en(n, o);
    }, "interactions:up": function(n, o) {
      qs(n), en(n, o), function(a, s) {
        var d = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        d.pointerWasMoved || en({ interaction: d, eventTarget: g, pointer: m, event: E, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      qs(n), en(n, o);
    } }, PointerEvent: Sn.PointerEvent, fire: en, collectEventTargets: ec, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function en(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget, E = n.type, g = n.targets, x = g === void 0 ? ec(n, o) : g, T = new Sn.PointerEvent(E, s, d, m, a, o.now());
      o.fire("pointerEvents:new", { pointerEvent: T });
      for (var O = { interaction: a, pointer: s, event: d, eventTarget: m, targets: x, type: E, pointerEvent: T }, P = 0; P < x.length; P++) {
        var k = x[P];
        for (var G in k.props || {})
          T[G] = k.props[G];
        var R = (0, je.default)(k.eventable, k.node);
        if (T._subtractOrigin(R), T.eventable = k.eventable, T.currentTarget = k.node, k.eventable.fire(T), T._addOrigin(R), T.immediatePropagationStopped || T.propagationStopped && P + 1 < x.length && x[P + 1].node !== T.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", O), E === "tap") {
        var B = T.double ? en({ interaction: a, pointer: s, event: d, eventTarget: m, type: "doubletap" }, o) : T;
        a.prevTap = B, a.tapTime = B.timeStamp;
      }
      return T;
    }
    __name(en, "en");
    u(en, "Yo");
    function ec(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget, E = n.type, g = a.getPointerIndex(s), x = a.pointers[g];
      if (E === "tap" && (a.pointerWasMoved || !x || x.downTarget !== m))
        return [];
      for (var T = z.getPath(m), O = { interaction: a, pointer: s, event: d, eventTarget: m, type: E, path: T, targets: [], node: null }, P = 0; P < T.length; P++) {
        var k = T[P];
        O.node = k, o.fire("pointerEvents:collect-targets", O);
      }
      return E === "hold" && (O.targets = O.targets.filter(function(G) {
        var R;
        return G.eventable.options.holdDuration === ((R = a.pointers[g]) == null ? void 0 : R.hold.duration);
      })), O.targets;
    }
    __name(ec, "ec");
    u(ec, "Wo");
    function qs(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(qs, "qs");
    u(qs, "Lo");
    var nh = sa;
    ji.default = nh;
    var la = {};
    function ih(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(ih, "ih");
    u(ih, "No"), Object.defineProperty(la, "__esModule", { value: true }), la.default = void 0;
    var oh = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(ji.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = ih, n;
    }, { "pointerEvents:new": function(n) {
      var o = n.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o) {
      var a = n.interaction, s = n.pointerEvent, d = n.eventTarget, m = n.targets;
      if (s.type === "hold" && m.length) {
        var E = m[0].eventable.options.holdRepeatInterval;
        E <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: a, eventTarget: d, type: "hold", pointer: s, event: s }, o);
        }, E));
      }
    } }) }, ah = oh;
    la.default = ah;
    var ua = {};
    function sh(n) {
      return (0, U.default)(this.events.options, n), this;
    }
    __name(sh, "sh");
    u(sh, "Ho"), Object.defineProperty(ua, "__esModule", { value: true }), ua.default = void 0;
    var lh = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = sh;
      var a = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(s, d) {
        var m = a.call(this, s, d);
        return m === this && (this.events.options[s] = d), m;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o) {
      var a = n.targets, s = n.node, d = n.type, m = n.eventTarget;
      o.interactables.forEachMatch(s, function(E) {
        var g = E.events, x = g.options;
        g.types[d] && g.types[d].length && E.testIgnoreAllow(x, s, m) && a.push({ node: s, eventable: g, props: { interactable: E } });
      });
    }, "interactable:new": function(n) {
      var o = n.interactable;
      o.events.getRect = function(a) {
        return o.getRect(a);
      };
    }, "interactable:set": function(n, o) {
      var a = n.interactable, s = n.options;
      (0, U.default)(a.events.options, o.pointerEvents.defaults), (0, U.default)(a.events.options, s.pointerEvents || {});
    } } }, uh = lh;
    ua.default = uh;
    var ca = {};
    Object.defineProperty(ca, "__esModule", { value: true }), ca.default = void 0;
    var ch = { id: "pointer-events", install: function(n) {
      n.usePlugin(ji), n.usePlugin(la.default), n.usePlugin(ua.default);
    } }, ph = ch;
    ca.default = ph;
    var Hi = {};
    function tc(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, d, m) {
          for (var E = c.default.string(s.target) ? Ie.from(s._context.querySelectorAll(s.target)) : [s.target], g = m.window.Promise, x = g ? [] : null, T = function() {
            var P = E[O], k = s.getRect(P);
            if (!k)
              return "break";
            var G = Ie.find(m.interactions.list, function(re) {
              return re.interacting() && re.interactable === s && re.element === P && re.prepared.name === d.name;
            }), R = void 0;
            if (G)
              G.move(), x && (R = G._reflowPromise || new g(function(re) {
                G._reflowResolve = re;
              }));
            else {
              var B = (0, ce.tlbrToXywh)(k), X = { page: { x: B.x, y: B.y }, client: { x: B.x, y: B.y }, timeStamp: m.now() }, $ = K.coordsToEvent(X);
              R = function(re, oe, de, Ae, He) {
                var ye = re.interactions.new({ pointerType: "reflow" }), Ge = { interaction: ye, event: He, pointer: He, eventTarget: de, phase: "reflow" };
                ye.interactable = oe, ye.element = de, ye.prevEvent = He, ye.updatePointer(He, He, de, true), K.setZeroCoords(ye.coords.delta), (0, jt.copyAction)(ye.prepared, Ae), ye._doPhase(Ge);
                var Zt = re.window.Promise, jr = Zt ? new Zt(function(Us) {
                  ye._reflowResolve = Us;
                }) : void 0;
                return ye._reflowPromise = jr, ye.start(Ae, oe, de), ye._interacting ? (ye.move(Ge), ye.end(He)) : (ye.stop(), ye._reflowResolve()), ye.removePointer(He, He), jr;
              }(m, s, P, d, $);
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
    __name(tc, "tc");
    u(tc, "ni"), Object.defineProperty(Hi, "__esModule", { value: true }), Hi.default = void 0, Hi.install = tc;
    var dh = { id: "reflow", install: tc, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), Ie.remove(o.interactions.list, a));
    } } }, fh = dh;
    Hi.default = fh;
    var Xt = { exports: {} };
    function Fs(n) {
      return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Fs(n);
    }
    __name(Fs, "Fs");
    u(Fs, "ai"), Object.defineProperty(Xt.exports, "__esModule", { value: true }), Xt.exports.default = void 0, it.default.use(Jn.default), it.default.use(xn.default), it.default.use(ca.default), it.default.use(Kn.default), it.default.use(oa.default), it.default.use(Bo.default), it.default.use(Yt.default), it.default.use(Qr.default), it.default.use(Hi.default);
    var hh = it.default;
    if (Xt.exports.default = hh, Fs(Xt) === "object" && Xt)
      try {
        Xt.exports = it.default;
      } catch (n) {
      }
    it.default.default = it.default, Xt = Xt.exports;
    var Tn = { exports: {} };
    function Ws(n) {
      return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ws(n);
    }
    __name(Ws, "Ws");
    u(Ws, "ui"), Object.defineProperty(Tn.exports, "__esModule", { value: true }), Tn.exports.default = void 0;
    var vh = Xt.default;
    if (Tn.exports.default = vh, Ws(Tn) === "object" && Tn)
      try {
        Tn.exports = Xt.default;
      } catch (n) {
      }
    return Xt.default.default = Xt.default, Tn.exports;
  });
});
var Td = pa((Sd, iu) => {
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
      for (var h; h = p.shift(); )
        h();
    }, measure: function(p, h) {
      e("measure");
      var b = h ? p.bind(h) : p;
      return this.reads.push(b), l(this), b;
    }, mutate: function(p, h) {
      e("mutate");
      var b = h ? p.bind(h) : p;
      return this.writes.push(b), l(this), b;
    }, clear: function(p) {
      return e("clear", p), f(this.reads, p) || f(this.writes, p);
    }, extend: function(p) {
      if (e("extend", p), typeof p != "object")
        throw new Error("expected object");
      var h = Object.create(this);
      return y(h, p), h.fastdom = this, h.initialize && h.initialize(), h;
    }, catch: null };
    function l(p) {
      p.scheduled || (p.scheduled = true, p.raf(c.bind(null, p)), e("flush scheduled"));
    }
    __name(l, "l");
    u(l, "scheduleFlush");
    function c(p) {
      e("flush");
      var h = p.writes, b = p.reads, w;
      try {
        e("flushing reads", b.length), p.runTasks(b), e("flushing writes", h.length), p.runTasks(h);
      } catch (S) {
        w = S;
      }
      if (p.scheduled = false, (b.length || h.length) && l(p), w)
        if (e("task errored", w.message), p.catch)
          p.catch(w);
        else
          throw w;
    }
    __name(c, "c");
    u(c, "flush");
    function f(p, h) {
      var b = p.indexOf(h);
      return !!~b && !!p.splice(b, 1);
    }
    __name(f, "f");
    u(f, "remove");
    function y(p, h) {
      for (var b in h)
        h.hasOwnProperty(b) && (p[b] = h[b]);
    }
    __name(y, "y");
    u(y, "mixin");
    var v = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return v;
    }) : typeof iu == "object" && (iu.exports = v);
  })(typeof window != "undefined" ? window : Sd);
});
var Id = pa((au, Md) => {
  (function(r) {
    "use strict";
    var e = Math.cosh || function(p) {
      return Math.abs(p) < 1e-9 ? 1 - p : (Math.exp(p) + Math.exp(-p)) * 0.5;
    }, t = Math.sinh || function(p) {
      return Math.abs(p) < 1e-9 ? p : (Math.exp(p) - Math.exp(-p)) * 0.5;
    }, i = u(function(p) {
      var h = Math.PI / 4;
      if (-h > p || p > h)
        return Math.cos(p) - 1;
      var b = p * p;
      return b * (b * (b * (b * (b * (b * (b * (b / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), l = u(function(p, h) {
      var b = Math.abs(p), w = Math.abs(h);
      return b < 3e3 && w < 3e3 ? Math.sqrt(b * b + w * w) : (b < w ? (b = w, w = p / h) : w = h / p, b * Math.sqrt(1 + w * w));
    }, "hypot"), c = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function f(p, h) {
      var b = Math.abs(p), w = Math.abs(h);
      return p === 0 ? Math.log(w) : h === 0 ? Math.log(b) : b < 3e3 && w < 3e3 ? Math.log(p * p + h * h) * 0.5 : (p = p / 2, h = h / 2, 0.5 * Math.log(p * p + h * h) + Math.LN2);
    }
    __name(f, "f");
    u(f, "logHypot");
    var y = u(function(p, h) {
      var b = { re: 0, im: 0 };
      if (p == null)
        b.re = b.im = 0;
      else if (h !== void 0)
        b.re = p, b.im = h;
      else
        switch (typeof p) {
          case "object":
            if ("im" in p && "re" in p)
              b.re = p.re, b.im = p.im;
            else if ("abs" in p && "arg" in p) {
              if (!Number.isFinite(p.abs) && Number.isFinite(p.arg))
                return v.INFINITY;
              b.re = p.abs * Math.cos(p.arg), b.im = p.abs * Math.sin(p.arg);
            } else if ("r" in p && "phi" in p) {
              if (!Number.isFinite(p.r) && Number.isFinite(p.phi))
                return v.INFINITY;
              b.re = p.r * Math.cos(p.phi), b.im = p.r * Math.sin(p.phi);
            } else
              p.length === 2 ? (b.re = p[0], b.im = p[1]) : c();
            break;
          case "string":
            b.im = b.re = 0;
            var w = p.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, C = 0;
            w === null && c();
            for (var M = 0; M < w.length; M++) {
              var _ = w[M];
              _ === " " || _ === "	" || _ === `
` || (_ === "+" ? S++ : _ === "-" ? C++ : _ === "i" || _ === "I" ? (S + C === 0 && c(), w[M + 1] !== " " && !isNaN(w[M + 1]) ? (b.im += parseFloat((C % 2 ? "-" : "") + w[M + 1]), M++) : b.im += parseFloat((C % 2 ? "-" : "") + "1"), S = C = 0) : ((S + C === 0 || isNaN(_)) && c(), w[M + 1] === "i" || w[M + 1] === "I" ? (b.im += parseFloat((C % 2 ? "-" : "") + _), M++) : b.re += parseFloat((C % 2 ? "-" : "") + _), S = C = 0));
            }
            S + C > 0 && c();
            break;
          case "number":
            b.im = 0, b.re = p;
            break;
          default:
            c();
        }
      return isNaN(b.re) || isNaN(b.im), b;
    }, "parse");
    function v(p, h) {
      if (!(this instanceof v))
        return new v(p, h);
      var b = y(p, h);
      this.re = b.re, this.im = b.im;
    }
    __name(v, "v");
    u(v, "Complex"), v.prototype = { re: 0, im: 0, sign: function() {
      var p = this.abs();
      return new v(this.re / p, this.im / p);
    }, add: function(p, h) {
      var b = new v(p, h);
      return this.isInfinite() && b.isInfinite() ? v.NAN : this.isInfinite() || b.isInfinite() ? v.INFINITY : new v(this.re + b.re, this.im + b.im);
    }, sub: function(p, h) {
      var b = new v(p, h);
      return this.isInfinite() && b.isInfinite() ? v.NAN : this.isInfinite() || b.isInfinite() ? v.INFINITY : new v(this.re - b.re, this.im - b.im);
    }, mul: function(p, h) {
      var b = new v(p, h);
      return this.isInfinite() && b.isZero() || this.isZero() && b.isInfinite() ? v.NAN : this.isInfinite() || b.isInfinite() ? v.INFINITY : b.im === 0 && this.im === 0 ? new v(this.re * b.re, 0) : new v(this.re * b.re - this.im * b.im, this.re * b.im + this.im * b.re);
    }, div: function(p, h) {
      var b = new v(p, h);
      if (this.isZero() && b.isZero() || this.isInfinite() && b.isInfinite())
        return v.NAN;
      if (this.isInfinite() || b.isZero())
        return v.INFINITY;
      if (this.isZero() || b.isInfinite())
        return v.ZERO;
      p = this.re, h = this.im;
      var w = b.re, S = b.im, C, M;
      return S === 0 ? new v(p / w, h / w) : Math.abs(w) < Math.abs(S) ? (M = w / S, C = w * M + S, new v((p * M + h) / C, (h * M - p) / C)) : (M = S / w, C = S * M + w, new v((p + h * M) / C, (h - p * M) / C));
    }, pow: function(p, h) {
      var b = new v(p, h);
      if (p = this.re, h = this.im, b.isZero())
        return v.ONE;
      if (b.im === 0) {
        if (h === 0 && p > 0)
          return new v(Math.pow(p, b.re), 0);
        if (p === 0)
          switch ((b.re % 4 + 4) % 4) {
            case 0:
              return new v(Math.pow(h, b.re), 0);
            case 1:
              return new v(0, Math.pow(h, b.re));
            case 2:
              return new v(-Math.pow(h, b.re), 0);
            case 3:
              return new v(0, -Math.pow(h, b.re));
          }
      }
      if (p === 0 && h === 0 && b.re > 0 && b.im >= 0)
        return v.ZERO;
      var w = Math.atan2(h, p), S = f(p, h);
      return p = Math.exp(b.re * S - b.im * w), h = b.im * S + b.re * w, new v(p * Math.cos(h), p * Math.sin(h));
    }, sqrt: function() {
      var p = this.re, h = this.im, b = this.abs(), w, S;
      if (p >= 0) {
        if (h === 0)
          return new v(Math.sqrt(p), 0);
        w = 0.5 * Math.sqrt(2 * (b + p));
      } else
        w = Math.abs(h) / Math.sqrt(2 * (b - p));
      return p <= 0 ? S = 0.5 * Math.sqrt(2 * (b - p)) : S = Math.abs(h) / Math.sqrt(2 * (b + p)), new v(w, h < 0 ? -S : S);
    }, exp: function() {
      var p = Math.exp(this.re);
      return this.im === 0, new v(p * Math.cos(this.im), p * Math.sin(this.im));
    }, expm1: function() {
      var p = this.re, h = this.im;
      return new v(Math.expm1(p) * Math.cos(h) + i(h), Math.exp(p) * Math.sin(h));
    }, log: function() {
      var p = this.re, h = this.im;
      return h === 0 && p > 0, new v(f(p, h), Math.atan2(h, p));
    }, abs: function() {
      return l(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var p = this.re, h = this.im;
      return new v(Math.sin(p) * e(h), Math.cos(p) * t(h));
    }, cos: function() {
      var p = this.re, h = this.im;
      return new v(Math.cos(p) * e(h), -Math.sin(p) * t(h));
    }, tan: function() {
      var p = 2 * this.re, h = 2 * this.im, b = Math.cos(p) + e(h);
      return new v(Math.sin(p) / b, t(h) / b);
    }, cot: function() {
      var p = 2 * this.re, h = 2 * this.im, b = Math.cos(p) - e(h);
      return new v(-Math.sin(p) / b, t(h) / b);
    }, sec: function() {
      var p = this.re, h = this.im, b = 0.5 * e(2 * h) + 0.5 * Math.cos(2 * p);
      return new v(Math.cos(p) * e(h) / b, Math.sin(p) * t(h) / b);
    }, csc: function() {
      var p = this.re, h = this.im, b = 0.5 * e(2 * h) - 0.5 * Math.cos(2 * p);
      return new v(Math.sin(p) * e(h) / b, -Math.cos(p) * t(h) / b);
    }, asin: function() {
      var p = this.re, h = this.im, b = new v(h * h - p * p + 1, -2 * p * h).sqrt(), w = new v(b.re - h, b.im + p).log();
      return new v(w.im, -w.re);
    }, acos: function() {
      var p = this.re, h = this.im, b = new v(h * h - p * p + 1, -2 * p * h).sqrt(), w = new v(b.re - h, b.im + p).log();
      return new v(Math.PI / 2 - w.im, w.re);
    }, atan: function() {
      var p = this.re, h = this.im;
      if (p === 0) {
        if (h === 1)
          return new v(0, 1 / 0);
        if (h === -1)
          return new v(0, -1 / 0);
      }
      var b = p * p + (1 - h) * (1 - h), w = new v((1 - h * h - p * p) / b, -2 * p / b).log();
      return new v(-0.5 * w.im, 0.5 * w.re);
    }, acot: function() {
      var p = this.re, h = this.im;
      if (h === 0)
        return new v(Math.atan2(1, p), 0);
      var b = p * p + h * h;
      return b !== 0 ? new v(p / b, -h / b).atan() : new v(p !== 0 ? p / 0 : 0, h !== 0 ? -h / 0 : 0).atan();
    }, asec: function() {
      var p = this.re, h = this.im;
      if (p === 0 && h === 0)
        return new v(0, 1 / 0);
      var b = p * p + h * h;
      return b !== 0 ? new v(p / b, -h / b).acos() : new v(p !== 0 ? p / 0 : 0, h !== 0 ? -h / 0 : 0).acos();
    }, acsc: function() {
      var p = this.re, h = this.im;
      if (p === 0 && h === 0)
        return new v(Math.PI / 2, 1 / 0);
      var b = p * p + h * h;
      return b !== 0 ? new v(p / b, -h / b).asin() : new v(p !== 0 ? p / 0 : 0, h !== 0 ? -h / 0 : 0).asin();
    }, sinh: function() {
      var p = this.re, h = this.im;
      return new v(t(p) * Math.cos(h), e(p) * Math.sin(h));
    }, cosh: function() {
      var p = this.re, h = this.im;
      return new v(e(p) * Math.cos(h), t(p) * Math.sin(h));
    }, tanh: function() {
      var p = 2 * this.re, h = 2 * this.im, b = e(p) + Math.cos(h);
      return new v(t(p) / b, Math.sin(h) / b);
    }, coth: function() {
      var p = 2 * this.re, h = 2 * this.im, b = e(p) - Math.cos(h);
      return new v(t(p) / b, -Math.sin(h) / b);
    }, csch: function() {
      var p = this.re, h = this.im, b = Math.cos(2 * h) - e(2 * p);
      return new v(-2 * t(p) * Math.cos(h) / b, 2 * e(p) * Math.sin(h) / b);
    }, sech: function() {
      var p = this.re, h = this.im, b = Math.cos(2 * h) + e(2 * p);
      return new v(2 * e(p) * Math.cos(h) / b, -2 * t(p) * Math.sin(h) / b);
    }, asinh: function() {
      var p = this.im;
      this.im = -this.re, this.re = p;
      var h = this.asin();
      return this.re = -this.im, this.im = p, p = h.re, h.re = -h.im, h.im = p, h;
    }, acosh: function() {
      var p = this.acos();
      if (p.im <= 0) {
        var h = p.re;
        p.re = -p.im, p.im = h;
      } else {
        var h = p.im;
        p.im = -p.re, p.re = h;
      }
      return p;
    }, atanh: function() {
      var p = this.re, h = this.im, b = p > 1 && h === 0, w = 1 - p, S = 1 + p, C = w * w + h * h, M = C !== 0 ? new v((S * w - h * h) / C, (h * w + S * h) / C) : new v(p !== -1 ? p / 0 : 0, h !== 0 ? h / 0 : 0), _ = M.re;
      return M.re = f(M.re, M.im) / 2, M.im = Math.atan2(M.im, _) / 2, b && (M.im = -M.im), M;
    }, acoth: function() {
      var p = this.re, h = this.im;
      if (p === 0 && h === 0)
        return new v(0, Math.PI / 2);
      var b = p * p + h * h;
      return b !== 0 ? new v(p / b, -h / b).atanh() : new v(p !== 0 ? p / 0 : 0, h !== 0 ? -h / 0 : 0).atanh();
    }, acsch: function() {
      var p = this.re, h = this.im;
      if (h === 0)
        return new v(p !== 0 ? Math.log(p + Math.sqrt(p * p + 1)) : 1 / 0, 0);
      var b = p * p + h * h;
      return b !== 0 ? new v(p / b, -h / b).asinh() : new v(p !== 0 ? p / 0 : 0, h !== 0 ? -h / 0 : 0).asinh();
    }, asech: function() {
      var p = this.re, h = this.im;
      if (this.isZero())
        return v.INFINITY;
      var b = p * p + h * h;
      return b !== 0 ? new v(p / b, -h / b).acosh() : new v(p !== 0 ? p / 0 : 0, h !== 0 ? -h / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return v.INFINITY;
      if (this.isInfinite())
        return v.ZERO;
      var p = this.re, h = this.im, b = p * p + h * h;
      return new v(p / b, -h / b);
    }, conjugate: function() {
      return new v(this.re, -this.im);
    }, neg: function() {
      return new v(-this.re, -this.im);
    }, ceil: function(p) {
      return p = Math.pow(10, p || 0), new v(Math.ceil(this.re * p) / p, Math.ceil(this.im * p) / p);
    }, floor: function(p) {
      return p = Math.pow(10, p || 0), new v(Math.floor(this.re * p) / p, Math.floor(this.im * p) / p);
    }, round: function(p) {
      return p = Math.pow(10, p || 0), new v(Math.round(this.re * p) / p, Math.round(this.im * p) / p);
    }, equals: function(p, h) {
      var b = new v(p, h);
      return Math.abs(b.re - this.re) <= v.EPSILON && Math.abs(b.im - this.im) <= v.EPSILON;
    }, clone: function() {
      return new v(this.re, this.im);
    }, toString: function() {
      var p = this.re, h = this.im, b = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(p) < v.EPSILON && (p = 0), Math.abs(h) < v.EPSILON && (h = 0), h === 0 ? b + p : (p !== 0 ? (b += p, b += " ", h < 0 ? (h = -h, b += "-") : b += "+", b += " ") : h < 0 && (h = -h, b += "-"), h !== 1 && (b += h), b + "i"));
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
    }) : typeof au == "object" ? (Object.defineProperty(v, "__esModule", { value: true }), v.default = v, v.Complex = v, Md.exports = v) : r.Complex = v;
  })(au);
});
var rn = Cn(oc());
function ac(r) {
  let e = nn(r);
  return new rn.default(e).valueOf() * Math.PI;
}
__name(ac, "ac");
u(ac, "X");
function qi(r) {
  let e = nn(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(qi, "qi");
u(qi, "K");
function sc(r, e) {
  return new rn.default(nn(r)).valueOf() < new rn.default(nn(e)).valueOf();
}
__name(sc, "sc");
u(sc, "Y");
function lc(r, e) {
  return new rn.default(nn(r)).valueOf() > new rn.default(nn(e)).valueOf();
}
__name(lc, "lc");
u(lc, "W");
function uc(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = nn(r);
    return new rn.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
__name(uc, "uc");
u(uc, "H");
function nn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(nn, "nn");
u(nn, "l");
function cc(r) {
  try {
    let e = nn(r), t = new rn.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(cc, "cc");
u(cc, "J");
var Eh = Object.prototype.toString.call({});
var Sh = "!recursion-limit!";
var Th = 10;
function Xe(r, e = Th) {
  return Ch(r) || Oh(r, e) || Mh(r, e);
}
__name(Xe, "Xe");
u(Xe, "f");
function Ch(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(Ch, "Ch");
u(Ch, "G");
function Oh(r, e) {
  if (e === 0)
    return Sh;
  if (r instanceof Map)
    return Ih(r, e);
  if (r instanceof Set)
    return Ph(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Ah(r, e);
}
__name(Oh, "Oh");
u(Oh, "F");
function Mh(r, e) {
  let t = String(r);
  return t !== Eh ? t : zh(r, e);
}
__name(Mh, "Mh");
u(Mh, "M");
function Ih(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = Xe(i, e - 1), f = Xe(l, e - 1);
    t.push(`${c}: ${f}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(Ih, "Ih");
u(Ih, "O");
function Ph(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Xe(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
__name(Ph, "Ph");
u(Ph, "R");
function Ah(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(Xe(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
__name(Ah, "Ah");
u(Ah, "D");
function zh(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c = r[l], f = Xe(l, e - 1), y = Xe(c, e - 1);
    t.push(`${f}: ${y}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(zh, "zh");
u(zh, "N");
var Ys = 0;
var ot = u(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Ys++;
    try {
      this.details = Ys === 1 ? Xe(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Ys--;
    }
  }
}, "d");
var _h = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
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
    for (let e of _h)
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
var $i = Ht;
$i.CONSISTENT = new Ht(false, 0, 2, ", "), $i.EXACT = new Ht(true, 0, void 0, ", "), $i.MINIFIED = new Ht(true, 0, void 0, ","), $i.SIMPLIFIED = new Ht(true, 5e-4, 3, ", ");
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
    throw new ot("Unrecognized value type.", { v: r });
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
    throw new ot("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof fe)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new ot("Unrecognized value type.", { v: r });
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
    return r = r || $i.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
var tn = fe;
tn.ZERO = new fe(0, 0), tn.ONE = new fe(1, 0), tn.I = new fe(0, 1);
var va = { MAX_QUBIT_COUNT: 16 };
function ue(r, e = {}, t = document) {
  let i = new CustomEvent(r, { bubbles: true, cancelable: true, detail: e });
  return t.dispatchEvent(i);
}
__name(ue, "ue");
u(ue, "fe");
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
var el = "Swap";
var Sa = "T";
var pc = "|0>";
var dc = "|1>";
var Ta = "X";
var Ca = "Y";
var Oa = "Z";
var tl = /* @__PURE__ */ new WeakSet();
function nl(r) {
  tl.add(r), r.shadowRoot && il(r.shadowRoot), al(r), ol(r.ownerDocument);
}
__name(nl, "nl");
u(nl, "bind");
function il(r) {
  al(r), ol(r);
}
__name(il, "il");
u(il, "bindShadow");
var Ma = /* @__PURE__ */ new WeakMap();
function ol(r = document) {
  if (Ma.has(r))
    return Ma.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        rl(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && al(f);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, Ma.delete(r), t.disconnect();
  } };
  return Ma.set(r, i), i;
}
__name(ol, "ol");
u(ol, "listenForBind");
function al(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    rl(e);
  r instanceof Element && r.hasAttribute("data-action") && rl(r);
}
__name(al, "al");
u(al, "bindElements");
function Rh(r) {
  let e = r.currentTarget;
  for (let t of fc(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      tl.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && tl.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
__name(Rh, "Rh");
u(Rh, "handleEvent");
function* fc(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(fc, "fc");
u(fc, "bindings");
function rl(r) {
  for (let e of fc(r))
    r.addEventListener(e.type, Rh);
}
__name(rl, "rl");
u(rl, "bindActions");
function sl(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(sl, "sl");
u(sl, "register");
function ll(r, e) {
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
__name(ll, "ll");
u(ll, "findTarget");
function ul(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(ul, "ul");
u(ul, "findTargets");
function Oe(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return ll(this, e);
  } });
}
__name(Oe, "Oe");
u(Oe, "target");
function at(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return ul(this, e);
  } });
}
__name(at, "at");
u(at, "targets");
function cl(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(cl, "cl");
u(cl, "autoShadowRoot");
var Ia = /* @__PURE__ */ new WeakMap();
function D(r, e) {
  Ia.has(r) || Ia.set(r, []), Ia.get(r).push(e);
}
__name(D, "D");
u(D, "attr");
function pl(r, e) {
  e || (e = hc(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = vc(t), c = { configurable: true, get() {
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
__name(pl, "pl");
u(pl, "initializeAttrs");
function hc(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = Ia.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(hc, "hc");
u(hc, "getAttrNames");
function vc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(vc, "vc");
u(vc, "attrToAttributeName");
function dl(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...hc(r.prototype)].map(vc).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(dl, "dl");
u(dl, "defineObservedAttributes");
var Dh = /* @__PURE__ */ new WeakSet();
function mc(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Dh.add(r), cl(r), pl(r), nl(r), e && e.call(r), r.shadowRoot && il(r.shadowRoot);
}
__name(mc, "mc");
u(mc, "initializeInstance");
function gc(r) {
  dl(r), sl(r);
}
__name(gc, "gc");
u(gc, "initializeClass");
function Q(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    mc(this, e);
  }, gc(r);
}
__name(Q, "Q");
u(Q, "controller");
function we(r) {
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
__name(we, "we");
u(we, "ActivateableMixin");
var On = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function on(r) {
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
__name(on, "on");
u(on, "AngleableMixin");
var Fi = u((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function Ue(r) {
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
__name(Ue, "Ue");
u(Ue, "ControllableMixin");
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
  return u(e, "DisableableMixinClass"), A([D], e.prototype, "disabled", 2), e;
}
__name(Be, "Be");
u(Be, "DisableableMixin");
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
function be(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(be, "be");
u(be, "__values");
function xe(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), l, c = [], f;
  try {
    for (; (e === void 0 || e-- > 0) && !(l = i.next()).done; )
      c.push(l.value);
  } catch (y) {
    f = { error: y };
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
__name(xe, "xe");
u(xe, "__read");
function De(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
__name(De, "De");
u(De, "__spreadArray");
var ze;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(ze || (ze = {}));
var an;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(an || (an = {}));
var Wi = ze.Start;
var ai = ze.Stop;
var si = ze.Raise;
var Mn = ze.Send;
var Pa = ze.Cancel;
var bc = ze.NullEvent;
var fl = ze.Assign;
var cg = ze.After;
var pg = ze.DoneState;
var Aa = ze.Log;
var yc = ze.Init;
var Ui = ze.Invoke;
var dg = ze.ErrorExecution;
var hl = ze.ErrorPlatform;
var vl = ze.ErrorCustom;
var Vi = ze.Update;
var wc = ze.Choose;
var xc = ze.Pure;
var za = ".";
var ml = {};
var _a = "xstate.guard";
var Ec = "";
var $e = true;
var Ra;
function Xi(r, e, t) {
  t === void 0 && (t = za);
  var i = li(r, t), l = li(e, t);
  return Ee(l) ? Ee(i) ? l === i : false : Ee(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Xi(i[c], l[c]) : false;
  });
}
__name(Xi, "Xi");
u(Xi, "matchesState");
function Da(r) {
  try {
    return Ee(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Da, "Da");
u(Da, "getEventType");
function ka(r, e) {
  try {
    return Hr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(ka, "ka");
u(ka, "toStatePath");
function kh(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(kh, "kh");
u(kh, "isStateLike");
function li(r, e) {
  if (kh(r))
    return r.value;
  if (Hr(r))
    return Yi(r);
  if (typeof r != "string")
    return r;
  var t = ka(r, e);
  return Yi(t);
}
__name(li, "li");
u(li, "toStateValue");
function Yi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Yi, "Yi");
u(Yi, "pathToStateValue");
function ui(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
__name(ui, "ui");
u(ui, "mapValues");
function gl(r, e, t) {
  var i, l, c = {};
  try {
    for (var f = be(Object.keys(r)), y = f.next(); !y.done; y = f.next()) {
      var v = y.value, p = r[v];
      !t(p) || (c[v] = e(p, v, r));
    }
  } catch (h) {
    i = { error: h };
  } finally {
    try {
      y && !y.done && (l = f.return) && l.call(f);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(gl, "gl");
u(gl, "mapFilterValues");
var Sc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = be(r), f = c.next(); !f.done; f = c.next()) {
        var y = f.value;
        l = l[y];
      }
    } catch (v) {
      t = { error: v };
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
function Tc(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var f = be(r), y = f.next(); !y.done; y = f.next()) {
        var v = y.value;
        c = c[e][v];
      }
    } catch (p) {
      i = { error: p };
    } finally {
      try {
        y && !y.done && (l = f.return) && l.call(f);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return c;
  };
}
__name(Tc, "Tc");
u(Tc, "nestedPath");
function Zi(r) {
  if (!r)
    return [[]];
  if (Ee(r))
    return [[r]];
  var e = Le(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Zi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Zi, "Zi");
u(Zi, "toStatePaths");
function Le(r) {
  var e;
  return (e = []).concat.apply(e, De([], xe(r), false));
}
__name(Le, "Le");
u(Le, "flatten");
function Cc(r) {
  return Hr(r) ? r : [r];
}
__name(Cc, "Cc");
u(Cc, "toArrayStrict");
function Bt(r) {
  return r === void 0 ? [] : Cc(r);
}
__name(Bt, "Bt");
u(Bt, "toArray");
function In(r, e, t) {
  var i, l;
  if (_e(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var f = be(Object.keys(r)), y = f.next(); !y.done; y = f.next()) {
      var v = y.value, p = r[v];
      _e(p) ? c[v] = p(e, t.data) : c[v] = p;
    }
  } catch (h) {
    i = { error: h };
  } finally {
    try {
      y && !y.done && (l = f.return) && l.call(f);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c;
}
__name(In, "In");
u(In, "mapContext");
function Oc(r) {
  return /^(done|error)\./.test(r);
}
__name(Oc, "Oc");
u(Oc, "isBuiltInEvent");
function bl(r) {
  return !!(r instanceof Promise || r !== null && (_e(r) || typeof r == "object") && _e(r.then));
}
__name(bl, "bl");
u(bl, "isPromiseLike");
function Mc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(Mc, "Mc");
u(Mc, "isBehavior");
function Na(r, e) {
  var t, i, l = xe([[], []], 2), c = l[0], f = l[1];
  try {
    for (var y = be(r), v = y.next(); !v.done; v = y.next()) {
      var p = v.value;
      e(p) ? c.push(p) : f.push(p);
    }
  } catch (h) {
    t = { error: h };
  } finally {
    try {
      v && !v.done && (i = y.return) && i.call(y);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c, f];
}
__name(Na, "Na");
u(Na, "partition");
function Ic(r, e) {
  return ui(r.states, function(t, i) {
    if (!!t) {
      var l = (Ee(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: Ic(t, l) };
    }
  });
}
__name(Ic, "Ic");
u(Ic, "updateHistoryStates");
function Pc(r, e) {
  return { current: e, states: Ic(r, e) };
}
__name(Pc, "Pc");
u(Pc, "updateHistoryValue");
function yl(r, e, t, i) {
  $e || Ze(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, f) {
    var y, v, p = f.assignment, h = { state: i, action: f, _event: e }, b = {};
    if (_e(p))
      b = p(c, e.data, h);
    else
      try {
        for (var w = be(Object.keys(p)), S = w.next(); !S.done; S = w.next()) {
          var C = S.value, M = p[C];
          b[C] = _e(M) ? M(c, e.data, h) : M;
        }
      } catch (_) {
        y = { error: _ };
      } finally {
        try {
          S && !S.done && (v = w.return) && v.call(w);
        } finally {
          if (y)
            throw y.error;
        }
      }
    return Object.assign({}, c, b);
  }, r);
  return l;
}
__name(yl, "yl");
u(yl, "updateContext");
var Ze = u(function() {
}, "warn");
$e || (Ze = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function Hr(r) {
  return Array.isArray(r);
}
__name(Hr, "Hr");
u(Hr, "isArray");
function _e(r) {
  return typeof r == "function";
}
__name(_e, "_e");
u(_e, "isFunction");
function Ee(r) {
  return typeof r == "string";
}
__name(Ee, "Ee");
u(Ee, "isString");
function Ga(r, e) {
  if (!!r)
    return Ee(r) ? { type: _a, name: r, predicate: e ? e[r] : void 0 } : _e(r) ? { type: _a, name: r.name, predicate: r } : r;
}
__name(Ga, "Ga");
u(Ga, "toGuard");
function Ac(r) {
  try {
    return "subscribe" in r && _e(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(Ac, "Ac");
u(Ac, "isObservable");
var Sr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var yg = (Ra = {}, Ra[Sr] = function() {
  return this;
}, Ra[Symbol.observable] = function() {
  return this;
}, Ra);
function Tr(r) {
  return !!r && "__xstatenode" in r;
}
__name(Tr, "Tr");
u(Tr, "isMachine");
function zc(r) {
  return !!r && typeof r.send == "function";
}
__name(zc, "zc");
u(zc, "isActor");
function Qi(r, e) {
  return Ee(r) || typeof r == "number" ? V({ type: r }, e) : r;
}
__name(Qi, "Qi");
u(Qi, "toEventObject");
function st(r, e) {
  if (!Ee(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Qi(r);
  return V({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(st, "st");
u(st, "toSCXMLEvent");
function Pn(r, e) {
  var t = Cc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Tr(i) ? { target: i, event: r } : V(V({}, i), { event: r });
  });
  return t;
}
__name(Pn, "Pn");
u(Pn, "toTransitionConfigArray");
function _c(r) {
  if (!(r === void 0 || r === Ec))
    return Bt(r);
}
__name(_c, "_c");
u(_c, "normalizeTarget");
function Rc(r, e, t) {
  if (!$e) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === e)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(e, "'.").concat(l));
    }
  }
}
__name(Rc, "Rc");
u(Rc, "reportUnhandledExceptionOnInvocation");
function La(r, e, t, i, l) {
  var c = r.options.guards, f = { state: l, cond: e, _event: i };
  if (e.type === _a)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, f);
  var y = c == null ? void 0 : c[e.type];
  if (!y)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return y(t, i.data, f);
}
__name(La, "La");
u(La, "evaluateGuard");
function ja(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(ja, "ja");
u(ja, "toInvokeSource");
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
var An = st({ type: yc });
function Ha(r, e) {
  return e && e[r] || void 0;
}
__name(Ha, "Ha");
u(Ha, "getActionFunction");
function ci(r, e) {
  var t;
  if (Ee(r) || typeof r == "number") {
    var i = Ha(r, e);
    _e(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (_e(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = Ha(r.type, e);
    if (_e(i))
      t = V(V({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = V(V(V({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
__name(ci, "ci");
u(ci, "toActionObject");
var eo = u(function(r, e) {
  if (!r)
    return [];
  var t = Hr(r) ? r : [r];
  return t.map(function(i) {
    return ci(i, e);
  });
}, "toActionObjects");
function $a(r) {
  var e = ci(r);
  return V(V({ id: Ee(r) ? r : e.id }, e), { type: e.type });
}
__name($a, "$a");
u($a, "toActivityDefinition");
function Dc(r) {
  return Ee(r) ? { type: si, event: r } : wl(r, { to: an.Internal });
}
__name(Dc, "Dc");
u(Dc, "raise");
function Nh(r) {
  return { type: si, _event: st(r.event) };
}
__name(Nh, "Nh");
u(Nh, "resolveRaise");
function wl(r, e) {
  return { to: e ? e.to : void 0, type: Mn, event: _e(r) ? r : Qi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : _e(r) ? r.name : Da(r) };
}
__name(wl, "wl");
u(wl, "send");
function Gh(r, e, t, i) {
  var l = { _event: t }, c = st(_e(r.event) ? r.event(e, t.data, l) : r.event), f;
  if (Ee(r.delay)) {
    var y = i && i[r.delay];
    f = _e(y) ? y(e, t.data, l) : y;
  } else
    f = _e(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var v = _e(r.to) ? r.to(e, t.data, l) : r.to;
  return V(V({}, r), { to: v, _event: c, event: c.data, delay: f });
}
__name(Gh, "Gh");
u(Gh, "resolveSend");
var Lh = u(function(r, e, t) {
  return V(V({}, r), { value: Ee(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var kc = u(function(r) {
  return { type: Pa, sendId: r };
}, "cancel");
function Nc(r) {
  var e = $a(r);
  return { type: ze.Start, activity: e, exec: void 0 };
}
__name(Nc, "Nc");
u(Nc, "start");
function Gc(r) {
  var e = _e(r) ? r : $a(r);
  return { type: ze.Stop, activity: e, exec: void 0 };
}
__name(Gc, "Gc");
u(Gc, "stop");
function jh(r, e, t) {
  var i = _e(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: ze.Stop, activity: l };
  return c;
}
__name(jh, "jh");
u(jh, "resolveStop");
function Lc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(ze.After, "(").concat(r, ")").concat(t);
}
__name(Lc, "Lc");
u(Lc, "after");
function to(r, e) {
  var t = "".concat(ze.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(to, "to");
u(to, "done");
function pi(r, e) {
  var t = "".concat(ze.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(pi, "pi");
u(pi, "doneInvoke");
function zn(r, e) {
  var t = "".concat(ze.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(zn, "zn");
u(zn, "error");
function Ba(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var f = xe(c ? [[], l] : Na(l, function(w) {
    return w.type === fl;
  }), 2), y = f[0], v = f[1], p = y.length ? yl(t, i, y, e) : t, h = c ? [t] : void 0, b = Le(v.map(function(w) {
    var S;
    switch (w.type) {
      case si:
        return Nh(w);
      case Mn:
        var C = Gh(w, p, i, r.options.delays);
        return $e || Ze(!Ee(w.delay) || typeof C.delay == "number", "No delay reference for delay expression '".concat(w.delay, "' was found on machine '").concat(r.id, "'")), C;
      case Aa:
        return Lh(w, p, i);
      case wc: {
        var M = w, _ = (S = M.conds.find(function(ie) {
          var ne = Ga(ie.cond, r.options.guards);
          return !ne || La(r, ne, p, i, e);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!_)
          return [];
        var q = xe(Ba(r, e, p, i, eo(Bt(_), r.options.actions), c), 2), L = q[0], W = q[1];
        return p = W, h == null || h.push(p), L;
      }
      case xc: {
        var _ = w.get(p, i.data);
        if (!_)
          return [];
        var I = xe(Ba(r, e, p, i, eo(Bt(_), r.options.actions), c), 2), J = I[0], z = I[1];
        return p = z, h == null || h.push(p), J;
      }
      case ai:
        return jh(w, p, i);
      case fl: {
        p = yl(p, i, [w], e), h == null || h.push(p);
        break;
      }
      default:
        var j = ci(w, r.options.actions), Y = j.exec;
        if (Y && h) {
          var ee = h.length - 1;
          j = V(V({}, j), { exec: function(ie) {
            for (var ne = [], pe = 1; pe < arguments.length; pe++)
              ne[pe - 1] = arguments[pe];
            Y.apply(void 0, De([h[ee]], xe(ne), false));
          } });
        }
        return j;
    }
  }).filter(function(w) {
    return !!w;
  }));
  return [b, p];
}
__name(Ba, "Ba");
u(Ba, "resolveActions");
var jc = [];
var _n = u(function(r, e) {
  jc.push(r);
  var t = e(r);
  return jc.pop(), t;
}, "provide");
function Hc(r) {
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
__name(Hc, "Hc");
u(Hc, "createNullActor");
function Bc(r, e, t, i) {
  var l, c = ja(r.src), f = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], y = r.data ? In(r.data, t, i) : void 0, v = f ? $c(f, r.id, y) : Hc(r.id);
  return v.meta = r, v;
}
__name(Bc, "Bc");
u(Bc, "createInvocableActor");
function $c(r, e, t) {
  var i = Hc(e);
  if (i.deferred = true, Tr(r)) {
    var l = i.state = _n(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name($c, "$c");
u($c, "createDeferredActor");
function Hh(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(Hh, "Hh");
u(Hh, "isActor");
function qc(r) {
  return Hh(r) && "id" in r;
}
__name(qc, "qc");
u(qc, "isSpawnedActor");
function Fc(r) {
  var e;
  return V((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Sr] = function() {
    return this;
  }, e), r);
}
__name(Fc, "Fc");
u(Fc, "toActorRef");
var ro = u(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function Rn(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  }).filter(function(e) {
    return e.type !== "history";
  });
}
__name(Rn, "Rn");
u(Rn, "getChildren");
function El(r) {
  var e = [r];
  return ro(r) ? e : e.concat(Le(Rn(r).map(El)));
}
__name(El, "El");
u(El, "getAllStateNodes");
function Dn(r, e) {
  var t, i, l, c, f, y, v, p, h = new Set(r), b = xl(h), w = new Set(e);
  try {
    for (var S = be(w), C = S.next(); !C.done; C = S.next())
      for (var M = C.value, _ = M.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (ee) {
    t = { error: ee };
  } finally {
    try {
      C && !C.done && (i = S.return) && i.call(S);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var q = xl(w);
  try {
    for (var L = be(w), W = L.next(); !W.done; W = L.next()) {
      var M = W.value;
      if (M.type === "compound" && (!q.get(M) || !q.get(M).length))
        b.get(M) ? b.get(M).forEach(function(ie) {
          return w.add(ie);
        }) : M.initialStateNodes.forEach(function(ie) {
          return w.add(ie);
        });
      else if (M.type === "parallel")
        try {
          for (var I = (f = void 0, be(Rn(M))), J = I.next(); !J.done; J = I.next()) {
            var z = J.value;
            w.has(z) || (w.add(z), b.get(z) ? b.get(z).forEach(function(ie) {
              return w.add(ie);
            }) : z.initialStateNodes.forEach(function(ie) {
              return w.add(ie);
            }));
          }
        } catch (ie) {
          f = { error: ie };
        } finally {
          try {
            J && !J.done && (y = I.return) && y.call(I);
          } finally {
            if (f)
              throw f.error;
          }
        }
    }
  } catch (ee) {
    l = { error: ee };
  } finally {
    try {
      W && !W.done && (c = L.return) && c.call(L);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var j = be(w), Y = j.next(); !Y.done; Y = j.next())
      for (var M = Y.value, _ = M.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (ee) {
    v = { error: ee };
  } finally {
    try {
      Y && !Y.done && (p = j.return) && p.call(j);
    } finally {
      if (v)
        throw v.error;
    }
  }
  return w;
}
__name(Dn, "Dn");
u(Dn, "getConfiguration");
function Wc(r, e) {
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
    l[c.key] = Wc(c, e);
  }), l;
}
__name(Wc, "Wc");
u(Wc, "getValueFromAdj");
function xl(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = be(r), c = l.next(); !c.done; c = l.next()) {
      var f = c.value;
      i.has(f) || i.set(f, []), f.parent && (i.has(f.parent) || i.set(f.parent, []), i.get(f.parent).push(f));
    }
  } catch (y) {
    e = { error: y };
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
__name(xl, "xl");
u(xl, "getAdjList");
function Uc(r, e) {
  var t = Dn([r], e);
  return Wc(r, xl(t));
}
__name(Uc, "Uc");
u(Uc, "getValue");
function no(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(no, "no");
u(no, "has");
function Vc(r) {
  return De([], xe(new Set(Le(De([], xe(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(Vc, "Vc");
u(Vc, "nextEvents");
function kn(r, e) {
  return e.type === "compound" ? Rn(e).some(function(t) {
    return t.type === "final" && no(r, t);
  }) : e.type === "parallel" ? Rn(e).every(function(t) {
    return kn(r, t);
  }) : false;
}
__name(kn, "kn");
u(kn, "isInFinalState");
function Yc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(Yc, "Yc");
u(Yc, "getMeta");
function Sl(r) {
  return new Set(Le(r.map(function(e) {
    return e.tags;
  })));
}
__name(Sl, "Sl");
u(Sl, "getTagsFromConfiguration");
function Tl(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (Ee(r) || Ee(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Tl(r[l], e[l]);
  });
}
__name(Tl, "Tl");
u(Tl, "stateValuesEqual");
function Xc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(Xc, "Xc");
u(Xc, "isStateConfig");
function Zc(r, e) {
  var t = r.exec, i = V(V({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(Zc, "Zc");
u(Zc, "bindActionToState");
var vr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = ml, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || ml, this.meta = Yc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Vc(t.configuration);
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
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), Ee(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, De([], xe(l.map(function(c) {
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
    return V(V({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return Xi(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    $e && Ze(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Bh = { deferEvents: false };
var Cl = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Bh), e);
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
var Ol = /* @__PURE__ */ new Map();
var $h = 0;
var io = { bookId: function() {
  return "x:".concat($h++);
}, register: function(r, e) {
  return Ol.set(r, e), r;
}, get: function(r) {
  return Ol.get(r);
}, free: function(r) {
  Ol.delete(r);
} };
function qa() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  $e || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name(qa, "qa");
u(qa, "getGlobal");
function qh() {
  var r = qa();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(qh, "qh");
u(qh, "getDevTools");
function Qc(r) {
  if (!!qa()) {
    var e = qh();
    e && e.register(r);
  }
}
__name(Qc, "Qc");
u(Qc, "registerService");
function Jc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c = false, f = u(function() {
    if (!c) {
      for (c = true; l.length > 0; ) {
        var p = l.shift();
        t = r.transition(t, p, v), i.forEach(function(h) {
          return h.next(t);
        });
      }
      c = false;
    }
  }, "flush"), y = Fc({ id: e.id, send: function(p) {
    l.push(p), f();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(p, h, b) {
    var w = Ji(p, h, b);
    return i.add(w), w.next(t), { unsubscribe: function() {
      i.delete(w);
    } };
  } }), v = { parent: e.parent, self: y, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(v) : t, y;
}
__name(Jc, "Jc");
u(Jc, "spawnBehavior");
var Fh = { sync: false, autoForward: false };
var yt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(yt || (yt = {}));
var Kc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = yt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(h, b) {
      if (Hr(h))
        return i.batch(h), i.state;
      var w = st(Qi(h, b));
      if (i.status === yt.Stopped)
        return $e || Ze(false, 'Event "'.concat(w.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(w.data))), i.state;
      if (i.status !== yt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(w.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(w.data)));
      return i.scheduler.schedule(function() {
        i.forward(w);
        var S = i.nextState(w);
        i.update(S, w);
      }), i._state;
    }, this.sendTo = function(h, b) {
      var w = i.parent && (b === an.Parent || i.parent.id === b), S = w ? i.parent : Ee(b) ? i.children.get(b) || io.get(b) : zc(b) ? b : void 0;
      if (!S) {
        if (!w)
          throw new Error("Unable to send event to child '".concat(b, "' from service '").concat(i.id, "'."));
        $e || Ze(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(h.type));
        return;
      }
      "machine" in S ? S.send(V(V({}, h), { name: h.name === vl ? "".concat(zn(i.id)) : h.name, origin: i.sessionId })) : S.send(h.data);
    };
    var l = V(V({}, r.defaultOptions), t), c = l.clock, f = l.logger, y = l.parent, v = l.id, p = v !== void 0 ? v : e.id;
    this.id = p, this.logger = f, this.clock = c, this.parent = y, this.options = l, this.scheduler = new Cl({ deferEvents: this.options.deferEvents }), this.sessionId = io.bookId();
  }
  __name(r, "r");
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : _n(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return $e || Ze(this.status !== yt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = be(e.actions), f = c.next(); !f.done; f = c.next()) {
        var y = f.value;
        this.exec(y, e, t);
      }
    } catch (v) {
      i = { error: v };
    } finally {
      try {
        f && !f.done && (l = c.return) && l.call(c);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c, f, y, v, p, h, b = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(ee) {
      b.state.children[ee.id] = ee;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var w = be(this.eventListeners), S = w.next(); !S.done; S = w.next()) {
          var C = S.value;
          C(e.event);
        }
      } catch (ee) {
        i = { error: ee };
      } finally {
        try {
          S && !S.done && (l = w.return) && l.call(w);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var M = be(this.listeners), _ = M.next(); !_.done; _ = M.next()) {
        var C = _.value;
        C(e, e.event);
      }
    } catch (ee) {
      c = { error: ee };
    } finally {
      try {
        _ && !_.done && (f = M.return) && f.call(M);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var q = be(this.contextListeners), L = q.next(); !L.done; L = q.next()) {
        var W = L.value;
        W(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (ee) {
      y = { error: ee };
    } finally {
      try {
        L && !L.done && (v = q.return) && v.call(q);
      } finally {
        if (y)
          throw y.error;
      }
    }
    var I = kn(e.configuration || [], this.machine);
    if (this.state.configuration && I) {
      var J = e.configuration.find(function(ee) {
        return ee.type === "final" && ee.parent === b.machine;
      }), z = J && J.doneData ? In(J.doneData, e.context, t) : void 0;
      try {
        for (var j = be(this.doneListeners), Y = j.next(); !Y.done; Y = j.next()) {
          var C = Y.value;
          C(pi(this.id, z));
        }
      } catch (ee) {
        p = { error: ee };
      } finally {
        try {
          Y && !Y.done && (h = j.return) && h.call(j);
        } finally {
          if (p)
            throw p.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(e) {
    return this.listeners.add(e), this.status === yt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c, f = i;
    return typeof e == "function" ? c = e : (c = e.next.bind(e), f = e.complete.bind(e)), this.listeners.add(c), this.status !== yt.NotStarted && c(this.state), f && (this.status === yt.Stopped ? f() : this.onDone(f)), { unsubscribe: function() {
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
    if (this.status === yt.Running)
      return this;
    this.machine._init(), io.register(this.sessionId, this), this.initialized = true, this.status = yt.Running;
    var i = e === void 0 ? this.initialState : _n(this, function() {
      return Xc(e) ? t.machine.resolveState(e) : t.machine.resolveState(vr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, An);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, f, y, v, p, h, b = this;
    try {
      for (var w = be(this.listeners), S = w.next(); !S.done; S = w.next()) {
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
      for (var M = be(this.stopListeners), _ = M.next(); !_.done; _ = M.next()) {
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
      for (var q = be(this.contextListeners), L = q.next(); !L.done; L = q.next()) {
        var C = L.value;
        this.contextListeners.delete(C);
      }
    } catch (Y) {
      c = { error: Y };
    } finally {
      try {
        L && !L.done && (f = q.return) && f.call(q);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var W = be(this.doneListeners), I = W.next(); !I.done; I = W.next()) {
        var C = I.value;
        this.doneListeners.delete(C);
      }
    } catch (Y) {
      y = { error: Y };
    } finally {
      try {
        I && !I.done && (v = W.return) && v.call(W);
      } finally {
        if (y)
          throw y.error;
      }
    }
    if (!this.initialized)
      return this;
    De([], xe(this.state.configuration), false).sort(function(Y, ee) {
      return ee.order - Y.order;
    }).forEach(function(Y) {
      var ee, ie;
      try {
        for (var ne = be(Y.definition.exit), pe = ne.next(); !pe.done; pe = ne.next()) {
          var U = pe.value;
          b.exec(U, b.state);
        }
      } catch (ce) {
        ee = { error: ce };
      } finally {
        try {
          pe && !pe.done && (ie = ne.return) && ie.call(ne);
        } finally {
          if (ee)
            throw ee.error;
        }
      }
    }), this.children.forEach(function(Y) {
      _e(Y.stop) && Y.stop();
    }), this.children.clear();
    try {
      for (var J = be(Object.keys(this.delayedEventsMap)), z = J.next(); !z.done; z = J.next()) {
        var j = z.value;
        this.clock.clearTimeout(this.delayedEventsMap[j]);
      }
    } catch (Y) {
      p = { error: Y };
    } finally {
      try {
        z && !z.done && (h = J.return) && h.call(J);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new Cl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = yt.Stopped, this._initialState = void 0, io.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === yt.NotStarted && this.options.deferEvents)
      $e || Ze(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== yt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, f = false, y = [], v = u(function(w) {
        var S = st(w);
        t.forward(S), c = _n(t, function() {
          return t.machine.transition(c, S);
        }), y.push.apply(y, De([], xe(c.actions.map(function(C) {
          return Zc(C, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var p = be(e), h = p.next(); !h.done; h = p.next()) {
          var b = h.value;
          v(b);
        }
      } catch (w) {
        i = { error: w };
      } finally {
        try {
          h && !h.done && (l = p.return) && l.call(p);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c.changed = f, c.actions = y, t.update(c, st(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = st(e);
    if (i.name.indexOf(hl) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(hl) === 0;
    }))
      throw i.data.data;
    var l = _n(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = be(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
        var f = c.value, y = this.children.get(f);
        if (!y)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(f, "'."));
        y.send(e);
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
    var l = t.context, c = t._event, f = e.exec || Ha(e.type, i), y = _e(f) ? f : f ? f.exec : e.exec;
    if (y)
      try {
        return y(l, c.data, { action: e, state: this.state, _event: c });
      } catch (I) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: I }), I;
      }
    switch (e.type) {
      case Mn:
        var v = e;
        if (typeof v.delay == "number") {
          this.defer(v);
          return;
        } else
          v.to ? this.sendTo(v._event, v.to) : this.send(v._event);
        break;
      case Pa:
        this.cancel(e.sendId);
        break;
      case Wi: {
        if (this.status !== yt.Running)
          return;
        var p = e.activity;
        if (!this.state.activities[p.id || p.type])
          break;
        if (p.type === ze.Invoke) {
          var h = ja(p.src), b = this.machine.options.services ? this.machine.options.services[h.type] : void 0, w = p.id, S = p.data;
          $e || Ze(!("forward" in p), "`forward` property is deprecated (found in invocation of '".concat(p.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var C = "autoForward" in p ? p.autoForward : !!p.forward;
          if (!b) {
            $e || Ze(false, "No service found for invocation '".concat(p.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var M = S ? In(S, l, c) : void 0;
          if (typeof b == "string")
            return;
          var _ = _e(b) ? b(l, c.data, { data: M, src: h, meta: p.meta }) : b;
          if (!_)
            return;
          var q = void 0;
          Tr(_) && (_ = M ? _.withContext(M) : _, q = { autoForward: C }), this.spawn(_, w, q);
        } else
          this.spawnActivity(p);
        break;
      }
      case ai: {
        this.stopChild(e.activity.id);
        break;
      }
      case Aa:
        var L = e.label, W = e.value;
        L ? this.logger(L, W) : this.logger(W);
        break;
      default:
        $e || Ze(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), _e(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (bl(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (_e(e))
      return this.spawnCallback(e, t);
    if (qc(e))
      return this.spawnActor(e, t);
    if (Ac(e))
      return this.spawnObservable(e, t);
    if (Tr(e))
      return this.spawnMachine(e, V(V({}, i), { id: t }));
    if (Mc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, V(V({}, this.options), { parent: this, id: t.id || e.id })), c = V(V({}, Fh), t);
    c.sync && l.onTransition(function(y) {
      i.send(Vi, { state: y, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(y) {
      i.removeChild(l.id), i.send(st(y, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Jc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, f;
    e.then(function(v) {
      c || (f = v, l.removeChild(t), l.send(st(pi(t, v), { origin: t })));
    }, function(v) {
      if (!c) {
        l.removeChild(t);
        var p = zn(t, v);
        try {
          l.send(st(p, { origin: t }));
        } catch (h) {
          Rc(v, h, t), l.devTools && l.devTools.send(p, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var y = (i = { id: t, send: function() {
    }, subscribe: function(v, p, h) {
      var b = Ji(v, p, h), w = false;
      return e.then(function(S) {
        w || (b.next(S), !w && b.complete());
      }, function(S) {
        w || b.error(S);
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
    return this.children.set(t, y), y;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c = false, f = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set(), v, p = u(function(w) {
      v = w, y.forEach(function(S) {
        return S(w);
      }), !c && l.send(st(w, { origin: t }));
    }, "receive"), h;
    try {
      h = e(p, function(w) {
        f.add(w);
      });
    } catch (w) {
      this.send(zn(t, w));
    }
    if (bl(h))
      return this.spawnPromise(h, t);
    var b = (i = { id: t, send: function(w) {
      return f.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = Ji(w);
      return y.add(S.next), { unsubscribe: function() {
        y.delete(S.next);
      } };
    }, stop: function() {
      c = true, _e(h) && h();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return v;
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, b), b;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c, f = e.subscribe(function(v) {
      c = v, l.send(st(v, { origin: t }));
    }, function(v) {
      l.removeChild(t), l.send(st(zn(t, v), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(st(pi(t), { origin: t }));
    }), y = (i = { id: t, send: function() {
    }, subscribe: function(v, p, h) {
      return e.subscribe(v, p, h);
    }, stop: function() {
      return f.unsubscribe();
    }, getSnapshot: function() {
      return c;
    }, toJSON: function() {
      return { id: t };
    } }, i[Sr] = function() {
      return this;
    }, i);
    return this.children.set(t, y), y;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      $e || Ze(false, "No implementation found for activity '".concat(e.type, "'"));
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
    var e = qa();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: V({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Qc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[Sr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === yt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = et, r;
}();
function et(r, e) {
  var t = new Kc(r, e);
  return t;
}
__name(et, "et");
u(et, "interpret");
function Wh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(Wh, "Wh");
u(Wh, "toInvokeSource");
function oo(r) {
  return V(V({ type: Ui }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = oi(r, ["onDone", "onError"]);
    return V(V({}, e), { type: Ui, src: Wh(r.src) });
  } });
}
__name(oo, "oo");
u(oo, "toInvokeDefinition");
var hi = "";
var Ml = "#";
var ao = "*";
var di = {};
var fi = u(function(r) {
  return r[0] === Ml;
}, "isStateId");
var Uh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Vh = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (Ee(c.target) || Tr(c.target));
  }), l = e === hi ? "the transient event" : "event '".concat(e, "'");
  Ze(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var ep = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var f;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Uh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : za), this.id = this.config.id || De([this.machine.key], xe(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, $e || Ze(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ui(this.config.states, function(p, h) {
      var b, w = new r(p, {}, void 0, { parent: c, key: h });
      return Object.assign(c.idMap, V((b = {}, b[w.id] = w, b), w.idMap)), w;
    }) : di;
    var y = 0;
    function v(p) {
      var h, b;
      p.order = y++;
      try {
        for (var w = be(Rn(p)), S = w.next(); !S.done; S = w.next()) {
          var C = S.value;
          v(C);
        }
      } catch (M) {
        h = { error: M };
      } finally {
        try {
          S && !S.done && (b = w.return) && b.call(w);
        } finally {
          if (h)
            throw h.error;
        }
      }
    }
    __name(v, "v");
    u(v, "dfs"), v(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(p) {
      var h = p.event;
      return h === hi;
    }) : hi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Bt(this.config.entry || this.config.onEntry).map(function(p) {
      return ci(p);
    }), this.onExit = Bt(this.config.exit || this.config.onExit).map(function(p) {
      return ci(p);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Bt(this.config.invoke).map(function(p, h) {
      var b, w;
      if (Tr(p)) {
        var S = Ki(c.id, h);
        return c.machine.options.services = V((b = {}, b[S] = p, b), c.machine.options.services), oo({ src: S, id: S });
      } else if (Ee(p.src)) {
        var S = p.id || Ki(c.id, h);
        return oo(V(V({}, p), { id: S, src: p.src }));
      } else if (Tr(p.src) || _e(p.src)) {
        var S = p.id || Ki(c.id, h);
        return c.machine.options.services = V((w = {}, w[S] = p.src, w), c.machine.options.services), oo(V(V({ id: S }, p), { src: S }));
      } else {
        var C = p.src;
        return oo(V(V({ id: Ki(c.id, h) }, p), { src: C }));
      }
    }), this.activities = Bt(this.config.activities).concat(this.invoke).map(function(p) {
      return $a(p);
    }), this.transition = this.transition.bind(this), this.tags = Bt(this.config.tags);
  }
  __name(r, "r");
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || El(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c = i.activities, f = i.guards, y = i.services, v = i.delays;
    return new r(this.config, { actions: V(V({}, l), e.actions), activities: V(V({}, c), e.activities), guards: V(V({}, f), e.guards), services: V(V({}, y), e.services), delays: V(V({}, v), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return _e(this._context) ? this._context() : this._context;
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
      var y = _e(c) ? "".concat(e.id, ":delay[").concat(f, "]") : c, v = Lc(y, e.id);
      return e.onEntry.push(wl(v, { delay: c })), e.onExit.push(kc(v)), v;
    }, "mutateEntryExit"), l = Hr(t) ? t.map(function(c, f) {
      var y = i(c.delay, f);
      return V(V({}, c), { event: y });
    }) : Le(Object.keys(t).map(function(c, f) {
      var y = t[c], v = Ee(y) ? { target: y } : y, p = isNaN(+c) ? c : +c, h = i(p, f);
      return Bt(v).map(function(b) {
        return V(V({}, b), { event: h, delay: p });
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
    var l = e instanceof vr ? e.value : li(e, this.delimiter);
    if (Ee(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var f = Object.keys(l), y = [this];
    return y.push.apply(y, De([], xe(Le(f.map(function(v) {
      return i.getStateNode(v).getStateNodes(l[v]);
    }))), false)), y;
  }, r.prototype.handles = function(e) {
    var t = Da(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof vr ? e : vr.create(e), i = Array.from(Dn([], this.getStateNodes(t.value)));
    return new vr(V(V({}, t), { value: this.resolve(t.value), configuration: i, done: kn(i, this), tags: Sl(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), f = c._transition(e[l[0]], t, i);
    return !f || !f.transitions.length ? this.next(t, i) : f;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, f = {};
    try {
      for (var y = be(Object.keys(e)), v = y.next(); !v.done; v = y.next()) {
        var p = v.value, h = e[p];
        if (!!h) {
          var b = this.getStateNode(p), w = b._transition(h, t, i);
          w && (f[p] = w);
        }
      }
    } catch (L) {
      l = { error: L };
    } finally {
      try {
        v && !v.done && (c = y.return) && c.call(y);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var S = Object.keys(f).map(function(L) {
      return f[L];
    }), C = Le(S.map(function(L) {
      return L.transitions;
    })), M = S.some(function(L) {
      return L.transitions.length > 0;
    });
    if (!M)
      return this.next(t, i);
    var _ = Le(S.map(function(L) {
      return L.entrySet;
    })), q = Le(Object.keys(f).map(function(L) {
      return f[L].configuration;
    }));
    return { transitions: C, entrySet: _, exitSet: Le(S.map(function(L) {
      return L.exitSet;
    })), configuration: q, source: t, actions: Le(Object.keys(f).map(function(L) {
      return f[L].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return Ee(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, st(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, f = t.name, y = [], v = [], p;
    try {
      for (var h = be(this.getCandidates(f)), b = h.next(); !b.done; b = h.next()) {
        var w = b.value, S = w.cond, C = w.in, M = e.context, _ = C ? Ee(C) && fi(C) ? e.matches(li(this.getStateNodeById(C).path, this.delimiter)) : Xi(li(C, this.delimiter), Sc(this.path.slice(0, -2))(e.value)) : true, q = false;
        try {
          q = !S || La(this.machine, S, M, t, e);
        } catch (J) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(J.message));
        }
        if (q && _) {
          w.target !== void 0 && (v = w.target), y.push.apply(y, De([], xe(w.actions), false)), p = w;
          break;
        }
      }
    } catch (J) {
      i = { error: J };
    } finally {
      try {
        b && !b.done && (l = h.return) && l.call(h);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!p) {
      if (!v.length)
        return { transitions: [p], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: y };
      var L = Le(v.map(function(J) {
        return c.getRelativeStateNodes(J, e.historyValue);
      })), W = !!p.internal, I = W ? [] : Le(L.map(function(J) {
        return c.nodesFromChild(J);
      }));
      return { transitions: [p], entrySet: I, exitSet: W ? [] : [this], configuration: L, source: e, actions: y };
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
    var c, f, y, v, p = Dn([], l ? this.getStateNodes(l.value) : [this]), h = e.configuration.length ? Dn(p, e.configuration) : p;
    try {
      for (var b = be(h), w = b.next(); !w.done; w = b.next()) {
        var S = w.value;
        no(p, S) || e.entrySet.push(S);
      }
    } catch (j) {
      c = { error: j };
    } finally {
      try {
        w && !w.done && (f = b.return) && f.call(b);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var C = be(p), M = C.next(); !M.done; M = C.next()) {
        var S = M.value;
        (!no(h, S) || no(e.exitSet, S.parent)) && e.exitSet.push(S);
      }
    } catch (j) {
      y = { error: j };
    } finally {
      try {
        M && !M.done && (v = C.return) && v.call(C);
      } finally {
        if (y)
          throw y.error;
      }
    }
    var _ = Le(e.entrySet.map(function(j) {
      var Y = [];
      if (j.type !== "final")
        return Y;
      var ee = j.parent;
      if (!ee.parent)
        return Y;
      Y.push(to(j.id, j.doneData), to(ee.id, j.doneData ? In(j.doneData, t, i) : void 0));
      var ie = ee.parent;
      return ie.type === "parallel" && Rn(ie).every(function(ne) {
        return kn(e.configuration, ne);
      }) && Y.push(to(ie.id)), Y;
    }));
    e.exitSet.sort(function(j, Y) {
      return Y.order - j.order;
    }), e.entrySet.sort(function(j, Y) {
      return j.order - Y.order;
    });
    var q = new Set(e.entrySet), L = new Set(e.exitSet), W = xe([Le(Array.from(q).map(function(j) {
      return De(De([], xe(j.activities.map(function(Y) {
        return Nc(Y);
      })), false), xe(j.onEntry), false);
    })).concat(_.map(Dc)), Le(Array.from(L).map(function(j) {
      return De(De([], xe(j.onExit), false), xe(j.activities.map(function(Y) {
        return Gc(Y);
      })), false);
    }))], 2), I = W[0], J = W[1], z = eo(J.concat(e.actions).concat(I), this.machine.options.actions);
    return z;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = st(t), c;
    if (e instanceof vr)
      c = i === void 0 ? e : this.resolveState(vr.from(e, i));
    else {
      var f = Ee(e) ? this.resolve(Yi(this.getResolvedPath(e))) : this.resolve(e), y = i != null ? i : this.machine.context;
      c = this.resolveState(vr.from(f, y));
    }
    if (!$e && l.name === ao)
      throw new Error("An event cannot have the wildcard type ('".concat(ao, "')"));
    if (this.strict && !this.events.includes(l.name) && !Oc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var v = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, p = Dn([], this.getStateNodes(c.value)), h = v.configuration.length ? Dn(p, v.configuration) : p;
    return v.configuration = De([], xe(h), false), this.resolveTransition(v, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], xe(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, f, y = this;
    l === void 0 && (l = An);
    var v = e.configuration, p = !t || e.transitions.length > 0, h = p ? Uc(this.machine, v) : void 0, b = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, w = this.getActions(e, i, l, t), S = t ? V({}, t.activities) : {};
    try {
      for (var C = be(w), M = C.next(); !M.done; M = C.next()) {
        var _ = M.value;
        _.type === Wi ? S[_.activity.id || _.activity.type] = _ : _.type === ai && (S[_.activity.id || _.activity.type] = false);
      }
    } catch (ve) {
      c = { error: ve };
    } finally {
      try {
        M && !M.done && (f = C.return) && f.call(C);
      } finally {
        if (c)
          throw c.error;
      }
    }
    var q = xe(Ba(this, t, i, l, w, this.machine.config.preserveActionOrder), 2), L = q[0], W = q[1], I = xe(Na(L, function(ve) {
      return ve.type === si || ve.type === Mn && ve.to === an.Internal;
    }), 2), J = I[0], z = I[1], j = L.filter(function(ve) {
      var Ke;
      return ve.type === Wi && ((Ke = ve.activity) === null || Ke === void 0 ? void 0 : Ke.type) === Ui;
    }), Y = j.reduce(function(ve, Ke) {
      return ve[Ke.activity.id] = Bc(Ke.activity, y.machine, W, l), ve;
    }, t ? V({}, t.children) : {}), ee = p ? e.configuration : t ? t.configuration : [], ie = kn(ee, this), ne = new vr({ value: h || t.value, context: W, _event: l, _sessionid: t ? t._sessionid : null, historyValue: h ? b ? Pc(b, h) : void 0 : t ? t.historyValue : void 0, history: !h || e.source ? t : void 0, actions: h ? z : [], activities: h ? S : t ? t.activities : {}, events: [], configuration: ee, transitions: e.transitions, children: Y, done: ie, tags: Sl(ee), machine: this }), pe = i !== W;
    ne.changed = l.name === Vi || pe;
    var U = ne.history;
    U && delete U.history;
    var ce = !ie && (this._transient || v.some(function(ve) {
      return ve._transient;
    }));
    if (!p && (!ce || l.name === hi))
      return ne;
    var ke = ne;
    if (!ie)
      for (ce && (ke = this.resolveRaisedTransition(ke, { type: bc }, l)); J.length; ) {
        var Ye = J.shift();
        ke = this.resolveRaisedTransition(ke, Ye._event, l);
      }
    var je = ke.changed || (U ? !!ke.actions.length || pe || typeof U.value != typeof ke.value || !Tl(ke.value, U.value) : void 0);
    return ke.changed = je, ke.history = U, ke;
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
    var t = fi(e) ? e.slice(Ml.length) : e;
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
    for (var t = ka(e, this.delimiter).slice(), i = this; t.length; ) {
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
        if (Ee(e)) {
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
      var t = this.machine.idMap[e.slice(Ml.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return ka(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = gl(this.states, function(i) {
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
      Ee(t.target) ? e = fi(t.target) ? Yi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (ro(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return $e || Ze(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Zi(this.initialStateValue);
    return Le(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = xe(e), i = t[0], l = t.slice(1);
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
      return { current: e || this.initialStateValue, states: gl(this.states, function(t, i) {
        if (!e)
          return t.historyValue();
        var l = Ee(e) ? void 0 : e[i];
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
      return l ? Le(Zi(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = Tc(i.path, "states")(e).current;
    return Ee(c) ? [i.getStateNode(c)] : Le(Zi(c).map(function(f) {
      return t.history === "deep" ? i.getFromRelativePath(f) : [i.states[f[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var e = this, t = Le(Object.keys(this.states).map(function(i) {
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
        for (var y = be(Object.keys(c)), v = y.next(); !v.done; v = y.next()) {
          var p = v.value, h = c[p];
          if (h.states)
            try {
              for (var b = (i = void 0, be(h.events)), w = b.next(); !w.done; w = b.next()) {
                var S = w.value;
                f.add("".concat(S));
              }
            } catch (C) {
              i = { error: C };
            } finally {
              try {
                w && !w.done && (l = b.return) && l.call(b);
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
          v && !v.done && (t = y.return) && t.call(y);
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
        if (!Ee(i))
          return i;
        var l = i[0] === t.delimiter;
        if (l && !t.parent)
          return t.getStateNodeByPath(i.slice(1));
        var c = l ? t.key + i : i;
        if (t.parent)
          try {
            var f = t.parent.getStateNodeByPath(c);
            return f;
          } catch (y) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(y.message));
          }
        else
          return t.getStateNodeByPath(c);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = _c(e.target), l = "internal" in e ? e.internal : i ? i.some(function(v) {
      return Ee(v) && v[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), y = V(V({}, e), { actions: eo(Bt(e.actions)), cond: Ga(e.cond, c), target: f, source: this, internal: l, eventType: e.event, toJSON: function() {
      return V(V({}, y), { target: y.target ? y.target.map(function(v) {
        return "#".concat(v.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return y;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c = this.config.on, f = ao, y = c[f], v = y === void 0 ? [] : y, p = oi(c, [typeof f == "symbol" ? f : f + ""]);
      l = Le(Object.keys(p).map(function(L) {
        !$e && L === hi && Ze(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var W = Pn(L, p[L]);
        return $e || Vh(i, L, W), W;
      }).concat(Pn(ao, v)));
    }
    var h = this.config.always ? Pn("", this.config.always) : [], b = this.config.onDone ? Pn(String(to(this.id)), this.config.onDone) : [];
    $e || Ze(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = Le(this.invoke.map(function(L) {
      var W = [];
      return L.onDone && W.push.apply(W, De([], xe(Pn(String(pi(L.id)), L.onDone)), false)), L.onError && W.push.apply(W, De([], xe(Pn(String(zn(L.id)), L.onError)), false)), W;
    })), S = this.after, C = Le(De(De(De(De([], xe(b), false), xe(w), false), xe(l), false), xe(h), false).map(function(L) {
      return Bt(L).map(function(W) {
        return i.formatTransition(W);
      });
    }));
    try {
      for (var M = be(S), _ = M.next(); !_.done; _ = M.next()) {
        var q = _.value;
        C.push(q);
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
function lt(r, e) {
  return new ep(r, e);
}
__name(lt, "lt");
u(lt, "createMachine");
var lo = Cn(so(), 1);
var Wa = u((r) => r != null && typeof r.draggable == "boolean", "isDraggable");
var Fa = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Pl = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
      this.draggableMachine = lt({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        ue("draggable:init", {}, this);
      }, setInteract: (i, l) => {
        H.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let c = (0, lo.default)(this);
        c.styleCursor(false), c.pointerEvents({ ignoreFrom: ".resize-handle" }), c.on("down", this.grab.bind(this)), c.on("up", this.release.bind(this)), c.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let f = this.dropzone;
        Fa(f) ? this.snappedDropzone = f : this.snappedDropzone = null;
      }, grab: (i, l) => {
        H.need(l.type === "GRAB", "event type must be GRAB"), l.type === "GRAB" && (this.grabbed = true, ue("draggable:grab", {}, this), Pl(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("qpu-operation-xl")));
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
        (0, lo.default)(this).unset(), ue("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => Fa(this.dropzone), isOnPaletteDropzone: () => Pl(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Fa(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = et(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${Xe(i.value)}`);
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
      return H.notNull(i), !Pl(i) && !Fa(i) ? null : i;
    }
    set snapTargets(i) {
      (0, lo.default)(this).draggable({ modifiers: [lo.default.modifiers.snap({ targets: i, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
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
var Nn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function rp(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u(e, "FlaggableMixinClass"), A([D], e.prototype, "flag", 2), e;
}
__name(rp, "rp");
u(rp, "FlaggableMixin");
var Ve = "top";
var ut = "bottom";
var tt = "right";
var Qe = "left";
var Ua = "auto";
var sn = [Ve, ut, tt, Qe];
var Br = "start";
var Gn = "end";
var np = "clippingParents";
var Va = "viewport";
var vi = "popper";
var ip = "reference";
var Al = sn.reduce(function(r, e) {
  return r.concat([e + "-" + Br, e + "-" + Gn]);
}, []);
var Ya = [].concat(sn, [Ua]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Br, e + "-" + Gn]);
}, []);
var Yh = "beforeRead";
var Xh = "read";
var Zh = "afterRead";
var Qh = "beforeMain";
var Jh = "main";
var Kh = "afterMain";
var ev = "beforeWrite";
var tv = "write";
var rv = "afterWrite";
var op = [Yh, Xh, Zh, Qh, Jh, Kh, ev, tv, rv];
function ht(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(ht, "ht");
u(ht, "getNodeName");
function Je(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Je, "Je");
u(Je, "getWindow");
function Cr(r) {
  var e = Je(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Cr, "Cr");
u(Cr, "isElement");
function ct(r) {
  var e = Je(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(ct, "ct");
u(ct, "isHTMLElement");
function Xa(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Je(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(Xa, "Xa");
u(Xa, "isShadowRoot");
function nv(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !ct(c) || !ht(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var y = l[f];
      y === false ? c.removeAttribute(f) : c.setAttribute(f, y === true ? "" : y);
    }));
  });
}
__name(nv, "nv");
u(nv, "applyStyles");
function iv(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c = e.attributes[i] || {}, f = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), y = f.reduce(function(v, p) {
        return v[p] = "", v;
      }, {});
      !ct(l) || !ht(l) || (Object.assign(l.style, y), Object.keys(c).forEach(function(v) {
        l.removeAttribute(v);
      }));
    });
  };
}
__name(iv, "iv");
u(iv, "effect");
var uo = { name: "applyStyles", enabled: true, phase: "write", fn: nv, effect: iv, requires: ["computeStyles"] };
function vt(r) {
  return r.split("-")[0];
}
__name(vt, "vt");
u(vt, "getBasePlacement");
var mr = Math.max;
var Ln = Math.min;
var $r = Math.round;
function Qt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (ct(r) && e) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = $r(t.width) / f || 1), c > 0 && (l = $r(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Qt, "Qt");
u(Qt, "getBoundingClientRect");
function jn(r) {
  var e = Qt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(jn, "jn");
u(jn, "getLayoutRect");
function co(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Xa(t)) {
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
function _t(r) {
  return Je(r).getComputedStyle(r);
}
__name(_t, "_t");
u(_t, "getComputedStyle");
function zl(r) {
  return ["table", "td", "th"].indexOf(ht(r)) >= 0;
}
__name(zl, "zl");
u(zl, "isTableElement");
function wt(r) {
  return ((Cr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(wt, "wt");
u(wt, "getDocumentElement");
function qr(r) {
  return ht(r) === "html" ? r : r.assignedSlot || r.parentNode || (Xa(r) ? r.host : null) || wt(r);
}
__name(qr, "qr");
u(qr, "getParentNode");
function ap(r) {
  return !ct(r) || _t(r).position === "fixed" ? null : r.offsetParent;
}
__name(ap, "ap");
u(ap, "getTrueOffsetParent");
function ov(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && ct(r)) {
    var i = _t(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = qr(r); ct(l) && ["html", "body"].indexOf(ht(l)) < 0; ) {
    var c = _t(l);
    if (c.transform !== "none" || c.perspective !== "none" || c.contain === "paint" || ["transform", "perspective"].indexOf(c.willChange) !== -1 || e && c.willChange === "filter" || e && c.filter && c.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(ov, "ov");
u(ov, "getContainingBlock");
function gr(r) {
  for (var e = Je(r), t = ap(r); t && zl(t) && _t(t).position === "static"; )
    t = ap(t);
  return t && (ht(t) === "html" || ht(t) === "body" && _t(t).position === "static") ? e : t || ov(r) || e;
}
__name(gr, "gr");
u(gr, "getOffsetParent");
function Hn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(Hn, "Hn");
u(Hn, "getMainAxisFromPlacement");
function Bn(r, e, t) {
  return mr(r, Ln(e, t));
}
__name(Bn, "Bn");
u(Bn, "within");
function sp(r, e, t) {
  var i = Bn(r, e, t);
  return i > t ? t : i;
}
__name(sp, "sp");
u(sp, "withinMaxClamp");
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
var av = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, fo(typeof e != "number" ? e : ho(e, sn));
}, "toPaddingObject");
function sv(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, f = t.modifiersData.popperOffsets, y = vt(t.placement), v = Hn(y), p = [Qe, tt].indexOf(y) >= 0, h = p ? "height" : "width";
  if (!(!c || !f)) {
    var b = av(l.padding, t), w = jn(c), S = v === "y" ? Ve : Qe, C = v === "y" ? ut : tt, M = t.rects.reference[h] + t.rects.reference[v] - f[v] - t.rects.popper[h], _ = f[v] - t.rects.reference[v], q = gr(c), L = q ? v === "y" ? q.clientHeight || 0 : q.clientWidth || 0 : 0, W = M / 2 - _ / 2, I = b[S], J = L - w[h] - b[C], z = L / 2 - w[h] / 2 + W, j = Bn(I, z, J), Y = v;
    t.modifiersData[i] = (e = {}, e[Y] = j, e.centerOffset = j - z, e);
  }
}
__name(sv, "sv");
u(sv, "arrow");
function lv(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !co(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(lv, "lv");
u(lv, "effect");
var lp = { name: "arrow", enabled: true, phase: "main", fn: sv, effect: lv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Jt(r) {
  return r.split("-")[1];
}
__name(Jt, "Jt");
u(Jt, "getVariation");
var uv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function cv(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: $r(e * l) / l || 0, y: $r(t * l) / l || 0 };
}
__name(cv, "cv");
u(cv, "roundOffsetsByDPR");
function up(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, y = r.position, v = r.gpuAcceleration, p = r.adaptive, h = r.roundOffsets, b = r.isFixed, w = f.x, S = w === void 0 ? 0 : w, C = f.y, M = C === void 0 ? 0 : C, _ = typeof h == "function" ? h({ x: S, y: M }) : { x: S, y: M };
  S = _.x, M = _.y;
  var q = f.hasOwnProperty("x"), L = f.hasOwnProperty("y"), W = Qe, I = Ve, J = window;
  if (p) {
    var z = gr(t), j = "clientHeight", Y = "clientWidth";
    if (z === Je(t) && (z = wt(t), _t(z).position !== "static" && y === "absolute" && (j = "scrollHeight", Y = "scrollWidth")), z = z, l === Ve || (l === Qe || l === tt) && c === Gn) {
      I = ut;
      var ee = b && J.visualViewport ? J.visualViewport.height : z[j];
      M -= ee - i.height, M *= v ? 1 : -1;
    }
    if (l === Qe || (l === Ve || l === ut) && c === Gn) {
      W = tt;
      var ie = b && J.visualViewport ? J.visualViewport.width : z[Y];
      S -= ie - i.width, S *= v ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: y }, p && uv), pe = h === true ? cv({ x: S, y: M }) : { x: S, y: M };
  if (S = pe.x, M = pe.y, v) {
    var U;
    return Object.assign({}, ne, (U = {}, U[I] = L ? "0" : "", U[W] = q ? "0" : "", U.transform = (J.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + M + "px)" : "translate3d(" + S + "px, " + M + "px, 0)", U));
  }
  return Object.assign({}, ne, (e = {}, e[I] = L ? M + "px" : "", e[W] = q ? S + "px" : "", e.transform = "", e));
}
__name(up, "up");
u(up, "mapToStyles");
function pv(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, f = c === void 0 ? true : c, y = t.roundOffsets, v = y === void 0 ? true : y;
  if (false)
    var p;
  var h = { placement: vt(e.placement), variation: Jt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, up(Object.assign({}, h, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: f, roundOffsets: v })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, up(Object.assign({}, h, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: v })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(pv, "pv");
u(pv, "computeStyles");
var cp = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: pv, data: {} };
var Za = { passive: true };
function dv(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, y = f === void 0 ? true : f, v = Je(e.elements.popper), p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && p.forEach(function(h) {
    h.addEventListener("scroll", t.update, Za);
  }), y && v.addEventListener("resize", t.update, Za), function() {
    c && p.forEach(function(h) {
      h.removeEventListener("scroll", t.update, Za);
    }), y && v.removeEventListener("resize", t.update, Za);
  };
}
__name(dv, "dv");
u(dv, "effect");
var pp = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: dv, data: {} };
var fv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function mi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return fv[e];
  });
}
__name(mi, "mi");
u(mi, "getOppositePlacement");
var hv = { start: "end", end: "start" };
function Qa(r) {
  return r.replace(/start|end/g, function(e) {
    return hv[e];
  });
}
__name(Qa, "Qa");
u(Qa, "getOppositeVariationPlacement");
function $n(r) {
  var e = Je(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name($n, "$n");
u($n, "getWindowScroll");
function qn(r) {
  return Qt(wt(r)).left + $n(r).scrollLeft;
}
__name(qn, "qn");
u(qn, "getWindowScrollBarX");
function _l(r) {
  var e = Je(r), t = wt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, f = 0, y = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, y = i.offsetTop)), { width: l, height: c, x: f + qn(r), y };
}
__name(_l, "_l");
u(_l, "getViewportRect");
function Rl(r) {
  var e, t = wt(r), i = $n(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = mr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = mr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), y = -i.scrollLeft + qn(r), v = -i.scrollTop;
  return _t(l || t).direction === "rtl" && (y += mr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: y, y: v };
}
__name(Rl, "Rl");
u(Rl, "getDocumentRect");
function Fn(r) {
  var e = _t(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(Fn, "Fn");
u(Fn, "isScrollParent");
function Ja(r) {
  return ["html", "body", "#document"].indexOf(ht(r)) >= 0 ? r.ownerDocument.body : ct(r) && Fn(r) ? r : Ja(qr(r));
}
__name(Ja, "Ja");
u(Ja, "getScrollParent");
function ln(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Ja(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Je(i), f = l ? [c].concat(c.visualViewport || [], Fn(i) ? i : []) : i, y = e.concat(f);
  return l ? y : y.concat(ln(qr(f)));
}
__name(ln, "ln");
u(ln, "listScrollParents");
function gi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(gi, "gi");
u(gi, "rectToClientRect");
function vv(r) {
  var e = Qt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(vv, "vv");
u(vv, "getInnerBoundingClientRect");
function dp(r, e) {
  return e === Va ? gi(_l(r)) : Cr(e) ? vv(e) : gi(Rl(wt(r)));
}
__name(dp, "dp");
u(dp, "getClientRectFromMixedType");
function mv(r) {
  var e = ln(qr(r)), t = ["absolute", "fixed"].indexOf(_t(r).position) >= 0, i = t && ct(r) ? gr(r) : r;
  return Cr(i) ? e.filter(function(l) {
    return Cr(l) && co(l, i) && ht(l) !== "body";
  }) : [];
}
__name(mv, "mv");
u(mv, "getClippingParents");
function Dl(r, e, t) {
  var i = e === "clippingParents" ? mv(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], f = l.reduce(function(y, v) {
    var p = dp(r, v);
    return y.top = mr(p.top, y.top), y.right = Ln(p.right, y.right), y.bottom = Ln(p.bottom, y.bottom), y.left = mr(p.left, y.left), y;
  }, dp(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
__name(Dl, "Dl");
u(Dl, "getClippingRect");
function vo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? vt(i) : null, c = i ? Jt(i) : null, f = e.x + e.width / 2 - t.width / 2, y = e.y + e.height / 2 - t.height / 2, v;
  switch (l) {
    case Ve:
      v = { x: f, y: e.y - t.height };
      break;
    case ut:
      v = { x: f, y: e.y + e.height };
      break;
    case tt:
      v = { x: e.x + e.width, y };
      break;
    case Qe:
      v = { x: e.x - t.width, y };
      break;
    default:
      v = { x: e.x, y: e.y };
  }
  var p = l ? Hn(l) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (c) {
      case Br:
        v[p] = v[p] - (e[h] / 2 - t[h] / 2);
        break;
      case Gn:
        v[p] = v[p] + (e[h] / 2 - t[h] / 2);
        break;
      default:
    }
  }
  return v;
}
__name(vo, "vo");
u(vo, "computeOffsets");
function br(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, f = c === void 0 ? np : c, y = t.rootBoundary, v = y === void 0 ? Va : y, p = t.elementContext, h = p === void 0 ? vi : p, b = t.altBoundary, w = b === void 0 ? false : b, S = t.padding, C = S === void 0 ? 0 : S, M = fo(typeof C != "number" ? C : ho(C, sn)), _ = h === vi ? ip : vi, q = r.rects.popper, L = r.elements[w ? _ : h], W = Dl(Cr(L) ? L : L.contextElement || wt(r.elements.popper), f, v), I = Qt(r.elements.reference), J = vo({ reference: I, element: q, strategy: "absolute", placement: l }), z = gi(Object.assign({}, q, J)), j = h === vi ? z : I, Y = { top: W.top - j.top + M.top, bottom: j.bottom - W.bottom + M.bottom, left: W.left - j.left + M.left, right: j.right - W.right + M.right }, ee = r.modifiersData.offset;
  if (h === vi && ee) {
    var ie = ee[l];
    Object.keys(Y).forEach(function(ne) {
      var pe = [tt, ut].indexOf(ne) >= 0 ? 1 : -1, U = [Ve, ut].indexOf(ne) >= 0 ? "y" : "x";
      Y[ne] += ie[U] * pe;
    });
  }
  return Y;
}
__name(br, "br");
u(br, "detectOverflow");
function kl(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, f = t.padding, y = t.flipVariations, v = t.allowedAutoPlacements, p = v === void 0 ? Ya : v, h = Jt(i), b = h ? y ? Al : Al.filter(function(C) {
    return Jt(C) === h;
  }) : sn, w = b.filter(function(C) {
    return p.indexOf(C) >= 0;
  });
  w.length === 0 && (w = b);
  var S = w.reduce(function(C, M) {
    return C[M] = br(r, { placement: M, boundary: l, rootBoundary: c, padding: f })[vt(M)], C;
  }, {});
  return Object.keys(S).sort(function(C, M) {
    return S[C] - S[M];
  });
}
__name(kl, "kl");
u(kl, "computeAutoPlacement");
function gv(r) {
  if (vt(r) === Ua)
    return [];
  var e = mi(r);
  return [Qa(r), e, Qa(e)];
}
__name(gv, "gv");
u(gv, "getExpandedFallbackPlacements");
function bv(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, y = f === void 0 ? true : f, v = t.fallbackPlacements, p = t.padding, h = t.boundary, b = t.rootBoundary, w = t.altBoundary, S = t.flipVariations, C = S === void 0 ? true : S, M = t.allowedAutoPlacements, _ = e.options.placement, q = vt(_), L = q === _, W = v || (L || !C ? [mi(_)] : gv(_)), I = [_].concat(W).reduce(function(It, Dt) {
      return It.concat(vt(Dt) === Ua ? kl(e, { placement: Dt, boundary: h, rootBoundary: b, padding: p, flipVariations: C, allowedAutoPlacements: M }) : Dt);
    }, []), J = e.rects.reference, z = e.rects.popper, j = /* @__PURE__ */ new Map(), Y = true, ee = I[0], ie = 0; ie < I.length; ie++) {
      var ne = I[ie], pe = vt(ne), U = Jt(ne) === Br, ce = [Ve, ut].indexOf(pe) >= 0, ke = ce ? "width" : "height", Ye = br(e, { placement: ne, boundary: h, rootBoundary: b, altBoundary: w, padding: p }), je = ce ? U ? tt : Qe : U ? ut : Ve;
      J[ke] > z[ke] && (je = mi(je));
      var ve = mi(je), Ke = [];
      if (c && Ke.push(Ye[pe] <= 0), y && Ke.push(Ye[je] <= 0, Ye[ve] <= 0), Ke.every(function(It) {
        return It;
      })) {
        ee = ne, Y = false;
        break;
      }
      j.set(ne, Ke);
    }
    if (Y)
      for (var nt = C ? 3 : 1, Wt = u(function(Dt) {
        var Ut = I.find(function(fr) {
          var Vt = j.get(fr);
          if (Vt)
            return Vt.slice(0, Dt).every(function(Lt) {
              return Lt;
            });
        });
        if (Ut)
          return ee = Ut, "break";
      }, "_loop"), K = nt; K > 0; K--) {
        var dr = Wt(K);
        if (dr === "break")
          break;
      }
    e.placement !== ee && (e.modifiersData[i]._skip = true, e.placement = ee, e.reset = true);
  }
}
__name(bv, "bv");
u(bv, "flip");
var fp = { name: "flip", enabled: true, phase: "main", fn: bv, requiresIfExists: ["offset"], data: { _skip: false } };
function hp(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(hp, "hp");
u(hp, "getSideOffsets");
function vp(r) {
  return [Ve, tt, ut, Qe].some(function(e) {
    return r[e] >= 0;
  });
}
__name(vp, "vp");
u(vp, "isAnySideFullyClipped");
function yv(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, f = br(e, { elementContext: "reference" }), y = br(e, { altBoundary: true }), v = hp(f, i), p = hp(y, l, c), h = vp(v), b = vp(p);
  e.modifiersData[t] = { referenceClippingOffsets: v, popperEscapeOffsets: p, isReferenceHidden: h, hasPopperEscaped: b }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": b });
}
__name(yv, "yv");
u(yv, "hide");
var mp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: yv };
function wv(r, e, t) {
  var i = vt(r), l = [Qe, Ve].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, f = c[0], y = c[1];
  return f = f || 0, y = (y || 0) * l, [Qe, tt].indexOf(i) >= 0 ? { x: y, y: f } : { x: f, y };
}
__name(wv, "wv");
u(wv, "distanceAndSkiddingToXY");
function xv(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, f = Ya.reduce(function(h, b) {
    return h[b] = wv(b, e.rects, c), h;
  }, {}), y = f[e.placement], v = y.x, p = y.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += v, e.modifiersData.popperOffsets.y += p), e.modifiersData[i] = f;
}
__name(xv, "xv");
u(xv, "offset");
var gp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: xv };
function Ev(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = vo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(Ev, "Ev");
u(Ev, "popperOffsets");
var bp = { name: "popperOffsets", enabled: true, phase: "read", fn: Ev, data: {} };
function Nl(r) {
  return r === "x" ? "y" : "x";
}
__name(Nl, "Nl");
u(Nl, "getAltAxis");
function Sv(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, y = f === void 0 ? false : f, v = t.boundary, p = t.rootBoundary, h = t.altBoundary, b = t.padding, w = t.tether, S = w === void 0 ? true : w, C = t.tetherOffset, M = C === void 0 ? 0 : C, _ = br(e, { boundary: v, rootBoundary: p, padding: b, altBoundary: h }), q = vt(e.placement), L = Jt(e.placement), W = !L, I = Hn(q), J = Nl(I), z = e.modifiersData.popperOffsets, j = e.rects.reference, Y = e.rects.popper, ee = typeof M == "function" ? M(Object.assign({}, e.rects, { placement: e.placement })) : M, ie = typeof ee == "number" ? { mainAxis: ee, altAxis: ee } : Object.assign({ mainAxis: 0, altAxis: 0 }, ee), ne = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, pe = { x: 0, y: 0 };
  if (!!z) {
    if (c) {
      var U, ce = I === "y" ? Ve : Qe, ke = I === "y" ? ut : tt, Ye = I === "y" ? "height" : "width", je = z[I], ve = je + _[ce], Ke = je - _[ke], nt = S ? -Y[Ye] / 2 : 0, Wt = L === Br ? j[Ye] : Y[Ye], K = L === Br ? -Y[Ye] : -j[Ye], dr = e.elements.arrow, It = S && dr ? jn(dr) : { width: 0, height: 0 }, Dt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : po(), Ut = Dt[ce], fr = Dt[ke], Vt = Bn(0, j[Ye], It[Ye]), Lt = W ? j[Ye] / 2 - nt - Vt - Ut - ie.mainAxis : Wt - Vt - Ut - ie.mainAxis, wr = W ? -j[Ye] / 2 + nt + Vt + fr + ie.mainAxis : K + Vt + fr + ie.mainAxis, Rr = e.elements.arrow && gr(e.elements.arrow), dn = Rr ? I === "y" ? Rr.clientTop || 0 : Rr.clientLeft || 0 : 0, Ie = (U = ne == null ? void 0 : ne[I]) != null ? U : 0, fn = je + Lt - Ie - dn, hn = je + wr - Ie, Pt = Bn(S ? Ln(ve, fn) : ve, je, S ? mr(Ke, hn) : Ke);
      z[I] = Pt, pe[I] = Pt - je;
    }
    if (y) {
      var Dr, Yn = I === "x" ? Ve : Qe, Xr = I === "x" ? ut : tt, hr = z[J], St = J === "y" ? "height" : "width", xr = hr + _[Yn], kt = hr - _[Xr], vn = [Ve, Qe].indexOf(q) !== -1, kr = (Dr = ne == null ? void 0 : ne[J]) != null ? Dr : 0, mn = vn ? xr : hr - j[St] - Y[St] - kr + ie.altAxis, Zr = vn ? hr + j[St] + Y[St] - kr - ie.altAxis : kt, gn = S && vn ? sp(mn, hr, Zr) : Bn(S ? mn : xr, hr, S ? Zr : kt);
      z[J] = gn, pe[J] = gn - hr;
    }
    e.modifiersData[i] = pe;
  }
}
__name(Sv, "Sv");
u(Sv, "preventOverflow");
var yp = { name: "preventOverflow", enabled: true, phase: "main", fn: Sv, requiresIfExists: ["offset"] };
function Gl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(Gl, "Gl");
u(Gl, "getHTMLElementScroll");
function Ll(r) {
  return r === Je(r) || !ct(r) ? $n(r) : Gl(r);
}
__name(Ll, "Ll");
u(Ll, "getNodeScroll");
function Tv(r) {
  var e = r.getBoundingClientRect(), t = $r(e.width) / r.offsetWidth || 1, i = $r(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(Tv, "Tv");
u(Tv, "isElementScaled");
function jl(r, e, t) {
  t === void 0 && (t = false);
  var i = ct(e), l = ct(e) && Tv(e), c = wt(e), f = Qt(r, l), y = { scrollLeft: 0, scrollTop: 0 }, v = { x: 0, y: 0 };
  return (i || !i && !t) && ((ht(e) !== "body" || Fn(c)) && (y = Ll(e)), ct(e) ? (v = Qt(e, true), v.x += e.clientLeft, v.y += e.clientTop) : c && (v.x = qn(c))), { x: f.left + y.scrollLeft - v.x, y: f.top + y.scrollTop - v.y, width: f.width, height: f.height };
}
__name(jl, "jl");
u(jl, "getCompositeRect");
function Cv(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c) {
    e.set(c.name, c);
  });
  function l(c) {
    t.add(c.name);
    var f = [].concat(c.requires || [], c.requiresIfExists || []);
    f.forEach(function(y) {
      if (!t.has(y)) {
        var v = e.get(y);
        v && l(v);
      }
    }), i.push(c);
  }
  __name(l, "l");
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
__name(Cv, "Cv");
u(Cv, "order");
function Hl(r) {
  var e = Cv(r);
  return op.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(Hl, "Hl");
u(Hl, "orderModifiers");
function Bl(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(Bl, "Bl");
u(Bl, "debounce");
function $l(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name($l, "$l");
u($l, "mergeByName");
var wp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function xp() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(xp, "xp");
u(xp, "areValidElements");
function Ep(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? wp : l;
  return u(function(y, v, p) {
    p === void 0 && (p = c);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, wp, c), modifiersData: {}, elements: { reference: y, popper: v }, attributes: {}, styles: {} }, b = [], w = false, S = { state: h, setOptions: u(function(q) {
      var L = typeof q == "function" ? q(h.options) : q;
      M(), h.options = Object.assign({}, c, h.options, L), h.scrollParents = { reference: Cr(y) ? ln(y) : y.contextElement ? ln(y.contextElement) : [], popper: ln(v) };
      var W = Hl($l([].concat(i, h.options.modifiers)));
      if (h.orderedModifiers = W.filter(function(ne) {
        return ne.enabled;
      }), false) {
        var I;
        if (getBasePlacement(h.options.placement) === auto)
          var J;
        var z, j, Y, ee, ie;
      }
      return C(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!w) {
        var q = h.elements, L = q.reference, W = q.popper;
        if (!!xp(L, W)) {
          h.rects = { reference: jl(L, gr(W), h.options.strategy === "fixed"), popper: jn(W) }, h.reset = false, h.placement = h.options.placement, h.orderedModifiers.forEach(function(ne) {
            return h.modifiersData[ne.name] = Object.assign({}, ne.data);
          });
          for (var I = 0, J = 0; J < h.orderedModifiers.length; J++) {
            if (h.reset === true) {
              h.reset = false, J = -1;
              continue;
            }
            var z = h.orderedModifiers[J], j = z.fn, Y = z.options, ee = Y === void 0 ? {} : Y, ie = z.name;
            typeof j == "function" && (h = j({ state: h, options: ee, name: ie, instance: S }) || h);
          }
        }
      }
    }, "forceUpdate"), update: Bl(function() {
      return new Promise(function(_) {
        S.forceUpdate(), _(h);
      });
    }), destroy: u(function() {
      M(), w = true;
    }, "destroy") };
    if (!xp(y, v))
      return S;
    S.setOptions(p).then(function(_) {
      !w && p.onFirstUpdate && p.onFirstUpdate(_);
    });
    function C() {
      h.orderedModifiers.forEach(function(_) {
        var q = _.name, L = _.options, W = L === void 0 ? {} : L, I = _.effect;
        if (typeof I == "function") {
          var J = I({ state: h, name: q, instance: S, options: W }), z = u(function() {
          }, "noopFn");
          b.push(J || z);
        }
      });
    }
    __name(C, "C");
    u(C, "runModifierEffects");
    function M() {
      b.forEach(function(_) {
        return _();
      }), b = [];
    }
    __name(M, "M");
    return u(M, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(Ep, "Ep");
u(Ep, "popperGenerator");
var Ov = [pp, bp, cp, uo, gp, fp, yp, lp, mp];
var ql = Ep({ defaultModifiers: Ov });
var Mv = "tippy-box";
var _p = "tippy-content";
var Iv = "tippy-backdrop";
var Rp = "tippy-arrow";
var Dp = "tippy-svg-arrow";
var Wn = { passive: true, capture: true };
var kp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function Fl(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(Fl, "Fl");
u(Fl, "getValueAtIndexOrReturn");
function Zl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(Zl, "Zl");
u(Zl, "isType");
function Np(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(Np, "Np");
u(Np, "invokeWithArgsOrReturn");
function Sp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(Sp, "Sp");
u(Sp, "debounce");
function Pv(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Pv, "Pv");
u(Pv, "splitBySpaces");
function bi(r) {
  return [].concat(r);
}
__name(bi, "bi");
u(bi, "normalizeToArray");
function Tp(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(Tp, "Tp");
u(Tp, "pushIfUnique");
function Av(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(Av, "Av");
u(Av, "unique");
function zv(r) {
  return r.split("-")[0];
}
__name(zv, "zv");
u(zv, "getBasePlacement");
function es(r) {
  return [].slice.call(r);
}
__name(es, "es");
u(es, "arrayFrom");
function Cp(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(Cp, "Cp");
u(Cp, "removeUndefinedProps");
function mo() {
  return document.createElement("div");
}
__name(mo, "mo");
u(mo, "div");
function ts(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Zl(r, e);
  });
}
__name(ts, "ts");
u(ts, "isElement");
function _v(r) {
  return Zl(r, "NodeList");
}
__name(_v, "_v");
u(_v, "isNodeList");
function Rv(r) {
  return Zl(r, "MouseEvent");
}
__name(Rv, "Rv");
u(Rv, "isMouseEvent");
function Dv(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Dv, "Dv");
u(Dv, "isReferenceElement");
function kv(r) {
  return ts(r) ? [r] : _v(r) ? es(r) : Array.isArray(r) ? r : es(document.querySelectorAll(r));
}
__name(kv, "kv");
u(kv, "getArrayOfElements");
function Wl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(Wl, "Wl");
u(Wl, "setTransitionDuration");
function Op(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(Op, "Op");
u(Op, "setVisibilityState");
function Nv(r) {
  var e, t = bi(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(Nv, "Nv");
u(Nv, "getOwnerDocument");
function Gv(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, y = l.props, v = y.interactiveBorder, p = zv(f.placement), h = f.modifiersData.offset;
    if (!h)
      return true;
    var b = p === "bottom" ? h.top.y : 0, w = p === "top" ? h.bottom.y : 0, S = p === "right" ? h.left.x : 0, C = p === "left" ? h.right.x : 0, M = c.top - i + b > v, _ = i - c.bottom - w > v, q = c.left - t + S > v, L = t - c.right - C > v;
    return M || _ || q || L;
  });
}
__name(Gv, "Gv");
u(Gv, "isCursorOutsideInteractiveBorder");
function Ul(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(Ul, "Ul");
u(Ul, "updateTransitionEndListener");
function Mp(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(Mp, "Mp");
u(Mp, "actualContains");
var Or = { isTouch: false };
var Ip = 0;
function Lv() {
  Or.isTouch || (Or.isTouch = true, window.performance && document.addEventListener("mousemove", Gp));
}
__name(Lv, "Lv");
u(Lv, "onDocumentTouchStart");
function Gp() {
  var r = performance.now();
  r - Ip < 20 && (Or.isTouch = false, document.removeEventListener("mousemove", Gp)), Ip = r;
}
__name(Gp, "Gp");
u(Gp, "onDocumentMouseMove");
function jv() {
  var r = document.activeElement;
  if (Dv(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(jv, "jv");
u(jv, "onWindowBlur");
function Hv() {
  document.addEventListener("touchstart", Lv, Wn), window.addEventListener("blur", jv);
}
__name(Hv, "Hv");
u(Hv, "bindGlobalEventListeners");
var Bv = typeof window != "undefined" && typeof document != "undefined";
var $v = Bv ? !!window.msCrypto : false;
var qv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Fv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var yr = Object.assign({ appendTo: kp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, qv, Fv);
var Wv = Object.keys(yr);
var Uv = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    yr[i] = e[i];
  });
}, "setDefaultProps");
function Lp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c = l.name, f = l.defaultValue;
    if (c) {
      var y;
      i[c] = r[c] !== void 0 ? r[c] : (y = yr[c]) != null ? y : f;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(Lp, "Lp");
u(Lp, "getExtendedPassedProps");
function Vv(r, e) {
  var t = e ? Object.keys(Lp(Object.assign({}, yr, { plugins: e }))) : Wv, i = t.reduce(function(l, c) {
    var f = (r.getAttribute("data-tippy-" + c) || "").trim();
    if (!f)
      return l;
    if (c === "content")
      l[c] = f;
    else
      try {
        l[c] = JSON.parse(f);
      } catch (y) {
        l[c] = f;
      }
    return l;
  }, {});
  return i;
}
__name(Vv, "Vv");
u(Vv, "getDataAttributeProps");
function Pp(r, e) {
  var t = Object.assign({}, e, { content: Np(e.content, [r]) }, e.ignoreAttributes ? {} : Vv(r, e.plugins));
  return t.aria = Object.assign({}, yr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(Pp, "Pp");
u(Pp, "evaluateProps");
var Yv = u(function() {
  return "innerHTML";
}, "innerHTML");
function Yl(r, e) {
  r[Yv()] = e;
}
__name(Yl, "Yl");
u(Yl, "dangerouslySetInnerHTML");
function Ap(r) {
  var e = mo();
  return r === true ? e.className = Rp : (e.className = Dp, ts(r) ? e.appendChild(r) : Yl(e, r)), e;
}
__name(Ap, "Ap");
u(Ap, "createArrowElement");
function zp(r, e) {
  ts(e.content) ? (Yl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Yl(r, e.content) : r.textContent = e.content);
}
__name(zp, "zp");
u(zp, "setContent");
function Xl(r) {
  var e = r.firstElementChild, t = es(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(_p);
  }), arrow: t.find(function(i) {
    return i.classList.contains(Rp) || i.classList.contains(Dp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Iv);
  }) };
}
__name(Xl, "Xl");
u(Xl, "getChildren");
function jp(r) {
  var e = mo(), t = mo();
  t.className = Mv, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = mo();
  i.className = _p, i.setAttribute("data-state", "hidden"), zp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var y = Xl(e), v = y.box, p = y.content, h = y.arrow;
    f.theme ? v.setAttribute("data-theme", f.theme) : v.removeAttribute("data-theme"), typeof f.animation == "string" ? v.setAttribute("data-animation", f.animation) : v.removeAttribute("data-animation"), f.inertia ? v.setAttribute("data-inertia", "") : v.removeAttribute("data-inertia"), v.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? v.setAttribute("role", f.role) : v.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && zp(p, r.props), f.arrow ? h ? c.arrow !== f.arrow && (v.removeChild(h), v.appendChild(Ap(f.arrow))) : v.appendChild(Ap(f.arrow)) : h && v.removeChild(h);
  }
  __name(l, "l");
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(jp, "jp");
u(jp, "render");
jp.$$tippy = true;
var Xv = 1;
var Ka = [];
var Vl = [];
function Zv(r, e) {
  var t = Pp(r, Object.assign({}, yr, Lp(Cp(e)))), i, l, c, f = false, y = false, v = false, p = false, h, b, w, S = [], C = Sp(fn, t.interactiveDebounce), M, _ = Xv++, q = null, L = Av(t.plugins), W = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, I = { id: _, reference: r, popper: mo(), popperInstance: q, props: t, state: W, plugins: L, clearDelayTimeouts: mn, setProps: Zr, setContent: gn, show: Si, hide: Ti, hideWithInteractivity: Ro, enable: vn, disable: kr, unmount: Do, destroy: hs };
  if (!t.render)
    return I;
  var J = t.render(I), z = J.popper, j = J.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + I.id, I.popper = z, r._tippy = I, z._tippy = I;
  var Y = L.map(function(N) {
    return N.fn(I);
  }), ee = r.hasAttribute("aria-expanded");
  return Rr(), nt(), je(), ve("onCreate", [I]), t.showOnCreate && xr(), z.addEventListener("mouseenter", function() {
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
  function U() {
    return M || r;
  }
  __name(U, "U");
  u(U, "getCurrentTarget");
  function ce() {
    var N = U().parentNode;
    return N ? Nv(N) : document;
  }
  __name(ce, "ce");
  u(ce, "getDocument");
  function ke() {
    return Xl(z);
  }
  __name(ke, "ke");
  u(ke, "getDefaultTemplateChildren");
  function Ye(N) {
    return I.state.isMounted && !I.state.isVisible || Or.isTouch || h && h.type === "focus" ? 0 : Fl(I.props.delay, N ? 0 : 1, yr.delay);
  }
  __name(Ye, "Ye");
  u(Ye, "getDelay");
  function je(N) {
    N === void 0 && (N = false), z.style.pointerEvents = I.props.interactive && !N ? "" : "none", z.style.zIndex = "" + I.props.zIndex;
  }
  __name(je, "je");
  u(je, "handleStyles");
  function ve(N, te, ae) {
    if (ae === void 0 && (ae = true), Y.forEach(function(me) {
      me[N] && me[N].apply(me, te);
    }), ae) {
      var Pe;
      (Pe = I.props)[N].apply(Pe, te);
    }
  }
  __name(ve, "ve");
  u(ve, "invokeHook");
  function Ke() {
    var N = I.props.aria;
    if (!!N.content) {
      var te = "aria-" + N.content, ae = z.id, Pe = bi(I.props.triggerTarget || r);
      Pe.forEach(function(me) {
        var mt = me.getAttribute(te);
        if (I.state.isVisible)
          me.setAttribute(te, mt ? mt + " " + ae : ae);
        else {
          var At = mt && mt.replace(ae, "").trim();
          At ? me.setAttribute(te, At) : me.removeAttribute(te);
        }
      });
    }
  }
  __name(Ke, "Ke");
  u(Ke, "handleAriaContentAttribute");
  function nt() {
    if (!(ee || !I.props.aria.expanded)) {
      var N = bi(I.props.triggerTarget || r);
      N.forEach(function(te) {
        I.props.interactive ? te.setAttribute("aria-expanded", I.state.isVisible && te === U() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  __name(nt, "nt");
  u(nt, "handleAriaExpandedAttribute");
  function Wt() {
    ce().removeEventListener("mousemove", C), Ka = Ka.filter(function(N) {
      return N !== C;
    });
  }
  __name(Wt, "Wt");
  u(Wt, "cleanupInteractiveMouseListeners");
  function K(N) {
    if (!(Or.isTouch && (v || N.type === "mousedown"))) {
      var te = N.composedPath && N.composedPath()[0] || N.target;
      if (!(I.props.interactive && Mp(z, te))) {
        if (bi(I.props.triggerTarget || r).some(function(ae) {
          return Mp(ae, te);
        })) {
          if (Or.isTouch || I.state.isVisible && I.props.trigger.indexOf("click") >= 0)
            return;
        } else
          ve("onClickOutside", [I, N]);
        I.props.hideOnClick === true && (I.clearDelayTimeouts(), I.hide(), y = true, setTimeout(function() {
          y = false;
        }), I.state.isMounted || Ut());
      }
    }
  }
  __name(K, "K");
  u(K, "onDocumentPress");
  function dr() {
    v = true;
  }
  __name(dr, "dr");
  u(dr, "onTouchMove");
  function It() {
    v = false;
  }
  __name(It, "It");
  u(It, "onTouchStart");
  function Dt() {
    var N = ce();
    N.addEventListener("mousedown", K, true), N.addEventListener("touchend", K, Wn), N.addEventListener("touchstart", It, Wn), N.addEventListener("touchmove", dr, Wn);
  }
  __name(Dt, "Dt");
  u(Dt, "addDocumentPress");
  function Ut() {
    var N = ce();
    N.removeEventListener("mousedown", K, true), N.removeEventListener("touchend", K, Wn), N.removeEventListener("touchstart", It, Wn), N.removeEventListener("touchmove", dr, Wn);
  }
  __name(Ut, "Ut");
  u(Ut, "removeDocumentPress");
  function fr(N, te) {
    Lt(N, function() {
      !I.state.isVisible && z.parentNode && z.parentNode.contains(z) && te();
    });
  }
  __name(fr, "fr");
  u(fr, "onTransitionedOut");
  function Vt(N, te) {
    Lt(N, te);
  }
  __name(Vt, "Vt");
  u(Vt, "onTransitionedIn");
  function Lt(N, te) {
    var ae = ke().box;
    function Pe(me) {
      me.target === ae && (Ul(ae, "remove", Pe), te());
    }
    __name(Pe, "Pe");
    if (u(Pe, "listener"), N === 0)
      return te();
    Ul(ae, "remove", b), Ul(ae, "add", Pe), b = Pe;
  }
  __name(Lt, "Lt");
  u(Lt, "onTransitionEnd");
  function wr(N, te, ae) {
    ae === void 0 && (ae = false);
    var Pe = bi(I.props.triggerTarget || r);
    Pe.forEach(function(me) {
      me.addEventListener(N, te, ae), S.push({ node: me, eventType: N, handler: te, options: ae });
    });
  }
  __name(wr, "wr");
  u(wr, "on");
  function Rr() {
    ne() && (wr("touchstart", Ie, { passive: true }), wr("touchend", hn, { passive: true })), Pv(I.props.trigger).forEach(function(N) {
      if (N !== "manual")
        switch (wr(N, Ie), N) {
          case "mouseenter":
            wr("mouseleave", hn);
            break;
          case "focus":
            wr($v ? "focusout" : "blur", Pt);
            break;
          case "focusin":
            wr("focusout", Pt);
            break;
        }
    });
  }
  __name(Rr, "Rr");
  u(Rr, "addListeners");
  function dn() {
    S.forEach(function(N) {
      var te = N.node, ae = N.eventType, Pe = N.handler, me = N.options;
      te.removeEventListener(ae, Pe, me);
    }), S = [];
  }
  __name(dn, "dn");
  u(dn, "removeListeners");
  function Ie(N) {
    var te, ae = false;
    if (!(!I.state.isEnabled || Dr(N) || y)) {
      var Pe = ((te = h) == null ? void 0 : te.type) === "focus";
      h = N, M = N.currentTarget, nt(), !I.state.isVisible && Rv(N) && Ka.forEach(function(me) {
        return me(N);
      }), N.type === "click" && (I.props.trigger.indexOf("mouseenter") < 0 || f) && I.props.hideOnClick !== false && I.state.isVisible ? ae = true : xr(N), N.type === "click" && (f = !ae), ae && !Pe && kt(N);
    }
  }
  __name(Ie, "Ie");
  u(Ie, "onTrigger");
  function fn(N) {
    var te = N.target, ae = U().contains(te) || z.contains(te);
    if (!(N.type === "mousemove" && ae)) {
      var Pe = St().concat(z).map(function(me) {
        var mt, At = me._tippy, Tt = (mt = At.popperInstance) == null ? void 0 : mt.state;
        return Tt ? { popperRect: me.getBoundingClientRect(), popperState: Tt, props: t } : null;
      }).filter(Boolean);
      Gv(Pe, N) && (Wt(), kt(N));
    }
  }
  __name(fn, "fn");
  u(fn, "onMouseMove");
  function hn(N) {
    var te = Dr(N) || I.props.trigger.indexOf("click") >= 0 && f;
    if (!te) {
      if (I.props.interactive) {
        I.hideWithInteractivity(N);
        return;
      }
      kt(N);
    }
  }
  __name(hn, "hn");
  u(hn, "onMouseLeave");
  function Pt(N) {
    I.props.trigger.indexOf("focusin") < 0 && N.target !== U() || I.props.interactive && N.relatedTarget && z.contains(N.relatedTarget) || kt(N);
  }
  __name(Pt, "Pt");
  u(Pt, "onBlurOrFocusOut");
  function Dr(N) {
    return Or.isTouch ? ne() !== N.type.indexOf("touch") >= 0 : false;
  }
  __name(Dr, "Dr");
  u(Dr, "isEventListenerStopped");
  function Yn() {
    Xr();
    var N = I.props, te = N.popperOptions, ae = N.placement, Pe = N.offset, me = N.getReferenceClientRect, mt = N.moveTransition, At = pe() ? Xl(z).arrow : null, Tt = me ? { getBoundingClientRect: me, contextElement: me.contextElement || U() } : r, ko = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Ct) {
      var Ot = Ct.state;
      if (pe()) {
        var Nr = ke(), Xn = Nr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Zn) {
          Zn === "placement" ? Xn.setAttribute("data-placement", Ot.placement) : Ot.attributes.popper["data-popper-" + Zn] ? Xn.setAttribute("data-" + Zn, "") : Xn.removeAttribute("data-" + Zn);
        }), Ot.attributes.popper = {};
      }
    }, "fn") }, Yt = [{ name: "offset", options: { offset: Pe } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !mt } }, ko];
    pe() && At && Yt.push({ name: "arrow", options: { element: At, padding: 3 } }), Yt.push.apply(Yt, (te == null ? void 0 : te.modifiers) || []), I.popperInstance = ql(Tt, z, Object.assign({}, te, { placement: ae, onFirstUpdate: w, modifiers: Yt }));
  }
  __name(Yn, "Yn");
  u(Yn, "createPopperInstance");
  function Xr() {
    I.popperInstance && (I.popperInstance.destroy(), I.popperInstance = null);
  }
  __name(Xr, "Xr");
  u(Xr, "destroyPopperInstance");
  function hr() {
    var N = I.props.appendTo, te, ae = U();
    I.props.interactive && N === kp || N === "parent" ? te = ae.parentNode : te = Np(N, [ae]), te.contains(z) || te.appendChild(z), I.state.isMounted = true, Yn();
  }
  __name(hr, "hr");
  u(hr, "mount");
  function St() {
    return es(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(St, "St");
  u(St, "getNestedPopperTree");
  function xr(N) {
    I.clearDelayTimeouts(), N && ve("onTrigger", [I, N]), Dt();
    var te = Ye(true), ae = ie(), Pe = ae[0], me = ae[1];
    Or.isTouch && Pe === "hold" && me && (te = me), te ? i = setTimeout(function() {
      I.show();
    }, te) : I.show();
  }
  __name(xr, "xr");
  u(xr, "scheduleShow");
  function kt(N) {
    if (I.clearDelayTimeouts(), ve("onUntrigger", [I, N]), !I.state.isVisible) {
      Ut();
      return;
    }
    if (!(I.props.trigger.indexOf("mouseenter") >= 0 && I.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(N.type) >= 0 && f)) {
      var te = Ye(false);
      te ? l = setTimeout(function() {
        I.state.isVisible && I.hide();
      }, te) : c = requestAnimationFrame(function() {
        I.hide();
      });
    }
  }
  __name(kt, "kt");
  u(kt, "scheduleHide");
  function vn() {
    I.state.isEnabled = true;
  }
  __name(vn, "vn");
  u(vn, "enable");
  function kr() {
    I.hide(), I.state.isEnabled = false;
  }
  __name(kr, "kr");
  u(kr, "disable");
  function mn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  __name(mn, "mn");
  u(mn, "clearDelayTimeouts");
  function Zr(N) {
    if (!I.state.isDestroyed) {
      ve("onBeforeUpdate", [I, N]), dn();
      var te = I.props, ae = Pp(r, Object.assign({}, te, Cp(N), { ignoreAttributes: true }));
      I.props = ae, Rr(), te.interactiveDebounce !== ae.interactiveDebounce && (Wt(), C = Sp(fn, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? bi(te.triggerTarget).forEach(function(Pe) {
        Pe.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), nt(), je(), j && j(te, ae), I.popperInstance && (Yn(), St().forEach(function(Pe) {
        requestAnimationFrame(Pe._tippy.popperInstance.forceUpdate);
      })), ve("onAfterUpdate", [I, N]);
    }
  }
  __name(Zr, "Zr");
  u(Zr, "setProps");
  function gn(N) {
    I.setProps({ content: N });
  }
  __name(gn, "gn");
  u(gn, "setContent");
  function Si() {
    var N = I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Pe = Or.isTouch && !I.props.touch, me = Fl(I.props.duration, 0, yr.duration);
    if (!(N || te || ae || Pe) && !U().hasAttribute("disabled") && (ve("onShow", [I], false), I.props.onShow(I) !== false)) {
      if (I.state.isVisible = true, pe() && (z.style.visibility = "visible"), je(), Dt(), I.state.isMounted || (z.style.transition = "none"), pe()) {
        var mt = ke(), At = mt.box, Tt = mt.content;
        Wl([At, Tt], 0);
      }
      w = u(function() {
        var Yt;
        if (!(!I.state.isVisible || p)) {
          if (p = true, z.offsetHeight, z.style.transition = I.props.moveTransition, pe() && I.props.animation) {
            var Ci = ke(), Ct = Ci.box, Ot = Ci.content;
            Wl([Ct, Ot], me), Op([Ct, Ot], "visible");
          }
          Ke(), nt(), Tp(Vl, I), (Yt = I.popperInstance) == null || Yt.forceUpdate(), ve("onMount", [I]), I.props.animation && pe() && Vt(me, function() {
            I.state.isShown = true, ve("onShown", [I]);
          });
        }
      }, "onFirstUpdate"), hr();
    }
  }
  __name(Si, "Si");
  u(Si, "show");
  function Ti() {
    var N = !I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Pe = Fl(I.props.duration, 1, yr.duration);
    if (!(N || te || ae) && (ve("onHide", [I], false), I.props.onHide(I) !== false)) {
      if (I.state.isVisible = false, I.state.isShown = false, p = false, f = false, pe() && (z.style.visibility = "hidden"), Wt(), Ut(), je(true), pe()) {
        var me = ke(), mt = me.box, At = me.content;
        I.props.animation && (Wl([mt, At], Pe), Op([mt, At], "hidden"));
      }
      Ke(), nt(), I.props.animation ? pe() && fr(Pe, I.unmount) : I.unmount();
    }
  }
  __name(Ti, "Ti");
  u(Ti, "hide");
  function Ro(N) {
    ce().addEventListener("mousemove", C), Tp(Ka, C), C(N);
  }
  __name(Ro, "Ro");
  u(Ro, "hideWithInteractivity");
  function Do() {
    I.state.isVisible && I.hide(), !!I.state.isMounted && (Xr(), St().forEach(function(N) {
      N._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), Vl = Vl.filter(function(N) {
      return N !== I;
    }), I.state.isMounted = false, ve("onHidden", [I]));
  }
  __name(Do, "Do");
  u(Do, "unmount");
  function hs() {
    I.state.isDestroyed || (I.clearDelayTimeouts(), I.unmount(), dn(), delete r._tippy, I.state.isDestroyed = true, ve("onDestroy", [I]));
  }
  __name(hs, "hs");
  u(hs, "destroy");
}
__name(Zv, "Zv");
u(Zv, "createTippy");
function go(r, e) {
  e === void 0 && (e = {});
  var t = yr.plugins.concat(e.plugins || []);
  Hv();
  var i = Object.assign({}, e, { plugins: t }), l = kv(r);
  if (false)
    var c, f;
  var y = l.reduce(function(v, p) {
    var h = p && Zv(p, i);
    return h && v.push(h), v;
  }, []);
  return ts(r) ? y[0] : y;
}
__name(go, "go");
u(go, "tippy");
go.defaultProps = yr;
go.setDefaultProps = Uv;
go.currentInput = Or;
var Ax = Object.assign({}, uo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
go.setDefaultProps({ render: jp });
var Mt = go;
var Ql = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Te(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = lt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = Mt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(l) {
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
      this.helpableService = et(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${Xe(i.value)}`);
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
function ge(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(e, "e");
  return u(e, "HoverableMixinClass"), A([D], e.prototype, "hoverable", 2), e;
}
__name(ge, "ge");
u(ge, "HoverableMixin");
function* rs(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(rs, "rs");
u(rs, "parse");
var Hp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Hp");
var un = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "un");
var Mr;
var ns;
var Fr = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Mr.set(this, void 0), ns.set(this, ""), Hp(this, Mr, e, "f"), un(this, Mr, "f").updateParent("");
  }
  get attributeName() {
    return un(this, Mr, "f").attr.name;
  }
  get attributeNamespace() {
    return un(this, Mr, "f").attr.namespaceURI;
  }
  get value() {
    return un(this, ns, "f");
  }
  set value(e) {
    Hp(this, ns, e || "", "f"), un(this, Mr, "f").updateParent(e);
  }
  get element() {
    return un(this, Mr, "f").element;
  }
  get booleanValue() {
    return un(this, Mr, "f").booleanValue;
  }
  set booleanValue(e) {
    un(this, Mr, "f").booleanValue = e;
  }
}, "Fr");
u(Fr, "AttributeTemplatePart");
Mr = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap();
var bo = /* @__PURE__ */ __name(class {
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
}, "bo");
u(bo, "AttributeValueSetter");
var Bp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "Bp");
var yi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "yi");
var Ir;
var Kt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Ir.set(this, void 0), Bp(this, Ir, [e], "f"), e.textContent = "";
  }
  get value() {
    return yi(this, Ir, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return yi(this, Ir, "f")[0].previousSibling;
  }
  get nextSibling() {
    return yi(this, Ir, "f")[yi(this, Ir, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), yi(this, Ir, "f")[0].before(...t);
    for (let i of yi(this, Ir, "f"))
      i.remove();
    Bp(this, Ir, t, "f");
  }
}, "Kt");
u(Kt, "NodeTemplatePart");
Ir = /* @__PURE__ */ new WeakMap();
function yo(r) {
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
__name(yo, "yo");
u(yo, "createProcessor");
function wo(r, e) {
  r.value = String(e);
}
__name(wo, "wo");
u(wo, "processPropertyIdentity");
function is(r, e) {
  return typeof e == "boolean" && r instanceof Fr && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(is, "is");
u(is, "processBooleanAttribute");
var Jl = yo(wo);
var Qv = yo((r, e) => {
  is(r, e) || wo(r, e);
});
var $p = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "$p");
var os = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "os");
var xo;
var Eo;
function* Jv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new bo(t, l);
          for (let f of rs(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let y = new Fr(c, f.value);
              c.append(y), yield y;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of rs(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Kt(t, i.value));
        break;
      }
}
__name(Jv, "Jv");
u(Jv, "collectParts");
var cn = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = Jl) {
    var l, c;
    super();
    xo.set(this, void 0), Eo.set(this, void 0), Object.getPrototypeOf(this) !== cn.prototype && Object.setPrototypeOf(this, cn.prototype), this.appendChild(e.content.cloneNode(true)), $p(this, Eo, Array.from(Jv(this)), "f"), $p(this, xo, i, "f"), (c = (l = os(this, xo, "f")).createCallback) === null || c === void 0 || c.call(l, this, os(this, Eo, "f"), t);
  }
  update(e) {
    os(this, xo, "f").processCallback(this, os(this, Eo, "f"), e);
  }
}, "cn");
u(cn, "TemplateInstance");
xo = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap();
var qp = /* @__PURE__ */ new WeakSet();
function Fp(r) {
  return qp.has(r);
}
__name(Fp, "Fp");
u(Fp, "isDirective");
function Wp(r, e) {
  return Fp(e) ? (e(r), true) : false;
}
__name(Wp, "Wp");
u(Wp, "processDirective");
function So(r) {
  return (...e) => {
    let t = r(...e);
    return qp.add(t), t;
  };
}
__name(So, "So");
u(So, "directive");
var To = /* @__PURE__ */ new WeakMap();
var Co = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), To.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), To.get(this.element).delete(this.type));
  }
  static for(e) {
    To.has(e.element) || To.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = To.get(e.element);
    return i.has(t) ? i.get(t) : new Co(e.element, t);
  }
}, "Co");
u(Co, "EventHandler");
function Up(r, e) {
  return r instanceof Fr && r.attributeName.startsWith("on") ? (Co.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(Up, "Up");
u(Up, "processEvent");
function Kv(r, e) {
  return e instanceof wi && r instanceof Kt ? (e.renderInto(r), true) : false;
}
__name(Kv, "Kv");
u(Kv, "processSubTemplate");
function em(r, e) {
  return e instanceof DocumentFragment && r instanceof Kt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(em, "em");
u(em, "processDocumentFragment");
function tm(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(tm, "tm");
u(tm, "isIterable");
function rm(r, e) {
  if (!tm(e))
    return false;
  if (r instanceof Kt) {
    let t = [];
    for (let i of e)
      if (i instanceof wi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
__name(rm, "rm");
u(rm, "processIterable");
function as(r, e) {
  Wp(r, e) || is(r, e) || Up(r, e) || Kv(r, e) || em(r, e) || rm(r, e) || wo(r, e);
}
__name(as, "as");
u(as, "processPart");
var Kl = /* @__PURE__ */ new WeakMap();
var Vp = /* @__PURE__ */ new WeakMap();
var Yp = /* @__PURE__ */ new WeakMap();
var wi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (Kl.has(this.strings))
      return Kl.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c) => i + l + (c < t ? `{{ ${c} }}` : ""), ""), Kl.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (Vp.get(e) !== t) {
      Vp.set(e, t);
      let i = new cn(t, this.values, this.processor);
      Yp.set(e, i), e instanceof Kt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Yp.get(e).update(this.values);
  }
}, "wi");
u(wi, "TemplateResult");
var nm = yo(as);
function F(r, ...e) {
  return new wi(r, e, nm);
}
__name(F, "F");
u(F, "html");
function Z(r, e) {
  r.renderInto(e);
}
__name(Z, "Z");
u(Z, "render");
var eu = /* @__PURE__ */ new WeakMap();
var im = So((...r) => (e) => {
  eu.has(e) || eu.set(e, { i: r.length });
  let t = eu.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, as(e, l));
    }) : i <= t.i && (t.i = i, as(e, r[i]));
});
var om = So((r) => (e) => {
  if (!(e instanceof Kt))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function Me(r) {
  class e extends r {
    iconHtml(i) {
      return F`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      return F([i]);
    }
    get iconStyle() {
      return F`<style>
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
var Wr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function rt(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u(e, "IfableMixinClass"), A([D], e.prototype, "if", 2), e;
}
__name(rt, "rt");
u(rt, "IfableMixin");
var tu = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ce(r) {
  class e extends r {
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = Mt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      return Z(F`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Wr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        H.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Mt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (On(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        H.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Mt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Nn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        H.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Mt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      H.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Mt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
var ss = Cn(so(), 1);
var $t = u((r) => r != null && typeof r.resizeable == "boolean", "isResizeable");
function ls(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = lt({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        ue("resizeable:init", {}, this);
      }, setInteract: (i, l) => {
        H.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT"), H.notNull(this.resizeHandle);
        let c = (0, ss.default)(this.resizeHandle);
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
      this.resizeableService = et(this.resizeableMachine).onTransition((i) => {
        this.debugResizeable && console.log(`resizeable: ${Xe(i.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(i) {
      i ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(i) {
      (0, ss.default)(this.resizeHandle).draggable({ modifiers: [ss.default.modifiers.snap({ targets: i, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
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
  return u(e, "ResizeableMixinClass"), A([D], e.prototype, "span", 2), A([D], e.prototype, "resizeHandleX", 2), A([D], e.prototype, "resizeHandleY", 2), A([D], e.prototype, "debugResizeable", 2), A([D], e.prototype, "resizing", 2), A([Oe], e.prototype, "resizeHandle", 2), e;
}
__name(ls, "ls");
u(ls, "ResizeableMixin");
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var Pr = /* @__PURE__ */ __name(class extends Ce(Te(Se(Be(Me(we(ge(HTMLElement))))))) {
  get operationType() {
    return Xs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(Xp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Xs}"`;
  }
}, "Pr");
u(Pr, "AntiControlGateElement");
Q(Pr);
function Zp(r) {
  return /^-?\d+$/.test(r);
}
__name(Zp, "Zp");
u(Zp, "isNumeric");
function xt(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
__name(xt, "xt");
u(xt, "forceSigned");
var pt = /* @__PURE__ */ __name(class extends Ce(Te(Se(we(ge(HTMLElement))))) {
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
    if (H.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this.popup;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    this.popup = Mt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(i) {
      i.setContent(t);
    } }), this.popup.show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return Z(F`
        <header>
          <h1>Local State</h1>
        </header>

        <div class="body">
          <section>
            r:
            <span class="font-mono font-bold">${xt(this.d)}</span>, ϕ:
            <span class="font-mono font-bold">${xt(this.phi, 2)}</span>, θ:
            <span class="font-mono font-bold">${xt(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="font-mono font-bold">${xt(this.x)}</span>, y:
            <span class="font-mono font-bold">${xt(this.y)}</span>, z:
            <span class="font-mono font-bold">${xt(this.z)}</span>
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
    let e = u((i) => F`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u((i, l) => F`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    Z(F`<style>
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
    return `"${Zs}"`;
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
}, "pt");
u(pt, "BlochDisplayElement"), A([Oe], pt.prototype, "body", 2), A([Oe], pt.prototype, "vectorLine", 2), A([Oe], pt.prototype, "vectorEnd", 2), A([Oe], pt.prototype, "vector", 2), A([at], pt.prototype, "vectorEndCircles", 2), A([D], pt.prototype, "x", 2), A([D], pt.prototype, "y", 2), A([D], pt.prototype, "z", 2);
Q(pt);
var Qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var qt = /* @__PURE__ */ __name(class extends Ce(Te(Se(Be(Me(we(ge(HTMLElement))))))) {
  get operationType() {
    return Qs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(Qp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Qs}"`;
  }
}, "qt");
u(qt, "ControlGateElement");
Q(qt);
var Jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(Se(Be(Me(we(ge(HTMLElement))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(Jp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ma}<${this.if}"` : `"${ma}"`;
  }
}, "er");
u(er, "HGateElement");
Q(er);
var Kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ce(Te(rp(Se(Me(we(ge(HTMLElement))))))) {
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
    Z(F`<div part="body">
          ${this.iconHtml(Kp)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ga}"` : `"${ga}>${this.flag}"`;
  }
}, "tr");
u(tr, "MeasurementGateElement"), A([D], tr.prototype, "value", 2);
Q(tr);
var ed = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(on(Se(Be(Me(we(ge(HTMLElement)))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(ed)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ba}"` : `"${ba}(${this.angle.replace("/", "_")})"`;
  }
}, "rr");
u(rr, "PhaseGateElement");
Q(rr);
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
var td = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var Ar = /* @__PURE__ */ __name(class extends Ce(Te(ls(Se(Me(we(ge(HTMLElement))))))) {
  get operationType() {
    return Js;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(F`<div part="layout">
          <div part="body">${this.iconHtml(td)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(us)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Js}${this.span}"`;
  }
}, "Ar");
u(Ar, "QftDaggerGateElement");
Q(Ar);
var rd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var zr = /* @__PURE__ */ __name(class extends Ce(Te(ls(Se(Me(we(ge(HTMLElement))))))) {
  get operationType() {
    return Ks;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(F`<div part="layout">
          <div part="body">${this.iconHtml(rd)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(us)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ks}${this.span}"`;
  }
}, "zr");
u(zr, "QftGateElement");
Q(zr);
var nd = `<svg
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
var nr = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(Se(Be(Me(we(ge(HTMLElement))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(nd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ya}<${this.if}"` : `"${ya}"`;
  }
}, "nr");
u(nr, "RnotGateElement");
Q(nr);
var id = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(on(Se(Be(Me(we(ge(HTMLElement)))))))))) {
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(id)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${wa}"` : `"${wa}(${this.angle.replace("/", "_")})"`;
  }
}, "ir");
u(ir, "RxGateElement");
Q(ir);
var od = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(on(Se(Be(Me(we(ge(HTMLElement)))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(od)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${xa}"` : `"${xa}(${this.angle.replace("/", "_")})"`;
  }
}, "or");
u(or, "RyGateElement");
Q(or);
var ad = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(on(Se(Be(Me(we(ge(HTMLElement)))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(ad)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ea}"` : `"${Ea}(${this.angle.replace("/", "_")})"`;
  }
}, "ar");
u(ar, "RzGateElement");
Q(ar);
var sd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var sr = /* @__PURE__ */ __name(class extends Ce(Te(Ue(Se(Be(Me(we(ge(HTMLElement)))))))) {
  get operationType() {
    return el;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(sd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${el}"`;
  }
}, "sr");
u(sr, "SwapGateElement");
Q(sr);
var ld = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var lr = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(Se(Be(Me(we(ge(HTMLElement))))))))) {
  get operationType() {
    return Sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(ld)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Sa}<${this.if}"` : `"${Sa}"`;
  }
}, "lr");
u(lr, "TGateElement");
Q(lr);
var ud = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ft = /* @__PURE__ */ __name(class extends Ce(Te(Se(Me(we(ge(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return pc;
      case "1":
        return dc;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">
          ${this.iconHtml(ud)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Ft");
u(Ft, "WriteGateElement"), A([D], Ft.prototype, "value", 2);
Q(Ft);
var cd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var ur = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(Se(Be(Me(we(ge(HTMLElement))))))))) {
  get operationType() {
    return Ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(cd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ta}<${this.if}"` : `"${Ta}"`;
  }
}, "ur");
u(ur, "XGateElement");
Q(ur);
var pd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(Se(Be(Me(we(ge(HTMLElement))))))))) {
  get operationType() {
    return Ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(pd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ca}<${this.if}"` : `"${Ca}"`;
  }
}, "cr");
u(cr, "YGateElement");
Q(cr);
var dd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends Ce(Te(rt(Ue(Se(Be(Me(we(ge(HTMLElement))))))))) {
  get operationType() {
    return Oa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(dd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Oa}<${this.if}"` : `"${Oa}"`;
  }
}, "pr");
u(pr, "ZGateElement");
Q(pr);
var Fe = u((r) => r instanceof Pr || r instanceof pt || r instanceof qt || r instanceof er || r instanceof tr || r instanceof rr || r instanceof Ar || r instanceof zr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof lr || r instanceof Ft || r instanceof ur || r instanceof cr || r instanceof pr, "isOperation");
var fd = u((r) => r != null && r instanceof er, "isHGateElement");
var hd = u((r) => r != null && r instanceof ur, "isXGateElement");
var vd = u((r) => r != null && r instanceof cr, "isYGateElement");
var md = u((r) => r != null && r instanceof pr, "isZGateElement");
var Oo = u((r) => r != null && r instanceof rr, "isPhaseGateElement");
var gd = u((r) => r != null && r instanceof lr, "isTGateElement");
var bd = u((r) => r != null && r instanceof nr, "isRnotGateElement");
var cs = u((r) => r != null && r instanceof ir, "isRxGateElement");
var ps = u((r) => r != null && r instanceof or, "isRyGateElement");
var ds = u((r) => r != null && r instanceof ar, "isRzGateElement");
var yd = u((r) => r != null && r instanceof sr, "isSwapGateElement");
var ru = u((r) => r != null && r instanceof qt, "isControlGateElement");
var wd = u((r) => r != null && r instanceof Pr, "isAntiControlGateElement");
var xd = u((r) => r != null && r instanceof pt, "isBlochDisplayElement");
var JC = u((r) => r != null && r instanceof Ft, "isWriteGateElement");
var Ed = u((r) => r != null && r instanceof tr, "isMeasurementGateElement");
var Mo = Cn(so(), 1);
var nu = u((r) => r !== null && r instanceof Ur, "isAngleSliderElement");
var Ur = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = lt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new ot("Bad denominator", this.denominator);
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
      let [i] = this.findSnapAngle(ac(this.angle));
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
    this.angleSliderService = et(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Xe(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, Mo.default)(this).unset();
  }
  update() {
    Z(F`<style>
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
    let t = Mo.default.getElementRect(e.target).width, i = e.pageX / t;
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
}, "Ur");
u(Ur, "AngleSliderElement"), A([D], Ur.prototype, "angle", 2), A([D], Ur.prototype, "radian", 2), A([D], Ur.prototype, "denominator", 2), A([D], Ur.prototype, "disabled", 2), A([D], Ur.prototype, "debug", 2);
Q(Ur);
var Io = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let t = e.currentTarget;
    H.notNull(t);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    t.setAttribute("data-active", "");
  }
}, "Io");
u(Io, "ButtonGroupElement"), A([at], Io.prototype, "buttons", 2), Io = A([Q], Io);
var xi = Cn(Td(), 1);
var dt = /* @__PURE__ */ __name(class extends HTMLElement {
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
          throw new ot("unsupported qubit count", this.qubitCount);
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
          throw new ot("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let t = e.getAttribute("data-ket");
      return H.notNull(t), parseInt(t);
    }), H.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    xi.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        H.notNull(i);
        let l = parseInt(i), c = e[l];
        if (c === void 0)
          continue;
        let f = Math.floor(c.abs() * 1e5) / 1e5, y = c.phase() / Math.PI * 180;
        t.setAttribute("data-amplitude-real", c.real.toString()), t.setAttribute("data-amplitude-imag", c.imag.toString()), f === 0 ? t.classList.add("magnitude-0") : (t.classList.remove("magnitude-0"), t.style.setProperty("--magnitude", f.toString()));
        let v = Math.trunc(y);
        v < 0 && (v = 360 + v), t.style.setProperty("--phase", `-${v.toString()}deg`);
      }
    });
  }
  renderShadowRoot() {
    Z(F`<style>
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
        throw new ot("unsupported qubit count", this.qubitCount);
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
        throw new ot("unsupported qubit count", this.qubitCount);
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
        throw new ot("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    H.notNull(this.window), H.notNull(this.innerContainer), this.qubitCount !== 0 && xi.default.mutate(() => {
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
    this.window !== void 0 && this.innerContainer !== void 0 && (xi.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, t = this.overscanColEndIndex, i = this.overscanRowStartIndex, l = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === t && this.lastRowStartIndex === i && this.lastRowEndIndex === l)) {
        for (let c = i; c <= l; c++)
          for (let f = e; f <= t; f++)
            (f < this.lastColStartIndex || this.lastColEndIndex < f || c < this.lastRowStartIndex || this.lastRowEndIndex < c) && this.qubitCirclePositions.push({ col: f, row: c });
        this.lastColStartIndex = e, this.lastColEndIndex = t, this.lastRowStartIndex = i, this.lastRowEndIndex = l;
      }
    }), xi.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let t of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(t);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    xi.default.mutate(() => {
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
    let y = document.createElement("div");
    return y.className = "qubit-circle__phase", c.appendChild(f), c.appendChild(y), c;
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
        throw new ot("unsupported qubit count", this.qubitCount);
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
    let i = Mt(t, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    H.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    H.notNull(c);
    let f = t.getAttribute("data-amplitude-imag");
    H.notNull(f);
    let y = parseInt(l), v = parseFloat(c), p = parseFloat(f), h = new tn(v, p), b = h.abs(), w = h.phase() / Math.PI * 180, S = document.importNode(this.qubitCirclePopupTemplate.content, true), C = S.getElementById("qubit-circle-popup--ket-binary-value"), M = S.getElementById("qubit-circle-popup--ket-decimal-value"), _ = S.getElementById("qubit-circle-popup--amplitude"), q = S.getElementById("qubit-circle-popup--amplitude-real-value"), L = S.getElementById("qubit-circle-popup--amplitude-imag-value"), W = S.getElementById("qubit-circle-popup--probability"), I = S.getElementById("qubit-circle-popup--probability-value"), J = S.getElementById("qubit-circle-popup--phase"), z = S.getElementById("qubit-circle-popup--phase-value");
    H.notNull(_), H.notNull(q), H.notNull(L), H.notNull(W), H.notNull(I), H.notNull(J), H.notNull(z), C && (C.textContent = y.toString(2).padStart(this.qubitCount, "0")), M && (M.textContent = y.toString()), this.showQubitCirclePopupAmplitude ? (q.textContent = xt(h.real, 5), L.textContent = `${xt(h.imag, 5)}i`) : _.style.display = "none", this.showQubitCirclePopupProbability ? I.textContent = `${xt(b * b * 100, 4)}%` : W.style.display = "none", this.showQubitCirclePopupPhase ? z.textContent = `${xt(w, 2)}\xB0` : J.style.display = "none";
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
}, "dt");
u(dt, "CircleNotationElement"), A([D], dt.prototype, "qubitCount", 2), A([D], dt.prototype, "qubitCircleSize", 2), A([D], dt.prototype, "colCount", 2), A([D], dt.prototype, "rowCount", 2), A([D], dt.prototype, "paddingX", 2), A([D], dt.prototype, "paddingY", 2), A([D], dt.prototype, "overscanCount", 2), A([D], dt.prototype, "colorPhase", 2), A([D], dt.prototype, "qubitCirclePopupTemplateId", 2), A([D], dt.prototype, "showQubitCirclePopupAmplitude", 2), A([D], dt.prototype, "showQubitCirclePopupProbability", 2), A([D], dt.prototype, "showQubitCirclePopupPhase", 2), A([Oe], dt.prototype, "window", 2), A([Oe], dt.prototype, "innerContainer", 2), A([at], dt.prototype, "qubitCircles", 2), dt = A([Q], dt);
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
    Z(F`<slot></slot>`, this.shadowRoot);
  }
}, "Po");
u(Po, "CircleNotationPanelElement"), A([Oe], Po.prototype, "circleNotation", 2), Po = A([Q], Po);
var Cd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Od = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Vr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(F`
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
            ${this.iconHtml(Cd)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(Od)}
          </button>

          <div id="body">
            <slot></slot>

            <div id="dot-group">${this.dotsHtml()}</div>
          </div>
        </div>
      `, this.shadowRoot);
  }
  iconHtml(e) {
    return F([e]);
  }
  dotsHtml() {
    let e = F``;
    for (let t = 0; t < this.gateSets.length; t++)
      e = F`${e}
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
      return H.need(Fe(t), `${t} must be an operation.`), t;
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
}, "Vr");
u(Vr, "GateCarouselElement"), A([D], Vr.prototype, "currentGateSetIndex", 2), A([Oe], Vr.prototype, "contentClipper", 2), A([at], Vr.prototype, "gateSets", 2), A([at], Vr.prototype, "dots", 2), A([at], Vr.prototype, "popinAnimationGates", 2), Vr = A([Q], Vr);
var ou = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot);
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
    this.popup = Mt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !Fe(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    H.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return Z(F`${t}`, i), i;
  }
}, "ou");
u(ou, "InspectorButtonElement");
Q(ou);
var Rt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return cc(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Wr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), On(e)) {
      let t = qi(e.angle);
      Oo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (cs(e) || ps(e) || ds(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    Nn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    Z(F`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!nu(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!nu(t))
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
    if (uc(e)) {
      let t, i = qi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), sc(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : lc(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    Zp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Rt");
u(Rt, "OperationInspectorElement"), A([Oe], Rt.prototype, "ifInput", 2), A([Oe], Rt.prototype, "angleInputLabel", 2), A([Oe], Rt.prototype, "angleInput", 2), A([Oe], Rt.prototype, "angleSlider", 2), A([Oe], Rt.prototype, "denominatorInput", 2), A([Oe], Rt.prototype, "denominatorVariableLabel", 2), A([Oe], Rt.prototype, "denominatorLabel", 2), A([Oe], Rt.prototype, "reduceAngleFractionCheckbox", 2), A([Oe], Rt.prototype, "flagInput", 2), A([D], Rt.prototype, "conditionalGatePaneDisabled", 2), A([D], Rt.prototype, "anglePaneDisabled", 2), A([D], Rt.prototype, "conditionalFlagPaneDisabled", 2);
Q(Rt);
var fs = Cn(Id(), 1);
var Gt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(F`<style>
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
    let e = Mt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let t = document.importNode(this.popupTemplate.content, true), i = new fs.default(this.amplitude), l = t.getElementById("qubit-circle-popup--header"), c = t.getElementById("qubit-circle-popup--ket-binary-value"), f = t.getElementById("qubit-circle-popup--ket-decimal-value"), y = t.getElementById("qubit-circle-popup--amplitude"), v = t.getElementById("qubit-circle-popup--amplitude-real-value"), p = t.getElementById("qubit-circle-popup--amplitude-imag-value"), h = t.getElementById("qubit-circle-popup--probability"), b = t.getElementById("qubit-circle-popup--probability-value"), w = t.getElementById("qubit-circle-popup--phase"), S = t.getElementById("qubit-circle-popup--phase-value");
    H.notNull(l), H.notNull(c), H.notNull(f), H.notNull(y), H.notNull(v), H.notNull(p), H.notNull(h), H.notNull(b), H.notNull(w), H.notNull(S), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (v.textContent = xt(i.re, 5), p.textContent = `${xt(i.im, 5)}i`) : y.style.display = "none", this.showPopupProbability ? b.textContent = `${xt(this.magnitude * this.magnitude * 100, 4)}%` : h.style.display = "none", this.showPopupPhase ? S.textContent = `${xt(this.phaseDeg, 2)}\xB0` : w.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(t), e.setContent(C.innerHTML), e.show();
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
    H.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "Gt");
u(Gt, "QubitCircleElement"), A([D], Gt.prototype, "ket", 2), A([D], Gt.prototype, "qubitCount", 2), A([D], Gt.prototype, "amplitude", 2), A([D], Gt.prototype, "hidePhase", 2), A([D], Gt.prototype, "popupTemplateId", 2), A([D], Gt.prototype, "showPopupHeader", 2), A([D], Gt.prototype, "showPopupAmplitude", 2), A([D], Gt.prototype, "showPopupProbability", 2), A([D], Gt.prototype, "showPopupPhase", 2), A([D], Gt.prototype, "darkMode", 2), Gt = A([Q], Gt);
var Pd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Ad = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
    this.runCircuitButtonMachine = lt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c = l / 2, f = this.getBoundingClientRect(), y = f.left + window.pageXOffset, v = f.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (y + c)}px`, i.style.top = `${t.clientY - (v + c)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = et(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Xe(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    Z(F`<style>
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
    return F([Pd]);
  }
  get tailSpinIcon() {
    return F([Ad]);
  }
}, "Un");
u(Un, "RunCircuitButtonElement"), A([D], Un.prototype, "running", 2), A([D], Un.prototype, "debug", 2), A([Oe], Un.prototype, "body", 2), A([Oe], Un.prototype, "ripple", 2);
Q(Un);
var Yr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(F`<slot></slot>`, this.shadowRoot);
  }
}, "Yr");
u(Yr, "SlideInElement"), A([D], Yr.prototype, "direction", 2), A([D], Yr.prototype, "directionDesktop", 2), A([D], Yr.prototype, "duration", 2), A([D], Yr.prototype, "marginTop", 2), A([D], Yr.prototype, "marginBottom", 2), Yr = A([Q], Yr);
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
    Z(F`<style>
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
}, "pn");
u(pn, "CircuitBlockElement"), A([D], pn.prototype, "comment", 2), A([D], pn.prototype, "finalized", 2), pn = A([Q], pn);
var _r = u((r) => r != null && r instanceof Et, "isCircuitStepElement");
var Re = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let f = e(i, l, c), y = t.get(f);
  return y ? y.push(i) : t.set(f, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Et = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = lt({ id: "circuit-step", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones"] }, DELETE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (!(t.type === "SNAP_DROPZONE" || t.type === "OCCUPY_DROPZONE"))
        return;
      let i = t.dropzone, l = this.bit(i);
      H.notNull(i.operation), i.operation.bit = l;
    }, updateResizeableSpanDropzones: (e, t) => {
      if (!(t.type === "SNAP_DROPZONE" || t.type === "UNSNAP_DROPZONE" || t.type === "OCCUPY_DROPZONE" || t.type === "DELETE_OPERATION" || t.type === "RESIZE_OPERATION"))
        return;
      let i = 1;
      for (let l of this.dropzones) {
        let c = l.operation;
        if ($t(c)) {
          i = c.span;
          continue;
        }
        c === null && (i > 1 ? (l.occupied = true, i -= 1) : l.occupied = false);
      }
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
    this.circuitStepService = et(this.circuitStepMachine).onTransition((e) => {
      !this.debug || console.log(`circuit-step: ${Xe(e.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let e = 0;
    for (let [t, i] of Object.entries(this.dropzones)) {
      if (!i.occupied)
        continue;
      let l = parseInt(t, 10) + 1;
      if (l > e && (e = l), $t(i.operation)) {
        let c = l + i.operation.span - 1;
        c > e && (e = c);
      }
    }
    return H.need(0 <= e && e <= va.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
  attributeChangedCallback(e, t, i) {
    if (t !== i && (e === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let l of this.dropzones)
        i !== null ? l.shadow = true : l.shadow = false;
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let c of this.dropzones)
      c.connectTop = false, c.connectBottom = false;
    let t = this.controlGateDropzones, i = this.antiControlGateDropzones, l = this.controllableDropzones(e);
    for (let c of l)
      Fi(c.operation) && (c.operation.controls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), t.length === 1 && l.length === 0) {
      t[0].operation.disable();
      return;
    }
    if (i.length === 1 && l.length === 0) {
      i[0].operation.disable();
      return;
    }
    t.length !== 0 && (l.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e));
  }
  updateSwapConnections(e) {
    let t = e == null ? void 0 : e.disableSwap, i = this.swapGateDropzones;
    if (i.length !== 2 || t)
      for (let l of i)
        l.operation.disable();
    else {
      for (let c of i)
        c.operation.enable(), c.connectTop = i.some((y) => this.bit(y) < this.bit(c)), c.connectBottom = i.some((y) => this.bit(y) > this.bit(c));
      let l = i.map((c) => this.bit(c));
      for (let c of this.freeDropzones) {
        let f = Math.min(...l), y = Math.max(...l);
        f < this.bit(c) && this.bit(c) < y && (c.connectTop = true, c.connectBottom = true);
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
        if (!Oo(f.operation))
          throw new Error(`${f.operation} isn't a phase-gate element.`);
        return l.angle === f.operation.angle;
      }).map((f) => this.bit(f));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c = c.slice(0, e.maxPhasePhaseTargetGates)), !!c.includes(this.bit(i)) && (i.connectTop = c.some((f) => f < this.bit(i)), i.connectBottom = c.some((f) => f > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c = this.phaseGateDropzones.filter((v) => v.connectTop || v.connectBottom).map((v) => this.bit(v)), f = Math.min(...c), y = Math.max(...c);
      f < this.bit(i) && this.bit(i) < y && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c) => this.bit(c)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c of t) {
      l += 1;
      let f = c.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? f.disable() : (f.enable(), c.connectTop = i.some((y) => this.bit(c) > y), c.connectBottom = i.some((y) => this.bit(c) < y));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((h) => h.operationName))], c = this.numControlGateDropzones(e, l), f = i.map((h) => this.bit(h)), y = c === null ? f : f.slice(0, c), v = t.map((h) => this.bit(h)), p = y.concat(v);
    for (let [h, b] of Object.entries(i)) {
      let w = b.operation;
      b.connectBottom = p.some((S) => this.bit(b) < S), b.connectTop = p.some((S) => this.bit(b) > S), c === null || c !== null && parseInt(h) < c ? w.enable() : (b.connectTop = Math.max(...p) > this.bit(b), w.disable());
    }
    for (let h of t) {
      if (!Fi(h.operation))
        throw new Error(`${h.operation} isn't controllable.`);
      h.operation.controls = this.controlBits(h, f, e), h.connectTop = p.some((b) => b < this.bit(h)), h.connectBottom = p.some((b) => b > this.bit(h));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((v) => ru(v.operation) && !v.operation.disabled).map((v) => this.bit(v)), l = t.map((v) => this.bit(v)), c = i.concat(l), f = Math.min(...c), y = Math.max(...c);
    for (let v of this.freeDropzones)
      f < this.bit(v) && this.bit(v) < y && (v.connectTop = true, v.connectBottom = true);
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
    return this.keep ? false : this.dropzones.every((e) => e.operation === null);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return H.notNull(t), t;
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let e = new he();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new he();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.occupiedDropzones.filter((e) => ru(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => wd(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, f = 0, y = 0, v = 0, p = 0, h = 0, b = 0;
    return this.occupiedDropzones.filter((w) => Fi(w.operation)).filter((w) => e === void 0 ? true : fd(w.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : hd(w.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : vd(w.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : md(w.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : Oo(w.operation) ? (f += 1, e.maxCphaseTargetGates !== 0 && f > e.maxCphaseTargetGates ? false : !e.disableCphase) : gd(w.operation) ? (y += 1, e.maxCtTargetGates !== 0 && y > e.maxCtTargetGates ? false : !e.disableCt) : bd(w.operation) ? (v += 1, e.maxCrnotTargetGates !== 0 && v > e.maxCrnotTargetGates ? false : !e.disableCrnot) : cs(w.operation) ? (p += 1, e.maxCrxTargetGates !== 0 && p > e.maxCrxTargetGates ? false : !e.disableCrx) : ps(w.operation) ? (h += 1, e.maxCryTargetGates !== 0 && h > e.maxCryTargetGates ? false : !e.disableCry) : ds(w.operation) ? (b += 1, e.maxCrzTargetGates !== 0 && b > e.maxCrzTargetGates ? false : !e.disableCrz) : yd(w.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    ue("circuit-step:update", {}, this);
  }
  deleteOperation(e) {
    let t = e.target;
    console.log("circuit-step: DELETE_OPERATION"), this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: t });
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
    Fe(e.target) || ue("circuit-step:click", {}, this);
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
    for (let [t, i] of Re(this.operations, (l) => l.constructor))
      switch (t) {
        case er: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controls.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controls), e.push(w);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controls.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controls), e.push(w);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controls.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controls), e.push(w);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controls.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controls), e.push(w);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controls.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controls), e.push(C);
              }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controls.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controls), e.push(w);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controls.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controls), e.push(w);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controls.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controls), e.push(C);
              }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controls.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controls), e.push(C);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controls.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controls), e.push(C);
              }
          break;
        }
        case zr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.span)) {
            let v = f[0].operationType, p = f.map((b) => b.bit), h = { type: v, span: c, targets: p };
            e.push(h);
          }
          break;
        }
        case Ar: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.span)) {
            let v = f[0].operationType, p = f.map((b) => b.bit), h = { type: v, span: c, targets: p };
            e.push(h);
          }
          break;
        }
        case sr: {
          let l = i.filter((v) => !v.disabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controls, y = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (y.controls = f), e.push(y);
          break;
        }
        case qt: {
          let l = i.filter((f) => !f.disabled);
          if (l.length < 2 || this.operations.some((f) => Fi(f) && f.controls.length > 0))
            break;
          let c = l.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Pr:
          break;
        case pt: {
          let l = i, c = i.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
        case Ft: {
          let l = i;
          for (let [, c] of Re(l, (f) => f.value)) {
            let f = c.map((y) => y.bit);
            e.push({ type: c[0].operationType, targets: f });
          }
          break;
        }
        case tr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.flag)) {
            let y = f.map((h) => h.bit), p = { type: f[0].operationType, targets: y };
            c !== "" && (p.flag = c), e.push(p);
          }
          break;
        }
        default:
          throw new ot("Unrecognized operation", { klass: t });
      }
    return e;
  }
  get operations() {
    return this.occupiedDropzones.map((e) => e.operation).filter((e) => e !== null);
  }
  toJson() {
    let e = this.dropzones.map((t) => t.toJson());
    for (; e.length > 0 && e[e.length - 1] === "1"; )
      e.pop();
    return e.length === 0 ? "[1]" : `[${e.join(",")}]`;
  }
}, "Et");
u(Et, "CircuitStepElement"), A([D], Et.prototype, "active", 2), A([D], Et.prototype, "breakpoint", 2), A([D], Et.prototype, "shadow", 2), A([D], Et.prototype, "keep", 2), A([D], Et.prototype, "debug", 2), A([at], Et.prototype, "dropzones", 2), A([at], Et.prototype, "freeDropzones", 2), A([at], Et.prototype, "occupiedDropzones", 2);
Q(Et);
var _d = Cn(so(), 1);
var zd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var zo = u((r) => r != null && r instanceof he, "isCircuitDropzoneElement");
var Ao;
var he = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    fa(this, Ao, null);
    this.occupied = false;
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.targets = "circuit-step.dropzones circuit-step.freeDropzones";
    this.debug = false;
    this.circuitDropzoneMachine = lt({ id: "circuit-dropzone", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
      H.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      H.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, ue("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.removeAttribute("data-operation-name"), this.occupied = false, ue("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      ue("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), this.occupied = true, t.operation.snapped = true);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && (this.removeAttribute("data-operation-name"), this.occupied = false, this.removeChild(t.operation));
    }, resizeOperation: () => {
      ue("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      ue("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      ue("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = et(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = ha(this, Ao, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = da(this, Ao)) == null || e.abort();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-occupied" && (i !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
  }
  update() {
    Z(F`<style>
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
    return H.notNull(e), _r(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, _d.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!Fe(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  resizeOperation(e) {
    let t = e.target;
    if (!$t(t))
      throw new Error(`${t} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return F([zd]);
  }
}, "he");
u(he, "CircuitDropzoneElement"), Ao = /* @__PURE__ */ new WeakMap(), A([D], he.prototype, "occupied", 2), A([D], he.prototype, "operationName", 2), A([D], he.prototype, "inputWireQuantum", 2), A([D], he.prototype, "outputWireQuantum", 2), A([D], he.prototype, "connectTop", 2), A([D], he.prototype, "connectBottom", 2), A([D], he.prototype, "shadow", 2), A([D], he.prototype, "targets", 2), A([D], he.prototype, "debug", 2);
Q(he);
var Ei = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = lt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, t) => {
      if (t.type !== "GRAB_OPERATION")
        return;
      let i = t.operation;
      tu(i) && i.menu && i.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, t) => {
      t.type !== "GRAB_OPERATION" && t.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(t.operation);
    }, snapOperationIntoDropzone: (e, t) => {
      if (t.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let i = t.operation, l = this.circuit.snapTargetAt(t.x, t.y);
      if (i.snapped = true, l.dropzone === null) {
        let c = l.stepIndex;
        H.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), y = f.dropzones[l.wireIndex];
        H.notNull(y), y.append(i), y.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
      } else
        l.dropzone.append(i);
    }, snapResizeHandleIntoDropzone: (e, t) => {
      if (t.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let i = t.operation;
      if (!$t(i))
        throw new Error(`${i} is not resizeable`);
      let l = i.dropzone;
      if (!zo(l))
        throw new Error(`${l} is not a circuit dropzone`);
      H.notNull(l.circuitStep);
      let c = l.circuitStep.dropzones.indexOf(l), y = this.circuit.resizeHandleSnapTargetAt(t.x, t.y).wireIndex - c + 1;
      i.span = y;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < va.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      tu(i) && i.initMenu();
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
    this.circuitEditorService = et(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${Xe(e.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("menuable:show-menu", this.showOperationMenu), this.addEventListener("menuable:menu-if", this.showOperationInspectorIf), this.addEventListener("menuable:menu-angle", this.showOperationInspectorAngle), this.addEventListener("menuable:menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("resizeable:release-resize-handle", this.releaseResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("menuable:menu-delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let t = e.target;
    if (Wa(t))
      t.draggable = true;
    else
      throw new ot("Not a draggable element.", { el: t });
  }
  enableResizing(e) {
    let t = e.target;
    if ($t(t))
      t.resizeable = true;
    else
      throw new ot("Not a resizeable element.", { el: t });
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
    !Fe(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!Fe(t))
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
    if (!On(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!Nn(t))
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
    if (H.notNull(i), !On(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!Nn(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  grabResizeHandle(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: t });
  }
  releaseResizeHandle(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: t });
  }
  releaseOperation(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: t });
  }
  resizeEnd(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!_r(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!_r(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!_r(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  resizeHandleInSnapRange(e) {
    let t = e.target;
    if (!Fe(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c = l.x, f = l.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: t, x: c, y: f });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!_r(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!_r(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "Ei");
u(Ei, "CircuitEditorElement"), A([D], Ei.prototype, "debug", 2), A([Oe], Ei.prototype, "circuit", 2), A([Oe], Ei.prototype, "inspectorButton", 2);
Q(Ei);
var _o;
var su = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    fa(this, _o, null);
  }
  connectedCallback() {
    let { signal: e } = ha(this, _o, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = da(this, _o)) == null || e.abort();
  }
  update() {
    Z(F`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    Wa(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), $t(e) && (e.resizeable = true), Ql(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => Fe(e));
  }
  newOperation(e) {
    let t = e.target;
    this.assertOperation(t);
    let i = t.cloneNode(false);
    this.assertOperation(i), Ql(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!Fe(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "su");
u(su, "PaletteDropzoneElement"), _o = /* @__PURE__ */ new WeakMap();
Q(su);
var se = /* @__PURE__ */ __name(class extends ge(HTMLElement) {
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
    this.quantumCircuitMachine = lt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = et(this.quantumCircuitMachine).onTransition((e) => {
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
      i.wireCount > 0 && i.wireCount > t && (e = i, t = i.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let t = 0; t < e; t++)
      this.append(new Et());
  }
  stepAt(e) {
    let t = this.steps[e];
    return H.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new Et();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
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
    Z(F`<slot></slot>`, this.shadowRoot);
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
      let l = new zr();
      return l.span = e, l;
    }, ...i), this.resize(), this;
  }
  qftDagger(e, ...t) {
    let i;
    return typeof t[0] == "number" ? i = t : i = t[0].targets, this.applyOperationToTargets(() => {
      let l = new Ar();
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
    return this.applyOperationToTargets(() => new pt(), ...e), this;
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
    let l = [].concat(t), c = [].concat(i), f = l.concat(c), y = Math.max(...f) + 1, v = this.appendStepWithDropzones(y);
    for (let p of l)
      v.dropzoneAt(p).put(new qt());
    for (let p of c)
      v.dropzoneAt(p).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(v);
  }
  appendStep() {
    let e = new Et(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new Et();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new he();
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
      let y = [];
      for (let v of c) {
        switch (true) {
          case /^\|0>$/.test(v): {
            let p = new Ft();
            p.value = "0", y.push(p), f.append(new he());
            break;
          }
          case /^\|1>$/.test(v): {
            let p = new Ft();
            p.value = "1", y.push(p), f.append(new he());
            break;
          }
          case /^H/.test(v): {
            let p = new er();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new he());
            break;
          }
          case (/^X$/.test(v) || /^X<(.+)$/.test(v)): {
            let p = new ur();
            p.if = v.slice(2).trim(), y.push(p), f.append(new he());
            break;
          }
          case /^Y/.test(v): {
            let p = new cr();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new he());
            break;
          }
          case /^Z/.test(v): {
            let p = new pr();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new he());
            break;
          }
          case /^P/.test(v): {
            let p = new rr();
            p.angle = this.angleParameter(v.slice(1)), y.push(p), f.append(new he());
            break;
          }
          case /^T/.test(v): {
            let p = new lr();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new he());
            break;
          }
          case /^X\^½/.test(v): {
            let p = new nr();
            p.if = this.ifVariable(v.slice(3)), y.push(p), f.append(new he());
            break;
          }
          case /^Rx/.test(v): {
            let p = new ir();
            p.angle = this.angleParameter(v.slice(2)), y.push(p), f.append(new he());
            break;
          }
          case /^Ry/.test(v): {
            let p = new or();
            p.angle = this.angleParameter(v.slice(2)), y.push(p), f.append(new he());
            break;
          }
          case /^Rz/.test(v): {
            let p = new ar();
            p.angle = this.angleParameter(v.slice(2)), y.push(p), f.append(new he());
            break;
          }
          case /^QFT\d/.test(v): {
            let p = new zr(), h = parseInt(v.slice(3), 10);
            p.span = h, y.push(p);
            for (let b = 0; b < h; b++)
              f.append(new he());
            break;
          }
          case /^QFT†\d/.test(v): {
            let p = new Ar(), h = parseInt(v.slice(4), 10);
            p.span = h, y.push(p), f.append(new he());
            for (let b = 0; b < h; b++)
              f.append(new he());
            break;
          }
          case /^Swap$/.test(v): {
            let p = new sr();
            y.push(p), f.append(new he());
            break;
          }
          case /^•$/.test(v): {
            let p = new qt();
            y.push(p), f.append(new he());
            break;
          }
          case /^◦$/.test(v): {
            let p = new Pr();
            y.push(p), f.append(new he());
            break;
          }
          case /^Bloch$/.test(v): {
            let p = new pt();
            y.push(p), f.append(new he());
            break;
          }
          case /^Measure/.test(v): {
            let p = new tr(), h = ((/^>(.+)$/.exec(v.slice(7)) || [])[1] || "").trim();
            p.flag = h, y.push(p), f.append(new he());
            break;
          }
          case /^[[{](.+)$/.test(v): {
            let p = v.slice(1);
            f.remove(), t = new pn(), t.comment = p, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(v): {
            f.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (v !== 1)
              throw new Error(`Unknown operation: ${v}`);
            f.append(new he()), y.push(null);
          }
        }
        for (let [p, h] of Object.entries(y))
          h !== null && f.dropzoneAt(parseInt(p)).put(h);
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
          let f = c.map((h) => i.bit(h)), y = i.bit(l), v = f[0] === y ? f[1] : f[0], p = i.dropzoneAt(v);
          l.inputWireQuantum = t, l.outputWireQuantum = p.inputWireQuantum, t = p.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!_r(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!zo(i))
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
    $t(e) && (i = e.span);
    let l = e.dropzone;
    for (let [c, f] of Object.entries(this.steps)) {
      let y = parseInt(c);
      for (let [v, p] of Object.entries(f.dropzones)) {
        let h = parseInt(v), b = p.snapTarget, w = this.isVertical ? b.y : b.x, S = this.isVertical ? b.x : b.y;
        if (y === 0 && f.dropzones[h + i - 1] !== void 0) {
          let M = w - e.snapRange * 0.75;
          this.isVertical ? t.push({ x: S, y: M }) : t.push({ x: M, y: S }), this.snapTargets[M] === void 0 && (this.snapTargets[M] = {}), this.snapTargets[M][S] === void 0 && (this.snapTargets[M][S] = { dropzone: null, stepIndex: -1, wireIndex: h });
        }
        if (i === 1)
          (p === l || !p.occupied) && t.push(b);
        else if (!p.occupied && h + i <= f.dropzones.length && t.push(b), p === l) {
          t.push(b);
          for (let M = 1; M < i && h + M < f.dropzones.length; M++) {
            let _ = f.dropzones[h + M];
            H.notNull(_), t.push(_.snapTarget);
          }
        }
        let C = w + e.snapRange * 0.75;
        f.dropzones[h + i - 1] !== void 0 && (this.isVertical ? t.push({ x: S, y: C }) : t.push({ x: C, y: S })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][S] === void 0 && (this.snapTargets[C][S] = { dropzone: null, stepIndex: y, wireIndex: h }), this.snapTargets[w] === void 0 && (this.snapTargets[w] = {}), this.snapTargets[w][S] === void 0 && (this.snapTargets[w][S] = { dropzone: p, stepIndex: null, wireIndex: h });
      }
    }
    e.snapTargets = t;
  }
  setResizeHandleSnapTargets(e) {
    if (!$t(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!zo(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let t = e.dropzone.circuitStep;
    H.notNull(t);
    let i = t.freeDropzones, l = e.dropzone;
    i.push(l);
    let c = [];
    this.resizeHandleSnapTargets = {};
    for (let [f, y] of Object.entries(t.dropzones)) {
      let v = y.resizeHandleSnapTarget, p = this.isVertical ? v.y : v.x, h = this.isVertical ? v.x : v.y, b = parseInt(f) % this.wireCount;
      if (y.occupied || c.push(v), y === l) {
        c.push(v);
        let w = e.span;
        for (let S = 1; S < w; S++) {
          let C = t.dropzones[parseInt(f) + S];
          H.notNull(C), c.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[p] === void 0 && (this.resizeHandleSnapTargets[p] = {}), this.resizeHandleSnapTargets[p][h] === void 0 && (this.resizeHandleSnapTargets[p][h] = { dropzone: y, stepIndex: null, wireIndex: b });
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
          let y = c[f];
          y.stepIndex !== null && (y.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let f = c.snapTarget, y = this.isVertical ? f.y : f.x, v = this.isVertical ? f.x : f.y;
      H.notNull(this.snapTargets[y]), this.snapTargets[y][v] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), A([D], se.prototype, "minStepCount", 2), A([D], se.prototype, "minWireCount", 2), A([D], se.prototype, "editing", 2), A([D], se.prototype, "updateUrl", 2), A([D], se.prototype, "json", 2), A([D], se.prototype, "circuitTitle", 2), A([D], se.prototype, "debug", 2), A([D], se.prototype, "chDisabled", 2), A([D], se.prototype, "chMaxControlGates", 2), A([D], se.prototype, "chMaxTargetGates", 2), A([D], se.prototype, "cnotDisabled", 2), A([D], se.prototype, "cnotMaxControlGates", 2), A([D], se.prototype, "cnotMaxTargetGates", 2), A([D], se.prototype, "cyDisabled", 2), A([D], se.prototype, "cyMaxControlGates", 2), A([D], se.prototype, "cyMaxTargetGates", 2), A([D], se.prototype, "czDisabled", 2), A([D], se.prototype, "czMaxControlGates", 2), A([D], se.prototype, "czMaxTargetGates", 2), A([D], se.prototype, "cphaseDisabled", 2), A([D], se.prototype, "cphaseMaxControlGates", 2), A([D], se.prototype, "cphaseMaxTargetGates", 2), A([D], se.prototype, "ctDisabled", 2), A([D], se.prototype, "ctMaxControlGates", 2), A([D], se.prototype, "ctMaxTargetGates", 2), A([D], se.prototype, "crnotDisabled", 2), A([D], se.prototype, "crnotMaxControlGates", 2), A([D], se.prototype, "crnotMaxTargetGates", 2), A([D], se.prototype, "crxDisabled", 2), A([D], se.prototype, "crxMaxControlGates", 2), A([D], se.prototype, "crxMaxTargetGates", 2), A([D], se.prototype, "cryDisabled", 2), A([D], se.prototype, "cryMaxControlGates", 2), A([D], se.prototype, "cryMaxTargetGates", 2), A([D], se.prototype, "crzDisabled", 2), A([D], se.prototype, "crzMaxControlGates", 2), A([D], se.prototype, "crzMaxTargetGates", 2), A([D], se.prototype, "cswapDisabled", 2), A([D], se.prototype, "cswapMaxControlGates", 2), A([D], se.prototype, "swapDisabled", 2), A([D], se.prototype, "controlControlDisabled", 2), A([D], se.prototype, "controlControlMaxTargetGates", 2), A([D], se.prototype, "phasePhaseDisabled", 2), A([D], se.prototype, "phasePhaseMaxTargetGates", 2), A([at], se.prototype, "blocks", 2);
Q(se);
var Vn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("draggable:delete", this.maybeUpdateUrl), this.addEventListener("draggable:delete", this.freshRun), this.addEventListener("menuable:menu-delete", this.maybeUpdateUrl), this.addEventListener("menuable:menu-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step:mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step:mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step:qpu-operation-snap", this.freshRun), this.addEventListener("circuit-step:qpu-operation-unsnap", this.freshRun), this.addEventListener("circuit-step:update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step:qpu-operation-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step:qpu-operation-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.freshRun), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot);
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
          let y = parseInt(f), v = c.dropzoneAt(y).operation;
          if (xd(v)) {
            let p = t.blochVectors[y];
            v.x = p[0], v.y = p[1], v.z = p[2];
          }
        }
        if (t.measuredBits) {
          let f = t.measuredBits;
          for (let y in f) {
            let v = parseInt(y), p = c.dropzoneAt(v).operation;
            Ed(p) && (p.value = f[v].toString());
          }
        }
        for (let f of c.dropzones) {
          let y = f.operation;
          !Wr(y) || y.if !== "" && (y.disabled = !t.flags[y.if]);
        }
        if (i === t.step) {
          let f = {};
          for (let y in t.amplitudes) {
            let v = t.amplitudes[y];
            f[y] = new tn(v[0], v[1]);
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
        throw new ot("Unknown service worker message", { data: t });
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
    let e = Math.max(...this.circuit.steps.map((t) => t.maxOccupiedDropzoneBit));
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
}, "Vn");
u(Vn, "QuantumSimulatorElement"), A([D], Vn.prototype, "updateUrl", 2), A([Oe], Vn.prototype, "circuit", 2), A([Oe], Vn.prototype, "circleNotation", 2), A([at], Vn.prototype, "runCircuitButtons", 2);
Q(Vn);

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
  tn as Complex
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
