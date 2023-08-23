var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var ag = Object.create;
var To = Object.defineProperty;
var Tp = Object.getOwnPropertyDescriptor;
var sg = Object.getOwnPropertyNames;
var Ep = Object.getOwnPropertySymbols;
var lg = Object.getPrototypeOf;
var Cp = Object.prototype.hasOwnProperty;
var ug = Object.prototype.propertyIsEnumerable;
var Sp = /* @__PURE__ */ __name((t, r, e) => r in t ? To(t, r, { enumerable: true, configurable: true, writable: true, value: e }) : t[r] = e, "Sp");
var Op = /* @__PURE__ */ __name((t, r) => {
  for (var e in r || (r = {}))
    Cp.call(r, e) && Sp(t, e, r[e]);
  if (Ep)
    for (var e of Ep(r))
      ug.call(r, e) && Sp(t, e, r[e]);
  return t;
}, "Op");
var u = /* @__PURE__ */ __name((t, r) => To(t, "name", { value: r, configurable: true }), "u");
var Ct = /* @__PURE__ */ __name((t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports), "Ct");
var cg = /* @__PURE__ */ __name((t, r, e, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let s of sg(r))
      !Cp.call(t, s) && s !== e && To(t, s, { get: () => r[s], enumerable: !(n = Tp(r, s)) || n.enumerable });
  return t;
}, "cg");
var jt = /* @__PURE__ */ __name((t, r, e) => (e = t != null ? ag(lg(t)) : {}, cg(r || !t || !t.__esModule ? To(e, "default", { value: t, enumerable: true }) : e, t)), "jt");
var M = /* @__PURE__ */ __name((t, r, e, n) => {
  for (var s = n > 1 ? void 0 : n ? Tp(r, e) : r, a = t.length - 1, p; a >= 0; a--)
    (p = t[a]) && (s = (n ? p(r, e, s) : p(s)) || s);
  return n && s && To(r, e, s), s;
}, "M");
var Mp = /* @__PURE__ */ __name((t, r, e) => {
  if (!r.has(t))
    throw TypeError("Cannot " + e);
}, "Mp");
var Xa = /* @__PURE__ */ __name((t, r, e) => (Mp(t, r, "read from private field"), e ? e.call(t) : r.get(t)), "Xa");
var Za = /* @__PURE__ */ __name((t, r, e) => {
  if (r.has(t))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(t) : r.set(t, e);
}, "Za");
var Ka = /* @__PURE__ */ __name((t, r, e, n) => (Mp(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e), "Ka");
var Ap = Ct((Zl, Ip) => {
  (function(t) {
    "use strict";
    var r = 2e3, e = { s: 1, n: 0, d: 1 };
    function n(w, x) {
      if (isNaN(w = parseInt(w, 10)))
        throw y.InvalidParameter;
      return w * x;
    }
    __name(n, "n");
    u(n, "assign");
    function s(w, x) {
      if (x === 0)
        throw y.DivisionByZero;
      var T = Object.create(y.prototype);
      T.s = w < 0 ? -1 : 1, w = w < 0 ? -w : w;
      var C = h(w, x);
      return T.n = w / C, T.d = x / C, T;
    }
    __name(s, "s");
    u(s, "newFraction");
    function a(w) {
      for (var x = {}, T = w, C = 2, R = 4; R <= T; ) {
        for (; T % C === 0; )
          T /= C, x[C] = (x[C] || 0) + 1;
        R += 1 + 2 * C++;
      }
      return T !== w ? T > 1 && (x[T] = (x[T] || 0) + 1) : x[w] = (x[w] || 0) + 1, x;
    }
    __name(a, "a");
    u(a, "factorize");
    var p = u(function(w, x) {
      var T = 0, C = 1, R = 1, _ = 0, L = 0, $ = 0, A = 1, ee = 1, z = 0, H = 1, te = 1, Q = 1, ue = 1e7, K;
      if (w != null)
        if (x !== void 0) {
          if (T = w, C = x, R = T * C, T % 1 !== 0 || C % 1 !== 0)
            throw y.NonIntegerParameter;
        } else
          switch (typeof w) {
            case "object": {
              if ("d" in w && "n" in w)
                T = w.n, C = w.d, "s" in w && (T *= w.s);
              else if (0 in w)
                T = w[0], 1 in w && (C = w[1]);
              else
                throw y.InvalidParameter;
              R = T * C;
              break;
            }
            case "number": {
              if (w < 0 && (R = w, w = -w), w % 1 === 0)
                T = w;
              else if (w > 0) {
                for (w >= 1 && (ee = Math.pow(10, Math.floor(1 + Math.log(w) / Math.LN10)), w /= ee); H <= ue && Q <= ue; )
                  if (K = (z + te) / (H + Q), w === K) {
                    H + Q <= ue ? (T = z + te, C = H + Q) : Q > H ? (T = te, C = Q) : (T = z, C = H);
                    break;
                  } else
                    w > K ? (z += te, H += Q) : (te += z, Q += H), H > ue ? (T = te, C = Q) : (T = z, C = H);
                T *= ee;
              } else
                (isNaN(w) || isNaN(x)) && (C = T = NaN);
              break;
            }
            case "string": {
              if (H = w.match(/\d+|./g), H === null)
                throw y.InvalidParameter;
              if (H[z] === "-" ? (R = -1, z++) : H[z] === "+" && z++, H.length === z + 1 ? L = n(H[z++], R) : H[z + 1] === "." || H[z] === "." ? (H[z] !== "." && (_ = n(H[z++], R)), z++, (z + 1 === H.length || H[z + 1] === "(" && H[z + 3] === ")" || H[z + 1] === "'" && H[z + 3] === "'") && (L = n(H[z], R), A = Math.pow(10, H[z].length), z++), (H[z] === "(" && H[z + 2] === ")" || H[z] === "'" && H[z + 2] === "'") && ($ = n(H[z + 1], R), ee = Math.pow(10, H[z + 1].length) - 1, z += 3)) : H[z + 1] === "/" || H[z + 1] === ":" ? (L = n(H[z], R), A = n(H[z + 2], 1), z += 3) : H[z + 3] === "/" && H[z + 1] === " " && (_ = n(H[z], R), L = n(H[z + 2], R), A = n(H[z + 4], 1), z += 5), H.length <= z) {
                C = A * ee, R = T = $ + C * _ + ee * L;
                break;
              }
            }
            default:
              throw y.InvalidParameter;
          }
      if (C === 0)
        throw y.DivisionByZero;
      e.s = R < 0 ? -1 : 1, e.n = Math.abs(T), e.d = Math.abs(C);
    }, "parse");
    function v(w, x, T) {
      for (var C = 1; x > 0; w = w * w % T, x >>= 1)
        x & 1 && (C = C * w % T);
      return C;
    }
    __name(v, "v");
    u(v, "modpow");
    function m(w, x) {
      for (; x % 2 === 0; x /= 2)
        ;
      for (; x % 5 === 0; x /= 5)
        ;
      if (x === 1)
        return 0;
      for (var T = 10 % x, C = 1; T !== 1; C++)
        if (T = T * 10 % x, C > r)
          return 0;
      return C;
    }
    __name(m, "m");
    u(m, "cycleLen");
    function d(w, x, T) {
      for (var C = 1, R = v(10, T, x), _ = 0; _ < 300; _++) {
        if (C === R)
          return _;
        C = C * 10 % x, R = R * 10 % x;
      }
      return 0;
    }
    __name(d, "d");
    u(d, "cycleStart");
    function h(w, x) {
      if (!w)
        return x;
      if (!x)
        return w;
      for (; ; ) {
        if (w %= x, !w)
          return x;
        if (x %= w, !x)
          return w;
      }
    }
    __name(h, "h");
    u(h, "gcd");
    function y(w, x) {
      if (p(w, x), this instanceof y)
        w = h(e.d, e.n), this.s = e.s, this.n = e.n / w, this.d = e.d / w;
      else
        return s(e.s * e.n, e.d);
    }
    __name(y, "y");
    u(y, "Fraction"), y.DivisionByZero = new Error("Division by Zero"), y.InvalidParameter = new Error("Invalid argument"), y.NonIntegerParameter = new Error("Parameters must be integer"), y.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return s(this.n, this.d);
    }, neg: function() {
      return s(-this.s * this.n, this.d);
    }, add: function(w, x) {
      return p(w, x), s(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(w, x) {
      return p(w, x), s(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(w, x) {
      return p(w, x), s(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(w, x) {
      return p(w, x), s(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return s(this.s * this.n, this.d);
    }, mod: function(w, x) {
      if (isNaN(this.n) || isNaN(this.d))
        return new y(NaN);
      if (w === void 0)
        return s(this.s * this.n % this.d, 1);
      if (p(w, x), e.n === 0 && this.d === 0)
        throw y.DivisionByZero;
      return s(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(w, x) {
      return p(w, x), s(h(e.n, this.n) * h(e.d, this.d), e.d * this.d);
    }, lcm: function(w, x) {
      return p(w, x), e.n === 0 && this.n === 0 ? s(0, 1) : s(e.n * this.n, h(e.n, this.n) * h(e.d, this.d));
    }, ceil: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : s(Math.ceil(w * this.s * this.n / this.d), w);
    }, floor: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : s(Math.floor(w * this.s * this.n / this.d), w);
    }, round: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : s(Math.round(w * this.s * this.n / this.d), w);
    }, inverse: function() {
      return s(this.s * this.d, this.n);
    }, pow: function(w, x) {
      if (p(w, x), e.d === 1)
        return e.s < 0 ? s(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : s(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var T = a(this.n), C = a(this.d), R = 1, _ = 1;
      for (var L in T)
        if (L !== "1") {
          if (L === "0") {
            R = 0;
            break;
          }
          if (T[L] *= e.n, T[L] % e.d === 0)
            T[L] /= e.d;
          else
            return null;
          R *= Math.pow(L, T[L]);
        }
      for (var L in C)
        if (L !== "1") {
          if (C[L] *= e.n, C[L] % e.d === 0)
            C[L] /= e.d;
          else
            return null;
          _ *= Math.pow(L, C[L]);
        }
      return e.s < 0 ? s(_, R) : s(R, _);
    }, equals: function(w, x) {
      return p(w, x), this.s * this.n * e.d === e.s * e.n * this.d;
    }, compare: function(w, x) {
      p(w, x);
      var T = this.s * this.n * e.d - e.s * e.n * this.d;
      return (0 < T) - (T < 0);
    }, simplify: function(w) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      w = w || 1e-3;
      for (var x = this.abs(), T = x.toContinued(), C = 1; C < T.length; C++) {
        for (var R = s(T[C - 1], 1), _ = C - 2; _ >= 0; _--)
          R = R.inverse().add(T[_]);
        if (R.sub(x).abs().valueOf() < w)
          return R.mul(this.s);
      }
      return this;
    }, divisible: function(w, x) {
      return p(w, x), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(w) {
      var x, T = "", C = this.n, R = this.d;
      return this.s < 0 && (T += "-"), R === 1 ? T += C : (w && (x = Math.floor(C / R)) > 0 && (T += x, T += " ", C %= R), T += C, T += "/", T += R), T;
    }, toLatex: function(w) {
      var x, T = "", C = this.n, R = this.d;
      return this.s < 0 && (T += "-"), R === 1 ? T += C : (w && (x = Math.floor(C / R)) > 0 && (T += x, C %= R), T += "\\frac{", T += C, T += "}{", T += R, T += "}"), T;
    }, toContinued: function() {
      var w, x = this.n, T = this.d, C = [];
      if (isNaN(x) || isNaN(T))
        return C;
      do
        C.push(Math.floor(x / T)), w = x % T, x = T, T = w;
      while (x !== 1);
      return C;
    }, toString: function(w) {
      var x = this.n, T = this.d;
      if (isNaN(x) || isNaN(T))
        return "NaN";
      w = w || 15;
      var C = m(x, T), R = d(x, T, C), _ = this.s < 0 ? "-" : "";
      if (_ += x / T | 0, x %= T, x *= 10, x && (_ += "."), C) {
        for (var L = R; L--; )
          _ += x / T | 0, x %= T, x *= 10;
        _ += "(";
        for (var L = C; L--; )
          _ += x / T | 0, x %= T, x *= 10;
        _ += ")";
      } else
        for (var L = w; x && L--; )
          _ += x / T | 0, x %= T, x *= 10;
      return _;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return y;
    }) : typeof Zl == "object" ? (Object.defineProperty(y, "__esModule", { value: true }), y.default = y, y.Fraction = y, Ip.exports = y) : t.Fraction = y;
  })(Zl);
});
var kp = Ct((j0, Rp) => {
  "use strict";
  var Pp = u((t = 0) => (r) => `\x1B[${38 + t};5;${r}m`, "wrapAnsi256"), zp = u((t = 0) => (r, e, n) => `\x1B[${38 + t};2;${r};${e};${n}m`, "wrapAnsi16m");
  function pg() {
    let t = /* @__PURE__ */ new Map(), r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    r.color.gray = r.color.blackBright, r.bgColor.bgGray = r.bgColor.bgBlackBright, r.color.grey = r.color.blackBright, r.bgColor.bgGrey = r.bgColor.bgBlackBright;
    for (let [e, n] of Object.entries(r)) {
      for (let [s, a] of Object.entries(n))
        r[s] = { open: `\x1B[${a[0]}m`, close: `\x1B[${a[1]}m` }, n[s] = r[s], t.set(a[0], a[1]);
      Object.defineProperty(r, e, { value: n, enumerable: false });
    }
    return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi256 = Pp(), r.color.ansi16m = zp(), r.bgColor.ansi256 = Pp(10), r.bgColor.ansi16m = zp(10), Object.defineProperties(r, { rgbToAnsi256: { value: (e, n, s) => e === n && n === s ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(s / 255 * 5), enumerable: false }, hexToRgb: { value: (e) => {
      let n = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(e.toString(16));
      if (!n)
        return [0, 0, 0];
      let { colorString: s } = n.groups;
      s.length === 3 && (s = s.split("").map((p) => p + p).join(""));
      let a = Number.parseInt(s, 16);
      return [a >> 16 & 255, a >> 8 & 255, a & 255];
    }, enumerable: false }, hexToAnsi256: { value: (e) => r.rgbToAnsi256(...r.hexToRgb(e)), enumerable: false } }), r;
  }
  __name(pg, "pg");
  u(pg, "assembleStyles");
  Object.defineProperty(Rp, "exports", { enumerable: true, get: pg });
});
var Co = Ct((zi) => {
  "use strict";
  Object.defineProperty(zi, "__esModule", { value: true });
  zi.printIteratorEntries = fg;
  zi.printIteratorValues = hg;
  zi.printListItems = mg;
  zi.printObjectProperties = vg;
  var dg = u((t, r) => {
    let e = Object.keys(t), n = r !== null ? e.sort(r) : e;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((s) => {
      Object.getOwnPropertyDescriptor(t, s).enumerable && n.push(s);
    }), n;
  }, "getKeysOfEnumerableProperties");
  function fg(t, r, e, n, s, a, p = ": ") {
    let v = "", m = 0, d = t.next();
    if (!d.done) {
      v += r.spacingOuter;
      let h = e + r.indent;
      for (; !d.done; ) {
        if (v += h, m++ === r.maxWidth) {
          v += "\u2026";
          break;
        }
        let y = a(d.value[0], r, h, n, s), w = a(d.value[1], r, h, n, s);
        v += y + p + w, d = t.next(), d.done ? r.min || (v += ",") : v += `,${r.spacingInner}`;
      }
      v += r.spacingOuter + e;
    }
    return v;
  }
  __name(fg, "fg");
  u(fg, "printIteratorEntries");
  function hg(t, r, e, n, s, a) {
    let p = "", v = 0, m = t.next();
    if (!m.done) {
      p += r.spacingOuter;
      let d = e + r.indent;
      for (; !m.done; ) {
        if (p += d, v++ === r.maxWidth) {
          p += "\u2026";
          break;
        }
        p += a(m.value, r, d, n, s), m = t.next(), m.done ? r.min || (p += ",") : p += `,${r.spacingInner}`;
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(hg, "hg");
  u(hg, "printIteratorValues");
  function mg(t, r, e, n, s, a) {
    let p = "";
    if (t.length) {
      p += r.spacingOuter;
      let v = e + r.indent;
      for (let m = 0; m < t.length; m++) {
        if (p += v, m === r.maxWidth) {
          p += "\u2026";
          break;
        }
        m in t && (p += a(t[m], r, v, n, s)), m < t.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(mg, "mg");
  u(mg, "printListItems");
  function vg(t, r, e, n, s, a) {
    let p = "", v = dg(t, r.compareKeys);
    if (v.length) {
      p += r.spacingOuter;
      let m = e + r.indent;
      for (let d = 0; d < v.length; d++) {
        let h = v[d], y = a(h, r, m, n, s), w = a(t[h], r, m, n, s);
        p += `${m + y}: ${w}`, d < v.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(vg, "vg");
  u(vg, "printObjectProperties");
});
var Lp = Ct((wn) => {
  "use strict";
  Object.defineProperty(wn, "__esModule", { value: true });
  wn.test = wn.serialize = wn.default = void 0;
  var Dp = Co(), Kl = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, gg = typeof Kl == "function" && Kl.for ? Kl.for("jest.asymmetricMatcher") : 1267621, Ja = " ", Np = u((t, r, e, n, s, a) => {
    let p = t.toString();
    if (p === "ArrayContaining" || p === "ArrayNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Ja}[${(0, Dp.printListItems)(t.sample, r, e, n, s, a)}]`;
    if (p === "ObjectContaining" || p === "ObjectNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Ja}{${(0, Dp.printObjectProperties)(t.sample, r, e, n, s, a)}}`;
    if (p === "StringMatching" || p === "StringNotMatching" || p === "StringContaining" || p === "StringNotContaining")
      return p + Ja + a(t.sample, r, e, n, s);
    if (typeof t.toAsymmetricMatcher != "function")
      throw new Error(`Asymmetric matcher ${t.constructor.name} does not implement toAsymmetricMatcher()`);
    return t.toAsymmetricMatcher();
  }, "serialize");
  wn.serialize = Np;
  var _p = u((t) => t && t.$$typeof === gg, "test");
  wn.test = _p;
  var bg = { serialize: Np, test: _p }, yg = bg;
  wn.default = yg;
});
var $p = Ct((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.test = xn.serialize = xn.default = void 0;
  var Gp = Co(), wg = " ", jp = ["DOMStringMap", "NamedNodeMap"], xg = /^(HTML\w*Collection|NodeList)$/, Eg = u((t) => jp.indexOf(t) !== -1 || xg.test(t), "testName"), Hp = u((t) => t && t.constructor && !!t.constructor.name && Eg(t.constructor.name), "test");
  xn.test = Hp;
  var Sg = u((t) => t.constructor.name === "NamedNodeMap", "isNamedNodeMap"), Bp = u((t, r, e, n, s, a) => {
    let p = t.constructor.name;
    return ++n > r.maxDepth ? `[${p}]` : (r.min ? "" : p + wg) + (jp.indexOf(p) !== -1 ? `{${(0, Gp.printObjectProperties)(Sg(t) ? Array.from(t).reduce((v, m) => (v[m.name] = m.value, v), {}) : Op({}, t), r, e, n, s, a)}}` : `[${(0, Gp.printListItems)(Array.from(t), r, e, n, s, a)}]`);
  }, "serialize");
  xn.serialize = Bp;
  var Tg = { serialize: Bp, test: Hp }, Cg = Tg;
  xn.default = Cg;
});
var qp = Ct((Jl) => {
  "use strict";
  Object.defineProperty(Jl, "__esModule", { value: true });
  Jl.default = Og;
  function Og(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  __name(Og, "Og");
  u(Og, "escapeHTML");
});
var Qa = Ct((rr) => {
  "use strict";
  Object.defineProperty(rr, "__esModule", { value: true });
  rr.printText = rr.printProps = rr.printElementAsLeaf = rr.printElement = rr.printComment = rr.printChildren = void 0;
  var Fp = Mg(qp());
  function Mg(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(Mg, "Mg");
  u(Mg, "_interopRequireDefault");
  var Ig = u((t, r, e, n, s, a, p) => {
    let v = n + e.indent, m = e.colors;
    return t.map((d) => {
      let h = r[d], y = p(h, e, v, s, a);
      return typeof h != "string" && (y.indexOf(`
`) !== -1 && (y = e.spacingOuter + v + y + e.spacingOuter + n), y = `{${y}}`), `${e.spacingInner + n + m.prop.open + d + m.prop.close}=${m.value.open}${y}${m.value.close}`;
    }).join("");
  }, "printProps");
  rr.printProps = Ig;
  var Ag = u((t, r, e, n, s, a) => t.map((p) => r.spacingOuter + e + (typeof p == "string" ? Up(p, r) : a(p, r, e, n, s))).join(""), "printChildren");
  rr.printChildren = Ag;
  var Up = u((t, r) => {
    let e = r.colors.content;
    return e.open + (0, Fp.default)(t) + e.close;
  }, "printText");
  rr.printText = Up;
  var Pg = u((t, r) => {
    let e = r.colors.comment;
    return `${e.open}<!--${(0, Fp.default)(t)}-->${e.close}`;
  }, "printComment");
  rr.printComment = Pg;
  var zg = u((t, r, e, n, s) => {
    let a = n.colors.tag;
    return `${a.open}<${t}${r && a.close + r + n.spacingOuter + s + a.open}${e ? `>${a.close}${e}${n.spacingOuter}${s}${a.open}</${t}` : `${r && !n.min ? "" : " "}/`}>${a.close}`;
  }, "printElement");
  rr.printElement = zg;
  var Rg = u((t, r) => {
    let e = r.colors.tag;
    return `${e.open}<${t}${e.close} \u2026${e.open} />${e.close}`;
  }, "printElementAsLeaf");
  rr.printElementAsLeaf = Rg;
});
var Kp = Ct((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: true });
  En.test = En.serialize = En.default = void 0;
  var Ri = Qa(), kg = 1, Wp = 3, Vp = 8, Yp = 11, Dg = /^((HTML|SVG)\w*)?Element$/, Ng = u((t) => {
    try {
      return typeof t.hasAttribute == "function" && t.hasAttribute("is");
    } catch (r) {
      return false;
    }
  }, "testHasAttribute"), _g = u((t) => {
    let r = t.constructor.name, { nodeType: e, tagName: n } = t, s = typeof n == "string" && n.includes("-") || Ng(t);
    return e === kg && (Dg.test(r) || s) || e === Wp && r === "Text" || e === Vp && r === "Comment" || e === Yp && r === "DocumentFragment";
  }, "testNode"), Xp = u((t) => {
    var r;
    return ((r = t == null ? void 0 : t.constructor) == null ? void 0 : r.name) && _g(t);
  }, "test");
  En.test = Xp;
  function Lg(t) {
    return t.nodeType === Wp;
  }
  __name(Lg, "Lg");
  u(Lg, "nodeIsText");
  function Gg(t) {
    return t.nodeType === Vp;
  }
  __name(Gg, "Gg");
  u(Gg, "nodeIsComment");
  function Ql(t) {
    return t.nodeType === Yp;
  }
  __name(Ql, "Ql");
  u(Ql, "nodeIsFragment");
  var Zp = u((t, r, e, n, s, a) => {
    if (Lg(t))
      return (0, Ri.printText)(t.data, r);
    if (Gg(t))
      return (0, Ri.printComment)(t.data, r);
    let p = Ql(t) ? "DocumentFragment" : t.tagName.toLowerCase();
    return ++n > r.maxDepth ? (0, Ri.printElementAsLeaf)(p, r) : (0, Ri.printElement)(p, (0, Ri.printProps)(Ql(t) ? [] : Array.from(t.attributes).map((v) => v.name).sort(), Ql(t) ? {} : Array.from(t.attributes).reduce((v, m) => (v[m.name] = m.value, v), {}), r, e + r.indent, n, s, a), (0, Ri.printChildren)(Array.prototype.slice.call(t.childNodes || t.children), r, e + r.indent, n, s, a), r, e);
  }, "serialize");
  En.serialize = Zp;
  var jg = { serialize: Zp, test: Xp }, Hg = jg;
  En.default = Hg;
});
var rd = Ct((Sn) => {
  "use strict";
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.test = Sn.serialize = Sn.default = void 0;
  var Oo = Co(), Bg = "@@__IMMUTABLE_ITERABLE__@@", $g = "@@__IMMUTABLE_LIST__@@", qg = "@@__IMMUTABLE_KEYED__@@", Fg = "@@__IMMUTABLE_MAP__@@", Jp = "@@__IMMUTABLE_ORDERED__@@", Ug = "@@__IMMUTABLE_RECORD__@@", Wg = "@@__IMMUTABLE_SEQ__@@", Vg = "@@__IMMUTABLE_SET__@@", Yg = "@@__IMMUTABLE_STACK__@@", ki = u((t) => `Immutable.${t}`, "getImmutableName"), es = u((t) => `[${t}]`, "printAsLeaf"), Mo = " ", Qp = "\u2026", Xg = u((t, r, e, n, s, a, p) => ++n > r.maxDepth ? es(ki(p)) : `${ki(p) + Mo}{${(0, Oo.printIteratorEntries)(t.entries(), r, e, n, s, a)}}`, "printImmutableEntries");
  function Zg(t) {
    let r = 0;
    return { next() {
      if (r < t._keys.length) {
        let e = t._keys[r++];
        return { done: false, value: [e, t.get(e)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  __name(Zg, "Zg");
  u(Zg, "getRecordEntries");
  var Kg = u((t, r, e, n, s, a) => {
    let p = ki(t._name || "Record");
    return ++n > r.maxDepth ? es(p) : `${p + Mo}{${(0, Oo.printIteratorEntries)(Zg(t), r, e, n, s, a)}}`;
  }, "printImmutableRecord"), Jg = u((t, r, e, n, s, a) => {
    let p = ki("Seq");
    return ++n > r.maxDepth ? es(p) : t[qg] ? `${p + Mo}{${t._iter || t._object ? (0, Oo.printIteratorEntries)(t.entries(), r, e, n, s, a) : Qp}}` : `${p + Mo}[${t._iter || t._array || t._collection || t._iterable ? (0, Oo.printIteratorValues)(t.values(), r, e, n, s, a) : Qp}]`;
  }, "printImmutableSeq"), eu = u((t, r, e, n, s, a, p) => ++n > r.maxDepth ? es(ki(p)) : `${ki(p) + Mo}[${(0, Oo.printIteratorValues)(t.values(), r, e, n, s, a)}]`, "printImmutableValues"), ed = u((t, r, e, n, s, a) => t[Fg] ? Xg(t, r, e, n, s, a, t[Jp] ? "OrderedMap" : "Map") : t[$g] ? eu(t, r, e, n, s, a, "List") : t[Vg] ? eu(t, r, e, n, s, a, t[Jp] ? "OrderedSet" : "Set") : t[Yg] ? eu(t, r, e, n, s, a, "Stack") : t[Wg] ? Jg(t, r, e, n, s, a) : Kg(t, r, e, n, s, a), "serialize");
  Sn.serialize = ed;
  var td = u((t) => t && (t[Bg] === true || t[Ug] === true), "test");
  Sn.test = td;
  var Qg = { serialize: ed, test: td }, eb = Qg;
  Sn.default = eb;
});
var id = Ct((Le) => {
  "use strict";
  var tu = Symbol.for("react.element"), ru = Symbol.for("react.portal"), ts = Symbol.for("react.fragment"), rs = Symbol.for("react.strict_mode"), ns = Symbol.for("react.profiler"), is = Symbol.for("react.provider"), os = Symbol.for("react.context"), tb = Symbol.for("react.server_context"), as = Symbol.for("react.forward_ref"), ss = Symbol.for("react.suspense"), ls = Symbol.for("react.suspense_list"), us = Symbol.for("react.memo"), cs = Symbol.for("react.lazy"), rb = Symbol.for("react.offscreen"), nd;
  nd = Symbol.for("react.module.reference");
  function xr(t) {
    if (typeof t == "object" && t !== null) {
      var r = t.$$typeof;
      switch (r) {
        case tu:
          switch (t = t.type, t) {
            case ts:
            case ns:
            case rs:
            case ss:
            case ls:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case tb:
                case os:
                case as:
                case cs:
                case us:
                case is:
                  return t;
                default:
                  return r;
              }
          }
        case ru:
          return r;
      }
    }
  }
  __name(xr, "xr");
  u(xr, "v");
  Le.ContextConsumer = os;
  Le.ContextProvider = is;
  Le.Element = tu;
  Le.ForwardRef = as;
  Le.Fragment = ts;
  Le.Lazy = cs;
  Le.Memo = us;
  Le.Portal = ru;
  Le.Profiler = ns;
  Le.StrictMode = rs;
  Le.Suspense = ss;
  Le.SuspenseList = ls;
  Le.isAsyncMode = function() {
    return false;
  };
  Le.isConcurrentMode = function() {
    return false;
  };
  Le.isContextConsumer = function(t) {
    return xr(t) === os;
  };
  Le.isContextProvider = function(t) {
    return xr(t) === is;
  };
  Le.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === tu;
  };
  Le.isForwardRef = function(t) {
    return xr(t) === as;
  };
  Le.isFragment = function(t) {
    return xr(t) === ts;
  };
  Le.isLazy = function(t) {
    return xr(t) === cs;
  };
  Le.isMemo = function(t) {
    return xr(t) === us;
  };
  Le.isPortal = function(t) {
    return xr(t) === ru;
  };
  Le.isProfiler = function(t) {
    return xr(t) === ns;
  };
  Le.isStrictMode = function(t) {
    return xr(t) === rs;
  };
  Le.isSuspense = function(t) {
    return xr(t) === ss;
  };
  Le.isSuspenseList = function(t) {
    return xr(t) === ls;
  };
  Le.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === ts || t === ns || t === rs || t === ss || t === ls || t === rb || typeof t == "object" && t !== null && (t.$$typeof === cs || t.$$typeof === us || t.$$typeof === is || t.$$typeof === os || t.$$typeof === as || t.$$typeof === nd || t.getModuleId !== void 0);
  };
  Le.typeOf = xr;
});
var ad = Ct((nw, od) => {
  "use strict";
  od.exports = id();
});
var dd = Ct((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.test = Tn.serialize = Tn.default = void 0;
  var Yn = nb(ad()), ps = Qa();
  function ld(t) {
    if (typeof WeakMap != "function")
      return null;
    var r = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
    return (ld = u(function(n) {
      return n ? e : r;
    }, "_getRequireWildcardCache"))(t);
  }
  __name(ld, "ld");
  u(ld, "_getRequireWildcardCache");
  function nb(t, r) {
    if (!r && t && t.__esModule)
      return t;
    if (t === null || typeof t != "object" && typeof t != "function")
      return { default: t };
    var e = ld(r);
    if (e && e.has(t))
      return e.get(t);
    var n = {}, s = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var a in t)
      if (a !== "default" && Object.prototype.hasOwnProperty.call(t, a)) {
        var p = s ? Object.getOwnPropertyDescriptor(t, a) : null;
        p && (p.get || p.set) ? Object.defineProperty(n, a, p) : n[a] = t[a];
      }
    return n.default = t, e && e.set(t, n), n;
  }
  __name(nb, "nb");
  u(nb, "_interopRequireWildcard");
  var ud = u((t, r = []) => (Array.isArray(t) ? t.forEach((e) => {
    ud(e, r);
  }) : t != null && t !== false && r.push(t), r), "getChildren"), sd = u((t) => {
    let r = t.type;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r.displayName || r.name || "Unknown";
    if (Yn.isFragment(t))
      return "React.Fragment";
    if (Yn.isSuspense(t))
      return "React.Suspense";
    if (typeof r == "object" && r !== null) {
      if (Yn.isContextProvider(t))
        return "Context.Provider";
      if (Yn.isContextConsumer(t))
        return "Context.Consumer";
      if (Yn.isForwardRef(t)) {
        if (r.displayName)
          return r.displayName;
        let e = r.render.displayName || r.render.name || "";
        return e !== "" ? `ForwardRef(${e})` : "ForwardRef";
      }
      if (Yn.isMemo(t)) {
        let e = r.displayName || r.type.displayName || r.type.name || "";
        return e !== "" ? `Memo(${e})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, "getType"), ib = u((t) => {
    let { props: r } = t;
    return Object.keys(r).filter((e) => e !== "children" && r[e] !== void 0).sort();
  }, "getPropKeys"), cd = u((t, r, e, n, s, a) => ++n > r.maxDepth ? (0, ps.printElementAsLeaf)(sd(t), r) : (0, ps.printElement)(sd(t), (0, ps.printProps)(ib(t), t.props, r, e + r.indent, n, s, a), (0, ps.printChildren)(ud(t.props.children), r, e + r.indent, n, s, a), r, e), "serialize");
  Tn.serialize = cd;
  var pd = u((t) => t != null && Yn.isElement(t), "test");
  Tn.test = pd;
  var ob = { serialize: cd, test: pd }, ab = ob;
  Tn.default = ab;
});
var md = Ct((Cn) => {
  "use strict";
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.test = Cn.serialize = Cn.default = void 0;
  var ds = Qa(), nu = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, sb = typeof nu == "function" && nu.for ? nu.for("react.test.json") : 245830487, lb = u((t) => {
    let { props: r } = t;
    return r ? Object.keys(r).filter((e) => r[e] !== void 0).sort() : [];
  }, "getPropKeys"), fd = u((t, r, e, n, s, a) => ++n > r.maxDepth ? (0, ds.printElementAsLeaf)(t.type, r) : (0, ds.printElement)(t.type, t.props ? (0, ds.printProps)(lb(t), t.props, r, e + r.indent, n, s, a) : "", t.children ? (0, ds.printChildren)(t.children, r, e + r.indent, n, s, a) : "", r, e), "serialize");
  Cn.serialize = fd;
  var hd = u((t) => t && t.$$typeof === sb, "test");
  Cn.test = hd;
  var ub = { serialize: fd, test: hd }, cb = ub;
  Cn.default = cb;
});
var rn = Ct((tn) => {
  "use strict";
  Object.defineProperty(tn, "__esModule", { value: true });
  tn.default = tn.DEFAULT_OPTIONS = void 0;
  tn.format = Pd;
  tn.plugins = void 0;
  var pb = Xn(kp()), Io = Co(), db = Xn(Lp()), fb = Xn($p()), hb = Xn(Kp()), mb = Xn(rd()), vb = Xn(dd()), gb = Xn(md());
  function Xn(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(Xn, "Xn");
  u(Xn, "_interopRequireDefault");
  var xd = Object.prototype.toString, bb = Date.prototype.toISOString, yb = Error.prototype.toString, vd = RegExp.prototype.toString, iu = u((t) => typeof t.constructor == "function" && t.constructor.name || "Object", "getConstructorName"), wb = u((t) => typeof window != "undefined" && t === window, "isWindow"), xb = /^Symbol\((.*)\)(.*)$/, Eb = /\n/gi, au = class au extends Error {
    static {
      __name(this, "au");
    }
    constructor(r, e) {
      super(r), this.stack = e, this.name = this.constructor.name;
    }
  };
  u(au, "PrettyFormatPluginError");
  var fs = au;
  function Sb(t) {
    return t === "[object Array]" || t === "[object ArrayBuffer]" || t === "[object DataView]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object Int8Array]" || t === "[object Int16Array]" || t === "[object Int32Array]" || t === "[object Uint8Array]" || t === "[object Uint8ClampedArray]" || t === "[object Uint16Array]" || t === "[object Uint32Array]";
  }
  __name(Sb, "Sb");
  u(Sb, "isToStringedArrayType");
  function Tb(t) {
    return Object.is(t, -0) ? "-0" : String(t);
  }
  __name(Tb, "Tb");
  u(Tb, "printNumber");
  function Cb(t) {
    return `${t}n`;
  }
  __name(Cb, "Cb");
  u(Cb, "printBigInt");
  function gd(t, r) {
    return r ? `[Function ${t.name || "anonymous"}]` : "[Function]";
  }
  __name(gd, "gd");
  u(gd, "printFunction");
  function bd(t) {
    return String(t).replace(xb, "Symbol($1)");
  }
  __name(bd, "bd");
  u(bd, "printSymbol");
  function yd(t) {
    return `[${yb.call(t)}]`;
  }
  __name(yd, "yd");
  u(yd, "printError");
  function Ed(t, r, e, n) {
    if (t === true || t === false)
      return `${t}`;
    if (t === void 0)
      return "undefined";
    if (t === null)
      return "null";
    let s = typeof t;
    if (s === "number")
      return Tb(t);
    if (s === "bigint")
      return Cb(t);
    if (s === "string")
      return n ? `"${t.replace(/"|\\/g, "\\$&")}"` : `"${t}"`;
    if (s === "function")
      return gd(t, r);
    if (s === "symbol")
      return bd(t);
    let a = xd.call(t);
    return a === "[object WeakMap]" ? "WeakMap {}" : a === "[object WeakSet]" ? "WeakSet {}" : a === "[object Function]" || a === "[object GeneratorFunction]" ? gd(t, r) : a === "[object Symbol]" ? bd(t) : a === "[object Date]" ? isNaN(+t) ? "Date { NaN }" : bb.call(t) : a === "[object Error]" ? yd(t) : a === "[object RegExp]" ? e ? vd.call(t).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : vd.call(t) : t instanceof Error ? yd(t) : null;
  }
  __name(Ed, "Ed");
  u(Ed, "printBasicValue");
  function Sd(t, r, e, n, s, a) {
    if (s.indexOf(t) !== -1)
      return "[Circular]";
    s = s.slice(), s.push(t);
    let p = ++n > r.maxDepth, v = r.min;
    if (r.callToJSON && !p && t.toJSON && typeof t.toJSON == "function" && !a)
      return On(t.toJSON(), r, e, n, s, true);
    let m = xd.call(t);
    return m === "[object Arguments]" ? p ? "[Arguments]" : `${v ? "" : "Arguments "}[${(0, Io.printListItems)(t, r, e, n, s, On)}]` : Sb(m) ? p ? `[${t.constructor.name}]` : `${v || !r.printBasicPrototype && t.constructor.name === "Array" ? "" : `${t.constructor.name} `}[${(0, Io.printListItems)(t, r, e, n, s, On)}]` : m === "[object Map]" ? p ? "[Map]" : `Map {${(0, Io.printIteratorEntries)(t.entries(), r, e, n, s, On, " => ")}}` : m === "[object Set]" ? p ? "[Set]" : `Set {${(0, Io.printIteratorValues)(t.values(), r, e, n, s, On)}}` : p || wb(t) ? `[${iu(t)}]` : `${v || !r.printBasicPrototype && iu(t) === "Object" ? "" : `${iu(t)} `}{${(0, Io.printObjectProperties)(t, r, e, n, s, On)}}`;
  }
  __name(Sd, "Sd");
  u(Sd, "printComplexValue");
  function Ob(t) {
    return t.serialize != null;
  }
  __name(Ob, "Ob");
  u(Ob, "isNewPlugin");
  function Td(t, r, e, n, s, a) {
    let p;
    try {
      p = Ob(t) ? t.serialize(r, e, n, s, a, On) : t.print(r, (v) => On(v, e, n, s, a), (v) => {
        let m = n + e.indent;
        return m + v.replace(Eb, `
${m}`);
      }, { edgeSpacing: e.spacingOuter, min: e.min, spacing: e.spacingInner }, e.colors);
    } catch (v) {
      throw new fs(v.message, v.stack);
    }
    if (typeof p != "string")
      throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);
    return p;
  }
  __name(Td, "Td");
  u(Td, "printPlugin");
  function Cd(t, r) {
    for (let e = 0; e < t.length; e++)
      try {
        if (t[e].test(r))
          return t[e];
      } catch (n) {
        throw new fs(n.message, n.stack);
      }
    return null;
  }
  __name(Cd, "Cd");
  u(Cd, "findPlugin");
  function On(t, r, e, n, s, a) {
    let p = Cd(r.plugins, t);
    if (p !== null)
      return Td(p, t, r, e, n, s);
    let v = Ed(t, r.printFunctionName, r.escapeRegex, r.escapeString);
    return v !== null ? v : Sd(t, r, e, n, s, a);
  }
  __name(On, "On");
  u(On, "printer");
  var ou = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, Od = Object.keys(ou), Mb = u((t) => t, "toOptionsSubtype"), Er = Mb({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: ou });
  tn.DEFAULT_OPTIONS = Er;
  function Ib(t) {
    if (Object.keys(t).forEach((r) => {
      if (!Object.prototype.hasOwnProperty.call(Er, r))
        throw new Error(`pretty-format: Unknown option "${r}".`);
    }), t.min && t.indent !== void 0 && t.indent !== 0)
      throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
    if (t.theme !== void 0) {
      if (t.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof t.theme != "object")
        throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof t.theme}".`);
    }
  }
  __name(Ib, "Ib");
  u(Ib, "validateOptions");
  var Ab = u((t) => Od.reduce((r, e) => {
    let n = t.theme && t.theme[e] !== void 0 ? t.theme[e] : ou[e], s = n && pb.default[n];
    if (s && typeof s.close == "string" && typeof s.open == "string")
      r[e] = s;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${e}" whose value "${n}" is undefined in ansi-styles.`);
    return r;
  }, /* @__PURE__ */ Object.create(null)), "getColorsHighlight"), Pb = u(() => Od.reduce((t, r) => (t[r] = { close: "", open: "" }, t), /* @__PURE__ */ Object.create(null)), "getColorsEmpty"), Md = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.printFunctionName) != null ? r : Er.printFunctionName;
  }, "getPrintFunctionName"), Id = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeRegex) != null ? r : Er.escapeRegex;
  }, "getEscapeRegex"), Ad = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeString) != null ? r : Er.escapeString;
  }, "getEscapeString"), wd = u((t) => {
    var r, e, n, s, a, p, v;
    return { callToJSON: (r = t == null ? void 0 : t.callToJSON) != null ? r : Er.callToJSON, colors: t != null && t.highlight ? Ab(t) : Pb(), compareKeys: typeof (t == null ? void 0 : t.compareKeys) == "function" || (t == null ? void 0 : t.compareKeys) === null ? t.compareKeys : Er.compareKeys, escapeRegex: Id(t), escapeString: Ad(t), indent: t != null && t.min ? "" : zb((e = t == null ? void 0 : t.indent) != null ? e : Er.indent), maxDepth: (n = t == null ? void 0 : t.maxDepth) != null ? n : Er.maxDepth, maxWidth: (s = t == null ? void 0 : t.maxWidth) != null ? s : Er.maxWidth, min: (a = t == null ? void 0 : t.min) != null ? a : Er.min, plugins: (p = t == null ? void 0 : t.plugins) != null ? p : Er.plugins, printBasicPrototype: (v = t == null ? void 0 : t.printBasicPrototype) != null ? v : true, printFunctionName: Md(t), spacingInner: t != null && t.min ? " " : `
`, spacingOuter: t != null && t.min ? "" : `
` };
  }, "getConfig");
  function zb(t) {
    return new Array(t + 1).join(" ");
  }
  __name(zb, "zb");
  u(zb, "createIndent");
  function Pd(t, r) {
    if (r && (Ib(r), r.plugins)) {
      let n = Cd(r.plugins, t);
      if (n !== null)
        return Td(n, t, wd(r), "", 0, []);
    }
    let e = Ed(t, Md(r), Id(r), Ad(r));
    return e !== null ? e : Sd(t, wd(r), "", 0, []);
  }
  __name(Pd, "Pd");
  u(Pd, "format");
  var Rb = { AsymmetricMatcher: db.default, DOMCollection: fb.default, DOMElement: hb.default, Immutable: mb.default, ReactElement: vb.default, ReactTestComponent: gb.default };
  tn.plugins = Rb;
  var kb = Pd;
  tn.default = kb;
});
var Vo = Ct((zf, qu) => {
  (function(t) {
    typeof zf == "object" && typeof qu != "undefined" ? qu.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
  })(function() {
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(i) {
      return !(!i || !i.Window) && i instanceof i.Window;
    };
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.getWindow = function(i) {
      return (0, t.default)(i) ? i : (i.ownerDocument || i).defaultView || n.window;
    }, r.init = s, r.window = r.realWindow = void 0;
    var e = void 0;
    r.realWindow = e;
    var n = void 0;
    function s(i) {
      r.realWindow = e = i;
      var o = i.document.createTextNode("");
      o.ownerDocument !== i.document && typeof i.wrap == "function" && i.wrap(o) === o && (i = i.wrap(i)), r.window = n = i;
    }
    __name(s, "s");
    u(s, "o"), r.window = n, typeof window != "undefined" && window && s(window);
    var a = {};
    function p(i) {
      return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, p(i);
    }
    __name(p, "p");
    u(p, "a"), Object.defineProperty(a, "__esModule", { value: true }), a.default = void 0;
    var v = u(function(i) {
      return !!i && p(i) === "object";
    }, "s"), m = u(function(i) {
      return typeof i == "function";
    }, "l"), d = { window: function(i) {
      return i === r.window || (0, t.default)(i);
    }, docFrag: function(i) {
      return v(i) && i.nodeType === 11;
    }, object: v, func: m, number: function(i) {
      return typeof i == "number";
    }, bool: function(i) {
      return typeof i == "boolean";
    }, string: function(i) {
      return typeof i == "string";
    }, element: function(i) {
      if (!i || p(i) !== "object")
        return false;
      var o = r.getWindow(i) || r.window;
      return /object|function/.test(typeof Element == "undefined" ? "undefined" : p(Element)) ? i instanceof Element || i instanceof o.Element : i.nodeType === 1 && typeof i.nodeName == "string";
    }, plainObject: function(i) {
      return v(i) && !!i.constructor && /function Object\b/.test(i.constructor.toString());
    }, array: function(i) {
      return v(i) && i.length !== void 0 && m(i.splice);
    } };
    a.default = d;
    var h = {};
    function y(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.prepared.axis;
        l === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : l === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(y, "y");
    u(y, "f");
    function w(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "drag") {
        var c = l.prepared.axis;
        if (c === "x" || c === "y") {
          var f = c === "x" ? "y" : "x";
          o.page[f] = l.coords.start.page[f], o.client[f] = l.coords.start.client[f], o.delta[f] = 0;
        }
      }
    }
    __name(w, "w");
    u(w, "d"), Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
    var x = { id: "actions/drag", install: function(i) {
      var o = i.actions, l = i.Interactable, c = i.defaults;
      l.prototype.draggable = x.draggable, o.map.drag = x, o.methodDict.drag = "draggable", c.actions.drag = x.defaults;
    }, listeners: { "interactions:before-action-move": y, "interactions:action-resume": y, "interactions:action-move": w, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, c = i.buttons, f = l.options.drag;
      if (f && f.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || c & l.options.drag.mouseButtons))
        return i.action = { name: "drag", axis: f.lockAxis === "start" ? f.startAxis : f.lockAxis }, false;
    } }, draggable: function(i) {
      return a.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : a.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: y, move: w, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, T = x;
    h.default = T;
    var C = {};
    Object.defineProperty(C, "__esModule", { value: true }), C.default = void 0;
    var R = { init: function(i) {
      var o = i;
      R.document = o.document, R.DocumentFragment = o.DocumentFragment || _, R.SVGElement = o.SVGElement || _, R.SVGSVGElement = o.SVGSVGElement || _, R.SVGElementInstance = o.SVGElementInstance || _, R.Element = o.Element || _, R.HTMLElement = o.HTMLElement || R.Element, R.Event = o.Event, R.Touch = o.Touch || _, R.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function _() {
    }
    __name(_, "_");
    u(_, "y");
    var L = R;
    C.default = L;
    var $ = {};
    Object.defineProperty($, "__esModule", { value: true }), $.default = void 0;
    var A = { init: function(i) {
      var o = C.default.Element, l = i.navigator || {};
      A.supportsTouch = "ontouchstart" in i || a.default.func(i.DocumentTouch) && C.default.document instanceof i.DocumentTouch, A.supportsPointerEvent = l.pointerEnabled !== false && !!C.default.PointerEvent, A.isIOS = /iP(hone|od|ad)/.test(l.platform), A.isIOS7 = /iP(hone|od|ad)/.test(l.platform) && /OS 7[^\d]/.test(l.appVersion), A.isIe9 = /MSIE 9/.test(l.userAgent), A.isOperaMobile = l.appName === "Opera" && A.supportsTouch && /Presto/.test(l.userAgent), A.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", A.pEventTypes = A.supportsPointerEvent ? C.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, A.wheelEvent = C.default.document && "onmousewheel" in C.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ee = A;
    $.default = ee;
    var z = {};
    function H(i) {
      var o = i.parentNode;
      if (a.default.docFrag(o)) {
        for (; (o = o.host) && a.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(H, "H");
    u(H, "P");
    function te(i, o) {
      return r.window !== r.realWindow && (o = o.replace(/\/deep\//g, " ")), i[$.default.prefixedMatchesSelector](o);
    }
    __name(te, "te");
    u(te, "O"), Object.defineProperty(z, "__esModule", { value: true }), z.closest = function(i, o) {
      for (; a.default.element(i); ) {
        if (te(i, o))
          return i;
        i = H(i);
      }
      return null;
    }, z.getActualElement = function(i) {
      return i.correspondingUseElement || i;
    }, z.getElementClientRect = ie, z.getElementRect = function(i) {
      var o = ie(i);
      if (!$.default.isIOS7 && o) {
        var l = K(r.getWindow(i));
        o.left += l.x, o.right += l.x, o.top += l.y, o.bottom += l.y;
      }
      return o;
    }, z.getPath = function(i) {
      for (var o = []; i; )
        o.push(i), i = H(i);
      return o;
    }, z.getScrollXY = K, z.indexOfDeepestElement = function(i) {
      for (var o, l = [], c = 0; c < i.length; c++) {
        var f = i[c], g = i[o];
        if (f && c !== o)
          if (g) {
            var S = Q(f), b = Q(g);
            if (S !== f.ownerDocument)
              if (b !== f.ownerDocument)
                if (S !== b) {
                  l = l.length ? l : ue(g);
                  var E = void 0;
                  if (g instanceof C.default.HTMLElement && f instanceof C.default.SVGElement && !(f instanceof C.default.SVGSVGElement)) {
                    if (f === b)
                      continue;
                    E = f.ownerSVGElement;
                  } else
                    E = f;
                  for (var O = ue(E, g.ownerDocument), I = 0; O[I] && O[I] === l[I]; )
                    I++;
                  var P = [O[I - 1], O[I], l[I]];
                  if (P[0])
                    for (var N = P[0].lastChild; N; ) {
                      if (N === P[1]) {
                        o = c, l = O;
                        break;
                      }
                      if (N === P[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  j = f, k = g, (parseInt(r.getWindow(j).getComputedStyle(j).zIndex, 10) || 0) >= (parseInt(r.getWindow(k).getComputedStyle(k).zIndex, 10) || 0) && (o = c);
              else
                o = c;
          } else
            o = c;
      }
      var j, k;
      return o;
    }, z.matchesSelector = te, z.matchesUpTo = function(i, o, l) {
      for (; a.default.element(i); ) {
        if (te(i, o))
          return true;
        if ((i = H(i)) === l)
          return te(i, o);
      }
      return false;
    }, z.nodeContains = function(i, o) {
      if (i.contains)
        return i.contains(o);
      for (; o; ) {
        if (o === i)
          return true;
        o = o.parentNode;
      }
      return false;
    }, z.parentNode = H, z.trySelector = function(i) {
      return !!a.default.string(i) && (C.default.document.querySelector(i), true);
    };
    var Q = u(function(i) {
      return i.parentNode || i.host;
    }, "E");
    function ue(i, o) {
      for (var l, c = [], f = i; (l = Q(f)) && f !== o && l !== f.ownerDocument; )
        c.unshift(f), f = l;
      return c;
    }
    __name(ue, "ue");
    u(ue, "S");
    function K(i) {
      return { x: (i = i || r.window).scrollX || i.document.documentElement.scrollLeft, y: i.scrollY || i.document.documentElement.scrollTop };
    }
    __name(K, "K");
    u(K, "T");
    function ie(i) {
      var o = i instanceof C.default.SVGElement ? i.getBoundingClientRect() : i.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(ie, "ie");
    u(ie, "j");
    var q = {};
    Object.defineProperty(q, "__esModule", { value: true }), q.default = function(i, o) {
      for (var l in o)
        i[l] = o[l];
      return i;
    };
    var oe = {};
    function tt(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(tt, "tt");
    u(tt, "I");
    function Ze(i, o, l) {
      return i === "parent" ? (0, z.parentNode)(l) : i === "self" ? o.getRect(l) : (0, z.closest)(l, i);
    }
    __name(Ze, "Ze");
    u(Ze, "D"), Object.defineProperty(oe, "__esModule", { value: true }), oe.addEdges = function(i, o, l) {
      i.left && (o.left += l.x), i.right && (o.right += l.x), i.top && (o.top += l.y), i.bottom && (o.bottom += l.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, oe.getStringOptionResult = Ze, oe.rectToXY = function(i) {
      return i && { x: "x" in i ? i.x : i.left, y: "y" in i ? i.y : i.top };
    }, oe.resolveRectLike = function(i, o, l, c) {
      var f, g = i;
      return a.default.string(g) ? g = Ze(g, o, l) : a.default.func(g) && (g = g.apply(void 0, function(S) {
        if (Array.isArray(S))
          return tt(S);
      }(f = c) || function(S) {
        if (typeof Symbol != "undefined" && S[Symbol.iterator] != null || S["@@iterator"] != null)
          return Array.from(S);
      }(f) || function(S, b) {
        if (S) {
          if (typeof S == "string")
            return tt(S, b);
          var E = Object.prototype.toString.call(S).slice(8, -1);
          return E === "Object" && S.constructor && (E = S.constructor.name), E === "Map" || E === "Set" ? Array.from(S) : E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E) ? tt(S, b) : void 0;
        }
      }(f) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), a.default.element(g) && (g = (0, z.getElementRect)(g)), g;
    }, oe.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, q.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, oe.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, q.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    };
    var Re = {};
    Object.defineProperty(Re, "__esModule", { value: true }), Re.default = function(i, o, l) {
      var c = i.options[l], f = c && c.origin || i.options.origin, g = (0, oe.resolveRectLike)(f, i, o, [i && o]);
      return (0, oe.rectToXY)(g) || { x: 0, y: 0 };
    };
    var Pe = {};
    function We(i) {
      return i.trim().split(/ +/);
    }
    __name(We, "We");
    u(We, "C"), Object.defineProperty(Pe, "__esModule", { value: true }), Pe.default = u(/* @__PURE__ */ __name(function i(o, l, c) {
      if (c = c || {}, a.default.string(o) && o.search(" ") !== -1 && (o = We(o)), a.default.array(o))
        return o.reduce(function(E, O) {
          return (0, q.default)(E, i(O, l, c));
        }, c);
      if (a.default.object(o) && (l = o, o = ""), a.default.func(l))
        c[o] = c[o] || [], c[o].push(l);
      else if (a.default.array(l))
        for (var f = 0; f < l.length; f++) {
          var g;
          g = l[f], i(o, g, c);
        }
      else if (a.default.object(l))
        for (var S in l) {
          var b = We(S).map(function(E) {
            return "".concat(o).concat(E);
          });
          i(b, l[S], c);
        }
      return c;
    }, "i"), "t");
    var Je = {};
    Object.defineProperty(Je, "__esModule", { value: true }), Je.default = void 0, Je.default = function(i, o) {
      return Math.sqrt(i * i + o * o);
    };
    var Ye = {};
    Object.defineProperty(Ye, "__esModule", { value: true }), Ye.default = function(i, o) {
      i.__set || (i.__set = {});
      var l = u(function(f) {
        typeof i[f] != "function" && f !== "__set" && Object.defineProperty(i, f, { get: function() {
          return f in i.__set ? i.__set[f] : i.__set[f] = o[f];
        }, set: function(g) {
          i.__set[f] = g;
        }, configurable: true });
      }, "n");
      for (var c in o)
        l(c);
      return i;
    };
    var J = {};
    function ar(i) {
      return i instanceof C.default.Event || i instanceof C.default.Touch;
    }
    __name(ar, "ar");
    u(ar, "B");
    function He(i, o, l) {
      return i = i || "page", (l = l || {}).x = o[i + "X"], l.y = o[i + "Y"], l;
    }
    __name(He, "He");
    u(He, "Y");
    function rt(i, o) {
      return o = o || { x: 0, y: 0 }, $.default.isOperaMobile && ar(i) ? (He("screen", i, o), o.x += window.scrollX, o.y += window.scrollY) : He("page", i, o), o;
    }
    __name(rt, "rt");
    u(rt, "W");
    function vr(i, o) {
      return o = o || {}, $.default.isOperaMobile && ar(i) ? He("screen", i, o) : He("client", i, o), o;
    }
    __name(vr, "vr");
    u(vr, "L");
    function Ir(i) {
      var o = [];
      return a.default.array(i) ? (o[0] = i[0], o[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o[0] = i.touches[0], o[1] = i.changedTouches[0]) : i.touches.length === 0 && (o[0] = i.changedTouches[0], o[1] = i.changedTouches[1]) : (o[0] = i.touches[0], o[1] = i.touches[1]), o;
    }
    __name(Ir, "Ir");
    u(Ir, "U");
    function gr(i) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, l = 0; l < i.length; l++) {
        var c = i[l];
        for (var f in o)
          o[f] += c[f];
      }
      for (var g in o)
        o[g] /= i.length;
      return o;
    }
    __name(gr, "gr");
    u(gr, "V"), Object.defineProperty(J, "__esModule", { value: true }), J.coordsToEvent = function(i) {
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
    }, J.copyCoords = function(i, o) {
      i.page = i.page || {}, i.page.x = o.page.x, i.page.y = o.page.y, i.client = i.client || {}, i.client.x = o.client.x, i.client.y = o.client.y, i.timeStamp = o.timeStamp;
    }, J.getClientXY = vr, J.getEventTargets = function(i) {
      var o = a.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [z.getActualElement(o ? o[0] : i.target), z.getActualElement(i.currentTarget)];
    }, J.getPageXY = rt, J.getPointerId = function(i) {
      return a.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, J.getPointerType = function(i) {
      return a.default.string(i.pointerType) ? i.pointerType : a.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof C.default.Touch ? "touch" : "mouse";
    }, J.getTouchPair = Ir, J.getXY = He, J.isNativePointer = ar, J.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, J.pointerAverage = gr, Object.defineProperty(J, "pointerExtend", { enumerable: true, get: function() {
      return Ye.default;
    } }), J.setCoordDeltas = function(i, o, l) {
      i.page.x = l.page.x - o.page.x, i.page.y = l.page.y - o.page.y, i.client.x = l.client.x - o.client.x, i.client.y = l.client.y - o.client.y, i.timeStamp = l.timeStamp - o.timeStamp;
    }, J.setCoordVelocity = function(i, o) {
      var l = Math.max(o.timeStamp / 1e3, 1e-3);
      i.page.x = o.page.x / l, i.page.y = o.page.y / l, i.client.x = o.client.x / l, i.client.y = o.client.y / l, i.timeStamp = l;
    }, J.setCoords = function(i, o, l) {
      var c = o.length > 1 ? gr(o) : o[0];
      rt(c, i.page), vr(c, i.client), i.timeStamp = l;
    }, J.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, J.touchAngle = function(i, o) {
      var l = o + "X", c = o + "Y", f = Ir(i), g = f[1][l] - f[0][l], S = f[1][c] - f[0][c];
      return 180 * Math.atan2(S, g) / Math.PI;
    }, J.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o = Ir(i), l = Math.min(o[0].pageX, o[1].pageX), c = Math.min(o[0].pageY, o[1].pageY), f = Math.max(o[0].pageX, o[1].pageX), g = Math.max(o[0].pageY, o[1].pageY);
      return { x: l, y: c, left: l, top: c, right: f, bottom: g, width: f - l, height: g - c };
    }, J.touchDistance = function(i, o) {
      var l = o + "X", c = o + "Y", f = Ir(i), g = f[0][l] - f[1][l], S = f[0][c] - f[1][c];
      return (0, Je.default)(g, S);
    };
    var sr = {};
    function Lr(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Lr, "Lr");
    u(Lr, "q");
    function Yr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Yr, "Yr");
    u(Yr, "G"), Object.defineProperty(sr, "__esModule", { value: true }), sr.BaseEvent = void 0;
    var Nn = function() {
      function i(c) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Yr(this, "immediatePropagationStopped", false), Yr(this, "propagationStopped", false), this._interaction = c;
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Lr(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    sr.BaseEvent = Nn, Object.defineProperty(Nn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var ze = {};
    Object.defineProperty(ze, "__esModule", { value: true }), ze.remove = ze.merge = ze.from = ze.findIndex = ze.find = ze.contains = void 0, ze.contains = function(i, o) {
      return i.indexOf(o) !== -1;
    }, ze.remove = function(i, o) {
      return i.splice(i.indexOf(o), 1);
    };
    var _n = u(function(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        i.push(c);
      }
      return i;
    }, "K");
    ze.merge = _n, ze.from = function(i) {
      return _n([], i);
    };
    var Ln = u(function(i, o) {
      for (var l = 0; l < i.length; l++)
        if (o(i[l], l, i))
          return l;
      return -1;
    }, "Z");
    ze.findIndex = Ln, ze.find = function(i, o) {
      return i[Ln(i, o)];
    };
    var _t = {};
    function Xr(i) {
      return Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Xr(i);
    }
    __name(Xr, "Xr");
    u(Xr, "Q");
    function wi(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(wi, "wi");
    u(wi, "tt");
    function hn(i, o) {
      return hn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, hn(i, o);
    }
    __name(hn, "hn");
    u(hn, "et");
    function Ar(i, o) {
      if (o && (Xr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return It(i);
    }
    __name(Ar, "Ar");
    u(Ar, "nt");
    function It(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(It, "It");
    u(It, "rt");
    function Gr(i) {
      return Gr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Gr(i);
    }
    __name(Gr, "Gr");
    u(Gr, "ot");
    function er(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(er, "er");
    u(er, "it"), Object.defineProperty(_t, "__esModule", { value: true }), _t.DropEvent = void 0;
    var Gn = function(i) {
      (function(b, E) {
        if (typeof E != "function" && E !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(E && E.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), E && hn(b, E);
      })(S, i);
      var o, l, c, f, g = (c = S, f = function() {
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
        var b, E = Gr(c);
        if (f) {
          var O = Gr(this).constructor;
          b = Reflect.construct(E, arguments, O);
        } else
          b = E.apply(this, arguments);
        return Ar(this, b);
      });
      function S(b, E, O) {
        var I;
        (function(k, F) {
          if (!(k instanceof F))
            throw new TypeError("Cannot call a class as a function");
        })(this, S), er(It(I = g.call(this, E._interaction)), "dropzone", void 0), er(It(I), "dragEvent", void 0), er(It(I), "relatedTarget", void 0), er(It(I), "draggable", void 0), er(It(I), "propagationStopped", false), er(It(I), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? b.prev : b.cur, N = P.element, j = P.dropzone;
        return I.type = O, I.target = N, I.currentTarget = N, I.dropzone = j, I.dragEvent = E, I.relatedTarget = E.target, I.draggable = E.interactable, I.timeStamp = E.timeStamp, I;
      }
      __name(S, "S");
      return u(S, "a"), o = S, (l = [{ key: "reject", value: function() {
        var b = this, E = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && E.cur.dropzone === this.dropzone && E.cur.element === this.target)
          if (E.prev.dropzone = this.dropzone, E.prev.element = this.target, E.rejected = true, E.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = E.activeDrops, I = ze.findIndex(O, function(N) {
              var j = N.dropzone, k = N.element;
              return j === b.dropzone && k === b.target;
            });
            E.activeDrops.splice(I, 1);
            var P = new S(E, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new S(E, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && wi(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), S;
    }(sr.BaseEvent);
    _t.DropEvent = Gn;
    var Zr = {};
    function jn(i, o) {
      for (var l = 0; l < i.slice().length; l++) {
        var c = i.slice()[l], f = c.dropzone, g = c.element;
        o.dropzone = f, o.target = g, f.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(jn, "jn");
    u(jn, "lt");
    function mn(i, o) {
      for (var l = function(g, S) {
        for (var b = g.interactables, E = [], O = 0; O < b.list.length; O++) {
          var I = b.list[O];
          if (I.options.drop.enabled) {
            var P = I.options.drop.accept;
            if (!(a.default.element(P) && P !== S || a.default.string(P) && !z.matchesSelector(S, P) || a.default.func(P) && !P({ dropzone: I, draggableElement: S })))
              for (var N = a.default.string(I.target) ? I._context.querySelectorAll(I.target) : a.default.array(I.target) ? I.target : [I.target], j = 0; j < N.length; j++) {
                var k = N[j];
                k !== S && E.push({ dropzone: I, element: k, rect: I.getRect(k) });
              }
          }
        }
        return E;
      }(i, o), c = 0; c < l.length; c++) {
        var f = l[c];
        f.rect = f.dropzone.getRect(f.element);
      }
      return l;
    }
    __name(mn, "mn");
    u(mn, "ut");
    function Hn(i, o, l) {
      for (var c = i.dropState, f = i.interactable, g = i.element, S = [], b = 0; b < c.activeDrops.length; b++) {
        var E = c.activeDrops[b], O = E.dropzone, I = E.element, P = E.rect;
        S.push(O.dropCheck(o, l, f, g, I, P) ? I : null);
      }
      var N = z.indexOfDeepestElement(S);
      return c.activeDrops[N] || null;
    }
    __name(Hn, "Hn");
    u(Hn, "ct");
    function oo(i, o, l) {
      var c = i.dropState, f = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return l.type === "dragstart" && (f.activate = new _t.DropEvent(c, l, "dropactivate"), f.activate.target = null, f.activate.dropzone = null), l.type === "dragend" && (f.deactivate = new _t.DropEvent(c, l, "dropdeactivate"), f.deactivate.target = null, f.deactivate.dropzone = null), c.rejected || (c.cur.element !== c.prev.element && (c.prev.dropzone && (f.leave = new _t.DropEvent(c, l, "dragleave"), l.dragLeave = f.leave.target = c.prev.element, l.prevDropzone = f.leave.dropzone = c.prev.dropzone), c.cur.dropzone && (f.enter = new _t.DropEvent(c, l, "dragenter"), l.dragEnter = c.cur.element, l.dropzone = c.cur.dropzone)), l.type === "dragend" && c.cur.dropzone && (f.drop = new _t.DropEvent(c, l, "drop"), l.dropzone = c.cur.dropzone, l.relatedTarget = c.cur.element), l.type === "dragmove" && c.cur.dropzone && (f.move = new _t.DropEvent(c, l, "dropmove"), f.move.dragmove = l, l.dropzone = c.cur.dropzone)), f;
    }
    __name(oo, "oo");
    u(oo, "ft");
    function ao(i, o) {
      var l = i.dropState, c = l.activeDrops, f = l.cur, g = l.prev;
      o.leave && g.dropzone.fire(o.leave), o.enter && f.dropzone.fire(o.enter), o.move && f.dropzone.fire(o.move), o.drop && f.dropzone.fire(o.drop), o.deactivate && jn(c, o.deactivate), l.prev.dropzone = f.dropzone, l.prev.element = f.element;
    }
    __name(ao, "ao");
    u(ao, "dt");
    function ga(i, o) {
      var l = i.interaction, c = i.iEvent, f = i.event;
      if (c.type === "dragmove" || c.type === "dragend") {
        var g = l.dropState;
        o.dynamicDrop && (g.activeDrops = mn(o, l.element));
        var S = c, b = Hn(l, S, f);
        g.rejected = g.rejected && !!b && b.dropzone === g.cur.dropzone && b.element === g.cur.element, g.cur.dropzone = b && b.dropzone, g.cur.element = b && b.element, g.events = oo(l, 0, S);
      }
    }
    __name(ga, "ga");
    u(ga, "pt"), Object.defineProperty(Zr, "__esModule", { value: true }), Zr.default = void 0;
    var ba = { id: "actions/drop", install: function(i) {
      var o = i.actions, l = i.interactStatic, c = i.Interactable, f = i.defaults;
      i.usePlugin(h.default), c.prototype.dropzone = function(g) {
        return function(S, b) {
          if (a.default.object(b)) {
            if (S.options.drop.enabled = b.enabled !== false, b.listeners) {
              var E = (0, Pe.default)(b.listeners), O = Object.keys(E).reduce(function(I, P) {
                return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = E[P], I;
              }, {});
              S.off(S.options.drop.listeners), S.on(O), S.options.drop.listeners = O;
            }
            return a.default.func(b.ondrop) && S.on("drop", b.ondrop), a.default.func(b.ondropactivate) && S.on("dropactivate", b.ondropactivate), a.default.func(b.ondropdeactivate) && S.on("dropdeactivate", b.ondropdeactivate), a.default.func(b.ondragenter) && S.on("dragenter", b.ondragenter), a.default.func(b.ondragleave) && S.on("dragleave", b.ondragleave), a.default.func(b.ondropmove) && S.on("dropmove", b.ondropmove), /^(pointer|center)$/.test(b.overlap) ? S.options.drop.overlap = b.overlap : a.default.number(b.overlap) && (S.options.drop.overlap = Math.max(Math.min(1, b.overlap), 0)), "accept" in b && (S.options.drop.accept = b.accept), "checker" in b && (S.options.drop.checker = b.checker), S;
          }
          return a.default.bool(b) ? (S.options.drop.enabled = b, S) : S.options.drop;
        }(this, g);
      }, c.prototype.dropCheck = function(g, S, b, E, O, I) {
        return function(P, N, j, k, F, Z, W) {
          var ne = false;
          if (!(W = W || P.getRect(Z)))
            return !!P.options.drop.checker && P.options.drop.checker(N, j, ne, P, Z, k, F);
          var ae = P.options.drop.overlap;
          if (ae === "pointer") {
            var we = (0, Re.default)(k, F, "drag"), De = J.getPageXY(N);
            De.x += we.x, De.y += we.y;
            var Fe = De.x > W.left && De.x < W.right, Te = De.y > W.top && De.y < W.bottom;
            ne = Fe && Te;
          }
          var $e = k.getRect(F);
          if ($e && ae === "center") {
            var wr = $e.left + $e.width / 2, en = $e.top + $e.height / 2;
            ne = wr >= W.left && wr <= W.right && en >= W.top && en <= W.bottom;
          }
          return $e && a.default.number(ae) && (ne = Math.max(0, Math.min(W.right, $e.right) - Math.max(W.left, $e.left)) * Math.max(0, Math.min(W.bottom, $e.bottom) - Math.max(W.top, $e.top)) / ($e.width * $e.height) >= ae), P.options.drop.checker && (ne = P.options.drop.checker(N, j, ne, P, Z, k, F)), ne;
        }(this, g, S, b, E, O, I);
      }, l.dynamicDrop = function(g) {
        return a.default.bool(g) ? (i.dynamicDrop = g, l) : i.dynamicDrop;
      }, (0, q.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", i.dynamicDrop = false, f.actions.drop = ba.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o = i.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o) {
      var l = i.interaction, c = (i.event, i.iEvent);
      if (l.prepared.name === "drag") {
        var f = l.dropState;
        f.activeDrops = null, f.events = null, f.activeDrops = mn(o, l.element), f.events = oo(l, 0, c), f.events.activate && (jn(f.activeDrops, f.events.activate), o.fire("actions/drop:start", { interaction: l, dragEvent: c }));
      }
    }, "interactions:action-move": ga, "interactions:after-action-move": function(i, o) {
      var l = i.interaction, c = i.iEvent;
      l.prepared.name === "drag" && (ao(l, l.dropState.events), o.fire("actions/drop:move", { interaction: l, dragEvent: c }), l.dropState.events = {});
    }, "interactions:action-end": function(i, o) {
      if (i.interaction.prepared.name === "drag") {
        var l = i.interaction, c = i.iEvent;
        ga(i, o), ao(l, l.dropState.events), o.fire("actions/drop:end", { interaction: l, dragEvent: c });
      }
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.dropState;
        l && (l.activeDrops = null, l.events = null, l.cur.dropzone = null, l.cur.element = null, l.prev.dropzone = null, l.prev.element = null, l.rejected = false);
      }
    } }, getActiveDrops: mn, getDrop: Hn, getDropEvents: oo, fireDropEvents: ao, defaults: { enabled: false, accept: null, overlap: "pointer" } }, gl = ba;
    Zr.default = gl;
    var G = {};
    function re(i) {
      var o = i.interaction, l = i.iEvent, c = i.phase;
      if (o.prepared.name === "gesture") {
        var f = o.pointers.map(function(O) {
          return O.pointer;
        }), g = c === "start", S = c === "end", b = o.interactable.options.deltaSource;
        if (l.touches = [f[0], f[1]], g)
          l.distance = J.touchDistance(f, b), l.box = J.touchBBox(f), l.scale = 1, l.ds = 0, l.angle = J.touchAngle(f, b), l.da = 0, o.gesture.startDistance = l.distance, o.gesture.startAngle = l.angle;
        else if (S) {
          var E = o.prevEvent;
          l.distance = E.distance, l.box = E.box, l.scale = E.scale, l.ds = 0, l.angle = E.angle, l.da = 0;
        } else
          l.distance = J.touchDistance(f, b), l.box = J.touchBBox(f), l.scale = l.distance / o.gesture.startDistance, l.angle = J.touchAngle(f, b), l.ds = l.scale - o.gesture.scale, l.da = l.angle - o.gesture.angle;
        o.gesture.distance = l.distance, o.gesture.angle = l.angle, a.default.number(l.scale) && l.scale !== 1 / 0 && !isNaN(l.scale) && (o.gesture.scale = l.scale);
      }
    }
    __name(re, "re");
    u(re, "yt"), Object.defineProperty(G, "__esModule", { value: true }), G.default = void 0;
    var le = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var o = i.actions, l = i.Interactable, c = i.defaults;
      l.prototype.gesturable = function(f) {
        return a.default.object(f) ? (this.options.gesture.enabled = f.enabled !== false, this.setPerAction("gesture", f), this.setOnEvents("gesture", f), this) : a.default.bool(f) ? (this.options.gesture.enabled = f, this) : this.options.gesture;
      }, o.map.gesture = le, o.methodDict.gesture = "gesturable", c.actions.gesture = le.defaults;
    }, listeners: { "interactions:action-start": re, "interactions:action-move": re, "interactions:action-end": re, "interactions:new": function(i) {
      i.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(i) {
      if (!(i.interaction.pointers.length < 2)) {
        var o = i.interactable.options.gesture;
        if (o && o.enabled)
          return i.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, ke = le;
    G.default = ke;
    var Ee = {};
    function Et(i, o, l, c, f, g, S) {
      if (!o)
        return false;
      if (o === true) {
        var b = a.default.number(g.width) ? g.width : g.right - g.left, E = a.default.number(g.height) ? g.height : g.bottom - g.top;
        if (S = Math.min(S, Math.abs((i === "left" || i === "right" ? b : E) / 2)), b < 0 && (i === "left" ? i = "right" : i === "right" && (i = "left")), E < 0 && (i === "top" ? i = "bottom" : i === "bottom" && (i = "top")), i === "left") {
          var O = b >= 0 ? g.left : g.right;
          return l.x < O + S;
        }
        if (i === "top") {
          var I = E >= 0 ? g.top : g.bottom;
          return l.y < I + S;
        }
        if (i === "right")
          return l.x > (b >= 0 ? g.right : g.left) - S;
        if (i === "bottom")
          return l.y > (E >= 0 ? g.bottom : g.top) - S;
      }
      return !!a.default.element(c) && (a.default.element(o) ? o === c : z.matchesUpTo(c, o, f));
    }
    __name(Et, "Et");
    u(Et, "wt");
    function Lt(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.resizeAxes) {
        var c = o;
        l.interactable.options.resize.square ? (l.resizeAxes === "y" ? c.delta.x = c.delta.y : c.delta.y = c.delta.x, c.axes = "xy") : (c.axes = l.resizeAxes, l.resizeAxes === "x" ? c.delta.y = 0 : l.resizeAxes === "y" && (c.delta.x = 0));
      }
    }
    __name(Lt, "Lt");
    u(Lt, "_t"), Object.defineProperty(Ee, "__esModule", { value: true }), Ee.default = void 0;
    var At = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o = i.actions, l = i.browser, c = i.Interactable, f = i.defaults;
      At.cursors = function(g) {
        return g.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(l), At.defaultMargin = l.supportsTouch || l.supportsPointerEvent ? 20 : 10, c.prototype.resizable = function(g) {
        return function(S, b, E) {
          return a.default.object(b) ? (S.options.resize.enabled = b.enabled !== false, S.setPerAction("resize", b), S.setOnEvents("resize", b), a.default.string(b.axis) && /^x$|^y$|^xy$/.test(b.axis) ? S.options.resize.axis = b.axis : b.axis === null && (S.options.resize.axis = E.defaults.actions.resize.axis), a.default.bool(b.preserveAspectRatio) ? S.options.resize.preserveAspectRatio = b.preserveAspectRatio : a.default.bool(b.square) && (S.options.resize.square = b.square), S) : a.default.bool(b) ? (S.options.resize.enabled = b, S) : S.options.resize;
        }(this, g, i);
      }, o.map.resize = At, o.methodDict.resize = "resizable", f.actions.resize = At.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o) {
        var l = o.iEvent, c = o.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var f = l, g = c.rect;
          c._rects = { start: (0, q.default)({}, g), corrected: (0, q.default)({}, g), previous: (0, q.default)({}, g), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, f.edges = c.prepared.edges, f.rect = c._rects.corrected, f.deltaRect = c._rects.delta;
        }
      })(i), Lt(i);
    }, "interactions:action-move": function(i) {
      (function(o) {
        var l = o.iEvent, c = o.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var f = l, g = c.interactable.options.resize.invert, S = g === "reposition" || g === "negate", b = c.rect, E = c._rects, O = E.start, I = E.corrected, P = E.delta, N = E.previous;
          if ((0, q.default)(N, I), S) {
            if ((0, q.default)(I, b), g === "reposition") {
              if (I.top > I.bottom) {
                var j = I.top;
                I.top = I.bottom, I.bottom = j;
              }
              if (I.left > I.right) {
                var k = I.left;
                I.left = I.right, I.right = k;
              }
            }
          } else
            I.top = Math.min(b.top, O.bottom), I.bottom = Math.max(b.bottom, O.top), I.left = Math.min(b.left, O.right), I.right = Math.max(b.right, O.left);
          for (var F in I.width = I.right - I.left, I.height = I.bottom - I.top, I)
            P[F] = I[F] - N[F];
          f.edges = c.prepared.edges, f.rect = I, f.deltaRect = P;
        }
      })(i), Lt(i);
    }, "interactions:action-end": function(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.prepared.edges) {
        var c = o;
        c.edges = l.prepared.edges, c.rect = l._rects.corrected, c.deltaRect = l._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, c = i.element, f = i.rect, g = i.buttons;
      if (f) {
        var S = (0, q.default)({}, o.coords.cur.page), b = l.options.resize;
        if (b && b.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || g & b.mouseButtons)) {
          if (a.default.object(b.edges)) {
            var E = { left: false, right: false, top: false, bottom: false };
            for (var O in E)
              E[O] = Et(O, b.edges[O], S, o._latestPointer.eventTarget, c, f, b.margin || At.defaultMargin);
            E.left = E.left && !E.right, E.top = E.top && !E.bottom, (E.left || E.right || E.top || E.bottom) && (i.action = { name: "resize", edges: E });
          } else {
            var I = b.axis !== "y" && S.x > f.right - At.defaultMargin, P = b.axis !== "x" && S.y > f.bottom - At.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o = i.edges, l = i.axis, c = i.name, f = At.cursors, g = null;
      if (l)
        g = f[c + l];
      else if (o) {
        for (var S = "", b = ["top", "bottom", "left", "right"], E = 0; E < b.length; E++) {
          var O = b[E];
          o[O] && (S += O);
        }
        g = f[S];
      }
      return g;
    }, defaultMargin: null }, ya = At;
    Ee.default = ya;
    var br = {};
    Object.defineProperty(br, "__esModule", { value: true }), br.default = void 0;
    var so = { id: "actions", install: function(i) {
      i.usePlugin(G.default), i.usePlugin(Ee.default), i.usePlugin(h.default), i.usePlugin(Zr.default);
    } };
    br.default = so;
    var Pt = {};
    Object.defineProperty(Pt, "__esModule", { value: true }), Pt.default = void 0;
    var zt, Kr, xi = 0, Ei = { request: function(i) {
      return zt(i);
    }, cancel: function(i) {
      return Kr(i);
    }, init: function(i) {
      if (zt = i.requestAnimationFrame, Kr = i.cancelAnimationFrame, !zt)
        for (var o = ["ms", "moz", "webkit", "o"], l = 0; l < o.length; l++) {
          var c = o[l];
          zt = i["".concat(c, "RequestAnimationFrame")], Kr = i["".concat(c, "CancelAnimationFrame")] || i["".concat(c, "CancelRequestAnimationFrame")];
        }
      zt = zt && zt.bind(i), Kr = Kr && Kr.bind(i), zt || (zt = u(function(f) {
        var g = Date.now(), S = Math.max(0, 16 - (g - xi)), b = i.setTimeout(function() {
          f(g + S);
        }, S);
        return xi = g + S, b;
      }, "jt"), Kr = u(function(f) {
        return clearTimeout(f);
      }, "Mt"));
    } };
    Pt.default = Ei;
    var vn = {};
    Object.defineProperty(vn, "__esModule", { value: true }), vn.default = void 0, vn.getContainer = wa, vn.getScroll = lo, vn.getScrollSize = function(i) {
      return a.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, vn.getScrollSizeDelta = function(i, o) {
      var l = i.interaction, c = i.element, f = l && l.interactable.options[l.prepared.name].autoScroll;
      if (!f || !f.enabled)
        return o(), { x: 0, y: 0 };
      var g = wa(f.container, l.interactable, c), S = lo(g);
      o();
      var b = lo(g);
      return { x: b.x - S.x, y: b.y - S.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, Pt.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = Pt.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), Pt.default.cancel(ce.i);
    }, scroll: function() {
      var i = ce.interaction, o = i.interactable, l = i.element, c = i.prepared.name, f = o.options[c].autoScroll, g = wa(f.container, o, l), S = ce.now(), b = (S - ce.prevTime) / 1e3, E = f.speed * b;
      if (E >= 1) {
        var O = { x: ce.x * E, y: ce.y * E };
        if (O.x || O.y) {
          var I = lo(g);
          a.default.window(g) ? g.scrollBy(O.x, O.y) : g && (g.scrollLeft += O.x, g.scrollTop += O.y);
          var P = lo(g), N = { x: P.x - I.x, y: P.y - I.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: l, interactable: o, delta: N, interaction: i, container: g });
        }
        ce.prevTime = S;
      }
      ce.isScrolling && (Pt.default.cancel(ce.i), ce.i = Pt.default.request(ce.scroll));
    }, check: function(i, o) {
      var l;
      return (l = i.options[o].autoScroll) == null ? void 0 : l.enabled;
    }, onInteractionMove: function(i) {
      var o = i.interaction, l = i.pointer;
      if (o.interacting() && ce.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ce.x = ce.y = 0;
        else {
          var c, f, g, S, b = o.interactable, E = o.element, O = o.prepared.name, I = b.options[O].autoScroll, P = wa(I.container, b, E);
          if (a.default.window(P))
            S = l.clientX < ce.margin, c = l.clientY < ce.margin, f = l.clientX > P.innerWidth - ce.margin, g = l.clientY > P.innerHeight - ce.margin;
          else {
            var N = z.getElementClientRect(P);
            S = l.clientX < N.left + ce.margin, c = l.clientY < N.top + ce.margin, f = l.clientX > N.right - ce.margin, g = l.clientY > N.bottom - ce.margin;
          }
          ce.x = f ? 1 : S ? -1 : 0, ce.y = g ? 1 : c ? -1 : 0, ce.isScrolling || (ce.margin = I.margin, ce.speed = I.speed, ce.start(o));
        }
    } };
    function wa(i, o, l) {
      return (a.default.string(i) ? (0, oe.getStringOptionResult)(i, o, l) : i) || (0, r.getWindow)(l);
    }
    __name(wa, "wa");
    u(wa, "zt");
    function lo(i) {
      return a.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(lo, "lo");
    u(lo, "Ct");
    var Tm = { id: "auto-scroll", install: function(i) {
      var o = i.defaults, l = i.actions;
      i.autoScroll = ce, ce.now = function() {
        return i.now();
      }, l.phaselessTypes.autoscroll = true, o.perAction.autoScroll = ce.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoScroll = null;
    }, "interactions:destroy": function(i) {
      i.interaction.autoScroll = null, ce.stop(), ce.interaction && (ce.interaction = null);
    }, "interactions:stop": ce.stop, "interactions:action-move": function(i) {
      return ce.onInteractionMove(i);
    } } }, Cm = Tm;
    vn.default = Cm;
    var lr = {};
    Object.defineProperty(lr, "__esModule", { value: true }), lr.copyAction = function(i, o) {
      return i.name = o.name, i.axis = o.axis, i.edges = o.edges, i;
    }, lr.sign = void 0, lr.warnOnce = function(i, o) {
      var l = false;
      return function() {
        return l || (r.window.console.warn(o), l = true), i.apply(this, arguments);
      };
    }, lr.sign = function(i) {
      return i >= 0 ? 1 : -1;
    };
    var xa = {};
    function Om(i) {
      return a.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(Om, "Om");
    u(Om, "Yt");
    function Mm(i) {
      return a.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Mm, "Mm");
    u(Mm, "Wt"), Object.defineProperty(xa, "__esModule", { value: true }), xa.default = void 0;
    var Im = { id: "auto-start/interactableMethods", install: function(i) {
      var o = i.Interactable;
      o.prototype.getAction = function(l, c, f, g) {
        var S = function(b, E, O, I, P) {
          var N = b.getRect(I), j = { action: null, interactable: b, interaction: O, element: I, rect: N, buttons: E.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[E.button] };
          return P.fire("auto-start:check", j), j.action;
        }(this, c, f, g, i);
        return this.options.actionChecker ? this.options.actionChecker(l, c, S, this, g, f) : S;
      }, o.prototype.ignoreFrom = (0, lr.warnOnce)(function(l) {
        return this._backCompatOption("ignoreFrom", l);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, lr.warnOnce)(function(l) {
        return this._backCompatOption("allowFrom", l);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Mm, o.prototype.styleCursor = Om;
    } };
    xa.default = Im;
    var Si = {};
    function Ic(i, o, l, c, f) {
      return o.testIgnoreAllow(o.options[i.name], l, c) && o.options[i.name].enabled && Ea(o, l, i, f) ? i : null;
    }
    __name(Ic, "Ic");
    u(Ic, "Vt");
    function Am(i, o, l, c, f, g, S) {
      for (var b = 0, E = c.length; b < E; b++) {
        var O = c[b], I = f[b], P = O.getAction(o, l, i, I);
        if (P) {
          var N = Ic(P, O, I, g, S);
          if (N)
            return { action: N, interactable: O, element: I };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Am, "Am");
    u(Am, "Nt");
    function Ac(i, o, l, c, f) {
      var g = [], S = [], b = c;
      function E(I) {
        g.push(I), S.push(b);
      }
      __name(E, "E");
      for (u(E, "u"); a.default.element(b); ) {
        g = [], S = [], f.interactables.forEachMatch(b, E);
        var O = Am(i, o, l, g, S, c, f);
        if (O.action && !O.interactable.options[O.action.name].manualStart)
          return O;
        b = z.parentNode(b);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Ac, "Ac");
    u(Ac, "qt");
    function Pc(i, o, l) {
      var c = o.action, f = o.interactable, g = o.element;
      c = c || { name: null }, i.interactable = f, i.element = g, (0, lr.copyAction)(i.prepared, c), i.rect = f && c.name ? f.getRect(g) : null, Rc(i, l), l.fire("autoStart:prepared", { interaction: i });
    }
    __name(Pc, "Pc");
    u(Pc, "Gt");
    function Ea(i, o, l, c) {
      var f = i.options, g = f[l.name].max, S = f[l.name].maxPerElement, b = c.autoStart.maxInteractions, E = 0, O = 0, I = 0;
      if (!(g && S && b))
        return false;
      for (var P = 0; P < c.interactions.list.length; P++) {
        var N = c.interactions.list[P], j = N.prepared.name;
        if (N.interacting() && (++E >= b || N.interactable === i && ((O += j === l.name ? 1 : 0) >= g || N.element === o && (I++, j === l.name && I >= S))))
          return false;
      }
      return b > 0;
    }
    __name(Ea, "Ea");
    u(Ea, "$t");
    function zc(i, o) {
      return a.default.number(i) ? (o.autoStart.maxInteractions = i, this) : o.autoStart.maxInteractions;
    }
    __name(zc, "zc");
    u(zc, "Ht");
    function bl(i, o, l) {
      var c = l.autoStart.cursorElement;
      c && c !== i && (c.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o, i.style.cursor = o, l.autoStart.cursorElement = o ? i : null;
    }
    __name(bl, "bl");
    u(bl, "Kt");
    function Rc(i, o) {
      var l = i.interactable, c = i.element, f = i.prepared;
      if (i.pointerType === "mouse" && l && l.options.styleCursor) {
        var g = "";
        if (f.name) {
          var S = l.options[f.name].cursorChecker;
          g = a.default.func(S) ? S(f, l, c, i._interacting) : o.actions.map[f.name].getCursor(f);
        }
        bl(i.element, g || "", o);
      } else
        o.autoStart.cursorElement && bl(o.autoStart.cursorElement, "", o);
    }
    __name(Rc, "Rc");
    u(Rc, "Zt"), Object.defineProperty(Si, "__esModule", { value: true }), Si.default = void 0;
    var Pm = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o = i.interactStatic, l = i.defaults;
      i.usePlugin(xa.default), l.base.actionChecker = null, l.base.styleCursor = true, (0, q.default)(l.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(c) {
        return zc(c, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Ea, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o) {
      var l = i.interaction, c = i.pointer, f = i.event, g = i.eventTarget;
      l.interacting() || Pc(l, Ac(l, c, f, g, o), o);
    }, "interactions:move": function(i, o) {
      (function(l, c) {
        var f = l.interaction, g = l.pointer, S = l.event, b = l.eventTarget;
        f.pointerType !== "mouse" || f.pointerIsDown || f.interacting() || Pc(f, Ac(f, g, S, b, c), c);
      })(i, o), function(l, c) {
        var f = l.interaction;
        if (f.pointerIsDown && !f.interacting() && f.pointerWasMoved && f.prepared.name) {
          c.fire("autoStart:before-start", l);
          var g = f.interactable, S = f.prepared.name;
          S && g && (g.options[S].manualStart || !Ea(g, f.element, f.prepared, c) ? f.stop() : (f.start(f.prepared, g, f.element), Rc(f, c)));
        }
      }(i, o);
    }, "interactions:stop": function(i, o) {
      var l = i.interaction, c = l.interactable;
      c && c.options.styleCursor && bl(l.element, "", o);
    } }, maxInteractions: zc, withinInteractionLimit: Ea, validateAction: Ic }, zm = Pm;
    Si.default = zm;
    var Sa = {};
    Object.defineProperty(Sa, "__esModule", { value: true }), Sa.default = void 0;
    var Rm = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o) {
      var l = i.interaction, c = i.eventTarget, f = i.dx, g = i.dy;
      if (l.prepared.name === "drag") {
        var S = Math.abs(f), b = Math.abs(g), E = l.interactable.options.drag, O = E.startAxis, I = S > b ? "x" : S < b ? "y" : "xy";
        if (l.prepared.axis = E.lockAxis === "start" ? I[0] : E.lockAxis, I !== "xy" && O !== "xy" && O !== I) {
          l.prepared.name = null;
          for (var P = c, N = function(k) {
            if (k !== l.interactable) {
              var F = l.interactable.options.drag;
              if (!F.manualStart && k.testIgnoreAllow(F, P, c)) {
                var Z = k.getAction(l.downPointer, l.downEvent, l, P);
                if (Z && Z.name === "drag" && function(W, ne) {
                  if (!ne)
                    return false;
                  var ae = ne.options.drag.startAxis;
                  return W === "xy" || ae === "xy" || ae === W;
                }(I, k) && Si.default.validateAction(Z, k, P, c, o))
                  return k;
              }
            }
          }; a.default.element(P); ) {
            var j = o.interactables.forEachMatch(P, N);
            if (j) {
              l.prepared.name = "drag", l.interactable = j, l.element = P;
              break;
            }
            P = (0, z.parentNode)(P);
          }
        }
      }
    } } };
    Sa.default = Rm;
    var Ta = {};
    function yl(i) {
      var o = i.prepared && i.prepared.name;
      if (!o)
        return null;
      var l = i.interactable.options;
      return l[o].hold || l[o].delay;
    }
    __name(yl, "yl");
    u(yl, "re"), Object.defineProperty(Ta, "__esModule", { value: true }), Ta.default = void 0;
    var km = { id: "auto-start/hold", install: function(i) {
      var o = i.defaults;
      i.usePlugin(Si.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var o = i.interaction, l = yl(o);
      l > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, l));
    }, "interactions:move": function(i) {
      var o = i.interaction, l = i.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !l && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var o = i.interaction;
      yl(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: yl }, Dm = km;
    Ta.default = Dm;
    var Ca = {};
    Object.defineProperty(Ca, "__esModule", { value: true }), Ca.default = void 0;
    var Nm = { id: "auto-start", install: function(i) {
      i.usePlugin(Si.default), i.usePlugin(Ta.default), i.usePlugin(Sa.default);
    } };
    Ca.default = Nm;
    var Ti = {};
    function _m(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : a.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(_m, "_m");
    u(_m, "ue");
    function Lm(i) {
      var o = i.interaction, l = i.event;
      o.interactable && o.interactable.checkAndPreventDefault(l);
    }
    __name(Lm, "Lm");
    u(Lm, "ce");
    function kc(i) {
      var o = i.Interactable;
      o.prototype.preventDefault = _m, o.prototype.checkAndPreventDefault = function(l) {
        return function(c, f, g) {
          var S = c.options.preventDefault;
          if (S !== "never")
            if (S !== "always") {
              if (f.events.supportsPassive && /^touch(start|move)$/.test(g.type)) {
                var b = (0, r.getWindow)(g.target).document, E = f.getDocOptions(b);
                if (!E || !E.events || E.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(g.type) || a.default.element(g.target) && (0, z.matchesSelector)(g.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || g.preventDefault();
            } else
              g.preventDefault();
        }(this, i, l);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(l) {
        for (var c = 0; c < i.interactions.list.length; c++) {
          var f = i.interactions.list[c];
          if (f.element && (f.element === l.target || (0, z.nodeContains)(f.element, l.target)))
            return void f.interactable.checkAndPreventDefault(l);
        }
      } });
    }
    __name(kc, "kc");
    u(kc, "fe"), Object.defineProperty(Ti, "__esModule", { value: true }), Ti.default = void 0, Ti.install = kc;
    var Gm = { id: "core/interactablePreventDefault", install: kc, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o) {
      return i["interactions:".concat(o)] = Lm, i;
    }, {}) };
    Ti.default = Gm;
    var wl = {};
    Object.defineProperty(wl, "__esModule", { value: true }), wl.default = void 0, wl.default = {};
    var uo, xl = {};
    Object.defineProperty(xl, "__esModule", { value: true }), xl.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(uo || (uo = {})), uo.touchAction, uo.boxSizing, uo.noListeners;
    var jm = { id: "dev-tools", install: function() {
    } };
    xl.default = jm;
    var Bn = {};
    Object.defineProperty(Bn, "__esModule", { value: true }), Bn.default = u(/* @__PURE__ */ __name(function i(o) {
      var l = {};
      for (var c in o) {
        var f = o[c];
        a.default.plainObject(f) ? l[c] = i(f) : a.default.array(f) ? l[c] = ze.from(f) : l[c] = f;
      }
      return l;
    }, "i"), "t");
    var $n = {};
    function Dc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, S, b = [], E = true, O = false;
          try {
            for (f = f.call(l); !(E = (g = f.next()).done) && (b.push(g.value), !c || b.length !== c); E = true)
              ;
          } catch (I) {
            O = true, S = I;
          } finally {
            try {
              E || f.return == null || f.return();
            } finally {
              if (O)
                throw S;
            }
          }
          return b;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Nc(l, c);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? Nc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Dc, "Dc");
    u(Dc, "be");
    function Nc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Nc, "Nc");
    u(Nc, "xe");
    function Hm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Hm, "Hm");
    u(Hm, "we");
    function qn(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(qn, "qn");
    u(qn, "_e"), Object.defineProperty($n, "__esModule", { value: true }), $n.default = void 0, $n.getRectOffset = _c;
    var Bm = function() {
      function i(c) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), qn(this, "states", []), qn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), qn(this, "startDelta", void 0), qn(this, "result", void 0), qn(this, "endResult", void 0), qn(this, "edges", void 0), qn(this, "interaction", void 0), this.interaction = c, this.result = Oa();
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(c, f) {
        var g = c.phase, S = this.interaction, b = function(O) {
          var I = O.interactable.options[O.prepared.name], P = I.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var j = I[N];
            return j && j.enabled && { options: j, methods: j._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(S);
        this.prepareStates(b), this.edges = (0, q.default)({}, S.edges), this.startOffset = _c(S.rect, f), this.startDelta = { x: 0, y: 0 };
        var E = this.fillArg({ phase: g, pageCoords: f, preEnd: false });
        return this.result = Oa(), this.startAll(E), this.result = this.setAll(E);
      } }, { key: "fillArg", value: function(c) {
        var f = this.interaction;
        return c.interaction = f, c.interactable = f.interactable, c.element = f.element, c.rect = c.rect || f.rect, c.edges = this.edges, c.startOffset = this.startOffset, c;
      } }, { key: "startAll", value: function(c) {
        for (var f = 0; f < this.states.length; f++) {
          var g = this.states[f];
          g.methods.start && (c.state = g, g.methods.start(c));
        }
      } }, { key: "setAll", value: function(c) {
        var f = c.phase, g = c.preEnd, S = c.skipModifiers, b = c.rect;
        c.coords = (0, q.default)({}, c.pageCoords), c.rect = (0, q.default)({}, b);
        for (var E = S ? this.states.slice(S) : this.states, O = Oa(c.coords, c.rect), I = 0; I < E.length; I++) {
          var P, N = E[I], j = N.options, k = (0, q.default)({}, c.coords), F = null;
          (P = N.methods) != null && P.set && this.shouldDo(j, g, f) && (c.state = N, F = N.methods.set(c), oe.addEdges(this.interaction.edges, c.rect, { x: c.coords.x - k.x, y: c.coords.y - k.y })), O.eventProps.push(F);
        }
        O.delta.x = c.coords.x - c.pageCoords.x, O.delta.y = c.coords.y - c.pageCoords.y, O.rectDelta.left = c.rect.left - b.left, O.rectDelta.right = c.rect.right - b.right, O.rectDelta.top = c.rect.top - b.top, O.rectDelta.bottom = c.rect.bottom - b.bottom;
        var Z = this.result.coords, W = this.result.rect;
        if (Z && W) {
          var ne = O.rect.left !== W.left || O.rect.right !== W.right || O.rect.top !== W.top || O.rect.bottom !== W.bottom;
          O.changed = ne || Z.x !== O.coords.x || Z.y !== O.coords.y;
        }
        return O;
      } }, { key: "applyToInteraction", value: function(c) {
        var f = this.interaction, g = c.phase, S = f.coords.cur, b = f.coords.start, E = this.result, O = this.startDelta, I = E.delta;
        g === "start" && (0, q.default)(this.startDelta, E.delta);
        for (var P = 0; P < [[b, O], [S, I]].length; P++) {
          var N = Dc([[b, O], [S, I]][P], 2), j = N[0], k = N[1];
          j.page.x += k.x, j.page.y += k.y, j.client.x += k.x, j.client.y += k.y;
        }
        var F = this.result.rectDelta, Z = c.rect || f.rect;
        Z.left += F.left, Z.right += F.right, Z.top += F.top, Z.bottom += F.bottom, Z.width = Z.right - Z.left, Z.height = Z.bottom - Z.top;
      } }, { key: "setAndApply", value: function(c) {
        var f = this.interaction, g = c.phase, S = c.preEnd, b = c.skipModifiers, E = this.setAll(this.fillArg({ preEnd: S, phase: g, pageCoords: c.modifiedCoords || f.coords.cur.page }));
        if (this.result = E, !E.changed && (!b || b < this.states.length) && f.interacting())
          return false;
        if (c.modifiedCoords) {
          var O = f.coords.cur.page, I = { x: c.modifiedCoords.x - O.x, y: c.modifiedCoords.y - O.y };
          E.coords.x += I.x, E.coords.y += I.y, E.delta.x += I.x, E.delta.y += I.y;
        }
        this.applyToInteraction(c);
      } }, { key: "beforeEnd", value: function(c) {
        var f = c.interaction, g = c.event, S = this.states;
        if (S && S.length) {
          for (var b = false, E = 0; E < S.length; E++) {
            var O = S[E];
            c.state = O;
            var I = O.options, P = O.methods, N = P.beforeEnd && P.beforeEnd(c);
            if (N)
              return this.endResult = N, false;
            b = b || !b && this.shouldDo(I, true, c.phase, true);
          }
          b && f.move({ event: g, preEnd: true });
        }
      } }, { key: "stop", value: function(c) {
        var f = c.interaction;
        if (this.states && this.states.length) {
          var g = (0, q.default)({ states: this.states, interactable: f.interactable, element: f.element, rect: null }, c);
          this.fillArg(g);
          for (var S = 0; S < this.states.length; S++) {
            var b = this.states[S];
            g.state = b, b.methods.stop && b.methods.stop(g);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(c) {
        this.states = [];
        for (var f = 0; f < c.length; f++) {
          var g = c[f], S = g.options, b = g.methods, E = g.name;
          this.states.push({ options: S, methods: b, index: f, name: E });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(c) {
        var f = c.interaction, g = f.coords, S = f.rect, b = f.modification;
        if (b.result) {
          for (var E = b.startDelta, O = b.result, I = O.delta, P = O.rectDelta, N = [[g.start, E], [g.cur, I]], j = 0; j < N.length; j++) {
            var k = Dc(N[j], 2), F = k[0], Z = k[1];
            F.page.x -= Z.x, F.page.y -= Z.y, F.client.x -= Z.x, F.client.y -= Z.y;
          }
          S.left -= P.left, S.right -= P.right, S.top -= P.top, S.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(c, f, g, S) {
        return !(!c || c.enabled === false || S && !c.endOnly || c.endOnly && !f || g === "start" && !c.setStart);
      } }, { key: "copyFrom", value: function(c) {
        this.startOffset = c.startOffset, this.startDelta = c.startDelta, this.edges = c.edges, this.states = c.states.map(function(f) {
          return (0, Bn.default)(f);
        }), this.result = Oa((0, q.default)({}, c.result.coords), (0, q.default)({}, c.result.rect));
      } }, { key: "destroy", value: function() {
        for (var c in this)
          this[c] = null;
      } }]) && Hm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Oa(i, o) {
      return { rect: o, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Oa, "Oa");
    u(Oa, "Oe");
    function _c(i, o) {
      return i ? { left: o.x - i.left, top: o.y - i.top, right: i.right - o.x, bottom: i.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(_c, "_c");
    u(_c, "Ee"), $n.default = Bm;
    var St = {};
    function Ma(i) {
      var o = i.iEvent, l = i.interaction.modification.result;
      l && (o.modifiers = l.eventProps);
    }
    __name(Ma, "Ma");
    u(Ma, "Te"), Object.defineProperty(St, "__esModule", { value: true }), St.addEventModifiers = Ma, St.default = void 0, St.makeModifier = function(i, o) {
      var l = i.defaults, c = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, f = u(function(g) {
        var S = g || {};
        for (var b in S.enabled = S.enabled !== false, l)
          b in S || (S[b] = l[b]);
        var E = { options: S, methods: c, name: o, enable: function() {
          return S.enabled = true, E;
        }, disable: function() {
          return S.enabled = false, E;
        } };
        return E;
      }, "o");
      return o && typeof o == "string" && (f._defaults = l, f._methods = c), f;
    };
    var $m = { id: "modifiers/base", before: ["actions"], install: function(i) {
      i.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.modification = new $n.default(o);
    }, "interactions:before-action-start": function(i) {
      var o = i.interaction.modification;
      o.start(i, i.interaction.coords.start.page), i.interaction.edges = o.edges, o.applyToInteraction(i);
    }, "interactions:before-action-move": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:before-action-end": function(i) {
      return i.interaction.modification.beforeEnd(i);
    }, "interactions:action-start": Ma, "interactions:action-move": Ma, "interactions:action-end": Ma, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } }, qm = $m;
    St.default = qm;
    var co = {};
    Object.defineProperty(co, "__esModule", { value: true }), co.defaults = void 0, co.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var po = {};
    function El(i) {
      return El = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, El(i);
    }
    __name(El, "El");
    u(El, "De");
    function Fm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Fm, "Fm");
    u(Fm, "Ae");
    function Sl(i, o) {
      return Sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Sl(i, o);
    }
    __name(Sl, "Sl");
    u(Sl, "ze");
    function Um(i, o) {
      if (o && (El(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Be(i);
    }
    __name(Um, "Um");
    u(Um, "Ce");
    function Be(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Be, "Be");
    u(Be, "Re");
    function Ia(i) {
      return Ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ia(i);
    }
    __name(Ia, "Ia");
    u(Ia, "Fe");
    function Ve(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ve, "Ve");
    u(Ve, "Xe"), Object.defineProperty(po, "__esModule", { value: true }), po.InteractEvent = void 0;
    var Lc = function(i) {
      (function(b, E) {
        if (typeof E != "function" && E !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(E && E.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), E && Sl(b, E);
      })(S, i);
      var o, l, c, f, g = (c = S, f = function() {
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
        var b, E = Ia(c);
        if (f) {
          var O = Ia(this).constructor;
          b = Reflect.construct(E, arguments, O);
        } else
          b = E.apply(this, arguments);
        return Um(this, b);
      });
      function S(b, E, O, I, P, N, j) {
        var k;
        (function(Fe, Te) {
          if (!(Fe instanceof Te))
            throw new TypeError("Cannot call a class as a function");
        })(this, S), Ve(Be(k = g.call(this, b)), "relatedTarget", null), Ve(Be(k), "screenX", void 0), Ve(Be(k), "screenY", void 0), Ve(Be(k), "button", void 0), Ve(Be(k), "buttons", void 0), Ve(Be(k), "ctrlKey", void 0), Ve(Be(k), "shiftKey", void 0), Ve(Be(k), "altKey", void 0), Ve(Be(k), "metaKey", void 0), Ve(Be(k), "page", void 0), Ve(Be(k), "client", void 0), Ve(Be(k), "delta", void 0), Ve(Be(k), "rect", void 0), Ve(Be(k), "x0", void 0), Ve(Be(k), "y0", void 0), Ve(Be(k), "t0", void 0), Ve(Be(k), "dt", void 0), Ve(Be(k), "duration", void 0), Ve(Be(k), "clientX0", void 0), Ve(Be(k), "clientY0", void 0), Ve(Be(k), "velocity", void 0), Ve(Be(k), "speed", void 0), Ve(Be(k), "swipe", void 0), Ve(Be(k), "axes", void 0), Ve(Be(k), "preEnd", void 0), P = P || b.element;
        var F = b.interactable, Z = (F && F.options || co.defaults).deltaSource, W = (0, Re.default)(F, P, O), ne = I === "start", ae = I === "end", we = ne ? Be(k) : b.prevEvent, De = ne ? b.coords.start : ae ? { page: we.page, client: we.client, timeStamp: b.coords.cur.timeStamp } : b.coords.cur;
        return k.page = (0, q.default)({}, De.page), k.client = (0, q.default)({}, De.client), k.rect = (0, q.default)({}, b.rect), k.timeStamp = De.timeStamp, ae || (k.page.x -= W.x, k.page.y -= W.y, k.client.x -= W.x, k.client.y -= W.y), k.ctrlKey = E.ctrlKey, k.altKey = E.altKey, k.shiftKey = E.shiftKey, k.metaKey = E.metaKey, k.button = E.button, k.buttons = E.buttons, k.target = P, k.currentTarget = P, k.preEnd = N, k.type = j || O + (I || ""), k.interactable = F, k.t0 = ne ? b.pointers[b.pointers.length - 1].downTime : we.t0, k.x0 = b.coords.start.page.x - W.x, k.y0 = b.coords.start.page.y - W.y, k.clientX0 = b.coords.start.client.x - W.x, k.clientY0 = b.coords.start.client.y - W.y, k.delta = ne || ae ? { x: 0, y: 0 } : { x: k[Z].x - we[Z].x, y: k[Z].y - we[Z].y }, k.dt = b.coords.delta.timeStamp, k.duration = k.timeStamp - k.t0, k.velocity = (0, q.default)({}, b.coords.velocity[Z]), k.speed = (0, Je.default)(k.velocity.x, k.velocity.y), k.swipe = ae || I === "inertiastart" ? k.getSwipe() : null, k;
      }
      __name(S, "S");
      return u(S, "a"), o = S, (l = [{ key: "getSwipe", value: function() {
        var b = this._interaction;
        if (b.prevEvent.speed < 600 || this.timeStamp - b.prevEvent.timeStamp > 150)
          return null;
        var E = 180 * Math.atan2(b.prevEvent.velocityY, b.prevEvent.velocityX) / Math.PI;
        E < 0 && (E += 360);
        var O = 112.5 <= E && E < 247.5, I = 202.5 <= E && E < 337.5;
        return { up: I, down: !I && 22.5 <= E && E < 157.5, left: O, right: !O && (292.5 <= E || E < 67.5), angle: E, speed: b.prevEvent.speed, velocity: { x: b.prevEvent.velocityX, y: b.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Fm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), S;
    }(sr.BaseEvent);
    po.InteractEvent = Lc, Object.defineProperties(Lc.prototype, { pageX: { get: function() {
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
    var fo = {};
    function Gc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Gc, "Gc");
    u(Gc, "We");
    function Wm(i, o, l) {
      return o && Gc(i.prototype, o), l && Gc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Wm, "Wm");
    u(Wm, "Le");
    function ho(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(ho, "ho");
    u(ho, "Ue"), Object.defineProperty(fo, "__esModule", { value: true }), fo.PointerInfo = void 0;
    var Vm = Wm(u(/* @__PURE__ */ __name(function i(o, l, c, f, g) {
      (function(S, b) {
        if (!(S instanceof b))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), ho(this, "id", void 0), ho(this, "pointer", void 0), ho(this, "event", void 0), ho(this, "downTime", void 0), ho(this, "downTarget", void 0), this.id = o, this.pointer = l, this.event = c, this.downTime = f, this.downTarget = g;
    }, "i"), "t"));
    fo.PointerInfo = Vm;
    var Aa, Pa, tr = {};
    function Ym(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Ym, "Ym");
    u(Ym, "$e");
    function Ke(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ke, "Ke");
    u(Ke, "He"), Object.defineProperty(tr, "__esModule", { value: true }), tr.Interaction = void 0, Object.defineProperty(tr, "PointerInfo", { enumerable: true, get: function() {
      return fo.PointerInfo;
    } }), tr.default = tr._ProxyValues = tr._ProxyMethods = void 0, tr._ProxyValues = Aa, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(Aa || (tr._ProxyValues = Aa = {})), tr._ProxyMethods = Pa, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(Pa || (tr._ProxyMethods = Pa = {}));
    var Xm = 0, jc = function() {
      function i(c) {
        var f = this, g = c.pointerType, S = c.scopeFire;
        (function(N, j) {
          if (!(N instanceof j))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ke(this, "interactable", null), Ke(this, "element", null), Ke(this, "rect", null), Ke(this, "_rects", void 0), Ke(this, "edges", null), Ke(this, "_scopeFire", void 0), Ke(this, "prepared", { name: null, axis: null, edges: null }), Ke(this, "pointerType", void 0), Ke(this, "pointers", []), Ke(this, "downEvent", null), Ke(this, "downPointer", {}), Ke(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ke(this, "prevEvent", null), Ke(this, "pointerIsDown", false), Ke(this, "pointerWasMoved", false), Ke(this, "_interacting", false), Ke(this, "_ending", false), Ke(this, "_stopped", true), Ke(this, "_proxy", null), Ke(this, "simulation", null), Ke(this, "doMove", (0, lr.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ke(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), Ke(this, "_id", Xm++), this._scopeFire = S, this.pointerType = g;
        var b = this;
        this._proxy = {};
        var E = u(function(N) {
          Object.defineProperty(f._proxy, N, { get: function() {
            return b[N];
          } });
        }, "a");
        for (var O in Aa)
          E(O);
        var I = u(function(N) {
          Object.defineProperty(f._proxy, N, { value: function() {
            return b[N].apply(b, arguments);
          } });
        }, "l");
        for (var P in Pa)
          I(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, l = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(c, f, g) {
        var S = this.updatePointer(c, f, g, true), b = this.pointers[S];
        this._scopeFire("interactions:down", { pointer: c, event: f, eventTarget: g, pointerIndex: S, pointerInfo: b, type: "down", interaction: this });
      } }, { key: "start", value: function(c, f, g) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (c.name === "gesture" ? 2 : 1) || !f.options[c.name].enabled) && ((0, lr.copyAction)(this.prepared, c), this.interactable = f, this.element = g, this.rect = f.getRect(g), this.edges = this.prepared.edges ? (0, q.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(c, f, g) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(c, f, g, false);
        var S, b, E = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (S = this.coords.cur.client.x - this.coords.start.client.x, b = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Je.default)(S, b) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(c), I = { pointer: c, pointerIndex: O, pointerInfo: this.pointers[O], event: f, type: "move", eventTarget: g, dx: S, dy: b, duplicate: E, interaction: this };
        E || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), E || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(c) {
        c && c.event || J.setZeroCoords(this.coords.delta), (c = (0, q.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, c || {})).phase = "move", this._doPhase(c);
      } }, { key: "pointerUp", value: function(c, f, g, S) {
        var b = this.getPointerIndex(c);
        b === -1 && (b = this.updatePointer(c, f, g, false));
        var E = /cancel$/i.test(f.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(E), { pointer: c, pointerIndex: b, pointerInfo: this.pointers[b], event: f, eventTarget: g, type: E, curEventTarget: S, interaction: this }), this.simulation || this.end(f), this.removePointer(c, f);
      } }, { key: "documentBlur", value: function(c) {
        this.end(c), this._scopeFire("interactions:blur", { event: c, type: "blur", interaction: this });
      } }, { key: "end", value: function(c) {
        var f;
        this._ending = true, c = c || this._latestPointer.event, this.interacting() && (f = this._doPhase({ event: c, interaction: this, phase: "end" })), this._ending = false, f === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(c) {
        var f = J.getPointerId(c);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : ze.findIndex(this.pointers, function(g) {
          return g.id === f;
        });
      } }, { key: "getPointerInfo", value: function(c) {
        return this.pointers[this.getPointerIndex(c)];
      } }, { key: "updatePointer", value: function(c, f, g, S) {
        var b = J.getPointerId(c), E = this.getPointerIndex(c), O = this.pointers[E];
        return S = S !== false && (S || /(down|start)$/i.test(f.type)), O ? O.pointer = c : (O = new fo.PointerInfo(b, c, f, null, null), E = this.pointers.length, this.pointers.push(O)), J.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), S && (this.pointerIsDown = true, O.downTime = this.coords.cur.timeStamp, O.downTarget = g, J.pointerExtend(this.downPointer, c), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = f, this.pointerWasMoved = false)), this._updateLatestPointer(c, f, g), this._scopeFire("interactions:update-pointer", { pointer: c, event: f, eventTarget: g, down: S, pointerInfo: O, pointerIndex: E, interaction: this }), E;
      } }, { key: "removePointer", value: function(c, f) {
        var g = this.getPointerIndex(c);
        if (g !== -1) {
          var S = this.pointers[g];
          this._scopeFire("interactions:remove-pointer", { pointer: c, event: f, eventTarget: null, pointerIndex: g, pointerInfo: S, interaction: this }), this.pointers.splice(g, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(c, f, g) {
        this._latestPointer.pointer = c, this._latestPointer.event = f, this._latestPointer.eventTarget = g;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(c, f, g, S) {
        return new po.InteractEvent(this, c, this.prepared.name, f, this.element, g, S);
      } }, { key: "_fireEvent", value: function(c) {
        var f;
        (f = this.interactable) == null || f.fire(c), (!this.prevEvent || c.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = c);
      } }, { key: "_doPhase", value: function(c) {
        var f = c.event, g = c.phase, S = c.preEnd, b = c.type, E = this.rect;
        if (E && g === "move" && (oe.addEdges(this.edges, E, this.coords.delta[this.interactable.options.deltaSource]), E.width = E.right - E.left, E.height = E.bottom - E.top), this._scopeFire("interactions:before-action-".concat(g), c) === false)
          return false;
        var O = c.iEvent = this._createPreparedEvent(f, g, S, b);
        return this._scopeFire("interactions:action-".concat(g), c), g === "start" && (this.prevEvent = O), this._fireEvent(O), this._scopeFire("interactions:after-action-".concat(g), c), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], l && Ym(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    tr.Interaction = jc;
    var Zm = jc;
    tr.default = Zm;
    var Fn = {};
    function Hc(i) {
      i.pointerIsDown && (Cl(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(Hc, "Hc");
    u(Hc, "tn");
    function Bc(i) {
      Tl(i.interaction);
    }
    __name(Bc, "Bc");
    u(Bc, "en");
    function Tl(i) {
      if (!function(l) {
        return !(!l.offset.pending.x && !l.offset.pending.y);
      }(i))
        return false;
      var o = i.offset.pending;
      return Cl(i.coords.cur, o), Cl(i.coords.delta, o), oe.addEdges(i.edges, i.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(Tl, "Tl");
    u(Tl, "nn");
    function Km(i) {
      var o = i.x, l = i.y;
      this.offset.pending.x += o, this.offset.pending.y += l, this.offset.total.x += o, this.offset.total.y += l;
    }
    __name(Km, "Km");
    u(Km, "rn");
    function Cl(i, o) {
      var l = i.page, c = i.client, f = o.x, g = o.y;
      l.x += f, l.y += g, c.x += f, c.y += g;
    }
    __name(Cl, "Cl");
    u(Cl, "on"), Object.defineProperty(Fn, "__esModule", { value: true }), Fn.addTotal = Hc, Fn.applyPending = Tl, Fn.default = void 0, tr._ProxyMethods.offsetBy = "";
    var Jm = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = Km;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return Hc(i.interaction);
    }, "interactions:before-action-start": Bc, "interactions:before-action-move": Bc, "interactions:before-action-end": function(i) {
      var o = i.interaction;
      if (Tl(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, Qm = Jm;
    Fn.default = Qm;
    var Ci = {};
    function ev(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(ev, "ev");
    u(ev, "un");
    function bt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(bt, "bt");
    u(bt, "cn"), Object.defineProperty(Ci, "__esModule", { value: true }), Ci.default = Ci.InertiaState = void 0;
    var $c = function() {
      function i(c) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), bt(this, "active", false), bt(this, "isModified", false), bt(this, "smoothEnd", false), bt(this, "allowResume", false), bt(this, "modification", void 0), bt(this, "modifierCount", 0), bt(this, "modifierArg", void 0), bt(this, "startCoords", void 0), bt(this, "t0", 0), bt(this, "v0", 0), bt(this, "te", 0), bt(this, "targetOffset", void 0), bt(this, "modifiedOffset", void 0), bt(this, "currentOffset", void 0), bt(this, "lambda_v0", 0), bt(this, "one_ve_v0", 0), bt(this, "timeout", void 0), bt(this, "interaction", void 0), this.interaction = c;
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(c) {
        var f = this.interaction, g = za(f);
        if (!g || !g.enabled)
          return false;
        var S = f.coords.velocity.client, b = (0, Je.default)(S.x, S.y), E = this.modification || (this.modification = new $n.default(f));
        if (E.copyFrom(f.modification), this.t0 = f._now(), this.allowResume = g.allowResume, this.v0 = b, this.currentOffset = { x: 0, y: 0 }, this.startCoords = f.coords.cur.page, this.modifierArg = E.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - f.coords.cur.timeStamp < 50 && b > g.minSpeed && b > g.endSpeed)
          this.startInertia();
        else {
          if (E.result = E.setAll(this.modifierArg), !E.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return f.modification.result.rect = null, f.offsetBy(this.targetOffset), f._doPhase({ interaction: f, event: c, phase: "inertiastart" }), f.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), f.modification.result.rect = null, this.active = true, f.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var c = this, f = this.interaction.coords.velocity.client, g = za(this.interaction), S = g.resistance, b = -Math.log(g.endSpeed / this.v0) / S;
        this.targetOffset = { x: (f.x - b) / S, y: (f.y - b) / S }, this.te = b, this.lambda_v0 = S / this.v0, this.one_ve_v0 = 1 - g.endSpeed / this.v0;
        var E = this.modification, O = this.modifierArg;
        O.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, E.result = E.setAll(O), E.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + E.result.delta.x, y: this.targetOffset.y + E.result.delta.y }), this.onNextFrame(function() {
          return c.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var c = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return c.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(c) {
        var f = this;
        this.timeout = Pt.default.request(function() {
          f.active && c();
        });
      } }, { key: "inertiaTick", value: function() {
        var c, f, g, S, b, E = this, O = this.interaction, I = za(O).resistance, P = (O._now() - this.t0) / 1e3;
        if (P < this.te) {
          var N, j = 1 - (Math.exp(-I * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (c = this.targetOffset.x, f = this.targetOffset.y, g = this.modifiedOffset.x, S = this.modifiedOffset.y, N = { x: qc(b = j, 0, c, g), y: qc(b, 0, f, S) }) : N = { x: this.targetOffset.x * j, y: this.targetOffset.y * j };
          var k = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += k.x, this.currentOffset.y += k.y, O.offsetBy(k), O.move(), this.onNextFrame(function() {
            return E.inertiaTick();
          });
        } else
          O.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var c = this, f = this.interaction, g = f._now() - this.t0, S = za(f).smoothEndDuration;
        if (g < S) {
          var b = { x: Fc(g, 0, this.targetOffset.x, S), y: Fc(g, 0, this.targetOffset.y, S) }, E = { x: b.x - this.currentOffset.x, y: b.y - this.currentOffset.y };
          this.currentOffset.x += E.x, this.currentOffset.y += E.y, f.offsetBy(E), f.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return c.smoothEndTick();
          });
        } else
          f.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(c) {
        var f = c.pointer, g = c.event, S = c.eventTarget, b = this.interaction;
        b.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), b.updatePointer(f, g, S, true), b._doPhase({ interaction: b, event: g, phase: "resume" }), (0, J.copyCoords)(b.coords.prev, b.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Pt.default.cancel(this.timeout);
      } }]) && ev(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function za(i) {
      var o = i.interactable, l = i.prepared;
      return o && o.options && l.name && o.options[l.name].inertia;
    }
    __name(za, "za");
    u(za, "dn"), Ci.InertiaState = $c;
    var tv = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o = i.defaults;
      i.usePlugin(Fn.default), i.usePlugin(St.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.inertia = new $c(o);
    }, "interactions:before-action-end": function(i) {
      var o = i.interaction, l = i.event;
      return (!o._interacting || o.simulation || !o.inertia.start(l)) && null;
    }, "interactions:down": function(i) {
      var o = i.interaction, l = i.eventTarget, c = o.inertia;
      if (c.active)
        for (var f = l; a.default.element(f); ) {
          if (f === o.element) {
            c.resume(i);
            break;
          }
          f = z.parentNode(f);
        }
    }, "interactions:stop": function(i) {
      var o = i.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(i) {
      var o = i.interaction.modification;
      o.stop(i), o.start(i, i.interaction.coords.cur.page), o.applyToInteraction(i);
    }, "interactions:before-action-inertiastart": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:action-resume": St.addEventModifiers, "interactions:action-inertiastart": St.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-resume": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    } } };
    function qc(i, o, l, c) {
      var f = 1 - i;
      return f * f * o + 2 * f * i * l + i * i * c;
    }
    __name(qc, "qc");
    u(qc, "vn");
    function Fc(i, o, l, c) {
      return -l * (i /= c) * (i - 2) + o;
    }
    __name(Fc, "Fc");
    u(Fc, "hn");
    var rv = tv;
    Ci.default = rv;
    var mo = {};
    function nv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(nv, "nv");
    u(nv, "mn");
    function vo(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(vo, "vo");
    u(vo, "bn");
    function Uc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        if (i.immediatePropagationStopped)
          break;
        c(i);
      }
    }
    __name(Uc, "Uc");
    u(Uc, "xn"), Object.defineProperty(mo, "__esModule", { value: true }), mo.Eventable = void 0;
    var iv = function() {
      function i(c) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), vo(this, "options", void 0), vo(this, "types", {}), vo(this, "propagationStopped", false), vo(this, "immediatePropagationStopped", false), vo(this, "global", void 0), this.options = (0, q.default)({}, c || {});
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "fire", value: function(c) {
        var f, g = this.global;
        (f = this.types[c.type]) && Uc(c, f), !c.propagationStopped && g && (f = g[c.type]) && Uc(c, f);
      } }, { key: "on", value: function(c, f) {
        var g = (0, Pe.default)(c, f);
        for (c in g)
          this.types[c] = ze.merge(this.types[c] || [], g[c]);
      } }, { key: "off", value: function(c, f) {
        var g = (0, Pe.default)(c, f);
        for (c in g) {
          var S = this.types[c];
          if (S && S.length)
            for (var b = 0; b < g[c].length; b++) {
              var E = g[c][b], O = S.indexOf(E);
              O !== -1 && S.splice(O, 1);
            }
        }
      } }, { key: "getRect", value: function(c) {
        return null;
      } }]) && nv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    mo.Eventable = iv;
    var go = {};
    Object.defineProperty(go, "__esModule", { value: true }), go.default = function(i, o) {
      if (o.phaselessTypes[i])
        return true;
      for (var l in o.map)
        if (i.indexOf(l) === 0 && i.substr(l.length) in o.phases)
          return true;
      return false;
    };
    var Ol = {};
    Object.defineProperty(Ol, "__esModule", { value: true }), Ol.createInteractStatic = function(i) {
      var o = u(/* @__PURE__ */ __name(function l(c, f) {
        var g = i.interactables.get(c, f);
        return g || ((g = i.interactables.new(c, f)).events.global = l.globalEvents), g;
      }, "l"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = i, o.use = function(l, c) {
        return this.scope.usePlugin(l, c), this;
      }, o.isSet = function(l, c) {
        return !!this.scope.interactables.get(l, c && c.context);
      }, o.on = (0, lr.warnOnce)(function(l, c, f) {
        if (a.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), a.default.array(l)) {
          for (var g = 0; g < l.length; g++) {
            var S = l[g];
            this.on(S, c, f);
          }
          return this;
        }
        if (a.default.object(l)) {
          for (var b in l)
            this.on(b, l[b], c);
          return this;
        }
        return (0, go.default)(l, this.scope.actions) ? this.globalEvents[l] ? this.globalEvents[l].push(c) : this.globalEvents[l] = [c] : this.scope.events.add(this.scope.document, l, c, { options: f }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, lr.warnOnce)(function(l, c, f) {
        if (a.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), a.default.array(l)) {
          for (var g = 0; g < l.length; g++) {
            var S = l[g];
            this.off(S, c, f);
          }
          return this;
        }
        if (a.default.object(l)) {
          for (var b in l)
            this.off(b, l[b], c);
          return this;
        }
        var E;
        return (0, go.default)(l, this.scope.actions) ? l in this.globalEvents && (E = this.globalEvents[l].indexOf(c)) !== -1 && this.globalEvents[l].splice(E, 1) : this.scope.events.remove(this.scope.document, l, c, f), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return $.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return $.default.supportsPointerEvent;
      }, o.stop = function() {
        for (var l = 0; l < this.scope.interactions.list.length; l++)
          this.scope.interactions.list[l].stop();
        return this;
      }, o.pointerMoveTolerance = function(l) {
        return a.default.number(l) ? (this.scope.interactions.pointerMoveTolerance = l, this) : this.scope.interactions.pointerMoveTolerance;
      }, o.addDocument = function(l, c) {
        this.scope.addDocument(l, c);
      }, o.removeDocument = function(l) {
        this.scope.removeDocument(l);
      }, o;
    };
    var Ra = {};
    function ov(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(ov, "ov");
    u(ov, "En");
    function Jr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Jr, "Jr");
    u(Jr, "Sn"), Object.defineProperty(Ra, "__esModule", { value: true }), Ra.Interactable = void 0;
    var av = function() {
      function i(c, f, g, S) {
        (function(b, E) {
          if (!(b instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Jr(this, "options", void 0), Jr(this, "_actions", void 0), Jr(this, "target", void 0), Jr(this, "events", new mo.Eventable()), Jr(this, "_context", void 0), Jr(this, "_win", void 0), Jr(this, "_doc", void 0), Jr(this, "_scopeEvents", void 0), Jr(this, "_rectChecker", void 0), this._actions = f.actions, this.target = c, this._context = f.context || g, this._win = (0, r.getWindow)((0, z.trySelector)(c) ? this._context : c), this._doc = this._win.document, this._scopeEvents = S, this.set(f);
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(c, f) {
        return a.default.func(f.onstart) && this.on("".concat(c, "start"), f.onstart), a.default.func(f.onmove) && this.on("".concat(c, "move"), f.onmove), a.default.func(f.onend) && this.on("".concat(c, "end"), f.onend), a.default.func(f.oninertiastart) && this.on("".concat(c, "inertiastart"), f.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(c, f, g) {
        (a.default.array(f) || a.default.object(f)) && this.off(c, f), (a.default.array(g) || a.default.object(g)) && this.on(c, g);
      } }, { key: "setPerAction", value: function(c, f) {
        var g = this._defaults;
        for (var S in f) {
          var b = S, E = this.options[c], O = f[b];
          b === "listeners" && this.updatePerActionListeners(c, E.listeners, O), a.default.array(O) ? E[b] = ze.from(O) : a.default.plainObject(O) ? (E[b] = (0, q.default)(E[b] || {}, (0, Bn.default)(O)), a.default.object(g.perAction[b]) && "enabled" in g.perAction[b] && (E[b].enabled = O.enabled !== false)) : a.default.bool(O) && a.default.object(g.perAction[b]) ? E[b].enabled = O : E[b] = O;
        }
      } }, { key: "getRect", value: function(c) {
        return c = c || (a.default.element(this.target) ? this.target : null), a.default.string(this.target) && (c = c || this._context.querySelector(this.target)), (0, z.getElementRect)(c);
      } }, { key: "rectChecker", value: function(c) {
        var f = this;
        return a.default.func(c) ? (this._rectChecker = c, this.getRect = function(g) {
          var S = (0, q.default)({}, f._rectChecker(g));
          return "width" in S || (S.width = S.right - S.left, S.height = S.bottom - S.top), S;
        }, this) : c === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(c, f) {
        if ((0, z.trySelector)(f) || a.default.object(f)) {
          for (var g in this.options[c] = f, this._actions.map)
            this.options[g][c] = f;
          return this;
        }
        return this.options[c];
      } }, { key: "origin", value: function(c) {
        return this._backCompatOption("origin", c);
      } }, { key: "deltaSource", value: function(c) {
        return c === "page" || c === "client" ? (this.options.deltaSource = c, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(c) {
        return this._context === c.ownerDocument || (0, z.nodeContains)(this._context, c);
      } }, { key: "testIgnoreAllow", value: function(c, f, g) {
        return !this.testIgnore(c.ignoreFrom, f, g) && this.testAllow(c.allowFrom, f, g);
      } }, { key: "testAllow", value: function(c, f, g) {
        return !c || !!a.default.element(g) && (a.default.string(c) ? (0, z.matchesUpTo)(g, c, f) : !!a.default.element(c) && (0, z.nodeContains)(c, g));
      } }, { key: "testIgnore", value: function(c, f, g) {
        return !(!c || !a.default.element(g)) && (a.default.string(c) ? (0, z.matchesUpTo)(g, c, f) : !!a.default.element(c) && (0, z.nodeContains)(c, g));
      } }, { key: "fire", value: function(c) {
        return this.events.fire(c), this;
      } }, { key: "_onOff", value: function(c, f, g, S) {
        a.default.object(f) && !a.default.array(f) && (S = g, g = null);
        var b = c === "on" ? "add" : "remove", E = (0, Pe.default)(f, g);
        for (var O in E) {
          O === "wheel" && (O = $.default.wheelEvent);
          for (var I = 0; I < E[O].length; I++) {
            var P = E[O][I];
            (0, go.default)(O, this._actions) ? this.events[c](O, P) : a.default.string(this.target) ? this._scopeEvents["".concat(b, "Delegate")](this.target, this._context, O, P, S) : this._scopeEvents[b](this.target, O, P, S);
          }
        }
        return this;
      } }, { key: "on", value: function(c, f, g) {
        return this._onOff("on", c, f, g);
      } }, { key: "off", value: function(c, f, g) {
        return this._onOff("off", c, f, g);
      } }, { key: "set", value: function(c) {
        var f = this._defaults;
        for (var g in a.default.object(c) || (c = {}), this.options = (0, Bn.default)(f.base), this._actions.methodDict) {
          var S = g, b = this._actions.methodDict[S];
          this.options[S] = {}, this.setPerAction(S, (0, q.default)((0, q.default)({}, f.perAction), f.actions[S])), this[b](c[S]);
        }
        for (var E in c)
          a.default.func(this[E]) && this[E](c[E]);
        return this;
      } }, { key: "unset", value: function() {
        if (a.default.string(this.target))
          for (var c in this._scopeEvents.delegatedEvents)
            for (var f = this._scopeEvents.delegatedEvents[c], g = f.length - 1; g >= 0; g--) {
              var S = f[g], b = S.selector, E = S.context, O = S.listeners;
              b === this.target && E === this._context && f.splice(g, 1);
              for (var I = O.length - 1; I >= 0; I--)
                this._scopeEvents.removeDelegate(this.target, this._context, c, O[I][0], O[I][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && ov(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Ra.Interactable = av;
    var ka = {};
    function sv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(sv, "sv");
    u(sv, "Mn");
    function Ml(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ml, "Ml");
    u(Ml, "kn"), Object.defineProperty(ka, "__esModule", { value: true }), ka.InteractableSet = void 0;
    var lv = function() {
      function i(c) {
        var f = this;
        (function(g, S) {
          if (!(g instanceof S))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ml(this, "list", []), Ml(this, "selectorMap", {}), Ml(this, "scope", void 0), this.scope = c, c.addListeners({ "interactable:unset": function(g) {
          var S = g.interactable, b = S.target, E = S._context, O = a.default.string(b) ? f.selectorMap[b] : b[f.scope.id], I = ze.findIndex(O, function(P) {
            return P.context === E;
          });
          O[I] && (O[I].context = null, O[I].interactable = null), O.splice(I, 1);
        } });
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "new", value: function(c, f) {
        f = (0, q.default)(f || {}, { actions: this.scope.actions });
        var g = new this.scope.Interactable(c, f, this.scope.document, this.scope.events), S = { context: g._context, interactable: g };
        return this.scope.addDocument(g._doc), this.list.push(g), a.default.string(c) ? (this.selectorMap[c] || (this.selectorMap[c] = []), this.selectorMap[c].push(S)) : (g.target[this.scope.id] || Object.defineProperty(c, this.scope.id, { value: [], configurable: true }), c[this.scope.id].push(S)), this.scope.fire("interactable:new", { target: c, options: f, interactable: g, win: this.scope._win }), g;
      } }, { key: "get", value: function(c, f) {
        var g = f && f.context || this.scope.document, S = a.default.string(c), b = S ? this.selectorMap[c] : c[this.scope.id];
        if (!b)
          return null;
        var E = ze.find(b, function(O) {
          return O.context === g && (S || O.interactable.inContext(c));
        });
        return E && E.interactable;
      } }, { key: "forEachMatch", value: function(c, f) {
        for (var g = 0; g < this.list.length; g++) {
          var S = this.list[g], b = void 0;
          if ((a.default.string(S.target) ? a.default.element(c) && z.matchesSelector(c, S.target) : c === S.target) && S.inContext(c) && (b = f(S)), b !== void 0)
            return b;
        }
      } }]) && sv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    ka.InteractableSet = lv;
    var Da = {};
    function uv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(uv, "uv");
    u(uv, "An");
    function Il(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Il, "Il");
    u(Il, "zn");
    function Al(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, S, b = [], E = true, O = false;
          try {
            for (f = f.call(l); !(E = (g = f.next()).done) && (b.push(g.value), !c || b.length !== c); E = true)
              ;
          } catch (I) {
            O = true, S = I;
          } finally {
            try {
              E || f.return == null || f.return();
            } finally {
              if (O)
                throw S;
            }
          }
          return b;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Wc(l, c);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? Wc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Al, "Al");
    u(Al, "Cn");
    function Wc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Wc, "Wc");
    u(Wc, "Rn"), Object.defineProperty(Da, "__esModule", { value: true }), Da.default = void 0;
    var cv = function() {
      function i(c) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Il(this, "currentTarget", void 0), Il(this, "originalEvent", void 0), Il(this, "type", void 0), this.originalEvent = c, (0, Ye.default)(this, c);
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && uv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function bo(i) {
      if (!a.default.object(i))
        return { capture: !!i, passive: false };
      var o = (0, q.default)({}, i);
      return o.capture = !!i.capture, o.passive = !!i.passive, o;
    }
    __name(bo, "bo");
    u(bo, "Xn");
    var pv = { id: "events", install: function(i) {
      var o, l = [], c = {}, f = [], g = { add: S, remove: b, addDelegate: function(I, P, N, j, k) {
        var F = bo(k);
        if (!c[N]) {
          c[N] = [];
          for (var Z = 0; Z < f.length; Z++) {
            var W = f[Z];
            S(W, N, E), S(W, N, O, true);
          }
        }
        var ne = c[N], ae = ze.find(ne, function(we) {
          return we.selector === I && we.context === P;
        });
        ae || (ae = { selector: I, context: P, listeners: [] }, ne.push(ae)), ae.listeners.push([j, F]);
      }, removeDelegate: function(I, P, N, j, k) {
        var F, Z = bo(k), W = c[N], ne = false;
        if (W)
          for (F = W.length - 1; F >= 0; F--) {
            var ae = W[F];
            if (ae.selector === I && ae.context === P) {
              for (var we = ae.listeners, De = we.length - 1; De >= 0; De--) {
                var Fe = Al(we[De], 2), Te = Fe[0], $e = Fe[1], wr = $e.capture, en = $e.passive;
                if (Te === j && wr === Z.capture && en === Z.passive) {
                  we.splice(De, 1), we.length || (W.splice(F, 1), b(P, N, E), b(P, N, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: E, delegateUseCapture: O, delegatedEvents: c, documents: f, targets: l, supportsOptions: false, supportsPassive: false };
      function S(I, P, N, j) {
        var k = bo(j), F = ze.find(l, function(Z) {
          return Z.eventTarget === I;
        });
        F || (F = { eventTarget: I, events: {} }, l.push(F)), F.events[P] || (F.events[P] = []), I.addEventListener && !ze.contains(F.events[P], N) && (I.addEventListener(P, N, g.supportsOptions ? k : k.capture), F.events[P].push(N));
      }
      __name(S, "S");
      u(S, "s");
      function b(I, P, N, j) {
        var k = bo(j), F = ze.findIndex(l, function(De) {
          return De.eventTarget === I;
        }), Z = l[F];
        if (Z && Z.events)
          if (P !== "all") {
            var W = false, ne = Z.events[P];
            if (ne) {
              if (N === "all") {
                for (var ae = ne.length - 1; ae >= 0; ae--)
                  b(I, P, ne[ae], k);
                return;
              }
              for (var we = 0; we < ne.length; we++)
                if (ne[we] === N) {
                  I.removeEventListener(P, N, g.supportsOptions ? k : k.capture), ne.splice(we, 1), ne.length === 0 && (delete Z.events[P], W = true);
                  break;
                }
            }
            W && !Object.keys(Z.events).length && l.splice(F, 1);
          } else
            for (P in Z.events)
              Z.events.hasOwnProperty(P) && b(I, P, "all");
      }
      __name(b, "b");
      u(b, "l");
      function E(I, P) {
        for (var N = bo(P), j = new cv(I), k = c[I.type], F = Al(J.getEventTargets(I), 1)[0], Z = F; a.default.element(Z); ) {
          for (var W = 0; W < k.length; W++) {
            var ne = k[W], ae = ne.selector, we = ne.context;
            if (z.matchesSelector(Z, ae) && z.nodeContains(we, F) && z.nodeContains(we, Z)) {
              var De = ne.listeners;
              j.currentTarget = Z;
              for (var Fe = 0; Fe < De.length; Fe++) {
                var Te = Al(De[Fe], 2), $e = Te[0], wr = Te[1], en = wr.capture, Xl = wr.passive;
                en === N.capture && Xl === N.passive && $e(j);
              }
            }
          }
          Z = z.parentNode(Z);
        }
      }
      __name(E, "E");
      u(E, "u");
      function O(I) {
        return E(I, true);
      }
      __name(O, "O");
      return u(O, "c"), (o = i.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return g.supportsOptions = true;
      }, get passive() {
        return g.supportsPassive = true;
      } }), i.events = g, g;
    } };
    Da.default = pv;
    var Na = {};
    Object.defineProperty(Na, "__esModule", { value: true }), Na.default = void 0;
    var _a = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(i) {
      for (var o = 0; o < _a.methodOrder.length; o++) {
        var l;
        l = _a.methodOrder[o];
        var c = _a[l](i);
        if (c)
          return c;
      }
      return null;
    }, simulationResume: function(i) {
      var o = i.pointerType, l = i.eventType, c = i.eventTarget, f = i.scope;
      if (!/down|start/i.test(l))
        return null;
      for (var g = 0; g < f.interactions.list.length; g++) {
        var S = f.interactions.list[g], b = c;
        if (S.simulation && S.simulation.allowResume && S.pointerType === o)
          for (; b; ) {
            if (b === S.element)
              return S;
            b = z.parentNode(b);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var o, l = i.pointerId, c = i.pointerType, f = i.eventType, g = i.scope;
      if (c !== "mouse" && c !== "pen")
        return null;
      for (var S = 0; S < g.interactions.list.length; S++) {
        var b = g.interactions.list[S];
        if (b.pointerType === c) {
          if (b.simulation && !Vc(b, l))
            continue;
          if (b.interacting())
            return b;
          o || (o = b);
        }
      }
      if (o)
        return o;
      for (var E = 0; E < g.interactions.list.length; E++) {
        var O = g.interactions.list[E];
        if (!(O.pointerType !== c || /down/i.test(f) && O.simulation))
          return O;
      }
      return null;
    }, hasPointer: function(i) {
      for (var o = i.pointerId, l = i.scope, c = 0; c < l.interactions.list.length; c++) {
        var f = l.interactions.list[c];
        if (Vc(f, o))
          return f;
      }
      return null;
    }, idle: function(i) {
      for (var o = i.pointerType, l = i.scope, c = 0; c < l.interactions.list.length; c++) {
        var f = l.interactions.list[c];
        if (f.pointers.length === 1) {
          var g = f.interactable;
          if (g && (!g.options.gesture || !g.options.gesture.enabled))
            continue;
        } else if (f.pointers.length >= 2)
          continue;
        if (!f.interacting() && o === f.pointerType)
          return f;
      }
      return null;
    } };
    function Vc(i, o) {
      return i.pointers.some(function(l) {
        return l.id === o;
      });
    }
    __name(Vc, "Vc");
    u(Vc, "Ln");
    var dv = _a;
    Na.default = dv;
    var La = {};
    function Pl(i) {
      return Pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Pl(i);
    }
    __name(Pl, "Pl");
    u(Pl, "Nn");
    function Yc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, S, b = [], E = true, O = false;
          try {
            for (f = f.call(l); !(E = (g = f.next()).done) && (b.push(g.value), !c || b.length !== c); E = true)
              ;
          } catch (I) {
            O = true, S = I;
          } finally {
            try {
              E || f.return == null || f.return();
            } finally {
              if (O)
                throw S;
            }
          }
          return b;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Xc(l, c);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? Xc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Yc, "Yc");
    u(Yc, "qn");
    function Xc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Xc, "Xc");
    u(Xc, "Gn");
    function fv(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(fv, "fv");
    u(fv, "$n");
    function hv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(hv, "hv");
    u(hv, "Hn");
    function zl(i, o) {
      return zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, zl(i, o);
    }
    __name(zl, "zl");
    u(zl, "Kn");
    function mv(i, o) {
      if (o && (Pl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(mv, "mv");
    u(mv, "Zn");
    function Ga(i) {
      return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ga(i);
    }
    __name(Ga, "Ga");
    u(Ga, "Jn"), Object.defineProperty(La, "__esModule", { value: true }), La.default = void 0;
    var Rl = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Zc(i, o) {
      return function(l) {
        var c = o.interactions.list, f = J.getPointerType(l), g = Yc(J.getEventTargets(l), 2), S = g[0], b = g[1], E = [];
        if (/^touch/.test(l.type)) {
          o.prevTouchTime = o.now();
          for (var O = 0; O < l.changedTouches.length; O++) {
            var I = l.changedTouches[O], P = { pointer: I, pointerId: J.getPointerId(I), pointerType: f, eventType: l.type, eventTarget: S, curEventTarget: b, scope: o }, N = Kc(P);
            E.push([P.pointer, P.eventTarget, P.curEventTarget, N]);
          }
        } else {
          var j = false;
          if (!$.default.supportsPointerEvent && /mouse/.test(l.type)) {
            for (var k = 0; k < c.length && !j; k++)
              j = c[k].pointerType !== "mouse" && c[k].pointerIsDown;
            j = j || o.now() - o.prevTouchTime < 500 || l.timeStamp === 0;
          }
          if (!j) {
            var F = { pointer: l, pointerId: J.getPointerId(l), pointerType: f, eventType: l.type, curEventTarget: b, eventTarget: S, scope: o }, Z = Kc(F);
            E.push([F.pointer, F.eventTarget, F.curEventTarget, Z]);
          }
        }
        for (var W = 0; W < E.length; W++) {
          var ne = Yc(E[W], 4), ae = ne[0], we = ne[1], De = ne[2];
          ne[3][i](ae, l, we, De);
        }
      };
    }
    __name(Zc, "Zc");
    u(Zc, "tr");
    function Kc(i) {
      var o = i.pointerType, l = i.scope, c = { interaction: Na.default.search(i), searchDetails: i };
      return l.fire("interactions:find", c), c.interaction || l.interactions.new({ pointerType: o });
    }
    __name(Kc, "Kc");
    u(Kc, "er");
    function kl(i, o) {
      var l = i.doc, c = i.scope, f = i.options, g = c.interactions.docEvents, S = c.events, b = S[o];
      for (var E in c.browser.isIOS && !f.events && (f.events = { passive: false }), S.delegatedEvents)
        b(l, E, S.delegateListener), b(l, E, S.delegateUseCapture, true);
      for (var O = f && f.events, I = 0; I < g.length; I++) {
        var P = g[I];
        b(l, P.type, P.listener, O);
      }
    }
    __name(kl, "kl");
    u(kl, "nr");
    var vv = { id: "core/interactions", install: function(i) {
      for (var o = {}, l = 0; l < Rl.length; l++) {
        var c = Rl[l];
        o[c] = Zc(c, i);
      }
      var f, g = $.default.pEventTypes;
      function S() {
        for (var b = 0; b < i.interactions.list.length; b++) {
          var E = i.interactions.list[b];
          if (E.pointerIsDown && E.pointerType === "touch" && !E._interacting)
            for (var O = function() {
              var P = E.pointers[I];
              i.documents.some(function(N) {
                var j = N.doc;
                return (0, z.nodeContains)(j, P.downTarget);
              }) || E.removePointer(P.pointer, P.event);
            }, I = 0; I < E.pointers.length; I++)
              O();
        }
      }
      __name(S, "S");
      u(S, "a"), (f = C.default.PointerEvent ? [{ type: g.down, listener: S }, { type: g.down, listener: o.pointerDown }, { type: g.move, listener: o.pointerMove }, { type: g.up, listener: o.pointerUp }, { type: g.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: S }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(b) {
        for (var E = 0; E < i.interactions.list.length; E++)
          i.interactions.list[E].documentBlur(b);
      } }), i.prevTouchTime = 0, i.Interaction = function(b) {
        (function(k, F) {
          if (typeof F != "function" && F !== null)
            throw new TypeError("Super expression must either be null or a function");
          k.prototype = Object.create(F && F.prototype, { constructor: { value: k, writable: true, configurable: true } }), Object.defineProperty(k, "prototype", { writable: false }), F && zl(k, F);
        })(j, b);
        var E, O, I, P, N = (I = j, P = function() {
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
          var k, F = Ga(I);
          if (P) {
            var Z = Ga(this).constructor;
            k = Reflect.construct(F, arguments, Z);
          } else
            k = F.apply(this, arguments);
          return mv(this, k);
        });
        function j() {
          return fv(this, j), N.apply(this, arguments);
        }
        __name(j, "j");
        return u(j, "s"), E = j, (O = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(k) {
          i.interactions.pointerMoveTolerance = k;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && hv(E.prototype, O), Object.defineProperty(E, "prototype", { writable: false }), j;
      }(tr.default), i.interactions = { list: [], new: function(b) {
        b.scopeFire = function(O, I) {
          return i.fire(O, I);
        };
        var E = new i.Interaction(b);
        return i.interactions.list.push(E), E;
      }, listeners: o, docEvents: f, pointerMoveTolerance: 1 }, i.usePlugin(Ti.default);
    }, listeners: { "scope:add-document": function(i) {
      return kl(i, "add");
    }, "scope:remove-document": function(i) {
      return kl(i, "remove");
    }, "interactable:unset": function(i, o) {
      for (var l = i.interactable, c = o.interactions.list.length - 1; c >= 0; c--) {
        var f = o.interactions.list[c];
        f.interactable === l && (f.stop(), o.fire("interactions:destroy", { interaction: f }), f.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(c, 1));
      }
    } }, onDocSignal: kl, doOnInteractions: Zc, methodNames: Rl }, gv = vv;
    La.default = gv;
    var yo = {};
    function Dl(i) {
      return Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Dl(i);
    }
    __name(Dl, "Dl");
    u(Dl, "ar");
    function wo() {
      return wo = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, o, l) {
        var c = bv(i, o);
        if (c) {
          var f = Object.getOwnPropertyDescriptor(c, o);
          return f.get ? f.get.call(arguments.length < 3 ? i : l) : f.value;
        }
      }, wo.apply(this, arguments);
    }
    __name(wo, "wo");
    u(wo, "sr");
    function bv(i, o) {
      for (; !Object.prototype.hasOwnProperty.call(i, o) && (i = gn(i)) !== null; )
        ;
      return i;
    }
    __name(bv, "bv");
    u(bv, "lr");
    function Nl(i, o) {
      return Nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Nl(i, o);
    }
    __name(Nl, "Nl");
    u(Nl, "ur");
    function yv(i, o) {
      if (o && (Dl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(yv, "yv");
    u(yv, "cr");
    function gn(i) {
      return gn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, gn(i);
    }
    __name(gn, "gn");
    u(gn, "fr");
    function Jc(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Jc, "Jc");
    u(Jc, "dr");
    function Qc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Qc, "Qc");
    u(Qc, "pr");
    function ep(i, o, l) {
      return o && Qc(i.prototype, o), l && Qc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(ep, "ep");
    u(ep, "vr");
    function Tt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Tt, "Tt");
    u(Tt, "hr"), Object.defineProperty(yo, "__esModule", { value: true }), yo.Scope = void 0, yo.initScope = tp;
    var wv = function() {
      function i() {
        var o = this;
        Jc(this, i), Tt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), Tt(this, "isInitialized", false), Tt(this, "listenerMaps", []), Tt(this, "browser", $.default), Tt(this, "defaults", (0, Bn.default)(co.defaults)), Tt(this, "Eventable", mo.Eventable), Tt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), Tt(this, "interactStatic", (0, Ol.createInteractStatic)(this)), Tt(this, "InteractEvent", po.InteractEvent), Tt(this, "Interactable", void 0), Tt(this, "interactables", new ka.InteractableSet(this)), Tt(this, "_win", void 0), Tt(this, "document", void 0), Tt(this, "window", void 0), Tt(this, "documents", []), Tt(this, "_plugins", { list: [], map: {} }), Tt(this, "onWindowUnload", function(c) {
          return o.removeDocument(c.target);
        });
        var l = this;
        this.Interactable = function(c) {
          (function(E, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function");
            E.prototype = Object.create(O && O.prototype, { constructor: { value: E, writable: true, configurable: true } }), Object.defineProperty(E, "prototype", { writable: false }), O && Nl(E, O);
          })(b, c);
          var f, g, S = (f = b, g = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (E) {
              return false;
            }
          }(), function() {
            var E, O = gn(f);
            if (g) {
              var I = gn(this).constructor;
              E = Reflect.construct(O, arguments, I);
            } else
              E = O.apply(this, arguments);
            return yv(this, E);
          });
          function b() {
            return Jc(this, b), S.apply(this, arguments);
          }
          __name(b, "b");
          return u(b, "i"), ep(b, [{ key: "_defaults", get: function() {
            return l.defaults;
          } }, { key: "set", value: function(E) {
            return wo(gn(b.prototype), "set", this).call(this, E), l.fire("interactable:set", { options: E, interactable: this }), this;
          } }, { key: "unset", value: function() {
            wo(gn(b.prototype), "unset", this).call(this);
            var E = l.interactables.list.indexOf(this);
            E < 0 || (wo(gn(b.prototype), "unset", this).call(this), l.interactables.list.splice(E, 1), l.fire("interactable:unset", { interactable: this }));
          } }]), b;
        }(Ra.Interactable);
      }
      __name(i, "i");
      return u(i, "t"), ep(i, [{ key: "addListeners", value: function(o, l) {
        this.listenerMaps.push({ id: l, map: o });
      } }, { key: "fire", value: function(o, l) {
        for (var c = 0; c < this.listenerMaps.length; c++) {
          var f = this.listenerMaps[c].map[o];
          if (f && f(l, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : tp(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, l) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, l), o.listeners && o.before) {
          for (var c = 0, f = this.listenerMaps.length, g = o.before.reduce(function(b, E) {
            return b[E] = true, b[rp(E)] = true, b;
          }, {}); c < f; c++) {
            var S = this.listenerMaps[c].id;
            if (g[S] || g[rp(S)])
              break;
          }
          this.listenerMaps.splice(c, 0, { id: o.id, map: o.listeners });
        } else
          o.listeners && this.listenerMaps.push({ id: o.id, map: o.listeners });
        return this;
      } }, { key: "addDocument", value: function(o, l) {
        if (this.getDocIndex(o) !== -1)
          return false;
        var c = r.getWindow(o);
        l = l ? (0, q.default)({}, l) : {}, this.documents.push({ doc: o, options: l }), this.events.documents.push(o), o !== this.document && this.events.add(c, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: c, scope: this, options: l });
      } }, { key: "removeDocument", value: function(o) {
        var l = this.getDocIndex(o), c = r.getWindow(o), f = this.documents[l].options;
        this.events.remove(c, "unload", this.onWindowUnload), this.documents.splice(l, 1), this.events.documents.splice(l, 1), this.fire("scope:remove-document", { doc: o, window: c, scope: this, options: f });
      } }, { key: "getDocIndex", value: function(o) {
        for (var l = 0; l < this.documents.length; l++)
          if (this.documents[l].doc === o)
            return l;
        return -1;
      } }, { key: "getDocOptions", value: function(o) {
        var l = this.getDocIndex(o);
        return l === -1 ? null : this.documents[l].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), i;
    }();
    function tp(i, o) {
      return i.isInitialized = true, a.default.window(o) && r.init(o), C.default.init(o), $.default.init(o), Pt.default.init(o), i.window = o, i.document = o.document, i.usePlugin(La.default), i.usePlugin(Da.default), i;
    }
    __name(tp, "tp");
    u(tp, "yr");
    function rp(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(rp, "rp");
    u(rp, "mr"), yo.Scope = wv;
    var _l = {}, dt = {};
    Object.defineProperty(dt, "__esModule", { value: true });
    var xv = {};
    dt.default = void 0, Object.keys(_l).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(xv, i) || i in dt && dt[i] === _l[i] || Object.defineProperty(dt, i, { enumerable: true, get: function() {
        return _l[i];
      } }));
    });
    var np = new yo.Scope(), Ev = np.interactStatic;
    dt.default = Ev;
    var Sv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    np.init(Sv);
    var ja = {};
    Object.defineProperty(ja, "__esModule", { value: true }), ja.default = void 0, ja.default = function() {
    };
    var Ha = {};
    Object.defineProperty(Ha, "__esModule", { value: true }), Ha.default = void 0, Ha.default = function() {
    };
    var Ba = {};
    function ip(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, S, b = [], E = true, O = false;
          try {
            for (f = f.call(l); !(E = (g = f.next()).done) && (b.push(g.value), !c || b.length !== c); E = true)
              ;
          } catch (I) {
            O = true, S = I;
          } finally {
            try {
              E || f.return == null || f.return();
            } finally {
              if (O)
                throw S;
            }
          }
          return b;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return op(l, c);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? op(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ip, "ip");
    u(ip, "jr");
    function op(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(op, "op");
    u(op, "Mr"), Object.defineProperty(Ba, "__esModule", { value: true }), Ba.default = void 0, Ba.default = function(i) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(c) {
        var f = ip(c, 2), g = f[0], S = f[1];
        return g in i || S in i;
      }), l = u(function(c, f) {
        for (var g = i.range, S = i.limits, b = S === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : S, E = i.offset, O = E === void 0 ? { x: 0, y: 0 } : E, I = { range: g, grid: i, x: null, y: null }, P = 0; P < o.length; P++) {
          var N = ip(o[P], 2), j = N[0], k = N[1], F = Math.round((c - O.x) / i[j]), Z = Math.round((f - O.y) / i[k]);
          I[j] = Math.max(b.left, Math.min(b.right, F * i[j] + O.x)), I[k] = Math.max(b.top, Math.min(b.bottom, Z * i[k] + O.y));
        }
        return I;
      }, "n");
      return l.grid = i, l.coordFields = o, l;
    };
    var xo = {};
    Object.defineProperty(xo, "__esModule", { value: true }), Object.defineProperty(xo, "edgeTarget", { enumerable: true, get: function() {
      return ja.default;
    } }), Object.defineProperty(xo, "elements", { enumerable: true, get: function() {
      return Ha.default;
    } }), Object.defineProperty(xo, "grid", { enumerable: true, get: function() {
      return Ba.default;
    } });
    var $a = {};
    Object.defineProperty($a, "__esModule", { value: true }), $a.default = void 0;
    var Tv = { id: "snappers", install: function(i) {
      var o = i.interactStatic;
      o.snappers = (0, q.default)(o.snappers || {}, xo), o.createSnapGrid = o.snappers.grid;
    } }, Cv = Tv;
    $a.default = Cv;
    var Oi = {};
    function ap(i, o) {
      var l = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(i);
        o && (c = c.filter(function(f) {
          return Object.getOwnPropertyDescriptor(i, f).enumerable;
        })), l.push.apply(l, c);
      }
      return l;
    }
    __name(ap, "ap");
    u(ap, "Cr");
    function Ll(i) {
      for (var o = 1; o < arguments.length; o++) {
        var l = arguments[o] != null ? arguments[o] : {};
        o % 2 ? ap(Object(l), true).forEach(function(c) {
          Ov(i, c, l[c]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : ap(Object(l)).forEach(function(c) {
          Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(l, c));
        });
      }
      return i;
    }
    __name(Ll, "Ll");
    u(Ll, "Rr");
    function Ov(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ov, "Ov");
    u(Ov, "Fr"), Object.defineProperty(Oi, "__esModule", { value: true }), Oi.default = Oi.aspectRatio = void 0;
    var sp = { start: function(i) {
      var o = i.state, l = i.rect, c = i.edges, f = i.pageCoords, g = o.options.ratio, S = o.options, b = S.equalDelta, E = S.modifiers;
      g === "preserve" && (g = l.width / l.height), o.startCoords = (0, q.default)({}, f), o.startRect = (0, q.default)({}, l), o.ratio = g, o.equalDelta = b;
      var O = o.linkedEdges = { top: c.top || c.left && !c.bottom, left: c.left || c.top && !c.right, bottom: c.bottom || c.right && !c.top, right: c.right || c.bottom && !c.left };
      if (o.xIsPrimaryAxis = !(!c.left && !c.right), o.equalDelta) {
        var I = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        o.edgeSign = { x: I, y: I };
      } else
        o.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, q.default)(i.edges, O), E && E.length) {
        var P = new $n.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(E), o.subModification = P, P.startAll(Ll({}, i));
      }
    }, set: function(i) {
      var o = i.state, l = i.rect, c = i.coords, f = (0, q.default)({}, c), g = o.equalDelta ? Mv : Iv;
      if (g(o, o.xIsPrimaryAxis, c, l), !o.subModification)
        return null;
      var S = (0, q.default)({}, l);
      (0, oe.addEdges)(o.linkedEdges, S, { x: c.x - f.x, y: c.y - f.y });
      var b = o.subModification.setAll(Ll(Ll({}, i), {}, { rect: S, edges: o.linkedEdges, pageCoords: c, prevCoords: c, prevRect: S })), E = b.delta;
      return b.changed && (g(o, Math.abs(E.x) > Math.abs(E.y), b.coords, b.rect), (0, q.default)(c, b.coords)), b.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Mv(i, o, l) {
      var c = i.startCoords, f = i.edgeSign;
      o ? l.y = c.y + (l.x - c.x) * f.y : l.x = c.x + (l.y - c.y) * f.x;
    }
    __name(Mv, "Mv");
    u(Mv, "Br");
    function Iv(i, o, l, c) {
      var f = i.startRect, g = i.startCoords, S = i.ratio, b = i.edgeSign;
      if (o) {
        var E = c.width / S;
        l.y = g.y + (E - f.height) * b.y;
      } else {
        var O = c.height * S;
        l.x = g.x + (O - f.width) * b.x;
      }
    }
    __name(Iv, "Iv");
    u(Iv, "Yr"), Oi.aspectRatio = sp;
    var Av = (0, St.makeModifier)(sp, "aspectRatio");
    Oi.default = Av;
    var Un = {};
    Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0;
    var lp = u(function() {
    }, "Ur");
    lp._defaults = {};
    var Pv = lp;
    Un.default = Pv;
    var Gl = {};
    Object.defineProperty(Gl, "__esModule", { value: true }), Object.defineProperty(Gl, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var Gt = {};
    function jl(i, o, l) {
      return a.default.func(i) ? oe.resolveRectLike(i, o.interactable, o.element, [l.x, l.y, o]) : oe.resolveRectLike(i, o.interactable, o.element);
    }
    __name(jl, "jl");
    u(jl, "Gr"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0, Gt.getRestrictionRect = jl, Gt.restrict = void 0;
    var up = { start: function(i) {
      var o = i.rect, l = i.startOffset, c = i.state, f = i.interaction, g = i.pageCoords, S = c.options, b = S.elementRect, E = (0, q.default)({ left: 0, top: 0, right: 0, bottom: 0 }, S.offset || {});
      if (o && b) {
        var O = jl(S.restriction, f, g);
        if (O) {
          var I = O.right - O.left - o.width, P = O.bottom - O.top - o.height;
          I < 0 && (E.left += I, E.right += I), P < 0 && (E.top += P, E.bottom += P);
        }
        E.left += l.left - o.width * b.left, E.top += l.top - o.height * b.top, E.right += l.right - o.width * (1 - b.right), E.bottom += l.bottom - o.height * (1 - b.bottom);
      }
      c.offset = E;
    }, set: function(i) {
      var o = i.coords, l = i.interaction, c = i.state, f = c.options, g = c.offset, S = jl(f.restriction, l, o);
      if (S) {
        var b = oe.xywhToTlbr(S);
        o.x = Math.max(Math.min(b.right - g.right, o.x), b.left + g.left), o.y = Math.max(Math.min(b.bottom - g.bottom, o.y), b.top + g.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Gt.restrict = up;
    var zv = (0, St.makeModifier)(up, "restrict");
    Gt.default = zv;
    var jr = {};
    Object.defineProperty(jr, "__esModule", { value: true }), jr.restrictEdges = jr.default = void 0;
    var cp = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, pp = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function dp(i, o) {
      for (var l = ["top", "left", "bottom", "right"], c = 0; c < l.length; c++) {
        var f = l[c];
        f in i || (i[f] = o[f]);
      }
      return i;
    }
    __name(dp, "dp");
    u(dp, "Qr");
    var fp = { noInner: cp, noOuter: pp, start: function(i) {
      var o, l = i.interaction, c = i.startOffset, f = i.state, g = f.options;
      if (g) {
        var S = (0, Gt.getRestrictionRect)(g.offset, l, l.coords.start.page);
        o = oe.rectToXY(S);
      }
      o = o || { x: 0, y: 0 }, f.offset = { top: o.y + c.top, left: o.x + c.left, bottom: o.y - c.bottom, right: o.x - c.right };
    }, set: function(i) {
      var o = i.coords, l = i.edges, c = i.interaction, f = i.state, g = f.offset, S = f.options;
      if (l) {
        var b = (0, q.default)({}, o), E = (0, Gt.getRestrictionRect)(S.inner, c, b) || {}, O = (0, Gt.getRestrictionRect)(S.outer, c, b) || {};
        dp(E, cp), dp(O, pp), l.top ? o.y = Math.min(Math.max(O.top + g.top, b.y), E.top + g.top) : l.bottom && (o.y = Math.max(Math.min(O.bottom + g.bottom, b.y), E.bottom + g.bottom)), l.left ? o.x = Math.min(Math.max(O.left + g.left, b.x), E.left + g.left) : l.right && (o.x = Math.max(Math.min(O.right + g.right, b.x), E.right + g.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    jr.restrictEdges = fp;
    var Rv = (0, St.makeModifier)(fp, "restrictEdges");
    jr.default = Rv;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.restrictRect = Mi.default = void 0;
    var kv = (0, q.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Gt.restrict.defaults), hp = { start: Gt.restrict.start, set: Gt.restrict.set, defaults: kv };
    Mi.restrictRect = hp;
    var Dv = (0, St.makeModifier)(hp, "restrictRect");
    Mi.default = Dv;
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.restrictSize = Ii.default = void 0;
    var Nv = { width: -1 / 0, height: -1 / 0 }, _v = { width: 1 / 0, height: 1 / 0 }, mp = { start: function(i) {
      return jr.restrictEdges.start(i);
    }, set: function(i) {
      var o = i.interaction, l = i.state, c = i.rect, f = i.edges, g = l.options;
      if (f) {
        var S = oe.tlbrToXywh((0, Gt.getRestrictionRect)(g.min, o, i.coords)) || Nv, b = oe.tlbrToXywh((0, Gt.getRestrictionRect)(g.max, o, i.coords)) || _v;
        l.options = { endOnly: g.endOnly, inner: (0, q.default)({}, jr.restrictEdges.noInner), outer: (0, q.default)({}, jr.restrictEdges.noOuter) }, f.top ? (l.options.inner.top = c.bottom - S.height, l.options.outer.top = c.bottom - b.height) : f.bottom && (l.options.inner.bottom = c.top + S.height, l.options.outer.bottom = c.top + b.height), f.left ? (l.options.inner.left = c.right - S.width, l.options.outer.left = c.right - b.width) : f.right && (l.options.inner.right = c.left + S.width, l.options.outer.right = c.left + b.width), jr.restrictEdges.set(i), l.options = g;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Ii.restrictSize = mp;
    var Lv = (0, St.makeModifier)(mp, "restrictSize");
    Ii.default = Lv;
    var Hl = {};
    Object.defineProperty(Hl, "__esModule", { value: true }), Object.defineProperty(Hl, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var bn = {};
    Object.defineProperty(bn, "__esModule", { value: true }), bn.snap = bn.default = void 0;
    var vp = { start: function(i) {
      var o, l = i.interaction, c = i.interactable, f = i.element, g = i.rect, S = i.state, b = i.startOffset, E = S.options, O = E.offsetWithOrigin ? function(N) {
        var j = N.interaction.element;
        return (0, oe.rectToXY)((0, oe.resolveRectLike)(N.state.options.origin, null, null, [j])) || (0, Re.default)(N.interactable, j, N.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (E.offset === "startCoords")
        o = { x: l.coords.start.page.x, y: l.coords.start.page.y };
      else {
        var I = (0, oe.resolveRectLike)(E.offset, c, f, [l]);
        (o = (0, oe.rectToXY)(I) || { x: 0, y: 0 }).x += O.x, o.y += O.y;
      }
      var P = E.relativePoints;
      S.offsets = g && P && P.length ? P.map(function(N, j) {
        return { index: j, relativePoint: N, x: b.left - g.width * N.x + o.x, y: b.top - g.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(i) {
      var o = i.interaction, l = i.coords, c = i.state, f = c.options, g = c.offsets, S = (0, Re.default)(o.interactable, o.element, o.prepared.name), b = (0, q.default)({}, l), E = [];
      f.offsetWithOrigin || (b.x -= S.x, b.y -= S.y);
      for (var O = 0; O < g.length; O++)
        for (var I = g[O], P = b.x - I.x, N = b.y - I.y, j = 0, k = f.targets.length; j < k; j++) {
          var F, Z = f.targets[j];
          (F = a.default.func(Z) ? Z(P, N, o._proxy, I, j) : Z) && E.push({ x: (a.default.number(F.x) ? F.x : P) + I.x, y: (a.default.number(F.y) ? F.y : N) + I.y, range: a.default.number(F.range) ? F.range : f.range, source: Z, index: j, offset: I });
        }
      for (var W = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < E.length; ne++) {
        var ae = E[ne], we = ae.range, De = ae.x - b.x, Fe = ae.y - b.y, Te = (0, Je.default)(De, Fe), $e = Te <= we;
        we === 1 / 0 && W.inRange && W.range !== 1 / 0 && ($e = false), W.target && !($e ? W.inRange && we !== 1 / 0 ? Te / we < W.distance / W.range : we === 1 / 0 && W.range !== 1 / 0 || Te < W.distance : !W.inRange && Te < W.distance) || (W.target = ae, W.distance = Te, W.range = we, W.inRange = $e, W.delta.x = De, W.delta.y = Fe);
      }
      return W.inRange && (l.x = W.target.x, l.y = W.target.y), c.closest = W, W;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    bn.snap = vp;
    var Gv = (0, St.makeModifier)(vp, "snap");
    bn.default = Gv;
    var Qr = {};
    function gp(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(gp, "gp");
    u(gp, "yo"), Object.defineProperty(Qr, "__esModule", { value: true }), Qr.snapSize = Qr.default = void 0;
    var bp = { start: function(i) {
      var o = i.state, l = i.edges, c = o.options;
      if (!l)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }], offset: c.offset || "self", origin: { x: 0, y: 0 }, range: c.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], bn.snap.start(i), o.offsets = i.state.offsets, i.state = o;
    }, set: function(i) {
      var o, l, c = i.interaction, f = i.state, g = i.coords, S = f.options, b = f.offsets, E = { x: g.x - b[0].x, y: g.y - b[0].y };
      f.options = (0, q.default)({}, S), f.options.targets = [];
      for (var O = 0; O < (S.targets || []).length; O++) {
        var I = (S.targets || [])[O], P = void 0;
        if (P = a.default.func(I) ? I(E.x, E.y, c) : I) {
          for (var N = 0; N < f.targetFields.length; N++) {
            var j = (o = f.targetFields[N], l = 2, function(W) {
              if (Array.isArray(W))
                return W;
            }(o) || function(W, ne) {
              var ae = W == null ? null : typeof Symbol != "undefined" && W[Symbol.iterator] || W["@@iterator"];
              if (ae != null) {
                var we, De, Fe = [], Te = true, $e = false;
                try {
                  for (ae = ae.call(W); !(Te = (we = ae.next()).done) && (Fe.push(we.value), !ne || Fe.length !== ne); Te = true)
                    ;
                } catch (wr) {
                  $e = true, De = wr;
                } finally {
                  try {
                    Te || ae.return == null || ae.return();
                  } finally {
                    if ($e)
                      throw De;
                  }
                }
                return Fe;
              }
            }(o, l) || function(W, ne) {
              if (W) {
                if (typeof W == "string")
                  return gp(W, ne);
                var ae = Object.prototype.toString.call(W).slice(8, -1);
                return ae === "Object" && W.constructor && (ae = W.constructor.name), ae === "Map" || ae === "Set" ? Array.from(W) : ae === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? gp(W, ne) : void 0;
              }
            }(o, l) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), k = j[0], F = j[1];
            if (k in P || F in P) {
              P.x = P[k], P.y = P[F];
              break;
            }
          }
          f.options.targets.push(P);
        }
      }
      var Z = bn.snap.set(i);
      return f.options = S, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Qr.snapSize = bp;
    var jv = (0, St.makeModifier)(bp, "snapSize");
    Qr.default = jv;
    var Ai = {};
    Object.defineProperty(Ai, "__esModule", { value: true }), Ai.snapEdges = Ai.default = void 0;
    var yp = { start: function(i) {
      var o = i.edges;
      return o ? (i.state.targetFields = i.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Qr.snapSize.start(i)) : null;
    }, set: Qr.snapSize.set, defaults: (0, q.default)((0, Bn.default)(Qr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Ai.snapEdges = yp;
    var Hv = (0, St.makeModifier)(yp, "snapEdges");
    Ai.default = Hv;
    var Bl = {};
    Object.defineProperty(Bl, "__esModule", { value: true }), Object.defineProperty(Bl, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var $l = {};
    Object.defineProperty($l, "__esModule", { value: true }), Object.defineProperty($l, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var Pi = {};
    Object.defineProperty(Pi, "__esModule", { value: true }), Pi.default = void 0;
    var Bv = { aspectRatio: Oi.default, restrictEdges: jr.default, restrict: Gt.default, restrictRect: Mi.default, restrictSize: Ii.default, snapEdges: Ai.default, snap: bn.default, snapSize: Qr.default, spring: Bl.default, avoid: Gl.default, transform: $l.default, rubberband: Hl.default };
    Pi.default = Bv;
    var qa = {};
    Object.defineProperty(qa, "__esModule", { value: true }), qa.default = void 0;
    var $v = { id: "modifiers", install: function(i) {
      var o = i.interactStatic;
      for (var l in i.usePlugin(St.default), i.usePlugin($a.default), o.modifiers = Pi.default, Pi.default) {
        var c = Pi.default[l], f = c._defaults, g = c._methods;
        f._methods = g, i.defaults.perAction[l] = f;
      }
    } }, qv = $v;
    qa.default = qv;
    var Wn = {};
    function ql(i) {
      return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ql(i);
    }
    __name(ql, "ql");
    u(ql, "Io");
    function Fv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Fv, "Fv");
    u(Fv, "Do");
    function Fl(i, o) {
      return Fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Fl(i, o);
    }
    __name(Fl, "Fl");
    u(Fl, "Ao");
    function Uv(i, o) {
      if (o && (ql(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ul(i);
    }
    __name(Uv, "Uv");
    u(Uv, "zo");
    function Ul(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Ul, "Ul");
    u(Ul, "Co");
    function Fa(i) {
      return Fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Fa(i);
    }
    __name(Fa, "Fa");
    u(Fa, "Ro"), Object.defineProperty(Wn, "__esModule", { value: true }), Wn.default = Wn.PointerEvent = void 0;
    var Wv = function(i) {
      (function(b, E) {
        if (typeof E != "function" && E !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(E && E.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), E && Fl(b, E);
      })(S, i);
      var o, l, c, f, g = (c = S, f = function() {
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
        var b, E = Fa(c);
        if (f) {
          var O = Fa(this).constructor;
          b = Reflect.construct(E, arguments, O);
        } else
          b = E.apply(this, arguments);
        return Uv(this, b);
      });
      function S(b, E, O, I, P, N) {
        var j;
        if (function(Z, W) {
          if (!(Z instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }(this, S), j = g.call(this, P), J.pointerExtend(Ul(j), O), O !== E && J.pointerExtend(Ul(j), E), j.timeStamp = N, j.originalEvent = O, j.type = b, j.pointerId = J.getPointerId(E), j.pointerType = J.getPointerType(E), j.target = I, j.currentTarget = null, b === "tap") {
          var k = P.getPointerIndex(E);
          j.dt = j.timeStamp - P.pointers[k].downTime;
          var F = j.timeStamp - P.tapTime;
          j.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === j.target && F < 500;
        } else
          b === "doubletap" && (j.dt = E.timeStamp - P.tapTime, j.double = true);
        return j;
      }
      __name(S, "S");
      return u(S, "a"), o = S, (l = [{ key: "_subtractOrigin", value: function(b) {
        var E = b.x, O = b.y;
        return this.pageX -= E, this.pageY -= O, this.clientX -= E, this.clientY -= O, this;
      } }, { key: "_addOrigin", value: function(b) {
        var E = b.x, O = b.y;
        return this.pageX += E, this.pageY += O, this.clientX += E, this.clientY += O, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Fv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), S;
    }(sr.BaseEvent);
    Wn.PointerEvent = Wn.default = Wv;
    var Eo = {};
    Object.defineProperty(Eo, "__esModule", { value: true }), Eo.default = void 0;
    var Ua = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = Ua, i.defaults.actions.pointerEvents = Ua.defaults, (0, q.default)(i.actions.phaselessTypes, Ua.types);
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var o = i.down, l = i.pointerInfo;
      !o && l.hold || (l.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, o) {
      var l = i.interaction, c = i.pointer, f = i.event, g = i.eventTarget;
      i.duplicate || l.pointerIsDown && !l.pointerWasMoved || (l.pointerIsDown && Wl(i), yn({ interaction: l, pointer: c, event: f, eventTarget: g, type: "move" }, o));
    }, "interactions:down": function(i, o) {
      (function(l, c) {
        for (var f = l.interaction, g = l.pointer, S = l.event, b = l.eventTarget, E = l.pointerIndex, O = f.pointers[E].hold, I = z.getPath(b), P = { interaction: f, pointer: g, event: S, eventTarget: b, type: "hold", targets: [], path: I, node: null }, N = 0; N < I.length; N++) {
          var j = I[N];
          P.node = j, c.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var k = 1 / 0, F = 0; F < P.targets.length; F++) {
            var Z = P.targets[F].eventable.options.holdDuration;
            Z < k && (k = Z);
          }
          O.duration = k, O.timeout = setTimeout(function() {
            yn({ interaction: f, eventTarget: b, pointer: g, event: S, type: "hold" }, c);
          }, k);
        }
      })(i, o), yn(i, o);
    }, "interactions:up": function(i, o) {
      Wl(i), yn(i, o), function(l, c) {
        var f = l.interaction, g = l.pointer, S = l.event, b = l.eventTarget;
        f.pointerWasMoved || yn({ interaction: f, eventTarget: b, pointer: g, event: S, type: "tap" }, c);
      }(i, o);
    }, "interactions:cancel": function(i, o) {
      Wl(i), yn(i, o);
    } }, PointerEvent: Wn.PointerEvent, fire: yn, collectEventTargets: wp, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function yn(i, o) {
      var l = i.interaction, c = i.pointer, f = i.event, g = i.eventTarget, S = i.type, b = i.targets, E = b === void 0 ? wp(i, o) : b, O = new Wn.PointerEvent(S, c, f, g, l, o.now());
      o.fire("pointerEvents:new", { pointerEvent: O });
      for (var I = { interaction: l, pointer: c, event: f, eventTarget: g, targets: E, type: S, pointerEvent: O }, P = 0; P < E.length; P++) {
        var N = E[P];
        for (var j in N.props || {})
          O[j] = N.props[j];
        var k = (0, Re.default)(N.eventable, N.node);
        if (O._subtractOrigin(k), O.eventable = N.eventable, O.currentTarget = N.node, N.eventable.fire(O), O._addOrigin(k), O.immediatePropagationStopped || O.propagationStopped && P + 1 < E.length && E[P + 1].node !== O.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", I), S === "tap") {
        var F = O.double ? yn({ interaction: l, pointer: c, event: f, eventTarget: g, type: "doubletap" }, o) : O;
        l.prevTap = F, l.tapTime = F.timeStamp;
      }
      return O;
    }
    __name(yn, "yn");
    u(yn, "Yo");
    function wp(i, o) {
      var l = i.interaction, c = i.pointer, f = i.event, g = i.eventTarget, S = i.type, b = l.getPointerIndex(c), E = l.pointers[b];
      if (S === "tap" && (l.pointerWasMoved || !E || E.downTarget !== g))
        return [];
      for (var O = z.getPath(g), I = { interaction: l, pointer: c, event: f, eventTarget: g, type: S, path: O, targets: [], node: null }, P = 0; P < O.length; P++) {
        var N = O[P];
        I.node = N, o.fire("pointerEvents:collect-targets", I);
      }
      return S === "hold" && (I.targets = I.targets.filter(function(j) {
        var k;
        return j.eventable.options.holdDuration === ((k = l.pointers[b]) == null ? void 0 : k.hold.duration);
      })), I.targets;
    }
    __name(wp, "wp");
    u(wp, "Wo");
    function Wl(i) {
      var o = i.interaction, l = i.pointerIndex, c = o.pointers[l].hold;
      c && c.timeout && (clearTimeout(c.timeout), c.timeout = null);
    }
    __name(Wl, "Wl");
    u(Wl, "Lo");
    var Vv = Ua;
    Eo.default = Vv;
    var Wa = {};
    function Yv(i) {
      var o = i.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Yv, "Yv");
    u(Yv, "No"), Object.defineProperty(Wa, "__esModule", { value: true }), Wa.default = void 0;
    var Xv = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(Eo.default);
      var o = i.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o) {
      return i["pointerEvents:".concat(o)] = Yv, i;
    }, { "pointerEvents:new": function(i) {
      var o = i.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(i, o) {
      var l = i.interaction, c = i.pointerEvent, f = i.eventTarget, g = i.targets;
      if (c.type === "hold" && g.length) {
        var S = g[0].eventable.options.holdRepeatInterval;
        S <= 0 || (l.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: l, eventTarget: f, type: "hold", pointer: c, event: c }, o);
        }, S));
      }
    } }) }, Zv = Xv;
    Wa.default = Zv;
    var Va = {};
    function Kv(i) {
      return (0, q.default)(this.events.options, i), this;
    }
    __name(Kv, "Kv");
    u(Kv, "Ho"), Object.defineProperty(Va, "__esModule", { value: true }), Va.default = void 0;
    var Jv = { id: "pointer-events/interactableTargets", install: function(i) {
      var o = i.Interactable;
      o.prototype.pointerEvents = Kv;
      var l = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(c, f) {
        var g = l.call(this, c, f);
        return g === this && (this.events.options[c] = f), g;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, o) {
      var l = i.targets, c = i.node, f = i.type, g = i.eventTarget;
      o.interactables.forEachMatch(c, function(S) {
        var b = S.events, E = b.options;
        b.types[f] && b.types[f].length && S.testIgnoreAllow(E, c, g) && l.push({ node: c, eventable: b, props: { interactable: S } });
      });
    }, "interactable:new": function(i) {
      var o = i.interactable;
      o.events.getRect = function(l) {
        return o.getRect(l);
      };
    }, "interactable:set": function(i, o) {
      var l = i.interactable, c = i.options;
      (0, q.default)(l.events.options, o.pointerEvents.defaults), (0, q.default)(l.events.options, c.pointerEvents || {});
    } } }, Qv = Jv;
    Va.default = Qv;
    var Ya = {};
    Object.defineProperty(Ya, "__esModule", { value: true }), Ya.default = void 0;
    var eg = { id: "pointer-events", install: function(i) {
      i.usePlugin(Eo), i.usePlugin(Wa.default), i.usePlugin(Va.default);
    } }, tg = eg;
    Ya.default = tg;
    var So = {};
    function xp(i) {
      var o = i.Interactable;
      i.actions.phases.reflow = true, o.prototype.reflow = function(l) {
        return function(c, f, g) {
          for (var S = a.default.string(c.target) ? ze.from(c._context.querySelectorAll(c.target)) : [c.target], b = g.window.Promise, E = b ? [] : null, O = function() {
            var P = S[I], N = c.getRect(P);
            if (!N)
              return "break";
            var j = ze.find(g.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === c && ne.element === P && ne.prepared.name === f.name;
            }), k = void 0;
            if (j)
              j.move(), E && (k = j._reflowPromise || new b(function(ne) {
                j._reflowResolve = ne;
              }));
            else {
              var F = (0, oe.tlbrToXywh)(N), Z = { page: { x: F.x, y: F.y }, client: { x: F.x, y: F.y }, timeStamp: g.now() }, W = J.coordsToEvent(Z);
              k = function(ne, ae, we, De, Fe) {
                var Te = ne.interactions.new({ pointerType: "reflow" }), $e = { interaction: Te, event: Fe, pointer: Fe, eventTarget: we, phase: "reflow" };
                Te.interactable = ae, Te.element = we, Te.prevEvent = Fe, Te.updatePointer(Fe, Fe, we, true), J.setZeroCoords(Te.coords.delta), (0, lr.copyAction)(Te.prepared, De), Te._doPhase($e);
                var wr = ne.window.Promise, en = wr ? new wr(function(Xl) {
                  Te._reflowResolve = Xl;
                }) : void 0;
                return Te._reflowPromise = en, Te.start(De, ae, we), Te._interacting ? (Te.move($e), Te.end(Fe)) : (Te.stop(), Te._reflowResolve()), Te.removePointer(Fe, Fe), en;
              }(g, c, P, f, W);
            }
            E && E.push(k);
          }, I = 0; I < S.length && O() !== "break"; I++)
            ;
          return E && b.all(E).then(function() {
            return c;
          });
        }(this, l, i);
      };
    }
    __name(xp, "xp");
    u(xp, "ni"), Object.defineProperty(So, "__esModule", { value: true }), So.default = void 0, So.install = xp;
    var rg = { id: "reflow", install: xp, listeners: { "interactions:stop": function(i, o) {
      var l = i.interaction;
      l.pointerType === "reflow" && (l._reflowResolve && l._reflowResolve(), ze.remove(o.interactions.list, l));
    } } }, ng = rg;
    So.default = ng;
    var yr = { exports: {} };
    function Vl(i) {
      return Vl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Vl(i);
    }
    __name(Vl, "Vl");
    u(Vl, "ai"), Object.defineProperty(yr.exports, "__esModule", { value: true }), yr.exports.default = void 0, dt.default.use(Ti.default), dt.default.use(Fn.default), dt.default.use(Ya.default), dt.default.use(Ci.default), dt.default.use(qa.default), dt.default.use(Ca.default), dt.default.use(br.default), dt.default.use(vn.default), dt.default.use(So.default);
    var ig = dt.default;
    if (yr.exports.default = ig, Vl(yr) === "object" && yr)
      try {
        yr.exports = dt.default;
      } catch (i) {
      }
    dt.default.default = dt.default, yr = yr.exports;
    var Vn = { exports: {} };
    function Yl(i) {
      return Yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Yl(i);
    }
    __name(Yl, "Yl");
    u(Yl, "ui"), Object.defineProperty(Vn.exports, "__esModule", { value: true }), Vn.exports.default = void 0;
    var og = yr.default;
    if (Vn.exports.default = og, Yl(Vn) === "object" && Vn)
      try {
        Vn.exports = yr.default;
      } catch (i) {
      }
    return yr.default.default = yr.default, Vn.exports;
  });
});
var lm = Ct((sm, Tc) => {
  (function(t) {
    "use strict";
    var r = /* @__PURE__ */ __name(function() {
    }, "r"), e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(d) {
      return setTimeout(d, 16);
    };
    function n() {
      var d = this;
      d.reads = [], d.writes = [], d.raf = e.bind(t), r("initialized", d);
    }
    __name(n, "n");
    u(n, "FastDom"), n.prototype = { constructor: n, runTasks: function(d) {
      r("run tasks");
      for (var h; h = d.shift(); )
        h();
    }, measure: function(d, h) {
      r("measure");
      var y = h ? d.bind(h) : d;
      return this.reads.push(y), s(this), y;
    }, mutate: function(d, h) {
      r("mutate");
      var y = h ? d.bind(h) : d;
      return this.writes.push(y), s(this), y;
    }, clear: function(d) {
      return r("clear", d), p(this.reads, d) || p(this.writes, d);
    }, extend: function(d) {
      if (r("extend", d), typeof d != "object")
        throw new Error("expected object");
      var h = Object.create(this);
      return v(h, d), h.fastdom = this, h.initialize && h.initialize(), h;
    }, catch: null };
    function s(d) {
      d.scheduled || (d.scheduled = true, d.raf(a.bind(null, d)), r("flush scheduled"));
    }
    __name(s, "s");
    u(s, "scheduleFlush");
    function a(d) {
      r("flush");
      var h = d.writes, y = d.reads, w;
      try {
        r("flushing reads", y.length), d.runTasks(y), r("flushing writes", h.length), d.runTasks(h);
      } catch (x) {
        w = x;
      }
      if (d.scheduled = false, (y.length || h.length) && s(d), w)
        if (r("task errored", w.message), d.catch)
          d.catch(w);
        else
          throw w;
    }
    __name(a, "a");
    u(a, "flush");
    function p(d, h) {
      var y = d.indexOf(h);
      return !!~y && !!d.splice(y, 1);
    }
    __name(p, "p");
    u(p, "remove");
    function v(d, h) {
      for (var y in h)
        h.hasOwnProperty(y) && (d[y] = h[y]);
    }
    __name(v, "v");
    u(v, "mixin");
    var m = t.fastdom = t.fastdom || new n();
    typeof define == "function" ? define(function() {
      return m;
    }) : typeof Tc == "object" && (Tc.exports = m);
  })(typeof window != "undefined" ? window : sm);
});
var dm = Ct((Cc, pm) => {
  (function(t) {
    "use strict";
    var r = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, e = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, n = u(function(d) {
      var h = Math.PI / 4;
      if (-h > d || d > h)
        return Math.cos(d) - 1;
      var y = d * d;
      return y * (y * (y * (y * (y * (y * (y * (y / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), s = u(function(d, h) {
      var y = Math.abs(d), w = Math.abs(h);
      return y < 3e3 && w < 3e3 ? Math.sqrt(y * y + w * w) : (y < w ? (y = w, w = d / h) : w = h / d, y * Math.sqrt(1 + w * w));
    }, "hypot"), a = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function p(d, h) {
      var y = Math.abs(d), w = Math.abs(h);
      return d === 0 ? Math.log(w) : h === 0 ? Math.log(y) : y < 3e3 && w < 3e3 ? Math.log(d * d + h * h) * 0.5 : (d = d / 2, h = h / 2, 0.5 * Math.log(d * d + h * h) + Math.LN2);
    }
    __name(p, "p");
    u(p, "logHypot");
    var v = u(function(d, h) {
      var y = { re: 0, im: 0 };
      if (d == null)
        y.re = y.im = 0;
      else if (h !== void 0)
        y.re = d, y.im = h;
      else
        switch (typeof d) {
          case "object":
            if ("im" in d && "re" in d)
              y.re = d.re, y.im = d.im;
            else if ("abs" in d && "arg" in d) {
              if (!Number.isFinite(d.abs) && Number.isFinite(d.arg))
                return m.INFINITY;
              y.re = d.abs * Math.cos(d.arg), y.im = d.abs * Math.sin(d.arg);
            } else if ("r" in d && "phi" in d) {
              if (!Number.isFinite(d.r) && Number.isFinite(d.phi))
                return m.INFINITY;
              y.re = d.r * Math.cos(d.phi), y.im = d.r * Math.sin(d.phi);
            } else
              d.length === 2 ? (y.re = d[0], y.im = d[1]) : a();
            break;
          case "string":
            y.im = y.re = 0;
            var w = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), x = 1, T = 0;
            w === null && a();
            for (var C = 0; C < w.length; C++) {
              var R = w[C];
              R === " " || R === "	" || R === `
` || (R === "+" ? x++ : R === "-" ? T++ : R === "i" || R === "I" ? (x + T === 0 && a(), w[C + 1] !== " " && !isNaN(w[C + 1]) ? (y.im += parseFloat((T % 2 ? "-" : "") + w[C + 1]), C++) : y.im += parseFloat((T % 2 ? "-" : "") + "1"), x = T = 0) : ((x + T === 0 || isNaN(R)) && a(), w[C + 1] === "i" || w[C + 1] === "I" ? (y.im += parseFloat((T % 2 ? "-" : "") + R), C++) : y.re += parseFloat((T % 2 ? "-" : "") + R), x = T = 0));
            }
            x + T > 0 && a();
            break;
          case "number":
            y.im = 0, y.re = d;
            break;
          default:
            a();
        }
      return isNaN(y.re) || isNaN(y.im), y;
    }, "parse");
    function m(d, h) {
      if (!(this instanceof m))
        return new m(d, h);
      var y = v(d, h);
      this.re = y.re, this.im = y.im;
    }
    __name(m, "m");
    u(m, "Complex"), m.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new m(this.re / d, this.im / d);
    }, add: function(d, h) {
      var y = new m(d, h);
      return this.isInfinite() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : new m(this.re + y.re, this.im + y.im);
    }, sub: function(d, h) {
      var y = new m(d, h);
      return this.isInfinite() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : new m(this.re - y.re, this.im - y.im);
    }, mul: function(d, h) {
      var y = new m(d, h);
      return this.isInfinite() && y.isZero() || this.isZero() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : y.im === 0 && this.im === 0 ? new m(this.re * y.re, 0) : new m(this.re * y.re - this.im * y.im, this.re * y.im + this.im * y.re);
    }, div: function(d, h) {
      var y = new m(d, h);
      if (this.isZero() && y.isZero() || this.isInfinite() && y.isInfinite())
        return m.NAN;
      if (this.isInfinite() || y.isZero())
        return m.INFINITY;
      if (this.isZero() || y.isInfinite())
        return m.ZERO;
      d = this.re, h = this.im;
      var w = y.re, x = y.im, T, C;
      return x === 0 ? new m(d / w, h / w) : Math.abs(w) < Math.abs(x) ? (C = w / x, T = w * C + x, new m((d * C + h) / T, (h * C - d) / T)) : (C = x / w, T = x * C + w, new m((d + h * C) / T, (h - d * C) / T));
    }, pow: function(d, h) {
      var y = new m(d, h);
      if (d = this.re, h = this.im, y.isZero())
        return m.ONE;
      if (y.im === 0) {
        if (h === 0 && d > 0)
          return new m(Math.pow(d, y.re), 0);
        if (d === 0)
          switch ((y.re % 4 + 4) % 4) {
            case 0:
              return new m(Math.pow(h, y.re), 0);
            case 1:
              return new m(0, Math.pow(h, y.re));
            case 2:
              return new m(-Math.pow(h, y.re), 0);
            case 3:
              return new m(0, -Math.pow(h, y.re));
          }
      }
      if (d === 0 && h === 0 && y.re > 0 && y.im >= 0)
        return m.ZERO;
      var w = Math.atan2(h, d), x = p(d, h);
      return d = Math.exp(y.re * x - y.im * w), h = y.im * x + y.re * w, new m(d * Math.cos(h), d * Math.sin(h));
    }, sqrt: function() {
      var d = this.re, h = this.im, y = this.abs(), w, x;
      if (d >= 0) {
        if (h === 0)
          return new m(Math.sqrt(d), 0);
        w = 0.5 * Math.sqrt(2 * (y + d));
      } else
        w = Math.abs(h) / Math.sqrt(2 * (y - d));
      return d <= 0 ? x = 0.5 * Math.sqrt(2 * (y - d)) : x = Math.abs(h) / Math.sqrt(2 * (y + d)), new m(w, h < 0 ? -x : x);
    }, exp: function() {
      var d = Math.exp(this.re);
      return this.im, new m(d * Math.cos(this.im), d * Math.sin(this.im));
    }, expm1: function() {
      var d = this.re, h = this.im;
      return new m(Math.expm1(d) * Math.cos(h) + n(h), Math.exp(d) * Math.sin(h));
    }, log: function() {
      var d = this.re, h = this.im;
      return h === 0 && d > 0, new m(p(d, h), Math.atan2(h, d));
    }, abs: function() {
      return s(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, h = this.im;
      return new m(Math.sin(d) * r(h), Math.cos(d) * e(h));
    }, cos: function() {
      var d = this.re, h = this.im;
      return new m(Math.cos(d) * r(h), -Math.sin(d) * e(h));
    }, tan: function() {
      var d = 2 * this.re, h = 2 * this.im, y = Math.cos(d) + r(h);
      return new m(Math.sin(d) / y, e(h) / y);
    }, cot: function() {
      var d = 2 * this.re, h = 2 * this.im, y = Math.cos(d) - r(h);
      return new m(-Math.sin(d) / y, e(h) / y);
    }, sec: function() {
      var d = this.re, h = this.im, y = 0.5 * r(2 * h) + 0.5 * Math.cos(2 * d);
      return new m(Math.cos(d) * r(h) / y, Math.sin(d) * e(h) / y);
    }, csc: function() {
      var d = this.re, h = this.im, y = 0.5 * r(2 * h) - 0.5 * Math.cos(2 * d);
      return new m(Math.sin(d) * r(h) / y, -Math.cos(d) * e(h) / y);
    }, asin: function() {
      var d = this.re, h = this.im, y = new m(h * h - d * d + 1, -2 * d * h).sqrt(), w = new m(y.re - h, y.im + d).log();
      return new m(w.im, -w.re);
    }, acos: function() {
      var d = this.re, h = this.im, y = new m(h * h - d * d + 1, -2 * d * h).sqrt(), w = new m(y.re - h, y.im + d).log();
      return new m(Math.PI / 2 - w.im, w.re);
    }, atan: function() {
      var d = this.re, h = this.im;
      if (d === 0) {
        if (h === 1)
          return new m(0, 1 / 0);
        if (h === -1)
          return new m(0, -1 / 0);
      }
      var y = d * d + (1 - h) * (1 - h), w = new m((1 - h * h - d * d) / y, -2 * d / y).log();
      return new m(-0.5 * w.im, 0.5 * w.re);
    }, acot: function() {
      var d = this.re, h = this.im;
      if (h === 0)
        return new m(Math.atan2(1, d), 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).atan() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new m(0, 1 / 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).acos() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new m(Math.PI / 2, 1 / 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).asin() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, h = this.im;
      return new m(e(d) * Math.cos(h), r(d) * Math.sin(h));
    }, cosh: function() {
      var d = this.re, h = this.im;
      return new m(r(d) * Math.cos(h), e(d) * Math.sin(h));
    }, tanh: function() {
      var d = 2 * this.re, h = 2 * this.im, y = r(d) + Math.cos(h);
      return new m(e(d) / y, Math.sin(h) / y);
    }, coth: function() {
      var d = 2 * this.re, h = 2 * this.im, y = r(d) - Math.cos(h);
      return new m(e(d) / y, -Math.sin(h) / y);
    }, csch: function() {
      var d = this.re, h = this.im, y = Math.cos(2 * h) - r(2 * d);
      return new m(-2 * e(d) * Math.cos(h) / y, 2 * r(d) * Math.sin(h) / y);
    }, sech: function() {
      var d = this.re, h = this.im, y = Math.cos(2 * h) + r(2 * d);
      return new m(2 * r(d) * Math.cos(h) / y, -2 * e(d) * Math.sin(h) / y);
    }, asinh: function() {
      var d = this.im;
      this.im = -this.re, this.re = d;
      var h = this.asin();
      return this.re = -this.im, this.im = d, d = h.re, h.re = -h.im, h.im = d, h;
    }, acosh: function() {
      var d = this.acos();
      if (d.im <= 0) {
        var h = d.re;
        d.re = -d.im, d.im = h;
      } else {
        var h = d.im;
        d.im = -d.re, d.re = h;
      }
      return d;
    }, atanh: function() {
      var d = this.re, h = this.im, y = d > 1 && h === 0, w = 1 - d, x = 1 + d, T = w * w + h * h, C = T !== 0 ? new m((x * w - h * h) / T, (h * w + x * h) / T) : new m(d !== -1 ? d / 0 : 0, h !== 0 ? h / 0 : 0), R = C.re;
      return C.re = p(C.re, C.im) / 2, C.im = Math.atan2(C.im, R) / 2, y && (C.im = -C.im), C;
    }, acoth: function() {
      var d = this.re, h = this.im;
      if (d === 0 && h === 0)
        return new m(0, Math.PI / 2);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).atanh() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, h = this.im;
      if (h === 0)
        return new m(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).asinh() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, h = this.im;
      if (this.isZero())
        return m.INFINITY;
      var y = d * d + h * h;
      return y !== 0 ? new m(d / y, -h / y).acosh() : new m(d !== 0 ? d / 0 : 0, h !== 0 ? -h / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return m.INFINITY;
      if (this.isInfinite())
        return m.ZERO;
      var d = this.re, h = this.im, y = d * d + h * h;
      return new m(d / y, -h / y);
    }, conjugate: function() {
      return new m(this.re, -this.im);
    }, neg: function() {
      return new m(-this.re, -this.im);
    }, ceil: function(d) {
      return d = Math.pow(10, d || 0), new m(Math.ceil(this.re * d) / d, Math.ceil(this.im * d) / d);
    }, floor: function(d) {
      return d = Math.pow(10, d || 0), new m(Math.floor(this.re * d) / d, Math.floor(this.im * d) / d);
    }, round: function(d) {
      return d = Math.pow(10, d || 0), new m(Math.round(this.re * d) / d, Math.round(this.im * d) / d);
    }, equals: function(d, h) {
      var y = new m(d, h);
      return Math.abs(y.re - this.re) <= m.EPSILON && Math.abs(y.im - this.im) <= m.EPSILON;
    }, clone: function() {
      return new m(this.re, this.im);
    }, toString: function() {
      var d = this.re, h = this.im, y = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < m.EPSILON && (d = 0), Math.abs(h) < m.EPSILON && (h = 0), h === 0 ? y + d : (d !== 0 ? (y += d, y += " ", h < 0 ? (h = -h, y += "-") : y += "+", y += " ") : h < 0 && (h = -h, y += "-"), h !== 1 && (y += h), y + "i"));
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
    } }, m.ZERO = new m(0, 0), m.ONE = new m(1, 0), m.I = new m(0, 1), m.PI = new m(Math.PI, 0), m.E = new m(Math.E, 0), m.INFINITY = new m(1 / 0, 1 / 0), m.NAN = new m(NaN, NaN), m.EPSILON = 1e-15, typeof define == "function" && define.amd ? define([], function() {
      return m;
    }) : typeof Cc == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, pm.exports = m) : t.Complex = m;
  })(Cc);
});
var Mn = jt(Ap());
var _d = jt(rn());
function zd(t) {
  let r = In(t);
  return new Mn.default(r).valueOf() * Math.PI;
}
__name(zd, "zd");
u(zd, "D");
function Po(t) {
  let r = In(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(Po, "Po");
u(Po, "q");
function Rd(t, r) {
  return new Mn.default(In(t)).valueOf() < new Mn.default(In(r)).valueOf();
}
__name(Rd, "Rd");
u(Rd, "U");
function kd(t, r) {
  return new Mn.default(In(t)).valueOf() > new Mn.default(In(r)).valueOf();
}
__name(kd, "kd");
u(kd, "B");
function Dd(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let r = In(t);
    return new Mn.default(r).valueOf(), true;
  } catch (r) {
    return false;
  }
}
__name(Dd, "Dd");
u(Dd, "$");
function In(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(In, "In");
u(In, "l");
function Nd(t) {
  try {
    let r = In(t), e = new Mn.default(r).toFraction().split("/"), n;
    return e[0] === "0" ? n = "0" : e[0] === "1" ? n = "\u03C0" : e[0] === "-1" ? n = "-\u03C0" : n = `${e[0]}\u03C0`, e.length === 1 ? n : `${n}/${e[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(Nd, "Nd");
u(Nd, "P");
var su = 0;
var Ao;
var ft = (Ao = class extends Error {
  static {
    __name(this, "Ao");
  }
  constructor(r, e) {
    super(r), this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), su++;
    try {
      this.details = su === 1 ? (0, _d.format)(this.detailsObj) : "(failed to prettyFormat detailsObj due to possibly re-entrancy)";
    } catch (n) {
      console.error(n), this.details = "(failed to prettyFormat detailsObj, see the console for details)";
    } finally {
      su--;
    }
  }
}, u(Ao, "f"), Ao);
var Db = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var ur;
var nn = (ur = class {
  static {
    __name(this, "ur");
  }
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -ur.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(ur.parseFloat(r.substr(1)));
    let e = ur.matchUnicodeFraction((s) => s.character === r);
    if (e !== void 0)
      return e.value;
    let n = parseFloat(r);
    if (isNaN(n))
      throw new Error(`Not a number: '${r}'`);
    return n;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -ur.simplifyByRounding(-r, e);
    let n = r % 1;
    if (n <= e || 1 - n <= e)
      return Math.round(r);
    let s = ur.matchUnicodeFraction((p) => Math.abs(p.value - r) <= e);
    if (s !== void 0)
      return s.value;
    let a = ur.matchUnicodeFraction((p) => Math.abs(Math.sqrt(p.value) - r) <= e);
    return a !== void 0 ? Math.sqrt(a.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of Db)
      if (r(e))
        return e;
  }
  constructor(r, e, n, s) {
    this.allowAbbreviation = r, this.maxAbbreviationError = e, this.fixedDigits = n, this.itemSeparator = s;
  }
  formatFloat(r) {
    return this.allowAbbreviation ? this.abbreviateFloat(r, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? r.toFixed(this.fixedDigits) : String(r);
  }
  abbreviateFloat(r, e = 0, n = void 0) {
    if (Math.abs(r) < e)
      return "0";
    if (r < 0)
      return `-${this.abbreviateFloat(-r, e, n)}`;
    let s = ur.matchUnicodeFraction((p) => Math.abs(p.value - r) <= e);
    if (s !== void 0)
      return s.character;
    let a = ur.matchUnicodeFraction((p) => Math.abs(Math.sqrt(p.value) - r) <= e);
    return a !== void 0 ? `\u221A${a.character}` : r % 1 !== 0 && n !== void 0 ? r.toFixed(n) : r.toString();
  }
}, u(ur, "o"), ur);
nn.CONSISTENT = new nn(false, 0, 2, ", "), nn.EXACT = new nn(true, 0, void 0, ", "), nn.MINIFIED = new nn(true, 0, void 0, ","), nn.SIMPLIFIED = new nn(true, 5e-4, 3, ", ");
var Nb = nn;
var Di;
var B = (Di = class {
  static {
    __name(this, "Di");
  }
  static need(r, e, n) {
    if (r !== true) {
      let s = n === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(n).join(", ")}]`, a = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${s}`;
      throw new Error(a);
    }
  }
  static notNull(r) {
    Di.need(r != null, "notNull");
  }
  static snappedCosSin(r) {
    let e = Math.PI / 4, n = Math.round(r / e);
    if (n * e === r) {
      let s = Math.sqrt(0.5);
      return [[1, 0], [s, s], [0, 1], [-s, s], [-1, 0], [-s, -s], [0, -1], [s, -s]][n & 7];
    }
    return [Math.cos(r), Math.sin(r)];
  }
}, u(Di, "r"), Di);
var be;
var Zn = (be = class {
  static {
    __name(this, "be");
  }
  static from(r) {
    if (r instanceof be)
      return r;
    if (typeof r == "number")
      return new be(r, 0);
    throw new ft("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [n, s] = B.snappedCosSin(e);
    return new be(r * n, r * s);
  }
  static realPartOf(r) {
    if (r instanceof be)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new ft("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof be)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new ft("Unrecognized value type.", { v: r });
  }
  constructor(r, e) {
    this.real = r, this.imag = e;
  }
  static rootsOfQuadratic(r, e, n) {
    if (r = be.from(r), e = be.from(e), n = be.from(n), r.isEqualTo(0)) {
      if (!e.isEqualTo(0))
        return [n.times(-1).dividedBy(e)];
      if (!n.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let s = e.times(e).minus(r.times(n).times(4)).sqrts(), a = e.times(-1), p = r.times(2);
    return s.map((v) => a.minus(v).dividedBy(p));
  }
  isEqualTo(r) {
    return r instanceof be ? this.real === r.real && this.imag === r.imag : typeof r == "number" ? this.real === r && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(r, e) {
    if (r instanceof be || typeof r == "number") {
      let n = this.minus(be.from(r));
      return Math.abs(n.real) <= e && Math.abs(n.imag) <= e && n.abs() <= e;
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
    return r < 1e-5 ? be.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r));
  }
  plus(r) {
    let e = be.from(r);
    return new be(this.real + e.real, this.imag + e.imag);
  }
  minus(r) {
    let e = be.from(r);
    return new be(this.real - e.real, this.imag - e.imag);
  }
  times(r) {
    let e = be.from(r);
    return new be(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  dividedBy(r) {
    let e = be.from(r), n = e.norm2();
    if (n === 0)
      throw new Error("Division by Zero");
    let s = this.times(e.conjugate());
    return new be(s.real / n, s.imag / n);
  }
  sqrts() {
    let [r, e] = [this.real, this.imag], n = Math.sqrt(Math.sqrt(r * r + e * e));
    if (n === 0)
      return [be.ZERO];
    if (e === 0 && r < 0)
      return [new be(0, n), new be(0, -n)];
    let s = this.phase() / 2, a = be.polar(n, s);
    return [a, a.times(-1)];
  }
  conjugate() {
    return new be(this.real, -this.imag);
  }
  toString(r) {
    return r = r || Nb.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
  }
  neg() {
    return new be(-this.real, -this.imag);
  }
  raisedTo(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new be(Math.sqrt(this.real), 0) : be.ZERO.isEqualTo(r) ? be.ONE : this.isEqualTo(be.ZERO) ? be.ZERO : this.ln().times(be.from(r)).exp();
  }
  exp() {
    return be.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let r = this.times(be.I);
    return r.exp().plus(r.neg().exp()).times(0.5);
  }
  sin() {
    let r = this.times(be.I);
    return r.exp().minus(r.neg().exp()).dividedBy(new be(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new be(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(r) {
    return Math.abs(this.imag) <= r.maxAbbreviationError ? r.formatFloat(this.real) : Math.abs(this.real) <= r.maxAbbreviationError ? Math.abs(this.imag - 1) <= r.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= r.maxAbbreviationError ? "-i" : `${r.formatFloat(this.imag)}i` : this.toStringBothValues(r);
  }
  toStringBothValues(r) {
    let e = this.imag >= 0 ? "+" : "-", n = r.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= r.maxAbbreviationError ? "" : r.formatFloat(Math.abs(this.imag));
    return `${(r.allowAbbreviation || r.fixedDigits === void 0 || this.real < 0 ? "" : "+") + r.formatFloat(this.real) + e + n}i`;
  }
}, u(be, "a"), be);
Zn.ZERO = new Zn(0, 0), Zn.ONE = new Zn(1, 0), Zn.I = new Zn(0, 1);
var zo = Zn;
var Ro = { MAX_QUBIT_COUNT: 16 };
function fe(t, r = {}, e = document) {
  let n = new CustomEvent(t, { bubbles: true, cancelable: true, detail: r });
  return e.dispatchEvent(n);
}
__name(fe, "fe");
u(fe, "j");
var Ld = u((t) => typeof t == "number" && 1 <= t && t <= Ro.MAX_QUBIT_COUNT, "re");
var lu = "\u25E6";
var uu = "Bloch";
var cu = "\u2022";
var hs = "H";
var ms = "Measure";
var vs = "P";
var pu = "QFT\u2020";
var du = "QFT";
var gs = "X^\xBD";
var bs = "Rx";
var ys = "Ry";
var ws = "Rz";
var xs = "S\u2020";
var Es = "S";
var fu = "\u2026";
var hu = "Swap";
var Ss = "T\u2020";
var Ts = "T";
var Gd = "|0>";
var jd = "|1>";
var Cs = "X";
var Os = "Y";
var Ms = "Z";
var mu = /* @__PURE__ */ new WeakSet();
function gu(t) {
  mu.add(t), t.shadowRoot && bu(t.shadowRoot), wu(t), yu(t.ownerDocument);
}
__name(gu, "gu");
u(gu, "bind");
function bu(t) {
  wu(t), yu(t);
}
__name(bu, "bu");
u(bu, "bindShadow");
var Is = /* @__PURE__ */ new WeakMap();
function yu(t = document) {
  if (Is.has(t))
    return Is.get(t);
  let r = false, e = new MutationObserver((s) => {
    for (let a of s)
      if (a.type === "attributes" && a.target instanceof Element)
        vu(a.target);
      else if (a.type === "childList" && a.addedNodes.length)
        for (let p of a.addedNodes)
          p instanceof Element && wu(p);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, Is.delete(t), e.disconnect();
  } };
  return Is.set(t, n), n;
}
__name(yu, "yu");
u(yu, "listenForBind");
function wu(t) {
  for (let r of t.querySelectorAll("[data-action]"))
    vu(r);
  t instanceof Element && t.hasAttribute("data-action") && vu(t);
}
__name(wu, "wu");
u(wu, "bindElements");
function _b(t) {
  let r = t.currentTarget;
  for (let e of Hd(r))
    if (t.type === e.type) {
      let n = r.closest(e.tag);
      mu.has(n) && typeof n[e.method] == "function" && n[e.method](t);
      let s = r.getRootNode();
      if (s instanceof ShadowRoot && mu.has(s.host) && s.host.matches(e.tag)) {
        let a = s.host;
        typeof a[e.method] == "function" && a[e.method](t);
      }
    }
}
__name(_b, "_b");
u(_b, "handleEvent");
function* Hd(t) {
  for (let r of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, e), tag: r.slice(e + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(Hd, "Hd");
u(Hd, "bindings");
function vu(t) {
  for (let r of Hd(t))
    t.addEventListener(r.type, _b);
}
__name(vu, "vu");
u(vu, "bindActions");
function xu(t) {
  let r = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[t.name] = t, window.customElements.define(r, t));
}
__name(xu, "xu");
u(xu, "register");
function Eu(t, r) {
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
__name(Eu, "Eu");
u(Eu, "findTarget");
function Su(t, r) {
  let e = t.tagName.toLowerCase(), n = [];
  if (t.shadowRoot)
    for (let s of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${r}"]`))
      s.closest(e) || n.push(s);
  for (let s of t.querySelectorAll(`[data-targets~="${e}.${r}"]`))
    s.closest(e) === t && n.push(s);
  return n;
}
__name(Su, "Su");
u(Su, "findTargets");
function Me(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return Eu(this, r);
  } });
}
__name(Me, "Me");
u(Me, "target");
function ht(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return Su(this, r);
  } });
}
__name(ht, "ht");
u(ht, "targets");
function Tu(t) {
  for (let r of t.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === t && t.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(Tu, "Tu");
u(Tu, "autoShadowRoot");
var As = /* @__PURE__ */ new WeakMap();
function D(t, r) {
  As.has(t) || As.set(t, []), As.get(t).push(r);
}
__name(D, "D");
u(D, "attr");
function Cu(t, r) {
  r || (r = Bd(Object.getPrototypeOf(t)));
  for (let e of r) {
    let n = t[e], s = $d(e), a = { configurable: true, get() {
      return this.getAttribute(s) || "";
    }, set(p) {
      this.setAttribute(s, p || "");
    } };
    typeof n == "number" ? a = { configurable: true, get() {
      return Number(this.getAttribute(s) || 0);
    }, set(p) {
      this.setAttribute(s, p);
    } } : typeof n == "boolean" && (a = { configurable: true, get() {
      return this.hasAttribute(s);
    }, set(p) {
      this.toggleAttribute(s, p);
    } }), Object.defineProperty(t, e, a), e in t && !t.hasAttribute(s) && a.set.call(t, n);
  }
}
__name(Cu, "Cu");
u(Cu, "initializeAttrs");
function Bd(t) {
  let r = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let n = As.get(e) || [];
    for (let s of n)
      r.add(s);
    e = Object.getPrototypeOf(e);
  }
  return r;
}
__name(Bd, "Bd");
u(Bd, "getAttrNames");
function $d(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name($d, "$d");
u($d, "attrToAttributeName");
function Ou(t) {
  let r = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...Bd(t.prototype)].map($d).concat(r);
  }, set(e) {
    r = e;
  } });
}
__name(Ou, "Ou");
u(Ou, "defineObservedAttributes");
var Lb = /* @__PURE__ */ new WeakSet();
function qd(t, r) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), Lb.add(t), Tu(t), Cu(t), gu(t), r && r.call(t), t.shadowRoot && bu(t.shadowRoot);
}
__name(qd, "qd");
u(qd, "initializeInstance");
function Fd(t) {
  Ou(t), xu(t);
}
__name(Fd, "Fd");
u(Fd, "initializeClass");
function X(t) {
  let r = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    qd(this, r);
  }, Fd(t);
}
__name(X, "X");
u(X, "controller");
function he(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.active = false;
    }
    activate() {
      this.active = true, fe("activateable:active", {}, this);
    }
    deactivate() {
      this.active = false;
    }
  };
  u(e, "ActivateableMixinClass"), M([D], e.prototype, "active", 2);
  let r = e;
  return r;
}
__name(he, "he");
u(he, "ActivateableMixin");
var Kn = u((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function An(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  };
  u(e, "AngleableMixinClass"), M([D], e.prototype, "angle", 2), M([D], e.prototype, "reducedAngle", 2);
  let r = e;
  return r;
}
__name(An, "An");
u(An, "AngleableMixin");
var ko = u((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
function Ge(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    get controls() {
      let s = this.getAttribute("data-controls");
      return s === null ? [] : s === "" ? [] : s.split(",").map((a) => parseInt(a)).sort();
    }
    set controls(s) {
      this.setAttribute("data-controls", s.sort().join());
    }
    get antiControls() {
      let s = this.getAttribute("data-anti-controls");
      return s === null ? [] : s === "" ? [] : s.split(",").map((a) => parseInt(a)).sort();
    }
    set antiControls(s) {
      this.setAttribute("data-anti-controls", s.sort().join());
    }
    get isControlled() {
      return this.controls.length > 0;
    }
    get isAntiControlled() {
      return this.antiControls.length > 0;
    }
  };
  u(e, "ControllableMixinClass");
  let r = e;
  return r;
}
__name(Ge, "Ge");
u(Ge, "ControllableMixin");
function Ie(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
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
  };
  u(e, "DisableableMixinClass"), M([D], e.prototype, "disabled", 2);
  let r = e;
  return r;
}
__name(Ie, "Ie");
u(Ie, "DisableableMixin");
var V = u(function() {
  return V = Object.assign || u(function(r) {
    for (var e, n = 1, s = arguments.length; n < s; n++) {
      e = arguments[n];
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
    }
    return r;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function Ni(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      r.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (e[n[s]] = t[n[s]]);
  return e;
}
__name(Ni, "Ni");
u(Ni, "__rest");
function xe(t) {
  var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], n = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return { next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    } };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(xe, "xe");
u(xe, "__values");
function Se(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), s, a = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(s = n.next()).done; )
      a.push(s.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      s && !s.done && (e = n.return) && e.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return a;
}
__name(Se, "Se");
u(Se, "__read");
function Ne(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, s = r.length, a; n < s; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
__name(Ne, "Ne");
u(Ne, "__spreadArray");
var _e;
(function(t) {
  t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
})(_e || (_e = {}));
var on;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(on || (on = {}));
var Do = _e.Start;
var _i = _e.Stop;
var Pn = _e.Raise;
var Jn = _e.Send;
var Ps = _e.Cancel;
var Ud = _e.NullEvent;
var Mu = _e.Assign;
var ix = _e.After;
var ox = _e.DoneState;
var zs = _e.Log;
var Wd = _e.Init;
var No = _e.Invoke;
var ax = _e.ErrorExecution;
var Iu = _e.ErrorPlatform;
var Au = _e.ErrorCustom;
var _o = _e.Update;
var Vd = _e.Choose;
var Yd = _e.Pure;
var Rs = ".";
var Pu = {};
var ks = "xstate.guard";
var Xd = "";
var je = true;
var Ds;
function Go(t, r, e) {
  e === void 0 && (e = Rs);
  var n = Li(t, e), s = Li(r, e);
  return Ce(s) ? Ce(n) ? s === n : false : Ce(n) ? n in s : Object.keys(n).every(function(a) {
    return a in s ? Go(n[a], s[a]) : false;
  });
}
__name(Go, "Go");
u(Go, "matchesState");
function Ns(t) {
  try {
    return Ce(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Ns, "Ns");
u(Ns, "getEventType");
function _s(t, r) {
  try {
    return an(t) ? t : t.toString().split(r);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(_s, "_s");
u(_s, "toStatePath");
function Gb(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(Gb, "Gb");
u(Gb, "isStateLike");
function Li(t, r) {
  if (Gb(t))
    return t.value;
  if (an(t))
    return Lo(t);
  if (typeof t != "string")
    return t;
  var e = _s(t, r);
  return Lo(e);
}
__name(Li, "Li");
u(Li, "toStateValue");
function Lo(t) {
  if (t.length === 1)
    return t[0];
  for (var r = {}, e = r, n = 0; n < t.length - 1; n++)
    n === t.length - 2 ? e[t[n]] = t[n + 1] : (e[t[n]] = {}, e = e[t[n]]);
  return r;
}
__name(Lo, "Lo");
u(Lo, "pathToStateValue");
function Gi(t, r) {
  for (var e = {}, n = Object.keys(t), s = 0; s < n.length; s++) {
    var a = n[s];
    e[a] = r(t[a], a, t, s);
  }
  return e;
}
__name(Gi, "Gi");
u(Gi, "mapValues");
function zu(t, r, e) {
  var n, s, a = {};
  try {
    for (var p = xe(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      e(d) && (a[m] = r(d, m, t));
    }
  } catch (h) {
    n = { error: h };
  } finally {
    try {
      v && !v.done && (s = p.return) && s.call(p);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return a;
}
__name(zu, "zu");
u(zu, "mapFilterValues");
var Zd = u(function(t) {
  return function(r) {
    var e, n, s = r;
    try {
      for (var a = xe(t), p = a.next(); !p.done; p = a.next()) {
        var v = p.value;
        s = s[v];
      }
    } catch (m) {
      e = { error: m };
    } finally {
      try {
        p && !p.done && (n = a.return) && n.call(a);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return s;
  };
}, "path");
function Kd(t, r) {
  return function(e) {
    var n, s, a = e;
    try {
      for (var p = xe(t), v = p.next(); !v.done; v = p.next()) {
        var m = v.value;
        a = a[r][m];
      }
    } catch (d) {
      n = { error: d };
    } finally {
      try {
        v && !v.done && (s = p.return) && s.call(p);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return a;
  };
}
__name(Kd, "Kd");
u(Kd, "nestedPath");
function jo(t) {
  if (!t)
    return [[]];
  if (Ce(t))
    return [[t]];
  var r = qe(Object.keys(t).map(function(e) {
    var n = t[e];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[e]] : jo(t[e]).map(function(s) {
      return [e].concat(s);
    });
  }));
  return r;
}
__name(jo, "jo");
u(jo, "toStatePaths");
function qe(t) {
  var r;
  return (r = []).concat.apply(r, Ne([], Se(t), false));
}
__name(qe, "qe");
u(qe, "flatten");
function Jd(t) {
  return an(t) ? t : [t];
}
__name(Jd, "Jd");
u(Jd, "toArrayStrict");
function cr(t) {
  return t === void 0 ? [] : Jd(t);
}
__name(cr, "cr");
u(cr, "toArray");
function Qn(t, r, e) {
  var n, s;
  if (Ae(t))
    return t(r, e.data);
  var a = {};
  try {
    for (var p = xe(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      Ae(d) ? a[m] = d(r, e.data) : a[m] = d;
    }
  } catch (h) {
    n = { error: h };
  } finally {
    try {
      v && !v.done && (s = p.return) && s.call(p);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return a;
}
__name(Qn, "Qn");
u(Qn, "mapContext");
function Qd(t) {
  return /^(done|error)\./.test(t);
}
__name(Qd, "Qd");
u(Qd, "isBuiltInEvent");
function Ru(t) {
  return !!(t instanceof Promise || t !== null && (Ae(t) || typeof t == "object") && Ae(t.then));
}
__name(Ru, "Ru");
u(Ru, "isPromiseLike");
function ef(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(ef, "ef");
u(ef, "isBehavior");
function tf(t, r) {
  var e, n, s = Se([[], []], 2), a = s[0], p = s[1];
  try {
    for (var v = xe(t), m = v.next(); !m.done; m = v.next()) {
      var d = m.value;
      r(d) ? a.push(d) : p.push(d);
    }
  } catch (h) {
    e = { error: h };
  } finally {
    try {
      m && !m.done && (n = v.return) && n.call(v);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return [a, p];
}
__name(tf, "tf");
u(tf, "partition");
function rf(t, r) {
  return Gi(t.states, function(e, n) {
    if (e) {
      var s = (Ce(r) ? void 0 : r[n]) || (e ? e.current : void 0);
      if (s)
        return { current: s, states: rf(e, s) };
    }
  });
}
__name(rf, "rf");
u(rf, "updateHistoryStates");
function nf(t, r) {
  return { current: r, states: rf(t, r) };
}
__name(nf, "nf");
u(nf, "updateHistoryValue");
function ku(t, r, e, n) {
  je || nt(!!t, "Attempting to update undefined context");
  var s = t && e.reduce(function(a, p) {
    var v, m, d = p.assignment, h = { state: n, action: p, _event: r }, y = {};
    if (Ae(d))
      y = d(a, r.data, h);
    else
      try {
        for (var w = xe(Object.keys(d)), x = w.next(); !x.done; x = w.next()) {
          var T = x.value, C = d[T];
          y[T] = Ae(C) ? C(a, r.data, h) : C;
        }
      } catch (R) {
        v = { error: R };
      } finally {
        try {
          x && !x.done && (m = w.return) && m.call(w);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, a, y);
  }, t);
  return s;
}
__name(ku, "ku");
u(ku, "updateContext");
var nt = u(function() {
}, "warn");
je || (nt = u(function(t, r) {
  var e = t instanceof Error ? t : void 0;
  if (!(!e && t) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    e && n.push(e), console.warn.apply(console, n);
  }
}, "warn"));
function an(t) {
  return Array.isArray(t);
}
__name(an, "an");
u(an, "isArray");
function Ae(t) {
  return typeof t == "function";
}
__name(Ae, "Ae");
u(Ae, "isFunction");
function Ce(t) {
  return typeof t == "string";
}
__name(Ce, "Ce");
u(Ce, "isString");
function Ls(t, r) {
  if (t)
    return Ce(t) ? { type: ks, name: t, predicate: r ? r[t] : void 0 } : Ae(t) ? { type: ks, name: t.name, predicate: t } : t;
}
__name(Ls, "Ls");
u(Ls, "toGuard");
function of(t) {
  try {
    return "subscribe" in t && Ae(t.subscribe);
  } catch (r) {
    return false;
  }
}
__name(of, "of");
u(of, "isObservable");
var Hr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var mx = (Ds = {}, Ds[Hr] = function() {
  return this;
}, Ds[Symbol.observable] = function() {
  return this;
}, Ds);
function Br(t) {
  return !!t && "__xstatenode" in t;
}
__name(Br, "Br");
u(Br, "isMachine");
function af(t) {
  return !!t && typeof t.send == "function";
}
__name(af, "af");
u(af, "isActor");
function ji(t, r) {
  return Ce(t) || typeof t == "number" ? V({ type: t }, r) : t;
}
__name(ji, "ji");
u(ji, "toEventObject");
function st(t, r) {
  if (!Ce(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = ji(t);
  return V({ name: e.type, data: e, $$type: "scxml", type: "external" }, r);
}
__name(st, "st");
u(st, "toSCXMLEvent");
function ei(t, r) {
  var e = Jd(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || Br(n) ? { target: n, event: t } : V(V({}, n), { event: t });
  });
  return e;
}
__name(ei, "ei");
u(ei, "toTransitionConfigArray");
function sf(t) {
  if (!(t === void 0 || t === Xd))
    return cr(t);
}
__name(sf, "sf");
u(sf, "normalizeTarget");
function lf(t, r, e) {
  if (!je) {
    var n = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
    if (t === r)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(n));
    else {
      var s = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(s));
    }
  }
}
__name(lf, "lf");
u(lf, "reportUnhandledExceptionOnInvocation");
function Gs(t, r, e, n, s) {
  var a = t.options.guards, p = { state: s, cond: r, _event: n };
  if (r.type === ks)
    return ((a == null ? void 0 : a[r.name]) || r.predicate)(e, n.data, p);
  var v = a == null ? void 0 : a[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
  return v(e, n.data, p);
}
__name(Gs, "Gs");
u(Gs, "evaluateGuard");
function js(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name(js, "js");
u(js, "toInvokeSource");
function Hi(t, r, e) {
  var n = u(function() {
  }, "noop"), s = typeof t == "object", a = s ? t : null;
  return { next: ((s ? t.next : t) || n).bind(a), error: ((s ? t.error : r) || n).bind(a), complete: ((s ? t.complete : e) || n).bind(a) };
}
__name(Hi, "Hi");
u(Hi, "toObserver");
function Ho(t, r) {
  return "".concat(t, ":invocation[").concat(r, "]");
}
__name(Ho, "Ho");
u(Ho, "createInvokeId");
function Bo(t) {
  return (t.type === Pn || t.type === Jn && t.to === on.Internal) && typeof t.delay != "number";
}
__name(Bo, "Bo");
u(Bo, "isRaisableAction");
var sn = st({ type: Wd });
function Hs(t, r) {
  return r && r[t] || void 0;
}
__name(Hs, "Hs");
u(Hs, "getActionFunction");
function $i(t, r) {
  var e;
  if (Ce(t) || typeof t == "number") {
    var n = Hs(t, r);
    Ae(n) ? e = { type: t, exec: n } : n ? e = n : e = { type: t, exec: void 0 };
  } else if (Ae(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var n = Hs(t.type, r);
    if (Ae(n))
      e = V(V({}, t), { exec: n });
    else if (n) {
      var s = n.type || t.type;
      e = V(V(V({}, n), t), { type: s });
    } else
      e = t;
  }
  return e;
}
__name($i, "$i");
u($i, "toActionObject");
var $r = u(function(t, r) {
  if (!t)
    return [];
  var e = an(t) ? t : [t];
  return e.map(function(n) {
    return $i(n, r);
  });
}, "toActionObjects");
function Bs(t) {
  var r = $i(t);
  return V(V({ id: Ce(t) ? t : r.id }, r), { type: r.type });
}
__name(Bs, "Bs");
u(Bs, "toActivityDefinition");
function uf(t, r) {
  return { type: Pn, event: typeof t == "function" ? t : ji(t), delay: r ? r.delay : void 0, id: r == null ? void 0 : r.id };
}
__name(uf, "uf");
u(uf, "raise");
function jb(t, r, e, n) {
  var s = { _event: e }, a = st(Ae(t.event) ? t.event(r, e.data, s) : t.event), p;
  if (Ce(t.delay)) {
    var v = n && n[t.delay];
    p = Ae(v) ? v(r, e.data, s) : v;
  } else
    p = Ae(t.delay) ? t.delay(r, e.data, s) : t.delay;
  return V(V({}, t), { type: Pn, _event: a, delay: p });
}
__name(jb, "jb");
u(jb, "resolveRaise");
function cf(t, r) {
  return { to: r ? r.to : void 0, type: Jn, event: Ae(t) ? t : ji(t), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Ae(t) ? t.name : Ns(t) };
}
__name(cf, "cf");
u(cf, "send");
function Hb(t, r, e, n) {
  var s = { _event: e }, a = st(Ae(t.event) ? t.event(r, e.data, s) : t.event), p;
  if (Ce(t.delay)) {
    var v = n && n[t.delay];
    p = Ae(v) ? v(r, e.data, s) : v;
  } else
    p = Ae(t.delay) ? t.delay(r, e.data, s) : t.delay;
  var m = Ae(t.to) ? t.to(r, e.data, s) : t.to;
  return V(V({}, t), { to: m, _event: a, event: a.data, delay: p });
}
__name(Hb, "Hb");
u(Hb, "resolveSend");
var Bb = u(function(t, r, e) {
  return V(V({}, t), { value: Ce(t.expr) ? t.expr : t.expr(r, e.data, { _event: e }) });
}, "resolveLog");
var pf = u(function(t) {
  return { type: Ps, sendId: t };
}, "cancel");
function df(t) {
  var r = Bs(t);
  return { type: _e.Start, activity: r, exec: void 0 };
}
__name(df, "df");
u(df, "start");
function ff(t) {
  var r = Ae(t) ? t : Bs(t);
  return { type: _e.Stop, activity: r, exec: void 0 };
}
__name(ff, "ff");
u(ff, "stop");
function $b(t, r, e) {
  var n = Ae(t.activity) ? t.activity(r, e.data) : t.activity, s = typeof n == "string" ? { id: n } : n, a = { type: _e.Stop, activity: s };
  return a;
}
__name($b, "$b");
u($b, "resolveStop");
function hf(t, r) {
  var e = r ? "#".concat(r) : "";
  return "".concat(_e.After, "(").concat(t, ")").concat(e);
}
__name(hf, "hf");
u(hf, "after");
function $o(t, r) {
  var e = "".concat(_e.DoneState, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name($o, "$o");
u($o, "done");
function qi(t, r) {
  var e = "".concat(_e.DoneInvoke, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(qi, "qi");
u(qi, "doneInvoke");
function ti(t, r) {
  var e = "".concat(_e.ErrorPlatform, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(ti, "ti");
u(ti, "error");
var qb = u(function(t) {
  var r, e, n = [];
  try {
    for (var s = xe(t), a = s.next(); !a.done; a = s.next())
      for (var p = a.value, v = 0; v < p.actions.length; ) {
        if (p.actions[v].type === Mu) {
          n.push(p.actions[v]), p.actions.splice(v, 1);
          continue;
        }
        v++;
      }
  } catch (m) {
    r = { error: m };
  } finally {
    try {
      a && !a.done && (e = s.return) && e.call(s);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}, "pluckAssigns");
function Bi(t, r, e, n, s, a, p) {
  p === void 0 && (p = false);
  var v = p ? [] : qb(s), m = v.length ? ku(e, n, v, r) : e, d = p ? [e] : void 0, h = [];
  function y(T, C) {
    var R;
    switch (C.type) {
      case Pn: {
        var _ = jb(C, m, n, t.options.delays);
        return a && typeof _.delay == "number" && a(_, m, n), _;
      }
      case Jn:
        var L = Hb(C, m, n, t.options.delays);
        if (!je) {
          var $ = C.delay;
          nt(!Ce($) || typeof L.delay == "number", "No delay reference for delay expression '".concat($, "' was found on machine '").concat(t.id, "'"));
        }
        return a && L.to !== on.Internal && (T === "entry" ? h.push(L) : a(L, m, n)), L;
      case zs: {
        var A = Bb(C, m, n);
        return a == null || a(A, m, n), A;
      }
      case Vd: {
        var ee = C, z = (R = ee.conds.find(function(Re) {
          var Pe = Ls(Re.cond, t.options.guards);
          return !Pe || Gs(t, Pe, m, n, a ? void 0 : r);
        })) === null || R === void 0 ? void 0 : R.actions;
        if (!z)
          return [];
        var H = Se(Bi(t, r, m, n, [{ type: T, actions: $r(cr(z), t.options.actions) }], a, p), 2), te = H[0], Q = H[1];
        return m = Q, d == null || d.push(m), te;
      }
      case Yd: {
        var z = C.get(m, n.data);
        if (!z)
          return [];
        var ue = Se(Bi(t, r, m, n, [{ type: T, actions: $r(cr(z), t.options.actions) }], a, p), 2), K = ue[0], ie = ue[1];
        return m = ie, d == null || d.push(m), K;
      }
      case _i: {
        var A = $b(C, m, n);
        return a == null || a(A, e, n), A;
      }
      case Mu: {
        m = ku(m, n, [C], a ? void 0 : r), d == null || d.push(m);
        break;
      }
      default:
        var q = $i(C, t.options.actions), oe = q.exec;
        if (a)
          a(q, m, n);
        else if (oe && d) {
          var tt = d.length - 1, Ze = V(V({}, q), { exec: function(Re) {
            for (var Pe = [], We = 1; We < arguments.length; We++)
              Pe[We - 1] = arguments[We];
            oe.apply(void 0, Ne([d[tt]], Se(Pe), false));
          } });
          q = Ze;
        }
        return q;
    }
  }
  __name(y, "y");
  u(y, "handleAction");
  function w(T) {
    var C, R, _ = [];
    try {
      for (var L = xe(T.actions), $ = L.next(); !$.done; $ = L.next()) {
        var A = $.value, ee = y(T.type, A);
        ee && (_ = _.concat(ee));
      }
    } catch (z) {
      C = { error: z };
    } finally {
      try {
        $ && !$.done && (R = L.return) && R.call(L);
      } finally {
        if (C)
          throw C.error;
      }
    }
    return h.forEach(function(z) {
      a(z, m, n);
    }), h.length = 0, _;
  }
  __name(w, "w");
  u(w, "processBlock");
  var x = qe(s.map(w));
  return [x, m];
}
__name(Bi, "Bi");
u(Bi, "resolveActions");
var mf = [];
var zn = u(function(t, r) {
  mf.push(t);
  var e = r(t);
  return mf.pop(), e;
}, "provide");
function vf(t) {
  var r;
  return r = { id: t, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: t };
  } }, r[Hr] = function() {
    return this;
  }, r;
}
__name(vf, "vf");
u(vf, "createNullActor");
function gf(t, r, e, n) {
  var s, a = js(t.src), p = (s = r == null ? void 0 : r.options.services) === null || s === void 0 ? void 0 : s[a.type], v = t.data ? Qn(t.data, e, n) : void 0, m = p ? Du(p, t.id, v) : vf(t.id);
  return m.meta = t, m;
}
__name(gf, "gf");
u(gf, "createInvocableActor");
function Du(t, r, e) {
  var n = vf(r);
  if (n.deferred = true, Br(t)) {
    var s = n.state = zn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    n.getSnapshot = function() {
      return s;
    };
  }
  return n;
}
__name(Du, "Du");
u(Du, "createDeferredActor");
function Fb(t) {
  try {
    return typeof t.send == "function";
  } catch (r) {
    return false;
  }
}
__name(Fb, "Fb");
u(Fb, "isActor");
function bf(t) {
  return Fb(t) && "id" in t;
}
__name(bf, "bf");
u(bf, "isSpawnedActor");
function yf(t) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[Hr] = function() {
    return this;
  }, r), t);
}
__name(yf, "yf");
u(yf, "toActorRef");
var qo = u(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function _u(t) {
  return Object.keys(t.states).map(function(r) {
    return t.states[r];
  });
}
__name(_u, "_u");
u(_u, "getAllChildren");
function Fi(t) {
  return _u(t).filter(function(r) {
    return r.type !== "history";
  });
}
__name(Fi, "Fi");
u(Fi, "getChildren");
function Lu(t) {
  var r = [t];
  return qo(t) ? r : r.concat(qe(Fi(t).map(Lu)));
}
__name(Lu, "Lu");
u(Lu, "getAllStateNodes");
function Ui(t, r) {
  var e, n, s, a, p, v, m, d, h = new Set(t), y = Nu(h), w = new Set(r);
  try {
    for (var x = xe(w), T = x.next(); !T.done; T = x.next())
      for (var C = T.value, R = C.parent; R && !w.has(R); )
        w.add(R), R = R.parent;
  } catch (Q) {
    e = { error: Q };
  } finally {
    try {
      T && !T.done && (n = x.return) && n.call(x);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var _ = Nu(w);
  try {
    for (var L = xe(w), $ = L.next(); !$.done; $ = L.next()) {
      var C = $.value;
      if (C.type === "compound" && (!_.get(C) || !_.get(C).length))
        y.get(C) ? y.get(C).forEach(function(ue) {
          return w.add(ue);
        }) : C.initialStateNodes.forEach(function(ue) {
          return w.add(ue);
        });
      else if (C.type === "parallel")
        try {
          for (var A = (p = void 0, xe(Fi(C))), ee = A.next(); !ee.done; ee = A.next()) {
            var z = ee.value;
            w.has(z) || (w.add(z), y.get(z) ? y.get(z).forEach(function(ue) {
              return w.add(ue);
            }) : z.initialStateNodes.forEach(function(ue) {
              return w.add(ue);
            }));
          }
        } catch (ue) {
          p = { error: ue };
        } finally {
          try {
            ee && !ee.done && (v = A.return) && v.call(A);
          } finally {
            if (p)
              throw p.error;
          }
        }
    }
  } catch (Q) {
    s = { error: Q };
  } finally {
    try {
      $ && !$.done && (a = L.return) && a.call(L);
    } finally {
      if (s)
        throw s.error;
    }
  }
  try {
    for (var H = xe(w), te = H.next(); !te.done; te = H.next())
      for (var C = te.value, R = C.parent; R && !w.has(R); )
        w.add(R), R = R.parent;
  } catch (Q) {
    m = { error: Q };
  } finally {
    try {
      te && !te.done && (d = H.return) && d.call(H);
    } finally {
      if (m)
        throw m.error;
    }
  }
  return w;
}
__name(Ui, "Ui");
u(Ui, "getConfiguration");
function wf(t, r) {
  var e = r.get(t);
  if (!e)
    return {};
  if (t.type === "compound") {
    var n = e[0];
    if (n) {
      if (qo(n))
        return n.key;
    } else
      return {};
  }
  var s = {};
  return e.forEach(function(a) {
    s[a.key] = wf(a, r);
  }), s;
}
__name(wf, "wf");
u(wf, "getValueFromAdj");
function Nu(t) {
  var r, e, n = /* @__PURE__ */ new Map();
  try {
    for (var s = xe(t), a = s.next(); !a.done; a = s.next()) {
      var p = a.value;
      n.has(p) || n.set(p, []), p.parent && (n.has(p.parent) || n.set(p.parent, []), n.get(p.parent).push(p));
    }
  } catch (v) {
    r = { error: v };
  } finally {
    try {
      a && !a.done && (e = s.return) && e.call(s);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}
__name(Nu, "Nu");
u(Nu, "getAdjList");
function xf(t, r) {
  var e = Ui([t], r);
  return wf(t, Nu(e));
}
__name(xf, "xf");
u(xf, "getValue");
function Wi(t, r) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === r;
  }) : t instanceof Set ? t.has(r) : false;
}
__name(Wi, "Wi");
u(Wi, "has");
function Ef(t) {
  return Ne([], Se(new Set(qe(Ne([], Se(t.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(Ef, "Ef");
u(Ef, "nextEvents");
function Fo(t, r) {
  return r.type === "compound" ? Fi(r).some(function(e) {
    return e.type === "final" && Wi(t, e);
  }) : r.type === "parallel" ? Fi(r).every(function(e) {
    return Fo(t, e);
  }) : false;
}
__name(Fo, "Fo");
u(Fo, "isInFinalState");
function Sf(t) {
  return t === void 0 && (t = []), t.reduce(function(r, e) {
    return e.meta !== void 0 && (r[e.id] = e.meta), r;
  }, {});
}
__name(Sf, "Sf");
u(Sf, "getMeta");
function Gu(t) {
  return new Set(qe(t.map(function(r) {
    return r.tags;
  })));
}
__name(Gu, "Gu");
u(Gu, "getTagsFromConfiguration");
function ju(t, r) {
  if (t === r)
    return true;
  if (t === void 0 || r === void 0)
    return false;
  if (Ce(t) || Ce(r))
    return t === r;
  var e = Object.keys(t), n = Object.keys(r);
  return e.length === n.length && e.every(function(s) {
    return ju(t[s], r[s]);
  });
}
__name(ju, "ju");
u(ju, "stateValuesEqual");
function Tf(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(Tf, "Tf");
u(Tf, "isStateConfig");
function Cf(t, r) {
  var e = t.exec, n = V(V({}, t), { exec: e !== void 0 ? function() {
    return e(r.context, r.event, { action: t, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(Cf, "Cf");
u(Cf, "bindActionToState");
var Sr = function() {
  function t(r) {
    var e = this, n;
    this.actions = [], this.activities = Pu, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || Pu, this.meta = Sf(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Ef(e.configuration);
    } });
  }
  __name(t, "t");
  return u(t, "State"), t.from = function(r, e) {
    if (r instanceof t)
      return r.context !== e ? new t({ value: r.value, context: e, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = sn;
    return new t({ value: r, context: e, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, t.create = function(r) {
    return new t(r);
  }, t.inert = function(r, e) {
    if (r instanceof t) {
      if (!r.actions.length)
        return r;
      var n = sn;
      return new t({ value: r.value, context: e, _event: n, _sessionid: null, historyValue: r.historyValue, history: r.history, activities: r.activities, configuration: r.configuration, transitions: [], children: {} });
    }
    return t.from(r, e);
  }, t.prototype.toStrings = function(r, e) {
    var n = this;
    if (r === void 0 && (r = this.value), e === void 0 && (e = "."), Ce(r))
      return [r];
    var s = Object.keys(r);
    return s.concat.apply(s, Ne([], Se(s.map(function(a) {
      return n.toStrings(r[a], e).map(function(p) {
        return a + e + p;
      });
    })), false));
  }, t.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var e = r.tags;
    r.machine;
    var n = Ni(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(e) });
  }, t.prototype.matches = function(r) {
    return Go(r, this.value);
  }, t.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, t.prototype.can = function(r) {
    var e;
    je && nt(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(s) {
      return s.target !== void 0 || s.actions.length;
    });
  }, t;
}();
var Ub = { deferEvents: false };
var Hu = function() {
  function t(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Ub), r);
  }
  __name(t, "t");
  return u(t, "Scheduler"), t.prototype.initialize = function(r) {
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
var Bu = /* @__PURE__ */ new Map();
var Wb = 0;
var Vi = { bookId: function() {
  return "x:".concat(Wb++);
}, register: function(t, r) {
  return Bu.set(t, r), t;
}, get: function(t) {
  return Bu.get(t);
}, free: function(t) {
  Bu.delete(t);
} };
function $s() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  je || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name($s, "$s");
u($s, "getGlobal");
function Vb() {
  var t = $s();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name(Vb, "Vb");
u(Vb, "getDevTools");
function Of(t) {
  if ($s()) {
    var r = Vb();
    r && r.register(t);
  }
}
__name(Of, "Of");
u(Of, "registerService");
function Mf(t, r) {
  r === void 0 && (r = {});
  var e = t.initialState, n = /* @__PURE__ */ new Set(), s = [], a = false, p = u(function() {
    if (!a) {
      for (a = true; s.length > 0; ) {
        var d = s.shift();
        e = t.transition(e, d, m), n.forEach(function(h) {
          return h.next(e);
        });
      }
      a = false;
    }
  }, "flush"), v = yf({ id: r.id, send: function(d) {
    s.push(d), p();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(d, h, y) {
    var w = Hi(d, h, y);
    return n.add(w), w.next(e), { unsubscribe: function() {
      n.delete(w);
    } };
  } }), m = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return e = t.start ? t.start(m) : e, v;
}
__name(Mf, "Mf");
u(Mf, "spawnBehavior");
var Yb = { sync: false, autoForward: false };
var lt;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(lt || (lt = {}));
var If = function() {
  function t(r, e) {
    e === void 0 && (e = t.defaultOptions);
    var n = this;
    this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = lt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(h, y) {
      if (an(h))
        return n.batch(h), n.state;
      var w = st(ji(h, y));
      if (n.status === lt.Stopped)
        return je || nt(false, 'Event "'.concat(w.name, '" was sent to stopped service "').concat(n.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(w.data))), n.state;
      if (n.status !== lt.Running && !n.options.deferEvents)
        throw new Error('Event "'.concat(w.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(w.data)));
      return n.scheduler.schedule(function() {
        n.forward(w);
        var x = n._nextState(w);
        n.update(x, w);
      }), n._state;
    }, this.sendTo = function(h, y, w) {
      var x = n.parent && (y === on.Parent || n.parent.id === y), T = x ? n.parent : Ce(y) ? y === on.Internal ? n : n.children.get(y) || Vi.get(y) : af(y) ? y : void 0;
      if (!T) {
        if (!x)
          throw new Error("Unable to send event to child '".concat(y, "' from service '").concat(n.id, "'."));
        je || nt(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(h.type));
        return;
      }
      if ("machine" in T) {
        if (n.status !== lt.Stopped || n.parent !== T || n.state.done) {
          var C = V(V({}, h), { name: h.name === Au ? "".concat(ti(n.id)) : h.name, origin: n.sessionId });
          !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, C]) : T.send(C);
        }
      } else
        !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, h.data]) : T.send(h.data);
    }, this._exec = function(h, y, w, x) {
      x === void 0 && (x = n.machine.options.actions);
      var T = h.exec || Hs(h.type, x), C = Ae(T) ? T : T ? T.exec : h.exec;
      if (C)
        try {
          return C(y, w.data, n.machine.config.predictableActionArguments ? { action: h, _event: w } : { action: h, state: n.state, _event: w });
        } catch (oe) {
          throw n.parent && n.parent.send({ type: "xstate.error", data: oe }), oe;
        }
      switch (h.type) {
        case Pn: {
          var R = h;
          n.defer(R);
          break;
        }
        case Jn:
          var _ = h;
          if (typeof _.delay == "number") {
            n.defer(_);
            return;
          } else
            _.to ? n.sendTo(_._event, _.to, w === sn) : n.send(_._event);
          break;
        case Ps:
          n.cancel(h.sendId);
          break;
        case Do: {
          if (n.status !== lt.Running)
            return;
          var L = h.activity;
          if (!n.machine.config.predictableActionArguments && !n.state.activities[L.id || L.type])
            break;
          if (L.type === _e.Invoke) {
            var $ = js(L.src), A = n.machine.options.services ? n.machine.options.services[$.type] : void 0, ee = L.id, z = L.data;
            je || nt(!("forward" in L), "`forward` property is deprecated (found in invocation of '".concat(L.src, "' in in machine '").concat(n.machine.id, "'). ") + "Please use `autoForward` instead.");
            var H = "autoForward" in L ? L.autoForward : !!L.forward;
            if (!A) {
              je || nt(false, "No service found for invocation '".concat(L.src, "' in machine '").concat(n.machine.id, "'."));
              return;
            }
            var te = z ? Qn(z, y, w) : void 0;
            if (typeof A == "string")
              return;
            var Q = Ae(A) ? A(y, w.data, { data: te, src: $, meta: L.meta }) : A;
            if (!Q)
              return;
            var ue = void 0;
            Br(Q) && (Q = te ? Q.withContext(te) : Q, ue = { autoForward: H }), n.spawn(Q, ee, ue);
          } else
            n.spawnActivity(L);
          break;
        }
        case _i: {
          n.stopChild(h.activity.id);
          break;
        }
        case zs:
          var K = h, ie = K.label, q = K.value;
          ie ? n.logger(ie, q) : n.logger(q);
          break;
        default:
          je || nt(false, "No implementation found for action type '".concat(h.type, "'"));
          break;
      }
    };
    var s = V(V({}, t.defaultOptions), e), a = s.clock, p = s.logger, v = s.parent, m = s.id, d = m !== void 0 ? m : r.id;
    this.id = d, this.logger = p, this.clock = a, this.parent = v, this.options = s, this.scheduler = new Hu({ deferEvents: this.options.deferEvents }), this.sessionId = Vi.bookId();
  }
  __name(t, "t");
  return u(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : zn(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "state", { get: function() {
    return je || nt(this.status !== lt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), t.prototype.execute = function(r, e) {
    var n, s;
    try {
      for (var a = xe(r.actions), p = a.next(); !p.done; p = a.next()) {
        var v = p.value;
        this.exec(v, r, e);
      }
    } catch (m) {
      n = { error: m };
    } finally {
      try {
        p && !p.done && (s = a.return) && s.call(a);
      } finally {
        if (n)
          throw n.error;
      }
    }
  }, t.prototype.update = function(r, e) {
    var n, s, a, p, v, m, d, h, y = this;
    if (r._sessionid = this.sessionId, this._state = r, (!this.machine.config.predictableActionArguments || e === sn) && this.options.execute)
      this.execute(this.state);
    else
      for (var w = void 0; w = this._outgoingQueue.shift(); )
        w[0].send(w[1]);
    if (this.children.forEach(function(Q) {
      y.state.children[Q.id] = Q;
    }), this.devTools && this.devTools.send(e.data, r), r.event)
      try {
        for (var x = xe(this.eventListeners), T = x.next(); !T.done; T = x.next()) {
          var C = T.value;
          C(r.event);
        }
      } catch (Q) {
        n = { error: Q };
      } finally {
        try {
          T && !T.done && (s = x.return) && s.call(x);
        } finally {
          if (n)
            throw n.error;
        }
      }
    try {
      for (var R = xe(this.listeners), _ = R.next(); !_.done; _ = R.next()) {
        var C = _.value;
        C(r, r.event);
      }
    } catch (Q) {
      a = { error: Q };
    } finally {
      try {
        _ && !_.done && (p = R.return) && p.call(R);
      } finally {
        if (a)
          throw a.error;
      }
    }
    try {
      for (var L = xe(this.contextListeners), $ = L.next(); !$.done; $ = L.next()) {
        var A = $.value;
        A(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (Q) {
      v = { error: Q };
    } finally {
      try {
        $ && !$.done && (m = L.return) && m.call(L);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (this.state.done) {
      var ee = r.configuration.find(function(Q) {
        return Q.type === "final" && Q.parent === y.machine;
      }), z = ee && ee.doneData ? Qn(ee.doneData, r.context, e) : void 0;
      this._doneEvent = qi(this.id, z);
      try {
        for (var H = xe(this.doneListeners), te = H.next(); !te.done; te = H.next()) {
          var C = te.value;
          C(this._doneEvent);
        }
      } catch (Q) {
        d = { error: Q };
      } finally {
        try {
          te && !te.done && (h = H.return) && h.call(H);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this._stop(), this._stopChildren(), Vi.free(this.sessionId);
    }
  }, t.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === lt.Running && r(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(r, e, n) {
    var s = this, a = Hi(r, e, n);
    this.listeners.add(a.next), this.status !== lt.NotStarted && a.next(this.state);
    var p = u(function() {
      s.doneListeners.delete(p), s.stopListeners.delete(p), a.complete();
    }, "completeOnce");
    return this.status === lt.Stopped ? a.complete() : (this.onDone(p), this.onStop(p)), { unsubscribe: function() {
      s.listeners.delete(a.next), s.doneListeners.delete(p), s.stopListeners.delete(p);
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
    return this.status === lt.Stopped && this._doneEvent ? r(this._doneEvent) : this.doneListeners.add(r), this;
  }, t.prototype.off = function(r) {
    return this.listeners.delete(r), this.eventListeners.delete(r), this.sendListeners.delete(r), this.stopListeners.delete(r), this.doneListeners.delete(r), this.contextListeners.delete(r), this;
  }, t.prototype.start = function(r) {
    var e = this;
    if (this.status === lt.Running)
      return this;
    this.machine._init(), Vi.register(this.sessionId, this), this.initialized = true, this.status = lt.Running;
    var n = r === void 0 ? this.initialState : zn(this, function() {
      return Tf(r) ? e.machine.resolveState(r) : e.machine.resolveState(Sr.from(r, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(n, sn);
    }), this;
  }, t.prototype._stopChildren = function() {
    this.children.forEach(function(r) {
      Ae(r.stop) && r.stop();
    }), this.children.clear();
  }, t.prototype._stop = function() {
    var r, e, n, s, a, p, v, m, d, h;
    try {
      for (var y = xe(this.listeners), w = y.next(); !w.done; w = y.next()) {
        var x = w.value;
        this.listeners.delete(x);
      }
    } catch (H) {
      r = { error: H };
    } finally {
      try {
        w && !w.done && (e = y.return) && e.call(y);
      } finally {
        if (r)
          throw r.error;
      }
    }
    try {
      for (var T = xe(this.stopListeners), C = T.next(); !C.done; C = T.next()) {
        var x = C.value;
        x(), this.stopListeners.delete(x);
      }
    } catch (H) {
      n = { error: H };
    } finally {
      try {
        C && !C.done && (s = T.return) && s.call(T);
      } finally {
        if (n)
          throw n.error;
      }
    }
    try {
      for (var R = xe(this.contextListeners), _ = R.next(); !_.done; _ = R.next()) {
        var x = _.value;
        this.contextListeners.delete(x);
      }
    } catch (H) {
      a = { error: H };
    } finally {
      try {
        _ && !_.done && (p = R.return) && p.call(R);
      } finally {
        if (a)
          throw a.error;
      }
    }
    try {
      for (var L = xe(this.doneListeners), $ = L.next(); !$.done; $ = L.next()) {
        var x = $.value;
        this.doneListeners.delete(x);
      }
    } catch (H) {
      v = { error: H };
    } finally {
      try {
        $ && !$.done && (m = L.return) && m.call(L);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    this.initialized = false, this.status = lt.Stopped, this._initialState = void 0;
    try {
      for (var A = xe(Object.keys(this.delayedEventsMap)), ee = A.next(); !ee.done; ee = A.next()) {
        var z = ee.value;
        this.clock.clearTimeout(this.delayedEventsMap[z]);
      }
    } catch (H) {
      d = { error: H };
    } finally {
      try {
        ee && !ee.done && (h = A.return) && h.call(A);
      } finally {
        if (d)
          throw d.error;
      }
    }
    this.scheduler.clear(), this.scheduler = new Hu({ deferEvents: this.options.deferEvents });
  }, t.prototype.stop = function() {
    var r = this, e = this.scheduler;
    return this._stop(), e.schedule(function() {
      var n = st({ type: "xstate.stop" }), s = zn(r, function() {
        var a = qe(Ne([], Se(r.state.configuration), false).sort(function(h, y) {
          return y.order - h.order;
        }).map(function(h) {
          return $r(h.onExit, r.machine.options.actions);
        })), p = Se(Bi(r.machine, r.state, r.state.context, n, [{ type: "exit", actions: a }], r.machine.config.predictableActionArguments ? r._exec : void 0, r.machine.config.predictableActionArguments || r.machine.config.preserveActionOrder), 2), v = p[0], m = p[1], d = new Sr({ value: r.state.value, context: m, _event: n, _sessionid: r.sessionId, historyValue: void 0, history: r.state, actions: v.filter(function(h) {
          return !Bo(h);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: r.state.done, tags: r.state.tags, machine: r.machine });
        return d.changed = true, d;
      });
      r.update(s, n), r._stopChildren(), Vi.free(r.sessionId);
    }), this;
  }, t.prototype.batch = function(r) {
    var e = this;
    if (this.status === lt.NotStarted && this.options.deferEvents)
      je || nt(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== lt.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (r.length) {
      var n = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var s, a, p = e.state, v = false, m = [], d = u(function(x) {
          var T = st(x);
          e.forward(T), p = zn(e, function() {
            return e.machine.transition(p, T, void 0, n || void 0);
          }), m.push.apply(m, Ne([], Se(e.machine.config.predictableActionArguments ? p.actions : p.actions.map(function(C) {
            return Cf(C, p);
          })), false)), v = v || !!p.changed;
        }, "_loop_1");
        try {
          for (var h = xe(r), y = h.next(); !y.done; y = h.next()) {
            var w = y.value;
            d(w);
          }
        } catch (x) {
          s = { error: x };
        } finally {
          try {
            y && !y.done && (a = h.return) && a.call(h);
          } finally {
            if (s)
              throw s.error;
          }
        }
        p.changed = v, p.actions = m, e.update(p, st(r[r.length - 1]));
      });
    }
  }, t.prototype.sender = function(r) {
    return this.send.bind(this, r);
  }, t.prototype._nextState = function(r, e) {
    var n = this;
    e === void 0 && (e = !!this.machine.config.predictableActionArguments && this._exec);
    var s = st(r);
    if (s.name.indexOf(Iu) === 0 && !this.state.nextEvents.some(function(p) {
      return p.indexOf(Iu) === 0;
    }))
      throw s.data.data;
    var a = zn(this, function() {
      return n.machine.transition(n.state, s, void 0, e || void 0);
    });
    return a;
  }, t.prototype.nextState = function(r) {
    return this._nextState(r, false);
  }, t.prototype.forward = function(r) {
    var e, n;
    try {
      for (var s = xe(this.forwardTo), a = s.next(); !a.done; a = s.next()) {
        var p = a.value, v = this.children.get(p);
        if (!v)
          throw new Error("Unable to forward event '".concat(r, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(p, "'."));
        v.send(r);
      }
    } catch (m) {
      e = { error: m };
    } finally {
      try {
        a && !a.done && (n = s.return) && n.call(s);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, t.prototype.defer = function(r) {
    var e = this, n = this.clock.setTimeout(function() {
      "to" in r && r.to ? e.sendTo(r._event, r.to, true) : e.send(r._event);
    }, r.delay);
    r.id && (this.delayedEventsMap[r.id] = n);
  }, t.prototype.cancel = function(r) {
    this.clock.clearTimeout(this.delayedEventsMap[r]), delete this.delayedEventsMap[r];
  }, t.prototype.exec = function(r, e, n) {
    n === void 0 && (n = this.machine.options.actions), this._exec(r, e.context, e._event, n);
  }, t.prototype.removeChild = function(r) {
    var e;
    this.children.delete(r), this.forwardTo.delete(r), (e = this.state) === null || e === void 0 || delete e.children[r];
  }, t.prototype.stopChild = function(r) {
    var e = this.children.get(r);
    e && (this.removeChild(r), Ae(e.stop) && e.stop());
  }, t.prototype.spawn = function(r, e, n) {
    if (this.status !== lt.Running)
      return Du(r, e);
    if (Ru(r))
      return this.spawnPromise(Promise.resolve(r), e);
    if (Ae(r))
      return this.spawnCallback(r, e);
    if (bf(r))
      return this.spawnActor(r, e);
    if (of(r))
      return this.spawnObservable(r, e);
    if (Br(r))
      return this.spawnMachine(r, V(V({}, n), { id: e }));
    if (ef(r))
      return this.spawnBehavior(r, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof r, '".'));
  }, t.prototype.spawnMachine = function(r, e) {
    var n = this;
    e === void 0 && (e = {});
    var s = new t(r, V(V({}, this.options), { parent: this, id: e.id || r.id })), a = V(V({}, Yb), e);
    a.sync && s.onTransition(function(v) {
      n.send(_o, { state: v, id: s.id });
    });
    var p = s;
    return this.children.set(s.id, p), a.autoForward && this.forwardTo.add(s.id), s.onDone(function(v) {
      n.removeChild(s.id), n.send(st(v, { origin: s.id }));
    }).start(), p;
  }, t.prototype.spawnBehavior = function(r, e) {
    var n = Mf(r, { id: e, parent: this });
    return this.children.set(e, n), n;
  }, t.prototype.spawnPromise = function(r, e) {
    var n, s = this, a = false, p;
    r.then(function(m) {
      a || (p = m, s.removeChild(e), s.send(st(qi(e, m), { origin: e })));
    }, function(m) {
      if (!a) {
        s.removeChild(e);
        var d = ti(e, m);
        try {
          s.send(st(d, { origin: e }));
        } catch (h) {
          lf(m, h, e), s.devTools && s.devTools.send(d, s.state), s.machine.strict && s.stop();
        }
      }
    });
    var v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, h) {
      var y = Hi(m, d, h), w = false;
      return r.then(function(x) {
        w || (y.next(x), !w && y.complete());
      }, function(x) {
        w || y.error(x);
      }), { unsubscribe: function() {
        return w = true;
      } };
    }, stop: function() {
      a = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return p;
    } }, n[Hr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnCallback = function(r, e) {
    var n, s = this, a = false, p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m, d = u(function(w) {
      m = w, v.forEach(function(x) {
        return x(w);
      }), !a && s.send(st(w, { origin: e }));
    }, "receive"), h;
    try {
      h = r(d, function(w) {
        p.add(w);
      });
    } catch (w) {
      this.send(ti(e, w));
    }
    if (Ru(h))
      return this.spawnPromise(h, e);
    var y = (n = { id: e, send: function(w) {
      return p.forEach(function(x) {
        return x(w);
      });
    }, subscribe: function(w) {
      var x = Hi(w);
      return v.add(x.next), { unsubscribe: function() {
        v.delete(x.next);
      } };
    }, stop: function() {
      a = true, Ae(h) && h();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return m;
    } }, n[Hr] = function() {
      return this;
    }, n);
    return this.children.set(e, y), y;
  }, t.prototype.spawnObservable = function(r, e) {
    var n, s = this, a, p = r.subscribe(function(m) {
      a = m, s.send(st(m, { origin: e }));
    }, function(m) {
      s.removeChild(e), s.send(st(ti(e, m), { origin: e }));
    }, function() {
      s.removeChild(e), s.send(st(qi(e), { origin: e }));
    }), v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, h) {
      return r.subscribe(m, d, h);
    }, stop: function() {
      return p.unsubscribe();
    }, getSnapshot: function() {
      return a;
    }, toJSON: function() {
      return { id: e };
    } }, n[Hr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnActor = function(r, e) {
    return this.children.set(e, r), r;
  }, t.prototype.spawnActivity = function(r) {
    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[r.type] : void 0;
    if (!e) {
      je || nt(false, "No implementation found for activity '".concat(r.type, "'"));
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
    } }, n[Hr] = function() {
      return this;
    }, n));
  }, t.prototype.attachDev = function() {
    var r = $s();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, e), { features: V({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Of(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[Hr] = function() {
    return this;
  }, t.prototype.getSnapshot = function() {
    return this.status === lt.NotStarted ? this.initialState : this._state;
  }, t.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(r, e) {
    return setTimeout(r, e);
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  } }, logger: console.log.bind(console), devTools: false }, t.interpret = ut, t;
}();
function ut(t, r) {
  var e = new If(t, r);
  return e;
}
__name(ut, "ut");
u(ut, "interpret");
function Xb(t) {
  if (typeof t == "string") {
    var r = { type: t };
    return r.toString = function() {
      return t;
    }, r;
  }
  return t;
}
__name(Xb, "Xb");
u(Xb, "toInvokeSource");
function Uo(t) {
  return V(V({ type: No }, t), { toJSON: function() {
    t.onDone, t.onError;
    var r = Ni(t, ["onDone", "onError"]);
    return V(V({}, r), { type: No, src: Xb(t.src) });
  } });
}
__name(Uo, "Uo");
u(Uo, "toInvokeDefinition");
var Zi = "";
var $u = "#";
var Wo = "*";
var Yi = {};
var Xi = u(function(t) {
  return t[0] === $u;
}, "isStateId");
var Zb = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Kb = u(function(t, r, e) {
  var n = e.slice(0, -1).some(function(a) {
    return !("cond" in a) && !("in" in a) && (Ce(a.target) || Br(a.target));
  }), s = r === Zi ? "the transient event" : "event '".concat(r, "'");
  nt(!n, "One or more transitions for ".concat(s, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Af = function() {
  function t(r, e, n, s) {
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var a = this, p;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Zb(), e), this.parent = s == null ? void 0 : s.parent, this.key = this.config.key || (s == null ? void 0 : s.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Rs), this.id = this.config.id || Ne([this.machine.key], Se(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (p = this.config.schema) !== null && p !== void 0 ? p : {}, this.description = this.config.description, je || nt(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? Gi(this.config.states, function(d, h) {
      var y, w = new t(d, {}, void 0, { parent: a, key: h });
      return Object.assign(a.idMap, V((y = {}, y[w.id] = w, y), w.idMap)), w;
    }) : Yi;
    var v = 0;
    function m(d) {
      var h, y;
      d.order = v++;
      try {
        for (var w = xe(_u(d)), x = w.next(); !x.done; x = w.next()) {
          var T = x.value;
          m(T);
        }
      } catch (C) {
        h = { error: C };
      } finally {
        try {
          x && !x.done && (y = w.return) && y.call(w);
        } finally {
          if (h)
            throw h.error;
        }
      }
    }
    __name(m, "m");
    u(m, "dfs"), m(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var h = d.event;
      return h === Zi;
    }) : Zi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = cr(this.config.entry || this.config.onEntry).map(function(d) {
      return $i(d);
    }), this.onExit = cr(this.config.exit || this.config.onExit).map(function(d) {
      return $i(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = cr(this.config.invoke).map(function(d, h) {
      var y, w;
      if (Br(d)) {
        var x = Ho(a.id, h);
        return a.machine.options.services = V((y = {}, y[x] = d, y), a.machine.options.services), Uo({ src: x, id: x });
      } else if (Ce(d.src)) {
        var x = d.id || Ho(a.id, h);
        return Uo(V(V({}, d), { id: x, src: d.src }));
      } else if (Br(d.src) || Ae(d.src)) {
        var x = d.id || Ho(a.id, h);
        return a.machine.options.services = V((w = {}, w[x] = d.src, w), a.machine.options.services), Uo(V(V({ id: x }, d), { src: x }));
      } else {
        var T = d.src;
        return Uo(V(V({ id: Ho(a.id, h) }, d), { src: T }));
      }
    }), this.activities = cr(this.config.activities).concat(this.invoke).map(function(d) {
      return Bs(d);
    }), this.transition = this.transition.bind(this), this.tags = cr(this.config.tags);
  }
  __name(t, "t");
  return u(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Lu(this).forEach(function(r) {
      return r.on;
    });
  }, t.prototype.withConfig = function(r, e) {
    var n = this.options, s = n.actions, a = n.activities, p = n.guards, v = n.services, m = n.delays;
    return new t(this.config, { actions: V(V({}, s), r.actions), activities: V(V({}, a), r.activities), guards: V(V({}, p), r.guards), services: V(V({}, v), r.services), delays: V(V({}, m), r.delays) }, e != null ? e : this.context);
  }, t.prototype.withContext = function(r) {
    return new t(this.config, this.options, r);
  }, Object.defineProperty(t.prototype, "context", { get: function() {
    return Ae(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: Gi(this.states, function(r) {
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
    var e = r === Zi, n = this.transitions.filter(function(s) {
      var a = s.eventType === r;
      return e ? a : a || s.eventType === Wo;
    });
    return this.__cache.candidates[r] = n, n;
  }, t.prototype.getDelayedTransitions = function() {
    var r = this, e = this.config.after;
    if (!e)
      return [];
    var n = u(function(a, p) {
      var v = Ae(a) ? "".concat(r.id, ":delay[").concat(p, "]") : a, m = hf(v, r.id);
      return r.onEntry.push(cf(m, { delay: a })), r.onExit.push(pf(m)), m;
    }, "mutateEntryExit"), s = an(e) ? e.map(function(a, p) {
      var v = n(a.delay, p);
      return V(V({}, a), { event: v });
    }) : qe(Object.keys(e).map(function(a, p) {
      var v = e[a], m = Ce(v) ? { target: v } : v, d = isNaN(+a) ? a : +a, h = n(d, p);
      return cr(m).map(function(y) {
        return V(V({}, y), { event: h, delay: d });
      });
    }));
    return s.map(function(a) {
      var p = a.delay;
      return V(V({}, r.formatTransition(a)), { delay: p });
    });
  }, t.prototype.getStateNodes = function(r) {
    var e, n = this;
    if (!r)
      return [];
    var s = r instanceof Sr ? r.value : Li(r, this.delimiter);
    if (Ce(s)) {
      var a = this.getStateNode(s).initial;
      return a !== void 0 ? this.getStateNodes((e = {}, e[s] = a, e)) : [this, this.states[s]];
    }
    var p = Object.keys(s), v = [this];
    return v.push.apply(v, Ne([], Se(qe(p.map(function(m) {
      return n.getStateNode(m).getStateNodes(s[m]);
    }))), false)), v;
  }, t.prototype.handles = function(r) {
    var e = Ns(r);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(r) {
    var e = r instanceof Sr ? r : Sr.create(r), n = Array.from(Ui([], this.getStateNodes(e.value)));
    return new Sr(V(V({}, e), { value: this.resolve(e.value), configuration: n, done: Fo(n, this), tags: Gu(n), machine: this.machine }));
  }, t.prototype.transitionLeafNode = function(r, e, n) {
    var s = this.getStateNode(r), a = s.next(e, n);
    return !a || !a.transitions.length ? this.next(e, n) : a;
  }, t.prototype.transitionCompoundNode = function(r, e, n) {
    var s = Object.keys(r), a = this.getStateNode(s[0]), p = a._transition(r[s[0]], e, n);
    return !p || !p.transitions.length ? this.next(e, n) : p;
  }, t.prototype.transitionParallelNode = function(r, e, n) {
    var s, a, p = {};
    try {
      for (var v = xe(Object.keys(r)), m = v.next(); !m.done; m = v.next()) {
        var d = m.value, h = r[d];
        if (h) {
          var y = this.getStateNode(d), w = y._transition(h, e, n);
          w && (p[d] = w);
        }
      }
    } catch (_) {
      s = { error: _ };
    } finally {
      try {
        m && !m.done && (a = v.return) && a.call(v);
      } finally {
        if (s)
          throw s.error;
      }
    }
    var x = Object.keys(p).map(function(_) {
      return p[_];
    }), T = qe(x.map(function(_) {
      return _.transitions;
    })), C = x.some(function(_) {
      return _.transitions.length > 0;
    });
    if (!C)
      return this.next(e, n);
    var R = qe(Object.keys(p).map(function(_) {
      return p[_].configuration;
    }));
    return { transitions: T, exitSet: qe(x.map(function(_) {
      return _.exitSet;
    })), configuration: R, source: e, actions: qe(Object.keys(p).map(function(_) {
      return p[_].actions;
    })) };
  }, t.prototype._transition = function(r, e, n) {
    return Ce(r) ? this.transitionLeafNode(r, e, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, e, n) : this.transitionParallelNode(r, e, n);
  }, t.prototype.getTransitionData = function(r, e) {
    return this._transition(r.value, r, st(e));
  }, t.prototype.next = function(r, e) {
    var n, s, a = this, p = e.name, v = [], m = [], d;
    try {
      for (var h = xe(this.getCandidates(p)), y = h.next(); !y.done; y = h.next()) {
        var w = y.value, x = w.cond, T = w.in, C = r.context, R = T ? Ce(T) && Xi(T) ? r.matches(Li(this.getStateNodeById(T).path, this.delimiter)) : Go(Li(T, this.delimiter), Zd(this.path.slice(0, -2))(r.value)) : true, _ = false;
        try {
          _ = !x || Gs(this.machine, x, C, e, r);
        } catch (A) {
          throw new Error("Unable to evaluate guard '".concat(x.name || x.type, "' in transition for event '").concat(p, "' in state node '").concat(this.id, `':
`).concat(A.message));
        }
        if (_ && R) {
          w.target !== void 0 && (m = w.target), v.push.apply(v, Ne([], Se(w.actions), false)), d = w;
          break;
        }
      }
    } catch (A) {
      n = { error: A };
    } finally {
      try {
        y && !y.done && (s = h.return) && s.call(h);
      } finally {
        if (n)
          throw n.error;
      }
    }
    if (d) {
      if (!m.length)
        return { transitions: [d], exitSet: [], configuration: r.value ? [this] : [], source: r, actions: v };
      var L = qe(m.map(function(A) {
        return a.getRelativeStateNodes(A, r.historyValue);
      })), $ = !!d.internal;
      return { transitions: [d], exitSet: $ ? [] : qe(m.map(function(A) {
        return a.getPotentiallyReenteringNodes(A);
      })), configuration: L, source: r, actions: v };
    }
  }, t.prototype.getPotentiallyReenteringNodes = function(r) {
    if (this.order < r.order)
      return [this];
    for (var e = [], n = this, s = r; n && n !== s; )
      e.push(n), n = n.parent;
    return n !== s ? [] : (e.push(s), e);
  }, t.prototype.getActions = function(r, e, n, s, a, p, v) {
    var m, d, h, y, w = this, x = p ? Ui([], this.getStateNodes(p.value)) : [], T = /* @__PURE__ */ new Set();
    try {
      for (var C = xe(Array.from(r).sort(function(K, ie) {
        return K.order - ie.order;
      })), R = C.next(); !R.done; R = C.next()) {
        var _ = R.value;
        (!Wi(x, _) || Wi(n.exitSet, _) || _.parent && T.has(_.parent)) && T.add(_);
      }
    } catch (K) {
      m = { error: K };
    } finally {
      try {
        R && !R.done && (d = C.return) && d.call(C);
      } finally {
        if (m)
          throw m.error;
      }
    }
    try {
      for (var L = xe(x), $ = L.next(); !$.done; $ = L.next()) {
        var _ = $.value;
        (!Wi(r, _) || Wi(n.exitSet, _.parent)) && n.exitSet.push(_);
      }
    } catch (K) {
      h = { error: K };
    } finally {
      try {
        $ && !$.done && (y = L.return) && y.call(L);
      } finally {
        if (h)
          throw h.error;
      }
    }
    n.exitSet.sort(function(K, ie) {
      return ie.order - K.order;
    });
    var A = Array.from(T).sort(function(K, ie) {
      return K.order - ie.order;
    }), ee = new Set(n.exitSet), z = qe(A.map(function(K) {
      var ie = [];
      if (K.type !== "final")
        return ie;
      var q = K.parent;
      if (!q.parent)
        return ie;
      ie.push($o(K.id, K.doneData), $o(q.id, K.doneData ? Qn(K.doneData, s, a) : void 0));
      var oe = q.parent;
      return oe.type === "parallel" && Fi(oe).every(function(tt) {
        return Fo(n.configuration, tt);
      }) && ie.push($o(oe.id)), ie;
    })), H = A.map(function(K) {
      var ie = K.onEntry, q = K.activities.map(function(oe) {
        return df(oe);
      });
      return { type: "entry", actions: $r(v ? Ne(Ne([], Se(ie), false), Se(q), false) : Ne(Ne([], Se(q), false), Se(ie), false), w.machine.options.actions) };
    }).concat({ type: "state_done", actions: z.map(function(K) {
      return uf(K);
    }) }), te = Array.from(ee).map(function(K) {
      return { type: "exit", actions: $r(Ne(Ne([], Se(K.onExit), false), Se(K.activities.map(function(ie) {
        return ff(ie);
      })), false), w.machine.options.actions) };
    }), Q = te.concat({ type: "transition", actions: $r(n.actions, this.machine.options.actions) }).concat(H);
    if (e) {
      var ue = $r(qe(Ne([], Se(r), false).sort(function(K, ie) {
        return ie.order - K.order;
      }).map(function(K) {
        return K.onExit;
      })), this.machine.options.actions).filter(function(K) {
        return !Bo(K);
      });
      return Q.concat({ type: "stop", actions: ue });
    }
    return Q;
  }, t.prototype.transition = function(r, e, n, s) {
    r === void 0 && (r = this.initialState);
    var a = st(e), p;
    if (r instanceof Sr)
      p = n === void 0 ? r : this.resolveState(Sr.from(r, n));
    else {
      var v = Ce(r) ? this.resolve(Lo(this.getResolvedPath(r))) : this.resolve(r), m = n != null ? n : this.machine.context;
      p = this.resolveState(Sr.from(v, m));
    }
    if (!je && a.name === Wo)
      throw new Error("An event cannot have the wildcard type ('".concat(Wo, "')"));
    if (this.strict && !this.events.includes(a.name) && !Qd(a.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
    var d = this._transition(p.value, p, a) || { transitions: [], configuration: [], exitSet: [], source: p, actions: [] }, h = Ui([], this.getStateNodes(p.value)), y = d.configuration.length ? Ui(h, d.configuration) : h;
    return d.configuration = Ne([], Se(y), false), this.resolveTransition(d, p, p.context, s, a);
  }, t.prototype.resolveRaisedTransition = function(r, e, n, s) {
    var a, p = r.actions;
    return r = this.transition(r, e, void 0, s), r._event = n, r.event = n.data, (a = r.actions).unshift.apply(a, Ne([], Se(p), false)), r;
  }, t.prototype.resolveTransition = function(r, e, n, s, a) {
    var p, v, m, d, h = this;
    a === void 0 && (a = sn);
    var y = r.configuration, w = !e || r.transitions.length > 0, x = w ? r.configuration : e ? e.configuration : [], T = Fo(x, this), C = w ? xf(this.machine, y) : void 0, R = e ? e.historyValue ? e.historyValue : r.source ? this.machine.historyValue(e.value) : void 0 : void 0, _ = this.getActions(new Set(x), T, r, n, a, e, s), L = e ? V({}, e.activities) : {};
    try {
      for (var $ = xe(_), A = $.next(); !A.done; A = $.next()) {
        var ee = A.value;
        try {
          for (var z = (m = void 0, xe(ee.actions)), H = z.next(); !H.done; H = z.next()) {
            var te = H.value;
            te.type === Do ? L[te.activity.id || te.activity.type] = te : te.type === _i && (L[te.activity.id || te.activity.type] = false);
          }
        } catch (He) {
          m = { error: He };
        } finally {
          try {
            H && !H.done && (d = z.return) && d.call(z);
          } finally {
            if (m)
              throw m.error;
          }
        }
      }
    } catch (He) {
      p = { error: He };
    } finally {
      try {
        A && !A.done && (v = $.return) && v.call($);
      } finally {
        if (p)
          throw p.error;
      }
    }
    var Q = Se(Bi(this, e, n, a, _, s, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), ue = Q[0], K = Q[1], ie = Se(tf(ue, Bo), 2), q = ie[0], oe = ie[1], tt = ue.filter(function(He) {
      var rt;
      return He.type === Do && ((rt = He.activity) === null || rt === void 0 ? void 0 : rt.type) === No;
    }), Ze = tt.reduce(function(He, rt) {
      return He[rt.activity.id] = gf(rt.activity, h.machine, K, a), He;
    }, e ? V({}, e.children) : {}), Re = new Sr({ value: C || e.value, context: K, _event: a, _sessionid: e ? e._sessionid : null, historyValue: C ? R ? nf(R, C) : void 0 : e ? e.historyValue : void 0, history: !C || r.source ? e : void 0, actions: C ? oe : [], activities: C ? L : e ? e.activities : {}, events: [], configuration: x, transitions: r.transitions, children: Ze, done: T, tags: Gu(x), machine: this }), Pe = n !== K;
    Re.changed = a.name === _o || Pe;
    var We = Re.history;
    We && delete We.history;
    var Je = !T && (this._transient || y.some(function(He) {
      return He._transient;
    }));
    if (!w && (!Je || a.name === Zi))
      return Re;
    var Ye = Re;
    if (!T)
      for (Je && (Ye = this.resolveRaisedTransition(Ye, { type: Ud }, a, s)); q.length; ) {
        var J = q.shift();
        Ye = this.resolveRaisedTransition(Ye, J._event, a, s);
      }
    var ar = Ye.changed || (We ? !!Ye.actions.length || Pe || typeof We.value != typeof Ye.value || !ju(Ye.value, We.value) : void 0);
    return Ye.changed = ar, Ye.history = We, Ye;
  }, t.prototype.getStateNode = function(r) {
    if (Xi(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[r];
    if (!e)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, t.prototype.getStateNodeById = function(r) {
    var e = Xi(r) ? r.slice($u.length) : r;
    if (e === this.id)
      return this;
    var n = this.machine.idMap[e];
    if (!n)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, t.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && Xi(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (a) {
      }
    for (var e = _s(r, this.delimiter).slice(), n = this; e.length; ) {
      var s = e.shift();
      if (!s.length)
        break;
      n = n.getStateNode(s);
    }
    return n;
  }, t.prototype.resolve = function(r) {
    var e, n = this;
    if (!r)
      return this.initialStateValue || Yi;
    switch (this.type) {
      case "parallel":
        return Gi(this.initialStateValue, function(a, p) {
          return a ? n.getStateNode(p).resolve(r[p] || a) : Yi;
        });
      case "compound":
        if (Ce(r)) {
          var s = this.getStateNode(r);
          return s.type === "parallel" || s.type === "compound" ? (e = {}, e[r] = s.initialStateValue, e) : r;
        }
        return Object.keys(r).length ? Gi(r, function(a, p) {
          return a ? n.getStateNode(p).resolve(a) : Yi;
        }) : this.initialStateValue || {};
      default:
        return r || Yi;
    }
  }, t.prototype.getResolvedPath = function(r) {
    if (Xi(r)) {
      var e = this.machine.idMap[r.slice($u.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return e.path;
    }
    return _s(r, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = zu(this.states, function(n) {
        return n.initialStateValue || Yi;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = qo(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
    } else
      e = {};
    return this.__cache.initialStateValue = e, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), t.prototype.getInitialState = function(r, e) {
    this._init();
    var n = this.getStateNodes(r);
    return this.resolveTransition({ configuration: n, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, e != null ? e : this.machine.context, void 0);
  }, Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this.initialStateValue;
    if (!r)
      throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(r);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "target", { get: function() {
    var r;
    if (this.type === "history") {
      var e = this.config;
      Ce(e.target) ? r = Xi(e.target) ? Lo(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : r = e.target;
    }
    return r;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(r, e, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(e) : r.initialStateNodes : [r];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (qo(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return je || nt(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = jo(this.initialStateValue);
    return qe(e.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), t.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var e = Se(r), n = e[0], s = e.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var a = this.getStateNode(n);
    if (a.type === "history")
      return a.resolveHistory();
    if (!this.states[n])
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(s);
  }, t.prototype.historyValue = function(r) {
    if (Object.keys(this.states).length)
      return { current: r || this.initialStateValue, states: zu(this.states, function(e, n) {
        if (!r)
          return e.historyValue();
        var s = Ce(r) ? void 0 : r[n];
        return e.historyValue(s || e.initialStateValue);
      }, function(e) {
        return !e.history;
      }) };
  }, t.prototype.resolveHistory = function(r) {
    var e = this;
    if (this.type !== "history")
      return [this];
    var n = this.parent;
    if (!r) {
      var s = this.target;
      return s ? qe(jo(s).map(function(p) {
        return n.getFromRelativePath(p);
      })) : n.initialStateNodes;
    }
    var a = Kd(n.path, "states")(r).current;
    return Ce(a) ? [n.getStateNode(a)] : qe(jo(a).map(function(p) {
      return e.history === "deep" ? n.getFromRelativePath(p) : [n.states[p[0]]];
    }));
  }, Object.defineProperty(t.prototype, "stateIds", { get: function() {
    var r = this, e = qe(Object.keys(this.states).map(function(n) {
      return r.states[n].stateIds;
    }));
    return [this.id].concat(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "events", { get: function() {
    var r, e, n, s;
    if (this.__cache.events)
      return this.__cache.events;
    var a = this.states, p = new Set(this.ownEvents);
    if (a)
      try {
        for (var v = xe(Object.keys(a)), m = v.next(); !m.done; m = v.next()) {
          var d = m.value, h = a[d];
          if (h.states)
            try {
              for (var y = (n = void 0, xe(h.events)), w = y.next(); !w.done; w = y.next()) {
                var x = w.value;
                p.add("".concat(x));
              }
            } catch (T) {
              n = { error: T };
            } finally {
              try {
                w && !w.done && (s = y.return) && s.call(y);
              } finally {
                if (n)
                  throw n.error;
              }
            }
        }
      } catch (T) {
        r = { error: T };
      } finally {
        try {
          m && !m.done && (e = v.return) && e.call(v);
        } finally {
          if (r)
            throw r.error;
        }
      }
    return this.__cache.events = Array.from(p);
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
        if (!Ce(n))
          return n;
        var s = n[0] === e.delimiter;
        if (s && !e.parent)
          return e.getStateNodeByPath(n.slice(1));
        var a = s ? e.key + n : n;
        if (e.parent)
          try {
            var p = e.parent.getStateNodeByPath(a);
            return p;
          } catch (v) {
            throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(v.message));
          }
        else
          return e.getStateNodeByPath(a);
      });
  }, t.prototype.formatTransition = function(r) {
    var e = this, n = sf(r.target), s = "internal" in r ? r.internal : n ? n.some(function(m) {
      return Ce(m) && m[0] === e.delimiter;
    }) : true, a = this.machine.options.guards, p = this.resolveTarget(n), v = V(V({}, r), { actions: $r(cr(r.actions)), cond: Ls(r.cond, a), target: p, source: this, internal: s, eventType: r.event, toJSON: function() {
      return V(V({}, v), { target: v.target ? v.target.map(function(m) {
        return "#".concat(m.id);
      }) : void 0, source: "#".concat(e.id) });
    } });
    return v;
  }, t.prototype.formatTransitions = function() {
    var r, e, n = this, s;
    if (!this.config.on)
      s = [];
    else if (Array.isArray(this.config.on))
      s = this.config.on;
    else {
      var a = this.config.on, p = Wo, v = a[p], m = v === void 0 ? [] : v, d = Ni(a, [typeof p == "symbol" ? p : p + ""]);
      s = qe(Object.keys(d).map(function(L) {
        !je && L === Zi && nt(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var $ = ei(L, d[L]);
        return je || Kb(n, L, $), $;
      }).concat(ei(Wo, m)));
    }
    var h = this.config.always ? ei("", this.config.always) : [], y = this.config.onDone ? ei(String($o(this.id)), this.config.onDone) : [];
    je || nt(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = qe(this.invoke.map(function(L) {
      var $ = [];
      return L.onDone && $.push.apply($, Ne([], Se(ei(String(qi(L.id)), L.onDone)), false)), L.onError && $.push.apply($, Ne([], Se(ei(String(ti(L.id)), L.onError)), false)), $;
    })), x = this.after, T = qe(Ne(Ne(Ne(Ne([], Se(y), false), Se(w), false), Se(s), false), Se(h), false).map(function(L) {
      return cr(L).map(function($) {
        return n.formatTransition($);
      });
    }));
    try {
      for (var C = xe(x), R = C.next(); !R.done; R = C.next()) {
        var _ = R.value;
        T.push(_);
      }
    } catch (L) {
      r = { error: L };
    } finally {
      try {
        R && !R.done && (e = C.return) && e.call(C);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return T;
  }, t;
}();
var Pf = false;
function mt(t, r) {
  return !je && !("predictableActionArguments" in t) && !Pf && (Pf = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new Af(t, r);
}
__name(mt, "mt");
u(mt, "createMachine");
var Rf = jt(rn(), 1);
var Yo = jt(Vo(), 1);
var Fs = u((t) => t != null && typeof t.draggable == "boolean", "isDraggable");
var qs = u((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Fu = u((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function me(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.operationX = 0;
      this.operationY = 0;
      this.grabbed = false;
      this.dragging = false;
      this.snapped = false;
      this.bit = -1;
      this.debugDraggable = false;
      this.draggableMachine = mt({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        fe("draggable:init", {}, this);
      }, setInteract: (a, p) => {
        B.need(p.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let v = (0, Yo.default)(this);
        v.styleCursor(false), v.pointerEvents({ ignoreFrom: ".resize-handle" }), v.on("down", this.grab.bind(this)), v.on("up", this.release.bind(this)), v.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let m = this.dropzone;
        qs(m) ? this.snappedDropzone = m : this.snappedDropzone = null;
      }, grab: (a, p) => {
        B.need(p.type === "GRAB", "event type must be GRAB"), p.type === "GRAB" && (this.grabbed = true, fe("draggable:grab", {}, this), Fu(this.dropzone) && (this.snapped = false, this.moveByOffset(p.x, p.y), this.classList.remove("qpu-operation-xl")));
      }, release: (a, p) => {
        B.need(p.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, fe("draggable:release", {}, this);
      }, startDragging: (a, p) => {
        B.need(p.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (a, p) => {
        B.need(p.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, fe("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, fe("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && fe("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        this.snapped && (this.moveTo(0, 0), fe("draggable:drop", {}, this));
      }, delete: () => {
        (0, Yo.default)(this).unset(), fe("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => qs(this.dropzone), isOnPaletteDropzone: () => Fu(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && qs(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = ut(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${(0, Rf.format)(a.value)}`);
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
      return B.notNull(a), !Fu(a) && !qs(a) ? null : a;
    }
    set snapTargets(a) {
      (0, Yo.default)(this).draggable({ modifiers: [Yo.default.modifiers.snap({ targets: a, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(a) {
      let p = a.modifiers[0];
      if (p.inRange) {
        let v = p.target.source;
        fe("draggable:in-snap-range", { snapTargetInfo: v }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
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
    move(a, p) {
      let v = this.operationX + a, m = this.operationY + p;
      this.moveTo(v, m);
    }
    moveTo(a, p) {
      this.operationX = a, this.operationY = p, this.style.transform = `translate(${a}px, ${p}px)`;
    }
    moveByOffset(a, p) {
      let v = a - this.clientWidth / 2, m = p - this.clientHeight / 2;
      this.move(v, m);
    }
  };
  u(e, "DraggableMixinClass"), M([D], e.prototype, "operationX", 2), M([D], e.prototype, "operationY", 2), M([D], e.prototype, "grabbed", 2), M([D], e.prototype, "dragging", 2), M([D], e.prototype, "snapped", 2), M([D], e.prototype, "bit", 2), M([D], e.prototype, "debugDraggable", 2);
  let r = e;
  return r;
}
__name(me, "me");
u(me, "DraggableMixin");
var ri = u((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function kf(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  };
  u(e, "FlaggableMixinClass"), M([D], e.prototype, "flag", 2);
  let r = e;
  return r;
}
__name(kf, "kf");
u(kf, "FlaggableMixin");
var Qe = "top";
var vt = "bottom";
var ct = "right";
var it = "left";
var Us = "auto";
var Rn = [Qe, vt, ct, it];
var ln = "start";
var ni = "end";
var Df = "clippingParents";
var Ws = "viewport";
var Ki = "popper";
var Nf = "reference";
var Uu = Rn.reduce(function(t, r) {
  return t.concat([r + "-" + ln, r + "-" + ni]);
}, []);
var Vs = [].concat(Rn, [Us]).reduce(function(t, r) {
  return t.concat([r, r + "-" + ln, r + "-" + ni]);
}, []);
var Jb = "beforeRead";
var Qb = "read";
var ey = "afterRead";
var ty = "beforeMain";
var ry = "main";
var ny = "afterMain";
var iy = "beforeWrite";
var oy = "write";
var ay = "afterWrite";
var _f = [Jb, Qb, ey, ty, ry, ny, iy, oy, ay];
function yt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
__name(yt, "yt");
u(yt, "getNodeName");
function ot(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var r = t.ownerDocument;
    return r && r.defaultView || window;
  }
  return t;
}
__name(ot, "ot");
u(ot, "getWindow");
function qr(t) {
  var r = ot(t).Element;
  return t instanceof r || t instanceof Element;
}
__name(qr, "qr");
u(qr, "isElement");
function gt(t) {
  var r = ot(t).HTMLElement;
  return t instanceof r || t instanceof HTMLElement;
}
__name(gt, "gt");
u(gt, "isHTMLElement");
function Ys(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = ot(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
__name(Ys, "Ys");
u(Ys, "isShadowRoot");
function sy(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function(e) {
    var n = r.styles[e] || {}, s = r.attributes[e] || {}, a = r.elements[e];
    !gt(a) || !yt(a) || (Object.assign(a.style, n), Object.keys(s).forEach(function(p) {
      var v = s[p];
      v === false ? a.removeAttribute(p) : a.setAttribute(p, v === true ? "" : v);
    }));
  });
}
__name(sy, "sy");
u(sy, "applyStyles");
function ly(t) {
  var r = t.state, e = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, e.popper), r.styles = e, r.elements.arrow && Object.assign(r.elements.arrow.style, e.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var s = r.elements[n], a = r.attributes[n] || {}, p = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : e[n]), v = p.reduce(function(m, d) {
        return m[d] = "", m;
      }, {});
      !gt(s) || !yt(s) || (Object.assign(s.style, v), Object.keys(a).forEach(function(m) {
        s.removeAttribute(m);
      }));
    });
  };
}
__name(ly, "ly");
u(ly, "effect");
var Xo = { name: "applyStyles", enabled: true, phase: "write", fn: sy, effect: ly, requires: ["computeStyles"] };
function wt(t) {
  return t.split("-")[0];
}
__name(wt, "wt");
u(wt, "getBasePlacement");
var Pr = Math.max;
var ii = Math.min;
var un = Math.round;
function Tr(t, r) {
  r === void 0 && (r = false);
  var e = t.getBoundingClientRect(), n = 1, s = 1;
  if (gt(t) && r) {
    var a = t.offsetHeight, p = t.offsetWidth;
    p > 0 && (n = un(e.width) / p || 1), a > 0 && (s = un(e.height) / a || 1);
  }
  return { width: e.width / n, height: e.height / s, top: e.top / s, right: e.right / n, bottom: e.bottom / s, left: e.left / n, x: e.left / n, y: e.top / s };
}
__name(Tr, "Tr");
u(Tr, "getBoundingClientRect");
function oi(t) {
  var r = Tr(t), e = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(r.width - e) <= 1 && (e = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: n };
}
__name(oi, "oi");
u(oi, "getLayoutRect");
function Zo(t, r) {
  var e = r.getRootNode && r.getRootNode();
  if (t.contains(r))
    return true;
  if (e && Ys(e)) {
    var n = r;
    do {
      if (n && t.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name(Zo, "Zo");
u(Zo, "contains");
function Ht(t) {
  return ot(t).getComputedStyle(t);
}
__name(Ht, "Ht");
u(Ht, "getComputedStyle");
function Wu(t) {
  return ["table", "td", "th"].indexOf(yt(t)) >= 0;
}
__name(Wu, "Wu");
u(Wu, "isTableElement");
function Ot(t) {
  return ((qr(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(Ot, "Ot");
u(Ot, "getDocumentElement");
function cn(t) {
  return yt(t) === "html" ? t : t.assignedSlot || t.parentNode || (Ys(t) ? t.host : null) || Ot(t);
}
__name(cn, "cn");
u(cn, "getParentNode");
function Lf(t) {
  return !gt(t) || Ht(t).position === "fixed" ? null : t.offsetParent;
}
__name(Lf, "Lf");
u(Lf, "getTrueOffsetParent");
function uy(t) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && gt(t)) {
    var n = Ht(t);
    if (n.position === "fixed")
      return null;
  }
  for (var s = cn(t); gt(s) && ["html", "body"].indexOf(yt(s)) < 0; ) {
    var a = Ht(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || r && a.willChange === "filter" || r && a.filter && a.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
__name(uy, "uy");
u(uy, "getContainingBlock");
function zr(t) {
  for (var r = ot(t), e = Lf(t); e && Wu(e) && Ht(e).position === "static"; )
    e = Lf(e);
  return e && (yt(e) === "html" || yt(e) === "body" && Ht(e).position === "static") ? r : e || uy(t) || r;
}
__name(zr, "zr");
u(zr, "getOffsetParent");
function ai(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
__name(ai, "ai");
u(ai, "getMainAxisFromPlacement");
function si(t, r, e) {
  return Pr(t, ii(r, e));
}
__name(si, "si");
u(si, "within");
function Gf(t, r, e) {
  var n = si(t, r, e);
  return n > e ? e : n;
}
__name(Gf, "Gf");
u(Gf, "withinMaxClamp");
function Ko() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(Ko, "Ko");
u(Ko, "getFreshSideObject");
function Jo(t) {
  return Object.assign({}, Ko(), t);
}
__name(Jo, "Jo");
u(Jo, "mergePaddingObject");
function Qo(t, r) {
  return r.reduce(function(e, n) {
    return e[n] = t, e;
  }, {});
}
__name(Qo, "Qo");
u(Qo, "expandToHashMap");
var cy = u(function(r, e) {
  return r = typeof r == "function" ? r(Object.assign({}, e.rects, { placement: e.placement })) : r, Jo(typeof r != "number" ? r : Qo(r, Rn));
}, "toPaddingObject");
function py(t) {
  var r, e = t.state, n = t.name, s = t.options, a = e.elements.arrow, p = e.modifiersData.popperOffsets, v = wt(e.placement), m = ai(v), d = [it, ct].indexOf(v) >= 0, h = d ? "height" : "width";
  if (!(!a || !p)) {
    var y = cy(s.padding, e), w = oi(a), x = m === "y" ? Qe : it, T = m === "y" ? vt : ct, C = e.rects.reference[h] + e.rects.reference[m] - p[m] - e.rects.popper[h], R = p[m] - e.rects.reference[m], _ = zr(a), L = _ ? m === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, $ = C / 2 - R / 2, A = y[x], ee = L - w[h] - y[T], z = L / 2 - w[h] / 2 + $, H = si(A, z, ee), te = m;
    e.modifiersData[n] = (r = {}, r[te] = H, r.centerOffset = H - z, r);
  }
}
__name(py, "py");
u(py, "arrow");
function dy(t) {
  var r = t.state, e = t.options, n = e.element, s = n === void 0 ? "[data-popper-arrow]" : n;
  s != null && (typeof s == "string" && (s = r.elements.popper.querySelector(s), !s) || Zo(r.elements.popper, s) && (r.elements.arrow = s));
}
__name(dy, "dy");
u(dy, "effect");
var jf = { name: "arrow", enabled: true, phase: "main", fn: py, effect: dy, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Cr(t) {
  return t.split("-")[1];
}
__name(Cr, "Cr");
u(Cr, "getVariation");
var fy = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function hy(t) {
  var r = t.x, e = t.y, n = window, s = n.devicePixelRatio || 1;
  return { x: un(r * s) / s || 0, y: un(e * s) / s || 0 };
}
__name(hy, "hy");
u(hy, "roundOffsetsByDPR");
function Hf(t) {
  var r, e = t.popper, n = t.popperRect, s = t.placement, a = t.variation, p = t.offsets, v = t.position, m = t.gpuAcceleration, d = t.adaptive, h = t.roundOffsets, y = t.isFixed, w = p.x, x = w === void 0 ? 0 : w, T = p.y, C = T === void 0 ? 0 : T, R = typeof h == "function" ? h({ x, y: C }) : { x, y: C };
  x = R.x, C = R.y;
  var _ = p.hasOwnProperty("x"), L = p.hasOwnProperty("y"), $ = it, A = Qe, ee = window;
  if (d) {
    var z = zr(e), H = "clientHeight", te = "clientWidth";
    if (z === ot(e) && (z = Ot(e), Ht(z).position !== "static" && v === "absolute" && (H = "scrollHeight", te = "scrollWidth")), z = z, s === Qe || (s === it || s === ct) && a === ni) {
      A = vt;
      var Q = y && ee.visualViewport ? ee.visualViewport.height : z[H];
      C -= Q - n.height, C *= m ? 1 : -1;
    }
    if (s === it || (s === Qe || s === vt) && a === ni) {
      $ = ct;
      var ue = y && ee.visualViewport ? ee.visualViewport.width : z[te];
      x -= ue - n.width, x *= m ? 1 : -1;
    }
  }
  var K = Object.assign({ position: v }, d && fy), ie = h === true ? hy({ x, y: C }) : { x, y: C };
  if (x = ie.x, C = ie.y, m) {
    var q;
    return Object.assign({}, K, (q = {}, q[A] = L ? "0" : "", q[$] = _ ? "0" : "", q.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + C + "px)" : "translate3d(" + x + "px, " + C + "px, 0)", q));
  }
  return Object.assign({}, K, (r = {}, r[A] = L ? C + "px" : "", r[$] = _ ? x + "px" : "", r.transform = "", r));
}
__name(Hf, "Hf");
u(Hf, "mapToStyles");
function my(t) {
  var r = t.state, e = t.options, n = e.gpuAcceleration, s = n === void 0 ? true : n, a = e.adaptive, p = a === void 0 ? true : a, v = e.roundOffsets, m = v === void 0 ? true : v;
  if (false)
    var d;
  var h = { placement: wt(r.placement), variation: Cr(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: s, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Hf(Object.assign({}, h, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: p, roundOffsets: m })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Hf(Object.assign({}, h, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(my, "my");
u(my, "computeStyles");
var Bf = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: my, data: {} };
var Xs = { passive: true };
function vy(t) {
  var r = t.state, e = t.instance, n = t.options, s = n.scroll, a = s === void 0 ? true : s, p = n.resize, v = p === void 0 ? true : p, m = ot(r.elements.popper), d = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return a && d.forEach(function(h) {
    h.addEventListener("scroll", e.update, Xs);
  }), v && m.addEventListener("resize", e.update, Xs), function() {
    a && d.forEach(function(h) {
      h.removeEventListener("scroll", e.update, Xs);
    }), v && m.removeEventListener("resize", e.update, Xs);
  };
}
__name(vy, "vy");
u(vy, "effect");
var $f = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: vy, data: {} };
var gy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ji(t) {
  return t.replace(/left|right|bottom|top/g, function(r) {
    return gy[r];
  });
}
__name(Ji, "Ji");
u(Ji, "getOppositePlacement");
var by = { start: "end", end: "start" };
function Zs(t) {
  return t.replace(/start|end/g, function(r) {
    return by[r];
  });
}
__name(Zs, "Zs");
u(Zs, "getOppositeVariationPlacement");
function li(t) {
  var r = ot(t), e = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: e, scrollTop: n };
}
__name(li, "li");
u(li, "getWindowScroll");
function ui(t) {
  return Tr(Ot(t)).left + li(t).scrollLeft;
}
__name(ui, "ui");
u(ui, "getWindowScrollBarX");
function Vu(t) {
  var r = ot(t), e = Ot(t), n = r.visualViewport, s = e.clientWidth, a = e.clientHeight, p = 0, v = 0;
  return n && (s = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = n.offsetLeft, v = n.offsetTop)), { width: s, height: a, x: p + ui(t), y: v };
}
__name(Vu, "Vu");
u(Vu, "getViewportRect");
function Yu(t) {
  var r, e = Ot(t), n = li(t), s = (r = t.ownerDocument) == null ? void 0 : r.body, a = Pr(e.scrollWidth, e.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), p = Pr(e.scrollHeight, e.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), v = -n.scrollLeft + ui(t), m = -n.scrollTop;
  return Ht(s || e).direction === "rtl" && (v += Pr(e.clientWidth, s ? s.clientWidth : 0) - a), { width: a, height: p, x: v, y: m };
}
__name(Yu, "Yu");
u(Yu, "getDocumentRect");
function ci(t) {
  var r = Ht(t), e = r.overflow, n = r.overflowX, s = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + s + n);
}
__name(ci, "ci");
u(ci, "isScrollParent");
function Ks(t) {
  return ["html", "body", "#document"].indexOf(yt(t)) >= 0 ? t.ownerDocument.body : gt(t) && ci(t) ? t : Ks(cn(t));
}
__name(Ks, "Ks");
u(Ks, "getScrollParent");
function kn(t, r) {
  var e;
  r === void 0 && (r = []);
  var n = Ks(t), s = n === ((e = t.ownerDocument) == null ? void 0 : e.body), a = ot(n), p = s ? [a].concat(a.visualViewport || [], ci(n) ? n : []) : n, v = r.concat(p);
  return s ? v : v.concat(kn(cn(p)));
}
__name(kn, "kn");
u(kn, "listScrollParents");
function Qi(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(Qi, "Qi");
u(Qi, "rectToClientRect");
function yy(t) {
  var r = Tr(t);
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(yy, "yy");
u(yy, "getInnerBoundingClientRect");
function qf(t, r) {
  return r === Ws ? Qi(Vu(t)) : qr(r) ? yy(r) : Qi(Yu(Ot(t)));
}
__name(qf, "qf");
u(qf, "getClientRectFromMixedType");
function wy(t) {
  var r = kn(cn(t)), e = ["absolute", "fixed"].indexOf(Ht(t).position) >= 0, n = e && gt(t) ? zr(t) : t;
  return qr(n) ? r.filter(function(s) {
    return qr(s) && Zo(s, n) && yt(s) !== "body";
  }) : [];
}
__name(wy, "wy");
u(wy, "getClippingParents");
function Xu(t, r, e) {
  var n = r === "clippingParents" ? wy(t) : [].concat(r), s = [].concat(n, [e]), a = s[0], p = s.reduce(function(v, m) {
    var d = qf(t, m);
    return v.top = Pr(d.top, v.top), v.right = ii(d.right, v.right), v.bottom = ii(d.bottom, v.bottom), v.left = Pr(d.left, v.left), v;
  }, qf(t, a));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
__name(Xu, "Xu");
u(Xu, "getClippingRect");
function ea(t) {
  var r = t.reference, e = t.element, n = t.placement, s = n ? wt(n) : null, a = n ? Cr(n) : null, p = r.x + r.width / 2 - e.width / 2, v = r.y + r.height / 2 - e.height / 2, m;
  switch (s) {
    case Qe:
      m = { x: p, y: r.y - e.height };
      break;
    case vt:
      m = { x: p, y: r.y + r.height };
      break;
    case ct:
      m = { x: r.x + r.width, y: v };
      break;
    case it:
      m = { x: r.x - e.width, y: v };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  var d = s ? ai(s) : null;
  if (d != null) {
    var h = d === "y" ? "height" : "width";
    switch (a) {
      case ln:
        m[d] = m[d] - (r[h] / 2 - e[h] / 2);
        break;
      case ni:
        m[d] = m[d] + (r[h] / 2 - e[h] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(ea, "ea");
u(ea, "computeOffsets");
function Rr(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, s = n === void 0 ? t.placement : n, a = e.boundary, p = a === void 0 ? Df : a, v = e.rootBoundary, m = v === void 0 ? Ws : v, d = e.elementContext, h = d === void 0 ? Ki : d, y = e.altBoundary, w = y === void 0 ? false : y, x = e.padding, T = x === void 0 ? 0 : x, C = Jo(typeof T != "number" ? T : Qo(T, Rn)), R = h === Ki ? Nf : Ki, _ = t.rects.popper, L = t.elements[w ? R : h], $ = Xu(qr(L) ? L : L.contextElement || Ot(t.elements.popper), p, m), A = Tr(t.elements.reference), ee = ea({ reference: A, element: _, strategy: "absolute", placement: s }), z = Qi(Object.assign({}, _, ee)), H = h === Ki ? z : A, te = { top: $.top - H.top + C.top, bottom: H.bottom - $.bottom + C.bottom, left: $.left - H.left + C.left, right: H.right - $.right + C.right }, Q = t.modifiersData.offset;
  if (h === Ki && Q) {
    var ue = Q[s];
    Object.keys(te).forEach(function(K) {
      var ie = [ct, vt].indexOf(K) >= 0 ? 1 : -1, q = [Qe, vt].indexOf(K) >= 0 ? "y" : "x";
      te[K] += ue[q] * ie;
    });
  }
  return te;
}
__name(Rr, "Rr");
u(Rr, "detectOverflow");
function Zu(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, s = e.boundary, a = e.rootBoundary, p = e.padding, v = e.flipVariations, m = e.allowedAutoPlacements, d = m === void 0 ? Vs : m, h = Cr(n), y = h ? v ? Uu : Uu.filter(function(T) {
    return Cr(T) === h;
  }) : Rn, w = y.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  w.length === 0 && (w = y);
  var x = w.reduce(function(T, C) {
    return T[C] = Rr(t, { placement: C, boundary: s, rootBoundary: a, padding: p })[wt(C)], T;
  }, {});
  return Object.keys(x).sort(function(T, C) {
    return x[T] - x[C];
  });
}
__name(Zu, "Zu");
u(Zu, "computeAutoPlacement");
function xy(t) {
  if (wt(t) === Us)
    return [];
  var r = Ji(t);
  return [Zs(t), r, Zs(r)];
}
__name(xy, "xy");
u(xy, "getExpandedFallbackPlacements");
function Ey(t) {
  var r = t.state, e = t.options, n = t.name;
  if (!r.modifiersData[n]._skip) {
    for (var s = e.mainAxis, a = s === void 0 ? true : s, p = e.altAxis, v = p === void 0 ? true : p, m = e.fallbackPlacements, d = e.padding, h = e.boundary, y = e.rootBoundary, w = e.altBoundary, x = e.flipVariations, T = x === void 0 ? true : x, C = e.allowedAutoPlacements, R = r.options.placement, _ = wt(R), L = _ === R, $ = m || (L || !T ? [Ji(R)] : xy(R)), A = [R].concat($).reduce(function(He, rt) {
      return He.concat(wt(rt) === Us ? Zu(r, { placement: rt, boundary: h, rootBoundary: y, padding: d, flipVariations: T, allowedAutoPlacements: C }) : rt);
    }, []), ee = r.rects.reference, z = r.rects.popper, H = /* @__PURE__ */ new Map(), te = true, Q = A[0], ue = 0; ue < A.length; ue++) {
      var K = A[ue], ie = wt(K), q = Cr(K) === ln, oe = [Qe, vt].indexOf(ie) >= 0, tt = oe ? "width" : "height", Ze = Rr(r, { placement: K, boundary: h, rootBoundary: y, altBoundary: w, padding: d }), Re = oe ? q ? ct : it : q ? vt : Qe;
      ee[tt] > z[tt] && (Re = Ji(Re));
      var Pe = Ji(Re), We = [];
      if (a && We.push(Ze[ie] <= 0), v && We.push(Ze[Re] <= 0, Ze[Pe] <= 0), We.every(function(He) {
        return He;
      })) {
        Q = K, te = false;
        break;
      }
      H.set(K, We);
    }
    if (te)
      for (var Je = T ? 3 : 1, Ye = u(function(rt) {
        var vr = A.find(function(Ir) {
          var gr = H.get(Ir);
          if (gr)
            return gr.slice(0, rt).every(function(sr) {
              return sr;
            });
        });
        if (vr)
          return Q = vr, "break";
      }, "_loop"), J = Je; J > 0; J--) {
        var ar = Ye(J);
        if (ar === "break")
          break;
      }
    r.placement !== Q && (r.modifiersData[n]._skip = true, r.placement = Q, r.reset = true);
  }
}
__name(Ey, "Ey");
u(Ey, "flip");
var Ff = { name: "flip", enabled: true, phase: "main", fn: Ey, requiresIfExists: ["offset"], data: { _skip: false } };
function Uf(t, r, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - r.height - e.y, right: t.right - r.width + e.x, bottom: t.bottom - r.height + e.y, left: t.left - r.width - e.x };
}
__name(Uf, "Uf");
u(Uf, "getSideOffsets");
function Wf(t) {
  return [Qe, ct, vt, it].some(function(r) {
    return t[r] >= 0;
  });
}
__name(Wf, "Wf");
u(Wf, "isAnySideFullyClipped");
function Sy(t) {
  var r = t.state, e = t.name, n = r.rects.reference, s = r.rects.popper, a = r.modifiersData.preventOverflow, p = Rr(r, { elementContext: "reference" }), v = Rr(r, { altBoundary: true }), m = Uf(p, n), d = Uf(v, s, a), h = Wf(m), y = Wf(d);
  r.modifiersData[e] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: h, hasPopperEscaped: y }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": y });
}
__name(Sy, "Sy");
u(Sy, "hide");
var Vf = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Sy };
function Ty(t, r, e) {
  var n = wt(t), s = [it, Qe].indexOf(n) >= 0 ? -1 : 1, a = typeof e == "function" ? e(Object.assign({}, r, { placement: t })) : e, p = a[0], v = a[1];
  return p = p || 0, v = (v || 0) * s, [it, ct].indexOf(n) >= 0 ? { x: v, y: p } : { x: p, y: v };
}
__name(Ty, "Ty");
u(Ty, "distanceAndSkiddingToXY");
function Cy(t) {
  var r = t.state, e = t.options, n = t.name, s = e.offset, a = s === void 0 ? [0, 0] : s, p = Vs.reduce(function(h, y) {
    return h[y] = Ty(y, r.rects, a), h;
  }, {}), v = p[r.placement], m = v.x, d = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m, r.modifiersData.popperOffsets.y += d), r.modifiersData[n] = p;
}
__name(Cy, "Cy");
u(Cy, "offset");
var Yf = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Cy };
function Oy(t) {
  var r = t.state, e = t.name;
  r.modifiersData[e] = ea({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(Oy, "Oy");
u(Oy, "popperOffsets");
var Xf = { name: "popperOffsets", enabled: true, phase: "read", fn: Oy, data: {} };
function Ku(t) {
  return t === "x" ? "y" : "x";
}
__name(Ku, "Ku");
u(Ku, "getAltAxis");
function My(t) {
  var r = t.state, e = t.options, n = t.name, s = e.mainAxis, a = s === void 0 ? true : s, p = e.altAxis, v = p === void 0 ? false : p, m = e.boundary, d = e.rootBoundary, h = e.altBoundary, y = e.padding, w = e.tether, x = w === void 0 ? true : w, T = e.tetherOffset, C = T === void 0 ? 0 : T, R = Rr(r, { boundary: m, rootBoundary: d, padding: y, altBoundary: h }), _ = wt(r.placement), L = Cr(r.placement), $ = !L, A = ai(_), ee = Ku(A), z = r.modifiersData.popperOffsets, H = r.rects.reference, te = r.rects.popper, Q = typeof C == "function" ? C(Object.assign({}, r.rects, { placement: r.placement })) : C, ue = typeof Q == "number" ? { mainAxis: Q, altAxis: Q } : Object.assign({ mainAxis: 0, altAxis: 0 }, Q), K = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, ie = { x: 0, y: 0 };
  if (z) {
    if (a) {
      var q, oe = A === "y" ? Qe : it, tt = A === "y" ? vt : ct, Ze = A === "y" ? "height" : "width", Re = z[A], Pe = Re + R[oe], We = Re - R[tt], Je = x ? -te[Ze] / 2 : 0, Ye = L === ln ? H[Ze] : te[Ze], J = L === ln ? -te[Ze] : -H[Ze], ar = r.elements.arrow, He = x && ar ? oi(ar) : { width: 0, height: 0 }, rt = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : Ko(), vr = rt[oe], Ir = rt[tt], gr = si(0, H[Ze], He[Ze]), sr = $ ? H[Ze] / 2 - Je - gr - vr - ue.mainAxis : Ye - gr - vr - ue.mainAxis, Lr = $ ? -H[Ze] / 2 + Je + gr + Ir + ue.mainAxis : J + gr + Ir + ue.mainAxis, Yr = r.elements.arrow && zr(r.elements.arrow), Nn = Yr ? A === "y" ? Yr.clientTop || 0 : Yr.clientLeft || 0 : 0, ze = (q = K == null ? void 0 : K[A]) != null ? q : 0, _n = Re + sr - ze - Nn, Ln = Re + Lr - ze, _t = si(x ? ii(Pe, _n) : Pe, Re, x ? Pr(We, Ln) : We);
      z[A] = _t, ie[A] = _t - Re;
    }
    if (v) {
      var Xr, wi = A === "x" ? Qe : it, hn = A === "x" ? vt : ct, Ar = z[ee], It = ee === "y" ? "height" : "width", Gr = Ar + R[wi], er = Ar - R[hn], Gn = [Qe, it].indexOf(_) !== -1, Zr = (Xr = K == null ? void 0 : K[ee]) != null ? Xr : 0, jn = Gn ? Gr : Ar - H[It] - te[It] - Zr + ue.altAxis, mn = Gn ? Ar + H[It] + te[It] - Zr - ue.altAxis : er, Hn = x && Gn ? Gf(jn, Ar, mn) : si(x ? jn : Gr, Ar, x ? mn : er);
      z[ee] = Hn, ie[ee] = Hn - Ar;
    }
    r.modifiersData[n] = ie;
  }
}
__name(My, "My");
u(My, "preventOverflow");
var Zf = { name: "preventOverflow", enabled: true, phase: "main", fn: My, requiresIfExists: ["offset"] };
function Ju(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(Ju, "Ju");
u(Ju, "getHTMLElementScroll");
function Qu(t) {
  return t === ot(t) || !gt(t) ? li(t) : Ju(t);
}
__name(Qu, "Qu");
u(Qu, "getNodeScroll");
function Iy(t) {
  var r = t.getBoundingClientRect(), e = un(r.width) / t.offsetWidth || 1, n = un(r.height) / t.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
__name(Iy, "Iy");
u(Iy, "isElementScaled");
function ec(t, r, e) {
  e === void 0 && (e = false);
  var n = gt(r), s = gt(r) && Iy(r), a = Ot(r), p = Tr(t, s), v = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (n || !n && !e) && ((yt(r) !== "body" || ci(a)) && (v = Qu(r)), gt(r) ? (m = Tr(r, true), m.x += r.clientLeft, m.y += r.clientTop) : a && (m.x = ui(a))), { x: p.left + v.scrollLeft - m.x, y: p.top + v.scrollTop - m.y, width: p.width, height: p.height };
}
__name(ec, "ec");
u(ec, "getCompositeRect");
function Ay(t) {
  var r = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(a) {
    r.set(a.name, a);
  });
  function s(a) {
    e.add(a.name);
    var p = [].concat(a.requires || [], a.requiresIfExists || []);
    p.forEach(function(v) {
      if (!e.has(v)) {
        var m = r.get(v);
        m && s(m);
      }
    }), n.push(a);
  }
  __name(s, "s");
  return u(s, "sort"), t.forEach(function(a) {
    e.has(a.name) || s(a);
  }), n;
}
__name(Ay, "Ay");
u(Ay, "order");
function tc(t) {
  var r = Ay(t);
  return _f.reduce(function(e, n) {
    return e.concat(r.filter(function(s) {
      return s.phase === n;
    }));
  }, []);
}
__name(tc, "tc");
u(tc, "orderModifiers");
function rc(t) {
  var r;
  return function() {
    return r || (r = new Promise(function(e) {
      Promise.resolve().then(function() {
        r = void 0, e(t());
      });
    })), r;
  };
}
__name(rc, "rc");
u(rc, "debounce");
function nc(t) {
  var r = t.reduce(function(e, n) {
    var s = e[n.name];
    return e[n.name] = s ? Object.assign({}, s, n, { options: Object.assign({}, s.options, n.options), data: Object.assign({}, s.data, n.data) }) : n, e;
  }, {});
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}
__name(nc, "nc");
u(nc, "mergeByName");
var Kf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Jf() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(Jf, "Jf");
u(Jf, "areValidElements");
function Qf(t) {
  t === void 0 && (t = {});
  var r = t, e = r.defaultModifiers, n = e === void 0 ? [] : e, s = r.defaultOptions, a = s === void 0 ? Kf : s;
  return u(function(v, m, d) {
    d === void 0 && (d = a);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Kf, a), modifiersData: {}, elements: { reference: v, popper: m }, attributes: {}, styles: {} }, y = [], w = false, x = { state: h, setOptions: u(function(_) {
      var L = typeof _ == "function" ? _(h.options) : _;
      C(), h.options = Object.assign({}, a, h.options, L), h.scrollParents = { reference: qr(v) ? kn(v) : v.contextElement ? kn(v.contextElement) : [], popper: kn(m) };
      var $ = tc(nc([].concat(n, h.options.modifiers)));
      if (h.orderedModifiers = $.filter(function(K) {
        return K.enabled;
      }), false) {
        var A;
        if (getBasePlacement(h.options.placement) === auto)
          var ee;
        var z, H, te, Q, ue;
      }
      return T(), x.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!w) {
        var _ = h.elements, L = _.reference, $ = _.popper;
        if (Jf(L, $)) {
          h.rects = { reference: ec(L, zr($), h.options.strategy === "fixed"), popper: oi($) }, h.reset = false, h.placement = h.options.placement, h.orderedModifiers.forEach(function(K) {
            return h.modifiersData[K.name] = Object.assign({}, K.data);
          });
          for (var A = 0, ee = 0; ee < h.orderedModifiers.length; ee++) {
            if (h.reset === true) {
              h.reset = false, ee = -1;
              continue;
            }
            var z = h.orderedModifiers[ee], H = z.fn, te = z.options, Q = te === void 0 ? {} : te, ue = z.name;
            typeof H == "function" && (h = H({ state: h, options: Q, name: ue, instance: x }) || h);
          }
        }
      }
    }, "forceUpdate"), update: rc(function() {
      return new Promise(function(R) {
        x.forceUpdate(), R(h);
      });
    }), destroy: u(function() {
      C(), w = true;
    }, "destroy") };
    if (!Jf(v, m))
      return x;
    x.setOptions(d).then(function(R) {
      !w && d.onFirstUpdate && d.onFirstUpdate(R);
    });
    function T() {
      h.orderedModifiers.forEach(function(R) {
        var _ = R.name, L = R.options, $ = L === void 0 ? {} : L, A = R.effect;
        if (typeof A == "function") {
          var ee = A({ state: h, name: _, instance: x, options: $ }), z = u(function() {
          }, "noopFn");
          y.push(ee || z);
        }
      });
    }
    __name(T, "T");
    u(T, "runModifierEffects");
    function C() {
      y.forEach(function(R) {
        return R();
      }), y = [];
    }
    __name(C, "C");
    return u(C, "cleanupModifierEffects"), x;
  }, "createPopper");
}
__name(Qf, "Qf");
u(Qf, "popperGenerator");
var Py = [$f, Xf, Bf, Xo, Yf, Ff, Zf, jf, Vf];
var ic = Qf({ defaultModifiers: Py });
var zy = "tippy-box";
var uh = "tippy-content";
var Ry = "tippy-backdrop";
var ch = "tippy-arrow";
var ph = "tippy-svg-arrow";
var pi = { passive: true, capture: true };
var dh = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function oc(t, r, e) {
  if (Array.isArray(t)) {
    var n = t[r];
    return n == null ? Array.isArray(e) ? e[r] : e : n;
  }
  return t;
}
__name(oc, "oc");
u(oc, "getValueAtIndexOrReturn");
function pc(t, r) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(r + "]") > -1;
}
__name(pc, "pc");
u(pc, "isType");
function fh(t, r) {
  return typeof t == "function" ? t.apply(void 0, r) : t;
}
__name(fh, "fh");
u(fh, "invokeWithArgsOrReturn");
function eh(t, r) {
  if (r === 0)
    return t;
  var e;
  return function(n) {
    clearTimeout(e), e = setTimeout(function() {
      t(n);
    }, r);
  };
}
__name(eh, "eh");
u(eh, "debounce");
function ky(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(ky, "ky");
u(ky, "splitBySpaces");
function eo(t) {
  return [].concat(t);
}
__name(eo, "eo");
u(eo, "normalizeToArray");
function th(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
__name(th, "th");
u(th, "pushIfUnique");
function Dy(t) {
  return t.filter(function(r, e) {
    return t.indexOf(r) === e;
  });
}
__name(Dy, "Dy");
u(Dy, "unique");
function Ny(t) {
  return t.split("-")[0];
}
__name(Ny, "Ny");
u(Ny, "getBasePlacement");
function Qs(t) {
  return [].slice.call(t);
}
__name(Qs, "Qs");
u(Qs, "arrayFrom");
function rh(t) {
  return Object.keys(t).reduce(function(r, e) {
    return t[e] !== void 0 && (r[e] = t[e]), r;
  }, {});
}
__name(rh, "rh");
u(rh, "removeUndefinedProps");
function ta() {
  return document.createElement("div");
}
__name(ta, "ta");
u(ta, "div");
function el(t) {
  return ["Element", "Fragment"].some(function(r) {
    return pc(t, r);
  });
}
__name(el, "el");
u(el, "isElement");
function _y(t) {
  return pc(t, "NodeList");
}
__name(_y, "_y");
u(_y, "isNodeList");
function Ly(t) {
  return pc(t, "MouseEvent");
}
__name(Ly, "Ly");
u(Ly, "isMouseEvent");
function Gy(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(Gy, "Gy");
u(Gy, "isReferenceElement");
function jy(t) {
  return el(t) ? [t] : _y(t) ? Qs(t) : Array.isArray(t) ? t : Qs(document.querySelectorAll(t));
}
__name(jy, "jy");
u(jy, "getArrayOfElements");
function ac(t, r) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = r + "ms");
  });
}
__name(ac, "ac");
u(ac, "setTransitionDuration");
function nh(t, r) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", r);
  });
}
__name(nh, "nh");
u(nh, "setVisibilityState");
function Hy(t) {
  var r, e = eo(t), n = e[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(Hy, "Hy");
u(Hy, "getOwnerDocument");
function By(t, r) {
  var e = r.clientX, n = r.clientY;
  return t.every(function(s) {
    var a = s.popperRect, p = s.popperState, v = s.props, m = v.interactiveBorder, d = Ny(p.placement), h = p.modifiersData.offset;
    if (!h)
      return true;
    var y = d === "bottom" ? h.top.y : 0, w = d === "top" ? h.bottom.y : 0, x = d === "right" ? h.left.x : 0, T = d === "left" ? h.right.x : 0, C = a.top - n + y > m, R = n - a.bottom - w > m, _ = a.left - e + x > m, L = e - a.right - T > m;
    return C || R || _ || L;
  });
}
__name(By, "By");
u(By, "isCursorOutsideInteractiveBorder");
function sc(t, r, e) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(s) {
    t[n](s, e);
  });
}
__name(sc, "sc");
u(sc, "updateTransitionEndListener");
function ih(t, r) {
  for (var e = r; e; ) {
    var n;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (n = e.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(ih, "ih");
u(ih, "actualContains");
var Fr = { isTouch: false };
var oh = 0;
function $y() {
  Fr.isTouch || (Fr.isTouch = true, window.performance && document.addEventListener("mousemove", hh));
}
__name($y, "$y");
u($y, "onDocumentTouchStart");
function hh() {
  var t = performance.now();
  t - oh < 20 && (Fr.isTouch = false, document.removeEventListener("mousemove", hh)), oh = t;
}
__name(hh, "hh");
u(hh, "onDocumentMouseMove");
function qy() {
  var t = document.activeElement;
  if (Gy(t)) {
    var r = t._tippy;
    t.blur && !r.state.isVisible && t.blur();
  }
}
__name(qy, "qy");
u(qy, "onWindowBlur");
function Fy() {
  document.addEventListener("touchstart", $y, pi), window.addEventListener("blur", qy);
}
__name(Fy, "Fy");
u(Fy, "bindGlobalEventListeners");
var Uy = typeof window != "undefined" && typeof document != "undefined";
var Wy = Uy ? !!window.msCrypto : false;
var Vy = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Yy = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var kr = Object.assign({ appendTo: dh, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Vy, Yy);
var Xy = Object.keys(kr);
var Zy = u(function(r) {
  var e = Object.keys(r);
  e.forEach(function(n) {
    kr[n] = r[n];
  });
}, "setDefaultProps");
function mh(t) {
  var r = t.plugins || [], e = r.reduce(function(n, s) {
    var a = s.name, p = s.defaultValue;
    if (a) {
      var v;
      n[a] = t[a] !== void 0 ? t[a] : (v = kr[a]) != null ? v : p;
    }
    return n;
  }, {});
  return Object.assign({}, t, e);
}
__name(mh, "mh");
u(mh, "getExtendedPassedProps");
function Ky(t, r) {
  var e = r ? Object.keys(mh(Object.assign({}, kr, { plugins: r }))) : Xy, n = e.reduce(function(s, a) {
    var p = (t.getAttribute("data-tippy-" + a) || "").trim();
    if (!p)
      return s;
    if (a === "content")
      s[a] = p;
    else
      try {
        s[a] = JSON.parse(p);
      } catch (v) {
        s[a] = p;
      }
    return s;
  }, {});
  return n;
}
__name(Ky, "Ky");
u(Ky, "getDataAttributeProps");
function ah(t, r) {
  var e = Object.assign({}, r, { content: fh(r.content, [t]) }, r.ignoreAttributes ? {} : Ky(t, r.plugins));
  return e.aria = Object.assign({}, kr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? r.interactive : e.aria.expanded, content: e.aria.content === "auto" ? r.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(ah, "ah");
u(ah, "evaluateProps");
var Jy = u(function() {
  return "innerHTML";
}, "innerHTML");
function uc(t, r) {
  t[Jy()] = r;
}
__name(uc, "uc");
u(uc, "dangerouslySetInnerHTML");
function sh(t) {
  var r = ta();
  return t === true ? r.className = ch : (r.className = ph, el(t) ? r.appendChild(t) : uc(r, t)), r;
}
__name(sh, "sh");
u(sh, "createArrowElement");
function lh(t, r) {
  el(r.content) ? (uc(t, ""), t.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? uc(t, r.content) : t.textContent = r.content);
}
__name(lh, "lh");
u(lh, "setContent");
function cc(t) {
  var r = t.firstElementChild, e = Qs(r.children);
  return { box: r, content: e.find(function(n) {
    return n.classList.contains(uh);
  }), arrow: e.find(function(n) {
    return n.classList.contains(ch) || n.classList.contains(ph);
  }), backdrop: e.find(function(n) {
    return n.classList.contains(Ry);
  }) };
}
__name(cc, "cc");
u(cc, "getChildren");
function vh(t) {
  var r = ta(), e = ta();
  e.className = zy, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var n = ta();
  n.className = uh, n.setAttribute("data-state", "hidden"), lh(n, t.props), r.appendChild(e), e.appendChild(n), s(t.props, t.props);
  function s(a, p) {
    var v = cc(r), m = v.box, d = v.content, h = v.arrow;
    p.theme ? m.setAttribute("data-theme", p.theme) : m.removeAttribute("data-theme"), typeof p.animation == "string" ? m.setAttribute("data-animation", p.animation) : m.removeAttribute("data-animation"), p.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? m.setAttribute("role", p.role) : m.removeAttribute("role"), (a.content !== p.content || a.allowHTML !== p.allowHTML) && lh(d, t.props), p.arrow ? h ? a.arrow !== p.arrow && (m.removeChild(h), m.appendChild(sh(p.arrow))) : m.appendChild(sh(p.arrow)) : h && m.removeChild(h);
  }
  __name(s, "s");
  return u(s, "onUpdate"), { popper: r, onUpdate: s };
}
__name(vh, "vh");
u(vh, "render");
vh.$$tippy = true;
var Qy = 1;
var Js = [];
var lc = [];
function e0(t, r) {
  var e = ah(t, Object.assign({}, kr, mh(rh(r)))), n, s, a, p = false, v = false, m = false, d = false, h, y, w, x = [], T = eh(_n, e.interactiveDebounce), C, R = Qy++, _ = null, L = Dy(e.plugins), $ = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: R, reference: t, popper: ta(), popperInstance: _, props: e, state: $, plugins: L, clearDelayTimeouts: jn, setProps: mn, setContent: Hn, show: oo, hide: ao, hideWithInteractivity: ga, enable: Gn, disable: Zr, unmount: ba, destroy: gl };
  if (!e.render)
    return A;
  var ee = e.render(A), z = ee.popper, H = ee.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + A.id, A.popper = z, t._tippy = A, z._tippy = A;
  var te = L.map(function(G) {
    return G.fn(A);
  }), Q = t.hasAttribute("aria-expanded");
  return Yr(), Je(), Re(), Pe("onCreate", [A]), e.showOnCreate && Gr(), z.addEventListener("mouseenter", function() {
    A.props.interactive && A.state.isVisible && A.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    A.props.interactive && A.props.trigger.indexOf("mouseenter") >= 0 && oe().addEventListener("mousemove", T);
  }), A;
  function ue() {
    var G = A.props.touch;
    return Array.isArray(G) ? G : [G, 0];
  }
  __name(ue, "ue");
  u(ue, "getNormalizedTouchSettings");
  function K() {
    return ue()[0] === "hold";
  }
  __name(K, "K");
  u(K, "getIsCustomTouchBehavior");
  function ie() {
    var G;
    return !!((G = A.props.render) != null && G.$$tippy);
  }
  __name(ie, "ie");
  u(ie, "getIsDefaultRenderFn");
  function q() {
    return C || t;
  }
  __name(q, "q");
  u(q, "getCurrentTarget");
  function oe() {
    var G = q().parentNode;
    return G ? Hy(G) : document;
  }
  __name(oe, "oe");
  u(oe, "getDocument");
  function tt() {
    return cc(z);
  }
  __name(tt, "tt");
  u(tt, "getDefaultTemplateChildren");
  function Ze(G) {
    return A.state.isMounted && !A.state.isVisible || Fr.isTouch || h && h.type === "focus" ? 0 : oc(A.props.delay, G ? 0 : 1, kr.delay);
  }
  __name(Ze, "Ze");
  u(Ze, "getDelay");
  function Re(G) {
    G === void 0 && (G = false), z.style.pointerEvents = A.props.interactive && !G ? "" : "none", z.style.zIndex = "" + A.props.zIndex;
  }
  __name(Re, "Re");
  u(Re, "handleStyles");
  function Pe(G, re, le) {
    if (le === void 0 && (le = true), te.forEach(function(Ee) {
      Ee[G] && Ee[G].apply(Ee, re);
    }), le) {
      var ke;
      (ke = A.props)[G].apply(ke, re);
    }
  }
  __name(Pe, "Pe");
  u(Pe, "invokeHook");
  function We() {
    var G = A.props.aria;
    if (G.content) {
      var re = "aria-" + G.content, le = z.id, ke = eo(A.props.triggerTarget || t);
      ke.forEach(function(Ee) {
        var Et = Ee.getAttribute(re);
        if (A.state.isVisible)
          Ee.setAttribute(re, Et ? Et + " " + le : le);
        else {
          var Lt = Et && Et.replace(le, "").trim();
          Lt ? Ee.setAttribute(re, Lt) : Ee.removeAttribute(re);
        }
      });
    }
  }
  __name(We, "We");
  u(We, "handleAriaContentAttribute");
  function Je() {
    if (!(Q || !A.props.aria.expanded)) {
      var G = eo(A.props.triggerTarget || t);
      G.forEach(function(re) {
        A.props.interactive ? re.setAttribute("aria-expanded", A.state.isVisible && re === q() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Je, "Je");
  u(Je, "handleAriaExpandedAttribute");
  function Ye() {
    oe().removeEventListener("mousemove", T), Js = Js.filter(function(G) {
      return G !== T;
    });
  }
  __name(Ye, "Ye");
  u(Ye, "cleanupInteractiveMouseListeners");
  function J(G) {
    if (!(Fr.isTouch && (m || G.type === "mousedown"))) {
      var re = G.composedPath && G.composedPath()[0] || G.target;
      if (!(A.props.interactive && ih(z, re))) {
        if (eo(A.props.triggerTarget || t).some(function(le) {
          return ih(le, re);
        })) {
          if (Fr.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Pe("onClickOutside", [A, G]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), v = true, setTimeout(function() {
          v = false;
        }), A.state.isMounted || vr());
      }
    }
  }
  __name(J, "J");
  u(J, "onDocumentPress");
  function ar() {
    m = true;
  }
  __name(ar, "ar");
  u(ar, "onTouchMove");
  function He() {
    m = false;
  }
  __name(He, "He");
  u(He, "onTouchStart");
  function rt() {
    var G = oe();
    G.addEventListener("mousedown", J, true), G.addEventListener("touchend", J, pi), G.addEventListener("touchstart", He, pi), G.addEventListener("touchmove", ar, pi);
  }
  __name(rt, "rt");
  u(rt, "addDocumentPress");
  function vr() {
    var G = oe();
    G.removeEventListener("mousedown", J, true), G.removeEventListener("touchend", J, pi), G.removeEventListener("touchstart", He, pi), G.removeEventListener("touchmove", ar, pi);
  }
  __name(vr, "vr");
  u(vr, "removeDocumentPress");
  function Ir(G, re) {
    sr(G, function() {
      !A.state.isVisible && z.parentNode && z.parentNode.contains(z) && re();
    });
  }
  __name(Ir, "Ir");
  u(Ir, "onTransitionedOut");
  function gr(G, re) {
    sr(G, re);
  }
  __name(gr, "gr");
  u(gr, "onTransitionedIn");
  function sr(G, re) {
    var le = tt().box;
    function ke(Ee) {
      Ee.target === le && (sc(le, "remove", ke), re());
    }
    __name(ke, "ke");
    if (u(ke, "listener"), G === 0)
      return re();
    sc(le, "remove", y), sc(le, "add", ke), y = ke;
  }
  __name(sr, "sr");
  u(sr, "onTransitionEnd");
  function Lr(G, re, le) {
    le === void 0 && (le = false);
    var ke = eo(A.props.triggerTarget || t);
    ke.forEach(function(Ee) {
      Ee.addEventListener(G, re, le), x.push({ node: Ee, eventType: G, handler: re, options: le });
    });
  }
  __name(Lr, "Lr");
  u(Lr, "on");
  function Yr() {
    K() && (Lr("touchstart", ze, { passive: true }), Lr("touchend", Ln, { passive: true })), ky(A.props.trigger).forEach(function(G) {
      if (G !== "manual")
        switch (Lr(G, ze), G) {
          case "mouseenter":
            Lr("mouseleave", Ln);
            break;
          case "focus":
            Lr(Wy ? "focusout" : "blur", _t);
            break;
          case "focusin":
            Lr("focusout", _t);
            break;
        }
    });
  }
  __name(Yr, "Yr");
  u(Yr, "addListeners");
  function Nn() {
    x.forEach(function(G) {
      var re = G.node, le = G.eventType, ke = G.handler, Ee = G.options;
      re.removeEventListener(le, ke, Ee);
    }), x = [];
  }
  __name(Nn, "Nn");
  u(Nn, "removeListeners");
  function ze(G) {
    var re, le = false;
    if (!(!A.state.isEnabled || Xr(G) || v)) {
      var ke = ((re = h) == null ? void 0 : re.type) === "focus";
      h = G, C = G.currentTarget, Je(), !A.state.isVisible && Ly(G) && Js.forEach(function(Ee) {
        return Ee(G);
      }), G.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || p) && A.props.hideOnClick !== false && A.state.isVisible ? le = true : Gr(G), G.type === "click" && (p = !le), le && !ke && er(G);
    }
  }
  __name(ze, "ze");
  u(ze, "onTrigger");
  function _n(G) {
    var re = G.target, le = q().contains(re) || z.contains(re);
    if (!(G.type === "mousemove" && le)) {
      var ke = It().concat(z).map(function(Ee) {
        var Et, Lt = Ee._tippy, At = (Et = Lt.popperInstance) == null ? void 0 : Et.state;
        return At ? { popperRect: Ee.getBoundingClientRect(), popperState: At, props: e } : null;
      }).filter(Boolean);
      By(ke, G) && (Ye(), er(G));
    }
  }
  __name(_n, "_n");
  u(_n, "onMouseMove");
  function Ln(G) {
    var re = Xr(G) || A.props.trigger.indexOf("click") >= 0 && p;
    if (!re) {
      if (A.props.interactive) {
        A.hideWithInteractivity(G);
        return;
      }
      er(G);
    }
  }
  __name(Ln, "Ln");
  u(Ln, "onMouseLeave");
  function _t(G) {
    A.props.trigger.indexOf("focusin") < 0 && G.target !== q() || A.props.interactive && G.relatedTarget && z.contains(G.relatedTarget) || er(G);
  }
  __name(_t, "_t");
  u(_t, "onBlurOrFocusOut");
  function Xr(G) {
    return Fr.isTouch ? K() !== G.type.indexOf("touch") >= 0 : false;
  }
  __name(Xr, "Xr");
  u(Xr, "isEventListenerStopped");
  function wi() {
    hn();
    var G = A.props, re = G.popperOptions, le = G.placement, ke = G.offset, Ee = G.getReferenceClientRect, Et = G.moveTransition, Lt = ie() ? cc(z).arrow : null, At = Ee ? { getBoundingClientRect: Ee, contextElement: Ee.contextElement || q() } : t, ya = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Pt) {
      var zt = Pt.state;
      if (ie()) {
        var Kr = tt(), xi = Kr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ei) {
          Ei === "placement" ? xi.setAttribute("data-placement", zt.placement) : zt.attributes.popper["data-popper-" + Ei] ? xi.setAttribute("data-" + Ei, "") : xi.removeAttribute("data-" + Ei);
        }), zt.attributes.popper = {};
      }
    }, "fn") }, br = [{ name: "offset", options: { offset: ke } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !Et } }, ya];
    ie() && Lt && br.push({ name: "arrow", options: { element: Lt, padding: 3 } }), br.push.apply(br, (re == null ? void 0 : re.modifiers) || []), A.popperInstance = ic(At, z, Object.assign({}, re, { placement: le, onFirstUpdate: w, modifiers: br }));
  }
  __name(wi, "wi");
  u(wi, "createPopperInstance");
  function hn() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(hn, "hn");
  u(hn, "destroyPopperInstance");
  function Ar() {
    var G = A.props.appendTo, re, le = q();
    A.props.interactive && G === dh || G === "parent" ? re = le.parentNode : re = fh(G, [le]), re.contains(z) || re.appendChild(z), A.state.isMounted = true, wi();
  }
  __name(Ar, "Ar");
  u(Ar, "mount");
  function It() {
    return Qs(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(It, "It");
  u(It, "getNestedPopperTree");
  function Gr(G) {
    A.clearDelayTimeouts(), G && Pe("onTrigger", [A, G]), rt();
    var re = Ze(true), le = ue(), ke = le[0], Ee = le[1];
    Fr.isTouch && ke === "hold" && Ee && (re = Ee), re ? n = setTimeout(function() {
      A.show();
    }, re) : A.show();
  }
  __name(Gr, "Gr");
  u(Gr, "scheduleShow");
  function er(G) {
    if (A.clearDelayTimeouts(), Pe("onUntrigger", [A, G]), !A.state.isVisible) {
      vr();
      return;
    }
    if (!(A.props.trigger.indexOf("mouseenter") >= 0 && A.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(G.type) >= 0 && p)) {
      var re = Ze(false);
      re ? s = setTimeout(function() {
        A.state.isVisible && A.hide();
      }, re) : a = requestAnimationFrame(function() {
        A.hide();
      });
    }
  }
  __name(er, "er");
  u(er, "scheduleHide");
  function Gn() {
    A.state.isEnabled = true;
  }
  __name(Gn, "Gn");
  u(Gn, "enable");
  function Zr() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(Zr, "Zr");
  u(Zr, "disable");
  function jn() {
    clearTimeout(n), clearTimeout(s), cancelAnimationFrame(a);
  }
  __name(jn, "jn");
  u(jn, "clearDelayTimeouts");
  function mn(G) {
    if (!A.state.isDestroyed) {
      Pe("onBeforeUpdate", [A, G]), Nn();
      var re = A.props, le = ah(t, Object.assign({}, re, rh(G), { ignoreAttributes: true }));
      A.props = le, Yr(), re.interactiveDebounce !== le.interactiveDebounce && (Ye(), T = eh(_n, le.interactiveDebounce)), re.triggerTarget && !le.triggerTarget ? eo(re.triggerTarget).forEach(function(ke) {
        ke.removeAttribute("aria-expanded");
      }) : le.triggerTarget && t.removeAttribute("aria-expanded"), Je(), Re(), H && H(re, le), A.popperInstance && (wi(), It().forEach(function(ke) {
        requestAnimationFrame(ke._tippy.popperInstance.forceUpdate);
      })), Pe("onAfterUpdate", [A, G]);
    }
  }
  __name(mn, "mn");
  u(mn, "setProps");
  function Hn(G) {
    A.setProps({ content: G });
  }
  __name(Hn, "Hn");
  u(Hn, "setContent");
  function oo() {
    var G = A.state.isVisible, re = A.state.isDestroyed, le = !A.state.isEnabled, ke = Fr.isTouch && !A.props.touch, Ee = oc(A.props.duration, 0, kr.duration);
    if (!(G || re || le || ke) && !q().hasAttribute("disabled") && (Pe("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, ie() && (z.style.visibility = "visible"), Re(), rt(), A.state.isMounted || (z.style.transition = "none"), ie()) {
        var Et = tt(), Lt = Et.box, At = Et.content;
        ac([Lt, At], 0);
      }
      w = u(function() {
        var br;
        if (!(!A.state.isVisible || d)) {
          if (d = true, z.offsetHeight, z.style.transition = A.props.moveTransition, ie() && A.props.animation) {
            var so = tt(), Pt = so.box, zt = so.content;
            ac([Pt, zt], Ee), nh([Pt, zt], "visible");
          }
          We(), Je(), th(lc, A), (br = A.popperInstance) == null || br.forceUpdate(), Pe("onMount", [A]), A.props.animation && ie() && gr(Ee, function() {
            A.state.isShown = true, Pe("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), Ar();
    }
  }
  __name(oo, "oo");
  u(oo, "show");
  function ao() {
    var G = !A.state.isVisible, re = A.state.isDestroyed, le = !A.state.isEnabled, ke = oc(A.props.duration, 1, kr.duration);
    if (!(G || re || le) && (Pe("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, d = false, p = false, ie() && (z.style.visibility = "hidden"), Ye(), vr(), Re(true), ie()) {
        var Ee = tt(), Et = Ee.box, Lt = Ee.content;
        A.props.animation && (ac([Et, Lt], ke), nh([Et, Lt], "hidden"));
      }
      We(), Je(), A.props.animation ? ie() && Ir(ke, A.unmount) : A.unmount();
    }
  }
  __name(ao, "ao");
  u(ao, "hide");
  function ga(G) {
    oe().addEventListener("mousemove", T), th(Js, T), T(G);
  }
  __name(ga, "ga");
  u(ga, "hideWithInteractivity");
  function ba() {
    A.state.isVisible && A.hide(), A.state.isMounted && (hn(), It().forEach(function(G) {
      G._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), lc = lc.filter(function(G) {
      return G !== A;
    }), A.state.isMounted = false, Pe("onHidden", [A]));
  }
  __name(ba, "ba");
  u(ba, "unmount");
  function gl() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), Nn(), delete t._tippy, A.state.isDestroyed = true, Pe("onDestroy", [A]));
  }
  __name(gl, "gl");
  u(gl, "destroy");
}
__name(e0, "e0");
u(e0, "createTippy");
function ra(t, r) {
  r === void 0 && (r = {});
  var e = kr.plugins.concat(r.plugins || []);
  Fy();
  var n = Object.assign({}, r, { plugins: e }), s = jy(t);
  if (false)
    var a, p;
  var v = s.reduce(function(m, d) {
    var h = d && e0(d, n);
    return h && m.push(h), m;
  }, []);
  return el(t) ? v[0] : v;
}
__name(ra, "ra");
u(ra, "tippy");
ra.defaultProps = kr;
ra.setDefaultProps = Zy;
ra.currentInput = Fr;
var _1 = Object.assign({}, Xo, { effect: u(function(r) {
  var e = r.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
}, "effect") });
ra.setDefaultProps({ render: vh });
var Rt = ra;
var gh = jt(rn(), 1);
var dc = u((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
function ve(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = mt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let a = this.helpContent;
        a !== null && (this.popup = Rt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(p) {
          p.setContent(a);
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
      this.helpableService = ut(this.helpableMachine).onTransition((a) => {
        this.debugHelpable && console.log(`helpable: ${(0, gh.format)(a.value)}`);
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
      let p = document.getElementById(a);
      return p === null ? null : p.content.cloneNode(true);
    }
  };
  u(e, "HelpableMixinClass"), M([D], e.prototype, "help", 2), M([D], e.prototype, "helpId", 2), M([D], e.prototype, "debugHelpable", 2);
  let r = e;
  return r;
}
__name(ve, "ve");
u(ve, "HelpableMixin");
function pe(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  };
  u(e, "HoverableMixinClass"), M([D], e.prototype, "hoverable", 2);
  let r = e;
  return r;
}
__name(pe, "pe");
u(pe, "HoverableMixin");
var tl = /* @__PURE__ */ new Map();
function rl(t) {
  if (tl.has(t))
    return tl.get(t);
  let r = t.length, e = 0, n = 0, s = 0, a = [];
  for (let p = 0; p < r; p += 1) {
    let v = t[p], m = t[p + 1], d = t[p - 1];
    v === "{" && m === "{" && d !== "\\" ? (s += 1, s === 1 && (n = p), p += 1) : v === "}" && m === "}" && d !== "\\" && s && (s -= 1, s === 0 && (n > e && (a.push(Object.freeze({ type: "string", start: e, end: n, value: t.slice(e, n) })), e = n), a.push(Object.freeze({ type: "part", start: n, end: p + 2, value: t.slice(e + 2, p).trim() })), p += 1, e = p + 1));
  }
  return e < r && a.push(Object.freeze({ type: "string", start: e, end: r, value: t.slice(e, r) })), tl.set(t, Object.freeze(a)), tl.get(t);
}
__name(rl, "rl");
u(rl, "parse");
var di = /* @__PURE__ */ new WeakMap();
var bh = /* @__PURE__ */ new WeakMap();
var fc = class fc2 {
  static {
    __name(this, "fc");
  }
  constructor(r, e) {
    this.expression = e, di.set(this, r), r.updateParent("");
  }
  get attributeName() {
    return di.get(this).attr.name;
  }
  get attributeNamespace() {
    return di.get(this).attr.namespaceURI;
  }
  get value() {
    return bh.get(this);
  }
  set value(r) {
    bh.set(this, r || ""), di.get(this).updateParent(r);
  }
  get element() {
    return di.get(this).element;
  }
  get booleanValue() {
    return di.get(this).booleanValue;
  }
  set booleanValue(r) {
    di.get(this).booleanValue = r;
  }
};
u(fc, "AttributeTemplatePart");
var pn = fc;
var hc = class hc2 {
  static {
    __name(this, "hc");
  }
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
};
u(hc, "AttributeValueSetter");
var na = hc;
var Dn = /* @__PURE__ */ new WeakMap();
var mc = class mc2 {
  static {
    __name(this, "mc");
  }
  constructor(r, e) {
    this.expression = e, Dn.set(this, [r]), r.textContent = "";
  }
  get value() {
    return Dn.get(this).map((r) => r.textContent).join("");
  }
  set value(r) {
    this.replace(r);
  }
  get previousSibling() {
    return Dn.get(this)[0].previousSibling;
  }
  get nextSibling() {
    return Dn.get(this)[Dn.get(this).length - 1].nextSibling;
  }
  replace(...r) {
    let e = r.map((n) => typeof n == "string" ? new Text(n) : n);
    e.length || e.push(new Text("")), Dn.get(this)[0].before(...e);
    for (let n of Dn.get(this))
      n.remove();
    Dn.set(this, e);
  }
};
u(mc, "NodeTemplatePart");
var Bt = mc;
function ia(t) {
  return { processCallback(r, e, n) {
    var s;
    if (!(typeof n != "object" || !n)) {
      for (let a of e)
        if (a.expression in n) {
          let p = (s = n[a.expression]) !== null && s !== void 0 ? s : "";
          t(a, p);
        }
    }
  } };
}
__name(ia, "ia");
u(ia, "createProcessor");
function oa(t, r) {
  t.value = String(r);
}
__name(oa, "oa");
u(oa, "processPropertyIdentity");
function nl(t, r) {
  return typeof r == "boolean" && t instanceof pn && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = r, true) : false;
}
__name(nl, "nl");
u(nl, "processBooleanAttribute");
var vc = ia(oa);
var t0 = ia((t, r) => {
  nl(t, r) || oa(t, r);
});
function* r0(t) {
  let r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = r.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let n = 0; n < e.attributes.length; n += 1) {
        let s = e.attributes.item(n);
        if (s && s.value.includes("{{")) {
          let a = new na(e, s);
          for (let p of rl(s.value))
            if (p.type === "string")
              a.append(p.value);
            else {
              let v = new pn(a, p.value);
              a.append(v), yield v;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{")) {
      let n = rl(e.textContent);
      for (let s = 0; s < n.length; s += 1) {
        let a = n[s];
        a.end < e.textContent.length && e.splitText(a.end), a.type === "part" && (yield new Bt(e, a.value));
        break;
      }
    }
}
__name(r0, "r0");
u(r0, "collectParts");
var il = /* @__PURE__ */ new WeakMap();
var ol = /* @__PURE__ */ new WeakMap();
var aa = class aa2 extends DocumentFragment {
  static {
    __name(this, "aa");
  }
  constructor(r, e, n = vc) {
    var s, a;
    super(), Object.getPrototypeOf(this) !== aa2.prototype && Object.setPrototypeOf(this, aa2.prototype), this.appendChild(r.content.cloneNode(true)), ol.set(this, Array.from(r0(this))), il.set(this, n), (a = (s = il.get(this)).createCallback) === null || a === void 0 || a.call(s, this, ol.get(this), e), il.get(this).processCallback(this, ol.get(this), e);
  }
  update(r) {
    il.get(this).processCallback(this, ol.get(this), r);
  }
};
u(aa, "TemplateInstance");
var sa = aa;
var gc = /* @__PURE__ */ new WeakMap();
var yh = /* @__PURE__ */ new WeakMap();
var wh = /* @__PURE__ */ new WeakMap();
var la = class la2 {
  static {
    __name(this, "la");
  }
  constructor(r, e, n) {
    this.strings = r, this.values = e, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    la2.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, e;
    if (gc.has(this.strings))
      return gc.get(this.strings);
    {
      let n = document.createElement("template"), s = this.strings.length - 1, a = this.strings.reduce((v, m, d) => v + m + (d < s ? `{{ ${d} }}` : ""), ""), p = (e = (r = la2.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(a)) !== null && e !== void 0 ? e : a;
      return n.innerHTML = p, gc.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let e = this.template;
    if (yh.get(r) !== e) {
      yh.set(r, e);
      let n = new sa(e, this.values, this.processor);
      wh.set(r, n), r instanceof Bt ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    wh.get(r).update(this.values);
  }
};
u(la, "TemplateResult");
var Or = la;
Or.cspTrustedTypesPolicy = null;
function Y(t, r) {
  t.renderInto(r);
}
__name(Y, "Y");
u(Y, "render");
var xh = /* @__PURE__ */ new WeakSet();
function Eh(t) {
  return xh.has(t);
}
__name(Eh, "Eh");
u(Eh, "isDirective");
function Sh(t, r) {
  return Eh(r) ? (r(t), true) : false;
}
__name(Sh, "Sh");
u(Sh, "processDirective");
function ua(t) {
  return (...r) => {
    let e = t(...r);
    return xh.add(e), e;
  };
}
__name(ua, "ua");
u(ua, "directive");
var ca = /* @__PURE__ */ new WeakMap();
var al = class al2 {
  static {
    __name(this, "al");
  }
  constructor(r, e) {
    this.element = r, this.type = e, this.element.addEventListener(this.type, this), ca.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), ca.get(this.element).delete(this.type));
  }
  static for(r) {
    ca.has(r.element) || ca.set(r.element, /* @__PURE__ */ new Map());
    let e = r.attributeName.slice(2), n = ca.get(r.element);
    return n.has(e) ? n.get(e) : new al2(r.element, e);
  }
};
u(al, "EventHandler");
var bc = al;
function Th(t, r) {
  return t instanceof pn && t.attributeName.startsWith("on") ? (bc.for(t).set(r), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(Th, "Th");
u(Th, "processEvent");
function n0(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(n0, "n0");
u(n0, "isIterable");
function Ch(t, r) {
  if (!n0(r))
    return false;
  if (t instanceof Bt) {
    let e = [];
    for (let n of r)
      if (n instanceof Or) {
        let s = document.createDocumentFragment();
        n.renderInto(s), e.push(...s.childNodes);
      } else
        n instanceof DocumentFragment ? e.push(...n.childNodes) : e.push(String(n));
    return e.length && t.replace(...e), true;
  } else
    return t.value = Array.from(r).join(" "), true;
}
__name(Ch, "Ch");
u(Ch, "processIterable");
function Oh(t, r) {
  return r instanceof DocumentFragment && t instanceof Bt ? (r.childNodes.length && t.replace(...r.childNodes), true) : false;
}
__name(Oh, "Oh");
u(Oh, "processDocumentFragment");
function Mh(t, r) {
  return r instanceof Or && t instanceof Bt ? (r.renderInto(t), true) : false;
}
__name(Mh, "Mh");
u(Mh, "processSubTemplate");
function sl(t, r) {
  Sh(t, r) || nl(t, r) || Th(t, r) || Mh(t, r) || Oh(t, r) || Ch(t, r) || oa(t, r);
}
__name(sl, "sl");
u(sl, "processPart");
var yc = ia(sl);
function U(t, ...r) {
  return new Or(t, r, yc);
}
__name(U, "U");
u(U, "html");
var wc = /* @__PURE__ */ new WeakMap();
var i0 = ua((...t) => (r) => {
  wc.has(r) || wc.set(r, { i: t.length });
  let e = wc.get(r);
  for (let n = 0; n < t.length; n += 1)
    t[n] instanceof Promise ? Promise.resolve(t[n]).then((s) => {
      n < e.i && (e.i = n, sl(r, s));
    }) : n <= e.i && (e.i = n, sl(r, t[n]));
});
var o0 = ua((t) => (r) => {
  var e, n;
  if (!(r instanceof Bt))
    return;
  let s = document.createElement("template"), a = (n = (e = Or.cspTrustedTypesPolicy) === null || e === void 0 ? void 0 : e.createHTML(t)) !== null && n !== void 0 ? n : t;
  s.innerHTML = a;
  let p = document.importNode(s.content, true);
  r.replace(...p.childNodes);
});
function ye(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    iconHtml(s) {
      return U`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(s)}</div>`;
    }
    iconSvg(s) {
      return U([s]);
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
  };
  u(e, "IconableMixinClass");
  let r = e;
  return r;
}
__name(ye, "ye");
u(ye, "IconableMixin");
var dn = u((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
function Ue(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.if = "";
    }
  };
  u(e, "IfableMixinClass"), M([D], e.prototype, "if", 2);
  let r = e;
  return r;
}
__name(Ue, "Ue");
u(Ue, "IfableMixin");
var ll = u((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
function ge(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = Rt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var a, p, v, m;
        (a = this.ifTooltip) == null || a.hide(), (p = this.angleTooltip) == null || p.hide(), (v = this.flagTooltip) == null || v.hide(), (m = this.deleteTooltip) == null || m.hide();
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
      fe("menuable:show-menu", {}, this);
    }
    get menuContent() {
      let a = document.getElementById("operation-menu");
      if (a === null || a.content === void 0)
        return null;
      let p = a.content.cloneNode(true), v = document.createDocumentFragment();
      return Y(U`${p}`, v), v;
    }
    initMenuItems(a) {
      if (dn(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-if]");
        B.notNull(v), v.disabled = false, this.ifTooltip = v._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Rt(v, { animation: false, content: "Set `if' Conditional" }), v.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Kn(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-angle]");
        B.notNull(v), v.disabled = false, this.angleTooltip = v._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Rt(v, { animation: false, content: "Change Angle" }), v.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (ri(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-flag]");
        B.notNull(v), v.disabled = false, this.flagTooltip = v._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Rt(v, { animation: false, content: "Set Condifitonal Flag" }), v.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let p = a.popper.querySelector("[data-operation-menu-delete]");
      B.notNull(p), this.deleteTooltip = p._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Rt(p, { animation: false, content: "Delete" })), p.addEventListener("mousedown", this.destroyMenu.bind(this)), p.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
    }
    showIfInspector() {
      this.hideMenu(), fe("menuable:menu-if", {}, this);
    }
    showAngleInspector() {
      this.hideMenu(), fe("menuable:menu-angle", {}, this);
    }
    showFlagInspector() {
      this.hideMenu(), fe("menuable:menu-flag", {}, this);
    }
    dispatchOperationDeleteEvent() {
      fe("menuable:menu-delete", {}, this);
    }
  };
  u(e, "MenuableMixinClass");
  let r = e;
  return r;
}
__name(ge, "ge");
u(ge, "MenuableMixin");
var Ih = jt(rn(), 1);
var ul = jt(Vo(), 1);
var pr = u((t) => t != null && typeof t.resizeable == "boolean", "isResizeable");
function cl(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = mt({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        fe("resizeable:init", {}, this);
      }, setInteract: (a, p) => {
        B.need(p.type === "SET_INTERACT", "event type must be SET_INTERACT"), B.notNull(this.resizeHandle);
        let v = (0, ul.default)(this.resizeHandle);
        v.styleCursor(false), v.on("down", this.grabResizeHandle.bind(this)), v.on("up", this.releaseResizeHandle.bind(this)), v.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (a, p) => {
        B.need(p.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, fe("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (a, p) => {
        B.need(p.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, fe("resizeable:release-resize-handle", {}, this);
      }, startResizing: (a, p) => {
        B.need(p.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (a, p) => {
        B.need(p.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), fe("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), fe("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = ut(this.resizeableMachine).onTransition((a) => {
        this.debugResizeable && console.log(`resizeable: ${(0, Ih.format)(a.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(a) {
      a ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(a) {
      (0, ul.default)(this.resizeHandle).draggable({ modifiers: [ul.default.modifiers.snap({ targets: a, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(a) {
      let p = a.modifiers[0];
      if (!p.inRange)
        return;
      let v = p.target.source;
      fe("resizeable:resize-handle-in-snap-range", { snapTargetInfo: v }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
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
      let p = this.resizeHandleX + a.dx, v = this.resizeHandleY + a.dy;
      this.moveResizeHandleTo(p, v);
    }
    moveResizeHandleTo(a, p) {
      this.resizeHandleX = a, this.resizeHandleY = p, this.resizeHandle.style.transform = `translate(${a}px, ${p}px)`;
    }
    endResizing() {
      this.resizeableService.send({ type: "END_RESIZING" });
    }
  };
  u(e, "ResizeableMixinClass"), M([D], e.prototype, "span", 2), M([D], e.prototype, "resizeHandleX", 2), M([D], e.prototype, "resizeHandleY", 2), M([D], e.prototype, "debugResizeable", 2), M([D], e.prototype, "resizing", 2), M([Me], e.prototype, "resizeHandle", 2);
  let r = e;
  return r;
}
__name(cl, "cl");
u(cl, "ResizeableMixin");
var Ah = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var dr = class extends ge(ve(me(Ie(ye(he(pe(HTMLElement))))))) {
  static {
    __name(this, "dr");
  }
  get operationType() {
    return lu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Ah)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${lu}"`;
  }
};
u(dr, "AntiControlGateElement"), dr = M([X], dr);
function Ph(t) {
  return /^-?\d+$/.test(t);
}
__name(Ph, "Ph");
u(Ph, "isNumeric");
function Mt(t, r = 4) {
  return (t >= 0 ? "+" : "") + t.toFixed(r);
}
__name(Mt, "Mt");
u(Mt, "forceSigned");
var et = class extends ge(ve(me(he(pe(HTMLElement))))) {
  static {
    __name(this, "et");
  }
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return uu;
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
    this.popup = Rt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(s) {
      s.setContent(n);
    } }), this.popup.show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return Y(U`
        <header>
          <h1>Local State</h1>
        </header>

        <div class="body">
          <section>
            r:
            <span class="font-mono font-bold">${Mt(this.d)}</span>, ϕ:
            <span class="font-mono font-bold">${Mt(this.phi, 2)}</span>, θ:
            <span class="font-mono font-bold">${Mt(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="font-mono font-bold">${Mt(this.x)}</span>, y:
            <span class="font-mono font-bold">${Mt(this.y)}</span>, z:
            <span class="font-mono font-bold">${Mt(this.z)}</span>
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
  attributeChangedCallback(e, n, s) {
    this.body && n !== s && s !== null && (e === "data-x" && (this.x = parseFloat(s)), e === "data-y" && (this.y = parseFloat(s)), e === "data-z" && (this.z = parseFloat(s)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = u((s) => U`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${s}deg)"></div>`, "vectorLineRect"), n = u((s, a) => U`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${a}(${s}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    Y(U`<style>
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
    return `"${uu}"`;
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
};
u(et, "BlochDisplayElement"), M([Me], et.prototype, "body", 2), M([Me], et.prototype, "vectorLine", 2), M([Me], et.prototype, "vectorEnd", 2), M([Me], et.prototype, "vector", 2), M([ht], et.prototype, "vectorEndCircles", 2), M([D], et.prototype, "x", 2), M([D], et.prototype, "y", 2), M([D], et.prototype, "z", 2), et = M([X], et);
var zh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var kt = class extends ge(ve(me(Ie(ye(he(pe(HTMLElement))))))) {
  static {
    __name(this, "kt");
  }
  get operationType() {
    return cu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(zh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${cu}"`;
  }
};
u(kt, "ControlGateElement"), kt = M([X], kt);
var Rh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var $t = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "$t");
  }
  get operationType() {
    return hs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Rh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${hs}<${this.if}"` : `"${hs}"`;
  }
};
u($t, "HGateElement"), $t = M([X], $t);
var kh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var qt = class extends ge(ve(kf(me(ye(he(pe(HTMLElement))))))) {
  static {
    __name(this, "qt");
  }
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ms;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml(kh)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ms}"` : `"${ms}>${this.flag}"`;
  }
};
u(qt, "MeasurementGateElement"), M([D], qt.prototype, "value", 2), qt = M([X], qt);
var Dh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ft = class extends ge(ve(Ue(Ge(An(me(Ie(ye(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Ft");
  }
  get operationType() {
    return vs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Dh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${vs}"` : `"${vs}(${this.angle.replace("/", "_")})"`;
  }
};
u(Ft, "PhaseGateElement"), Ft = M([X], Ft);
var pl = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var Nh = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var fr = class extends ge(ve(cl(me(ye(he(pe(HTMLElement))))))) {
  static {
    __name(this, "fr");
  }
  get operationType() {
    return pu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml(Nh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(pl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${pu}${this.span}"`;
  }
};
u(fr, "QftDaggerGateElement"), fr = M([X], fr);
var _h = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var hr = class extends ge(ve(cl(me(ye(he(pe(HTMLElement))))))) {
  static {
    __name(this, "hr");
  }
  get operationType() {
    return du;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml(_h)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(pl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${du}${this.span}"`;
  }
};
u(hr, "QftGateElement"), hr = M([X], hr);
var Lh = `<svg
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
var Ut = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Ut");
  }
  get operationType() {
    return gs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Lh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${gs}<${this.if}"` : `"${gs}"`;
  }
};
u(Ut, "RnotGateElement"), Ut = M([X], Ut);
var Gh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Wt = class extends ge(ve(Ue(Ge(An(me(Ie(ye(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Wt");
  }
  get operationType() {
    return bs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Gh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${bs}"` : `"${bs}(${this.angle.replace("/", "_")})"`;
  }
};
u(Wt, "RxGateElement"), Wt = M([X], Wt);
var jh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = class extends ge(ve(Ue(Ge(An(me(Ie(ye(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Vt");
  }
  get operationType() {
    return ys;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(jh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ys}"` : `"${ys}(${this.angle.replace("/", "_")})"`;
  }
};
u(Vt, "RyGateElement"), Vt = M([X], Vt);
var Hh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = class extends ge(ve(Ue(Ge(An(me(Ie(ye(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Yt");
  }
  get operationType() {
    return ws;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Hh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ws}"` : `"${ws}(${this.angle.replace("/", "_")})"`;
  }
};
u(Yt, "RzGateElement"), Yt = M([X], Yt);
var Bh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "nr");
  }
  get operationType() {
    return xs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Bh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${xs}<${this.if}"` : `"${xs}"`;
  }
};
u(nr, "SDaggerGateElement"), nr = M([X], nr);
var $h = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "ir");
  }
  get operationType() {
    return Es;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml($h)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Es}<${this.if}"` : `"${Es}"`;
  }
};
u(ir, "SGateElement"), ir = M([X], ir);
var qh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var mr = class extends ge(ve(me(Ie(ye(he(pe(HTMLElement))))))) {
  static {
    __name(this, "mr");
  }
  get operationType() {
    return fu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(qh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${fu}"`;
  }
};
u(mr, "SpacerGateElement"), mr = M([X], mr);
var Fh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Xt = class extends ge(ve(Ge(me(Ie(ye(he(pe(HTMLElement)))))))) {
  static {
    __name(this, "Xt");
  }
  get operationType() {
    return hu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Fh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${hu}"`;
  }
};
u(Xt, "SwapGateElement"), Xt = M([X], Xt);
var Uh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "or");
  }
  get operationType() {
    return Ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Uh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ss}<${this.if}"` : `"${Ss}"`;
  }
};
u(or, "TDaggerGateElement"), or = M([X], or);
var Wh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Zt");
  }
  get operationType() {
    return Ts;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Wh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ts}<${this.if}"` : `"${Ts}"`;
  }
};
u(Zt, "TGateElement"), Zt = M([X], Zt);
var Vh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Dt = class extends ge(ve(me(ye(he(pe(HTMLElement)))))) {
  static {
    __name(this, "Dt");
  }
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Gd;
      case "1":
        return jd;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml(Vh)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
};
u(Dt, "WriteGateElement"), M([D], Dt.prototype, "value", 2), Dt = M([X], Dt);
var Yh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var Kt = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Kt");
  }
  get operationType() {
    return Cs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Yh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Cs}<${this.if}"` : `"${Cs}"`;
  }
};
u(Kt, "XGateElement"), Kt = M([X], Kt);
var Xh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Jt = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Jt");
  }
  get operationType() {
    return Os;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Xh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Os}<${this.if}"` : `"${Os}"`;
  }
};
u(Jt, "YGateElement"), Jt = M([X], Jt);
var Zh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Qt = class extends ge(ve(Ue(Ge(me(Ie(ye(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Qt");
  }
  get operationType() {
    return Ms;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Zh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ms}<${this.if}"` : `"${Ms}"`;
  }
};
u(Qt, "ZGateElement"), Qt = M([X], Qt);
var Xe = u((t) => t instanceof dr || t instanceof et || t instanceof kt || t instanceof $t || t instanceof qt || t instanceof Ft || t instanceof fr || t instanceof hr || t instanceof Ut || t instanceof Wt || t instanceof Vt || t instanceof Yt || t instanceof nr || t instanceof ir || t instanceof mr || t instanceof Xt || t instanceof or || t instanceof Zt || t instanceof Dt || t instanceof Kt || t instanceof Jt || t instanceof Qt, "isOperation");
var Kh = u((t) => t != null && t instanceof $t, "isHGateElement");
var Jh = u((t) => t != null && t instanceof Kt, "isXGateElement");
var Qh = u((t) => t != null && t instanceof Jt, "isYGateElement");
var em = u((t) => t != null && t instanceof Qt, "isZGateElement");
var pa = u((t) => t != null && t instanceof Ft, "isPhaseGateElement");
var tm = u((t) => t != null && t instanceof Zt, "isTGateElement");
var YR = u((t) => t != null && t instanceof or, "isTDaggerGateElement");
var rm = u((t) => t != null && t instanceof Ut, "isRnotGateElement");
var dl = u((t) => t != null && t instanceof Wt, "isRxGateElement");
var fl = u((t) => t != null && t instanceof Vt, "isRyGateElement");
var hl = u((t) => t != null && t instanceof Yt, "isRzGateElement");
var XR = u((t) => t != null && t instanceof ir, "isSGateElement");
var ZR = u((t) => t != null && t instanceof nr, "isSDaggerGateElement");
var KR = u((t) => t != null && t instanceof mr, "isSpacerGateElement");
var nm = u((t) => t != null && t instanceof Xt, "isSwapGateElement");
var xc = u((t) => t != null && t instanceof kt, "isControlGateElement");
var Ec = u((t) => t != null && t instanceof dr, "isAntiControlGateElement");
var im = u((t) => t != null && t instanceof et, "isBlochDisplayElement");
var JR = u((t) => t != null && t instanceof Dt, "isWriteGateElement");
var om = u((t) => t != null && t instanceof qt, "isMeasurementGateElement");
var am = jt(rn(), 1);
var da = jt(Vo(), 1);
var Sc = u((t) => t !== null && t instanceof Mr, "isAngleSliderElement");
var Mr = class extends HTMLElement {
  static {
    __name(this, "Mr");
  }
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = mt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new ft("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, n) => {
      n.type === "SET_ANGLE" && (this.denominator = Po(this.angle));
    }, setAngleInRadian: (e, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, s] = this.findSnapAngle(this.radian);
      this.angle = s;
    }, setRadianInAngle: (e, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [s] = this.findSnapAngle(zd(this.angle));
      this.radian = s;
    }, updateSnapAngles: () => {
      this.updateSnapAngles();
    }, updateHandlePosition: () => {
      this.left = (this.radian + 2 * Math.PI) / (4 * Math.PI);
    }, dispatchChangeEvent: () => {
      this.dispatchEvent(new Event("angle-slider-change", { bubbles: true }));
    }, dispatchUpdateEvent: () => {
      this.dispatchEvent(new Event("angle-slider-update", { bubbles: true }));
    } } });
    this.angleSliderService = ut(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${(0, am.format)(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, n, s) {
    n !== s && s !== null && (e === "data-angle" && s !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, da.default)(this).unset();
  }
  update() {
    Y(U`<style>
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
    (0, da.default)(this).draggable({ origin: "self", modifiers: [da.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let n = da.default.getElementRect(e.target).width, s = e.pageX / n;
    this.left = s;
    let a = this.proportionToRadian(s);
    this.setAttribute("data-radian", a.toString());
    let [, p] = this.findSnapAngle(a);
    this.angle !== p && (this.angle = p);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, n = 2 * this.denominator, s = new Array(n - e + 1).fill(null).map((a, p) => p + e);
    this.snapAngles = {};
    for (let a of s)
      this.denominator === 1 ? a === 0 ? this.snapAngles[0] = "0" : a === 1 ? this.snapAngles[Math.PI] = "\u03C0" : a === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[a * Math.PI] = `${a}\u03C0` : a === 0 ? this.snapAngles[0] = "0" : a === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : a === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[a * Math.PI / this.denominator] = `${a}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let n = null, s = null, a = null;
    for (let p in this.snapAngles) {
      let v = Math.abs(parseFloat(p) - e);
      (n === null || v < n) && (n = v, s = parseFloat(p), a = this.snapAngles[p]);
    }
    return B.notNull(s), B.notNull(a), [s, a];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
};
u(Mr, "AngleSliderElement"), M([D], Mr.prototype, "angle", 2), M([D], Mr.prototype, "radian", 2), M([D], Mr.prototype, "denominator", 2), M([D], Mr.prototype, "disabled", 2), M([D], Mr.prototype, "debug", 2), Mr = M([X], Mr);
var fi = class extends HTMLElement {
  static {
    __name(this, "fi");
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let n = e.currentTarget;
    B.notNull(n);
    for (let s of this.buttons)
      s.removeAttribute("data-active");
    n.setAttribute("data-active", "");
  }
};
u(fi, "ButtonGroupElement"), M([ht], fi.prototype, "buttons", 2), fi = M([X], fi);
var to = jt(lm(), 1);
var at = class extends HTMLElement {
  static {
    __name(this, "at");
  }
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
  attributeChangedCallback(e, n, s) {
    n !== s && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (B.notNull(s), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new ft("unsupported qubit count", this.qubitCount);
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
          throw new ft("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let n = e.getAttribute("data-ket");
      return B.notNull(n), parseInt(n);
    }), B.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    to.default.mutate(() => {
      for (let n of this.qubitCircles) {
        let s = n.getAttribute("data-ket");
        B.notNull(s);
        let a = parseInt(s), p = e[a];
        if (p === void 0)
          continue;
        let v = Math.floor(p.abs() * 1e5) / 1e5, m = p.phase() / Math.PI * 180;
        n.setAttribute("data-amplitude-real", p.real.toString()), n.setAttribute("data-amplitude-imag", p.imag.toString()), v === 0 ? n.classList.add("magnitude-0") : (n.classList.remove("magnitude-0"), n.style.setProperty("--magnitude", v.toString()));
        let d = Math.trunc(m);
        d < 0 && (d = 360 + d), n.style.setProperty("--phase", `-${d.toString()}deg`);
      }
    });
  }
  renderShadowRoot() {
    Y(U`<style>
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
        throw new ft("unsupported qubit count", this.qubitCount);
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
        throw new ft("unsupported qubit count", this.qubitCount);
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
        throw new ft("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    B.notNull(this.window), B.notNull(this.innerContainer), this.qubitCount !== 0 && to.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let e = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let s = this.lastRowStartIndex; s <= this.lastRowEndIndex; s++)
        for (let a = this.lastColStartIndex; a <= this.lastColEndIndex; a++)
          e.push({ col: a, row: s });
      let n = document.createDocumentFragment();
      for (let s of this.allQubitCircleElements(e))
        n.appendChild(s);
      this.innerContainer.textContent = "", this.innerContainer.appendChild(n), this.updateVisibleQubitCircleKets();
    });
  }
  update() {
    this.drawNewlyVisibleQubitCircles(), this.removeInvisibleQubitCircles();
  }
  drawNewlyVisibleQubitCircles() {
    this.window !== void 0 && this.innerContainer !== void 0 && (to.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, n = this.overscanColEndIndex, s = this.overscanRowStartIndex, a = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === n && this.lastRowStartIndex === s && this.lastRowEndIndex === a)) {
        for (let p = s; p <= a; p++)
          for (let v = e; v <= n; v++)
            (v < this.lastColStartIndex || this.lastColEndIndex < v || p < this.lastRowStartIndex || this.lastRowEndIndex < p) && this.qubitCirclePositions.push({ col: v, row: p });
        this.lastColStartIndex = e, this.lastColEndIndex = n, this.lastRowStartIndex = s, this.lastRowEndIndex = a;
      }
    }), to.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let n of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(n);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    to.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let n = e.getAttribute("data-col"), s = e.getAttribute("data-row");
        B.notNull(n), B.notNull(s);
        let a = parseInt(n), p = parseInt(s);
        if (a < this.lastColStartIndex || this.lastColEndIndex < a || p < this.lastRowStartIndex || this.lastRowEndIndex < p) {
          let v = e._tippy;
          v !== void 0 && v.destroy(), e.remove();
        }
      }
    });
  }
  allQubitCircleElements(e) {
    return e.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(e) {
    let n = e.col + e.row * this.colCount, s = this.qubitCircleSizePx * e.row + e.row * this.gap + this.paddingY, a = this.qubitCircleSizePx * e.col + e.col * this.gap + this.paddingX, p = document.createElement("div");
    p.className = "qubit-circle magnitude-0", p.setAttribute("data-col", e.col.toString()), p.setAttribute("data-row", e.row.toString()), p.setAttribute("data-ket", n.toString()), p.setAttribute("data-targets", "circle-notation.qubitCircles"), p.setAttribute("data-amplitude-real", "0"), p.setAttribute("data-amplitude-imag", "0"), p.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), p.style.setProperty("top", `${s}px`), p.style.setProperty("left", `${a}px`);
    let v = document.createElement("div");
    v.className = "qubit-circle__magnitude";
    let m = document.createElement("div");
    return m.className = "qubit-circle__phase", p.appendChild(v), p.appendChild(m), p;
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
        throw new ft("unsupported qubit count", this.qubitCount);
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
    let s = Rt(n, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let a = n.getAttribute("data-ket");
    B.notNull(a);
    let p = n.getAttribute("data-amplitude-real");
    B.notNull(p);
    let v = n.getAttribute("data-amplitude-imag");
    B.notNull(v);
    let m = parseInt(a), d = parseFloat(p), h = parseFloat(v), y = new zo(d, h), w = y.abs(), x = y.phase() / Math.PI * 180, T = document.importNode(this.qubitCirclePopupTemplate.content, true), C = T.getElementById("qubit-circle-popup--ket-binary-value"), R = T.getElementById("qubit-circle-popup--ket-decimal-value"), _ = T.getElementById("qubit-circle-popup--amplitude"), L = T.getElementById("qubit-circle-popup--amplitude-real-value"), $ = T.getElementById("qubit-circle-popup--amplitude-imag-value"), A = T.getElementById("qubit-circle-popup--probability"), ee = T.getElementById("qubit-circle-popup--probability-value"), z = T.getElementById("qubit-circle-popup--phase"), H = T.getElementById("qubit-circle-popup--phase-value");
    B.notNull(_), B.notNull(L), B.notNull($), B.notNull(A), B.notNull(ee), B.notNull(z), B.notNull(H), C && (C.textContent = m.toString(2).padStart(this.qubitCount, "0")), R && (R.textContent = m.toString()), this.showQubitCirclePopupAmplitude ? (L.textContent = Mt(y.real, 5), $.textContent = `${Mt(y.imag, 5)}i`) : _.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Mt(w * w * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? H.textContent = `${Mt(x, 2)}\xB0` : z.style.display = "none";
    let te = document.createElement("div");
    te.appendChild(T), s.setContent(te.innerHTML), s.show();
  }
  hideQubitCirclePopup(e) {
    let n = e.target;
    B.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let s = n._tippy;
    B.notNull(s), s.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
};
u(at, "CircleNotationElement"), M([D], at.prototype, "qubitCount", 2), M([D], at.prototype, "qubitCircleSize", 2), M([D], at.prototype, "colCount", 2), M([D], at.prototype, "rowCount", 2), M([D], at.prototype, "paddingX", 2), M([D], at.prototype, "paddingY", 2), M([D], at.prototype, "overscanCount", 2), M([D], at.prototype, "colorPhase", 2), M([D], at.prototype, "qubitCirclePopupTemplateId", 2), M([D], at.prototype, "showQubitCirclePopupAmplitude", 2), M([D], at.prototype, "showQubitCirclePopupProbability", 2), M([D], at.prototype, "showQubitCirclePopupPhase", 2), M([Me], at.prototype, "window", 2), M([Me], at.prototype, "innerContainer", 2), M([ht], at.prototype, "qubitCircles", 2), at = M([X], at);
var hi = class extends HTMLElement {
  static {
    __name(this, "hi");
  }
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
    Y(U`<slot></slot>`, this.shadowRoot);
  }
};
u(hi, "CircleNotationPanelElement"), M([Me], hi.prototype, "circleNotation", 2), hi = M([X], hi);
var um = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var cm = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Dr = class extends HTMLElement {
  static {
    __name(this, "Dr");
  }
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    window.addEventListener("load", this.startAnimation.bind(this)), this.startBreakpointChangeEventListener(this.startAnimation.bind(this)), this.attachShadow({ mode: "open" }), this.update();
  }
  attributeChangedCallback(e, n, s) {
    n !== s && s !== null && e === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
  }
  startBreakpointChangeEventListener(e) {
    window.matchMedia("(max-width: 639px)").addEventListener("change", e);
  }
  startAnimation() {
    this.toggleGateSets(), this.toggleDots(), this.removePopinAnimationGates(), this.enableContentClipping(), this.makeAllGateSetsInvisible(), this.createPopinAnimationGates(), this.animatePopinAnimationGates();
  }
  update() {
    Y(U`
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
            ${this.iconHtml(um)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(cm)}
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
    for (let n = 0; n < this.gateSets.length; n++)
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
      return B.need(Xe(n), `${n} must be an operation.`), n;
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
      let s = 0;
      e === 0 ? s = 500 : e === 1 ? s = 600 : e === 2 ? s = 700 : e === 3 && (s = 800);
      let a = n.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: s, fill: "forwards", easing: "ease-out" });
      a.onfinish = () => {
        n === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [e, n] of this.dots.entries())
      e === this.currentGateSetIndex ? n.classList.add("dot--active") : n.classList.remove("dot--active");
  }
};
u(Dr, "GateCarouselElement"), M([D], Dr.prototype, "currentGateSetIndex", 2), M([Me], Dr.prototype, "contentClipper", 2), M([ht], Dr.prototype, "gateSets", 2), M([ht], Dr.prototype, "dots", 2), M([ht], Dr.prototype, "popinAnimationGates", 2), Dr = M([X], Dr);
var ro = class extends HTMLElement {
  static {
    __name(this, "ro");
  }
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
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
    this.popup = Rt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let n = e.target;
    !this.popup.popper.contains(n) && !this.popup.reference.contains(n) && !Xe(n) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    B.notNull(e);
    let n = e.content.cloneNode(true), s = document.createDocumentFragment();
    return Y(U`${n}`, s), s;
  }
};
u(ro, "InspectorButtonElement"), ro = M([X], ro);
var xt = class extends HTMLElement {
  static {
    __name(this, "xt");
  }
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
    return Nd(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), dn(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Kn(e)) {
      let n = Po(e.angle);
      pa(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (dl(e) || fl(e) || hl(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    ri(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let n = e.target;
    if (!Sc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let n = e.target;
    if (!Sc(n))
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
    if (Dd(e)) {
      let n, s = Po(e);
      this.denominatorInput.value = s.toString(), this.denominatorLabel.textContent = s.toString(), this.backupCurrentDenominator(), Rd(e, "-2\u03C0") ? (n = `-${s * 2}\u03C0/${s}`, this.angleInput.value = n) : kd(e, "2\u03C0") ? (n = `${s * 2}\u03C0/${s}`, this.angleInput.value = n) : n = e, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    Ph(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
};
u(xt, "OperationInspectorElement"), M([Me], xt.prototype, "ifInput", 2), M([Me], xt.prototype, "angleInputLabel", 2), M([Me], xt.prototype, "angleInput", 2), M([Me], xt.prototype, "angleSlider", 2), M([Me], xt.prototype, "denominatorInput", 2), M([Me], xt.prototype, "denominatorVariableLabel", 2), M([Me], xt.prototype, "denominatorLabel", 2), M([Me], xt.prototype, "reduceAngleFractionCheckbox", 2), M([Me], xt.prototype, "flagInput", 2), M([D], xt.prototype, "conditionalGatePaneDisabled", 2), M([D], xt.prototype, "anglePaneDisabled", 2), M([D], xt.prototype, "conditionalFlagPaneDisabled", 2), xt = M([X], xt);
var ml = jt(dm(), 1);
var Nt = class extends HTMLElement {
  static {
    __name(this, "Nt");
  }
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
    Y(U`<style>
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
    let e = Rt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let n = document.importNode(this.popupTemplate.content, true), s = new ml.default(this.amplitude), a = n.getElementById("qubit-circle-popup--header"), p = n.getElementById("qubit-circle-popup--ket-binary-value"), v = n.getElementById("qubit-circle-popup--ket-decimal-value"), m = n.getElementById("qubit-circle-popup--amplitude"), d = n.getElementById("qubit-circle-popup--amplitude-real-value"), h = n.getElementById("qubit-circle-popup--amplitude-imag-value"), y = n.getElementById("qubit-circle-popup--probability"), w = n.getElementById("qubit-circle-popup--probability-value"), x = n.getElementById("qubit-circle-popup--phase"), T = n.getElementById("qubit-circle-popup--phase-value");
    B.notNull(a), B.notNull(p), B.notNull(v), B.notNull(m), B.notNull(d), B.notNull(h), B.notNull(y), B.notNull(w), B.notNull(x), B.notNull(T), this.showPopupHeader ? (p.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), v.textContent = this.ket.toString()) : a.style.display = "none", this.showPopupAmplitude ? (d.textContent = Mt(s.re, 5), h.textContent = `${Mt(s.im, 5)}i`) : m.style.display = "none", this.showPopupProbability ? w.textContent = `${Mt(this.magnitude * this.magnitude * 100, 4)}%` : y.style.display = "none", this.showPopupPhase ? T.textContent = `${Mt(this.phaseDeg, 2)}\xB0` : x.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(n), e.setContent(C.innerHTML), e.show();
  }
  get magnitude() {
    return new ml.default(this.amplitude).abs();
  }
  get phase() {
    return new ml.default(this.amplitude).arg();
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
u(Nt, "QubitCircleElement"), M([D], Nt.prototype, "ket", 2), M([D], Nt.prototype, "qubitCount", 2), M([D], Nt.prototype, "amplitude", 2), M([D], Nt.prototype, "hidePhase", 2), M([D], Nt.prototype, "popupTemplateId", 2), M([D], Nt.prototype, "showPopupHeader", 2), M([D], Nt.prototype, "showPopupAmplitude", 2), M([D], Nt.prototype, "showPopupProbability", 2), M([D], Nt.prototype, "showPopupPhase", 2), M([D], Nt.prototype, "darkMode", 2), Nt = M([X], Nt);
var mm = jt(rn(), 1);
var fm = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var hm = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Ur = class extends HTMLElement {
  static {
    __name(this, "Ur");
  }
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = mt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, n) => {
      if (n.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let s = document.createElement("span");
      s.id = "ripple";
      let a = Math.max(this.clientWidth, this.clientHeight), p = a / 2, v = this.getBoundingClientRect(), m = v.left + window.pageXOffset, d = v.top + window.pageYOffset;
      s.setAttribute("part", "ripple"), s.setAttribute("data-target", "run-circuit-button.ripple"), s.style.width = s.style.height = `${a}px`, s.style.left = `${n.clientX - (m + p)}px`, s.style.top = `${n.clientY - (d + p)}px`, this.body.appendChild(s);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = ut(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${(0, mm.format)(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, n, s) {
    n !== s && e === "data-running" && s !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    Y(U`<style>
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
    return U([fm]);
  }
  get tailSpinIcon() {
    return U([hm]);
  }
};
u(Ur, "RunCircuitButtonElement"), M([D], Ur.prototype, "running", 2), M([D], Ur.prototype, "debug", 2), M([Me], Ur.prototype, "body", 2), M([Me], Ur.prototype, "ripple", 2), Ur = M([X], Ur);
var Nr = class extends HTMLElement {
  static {
    __name(this, "Nr");
  }
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
    Y(U`<slot></slot>`, this.shadowRoot);
  }
};
u(Nr, "SlideInElement"), M([D], Nr.prototype, "direction", 2), M([D], Nr.prototype, "directionDesktop", 2), M([D], Nr.prototype, "duration", 2), M([D], Nr.prototype, "marginTop", 2), M([D], Nr.prototype, "marginBottom", 2), Nr = M([X], Nr);
var Wr = class extends HTMLElement {
  static {
    __name(this, "Wr");
  }
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
    Y(U`<style>
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
u(Wr, "CircuitBlockElement"), M([D], Wr.prototype, "comment", 2), M([D], Wr.prototype, "finalized", 2), Wr = M([X], Wr);
var vm = jt(rn(), 1);
var Vr = u((t) => t != null && t instanceof pt, "isCircuitStepElement");
var Oe = u((t, r) => Array.from(t.reduce((e, n, s, a) => {
  let p = r(n, s, a), v = e.get(p);
  return v ? v.push(n) : e.set(p, [n]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var pt = class extends HTMLElement {
  static {
    __name(this, "pt");
  }
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = mt({ id: "circuit-step", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones"] }, DELETE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE"))
        return;
      let s = n.dropzone, a = this.bit(s);
      B.notNull(s.operation), s.operation.bit = a;
    }, updateResizeableSpanDropzones: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "UNSNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE" || n.type === "DELETE_OPERATION" || n.type === "RESIZE_OPERATION"))
        return;
      let s = 1;
      for (let a of this.dropzones) {
        let p = a.operation;
        if (pr(p)) {
          s = p.span;
          continue;
        }
        p === null && (s > 1 ? (a.occupied = true, s -= 1) : a.occupied = false);
      }
    }, dispatchSnapEvent: (e, n) => {
      n.type === "SNAP_DROPZONE" && fe("circuit-step:qpu-operation-snap", { dropzone: n.dropzone }, this);
    }, dispatchUnsnapEvent: (e, n) => {
      n.type === "UNSNAP_DROPZONE" && fe("circuit-step:qpu-operation-unsnap", { dropzone: n.dropzone }, this);
    }, dispatchDeleteOperationEvent: (e, n) => {
      n.type === "DELETE_OPERATION" && fe("circuit-step:delete-qpu-operation", { dropzone: n.dropzone }, this);
    }, dispatchResizeOperationEvent: (e, n) => {
      n.type === "RESIZE_OPERATION" && fe("circuit-step:resize-qpu-operation", { dropzone: n.dropzone }, this);
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = ut(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${(0, vm.format)(e.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let e = 0;
    for (let [n, s] of Object.entries(this.dropzones)) {
      if (!s.occupied)
        continue;
      let a = parseInt(n, 10) + 1;
      if (a > e && (e = a), pr(s.operation)) {
        let p = a + s.operation.span - 1;
        p > e && (e = p);
      }
    }
    return B.need(0 <= e && e <= Ro.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
  attributeChangedCallback(e, n, s) {
    if (n !== s && (e === "data-active" && (s !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (s !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let a of this.dropzones)
        s !== null ? a.shadow = true : a.shadow = false;
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let p of this.dropzones)
      p.connectTop = false, p.connectBottom = false;
    let n = this.controlGateDropzones, s = this.antiControlGateDropzones, a = this.controllableDropzones(e);
    for (let p of a)
      ko(p.operation) && (p.operation.controls = [], p.operation.antiControls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), n.length === 1 && a.length === 0) {
      n[0].operation.disable();
      return;
    }
    if (s.length === 1 && a.length === 0) {
      s[0].operation.disable();
      return;
    }
    n.length === 0 && s.length === 0 || (a.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e));
  }
  updateSwapConnections(e) {
    let n = e == null ? void 0 : e.disableSwap, s = this.swapGateDropzones;
    if (s.length !== 2 || n)
      for (let a of s)
        a.operation.disable();
    else {
      for (let p of s)
        p.operation.enable(), p.connectTop = s.some((m) => this.bit(m) < this.bit(p)), p.connectBottom = s.some((m) => this.bit(m) > this.bit(p));
      let a = s.map((p) => this.bit(p));
      for (let p of this.freeDropzones) {
        let v = Math.min(...a), m = Math.max(...a);
        v < this.bit(p) && this.bit(p) < m && (p.connectTop = true, p.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(e) {
    if (e != null && e.disablePhasePhase)
      return;
    let n = this.phaseGateDropzones;
    for (let s of n) {
      let a = s.operation;
      if (a.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let p = n.filter((v) => {
        if (!pa(v.operation))
          throw new Error(`${v.operation} isn't a phase-gate element.`);
        return a.angle === v.operation.angle;
      }).map((v) => this.bit(v));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (p = p.slice(0, e.maxPhasePhaseTargetGates)), p.includes(this.bit(s)) && (s.connectTop = p.some((v) => v < this.bit(s)), s.connectBottom = p.some((v) => v > this.bit(s)));
    }
    for (let s of this.freeDropzones) {
      let p = this.phaseGateDropzones.filter((d) => d.connectTop || d.connectBottom).map((d) => this.bit(d)), v = Math.min(...p), m = Math.max(...p);
      v < this.bit(s) && this.bit(s) < m && (s.connectTop = true, s.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let n = this.controlGateDropzones, s = n.map((p) => this.bit(p)), a = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? s = [] : e.maxControlControlTargetGates > 1 && (s = s.slice(0, e.maxControlControlTargetGates)));
    for (let p of n) {
      a += 1;
      let v = p.operation;
      e != null && e.disableControlControl || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && a > e.maxControlControlTargetGates) ? v.disable() : (v.enable(), p.connectTop = s.some((m) => this.bit(p) > m), p.connectBottom = s.some((m) => this.bit(p) < m));
    }
  }
  updateControlledUConnections(e) {
    let n = this.controllableDropzones(e), s = this.controlGateDropzones, a = this.antiControlGateDropzones, p = [...new Set(n.map((T) => T.operationName))], v = this.numControlGateDropzones(e, p), m = s.map((T) => this.bit(T)), d = a.map((T) => this.bit(T)), h = m.concat(d), y = v === null ? h : h.slice(0, v), w = n.map((T) => this.bit(T)), x = y.concat(w);
    for (let [T, C] of Object.entries(s)) {
      let R = C.operation;
      C.connectBottom = x.some((_) => this.bit(C) < _), C.connectTop = x.some((_) => this.bit(C) > _), v === null || v !== null && parseInt(T) < v ? R.enable() : (C.connectTop = Math.max(...x) > this.bit(C), R.disable());
    }
    for (let [T, C] of Object.entries(a)) {
      let R = C.operation;
      C.connectBottom = x.some((_) => this.bit(C) < _), C.connectTop = x.some((_) => this.bit(C) > _), v === null || v !== null && parseInt(T) < v ? R.enable() : (C.connectTop = Math.max(...x) > this.bit(C), R.disable());
    }
    for (let T of n) {
      if (!ko(T.operation))
        throw new Error(`${T.operation} isn't controllable.`);
      T.operation.controls = this.controlBits(T, m, e), T.operation.antiControls = d, T.connectTop = x.some((C) => C < this.bit(T)), T.connectBottom = x.some((C) => C > this.bit(T));
    }
  }
  updateFreeDropzoneConnections(e) {
    let n = this.controllableDropzones(e), s = this.controlGateDropzones.filter((h) => xc(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), a = this.antiControlGateDropzones.filter((h) => Ec(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), p = n.map((h) => this.bit(h)), v = s.concat(a).concat(p), m = Math.min(...v), d = Math.max(...v);
    for (let h of this.freeDropzones)
      m < this.bit(h) && this.bit(h) < d && (h.connectTop = true, h.connectBottom = true);
  }
  controlBits(e, n, s) {
    let a = n;
    return s && (s.maxChControlGates > 0 && e.operationName === "h-gate" ? a = n.slice(0, s.maxChControlGates) : s.maxCnotControlGates > 0 && e.operationName === "x-gate" ? a = n.slice(0, s.maxCnotControlGates) : s.maxCyControlGates > 0 && e.operationName === "y-gate" ? a = n.slice(0, s.maxCyControlGates) : s.maxCzControlGates > 0 && e.operationName === "z-gate" ? a = n.slice(0, s.maxCzControlGates) : s.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? a = n.slice(0, s.maxCphaseControlGates) : s.maxCtControlGates > 0 && e.operationName === "t-gate" ? a = n.slice(0, s.maxCtControlGates) : s.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? a = n.slice(0, s.maxCrnotControlGates) : s.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? a = n.slice(0, s.maxCrxControlGates) : s.maxCryControlGates > 0 && e.operationName === "ry-gate" ? a = n.slice(0, s.maxCryControlGates) : s.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? a = n.slice(0, s.maxCrzControlGates) : s.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (a = n.slice(0, s.maxCswapControlGates))), a;
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
    let e = new de();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let n = new de();
    this.append(n), n.put(e);
  }
  get swapGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.occupiedDropzones.filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.occupiedDropzones.filter((e) => xc(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => Ec(e.operation));
  }
  numControlGateDropzones(e, n) {
    if (e === void 0)
      return null;
    let s = 0;
    return n.includes("h-gate") && !e.disableCh && e.maxChControlGates > s && (s = e.maxChControlGates), n.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > s && (s = e.maxCnotControlGates), n.includes("y-gate") && !e.disableCy && e.maxCyControlGates > s && (s = e.maxCyControlGates), n.includes("z-gate") && !e.disableCz && e.maxCzControlGates > s && (s = e.maxCzControlGates), n.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > s && (s = e.maxCphaseControlGates), n.includes("t-gate") && !e.disableCt && e.maxCtControlGates > s && (s = e.maxCtControlGates), n.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > s && (s = e.maxCrnotControlGates), n.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > s && (s = e.maxCrxControlGates), n.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > s && (s = e.maxCryControlGates), n.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > s && (s = e.maxCrzControlGates), n.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > s && (s = e.maxCswapControlGates), s === 0 ? null : s;
  }
  controllableDropzones(e) {
    let n = 0, s = 0, a = 0, p = 0, v = 0, m = 0, d = 0, h = 0, y = 0, w = 0;
    return this.occupiedDropzones.filter((x) => ko(x.operation)).filter((x) => e === void 0 ? true : Kh(x.operation) ? (n += 1, e.maxChTargetGates !== 0 && n > e.maxChTargetGates ? false : !e.disableCh) : Jh(x.operation) ? (s += 1, e.maxCnotTargetGates !== 0 && s > e.maxCnotTargetGates ? false : !e.disableCnot) : Qh(x.operation) ? (a += 1, e.maxCyTargetGates !== 0 && a > e.maxCyTargetGates ? false : !e.disableCy) : em(x.operation) ? (p += 1, e.maxCzTargetGates !== 0 && p > e.maxCzTargetGates ? false : !e.disableCz) : pa(x.operation) ? (v += 1, e.maxCphaseTargetGates !== 0 && v > e.maxCphaseTargetGates ? false : !e.disableCphase) : tm(x.operation) ? (m += 1, e.maxCtTargetGates !== 0 && m > e.maxCtTargetGates ? false : !e.disableCt) : rm(x.operation) ? (d += 1, e.maxCrnotTargetGates !== 0 && d > e.maxCrnotTargetGates ? false : !e.disableCrnot) : dl(x.operation) ? (h += 1, e.maxCrxTargetGates !== 0 && h > e.maxCrxTargetGates ? false : !e.disableCrx) : fl(x.operation) ? (y += 1, e.maxCryTargetGates !== 0 && y > e.maxCryTargetGates ? false : !e.disableCry) : hl(x.operation) ? (w += 1, e.maxCrzTargetGates !== 0 && w > e.maxCrzTargetGates ? false : !e.disableCrz) : nm(x.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    fe("circuit-step:update", {}, this);
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
    fe("circuit-step:mouseenter", {}, this);
  }
  dispatchMouseleaveEvent() {
    fe("circuit-step:mouseleave", {}, this);
  }
  maybeDispatchClickEvent(e) {
    Xe(e.target) || fe("circuit-step:click", {}, this);
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
    for (let [n, s] of Oe(this.operations, (a) => a.constructor))
      switch (n) {
        case $t: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case Kt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case Jt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case Qt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case Ft: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.angle))
            for (let [m, d] of Oe(v, (h) => h.if))
              for (let [h, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], x = w.operationType, T = y.map((R) => R.bit), C = { type: x, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), h !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case ir: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case nr: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case Zt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case or: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case Ut: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.if))
            for (let [m, d] of Oe(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, w = d.map((T) => T.bit), x = { type: y, targets: w };
              p !== "" && (x.if = p), m !== "" && (x.controls = h.controls), h.antiControls.length > 0 && (x.antiControls = h.antiControls), e.push(x);
            }
          break;
        }
        case Wt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.angle))
            for (let [m, d] of Oe(v, (h) => h.if))
              for (let [h, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], x = w.operationType, T = y.map((R) => R.bit), C = { type: x, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), h !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Vt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.angle))
            for (let [m, d] of Oe(v, (h) => h.if))
              for (let [h, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], x = w.operationType, T = y.map((R) => R.bit), C = { type: x, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), h !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Yt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.angle))
            for (let [m, d] of Oe(v, (h) => h.if))
              for (let [h, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], x = w.operationType, T = y.map((R) => R.bit), C = { type: x, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), h !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case mr: {
          let a = s, p = a[0].operationType, v = a.map((d) => d.bit), m = { type: p, targets: v };
          e.push(m);
          break;
        }
        case hr: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.span)) {
            let d = v[0].operationType, h = v.map((w) => w.bit), y = { type: d, span: p, targets: h };
            e.push(y);
          }
          break;
        }
        case fr: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.span)) {
            let d = v[0].operationType, h = v.map((w) => w.bit), y = { type: d, span: p, targets: h };
            e.push(y);
          }
          break;
        }
        case Xt: {
          let a = s.filter((d) => !d.disabled);
          if (a.length !== 2)
            break;
          let p = a[0].operationType, v = a[0].controls, m = { type: p, targets: [a[0].bit, a[1].bit] };
          v !== void 0 && v.length > 0 && (m.controls = v), e.push(m);
          break;
        }
        case kt: {
          let a = s.filter((v) => !v.disabled);
          if (a.length < 2 || this.operations.some((v) => ko(v) && v.controls.length > 0))
            break;
          let p = a.map((v) => v.bit);
          e.push({ type: a[0].operationType, targets: p });
          break;
        }
        case dr:
          break;
        case et: {
          let a = s, p = s.map((v) => v.bit);
          e.push({ type: a[0].operationType, targets: p });
          break;
        }
        case Dt: {
          let a = s;
          for (let [, p] of Oe(a, (v) => v.value)) {
            let v = p.map((m) => m.bit);
            e.push({ type: p[0].operationType, targets: v });
          }
          break;
        }
        case qt: {
          let a = s;
          for (let [p, v] of Oe(a, (m) => m.flag)) {
            let m = v.map((y) => y.bit), h = { type: v[0].operationType, targets: m };
            p !== "" && (h.flag = p), e.push(h);
          }
          break;
        }
        default:
          throw new ft("Unrecognized operation", { klass: n });
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
};
u(pt, "CircuitStepElement"), M([D], pt.prototype, "active", 2), M([D], pt.prototype, "breakpoint", 2), M([D], pt.prototype, "shadow", 2), M([D], pt.prototype, "keep", 2), M([D], pt.prototype, "debug", 2), M([ht], pt.prototype, "dropzones", 2), M([ht], pt.prototype, "freeDropzones", 2), M([ht], pt.prototype, "occupiedDropzones", 2), pt = M([X], pt);
var bm = jt(Vo(), 1);
var gm = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var ha = u((t) => t != null && t instanceof de, "isCircuitDropzoneElement");
var fa;
var de = class extends HTMLElement {
  static {
    __name(this, "de");
  }
  constructor() {
    super(...arguments);
    Za(this, fa, null);
    this.occupied = false;
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.targets = "circuit-step.dropzones circuit-step.freeDropzones";
    this.debug = false;
    this.circuitDropzoneMachine = mt({ id: "circuit-dropzone", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
      B.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      B.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, fe("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.removeAttribute("data-operation-name"), this.occupied = false, fe("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      fe("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (e, n) => {
      n.type === "PUT_OPERATION" && (this.append(n.operation), this.operationName = n.operation.tagName.toLocaleLowerCase(), this.occupied = true, n.operation.snapped = true);
    }, deleteOperation: (e, n) => {
      n.type === "DELETE_OPERATION" && (this.removeAttribute("data-operation-name"), this.occupied = false, this.removeChild(n.operation));
    }, resizeOperation: () => {
      fe("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      fe("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      fe("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = ut(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = Ka(this, fa, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Xa(this, fa)) == null || e.abort();
  }
  attributeChangedCallback(e, n, s) {
    n !== s && e === "data-occupied" && (s !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
  }
  update() {
    Y(U`<style>
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
    return B.notNull(e), Vr(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, bm.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!Xe(n))
      throw new Error(`${n} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: n });
  }
  resizeOperation(e) {
    let n = e.target;
    if (!pr(n))
      throw new Error(`${n} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([gm]);
  }
};
fa = /* @__PURE__ */ new WeakMap(), u(de, "CircuitDropzoneElement"), M([D], de.prototype, "occupied", 2), M([D], de.prototype, "operationName", 2), M([D], de.prototype, "inputWireQuantum", 2), M([D], de.prototype, "outputWireQuantum", 2), M([D], de.prototype, "connectTop", 2), M([D], de.prototype, "connectBottom", 2), M([D], de.prototype, "shadow", 2), M([D], de.prototype, "targets", 2), M([D], de.prototype, "debug", 2), de = M([X], de);
var ym = jt(rn(), 1);
var fn = class extends HTMLElement {
  static {
    __name(this, "fn");
  }
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = mt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let s = n.operation;
      ll(s) && s.menu && s.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, n) => {
      n.type !== "GRAB_OPERATION" && n.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(n.operation);
    }, snapOperationIntoDropzone: (e, n) => {
      if (n.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let s = n.operation, a = this.circuit.snapTargetAt(n.x, n.y);
      if (s.snapped = true, a.dropzone === null) {
        let p = a.stepIndex;
        B.notNull(p);
        let v = this.circuit.addShadowStepAfter(p), m = v.dropzones[a.wireIndex];
        B.notNull(m), m.append(s), m.operationName = s.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(v.dropzones);
      } else
        a.dropzone.append(s);
    }, snapResizeHandleIntoDropzone: (e, n) => {
      if (n.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let s = n.operation;
      if (!pr(s))
        throw new Error(`${s} is not resizeable`);
      let a = s.dropzone;
      if (!ha(a))
        throw new Error(`${a} is not a circuit dropzone`);
      B.notNull(a.circuitStep);
      let p = a.circuitStep.dropzones.indexOf(a), m = this.circuit.resizeHandleSnapTargetAt(n.x, n.y).wireIndex - p + 1;
      if (!Ld(m))
        throw new Error(`Invalid span: ${m}`);
      s.span = m;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < Ro.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      let s = n.operation;
      ll(s) && s.initMenu();
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
      let s = n.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(s);
    } } });
    this.circuitEditorService = ut(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${(0, ym.format)(e.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("menuable:show-menu", this.showOperationMenu), this.addEventListener("menuable:menu-if", this.showOperationInspectorIf), this.addEventListener("menuable:menu-angle", this.showOperationInspectorAngle), this.addEventListener("menuable:menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("resizeable:release-resize-handle", this.releaseResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("menuable:menu-delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let n = e.target;
    if (Fs(n))
      n.draggable = true;
    else
      throw new ft("Not a draggable element.", { el: n });
  }
  enableResizing(e) {
    let n = e.target;
    if (pr(n))
      n.resizeable = true;
    else
      throw new ft("Not a resizeable element.", { el: n });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let s of this.circuit.operations)
        ll(s) && s.initMenu();
    }
  }
  maybeDeactivateOperation(e) {
    var s;
    let n = e.target;
    !Xe(n) && this.inspectorButton && !((s = this.inspectorButton) != null && s.popup.popper.contains(n)) && !this.inspectorButton.popup.reference.contains(n) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: n });
  }
  showOperationMenu(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: n });
  }
  showOperationInspectorIf(e) {
    let n = e.target;
    if (!dn(n))
      throw new Error(`${n} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: n });
  }
  showOperationInspectorAngle(e) {
    let n = e.target;
    if (!Kn(n))
      throw new Error(`${n} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: n });
  }
  showOperationInspectorFlag(e) {
    let n = e.target;
    if (!ri(n))
      throw new Error(`${n} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: n });
  }
  setOperationIf(e) {
    let n = e.target, s = this.activeOperation;
    if (!dn(s))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: s, if: n.if });
  }
  setOperationAngle(e) {
    let n = e.target, s = this.activeOperation;
    if (B.notNull(s), !Kn(s))
      throw new Error(`${s.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: s, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let n = e.target, s = this.activeOperation;
    if (!ri(s))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: s, flag: n.flag });
  }
  grabOperation(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: n });
  }
  grabResizeHandle(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: n });
  }
  releaseResizeHandle(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  releaseOperation(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: n });
  }
  resizeEnd(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  endDraggingOperation(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: n });
  }
  dropOperation(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: n });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let n = e.target;
    if (!Vr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: n });
  }
  snapStep(e) {
    let n = e.target;
    if (!Vr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: n });
  }
  unsnapStep(e) {
    let n = e.target;
    if (!Vr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: n });
  }
  operationInSnapRange(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    let a = e.detail.snapTargetInfo, p = a.x, v = a.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  resizeHandleInSnapRange(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    let a = e.detail.snapTargetInfo, p = a.x, v = a.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!Vr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: n });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!Vr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: n });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
};
u(fn, "CircuitEditorElement"), M([D], fn.prototype, "debug", 2), M([Me], fn.prototype, "circuit", 2), M([Me], fn.prototype, "inspectorButton", 2), fn = M([X], fn);
var ma;
var no = class extends HTMLElement {
  static {
    __name(this, "no");
  }
  constructor() {
    super(...arguments);
    Za(this, ma, null);
  }
  connectedCallback() {
    let { signal: e } = Ka(this, ma, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Xa(this, ma)) == null || e.abort();
  }
  update() {
    Y(U`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    Fs(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), pr(e) && (e.resizeable = true), dc(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => Xe(e));
  }
  newOperation(e) {
    let n = e.target;
    this.assertOperation(n);
    let s = n.cloneNode(false);
    this.assertOperation(s), dc(n) && n.disableHelp(), this.prepend(s), this.initOperation(s);
  }
  deleteOperation(e) {
    let n = e.target;
    this.assertOperation(n), this.removeChild(n);
  }
  assertOperation(e) {
    if (!Xe(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
};
ma = /* @__PURE__ */ new WeakMap(), u(no, "PaletteDropzoneElement"), no = M([X], no);
function Oc(t, r, e, n) {
  function s(a) {
    return a instanceof e ? a : new e(function(p) {
      p(a);
    });
  }
  __name(s, "s");
  return u(s, "adopt"), new (e || (e = Promise))(function(a, p) {
    function v(h) {
      try {
        d(n.next(h));
      } catch (y) {
        p(y);
      }
    }
    __name(v, "v");
    u(v, "fulfilled");
    function m(h) {
      try {
        d(n.throw(h));
      } catch (y) {
        p(y);
      }
    }
    __name(m, "m");
    u(m, "rejected");
    function d(h) {
      h.done ? a(h.value) : s(h.value).then(v, m);
    }
    __name(d, "d");
    u(d, "step"), d((n = n.apply(t, r || [])).next());
  });
}
__name(Oc, "Oc");
u(Oc, "__awaiter");
function Mc(t, r) {
  var e = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, s, a, p;
  return p = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function v(d) {
    return function(h) {
      return m([d, h]);
    };
  }
  __name(v, "v");
  function m(d) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, s && (a = d[0] & 2 ? s.return : d[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, d[1])).done)
          return a;
        switch (s = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
          case 0:
          case 1:
            a = d;
            break;
          case 4:
            return e.label++, { value: d[1], done: false };
          case 5:
            e.label++, s = d[1], d = [0];
            continue;
          case 7:
            d = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (a = e.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
              e = 0;
              continue;
            }
            if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
              e.label = d[1];
              break;
            }
            if (d[0] === 6 && e.label < a[1]) {
              e.label = a[1], a = d;
              break;
            }
            if (a && e.label < a[2]) {
              e.label = a[2], e.ops.push(d);
              break;
            }
            a[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        d = r.call(t, e);
      } catch (h) {
        d = [6, h], s = 0;
      } finally {
        n = a = 0;
      }
    if (d[0] & 5)
      throw d[1];
    return { value: d[0] ? d[1] : void 0, done: true };
  }
  __name(m, "m");
}
__name(Mc, "Mc");
u(Mc, "__generator");
function vl(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), s, a = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(s = n.next()).done; )
      a.push(s.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      s && !s.done && (e = n.return) && e.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return a;
}
__name(vl, "vl");
u(vl, "__read");
function gi(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, s = r.length, a; n < s; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
__name(gi, "gi");
u(gi, "__spreadArray");
var k0 = { withStackTrace: false };
var xm = u(function(t, r, e) {
  e === void 0 && (e = k0);
  var n = r.isOk() ? { type: "Ok", value: r.value } : { type: "Err", value: r.error }, s = e.withStackTrace ? new Error().stack : void 0;
  return { data: n, message: t, stack: s };
}, "createNeverThrowError");
var io = function() {
  function t(r) {
    this._promise = r;
  }
  __name(t, "t");
  return u(t, "ResultAsync"), t.fromSafePromise = function(r) {
    var e = r.then(function(n) {
      return new mi(n);
    });
    return new t(e);
  }, t.fromPromise = function(r, e) {
    var n = r.then(function(s) {
      return new mi(s);
    }).catch(function(s) {
      return new vi(e(s));
    });
    return new t(n);
  }, t.combine = function(r) {
    return N0(r);
  }, t.combineWithAllErrors = function(r) {
    return _0(r);
  }, t.prototype.map = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Oc(e, void 0, void 0, function() {
        var s;
        return Mc(this, function(a) {
          switch (a.label) {
            case 0:
              return n.isErr() ? [2, new vi(n.error)] : (s = mi.bind, [4, r(n.value)]);
            case 1:
              return [2, new (s.apply(mi, [void 0, a.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.mapErr = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Oc(e, void 0, void 0, function() {
        var s;
        return Mc(this, function(a) {
          switch (a.label) {
            case 0:
              return n.isOk() ? [2, new mi(n.value)] : (s = vi.bind, [4, r(n.error)]);
            case 1:
              return [2, new (s.apply(vi, [void 0, a.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.andThen = function(r) {
    return new t(this._promise.then(function(e) {
      if (e.isErr())
        return new vi(e.error);
      var n = r(e.value);
      return n instanceof t ? n._promise : n;
    }));
  }, t.prototype.orElse = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Oc(e, void 0, void 0, function() {
        return Mc(this, function(s) {
          return n.isErr() ? [2, r(n.error)] : [2, new mi(n.value)];
        });
      });
    }));
  }, t.prototype.match = function(r, e) {
    return this._promise.then(function(n) {
      return n.match(r, e);
    });
  }, t.prototype.unwrapOr = function(r) {
    return this._promise.then(function(e) {
      return e.unwrapOr(r);
    });
  }, t.prototype.then = function(r, e) {
    return this._promise.then(r, e);
  }, t;
}();
var wm = u(function(t) {
  return new io(Promise.resolve(new vi(t)));
}, "errAsync");
var b2 = io.fromPromise;
var y2 = io.fromSafePromise;
var D0 = u(function(t) {
  return function(r) {
    return gi(gi([], vl(r), false), [t], false);
  };
}, "appendValueToEndOfList");
var Em = u(function(t) {
  return t.reduce(function(r, e) {
    return r.isOk() ? e.isErr() ? yi(e.error) : r.map(D0(e.value)) : r;
  }, bi([]));
}, "combineResultList");
var N0 = u(function(t) {
  return io.fromSafePromise(Promise.all(t)).andThen(Em);
}, "combineResultAsyncList");
var Sm = u(function(t) {
  return t.reduce(function(r, e) {
    return e.isErr() ? r.isErr() ? yi(gi(gi([], vl(r.error), false), [e.error], false)) : yi([e.error]) : r.isErr() ? r : bi(gi(gi([], vl(r.value), false), [e.value], false));
  }, bi([]));
}, "combineResultListWithAllErrors");
var _0 = u(function(t) {
  return io.fromSafePromise(Promise.all(t)).andThen(Sm);
}, "combineResultAsyncListWithAllErrors");
var va;
(function(t) {
  function r(s, a) {
    return function() {
      for (var p = [], v = 0; v < arguments.length; v++)
        p[v] = arguments[v];
      try {
        var m = s.apply(void 0, gi([], vl(p), false));
        return bi(m);
      } catch (d) {
        return yi(a ? a(d) : d);
      }
    };
  }
  __name(r, "r");
  u(r, "fromThrowable"), t.fromThrowable = r;
  function e(s) {
    return Em(s);
  }
  __name(e, "e");
  u(e, "combine"), t.combine = e;
  function n(s) {
    return Sm(s);
  }
  __name(n, "n");
  u(n, "combineWithAllErrors"), t.combineWithAllErrors = n;
})(va || (va = {}));
var bi = u(function(t) {
  return new mi(t);
}, "ok");
var yi = u(function(t) {
  return new vi(t);
}, "err");
var mi = function() {
  function t(r) {
    this.value = r;
  }
  __name(t, "t");
  return u(t, "Ok"), t.prototype.isOk = function() {
    return true;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return bi(r(this.value));
  }, t.prototype.mapErr = function(r) {
    return bi(this.value);
  }, t.prototype.andThen = function(r) {
    return r(this.value);
  }, t.prototype.orElse = function(r) {
    return bi(this.value);
  }, t.prototype.asyncAndThen = function(r) {
    return r(this.value);
  }, t.prototype.asyncMap = function(r) {
    return io.fromSafePromise(r(this.value));
  }, t.prototype.unwrapOr = function(r) {
    return this.value;
  }, t.prototype.match = function(r, e) {
    return r(this.value);
  }, t.prototype._unsafeUnwrap = function(r) {
    return this.value;
  }, t.prototype._unsafeUnwrapErr = function(r) {
    throw xm("Called `_unsafeUnwrapErr` on an Ok", this, r);
  }, t;
}();
var vi = function() {
  function t(r) {
    this.error = r;
  }
  __name(t, "t");
  return u(t, "Err"), t.prototype.isOk = function() {
    return false;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return yi(this.error);
  }, t.prototype.mapErr = function(r) {
    return yi(r(this.error));
  }, t.prototype.andThen = function(r) {
    return yi(this.error);
  }, t.prototype.orElse = function(r) {
    return r(this.error);
  }, t.prototype.asyncAndThen = function(r) {
    return wm(this.error);
  }, t.prototype.asyncMap = function(r) {
    return wm(this.error);
  }, t.prototype.unwrapOr = function(r) {
    return r;
  }, t.prototype.match = function(r, e) {
    return e(this.error);
  }, t.prototype._unsafeUnwrap = function(r) {
    throw xm("Called `_unsafeUnwrap` on an Err", this, r);
  }, t.prototype._unsafeUnwrapErr = function(r) {
    return this.error;
  }, t;
}();
var w2 = va.fromThrowable;
var se = class extends pe(HTMLElement) {
  static {
    __name(this, "se");
  }
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
    this.quantumCircuitMachine = mt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = ut(this.quantumCircuitMachine).onTransition((e) => {
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
    for (let s of this.steps)
      s.wireCount > 0 && s.wireCount > n && (e = s, n = s.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let n = 0; n < e; n++)
      this.append(new pt());
  }
  stepAt(e) {
    let n = this.steps[e];
    return B.notNull(n), n;
  }
  addShadowStepAfter(e) {
    let n = new pt();
    n.shadow = true;
    for (let s = 0; s < this.wireCount; s++)
      n.appendDropzone();
    if (e === -1)
      this.prepend(n);
    else {
      let s = this.steps[e];
      B.notNull(s.parentElement), s.parentElement.insertBefore(n, s.nextSibling);
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
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step:update", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateChangedWire), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateChangedWire), this.addEventListener("circuit-step:delete-qpu-operation", this.updateStep), this.addEventListener("circuit-step:delete-qpu-operation", this.updateChangedWire), this.addEventListener("circuit-step:resize-qpu-operation", this.updateStep), fe("quantum-circuit:init", {}, this);
  }
  attributeChangedCallback(e, n, s) {
    n !== s && (e === "data-editing" && (s !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && s !== null && this.makeOperationsHoverable(), e === "data-json" && s !== "" && s !== null && (this.loadFromJson(s), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let n = e.target;
    this.updateStepOperationAttributes(n);
  }
  updateStepOperationAttributes(e) {
    e.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    fe("quantum-circuit:mouseleave", {}, this);
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new $t();
      return s && a.disable(), a;
    }, ...n), this.resize(), this;
  }
  x(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Kt();
      return s && a.disable(), a;
    }, ...n), this;
  }
  y(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Jt();
      return s && a.disable(), a;
    }, ...n), this;
  }
  z(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Qt();
      return s && a.disable(), a;
    }, ...n), this;
  }
  phase(...e) {
    let n = "", s, a;
    if (typeof e[0] == "number")
      s = e;
    else if (typeof e[0] == "string")
      n = e[0], s = e.slice(1);
    else {
      let v = e[0];
      s = v.targets, a = v.disabled;
    }
    let p = this.applyOperationToTargets(() => {
      let v = new Ft();
      return v.angle = n, a && v.disable(), v;
    }, ...s);
    return s.length > 1 && this.updateStepOperationAttributes(p), this;
  }
  s(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new ir();
      return s && a.disable(), a;
    }, ...n), this.resize(), this;
  }
  sDagger(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new nr();
      return s && a.disable(), a;
    }, ...n), this.resize(), this;
  }
  t(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Zt();
      return s && a.disable(), a;
    }, ...n), this.resize(), this;
  }
  tDagger(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new or();
      return s && a.disable(), a;
    }, ...n), this.resize(), this;
  }
  rnot(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Ut();
      return s && a.disable(), a;
    }, ...n), this;
  }
  rx(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Wt();
      return s && a.disable(), a;
    }, ...n), this;
  }
  ry(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Vt();
      return s && a.disable(), a;
    }, ...n), this;
  }
  rz(...e) {
    let n, s;
    if (typeof e[0] == "number")
      n = e;
    else {
      let a = e[0];
      n = a.targets, s = a.disabled;
    }
    return this.applyOperationToTargets(() => {
      let a = new Yt();
      return s && a.disable(), a;
    }, ...n), this;
  }
  qft(e, ...n) {
    let s;
    return typeof n[0] == "number" ? s = n : s = n[0].targets, this.applyOperationToTargets(() => {
      let a = new hr();
      return a.span = e, a;
    }, ...s), this.resize(), this;
  }
  qftDagger(e, ...n) {
    let s;
    return typeof n[0] == "number" ? s = n : s = n[0].targets, this.applyOperationToTargets(() => {
      let a = new fr();
      return a.span = e, a;
    }, ...s), this.resize(), this;
  }
  swap(...e) {
    let n = this.applyOperationToTargets(() => new Xt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  control(...e) {
    let n = this.applyOperationToTargets(() => new kt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new et(), ...e), this;
  }
  write(e, ...n) {
    return this.applyOperationToTargets(() => {
      let s = new Dt();
      return s.value = e, s;
    }, ...n), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new qt(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...n) {
    let s = Math.max(...n) + 1, a = this.appendStepWithDropzones(s);
    for (let p of n) {
      let v = e();
      a.dropzoneAt(p).put(v);
    }
    return a;
  }
  ch(e, n) {
    return this.controlledU($t, e, n), this;
  }
  cnot(e, n) {
    return this.controlledU(Kt, e, n), this.resize(), this;
  }
  cy(e, n) {
    return this.controlledU(Jt, e, n), this;
  }
  cz(e, n) {
    return this.controlledU(Qt, e, n), this;
  }
  cphase(e, n) {
    return this.controlledU(Ft, e, n), this;
  }
  ct(e, n) {
    return this.controlledU(Zt, e, n), this;
  }
  crnot(e, n) {
    return this.controlledU(Ut, e, n), this;
  }
  crx(e, n) {
    return this.controlledU(Wt, e, n), this;
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
    let n = Math.max(...e) + 1, s = this.appendStepWithDropzones(n);
    for (let a of e)
      s.dropzoneAt(a).put(new kt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(s), this;
  }
  controlledU(e, n, s) {
    let a = [].concat(n), p = [].concat(s), v = a.concat(p), m = Math.max(...v) + 1, d = this.appendStepWithDropzones(m);
    for (let h of a)
      d.dropzoneAt(h).put(new kt());
    for (let h of p)
      d.dropzoneAt(h).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(d);
  }
  appendStep() {
    let e = new pt(), n = this.blocks.slice(-1)[0] || null;
    return n === null || n.finalized ? this.append(e) : n.append(e), e;
  }
  appendStepWithDropzones(e) {
    let n = new pt();
    this.append(n);
    for (let s = 0; s < e; s++) {
      let a = new de();
      n.append(a);
    }
    return n;
  }
  updateAllWires() {
    let e = this.steps[0];
    if (e === void 0)
      return;
    let n = e.dropzones.length;
    for (let s = 0; s < n; s++)
      this.updateWire(s);
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
    let s = null, a = u(() => ({ message: "Parse Error" }), "toParseError"), v = va.fromThrowable(JSON.parse, a)(e);
    if (v.isOk())
      s = v.value;
    else {
      console.error(v.error.message), console.error(e);
      return;
    }
    this.circuitTitle = (s.title || "").trim();
    let m = false;
    for (let d of s.cols) {
      let h = this.appendStep();
      m && (h.keep = true, m = false);
      let y = [];
      for (let w of d) {
        switch (true) {
          case /^\|0>$/.test(w): {
            let x = new Dt();
            x.value = "0", y.push(x), h.append(new de());
            break;
          }
          case /^\|1>$/.test(w): {
            let x = new Dt();
            x.value = "1", y.push(x), h.append(new de());
            break;
          }
          case /^H/.test(w): {
            let x = new $t();
            x.if = this.ifVariable(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case (/^X$/.test(w) || /^X<(.+)$/.test(w)): {
            let x = new Kt();
            x.if = w.slice(2).trim(), y.push(x), h.append(new de());
            break;
          }
          case /^Y/.test(w): {
            let x = new Jt();
            x.if = this.ifVariable(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case /^Z/.test(w): {
            let x = new Qt();
            x.if = this.ifVariable(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case /^P/.test(w): {
            let x = new Ft();
            x.angle = this.angleParameter(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case /^T†/.test(w): {
            let x = new or();
            x.if = this.ifVariable(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case /^T/.test(w): {
            let x = new Zt();
            x.if = this.ifVariable(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case /^X\^½/.test(w): {
            let x = new Ut();
            x.if = this.ifVariable(w.slice(3)), y.push(x), h.append(new de());
            break;
          }
          case /^Rx/.test(w): {
            let x = new Wt();
            x.angle = this.angleParameter(w.slice(2)), y.push(x), h.append(new de());
            break;
          }
          case /^Ry/.test(w): {
            let x = new Vt();
            x.angle = this.angleParameter(w.slice(2)), y.push(x), h.append(new de());
            break;
          }
          case /^Rz/.test(w): {
            let x = new Yt();
            x.angle = this.angleParameter(w.slice(2)), y.push(x), h.append(new de());
            break;
          }
          case /^…/.test(w): {
            let x = new mr();
            y.push(x), h.append(new de());
            break;
          }
          case /^QFT\d/.test(w): {
            let x = new hr(), T = parseInt(w.slice(3), 10);
            x.span = T, y.push(x);
            for (let C = 0; C < T; C++)
              h.append(new de());
            break;
          }
          case /^QFT†\d/.test(w): {
            let x = new fr(), T = parseInt(w.slice(4), 10);
            x.span = T, y.push(x), h.append(new de());
            for (let C = 0; C < T; C++)
              h.append(new de());
            break;
          }
          case /^Swap$/.test(w): {
            let x = new Xt();
            y.push(x), h.append(new de());
            break;
          }
          case /^S†/.test(w): {
            let x = new nr();
            x.if = this.ifVariable(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case /^S/.test(w): {
            let x = new ir();
            x.if = this.ifVariable(w.slice(1)), y.push(x), h.append(new de());
            break;
          }
          case /^•$/.test(w): {
            let x = new kt();
            y.push(x), h.append(new de());
            break;
          }
          case /^◦$/.test(w): {
            let x = new dr();
            y.push(x), h.append(new de());
            break;
          }
          case /^Bloch$/.test(w): {
            let x = new et();
            y.push(x), h.append(new de());
            break;
          }
          case /^Measure/.test(w): {
            let x = new qt(), T = ((/^>(.+)$/.exec(w.slice(7)) || [])[1] || "").trim();
            x.flag = T, y.push(x), h.append(new de());
            break;
          }
          case /^[[{](.+)$/.test(w): {
            let x = w.slice(1);
            h.remove(), n = new Wr(), n.comment = x, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
            break;
          }
          case /^[\]}]$/.test(w): {
            h.remove(), n.finalize(), m = true;
            break;
          }
          default: {
            if (w !== 1)
              throw new Error(`Unknown operation: ${w}`);
            h.append(new de()), y.push(null);
          }
        }
        for (let [x, T] of Object.entries(y))
          T !== null && h.dropzoneAt(parseInt(x)).put(T);
        h.updateOperationAttributes();
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
    for (let s of this.steps) {
      let a = n - s.wireCount;
      for (let p = 0; p < a; p++)
        s.appendDropzone();
    }
  }
  updateWire(e) {
    let n = false;
    for (let s of this.steps) {
      let a = s.dropzoneAt(e);
      if (a.inputWireQuantum = n, a.operationName === "write-gate")
        a.inputWireQuantum = n, a.outputWireQuantum = true, n = true;
      else if (a.operationName === "measurement-gate")
        a.inputWireQuantum = n, a.outputWireQuantum = false, n = false;
      else if (a.operationName === "swap-gate") {
        let p = s.dropzones.filter((v) => v.operationName === "swap-gate");
        if (p.length === 2) {
          let v = p.map((y) => s.bit(y)), m = s.bit(a), d = v[0] === m ? v[1] : v[0], h = s.dropzoneAt(d);
          a.inputWireQuantum = n, a.outputWireQuantum = h.inputWireQuantum, n = h.inputWireQuantum;
        } else
          a.inputWireQuantum = n, a.outputWireQuantum = n;
      } else
        a.inputWireQuantum = n, a.outputWireQuantum = n;
    }
  }
  updateChangedWire(e) {
    let n = e.target;
    if (!Vr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let s = e.detail.dropzone;
    if (!ha(s))
      throw new Error(`${s} isn't a circuit-dropzone.`);
    let a = n.dropzones.indexOf(s);
    B.need(a !== -1, "circuit-dropzone not found."), this.updateWire(a);
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
    let s = 1;
    pr(e) && (s = e.span);
    let a = e.dropzone;
    for (let [p, v] of Object.entries(this.steps)) {
      let m = parseInt(p);
      for (let [d, h] of Object.entries(v.dropzones)) {
        let y = parseInt(d), w = h.snapTarget, x = this.isVertical ? w.y : w.x, T = this.isVertical ? w.x : w.y;
        if (m === 0 && v.dropzones[y + s - 1] !== void 0) {
          let R = x - e.snapRange * 0.75;
          this.isVertical ? n.push({ x: T, y: R }) : n.push({ x: R, y: T }), this.snapTargets[R] === void 0 && (this.snapTargets[R] = {}), this.snapTargets[R][T] === void 0 && (this.snapTargets[R][T] = { dropzone: null, stepIndex: -1, wireIndex: y });
        }
        if (s === 1)
          (h === a || !h.occupied) && n.push(w);
        else if (!h.occupied && y + s <= v.dropzones.length && n.push(w), h === a) {
          n.push(w);
          for (let R = 1; R < s && y + R < v.dropzones.length; R++) {
            let _ = v.dropzones[y + R];
            B.notNull(_), n.push(_.snapTarget);
          }
        }
        let C = x + e.snapRange * 0.75;
        v.dropzones[y + s - 1] !== void 0 && (this.isVertical ? n.push({ x: T, y: C }) : n.push({ x: C, y: T })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][T] === void 0 && (this.snapTargets[C][T] = { dropzone: null, stepIndex: m, wireIndex: y }), this.snapTargets[x] === void 0 && (this.snapTargets[x] = {}), this.snapTargets[x][T] === void 0 && (this.snapTargets[x][T] = { dropzone: h, stepIndex: null, wireIndex: y });
      }
    }
    e.snapTargets = n;
  }
  setResizeHandleSnapTargets(e) {
    if (!pr(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!ha(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let n = e.dropzone.circuitStep;
    B.notNull(n);
    let s = n.freeDropzones, a = e.dropzone;
    s.push(a);
    let p = [];
    this.resizeHandleSnapTargets = {};
    for (let [v, m] of Object.entries(n.dropzones)) {
      let d = m.resizeHandleSnapTarget, h = this.isVertical ? d.y : d.x, y = this.isVertical ? d.x : d.y, w = parseInt(v) % this.wireCount;
      if (m.occupied || p.push(d), m === a) {
        p.push(d);
        let x = e.span;
        for (let T = 1; T < x; T++) {
          let C = n.dropzones[parseInt(v) + T];
          B.notNull(C), p.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[h] === void 0 && (this.resizeHandleSnapTargets[h] = {}), this.resizeHandleSnapTargets[h][y] === void 0 && (this.resizeHandleSnapTargets[h][y] = { dropzone: m, stepIndex: null, wireIndex: w });
    }
    e.resizeHandleSnapTargets = p;
  }
  updateSnapTargets(e) {
    let n = e[0];
    B.notNull(n);
    let s = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [a, p] of Object.entries(this.snapTargets))
      if (!(parseInt(a) <= s))
        for (let v in p) {
          let m = p[v];
          m.stepIndex !== null && (m.stepIndex += 1);
        }
    for (let [a, p] of Object.entries(e)) {
      let v = p.snapTarget, m = this.isVertical ? v.y : v.x, d = this.isVertical ? v.x : v.y;
      B.notNull(this.snapTargets[m]), this.snapTargets[m][d] = { dropzone: p, stepIndex: null, wireIndex: parseInt(a) };
    }
  }
  serialize() {
    return this.steps.map((e) => e.serialize());
  }
  get urlJson() {
    let e = new URL(location.href, window.location.origin), n = decodeURIComponent(e.pathname), s = n.lastIndexOf("/");
    return n.substring(s + 1);
  }
  clear() {
    history.pushState("", "", encodeURIComponent('{"cols":[]}')), location.reload();
  }
  toJson() {
    let e = false, n = [];
    for (let s of this.nonEmptySteps) {
      if (s.isInBlock) {
        if (!e) {
          let a = s.block;
          n.push(`["[${a.comment}"]`), e = true;
        }
      } else
        e && (n.push('["]"]'), e = false);
      n.push(s.toJson());
    }
    return e && n.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${n.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${n.join(",")}]}`;
  }
};
u(se, "QuantumCircuitElement"), M([D], se.prototype, "minStepCount", 2), M([D], se.prototype, "minWireCount", 2), M([D], se.prototype, "editing", 2), M([D], se.prototype, "updateUrl", 2), M([D], se.prototype, "json", 2), M([D], se.prototype, "circuitTitle", 2), M([D], se.prototype, "debug", 2), M([D], se.prototype, "chDisabled", 2), M([D], se.prototype, "chMaxControlGates", 2), M([D], se.prototype, "chMaxTargetGates", 2), M([D], se.prototype, "cnotDisabled", 2), M([D], se.prototype, "cnotMaxControlGates", 2), M([D], se.prototype, "cnotMaxTargetGates", 2), M([D], se.prototype, "cyDisabled", 2), M([D], se.prototype, "cyMaxControlGates", 2), M([D], se.prototype, "cyMaxTargetGates", 2), M([D], se.prototype, "czDisabled", 2), M([D], se.prototype, "czMaxControlGates", 2), M([D], se.prototype, "czMaxTargetGates", 2), M([D], se.prototype, "cphaseDisabled", 2), M([D], se.prototype, "cphaseMaxControlGates", 2), M([D], se.prototype, "cphaseMaxTargetGates", 2), M([D], se.prototype, "ctDisabled", 2), M([D], se.prototype, "ctMaxControlGates", 2), M([D], se.prototype, "ctMaxTargetGates", 2), M([D], se.prototype, "crnotDisabled", 2), M([D], se.prototype, "crnotMaxControlGates", 2), M([D], se.prototype, "crnotMaxTargetGates", 2), M([D], se.prototype, "crxDisabled", 2), M([D], se.prototype, "crxMaxControlGates", 2), M([D], se.prototype, "crxMaxTargetGates", 2), M([D], se.prototype, "cryDisabled", 2), M([D], se.prototype, "cryMaxControlGates", 2), M([D], se.prototype, "cryMaxTargetGates", 2), M([D], se.prototype, "crzDisabled", 2), M([D], se.prototype, "crzMaxControlGates", 2), M([D], se.prototype, "crzMaxTargetGates", 2), M([D], se.prototype, "cswapDisabled", 2), M([D], se.prototype, "cswapMaxControlGates", 2), M([D], se.prototype, "swapDisabled", 2), M([D], se.prototype, "controlControlDisabled", 2), M([D], se.prototype, "controlControlMaxTargetGates", 2), M([D], se.prototype, "phasePhaseDisabled", 2), M([D], se.prototype, "phasePhaseMaxTargetGates", 2), M([ht], se.prototype, "blocks", 2), se = M([X], se);
var _r = class extends HTMLElement {
  static {
    __name(this, "_r");
  }
  constructor() {
    super(...arguments);
    this.updateUrl = false;
    this.backend = "";
  }
  connectedCallback() {
    this.worker = new Worker("/serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("draggable:delete", this.maybeUpdateUrl), this.addEventListener("draggable:delete", this.freshRun), this.addEventListener("menuable:menu-delete", this.maybeUpdateUrl), this.addEventListener("menuable:menu-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step:mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step:mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step:qpu-operation-snap", this.freshRun), this.addEventListener("circuit-step:qpu-operation-unsnap", this.freshRun), this.addEventListener("circuit-step:update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step:qpu-operation-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step:qpu-operation-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.freshRun), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(e) {
    var a;
    let n = e.data, s = this.activeStepIndex;
    switch (n.type) {
      case "step": {
        let p = this.circuit.stepAt(n.step);
        for (let v in n.blochVectors) {
          let m = parseInt(v), d = p.dropzoneAt(m).operation;
          if (im(d)) {
            let h = n.blochVectors[m];
            d.x = h[0], d.y = h[1], d.z = h[2];
          }
        }
        if (n.measuredBits) {
          let v = n.measuredBits;
          for (let m in v) {
            let d = parseInt(m), h = p.dropzoneAt(d).operation;
            om(h) && (h.value = v[d].toString());
          }
        }
        for (let v of p.dropzones) {
          let m = v.operation;
          dn(m) && m.if !== "" && (m.disabled = !n.flags[m.if]);
        }
        if (s === n.step) {
          let v = {};
          for (let m in n.amplitudes) {
            let d = n.amplitudes[m];
            v[m] = new zo(d[0], d[1]);
          }
          (a = this.circleNotation) == null || a.setAmplitudes(v);
        }
        break;
      }
      case "finish": {
        for (let p of this.runCircuitButtons)
          p.running = false;
        break;
      }
      default:
        throw new ft("Unknown service worker message", { data: n });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(e) {
    let n = this.activeStepIndex, s = this.circuit.serialize();
    B.need(s.length > 0, "non-zero step length");
    let a = this.circuit.toJson(), p = this.setCircleNotationQubitCount(), v = this.backend.trim();
    this.worker.postMessage({ qubitCount: p, stepIndex: n, circuitJson: a, invalidateCaches: e, steps: s, targets: this.circleNotation.visibleQubitCircleKets, backend: v !== "" ? v : null, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let e = Math.max(...this.circuit.steps.map((n) => n.maxOccupiedDropzoneBit));
    return e === 0 && (e = 1), this.circleNotation.qubitCount = e, e;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, n = this.circuit.breakpoint, s = e || n;
    return s === null && (s = this.circuit.stepAt(0), this.circuit.setBreakpoint(s)), this.circuit.fetchStepIndex(s);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    B.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
};
u(_r, "QuantumSimulatorElement"), M([D], _r.prototype, "updateUrl", 2), M([D], _r.prototype, "backend", 2), M([Me], _r.prototype, "circuit", 2), M([Me], _r.prototype, "circleNotation", 2), M([ht], _r.prototype, "runCircuitButtons", 2), _r = M([X], _r);

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
  zo as Complex
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

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

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
