var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var pg = Object.create;
var Co = Object.defineProperty;
var Op = Object.getOwnPropertyDescriptor;
var dg = Object.getOwnPropertyNames;
var Tp = Object.getOwnPropertySymbols;
var fg = Object.getPrototypeOf;
var Mp = Object.prototype.hasOwnProperty;
var hg = Object.prototype.propertyIsEnumerable;
var Cp = /* @__PURE__ */ __name((t, r, e) => r in t ? Co(t, r, { enumerable: true, configurable: true, writable: true, value: e }) : t[r] = e, "Cp");
var Ap = /* @__PURE__ */ __name((t, r) => {
  for (var e in r || (r = {}))
    Mp.call(r, e) && Cp(t, e, r[e]);
  if (Tp)
    for (var e of Tp(r))
      hg.call(r, e) && Cp(t, e, r[e]);
  return t;
}, "Ap");
var u = /* @__PURE__ */ __name((t, r) => Co(t, "name", { value: r, configurable: true }), "u");
var Tt = /* @__PURE__ */ __name((t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports), "Tt");
var mg = /* @__PURE__ */ __name((t, r, e, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let s of dg(r))
      !Mp.call(t, s) && s !== e && Co(t, s, { get: () => r[s], enumerable: !(n = Op(r, s)) || n.enumerable });
  return t;
}, "mg");
var jt = /* @__PURE__ */ __name((t, r, e) => (e = t != null ? pg(fg(t)) : {}, mg(r || !t || !t.__esModule ? Co(e, "default", { value: t, enumerable: true }) : e, t)), "jt");
var M = /* @__PURE__ */ __name((t, r, e, n) => {
  for (var s = n > 1 ? void 0 : n ? Op(r, e) : r, a = t.length - 1, p; a >= 0; a--)
    (p = t[a]) && (s = (n ? p(r, e, s) : p(s)) || s);
  return n && s && Co(r, e, s), s;
}, "M");
var Ip = /* @__PURE__ */ __name((t, r, e) => {
  if (!r.has(t))
    throw TypeError("Cannot " + e);
}, "Ip");
var Ka = /* @__PURE__ */ __name((t, r, e) => (Ip(t, r, "read from private field"), e ? e.call(t) : r.get(t)), "Ka");
var Ja = /* @__PURE__ */ __name((t, r, e) => {
  if (r.has(t))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(t) : r.set(t, e);
}, "Ja");
var Qa = /* @__PURE__ */ __name((t, r, e, n) => (Ip(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e), "Qa");
var zp = Tt((Jl, Pp) => {
  (function(t) {
    "use strict";
    var r = 2e3, e = { s: 1, n: 0, d: 1 };
    function n(w, S) {
      if (isNaN(w = parseInt(w, 10)))
        throw g.InvalidParameter;
      return w * S;
    }
    __name(n, "n");
    u(n, "assign");
    function s(w, S) {
      if (S === 0)
        throw g.DivisionByZero;
      var T = Object.create(g.prototype);
      T.s = w < 0 ? -1 : 1, w = w < 0 ? -w : w;
      var C = f(w, S);
      return T.n = w / C, T.d = S / C, T;
    }
    __name(s, "s");
    u(s, "newFraction");
    function a(w) {
      for (var S = {}, T = w, C = 2, R = 4; R <= T; ) {
        for (; T % C === 0; )
          T /= C, S[C] = (S[C] || 0) + 1;
        R += 1 + 2 * C++;
      }
      return T !== w ? T > 1 && (S[T] = (S[T] || 0) + 1) : S[w] = (S[w] || 0) + 1, S;
    }
    __name(a, "a");
    u(a, "factorize");
    var p = u(function(w, S) {
      var T = 0, C = 1, R = 1, _ = 0, L = 0, $ = 0, I = 1, ee = 1, z = 0, H = 1, te = 1, Q = 1, ue = 1e7, K;
      if (w != null)
        if (S !== void 0) {
          if (T = w, C = S, R = T * C, T % 1 !== 0 || C % 1 !== 0)
            throw g.NonIntegerParameter;
        } else
          switch (typeof w) {
            case "object": {
              if ("d" in w && "n" in w)
                T = w.n, C = w.d, "s" in w && (T *= w.s);
              else if (0 in w)
                T = w[0], 1 in w && (C = w[1]);
              else
                throw g.InvalidParameter;
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
                (isNaN(w) || isNaN(S)) && (C = T = NaN);
              break;
            }
            case "string": {
              if (H = w.match(/\d+|./g), H === null)
                throw g.InvalidParameter;
              if (H[z] === "-" ? (R = -1, z++) : H[z] === "+" && z++, H.length === z + 1 ? L = n(H[z++], R) : H[z + 1] === "." || H[z] === "." ? (H[z] !== "." && (_ = n(H[z++], R)), z++, (z + 1 === H.length || H[z + 1] === "(" && H[z + 3] === ")" || H[z + 1] === "'" && H[z + 3] === "'") && (L = n(H[z], R), I = Math.pow(10, H[z].length), z++), (H[z] === "(" && H[z + 2] === ")" || H[z] === "'" && H[z + 2] === "'") && ($ = n(H[z + 1], R), ee = Math.pow(10, H[z + 1].length) - 1, z += 3)) : H[z + 1] === "/" || H[z + 1] === ":" ? (L = n(H[z], R), I = n(H[z + 2], 1), z += 3) : H[z + 3] === "/" && H[z + 1] === " " && (_ = n(H[z], R), L = n(H[z + 2], R), I = n(H[z + 4], 1), z += 5), H.length <= z) {
                C = I * ee, R = T = $ + C * _ + ee * L;
                break;
              }
            }
            default:
              throw g.InvalidParameter;
          }
      if (C === 0)
        throw g.DivisionByZero;
      e.s = R < 0 ? -1 : 1, e.n = Math.abs(T), e.d = Math.abs(C);
    }, "parse");
    function v(w, S, T) {
      for (var C = 1; S > 0; w = w * w % T, S >>= 1)
        S & 1 && (C = C * w % T);
      return C;
    }
    __name(v, "v");
    u(v, "modpow");
    function m(w, S) {
      for (; S % 2 === 0; S /= 2)
        ;
      for (; S % 5 === 0; S /= 5)
        ;
      if (S === 1)
        return 0;
      for (var T = 10 % S, C = 1; T !== 1; C++)
        if (T = T * 10 % S, C > r)
          return 0;
      return C;
    }
    __name(m, "m");
    u(m, "cycleLen");
    function d(w, S, T) {
      for (var C = 1, R = v(10, T, S), _ = 0; _ < 300; _++) {
        if (C === R)
          return _;
        C = C * 10 % S, R = R * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    u(d, "cycleStart");
    function f(w, S) {
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
    __name(f, "f");
    u(f, "gcd");
    function g(w, S) {
      if (p(w, S), this instanceof g)
        w = f(e.d, e.n), this.s = e.s, this.n = e.n / w, this.d = e.d / w;
      else
        return s(e.s * e.n, e.d);
    }
    __name(g, "g");
    u(g, "Fraction"), g.DivisionByZero = new Error("Division by Zero"), g.InvalidParameter = new Error("Invalid argument"), g.NonIntegerParameter = new Error("Parameters must be integer"), g.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return s(this.n, this.d);
    }, neg: function() {
      return s(-this.s * this.n, this.d);
    }, add: function(w, S) {
      return p(w, S), s(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(w, S) {
      return p(w, S), s(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(w, S) {
      return p(w, S), s(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(w, S) {
      return p(w, S), s(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return s(this.s * this.n, this.d);
    }, mod: function(w, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new g(NaN);
      if (w === void 0)
        return s(this.s * this.n % this.d, 1);
      if (p(w, S), e.n === 0 && this.d === 0)
        throw g.DivisionByZero;
      return s(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(w, S) {
      return p(w, S), s(f(e.n, this.n) * f(e.d, this.d), e.d * this.d);
    }, lcm: function(w, S) {
      return p(w, S), e.n === 0 && this.n === 0 ? s(0, 1) : s(e.n * this.n, f(e.n, this.n) * f(e.d, this.d));
    }, ceil: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : s(Math.ceil(w * this.s * this.n / this.d), w);
    }, floor: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : s(Math.floor(w * this.s * this.n / this.d), w);
    }, round: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : s(Math.round(w * this.s * this.n / this.d), w);
    }, inverse: function() {
      return s(this.s * this.d, this.n);
    }, pow: function(w, S) {
      if (p(w, S), e.d === 1)
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
    }, equals: function(w, S) {
      return p(w, S), this.s * this.n * e.d === e.s * e.n * this.d;
    }, compare: function(w, S) {
      p(w, S);
      var T = this.s * this.n * e.d - e.s * e.n * this.d;
      return (0 < T) - (T < 0);
    }, simplify: function(w) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      w = w || 1e-3;
      for (var S = this.abs(), T = S.toContinued(), C = 1; C < T.length; C++) {
        for (var R = s(T[C - 1], 1), _ = C - 2; _ >= 0; _--)
          R = R.inverse().add(T[_]);
        if (R.sub(S).abs().valueOf() < w)
          return R.mul(this.s);
      }
      return this;
    }, divisible: function(w, S) {
      return p(w, S), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(w) {
      var S, T = "", C = this.n, R = this.d;
      return this.s < 0 && (T += "-"), R === 1 ? T += C : (w && (S = Math.floor(C / R)) > 0 && (T += S, T += " ", C %= R), T += C, T += "/", T += R), T;
    }, toLatex: function(w) {
      var S, T = "", C = this.n, R = this.d;
      return this.s < 0 && (T += "-"), R === 1 ? T += C : (w && (S = Math.floor(C / R)) > 0 && (T += S, C %= R), T += "\\frac{", T += C, T += "}{", T += R, T += "}"), T;
    }, toContinued: function() {
      var w, S = this.n, T = this.d, C = [];
      if (isNaN(S) || isNaN(T))
        return C;
      do
        C.push(Math.floor(S / T)), w = S % T, S = T, T = w;
      while (S !== 1);
      return C;
    }, toString: function(w) {
      var S = this.n, T = this.d;
      if (isNaN(S) || isNaN(T))
        return "NaN";
      w = w || 15;
      var C = m(S, T), R = d(S, T, C), _ = this.s < 0 ? "-" : "";
      if (_ += S / T | 0, S %= T, S *= 10, S && (_ += "."), C) {
        for (var L = R; L--; )
          _ += S / T | 0, S %= T, S *= 10;
        _ += "(";
        for (var L = C; L--; )
          _ += S / T | 0, S %= T, S *= 10;
        _ += ")";
      } else
        for (var L = w; S && L--; )
          _ += S / T | 0, S %= T, S *= 10;
      return _;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return g;
    }) : typeof Jl == "object" ? (Object.defineProperty(g, "__esModule", { value: true }), g.default = g, g.Fraction = g, Pp.exports = g) : t.Fraction = g;
  })(Jl);
});
var jp = Tt((Y0, Gp) => {
  "use strict";
  var _p = u((t = 0) => (r) => `\x1B[${38 + t};5;${r}m`, "wrapAnsi256"), Lp = u((t = 0) => (r, e, n) => `\x1B[${38 + t};2;${r};${e};${n}m`, "wrapAnsi16m");
  function wg() {
    let t = /* @__PURE__ */ new Map(), r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    r.color.gray = r.color.blackBright, r.bgColor.bgGray = r.bgColor.bgBlackBright, r.color.grey = r.color.blackBright, r.bgColor.bgGrey = r.bgColor.bgBlackBright;
    for (let [e, n] of Object.entries(r)) {
      for (let [s, a] of Object.entries(n))
        r[s] = { open: `\x1B[${a[0]}m`, close: `\x1B[${a[1]}m` }, n[s] = r[s], t.set(a[0], a[1]);
      Object.defineProperty(r, e, { value: n, enumerable: false });
    }
    return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi256 = _p(), r.color.ansi16m = Lp(), r.bgColor.ansi256 = _p(10), r.bgColor.ansi16m = Lp(10), Object.defineProperties(r, { rgbToAnsi256: { value: (e, n, s) => e === n && n === s ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(s / 255 * 5), enumerable: false }, hexToRgb: { value: (e) => {
      let n = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(e.toString(16));
      if (!n)
        return [0, 0, 0];
      let { colorString: s } = n.groups;
      s.length === 3 && (s = s.split("").map((p) => p + p).join(""));
      let a = Number.parseInt(s, 16);
      return [a >> 16 & 255, a >> 8 & 255, a & 255];
    }, enumerable: false }, hexToAnsi256: { value: (e) => r.rgbToAnsi256(...r.hexToRgb(e)), enumerable: false } }), r;
  }
  __name(wg, "wg");
  u(wg, "assembleStyles");
  Object.defineProperty(Gp, "exports", { enumerable: true, get: wg });
});
var Mo = Tt((Di) => {
  "use strict";
  Object.defineProperty(Di, "__esModule", { value: true });
  Di.printIteratorEntries = Eg;
  Di.printIteratorValues = Sg;
  Di.printListItems = Tg;
  Di.printObjectProperties = Cg;
  var xg = u((t, r) => {
    let e = Object.keys(t), n = r !== null ? e.sort(r) : e;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((s) => {
      Object.getOwnPropertyDescriptor(t, s).enumerable && n.push(s);
    }), n;
  }, "getKeysOfEnumerableProperties");
  function Eg(t, r, e, n, s, a, p = ": ") {
    let v = "", m = 0, d = t.next();
    if (!d.done) {
      v += r.spacingOuter;
      let f = e + r.indent;
      for (; !d.done; ) {
        if (v += f, m++ === r.maxWidth) {
          v += "\u2026";
          break;
        }
        let g = a(d.value[0], r, f, n, s), w = a(d.value[1], r, f, n, s);
        v += g + p + w, d = t.next(), d.done ? r.min || (v += ",") : v += `,${r.spacingInner}`;
      }
      v += r.spacingOuter + e;
    }
    return v;
  }
  __name(Eg, "Eg");
  u(Eg, "printIteratorEntries");
  function Sg(t, r, e, n, s, a) {
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
  __name(Sg, "Sg");
  u(Sg, "printIteratorValues");
  function Tg(t, r, e, n, s, a) {
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
  __name(Tg, "Tg");
  u(Tg, "printListItems");
  function Cg(t, r, e, n, s, a) {
    let p = "", v = xg(t, r.compareKeys);
    if (v.length) {
      p += r.spacingOuter;
      let m = e + r.indent;
      for (let d = 0; d < v.length; d++) {
        let f = v[d], g = a(f, r, m, n, s), w = a(t[f], r, m, n, s);
        p += `${m + g}: ${w}`, d < v.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(Cg, "Cg");
  u(Cg, "printObjectProperties");
});
var qp = Tt((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.test = xn.serialize = xn.default = void 0;
  var Hp = Mo(), tu = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, Og = typeof tu == "function" && tu.for ? tu.for("jest.asymmetricMatcher") : 1267621, ts = " ", Bp = u((t, r, e, n, s, a) => {
    let p = t.toString();
    if (p === "ArrayContaining" || p === "ArrayNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + ts}[${(0, Hp.printListItems)(t.sample, r, e, n, s, a)}]`;
    if (p === "ObjectContaining" || p === "ObjectNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + ts}{${(0, Hp.printObjectProperties)(t.sample, r, e, n, s, a)}}`;
    if (p === "StringMatching" || p === "StringNotMatching" || p === "StringContaining" || p === "StringNotContaining")
      return p + ts + a(t.sample, r, e, n, s);
    if (typeof t.toAsymmetricMatcher != "function")
      throw new Error(`Asymmetric matcher ${t.constructor.name} does not implement toAsymmetricMatcher()`);
    return t.toAsymmetricMatcher();
  }, "serialize");
  xn.serialize = Bp;
  var $p = u((t) => t && t.$$typeof === Og, "test");
  xn.test = $p;
  var Mg = { serialize: Bp, test: $p }, Ag = Mg;
  xn.default = Ag;
});
var Yp = Tt((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: true });
  En.test = En.serialize = En.default = void 0;
  var Fp = Mo(), Ig = " ", Up = ["DOMStringMap", "NamedNodeMap"], Pg = /^(HTML\w*Collection|NodeList)$/, zg = u((t) => Up.indexOf(t) !== -1 || Pg.test(t), "testName"), Wp = u((t) => t && t.constructor && !!t.constructor.name && zg(t.constructor.name), "test");
  En.test = Wp;
  var Rg = u((t) => t.constructor.name === "NamedNodeMap", "isNamedNodeMap"), Vp = u((t, r, e, n, s, a) => {
    let p = t.constructor.name;
    return ++n > r.maxDepth ? `[${p}]` : (r.min ? "" : p + Ig) + (Up.indexOf(p) !== -1 ? `{${(0, Fp.printObjectProperties)(Rg(t) ? Array.from(t).reduce((v, m) => (v[m.name] = m.value, v), {}) : Ap({}, t), r, e, n, s, a)}}` : `[${(0, Fp.printListItems)(Array.from(t), r, e, n, s, a)}]`);
  }, "serialize");
  En.serialize = Vp;
  var Dg = { serialize: Vp, test: Wp }, kg = Dg;
  En.default = kg;
});
var Xp = Tt((ru) => {
  "use strict";
  Object.defineProperty(ru, "__esModule", { value: true });
  ru.default = Ng;
  function Ng(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  __name(Ng, "Ng");
  u(Ng, "escapeHTML");
});
var rs = Tt((rr) => {
  "use strict";
  Object.defineProperty(rr, "__esModule", { value: true });
  rr.printText = rr.printProps = rr.printElementAsLeaf = rr.printElement = rr.printComment = rr.printChildren = void 0;
  var Zp = _g(Xp());
  function _g(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(_g, "_g");
  u(_g, "_interopRequireDefault");
  var Lg = u((t, r, e, n, s, a, p) => {
    let v = n + e.indent, m = e.colors;
    return t.map((d) => {
      let f = r[d], g = p(f, e, v, s, a);
      return typeof f != "string" && (g.indexOf(`
`) !== -1 && (g = e.spacingOuter + v + g + e.spacingOuter + n), g = `{${g}}`), `${e.spacingInner + n + m.prop.open + d + m.prop.close}=${m.value.open}${g}${m.value.close}`;
    }).join("");
  }, "printProps");
  rr.printProps = Lg;
  var Gg = u((t, r, e, n, s, a) => t.map((p) => r.spacingOuter + e + (typeof p == "string" ? Kp(p, r) : a(p, r, e, n, s))).join(""), "printChildren");
  rr.printChildren = Gg;
  var Kp = u((t, r) => {
    let e = r.colors.content;
    return e.open + (0, Zp.default)(t) + e.close;
  }, "printText");
  rr.printText = Kp;
  var jg = u((t, r) => {
    let e = r.colors.comment;
    return `${e.open}<!--${(0, Zp.default)(t)}-->${e.close}`;
  }, "printComment");
  rr.printComment = jg;
  var Hg = u((t, r, e, n, s) => {
    let a = n.colors.tag;
    return `${a.open}<${t}${r && a.close + r + n.spacingOuter + s + a.open}${e ? `>${a.close}${e}${n.spacingOuter}${s}${a.open}</${t}` : `${r && !n.min ? "" : " "}/`}>${a.close}`;
  }, "printElement");
  rr.printElement = Hg;
  var Bg = u((t, r) => {
    let e = r.colors.tag;
    return `${e.open}<${t}${e.close} \u2026${e.open} />${e.close}`;
  }, "printElementAsLeaf");
  rr.printElementAsLeaf = Bg;
});
var nd = Tt((Sn) => {
  "use strict";
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.test = Sn.serialize = Sn.default = void 0;
  var ki = rs(), $g = 1, Jp = 3, Qp = 8, ed = 11, qg = /^((HTML|SVG)\w*)?Element$/, Fg = u((t) => {
    try {
      return typeof t.hasAttribute == "function" && t.hasAttribute("is");
    } catch (r) {
      return false;
    }
  }, "testHasAttribute"), Ug = u((t) => {
    let r = t.constructor.name, { nodeType: e, tagName: n } = t, s = typeof n == "string" && n.includes("-") || Fg(t);
    return e === $g && (qg.test(r) || s) || e === Jp && r === "Text" || e === Qp && r === "Comment" || e === ed && r === "DocumentFragment";
  }, "testNode"), td = u((t) => {
    var r;
    return ((r = t == null ? void 0 : t.constructor) == null ? void 0 : r.name) && Ug(t);
  }, "test");
  Sn.test = td;
  function Wg(t) {
    return t.nodeType === Jp;
  }
  __name(Wg, "Wg");
  u(Wg, "nodeIsText");
  function Vg(t) {
    return t.nodeType === Qp;
  }
  __name(Vg, "Vg");
  u(Vg, "nodeIsComment");
  function nu(t) {
    return t.nodeType === ed;
  }
  __name(nu, "nu");
  u(nu, "nodeIsFragment");
  var rd = u((t, r, e, n, s, a) => {
    if (Wg(t))
      return (0, ki.printText)(t.data, r);
    if (Vg(t))
      return (0, ki.printComment)(t.data, r);
    let p = nu(t) ? "DocumentFragment" : t.tagName.toLowerCase();
    return ++n > r.maxDepth ? (0, ki.printElementAsLeaf)(p, r) : (0, ki.printElement)(p, (0, ki.printProps)(nu(t) ? [] : Array.from(t.attributes).map((v) => v.name).sort(), nu(t) ? {} : Array.from(t.attributes).reduce((v, m) => (v[m.name] = m.value, v), {}), r, e + r.indent, n, s, a), (0, ki.printChildren)(Array.prototype.slice.call(t.childNodes || t.children), r, e + r.indent, n, s, a), r, e);
  }, "serialize");
  Sn.serialize = rd;
  var Yg = { serialize: rd, test: td }, Xg = Yg;
  Sn.default = Xg;
});
var ld = Tt((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.test = Tn.serialize = Tn.default = void 0;
  var Ao = Mo(), Zg = "@@__IMMUTABLE_ITERABLE__@@", Kg = "@@__IMMUTABLE_LIST__@@", Jg = "@@__IMMUTABLE_KEYED__@@", Qg = "@@__IMMUTABLE_MAP__@@", id = "@@__IMMUTABLE_ORDERED__@@", eb = "@@__IMMUTABLE_RECORD__@@", tb = "@@__IMMUTABLE_SEQ__@@", rb = "@@__IMMUTABLE_SET__@@", nb = "@@__IMMUTABLE_STACK__@@", Ni = u((t) => `Immutable.${t}`, "getImmutableName"), ns = u((t) => `[${t}]`, "printAsLeaf"), Io = " ", od = "\u2026", ib = u((t, r, e, n, s, a, p) => ++n > r.maxDepth ? ns(Ni(p)) : `${Ni(p) + Io}{${(0, Ao.printIteratorEntries)(t.entries(), r, e, n, s, a)}}`, "printImmutableEntries");
  function ob(t) {
    let r = 0;
    return { next() {
      if (r < t._keys.length) {
        let e = t._keys[r++];
        return { done: false, value: [e, t.get(e)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  __name(ob, "ob");
  u(ob, "getRecordEntries");
  var ab = u((t, r, e, n, s, a) => {
    let p = Ni(t._name || "Record");
    return ++n > r.maxDepth ? ns(p) : `${p + Io}{${(0, Ao.printIteratorEntries)(ob(t), r, e, n, s, a)}}`;
  }, "printImmutableRecord"), sb = u((t, r, e, n, s, a) => {
    let p = Ni("Seq");
    return ++n > r.maxDepth ? ns(p) : t[Jg] ? `${p + Io}{${t._iter || t._object ? (0, Ao.printIteratorEntries)(t.entries(), r, e, n, s, a) : od}}` : `${p + Io}[${t._iter || t._array || t._collection || t._iterable ? (0, Ao.printIteratorValues)(t.values(), r, e, n, s, a) : od}]`;
  }, "printImmutableSeq"), iu = u((t, r, e, n, s, a, p) => ++n > r.maxDepth ? ns(Ni(p)) : `${Ni(p) + Io}[${(0, Ao.printIteratorValues)(t.values(), r, e, n, s, a)}]`, "printImmutableValues"), ad = u((t, r, e, n, s, a) => t[Qg] ? ib(t, r, e, n, s, a, t[id] ? "OrderedMap" : "Map") : t[Kg] ? iu(t, r, e, n, s, a, "List") : t[rb] ? iu(t, r, e, n, s, a, t[id] ? "OrderedSet" : "Set") : t[nb] ? iu(t, r, e, n, s, a, "Stack") : t[tb] ? sb(t, r, e, n, s, a) : ab(t, r, e, n, s, a), "serialize");
  Tn.serialize = ad;
  var sd = u((t) => t && (t[Zg] === true || t[eb] === true), "test");
  Tn.test = sd;
  var lb = { serialize: ad, test: sd }, ub = lb;
  Tn.default = ub;
});
var cd = Tt((_e) => {
  "use strict";
  var ou = Symbol.for("react.element"), au = Symbol.for("react.portal"), is = Symbol.for("react.fragment"), os = Symbol.for("react.strict_mode"), as = Symbol.for("react.profiler"), ss = Symbol.for("react.provider"), ls = Symbol.for("react.context"), cb = Symbol.for("react.server_context"), us = Symbol.for("react.forward_ref"), cs = Symbol.for("react.suspense"), ps = Symbol.for("react.suspense_list"), ds = Symbol.for("react.memo"), fs = Symbol.for("react.lazy"), pb = Symbol.for("react.offscreen"), ud;
  ud = Symbol.for("react.module.reference");
  function xr(t) {
    if (typeof t == "object" && t !== null) {
      var r = t.$$typeof;
      switch (r) {
        case ou:
          switch (t = t.type, t) {
            case is:
            case as:
            case os:
            case cs:
            case ps:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case cb:
                case ls:
                case us:
                case fs:
                case ds:
                case ss:
                  return t;
                default:
                  return r;
              }
          }
        case au:
          return r;
      }
    }
  }
  __name(xr, "xr");
  u(xr, "v");
  _e.ContextConsumer = ls;
  _e.ContextProvider = ss;
  _e.Element = ou;
  _e.ForwardRef = us;
  _e.Fragment = is;
  _e.Lazy = fs;
  _e.Memo = ds;
  _e.Portal = au;
  _e.Profiler = as;
  _e.StrictMode = os;
  _e.Suspense = cs;
  _e.SuspenseList = ps;
  _e.isAsyncMode = function() {
    return false;
  };
  _e.isConcurrentMode = function() {
    return false;
  };
  _e.isContextConsumer = function(t) {
    return xr(t) === ls;
  };
  _e.isContextProvider = function(t) {
    return xr(t) === ss;
  };
  _e.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === ou;
  };
  _e.isForwardRef = function(t) {
    return xr(t) === us;
  };
  _e.isFragment = function(t) {
    return xr(t) === is;
  };
  _e.isLazy = function(t) {
    return xr(t) === fs;
  };
  _e.isMemo = function(t) {
    return xr(t) === ds;
  };
  _e.isPortal = function(t) {
    return xr(t) === au;
  };
  _e.isProfiler = function(t) {
    return xr(t) === as;
  };
  _e.isStrictMode = function(t) {
    return xr(t) === os;
  };
  _e.isSuspense = function(t) {
    return xr(t) === cs;
  };
  _e.isSuspenseList = function(t) {
    return xr(t) === ps;
  };
  _e.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === is || t === as || t === os || t === cs || t === ps || t === pb || typeof t == "object" && t !== null && (t.$$typeof === fs || t.$$typeof === ds || t.$$typeof === ss || t.$$typeof === ls || t.$$typeof === us || t.$$typeof === ud || t.getModuleId !== void 0);
  };
  _e.typeOf = xr;
});
var dd = Tt((dw, pd) => {
  "use strict";
  pd.exports = cd();
});
var bd = Tt((Cn) => {
  "use strict";
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.test = Cn.serialize = Cn.default = void 0;
  var Qn = db(dd()), hs = rs();
  function hd(t) {
    if (typeof WeakMap != "function")
      return null;
    var r = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
    return (hd = u(function(n) {
      return n ? e : r;
    }, "_getRequireWildcardCache"))(t);
  }
  __name(hd, "hd");
  u(hd, "_getRequireWildcardCache");
  function db(t, r) {
    if (!r && t && t.__esModule)
      return t;
    if (t === null || typeof t != "object" && typeof t != "function")
      return { default: t };
    var e = hd(r);
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
  __name(db, "db");
  u(db, "_interopRequireWildcard");
  var md = u((t, r = []) => (Array.isArray(t) ? t.forEach((e) => {
    md(e, r);
  }) : t != null && t !== false && r.push(t), r), "getChildren"), fd = u((t) => {
    let r = t.type;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r.displayName || r.name || "Unknown";
    if (Qn.isFragment(t))
      return "React.Fragment";
    if (Qn.isSuspense(t))
      return "React.Suspense";
    if (typeof r == "object" && r !== null) {
      if (Qn.isContextProvider(t))
        return "Context.Provider";
      if (Qn.isContextConsumer(t))
        return "Context.Consumer";
      if (Qn.isForwardRef(t)) {
        if (r.displayName)
          return r.displayName;
        let e = r.render.displayName || r.render.name || "";
        return e !== "" ? `ForwardRef(${e})` : "ForwardRef";
      }
      if (Qn.isMemo(t)) {
        let e = r.displayName || r.type.displayName || r.type.name || "";
        return e !== "" ? `Memo(${e})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, "getType"), fb = u((t) => {
    let { props: r } = t;
    return Object.keys(r).filter((e) => e !== "children" && r[e] !== void 0).sort();
  }, "getPropKeys"), vd = u((t, r, e, n, s, a) => ++n > r.maxDepth ? (0, hs.printElementAsLeaf)(fd(t), r) : (0, hs.printElement)(fd(t), (0, hs.printProps)(fb(t), t.props, r, e + r.indent, n, s, a), (0, hs.printChildren)(md(t.props.children), r, e + r.indent, n, s, a), r, e), "serialize");
  Cn.serialize = vd;
  var gd = u((t) => t != null && Qn.isElement(t), "test");
  Cn.test = gd;
  var hb = { serialize: vd, test: gd }, mb = hb;
  Cn.default = mb;
});
var xd = Tt((On) => {
  "use strict";
  Object.defineProperty(On, "__esModule", { value: true });
  On.test = On.serialize = On.default = void 0;
  var ms = rs(), su = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, vb = typeof su == "function" && su.for ? su.for("react.test.json") : 245830487, gb = u((t) => {
    let { props: r } = t;
    return r ? Object.keys(r).filter((e) => r[e] !== void 0).sort() : [];
  }, "getPropKeys"), yd = u((t, r, e, n, s, a) => ++n > r.maxDepth ? (0, ms.printElementAsLeaf)(t.type, r) : (0, ms.printElement)(t.type, t.props ? (0, ms.printProps)(gb(t), t.props, r, e + r.indent, n, s, a) : "", t.children ? (0, ms.printChildren)(t.children, r, e + r.indent, n, s, a) : "", r, e), "serialize");
  On.serialize = yd;
  var wd = u((t) => t && t.$$typeof === vb, "test");
  On.test = wd;
  var bb = { serialize: yd, test: wd }, yb = bb;
  On.default = yb;
});
var on = Tt((nn) => {
  "use strict";
  Object.defineProperty(nn, "__esModule", { value: true });
  nn.default = nn.DEFAULT_OPTIONS = void 0;
  nn.format = _d;
  nn.plugins = void 0;
  var wb = ei(jp()), Po = Mo(), xb = ei(qp()), Eb = ei(Yp()), Sb = ei(nd()), Tb = ei(ld()), Cb = ei(bd()), Ob = ei(xd());
  function ei(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(ei, "ei");
  u(ei, "_interopRequireDefault");
  var Md = Object.prototype.toString, Mb = Date.prototype.toISOString, Ab = Error.prototype.toString, Ed = RegExp.prototype.toString, lu = u((t) => typeof t.constructor == "function" && t.constructor.name || "Object", "getConstructorName"), Ib = u((t) => typeof window != "undefined" && t === window, "isWindow"), Pb = /^Symbol\((.*)\)(.*)$/, zb = /\n/gi, cu = class cu extends Error {
    static {
      __name(this, "cu");
    }
    constructor(r, e) {
      super(r), this.stack = e, this.name = this.constructor.name;
    }
  };
  u(cu, "PrettyFormatPluginError");
  var vs = cu;
  function Rb(t) {
    return t === "[object Array]" || t === "[object ArrayBuffer]" || t === "[object DataView]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object Int8Array]" || t === "[object Int16Array]" || t === "[object Int32Array]" || t === "[object Uint8Array]" || t === "[object Uint8ClampedArray]" || t === "[object Uint16Array]" || t === "[object Uint32Array]";
  }
  __name(Rb, "Rb");
  u(Rb, "isToStringedArrayType");
  function Db(t) {
    return Object.is(t, -0) ? "-0" : String(t);
  }
  __name(Db, "Db");
  u(Db, "printNumber");
  function kb(t) {
    return `${t}n`;
  }
  __name(kb, "kb");
  u(kb, "printBigInt");
  function Sd(t, r) {
    return r ? `[Function ${t.name || "anonymous"}]` : "[Function]";
  }
  __name(Sd, "Sd");
  u(Sd, "printFunction");
  function Td(t) {
    return String(t).replace(Pb, "Symbol($1)");
  }
  __name(Td, "Td");
  u(Td, "printSymbol");
  function Cd(t) {
    return `[${Ab.call(t)}]`;
  }
  __name(Cd, "Cd");
  u(Cd, "printError");
  function Ad(t, r, e, n) {
    if (t === true || t === false)
      return `${t}`;
    if (t === void 0)
      return "undefined";
    if (t === null)
      return "null";
    let s = typeof t;
    if (s === "number")
      return Db(t);
    if (s === "bigint")
      return kb(t);
    if (s === "string")
      return n ? `"${t.replace(/"|\\/g, "\\$&")}"` : `"${t}"`;
    if (s === "function")
      return Sd(t, r);
    if (s === "symbol")
      return Td(t);
    let a = Md.call(t);
    return a === "[object WeakMap]" ? "WeakMap {}" : a === "[object WeakSet]" ? "WeakSet {}" : a === "[object Function]" || a === "[object GeneratorFunction]" ? Sd(t, r) : a === "[object Symbol]" ? Td(t) : a === "[object Date]" ? isNaN(+t) ? "Date { NaN }" : Mb.call(t) : a === "[object Error]" ? Cd(t) : a === "[object RegExp]" ? e ? Ed.call(t).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Ed.call(t) : t instanceof Error ? Cd(t) : null;
  }
  __name(Ad, "Ad");
  u(Ad, "printBasicValue");
  function Id(t, r, e, n, s, a) {
    if (s.indexOf(t) !== -1)
      return "[Circular]";
    s = s.slice(), s.push(t);
    let p = ++n > r.maxDepth, v = r.min;
    if (r.callToJSON && !p && t.toJSON && typeof t.toJSON == "function" && !a)
      return Mn(t.toJSON(), r, e, n, s, true);
    let m = Md.call(t);
    return m === "[object Arguments]" ? p ? "[Arguments]" : `${v ? "" : "Arguments "}[${(0, Po.printListItems)(t, r, e, n, s, Mn)}]` : Rb(m) ? p ? `[${t.constructor.name}]` : `${v || !r.printBasicPrototype && t.constructor.name === "Array" ? "" : `${t.constructor.name} `}[${(0, Po.printListItems)(t, r, e, n, s, Mn)}]` : m === "[object Map]" ? p ? "[Map]" : `Map {${(0, Po.printIteratorEntries)(t.entries(), r, e, n, s, Mn, " => ")}}` : m === "[object Set]" ? p ? "[Set]" : `Set {${(0, Po.printIteratorValues)(t.values(), r, e, n, s, Mn)}}` : p || Ib(t) ? `[${lu(t)}]` : `${v || !r.printBasicPrototype && lu(t) === "Object" ? "" : `${lu(t)} `}{${(0, Po.printObjectProperties)(t, r, e, n, s, Mn)}}`;
  }
  __name(Id, "Id");
  u(Id, "printComplexValue");
  function Nb(t) {
    return t.serialize != null;
  }
  __name(Nb, "Nb");
  u(Nb, "isNewPlugin");
  function Pd(t, r, e, n, s, a) {
    let p;
    try {
      p = Nb(t) ? t.serialize(r, e, n, s, a, Mn) : t.print(r, (v) => Mn(v, e, n, s, a), (v) => {
        let m = n + e.indent;
        return m + v.replace(zb, `
${m}`);
      }, { edgeSpacing: e.spacingOuter, min: e.min, spacing: e.spacingInner }, e.colors);
    } catch (v) {
      throw new vs(v.message, v.stack);
    }
    if (typeof p != "string")
      throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);
    return p;
  }
  __name(Pd, "Pd");
  u(Pd, "printPlugin");
  function zd(t, r) {
    for (let e = 0; e < t.length; e++)
      try {
        if (t[e].test(r))
          return t[e];
      } catch (n) {
        throw new vs(n.message, n.stack);
      }
    return null;
  }
  __name(zd, "zd");
  u(zd, "findPlugin");
  function Mn(t, r, e, n, s, a) {
    let p = zd(r.plugins, t);
    if (p !== null)
      return Pd(p, t, r, e, n, s);
    let v = Ad(t, r.printFunctionName, r.escapeRegex, r.escapeString);
    return v !== null ? v : Id(t, r, e, n, s, a);
  }
  __name(Mn, "Mn");
  u(Mn, "printer");
  var uu = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, Rd = Object.keys(uu), _b = u((t) => t, "toOptionsSubtype"), Er = _b({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: uu });
  nn.DEFAULT_OPTIONS = Er;
  function Lb(t) {
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
  __name(Lb, "Lb");
  u(Lb, "validateOptions");
  var Gb = u((t) => Rd.reduce((r, e) => {
    let n = t.theme && t.theme[e] !== void 0 ? t.theme[e] : uu[e], s = n && wb.default[n];
    if (s && typeof s.close == "string" && typeof s.open == "string")
      r[e] = s;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${e}" whose value "${n}" is undefined in ansi-styles.`);
    return r;
  }, /* @__PURE__ */ Object.create(null)), "getColorsHighlight"), jb = u(() => Rd.reduce((t, r) => (t[r] = { close: "", open: "" }, t), /* @__PURE__ */ Object.create(null)), "getColorsEmpty"), Dd = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.printFunctionName) != null ? r : Er.printFunctionName;
  }, "getPrintFunctionName"), kd = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeRegex) != null ? r : Er.escapeRegex;
  }, "getEscapeRegex"), Nd = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeString) != null ? r : Er.escapeString;
  }, "getEscapeString"), Od = u((t) => {
    var r, e, n, s, a, p, v;
    return { callToJSON: (r = t == null ? void 0 : t.callToJSON) != null ? r : Er.callToJSON, colors: t != null && t.highlight ? Gb(t) : jb(), compareKeys: typeof (t == null ? void 0 : t.compareKeys) == "function" || (t == null ? void 0 : t.compareKeys) === null ? t.compareKeys : Er.compareKeys, escapeRegex: kd(t), escapeString: Nd(t), indent: t != null && t.min ? "" : Hb((e = t == null ? void 0 : t.indent) != null ? e : Er.indent), maxDepth: (n = t == null ? void 0 : t.maxDepth) != null ? n : Er.maxDepth, maxWidth: (s = t == null ? void 0 : t.maxWidth) != null ? s : Er.maxWidth, min: (a = t == null ? void 0 : t.min) != null ? a : Er.min, plugins: (p = t == null ? void 0 : t.plugins) != null ? p : Er.plugins, printBasicPrototype: (v = t == null ? void 0 : t.printBasicPrototype) != null ? v : true, printFunctionName: Dd(t), spacingInner: t != null && t.min ? " " : `
`, spacingOuter: t != null && t.min ? "" : `
` };
  }, "getConfig");
  function Hb(t) {
    return new Array(t + 1).join(" ");
  }
  __name(Hb, "Hb");
  u(Hb, "createIndent");
  function _d(t, r) {
    if (r && (Lb(r), r.plugins)) {
      let n = zd(r.plugins, t);
      if (n !== null)
        return Pd(n, t, Od(r), "", 0, []);
    }
    let e = Ad(t, Dd(r), kd(r), Nd(r));
    return e !== null ? e : Id(t, Od(r), "", 0, []);
  }
  __name(_d, "_d");
  u(_d, "format");
  var Bb = { AsymmetricMatcher: xb.default, DOMCollection: Eb.default, DOMElement: Sb.default, Immutable: Tb.default, ReactElement: Cb.default, ReactTestComponent: Ob.default };
  nn.plugins = Bb;
  var $b = _d;
  nn.default = $b;
});
var Zo = Tt((Hf, Vu) => {
  (function(t) {
    typeof Hf == "object" && typeof Vu != "undefined" ? Vu.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
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
    var f = {};
    function g(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.prepared.axis;
        l === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : l === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(g, "g");
    u(g, "f");
    function w(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "drag") {
        var c = l.prepared.axis;
        if (c === "x" || c === "y") {
          var h = c === "x" ? "y" : "x";
          o.page[h] = l.coords.start.page[h], o.client[h] = l.coords.start.client[h], o.delta[h] = 0;
        }
      }
    }
    __name(w, "w");
    u(w, "d"), Object.defineProperty(f, "__esModule", { value: true }), f.default = void 0;
    var S = { id: "actions/drag", install: function(i) {
      var o = i.actions, l = i.Interactable, c = i.defaults;
      l.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", c.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": g, "interactions:action-resume": g, "interactions:action-move": w, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, c = i.buttons, h = l.options.drag;
      if (h && h.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || c & l.options.drag.mouseButtons))
        return i.action = { name: "drag", axis: h.lockAxis === "start" ? h.startAxis : h.lockAxis }, false;
    } }, draggable: function(i) {
      return a.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : a.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: g, move: w, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, T = S;
    f.default = T;
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
    var I = { init: function(i) {
      var o = C.default.Element, l = i.navigator || {};
      I.supportsTouch = "ontouchstart" in i || a.default.func(i.DocumentTouch) && C.default.document instanceof i.DocumentTouch, I.supportsPointerEvent = l.pointerEnabled !== false && !!C.default.PointerEvent, I.isIOS = /iP(hone|od|ad)/.test(l.platform), I.isIOS7 = /iP(hone|od|ad)/.test(l.platform) && /OS 7[^\d]/.test(l.appVersion), I.isIe9 = /MSIE 9/.test(l.userAgent), I.isOperaMobile = l.appName === "Opera" && I.supportsTouch && /Presto/.test(l.userAgent), I.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", I.pEventTypes = I.supportsPointerEvent ? C.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, I.wheelEvent = C.default.document && "onmousewheel" in C.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ee = I;
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
        var h = i[c], b = i[o];
        if (h && c !== o)
          if (b) {
            var E = Q(h), y = Q(b);
            if (E !== h.ownerDocument)
              if (y !== h.ownerDocument)
                if (E !== y) {
                  l = l.length ? l : ue(b);
                  var x = void 0;
                  if (b instanceof C.default.HTMLElement && h instanceof C.default.SVGElement && !(h instanceof C.default.SVGSVGElement)) {
                    if (h === y)
                      continue;
                    x = h.ownerSVGElement;
                  } else
                    x = h;
                  for (var O = ue(x, b.ownerDocument), A = 0; O[A] && O[A] === l[A]; )
                    A++;
                  var P = [O[A - 1], O[A], l[A]];
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
                  j = h, D = b, (parseInt(r.getWindow(j).getComputedStyle(j).zIndex, 10) || 0) >= (parseInt(r.getWindow(D).getComputedStyle(D).zIndex, 10) || 0) && (o = c);
              else
                o = c;
          } else
            o = c;
      }
      var j, D;
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
      for (var l, c = [], h = i; (l = Q(h)) && h !== o && l !== h.ownerDocument; )
        c.unshift(h), h = l;
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
      var h, b = i;
      return a.default.string(b) ? b = Ze(b, o, l) : a.default.func(b) && (b = b.apply(void 0, function(E) {
        if (Array.isArray(E))
          return tt(E);
      }(h = c) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(h) || function(E, y) {
        if (E) {
          if (typeof E == "string")
            return tt(E, y);
          var x = Object.prototype.toString.call(E).slice(8, -1);
          return x === "Object" && E.constructor && (x = E.constructor.name), x === "Map" || x === "Set" ? Array.from(E) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? tt(E, y) : void 0;
        }
      }(h) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), a.default.element(b) && (b = (0, z.getElementRect)(b)), b;
    }, oe.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, q.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, oe.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, q.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    };
    var ze = {};
    Object.defineProperty(ze, "__esModule", { value: true }), ze.default = function(i, o, l) {
      var c = i.options[l], h = c && c.origin || i.options.origin, b = (0, oe.resolveRectLike)(h, i, o, [i && o]);
      return (0, oe.rectToXY)(b) || { x: 0, y: 0 };
    };
    var Ie = {};
    function We(i) {
      return i.trim().split(/ +/);
    }
    __name(We, "We");
    u(We, "C"), Object.defineProperty(Ie, "__esModule", { value: true }), Ie.default = u(/* @__PURE__ */ __name(function i(o, l, c) {
      if (c = c || {}, a.default.string(o) && o.search(" ") !== -1 && (o = We(o)), a.default.array(o))
        return o.reduce(function(x, O) {
          return (0, q.default)(x, i(O, l, c));
        }, c);
      if (a.default.object(o) && (l = o, o = ""), a.default.func(l))
        c[o] = c[o] || [], c[o].push(l);
      else if (a.default.array(l))
        for (var h = 0; h < l.length; h++) {
          var b;
          b = l[h], i(o, b, c);
        }
      else if (a.default.object(l))
        for (var E in l) {
          var y = We(E).map(function(x) {
            return "".concat(o).concat(x);
          });
          i(y, l[E], c);
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
      var l = u(function(h) {
        typeof i[h] != "function" && h !== "__set" && Object.defineProperty(i, h, { get: function() {
          return h in i.__set ? i.__set[h] : i.__set[h] = o[h];
        }, set: function(b) {
          i.__set[h] = b;
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
    function je(i, o, l) {
      return i = i || "page", (l = l || {}).x = o[i + "X"], l.y = o[i + "Y"], l;
    }
    __name(je, "je");
    u(je, "Y");
    function rt(i, o) {
      return o = o || { x: 0, y: 0 }, $.default.isOperaMobile && ar(i) ? (je("screen", i, o), o.x += window.scrollX, o.y += window.scrollY) : je("page", i, o), o;
    }
    __name(rt, "rt");
    u(rt, "W");
    function vr(i, o) {
      return o = o || {}, $.default.isOperaMobile && ar(i) ? je("screen", i, o) : je("client", i, o), o;
    }
    __name(vr, "vr");
    u(vr, "L");
    function Ar(i) {
      var o = [];
      return a.default.array(i) ? (o[0] = i[0], o[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o[0] = i.touches[0], o[1] = i.changedTouches[0]) : i.touches.length === 0 && (o[0] = i.changedTouches[0], o[1] = i.changedTouches[1]) : (o[0] = i.touches[0], o[1] = i.touches[1]), o;
    }
    __name(Ar, "Ar");
    u(Ar, "U");
    function gr(i) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, l = 0; l < i.length; l++) {
        var c = i[l];
        for (var h in o)
          o[h] += c[h];
      }
      for (var b in o)
        o[b] /= i.length;
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
    }, J.getTouchPair = Ar, J.getXY = je, J.isNativePointer = ar, J.newCoords = function() {
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
      var l = o + "X", c = o + "Y", h = Ar(i), b = h[1][l] - h[0][l], E = h[1][c] - h[0][c];
      return 180 * Math.atan2(E, b) / Math.PI;
    }, J.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o = Ar(i), l = Math.min(o[0].pageX, o[1].pageX), c = Math.min(o[0].pageY, o[1].pageY), h = Math.max(o[0].pageX, o[1].pageX), b = Math.max(o[0].pageY, o[1].pageY);
      return { x: l, y: c, left: l, top: c, right: h, bottom: b, width: h - l, height: b - c };
    }, J.touchDistance = function(i, o) {
      var l = o + "X", c = o + "Y", h = Ar(i), b = h[0][l] - h[1][l], E = h[0][c] - h[1][c];
      return (0, Je.default)(b, E);
    };
    var sr = {};
    function _r(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(_r, "_r");
    u(_r, "q");
    function Yr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Yr, "Yr");
    u(Yr, "G"), Object.defineProperty(sr, "__esModule", { value: true }), sr.BaseEvent = void 0;
    var Ln = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
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
      } }]) && _r(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    sr.BaseEvent = Ln, Object.defineProperty(Ln.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Pe = {};
    Object.defineProperty(Pe, "__esModule", { value: true }), Pe.remove = Pe.merge = Pe.from = Pe.findIndex = Pe.find = Pe.contains = void 0, Pe.contains = function(i, o) {
      return i.indexOf(o) !== -1;
    }, Pe.remove = function(i, o) {
      return i.splice(i.indexOf(o), 1);
    };
    var Gn = u(function(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        i.push(c);
      }
      return i;
    }, "K");
    Pe.merge = Gn, Pe.from = function(i) {
      return Gn([], i);
    };
    var jn = u(function(i, o) {
      for (var l = 0; l < i.length; l++)
        if (o(i[l], l, i))
          return l;
      return -1;
    }, "Z");
    Pe.findIndex = jn, Pe.find = function(i, o) {
      return i[jn(i, o)];
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
    function xi(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(xi, "xi");
    u(xi, "tt");
    function mn(i, o) {
      return mn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, mn(i, o);
    }
    __name(mn, "mn");
    u(mn, "et");
    function Ir(i, o) {
      if (o && (Xr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Mt(i);
    }
    __name(Ir, "Ir");
    u(Ir, "nt");
    function Mt(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Mt, "Mt");
    u(Mt, "rt");
    function Lr(i) {
      return Lr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Lr(i);
    }
    __name(Lr, "Lr");
    u(Lr, "ot");
    function er(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(er, "er");
    u(er, "it"), Object.defineProperty(_t, "__esModule", { value: true }), _t.DropEvent = void 0;
    var Hn = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && mn(y, x);
      })(E, i);
      var o, l, c, h, b = (c = E, h = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (y) {
          return false;
        }
      }(), function() {
        var y, x = Lr(c);
        if (h) {
          var O = Lr(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Ir(this, y);
      });
      function E(y, x, O) {
        var A;
        (function(D, F) {
          if (!(D instanceof F))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), er(Mt(A = b.call(this, x._interaction)), "dropzone", void 0), er(Mt(A), "dragEvent", void 0), er(Mt(A), "relatedTarget", void 0), er(Mt(A), "draggable", void 0), er(Mt(A), "propagationStopped", false), er(Mt(A), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? y.prev : y.cur, N = P.element, j = P.dropzone;
        return A.type = O, A.target = N, A.currentTarget = N, A.dropzone = j, A.dragEvent = x, A.relatedTarget = x.target, A.draggable = x.interactable, A.timeStamp = x.timeStamp, A;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (l = [{ key: "reject", value: function() {
        var y = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = x.activeDrops, A = Pe.findIndex(O, function(N) {
              var j = N.dropzone, D = N.element;
              return j === y.dropzone && D === y.target;
            });
            x.activeDrops.splice(A, 1);
            var P = new E(x, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new E(x, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && xi(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(sr.BaseEvent);
    _t.DropEvent = Hn;
    var Zr = {};
    function Bn(i, o) {
      for (var l = 0; l < i.slice().length; l++) {
        var c = i.slice()[l], h = c.dropzone, b = c.element;
        o.dropzone = h, o.target = b, h.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(Bn, "Bn");
    u(Bn, "lt");
    function vn(i, o) {
      for (var l = function(b, E) {
        for (var y = b.interactables, x = [], O = 0; O < y.list.length; O++) {
          var A = y.list[O];
          if (A.options.drop.enabled) {
            var P = A.options.drop.accept;
            if (!(a.default.element(P) && P !== E || a.default.string(P) && !z.matchesSelector(E, P) || a.default.func(P) && !P({ dropzone: A, draggableElement: E })))
              for (var N = a.default.string(A.target) ? A._context.querySelectorAll(A.target) : a.default.array(A.target) ? A.target : [A.target], j = 0; j < N.length; j++) {
                var D = N[j];
                D !== E && x.push({ dropzone: A, element: D, rect: A.getRect(D) });
              }
          }
        }
        return x;
      }(i, o), c = 0; c < l.length; c++) {
        var h = l[c];
        h.rect = h.dropzone.getRect(h.element);
      }
      return l;
    }
    __name(vn, "vn");
    u(vn, "ut");
    function $n(i, o, l) {
      for (var c = i.dropState, h = i.interactable, b = i.element, E = [], y = 0; y < c.activeDrops.length; y++) {
        var x = c.activeDrops[y], O = x.dropzone, A = x.element, P = x.rect;
        E.push(O.dropCheck(o, l, h, b, A, P) ? A : null);
      }
      var N = z.indexOfDeepestElement(E);
      return c.activeDrops[N] || null;
    }
    __name($n, "$n");
    u($n, "ct");
    function ao(i, o, l) {
      var c = i.dropState, h = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return l.type === "dragstart" && (h.activate = new _t.DropEvent(c, l, "dropactivate"), h.activate.target = null, h.activate.dropzone = null), l.type === "dragend" && (h.deactivate = new _t.DropEvent(c, l, "dropdeactivate"), h.deactivate.target = null, h.deactivate.dropzone = null), c.rejected || (c.cur.element !== c.prev.element && (c.prev.dropzone && (h.leave = new _t.DropEvent(c, l, "dragleave"), l.dragLeave = h.leave.target = c.prev.element, l.prevDropzone = h.leave.dropzone = c.prev.dropzone), c.cur.dropzone && (h.enter = new _t.DropEvent(c, l, "dragenter"), l.dragEnter = c.cur.element, l.dropzone = c.cur.dropzone)), l.type === "dragend" && c.cur.dropzone && (h.drop = new _t.DropEvent(c, l, "drop"), l.dropzone = c.cur.dropzone, l.relatedTarget = c.cur.element), l.type === "dragmove" && c.cur.dropzone && (h.move = new _t.DropEvent(c, l, "dropmove"), h.move.dragmove = l, l.dropzone = c.cur.dropzone)), h;
    }
    __name(ao, "ao");
    u(ao, "ft");
    function so(i, o) {
      var l = i.dropState, c = l.activeDrops, h = l.cur, b = l.prev;
      o.leave && b.dropzone.fire(o.leave), o.enter && h.dropzone.fire(o.enter), o.move && h.dropzone.fire(o.move), o.drop && h.dropzone.fire(o.drop), o.deactivate && Bn(c, o.deactivate), l.prev.dropzone = h.dropzone, l.prev.element = h.element;
    }
    __name(so, "so");
    u(so, "dt");
    function ya(i, o) {
      var l = i.interaction, c = i.iEvent, h = i.event;
      if (c.type === "dragmove" || c.type === "dragend") {
        var b = l.dropState;
        o.dynamicDrop && (b.activeDrops = vn(o, l.element));
        var E = c, y = $n(l, E, h);
        b.rejected = b.rejected && !!y && y.dropzone === b.cur.dropzone && y.element === b.cur.element, b.cur.dropzone = y && y.dropzone, b.cur.element = y && y.element, b.events = ao(l, 0, E);
      }
    }
    __name(ya, "ya");
    u(ya, "pt"), Object.defineProperty(Zr, "__esModule", { value: true }), Zr.default = void 0;
    var wa = { id: "actions/drop", install: function(i) {
      var o = i.actions, l = i.interactStatic, c = i.Interactable, h = i.defaults;
      i.usePlugin(f.default), c.prototype.dropzone = function(b) {
        return function(E, y) {
          if (a.default.object(y)) {
            if (E.options.drop.enabled = y.enabled !== false, y.listeners) {
              var x = (0, Ie.default)(y.listeners), O = Object.keys(x).reduce(function(A, P) {
                return A[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], A;
              }, {});
              E.off(E.options.drop.listeners), E.on(O), E.options.drop.listeners = O;
            }
            return a.default.func(y.ondrop) && E.on("drop", y.ondrop), a.default.func(y.ondropactivate) && E.on("dropactivate", y.ondropactivate), a.default.func(y.ondropdeactivate) && E.on("dropdeactivate", y.ondropdeactivate), a.default.func(y.ondragenter) && E.on("dragenter", y.ondragenter), a.default.func(y.ondragleave) && E.on("dragleave", y.ondragleave), a.default.func(y.ondropmove) && E.on("dropmove", y.ondropmove), /^(pointer|center)$/.test(y.overlap) ? E.options.drop.overlap = y.overlap : a.default.number(y.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, y.overlap), 0)), "accept" in y && (E.options.drop.accept = y.accept), "checker" in y && (E.options.drop.checker = y.checker), E;
          }
          return a.default.bool(y) ? (E.options.drop.enabled = y, E) : E.options.drop;
        }(this, b);
      }, c.prototype.dropCheck = function(b, E, y, x, O, A) {
        return function(P, N, j, D, F, Z, W) {
          var ne = false;
          if (!(W = W || P.getRect(Z)))
            return !!P.options.drop.checker && P.options.drop.checker(N, j, ne, P, Z, D, F);
          var ae = P.options.drop.overlap;
          if (ae === "pointer") {
            var ye = (0, ze.default)(D, F, "drag"), De = J.getPageXY(N);
            De.x += ye.x, De.y += ye.y;
            var Fe = De.x > W.left && De.x < W.right, Se = De.y > W.top && De.y < W.bottom;
            ne = Fe && Se;
          }
          var Be = D.getRect(F);
          if (Be && ae === "center") {
            var wr = Be.left + Be.width / 2, en = Be.top + Be.height / 2;
            ne = wr >= W.left && wr <= W.right && en >= W.top && en <= W.bottom;
          }
          return Be && a.default.number(ae) && (ne = Math.max(0, Math.min(W.right, Be.right) - Math.max(W.left, Be.left)) * Math.max(0, Math.min(W.bottom, Be.bottom) - Math.max(W.top, Be.top)) / (Be.width * Be.height) >= ae), P.options.drop.checker && (ne = P.options.drop.checker(N, j, ne, P, Z, D, F)), ne;
        }(this, b, E, y, x, O, A);
      }, l.dynamicDrop = function(b) {
        return a.default.bool(b) ? (i.dynamicDrop = b, l) : i.dynamicDrop;
      }, (0, q.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", i.dynamicDrop = false, h.actions.drop = wa.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o = i.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o) {
      var l = i.interaction, c = (i.event, i.iEvent);
      if (l.prepared.name === "drag") {
        var h = l.dropState;
        h.activeDrops = null, h.events = null, h.activeDrops = vn(o, l.element), h.events = ao(l, 0, c), h.events.activate && (Bn(h.activeDrops, h.events.activate), o.fire("actions/drop:start", { interaction: l, dragEvent: c }));
      }
    }, "interactions:action-move": ya, "interactions:after-action-move": function(i, o) {
      var l = i.interaction, c = i.iEvent;
      l.prepared.name === "drag" && (so(l, l.dropState.events), o.fire("actions/drop:move", { interaction: l, dragEvent: c }), l.dropState.events = {});
    }, "interactions:action-end": function(i, o) {
      if (i.interaction.prepared.name === "drag") {
        var l = i.interaction, c = i.iEvent;
        ya(i, o), so(l, l.dropState.events), o.fire("actions/drop:end", { interaction: l, dragEvent: c });
      }
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.dropState;
        l && (l.activeDrops = null, l.events = null, l.cur.dropzone = null, l.cur.element = null, l.prev.dropzone = null, l.prev.element = null, l.rejected = false);
      }
    } }, getActiveDrops: vn, getDrop: $n, getDropEvents: ao, fireDropEvents: so, defaults: { enabled: false, accept: null, overlap: "pointer" } }, yl = wa;
    Zr.default = yl;
    var G = {};
    function re(i) {
      var o = i.interaction, l = i.iEvent, c = i.phase;
      if (o.prepared.name === "gesture") {
        var h = o.pointers.map(function(O) {
          return O.pointer;
        }), b = c === "start", E = c === "end", y = o.interactable.options.deltaSource;
        if (l.touches = [h[0], h[1]], b)
          l.distance = J.touchDistance(h, y), l.box = J.touchBBox(h), l.scale = 1, l.ds = 0, l.angle = J.touchAngle(h, y), l.da = 0, o.gesture.startDistance = l.distance, o.gesture.startAngle = l.angle;
        else if (E) {
          var x = o.prevEvent;
          l.distance = x.distance, l.box = x.box, l.scale = x.scale, l.ds = 0, l.angle = x.angle, l.da = 0;
        } else
          l.distance = J.touchDistance(h, y), l.box = J.touchBBox(h), l.scale = l.distance / o.gesture.startDistance, l.angle = J.touchAngle(h, y), l.ds = l.scale - o.gesture.scale, l.da = l.angle - o.gesture.angle;
        o.gesture.distance = l.distance, o.gesture.angle = l.angle, a.default.number(l.scale) && l.scale !== 1 / 0 && !isNaN(l.scale) && (o.gesture.scale = l.scale);
      }
    }
    __name(re, "re");
    u(re, "yt"), Object.defineProperty(G, "__esModule", { value: true }), G.default = void 0;
    var le = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var o = i.actions, l = i.Interactable, c = i.defaults;
      l.prototype.gesturable = function(h) {
        return a.default.object(h) ? (this.options.gesture.enabled = h.enabled !== false, this.setPerAction("gesture", h), this.setOnEvents("gesture", h), this) : a.default.bool(h) ? (this.options.gesture.enabled = h, this) : this.options.gesture;
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
    } }, Re = le;
    G.default = Re;
    var xe = {};
    function xt(i, o, l, c, h, b, E) {
      if (!o)
        return false;
      if (o === true) {
        var y = a.default.number(b.width) ? b.width : b.right - b.left, x = a.default.number(b.height) ? b.height : b.bottom - b.top;
        if (E = Math.min(E, Math.abs((i === "left" || i === "right" ? y : x) / 2)), y < 0 && (i === "left" ? i = "right" : i === "right" && (i = "left")), x < 0 && (i === "top" ? i = "bottom" : i === "bottom" && (i = "top")), i === "left") {
          var O = y >= 0 ? b.left : b.right;
          return l.x < O + E;
        }
        if (i === "top") {
          var A = x >= 0 ? b.top : b.bottom;
          return l.y < A + E;
        }
        if (i === "right")
          return l.x > (y >= 0 ? b.right : b.left) - E;
        if (i === "bottom")
          return l.y > (x >= 0 ? b.bottom : b.top) - E;
      }
      return !!a.default.element(c) && (a.default.element(o) ? o === c : z.matchesUpTo(c, o, h));
    }
    __name(xt, "xt");
    u(xt, "wt");
    function Lt(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.resizeAxes) {
        var c = o;
        l.interactable.options.resize.square ? (l.resizeAxes === "y" ? c.delta.x = c.delta.y : c.delta.y = c.delta.x, c.axes = "xy") : (c.axes = l.resizeAxes, l.resizeAxes === "x" ? c.delta.y = 0 : l.resizeAxes === "y" && (c.delta.x = 0));
      }
    }
    __name(Lt, "Lt");
    u(Lt, "_t"), Object.defineProperty(xe, "__esModule", { value: true }), xe.default = void 0;
    var At = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o = i.actions, l = i.browser, c = i.Interactable, h = i.defaults;
      At.cursors = function(b) {
        return b.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(l), At.defaultMargin = l.supportsTouch || l.supportsPointerEvent ? 20 : 10, c.prototype.resizable = function(b) {
        return function(E, y, x) {
          return a.default.object(y) ? (E.options.resize.enabled = y.enabled !== false, E.setPerAction("resize", y), E.setOnEvents("resize", y), a.default.string(y.axis) && /^x$|^y$|^xy$/.test(y.axis) ? E.options.resize.axis = y.axis : y.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), a.default.bool(y.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = y.preserveAspectRatio : a.default.bool(y.square) && (E.options.resize.square = y.square), E) : a.default.bool(y) ? (E.options.resize.enabled = y, E) : E.options.resize;
        }(this, b, i);
      }, o.map.resize = At, o.methodDict.resize = "resizable", h.actions.resize = At.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o) {
        var l = o.iEvent, c = o.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var h = l, b = c.rect;
          c._rects = { start: (0, q.default)({}, b), corrected: (0, q.default)({}, b), previous: (0, q.default)({}, b), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, h.edges = c.prepared.edges, h.rect = c._rects.corrected, h.deltaRect = c._rects.delta;
        }
      })(i), Lt(i);
    }, "interactions:action-move": function(i) {
      (function(o) {
        var l = o.iEvent, c = o.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var h = l, b = c.interactable.options.resize.invert, E = b === "reposition" || b === "negate", y = c.rect, x = c._rects, O = x.start, A = x.corrected, P = x.delta, N = x.previous;
          if ((0, q.default)(N, A), E) {
            if ((0, q.default)(A, y), b === "reposition") {
              if (A.top > A.bottom) {
                var j = A.top;
                A.top = A.bottom, A.bottom = j;
              }
              if (A.left > A.right) {
                var D = A.left;
                A.left = A.right, A.right = D;
              }
            }
          } else
            A.top = Math.min(y.top, O.bottom), A.bottom = Math.max(y.bottom, O.top), A.left = Math.min(y.left, O.right), A.right = Math.max(y.right, O.left);
          for (var F in A.width = A.right - A.left, A.height = A.bottom - A.top, A)
            P[F] = A[F] - N[F];
          h.edges = c.prepared.edges, h.rect = A, h.deltaRect = P;
        }
      })(i), Lt(i);
    }, "interactions:action-end": function(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.prepared.edges) {
        var c = o;
        c.edges = l.prepared.edges, c.rect = l._rects.corrected, c.deltaRect = l._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, c = i.element, h = i.rect, b = i.buttons;
      if (h) {
        var E = (0, q.default)({}, o.coords.cur.page), y = l.options.resize;
        if (y && y.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || b & y.mouseButtons)) {
          if (a.default.object(y.edges)) {
            var x = { left: false, right: false, top: false, bottom: false };
            for (var O in x)
              x[O] = xt(O, y.edges[O], E, o._latestPointer.eventTarget, c, h, y.margin || At.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (i.action = { name: "resize", edges: x });
          } else {
            var A = y.axis !== "y" && E.x > h.right - At.defaultMargin, P = y.axis !== "x" && E.y > h.bottom - At.defaultMargin;
            (A || P) && (i.action = { name: "resize", axes: (A ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o = i.edges, l = i.axis, c = i.name, h = At.cursors, b = null;
      if (l)
        b = h[c + l];
      else if (o) {
        for (var E = "", y = ["top", "bottom", "left", "right"], x = 0; x < y.length; x++) {
          var O = y[x];
          o[O] && (E += O);
        }
        b = h[E];
      }
      return b;
    }, defaultMargin: null }, xa = At;
    xe.default = xa;
    var br = {};
    Object.defineProperty(br, "__esModule", { value: true }), br.default = void 0;
    var lo = { id: "actions", install: function(i) {
      i.usePlugin(G.default), i.usePlugin(xe.default), i.usePlugin(f.default), i.usePlugin(Zr.default);
    } };
    br.default = lo;
    var It = {};
    Object.defineProperty(It, "__esModule", { value: true }), It.default = void 0;
    var Pt, Kr, Ei = 0, Si = { request: function(i) {
      return Pt(i);
    }, cancel: function(i) {
      return Kr(i);
    }, init: function(i) {
      if (Pt = i.requestAnimationFrame, Kr = i.cancelAnimationFrame, !Pt)
        for (var o = ["ms", "moz", "webkit", "o"], l = 0; l < o.length; l++) {
          var c = o[l];
          Pt = i["".concat(c, "RequestAnimationFrame")], Kr = i["".concat(c, "CancelAnimationFrame")] || i["".concat(c, "CancelRequestAnimationFrame")];
        }
      Pt = Pt && Pt.bind(i), Kr = Kr && Kr.bind(i), Pt || (Pt = u(function(h) {
        var b = Date.now(), E = Math.max(0, 16 - (b - Ei)), y = i.setTimeout(function() {
          h(b + E);
        }, E);
        return Ei = b + E, y;
      }, "jt"), Kr = u(function(h) {
        return clearTimeout(h);
      }, "Mt"));
    } };
    It.default = Si;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = void 0, gn.getContainer = Ea, gn.getScroll = uo, gn.getScrollSize = function(i) {
      return a.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, gn.getScrollSizeDelta = function(i, o) {
      var l = i.interaction, c = i.element, h = l && l.interactable.options[l.prepared.name].autoScroll;
      if (!h || !h.enabled)
        return o(), { x: 0, y: 0 };
      var b = Ea(h.container, l.interactable, c), E = uo(b);
      o();
      var y = uo(b);
      return { x: y.x - E.x, y: y.y - E.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, It.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = It.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), It.default.cancel(ce.i);
    }, scroll: function() {
      var i = ce.interaction, o = i.interactable, l = i.element, c = i.prepared.name, h = o.options[c].autoScroll, b = Ea(h.container, o, l), E = ce.now(), y = (E - ce.prevTime) / 1e3, x = h.speed * y;
      if (x >= 1) {
        var O = { x: ce.x * x, y: ce.y * x };
        if (O.x || O.y) {
          var A = uo(b);
          a.default.window(b) ? b.scrollBy(O.x, O.y) : b && (b.scrollLeft += O.x, b.scrollTop += O.y);
          var P = uo(b), N = { x: P.x - A.x, y: P.y - A.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: l, interactable: o, delta: N, interaction: i, container: b });
        }
        ce.prevTime = E;
      }
      ce.isScrolling && (It.default.cancel(ce.i), ce.i = It.default.request(ce.scroll));
    }, check: function(i, o) {
      var l;
      return (l = i.options[o].autoScroll) == null ? void 0 : l.enabled;
    }, onInteractionMove: function(i) {
      var o = i.interaction, l = i.pointer;
      if (o.interacting() && ce.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ce.x = ce.y = 0;
        else {
          var c, h, b, E, y = o.interactable, x = o.element, O = o.prepared.name, A = y.options[O].autoScroll, P = Ea(A.container, y, x);
          if (a.default.window(P))
            E = l.clientX < ce.margin, c = l.clientY < ce.margin, h = l.clientX > P.innerWidth - ce.margin, b = l.clientY > P.innerHeight - ce.margin;
          else {
            var N = z.getElementClientRect(P);
            E = l.clientX < N.left + ce.margin, c = l.clientY < N.top + ce.margin, h = l.clientX > N.right - ce.margin, b = l.clientY > N.bottom - ce.margin;
          }
          ce.x = h ? 1 : E ? -1 : 0, ce.y = b ? 1 : c ? -1 : 0, ce.isScrolling || (ce.margin = A.margin, ce.speed = A.speed, ce.start(o));
        }
    } };
    function Ea(i, o, l) {
      return (a.default.string(i) ? (0, oe.getStringOptionResult)(i, o, l) : i) || (0, r.getWindow)(l);
    }
    __name(Ea, "Ea");
    u(Ea, "zt");
    function uo(i) {
      return a.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(uo, "uo");
    u(uo, "Ct");
    var Im = { id: "auto-scroll", install: function(i) {
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
    } } }, Pm = Im;
    gn.default = Pm;
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
    var Sa = {};
    function zm(i) {
      return a.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(zm, "zm");
    u(zm, "Yt");
    function Rm(i) {
      return a.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Rm, "Rm");
    u(Rm, "Wt"), Object.defineProperty(Sa, "__esModule", { value: true }), Sa.default = void 0;
    var Dm = { id: "auto-start/interactableMethods", install: function(i) {
      var o = i.Interactable;
      o.prototype.getAction = function(l, c, h, b) {
        var E = function(y, x, O, A, P) {
          var N = y.getRect(A), j = { action: null, interactable: y, interaction: O, element: A, rect: N, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", j), j.action;
        }(this, c, h, b, i);
        return this.options.actionChecker ? this.options.actionChecker(l, c, E, this, b, h) : E;
      }, o.prototype.ignoreFrom = (0, lr.warnOnce)(function(l) {
        return this._backCompatOption("ignoreFrom", l);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, lr.warnOnce)(function(l) {
        return this._backCompatOption("allowFrom", l);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Rm, o.prototype.styleCursor = zm;
    } };
    Sa.default = Dm;
    var Ti = {};
    function Pc(i, o, l, c, h) {
      return o.testIgnoreAllow(o.options[i.name], l, c) && o.options[i.name].enabled && Ta(o, l, i, h) ? i : null;
    }
    __name(Pc, "Pc");
    u(Pc, "Vt");
    function km(i, o, l, c, h, b, E) {
      for (var y = 0, x = c.length; y < x; y++) {
        var O = c[y], A = h[y], P = O.getAction(o, l, i, A);
        if (P) {
          var N = Pc(P, O, A, b, E);
          if (N)
            return { action: N, interactable: O, element: A };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(km, "km");
    u(km, "Nt");
    function zc(i, o, l, c, h) {
      var b = [], E = [], y = c;
      function x(A) {
        b.push(A), E.push(y);
      }
      __name(x, "x");
      for (u(x, "u"); a.default.element(y); ) {
        b = [], E = [], h.interactables.forEachMatch(y, x);
        var O = km(i, o, l, b, E, c, h);
        if (O.action && !O.interactable.options[O.action.name].manualStart)
          return O;
        y = z.parentNode(y);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(zc, "zc");
    u(zc, "qt");
    function Rc(i, o, l) {
      var c = o.action, h = o.interactable, b = o.element;
      c = c || { name: null }, i.interactable = h, i.element = b, (0, lr.copyAction)(i.prepared, c), i.rect = h && c.name ? h.getRect(b) : null, kc(i, l), l.fire("autoStart:prepared", { interaction: i });
    }
    __name(Rc, "Rc");
    u(Rc, "Gt");
    function Ta(i, o, l, c) {
      var h = i.options, b = h[l.name].max, E = h[l.name].maxPerElement, y = c.autoStart.maxInteractions, x = 0, O = 0, A = 0;
      if (!(b && E && y))
        return false;
      for (var P = 0; P < c.interactions.list.length; P++) {
        var N = c.interactions.list[P], j = N.prepared.name;
        if (N.interacting() && (++x >= y || N.interactable === i && ((O += j === l.name ? 1 : 0) >= b || N.element === o && (A++, j === l.name && A >= E))))
          return false;
      }
      return y > 0;
    }
    __name(Ta, "Ta");
    u(Ta, "$t");
    function Dc(i, o) {
      return a.default.number(i) ? (o.autoStart.maxInteractions = i, this) : o.autoStart.maxInteractions;
    }
    __name(Dc, "Dc");
    u(Dc, "Ht");
    function wl(i, o, l) {
      var c = l.autoStart.cursorElement;
      c && c !== i && (c.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o, i.style.cursor = o, l.autoStart.cursorElement = o ? i : null;
    }
    __name(wl, "wl");
    u(wl, "Kt");
    function kc(i, o) {
      var l = i.interactable, c = i.element, h = i.prepared;
      if (i.pointerType === "mouse" && l && l.options.styleCursor) {
        var b = "";
        if (h.name) {
          var E = l.options[h.name].cursorChecker;
          b = a.default.func(E) ? E(h, l, c, i._interacting) : o.actions.map[h.name].getCursor(h);
        }
        wl(i.element, b || "", o);
      } else
        o.autoStart.cursorElement && wl(o.autoStart.cursorElement, "", o);
    }
    __name(kc, "kc");
    u(kc, "Zt"), Object.defineProperty(Ti, "__esModule", { value: true }), Ti.default = void 0;
    var Nm = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o = i.interactStatic, l = i.defaults;
      i.usePlugin(Sa.default), l.base.actionChecker = null, l.base.styleCursor = true, (0, q.default)(l.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(c) {
        return Dc(c, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Ta, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget;
      l.interacting() || Rc(l, zc(l, c, h, b, o), o);
    }, "interactions:move": function(i, o) {
      (function(l, c) {
        var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget;
        h.pointerType !== "mouse" || h.pointerIsDown || h.interacting() || Rc(h, zc(h, b, E, y, c), c);
      })(i, o), function(l, c) {
        var h = l.interaction;
        if (h.pointerIsDown && !h.interacting() && h.pointerWasMoved && h.prepared.name) {
          c.fire("autoStart:before-start", l);
          var b = h.interactable, E = h.prepared.name;
          E && b && (b.options[E].manualStart || !Ta(b, h.element, h.prepared, c) ? h.stop() : (h.start(h.prepared, b, h.element), kc(h, c)));
        }
      }(i, o);
    }, "interactions:stop": function(i, o) {
      var l = i.interaction, c = l.interactable;
      c && c.options.styleCursor && wl(l.element, "", o);
    } }, maxInteractions: Dc, withinInteractionLimit: Ta, validateAction: Pc }, _m = Nm;
    Ti.default = _m;
    var Ca = {};
    Object.defineProperty(Ca, "__esModule", { value: true }), Ca.default = void 0;
    var Lm = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o) {
      var l = i.interaction, c = i.eventTarget, h = i.dx, b = i.dy;
      if (l.prepared.name === "drag") {
        var E = Math.abs(h), y = Math.abs(b), x = l.interactable.options.drag, O = x.startAxis, A = E > y ? "x" : E < y ? "y" : "xy";
        if (l.prepared.axis = x.lockAxis === "start" ? A[0] : x.lockAxis, A !== "xy" && O !== "xy" && O !== A) {
          l.prepared.name = null;
          for (var P = c, N = function(D) {
            if (D !== l.interactable) {
              var F = l.interactable.options.drag;
              if (!F.manualStart && D.testIgnoreAllow(F, P, c)) {
                var Z = D.getAction(l.downPointer, l.downEvent, l, P);
                if (Z && Z.name === "drag" && function(W, ne) {
                  if (!ne)
                    return false;
                  var ae = ne.options.drag.startAxis;
                  return W === "xy" || ae === "xy" || ae === W;
                }(A, D) && Ti.default.validateAction(Z, D, P, c, o))
                  return D;
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
    Ca.default = Lm;
    var Oa = {};
    function xl(i) {
      var o = i.prepared && i.prepared.name;
      if (!o)
        return null;
      var l = i.interactable.options;
      return l[o].hold || l[o].delay;
    }
    __name(xl, "xl");
    u(xl, "re"), Object.defineProperty(Oa, "__esModule", { value: true }), Oa.default = void 0;
    var Gm = { id: "auto-start/hold", install: function(i) {
      var o = i.defaults;
      i.usePlugin(Ti.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var o = i.interaction, l = xl(o);
      l > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, l));
    }, "interactions:move": function(i) {
      var o = i.interaction, l = i.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !l && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var o = i.interaction;
      xl(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: xl }, jm = Gm;
    Oa.default = jm;
    var Ma = {};
    Object.defineProperty(Ma, "__esModule", { value: true }), Ma.default = void 0;
    var Hm = { id: "auto-start", install: function(i) {
      i.usePlugin(Ti.default), i.usePlugin(Oa.default), i.usePlugin(Ca.default);
    } };
    Ma.default = Hm;
    var Ci = {};
    function Bm(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : a.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Bm, "Bm");
    u(Bm, "ue");
    function $m(i) {
      var o = i.interaction, l = i.event;
      o.interactable && o.interactable.checkAndPreventDefault(l);
    }
    __name($m, "$m");
    u($m, "ce");
    function Nc(i) {
      var o = i.Interactable;
      o.prototype.preventDefault = Bm, o.prototype.checkAndPreventDefault = function(l) {
        return function(c, h, b) {
          var E = c.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (h.events.supportsPassive && /^touch(start|move)$/.test(b.type)) {
                var y = (0, r.getWindow)(b.target).document, x = h.getDocOptions(y);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(b.type) || a.default.element(b.target) && (0, z.matchesSelector)(b.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || b.preventDefault();
            } else
              b.preventDefault();
        }(this, i, l);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(l) {
        for (var c = 0; c < i.interactions.list.length; c++) {
          var h = i.interactions.list[c];
          if (h.element && (h.element === l.target || (0, z.nodeContains)(h.element, l.target)))
            return void h.interactable.checkAndPreventDefault(l);
        }
      } });
    }
    __name(Nc, "Nc");
    u(Nc, "fe"), Object.defineProperty(Ci, "__esModule", { value: true }), Ci.default = void 0, Ci.install = Nc;
    var qm = { id: "core/interactablePreventDefault", install: Nc, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o) {
      return i["interactions:".concat(o)] = $m, i;
    }, {}) };
    Ci.default = qm;
    var El = {};
    Object.defineProperty(El, "__esModule", { value: true }), El.default = void 0, El.default = {};
    var co, Sl = {};
    Object.defineProperty(Sl, "__esModule", { value: true }), Sl.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(co || (co = {})), co.touchAction, co.boxSizing, co.noListeners;
    var Fm = { id: "dev-tools", install: function() {
    } };
    Sl.default = Fm;
    var qn = {};
    Object.defineProperty(qn, "__esModule", { value: true }), qn.default = u(/* @__PURE__ */ __name(function i(o) {
      var l = {};
      for (var c in o) {
        var h = o[c];
        a.default.plainObject(h) ? l[c] = i(h) : a.default.array(h) ? l[c] = Pe.from(h) : l[c] = h;
      }
      return l;
    }, "i"), "t");
    var Fn = {};
    function _c(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var b, E, y = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (b = h.next()).done) && (y.push(b.value), !c || y.length !== c); x = true)
              ;
          } catch (A) {
            O = true, E = A;
          } finally {
            try {
              x || h.return == null || h.return();
            } finally {
              if (O)
                throw E;
            }
          }
          return y;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Lc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Lc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(_c, "_c");
    u(_c, "be");
    function Lc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Lc, "Lc");
    u(Lc, "xe");
    function Um(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Um, "Um");
    u(Um, "we");
    function Un(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Un, "Un");
    u(Un, "_e"), Object.defineProperty(Fn, "__esModule", { value: true }), Fn.default = void 0, Fn.getRectOffset = Gc;
    var Wm = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Un(this, "states", []), Un(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), Un(this, "startDelta", void 0), Un(this, "result", void 0), Un(this, "endResult", void 0), Un(this, "edges", void 0), Un(this, "interaction", void 0), this.interaction = c, this.result = Aa();
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(c, h) {
        var b = c.phase, E = this.interaction, y = function(O) {
          var A = O.interactable.options[O.prepared.name], P = A.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var j = A[N];
            return j && j.enabled && { options: j, methods: j._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(E);
        this.prepareStates(y), this.edges = (0, q.default)({}, E.edges), this.startOffset = Gc(E.rect, h), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: b, pageCoords: h, preEnd: false });
        return this.result = Aa(), this.startAll(x), this.result = this.setAll(x);
      } }, { key: "fillArg", value: function(c) {
        var h = this.interaction;
        return c.interaction = h, c.interactable = h.interactable, c.element = h.element, c.rect = c.rect || h.rect, c.edges = this.edges, c.startOffset = this.startOffset, c;
      } }, { key: "startAll", value: function(c) {
        for (var h = 0; h < this.states.length; h++) {
          var b = this.states[h];
          b.methods.start && (c.state = b, b.methods.start(c));
        }
      } }, { key: "setAll", value: function(c) {
        var h = c.phase, b = c.preEnd, E = c.skipModifiers, y = c.rect;
        c.coords = (0, q.default)({}, c.pageCoords), c.rect = (0, q.default)({}, y);
        for (var x = E ? this.states.slice(E) : this.states, O = Aa(c.coords, c.rect), A = 0; A < x.length; A++) {
          var P, N = x[A], j = N.options, D = (0, q.default)({}, c.coords), F = null;
          (P = N.methods) != null && P.set && this.shouldDo(j, b, h) && (c.state = N, F = N.methods.set(c), oe.addEdges(this.interaction.edges, c.rect, { x: c.coords.x - D.x, y: c.coords.y - D.y })), O.eventProps.push(F);
        }
        O.delta.x = c.coords.x - c.pageCoords.x, O.delta.y = c.coords.y - c.pageCoords.y, O.rectDelta.left = c.rect.left - y.left, O.rectDelta.right = c.rect.right - y.right, O.rectDelta.top = c.rect.top - y.top, O.rectDelta.bottom = c.rect.bottom - y.bottom;
        var Z = this.result.coords, W = this.result.rect;
        if (Z && W) {
          var ne = O.rect.left !== W.left || O.rect.right !== W.right || O.rect.top !== W.top || O.rect.bottom !== W.bottom;
          O.changed = ne || Z.x !== O.coords.x || Z.y !== O.coords.y;
        }
        return O;
      } }, { key: "applyToInteraction", value: function(c) {
        var h = this.interaction, b = c.phase, E = h.coords.cur, y = h.coords.start, x = this.result, O = this.startDelta, A = x.delta;
        b === "start" && (0, q.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[y, O], [E, A]].length; P++) {
          var N = _c([[y, O], [E, A]][P], 2), j = N[0], D = N[1];
          j.page.x += D.x, j.page.y += D.y, j.client.x += D.x, j.client.y += D.y;
        }
        var F = this.result.rectDelta, Z = c.rect || h.rect;
        Z.left += F.left, Z.right += F.right, Z.top += F.top, Z.bottom += F.bottom, Z.width = Z.right - Z.left, Z.height = Z.bottom - Z.top;
      } }, { key: "setAndApply", value: function(c) {
        var h = this.interaction, b = c.phase, E = c.preEnd, y = c.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: b, pageCoords: c.modifiedCoords || h.coords.cur.page }));
        if (this.result = x, !x.changed && (!y || y < this.states.length) && h.interacting())
          return false;
        if (c.modifiedCoords) {
          var O = h.coords.cur.page, A = { x: c.modifiedCoords.x - O.x, y: c.modifiedCoords.y - O.y };
          x.coords.x += A.x, x.coords.y += A.y, x.delta.x += A.x, x.delta.y += A.y;
        }
        this.applyToInteraction(c);
      } }, { key: "beforeEnd", value: function(c) {
        var h = c.interaction, b = c.event, E = this.states;
        if (E && E.length) {
          for (var y = false, x = 0; x < E.length; x++) {
            var O = E[x];
            c.state = O;
            var A = O.options, P = O.methods, N = P.beforeEnd && P.beforeEnd(c);
            if (N)
              return this.endResult = N, false;
            y = y || !y && this.shouldDo(A, true, c.phase, true);
          }
          y && h.move({ event: b, preEnd: true });
        }
      } }, { key: "stop", value: function(c) {
        var h = c.interaction;
        if (this.states && this.states.length) {
          var b = (0, q.default)({ states: this.states, interactable: h.interactable, element: h.element, rect: null }, c);
          this.fillArg(b);
          for (var E = 0; E < this.states.length; E++) {
            var y = this.states[E];
            b.state = y, y.methods.stop && y.methods.stop(b);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(c) {
        this.states = [];
        for (var h = 0; h < c.length; h++) {
          var b = c[h], E = b.options, y = b.methods, x = b.name;
          this.states.push({ options: E, methods: y, index: h, name: x });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(c) {
        var h = c.interaction, b = h.coords, E = h.rect, y = h.modification;
        if (y.result) {
          for (var x = y.startDelta, O = y.result, A = O.delta, P = O.rectDelta, N = [[b.start, x], [b.cur, A]], j = 0; j < N.length; j++) {
            var D = _c(N[j], 2), F = D[0], Z = D[1];
            F.page.x -= Z.x, F.page.y -= Z.y, F.client.x -= Z.x, F.client.y -= Z.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(c, h, b, E) {
        return !(!c || c.enabled === false || E && !c.endOnly || c.endOnly && !h || b === "start" && !c.setStart);
      } }, { key: "copyFrom", value: function(c) {
        this.startOffset = c.startOffset, this.startDelta = c.startDelta, this.edges = c.edges, this.states = c.states.map(function(h) {
          return (0, qn.default)(h);
        }), this.result = Aa((0, q.default)({}, c.result.coords), (0, q.default)({}, c.result.rect));
      } }, { key: "destroy", value: function() {
        for (var c in this)
          this[c] = null;
      } }]) && Um(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Aa(i, o) {
      return { rect: o, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Aa, "Aa");
    u(Aa, "Oe");
    function Gc(i, o) {
      return i ? { left: o.x - i.left, top: o.y - i.top, right: i.right - o.x, bottom: i.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Gc, "Gc");
    u(Gc, "Ee"), Fn.default = Wm;
    var Et = {};
    function Ia(i) {
      var o = i.iEvent, l = i.interaction.modification.result;
      l && (o.modifiers = l.eventProps);
    }
    __name(Ia, "Ia");
    u(Ia, "Te"), Object.defineProperty(Et, "__esModule", { value: true }), Et.addEventModifiers = Ia, Et.default = void 0, Et.makeModifier = function(i, o) {
      var l = i.defaults, c = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, h = u(function(b) {
        var E = b || {};
        for (var y in E.enabled = E.enabled !== false, l)
          y in E || (E[y] = l[y]);
        var x = { options: E, methods: c, name: o, enable: function() {
          return E.enabled = true, x;
        }, disable: function() {
          return E.enabled = false, x;
        } };
        return x;
      }, "o");
      return o && typeof o == "string" && (h._defaults = l, h._methods = c), h;
    };
    var Vm = { id: "modifiers/base", before: ["actions"], install: function(i) {
      i.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.modification = new Fn.default(o);
    }, "interactions:before-action-start": function(i) {
      var o = i.interaction.modification;
      o.start(i, i.interaction.coords.start.page), i.interaction.edges = o.edges, o.applyToInteraction(i);
    }, "interactions:before-action-move": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:before-action-end": function(i) {
      return i.interaction.modification.beforeEnd(i);
    }, "interactions:action-start": Ia, "interactions:action-move": Ia, "interactions:action-end": Ia, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } }, Ym = Vm;
    Et.default = Ym;
    var po = {};
    Object.defineProperty(po, "__esModule", { value: true }), po.defaults = void 0, po.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var fo = {};
    function Tl(i) {
      return Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Tl(i);
    }
    __name(Tl, "Tl");
    u(Tl, "De");
    function Xm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Xm, "Xm");
    u(Xm, "Ae");
    function Cl(i, o) {
      return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Cl(i, o);
    }
    __name(Cl, "Cl");
    u(Cl, "ze");
    function Zm(i, o) {
      if (o && (Tl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return He(i);
    }
    __name(Zm, "Zm");
    u(Zm, "Ce");
    function He(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(He, "He");
    u(He, "Re");
    function Pa(i) {
      return Pa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Pa(i);
    }
    __name(Pa, "Pa");
    u(Pa, "Fe");
    function Ve(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ve, "Ve");
    u(Ve, "Xe"), Object.defineProperty(fo, "__esModule", { value: true }), fo.InteractEvent = void 0;
    var jc = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && Cl(y, x);
      })(E, i);
      var o, l, c, h, b = (c = E, h = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (y) {
          return false;
        }
      }(), function() {
        var y, x = Pa(c);
        if (h) {
          var O = Pa(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Zm(this, y);
      });
      function E(y, x, O, A, P, N, j) {
        var D;
        (function(Fe, Se) {
          if (!(Fe instanceof Se))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Ve(He(D = b.call(this, y)), "relatedTarget", null), Ve(He(D), "screenX", void 0), Ve(He(D), "screenY", void 0), Ve(He(D), "button", void 0), Ve(He(D), "buttons", void 0), Ve(He(D), "ctrlKey", void 0), Ve(He(D), "shiftKey", void 0), Ve(He(D), "altKey", void 0), Ve(He(D), "metaKey", void 0), Ve(He(D), "page", void 0), Ve(He(D), "client", void 0), Ve(He(D), "delta", void 0), Ve(He(D), "rect", void 0), Ve(He(D), "x0", void 0), Ve(He(D), "y0", void 0), Ve(He(D), "t0", void 0), Ve(He(D), "dt", void 0), Ve(He(D), "duration", void 0), Ve(He(D), "clientX0", void 0), Ve(He(D), "clientY0", void 0), Ve(He(D), "velocity", void 0), Ve(He(D), "speed", void 0), Ve(He(D), "swipe", void 0), Ve(He(D), "axes", void 0), Ve(He(D), "preEnd", void 0), P = P || y.element;
        var F = y.interactable, Z = (F && F.options || po.defaults).deltaSource, W = (0, ze.default)(F, P, O), ne = A === "start", ae = A === "end", ye = ne ? He(D) : y.prevEvent, De = ne ? y.coords.start : ae ? { page: ye.page, client: ye.client, timeStamp: y.coords.cur.timeStamp } : y.coords.cur;
        return D.page = (0, q.default)({}, De.page), D.client = (0, q.default)({}, De.client), D.rect = (0, q.default)({}, y.rect), D.timeStamp = De.timeStamp, ae || (D.page.x -= W.x, D.page.y -= W.y, D.client.x -= W.x, D.client.y -= W.y), D.ctrlKey = x.ctrlKey, D.altKey = x.altKey, D.shiftKey = x.shiftKey, D.metaKey = x.metaKey, D.button = x.button, D.buttons = x.buttons, D.target = P, D.currentTarget = P, D.preEnd = N, D.type = j || O + (A || ""), D.interactable = F, D.t0 = ne ? y.pointers[y.pointers.length - 1].downTime : ye.t0, D.x0 = y.coords.start.page.x - W.x, D.y0 = y.coords.start.page.y - W.y, D.clientX0 = y.coords.start.client.x - W.x, D.clientY0 = y.coords.start.client.y - W.y, D.delta = ne || ae ? { x: 0, y: 0 } : { x: D[Z].x - ye[Z].x, y: D[Z].y - ye[Z].y }, D.dt = y.coords.delta.timeStamp, D.duration = D.timeStamp - D.t0, D.velocity = (0, q.default)({}, y.coords.velocity[Z]), D.speed = (0, Je.default)(D.velocity.x, D.velocity.y), D.swipe = ae || A === "inertiastart" ? D.getSwipe() : null, D;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (l = [{ key: "getSwipe", value: function() {
        var y = this._interaction;
        if (y.prevEvent.speed < 600 || this.timeStamp - y.prevEvent.timeStamp > 150)
          return null;
        var x = 180 * Math.atan2(y.prevEvent.velocityY, y.prevEvent.velocityX) / Math.PI;
        x < 0 && (x += 360);
        var O = 112.5 <= x && x < 247.5, A = 202.5 <= x && x < 337.5;
        return { up: A, down: !A && 22.5 <= x && x < 157.5, left: O, right: !O && (292.5 <= x || x < 67.5), angle: x, speed: y.prevEvent.speed, velocity: { x: y.prevEvent.velocityX, y: y.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Xm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(sr.BaseEvent);
    fo.InteractEvent = jc, Object.defineProperties(jc.prototype, { pageX: { get: function() {
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
    var ho = {};
    function Hc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Hc, "Hc");
    u(Hc, "We");
    function Km(i, o, l) {
      return o && Hc(i.prototype, o), l && Hc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Km, "Km");
    u(Km, "Le");
    function mo(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(mo, "mo");
    u(mo, "Ue"), Object.defineProperty(ho, "__esModule", { value: true }), ho.PointerInfo = void 0;
    var Jm = Km(u(/* @__PURE__ */ __name(function i(o, l, c, h, b) {
      (function(E, y) {
        if (!(E instanceof y))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), mo(this, "id", void 0), mo(this, "pointer", void 0), mo(this, "event", void 0), mo(this, "downTime", void 0), mo(this, "downTarget", void 0), this.id = o, this.pointer = l, this.event = c, this.downTime = h, this.downTarget = b;
    }, "i"), "t"));
    ho.PointerInfo = Jm;
    var za, Ra, tr = {};
    function Qm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Qm, "Qm");
    u(Qm, "$e");
    function Ke(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ke, "Ke");
    u(Ke, "He"), Object.defineProperty(tr, "__esModule", { value: true }), tr.Interaction = void 0, Object.defineProperty(tr, "PointerInfo", { enumerable: true, get: function() {
      return ho.PointerInfo;
    } }), tr.default = tr._ProxyValues = tr._ProxyMethods = void 0, tr._ProxyValues = za, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(za || (tr._ProxyValues = za = {})), tr._ProxyMethods = Ra, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(Ra || (tr._ProxyMethods = Ra = {}));
    var ev = 0, Bc = function() {
      function i(c) {
        var h = this, b = c.pointerType, E = c.scopeFire;
        (function(N, j) {
          if (!(N instanceof j))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ke(this, "interactable", null), Ke(this, "element", null), Ke(this, "rect", null), Ke(this, "_rects", void 0), Ke(this, "edges", null), Ke(this, "_scopeFire", void 0), Ke(this, "prepared", { name: null, axis: null, edges: null }), Ke(this, "pointerType", void 0), Ke(this, "pointers", []), Ke(this, "downEvent", null), Ke(this, "downPointer", {}), Ke(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ke(this, "prevEvent", null), Ke(this, "pointerIsDown", false), Ke(this, "pointerWasMoved", false), Ke(this, "_interacting", false), Ke(this, "_ending", false), Ke(this, "_stopped", true), Ke(this, "_proxy", null), Ke(this, "simulation", null), Ke(this, "doMove", (0, lr.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ke(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), Ke(this, "_id", ev++), this._scopeFire = E, this.pointerType = b;
        var y = this;
        this._proxy = {};
        var x = u(function(N) {
          Object.defineProperty(h._proxy, N, { get: function() {
            return y[N];
          } });
        }, "a");
        for (var O in za)
          x(O);
        var A = u(function(N) {
          Object.defineProperty(h._proxy, N, { value: function() {
            return y[N].apply(y, arguments);
          } });
        }, "l");
        for (var P in Ra)
          A(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, l = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(c, h, b) {
        var E = this.updatePointer(c, h, b, true), y = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: c, event: h, eventTarget: b, pointerIndex: E, pointerInfo: y, type: "down", interaction: this });
      } }, { key: "start", value: function(c, h, b) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (c.name === "gesture" ? 2 : 1) || !h.options[c.name].enabled) && ((0, lr.copyAction)(this.prepared, c), this.interactable = h, this.element = b, this.rect = h.getRect(b), this.edges = this.prepared.edges ? (0, q.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(c, h, b) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(c, h, b, false);
        var E, y, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, y = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Je.default)(E, y) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(c), A = { pointer: c, pointerIndex: O, pointerInfo: this.pointers[O], event: h, type: "move", eventTarget: b, dx: E, dy: y, duplicate: x, interaction: this };
        x || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", A), x || this.simulation || (this.interacting() && (A.type = null, this.move(A)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(c) {
        c && c.event || J.setZeroCoords(this.coords.delta), (c = (0, q.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, c || {})).phase = "move", this._doPhase(c);
      } }, { key: "pointerUp", value: function(c, h, b, E) {
        var y = this.getPointerIndex(c);
        y === -1 && (y = this.updatePointer(c, h, b, false));
        var x = /cancel$/i.test(h.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(x), { pointer: c, pointerIndex: y, pointerInfo: this.pointers[y], event: h, eventTarget: b, type: x, curEventTarget: E, interaction: this }), this.simulation || this.end(h), this.removePointer(c, h);
      } }, { key: "documentBlur", value: function(c) {
        this.end(c), this._scopeFire("interactions:blur", { event: c, type: "blur", interaction: this });
      } }, { key: "end", value: function(c) {
        var h;
        this._ending = true, c = c || this._latestPointer.event, this.interacting() && (h = this._doPhase({ event: c, interaction: this, phase: "end" })), this._ending = false, h === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(c) {
        var h = J.getPointerId(c);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Pe.findIndex(this.pointers, function(b) {
          return b.id === h;
        });
      } }, { key: "getPointerInfo", value: function(c) {
        return this.pointers[this.getPointerIndex(c)];
      } }, { key: "updatePointer", value: function(c, h, b, E) {
        var y = J.getPointerId(c), x = this.getPointerIndex(c), O = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(h.type)), O ? O.pointer = c : (O = new ho.PointerInfo(y, c, h, null, null), x = this.pointers.length, this.pointers.push(O)), J.setCoords(this.coords.cur, this.pointers.map(function(A) {
          return A.pointer;
        }), this._now()), J.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, O.downTime = this.coords.cur.timeStamp, O.downTarget = b, J.pointerExtend(this.downPointer, c), this.interacting() || (J.copyCoords(this.coords.start, this.coords.cur), J.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = h, this.pointerWasMoved = false)), this._updateLatestPointer(c, h, b), this._scopeFire("interactions:update-pointer", { pointer: c, event: h, eventTarget: b, down: E, pointerInfo: O, pointerIndex: x, interaction: this }), x;
      } }, { key: "removePointer", value: function(c, h) {
        var b = this.getPointerIndex(c);
        if (b !== -1) {
          var E = this.pointers[b];
          this._scopeFire("interactions:remove-pointer", { pointer: c, event: h, eventTarget: null, pointerIndex: b, pointerInfo: E, interaction: this }), this.pointers.splice(b, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(c, h, b) {
        this._latestPointer.pointer = c, this._latestPointer.event = h, this._latestPointer.eventTarget = b;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(c, h, b, E) {
        return new fo.InteractEvent(this, c, this.prepared.name, h, this.element, b, E);
      } }, { key: "_fireEvent", value: function(c) {
        var h;
        (h = this.interactable) == null || h.fire(c), (!this.prevEvent || c.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = c);
      } }, { key: "_doPhase", value: function(c) {
        var h = c.event, b = c.phase, E = c.preEnd, y = c.type, x = this.rect;
        if (x && b === "move" && (oe.addEdges(this.edges, x, this.coords.delta[this.interactable.options.deltaSource]), x.width = x.right - x.left, x.height = x.bottom - x.top), this._scopeFire("interactions:before-action-".concat(b), c) === false)
          return false;
        var O = c.iEvent = this._createPreparedEvent(h, b, E, y);
        return this._scopeFire("interactions:action-".concat(b), c), b === "start" && (this.prevEvent = O), this._fireEvent(O), this._scopeFire("interactions:after-action-".concat(b), c), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], l && Qm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    tr.Interaction = Bc;
    var tv = Bc;
    tr.default = tv;
    var Wn = {};
    function $c(i) {
      i.pointerIsDown && (Ml(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name($c, "$c");
    u($c, "tn");
    function qc(i) {
      Ol(i.interaction);
    }
    __name(qc, "qc");
    u(qc, "en");
    function Ol(i) {
      if (!function(l) {
        return !(!l.offset.pending.x && !l.offset.pending.y);
      }(i))
        return false;
      var o = i.offset.pending;
      return Ml(i.coords.cur, o), Ml(i.coords.delta, o), oe.addEdges(i.edges, i.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(Ol, "Ol");
    u(Ol, "nn");
    function rv(i) {
      var o = i.x, l = i.y;
      this.offset.pending.x += o, this.offset.pending.y += l, this.offset.total.x += o, this.offset.total.y += l;
    }
    __name(rv, "rv");
    u(rv, "rn");
    function Ml(i, o) {
      var l = i.page, c = i.client, h = o.x, b = o.y;
      l.x += h, l.y += b, c.x += h, c.y += b;
    }
    __name(Ml, "Ml");
    u(Ml, "on"), Object.defineProperty(Wn, "__esModule", { value: true }), Wn.addTotal = $c, Wn.applyPending = Ol, Wn.default = void 0, tr._ProxyMethods.offsetBy = "";
    var nv = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = rv;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return $c(i.interaction);
    }, "interactions:before-action-start": qc, "interactions:before-action-move": qc, "interactions:before-action-end": function(i) {
      var o = i.interaction;
      if (Ol(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, iv = nv;
    Wn.default = iv;
    var Oi = {};
    function ov(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(ov, "ov");
    u(ov, "un");
    function gt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(gt, "gt");
    u(gt, "cn"), Object.defineProperty(Oi, "__esModule", { value: true }), Oi.default = Oi.InertiaState = void 0;
    var Fc = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), gt(this, "active", false), gt(this, "isModified", false), gt(this, "smoothEnd", false), gt(this, "allowResume", false), gt(this, "modification", void 0), gt(this, "modifierCount", 0), gt(this, "modifierArg", void 0), gt(this, "startCoords", void 0), gt(this, "t0", 0), gt(this, "v0", 0), gt(this, "te", 0), gt(this, "targetOffset", void 0), gt(this, "modifiedOffset", void 0), gt(this, "currentOffset", void 0), gt(this, "lambda_v0", 0), gt(this, "one_ve_v0", 0), gt(this, "timeout", void 0), gt(this, "interaction", void 0), this.interaction = c;
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(c) {
        var h = this.interaction, b = Da(h);
        if (!b || !b.enabled)
          return false;
        var E = h.coords.velocity.client, y = (0, Je.default)(E.x, E.y), x = this.modification || (this.modification = new Fn.default(h));
        if (x.copyFrom(h.modification), this.t0 = h._now(), this.allowResume = b.allowResume, this.v0 = y, this.currentOffset = { x: 0, y: 0 }, this.startCoords = h.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - h.coords.cur.timeStamp < 50 && y > b.minSpeed && y > b.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return h.modification.result.rect = null, h.offsetBy(this.targetOffset), h._doPhase({ interaction: h, event: c, phase: "inertiastart" }), h.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), h.modification.result.rect = null, this.active = true, h.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var c = this, h = this.interaction.coords.velocity.client, b = Da(this.interaction), E = b.resistance, y = -Math.log(b.endSpeed / this.v0) / E;
        this.targetOffset = { x: (h.x - y) / E, y: (h.y - y) / E }, this.te = y, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - b.endSpeed / this.v0;
        var x = this.modification, O = this.modifierArg;
        O.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, x.result = x.setAll(O), x.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + x.result.delta.x, y: this.targetOffset.y + x.result.delta.y }), this.onNextFrame(function() {
          return c.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var c = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return c.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(c) {
        var h = this;
        this.timeout = It.default.request(function() {
          h.active && c();
        });
      } }, { key: "inertiaTick", value: function() {
        var c, h, b, E, y, x = this, O = this.interaction, A = Da(O).resistance, P = (O._now() - this.t0) / 1e3;
        if (P < this.te) {
          var N, j = 1 - (Math.exp(-A * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (c = this.targetOffset.x, h = this.targetOffset.y, b = this.modifiedOffset.x, E = this.modifiedOffset.y, N = { x: Uc(y = j, 0, c, b), y: Uc(y, 0, h, E) }) : N = { x: this.targetOffset.x * j, y: this.targetOffset.y * j };
          var D = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += D.x, this.currentOffset.y += D.y, O.offsetBy(D), O.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          O.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var c = this, h = this.interaction, b = h._now() - this.t0, E = Da(h).smoothEndDuration;
        if (b < E) {
          var y = { x: Wc(b, 0, this.targetOffset.x, E), y: Wc(b, 0, this.targetOffset.y, E) }, x = { x: y.x - this.currentOffset.x, y: y.y - this.currentOffset.y };
          this.currentOffset.x += x.x, this.currentOffset.y += x.y, h.offsetBy(x), h.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return c.smoothEndTick();
          });
        } else
          h.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(c) {
        var h = c.pointer, b = c.event, E = c.eventTarget, y = this.interaction;
        y.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), y.updatePointer(h, b, E, true), y._doPhase({ interaction: y, event: b, phase: "resume" }), (0, J.copyCoords)(y.coords.prev, y.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, It.default.cancel(this.timeout);
      } }]) && ov(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Da(i) {
      var o = i.interactable, l = i.prepared;
      return o && o.options && l.name && o.options[l.name].inertia;
    }
    __name(Da, "Da");
    u(Da, "dn"), Oi.InertiaState = Fc;
    var av = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o = i.defaults;
      i.usePlugin(Wn.default), i.usePlugin(Et.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.inertia = new Fc(o);
    }, "interactions:before-action-end": function(i) {
      var o = i.interaction, l = i.event;
      return (!o._interacting || o.simulation || !o.inertia.start(l)) && null;
    }, "interactions:down": function(i) {
      var o = i.interaction, l = i.eventTarget, c = o.inertia;
      if (c.active)
        for (var h = l; a.default.element(h); ) {
          if (h === o.element) {
            c.resume(i);
            break;
          }
          h = z.parentNode(h);
        }
    }, "interactions:stop": function(i) {
      var o = i.interaction.inertia;
      o.active && o.stop();
    }, "interactions:before-action-resume": function(i) {
      var o = i.interaction.modification;
      o.stop(i), o.start(i, i.interaction.coords.cur.page), o.applyToInteraction(i);
    }, "interactions:before-action-inertiastart": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:action-resume": Et.addEventModifiers, "interactions:action-inertiastart": Et.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-resume": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    } } };
    function Uc(i, o, l, c) {
      var h = 1 - i;
      return h * h * o + 2 * h * i * l + i * i * c;
    }
    __name(Uc, "Uc");
    u(Uc, "vn");
    function Wc(i, o, l, c) {
      return -l * (i /= c) * (i - 2) + o;
    }
    __name(Wc, "Wc");
    u(Wc, "hn");
    var sv = av;
    Oi.default = sv;
    var vo = {};
    function lv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(lv, "lv");
    u(lv, "mn");
    function go(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(go, "go");
    u(go, "bn");
    function Vc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        if (i.immediatePropagationStopped)
          break;
        c(i);
      }
    }
    __name(Vc, "Vc");
    u(Vc, "xn"), Object.defineProperty(vo, "__esModule", { value: true }), vo.Eventable = void 0;
    var uv = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), go(this, "options", void 0), go(this, "types", {}), go(this, "propagationStopped", false), go(this, "immediatePropagationStopped", false), go(this, "global", void 0), this.options = (0, q.default)({}, c || {});
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "fire", value: function(c) {
        var h, b = this.global;
        (h = this.types[c.type]) && Vc(c, h), !c.propagationStopped && b && (h = b[c.type]) && Vc(c, h);
      } }, { key: "on", value: function(c, h) {
        var b = (0, Ie.default)(c, h);
        for (c in b)
          this.types[c] = Pe.merge(this.types[c] || [], b[c]);
      } }, { key: "off", value: function(c, h) {
        var b = (0, Ie.default)(c, h);
        for (c in b) {
          var E = this.types[c];
          if (E && E.length)
            for (var y = 0; y < b[c].length; y++) {
              var x = b[c][y], O = E.indexOf(x);
              O !== -1 && E.splice(O, 1);
            }
        }
      } }, { key: "getRect", value: function(c) {
        return null;
      } }]) && lv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    vo.Eventable = uv;
    var bo = {};
    Object.defineProperty(bo, "__esModule", { value: true }), bo.default = function(i, o) {
      if (o.phaselessTypes[i])
        return true;
      for (var l in o.map)
        if (i.indexOf(l) === 0 && i.substr(l.length) in o.phases)
          return true;
      return false;
    };
    var Al = {};
    Object.defineProperty(Al, "__esModule", { value: true }), Al.createInteractStatic = function(i) {
      var o = u(/* @__PURE__ */ __name(function l(c, h) {
        var b = i.interactables.get(c, h);
        return b || ((b = i.interactables.new(c, h)).events.global = l.globalEvents), b;
      }, "l"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = i, o.use = function(l, c) {
        return this.scope.usePlugin(l, c), this;
      }, o.isSet = function(l, c) {
        return !!this.scope.interactables.get(l, c && c.context);
      }, o.on = (0, lr.warnOnce)(function(l, c, h) {
        if (a.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), a.default.array(l)) {
          for (var b = 0; b < l.length; b++) {
            var E = l[b];
            this.on(E, c, h);
          }
          return this;
        }
        if (a.default.object(l)) {
          for (var y in l)
            this.on(y, l[y], c);
          return this;
        }
        return (0, bo.default)(l, this.scope.actions) ? this.globalEvents[l] ? this.globalEvents[l].push(c) : this.globalEvents[l] = [c] : this.scope.events.add(this.scope.document, l, c, { options: h }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, lr.warnOnce)(function(l, c, h) {
        if (a.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), a.default.array(l)) {
          for (var b = 0; b < l.length; b++) {
            var E = l[b];
            this.off(E, c, h);
          }
          return this;
        }
        if (a.default.object(l)) {
          for (var y in l)
            this.off(y, l[y], c);
          return this;
        }
        var x;
        return (0, bo.default)(l, this.scope.actions) ? l in this.globalEvents && (x = this.globalEvents[l].indexOf(c)) !== -1 && this.globalEvents[l].splice(x, 1) : this.scope.events.remove(this.scope.document, l, c, h), this;
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
    var ka = {};
    function cv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(cv, "cv");
    u(cv, "En");
    function Jr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Jr, "Jr");
    u(Jr, "Sn"), Object.defineProperty(ka, "__esModule", { value: true }), ka.Interactable = void 0;
    var pv = function() {
      function i(c, h, b, E) {
        (function(y, x) {
          if (!(y instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Jr(this, "options", void 0), Jr(this, "_actions", void 0), Jr(this, "target", void 0), Jr(this, "events", new vo.Eventable()), Jr(this, "_context", void 0), Jr(this, "_win", void 0), Jr(this, "_doc", void 0), Jr(this, "_scopeEvents", void 0), Jr(this, "_rectChecker", void 0), this._actions = h.actions, this.target = c, this._context = h.context || b, this._win = (0, r.getWindow)((0, z.trySelector)(c) ? this._context : c), this._doc = this._win.document, this._scopeEvents = E, this.set(h);
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(c, h) {
        return a.default.func(h.onstart) && this.on("".concat(c, "start"), h.onstart), a.default.func(h.onmove) && this.on("".concat(c, "move"), h.onmove), a.default.func(h.onend) && this.on("".concat(c, "end"), h.onend), a.default.func(h.oninertiastart) && this.on("".concat(c, "inertiastart"), h.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(c, h, b) {
        (a.default.array(h) || a.default.object(h)) && this.off(c, h), (a.default.array(b) || a.default.object(b)) && this.on(c, b);
      } }, { key: "setPerAction", value: function(c, h) {
        var b = this._defaults;
        for (var E in h) {
          var y = E, x = this.options[c], O = h[y];
          y === "listeners" && this.updatePerActionListeners(c, x.listeners, O), a.default.array(O) ? x[y] = Pe.from(O) : a.default.plainObject(O) ? (x[y] = (0, q.default)(x[y] || {}, (0, qn.default)(O)), a.default.object(b.perAction[y]) && "enabled" in b.perAction[y] && (x[y].enabled = O.enabled !== false)) : a.default.bool(O) && a.default.object(b.perAction[y]) ? x[y].enabled = O : x[y] = O;
        }
      } }, { key: "getRect", value: function(c) {
        return c = c || (a.default.element(this.target) ? this.target : null), a.default.string(this.target) && (c = c || this._context.querySelector(this.target)), (0, z.getElementRect)(c);
      } }, { key: "rectChecker", value: function(c) {
        var h = this;
        return a.default.func(c) ? (this._rectChecker = c, this.getRect = function(b) {
          var E = (0, q.default)({}, h._rectChecker(b));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : c === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(c, h) {
        if ((0, z.trySelector)(h) || a.default.object(h)) {
          for (var b in this.options[c] = h, this._actions.map)
            this.options[b][c] = h;
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
      } }, { key: "testIgnoreAllow", value: function(c, h, b) {
        return !this.testIgnore(c.ignoreFrom, h, b) && this.testAllow(c.allowFrom, h, b);
      } }, { key: "testAllow", value: function(c, h, b) {
        return !c || !!a.default.element(b) && (a.default.string(c) ? (0, z.matchesUpTo)(b, c, h) : !!a.default.element(c) && (0, z.nodeContains)(c, b));
      } }, { key: "testIgnore", value: function(c, h, b) {
        return !(!c || !a.default.element(b)) && (a.default.string(c) ? (0, z.matchesUpTo)(b, c, h) : !!a.default.element(c) && (0, z.nodeContains)(c, b));
      } }, { key: "fire", value: function(c) {
        return this.events.fire(c), this;
      } }, { key: "_onOff", value: function(c, h, b, E) {
        a.default.object(h) && !a.default.array(h) && (E = b, b = null);
        var y = c === "on" ? "add" : "remove", x = (0, Ie.default)(h, b);
        for (var O in x) {
          O === "wheel" && (O = $.default.wheelEvent);
          for (var A = 0; A < x[O].length; A++) {
            var P = x[O][A];
            (0, bo.default)(O, this._actions) ? this.events[c](O, P) : a.default.string(this.target) ? this._scopeEvents["".concat(y, "Delegate")](this.target, this._context, O, P, E) : this._scopeEvents[y](this.target, O, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(c, h, b) {
        return this._onOff("on", c, h, b);
      } }, { key: "off", value: function(c, h, b) {
        return this._onOff("off", c, h, b);
      } }, { key: "set", value: function(c) {
        var h = this._defaults;
        for (var b in a.default.object(c) || (c = {}), this.options = (0, qn.default)(h.base), this._actions.methodDict) {
          var E = b, y = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, q.default)((0, q.default)({}, h.perAction), h.actions[E])), this[y](c[E]);
        }
        for (var x in c)
          a.default.func(this[x]) && this[x](c[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (a.default.string(this.target))
          for (var c in this._scopeEvents.delegatedEvents)
            for (var h = this._scopeEvents.delegatedEvents[c], b = h.length - 1; b >= 0; b--) {
              var E = h[b], y = E.selector, x = E.context, O = E.listeners;
              y === this.target && x === this._context && h.splice(b, 1);
              for (var A = O.length - 1; A >= 0; A--)
                this._scopeEvents.removeDelegate(this.target, this._context, c, O[A][0], O[A][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && cv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    ka.Interactable = pv;
    var Na = {};
    function dv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(dv, "dv");
    u(dv, "Mn");
    function Il(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Il, "Il");
    u(Il, "kn"), Object.defineProperty(Na, "__esModule", { value: true }), Na.InteractableSet = void 0;
    var fv = function() {
      function i(c) {
        var h = this;
        (function(b, E) {
          if (!(b instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Il(this, "list", []), Il(this, "selectorMap", {}), Il(this, "scope", void 0), this.scope = c, c.addListeners({ "interactable:unset": function(b) {
          var E = b.interactable, y = E.target, x = E._context, O = a.default.string(y) ? h.selectorMap[y] : y[h.scope.id], A = Pe.findIndex(O, function(P) {
            return P.context === x;
          });
          O[A] && (O[A].context = null, O[A].interactable = null), O.splice(A, 1);
        } });
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "new", value: function(c, h) {
        h = (0, q.default)(h || {}, { actions: this.scope.actions });
        var b = new this.scope.Interactable(c, h, this.scope.document, this.scope.events), E = { context: b._context, interactable: b };
        return this.scope.addDocument(b._doc), this.list.push(b), a.default.string(c) ? (this.selectorMap[c] || (this.selectorMap[c] = []), this.selectorMap[c].push(E)) : (b.target[this.scope.id] || Object.defineProperty(c, this.scope.id, { value: [], configurable: true }), c[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: c, options: h, interactable: b, win: this.scope._win }), b;
      } }, { key: "get", value: function(c, h) {
        var b = h && h.context || this.scope.document, E = a.default.string(c), y = E ? this.selectorMap[c] : c[this.scope.id];
        if (!y)
          return null;
        var x = Pe.find(y, function(O) {
          return O.context === b && (E || O.interactable.inContext(c));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(c, h) {
        for (var b = 0; b < this.list.length; b++) {
          var E = this.list[b], y = void 0;
          if ((a.default.string(E.target) ? a.default.element(c) && z.matchesSelector(c, E.target) : c === E.target) && E.inContext(c) && (y = h(E)), y !== void 0)
            return y;
        }
      } }]) && dv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Na.InteractableSet = fv;
    var _a = {};
    function hv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(hv, "hv");
    u(hv, "An");
    function Pl(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Pl, "Pl");
    u(Pl, "zn");
    function zl(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var b, E, y = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (b = h.next()).done) && (y.push(b.value), !c || y.length !== c); x = true)
              ;
          } catch (A) {
            O = true, E = A;
          } finally {
            try {
              x || h.return == null || h.return();
            } finally {
              if (O)
                throw E;
            }
          }
          return y;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Yc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Yc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(zl, "zl");
    u(zl, "Cn");
    function Yc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Yc, "Yc");
    u(Yc, "Rn"), Object.defineProperty(_a, "__esModule", { value: true }), _a.default = void 0;
    var mv = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Pl(this, "currentTarget", void 0), Pl(this, "originalEvent", void 0), Pl(this, "type", void 0), this.originalEvent = c, (0, Ye.default)(this, c);
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
      } }]) && hv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function yo(i) {
      if (!a.default.object(i))
        return { capture: !!i, passive: false };
      var o = (0, q.default)({}, i);
      return o.capture = !!i.capture, o.passive = !!i.passive, o;
    }
    __name(yo, "yo");
    u(yo, "Xn");
    var vv = { id: "events", install: function(i) {
      var o, l = [], c = {}, h = [], b = { add: E, remove: y, addDelegate: function(A, P, N, j, D) {
        var F = yo(D);
        if (!c[N]) {
          c[N] = [];
          for (var Z = 0; Z < h.length; Z++) {
            var W = h[Z];
            E(W, N, x), E(W, N, O, true);
          }
        }
        var ne = c[N], ae = Pe.find(ne, function(ye) {
          return ye.selector === A && ye.context === P;
        });
        ae || (ae = { selector: A, context: P, listeners: [] }, ne.push(ae)), ae.listeners.push([j, F]);
      }, removeDelegate: function(A, P, N, j, D) {
        var F, Z = yo(D), W = c[N], ne = false;
        if (W)
          for (F = W.length - 1; F >= 0; F--) {
            var ae = W[F];
            if (ae.selector === A && ae.context === P) {
              for (var ye = ae.listeners, De = ye.length - 1; De >= 0; De--) {
                var Fe = zl(ye[De], 2), Se = Fe[0], Be = Fe[1], wr = Be.capture, en = Be.passive;
                if (Se === j && wr === Z.capture && en === Z.passive) {
                  ye.splice(De, 1), ye.length || (W.splice(F, 1), y(P, N, x), y(P, N, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: O, delegatedEvents: c, documents: h, targets: l, supportsOptions: false, supportsPassive: false };
      function E(A, P, N, j) {
        var D = yo(j), F = Pe.find(l, function(Z) {
          return Z.eventTarget === A;
        });
        F || (F = { eventTarget: A, events: {} }, l.push(F)), F.events[P] || (F.events[P] = []), A.addEventListener && !Pe.contains(F.events[P], N) && (A.addEventListener(P, N, b.supportsOptions ? D : D.capture), F.events[P].push(N));
      }
      __name(E, "E");
      u(E, "s");
      function y(A, P, N, j) {
        var D = yo(j), F = Pe.findIndex(l, function(De) {
          return De.eventTarget === A;
        }), Z = l[F];
        if (Z && Z.events)
          if (P !== "all") {
            var W = false, ne = Z.events[P];
            if (ne) {
              if (N === "all") {
                for (var ae = ne.length - 1; ae >= 0; ae--)
                  y(A, P, ne[ae], D);
                return;
              }
              for (var ye = 0; ye < ne.length; ye++)
                if (ne[ye] === N) {
                  A.removeEventListener(P, N, b.supportsOptions ? D : D.capture), ne.splice(ye, 1), ne.length === 0 && (delete Z.events[P], W = true);
                  break;
                }
            }
            W && !Object.keys(Z.events).length && l.splice(F, 1);
          } else
            for (P in Z.events)
              Z.events.hasOwnProperty(P) && y(A, P, "all");
      }
      __name(y, "y");
      u(y, "l");
      function x(A, P) {
        for (var N = yo(P), j = new mv(A), D = c[A.type], F = zl(J.getEventTargets(A), 1)[0], Z = F; a.default.element(Z); ) {
          for (var W = 0; W < D.length; W++) {
            var ne = D[W], ae = ne.selector, ye = ne.context;
            if (z.matchesSelector(Z, ae) && z.nodeContains(ye, F) && z.nodeContains(ye, Z)) {
              var De = ne.listeners;
              j.currentTarget = Z;
              for (var Fe = 0; Fe < De.length; Fe++) {
                var Se = zl(De[Fe], 2), Be = Se[0], wr = Se[1], en = wr.capture, Kl = wr.passive;
                en === N.capture && Kl === N.passive && Be(j);
              }
            }
          }
          Z = z.parentNode(Z);
        }
      }
      __name(x, "x");
      u(x, "u");
      function O(A) {
        return x(A, true);
      }
      __name(O, "O");
      return u(O, "c"), (o = i.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return b.supportsOptions = true;
      }, get passive() {
        return b.supportsPassive = true;
      } }), i.events = b, b;
    } };
    _a.default = vv;
    var La = {};
    Object.defineProperty(La, "__esModule", { value: true }), La.default = void 0;
    var Ga = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(i) {
      for (var o = 0; o < Ga.methodOrder.length; o++) {
        var l;
        l = Ga.methodOrder[o];
        var c = Ga[l](i);
        if (c)
          return c;
      }
      return null;
    }, simulationResume: function(i) {
      var o = i.pointerType, l = i.eventType, c = i.eventTarget, h = i.scope;
      if (!/down|start/i.test(l))
        return null;
      for (var b = 0; b < h.interactions.list.length; b++) {
        var E = h.interactions.list[b], y = c;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; y; ) {
            if (y === E.element)
              return E;
            y = z.parentNode(y);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var o, l = i.pointerId, c = i.pointerType, h = i.eventType, b = i.scope;
      if (c !== "mouse" && c !== "pen")
        return null;
      for (var E = 0; E < b.interactions.list.length; E++) {
        var y = b.interactions.list[E];
        if (y.pointerType === c) {
          if (y.simulation && !Xc(y, l))
            continue;
          if (y.interacting())
            return y;
          o || (o = y);
        }
      }
      if (o)
        return o;
      for (var x = 0; x < b.interactions.list.length; x++) {
        var O = b.interactions.list[x];
        if (!(O.pointerType !== c || /down/i.test(h) && O.simulation))
          return O;
      }
      return null;
    }, hasPointer: function(i) {
      for (var o = i.pointerId, l = i.scope, c = 0; c < l.interactions.list.length; c++) {
        var h = l.interactions.list[c];
        if (Xc(h, o))
          return h;
      }
      return null;
    }, idle: function(i) {
      for (var o = i.pointerType, l = i.scope, c = 0; c < l.interactions.list.length; c++) {
        var h = l.interactions.list[c];
        if (h.pointers.length === 1) {
          var b = h.interactable;
          if (b && (!b.options.gesture || !b.options.gesture.enabled))
            continue;
        } else if (h.pointers.length >= 2)
          continue;
        if (!h.interacting() && o === h.pointerType)
          return h;
      }
      return null;
    } };
    function Xc(i, o) {
      return i.pointers.some(function(l) {
        return l.id === o;
      });
    }
    __name(Xc, "Xc");
    u(Xc, "Ln");
    var gv = Ga;
    La.default = gv;
    var ja = {};
    function Rl(i) {
      return Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Rl(i);
    }
    __name(Rl, "Rl");
    u(Rl, "Nn");
    function Zc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var b, E, y = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (b = h.next()).done) && (y.push(b.value), !c || y.length !== c); x = true)
              ;
          } catch (A) {
            O = true, E = A;
          } finally {
            try {
              x || h.return == null || h.return();
            } finally {
              if (O)
                throw E;
            }
          }
          return y;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Kc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Kc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Zc, "Zc");
    u(Zc, "qn");
    function Kc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Kc, "Kc");
    u(Kc, "Gn");
    function bv(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(bv, "bv");
    u(bv, "$n");
    function yv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(yv, "yv");
    u(yv, "Hn");
    function Dl(i, o) {
      return Dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Dl(i, o);
    }
    __name(Dl, "Dl");
    u(Dl, "Kn");
    function wv(i, o) {
      if (o && (Rl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(wv, "wv");
    u(wv, "Zn");
    function Ha(i) {
      return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ha(i);
    }
    __name(Ha, "Ha");
    u(Ha, "Jn"), Object.defineProperty(ja, "__esModule", { value: true }), ja.default = void 0;
    var kl = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Jc(i, o) {
      return function(l) {
        var c = o.interactions.list, h = J.getPointerType(l), b = Zc(J.getEventTargets(l), 2), E = b[0], y = b[1], x = [];
        if (/^touch/.test(l.type)) {
          o.prevTouchTime = o.now();
          for (var O = 0; O < l.changedTouches.length; O++) {
            var A = l.changedTouches[O], P = { pointer: A, pointerId: J.getPointerId(A), pointerType: h, eventType: l.type, eventTarget: E, curEventTarget: y, scope: o }, N = Qc(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, N]);
          }
        } else {
          var j = false;
          if (!$.default.supportsPointerEvent && /mouse/.test(l.type)) {
            for (var D = 0; D < c.length && !j; D++)
              j = c[D].pointerType !== "mouse" && c[D].pointerIsDown;
            j = j || o.now() - o.prevTouchTime < 500 || l.timeStamp === 0;
          }
          if (!j) {
            var F = { pointer: l, pointerId: J.getPointerId(l), pointerType: h, eventType: l.type, curEventTarget: y, eventTarget: E, scope: o }, Z = Qc(F);
            x.push([F.pointer, F.eventTarget, F.curEventTarget, Z]);
          }
        }
        for (var W = 0; W < x.length; W++) {
          var ne = Zc(x[W], 4), ae = ne[0], ye = ne[1], De = ne[2];
          ne[3][i](ae, l, ye, De);
        }
      };
    }
    __name(Jc, "Jc");
    u(Jc, "tr");
    function Qc(i) {
      var o = i.pointerType, l = i.scope, c = { interaction: La.default.search(i), searchDetails: i };
      return l.fire("interactions:find", c), c.interaction || l.interactions.new({ pointerType: o });
    }
    __name(Qc, "Qc");
    u(Qc, "er");
    function Nl(i, o) {
      var l = i.doc, c = i.scope, h = i.options, b = c.interactions.docEvents, E = c.events, y = E[o];
      for (var x in c.browser.isIOS && !h.events && (h.events = { passive: false }), E.delegatedEvents)
        y(l, x, E.delegateListener), y(l, x, E.delegateUseCapture, true);
      for (var O = h && h.events, A = 0; A < b.length; A++) {
        var P = b[A];
        y(l, P.type, P.listener, O);
      }
    }
    __name(Nl, "Nl");
    u(Nl, "nr");
    var xv = { id: "core/interactions", install: function(i) {
      for (var o = {}, l = 0; l < kl.length; l++) {
        var c = kl[l];
        o[c] = Jc(c, i);
      }
      var h, b = $.default.pEventTypes;
      function E() {
        for (var y = 0; y < i.interactions.list.length; y++) {
          var x = i.interactions.list[y];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var O = function() {
              var P = x.pointers[A];
              i.documents.some(function(N) {
                var j = N.doc;
                return (0, z.nodeContains)(j, P.downTarget);
              }) || x.removePointer(P.pointer, P.event);
            }, A = 0; A < x.pointers.length; A++)
              O();
        }
      }
      __name(E, "E");
      u(E, "a"), (h = C.default.PointerEvent ? [{ type: b.down, listener: E }, { type: b.down, listener: o.pointerDown }, { type: b.move, listener: o.pointerMove }, { type: b.up, listener: o.pointerUp }, { type: b.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(y) {
        for (var x = 0; x < i.interactions.list.length; x++)
          i.interactions.list[x].documentBlur(y);
      } }), i.prevTouchTime = 0, i.Interaction = function(y) {
        (function(D, F) {
          if (typeof F != "function" && F !== null)
            throw new TypeError("Super expression must either be null or a function");
          D.prototype = Object.create(F && F.prototype, { constructor: { value: D, writable: true, configurable: true } }), Object.defineProperty(D, "prototype", { writable: false }), F && Dl(D, F);
        })(j, y);
        var x, O, A, P, N = (A = j, P = function() {
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
          var D, F = Ha(A);
          if (P) {
            var Z = Ha(this).constructor;
            D = Reflect.construct(F, arguments, Z);
          } else
            D = F.apply(this, arguments);
          return wv(this, D);
        });
        function j() {
          return bv(this, j), N.apply(this, arguments);
        }
        __name(j, "j");
        return u(j, "s"), x = j, (O = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(D) {
          i.interactions.pointerMoveTolerance = D;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && yv(x.prototype, O), Object.defineProperty(x, "prototype", { writable: false }), j;
      }(tr.default), i.interactions = { list: [], new: function(y) {
        y.scopeFire = function(O, A) {
          return i.fire(O, A);
        };
        var x = new i.Interaction(y);
        return i.interactions.list.push(x), x;
      }, listeners: o, docEvents: h, pointerMoveTolerance: 1 }, i.usePlugin(Ci.default);
    }, listeners: { "scope:add-document": function(i) {
      return Nl(i, "add");
    }, "scope:remove-document": function(i) {
      return Nl(i, "remove");
    }, "interactable:unset": function(i, o) {
      for (var l = i.interactable, c = o.interactions.list.length - 1; c >= 0; c--) {
        var h = o.interactions.list[c];
        h.interactable === l && (h.stop(), o.fire("interactions:destroy", { interaction: h }), h.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(c, 1));
      }
    } }, onDocSignal: Nl, doOnInteractions: Jc, methodNames: kl }, Ev = xv;
    ja.default = Ev;
    var wo = {};
    function _l(i) {
      return _l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _l(i);
    }
    __name(_l, "_l");
    u(_l, "ar");
    function xo() {
      return xo = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, o, l) {
        var c = Sv(i, o);
        if (c) {
          var h = Object.getOwnPropertyDescriptor(c, o);
          return h.get ? h.get.call(arguments.length < 3 ? i : l) : h.value;
        }
      }, xo.apply(this, arguments);
    }
    __name(xo, "xo");
    u(xo, "sr");
    function Sv(i, o) {
      for (; !Object.prototype.hasOwnProperty.call(i, o) && (i = bn(i)) !== null; )
        ;
      return i;
    }
    __name(Sv, "Sv");
    u(Sv, "lr");
    function Ll(i, o) {
      return Ll = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Ll(i, o);
    }
    __name(Ll, "Ll");
    u(Ll, "ur");
    function Tv(i, o) {
      if (o && (_l(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(Tv, "Tv");
    u(Tv, "cr");
    function bn(i) {
      return bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, bn(i);
    }
    __name(bn, "bn");
    u(bn, "fr");
    function ep(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(ep, "ep");
    u(ep, "dr");
    function tp(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(tp, "tp");
    u(tp, "pr");
    function rp(i, o, l) {
      return o && tp(i.prototype, o), l && tp(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(rp, "rp");
    u(rp, "vr");
    function St(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(St, "St");
    u(St, "hr"), Object.defineProperty(wo, "__esModule", { value: true }), wo.Scope = void 0, wo.initScope = np;
    var Cv = function() {
      function i() {
        var o = this;
        ep(this, i), St(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), St(this, "isInitialized", false), St(this, "listenerMaps", []), St(this, "browser", $.default), St(this, "defaults", (0, qn.default)(po.defaults)), St(this, "Eventable", vo.Eventable), St(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), St(this, "interactStatic", (0, Al.createInteractStatic)(this)), St(this, "InteractEvent", fo.InteractEvent), St(this, "Interactable", void 0), St(this, "interactables", new Na.InteractableSet(this)), St(this, "_win", void 0), St(this, "document", void 0), St(this, "window", void 0), St(this, "documents", []), St(this, "_plugins", { list: [], map: {} }), St(this, "onWindowUnload", function(c) {
          return o.removeDocument(c.target);
        });
        var l = this;
        this.Interactable = function(c) {
          (function(x, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(O && O.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), O && Ll(x, O);
          })(y, c);
          var h, b, E = (h = y, b = function() {
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
            var x, O = bn(h);
            if (b) {
              var A = bn(this).constructor;
              x = Reflect.construct(O, arguments, A);
            } else
              x = O.apply(this, arguments);
            return Tv(this, x);
          });
          function y() {
            return ep(this, y), E.apply(this, arguments);
          }
          __name(y, "y");
          return u(y, "i"), rp(y, [{ key: "_defaults", get: function() {
            return l.defaults;
          } }, { key: "set", value: function(x) {
            return xo(bn(y.prototype), "set", this).call(this, x), l.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            xo(bn(y.prototype), "unset", this).call(this);
            var x = l.interactables.list.indexOf(this);
            x < 0 || (xo(bn(y.prototype), "unset", this).call(this), l.interactables.list.splice(x, 1), l.fire("interactable:unset", { interactable: this }));
          } }]), y;
        }(ka.Interactable);
      }
      __name(i, "i");
      return u(i, "t"), rp(i, [{ key: "addListeners", value: function(o, l) {
        this.listenerMaps.push({ id: l, map: o });
      } }, { key: "fire", value: function(o, l) {
        for (var c = 0; c < this.listenerMaps.length; c++) {
          var h = this.listenerMaps[c].map[o];
          if (h && h(l, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : np(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, l) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, l), o.listeners && o.before) {
          for (var c = 0, h = this.listenerMaps.length, b = o.before.reduce(function(y, x) {
            return y[x] = true, y[ip(x)] = true, y;
          }, {}); c < h; c++) {
            var E = this.listenerMaps[c].id;
            if (b[E] || b[ip(E)])
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
        var l = this.getDocIndex(o), c = r.getWindow(o), h = this.documents[l].options;
        this.events.remove(c, "unload", this.onWindowUnload), this.documents.splice(l, 1), this.events.documents.splice(l, 1), this.fire("scope:remove-document", { doc: o, window: c, scope: this, options: h });
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
    function np(i, o) {
      return i.isInitialized = true, a.default.window(o) && r.init(o), C.default.init(o), $.default.init(o), It.default.init(o), i.window = o, i.document = o.document, i.usePlugin(ja.default), i.usePlugin(_a.default), i;
    }
    __name(np, "np");
    u(np, "yr");
    function ip(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(ip, "ip");
    u(ip, "mr"), wo.Scope = Cv;
    var Gl = {}, dt = {};
    Object.defineProperty(dt, "__esModule", { value: true });
    var Ov = {};
    dt.default = void 0, Object.keys(Gl).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(Ov, i) || i in dt && dt[i] === Gl[i] || Object.defineProperty(dt, i, { enumerable: true, get: function() {
        return Gl[i];
      } }));
    });
    var op = new wo.Scope(), Mv = op.interactStatic;
    dt.default = Mv;
    var Av = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    op.init(Av);
    var Ba = {};
    Object.defineProperty(Ba, "__esModule", { value: true }), Ba.default = void 0, Ba.default = function() {
    };
    var $a = {};
    Object.defineProperty($a, "__esModule", { value: true }), $a.default = void 0, $a.default = function() {
    };
    var qa = {};
    function ap(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, c) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var b, E, y = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (b = h.next()).done) && (y.push(b.value), !c || y.length !== c); x = true)
              ;
          } catch (A) {
            O = true, E = A;
          } finally {
            try {
              x || h.return == null || h.return();
            } finally {
              if (O)
                throw E;
            }
          }
          return y;
        }
      }(i, o) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return sp(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? sp(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ap, "ap");
    u(ap, "jr");
    function sp(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(sp, "sp");
    u(sp, "Mr"), Object.defineProperty(qa, "__esModule", { value: true }), qa.default = void 0, qa.default = function(i) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(c) {
        var h = ap(c, 2), b = h[0], E = h[1];
        return b in i || E in i;
      }), l = u(function(c, h) {
        for (var b = i.range, E = i.limits, y = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = i.offset, O = x === void 0 ? { x: 0, y: 0 } : x, A = { range: b, grid: i, x: null, y: null }, P = 0; P < o.length; P++) {
          var N = ap(o[P], 2), j = N[0], D = N[1], F = Math.round((c - O.x) / i[j]), Z = Math.round((h - O.y) / i[D]);
          A[j] = Math.max(y.left, Math.min(y.right, F * i[j] + O.x)), A[D] = Math.max(y.top, Math.min(y.bottom, Z * i[D] + O.y));
        }
        return A;
      }, "n");
      return l.grid = i, l.coordFields = o, l;
    };
    var Eo = {};
    Object.defineProperty(Eo, "__esModule", { value: true }), Object.defineProperty(Eo, "edgeTarget", { enumerable: true, get: function() {
      return Ba.default;
    } }), Object.defineProperty(Eo, "elements", { enumerable: true, get: function() {
      return $a.default;
    } }), Object.defineProperty(Eo, "grid", { enumerable: true, get: function() {
      return qa.default;
    } });
    var Fa = {};
    Object.defineProperty(Fa, "__esModule", { value: true }), Fa.default = void 0;
    var Iv = { id: "snappers", install: function(i) {
      var o = i.interactStatic;
      o.snappers = (0, q.default)(o.snappers || {}, Eo), o.createSnapGrid = o.snappers.grid;
    } }, Pv = Iv;
    Fa.default = Pv;
    var Mi = {};
    function lp(i, o) {
      var l = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(i);
        o && (c = c.filter(function(h) {
          return Object.getOwnPropertyDescriptor(i, h).enumerable;
        })), l.push.apply(l, c);
      }
      return l;
    }
    __name(lp, "lp");
    u(lp, "Cr");
    function jl(i) {
      for (var o = 1; o < arguments.length; o++) {
        var l = arguments[o] != null ? arguments[o] : {};
        o % 2 ? lp(Object(l), true).forEach(function(c) {
          zv(i, c, l[c]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : lp(Object(l)).forEach(function(c) {
          Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(l, c));
        });
      }
      return i;
    }
    __name(jl, "jl");
    u(jl, "Rr");
    function zv(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(zv, "zv");
    u(zv, "Fr"), Object.defineProperty(Mi, "__esModule", { value: true }), Mi.default = Mi.aspectRatio = void 0;
    var up = { start: function(i) {
      var o = i.state, l = i.rect, c = i.edges, h = i.pageCoords, b = o.options.ratio, E = o.options, y = E.equalDelta, x = E.modifiers;
      b === "preserve" && (b = l.width / l.height), o.startCoords = (0, q.default)({}, h), o.startRect = (0, q.default)({}, l), o.ratio = b, o.equalDelta = y;
      var O = o.linkedEdges = { top: c.top || c.left && !c.bottom, left: c.left || c.top && !c.right, bottom: c.bottom || c.right && !c.top, right: c.right || c.bottom && !c.left };
      if (o.xIsPrimaryAxis = !(!c.left && !c.right), o.equalDelta) {
        var A = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        o.edgeSign = { x: A, y: A };
      } else
        o.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, q.default)(i.edges, O), x && x.length) {
        var P = new Fn.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(jl({}, i));
      }
    }, set: function(i) {
      var o = i.state, l = i.rect, c = i.coords, h = (0, q.default)({}, c), b = o.equalDelta ? Rv : Dv;
      if (b(o, o.xIsPrimaryAxis, c, l), !o.subModification)
        return null;
      var E = (0, q.default)({}, l);
      (0, oe.addEdges)(o.linkedEdges, E, { x: c.x - h.x, y: c.y - h.y });
      var y = o.subModification.setAll(jl(jl({}, i), {}, { rect: E, edges: o.linkedEdges, pageCoords: c, prevCoords: c, prevRect: E })), x = y.delta;
      return y.changed && (b(o, Math.abs(x.x) > Math.abs(x.y), y.coords, y.rect), (0, q.default)(c, y.coords)), y.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Rv(i, o, l) {
      var c = i.startCoords, h = i.edgeSign;
      o ? l.y = c.y + (l.x - c.x) * h.y : l.x = c.x + (l.y - c.y) * h.x;
    }
    __name(Rv, "Rv");
    u(Rv, "Br");
    function Dv(i, o, l, c) {
      var h = i.startRect, b = i.startCoords, E = i.ratio, y = i.edgeSign;
      if (o) {
        var x = c.width / E;
        l.y = b.y + (x - h.height) * y.y;
      } else {
        var O = c.height * E;
        l.x = b.x + (O - h.width) * y.x;
      }
    }
    __name(Dv, "Dv");
    u(Dv, "Yr"), Mi.aspectRatio = up;
    var kv = (0, Et.makeModifier)(up, "aspectRatio");
    Mi.default = kv;
    var Vn = {};
    Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = void 0;
    var cp = u(function() {
    }, "Ur");
    cp._defaults = {};
    var Nv = cp;
    Vn.default = Nv;
    var Hl = {};
    Object.defineProperty(Hl, "__esModule", { value: true }), Object.defineProperty(Hl, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var Gt = {};
    function Bl(i, o, l) {
      return a.default.func(i) ? oe.resolveRectLike(i, o.interactable, o.element, [l.x, l.y, o]) : oe.resolveRectLike(i, o.interactable, o.element);
    }
    __name(Bl, "Bl");
    u(Bl, "Gr"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0, Gt.getRestrictionRect = Bl, Gt.restrict = void 0;
    var pp = { start: function(i) {
      var o = i.rect, l = i.startOffset, c = i.state, h = i.interaction, b = i.pageCoords, E = c.options, y = E.elementRect, x = (0, q.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && y) {
        var O = Bl(E.restriction, h, b);
        if (O) {
          var A = O.right - O.left - o.width, P = O.bottom - O.top - o.height;
          A < 0 && (x.left += A, x.right += A), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += l.left - o.width * y.left, x.top += l.top - o.height * y.top, x.right += l.right - o.width * (1 - y.right), x.bottom += l.bottom - o.height * (1 - y.bottom);
      }
      c.offset = x;
    }, set: function(i) {
      var o = i.coords, l = i.interaction, c = i.state, h = c.options, b = c.offset, E = Bl(h.restriction, l, o);
      if (E) {
        var y = oe.xywhToTlbr(E);
        o.x = Math.max(Math.min(y.right - b.right, o.x), y.left + b.left), o.y = Math.max(Math.min(y.bottom - b.bottom, o.y), y.top + b.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Gt.restrict = pp;
    var _v = (0, Et.makeModifier)(pp, "restrict");
    Gt.default = _v;
    var Gr = {};
    Object.defineProperty(Gr, "__esModule", { value: true }), Gr.restrictEdges = Gr.default = void 0;
    var dp = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, fp = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function hp(i, o) {
      for (var l = ["top", "left", "bottom", "right"], c = 0; c < l.length; c++) {
        var h = l[c];
        h in i || (i[h] = o[h]);
      }
      return i;
    }
    __name(hp, "hp");
    u(hp, "Qr");
    var mp = { noInner: dp, noOuter: fp, start: function(i) {
      var o, l = i.interaction, c = i.startOffset, h = i.state, b = h.options;
      if (b) {
        var E = (0, Gt.getRestrictionRect)(b.offset, l, l.coords.start.page);
        o = oe.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, h.offset = { top: o.y + c.top, left: o.x + c.left, bottom: o.y - c.bottom, right: o.x - c.right };
    }, set: function(i) {
      var o = i.coords, l = i.edges, c = i.interaction, h = i.state, b = h.offset, E = h.options;
      if (l) {
        var y = (0, q.default)({}, o), x = (0, Gt.getRestrictionRect)(E.inner, c, y) || {}, O = (0, Gt.getRestrictionRect)(E.outer, c, y) || {};
        hp(x, dp), hp(O, fp), l.top ? o.y = Math.min(Math.max(O.top + b.top, y.y), x.top + b.top) : l.bottom && (o.y = Math.max(Math.min(O.bottom + b.bottom, y.y), x.bottom + b.bottom)), l.left ? o.x = Math.min(Math.max(O.left + b.left, y.x), x.left + b.left) : l.right && (o.x = Math.max(Math.min(O.right + b.right, y.x), x.right + b.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Gr.restrictEdges = mp;
    var Lv = (0, Et.makeModifier)(mp, "restrictEdges");
    Gr.default = Lv;
    var Ai = {};
    Object.defineProperty(Ai, "__esModule", { value: true }), Ai.restrictRect = Ai.default = void 0;
    var Gv = (0, q.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Gt.restrict.defaults), vp = { start: Gt.restrict.start, set: Gt.restrict.set, defaults: Gv };
    Ai.restrictRect = vp;
    var jv = (0, Et.makeModifier)(vp, "restrictRect");
    Ai.default = jv;
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.restrictSize = Ii.default = void 0;
    var Hv = { width: -1 / 0, height: -1 / 0 }, Bv = { width: 1 / 0, height: 1 / 0 }, gp = { start: function(i) {
      return Gr.restrictEdges.start(i);
    }, set: function(i) {
      var o = i.interaction, l = i.state, c = i.rect, h = i.edges, b = l.options;
      if (h) {
        var E = oe.tlbrToXywh((0, Gt.getRestrictionRect)(b.min, o, i.coords)) || Hv, y = oe.tlbrToXywh((0, Gt.getRestrictionRect)(b.max, o, i.coords)) || Bv;
        l.options = { endOnly: b.endOnly, inner: (0, q.default)({}, Gr.restrictEdges.noInner), outer: (0, q.default)({}, Gr.restrictEdges.noOuter) }, h.top ? (l.options.inner.top = c.bottom - E.height, l.options.outer.top = c.bottom - y.height) : h.bottom && (l.options.inner.bottom = c.top + E.height, l.options.outer.bottom = c.top + y.height), h.left ? (l.options.inner.left = c.right - E.width, l.options.outer.left = c.right - y.width) : h.right && (l.options.inner.right = c.left + E.width, l.options.outer.right = c.left + y.width), Gr.restrictEdges.set(i), l.options = b;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Ii.restrictSize = gp;
    var $v = (0, Et.makeModifier)(gp, "restrictSize");
    Ii.default = $v;
    var $l = {};
    Object.defineProperty($l, "__esModule", { value: true }), Object.defineProperty($l, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var yn = {};
    Object.defineProperty(yn, "__esModule", { value: true }), yn.snap = yn.default = void 0;
    var bp = { start: function(i) {
      var o, l = i.interaction, c = i.interactable, h = i.element, b = i.rect, E = i.state, y = i.startOffset, x = E.options, O = x.offsetWithOrigin ? function(N) {
        var j = N.interaction.element;
        return (0, oe.rectToXY)((0, oe.resolveRectLike)(N.state.options.origin, null, null, [j])) || (0, ze.default)(N.interactable, j, N.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: l.coords.start.page.x, y: l.coords.start.page.y };
      else {
        var A = (0, oe.resolveRectLike)(x.offset, c, h, [l]);
        (o = (0, oe.rectToXY)(A) || { x: 0, y: 0 }).x += O.x, o.y += O.y;
      }
      var P = x.relativePoints;
      E.offsets = b && P && P.length ? P.map(function(N, j) {
        return { index: j, relativePoint: N, x: y.left - b.width * N.x + o.x, y: y.top - b.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(i) {
      var o = i.interaction, l = i.coords, c = i.state, h = c.options, b = c.offsets, E = (0, ze.default)(o.interactable, o.element, o.prepared.name), y = (0, q.default)({}, l), x = [];
      h.offsetWithOrigin || (y.x -= E.x, y.y -= E.y);
      for (var O = 0; O < b.length; O++)
        for (var A = b[O], P = y.x - A.x, N = y.y - A.y, j = 0, D = h.targets.length; j < D; j++) {
          var F, Z = h.targets[j];
          (F = a.default.func(Z) ? Z(P, N, o._proxy, A, j) : Z) && x.push({ x: (a.default.number(F.x) ? F.x : P) + A.x, y: (a.default.number(F.y) ? F.y : N) + A.y, range: a.default.number(F.range) ? F.range : h.range, source: Z, index: j, offset: A });
        }
      for (var W = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < x.length; ne++) {
        var ae = x[ne], ye = ae.range, De = ae.x - y.x, Fe = ae.y - y.y, Se = (0, Je.default)(De, Fe), Be = Se <= ye;
        ye === 1 / 0 && W.inRange && W.range !== 1 / 0 && (Be = false), W.target && !(Be ? W.inRange && ye !== 1 / 0 ? Se / ye < W.distance / W.range : ye === 1 / 0 && W.range !== 1 / 0 || Se < W.distance : !W.inRange && Se < W.distance) || (W.target = ae, W.distance = Se, W.range = ye, W.inRange = Be, W.delta.x = De, W.delta.y = Fe);
      }
      return W.inRange && (l.x = W.target.x, l.y = W.target.y), c.closest = W, W;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    yn.snap = bp;
    var qv = (0, Et.makeModifier)(bp, "snap");
    yn.default = qv;
    var Qr = {};
    function yp(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(yp, "yp");
    u(yp, "yo"), Object.defineProperty(Qr, "__esModule", { value: true }), Qr.snapSize = Qr.default = void 0;
    var wp = { start: function(i) {
      var o = i.state, l = i.edges, c = o.options;
      if (!l)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }], offset: c.offset || "self", origin: { x: 0, y: 0 }, range: c.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], yn.snap.start(i), o.offsets = i.state.offsets, i.state = o;
    }, set: function(i) {
      var o, l, c = i.interaction, h = i.state, b = i.coords, E = h.options, y = h.offsets, x = { x: b.x - y[0].x, y: b.y - y[0].y };
      h.options = (0, q.default)({}, E), h.options.targets = [];
      for (var O = 0; O < (E.targets || []).length; O++) {
        var A = (E.targets || [])[O], P = void 0;
        if (P = a.default.func(A) ? A(x.x, x.y, c) : A) {
          for (var N = 0; N < h.targetFields.length; N++) {
            var j = (o = h.targetFields[N], l = 2, function(W) {
              if (Array.isArray(W))
                return W;
            }(o) || function(W, ne) {
              var ae = W == null ? null : typeof Symbol != "undefined" && W[Symbol.iterator] || W["@@iterator"];
              if (ae != null) {
                var ye, De, Fe = [], Se = true, Be = false;
                try {
                  for (ae = ae.call(W); !(Se = (ye = ae.next()).done) && (Fe.push(ye.value), !ne || Fe.length !== ne); Se = true)
                    ;
                } catch (wr) {
                  Be = true, De = wr;
                } finally {
                  try {
                    Se || ae.return == null || ae.return();
                  } finally {
                    if (Be)
                      throw De;
                  }
                }
                return Fe;
              }
            }(o, l) || function(W, ne) {
              if (W) {
                if (typeof W == "string")
                  return yp(W, ne);
                var ae = Object.prototype.toString.call(W).slice(8, -1);
                return ae === "Object" && W.constructor && (ae = W.constructor.name), ae === "Map" || ae === "Set" ? Array.from(W) : ae === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? yp(W, ne) : void 0;
              }
            }(o, l) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), D = j[0], F = j[1];
            if (D in P || F in P) {
              P.x = P[D], P.y = P[F];
              break;
            }
          }
          h.options.targets.push(P);
        }
      }
      var Z = yn.snap.set(i);
      return h.options = E, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Qr.snapSize = wp;
    var Fv = (0, Et.makeModifier)(wp, "snapSize");
    Qr.default = Fv;
    var Pi = {};
    Object.defineProperty(Pi, "__esModule", { value: true }), Pi.snapEdges = Pi.default = void 0;
    var xp = { start: function(i) {
      var o = i.edges;
      return o ? (i.state.targetFields = i.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Qr.snapSize.start(i)) : null;
    }, set: Qr.snapSize.set, defaults: (0, q.default)((0, qn.default)(Qr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Pi.snapEdges = xp;
    var Uv = (0, Et.makeModifier)(xp, "snapEdges");
    Pi.default = Uv;
    var ql = {};
    Object.defineProperty(ql, "__esModule", { value: true }), Object.defineProperty(ql, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var Fl = {};
    Object.defineProperty(Fl, "__esModule", { value: true }), Object.defineProperty(Fl, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), zi.default = void 0;
    var Wv = { aspectRatio: Mi.default, restrictEdges: Gr.default, restrict: Gt.default, restrictRect: Ai.default, restrictSize: Ii.default, snapEdges: Pi.default, snap: yn.default, snapSize: Qr.default, spring: ql.default, avoid: Hl.default, transform: Fl.default, rubberband: $l.default };
    zi.default = Wv;
    var Ua = {};
    Object.defineProperty(Ua, "__esModule", { value: true }), Ua.default = void 0;
    var Vv = { id: "modifiers", install: function(i) {
      var o = i.interactStatic;
      for (var l in i.usePlugin(Et.default), i.usePlugin(Fa.default), o.modifiers = zi.default, zi.default) {
        var c = zi.default[l], h = c._defaults, b = c._methods;
        h._methods = b, i.defaults.perAction[l] = h;
      }
    } }, Yv = Vv;
    Ua.default = Yv;
    var Yn = {};
    function Ul(i) {
      return Ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Ul(i);
    }
    __name(Ul, "Ul");
    u(Ul, "Io");
    function Xv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Xv, "Xv");
    u(Xv, "Do");
    function Wl(i, o) {
      return Wl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Wl(i, o);
    }
    __name(Wl, "Wl");
    u(Wl, "Ao");
    function Zv(i, o) {
      if (o && (Ul(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Vl(i);
    }
    __name(Zv, "Zv");
    u(Zv, "zo");
    function Vl(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Vl, "Vl");
    u(Vl, "Co");
    function Wa(i) {
      return Wa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Wa(i);
    }
    __name(Wa, "Wa");
    u(Wa, "Ro"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = Yn.PointerEvent = void 0;
    var Kv = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && Wl(y, x);
      })(E, i);
      var o, l, c, h, b = (c = E, h = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (y) {
          return false;
        }
      }(), function() {
        var y, x = Wa(c);
        if (h) {
          var O = Wa(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Zv(this, y);
      });
      function E(y, x, O, A, P, N) {
        var j;
        if (function(Z, W) {
          if (!(Z instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), j = b.call(this, P), J.pointerExtend(Vl(j), O), O !== x && J.pointerExtend(Vl(j), x), j.timeStamp = N, j.originalEvent = O, j.type = y, j.pointerId = J.getPointerId(x), j.pointerType = J.getPointerType(x), j.target = A, j.currentTarget = null, y === "tap") {
          var D = P.getPointerIndex(x);
          j.dt = j.timeStamp - P.pointers[D].downTime;
          var F = j.timeStamp - P.tapTime;
          j.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === j.target && F < 500;
        } else
          y === "doubletap" && (j.dt = x.timeStamp - P.tapTime, j.double = true);
        return j;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (l = [{ key: "_subtractOrigin", value: function(y) {
        var x = y.x, O = y.y;
        return this.pageX -= x, this.pageY -= O, this.clientX -= x, this.clientY -= O, this;
      } }, { key: "_addOrigin", value: function(y) {
        var x = y.x, O = y.y;
        return this.pageX += x, this.pageY += O, this.clientX += x, this.clientY += O, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && Xv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(sr.BaseEvent);
    Yn.PointerEvent = Yn.default = Kv;
    var So = {};
    Object.defineProperty(So, "__esModule", { value: true }), So.default = void 0;
    var Va = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = Va, i.defaults.actions.pointerEvents = Va.defaults, (0, q.default)(i.actions.phaselessTypes, Va.types);
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var o = i.down, l = i.pointerInfo;
      !o && l.hold || (l.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, o) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget;
      i.duplicate || l.pointerIsDown && !l.pointerWasMoved || (l.pointerIsDown && Yl(i), wn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "move" }, o));
    }, "interactions:down": function(i, o) {
      (function(l, c) {
        for (var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget, x = l.pointerIndex, O = h.pointers[x].hold, A = z.getPath(y), P = { interaction: h, pointer: b, event: E, eventTarget: y, type: "hold", targets: [], path: A, node: null }, N = 0; N < A.length; N++) {
          var j = A[N];
          P.node = j, c.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var D = 1 / 0, F = 0; F < P.targets.length; F++) {
            var Z = P.targets[F].eventable.options.holdDuration;
            Z < D && (D = Z);
          }
          O.duration = D, O.timeout = setTimeout(function() {
            wn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "hold" }, c);
          }, D);
        }
      })(i, o), wn(i, o);
    }, "interactions:up": function(i, o) {
      Yl(i), wn(i, o), function(l, c) {
        var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget;
        h.pointerWasMoved || wn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "tap" }, c);
      }(i, o);
    }, "interactions:cancel": function(i, o) {
      Yl(i), wn(i, o);
    } }, PointerEvent: Yn.PointerEvent, fire: wn, collectEventTargets: Ep, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function wn(i, o) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget, E = i.type, y = i.targets, x = y === void 0 ? Ep(i, o) : y, O = new Yn.PointerEvent(E, c, h, b, l, o.now());
      o.fire("pointerEvents:new", { pointerEvent: O });
      for (var A = { interaction: l, pointer: c, event: h, eventTarget: b, targets: x, type: E, pointerEvent: O }, P = 0; P < x.length; P++) {
        var N = x[P];
        for (var j in N.props || {})
          O[j] = N.props[j];
        var D = (0, ze.default)(N.eventable, N.node);
        if (O._subtractOrigin(D), O.eventable = N.eventable, O.currentTarget = N.node, N.eventable.fire(O), O._addOrigin(D), O.immediatePropagationStopped || O.propagationStopped && P + 1 < x.length && x[P + 1].node !== O.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", A), E === "tap") {
        var F = O.double ? wn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "doubletap" }, o) : O;
        l.prevTap = F, l.tapTime = F.timeStamp;
      }
      return O;
    }
    __name(wn, "wn");
    u(wn, "Yo");
    function Ep(i, o) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget, E = i.type, y = l.getPointerIndex(c), x = l.pointers[y];
      if (E === "tap" && (l.pointerWasMoved || !x || x.downTarget !== b))
        return [];
      for (var O = z.getPath(b), A = { interaction: l, pointer: c, event: h, eventTarget: b, type: E, path: O, targets: [], node: null }, P = 0; P < O.length; P++) {
        var N = O[P];
        A.node = N, o.fire("pointerEvents:collect-targets", A);
      }
      return E === "hold" && (A.targets = A.targets.filter(function(j) {
        var D;
        return j.eventable.options.holdDuration === ((D = l.pointers[y]) == null ? void 0 : D.hold.duration);
      })), A.targets;
    }
    __name(Ep, "Ep");
    u(Ep, "Wo");
    function Yl(i) {
      var o = i.interaction, l = i.pointerIndex, c = o.pointers[l].hold;
      c && c.timeout && (clearTimeout(c.timeout), c.timeout = null);
    }
    __name(Yl, "Yl");
    u(Yl, "Lo");
    var Jv = Va;
    So.default = Jv;
    var Ya = {};
    function Qv(i) {
      var o = i.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Qv, "Qv");
    u(Qv, "No"), Object.defineProperty(Ya, "__esModule", { value: true }), Ya.default = void 0;
    var eg = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(So.default);
      var o = i.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o) {
      return i["pointerEvents:".concat(o)] = Qv, i;
    }, { "pointerEvents:new": function(i) {
      var o = i.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(i, o) {
      var l = i.interaction, c = i.pointerEvent, h = i.eventTarget, b = i.targets;
      if (c.type === "hold" && b.length) {
        var E = b[0].eventable.options.holdRepeatInterval;
        E <= 0 || (l.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: l, eventTarget: h, type: "hold", pointer: c, event: c }, o);
        }, E));
      }
    } }) }, tg = eg;
    Ya.default = tg;
    var Xa = {};
    function rg(i) {
      return (0, q.default)(this.events.options, i), this;
    }
    __name(rg, "rg");
    u(rg, "Ho"), Object.defineProperty(Xa, "__esModule", { value: true }), Xa.default = void 0;
    var ng = { id: "pointer-events/interactableTargets", install: function(i) {
      var o = i.Interactable;
      o.prototype.pointerEvents = rg;
      var l = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(c, h) {
        var b = l.call(this, c, h);
        return b === this && (this.events.options[c] = h), b;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, o) {
      var l = i.targets, c = i.node, h = i.type, b = i.eventTarget;
      o.interactables.forEachMatch(c, function(E) {
        var y = E.events, x = y.options;
        y.types[h] && y.types[h].length && E.testIgnoreAllow(x, c, b) && l.push({ node: c, eventable: y, props: { interactable: E } });
      });
    }, "interactable:new": function(i) {
      var o = i.interactable;
      o.events.getRect = function(l) {
        return o.getRect(l);
      };
    }, "interactable:set": function(i, o) {
      var l = i.interactable, c = i.options;
      (0, q.default)(l.events.options, o.pointerEvents.defaults), (0, q.default)(l.events.options, c.pointerEvents || {});
    } } }, ig = ng;
    Xa.default = ig;
    var Za = {};
    Object.defineProperty(Za, "__esModule", { value: true }), Za.default = void 0;
    var og = { id: "pointer-events", install: function(i) {
      i.usePlugin(So), i.usePlugin(Ya.default), i.usePlugin(Xa.default);
    } }, ag = og;
    Za.default = ag;
    var To = {};
    function Sp(i) {
      var o = i.Interactable;
      i.actions.phases.reflow = true, o.prototype.reflow = function(l) {
        return function(c, h, b) {
          for (var E = a.default.string(c.target) ? Pe.from(c._context.querySelectorAll(c.target)) : [c.target], y = b.window.Promise, x = y ? [] : null, O = function() {
            var P = E[A], N = c.getRect(P);
            if (!N)
              return "break";
            var j = Pe.find(b.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === c && ne.element === P && ne.prepared.name === h.name;
            }), D = void 0;
            if (j)
              j.move(), x && (D = j._reflowPromise || new y(function(ne) {
                j._reflowResolve = ne;
              }));
            else {
              var F = (0, oe.tlbrToXywh)(N), Z = { page: { x: F.x, y: F.y }, client: { x: F.x, y: F.y }, timeStamp: b.now() }, W = J.coordsToEvent(Z);
              D = function(ne, ae, ye, De, Fe) {
                var Se = ne.interactions.new({ pointerType: "reflow" }), Be = { interaction: Se, event: Fe, pointer: Fe, eventTarget: ye, phase: "reflow" };
                Se.interactable = ae, Se.element = ye, Se.prevEvent = Fe, Se.updatePointer(Fe, Fe, ye, true), J.setZeroCoords(Se.coords.delta), (0, lr.copyAction)(Se.prepared, De), Se._doPhase(Be);
                var wr = ne.window.Promise, en = wr ? new wr(function(Kl) {
                  Se._reflowResolve = Kl;
                }) : void 0;
                return Se._reflowPromise = en, Se.start(De, ae, ye), Se._interacting ? (Se.move(Be), Se.end(Fe)) : (Se.stop(), Se._reflowResolve()), Se.removePointer(Fe, Fe), en;
              }(b, c, P, h, W);
            }
            x && x.push(D);
          }, A = 0; A < E.length && O() !== "break"; A++)
            ;
          return x && y.all(x).then(function() {
            return c;
          });
        }(this, l, i);
      };
    }
    __name(Sp, "Sp");
    u(Sp, "ni"), Object.defineProperty(To, "__esModule", { value: true }), To.default = void 0, To.install = Sp;
    var sg = { id: "reflow", install: Sp, listeners: { "interactions:stop": function(i, o) {
      var l = i.interaction;
      l.pointerType === "reflow" && (l._reflowResolve && l._reflowResolve(), Pe.remove(o.interactions.list, l));
    } } }, lg = sg;
    To.default = lg;
    var yr = { exports: {} };
    function Xl(i) {
      return Xl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Xl(i);
    }
    __name(Xl, "Xl");
    u(Xl, "ai"), Object.defineProperty(yr.exports, "__esModule", { value: true }), yr.exports.default = void 0, dt.default.use(Ci.default), dt.default.use(Wn.default), dt.default.use(Za.default), dt.default.use(Oi.default), dt.default.use(Ua.default), dt.default.use(Ma.default), dt.default.use(br.default), dt.default.use(gn.default), dt.default.use(To.default);
    var ug = dt.default;
    if (yr.exports.default = ug, Xl(yr) === "object" && yr)
      try {
        yr.exports = dt.default;
      } catch (i) {
      }
    dt.default.default = dt.default, yr = yr.exports;
    var Xn = { exports: {} };
    function Zl(i) {
      return Zl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Zl(i);
    }
    __name(Zl, "Zl");
    u(Zl, "ui"), Object.defineProperty(Xn.exports, "__esModule", { value: true }), Xn.exports.default = void 0;
    var cg = yr.default;
    if (Xn.exports.default = cg, Zl(Xn) === "object" && Xn)
      try {
        Xn.exports = yr.default;
      } catch (i) {
      }
    return yr.default.default = yr.default, Xn.exports;
  });
});
var gm = Tt((vm, Ac) => {
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
      for (var f; f = d.shift(); )
        f();
    }, measure: function(d, f) {
      r("measure");
      var g = f ? d.bind(f) : d;
      return this.reads.push(g), s(this), g;
    }, mutate: function(d, f) {
      r("mutate");
      var g = f ? d.bind(f) : d;
      return this.writes.push(g), s(this), g;
    }, clear: function(d) {
      return r("clear", d), p(this.reads, d) || p(this.writes, d);
    }, extend: function(d) {
      if (r("extend", d), typeof d != "object")
        throw new Error("expected object");
      var f = Object.create(this);
      return v(f, d), f.fastdom = this, f.initialize && f.initialize(), f;
    }, catch: null };
    function s(d) {
      d.scheduled || (d.scheduled = true, d.raf(a.bind(null, d)), r("flush scheduled"));
    }
    __name(s, "s");
    u(s, "scheduleFlush");
    function a(d) {
      r("flush");
      var f = d.writes, g = d.reads, w;
      try {
        r("flushing reads", g.length), d.runTasks(g), r("flushing writes", f.length), d.runTasks(f);
      } catch (S) {
        w = S;
      }
      if (d.scheduled = false, (g.length || f.length) && s(d), w)
        if (r("task errored", w.message), d.catch)
          d.catch(w);
        else
          throw w;
    }
    __name(a, "a");
    u(a, "flush");
    function p(d, f) {
      var g = d.indexOf(f);
      return !!~g && !!d.splice(g, 1);
    }
    __name(p, "p");
    u(p, "remove");
    function v(d, f) {
      for (var g in f)
        f.hasOwnProperty(g) && (d[g] = f[g]);
    }
    __name(v, "v");
    u(v, "mixin");
    var m = t.fastdom = t.fastdom || new n();
    typeof define == "function" ? define(function() {
      return m;
    }) : typeof Ac == "object" && (Ac.exports = m);
  })(typeof window != "undefined" ? window : vm);
});
var xm = Tt((Ic, wm) => {
  (function(t) {
    "use strict";
    var r = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, e = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, n = u(function(d) {
      var f = Math.PI / 4;
      if (-f > d || d > f)
        return Math.cos(d) - 1;
      var g = d * d;
      return g * (g * (g * (g * (g * (g * (g * (g / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), s = u(function(d, f) {
      var g = Math.abs(d), w = Math.abs(f);
      return g < 3e3 && w < 3e3 ? Math.sqrt(g * g + w * w) : (g < w ? (g = w, w = d / f) : w = f / d, g * Math.sqrt(1 + w * w));
    }, "hypot"), a = u(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function p(d, f) {
      var g = Math.abs(d), w = Math.abs(f);
      return d === 0 ? Math.log(w) : f === 0 ? Math.log(g) : g < 3e3 && w < 3e3 ? Math.log(d * d + f * f) * 0.5 : (d = d / 2, f = f / 2, 0.5 * Math.log(d * d + f * f) + Math.LN2);
    }
    __name(p, "p");
    u(p, "logHypot");
    var v = u(function(d, f) {
      var g = { re: 0, im: 0 };
      if (d == null)
        g.re = g.im = 0;
      else if (f !== void 0)
        g.re = d, g.im = f;
      else
        switch (typeof d) {
          case "object":
            if ("im" in d && "re" in d)
              g.re = d.re, g.im = d.im;
            else if ("abs" in d && "arg" in d) {
              if (!Number.isFinite(d.abs) && Number.isFinite(d.arg))
                return m.INFINITY;
              g.re = d.abs * Math.cos(d.arg), g.im = d.abs * Math.sin(d.arg);
            } else if ("r" in d && "phi" in d) {
              if (!Number.isFinite(d.r) && Number.isFinite(d.phi))
                return m.INFINITY;
              g.re = d.r * Math.cos(d.phi), g.im = d.r * Math.sin(d.phi);
            } else
              d.length === 2 ? (g.re = d[0], g.im = d[1]) : a();
            break;
          case "string":
            g.im = g.re = 0;
            var w = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, T = 0;
            w === null && a();
            for (var C = 0; C < w.length; C++) {
              var R = w[C];
              R === " " || R === "	" || R === `
` || (R === "+" ? S++ : R === "-" ? T++ : R === "i" || R === "I" ? (S + T === 0 && a(), w[C + 1] !== " " && !isNaN(w[C + 1]) ? (g.im += parseFloat((T % 2 ? "-" : "") + w[C + 1]), C++) : g.im += parseFloat((T % 2 ? "-" : "") + "1"), S = T = 0) : ((S + T === 0 || isNaN(R)) && a(), w[C + 1] === "i" || w[C + 1] === "I" ? (g.im += parseFloat((T % 2 ? "-" : "") + R), C++) : g.re += parseFloat((T % 2 ? "-" : "") + R), S = T = 0));
            }
            S + T > 0 && a();
            break;
          case "number":
            g.im = 0, g.re = d;
            break;
          default:
            a();
        }
      return isNaN(g.re) || isNaN(g.im), g;
    }, "parse");
    function m(d, f) {
      if (!(this instanceof m))
        return new m(d, f);
      var g = v(d, f);
      this.re = g.re, this.im = g.im;
    }
    __name(m, "m");
    u(m, "Complex"), m.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new m(this.re / d, this.im / d);
    }, add: function(d, f) {
      var g = new m(d, f);
      return this.isInfinite() && g.isInfinite() ? m.NAN : this.isInfinite() || g.isInfinite() ? m.INFINITY : new m(this.re + g.re, this.im + g.im);
    }, sub: function(d, f) {
      var g = new m(d, f);
      return this.isInfinite() && g.isInfinite() ? m.NAN : this.isInfinite() || g.isInfinite() ? m.INFINITY : new m(this.re - g.re, this.im - g.im);
    }, mul: function(d, f) {
      var g = new m(d, f);
      return this.isInfinite() && g.isZero() || this.isZero() && g.isInfinite() ? m.NAN : this.isInfinite() || g.isInfinite() ? m.INFINITY : g.im === 0 && this.im === 0 ? new m(this.re * g.re, 0) : new m(this.re * g.re - this.im * g.im, this.re * g.im + this.im * g.re);
    }, div: function(d, f) {
      var g = new m(d, f);
      if (this.isZero() && g.isZero() || this.isInfinite() && g.isInfinite())
        return m.NAN;
      if (this.isInfinite() || g.isZero())
        return m.INFINITY;
      if (this.isZero() || g.isInfinite())
        return m.ZERO;
      d = this.re, f = this.im;
      var w = g.re, S = g.im, T, C;
      return S === 0 ? new m(d / w, f / w) : Math.abs(w) < Math.abs(S) ? (C = w / S, T = w * C + S, new m((d * C + f) / T, (f * C - d) / T)) : (C = S / w, T = S * C + w, new m((d + f * C) / T, (f - d * C) / T));
    }, pow: function(d, f) {
      var g = new m(d, f);
      if (d = this.re, f = this.im, g.isZero())
        return m.ONE;
      if (g.im === 0) {
        if (f === 0 && d > 0)
          return new m(Math.pow(d, g.re), 0);
        if (d === 0)
          switch ((g.re % 4 + 4) % 4) {
            case 0:
              return new m(Math.pow(f, g.re), 0);
            case 1:
              return new m(0, Math.pow(f, g.re));
            case 2:
              return new m(-Math.pow(f, g.re), 0);
            case 3:
              return new m(0, -Math.pow(f, g.re));
          }
      }
      if (d === 0 && f === 0 && g.re > 0 && g.im >= 0)
        return m.ZERO;
      var w = Math.atan2(f, d), S = p(d, f);
      return d = Math.exp(g.re * S - g.im * w), f = g.im * S + g.re * w, new m(d * Math.cos(f), d * Math.sin(f));
    }, sqrt: function() {
      var d = this.re, f = this.im, g = this.abs(), w, S;
      if (d >= 0) {
        if (f === 0)
          return new m(Math.sqrt(d), 0);
        w = 0.5 * Math.sqrt(2 * (g + d));
      } else
        w = Math.abs(f) / Math.sqrt(2 * (g - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (g - d)) : S = Math.abs(f) / Math.sqrt(2 * (g + d)), new m(w, f < 0 ? -S : S);
    }, exp: function() {
      var d = Math.exp(this.re);
      return this.im, new m(d * Math.cos(this.im), d * Math.sin(this.im));
    }, expm1: function() {
      var d = this.re, f = this.im;
      return new m(Math.expm1(d) * Math.cos(f) + n(f), Math.exp(d) * Math.sin(f));
    }, log: function() {
      var d = this.re, f = this.im;
      return f === 0 && d > 0, new m(p(d, f), Math.atan2(f, d));
    }, abs: function() {
      return s(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, f = this.im;
      return new m(Math.sin(d) * r(f), Math.cos(d) * e(f));
    }, cos: function() {
      var d = this.re, f = this.im;
      return new m(Math.cos(d) * r(f), -Math.sin(d) * e(f));
    }, tan: function() {
      var d = 2 * this.re, f = 2 * this.im, g = Math.cos(d) + r(f);
      return new m(Math.sin(d) / g, e(f) / g);
    }, cot: function() {
      var d = 2 * this.re, f = 2 * this.im, g = Math.cos(d) - r(f);
      return new m(-Math.sin(d) / g, e(f) / g);
    }, sec: function() {
      var d = this.re, f = this.im, g = 0.5 * r(2 * f) + 0.5 * Math.cos(2 * d);
      return new m(Math.cos(d) * r(f) / g, Math.sin(d) * e(f) / g);
    }, csc: function() {
      var d = this.re, f = this.im, g = 0.5 * r(2 * f) - 0.5 * Math.cos(2 * d);
      return new m(Math.sin(d) * r(f) / g, -Math.cos(d) * e(f) / g);
    }, asin: function() {
      var d = this.re, f = this.im, g = new m(f * f - d * d + 1, -2 * d * f).sqrt(), w = new m(g.re - f, g.im + d).log();
      return new m(w.im, -w.re);
    }, acos: function() {
      var d = this.re, f = this.im, g = new m(f * f - d * d + 1, -2 * d * f).sqrt(), w = new m(g.re - f, g.im + d).log();
      return new m(Math.PI / 2 - w.im, w.re);
    }, atan: function() {
      var d = this.re, f = this.im;
      if (d === 0) {
        if (f === 1)
          return new m(0, 1 / 0);
        if (f === -1)
          return new m(0, -1 / 0);
      }
      var g = d * d + (1 - f) * (1 - f), w = new m((1 - f * f - d * d) / g, -2 * d / g).log();
      return new m(-0.5 * w.im, 0.5 * w.re);
    }, acot: function() {
      var d = this.re, f = this.im;
      if (f === 0)
        return new m(Math.atan2(1, d), 0);
      var g = d * d + f * f;
      return g !== 0 ? new m(d / g, -f / g).atan() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new m(0, 1 / 0);
      var g = d * d + f * f;
      return g !== 0 ? new m(d / g, -f / g).acos() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new m(Math.PI / 2, 1 / 0);
      var g = d * d + f * f;
      return g !== 0 ? new m(d / g, -f / g).asin() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, f = this.im;
      return new m(e(d) * Math.cos(f), r(d) * Math.sin(f));
    }, cosh: function() {
      var d = this.re, f = this.im;
      return new m(r(d) * Math.cos(f), e(d) * Math.sin(f));
    }, tanh: function() {
      var d = 2 * this.re, f = 2 * this.im, g = r(d) + Math.cos(f);
      return new m(e(d) / g, Math.sin(f) / g);
    }, coth: function() {
      var d = 2 * this.re, f = 2 * this.im, g = r(d) - Math.cos(f);
      return new m(e(d) / g, -Math.sin(f) / g);
    }, csch: function() {
      var d = this.re, f = this.im, g = Math.cos(2 * f) - r(2 * d);
      return new m(-2 * e(d) * Math.cos(f) / g, 2 * r(d) * Math.sin(f) / g);
    }, sech: function() {
      var d = this.re, f = this.im, g = Math.cos(2 * f) + r(2 * d);
      return new m(2 * r(d) * Math.cos(f) / g, -2 * e(d) * Math.sin(f) / g);
    }, asinh: function() {
      var d = this.im;
      this.im = -this.re, this.re = d;
      var f = this.asin();
      return this.re = -this.im, this.im = d, d = f.re, f.re = -f.im, f.im = d, f;
    }, acosh: function() {
      var d = this.acos();
      if (d.im <= 0) {
        var f = d.re;
        d.re = -d.im, d.im = f;
      } else {
        var f = d.im;
        d.im = -d.re, d.re = f;
      }
      return d;
    }, atanh: function() {
      var d = this.re, f = this.im, g = d > 1 && f === 0, w = 1 - d, S = 1 + d, T = w * w + f * f, C = T !== 0 ? new m((S * w - f * f) / T, (f * w + S * f) / T) : new m(d !== -1 ? d / 0 : 0, f !== 0 ? f / 0 : 0), R = C.re;
      return C.re = p(C.re, C.im) / 2, C.im = Math.atan2(C.im, R) / 2, g && (C.im = -C.im), C;
    }, acoth: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new m(0, Math.PI / 2);
      var g = d * d + f * f;
      return g !== 0 ? new m(d / g, -f / g).atanh() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, f = this.im;
      if (f === 0)
        return new m(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var g = d * d + f * f;
      return g !== 0 ? new m(d / g, -f / g).asinh() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, f = this.im;
      if (this.isZero())
        return m.INFINITY;
      var g = d * d + f * f;
      return g !== 0 ? new m(d / g, -f / g).acosh() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return m.INFINITY;
      if (this.isInfinite())
        return m.ZERO;
      var d = this.re, f = this.im, g = d * d + f * f;
      return new m(d / g, -f / g);
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
    }, equals: function(d, f) {
      var g = new m(d, f);
      return Math.abs(g.re - this.re) <= m.EPSILON && Math.abs(g.im - this.im) <= m.EPSILON;
    }, clone: function() {
      return new m(this.re, this.im);
    }, toString: function() {
      var d = this.re, f = this.im, g = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < m.EPSILON && (d = 0), Math.abs(f) < m.EPSILON && (f = 0), f === 0 ? g + d : (d !== 0 ? (g += d, g += " ", f < 0 ? (f = -f, g += "-") : g += "+", g += " ") : f < 0 && (f = -f, g += "-"), f !== 1 && (g += f), g + "i"));
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
    }) : typeof Ic == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, wm.exports = m) : t.Complex = m;
  })(Ic);
});
var In = jt(zp());
function Ql(t, r, e, n) {
  function s(a) {
    return a instanceof e ? a : new e(function(p) {
      p(a);
    });
  }
  __name(s, "s");
  return u(s, "adopt"), new (e || (e = Promise))(function(a, p) {
    function v(f) {
      try {
        d(n.next(f));
      } catch (g) {
        p(g);
      }
    }
    __name(v, "v");
    u(v, "fulfilled");
    function m(f) {
      try {
        d(n.throw(f));
      } catch (g) {
        p(g);
      }
    }
    __name(m, "m");
    u(m, "rejected");
    function d(f) {
      f.done ? a(f.value) : s(f.value).then(v, m);
    }
    __name(d, "d");
    u(d, "step"), d((n = n.apply(t, r || [])).next());
  });
}
__name(Ql, "Ql");
u(Ql, "__awaiter");
function eu(t, r) {
  var e = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, s, a, p;
  return p = { next: v(0), throw: v(1), return: v(2) }, typeof Symbol == "function" && (p[Symbol.iterator] = function() {
    return this;
  }), p;
  function v(d) {
    return function(f) {
      return m([d, f]);
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
      } catch (f) {
        d = [6, f], s = 0;
      } finally {
        n = a = 0;
      }
    if (d[0] & 5)
      throw d[1];
    return { value: d[0] ? d[1] : void 0, done: true };
  }
  __name(m, "m");
}
__name(eu, "eu");
u(eu, "__generator");
function es(t, r) {
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
__name(es, "es");
u(es, "__read");
function Jn(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, s = r.length, a; n < s; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
__name(Jn, "Jn");
u(Jn, "__spreadArray");
var vg = { withStackTrace: false };
var Dp = u(function(t, r, e) {
  e === void 0 && (e = vg);
  var n = r.isOk() ? { type: "Ok", value: r.value } : { type: "Err", value: r.error }, s = e.withStackTrace ? new Error().stack : void 0;
  return { data: n, message: t, stack: s };
}, "createNeverThrowError");
var Ri = function() {
  function t(r) {
    this._promise = r;
  }
  __name(t, "t");
  return u(t, "ResultAsync"), t.fromSafePromise = function(r) {
    var e = r.then(function(n) {
      return new Zn(n);
    });
    return new t(e);
  }, t.fromPromise = function(r, e) {
    var n = r.then(function(s) {
      return new Zn(s);
    }).catch(function(s) {
      return new Kn(e(s));
    });
    return new t(n);
  }, t.combine = function(r) {
    return bg(r);
  }, t.combineWithAllErrors = function(r) {
    return yg(r);
  }, t.prototype.map = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Ql(e, void 0, void 0, function() {
        var s;
        return eu(this, function(a) {
          switch (a.label) {
            case 0:
              return n.isErr() ? [2, new Kn(n.error)] : (s = Zn.bind, [4, r(n.value)]);
            case 1:
              return [2, new (s.apply(Zn, [void 0, a.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.mapErr = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Ql(e, void 0, void 0, function() {
        var s;
        return eu(this, function(a) {
          switch (a.label) {
            case 0:
              return n.isOk() ? [2, new Zn(n.value)] : (s = Kn.bind, [4, r(n.error)]);
            case 1:
              return [2, new (s.apply(Kn, [void 0, a.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.andThen = function(r) {
    return new t(this._promise.then(function(e) {
      if (e.isErr())
        return new Kn(e.error);
      var n = r(e.value);
      return n instanceof t ? n._promise : n;
    }));
  }, t.prototype.orElse = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Ql(e, void 0, void 0, function() {
        return eu(this, function(s) {
          return n.isErr() ? [2, r(n.error)] : [2, new Zn(n.value)];
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
var Rp = u(function(t) {
  return new Ri(Promise.resolve(new Kn(t)));
}, "errAsync");
var q0 = Ri.fromPromise;
var F0 = Ri.fromSafePromise;
var gg = u(function(t) {
  return function(r) {
    return Jn(Jn([], es(r), false), [t], false);
  };
}, "appendValueToEndOfList");
var kp = u(function(t) {
  return t.reduce(function(r, e) {
    return r.isOk() ? e.isErr() ? rn(e.error) : r.map(gg(e.value)) : r;
  }, tn([]));
}, "combineResultList");
var bg = u(function(t) {
  return Ri.fromSafePromise(Promise.all(t)).andThen(kp);
}, "combineResultAsyncList");
var Np = u(function(t) {
  return t.reduce(function(r, e) {
    return e.isErr() ? r.isErr() ? rn(Jn(Jn([], es(r.error), false), [e.error], false)) : rn([e.error]) : r.isErr() ? r : tn(Jn(Jn([], es(r.value), false), [e.value], false));
  }, tn([]));
}, "combineResultListWithAllErrors");
var yg = u(function(t) {
  return Ri.fromSafePromise(Promise.all(t)).andThen(Np);
}, "combineResultAsyncListWithAllErrors");
var Oo;
(function(t) {
  function r(s, a) {
    return function() {
      for (var p = [], v = 0; v < arguments.length; v++)
        p[v] = arguments[v];
      try {
        var m = s.apply(void 0, Jn([], es(p), false));
        return tn(m);
      } catch (d) {
        return rn(a ? a(d) : d);
      }
    };
  }
  __name(r, "r");
  u(r, "fromThrowable"), t.fromThrowable = r;
  function e(s) {
    return kp(s);
  }
  __name(e, "e");
  u(e, "combine"), t.combine = e;
  function n(s) {
    return Np(s);
  }
  __name(n, "n");
  u(n, "combineWithAllErrors"), t.combineWithAllErrors = n;
})(Oo || (Oo = {}));
var tn = u(function(t) {
  return new Zn(t);
}, "ok");
var rn = u(function(t) {
  return new Kn(t);
}, "err");
var Zn = function() {
  function t(r) {
    this.value = r;
  }
  __name(t, "t");
  return u(t, "Ok"), t.prototype.isOk = function() {
    return true;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return tn(r(this.value));
  }, t.prototype.mapErr = function(r) {
    return tn(this.value);
  }, t.prototype.andThen = function(r) {
    return r(this.value);
  }, t.prototype.orElse = function(r) {
    return tn(this.value);
  }, t.prototype.asyncAndThen = function(r) {
    return r(this.value);
  }, t.prototype.asyncMap = function(r) {
    return Ri.fromSafePromise(r(this.value));
  }, t.prototype.unwrapOr = function(r) {
    return this.value;
  }, t.prototype.match = function(r, e) {
    return r(this.value);
  }, t.prototype._unsafeUnwrap = function(r) {
    return this.value;
  }, t.prototype._unsafeUnwrapErr = function(r) {
    throw Dp("Called `_unsafeUnwrapErr` on an Ok", this, r);
  }, t;
}();
var Kn = function() {
  function t(r) {
    this.error = r;
  }
  __name(t, "t");
  return u(t, "Err"), t.prototype.isOk = function() {
    return false;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return rn(this.error);
  }, t.prototype.mapErr = function(r) {
    return rn(r(this.error));
  }, t.prototype.andThen = function(r) {
    return rn(this.error);
  }, t.prototype.orElse = function(r) {
    return r(this.error);
  }, t.prototype.asyncAndThen = function(r) {
    return Rp(this.error);
  }, t.prototype.asyncMap = function(r) {
    return Rp(this.error);
  }, t.prototype.unwrapOr = function(r) {
    return r;
  }, t.prototype.match = function(r, e) {
    return e(this.error);
  }, t.prototype._unsafeUnwrap = function(r) {
    throw Dp("Called `_unsafeUnwrap` on an Err", this, r);
  }, t.prototype._unsafeUnwrapErr = function(r) {
    return this.error;
  }, t;
}();
var U0 = Oo.fromThrowable;
var Fd = jt(on());
function Gd(t) {
  let r = Pn(t);
  return new In.default(r).valueOf() * Math.PI;
}
__name(Gd, "Gd");
u(Gd, "$");
function Do(t) {
  let r = Pn(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(Do, "Do");
u(Do, "L");
function jd(t, r) {
  return new In.default(Pn(t)).valueOf() < new In.default(Pn(r)).valueOf();
}
__name(jd, "jd");
u(jd, "Q");
function Hd(t, r) {
  return new In.default(Pn(t)).valueOf() > new In.default(Pn(r)).valueOf();
}
__name(Hd, "Hd");
u(Hd, "V");
function Bd(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let r = Pn(t);
    return new In.default(r).valueOf(), true;
  } catch (r) {
    return false;
  }
}
__name(Bd, "Bd");
u(Bd, "W");
function Pn(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(Pn, "Pn");
u(Pn, "l");
function $d(t) {
  try {
    let r = Pn(t), e = new In.default(r).toFraction().split("/"), n;
    return e[0] === "0" ? n = "0" : e[0] === "1" ? n = "\u03C0" : e[0] === "-1" ? n = "-\u03C0" : n = `${e[0]}\u03C0`, e.length === 1 ? n : `${n}/${e[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name($d, "$d");
u($d, "Z");
var qd = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var ur;
var An = (ur = class {
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
    for (let e of qd)
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
An.CONSISTENT = new An(false, 0, 2, ", "), An.EXACT = new An(true, 0, void 0, ", "), An.MINIFIED = new An(true, 0, void 0, ","), An.SIMPLIFIED = new An(true, 5e-4, 3, ", ");
var ri;
var Ld = (ri = class {
  static {
    __name(this, "ri");
  }
  static matchUnicodeFraction(r) {
    for (let e of qd)
      if (r(e))
        return e;
  }
  constructor(r, e, n, s = ", ") {
    this.allowAbbreviation = r, this.maxAbbreviationError = e, this.fixedDigits = n, this.itemSeparator = s;
  }
  format(r) {
    return this.allowAbbreviation ? this.abbreviateNumber(r, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? r.toFixed(this.fixedDigits) : String(r);
  }
  abbreviateNumber(r, e = 0, n = void 0) {
    if (Math.abs(r) < e)
      return "0";
    if (r < 0)
      return `-${this.abbreviateNumber(-r, e, n)}`;
    let s = ri.matchUnicodeFraction((p) => Math.abs(p.value - r) <= e);
    if (s !== void 0)
      return s.character;
    let a = ri.matchUnicodeFraction((p) => Math.abs(Math.sqrt(p.value) - r) <= e);
    return a !== void 0 ? `\u221A${a.character}` : r % 1 !== 0 && n !== void 0 ? r.toFixed(n) : r.toString();
  }
}, u(ri, "t"), ri);
var zo = { allowAbbreviation: true, maxAbbreviationError: 0, fixedDigits: void 0 };
var $e;
var ti = ($e = class {
  static {
    __name(this, "$e");
  }
  constructor(r, e) {
    this.angle = this.arg.bind(this), this.phase = this.arg.bind(this), this.real = r, this.imag = e, this.angle = this.arg, this.phase = this.arg;
  }
  static from(r) {
    return typeof r == "number" ? new $e(r, 0) : r;
  }
  static realPartOf(r) {
    return typeof r == "number" ? r : r.real;
  }
  static imagPartOf(r) {
    return typeof r == "number" ? 0 : r.imag;
  }
  static polar(r, e) {
    let [n, s] = this.cosAndSin(e);
    return new $e(r * n, r * s);
  }
  static cosAndSin(r) {
    let e = Math.PI / 4, n = Math.round(r / e);
    if (n * e === r) {
      let s = Math.sqrt(0.5);
      return [[1, 0], [s, s], [0, 1], [-s, s], [-1, 0], [-s, -s], [0, -1], [s, -s]][n & 7];
    }
    return [Math.cos(r), Math.sin(r)];
  }
  isEqualTo(r) {
    return typeof r == "number" ? this.real === r && this.imag === 0 : r instanceof $e ? this.real === r.real && this.imag === r.imag : false;
  }
  isApproximatelyEqualTo(r, e) {
    if (typeof r == "number" || r instanceof $e) {
      let n = this.minus($e.from(r));
      return Math.abs(n.real) <= e && Math.abs(n.imag) <= e && n.abs() <= e;
    }
    return false;
  }
  conjugate() {
    return new $e(this.real, -this.imag);
  }
  neg() {
    return new $e(-this.real, -this.imag);
  }
  plus(r) {
    let e = $e.from(r);
    return new $e(this.real + e.real, this.imag + e.imag);
  }
  minus(r) {
    let e = $e.from(r);
    return new $e(this.real - e.real, this.imag - e.imag);
  }
  times(r) {
    let e = $e.from(r);
    return new $e(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  dividedBy(r) {
    let e = $e.from(r), n = e.norm2();
    if (n === 0)
      return rn(Error("Division by Zero"));
    let s = this.times(e.conjugate());
    return tn(new $e(s.real / n, s.imag / n));
  }
  norm2() {
    return this.real * this.real + this.imag * this.imag;
  }
  abs() {
    return Math.sqrt(this.norm2());
  }
  unit() {
    let r = this.norm2();
    return r < 1e-5 ? $e.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r))._unsafeUnwrap();
  }
  arg() {
    return Math.atan2(this.imag, this.real);
  }
  pow(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new $e(Math.sqrt(this.real), 0) : this.isEqualTo($e.ZERO) ? $e.ZERO : this.ln().times($e.from(r)).exp();
  }
  format(r = zo) {
    let e = new Ld(r.allowAbbreviation === void 0 ? zo.allowAbbreviation : r.allowAbbreviation, r.maxAbbreviationError || 0, r.fixedDigits);
    return e.allowAbbreviation ? this.toStringAllowSingleValue(e) : this.toStringBothValues(e);
  }
  toString() {
    let r = new Ld(zo.allowAbbreviation, zo.maxAbbreviationError, zo.fixedDigits);
    return this.toStringAllowSingleValue(r);
  }
  exp() {
    return $e.polar(Math.exp(this.real), this.imag);
  }
  ln() {
    return new $e(Math.log(this.abs()), this.arg());
  }
  toStringAllowSingleValue(r) {
    if (this.canImagPartBeOmitted(r.maxAbbreviationError))
      return r.format(this.real);
    if (this.canRealPartBeOmitted(r.maxAbbreviationError)) {
      let e;
      return this.isImagFactorCloseToOne(r.maxAbbreviationError) ? e = "" : this.isImagFactorMinusOne(r.maxAbbreviationError) ? e = "-" : e = r.format(this.imag), `${e}i`;
    }
    return this.toStringBothValues(r);
  }
  toStringBothValues(r) {
    let e = this.imag >= 0 ? "+" : "-", n = this.canImagFactorBeOmitted(r) ? "" : r.format(Math.abs(this.imag));
    return `${(r.allowAbbreviation || r.fixedDigits === void 0 || this.real < 0 ? "" : "+") + r.format(this.real) + e + n}i`;
  }
  canRealPartBeOmitted(r) {
    return Math.abs(this.real) <= r;
  }
  canImagPartBeOmitted(r) {
    return Math.abs(this.imag) <= r;
  }
  isImagFactorCloseToOne(r) {
    return Math.abs(this.imag - 1) <= r;
  }
  isImagFactorMinusOne(r) {
    return Math.abs(this.imag + 1) <= r;
  }
  canImagFactorBeOmitted(r) {
    return r.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= r.maxAbbreviationError;
  }
}, u($e, "a"), $e);
ti.ZERO = new ti(0, 0), ti.ONE = new ti(1, 0), ti.I = new ti(0, 1);
var ko = ti;
var No = { MAX_QUBIT_COUNT: 16 };
var pu = 0;
var Ro;
var zt = (Ro = class extends Error {
  static {
    __name(this, "Ro");
  }
  constructor(r, e) {
    super(r), this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), pu++;
    try {
      this.details = pu === 1 ? (0, Fd.format)(this.detailsObj) : "(failed to prettyFormat detailsObj due to possibly re-entrancy)";
    } catch (n) {
      console.error(n), this.details = "(failed to prettyFormat detailsObj, see the console for details)";
    } finally {
      pu--;
    }
  }
}, u(Ro, "A"), Ro);
function fe(t, r = {}, e = document) {
  let n = new CustomEvent(t, { bubbles: true, cancelable: true, detail: r });
  return e.dispatchEvent(n);
}
__name(fe, "fe");
u(fe, "ae");
var Ud = u((t) => typeof t == "number" && 1 <= t && t <= No.MAX_QUBIT_COUNT, "le");
var qb = u(() => ({ message: "Parse Error" }), "P");
var _i;
var Wd = (_i = class {
  static {
    __name(this, "_i");
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
    _i.need(r != null, "notNull");
  }
  static get urlJson() {
    let r = new URL(location.href, window.location.origin), e = decodeURIComponent(r.pathname), n = e.lastIndexOf("/");
    return e.substring(n + 1);
  }
}, u(_i, "g"), _i);
Wd.safeJsonParse = Oo.fromThrowable(JSON.parse, qb);
var B = Wd;
var du = "\u25E6";
var fu = "Bloch";
var hu = "\u2022";
var gs = "H";
var bs = "Measure";
var ys = "P";
var mu = "QFT\u2020";
var vu = "QFT";
var ws = "X^\xBD";
var xs = "Rx";
var Es = "Ry";
var Ss = "Rz";
var Ts = "S\u2020";
var Cs = "S";
var gu = "\u2026";
var bu = "Swap";
var Os = "T\u2020";
var Ms = "T";
var Vd = "|0>";
var Yd = "|1>";
var As = "X";
var Is = "Y";
var Ps = "Z";
var yu = /* @__PURE__ */ new WeakSet();
function xu(t) {
  yu.add(t), t.shadowRoot && Eu(t.shadowRoot), Tu(t), Su(t.ownerDocument);
}
__name(xu, "xu");
u(xu, "bind");
function Eu(t) {
  Tu(t), Su(t);
}
__name(Eu, "Eu");
u(Eu, "bindShadow");
var zs = /* @__PURE__ */ new WeakMap();
function Su(t = document) {
  if (zs.has(t))
    return zs.get(t);
  let r = false, e = new MutationObserver((s) => {
    for (let a of s)
      if (a.type === "attributes" && a.target instanceof Element)
        wu(a.target);
      else if (a.type === "childList" && a.addedNodes.length)
        for (let p of a.addedNodes)
          p instanceof Element && Tu(p);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, zs.delete(t), e.disconnect();
  } };
  return zs.set(t, n), n;
}
__name(Su, "Su");
u(Su, "listenForBind");
function Tu(t) {
  for (let r of t.querySelectorAll("[data-action]"))
    wu(r);
  t instanceof Element && t.hasAttribute("data-action") && wu(t);
}
__name(Tu, "Tu");
u(Tu, "bindElements");
function Fb(t) {
  let r = t.currentTarget;
  for (let e of Xd(r))
    if (t.type === e.type) {
      let n = r.closest(e.tag);
      yu.has(n) && typeof n[e.method] == "function" && n[e.method](t);
      let s = r.getRootNode();
      if (s instanceof ShadowRoot && yu.has(s.host) && s.host.matches(e.tag)) {
        let a = s.host;
        typeof a[e.method] == "function" && a[e.method](t);
      }
    }
}
__name(Fb, "Fb");
u(Fb, "handleEvent");
function* Xd(t) {
  for (let r of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, e), tag: r.slice(e + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(Xd, "Xd");
u(Xd, "bindings");
function wu(t) {
  for (let r of Xd(t))
    t.addEventListener(r.type, Fb);
}
__name(wu, "wu");
u(wu, "bindActions");
function Cu(t) {
  let r = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[t.name] = t, window.customElements.define(r, t));
}
__name(Cu, "Cu");
u(Cu, "register");
function Ou(t, r) {
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
__name(Ou, "Ou");
u(Ou, "findTarget");
function Mu(t, r) {
  let e = t.tagName.toLowerCase(), n = [];
  if (t.shadowRoot)
    for (let s of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${r}"]`))
      s.closest(e) || n.push(s);
  for (let s of t.querySelectorAll(`[data-targets~="${e}.${r}"]`))
    s.closest(e) === t && n.push(s);
  return n;
}
__name(Mu, "Mu");
u(Mu, "findTargets");
function Oe(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return Ou(this, r);
  } });
}
__name(Oe, "Oe");
u(Oe, "target");
function ft(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return Mu(this, r);
  } });
}
__name(ft, "ft");
u(ft, "targets");
function Au(t) {
  for (let r of t.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === t && t.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(Au, "Au");
u(Au, "autoShadowRoot");
var Rs = /* @__PURE__ */ new WeakMap();
function k(t, r) {
  Rs.has(t) || Rs.set(t, []), Rs.get(t).push(r);
}
__name(k, "k");
u(k, "attr");
function Iu(t, r) {
  r || (r = Zd(Object.getPrototypeOf(t)));
  for (let e of r) {
    let n = t[e], s = Kd(e), a = { configurable: true, get() {
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
__name(Iu, "Iu");
u(Iu, "initializeAttrs");
function Zd(t) {
  let r = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let n = Rs.get(e) || [];
    for (let s of n)
      r.add(s);
    e = Object.getPrototypeOf(e);
  }
  return r;
}
__name(Zd, "Zd");
u(Zd, "getAttrNames");
function Kd(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Kd, "Kd");
u(Kd, "attrToAttributeName");
function Pu(t) {
  let r = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...Zd(t.prototype)].map(Kd).concat(r);
  }, set(e) {
    r = e;
  } });
}
__name(Pu, "Pu");
u(Pu, "defineObservedAttributes");
var Ub = /* @__PURE__ */ new WeakSet();
function Jd(t, r) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), Ub.add(t), Au(t), Iu(t), xu(t), r && r.call(t), t.shadowRoot && Eu(t.shadowRoot);
}
__name(Jd, "Jd");
u(Jd, "initializeInstance");
function Qd(t) {
  Pu(t), Cu(t);
}
__name(Qd, "Qd");
u(Qd, "initializeClass");
function X(t) {
  let r = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    Jd(this, r);
  }, Qd(t);
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
  u(e, "ActivateableMixinClass"), M([k], e.prototype, "active", 2);
  let r = e;
  return r;
}
__name(he, "he");
u(he, "ActivateableMixin");
var ni = u((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function zn(t) {
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
  u(e, "AngleableMixinClass"), M([k], e.prototype, "angle", 2), M([k], e.prototype, "reducedAngle", 2);
  let r = e;
  return r;
}
__name(zn, "zn");
u(zn, "AngleableMixin");
var _o = u((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
function Le(t) {
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
__name(Le, "Le");
u(Le, "ControllableMixin");
function Me(t) {
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
  u(e, "DisableableMixinClass"), M([k], e.prototype, "disabled", 2);
  let r = e;
  return r;
}
__name(Me, "Me");
u(Me, "DisableableMixin");
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
function Li(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      r.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (e[n[s]] = t[n[s]]);
  return e;
}
__name(Li, "Li");
u(Li, "__rest");
function we(t) {
  var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], n = 0;
  if (e)
    return e.call(t);
  if (t && typeof t.length == "number")
    return { next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    } };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(we, "we");
u(we, "__values");
function Ee(t, r) {
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
__name(Ee, "Ee");
u(Ee, "__read");
function ke(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, s = r.length, a; n < s; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
__name(ke, "ke");
u(ke, "__spreadArray");
var Ne;
(function(t) {
  t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
})(Ne || (Ne = {}));
var an;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(an || (an = {}));
var Lo = Ne.Start;
var Gi = Ne.Stop;
var Rn = Ne.Raise;
var ii = Ne.Send;
var Ds = Ne.Cancel;
var ef = Ne.NullEvent;
var zu = Ne.Assign;
var mx = Ne.After;
var vx = Ne.DoneState;
var ks = Ne.Log;
var tf = Ne.Init;
var Go = Ne.Invoke;
var gx = Ne.ErrorExecution;
var Ru = Ne.ErrorPlatform;
var Du = Ne.ErrorCustom;
var jo = Ne.Update;
var rf = Ne.Choose;
var nf = Ne.Pure;
var Ns = ".";
var ku = {};
var _s = "xstate.guard";
var of = "";
var Ge = true;
var Ls;
function Bo(t, r, e) {
  e === void 0 && (e = Ns);
  var n = ji(t, e), s = ji(r, e);
  return Te(s) ? Te(n) ? s === n : false : Te(n) ? n in s : Object.keys(n).every(function(a) {
    return a in s ? Bo(n[a], s[a]) : false;
  });
}
__name(Bo, "Bo");
u(Bo, "matchesState");
function Gs(t) {
  try {
    return Te(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Gs, "Gs");
u(Gs, "getEventType");
function js(t, r) {
  try {
    return sn(t) ? t : t.toString().split(r);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(js, "js");
u(js, "toStatePath");
function Wb(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(Wb, "Wb");
u(Wb, "isStateLike");
function ji(t, r) {
  if (Wb(t))
    return t.value;
  if (sn(t))
    return Ho(t);
  if (typeof t != "string")
    return t;
  var e = js(t, r);
  return Ho(e);
}
__name(ji, "ji");
u(ji, "toStateValue");
function Ho(t) {
  if (t.length === 1)
    return t[0];
  for (var r = {}, e = r, n = 0; n < t.length - 1; n++)
    n === t.length - 2 ? e[t[n]] = t[n + 1] : (e[t[n]] = {}, e = e[t[n]]);
  return r;
}
__name(Ho, "Ho");
u(Ho, "pathToStateValue");
function Hi(t, r) {
  for (var e = {}, n = Object.keys(t), s = 0; s < n.length; s++) {
    var a = n[s];
    e[a] = r(t[a], a, t, s);
  }
  return e;
}
__name(Hi, "Hi");
u(Hi, "mapValues");
function Nu(t, r, e) {
  var n, s, a = {};
  try {
    for (var p = we(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      e(d) && (a[m] = r(d, m, t));
    }
  } catch (f) {
    n = { error: f };
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
__name(Nu, "Nu");
u(Nu, "mapFilterValues");
var af = u(function(t) {
  return function(r) {
    var e, n, s = r;
    try {
      for (var a = we(t), p = a.next(); !p.done; p = a.next()) {
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
function sf(t, r) {
  return function(e) {
    var n, s, a = e;
    try {
      for (var p = we(t), v = p.next(); !v.done; v = p.next()) {
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
__name(sf, "sf");
u(sf, "nestedPath");
function $o(t) {
  if (!t)
    return [[]];
  if (Te(t))
    return [[t]];
  var r = qe(Object.keys(t).map(function(e) {
    var n = t[e];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[e]] : $o(t[e]).map(function(s) {
      return [e].concat(s);
    });
  }));
  return r;
}
__name($o, "$o");
u($o, "toStatePaths");
function qe(t) {
  var r;
  return (r = []).concat.apply(r, ke([], Ee(t), false));
}
__name(qe, "qe");
u(qe, "flatten");
function lf(t) {
  return sn(t) ? t : [t];
}
__name(lf, "lf");
u(lf, "toArrayStrict");
function cr(t) {
  return t === void 0 ? [] : lf(t);
}
__name(cr, "cr");
u(cr, "toArray");
function oi(t, r, e) {
  var n, s;
  if (Ae(t))
    return t(r, e.data);
  var a = {};
  try {
    for (var p = we(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      Ae(d) ? a[m] = d(r, e.data) : a[m] = d;
    }
  } catch (f) {
    n = { error: f };
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
__name(oi, "oi");
u(oi, "mapContext");
function uf(t) {
  return /^(done|error)\./.test(t);
}
__name(uf, "uf");
u(uf, "isBuiltInEvent");
function _u(t) {
  return !!(t instanceof Promise || t !== null && (Ae(t) || typeof t == "object") && Ae(t.then));
}
__name(_u, "_u");
u(_u, "isPromiseLike");
function cf(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(cf, "cf");
u(cf, "isBehavior");
function pf(t, r) {
  var e, n, s = Ee([[], []], 2), a = s[0], p = s[1];
  try {
    for (var v = we(t), m = v.next(); !m.done; m = v.next()) {
      var d = m.value;
      r(d) ? a.push(d) : p.push(d);
    }
  } catch (f) {
    e = { error: f };
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
__name(pf, "pf");
u(pf, "partition");
function df(t, r) {
  return Hi(t.states, function(e, n) {
    if (e) {
      var s = (Te(r) ? void 0 : r[n]) || (e ? e.current : void 0);
      if (s)
        return { current: s, states: df(e, s) };
    }
  });
}
__name(df, "df");
u(df, "updateHistoryStates");
function ff(t, r) {
  return { current: r, states: df(t, r) };
}
__name(ff, "ff");
u(ff, "updateHistoryValue");
function Lu(t, r, e, n) {
  Ge || nt(!!t, "Attempting to update undefined context");
  var s = t && e.reduce(function(a, p) {
    var v, m, d = p.assignment, f = { state: n, action: p, _event: r }, g = {};
    if (Ae(d))
      g = d(a, r.data, f);
    else
      try {
        for (var w = we(Object.keys(d)), S = w.next(); !S.done; S = w.next()) {
          var T = S.value, C = d[T];
          g[T] = Ae(C) ? C(a, r.data, f) : C;
        }
      } catch (R) {
        v = { error: R };
      } finally {
        try {
          S && !S.done && (m = w.return) && m.call(w);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, a, g);
  }, t);
  return s;
}
__name(Lu, "Lu");
u(Lu, "updateContext");
var nt = u(function() {
}, "warn");
Ge || (nt = u(function(t, r) {
  var e = t instanceof Error ? t : void 0;
  if (!(!e && t) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    e && n.push(e), console.warn.apply(console, n);
  }
}, "warn"));
function sn(t) {
  return Array.isArray(t);
}
__name(sn, "sn");
u(sn, "isArray");
function Ae(t) {
  return typeof t == "function";
}
__name(Ae, "Ae");
u(Ae, "isFunction");
function Te(t) {
  return typeof t == "string";
}
__name(Te, "Te");
u(Te, "isString");
function Hs(t, r) {
  if (t)
    return Te(t) ? { type: _s, name: t, predicate: r ? r[t] : void 0 } : Ae(t) ? { type: _s, name: t.name, predicate: t } : t;
}
__name(Hs, "Hs");
u(Hs, "toGuard");
function hf(t) {
  try {
    return "subscribe" in t && Ae(t.subscribe);
  } catch (r) {
    return false;
  }
}
__name(hf, "hf");
u(hf, "isObservable");
var jr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Ox = (Ls = {}, Ls[jr] = function() {
  return this;
}, Ls[Symbol.observable] = function() {
  return this;
}, Ls);
function Hr(t) {
  return !!t && "__xstatenode" in t;
}
__name(Hr, "Hr");
u(Hr, "isMachine");
function mf(t) {
  return !!t && typeof t.send == "function";
}
__name(mf, "mf");
u(mf, "isActor");
function Bi(t, r) {
  return Te(t) || typeof t == "number" ? V({ type: t }, r) : t;
}
__name(Bi, "Bi");
u(Bi, "toEventObject");
function st(t, r) {
  if (!Te(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = Bi(t);
  return V({ name: e.type, data: e, $$type: "scxml", type: "external" }, r);
}
__name(st, "st");
u(st, "toSCXMLEvent");
function ai(t, r) {
  var e = lf(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || Hr(n) ? { target: n, event: t } : V(V({}, n), { event: t });
  });
  return e;
}
__name(ai, "ai");
u(ai, "toTransitionConfigArray");
function vf(t) {
  if (!(t === void 0 || t === of))
    return cr(t);
}
__name(vf, "vf");
u(vf, "normalizeTarget");
function gf(t, r, e) {
  if (!Ge) {
    var n = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
    if (t === r)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(n));
    else {
      var s = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(s));
    }
  }
}
__name(gf, "gf");
u(gf, "reportUnhandledExceptionOnInvocation");
function Bs(t, r, e, n, s) {
  var a = t.options.guards, p = { state: s, cond: r, _event: n };
  if (r.type === _s)
    return ((a == null ? void 0 : a[r.name]) || r.predicate)(e, n.data, p);
  var v = a == null ? void 0 : a[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
  return v(e, n.data, p);
}
__name(Bs, "Bs");
u(Bs, "evaluateGuard");
function $s(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name($s, "$s");
u($s, "toInvokeSource");
function $i(t, r, e) {
  var n = u(function() {
  }, "noop"), s = typeof t == "object", a = s ? t : null;
  return { next: ((s ? t.next : t) || n).bind(a), error: ((s ? t.error : r) || n).bind(a), complete: ((s ? t.complete : e) || n).bind(a) };
}
__name($i, "$i");
u($i, "toObserver");
function qo(t, r) {
  return "".concat(t, ":invocation[").concat(r, "]");
}
__name(qo, "qo");
u(qo, "createInvokeId");
function Fo(t) {
  return (t.type === Rn || t.type === ii && t.to === an.Internal) && typeof t.delay != "number";
}
__name(Fo, "Fo");
u(Fo, "isRaisableAction");
var ln = st({ type: tf });
function qs(t, r) {
  return r && r[t] || void 0;
}
__name(qs, "qs");
u(qs, "getActionFunction");
function Fi(t, r) {
  var e;
  if (Te(t) || typeof t == "number") {
    var n = qs(t, r);
    Ae(n) ? e = { type: t, exec: n } : n ? e = n : e = { type: t, exec: void 0 };
  } else if (Ae(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var n = qs(t.type, r);
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
__name(Fi, "Fi");
u(Fi, "toActionObject");
var Br = u(function(t, r) {
  if (!t)
    return [];
  var e = sn(t) ? t : [t];
  return e.map(function(n) {
    return Fi(n, r);
  });
}, "toActionObjects");
function Fs(t) {
  var r = Fi(t);
  return V(V({ id: Te(t) ? t : r.id }, r), { type: r.type });
}
__name(Fs, "Fs");
u(Fs, "toActivityDefinition");
function bf(t, r) {
  return { type: Rn, event: typeof t == "function" ? t : Bi(t), delay: r ? r.delay : void 0, id: r == null ? void 0 : r.id };
}
__name(bf, "bf");
u(bf, "raise");
function Vb(t, r, e, n) {
  var s = { _event: e }, a = st(Ae(t.event) ? t.event(r, e.data, s) : t.event), p;
  if (Te(t.delay)) {
    var v = n && n[t.delay];
    p = Ae(v) ? v(r, e.data, s) : v;
  } else
    p = Ae(t.delay) ? t.delay(r, e.data, s) : t.delay;
  return V(V({}, t), { type: Rn, _event: a, delay: p });
}
__name(Vb, "Vb");
u(Vb, "resolveRaise");
function yf(t, r) {
  return { to: r ? r.to : void 0, type: ii, event: Ae(t) ? t : Bi(t), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Ae(t) ? t.name : Gs(t) };
}
__name(yf, "yf");
u(yf, "send");
function Yb(t, r, e, n) {
  var s = { _event: e }, a = st(Ae(t.event) ? t.event(r, e.data, s) : t.event), p;
  if (Te(t.delay)) {
    var v = n && n[t.delay];
    p = Ae(v) ? v(r, e.data, s) : v;
  } else
    p = Ae(t.delay) ? t.delay(r, e.data, s) : t.delay;
  var m = Ae(t.to) ? t.to(r, e.data, s) : t.to;
  return V(V({}, t), { to: m, _event: a, event: a.data, delay: p });
}
__name(Yb, "Yb");
u(Yb, "resolveSend");
var Xb = u(function(t, r, e) {
  return V(V({}, t), { value: Te(t.expr) ? t.expr : t.expr(r, e.data, { _event: e }) });
}, "resolveLog");
var wf = u(function(t) {
  return { type: Ds, sendId: t };
}, "cancel");
function xf(t) {
  var r = Fs(t);
  return { type: Ne.Start, activity: r, exec: void 0 };
}
__name(xf, "xf");
u(xf, "start");
function Ef(t) {
  var r = Ae(t) ? t : Fs(t);
  return { type: Ne.Stop, activity: r, exec: void 0 };
}
__name(Ef, "Ef");
u(Ef, "stop");
function Zb(t, r, e) {
  var n = Ae(t.activity) ? t.activity(r, e.data) : t.activity, s = typeof n == "string" ? { id: n } : n, a = { type: Ne.Stop, activity: s };
  return a;
}
__name(Zb, "Zb");
u(Zb, "resolveStop");
function Sf(t, r) {
  var e = r ? "#".concat(r) : "";
  return "".concat(Ne.After, "(").concat(t, ")").concat(e);
}
__name(Sf, "Sf");
u(Sf, "after");
function Uo(t, r) {
  var e = "".concat(Ne.DoneState, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(Uo, "Uo");
u(Uo, "done");
function Ui(t, r) {
  var e = "".concat(Ne.DoneInvoke, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(Ui, "Ui");
u(Ui, "doneInvoke");
function si(t, r) {
  var e = "".concat(Ne.ErrorPlatform, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(si, "si");
u(si, "error");
var Kb = u(function(t) {
  var r, e, n = [];
  try {
    for (var s = we(t), a = s.next(); !a.done; a = s.next())
      for (var p = a.value, v = 0; v < p.actions.length; ) {
        if (p.actions[v].type === zu) {
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
function qi(t, r, e, n, s, a, p) {
  p === void 0 && (p = false);
  var v = p ? [] : Kb(s), m = v.length ? Lu(e, n, v, r) : e, d = p ? [e] : void 0, f = [];
  function g(T, C) {
    var R;
    switch (C.type) {
      case Rn: {
        var _ = Vb(C, m, n, t.options.delays);
        return a && typeof _.delay == "number" && a(_, m, n), _;
      }
      case ii:
        var L = Yb(C, m, n, t.options.delays);
        if (!Ge) {
          var $ = C.delay;
          nt(!Te($) || typeof L.delay == "number", "No delay reference for delay expression '".concat($, "' was found on machine '").concat(t.id, "'"));
        }
        return a && L.to !== an.Internal && (T === "entry" ? f.push(L) : a(L, m, n)), L;
      case ks: {
        var I = Xb(C, m, n);
        return a == null || a(I, m, n), I;
      }
      case rf: {
        var ee = C, z = (R = ee.conds.find(function(ze) {
          var Ie = Hs(ze.cond, t.options.guards);
          return !Ie || Bs(t, Ie, m, n, a ? void 0 : r);
        })) === null || R === void 0 ? void 0 : R.actions;
        if (!z)
          return [];
        var H = Ee(qi(t, r, m, n, [{ type: T, actions: Br(cr(z), t.options.actions) }], a, p), 2), te = H[0], Q = H[1];
        return m = Q, d == null || d.push(m), te;
      }
      case nf: {
        var z = C.get(m, n.data);
        if (!z)
          return [];
        var ue = Ee(qi(t, r, m, n, [{ type: T, actions: Br(cr(z), t.options.actions) }], a, p), 2), K = ue[0], ie = ue[1];
        return m = ie, d == null || d.push(m), K;
      }
      case Gi: {
        var I = Zb(C, m, n);
        return a == null || a(I, e, n), I;
      }
      case zu: {
        m = Lu(m, n, [C], a ? void 0 : r), d == null || d.push(m);
        break;
      }
      default:
        var q = Fi(C, t.options.actions), oe = q.exec;
        if (a)
          a(q, m, n);
        else if (oe && d) {
          var tt = d.length - 1, Ze = V(V({}, q), { exec: function(ze) {
            for (var Ie = [], We = 1; We < arguments.length; We++)
              Ie[We - 1] = arguments[We];
            oe.apply(void 0, ke([d[tt]], Ee(Ie), false));
          } });
          q = Ze;
        }
        return q;
    }
  }
  __name(g, "g");
  u(g, "handleAction");
  function w(T) {
    var C, R, _ = [];
    try {
      for (var L = we(T.actions), $ = L.next(); !$.done; $ = L.next()) {
        var I = $.value, ee = g(T.type, I);
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
    return f.forEach(function(z) {
      a(z, m, n);
    }), f.length = 0, _;
  }
  __name(w, "w");
  u(w, "processBlock");
  var S = qe(s.map(w));
  return [S, m];
}
__name(qi, "qi");
u(qi, "resolveActions");
var Tf = [];
var Dn = u(function(t, r) {
  Tf.push(t);
  var e = r(t);
  return Tf.pop(), e;
}, "provide");
function Cf(t) {
  var r;
  return r = { id: t, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: t };
  } }, r[jr] = function() {
    return this;
  }, r;
}
__name(Cf, "Cf");
u(Cf, "createNullActor");
function Of(t, r, e, n) {
  var s, a = $s(t.src), p = (s = r == null ? void 0 : r.options.services) === null || s === void 0 ? void 0 : s[a.type], v = t.data ? oi(t.data, e, n) : void 0, m = p ? Gu(p, t.id, v) : Cf(t.id);
  return m.meta = t, m;
}
__name(Of, "Of");
u(Of, "createInvocableActor");
function Gu(t, r, e) {
  var n = Cf(r);
  if (n.deferred = true, Hr(t)) {
    var s = n.state = Dn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    n.getSnapshot = function() {
      return s;
    };
  }
  return n;
}
__name(Gu, "Gu");
u(Gu, "createDeferredActor");
function Jb(t) {
  try {
    return typeof t.send == "function";
  } catch (r) {
    return false;
  }
}
__name(Jb, "Jb");
u(Jb, "isActor");
function Mf(t) {
  return Jb(t) && "id" in t;
}
__name(Mf, "Mf");
u(Mf, "isSpawnedActor");
function Af(t) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[jr] = function() {
    return this;
  }, r), t);
}
__name(Af, "Af");
u(Af, "toActorRef");
var Wo = u(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function Hu(t) {
  return Object.keys(t.states).map(function(r) {
    return t.states[r];
  });
}
__name(Hu, "Hu");
u(Hu, "getAllChildren");
function Wi(t) {
  return Hu(t).filter(function(r) {
    return r.type !== "history";
  });
}
__name(Wi, "Wi");
u(Wi, "getChildren");
function Bu(t) {
  var r = [t];
  return Wo(t) ? r : r.concat(qe(Wi(t).map(Bu)));
}
__name(Bu, "Bu");
u(Bu, "getAllStateNodes");
function Vi(t, r) {
  var e, n, s, a, p, v, m, d, f = new Set(t), g = ju(f), w = new Set(r);
  try {
    for (var S = we(w), T = S.next(); !T.done; T = S.next())
      for (var C = T.value, R = C.parent; R && !w.has(R); )
        w.add(R), R = R.parent;
  } catch (Q) {
    e = { error: Q };
  } finally {
    try {
      T && !T.done && (n = S.return) && n.call(S);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var _ = ju(w);
  try {
    for (var L = we(w), $ = L.next(); !$.done; $ = L.next()) {
      var C = $.value;
      if (C.type === "compound" && (!_.get(C) || !_.get(C).length))
        g.get(C) ? g.get(C).forEach(function(ue) {
          return w.add(ue);
        }) : C.initialStateNodes.forEach(function(ue) {
          return w.add(ue);
        });
      else if (C.type === "parallel")
        try {
          for (var I = (p = void 0, we(Wi(C))), ee = I.next(); !ee.done; ee = I.next()) {
            var z = ee.value;
            w.has(z) || (w.add(z), g.get(z) ? g.get(z).forEach(function(ue) {
              return w.add(ue);
            }) : z.initialStateNodes.forEach(function(ue) {
              return w.add(ue);
            }));
          }
        } catch (ue) {
          p = { error: ue };
        } finally {
          try {
            ee && !ee.done && (v = I.return) && v.call(I);
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
    for (var H = we(w), te = H.next(); !te.done; te = H.next())
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
__name(Vi, "Vi");
u(Vi, "getConfiguration");
function If(t, r) {
  var e = r.get(t);
  if (!e)
    return {};
  if (t.type === "compound") {
    var n = e[0];
    if (n) {
      if (Wo(n))
        return n.key;
    } else
      return {};
  }
  var s = {};
  return e.forEach(function(a) {
    s[a.key] = If(a, r);
  }), s;
}
__name(If, "If");
u(If, "getValueFromAdj");
function ju(t) {
  var r, e, n = /* @__PURE__ */ new Map();
  try {
    for (var s = we(t), a = s.next(); !a.done; a = s.next()) {
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
__name(ju, "ju");
u(ju, "getAdjList");
function Pf(t, r) {
  var e = Vi([t], r);
  return If(t, ju(e));
}
__name(Pf, "Pf");
u(Pf, "getValue");
function Yi(t, r) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === r;
  }) : t instanceof Set ? t.has(r) : false;
}
__name(Yi, "Yi");
u(Yi, "has");
function zf(t) {
  return ke([], Ee(new Set(qe(ke([], Ee(t.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(zf, "zf");
u(zf, "nextEvents");
function Vo(t, r) {
  return r.type === "compound" ? Wi(r).some(function(e) {
    return e.type === "final" && Yi(t, e);
  }) : r.type === "parallel" ? Wi(r).every(function(e) {
    return Vo(t, e);
  }) : false;
}
__name(Vo, "Vo");
u(Vo, "isInFinalState");
function Rf(t) {
  return t === void 0 && (t = []), t.reduce(function(r, e) {
    return e.meta !== void 0 && (r[e.id] = e.meta), r;
  }, {});
}
__name(Rf, "Rf");
u(Rf, "getMeta");
function $u(t) {
  return new Set(qe(t.map(function(r) {
    return r.tags;
  })));
}
__name($u, "$u");
u($u, "getTagsFromConfiguration");
function qu(t, r) {
  if (t === r)
    return true;
  if (t === void 0 || r === void 0)
    return false;
  if (Te(t) || Te(r))
    return t === r;
  var e = Object.keys(t), n = Object.keys(r);
  return e.length === n.length && e.every(function(s) {
    return qu(t[s], r[s]);
  });
}
__name(qu, "qu");
u(qu, "stateValuesEqual");
function Df(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(Df, "Df");
u(Df, "isStateConfig");
function kf(t, r) {
  var e = t.exec, n = V(V({}, t), { exec: e !== void 0 ? function() {
    return e(r.context, r.event, { action: t, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(kf, "kf");
u(kf, "bindActionToState");
var Sr = function() {
  function t(r) {
    var e = this, n;
    this.actions = [], this.activities = ku, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || ku, this.meta = Rf(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return zf(e.configuration);
    } });
  }
  __name(t, "t");
  return u(t, "State"), t.from = function(r, e) {
    if (r instanceof t)
      return r.context !== e ? new t({ value: r.value, context: e, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = ln;
    return new t({ value: r, context: e, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, t.create = function(r) {
    return new t(r);
  }, t.inert = function(r, e) {
    if (r instanceof t) {
      if (!r.actions.length)
        return r;
      var n = ln;
      return new t({ value: r.value, context: e, _event: n, _sessionid: null, historyValue: r.historyValue, history: r.history, activities: r.activities, configuration: r.configuration, transitions: [], children: {} });
    }
    return t.from(r, e);
  }, t.prototype.toStrings = function(r, e) {
    var n = this;
    if (r === void 0 && (r = this.value), e === void 0 && (e = "."), Te(r))
      return [r];
    var s = Object.keys(r);
    return s.concat.apply(s, ke([], Ee(s.map(function(a) {
      return n.toStrings(r[a], e).map(function(p) {
        return a + e + p;
      });
    })), false));
  }, t.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var e = r.tags;
    r.machine;
    var n = Li(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(e) });
  }, t.prototype.matches = function(r) {
    return Bo(r, this.value);
  }, t.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, t.prototype.can = function(r) {
    var e;
    Ge && nt(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(s) {
      return s.target !== void 0 || s.actions.length;
    });
  }, t;
}();
var Qb = { deferEvents: false };
var Fu = function() {
  function t(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Qb), r);
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
var Uu = /* @__PURE__ */ new Map();
var ey = 0;
var Xi = { bookId: function() {
  return "x:".concat(ey++);
}, register: function(t, r) {
  return Uu.set(t, r), t;
}, get: function(t) {
  return Uu.get(t);
}, free: function(t) {
  Uu.delete(t);
} };
function Us() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  Ge || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name(Us, "Us");
u(Us, "getGlobal");
function ty() {
  var t = Us();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name(ty, "ty");
u(ty, "getDevTools");
function Nf(t) {
  if (Us()) {
    var r = ty();
    r && r.register(t);
  }
}
__name(Nf, "Nf");
u(Nf, "registerService");
function _f(t, r) {
  r === void 0 && (r = {});
  var e = t.initialState, n = /* @__PURE__ */ new Set(), s = [], a = false, p = u(function() {
    if (!a) {
      for (a = true; s.length > 0; ) {
        var d = s.shift();
        e = t.transition(e, d, m), n.forEach(function(f) {
          return f.next(e);
        });
      }
      a = false;
    }
  }, "flush"), v = Af({ id: r.id, send: function(d) {
    s.push(d), p();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(d, f, g) {
    var w = $i(d, f, g);
    return n.add(w), w.next(e), { unsubscribe: function() {
      n.delete(w);
    } };
  } }), m = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return e = t.start ? t.start(m) : e, v;
}
__name(_f, "_f");
u(_f, "spawnBehavior");
var ry = { sync: false, autoForward: false };
var lt;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(lt || (lt = {}));
var Lf = function() {
  function t(r, e) {
    e === void 0 && (e = t.defaultOptions);
    var n = this;
    this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = lt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(f, g) {
      if (sn(f))
        return n.batch(f), n.state;
      var w = st(Bi(f, g));
      if (n.status === lt.Stopped)
        return Ge || nt(false, 'Event "'.concat(w.name, '" was sent to stopped service "').concat(n.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(w.data))), n.state;
      if (n.status !== lt.Running && !n.options.deferEvents)
        throw new Error('Event "'.concat(w.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(w.data)));
      return n.scheduler.schedule(function() {
        n.forward(w);
        var S = n._nextState(w);
        n.update(S, w);
      }), n._state;
    }, this.sendTo = function(f, g, w) {
      var S = n.parent && (g === an.Parent || n.parent.id === g), T = S ? n.parent : Te(g) ? g === an.Internal ? n : n.children.get(g) || Xi.get(g) : mf(g) ? g : void 0;
      if (!T) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(g, "' from service '").concat(n.id, "'."));
        Ge || nt(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(f.type));
        return;
      }
      if ("machine" in T) {
        if (n.status !== lt.Stopped || n.parent !== T || n.state.done) {
          var C = V(V({}, f), { name: f.name === Du ? "".concat(si(n.id)) : f.name, origin: n.sessionId });
          !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, C]) : T.send(C);
        }
      } else
        !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, f.data]) : T.send(f.data);
    }, this._exec = function(f, g, w, S) {
      S === void 0 && (S = n.machine.options.actions);
      var T = f.exec || qs(f.type, S), C = Ae(T) ? T : T ? T.exec : f.exec;
      if (C)
        try {
          return C(g, w.data, n.machine.config.predictableActionArguments ? { action: f, _event: w } : { action: f, state: n.state, _event: w });
        } catch (oe) {
          throw n.parent && n.parent.send({ type: "xstate.error", data: oe }), oe;
        }
      switch (f.type) {
        case Rn: {
          var R = f;
          n.defer(R);
          break;
        }
        case ii:
          var _ = f;
          if (typeof _.delay == "number") {
            n.defer(_);
            return;
          } else
            _.to ? n.sendTo(_._event, _.to, w === ln) : n.send(_._event);
          break;
        case Ds:
          n.cancel(f.sendId);
          break;
        case Lo: {
          if (n.status !== lt.Running)
            return;
          var L = f.activity;
          if (!n.machine.config.predictableActionArguments && !n.state.activities[L.id || L.type])
            break;
          if (L.type === Ne.Invoke) {
            var $ = $s(L.src), I = n.machine.options.services ? n.machine.options.services[$.type] : void 0, ee = L.id, z = L.data;
            Ge || nt(!("forward" in L), "`forward` property is deprecated (found in invocation of '".concat(L.src, "' in in machine '").concat(n.machine.id, "'). ") + "Please use `autoForward` instead.");
            var H = "autoForward" in L ? L.autoForward : !!L.forward;
            if (!I) {
              Ge || nt(false, "No service found for invocation '".concat(L.src, "' in machine '").concat(n.machine.id, "'."));
              return;
            }
            var te = z ? oi(z, g, w) : void 0;
            if (typeof I == "string")
              return;
            var Q = Ae(I) ? I(g, w.data, { data: te, src: $, meta: L.meta }) : I;
            if (!Q)
              return;
            var ue = void 0;
            Hr(Q) && (Q = te ? Q.withContext(te) : Q, ue = { autoForward: H }), n.spawn(Q, ee, ue);
          } else
            n.spawnActivity(L);
          break;
        }
        case Gi: {
          n.stopChild(f.activity.id);
          break;
        }
        case ks:
          var K = f, ie = K.label, q = K.value;
          ie ? n.logger(ie, q) : n.logger(q);
          break;
        default:
          Ge || nt(false, "No implementation found for action type '".concat(f.type, "'"));
          break;
      }
    };
    var s = V(V({}, t.defaultOptions), e), a = s.clock, p = s.logger, v = s.parent, m = s.id, d = m !== void 0 ? m : r.id;
    this.id = d, this.logger = p, this.clock = a, this.parent = v, this.options = s, this.scheduler = new Fu({ deferEvents: this.options.deferEvents }), this.sessionId = Xi.bookId();
  }
  __name(t, "t");
  return u(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : Dn(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "state", { get: function() {
    return Ge || nt(this.status !== lt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), t.prototype.execute = function(r, e) {
    var n, s;
    try {
      for (var a = we(r.actions), p = a.next(); !p.done; p = a.next()) {
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
    var n, s, a, p, v, m, d, f, g = this;
    if (r._sessionid = this.sessionId, this._state = r, (!this.machine.config.predictableActionArguments || e === ln) && this.options.execute)
      this.execute(this.state);
    else
      for (var w = void 0; w = this._outgoingQueue.shift(); )
        w[0].send(w[1]);
    if (this.children.forEach(function(Q) {
      g.state.children[Q.id] = Q;
    }), this.devTools && this.devTools.send(e.data, r), r.event)
      try {
        for (var S = we(this.eventListeners), T = S.next(); !T.done; T = S.next()) {
          var C = T.value;
          C(r.event);
        }
      } catch (Q) {
        n = { error: Q };
      } finally {
        try {
          T && !T.done && (s = S.return) && s.call(S);
        } finally {
          if (n)
            throw n.error;
        }
      }
    try {
      for (var R = we(this.listeners), _ = R.next(); !_.done; _ = R.next()) {
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
      for (var L = we(this.contextListeners), $ = L.next(); !$.done; $ = L.next()) {
        var I = $.value;
        I(this.state.context, this.state.history ? this.state.history.context : void 0);
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
        return Q.type === "final" && Q.parent === g.machine;
      }), z = ee && ee.doneData ? oi(ee.doneData, r.context, e) : void 0;
      this._doneEvent = Ui(this.id, z);
      try {
        for (var H = we(this.doneListeners), te = H.next(); !te.done; te = H.next()) {
          var C = te.value;
          C(this._doneEvent);
        }
      } catch (Q) {
        d = { error: Q };
      } finally {
        try {
          te && !te.done && (f = H.return) && f.call(H);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this._stop(), this._stopChildren(), Xi.free(this.sessionId);
    }
  }, t.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === lt.Running && r(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(r, e, n) {
    var s = this, a = $i(r, e, n);
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
    this.machine._init(), Xi.register(this.sessionId, this), this.initialized = true, this.status = lt.Running;
    var n = r === void 0 ? this.initialState : Dn(this, function() {
      return Df(r) ? e.machine.resolveState(r) : e.machine.resolveState(Sr.from(r, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(n, ln);
    }), this;
  }, t.prototype._stopChildren = function() {
    this.children.forEach(function(r) {
      Ae(r.stop) && r.stop();
    }), this.children.clear();
  }, t.prototype._stop = function() {
    var r, e, n, s, a, p, v, m, d, f;
    try {
      for (var g = we(this.listeners), w = g.next(); !w.done; w = g.next()) {
        var S = w.value;
        this.listeners.delete(S);
      }
    } catch (H) {
      r = { error: H };
    } finally {
      try {
        w && !w.done && (e = g.return) && e.call(g);
      } finally {
        if (r)
          throw r.error;
      }
    }
    try {
      for (var T = we(this.stopListeners), C = T.next(); !C.done; C = T.next()) {
        var S = C.value;
        S(), this.stopListeners.delete(S);
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
      for (var R = we(this.contextListeners), _ = R.next(); !_.done; _ = R.next()) {
        var S = _.value;
        this.contextListeners.delete(S);
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
      for (var L = we(this.doneListeners), $ = L.next(); !$.done; $ = L.next()) {
        var S = $.value;
        this.doneListeners.delete(S);
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
      for (var I = we(Object.keys(this.delayedEventsMap)), ee = I.next(); !ee.done; ee = I.next()) {
        var z = ee.value;
        this.clock.clearTimeout(this.delayedEventsMap[z]);
      }
    } catch (H) {
      d = { error: H };
    } finally {
      try {
        ee && !ee.done && (f = I.return) && f.call(I);
      } finally {
        if (d)
          throw d.error;
      }
    }
    this.scheduler.clear(), this.scheduler = new Fu({ deferEvents: this.options.deferEvents });
  }, t.prototype.stop = function() {
    var r = this, e = this.scheduler;
    return this._stop(), e.schedule(function() {
      var n = st({ type: "xstate.stop" }), s = Dn(r, function() {
        var a = qe(ke([], Ee(r.state.configuration), false).sort(function(f, g) {
          return g.order - f.order;
        }).map(function(f) {
          return Br(f.onExit, r.machine.options.actions);
        })), p = Ee(qi(r.machine, r.state, r.state.context, n, [{ type: "exit", actions: a }], r.machine.config.predictableActionArguments ? r._exec : void 0, r.machine.config.predictableActionArguments || r.machine.config.preserveActionOrder), 2), v = p[0], m = p[1], d = new Sr({ value: r.state.value, context: m, _event: n, _sessionid: r.sessionId, historyValue: void 0, history: r.state, actions: v.filter(function(f) {
          return !Fo(f);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: r.state.done, tags: r.state.tags, machine: r.machine });
        return d.changed = true, d;
      });
      r.update(s, n), r._stopChildren(), Xi.free(r.sessionId);
    }), this;
  }, t.prototype.batch = function(r) {
    var e = this;
    if (this.status === lt.NotStarted && this.options.deferEvents)
      Ge || nt(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== lt.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (r.length) {
      var n = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var s, a, p = e.state, v = false, m = [], d = u(function(S) {
          var T = st(S);
          e.forward(T), p = Dn(e, function() {
            return e.machine.transition(p, T, void 0, n || void 0);
          }), m.push.apply(m, ke([], Ee(e.machine.config.predictableActionArguments ? p.actions : p.actions.map(function(C) {
            return kf(C, p);
          })), false)), v = v || !!p.changed;
        }, "_loop_1");
        try {
          for (var f = we(r), g = f.next(); !g.done; g = f.next()) {
            var w = g.value;
            d(w);
          }
        } catch (S) {
          s = { error: S };
        } finally {
          try {
            g && !g.done && (a = f.return) && a.call(f);
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
    if (s.name.indexOf(Ru) === 0 && !this.state.nextEvents.some(function(p) {
      return p.indexOf(Ru) === 0;
    }))
      throw s.data.data;
    var a = Dn(this, function() {
      return n.machine.transition(n.state, s, void 0, e || void 0);
    });
    return a;
  }, t.prototype.nextState = function(r) {
    return this._nextState(r, false);
  }, t.prototype.forward = function(r) {
    var e, n;
    try {
      for (var s = we(this.forwardTo), a = s.next(); !a.done; a = s.next()) {
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
      return Gu(r, e);
    if (_u(r))
      return this.spawnPromise(Promise.resolve(r), e);
    if (Ae(r))
      return this.spawnCallback(r, e);
    if (Mf(r))
      return this.spawnActor(r, e);
    if (hf(r))
      return this.spawnObservable(r, e);
    if (Hr(r))
      return this.spawnMachine(r, V(V({}, n), { id: e }));
    if (cf(r))
      return this.spawnBehavior(r, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof r, '".'));
  }, t.prototype.spawnMachine = function(r, e) {
    var n = this;
    e === void 0 && (e = {});
    var s = new t(r, V(V({}, this.options), { parent: this, id: e.id || r.id })), a = V(V({}, ry), e);
    a.sync && s.onTransition(function(v) {
      n.send(jo, { state: v, id: s.id });
    });
    var p = s;
    return this.children.set(s.id, p), a.autoForward && this.forwardTo.add(s.id), s.onDone(function(v) {
      n.removeChild(s.id), n.send(st(v, { origin: s.id }));
    }).start(), p;
  }, t.prototype.spawnBehavior = function(r, e) {
    var n = _f(r, { id: e, parent: this });
    return this.children.set(e, n), n;
  }, t.prototype.spawnPromise = function(r, e) {
    var n, s = this, a = false, p;
    r.then(function(m) {
      a || (p = m, s.removeChild(e), s.send(st(Ui(e, m), { origin: e })));
    }, function(m) {
      if (!a) {
        s.removeChild(e);
        var d = si(e, m);
        try {
          s.send(st(d, { origin: e }));
        } catch (f) {
          gf(m, f, e), s.devTools && s.devTools.send(d, s.state), s.machine.strict && s.stop();
        }
      }
    });
    var v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      var g = $i(m, d, f), w = false;
      return r.then(function(S) {
        w || (g.next(S), !w && g.complete());
      }, function(S) {
        w || g.error(S);
      }), { unsubscribe: function() {
        return w = true;
      } };
    }, stop: function() {
      a = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return p;
    } }, n[jr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnCallback = function(r, e) {
    var n, s = this, a = false, p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m, d = u(function(w) {
      m = w, v.forEach(function(S) {
        return S(w);
      }), !a && s.send(st(w, { origin: e }));
    }, "receive"), f;
    try {
      f = r(d, function(w) {
        p.add(w);
      });
    } catch (w) {
      this.send(si(e, w));
    }
    if (_u(f))
      return this.spawnPromise(f, e);
    var g = (n = { id: e, send: function(w) {
      return p.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = $i(w);
      return v.add(S.next), { unsubscribe: function() {
        v.delete(S.next);
      } };
    }, stop: function() {
      a = true, Ae(f) && f();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return m;
    } }, n[jr] = function() {
      return this;
    }, n);
    return this.children.set(e, g), g;
  }, t.prototype.spawnObservable = function(r, e) {
    var n, s = this, a, p = r.subscribe(function(m) {
      a = m, s.send(st(m, { origin: e }));
    }, function(m) {
      s.removeChild(e), s.send(st(si(e, m), { origin: e }));
    }, function() {
      s.removeChild(e), s.send(st(Ui(e), { origin: e }));
    }), v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      return r.subscribe(m, d, f);
    }, stop: function() {
      return p.unsubscribe();
    }, getSnapshot: function() {
      return a;
    }, toJSON: function() {
      return { id: e };
    } }, n[jr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnActor = function(r, e) {
    return this.children.set(e, r), r;
  }, t.prototype.spawnActivity = function(r) {
    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[r.type] : void 0;
    if (!e) {
      Ge || nt(false, "No implementation found for activity '".concat(r.type, "'"));
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
    } }, n[jr] = function() {
      return this;
    }, n));
  }, t.prototype.attachDev = function() {
    var r = Us();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, e), { features: V({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Nf(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[jr] = function() {
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
  var e = new Lf(t, r);
  return e;
}
__name(ut, "ut");
u(ut, "interpret");
function ny(t) {
  if (typeof t == "string") {
    var r = { type: t };
    return r.toString = function() {
      return t;
    }, r;
  }
  return t;
}
__name(ny, "ny");
u(ny, "toInvokeSource");
function Yo(t) {
  return V(V({ type: Go }, t), { toJSON: function() {
    t.onDone, t.onError;
    var r = Li(t, ["onDone", "onError"]);
    return V(V({}, r), { type: Go, src: ny(t.src) });
  } });
}
__name(Yo, "Yo");
u(Yo, "toInvokeDefinition");
var Ji = "";
var Wu = "#";
var Xo = "*";
var Zi = {};
var Ki = u(function(t) {
  return t[0] === Wu;
}, "isStateId");
var iy = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var oy = u(function(t, r, e) {
  var n = e.slice(0, -1).some(function(a) {
    return !("cond" in a) && !("in" in a) && (Te(a.target) || Hr(a.target));
  }), s = r === Ji ? "the transient event" : "event '".concat(r, "'");
  nt(!n, "One or more transitions for ".concat(s, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Gf = function() {
  function t(r, e, n, s) {
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var a = this, p;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(iy(), e), this.parent = s == null ? void 0 : s.parent, this.key = this.config.key || (s == null ? void 0 : s.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : Ns), this.id = this.config.id || ke([this.machine.key], Ee(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (p = this.config.schema) !== null && p !== void 0 ? p : {}, this.description = this.config.description, Ge || nt(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? Hi(this.config.states, function(d, f) {
      var g, w = new t(d, {}, void 0, { parent: a, key: f });
      return Object.assign(a.idMap, V((g = {}, g[w.id] = w, g), w.idMap)), w;
    }) : Zi;
    var v = 0;
    function m(d) {
      var f, g;
      d.order = v++;
      try {
        for (var w = we(Hu(d)), S = w.next(); !S.done; S = w.next()) {
          var T = S.value;
          m(T);
        }
      } catch (C) {
        f = { error: C };
      } finally {
        try {
          S && !S.done && (g = w.return) && g.call(w);
        } finally {
          if (f)
            throw f.error;
        }
      }
    }
    __name(m, "m");
    u(m, "dfs"), m(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var f = d.event;
      return f === Ji;
    }) : Ji in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = cr(this.config.entry || this.config.onEntry).map(function(d) {
      return Fi(d);
    }), this.onExit = cr(this.config.exit || this.config.onExit).map(function(d) {
      return Fi(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = cr(this.config.invoke).map(function(d, f) {
      var g, w;
      if (Hr(d)) {
        var S = qo(a.id, f);
        return a.machine.options.services = V((g = {}, g[S] = d, g), a.machine.options.services), Yo({ src: S, id: S });
      } else if (Te(d.src)) {
        var S = d.id || qo(a.id, f);
        return Yo(V(V({}, d), { id: S, src: d.src }));
      } else if (Hr(d.src) || Ae(d.src)) {
        var S = d.id || qo(a.id, f);
        return a.machine.options.services = V((w = {}, w[S] = d.src, w), a.machine.options.services), Yo(V(V({ id: S }, d), { src: S }));
      } else {
        var T = d.src;
        return Yo(V(V({ id: qo(a.id, f) }, d), { src: T }));
      }
    }), this.activities = cr(this.config.activities).concat(this.invoke).map(function(d) {
      return Fs(d);
    }), this.transition = this.transition.bind(this), this.tags = cr(this.config.tags);
  }
  __name(t, "t");
  return u(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Bu(this).forEach(function(r) {
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
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: Hi(this.states, function(r) {
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
    var e = r === Ji, n = this.transitions.filter(function(s) {
      var a = s.eventType === r;
      return e ? a : a || s.eventType === Xo;
    });
    return this.__cache.candidates[r] = n, n;
  }, t.prototype.getDelayedTransitions = function() {
    var r = this, e = this.config.after;
    if (!e)
      return [];
    var n = u(function(a, p) {
      var v = Ae(a) ? "".concat(r.id, ":delay[").concat(p, "]") : a, m = Sf(v, r.id);
      return r.onEntry.push(yf(m, { delay: a })), r.onExit.push(wf(m)), m;
    }, "mutateEntryExit"), s = sn(e) ? e.map(function(a, p) {
      var v = n(a.delay, p);
      return V(V({}, a), { event: v });
    }) : qe(Object.keys(e).map(function(a, p) {
      var v = e[a], m = Te(v) ? { target: v } : v, d = isNaN(+a) ? a : +a, f = n(d, p);
      return cr(m).map(function(g) {
        return V(V({}, g), { event: f, delay: d });
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
    var s = r instanceof Sr ? r.value : ji(r, this.delimiter);
    if (Te(s)) {
      var a = this.getStateNode(s).initial;
      return a !== void 0 ? this.getStateNodes((e = {}, e[s] = a, e)) : [this, this.states[s]];
    }
    var p = Object.keys(s), v = [this];
    return v.push.apply(v, ke([], Ee(qe(p.map(function(m) {
      return n.getStateNode(m).getStateNodes(s[m]);
    }))), false)), v;
  }, t.prototype.handles = function(r) {
    var e = Gs(r);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(r) {
    var e = r instanceof Sr ? r : Sr.create(r), n = Array.from(Vi([], this.getStateNodes(e.value)));
    return new Sr(V(V({}, e), { value: this.resolve(e.value), configuration: n, done: Vo(n, this), tags: $u(n), machine: this.machine }));
  }, t.prototype.transitionLeafNode = function(r, e, n) {
    var s = this.getStateNode(r), a = s.next(e, n);
    return !a || !a.transitions.length ? this.next(e, n) : a;
  }, t.prototype.transitionCompoundNode = function(r, e, n) {
    var s = Object.keys(r), a = this.getStateNode(s[0]), p = a._transition(r[s[0]], e, n);
    return !p || !p.transitions.length ? this.next(e, n) : p;
  }, t.prototype.transitionParallelNode = function(r, e, n) {
    var s, a, p = {};
    try {
      for (var v = we(Object.keys(r)), m = v.next(); !m.done; m = v.next()) {
        var d = m.value, f = r[d];
        if (f) {
          var g = this.getStateNode(d), w = g._transition(f, e, n);
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
    var S = Object.keys(p).map(function(_) {
      return p[_];
    }), T = qe(S.map(function(_) {
      return _.transitions;
    })), C = S.some(function(_) {
      return _.transitions.length > 0;
    });
    if (!C)
      return this.next(e, n);
    var R = qe(Object.keys(p).map(function(_) {
      return p[_].configuration;
    }));
    return { transitions: T, exitSet: qe(S.map(function(_) {
      return _.exitSet;
    })), configuration: R, source: e, actions: qe(Object.keys(p).map(function(_) {
      return p[_].actions;
    })) };
  }, t.prototype._transition = function(r, e, n) {
    return Te(r) ? this.transitionLeafNode(r, e, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, e, n) : this.transitionParallelNode(r, e, n);
  }, t.prototype.getTransitionData = function(r, e) {
    return this._transition(r.value, r, st(e));
  }, t.prototype.next = function(r, e) {
    var n, s, a = this, p = e.name, v = [], m = [], d;
    try {
      for (var f = we(this.getCandidates(p)), g = f.next(); !g.done; g = f.next()) {
        var w = g.value, S = w.cond, T = w.in, C = r.context, R = T ? Te(T) && Ki(T) ? r.matches(ji(this.getStateNodeById(T).path, this.delimiter)) : Bo(ji(T, this.delimiter), af(this.path.slice(0, -2))(r.value)) : true, _ = false;
        try {
          _ = !S || Bs(this.machine, S, C, e, r);
        } catch (I) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(p, "' in state node '").concat(this.id, `':
`).concat(I.message));
        }
        if (_ && R) {
          w.target !== void 0 && (m = w.target), v.push.apply(v, ke([], Ee(w.actions), false)), d = w;
          break;
        }
      }
    } catch (I) {
      n = { error: I };
    } finally {
      try {
        g && !g.done && (s = f.return) && s.call(f);
      } finally {
        if (n)
          throw n.error;
      }
    }
    if (d) {
      if (!m.length)
        return { transitions: [d], exitSet: [], configuration: r.value ? [this] : [], source: r, actions: v };
      var L = qe(m.map(function(I) {
        return a.getRelativeStateNodes(I, r.historyValue);
      })), $ = !!d.internal;
      return { transitions: [d], exitSet: $ ? [] : qe(m.map(function(I) {
        return a.getPotentiallyReenteringNodes(I);
      })), configuration: L, source: r, actions: v };
    }
  }, t.prototype.getPotentiallyReenteringNodes = function(r) {
    if (this.order < r.order)
      return [this];
    for (var e = [], n = this, s = r; n && n !== s; )
      e.push(n), n = n.parent;
    return n !== s ? [] : (e.push(s), e);
  }, t.prototype.getActions = function(r, e, n, s, a, p, v) {
    var m, d, f, g, w = this, S = p ? Vi([], this.getStateNodes(p.value)) : [], T = /* @__PURE__ */ new Set();
    try {
      for (var C = we(Array.from(r).sort(function(K, ie) {
        return K.order - ie.order;
      })), R = C.next(); !R.done; R = C.next()) {
        var _ = R.value;
        (!Yi(S, _) || Yi(n.exitSet, _) || _.parent && T.has(_.parent)) && T.add(_);
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
      for (var L = we(S), $ = L.next(); !$.done; $ = L.next()) {
        var _ = $.value;
        (!Yi(r, _) || Yi(n.exitSet, _.parent)) && n.exitSet.push(_);
      }
    } catch (K) {
      f = { error: K };
    } finally {
      try {
        $ && !$.done && (g = L.return) && g.call(L);
      } finally {
        if (f)
          throw f.error;
      }
    }
    n.exitSet.sort(function(K, ie) {
      return ie.order - K.order;
    });
    var I = Array.from(T).sort(function(K, ie) {
      return K.order - ie.order;
    }), ee = new Set(n.exitSet), z = qe(I.map(function(K) {
      var ie = [];
      if (K.type !== "final")
        return ie;
      var q = K.parent;
      if (!q.parent)
        return ie;
      ie.push(Uo(K.id, K.doneData), Uo(q.id, K.doneData ? oi(K.doneData, s, a) : void 0));
      var oe = q.parent;
      return oe.type === "parallel" && Wi(oe).every(function(tt) {
        return Vo(n.configuration, tt);
      }) && ie.push(Uo(oe.id)), ie;
    })), H = I.map(function(K) {
      var ie = K.onEntry, q = K.activities.map(function(oe) {
        return xf(oe);
      });
      return { type: "entry", actions: Br(v ? ke(ke([], Ee(ie), false), Ee(q), false) : ke(ke([], Ee(q), false), Ee(ie), false), w.machine.options.actions) };
    }).concat({ type: "state_done", actions: z.map(function(K) {
      return bf(K);
    }) }), te = Array.from(ee).map(function(K) {
      return { type: "exit", actions: Br(ke(ke([], Ee(K.onExit), false), Ee(K.activities.map(function(ie) {
        return Ef(ie);
      })), false), w.machine.options.actions) };
    }), Q = te.concat({ type: "transition", actions: Br(n.actions, this.machine.options.actions) }).concat(H);
    if (e) {
      var ue = Br(qe(ke([], Ee(r), false).sort(function(K, ie) {
        return ie.order - K.order;
      }).map(function(K) {
        return K.onExit;
      })), this.machine.options.actions).filter(function(K) {
        return !Fo(K);
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
      var v = Te(r) ? this.resolve(Ho(this.getResolvedPath(r))) : this.resolve(r), m = n != null ? n : this.machine.context;
      p = this.resolveState(Sr.from(v, m));
    }
    if (!Ge && a.name === Xo)
      throw new Error("An event cannot have the wildcard type ('".concat(Xo, "')"));
    if (this.strict && !this.events.includes(a.name) && !uf(a.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
    var d = this._transition(p.value, p, a) || { transitions: [], configuration: [], exitSet: [], source: p, actions: [] }, f = Vi([], this.getStateNodes(p.value)), g = d.configuration.length ? Vi(f, d.configuration) : f;
    return d.configuration = ke([], Ee(g), false), this.resolveTransition(d, p, p.context, s, a);
  }, t.prototype.resolveRaisedTransition = function(r, e, n, s) {
    var a, p = r.actions;
    return r = this.transition(r, e, void 0, s), r._event = n, r.event = n.data, (a = r.actions).unshift.apply(a, ke([], Ee(p), false)), r;
  }, t.prototype.resolveTransition = function(r, e, n, s, a) {
    var p, v, m, d, f = this;
    a === void 0 && (a = ln);
    var g = r.configuration, w = !e || r.transitions.length > 0, S = w ? r.configuration : e ? e.configuration : [], T = Vo(S, this), C = w ? Pf(this.machine, g) : void 0, R = e ? e.historyValue ? e.historyValue : r.source ? this.machine.historyValue(e.value) : void 0 : void 0, _ = this.getActions(new Set(S), T, r, n, a, e, s), L = e ? V({}, e.activities) : {};
    try {
      for (var $ = we(_), I = $.next(); !I.done; I = $.next()) {
        var ee = I.value;
        try {
          for (var z = (m = void 0, we(ee.actions)), H = z.next(); !H.done; H = z.next()) {
            var te = H.value;
            te.type === Lo ? L[te.activity.id || te.activity.type] = te : te.type === Gi && (L[te.activity.id || te.activity.type] = false);
          }
        } catch (je) {
          m = { error: je };
        } finally {
          try {
            H && !H.done && (d = z.return) && d.call(z);
          } finally {
            if (m)
              throw m.error;
          }
        }
      }
    } catch (je) {
      p = { error: je };
    } finally {
      try {
        I && !I.done && (v = $.return) && v.call($);
      } finally {
        if (p)
          throw p.error;
      }
    }
    var Q = Ee(qi(this, e, n, a, _, s, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), ue = Q[0], K = Q[1], ie = Ee(pf(ue, Fo), 2), q = ie[0], oe = ie[1], tt = ue.filter(function(je) {
      var rt;
      return je.type === Lo && ((rt = je.activity) === null || rt === void 0 ? void 0 : rt.type) === Go;
    }), Ze = tt.reduce(function(je, rt) {
      return je[rt.activity.id] = Of(rt.activity, f.machine, K, a), je;
    }, e ? V({}, e.children) : {}), ze = new Sr({ value: C || e.value, context: K, _event: a, _sessionid: e ? e._sessionid : null, historyValue: C ? R ? ff(R, C) : void 0 : e ? e.historyValue : void 0, history: !C || r.source ? e : void 0, actions: C ? oe : [], activities: C ? L : e ? e.activities : {}, events: [], configuration: S, transitions: r.transitions, children: Ze, done: T, tags: $u(S), machine: this }), Ie = n !== K;
    ze.changed = a.name === jo || Ie;
    var We = ze.history;
    We && delete We.history;
    var Je = !T && (this._transient || g.some(function(je) {
      return je._transient;
    }));
    if (!w && (!Je || a.name === Ji))
      return ze;
    var Ye = ze;
    if (!T)
      for (Je && (Ye = this.resolveRaisedTransition(Ye, { type: ef }, a, s)); q.length; ) {
        var J = q.shift();
        Ye = this.resolveRaisedTransition(Ye, J._event, a, s);
      }
    var ar = Ye.changed || (We ? !!Ye.actions.length || Ie || typeof We.value != typeof Ye.value || !qu(Ye.value, We.value) : void 0);
    return Ye.changed = ar, Ye.history = We, Ye;
  }, t.prototype.getStateNode = function(r) {
    if (Ki(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[r];
    if (!e)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, t.prototype.getStateNodeById = function(r) {
    var e = Ki(r) ? r.slice(Wu.length) : r;
    if (e === this.id)
      return this;
    var n = this.machine.idMap[e];
    if (!n)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, t.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && Ki(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (a) {
      }
    for (var e = js(r, this.delimiter).slice(), n = this; e.length; ) {
      var s = e.shift();
      if (!s.length)
        break;
      n = n.getStateNode(s);
    }
    return n;
  }, t.prototype.resolve = function(r) {
    var e, n = this;
    if (!r)
      return this.initialStateValue || Zi;
    switch (this.type) {
      case "parallel":
        return Hi(this.initialStateValue, function(a, p) {
          return a ? n.getStateNode(p).resolve(r[p] || a) : Zi;
        });
      case "compound":
        if (Te(r)) {
          var s = this.getStateNode(r);
          return s.type === "parallel" || s.type === "compound" ? (e = {}, e[r] = s.initialStateValue, e) : r;
        }
        return Object.keys(r).length ? Hi(r, function(a, p) {
          return a ? n.getStateNode(p).resolve(a) : Zi;
        }) : this.initialStateValue || {};
      default:
        return r || Zi;
    }
  }, t.prototype.getResolvedPath = function(r) {
    if (Ki(r)) {
      var e = this.machine.idMap[r.slice(Wu.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return e.path;
    }
    return js(r, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = Nu(this.states, function(n) {
        return n.initialStateValue || Zi;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = Wo(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
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
      Te(e.target) ? r = Ki(e.target) ? Ho(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : r = e.target;
    }
    return r;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(r, e, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(e) : r.initialStateNodes : [r];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (Wo(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Ge || nt(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = $o(this.initialStateValue);
    return qe(e.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), t.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var e = Ee(r), n = e[0], s = e.slice(1);
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
      return { current: r || this.initialStateValue, states: Nu(this.states, function(e, n) {
        if (!r)
          return e.historyValue();
        var s = Te(r) ? void 0 : r[n];
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
      return s ? qe($o(s).map(function(p) {
        return n.getFromRelativePath(p);
      })) : n.initialStateNodes;
    }
    var a = sf(n.path, "states")(r).current;
    return Te(a) ? [n.getStateNode(a)] : qe($o(a).map(function(p) {
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
        for (var v = we(Object.keys(a)), m = v.next(); !m.done; m = v.next()) {
          var d = m.value, f = a[d];
          if (f.states)
            try {
              for (var g = (n = void 0, we(f.events)), w = g.next(); !w.done; w = g.next()) {
                var S = w.value;
                p.add("".concat(S));
              }
            } catch (T) {
              n = { error: T };
            } finally {
              try {
                w && !w.done && (s = g.return) && s.call(g);
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
        if (!Te(n))
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
    var e = this, n = vf(r.target), s = "internal" in r ? r.internal : n ? n.some(function(m) {
      return Te(m) && m[0] === e.delimiter;
    }) : true, a = this.machine.options.guards, p = this.resolveTarget(n), v = V(V({}, r), { actions: Br(cr(r.actions)), cond: Hs(r.cond, a), target: p, source: this, internal: s, eventType: r.event, toJSON: function() {
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
      var a = this.config.on, p = Xo, v = a[p], m = v === void 0 ? [] : v, d = Li(a, [typeof p == "symbol" ? p : p + ""]);
      s = qe(Object.keys(d).map(function(L) {
        !Ge && L === Ji && nt(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var $ = ai(L, d[L]);
        return Ge || oy(n, L, $), $;
      }).concat(ai(Xo, m)));
    }
    var f = this.config.always ? ai("", this.config.always) : [], g = this.config.onDone ? ai(String(Uo(this.id)), this.config.onDone) : [];
    Ge || nt(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = qe(this.invoke.map(function(L) {
      var $ = [];
      return L.onDone && $.push.apply($, ke([], Ee(ai(String(Ui(L.id)), L.onDone)), false)), L.onError && $.push.apply($, ke([], Ee(ai(String(si(L.id)), L.onError)), false)), $;
    })), S = this.after, T = qe(ke(ke(ke(ke([], Ee(g), false), Ee(w), false), Ee(s), false), Ee(f), false).map(function(L) {
      return cr(L).map(function($) {
        return n.formatTransition($);
      });
    }));
    try {
      for (var C = we(S), R = C.next(); !R.done; R = C.next()) {
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
var jf = false;
function ht(t, r) {
  return !Ge && !("predictableActionArguments" in t) && !jf && (jf = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new Gf(t, r);
}
__name(ht, "ht");
u(ht, "createMachine");
var Bf = jt(on(), 1);
var Ko = jt(Zo(), 1);
var Vs = u((t) => t != null && typeof t.draggable == "boolean", "isDraggable");
var Ws = u((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Yu = u((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
      this.draggableMachine = ht({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        fe("draggable:init", {}, this);
      }, setInteract: (a, p) => {
        B.need(p.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let v = (0, Ko.default)(this);
        v.styleCursor(false), v.pointerEvents({ ignoreFrom: ".resize-handle" }), v.on("down", this.grab.bind(this)), v.on("up", this.release.bind(this)), v.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let m = this.dropzone;
        Ws(m) ? this.snappedDropzone = m : this.snappedDropzone = null;
      }, grab: (a, p) => {
        B.need(p.type === "GRAB", "event type must be GRAB"), p.type === "GRAB" && (this.grabbed = true, fe("draggable:grab", {}, this), Yu(this.dropzone) && (this.snapped = false, this.moveByOffset(p.x, p.y), this.classList.remove("qpu-operation-xl")));
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
        (0, Ko.default)(this).unset(), fe("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => Ws(this.dropzone), isOnPaletteDropzone: () => Yu(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Ws(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = ut(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${(0, Bf.format)(a.value)}`);
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
      return B.notNull(a), !Yu(a) && !Ws(a) ? null : a;
    }
    set snapTargets(a) {
      (0, Ko.default)(this).draggable({ modifiers: [Ko.default.modifiers.snap({ targets: a, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
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
  u(e, "DraggableMixinClass"), M([k], e.prototype, "operationX", 2), M([k], e.prototype, "operationY", 2), M([k], e.prototype, "grabbed", 2), M([k], e.prototype, "dragging", 2), M([k], e.prototype, "snapped", 2), M([k], e.prototype, "bit", 2), M([k], e.prototype, "debugDraggable", 2);
  let r = e;
  return r;
}
__name(me, "me");
u(me, "DraggableMixin");
var li = u((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function $f(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  };
  u(e, "FlaggableMixinClass"), M([k], e.prototype, "flag", 2);
  let r = e;
  return r;
}
__name($f, "$f");
u($f, "FlaggableMixin");
var Qe = "top";
var mt = "bottom";
var ct = "right";
var it = "left";
var Ys = "auto";
var kn = [Qe, mt, ct, it];
var un = "start";
var ui = "end";
var qf = "clippingParents";
var Xs = "viewport";
var Qi = "popper";
var Ff = "reference";
var Xu = kn.reduce(function(t, r) {
  return t.concat([r + "-" + un, r + "-" + ui]);
}, []);
var Zs = [].concat(kn, [Ys]).reduce(function(t, r) {
  return t.concat([r, r + "-" + un, r + "-" + ui]);
}, []);
var ay = "beforeRead";
var sy = "read";
var ly = "afterRead";
var uy = "beforeMain";
var cy = "main";
var py = "afterMain";
var dy = "beforeWrite";
var fy = "write";
var hy = "afterWrite";
var Uf = [ay, sy, ly, uy, cy, py, dy, fy, hy];
function bt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
__name(bt, "bt");
u(bt, "getNodeName");
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
function $r(t) {
  var r = ot(t).Element;
  return t instanceof r || t instanceof Element;
}
__name($r, "$r");
u($r, "isElement");
function vt(t) {
  var r = ot(t).HTMLElement;
  return t instanceof r || t instanceof HTMLElement;
}
__name(vt, "vt");
u(vt, "isHTMLElement");
function Ks(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = ot(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
__name(Ks, "Ks");
u(Ks, "isShadowRoot");
function my(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function(e) {
    var n = r.styles[e] || {}, s = r.attributes[e] || {}, a = r.elements[e];
    !vt(a) || !bt(a) || (Object.assign(a.style, n), Object.keys(s).forEach(function(p) {
      var v = s[p];
      v === false ? a.removeAttribute(p) : a.setAttribute(p, v === true ? "" : v);
    }));
  });
}
__name(my, "my");
u(my, "applyStyles");
function vy(t) {
  var r = t.state, e = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, e.popper), r.styles = e, r.elements.arrow && Object.assign(r.elements.arrow.style, e.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var s = r.elements[n], a = r.attributes[n] || {}, p = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : e[n]), v = p.reduce(function(m, d) {
        return m[d] = "", m;
      }, {});
      !vt(s) || !bt(s) || (Object.assign(s.style, v), Object.keys(a).forEach(function(m) {
        s.removeAttribute(m);
      }));
    });
  };
}
__name(vy, "vy");
u(vy, "effect");
var Jo = { name: "applyStyles", enabled: true, phase: "write", fn: my, effect: vy, requires: ["computeStyles"] };
function yt(t) {
  return t.split("-")[0];
}
__name(yt, "yt");
u(yt, "getBasePlacement");
var Pr = Math.max;
var ci = Math.min;
var cn = Math.round;
function Tr(t, r) {
  r === void 0 && (r = false);
  var e = t.getBoundingClientRect(), n = 1, s = 1;
  if (vt(t) && r) {
    var a = t.offsetHeight, p = t.offsetWidth;
    p > 0 && (n = cn(e.width) / p || 1), a > 0 && (s = cn(e.height) / a || 1);
  }
  return { width: e.width / n, height: e.height / s, top: e.top / s, right: e.right / n, bottom: e.bottom / s, left: e.left / n, x: e.left / n, y: e.top / s };
}
__name(Tr, "Tr");
u(Tr, "getBoundingClientRect");
function pi(t) {
  var r = Tr(t), e = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(r.width - e) <= 1 && (e = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: n };
}
__name(pi, "pi");
u(pi, "getLayoutRect");
function Qo(t, r) {
  var e = r.getRootNode && r.getRootNode();
  if (t.contains(r))
    return true;
  if (e && Ks(e)) {
    var n = r;
    do {
      if (n && t.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name(Qo, "Qo");
u(Qo, "contains");
function Ht(t) {
  return ot(t).getComputedStyle(t);
}
__name(Ht, "Ht");
u(Ht, "getComputedStyle");
function Zu(t) {
  return ["table", "td", "th"].indexOf(bt(t)) >= 0;
}
__name(Zu, "Zu");
u(Zu, "isTableElement");
function Ct(t) {
  return (($r(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(Ct, "Ct");
u(Ct, "getDocumentElement");
function pn(t) {
  return bt(t) === "html" ? t : t.assignedSlot || t.parentNode || (Ks(t) ? t.host : null) || Ct(t);
}
__name(pn, "pn");
u(pn, "getParentNode");
function Wf(t) {
  return !vt(t) || Ht(t).position === "fixed" ? null : t.offsetParent;
}
__name(Wf, "Wf");
u(Wf, "getTrueOffsetParent");
function gy(t) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && vt(t)) {
    var n = Ht(t);
    if (n.position === "fixed")
      return null;
  }
  for (var s = pn(t); vt(s) && ["html", "body"].indexOf(bt(s)) < 0; ) {
    var a = Ht(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || r && a.willChange === "filter" || r && a.filter && a.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
__name(gy, "gy");
u(gy, "getContainingBlock");
function zr(t) {
  for (var r = ot(t), e = Wf(t); e && Zu(e) && Ht(e).position === "static"; )
    e = Wf(e);
  return e && (bt(e) === "html" || bt(e) === "body" && Ht(e).position === "static") ? r : e || gy(t) || r;
}
__name(zr, "zr");
u(zr, "getOffsetParent");
function di(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
__name(di, "di");
u(di, "getMainAxisFromPlacement");
function fi(t, r, e) {
  return Pr(t, ci(r, e));
}
__name(fi, "fi");
u(fi, "within");
function Vf(t, r, e) {
  var n = fi(t, r, e);
  return n > e ? e : n;
}
__name(Vf, "Vf");
u(Vf, "withinMaxClamp");
function ea() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(ea, "ea");
u(ea, "getFreshSideObject");
function ta(t) {
  return Object.assign({}, ea(), t);
}
__name(ta, "ta");
u(ta, "mergePaddingObject");
function ra(t, r) {
  return r.reduce(function(e, n) {
    return e[n] = t, e;
  }, {});
}
__name(ra, "ra");
u(ra, "expandToHashMap");
var by = u(function(r, e) {
  return r = typeof r == "function" ? r(Object.assign({}, e.rects, { placement: e.placement })) : r, ta(typeof r != "number" ? r : ra(r, kn));
}, "toPaddingObject");
function yy(t) {
  var r, e = t.state, n = t.name, s = t.options, a = e.elements.arrow, p = e.modifiersData.popperOffsets, v = yt(e.placement), m = di(v), d = [it, ct].indexOf(v) >= 0, f = d ? "height" : "width";
  if (!(!a || !p)) {
    var g = by(s.padding, e), w = pi(a), S = m === "y" ? Qe : it, T = m === "y" ? mt : ct, C = e.rects.reference[f] + e.rects.reference[m] - p[m] - e.rects.popper[f], R = p[m] - e.rects.reference[m], _ = zr(a), L = _ ? m === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, $ = C / 2 - R / 2, I = g[S], ee = L - w[f] - g[T], z = L / 2 - w[f] / 2 + $, H = fi(I, z, ee), te = m;
    e.modifiersData[n] = (r = {}, r[te] = H, r.centerOffset = H - z, r);
  }
}
__name(yy, "yy");
u(yy, "arrow");
function wy(t) {
  var r = t.state, e = t.options, n = e.element, s = n === void 0 ? "[data-popper-arrow]" : n;
  s != null && (typeof s == "string" && (s = r.elements.popper.querySelector(s), !s) || Qo(r.elements.popper, s) && (r.elements.arrow = s));
}
__name(wy, "wy");
u(wy, "effect");
var Yf = { name: "arrow", enabled: true, phase: "main", fn: yy, effect: wy, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Cr(t) {
  return t.split("-")[1];
}
__name(Cr, "Cr");
u(Cr, "getVariation");
var xy = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ey(t) {
  var r = t.x, e = t.y, n = window, s = n.devicePixelRatio || 1;
  return { x: cn(r * s) / s || 0, y: cn(e * s) / s || 0 };
}
__name(Ey, "Ey");
u(Ey, "roundOffsetsByDPR");
function Xf(t) {
  var r, e = t.popper, n = t.popperRect, s = t.placement, a = t.variation, p = t.offsets, v = t.position, m = t.gpuAcceleration, d = t.adaptive, f = t.roundOffsets, g = t.isFixed, w = p.x, S = w === void 0 ? 0 : w, T = p.y, C = T === void 0 ? 0 : T, R = typeof f == "function" ? f({ x: S, y: C }) : { x: S, y: C };
  S = R.x, C = R.y;
  var _ = p.hasOwnProperty("x"), L = p.hasOwnProperty("y"), $ = it, I = Qe, ee = window;
  if (d) {
    var z = zr(e), H = "clientHeight", te = "clientWidth";
    if (z === ot(e) && (z = Ct(e), Ht(z).position !== "static" && v === "absolute" && (H = "scrollHeight", te = "scrollWidth")), z = z, s === Qe || (s === it || s === ct) && a === ui) {
      I = mt;
      var Q = g && ee.visualViewport ? ee.visualViewport.height : z[H];
      C -= Q - n.height, C *= m ? 1 : -1;
    }
    if (s === it || (s === Qe || s === mt) && a === ui) {
      $ = ct;
      var ue = g && ee.visualViewport ? ee.visualViewport.width : z[te];
      S -= ue - n.width, S *= m ? 1 : -1;
    }
  }
  var K = Object.assign({ position: v }, d && xy), ie = f === true ? Ey({ x: S, y: C }) : { x: S, y: C };
  if (S = ie.x, C = ie.y, m) {
    var q;
    return Object.assign({}, K, (q = {}, q[I] = L ? "0" : "", q[$] = _ ? "0" : "", q.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + C + "px)" : "translate3d(" + S + "px, " + C + "px, 0)", q));
  }
  return Object.assign({}, K, (r = {}, r[I] = L ? C + "px" : "", r[$] = _ ? S + "px" : "", r.transform = "", r));
}
__name(Xf, "Xf");
u(Xf, "mapToStyles");
function Sy(t) {
  var r = t.state, e = t.options, n = e.gpuAcceleration, s = n === void 0 ? true : n, a = e.adaptive, p = a === void 0 ? true : a, v = e.roundOffsets, m = v === void 0 ? true : v;
  if (false)
    var d;
  var f = { placement: yt(r.placement), variation: Cr(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: s, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Xf(Object.assign({}, f, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: p, roundOffsets: m })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Xf(Object.assign({}, f, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(Sy, "Sy");
u(Sy, "computeStyles");
var Zf = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Sy, data: {} };
var Js = { passive: true };
function Ty(t) {
  var r = t.state, e = t.instance, n = t.options, s = n.scroll, a = s === void 0 ? true : s, p = n.resize, v = p === void 0 ? true : p, m = ot(r.elements.popper), d = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return a && d.forEach(function(f) {
    f.addEventListener("scroll", e.update, Js);
  }), v && m.addEventListener("resize", e.update, Js), function() {
    a && d.forEach(function(f) {
      f.removeEventListener("scroll", e.update, Js);
    }), v && m.removeEventListener("resize", e.update, Js);
  };
}
__name(Ty, "Ty");
u(Ty, "effect");
var Kf = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: Ty, data: {} };
var Cy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function eo(t) {
  return t.replace(/left|right|bottom|top/g, function(r) {
    return Cy[r];
  });
}
__name(eo, "eo");
u(eo, "getOppositePlacement");
var Oy = { start: "end", end: "start" };
function Qs(t) {
  return t.replace(/start|end/g, function(r) {
    return Oy[r];
  });
}
__name(Qs, "Qs");
u(Qs, "getOppositeVariationPlacement");
function hi(t) {
  var r = ot(t), e = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: e, scrollTop: n };
}
__name(hi, "hi");
u(hi, "getWindowScroll");
function mi(t) {
  return Tr(Ct(t)).left + hi(t).scrollLeft;
}
__name(mi, "mi");
u(mi, "getWindowScrollBarX");
function Ku(t) {
  var r = ot(t), e = Ct(t), n = r.visualViewport, s = e.clientWidth, a = e.clientHeight, p = 0, v = 0;
  return n && (s = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = n.offsetLeft, v = n.offsetTop)), { width: s, height: a, x: p + mi(t), y: v };
}
__name(Ku, "Ku");
u(Ku, "getViewportRect");
function Ju(t) {
  var r, e = Ct(t), n = hi(t), s = (r = t.ownerDocument) == null ? void 0 : r.body, a = Pr(e.scrollWidth, e.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), p = Pr(e.scrollHeight, e.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), v = -n.scrollLeft + mi(t), m = -n.scrollTop;
  return Ht(s || e).direction === "rtl" && (v += Pr(e.clientWidth, s ? s.clientWidth : 0) - a), { width: a, height: p, x: v, y: m };
}
__name(Ju, "Ju");
u(Ju, "getDocumentRect");
function vi(t) {
  var r = Ht(t), e = r.overflow, n = r.overflowX, s = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + s + n);
}
__name(vi, "vi");
u(vi, "isScrollParent");
function el(t) {
  return ["html", "body", "#document"].indexOf(bt(t)) >= 0 ? t.ownerDocument.body : vt(t) && vi(t) ? t : el(pn(t));
}
__name(el, "el");
u(el, "getScrollParent");
function Nn(t, r) {
  var e;
  r === void 0 && (r = []);
  var n = el(t), s = n === ((e = t.ownerDocument) == null ? void 0 : e.body), a = ot(n), p = s ? [a].concat(a.visualViewport || [], vi(n) ? n : []) : n, v = r.concat(p);
  return s ? v : v.concat(Nn(pn(p)));
}
__name(Nn, "Nn");
u(Nn, "listScrollParents");
function to(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(to, "to");
u(to, "rectToClientRect");
function My(t) {
  var r = Tr(t);
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(My, "My");
u(My, "getInnerBoundingClientRect");
function Jf(t, r) {
  return r === Xs ? to(Ku(t)) : $r(r) ? My(r) : to(Ju(Ct(t)));
}
__name(Jf, "Jf");
u(Jf, "getClientRectFromMixedType");
function Ay(t) {
  var r = Nn(pn(t)), e = ["absolute", "fixed"].indexOf(Ht(t).position) >= 0, n = e && vt(t) ? zr(t) : t;
  return $r(n) ? r.filter(function(s) {
    return $r(s) && Qo(s, n) && bt(s) !== "body";
  }) : [];
}
__name(Ay, "Ay");
u(Ay, "getClippingParents");
function Qu(t, r, e) {
  var n = r === "clippingParents" ? Ay(t) : [].concat(r), s = [].concat(n, [e]), a = s[0], p = s.reduce(function(v, m) {
    var d = Jf(t, m);
    return v.top = Pr(d.top, v.top), v.right = ci(d.right, v.right), v.bottom = ci(d.bottom, v.bottom), v.left = Pr(d.left, v.left), v;
  }, Jf(t, a));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
__name(Qu, "Qu");
u(Qu, "getClippingRect");
function na(t) {
  var r = t.reference, e = t.element, n = t.placement, s = n ? yt(n) : null, a = n ? Cr(n) : null, p = r.x + r.width / 2 - e.width / 2, v = r.y + r.height / 2 - e.height / 2, m;
  switch (s) {
    case Qe:
      m = { x: p, y: r.y - e.height };
      break;
    case mt:
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
  var d = s ? di(s) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (a) {
      case un:
        m[d] = m[d] - (r[f] / 2 - e[f] / 2);
        break;
      case ui:
        m[d] = m[d] + (r[f] / 2 - e[f] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(na, "na");
u(na, "computeOffsets");
function Rr(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, s = n === void 0 ? t.placement : n, a = e.boundary, p = a === void 0 ? qf : a, v = e.rootBoundary, m = v === void 0 ? Xs : v, d = e.elementContext, f = d === void 0 ? Qi : d, g = e.altBoundary, w = g === void 0 ? false : g, S = e.padding, T = S === void 0 ? 0 : S, C = ta(typeof T != "number" ? T : ra(T, kn)), R = f === Qi ? Ff : Qi, _ = t.rects.popper, L = t.elements[w ? R : f], $ = Qu($r(L) ? L : L.contextElement || Ct(t.elements.popper), p, m), I = Tr(t.elements.reference), ee = na({ reference: I, element: _, strategy: "absolute", placement: s }), z = to(Object.assign({}, _, ee)), H = f === Qi ? z : I, te = { top: $.top - H.top + C.top, bottom: H.bottom - $.bottom + C.bottom, left: $.left - H.left + C.left, right: H.right - $.right + C.right }, Q = t.modifiersData.offset;
  if (f === Qi && Q) {
    var ue = Q[s];
    Object.keys(te).forEach(function(K) {
      var ie = [ct, mt].indexOf(K) >= 0 ? 1 : -1, q = [Qe, mt].indexOf(K) >= 0 ? "y" : "x";
      te[K] += ue[q] * ie;
    });
  }
  return te;
}
__name(Rr, "Rr");
u(Rr, "detectOverflow");
function ec(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, s = e.boundary, a = e.rootBoundary, p = e.padding, v = e.flipVariations, m = e.allowedAutoPlacements, d = m === void 0 ? Zs : m, f = Cr(n), g = f ? v ? Xu : Xu.filter(function(T) {
    return Cr(T) === f;
  }) : kn, w = g.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  w.length === 0 && (w = g);
  var S = w.reduce(function(T, C) {
    return T[C] = Rr(t, { placement: C, boundary: s, rootBoundary: a, padding: p })[yt(C)], T;
  }, {});
  return Object.keys(S).sort(function(T, C) {
    return S[T] - S[C];
  });
}
__name(ec, "ec");
u(ec, "computeAutoPlacement");
function Iy(t) {
  if (yt(t) === Ys)
    return [];
  var r = eo(t);
  return [Qs(t), r, Qs(r)];
}
__name(Iy, "Iy");
u(Iy, "getExpandedFallbackPlacements");
function Py(t) {
  var r = t.state, e = t.options, n = t.name;
  if (!r.modifiersData[n]._skip) {
    for (var s = e.mainAxis, a = s === void 0 ? true : s, p = e.altAxis, v = p === void 0 ? true : p, m = e.fallbackPlacements, d = e.padding, f = e.boundary, g = e.rootBoundary, w = e.altBoundary, S = e.flipVariations, T = S === void 0 ? true : S, C = e.allowedAutoPlacements, R = r.options.placement, _ = yt(R), L = _ === R, $ = m || (L || !T ? [eo(R)] : Iy(R)), I = [R].concat($).reduce(function(je, rt) {
      return je.concat(yt(rt) === Ys ? ec(r, { placement: rt, boundary: f, rootBoundary: g, padding: d, flipVariations: T, allowedAutoPlacements: C }) : rt);
    }, []), ee = r.rects.reference, z = r.rects.popper, H = /* @__PURE__ */ new Map(), te = true, Q = I[0], ue = 0; ue < I.length; ue++) {
      var K = I[ue], ie = yt(K), q = Cr(K) === un, oe = [Qe, mt].indexOf(ie) >= 0, tt = oe ? "width" : "height", Ze = Rr(r, { placement: K, boundary: f, rootBoundary: g, altBoundary: w, padding: d }), ze = oe ? q ? ct : it : q ? mt : Qe;
      ee[tt] > z[tt] && (ze = eo(ze));
      var Ie = eo(ze), We = [];
      if (a && We.push(Ze[ie] <= 0), v && We.push(Ze[ze] <= 0, Ze[Ie] <= 0), We.every(function(je) {
        return je;
      })) {
        Q = K, te = false;
        break;
      }
      H.set(K, We);
    }
    if (te)
      for (var Je = T ? 3 : 1, Ye = u(function(rt) {
        var vr = I.find(function(Ar) {
          var gr = H.get(Ar);
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
__name(Py, "Py");
u(Py, "flip");
var Qf = { name: "flip", enabled: true, phase: "main", fn: Py, requiresIfExists: ["offset"], data: { _skip: false } };
function eh(t, r, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - r.height - e.y, right: t.right - r.width + e.x, bottom: t.bottom - r.height + e.y, left: t.left - r.width - e.x };
}
__name(eh, "eh");
u(eh, "getSideOffsets");
function th(t) {
  return [Qe, ct, mt, it].some(function(r) {
    return t[r] >= 0;
  });
}
__name(th, "th");
u(th, "isAnySideFullyClipped");
function zy(t) {
  var r = t.state, e = t.name, n = r.rects.reference, s = r.rects.popper, a = r.modifiersData.preventOverflow, p = Rr(r, { elementContext: "reference" }), v = Rr(r, { altBoundary: true }), m = eh(p, n), d = eh(v, s, a), f = th(m), g = th(d);
  r.modifiersData[e] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: f, hasPopperEscaped: g }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": g });
}
__name(zy, "zy");
u(zy, "hide");
var rh = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: zy };
function Ry(t, r, e) {
  var n = yt(t), s = [it, Qe].indexOf(n) >= 0 ? -1 : 1, a = typeof e == "function" ? e(Object.assign({}, r, { placement: t })) : e, p = a[0], v = a[1];
  return p = p || 0, v = (v || 0) * s, [it, ct].indexOf(n) >= 0 ? { x: v, y: p } : { x: p, y: v };
}
__name(Ry, "Ry");
u(Ry, "distanceAndSkiddingToXY");
function Dy(t) {
  var r = t.state, e = t.options, n = t.name, s = e.offset, a = s === void 0 ? [0, 0] : s, p = Zs.reduce(function(f, g) {
    return f[g] = Ry(g, r.rects, a), f;
  }, {}), v = p[r.placement], m = v.x, d = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m, r.modifiersData.popperOffsets.y += d), r.modifiersData[n] = p;
}
__name(Dy, "Dy");
u(Dy, "offset");
var nh = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Dy };
function ky(t) {
  var r = t.state, e = t.name;
  r.modifiersData[e] = na({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(ky, "ky");
u(ky, "popperOffsets");
var ih = { name: "popperOffsets", enabled: true, phase: "read", fn: ky, data: {} };
function tc(t) {
  return t === "x" ? "y" : "x";
}
__name(tc, "tc");
u(tc, "getAltAxis");
function Ny(t) {
  var r = t.state, e = t.options, n = t.name, s = e.mainAxis, a = s === void 0 ? true : s, p = e.altAxis, v = p === void 0 ? false : p, m = e.boundary, d = e.rootBoundary, f = e.altBoundary, g = e.padding, w = e.tether, S = w === void 0 ? true : w, T = e.tetherOffset, C = T === void 0 ? 0 : T, R = Rr(r, { boundary: m, rootBoundary: d, padding: g, altBoundary: f }), _ = yt(r.placement), L = Cr(r.placement), $ = !L, I = di(_), ee = tc(I), z = r.modifiersData.popperOffsets, H = r.rects.reference, te = r.rects.popper, Q = typeof C == "function" ? C(Object.assign({}, r.rects, { placement: r.placement })) : C, ue = typeof Q == "number" ? { mainAxis: Q, altAxis: Q } : Object.assign({ mainAxis: 0, altAxis: 0 }, Q), K = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, ie = { x: 0, y: 0 };
  if (z) {
    if (a) {
      var q, oe = I === "y" ? Qe : it, tt = I === "y" ? mt : ct, Ze = I === "y" ? "height" : "width", ze = z[I], Ie = ze + R[oe], We = ze - R[tt], Je = S ? -te[Ze] / 2 : 0, Ye = L === un ? H[Ze] : te[Ze], J = L === un ? -te[Ze] : -H[Ze], ar = r.elements.arrow, je = S && ar ? pi(ar) : { width: 0, height: 0 }, rt = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : ea(), vr = rt[oe], Ar = rt[tt], gr = fi(0, H[Ze], je[Ze]), sr = $ ? H[Ze] / 2 - Je - gr - vr - ue.mainAxis : Ye - gr - vr - ue.mainAxis, _r = $ ? -H[Ze] / 2 + Je + gr + Ar + ue.mainAxis : J + gr + Ar + ue.mainAxis, Yr = r.elements.arrow && zr(r.elements.arrow), Ln = Yr ? I === "y" ? Yr.clientTop || 0 : Yr.clientLeft || 0 : 0, Pe = (q = K == null ? void 0 : K[I]) != null ? q : 0, Gn = ze + sr - Pe - Ln, jn = ze + _r - Pe, _t = fi(S ? ci(Ie, Gn) : Ie, ze, S ? Pr(We, jn) : We);
      z[I] = _t, ie[I] = _t - ze;
    }
    if (v) {
      var Xr, xi = I === "x" ? Qe : it, mn = I === "x" ? mt : ct, Ir = z[ee], Mt = ee === "y" ? "height" : "width", Lr = Ir + R[xi], er = Ir - R[mn], Hn = [Qe, it].indexOf(_) !== -1, Zr = (Xr = K == null ? void 0 : K[ee]) != null ? Xr : 0, Bn = Hn ? Lr : Ir - H[Mt] - te[Mt] - Zr + ue.altAxis, vn = Hn ? Ir + H[Mt] + te[Mt] - Zr - ue.altAxis : er, $n = S && Hn ? Vf(Bn, Ir, vn) : fi(S ? Bn : Lr, Ir, S ? vn : er);
      z[ee] = $n, ie[ee] = $n - Ir;
    }
    r.modifiersData[n] = ie;
  }
}
__name(Ny, "Ny");
u(Ny, "preventOverflow");
var oh = { name: "preventOverflow", enabled: true, phase: "main", fn: Ny, requiresIfExists: ["offset"] };
function rc(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(rc, "rc");
u(rc, "getHTMLElementScroll");
function nc(t) {
  return t === ot(t) || !vt(t) ? hi(t) : rc(t);
}
__name(nc, "nc");
u(nc, "getNodeScroll");
function _y(t) {
  var r = t.getBoundingClientRect(), e = cn(r.width) / t.offsetWidth || 1, n = cn(r.height) / t.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
__name(_y, "_y");
u(_y, "isElementScaled");
function ic(t, r, e) {
  e === void 0 && (e = false);
  var n = vt(r), s = vt(r) && _y(r), a = Ct(r), p = Tr(t, s), v = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (n || !n && !e) && ((bt(r) !== "body" || vi(a)) && (v = nc(r)), vt(r) ? (m = Tr(r, true), m.x += r.clientLeft, m.y += r.clientTop) : a && (m.x = mi(a))), { x: p.left + v.scrollLeft - m.x, y: p.top + v.scrollTop - m.y, width: p.width, height: p.height };
}
__name(ic, "ic");
u(ic, "getCompositeRect");
function Ly(t) {
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
__name(Ly, "Ly");
u(Ly, "order");
function oc(t) {
  var r = Ly(t);
  return Uf.reduce(function(e, n) {
    return e.concat(r.filter(function(s) {
      return s.phase === n;
    }));
  }, []);
}
__name(oc, "oc");
u(oc, "orderModifiers");
function ac(t) {
  var r;
  return function() {
    return r || (r = new Promise(function(e) {
      Promise.resolve().then(function() {
        r = void 0, e(t());
      });
    })), r;
  };
}
__name(ac, "ac");
u(ac, "debounce");
function sc(t) {
  var r = t.reduce(function(e, n) {
    var s = e[n.name];
    return e[n.name] = s ? Object.assign({}, s, n, { options: Object.assign({}, s.options, n.options), data: Object.assign({}, s.data, n.data) }) : n, e;
  }, {});
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}
__name(sc, "sc");
u(sc, "mergeByName");
var ah = { placement: "bottom", modifiers: [], strategy: "absolute" };
function sh() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(sh, "sh");
u(sh, "areValidElements");
function lh(t) {
  t === void 0 && (t = {});
  var r = t, e = r.defaultModifiers, n = e === void 0 ? [] : e, s = r.defaultOptions, a = s === void 0 ? ah : s;
  return u(function(v, m, d) {
    d === void 0 && (d = a);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ah, a), modifiersData: {}, elements: { reference: v, popper: m }, attributes: {}, styles: {} }, g = [], w = false, S = { state: f, setOptions: u(function(_) {
      var L = typeof _ == "function" ? _(f.options) : _;
      C(), f.options = Object.assign({}, a, f.options, L), f.scrollParents = { reference: $r(v) ? Nn(v) : v.contextElement ? Nn(v.contextElement) : [], popper: Nn(m) };
      var $ = oc(sc([].concat(n, f.options.modifiers)));
      if (f.orderedModifiers = $.filter(function(K) {
        return K.enabled;
      }), false) {
        var I;
        if (getBasePlacement(f.options.placement) === auto)
          var ee;
        var z, H, te, Q, ue;
      }
      return T(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!w) {
        var _ = f.elements, L = _.reference, $ = _.popper;
        if (sh(L, $)) {
          f.rects = { reference: ic(L, zr($), f.options.strategy === "fixed"), popper: pi($) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(K) {
            return f.modifiersData[K.name] = Object.assign({}, K.data);
          });
          for (var I = 0, ee = 0; ee < f.orderedModifiers.length; ee++) {
            if (f.reset === true) {
              f.reset = false, ee = -1;
              continue;
            }
            var z = f.orderedModifiers[ee], H = z.fn, te = z.options, Q = te === void 0 ? {} : te, ue = z.name;
            typeof H == "function" && (f = H({ state: f, options: Q, name: ue, instance: S }) || f);
          }
        }
      }
    }, "forceUpdate"), update: ac(function() {
      return new Promise(function(R) {
        S.forceUpdate(), R(f);
      });
    }), destroy: u(function() {
      C(), w = true;
    }, "destroy") };
    if (!sh(v, m))
      return S;
    S.setOptions(d).then(function(R) {
      !w && d.onFirstUpdate && d.onFirstUpdate(R);
    });
    function T() {
      f.orderedModifiers.forEach(function(R) {
        var _ = R.name, L = R.options, $ = L === void 0 ? {} : L, I = R.effect;
        if (typeof I == "function") {
          var ee = I({ state: f, name: _, instance: S, options: $ }), z = u(function() {
          }, "noopFn");
          g.push(ee || z);
        }
      });
    }
    __name(T, "T");
    u(T, "runModifierEffects");
    function C() {
      g.forEach(function(R) {
        return R();
      }), g = [];
    }
    __name(C, "C");
    return u(C, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(lh, "lh");
u(lh, "popperGenerator");
var Gy = [Kf, ih, Zf, Jo, nh, Qf, oh, Yf, rh];
var lc = lh({ defaultModifiers: Gy });
var jy = "tippy-box";
var bh = "tippy-content";
var Hy = "tippy-backdrop";
var yh = "tippy-arrow";
var wh = "tippy-svg-arrow";
var gi = { passive: true, capture: true };
var xh = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function uc(t, r, e) {
  if (Array.isArray(t)) {
    var n = t[r];
    return n == null ? Array.isArray(e) ? e[r] : e : n;
  }
  return t;
}
__name(uc, "uc");
u(uc, "getValueAtIndexOrReturn");
function mc(t, r) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(r + "]") > -1;
}
__name(mc, "mc");
u(mc, "isType");
function Eh(t, r) {
  return typeof t == "function" ? t.apply(void 0, r) : t;
}
__name(Eh, "Eh");
u(Eh, "invokeWithArgsOrReturn");
function uh(t, r) {
  if (r === 0)
    return t;
  var e;
  return function(n) {
    clearTimeout(e), e = setTimeout(function() {
      t(n);
    }, r);
  };
}
__name(uh, "uh");
u(uh, "debounce");
function By(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(By, "By");
u(By, "splitBySpaces");
function ro(t) {
  return [].concat(t);
}
__name(ro, "ro");
u(ro, "normalizeToArray");
function ch(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
__name(ch, "ch");
u(ch, "pushIfUnique");
function $y(t) {
  return t.filter(function(r, e) {
    return t.indexOf(r) === e;
  });
}
__name($y, "$y");
u($y, "unique");
function qy(t) {
  return t.split("-")[0];
}
__name(qy, "qy");
u(qy, "getBasePlacement");
function rl(t) {
  return [].slice.call(t);
}
__name(rl, "rl");
u(rl, "arrayFrom");
function ph(t) {
  return Object.keys(t).reduce(function(r, e) {
    return t[e] !== void 0 && (r[e] = t[e]), r;
  }, {});
}
__name(ph, "ph");
u(ph, "removeUndefinedProps");
function ia() {
  return document.createElement("div");
}
__name(ia, "ia");
u(ia, "div");
function nl(t) {
  return ["Element", "Fragment"].some(function(r) {
    return mc(t, r);
  });
}
__name(nl, "nl");
u(nl, "isElement");
function Fy(t) {
  return mc(t, "NodeList");
}
__name(Fy, "Fy");
u(Fy, "isNodeList");
function Uy(t) {
  return mc(t, "MouseEvent");
}
__name(Uy, "Uy");
u(Uy, "isMouseEvent");
function Wy(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(Wy, "Wy");
u(Wy, "isReferenceElement");
function Vy(t) {
  return nl(t) ? [t] : Fy(t) ? rl(t) : Array.isArray(t) ? t : rl(document.querySelectorAll(t));
}
__name(Vy, "Vy");
u(Vy, "getArrayOfElements");
function cc(t, r) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = r + "ms");
  });
}
__name(cc, "cc");
u(cc, "setTransitionDuration");
function dh(t, r) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", r);
  });
}
__name(dh, "dh");
u(dh, "setVisibilityState");
function Yy(t) {
  var r, e = ro(t), n = e[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(Yy, "Yy");
u(Yy, "getOwnerDocument");
function Xy(t, r) {
  var e = r.clientX, n = r.clientY;
  return t.every(function(s) {
    var a = s.popperRect, p = s.popperState, v = s.props, m = v.interactiveBorder, d = qy(p.placement), f = p.modifiersData.offset;
    if (!f)
      return true;
    var g = d === "bottom" ? f.top.y : 0, w = d === "top" ? f.bottom.y : 0, S = d === "right" ? f.left.x : 0, T = d === "left" ? f.right.x : 0, C = a.top - n + g > m, R = n - a.bottom - w > m, _ = a.left - e + S > m, L = e - a.right - T > m;
    return C || R || _ || L;
  });
}
__name(Xy, "Xy");
u(Xy, "isCursorOutsideInteractiveBorder");
function pc(t, r, e) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(s) {
    t[n](s, e);
  });
}
__name(pc, "pc");
u(pc, "updateTransitionEndListener");
function fh(t, r) {
  for (var e = r; e; ) {
    var n;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (n = e.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(fh, "fh");
u(fh, "actualContains");
var qr = { isTouch: false };
var hh = 0;
function Zy() {
  qr.isTouch || (qr.isTouch = true, window.performance && document.addEventListener("mousemove", Sh));
}
__name(Zy, "Zy");
u(Zy, "onDocumentTouchStart");
function Sh() {
  var t = performance.now();
  t - hh < 20 && (qr.isTouch = false, document.removeEventListener("mousemove", Sh)), hh = t;
}
__name(Sh, "Sh");
u(Sh, "onDocumentMouseMove");
function Ky() {
  var t = document.activeElement;
  if (Wy(t)) {
    var r = t._tippy;
    t.blur && !r.state.isVisible && t.blur();
  }
}
__name(Ky, "Ky");
u(Ky, "onWindowBlur");
function Jy() {
  document.addEventListener("touchstart", Zy, gi), window.addEventListener("blur", Ky);
}
__name(Jy, "Jy");
u(Jy, "bindGlobalEventListeners");
var Qy = typeof window != "undefined" && typeof document != "undefined";
var e0 = Qy ? !!window.msCrypto : false;
var t0 = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var r0 = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Dr = Object.assign({ appendTo: xh, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, t0, r0);
var n0 = Object.keys(Dr);
var i0 = u(function(r) {
  var e = Object.keys(r);
  e.forEach(function(n) {
    Dr[n] = r[n];
  });
}, "setDefaultProps");
function Th(t) {
  var r = t.plugins || [], e = r.reduce(function(n, s) {
    var a = s.name, p = s.defaultValue;
    if (a) {
      var v;
      n[a] = t[a] !== void 0 ? t[a] : (v = Dr[a]) != null ? v : p;
    }
    return n;
  }, {});
  return Object.assign({}, t, e);
}
__name(Th, "Th");
u(Th, "getExtendedPassedProps");
function o0(t, r) {
  var e = r ? Object.keys(Th(Object.assign({}, Dr, { plugins: r }))) : n0, n = e.reduce(function(s, a) {
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
__name(o0, "o0");
u(o0, "getDataAttributeProps");
function mh(t, r) {
  var e = Object.assign({}, r, { content: Eh(r.content, [t]) }, r.ignoreAttributes ? {} : o0(t, r.plugins));
  return e.aria = Object.assign({}, Dr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? r.interactive : e.aria.expanded, content: e.aria.content === "auto" ? r.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(mh, "mh");
u(mh, "evaluateProps");
var a0 = u(function() {
  return "innerHTML";
}, "innerHTML");
function fc(t, r) {
  t[a0()] = r;
}
__name(fc, "fc");
u(fc, "dangerouslySetInnerHTML");
function vh(t) {
  var r = ia();
  return t === true ? r.className = yh : (r.className = wh, nl(t) ? r.appendChild(t) : fc(r, t)), r;
}
__name(vh, "vh");
u(vh, "createArrowElement");
function gh(t, r) {
  nl(r.content) ? (fc(t, ""), t.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? fc(t, r.content) : t.textContent = r.content);
}
__name(gh, "gh");
u(gh, "setContent");
function hc(t) {
  var r = t.firstElementChild, e = rl(r.children);
  return { box: r, content: e.find(function(n) {
    return n.classList.contains(bh);
  }), arrow: e.find(function(n) {
    return n.classList.contains(yh) || n.classList.contains(wh);
  }), backdrop: e.find(function(n) {
    return n.classList.contains(Hy);
  }) };
}
__name(hc, "hc");
u(hc, "getChildren");
function Ch(t) {
  var r = ia(), e = ia();
  e.className = jy, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var n = ia();
  n.className = bh, n.setAttribute("data-state", "hidden"), gh(n, t.props), r.appendChild(e), e.appendChild(n), s(t.props, t.props);
  function s(a, p) {
    var v = hc(r), m = v.box, d = v.content, f = v.arrow;
    p.theme ? m.setAttribute("data-theme", p.theme) : m.removeAttribute("data-theme"), typeof p.animation == "string" ? m.setAttribute("data-animation", p.animation) : m.removeAttribute("data-animation"), p.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? m.setAttribute("role", p.role) : m.removeAttribute("role"), (a.content !== p.content || a.allowHTML !== p.allowHTML) && gh(d, t.props), p.arrow ? f ? a.arrow !== p.arrow && (m.removeChild(f), m.appendChild(vh(p.arrow))) : m.appendChild(vh(p.arrow)) : f && m.removeChild(f);
  }
  __name(s, "s");
  return u(s, "onUpdate"), { popper: r, onUpdate: s };
}
__name(Ch, "Ch");
u(Ch, "render");
Ch.$$tippy = true;
var s0 = 1;
var tl = [];
var dc = [];
function l0(t, r) {
  var e = mh(t, Object.assign({}, Dr, Th(ph(r)))), n, s, a, p = false, v = false, m = false, d = false, f, g, w, S = [], T = uh(Gn, e.interactiveDebounce), C, R = s0++, _ = null, L = $y(e.plugins), $ = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, I = { id: R, reference: t, popper: ia(), popperInstance: _, props: e, state: $, plugins: L, clearDelayTimeouts: Bn, setProps: vn, setContent: $n, show: ao, hide: so, hideWithInteractivity: ya, enable: Hn, disable: Zr, unmount: wa, destroy: yl };
  if (!e.render)
    return I;
  var ee = e.render(I), z = ee.popper, H = ee.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + I.id, I.popper = z, t._tippy = I, z._tippy = I;
  var te = L.map(function(G) {
    return G.fn(I);
  }), Q = t.hasAttribute("aria-expanded");
  return Yr(), Je(), ze(), Ie("onCreate", [I]), e.showOnCreate && Lr(), z.addEventListener("mouseenter", function() {
    I.props.interactive && I.state.isVisible && I.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    I.props.interactive && I.props.trigger.indexOf("mouseenter") >= 0 && oe().addEventListener("mousemove", T);
  }), I;
  function ue() {
    var G = I.props.touch;
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
    return !!((G = I.props.render) != null && G.$$tippy);
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
    return G ? Yy(G) : document;
  }
  __name(oe, "oe");
  u(oe, "getDocument");
  function tt() {
    return hc(z);
  }
  __name(tt, "tt");
  u(tt, "getDefaultTemplateChildren");
  function Ze(G) {
    return I.state.isMounted && !I.state.isVisible || qr.isTouch || f && f.type === "focus" ? 0 : uc(I.props.delay, G ? 0 : 1, Dr.delay);
  }
  __name(Ze, "Ze");
  u(Ze, "getDelay");
  function ze(G) {
    G === void 0 && (G = false), z.style.pointerEvents = I.props.interactive && !G ? "" : "none", z.style.zIndex = "" + I.props.zIndex;
  }
  __name(ze, "ze");
  u(ze, "handleStyles");
  function Ie(G, re, le) {
    if (le === void 0 && (le = true), te.forEach(function(xe) {
      xe[G] && xe[G].apply(xe, re);
    }), le) {
      var Re;
      (Re = I.props)[G].apply(Re, re);
    }
  }
  __name(Ie, "Ie");
  u(Ie, "invokeHook");
  function We() {
    var G = I.props.aria;
    if (G.content) {
      var re = "aria-" + G.content, le = z.id, Re = ro(I.props.triggerTarget || t);
      Re.forEach(function(xe) {
        var xt = xe.getAttribute(re);
        if (I.state.isVisible)
          xe.setAttribute(re, xt ? xt + " " + le : le);
        else {
          var Lt = xt && xt.replace(le, "").trim();
          Lt ? xe.setAttribute(re, Lt) : xe.removeAttribute(re);
        }
      });
    }
  }
  __name(We, "We");
  u(We, "handleAriaContentAttribute");
  function Je() {
    if (!(Q || !I.props.aria.expanded)) {
      var G = ro(I.props.triggerTarget || t);
      G.forEach(function(re) {
        I.props.interactive ? re.setAttribute("aria-expanded", I.state.isVisible && re === q() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Je, "Je");
  u(Je, "handleAriaExpandedAttribute");
  function Ye() {
    oe().removeEventListener("mousemove", T), tl = tl.filter(function(G) {
      return G !== T;
    });
  }
  __name(Ye, "Ye");
  u(Ye, "cleanupInteractiveMouseListeners");
  function J(G) {
    if (!(qr.isTouch && (m || G.type === "mousedown"))) {
      var re = G.composedPath && G.composedPath()[0] || G.target;
      if (!(I.props.interactive && fh(z, re))) {
        if (ro(I.props.triggerTarget || t).some(function(le) {
          return fh(le, re);
        })) {
          if (qr.isTouch || I.state.isVisible && I.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Ie("onClickOutside", [I, G]);
        I.props.hideOnClick === true && (I.clearDelayTimeouts(), I.hide(), v = true, setTimeout(function() {
          v = false;
        }), I.state.isMounted || vr());
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
  function je() {
    m = false;
  }
  __name(je, "je");
  u(je, "onTouchStart");
  function rt() {
    var G = oe();
    G.addEventListener("mousedown", J, true), G.addEventListener("touchend", J, gi), G.addEventListener("touchstart", je, gi), G.addEventListener("touchmove", ar, gi);
  }
  __name(rt, "rt");
  u(rt, "addDocumentPress");
  function vr() {
    var G = oe();
    G.removeEventListener("mousedown", J, true), G.removeEventListener("touchend", J, gi), G.removeEventListener("touchstart", je, gi), G.removeEventListener("touchmove", ar, gi);
  }
  __name(vr, "vr");
  u(vr, "removeDocumentPress");
  function Ar(G, re) {
    sr(G, function() {
      !I.state.isVisible && z.parentNode && z.parentNode.contains(z) && re();
    });
  }
  __name(Ar, "Ar");
  u(Ar, "onTransitionedOut");
  function gr(G, re) {
    sr(G, re);
  }
  __name(gr, "gr");
  u(gr, "onTransitionedIn");
  function sr(G, re) {
    var le = tt().box;
    function Re(xe) {
      xe.target === le && (pc(le, "remove", Re), re());
    }
    __name(Re, "Re");
    if (u(Re, "listener"), G === 0)
      return re();
    pc(le, "remove", g), pc(le, "add", Re), g = Re;
  }
  __name(sr, "sr");
  u(sr, "onTransitionEnd");
  function _r(G, re, le) {
    le === void 0 && (le = false);
    var Re = ro(I.props.triggerTarget || t);
    Re.forEach(function(xe) {
      xe.addEventListener(G, re, le), S.push({ node: xe, eventType: G, handler: re, options: le });
    });
  }
  __name(_r, "_r");
  u(_r, "on");
  function Yr() {
    K() && (_r("touchstart", Pe, { passive: true }), _r("touchend", jn, { passive: true })), By(I.props.trigger).forEach(function(G) {
      if (G !== "manual")
        switch (_r(G, Pe), G) {
          case "mouseenter":
            _r("mouseleave", jn);
            break;
          case "focus":
            _r(e0 ? "focusout" : "blur", _t);
            break;
          case "focusin":
            _r("focusout", _t);
            break;
        }
    });
  }
  __name(Yr, "Yr");
  u(Yr, "addListeners");
  function Ln() {
    S.forEach(function(G) {
      var re = G.node, le = G.eventType, Re = G.handler, xe = G.options;
      re.removeEventListener(le, Re, xe);
    }), S = [];
  }
  __name(Ln, "Ln");
  u(Ln, "removeListeners");
  function Pe(G) {
    var re, le = false;
    if (!(!I.state.isEnabled || Xr(G) || v)) {
      var Re = ((re = f) == null ? void 0 : re.type) === "focus";
      f = G, C = G.currentTarget, Je(), !I.state.isVisible && Uy(G) && tl.forEach(function(xe) {
        return xe(G);
      }), G.type === "click" && (I.props.trigger.indexOf("mouseenter") < 0 || p) && I.props.hideOnClick !== false && I.state.isVisible ? le = true : Lr(G), G.type === "click" && (p = !le), le && !Re && er(G);
    }
  }
  __name(Pe, "Pe");
  u(Pe, "onTrigger");
  function Gn(G) {
    var re = G.target, le = q().contains(re) || z.contains(re);
    if (!(G.type === "mousemove" && le)) {
      var Re = Mt().concat(z).map(function(xe) {
        var xt, Lt = xe._tippy, At = (xt = Lt.popperInstance) == null ? void 0 : xt.state;
        return At ? { popperRect: xe.getBoundingClientRect(), popperState: At, props: e } : null;
      }).filter(Boolean);
      Xy(Re, G) && (Ye(), er(G));
    }
  }
  __name(Gn, "Gn");
  u(Gn, "onMouseMove");
  function jn(G) {
    var re = Xr(G) || I.props.trigger.indexOf("click") >= 0 && p;
    if (!re) {
      if (I.props.interactive) {
        I.hideWithInteractivity(G);
        return;
      }
      er(G);
    }
  }
  __name(jn, "jn");
  u(jn, "onMouseLeave");
  function _t(G) {
    I.props.trigger.indexOf("focusin") < 0 && G.target !== q() || I.props.interactive && G.relatedTarget && z.contains(G.relatedTarget) || er(G);
  }
  __name(_t, "_t");
  u(_t, "onBlurOrFocusOut");
  function Xr(G) {
    return qr.isTouch ? K() !== G.type.indexOf("touch") >= 0 : false;
  }
  __name(Xr, "Xr");
  u(Xr, "isEventListenerStopped");
  function xi() {
    mn();
    var G = I.props, re = G.popperOptions, le = G.placement, Re = G.offset, xe = G.getReferenceClientRect, xt = G.moveTransition, Lt = ie() ? hc(z).arrow : null, At = xe ? { getBoundingClientRect: xe, contextElement: xe.contextElement || q() } : t, xa = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(It) {
      var Pt = It.state;
      if (ie()) {
        var Kr = tt(), Ei = Kr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Si) {
          Si === "placement" ? Ei.setAttribute("data-placement", Pt.placement) : Pt.attributes.popper["data-popper-" + Si] ? Ei.setAttribute("data-" + Si, "") : Ei.removeAttribute("data-" + Si);
        }), Pt.attributes.popper = {};
      }
    }, "fn") }, br = [{ name: "offset", options: { offset: Re } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !xt } }, xa];
    ie() && Lt && br.push({ name: "arrow", options: { element: Lt, padding: 3 } }), br.push.apply(br, (re == null ? void 0 : re.modifiers) || []), I.popperInstance = lc(At, z, Object.assign({}, re, { placement: le, onFirstUpdate: w, modifiers: br }));
  }
  __name(xi, "xi");
  u(xi, "createPopperInstance");
  function mn() {
    I.popperInstance && (I.popperInstance.destroy(), I.popperInstance = null);
  }
  __name(mn, "mn");
  u(mn, "destroyPopperInstance");
  function Ir() {
    var G = I.props.appendTo, re, le = q();
    I.props.interactive && G === xh || G === "parent" ? re = le.parentNode : re = Eh(G, [le]), re.contains(z) || re.appendChild(z), I.state.isMounted = true, xi();
  }
  __name(Ir, "Ir");
  u(Ir, "mount");
  function Mt() {
    return rl(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(Mt, "Mt");
  u(Mt, "getNestedPopperTree");
  function Lr(G) {
    I.clearDelayTimeouts(), G && Ie("onTrigger", [I, G]), rt();
    var re = Ze(true), le = ue(), Re = le[0], xe = le[1];
    qr.isTouch && Re === "hold" && xe && (re = xe), re ? n = setTimeout(function() {
      I.show();
    }, re) : I.show();
  }
  __name(Lr, "Lr");
  u(Lr, "scheduleShow");
  function er(G) {
    if (I.clearDelayTimeouts(), Ie("onUntrigger", [I, G]), !I.state.isVisible) {
      vr();
      return;
    }
    if (!(I.props.trigger.indexOf("mouseenter") >= 0 && I.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(G.type) >= 0 && p)) {
      var re = Ze(false);
      re ? s = setTimeout(function() {
        I.state.isVisible && I.hide();
      }, re) : a = requestAnimationFrame(function() {
        I.hide();
      });
    }
  }
  __name(er, "er");
  u(er, "scheduleHide");
  function Hn() {
    I.state.isEnabled = true;
  }
  __name(Hn, "Hn");
  u(Hn, "enable");
  function Zr() {
    I.hide(), I.state.isEnabled = false;
  }
  __name(Zr, "Zr");
  u(Zr, "disable");
  function Bn() {
    clearTimeout(n), clearTimeout(s), cancelAnimationFrame(a);
  }
  __name(Bn, "Bn");
  u(Bn, "clearDelayTimeouts");
  function vn(G) {
    if (!I.state.isDestroyed) {
      Ie("onBeforeUpdate", [I, G]), Ln();
      var re = I.props, le = mh(t, Object.assign({}, re, ph(G), { ignoreAttributes: true }));
      I.props = le, Yr(), re.interactiveDebounce !== le.interactiveDebounce && (Ye(), T = uh(Gn, le.interactiveDebounce)), re.triggerTarget && !le.triggerTarget ? ro(re.triggerTarget).forEach(function(Re) {
        Re.removeAttribute("aria-expanded");
      }) : le.triggerTarget && t.removeAttribute("aria-expanded"), Je(), ze(), H && H(re, le), I.popperInstance && (xi(), Mt().forEach(function(Re) {
        requestAnimationFrame(Re._tippy.popperInstance.forceUpdate);
      })), Ie("onAfterUpdate", [I, G]);
    }
  }
  __name(vn, "vn");
  u(vn, "setProps");
  function $n(G) {
    I.setProps({ content: G });
  }
  __name($n, "$n");
  u($n, "setContent");
  function ao() {
    var G = I.state.isVisible, re = I.state.isDestroyed, le = !I.state.isEnabled, Re = qr.isTouch && !I.props.touch, xe = uc(I.props.duration, 0, Dr.duration);
    if (!(G || re || le || Re) && !q().hasAttribute("disabled") && (Ie("onShow", [I], false), I.props.onShow(I) !== false)) {
      if (I.state.isVisible = true, ie() && (z.style.visibility = "visible"), ze(), rt(), I.state.isMounted || (z.style.transition = "none"), ie()) {
        var xt = tt(), Lt = xt.box, At = xt.content;
        cc([Lt, At], 0);
      }
      w = u(function() {
        var br;
        if (!(!I.state.isVisible || d)) {
          if (d = true, z.offsetHeight, z.style.transition = I.props.moveTransition, ie() && I.props.animation) {
            var lo = tt(), It = lo.box, Pt = lo.content;
            cc([It, Pt], xe), dh([It, Pt], "visible");
          }
          We(), Je(), ch(dc, I), (br = I.popperInstance) == null || br.forceUpdate(), Ie("onMount", [I]), I.props.animation && ie() && gr(xe, function() {
            I.state.isShown = true, Ie("onShown", [I]);
          });
        }
      }, "onFirstUpdate"), Ir();
    }
  }
  __name(ao, "ao");
  u(ao, "show");
  function so() {
    var G = !I.state.isVisible, re = I.state.isDestroyed, le = !I.state.isEnabled, Re = uc(I.props.duration, 1, Dr.duration);
    if (!(G || re || le) && (Ie("onHide", [I], false), I.props.onHide(I) !== false)) {
      if (I.state.isVisible = false, I.state.isShown = false, d = false, p = false, ie() && (z.style.visibility = "hidden"), Ye(), vr(), ze(true), ie()) {
        var xe = tt(), xt = xe.box, Lt = xe.content;
        I.props.animation && (cc([xt, Lt], Re), dh([xt, Lt], "hidden"));
      }
      We(), Je(), I.props.animation ? ie() && Ar(Re, I.unmount) : I.unmount();
    }
  }
  __name(so, "so");
  u(so, "hide");
  function ya(G) {
    oe().addEventListener("mousemove", T), ch(tl, T), T(G);
  }
  __name(ya, "ya");
  u(ya, "hideWithInteractivity");
  function wa() {
    I.state.isVisible && I.hide(), I.state.isMounted && (mn(), Mt().forEach(function(G) {
      G._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), dc = dc.filter(function(G) {
      return G !== I;
    }), I.state.isMounted = false, Ie("onHidden", [I]));
  }
  __name(wa, "wa");
  u(wa, "unmount");
  function yl() {
    I.state.isDestroyed || (I.clearDelayTimeouts(), I.unmount(), Ln(), delete t._tippy, I.state.isDestroyed = true, Ie("onDestroy", [I]));
  }
  __name(yl, "yl");
  u(yl, "destroy");
}
__name(l0, "l0");
u(l0, "createTippy");
function oa(t, r) {
  r === void 0 && (r = {});
  var e = Dr.plugins.concat(r.plugins || []);
  Jy();
  var n = Object.assign({}, r, { plugins: e }), s = Vy(t);
  if (false)
    var a, p;
  var v = s.reduce(function(m, d) {
    var f = d && l0(d, n);
    return f && m.push(f), m;
  }, []);
  return nl(t) ? v[0] : v;
}
__name(oa, "oa");
u(oa, "tippy");
oa.defaultProps = Dr;
oa.setDefaultProps = i0;
oa.currentInput = qr;
var V1 = Object.assign({}, Jo, { effect: u(function(r) {
  var e = r.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
}, "effect") });
oa.setDefaultProps({ render: Ch });
var Rt = oa;
var Oh = jt(on(), 1);
var vc = u((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
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
      this.helpableMachine = ht({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
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
        this.debugHelpable && console.log(`helpable: ${(0, Oh.format)(a.value)}`);
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
  u(e, "HelpableMixinClass"), M([k], e.prototype, "help", 2), M([k], e.prototype, "helpId", 2), M([k], e.prototype, "debugHelpable", 2);
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
  u(e, "HoverableMixinClass"), M([k], e.prototype, "hoverable", 2);
  let r = e;
  return r;
}
__name(pe, "pe");
u(pe, "HoverableMixin");
var il = /* @__PURE__ */ new Map();
function ol(t) {
  if (il.has(t))
    return il.get(t);
  let r = t.length, e = 0, n = 0, s = 0, a = [];
  for (let p = 0; p < r; p += 1) {
    let v = t[p], m = t[p + 1], d = t[p - 1];
    v === "{" && m === "{" && d !== "\\" ? (s += 1, s === 1 && (n = p), p += 1) : v === "}" && m === "}" && d !== "\\" && s && (s -= 1, s === 0 && (n > e && (a.push(Object.freeze({ type: "string", start: e, end: n, value: t.slice(e, n) })), e = n), a.push(Object.freeze({ type: "part", start: n, end: p + 2, value: t.slice(e + 2, p).trim() })), p += 1, e = p + 1));
  }
  return e < r && a.push(Object.freeze({ type: "string", start: e, end: r, value: t.slice(e, r) })), il.set(t, Object.freeze(a)), il.get(t);
}
__name(ol, "ol");
u(ol, "parse");
var bi = /* @__PURE__ */ new WeakMap();
var Mh = /* @__PURE__ */ new WeakMap();
var gc = class gc2 {
  static {
    __name(this, "gc");
  }
  constructor(r, e) {
    this.expression = e, bi.set(this, r), r.updateParent("");
  }
  get attributeName() {
    return bi.get(this).attr.name;
  }
  get attributeNamespace() {
    return bi.get(this).attr.namespaceURI;
  }
  get value() {
    return Mh.get(this);
  }
  set value(r) {
    Mh.set(this, r || ""), bi.get(this).updateParent(r);
  }
  get element() {
    return bi.get(this).element;
  }
  get booleanValue() {
    return bi.get(this).booleanValue;
  }
  set booleanValue(r) {
    bi.get(this).booleanValue = r;
  }
};
u(gc, "AttributeTemplatePart");
var dn = gc;
var bc = class bc2 {
  static {
    __name(this, "bc");
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
u(bc, "AttributeValueSetter");
var aa = bc;
var _n = /* @__PURE__ */ new WeakMap();
var yc = class yc2 {
  static {
    __name(this, "yc");
  }
  constructor(r, e) {
    this.expression = e, _n.set(this, [r]), r.textContent = "";
  }
  get value() {
    return _n.get(this).map((r) => r.textContent).join("");
  }
  set value(r) {
    this.replace(r);
  }
  get previousSibling() {
    return _n.get(this)[0].previousSibling;
  }
  get nextSibling() {
    return _n.get(this)[_n.get(this).length - 1].nextSibling;
  }
  replace(...r) {
    let e = r.map((n) => typeof n == "string" ? new Text(n) : n);
    e.length || e.push(new Text("")), _n.get(this)[0].before(...e);
    for (let n of _n.get(this))
      n.remove();
    _n.set(this, e);
  }
};
u(yc, "NodeTemplatePart");
var Bt = yc;
function sa(t) {
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
__name(sa, "sa");
u(sa, "createProcessor");
function la(t, r) {
  t.value = String(r);
}
__name(la, "la");
u(la, "processPropertyIdentity");
function al(t, r) {
  return typeof r == "boolean" && t instanceof dn && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = r, true) : false;
}
__name(al, "al");
u(al, "processBooleanAttribute");
var wc = sa(la);
var u0 = sa((t, r) => {
  al(t, r) || la(t, r);
});
function* c0(t) {
  let r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = r.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let n = 0; n < e.attributes.length; n += 1) {
        let s = e.attributes.item(n);
        if (s && s.value.includes("{{")) {
          let a = new aa(e, s);
          for (let p of ol(s.value))
            if (p.type === "string")
              a.append(p.value);
            else {
              let v = new dn(a, p.value);
              a.append(v), yield v;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{")) {
      let n = ol(e.textContent);
      for (let s = 0; s < n.length; s += 1) {
        let a = n[s];
        a.end < e.textContent.length && e.splitText(a.end), a.type === "part" && (yield new Bt(e, a.value));
        break;
      }
    }
}
__name(c0, "c0");
u(c0, "collectParts");
var sl = /* @__PURE__ */ new WeakMap();
var ll = /* @__PURE__ */ new WeakMap();
var ua = class ua2 extends DocumentFragment {
  static {
    __name(this, "ua");
  }
  constructor(r, e, n = wc) {
    var s, a;
    super(), Object.getPrototypeOf(this) !== ua2.prototype && Object.setPrototypeOf(this, ua2.prototype), this.appendChild(r.content.cloneNode(true)), ll.set(this, Array.from(c0(this))), sl.set(this, n), (a = (s = sl.get(this)).createCallback) === null || a === void 0 || a.call(s, this, ll.get(this), e), sl.get(this).processCallback(this, ll.get(this), e);
  }
  update(r) {
    sl.get(this).processCallback(this, ll.get(this), r);
  }
};
u(ua, "TemplateInstance");
var ca = ua;
var xc = /* @__PURE__ */ new WeakMap();
var Ah = /* @__PURE__ */ new WeakMap();
var Ih = /* @__PURE__ */ new WeakMap();
var pa = class pa2 {
  static {
    __name(this, "pa");
  }
  constructor(r, e, n) {
    this.strings = r, this.values = e, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    pa2.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, e;
    if (xc.has(this.strings))
      return xc.get(this.strings);
    {
      let n = document.createElement("template"), s = this.strings.length - 1, a = this.strings.reduce((v, m, d) => v + m + (d < s ? `{{ ${d} }}` : ""), ""), p = (e = (r = pa2.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(a)) !== null && e !== void 0 ? e : a;
      return n.innerHTML = p, xc.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let e = this.template;
    if (Ah.get(r) !== e) {
      Ah.set(r, e);
      let n = new ca(e, this.values, this.processor);
      Ih.set(r, n), r instanceof Bt ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    Ih.get(r).update(this.values);
  }
};
u(pa, "TemplateResult");
var Or = pa;
Or.cspTrustedTypesPolicy = null;
function Y(t, r) {
  t.renderInto(r);
}
__name(Y, "Y");
u(Y, "render");
var Ph = /* @__PURE__ */ new WeakSet();
function zh(t) {
  return Ph.has(t);
}
__name(zh, "zh");
u(zh, "isDirective");
function Rh(t, r) {
  return zh(r) ? (r(t), true) : false;
}
__name(Rh, "Rh");
u(Rh, "processDirective");
function da(t) {
  return (...r) => {
    let e = t(...r);
    return Ph.add(e), e;
  };
}
__name(da, "da");
u(da, "directive");
var fa = /* @__PURE__ */ new WeakMap();
var ul = class ul2 {
  static {
    __name(this, "ul");
  }
  constructor(r, e) {
    this.element = r, this.type = e, this.element.addEventListener(this.type, this), fa.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), fa.get(this.element).delete(this.type));
  }
  static for(r) {
    fa.has(r.element) || fa.set(r.element, /* @__PURE__ */ new Map());
    let e = r.attributeName.slice(2), n = fa.get(r.element);
    return n.has(e) ? n.get(e) : new ul2(r.element, e);
  }
};
u(ul, "EventHandler");
var Ec = ul;
function Dh(t, r) {
  return t instanceof dn && t.attributeName.startsWith("on") ? (Ec.for(t).set(r), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(Dh, "Dh");
u(Dh, "processEvent");
function p0(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(p0, "p0");
u(p0, "isIterable");
function kh(t, r) {
  if (!p0(r))
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
__name(kh, "kh");
u(kh, "processIterable");
function Nh(t, r) {
  return r instanceof DocumentFragment && t instanceof Bt ? (r.childNodes.length && t.replace(...r.childNodes), true) : false;
}
__name(Nh, "Nh");
u(Nh, "processDocumentFragment");
function _h(t, r) {
  return r instanceof Or && t instanceof Bt ? (r.renderInto(t), true) : false;
}
__name(_h, "_h");
u(_h, "processSubTemplate");
function cl(t, r) {
  Rh(t, r) || al(t, r) || Dh(t, r) || _h(t, r) || Nh(t, r) || kh(t, r) || la(t, r);
}
__name(cl, "cl");
u(cl, "processPart");
var Sc = sa(cl);
function U(t, ...r) {
  return new Or(t, r, Sc);
}
__name(U, "U");
u(U, "html");
var Tc = /* @__PURE__ */ new WeakMap();
var d0 = da((...t) => (r) => {
  Tc.has(r) || Tc.set(r, { i: t.length });
  let e = Tc.get(r);
  for (let n = 0; n < t.length; n += 1)
    t[n] instanceof Promise ? Promise.resolve(t[n]).then((s) => {
      n < e.i && (e.i = n, cl(r, s));
    }) : n <= e.i && (e.i = n, cl(r, t[n]));
});
var f0 = da((t) => (r) => {
  var e, n;
  if (!(r instanceof Bt))
    return;
  let s = document.createElement("template"), a = (n = (e = Or.cspTrustedTypesPolicy) === null || e === void 0 ? void 0 : e.createHTML(t)) !== null && n !== void 0 ? n : t;
  s.innerHTML = a;
  let p = document.importNode(s.content, true);
  r.replace(...p.childNodes);
});
function be(t) {
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
__name(be, "be");
u(be, "IconableMixin");
var fn = u((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
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
  u(e, "IfableMixinClass"), M([k], e.prototype, "if", 2);
  let r = e;
  return r;
}
__name(Ue, "Ue");
u(Ue, "IfableMixin");
var pl = u((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
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
      if (fn(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-if]");
        B.notNull(v), v.disabled = false, this.ifTooltip = v._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Rt(v, { animation: false, content: "Set `if' Conditional" }), v.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (ni(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-angle]");
        B.notNull(v), v.disabled = false, this.angleTooltip = v._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Rt(v, { animation: false, content: "Change Angle" }), v.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (li(a.reference)) {
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
var Lh = jt(on(), 1);
var dl = jt(Zo(), 1);
var pr = u((t) => t != null && typeof t.resizeable == "boolean", "isResizeable");
function fl(t) {
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
      this.resizeableMachine = ht({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        fe("resizeable:init", {}, this);
      }, setInteract: (a, p) => {
        B.need(p.type === "SET_INTERACT", "event type must be SET_INTERACT"), B.notNull(this.resizeHandle);
        let v = (0, dl.default)(this.resizeHandle);
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
        this.debugResizeable && console.log(`resizeable: ${(0, Lh.format)(a.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(a) {
      a ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(a) {
      (0, dl.default)(this.resizeHandle).draggable({ modifiers: [dl.default.modifiers.snap({ targets: a, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
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
  u(e, "ResizeableMixinClass"), M([k], e.prototype, "span", 2), M([k], e.prototype, "resizeHandleX", 2), M([k], e.prototype, "resizeHandleY", 2), M([k], e.prototype, "debugResizeable", 2), M([k], e.prototype, "resizing", 2), M([Oe], e.prototype, "resizeHandle", 2);
  let r = e;
  return r;
}
__name(fl, "fl");
u(fl, "ResizeableMixin");
var Gh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var dr = class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "dr");
  }
  get operationType() {
    return du;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Gh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${du}"`;
  }
};
u(dr, "AntiControlGateElement"), dr = M([X], dr);
function jh(t) {
  return /^-?\d+$/.test(t);
}
__name(jh, "jh");
u(jh, "isNumeric");
function Ot(t, r = 4) {
  return (t >= 0 ? "+" : "") + t.toFixed(r);
}
__name(Ot, "Ot");
u(Ot, "forceSigned");
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
    return fu;
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
            <span class="font-mono font-bold">${Ot(this.d)}</span>, ϕ:
            <span class="font-mono font-bold">${Ot(this.phi, 2)}</span>, θ:
            <span class="font-mono font-bold">${Ot(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="font-mono font-bold">${Ot(this.x)}</span>, y:
            <span class="font-mono font-bold">${Ot(this.y)}</span>, z:
            <span class="font-mono font-bold">${Ot(this.z)}</span>
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
    return `"${fu}"`;
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
u(et, "BlochDisplayElement"), M([Oe], et.prototype, "body", 2), M([Oe], et.prototype, "vectorLine", 2), M([Oe], et.prototype, "vectorEnd", 2), M([Oe], et.prototype, "vector", 2), M([ft], et.prototype, "vectorEndCircles", 2), M([k], et.prototype, "x", 2), M([k], et.prototype, "y", 2), M([k], et.prototype, "z", 2), et = M([X], et);
var Hh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Dt = class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "Dt");
  }
  get operationType() {
    return hu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Hh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${hu}"`;
  }
};
u(Dt, "ControlGateElement"), Dt = M([X], Dt);
var Bh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var $t = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "$t");
  }
  get operationType() {
    return gs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Bh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${gs}<${this.if}"` : `"${gs}"`;
  }
};
u($t, "HGateElement"), $t = M([X], $t);
var $h = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var qt = class extends ge(ve($f(me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "qt");
  }
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return bs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml($h)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${bs}"` : `"${bs}>${this.flag}"`;
  }
};
u(qt, "MeasurementGateElement"), M([k], qt.prototype, "value", 2), qt = M([X], qt);
var qh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ft = class extends ge(ve(Ue(Le(zn(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Ft");
  }
  get operationType() {
    return ys;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(qh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ys}"` : `"${ys}(${this.angle.replace("/", "_")})"`;
  }
};
u(Ft, "PhaseGateElement"), Ft = M([X], Ft);
var hl = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var Fh = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var fr = class extends ge(ve(fl(me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "fr");
  }
  get operationType() {
    return mu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml(Fh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(hl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${mu}${this.span}"`;
  }
};
u(fr, "QftDaggerGateElement"), fr = M([X], fr);
var Uh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var hr = class extends ge(ve(fl(me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "hr");
  }
  get operationType() {
    return vu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml(Uh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(hl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${vu}${this.span}"`;
  }
};
u(hr, "QftGateElement"), hr = M([X], hr);
var Wh = `<svg
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
var Ut = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Ut");
  }
  get operationType() {
    return ws;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Wh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ws}<${this.if}"` : `"${ws}"`;
  }
};
u(Ut, "RnotGateElement"), Ut = M([X], Ut);
var Vh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Wt = class extends ge(ve(Ue(Le(zn(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Wt");
  }
  get operationType() {
    return xs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Vh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${xs}"` : `"${xs}(${this.angle.replace("/", "_")})"`;
  }
};
u(Wt, "RxGateElement"), Wt = M([X], Wt);
var Yh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = class extends ge(ve(Ue(Le(zn(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Vt");
  }
  get operationType() {
    return Es;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Yh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Es}"` : `"${Es}(${this.angle.replace("/", "_")})"`;
  }
};
u(Vt, "RyGateElement"), Vt = M([X], Vt);
var Xh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = class extends ge(ve(Ue(Le(zn(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Yt");
  }
  get operationType() {
    return Ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Xh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ss}"` : `"${Ss}(${this.angle.replace("/", "_")})"`;
  }
};
u(Yt, "RzGateElement"), Yt = M([X], Yt);
var Zh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "nr");
  }
  get operationType() {
    return Ts;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Zh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ts}<${this.if}"` : `"${Ts}"`;
  }
};
u(nr, "SDaggerGateElement"), nr = M([X], nr);
var Kh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "ir");
  }
  get operationType() {
    return Cs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Kh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Cs}<${this.if}"` : `"${Cs}"`;
  }
};
u(ir, "SGateElement"), ir = M([X], ir);
var Jh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var mr = class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "mr");
  }
  get operationType() {
    return gu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Jh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${gu}"`;
  }
};
u(mr, "SpacerGateElement"), mr = M([X], mr);
var Qh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Xt = class extends ge(ve(Le(me(Me(be(he(pe(HTMLElement)))))))) {
  static {
    __name(this, "Xt");
  }
  get operationType() {
    return bu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Qh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${bu}"`;
  }
};
u(Xt, "SwapGateElement"), Xt = M([X], Xt);
var em = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var or = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "or");
  }
  get operationType() {
    return Os;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(em)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Os}<${this.if}"` : `"${Os}"`;
  }
};
u(or, "TDaggerGateElement"), or = M([X], or);
var tm = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Zt");
  }
  get operationType() {
    return Ms;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(tm)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ms}<${this.if}"` : `"${Ms}"`;
  }
};
u(Zt, "TGateElement"), Zt = M([X], Zt);
var rm = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var kt = class extends ge(ve(me(be(he(pe(HTMLElement)))))) {
  static {
    __name(this, "kt");
  }
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Vd;
      case "1":
        return Yd;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml(rm)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
};
u(kt, "WriteGateElement"), M([k], kt.prototype, "value", 2), kt = M([X], kt);
var nm = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var Kt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Kt");
  }
  get operationType() {
    return As;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(nm)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${As}<${this.if}"` : `"${As}"`;
  }
};
u(Kt, "XGateElement"), Kt = M([X], Kt);
var im = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Jt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Jt");
  }
  get operationType() {
    return Is;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(im)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Is}<${this.if}"` : `"${Is}"`;
  }
};
u(Jt, "YGateElement"), Jt = M([X], Jt);
var om = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Qt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Qt");
  }
  get operationType() {
    return Ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(om)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ps}<${this.if}"` : `"${Ps}"`;
  }
};
u(Qt, "ZGateElement"), Qt = M([X], Qt);
var Xe = u((t) => t instanceof dr || t instanceof et || t instanceof Dt || t instanceof $t || t instanceof qt || t instanceof Ft || t instanceof fr || t instanceof hr || t instanceof Ut || t instanceof Wt || t instanceof Vt || t instanceof Yt || t instanceof nr || t instanceof ir || t instanceof mr || t instanceof Xt || t instanceof or || t instanceof Zt || t instanceof kt || t instanceof Kt || t instanceof Jt || t instanceof Qt, "isOperation");
var am = u((t) => t != null && t instanceof $t, "isHGateElement");
var sm = u((t) => t != null && t instanceof Kt, "isXGateElement");
var lm = u((t) => t != null && t instanceof Jt, "isYGateElement");
var um = u((t) => t != null && t instanceof Qt, "isZGateElement");
var ha = u((t) => t != null && t instanceof Ft, "isPhaseGateElement");
var cm = u((t) => t != null && t instanceof Zt, "isTGateElement");
var oD = u((t) => t != null && t instanceof or, "isTDaggerGateElement");
var pm = u((t) => t != null && t instanceof Ut, "isRnotGateElement");
var ml = u((t) => t != null && t instanceof Wt, "isRxGateElement");
var vl = u((t) => t != null && t instanceof Vt, "isRyGateElement");
var gl = u((t) => t != null && t instanceof Yt, "isRzGateElement");
var aD = u((t) => t != null && t instanceof ir, "isSGateElement");
var sD = u((t) => t != null && t instanceof nr, "isSDaggerGateElement");
var lD = u((t) => t != null && t instanceof mr, "isSpacerGateElement");
var dm = u((t) => t != null && t instanceof Xt, "isSwapGateElement");
var Cc = u((t) => t != null && t instanceof Dt, "isControlGateElement");
var Oc = u((t) => t != null && t instanceof dr, "isAntiControlGateElement");
var fm = u((t) => t != null && t instanceof et, "isBlochDisplayElement");
var uD = u((t) => t != null && t instanceof kt, "isWriteGateElement");
var hm = u((t) => t != null && t instanceof qt, "isMeasurementGateElement");
var mm = jt(on(), 1);
var ma = jt(Zo(), 1);
var Mc = u((t) => t !== null && t instanceof Mr, "isAngleSliderElement");
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
    this.angleSliderMachine = ht({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new zt("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, n) => {
      n.type === "SET_ANGLE" && (this.denominator = Do(this.angle));
    }, setAngleInRadian: (e, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, s] = this.findSnapAngle(this.radian);
      this.angle = s;
    }, setRadianInAngle: (e, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [s] = this.findSnapAngle(Gd(this.angle));
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
      this.debug && console.log(`circuit-step: ${(0, mm.format)(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, n, s) {
    n !== s && s !== null && (e === "data-angle" && s !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, ma.default)(this).unset();
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
    (0, ma.default)(this).draggable({ origin: "self", modifiers: [ma.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let n = ma.default.getElementRect(e.target).width, s = e.pageX / n;
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
u(Mr, "AngleSliderElement"), M([k], Mr.prototype, "angle", 2), M([k], Mr.prototype, "radian", 2), M([k], Mr.prototype, "denominator", 2), M([k], Mr.prototype, "disabled", 2), M([k], Mr.prototype, "debug", 2), Mr = M([X], Mr);
var yi = class extends HTMLElement {
  static {
    __name(this, "yi");
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
u(yi, "ButtonGroupElement"), M([ft], yi.prototype, "buttons", 2), yi = M([X], yi);
var no = jt(gm(), 1);
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
          throw new zt("unsupported qubit count", this.qubitCount);
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
          throw new zt("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let n = e.getAttribute("data-ket");
      return B.notNull(n), parseInt(n);
    }), B.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    no.default.mutate(() => {
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
        throw new zt("unsupported qubit count", this.qubitCount);
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
        throw new zt("unsupported qubit count", this.qubitCount);
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
        throw new zt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    B.notNull(this.window), B.notNull(this.innerContainer), this.qubitCount !== 0 && no.default.mutate(() => {
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
    this.window !== void 0 && this.innerContainer !== void 0 && (no.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, n = this.overscanColEndIndex, s = this.overscanRowStartIndex, a = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === n && this.lastRowStartIndex === s && this.lastRowEndIndex === a)) {
        for (let p = s; p <= a; p++)
          for (let v = e; v <= n; v++)
            (v < this.lastColStartIndex || this.lastColEndIndex < v || p < this.lastRowStartIndex || this.lastRowEndIndex < p) && this.qubitCirclePositions.push({ col: v, row: p });
        this.lastColStartIndex = e, this.lastColEndIndex = n, this.lastRowStartIndex = s, this.lastRowEndIndex = a;
      }
    }), no.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let n of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(n);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    no.default.mutate(() => {
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
        throw new zt("unsupported qubit count", this.qubitCount);
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
    let m = parseInt(a), d = parseFloat(p), f = parseFloat(v), g = new ko(d, f), w = g.abs(), S = g.phase() / Math.PI * 180, T = document.importNode(this.qubitCirclePopupTemplate.content, true), C = T.getElementById("qubit-circle-popup--ket-binary-value"), R = T.getElementById("qubit-circle-popup--ket-decimal-value"), _ = T.getElementById("qubit-circle-popup--amplitude"), L = T.getElementById("qubit-circle-popup--amplitude-real-value"), $ = T.getElementById("qubit-circle-popup--amplitude-imag-value"), I = T.getElementById("qubit-circle-popup--probability"), ee = T.getElementById("qubit-circle-popup--probability-value"), z = T.getElementById("qubit-circle-popup--phase"), H = T.getElementById("qubit-circle-popup--phase-value");
    B.notNull(_), B.notNull(L), B.notNull($), B.notNull(I), B.notNull(ee), B.notNull(z), B.notNull(H), C && (C.textContent = m.toString(2).padStart(this.qubitCount, "0")), R && (R.textContent = m.toString()), this.showQubitCirclePopupAmplitude ? (L.textContent = Ot(g.real, 5), $.textContent = `${Ot(g.imag, 5)}i`) : _.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Ot(w * w * 100, 4)}%` : I.style.display = "none", this.showQubitCirclePopupPhase ? H.textContent = `${Ot(S, 2)}\xB0` : z.style.display = "none";
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
u(at, "CircleNotationElement"), M([k], at.prototype, "qubitCount", 2), M([k], at.prototype, "qubitCircleSize", 2), M([k], at.prototype, "colCount", 2), M([k], at.prototype, "rowCount", 2), M([k], at.prototype, "paddingX", 2), M([k], at.prototype, "paddingY", 2), M([k], at.prototype, "overscanCount", 2), M([k], at.prototype, "colorPhase", 2), M([k], at.prototype, "qubitCirclePopupTemplateId", 2), M([k], at.prototype, "showQubitCirclePopupAmplitude", 2), M([k], at.prototype, "showQubitCirclePopupProbability", 2), M([k], at.prototype, "showQubitCirclePopupPhase", 2), M([Oe], at.prototype, "window", 2), M([Oe], at.prototype, "innerContainer", 2), M([ft], at.prototype, "qubitCircles", 2), at = M([X], at);
var wi = class extends HTMLElement {
  static {
    __name(this, "wi");
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
u(wi, "CircleNotationPanelElement"), M([Oe], wi.prototype, "circleNotation", 2), wi = M([X], wi);
var bm = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var ym = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var kr = class extends HTMLElement {
  static {
    __name(this, "kr");
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
            ${this.iconHtml(bm)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(ym)}
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
u(kr, "GateCarouselElement"), M([k], kr.prototype, "currentGateSetIndex", 2), M([Oe], kr.prototype, "contentClipper", 2), M([ft], kr.prototype, "gateSets", 2), M([ft], kr.prototype, "dots", 2), M([ft], kr.prototype, "popinAnimationGates", 2), kr = M([X], kr);
var io = class extends HTMLElement {
  static {
    __name(this, "io");
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
u(io, "InspectorButtonElement"), io = M([X], io);
var wt = class extends HTMLElement {
  static {
    __name(this, "wt");
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
    return $d(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), fn(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), ni(e)) {
      let n = Do(e.angle);
      ha(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (ml(e) || vl(e) || gl(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    li(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    if (!Mc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let n = e.target;
    if (!Mc(n))
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
    if (Bd(e)) {
      let n, s = Do(e);
      this.denominatorInput.value = s.toString(), this.denominatorLabel.textContent = s.toString(), this.backupCurrentDenominator(), jd(e, "-2\u03C0") ? (n = `-${s * 2}\u03C0/${s}`, this.angleInput.value = n) : Hd(e, "2\u03C0") ? (n = `${s * 2}\u03C0/${s}`, this.angleInput.value = n) : n = e, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    jh(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
};
u(wt, "OperationInspectorElement"), M([Oe], wt.prototype, "ifInput", 2), M([Oe], wt.prototype, "angleInputLabel", 2), M([Oe], wt.prototype, "angleInput", 2), M([Oe], wt.prototype, "angleSlider", 2), M([Oe], wt.prototype, "denominatorInput", 2), M([Oe], wt.prototype, "denominatorVariableLabel", 2), M([Oe], wt.prototype, "denominatorLabel", 2), M([Oe], wt.prototype, "reduceAngleFractionCheckbox", 2), M([Oe], wt.prototype, "flagInput", 2), M([k], wt.prototype, "conditionalGatePaneDisabled", 2), M([k], wt.prototype, "anglePaneDisabled", 2), M([k], wt.prototype, "conditionalFlagPaneDisabled", 2), wt = M([X], wt);
var bl = jt(xm(), 1);
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
    let n = document.importNode(this.popupTemplate.content, true), s = new bl.default(this.amplitude), a = n.getElementById("qubit-circle-popup--header"), p = n.getElementById("qubit-circle-popup--ket-binary-value"), v = n.getElementById("qubit-circle-popup--ket-decimal-value"), m = n.getElementById("qubit-circle-popup--amplitude"), d = n.getElementById("qubit-circle-popup--amplitude-real-value"), f = n.getElementById("qubit-circle-popup--amplitude-imag-value"), g = n.getElementById("qubit-circle-popup--probability"), w = n.getElementById("qubit-circle-popup--probability-value"), S = n.getElementById("qubit-circle-popup--phase"), T = n.getElementById("qubit-circle-popup--phase-value");
    B.notNull(a), B.notNull(p), B.notNull(v), B.notNull(m), B.notNull(d), B.notNull(f), B.notNull(g), B.notNull(w), B.notNull(S), B.notNull(T), this.showPopupHeader ? (p.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), v.textContent = this.ket.toString()) : a.style.display = "none", this.showPopupAmplitude ? (d.textContent = Ot(s.re, 5), f.textContent = `${Ot(s.im, 5)}i`) : m.style.display = "none", this.showPopupProbability ? w.textContent = `${Ot(this.magnitude * this.magnitude * 100, 4)}%` : g.style.display = "none", this.showPopupPhase ? T.textContent = `${Ot(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(n), e.setContent(C.innerHTML), e.show();
  }
  get magnitude() {
    return new bl.default(this.amplitude).abs();
  }
  get phase() {
    return new bl.default(this.amplitude).arg();
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
u(Nt, "QubitCircleElement"), M([k], Nt.prototype, "ket", 2), M([k], Nt.prototype, "qubitCount", 2), M([k], Nt.prototype, "amplitude", 2), M([k], Nt.prototype, "hidePhase", 2), M([k], Nt.prototype, "popupTemplateId", 2), M([k], Nt.prototype, "showPopupHeader", 2), M([k], Nt.prototype, "showPopupAmplitude", 2), M([k], Nt.prototype, "showPopupProbability", 2), M([k], Nt.prototype, "showPopupPhase", 2), M([k], Nt.prototype, "darkMode", 2), Nt = M([X], Nt);
var Tm = jt(on(), 1);
var Em = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Sm = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Fr = class extends HTMLElement {
  static {
    __name(this, "Fr");
  }
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = ht({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
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
      this.debug && console.log(`run-circuit-button: ${(0, Tm.format)(e.value)}`);
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
    return U([Em]);
  }
  get tailSpinIcon() {
    return U([Sm]);
  }
};
u(Fr, "RunCircuitButtonElement"), M([k], Fr.prototype, "running", 2), M([k], Fr.prototype, "debug", 2), M([Oe], Fr.prototype, "body", 2), M([Oe], Fr.prototype, "ripple", 2), Fr = M([X], Fr);
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
u(Nr, "SlideInElement"), M([k], Nr.prototype, "direction", 2), M([k], Nr.prototype, "directionDesktop", 2), M([k], Nr.prototype, "duration", 2), M([k], Nr.prototype, "marginTop", 2), M([k], Nr.prototype, "marginBottom", 2), Nr = M([X], Nr);
var Ur = class extends HTMLElement {
  static {
    __name(this, "Ur");
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
u(Ur, "CircuitBlockElement"), M([k], Ur.prototype, "comment", 2), M([k], Ur.prototype, "finalized", 2), Ur = M([X], Ur);
var Cm = jt(on(), 1);
var Wr = u((t) => t != null && t instanceof pt, "isCircuitStepElement");
var Ce = u((t, r) => Array.from(t.reduce((e, n, s, a) => {
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
    this.circuitStepMachine = ht({ id: "circuit-step", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones"] }, DELETE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, n) => {
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
      this.debug && console.log(`circuit-step: ${(0, Cm.format)(e.value)}`);
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
    return B.need(0 <= e && e <= No.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
      _o(p.operation) && (p.operation.controls = [], p.operation.antiControls = []);
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
        if (!ha(v.operation))
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
    let n = this.controllableDropzones(e), s = this.controlGateDropzones, a = this.antiControlGateDropzones, p = [...new Set(n.map((T) => T.operationName))], v = this.numControlGateDropzones(e, p), m = s.map((T) => this.bit(T)), d = a.map((T) => this.bit(T)), f = m.concat(d), g = v === null ? f : f.slice(0, v), w = n.map((T) => this.bit(T)), S = g.concat(w);
    for (let [T, C] of Object.entries(s)) {
      let R = C.operation;
      C.connectBottom = S.some((_) => this.bit(C) < _), C.connectTop = S.some((_) => this.bit(C) > _), v === null || v !== null && parseInt(T) < v ? R.enable() : (C.connectTop = Math.max(...S) > this.bit(C), R.disable());
    }
    for (let [T, C] of Object.entries(a)) {
      let R = C.operation;
      C.connectBottom = S.some((_) => this.bit(C) < _), C.connectTop = S.some((_) => this.bit(C) > _), v === null || v !== null && parseInt(T) < v ? R.enable() : (C.connectTop = Math.max(...S) > this.bit(C), R.disable());
    }
    for (let T of n) {
      if (!_o(T.operation))
        throw new Error(`${T.operation} isn't controllable.`);
      T.operation.controls = this.controlBits(T, m, e), T.operation.antiControls = d, T.connectTop = S.some((C) => C < this.bit(T)), T.connectBottom = S.some((C) => C > this.bit(T));
    }
  }
  updateFreeDropzoneConnections(e) {
    let n = this.controllableDropzones(e), s = this.controlGateDropzones.filter((f) => Cc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), a = this.antiControlGateDropzones.filter((f) => Oc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), p = n.map((f) => this.bit(f)), v = s.concat(a).concat(p), m = Math.min(...v), d = Math.max(...v);
    for (let f of this.freeDropzones)
      m < this.bit(f) && this.bit(f) < d && (f.connectTop = true, f.connectBottom = true);
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
    return this.occupiedDropzones.filter((e) => Cc(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => Oc(e.operation));
  }
  numControlGateDropzones(e, n) {
    if (e === void 0)
      return null;
    let s = 0;
    return n.includes("h-gate") && !e.disableCh && e.maxChControlGates > s && (s = e.maxChControlGates), n.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > s && (s = e.maxCnotControlGates), n.includes("y-gate") && !e.disableCy && e.maxCyControlGates > s && (s = e.maxCyControlGates), n.includes("z-gate") && !e.disableCz && e.maxCzControlGates > s && (s = e.maxCzControlGates), n.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > s && (s = e.maxCphaseControlGates), n.includes("t-gate") && !e.disableCt && e.maxCtControlGates > s && (s = e.maxCtControlGates), n.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > s && (s = e.maxCrnotControlGates), n.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > s && (s = e.maxCrxControlGates), n.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > s && (s = e.maxCryControlGates), n.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > s && (s = e.maxCrzControlGates), n.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > s && (s = e.maxCswapControlGates), s === 0 ? null : s;
  }
  controllableDropzones(e) {
    let n = 0, s = 0, a = 0, p = 0, v = 0, m = 0, d = 0, f = 0, g = 0, w = 0;
    return this.occupiedDropzones.filter((S) => _o(S.operation)).filter((S) => e === void 0 ? true : am(S.operation) ? (n += 1, e.maxChTargetGates !== 0 && n > e.maxChTargetGates ? false : !e.disableCh) : sm(S.operation) ? (s += 1, e.maxCnotTargetGates !== 0 && s > e.maxCnotTargetGates ? false : !e.disableCnot) : lm(S.operation) ? (a += 1, e.maxCyTargetGates !== 0 && a > e.maxCyTargetGates ? false : !e.disableCy) : um(S.operation) ? (p += 1, e.maxCzTargetGates !== 0 && p > e.maxCzTargetGates ? false : !e.disableCz) : ha(S.operation) ? (v += 1, e.maxCphaseTargetGates !== 0 && v > e.maxCphaseTargetGates ? false : !e.disableCphase) : cm(S.operation) ? (m += 1, e.maxCtTargetGates !== 0 && m > e.maxCtTargetGates ? false : !e.disableCt) : pm(S.operation) ? (d += 1, e.maxCrnotTargetGates !== 0 && d > e.maxCrnotTargetGates ? false : !e.disableCrnot) : ml(S.operation) ? (f += 1, e.maxCrxTargetGates !== 0 && f > e.maxCrxTargetGates ? false : !e.disableCrx) : vl(S.operation) ? (g += 1, e.maxCryTargetGates !== 0 && g > e.maxCryTargetGates ? false : !e.disableCry) : gl(S.operation) ? (w += 1, e.maxCrzTargetGates !== 0 && w > e.maxCrzTargetGates ? false : !e.disableCrz) : dm(S.operation) ? !e.disableCswap : true);
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
    for (let [n, s] of Ce(this.operations, (a) => a.constructor))
      switch (n) {
        case $t: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Kt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Jt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Qt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Ft: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((R) => R.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case ir: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case nr: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Zt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case or: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Ut: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Wt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((R) => R.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Vt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((R) => R.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Yt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((R) => R.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
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
          for (let [p, v] of Ce(a, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), g = { type: d, span: p, targets: f };
            e.push(g);
          }
          break;
        }
        case fr: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), g = { type: d, span: p, targets: f };
            e.push(g);
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
        case Dt: {
          let a = s.filter((v) => !v.disabled);
          if (a.length < 2 || this.operations.some((v) => _o(v) && v.controls.length > 0))
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
        case kt: {
          let a = s;
          for (let [, p] of Ce(a, (v) => v.value)) {
            let v = p.map((m) => m.bit);
            e.push({ type: p[0].operationType, targets: v });
          }
          break;
        }
        case qt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.flag)) {
            let m = v.map((g) => g.bit), f = { type: v[0].operationType, targets: m };
            p !== "" && (f.flag = p), e.push(f);
          }
          break;
        }
        default:
          throw new zt("Unrecognized operation", { klass: n });
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
u(pt, "CircuitStepElement"), M([k], pt.prototype, "active", 2), M([k], pt.prototype, "breakpoint", 2), M([k], pt.prototype, "shadow", 2), M([k], pt.prototype, "keep", 2), M([k], pt.prototype, "debug", 2), M([ft], pt.prototype, "dropzones", 2), M([ft], pt.prototype, "freeDropzones", 2), M([ft], pt.prototype, "occupiedDropzones", 2), pt = M([X], pt);
var Mm = jt(Zo(), 1);
var Om = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var ga = u((t) => t != null && t instanceof de, "isCircuitDropzoneElement");
var va;
var de = class extends HTMLElement {
  static {
    __name(this, "de");
  }
  constructor() {
    super(...arguments);
    Ja(this, va, null);
    this.occupied = false;
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.targets = "circuit-step.dropzones circuit-step.freeDropzones";
    this.debug = false;
    this.circuitDropzoneMachine = ht({ id: "circuit-dropzone", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
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
    let { signal: e } = Qa(this, va, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Ka(this, va)) == null || e.abort();
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
    return B.notNull(e), Wr(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, Mm.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    return U([Om]);
  }
};
va = /* @__PURE__ */ new WeakMap(), u(de, "CircuitDropzoneElement"), M([k], de.prototype, "occupied", 2), M([k], de.prototype, "operationName", 2), M([k], de.prototype, "inputWireQuantum", 2), M([k], de.prototype, "outputWireQuantum", 2), M([k], de.prototype, "connectTop", 2), M([k], de.prototype, "connectBottom", 2), M([k], de.prototype, "shadow", 2), M([k], de.prototype, "targets", 2), M([k], de.prototype, "debug", 2), de = M([X], de);
var Am = jt(on(), 1);
var hn = class extends HTMLElement {
  static {
    __name(this, "hn");
  }
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ht({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let s = n.operation;
      pl(s) && s.menu && s.hideMenu();
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
      if (!ga(a))
        throw new Error(`${a} is not a circuit dropzone`);
      B.notNull(a.circuitStep);
      let p = a.circuitStep.dropzones.indexOf(a), m = this.circuit.resizeHandleSnapTargetAt(n.x, n.y).wireIndex - p + 1;
      if (!Ud(m))
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
      this.circuit.wireCount < No.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      pl(s) && s.initMenu();
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
      this.debug && console.log(`circuit-editor: ${(0, Am.format)(e.value)}`);
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
    if (Vs(n))
      n.draggable = true;
    else
      throw new zt("Not a draggable element.", { el: n });
  }
  enableResizing(e) {
    let n = e.target;
    if (pr(n))
      n.resizeable = true;
    else
      throw new zt("Not a resizeable element.", { el: n });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let s of this.circuit.operations)
        pl(s) && s.initMenu();
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
    if (!fn(n))
      throw new Error(`${n} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: n });
  }
  showOperationInspectorAngle(e) {
    let n = e.target;
    if (!ni(n))
      throw new Error(`${n} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: n });
  }
  showOperationInspectorFlag(e) {
    let n = e.target;
    if (!li(n))
      throw new Error(`${n} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: n });
  }
  setOperationIf(e) {
    let n = e.target, s = this.activeOperation;
    if (!fn(s))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: s, if: n.if });
  }
  setOperationAngle(e) {
    let n = e.target, s = this.activeOperation;
    if (B.notNull(s), !ni(s))
      throw new Error(`${s.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: s, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let n = e.target, s = this.activeOperation;
    if (!li(s))
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
    if (!Wr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: n });
  }
  snapStep(e) {
    let n = e.target;
    if (!Wr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: n });
  }
  unsnapStep(e) {
    let n = e.target;
    if (!Wr(n))
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
    if (!Wr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: n });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!Wr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: n });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
};
u(hn, "CircuitEditorElement"), M([k], hn.prototype, "debug", 2), M([Oe], hn.prototype, "circuit", 2), M([Oe], hn.prototype, "inspectorButton", 2), hn = M([X], hn);
var ba;
var oo = class extends HTMLElement {
  static {
    __name(this, "oo");
  }
  constructor() {
    super(...arguments);
    Ja(this, ba, null);
  }
  connectedCallback() {
    let { signal: e } = Qa(this, ba, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Ka(this, ba)) == null || e.abort();
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
    Vs(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), pr(e) && (e.resizeable = true), vc(e) && e.initHelp();
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
    this.assertOperation(s), vc(n) && n.disableHelp(), this.prepend(s), this.initOperation(s);
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
ba = /* @__PURE__ */ new WeakMap(), u(oo, "PaletteDropzoneElement"), oo = M([X], oo);
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
    this.quantumCircuitMachine = ht({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
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
      let e = B.urlJson;
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
    let n = this.applyOperationToTargets(() => new Dt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new et(), ...e), this;
  }
  write(e, ...n) {
    return this.applyOperationToTargets(() => {
      let s = new kt();
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
      s.dropzoneAt(a).put(new Dt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(s), this;
  }
  controlledU(e, n, s) {
    let a = [].concat(n), p = [].concat(s), v = a.concat(p), m = Math.max(...v) + 1, d = this.appendStepWithDropzones(m);
    for (let f of a)
      d.dropzoneAt(f).put(new Dt());
    for (let f of p)
      d.dropzoneAt(f).put(new e());
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
    let s = null, a = B.safeJsonParse(e);
    if (a.isOk())
      s = a.value;
    else {
      console.error(a.error.message), console.error(e);
      return;
    }
    this.circuitTitle = (s.title || "").trim();
    let p = false;
    for (let v of s.cols) {
      let m = this.appendStep();
      p && (m.keep = true, p = false);
      let d = [];
      for (let f of v) {
        switch (true) {
          case /^\|0>$/.test(f): {
            let g = new kt();
            g.value = "0", d.push(g), m.append(new de());
            break;
          }
          case /^\|1>$/.test(f): {
            let g = new kt();
            g.value = "1", d.push(g), m.append(new de());
            break;
          }
          case /^H/.test(f): {
            let g = new $t();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case (/^X$/.test(f) || /^X<(.+)$/.test(f)): {
            let g = new Kt();
            g.if = f.slice(2).trim(), d.push(g), m.append(new de());
            break;
          }
          case /^Y/.test(f): {
            let g = new Jt();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^Z/.test(f): {
            let g = new Qt();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^P/.test(f): {
            let g = new Ft();
            g.angle = this.angleParameter(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^T†/.test(f): {
            let g = new or();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^T/.test(f): {
            let g = new Zt();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^X\^½/.test(f): {
            let g = new Ut();
            g.if = this.ifVariable(f.slice(3)), d.push(g), m.append(new de());
            break;
          }
          case /^Rx/.test(f): {
            let g = new Wt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^Ry/.test(f): {
            let g = new Vt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^Rz/.test(f): {
            let g = new Yt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^…/.test(f): {
            let g = new mr();
            d.push(g), m.append(new de());
            break;
          }
          case /^QFT\d/.test(f): {
            let g = new hr(), w = parseInt(f.slice(3), 10);
            g.span = w, d.push(g);
            for (let S = 0; S < w; S++)
              m.append(new de());
            break;
          }
          case /^QFT†\d/.test(f): {
            let g = new fr(), w = parseInt(f.slice(4), 10);
            g.span = w, d.push(g), m.append(new de());
            for (let S = 0; S < w; S++)
              m.append(new de());
            break;
          }
          case /^Swap$/.test(f): {
            let g = new Xt();
            d.push(g), m.append(new de());
            break;
          }
          case /^S†/.test(f): {
            let g = new nr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^S/.test(f): {
            let g = new ir();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^•$/.test(f): {
            let g = new Dt();
            d.push(g), m.append(new de());
            break;
          }
          case /^◦$/.test(f): {
            let g = new dr();
            d.push(g), m.append(new de());
            break;
          }
          case /^Bloch$/.test(f): {
            let g = new et();
            d.push(g), m.append(new de());
            break;
          }
          case /^Measure/.test(f): {
            let g = new qt(), w = ((/^>(.+)$/.exec(f.slice(7)) || [])[1] || "").trim();
            g.flag = w, d.push(g), m.append(new de());
            break;
          }
          case /^[[{](.+)$/.test(f): {
            let g = f.slice(1);
            m.remove(), n = new Ur(), n.comment = g, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
            break;
          }
          case /^[\]}]$/.test(f): {
            m.remove(), n.finalize(), p = true;
            break;
          }
          default: {
            if (f !== 1)
              throw new Error(`Unknown operation: ${f}`);
            m.append(new de()), d.push(null);
          }
        }
        for (let [g, w] of Object.entries(d))
          w !== null && m.dropzoneAt(parseInt(g)).put(w);
        m.updateOperationAttributes();
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
          let v = p.map((g) => s.bit(g)), m = s.bit(a), d = v[0] === m ? v[1] : v[0], f = s.dropzoneAt(d);
          a.inputWireQuantum = n, a.outputWireQuantum = f.inputWireQuantum, n = f.inputWireQuantum;
        } else
          a.inputWireQuantum = n, a.outputWireQuantum = n;
      } else
        a.inputWireQuantum = n, a.outputWireQuantum = n;
    }
  }
  updateChangedWire(e) {
    let n = e.target;
    if (!Wr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let s = e.detail.dropzone;
    if (!ga(s))
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
      for (let [d, f] of Object.entries(v.dropzones)) {
        let g = parseInt(d), w = f.snapTarget, S = this.isVertical ? w.y : w.x, T = this.isVertical ? w.x : w.y;
        if (m === 0 && v.dropzones[g + s - 1] !== void 0) {
          let R = S - e.snapRange * 0.75;
          this.isVertical ? n.push({ x: T, y: R }) : n.push({ x: R, y: T }), this.snapTargets[R] === void 0 && (this.snapTargets[R] = {}), this.snapTargets[R][T] === void 0 && (this.snapTargets[R][T] = { dropzone: null, stepIndex: -1, wireIndex: g });
        }
        if (s === 1)
          (f === a || !f.occupied) && n.push(w);
        else if (!f.occupied && g + s <= v.dropzones.length && n.push(w), f === a) {
          n.push(w);
          for (let R = 1; R < s && g + R < v.dropzones.length; R++) {
            let _ = v.dropzones[g + R];
            B.notNull(_), n.push(_.snapTarget);
          }
        }
        let C = S + e.snapRange * 0.75;
        v.dropzones[g + s - 1] !== void 0 && (this.isVertical ? n.push({ x: T, y: C }) : n.push({ x: C, y: T })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][T] === void 0 && (this.snapTargets[C][T] = { dropzone: null, stepIndex: m, wireIndex: g }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][T] === void 0 && (this.snapTargets[S][T] = { dropzone: f, stepIndex: null, wireIndex: g });
      }
    }
    e.snapTargets = n;
  }
  setResizeHandleSnapTargets(e) {
    if (!pr(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!ga(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let n = e.dropzone.circuitStep;
    B.notNull(n);
    let s = n.freeDropzones, a = e.dropzone;
    s.push(a);
    let p = [];
    this.resizeHandleSnapTargets = {};
    for (let [v, m] of Object.entries(n.dropzones)) {
      let d = m.resizeHandleSnapTarget, f = this.isVertical ? d.y : d.x, g = this.isVertical ? d.x : d.y, w = parseInt(v) % this.wireCount;
      if (m.occupied || p.push(d), m === a) {
        p.push(d);
        let S = e.span;
        for (let T = 1; T < S; T++) {
          let C = n.dropzones[parseInt(v) + T];
          B.notNull(C), p.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[f] === void 0 && (this.resizeHandleSnapTargets[f] = {}), this.resizeHandleSnapTargets[f][g] === void 0 && (this.resizeHandleSnapTargets[f][g] = { dropzone: m, stepIndex: null, wireIndex: w });
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
u(se, "QuantumCircuitElement"), M([k], se.prototype, "minStepCount", 2), M([k], se.prototype, "minWireCount", 2), M([k], se.prototype, "editing", 2), M([k], se.prototype, "updateUrl", 2), M([k], se.prototype, "json", 2), M([k], se.prototype, "circuitTitle", 2), M([k], se.prototype, "debug", 2), M([k], se.prototype, "chDisabled", 2), M([k], se.prototype, "chMaxControlGates", 2), M([k], se.prototype, "chMaxTargetGates", 2), M([k], se.prototype, "cnotDisabled", 2), M([k], se.prototype, "cnotMaxControlGates", 2), M([k], se.prototype, "cnotMaxTargetGates", 2), M([k], se.prototype, "cyDisabled", 2), M([k], se.prototype, "cyMaxControlGates", 2), M([k], se.prototype, "cyMaxTargetGates", 2), M([k], se.prototype, "czDisabled", 2), M([k], se.prototype, "czMaxControlGates", 2), M([k], se.prototype, "czMaxTargetGates", 2), M([k], se.prototype, "cphaseDisabled", 2), M([k], se.prototype, "cphaseMaxControlGates", 2), M([k], se.prototype, "cphaseMaxTargetGates", 2), M([k], se.prototype, "ctDisabled", 2), M([k], se.prototype, "ctMaxControlGates", 2), M([k], se.prototype, "ctMaxTargetGates", 2), M([k], se.prototype, "crnotDisabled", 2), M([k], se.prototype, "crnotMaxControlGates", 2), M([k], se.prototype, "crnotMaxTargetGates", 2), M([k], se.prototype, "crxDisabled", 2), M([k], se.prototype, "crxMaxControlGates", 2), M([k], se.prototype, "crxMaxTargetGates", 2), M([k], se.prototype, "cryDisabled", 2), M([k], se.prototype, "cryMaxControlGates", 2), M([k], se.prototype, "cryMaxTargetGates", 2), M([k], se.prototype, "crzDisabled", 2), M([k], se.prototype, "crzMaxControlGates", 2), M([k], se.prototype, "crzMaxTargetGates", 2), M([k], se.prototype, "cswapDisabled", 2), M([k], se.prototype, "cswapMaxControlGates", 2), M([k], se.prototype, "swapDisabled", 2), M([k], se.prototype, "controlControlDisabled", 2), M([k], se.prototype, "controlControlMaxTargetGates", 2), M([k], se.prototype, "phasePhaseDisabled", 2), M([k], se.prototype, "phasePhaseMaxTargetGates", 2), M([ft], se.prototype, "blocks", 2), se = M([X], se);
var Vr = class extends HTMLElement {
  static {
    __name(this, "Vr");
  }
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("draggable:delete", this.maybeUpdateUrl), this.addEventListener("draggable:delete", this.freshRun), this.addEventListener("menuable:menu-delete", this.maybeUpdateUrl), this.addEventListener("menuable:menu-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step:mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step:mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step:qpu-operation-snap", this.freshRun), this.addEventListener("circuit-step:qpu-operation-unsnap", this.freshRun), this.addEventListener("circuit-step:update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step:qpu-operation-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step:qpu-operation-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.freshRun), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
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
          if (fm(d)) {
            let f = n.blochVectors[m];
            d.x = f[0], d.y = f[1], d.z = f[2];
          }
        }
        if (n.measuredBits) {
          let v = n.measuredBits;
          for (let m in v) {
            let d = parseInt(m), f = p.dropzoneAt(d).operation;
            hm(f) && (f.value = v[d].toString());
          }
        }
        for (let v of p.dropzones) {
          let m = v.operation;
          fn(m) && m.if !== "" && (m.disabled = !n.flags[m.if]);
        }
        if (s === n.step) {
          let v = {};
          for (let m in n.amplitudes) {
            let d = n.amplitudes[m];
            v[m] = new ko(d[0], d[1]);
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
        throw new zt("Unknown service worker message", { data: n });
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
    let a = this.circuit.toJson(), p = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: p, stepIndex: n, circuitJson: a, invalidateCaches: e, steps: s, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
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
u(Vr, "QuantumSimulatorElement"), M([k], Vr.prototype, "updateUrl", 2), M([Oe], Vr.prototype, "circuit", 2), M([Oe], Vr.prototype, "circleNotation", 2), M([ft], Vr.prototype, "runCircuitButtons", 2), Vr = M([X], Vr);

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
  ko as Complex
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
