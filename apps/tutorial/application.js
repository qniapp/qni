var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var yh = Object.create;
var ca = Object.defineProperty;
var nc = Object.getOwnPropertyDescriptor;
var wh = Object.getOwnPropertyNames;
var xh = Object.getPrototypeOf;
var Eh = Object.prototype.hasOwnProperty;
var c = /* @__PURE__ */ __name((t, r) => ca(t, "name", { value: r, configurable: true }), "c");
var pa = /* @__PURE__ */ __name((t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports), "pa");
var Sh = /* @__PURE__ */ __name((t, r, e, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of wh(r))
      !Eh.call(t, a) && a !== e && ca(t, a, { get: () => r[a], enumerable: !(n = nc(r, a)) || n.enumerable });
  return t;
}, "Sh");
var In = /* @__PURE__ */ __name((t, r, e) => (e = t != null ? yh(xh(t)) : {}, Sh(r || !t || !t.__esModule ? ca(e, "default", { value: t, enumerable: true }) : e, t)), "In");
var M = /* @__PURE__ */ __name((t, r, e, n) => {
  for (var a = n > 1 ? void 0 : n ? nc(r, e) : r, u = t.length - 1, h; u >= 0; u--)
    (h = t[u]) && (a = (n ? h(r, e, a) : h(a)) || a);
  return n && a && ca(r, e, a), a;
}, "M");
var ic = /* @__PURE__ */ __name((t, r, e) => {
  if (!r.has(t))
    throw TypeError("Cannot " + e);
}, "ic");
var da = /* @__PURE__ */ __name((t, r, e) => (ic(t, r, "read from private field"), e ? e.call(t) : r.get(t)), "da");
var fa = /* @__PURE__ */ __name((t, r, e) => {
  if (r.has(t))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(t) : r.set(t, e);
}, "fa");
var ha = /* @__PURE__ */ __name((t, r, e, n) => (ic(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e), "ha");
var ac = pa((Ys, oc) => {
  (function(t) {
    "use strict";
    var r = 2e3, e = { s: 1, n: 0, d: 1 };
    function n(y, S) {
      if (isNaN(y = parseInt(y, 10)))
        throw w.InvalidParameter;
      return y * S;
    }
    __name(n, "n");
    c(n, "assign");
    function a(y, S) {
      if (S === 0)
        throw w.DivisionByZero;
      var C = Object.create(w.prototype);
      C.s = y < 0 ? -1 : 1, y = y < 0 ? -y : y;
      var O = f(y, S);
      return C.n = y / O, C.d = S / O, C;
    }
    __name(a, "a");
    c(a, "newFraction");
    function u(y) {
      for (var S = {}, C = y, O = 2, z = 4; z <= C; ) {
        for (; C % O === 0; )
          C /= O, S[O] = (S[O] || 0) + 1;
        z += 1 + 2 * O++;
      }
      return C !== y ? C > 1 && (S[C] = (S[C] || 0) + 1) : S[y] = (S[y] || 0) + 1, S;
    }
    __name(u, "u");
    c(u, "factorize");
    var h = c(function(y, S) {
      var C = 0, O = 1, z = 1, H = 0, L = 0, U = 0, A = 1, J = 1, R = 0, j = 1, W = 1, ee = 1, ie = 1e7, ne;
      if (y != null)
        if (S !== void 0) {
          if (C = y, O = S, z = C * O, C % 1 !== 0 || O % 1 !== 0)
            throw w.NonIntegerParameter;
        } else
          switch (typeof y) {
            case "object": {
              if ("d" in y && "n" in y)
                C = y.n, O = y.d, "s" in y && (C *= y.s);
              else if (0 in y)
                C = y[0], 1 in y && (O = y[1]);
              else
                throw w.InvalidParameter;
              z = C * O;
              break;
            }
            case "number": {
              if (y < 0 && (z = y, y = -y), y % 1 === 0)
                C = y;
              else if (y > 0) {
                for (y >= 1 && (J = Math.pow(10, Math.floor(1 + Math.log(y) / Math.LN10)), y /= J); j <= ie && ee <= ie; )
                  if (ne = (R + W) / (j + ee), y === ne) {
                    j + ee <= ie ? (C = R + W, O = j + ee) : ee > j ? (C = W, O = ee) : (C = R, O = j);
                    break;
                  } else
                    y > ne ? (R += W, j += ee) : (W += R, ee += j), j > ie ? (C = W, O = ee) : (C = R, O = j);
                C *= J;
              } else
                (isNaN(y) || isNaN(S)) && (O = C = NaN);
              break;
            }
            case "string": {
              if (j = y.match(/\d+|./g), j === null)
                throw w.InvalidParameter;
              if (j[R] === "-" ? (z = -1, R++) : j[R] === "+" && R++, j.length === R + 1 ? L = n(j[R++], z) : j[R + 1] === "." || j[R] === "." ? (j[R] !== "." && (H = n(j[R++], z)), R++, (R + 1 === j.length || j[R + 1] === "(" && j[R + 3] === ")" || j[R + 1] === "'" && j[R + 3] === "'") && (L = n(j[R], z), A = Math.pow(10, j[R].length), R++), (j[R] === "(" && j[R + 2] === ")" || j[R] === "'" && j[R + 2] === "'") && (U = n(j[R + 1], z), J = Math.pow(10, j[R + 1].length) - 1, R += 3)) : j[R + 1] === "/" || j[R + 1] === ":" ? (L = n(j[R], z), A = n(j[R + 2], 1), R += 3) : j[R + 3] === "/" && j[R + 1] === " " && (H = n(j[R], z), L = n(j[R + 2], z), A = n(j[R + 4], 1), R += 5), j.length <= R) {
                O = A * J, z = C = U + O * H + J * L;
                break;
              }
            }
            default:
              throw w.InvalidParameter;
          }
      if (O === 0)
        throw w.DivisionByZero;
      e.s = z < 0 ? -1 : 1, e.n = Math.abs(C), e.d = Math.abs(O);
    }, "parse");
    function b(y, S, C) {
      for (var O = 1; S > 0; y = y * y % C, S >>= 1)
        S & 1 && (O = O * y % C);
      return O;
    }
    __name(b, "b");
    c(b, "modpow");
    function v(y, S) {
      for (; S % 2 === 0; S /= 2)
        ;
      for (; S % 5 === 0; S /= 5)
        ;
      if (S === 1)
        return 0;
      for (var C = 10 % S, O = 1; C !== 1; O++)
        if (C = C * 10 % S, O > r)
          return 0;
      return O;
    }
    __name(v, "v");
    c(v, "cycleLen");
    function p(y, S, C) {
      for (var O = 1, z = b(10, C, S), H = 0; H < 300; H++) {
        if (O === z)
          return H;
        O = O * 10 % S, z = z * 10 % S;
      }
      return 0;
    }
    __name(p, "p");
    c(p, "cycleStart");
    function f(y, S) {
      if (!y)
        return S;
      if (!S)
        return y;
      for (; ; ) {
        if (y %= S, !y)
          return S;
        if (S %= y, !S)
          return y;
      }
    }
    __name(f, "f");
    c(f, "gcd");
    function w(y, S) {
      if (h(y, S), this instanceof w)
        y = f(e.d, e.n), this.s = e.s, this.n = e.n / y, this.d = e.d / y;
      else
        return a(e.s * e.n, e.d);
    }
    __name(w, "w");
    c(w, "Fraction"), w.DivisionByZero = new Error("Division by Zero"), w.InvalidParameter = new Error("Invalid argument"), w.NonIntegerParameter = new Error("Parameters must be integer"), w.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return a(this.n, this.d);
    }, neg: function() {
      return a(-this.s * this.n, this.d);
    }, add: function(y, S) {
      return h(y, S), a(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(y, S) {
      return h(y, S), a(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(y, S) {
      return h(y, S), a(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(y, S) {
      return h(y, S), a(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return a(this.s * this.n, this.d);
    }, mod: function(y, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new w(NaN);
      if (y === void 0)
        return a(this.s * this.n % this.d, 1);
      if (h(y, S), e.n === 0 && this.d === 0)
        throw w.DivisionByZero;
      return a(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(y, S) {
      return h(y, S), a(f(e.n, this.n) * f(e.d, this.d), e.d * this.d);
    }, lcm: function(y, S) {
      return h(y, S), e.n === 0 && this.n === 0 ? a(0, 1) : a(e.n * this.n, f(e.n, this.n) * f(e.d, this.d));
    }, ceil: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : a(Math.ceil(y * this.s * this.n / this.d), y);
    }, floor: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : a(Math.floor(y * this.s * this.n / this.d), y);
    }, round: function(y) {
      return y = Math.pow(10, y || 0), isNaN(this.n) || isNaN(this.d) ? new w(NaN) : a(Math.round(y * this.s * this.n / this.d), y);
    }, inverse: function() {
      return a(this.s * this.d, this.n);
    }, pow: function(y, S) {
      if (h(y, S), e.d === 1)
        return e.s < 0 ? a(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : a(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var C = u(this.n), O = u(this.d), z = 1, H = 1;
      for (var L in C)
        if (L !== "1") {
          if (L === "0") {
            z = 0;
            break;
          }
          if (C[L] *= e.n, C[L] % e.d === 0)
            C[L] /= e.d;
          else
            return null;
          z *= Math.pow(L, C[L]);
        }
      for (var L in O)
        if (L !== "1") {
          if (O[L] *= e.n, O[L] % e.d === 0)
            O[L] /= e.d;
          else
            return null;
          H *= Math.pow(L, O[L]);
        }
      return e.s < 0 ? a(H, z) : a(z, H);
    }, equals: function(y, S) {
      return h(y, S), this.s * this.n * e.d === e.s * e.n * this.d;
    }, compare: function(y, S) {
      h(y, S);
      var C = this.s * this.n * e.d - e.s * e.n * this.d;
      return (0 < C) - (C < 0);
    }, simplify: function(y) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      y = y || 1e-3;
      for (var S = this.abs(), C = S.toContinued(), O = 1; O < C.length; O++) {
        for (var z = a(C[O - 1], 1), H = O - 2; H >= 0; H--)
          z = z.inverse().add(C[H]);
        if (z.sub(S).abs().valueOf() < y)
          return z.mul(this.s);
      }
      return this;
    }, divisible: function(y, S) {
      return h(y, S), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(y) {
      var S, C = "", O = this.n, z = this.d;
      return this.s < 0 && (C += "-"), z === 1 ? C += O : (y && (S = Math.floor(O / z)) > 0 && (C += S, C += " ", O %= z), C += O, C += "/", C += z), C;
    }, toLatex: function(y) {
      var S, C = "", O = this.n, z = this.d;
      return this.s < 0 && (C += "-"), z === 1 ? C += O : (y && (S = Math.floor(O / z)) > 0 && (C += S, O %= z), C += "\\frac{", C += O, C += "}{", C += z, C += "}"), C;
    }, toContinued: function() {
      var y, S = this.n, C = this.d, O = [];
      if (isNaN(S) || isNaN(C))
        return O;
      do
        O.push(Math.floor(S / C)), y = S % C, S = C, C = y;
      while (S !== 1);
      return O;
    }, toString: function(y) {
      var S = this.n, C = this.d;
      if (isNaN(S) || isNaN(C))
        return "NaN";
      y = y || 15;
      var O = v(S, C), z = p(S, C, O), H = this.s < 0 ? "-" : "";
      if (H += S / C | 0, S %= C, S *= 10, S && (H += "."), O) {
        for (var L = z; L--; )
          H += S / C | 0, S %= C, S *= 10;
        H += "(";
        for (var L = O; L--; )
          H += S / C | 0, S %= C, S *= 10;
        H += ")";
      } else
        for (var L = y; S && L--; )
          H += S / C | 0, S %= C, S *= 10;
      return H;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return w;
    }) : typeof Ys == "object" ? (Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.Fraction = w, oc.exports = w) : t.Fraction = w;
  })(Ys);
});
var co = pa((np, Pl) => {
  (function(t) {
    typeof np == "object" && typeof Pl != "undefined" ? Pl.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
  })(function() {
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(i) {
      return !(!i || !i.Window) && i instanceof i.Window;
    };
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.getWindow = function(i) {
      return (0, t.default)(i) ? i : (i.ownerDocument || i).defaultView || n.window;
    }, r.init = a, r.window = r.realWindow = void 0;
    var e = void 0;
    r.realWindow = e;
    var n = void 0;
    function a(i) {
      r.realWindow = e = i;
      var o = i.document.createTextNode("");
      o.ownerDocument !== i.document && typeof i.wrap == "function" && i.wrap(o) === o && (i = i.wrap(i)), r.window = n = i;
    }
    __name(a, "a");
    c(a, "o"), r.window = n, typeof window != "undefined" && window && a(window);
    var u = {};
    function h(i) {
      return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, h(i);
    }
    __name(h, "h");
    c(h, "a"), Object.defineProperty(u, "__esModule", { value: true }), u.default = void 0;
    var b = c(function(i) {
      return !!i && h(i) === "object";
    }, "s"), v = c(function(i) {
      return typeof i == "function";
    }, "l"), p = { window: function(i) {
      return i === r.window || (0, t.default)(i);
    }, docFrag: function(i) {
      return b(i) && i.nodeType === 11;
    }, object: b, func: v, number: function(i) {
      return typeof i == "number";
    }, bool: function(i) {
      return typeof i == "boolean";
    }, string: function(i) {
      return typeof i == "string";
    }, element: function(i) {
      if (!i || h(i) !== "object")
        return false;
      var o = r.getWindow(i) || r.window;
      return /object|function/.test(typeof Element == "undefined" ? "undefined" : h(Element)) ? i instanceof Element || i instanceof o.Element : i.nodeType === 1 && typeof i.nodeName == "string";
    }, plainObject: function(i) {
      return b(i) && !!i.constructor && /function Object\b/.test(i.constructor.toString());
    }, array: function(i) {
      return b(i) && i.length !== void 0 && v(i.splice);
    } };
    u.default = p;
    var f = {};
    function w(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var s = o.prepared.axis;
        s === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : s === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(w, "w");
    c(w, "f");
    function y(i) {
      var o = i.iEvent, s = i.interaction;
      if (s.prepared.name === "drag") {
        var l = s.prepared.axis;
        if (l === "x" || l === "y") {
          var d = l === "x" ? "y" : "x";
          o.page[d] = s.coords.start.page[d], o.client[d] = s.coords.start.client[d], o.delta[d] = 0;
        }
      }
    }
    __name(y, "y");
    c(y, "d"), Object.defineProperty(f, "__esModule", { value: true }), f.default = void 0;
    var S = { id: "actions/drag", install: function(i) {
      var o = i.actions, s = i.Interactable, l = i.defaults;
      s.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", l.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": w, "interactions:action-resume": w, "interactions:action-move": y, "auto-start:check": function(i) {
      var o = i.interaction, s = i.interactable, l = i.buttons, d = s.options.drag;
      if (d && d.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || l & s.options.drag.mouseButtons))
        return i.action = { name: "drag", axis: d.lockAxis === "start" ? d.startAxis : d.lockAxis }, false;
    } }, draggable: function(i) {
      return u.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : u.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: w, move: y, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, C = S;
    f.default = C;
    var O = {};
    Object.defineProperty(O, "__esModule", { value: true }), O.default = void 0;
    var z = { init: function(i) {
      var o = i;
      z.document = o.document, z.DocumentFragment = o.DocumentFragment || H, z.SVGElement = o.SVGElement || H, z.SVGSVGElement = o.SVGSVGElement || H, z.SVGElementInstance = o.SVGElementInstance || H, z.Element = o.Element || H, z.HTMLElement = o.HTMLElement || z.Element, z.Event = o.Event, z.Touch = o.Touch || H, z.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function H() {
    }
    __name(H, "H");
    c(H, "y");
    var L = z;
    O.default = L;
    var U = {};
    Object.defineProperty(U, "__esModule", { value: true }), U.default = void 0;
    var A = { init: function(i) {
      var o = O.default.Element, s = i.navigator || {};
      A.supportsTouch = "ontouchstart" in i || u.default.func(i.DocumentTouch) && O.default.document instanceof i.DocumentTouch, A.supportsPointerEvent = s.pointerEnabled !== false && !!O.default.PointerEvent, A.isIOS = /iP(hone|od|ad)/.test(s.platform), A.isIOS7 = /iP(hone|od|ad)/.test(s.platform) && /OS 7[^\d]/.test(s.appVersion), A.isIe9 = /MSIE 9/.test(s.userAgent), A.isOperaMobile = s.appName === "Opera" && A.supportsTouch && /Presto/.test(s.userAgent), A.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", A.pEventTypes = A.supportsPointerEvent ? O.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, A.wheelEvent = O.default.document && "onmousewheel" in O.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, J = A;
    U.default = J;
    var R = {};
    function j(i) {
      var o = i.parentNode;
      if (u.default.docFrag(o)) {
        for (; (o = o.host) && u.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(j, "j");
    c(j, "P");
    function W(i, o) {
      return r.window !== r.realWindow && (o = o.replace(/\/deep\//g, " ")), i[U.default.prefixedMatchesSelector](o);
    }
    __name(W, "W");
    c(W, "O"), Object.defineProperty(R, "__esModule", { value: true }), R.closest = function(i, o) {
      for (; u.default.element(i); ) {
        if (W(i, o))
          return i;
        i = j(i);
      }
      return null;
    }, R.getActualElement = function(i) {
      return i.correspondingUseElement || i;
    }, R.getElementClientRect = de, R.getElementRect = function(i) {
      var o = de(i);
      if (!U.default.isIOS7 && o) {
        var s = ne(r.getWindow(i));
        o.left += s.x, o.right += s.x, o.top += s.y, o.bottom += s.y;
      }
      return o;
    }, R.getPath = function(i) {
      for (var o = []; i; )
        o.push(i), i = j(i);
      return o;
    }, R.getScrollXY = ne, R.indexOfDeepestElement = function(i) {
      for (var o, s = [], l = 0; l < i.length; l++) {
        var d = i[l], m = i[o];
        if (d && l !== o)
          if (m) {
            var E = ee(d), g = ee(m);
            if (E !== d.ownerDocument)
              if (g !== d.ownerDocument)
                if (E !== g) {
                  s = s.length ? s : ie(m);
                  var x = void 0;
                  if (m instanceof O.default.HTMLElement && d instanceof O.default.SVGElement && !(d instanceof O.default.SVGSVGElement)) {
                    if (d === g)
                      continue;
                    x = d.ownerSVGElement;
                  } else
                    x = d;
                  for (var T = ie(x, m.ownerDocument), I = 0; T[I] && T[I] === s[I]; )
                    I++;
                  var P = [T[I - 1], T[I], s[I]];
                  if (P[0])
                    for (var D = P[0].lastChild; D; ) {
                      if (D === P[1]) {
                        o = l, s = T;
                        break;
                      }
                      if (D === P[2])
                        break;
                      D = D.previousSibling;
                    }
                } else
                  G = d, _ = m, (parseInt(r.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(r.getWindow(_).getComputedStyle(_).zIndex, 10) || 0) && (o = l);
              else
                o = l;
          } else
            o = l;
      }
      var G, _;
      return o;
    }, R.matchesSelector = W, R.matchesUpTo = function(i, o, s) {
      for (; u.default.element(i); ) {
        if (W(i, o))
          return true;
        if ((i = j(i)) === s)
          return W(i, o);
      }
      return false;
    }, R.nodeContains = function(i, o) {
      if (i.contains)
        return i.contains(o);
      for (; o; ) {
        if (o === i)
          return true;
        o = o.parentNode;
      }
      return false;
    }, R.parentNode = j, R.trySelector = function(i) {
      return !!u.default.string(i) && (O.default.document.querySelector(i), true);
    };
    var ee = c(function(i) {
      return i.parentNode || i.host;
    }, "E");
    function ie(i, o) {
      for (var s, l = [], d = i; (s = ee(d)) && d !== o && s !== d.ownerDocument; )
        l.unshift(d), d = s;
      return l;
    }
    __name(ie, "ie");
    c(ie, "S");
    function ne(i) {
      return { x: (i = i || r.window).scrollX || i.document.documentElement.scrollLeft, y: i.scrollY || i.document.documentElement.scrollTop };
    }
    __name(ne, "ne");
    c(ne, "T");
    function de(i) {
      var o = i instanceof O.default.SVGElement ? i.getBoundingClientRect() : i.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(de, "de");
    c(de, "j");
    var V = {};
    Object.defineProperty(V, "__esModule", { value: true }), V.default = function(i, o) {
      for (var s in o)
        i[s] = o[s];
      return i;
    };
    var ce = {};
    function Ne(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Ne, "Ne");
    c(Ne, "I");
    function Ye(i, o, s) {
      return i === "parent" ? (0, R.parentNode)(s) : i === "self" ? o.getRect(s) : (0, R.closest)(s, i);
    }
    __name(Ye, "Ye");
    c(Ye, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.addEdges = function(i, o, s) {
      i.left && (o.left += s.x), i.right && (o.right += s.x), i.top && (o.top += s.y), i.bottom && (o.bottom += s.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ce.getStringOptionResult = Ye, ce.rectToXY = function(i) {
      return i && { x: "x" in i ? i.x : i.left, y: "y" in i ? i.y : i.top };
    }, ce.resolveRectLike = function(i, o, s, l) {
      var d, m = i;
      return u.default.string(m) ? m = Ye(m, o, s) : u.default.func(m) && (m = m.apply(void 0, function(E) {
        if (Array.isArray(E))
          return Ne(E);
      }(d = l) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(d) || function(E, g) {
        if (E) {
          if (typeof E == "string")
            return Ne(E, g);
          var x = Object.prototype.toString.call(E).slice(8, -1);
          return x === "Object" && E.constructor && (x = E.constructor.name), x === "Map" || x === "Set" ? Array.from(E) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? Ne(E, g) : void 0;
        }
      }(d) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), u.default.element(m) && (m = (0, R.getElementRect)(m)), m;
    }, ce.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, V.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, ce.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, V.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    };
    var He = {};
    Object.defineProperty(He, "__esModule", { value: true }), He.default = function(i, o, s) {
      var l = i.options[s], d = l && l.origin || i.options.origin, m = (0, ce.resolveRectLike)(d, i, o, [i && o]);
      return (0, ce.rectToXY)(m) || { x: 0, y: 0 };
    };
    var me = {};
    function et(i) {
      return i.trim().split(/ +/);
    }
    __name(et, "et");
    c(et, "C"), Object.defineProperty(me, "__esModule", { value: true }), me.default = c(/* @__PURE__ */ __name(function i(o, s, l) {
      if (l = l || {}, u.default.string(o) && o.search(" ") !== -1 && (o = et(o)), u.default.array(o))
        return o.reduce(function(x, T) {
          return (0, V.default)(x, i(T, s, l));
        }, l);
      if (u.default.object(o) && (s = o, o = ""), u.default.func(s))
        l[o] = l[o] || [], l[o].push(s);
      else if (u.default.array(s))
        for (var d = 0; d < s.length; d++) {
          var m;
          m = s[d], i(o, m, l);
        }
      else if (u.default.object(s))
        for (var E in s) {
          var g = et(E).map(function(x) {
            return "".concat(o).concat(x);
          });
          i(g, s[E], l);
        }
      return l;
    }, "i"), "t");
    var ot = {};
    Object.defineProperty(ot, "__esModule", { value: true }), ot.default = void 0, ot.default = function(i, o) {
      return Math.sqrt(i * i + o * o);
    };
    var or = {};
    Object.defineProperty(or, "__esModule", { value: true }), or.default = function(i, o) {
      i.__set || (i.__set = {});
      var s = c(function(d) {
        typeof i[d] != "function" && d !== "__set" && Object.defineProperty(i, d, { get: function() {
          return d in i.__set ? i.__set[d] : i.__set[d] = o[d];
        }, set: function(m) {
          i.__set[d] = m;
        }, configurable: true });
      }, "n");
      for (var l in o)
        s(l);
      return i;
    };
    var K = {};
    function gr(i) {
      return i instanceof O.default.Event || i instanceof O.default.Touch;
    }
    __name(gr, "gr");
    c(gr, "B");
    function zt(i, o, s) {
      return i = i || "page", (s = s || {}).x = o[i + "X"], s.y = o[i + "Y"], s;
    }
    __name(zt, "zt");
    c(zt, "Y");
    function jt(i, o) {
      return o = o || { x: 0, y: 0 }, U.default.isOperaMobile && gr(i) ? (zt("screen", i, o), o.x += window.scrollX, o.y += window.scrollY) : zt("page", i, o), o;
    }
    __name(jt, "jt");
    c(jt, "W");
    function ar(i, o) {
      return o = o || {}, U.default.isOperaMobile && gr(i) ? zt("screen", i, o) : zt("client", i, o), o;
    }
    __name(ar, "ar");
    c(ar, "L");
    function br(i) {
      var o = [];
      return u.default.array(i) ? (o[0] = i[0], o[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o[0] = i.touches[0], o[1] = i.changedTouches[0]) : i.touches.length === 0 && (o[0] = i.changedTouches[0], o[1] = i.changedTouches[1]) : (o[0] = i.touches[0], o[1] = i.touches[1]), o;
    }
    __name(br, "br");
    c(br, "U");
    function sr(i) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, s = 0; s < i.length; s++) {
        var l = i[s];
        for (var d in o)
          o[d] += l[d];
      }
      for (var m in o)
        o[m] /= i.length;
      return o;
    }
    __name(sr, "sr");
    c(sr, "V"), Object.defineProperty(K, "__esModule", { value: true }), K.coordsToEvent = function(i) {
      return { coords: i, get page() {
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
    }, K.copyCoords = function(i, o) {
      i.page = i.page || {}, i.page.x = o.page.x, i.page.y = o.page.y, i.client = i.client || {}, i.client.x = o.client.x, i.client.y = o.client.y, i.timeStamp = o.timeStamp;
    }, K.getClientXY = ar, K.getEventTargets = function(i) {
      var o = u.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [R.getActualElement(o ? o[0] : i.target), R.getActualElement(i.currentTarget)];
    }, K.getPageXY = jt, K.getPointerId = function(i) {
      return u.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, K.getPointerType = function(i) {
      return u.default.string(i.pointerType) ? i.pointerType : u.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof O.default.Touch ? "touch" : "mouse";
    }, K.getTouchPair = br, K.getXY = zt, K.isNativePointer = gr, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.pointerAverage = sr, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return or.default;
    } }), K.setCoordDeltas = function(i, o, s) {
      i.page.x = s.page.x - o.page.x, i.page.y = s.page.y - o.page.y, i.client.x = s.client.x - o.client.x, i.client.y = s.client.y - o.client.y, i.timeStamp = s.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(i, o) {
      var s = Math.max(o.timeStamp / 1e3, 1e-3);
      i.page.x = o.page.x / s, i.page.y = o.page.y / s, i.client.x = o.client.x / s, i.client.y = o.client.y / s, i.timeStamp = s;
    }, K.setCoords = function(i, o, s) {
      var l = o.length > 1 ? sr(o) : o[0];
      jt(l, i.page), ar(l, i.client), i.timeStamp = s;
    }, K.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, K.touchAngle = function(i, o) {
      var s = o + "X", l = o + "Y", d = br(i), m = d[1][s] - d[0][s], E = d[1][l] - d[0][l];
      return 180 * Math.atan2(E, m) / Math.PI;
    }, K.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o = br(i), s = Math.min(o[0].pageX, o[1].pageX), l = Math.min(o[0].pageY, o[1].pageY), d = Math.max(o[0].pageX, o[1].pageX), m = Math.max(o[0].pageY, o[1].pageY);
      return { x: s, y: l, left: s, top: l, right: d, bottom: m, width: d - s, height: m - l };
    }, K.touchDistance = function(i, o) {
      var s = o + "X", l = o + "Y", d = br(i), m = d[0][s] - d[1][s], E = d[0][l] - d[1][l];
      return (0, ot.default)(m, E);
    };
    var er = {};
    function Or(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Or, "Or");
    c(Or, "q");
    function Gr(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Gr, "Gr");
    c(Gr, "G"), Object.defineProperty(er, "__esModule", { value: true }), er.BaseEvent = void 0;
    var vn = function() {
      function i(l) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Gr(this, "immediatePropagationStopped", false), Gr(this, "propagationStopped", false), this._interaction = l;
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Or(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    er.BaseEvent = vn, Object.defineProperty(vn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Ie = {};
    Object.defineProperty(Ie, "__esModule", { value: true }), Ie.remove = Ie.merge = Ie.from = Ie.findIndex = Ie.find = Ie.contains = void 0, Ie.contains = function(i, o) {
      return i.indexOf(o) !== -1;
    }, Ie.remove = function(i, o) {
      return i.splice(i.indexOf(o), 1);
    };
    var mn = c(function(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        i.push(l);
      }
      return i;
    }, "K");
    Ie.merge = mn, Ie.from = function(i) {
      return mn([], i);
    };
    var gn = c(function(i, o) {
      for (var s = 0; s < i.length; s++)
        if (o(i[s], s, i))
          return s;
      return -1;
    }, "Z");
    Ie.findIndex = gn, Ie.find = function(i, o) {
      return i[gn(i, o)];
    };
    var Rt = {};
    function Lr(i) {
      return Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Lr(i);
    }
    __name(Lr, "Lr");
    c(Lr, "Q");
    function Zn(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Zn, "Zn");
    c(Zn, "tt");
    function Kr(i, o) {
      return Kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, Kr(i, o);
    }
    __name(Kr, "Kr");
    c(Kr, "et");
    function yr(i, o) {
      if (o && (Lr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ct(i);
    }
    __name(yr, "yr");
    c(yr, "nt");
    function Ct(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Ct, "Ct");
    c(Ct, "rt");
    function Mr(i) {
      return Mr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Mr(i);
    }
    __name(Mr, "Mr");
    c(Mr, "ot");
    function Ht(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Ht, "Ht");
    c(Ht, "it"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.DropEvent = void 0;
    var bn = function(i) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && Kr(g, x);
      })(E, i);
      var o, s, l, d, m = (l = E, d = function() {
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
        var g, x = Mr(l);
        if (d) {
          var T = Mr(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return yr(this, g);
      });
      function E(g, x, T) {
        var I;
        (function(_, $) {
          if (!(_ instanceof $))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Ht(Ct(I = m.call(this, x._interaction)), "dropzone", void 0), Ht(Ct(I), "dragEvent", void 0), Ht(Ct(I), "relatedTarget", void 0), Ht(Ct(I), "draggable", void 0), Ht(Ct(I), "propagationStopped", false), Ht(Ct(I), "immediatePropagationStopped", false);
        var P = T === "dragleave" ? g.prev : g.cur, D = P.element, G = P.dropzone;
        return I.type = T, I.target = D, I.currentTarget = D, I.dropzone = G, I.dragEvent = x, I.relatedTarget = x.target, I.draggable = x.interactable, I.timeStamp = x.timeStamp, I;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (s = [{ key: "reject", value: function() {
        var g = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var T = x.activeDrops, I = Ie.findIndex(T, function(D) {
              var G = D.dropzone, _ = D.element;
              return G === g.dropzone && _ === g.target;
            });
            x.activeDrops.splice(I, 1);
            var P = new E(x, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new E(x, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Zn(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(er.BaseEvent);
    Rt.DropEvent = bn;
    var jr = {};
    function yn(i, o) {
      for (var s = 0; s < i.slice().length; s++) {
        var l = i.slice()[s], d = l.dropzone, m = l.element;
        o.dropzone = d, o.target = m, d.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(yn, "yn");
    c(yn, "lt");
    function en(i, o) {
      for (var s = function(m, E) {
        for (var g = m.interactables, x = [], T = 0; T < g.list.length; T++) {
          var I = g.list[T];
          if (I.options.drop.enabled) {
            var P = I.options.drop.accept;
            if (!(u.default.element(P) && P !== E || u.default.string(P) && !R.matchesSelector(E, P) || u.default.func(P) && !P({ dropzone: I, draggableElement: E })))
              for (var D = u.default.string(I.target) ? I._context.querySelectorAll(I.target) : u.default.array(I.target) ? I.target : [I.target], G = 0; G < D.length; G++) {
                var _ = D[G];
                _ !== E && x.push({ dropzone: I, element: _, rect: I.getRect(_) });
              }
          }
        }
        return x;
      }(i, o), l = 0; l < s.length; l++) {
        var d = s[l];
        d.rect = d.dropzone.getRect(d.element);
      }
      return s;
    }
    __name(en, "en");
    c(en, "ut");
    function wn(i, o, s) {
      for (var l = i.dropState, d = i.interactable, m = i.element, E = [], g = 0; g < l.activeDrops.length; g++) {
        var x = l.activeDrops[g], T = x.dropzone, I = x.element, P = x.rect;
        E.push(T.dropCheck(o, s, d, m, I, P) ? I : null);
      }
      var D = R.indexOfDeepestElement(E);
      return l.activeDrops[D] || null;
    }
    __name(wn, "wn");
    c(wn, "ct");
    function Oi(i, o, s) {
      var l = i.dropState, d = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return s.type === "dragstart" && (d.activate = new Rt.DropEvent(l, s, "dropactivate"), d.activate.target = null, d.activate.dropzone = null), s.type === "dragend" && (d.deactivate = new Rt.DropEvent(l, s, "dropdeactivate"), d.deactivate.target = null, d.deactivate.dropzone = null), l.rejected || (l.cur.element !== l.prev.element && (l.prev.dropzone && (d.leave = new Rt.DropEvent(l, s, "dragleave"), s.dragLeave = d.leave.target = l.prev.element, s.prevDropzone = d.leave.dropzone = l.prev.dropzone), l.cur.dropzone && (d.enter = new Rt.DropEvent(l, s, "dragenter"), s.dragEnter = l.cur.element, s.dropzone = l.cur.dropzone)), s.type === "dragend" && l.cur.dropzone && (d.drop = new Rt.DropEvent(l, s, "drop"), s.dropzone = l.cur.dropzone, s.relatedTarget = l.cur.element), s.type === "dragmove" && l.cur.dropzone && (d.move = new Rt.DropEvent(l, s, "dropmove"), d.move.dragmove = s, s.dropzone = l.cur.dropzone)), d;
    }
    __name(Oi, "Oi");
    c(Oi, "ft");
    function Mi(i, o) {
      var s = i.dropState, l = s.activeDrops, d = s.cur, m = s.prev;
      o.leave && m.dropzone.fire(o.leave), o.enter && d.dropzone.fire(o.enter), o.move && d.dropzone.fire(o.move), o.drop && d.dropzone.fire(o.drop), o.deactivate && yn(l, o.deactivate), s.prev.dropzone = d.dropzone, s.prev.element = d.element;
    }
    __name(Mi, "Mi");
    c(Mi, "dt");
    function Ro(i, o) {
      var s = i.interaction, l = i.iEvent, d = i.event;
      if (l.type === "dragmove" || l.type === "dragend") {
        var m = s.dropState;
        o.dynamicDrop && (m.activeDrops = en(o, s.element));
        var E = l, g = wn(s, E, d);
        m.rejected = m.rejected && !!g && g.dropzone === m.cur.dropzone && g.element === m.cur.element, m.cur.dropzone = g && g.dropzone, m.cur.element = g && g.element, m.events = Oi(s, 0, E);
      }
    }
    __name(Ro, "Ro");
    c(Ro, "pt"), Object.defineProperty(jr, "__esModule", { value: true }), jr.default = void 0;
    var _o = { id: "actions/drop", install: function(i) {
      var o = i.actions, s = i.interactStatic, l = i.Interactable, d = i.defaults;
      i.usePlugin(f.default), l.prototype.dropzone = function(m) {
        return function(E, g) {
          if (u.default.object(g)) {
            if (E.options.drop.enabled = g.enabled !== false, g.listeners) {
              var x = (0, me.default)(g.listeners), T = Object.keys(x).reduce(function(I, P) {
                return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], I;
              }, {});
              E.off(E.options.drop.listeners), E.on(T), E.options.drop.listeners = T;
            }
            return u.default.func(g.ondrop) && E.on("drop", g.ondrop), u.default.func(g.ondropactivate) && E.on("dropactivate", g.ondropactivate), u.default.func(g.ondropdeactivate) && E.on("dropdeactivate", g.ondropdeactivate), u.default.func(g.ondragenter) && E.on("dragenter", g.ondragenter), u.default.func(g.ondragleave) && E.on("dragleave", g.ondragleave), u.default.func(g.ondropmove) && E.on("dropmove", g.ondropmove), /^(pointer|center)$/.test(g.overlap) ? E.options.drop.overlap = g.overlap : u.default.number(g.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, g.overlap), 0)), "accept" in g && (E.options.drop.accept = g.accept), "checker" in g && (E.options.drop.checker = g.checker), E;
          }
          return u.default.bool(g) ? (E.options.drop.enabled = g, E) : E.options.drop;
        }(this, m);
      }, l.prototype.dropCheck = function(m, E, g, x, T, I) {
        return function(P, D, G, _, $, X, q) {
          var re = false;
          if (!(q = q || P.getRect(X)))
            return !!P.options.drop.checker && P.options.drop.checker(D, G, re, P, X, _, $);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var fe = (0, He.default)(_, $, "drag"), Pe = K.getPageXY(D);
            Pe.x += fe.x, Pe.y += fe.y;
            var Be = Pe.x > q.left && Pe.x < q.right, Se = Pe.y > q.top && Pe.y < q.bottom;
            re = Be && Se;
          }
          var Le = _.getRect($);
          if (Le && oe === "center") {
            var cr = Le.left + Le.width / 2, qr = Le.top + Le.height / 2;
            re = cr >= q.left && cr <= q.right && qr >= q.top && qr <= q.bottom;
          }
          return Le && u.default.number(oe) && (re = Math.max(0, Math.min(q.right, Le.right) - Math.max(q.left, Le.left)) * Math.max(0, Math.min(q.bottom, Le.bottom) - Math.max(q.top, Le.top)) / (Le.width * Le.height) >= oe), P.options.drop.checker && (re = P.options.drop.checker(D, G, re, P, X, _, $)), re;
        }(this, m, E, g, x, T, I);
      }, s.dynamicDrop = function(m) {
        return u.default.bool(m) ? (i.dynamicDrop = m, s) : i.dynamicDrop;
      }, (0, V.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", i.dynamicDrop = false, d.actions.drop = _o.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o = i.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o) {
      var s = i.interaction, l = (i.event, i.iEvent);
      if (s.prepared.name === "drag") {
        var d = s.dropState;
        d.activeDrops = null, d.events = null, d.activeDrops = en(o, s.element), d.events = Oi(s, 0, l), d.events.activate && (yn(d.activeDrops, d.events.activate), o.fire("actions/drop:start", { interaction: s, dragEvent: l }));
      }
    }, "interactions:action-move": Ro, "interactions:after-action-move": function(i, o) {
      var s = i.interaction, l = i.iEvent;
      s.prepared.name === "drag" && (Mi(s, s.dropState.events), o.fire("actions/drop:move", { interaction: s, dragEvent: l }), s.dropState.events = {});
    }, "interactions:action-end": function(i, o) {
      if (i.interaction.prepared.name === "drag") {
        var s = i.interaction, l = i.iEvent;
        Ro(i, o), Mi(s, s.dropState.events), o.fire("actions/drop:end", { interaction: s, dragEvent: l });
      }
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var s = o.dropState;
        s && (s.activeDrops = null, s.events = null, s.cur.dropzone = null, s.cur.element = null, s.prev.dropzone = null, s.prev.element = null, s.rejected = false);
      }
    } }, getActiveDrops: en, getDrop: wn, getDropEvents: Oi, fireDropEvents: Mi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, vs = _o;
    jr.default = vs;
    var N = {};
    function te(i) {
      var o = i.interaction, s = i.iEvent, l = i.phase;
      if (o.prepared.name === "gesture") {
        var d = o.pointers.map(function(T) {
          return T.pointer;
        }), m = l === "start", E = l === "end", g = o.interactable.options.deltaSource;
        if (s.touches = [d[0], d[1]], m)
          s.distance = K.touchDistance(d, g), s.box = K.touchBBox(d), s.scale = 1, s.ds = 0, s.angle = K.touchAngle(d, g), s.da = 0, o.gesture.startDistance = s.distance, o.gesture.startAngle = s.angle;
        else if (E) {
          var x = o.prevEvent;
          s.distance = x.distance, s.box = x.box, s.scale = x.scale, s.ds = 0, s.angle = x.angle, s.da = 0;
        } else
          s.distance = K.touchDistance(d, g), s.box = K.touchBBox(d), s.scale = s.distance / o.gesture.startDistance, s.angle = K.touchAngle(d, g), s.ds = s.scale - o.gesture.scale, s.da = s.angle - o.gesture.angle;
        o.gesture.distance = s.distance, o.gesture.angle = s.angle, u.default.number(s.scale) && s.scale !== 1 / 0 && !isNaN(s.scale) && (o.gesture.scale = s.scale);
      }
    }
    __name(te, "te");
    c(te, "yt"), Object.defineProperty(N, "__esModule", { value: true }), N.default = void 0;
    var ae = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var o = i.actions, s = i.Interactable, l = i.defaults;
      s.prototype.gesturable = function(d) {
        return u.default.object(d) ? (this.options.gesture.enabled = d.enabled !== false, this.setPerAction("gesture", d), this.setOnEvents("gesture", d), this) : u.default.bool(d) ? (this.options.gesture.enabled = d, this) : this.options.gesture;
      }, o.map.gesture = ae, o.methodDict.gesture = "gesturable", l.actions.gesture = ae.defaults;
    }, listeners: { "interactions:action-start": te, "interactions:action-move": te, "interactions:action-end": te, "interactions:new": function(i) {
      i.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(i) {
      if (!(i.interaction.pointers.length < 2)) {
        var o = i.interactable.options.gesture;
        if (o && o.enabled)
          return i.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, Ae = ae;
    N.default = Ae;
    var ge = {};
    function gt(i, o, s, l, d, m, E) {
      if (!o)
        return false;
      if (o === true) {
        var g = u.default.number(m.width) ? m.width : m.right - m.left, x = u.default.number(m.height) ? m.height : m.bottom - m.top;
        if (E = Math.min(E, Math.abs((i === "left" || i === "right" ? g : x) / 2)), g < 0 && (i === "left" ? i = "right" : i === "right" && (i = "left")), x < 0 && (i === "top" ? i = "bottom" : i === "bottom" && (i = "top")), i === "left") {
          var T = g >= 0 ? m.left : m.right;
          return s.x < T + E;
        }
        if (i === "top") {
          var I = x >= 0 ? m.top : m.bottom;
          return s.y < I + E;
        }
        if (i === "right")
          return s.x > (g >= 0 ? m.right : m.left) - E;
        if (i === "bottom")
          return s.y > (x >= 0 ? m.bottom : m.top) - E;
      }
      return !!u.default.element(l) && (u.default.element(o) ? o === l : R.matchesUpTo(l, o, d));
    }
    __name(gt, "gt");
    c(gt, "wt");
    function _t(i) {
      var o = i.iEvent, s = i.interaction;
      if (s.prepared.name === "resize" && s.resizeAxes) {
        var l = o;
        s.interactable.options.resize.square ? (s.resizeAxes === "y" ? l.delta.x = l.delta.y : l.delta.y = l.delta.x, l.axes = "xy") : (l.axes = s.resizeAxes, s.resizeAxes === "x" ? l.delta.y = 0 : s.resizeAxes === "y" && (l.delta.x = 0));
      }
    }
    __name(_t, "_t");
    c(_t, "_t"), Object.defineProperty(ge, "__esModule", { value: true }), ge.default = void 0;
    var Tt = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o = i.actions, s = i.browser, l = i.Interactable, d = i.defaults;
      Tt.cursors = function(m) {
        return m.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(s), Tt.defaultMargin = s.supportsTouch || s.supportsPointerEvent ? 20 : 10, l.prototype.resizable = function(m) {
        return function(E, g, x) {
          return u.default.object(g) ? (E.options.resize.enabled = g.enabled !== false, E.setPerAction("resize", g), E.setOnEvents("resize", g), u.default.string(g.axis) && /^x$|^y$|^xy$/.test(g.axis) ? E.options.resize.axis = g.axis : g.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), u.default.bool(g.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = g.preserveAspectRatio : u.default.bool(g.square) && (E.options.resize.square = g.square), E) : u.default.bool(g) ? (E.options.resize.enabled = g, E) : E.options.resize;
        }(this, m, i);
      }, o.map.resize = Tt, o.methodDict.resize = "resizable", d.actions.resize = Tt.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o) {
        var s = o.iEvent, l = o.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var d = s, m = l.rect;
          l._rects = { start: (0, V.default)({}, m), corrected: (0, V.default)({}, m), previous: (0, V.default)({}, m), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, d.edges = l.prepared.edges, d.rect = l._rects.corrected, d.deltaRect = l._rects.delta;
        }
      })(i), _t(i);
    }, "interactions:action-move": function(i) {
      (function(o) {
        var s = o.iEvent, l = o.interaction;
        if (l.prepared.name === "resize" && l.prepared.edges) {
          var d = s, m = l.interactable.options.resize.invert, E = m === "reposition" || m === "negate", g = l.rect, x = l._rects, T = x.start, I = x.corrected, P = x.delta, D = x.previous;
          if ((0, V.default)(D, I), E) {
            if ((0, V.default)(I, g), m === "reposition") {
              if (I.top > I.bottom) {
                var G = I.top;
                I.top = I.bottom, I.bottom = G;
              }
              if (I.left > I.right) {
                var _ = I.left;
                I.left = I.right, I.right = _;
              }
            }
          } else
            I.top = Math.min(g.top, T.bottom), I.bottom = Math.max(g.bottom, T.top), I.left = Math.min(g.left, T.right), I.right = Math.max(g.right, T.left);
          for (var $ in I.width = I.right - I.left, I.height = I.bottom - I.top, I)
            P[$] = I[$] - D[$];
          d.edges = l.prepared.edges, d.rect = I, d.deltaRect = P;
        }
      })(i), _t(i);
    }, "interactions:action-end": function(i) {
      var o = i.iEvent, s = i.interaction;
      if (s.prepared.name === "resize" && s.prepared.edges) {
        var l = o;
        l.edges = s.prepared.edges, l.rect = s._rects.corrected, l.deltaRect = s._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var o = i.interaction, s = i.interactable, l = i.element, d = i.rect, m = i.buttons;
      if (d) {
        var E = (0, V.default)({}, o.coords.cur.page), g = s.options.resize;
        if (g && g.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || m & g.mouseButtons)) {
          if (u.default.object(g.edges)) {
            var x = { left: false, right: false, top: false, bottom: false };
            for (var T in x)
              x[T] = gt(T, g.edges[T], E, o._latestPointer.eventTarget, l, d, g.margin || Tt.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (i.action = { name: "resize", edges: x });
          } else {
            var I = g.axis !== "y" && E.x > d.right - Tt.defaultMargin, P = g.axis !== "x" && E.y > d.bottom - Tt.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o = i.edges, s = i.axis, l = i.name, d = Tt.cursors, m = null;
      if (s)
        m = d[l + s];
      else if (o) {
        for (var E = "", g = ["top", "bottom", "left", "right"], x = 0; x < g.length; x++) {
          var T = g[x];
          o[T] && (E += T);
        }
        m = d[E];
      }
      return m;
    }, defaultMargin: null }, ko = Tt;
    ge.default = ko;
    var lr = {};
    Object.defineProperty(lr, "__esModule", { value: true }), lr.default = void 0;
    var Ii = { id: "actions", install: function(i) {
      i.usePlugin(N.default), i.usePlugin(ge.default), i.usePlugin(f.default), i.usePlugin(jr.default);
    } };
    lr.default = Ii;
    var Ot = {};
    Object.defineProperty(Ot, "__esModule", { value: true }), Ot.default = void 0;
    var Mt, Hr, Qn = 0, Jn = { request: function(i) {
      return Mt(i);
    }, cancel: function(i) {
      return Hr(i);
    }, init: function(i) {
      if (Mt = i.requestAnimationFrame, Hr = i.cancelAnimationFrame, !Mt)
        for (var o = ["ms", "moz", "webkit", "o"], s = 0; s < o.length; s++) {
          var l = o[s];
          Mt = i["".concat(l, "RequestAnimationFrame")], Hr = i["".concat(l, "CancelAnimationFrame")] || i["".concat(l, "CancelRequestAnimationFrame")];
        }
      Mt = Mt && Mt.bind(i), Hr = Hr && Hr.bind(i), Mt || (Mt = c(function(d) {
        var m = Date.now(), E = Math.max(0, 16 - (m - Qn)), g = i.setTimeout(function() {
          d(m + E);
        }, E);
        return Qn = m + E, g;
      }, "jt"), Hr = c(function(d) {
        return clearTimeout(d);
      }, "Mt"));
    } };
    Ot.default = Jn;
    var tn = {};
    Object.defineProperty(tn, "__esModule", { value: true }), tn.default = void 0, tn.getContainer = Do, tn.getScroll = Ai, tn.getScrollSize = function(i) {
      return u.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, tn.getScrollSizeDelta = function(i, o) {
      var s = i.interaction, l = i.element, d = s && s.interactable.options[s.prepared.name].autoScroll;
      if (!d || !d.enabled)
        return o(), { x: 0, y: 0 };
      var m = Do(d.container, s.interactable, l), E = Ai(m);
      o();
      var g = Ai(m);
      return { x: g.x - E.x, y: g.y - E.y };
    };
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      le.isScrolling = true, Ot.default.cancel(le.i), i.autoScroll = le, le.interaction = i, le.prevTime = le.now(), le.i = Ot.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), Ot.default.cancel(le.i);
    }, scroll: function() {
      var i = le.interaction, o = i.interactable, s = i.element, l = i.prepared.name, d = o.options[l].autoScroll, m = Do(d.container, o, s), E = le.now(), g = (E - le.prevTime) / 1e3, x = d.speed * g;
      if (x >= 1) {
        var T = { x: le.x * x, y: le.y * x };
        if (T.x || T.y) {
          var I = Ai(m);
          u.default.window(m) ? m.scrollBy(T.x, T.y) : m && (m.scrollLeft += T.x, m.scrollTop += T.y);
          var P = Ai(m), D = { x: P.x - I.x, y: P.y - I.y };
          (D.x || D.y) && o.fire({ type: "autoscroll", target: s, interactable: o, delta: D, interaction: i, container: m });
        }
        le.prevTime = E;
      }
      le.isScrolling && (Ot.default.cancel(le.i), le.i = Ot.default.request(le.scroll));
    }, check: function(i, o) {
      var s;
      return (s = i.options[o].autoScroll) == null ? void 0 : s.enabled;
    }, onInteractionMove: function(i) {
      var o = i.interaction, s = i.pointer;
      if (o.interacting() && le.check(o.interactable, o.prepared.name))
        if (o.simulation)
          le.x = le.y = 0;
        else {
          var l, d, m, E, g = o.interactable, x = o.element, T = o.prepared.name, I = g.options[T].autoScroll, P = Do(I.container, g, x);
          if (u.default.window(P))
            E = s.clientX < le.margin, l = s.clientY < le.margin, d = s.clientX > P.innerWidth - le.margin, m = s.clientY > P.innerHeight - le.margin;
          else {
            var D = R.getElementClientRect(P);
            E = s.clientX < D.left + le.margin, l = s.clientY < D.top + le.margin, d = s.clientX > D.right - le.margin, m = s.clientY > D.bottom - le.margin;
          }
          le.x = d ? 1 : E ? -1 : 0, le.y = m ? 1 : l ? -1 : 0, le.isScrolling || (le.margin = I.margin, le.speed = I.speed, le.start(o));
        }
    } };
    function Do(i, o, s) {
      return (u.default.string(i) ? (0, ce.getStringOptionResult)(i, o, s) : i) || (0, r.getWindow)(s);
    }
    __name(Do, "Do");
    c(Do, "zt");
    function Ai(i) {
      return u.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(Ai, "Ai");
    c(Ai, "Ct");
    var Nd = { id: "auto-scroll", install: function(i) {
      var o = i.defaults, s = i.actions;
      i.autoScroll = le, le.now = function() {
        return i.now();
      }, s.phaselessTypes.autoscroll = true, o.perAction.autoScroll = le.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoScroll = null;
    }, "interactions:destroy": function(i) {
      i.interaction.autoScroll = null, le.stop(), le.interaction && (le.interaction = null);
    }, "interactions:stop": le.stop, "interactions:action-move": function(i) {
      return le.onInteractionMove(i);
    } } }, Gd = Nd;
    tn.default = Gd;
    var tr = {};
    Object.defineProperty(tr, "__esModule", { value: true }), tr.copyAction = function(i, o) {
      return i.name = o.name, i.axis = o.axis, i.edges = o.edges, i;
    }, tr.sign = void 0, tr.warnOnce = function(i, o) {
      var s = false;
      return function() {
        return s || (r.window.console.warn(o), s = true), i.apply(this, arguments);
      };
    }, tr.sign = function(i) {
      return i >= 0 ? 1 : -1;
    };
    var No = {};
    function Ld(i) {
      return u.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(Ld, "Ld");
    c(Ld, "Yt");
    function jd(i) {
      return u.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(jd, "jd");
    c(jd, "Wt"), Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Hd = { id: "auto-start/interactableMethods", install: function(i) {
      var o = i.Interactable;
      o.prototype.getAction = function(s, l, d, m) {
        var E = function(g, x, T, I, P) {
          var D = g.getRect(I), G = { action: null, interactable: g, interaction: T, element: I, rect: D, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", G), G.action;
        }(this, l, d, m, i);
        return this.options.actionChecker ? this.options.actionChecker(s, l, E, this, m, d) : E;
      }, o.prototype.ignoreFrom = (0, tr.warnOnce)(function(s) {
        return this._backCompatOption("ignoreFrom", s);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, tr.warnOnce)(function(s) {
        return this._backCompatOption("allowFrom", s);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = jd, o.prototype.styleCursor = Ld;
    } };
    No.default = Hd;
    var Kn = {};
    function uu(i, o, s, l, d) {
      return o.testIgnoreAllow(o.options[i.name], s, l) && o.options[i.name].enabled && Go(o, s, i, d) ? i : null;
    }
    __name(uu, "uu");
    c(uu, "Vt");
    function Bd(i, o, s, l, d, m, E) {
      for (var g = 0, x = l.length; g < x; g++) {
        var T = l[g], I = d[g], P = T.getAction(o, s, i, I);
        if (P) {
          var D = uu(P, T, I, m, E);
          if (D)
            return { action: D, interactable: T, element: I };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Bd, "Bd");
    c(Bd, "Nt");
    function cu(i, o, s, l, d) {
      var m = [], E = [], g = l;
      function x(I) {
        m.push(I), E.push(g);
      }
      __name(x, "x");
      for (c(x, "u"); u.default.element(g); ) {
        m = [], E = [], d.interactables.forEachMatch(g, x);
        var T = Bd(i, o, s, m, E, l, d);
        if (T.action && !T.interactable.options[T.action.name].manualStart)
          return T;
        g = R.parentNode(g);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(cu, "cu");
    c(cu, "qt");
    function pu(i, o, s) {
      var l = o.action, d = o.interactable, m = o.element;
      l = l || { name: null }, i.interactable = d, i.element = m, (0, tr.copyAction)(i.prepared, l), i.rect = d && l.name ? d.getRect(m) : null, fu(i, s), s.fire("autoStart:prepared", { interaction: i });
    }
    __name(pu, "pu");
    c(pu, "Gt");
    function Go(i, o, s, l) {
      var d = i.options, m = d[s.name].max, E = d[s.name].maxPerElement, g = l.autoStart.maxInteractions, x = 0, T = 0, I = 0;
      if (!(m && E && g))
        return false;
      for (var P = 0; P < l.interactions.list.length; P++) {
        var D = l.interactions.list[P], G = D.prepared.name;
        if (D.interacting() && (++x >= g || D.interactable === i && ((T += G === s.name ? 1 : 0) >= m || D.element === o && (I++, G === s.name && I >= E))))
          return false;
      }
      return g > 0;
    }
    __name(Go, "Go");
    c(Go, "$t");
    function du(i, o) {
      return u.default.number(i) ? (o.autoStart.maxInteractions = i, this) : o.autoStart.maxInteractions;
    }
    __name(du, "du");
    c(du, "Ht");
    function ms(i, o, s) {
      var l = s.autoStart.cursorElement;
      l && l !== i && (l.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o, i.style.cursor = o, s.autoStart.cursorElement = o ? i : null;
    }
    __name(ms, "ms");
    c(ms, "Kt");
    function fu(i, o) {
      var s = i.interactable, l = i.element, d = i.prepared;
      if (i.pointerType === "mouse" && s && s.options.styleCursor) {
        var m = "";
        if (d.name) {
          var E = s.options[d.name].cursorChecker;
          m = u.default.func(E) ? E(d, s, l, i._interacting) : o.actions.map[d.name].getCursor(d);
        }
        ms(i.element, m || "", o);
      } else
        o.autoStart.cursorElement && ms(o.autoStart.cursorElement, "", o);
    }
    __name(fu, "fu");
    c(fu, "Zt"), Object.defineProperty(Kn, "__esModule", { value: true }), Kn.default = void 0;
    var $d = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o = i.interactStatic, s = i.defaults;
      i.usePlugin(No.default), s.base.actionChecker = null, s.base.styleCursor = true, (0, V.default)(s.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(l) {
        return du(l, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Go, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o) {
      var s = i.interaction, l = i.pointer, d = i.event, m = i.eventTarget;
      s.interacting() || pu(s, cu(s, l, d, m, o), o);
    }, "interactions:move": function(i, o) {
      (function(s, l) {
        var d = s.interaction, m = s.pointer, E = s.event, g = s.eventTarget;
        d.pointerType !== "mouse" || d.pointerIsDown || d.interacting() || pu(d, cu(d, m, E, g, l), l);
      })(i, o), function(s, l) {
        var d = s.interaction;
        if (d.pointerIsDown && !d.interacting() && d.pointerWasMoved && d.prepared.name) {
          l.fire("autoStart:before-start", s);
          var m = d.interactable, E = d.prepared.name;
          E && m && (m.options[E].manualStart || !Go(m, d.element, d.prepared, l) ? d.stop() : (d.start(d.prepared, m, d.element), fu(d, l)));
        }
      }(i, o);
    }, "interactions:stop": function(i, o) {
      var s = i.interaction, l = s.interactable;
      l && l.options.styleCursor && ms(s.element, "", o);
    } }, maxInteractions: du, withinInteractionLimit: Go, validateAction: uu }, qd = $d;
    Kn.default = qd;
    var Lo = {};
    Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var Fd = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o) {
      var s = i.interaction, l = i.eventTarget, d = i.dx, m = i.dy;
      if (s.prepared.name === "drag") {
        var E = Math.abs(d), g = Math.abs(m), x = s.interactable.options.drag, T = x.startAxis, I = E > g ? "x" : E < g ? "y" : "xy";
        if (s.prepared.axis = x.lockAxis === "start" ? I[0] : x.lockAxis, I !== "xy" && T !== "xy" && T !== I) {
          s.prepared.name = null;
          for (var P = l, D = function(_) {
            if (_ !== s.interactable) {
              var $ = s.interactable.options.drag;
              if (!$.manualStart && _.testIgnoreAllow($, P, l)) {
                var X = _.getAction(s.downPointer, s.downEvent, s, P);
                if (X && X.name === "drag" && function(q, re) {
                  if (!re)
                    return false;
                  var oe = re.options.drag.startAxis;
                  return q === "xy" || oe === "xy" || oe === q;
                }(I, _) && Kn.default.validateAction(X, _, P, l, o))
                  return _;
              }
            }
          }; u.default.element(P); ) {
            var G = o.interactables.forEachMatch(P, D);
            if (G) {
              s.prepared.name = "drag", s.interactable = G, s.element = P;
              break;
            }
            P = (0, R.parentNode)(P);
          }
        }
      }
    } } };
    Lo.default = Fd;
    var jo = {};
    function gs(i) {
      var o = i.prepared && i.prepared.name;
      if (!o)
        return null;
      var s = i.interactable.options;
      return s[o].hold || s[o].delay;
    }
    __name(gs, "gs");
    c(gs, "re"), Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0;
    var Wd = { id: "auto-start/hold", install: function(i) {
      var o = i.defaults;
      i.usePlugin(Kn.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var o = i.interaction, s = gs(o);
      s > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, s));
    }, "interactions:move": function(i) {
      var o = i.interaction, s = i.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !s && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var o = i.interaction;
      gs(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: gs }, Ud = Wd;
    jo.default = Ud;
    var Ho = {};
    Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var Vd = { id: "auto-start", install: function(i) {
      i.usePlugin(Kn.default), i.usePlugin(jo.default), i.usePlugin(Lo.default);
    } };
    Ho.default = Vd;
    var ei = {};
    function Yd(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : u.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Yd, "Yd");
    c(Yd, "ue");
    function Xd(i) {
      var o = i.interaction, s = i.event;
      o.interactable && o.interactable.checkAndPreventDefault(s);
    }
    __name(Xd, "Xd");
    c(Xd, "ce");
    function hu(i) {
      var o = i.Interactable;
      o.prototype.preventDefault = Yd, o.prototype.checkAndPreventDefault = function(s) {
        return function(l, d, m) {
          var E = l.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (d.events.supportsPassive && /^touch(start|move)$/.test(m.type)) {
                var g = (0, r.getWindow)(m.target).document, x = d.getDocOptions(g);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(m.type) || u.default.element(m.target) && (0, R.matchesSelector)(m.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || m.preventDefault();
            } else
              m.preventDefault();
        }(this, i, s);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(s) {
        for (var l = 0; l < i.interactions.list.length; l++) {
          var d = i.interactions.list[l];
          if (d.element && (d.element === s.target || (0, R.nodeContains)(d.element, s.target)))
            return void d.interactable.checkAndPreventDefault(s);
        }
      } });
    }
    __name(hu, "hu");
    c(hu, "fe"), Object.defineProperty(ei, "__esModule", { value: true }), ei.default = void 0, ei.install = hu;
    var Zd = { id: "core/interactablePreventDefault", install: hu, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o) {
      return i["interactions:".concat(o)] = Xd, i;
    }, {}) };
    ei.default = Zd;
    var bs = {};
    Object.defineProperty(bs, "__esModule", { value: true }), bs.default = void 0, bs.default = {};
    var Pi, ys = {};
    Object.defineProperty(ys, "__esModule", { value: true }), ys.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(Pi || (Pi = {})), Pi.touchAction, Pi.boxSizing, Pi.noListeners;
    var Qd = { id: "dev-tools", install: function() {
    } };
    ys.default = Qd;
    var xn = {};
    Object.defineProperty(xn, "__esModule", { value: true }), xn.default = c(/* @__PURE__ */ __name(function i(o) {
      var s = {};
      for (var l in o) {
        var d = o[l];
        u.default.plainObject(d) ? s[l] = i(d) : u.default.array(d) ? s[l] = Ie.from(d) : s[l] = d;
      }
      return s;
    }, "i"), "t");
    var En = {};
    function vu(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var d = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(s); !(x = (m = d.next()).done) && (g.push(m.value), !l || g.length !== l); x = true)
              ;
          } catch (I) {
            T = true, E = I;
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
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return mu(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? mu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(vu, "vu");
    c(vu, "be");
    function mu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(mu, "mu");
    c(mu, "xe");
    function Jd(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Jd, "Jd");
    c(Jd, "we");
    function Sn(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Sn, "Sn");
    c(Sn, "_e"), Object.defineProperty(En, "__esModule", { value: true }), En.default = void 0, En.getRectOffset = gu;
    var Kd = function() {
      function i(l) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Sn(this, "states", []), Sn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), Sn(this, "startDelta", void 0), Sn(this, "result", void 0), Sn(this, "endResult", void 0), Sn(this, "edges", void 0), Sn(this, "interaction", void 0), this.interaction = l, this.result = Bo();
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "start", value: function(l, d) {
        var m = l.phase, E = this.interaction, g = function(T) {
          var I = T.interactable.options[T.prepared.name], P = I.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(D) {
            var G = I[D];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(D) {
            return !!D;
          });
        }(E);
        this.prepareStates(g), this.edges = (0, V.default)({}, E.edges), this.startOffset = gu(E.rect, d), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: m, pageCoords: d, preEnd: false });
        return this.result = Bo(), this.startAll(x), this.result = this.setAll(x);
      } }, { key: "fillArg", value: function(l) {
        var d = this.interaction;
        return l.interaction = d, l.interactable = d.interactable, l.element = d.element, l.rect = l.rect || d.rect, l.edges = this.edges, l.startOffset = this.startOffset, l;
      } }, { key: "startAll", value: function(l) {
        for (var d = 0; d < this.states.length; d++) {
          var m = this.states[d];
          m.methods.start && (l.state = m, m.methods.start(l));
        }
      } }, { key: "setAll", value: function(l) {
        var d = l.phase, m = l.preEnd, E = l.skipModifiers, g = l.rect;
        l.coords = (0, V.default)({}, l.pageCoords), l.rect = (0, V.default)({}, g);
        for (var x = E ? this.states.slice(E) : this.states, T = Bo(l.coords, l.rect), I = 0; I < x.length; I++) {
          var P, D = x[I], G = D.options, _ = (0, V.default)({}, l.coords), $ = null;
          (P = D.methods) != null && P.set && this.shouldDo(G, m, d) && (l.state = D, $ = D.methods.set(l), ce.addEdges(this.interaction.edges, l.rect, { x: l.coords.x - _.x, y: l.coords.y - _.y })), T.eventProps.push($);
        }
        T.delta.x = l.coords.x - l.pageCoords.x, T.delta.y = l.coords.y - l.pageCoords.y, T.rectDelta.left = l.rect.left - g.left, T.rectDelta.right = l.rect.right - g.right, T.rectDelta.top = l.rect.top - g.top, T.rectDelta.bottom = l.rect.bottom - g.bottom;
        var X = this.result.coords, q = this.result.rect;
        if (X && q) {
          var re = T.rect.left !== q.left || T.rect.right !== q.right || T.rect.top !== q.top || T.rect.bottom !== q.bottom;
          T.changed = re || X.x !== T.coords.x || X.y !== T.coords.y;
        }
        return T;
      } }, { key: "applyToInteraction", value: function(l) {
        var d = this.interaction, m = l.phase, E = d.coords.cur, g = d.coords.start, x = this.result, T = this.startDelta, I = x.delta;
        m === "start" && (0, V.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[g, T], [E, I]].length; P++) {
          var D = vu([[g, T], [E, I]][P], 2), G = D[0], _ = D[1];
          G.page.x += _.x, G.page.y += _.y, G.client.x += _.x, G.client.y += _.y;
        }
        var $ = this.result.rectDelta, X = l.rect || d.rect;
        X.left += $.left, X.right += $.right, X.top += $.top, X.bottom += $.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(l) {
        var d = this.interaction, m = l.phase, E = l.preEnd, g = l.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: m, pageCoords: l.modifiedCoords || d.coords.cur.page }));
        if (this.result = x, !x.changed && (!g || g < this.states.length) && d.interacting())
          return false;
        if (l.modifiedCoords) {
          var T = d.coords.cur.page, I = { x: l.modifiedCoords.x - T.x, y: l.modifiedCoords.y - T.y };
          x.coords.x += I.x, x.coords.y += I.y, x.delta.x += I.x, x.delta.y += I.y;
        }
        this.applyToInteraction(l);
      } }, { key: "beforeEnd", value: function(l) {
        var d = l.interaction, m = l.event, E = this.states;
        if (E && E.length) {
          for (var g = false, x = 0; x < E.length; x++) {
            var T = E[x];
            l.state = T;
            var I = T.options, P = T.methods, D = P.beforeEnd && P.beforeEnd(l);
            if (D)
              return this.endResult = D, false;
            g = g || !g && this.shouldDo(I, true, l.phase, true);
          }
          g && d.move({ event: m, preEnd: true });
        }
      } }, { key: "stop", value: function(l) {
        var d = l.interaction;
        if (this.states && this.states.length) {
          var m = (0, V.default)({ states: this.states, interactable: d.interactable, element: d.element, rect: null }, l);
          this.fillArg(m);
          for (var E = 0; E < this.states.length; E++) {
            var g = this.states[E];
            m.state = g, g.methods.stop && g.methods.stop(m);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(l) {
        this.states = [];
        for (var d = 0; d < l.length; d++) {
          var m = l[d], E = m.options, g = m.methods, x = m.name;
          this.states.push({ options: E, methods: g, index: d, name: x });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(l) {
        var d = l.interaction, m = d.coords, E = d.rect, g = d.modification;
        if (g.result) {
          for (var x = g.startDelta, T = g.result, I = T.delta, P = T.rectDelta, D = [[m.start, x], [m.cur, I]], G = 0; G < D.length; G++) {
            var _ = vu(D[G], 2), $ = _[0], X = _[1];
            $.page.x -= X.x, $.page.y -= X.y, $.client.x -= X.x, $.client.y -= X.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(l, d, m, E) {
        return !(!l || l.enabled === false || E && !l.endOnly || l.endOnly && !d || m === "start" && !l.setStart);
      } }, { key: "copyFrom", value: function(l) {
        this.startOffset = l.startOffset, this.startDelta = l.startDelta, this.edges = l.edges, this.states = l.states.map(function(d) {
          return (0, xn.default)(d);
        }), this.result = Bo((0, V.default)({}, l.result.coords), (0, V.default)({}, l.result.rect));
      } }, { key: "destroy", value: function() {
        for (var l in this)
          this[l] = null;
      } }]) && Jd(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Bo(i, o) {
      return { rect: o, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Bo, "Bo");
    c(Bo, "Oe");
    function gu(i, o) {
      return i ? { left: o.x - i.left, top: o.y - i.top, right: i.right - o.x, bottom: i.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(gu, "gu");
    c(gu, "Ee"), En.default = Kd;
    var bt = {};
    function $o(i) {
      var o = i.iEvent, s = i.interaction.modification.result;
      s && (o.modifiers = s.eventProps);
    }
    __name($o, "$o");
    c($o, "Te"), Object.defineProperty(bt, "__esModule", { value: true }), bt.addEventModifiers = $o, bt.default = void 0, bt.makeModifier = function(i, o) {
      var s = i.defaults, l = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, d = c(function(m) {
        var E = m || {};
        for (var g in E.enabled = E.enabled !== false, s)
          g in E || (E[g] = s[g]);
        var x = { options: E, methods: l, name: o, enable: function() {
          return E.enabled = true, x;
        }, disable: function() {
          return E.enabled = false, x;
        } };
        return x;
      }, "o");
      return o && typeof o == "string" && (d._defaults = s, d._methods = l), d;
    };
    var ef = { id: "modifiers/base", before: ["actions"], install: function(i) {
      i.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.modification = new En.default(o);
    }, "interactions:before-action-start": function(i) {
      var o = i.interaction.modification;
      o.start(i, i.interaction.coords.start.page), i.interaction.edges = o.edges, o.applyToInteraction(i);
    }, "interactions:before-action-move": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:before-action-end": function(i) {
      return i.interaction.modification.beforeEnd(i);
    }, "interactions:action-start": $o, "interactions:action-move": $o, "interactions:action-end": $o, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } }, tf = ef;
    bt.default = tf;
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), zi.defaults = void 0, zi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ri = {};
    function ws(i) {
      return ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ws(i);
    }
    __name(ws, "ws");
    c(ws, "De");
    function rf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(rf, "rf");
    c(rf, "Ae");
    function xs(i, o) {
      return xs = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, xs(i, o);
    }
    __name(xs, "xs");
    c(xs, "ze");
    function nf(i, o) {
      if (o && (ws(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ge(i);
    }
    __name(nf, "nf");
    c(nf, "Ce");
    function Ge(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Ge, "Ge");
    c(Ge, "Re");
    function qo(i) {
      return qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, qo(i);
    }
    __name(qo, "qo");
    c(qo, "Fe");
    function qe(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(qe, "qe");
    c(qe, "Xe"), Object.defineProperty(Ri, "__esModule", { value: true }), Ri.InteractEvent = void 0;
    var bu = function(i) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && xs(g, x);
      })(E, i);
      var o, s, l, d, m = (l = E, d = function() {
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
        var g, x = qo(l);
        if (d) {
          var T = qo(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return nf(this, g);
      });
      function E(g, x, T, I, P, D, G) {
        var _;
        (function(Be, Se) {
          if (!(Be instanceof Se))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), qe(Ge(_ = m.call(this, g)), "relatedTarget", null), qe(Ge(_), "screenX", void 0), qe(Ge(_), "screenY", void 0), qe(Ge(_), "button", void 0), qe(Ge(_), "buttons", void 0), qe(Ge(_), "ctrlKey", void 0), qe(Ge(_), "shiftKey", void 0), qe(Ge(_), "altKey", void 0), qe(Ge(_), "metaKey", void 0), qe(Ge(_), "page", void 0), qe(Ge(_), "client", void 0), qe(Ge(_), "delta", void 0), qe(Ge(_), "rect", void 0), qe(Ge(_), "x0", void 0), qe(Ge(_), "y0", void 0), qe(Ge(_), "t0", void 0), qe(Ge(_), "dt", void 0), qe(Ge(_), "duration", void 0), qe(Ge(_), "clientX0", void 0), qe(Ge(_), "clientY0", void 0), qe(Ge(_), "velocity", void 0), qe(Ge(_), "speed", void 0), qe(Ge(_), "swipe", void 0), qe(Ge(_), "axes", void 0), qe(Ge(_), "preEnd", void 0), P = P || g.element;
        var $ = g.interactable, X = ($ && $.options || zi.defaults).deltaSource, q = (0, He.default)($, P, T), re = I === "start", oe = I === "end", fe = re ? Ge(_) : g.prevEvent, Pe = re ? g.coords.start : oe ? { page: fe.page, client: fe.client, timeStamp: g.coords.cur.timeStamp } : g.coords.cur;
        return _.page = (0, V.default)({}, Pe.page), _.client = (0, V.default)({}, Pe.client), _.rect = (0, V.default)({}, g.rect), _.timeStamp = Pe.timeStamp, oe || (_.page.x -= q.x, _.page.y -= q.y, _.client.x -= q.x, _.client.y -= q.y), _.ctrlKey = x.ctrlKey, _.altKey = x.altKey, _.shiftKey = x.shiftKey, _.metaKey = x.metaKey, _.button = x.button, _.buttons = x.buttons, _.target = P, _.currentTarget = P, _.preEnd = D, _.type = G || T + (I || ""), _.interactable = $, _.t0 = re ? g.pointers[g.pointers.length - 1].downTime : fe.t0, _.x0 = g.coords.start.page.x - q.x, _.y0 = g.coords.start.page.y - q.y, _.clientX0 = g.coords.start.client.x - q.x, _.clientY0 = g.coords.start.client.y - q.y, _.delta = re || oe ? { x: 0, y: 0 } : { x: _[X].x - fe[X].x, y: _[X].y - fe[X].y }, _.dt = g.coords.delta.timeStamp, _.duration = _.timeStamp - _.t0, _.velocity = (0, V.default)({}, g.coords.velocity[X]), _.speed = (0, ot.default)(_.velocity.x, _.velocity.y), _.swipe = oe || I === "inertiastart" ? _.getSwipe() : null, _;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (s = [{ key: "getSwipe", value: function() {
        var g = this._interaction;
        if (g.prevEvent.speed < 600 || this.timeStamp - g.prevEvent.timeStamp > 150)
          return null;
        var x = 180 * Math.atan2(g.prevEvent.velocityY, g.prevEvent.velocityX) / Math.PI;
        x < 0 && (x += 360);
        var T = 112.5 <= x && x < 247.5, I = 202.5 <= x && x < 337.5;
        return { up: I, down: !I && 22.5 <= x && x < 157.5, left: T, right: !T && (292.5 <= x || x < 67.5), angle: x, speed: g.prevEvent.speed, velocity: { x: g.prevEvent.velocityX, y: g.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && rf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(er.BaseEvent);
    Ri.InteractEvent = bu, Object.defineProperties(bu.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(i) {
      this.page.x = i;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(i) {
      this.page.y = i;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(i) {
      this.client.x = i;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(i) {
      this.client.y = i;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(i) {
      this.delta.x = i;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(i) {
      this.delta.y = i;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(i) {
      this.velocity.x = i;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(i) {
      this.velocity.y = i;
    } } });
    var _i = {};
    function yu(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(yu, "yu");
    c(yu, "We");
    function of(i, o, s) {
      return o && yu(i.prototype, o), s && yu(i, s), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(of, "of");
    c(of, "Le");
    function ki(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(ki, "ki");
    c(ki, "Ue"), Object.defineProperty(_i, "__esModule", { value: true }), _i.PointerInfo = void 0;
    var af = of(c(/* @__PURE__ */ __name(function i(o, s, l, d, m) {
      (function(E, g) {
        if (!(E instanceof g))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), ki(this, "id", void 0), ki(this, "pointer", void 0), ki(this, "event", void 0), ki(this, "downTime", void 0), ki(this, "downTarget", void 0), this.id = o, this.pointer = s, this.event = l, this.downTime = d, this.downTarget = m;
    }, "i"), "t"));
    _i.PointerInfo = af;
    var Fo, Wo, Bt = {};
    function sf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(sf, "sf");
    c(sf, "$e");
    function We(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(We, "We");
    c(We, "He"), Object.defineProperty(Bt, "__esModule", { value: true }), Bt.Interaction = void 0, Object.defineProperty(Bt, "PointerInfo", { enumerable: true, get: function() {
      return _i.PointerInfo;
    } }), Bt.default = Bt._ProxyValues = Bt._ProxyMethods = void 0, Bt._ProxyValues = Fo, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(Fo || (Bt._ProxyValues = Fo = {})), Bt._ProxyMethods = Wo, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(Wo || (Bt._ProxyMethods = Wo = {}));
    var lf = 0, wu = function() {
      function i(l) {
        var d = this, m = l.pointerType, E = l.scopeFire;
        (function(D, G) {
          if (!(D instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), We(this, "interactable", null), We(this, "element", null), We(this, "rect", null), We(this, "_rects", void 0), We(this, "edges", null), We(this, "_scopeFire", void 0), We(this, "prepared", { name: null, axis: null, edges: null }), We(this, "pointerType", void 0), We(this, "pointers", []), We(this, "downEvent", null), We(this, "downPointer", {}), We(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), We(this, "prevEvent", null), We(this, "pointerIsDown", false), We(this, "pointerWasMoved", false), We(this, "_interacting", false), We(this, "_ending", false), We(this, "_stopped", true), We(this, "_proxy", null), We(this, "simulation", null), We(this, "doMove", (0, tr.warnOnce)(function(D) {
          this.move(D);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), We(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), We(this, "_id", lf++), this._scopeFire = E, this.pointerType = m;
        var g = this;
        this._proxy = {};
        var x = c(function(D) {
          Object.defineProperty(d._proxy, D, { get: function() {
            return g[D];
          } });
        }, "a");
        for (var T in Fo)
          x(T);
        var I = c(function(D) {
          Object.defineProperty(d._proxy, D, { value: function() {
            return g[D].apply(g, arguments);
          } });
        }, "l");
        for (var P in Wo)
          I(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, s = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(l, d, m) {
        var E = this.updatePointer(l, d, m, true), g = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: l, event: d, eventTarget: m, pointerIndex: E, pointerInfo: g, type: "down", interaction: this });
      } }, { key: "start", value: function(l, d, m) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (l.name === "gesture" ? 2 : 1) || !d.options[l.name].enabled) && ((0, tr.copyAction)(this.prepared, l), this.interactable = d, this.element = m, this.rect = d.getRect(m), this.edges = this.prepared.edges ? (0, V.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(l, d, m) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(l, d, m, false);
        var E, g, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, g = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, ot.default)(E, g) > this.pointerMoveTolerance);
        var T = this.getPointerIndex(l), I = { pointer: l, pointerIndex: T, pointerInfo: this.pointers[T], event: d, type: "move", eventTarget: m, dx: E, dy: g, duplicate: x, interaction: this };
        x || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), x || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(l) {
        l && l.event || K.setZeroCoords(this.coords.delta), (l = (0, V.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, l || {})).phase = "move", this._doPhase(l);
      } }, { key: "pointerUp", value: function(l, d, m, E) {
        var g = this.getPointerIndex(l);
        g === -1 && (g = this.updatePointer(l, d, m, false));
        var x = /cancel$/i.test(d.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(x), { pointer: l, pointerIndex: g, pointerInfo: this.pointers[g], event: d, eventTarget: m, type: x, curEventTarget: E, interaction: this }), this.simulation || this.end(d), this.removePointer(l, d);
      } }, { key: "documentBlur", value: function(l) {
        this.end(l), this._scopeFire("interactions:blur", { event: l, type: "blur", interaction: this });
      } }, { key: "end", value: function(l) {
        var d;
        this._ending = true, l = l || this._latestPointer.event, this.interacting() && (d = this._doPhase({ event: l, interaction: this, phase: "end" })), this._ending = false, d === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(l) {
        var d = K.getPointerId(l);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Ie.findIndex(this.pointers, function(m) {
          return m.id === d;
        });
      } }, { key: "getPointerInfo", value: function(l) {
        return this.pointers[this.getPointerIndex(l)];
      } }, { key: "updatePointer", value: function(l, d, m, E) {
        var g = K.getPointerId(l), x = this.getPointerIndex(l), T = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(d.type)), T ? T.pointer = l : (T = new _i.PointerInfo(g, l, d, null, null), x = this.pointers.length, this.pointers.push(T)), K.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, T.downTime = this.coords.cur.timeStamp, T.downTarget = m, K.pointerExtend(this.downPointer, l), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = d, this.pointerWasMoved = false)), this._updateLatestPointer(l, d, m), this._scopeFire("interactions:update-pointer", { pointer: l, event: d, eventTarget: m, down: E, pointerInfo: T, pointerIndex: x, interaction: this }), x;
      } }, { key: "removePointer", value: function(l, d) {
        var m = this.getPointerIndex(l);
        if (m !== -1) {
          var E = this.pointers[m];
          this._scopeFire("interactions:remove-pointer", { pointer: l, event: d, eventTarget: null, pointerIndex: m, pointerInfo: E, interaction: this }), this.pointers.splice(m, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(l, d, m) {
        this._latestPointer.pointer = l, this._latestPointer.event = d, this._latestPointer.eventTarget = m;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(l, d, m, E) {
        return new Ri.InteractEvent(this, l, this.prepared.name, d, this.element, m, E);
      } }, { key: "_fireEvent", value: function(l) {
        var d;
        (d = this.interactable) == null || d.fire(l), (!this.prevEvent || l.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = l);
      } }, { key: "_doPhase", value: function(l) {
        var d = l.event, m = l.phase, E = l.preEnd, g = l.type, x = this.rect;
        if (x && m === "move" && (ce.addEdges(this.edges, x, this.coords.delta[this.interactable.options.deltaSource]), x.width = x.right - x.left, x.height = x.bottom - x.top), this._scopeFire("interactions:before-action-".concat(m), l) === false)
          return false;
        var T = l.iEvent = this._createPreparedEvent(d, m, E, g);
        return this._scopeFire("interactions:action-".concat(m), l), m === "start" && (this.prevEvent = T), this._fireEvent(T), this._scopeFire("interactions:after-action-".concat(m), l), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], s && sf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Bt.Interaction = wu;
    var uf = wu;
    Bt.default = uf;
    var Cn = {};
    function xu(i) {
      i.pointerIsDown && (Ss(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(xu, "xu");
    c(xu, "tn");
    function Eu(i) {
      Es(i.interaction);
    }
    __name(Eu, "Eu");
    c(Eu, "en");
    function Es(i) {
      if (!function(s) {
        return !(!s.offset.pending.x && !s.offset.pending.y);
      }(i))
        return false;
      var o = i.offset.pending;
      return Ss(i.coords.cur, o), Ss(i.coords.delta, o), ce.addEdges(i.edges, i.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(Es, "Es");
    c(Es, "nn");
    function cf(i) {
      var o = i.x, s = i.y;
      this.offset.pending.x += o, this.offset.pending.y += s, this.offset.total.x += o, this.offset.total.y += s;
    }
    __name(cf, "cf");
    c(cf, "rn");
    function Ss(i, o) {
      var s = i.page, l = i.client, d = o.x, m = o.y;
      s.x += d, s.y += m, l.x += d, l.y += m;
    }
    __name(Ss, "Ss");
    c(Ss, "on"), Object.defineProperty(Cn, "__esModule", { value: true }), Cn.addTotal = xu, Cn.applyPending = Es, Cn.default = void 0, Bt._ProxyMethods.offsetBy = "";
    var pf = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = cf;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return xu(i.interaction);
    }, "interactions:before-action-start": Eu, "interactions:before-action-move": Eu, "interactions:before-action-end": function(i) {
      var o = i.interaction;
      if (Es(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, df = pf;
    Cn.default = df;
    var ti = {};
    function ff(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(ff, "ff");
    c(ff, "un");
    function ht(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(ht, "ht");
    c(ht, "cn"), Object.defineProperty(ti, "__esModule", { value: true }), ti.default = ti.InertiaState = void 0;
    var Su = function() {
      function i(l) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), ht(this, "active", false), ht(this, "isModified", false), ht(this, "smoothEnd", false), ht(this, "allowResume", false), ht(this, "modification", void 0), ht(this, "modifierCount", 0), ht(this, "modifierArg", void 0), ht(this, "startCoords", void 0), ht(this, "t0", 0), ht(this, "v0", 0), ht(this, "te", 0), ht(this, "targetOffset", void 0), ht(this, "modifiedOffset", void 0), ht(this, "currentOffset", void 0), ht(this, "lambda_v0", 0), ht(this, "one_ve_v0", 0), ht(this, "timeout", void 0), ht(this, "interaction", void 0), this.interaction = l;
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "start", value: function(l) {
        var d = this.interaction, m = Uo(d);
        if (!m || !m.enabled)
          return false;
        var E = d.coords.velocity.client, g = (0, ot.default)(E.x, E.y), x = this.modification || (this.modification = new En.default(d));
        if (x.copyFrom(d.modification), this.t0 = d._now(), this.allowResume = m.allowResume, this.v0 = g, this.currentOffset = { x: 0, y: 0 }, this.startCoords = d.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - d.coords.cur.timeStamp < 50 && g > m.minSpeed && g > m.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return d.modification.result.rect = null, d.offsetBy(this.targetOffset), d._doPhase({ interaction: d, event: l, phase: "inertiastart" }), d.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), d.modification.result.rect = null, this.active = true, d.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var l = this, d = this.interaction.coords.velocity.client, m = Uo(this.interaction), E = m.resistance, g = -Math.log(m.endSpeed / this.v0) / E;
        this.targetOffset = { x: (d.x - g) / E, y: (d.y - g) / E }, this.te = g, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - m.endSpeed / this.v0;
        var x = this.modification, T = this.modifierArg;
        T.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, x.result = x.setAll(T), x.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + x.result.delta.x, y: this.targetOffset.y + x.result.delta.y }), this.onNextFrame(function() {
          return l.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var l = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return l.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(l) {
        var d = this;
        this.timeout = Ot.default.request(function() {
          d.active && l();
        });
      } }, { key: "inertiaTick", value: function() {
        var l, d, m, E, g, x = this, T = this.interaction, I = Uo(T).resistance, P = (T._now() - this.t0) / 1e3;
        if (P < this.te) {
          var D, G = 1 - (Math.exp(-I * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (l = this.targetOffset.x, d = this.targetOffset.y, m = this.modifiedOffset.x, E = this.modifiedOffset.y, D = { x: Cu(g = G, 0, l, m), y: Cu(g, 0, d, E) }) : D = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var _ = { x: D.x - this.currentOffset.x, y: D.y - this.currentOffset.y };
          this.currentOffset.x += _.x, this.currentOffset.y += _.y, T.offsetBy(_), T.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          T.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var l = this, d = this.interaction, m = d._now() - this.t0, E = Uo(d).smoothEndDuration;
        if (m < E) {
          var g = { x: Tu(m, 0, this.targetOffset.x, E), y: Tu(m, 0, this.targetOffset.y, E) }, x = { x: g.x - this.currentOffset.x, y: g.y - this.currentOffset.y };
          this.currentOffset.x += x.x, this.currentOffset.y += x.y, d.offsetBy(x), d.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return l.smoothEndTick();
          });
        } else
          d.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(l) {
        var d = l.pointer, m = l.event, E = l.eventTarget, g = this.interaction;
        g.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), g.updatePointer(d, m, E, true), g._doPhase({ interaction: g, event: m, phase: "resume" }), (0, K.copyCoords)(g.coords.prev, g.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Ot.default.cancel(this.timeout);
      } }]) && ff(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Uo(i) {
      var o = i.interactable, s = i.prepared;
      return o && o.options && s.name && o.options[s.name].inertia;
    }
    __name(Uo, "Uo");
    c(Uo, "dn"), ti.InertiaState = Su;
    var hf = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o = i.defaults;
      i.usePlugin(Cn.default), i.usePlugin(bt.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.inertia = new Su(o);
    }, "interactions:before-action-end": function(i) {
      var o = i.interaction, s = i.event;
      return (!o._interacting || o.simulation || !o.inertia.start(s)) && null;
    }, "interactions:down": function(i) {
      var o = i.interaction, s = i.eventTarget, l = o.inertia;
      if (l.active)
        for (var d = s; u.default.element(d); ) {
          if (d === o.element) {
            l.resume(i);
            break;
          }
          d = R.parentNode(d);
        }
    }, "interactions:stop": function(i) {
      var o = i.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(i) {
      var o = i.interaction.modification;
      o.stop(i), o.start(i, i.interaction.coords.cur.page), o.applyToInteraction(i);
    }, "interactions:before-action-inertiastart": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:action-resume": bt.addEventModifiers, "interactions:action-inertiastart": bt.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-resume": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    } } };
    function Cu(i, o, s, l) {
      var d = 1 - i;
      return d * d * o + 2 * d * i * s + i * i * l;
    }
    __name(Cu, "Cu");
    c(Cu, "vn");
    function Tu(i, o, s, l) {
      return -s * (i /= l) * (i - 2) + o;
    }
    __name(Tu, "Tu");
    c(Tu, "hn");
    var vf = hf;
    ti.default = vf;
    var Di = {};
    function mf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(mf, "mf");
    c(mf, "mn");
    function Ni(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Ni, "Ni");
    c(Ni, "bn");
    function Ou(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        if (i.immediatePropagationStopped)
          break;
        l(i);
      }
    }
    __name(Ou, "Ou");
    c(Ou, "xn"), Object.defineProperty(Di, "__esModule", { value: true }), Di.Eventable = void 0;
    var gf = function() {
      function i(l) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ni(this, "options", void 0), Ni(this, "types", {}), Ni(this, "propagationStopped", false), Ni(this, "immediatePropagationStopped", false), Ni(this, "global", void 0), this.options = (0, V.default)({}, l || {});
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "fire", value: function(l) {
        var d, m = this.global;
        (d = this.types[l.type]) && Ou(l, d), !l.propagationStopped && m && (d = m[l.type]) && Ou(l, d);
      } }, { key: "on", value: function(l, d) {
        var m = (0, me.default)(l, d);
        for (l in m)
          this.types[l] = Ie.merge(this.types[l] || [], m[l]);
      } }, { key: "off", value: function(l, d) {
        var m = (0, me.default)(l, d);
        for (l in m) {
          var E = this.types[l];
          if (E && E.length)
            for (var g = 0; g < m[l].length; g++) {
              var x = m[l][g], T = E.indexOf(x);
              T !== -1 && E.splice(T, 1);
            }
        }
      } }, { key: "getRect", value: function(l) {
        return null;
      } }]) && mf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Di.Eventable = gf;
    var Gi = {};
    Object.defineProperty(Gi, "__esModule", { value: true }), Gi.default = function(i, o) {
      if (o.phaselessTypes[i])
        return true;
      for (var s in o.map)
        if (i.indexOf(s) === 0 && i.substr(s.length) in o.phases)
          return true;
      return false;
    };
    var Cs = {};
    Object.defineProperty(Cs, "__esModule", { value: true }), Cs.createInteractStatic = function(i) {
      var o = c(/* @__PURE__ */ __name(function s(l, d) {
        var m = i.interactables.get(l, d);
        return m || ((m = i.interactables.new(l, d)).events.global = s.globalEvents), m;
      }, "s"), "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = R.getElementRect, o.getElementClientRect = R.getElementClientRect, o.matchesSelector = R.matchesSelector, o.closest = R.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = i, o.use = function(s, l) {
        return this.scope.usePlugin(s, l), this;
      }, o.isSet = function(s, l) {
        return !!this.scope.interactables.get(s, l && l.context);
      }, o.on = (0, tr.warnOnce)(function(s, l, d) {
        if (u.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u.default.array(s)) {
          for (var m = 0; m < s.length; m++) {
            var E = s[m];
            this.on(E, l, d);
          }
          return this;
        }
        if (u.default.object(s)) {
          for (var g in s)
            this.on(g, s[g], l);
          return this;
        }
        return (0, Gi.default)(s, this.scope.actions) ? this.globalEvents[s] ? this.globalEvents[s].push(l) : this.globalEvents[s] = [l] : this.scope.events.add(this.scope.document, s, l, { options: d }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, tr.warnOnce)(function(s, l, d) {
        if (u.default.string(s) && s.search(" ") !== -1 && (s = s.trim().split(/ +/)), u.default.array(s)) {
          for (var m = 0; m < s.length; m++) {
            var E = s[m];
            this.off(E, l, d);
          }
          return this;
        }
        if (u.default.object(s)) {
          for (var g in s)
            this.off(g, s[g], l);
          return this;
        }
        var x;
        return (0, Gi.default)(s, this.scope.actions) ? s in this.globalEvents && (x = this.globalEvents[s].indexOf(l)) !== -1 && this.globalEvents[s].splice(x, 1) : this.scope.events.remove(this.scope.document, s, l, d), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return U.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return U.default.supportsPointerEvent;
      }, o.stop = function() {
        for (var s = 0; s < this.scope.interactions.list.length; s++)
          this.scope.interactions.list[s].stop();
        return this;
      }, o.pointerMoveTolerance = function(s) {
        return u.default.number(s) ? (this.scope.interactions.pointerMoveTolerance = s, this) : this.scope.interactions.pointerMoveTolerance;
      }, o.addDocument = function(s, l) {
        this.scope.addDocument(s, l);
      }, o.removeDocument = function(s) {
        this.scope.removeDocument(s);
      }, o;
    };
    var Vo = {};
    function bf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(bf, "bf");
    c(bf, "En");
    function Br(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Br, "Br");
    c(Br, "Sn"), Object.defineProperty(Vo, "__esModule", { value: true }), Vo.Interactable = void 0;
    var yf = function() {
      function i(l, d, m, E) {
        (function(g, x) {
          if (!(g instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Br(this, "options", void 0), Br(this, "_actions", void 0), Br(this, "target", void 0), Br(this, "events", new Di.Eventable()), Br(this, "_context", void 0), Br(this, "_win", void 0), Br(this, "_doc", void 0), Br(this, "_scopeEvents", void 0), Br(this, "_rectChecker", void 0), this._actions = d.actions, this.target = l, this._context = d.context || m, this._win = (0, r.getWindow)((0, R.trySelector)(l) ? this._context : l), this._doc = this._win.document, this._scopeEvents = E, this.set(d);
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(l, d) {
        return u.default.func(d.onstart) && this.on("".concat(l, "start"), d.onstart), u.default.func(d.onmove) && this.on("".concat(l, "move"), d.onmove), u.default.func(d.onend) && this.on("".concat(l, "end"), d.onend), u.default.func(d.oninertiastart) && this.on("".concat(l, "inertiastart"), d.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(l, d, m) {
        (u.default.array(d) || u.default.object(d)) && this.off(l, d), (u.default.array(m) || u.default.object(m)) && this.on(l, m);
      } }, { key: "setPerAction", value: function(l, d) {
        var m = this._defaults;
        for (var E in d) {
          var g = E, x = this.options[l], T = d[g];
          g === "listeners" && this.updatePerActionListeners(l, x.listeners, T), u.default.array(T) ? x[g] = Ie.from(T) : u.default.plainObject(T) ? (x[g] = (0, V.default)(x[g] || {}, (0, xn.default)(T)), u.default.object(m.perAction[g]) && "enabled" in m.perAction[g] && (x[g].enabled = T.enabled !== false)) : u.default.bool(T) && u.default.object(m.perAction[g]) ? x[g].enabled = T : x[g] = T;
        }
      } }, { key: "getRect", value: function(l) {
        return l = l || (u.default.element(this.target) ? this.target : null), u.default.string(this.target) && (l = l || this._context.querySelector(this.target)), (0, R.getElementRect)(l);
      } }, { key: "rectChecker", value: function(l) {
        var d = this;
        return u.default.func(l) ? (this._rectChecker = l, this.getRect = function(m) {
          var E = (0, V.default)({}, d._rectChecker(m));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : l === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(l, d) {
        if ((0, R.trySelector)(d) || u.default.object(d)) {
          for (var m in this.options[l] = d, this._actions.map)
            this.options[m][l] = d;
          return this;
        }
        return this.options[l];
      } }, { key: "origin", value: function(l) {
        return this._backCompatOption("origin", l);
      } }, { key: "deltaSource", value: function(l) {
        return l === "page" || l === "client" ? (this.options.deltaSource = l, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(l) {
        return this._context === l.ownerDocument || (0, R.nodeContains)(this._context, l);
      } }, { key: "testIgnoreAllow", value: function(l, d, m) {
        return !this.testIgnore(l.ignoreFrom, d, m) && this.testAllow(l.allowFrom, d, m);
      } }, { key: "testAllow", value: function(l, d, m) {
        return !l || !!u.default.element(m) && (u.default.string(l) ? (0, R.matchesUpTo)(m, l, d) : !!u.default.element(l) && (0, R.nodeContains)(l, m));
      } }, { key: "testIgnore", value: function(l, d, m) {
        return !(!l || !u.default.element(m)) && (u.default.string(l) ? (0, R.matchesUpTo)(m, l, d) : !!u.default.element(l) && (0, R.nodeContains)(l, m));
      } }, { key: "fire", value: function(l) {
        return this.events.fire(l), this;
      } }, { key: "_onOff", value: function(l, d, m, E) {
        u.default.object(d) && !u.default.array(d) && (E = m, m = null);
        var g = l === "on" ? "add" : "remove", x = (0, me.default)(d, m);
        for (var T in x) {
          T === "wheel" && (T = U.default.wheelEvent);
          for (var I = 0; I < x[T].length; I++) {
            var P = x[T][I];
            (0, Gi.default)(T, this._actions) ? this.events[l](T, P) : u.default.string(this.target) ? this._scopeEvents["".concat(g, "Delegate")](this.target, this._context, T, P, E) : this._scopeEvents[g](this.target, T, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(l, d, m) {
        return this._onOff("on", l, d, m);
      } }, { key: "off", value: function(l, d, m) {
        return this._onOff("off", l, d, m);
      } }, { key: "set", value: function(l) {
        var d = this._defaults;
        for (var m in u.default.object(l) || (l = {}), this.options = (0, xn.default)(d.base), this._actions.methodDict) {
          var E = m, g = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, V.default)((0, V.default)({}, d.perAction), d.actions[E])), this[g](l[E]);
        }
        for (var x in l)
          u.default.func(this[x]) && this[x](l[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (u.default.string(this.target))
          for (var l in this._scopeEvents.delegatedEvents)
            for (var d = this._scopeEvents.delegatedEvents[l], m = d.length - 1; m >= 0; m--) {
              var E = d[m], g = E.selector, x = E.context, T = E.listeners;
              g === this.target && x === this._context && d.splice(m, 1);
              for (var I = T.length - 1; I >= 0; I--)
                this._scopeEvents.removeDelegate(this.target, this._context, l, T[I][0], T[I][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && bf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Vo.Interactable = yf;
    var Yo = {};
    function wf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(wf, "wf");
    c(wf, "Mn");
    function Ts(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Ts, "Ts");
    c(Ts, "kn"), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.InteractableSet = void 0;
    var xf = function() {
      function i(l) {
        var d = this;
        (function(m, E) {
          if (!(m instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ts(this, "list", []), Ts(this, "selectorMap", {}), Ts(this, "scope", void 0), this.scope = l, l.addListeners({ "interactable:unset": function(m) {
          var E = m.interactable, g = E.target, x = E._context, T = u.default.string(g) ? d.selectorMap[g] : g[d.scope.id], I = Ie.findIndex(T, function(P) {
            return P.context === x;
          });
          T[I] && (T[I].context = null, T[I].interactable = null), T.splice(I, 1);
        } });
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "new", value: function(l, d) {
        d = (0, V.default)(d || {}, { actions: this.scope.actions });
        var m = new this.scope.Interactable(l, d, this.scope.document, this.scope.events), E = { context: m._context, interactable: m };
        return this.scope.addDocument(m._doc), this.list.push(m), u.default.string(l) ? (this.selectorMap[l] || (this.selectorMap[l] = []), this.selectorMap[l].push(E)) : (m.target[this.scope.id] || Object.defineProperty(l, this.scope.id, { value: [], configurable: true }), l[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: l, options: d, interactable: m, win: this.scope._win }), m;
      } }, { key: "get", value: function(l, d) {
        var m = d && d.context || this.scope.document, E = u.default.string(l), g = E ? this.selectorMap[l] : l[this.scope.id];
        if (!g)
          return null;
        var x = Ie.find(g, function(T) {
          return T.context === m && (E || T.interactable.inContext(l));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(l, d) {
        for (var m = 0; m < this.list.length; m++) {
          var E = this.list[m], g = void 0;
          if ((u.default.string(E.target) ? u.default.element(l) && R.matchesSelector(l, E.target) : l === E.target) && E.inContext(l) && (g = d(E)), g !== void 0)
            return g;
        }
      } }]) && wf(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Yo.InteractableSet = xf;
    var Xo = {};
    function Ef(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Ef, "Ef");
    c(Ef, "An");
    function Os(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(Os, "Os");
    c(Os, "zn");
    function Ms(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var d = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(s); !(x = (m = d.next()).done) && (g.push(m.value), !l || g.length !== l); x = true)
              ;
          } catch (I) {
            T = true, E = I;
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
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Mu(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Mu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Ms, "Ms");
    c(Ms, "Cn");
    function Mu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Mu, "Mu");
    c(Mu, "Rn"), Object.defineProperty(Xo, "__esModule", { value: true }), Xo.default = void 0;
    var Sf = function() {
      function i(l) {
        (function(d, m) {
          if (!(d instanceof m))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Os(this, "currentTarget", void 0), Os(this, "originalEvent", void 0), Os(this, "type", void 0), this.originalEvent = l, (0, or.default)(this, l);
      }
      __name(i, "i");
      c(i, "t");
      var o, s;
      return o = i, (s = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Ef(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Li(i) {
      if (!u.default.object(i))
        return { capture: !!i, passive: false };
      var o = (0, V.default)({}, i);
      return o.capture = !!i.capture, o.passive = !!i.passive, o;
    }
    __name(Li, "Li");
    c(Li, "Xn");
    var Cf = { id: "events", install: function(i) {
      var o, s = [], l = {}, d = [], m = { add: E, remove: g, addDelegate: function(I, P, D, G, _) {
        var $ = Li(_);
        if (!l[D]) {
          l[D] = [];
          for (var X = 0; X < d.length; X++) {
            var q = d[X];
            E(q, D, x), E(q, D, T, true);
          }
        }
        var re = l[D], oe = Ie.find(re, function(fe) {
          return fe.selector === I && fe.context === P;
        });
        oe || (oe = { selector: I, context: P, listeners: [] }, re.push(oe)), oe.listeners.push([G, $]);
      }, removeDelegate: function(I, P, D, G, _) {
        var $, X = Li(_), q = l[D], re = false;
        if (q)
          for ($ = q.length - 1; $ >= 0; $--) {
            var oe = q[$];
            if (oe.selector === I && oe.context === P) {
              for (var fe = oe.listeners, Pe = fe.length - 1; Pe >= 0; Pe--) {
                var Be = Ms(fe[Pe], 2), Se = Be[0], Le = Be[1], cr = Le.capture, qr = Le.passive;
                if (Se === G && cr === X.capture && qr === X.passive) {
                  fe.splice(Pe, 1), fe.length || (q.splice($, 1), g(P, D, x), g(P, D, T, true)), re = true;
                  break;
                }
              }
              if (re)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: T, delegatedEvents: l, documents: d, targets: s, supportsOptions: false, supportsPassive: false };
      function E(I, P, D, G) {
        var _ = Li(G), $ = Ie.find(s, function(X) {
          return X.eventTarget === I;
        });
        $ || ($ = { eventTarget: I, events: {} }, s.push($)), $.events[P] || ($.events[P] = []), I.addEventListener && !Ie.contains($.events[P], D) && (I.addEventListener(P, D, m.supportsOptions ? _ : _.capture), $.events[P].push(D));
      }
      __name(E, "E");
      c(E, "s");
      function g(I, P, D, G) {
        var _ = Li(G), $ = Ie.findIndex(s, function(Pe) {
          return Pe.eventTarget === I;
        }), X = s[$];
        if (X && X.events)
          if (P !== "all") {
            var q = false, re = X.events[P];
            if (re) {
              if (D === "all") {
                for (var oe = re.length - 1; oe >= 0; oe--)
                  g(I, P, re[oe], _);
                return;
              }
              for (var fe = 0; fe < re.length; fe++)
                if (re[fe] === D) {
                  I.removeEventListener(P, D, m.supportsOptions ? _ : _.capture), re.splice(fe, 1), re.length === 0 && (delete X.events[P], q = true);
                  break;
                }
            }
            q && !Object.keys(X.events).length && s.splice($, 1);
          } else
            for (P in X.events)
              X.events.hasOwnProperty(P) && g(I, P, "all");
      }
      __name(g, "g");
      c(g, "l");
      function x(I, P) {
        for (var D = Li(P), G = new Sf(I), _ = l[I.type], $ = Ms(K.getEventTargets(I), 1)[0], X = $; u.default.element(X); ) {
          for (var q = 0; q < _.length; q++) {
            var re = _[q], oe = re.selector, fe = re.context;
            if (R.matchesSelector(X, oe) && R.nodeContains(fe, $) && R.nodeContains(fe, X)) {
              var Pe = re.listeners;
              G.currentTarget = X;
              for (var Be = 0; Be < Pe.length; Be++) {
                var Se = Ms(Pe[Be], 2), Le = Se[0], cr = Se[1], qr = cr.capture, Vs = cr.passive;
                qr === D.capture && Vs === D.passive && Le(G);
              }
            }
          }
          X = R.parentNode(X);
        }
      }
      __name(x, "x");
      c(x, "u");
      function T(I) {
        return x(I, true);
      }
      __name(T, "T");
      return c(T, "c"), (o = i.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return m.supportsOptions = true;
      }, get passive() {
        return m.supportsPassive = true;
      } }), i.events = m, m;
    } };
    Xo.default = Cf;
    var Zo = {};
    Object.defineProperty(Zo, "__esModule", { value: true }), Zo.default = void 0;
    var Qo = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(i) {
      for (var o = 0; o < Qo.methodOrder.length; o++) {
        var s;
        s = Qo.methodOrder[o];
        var l = Qo[s](i);
        if (l)
          return l;
      }
      return null;
    }, simulationResume: function(i) {
      var o = i.pointerType, s = i.eventType, l = i.eventTarget, d = i.scope;
      if (!/down|start/i.test(s))
        return null;
      for (var m = 0; m < d.interactions.list.length; m++) {
        var E = d.interactions.list[m], g = l;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; g; ) {
            if (g === E.element)
              return E;
            g = R.parentNode(g);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var o, s = i.pointerId, l = i.pointerType, d = i.eventType, m = i.scope;
      if (l !== "mouse" && l !== "pen")
        return null;
      for (var E = 0; E < m.interactions.list.length; E++) {
        var g = m.interactions.list[E];
        if (g.pointerType === l) {
          if (g.simulation && !Iu(g, s))
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
        if (!(T.pointerType !== l || /down/i.test(d) && T.simulation))
          return T;
      }
      return null;
    }, hasPointer: function(i) {
      for (var o = i.pointerId, s = i.scope, l = 0; l < s.interactions.list.length; l++) {
        var d = s.interactions.list[l];
        if (Iu(d, o))
          return d;
      }
      return null;
    }, idle: function(i) {
      for (var o = i.pointerType, s = i.scope, l = 0; l < s.interactions.list.length; l++) {
        var d = s.interactions.list[l];
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
    function Iu(i, o) {
      return i.pointers.some(function(s) {
        return s.id === o;
      });
    }
    __name(Iu, "Iu");
    c(Iu, "Ln");
    var Tf = Qo;
    Zo.default = Tf;
    var Jo = {};
    function Is(i) {
      return Is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Is(i);
    }
    __name(Is, "Is");
    c(Is, "Nn");
    function Au(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var d = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(s); !(x = (m = d.next()).done) && (g.push(m.value), !l || g.length !== l); x = true)
              ;
          } catch (I) {
            T = true, E = I;
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
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Pu(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Pu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Au, "Au");
    c(Au, "qn");
    function Pu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Pu, "Pu");
    c(Pu, "Gn");
    function Of(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Of, "Of");
    c(Of, "$n");
    function Mf(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(Mf, "Mf");
    c(Mf, "Hn");
    function As(i, o) {
      return As = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, As(i, o);
    }
    __name(As, "As");
    c(As, "Kn");
    function If(i, o) {
      if (o && (Is(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(i);
    }
    __name(If, "If");
    c(If, "Zn");
    function Ko(i) {
      return Ko = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ko(i);
    }
    __name(Ko, "Ko");
    c(Ko, "Jn"), Object.defineProperty(Jo, "__esModule", { value: true }), Jo.default = void 0;
    var Ps = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function zu(i, o) {
      return function(s) {
        var l = o.interactions.list, d = K.getPointerType(s), m = Au(K.getEventTargets(s), 2), E = m[0], g = m[1], x = [];
        if (/^touch/.test(s.type)) {
          o.prevTouchTime = o.now();
          for (var T = 0; T < s.changedTouches.length; T++) {
            var I = s.changedTouches[T], P = { pointer: I, pointerId: K.getPointerId(I), pointerType: d, eventType: s.type, eventTarget: E, curEventTarget: g, scope: o }, D = Ru(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, D]);
          }
        } else {
          var G = false;
          if (!U.default.supportsPointerEvent && /mouse/.test(s.type)) {
            for (var _ = 0; _ < l.length && !G; _++)
              G = l[_].pointerType !== "mouse" && l[_].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || s.timeStamp === 0;
          }
          if (!G) {
            var $ = { pointer: s, pointerId: K.getPointerId(s), pointerType: d, eventType: s.type, curEventTarget: g, eventTarget: E, scope: o }, X = Ru($);
            x.push([$.pointer, $.eventTarget, $.curEventTarget, X]);
          }
        }
        for (var q = 0; q < x.length; q++) {
          var re = Au(x[q], 4), oe = re[0], fe = re[1], Pe = re[2];
          re[3][i](oe, s, fe, Pe);
        }
      };
    }
    __name(zu, "zu");
    c(zu, "tr");
    function Ru(i) {
      var o = i.pointerType, s = i.scope, l = { interaction: Zo.default.search(i), searchDetails: i };
      return s.fire("interactions:find", l), l.interaction || s.interactions.new({ pointerType: o });
    }
    __name(Ru, "Ru");
    c(Ru, "er");
    function zs(i, o) {
      var s = i.doc, l = i.scope, d = i.options, m = l.interactions.docEvents, E = l.events, g = E[o];
      for (var x in l.browser.isIOS && !d.events && (d.events = { passive: false }), E.delegatedEvents)
        g(s, x, E.delegateListener), g(s, x, E.delegateUseCapture, true);
      for (var T = d && d.events, I = 0; I < m.length; I++) {
        var P = m[I];
        g(s, P.type, P.listener, T);
      }
    }
    __name(zs, "zs");
    c(zs, "nr");
    var Af = { id: "core/interactions", install: function(i) {
      for (var o = {}, s = 0; s < Ps.length; s++) {
        var l = Ps[s];
        o[l] = zu(l, i);
      }
      var d, m = U.default.pEventTypes;
      function E() {
        for (var g = 0; g < i.interactions.list.length; g++) {
          var x = i.interactions.list[g];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var T = function() {
              var P = x.pointers[I];
              i.documents.some(function(D) {
                var G = D.doc;
                return (0, R.nodeContains)(G, P.downTarget);
              }) || x.removePointer(P.pointer, P.event);
            }, I = 0; I < x.pointers.length; I++)
              T();
        }
      }
      __name(E, "E");
      c(E, "a"), (d = O.default.PointerEvent ? [{ type: m.down, listener: E }, { type: m.down, listener: o.pointerDown }, { type: m.move, listener: o.pointerMove }, { type: m.up, listener: o.pointerUp }, { type: m.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(g) {
        for (var x = 0; x < i.interactions.list.length; x++)
          i.interactions.list[x].documentBlur(g);
      } }), i.prevTouchTime = 0, i.Interaction = function(g) {
        (function(_, $) {
          if (typeof $ != "function" && $ !== null)
            throw new TypeError("Super expression must either be null or a function");
          _.prototype = Object.create($ && $.prototype, { constructor: { value: _, writable: true, configurable: true } }), Object.defineProperty(_, "prototype", { writable: false }), $ && As(_, $);
        })(G, g);
        var x, T, I, P, D = (I = G, P = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (_) {
            return false;
          }
        }(), function() {
          var _, $ = Ko(I);
          if (P) {
            var X = Ko(this).constructor;
            _ = Reflect.construct($, arguments, X);
          } else
            _ = $.apply(this, arguments);
          return If(this, _);
        });
        function G() {
          return Of(this, G), D.apply(this, arguments);
        }
        __name(G, "G");
        return c(G, "s"), x = G, (T = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(_) {
          i.interactions.pointerMoveTolerance = _;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && Mf(x.prototype, T), Object.defineProperty(x, "prototype", { writable: false }), G;
      }(Bt.default), i.interactions = { list: [], new: function(g) {
        g.scopeFire = function(T, I) {
          return i.fire(T, I);
        };
        var x = new i.Interaction(g);
        return i.interactions.list.push(x), x;
      }, listeners: o, docEvents: d, pointerMoveTolerance: 1 }, i.usePlugin(ei.default);
    }, listeners: { "scope:add-document": function(i) {
      return zs(i, "add");
    }, "scope:remove-document": function(i) {
      return zs(i, "remove");
    }, "interactable:unset": function(i, o) {
      for (var s = i.interactable, l = o.interactions.list.length - 1; l >= 0; l--) {
        var d = o.interactions.list[l];
        d.interactable === s && (d.stop(), o.fire("interactions:destroy", { interaction: d }), d.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(l, 1));
      }
    } }, onDocSignal: zs, doOnInteractions: zu, methodNames: Ps }, Pf = Af;
    Jo.default = Pf;
    var ji = {};
    function Rs(i) {
      return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Rs(i);
    }
    __name(Rs, "Rs");
    c(Rs, "ar");
    function Hi() {
      return Hi = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, o, s) {
        var l = zf(i, o);
        if (l) {
          var d = Object.getOwnPropertyDescriptor(l, o);
          return d.get ? d.get.call(arguments.length < 3 ? i : s) : d.value;
        }
      }, Hi.apply(this, arguments);
    }
    __name(Hi, "Hi");
    c(Hi, "sr");
    function zf(i, o) {
      for (; !Object.prototype.hasOwnProperty.call(i, o) && (i = rn(i)) !== null; )
        ;
      return i;
    }
    __name(zf, "zf");
    c(zf, "lr");
    function _s(i, o) {
      return _s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, _s(i, o);
    }
    __name(_s, "_s");
    c(_s, "ur");
    function Rf(i, o) {
      if (o && (Rs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(s) {
        if (s === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return s;
      }(i);
    }
    __name(Rf, "Rf");
    c(Rf, "cr");
    function rn(i) {
      return rn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, rn(i);
    }
    __name(rn, "rn");
    c(rn, "fr");
    function _u(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(_u, "_u");
    c(_u, "dr");
    function ku(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(ku, "ku");
    c(ku, "pr");
    function Du(i, o, s) {
      return o && ku(i.prototype, o), s && ku(i, s), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Du, "Du");
    c(Du, "vr");
    function yt(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(yt, "yt");
    c(yt, "hr"), Object.defineProperty(ji, "__esModule", { value: true }), ji.Scope = void 0, ji.initScope = Nu;
    var _f = function() {
      function i() {
        var o = this;
        _u(this, i), yt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), yt(this, "isInitialized", false), yt(this, "listenerMaps", []), yt(this, "browser", U.default), yt(this, "defaults", (0, xn.default)(zi.defaults)), yt(this, "Eventable", Di.Eventable), yt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), yt(this, "interactStatic", (0, Cs.createInteractStatic)(this)), yt(this, "InteractEvent", Ri.InteractEvent), yt(this, "Interactable", void 0), yt(this, "interactables", new Yo.InteractableSet(this)), yt(this, "_win", void 0), yt(this, "document", void 0), yt(this, "window", void 0), yt(this, "documents", []), yt(this, "_plugins", { list: [], map: {} }), yt(this, "onWindowUnload", function(l) {
          return o.removeDocument(l.target);
        });
        var s = this;
        this.Interactable = function(l) {
          (function(x, T) {
            if (typeof T != "function" && T !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(T && T.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), T && _s(x, T);
          })(g, l);
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
            var x, T = rn(d);
            if (m) {
              var I = rn(this).constructor;
              x = Reflect.construct(T, arguments, I);
            } else
              x = T.apply(this, arguments);
            return Rf(this, x);
          });
          function g() {
            return _u(this, g), E.apply(this, arguments);
          }
          __name(g, "g");
          return c(g, "i"), Du(g, [{ key: "_defaults", get: function() {
            return s.defaults;
          } }, { key: "set", value: function(x) {
            return Hi(rn(g.prototype), "set", this).call(this, x), s.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            Hi(rn(g.prototype), "unset", this).call(this);
            var x = s.interactables.list.indexOf(this);
            x < 0 || (Hi(rn(g.prototype), "unset", this).call(this), s.interactables.list.splice(x, 1), s.fire("interactable:unset", { interactable: this }));
          } }]), g;
        }(Vo.Interactable);
      }
      __name(i, "i");
      return c(i, "t"), Du(i, [{ key: "addListeners", value: function(o, s) {
        this.listenerMaps.push({ id: s, map: o });
      } }, { key: "fire", value: function(o, s) {
        for (var l = 0; l < this.listenerMaps.length; l++) {
          var d = this.listenerMaps[l].map[o];
          if (d && d(s, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : Nu(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, s) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, s), o.listeners && o.before) {
          for (var l = 0, d = this.listenerMaps.length, m = o.before.reduce(function(g, x) {
            return g[x] = true, g[Gu(x)] = true, g;
          }, {}); l < d; l++) {
            var E = this.listenerMaps[l].id;
            if (m[E] || m[Gu(E)])
              break;
          }
          this.listenerMaps.splice(l, 0, { id: o.id, map: o.listeners });
        } else
          o.listeners && this.listenerMaps.push({ id: o.id, map: o.listeners });
        return this;
      } }, { key: "addDocument", value: function(o, s) {
        if (this.getDocIndex(o) !== -1)
          return false;
        var l = r.getWindow(o);
        s = s ? (0, V.default)({}, s) : {}, this.documents.push({ doc: o, options: s }), this.events.documents.push(o), o !== this.document && this.events.add(l, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: l, scope: this, options: s });
      } }, { key: "removeDocument", value: function(o) {
        var s = this.getDocIndex(o), l = r.getWindow(o), d = this.documents[s].options;
        this.events.remove(l, "unload", this.onWindowUnload), this.documents.splice(s, 1), this.events.documents.splice(s, 1), this.fire("scope:remove-document", { doc: o, window: l, scope: this, options: d });
      } }, { key: "getDocIndex", value: function(o) {
        for (var s = 0; s < this.documents.length; s++)
          if (this.documents[s].doc === o)
            return s;
        return -1;
      } }, { key: "getDocOptions", value: function(o) {
        var s = this.getDocIndex(o);
        return s === -1 ? null : this.documents[s].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), i;
    }();
    function Nu(i, o) {
      return i.isInitialized = true, u.default.window(o) && r.init(o), O.default.init(o), U.default.init(o), Ot.default.init(o), i.window = o, i.document = o.document, i.usePlugin(Jo.default), i.usePlugin(Xo.default), i;
    }
    __name(Nu, "Nu");
    c(Nu, "yr");
    function Gu(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(Gu, "Gu");
    c(Gu, "mr"), ji.Scope = _f;
    var ks = {}, at = {};
    Object.defineProperty(at, "__esModule", { value: true });
    var kf = {};
    at.default = void 0, Object.keys(ks).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(kf, i) || i in at && at[i] === ks[i] || Object.defineProperty(at, i, { enumerable: true, get: function() {
        return ks[i];
      } }));
    });
    var Lu = new ji.Scope(), Df = Lu.interactStatic;
    at.default = Df;
    var Nf = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Lu.init(Nf);
    var ea = {};
    Object.defineProperty(ea, "__esModule", { value: true }), ea.default = void 0, ea.default = function() {
    };
    var ta = {};
    Object.defineProperty(ta, "__esModule", { value: true }), ta.default = void 0, ta.default = function() {
    };
    var ra = {};
    function ju(i, o) {
      return function(s) {
        if (Array.isArray(s))
          return s;
      }(i) || function(s, l) {
        var d = s == null ? null : typeof Symbol != "undefined" && s[Symbol.iterator] || s["@@iterator"];
        if (d != null) {
          var m, E, g = [], x = true, T = false;
          try {
            for (d = d.call(s); !(x = (m = d.next()).done) && (g.push(m.value), !l || g.length !== l); x = true)
              ;
          } catch (I) {
            T = true, E = I;
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
      }(i, o) || function(s, l) {
        if (s) {
          if (typeof s == "string")
            return Hu(s, l);
          var d = Object.prototype.toString.call(s).slice(8, -1);
          return d === "Object" && s.constructor && (d = s.constructor.name), d === "Map" || d === "Set" ? Array.from(s) : d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d) ? Hu(s, l) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ju, "ju");
    c(ju, "jr");
    function Hu(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Hu, "Hu");
    c(Hu, "Mr"), Object.defineProperty(ra, "__esModule", { value: true }), ra.default = void 0, ra.default = function(i) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(l) {
        var d = ju(l, 2), m = d[0], E = d[1];
        return m in i || E in i;
      }), s = c(function(l, d) {
        for (var m = i.range, E = i.limits, g = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = i.offset, T = x === void 0 ? { x: 0, y: 0 } : x, I = { range: m, grid: i, x: null, y: null }, P = 0; P < o.length; P++) {
          var D = ju(o[P], 2), G = D[0], _ = D[1], $ = Math.round((l - T.x) / i[G]), X = Math.round((d - T.y) / i[_]);
          I[G] = Math.max(g.left, Math.min(g.right, $ * i[G] + T.x)), I[_] = Math.max(g.top, Math.min(g.bottom, X * i[_] + T.y));
        }
        return I;
      }, "n");
      return s.grid = i, s.coordFields = o, s;
    };
    var Bi = {};
    Object.defineProperty(Bi, "__esModule", { value: true }), Object.defineProperty(Bi, "edgeTarget", { enumerable: true, get: function() {
      return ea.default;
    } }), Object.defineProperty(Bi, "elements", { enumerable: true, get: function() {
      return ta.default;
    } }), Object.defineProperty(Bi, "grid", { enumerable: true, get: function() {
      return ra.default;
    } });
    var na = {};
    Object.defineProperty(na, "__esModule", { value: true }), na.default = void 0;
    var Gf = { id: "snappers", install: function(i) {
      var o = i.interactStatic;
      o.snappers = (0, V.default)(o.snappers || {}, Bi), o.createSnapGrid = o.snappers.grid;
    } }, Lf = Gf;
    na.default = Lf;
    var ri = {};
    function Bu(i, o) {
      var s = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(i);
        o && (l = l.filter(function(d) {
          return Object.getOwnPropertyDescriptor(i, d).enumerable;
        })), s.push.apply(s, l);
      }
      return s;
    }
    __name(Bu, "Bu");
    c(Bu, "Cr");
    function Ds(i) {
      for (var o = 1; o < arguments.length; o++) {
        var s = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Bu(Object(s), true).forEach(function(l) {
          jf(i, l, s[l]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : Bu(Object(s)).forEach(function(l) {
          Object.defineProperty(i, l, Object.getOwnPropertyDescriptor(s, l));
        });
      }
      return i;
    }
    __name(Ds, "Ds");
    c(Ds, "Rr");
    function jf(i, o, s) {
      return o in i ? Object.defineProperty(i, o, { value: s, enumerable: true, configurable: true, writable: true }) : i[o] = s, i;
    }
    __name(jf, "jf");
    c(jf, "Fr"), Object.defineProperty(ri, "__esModule", { value: true }), ri.default = ri.aspectRatio = void 0;
    var $u = { start: function(i) {
      var o = i.state, s = i.rect, l = i.edges, d = i.pageCoords, m = o.options.ratio, E = o.options, g = E.equalDelta, x = E.modifiers;
      m === "preserve" && (m = s.width / s.height), o.startCoords = (0, V.default)({}, d), o.startRect = (0, V.default)({}, s), o.ratio = m, o.equalDelta = g;
      var T = o.linkedEdges = { top: l.top || l.left && !l.bottom, left: l.left || l.top && !l.right, bottom: l.bottom || l.right && !l.top, right: l.right || l.bottom && !l.left };
      if (o.xIsPrimaryAxis = !(!l.left && !l.right), o.equalDelta) {
        var I = (T.left ? 1 : -1) * (T.top ? 1 : -1);
        o.edgeSign = { x: I, y: I };
      } else
        o.edgeSign = { x: T.left ? -1 : 1, y: T.top ? -1 : 1 };
      if ((0, V.default)(i.edges, T), x && x.length) {
        var P = new En.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(Ds({}, i));
      }
    }, set: function(i) {
      var o = i.state, s = i.rect, l = i.coords, d = (0, V.default)({}, l), m = o.equalDelta ? Hf : Bf;
      if (m(o, o.xIsPrimaryAxis, l, s), !o.subModification)
        return null;
      var E = (0, V.default)({}, s);
      (0, ce.addEdges)(o.linkedEdges, E, { x: l.x - d.x, y: l.y - d.y });
      var g = o.subModification.setAll(Ds(Ds({}, i), {}, { rect: E, edges: o.linkedEdges, pageCoords: l, prevCoords: l, prevRect: E })), x = g.delta;
      return g.changed && (m(o, Math.abs(x.x) > Math.abs(x.y), g.coords, g.rect), (0, V.default)(l, g.coords)), g.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Hf(i, o, s) {
      var l = i.startCoords, d = i.edgeSign;
      o ? s.y = l.y + (s.x - l.x) * d.y : s.x = l.x + (s.y - l.y) * d.x;
    }
    __name(Hf, "Hf");
    c(Hf, "Br");
    function Bf(i, o, s, l) {
      var d = i.startRect, m = i.startCoords, E = i.ratio, g = i.edgeSign;
      if (o) {
        var x = l.width / E;
        s.y = m.y + (x - d.height) * g.y;
      } else {
        var T = l.height * E;
        s.x = m.x + (T - d.width) * g.x;
      }
    }
    __name(Bf, "Bf");
    c(Bf, "Yr"), ri.aspectRatio = $u;
    var $f = (0, bt.makeModifier)($u, "aspectRatio");
    ri.default = $f;
    var Tn = {};
    Object.defineProperty(Tn, "__esModule", { value: true }), Tn.default = void 0;
    var qu = c(function() {
    }, "Ur");
    qu._defaults = {};
    var qf = qu;
    Tn.default = qf;
    var Ns = {};
    Object.defineProperty(Ns, "__esModule", { value: true }), Object.defineProperty(Ns, "default", { enumerable: true, get: function() {
      return Tn.default;
    } });
    var kt = {};
    function Gs(i, o, s) {
      return u.default.func(i) ? ce.resolveRectLike(i, o.interactable, o.element, [s.x, s.y, o]) : ce.resolveRectLike(i, o.interactable, o.element);
    }
    __name(Gs, "Gs");
    c(Gs, "Gr"), Object.defineProperty(kt, "__esModule", { value: true }), kt.default = void 0, kt.getRestrictionRect = Gs, kt.restrict = void 0;
    var Fu = { start: function(i) {
      var o = i.rect, s = i.startOffset, l = i.state, d = i.interaction, m = i.pageCoords, E = l.options, g = E.elementRect, x = (0, V.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && g) {
        var T = Gs(E.restriction, d, m);
        if (T) {
          var I = T.right - T.left - o.width, P = T.bottom - T.top - o.height;
          I < 0 && (x.left += I, x.right += I), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += s.left - o.width * g.left, x.top += s.top - o.height * g.top, x.right += s.right - o.width * (1 - g.right), x.bottom += s.bottom - o.height * (1 - g.bottom);
      }
      l.offset = x;
    }, set: function(i) {
      var o = i.coords, s = i.interaction, l = i.state, d = l.options, m = l.offset, E = Gs(d.restriction, s, o);
      if (E) {
        var g = ce.xywhToTlbr(E);
        o.x = Math.max(Math.min(g.right - m.right, o.x), g.left + m.left), o.y = Math.max(Math.min(g.bottom - m.bottom, o.y), g.top + m.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    kt.restrict = Fu;
    var Ff = (0, bt.makeModifier)(Fu, "restrict");
    kt.default = Ff;
    var Ir = {};
    Object.defineProperty(Ir, "__esModule", { value: true }), Ir.restrictEdges = Ir.default = void 0;
    var Wu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Uu = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Vu(i, o) {
      for (var s = ["top", "left", "bottom", "right"], l = 0; l < s.length; l++) {
        var d = s[l];
        d in i || (i[d] = o[d]);
      }
      return i;
    }
    __name(Vu, "Vu");
    c(Vu, "Qr");
    var Yu = { noInner: Wu, noOuter: Uu, start: function(i) {
      var o, s = i.interaction, l = i.startOffset, d = i.state, m = d.options;
      if (m) {
        var E = (0, kt.getRestrictionRect)(m.offset, s, s.coords.start.page);
        o = ce.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, d.offset = { top: o.y + l.top, left: o.x + l.left, bottom: o.y - l.bottom, right: o.x - l.right };
    }, set: function(i) {
      var o = i.coords, s = i.edges, l = i.interaction, d = i.state, m = d.offset, E = d.options;
      if (s) {
        var g = (0, V.default)({}, o), x = (0, kt.getRestrictionRect)(E.inner, l, g) || {}, T = (0, kt.getRestrictionRect)(E.outer, l, g) || {};
        Vu(x, Wu), Vu(T, Uu), s.top ? o.y = Math.min(Math.max(T.top + m.top, g.y), x.top + m.top) : s.bottom && (o.y = Math.max(Math.min(T.bottom + m.bottom, g.y), x.bottom + m.bottom)), s.left ? o.x = Math.min(Math.max(T.left + m.left, g.x), x.left + m.left) : s.right && (o.x = Math.max(Math.min(T.right + m.right, g.x), x.right + m.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Ir.restrictEdges = Yu;
    var Wf = (0, bt.makeModifier)(Yu, "restrictEdges");
    Ir.default = Wf;
    var ni = {};
    Object.defineProperty(ni, "__esModule", { value: true }), ni.restrictRect = ni.default = void 0;
    var Uf = (0, V.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, kt.restrict.defaults), Xu = { start: kt.restrict.start, set: kt.restrict.set, defaults: Uf };
    ni.restrictRect = Xu;
    var Vf = (0, bt.makeModifier)(Xu, "restrictRect");
    ni.default = Vf;
    var ii = {};
    Object.defineProperty(ii, "__esModule", { value: true }), ii.restrictSize = ii.default = void 0;
    var Yf = { width: -1 / 0, height: -1 / 0 }, Xf = { width: 1 / 0, height: 1 / 0 }, Zu = { start: function(i) {
      return Ir.restrictEdges.start(i);
    }, set: function(i) {
      var o = i.interaction, s = i.state, l = i.rect, d = i.edges, m = s.options;
      if (d) {
        var E = ce.tlbrToXywh((0, kt.getRestrictionRect)(m.min, o, i.coords)) || Yf, g = ce.tlbrToXywh((0, kt.getRestrictionRect)(m.max, o, i.coords)) || Xf;
        s.options = { endOnly: m.endOnly, inner: (0, V.default)({}, Ir.restrictEdges.noInner), outer: (0, V.default)({}, Ir.restrictEdges.noOuter) }, d.top ? (s.options.inner.top = l.bottom - E.height, s.options.outer.top = l.bottom - g.height) : d.bottom && (s.options.inner.bottom = l.top + E.height, s.options.outer.bottom = l.top + g.height), d.left ? (s.options.inner.left = l.right - E.width, s.options.outer.left = l.right - g.width) : d.right && (s.options.inner.right = l.left + E.width, s.options.outer.right = l.left + g.width), Ir.restrictEdges.set(i), s.options = m;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    ii.restrictSize = Zu;
    var Zf = (0, bt.makeModifier)(Zu, "restrictSize");
    ii.default = Zf;
    var Ls = {};
    Object.defineProperty(Ls, "__esModule", { value: true }), Object.defineProperty(Ls, "default", { enumerable: true, get: function() {
      return Tn.default;
    } });
    var nn = {};
    Object.defineProperty(nn, "__esModule", { value: true }), nn.snap = nn.default = void 0;
    var Qu = { start: function(i) {
      var o, s = i.interaction, l = i.interactable, d = i.element, m = i.rect, E = i.state, g = i.startOffset, x = E.options, T = x.offsetWithOrigin ? function(D) {
        var G = D.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(D.state.options.origin, null, null, [G])) || (0, He.default)(D.interactable, G, D.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: s.coords.start.page.x, y: s.coords.start.page.y };
      else {
        var I = (0, ce.resolveRectLike)(x.offset, l, d, [s]);
        (o = (0, ce.rectToXY)(I) || { x: 0, y: 0 }).x += T.x, o.y += T.y;
      }
      var P = x.relativePoints;
      E.offsets = m && P && P.length ? P.map(function(D, G) {
        return { index: G, relativePoint: D, x: g.left - m.width * D.x + o.x, y: g.top - m.height * D.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(i) {
      var o = i.interaction, s = i.coords, l = i.state, d = l.options, m = l.offsets, E = (0, He.default)(o.interactable, o.element, o.prepared.name), g = (0, V.default)({}, s), x = [];
      d.offsetWithOrigin || (g.x -= E.x, g.y -= E.y);
      for (var T = 0; T < m.length; T++)
        for (var I = m[T], P = g.x - I.x, D = g.y - I.y, G = 0, _ = d.targets.length; G < _; G++) {
          var $, X = d.targets[G];
          ($ = u.default.func(X) ? X(P, D, o._proxy, I, G) : X) && x.push({ x: (u.default.number($.x) ? $.x : P) + I.x, y: (u.default.number($.y) ? $.y : D) + I.y, range: u.default.number($.range) ? $.range : d.range, source: X, index: G, offset: I });
        }
      for (var q = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, re = 0; re < x.length; re++) {
        var oe = x[re], fe = oe.range, Pe = oe.x - g.x, Be = oe.y - g.y, Se = (0, ot.default)(Pe, Be), Le = Se <= fe;
        fe === 1 / 0 && q.inRange && q.range !== 1 / 0 && (Le = false), q.target && !(Le ? q.inRange && fe !== 1 / 0 ? Se / fe < q.distance / q.range : fe === 1 / 0 && q.range !== 1 / 0 || Se < q.distance : !q.inRange && Se < q.distance) || (q.target = oe, q.distance = Se, q.range = fe, q.inRange = Le, q.delta.x = Pe, q.delta.y = Be);
      }
      return q.inRange && (s.x = q.target.x, s.y = q.target.y), l.closest = q, q;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    nn.snap = Qu;
    var Qf = (0, bt.makeModifier)(Qu, "snap");
    nn.default = Qf;
    var $r = {};
    function Ju(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var s = 0, l = Array(o); s < o; s++)
        l[s] = i[s];
      return l;
    }
    __name(Ju, "Ju");
    c(Ju, "yo"), Object.defineProperty($r, "__esModule", { value: true }), $r.snapSize = $r.default = void 0;
    var Ku = { start: function(i) {
      var o = i.state, s = i.edges, l = o.options;
      if (!s)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: s.left ? 0 : 1, y: s.top ? 0 : 1 }], offset: l.offset || "self", origin: { x: 0, y: 0 }, range: l.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], nn.snap.start(i), o.offsets = i.state.offsets, i.state = o;
    }, set: function(i) {
      var o, s, l = i.interaction, d = i.state, m = i.coords, E = d.options, g = d.offsets, x = { x: m.x - g[0].x, y: m.y - g[0].y };
      d.options = (0, V.default)({}, E), d.options.targets = [];
      for (var T = 0; T < (E.targets || []).length; T++) {
        var I = (E.targets || [])[T], P = void 0;
        if (P = u.default.func(I) ? I(x.x, x.y, l) : I) {
          for (var D = 0; D < d.targetFields.length; D++) {
            var G = (o = d.targetFields[D], s = 2, function(q) {
              if (Array.isArray(q))
                return q;
            }(o) || function(q, re) {
              var oe = q == null ? null : typeof Symbol != "undefined" && q[Symbol.iterator] || q["@@iterator"];
              if (oe != null) {
                var fe, Pe, Be = [], Se = true, Le = false;
                try {
                  for (oe = oe.call(q); !(Se = (fe = oe.next()).done) && (Be.push(fe.value), !re || Be.length !== re); Se = true)
                    ;
                } catch (cr) {
                  Le = true, Pe = cr;
                } finally {
                  try {
                    Se || oe.return == null || oe.return();
                  } finally {
                    if (Le)
                      throw Pe;
                  }
                }
                return Be;
              }
            }(o, s) || function(q, re) {
              if (q) {
                if (typeof q == "string")
                  return Ju(q, re);
                var oe = Object.prototype.toString.call(q).slice(8, -1);
                return oe === "Object" && q.constructor && (oe = q.constructor.name), oe === "Map" || oe === "Set" ? Array.from(q) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Ju(q, re) : void 0;
              }
            }(o, s) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), _ = G[0], $ = G[1];
            if (_ in P || $ in P) {
              P.x = P[_], P.y = P[$];
              break;
            }
          }
          d.options.targets.push(P);
        }
      }
      var X = nn.snap.set(i);
      return d.options = E, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    $r.snapSize = Ku;
    var Jf = (0, bt.makeModifier)(Ku, "snapSize");
    $r.default = Jf;
    var oi = {};
    Object.defineProperty(oi, "__esModule", { value: true }), oi.snapEdges = oi.default = void 0;
    var ec = { start: function(i) {
      var o = i.edges;
      return o ? (i.state.targetFields = i.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], $r.snapSize.start(i)) : null;
    }, set: $r.snapSize.set, defaults: (0, V.default)((0, xn.default)($r.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    oi.snapEdges = ec;
    var Kf = (0, bt.makeModifier)(ec, "snapEdges");
    oi.default = Kf;
    var js = {};
    Object.defineProperty(js, "__esModule", { value: true }), Object.defineProperty(js, "default", { enumerable: true, get: function() {
      return Tn.default;
    } });
    var Hs = {};
    Object.defineProperty(Hs, "__esModule", { value: true }), Object.defineProperty(Hs, "default", { enumerable: true, get: function() {
      return Tn.default;
    } });
    var ai = {};
    Object.defineProperty(ai, "__esModule", { value: true }), ai.default = void 0;
    var eh = { aspectRatio: ri.default, restrictEdges: Ir.default, restrict: kt.default, restrictRect: ni.default, restrictSize: ii.default, snapEdges: oi.default, snap: nn.default, snapSize: $r.default, spring: js.default, avoid: Ns.default, transform: Hs.default, rubberband: Ls.default };
    ai.default = eh;
    var ia = {};
    Object.defineProperty(ia, "__esModule", { value: true }), ia.default = void 0;
    var th = { id: "modifiers", install: function(i) {
      var o = i.interactStatic;
      for (var s in i.usePlugin(bt.default), i.usePlugin(na.default), o.modifiers = ai.default, ai.default) {
        var l = ai.default[s], d = l._defaults, m = l._methods;
        d._methods = m, i.defaults.perAction[s] = d;
      }
    } }, rh = th;
    ia.default = rh;
    var On = {};
    function Bs(i) {
      return Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Bs(i);
    }
    __name(Bs, "Bs");
    c(Bs, "Io");
    function nh(i, o) {
      for (var s = 0; s < o.length; s++) {
        var l = o[s];
        l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(i, l.key, l);
      }
    }
    __name(nh, "nh");
    c(nh, "Do");
    function $s(i, o) {
      return $s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
        return s.__proto__ = l, s;
      }, $s(i, o);
    }
    __name($s, "$s");
    c($s, "Ao");
    function ih(i, o) {
      if (o && (Bs(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return qs(i);
    }
    __name(ih, "ih");
    c(ih, "zo");
    function qs(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(qs, "qs");
    c(qs, "Co");
    function oa(i) {
      return oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, oa(i);
    }
    __name(oa, "oa");
    c(oa, "Ro"), Object.defineProperty(On, "__esModule", { value: true }), On.default = On.PointerEvent = void 0;
    var oh = function(i) {
      (function(g, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), Object.defineProperty(g, "prototype", { writable: false }), x && $s(g, x);
      })(E, i);
      var o, s, l, d, m = (l = E, d = function() {
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
        var g, x = oa(l);
        if (d) {
          var T = oa(this).constructor;
          g = Reflect.construct(x, arguments, T);
        } else
          g = x.apply(this, arguments);
        return ih(this, g);
      });
      function E(g, x, T, I, P, D) {
        var G;
        if (function(X, q) {
          if (!(X instanceof q))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), G = m.call(this, P), K.pointerExtend(qs(G), T), T !== x && K.pointerExtend(qs(G), x), G.timeStamp = D, G.originalEvent = T, G.type = g, G.pointerId = K.getPointerId(x), G.pointerType = K.getPointerType(x), G.target = I, G.currentTarget = null, g === "tap") {
          var _ = P.getPointerIndex(x);
          G.dt = G.timeStamp - P.pointers[_].downTime;
          var $ = G.timeStamp - P.tapTime;
          G.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === G.target && $ < 500;
        } else
          g === "doubletap" && (G.dt = x.timeStamp - P.tapTime, G.double = true);
        return G;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (s = [{ key: "_subtractOrigin", value: function(g) {
        var x = g.x, T = g.y;
        return this.pageX -= x, this.pageY -= T, this.clientX -= x, this.clientY -= T, this;
      } }, { key: "_addOrigin", value: function(g) {
        var x = g.x, T = g.y;
        return this.pageX += x, this.pageY += T, this.clientX += x, this.clientY += T, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && nh(o.prototype, s), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(er.BaseEvent);
    On.PointerEvent = On.default = oh;
    var $i = {};
    Object.defineProperty($i, "__esModule", { value: true }), $i.default = void 0;
    var aa = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = aa, i.defaults.actions.pointerEvents = aa.defaults, (0, V.default)(i.actions.phaselessTypes, aa.types);
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var o = i.down, s = i.pointerInfo;
      !o && s.hold || (s.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, o) {
      var s = i.interaction, l = i.pointer, d = i.event, m = i.eventTarget;
      i.duplicate || s.pointerIsDown && !s.pointerWasMoved || (s.pointerIsDown && Fs(i), on({ interaction: s, pointer: l, event: d, eventTarget: m, type: "move" }, o));
    }, "interactions:down": function(i, o) {
      (function(s, l) {
        for (var d = s.interaction, m = s.pointer, E = s.event, g = s.eventTarget, x = s.pointerIndex, T = d.pointers[x].hold, I = R.getPath(g), P = { interaction: d, pointer: m, event: E, eventTarget: g, type: "hold", targets: [], path: I, node: null }, D = 0; D < I.length; D++) {
          var G = I[D];
          P.node = G, l.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var _ = 1 / 0, $ = 0; $ < P.targets.length; $++) {
            var X = P.targets[$].eventable.options.holdDuration;
            X < _ && (_ = X);
          }
          T.duration = _, T.timeout = setTimeout(function() {
            on({ interaction: d, eventTarget: g, pointer: m, event: E, type: "hold" }, l);
          }, _);
        }
      })(i, o), on(i, o);
    }, "interactions:up": function(i, o) {
      Fs(i), on(i, o), function(s, l) {
        var d = s.interaction, m = s.pointer, E = s.event, g = s.eventTarget;
        d.pointerWasMoved || on({ interaction: d, eventTarget: g, pointer: m, event: E, type: "tap" }, l);
      }(i, o);
    }, "interactions:cancel": function(i, o) {
      Fs(i), on(i, o);
    } }, PointerEvent: On.PointerEvent, fire: on, collectEventTargets: tc, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function on(i, o) {
      var s = i.interaction, l = i.pointer, d = i.event, m = i.eventTarget, E = i.type, g = i.targets, x = g === void 0 ? tc(i, o) : g, T = new On.PointerEvent(E, l, d, m, s, o.now());
      o.fire("pointerEvents:new", { pointerEvent: T });
      for (var I = { interaction: s, pointer: l, event: d, eventTarget: m, targets: x, type: E, pointerEvent: T }, P = 0; P < x.length; P++) {
        var D = x[P];
        for (var G in D.props || {})
          T[G] = D.props[G];
        var _ = (0, He.default)(D.eventable, D.node);
        if (T._subtractOrigin(_), T.eventable = D.eventable, T.currentTarget = D.node, D.eventable.fire(T), T._addOrigin(_), T.immediatePropagationStopped || T.propagationStopped && P + 1 < x.length && x[P + 1].node !== T.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", I), E === "tap") {
        var $ = T.double ? on({ interaction: s, pointer: l, event: d, eventTarget: m, type: "doubletap" }, o) : T;
        s.prevTap = $, s.tapTime = $.timeStamp;
      }
      return T;
    }
    __name(on, "on");
    c(on, "Yo");
    function tc(i, o) {
      var s = i.interaction, l = i.pointer, d = i.event, m = i.eventTarget, E = i.type, g = s.getPointerIndex(l), x = s.pointers[g];
      if (E === "tap" && (s.pointerWasMoved || !x || x.downTarget !== m))
        return [];
      for (var T = R.getPath(m), I = { interaction: s, pointer: l, event: d, eventTarget: m, type: E, path: T, targets: [], node: null }, P = 0; P < T.length; P++) {
        var D = T[P];
        I.node = D, o.fire("pointerEvents:collect-targets", I);
      }
      return E === "hold" && (I.targets = I.targets.filter(function(G) {
        var _;
        return G.eventable.options.holdDuration === ((_ = s.pointers[g]) == null ? void 0 : _.hold.duration);
      })), I.targets;
    }
    __name(tc, "tc");
    c(tc, "Wo");
    function Fs(i) {
      var o = i.interaction, s = i.pointerIndex, l = o.pointers[s].hold;
      l && l.timeout && (clearTimeout(l.timeout), l.timeout = null);
    }
    __name(Fs, "Fs");
    c(Fs, "Lo");
    var ah = aa;
    $i.default = ah;
    var sa = {};
    function sh(i) {
      var o = i.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(sh, "sh");
    c(sh, "No"), Object.defineProperty(sa, "__esModule", { value: true }), sa.default = void 0;
    var lh = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin($i.default);
      var o = i.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o) {
      return i["pointerEvents:".concat(o)] = sh, i;
    }, { "pointerEvents:new": function(i) {
      var o = i.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(i, o) {
      var s = i.interaction, l = i.pointerEvent, d = i.eventTarget, m = i.targets;
      if (l.type === "hold" && m.length) {
        var E = m[0].eventable.options.holdRepeatInterval;
        E <= 0 || (s.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: s, eventTarget: d, type: "hold", pointer: l, event: l }, o);
        }, E));
      }
    } }) }, uh = lh;
    sa.default = uh;
    var la = {};
    function ch(i) {
      return (0, V.default)(this.events.options, i), this;
    }
    __name(ch, "ch");
    c(ch, "Ho"), Object.defineProperty(la, "__esModule", { value: true }), la.default = void 0;
    var ph = { id: "pointer-events/interactableTargets", install: function(i) {
      var o = i.Interactable;
      o.prototype.pointerEvents = ch;
      var s = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(l, d) {
        var m = s.call(this, l, d);
        return m === this && (this.events.options[l] = d), m;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, o) {
      var s = i.targets, l = i.node, d = i.type, m = i.eventTarget;
      o.interactables.forEachMatch(l, function(E) {
        var g = E.events, x = g.options;
        g.types[d] && g.types[d].length && E.testIgnoreAllow(x, l, m) && s.push({ node: l, eventable: g, props: { interactable: E } });
      });
    }, "interactable:new": function(i) {
      var o = i.interactable;
      o.events.getRect = function(s) {
        return o.getRect(s);
      };
    }, "interactable:set": function(i, o) {
      var s = i.interactable, l = i.options;
      (0, V.default)(s.events.options, o.pointerEvents.defaults), (0, V.default)(s.events.options, l.pointerEvents || {});
    } } }, dh = ph;
    la.default = dh;
    var ua = {};
    Object.defineProperty(ua, "__esModule", { value: true }), ua.default = void 0;
    var fh = { id: "pointer-events", install: function(i) {
      i.usePlugin($i), i.usePlugin(sa.default), i.usePlugin(la.default);
    } }, hh = fh;
    ua.default = hh;
    var qi = {};
    function rc(i) {
      var o = i.Interactable;
      i.actions.phases.reflow = true, o.prototype.reflow = function(s) {
        return function(l, d, m) {
          for (var E = u.default.string(l.target) ? Ie.from(l._context.querySelectorAll(l.target)) : [l.target], g = m.window.Promise, x = g ? [] : null, T = function() {
            var P = E[I], D = l.getRect(P);
            if (!D)
              return "break";
            var G = Ie.find(m.interactions.list, function(re) {
              return re.interacting() && re.interactable === l && re.element === P && re.prepared.name === d.name;
            }), _ = void 0;
            if (G)
              G.move(), x && (_ = G._reflowPromise || new g(function(re) {
                G._reflowResolve = re;
              }));
            else {
              var $ = (0, ce.tlbrToXywh)(D), X = { page: { x: $.x, y: $.y }, client: { x: $.x, y: $.y }, timeStamp: m.now() }, q = K.coordsToEvent(X);
              _ = function(re, oe, fe, Pe, Be) {
                var Se = re.interactions.new({ pointerType: "reflow" }), Le = { interaction: Se, event: Be, pointer: Be, eventTarget: fe, phase: "reflow" };
                Se.interactable = oe, Se.element = fe, Se.prevEvent = Be, Se.updatePointer(Be, Be, fe, true), K.setZeroCoords(Se.coords.delta), (0, tr.copyAction)(Se.prepared, Pe), Se._doPhase(Le);
                var cr = re.window.Promise, qr = cr ? new cr(function(Vs) {
                  Se._reflowResolve = Vs;
                }) : void 0;
                return Se._reflowPromise = qr, Se.start(Pe, oe, fe), Se._interacting ? (Se.move(Le), Se.end(Be)) : (Se.stop(), Se._reflowResolve()), Se.removePointer(Be, Be), qr;
              }(m, l, P, d, q);
            }
            x && x.push(_);
          }, I = 0; I < E.length && T() !== "break"; I++)
            ;
          return x && g.all(x).then(function() {
            return l;
          });
        }(this, s, i);
      };
    }
    __name(rc, "rc");
    c(rc, "ni"), Object.defineProperty(qi, "__esModule", { value: true }), qi.default = void 0, qi.install = rc;
    var vh = { id: "reflow", install: rc, listeners: { "interactions:stop": function(i, o) {
      var s = i.interaction;
      s.pointerType === "reflow" && (s._reflowResolve && s._reflowResolve(), Ie.remove(o.interactions.list, s));
    } } }, mh = vh;
    qi.default = mh;
    var ur = { exports: {} };
    function Ws(i) {
      return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ws(i);
    }
    __name(Ws, "Ws");
    c(Ws, "ai"), Object.defineProperty(ur.exports, "__esModule", { value: true }), ur.exports.default = void 0, at.default.use(ei.default), at.default.use(Cn.default), at.default.use(ua.default), at.default.use(ti.default), at.default.use(ia.default), at.default.use(Ho.default), at.default.use(lr.default), at.default.use(tn.default), at.default.use(qi.default);
    var gh = at.default;
    if (ur.exports.default = gh, Ws(ur) === "object" && ur)
      try {
        ur.exports = at.default;
      } catch (i) {
      }
    at.default.default = at.default, ur = ur.exports;
    var Mn = { exports: {} };
    function Us(i) {
      return Us = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Us(i);
    }
    __name(Us, "Us");
    c(Us, "ui"), Object.defineProperty(Mn.exports, "__esModule", { value: true }), Mn.exports.default = void 0;
    var bh = ur.default;
    if (Mn.exports.default = bh, Us(Mn) === "object" && Mn)
      try {
        Mn.exports = ur.default;
      } catch (i) {
      }
    return ur.default.default = ur.default, Mn.exports;
  });
});
var Md = pa((Od, su) => {
  (function(t) {
    "use strict";
    var r = /* @__PURE__ */ __name(function() {
    }, "r"), e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(p) {
      return setTimeout(p, 16);
    };
    function n() {
      var p = this;
      p.reads = [], p.writes = [], p.raf = e.bind(t), r("initialized", p);
    }
    __name(n, "n");
    c(n, "FastDom"), n.prototype = { constructor: n, runTasks: function(p) {
      r("run tasks");
      for (var f; f = p.shift(); )
        f();
    }, measure: function(p, f) {
      r("measure");
      var w = f ? p.bind(f) : p;
      return this.reads.push(w), a(this), w;
    }, mutate: function(p, f) {
      r("mutate");
      var w = f ? p.bind(f) : p;
      return this.writes.push(w), a(this), w;
    }, clear: function(p) {
      return r("clear", p), h(this.reads, p) || h(this.writes, p);
    }, extend: function(p) {
      if (r("extend", p), typeof p != "object")
        throw new Error("expected object");
      var f = Object.create(this);
      return b(f, p), f.fastdom = this, f.initialize && f.initialize(), f;
    }, catch: null };
    function a(p) {
      p.scheduled || (p.scheduled = true, p.raf(u.bind(null, p)), r("flush scheduled"));
    }
    __name(a, "a");
    c(a, "scheduleFlush");
    function u(p) {
      r("flush");
      var f = p.writes, w = p.reads, y;
      try {
        r("flushing reads", w.length), p.runTasks(w), r("flushing writes", f.length), p.runTasks(f);
      } catch (S) {
        y = S;
      }
      if (p.scheduled = false, (w.length || f.length) && a(p), y)
        if (r("task errored", y.message), p.catch)
          p.catch(y);
        else
          throw y;
    }
    __name(u, "u");
    c(u, "flush");
    function h(p, f) {
      var w = p.indexOf(f);
      return !!~w && !!p.splice(w, 1);
    }
    __name(h, "h");
    c(h, "remove");
    function b(p, f) {
      for (var w in f)
        f.hasOwnProperty(w) && (p[w] = f[w]);
    }
    __name(b, "b");
    c(b, "mixin");
    var v = t.fastdom = t.fastdom || new n();
    typeof define == "function" ? define(function() {
      return v;
    }) : typeof su == "object" && (su.exports = v);
  })(typeof window != "undefined" ? window : Od);
});
var zd = pa((lu, Pd) => {
  (function(t) {
    "use strict";
    var r = Math.cosh || function(p) {
      return Math.abs(p) < 1e-9 ? 1 - p : (Math.exp(p) + Math.exp(-p)) * 0.5;
    }, e = Math.sinh || function(p) {
      return Math.abs(p) < 1e-9 ? p : (Math.exp(p) - Math.exp(-p)) * 0.5;
    }, n = c(function(p) {
      var f = Math.PI / 4;
      if (-f > p || p > f)
        return Math.cos(p) - 1;
      var w = p * p;
      return w * (w * (w * (w * (w * (w * (w * (w / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), a = c(function(p, f) {
      var w = Math.abs(p), y = Math.abs(f);
      return w < 3e3 && y < 3e3 ? Math.sqrt(w * w + y * y) : (w < y ? (w = y, y = p / f) : y = f / p, w * Math.sqrt(1 + y * y));
    }, "hypot"), u = c(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function h(p, f) {
      var w = Math.abs(p), y = Math.abs(f);
      return p === 0 ? Math.log(y) : f === 0 ? Math.log(w) : w < 3e3 && y < 3e3 ? Math.log(p * p + f * f) * 0.5 : (p = p / 2, f = f / 2, 0.5 * Math.log(p * p + f * f) + Math.LN2);
    }
    __name(h, "h");
    c(h, "logHypot");
    var b = c(function(p, f) {
      var w = { re: 0, im: 0 };
      if (p == null)
        w.re = w.im = 0;
      else if (f !== void 0)
        w.re = p, w.im = f;
      else
        switch (typeof p) {
          case "object":
            if ("im" in p && "re" in p)
              w.re = p.re, w.im = p.im;
            else if ("abs" in p && "arg" in p) {
              if (!Number.isFinite(p.abs) && Number.isFinite(p.arg))
                return v.INFINITY;
              w.re = p.abs * Math.cos(p.arg), w.im = p.abs * Math.sin(p.arg);
            } else if ("r" in p && "phi" in p) {
              if (!Number.isFinite(p.r) && Number.isFinite(p.phi))
                return v.INFINITY;
              w.re = p.r * Math.cos(p.phi), w.im = p.r * Math.sin(p.phi);
            } else
              p.length === 2 ? (w.re = p[0], w.im = p[1]) : u();
            break;
          case "string":
            w.im = w.re = 0;
            var y = p.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, C = 0;
            y === null && u();
            for (var O = 0; O < y.length; O++) {
              var z = y[O];
              z === " " || z === "	" || z === `
` || (z === "+" ? S++ : z === "-" ? C++ : z === "i" || z === "I" ? (S + C === 0 && u(), y[O + 1] !== " " && !isNaN(y[O + 1]) ? (w.im += parseFloat((C % 2 ? "-" : "") + y[O + 1]), O++) : w.im += parseFloat((C % 2 ? "-" : "") + "1"), S = C = 0) : ((S + C === 0 || isNaN(z)) && u(), y[O + 1] === "i" || y[O + 1] === "I" ? (w.im += parseFloat((C % 2 ? "-" : "") + z), O++) : w.re += parseFloat((C % 2 ? "-" : "") + z), S = C = 0));
            }
            S + C > 0 && u();
            break;
          case "number":
            w.im = 0, w.re = p;
            break;
          default:
            u();
        }
      return isNaN(w.re) || isNaN(w.im), w;
    }, "parse");
    function v(p, f) {
      if (!(this instanceof v))
        return new v(p, f);
      var w = b(p, f);
      this.re = w.re, this.im = w.im;
    }
    __name(v, "v");
    c(v, "Complex"), v.prototype = { re: 0, im: 0, sign: function() {
      var p = this.abs();
      return new v(this.re / p, this.im / p);
    }, add: function(p, f) {
      var w = new v(p, f);
      return this.isInfinite() && w.isInfinite() ? v.NAN : this.isInfinite() || w.isInfinite() ? v.INFINITY : new v(this.re + w.re, this.im + w.im);
    }, sub: function(p, f) {
      var w = new v(p, f);
      return this.isInfinite() && w.isInfinite() ? v.NAN : this.isInfinite() || w.isInfinite() ? v.INFINITY : new v(this.re - w.re, this.im - w.im);
    }, mul: function(p, f) {
      var w = new v(p, f);
      return this.isInfinite() && w.isZero() || this.isZero() && w.isInfinite() ? v.NAN : this.isInfinite() || w.isInfinite() ? v.INFINITY : w.im === 0 && this.im === 0 ? new v(this.re * w.re, 0) : new v(this.re * w.re - this.im * w.im, this.re * w.im + this.im * w.re);
    }, div: function(p, f) {
      var w = new v(p, f);
      if (this.isZero() && w.isZero() || this.isInfinite() && w.isInfinite())
        return v.NAN;
      if (this.isInfinite() || w.isZero())
        return v.INFINITY;
      if (this.isZero() || w.isInfinite())
        return v.ZERO;
      p = this.re, f = this.im;
      var y = w.re, S = w.im, C, O;
      return S === 0 ? new v(p / y, f / y) : Math.abs(y) < Math.abs(S) ? (O = y / S, C = y * O + S, new v((p * O + f) / C, (f * O - p) / C)) : (O = S / y, C = S * O + y, new v((p + f * O) / C, (f - p * O) / C));
    }, pow: function(p, f) {
      var w = new v(p, f);
      if (p = this.re, f = this.im, w.isZero())
        return v.ONE;
      if (w.im === 0) {
        if (f === 0 && p > 0)
          return new v(Math.pow(p, w.re), 0);
        if (p === 0)
          switch ((w.re % 4 + 4) % 4) {
            case 0:
              return new v(Math.pow(f, w.re), 0);
            case 1:
              return new v(0, Math.pow(f, w.re));
            case 2:
              return new v(-Math.pow(f, w.re), 0);
            case 3:
              return new v(0, -Math.pow(f, w.re));
          }
      }
      if (p === 0 && f === 0 && w.re > 0 && w.im >= 0)
        return v.ZERO;
      var y = Math.atan2(f, p), S = h(p, f);
      return p = Math.exp(w.re * S - w.im * y), f = w.im * S + w.re * y, new v(p * Math.cos(f), p * Math.sin(f));
    }, sqrt: function() {
      var p = this.re, f = this.im, w = this.abs(), y, S;
      if (p >= 0) {
        if (f === 0)
          return new v(Math.sqrt(p), 0);
        y = 0.5 * Math.sqrt(2 * (w + p));
      } else
        y = Math.abs(f) / Math.sqrt(2 * (w - p));
      return p <= 0 ? S = 0.5 * Math.sqrt(2 * (w - p)) : S = Math.abs(f) / Math.sqrt(2 * (w + p)), new v(y, f < 0 ? -S : S);
    }, exp: function() {
      var p = Math.exp(this.re);
      return this.im, new v(p * Math.cos(this.im), p * Math.sin(this.im));
    }, expm1: function() {
      var p = this.re, f = this.im;
      return new v(Math.expm1(p) * Math.cos(f) + n(f), Math.exp(p) * Math.sin(f));
    }, log: function() {
      var p = this.re, f = this.im;
      return f === 0 && p > 0, new v(h(p, f), Math.atan2(f, p));
    }, abs: function() {
      return a(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var p = this.re, f = this.im;
      return new v(Math.sin(p) * r(f), Math.cos(p) * e(f));
    }, cos: function() {
      var p = this.re, f = this.im;
      return new v(Math.cos(p) * r(f), -Math.sin(p) * e(f));
    }, tan: function() {
      var p = 2 * this.re, f = 2 * this.im, w = Math.cos(p) + r(f);
      return new v(Math.sin(p) / w, e(f) / w);
    }, cot: function() {
      var p = 2 * this.re, f = 2 * this.im, w = Math.cos(p) - r(f);
      return new v(-Math.sin(p) / w, e(f) / w);
    }, sec: function() {
      var p = this.re, f = this.im, w = 0.5 * r(2 * f) + 0.5 * Math.cos(2 * p);
      return new v(Math.cos(p) * r(f) / w, Math.sin(p) * e(f) / w);
    }, csc: function() {
      var p = this.re, f = this.im, w = 0.5 * r(2 * f) - 0.5 * Math.cos(2 * p);
      return new v(Math.sin(p) * r(f) / w, -Math.cos(p) * e(f) / w);
    }, asin: function() {
      var p = this.re, f = this.im, w = new v(f * f - p * p + 1, -2 * p * f).sqrt(), y = new v(w.re - f, w.im + p).log();
      return new v(y.im, -y.re);
    }, acos: function() {
      var p = this.re, f = this.im, w = new v(f * f - p * p + 1, -2 * p * f).sqrt(), y = new v(w.re - f, w.im + p).log();
      return new v(Math.PI / 2 - y.im, y.re);
    }, atan: function() {
      var p = this.re, f = this.im;
      if (p === 0) {
        if (f === 1)
          return new v(0, 1 / 0);
        if (f === -1)
          return new v(0, -1 / 0);
      }
      var w = p * p + (1 - f) * (1 - f), y = new v((1 - f * f - p * p) / w, -2 * p / w).log();
      return new v(-0.5 * y.im, 0.5 * y.re);
    }, acot: function() {
      var p = this.re, f = this.im;
      if (f === 0)
        return new v(Math.atan2(1, p), 0);
      var w = p * p + f * f;
      return w !== 0 ? new v(p / w, -f / w).atan() : new v(p !== 0 ? p / 0 : 0, f !== 0 ? -f / 0 : 0).atan();
    }, asec: function() {
      var p = this.re, f = this.im;
      if (p === 0 && f === 0)
        return new v(0, 1 / 0);
      var w = p * p + f * f;
      return w !== 0 ? new v(p / w, -f / w).acos() : new v(p !== 0 ? p / 0 : 0, f !== 0 ? -f / 0 : 0).acos();
    }, acsc: function() {
      var p = this.re, f = this.im;
      if (p === 0 && f === 0)
        return new v(Math.PI / 2, 1 / 0);
      var w = p * p + f * f;
      return w !== 0 ? new v(p / w, -f / w).asin() : new v(p !== 0 ? p / 0 : 0, f !== 0 ? -f / 0 : 0).asin();
    }, sinh: function() {
      var p = this.re, f = this.im;
      return new v(e(p) * Math.cos(f), r(p) * Math.sin(f));
    }, cosh: function() {
      var p = this.re, f = this.im;
      return new v(r(p) * Math.cos(f), e(p) * Math.sin(f));
    }, tanh: function() {
      var p = 2 * this.re, f = 2 * this.im, w = r(p) + Math.cos(f);
      return new v(e(p) / w, Math.sin(f) / w);
    }, coth: function() {
      var p = 2 * this.re, f = 2 * this.im, w = r(p) - Math.cos(f);
      return new v(e(p) / w, -Math.sin(f) / w);
    }, csch: function() {
      var p = this.re, f = this.im, w = Math.cos(2 * f) - r(2 * p);
      return new v(-2 * e(p) * Math.cos(f) / w, 2 * r(p) * Math.sin(f) / w);
    }, sech: function() {
      var p = this.re, f = this.im, w = Math.cos(2 * f) + r(2 * p);
      return new v(2 * r(p) * Math.cos(f) / w, -2 * e(p) * Math.sin(f) / w);
    }, asinh: function() {
      var p = this.im;
      this.im = -this.re, this.re = p;
      var f = this.asin();
      return this.re = -this.im, this.im = p, p = f.re, f.re = -f.im, f.im = p, f;
    }, acosh: function() {
      var p = this.acos();
      if (p.im <= 0) {
        var f = p.re;
        p.re = -p.im, p.im = f;
      } else {
        var f = p.im;
        p.im = -p.re, p.re = f;
      }
      return p;
    }, atanh: function() {
      var p = this.re, f = this.im, w = p > 1 && f === 0, y = 1 - p, S = 1 + p, C = y * y + f * f, O = C !== 0 ? new v((S * y - f * f) / C, (f * y + S * f) / C) : new v(p !== -1 ? p / 0 : 0, f !== 0 ? f / 0 : 0), z = O.re;
      return O.re = h(O.re, O.im) / 2, O.im = Math.atan2(O.im, z) / 2, w && (O.im = -O.im), O;
    }, acoth: function() {
      var p = this.re, f = this.im;
      if (p === 0 && f === 0)
        return new v(0, Math.PI / 2);
      var w = p * p + f * f;
      return w !== 0 ? new v(p / w, -f / w).atanh() : new v(p !== 0 ? p / 0 : 0, f !== 0 ? -f / 0 : 0).atanh();
    }, acsch: function() {
      var p = this.re, f = this.im;
      if (f === 0)
        return new v(p !== 0 ? Math.log(p + Math.sqrt(p * p + 1)) : 1 / 0, 0);
      var w = p * p + f * f;
      return w !== 0 ? new v(p / w, -f / w).asinh() : new v(p !== 0 ? p / 0 : 0, f !== 0 ? -f / 0 : 0).asinh();
    }, asech: function() {
      var p = this.re, f = this.im;
      if (this.isZero())
        return v.INFINITY;
      var w = p * p + f * f;
      return w !== 0 ? new v(p / w, -f / w).acosh() : new v(p !== 0 ? p / 0 : 0, f !== 0 ? -f / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return v.INFINITY;
      if (this.isInfinite())
        return v.ZERO;
      var p = this.re, f = this.im, w = p * p + f * f;
      return new v(p / w, -f / w);
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
    }, equals: function(p, f) {
      var w = new v(p, f);
      return Math.abs(w.re - this.re) <= v.EPSILON && Math.abs(w.im - this.im) <= v.EPSILON;
    }, clone: function() {
      return new v(this.re, this.im);
    }, toString: function() {
      var p = this.re, f = this.im, w = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(p) < v.EPSILON && (p = 0), Math.abs(f) < v.EPSILON && (f = 0), f === 0 ? w + p : (p !== 0 ? (w += p, w += " ", f < 0 ? (f = -f, w += "-") : w += "+", w += " ") : f < 0 && (f = -f, w += "-"), f !== 1 && (w += f), w + "i"));
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
    }) : typeof lu == "object" ? (Object.defineProperty(v, "__esModule", { value: true }), v.default = v, v.Complex = v, Pd.exports = v) : t.Complex = v;
  })(lu);
});
var sn = In(ac());
function sc(t) {
  let r = ln(t);
  return new sn.default(r).valueOf() * Math.PI;
}
__name(sc, "sc");
c(sc, "W");
function Wi(t) {
  let r = ln(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(Wi, "Wi");
c(Wi, "H");
function lc(t, r) {
  return new sn.default(ln(t)).valueOf() < new sn.default(ln(r)).valueOf();
}
__name(lc, "lc");
c(lc, "V");
function uc(t, r) {
  return new sn.default(ln(t)).valueOf() > new sn.default(ln(r)).valueOf();
}
__name(uc, "uc");
c(uc, "Y");
function cc(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let r = ln(t);
    return new sn.default(r).valueOf(), true;
  } catch (r) {
    return false;
  }
}
__name(cc, "cc");
c(cc, "J");
function ln(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(ln, "ln");
c(ln, "l");
function pc(t) {
  try {
    let r = ln(t), e = new sn.default(r).toFraction().split("/"), n;
    return e[0] === "0" ? n = "0" : e[0] === "1" ? n = "\u03C0" : e[0] === "-1" ? n = "-\u03C0" : n = `${e[0]}\u03C0`, e.length === 1 ? n : `${n}/${e[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(pc, "pc");
c(pc, "j");
var Ch = Object.prototype.toString.call({});
var Th = "!recursion-limit!";
var Oh = 10;
function Xe(t, r = Oh) {
  return Mh(t) || Ih(t, r) || Ah(t, r);
}
__name(Xe, "Xe");
c(Xe, "p");
function Mh(t) {
  if (t === null)
    return "null";
  if (t === void 0)
    return "undefined";
  if (typeof t == "string")
    return `"${t}"`;
  if (typeof t == "number")
    return String(t);
}
__name(Mh, "Mh");
c(Mh, "G");
function Ih(t, r) {
  if (r === 0)
    return Th;
  if (t instanceof Map)
    return Ph(t, r);
  if (t instanceof Set)
    return zh(t, r);
  if (((e) => e[Symbol.iterator] !== void 0)(t))
    return Rh(t, r);
}
__name(Ih, "Ih");
c(Ih, "M");
function Ah(t, r) {
  let e = String(t);
  return e !== Ch ? e : _h(t, r);
}
__name(Ah, "Ah");
c(Ah, "O");
function Ph(t, r) {
  let e = [];
  for (let [n, a] of t.entries()) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let u = Xe(n, r - 1), h = Xe(a, r - 1);
    e.push(`${u}: ${h}`);
  }
  return `Map{${e.join(", ")}}`;
}
__name(Ph, "Ph");
c(Ph, "F");
function zh(t, r) {
  let e = [];
  for (let n of t) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(Xe(n, r - 1));
  }
  return `Set{${e.join(", ")}}`;
}
__name(zh, "zh");
c(zh, "N");
function Rh(t, r) {
  let e = [];
  for (let n of t) {
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    e.push(Xe(n, r - 1));
  }
  return `${Array.isArray(t) ? "" : t.constructor.name}[${e.join(", ")}]`;
}
__name(Rh, "Rh");
c(Rh, "D");
function _h(t, r) {
  let e = [];
  for (let a in t) {
    if (!Object.prototype.hasOwnProperty.call(t, a))
      continue;
    if (e.length > 1e3) {
      e.push("[...]");
      break;
    }
    let u = t[a], h = Xe(a, r - 1), b = Xe(u, r - 1);
    e.push(`${h}: ${b}`);
  }
  let n = t.constructor.name;
  return `${n === {}.constructor.name ? "" : `(Type: ${n})`}{${e.join(", ")}}`;
}
__name(_h, "_h");
c(_h, "U");
var Xs = 0;
var st = c(class extends Error {
  constructor(t, r) {
    super(t), this.detailsObj = r, this.name = "Error", this.message = t, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Xs++;
    try {
      this.details = Xs === 1 ? Xe(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (e) {
      console.error(e), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      Xs--;
    }
  }
}, "m");
var kh = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var rr = c(class {
  static parseFloat(t) {
    if (t.length === 0)
      throw new Error(`Not a number: '${t}'`);
    if (t[0] === "-")
      return -rr.parseFloat(t.substr(1));
    if (t[0] === "\u221A")
      return Math.sqrt(rr.parseFloat(t.substr(1)));
    let r = rr.matchUnicodeFraction((n) => n.character === t);
    if (r !== void 0)
      return r.value;
    let e = parseFloat(t);
    if (isNaN(e))
      throw new Error(`Not a number: '${t}'`);
    return e;
  }
  static simplifyByRounding(t, r) {
    if (t < 0)
      return -rr.simplifyByRounding(-t, r);
    let e = t % 1;
    if (e <= r || 1 - e <= r)
      return Math.round(t);
    let n = rr.matchUnicodeFraction((u) => Math.abs(u.value - t) <= r);
    if (n !== void 0)
      return n.value;
    let a = rr.matchUnicodeFraction((u) => Math.abs(Math.sqrt(u.value) - t) <= r);
    return a !== void 0 ? Math.sqrt(a.value) : t;
  }
  static matchUnicodeFraction(t) {
    for (let r of kh)
      if (t(r))
        return r;
  }
  constructor(t, r, e, n) {
    this.allowAbbreviation = t, this.maxAbbreviationError = r, this.fixedDigits = e, this.itemSeparator = n;
  }
  formatFloat(t) {
    return this.allowAbbreviation ? this.abbreviateFloat(t, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? t.toFixed(this.fixedDigits) : String(t);
  }
  abbreviateFloat(t, r = 0, e = void 0) {
    if (Math.abs(t) < r)
      return "0";
    if (t < 0)
      return `-${this.abbreviateFloat(-t, r, e)}`;
    let n = rr.matchUnicodeFraction((u) => Math.abs(u.value - t) <= r);
    if (n !== void 0)
      return n.character;
    let a = rr.matchUnicodeFraction((u) => Math.abs(Math.sqrt(u.value) - t) <= r);
    return a !== void 0 ? `\u221A${a.character}` : t % 1 !== 0 && e !== void 0 ? t.toFixed(e) : t.toString();
  }
}, "u");
var Fi = rr;
Fi.CONSISTENT = new rr(false, 0, 2, ", "), Fi.EXACT = new rr(true, 0, void 0, ", "), Fi.MINIFIED = new rr(true, 0, void 0, ","), Fi.SIMPLIFIED = new rr(true, 5e-4, 3, ", ");
var B = c(class {
  static need(t, r, e) {
    if (t !== true) {
      let n = e === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(e).join(", ")}]`, a = `Precondition failed

Message: ${r === void 0 ? "(not provided)" : r}

Args: ${n}`;
      throw new Error(a);
    }
  }
  static notNull(t) {
    B.need(t != null, "notNull");
  }
  static snappedCosSin(t) {
    let r = Math.PI / 4, e = Math.round(t / r);
    if (e * r === t) {
      let n = Math.sqrt(0.5);
      return [[1, 0], [n, n], [0, 1], [-n, n], [-1, 0], [-n, -n], [0, -1], [n, -n]][e & 7];
    }
    return [Math.cos(t), Math.sin(t)];
  }
}, "d");
var he = c(class {
  static from(t) {
    if (t instanceof he)
      return t;
    if (typeof t == "number")
      return new he(t, 0);
    throw new st("Unrecognized value type.", { v: t });
  }
  static polar(t, r) {
    let [e, n] = B.snappedCosSin(r);
    return new he(t * e, t * n);
  }
  static realPartOf(t) {
    if (t instanceof he)
      return t.real;
    if (typeof t == "number")
      return t;
    throw new st("Unrecognized value type.", { v: t });
  }
  static imagPartOf(t) {
    if (t instanceof he)
      return t.imag;
    if (typeof t == "number")
      return 0;
    throw new st("Unrecognized value type.", { v: t });
  }
  constructor(t, r) {
    this.real = t, this.imag = r;
  }
  static rootsOfQuadratic(t, r, e) {
    if (t = he.from(t), r = he.from(r), e = he.from(e), t.isEqualTo(0)) {
      if (!r.isEqualTo(0))
        return [e.times(-1).dividedBy(r)];
      if (!e.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let n = r.times(r).minus(t.times(e).times(4)).sqrts(), a = r.times(-1), u = t.times(2);
    return n.map((h) => a.minus(h).dividedBy(u));
  }
  isEqualTo(t) {
    return t instanceof he ? this.real === t.real && this.imag === t.imag : typeof t == "number" ? this.real === t && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(t, r) {
    if (t instanceof he || typeof t == "number") {
      let e = this.minus(he.from(t));
      return Math.abs(e.real) <= r && Math.abs(e.imag) <= r && e.abs() <= r;
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
    let t = this.norm2();
    return t < 1e-5 ? he.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t));
  }
  plus(t) {
    let r = he.from(t);
    return new he(this.real + r.real, this.imag + r.imag);
  }
  minus(t) {
    let r = he.from(t);
    return new he(this.real - r.real, this.imag - r.imag);
  }
  times(t) {
    let r = he.from(t);
    return new he(this.real * r.real - this.imag * r.imag, this.real * r.imag + this.imag * r.real);
  }
  dividedBy(t) {
    let r = he.from(t), e = r.norm2();
    if (e === 0)
      throw new Error("Division by Zero");
    let n = this.times(r.conjugate());
    return new he(n.real / e, n.imag / e);
  }
  sqrts() {
    let [t, r] = [this.real, this.imag], e = Math.sqrt(Math.sqrt(t * t + r * r));
    if (e === 0)
      return [he.ZERO];
    if (r === 0 && t < 0)
      return [new he(0, e), new he(0, -e)];
    let n = this.phase() / 2, a = he.polar(e, n);
    return [a, a.times(-1)];
  }
  conjugate() {
    return new he(this.real, -this.imag);
  }
  toString(t) {
    return t = t || Fi.EXACT, t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t);
  }
  neg() {
    return new he(-this.real, -this.imag);
  }
  raisedTo(t) {
    return t === 0.5 && this.imag === 0 && this.real >= 0 ? new he(Math.sqrt(this.real), 0) : he.ZERO.isEqualTo(t) ? he.ONE : this.isEqualTo(he.ZERO) ? he.ZERO : this.ln().times(he.from(t)).exp();
  }
  exp() {
    return he.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let t = this.times(he.I);
    return t.exp().plus(t.neg().exp()).times(0.5);
  }
  sin() {
    let t = this.times(he.I);
    return t.exp().minus(t.neg().exp()).dividedBy(new he(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new he(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(t) {
    return Math.abs(this.imag) <= t.maxAbbreviationError ? t.formatFloat(this.real) : Math.abs(this.real) <= t.maxAbbreviationError ? Math.abs(this.imag - 1) <= t.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= t.maxAbbreviationError ? "-i" : `${t.formatFloat(this.imag)}i` : this.toStringBothValues(t);
  }
  toStringBothValues(t) {
    let r = this.imag >= 0 ? "+" : "-", e = t.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= t.maxAbbreviationError ? "" : t.formatFloat(Math.abs(this.imag));
    return `${(t.allowAbbreviation || t.fixedDigits === void 0 || this.real < 0 ? "" : "+") + t.formatFloat(this.real) + r + e}i`;
  }
}, "o");
var an = he;
an.ZERO = new he(0, 0), an.ONE = new he(1, 0), an.I = new he(0, 1);
var Ui = { MAX_QUBIT_COUNT: 16 };
function ue(t, r = {}, e = document) {
  let n = new CustomEvent(t, { bubbles: true, cancelable: true, detail: r });
  return e.dispatchEvent(n);
}
__name(ue, "ue");
c(ue, "pe");
var dc = c((t) => typeof t == "number" && 1 <= t && t <= Ui.MAX_QUBIT_COUNT, "de");
var Zs = "\u25E6";
var Qs = "Bloch";
var Js = "\u2022";
var va = "H";
var ma = "Measure";
var ga = "P";
var Ks = "QFT\u2020";
var el = "QFT";
var ba = "X^\xBD";
var ya = "Rx";
var wa = "Ry";
var xa = "Rz";
var tl = "\u2026";
var rl = "Swap";
var Ea = "T";
var fc = "|0>";
var hc = "|1>";
var Sa = "X";
var Ca = "Y";
var Ta = "Z";
var nl = /* @__PURE__ */ new WeakSet();
function ol(t) {
  nl.add(t), t.shadowRoot && al(t.shadowRoot), ll(t), sl(t.ownerDocument);
}
__name(ol, "ol");
c(ol, "bind");
function al(t) {
  ll(t), sl(t);
}
__name(al, "al");
c(al, "bindShadow");
var Oa = /* @__PURE__ */ new WeakMap();
function sl(t = document) {
  if (Oa.has(t))
    return Oa.get(t);
  let r = false, e = new MutationObserver((a) => {
    for (let u of a)
      if (u.type === "attributes" && u.target instanceof Element)
        il(u.target);
      else if (u.type === "childList" && u.addedNodes.length)
        for (let h of u.addedNodes)
          h instanceof Element && ll(h);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, Oa.delete(t), e.disconnect();
  } };
  return Oa.set(t, n), n;
}
__name(sl, "sl");
c(sl, "listenForBind");
function ll(t) {
  for (let r of t.querySelectorAll("[data-action]"))
    il(r);
  t instanceof Element && t.hasAttribute("data-action") && il(t);
}
__name(ll, "ll");
c(ll, "bindElements");
function Dh(t) {
  let r = t.currentTarget;
  for (let e of vc(r))
    if (t.type === e.type) {
      let n = r.closest(e.tag);
      nl.has(n) && typeof n[e.method] == "function" && n[e.method](t);
      let a = r.getRootNode();
      if (a instanceof ShadowRoot && nl.has(a.host) && a.host.matches(e.tag)) {
        let u = a.host;
        typeof u[e.method] == "function" && u[e.method](t);
      }
    }
}
__name(Dh, "Dh");
c(Dh, "handleEvent");
function* vc(t) {
  for (let r of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, e), tag: r.slice(e + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(vc, "vc");
c(vc, "bindings");
function il(t) {
  for (let r of vc(t))
    t.addEventListener(r.type, Dh);
}
__name(il, "il");
c(il, "bindActions");
function ul(t) {
  let r = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[t.name] = t, window.customElements.define(r, t));
}
__name(ul, "ul");
c(ul, "register");
function cl(t, r) {
  let e = t.tagName.toLowerCase();
  if (t.shadowRoot) {
    for (let n of t.shadowRoot.querySelectorAll(`[data-target~="${e}.${r}"]`))
      if (!n.closest(e))
        return n;
  }
  for (let n of t.querySelectorAll(`[data-target~="${e}.${r}"]`))
    if (n.closest(e) === t)
      return n;
}
__name(cl, "cl");
c(cl, "findTarget");
function pl(t, r) {
  let e = t.tagName.toLowerCase(), n = [];
  if (t.shadowRoot)
    for (let a of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${r}"]`))
      a.closest(e) || n.push(a);
  for (let a of t.querySelectorAll(`[data-targets~="${e}.${r}"]`))
    a.closest(e) === t && n.push(a);
  return n;
}
__name(pl, "pl");
c(pl, "findTargets");
function Me(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return cl(this, r);
  } });
}
__name(Me, "Me");
c(Me, "target");
function lt(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return pl(this, r);
  } });
}
__name(lt, "lt");
c(lt, "targets");
function dl(t) {
  for (let r of t.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === t && t.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(dl, "dl");
c(dl, "autoShadowRoot");
var Ma = /* @__PURE__ */ new WeakMap();
function k(t, r) {
  Ma.has(t) || Ma.set(t, []), Ma.get(t).push(r);
}
__name(k, "k");
c(k, "attr");
function fl(t, r) {
  r || (r = mc(Object.getPrototypeOf(t)));
  for (let e of r) {
    let n = t[e], a = gc(e), u = { configurable: true, get() {
      return this.getAttribute(a) || "";
    }, set(h) {
      this.setAttribute(a, h || "");
    } };
    typeof n == "number" ? u = { configurable: true, get() {
      return Number(this.getAttribute(a) || 0);
    }, set(h) {
      this.setAttribute(a, h);
    } } : typeof n == "boolean" && (u = { configurable: true, get() {
      return this.hasAttribute(a);
    }, set(h) {
      this.toggleAttribute(a, h);
    } }), Object.defineProperty(t, e, u), e in t && !t.hasAttribute(a) && u.set.call(t, n);
  }
}
__name(fl, "fl");
c(fl, "initializeAttrs");
function mc(t) {
  let r = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let n = Ma.get(e) || [];
    for (let a of n)
      r.add(a);
    e = Object.getPrototypeOf(e);
  }
  return r;
}
__name(mc, "mc");
c(mc, "getAttrNames");
function gc(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(gc, "gc");
c(gc, "attrToAttributeName");
function hl(t) {
  let r = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...mc(t.prototype)].map(gc).concat(r);
  }, set(e) {
    r = e;
  } });
}
__name(hl, "hl");
c(hl, "defineObservedAttributes");
var Nh = /* @__PURE__ */ new WeakSet();
function bc(t, r) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), Nh.add(t), dl(t), fl(t), ol(t), r && r.call(t), t.shadowRoot && al(t.shadowRoot);
}
__name(bc, "bc");
c(bc, "initializeInstance");
function yc(t) {
  hl(t), ul(t);
}
__name(yc, "yc");
c(yc, "initializeClass");
function Q(t) {
  let r = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    bc(this, r);
  }, yc(t);
}
__name(Q, "Q");
c(Q, "controller");
function be(t) {
  class r extends t {
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
  __name(r, "r");
  return c(r, "ActivateableMixinClass"), M([k], r.prototype, "active", 2), r;
}
__name(be, "be");
c(be, "ActivateableMixin");
var An = c((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function un(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(r, "r");
  return c(r, "AngleableMixinClass"), M([k], r.prototype, "angle", 2), M([k], r.prototype, "reducedAngle", 2), r;
}
__name(un, "un");
c(un, "AngleableMixin");
var Vi = c((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
function Ue(t) {
  class r extends t {
    get controls() {
      let n = this.getAttribute("data-controls");
      return n === null ? [] : n === "" ? [] : n.split(",").map((a) => parseInt(a)).sort();
    }
    set controls(n) {
      this.setAttribute("data-controls", n.sort().join());
    }
    get antiControls() {
      let n = this.getAttribute("data-anti-controls");
      return n === null ? [] : n === "" ? [] : n.split(",").map((a) => parseInt(a)).sort();
    }
    set antiControls(n) {
      this.setAttribute("data-anti-controls", n.sort().join());
    }
    get isControlled() {
      return this.controls.length > 0;
    }
    get isAntiControlled() {
      return this.antiControls.length > 0;
    }
  }
  __name(r, "r");
  return c(r, "ControllableMixinClass"), r;
}
__name(Ue, "Ue");
c(Ue, "ControllableMixin");
function ke(t) {
  class r extends t {
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
  __name(r, "r");
  return c(r, "DisableableMixinClass"), M([k], r.prototype, "disabled", 2), r;
}
__name(ke, "ke");
c(ke, "DisableableMixin");
var Y = c(function() {
  return Y = Object.assign || c(function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var u in e)
        Object.prototype.hasOwnProperty.call(e, u) && (r[u] = e[u]);
    }
    return r;
  }, "__assign"), Y.apply(this, arguments);
}, "__assign");
function si(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}
__name(si, "si");
c(si, "__rest");
function Ee(t) {
  var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], n = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return { next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    } };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(Ee, "Ee");
c(Ee, "__values");
function Ce(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), a, u = [], h;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = n.next()).done; )
      u.push(a.value);
  } catch (b) {
    h = { error: b };
  } finally {
    try {
      a && !a.done && (e = n.return) && e.call(n);
    } finally {
      if (h)
        throw h.error;
    }
  }
  return u;
}
__name(Ce, "Ce");
c(Ce, "__read");
function De(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, a = r.length, u; n < a; n++)
      (u || !(n in r)) && (u || (u = Array.prototype.slice.call(r, 0, n)), u[n] = r[n]);
  return t.concat(u || Array.prototype.slice.call(r));
}
__name(De, "De");
c(De, "__spreadArray");
var ze;
(function(t) {
  t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
})(ze || (ze = {}));
var cn;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(cn || (cn = {}));
var Yi = ze.Start;
var li = ze.Stop;
var ui = ze.Raise;
var Pn = ze.Send;
var Ia = ze.Cancel;
var wc = ze.NullEvent;
var vl = ze.Assign;
var Ig = ze.After;
var Ag = ze.DoneState;
var Aa = ze.Log;
var xc = ze.Init;
var Xi = ze.Invoke;
var Pg = ze.ErrorExecution;
var ml = ze.ErrorPlatform;
var gl = ze.ErrorCustom;
var Zi = ze.Update;
var Ec = ze.Choose;
var Sc = ze.Pure;
var Pa = ".";
var bl = {};
var za = "xstate.guard";
var Cc = "";
var $e = true;
var Ra;
function Ji(t, r, e) {
  e === void 0 && (e = Pa);
  var n = ci(t, e), a = ci(r, e);
  return Te(a) ? Te(n) ? a === n : false : Te(n) ? n in a : Object.keys(n).every(function(u) {
    return u in a ? Ji(n[u], a[u]) : false;
  });
}
__name(Ji, "Ji");
c(Ji, "matchesState");
function _a(t) {
  try {
    return Te(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(_a, "_a");
c(_a, "getEventType");
function ka(t, r) {
  try {
    return Fr(t) ? t : t.toString().split(r);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(ka, "ka");
c(ka, "toStatePath");
function Gh(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(Gh, "Gh");
c(Gh, "isStateLike");
function ci(t, r) {
  if (Gh(t))
    return t.value;
  if (Fr(t))
    return Qi(t);
  if (typeof t != "string")
    return t;
  var e = ka(t, r);
  return Qi(e);
}
__name(ci, "ci");
c(ci, "toStateValue");
function Qi(t) {
  if (t.length === 1)
    return t[0];
  for (var r = {}, e = r, n = 0; n < t.length - 1; n++)
    n === t.length - 2 ? e[t[n]] = t[n + 1] : (e[t[n]] = {}, e = e[t[n]]);
  return r;
}
__name(Qi, "Qi");
c(Qi, "pathToStateValue");
function pi(t, r) {
  for (var e = {}, n = Object.keys(t), a = 0; a < n.length; a++) {
    var u = n[a];
    e[u] = r(t[u], u, t, a);
  }
  return e;
}
__name(pi, "pi");
c(pi, "mapValues");
function yl(t, r, e) {
  var n, a, u = {};
  try {
    for (var h = Ee(Object.keys(t)), b = h.next(); !b.done; b = h.next()) {
      var v = b.value, p = t[v];
      e(p) && (u[v] = r(p, v, t));
    }
  } catch (f) {
    n = { error: f };
  } finally {
    try {
      b && !b.done && (a = h.return) && a.call(h);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return u;
}
__name(yl, "yl");
c(yl, "mapFilterValues");
var Tc = c(function(t) {
  return function(r) {
    var e, n, a = r;
    try {
      for (var u = Ee(t), h = u.next(); !h.done; h = u.next()) {
        var b = h.value;
        a = a[b];
      }
    } catch (v) {
      e = { error: v };
    } finally {
      try {
        h && !h.done && (n = u.return) && n.call(u);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return a;
  };
}, "path");
function Oc(t, r) {
  return function(e) {
    var n, a, u = e;
    try {
      for (var h = Ee(t), b = h.next(); !b.done; b = h.next()) {
        var v = b.value;
        u = u[r][v];
      }
    } catch (p) {
      n = { error: p };
    } finally {
      try {
        b && !b.done && (a = h.return) && a.call(h);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return u;
  };
}
__name(Oc, "Oc");
c(Oc, "nestedPath");
function Ki(t) {
  if (!t)
    return [[]];
  if (Te(t))
    return [[t]];
  var r = je(Object.keys(t).map(function(e) {
    var n = t[e];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[e]] : Ki(t[e]).map(function(a) {
      return [e].concat(a);
    });
  }));
  return r;
}
__name(Ki, "Ki");
c(Ki, "toStatePaths");
function je(t) {
  var r;
  return (r = []).concat.apply(r, De([], Ce(t), false));
}
__name(je, "je");
c(je, "flatten");
function Mc(t) {
  return Fr(t) ? t : [t];
}
__name(Mc, "Mc");
c(Mc, "toArrayStrict");
function nr(t) {
  return t === void 0 ? [] : Mc(t);
}
__name(nr, "nr");
c(nr, "toArray");
function zn(t, r, e) {
  var n, a;
  if (Re(t))
    return t(r, e.data);
  var u = {};
  try {
    for (var h = Ee(Object.keys(t)), b = h.next(); !b.done; b = h.next()) {
      var v = b.value, p = t[v];
      Re(p) ? u[v] = p(r, e.data) : u[v] = p;
    }
  } catch (f) {
    n = { error: f };
  } finally {
    try {
      b && !b.done && (a = h.return) && a.call(h);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return u;
}
__name(zn, "zn");
c(zn, "mapContext");
function Ic(t) {
  return /^(done|error)\./.test(t);
}
__name(Ic, "Ic");
c(Ic, "isBuiltInEvent");
function wl(t) {
  return !!(t instanceof Promise || t !== null && (Re(t) || typeof t == "object") && Re(t.then));
}
__name(wl, "wl");
c(wl, "isPromiseLike");
function Ac(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(Ac, "Ac");
c(Ac, "isBehavior");
function Da(t, r) {
  var e, n, a = Ce([[], []], 2), u = a[0], h = a[1];
  try {
    for (var b = Ee(t), v = b.next(); !v.done; v = b.next()) {
      var p = v.value;
      r(p) ? u.push(p) : h.push(p);
    }
  } catch (f) {
    e = { error: f };
  } finally {
    try {
      v && !v.done && (n = b.return) && n.call(b);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return [u, h];
}
__name(Da, "Da");
c(Da, "partition");
function Pc(t, r) {
  return pi(t.states, function(e, n) {
    if (e) {
      var a = (Te(r) ? void 0 : r[n]) || (e ? e.current : void 0);
      if (a)
        return { current: a, states: Pc(e, a) };
    }
  });
}
__name(Pc, "Pc");
c(Pc, "updateHistoryStates");
function zc(t, r) {
  return { current: r, states: Pc(t, r) };
}
__name(zc, "zc");
c(zc, "updateHistoryValue");
function xl(t, r, e, n) {
  $e || Ze(!!t, "Attempting to update undefined context");
  var a = t && e.reduce(function(u, h) {
    var b, v, p = h.assignment, f = { state: n, action: h, _event: r }, w = {};
    if (Re(p))
      w = p(u, r.data, f);
    else
      try {
        for (var y = Ee(Object.keys(p)), S = y.next(); !S.done; S = y.next()) {
          var C = S.value, O = p[C];
          w[C] = Re(O) ? O(u, r.data, f) : O;
        }
      } catch (z) {
        b = { error: z };
      } finally {
        try {
          S && !S.done && (v = y.return) && v.call(y);
        } finally {
          if (b)
            throw b.error;
        }
      }
    return Object.assign({}, u, w);
  }, t);
  return a;
}
__name(xl, "xl");
c(xl, "updateContext");
var Ze = c(function() {
}, "warn");
$e || (Ze = c(function(t, r) {
  var e = t instanceof Error ? t : void 0;
  if (!(!e && t) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    e && n.push(e), console.warn.apply(console, n);
  }
}, "warn"));
function Fr(t) {
  return Array.isArray(t);
}
__name(Fr, "Fr");
c(Fr, "isArray");
function Re(t) {
  return typeof t == "function";
}
__name(Re, "Re");
c(Re, "isFunction");
function Te(t) {
  return typeof t == "string";
}
__name(Te, "Te");
c(Te, "isString");
function Na(t, r) {
  if (t)
    return Te(t) ? { type: za, name: t, predicate: r ? r[t] : void 0 } : Re(t) ? { type: za, name: t.name, predicate: t } : t;
}
__name(Na, "Na");
c(Na, "toGuard");
function Rc(t) {
  try {
    return "subscribe" in t && Re(t.subscribe);
  } catch (r) {
    return false;
  }
}
__name(Rc, "Rc");
c(Rc, "isObservable");
var Ar = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Gg = (Ra = {}, Ra[Ar] = function() {
  return this;
}, Ra[Symbol.observable] = function() {
  return this;
}, Ra);
function Pr(t) {
  return !!t && "__xstatenode" in t;
}
__name(Pr, "Pr");
c(Pr, "isMachine");
function _c(t) {
  return !!t && typeof t.send == "function";
}
__name(_c, "_c");
c(_c, "isActor");
function eo(t, r) {
  return Te(t) || typeof t == "number" ? Y({ type: t }, r) : t;
}
__name(eo, "eo");
c(eo, "toEventObject");
function ut(t, r) {
  if (!Te(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = eo(t);
  return Y({ name: e.type, data: e, $$type: "scxml", type: "external" }, r);
}
__name(ut, "ut");
c(ut, "toSCXMLEvent");
function Rn(t, r) {
  var e = Mc(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || Pr(n) ? { target: n, event: t } : Y(Y({}, n), { event: t });
  });
  return e;
}
__name(Rn, "Rn");
c(Rn, "toTransitionConfigArray");
function kc(t) {
  if (!(t === void 0 || t === Cc))
    return nr(t);
}
__name(kc, "kc");
c(kc, "normalizeTarget");
function Dc(t, r, e) {
  if (!$e) {
    var n = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
    if (t === r)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(n));
    else {
      var a = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(a));
    }
  }
}
__name(Dc, "Dc");
c(Dc, "reportUnhandledExceptionOnInvocation");
function Ga(t, r, e, n, a) {
  var u = t.options.guards, h = { state: a, cond: r, _event: n };
  if (r.type === za)
    return ((u == null ? void 0 : u[r.name]) || r.predicate)(e, n.data, h);
  var b = u == null ? void 0 : u[r.type];
  if (!b)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
  return b(e, n.data, h);
}
__name(Ga, "Ga");
c(Ga, "evaluateGuard");
function La(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name(La, "La");
c(La, "toInvokeSource");
function to(t, r, e) {
  if (typeof t == "object")
    return t;
  var n = c(function() {
  }, "noop");
  return { next: t, error: r || n, complete: e || n };
}
__name(to, "to");
c(to, "toObserver");
function ro(t, r) {
  return "".concat(t, ":invocation[").concat(r, "]");
}
__name(ro, "ro");
c(ro, "createInvokeId");
var _n = ut({ type: xc });
function ja(t, r) {
  return r && r[t] || void 0;
}
__name(ja, "ja");
c(ja, "getActionFunction");
function di(t, r) {
  var e;
  if (Te(t) || typeof t == "number") {
    var n = ja(t, r);
    Re(n) ? e = { type: t, exec: n } : n ? e = n : e = { type: t, exec: void 0 };
  } else if (Re(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var n = ja(t.type, r);
    if (Re(n))
      e = Y(Y({}, t), { exec: n });
    else if (n) {
      var a = n.type || t.type;
      e = Y(Y(Y({}, n), t), { type: a });
    } else
      e = t;
  }
  return e;
}
__name(di, "di");
c(di, "toActionObject");
var no = c(function(t, r) {
  if (!t)
    return [];
  var e = Fr(t) ? t : [t];
  return e.map(function(n) {
    return di(n, r);
  });
}, "toActionObjects");
function Ba(t) {
  var r = di(t);
  return Y(Y({ id: Te(t) ? t : r.id }, r), { type: r.type });
}
__name(Ba, "Ba");
c(Ba, "toActivityDefinition");
function Nc(t) {
  return Te(t) ? { type: ui, event: t } : El(t, { to: cn.Internal });
}
__name(Nc, "Nc");
c(Nc, "raise");
function Lh(t) {
  return { type: ui, _event: ut(t.event) };
}
__name(Lh, "Lh");
c(Lh, "resolveRaise");
function El(t, r) {
  return { to: r ? r.to : void 0, type: Pn, event: Re(t) ? t : eo(t), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Re(t) ? t.name : _a(t) };
}
__name(El, "El");
c(El, "send");
function jh(t, r, e, n) {
  var a = { _event: e }, u = ut(Re(t.event) ? t.event(r, e.data, a) : t.event), h;
  if (Te(t.delay)) {
    var b = n && n[t.delay];
    h = Re(b) ? b(r, e.data, a) : b;
  } else
    h = Re(t.delay) ? t.delay(r, e.data, a) : t.delay;
  var v = Re(t.to) ? t.to(r, e.data, a) : t.to;
  return Y(Y({}, t), { to: v, _event: u, event: u.data, delay: h });
}
__name(jh, "jh");
c(jh, "resolveSend");
var Hh = c(function(t, r, e) {
  return Y(Y({}, t), { value: Te(t.expr) ? t.expr : t.expr(r, e.data, { _event: e }) });
}, "resolveLog");
var Gc = c(function(t) {
  return { type: Ia, sendId: t };
}, "cancel");
function Lc(t) {
  var r = Ba(t);
  return { type: ze.Start, activity: r, exec: void 0 };
}
__name(Lc, "Lc");
c(Lc, "start");
function jc(t) {
  var r = Re(t) ? t : Ba(t);
  return { type: ze.Stop, activity: r, exec: void 0 };
}
__name(jc, "jc");
c(jc, "stop");
function Bh(t, r, e) {
  var n = Re(t.activity) ? t.activity(r, e.data) : t.activity, a = typeof n == "string" ? { id: n } : n, u = { type: ze.Stop, activity: a };
  return u;
}
__name(Bh, "Bh");
c(Bh, "resolveStop");
function Hc(t, r) {
  var e = r ? "#".concat(r) : "";
  return "".concat(ze.After, "(").concat(t, ")").concat(e);
}
__name(Hc, "Hc");
c(Hc, "after");
function io(t, r) {
  var e = "".concat(ze.DoneState, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(io, "io");
c(io, "done");
function fi(t, r) {
  var e = "".concat(ze.DoneInvoke, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(fi, "fi");
c(fi, "doneInvoke");
function kn(t, r) {
  var e = "".concat(ze.ErrorPlatform, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(kn, "kn");
c(kn, "error");
function Ha(t, r, e, n, a, u) {
  u === void 0 && (u = false);
  var h = Ce(u ? [[], a] : Da(a, function(y) {
    return y.type === vl;
  }), 2), b = h[0], v = h[1], p = b.length ? xl(e, n, b, r) : e, f = u ? [e] : void 0, w = je(v.map(function(y) {
    var S;
    switch (y.type) {
      case ui:
        return Lh(y);
      case Pn:
        var C = jh(y, p, n, t.options.delays);
        return $e || Ze(!Te(y.delay) || typeof C.delay == "number", "No delay reference for delay expression '".concat(y.delay, "' was found on machine '").concat(t.id, "'")), C;
      case Aa:
        return Hh(y, p, n);
      case Ec: {
        var O = y, z = (S = O.conds.find(function(ie) {
          var ne = Na(ie.cond, t.options.guards);
          return !ne || Ga(t, ne, p, n, r);
        })) === null || S === void 0 ? void 0 : S.actions;
        if (!z)
          return [];
        var H = Ce(Ha(t, r, p, n, no(nr(z), t.options.actions), u), 2), L = H[0], U = H[1];
        return p = U, f == null || f.push(p), L;
      }
      case Sc: {
        var z = y.get(p, n.data);
        if (!z)
          return [];
        var A = Ce(Ha(t, r, p, n, no(nr(z), t.options.actions), u), 2), J = A[0], R = A[1];
        return p = R, f == null || f.push(p), J;
      }
      case li:
        return Bh(y, p, n);
      case vl: {
        p = xl(p, n, [y], r), f == null || f.push(p);
        break;
      }
      default:
        var j = di(y, t.options.actions), W = j.exec;
        if (W && f) {
          var ee = f.length - 1;
          j = Y(Y({}, j), { exec: function(ie) {
            for (var ne = [], de = 1; de < arguments.length; de++)
              ne[de - 1] = arguments[de];
            W.apply(void 0, De([f[ee]], Ce(ne), false));
          } });
        }
        return j;
    }
  }).filter(function(y) {
    return !!y;
  }));
  return [w, p];
}
__name(Ha, "Ha");
c(Ha, "resolveActions");
var Bc = [];
var Dn = c(function(t, r) {
  Bc.push(t);
  var e = r(t);
  return Bc.pop(), e;
}, "provide");
function $c(t) {
  var r;
  return r = { id: t, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: t };
  } }, r[Ar] = function() {
    return this;
  }, r;
}
__name($c, "$c");
c($c, "createNullActor");
function qc(t, r, e, n) {
  var a, u = La(t.src), h = (a = r == null ? void 0 : r.options.services) === null || a === void 0 ? void 0 : a[u.type], b = t.data ? zn(t.data, e, n) : void 0, v = h ? Fc(h, t.id, b) : $c(t.id);
  return v.meta = t, v;
}
__name(qc, "qc");
c(qc, "createInvocableActor");
function Fc(t, r, e) {
  var n = $c(r);
  if (n.deferred = true, Pr(t)) {
    var a = n.state = Dn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    n.getSnapshot = function() {
      return a;
    };
  }
  return n;
}
__name(Fc, "Fc");
c(Fc, "createDeferredActor");
function $h(t) {
  try {
    return typeof t.send == "function";
  } catch (r) {
    return false;
  }
}
__name($h, "$h");
c($h, "isActor");
function Wc(t) {
  return $h(t) && "id" in t;
}
__name(Wc, "Wc");
c(Wc, "isSpawnedActor");
function Uc(t) {
  var r;
  return Y((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[Ar] = function() {
    return this;
  }, r), t);
}
__name(Uc, "Uc");
c(Uc, "toActorRef");
var oo = c(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function Nn(t) {
  return Object.keys(t.states).map(function(r) {
    return t.states[r];
  }).filter(function(r) {
    return r.type !== "history";
  });
}
__name(Nn, "Nn");
c(Nn, "getChildren");
function Cl(t) {
  var r = [t];
  return oo(t) ? r : r.concat(je(Nn(t).map(Cl)));
}
__name(Cl, "Cl");
c(Cl, "getAllStateNodes");
function Gn(t, r) {
  var e, n, a, u, h, b, v, p, f = new Set(t), w = Sl(f), y = new Set(r);
  try {
    for (var S = Ee(y), C = S.next(); !C.done; C = S.next())
      for (var O = C.value, z = O.parent; z && !y.has(z); )
        y.add(z), z = z.parent;
  } catch (ee) {
    e = { error: ee };
  } finally {
    try {
      C && !C.done && (n = S.return) && n.call(S);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var H = Sl(y);
  try {
    for (var L = Ee(y), U = L.next(); !U.done; U = L.next()) {
      var O = U.value;
      if (O.type === "compound" && (!H.get(O) || !H.get(O).length))
        w.get(O) ? w.get(O).forEach(function(ie) {
          return y.add(ie);
        }) : O.initialStateNodes.forEach(function(ie) {
          return y.add(ie);
        });
      else if (O.type === "parallel")
        try {
          for (var A = (h = void 0, Ee(Nn(O))), J = A.next(); !J.done; J = A.next()) {
            var R = J.value;
            y.has(R) || (y.add(R), w.get(R) ? w.get(R).forEach(function(ie) {
              return y.add(ie);
            }) : R.initialStateNodes.forEach(function(ie) {
              return y.add(ie);
            }));
          }
        } catch (ie) {
          h = { error: ie };
        } finally {
          try {
            J && !J.done && (b = A.return) && b.call(A);
          } finally {
            if (h)
              throw h.error;
          }
        }
    }
  } catch (ee) {
    a = { error: ee };
  } finally {
    try {
      U && !U.done && (u = L.return) && u.call(L);
    } finally {
      if (a)
        throw a.error;
    }
  }
  try {
    for (var j = Ee(y), W = j.next(); !W.done; W = j.next())
      for (var O = W.value, z = O.parent; z && !y.has(z); )
        y.add(z), z = z.parent;
  } catch (ee) {
    v = { error: ee };
  } finally {
    try {
      W && !W.done && (p = j.return) && p.call(j);
    } finally {
      if (v)
        throw v.error;
    }
  }
  return y;
}
__name(Gn, "Gn");
c(Gn, "getConfiguration");
function Vc(t, r) {
  var e = r.get(t);
  if (!e)
    return {};
  if (t.type === "compound") {
    var n = e[0];
    if (n) {
      if (oo(n))
        return n.key;
    } else
      return {};
  }
  var a = {};
  return e.forEach(function(u) {
    a[u.key] = Vc(u, r);
  }), a;
}
__name(Vc, "Vc");
c(Vc, "getValueFromAdj");
function Sl(t) {
  var r, e, n = /* @__PURE__ */ new Map();
  try {
    for (var a = Ee(t), u = a.next(); !u.done; u = a.next()) {
      var h = u.value;
      n.has(h) || n.set(h, []), h.parent && (n.has(h.parent) || n.set(h.parent, []), n.get(h.parent).push(h));
    }
  } catch (b) {
    r = { error: b };
  } finally {
    try {
      u && !u.done && (e = a.return) && e.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}
__name(Sl, "Sl");
c(Sl, "getAdjList");
function Yc(t, r) {
  var e = Gn([t], r);
  return Vc(t, Sl(e));
}
__name(Yc, "Yc");
c(Yc, "getValue");
function ao(t, r) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === r;
  }) : t instanceof Set ? t.has(r) : false;
}
__name(ao, "ao");
c(ao, "has");
function Xc(t) {
  return De([], Ce(new Set(je(De([], Ce(t.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(Xc, "Xc");
c(Xc, "nextEvents");
function Ln(t, r) {
  return r.type === "compound" ? Nn(r).some(function(e) {
    return e.type === "final" && ao(t, e);
  }) : r.type === "parallel" ? Nn(r).every(function(e) {
    return Ln(t, e);
  }) : false;
}
__name(Ln, "Ln");
c(Ln, "isInFinalState");
function Zc(t) {
  return t === void 0 && (t = []), t.reduce(function(r, e) {
    return e.meta !== void 0 && (r[e.id] = e.meta), r;
  }, {});
}
__name(Zc, "Zc");
c(Zc, "getMeta");
function Tl(t) {
  return new Set(je(t.map(function(r) {
    return r.tags;
  })));
}
__name(Tl, "Tl");
c(Tl, "getTagsFromConfiguration");
function Ol(t, r) {
  if (t === r)
    return true;
  if (t === void 0 || r === void 0)
    return false;
  if (Te(t) || Te(r))
    return t === r;
  var e = Object.keys(t), n = Object.keys(r);
  return e.length === n.length && e.every(function(a) {
    return Ol(t[a], r[a]);
  });
}
__name(Ol, "Ol");
c(Ol, "stateValuesEqual");
function Qc(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(Qc, "Qc");
c(Qc, "isStateConfig");
function Jc(t, r) {
  var e = t.exec, n = Y(Y({}, t), { exec: e !== void 0 ? function() {
    return e(r.context, r.event, { action: t, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(Jc, "Jc");
c(Jc, "bindActionToState");
var wr = function() {
  function t(r) {
    var e = this, n;
    this.actions = [], this.activities = bl, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || bl, this.meta = Zc(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Xc(e.configuration);
    } });
  }
  __name(t, "t");
  return c(t, "State"), t.from = function(r, e) {
    if (r instanceof t)
      return r.context !== e ? new t({ value: r.value, context: e, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = _n;
    return new t({ value: r, context: e, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, t.create = function(r) {
    return new t(r);
  }, t.inert = function(r, e) {
    if (r instanceof t) {
      if (!r.actions.length)
        return r;
      var n = _n;
      return new t({ value: r.value, context: e, _event: n, _sessionid: null, historyValue: r.historyValue, history: r.history, activities: r.activities, configuration: r.configuration, transitions: [], children: {} });
    }
    return t.from(r, e);
  }, t.prototype.toStrings = function(r, e) {
    var n = this;
    if (r === void 0 && (r = this.value), e === void 0 && (e = "."), Te(r))
      return [r];
    var a = Object.keys(r);
    return a.concat.apply(a, De([], Ce(a.map(function(u) {
      return n.toStrings(r[u], e).map(function(h) {
        return u + e + h;
      });
    })), false));
  }, t.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var e = r.tags;
    r.machine;
    var n = si(r, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, n), { tags: Array.from(e) });
  }, t.prototype.matches = function(r) {
    return Ji(r, this.value);
  }, t.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, t.prototype.can = function(r) {
    var e;
    $e && Ze(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(a) {
      return a.target !== void 0 || a.actions.length;
    });
  }, t;
}();
var qh = { deferEvents: false };
var Ml = function() {
  function t(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, qh), r);
  }
  __name(t, "t");
  return c(t, "Scheduler"), t.prototype.initialize = function(r) {
    if (this.initialized = true, r) {
      if (!this.options.deferEvents) {
        this.schedule(r);
        return;
      }
      this.process(r);
    }
    this.flushEvents();
  }, t.prototype.schedule = function(r) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(r);
      return;
    }
    if (this.queue.length !== 0)
      throw new Error("Event queue should be empty when it is not processing events");
    this.process(r), this.flushEvents();
  }, t.prototype.clear = function() {
    this.queue = [];
  }, t.prototype.flushEvents = function() {
    for (var r = this.queue.shift(); r; )
      this.process(r), r = this.queue.shift();
  }, t.prototype.process = function(r) {
    this.processingEvent = true;
    try {
      r();
    } catch (e) {
      throw this.clear(), e;
    } finally {
      this.processingEvent = false;
    }
  }, t;
}();
var Il = /* @__PURE__ */ new Map();
var Fh = 0;
var so = { bookId: function() {
  return "x:".concat(Fh++);
}, register: function(t, r) {
  return Il.set(t, r), t;
}, get: function(t) {
  return Il.get(t);
}, free: function(t) {
  Il.delete(t);
} };
function $a() {
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
__name($a, "$a");
c($a, "getGlobal");
function Wh() {
  var t = $a();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name(Wh, "Wh");
c(Wh, "getDevTools");
function Kc(t) {
  if ($a()) {
    var r = Wh();
    r && r.register(t);
  }
}
__name(Kc, "Kc");
c(Kc, "registerService");
function ep(t, r) {
  r === void 0 && (r = {});
  var e = t.initialState, n = /* @__PURE__ */ new Set(), a = [], u = false, h = c(function() {
    if (!u) {
      for (u = true; a.length > 0; ) {
        var p = a.shift();
        e = t.transition(e, p, v), n.forEach(function(f) {
          return f.next(e);
        });
      }
      u = false;
    }
  }, "flush"), b = Uc({ id: r.id, send: function(p) {
    a.push(p), h();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(p, f, w) {
    var y = to(p, f, w);
    return n.add(y), y.next(e), { unsubscribe: function() {
      n.delete(y);
    } };
  } }), v = { parent: r.parent, self: b, id: r.id || "anonymous", observers: n };
  return e = t.start ? t.start(v) : e, b;
}
__name(ep, "ep");
c(ep, "spawnBehavior");
var Uh = { sync: false, autoForward: false };
var wt;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(wt || (wt = {}));
var tp = function() {
  function t(r, e) {
    var n = this;
    e === void 0 && (e = t.defaultOptions), this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = wt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(f, w) {
      if (Fr(f))
        return n.batch(f), n.state;
      var y = ut(eo(f, w));
      if (n.status === wt.Stopped)
        return $e || Ze(false, 'Event "'.concat(y.name, '" was sent to stopped service "').concat(n.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(y.data))), n.state;
      if (n.status !== wt.Running && !n.options.deferEvents)
        throw new Error('Event "'.concat(y.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(y.data)));
      return n.scheduler.schedule(function() {
        n.forward(y);
        var S = n.nextState(y);
        n.update(S, y);
      }), n._state;
    }, this.sendTo = function(f, w) {
      var y = n.parent && (w === cn.Parent || n.parent.id === w), S = y ? n.parent : Te(w) ? n.children.get(w) || so.get(w) : _c(w) ? w : void 0;
      if (!S) {
        if (!y)
          throw new Error("Unable to send event to child '".concat(w, "' from service '").concat(n.id, "'."));
        $e || Ze(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(f.type));
        return;
      }
      "machine" in S ? S.send(Y(Y({}, f), { name: f.name === gl ? "".concat(kn(n.id)) : f.name, origin: n.sessionId })) : S.send(f.data);
    };
    var a = Y(Y({}, t.defaultOptions), e), u = a.clock, h = a.logger, b = a.parent, v = a.id, p = v !== void 0 ? v : r.id;
    this.id = p, this.logger = h, this.clock = u, this.parent = b, this.options = a, this.scheduler = new Ml({ deferEvents: this.options.deferEvents }), this.sessionId = so.bookId();
  }
  __name(t, "t");
  return c(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : Dn(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "state", { get: function() {
    return $e || Ze(this.status !== wt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), t.prototype.execute = function(r, e) {
    var n, a;
    try {
      for (var u = Ee(r.actions), h = u.next(); !h.done; h = u.next()) {
        var b = h.value;
        this.exec(b, r, e);
      }
    } catch (v) {
      n = { error: v };
    } finally {
      try {
        h && !h.done && (a = u.return) && a.call(u);
      } finally {
        if (n)
          throw n.error;
      }
    }
  }, t.prototype.update = function(r, e) {
    var n, a, u, h, b, v, p, f, w = this;
    if (r._sessionid = this.sessionId, this._state = r, this.options.execute && this.execute(this.state), this.children.forEach(function(ee) {
      w.state.children[ee.id] = ee;
    }), this.devTools && this.devTools.send(e.data, r), r.event)
      try {
        for (var y = Ee(this.eventListeners), S = y.next(); !S.done; S = y.next()) {
          var C = S.value;
          C(r.event);
        }
      } catch (ee) {
        n = { error: ee };
      } finally {
        try {
          S && !S.done && (a = y.return) && a.call(y);
        } finally {
          if (n)
            throw n.error;
        }
      }
    try {
      for (var O = Ee(this.listeners), z = O.next(); !z.done; z = O.next()) {
        var C = z.value;
        C(r, r.event);
      }
    } catch (ee) {
      u = { error: ee };
    } finally {
      try {
        z && !z.done && (h = O.return) && h.call(O);
      } finally {
        if (u)
          throw u.error;
      }
    }
    try {
      for (var H = Ee(this.contextListeners), L = H.next(); !L.done; L = H.next()) {
        var U = L.value;
        U(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (ee) {
      b = { error: ee };
    } finally {
      try {
        L && !L.done && (v = H.return) && v.call(H);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var A = Ln(r.configuration || [], this.machine);
    if (this.state.configuration && A) {
      var J = r.configuration.find(function(ee) {
        return ee.type === "final" && ee.parent === w.machine;
      }), R = J && J.doneData ? zn(J.doneData, r.context, e) : void 0;
      try {
        for (var j = Ee(this.doneListeners), W = j.next(); !W.done; W = j.next()) {
          var C = W.value;
          C(fi(this.id, R));
        }
      } catch (ee) {
        p = { error: ee };
      } finally {
        try {
          W && !W.done && (f = j.return) && f.call(j);
        } finally {
          if (p)
            throw p.error;
        }
      }
      this.stop();
    }
  }, t.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === wt.Running && r(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(r, e, n) {
    var a = this;
    if (!r)
      return { unsubscribe: function() {
      } };
    var u, h = n;
    return typeof r == "function" ? u = r : (u = r.next.bind(r), h = r.complete.bind(r)), this.listeners.add(u), this.status !== wt.NotStarted && u(this.state), h && (this.status === wt.Stopped ? h() : this.onDone(h)), { unsubscribe: function() {
      u && a.listeners.delete(u), h && a.doneListeners.delete(h);
    } };
  }, t.prototype.onEvent = function(r) {
    return this.eventListeners.add(r), this;
  }, t.prototype.onSend = function(r) {
    return this.sendListeners.add(r), this;
  }, t.prototype.onChange = function(r) {
    return this.contextListeners.add(r), this;
  }, t.prototype.onStop = function(r) {
    return this.stopListeners.add(r), this;
  }, t.prototype.onDone = function(r) {
    return this.doneListeners.add(r), this;
  }, t.prototype.off = function(r) {
    return this.listeners.delete(r), this.eventListeners.delete(r), this.sendListeners.delete(r), this.stopListeners.delete(r), this.doneListeners.delete(r), this.contextListeners.delete(r), this;
  }, t.prototype.start = function(r) {
    var e = this;
    if (this.status === wt.Running)
      return this;
    this.machine._init(), so.register(this.sessionId, this), this.initialized = true, this.status = wt.Running;
    var n = r === void 0 ? this.initialState : Dn(this, function() {
      return Qc(r) ? e.machine.resolveState(r) : e.machine.resolveState(wr.from(r, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(n, _n);
    }), this;
  }, t.prototype.stop = function() {
    var r, e, n, a, u, h, b, v, p, f, w = this;
    try {
      for (var y = Ee(this.listeners), S = y.next(); !S.done; S = y.next()) {
        var C = S.value;
        this.listeners.delete(C);
      }
    } catch (W) {
      r = { error: W };
    } finally {
      try {
        S && !S.done && (e = y.return) && e.call(y);
      } finally {
        if (r)
          throw r.error;
      }
    }
    try {
      for (var O = Ee(this.stopListeners), z = O.next(); !z.done; z = O.next()) {
        var C = z.value;
        C(), this.stopListeners.delete(C);
      }
    } catch (W) {
      n = { error: W };
    } finally {
      try {
        z && !z.done && (a = O.return) && a.call(O);
      } finally {
        if (n)
          throw n.error;
      }
    }
    try {
      for (var H = Ee(this.contextListeners), L = H.next(); !L.done; L = H.next()) {
        var C = L.value;
        this.contextListeners.delete(C);
      }
    } catch (W) {
      u = { error: W };
    } finally {
      try {
        L && !L.done && (h = H.return) && h.call(H);
      } finally {
        if (u)
          throw u.error;
      }
    }
    try {
      for (var U = Ee(this.doneListeners), A = U.next(); !A.done; A = U.next()) {
        var C = A.value;
        this.doneListeners.delete(C);
      }
    } catch (W) {
      b = { error: W };
    } finally {
      try {
        A && !A.done && (v = U.return) && v.call(U);
      } finally {
        if (b)
          throw b.error;
      }
    }
    if (!this.initialized)
      return this;
    De([], Ce(this.state.configuration), false).sort(function(W, ee) {
      return ee.order - W.order;
    }).forEach(function(W) {
      var ee, ie;
      try {
        for (var ne = Ee(W.definition.exit), de = ne.next(); !de.done; de = ne.next()) {
          var V = de.value;
          w.exec(V, w.state);
        }
      } catch (ce) {
        ee = { error: ce };
      } finally {
        try {
          de && !de.done && (ie = ne.return) && ie.call(ne);
        } finally {
          if (ee)
            throw ee.error;
        }
      }
    }), this.children.forEach(function(W) {
      Re(W.stop) && W.stop();
    }), this.children.clear();
    try {
      for (var J = Ee(Object.keys(this.delayedEventsMap)), R = J.next(); !R.done; R = J.next()) {
        var j = R.value;
        this.clock.clearTimeout(this.delayedEventsMap[j]);
      }
    } catch (W) {
      p = { error: W };
    } finally {
      try {
        R && !R.done && (f = J.return) && f.call(J);
      } finally {
        if (p)
          throw p.error;
      }
    }
    return this.scheduler.clear(), this.scheduler = new Ml({ deferEvents: this.options.deferEvents }), this.initialized = false, this.status = wt.Stopped, this._initialState = void 0, so.free(this.sessionId), this;
  }, t.prototype.batch = function(r) {
    var e = this;
    if (this.status === wt.NotStarted && this.options.deferEvents)
      $e || Ze(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== wt.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var n, a, u = e.state, h = false, b = [], v = c(function(y) {
        var S = ut(y);
        e.forward(S), u = Dn(e, function() {
          return e.machine.transition(u, S);
        }), b.push.apply(b, De([], Ce(u.actions.map(function(C) {
          return Jc(C, u);
        })), false)), h = h || !!u.changed;
      }, "_loop_1");
      try {
        for (var p = Ee(r), f = p.next(); !f.done; f = p.next()) {
          var w = f.value;
          v(w);
        }
      } catch (y) {
        n = { error: y };
      } finally {
        try {
          f && !f.done && (a = p.return) && a.call(p);
        } finally {
          if (n)
            throw n.error;
        }
      }
      u.changed = h, u.actions = b, e.update(u, ut(r[r.length - 1]));
    });
  }, t.prototype.sender = function(r) {
    return this.send.bind(this, r);
  }, t.prototype.nextState = function(r) {
    var e = this, n = ut(r);
    if (n.name.indexOf(ml) === 0 && !this.state.nextEvents.some(function(u) {
      return u.indexOf(ml) === 0;
    }))
      throw n.data.data;
    var a = Dn(this, function() {
      return e.machine.transition(e.state, n);
    });
    return a;
  }, t.prototype.forward = function(r) {
    var e, n;
    try {
      for (var a = Ee(this.forwardTo), u = a.next(); !u.done; u = a.next()) {
        var h = u.value, b = this.children.get(h);
        if (!b)
          throw new Error("Unable to forward event '".concat(r, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(h, "'."));
        b.send(r);
      }
    } catch (v) {
      e = { error: v };
    } finally {
      try {
        u && !u.done && (n = a.return) && n.call(a);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, t.prototype.defer = function(r) {
    var e = this;
    this.delayedEventsMap[r.id] = this.clock.setTimeout(function() {
      r.to ? e.sendTo(r._event, r.to) : e.send(r._event);
    }, r.delay);
  }, t.prototype.cancel = function(r) {
    this.clock.clearTimeout(this.delayedEventsMap[r]), delete this.delayedEventsMap[r];
  }, t.prototype.exec = function(r, e, n) {
    n === void 0 && (n = this.machine.options.actions);
    var a = e.context, u = e._event, h = r.exec || ja(r.type, n), b = Re(h) ? h : h ? h.exec : r.exec;
    if (b)
      try {
        return b(a, u.data, { action: r, state: this.state, _event: u });
      } catch (A) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: A }), A;
      }
    switch (r.type) {
      case Pn:
        var v = r;
        if (typeof v.delay == "number") {
          this.defer(v);
          return;
        } else
          v.to ? this.sendTo(v._event, v.to) : this.send(v._event);
        break;
      case Ia:
        this.cancel(r.sendId);
        break;
      case Yi: {
        if (this.status !== wt.Running)
          return;
        var p = r.activity;
        if (!this.state.activities[p.id || p.type])
          break;
        if (p.type === ze.Invoke) {
          var f = La(p.src), w = this.machine.options.services ? this.machine.options.services[f.type] : void 0, y = p.id, S = p.data;
          $e || Ze(!("forward" in p), "`forward` property is deprecated (found in invocation of '".concat(p.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var C = "autoForward" in p ? p.autoForward : !!p.forward;
          if (!w) {
            $e || Ze(false, "No service found for invocation '".concat(p.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var O = S ? zn(S, a, u) : void 0;
          if (typeof w == "string")
            return;
          var z = Re(w) ? w(a, u.data, { data: O, src: f, meta: p.meta }) : w;
          if (!z)
            return;
          var H = void 0;
          Pr(z) && (z = O ? z.withContext(O) : z, H = { autoForward: C }), this.spawn(z, y, H);
        } else
          this.spawnActivity(p);
        break;
      }
      case li: {
        this.stopChild(r.activity.id);
        break;
      }
      case Aa:
        var L = r.label, U = r.value;
        L ? this.logger(L, U) : this.logger(U);
        break;
      default:
        $e || Ze(false, "No implementation found for action type '".concat(r.type, "'"));
        break;
    }
  }, t.prototype.removeChild = function(r) {
    var e;
    this.children.delete(r), this.forwardTo.delete(r), (e = this.state) === null || e === void 0 || delete e.children[r];
  }, t.prototype.stopChild = function(r) {
    var e = this.children.get(r);
    e && (this.removeChild(r), Re(e.stop) && e.stop());
  }, t.prototype.spawn = function(r, e, n) {
    if (wl(r))
      return this.spawnPromise(Promise.resolve(r), e);
    if (Re(r))
      return this.spawnCallback(r, e);
    if (Wc(r))
      return this.spawnActor(r, e);
    if (Rc(r))
      return this.spawnObservable(r, e);
    if (Pr(r))
      return this.spawnMachine(r, Y(Y({}, n), { id: e }));
    if (Ac(r))
      return this.spawnBehavior(r, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof r, '".'));
  }, t.prototype.spawnMachine = function(r, e) {
    var n = this;
    e === void 0 && (e = {});
    var a = new t(r, Y(Y({}, this.options), { parent: this, id: e.id || r.id })), u = Y(Y({}, Uh), e);
    u.sync && a.onTransition(function(b) {
      n.send(Zi, { state: b, id: a.id });
    });
    var h = a;
    return this.children.set(a.id, h), u.autoForward && this.forwardTo.add(a.id), a.onDone(function(b) {
      n.removeChild(a.id), n.send(ut(b, { origin: a.id }));
    }).start(), h;
  }, t.prototype.spawnBehavior = function(r, e) {
    var n = ep(r, { id: e, parent: this });
    return this.children.set(e, n), n;
  }, t.prototype.spawnPromise = function(r, e) {
    var n, a = this, u = false, h;
    r.then(function(v) {
      u || (h = v, a.removeChild(e), a.send(ut(fi(e, v), { origin: e })));
    }, function(v) {
      if (!u) {
        a.removeChild(e);
        var p = kn(e, v);
        try {
          a.send(ut(p, { origin: e }));
        } catch (f) {
          Dc(v, f, e), a.devTools && a.devTools.send(p, a.state), a.machine.strict && a.stop();
        }
      }
    });
    var b = (n = { id: e, send: function() {
    }, subscribe: function(v, p, f) {
      var w = to(v, p, f), y = false;
      return r.then(function(S) {
        y || (w.next(S), !y && w.complete());
      }, function(S) {
        y || w.error(S);
      }), { unsubscribe: function() {
        return y = true;
      } };
    }, stop: function() {
      u = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return h;
    } }, n[Ar] = function() {
      return this;
    }, n);
    return this.children.set(e, b), b;
  }, t.prototype.spawnCallback = function(r, e) {
    var n, a = this, u = false, h = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), v, p = c(function(y) {
      v = y, b.forEach(function(S) {
        return S(y);
      }), !u && a.send(ut(y, { origin: e }));
    }, "receive"), f;
    try {
      f = r(p, function(y) {
        h.add(y);
      });
    } catch (y) {
      this.send(kn(e, y));
    }
    if (wl(f))
      return this.spawnPromise(f, e);
    var w = (n = { id: e, send: function(y) {
      return h.forEach(function(S) {
        return S(y);
      });
    }, subscribe: function(y) {
      var S = to(y);
      return b.add(S.next), { unsubscribe: function() {
        b.delete(S.next);
      } };
    }, stop: function() {
      u = true, Re(f) && f();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return v;
    } }, n[Ar] = function() {
      return this;
    }, n);
    return this.children.set(e, w), w;
  }, t.prototype.spawnObservable = function(r, e) {
    var n, a = this, u, h = r.subscribe(function(v) {
      u = v, a.send(ut(v, { origin: e }));
    }, function(v) {
      a.removeChild(e), a.send(ut(kn(e, v), { origin: e }));
    }, function() {
      a.removeChild(e), a.send(ut(fi(e), { origin: e }));
    }), b = (n = { id: e, send: function() {
    }, subscribe: function(v, p, f) {
      return r.subscribe(v, p, f);
    }, stop: function() {
      return h.unsubscribe();
    }, getSnapshot: function() {
      return u;
    }, toJSON: function() {
      return { id: e };
    } }, n[Ar] = function() {
      return this;
    }, n);
    return this.children.set(e, b), b;
  }, t.prototype.spawnActor = function(r, e) {
    return this.children.set(e, r), r;
  }, t.prototype.spawnActivity = function(r) {
    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[r.type] : void 0;
    if (!e) {
      $e || Ze(false, "No implementation found for activity '".concat(r.type, "'"));
      return;
    }
    var n = e(this.state.context, r);
    this.spawnEffect(r.id, n);
  }, t.prototype.spawnEffect = function(r, e) {
    var n;
    this.children.set(r, (n = { id: r, send: function() {
    }, subscribe: function() {
      return { unsubscribe: function() {
      } };
    }, stop: e || void 0, getSnapshot: function() {
    }, toJSON: function() {
      return { id: r };
    } }, n[Ar] = function() {
      return this;
    }, n));
  }, t.prototype.attachDev = function() {
    var r = $a();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, e), { features: Y({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Kc(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[Ar] = function() {
    return this;
  }, t.prototype.getSnapshot = function() {
    return this.status === wt.NotStarted ? this.initialState : this._state;
  }, t.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(r, e) {
    return setTimeout(r, e);
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  } }, logger: console.log.bind(console), devTools: false }, t.interpret = tt, t;
}();
function tt(t, r) {
  var e = new tp(t, r);
  return e;
}
__name(tt, "tt");
c(tt, "interpret");
function Vh(t) {
  if (typeof t == "string") {
    var r = { type: t };
    return r.toString = function() {
      return t;
    }, r;
  }
  return t;
}
__name(Vh, "Vh");
c(Vh, "toInvokeSource");
function lo(t) {
  return Y(Y({ type: Xi }, t), { toJSON: function() {
    t.onDone, t.onError;
    var r = si(t, ["onDone", "onError"]);
    return Y(Y({}, r), { type: Xi, src: Vh(t.src) });
  } });
}
__name(lo, "lo");
c(lo, "toInvokeDefinition");
var mi = "";
var Al = "#";
var uo = "*";
var hi = {};
var vi = c(function(t) {
  return t[0] === Al;
}, "isStateId");
var Yh = c(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Xh = c(function(t, r, e) {
  var n = e.slice(0, -1).some(function(u) {
    return !("cond" in u) && !("in" in u) && (Te(u.target) || Pr(u.target));
  }), a = r === mi ? "the transient event" : "event '".concat(r, "'");
  Ze(!n, "One or more transitions for ".concat(a, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var rp = function() {
  function t(r, e, n, a) {
    var u = this;
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var h;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Yh(), e), this.parent = a == null ? void 0 : a.parent, this.key = this.config.key || (a == null ? void 0 : a.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Pa), this.id = this.config.id || De([this.machine.key], Ce(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (h = this.config.schema) !== null && h !== void 0 ? h : {}, this.description = this.config.description, $e || Ze(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? pi(this.config.states, function(p, f) {
      var w, y = new t(p, {}, void 0, { parent: u, key: f });
      return Object.assign(u.idMap, Y((w = {}, w[y.id] = y, w), y.idMap)), y;
    }) : hi;
    var b = 0;
    function v(p) {
      var f, w;
      p.order = b++;
      try {
        for (var y = Ee(Nn(p)), S = y.next(); !S.done; S = y.next()) {
          var C = S.value;
          v(C);
        }
      } catch (O) {
        f = { error: O };
      } finally {
        try {
          S && !S.done && (w = y.return) && w.call(y);
        } finally {
          if (f)
            throw f.error;
        }
      }
    }
    __name(v, "v");
    c(v, "dfs"), v(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(p) {
      var f = p.event;
      return f === mi;
    }) : mi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = nr(this.config.entry || this.config.onEntry).map(function(p) {
      return di(p);
    }), this.onExit = nr(this.config.exit || this.config.onExit).map(function(p) {
      return di(p);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = nr(this.config.invoke).map(function(p, f) {
      var w, y;
      if (Pr(p)) {
        var S = ro(u.id, f);
        return u.machine.options.services = Y((w = {}, w[S] = p, w), u.machine.options.services), lo({ src: S, id: S });
      } else if (Te(p.src)) {
        var S = p.id || ro(u.id, f);
        return lo(Y(Y({}, p), { id: S, src: p.src }));
      } else if (Pr(p.src) || Re(p.src)) {
        var S = p.id || ro(u.id, f);
        return u.machine.options.services = Y((y = {}, y[S] = p.src, y), u.machine.options.services), lo(Y(Y({ id: S }, p), { src: S }));
      } else {
        var C = p.src;
        return lo(Y(Y({ id: ro(u.id, f) }, p), { src: C }));
      }
    }), this.activities = nr(this.config.activities).concat(this.invoke).map(function(p) {
      return Ba(p);
    }), this.transition = this.transition.bind(this), this.tags = nr(this.config.tags);
  }
  __name(t, "t");
  return c(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Cl(this).forEach(function(r) {
      return r.on;
    });
  }, t.prototype.withConfig = function(r, e) {
    var n = this.options, a = n.actions, u = n.activities, h = n.guards, b = n.services, v = n.delays;
    return new t(this.config, { actions: Y(Y({}, a), r.actions), activities: Y(Y({}, u), r.activities), guards: Y(Y({}, h), r.guards), services: Y(Y({}, b), r.services), delays: Y(Y({}, v), r.delays) }, e != null ? e : this.context);
  }, t.prototype.withContext = function(r) {
    return new t(this.config, this.options, r);
  }, Object.defineProperty(t.prototype, "context", { get: function() {
    return Re(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: pi(this.states, function(r) {
      return r.definition;
    }), on: this.on, transitions: this.transitions, entry: this.onEntry, exit: this.onExit, activities: this.activities || [], meta: this.meta, order: this.order || -1, data: this.doneData, invoke: this.invoke, description: this.description, tags: this.tags };
  }, enumerable: false, configurable: true }), t.prototype.toJSON = function() {
    return this.definition;
  }, Object.defineProperty(t.prototype, "on", { get: function() {
    if (this.__cache.on)
      return this.__cache.on;
    var r = this.transitions;
    return this.__cache.on = r.reduce(function(e, n) {
      return e[n.eventType] = e[n.eventType] || [], e[n.eventType].push(n), e;
    }, {});
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "after", { get: function() {
    return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "transitions", { get: function() {
    return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
  }, enumerable: false, configurable: true }), t.prototype.getCandidates = function(r) {
    if (this.__cache.candidates[r])
      return this.__cache.candidates[r];
    var e = r === mi, n = this.transitions.filter(function(a) {
      var u = a.eventType === r;
      return e ? u : u || a.eventType === uo;
    });
    return this.__cache.candidates[r] = n, n;
  }, t.prototype.getDelayedTransitions = function() {
    var r = this, e = this.config.after;
    if (!e)
      return [];
    var n = c(function(u, h) {
      var b = Re(u) ? "".concat(r.id, ":delay[").concat(h, "]") : u, v = Hc(b, r.id);
      return r.onEntry.push(El(v, { delay: u })), r.onExit.push(Gc(v)), v;
    }, "mutateEntryExit"), a = Fr(e) ? e.map(function(u, h) {
      var b = n(u.delay, h);
      return Y(Y({}, u), { event: b });
    }) : je(Object.keys(e).map(function(u, h) {
      var b = e[u], v = Te(b) ? { target: b } : b, p = isNaN(+u) ? u : +u, f = n(p, h);
      return nr(v).map(function(w) {
        return Y(Y({}, w), { event: f, delay: p });
      });
    }));
    return a.map(function(u) {
      var h = u.delay;
      return Y(Y({}, r.formatTransition(u)), { delay: h });
    });
  }, t.prototype.getStateNodes = function(r) {
    var e, n = this;
    if (!r)
      return [];
    var a = r instanceof wr ? r.value : ci(r, this.delimiter);
    if (Te(a)) {
      var u = this.getStateNode(a).initial;
      return u !== void 0 ? this.getStateNodes((e = {}, e[a] = u, e)) : [this, this.states[a]];
    }
    var h = Object.keys(a), b = [this];
    return b.push.apply(b, De([], Ce(je(h.map(function(v) {
      return n.getStateNode(v).getStateNodes(a[v]);
    }))), false)), b;
  }, t.prototype.handles = function(r) {
    var e = _a(r);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(r) {
    var e = r instanceof wr ? r : wr.create(r), n = Array.from(Gn([], this.getStateNodes(e.value)));
    return new wr(Y(Y({}, e), { value: this.resolve(e.value), configuration: n, done: Ln(n, this), tags: Tl(n), machine: this.machine }));
  }, t.prototype.transitionLeafNode = function(r, e, n) {
    var a = this.getStateNode(r), u = a.next(e, n);
    return !u || !u.transitions.length ? this.next(e, n) : u;
  }, t.prototype.transitionCompoundNode = function(r, e, n) {
    var a = Object.keys(r), u = this.getStateNode(a[0]), h = u._transition(r[a[0]], e, n);
    return !h || !h.transitions.length ? this.next(e, n) : h;
  }, t.prototype.transitionParallelNode = function(r, e, n) {
    var a, u, h = {};
    try {
      for (var b = Ee(Object.keys(r)), v = b.next(); !v.done; v = b.next()) {
        var p = v.value, f = r[p];
        if (f) {
          var w = this.getStateNode(p), y = w._transition(f, e, n);
          y && (h[p] = y);
        }
      }
    } catch (L) {
      a = { error: L };
    } finally {
      try {
        v && !v.done && (u = b.return) && u.call(b);
      } finally {
        if (a)
          throw a.error;
      }
    }
    var S = Object.keys(h).map(function(L) {
      return h[L];
    }), C = je(S.map(function(L) {
      return L.transitions;
    })), O = S.some(function(L) {
      return L.transitions.length > 0;
    });
    if (!O)
      return this.next(e, n);
    var z = je(S.map(function(L) {
      return L.entrySet;
    })), H = je(Object.keys(h).map(function(L) {
      return h[L].configuration;
    }));
    return { transitions: C, entrySet: z, exitSet: je(S.map(function(L) {
      return L.exitSet;
    })), configuration: H, source: e, actions: je(Object.keys(h).map(function(L) {
      return h[L].actions;
    })) };
  }, t.prototype._transition = function(r, e, n) {
    return Te(r) ? this.transitionLeafNode(r, e, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, e, n) : this.transitionParallelNode(r, e, n);
  }, t.prototype.getTransitionData = function(r, e) {
    return this._transition(r.value, r, ut(e));
  }, t.prototype.next = function(r, e) {
    var n, a, u = this, h = e.name, b = [], v = [], p;
    try {
      for (var f = Ee(this.getCandidates(h)), w = f.next(); !w.done; w = f.next()) {
        var y = w.value, S = y.cond, C = y.in, O = r.context, z = C ? Te(C) && vi(C) ? r.matches(ci(this.getStateNodeById(C).path, this.delimiter)) : Ji(ci(C, this.delimiter), Tc(this.path.slice(0, -2))(r.value)) : true, H = false;
        try {
          H = !S || Ga(this.machine, S, O, e, r);
        } catch (J) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(h, "' in state node '").concat(this.id, `':
`).concat(J.message));
        }
        if (H && z) {
          y.target !== void 0 && (v = y.target), b.push.apply(b, De([], Ce(y.actions), false)), p = y;
          break;
        }
      }
    } catch (J) {
      n = { error: J };
    } finally {
      try {
        w && !w.done && (a = f.return) && a.call(f);
      } finally {
        if (n)
          throw n.error;
      }
    }
    if (p) {
      if (!v.length)
        return { transitions: [p], entrySet: [], exitSet: [], configuration: r.value ? [this] : [], source: r, actions: b };
      var L = je(v.map(function(J) {
        return u.getRelativeStateNodes(J, r.historyValue);
      })), U = !!p.internal, A = U ? [] : je(L.map(function(J) {
        return u.nodesFromChild(J);
      }));
      return { transitions: [p], entrySet: A, exitSet: U ? [] : [this], configuration: L, source: r, actions: b };
    }
  }, t.prototype.nodesFromChild = function(r) {
    if (r.escapes(this))
      return [];
    for (var e = [], n = r; n && n !== this; )
      e.push(n), n = n.parent;
    return e.push(this), e;
  }, t.prototype.escapes = function(r) {
    if (this === r)
      return false;
    for (var e = this.parent; e; ) {
      if (e === r)
        return false;
      e = e.parent;
    }
    return true;
  }, t.prototype.getActions = function(r, e, n, a) {
    var u, h, b, v, p = Gn([], a ? this.getStateNodes(a.value) : [this]), f = r.configuration.length ? Gn(p, r.configuration) : p;
    try {
      for (var w = Ee(f), y = w.next(); !y.done; y = w.next()) {
        var S = y.value;
        ao(p, S) || r.entrySet.push(S);
      }
    } catch (j) {
      u = { error: j };
    } finally {
      try {
        y && !y.done && (h = w.return) && h.call(w);
      } finally {
        if (u)
          throw u.error;
      }
    }
    try {
      for (var C = Ee(p), O = C.next(); !O.done; O = C.next()) {
        var S = O.value;
        (!ao(f, S) || ao(r.exitSet, S.parent)) && r.exitSet.push(S);
      }
    } catch (j) {
      b = { error: j };
    } finally {
      try {
        O && !O.done && (v = C.return) && v.call(C);
      } finally {
        if (b)
          throw b.error;
      }
    }
    var z = je(r.entrySet.map(function(j) {
      var W = [];
      if (j.type !== "final")
        return W;
      var ee = j.parent;
      if (!ee.parent)
        return W;
      W.push(io(j.id, j.doneData), io(ee.id, j.doneData ? zn(j.doneData, e, n) : void 0));
      var ie = ee.parent;
      return ie.type === "parallel" && Nn(ie).every(function(ne) {
        return Ln(r.configuration, ne);
      }) && W.push(io(ie.id)), W;
    }));
    r.exitSet.sort(function(j, W) {
      return W.order - j.order;
    }), r.entrySet.sort(function(j, W) {
      return j.order - W.order;
    });
    var H = new Set(r.entrySet), L = new Set(r.exitSet), U = Ce([je(Array.from(H).map(function(j) {
      return De(De([], Ce(j.activities.map(function(W) {
        return Lc(W);
      })), false), Ce(j.onEntry), false);
    })).concat(z.map(Nc)), je(Array.from(L).map(function(j) {
      return De(De([], Ce(j.onExit), false), Ce(j.activities.map(function(W) {
        return jc(W);
      })), false);
    }))], 2), A = U[0], J = U[1], R = no(J.concat(r.actions).concat(A), this.machine.options.actions);
    return R;
  }, t.prototype.transition = function(r, e, n) {
    r === void 0 && (r = this.initialState);
    var a = ut(e), u;
    if (r instanceof wr)
      u = n === void 0 ? r : this.resolveState(wr.from(r, n));
    else {
      var h = Te(r) ? this.resolve(Qi(this.getResolvedPath(r))) : this.resolve(r), b = n != null ? n : this.machine.context;
      u = this.resolveState(wr.from(h, b));
    }
    if (!$e && a.name === uo)
      throw new Error("An event cannot have the wildcard type ('".concat(uo, "')"));
    if (this.strict && !this.events.includes(a.name) && !Ic(a.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
    var v = this._transition(u.value, u, a) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: u, actions: [] }, p = Gn([], this.getStateNodes(u.value)), f = v.configuration.length ? Gn(p, v.configuration) : p;
    return v.configuration = De([], Ce(f), false), this.resolveTransition(v, u, u.context, a);
  }, t.prototype.resolveRaisedTransition = function(r, e, n) {
    var a, u = r.actions;
    return r = this.transition(r, e), r._event = n, r.event = n.data, (a = r.actions).unshift.apply(a, De([], Ce(u), false)), r;
  }, t.prototype.resolveTransition = function(r, e, n, a) {
    var u, h, b = this;
    a === void 0 && (a = _n);
    var v = r.configuration, p = !e || r.transitions.length > 0, f = p ? Yc(this.machine, v) : void 0, w = e ? e.historyValue ? e.historyValue : r.source ? this.machine.historyValue(e.value) : void 0 : void 0, y = this.getActions(r, n, a, e), S = e ? Y({}, e.activities) : {};
    try {
      for (var C = Ee(y), O = C.next(); !O.done; O = C.next()) {
        var z = O.value;
        z.type === Yi ? S[z.activity.id || z.activity.type] = z : z.type === li && (S[z.activity.id || z.activity.type] = false);
      }
    } catch (me) {
      u = { error: me };
    } finally {
      try {
        O && !O.done && (h = C.return) && h.call(C);
      } finally {
        if (u)
          throw u.error;
      }
    }
    var H = Ce(Ha(this, e, n, a, y, this.machine.config.preserveActionOrder), 2), L = H[0], U = H[1], A = Ce(Da(L, function(me) {
      return me.type === ui || me.type === Pn && me.to === cn.Internal;
    }), 2), J = A[0], R = A[1], j = L.filter(function(me) {
      var et;
      return me.type === Yi && ((et = me.activity) === null || et === void 0 ? void 0 : et.type) === Xi;
    }), W = j.reduce(function(me, et) {
      return me[et.activity.id] = qc(et.activity, b.machine, U, a), me;
    }, e ? Y({}, e.children) : {}), ee = p ? r.configuration : e ? e.configuration : [], ie = Ln(ee, this), ne = new wr({ value: f || e.value, context: U, _event: a, _sessionid: e ? e._sessionid : null, historyValue: f ? w ? zc(w, f) : void 0 : e ? e.historyValue : void 0, history: !f || r.source ? e : void 0, actions: f ? R : [], activities: f ? S : e ? e.activities : {}, events: [], configuration: ee, transitions: r.transitions, children: W, done: ie, tags: Tl(ee), machine: this }), de = n !== U;
    ne.changed = a.name === Zi || de;
    var V = ne.history;
    V && delete V.history;
    var ce = !ie && (this._transient || v.some(function(me) {
      return me._transient;
    }));
    if (!p && (!ce || a.name === mi))
      return ne;
    var Ne = ne;
    if (!ie)
      for (ce && (Ne = this.resolveRaisedTransition(Ne, { type: wc }, a)); J.length; ) {
        var Ye = J.shift();
        Ne = this.resolveRaisedTransition(Ne, Ye._event, a);
      }
    var He = Ne.changed || (V ? !!Ne.actions.length || de || typeof V.value != typeof Ne.value || !Ol(Ne.value, V.value) : void 0);
    return Ne.changed = He, Ne.history = V, Ne;
  }, t.prototype.getStateNode = function(r) {
    if (vi(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[r];
    if (!e)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, t.prototype.getStateNodeById = function(r) {
    var e = vi(r) ? r.slice(Al.length) : r;
    if (e === this.id)
      return this;
    var n = this.machine.idMap[e];
    if (!n)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, t.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && vi(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (u) {
      }
    for (var e = ka(r, this.delimiter).slice(), n = this; e.length; ) {
      var a = e.shift();
      if (!a.length)
        break;
      n = n.getStateNode(a);
    }
    return n;
  }, t.prototype.resolve = function(r) {
    var e, n = this;
    if (!r)
      return this.initialStateValue || hi;
    switch (this.type) {
      case "parallel":
        return pi(this.initialStateValue, function(u, h) {
          return u ? n.getStateNode(h).resolve(r[h] || u) : hi;
        });
      case "compound":
        if (Te(r)) {
          var a = this.getStateNode(r);
          return a.type === "parallel" || a.type === "compound" ? (e = {}, e[r] = a.initialStateValue, e) : r;
        }
        return Object.keys(r).length ? pi(r, function(u, h) {
          return u ? n.getStateNode(h).resolve(u) : hi;
        }) : this.initialStateValue || {};
      default:
        return r || hi;
    }
  }, t.prototype.getResolvedPath = function(r) {
    if (vi(r)) {
      var e = this.machine.idMap[r.slice(Al.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return e.path;
    }
    return ka(r, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = yl(this.states, function(n) {
        return n.initialStateValue || hi;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = oo(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
    } else
      e = {};
    return this.__cache.initialStateValue = e, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), t.prototype.getInitialState = function(r, e) {
    this._init();
    var n = this.getStateNodes(r);
    return this.resolveTransition({ configuration: n, entrySet: n, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, e != null ? e : this.machine.context, void 0);
  }, Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this.initialStateValue;
    if (!r)
      throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(r);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "target", { get: function() {
    var r;
    if (this.type === "history") {
      var e = this.config;
      Te(e.target) ? r = vi(e.target) ? Qi(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : r = e.target;
    }
    return r;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(r, e, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(e) : r.initialStateNodes : [r];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (oo(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return $e || Ze(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = Ki(this.initialStateValue);
    return je(e.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), t.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var e = Ce(r), n = e[0], a = e.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var u = this.getStateNode(n);
    if (u.type === "history")
      return u.resolveHistory();
    if (!this.states[n])
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(a);
  }, t.prototype.historyValue = function(r) {
    if (Object.keys(this.states).length)
      return { current: r || this.initialStateValue, states: yl(this.states, function(e, n) {
        if (!r)
          return e.historyValue();
        var a = Te(r) ? void 0 : r[n];
        return e.historyValue(a || e.initialStateValue);
      }, function(e) {
        return !e.history;
      }) };
  }, t.prototype.resolveHistory = function(r) {
    var e = this;
    if (this.type !== "history")
      return [this];
    var n = this.parent;
    if (!r) {
      var a = this.target;
      return a ? je(Ki(a).map(function(h) {
        return n.getFromRelativePath(h);
      })) : n.initialStateNodes;
    }
    var u = Oc(n.path, "states")(r).current;
    return Te(u) ? [n.getStateNode(u)] : je(Ki(u).map(function(h) {
      return e.history === "deep" ? n.getFromRelativePath(h) : [n.states[h[0]]];
    }));
  }, Object.defineProperty(t.prototype, "stateIds", { get: function() {
    var r = this, e = je(Object.keys(this.states).map(function(n) {
      return r.states[n].stateIds;
    }));
    return [this.id].concat(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "events", { get: function() {
    var r, e, n, a;
    if (this.__cache.events)
      return this.__cache.events;
    var u = this.states, h = new Set(this.ownEvents);
    if (u)
      try {
        for (var b = Ee(Object.keys(u)), v = b.next(); !v.done; v = b.next()) {
          var p = v.value, f = u[p];
          if (f.states)
            try {
              for (var w = (n = void 0, Ee(f.events)), y = w.next(); !y.done; y = w.next()) {
                var S = y.value;
                h.add("".concat(S));
              }
            } catch (C) {
              n = { error: C };
            } finally {
              try {
                y && !y.done && (a = w.return) && a.call(w);
              } finally {
                if (n)
                  throw n.error;
              }
            }
        }
      } catch (C) {
        r = { error: C };
      } finally {
        try {
          v && !v.done && (e = b.return) && e.call(b);
        } finally {
          if (r)
            throw r.error;
        }
      }
    return this.__cache.events = Array.from(h);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "ownEvents", { get: function() {
    var r = new Set(this.transitions.filter(function(e) {
      return !(!e.target && !e.actions.length && e.internal);
    }).map(function(e) {
      return e.eventType;
    }));
    return Array.from(r);
  }, enumerable: false, configurable: true }), t.prototype.resolveTarget = function(r) {
    var e = this;
    if (r !== void 0)
      return r.map(function(n) {
        if (!Te(n))
          return n;
        var a = n[0] === e.delimiter;
        if (a && !e.parent)
          return e.getStateNodeByPath(n.slice(1));
        var u = a ? e.key + n : n;
        if (e.parent)
          try {
            var h = e.parent.getStateNodeByPath(u);
            return h;
          } catch (b) {
            throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(b.message));
          }
        else
          return e.getStateNodeByPath(u);
      });
  }, t.prototype.formatTransition = function(r) {
    var e = this, n = kc(r.target), a = "internal" in r ? r.internal : n ? n.some(function(v) {
      return Te(v) && v[0] === e.delimiter;
    }) : true, u = this.machine.options.guards, h = this.resolveTarget(n), b = Y(Y({}, r), { actions: no(nr(r.actions)), cond: Na(r.cond, u), target: h, source: this, internal: a, eventType: r.event, toJSON: function() {
      return Y(Y({}, b), { target: b.target ? b.target.map(function(v) {
        return "#".concat(v.id);
      }) : void 0, source: "#".concat(e.id) });
    } });
    return b;
  }, t.prototype.formatTransitions = function() {
    var r, e, n = this, a;
    if (!this.config.on)
      a = [];
    else if (Array.isArray(this.config.on))
      a = this.config.on;
    else {
      var u = this.config.on, h = uo, b = u[h], v = b === void 0 ? [] : b, p = si(u, [typeof h == "symbol" ? h : h + ""]);
      a = je(Object.keys(p).map(function(L) {
        !$e && L === mi && Ze(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var U = Rn(L, p[L]);
        return $e || Xh(n, L, U), U;
      }).concat(Rn(uo, v)));
    }
    var f = this.config.always ? Rn("", this.config.always) : [], w = this.config.onDone ? Rn(String(io(this.id)), this.config.onDone) : [];
    $e || Ze(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var y = je(this.invoke.map(function(L) {
      var U = [];
      return L.onDone && U.push.apply(U, De([], Ce(Rn(String(fi(L.id)), L.onDone)), false)), L.onError && U.push.apply(U, De([], Ce(Rn(String(kn(L.id)), L.onError)), false)), U;
    })), S = this.after, C = je(De(De(De(De([], Ce(w), false), Ce(y), false), Ce(a), false), Ce(f), false).map(function(L) {
      return nr(L).map(function(U) {
        return n.formatTransition(U);
      });
    }));
    try {
      for (var O = Ee(S), z = O.next(); !z.done; z = O.next()) {
        var H = z.value;
        C.push(H);
      }
    } catch (L) {
      r = { error: L };
    } finally {
      try {
        z && !z.done && (e = O.return) && e.call(O);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return C;
  }, t;
}();
function ct(t, r) {
  return new rp(t, r);
}
__name(ct, "ct");
c(ct, "createMachine");
var po = In(co(), 1);
var Fa = c((t) => t != null && typeof t.draggable == "boolean", "isDraggable");
var qa = c((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var zl = c((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function ye(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.grabbed = false;
      this.dragging = false;
      this.snapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = ct({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        ue("draggable:init", {}, this);
      }, setInteract: (a, u) => {
        B.need(u.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let h = (0, po.default)(this);
        h.styleCursor(false), h.pointerEvents({ ignoreFrom: ".resize-handle" }), h.on("down", this.grab.bind(this)), h.on("up", this.release.bind(this)), h.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let b = this.dropzone;
        qa(b) ? this.snappedDropzone = b : this.snappedDropzone = null;
      }, grab: (a, u) => {
        B.need(u.type === "GRAB", "event type must be GRAB"), u.type === "GRAB" && (this.grabbed = true, ue("draggable:grab", {}, this), zl(this.dropzone) && (this.snapped = false, this.moveByOffset(u.x, u.y), this.classList.remove("qpu-operation-xl")));
      }, release: (a, u) => {
        B.need(u.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, ue("draggable:release", {}, this);
      }, startDragging: (a, u) => {
        B.need(u.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (a, u) => {
        B.need(u.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, ue("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, ue("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && ue("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        this.snapped && (this.moveTo(0, 0), ue("draggable:drop", {}, this));
      }, delete: () => {
        (0, po.default)(this).unset(), ue("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => qa(this.dropzone), isOnPaletteDropzone: () => zl(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && qa(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = tt(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${Xe(a.value)}`);
      });
    }
    get draggable() {
      return this.draggableService.state !== void 0;
    }
    set draggable(a) {
      a ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    initDraggable() {
      this.draggableService.state === void 0 && this.draggableService.start();
    }
    get dropzone() {
      let a = this.parentElement;
      return B.notNull(a), !zl(a) && !qa(a) ? null : a;
    }
    set snapTargets(a) {
      (0, po.default)(this).draggable({ modifiers: [po.default.modifiers.snap({ targets: a, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(a) {
      let u = a.modifiers[0];
      if (u.inRange) {
        let h = u.target.source;
        ue("draggable:in-snap-range", { snapTargetInfo: h }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
      } else
        this.snapped && this.draggableService.send({ type: "UNSNAP" });
    }
    grab(a) {
      this.draggableService.send({ type: "GRAB", x: a.offsetX, y: a.offsetY });
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
    dragMove(a) {
      this.move(a.dx, a.dy);
    }
    move(a, u) {
      let h = this.operationX + a, b = this.operationY + u;
      this.moveTo(h, b);
    }
    moveTo(a, u) {
      this.operationX = a, this.operationY = u, this.style.transform = `translate(${a}px, ${u}px)`;
    }
    moveByOffset(a, u) {
      let h = a - this.clientWidth / 2, b = u - this.clientHeight / 2;
      this.move(h, b);
    }
  }
  __name(r, "r");
  return c(r, "DraggableMixinClass"), M([k], r.prototype, "operationX", 2), M([k], r.prototype, "operationY", 2), M([k], r.prototype, "grabbed", 2), M([k], r.prototype, "dragging", 2), M([k], r.prototype, "snapped", 2), M([k], r.prototype, "bit", 2), M([k], r.prototype, "debugDraggable", 2), r;
}
__name(ye, "ye");
c(ye, "DraggableMixin");
var jn = c((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function ip(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(r, "r");
  return c(r, "FlaggableMixinClass"), M([k], r.prototype, "flag", 2), r;
}
__name(ip, "ip");
c(ip, "FlaggableMixin");
var Ve = "top";
var pt = "bottom";
var rt = "right";
var Qe = "left";
var Wa = "auto";
var pn = [Ve, pt, rt, Qe];
var Wr = "start";
var Hn = "end";
var op = "clippingParents";
var Ua = "viewport";
var gi = "popper";
var ap = "reference";
var Rl = pn.reduce(function(t, r) {
  return t.concat([r + "-" + Wr, r + "-" + Hn]);
}, []);
var Va = [].concat(pn, [Wa]).reduce(function(t, r) {
  return t.concat([r, r + "-" + Wr, r + "-" + Hn]);
}, []);
var Zh = "beforeRead";
var Qh = "read";
var Jh = "afterRead";
var Kh = "beforeMain";
var ev = "main";
var tv = "afterMain";
var rv = "beforeWrite";
var nv = "write";
var iv = "afterWrite";
var sp = [Zh, Qh, Jh, Kh, ev, tv, rv, nv, iv];
function vt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
__name(vt, "vt");
c(vt, "getNodeName");
function Je(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var r = t.ownerDocument;
    return r && r.defaultView || window;
  }
  return t;
}
__name(Je, "Je");
c(Je, "getWindow");
function zr(t) {
  var r = Je(t).Element;
  return t instanceof r || t instanceof Element;
}
__name(zr, "zr");
c(zr, "isElement");
function dt(t) {
  var r = Je(t).HTMLElement;
  return t instanceof r || t instanceof HTMLElement;
}
__name(dt, "dt");
c(dt, "isHTMLElement");
function Ya(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = Je(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
__name(Ya, "Ya");
c(Ya, "isShadowRoot");
function ov(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function(e) {
    var n = r.styles[e] || {}, a = r.attributes[e] || {}, u = r.elements[e];
    !dt(u) || !vt(u) || (Object.assign(u.style, n), Object.keys(a).forEach(function(h) {
      var b = a[h];
      b === false ? u.removeAttribute(h) : u.setAttribute(h, b === true ? "" : b);
    }));
  });
}
__name(ov, "ov");
c(ov, "applyStyles");
function av(t) {
  var r = t.state, e = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, e.popper), r.styles = e, r.elements.arrow && Object.assign(r.elements.arrow.style, e.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var a = r.elements[n], u = r.attributes[n] || {}, h = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : e[n]), b = h.reduce(function(v, p) {
        return v[p] = "", v;
      }, {});
      !dt(a) || !vt(a) || (Object.assign(a.style, b), Object.keys(u).forEach(function(v) {
        a.removeAttribute(v);
      }));
    });
  };
}
__name(av, "av");
c(av, "effect");
var fo = { name: "applyStyles", enabled: true, phase: "write", fn: ov, effect: av, requires: ["computeStyles"] };
function mt(t) {
  return t.split("-")[0];
}
__name(mt, "mt");
c(mt, "getBasePlacement");
var xr = Math.max;
var Bn = Math.min;
var Ur = Math.round;
function pr(t, r) {
  r === void 0 && (r = false);
  var e = t.getBoundingClientRect(), n = 1, a = 1;
  if (dt(t) && r) {
    var u = t.offsetHeight, h = t.offsetWidth;
    h > 0 && (n = Ur(e.width) / h || 1), u > 0 && (a = Ur(e.height) / u || 1);
  }
  return { width: e.width / n, height: e.height / a, top: e.top / a, right: e.right / n, bottom: e.bottom / a, left: e.left / n, x: e.left / n, y: e.top / a };
}
__name(pr, "pr");
c(pr, "getBoundingClientRect");
function $n(t) {
  var r = pr(t), e = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(r.width - e) <= 1 && (e = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: n };
}
__name($n, "$n");
c($n, "getLayoutRect");
function ho(t, r) {
  var e = r.getRootNode && r.getRootNode();
  if (t.contains(r))
    return true;
  if (e && Ya(e)) {
    var n = r;
    do {
      if (n && t.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name(ho, "ho");
c(ho, "contains");
function Dt(t) {
  return Je(t).getComputedStyle(t);
}
__name(Dt, "Dt");
c(Dt, "getComputedStyle");
function _l(t) {
  return ["table", "td", "th"].indexOf(vt(t)) >= 0;
}
__name(_l, "_l");
c(_l, "isTableElement");
function xt(t) {
  return ((zr(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(xt, "xt");
c(xt, "getDocumentElement");
function Vr(t) {
  return vt(t) === "html" ? t : t.assignedSlot || t.parentNode || (Ya(t) ? t.host : null) || xt(t);
}
__name(Vr, "Vr");
c(Vr, "getParentNode");
function lp(t) {
  return !dt(t) || Dt(t).position === "fixed" ? null : t.offsetParent;
}
__name(lp, "lp");
c(lp, "getTrueOffsetParent");
function sv(t) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && dt(t)) {
    var n = Dt(t);
    if (n.position === "fixed")
      return null;
  }
  for (var a = Vr(t); dt(a) && ["html", "body"].indexOf(vt(a)) < 0; ) {
    var u = Dt(a);
    if (u.transform !== "none" || u.perspective !== "none" || u.contain === "paint" || ["transform", "perspective"].indexOf(u.willChange) !== -1 || r && u.willChange === "filter" || r && u.filter && u.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
__name(sv, "sv");
c(sv, "getContainingBlock");
function Er(t) {
  for (var r = Je(t), e = lp(t); e && _l(e) && Dt(e).position === "static"; )
    e = lp(e);
  return e && (vt(e) === "html" || vt(e) === "body" && Dt(e).position === "static") ? r : e || sv(t) || r;
}
__name(Er, "Er");
c(Er, "getOffsetParent");
function qn(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
__name(qn, "qn");
c(qn, "getMainAxisFromPlacement");
function Fn(t, r, e) {
  return xr(t, Bn(r, e));
}
__name(Fn, "Fn");
c(Fn, "within");
function up(t, r, e) {
  var n = Fn(t, r, e);
  return n > e ? e : n;
}
__name(up, "up");
c(up, "withinMaxClamp");
function vo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(vo, "vo");
c(vo, "getFreshSideObject");
function mo(t) {
  return Object.assign({}, vo(), t);
}
__name(mo, "mo");
c(mo, "mergePaddingObject");
function go(t, r) {
  return r.reduce(function(e, n) {
    return e[n] = t, e;
  }, {});
}
__name(go, "go");
c(go, "expandToHashMap");
var lv = c(function(r, e) {
  return r = typeof r == "function" ? r(Object.assign({}, e.rects, { placement: e.placement })) : r, mo(typeof r != "number" ? r : go(r, pn));
}, "toPaddingObject");
function uv(t) {
  var r, e = t.state, n = t.name, a = t.options, u = e.elements.arrow, h = e.modifiersData.popperOffsets, b = mt(e.placement), v = qn(b), p = [Qe, rt].indexOf(b) >= 0, f = p ? "height" : "width";
  if (!(!u || !h)) {
    var w = lv(a.padding, e), y = $n(u), S = v === "y" ? Ve : Qe, C = v === "y" ? pt : rt, O = e.rects.reference[f] + e.rects.reference[v] - h[v] - e.rects.popper[f], z = h[v] - e.rects.reference[v], H = Er(u), L = H ? v === "y" ? H.clientHeight || 0 : H.clientWidth || 0 : 0, U = O / 2 - z / 2, A = w[S], J = L - y[f] - w[C], R = L / 2 - y[f] / 2 + U, j = Fn(A, R, J), W = v;
    e.modifiersData[n] = (r = {}, r[W] = j, r.centerOffset = j - R, r);
  }
}
__name(uv, "uv");
c(uv, "arrow");
function cv(t) {
  var r = t.state, e = t.options, n = e.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = r.elements.popper.querySelector(a), !a) || ho(r.elements.popper, a) && (r.elements.arrow = a));
}
__name(cv, "cv");
c(cv, "effect");
var cp = { name: "arrow", enabled: true, phase: "main", fn: uv, effect: cv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function dr(t) {
  return t.split("-")[1];
}
__name(dr, "dr");
c(dr, "getVariation");
var pv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function dv(t) {
  var r = t.x, e = t.y, n = window, a = n.devicePixelRatio || 1;
  return { x: Ur(r * a) / a || 0, y: Ur(e * a) / a || 0 };
}
__name(dv, "dv");
c(dv, "roundOffsetsByDPR");
function pp(t) {
  var r, e = t.popper, n = t.popperRect, a = t.placement, u = t.variation, h = t.offsets, b = t.position, v = t.gpuAcceleration, p = t.adaptive, f = t.roundOffsets, w = t.isFixed, y = h.x, S = y === void 0 ? 0 : y, C = h.y, O = C === void 0 ? 0 : C, z = typeof f == "function" ? f({ x: S, y: O }) : { x: S, y: O };
  S = z.x, O = z.y;
  var H = h.hasOwnProperty("x"), L = h.hasOwnProperty("y"), U = Qe, A = Ve, J = window;
  if (p) {
    var R = Er(e), j = "clientHeight", W = "clientWidth";
    if (R === Je(e) && (R = xt(e), Dt(R).position !== "static" && b === "absolute" && (j = "scrollHeight", W = "scrollWidth")), R = R, a === Ve || (a === Qe || a === rt) && u === Hn) {
      A = pt;
      var ee = w && J.visualViewport ? J.visualViewport.height : R[j];
      O -= ee - n.height, O *= v ? 1 : -1;
    }
    if (a === Qe || (a === Ve || a === pt) && u === Hn) {
      U = rt;
      var ie = w && J.visualViewport ? J.visualViewport.width : R[W];
      S -= ie - n.width, S *= v ? 1 : -1;
    }
  }
  var ne = Object.assign({ position: b }, p && pv), de = f === true ? dv({ x: S, y: O }) : { x: S, y: O };
  if (S = de.x, O = de.y, v) {
    var V;
    return Object.assign({}, ne, (V = {}, V[A] = L ? "0" : "", V[U] = H ? "0" : "", V.transform = (J.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + O + "px)" : "translate3d(" + S + "px, " + O + "px, 0)", V));
  }
  return Object.assign({}, ne, (r = {}, r[A] = L ? O + "px" : "", r[U] = H ? S + "px" : "", r.transform = "", r));
}
__name(pp, "pp");
c(pp, "mapToStyles");
function fv(t) {
  var r = t.state, e = t.options, n = e.gpuAcceleration, a = n === void 0 ? true : n, u = e.adaptive, h = u === void 0 ? true : u, b = e.roundOffsets, v = b === void 0 ? true : b;
  if (false)
    var p;
  var f = { placement: mt(r.placement), variation: dr(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: a, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, pp(Object.assign({}, f, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: h, roundOffsets: v })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, pp(Object.assign({}, f, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: v })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(fv, "fv");
c(fv, "computeStyles");
var dp = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: fv, data: {} };
var Xa = { passive: true };
function hv(t) {
  var r = t.state, e = t.instance, n = t.options, a = n.scroll, u = a === void 0 ? true : a, h = n.resize, b = h === void 0 ? true : h, v = Je(r.elements.popper), p = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return u && p.forEach(function(f) {
    f.addEventListener("scroll", e.update, Xa);
  }), b && v.addEventListener("resize", e.update, Xa), function() {
    u && p.forEach(function(f) {
      f.removeEventListener("scroll", e.update, Xa);
    }), b && v.removeEventListener("resize", e.update, Xa);
  };
}
__name(hv, "hv");
c(hv, "effect");
var fp = { name: "eventListeners", enabled: true, phase: "write", fn: c(function() {
}, "fn"), effect: hv, data: {} };
var vv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function bi(t) {
  return t.replace(/left|right|bottom|top/g, function(r) {
    return vv[r];
  });
}
__name(bi, "bi");
c(bi, "getOppositePlacement");
var mv = { start: "end", end: "start" };
function Za(t) {
  return t.replace(/start|end/g, function(r) {
    return mv[r];
  });
}
__name(Za, "Za");
c(Za, "getOppositeVariationPlacement");
function Wn(t) {
  var r = Je(t), e = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: e, scrollTop: n };
}
__name(Wn, "Wn");
c(Wn, "getWindowScroll");
function Un(t) {
  return pr(xt(t)).left + Wn(t).scrollLeft;
}
__name(Un, "Un");
c(Un, "getWindowScrollBarX");
function kl(t) {
  var r = Je(t), e = xt(t), n = r.visualViewport, a = e.clientWidth, u = e.clientHeight, h = 0, b = 0;
  return n && (a = n.width, u = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (h = n.offsetLeft, b = n.offsetTop)), { width: a, height: u, x: h + Un(t), y: b };
}
__name(kl, "kl");
c(kl, "getViewportRect");
function Dl(t) {
  var r, e = xt(t), n = Wn(t), a = (r = t.ownerDocument) == null ? void 0 : r.body, u = xr(e.scrollWidth, e.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = xr(e.scrollHeight, e.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), b = -n.scrollLeft + Un(t), v = -n.scrollTop;
  return Dt(a || e).direction === "rtl" && (b += xr(e.clientWidth, a ? a.clientWidth : 0) - u), { width: u, height: h, x: b, y: v };
}
__name(Dl, "Dl");
c(Dl, "getDocumentRect");
function Vn(t) {
  var r = Dt(t), e = r.overflow, n = r.overflowX, a = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + a + n);
}
__name(Vn, "Vn");
c(Vn, "isScrollParent");
function Qa(t) {
  return ["html", "body", "#document"].indexOf(vt(t)) >= 0 ? t.ownerDocument.body : dt(t) && Vn(t) ? t : Qa(Vr(t));
}
__name(Qa, "Qa");
c(Qa, "getScrollParent");
function dn(t, r) {
  var e;
  r === void 0 && (r = []);
  var n = Qa(t), a = n === ((e = t.ownerDocument) == null ? void 0 : e.body), u = Je(n), h = a ? [u].concat(u.visualViewport || [], Vn(n) ? n : []) : n, b = r.concat(h);
  return a ? b : b.concat(dn(Vr(h)));
}
__name(dn, "dn");
c(dn, "listScrollParents");
function yi(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(yi, "yi");
c(yi, "rectToClientRect");
function gv(t) {
  var r = pr(t);
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(gv, "gv");
c(gv, "getInnerBoundingClientRect");
function hp(t, r) {
  return r === Ua ? yi(kl(t)) : zr(r) ? gv(r) : yi(Dl(xt(t)));
}
__name(hp, "hp");
c(hp, "getClientRectFromMixedType");
function bv(t) {
  var r = dn(Vr(t)), e = ["absolute", "fixed"].indexOf(Dt(t).position) >= 0, n = e && dt(t) ? Er(t) : t;
  return zr(n) ? r.filter(function(a) {
    return zr(a) && ho(a, n) && vt(a) !== "body";
  }) : [];
}
__name(bv, "bv");
c(bv, "getClippingParents");
function Nl(t, r, e) {
  var n = r === "clippingParents" ? bv(t) : [].concat(r), a = [].concat(n, [e]), u = a[0], h = a.reduce(function(b, v) {
    var p = hp(t, v);
    return b.top = xr(p.top, b.top), b.right = Bn(p.right, b.right), b.bottom = Bn(p.bottom, b.bottom), b.left = xr(p.left, b.left), b;
  }, hp(t, u));
  return h.width = h.right - h.left, h.height = h.bottom - h.top, h.x = h.left, h.y = h.top, h;
}
__name(Nl, "Nl");
c(Nl, "getClippingRect");
function bo(t) {
  var r = t.reference, e = t.element, n = t.placement, a = n ? mt(n) : null, u = n ? dr(n) : null, h = r.x + r.width / 2 - e.width / 2, b = r.y + r.height / 2 - e.height / 2, v;
  switch (a) {
    case Ve:
      v = { x: h, y: r.y - e.height };
      break;
    case pt:
      v = { x: h, y: r.y + r.height };
      break;
    case rt:
      v = { x: r.x + r.width, y: b };
      break;
    case Qe:
      v = { x: r.x - e.width, y: b };
      break;
    default:
      v = { x: r.x, y: r.y };
  }
  var p = a ? qn(a) : null;
  if (p != null) {
    var f = p === "y" ? "height" : "width";
    switch (u) {
      case Wr:
        v[p] = v[p] - (r[f] / 2 - e[f] / 2);
        break;
      case Hn:
        v[p] = v[p] + (r[f] / 2 - e[f] / 2);
        break;
      default:
    }
  }
  return v;
}
__name(bo, "bo");
c(bo, "computeOffsets");
function Sr(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, a = n === void 0 ? t.placement : n, u = e.boundary, h = u === void 0 ? op : u, b = e.rootBoundary, v = b === void 0 ? Ua : b, p = e.elementContext, f = p === void 0 ? gi : p, w = e.altBoundary, y = w === void 0 ? false : w, S = e.padding, C = S === void 0 ? 0 : S, O = mo(typeof C != "number" ? C : go(C, pn)), z = f === gi ? ap : gi, H = t.rects.popper, L = t.elements[y ? z : f], U = Nl(zr(L) ? L : L.contextElement || xt(t.elements.popper), h, v), A = pr(t.elements.reference), J = bo({ reference: A, element: H, strategy: "absolute", placement: a }), R = yi(Object.assign({}, H, J)), j = f === gi ? R : A, W = { top: U.top - j.top + O.top, bottom: j.bottom - U.bottom + O.bottom, left: U.left - j.left + O.left, right: j.right - U.right + O.right }, ee = t.modifiersData.offset;
  if (f === gi && ee) {
    var ie = ee[a];
    Object.keys(W).forEach(function(ne) {
      var de = [rt, pt].indexOf(ne) >= 0 ? 1 : -1, V = [Ve, pt].indexOf(ne) >= 0 ? "y" : "x";
      W[ne] += ie[V] * de;
    });
  }
  return W;
}
__name(Sr, "Sr");
c(Sr, "detectOverflow");
function Gl(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, a = e.boundary, u = e.rootBoundary, h = e.padding, b = e.flipVariations, v = e.allowedAutoPlacements, p = v === void 0 ? Va : v, f = dr(n), w = f ? b ? Rl : Rl.filter(function(C) {
    return dr(C) === f;
  }) : pn, y = w.filter(function(C) {
    return p.indexOf(C) >= 0;
  });
  y.length === 0 && (y = w);
  var S = y.reduce(function(C, O) {
    return C[O] = Sr(t, { placement: O, boundary: a, rootBoundary: u, padding: h })[mt(O)], C;
  }, {});
  return Object.keys(S).sort(function(C, O) {
    return S[C] - S[O];
  });
}
__name(Gl, "Gl");
c(Gl, "computeAutoPlacement");
function yv(t) {
  if (mt(t) === Wa)
    return [];
  var r = bi(t);
  return [Za(t), r, Za(r)];
}
__name(yv, "yv");
c(yv, "getExpandedFallbackPlacements");
function wv(t) {
  var r = t.state, e = t.options, n = t.name;
  if (!r.modifiersData[n]._skip) {
    for (var a = e.mainAxis, u = a === void 0 ? true : a, h = e.altAxis, b = h === void 0 ? true : h, v = e.fallbackPlacements, p = e.padding, f = e.boundary, w = e.rootBoundary, y = e.altBoundary, S = e.flipVariations, C = S === void 0 ? true : S, O = e.allowedAutoPlacements, z = r.options.placement, H = mt(z), L = H === z, U = v || (L || !C ? [bi(z)] : yv(z)), A = [z].concat(U).reduce(function(zt, jt) {
      return zt.concat(mt(jt) === Wa ? Gl(r, { placement: jt, boundary: f, rootBoundary: w, padding: p, flipVariations: C, allowedAutoPlacements: O }) : jt);
    }, []), J = r.rects.reference, R = r.rects.popper, j = /* @__PURE__ */ new Map(), W = true, ee = A[0], ie = 0; ie < A.length; ie++) {
      var ne = A[ie], de = mt(ne), V = dr(ne) === Wr, ce = [Ve, pt].indexOf(de) >= 0, Ne = ce ? "width" : "height", Ye = Sr(r, { placement: ne, boundary: f, rootBoundary: w, altBoundary: y, padding: p }), He = ce ? V ? rt : Qe : V ? pt : Ve;
      J[Ne] > R[Ne] && (He = bi(He));
      var me = bi(He), et = [];
      if (u && et.push(Ye[de] <= 0), b && et.push(Ye[He] <= 0, Ye[me] <= 0), et.every(function(zt) {
        return zt;
      })) {
        ee = ne, W = false;
        break;
      }
      j.set(ne, et);
    }
    if (W)
      for (var ot = C ? 3 : 1, or = c(function(jt) {
        var ar = A.find(function(br) {
          var sr = j.get(br);
          if (sr)
            return sr.slice(0, jt).every(function(er) {
              return er;
            });
        });
        if (ar)
          return ee = ar, "break";
      }, "_loop"), K = ot; K > 0; K--) {
        var gr = or(K);
        if (gr === "break")
          break;
      }
    r.placement !== ee && (r.modifiersData[n]._skip = true, r.placement = ee, r.reset = true);
  }
}
__name(wv, "wv");
c(wv, "flip");
var vp = { name: "flip", enabled: true, phase: "main", fn: wv, requiresIfExists: ["offset"], data: { _skip: false } };
function mp(t, r, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - r.height - e.y, right: t.right - r.width + e.x, bottom: t.bottom - r.height + e.y, left: t.left - r.width - e.x };
}
__name(mp, "mp");
c(mp, "getSideOffsets");
function gp(t) {
  return [Ve, rt, pt, Qe].some(function(r) {
    return t[r] >= 0;
  });
}
__name(gp, "gp");
c(gp, "isAnySideFullyClipped");
function xv(t) {
  var r = t.state, e = t.name, n = r.rects.reference, a = r.rects.popper, u = r.modifiersData.preventOverflow, h = Sr(r, { elementContext: "reference" }), b = Sr(r, { altBoundary: true }), v = mp(h, n), p = mp(b, a, u), f = gp(v), w = gp(p);
  r.modifiersData[e] = { referenceClippingOffsets: v, popperEscapeOffsets: p, isReferenceHidden: f, hasPopperEscaped: w }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": w });
}
__name(xv, "xv");
c(xv, "hide");
var bp = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: xv };
function Ev(t, r, e) {
  var n = mt(t), a = [Qe, Ve].indexOf(n) >= 0 ? -1 : 1, u = typeof e == "function" ? e(Object.assign({}, r, { placement: t })) : e, h = u[0], b = u[1];
  return h = h || 0, b = (b || 0) * a, [Qe, rt].indexOf(n) >= 0 ? { x: b, y: h } : { x: h, y: b };
}
__name(Ev, "Ev");
c(Ev, "distanceAndSkiddingToXY");
function Sv(t) {
  var r = t.state, e = t.options, n = t.name, a = e.offset, u = a === void 0 ? [0, 0] : a, h = Va.reduce(function(f, w) {
    return f[w] = Ev(w, r.rects, u), f;
  }, {}), b = h[r.placement], v = b.x, p = b.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += v, r.modifiersData.popperOffsets.y += p), r.modifiersData[n] = h;
}
__name(Sv, "Sv");
c(Sv, "offset");
var yp = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Sv };
function Cv(t) {
  var r = t.state, e = t.name;
  r.modifiersData[e] = bo({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(Cv, "Cv");
c(Cv, "popperOffsets");
var wp = { name: "popperOffsets", enabled: true, phase: "read", fn: Cv, data: {} };
function Ll(t) {
  return t === "x" ? "y" : "x";
}
__name(Ll, "Ll");
c(Ll, "getAltAxis");
function Tv(t) {
  var r = t.state, e = t.options, n = t.name, a = e.mainAxis, u = a === void 0 ? true : a, h = e.altAxis, b = h === void 0 ? false : h, v = e.boundary, p = e.rootBoundary, f = e.altBoundary, w = e.padding, y = e.tether, S = y === void 0 ? true : y, C = e.tetherOffset, O = C === void 0 ? 0 : C, z = Sr(r, { boundary: v, rootBoundary: p, padding: w, altBoundary: f }), H = mt(r.placement), L = dr(r.placement), U = !L, A = qn(H), J = Ll(A), R = r.modifiersData.popperOffsets, j = r.rects.reference, W = r.rects.popper, ee = typeof O == "function" ? O(Object.assign({}, r.rects, { placement: r.placement })) : O, ie = typeof ee == "number" ? { mainAxis: ee, altAxis: ee } : Object.assign({ mainAxis: 0, altAxis: 0 }, ee), ne = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, de = { x: 0, y: 0 };
  if (R) {
    if (u) {
      var V, ce = A === "y" ? Ve : Qe, Ne = A === "y" ? pt : rt, Ye = A === "y" ? "height" : "width", He = R[A], me = He + z[ce], et = He - z[Ne], ot = S ? -W[Ye] / 2 : 0, or = L === Wr ? j[Ye] : W[Ye], K = L === Wr ? -W[Ye] : -j[Ye], gr = r.elements.arrow, zt = S && gr ? $n(gr) : { width: 0, height: 0 }, jt = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : vo(), ar = jt[ce], br = jt[Ne], sr = Fn(0, j[Ye], zt[Ye]), er = U ? j[Ye] / 2 - ot - sr - ar - ie.mainAxis : or - sr - ar - ie.mainAxis, Or = U ? -j[Ye] / 2 + ot + sr + br + ie.mainAxis : K + sr + br + ie.mainAxis, Gr = r.elements.arrow && Er(r.elements.arrow), vn = Gr ? A === "y" ? Gr.clientTop || 0 : Gr.clientLeft || 0 : 0, Ie = (V = ne == null ? void 0 : ne[A]) != null ? V : 0, mn = He + er - Ie - vn, gn = He + Or - Ie, Rt = Fn(S ? Bn(me, mn) : me, He, S ? xr(et, gn) : et);
      R[A] = Rt, de[A] = Rt - He;
    }
    if (b) {
      var Lr, Zn = A === "x" ? Ve : Qe, Kr = A === "x" ? pt : rt, yr = R[J], Ct = J === "y" ? "height" : "width", Mr = yr + z[Zn], Ht = yr - z[Kr], bn = [Ve, Qe].indexOf(H) !== -1, jr = (Lr = ne == null ? void 0 : ne[J]) != null ? Lr : 0, yn = bn ? Mr : yr - j[Ct] - W[Ct] - jr + ie.altAxis, en = bn ? yr + j[Ct] + W[Ct] - jr - ie.altAxis : Ht, wn = S && bn ? up(yn, yr, en) : Fn(S ? yn : Mr, yr, S ? en : Ht);
      R[J] = wn, de[J] = wn - yr;
    }
    r.modifiersData[n] = de;
  }
}
__name(Tv, "Tv");
c(Tv, "preventOverflow");
var xp = { name: "preventOverflow", enabled: true, phase: "main", fn: Tv, requiresIfExists: ["offset"] };
function jl(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(jl, "jl");
c(jl, "getHTMLElementScroll");
function Hl(t) {
  return t === Je(t) || !dt(t) ? Wn(t) : jl(t);
}
__name(Hl, "Hl");
c(Hl, "getNodeScroll");
function Ov(t) {
  var r = t.getBoundingClientRect(), e = Ur(r.width) / t.offsetWidth || 1, n = Ur(r.height) / t.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
__name(Ov, "Ov");
c(Ov, "isElementScaled");
function Bl(t, r, e) {
  e === void 0 && (e = false);
  var n = dt(r), a = dt(r) && Ov(r), u = xt(r), h = pr(t, a), b = { scrollLeft: 0, scrollTop: 0 }, v = { x: 0, y: 0 };
  return (n || !n && !e) && ((vt(r) !== "body" || Vn(u)) && (b = Hl(r)), dt(r) ? (v = pr(r, true), v.x += r.clientLeft, v.y += r.clientTop) : u && (v.x = Un(u))), { x: h.left + b.scrollLeft - v.x, y: h.top + b.scrollTop - v.y, width: h.width, height: h.height };
}
__name(Bl, "Bl");
c(Bl, "getCompositeRect");
function Mv(t) {
  var r = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(u) {
    r.set(u.name, u);
  });
  function a(u) {
    e.add(u.name);
    var h = [].concat(u.requires || [], u.requiresIfExists || []);
    h.forEach(function(b) {
      if (!e.has(b)) {
        var v = r.get(b);
        v && a(v);
      }
    }), n.push(u);
  }
  __name(a, "a");
  return c(a, "sort"), t.forEach(function(u) {
    e.has(u.name) || a(u);
  }), n;
}
__name(Mv, "Mv");
c(Mv, "order");
function $l(t) {
  var r = Mv(t);
  return sp.reduce(function(e, n) {
    return e.concat(r.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
__name($l, "$l");
c($l, "orderModifiers");
function ql(t) {
  var r;
  return function() {
    return r || (r = new Promise(function(e) {
      Promise.resolve().then(function() {
        r = void 0, e(t());
      });
    })), r;
  };
}
__name(ql, "ql");
c(ql, "debounce");
function Fl(t) {
  var r = t.reduce(function(e, n) {
    var a = e[n.name];
    return e[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, e;
  }, {});
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}
__name(Fl, "Fl");
c(Fl, "mergeByName");
var Ep = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Sp() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(Sp, "Sp");
c(Sp, "areValidElements");
function Cp(t) {
  t === void 0 && (t = {});
  var r = t, e = r.defaultModifiers, n = e === void 0 ? [] : e, a = r.defaultOptions, u = a === void 0 ? Ep : a;
  return c(function(b, v, p) {
    p === void 0 && (p = u);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ep, u), modifiersData: {}, elements: { reference: b, popper: v }, attributes: {}, styles: {} }, w = [], y = false, S = { state: f, setOptions: c(function(H) {
      var L = typeof H == "function" ? H(f.options) : H;
      O(), f.options = Object.assign({}, u, f.options, L), f.scrollParents = { reference: zr(b) ? dn(b) : b.contextElement ? dn(b.contextElement) : [], popper: dn(v) };
      var U = $l(Fl([].concat(n, f.options.modifiers)));
      if (f.orderedModifiers = U.filter(function(ne) {
        return ne.enabled;
      }), false) {
        var A;
        if (getBasePlacement(f.options.placement) === auto)
          var J;
        var R, j, W, ee, ie;
      }
      return C(), S.update();
    }, "setOptions"), forceUpdate: c(function() {
      if (!y) {
        var H = f.elements, L = H.reference, U = H.popper;
        if (Sp(L, U)) {
          f.rects = { reference: Bl(L, Er(U), f.options.strategy === "fixed"), popper: $n(U) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(ne) {
            return f.modifiersData[ne.name] = Object.assign({}, ne.data);
          });
          for (var A = 0, J = 0; J < f.orderedModifiers.length; J++) {
            if (f.reset === true) {
              f.reset = false, J = -1;
              continue;
            }
            var R = f.orderedModifiers[J], j = R.fn, W = R.options, ee = W === void 0 ? {} : W, ie = R.name;
            typeof j == "function" && (f = j({ state: f, options: ee, name: ie, instance: S }) || f);
          }
        }
      }
    }, "forceUpdate"), update: ql(function() {
      return new Promise(function(z) {
        S.forceUpdate(), z(f);
      });
    }), destroy: c(function() {
      O(), y = true;
    }, "destroy") };
    if (!Sp(b, v))
      return S;
    S.setOptions(p).then(function(z) {
      !y && p.onFirstUpdate && p.onFirstUpdate(z);
    });
    function C() {
      f.orderedModifiers.forEach(function(z) {
        var H = z.name, L = z.options, U = L === void 0 ? {} : L, A = z.effect;
        if (typeof A == "function") {
          var J = A({ state: f, name: H, instance: S, options: U }), R = c(function() {
          }, "noopFn");
          w.push(J || R);
        }
      });
    }
    __name(C, "C");
    c(C, "runModifierEffects");
    function O() {
      w.forEach(function(z) {
        return z();
      }), w = [];
    }
    __name(O, "O");
    return c(O, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(Cp, "Cp");
c(Cp, "popperGenerator");
var Iv = [fp, wp, dp, fo, yp, vp, xp, cp, bp];
var Wl = Cp({ defaultModifiers: Iv });
var Av = "tippy-box";
var kp = "tippy-content";
var Pv = "tippy-backdrop";
var Dp = "tippy-arrow";
var Np = "tippy-svg-arrow";
var Yn = { passive: true, capture: true };
var Gp = c(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function Ul(t, r, e) {
  if (Array.isArray(t)) {
    var n = t[r];
    return n == null ? Array.isArray(e) ? e[r] : e : n;
  }
  return t;
}
__name(Ul, "Ul");
c(Ul, "getValueAtIndexOrReturn");
function Jl(t, r) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(r + "]") > -1;
}
__name(Jl, "Jl");
c(Jl, "isType");
function Lp(t, r) {
  return typeof t == "function" ? t.apply(void 0, r) : t;
}
__name(Lp, "Lp");
c(Lp, "invokeWithArgsOrReturn");
function Tp(t, r) {
  if (r === 0)
    return t;
  var e;
  return function(n) {
    clearTimeout(e), e = setTimeout(function() {
      t(n);
    }, r);
  };
}
__name(Tp, "Tp");
c(Tp, "debounce");
function zv(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(zv, "zv");
c(zv, "splitBySpaces");
function wi(t) {
  return [].concat(t);
}
__name(wi, "wi");
c(wi, "normalizeToArray");
function Op(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
__name(Op, "Op");
c(Op, "pushIfUnique");
function Rv(t) {
  return t.filter(function(r, e) {
    return t.indexOf(r) === e;
  });
}
__name(Rv, "Rv");
c(Rv, "unique");
function _v(t) {
  return t.split("-")[0];
}
__name(_v, "_v");
c(_v, "getBasePlacement");
function Ka(t) {
  return [].slice.call(t);
}
__name(Ka, "Ka");
c(Ka, "arrayFrom");
function Mp(t) {
  return Object.keys(t).reduce(function(r, e) {
    return t[e] !== void 0 && (r[e] = t[e]), r;
  }, {});
}
__name(Mp, "Mp");
c(Mp, "removeUndefinedProps");
function yo() {
  return document.createElement("div");
}
__name(yo, "yo");
c(yo, "div");
function es(t) {
  return ["Element", "Fragment"].some(function(r) {
    return Jl(t, r);
  });
}
__name(es, "es");
c(es, "isElement");
function kv(t) {
  return Jl(t, "NodeList");
}
__name(kv, "kv");
c(kv, "isNodeList");
function Dv(t) {
  return Jl(t, "MouseEvent");
}
__name(Dv, "Dv");
c(Dv, "isMouseEvent");
function Nv(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(Nv, "Nv");
c(Nv, "isReferenceElement");
function Gv(t) {
  return es(t) ? [t] : kv(t) ? Ka(t) : Array.isArray(t) ? t : Ka(document.querySelectorAll(t));
}
__name(Gv, "Gv");
c(Gv, "getArrayOfElements");
function Vl(t, r) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = r + "ms");
  });
}
__name(Vl, "Vl");
c(Vl, "setTransitionDuration");
function Ip(t, r) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", r);
  });
}
__name(Ip, "Ip");
c(Ip, "setVisibilityState");
function Lv(t) {
  var r, e = wi(t), n = e[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(Lv, "Lv");
c(Lv, "getOwnerDocument");
function jv(t, r) {
  var e = r.clientX, n = r.clientY;
  return t.every(function(a) {
    var u = a.popperRect, h = a.popperState, b = a.props, v = b.interactiveBorder, p = _v(h.placement), f = h.modifiersData.offset;
    if (!f)
      return true;
    var w = p === "bottom" ? f.top.y : 0, y = p === "top" ? f.bottom.y : 0, S = p === "right" ? f.left.x : 0, C = p === "left" ? f.right.x : 0, O = u.top - n + w > v, z = n - u.bottom - y > v, H = u.left - e + S > v, L = e - u.right - C > v;
    return O || z || H || L;
  });
}
__name(jv, "jv");
c(jv, "isCursorOutsideInteractiveBorder");
function Yl(t, r, e) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
    t[n](a, e);
  });
}
__name(Yl, "Yl");
c(Yl, "updateTransitionEndListener");
function Ap(t, r) {
  for (var e = r; e; ) {
    var n;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (n = e.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(Ap, "Ap");
c(Ap, "actualContains");
var Rr = { isTouch: false };
var Pp = 0;
function Hv() {
  Rr.isTouch || (Rr.isTouch = true, window.performance && document.addEventListener("mousemove", jp));
}
__name(Hv, "Hv");
c(Hv, "onDocumentTouchStart");
function jp() {
  var t = performance.now();
  t - Pp < 20 && (Rr.isTouch = false, document.removeEventListener("mousemove", jp)), Pp = t;
}
__name(jp, "jp");
c(jp, "onDocumentMouseMove");
function Bv() {
  var t = document.activeElement;
  if (Nv(t)) {
    var r = t._tippy;
    t.blur && !r.state.isVisible && t.blur();
  }
}
__name(Bv, "Bv");
c(Bv, "onWindowBlur");
function $v() {
  document.addEventListener("touchstart", Hv, Yn), window.addEventListener("blur", Bv);
}
__name($v, "$v");
c($v, "bindGlobalEventListeners");
var qv = typeof window != "undefined" && typeof document != "undefined";
var Fv = qv ? !!window.msCrypto : false;
var Wv = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Uv = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Cr = Object.assign({ appendTo: Gp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: c(function() {
}, "onAfterUpdate"), onBeforeUpdate: c(function() {
}, "onBeforeUpdate"), onCreate: c(function() {
}, "onCreate"), onDestroy: c(function() {
}, "onDestroy"), onHidden: c(function() {
}, "onHidden"), onHide: c(function() {
}, "onHide"), onMount: c(function() {
}, "onMount"), onShow: c(function() {
}, "onShow"), onShown: c(function() {
}, "onShown"), onTrigger: c(function() {
}, "onTrigger"), onUntrigger: c(function() {
}, "onUntrigger"), onClickOutside: c(function() {
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Wv, Uv);
var Vv = Object.keys(Cr);
var Yv = c(function(r) {
  var e = Object.keys(r);
  e.forEach(function(n) {
    Cr[n] = r[n];
  });
}, "setDefaultProps");
function Hp(t) {
  var r = t.plugins || [], e = r.reduce(function(n, a) {
    var u = a.name, h = a.defaultValue;
    if (u) {
      var b;
      n[u] = t[u] !== void 0 ? t[u] : (b = Cr[u]) != null ? b : h;
    }
    return n;
  }, {});
  return Object.assign({}, t, e);
}
__name(Hp, "Hp");
c(Hp, "getExtendedPassedProps");
function Xv(t, r) {
  var e = r ? Object.keys(Hp(Object.assign({}, Cr, { plugins: r }))) : Vv, n = e.reduce(function(a, u) {
    var h = (t.getAttribute("data-tippy-" + u) || "").trim();
    if (!h)
      return a;
    if (u === "content")
      a[u] = h;
    else
      try {
        a[u] = JSON.parse(h);
      } catch (b) {
        a[u] = h;
      }
    return a;
  }, {});
  return n;
}
__name(Xv, "Xv");
c(Xv, "getDataAttributeProps");
function zp(t, r) {
  var e = Object.assign({}, r, { content: Lp(r.content, [t]) }, r.ignoreAttributes ? {} : Xv(t, r.plugins));
  return e.aria = Object.assign({}, Cr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? r.interactive : e.aria.expanded, content: e.aria.content === "auto" ? r.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(zp, "zp");
c(zp, "evaluateProps");
var Zv = c(function() {
  return "innerHTML";
}, "innerHTML");
function Zl(t, r) {
  t[Zv()] = r;
}
__name(Zl, "Zl");
c(Zl, "dangerouslySetInnerHTML");
function Rp(t) {
  var r = yo();
  return t === true ? r.className = Dp : (r.className = Np, es(t) ? r.appendChild(t) : Zl(r, t)), r;
}
__name(Rp, "Rp");
c(Rp, "createArrowElement");
function _p(t, r) {
  es(r.content) ? (Zl(t, ""), t.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? Zl(t, r.content) : t.textContent = r.content);
}
__name(_p, "_p");
c(_p, "setContent");
function Ql(t) {
  var r = t.firstElementChild, e = Ka(r.children);
  return { box: r, content: e.find(function(n) {
    return n.classList.contains(kp);
  }), arrow: e.find(function(n) {
    return n.classList.contains(Dp) || n.classList.contains(Np);
  }), backdrop: e.find(function(n) {
    return n.classList.contains(Pv);
  }) };
}
__name(Ql, "Ql");
c(Ql, "getChildren");
function Bp(t) {
  var r = yo(), e = yo();
  e.className = Av, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var n = yo();
  n.className = kp, n.setAttribute("data-state", "hidden"), _p(n, t.props), r.appendChild(e), e.appendChild(n), a(t.props, t.props);
  function a(u, h) {
    var b = Ql(r), v = b.box, p = b.content, f = b.arrow;
    h.theme ? v.setAttribute("data-theme", h.theme) : v.removeAttribute("data-theme"), typeof h.animation == "string" ? v.setAttribute("data-animation", h.animation) : v.removeAttribute("data-animation"), h.inertia ? v.setAttribute("data-inertia", "") : v.removeAttribute("data-inertia"), v.style.maxWidth = typeof h.maxWidth == "number" ? h.maxWidth + "px" : h.maxWidth, h.role ? v.setAttribute("role", h.role) : v.removeAttribute("role"), (u.content !== h.content || u.allowHTML !== h.allowHTML) && _p(p, t.props), h.arrow ? f ? u.arrow !== h.arrow && (v.removeChild(f), v.appendChild(Rp(h.arrow))) : v.appendChild(Rp(h.arrow)) : f && v.removeChild(f);
  }
  __name(a, "a");
  return c(a, "onUpdate"), { popper: r, onUpdate: a };
}
__name(Bp, "Bp");
c(Bp, "render");
Bp.$$tippy = true;
var Qv = 1;
var Ja = [];
var Xl = [];
function Jv(t, r) {
  var e = zp(t, Object.assign({}, Cr, Hp(Mp(r)))), n, a, u, h = false, b = false, v = false, p = false, f, w, y, S = [], C = Tp(mn, e.interactiveDebounce), O, z = Qv++, H = null, L = Rv(e.plugins), U = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: z, reference: t, popper: yo(), popperInstance: H, props: e, state: U, plugins: L, clearDelayTimeouts: yn, setProps: en, setContent: wn, show: Oi, hide: Mi, hideWithInteractivity: Ro, enable: bn, disable: jr, unmount: _o, destroy: vs };
  if (!e.render)
    return A;
  var J = e.render(A), R = J.popper, j = J.onUpdate;
  R.setAttribute("data-tippy-root", ""), R.id = "tippy-" + A.id, A.popper = R, t._tippy = A, R._tippy = A;
  var W = L.map(function(N) {
    return N.fn(A);
  }), ee = t.hasAttribute("aria-expanded");
  return Gr(), ot(), He(), me("onCreate", [A]), e.showOnCreate && Mr(), R.addEventListener("mouseenter", function() {
    A.props.interactive && A.state.isVisible && A.clearDelayTimeouts();
  }), R.addEventListener("mouseleave", function() {
    A.props.interactive && A.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", C);
  }), A;
  function ie() {
    var N = A.props.touch;
    return Array.isArray(N) ? N : [N, 0];
  }
  __name(ie, "ie");
  c(ie, "getNormalizedTouchSettings");
  function ne() {
    return ie()[0] === "hold";
  }
  __name(ne, "ne");
  c(ne, "getIsCustomTouchBehavior");
  function de() {
    var N;
    return !!((N = A.props.render) != null && N.$$tippy);
  }
  __name(de, "de");
  c(de, "getIsDefaultRenderFn");
  function V() {
    return O || t;
  }
  __name(V, "V");
  c(V, "getCurrentTarget");
  function ce() {
    var N = V().parentNode;
    return N ? Lv(N) : document;
  }
  __name(ce, "ce");
  c(ce, "getDocument");
  function Ne() {
    return Ql(R);
  }
  __name(Ne, "Ne");
  c(Ne, "getDefaultTemplateChildren");
  function Ye(N) {
    return A.state.isMounted && !A.state.isVisible || Rr.isTouch || f && f.type === "focus" ? 0 : Ul(A.props.delay, N ? 0 : 1, Cr.delay);
  }
  __name(Ye, "Ye");
  c(Ye, "getDelay");
  function He(N) {
    N === void 0 && (N = false), R.style.pointerEvents = A.props.interactive && !N ? "" : "none", R.style.zIndex = "" + A.props.zIndex;
  }
  __name(He, "He");
  c(He, "handleStyles");
  function me(N, te, ae) {
    if (ae === void 0 && (ae = true), W.forEach(function(ge) {
      ge[N] && ge[N].apply(ge, te);
    }), ae) {
      var Ae;
      (Ae = A.props)[N].apply(Ae, te);
    }
  }
  __name(me, "me");
  c(me, "invokeHook");
  function et() {
    var N = A.props.aria;
    if (N.content) {
      var te = "aria-" + N.content, ae = R.id, Ae = wi(A.props.triggerTarget || t);
      Ae.forEach(function(ge) {
        var gt = ge.getAttribute(te);
        if (A.state.isVisible)
          ge.setAttribute(te, gt ? gt + " " + ae : ae);
        else {
          var _t = gt && gt.replace(ae, "").trim();
          _t ? ge.setAttribute(te, _t) : ge.removeAttribute(te);
        }
      });
    }
  }
  __name(et, "et");
  c(et, "handleAriaContentAttribute");
  function ot() {
    if (!(ee || !A.props.aria.expanded)) {
      var N = wi(A.props.triggerTarget || t);
      N.forEach(function(te) {
        A.props.interactive ? te.setAttribute("aria-expanded", A.state.isVisible && te === V() ? "true" : "false") : te.removeAttribute("aria-expanded");
      });
    }
  }
  __name(ot, "ot");
  c(ot, "handleAriaExpandedAttribute");
  function or() {
    ce().removeEventListener("mousemove", C), Ja = Ja.filter(function(N) {
      return N !== C;
    });
  }
  __name(or, "or");
  c(or, "cleanupInteractiveMouseListeners");
  function K(N) {
    if (!(Rr.isTouch && (v || N.type === "mousedown"))) {
      var te = N.composedPath && N.composedPath()[0] || N.target;
      if (!(A.props.interactive && Ap(R, te))) {
        if (wi(A.props.triggerTarget || t).some(function(ae) {
          return Ap(ae, te);
        })) {
          if (Rr.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          me("onClickOutside", [A, N]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), b = true, setTimeout(function() {
          b = false;
        }), A.state.isMounted || ar());
      }
    }
  }
  __name(K, "K");
  c(K, "onDocumentPress");
  function gr() {
    v = true;
  }
  __name(gr, "gr");
  c(gr, "onTouchMove");
  function zt() {
    v = false;
  }
  __name(zt, "zt");
  c(zt, "onTouchStart");
  function jt() {
    var N = ce();
    N.addEventListener("mousedown", K, true), N.addEventListener("touchend", K, Yn), N.addEventListener("touchstart", zt, Yn), N.addEventListener("touchmove", gr, Yn);
  }
  __name(jt, "jt");
  c(jt, "addDocumentPress");
  function ar() {
    var N = ce();
    N.removeEventListener("mousedown", K, true), N.removeEventListener("touchend", K, Yn), N.removeEventListener("touchstart", zt, Yn), N.removeEventListener("touchmove", gr, Yn);
  }
  __name(ar, "ar");
  c(ar, "removeDocumentPress");
  function br(N, te) {
    er(N, function() {
      !A.state.isVisible && R.parentNode && R.parentNode.contains(R) && te();
    });
  }
  __name(br, "br");
  c(br, "onTransitionedOut");
  function sr(N, te) {
    er(N, te);
  }
  __name(sr, "sr");
  c(sr, "onTransitionedIn");
  function er(N, te) {
    var ae = Ne().box;
    function Ae(ge) {
      ge.target === ae && (Yl(ae, "remove", Ae), te());
    }
    __name(Ae, "Ae");
    if (c(Ae, "listener"), N === 0)
      return te();
    Yl(ae, "remove", w), Yl(ae, "add", Ae), w = Ae;
  }
  __name(er, "er");
  c(er, "onTransitionEnd");
  function Or(N, te, ae) {
    ae === void 0 && (ae = false);
    var Ae = wi(A.props.triggerTarget || t);
    Ae.forEach(function(ge) {
      ge.addEventListener(N, te, ae), S.push({ node: ge, eventType: N, handler: te, options: ae });
    });
  }
  __name(Or, "Or");
  c(Or, "on");
  function Gr() {
    ne() && (Or("touchstart", Ie, { passive: true }), Or("touchend", gn, { passive: true })), zv(A.props.trigger).forEach(function(N) {
      if (N !== "manual")
        switch (Or(N, Ie), N) {
          case "mouseenter":
            Or("mouseleave", gn);
            break;
          case "focus":
            Or(Fv ? "focusout" : "blur", Rt);
            break;
          case "focusin":
            Or("focusout", Rt);
            break;
        }
    });
  }
  __name(Gr, "Gr");
  c(Gr, "addListeners");
  function vn() {
    S.forEach(function(N) {
      var te = N.node, ae = N.eventType, Ae = N.handler, ge = N.options;
      te.removeEventListener(ae, Ae, ge);
    }), S = [];
  }
  __name(vn, "vn");
  c(vn, "removeListeners");
  function Ie(N) {
    var te, ae = false;
    if (!(!A.state.isEnabled || Lr(N) || b)) {
      var Ae = ((te = f) == null ? void 0 : te.type) === "focus";
      f = N, O = N.currentTarget, ot(), !A.state.isVisible && Dv(N) && Ja.forEach(function(ge) {
        return ge(N);
      }), N.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || h) && A.props.hideOnClick !== false && A.state.isVisible ? ae = true : Mr(N), N.type === "click" && (h = !ae), ae && !Ae && Ht(N);
    }
  }
  __name(Ie, "Ie");
  c(Ie, "onTrigger");
  function mn(N) {
    var te = N.target, ae = V().contains(te) || R.contains(te);
    if (!(N.type === "mousemove" && ae)) {
      var Ae = Ct().concat(R).map(function(ge) {
        var gt, _t = ge._tippy, Tt = (gt = _t.popperInstance) == null ? void 0 : gt.state;
        return Tt ? { popperRect: ge.getBoundingClientRect(), popperState: Tt, props: e } : null;
      }).filter(Boolean);
      jv(Ae, N) && (or(), Ht(N));
    }
  }
  __name(mn, "mn");
  c(mn, "onMouseMove");
  function gn(N) {
    var te = Lr(N) || A.props.trigger.indexOf("click") >= 0 && h;
    if (!te) {
      if (A.props.interactive) {
        A.hideWithInteractivity(N);
        return;
      }
      Ht(N);
    }
  }
  __name(gn, "gn");
  c(gn, "onMouseLeave");
  function Rt(N) {
    A.props.trigger.indexOf("focusin") < 0 && N.target !== V() || A.props.interactive && N.relatedTarget && R.contains(N.relatedTarget) || Ht(N);
  }
  __name(Rt, "Rt");
  c(Rt, "onBlurOrFocusOut");
  function Lr(N) {
    return Rr.isTouch ? ne() !== N.type.indexOf("touch") >= 0 : false;
  }
  __name(Lr, "Lr");
  c(Lr, "isEventListenerStopped");
  function Zn() {
    Kr();
    var N = A.props, te = N.popperOptions, ae = N.placement, Ae = N.offset, ge = N.getReferenceClientRect, gt = N.moveTransition, _t = de() ? Ql(R).arrow : null, Tt = ge ? { getBoundingClientRect: ge, contextElement: ge.contextElement || V() } : t, ko = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: c(function(Ot) {
      var Mt = Ot.state;
      if (de()) {
        var Hr = Ne(), Qn = Hr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Jn) {
          Jn === "placement" ? Qn.setAttribute("data-placement", Mt.placement) : Mt.attributes.popper["data-popper-" + Jn] ? Qn.setAttribute("data-" + Jn, "") : Qn.removeAttribute("data-" + Jn);
        }), Mt.attributes.popper = {};
      }
    }, "fn") }, lr = [{ name: "offset", options: { offset: Ae } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !gt } }, ko];
    de() && _t && lr.push({ name: "arrow", options: { element: _t, padding: 3 } }), lr.push.apply(lr, (te == null ? void 0 : te.modifiers) || []), A.popperInstance = Wl(Tt, R, Object.assign({}, te, { placement: ae, onFirstUpdate: y, modifiers: lr }));
  }
  __name(Zn, "Zn");
  c(Zn, "createPopperInstance");
  function Kr() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(Kr, "Kr");
  c(Kr, "destroyPopperInstance");
  function yr() {
    var N = A.props.appendTo, te, ae = V();
    A.props.interactive && N === Gp || N === "parent" ? te = ae.parentNode : te = Lp(N, [ae]), te.contains(R) || te.appendChild(R), A.state.isMounted = true, Zn();
  }
  __name(yr, "yr");
  c(yr, "mount");
  function Ct() {
    return Ka(R.querySelectorAll("[data-tippy-root]"));
  }
  __name(Ct, "Ct");
  c(Ct, "getNestedPopperTree");
  function Mr(N) {
    A.clearDelayTimeouts(), N && me("onTrigger", [A, N]), jt();
    var te = Ye(true), ae = ie(), Ae = ae[0], ge = ae[1];
    Rr.isTouch && Ae === "hold" && ge && (te = ge), te ? n = setTimeout(function() {
      A.show();
    }, te) : A.show();
  }
  __name(Mr, "Mr");
  c(Mr, "scheduleShow");
  function Ht(N) {
    if (A.clearDelayTimeouts(), me("onUntrigger", [A, N]), !A.state.isVisible) {
      ar();
      return;
    }
    if (!(A.props.trigger.indexOf("mouseenter") >= 0 && A.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(N.type) >= 0 && h)) {
      var te = Ye(false);
      te ? a = setTimeout(function() {
        A.state.isVisible && A.hide();
      }, te) : u = requestAnimationFrame(function() {
        A.hide();
      });
    }
  }
  __name(Ht, "Ht");
  c(Ht, "scheduleHide");
  function bn() {
    A.state.isEnabled = true;
  }
  __name(bn, "bn");
  c(bn, "enable");
  function jr() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(jr, "jr");
  c(jr, "disable");
  function yn() {
    clearTimeout(n), clearTimeout(a), cancelAnimationFrame(u);
  }
  __name(yn, "yn");
  c(yn, "clearDelayTimeouts");
  function en(N) {
    if (!A.state.isDestroyed) {
      me("onBeforeUpdate", [A, N]), vn();
      var te = A.props, ae = zp(t, Object.assign({}, te, Mp(N), { ignoreAttributes: true }));
      A.props = ae, Gr(), te.interactiveDebounce !== ae.interactiveDebounce && (or(), C = Tp(mn, ae.interactiveDebounce)), te.triggerTarget && !ae.triggerTarget ? wi(te.triggerTarget).forEach(function(Ae) {
        Ae.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && t.removeAttribute("aria-expanded"), ot(), He(), j && j(te, ae), A.popperInstance && (Zn(), Ct().forEach(function(Ae) {
        requestAnimationFrame(Ae._tippy.popperInstance.forceUpdate);
      })), me("onAfterUpdate", [A, N]);
    }
  }
  __name(en, "en");
  c(en, "setProps");
  function wn(N) {
    A.setProps({ content: N });
  }
  __name(wn, "wn");
  c(wn, "setContent");
  function Oi() {
    var N = A.state.isVisible, te = A.state.isDestroyed, ae = !A.state.isEnabled, Ae = Rr.isTouch && !A.props.touch, ge = Ul(A.props.duration, 0, Cr.duration);
    if (!(N || te || ae || Ae) && !V().hasAttribute("disabled") && (me("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, de() && (R.style.visibility = "visible"), He(), jt(), A.state.isMounted || (R.style.transition = "none"), de()) {
        var gt = Ne(), _t = gt.box, Tt = gt.content;
        Vl([_t, Tt], 0);
      }
      y = c(function() {
        var lr;
        if (!(!A.state.isVisible || p)) {
          if (p = true, R.offsetHeight, R.style.transition = A.props.moveTransition, de() && A.props.animation) {
            var Ii = Ne(), Ot = Ii.box, Mt = Ii.content;
            Vl([Ot, Mt], ge), Ip([Ot, Mt], "visible");
          }
          et(), ot(), Op(Xl, A), (lr = A.popperInstance) == null || lr.forceUpdate(), me("onMount", [A]), A.props.animation && de() && sr(ge, function() {
            A.state.isShown = true, me("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), yr();
    }
  }
  __name(Oi, "Oi");
  c(Oi, "show");
  function Mi() {
    var N = !A.state.isVisible, te = A.state.isDestroyed, ae = !A.state.isEnabled, Ae = Ul(A.props.duration, 1, Cr.duration);
    if (!(N || te || ae) && (me("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, p = false, h = false, de() && (R.style.visibility = "hidden"), or(), ar(), He(true), de()) {
        var ge = Ne(), gt = ge.box, _t = ge.content;
        A.props.animation && (Vl([gt, _t], Ae), Ip([gt, _t], "hidden"));
      }
      et(), ot(), A.props.animation ? de() && br(Ae, A.unmount) : A.unmount();
    }
  }
  __name(Mi, "Mi");
  c(Mi, "hide");
  function Ro(N) {
    ce().addEventListener("mousemove", C), Op(Ja, C), C(N);
  }
  __name(Ro, "Ro");
  c(Ro, "hideWithInteractivity");
  function _o() {
    A.state.isVisible && A.hide(), A.state.isMounted && (Kr(), Ct().forEach(function(N) {
      N._tippy.unmount();
    }), R.parentNode && R.parentNode.removeChild(R), Xl = Xl.filter(function(N) {
      return N !== A;
    }), A.state.isMounted = false, me("onHidden", [A]));
  }
  __name(_o, "_o");
  c(_o, "unmount");
  function vs() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), vn(), delete t._tippy, A.state.isDestroyed = true, me("onDestroy", [A]));
  }
  __name(vs, "vs");
  c(vs, "destroy");
}
__name(Jv, "Jv");
c(Jv, "createTippy");
function wo(t, r) {
  r === void 0 && (r = {});
  var e = Cr.plugins.concat(r.plugins || []);
  $v();
  var n = Object.assign({}, r, { plugins: e }), a = Gv(t);
  if (false)
    var u, h;
  var b = a.reduce(function(v, p) {
    var f = p && Jv(p, n);
    return f && v.push(f), v;
  }, []);
  return es(t) ? b[0] : b;
}
__name(wo, "wo");
c(wo, "tippy");
wo.defaultProps = Cr;
wo.setDefaultProps = Yv;
wo.currentInput = Rr;
var oS = Object.assign({}, fo, { effect: c(function(r) {
  var e = r.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
}, "effect") });
wo.setDefaultProps({ render: Bp });
var It = wo;
var Kl = c((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
function we(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = ct({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let a = this.helpContent;
        a !== null && (this.popup = It(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(u) {
          u.setContent(a);
        } }), this.addEventListener("mouseenter", this.showHelp));
      }, show: () => {
        this.popup.show();
      }, enable: () => {
        this.popup.enable(), this.help = true;
      }, disable: () => {
        var a;
        (a = this.popup) == null || a.disable(), this.help = false;
      }, destroy: () => {
        var a;
        (a = this.popup) == null || a.destroy();
      } } });
      this.helpableService = tt(this.helpableMachine).onTransition((a) => {
        this.debugHelpable && console.log(`helpable: ${Xe(a.value)}`);
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
      let a;
      this.helpId !== "" ? a = this.helpId : a = `${this.tagName.toLowerCase()}-help`;
      let u = document.getElementById(a);
      return u === null ? null : u.content.cloneNode(true);
    }
  }
  __name(r, "r");
  return c(r, "HelpableMixinClass"), M([k], r.prototype, "help", 2), M([k], r.prototype, "helpId", 2), M([k], r.prototype, "debugHelpable", 2), r;
}
__name(we, "we");
c(we, "HelpableMixin");
function ve(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(r, "r");
  return c(r, "HoverableMixinClass"), M([k], r.prototype, "hoverable", 2), r;
}
__name(ve, "ve");
c(ve, "HoverableMixin");
var ts = /* @__PURE__ */ new Map();
function rs(t) {
  if (ts.has(t))
    return ts.get(t);
  let r = t.length, e = 0, n = 0, a = 0, u = [];
  for (let h = 0; h < r; h += 1) {
    let b = t[h], v = t[h + 1], p = t[h - 1];
    b === "{" && v === "{" && p !== "\\" ? (a += 1, a === 1 && (n = h), h += 1) : b === "}" && v === "}" && p !== "\\" && a && (a -= 1, a === 0 && (n > e && (u.push(Object.freeze({ type: "string", start: e, end: n, value: t.slice(e, n) })), e = n), u.push(Object.freeze({ type: "part", start: n, end: h + 2, value: t.slice(e + 2, h).trim() })), h += 1, e = h + 1));
  }
  return e < r && u.push(Object.freeze({ type: "string", start: e, end: r, value: t.slice(e, r) })), ts.set(t, Object.freeze(u)), ts.get(t);
}
__name(rs, "rs");
c(rs, "parse");
var Xn = /* @__PURE__ */ new WeakMap();
var $p = /* @__PURE__ */ new WeakMap();
var _r = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.expression = e, Xn.set(this, r), r.updateParent("");
  }
  get attributeName() {
    return Xn.get(this).attr.name;
  }
  get attributeNamespace() {
    return Xn.get(this).attr.namespaceURI;
  }
  get value() {
    return $p.get(this);
  }
  set value(r) {
    $p.set(this, r || ""), Xn.get(this).updateParent(r);
  }
  get element() {
    return Xn.get(this).element;
  }
  get booleanValue() {
    return Xn.get(this).booleanValue;
  }
  set booleanValue(r) {
    Xn.get(this).booleanValue = r;
  }
}, "_r");
c(_r, "AttributeTemplatePart");
var xi = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.element = r, this.attr = e, this.partList = [];
  }
  get booleanValue() {
    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name);
  }
  set booleanValue(r) {
    if (this.partList.length !== 1)
      throw new DOMException("Operation not supported", "NotSupportedError");
    this.partList[0].value = r ? "" : null;
  }
  append(r) {
    this.partList.push(r);
  }
  updateParent(r) {
    if (this.partList.length === 1 && r === null)
      this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
    else {
      let e = this.partList.map((n) => typeof n == "string" ? n : n.value).join("");
      this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, e);
    }
  }
}, "xi");
c(xi, "AttributeValueSetter");
var fn = /* @__PURE__ */ new WeakMap();
var At = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.expression = e, fn.set(this, [r]), r.textContent = "";
  }
  get value() {
    return fn.get(this).map((r) => r.textContent).join("");
  }
  set value(r) {
    this.replace(r);
  }
  get previousSibling() {
    return fn.get(this)[0].previousSibling;
  }
  get nextSibling() {
    return fn.get(this)[fn.get(this).length - 1].nextSibling;
  }
  replace(...r) {
    let e = r.map((n) => typeof n == "string" ? new Text(n) : n);
    e.length || e.push(new Text("")), fn.get(this)[0].before(...e);
    for (let n of fn.get(this))
      n.remove();
    fn.set(this, e);
  }
}, "At");
c(At, "NodeTemplatePart");
function xo(t) {
  return { processCallback(r, e, n) {
    var a;
    if (!(typeof n != "object" || !n)) {
      for (let u of e)
        if (u.expression in n) {
          let h = (a = n[u.expression]) !== null && a !== void 0 ? a : "";
          t(u, h);
        }
    }
  } };
}
__name(xo, "xo");
c(xo, "createProcessor");
function Eo(t, r) {
  t.value = String(r);
}
__name(Eo, "Eo");
c(Eo, "processPropertyIdentity");
function ns(t, r) {
  return typeof r == "boolean" && t instanceof _r && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = r, true) : false;
}
__name(ns, "ns");
c(ns, "processBooleanAttribute");
var eu = xo(Eo);
var Kv = xo((t, r) => {
  ns(t, r) || Eo(t, r);
});
function* em(t) {
  let r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = r.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let n = 0; n < e.attributes.length; n += 1) {
        let a = e.attributes.item(n);
        if (a && a.value.includes("{{")) {
          let u = new xi(e, a);
          for (let h of rs(a.value))
            if (h.type === "string")
              u.append(h.value);
            else {
              let b = new _r(u, h.value);
              u.append(b), yield b;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{")) {
      let n = rs(e.textContent);
      for (let a = 0; a < n.length; a += 1) {
        let u = n[a];
        u.end < e.textContent.length && e.splitText(u.end), u.type === "part" && (yield new At(e, u.value));
        break;
      }
    }
}
__name(em, "em");
c(em, "collectParts");
var is = /* @__PURE__ */ new WeakMap();
var os = /* @__PURE__ */ new WeakMap();
var Yr = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(r, e, n = eu) {
    var a, u;
    super(), Object.getPrototypeOf(this) !== Yr.prototype && Object.setPrototypeOf(this, Yr.prototype), this.appendChild(r.content.cloneNode(true)), os.set(this, Array.from(em(this))), is.set(this, n), (u = (a = is.get(this)).createCallback) === null || u === void 0 || u.call(a, this, os.get(this), e), is.get(this).processCallback(this, os.get(this), e);
  }
  update(r) {
    is.get(this).processCallback(this, os.get(this), r);
  }
}, "Yr");
c(Yr, "TemplateInstance");
var tu = /* @__PURE__ */ new WeakMap();
var qp = /* @__PURE__ */ new WeakMap();
var Fp = /* @__PURE__ */ new WeakMap();
var Pt = /* @__PURE__ */ __name(class {
  constructor(r, e, n) {
    this.strings = r, this.values = e, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    Pt.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, e;
    if (tu.has(this.strings))
      return tu.get(this.strings);
    {
      let n = document.createElement("template"), a = this.strings.length - 1, u = this.strings.reduce((b, v, p) => b + v + (p < a ? `{{ ${p} }}` : ""), ""), h = (e = (r = Pt.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(u)) !== null && e !== void 0 ? e : u;
      return n.innerHTML = h, tu.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let e = this.template;
    if (qp.get(r) !== e) {
      qp.set(r, e);
      let n = new Yr(e, this.values, this.processor);
      Fp.set(r, n), r instanceof At ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    Fp.get(r).update(this.values);
  }
}, "Pt");
c(Pt, "TemplateResult");
Pt.cspTrustedTypesPolicy = null;
function Z(t, r) {
  t.renderInto(r);
}
__name(Z, "Z");
c(Z, "render");
var Wp = /* @__PURE__ */ new WeakSet();
function Up(t) {
  return Wp.has(t);
}
__name(Up, "Up");
c(Up, "isDirective");
function Vp(t, r) {
  return Up(r) ? (r(t), true) : false;
}
__name(Vp, "Vp");
c(Vp, "processDirective");
function So(t) {
  return (...r) => {
    let e = t(...r);
    return Wp.add(e), e;
  };
}
__name(So, "So");
c(So, "directive");
var Co = /* @__PURE__ */ new WeakMap();
var Ei = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.element = r, this.type = e, this.element.addEventListener(this.type, this), Co.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), Co.get(this.element).delete(this.type));
  }
  static for(r) {
    Co.has(r.element) || Co.set(r.element, /* @__PURE__ */ new Map());
    let e = r.attributeName.slice(2), n = Co.get(r.element);
    return n.has(e) ? n.get(e) : new Ei(r.element, e);
  }
}, "Ei");
c(Ei, "EventHandler");
function Yp(t, r) {
  return t instanceof _r && t.attributeName.startsWith("on") ? (Ei.for(t).set(r), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(Yp, "Yp");
c(Yp, "processEvent");
function tm(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(tm, "tm");
c(tm, "isIterable");
function Xp(t, r) {
  if (!tm(r))
    return false;
  if (t instanceof At) {
    let e = [];
    for (let n of r)
      if (n instanceof Pt) {
        let a = document.createDocumentFragment();
        n.renderInto(a), e.push(...a.childNodes);
      } else
        n instanceof DocumentFragment ? e.push(...n.childNodes) : e.push(String(n));
    return e.length && t.replace(...e), true;
  } else
    return t.value = Array.from(r).join(" "), true;
}
__name(Xp, "Xp");
c(Xp, "processIterable");
function Zp(t, r) {
  return r instanceof DocumentFragment && t instanceof At ? (r.childNodes.length && t.replace(...r.childNodes), true) : false;
}
__name(Zp, "Zp");
c(Zp, "processDocumentFragment");
function Qp(t, r) {
  return r instanceof Pt && t instanceof At ? (r.renderInto(t), true) : false;
}
__name(Qp, "Qp");
c(Qp, "processSubTemplate");
function as(t, r) {
  Vp(t, r) || ns(t, r) || Yp(t, r) || Qp(t, r) || Zp(t, r) || Xp(t, r) || Eo(t, r);
}
__name(as, "as");
c(as, "processPart");
var ru = xo(as);
function F(t, ...r) {
  return new Pt(t, r, ru);
}
__name(F, "F");
c(F, "html");
var nu = /* @__PURE__ */ new WeakMap();
var rm = So((...t) => (r) => {
  nu.has(r) || nu.set(r, { i: t.length });
  let e = nu.get(r);
  for (let n = 0; n < t.length; n += 1)
    t[n] instanceof Promise ? Promise.resolve(t[n]).then((a) => {
      n < e.i && (e.i = n, as(r, a));
    }) : n <= e.i && (e.i = n, as(r, t[n]));
});
var nm = So((t) => (r) => {
  var e, n;
  if (!(r instanceof At))
    return;
  let a = document.createElement("template"), u = (n = (e = Pt.cspTrustedTypesPolicy) === null || e === void 0 ? void 0 : e.createHTML(t)) !== null && n !== void 0 ? n : t;
  a.innerHTML = u;
  let h = document.importNode(a.content, true);
  r.replace(...h.childNodes);
});
function Oe(t) {
  class r extends t {
    iconHtml(n) {
      return F`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(n)}</div>`;
    }
    iconSvg(n) {
      return F([n]);
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
  __name(r, "r");
  return c(r, "IconableMixinClass"), r;
}
__name(Oe, "Oe");
c(Oe, "IconableMixin");
var Xr = c((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
function nt(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(r, "r");
  return c(r, "IfableMixinClass"), M([k], r.prototype, "if", 2), r;
}
__name(nt, "nt");
c(nt, "IfableMixin");
var ss = c((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
function xe(t) {
  class r extends t {
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = It(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var a, u, h, b;
        (a = this.ifTooltip) == null || a.hide(), (u = this.angleTooltip) == null || u.hide(), (h = this.flagTooltip) == null || h.hide(), (b = this.deleteTooltip) == null || b.hide();
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
      let a = document.getElementById("operation-menu");
      if (a === null || a.content === void 0)
        return null;
      let u = a.content.cloneNode(true), h = document.createDocumentFragment();
      return Z(F`${u}`, h), h;
    }
    initMenuItems(a) {
      if (Xr(a.reference)) {
        let h = a.popper.querySelector("button[data-operation-menu-if]");
        B.notNull(h), h.disabled = false, this.ifTooltip = h._tippy, this.ifTooltip === void 0 && (this.ifTooltip = It(h, { animation: false, content: "Set `if' Conditional" }), h.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (An(a.reference)) {
        let h = a.popper.querySelector("button[data-operation-menu-angle]");
        B.notNull(h), h.disabled = false, this.angleTooltip = h._tippy, this.angleTooltip === void 0 && (this.angleTooltip = It(h, { animation: false, content: "Change Angle" }), h.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (jn(a.reference)) {
        let h = a.popper.querySelector("button[data-operation-menu-flag]");
        B.notNull(h), h.disabled = false, this.flagTooltip = h._tippy, this.flagTooltip === void 0 && (this.flagTooltip = It(h, { animation: false, content: "Set Condifitonal Flag" }), h.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let u = a.popper.querySelector("[data-operation-menu-delete]");
      B.notNull(u), this.deleteTooltip = u._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = It(u, { animation: false, content: "Delete" })), u.addEventListener("mousedown", this.destroyMenu.bind(this)), u.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
  __name(r, "r");
  return c(r, "MenuableMixinClass"), r;
}
__name(xe, "xe");
c(xe, "MenuableMixin");
var ls = In(co(), 1);
var ir = c((t) => t != null && typeof t.resizeable == "boolean", "isResizeable");
function us(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = ct({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        ue("resizeable:init", {}, this);
      }, setInteract: (a, u) => {
        B.need(u.type === "SET_INTERACT", "event type must be SET_INTERACT"), B.notNull(this.resizeHandle);
        let h = (0, ls.default)(this.resizeHandle);
        h.styleCursor(false), h.on("down", this.grabResizeHandle.bind(this)), h.on("up", this.releaseResizeHandle.bind(this)), h.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (a, u) => {
        B.need(u.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, ue("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (a, u) => {
        B.need(u.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, ue("resizeable:release-resize-handle", {}, this);
      }, startResizing: (a, u) => {
        B.need(u.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (a, u) => {
        B.need(u.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), ue("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), ue("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = tt(this.resizeableMachine).onTransition((a) => {
        this.debugResizeable && console.log(`resizeable: ${Xe(a.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(a) {
      a ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(a) {
      (0, ls.default)(this.resizeHandle).draggable({ modifiers: [ls.default.modifiers.snap({ targets: a, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(a) {
      let u = a.modifiers[0];
      if (!u.inRange)
        return;
      let h = u.target.source;
      ue("resizeable:resize-handle-in-snap-range", { snapTargetInfo: h }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
    }
    grabResizeHandle(a) {
      if (a.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: grabResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "GRAB_RESIZE_HANDLE", x: a.offsetX, y: a.offsetY });
    }
    releaseResizeHandle(a) {
      if (a.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: releaseResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "RELEASE_RESIZE_HANDLE" });
    }
    startResizing() {
      this.resizeableService.send({ type: "START_RESIZING" });
    }
    moveResizeHandle(a) {
      let u = this.resizeHandleX + a.dx, h = this.resizeHandleY + a.dy;
      this.moveResizeHandleTo(u, h);
    }
    moveResizeHandleTo(a, u) {
      this.resizeHandleX = a, this.resizeHandleY = u, this.resizeHandle.style.transform = `translate(${a}px, ${u}px)`;
    }
    endResizing() {
      this.resizeableService.send({ type: "END_RESIZING" });
    }
  }
  __name(r, "r");
  return c(r, "ResizeableMixinClass"), M([k], r.prototype, "span", 2), M([k], r.prototype, "resizeHandleX", 2), M([k], r.prototype, "resizeHandleY", 2), M([k], r.prototype, "debugResizeable", 2), M([k], r.prototype, "resizing", 2), M([Me], r.prototype, "resizeHandle", 2), r;
}
__name(us, "us");
c(us, "ResizeableMixin");
var Jp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var fr = /* @__PURE__ */ __name(class extends xe(we(ye(ke(Oe(be(ve(HTMLElement))))))) {
  get operationType() {
    return Zs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(Jp)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Zs}"`;
  }
}, "fr");
c(fr, "AntiControlGateElement"), fr = M([Q], fr);
function Kp(t) {
  return /^-?\d+$/.test(t);
}
__name(Kp, "Kp");
c(Kp, "isNumeric");
function Et(t, r = 4) {
  return (t >= 0 ? "+" : "") + t.toFixed(r);
}
__name(Et, "Et");
c(Et, "forceSigned");
var Ke = /* @__PURE__ */ __name(class extends xe(we(ye(be(ve(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Qs;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (B.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this.popup;
    e && e.destroy();
    let n = this.blochInspectorPopupContent();
    this.popup = It(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(a) {
      a.setContent(n);
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
            <span class="font-mono font-bold">${Et(this.d)}</span>, ϕ:
            <span class="font-mono font-bold">${Et(this.phi, 2)}</span>, θ:
            <span class="font-mono font-bold">${Et(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="font-mono font-bold">${Et(this.x)}</span>, y:
            <span class="font-mono font-bold">${Et(this.y)}</span>, z:
            <span class="font-mono font-bold">${Et(this.z)}</span>
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
  attributeChangedCallback(e, n, a) {
    this.body && n !== a && a !== null && (e === "data-x" && (this.x = parseFloat(a)), e === "data-y" && (this.y = parseFloat(a)), e === "data-z" && (this.z = parseFloat(a)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = c((a) => F`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${a}deg)"></div>`, "vectorLineRect"), n = c((a, u) => F`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${u}(${a}deg)"
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
                  ${n(0, "Y")} ${n(20, "Y")} ${n(40, "Y")}
                  ${n(60, "Y")} ${n(80, "Y")} ${n(100, "Y")}
                  ${n(120, "Y")} ${n(140, "Y")} ${n(160, "Y")}
                  ${n(90, "X")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Qs}"`;
  }
  updateBlochVector() {
    var n;
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`), (n = this.popup) == null || n.setContent(this.blochInspectorPopupContent());
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
    return 180 * Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x))) / Math.PI;
  }
}, "Ke");
c(Ke, "BlochDisplayElement"), M([Me], Ke.prototype, "body", 2), M([Me], Ke.prototype, "vectorLine", 2), M([Me], Ke.prototype, "vectorEnd", 2), M([Me], Ke.prototype, "vector", 2), M([lt], Ke.prototype, "vectorEndCircles", 2), M([k], Ke.prototype, "x", 2), M([k], Ke.prototype, "y", 2), M([k], Ke.prototype, "z", 2), Ke = M([Q], Ke);
var ed = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Nt = /* @__PURE__ */ __name(class extends xe(we(ye(ke(Oe(be(ve(HTMLElement))))))) {
  get operationType() {
    return Js;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(ed)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Js}"`;
  }
}, "Nt");
c(Nt, "ControlGateElement"), Nt = M([Q], Nt);
var td = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var $t = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(ye(ke(Oe(be(ve(HTMLElement))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(td)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${va}<${this.if}"` : `"${va}"`;
  }
}, "$t");
c($t, "HGateElement"), $t = M([Q], $t);
var rd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var qt = /* @__PURE__ */ __name(class extends xe(we(ip(ye(Oe(be(ve(HTMLElement))))))) {
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
    Z(F`<div part="body">
          ${this.iconHtml(rd)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ma}"` : `"${ma}>${this.flag}"`;
  }
}, "qt");
c(qt, "MeasurementGateElement"), M([k], qt.prototype, "value", 2), qt = M([Q], qt);
var nd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ft = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(un(ye(ke(Oe(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(nd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ga}"` : `"${ga}(${this.angle.replace("/", "_")})"`;
  }
}, "Ft");
c(Ft, "PhaseGateElement"), Ft = M([Q], Ft);
var cs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var id = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var hr = /* @__PURE__ */ __name(class extends xe(we(us(ye(Oe(be(ve(HTMLElement))))))) {
  get operationType() {
    return Ks;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(F`<div part="layout">
          <div part="body">${this.iconHtml(id)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(cs)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ks}${this.span}"`;
  }
}, "hr");
c(hr, "QftDaggerGateElement"), hr = M([Q], hr);
var od = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var vr = /* @__PURE__ */ __name(class extends xe(we(us(ye(Oe(be(ve(HTMLElement))))))) {
  get operationType() {
    return el;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(F`<div part="layout">
          <div part="body">${this.iconHtml(od)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(cs)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${el}${this.span}"`;
  }
}, "vr");
c(vr, "QftGateElement"), vr = M([Q], vr);
var ad = `<svg
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
var Wt = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(ye(ke(Oe(be(ve(HTMLElement))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(ad)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ba}<${this.if}"` : `"${ba}"`;
  }
}, "Wt");
c(Wt, "RnotGateElement"), Wt = M([Q], Wt);
var sd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ut = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(un(ye(ke(Oe(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(sd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ya}"` : `"${ya}(${this.angle.replace("/", "_")})"`;
  }
}, "Ut");
c(Ut, "RxGateElement"), Ut = M([Q], Ut);
var ld = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(un(ye(ke(Oe(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(ld)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${wa}"` : `"${wa}(${this.angle.replace("/", "_")})"`;
  }
}, "Vt");
c(Vt, "RyGateElement"), Vt = M([Q], Vt);
var ud = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(un(ye(ke(Oe(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(ud)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${xa}"` : `"${xa}(${this.angle.replace("/", "_")})"`;
  }
}, "Yt");
c(Yt, "RzGateElement"), Yt = M([Q], Yt);
var cd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var mr = /* @__PURE__ */ __name(class extends xe(we(ye(ke(Oe(be(ve(HTMLElement))))))) {
  get operationType() {
    return tl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(cd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${tl}"`;
  }
}, "mr");
c(mr, "SpacerGateElement"), mr = M([Q], mr);
var pd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Xt = /* @__PURE__ */ __name(class extends xe(we(Ue(ye(ke(Oe(be(ve(HTMLElement)))))))) {
  get operationType() {
    return rl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(pd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${rl}"`;
  }
}, "Xt");
c(Xt, "SwapGateElement"), Xt = M([Q], Xt);
var dd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(ye(ke(Oe(be(ve(HTMLElement))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(dd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ea}<${this.if}"` : `"${Ea}"`;
  }
}, "Zt");
c(Zt, "TGateElement"), Zt = M([Q], Zt);
var fd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Gt = /* @__PURE__ */ __name(class extends xe(we(ye(Oe(be(ve(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return fc;
      case "1":
        return hc;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">
          ${this.iconHtml(fd)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Gt");
c(Gt, "WriteGateElement"), M([k], Gt.prototype, "value", 2), Gt = M([Q], Gt);
var hd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(ye(ke(Oe(be(ve(HTMLElement))))))))) {
  get operationType() {
    return Sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(hd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Sa}<${this.if}"` : `"${Sa}"`;
  }
}, "Qt");
c(Qt, "XGateElement"), Qt = M([Q], Qt);
var vd = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Jt = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(ye(ke(Oe(be(ve(HTMLElement))))))))) {
  get operationType() {
    return Ca;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(vd)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ca}<${this.if}"` : `"${Ca}"`;
  }
}, "Jt");
c(Jt, "YGateElement"), Jt = M([Q], Jt);
var md = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends xe(we(nt(Ue(ye(ke(Oe(be(ve(HTMLElement))))))))) {
  get operationType() {
    return Ta;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(F`<div part="body">${this.iconHtml(md)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ta}<${this.if}"` : `"${Ta}"`;
  }
}, "Kt");
c(Kt, "ZGateElement"), Kt = M([Q], Kt);
var Fe = c((t) => t instanceof fr || t instanceof Ke || t instanceof Nt || t instanceof $t || t instanceof qt || t instanceof Ft || t instanceof hr || t instanceof vr || t instanceof Wt || t instanceof Ut || t instanceof Vt || t instanceof Yt || t instanceof mr || t instanceof Xt || t instanceof Zt || t instanceof Gt || t instanceof Qt || t instanceof Jt || t instanceof Kt, "isOperation");
var gd = c((t) => t != null && t instanceof $t, "isHGateElement");
var bd = c((t) => t != null && t instanceof Qt, "isXGateElement");
var yd = c((t) => t != null && t instanceof Jt, "isYGateElement");
var wd = c((t) => t != null && t instanceof Kt, "isZGateElement");
var To = c((t) => t != null && t instanceof Ft, "isPhaseGateElement");
var xd = c((t) => t != null && t instanceof Zt, "isTGateElement");
var Ed = c((t) => t != null && t instanceof Wt, "isRnotGateElement");
var ps = c((t) => t != null && t instanceof Ut, "isRxGateElement");
var ds = c((t) => t != null && t instanceof Vt, "isRyGateElement");
var fs = c((t) => t != null && t instanceof Yt, "isRzGateElement");
var $M = c((t) => t != null && t instanceof mr, "isSpacerGateElement");
var Sd = c((t) => t != null && t instanceof Xt, "isSwapGateElement");
var iu = c((t) => t != null && t instanceof Nt, "isControlGateElement");
var ou = c((t) => t != null && t instanceof fr, "isAntiControlGateElement");
var Cd = c((t) => t != null && t instanceof Ke, "isBlochDisplayElement");
var qM = c((t) => t != null && t instanceof Gt, "isWriteGateElement");
var Td = c((t) => t != null && t instanceof qt, "isMeasurementGateElement");
var Oo = In(co(), 1);
var au = c((t) => t !== null && t instanceof Tr, "isAngleSliderElement");
var Tr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = ct({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new st("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, n) => {
      n.type === "SET_ANGLE" && (this.denominator = Wi(this.angle));
    }, setAngleInRadian: (e, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, a] = this.findSnapAngle(this.radian);
      this.angle = a;
    }, setRadianInAngle: (e, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [a] = this.findSnapAngle(sc(this.angle));
      this.radian = a;
    }, updateSnapAngles: () => {
      this.updateSnapAngles();
    }, updateHandlePosition: () => {
      this.left = (this.radian + 2 * Math.PI) / (4 * Math.PI);
    }, dispatchChangeEvent: () => {
      this.dispatchEvent(new Event("angle-slider-change", { bubbles: true }));
    }, dispatchUpdateEvent: () => {
      this.dispatchEvent(new Event("angle-slider-update", { bubbles: true }));
    } } });
    this.angleSliderService = tt(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Xe(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, n, a) {
    n !== a && a !== null && (e === "data-angle" && a !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, Oo.default)(this).unset();
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
    (0, Oo.default)(this).draggable({ origin: "self", modifiers: [Oo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let n = Oo.default.getElementRect(e.target).width, a = e.pageX / n;
    this.left = a;
    let u = this.proportionToRadian(a);
    this.setAttribute("data-radian", u.toString());
    let [, h] = this.findSnapAngle(u);
    this.angle !== h && (this.angle = h);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, n = 2 * this.denominator, a = new Array(n - e + 1).fill(null).map((u, h) => h + e);
    this.snapAngles = {};
    for (let u of a)
      this.denominator === 1 ? u === 0 ? this.snapAngles[0] = "0" : u === 1 ? this.snapAngles[Math.PI] = "\u03C0" : u === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[u * Math.PI] = `${u}\u03C0` : u === 0 ? this.snapAngles[0] = "0" : u === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : u === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[u * Math.PI / this.denominator] = `${u}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let n = null, a = null, u = null;
    for (let h in this.snapAngles) {
      let b = Math.abs(parseFloat(h) - e);
      (n === null || b < n) && (n = b, a = parseFloat(h), u = this.snapAngles[h]);
    }
    return B.notNull(a), B.notNull(u), [a, u];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Tr");
c(Tr, "AngleSliderElement"), M([k], Tr.prototype, "angle", 2), M([k], Tr.prototype, "radian", 2), M([k], Tr.prototype, "denominator", 2), M([k], Tr.prototype, "disabled", 2), M([k], Tr.prototype, "debug", 2), Tr = M([Q], Tr);
var Si = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let n = e.currentTarget;
    B.notNull(n);
    for (let a of this.buttons)
      a.removeAttribute("data-active");
    n.setAttribute("data-active", "");
  }
}, "Si");
c(Si, "ButtonGroupElement"), M([lt], Si.prototype, "buttons", 2), Si = M([Q], Si);
var Ci = In(Md(), 1);
var it = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let n = this.mobile !== null && this.mobile !== e.matches;
    this.mobile = e.matches, n && (this.mobile || this.style.removeProperty("top"), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.drawQubitCircles());
  }
  startBasicCircleNotationMode() {
    this.colorPhase = false;
  }
  startColorPhaseMode() {
    this.colorPhase = true;
  }
  attributeChangedCallback(e, n, a) {
    n !== a && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (B.notNull(a), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new st("unsupported qubit count", this.qubitCount);
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
          throw new st("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let n = e.getAttribute("data-ket");
      return B.notNull(n), parseInt(n);
    }), B.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    Ci.default.mutate(() => {
      for (let n of this.qubitCircles) {
        let a = n.getAttribute("data-ket");
        B.notNull(a);
        let u = parseInt(a), h = e[u];
        if (h === void 0)
          continue;
        let b = Math.floor(h.abs() * 1e5) / 1e5, v = h.phase() / Math.PI * 180;
        n.setAttribute("data-amplitude-real", h.real.toString()), n.setAttribute("data-amplitude-imag", h.imag.toString()), b === 0 ? n.classList.add("magnitude-0") : (n.classList.remove("magnitude-0"), n.style.setProperty("--magnitude", b.toString()));
        let p = Math.trunc(v);
        p < 0 && (p = 360 + p), n.style.setProperty("--phase", `-${p.toString()}deg`);
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
        throw new st("unsupported qubit count", this.qubitCount);
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
        throw new st("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaHeight + this.paddingY * 2;
    if (this.mobile) {
      let n = this.clientHeight;
      return this.rowCount > 4 && n < e ? n : e;
    } else
      return e;
  }
  get windowWidth() {
    if (this.qubitCount === 0)
      return 0;
    let e = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.mobile) {
      let n = this.clientWidth;
      return this.colCount >= 16 && n < e ? n : e;
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
        throw new st("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    B.notNull(this.window), B.notNull(this.innerContainer), this.qubitCount !== 0 && Ci.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let e = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let a = this.lastRowStartIndex; a <= this.lastRowEndIndex; a++)
        for (let u = this.lastColStartIndex; u <= this.lastColEndIndex; u++)
          e.push({ col: u, row: a });
      let n = document.createDocumentFragment();
      for (let a of this.allQubitCircleElements(e))
        n.appendChild(a);
      this.innerContainer.textContent = "", this.innerContainer.appendChild(n), this.updateVisibleQubitCircleKets();
    });
  }
  update() {
    this.drawNewlyVisibleQubitCircles(), this.removeInvisibleQubitCircles();
  }
  drawNewlyVisibleQubitCircles() {
    this.window !== void 0 && this.innerContainer !== void 0 && (Ci.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, n = this.overscanColEndIndex, a = this.overscanRowStartIndex, u = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === n && this.lastRowStartIndex === a && this.lastRowEndIndex === u)) {
        for (let h = a; h <= u; h++)
          for (let b = e; b <= n; b++)
            (b < this.lastColStartIndex || this.lastColEndIndex < b || h < this.lastRowStartIndex || this.lastRowEndIndex < h) && this.qubitCirclePositions.push({ col: b, row: h });
        this.lastColStartIndex = e, this.lastColEndIndex = n, this.lastRowStartIndex = a, this.lastRowEndIndex = u;
      }
    }), Ci.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let n of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(n);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    Ci.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let n = e.getAttribute("data-col"), a = e.getAttribute("data-row");
        B.notNull(n), B.notNull(a);
        let u = parseInt(n), h = parseInt(a);
        if (u < this.lastColStartIndex || this.lastColEndIndex < u || h < this.lastRowStartIndex || this.lastRowEndIndex < h) {
          let b = e._tippy;
          b !== void 0 && b.destroy(), e.remove();
        }
      }
    });
  }
  allQubitCircleElements(e) {
    return e.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(e) {
    let n = e.col + e.row * this.colCount, a = this.qubitCircleSizePx * e.row + e.row * this.gap + this.paddingY, u = this.qubitCircleSizePx * e.col + e.col * this.gap + this.paddingX, h = document.createElement("div");
    h.className = "qubit-circle magnitude-0", h.setAttribute("data-col", e.col.toString()), h.setAttribute("data-row", e.row.toString()), h.setAttribute("data-ket", n.toString()), h.setAttribute("data-targets", "circle-notation.qubitCircles"), h.setAttribute("data-amplitude-real", "0"), h.setAttribute("data-amplitude-imag", "0"), h.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), h.style.setProperty("top", `${a}px`), h.style.setProperty("left", `${u}px`);
    let b = document.createElement("div");
    b.className = "qubit-circle__magnitude";
    let v = document.createElement("div");
    return v.className = "qubit-circle__phase", h.appendChild(b), h.appendChild(v), h;
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
        throw new st("unsupported qubit count", this.qubitCount);
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
    let n = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, n;
  }
  get visibleColEndIndex() {
    let e = this.windowWidth + this.windowScrollLeft - this.paddingX, n = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, Math.min(this.colCount - 1, n);
  }
  get visibleRowStartIndex() {
    let e = this.windowScrollTop - this.paddingY;
    if (e < 0)
      return 0;
    let n = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, n;
  }
  get visibleRowEndIndex() {
    let e = this.windowHeight + this.windowScrollTop - this.paddingY, n = Math.floor(e / (this.qubitCircleSizePx + this.gap));
    return e % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, Math.min(this.rowCount - 1, n);
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
    let n = e.target;
    B.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let a = It(n, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let u = n.getAttribute("data-ket");
    B.notNull(u);
    let h = n.getAttribute("data-amplitude-real");
    B.notNull(h);
    let b = n.getAttribute("data-amplitude-imag");
    B.notNull(b);
    let v = parseInt(u), p = parseFloat(h), f = parseFloat(b), w = new an(p, f), y = w.abs(), S = w.phase() / Math.PI * 180, C = document.importNode(this.qubitCirclePopupTemplate.content, true), O = C.getElementById("qubit-circle-popup--ket-binary-value"), z = C.getElementById("qubit-circle-popup--ket-decimal-value"), H = C.getElementById("qubit-circle-popup--amplitude"), L = C.getElementById("qubit-circle-popup--amplitude-real-value"), U = C.getElementById("qubit-circle-popup--amplitude-imag-value"), A = C.getElementById("qubit-circle-popup--probability"), J = C.getElementById("qubit-circle-popup--probability-value"), R = C.getElementById("qubit-circle-popup--phase"), j = C.getElementById("qubit-circle-popup--phase-value");
    B.notNull(H), B.notNull(L), B.notNull(U), B.notNull(A), B.notNull(J), B.notNull(R), B.notNull(j), O && (O.textContent = v.toString(2).padStart(this.qubitCount, "0")), z && (z.textContent = v.toString()), this.showQubitCirclePopupAmplitude ? (L.textContent = Et(w.real, 5), U.textContent = `${Et(w.imag, 5)}i`) : H.style.display = "none", this.showQubitCirclePopupProbability ? J.textContent = `${Et(y * y * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? j.textContent = `${Et(S, 2)}\xB0` : R.style.display = "none";
    let W = document.createElement("div");
    W.appendChild(C), a.setContent(W.innerHTML), a.show();
  }
  hideQubitCirclePopup(e) {
    let n = e.target;
    B.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let a = n._tippy;
    B.notNull(a), a.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "it");
c(it, "CircleNotationElement"), M([k], it.prototype, "qubitCount", 2), M([k], it.prototype, "qubitCircleSize", 2), M([k], it.prototype, "colCount", 2), M([k], it.prototype, "rowCount", 2), M([k], it.prototype, "paddingX", 2), M([k], it.prototype, "paddingY", 2), M([k], it.prototype, "overscanCount", 2), M([k], it.prototype, "colorPhase", 2), M([k], it.prototype, "qubitCirclePopupTemplateId", 2), M([k], it.prototype, "showQubitCirclePopupAmplitude", 2), M([k], it.prototype, "showQubitCirclePopupProbability", 2), M([k], it.prototype, "showQubitCirclePopupPhase", 2), M([Me], it.prototype, "window", 2), M([Me], it.prototype, "innerContainer", 2), M([lt], it.prototype, "qubitCircles", 2), it = M([Q], it);
var Ti = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Ti");
c(Ti, "CircleNotationPanelElement"), M([Me], Ti.prototype, "circleNotation", 2), Ti = M([Q], Ti);
var Id = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Ad = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var kr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    window.addEventListener("load", this.startAnimation.bind(this)), this.startBreakpointChangeEventListener(this.startAnimation.bind(this)), this.attachShadow({ mode: "open" }), this.update();
  }
  attributeChangedCallback(e, n, a) {
    n !== a && a !== null && e === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
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
            ${this.iconHtml(Id)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(Ad)}
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
    for (let n = 0; n < this.gateSets.length; n++)
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
    for (let n of this.popinAnimationGates)
      (e = n.parentElement) == null || e.removeChild(n);
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
    for (let [e, n] of this.gateSets.entries())
      e === this.currentGateSetIndex ? n.classList.remove("hidden") : n.classList.add("hidden");
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
      let n = e.children.item(0);
      return B.need(Fe(n), `${n} must be an operation.`), n;
    });
  }
  createPopinAnimationGates() {
    for (let e of this.gatesInActiveGateSet) {
      let n = e.cloneNode(false);
      n.setAttribute("data-targets", "gate-carousel.popinAnimationGates"), n.style.position = "absolute", n.style.top = `${this.offsetHeight}px`, n.style.left = `${e.offsetLeft}px`, this.append(n);
    }
  }
  animatePopinAnimationGates() {
    for (let [e, n] of this.popinAnimationGates.entries()) {
      B.need(e < 4, "#popinGates must be < 4");
      let a = 0;
      e === 0 ? a = 500 : e === 1 ? a = 600 : e === 2 ? a = 700 : e === 3 && (a = 800);
      let u = n.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: a, fill: "forwards", easing: "ease-out" });
      u.onfinish = () => {
        n === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [e, n] of this.dots.entries())
      e === this.currentGateSetIndex ? n.classList.add("dot--active") : n.classList.remove("dot--active");
  }
}, "kr");
c(kr, "GateCarouselElement"), M([k], kr.prototype, "currentGateSetIndex", 2), M([Me], kr.prototype, "contentClipper", 2), M([lt], kr.prototype, "gateSets", 2), M([lt], kr.prototype, "dots", 2), M([lt], kr.prototype, "popinAnimationGates", 2), kr = M([Q], kr);
var Mo = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return B.notNull(e), e;
  }
  initPopup() {
    this.popup = It(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let n = e.target;
    !this.popup.popper.contains(n) && !this.popup.reference.contains(n) && !Fe(n) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    B.notNull(e);
    let n = e.content.cloneNode(true), a = document.createDocumentFragment();
    return Z(F`${n}`, a), a;
  }
}, "Mo");
c(Mo, "InspectorButtonElement"), Mo = M([Q], Mo);
var St = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return pc(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), Xr(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), An(e)) {
      let n = Wi(e.angle);
      To(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (ps(e) || ds(e) || fs(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    jn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    let n = e.target;
    if (!au(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let n = e.target;
    if (!au(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    if (cc(e)) {
      let n, a = Wi(e);
      this.denominatorInput.value = a.toString(), this.denominatorLabel.textContent = a.toString(), this.backupCurrentDenominator(), lc(e, "-2\u03C0") ? (n = `-${a * 2}\u03C0/${a}`, this.angleInput.value = n) : uc(e, "2\u03C0") ? (n = `${a * 2}\u03C0/${a}`, this.angleInput.value = n) : n = e, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    Kp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "St");
c(St, "OperationInspectorElement"), M([Me], St.prototype, "ifInput", 2), M([Me], St.prototype, "angleInputLabel", 2), M([Me], St.prototype, "angleInput", 2), M([Me], St.prototype, "angleSlider", 2), M([Me], St.prototype, "denominatorInput", 2), M([Me], St.prototype, "denominatorVariableLabel", 2), M([Me], St.prototype, "denominatorLabel", 2), M([Me], St.prototype, "reduceAngleFractionCheckbox", 2), M([Me], St.prototype, "flagInput", 2), M([k], St.prototype, "conditionalGatePaneDisabled", 2), M([k], St.prototype, "anglePaneDisabled", 2), M([k], St.prototype, "conditionalFlagPaneDisabled", 2), St = M([Q], St);
var hs = In(zd(), 1);
var Lt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let e = It(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let n = document.importNode(this.popupTemplate.content, true), a = new hs.default(this.amplitude), u = n.getElementById("qubit-circle-popup--header"), h = n.getElementById("qubit-circle-popup--ket-binary-value"), b = n.getElementById("qubit-circle-popup--ket-decimal-value"), v = n.getElementById("qubit-circle-popup--amplitude"), p = n.getElementById("qubit-circle-popup--amplitude-real-value"), f = n.getElementById("qubit-circle-popup--amplitude-imag-value"), w = n.getElementById("qubit-circle-popup--probability"), y = n.getElementById("qubit-circle-popup--probability-value"), S = n.getElementById("qubit-circle-popup--phase"), C = n.getElementById("qubit-circle-popup--phase-value");
    B.notNull(u), B.notNull(h), B.notNull(b), B.notNull(v), B.notNull(p), B.notNull(f), B.notNull(w), B.notNull(y), B.notNull(S), B.notNull(C), this.showPopupHeader ? (h.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), b.textContent = this.ket.toString()) : u.style.display = "none", this.showPopupAmplitude ? (p.textContent = Et(a.re, 5), f.textContent = `${Et(a.im, 5)}i`) : v.style.display = "none", this.showPopupProbability ? y.textContent = `${Et(this.magnitude * this.magnitude * 100, 4)}%` : w.style.display = "none", this.showPopupPhase ? C.textContent = `${Et(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let O = document.createElement("div");
    O.appendChild(n), e.setContent(O.innerHTML), e.show();
  }
  get magnitude() {
    return new hs.default(this.amplitude).abs();
  }
  get phase() {
    return new hs.default(this.amplitude).arg();
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
}, "Lt");
c(Lt, "QubitCircleElement"), M([k], Lt.prototype, "ket", 2), M([k], Lt.prototype, "qubitCount", 2), M([k], Lt.prototype, "amplitude", 2), M([k], Lt.prototype, "hidePhase", 2), M([k], Lt.prototype, "popupTemplateId", 2), M([k], Lt.prototype, "showPopupHeader", 2), M([k], Lt.prototype, "showPopupAmplitude", 2), M([k], Lt.prototype, "showPopupProbability", 2), M([k], Lt.prototype, "showPopupPhase", 2), M([k], Lt.prototype, "darkMode", 2), Lt = M([Q], Lt);
var Rd = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var _d = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Zr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = ct({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, n) => {
      if (n.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let a = document.createElement("span");
      a.id = "ripple";
      let u = Math.max(this.clientWidth, this.clientHeight), h = u / 2, b = this.getBoundingClientRect(), v = b.left + window.pageXOffset, p = b.top + window.pageYOffset;
      a.setAttribute("part", "ripple"), a.setAttribute("data-target", "run-circuit-button.ripple"), a.style.width = a.style.height = `${u}px`, a.style.left = `${n.clientX - (v + h)}px`, a.style.top = `${n.clientY - (p + h)}px`, this.body.appendChild(a);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = tt(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${Xe(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, n, a) {
    n !== a && e === "data-running" && a !== null && this.runCircuitButtonService.send({ type: "FINISH" });
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
    return F([Rd]);
  }
  get tailSpinIcon() {
    return F([_d]);
  }
}, "Zr");
c(Zr, "RunCircuitButtonElement"), M([k], Zr.prototype, "running", 2), M([k], Zr.prototype, "debug", 2), M([Me], Zr.prototype, "body", 2), M([Me], Zr.prototype, "ripple", 2), Zr = M([Q], Zr);
var Dr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let n = window.getComputedStyle(this);
    this.marginTop = parseFloat(n.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(n.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
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
}, "Dr");
c(Dr, "SlideInElement"), M([k], Dr.prototype, "direction", 2), M([k], Dr.prototype, "directionDesktop", 2), M([k], Dr.prototype, "duration", 2), M([k], Dr.prototype, "marginTop", 2), M([k], Dr.prototype, "marginBottom", 2), Dr = M([Q], Dr);
var Qr = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Qr");
c(Qr, "CircuitBlockElement"), M([k], Qr.prototype, "comment", 2), M([k], Qr.prototype, "finalized", 2), Qr = M([Q], Qr);
var Nr = c((t) => t != null && t instanceof ft, "isCircuitStepElement");
var _e = c((t, r) => Array.from(t.reduce((e, n, a, u) => {
  let h = r(n, a, u), b = e.get(h);
  return b ? b.push(n) : e.set(h, [n]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var ft = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = ct({ id: "circuit-step", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones"] }, DELETE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE"))
        return;
      let a = n.dropzone, u = this.bit(a);
      B.notNull(a.operation), a.operation.bit = u;
    }, updateResizeableSpanDropzones: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "UNSNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE" || n.type === "DELETE_OPERATION" || n.type === "RESIZE_OPERATION"))
        return;
      let a = 1;
      for (let u of this.dropzones) {
        let h = u.operation;
        if (ir(h)) {
          a = h.span;
          continue;
        }
        h === null && (a > 1 ? (u.occupied = true, a -= 1) : u.occupied = false);
      }
    }, dispatchSnapEvent: (e, n) => {
      n.type === "SNAP_DROPZONE" && ue("circuit-step:qpu-operation-snap", { dropzone: n.dropzone }, this);
    }, dispatchUnsnapEvent: (e, n) => {
      n.type === "UNSNAP_DROPZONE" && ue("circuit-step:qpu-operation-unsnap", { dropzone: n.dropzone }, this);
    }, dispatchDeleteOperationEvent: (e, n) => {
      n.type === "DELETE_OPERATION" && ue("circuit-step:delete-qpu-operation", { dropzone: n.dropzone }, this);
    }, dispatchResizeOperationEvent: (e, n) => {
      n.type === "RESIZE_OPERATION" && ue("circuit-step:resize-qpu-operation", { dropzone: n.dropzone }, this);
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = tt(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${Xe(e.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let e = 0;
    for (let [n, a] of Object.entries(this.dropzones)) {
      if (!a.occupied)
        continue;
      let u = parseInt(n, 10) + 1;
      if (u > e && (e = u), ir(a.operation)) {
        let h = u + a.operation.span - 1;
        h > e && (e = h);
      }
    }
    return B.need(0 <= e && e <= Ui.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
  attributeChangedCallback(e, n, a) {
    if (n !== a && (e === "data-active" && (a !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (a !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let u of this.dropzones)
        a !== null ? u.shadow = true : u.shadow = false;
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let h of this.dropzones)
      h.connectTop = false, h.connectBottom = false;
    let n = this.controlGateDropzones, a = this.antiControlGateDropzones, u = this.controllableDropzones(e);
    for (let h of u)
      Vi(h.operation) && (h.operation.controls = [], h.operation.antiControls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), n.length === 1 && u.length === 0) {
      n[0].operation.disable();
      return;
    }
    if (a.length === 1 && u.length === 0) {
      a[0].operation.disable();
      return;
    }
    n.length === 0 && a.length === 0 || (u.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e));
  }
  updateSwapConnections(e) {
    let n = e == null ? void 0 : e.disableSwap, a = this.swapGateDropzones;
    if (a.length !== 2 || n)
      for (let u of a)
        u.operation.disable();
    else {
      for (let h of a)
        h.operation.enable(), h.connectTop = a.some((v) => this.bit(v) < this.bit(h)), h.connectBottom = a.some((v) => this.bit(v) > this.bit(h));
      let u = a.map((h) => this.bit(h));
      for (let h of this.freeDropzones) {
        let b = Math.min(...u), v = Math.max(...u);
        b < this.bit(h) && this.bit(h) < v && (h.connectTop = true, h.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(e) {
    if (e != null && e.disablePhasePhase)
      return;
    let n = this.phaseGateDropzones;
    for (let a of n) {
      let u = a.operation;
      if (u.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let h = n.filter((b) => {
        if (!To(b.operation))
          throw new Error(`${b.operation} isn't a phase-gate element.`);
        return u.angle === b.operation.angle;
      }).map((b) => this.bit(b));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (h = h.slice(0, e.maxPhasePhaseTargetGates)), h.includes(this.bit(a)) && (a.connectTop = h.some((b) => b < this.bit(a)), a.connectBottom = h.some((b) => b > this.bit(a)));
    }
    for (let a of this.freeDropzones) {
      let h = this.phaseGateDropzones.filter((p) => p.connectTop || p.connectBottom).map((p) => this.bit(p)), b = Math.min(...h), v = Math.max(...h);
      b < this.bit(a) && this.bit(a) < v && (a.connectTop = true, a.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let n = this.controlGateDropzones, a = n.map((h) => this.bit(h)), u = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? a = [] : e.maxControlControlTargetGates > 1 && (a = a.slice(0, e.maxControlControlTargetGates)));
    for (let h of n) {
      u += 1;
      let b = h.operation;
      e != null && e.disableControlControl || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && u > e.maxControlControlTargetGates) ? b.disable() : (b.enable(), h.connectTop = a.some((v) => this.bit(h) > v), h.connectBottom = a.some((v) => this.bit(h) < v));
    }
  }
  updateControlledUConnections(e) {
    let n = this.controllableDropzones(e), a = this.controlGateDropzones, u = this.antiControlGateDropzones, h = [...new Set(n.map((C) => C.operationName))], b = this.numControlGateDropzones(e, h), v = a.map((C) => this.bit(C)), p = u.map((C) => this.bit(C)), f = v.concat(p), w = b === null ? f : f.slice(0, b), y = n.map((C) => this.bit(C)), S = w.concat(y);
    for (let [C, O] of Object.entries(a)) {
      let z = O.operation;
      O.connectBottom = S.some((H) => this.bit(O) < H), O.connectTop = S.some((H) => this.bit(O) > H), b === null || b !== null && parseInt(C) < b ? z.enable() : (O.connectTop = Math.max(...S) > this.bit(O), z.disable());
    }
    for (let [C, O] of Object.entries(u)) {
      let z = O.operation;
      O.connectBottom = S.some((H) => this.bit(O) < H), O.connectTop = S.some((H) => this.bit(O) > H), b === null || b !== null && parseInt(C) < b ? z.enable() : (O.connectTop = Math.max(...S) > this.bit(O), z.disable());
    }
    for (let C of n) {
      if (!Vi(C.operation))
        throw new Error(`${C.operation} isn't controllable.`);
      C.operation.controls = this.controlBits(C, v, e), C.operation.antiControls = p, C.connectTop = S.some((O) => O < this.bit(C)), C.connectBottom = S.some((O) => O > this.bit(C));
    }
  }
  updateFreeDropzoneConnections(e) {
    let n = this.controllableDropzones(e), a = this.controlGateDropzones.filter((f) => iu(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), u = this.antiControlGateDropzones.filter((f) => ou(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), h = n.map((f) => this.bit(f)), b = a.concat(u).concat(h), v = Math.min(...b), p = Math.max(...b);
    for (let f of this.freeDropzones)
      v < this.bit(f) && this.bit(f) < p && (f.connectTop = true, f.connectBottom = true);
  }
  controlBits(e, n, a) {
    let u = n;
    return a && (a.maxChControlGates > 0 && e.operationName === "h-gate" ? u = n.slice(0, a.maxChControlGates) : a.maxCnotControlGates > 0 && e.operationName === "x-gate" ? u = n.slice(0, a.maxCnotControlGates) : a.maxCyControlGates > 0 && e.operationName === "y-gate" ? u = n.slice(0, a.maxCyControlGates) : a.maxCzControlGates > 0 && e.operationName === "z-gate" ? u = n.slice(0, a.maxCzControlGates) : a.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? u = n.slice(0, a.maxCphaseControlGates) : a.maxCtControlGates > 0 && e.operationName === "t-gate" ? u = n.slice(0, a.maxCtControlGates) : a.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? u = n.slice(0, a.maxCrnotControlGates) : a.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? u = n.slice(0, a.maxCrxControlGates) : a.maxCryControlGates > 0 && e.operationName === "ry-gate" ? u = n.slice(0, a.maxCryControlGates) : a.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? u = n.slice(0, a.maxCrzControlGates) : a.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (u = n.slice(0, a.maxCswapControlGates))), u;
  }
  bit(e) {
    let n = this.dropzones.indexOf(e);
    return B.need(n !== -1, "circuit-dropzone not found."), n;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => e.operation === null);
  }
  dropzoneAt(e) {
    let n = this.dropzones[e];
    return B.notNull(n), n;
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let e = new pe();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let n = new pe();
    this.append(n), n.put(e);
  }
  get swapGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.occupiedDropzones.filter((e) => iu(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => ou(e.operation));
  }
  numControlGateDropzones(e, n) {
    if (e === void 0)
      return null;
    let a = 0;
    return n.includes("h-gate") && !e.disableCh && e.maxChControlGates > a && (a = e.maxChControlGates), n.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > a && (a = e.maxCnotControlGates), n.includes("y-gate") && !e.disableCy && e.maxCyControlGates > a && (a = e.maxCyControlGates), n.includes("z-gate") && !e.disableCz && e.maxCzControlGates > a && (a = e.maxCzControlGates), n.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > a && (a = e.maxCphaseControlGates), n.includes("t-gate") && !e.disableCt && e.maxCtControlGates > a && (a = e.maxCtControlGates), n.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > a && (a = e.maxCrnotControlGates), n.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > a && (a = e.maxCrxControlGates), n.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > a && (a = e.maxCryControlGates), n.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > a && (a = e.maxCrzControlGates), n.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > a && (a = e.maxCswapControlGates), a === 0 ? null : a;
  }
  controllableDropzones(e) {
    let n = 0, a = 0, u = 0, h = 0, b = 0, v = 0, p = 0, f = 0, w = 0, y = 0;
    return this.occupiedDropzones.filter((S) => Vi(S.operation)).filter((S) => e === void 0 ? true : gd(S.operation) ? (n += 1, e.maxChTargetGates !== 0 && n > e.maxChTargetGates ? false : !e.disableCh) : bd(S.operation) ? (a += 1, e.maxCnotTargetGates !== 0 && a > e.maxCnotTargetGates ? false : !e.disableCnot) : yd(S.operation) ? (u += 1, e.maxCyTargetGates !== 0 && u > e.maxCyTargetGates ? false : !e.disableCy) : wd(S.operation) ? (h += 1, e.maxCzTargetGates !== 0 && h > e.maxCzTargetGates ? false : !e.disableCz) : To(S.operation) ? (b += 1, e.maxCphaseTargetGates !== 0 && b > e.maxCphaseTargetGates ? false : !e.disableCphase) : xd(S.operation) ? (v += 1, e.maxCtTargetGates !== 0 && v > e.maxCtTargetGates ? false : !e.disableCt) : Ed(S.operation) ? (p += 1, e.maxCrnotTargetGates !== 0 && p > e.maxCrnotTargetGates ? false : !e.disableCrnot) : ps(S.operation) ? (f += 1, e.maxCrxTargetGates !== 0 && f > e.maxCrxTargetGates ? false : !e.disableCrx) : ds(S.operation) ? (w += 1, e.maxCryTargetGates !== 0 && w > e.maxCryTargetGates ? false : !e.disableCry) : fs(S.operation) ? (y += 1, e.maxCrzTargetGates !== 0 && y > e.maxCrzTargetGates ? false : !e.disableCrz) : Sd(S.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    ue("circuit-step:update", {}, this);
  }
  deleteOperation(e) {
    let n = e.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: n });
  }
  resizeOperation(e) {
    let n = e.target;
    this.circuitStepService.send({ type: "RESIZE_OPERATION", dropzone: n });
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
    let n = e.target;
    this.circuitStepService.send({ type: "SNAP_DROPZONE", dropzone: n });
  }
  unsnapDropzone(e) {
    let n = e.target;
    this.circuitStepService.send({ type: "UNSNAP_DROPZONE", dropzone: n });
  }
  unshadow() {
    this.circuitStepService.send({ type: "UNSHADOW" });
  }
  occupyDropzone(e) {
    let n = e.target;
    this.circuitStepService.send({ type: "OCCUPY_DROPZONE", dropzone: n });
  }
  serialize() {
    let e = [];
    for (let [n, a] of _e(this.operations, (u) => u.constructor))
      switch (n) {
        case $t: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.if))
            for (let [v, p] of _e(b, (f) => f.controls.toString())) {
              let f = p[0], w = f.operationType, y = p.map((C) => C.bit), S = { type: w, targets: y };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Qt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.if))
            for (let [v, p] of _e(b, (f) => f.controls.toString())) {
              let f = p[0], w = f.operationType, y = p.map((C) => C.bit), S = { type: w, targets: y };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Jt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.if))
            for (let [v, p] of _e(b, (f) => f.controls.toString())) {
              let f = p[0], w = f.operationType, y = p.map((C) => C.bit), S = { type: w, targets: y };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Kt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.if))
            for (let [v, p] of _e(b, (f) => f.controls.toString())) {
              let f = p[0], w = f.operationType, y = p.map((C) => C.bit), S = { type: w, targets: y };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Ft: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.angle))
            for (let [v, p] of _e(b, (f) => f.if))
              for (let [f, w] of _e(p, (y) => y.controls.toString())) {
                let y = w[0], S = y.operationType, C = w.map((z) => z.bit), O = { type: S, targets: C };
                v !== "" && (O.if = v), h !== "" && (O.angle = h), f !== "" && (O.controls = y.controls), y.antiControls.length > 0 && (O.antiControls = y.antiControls), e.push(O);
              }
          break;
        }
        case Zt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.if))
            for (let [v, p] of _e(b, (f) => f.controls.toString())) {
              let f = p[0], w = f.operationType, y = p.map((C) => C.bit), S = { type: w, targets: y };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Wt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.if))
            for (let [v, p] of _e(b, (f) => f.controls.toString())) {
              let f = p[0], w = f.operationType, y = p.map((C) => C.bit), S = { type: w, targets: y };
              h !== "" && (S.if = h), v !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Ut: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.angle))
            for (let [v, p] of _e(b, (f) => f.if))
              for (let [f, w] of _e(p, (y) => y.controls.toString())) {
                let y = w[0], S = y.operationType, C = w.map((z) => z.bit), O = { type: S, targets: C };
                v !== "" && (O.if = v), h !== "" && (O.angle = h), f !== "" && (O.controls = y.controls), y.antiControls.length > 0 && (O.antiControls = y.antiControls), e.push(O);
              }
          break;
        }
        case Vt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.angle))
            for (let [v, p] of _e(b, (f) => f.if))
              for (let [f, w] of _e(p, (y) => y.controls.toString())) {
                let y = w[0], S = y.operationType, C = w.map((z) => z.bit), O = { type: S, targets: C };
                v !== "" && (O.if = v), h !== "" && (O.angle = h), f !== "" && (O.controls = y.controls), y.antiControls.length > 0 && (O.antiControls = y.antiControls), e.push(O);
              }
          break;
        }
        case Yt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.angle))
            for (let [v, p] of _e(b, (f) => f.if))
              for (let [f, w] of _e(p, (y) => y.controls.toString())) {
                let y = w[0], S = y.operationType, C = w.map((z) => z.bit), O = { type: S, targets: C };
                v !== "" && (O.if = v), h !== "" && (O.angle = h), f !== "" && (O.controls = y.controls), y.antiControls.length > 0 && (O.antiControls = y.antiControls), e.push(O);
              }
          break;
        }
        case mr: {
          let u = a, h = u[0].operationType, b = u.map((p) => p.bit), v = { type: h, targets: b };
          e.push(v);
          break;
        }
        case vr: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.span)) {
            let p = b[0].operationType, f = b.map((y) => y.bit), w = { type: p, span: h, targets: f };
            e.push(w);
          }
          break;
        }
        case hr: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.span)) {
            let p = b[0].operationType, f = b.map((y) => y.bit), w = { type: p, span: h, targets: f };
            e.push(w);
          }
          break;
        }
        case Xt: {
          let u = a.filter((p) => !p.disabled);
          if (u.length !== 2)
            break;
          let h = u[0].operationType, b = u[0].controls, v = { type: h, targets: [u[0].bit, u[1].bit] };
          b !== void 0 && b.length > 0 && (v.controls = b), e.push(v);
          break;
        }
        case Nt: {
          let u = a.filter((b) => !b.disabled);
          if (u.length < 2 || this.operations.some((b) => Vi(b) && b.controls.length > 0))
            break;
          let h = u.map((b) => b.bit);
          e.push({ type: u[0].operationType, targets: h });
          break;
        }
        case fr:
          break;
        case Ke: {
          let u = a, h = a.map((b) => b.bit);
          e.push({ type: u[0].operationType, targets: h });
          break;
        }
        case Gt: {
          let u = a;
          for (let [, h] of _e(u, (b) => b.value)) {
            let b = h.map((v) => v.bit);
            e.push({ type: h[0].operationType, targets: b });
          }
          break;
        }
        case qt: {
          let u = a;
          for (let [h, b] of _e(u, (v) => v.flag)) {
            let v = b.map((w) => w.bit), f = { type: b[0].operationType, targets: v };
            h !== "" && (f.flag = h), e.push(f);
          }
          break;
        }
        default:
          throw new st("Unrecognized operation", { klass: n });
      }
    return e;
  }
  get operations() {
    return this.occupiedDropzones.map((e) => e.operation).filter((e) => e !== null);
  }
  toJson() {
    let e = this.dropzones.map((n) => n.toJson());
    for (; e.length > 0 && e[e.length - 1] === "1"; )
      e.pop();
    return e.length === 0 ? "[1]" : `[${e.join(",")}]`;
  }
}, "ft");
c(ft, "CircuitStepElement"), M([k], ft.prototype, "active", 2), M([k], ft.prototype, "breakpoint", 2), M([k], ft.prototype, "shadow", 2), M([k], ft.prototype, "keep", 2), M([k], ft.prototype, "debug", 2), M([lt], ft.prototype, "dropzones", 2), M([lt], ft.prototype, "freeDropzones", 2), M([lt], ft.prototype, "occupiedDropzones", 2), ft = M([Q], ft);
var Dd = In(co(), 1);
var kd = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var Ao = c((t) => t != null && t instanceof pe, "isCircuitDropzoneElement");
var Io;
var pe = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    fa(this, Io, null);
    this.occupied = false;
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.targets = "circuit-step.dropzones circuit-step.freeDropzones";
    this.debug = false;
    this.circuitDropzoneMachine = ct({ id: "circuit-dropzone", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
      B.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      B.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, ue("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.removeAttribute("data-operation-name"), this.occupied = false, ue("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      ue("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (e, n) => {
      n.type === "PUT_OPERATION" && (this.append(n.operation), this.operationName = n.operation.tagName.toLocaleLowerCase(), this.occupied = true, n.operation.snapped = true);
    }, deleteOperation: (e, n) => {
      n.type === "DELETE_OPERATION" && (this.removeAttribute("data-operation-name"), this.occupied = false, this.removeChild(n.operation));
    }, resizeOperation: () => {
      ue("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      ue("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      ue("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = tt(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = ha(this, Io, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = da(this, Io)) == null || e.abort();
  }
  attributeChangedCallback(e, n, a) {
    n !== a && e === "data-occupied" && (a !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
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
    return B.notNull(e), Nr(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, Dd.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: n });
  }
  resizeOperation(e) {
    let n = e.target;
    if (!ir(n))
      throw new Error(`${n} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return F([kd]);
  }
}, "pe");
c(pe, "CircuitDropzoneElement"), Io = /* @__PURE__ */ new WeakMap(), M([k], pe.prototype, "occupied", 2), M([k], pe.prototype, "operationName", 2), M([k], pe.prototype, "inputWireQuantum", 2), M([k], pe.prototype, "outputWireQuantum", 2), M([k], pe.prototype, "connectTop", 2), M([k], pe.prototype, "connectBottom", 2), M([k], pe.prototype, "shadow", 2), M([k], pe.prototype, "targets", 2), M([k], pe.prototype, "debug", 2), pe = M([Q], pe);
var hn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ct({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let a = n.operation;
      ss(a) && a.menu && a.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, n) => {
      n.type !== "GRAB_OPERATION" && n.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(n.operation);
    }, snapOperationIntoDropzone: (e, n) => {
      if (n.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let a = n.operation, u = this.circuit.snapTargetAt(n.x, n.y);
      if (a.snapped = true, u.dropzone === null) {
        let h = u.stepIndex;
        B.notNull(h);
        let b = this.circuit.addShadowStepAfter(h), v = b.dropzones[u.wireIndex];
        B.notNull(v), v.append(a), v.operationName = a.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(b.dropzones);
      } else
        u.dropzone.append(a);
    }, snapResizeHandleIntoDropzone: (e, n) => {
      if (n.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let a = n.operation;
      if (!ir(a))
        throw new Error(`${a} is not resizeable`);
      let u = a.dropzone;
      if (!Ao(u))
        throw new Error(`${u} is not a circuit dropzone`);
      B.notNull(u.circuitStep);
      let h = u.circuitStep.dropzones.indexOf(u), v = this.circuit.resizeHandleSnapTargetAt(n.x, n.y).wireIndex - h + 1;
      if (!dc(v))
        throw new Error(`Invalid span: ${v}`);
      a.span = v;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < Ui.MAX_QUBIT_COUNT && this.circuit.appendWire();
    }, maybeRemoveLastEmptyWires: () => {
      this.circuit.removeLastEmptyWires();
    }, resizeCircuit: () => {
      this.circuit.resize(), this.dispatchEvent(new Event("circuit-editor-resize", { bubbles: true }));
    }, setSnapTargets: (e, n) => {
      n.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(n.operation);
    }, setResizeHandleSnapTargets: (e, n) => {
      n.type === "GRAB_RESIZE_HANDLE" && this.circuit.setResizeHandleSnapTargets(n.operation);
    }, setBreakpoint: (e, n) => {
      n.type === "CLICK_STEP" && this.circuit.setBreakpoint(n.step);
    }, activateStep: (e, n) => {
      n.type !== "MOUSE_ENTER_STEP" && n.type !== "SNAP_STEP" || (n.step.active = true);
    }, deactivateStep: (e, n) => {
      n.type !== "MOUSE_LEAVE_STEP" && n.type !== "UNSNAP_STEP" || (n.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (e, n) => {
      n.type !== "END_DRAGGING_OPERATION" || n.operation.snapped || this.inspectorButton !== void 0 && this.inspectorButton.isInspectorShown && this.inspectorButton.inspector.disableAllPanes();
    }, initOperationMenu: (e, n) => {
      if (n.type !== "DROP_OPERATION")
        return;
      let a = n.operation;
      ss(a) && a.initMenu();
    }, showOperationMenu: (e, n) => {
      n.type === "SHOW_OPERATION_MENU" && (this.inspectorButton.isInspectorShown || n.operation.showMenu());
    }, showOperationInspectorIf: (e, n) => {
      n.type === "SHOW_OPERATION_INSPECTOR_IF" && this.inspectorButton.showIfInspector(n.operation);
    }, showOperationInspectorAngle: (e, n) => {
      n.type === "SHOW_OPERATION_INSPECTOR_ANGLE" && this.inspectorButton.showAngleInspector(n.operation);
    }, showOperationInspectorFlag: (e, n) => {
      n.type === "SHOW_OPERATION_INSPECTOR_FLAG" && this.inspectorButton.showFlagInspector(n.operation);
    }, setOperationIf: (e, n) => {
      n.type === "SET_OPERATION_IF" && (n.operation.if = n.if);
    }, setOperationAngle: (e, n) => {
      n.type === "SET_OPERATION_ANGLE" && (n.operation.angle = n.angle, n.operation.reducedAngle = n.reducedAngle);
    }, setOperationFlag: (e, n) => {
      n.type === "SET_OPERATION_FLAG" && (n.operation.flag = n.flag);
    }, maybeUpdateOperationInspector: (e, n) => {
      if (n.type !== "ACTIVATE_OPERATION" || this.inspectorButton === void 0)
        return;
      let a = n.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(a);
    } } });
    this.circuitEditorService = tt(this.circuitEditorMachine).onTransition((e) => {
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
    let n = e.target;
    if (Fa(n))
      n.draggable = true;
    else
      throw new st("Not a draggable element.", { el: n });
  }
  enableResizing(e) {
    let n = e.target;
    if (ir(n))
      n.resizeable = true;
    else
      throw new st("Not a resizeable element.", { el: n });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let a of this.circuit.operations)
        ss(a) && a.initMenu();
    }
  }
  maybeDeactivateOperation(e) {
    var a;
    let n = e.target;
    !Fe(n) && this.inspectorButton && !((a = this.inspectorButton) != null && a.popup.popper.contains(n)) && !this.inspectorButton.popup.reference.contains(n) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: n });
  }
  showOperationMenu(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: n });
  }
  showOperationInspectorIf(e) {
    let n = e.target;
    if (!Xr(n))
      throw new Error(`${n} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: n });
  }
  showOperationInspectorAngle(e) {
    let n = e.target;
    if (!An(n))
      throw new Error(`${n} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: n });
  }
  showOperationInspectorFlag(e) {
    let n = e.target;
    if (!jn(n))
      throw new Error(`${n} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: n });
  }
  setOperationIf(e) {
    let n = e.target, a = this.activeOperation;
    if (!Xr(a))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: a, if: n.if });
  }
  setOperationAngle(e) {
    let n = e.target, a = this.activeOperation;
    if (B.notNull(a), !An(a))
      throw new Error(`${a.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: a, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let n = e.target, a = this.activeOperation;
    if (!jn(a))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: a, flag: n.flag });
  }
  grabOperation(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: n });
  }
  grabResizeHandle(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: n });
  }
  releaseResizeHandle(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  releaseOperation(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: n });
  }
  resizeEnd(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  endDraggingOperation(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: n });
  }
  dropOperation(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: n });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let n = e.target;
    if (!Nr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: n });
  }
  snapStep(e) {
    let n = e.target;
    if (!Nr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: n });
  }
  unsnapStep(e) {
    let n = e.target;
    if (!Nr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: n });
  }
  operationInSnapRange(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    let u = e.detail.snapTargetInfo, h = u.x, b = u.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: n, x: h, y: b });
  }
  resizeHandleInSnapRange(e) {
    let n = e.target;
    if (!Fe(n))
      throw new Error(`${n} must be an Operation.`);
    let u = e.detail.snapTargetInfo, h = u.x, b = u.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: n, x: h, y: b });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!Nr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: n });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!Nr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: n });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "hn");
c(hn, "CircuitEditorElement"), M([k], hn.prototype, "debug", 2), M([Me], hn.prototype, "circuit", 2), M([Me], hn.prototype, "inspectorButton", 2), hn = M([Q], hn);
var zo;
var Po = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    fa(this, zo, null);
  }
  connectedCallback() {
    let { signal: e } = ha(this, zo, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = da(this, zo)) == null || e.abort();
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
    Fa(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), ir(e) && (e.resizeable = true), Kl(e) && e.initHelp();
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
    let n = e.target;
    this.assertOperation(n);
    let a = n.cloneNode(false);
    this.assertOperation(a), Kl(n) && n.disableHelp(), this.prepend(a), this.initOperation(a);
  }
  deleteOperation(e) {
    let n = e.target;
    this.assertOperation(n), this.removeChild(n);
  }
  assertOperation(e) {
    if (!Fe(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "Po");
c(Po, "PaletteDropzoneElement"), zo = /* @__PURE__ */ new WeakMap(), Po = M([Q], Po);
var se = /* @__PURE__ */ __name(class extends ve(HTMLElement) {
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
    this.quantumCircuitMachine = ct({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = tt(this.quantumCircuitMachine).onTransition((e) => {
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
    return this.steps.find((n) => n.active) || null;
  }
  fetchStepIndex(e) {
    let n = this.steps.indexOf(e);
    return B.need(n !== -1, `circuit-step index of ${e} not found.`), n;
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
    let e = null, n = 0;
    for (let a of this.steps)
      a.wireCount > 0 && a.wireCount > n && (e = a, n = a.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let n = 0; n < e; n++)
      this.append(new ft());
  }
  stepAt(e) {
    let n = this.steps[e];
    return B.notNull(n), n;
  }
  addShadowStepAfter(e) {
    let n = new ft();
    n.shadow = true;
    for (let a = 0; a < this.wireCount; a++)
      n.appendDropzone();
    if (e === -1)
      this.prepend(n);
    else {
      let a = this.steps[e];
      B.notNull(a.parentElement), a.parentElement.insertBefore(n, a.nextSibling);
    }
    return n;
  }
  activateStep(e) {
    e.active = true;
  }
  deactivateAllSteps() {
    for (let e of this.steps)
      e.active = false;
  }
  setBreakpoint(e) {
    for (let n of this.steps)
      n.breakpoint = false;
    e.breakpoint = true;
  }
  get breakpoint() {
    return this.steps.find((n) => n.breakpoint) || null;
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
  attributeChangedCallback(e, n, a) {
    n !== a && (e === "data-editing" && (a !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && a !== null && this.makeOperationsHoverable(), e === "data-json" && a !== "" && a !== null && (this.loadFromJson(a), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    Z(F`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let n = e.target;
    this.updateStepOperationAttributes(n);
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
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new $t();
      return a && u.disable(), u;
    }, ...n), this.resize(), this;
  }
  x(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Qt();
      return a && u.disable(), u;
    }, ...n), this;
  }
  y(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Jt();
      return a && u.disable(), u;
    }, ...n), this;
  }
  z(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Kt();
      return a && u.disable(), u;
    }, ...n), this;
  }
  phase(...e) {
    let n = "", a, u;
    if (typeof e[0] == "number")
      a = e;
    else if (typeof e[0] == "string")
      n = e[0], a = e.slice(1);
    else {
      let b = e[0];
      a = b.targets, u = b.disabled;
    }
    let h = this.applyOperationToTargets(() => {
      let b = new Ft();
      return b.angle = n, u && b.disable(), b;
    }, ...a);
    return a.length > 1 && this.updateStepOperationAttributes(h), this;
  }
  t(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Zt();
      return a && u.disable(), u;
    }, ...n), this.resize(), this;
  }
  rnot(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Wt();
      return a && u.disable(), u;
    }, ...n), this;
  }
  rx(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Ut();
      return a && u.disable(), u;
    }, ...n), this;
  }
  ry(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Vt();
      return a && u.disable(), u;
    }, ...n), this;
  }
  rz(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let u = e[0];
      n = u.targets, a = u.disabled;
    }
    return this.applyOperationToTargets(() => {
      let u = new Yt();
      return a && u.disable(), u;
    }, ...n), this;
  }
  qft(e, ...n) {
    let a;
    return typeof n[0] == "number" ? a = n : a = n[0].targets, this.applyOperationToTargets(() => {
      let u = new vr();
      return u.span = e, u;
    }, ...a), this.resize(), this;
  }
  qftDagger(e, ...n) {
    let a;
    return typeof n[0] == "number" ? a = n : a = n[0].targets, this.applyOperationToTargets(() => {
      let u = new hr();
      return u.span = e, u;
    }, ...a), this.resize(), this;
  }
  swap(...e) {
    let n = this.applyOperationToTargets(() => new Xt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  control(...e) {
    let n = this.applyOperationToTargets(() => new Nt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new Ke(), ...e), this;
  }
  write(e, ...n) {
    return this.applyOperationToTargets(() => {
      let a = new Gt();
      return a.value = e, a;
    }, ...n), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new qt(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...n) {
    let a = Math.max(...n) + 1, u = this.appendStepWithDropzones(a);
    for (let h of n) {
      let b = e();
      u.dropzoneAt(h).put(b);
    }
    return u;
  }
  ch(e, n) {
    return this.controlledU($t, e, n), this;
  }
  cnot(e, n) {
    return this.controlledU(Qt, e, n), this.resize(), this;
  }
  cy(e, n) {
    return this.controlledU(Jt, e, n), this;
  }
  cz(e, n) {
    return this.controlledU(Kt, e, n), this;
  }
  cphase(e, n) {
    return this.controlledU(Ft, e, n), this;
  }
  ct(e, n) {
    return this.controlledU(Zt, e, n), this;
  }
  crnot(e, n) {
    return this.controlledU(Wt, e, n), this;
  }
  crx(e, n) {
    return this.controlledU(Ut, e, n), this;
  }
  cry(e, n) {
    return this.controlledU(Vt, e, n), this;
  }
  crz(e, n) {
    return this.controlledU(Yt, e, n), this;
  }
  cswap(e, n) {
    return this.controlledU(Xt, e, n), this;
  }
  cc(...e) {
    let n = Math.max(...e) + 1, a = this.appendStepWithDropzones(n);
    for (let u of e)
      a.dropzoneAt(u).put(new Nt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(a), this;
  }
  controlledU(e, n, a) {
    let u = [].concat(n), h = [].concat(a), b = u.concat(h), v = Math.max(...b) + 1, p = this.appendStepWithDropzones(v);
    for (let f of u)
      p.dropzoneAt(f).put(new Nt());
    for (let f of h)
      p.dropzoneAt(f).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(p);
  }
  appendStep() {
    let e = new ft(), n = this.blocks.slice(-1)[0] || null;
    return n === null || n.finalized ? this.append(e) : n.append(e), e;
  }
  appendStepWithDropzones(e) {
    let n = new ft();
    this.append(n);
    for (let a = 0; a < e; a++) {
      let u = new pe();
      n.append(u);
    }
    return n;
  }
  updateAllWires() {
    let e = this.steps[0];
    if (e === void 0)
      return;
    let n = e.dropzones.length;
    for (let a = 0; a < n; a++)
      this.updateWire(a);
  }
  activateOperation(e) {
    for (let n of this.operations)
      n.active = false;
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
    let n = null;
    if (e === "") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let a = JSON.parse(e);
    this.circuitTitle = (a.title || "").trim();
    let u = false;
    for (let h of a.cols) {
      let b = this.appendStep();
      u && (b.keep = true, u = false);
      let v = [];
      for (let p of h) {
        switch (true) {
          case /^\|0>$/.test(p): {
            let f = new Gt();
            f.value = "0", v.push(f), b.append(new pe());
            break;
          }
          case /^\|1>$/.test(p): {
            let f = new Gt();
            f.value = "1", v.push(f), b.append(new pe());
            break;
          }
          case /^H/.test(p): {
            let f = new $t();
            f.if = this.ifVariable(p.slice(1)), v.push(f), b.append(new pe());
            break;
          }
          case (/^X$/.test(p) || /^X<(.+)$/.test(p)): {
            let f = new Qt();
            f.if = p.slice(2).trim(), v.push(f), b.append(new pe());
            break;
          }
          case /^Y/.test(p): {
            let f = new Jt();
            f.if = this.ifVariable(p.slice(1)), v.push(f), b.append(new pe());
            break;
          }
          case /^Z/.test(p): {
            let f = new Kt();
            f.if = this.ifVariable(p.slice(1)), v.push(f), b.append(new pe());
            break;
          }
          case /^P/.test(p): {
            let f = new Ft();
            f.angle = this.angleParameter(p.slice(1)), v.push(f), b.append(new pe());
            break;
          }
          case /^T/.test(p): {
            let f = new Zt();
            f.if = this.ifVariable(p.slice(1)), v.push(f), b.append(new pe());
            break;
          }
          case /^X\^½/.test(p): {
            let f = new Wt();
            f.if = this.ifVariable(p.slice(3)), v.push(f), b.append(new pe());
            break;
          }
          case /^Rx/.test(p): {
            let f = new Ut();
            f.angle = this.angleParameter(p.slice(2)), v.push(f), b.append(new pe());
            break;
          }
          case /^Ry/.test(p): {
            let f = new Vt();
            f.angle = this.angleParameter(p.slice(2)), v.push(f), b.append(new pe());
            break;
          }
          case /^Rz/.test(p): {
            let f = new Yt();
            f.angle = this.angleParameter(p.slice(2)), v.push(f), b.append(new pe());
            break;
          }
          case /^…/.test(p): {
            let f = new mr();
            v.push(f), b.append(new pe());
            break;
          }
          case /^QFT\d/.test(p): {
            let f = new vr(), w = parseInt(p.slice(3), 10);
            f.span = w, v.push(f);
            for (let y = 0; y < w; y++)
              b.append(new pe());
            break;
          }
          case /^QFT†\d/.test(p): {
            let f = new hr(), w = parseInt(p.slice(4), 10);
            f.span = w, v.push(f), b.append(new pe());
            for (let y = 0; y < w; y++)
              b.append(new pe());
            break;
          }
          case /^Swap$/.test(p): {
            let f = new Xt();
            v.push(f), b.append(new pe());
            break;
          }
          case /^•$/.test(p): {
            let f = new Nt();
            v.push(f), b.append(new pe());
            break;
          }
          case /^◦$/.test(p): {
            let f = new fr();
            v.push(f), b.append(new pe());
            break;
          }
          case /^Bloch$/.test(p): {
            let f = new Ke();
            v.push(f), b.append(new pe());
            break;
          }
          case /^Measure/.test(p): {
            let f = new qt(), w = ((/^>(.+)$/.exec(p.slice(7)) || [])[1] || "").trim();
            f.flag = w, v.push(f), b.append(new pe());
            break;
          }
          case /^[[{](.+)$/.test(p): {
            let f = p.slice(1);
            b.remove(), n = new Qr(), n.comment = f, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
            break;
          }
          case /^[\]}]$/.test(p): {
            b.remove(), n.finalize(), u = true;
            break;
          }
          default: {
            if (p !== 1)
              throw new Error(`Unknown operation: ${p}`);
            b.append(new pe()), v.push(null);
          }
        }
        for (let [f, w] of Object.entries(v))
          w !== null && b.dropzoneAt(parseInt(f)).put(w);
        b.updateOperationAttributes();
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
    let e = this.largestStep, n = e && e.wireCount > this.minWireCount ? e.wireCount : this.minWireCount;
    for (let a of this.steps) {
      let u = n - a.wireCount;
      for (let h = 0; h < u; h++)
        a.appendDropzone();
    }
  }
  updateWire(e) {
    let n = false;
    for (let a of this.steps) {
      let u = a.dropzoneAt(e);
      if (u.inputWireQuantum = n, u.operationName === "write-gate")
        u.inputWireQuantum = n, u.outputWireQuantum = true, n = true;
      else if (u.operationName === "measurement-gate")
        u.inputWireQuantum = n, u.outputWireQuantum = false, n = false;
      else if (u.operationName === "swap-gate") {
        let h = a.dropzones.filter((b) => b.operationName === "swap-gate");
        if (h.length === 2) {
          let b = h.map((w) => a.bit(w)), v = a.bit(u), p = b[0] === v ? b[1] : b[0], f = a.dropzoneAt(p);
          u.inputWireQuantum = n, u.outputWireQuantum = f.inputWireQuantum, n = f.inputWireQuantum;
        } else
          u.inputWireQuantum = n, u.outputWireQuantum = n;
      } else
        u.inputWireQuantum = n, u.outputWireQuantum = n;
    }
  }
  updateChangedWire(e) {
    let n = e.target;
    if (!Nr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let a = e.detail.dropzone;
    if (!Ao(a))
      throw new Error(`${a} isn't a circuit-dropzone.`);
    let u = n.dropzones.indexOf(a);
    B.need(u !== -1, "circuit-dropzone not found."), this.updateWire(u);
  }
  snapTargetAt(e, n) {
    return this.isVertical ? this.snapTargets[n][e] : this.snapTargets[e][n];
  }
  resizeHandleSnapTargetAt(e, n) {
    return this.isVertical ? this.resizeHandleSnapTargets[n][e] : this.resizeHandleSnapTargets[e][n];
  }
  setSnapTargets(e) {
    let n = [];
    this.snapTargets = {};
    let a = 1;
    ir(e) && (a = e.span);
    let u = e.dropzone;
    for (let [h, b] of Object.entries(this.steps)) {
      let v = parseInt(h);
      for (let [p, f] of Object.entries(b.dropzones)) {
        let w = parseInt(p), y = f.snapTarget, S = this.isVertical ? y.y : y.x, C = this.isVertical ? y.x : y.y;
        if (v === 0 && b.dropzones[w + a - 1] !== void 0) {
          let z = S - e.snapRange * 0.75;
          this.isVertical ? n.push({ x: C, y: z }) : n.push({ x: z, y: C }), this.snapTargets[z] === void 0 && (this.snapTargets[z] = {}), this.snapTargets[z][C] === void 0 && (this.snapTargets[z][C] = { dropzone: null, stepIndex: -1, wireIndex: w });
        }
        if (a === 1)
          (f === u || !f.occupied) && n.push(y);
        else if (!f.occupied && w + a <= b.dropzones.length && n.push(y), f === u) {
          n.push(y);
          for (let z = 1; z < a && w + z < b.dropzones.length; z++) {
            let H = b.dropzones[w + z];
            B.notNull(H), n.push(H.snapTarget);
          }
        }
        let O = S + e.snapRange * 0.75;
        b.dropzones[w + a - 1] !== void 0 && (this.isVertical ? n.push({ x: C, y: O }) : n.push({ x: O, y: C })), this.snapTargets[O] === void 0 && (this.snapTargets[O] = {}), this.snapTargets[O][C] === void 0 && (this.snapTargets[O][C] = { dropzone: null, stepIndex: v, wireIndex: w }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][C] === void 0 && (this.snapTargets[S][C] = { dropzone: f, stepIndex: null, wireIndex: w });
      }
    }
    e.snapTargets = n;
  }
  setResizeHandleSnapTargets(e) {
    if (!ir(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!Ao(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let n = e.dropzone.circuitStep;
    B.notNull(n);
    let a = n.freeDropzones, u = e.dropzone;
    a.push(u);
    let h = [];
    this.resizeHandleSnapTargets = {};
    for (let [b, v] of Object.entries(n.dropzones)) {
      let p = v.resizeHandleSnapTarget, f = this.isVertical ? p.y : p.x, w = this.isVertical ? p.x : p.y, y = parseInt(b) % this.wireCount;
      if (v.occupied || h.push(p), v === u) {
        h.push(p);
        let S = e.span;
        for (let C = 1; C < S; C++) {
          let O = n.dropzones[parseInt(b) + C];
          B.notNull(O), h.push(O.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[f] === void 0 && (this.resizeHandleSnapTargets[f] = {}), this.resizeHandleSnapTargets[f][w] === void 0 && (this.resizeHandleSnapTargets[f][w] = { dropzone: v, stepIndex: null, wireIndex: y });
    }
    e.resizeHandleSnapTargets = h;
  }
  updateSnapTargets(e) {
    let n = e[0];
    B.notNull(n);
    let a = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [u, h] of Object.entries(this.snapTargets))
      if (!(parseInt(u) <= a))
        for (let b in h) {
          let v = h[b];
          v.stepIndex !== null && (v.stepIndex += 1);
        }
    for (let [u, h] of Object.entries(e)) {
      let b = h.snapTarget, v = this.isVertical ? b.y : b.x, p = this.isVertical ? b.x : b.y;
      B.notNull(this.snapTargets[v]), this.snapTargets[v][p] = { dropzone: h, stepIndex: null, wireIndex: parseInt(u) };
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
    let e = false, n = [];
    for (let a of this.nonEmptySteps) {
      if (a.isInBlock) {
        if (!e) {
          let u = a.block;
          n.push(`["[${u.comment}"]`), e = true;
        }
      } else
        e && (n.push('["]"]'), e = false);
      n.push(a.toJson());
    }
    return e && n.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${n.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${n.join(",")}]}`;
  }
}, "se");
c(se, "QuantumCircuitElement"), M([k], se.prototype, "minStepCount", 2), M([k], se.prototype, "minWireCount", 2), M([k], se.prototype, "editing", 2), M([k], se.prototype, "updateUrl", 2), M([k], se.prototype, "json", 2), M([k], se.prototype, "circuitTitle", 2), M([k], se.prototype, "debug", 2), M([k], se.prototype, "chDisabled", 2), M([k], se.prototype, "chMaxControlGates", 2), M([k], se.prototype, "chMaxTargetGates", 2), M([k], se.prototype, "cnotDisabled", 2), M([k], se.prototype, "cnotMaxControlGates", 2), M([k], se.prototype, "cnotMaxTargetGates", 2), M([k], se.prototype, "cyDisabled", 2), M([k], se.prototype, "cyMaxControlGates", 2), M([k], se.prototype, "cyMaxTargetGates", 2), M([k], se.prototype, "czDisabled", 2), M([k], se.prototype, "czMaxControlGates", 2), M([k], se.prototype, "czMaxTargetGates", 2), M([k], se.prototype, "cphaseDisabled", 2), M([k], se.prototype, "cphaseMaxControlGates", 2), M([k], se.prototype, "cphaseMaxTargetGates", 2), M([k], se.prototype, "ctDisabled", 2), M([k], se.prototype, "ctMaxControlGates", 2), M([k], se.prototype, "ctMaxTargetGates", 2), M([k], se.prototype, "crnotDisabled", 2), M([k], se.prototype, "crnotMaxControlGates", 2), M([k], se.prototype, "crnotMaxTargetGates", 2), M([k], se.prototype, "crxDisabled", 2), M([k], se.prototype, "crxMaxControlGates", 2), M([k], se.prototype, "crxMaxTargetGates", 2), M([k], se.prototype, "cryDisabled", 2), M([k], se.prototype, "cryMaxControlGates", 2), M([k], se.prototype, "cryMaxTargetGates", 2), M([k], se.prototype, "crzDisabled", 2), M([k], se.prototype, "crzMaxControlGates", 2), M([k], se.prototype, "crzMaxTargetGates", 2), M([k], se.prototype, "cswapDisabled", 2), M([k], se.prototype, "cswapMaxControlGates", 2), M([k], se.prototype, "swapDisabled", 2), M([k], se.prototype, "controlControlDisabled", 2), M([k], se.prototype, "controlControlMaxTargetGates", 2), M([k], se.prototype, "phasePhaseDisabled", 2), M([k], se.prototype, "phasePhaseMaxTargetGates", 2), M([lt], se.prototype, "blocks", 2), se = M([Q], se);
var Jr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    var u;
    let n = e.data, a = this.activeStepIndex;
    switch (n.type) {
      case "step": {
        let h = this.circuit.stepAt(n.step);
        for (let b in n.blochVectors) {
          let v = parseInt(b), p = h.dropzoneAt(v).operation;
          if (Cd(p)) {
            let f = n.blochVectors[v];
            p.x = f[0], p.y = f[1], p.z = f[2];
          }
        }
        if (n.measuredBits) {
          let b = n.measuredBits;
          for (let v in b) {
            let p = parseInt(v), f = h.dropzoneAt(p).operation;
            Td(f) && (f.value = b[p].toString());
          }
        }
        for (let b of h.dropzones) {
          let v = b.operation;
          Xr(v) && v.if !== "" && (v.disabled = !n.flags[v.if]);
        }
        if (a === n.step) {
          let b = {};
          for (let v in n.amplitudes) {
            let p = n.amplitudes[v];
            b[v] = new an(p[0], p[1]);
          }
          (u = this.circleNotation) == null || u.setAmplitudes(b);
        }
        break;
      }
      case "finish": {
        for (let h of this.runCircuitButtons)
          h.running = false;
        break;
      }
      default:
        throw new st("Unknown service worker message", { data: n });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(e) {
    let n = this.activeStepIndex, a = this.circuit.serialize();
    B.need(a.length > 0, "non-zero step length");
    let u = this.circuit.toJson(), h = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: h, stepIndex: n, circuitJson: u, invalidateCaches: e, steps: a, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let e = Math.max(...this.circuit.steps.map((n) => n.maxOccupiedDropzoneBit));
    return e === 0 && (e = 1), this.circleNotation.qubitCount = e, e;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, n = this.circuit.breakpoint, a = e || n;
    return a === null && (a = this.circuit.stepAt(0), this.circuit.setBreakpoint(a)), this.circuit.fetchStepIndex(a);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    B.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "Jr");
c(Jr, "QuantumSimulatorElement"), M([k], Jr.prototype, "updateUrl", 2), M([Me], Jr.prototype, "circuit", 2), M([Me], Jr.prototype, "circleNotation", 2), M([lt], Jr.prototype, "runCircuitButtons", 2), Jr = M([Q], Jr);

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
  an as Complex
};
/*! Bundled license information:

fraction.js/fraction.js:
  (**
   * @license Fraction.js v4.2.0 05/03/2022
   * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
   *
   * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)

complex.js/complex.js:
  (**
   * @license Complex.js v2.1.1 12/05/2020
   *
   * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
   * Dual licensed under the MIT or GPL Version 2 licenses.
   **)

xstate/es/_virtual/_tslib.js:
  (*! *****************************************************************************
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
  ***************************************************************************** *)
*/
//# sourceMappingURL=application.js.map
