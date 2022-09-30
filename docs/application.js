var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var dh = Object.create;
var Bi = Object.defineProperty;
var ec = Object.getOwnPropertyDescriptor;
var fh = Object.getOwnPropertyNames;
var hh = Object.getPrototypeOf;
var vh = Object.prototype.hasOwnProperty;
var mh = /* @__PURE__ */ __name((r) => Bi(r, "__esModule", { value: true }), "mh");
var u = /* @__PURE__ */ __name((r, e) => Bi(r, "name", { value: e, configurable: true }), "u");
var ca = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "ca");
var gh = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of fh(e))
      !vh.call(r, l) && (t || l !== "default") && Bi(r, l, { get: () => e[l], enumerable: !(i = ec(e, l)) || i.enumerable });
  return r;
}, "gh");
var Tn = /* @__PURE__ */ __name((r, e) => gh(mh(Bi(r != null ? dh(hh(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Tn");
var A = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? ec(e, t) : e, c = r.length - 1, f; c >= 0; c--)
    (f = r[c]) && (l = (i ? f(e, t, l) : f(l)) || l);
  return i && l && Bi(e, t, l), l;
}, "A");
var tc = /* @__PURE__ */ __name((r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
}, "tc");
var pa = /* @__PURE__ */ __name((r, e, t) => (tc(r, e, "read from private field"), t ? t.call(r) : e.get(r)), "pa");
var da = /* @__PURE__ */ __name((r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, "da");
var fa = /* @__PURE__ */ __name((r, e, t, i) => (tc(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), "fa");
var nc = ca((Vs, rc) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(w, S) {
      if (isNaN(w = parseInt(w, 10)))
        throw b.InvalidParameter;
      return w * S;
    }
    u(i, "assign");
    function l(w, S) {
      if (S === 0)
        throw b.DivisionByZero;
      var C = Object.create(b.prototype);
      C.s = w < 0 ? -1 : 1, w = w < 0 ? -w : w;
      var M = h(w, S);
      return C.n = w / M, C.d = S / M, C;
    }
    u(l, "newFraction");
    function c(w) {
      for (var S = {}, C = w, M = 2, _ = 4; _ <= C; ) {
        for (; C % M === 0; )
          C /= M, S[M] = (S[M] || 0) + 1;
        _ += 1 + 2 * M++;
      }
      return C !== w ? C > 1 && (S[C] = (S[C] || 0) + 1) : S[w] = (S[w] || 0) + 1, S;
    }
    u(c, "factorize");
    var f = u(function(w, S) {
      var C = 0, M = 1, _ = 1, $ = 0, L = 0, F = 0, I = 1, Q = 1, z = 0, j = 1, Y = 1, J = 1, ie = 1e7, ne;
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
                for (w >= 1 && (Q = Math.pow(10, Math.floor(1 + Math.log(w) / Math.LN10)), w /= Q); j <= ie && J <= ie; )
                  if (ne = (z + Y) / (j + J), w === ne) {
                    j + J <= ie ? (C = z + Y, M = j + J) : J > j ? (C = Y, M = J) : (C = z, M = j);
                    break;
                  } else
                    w > ne ? (z += Y, j += J) : (Y += z, J += j), j > ie ? (C = Y, M = J) : (C = z, M = j);
                C *= Q;
              } else
                (isNaN(w) || isNaN(S)) && (M = C = NaN);
              break;
            }
            case "string": {
              if (j = w.match(/\d+|./g), j === null)
                throw b.InvalidParameter;
              if (j[z] === "-" ? (_ = -1, z++) : j[z] === "+" && z++, j.length === z + 1 ? L = i(j[z++], _) : j[z + 1] === "." || j[z] === "." ? (j[z] !== "." && ($ = i(j[z++], _)), z++, (z + 1 === j.length || j[z + 1] === "(" && j[z + 3] === ")" || j[z + 1] === "'" && j[z + 3] === "'") && (L = i(j[z], _), I = Math.pow(10, j[z].length), z++), (j[z] === "(" && j[z + 2] === ")" || j[z] === "'" && j[z + 2] === "'") && (F = i(j[z + 1], _), Q = Math.pow(10, j[z + 1].length) - 1, z += 3)) : j[z + 1] === "/" || j[z + 1] === ":" ? (L = i(j[z], _), I = i(j[z + 2], 1), z += 3) : j[z + 3] === "/" && j[z + 1] === " " && ($ = i(j[z], _), L = i(j[z + 2], _), I = i(j[z + 4], 1), z += 5), j.length <= z) {
                M = I * Q, _ = C = F + M * $ + Q * L;
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
    u(v, "cycleLen");
    function p(w, S, C) {
      for (var M = 1, _ = y(10, C, S), $ = 0; $ < 300; $++) {
        if (M === _)
          return $;
        M = M * 10 % S, _ = _ * 10 % S;
      }
      return 0;
    }
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
    u(h, "gcd");
    function b(w, S) {
      if (f(w, S), this instanceof b)
        w = h(t.d, t.n), this.s = t.s, this.n = t.n / w, this.d = t.d / w;
      else
        return l(t.s * t.n, t.d);
    }
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
      var C = c(this.n), M = c(this.d), _ = 1, $ = 1;
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
          $ *= Math.pow(L, M[L]);
        }
      return t.s < 0 ? l($, _) : l(_, $);
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
        for (var _ = l(C[M - 1], 1), $ = M - 2; $ >= 0; $--)
          _ = _.inverse().add(C[$]);
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
      var M = v(S, C), _ = p(S, C, M), $ = this.s < 0 ? "-" : "";
      if ($ += S / C | 0, S %= C, S *= 10, S && ($ += "."), M) {
        for (var L = _; L--; )
          $ += S / C | 0, S %= C, S *= 10;
        $ += "(";
        for (var L = M; L--; )
          $ += S / C | 0, S %= C, S *= 10;
        $ += ")";
      } else
        for (var L = w; S && L--; )
          $ += S / C | 0, S %= C, S *= 10;
      return $;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return b;
    }) : typeof Vs == "object" ? (Object.defineProperty(b, "__esModule", { value: true }), b.default = b, b.Fraction = b, rc.exports = b) : r.Fraction = b;
  })(Vs);
});
var ao = ca((Jc, Ml) => {
  (function(r) {
    typeof Jc == "object" && typeof Ml != "undefined" ? Ml.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
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
    u(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
    var c = {};
    function f(n) {
      return f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, f(n);
    }
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
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || $, _.SVGElement = o.SVGElement || $, _.SVGSVGElement = o.SVGSVGElement || $, _.SVGElementInstance = o.SVGElementInstance || $, _.Element = o.Element || $, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || $, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function $() {
    }
    u($, "y");
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
    u(j, "P");
    function Y(n, o) {
      return e.window !== e.realWindow && (o = o.replace(/\/deep\//g, " ")), n[F.default.prefixedMatchesSelector](o);
    }
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
        var d = n[s], m = n[o];
        if (d && s !== o)
          if (m) {
            var E = J(d), g = J(m);
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
    var J = u(function(n) {
      return n.parentNode || n.host;
    }, "E");
    function ie(n, o) {
      for (var a, s = [], d = n; (a = J(d)) && d !== o && a !== d.ownerDocument; )
        s.unshift(d), d = a;
      return s;
    }
    u(ie, "S");
    function ne(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    u(ne, "T");
    function pe(n) {
      var o = n instanceof M.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    u(pe, "j");
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = function(n, o) {
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
    u(ke, "I");
    function Ye(n, o, a) {
      return n === "parent" ? (0, z.parentNode)(a) : n === "self" ? o.getRect(a) : (0, z.closest)(a, n);
    }
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
      return !n || "x" in n && "y" in n || ((n = (0, W.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ce.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, W.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    };
    var je = {};
    Object.defineProperty(je, "__esModule", { value: true }), je.default = function(n, o, a) {
      var s = n.options[a], d = s && s.origin || n.options.origin, m = (0, ce.resolveRectLike)(d, n, o, [n && o]);
      return (0, ce.rectToXY)(m) || { x: 0, y: 0 };
    };
    var he = {};
    function Je(n) {
      return n.trim().split(/ +/);
    }
    u(Je, "C"), Object.defineProperty(he, "__esModule", { value: true }), he.default = u(function n(o, a, s) {
      if (s = s || {}, c.default.string(o) && o.search(" ") !== -1 && (o = Je(o)), c.default.array(o))
        return o.reduce(function(x, T) {
          return (0, W.default)(x, n(T, a, s));
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
          var g = Je(E).map(function(x) {
            return "".concat(o).concat(x);
          });
          n(g, a[E], s);
        }
      return s;
    }, "t");
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
    u(dr, "B");
    function It(n, o, a) {
      return n = n || "page", (a = a || {}).x = o[n + "X"], a.y = o[n + "Y"], a;
    }
    u(It, "Y");
    function Dt(n, o) {
      return o = o || { x: 0, y: 0 }, F.default.isOperaMobile && dr(n) ? (It("screen", n, o), o.x += window.scrollX, o.y += window.scrollY) : It("page", n, o), o;
    }
    u(Dt, "W");
    function Ut(n, o) {
      return o = o || {}, F.default.isOperaMobile && dr(n) ? It("screen", n, o) : It("client", n, o), o;
    }
    u(Ut, "L");
    function fr(n) {
      var o = [];
      return c.default.array(n) ? (o[0] = n[0], o[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o[0] = n.touches[0], o[1] = n.changedTouches[0]) : n.touches.length === 0 && (o[0] = n.changedTouches[0], o[1] = n.changedTouches[1]) : (o[0] = n.touches[0], o[1] = n.touches[1]), o;
    }
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
    u(wr, "q");
    function _r(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(_r, "G"), Object.defineProperty(Lt, "__esModule", { value: true }), Lt.BaseEvent = void 0;
    var pn = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _r(this, "immediatePropagationStopped", false), _r(this, "propagationStopped", false), this._interaction = s;
      }
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
    var Me = {};
    Object.defineProperty(Me, "__esModule", { value: true }), Me.remove = Me.merge = Me.from = Me.findIndex = Me.find = Me.contains = void 0, Me.contains = function(n, o) {
      return n.indexOf(o) !== -1;
    }, Me.remove = function(n, o) {
      return n.splice(n.indexOf(o), 1);
    };
    var dn = u(function(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        n.push(s);
      }
      return n;
    }, "K");
    Me.merge = dn, Me.from = function(n) {
      return dn([], n);
    };
    var fn = u(function(n, o) {
      for (var a = 0; a < n.length; a++)
        if (o(n[a], a, n))
          return a;
      return -1;
    }, "Z");
    Me.findIndex = fn, Me.find = function(n, o) {
      return n[fn(n, o)];
    };
    var Pt = {};
    function Rr(n) {
      return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Rr(n);
    }
    u(Rr, "Q");
    function Vn(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Vn, "tt");
    function Yr(n, o) {
      return Yr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Yr(n, o);
    }
    u(Yr, "et");
    function hr(n, o) {
      if (o && (Rr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return St(n);
    }
    u(hr, "nt");
    function St(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(St, "rt");
    function xr(n) {
      return xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, xr(n);
    }
    u(xr, "ot");
    function kt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(kt, "it"), Object.defineProperty(Pt, "__esModule", { value: true }), Pt.DropEvent = void 0;
    var hn = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Yr(g, x);
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
        (function(R, H) {
          if (!(R instanceof H))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), kt(St(O = m.call(this, x._interaction)), "dropzone", void 0), kt(St(O), "dragEvent", void 0), kt(St(O), "relatedTarget", void 0), kt(St(O), "draggable", void 0), kt(St(O), "propagationStopped", false), kt(St(O), "immediatePropagationStopped", false);
        var P = T === "dragleave" ? g.prev : g.cur, k = P.element, G = P.dropzone;
        return O.type = T, O.target = k, O.currentTarget = k, O.dropzone = G, O.dragEvent = x, O.relatedTarget = x.target, O.draggable = x.interactable, O.timeStamp = x.timeStamp, O;
      }
      return u(E, "a"), o = E, (a = [{ key: "reject", value: function() {
        var g = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var T = x.activeDrops, O = Me.findIndex(T, function(k) {
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
    Pt.DropEvent = hn;
    var Dr = {};
    function vn(n, o) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], d = s.dropzone, m = s.element;
        o.dropzone = d, o.target = m, d.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    u(vn, "lt");
    function Xr(n, o) {
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
    u(Xr, "ut");
    function mn(n, o, a) {
      for (var s = n.dropState, d = n.interactable, m = n.element, E = [], g = 0; g < s.activeDrops.length; g++) {
        var x = s.activeDrops[g], T = x.dropzone, O = x.element, P = x.rect;
        E.push(T.dropCheck(o, a, d, m, O, P) ? O : null);
      }
      var k = z.indexOfDeepestElement(E);
      return s.activeDrops[k] || null;
    }
    u(mn, "ct");
    function Ei(n, o, a) {
      var s = n.dropState, d = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (d.activate = new Pt.DropEvent(s, a, "dropactivate"), d.activate.target = null, d.activate.dropzone = null), a.type === "dragend" && (d.deactivate = new Pt.DropEvent(s, a, "dropdeactivate"), d.deactivate.target = null, d.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (d.leave = new Pt.DropEvent(s, a, "dragleave"), a.dragLeave = d.leave.target = s.prev.element, a.prevDropzone = d.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (d.enter = new Pt.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (d.drop = new Pt.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (d.move = new Pt.DropEvent(s, a, "dropmove"), d.move.dragmove = a, a.dropzone = s.cur.dropzone)), d;
    }
    u(Ei, "ft");
    function Si(n, o) {
      var a = n.dropState, s = a.activeDrops, d = a.cur, m = a.prev;
      o.leave && m.dropzone.fire(o.leave), o.enter && d.dropzone.fire(o.enter), o.move && d.dropzone.fire(o.move), o.drop && d.dropzone.fire(o.drop), o.deactivate && vn(s, o.deactivate), a.prev.dropzone = d.dropzone, a.prev.element = d.element;
    }
    u(Si, "dt");
    function _o(n, o) {
      var a = n.interaction, s = n.iEvent, d = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var m = a.dropState;
        o.dynamicDrop && (m.activeDrops = Xr(o, a.element));
        var E = s, g = mn(a, E, d);
        m.rejected = m.rejected && !!g && g.dropzone === m.cur.dropzone && g.element === m.cur.element, m.cur.dropzone = g && g.dropzone, m.cur.element = g && g.element, m.events = Ei(a, 0, E);
      }
    }
    u(_o, "pt"), Object.defineProperty(Dr, "__esModule", { value: true }), Dr.default = void 0;
    var Ro = { id: "actions/drop", install: function(n) {
      var o = n.actions, a = n.interactStatic, s = n.Interactable, d = n.defaults;
      n.usePlugin(h.default), s.prototype.dropzone = function(m) {
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
        }(this, m);
      }, s.prototype.dropCheck = function(m, E, g, x, T, O) {
        return function(P, k, G, R, H, X, q) {
          var re = false;
          if (!(q = q || P.getRect(X)))
            return !!P.options.drop.checker && P.options.drop.checker(k, G, re, P, X, R, H);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var de = (0, je.default)(R, H, "drag"), Ae = K.getPageXY(k);
            Ae.x += de.x, Ae.y += de.y;
            var Be = Ae.x > q.left && Ae.x < q.right, be = Ae.y > q.top && Ae.y < q.bottom;
            re = Be && be;
          }
          var Ge = R.getRect(H);
          if (Ge && oe === "center") {
            var Zt = Ge.left + Ge.width / 2, Lr = Ge.top + Ge.height / 2;
            re = Zt >= q.left && Zt <= q.right && Lr >= q.top && Lr <= q.bottom;
          }
          return Ge && c.default.number(oe) && (re = Math.max(0, Math.min(q.right, Ge.right) - Math.max(q.left, Ge.left)) * Math.max(0, Math.min(q.bottom, Ge.bottom) - Math.max(q.top, Ge.top)) / (Ge.width * Ge.height) >= oe), P.options.drop.checker && (re = P.options.drop.checker(k, G, re, P, X, R, H)), re;
        }(this, m, E, g, x, T, O);
      }, a.dynamicDrop = function(m) {
        return c.default.bool(m) ? (n.dynamicDrop = m, a) : n.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", n.dynamicDrop = false, d.actions.drop = Ro.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o = n.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var d = a.dropState;
        d.activeDrops = null, d.events = null, d.activeDrops = Xr(o, a.element), d.events = Ei(a, 0, s), d.events.activate && (vn(d.activeDrops, d.events.activate), o.fire("actions/drop:start", { interaction: a, dragEvent: s }));
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
    } }, getActiveDrops: Xr, getDrop: mn, getDropEvents: Ei, fireDropEvents: Si, defaults: { enabled: false, accept: null, overlap: "pointer" } }, hs = Ro;
    Dr.default = hs;
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
    var ve = {};
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
    u(mt, "wt");
    function At(n) {
      var o = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    u(At, "_t"), Object.defineProperty(ve, "__esModule", { value: true }), ve.default = void 0;
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
          s._rects = { start: (0, W.default)({}, m), corrected: (0, W.default)({}, m), previous: (0, W.default)({}, m), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, d.edges = s.prepared.edges, d.rect = s._rects.corrected, d.deltaRect = s._rects.delta;
        }
      })(n), At(n);
    }, "interactions:action-move": function(n) {
      (function(o) {
        var a = o.iEvent, s = o.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var d = a, m = s.interactable.options.resize.invert, E = m === "reposition" || m === "negate", g = s.rect, x = s._rects, T = x.start, O = x.corrected, P = x.delta, k = x.previous;
          if ((0, W.default)(k, O), E) {
            if ((0, W.default)(O, g), m === "reposition") {
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
          for (var H in O.width = O.right - O.left, O.height = O.bottom - O.top, O)
            P[H] = O[H] - k[H];
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
        var E = (0, W.default)({}, o.coords.cur.page), g = a.options.resize;
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
    }, defaultMargin: null }, Do = Tt;
    ve.default = Do;
    var Yt = {};
    Object.defineProperty(Yt, "__esModule", { value: true }), Yt.default = void 0;
    var Ti = { id: "actions", install: function(n) {
      n.usePlugin(N.default), n.usePlugin(ve.default), n.usePlugin(h.default), n.usePlugin(Dr.default);
    } };
    Yt.default = Ti;
    var Ct = {};
    Object.defineProperty(Ct, "__esModule", { value: true }), Ct.default = void 0;
    var Ot, kr, Yn = 0, Xn = { request: function(n) {
      return Ot(n);
    }, cancel: function(n) {
      return kr(n);
    }, init: function(n) {
      if (Ot = n.requestAnimationFrame, kr = n.cancelAnimationFrame, !Ot)
        for (var o = ["ms", "moz", "webkit", "o"], a = 0; a < o.length; a++) {
          var s = o[a];
          Ot = n["".concat(s, "RequestAnimationFrame")], kr = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Ot = Ot && Ot.bind(n), kr = kr && kr.bind(n), Ot || (Ot = u(function(d) {
        var m = Date.now(), E = Math.max(0, 16 - (m - Yn)), g = n.setTimeout(function() {
          d(m + E);
        }, E);
        return Yn = m + E, g;
      }, "jt"), kr = u(function(d) {
        return clearTimeout(d);
      }, "Mt"));
    } };
    Ct.default = Xn;
    var Zr = {};
    Object.defineProperty(Zr, "__esModule", { value: true }), Zr.default = void 0, Zr.getContainer = ko, Zr.getScroll = Ci, Zr.getScrollSize = function(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Zr.getScrollSizeDelta = function(n, o) {
      var a = n.interaction, s = n.element, d = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!d || !d.enabled)
        return o(), { x: 0, y: 0 };
      var m = ko(d.container, a.interactable, s), E = Ci(m);
      o();
      var g = Ci(m);
      return { x: g.x - E.x, y: g.y - E.y };
    };
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      le.isScrolling = true, Ct.default.cancel(le.i), n.autoScroll = le, le.interaction = n, le.prevTime = le.now(), le.i = Ct.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), Ct.default.cancel(le.i);
    }, scroll: function() {
      var n = le.interaction, o = n.interactable, a = n.element, s = n.prepared.name, d = o.options[s].autoScroll, m = ko(d.container, o, a), E = le.now(), g = (E - le.prevTime) / 1e3, x = d.speed * g;
      if (x >= 1) {
        var T = { x: le.x * x, y: le.y * x };
        if (T.x || T.y) {
          var O = Ci(m);
          c.default.window(m) ? m.scrollBy(T.x, T.y) : m && (m.scrollLeft += T.x, m.scrollTop += T.y);
          var P = Ci(m), k = { x: P.x - O.x, y: P.y - O.y };
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
          var s, d, m, E, g = o.interactable, x = o.element, T = o.prepared.name, O = g.options[T].autoScroll, P = ko(O.container, g, x);
          if (c.default.window(P))
            E = a.clientX < le.margin, s = a.clientY < le.margin, d = a.clientX > P.innerWidth - le.margin, m = a.clientY > P.innerHeight - le.margin;
          else {
            var k = z.getElementClientRect(P);
            E = a.clientX < k.left + le.margin, s = a.clientY < k.top + le.margin, d = a.clientX > k.right - le.margin, m = a.clientY > k.bottom - le.margin;
          }
          le.x = d ? 1 : E ? -1 : 0, le.y = m ? 1 : s ? -1 : 0, le.isScrolling || (le.margin = O.margin, le.speed = O.speed, le.start(o));
        }
    } };
    function ko(n, o, a) {
      return (c.default.string(n) ? (0, ce.getStringOptionResult)(n, o, a) : n) || (0, e.getWindow)(a);
    }
    u(ko, "zt");
    function Ci(n) {
      return c.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    u(Ci, "Ct");
    var Pd = { id: "auto-scroll", install: function(n) {
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
    } } }, Ad = Pd;
    Zr.default = Ad;
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
    function zd(n) {
      return c.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    u(zd, "Yt");
    function _d(n) {
      return c.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    u(_d, "Wt"), Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Rd = { id: "auto-start/interactableMethods", install: function(n) {
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
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = _d, o.prototype.styleCursor = zd;
    } };
    No.default = Rd;
    var Zn = {};
    function au(n, o, a, s, d) {
      return o.testIgnoreAllow(o.options[n.name], a, s) && o.options[n.name].enabled && Go(o, a, n, d) ? n : null;
    }
    u(au, "Vt");
    function Dd(n, o, a, s, d, m, E) {
      for (var g = 0, x = s.length; g < x; g++) {
        var T = s[g], O = d[g], P = T.getAction(o, a, n, O);
        if (P) {
          var k = au(P, T, O, m, E);
          if (k)
            return { action: k, interactable: T, element: O };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    u(Dd, "Nt");
    function su(n, o, a, s, d) {
      var m = [], E = [], g = s;
      function x(O) {
        m.push(O), E.push(g);
      }
      for (u(x, "u"); c.default.element(g); ) {
        m = [], E = [], d.interactables.forEachMatch(g, x);
        var T = Dd(n, o, a, m, E, s, d);
        if (T.action && !T.interactable.options[T.action.name].manualStart)
          return T;
        g = z.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    u(su, "qt");
    function lu(n, o, a) {
      var s = o.action, d = o.interactable, m = o.element;
      s = s || { name: null }, n.interactable = d, n.element = m, (0, jt.copyAction)(n.prepared, s), n.rect = d && s.name ? d.getRect(m) : null, cu(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    u(lu, "Gt");
    function Go(n, o, a, s) {
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
    u(Go, "$t");
    function uu(n, o) {
      return c.default.number(n) ? (o.autoStart.maxInteractions = n, this) : o.autoStart.maxInteractions;
    }
    u(uu, "Ht");
    function vs(n, o, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o, n.style.cursor = o, a.autoStart.cursorElement = o ? n : null;
    }
    u(vs, "Kt");
    function cu(n, o) {
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
    u(cu, "Zt"), Object.defineProperty(Zn, "__esModule", { value: true }), Zn.default = void 0;
    var kd = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o = n.interactStatic, a = n.defaults;
      n.usePlugin(No.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, W.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(s) {
        return uu(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Go, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget;
      a.interacting() || lu(a, su(a, s, d, m, o), o);
    }, "interactions:move": function(n, o) {
      (function(a, s) {
        var d = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        d.pointerType !== "mouse" || d.pointerIsDown || d.interacting() || lu(d, su(d, m, E, g, s), s);
      })(n, o), function(a, s) {
        var d = a.interaction;
        if (d.pointerIsDown && !d.interacting() && d.pointerWasMoved && d.prepared.name) {
          s.fire("autoStart:before-start", a);
          var m = d.interactable, E = d.prepared.name;
          E && m && (m.options[E].manualStart || !Go(m, d.element, d.prepared, s) ? d.stop() : (d.start(d.prepared, m, d.element), cu(d, s)));
        }
      }(n, o);
    }, "interactions:stop": function(n, o) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && vs(a.element, "", o);
    } }, maxInteractions: uu, withinInteractionLimit: Go, validateAction: au }, Nd = kd;
    Zn.default = Nd;
    var Lo = {};
    Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var Gd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o) {
      var a = n.interaction, s = n.eventTarget, d = n.dx, m = n.dy;
      if (a.prepared.name === "drag") {
        var E = Math.abs(d), g = Math.abs(m), x = a.interactable.options.drag, T = x.startAxis, O = E > g ? "x" : E < g ? "y" : "xy";
        if (a.prepared.axis = x.lockAxis === "start" ? O[0] : x.lockAxis, O !== "xy" && T !== "xy" && T !== O) {
          a.prepared.name = null;
          for (var P = s, k = function(R) {
            if (R !== a.interactable) {
              var H = a.interactable.options.drag;
              if (!H.manualStart && R.testIgnoreAllow(H, P, s)) {
                var X = R.getAction(a.downPointer, a.downEvent, a, P);
                if (X && X.name === "drag" && function(q, re) {
                  if (!re)
                    return false;
                  var oe = re.options.drag.startAxis;
                  return q === "xy" || oe === "xy" || oe === q;
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
    Lo.default = Gd;
    var jo = {};
    function ms(n) {
      var o = n.prepared && n.prepared.name;
      if (!o)
        return null;
      var a = n.interactable.options;
      return a[o].hold || a[o].delay;
    }
    u(ms, "re"), Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0;
    var Ld = { id: "auto-start/hold", install: function(n) {
      var o = n.defaults;
      n.usePlugin(Zn.default), o.perAction.hold = 0, o.perAction.delay = 0;
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
    } }, getHoldDuration: ms }, jd = Ld;
    jo.default = jd;
    var Bo = {};
    Object.defineProperty(Bo, "__esModule", { value: true }), Bo.default = void 0;
    var Bd = { id: "auto-start", install: function(n) {
      n.usePlugin(Zn.default), n.usePlugin(jo.default), n.usePlugin(Lo.default);
    } };
    Bo.default = Bd;
    var Qn = {};
    function Hd(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    u(Hd, "ue");
    function qd(n) {
      var o = n.interaction, a = n.event;
      o.interactable && o.interactable.checkAndPreventDefault(a);
    }
    u(qd, "ce");
    function pu(n) {
      var o = n.Interactable;
      o.prototype.preventDefault = Hd, o.prototype.checkAndPreventDefault = function(a) {
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
    u(pu, "fe"), Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = void 0, Qn.install = pu;
    var $d = { id: "core/interactablePreventDefault", install: pu, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o) {
      return n["interactions:".concat(o)] = qd, n;
    }, {}) };
    Qn.default = $d;
    var gs = {};
    Object.defineProperty(gs, "__esModule", { value: true }), gs.default = void 0, gs.default = {};
    var Oi, bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), bs.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Oi || (Oi = {})), Oi.touchAction, Oi.boxSizing, Oi.noListeners;
    var Fd = { id: "dev-tools", install: function() {
    } };
    bs.default = Fd;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = u(function n(o) {
      var a = {};
      for (var s in o) {
        var d = o[s];
        c.default.plainObject(d) ? a[s] = n(d) : c.default.array(d) ? a[s] = Me.from(d) : a[s] = d;
      }
      return a;
    }, "t");
    var bn = {};
    function du(n, o) {
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
            return fu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? fu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(du, "be");
    function fu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(fu, "xe");
    function Wd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Wd, "we");
    function yn(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(yn, "_e"), Object.defineProperty(bn, "__esModule", { value: true }), bn.default = void 0, bn.getRectOffset = hu;
    var Ud = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), yn(this, "states", []), yn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), yn(this, "startDelta", void 0), yn(this, "result", void 0), yn(this, "endResult", void 0), yn(this, "edges", void 0), yn(this, "interaction", void 0), this.interaction = s, this.result = Ho();
      }
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
        this.prepareStates(g), this.edges = (0, W.default)({}, E.edges), this.startOffset = hu(E.rect, d), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: m, pageCoords: d, preEnd: false });
        return this.result = Ho(), this.startAll(x), this.result = this.setAll(x);
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
        s.coords = (0, W.default)({}, s.pageCoords), s.rect = (0, W.default)({}, g);
        for (var x = E ? this.states.slice(E) : this.states, T = Ho(s.coords, s.rect), O = 0; O < x.length; O++) {
          var P, k = x[O], G = k.options, R = (0, W.default)({}, s.coords), H = null;
          (P = k.methods) != null && P.set && this.shouldDo(G, m, d) && (s.state = k, H = k.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - R.x, y: s.coords.y - R.y })), T.eventProps.push(H);
        }
        T.delta.x = s.coords.x - s.pageCoords.x, T.delta.y = s.coords.y - s.pageCoords.y, T.rectDelta.left = s.rect.left - g.left, T.rectDelta.right = s.rect.right - g.right, T.rectDelta.top = s.rect.top - g.top, T.rectDelta.bottom = s.rect.bottom - g.bottom;
        var X = this.result.coords, q = this.result.rect;
        if (X && q) {
          var re = T.rect.left !== q.left || T.rect.right !== q.right || T.rect.top !== q.top || T.rect.bottom !== q.bottom;
          T.changed = re || X.x !== T.coords.x || X.y !== T.coords.y;
        }
        return T;
      } }, { key: "applyToInteraction", value: function(s) {
        var d = this.interaction, m = s.phase, E = d.coords.cur, g = d.coords.start, x = this.result, T = this.startDelta, O = x.delta;
        m === "start" && (0, W.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[g, T], [E, O]].length; P++) {
          var k = du([[g, T], [E, O]][P], 2), G = k[0], R = k[1];
          G.page.x += R.x, G.page.y += R.y, G.client.x += R.x, G.client.y += R.y;
        }
        var H = this.result.rectDelta, X = s.rect || d.rect;
        X.left += H.left, X.right += H.right, X.top += H.top, X.bottom += H.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
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
          var m = (0, W.default)({ states: this.states, interactable: d.interactable, element: d.element, rect: null }, s);
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
            var R = du(k[G], 2), H = R[0], X = R[1];
            H.page.x -= X.x, H.page.y -= X.y, H.client.x -= X.x, H.client.y -= X.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(s, d, m, E) {
        return !(!s || s.enabled === false || E && !s.endOnly || s.endOnly && !d || m === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(d) {
          return (0, gn.default)(d);
        }), this.result = Ho((0, W.default)({}, s.result.coords), (0, W.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && Wd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Ho(n, o) {
      return { rect: o, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    u(Ho, "Oe");
    function hu(n, o) {
      return n ? { left: o.x - n.left, top: o.y - n.top, right: n.right - o.x, bottom: n.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    u(hu, "Ee"), bn.default = Ud;
    var gt = {};
    function qo(n) {
      var o = n.iEvent, a = n.interaction.modification.result;
      a && (o.modifiers = a.eventProps);
    }
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
    var Vd = { id: "modifiers/base", before: ["actions"], install: function(n) {
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
    } } }, Yd = Vd;
    gt.default = Yd;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.defaults = void 0, Mi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ii = {};
    function ys(n) {
      return ys = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ys(n);
    }
    u(ys, "De");
    function Xd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Xd, "Ae");
    function ws(n, o) {
      return ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, ws(n, o);
    }
    u(ws, "ze");
    function Zd(n, o) {
      if (o && (ys(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ne(n);
    }
    u(Zd, "Ce");
    function Ne(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(Ne, "Re");
    function $o(n) {
      return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, $o(n);
    }
    u($o, "Fe");
    function qe(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(qe, "Xe"), Object.defineProperty(Ii, "__esModule", { value: true }), Ii.InteractEvent = void 0;
    var vu = function(n) {
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
        var g, x = $o(s);
        if (d) {
          var T = $o(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return Zd(this, g);
      });
      function E(g, x, T, O, P, k, G) {
        var R;
        (function(Be, be) {
          if (!(Be instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), qe(Ne(R = m.call(this, g)), "relatedTarget", null), qe(Ne(R), "screenX", void 0), qe(Ne(R), "screenY", void 0), qe(Ne(R), "button", void 0), qe(Ne(R), "buttons", void 0), qe(Ne(R), "ctrlKey", void 0), qe(Ne(R), "shiftKey", void 0), qe(Ne(R), "altKey", void 0), qe(Ne(R), "metaKey", void 0), qe(Ne(R), "page", void 0), qe(Ne(R), "client", void 0), qe(Ne(R), "delta", void 0), qe(Ne(R), "rect", void 0), qe(Ne(R), "x0", void 0), qe(Ne(R), "y0", void 0), qe(Ne(R), "t0", void 0), qe(Ne(R), "dt", void 0), qe(Ne(R), "duration", void 0), qe(Ne(R), "clientX0", void 0), qe(Ne(R), "clientY0", void 0), qe(Ne(R), "velocity", void 0), qe(Ne(R), "speed", void 0), qe(Ne(R), "swipe", void 0), qe(Ne(R), "axes", void 0), qe(Ne(R), "preEnd", void 0), P = P || g.element;
        var H = g.interactable, X = (H && H.options || Mi.defaults).deltaSource, q = (0, je.default)(H, P, T), re = O === "start", oe = O === "end", de = re ? Ne(R) : g.prevEvent, Ae = re ? g.coords.start : oe ? { page: de.page, client: de.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return R.page = (0, W.default)({}, Ae.page), R.client = (0, W.default)({}, Ae.client), R.rect = (0, W.default)({}, g.rect), R.timeStamp = Ae.timeStamp, oe || (R.page.x -= q.x, R.page.y -= q.y, R.client.x -= q.x, R.client.y -= q.y), R.ctrlKey = x.ctrlKey, R.altKey = x.altKey, R.shiftKey = x.shiftKey, R.metaKey = x.metaKey, R.button = x.button, R.buttons = x.buttons, R.target = P, R.currentTarget = P, R.preEnd = k, R.type = G || T + (O || ""), R.interactable = H, R.t0 = re ? g.pointers[g.pointers.length - 1].downTime : de.t0, R.x0 = g.coords.start.page.x - q.x, R.y0 = g.coords.start.page.y - q.y, R.clientX0 = g.coords.start.client.x - q.x, R.clientY0 = g.coords.start.client.y - q.y, R.delta = re || oe ? { x: 0, y: 0 } : { x: R[X].x - de[X].x, y: R[X].y - de[X].y }, R.dt = g.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, W.default)({}, g.coords.velocity[X]), R.speed = (0, nt.default)(R.velocity.x, R.velocity.y), R.swipe = oe || O === "inertiastart" ? R.getSwipe() : null, R;
      }
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
      } }]) && Xd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    Ii.InteractEvent = vu, Object.defineProperties(vu.prototype, { pageX: { get: function() {
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
    u(mu, "We");
    function Qd(n, o, a) {
      return o && mu(n.prototype, o), a && mu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    u(Qd, "Le");
    function Ai(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ai, "Ue"), Object.defineProperty(Pi, "__esModule", { value: true }), Pi.PointerInfo = void 0;
    var Kd = Qd(u(function n(o, a, s, d, m) {
      (function(E, g) {
        if (!(E instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Ai(this, "id", void 0), Ai(this, "pointer", void 0), Ai(this, "event", void 0), Ai(this, "downTime", void 0), Ai(this, "downTarget", void 0), this.id = o, this.pointer = a, this.event = s, this.downTime = d, this.downTarget = m;
    }, "t"));
    Pi.PointerInfo = Kd;
    var Fo, Wo, Nt = {};
    function Jd(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Jd, "$e");
    function We(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(We, "He"), Object.defineProperty(Nt, "__esModule", { value: true }), Nt.Interaction = void 0, Object.defineProperty(Nt, "PointerInfo", { enumerable: true, get: function() {
      return Pi.PointerInfo;
    } }), Nt.default = Nt._ProxyValues = Nt._ProxyMethods = void 0, Nt._ProxyValues = Fo, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Fo || (Nt._ProxyValues = Fo = {})), Nt._ProxyMethods = Wo, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Wo || (Nt._ProxyMethods = Wo = {}));
    var ef = 0, gu = function() {
      function n(s) {
        var d = this, m = s.pointerType, E = s.scopeFire;
        (function(k, G) {
          if (!(k instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), We(this, "interactable", null), We(this, "element", null), We(this, "rect", null), We(this, "_rects", void 0), We(this, "edges", null), We(this, "_scopeFire", void 0), We(this, "prepared", { name: null, axis: null, edges: null }), We(this, "pointerType", void 0), We(this, "pointers", []), We(this, "downEvent", null), We(this, "downPointer", {}), We(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), We(this, "prevEvent", null), We(this, "pointerIsDown", false), We(this, "pointerWasMoved", false), We(this, "_interacting", false), We(this, "_ending", false), We(this, "_stopped", true), We(this, "_proxy", null), We(this, "simulation", null), We(this, "doMove", (0, jt.warnOnce)(function(k) {
          this.move(k);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), We(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), We(this, "_id", ef++), this._scopeFire = E, this.pointerType = m;
        var g = this;
        this._proxy = {};
        var x = u(function(k) {
          Object.defineProperty(d._proxy, k, { get: function() {
            return g[k];
          } });
        }, "a");
        for (var T in Fo)
          x(T);
        var O = u(function(k) {
          Object.defineProperty(d._proxy, k, { value: function() {
            return g[k].apply(g, arguments);
          } });
        }, "l");
        for (var P in Wo)
          O(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      u(n, "t");
      var o, a;
      return o = n, a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, d, m) {
        var E = this.updatePointer(s, d, m, true), g = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: s, event: d, eventTarget: m, pointerIndex: E, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(s, d, m) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !d.options[s.name].enabled) && ((0, jt.copyAction)(this.prepared, s), this.interactable = d, this.element = m, this.rect = d.getRect(m), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, d, m) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, d, m, false);
        var E, g, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, nt.default)(E, g) > this.pointerMoveTolerance);
        var T = this.getPointerIndex(s), O = { pointer: s, pointerIndex: T, pointerInfo: this.pointers[T], event: d, type: "move", eventTarget: m, dx: E, dy: g, duplicate: x, interaction: this };
        x || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", O), x || this.simulation || (this.interacting() && (O.type = null, this.move(O)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
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
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Me.findIndex(this.pointers, function(m) {
          return m.id === d;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, d, m, E) {
        var g = K.getPointerId(s), x = this.getPointerIndex(s), T = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(d.type)), T ? T.pointer = s : (T = new Pi.PointerInfo(g, s, d, null, null), x = this.pointers.length, this.pointers.push(T)), K.setCoords(this.coords.cur, this.pointers.map(function(O) {
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
        return new Ii.InteractEvent(this, s, this.prepared.name, d, this.element, m, E);
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
      } }], a && Jd(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Nt.Interaction = gu;
    var tf = gu;
    Nt.default = tf;
    var wn = {};
    function bu(n) {
      n.pointerIsDown && (Es(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    u(bu, "tn");
    function yu(n) {
      xs(n.interaction);
    }
    u(yu, "en");
    function xs(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o = n.offset.pending;
      return Es(n.coords.cur, o), Es(n.coords.delta, o), ce.addEdges(n.edges, n.rect, o), o.x = 0, o.y = 0, true;
    }
    u(xs, "nn");
    function rf(n) {
      var o = n.x, a = n.y;
      this.offset.pending.x += o, this.offset.pending.y += a, this.offset.total.x += o, this.offset.total.y += a;
    }
    u(rf, "rn");
    function Es(n, o) {
      var a = n.page, s = n.client, d = o.x, m = o.y;
      a.x += d, a.y += m, s.x += d, s.y += m;
    }
    u(Es, "on"), Object.defineProperty(wn, "__esModule", { value: true }), wn.addTotal = bu, wn.applyPending = xs, wn.default = void 0, Nt._ProxyMethods.offsetBy = "";
    var nf = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = rf;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return bu(n.interaction);
    }, "interactions:before-action-start": yu, "interactions:before-action-move": yu, "interactions:before-action-end": function(n) {
      var o = n.interaction;
      if (xs(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(n) {
      var o = n.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, of = nf;
    wn.default = of;
    var Kn = {};
    function af(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(af, "un");
    function ft(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(ft, "cn"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = Kn.InertiaState = void 0;
    var wu = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), ft(this, "active", false), ft(this, "isModified", false), ft(this, "smoothEnd", false), ft(this, "allowResume", false), ft(this, "modification", void 0), ft(this, "modifierCount", 0), ft(this, "modifierArg", void 0), ft(this, "startCoords", void 0), ft(this, "t0", 0), ft(this, "v0", 0), ft(this, "te", 0), ft(this, "targetOffset", void 0), ft(this, "modifiedOffset", void 0), ft(this, "currentOffset", void 0), ft(this, "lambda_v0", 0), ft(this, "one_ve_v0", 0), ft(this, "timeout", void 0), ft(this, "interaction", void 0), this.interaction = s;
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "start", value: function(s) {
        var d = this.interaction, m = Uo(d);
        if (!m || !m.enabled)
          return false;
        var E = d.coords.velocity.client, g = (0, nt.default)(E.x, E.y), x = this.modification || (this.modification = new bn.default(d));
        if (x.copyFrom(d.modification), this.t0 = d._now(), this.allowResume = m.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = d.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - d.coords.cur.timeStamp < 50 && g > m.minSpeed && g > m.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return d.modification.result.rect = null, d.offsetBy(this.targetOffset), d._doPhase({ interaction: d, event: s, phase: "inertiastart" }), d.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), d.modification.result.rect = null, this.active = true, d.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, d = this.interaction.coords.velocity.client, m = Uo(this.interaction), E = m.resistance, g = -Math.log(m.endSpeed / this.v0) / E;
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
        var s, d, m, E, g, x = this, T = this.interaction, O = Uo(T).resistance, P = (T._now() - this.t0) / 1e3;
        if (P < this.te) {
          var k, G = 1 - (Math.exp(-O * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, d = this.targetOffset.y, m = this.modifiedOffset.x, E = this.modifiedOffset.y, k = { x: xu(g = G, 0, s, m), y: xu(g, 0, d, E) }) : k = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var R = { x: k.x - this.currentOffset.x, y: k.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, T.offsetBy(R), T.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          T.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, d = this.interaction, m = d._now() - this.t0, E = Uo(d).smoothEndDuration;
        if (m < E) {
          var g = { x: Eu(m, 0, this.targetOffset.x, E), y: Eu(m, 0, this.targetOffset.y, E) }, x = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
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
      } }]) && af(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Uo(n) {
      var o = n.interactable, a = n.prepared;
      return o && o.options && a.name && o.options[a.name].inertia;
    }
    u(Uo, "dn"), Kn.InertiaState = wu;
    var sf = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o = n.defaults;
      n.usePlugin(wn.default), n.usePlugin(gt.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o = n.interaction;
      o.inertia = new wu(o);
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
    function xu(n, o, a, s) {
      var d = 1 - n;
      return d * d * o + 2 * d * n * a + n * n * s;
    }
    u(xu, "vn");
    function Eu(n, o, a, s) {
      return -a * (n /= s) * (n - 2) + o;
    }
    u(Eu, "hn");
    var lf = sf;
    Kn.default = lf;
    var zi = {};
    function uf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(uf, "mn");
    function _i(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(_i, "bn");
    function Su(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    u(Su, "xn"), Object.defineProperty(zi, "__esModule", { value: true }), zi.Eventable = void 0;
    var cf = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), _i(this, "options", void 0), _i(this, "types", {}), _i(this, "propagationStopped", false), _i(this, "immediatePropagationStopped", false), _i(this, "global", void 0), this.options = (0, W.default)({}, s || {});
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "fire", value: function(s) {
        var d, m = this.global;
        (d = this.types[s.type]) && Su(s, d), !s.propagationStopped && m && (d = m[s.type]) && Su(s, d);
      } }, { key: "on", value: function(s, d) {
        var m = (0, he.default)(s, d);
        for (s in m)
          this.types[s] = Me.merge(this.types[s] || [], m[s]);
      } }, { key: "off", value: function(s, d) {
        var m = (0, he.default)(s, d);
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
      } }]) && uf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    zi.Eventable = cf;
    var Ri = {};
    Object.defineProperty(Ri, "__esModule", { value: true }), Ri.default = function(n, o) {
      if (o.phaselessTypes[n])
        return true;
      for (var a in o.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o.phases)
          return true;
      return false;
    };
    var Ss = {};
    Object.defineProperty(Ss, "__esModule", { value: true }), Ss.createInteractStatic = function(n) {
      var o = u(function a(s, d) {
        var m = n.interactables.get(s, d);
        return m || ((m = n.interactables.new(s, d)).events.global = a.globalEvents), m;
      }, "e");
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
        return (0, Ri.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: d }), this;
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
        return (0, Ri.default)(a, this.scope.actions) ? a in this.globalEvents && (x = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(x, 1) : this.scope.events.remove(this.scope.document, a, s, d), this;
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
    function pf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(pf, "En");
    function Nr(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Nr, "Sn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.Interactable = void 0;
    var df = function() {
      function n(s, d, m, E) {
        (function(g, x) {
          if (!(g instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Nr(this, "options", void 0), Nr(this, "_actions", void 0), Nr(this, "target", void 0), Nr(this, "events", new zi.Eventable()), Nr(this, "_context", void 0), Nr(this, "_win", void 0), Nr(this, "_doc", void 0), Nr(this, "_scopeEvents", void 0), Nr(this, "_rectChecker", void 0), this._actions = d.actions, this.target = s, this._context = d.context || m, this._win = (0, e.getWindow)((0, z.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = E, this.set(d);
      }
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
          g === "listeners" && this.updatePerActionListeners(s, x.listeners, T), c.default.array(T) ? x[g] = Me.from(T) : c.default.plainObject(T) ? (x[g] = (0, W.default)(x[g] || {}, (0, gn.default)(T)), c.default.object(m.perAction[g]) && "enabled" in m.perAction[g] && (x[g].enabled = T.enabled !== false)) : c.default.bool(T) && c.default.object(m.perAction[g]) ? x[g].enabled = T : x[g] = T;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c.default.element(this.target) ? this.target : null), c.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, z.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var d = this;
        return c.default.func(s) ? (this._rectChecker = s, this.getRect = function(m) {
          var E = (0, W.default)({}, d._rectChecker(m));
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
        var g = s === "on" ? "add" : "remove", x = (0, he.default)(d, m);
        for (var T in x) {
          T === "wheel" && (T = F.default.wheelEvent);
          for (var O = 0; O < x[T].length; O++) {
            var P = x[T][O];
            (0, Ri.default)(T, this._actions) ? this.events[s](T, P) : c.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, T, P, E) : this._scopeEvents[g](this.target, T, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(s, d, m) {
        return this._onOff("on", s, d, m);
      } }, { key: "off", value: function(s, d, m) {
        return this._onOff("off", s, d, m);
      } }, { key: "set", value: function(s) {
        var d = this._defaults;
        for (var m in c.default.object(s) || (s = {}), this.options = (0, gn.default)(d.base), this._actions.methodDict) {
          var E = m, g = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, W.default)((0, W.default)({}, d.perAction), d.actions[E])), this[g](s[E]);
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
      } }]) && pf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Vo.Interactable = df;
    var Yo = {};
    function ff(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(ff, "Mn");
    function Ts(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(Ts, "kn"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.InteractableSet = void 0;
    var hf = function() {
      function n(s) {
        var d = this;
        (function(m, E) {
          if (!(m instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ts(this, "list", []), Ts(this, "selectorMap", {}), Ts(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(m) {
          var E = m.interactable, g = E.target, x = E._context, T = c.default.string(g) ? d.selectorMap[g] : g[d.scope.id], O = Me.findIndex(T, function(P) {
            return P.context === x;
          });
          T[O] && (T[O].context = null, T[O].interactable = null), T.splice(O, 1);
        } });
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "new", value: function(s, d) {
        d = (0, W.default)(d || {}, { actions: this.scope.actions });
        var m = new this.scope.Interactable(s, d, this.scope.document, this.scope.events), E = { context: m._context, interactable: m };
        return this.scope.addDocument(m._doc), this.list.push(m), c.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(E)) : (m.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: s, options: d, interactable: m, win: this.scope._win }), m;
      } }, { key: "get", value: function(s, d) {
        var m = d && d.context || this.scope.document, E = c.default.string(s), g = E ? this.selectorMap[s] : s[this.scope.id];
        if (!g)
          return null;
        var x = Me.find(g, function(T) {
          return T.context === m && (E || T.interactable.inContext(s));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(s, d) {
        for (var m = 0; m < this.list.length; m++) {
          var E = this.list[m], g = void 0;
          if ((c.default.string(E.target) ? c.default.element(s) && z.matchesSelector(s, E.target) : s === E.target) && E.inContext(s) && (g = d(E)), g !== void 0)
            return g;
        }
      } }]) && ff(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    Yo.InteractableSet = hf;
    var Xo = {};
    function vf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(vf, "An");
    function Cs(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
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
            return Tu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Tu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Os, "Cn");
    function Tu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Tu, "Rn"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var mf = function() {
      function n(s) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Cs(this, "currentTarget", void 0), Cs(this, "originalEvent", void 0), Cs(this, "type", void 0), this.originalEvent = s, (0, Wt.default)(this, s);
      }
      u(n, "t");
      var o, a;
      return o = n, (a = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && vf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), n;
    }();
    function Di(n) {
      if (!c.default.object(n))
        return { capture: !!n, passive: false };
      var o = (0, W.default)({}, n);
      return o.capture = !!n.capture, o.passive = !!n.passive, o;
    }
    u(Di, "Xn");
    var gf = { id: "events", install: function(n) {
      var o, a = [], s = {}, d = [], m = { add: E, remove: g, addDelegate: function(O, P, k, G, R) {
        var H = Di(R);
        if (!s[k]) {
          s[k] = [];
          for (var X = 0; X < d.length; X++) {
            var q = d[X];
            E(q, k, x), E(q, k, T, true);
          }
        }
        var re = s[k], oe = Me.find(re, function(de) {
          return de.selector === O && de.context === P;
        });
        oe || (oe = { selector: O, context: P, listeners: [] }, re.push(oe)), oe.listeners.push([G, H]);
      }, removeDelegate: function(O, P, k, G, R) {
        var H, X = Di(R), q = s[k], re = false;
        if (q)
          for (H = q.length - 1; H >= 0; H--) {
            var oe = q[H];
            if (oe.selector === O && oe.context === P) {
              for (var de = oe.listeners, Ae = de.length - 1; Ae >= 0; Ae--) {
                var Be = Os(de[Ae], 2), be = Be[0], Ge = Be[1], Zt = Ge.capture, Lr = Ge.passive;
                if (be === G && Zt === X.capture && Lr === X.passive) {
                  de.splice(Ae, 1), de.length || (q.splice(H, 1), g(P, k, x), g(P, k, T, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: T, delegatedEvents: s, documents: d, targets: a, supportsOptions: false, supportsPassive: false };
      function E(O, P, k, G) {
        var R = Di(G), H = Me.find(a, function(X) {
          return X.eventTarget === O;
        });
        H || (H = { eventTarget: O, events: {} }, a.push(H)), H.events[P] || (H.events[P] = []), O.addEventListener && !Me.contains(H.events[P], k) && (O.addEventListener(P, k, m.supportsOptions ? R : R.capture), H.events[P].push(k));
      }
      u(E, "s");
      function g(O, P, k, G) {
        var R = Di(G), H = Me.findIndex(a, function(Ae) {
          return Ae.eventTarget === O;
        }), X = a[H];
        if (X && X.events)
          if (P !== "all") {
            var q = false, re = X.events[P];
            if (re) {
              if (k === "all") {
                for (var oe = re.length - 1; oe >= 0; oe--)
                  g(O, P, re[oe], R);
                return;
              }
              for (var de = 0; de < re.length; de++)
                if (re[de] === k) {
                  O.removeEventListener(P, k, m.supportsOptions ? R : R.capture), re.splice(de, 1), re.length === 0 && (delete X.events[P], q = true);
                  break;
                }
            }
            q && !Object.keys(X.events).length && a.splice(H, 1);
          } else
            for (P in X.events)
              X.events.hasOwnProperty(P) && g(O, P, "all");
      }
      u(g, "l");
      function x(O, P) {
        for (var k = Di(P), G = new mf(O), R = s[O.type], H = Os(K.getEventTargets(O), 1)[0], X = H; c.default.element(X); ) {
          for (var q = 0; q < R.length; q++) {
            var re = R[q], oe = re.selector, de = re.context;
            if (z.matchesSelector(X, oe) && z.nodeContains(de, H) && z.nodeContains(de, X)) {
              var Ae = re.listeners;
              G.currentTarget = X;
              for (var Be = 0; Be < Ae.length; Be++) {
                var be = Os(Ae[Be], 2), Ge = be[0], Zt = be[1], Lr = Zt.capture, Us = Zt.passive;
                Lr === k.capture && Us === k.passive && Ge(G);
              }
            }
          }
          X = z.parentNode(X);
        }
      }
      u(x, "u");
      function T(O) {
        return x(O, true);
      }
      return u(T, "c"), (o = n.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return m.supportsOptions = true;
      }, get passive() {
        return m.supportsPassive = true;
      } }), n.events = m, m;
    } };
    Xo.default = gf;
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
          if (g.simulation && !Cu(g, a))
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
        if (Cu(d, o))
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
    function Cu(n, o) {
      return n.pointers.some(function(a) {
        return a.id === o;
      });
    }
    u(Cu, "Ln");
    var bf = Qo;
    Zo.default = bf;
    var Ko = {};
    function Ms(n) {
      return Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ms(n);
    }
    u(Ms, "Nn");
    function Ou(n, o) {
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
            return Mu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Mu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Ou, "qn");
    function Mu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Mu, "Gn");
    function yf(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u(yf, "$n");
    function wf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(wf, "Hn");
    function Is(n, o) {
      return Is = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Is(n, o);
    }
    u(Is, "Kn");
    function xf(n, o) {
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
    u(xf, "Zn");
    function Jo(n) {
      return Jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Jo(n);
    }
    u(Jo, "Jn"), Object.defineProperty(Ko, "__esModule", { value: true }), Ko.default = void 0;
    var Ps = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Iu(n, o) {
      return function(a) {
        var s = o.interactions.list, d = K.getPointerType(a), m = Ou(K.getEventTargets(a), 2), E = m[0], g = m[1], x = [];
        if (/^touch/.test(a.type)) {
          o.prevTouchTime = o.now();
          for (var T = 0; T < a.changedTouches.length; T++) {
            var O = a.changedTouches[T], P = { pointer: O, pointerId: K.getPointerId(O), pointerType: d, eventType: a.type, eventTarget: E, curEventTarget: g, scope: o }, k = Pu(P);
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
            var H = { pointer: a, pointerId: K.getPointerId(a), pointerType: d, eventType: a.type, curEventTarget: g, eventTarget: E, scope: o }, X = Pu(H);
            x.push([H.pointer, H.eventTarget, H.curEventTarget, X]);
          }
        }
        for (var q = 0; q < x.length; q++) {
          var re = Ou(x[q], 4), oe = re[0], de = re[1], Ae = re[2];
          re[3][n](oe, a, de, Ae);
        }
      };
    }
    u(Iu, "tr");
    function Pu(n) {
      var o = n.pointerType, a = n.scope, s = { interaction: Zo.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o });
    }
    u(Pu, "er");
    function As(n, o) {
      var a = n.doc, s = n.scope, d = n.options, m = s.interactions.docEvents, E = s.events, g = E[o];
      for (var x in s.browser.isIOS && !d.events && (d.events = { passive: false }), E.delegatedEvents)
        g(a, x, E.delegateListener), g(a, x, E.delegateUseCapture, true);
      for (var T = d && d.events, O = 0; O < m.length; O++) {
        var P = m[O];
        g(a, P.type, P.listener, T);
      }
    }
    u(As, "nr");
    var Ef = { id: "core/interactions", install: function(n) {
      for (var o = {}, a = 0; a < Ps.length; a++) {
        var s = Ps[a];
        o[s] = Iu(s, n);
      }
      var d, m = F.default.pEventTypes;
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
      u(E, "a"), (d = M.default.PointerEvent ? [{ type: m.down, listener: E }, { type: m.down, listener: o.pointerDown }, { type: m.move, listener: o.pointerMove }, { type: m.up, listener: o.pointerUp }, { type: m.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var x = 0; x < n.interactions.list.length; x++)
          n.interactions.list[x].documentBlur(g);
      } }), n.prevTouchTime = 0, n.Interaction = function(g) {
        (function(R, H) {
          if (typeof H != "function" && H !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(H && H.prototype, { constructor: { value: R, writable: true, configurable: true } }), Object.defineProperty(R, "prototype", { writable: false }), H && Is(R, H);
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
          var R, H = Jo(O);
          if (P) {
            var X = Jo(this).constructor;
            R = Reflect.construct(H, arguments, X);
          } else
            R = H.apply(this, arguments);
          return xf(this, R);
        });
        function G() {
          return yf(this, G), k.apply(this, arguments);
        }
        return u(G, "s"), x = G, (T = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(R) {
          n.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && wf(x.prototype, T), Object.defineProperty(x, "prototype", { writable: false }), G;
      }(Nt.default), n.interactions = { list: [], new: function(g) {
        g.scopeFire = function(T, O) {
          return n.fire(T, O);
        };
        var x = new n.Interaction(g);
        return n.interactions.list.push(x), x;
      }, listeners: o, docEvents: d, pointerMoveTolerance: 1 }, n.usePlugin(Qn.default);
    }, listeners: { "scope:add-document": function(n) {
      return As(n, "add");
    }, "scope:remove-document": function(n) {
      return As(n, "remove");
    }, "interactable:unset": function(n, o) {
      for (var a = n.interactable, s = o.interactions.list.length - 1; s >= 0; s--) {
        var d = o.interactions.list[s];
        d.interactable === a && (d.stop(), o.fire("interactions:destroy", { interaction: d }), d.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: As, doOnInteractions: Iu, methodNames: Ps }, Sf = Ef;
    Ko.default = Sf;
    var ki = {};
    function zs(n) {
      return zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, zs(n);
    }
    u(zs, "ar");
    function Ni() {
      return Ni = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(n, o, a) {
        var s = Tf(n, o);
        if (s) {
          var d = Object.getOwnPropertyDescriptor(s, o);
          return d.get ? d.get.call(arguments.length < 3 ? n : a) : d.value;
        }
      }, Ni.apply(this, arguments);
    }
    u(Ni, "sr");
    function Tf(n, o) {
      for (; !Object.prototype.hasOwnProperty.call(n, o) && (n = Qr(n)) !== null; )
        ;
      return n;
    }
    u(Tf, "lr");
    function _s(n, o) {
      return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, _s(n, o);
    }
    u(_s, "ur");
    function Cf(n, o) {
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
    u(Cf, "cr");
    function Qr(n) {
      return Qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Qr(n);
    }
    u(Qr, "fr");
    function Au(n, o) {
      if (!(n instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    u(Au, "dr");
    function zu(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(zu, "pr");
    function _u(n, o, a) {
      return o && zu(n.prototype, o), a && zu(n, a), Object.defineProperty(n, "prototype", { writable: false }), n;
    }
    u(_u, "vr");
    function bt(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(bt, "hr"), Object.defineProperty(ki, "__esModule", { value: true }), ki.Scope = void 0, ki.initScope = Ru;
    var Of = function() {
      function n() {
        var o = this;
        Au(this, n), bt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), bt(this, "isInitialized", false), bt(this, "listenerMaps", []), bt(this, "browser", F.default), bt(this, "defaults", (0, gn.default)(Mi.defaults)), bt(this, "Eventable", zi.Eventable), bt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), bt(this, "interactStatic", (0, Ss.createInteractStatic)(this)), bt(this, "InteractEvent", Ii.InteractEvent), bt(this, "Interactable", void 0), bt(this, "interactables", new Yo.InteractableSet(this)), bt(this, "_win", void 0), bt(this, "document", void 0), bt(this, "window", void 0), bt(this, "documents", []), bt(this, "_plugins", { list: [], map: {} }), bt(this, "onWindowUnload", function(s) {
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
            var x, T = Qr(d);
            if (m) {
              var O = Qr(this).constructor;
              x = Reflect.construct(T, arguments, O);
            } else
              x = T.apply(this, arguments);
            return Cf(this, x);
          });
          function g() {
            return Au(this, g), E.apply(this, arguments);
          }
          return u(g, "i"), _u(g, [{ key: "_defaults", get: function() {
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
      return u(n, "t"), _u(n, [{ key: "addListeners", value: function(o, a) {
        this.listenerMaps.push({ id: a, map: o });
      } }, { key: "fire", value: function(o, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var d = this.listenerMaps[s].map[o];
          if (d && d(a, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : Ru(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, a), o.listeners && o.before) {
          for (var s = 0, d = this.listenerMaps.length, m = o.before.reduce(function(g, x) {
            return g[x] = true, g[Du(x)] = true, g;
          }, {}); s < d; s++) {
            var E = this.listenerMaps[s].id;
            if (m[E] || m[Du(E)])
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
    function Ru(n, o) {
      return n.isInitialized = true, c.default.window(o) && e.init(o), M.default.init(o), F.default.init(o), Ct.default.init(o), n.window = o, n.document = o.document, n.usePlugin(Ko.default), n.usePlugin(Xo.default), n;
    }
    u(Ru, "yr");
    function Du(n) {
      return n && n.replace(/\/.*$/, "");
    }
    u(Du, "mr"), ki.Scope = Of;
    var Rs = {}, it = {};
    Object.defineProperty(it, "__esModule", { value: true });
    var Mf = {};
    it.default = void 0, Object.keys(Rs).forEach(function(n) {
      n !== "default" && n !== "__esModule" && (Object.prototype.hasOwnProperty.call(Mf, n) || n in it && it[n] === Rs[n] || Object.defineProperty(it, n, { enumerable: true, get: function() {
        return Rs[n];
      } }));
    });
    var ku = new ki.Scope(), If = ku.interactStatic;
    it.default = If;
    var Pf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    ku.init(Pf);
    var ea = {};
    Object.defineProperty(ea, "__esModule", { value: true }), ea.default = void 0, ea.default = function() {
    };
    var ta = {};
    Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0, ta.default = function() {
    };
    var ra = {};
    function Nu(n, o) {
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
            return Gu(a, s);
          var d = Object.prototype.toString.call(a).slice(8, -1);
          return d === "Object" && a.constructor && (d = a.constructor.name), d === "Map" || d === "Set" ? Array.from(a) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Gu(a, s) : void 0;
        }
      }(n, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    u(Nu, "jr");
    function Gu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Gu, "Mr"), Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0, ra.default = function(n) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var d = Nu(s, 2), m = d[0], E = d[1];
        return m in n || E in n;
      }), a = u(function(s, d) {
        for (var m = n.range, E = n.limits, g = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = n.offset, T = x === void 0 ? { x: 0, y: 0 } : x, O = { range: m, grid: n, x: null, y: null }, P = 0; P < o.length; P++) {
          var k = Nu(o[P], 2), G = k[0], R = k[1], H = Math.round((s - T.x) / n[G]), X = Math.round((d - T.y) / n[R]);
          O[G] = Math.max(g.left, Math.min(g.right, H * n[G] + T.x)), O[R] = Math.max(g.top, Math.min(g.bottom, X * n[R] + T.y));
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
    var Af = { id: "snappers", install: function(n) {
      var o = n.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, Gi), o.createSnapGrid = o.snappers.grid;
    } }, zf = Af;
    na.default = zf;
    var Jn = {};
    function Lu(n, o) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o && (s = s.filter(function(d) {
          return Object.getOwnPropertyDescriptor(n, d).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    u(Lu, "Cr");
    function Ds(n) {
      for (var o = 1; o < arguments.length; o++) {
        var a = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Lu(Object(a), true).forEach(function(s) {
          _f(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : Lu(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    u(Ds, "Rr");
    function _f(n, o, a) {
      return o in n ? Object.defineProperty(n, o, { value: a, enumerable: true, configurable: true, writable: true }) : n[o] = a, n;
    }
    u(_f, "Fr"), Object.defineProperty(Jn, "__esModule", { value: true }), Jn.default = Jn.aspectRatio = void 0;
    var ju = { start: function(n) {
      var o = n.state, a = n.rect, s = n.edges, d = n.pageCoords, m = o.options.ratio, E = o.options, g = E.equalDelta, x = E.modifiers;
      m === "preserve" && (m = a.width / a.height), o.startCoords = (0, W.default)({}, d), o.startRect = (0, W.default)({}, a), o.ratio = m, o.equalDelta = g;
      var T = o.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o.xIsPrimaryAxis = !(!s.left && !s.right), o.equalDelta) {
        var O = (T.left ? 1 : -1) * (T.top ? 1 : -1);
        o.edgeSign = { x: O, y: O };
      } else
        o.edgeSign = { x: T.left ? -1 : 1, y: T.top ? -1 : 1 };
      if ((0, W.default)(n.edges, T), x && x.length) {
        var P = new bn.default(n.interaction);
        P.copyFrom(n.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(Ds({}, n));
      }
    }, set: function(n) {
      var o = n.state, a = n.rect, s = n.coords, d = (0, W.default)({}, s), m = o.equalDelta ? Rf : Df;
      if (m(o, o.xIsPrimaryAxis, s, a), !o.subModification)
        return null;
      var E = (0, W.default)({}, a);
      (0, ce.addEdges)(o.linkedEdges, E, { x: s.x - d.x, y: s.y - d.y });
      var g = o.subModification.setAll(Ds(Ds({}, n), {}, { rect: E, edges: o.linkedEdges, pageCoords: s, prevCoords: s, prevRect: E })), x = g.delta;
      return g.changed && (m(o, Math.abs(x.x) > Math.abs(x.y), g.coords, g.rect), (0, W.default)(s, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Rf(n, o, a) {
      var s = n.startCoords, d = n.edgeSign;
      o ? a.y = s.y + (a.x - s.x) * d.y : a.x = s.x + (a.y - s.y) * d.x;
    }
    u(Rf, "Br");
    function Df(n, o, a, s) {
      var d = n.startRect, m = n.startCoords, E = n.ratio, g = n.edgeSign;
      if (o) {
        var x = s.width / E;
        a.y = m.y + (x - d.height) * g.y;
      } else {
        var T = s.height * E;
        a.x = m.x + (T - d.width) * g.x;
      }
    }
    u(Df, "Yr"), Jn.aspectRatio = ju;
    var kf = (0, gt.makeModifier)(ju, "aspectRatio");
    Jn.default = kf;
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: true }), xn.default = void 0;
    var Bu = u(function() {
    }, "Ur");
    Bu._defaults = {};
    var Nf = Bu;
    xn.default = Nf;
    var ks = {};
    Object.defineProperty(ks, "__esModule", { value: true }), Object.defineProperty(ks, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var zt = {};
    function Ns(n, o, a) {
      return c.default.func(n) ? ce.resolveRectLike(n, o.interactable, o.element, [a.x, a.y, o]) : ce.resolveRectLike(n, o.interactable, o.element);
    }
    u(Ns, "Gr"), Object.defineProperty(zt, "__esModule", { value: true }), zt.default = void 0, zt.getRestrictionRect = Ns, zt.restrict = void 0;
    var Hu = { start: function(n) {
      var o = n.rect, a = n.startOffset, s = n.state, d = n.interaction, m = n.pageCoords, E = s.options, g = E.elementRect, x = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
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
    zt.restrict = Hu;
    var Gf = (0, gt.makeModifier)(Hu, "restrict");
    zt.default = Gf;
    var Er = {};
    Object.defineProperty(Er, "__esModule", { value: true }), Er.restrictEdges = Er.default = void 0;
    var qu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, $u = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Fu(n, o) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var d = a[s];
        d in n || (n[d] = o[d]);
      }
      return n;
    }
    u(Fu, "Qr");
    var Wu = { noInner: qu, noOuter: $u, start: function(n) {
      var o, a = n.interaction, s = n.startOffset, d = n.state, m = d.options;
      if (m) {
        var E = (0, zt.getRestrictionRect)(m.offset, a, a.coords.start.page);
        o = ce.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, d.offset = { top: o.y + s.top, left: o.x + s.left, bottom: o.y - s.bottom, right: o.x - s.right };
    }, set: function(n) {
      var o = n.coords, a = n.edges, s = n.interaction, d = n.state, m = d.offset, E = d.options;
      if (a) {
        var g = (0, W.default)({}, o), x = (0, zt.getRestrictionRect)(E.inner, s, g) || {}, T = (0, zt.getRestrictionRect)(E.outer, s, g) || {};
        Fu(x, qu), Fu(T, $u), a.top ? o.y = Math.min(Math.max(T.top + m.top, g.y), x.top + m.top) : a.bottom && (o.y = Math.max(Math.min(T.bottom + m.bottom, g.y), x.bottom + m.bottom)), a.left ? o.x = Math.min(Math.max(T.left + m.left, g.x), x.left + m.left) : a.right && (o.x = Math.max(Math.min(T.right + m.right, g.x), x.right + m.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Er.restrictEdges = Wu;
    var Lf = (0, gt.makeModifier)(Wu, "restrictEdges");
    Er.default = Lf;
    var ei = {};
    Object.defineProperty(ei, "__esModule", { value: true }), ei.restrictRect = ei.default = void 0;
    var jf = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, zt.restrict.defaults), Uu = { start: zt.restrict.start, set: zt.restrict.set, defaults: jf };
    ei.restrictRect = Uu;
    var Bf = (0, gt.makeModifier)(Uu, "restrictRect");
    ei.default = Bf;
    var ti = {};
    Object.defineProperty(ti, "__esModule", { value: true }), ti.restrictSize = ti.default = void 0;
    var Hf = { width: -1 / 0, height: -1 / 0 }, qf = { width: 1 / 0, height: 1 / 0 }, Vu = { start: function(n) {
      return Er.restrictEdges.start(n);
    }, set: function(n) {
      var o = n.interaction, a = n.state, s = n.rect, d = n.edges, m = a.options;
      if (d) {
        var E = ce.tlbrToXywh((0, zt.getRestrictionRect)(m.min, o, n.coords)) || Hf, g = ce.tlbrToXywh((0, zt.getRestrictionRect)(m.max, o, n.coords)) || qf;
        a.options = { endOnly: m.endOnly, inner: (0, W.default)({}, Er.restrictEdges.noInner), outer: (0, W.default)({}, Er.restrictEdges.noOuter) }, d.top ? (a.options.inner.top = s.bottom - E.height, a.options.outer.top = s.bottom - g.height) : d.bottom && (a.options.inner.bottom = s.top + E.height, a.options.outer.bottom = s.top + g.height), d.left ? (a.options.inner.left = s.right - E.width, a.options.outer.left = s.right - g.width) : d.right && (a.options.inner.right = s.left + E.width, a.options.outer.right = s.left + g.width), Er.restrictEdges.set(n), a.options = m;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ti.restrictSize = Vu;
    var $f = (0, gt.makeModifier)(Vu, "restrictSize");
    ti.default = $f;
    var Gs = {};
    Object.defineProperty(Gs, "__esModule", { value: true }), Object.defineProperty(Gs, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var Kr = {};
    Object.defineProperty(Kr, "__esModule", { value: true }), Kr.snap = Kr.default = void 0;
    var Yu = { start: function(n) {
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
      var o = n.interaction, a = n.coords, s = n.state, d = s.options, m = s.offsets, E = (0, je.default)(o.interactable, o.element, o.prepared.name), g = (0, W.default)({}, a), x = [];
      d.offsetWithOrigin || (g.x -= E.x, g.y -= E.y);
      for (var T = 0; T < m.length; T++)
        for (var O = m[T], P = g.x - O.x, k = g.y - O.y, G = 0, R = d.targets.length; G < R; G++) {
          var H, X = d.targets[G];
          (H = c.default.func(X) ? X(P, k, o._proxy, O, G) : X) && x.push({ x: (c.default.number(H.x) ? H.x : P) + O.x, y: (c.default.number(H.y) ? H.y : k) + O.y, range: c.default.number(H.range) ? H.range : d.range, source: X, index: G, offset: O });
        }
      for (var q = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < x.length; re++) {
        var oe = x[re], de = oe.range, Ae = oe.x - g.x, Be = oe.y - g.y, be = (0, nt.default)(Ae, Be), Ge = be <= de;
        de === 1 / 0 && q.inRange && q.range !== 1 / 0 && (Ge = false), q.target && !(Ge ? q.inRange && de !== 1 / 0 ? be / de < q.distance / q.range : de === 1 / 0 && q.range !== 1 / 0 || be < q.distance : !q.inRange && be < q.distance) || (q.target = oe, q.distance = be, q.range = de, q.inRange = Ge, q.delta.x = Ae, q.delta.y = Be);
      }
      return q.inRange && (a.x = q.target.x, a.y = q.target.y), s.closest = q, q;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Kr.snap = Yu;
    var Ff = (0, gt.makeModifier)(Yu, "snap");
    Kr.default = Ff;
    var Gr = {};
    function Xu(n, o) {
      (o == null || o > n.length) && (o = n.length);
      for (var a = 0, s = Array(o); a < o; a++)
        s[a] = n[a];
      return s;
    }
    u(Xu, "yo"), Object.defineProperty(Gr, "__esModule", { value: true }), Gr.snapSize = Gr.default = void 0;
    var Zu = { start: function(n) {
      var o = n.state, a = n.edges, s = o.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], Kr.snap.start(n), o.offsets = n.state.offsets, n.state = o;
    }, set: function(n) {
      var o, a, s = n.interaction, d = n.state, m = n.coords, E = d.options, g = d.offsets, x = { x: m.x - g[0].x, y: m.y - g[0].y };
      d.options = (0, W.default)({}, E), d.options.targets = [];
      for (var T = 0; T < (E.targets || []).length; T++) {
        var O = (E.targets || [])[T], P = void 0;
        if (P = c.default.func(O) ? O(x.x, x.y, s) : O) {
          for (var k = 0; k < d.targetFields.length; k++) {
            var G = (o = d.targetFields[k], a = 2, function(q) {
              if (Array.isArray(q))
                return q;
            }(o) || function(q, re) {
              var oe = q == null ? null : typeof Symbol != "undefined" && q[Symbol.iterator] || q["@@iterator"];
              if (oe != null) {
                var de, Ae, Be = [], be = true, Ge = false;
                try {
                  for (oe = oe.call(q); !(be = (de = oe.next()).done) && (Be.push(de.value), !re || Be.length !== re); be = true)
                    ;
                } catch (Zt) {
                  Ge = true, Ae = Zt;
                } finally {
                  try {
                    be || oe.return == null || oe.return();
                  } finally {
                    if (Ge)
                      throw Ae;
                  }
                }
                return Be;
              }
            }(o, a) || function(q, re) {
              if (q) {
                if (typeof q == "string")
                  return Xu(q, re);
                var oe = Object.prototype.toString.call(q).slice(8, -1);
                return oe === "Object" && q.constructor && (oe = q.constructor.name), oe === "Map" || oe === "Set" ? Array.from(q) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Xu(q, re) : void 0;
              }
            }(o, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = G[0], H = G[1];
            if (R in P || H in P) {
              P.x = P[R], P.y = P[H];
              break;
            }
          }
          d.options.targets.push(P);
        }
      }
      var X = Kr.snap.set(n);
      return d.options = E, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Gr.snapSize = Zu;
    var Wf = (0, gt.makeModifier)(Zu, "snapSize");
    Gr.default = Wf;
    var ri = {};
    Object.defineProperty(ri, "__esModule", { value: true }), ri.snapEdges = ri.default = void 0;
    var Qu = { start: function(n) {
      var o = n.edges;
      return o ? (n.state.targetFields = n.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Gr.snapSize.start(n)) : null;
    }, set: Gr.snapSize.set, defaults: (0, W.default)((0, gn.default)(Gr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    ri.snapEdges = Qu;
    var Uf = (0, gt.makeModifier)(Qu, "snapEdges");
    ri.default = Uf;
    var Ls = {};
    Object.defineProperty(Ls, "__esModule", { value: true }), Object.defineProperty(Ls, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var js = {};
    Object.defineProperty(js, "__esModule", { value: true }), Object.defineProperty(js, "default", { enumerable: true, get: function() {
      return xn.default;
    } });
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.default = void 0;
    var Vf = { aspectRatio: Jn.default, restrictEdges: Er.default, restrict: zt.default, restrictRect: ei.default, restrictSize: ti.default, snapEdges: ri.default, snap: Kr.default, snapSize: Gr.default, spring: Ls.default, avoid: ks.default, transform: js.default, rubberband: Gs.default };
    ni.default = Vf;
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var Yf = { id: "modifiers", install: function(n) {
      var o = n.interactStatic;
      for (var a in n.usePlugin(gt.default), n.usePlugin(na.default), o.modifiers = ni.default, ni.default) {
        var s = ni.default[a], d = s._defaults, m = s._methods;
        d._methods = m, n.defaults.perAction[a] = d;
      }
    } }, Xf = Yf;
    ia.default = Xf;
    var En = {};
    function Bs(n) {
      return Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Bs(n);
    }
    u(Bs, "Io");
    function Zf(n, o) {
      for (var a = 0; a < o.length; a++) {
        var s = o[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    u(Zf, "Do");
    function Hs(n, o) {
      return Hs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, s) {
        return a.__proto__ = s, a;
      }, Hs(n, o);
    }
    u(Hs, "Ao");
    function Qf(n, o) {
      if (o && (Bs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return qs(n);
    }
    u(Qf, "zo");
    function qs(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    u(qs, "Co");
    function oa(n) {
      return oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, oa(n);
    }
    u(oa, "Ro"), Object.defineProperty(En, "__esModule", { value: true }), En.default = En.PointerEvent = void 0;
    var Kf = function(n) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Hs(g, x);
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
        var g, x = oa(s);
        if (d) {
          var T = oa(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return Qf(this, g);
      });
      function E(g, x, T, O, P, k) {
        var G;
        if (function(X, q) {
          if (!(X instanceof q))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), G = m.call(this, P), K.pointerExtend(qs(G), T), T !== x && K.pointerExtend(qs(G), x), G.timeStamp = k, G.originalEvent = T, G.type = g, G.pointerId = K.getPointerId(x), G.pointerType = K.getPointerType(x), G.target = O, G.currentTarget = null, g === "tap") {
          var R = P.getPointerIndex(x);
          G.dt = G.timeStamp - P.pointers[R].downTime;
          var H = G.timeStamp - P.tapTime;
          G.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === G.target && H < 500;
        } else
          g === "doubletap" && (G.dt = x.timeStamp - P.tapTime, G.double = true);
        return G;
      }
      return u(E, "a"), o = E, (a = [{ key: "_subtractOrigin", value: function(g) {
        var x = g.x, T = g.y;
        return this.pageX -= x, this.pageY -= T, this.clientX -= x, this.clientY -= T, this;
      } }, { key: "_addOrigin", value: function(g) {
        var x = g.x, T = g.y;
        return this.pageX += x, this.pageY += T, this.clientX += x, this.clientY += T, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Zf(o.prototype, a), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(Lt.BaseEvent);
    En.PointerEvent = En.default = Kf;
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
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && $s(n), Jr({ interaction: a, pointer: s, event: d, eventTarget: m, type: "move" }, o));
    }, "interactions:down": function(n, o) {
      (function(a, s) {
        for (var d = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget, x = a.pointerIndex, T = d.pointers[x].hold, O = z.getPath(g), P = { interaction: d, pointer: m, event: E, eventTarget: g, type: "hold", targets: [], path: O, node: null }, k = 0; k < O.length; k++) {
          var G = O[k];
          P.node = G, s.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var R = 1 / 0, H = 0; H < P.targets.length; H++) {
            var X = P.targets[H].eventable.options.holdDuration;
            X < R && (R = X);
          }
          T.duration = R, T.timeout = setTimeout(function() {
            Jr({ interaction: d, eventTarget: g, pointer: m, event: E, type: "hold" }, s);
          }, R);
        }
      })(n, o), Jr(n, o);
    }, "interactions:up": function(n, o) {
      $s(n), Jr(n, o), function(a, s) {
        var d = a.interaction, m = a.pointer, E = a.event, g = a.eventTarget;
        d.pointerWasMoved || Jr({ interaction: d, eventTarget: g, pointer: m, event: E, type: "tap" }, s);
      }(n, o);
    }, "interactions:cancel": function(n, o) {
      $s(n), Jr(n, o);
    } }, PointerEvent: En.PointerEvent, fire: Jr, collectEventTargets: Ku, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Jr(n, o) {
      var a = n.interaction, s = n.pointer, d = n.event, m = n.eventTarget, E = n.type, g = n.targets, x = g === void 0 ? Ku(n, o) : g, T = new En.PointerEvent(E, s, d, m, a, o.now());
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
        var H = T.double ? Jr({ interaction: a, pointer: s, event: d, eventTarget: m, type: "doubletap" }, o) : T;
        a.prevTap = H, a.tapTime = H.timeStamp;
      }
      return T;
    }
    u(Jr, "Yo");
    function Ku(n, o) {
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
    u(Ku, "Wo");
    function $s(n) {
      var o = n.interaction, a = n.pointerIndex, s = o.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    u($s, "Lo");
    var Jf = aa;
    Li.default = Jf;
    var sa = {};
    function eh(n) {
      var o = n.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    u(eh, "No"), Object.defineProperty(sa, "__esModule", { value: true }), sa.default = void 0;
    var th = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(Li.default);
      var o = n.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o) {
      return n["pointerEvents:".concat(o)] = eh, n;
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
    } }) }, rh = th;
    sa.default = rh;
    var la = {};
    function nh(n) {
      return (0, W.default)(this.events.options, n), this;
    }
    u(nh, "Ho"), Object.defineProperty(la, "__esModule", { value: true }), la.default = void 0;
    var ih = { id: "pointer-events/interactableTargets", install: function(n) {
      var o = n.Interactable;
      o.prototype.pointerEvents = nh;
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
      (0, W.default)(a.events.options, o.pointerEvents.defaults), (0, W.default)(a.events.options, s.pointerEvents || {});
    } } }, oh = ih;
    la.default = oh;
    var ua = {};
    Object.defineProperty(ua, "__esModule", { value: true }), ua.default = void 0;
    var ah = { id: "pointer-events", install: function(n) {
      n.usePlugin(Li), n.usePlugin(sa.default), n.usePlugin(la.default);
    } }, sh = ah;
    ua.default = sh;
    var ji = {};
    function Ju(n) {
      var o = n.Interactable;
      n.actions.phases.reflow = true, o.prototype.reflow = function(a) {
        return function(s, d, m) {
          for (var E = c.default.string(s.target) ? Me.from(s._context.querySelectorAll(s.target)) : [s.target], g = m.window.Promise, x = g ? [] : null, T = function() {
            var P = E[O], k = s.getRect(P);
            if (!k)
              return "break";
            var G = Me.find(m.interactions.list, function(re) {
              return re.interacting() && re.interactable === s && re.element === P && re.prepared.name === d.name;
            }), R = void 0;
            if (G)
              G.move(), x && (R = G._reflowPromise || new g(function(re) {
                G._reflowResolve = re;
              }));
            else {
              var H = (0, ce.tlbrToXywh)(k), X = { page: { x: H.x, y: H.y }, client: { x: H.x, y: H.y }, timeStamp: m.now() }, q = K.coordsToEvent(X);
              R = function(re, oe, de, Ae, Be) {
                var be = re.interactions.new({ pointerType: "reflow" }), Ge = { interaction: be, event: Be, pointer: Be, eventTarget: de, phase: "reflow" };
                be.interactable = oe, be.element = de, be.prevEvent = Be, be.updatePointer(Be, Be, de, true), K.setZeroCoords(be.coords.delta), (0, jt.copyAction)(be.prepared, Ae), be._doPhase(Ge);
                var Zt = re.window.Promise, Lr = Zt ? new Zt(function(Us) {
                  be._reflowResolve = Us;
                }) : void 0;
                return be._reflowPromise = Lr, be.start(Ae, oe, de), be._interacting ? (be.move(Ge), be.end(Be)) : (be.stop(), be._reflowResolve()), be.removePointer(Be, Be), Lr;
              }(m, s, P, d, q);
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
    u(Ju, "ni"), Object.defineProperty(ji, "__esModule", { value: true }), ji.default = void 0, ji.install = Ju;
    var lh = { id: "reflow", install: Ju, listeners: { "interactions:stop": function(n, o) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), Me.remove(o.interactions.list, a));
    } } }, uh = lh;
    ji.default = uh;
    var Xt = { exports: {} };
    function Fs(n) {
      return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Fs(n);
    }
    u(Fs, "ai"), Object.defineProperty(Xt.exports, "__esModule", { value: true }), Xt.exports.default = void 0, it.default.use(Qn.default), it.default.use(wn.default), it.default.use(ua.default), it.default.use(Kn.default), it.default.use(ia.default), it.default.use(Bo.default), it.default.use(Yt.default), it.default.use(Zr.default), it.default.use(ji.default);
    var ch = it.default;
    if (Xt.exports.default = ch, Fs(Xt) === "object" && Xt)
      try {
        Xt.exports = it.default;
      } catch (n) {
      }
    it.default.default = it.default, Xt = Xt.exports;
    var Sn = { exports: {} };
    function Ws(n) {
      return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ws(n);
    }
    u(Ws, "ui"), Object.defineProperty(Sn.exports, "__esModule", { value: true }), Sn.exports.default = void 0;
    var ph = Xt.default;
    if (Sn.exports.default = ph, Ws(Sn) === "object" && Sn)
      try {
        Sn.exports = Xt.default;
      } catch (n) {
      }
    return Xt.default.default = Xt.default, Sn.exports;
  });
});
var wd = ca((yd, nu) => {
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
    u(c, "flush");
    function f(p, h) {
      var b = p.indexOf(h);
      return !!~b && !!p.splice(b, 1);
    }
    u(f, "remove");
    function y(p, h) {
      for (var b in h)
        h.hasOwnProperty(b) && (p[b] = h[b]);
    }
    u(y, "mixin");
    var v = r.fastdom = r.fastdom || new i();
    typeof define == "function" ? define(function() {
      return v;
    }) : typeof nu == "object" && (nu.exports = v);
  })(typeof window != "undefined" ? window : yd);
});
var Td = ca((ou, Sd) => {
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
    }) : typeof ou == "object" ? (Object.defineProperty(v, "__esModule", { value: true }), v.default = v, v.Complex = v, Sd.exports = v) : r.Complex = v;
  })(ou);
});
var tn = Tn(nc());
function ic(r) {
  let e = rn(r);
  return new tn.default(e).valueOf() * Math.PI;
}
u(ic, "X");
function qi(r) {
  let e = rn(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
u(qi, "K");
function oc(r, e) {
  return new tn.default(rn(r)).valueOf() < new tn.default(rn(e)).valueOf();
}
u(oc, "Y");
function ac(r, e) {
  return new tn.default(rn(r)).valueOf() > new tn.default(rn(e)).valueOf();
}
u(ac, "W");
function sc(r) {
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
u(sc, "H");
function rn(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
u(rn, "l");
function lc(r) {
  try {
    let e = rn(r), t = new tn.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
u(lc, "J");
var bh = Object.prototype.toString.call({});
var yh = "!recursion-limit!";
var wh = 10;
function Xe(r, e = wh) {
  return xh(r) || Eh(r, e) || Sh(r, e);
}
u(Xe, "f");
function xh(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
u(xh, "G");
function Eh(r, e) {
  if (e === 0)
    return yh;
  if (r instanceof Map)
    return Th(r, e);
  if (r instanceof Set)
    return Ch(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Oh(r, e);
}
u(Eh, "F");
function Sh(r, e) {
  let t = String(r);
  return t !== bh ? t : Mh(r, e);
}
u(Sh, "M");
function Th(r, e) {
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
u(Th, "O");
function Ch(r, e) {
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
u(Ch, "R");
function Oh(r, e) {
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
u(Oh, "D");
function Mh(r, e) {
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
u(Mh, "N");
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
var Ih = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var Bt = u(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -Bt.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(Bt.parseFloat(r.substr(1)));
    let e = Bt.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -Bt.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = Bt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = Bt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of Ih)
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
    let i = Bt.matchUnicodeFraction((c) => Math.abs(c.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = Bt.matchUnicodeFraction((c) => Math.abs(Math.sqrt(c.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var Hi = Bt;
Hi.CONSISTENT = new Bt(false, 0, 2, ", "), Hi.EXACT = new Bt(true, 0, void 0, ", "), Hi.MINIFIED = new Bt(true, 0, void 0, ","), Hi.SIMPLIFIED = new Bt(true, 5e-4, 3, ", ");
var B = u(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    B.need(r != null, "notNull");
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
    let [t, i] = B.snappedCosSin(e);
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
    return r = r || Hi.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
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
var ha = { MAX_QUBIT_COUNT: 16 };
function ue(r, e = {}, t = document) {
  let i = new CustomEvent(r, { bubbles: true, cancelable: true, detail: e });
  return t.dispatchEvent(i);
}
u(ue, "fe");
var Xs = "Bloch";
var Zs = "\u2022";
var va = "H";
var ma = "Measure";
var ga = "P";
var Qs = "QFT";
var Ks = "QFT\u2020";
var ba = "X^\xBD";
var ya = "Rx";
var wa = "Ry";
var xa = "Rz";
var Js = "Swap";
var Ea = "T";
var uc = "|0>";
var cc = "|1>";
var Sa = "X";
var Ta = "Y";
var Ca = "Z";
var el = /* @__PURE__ */ new WeakSet();
function rl(r) {
  el.add(r), r.shadowRoot && nl(r.shadowRoot), ol(r), il(r.ownerDocument);
}
u(rl, "bind");
function nl(r) {
  ol(r), il(r);
}
u(nl, "bindShadow");
var Oa = /* @__PURE__ */ new WeakMap();
function il(r = document) {
  if (Oa.has(r))
    return Oa.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c of l)
      if (c.type === "attributes" && c.target instanceof Element)
        tl(c.target);
      else if (c.type === "childList" && c.addedNodes.length)
        for (let f of c.addedNodes)
          f instanceof Element && ol(f);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, Oa.delete(r), t.disconnect();
  } };
  return Oa.set(r, i), i;
}
u(il, "listenForBind");
function ol(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    tl(e);
  r instanceof Element && r.hasAttribute("data-action") && tl(r);
}
u(ol, "bindElements");
function Ph(r) {
  let e = r.currentTarget;
  for (let t of pc(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      el.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && el.has(l.host) && l.host.matches(t.tag)) {
        let c = l.host;
        typeof c[t.method] == "function" && c[t.method](r);
      }
    }
}
u(Ph, "handleEvent");
function* pc(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
u(pc, "bindings");
function tl(r) {
  for (let e of pc(r))
    r.addEventListener(e.type, Ph);
}
u(tl, "bindActions");
function al(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
u(al, "register");
function sl(r, e) {
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
u(sl, "findTarget");
function ll(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
u(ll, "findTargets");
function ye(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return sl(this, e);
  } });
}
u(ye, "target");
function at(r, e) {
  return Object.defineProperty(r, e, { configurable: true, get() {
    return ll(this, e);
  } });
}
u(at, "targets");
function ul(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
u(ul, "autoShadowRoot");
var Ma = /* @__PURE__ */ new WeakMap();
function D(r, e) {
  Ma.has(r) || Ma.set(r, []), Ma.get(r).push(e);
}
u(D, "attr");
function cl(r, e) {
  e || (e = dc(Object.getPrototypeOf(r)));
  for (let t of e) {
    let i = r[t], l = fc(t), c = { configurable: true, get() {
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
u(cl, "initializeAttrs");
function dc(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = Ma.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
u(dc, "getAttrNames");
function fc(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
u(fc, "attrToAttributeName");
function pl(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...dc(r.prototype)].map(fc).concat(e);
  }, set(t) {
    e = t;
  } });
}
u(pl, "defineObservedAttributes");
var Ah = /* @__PURE__ */ new WeakSet();
function hc(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Ah.add(r), ul(r), cl(r), rl(r), e && e.call(r), r.shadowRoot && nl(r.shadowRoot);
}
u(hc, "initializeInstance");
function vc(r) {
  pl(r), al(r);
}
u(vc, "initializeClass");
function ee(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    hc(this, e);
  }, vc(r);
}
u(ee, "controller");
function Se(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this._active = false;
    }
    activate() {
      this._active = true, ue("activateable:active", {}, this);
    }
    deactivate() {
      this._active = false;
    }
    get isActive() {
      return this._active;
    }
  }
  return u(e, "ActivateableMixinClass"), A([D], e.prototype, "_active", 2), e;
}
u(Se, "ActivateableMixin");
var Cn = u((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function nn(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  return u(e, "AngleableMixinClass"), A([D], e.prototype, "angle", 2), A([D], e.prototype, "reducedAngle", 2), e;
}
u(nn, "AngleableMixin");
var $i = u((r) => typeof r == "object" && r !== null && typeof r.controlBits == "object", "isControllable");
function Ue(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this._controlBits = "";
    }
    set controlBits(i) {
      this._controlBits = i.sort().join();
    }
    get controlBits() {
      return this._controlBits === "" ? [] : this._controlBits.split(",").map((i) => parseInt(i)).sort();
    }
    get isControlled() {
      return this.controlBits.length > 0;
    }
  }
  return u(e, "ControllableMixinClass"), A([D], e.prototype, "_controlBits", 2), e;
}
u(Ue, "ControllableMixin");
function $e(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this._disabled = false;
    }
    get isEnabled() {
      return !this._disabled;
    }
    get isDisabled() {
      return this._disabled;
    }
    enable() {
      this._disabled = false;
    }
    disable() {
      this._disabled = true;
    }
  }
  return u(e, "DisableableMixinClass"), A([D], e.prototype, "_disabled", 2), e;
}
u($e, "DisableableMixin");
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
u(ii, "__rest");
function ge(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
u(ge, "__values");
function we(r, e) {
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
u(we, "__read");
function De(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c; i < l; i++)
      (c || !(i in e)) && (c || (c = Array.prototype.slice.call(e, 0, i)), c[i] = e[i]);
  return r.concat(c || Array.prototype.slice.call(e));
}
u(De, "__spreadArray");
var ze;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(ze || (ze = {}));
var on;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(on || (on = {}));
var Fi = ze.Start;
var oi = ze.Stop;
var ai = ze.Raise;
var On = ze.Send;
var Ia = ze.Cancel;
var mc = ze.NullEvent;
var dl = ze.Assign;
var ag = ze.After;
var sg = ze.DoneState;
var Pa = ze.Log;
var gc = ze.Init;
var Wi = ze.Invoke;
var lg = ze.ErrorExecution;
var fl = ze.ErrorPlatform;
var hl = ze.ErrorCustom;
var Ui = ze.Update;
var bc = ze.Choose;
var yc = ze.Pure;
var Aa = ".";
var vl = {};
var za = "xstate.guard";
var wc = "";
var He = true;
var _a;
function Yi(r, e, t) {
  t === void 0 && (t = Aa);
  var i = si(r, t), l = si(e, t);
  return xe(l) ? xe(i) ? l === i : false : xe(i) ? i in l : Object.keys(i).every(function(c) {
    return c in l ? Yi(i[c], l[c]) : false;
  });
}
u(Yi, "matchesState");
function Ra(r) {
  try {
    return xe(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
u(Ra, "getEventType");
function Da(r, e) {
  try {
    return jr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
u(Da, "toStatePath");
function zh(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
u(zh, "isStateLike");
function si(r, e) {
  if (zh(r))
    return r.value;
  if (jr(r))
    return Vi(r);
  if (typeof r != "string")
    return r;
  var t = Da(r, e);
  return Vi(t);
}
u(si, "toStateValue");
function Vi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
u(Vi, "pathToStateValue");
function li(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c = i[l];
    t[c] = e(r[c], c, r, l);
  }
  return t;
}
u(li, "mapValues");
function ml(r, e, t) {
  var i, l, c = {};
  try {
    for (var f = ge(Object.keys(r)), y = f.next(); !y.done; y = f.next()) {
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
u(ml, "mapFilterValues");
var xc = u(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c = ge(r), f = c.next(); !f.done; f = c.next()) {
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
function Ec(r, e) {
  return function(t) {
    var i, l, c = t;
    try {
      for (var f = ge(r), y = f.next(); !y.done; y = f.next()) {
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
u(Ec, "nestedPath");
function Xi(r) {
  if (!r)
    return [[]];
  if (xe(r))
    return [[r]];
  var e = Le(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Xi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
u(Xi, "toStatePaths");
function Le(r) {
  var e;
  return (e = []).concat.apply(e, De([], we(r), false));
}
u(Le, "flatten");
function Sc(r) {
  return jr(r) ? r : [r];
}
u(Sc, "toArrayStrict");
function Ht(r) {
  return r === void 0 ? [] : Sc(r);
}
u(Ht, "toArray");
function Mn(r, e, t) {
  var i, l;
  if (_e(r))
    return r(e, t.data);
  var c = {};
  try {
    for (var f = ge(Object.keys(r)), y = f.next(); !y.done; y = f.next()) {
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
u(Mn, "mapContext");
function Tc(r) {
  return /^(done|error)\./.test(r);
}
u(Tc, "isBuiltInEvent");
function gl(r) {
  return !!(r instanceof Promise || r !== null && (_e(r) || typeof r == "object") && _e(r.then));
}
u(gl, "isPromiseLike");
function Cc(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
u(Cc, "isBehavior");
function ka(r, e) {
  var t, i, l = we([[], []], 2), c = l[0], f = l[1];
  try {
    for (var y = ge(r), v = y.next(); !v.done; v = y.next()) {
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
u(ka, "partition");
function Oc(r, e) {
  return li(r.states, function(t, i) {
    if (!!t) {
      var l = (xe(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: Oc(t, l) };
    }
  });
}
u(Oc, "updateHistoryStates");
function Mc(r, e) {
  return { current: e, states: Oc(r, e) };
}
u(Mc, "updateHistoryValue");
function bl(r, e, t, i) {
  He || Ze(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c, f) {
    var y, v, p = f.assignment, h = { state: i, action: f, _event: e }, b = {};
    if (_e(p))
      b = p(c, e.data, h);
    else
      try {
        for (var w = ge(Object.keys(p)), S = w.next(); !S.done; S = w.next()) {
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
u(bl, "updateContext");
var Ze = u(function() {
}, "warn");
He || (Ze = u(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function jr(r) {
  return Array.isArray(r);
}
u(jr, "isArray");
function _e(r) {
  return typeof r == "function";
}
u(_e, "isFunction");
function xe(r) {
  return typeof r == "string";
}
u(xe, "isString");
function Na(r, e) {
  if (!!r)
    return xe(r) ? { type: za, name: r, predicate: e ? e[r] : void 0 } : _e(r) ? { type: za, name: r.name, predicate: r } : r;
}
u(Na, "toGuard");
function Ic(r) {
  try {
    return "subscribe" in r && _e(r.subscribe);
  } catch (e) {
    return false;
  }
}
u(Ic, "isObservable");
var Sr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var vg = (_a = {}, _a[Sr] = function() {
  return this;
}, _a[Symbol.observable] = function() {
  return this;
}, _a);
function Tr(r) {
  return !!r && "__xstatenode" in r;
}
u(Tr, "isMachine");
function Pc(r) {
  return !!r && typeof r.send == "function";
}
u(Pc, "isActor");
function Zi(r, e) {
  return xe(r) || typeof r == "number" ? V({ type: r }, e) : r;
}
u(Zi, "toEventObject");
function st(r, e) {
  if (!xe(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Zi(r);
  return V({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
u(st, "toSCXMLEvent");
function In(r, e) {
  var t = Sc(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || Tr(i) ? { target: i, event: r } : V(V({}, i), { event: r });
  });
  return t;
}
u(In, "toTransitionConfigArray");
function Ac(r) {
  if (!(r === void 0 || r === wc))
    return Ht(r);
}
u(Ac, "normalizeTarget");
function zc(r, e, t) {
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
u(zc, "reportUnhandledExceptionOnInvocation");
function Ga(r, e, t, i, l) {
  var c = r.options.guards, f = { state: l, cond: e, _event: i };
  if (e.type === za)
    return ((c == null ? void 0 : c[e.name]) || e.predicate)(t, i.data, f);
  var y = c == null ? void 0 : c[e.type];
  if (!y)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return y(t, i.data, f);
}
u(Ga, "evaluateGuard");
function La(r) {
  return typeof r == "string" ? { type: r } : r;
}
u(La, "toInvokeSource");
function Qi(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
u(Qi, "toObserver");
function Ki(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
u(Ki, "createInvokeId");
var Pn = st({ type: gc });
function ja(r, e) {
  return e && e[r] || void 0;
}
u(ja, "getActionFunction");
function ui(r, e) {
  var t;
  if (xe(r) || typeof r == "number") {
    var i = ja(r, e);
    _e(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (_e(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = ja(r.type, e);
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
u(ui, "toActionObject");
var Ji = u(function(r, e) {
  if (!r)
    return [];
  var t = jr(r) ? r : [r];
  return t.map(function(i) {
    return ui(i, e);
  });
}, "toActionObjects");
function Ha(r) {
  var e = ui(r);
  return V(V({ id: xe(r) ? r : e.id }, e), { type: e.type });
}
u(Ha, "toActivityDefinition");
function _c(r) {
  return xe(r) ? { type: ai, event: r } : yl(r, { to: on.Internal });
}
u(_c, "raise");
function _h(r) {
  return { type: ai, _event: st(r.event) };
}
u(_h, "resolveRaise");
function yl(r, e) {
  return { to: e ? e.to : void 0, type: On, event: _e(r) ? r : Zi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : _e(r) ? r.name : Ra(r) };
}
u(yl, "send");
function Rh(r, e, t, i) {
  var l = { _event: t }, c = st(_e(r.event) ? r.event(e, t.data, l) : r.event), f;
  if (xe(r.delay)) {
    var y = i && i[r.delay];
    f = _e(y) ? y(e, t.data, l) : y;
  } else
    f = _e(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var v = _e(r.to) ? r.to(e, t.data, l) : r.to;
  return V(V({}, r), { to: v, _event: c, event: c.data, delay: f });
}
u(Rh, "resolveSend");
var Dh = u(function(r, e, t) {
  return V(V({}, r), { value: xe(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var Rc = u(function(r) {
  return { type: Ia, sendId: r };
}, "cancel");
function Dc(r) {
  var e = Ha(r);
  return { type: ze.Start, activity: e, exec: void 0 };
}
u(Dc, "start");
function kc(r) {
  var e = _e(r) ? r : Ha(r);
  return { type: ze.Stop, activity: e, exec: void 0 };
}
u(kc, "stop");
function kh(r, e, t) {
  var i = _e(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c = { type: ze.Stop, activity: l };
  return c;
}
u(kh, "resolveStop");
function Nc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(ze.After, "(").concat(r, ")").concat(t);
}
u(Nc, "after");
function eo(r, e) {
  var t = "".concat(ze.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(eo, "done");
function ci(r, e) {
  var t = "".concat(ze.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(ci, "doneInvoke");
function An(r, e) {
  var t = "".concat(ze.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
u(An, "error");
function Ba(r, e, t, i, l, c) {
  c === void 0 && (c = false);
  var f = we(c ? [[], l] : ka(l, function(w) {
    return w.type === dl;
  }), 2), y = f[0], v = f[1], p = y.length ? bl(t, i, y, e) : t, h = c ? [t] : void 0, b = Le(v.map(function(w) {
    var S;
    switch (w.type) {
      case ai:
        return _h(w);
      case On:
        var C = Rh(w, p, i, r.options.delays);
        return He || Ze(!xe(w.delay) || typeof C.delay == "number", "No delay reference for delay expression '".concat(w.delay, "' was found on machine '").concat(r.id, "'")), C;
      case Pa:
        return Dh(w, p, i);
      case bc: {
        var M = w, _ = (S = M.conds.find(function(ie) {
          var ne = Na(ie.cond, r.options.guards);
          return !ne || Ga(r, ne, p, i, e);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!_)
          return [];
        var $ = we(Ba(r, e, p, i, Ji(Ht(_), r.options.actions), c), 2), L = $[0], F = $[1];
        return p = F, h == null || h.push(p), L;
      }
      case yc: {
        var _ = w.get(p, i.data);
        if (!_)
          return [];
        var I = we(Ba(r, e, p, i, Ji(Ht(_), r.options.actions), c), 2), Q = I[0], z = I[1];
        return p = z, h == null || h.push(p), Q;
      }
      case oi:
        return kh(w, p, i);
      case dl: {
        p = bl(p, i, [w], e), h == null || h.push(p);
        break;
      }
      default:
        var j = ui(w, r.options.actions), Y = j.exec;
        if (Y && h) {
          var J = h.length - 1;
          j = V(V({}, j), { exec: function(ie) {
            for (var ne = [], pe = 1; pe < arguments.length; pe++)
              ne[pe - 1] = arguments[pe];
            Y.apply(void 0, De([h[J]], we(ne), false));
          } });
        }
        return j;
    }
  }).filter(function(w) {
    return !!w;
  }));
  return [b, p];
}
u(Ba, "resolveActions");
var Gc = [];
var zn = u(function(r, e) {
  Gc.push(r);
  var t = e(r);
  return Gc.pop(), t;
}, "provide");
function Lc(r) {
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
u(Lc, "createNullActor");
function jc(r, e, t, i) {
  var l, c = La(r.src), f = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c.type], y = r.data ? Mn(r.data, t, i) : void 0, v = f ? Bc(f, r.id, y) : Lc(r.id);
  return v.meta = r, v;
}
u(jc, "createInvocableActor");
function Bc(r, e, t) {
  var i = Lc(e);
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
u(Bc, "createDeferredActor");
function Nh(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
u(Nh, "isActor");
function Hc(r) {
  return Nh(r) && "id" in r;
}
u(Hc, "isSpawnedActor");
function qc(r) {
  var e;
  return V((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[Sr] = function() {
    return this;
  }, e), r);
}
u(qc, "toActorRef");
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
u(_n, "getChildren");
function xl(r) {
  var e = [r];
  return to(r) ? e : e.concat(Le(_n(r).map(xl)));
}
u(xl, "getAllStateNodes");
function Rn(r, e) {
  var t, i, l, c, f, y, v, p, h = new Set(r), b = wl(h), w = new Set(e);
  try {
    for (var S = ge(w), C = S.next(); !C.done; C = S.next())
      for (var M = C.value, _ = M.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (J) {
    t = { error: J };
  } finally {
    try {
      C && !C.done && (i = S.return) && i.call(S);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var $ = wl(w);
  try {
    for (var L = ge(w), F = L.next(); !F.done; F = L.next()) {
      var M = F.value;
      if (M.type === "compound" && (!$.get(M) || !$.get(M).length))
        b.get(M) ? b.get(M).forEach(function(ie) {
          return w.add(ie);
        }) : M.initialStateNodes.forEach(function(ie) {
          return w.add(ie);
        });
      else if (M.type === "parallel")
        try {
          for (var I = (f = void 0, ge(_n(M))), Q = I.next(); !Q.done; Q = I.next()) {
            var z = Q.value;
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
            Q && !Q.done && (y = I.return) && y.call(I);
          } finally {
            if (f)
              throw f.error;
          }
        }
    }
  } catch (J) {
    l = { error: J };
  } finally {
    try {
      F && !F.done && (c = L.return) && c.call(L);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var j = ge(w), Y = j.next(); !Y.done; Y = j.next())
      for (var M = Y.value, _ = M.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (J) {
    v = { error: J };
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
u(Rn, "getConfiguration");
function $c(r, e) {
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
    l[c.key] = $c(c, e);
  }), l;
}
u($c, "getValueFromAdj");
function wl(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = ge(r), c = l.next(); !c.done; c = l.next()) {
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
u(wl, "getAdjList");
function Fc(r, e) {
  var t = Rn([r], e);
  return $c(r, wl(t));
}
u(Fc, "getValue");
function ro(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
u(ro, "has");
function Wc(r) {
  return De([], we(new Set(Le(De([], we(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
u(Wc, "nextEvents");
function Dn(r, e) {
  return e.type === "compound" ? _n(e).some(function(t) {
    return t.type === "final" && ro(r, t);
  }) : e.type === "parallel" ? _n(e).every(function(t) {
    return Dn(r, t);
  }) : false;
}
u(Dn, "isInFinalState");
function Uc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
u(Uc, "getMeta");
function El(r) {
  return new Set(Le(r.map(function(e) {
    return e.tags;
  })));
}
u(El, "getTagsFromConfiguration");
function Sl(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (xe(r) || xe(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Sl(r[l], e[l]);
  });
}
u(Sl, "stateValuesEqual");
function Vc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
u(Vc, "isStateConfig");
function Yc(r, e) {
  var t = r.exec, i = V(V({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
u(Yc, "bindActionToState");
var vr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = vl, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || vl, this.meta = Uc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Wc(t.configuration);
    } });
  }
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
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), xe(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, De([], we(l.map(function(c) {
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
    He && Ze(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Gh = { deferEvents: false };
var Tl = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Gh), e);
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
var Cl = /* @__PURE__ */ new Map();
var Lh = 0;
var no = { bookId: function() {
  return "x:".concat(Lh++);
}, register: function(r, e) {
  return Cl.set(r, e), r;
}, get: function(r) {
  return Cl.get(r);
}, free: function(r) {
  Cl.delete(r);
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
  He || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
u(qa, "getGlobal");
function jh() {
  var r = qa();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
u(jh, "getDevTools");
function Xc(r) {
  if (!!qa()) {
    var e = jh();
    e && e.register(r);
  }
}
u(Xc, "registerService");
function Zc(r, e) {
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
  }, "flush"), y = qc({ id: e.id, send: function(p) {
    l.push(p), f();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(p, h, b) {
    var w = Qi(p, h, b);
    return i.add(w), w.next(t), { unsubscribe: function() {
      i.delete(w);
    } };
  } }), v = { parent: e.parent, self: y, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(v) : t, y;
}
u(Zc, "spawnBehavior");
var Bh = { sync: false, autoForward: false };
var yt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(yt || (yt = {}));
var Qc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = yt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(h, b) {
      if (jr(h))
        return i.batch(h), i.state;
      var w = st(Zi(h, b));
      if (i.status === yt.Stopped)
        return He || Ze(false, 'Event "'.concat(w.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
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
      var w = i.parent && (b === on.Parent || i.parent.id === b), S = w ? i.parent : xe(b) ? i.children.get(b) || no.get(b) : Pc(b) ? b : void 0;
      if (!S) {
        if (!w)
          throw new Error("Unable to send event to child '".concat(b, "' from service '").concat(i.id, "'."));
        He || Ze(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(h.type));
        return;
      }
      "machine" in S ? S.send(V(V({}, h), { name: h.name === hl ? "".concat(An(i.id)) : h.name, origin: i.sessionId })) : S.send(h.data);
    };
    var l = V(V({}, r.defaultOptions), t), c = l.clock, f = l.logger, y = l.parent, v = l.id, p = v !== void 0 ? v : e.id;
    this.id = p, this.logger = f, this.clock = c, this.parent = y, this.options = l, this.scheduler = new Tl({ deferEvents: this.options.deferEvents }), this.sessionId = no.bookId();
  }
  return u(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : zn(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return He || Ze(this.status !== yt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c = ge(e.actions), f = c.next(); !f.done; f = c.next()) {
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
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function(J) {
      b.state.children[J.id] = J;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var w = ge(this.eventListeners), S = w.next(); !S.done; S = w.next()) {
          var C = S.value;
          C(e.event);
        }
      } catch (J) {
        i = { error: J };
      } finally {
        try {
          S && !S.done && (l = w.return) && l.call(w);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var M = ge(this.listeners), _ = M.next(); !_.done; _ = M.next()) {
        var C = _.value;
        C(e, e.event);
      }
    } catch (J) {
      c = { error: J };
    } finally {
      try {
        _ && !_.done && (f = M.return) && f.call(M);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var $ = ge(this.contextListeners), L = $.next(); !L.done; L = $.next()) {
        var F = L.value;
        F(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (J) {
      y = { error: J };
    } finally {
      try {
        L && !L.done && (v = $.return) && v.call($);
      } finally {
        if (y)
          throw y.error;
      }
    }
    var I = Dn(e.configuration || [], this.machine);
    if (this.state.configuration && I) {
      var Q = e.configuration.find(function(J) {
        return J.type === "final" && J.parent === b.machine;
      }), z = Q && Q.doneData ? Mn(Q.doneData, e.context, t) : void 0;
      try {
        for (var j = ge(this.doneListeners), Y = j.next(); !Y.done; Y = j.next()) {
          var C = Y.value;
          C(ci(this.id, z));
        }
      } catch (J) {
        p = { error: J };
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
    this.machine._init(), no.register(this.sessionId, this), this.initialized = true, this.status = yt.Running;
    var i = e === void 0 ? this.initialState : zn(this, function() {
      return Vc(e) ? t.machine.resolveState(e) : t.machine.resolveState(vr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Pn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c, f, y, v, p, h, b = this;
    try {
      for (var w = ge(this.listeners), S = w.next(); !S.done; S = w.next()) {
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
      for (var M = ge(this.stopListeners), _ = M.next(); !_.done; _ = M.next()) {
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
      for (var $ = ge(this.contextListeners), L = $.next(); !L.done; L = $.next()) {
        var C = L.value;
        this.contextListeners.delete(C);
      }
    } catch (Y) {
      c = { error: Y };
    } finally {
      try {
        L && !L.done && (f = $.return) && f.call($);
      } finally {
        if (c)
          throw c.error;
      }
    }
    try {
      for (var F = ge(this.doneListeners), I = F.next(); !I.done; I = F.next()) {
        var C = I.value;
        this.doneListeners.delete(C);
      }
    } catch (Y) {
      y = { error: Y };
    } finally {
      try {
        I && !I.done && (v = F.return) && v.call(F);
      } finally {
        if (y)
          throw y.error;
      }
    }
    if (!this.initialized)
      return this;
    De([], we(this.state.configuration), false).sort(function(Y, J) {
      return J.order - Y.order;
    }).forEach(function(Y) {
      var J, ie;
      try {
        for (var ne = ge(Y.definition.exit), pe = ne.next(); !pe.done; pe = ne.next()) {
          var W = pe.value;
          b.exec(W, b.state);
        }
      } catch (ce) {
        J = { error: ce };
      } finally {
        try {
          pe && !pe.done && (ie = ne.return) && ie.call(ne);
        } finally {
          if (J)
            throw J.error;
        }
      }
    }), this.children.forEach(function(Y) {
      _e(Y.stop) && Y.stop();
    }), this.children.clear();
    try {
      for (var Q = ge(Object.keys(this.delayedEventsMap)), z = Q.next(); !z.done; z = Q.next()) {
        var j = z.value;
        this.clock.clearTimeout(this.delayedEventsMap[j]);
      }
    } catch (Y) {
      p = { error: Y };
    } finally {
      try {
        z && !z.done && (h = Q.return) && h.call(Q);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new Tl({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = yt.Stopped, this._initialState = void 0, no.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === yt.NotStarted && this.options.deferEvents)
      He || Ze(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== yt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c = t.state, f = false, y = [], v = u(function(w) {
        var S = st(w);
        t.forward(S), c = zn(t, function() {
          return t.machine.transition(c, S);
        }), y.push.apply(y, De([], we(c.actions.map(function(C) {
          return Yc(C, c);
        })), false)), f = f || !!c.changed;
      }, "_loop_1");
      try {
        for (var p = ge(e), h = p.next(); !h.done; h = p.next()) {
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
    if (i.name.indexOf(fl) === 0 && !this.state.nextEvents.some(function(c) {
      return c.indexOf(fl) === 0;
    }))
      throw i.data.data;
    var l = zn(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = ge(this.forwardTo), c = l.next(); !c.done; c = l.next()) {
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
    var l = t.context, c = t._event, f = e.exec || ja(e.type, i), y = _e(f) ? f : f ? f.exec : e.exec;
    if (y)
      try {
        return y(l, c.data, { action: e, state: this.state, _event: c });
      } catch (I) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: I }), I;
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
      case Ia:
        this.cancel(e.sendId);
        break;
      case Fi: {
        if (this.status !== yt.Running)
          return;
        var p = e.activity;
        if (!this.state.activities[p.id || p.type])
          break;
        if (p.type === ze.Invoke) {
          var h = La(p.src), b = this.machine.options.services ? this.machine.options.services[h.type] : void 0, w = p.id, S = p.data;
          He || Ze(!("forward" in p), "`forward` property is deprecated (found in invocation of '".concat(p.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var C = "autoForward" in p ? p.autoForward : !!p.forward;
          if (!b) {
            He || Ze(false, "No service found for invocation '".concat(p.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var M = S ? Mn(S, l, c) : void 0;
          if (typeof b == "string")
            return;
          var _ = _e(b) ? b(l, c.data, { data: M, src: h, meta: p.meta }) : b;
          if (!_)
            return;
          var $ = void 0;
          Tr(_) && (_ = M ? _.withContext(M) : _, $ = { autoForward: C }), this.spawn(_, w, $);
        } else
          this.spawnActivity(p);
        break;
      }
      case oi: {
        this.stopChild(e.activity.id);
        break;
      }
      case Pa:
        var L = e.label, F = e.value;
        L ? this.logger(L, F) : this.logger(F);
        break;
      default:
        He || Ze(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), _e(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (gl(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (_e(e))
      return this.spawnCallback(e, t);
    if (Hc(e))
      return this.spawnActor(e, t);
    if (Ic(e))
      return this.spawnObservable(e, t);
    if (Tr(e))
      return this.spawnMachine(e, V(V({}, i), { id: t }));
    if (Cc(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, V(V({}, this.options), { parent: this, id: t.id || e.id })), c = V(V({}, Bh), t);
    c.sync && l.onTransition(function(y) {
      i.send(Ui, { state: y, id: l.id });
    });
    var f = l;
    return this.children.set(l.id, f), c.autoForward && this.forwardTo.add(l.id), l.onDone(function(y) {
      i.removeChild(l.id), i.send(st(y, { origin: l.id }));
    }).start(), f;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = Zc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c = false, f;
    e.then(function(v) {
      c || (f = v, l.removeChild(t), l.send(st(ci(t, v), { origin: t })));
    }, function(v) {
      if (!c) {
        l.removeChild(t);
        var p = An(t, v);
        try {
          l.send(st(p, { origin: t }));
        } catch (h) {
          zc(v, h, t), l.devTools && l.devTools.send(p, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var y = (i = { id: t, send: function() {
    }, subscribe: function(v, p, h) {
      var b = Qi(v, p, h), w = false;
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
      this.send(An(t, w));
    }
    if (gl(h))
      return this.spawnPromise(h, t);
    var b = (i = { id: t, send: function(w) {
      return f.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = Qi(w);
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
      l.removeChild(t), l.send(st(An(t, v), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(st(ci(t), { origin: t }));
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
      He || Ze(false, "No implementation found for activity '".concat(e.type, "'"));
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
      Xc(this);
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
  var t = new Qc(r, e);
  return t;
}
u(et, "interpret");
function Hh(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
u(Hh, "toInvokeSource");
function io(r) {
  return V(V({ type: Wi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ii(r, ["onDone", "onError"]);
    return V(V({}, e), { type: Wi, src: Hh(r.src) });
  } });
}
u(io, "toInvokeDefinition");
var fi = "";
var Ol = "#";
var oo = "*";
var pi = {};
var di = u(function(r) {
  return r[0] === Ol;
}, "isStateId");
var qh = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var $h = u(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c) {
    return !("cond" in c) && !("in" in c) && (xe(c.target) || Tr(c.target));
  }), l = e === fi ? "the transient event" : "event '".concat(e, "'");
  Ze(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Kc = function() {
  function r(e, t, i, l) {
    var c = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var f;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(qh(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Aa), this.id = this.config.id || De([this.machine.key], we(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (f = this.config.schema) !== null && f !== void 0 ? f : {}, this.description = this.config.description, He || Ze(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? li(this.config.states, function(p, h) {
      var b, w = new r(p, {}, void 0, { parent: c, key: h });
      return Object.assign(c.idMap, V((b = {}, b[w.id] = w, b), w.idMap)), w;
    }) : pi;
    var y = 0;
    function v(p) {
      var h, b;
      p.order = y++;
      try {
        for (var w = ge(_n(p)), S = w.next(); !S.done; S = w.next()) {
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
    u(v, "dfs"), v(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(p) {
      var h = p.event;
      return h === fi;
    }) : fi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Ht(this.config.entry || this.config.onEntry).map(function(p) {
      return ui(p);
    }), this.onExit = Ht(this.config.exit || this.config.onExit).map(function(p) {
      return ui(p);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Ht(this.config.invoke).map(function(p, h) {
      var b, w;
      if (Tr(p)) {
        var S = Ki(c.id, h);
        return c.machine.options.services = V((b = {}, b[S] = p, b), c.machine.options.services), io({ src: S, id: S });
      } else if (xe(p.src)) {
        var S = p.id || Ki(c.id, h);
        return io(V(V({}, p), { id: S, src: p.src }));
      } else if (Tr(p.src) || _e(p.src)) {
        var S = p.id || Ki(c.id, h);
        return c.machine.options.services = V((w = {}, w[S] = p.src, w), c.machine.options.services), io(V(V({ id: S }, p), { src: S }));
      } else {
        var C = p.src;
        return io(V(V({ id: Ki(c.id, h) }, p), { src: C }));
      }
    }), this.activities = Ht(this.config.activities).concat(this.invoke).map(function(p) {
      return Ha(p);
    }), this.transition = this.transition.bind(this), this.tags = Ht(this.config.tags);
  }
  return u(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || xl(this).forEach(function(e) {
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
      var y = _e(c) ? "".concat(e.id, ":delay[").concat(f, "]") : c, v = Nc(y, e.id);
      return e.onEntry.push(yl(v, { delay: c })), e.onExit.push(Rc(v)), v;
    }, "mutateEntryExit"), l = jr(t) ? t.map(function(c, f) {
      var y = i(c.delay, f);
      return V(V({}, c), { event: y });
    }) : Le(Object.keys(t).map(function(c, f) {
      var y = t[c], v = xe(y) ? { target: y } : y, p = isNaN(+c) ? c : +c, h = i(p, f);
      return Ht(v).map(function(b) {
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
    var l = e instanceof vr ? e.value : si(e, this.delimiter);
    if (xe(l)) {
      var c = this.getStateNode(l).initial;
      return c !== void 0 ? this.getStateNodes((t = {}, t[l] = c, t)) : [this, this.states[l]];
    }
    var f = Object.keys(l), y = [this];
    return y.push.apply(y, De([], we(Le(f.map(function(v) {
      return i.getStateNode(v).getStateNodes(l[v]);
    }))), false)), y;
  }, r.prototype.handles = function(e) {
    var t = Ra(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof vr ? e : vr.create(e), i = Array.from(Rn([], this.getStateNodes(t.value)));
    return new vr(V(V({}, t), { value: this.resolve(t.value), configuration: i, done: Dn(i, this), tags: El(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c = l.next(t, i);
    return !c || !c.transitions.length ? this.next(t, i) : c;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c = this.getStateNode(l[0]), f = c._transition(e[l[0]], t, i);
    return !f || !f.transitions.length ? this.next(t, i) : f;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c, f = {};
    try {
      for (var y = ge(Object.keys(e)), v = y.next(); !v.done; v = y.next()) {
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
    })), $ = Le(Object.keys(f).map(function(L) {
      return f[L].configuration;
    }));
    return { transitions: C, entrySet: _, exitSet: Le(S.map(function(L) {
      return L.exitSet;
    })), configuration: $, source: t, actions: Le(Object.keys(f).map(function(L) {
      return f[L].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return xe(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, st(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c = this, f = t.name, y = [], v = [], p;
    try {
      for (var h = ge(this.getCandidates(f)), b = h.next(); !b.done; b = h.next()) {
        var w = b.value, S = w.cond, C = w.in, M = e.context, _ = C ? xe(C) && di(C) ? e.matches(si(this.getStateNodeById(C).path, this.delimiter)) : Yi(si(C, this.delimiter), xc(this.path.slice(0, -2))(e.value)) : true, $ = false;
        try {
          $ = !S || Ga(this.machine, S, M, t, e);
        } catch (Q) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(f, "' in state node '").concat(this.id, `':
`).concat(Q.message));
        }
        if ($ && _) {
          w.target !== void 0 && (v = w.target), y.push.apply(y, De([], we(w.actions), false)), p = w;
          break;
        }
      }
    } catch (Q) {
      i = { error: Q };
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
      var L = Le(v.map(function(Q) {
        return c.getRelativeStateNodes(Q, e.historyValue);
      })), F = !!p.internal, I = F ? [] : Le(L.map(function(Q) {
        return c.nodesFromChild(Q);
      }));
      return { transitions: [p], entrySet: I, exitSet: F ? [] : [this], configuration: L, source: e, actions: y };
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
    var c, f, y, v, p = Rn([], l ? this.getStateNodes(l.value) : [this]), h = e.configuration.length ? Rn(p, e.configuration) : p;
    try {
      for (var b = ge(h), w = b.next(); !w.done; w = b.next()) {
        var S = w.value;
        ro(p, S) || e.entrySet.push(S);
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
      for (var C = ge(p), M = C.next(); !M.done; M = C.next()) {
        var S = M.value;
        (!ro(h, S) || ro(e.exitSet, S.parent)) && e.exitSet.push(S);
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
      var J = j.parent;
      if (!J.parent)
        return Y;
      Y.push(eo(j.id, j.doneData), eo(J.id, j.doneData ? Mn(j.doneData, t, i) : void 0));
      var ie = J.parent;
      return ie.type === "parallel" && _n(ie).every(function(ne) {
        return Dn(e.configuration, ne);
      }) && Y.push(eo(ie.id)), Y;
    }));
    e.exitSet.sort(function(j, Y) {
      return Y.order - j.order;
    }), e.entrySet.sort(function(j, Y) {
      return j.order - Y.order;
    });
    var $ = new Set(e.entrySet), L = new Set(e.exitSet), F = we([Le(Array.from($).map(function(j) {
      return De(De([], we(j.activities.map(function(Y) {
        return Dc(Y);
      })), false), we(j.onEntry), false);
    })).concat(_.map(_c)), Le(Array.from(L).map(function(j) {
      return De(De([], we(j.onExit), false), we(j.activities.map(function(Y) {
        return kc(Y);
      })), false);
    }))], 2), I = F[0], Q = F[1], z = Ji(Q.concat(e.actions).concat(I), this.machine.options.actions);
    return z;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = st(t), c;
    if (e instanceof vr)
      c = i === void 0 ? e : this.resolveState(vr.from(e, i));
    else {
      var f = xe(e) ? this.resolve(Vi(this.getResolvedPath(e))) : this.resolve(e), y = i != null ? i : this.machine.context;
      c = this.resolveState(vr.from(f, y));
    }
    if (!He && l.name === oo)
      throw new Error("An event cannot have the wildcard type ('".concat(oo, "')"));
    if (this.strict && !this.events.includes(l.name) && !Tc(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var v = this._transition(c.value, c, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c, actions: [] }, p = Rn([], this.getStateNodes(c.value)), h = v.configuration.length ? Rn(p, v.configuration) : p;
    return v.configuration = De([], we(h), false), this.resolveTransition(v, c, c.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, De([], we(c), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c, f, y = this;
    l === void 0 && (l = Pn);
    var v = e.configuration, p = !t || e.transitions.length > 0, h = p ? Fc(this.machine, v) : void 0, b = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, w = this.getActions(e, i, l, t), S = t ? V({}, t.activities) : {};
    try {
      for (var C = ge(w), M = C.next(); !M.done; M = C.next()) {
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
    var $ = we(Ba(this, t, i, l, w, this.machine.config.preserveActionOrder), 2), L = $[0], F = $[1], I = we(ka(L, function(he) {
      return he.type === ai || he.type === On && he.to === on.Internal;
    }), 2), Q = I[0], z = I[1], j = L.filter(function(he) {
      var Je;
      return he.type === Fi && ((Je = he.activity) === null || Je === void 0 ? void 0 : Je.type) === Wi;
    }), Y = j.reduce(function(he, Je) {
      return he[Je.activity.id] = jc(Je.activity, y.machine, F, l), he;
    }, t ? V({}, t.children) : {}), J = p ? e.configuration : t ? t.configuration : [], ie = Dn(J, this), ne = new vr({ value: h || t.value, context: F, _event: l, _sessionid: t ? t._sessionid : null, historyValue: h ? b ? Mc(b, h) : void 0 : t ? t.historyValue : void 0, history: !h || e.source ? t : void 0, actions: h ? z : [], activities: h ? S : t ? t.activities : {}, events: [], configuration: J, transitions: e.transitions, children: Y, done: ie, tags: El(J), machine: this }), pe = i !== F;
    ne.changed = l.name === Ui || pe;
    var W = ne.history;
    W && delete W.history;
    var ce = !ie && (this._transient || v.some(function(he) {
      return he._transient;
    }));
    if (!p && (!ce || l.name === fi))
      return ne;
    var ke = ne;
    if (!ie)
      for (ce && (ke = this.resolveRaisedTransition(ke, { type: mc }, l)); Q.length; ) {
        var Ye = Q.shift();
        ke = this.resolveRaisedTransition(ke, Ye._event, l);
      }
    var je = ke.changed || (W ? !!ke.actions.length || pe || typeof W.value != typeof ke.value || !Sl(ke.value, W.value) : void 0);
    return ke.changed = je, ke.history = W, ke;
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
    var t = di(e) ? e.slice(Ol.length) : e;
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
    for (var t = Da(e, this.delimiter).slice(), i = this; t.length; ) {
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
        if (xe(e)) {
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
      var t = this.machine.idMap[e.slice(Ol.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return Da(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = ml(this.states, function(i) {
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
      xe(t.target) ? e = di(t.target) ? Vi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (to(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return He || Ze(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Xi(this.initialStateValue);
    return Le(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = we(e), i = t[0], l = t.slice(1);
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
      return { current: e || this.initialStateValue, states: ml(this.states, function(t, i) {
        if (!e)
          return t.historyValue();
        var l = xe(e) ? void 0 : e[i];
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
      return l ? Le(Xi(l).map(function(f) {
        return i.getFromRelativePath(f);
      })) : i.initialStateNodes;
    }
    var c = Ec(i.path, "states")(e).current;
    return xe(c) ? [i.getStateNode(c)] : Le(Xi(c).map(function(f) {
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
        for (var y = ge(Object.keys(c)), v = y.next(); !v.done; v = y.next()) {
          var p = v.value, h = c[p];
          if (h.states)
            try {
              for (var b = (i = void 0, ge(h.events)), w = b.next(); !w.done; w = b.next()) {
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
        if (!xe(i))
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
    var t = this, i = Ac(e.target), l = "internal" in e ? e.internal : i ? i.some(function(v) {
      return xe(v) && v[0] === t.delimiter;
    }) : true, c = this.machine.options.guards, f = this.resolveTarget(i), y = V(V({}, e), { actions: Ji(Ht(e.actions)), cond: Na(e.cond, c), target: f, source: this, internal: l, eventType: e.event, toJSON: function() {
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
      var c = this.config.on, f = oo, y = c[f], v = y === void 0 ? [] : y, p = ii(c, [typeof f == "symbol" ? f : f + ""]);
      l = Le(Object.keys(p).map(function(L) {
        !He && L === fi && Ze(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var F = In(L, p[L]);
        return He || $h(i, L, F), F;
      }).concat(In(oo, v)));
    }
    var h = this.config.always ? In("", this.config.always) : [], b = this.config.onDone ? In(String(eo(this.id)), this.config.onDone) : [];
    He || Ze(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = Le(this.invoke.map(function(L) {
      var F = [];
      return L.onDone && F.push.apply(F, De([], we(In(String(ci(L.id)), L.onDone)), false)), L.onError && F.push.apply(F, De([], we(In(String(An(L.id)), L.onError)), false)), F;
    })), S = this.after, C = Le(De(De(De(De([], we(b), false), we(w), false), we(l), false), we(h), false).map(function(L) {
      return Ht(L).map(function(F) {
        return i.formatTransition(F);
      });
    }));
    try {
      for (var M = ge(S), _ = M.next(); !_.done; _ = M.next()) {
        var $ = _.value;
        C.push($);
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
  return new Kc(r, e);
}
u(lt, "createMachine");
var so = Tn(ao(), 1);
var Fa = u((r) => r != null && typeof r.enableDrag == "function", "isDraggable");
var $a = u((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Il = u((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Te(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.draggableGrabbable = false;
      this.draggableGrabbed = false;
      this.draggableDragging = false;
      this.draggableSnapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = lt({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { entry: ["setGrabbableAttribute"], exit: ["unsetGrabbableAttribute"], on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        ue("draggable:init", {}, this);
      }, setInteract: (i, l) => {
        B.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let c = (0, so.default)(this);
        c.styleCursor(false), c.pointerEvents({ ignoreFrom: ".resize-handle" }), c.on("down", this.grab.bind(this)), c.on("up", this.release.bind(this)), c.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let f = this.dropzone;
        $a(f) ? this.snappedDropzone = f : this.snappedDropzone = null;
      }, setGrabbableAttribute: () => {
        this.draggableGrabbable = true;
      }, unsetGrabbableAttribute: () => {
        this.draggableGrabbable = false;
      }, grab: (i, l) => {
        B.need(l.type === "GRAB", "event type must be GRAB"), l.type === "GRAB" && (this.draggableGrabbed = true, ue("draggable:grab", {}, this), Il(this.dropzone) && (this.draggableSnapped = false, this.moveByOffset(l.x, l.y), this.classList.remove("qpu-operation-xl")));
      }, release: (i, l) => {
        B.need(l.type === "RELEASE", "event type must be RELEASE"), this.draggableGrabbed = false, ue("draggable:release", {}, this);
      }, startDragging: (i, l) => {
        B.need(l.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.draggableDragging = true;
      }, endDragging: (i, l) => {
        B.need(l.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.draggableGrabbed = false, this.draggableDragging = false, ue("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.draggableSnapped = true, this.snappedDropzone = this.dropzone, ue("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.draggableSnapped = false, this.snappedDropzone && ue("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        !this.draggableSnapped || (this.moveTo(0, 0), ue("draggable:drop", {}, this));
      }, delete: () => {
        (0, so.default)(this).unset(), ue("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => $a(this.dropzone), isOnPaletteDropzone: () => Il(this.dropzone), isDroppedOnCircuitDropzone: () => this.draggableSnapped && $a(this.dropzone), isTrashed: () => !this.draggableSnapped } });
      this.draggableService = et(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${Xe(i.value)}`);
      });
    }
    get isIdle() {
      return this.draggableService.state.value === "idle";
    }
    get isGrabbable() {
      return this.draggableGrabbable;
    }
    get isGrabbed() {
      return this.draggableGrabbed;
    }
    get isDragging() {
      return this.draggableDragging;
    }
    get isSnapped() {
      return this.draggableSnapped;
    }
    enableDrag() {
      this.draggableService.send({ type: "SET_INTERACT" });
    }
    disableDrag() {
      this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    snap() {
      this.draggableSnapped = true;
    }
    initDraggable() {
      this.draggableService.state === void 0 && this.draggableService.start();
    }
    get dropzone() {
      let i = this.parentElement;
      return B.notNull(i), !Il(i) && !$a(i) ? null : i;
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
        this.draggableSnapped && this.draggableService.send({ type: "UNSNAP" });
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
  return u(e, "DraggableMixinClass"), A([D], e.prototype, "operationX", 2), A([D], e.prototype, "operationY", 2), A([D], e.prototype, "draggableGrabbable", 2), A([D], e.prototype, "draggableGrabbed", 2), A([D], e.prototype, "draggableDragging", 2), A([D], e.prototype, "draggableSnapped", 2), A([D], e.prototype, "bit", 2), A([D], e.prototype, "debugDraggable", 2), e;
}
u(Te, "DraggableMixin");
var kn = u((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function ep(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  return u(e, "FlaggableMixinClass"), A([D], e.prototype, "flag", 2), e;
}
u(ep, "FlaggableMixin");
var Ve = "top";
var ut = "bottom";
var tt = "right";
var Qe = "left";
var Wa = "auto";
var an = [Ve, ut, tt, Qe];
var Br = "start";
var Nn = "end";
var tp = "clippingParents";
var Ua = "viewport";
var hi = "popper";
var rp = "reference";
var Pl = an.reduce(function(r, e) {
  return r.concat([e + "-" + Br, e + "-" + Nn]);
}, []);
var Va = [].concat(an, [Wa]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Br, e + "-" + Nn]);
}, []);
var Fh = "beforeRead";
var Wh = "read";
var Uh = "afterRead";
var Vh = "beforeMain";
var Yh = "main";
var Xh = "afterMain";
var Zh = "beforeWrite";
var Qh = "write";
var Kh = "afterWrite";
var np = [Fh, Wh, Uh, Vh, Yh, Xh, Zh, Qh, Kh];
function ht(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
u(ht, "getNodeName");
function Ke(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
u(Ke, "getWindow");
function Cr(r) {
  var e = Ke(r).Element;
  return r instanceof e || r instanceof Element;
}
u(Cr, "isElement");
function ct(r) {
  var e = Ke(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
u(ct, "isHTMLElement");
function Ya(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Ke(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
u(Ya, "isShadowRoot");
function Jh(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c = e.elements[t];
    !ct(c) || !ht(c) || (Object.assign(c.style, i), Object.keys(l).forEach(function(f) {
      var y = l[f];
      y === false ? c.removeAttribute(f) : c.setAttribute(f, y === true ? "" : y);
    }));
  });
}
u(Jh, "applyStyles");
function ev(r) {
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
u(ev, "effect");
var lo = { name: "applyStyles", enabled: true, phase: "write", fn: Jh, effect: ev, requires: ["computeStyles"] };
function vt(r) {
  return r.split("-")[0];
}
u(vt, "getBasePlacement");
var mr = Math.max;
var Gn = Math.min;
var Hr = Math.round;
function Qt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (ct(r) && e) {
    var c = r.offsetHeight, f = r.offsetWidth;
    f > 0 && (i = Hr(t.width) / f || 1), c > 0 && (l = Hr(t.height) / c || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
u(Qt, "getBoundingClientRect");
function Ln(r) {
  var e = Qt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
u(Ln, "getLayoutRect");
function uo(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Ya(t)) {
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
function _t(r) {
  return Ke(r).getComputedStyle(r);
}
u(_t, "getComputedStyle");
function Al(r) {
  return ["table", "td", "th"].indexOf(ht(r)) >= 0;
}
u(Al, "isTableElement");
function wt(r) {
  return ((Cr(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
u(wt, "getDocumentElement");
function qr(r) {
  return ht(r) === "html" ? r : r.assignedSlot || r.parentNode || (Ya(r) ? r.host : null) || wt(r);
}
u(qr, "getParentNode");
function ip(r) {
  return !ct(r) || _t(r).position === "fixed" ? null : r.offsetParent;
}
u(ip, "getTrueOffsetParent");
function tv(r) {
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
u(tv, "getContainingBlock");
function gr(r) {
  for (var e = Ke(r), t = ip(r); t && Al(t) && _t(t).position === "static"; )
    t = ip(t);
  return t && (ht(t) === "html" || ht(t) === "body" && _t(t).position === "static") ? e : t || tv(r) || e;
}
u(gr, "getOffsetParent");
function jn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
u(jn, "getMainAxisFromPlacement");
function Bn(r, e, t) {
  return mr(r, Gn(e, t));
}
u(Bn, "within");
function op(r, e, t) {
  var i = Bn(r, e, t);
  return i > t ? t : i;
}
u(op, "withinMaxClamp");
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
var rv = u(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, po(typeof e != "number" ? e : fo(e, an));
}, "toPaddingObject");
function nv(r) {
  var e, t = r.state, i = r.name, l = r.options, c = t.elements.arrow, f = t.modifiersData.popperOffsets, y = vt(t.placement), v = jn(y), p = [Qe, tt].indexOf(y) >= 0, h = p ? "height" : "width";
  if (!(!c || !f)) {
    var b = rv(l.padding, t), w = Ln(c), S = v === "y" ? Ve : Qe, C = v === "y" ? ut : tt, M = t.rects.reference[h] + t.rects.reference[v] - f[v] - t.rects.popper[h], _ = f[v] - t.rects.reference[v], $ = gr(c), L = $ ? v === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, F = M / 2 - _ / 2, I = b[S], Q = L - w[h] - b[C], z = L / 2 - w[h] / 2 + F, j = Bn(I, z, Q), Y = v;
    t.modifiersData[i] = (e = {}, e[Y] = j, e.centerOffset = j - z, e);
  }
}
u(nv, "arrow");
function iv(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !uo(e.elements.popper, l) || (e.elements.arrow = l));
}
u(iv, "effect");
var ap = { name: "arrow", enabled: true, phase: "main", fn: nv, effect: iv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Kt(r) {
  return r.split("-")[1];
}
u(Kt, "getVariation");
var ov = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function av(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Hr(e * l) / l || 0, y: Hr(t * l) / l || 0 };
}
u(av, "roundOffsetsByDPR");
function sp(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c = r.variation, f = r.offsets, y = r.position, v = r.gpuAcceleration, p = r.adaptive, h = r.roundOffsets, b = r.isFixed, w = f.x, S = w === void 0 ? 0 : w, C = f.y, M = C === void 0 ? 0 : C, _ = typeof h == "function" ? h({ x: S, y: M }) : { x: S, y: M };
  S = _.x, M = _.y;
  var $ = f.hasOwnProperty("x"), L = f.hasOwnProperty("y"), F = Qe, I = Ve, Q = window;
  if (p) {
    var z = gr(t), j = "clientHeight", Y = "clientWidth";
    if (z === Ke(t) && (z = wt(t), _t(z).position !== "static" && y === "absolute" && (j = "scrollHeight", Y = "scrollWidth")), z = z, l === Ve || (l === Qe || l === tt) && c === Nn) {
      I = ut;
      var J = b && Q.visualViewport ? Q.visualViewport.height : z[j];
      M -= J - i.height, M *= v ? 1 : -1;
    }
    if (l === Qe || (l === Ve || l === ut) && c === Nn) {
      F = tt;
      var ie = b && Q.visualViewport ? Q.visualViewport.width : z[Y];
      S -= ie - i.width, S *= v ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: y }, p && ov), pe = h === true ? av({ x: S, y: M }) : { x: S, y: M };
  if (S = pe.x, M = pe.y, v) {
    var W;
    return Object.assign({}, ne, (W = {}, W[I] = L ? "0" : "", W[F] = $ ? "0" : "", W.transform = (Q.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + M + "px)" : "translate3d(" + S + "px, " + M + "px, 0)", W));
  }
  return Object.assign({}, ne, (e = {}, e[I] = L ? M + "px" : "", e[F] = $ ? S + "px" : "", e.transform = "", e));
}
u(sp, "mapToStyles");
function sv(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c = t.adaptive, f = c === void 0 ? true : c, y = t.roundOffsets, v = y === void 0 ? true : y;
  if (false)
    var p;
  var h = { placement: vt(e.placement), variation: Kt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, sp(Object.assign({}, h, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: f, roundOffsets: v })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, sp(Object.assign({}, h, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: v })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
u(sv, "computeStyles");
var lp = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: sv, data: {} };
var Xa = { passive: true };
function lv(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c = l === void 0 ? true : l, f = i.resize, y = f === void 0 ? true : f, v = Ke(e.elements.popper), p = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c && p.forEach(function(h) {
    h.addEventListener("scroll", t.update, Xa);
  }), y && v.addEventListener("resize", t.update, Xa), function() {
    c && p.forEach(function(h) {
      h.removeEventListener("scroll", t.update, Xa);
    }), y && v.removeEventListener("resize", t.update, Xa);
  };
}
u(lv, "effect");
var up = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: lv, data: {} };
var uv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function vi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return uv[e];
  });
}
u(vi, "getOppositePlacement");
var cv = { start: "end", end: "start" };
function Za(r) {
  return r.replace(/start|end/g, function(e) {
    return cv[e];
  });
}
u(Za, "getOppositeVariationPlacement");
function Hn(r) {
  var e = Ke(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
u(Hn, "getWindowScroll");
function qn(r) {
  return Qt(wt(r)).left + Hn(r).scrollLeft;
}
u(qn, "getWindowScrollBarX");
function zl(r) {
  var e = Ke(r), t = wt(r), i = e.visualViewport, l = t.clientWidth, c = t.clientHeight, f = 0, y = 0;
  return i && (l = i.width, c = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (f = i.offsetLeft, y = i.offsetTop)), { width: l, height: c, x: f + qn(r), y };
}
u(zl, "getViewportRect");
function _l(r) {
  var e, t = wt(r), i = Hn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c = mr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), f = mr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), y = -i.scrollLeft + qn(r), v = -i.scrollTop;
  return _t(l || t).direction === "rtl" && (y += mr(t.clientWidth, l ? l.clientWidth : 0) - c), { width: c, height: f, x: y, y: v };
}
u(_l, "getDocumentRect");
function $n(r) {
  var e = _t(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
u($n, "isScrollParent");
function Qa(r) {
  return ["html", "body", "#document"].indexOf(ht(r)) >= 0 ? r.ownerDocument.body : ct(r) && $n(r) ? r : Qa(qr(r));
}
u(Qa, "getScrollParent");
function sn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Qa(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c = Ke(i), f = l ? [c].concat(c.visualViewport || [], $n(i) ? i : []) : i, y = e.concat(f);
  return l ? y : y.concat(sn(qr(f)));
}
u(sn, "listScrollParents");
function mi(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
u(mi, "rectToClientRect");
function pv(r) {
  var e = Qt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
u(pv, "getInnerBoundingClientRect");
function cp(r, e) {
  return e === Ua ? mi(zl(r)) : Cr(e) ? pv(e) : mi(_l(wt(r)));
}
u(cp, "getClientRectFromMixedType");
function dv(r) {
  var e = sn(qr(r)), t = ["absolute", "fixed"].indexOf(_t(r).position) >= 0, i = t && ct(r) ? gr(r) : r;
  return Cr(i) ? e.filter(function(l) {
    return Cr(l) && uo(l, i) && ht(l) !== "body";
  }) : [];
}
u(dv, "getClippingParents");
function Rl(r, e, t) {
  var i = e === "clippingParents" ? dv(r) : [].concat(e), l = [].concat(i, [t]), c = l[0], f = l.reduce(function(y, v) {
    var p = cp(r, v);
    return y.top = mr(p.top, y.top), y.right = Gn(p.right, y.right), y.bottom = Gn(p.bottom, y.bottom), y.left = mr(p.left, y.left), y;
  }, cp(r, c));
  return f.width = f.right - f.left, f.height = f.bottom - f.top, f.x = f.left, f.y = f.top, f;
}
u(Rl, "getClippingRect");
function ho(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? vt(i) : null, c = i ? Kt(i) : null, f = e.x + e.width / 2 - t.width / 2, y = e.y + e.height / 2 - t.height / 2, v;
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
  var p = l ? jn(l) : null;
  if (p != null) {
    var h = p === "y" ? "height" : "width";
    switch (c) {
      case Br:
        v[p] = v[p] - (e[h] / 2 - t[h] / 2);
        break;
      case Nn:
        v[p] = v[p] + (e[h] / 2 - t[h] / 2);
        break;
      default:
    }
  }
  return v;
}
u(ho, "computeOffsets");
function br(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c = t.boundary, f = c === void 0 ? tp : c, y = t.rootBoundary, v = y === void 0 ? Ua : y, p = t.elementContext, h = p === void 0 ? hi : p, b = t.altBoundary, w = b === void 0 ? false : b, S = t.padding, C = S === void 0 ? 0 : S, M = po(typeof C != "number" ? C : fo(C, an)), _ = h === hi ? rp : hi, $ = r.rects.popper, L = r.elements[w ? _ : h], F = Rl(Cr(L) ? L : L.contextElement || wt(r.elements.popper), f, v), I = Qt(r.elements.reference), Q = ho({ reference: I, element: $, strategy: "absolute", placement: l }), z = mi(Object.assign({}, $, Q)), j = h === hi ? z : I, Y = { top: F.top - j.top + M.top, bottom: j.bottom - F.bottom + M.bottom, left: F.left - j.left + M.left, right: j.right - F.right + M.right }, J = r.modifiersData.offset;
  if (h === hi && J) {
    var ie = J[l];
    Object.keys(Y).forEach(function(ne) {
      var pe = [tt, ut].indexOf(ne) >= 0 ? 1 : -1, W = [Ve, ut].indexOf(ne) >= 0 ? "y" : "x";
      Y[ne] += ie[W] * pe;
    });
  }
  return Y;
}
u(br, "detectOverflow");
function Dl(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c = t.rootBoundary, f = t.padding, y = t.flipVariations, v = t.allowedAutoPlacements, p = v === void 0 ? Va : v, h = Kt(i), b = h ? y ? Pl : Pl.filter(function(C) {
    return Kt(C) === h;
  }) : an, w = b.filter(function(C) {
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
u(Dl, "computeAutoPlacement");
function fv(r) {
  if (vt(r) === Wa)
    return [];
  var e = vi(r);
  return [Za(r), e, Za(e)];
}
u(fv, "getExpandedFallbackPlacements");
function hv(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, y = f === void 0 ? true : f, v = t.fallbackPlacements, p = t.padding, h = t.boundary, b = t.rootBoundary, w = t.altBoundary, S = t.flipVariations, C = S === void 0 ? true : S, M = t.allowedAutoPlacements, _ = e.options.placement, $ = vt(_), L = $ === _, F = v || (L || !C ? [vi(_)] : fv(_)), I = [_].concat(F).reduce(function(It, Dt) {
      return It.concat(vt(Dt) === Wa ? Dl(e, { placement: Dt, boundary: h, rootBoundary: b, padding: p, flipVariations: C, allowedAutoPlacements: M }) : Dt);
    }, []), Q = e.rects.reference, z = e.rects.popper, j = /* @__PURE__ */ new Map(), Y = true, J = I[0], ie = 0; ie < I.length; ie++) {
      var ne = I[ie], pe = vt(ne), W = Kt(ne) === Br, ce = [Ve, ut].indexOf(pe) >= 0, ke = ce ? "width" : "height", Ye = br(e, { placement: ne, boundary: h, rootBoundary: b, altBoundary: w, padding: p }), je = ce ? W ? tt : Qe : W ? ut : Ve;
      Q[ke] > z[ke] && (je = vi(je));
      var he = vi(je), Je = [];
      if (c && Je.push(Ye[pe] <= 0), y && Je.push(Ye[je] <= 0, Ye[he] <= 0), Je.every(function(It) {
        return It;
      })) {
        J = ne, Y = false;
        break;
      }
      j.set(ne, Je);
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
          return J = Ut, "break";
      }, "_loop"), K = nt; K > 0; K--) {
        var dr = Wt(K);
        if (dr === "break")
          break;
      }
    e.placement !== J && (e.modifiersData[i]._skip = true, e.placement = J, e.reset = true);
  }
}
u(hv, "flip");
var pp = { name: "flip", enabled: true, phase: "main", fn: hv, requiresIfExists: ["offset"], data: { _skip: false } };
function dp(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
u(dp, "getSideOffsets");
function fp(r) {
  return [Ve, tt, ut, Qe].some(function(e) {
    return r[e] >= 0;
  });
}
u(fp, "isAnySideFullyClipped");
function vv(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c = e.modifiersData.preventOverflow, f = br(e, { elementContext: "reference" }), y = br(e, { altBoundary: true }), v = dp(f, i), p = dp(y, l, c), h = fp(v), b = fp(p);
  e.modifiersData[t] = { referenceClippingOffsets: v, popperEscapeOffsets: p, isReferenceHidden: h, hasPopperEscaped: b }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": b });
}
u(vv, "hide");
var hp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: vv };
function mv(r, e, t) {
  var i = vt(r), l = [Qe, Ve].indexOf(i) >= 0 ? -1 : 1, c = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, f = c[0], y = c[1];
  return f = f || 0, y = (y || 0) * l, [Qe, tt].indexOf(i) >= 0 ? { x: y, y: f } : { x: f, y };
}
u(mv, "distanceAndSkiddingToXY");
function gv(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c = l === void 0 ? [0, 0] : l, f = Va.reduce(function(h, b) {
    return h[b] = mv(b, e.rects, c), h;
  }, {}), y = f[e.placement], v = y.x, p = y.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += v, e.modifiersData.popperOffsets.y += p), e.modifiersData[i] = f;
}
u(gv, "offset");
var vp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: gv };
function bv(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = ho({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
u(bv, "popperOffsets");
var mp = { name: "popperOffsets", enabled: true, phase: "read", fn: bv, data: {} };
function kl(r) {
  return r === "x" ? "y" : "x";
}
u(kl, "getAltAxis");
function yv(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c = l === void 0 ? true : l, f = t.altAxis, y = f === void 0 ? false : f, v = t.boundary, p = t.rootBoundary, h = t.altBoundary, b = t.padding, w = t.tether, S = w === void 0 ? true : w, C = t.tetherOffset, M = C === void 0 ? 0 : C, _ = br(e, { boundary: v, rootBoundary: p, padding: b, altBoundary: h }), $ = vt(e.placement), L = Kt(e.placement), F = !L, I = jn($), Q = kl(I), z = e.modifiersData.popperOffsets, j = e.rects.reference, Y = e.rects.popper, J = typeof M == "function" ? M(Object.assign({}, e.rects, { placement: e.placement })) : M, ie = typeof J == "number" ? { mainAxis: J, altAxis: J } : Object.assign({ mainAxis: 0, altAxis: 0 }, J), ne = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, pe = { x: 0, y: 0 };
  if (!!z) {
    if (c) {
      var W, ce = I === "y" ? Ve : Qe, ke = I === "y" ? ut : tt, Ye = I === "y" ? "height" : "width", je = z[I], he = je + _[ce], Je = je - _[ke], nt = S ? -Y[Ye] / 2 : 0, Wt = L === Br ? j[Ye] : Y[Ye], K = L === Br ? -Y[Ye] : -j[Ye], dr = e.elements.arrow, It = S && dr ? Ln(dr) : { width: 0, height: 0 }, Dt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : co(), Ut = Dt[ce], fr = Dt[ke], Vt = Bn(0, j[Ye], It[Ye]), Lt = F ? j[Ye] / 2 - nt - Vt - Ut - ie.mainAxis : Wt - Vt - Ut - ie.mainAxis, wr = F ? -j[Ye] / 2 + nt + Vt + fr + ie.mainAxis : K + Vt + fr + ie.mainAxis, _r = e.elements.arrow && gr(e.elements.arrow), pn = _r ? I === "y" ? _r.clientTop || 0 : _r.clientLeft || 0 : 0, Me = (W = ne == null ? void 0 : ne[I]) != null ? W : 0, dn = je + Lt - Me - pn, fn = je + wr - Me, Pt = Bn(S ? Gn(he, dn) : he, je, S ? mr(Je, fn) : Je);
      z[I] = Pt, pe[I] = Pt - je;
    }
    if (y) {
      var Rr, Vn = I === "x" ? Ve : Qe, Yr = I === "x" ? ut : tt, hr = z[Q], St = Q === "y" ? "height" : "width", xr = hr + _[Vn], kt = hr - _[Yr], hn = [Ve, Qe].indexOf($) !== -1, Dr = (Rr = ne == null ? void 0 : ne[Q]) != null ? Rr : 0, vn = hn ? xr : hr - j[St] - Y[St] - Dr + ie.altAxis, Xr = hn ? hr + j[St] + Y[St] - Dr - ie.altAxis : kt, mn = S && hn ? op(vn, hr, Xr) : Bn(S ? vn : xr, hr, S ? Xr : kt);
      z[Q] = mn, pe[Q] = mn - hr;
    }
    e.modifiersData[i] = pe;
  }
}
u(yv, "preventOverflow");
var gp = { name: "preventOverflow", enabled: true, phase: "main", fn: yv, requiresIfExists: ["offset"] };
function Nl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
u(Nl, "getHTMLElementScroll");
function Gl(r) {
  return r === Ke(r) || !ct(r) ? Hn(r) : Nl(r);
}
u(Gl, "getNodeScroll");
function wv(r) {
  var e = r.getBoundingClientRect(), t = Hr(e.width) / r.offsetWidth || 1, i = Hr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
u(wv, "isElementScaled");
function Ll(r, e, t) {
  t === void 0 && (t = false);
  var i = ct(e), l = ct(e) && wv(e), c = wt(e), f = Qt(r, l), y = { scrollLeft: 0, scrollTop: 0 }, v = { x: 0, y: 0 };
  return (i || !i && !t) && ((ht(e) !== "body" || $n(c)) && (y = Gl(e)), ct(e) ? (v = Qt(e, true), v.x += e.clientLeft, v.y += e.clientTop) : c && (v.x = qn(c))), { x: f.left + y.scrollLeft - v.x, y: f.top + y.scrollTop - v.y, width: f.width, height: f.height };
}
u(Ll, "getCompositeRect");
function xv(r) {
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
  return u(l, "sort"), r.forEach(function(c) {
    t.has(c.name) || l(c);
  }), i;
}
u(xv, "order");
function jl(r) {
  var e = xv(r);
  return np.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
u(jl, "orderModifiers");
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
u(Bl, "debounce");
function Hl(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
u(Hl, "mergeByName");
var bp = { placement: "bottom", modifiers: [], strategy: "absolute" };
function yp() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
u(yp, "areValidElements");
function wp(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c = l === void 0 ? bp : l;
  return u(function(y, v, p) {
    p === void 0 && (p = c);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, bp, c), modifiersData: {}, elements: { reference: y, popper: v }, attributes: {}, styles: {} }, b = [], w = false, S = { state: h, setOptions: u(function($) {
      var L = typeof $ == "function" ? $(h.options) : $;
      M(), h.options = Object.assign({}, c, h.options, L), h.scrollParents = { reference: Cr(y) ? sn(y) : y.contextElement ? sn(y.contextElement) : [], popper: sn(v) };
      var F = jl(Hl([].concat(i, h.options.modifiers)));
      if (h.orderedModifiers = F.filter(function(ne) {
        return ne.enabled;
      }), false) {
        var I;
        if (getBasePlacement(h.options.placement) === auto)
          var Q;
        var z, j, Y, J, ie;
      }
      return C(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!w) {
        var $ = h.elements, L = $.reference, F = $.popper;
        if (!!yp(L, F)) {
          h.rects = { reference: Ll(L, gr(F), h.options.strategy === "fixed"), popper: Ln(F) }, h.reset = false, h.placement = h.options.placement, h.orderedModifiers.forEach(function(ne) {
            return h.modifiersData[ne.name] = Object.assign({}, ne.data);
          });
          for (var I = 0, Q = 0; Q < h.orderedModifiers.length; Q++) {
            if (h.reset === true) {
              h.reset = false, Q = -1;
              continue;
            }
            var z = h.orderedModifiers[Q], j = z.fn, Y = z.options, J = Y === void 0 ? {} : Y, ie = z.name;
            typeof j == "function" && (h = j({ state: h, options: J, name: ie, instance: S }) || h);
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
    if (!yp(y, v))
      return S;
    S.setOptions(p).then(function(_) {
      !w && p.onFirstUpdate && p.onFirstUpdate(_);
    });
    function C() {
      h.orderedModifiers.forEach(function(_) {
        var $ = _.name, L = _.options, F = L === void 0 ? {} : L, I = _.effect;
        if (typeof I == "function") {
          var Q = I({ state: h, name: $, instance: S, options: F }), z = u(function() {
          }, "noopFn");
          b.push(Q || z);
        }
      });
    }
    u(C, "runModifierEffects");
    function M() {
      b.forEach(function(_) {
        return _();
      }), b = [];
    }
    return u(M, "cleanupModifierEffects"), S;
  }, "createPopper");
}
u(wp, "popperGenerator");
var Ev = [up, mp, lp, lo, vp, pp, gp, ap, hp];
var ql = wp({ defaultModifiers: Ev });
var Sv = "tippy-box";
var Ap = "tippy-content";
var Tv = "tippy-backdrop";
var zp = "tippy-arrow";
var _p = "tippy-svg-arrow";
var Fn = { passive: true, capture: true };
var Rp = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function $l(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
u($l, "getValueAtIndexOrReturn");
function Xl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
u(Xl, "isType");
function Dp(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
u(Dp, "invokeWithArgsOrReturn");
function xp(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
u(xp, "debounce");
function Cv(r) {
  return r.split(/\s+/).filter(Boolean);
}
u(Cv, "splitBySpaces");
function gi(r) {
  return [].concat(r);
}
u(gi, "normalizeToArray");
function Ep(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
u(Ep, "pushIfUnique");
function Ov(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
u(Ov, "unique");
function Mv(r) {
  return r.split("-")[0];
}
u(Mv, "getBasePlacement");
function Ja(r) {
  return [].slice.call(r);
}
u(Ja, "arrayFrom");
function Sp(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
u(Sp, "removeUndefinedProps");
function vo() {
  return document.createElement("div");
}
u(vo, "div");
function es(r) {
  return ["Element", "Fragment"].some(function(e) {
    return Xl(r, e);
  });
}
u(es, "isElement");
function Iv(r) {
  return Xl(r, "NodeList");
}
u(Iv, "isNodeList");
function Pv(r) {
  return Xl(r, "MouseEvent");
}
u(Pv, "isMouseEvent");
function Av(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
u(Av, "isReferenceElement");
function zv(r) {
  return es(r) ? [r] : Iv(r) ? Ja(r) : Array.isArray(r) ? r : Ja(document.querySelectorAll(r));
}
u(zv, "getArrayOfElements");
function Fl(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
u(Fl, "setTransitionDuration");
function Tp(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
u(Tp, "setVisibilityState");
function _v(r) {
  var e, t = gi(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
u(_v, "getOwnerDocument");
function Rv(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c = l.popperRect, f = l.popperState, y = l.props, v = y.interactiveBorder, p = Mv(f.placement), h = f.modifiersData.offset;
    if (!h)
      return true;
    var b = p === "bottom" ? h.top.y : 0, w = p === "top" ? h.bottom.y : 0, S = p === "right" ? h.left.x : 0, C = p === "left" ? h.right.x : 0, M = c.top - i + b > v, _ = i - c.bottom - w > v, $ = c.left - t + S > v, L = t - c.right - C > v;
    return M || _ || $ || L;
  });
}
u(Rv, "isCursorOutsideInteractiveBorder");
function Wl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
u(Wl, "updateTransitionEndListener");
function Cp(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
u(Cp, "actualContains");
var Or = { isTouch: false };
var Op = 0;
function Dv() {
  Or.isTouch || (Or.isTouch = true, window.performance && document.addEventListener("mousemove", kp));
}
u(Dv, "onDocumentTouchStart");
function kp() {
  var r = performance.now();
  r - Op < 20 && (Or.isTouch = false, document.removeEventListener("mousemove", kp)), Op = r;
}
u(kp, "onDocumentMouseMove");
function kv() {
  var r = document.activeElement;
  if (Av(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
u(kv, "onWindowBlur");
function Nv() {
  document.addEventListener("touchstart", Dv, Fn), window.addEventListener("blur", kv);
}
u(Nv, "bindGlobalEventListeners");
var Gv = typeof window != "undefined" && typeof document != "undefined";
var Lv = Gv ? !!window.msCrypto : false;
var jv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Bv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var yr = Object.assign({ appendTo: Rp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, jv, Bv);
var Hv = Object.keys(yr);
var qv = u(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    yr[i] = e[i];
  });
}, "setDefaultProps");
function Np(r) {
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
u(Np, "getExtendedPassedProps");
function $v(r, e) {
  var t = e ? Object.keys(Np(Object.assign({}, yr, { plugins: e }))) : Hv, i = t.reduce(function(l, c) {
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
u($v, "getDataAttributeProps");
function Mp(r, e) {
  var t = Object.assign({}, e, { content: Dp(e.content, [r]) }, e.ignoreAttributes ? {} : $v(r, e.plugins));
  return t.aria = Object.assign({}, yr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
u(Mp, "evaluateProps");
var Fv = u(function() {
  return "innerHTML";
}, "innerHTML");
function Vl(r, e) {
  r[Fv()] = e;
}
u(Vl, "dangerouslySetInnerHTML");
function Ip(r) {
  var e = vo();
  return r === true ? e.className = zp : (e.className = _p, es(r) ? e.appendChild(r) : Vl(e, r)), e;
}
u(Ip, "createArrowElement");
function Pp(r, e) {
  es(e.content) ? (Vl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Vl(r, e.content) : r.textContent = e.content);
}
u(Pp, "setContent");
function Yl(r) {
  var e = r.firstElementChild, t = Ja(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(Ap);
  }), arrow: t.find(function(i) {
    return i.classList.contains(zp) || i.classList.contains(_p);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Tv);
  }) };
}
u(Yl, "getChildren");
function Gp(r) {
  var e = vo(), t = vo();
  t.className = Sv, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = vo();
  i.className = Ap, i.setAttribute("data-state", "hidden"), Pp(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c, f) {
    var y = Yl(e), v = y.box, p = y.content, h = y.arrow;
    f.theme ? v.setAttribute("data-theme", f.theme) : v.removeAttribute("data-theme"), typeof f.animation == "string" ? v.setAttribute("data-animation", f.animation) : v.removeAttribute("data-animation"), f.inertia ? v.setAttribute("data-inertia", "") : v.removeAttribute("data-inertia"), v.style.maxWidth = typeof f.maxWidth == "number" ? f.maxWidth + "px" : f.maxWidth, f.role ? v.setAttribute("role", f.role) : v.removeAttribute("role"), (c.content !== f.content || c.allowHTML !== f.allowHTML) && Pp(p, r.props), f.arrow ? h ? c.arrow !== f.arrow && (v.removeChild(h), v.appendChild(Ip(f.arrow))) : v.appendChild(Ip(f.arrow)) : h && v.removeChild(h);
  }
  return u(l, "onUpdate"), { popper: e, onUpdate: l };
}
u(Gp, "render");
Gp.$$tippy = true;
var Wv = 1;
var Ka = [];
var Ul = [];
function Uv(r, e) {
  var t = Mp(r, Object.assign({}, yr, Np(Sp(e)))), i, l, c, f = false, y = false, v = false, p = false, h, b, w, S = [], C = xp(dn, t.interactiveDebounce), M, _ = Wv++, $ = null, L = Ov(t.plugins), F = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, I = { id: _, reference: r, popper: vo(), popperInstance: $, props: t, state: F, plugins: L, clearDelayTimeouts: vn, setProps: Xr, setContent: mn, show: Ei, hide: Si, hideWithInteractivity: _o, enable: hn, disable: Dr, unmount: Ro, destroy: hs };
  if (!t.render)
    return I;
  var Q = t.render(I), z = Q.popper, j = Q.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + I.id, I.popper = z, r._tippy = I, z._tippy = I;
  var Y = L.map(function(N) {
    return N.fn(I);
  }), J = r.hasAttribute("aria-expanded");
  return _r(), nt(), je(), he("onCreate", [I]), t.showOnCreate && xr(), z.addEventListener("mouseenter", function() {
    I.props.interactive && I.state.isVisible && I.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    I.props.interactive && I.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", C);
  }), I;
  function ie() {
    var N = I.props.touch;
    return Array.isArray(N) ? N : [N, 0];
  }
  u(ie, "getNormalizedTouchSettings");
  function ne() {
    return ie()[0] === "hold";
  }
  u(ne, "getIsCustomTouchBehavior");
  function pe() {
    var N;
    return !!((N = I.props.render) != null && N.$$tippy);
  }
  u(pe, "getIsDefaultRenderFn");
  function W() {
    return M || r;
  }
  u(W, "getCurrentTarget");
  function ce() {
    var N = W().parentNode;
    return N ? _v(N) : document;
  }
  u(ce, "getDocument");
  function ke() {
    return Yl(z);
  }
  u(ke, "getDefaultTemplateChildren");
  function Ye(N) {
    return I.state.isMounted && !I.state.isVisible || Or.isTouch || h && h.type === "focus" ? 0 : $l(I.props.delay, N ? 0 : 1, yr.delay);
  }
  u(Ye, "getDelay");
  function je(N) {
    N === void 0 && (N = false), z.style.pointerEvents = I.props.interactive && !N ? "" : "none", z.style.zIndex = "" + I.props.zIndex;
  }
  u(je, "handleStyles");
  function he(N, te, ae) {
    if (ae === void 0 && (ae = true), Y.forEach(function(ve) {
      ve[N] && ve[N].apply(ve, te);
    }), ae) {
      var Pe;
      (Pe = I.props)[N].apply(Pe, te);
    }
  }
  u(he, "invokeHook");
  function Je() {
    var N = I.props.aria;
    if (!!N.content) {
      var te = "aria-" + N.content, ae = z.id, Pe = gi(I.props.triggerTarget || r);
      Pe.forEach(function(ve) {
        var mt = ve.getAttribute(te);
        if (I.state.isVisible)
          ve.setAttribute(te, mt ? mt + " " + ae : ae);
        else {
          var At = mt && mt.replace(ae, "").trim();
          At ? ve.setAttribute(te, At) : ve.removeAttribute(te);
        }
      });
    }
  }
  u(Je, "handleAriaContentAttribute");
  function nt() {
    if (!(J || !I.props.aria.expanded)) {
      var N = gi(I.props.triggerTarget || r);
      N.forEach(function(te) {
        I.props.interactive ? te.setAttribute("aria-expanded", I.state.isVisible && te === W() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  u(nt, "handleAriaExpandedAttribute");
  function Wt() {
    ce().removeEventListener("mousemove", C), Ka = Ka.filter(function(N) {
      return N !== C;
    });
  }
  u(Wt, "cleanupInteractiveMouseListeners");
  function K(N) {
    if (!(Or.isTouch && (v || N.type === "mousedown"))) {
      var te = N.composedPath && N.composedPath()[0] || N.target;
      if (!(I.props.interactive && Cp(z, te))) {
        if (gi(I.props.triggerTarget || r).some(function(ae) {
          return Cp(ae, te);
        })) {
          if (Or.isTouch || I.state.isVisible && I.props.trigger.indexOf("click") >= 0)
            return;
        } else
          he("onClickOutside", [I, N]);
        I.props.hideOnClick === true && (I.clearDelayTimeouts(), I.hide(), y = true, setTimeout(function() {
          y = false;
        }), I.state.isMounted || Ut());
      }
    }
  }
  u(K, "onDocumentPress");
  function dr() {
    v = true;
  }
  u(dr, "onTouchMove");
  function It() {
    v = false;
  }
  u(It, "onTouchStart");
  function Dt() {
    var N = ce();
    N.addEventListener("mousedown", K, true), N.addEventListener("touchend", K, Fn), N.addEventListener("touchstart", It, Fn), N.addEventListener("touchmove", dr, Fn);
  }
  u(Dt, "addDocumentPress");
  function Ut() {
    var N = ce();
    N.removeEventListener("mousedown", K, true), N.removeEventListener("touchend", K, Fn), N.removeEventListener("touchstart", It, Fn), N.removeEventListener("touchmove", dr, Fn);
  }
  u(Ut, "removeDocumentPress");
  function fr(N, te) {
    Lt(N, function() {
      !I.state.isVisible && z.parentNode && z.parentNode.contains(z) && te();
    });
  }
  u(fr, "onTransitionedOut");
  function Vt(N, te) {
    Lt(N, te);
  }
  u(Vt, "onTransitionedIn");
  function Lt(N, te) {
    var ae = ke().box;
    function Pe(ve) {
      ve.target === ae && (Wl(ae, "remove", Pe), te());
    }
    if (u(Pe, "listener"), N === 0)
      return te();
    Wl(ae, "remove", b), Wl(ae, "add", Pe), b = Pe;
  }
  u(Lt, "onTransitionEnd");
  function wr(N, te, ae) {
    ae === void 0 && (ae = false);
    var Pe = gi(I.props.triggerTarget || r);
    Pe.forEach(function(ve) {
      ve.addEventListener(N, te, ae), S.push({ node: ve, eventType: N, handler: te, options: ae });
    });
  }
  u(wr, "on");
  function _r() {
    ne() && (wr("touchstart", Me, { passive: true }), wr("touchend", fn, { passive: true })), Cv(I.props.trigger).forEach(function(N) {
      if (N !== "manual")
        switch (wr(N, Me), N) {
          case "mouseenter":
            wr("mouseleave", fn);
            break;
          case "focus":
            wr(Lv ? "focusout" : "blur", Pt);
            break;
          case "focusin":
            wr("focusout", Pt);
            break;
        }
    });
  }
  u(_r, "addListeners");
  function pn() {
    S.forEach(function(N) {
      var te = N.node, ae = N.eventType, Pe = N.handler, ve = N.options;
      te.removeEventListener(ae, Pe, ve);
    }), S = [];
  }
  u(pn, "removeListeners");
  function Me(N) {
    var te, ae = false;
    if (!(!I.state.isEnabled || Rr(N) || y)) {
      var Pe = ((te = h) == null ? void 0 : te.type) === "focus";
      h = N, M = N.currentTarget, nt(), !I.state.isVisible && Pv(N) && Ka.forEach(function(ve) {
        return ve(N);
      }), N.type === "click" && (I.props.trigger.indexOf("mouseenter") < 0 || f) && I.props.hideOnClick !== false && I.state.isVisible ? ae = true : xr(N), N.type === "click" && (f = !ae), ae && !Pe && kt(N);
    }
  }
  u(Me, "onTrigger");
  function dn(N) {
    var te = N.target, ae = W().contains(te) || z.contains(te);
    if (!(N.type === "mousemove" && ae)) {
      var Pe = St().concat(z).map(function(ve) {
        var mt, At = ve._tippy, Tt = (mt = At.popperInstance) == null ? void 0 : mt.state;
        return Tt ? { popperRect: ve.getBoundingClientRect(), popperState: Tt, props: t } : null;
      }).filter(Boolean);
      Rv(Pe, N) && (Wt(), kt(N));
    }
  }
  u(dn, "onMouseMove");
  function fn(N) {
    var te = Rr(N) || I.props.trigger.indexOf("click") >= 0 && f;
    if (!te) {
      if (I.props.interactive) {
        I.hideWithInteractivity(N);
        return;
      }
      kt(N);
    }
  }
  u(fn, "onMouseLeave");
  function Pt(N) {
    I.props.trigger.indexOf("focusin") < 0 && N.target !== W() || I.props.interactive && N.relatedTarget && z.contains(N.relatedTarget) || kt(N);
  }
  u(Pt, "onBlurOrFocusOut");
  function Rr(N) {
    return Or.isTouch ? ne() !== N.type.indexOf("touch") >= 0 : false;
  }
  u(Rr, "isEventListenerStopped");
  function Vn() {
    Yr();
    var N = I.props, te = N.popperOptions, ae = N.placement, Pe = N.offset, ve = N.getReferenceClientRect, mt = N.moveTransition, At = pe() ? Yl(z).arrow : null, Tt = ve ? { getBoundingClientRect: ve, contextElement: ve.contextElement || W() } : r, Do = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Ct) {
      var Ot = Ct.state;
      if (pe()) {
        var kr = ke(), Yn = kr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Xn) {
          Xn === "placement" ? Yn.setAttribute("data-placement", Ot.placement) : Ot.attributes.popper["data-popper-" + Xn] ? Yn.setAttribute("data-" + Xn, "") : Yn.removeAttribute("data-" + Xn);
        }), Ot.attributes.popper = {};
      }
    }, "fn") }, Yt = [{ name: "offset", options: { offset: Pe } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !mt } }, Do];
    pe() && At && Yt.push({ name: "arrow", options: { element: At, padding: 3 } }), Yt.push.apply(Yt, (te == null ? void 0 : te.modifiers) || []), I.popperInstance = ql(Tt, z, Object.assign({}, te, { placement: ae, onFirstUpdate: w, modifiers: Yt }));
  }
  u(Vn, "createPopperInstance");
  function Yr() {
    I.popperInstance && (I.popperInstance.destroy(), I.popperInstance = null);
  }
  u(Yr, "destroyPopperInstance");
  function hr() {
    var N = I.props.appendTo, te, ae = W();
    I.props.interactive && N === Rp || N === "parent" ? te = ae.parentNode : te = Dp(N, [ae]), te.contains(z) || te.appendChild(z), I.state.isMounted = true, Vn();
  }
  u(hr, "mount");
  function St() {
    return Ja(z.querySelectorAll("[data-tippy-root]"));
  }
  u(St, "getNestedPopperTree");
  function xr(N) {
    I.clearDelayTimeouts(), N && he("onTrigger", [I, N]), Dt();
    var te = Ye(true), ae = ie(), Pe = ae[0], ve = ae[1];
    Or.isTouch && Pe === "hold" && ve && (te = ve), te ? i = setTimeout(function() {
      I.show();
    }, te) : I.show();
  }
  u(xr, "scheduleShow");
  function kt(N) {
    if (I.clearDelayTimeouts(), he("onUntrigger", [I, N]), !I.state.isVisible) {
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
  u(kt, "scheduleHide");
  function hn() {
    I.state.isEnabled = true;
  }
  u(hn, "enable");
  function Dr() {
    I.hide(), I.state.isEnabled = false;
  }
  u(Dr, "disable");
  function vn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c);
  }
  u(vn, "clearDelayTimeouts");
  function Xr(N) {
    if (!I.state.isDestroyed) {
      he("onBeforeUpdate", [I, N]), pn();
      var te = I.props, ae = Mp(r, Object.assign({}, te, Sp(N), { ignoreAttributes: true }));
      I.props = ae, _r(), te.interactiveDebounce !== ae.interactiveDebounce && (Wt(), C = xp(dn, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? gi(te.triggerTarget).forEach(function(Pe) {
        Pe.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && r.removeAttribute("aria-expanded"), nt(), je(), j && j(te, ae), I.popperInstance && (Vn(), St().forEach(function(Pe) {
        requestAnimationFrame(Pe._tippy.popperInstance.forceUpdate);
      })), he("onAfterUpdate", [I, N]);
    }
  }
  u(Xr, "setProps");
  function mn(N) {
    I.setProps({ content: N });
  }
  u(mn, "setContent");
  function Ei() {
    var N = I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Pe = Or.isTouch && !I.props.touch, ve = $l(I.props.duration, 0, yr.duration);
    if (!(N || te || ae || Pe) && !W().hasAttribute("disabled") && (he("onShow", [I], false), I.props.onShow(I) !== false)) {
      if (I.state.isVisible = true, pe() && (z.style.visibility = "visible"), je(), Dt(), I.state.isMounted || (z.style.transition = "none"), pe()) {
        var mt = ke(), At = mt.box, Tt = mt.content;
        Fl([At, Tt], 0);
      }
      w = u(function() {
        var Yt;
        if (!(!I.state.isVisible || p)) {
          if (p = true, z.offsetHeight, z.style.transition = I.props.moveTransition, pe() && I.props.animation) {
            var Ti = ke(), Ct = Ti.box, Ot = Ti.content;
            Fl([Ct, Ot], ve), Tp([Ct, Ot], "visible");
          }
          Je(), nt(), Ep(Ul, I), (Yt = I.popperInstance) == null || Yt.forceUpdate(), he("onMount", [I]), I.props.animation && pe() && Vt(ve, function() {
            I.state.isShown = true, he("onShown", [I]);
          });
        }
      }, "onFirstUpdate"), hr();
    }
  }
  u(Ei, "show");
  function Si() {
    var N = !I.state.isVisible, te = I.state.isDestroyed, ae = !I.state.isEnabled, Pe = $l(I.props.duration, 1, yr.duration);
    if (!(N || te || ae) && (he("onHide", [I], false), I.props.onHide(I) !== false)) {
      if (I.state.isVisible = false, I.state.isShown = false, p = false, f = false, pe() && (z.style.visibility = "hidden"), Wt(), Ut(), je(true), pe()) {
        var ve = ke(), mt = ve.box, At = ve.content;
        I.props.animation && (Fl([mt, At], Pe), Tp([mt, At], "hidden"));
      }
      Je(), nt(), I.props.animation ? pe() && fr(Pe, I.unmount) : I.unmount();
    }
  }
  u(Si, "hide");
  function _o(N) {
    ce().addEventListener("mousemove", C), Ep(Ka, C), C(N);
  }
  u(_o, "hideWithInteractivity");
  function Ro() {
    I.state.isVisible && I.hide(), !!I.state.isMounted && (Yr(), St().forEach(function(N) {
      N._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), Ul = Ul.filter(function(N) {
      return N !== I;
    }), I.state.isMounted = false, he("onHidden", [I]));
  }
  u(Ro, "unmount");
  function hs() {
    I.state.isDestroyed || (I.clearDelayTimeouts(), I.unmount(), pn(), delete r._tippy, I.state.isDestroyed = true, he("onDestroy", [I]));
  }
  u(hs, "destroy");
}
u(Uv, "createTippy");
function mo(r, e) {
  e === void 0 && (e = {});
  var t = yr.plugins.concat(e.plugins || []);
  Nv();
  var i = Object.assign({}, e, { plugins: t }), l = zv(r);
  if (false)
    var c, f;
  var y = l.reduce(function(v, p) {
    var h = p && Uv(p, i);
    return h && v.push(h), v;
  }, []);
  return es(r) ? y[0] : y;
}
u(mo, "tippy");
mo.defaultProps = yr;
mo.setDefaultProps = qv;
mo.currentInput = Or;
var Ox = Object.assign({}, lo, { effect: u(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
mo.setDefaultProps({ render: Gp });
var Mt = mo;
var Zl = u((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function Ce(r) {
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
  return u(e, "HelpableMixinClass"), A([D], e.prototype, "help", 2), A([D], e.prototype, "helpId", 2), A([D], e.prototype, "debugHelpable", 2), e;
}
u(Ce, "HelpableMixin");
function Ee(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  return u(e, "HoverableMixinClass"), A([D], e.prototype, "hoverable", 2), e;
}
u(Ee, "HoverableMixin");
function* ts(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
u(ts, "parse");
var Lp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var ln = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var Mr;
var rs;
var $r = class {
  constructor(e, t) {
    this.expression = t, Mr.set(this, void 0), rs.set(this, ""), Lp(this, Mr, e, "f"), ln(this, Mr, "f").updateParent("");
  }
  get attributeName() {
    return ln(this, Mr, "f").attr.name;
  }
  get attributeNamespace() {
    return ln(this, Mr, "f").attr.namespaceURI;
  }
  get value() {
    return ln(this, rs, "f");
  }
  set value(e) {
    Lp(this, rs, e || "", "f"), ln(this, Mr, "f").updateParent(e);
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
};
u($r, "AttributeTemplatePart");
Mr = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap();
var go = class {
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
u(go, "AttributeValueSetter");
var jp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var bi = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var Ir;
var Jt = class {
  constructor(e, t) {
    this.expression = t, Ir.set(this, void 0), jp(this, Ir, [e], "f"), e.textContent = "";
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
    jp(this, Ir, t, "f");
  }
};
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
u(bo, "createProcessor");
function yo(r, e) {
  r.value = String(e);
}
u(yo, "processPropertyIdentity");
function ns(r, e) {
  return typeof e == "boolean" && r instanceof $r && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
u(ns, "processBooleanAttribute");
var Ql = bo(yo);
var Vv = bo((r, e) => {
  ns(r, e) || yo(r, e);
});
var Bp = function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
};
var is = function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
};
var wo;
var xo;
function* Yv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c = new go(t, l);
          for (let f of ts(l.value))
            if (f.type === "string")
              c.append(f.value);
            else {
              let y = new $r(c, f.value);
              c.append(y), yield y;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of ts(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Jt(t, i.value));
        break;
      }
}
u(Yv, "collectParts");
var un = class extends DocumentFragment {
  constructor(e, t, i = Ql) {
    var l, c;
    super();
    wo.set(this, void 0), xo.set(this, void 0), Object.getPrototypeOf(this) !== un.prototype && Object.setPrototypeOf(this, un.prototype), this.appendChild(e.content.cloneNode(true)), Bp(this, xo, Array.from(Yv(this)), "f"), Bp(this, wo, i, "f"), (c = (l = is(this, wo, "f")).createCallback) === null || c === void 0 || c.call(l, this, is(this, xo, "f"), t);
  }
  update(e) {
    is(this, wo, "f").processCallback(this, is(this, xo, "f"), e);
  }
};
u(un, "TemplateInstance");
wo = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap();
var Hp = /* @__PURE__ */ new WeakSet();
function qp(r) {
  return Hp.has(r);
}
u(qp, "isDirective");
function $p(r, e) {
  return qp(e) ? (e(r), true) : false;
}
u($p, "processDirective");
function Eo(r) {
  return (...e) => {
    let t = r(...e);
    return Hp.add(t), t;
  };
}
u(Eo, "directive");
var So = /* @__PURE__ */ new WeakMap();
var To = class {
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
};
u(To, "EventHandler");
function Fp(r, e) {
  return r instanceof $r && r.attributeName.startsWith("on") ? (To.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
u(Fp, "processEvent");
function Xv(r, e) {
  return e instanceof yi && r instanceof Jt ? (e.renderInto(r), true) : false;
}
u(Xv, "processSubTemplate");
function Zv(r, e) {
  return e instanceof DocumentFragment && r instanceof Jt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
u(Zv, "processDocumentFragment");
function Qv(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
u(Qv, "isIterable");
function Kv(r, e) {
  if (!Qv(e))
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
u(Kv, "processIterable");
function os(r, e) {
  $p(r, e) || ns(r, e) || Fp(r, e) || Xv(r, e) || Zv(r, e) || Kv(r, e) || yo(r, e);
}
u(os, "processPart");
var Kl = /* @__PURE__ */ new WeakMap();
var Wp = /* @__PURE__ */ new WeakMap();
var Up = /* @__PURE__ */ new WeakMap();
var yi = class {
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
    if (Wp.get(e) !== t) {
      Wp.set(e, t);
      let i = new un(t, this.values, this.processor);
      Up.set(e, i), e instanceof Jt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Up.get(e).update(this.values);
  }
};
u(yi, "TemplateResult");
var Jv = bo(os);
function U(r, ...e) {
  return new yi(r, e, Jv);
}
u(U, "html");
function Z(r, e) {
  r.renderInto(e);
}
u(Z, "render");
var Jl = /* @__PURE__ */ new WeakMap();
var em = Eo((...r) => (e) => {
  Jl.has(e) || Jl.set(e, { i: r.length });
  let t = Jl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, os(e, l));
    }) : i <= t.i && (t.i = i, os(e, r[i]));
});
var tm = Eo((r) => (e) => {
  if (!(e instanceof Jt))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function Ie(r) {
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
  return u(e, "IconableMixinClass"), e;
}
u(Ie, "IconableMixin");
var Fr = u((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function rt(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  return u(e, "IfableMixinClass"), A([D], e.prototype, "if", 2), e;
}
u(rt, "IfableMixin");
var eu = u((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Oe(r) {
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
      return Z(U`${l}`, c), c;
    }
    initMenuItems(i) {
      if (Fr(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-if]");
        B.notNull(c), c.disabled = false, this.ifTooltip = c._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Mt(c, { animation: false, content: "Set `if' Conditional" }), c.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Cn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-angle]");
        B.notNull(c), c.disabled = false, this.angleTooltip = c._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Mt(c, { animation: false, content: "Change Angle" }), c.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (kn(i.reference)) {
        let c = i.popper.querySelector("button[data-operation-menu-flag]");
        B.notNull(c), c.disabled = false, this.flagTooltip = c._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Mt(c, { animation: false, content: "Set Condifitonal Flag" }), c.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      B.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Mt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
  return u(e, "MenuableMixinClass"), e;
}
u(Oe, "MenuableMixin");
var as = Tn(ao(), 1);
var qt = u((r) => r != null && typeof r.resizeable == "boolean", "isResizeable");
function ss(r) {
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
        B.need(l.type === "SET_INTERACT", "event type must be SET_INTERACT"), B.notNull(this.resizeHandle);
        let c = (0, as.default)(this.resizeHandle);
        c.styleCursor(false), c.on("down", this.grabResizeHandle.bind(this)), c.on("up", this.releaseResizeHandle.bind(this)), c.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (i, l) => {
        B.need(l.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, ue("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (i, l) => {
        B.need(l.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, ue("resizeable:release-resize-handle", {}, this);
      }, startResizing: (i, l) => {
        B.need(l.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (i, l) => {
        B.need(l.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), ue("resizeable:resize", {}, this);
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
      (0, as.default)(this.resizeHandle).draggable({ modifiers: [as.default.modifiers.snap({ targets: i, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
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
  return u(e, "ResizeableMixinClass"), A([D], e.prototype, "span", 2), A([D], e.prototype, "resizeHandleX", 2), A([D], e.prototype, "resizeHandleY", 2), A([D], e.prototype, "debugResizeable", 2), A([D], e.prototype, "resizing", 2), A([ye], e.prototype, "resizeHandle", 2), e;
}
u(ss, "ResizeableMixin");
function Vp(r) {
  return /^-?\d+$/.test(r);
}
u(Vp, "isNumeric");
function xt(r, e = 4) {
  return (r >= 0 ? "+" : "") + r.toFixed(e);
}
u(xt, "forceSigned");
var pt = class extends Oe(Ce(Te(Se(Ee(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Xs;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (B.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
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
    return Z(U`
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
    return `"${Xs}"`;
  }
  updateBlochVector() {
    var t;
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`), (t = this.popup) == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return B.notNull(e), parseFloat(e);
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
    return B.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return B.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
};
u(pt, "BlochDisplayElement"), A([ye], pt.prototype, "body", 2), A([ye], pt.prototype, "vectorLine", 2), A([ye], pt.prototype, "vectorEnd", 2), A([ye], pt.prototype, "vector", 2), A([at], pt.prototype, "vectorEndCircles", 2), A([D], pt.prototype, "x", 2), A([D], pt.prototype, "y", 2), A([D], pt.prototype, "z", 2);
ee(pt);
var Yp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var $t = class extends Oe(Ce(Te($e(Ie(Se(Ee(HTMLElement))))))) {
  get operationType() {
    return Zs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Yp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Zs}"`;
  }
};
u($t, "ControlGateElement");
ee($t);
var Xp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = class extends Oe(Ce(rt(Ue(Te($e(Ie(Se(Ee(HTMLElement))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Xp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${va}<${this.if}"` : `"${va}"`;
  }
};
u(er, "HGateElement");
ee(er);
var Zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var tr = class extends Oe(Ce(ep(Te(Ie(Se(Ee(HTMLElement))))))) {
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
          ${this.iconHtml(Zp)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ma}"` : `"${ma}>${this.flag}"`;
  }
};
u(tr, "MeasurementGateElement"), A([D], tr.prototype, "value", 2);
ee(tr);
var Qp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = class extends Oe(Ce(rt(Ue(nn(Te($e(Ie(Se(Ee(HTMLElement)))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Qp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ga}"` : `"${ga}(${this.angle.replace("/", "_")})"`;
  }
};
u(rr, "PhaseGateElement");
ee(rr);
var ls = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var Kp = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var Pr = class extends Oe(Ce(ss(Te(Ie(Se(Ee(HTMLElement))))))) {
  get operationType() {
    return Ks;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(Kp)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(ls)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ks}${this.span}"`;
  }
};
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
var Ar = class extends Oe(Ce(ss(Te(Ie(Se(Ee(HTMLElement))))))) {
  get operationType() {
    return Qs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(Jp)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(ls)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Qs}${this.span}"`;
  }
};
u(Ar, "QftGateElement");
ee(Ar);
var ed = `<svg
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
var nr = class extends Oe(Ce(rt(Ue(Te($e(Ie(Se(Ee(HTMLElement))))))))) {
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
    return this.if !== "" ? `"${ba}<${this.if}"` : `"${ba}"`;
  }
};
u(nr, "RnotGateElement");
ee(nr);
var td = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = class extends Oe(Ce(rt(Ue(nn(Te($e(Ie(Se(Ee(HTMLElement)))))))))) {
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
};
u(ir, "RxGateElement");
ee(ir);
var rd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = class extends Oe(Ce(rt(Ue(nn(Te($e(Ie(Se(Ee(HTMLElement)))))))))) {
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
};
u(or, "RyGateElement");
ee(or);
var nd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ar = class extends Oe(Ce(rt(Ue(nn(Te($e(Ie(Se(Ee(HTMLElement)))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(nd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${xa}"` : `"${xa}(${this.angle.replace("/", "_")})"`;
  }
};
u(ar, "RzGateElement");
ee(ar);
var id = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var sr = class extends Oe(Ce(Ue(Te($e(Ie(Se(Ee(HTMLElement)))))))) {
  get operationType() {
    return Js;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(id)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Js}"`;
  }
};
u(sr, "SwapGateElement");
ee(sr);
var od = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var lr = class extends Oe(Ce(rt(Ue(Te($e(Ie(Se(Ee(HTMLElement))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(od)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ea}<${this.if}"` : `"${Ea}"`;
  }
};
u(lr, "TGateElement");
ee(lr);
var ad = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ft = class extends Oe(Ce(Te(Ie(Se(Ee(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return uc;
      case "1":
        return cc;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">
          ${this.iconHtml(ad)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
};
u(Ft, "WriteGateElement"), A([D], Ft.prototype, "value", 2);
ee(Ft);
var sd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var ur = class extends Oe(Ce(rt(Ue(Te($e(Ie(Se(Ee(HTMLElement))))))))) {
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
};
u(ur, "XGateElement");
ee(ur);
var ld = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = class extends Oe(Ce(rt(Ue(Te($e(Ie(Se(Ee(HTMLElement))))))))) {
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
};
u(cr, "YGateElement");
ee(cr);
var ud = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var pr = class extends Oe(Ce(rt(Ue(Te($e(Ie(Se(Ee(HTMLElement))))))))) {
  get operationType() {
    return Ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ud)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ca}<${this.if}"` : `"${Ca}"`;
  }
};
u(pr, "ZGateElement");
ee(pr);
var Fe = u((r) => r instanceof er || r instanceof ur || r instanceof cr || r instanceof pr || r instanceof rr || r instanceof lr || r instanceof nr || r instanceof ir || r instanceof or || r instanceof ar || r instanceof sr || r instanceof $t || r instanceof pt || r instanceof Ft || r instanceof tr || r instanceof Ar || r instanceof Pr, "isOperation");
var cd = u((r) => r != null && r instanceof er, "isHGateElement");
var pd = u((r) => r != null && r instanceof ur, "isXGateElement");
var dd = u((r) => r != null && r instanceof cr, "isYGateElement");
var fd = u((r) => r != null && r instanceof pr, "isZGateElement");
var Co = u((r) => r != null && r instanceof rr, "isPhaseGateElement");
var hd = u((r) => r != null && r instanceof lr, "isTGateElement");
var vd = u((r) => r != null && r instanceof nr, "isRnotGateElement");
var us = u((r) => r != null && r instanceof ir, "isRxGateElement");
var cs = u((r) => r != null && r instanceof or, "isRyGateElement");
var ps = u((r) => r != null && r instanceof ar, "isRzGateElement");
var md = u((r) => r != null && r instanceof sr, "isSwapGateElement");
var tu = u((r) => r != null && r instanceof $t, "isControlGateElement");
var gd = u((r) => r != null && r instanceof pt, "isBlochDisplayElement");
var BC = u((r) => r != null && r instanceof Ft, "isWriteGateElement");
var bd = u((r) => r != null && r instanceof tr, "isMeasurementGateElement");
var Oo = Tn(ao(), 1);
var ru = u((r) => r !== null && r instanceof Wr, "isAngleSliderElement");
var Wr = class extends HTMLElement {
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
      let [i] = this.findSnapAngle(ic(this.angle));
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
    return B.notNull(i), B.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
};
u(Wr, "AngleSliderElement"), A([D], Wr.prototype, "angle", 2), A([D], Wr.prototype, "radian", 2), A([D], Wr.prototype, "denominator", 2), A([D], Wr.prototype, "disabled", 2), A([D], Wr.prototype, "debug", 2);
ee(Wr);
var Mo = class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let t = e.currentTarget;
    B.notNull(t);
    for (let i of this.buttons)
      i.removeAttribute("data-active");
    t.setAttribute("data-active", "");
  }
};
u(Mo, "ButtonGroupElement"), A([at], Mo.prototype, "buttons", 2), Mo = A([ee], Mo);
var wi = Tn(wd(), 1);
var dt = class extends HTMLElement {
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
    t !== i && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (B.notNull(i), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
      return B.notNull(t), parseInt(t);
    }), B.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    wi.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let i = t.getAttribute("data-ket");
        B.notNull(i);
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
    B.notNull(this.window), B.notNull(this.innerContainer), this.qubitCount !== 0 && wi.default.mutate(() => {
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
        B.notNull(t), B.notNull(i);
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
    B.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = Mt(t, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let l = t.getAttribute("data-ket");
    B.notNull(l);
    let c = t.getAttribute("data-amplitude-real");
    B.notNull(c);
    let f = t.getAttribute("data-amplitude-imag");
    B.notNull(f);
    let y = parseInt(l), v = parseFloat(c), p = parseFloat(f), h = new en(v, p), b = h.abs(), w = h.phase() / Math.PI * 180, S = document.importNode(this.qubitCirclePopupTemplate.content, true), C = S.getElementById("qubit-circle-popup--ket-binary-value"), M = S.getElementById("qubit-circle-popup--ket-decimal-value"), _ = S.getElementById("qubit-circle-popup--amplitude"), $ = S.getElementById("qubit-circle-popup--amplitude-real-value"), L = S.getElementById("qubit-circle-popup--amplitude-imag-value"), F = S.getElementById("qubit-circle-popup--probability"), I = S.getElementById("qubit-circle-popup--probability-value"), Q = S.getElementById("qubit-circle-popup--phase"), z = S.getElementById("qubit-circle-popup--phase-value");
    B.notNull(_), B.notNull($), B.notNull(L), B.notNull(F), B.notNull(I), B.notNull(Q), B.notNull(z), C && (C.textContent = y.toString(2).padStart(this.qubitCount, "0")), M && (M.textContent = y.toString()), this.showQubitCirclePopupAmplitude ? ($.textContent = xt(h.real, 5), L.textContent = `${xt(h.imag, 5)}i`) : _.style.display = "none", this.showQubitCirclePopupProbability ? I.textContent = `${xt(b * b * 100, 4)}%` : F.style.display = "none", this.showQubitCirclePopupPhase ? z.textContent = `${xt(w, 2)}\xB0` : Q.style.display = "none";
    let j = document.createElement("div");
    j.appendChild(S), i.setContent(j.innerHTML), i.show();
  }
  hideQubitCirclePopup(e) {
    let t = e.target;
    B.need(t.classList.contains("qubit-circle"), "not a qubit-circle");
    let i = t._tippy;
    B.notNull(i), i.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
};
u(dt, "CircleNotationElement"), A([D], dt.prototype, "qubitCount", 2), A([D], dt.prototype, "qubitCircleSize", 2), A([D], dt.prototype, "colCount", 2), A([D], dt.prototype, "rowCount", 2), A([D], dt.prototype, "paddingX", 2), A([D], dt.prototype, "paddingY", 2), A([D], dt.prototype, "overscanCount", 2), A([D], dt.prototype, "colorPhase", 2), A([D], dt.prototype, "qubitCirclePopupTemplateId", 2), A([D], dt.prototype, "showQubitCirclePopupAmplitude", 2), A([D], dt.prototype, "showQubitCirclePopupProbability", 2), A([D], dt.prototype, "showQubitCirclePopupPhase", 2), A([ye], dt.prototype, "window", 2), A([ye], dt.prototype, "innerContainer", 2), A([at], dt.prototype, "qubitCircles", 2), dt = A([ee], dt);
var Io = class extends HTMLElement {
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
};
u(Io, "CircleNotationPanelElement"), A([ye], Io.prototype, "circleNotation", 2), Io = A([ee], Io);
var xd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Ed = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Ur = class extends HTMLElement {
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
            ${this.iconHtml(xd)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(Ed)}
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
    B.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), B.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
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
    return B.notNull(e), e;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((e) => {
      let t = e.children.item(0);
      return B.need(Fe(t), `${t} must be an operation.`), t;
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
      B.need(e < 4, "#popinGates must be < 4");
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
};
u(Ur, "GateCarouselElement"), A([D], Ur.prototype, "currentGateSetIndex", 2), A([ye], Ur.prototype, "contentClipper", 2), A([at], Ur.prototype, "gateSets", 2), A([at], Ur.prototype, "dots", 2), A([at], Ur.prototype, "popinAnimationGates", 2), Ur = A([ee], Ur);
var iu = class extends HTMLElement {
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
    return B.notNull(e), e;
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
    B.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return Z(U`${t}`, i), i;
  }
};
u(iu, "InspectorButtonElement");
ee(iu);
var Rt = class extends HTMLElement {
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
    return lc(this.angleInput.value);
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
      Co(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (us(e) || cs(e) || ps(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
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
    if (!ru(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!ru(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    B.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (sc(e)) {
      let t, i = qi(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), oc(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : ac(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    B.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Vp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
};
u(Rt, "OperationInspectorElement"), A([ye], Rt.prototype, "ifInput", 2), A([ye], Rt.prototype, "angleInputLabel", 2), A([ye], Rt.prototype, "angleInput", 2), A([ye], Rt.prototype, "angleSlider", 2), A([ye], Rt.prototype, "denominatorInput", 2), A([ye], Rt.prototype, "denominatorVariableLabel", 2), A([ye], Rt.prototype, "denominatorLabel", 2), A([ye], Rt.prototype, "reduceAngleFractionCheckbox", 2), A([ye], Rt.prototype, "flagInput", 2), A([D], Rt.prototype, "conditionalGatePaneDisabled", 2), A([D], Rt.prototype, "anglePaneDisabled", 2), A([D], Rt.prototype, "conditionalFlagPaneDisabled", 2);
ee(Rt);
var ds = Tn(Td(), 1);
var Gt = class extends HTMLElement {
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
    let e = Mt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let t = document.importNode(this.popupTemplate.content, true), i = new ds.default(this.amplitude), l = t.getElementById("qubit-circle-popup--header"), c = t.getElementById("qubit-circle-popup--ket-binary-value"), f = t.getElementById("qubit-circle-popup--ket-decimal-value"), y = t.getElementById("qubit-circle-popup--amplitude"), v = t.getElementById("qubit-circle-popup--amplitude-real-value"), p = t.getElementById("qubit-circle-popup--amplitude-imag-value"), h = t.getElementById("qubit-circle-popup--probability"), b = t.getElementById("qubit-circle-popup--probability-value"), w = t.getElementById("qubit-circle-popup--phase"), S = t.getElementById("qubit-circle-popup--phase-value");
    B.notNull(l), B.notNull(c), B.notNull(f), B.notNull(y), B.notNull(v), B.notNull(p), B.notNull(h), B.notNull(b), B.notNull(w), B.notNull(S), this.showPopupHeader ? (c.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), f.textContent = this.ket.toString()) : l.style.display = "none", this.showPopupAmplitude ? (v.textContent = xt(i.re, 5), p.textContent = `${xt(i.im, 5)}i`) : y.style.display = "none", this.showPopupProbability ? b.textContent = `${xt(this.magnitude * this.magnitude * 100, 4)}%` : h.style.display = "none", this.showPopupPhase ? S.textContent = `${xt(this.phaseDeg, 2)}\xB0` : w.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(t), e.setContent(C.innerHTML), e.show();
  }
  get magnitude() {
    return new ds.default(this.amplitude).abs();
  }
  get phase() {
    return new ds.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let e = this._tippy;
    B.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
};
u(Gt, "QubitCircleElement"), A([D], Gt.prototype, "ket", 2), A([D], Gt.prototype, "qubitCount", 2), A([D], Gt.prototype, "amplitude", 2), A([D], Gt.prototype, "hidePhase", 2), A([D], Gt.prototype, "popupTemplateId", 2), A([D], Gt.prototype, "showPopupHeader", 2), A([D], Gt.prototype, "showPopupAmplitude", 2), A([D], Gt.prototype, "showPopupProbability", 2), A([D], Gt.prototype, "showPopupPhase", 2), A([D], Gt.prototype, "darkMode", 2), Gt = A([ee], Gt);
var Cd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Od = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Wn = class extends HTMLElement {
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
    return U([Cd]);
  }
  get tailSpinIcon() {
    return U([Od]);
  }
};
u(Wn, "RunCircuitButtonElement"), A([D], Wn.prototype, "running", 2), A([D], Wn.prototype, "debug", 2), A([ye], Wn.prototype, "body", 2), A([ye], Wn.prototype, "ripple", 2);
ee(Wn);
var Vr = class extends HTMLElement {
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
};
u(Vr, "SlideInElement"), A([D], Vr.prototype, "direction", 2), A([D], Vr.prototype, "directionDesktop", 2), A([D], Vr.prototype, "duration", 2), A([D], Vr.prototype, "marginTop", 2), A([D], Vr.prototype, "marginBottom", 2), Vr = A([ee], Vr);
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
};
u(cn, "CircuitBlockElement"), A([D], cn.prototype, "comment", 2), A([D], cn.prototype, "finalized", 2), cn = A([ee], cn);
var zr = u((r) => r != null && r instanceof Et, "isCircuitStepElement");
var Re = u((r, e) => Array.from(r.reduce((t, i, l, c) => {
  let f = e(i, l, c), y = t.get(f);
  return y ? y.push(i) : t.set(f, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var Et = class extends HTMLElement {
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
      B.notNull(i.operation), i.operation.bit = l;
    }, updateResizeableSpanDropzones: (e, t) => {
      if (!(t.type === "SNAP_DROPZONE" || t.type === "UNSNAP_DROPZONE" || t.type === "OCCUPY_DROPZONE" || t.type === "DELETE_OPERATION" || t.type === "RESIZE_OPERATION"))
        return;
      let i = 1;
      for (let l of this.dropzones) {
        let c = l.operation;
        if (qt(c)) {
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
      if (l > e && (e = l), qt(i.operation)) {
        let c = l + i.operation.span - 1;
        c > e && (e = c);
      }
    }
    return B.need(0 <= e && e <= ha.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
    Z(U`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      $i(l.operation) && (l.operation.controlBits = []);
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
        if (!Co(f.operation))
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
      if (!$i(h.operation))
        throw new Error(`${h.operation} isn't controllable.`);
      h.operation.controlBits = this.controlBits(h, f, e), h.connectTop = p.some((b) => b < this.bit(h)), h.connectBottom = p.some((b) => b > this.bit(h));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((v) => tu(v.operation) && !v.operation.isDisabled).map((v) => this.bit(v)), l = t.map((v) => this.bit(v)), c = i.concat(l), f = Math.min(...c), y = Math.max(...c);
    for (let v of this.freeDropzones)
      f < this.bit(v) && this.bit(v) < y && (v.connectTop = true, v.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return B.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => e.operation === null);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return B.notNull(t), t;
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let e = new me();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new me();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.occupiedDropzones.filter((e) => tu(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c = 0, f = 0, y = 0, v = 0, p = 0, h = 0, b = 0;
    return this.occupiedDropzones.filter((w) => $i(w.operation)).filter((w) => e === void 0 ? true : cd(w.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : pd(w.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : dd(w.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : fd(w.operation) ? (c += 1, e.maxCzTargetGates !== 0 && c > e.maxCzTargetGates ? false : !e.disableCz) : Co(w.operation) ? (f += 1, e.maxCphaseTargetGates !== 0 && f > e.maxCphaseTargetGates ? false : !e.disableCphase) : hd(w.operation) ? (y += 1, e.maxCtTargetGates !== 0 && y > e.maxCtTargetGates ? false : !e.disableCt) : vd(w.operation) ? (v += 1, e.maxCrnotTargetGates !== 0 && v > e.maxCrnotTargetGates ? false : !e.disableCrnot) : us(w.operation) ? (p += 1, e.maxCrxTargetGates !== 0 && p > e.maxCrxTargetGates ? false : !e.disableCrx) : cs(w.operation) ? (h += 1, e.maxCryTargetGates !== 0 && h > e.maxCryTargetGates ? false : !e.disableCry) : ps(w.operation) ? (b += 1, e.maxCrzTargetGates !== 0 && b > e.maxCrzTargetGates ? false : !e.disableCrz) : md(w.operation) ? !e.disableCswap : true);
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
            for (let [y, v] of Re(f, (p) => p.controlBits.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controlBits), e.push(w);
            }
          break;
        }
        case ur: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controlBits.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controlBits), e.push(w);
            }
          break;
        }
        case cr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controlBits.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controlBits), e.push(w);
            }
          break;
        }
        case pr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controlBits.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controlBits), e.push(w);
            }
          break;
        }
        case rr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controlBits.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controlBits), e.push(C);
              }
          break;
        }
        case lr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controlBits.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controlBits), e.push(w);
            }
          break;
        }
        case nr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.if))
            for (let [y, v] of Re(f, (p) => p.controlBits.toString())) {
              let p = v[0], h = p.operationType, b = v.map((S) => S.bit), w = { type: h, targets: b };
              c !== "" && (w.if = c), y !== "" && (w.controls = p.controlBits), e.push(w);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controlBits.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controlBits), e.push(C);
              }
          break;
        }
        case or: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controlBits.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controlBits), e.push(C);
              }
          break;
        }
        case ar: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.angle))
            for (let [y, v] of Re(f, (p) => p.if))
              for (let [p, h] of Re(v, (b) => b.controlBits.toString())) {
                let b = h[0], w = b.operationType, S = h.map((M) => M.bit), C = { type: w, targets: S };
                y !== "" && (C.if = y), c !== "" && (C.angle = c), p !== "" && (C.controls = b.controlBits), e.push(C);
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
        case Pr: {
          let l = i;
          for (let [c, f] of Re(l, (y) => y.span)) {
            let v = f[0].operationType, p = f.map((b) => b.bit), h = { type: v, span: c, targets: p };
            e.push(h);
          }
          break;
        }
        case sr: {
          let l = i.filter((v) => !v.isDisabled);
          if (l.length !== 2)
            break;
          let c = l[0].operationType, f = l[0].controlBits, y = { type: c, targets: [l[0].bit, l[1].bit] };
          f !== void 0 && f.length > 0 && (y.controls = f), e.push(y);
          break;
        }
        case $t: {
          let l = i.filter((f) => !f.isDisabled);
          if (l.length < 2 || this.operations.some((f) => $i(f) && f.controlBits.length > 0))
            break;
          let c = l.map((f) => f.bit);
          e.push({ type: l[0].operationType, targets: c });
          break;
        }
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
};
u(Et, "CircuitStepElement"), A([D], Et.prototype, "active", 2), A([D], Et.prototype, "breakpoint", 2), A([D], Et.prototype, "shadow", 2), A([D], Et.prototype, "keep", 2), A([D], Et.prototype, "debug", 2), A([at], Et.prototype, "dropzones", 2), A([at], Et.prototype, "freeDropzones", 2), A([at], Et.prototype, "occupiedDropzones", 2);
ee(Et);
var Id = Tn(ao(), 1);
var Md = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Ao = u((r) => r != null && r instanceof me, "isCircuitDropzoneElement");
var Po;
var me = class extends HTMLElement {
  constructor() {
    super(...arguments);
    da(this, Po, null);
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
      B.notNull(this.operation), this.operation.snap();
    }, snapOperation: () => {
      B.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, ue("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.removeAttribute("data-operation-name"), this.occupied = false, ue("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      ue("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), this.occupied = true, t.operation.snap());
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
    let { signal: e } = fa(this, Po, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = pa(this, Po)) == null || e.abort();
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-occupied" && (i !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
  }
  update() {
    Z(U`<style>
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
    return B.notNull(e), zr(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, Id.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!qt(t))
      throw new Error(`${t} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([Md]);
  }
};
u(me, "CircuitDropzoneElement"), Po = /* @__PURE__ */ new WeakMap(), A([D], me.prototype, "occupied", 2), A([D], me.prototype, "operationName", 2), A([D], me.prototype, "inputWireQuantum", 2), A([D], me.prototype, "outputWireQuantum", 2), A([D], me.prototype, "connectTop", 2), A([D], me.prototype, "connectBottom", 2), A([D], me.prototype, "shadow", 2), A([D], me.prototype, "targets", 2), A([D], me.prototype, "debug", 2);
ee(me);
var xi = class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = lt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, t) => {
      if (t.type !== "GRAB_OPERATION")
        return;
      let i = t.operation;
      eu(i) && i.menu && i.hideMenu();
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
      if (i.snap(), l.dropzone === null) {
        let c = l.stepIndex;
        B.notNull(c);
        let f = this.circuit.addShadowStepAfter(c), y = f.dropzones[l.wireIndex];
        B.notNull(y), y.append(i), y.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(f.dropzones);
      } else
        l.dropzone.append(i);
    }, snapResizeHandleIntoDropzone: (e, t) => {
      if (t.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let i = t.operation;
      if (!qt(i))
        throw new Error(`${i} is not resizeable`);
      let l = i.dropzone;
      if (!Ao(l))
        throw new Error(`${l} is not a circuit dropzone`);
      B.notNull(l.circuitStep);
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
      this.circuit.wireCount < ha.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      t.type !== "END_DRAGGING_OPERATION" || t.operation.isSnapped || this.inspectorButton !== void 0 && (!this.inspectorButton.isInspectorShown || this.inspectorButton.inspector.disableAllPanes());
    }, initOperationMenu: (e, t) => {
      if (t.type !== "DROP_OPERATION")
        return;
      let i = t.operation;
      eu(i) && i.initMenu();
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
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let t = e.target;
    if (Fa(t))
      t.enableDrag();
    else
      throw new ot("Not a draggable element.", { el: t });
  }
  enableResizing(e) {
    let t = e.target;
    if (qt(t))
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
    !Fe(t) && this.inspectorButton && !((i = this.inspectorButton) == null ? void 0 : i.popup.popper.contains(t)) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && this.activeOperation.deactivate();
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
    if (B.notNull(i), !Cn(i))
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
};
u(xi, "CircuitEditorElement"), A([D], xi.prototype, "debug", 2), A([ye], xi.prototype, "circuit", 2), A([ye], xi.prototype, "inspectorButton", 2);
ee(xi);
var zo;
var fs = class extends HTMLElement {
  constructor() {
    super(...arguments);
    da(this, zo, null);
  }
  connectedCallback() {
    let { signal: e } = fa(this, zo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.setOperationTarget(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
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
  setOperationTarget() {
    let e = Array.from(this.children).filter((t) => Fe(t)).map((t) => (t.setAttribute("data-target", "palette-dropzone.operation"), t));
    if (e.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (e.length > 1)
      throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  initOperation(e) {
    Fa(e) && (e.enableDrag(), e.grabbed = false, e.snap()), qt(e) && (e.resizeable = true), Zl(e) && e.initHelp();
  }
  newOperation(e) {
    let t = e.target;
    this.assertOperation(t);
    let i = t.cloneNode(false);
    this.assertOperation(i), Zl(t) && t.disableHelp(), this.prepend(i), this.initOperation(i);
  }
  deleteOperation(e) {
    let t = e.target;
    this.assertOperation(t), this.removeChild(t);
  }
  assertOperation(e) {
    if (!Fe(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
};
u(fs, "PaletteDropzoneElement"), zo = /* @__PURE__ */ new WeakMap(), A([ye], fs.prototype, "operation", 2);
ee(fs);
var se = class extends Ee(HTMLElement) {
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
    return B.need(t !== -1, `circuit-step index of ${e} not found.`), t;
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
    return B.notNull(t), t;
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
      B.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
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
    let t = this.applyOperationToTargets(() => new $t(), ...e);
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
      i.dropzoneAt(l).put(new $t());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c = [].concat(i), f = l.concat(c), y = Math.max(...f) + 1, v = this.appendStepWithDropzones(y);
    for (let p of l)
      v.dropzoneAt(p).put(new $t());
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
      let l = new me();
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
      t.deactivate();
    e.activate();
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
            p.value = "0", y.push(p), f.append(new me());
            break;
          }
          case /^\|1>$/.test(v): {
            let p = new Ft();
            p.value = "1", y.push(p), f.append(new me());
            break;
          }
          case /^H/.test(v): {
            let p = new er();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new me());
            break;
          }
          case (/^X$/.test(v) || /^X<(.+)$/.test(v)): {
            let p = new ur();
            p.if = v.slice(2).trim(), y.push(p), f.append(new me());
            break;
          }
          case /^Y/.test(v): {
            let p = new cr();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new me());
            break;
          }
          case /^Z/.test(v): {
            let p = new pr();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new me());
            break;
          }
          case /^P/.test(v): {
            let p = new rr();
            p.angle = this.angleParameter(v.slice(1)), y.push(p), f.append(new me());
            break;
          }
          case /^T/.test(v): {
            let p = new lr();
            p.if = this.ifVariable(v.slice(1)), y.push(p), f.append(new me());
            break;
          }
          case /^X\^½/.test(v): {
            let p = new nr();
            p.if = this.ifVariable(v.slice(3)), y.push(p), f.append(new me());
            break;
          }
          case /^Rx/.test(v): {
            let p = new ir();
            p.angle = this.angleParameter(v.slice(2)), y.push(p), f.append(new me());
            break;
          }
          case /^Ry/.test(v): {
            let p = new or();
            p.angle = this.angleParameter(v.slice(2)), y.push(p), f.append(new me());
            break;
          }
          case /^Rz/.test(v): {
            let p = new ar();
            p.angle = this.angleParameter(v.slice(2)), y.push(p), f.append(new me());
            break;
          }
          case /^QFT\d/.test(v): {
            let p = new Ar(), h = parseInt(v.slice(3), 10);
            p.span = h, y.push(p);
            for (let b = 0; b < h; b++)
              f.append(new me());
            break;
          }
          case /^QFT†\d/.test(v): {
            let p = new Pr(), h = parseInt(v.slice(4), 10);
            p.span = h, y.push(p), f.append(new me());
            for (let b = 0; b < h; b++)
              f.append(new me());
            break;
          }
          case /^Swap$/.test(v): {
            let p = new sr();
            y.push(p), f.append(new me());
            break;
          }
          case /^•$/.test(v): {
            let p = new $t();
            y.push(p), f.append(new me());
            break;
          }
          case /^Bloch$/.test(v): {
            let p = new pt();
            y.push(p), f.append(new me());
            break;
          }
          case /^Measure/.test(v): {
            let p = new tr(), h = ((/^>(.+)$/.exec(v.slice(7)) || [])[1] || "").trim();
            p.flag = h, y.push(p), f.append(new me());
            break;
          }
          case /^[[{](.+)$/.test(v): {
            let p = v.slice(1);
            f.remove(), t = new cn(), t.comment = p, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(v): {
            f.remove(), t.finalize(), l = true;
            break;
          }
          default: {
            if (v !== 1)
              throw new Error(`Unknown operation: ${v}`);
            f.append(new me()), y.push(null);
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
    if (!zr(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!Ao(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    B.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
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
    qt(e) && (i = e.span);
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
            B.notNull(_), t.push(_.snapTarget);
          }
        }
        let C = w + e.snapRange * 0.75;
        f.dropzones[h + i - 1] !== void 0 && (this.isVertical ? t.push({ x: S, y: C }) : t.push({ x: C, y: S })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][S] === void 0 && (this.snapTargets[C][S] = { dropzone: null, stepIndex: y, wireIndex: h }), this.snapTargets[w] === void 0 && (this.snapTargets[w] = {}), this.snapTargets[w][S] === void 0 && (this.snapTargets[w][S] = { dropzone: p, stepIndex: null, wireIndex: h });
      }
    }
    e.snapTargets = t;
  }
  setResizeHandleSnapTargets(e) {
    if (!qt(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!Ao(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let t = e.dropzone.circuitStep;
    B.notNull(t);
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
          B.notNull(C), c.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[p] === void 0 && (this.resizeHandleSnapTargets[p] = {}), this.resizeHandleSnapTargets[p][h] === void 0 && (this.resizeHandleSnapTargets[p][h] = { dropzone: y, stepIndex: null, wireIndex: b });
    }
    e.resizeHandleSnapTargets = c;
  }
  updateSnapTargets(e) {
    let t = e[0];
    B.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let f in c) {
          let y = c[f];
          y.stepIndex !== null && (y.stepIndex += 1);
        }
    for (let [l, c] of Object.entries(e)) {
      let f = c.snapTarget, y = this.isVertical ? f.y : f.x, v = this.isVertical ? f.x : f.y;
      B.notNull(this.snapTargets[y]), this.snapTargets[y][v] = { dropzone: c, stepIndex: null, wireIndex: parseInt(l) };
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
u(se, "QuantumCircuitElement"), A([D], se.prototype, "minStepCount", 2), A([D], se.prototype, "minWireCount", 2), A([D], se.prototype, "editing", 2), A([D], se.prototype, "updateUrl", 2), A([D], se.prototype, "json", 2), A([D], se.prototype, "circuitTitle", 2), A([D], se.prototype, "debug", 2), A([D], se.prototype, "chDisabled", 2), A([D], se.prototype, "chMaxControlGates", 2), A([D], se.prototype, "chMaxTargetGates", 2), A([D], se.prototype, "cnotDisabled", 2), A([D], se.prototype, "cnotMaxControlGates", 2), A([D], se.prototype, "cnotMaxTargetGates", 2), A([D], se.prototype, "cyDisabled", 2), A([D], se.prototype, "cyMaxControlGates", 2), A([D], se.prototype, "cyMaxTargetGates", 2), A([D], se.prototype, "czDisabled", 2), A([D], se.prototype, "czMaxControlGates", 2), A([D], se.prototype, "czMaxTargetGates", 2), A([D], se.prototype, "cphaseDisabled", 2), A([D], se.prototype, "cphaseMaxControlGates", 2), A([D], se.prototype, "cphaseMaxTargetGates", 2), A([D], se.prototype, "ctDisabled", 2), A([D], se.prototype, "ctMaxControlGates", 2), A([D], se.prototype, "ctMaxTargetGates", 2), A([D], se.prototype, "crnotDisabled", 2), A([D], se.prototype, "crnotMaxControlGates", 2), A([D], se.prototype, "crnotMaxTargetGates", 2), A([D], se.prototype, "crxDisabled", 2), A([D], se.prototype, "crxMaxControlGates", 2), A([D], se.prototype, "crxMaxTargetGates", 2), A([D], se.prototype, "cryDisabled", 2), A([D], se.prototype, "cryMaxControlGates", 2), A([D], se.prototype, "cryMaxTargetGates", 2), A([D], se.prototype, "crzDisabled", 2), A([D], se.prototype, "crzMaxControlGates", 2), A([D], se.prototype, "crzMaxTargetGates", 2), A([D], se.prototype, "cswapDisabled", 2), A([D], se.prototype, "cswapMaxControlGates", 2), A([D], se.prototype, "swapDisabled", 2), A([D], se.prototype, "controlControlDisabled", 2), A([D], se.prototype, "controlControlMaxTargetGates", 2), A([D], se.prototype, "phasePhaseDisabled", 2), A([D], se.prototype, "phasePhaseMaxTargetGates", 2), A([at], se.prototype, "blocks", 2);
ee(se);
var Un = class extends HTMLElement {
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
          let y = parseInt(f), v = c.dropzoneAt(y).operation;
          if (gd(v)) {
            let p = t.blochVectors[y];
            v.x = p[0], v.y = p[1], v.z = p[2];
          }
        }
        if (t.measuredBits) {
          let f = t.measuredBits;
          for (let y in f) {
            let v = parseInt(y), p = c.dropzoneAt(v).operation;
            bd(p) && (p.value = f[v].toString());
          }
        }
        for (let f of c.dropzones) {
          let y = f.operation;
          !Fr(y) || y.if !== "" && (y.isDisabled = !t.flags[y.if]);
        }
        if (i === t.step) {
          let f = {};
          for (let y in t.amplitudes) {
            let v = t.amplitudes[y];
            f[y] = new en(v[0], v[1]);
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
    B.need(i.length > 0, "non-zero step length");
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
    B.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
};
u(Un, "QuantumSimulatorElement"), A([D], Un.prototype, "updateUrl", 2), A([ye], Un.prototype, "circuit", 2), A([ye], Un.prototype, "circleNotation", 2), A([at], Un.prototype, "runCircuitButtons", 2);
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
