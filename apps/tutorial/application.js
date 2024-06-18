var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var sg = Object.create;
var To = Object.defineProperty;
var Sp = Object.getOwnPropertyDescriptor;
var lg = Object.getOwnPropertyNames;
var xp = Object.getOwnPropertySymbols;
var ug = Object.getPrototypeOf;
var Tp = Object.prototype.hasOwnProperty;
var cg = Object.prototype.propertyIsEnumerable;
var Ep = /* @__PURE__ */ __name((t, r, e) => r in t ? To(t, r, { enumerable: true, configurable: true, writable: true, value: e }) : t[r] = e, "Ep");
var Cp = /* @__PURE__ */ __name((t, r) => {
  for (var e in r || (r = {}))
    Tp.call(r, e) && Ep(t, e, r[e]);
  if (xp)
    for (var e of xp(r))
      cg.call(r, e) && Ep(t, e, r[e]);
  return t;
}, "Cp");
var u = /* @__PURE__ */ __name((t, r) => To(t, "name", { value: r, configurable: true }), "u");
var Tt = /* @__PURE__ */ __name((t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports), "Tt");
var pg = /* @__PURE__ */ __name((t, r, e, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let s of lg(r))
      !Tp.call(t, s) && s !== e && To(t, s, { get: () => r[s], enumerable: !(n = Sp(r, s)) || n.enumerable });
  return t;
}, "pg");
var er = /* @__PURE__ */ __name((t, r, e) => (e = t != null ? sg(ug(t)) : {}, pg(r || !t || !t.__esModule ? To(e, "default", { value: t, enumerable: true }) : e, t)), "er");
var M = /* @__PURE__ */ __name((t, r, e, n) => {
  for (var s = n > 1 ? void 0 : n ? Sp(r, e) : r, a = t.length - 1, p; a >= 0; a--)
    (p = t[a]) && (s = (n ? p(r, e, s) : p(s)) || s);
  return n && s && To(r, e, s), s;
}, "M");
var Op = /* @__PURE__ */ __name((t, r, e) => {
  if (!r.has(t))
    throw TypeError("Cannot " + e);
}, "Op");
var Xa = /* @__PURE__ */ __name((t, r, e) => (Op(t, r, "read from private field"), e ? e.call(t) : r.get(t)), "Xa");
var Za = /* @__PURE__ */ __name((t, r, e) => {
  if (r.has(t))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(t) : r.set(t, e);
}, "Za");
var Ka = /* @__PURE__ */ __name((t, r, e, n) => (Op(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e), "Ka");
var Ip = Tt((Zl, Mp) => {
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
      var T = 0, C = 1, R = 1, _ = 0, L = 0, B = 0, A = 1, ee = 1, z = 0, H = 1, te = 1, Q = 1, ue = 1e7, K;
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
              if (H[z] === "-" ? (R = -1, z++) : H[z] === "+" && z++, H.length === z + 1 ? L = n(H[z++], R) : H[z + 1] === "." || H[z] === "." ? (H[z] !== "." && (_ = n(H[z++], R)), z++, (z + 1 === H.length || H[z + 1] === "(" && H[z + 3] === ")" || H[z + 1] === "'" && H[z + 3] === "'") && (L = n(H[z], R), A = Math.pow(10, H[z].length), z++), (H[z] === "(" && H[z + 2] === ")" || H[z] === "'" && H[z + 2] === "'") && (B = n(H[z + 1], R), ee = Math.pow(10, H[z + 1].length) - 1, z += 3)) : H[z + 1] === "/" || H[z + 1] === ":" ? (L = n(H[z], R), A = n(H[z + 2], 1), z += 3) : H[z + 3] === "/" && H[z + 1] === " " && (_ = n(H[z], R), L = n(H[z + 2], R), A = n(H[z + 4], 1), z += 5), H.length <= z) {
                C = A * ee, R = T = B + C * _ + ee * L;
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
    }) : typeof Zl == "object" ? (Object.defineProperty(g, "__esModule", { value: true }), g.default = g, g.Fraction = g, Mp.exports = g) : t.Fraction = g;
  })(Zl);
});
var Ld = Tt((CE, _d) => {
  "use strict";
  var kd = u((t = 0) => (r) => `\x1B[${38 + t};5;${r}m`, "wrapAnsi256"), Nd = u((t = 0) => (r, e, n) => `\x1B[${38 + t};2;${r};${e};${n}m`, "wrapAnsi16m");
  function Dg() {
    let t = /* @__PURE__ */ new Map(), r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    r.color.gray = r.color.blackBright, r.bgColor.bgGray = r.bgColor.bgBlackBright, r.color.grey = r.color.blackBright, r.bgColor.bgGrey = r.bgColor.bgBlackBright;
    for (let [e, n] of Object.entries(r)) {
      for (let [s, a] of Object.entries(n))
        r[s] = { open: `\x1B[${a[0]}m`, close: `\x1B[${a[1]}m` }, n[s] = r[s], t.set(a[0], a[1]);
      Object.defineProperty(r, e, { value: n, enumerable: false });
    }
    return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi256 = kd(), r.color.ansi16m = Nd(), r.bgColor.ansi256 = kd(10), r.bgColor.ansi16m = Nd(10), Object.defineProperties(r, { rgbToAnsi256: { value: (e, n, s) => e === n && n === s ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(s / 255 * 5), enumerable: false }, hexToRgb: { value: (e) => {
      let n = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(e.toString(16));
      if (!n)
        return [0, 0, 0];
      let { colorString: s } = n.groups;
      s.length === 3 && (s = s.split("").map((p) => p + p).join(""));
      let a = Number.parseInt(s, 16);
      return [a >> 16 & 255, a >> 8 & 255, a & 255];
    }, enumerable: false }, hexToAnsi256: { value: (e) => r.rgbToAnsi256(...r.hexToRgb(e)), enumerable: false } }), r;
  }
  __name(Dg, "Dg");
  u(Dg, "assembleStyles");
  Object.defineProperty(_d, "exports", { enumerable: true, get: Dg });
});
var Fo = Tt((Xi) => {
  "use strict";
  Object.defineProperty(Xi, "__esModule", { value: true });
  Xi.printIteratorEntries = Ng;
  Xi.printIteratorValues = _g;
  Xi.printListItems = Lg;
  Xi.printObjectProperties = Gg;
  var kg = u((t, r) => {
    let e = Object.keys(t), n = r !== null ? e.sort(r) : e;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((s) => {
      Object.getOwnPropertyDescriptor(t, s).enumerable && n.push(s);
    }), n;
  }, "getKeysOfEnumerableProperties");
  function Ng(t, r, e, n, s, a, p = ": ") {
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
  __name(Ng, "Ng");
  u(Ng, "printIteratorEntries");
  function _g(t, r, e, n, s, a) {
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
  __name(_g, "_g");
  u(_g, "printIteratorValues");
  function Lg(t, r, e, n, s, a) {
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
  __name(Lg, "Lg");
  u(Lg, "printListItems");
  function Gg(t, r, e, n, s, a) {
    let p = "", v = kg(t, r.compareKeys);
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
  __name(Gg, "Gg");
  u(Gg, "printObjectProperties");
});
var $d = Tt((Cn) => {
  "use strict";
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.test = Cn.serialize = Cn.default = void 0;
  var Gd = Fo(), ku = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, jg = typeof ku == "function" && ku.for ? ku.for("jest.asymmetricMatcher") : 1267621, Is = " ", jd = u((t, r, e, n, s, a) => {
    let p = t.toString();
    if (p === "ArrayContaining" || p === "ArrayNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Is}[${(0, Gd.printListItems)(t.sample, r, e, n, s, a)}]`;
    if (p === "ObjectContaining" || p === "ObjectNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Is}{${(0, Gd.printObjectProperties)(t.sample, r, e, n, s, a)}}`;
    if (p === "StringMatching" || p === "StringNotMatching" || p === "StringContaining" || p === "StringNotContaining")
      return p + Is + a(t.sample, r, e, n, s);
    if (typeof t.toAsymmetricMatcher != "function")
      throw new Error(`Asymmetric matcher ${t.constructor.name} does not implement toAsymmetricMatcher()`);
    return t.toAsymmetricMatcher();
  }, "serialize");
  Cn.serialize = jd;
  var Hd = u((t) => t && t.$$typeof === jg, "test");
  Cn.test = Hd;
  var Hg = { serialize: jd, test: Hd }, $g = Hg;
  Cn.default = $g;
});
var Wd = Tt((On) => {
  "use strict";
  Object.defineProperty(On, "__esModule", { value: true });
  On.test = On.serialize = On.default = void 0;
  var Bd = Fo(), Bg = " ", qd = ["DOMStringMap", "NamedNodeMap"], qg = /^(HTML\w*Collection|NodeList)$/, Fg = u((t) => qd.indexOf(t) !== -1 || qg.test(t), "testName"), Fd = u((t) => t && t.constructor && !!t.constructor.name && Fg(t.constructor.name), "test");
  On.test = Fd;
  var Ug = u((t) => t.constructor.name === "NamedNodeMap", "isNamedNodeMap"), Ud = u((t, r, e, n, s, a) => {
    let p = t.constructor.name;
    return ++n > r.maxDepth ? `[${p}]` : (r.min ? "" : p + Bg) + (qd.indexOf(p) !== -1 ? `{${(0, Bd.printObjectProperties)(Ug(t) ? Array.from(t).reduce((v, m) => (v[m.name] = m.value, v), {}) : Cp({}, t), r, e, n, s, a)}}` : `[${(0, Bd.printListItems)(Array.from(t), r, e, n, s, a)}]`);
  }, "serialize");
  On.serialize = Ud;
  var Wg = { serialize: Ud, test: Fd }, Vg = Wg;
  On.default = Vg;
});
var Vd = Tt((Nu) => {
  "use strict";
  Object.defineProperty(Nu, "__esModule", { value: true });
  Nu.default = Yg;
  function Yg(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  __name(Yg, "Yg");
  u(Yg, "escapeHTML");
});
var As = Tt((tr) => {
  "use strict";
  Object.defineProperty(tr, "__esModule", { value: true });
  tr.printText = tr.printProps = tr.printElementAsLeaf = tr.printElement = tr.printComment = tr.printChildren = void 0;
  var Yd = Xg(Vd());
  function Xg(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(Xg, "Xg");
  u(Xg, "_interopRequireDefault");
  var Zg = u((t, r, e, n, s, a, p) => {
    let v = n + e.indent, m = e.colors;
    return t.map((d) => {
      let f = r[d], g = p(f, e, v, s, a);
      return typeof f != "string" && (g.indexOf(`
`) !== -1 && (g = e.spacingOuter + v + g + e.spacingOuter + n), g = `{${g}}`), `${e.spacingInner + n + m.prop.open + d + m.prop.close}=${m.value.open}${g}${m.value.close}`;
    }).join("");
  }, "printProps");
  tr.printProps = Zg;
  var Kg = u((t, r, e, n, s, a) => t.map((p) => r.spacingOuter + e + (typeof p == "string" ? Xd(p, r) : a(p, r, e, n, s))).join(""), "printChildren");
  tr.printChildren = Kg;
  var Xd = u((t, r) => {
    let e = r.colors.content;
    return e.open + (0, Yd.default)(t) + e.close;
  }, "printText");
  tr.printText = Xd;
  var Jg = u((t, r) => {
    let e = r.colors.comment;
    return `${e.open}<!--${(0, Yd.default)(t)}-->${e.close}`;
  }, "printComment");
  tr.printComment = Jg;
  var Qg = u((t, r, e, n, s) => {
    let a = n.colors.tag;
    return `${a.open}<${t}${r && a.close + r + n.spacingOuter + s + a.open}${e ? `>${a.close}${e}${n.spacingOuter}${s}${a.open}</${t}` : `${r && !n.min ? "" : " "}/`}>${a.close}`;
  }, "printElement");
  tr.printElement = Qg;
  var eb = u((t, r) => {
    let e = r.colors.tag;
    return `${e.open}<${t}${e.close} \u2026${e.open} />${e.close}`;
  }, "printElementAsLeaf");
  tr.printElementAsLeaf = eb;
});
var tf = Tt((Mn) => {
  "use strict";
  Object.defineProperty(Mn, "__esModule", { value: true });
  Mn.test = Mn.serialize = Mn.default = void 0;
  var Zi = As(), tb = 1, Zd = 3, Kd = 8, Jd = 11, rb = /^((HTML|SVG)\w*)?Element$/, nb = u((t) => {
    try {
      return typeof t.hasAttribute == "function" && t.hasAttribute("is");
    } catch (r) {
      return false;
    }
  }, "testHasAttribute"), ib = u((t) => {
    let r = t.constructor.name, { nodeType: e, tagName: n } = t, s = typeof n == "string" && n.includes("-") || nb(t);
    return e === tb && (rb.test(r) || s) || e === Zd && r === "Text" || e === Kd && r === "Comment" || e === Jd && r === "DocumentFragment";
  }, "testNode"), Qd = u((t) => {
    var r;
    return ((r = t == null ? void 0 : t.constructor) == null ? void 0 : r.name) && ib(t);
  }, "test");
  Mn.test = Qd;
  function ob(t) {
    return t.nodeType === Zd;
  }
  __name(ob, "ob");
  u(ob, "nodeIsText");
  function ab(t) {
    return t.nodeType === Kd;
  }
  __name(ab, "ab");
  u(ab, "nodeIsComment");
  function _u(t) {
    return t.nodeType === Jd;
  }
  __name(_u, "_u");
  u(_u, "nodeIsFragment");
  var ef = u((t, r, e, n, s, a) => {
    if (ob(t))
      return (0, Zi.printText)(t.data, r);
    if (ab(t))
      return (0, Zi.printComment)(t.data, r);
    let p = _u(t) ? "DocumentFragment" : t.tagName.toLowerCase();
    return ++n > r.maxDepth ? (0, Zi.printElementAsLeaf)(p, r) : (0, Zi.printElement)(p, (0, Zi.printProps)(_u(t) ? [] : Array.from(t.attributes).map((v) => v.name).sort(), _u(t) ? {} : Array.from(t.attributes).reduce((v, m) => (v[m.name] = m.value, v), {}), r, e + r.indent, n, s, a), (0, Zi.printChildren)(Array.prototype.slice.call(t.childNodes || t.children), r, e + r.indent, n, s, a), r, e);
  }, "serialize");
  Mn.serialize = ef;
  var sb = { serialize: ef, test: Qd }, lb = sb;
  Mn.default = lb;
});
var sf = Tt((In) => {
  "use strict";
  Object.defineProperty(In, "__esModule", { value: true });
  In.test = In.serialize = In.default = void 0;
  var Uo = Fo(), ub = "@@__IMMUTABLE_ITERABLE__@@", cb = "@@__IMMUTABLE_LIST__@@", pb = "@@__IMMUTABLE_KEYED__@@", db = "@@__IMMUTABLE_MAP__@@", rf = "@@__IMMUTABLE_ORDERED__@@", fb = "@@__IMMUTABLE_RECORD__@@", hb = "@@__IMMUTABLE_SEQ__@@", mb = "@@__IMMUTABLE_SET__@@", vb = "@@__IMMUTABLE_STACK__@@", Ki = u((t) => `Immutable.${t}`, "getImmutableName"), Ps = u((t) => `[${t}]`, "printAsLeaf"), Wo = " ", nf = "\u2026", gb = u((t, r, e, n, s, a, p) => ++n > r.maxDepth ? Ps(Ki(p)) : `${Ki(p) + Wo}{${(0, Uo.printIteratorEntries)(t.entries(), r, e, n, s, a)}}`, "printImmutableEntries");
  function bb(t) {
    let r = 0;
    return { next() {
      if (r < t._keys.length) {
        let e = t._keys[r++];
        return { done: false, value: [e, t.get(e)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  __name(bb, "bb");
  u(bb, "getRecordEntries");
  var yb = u((t, r, e, n, s, a) => {
    let p = Ki(t._name || "Record");
    return ++n > r.maxDepth ? Ps(p) : `${p + Wo}{${(0, Uo.printIteratorEntries)(bb(t), r, e, n, s, a)}}`;
  }, "printImmutableRecord"), wb = u((t, r, e, n, s, a) => {
    let p = Ki("Seq");
    return ++n > r.maxDepth ? Ps(p) : t[pb] ? `${p + Wo}{${t._iter || t._object ? (0, Uo.printIteratorEntries)(t.entries(), r, e, n, s, a) : nf}}` : `${p + Wo}[${t._iter || t._array || t._collection || t._iterable ? (0, Uo.printIteratorValues)(t.values(), r, e, n, s, a) : nf}]`;
  }, "printImmutableSeq"), Lu = u((t, r, e, n, s, a, p) => ++n > r.maxDepth ? Ps(Ki(p)) : `${Ki(p) + Wo}[${(0, Uo.printIteratorValues)(t.values(), r, e, n, s, a)}]`, "printImmutableValues"), of = u((t, r, e, n, s, a) => t[db] ? gb(t, r, e, n, s, a, t[rf] ? "OrderedMap" : "Map") : t[cb] ? Lu(t, r, e, n, s, a, "List") : t[mb] ? Lu(t, r, e, n, s, a, t[rf] ? "OrderedSet" : "Set") : t[vb] ? Lu(t, r, e, n, s, a, "Stack") : t[hb] ? wb(t, r, e, n, s, a) : yb(t, r, e, n, s, a), "serialize");
  In.serialize = of;
  var af = u((t) => t && (t[ub] === true || t[fb] === true), "test");
  In.test = af;
  var xb = { serialize: of, test: af }, Eb = xb;
  In.default = Eb;
});
var uf = Tt((_e) => {
  "use strict";
  var Gu = Symbol.for("react.element"), ju = Symbol.for("react.portal"), zs = Symbol.for("react.fragment"), Rs = Symbol.for("react.strict_mode"), Ds = Symbol.for("react.profiler"), ks = Symbol.for("react.provider"), Ns = Symbol.for("react.context"), Sb = Symbol.for("react.server_context"), _s = Symbol.for("react.forward_ref"), Ls = Symbol.for("react.suspense"), Gs = Symbol.for("react.suspense_list"), js = Symbol.for("react.memo"), Hs = Symbol.for("react.lazy"), Tb = Symbol.for("react.offscreen"), lf;
  lf = Symbol.for("react.module.reference");
  function xr(t) {
    if (typeof t == "object" && t !== null) {
      var r = t.$$typeof;
      switch (r) {
        case Gu:
          switch (t = t.type, t) {
            case zs:
            case Ds:
            case Rs:
            case Ls:
            case Gs:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case Sb:
                case Ns:
                case _s:
                case Hs:
                case js:
                case ks:
                  return t;
                default:
                  return r;
              }
          }
        case ju:
          return r;
      }
    }
  }
  __name(xr, "xr");
  u(xr, "v");
  _e.ContextConsumer = Ns;
  _e.ContextProvider = ks;
  _e.Element = Gu;
  _e.ForwardRef = _s;
  _e.Fragment = zs;
  _e.Lazy = Hs;
  _e.Memo = js;
  _e.Portal = ju;
  _e.Profiler = Ds;
  _e.StrictMode = Rs;
  _e.Suspense = Ls;
  _e.SuspenseList = Gs;
  _e.isAsyncMode = function() {
    return false;
  };
  _e.isConcurrentMode = function() {
    return false;
  };
  _e.isContextConsumer = function(t) {
    return xr(t) === Ns;
  };
  _e.isContextProvider = function(t) {
    return xr(t) === ks;
  };
  _e.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Gu;
  };
  _e.isForwardRef = function(t) {
    return xr(t) === _s;
  };
  _e.isFragment = function(t) {
    return xr(t) === zs;
  };
  _e.isLazy = function(t) {
    return xr(t) === Hs;
  };
  _e.isMemo = function(t) {
    return xr(t) === js;
  };
  _e.isPortal = function(t) {
    return xr(t) === ju;
  };
  _e.isProfiler = function(t) {
    return xr(t) === Ds;
  };
  _e.isStrictMode = function(t) {
    return xr(t) === Rs;
  };
  _e.isSuspense = function(t) {
    return xr(t) === Ls;
  };
  _e.isSuspenseList = function(t) {
    return xr(t) === Gs;
  };
  _e.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === zs || t === Ds || t === Rs || t === Ls || t === Gs || t === Tb || typeof t == "object" && t !== null && (t.$$typeof === Hs || t.$$typeof === js || t.$$typeof === ks || t.$$typeof === Ns || t.$$typeof === _s || t.$$typeof === lf || t.getModuleId !== void 0);
  };
  _e.typeOf = xr;
});
var pf = Tt((qE, cf) => {
  "use strict";
  cf.exports = uf();
});
var gf = Tt((An) => {
  "use strict";
  Object.defineProperty(An, "__esModule", { value: true });
  An.test = An.serialize = An.default = void 0;
  var oi = Cb(pf()), $s = As();
  function ff(t) {
    if (typeof WeakMap != "function")
      return null;
    var r = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
    return (ff = u(function(n) {
      return n ? e : r;
    }, "_getRequireWildcardCache"))(t);
  }
  __name(ff, "ff");
  u(ff, "_getRequireWildcardCache");
  function Cb(t, r) {
    if (!r && t && t.__esModule)
      return t;
    if (t === null || typeof t != "object" && typeof t != "function")
      return { default: t };
    var e = ff(r);
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
  __name(Cb, "Cb");
  u(Cb, "_interopRequireWildcard");
  var hf = u((t, r = []) => (Array.isArray(t) ? t.forEach((e) => {
    hf(e, r);
  }) : t != null && t !== false && r.push(t), r), "getChildren"), df = u((t) => {
    let r = t.type;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r.displayName || r.name || "Unknown";
    if (oi.isFragment(t))
      return "React.Fragment";
    if (oi.isSuspense(t))
      return "React.Suspense";
    if (typeof r == "object" && r !== null) {
      if (oi.isContextProvider(t))
        return "Context.Provider";
      if (oi.isContextConsumer(t))
        return "Context.Consumer";
      if (oi.isForwardRef(t)) {
        if (r.displayName)
          return r.displayName;
        let e = r.render.displayName || r.render.name || "";
        return e !== "" ? `ForwardRef(${e})` : "ForwardRef";
      }
      if (oi.isMemo(t)) {
        let e = r.displayName || r.type.displayName || r.type.name || "";
        return e !== "" ? `Memo(${e})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, "getType"), Ob = u((t) => {
    let { props: r } = t;
    return Object.keys(r).filter((e) => e !== "children" && r[e] !== void 0).sort();
  }, "getPropKeys"), mf = u((t, r, e, n, s, a) => ++n > r.maxDepth ? (0, $s.printElementAsLeaf)(df(t), r) : (0, $s.printElement)(df(t), (0, $s.printProps)(Ob(t), t.props, r, e + r.indent, n, s, a), (0, $s.printChildren)(hf(t.props.children), r, e + r.indent, n, s, a), r, e), "serialize");
  An.serialize = mf;
  var vf = u((t) => t != null && oi.isElement(t), "test");
  An.test = vf;
  var Mb = { serialize: mf, test: vf }, Ib = Mb;
  An.default = Ib;
});
var wf = Tt((Pn) => {
  "use strict";
  Object.defineProperty(Pn, "__esModule", { value: true });
  Pn.test = Pn.serialize = Pn.default = void 0;
  var Bs = As(), Hu = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, Ab = typeof Hu == "function" && Hu.for ? Hu.for("react.test.json") : 245830487, Pb = u((t) => {
    let { props: r } = t;
    return r ? Object.keys(r).filter((e) => r[e] !== void 0).sort() : [];
  }, "getPropKeys"), bf = u((t, r, e, n, s, a) => ++n > r.maxDepth ? (0, Bs.printElementAsLeaf)(t.type, r) : (0, Bs.printElement)(t.type, t.props ? (0, Bs.printProps)(Pb(t), t.props, r, e + r.indent, n, s, a) : "", t.children ? (0, Bs.printChildren)(t.children, r, e + r.indent, n, s, a) : "", r, e), "serialize");
  Pn.serialize = bf;
  var yf = u((t) => t && t.$$typeof === Ab, "test");
  Pn.test = yf;
  var zb = { serialize: bf, test: yf }, Rb = zb;
  Pn.default = Rb;
});
var Rn = Tt((an) => {
  "use strict";
  Object.defineProperty(an, "__esModule", { value: true });
  an.default = an.DEFAULT_OPTIONS = void 0;
  an.format = Nf;
  an.plugins = void 0;
  var Db = ai(Ld()), Vo = Fo(), kb = ai($d()), Nb = ai(Wd()), _b = ai(tf()), Lb = ai(sf()), Gb = ai(gf()), jb = ai(wf());
  function ai(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(ai, "ai");
  u(ai, "_interopRequireDefault");
  var Of = Object.prototype.toString, Hb = Date.prototype.toISOString, $b = Error.prototype.toString, xf = RegExp.prototype.toString, $u = u((t) => typeof t.constructor == "function" && t.constructor.name || "Object", "getConstructorName"), Bb = u((t) => typeof window != "undefined" && t === window, "isWindow"), qb = /^Symbol\((.*)\)(.*)$/, Fb = /\n/gi, qu = class qu extends Error {
    static {
      __name(this, "qu");
    }
    constructor(r, e) {
      super(r), this.stack = e, this.name = this.constructor.name;
    }
  };
  u(qu, "PrettyFormatPluginError");
  var qs = qu;
  function Ub(t) {
    return t === "[object Array]" || t === "[object ArrayBuffer]" || t === "[object DataView]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object Int8Array]" || t === "[object Int16Array]" || t === "[object Int32Array]" || t === "[object Uint8Array]" || t === "[object Uint8ClampedArray]" || t === "[object Uint16Array]" || t === "[object Uint32Array]";
  }
  __name(Ub, "Ub");
  u(Ub, "isToStringedArrayType");
  function Wb(t) {
    return Object.is(t, -0) ? "-0" : String(t);
  }
  __name(Wb, "Wb");
  u(Wb, "printNumber");
  function Vb(t) {
    return `${t}n`;
  }
  __name(Vb, "Vb");
  u(Vb, "printBigInt");
  function Ef(t, r) {
    return r ? `[Function ${t.name || "anonymous"}]` : "[Function]";
  }
  __name(Ef, "Ef");
  u(Ef, "printFunction");
  function Sf(t) {
    return String(t).replace(qb, "Symbol($1)");
  }
  __name(Sf, "Sf");
  u(Sf, "printSymbol");
  function Tf(t) {
    return `[${$b.call(t)}]`;
  }
  __name(Tf, "Tf");
  u(Tf, "printError");
  function Mf(t, r, e, n) {
    if (t === true || t === false)
      return `${t}`;
    if (t === void 0)
      return "undefined";
    if (t === null)
      return "null";
    let s = typeof t;
    if (s === "number")
      return Wb(t);
    if (s === "bigint")
      return Vb(t);
    if (s === "string")
      return n ? `"${t.replace(/"|\\/g, "\\$&")}"` : `"${t}"`;
    if (s === "function")
      return Ef(t, r);
    if (s === "symbol")
      return Sf(t);
    let a = Of.call(t);
    return a === "[object WeakMap]" ? "WeakMap {}" : a === "[object WeakSet]" ? "WeakSet {}" : a === "[object Function]" || a === "[object GeneratorFunction]" ? Ef(t, r) : a === "[object Symbol]" ? Sf(t) : a === "[object Date]" ? isNaN(+t) ? "Date { NaN }" : Hb.call(t) : a === "[object Error]" ? Tf(t) : a === "[object RegExp]" ? e ? xf.call(t).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : xf.call(t) : t instanceof Error ? Tf(t) : null;
  }
  __name(Mf, "Mf");
  u(Mf, "printBasicValue");
  function If(t, r, e, n, s, a) {
    if (s.indexOf(t) !== -1)
      return "[Circular]";
    s = s.slice(), s.push(t);
    let p = ++n > r.maxDepth, v = r.min;
    if (r.callToJSON && !p && t.toJSON && typeof t.toJSON == "function" && !a)
      return zn(t.toJSON(), r, e, n, s, true);
    let m = Of.call(t);
    return m === "[object Arguments]" ? p ? "[Arguments]" : `${v ? "" : "Arguments "}[${(0, Vo.printListItems)(t, r, e, n, s, zn)}]` : Ub(m) ? p ? `[${t.constructor.name}]` : `${v || !r.printBasicPrototype && t.constructor.name === "Array" ? "" : `${t.constructor.name} `}[${(0, Vo.printListItems)(t, r, e, n, s, zn)}]` : m === "[object Map]" ? p ? "[Map]" : `Map {${(0, Vo.printIteratorEntries)(t.entries(), r, e, n, s, zn, " => ")}}` : m === "[object Set]" ? p ? "[Set]" : `Set {${(0, Vo.printIteratorValues)(t.values(), r, e, n, s, zn)}}` : p || Bb(t) ? `[${$u(t)}]` : `${v || !r.printBasicPrototype && $u(t) === "Object" ? "" : `${$u(t)} `}{${(0, Vo.printObjectProperties)(t, r, e, n, s, zn)}}`;
  }
  __name(If, "If");
  u(If, "printComplexValue");
  function Yb(t) {
    return t.serialize != null;
  }
  __name(Yb, "Yb");
  u(Yb, "isNewPlugin");
  function Af(t, r, e, n, s, a) {
    let p;
    try {
      p = Yb(t) ? t.serialize(r, e, n, s, a, zn) : t.print(r, (v) => zn(v, e, n, s, a), (v) => {
        let m = n + e.indent;
        return m + v.replace(Fb, `
${m}`);
      }, { edgeSpacing: e.spacingOuter, min: e.min, spacing: e.spacingInner }, e.colors);
    } catch (v) {
      throw new qs(v.message, v.stack);
    }
    if (typeof p != "string")
      throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);
    return p;
  }
  __name(Af, "Af");
  u(Af, "printPlugin");
  function Pf(t, r) {
    for (let e = 0; e < t.length; e++)
      try {
        if (t[e].test(r))
          return t[e];
      } catch (n) {
        throw new qs(n.message, n.stack);
      }
    return null;
  }
  __name(Pf, "Pf");
  u(Pf, "findPlugin");
  function zn(t, r, e, n, s, a) {
    let p = Pf(r.plugins, t);
    if (p !== null)
      return Af(p, t, r, e, n, s);
    let v = Mf(t, r.printFunctionName, r.escapeRegex, r.escapeString);
    return v !== null ? v : If(t, r, e, n, s, a);
  }
  __name(zn, "zn");
  u(zn, "printer");
  var Bu = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, zf = Object.keys(Bu), Xb = u((t) => t, "toOptionsSubtype"), Er = Xb({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: Bu });
  an.DEFAULT_OPTIONS = Er;
  function Zb(t) {
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
  __name(Zb, "Zb");
  u(Zb, "validateOptions");
  var Kb = u((t) => zf.reduce((r, e) => {
    let n = t.theme && t.theme[e] !== void 0 ? t.theme[e] : Bu[e], s = n && Db.default[n];
    if (s && typeof s.close == "string" && typeof s.open == "string")
      r[e] = s;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${e}" whose value "${n}" is undefined in ansi-styles.`);
    return r;
  }, /* @__PURE__ */ Object.create(null)), "getColorsHighlight"), Jb = u(() => zf.reduce((t, r) => (t[r] = { close: "", open: "" }, t), /* @__PURE__ */ Object.create(null)), "getColorsEmpty"), Rf = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.printFunctionName) != null ? r : Er.printFunctionName;
  }, "getPrintFunctionName"), Df = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeRegex) != null ? r : Er.escapeRegex;
  }, "getEscapeRegex"), kf = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeString) != null ? r : Er.escapeString;
  }, "getEscapeString"), Cf = u((t) => {
    var r, e, n, s, a, p, v;
    return { callToJSON: (r = t == null ? void 0 : t.callToJSON) != null ? r : Er.callToJSON, colors: t != null && t.highlight ? Kb(t) : Jb(), compareKeys: typeof (t == null ? void 0 : t.compareKeys) == "function" || (t == null ? void 0 : t.compareKeys) === null ? t.compareKeys : Er.compareKeys, escapeRegex: Df(t), escapeString: kf(t), indent: t != null && t.min ? "" : Qb((e = t == null ? void 0 : t.indent) != null ? e : Er.indent), maxDepth: (n = t == null ? void 0 : t.maxDepth) != null ? n : Er.maxDepth, maxWidth: (s = t == null ? void 0 : t.maxWidth) != null ? s : Er.maxWidth, min: (a = t == null ? void 0 : t.min) != null ? a : Er.min, plugins: (p = t == null ? void 0 : t.plugins) != null ? p : Er.plugins, printBasicPrototype: (v = t == null ? void 0 : t.printBasicPrototype) != null ? v : true, printFunctionName: Rf(t), spacingInner: t != null && t.min ? " " : `
`, spacingOuter: t != null && t.min ? "" : `
` };
  }, "getConfig");
  function Qb(t) {
    return new Array(t + 1).join(" ");
  }
  __name(Qb, "Qb");
  u(Qb, "createIndent");
  function Nf(t, r) {
    if (r && (Zb(r), r.plugins)) {
      let n = Pf(r.plugins, t);
      if (n !== null)
        return Af(n, t, Cf(r), "", 0, []);
    }
    let e = Mf(t, Rf(r), Df(r), kf(r));
    return e !== null ? e : If(t, Cf(r), "", 0, []);
  }
  __name(Nf, "Nf");
  u(Nf, "format");
  var ey = { AsymmetricMatcher: kb.default, DOMCollection: Nb.default, DOMElement: _b.default, Immutable: Lb.default, ReactElement: Gb.default, ReactTestComponent: jb.default };
  an.plugins = ey;
  var ty = Nf;
  an.default = ty;
});
var Yo = Tt((_f, Fu) => {
  (function(t) {
    typeof _f == "object" && typeof Fu != "undefined" ? Fu.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
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
    var B = {};
    Object.defineProperty(B, "__esModule", { value: true }), B.default = void 0;
    var A = { init: function(i) {
      var o = C.default.Element, l = i.navigator || {};
      A.supportsTouch = "ontouchstart" in i || a.default.func(i.DocumentTouch) && C.default.document instanceof i.DocumentTouch, A.supportsPointerEvent = l.pointerEnabled !== false && !!C.default.PointerEvent, A.isIOS = /iP(hone|od|ad)/.test(l.platform), A.isIOS7 = /iP(hone|od|ad)/.test(l.platform) && /OS 7[^\d]/.test(l.appVersion), A.isIe9 = /MSIE 9/.test(l.userAgent), A.isOperaMobile = l.appName === "Opera" && A.supportsTouch && /Presto/.test(l.userAgent), A.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", A.pEventTypes = A.supportsPointerEvent ? C.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, A.wheelEvent = C.default.document && "onmousewheel" in C.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ee = A;
    B.default = ee;
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
      return r.window !== r.realWindow && (o = o.replace(/\/deep\//g, " ")), i[B.default.prefixedMatchesSelector](o);
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
      if (!B.default.isIOS7 && o) {
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
                  for (var O = ue(x, b.ownerDocument), I = 0; O[I] && O[I] === l[I]; )
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
    var Ae = {};
    function We(i) {
      return i.trim().split(/ +/);
    }
    __name(We, "We");
    u(We, "C"), Object.defineProperty(Ae, "__esModule", { value: true }), Ae.default = u(/* @__PURE__ */ __name(function i(o, l, c) {
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
    function or(i) {
      return i instanceof C.default.Event || i instanceof C.default.Touch;
    }
    __name(or, "or");
    u(or, "B");
    function je(i, o, l) {
      return i = i || "page", (l = l || {}).x = o[i + "X"], l.y = o[i + "Y"], l;
    }
    __name(je, "je");
    u(je, "Y");
    function rt(i, o) {
      return o = o || { x: 0, y: 0 }, B.default.isOperaMobile && or(i) ? (je("screen", i, o), o.x += window.scrollX, o.y += window.scrollY) : je("page", i, o), o;
    }
    __name(rt, "rt");
    u(rt, "W");
    function mr(i, o) {
      return o = o || {}, B.default.isOperaMobile && or(i) ? je("screen", i, o) : je("client", i, o), o;
    }
    __name(mr, "mr");
    u(mr, "L");
    function Mr(i) {
      var o = [];
      return a.default.array(i) ? (o[0] = i[0], o[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o[0] = i.touches[0], o[1] = i.changedTouches[0]) : i.touches.length === 0 && (o[0] = i.changedTouches[0], o[1] = i.changedTouches[1]) : (o[0] = i.touches[0], o[1] = i.touches[1]), o;
    }
    __name(Mr, "Mr");
    u(Mr, "U");
    function vr(i) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, l = 0; l < i.length; l++) {
        var c = i[l];
        for (var h in o)
          o[h] += c[h];
      }
      for (var b in o)
        o[b] /= i.length;
      return o;
    }
    __name(vr, "vr");
    u(vr, "V"), Object.defineProperty(J, "__esModule", { value: true }), J.coordsToEvent = function(i) {
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
    }, J.getClientXY = mr, J.getEventTargets = function(i) {
      var o = a.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [z.getActualElement(o ? o[0] : i.target), z.getActualElement(i.currentTarget)];
    }, J.getPageXY = rt, J.getPointerId = function(i) {
      return a.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, J.getPointerType = function(i) {
      return a.default.string(i.pointerType) ? i.pointerType : a.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof C.default.Touch ? "touch" : "mouse";
    }, J.getTouchPair = Mr, J.getXY = je, J.isNativePointer = or, J.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, J.pointerAverage = vr, Object.defineProperty(J, "pointerExtend", { enumerable: true, get: function() {
      return Ye.default;
    } }), J.setCoordDeltas = function(i, o, l) {
      i.page.x = l.page.x - o.page.x, i.page.y = l.page.y - o.page.y, i.client.x = l.client.x - o.client.x, i.client.y = l.client.y - o.client.y, i.timeStamp = l.timeStamp - o.timeStamp;
    }, J.setCoordVelocity = function(i, o) {
      var l = Math.max(o.timeStamp / 1e3, 1e-3);
      i.page.x = o.page.x / l, i.page.y = o.page.y / l, i.client.x = o.client.x / l, i.client.y = o.client.y / l, i.timeStamp = l;
    }, J.setCoords = function(i, o, l) {
      var c = o.length > 1 ? vr(o) : o[0];
      rt(c, i.page), mr(c, i.client), i.timeStamp = l;
    }, J.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, J.touchAngle = function(i, o) {
      var l = o + "X", c = o + "Y", h = Mr(i), b = h[1][l] - h[0][l], E = h[1][c] - h[0][c];
      return 180 * Math.atan2(E, b) / Math.PI;
    }, J.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o = Mr(i), l = Math.min(o[0].pageX, o[1].pageX), c = Math.min(o[0].pageY, o[1].pageY), h = Math.max(o[0].pageX, o[1].pageX), b = Math.max(o[0].pageY, o[1].pageY);
      return { x: l, y: c, left: l, top: c, right: h, bottom: b, width: h - l, height: b - c };
    }, J.touchDistance = function(i, o) {
      var l = o + "X", c = o + "Y", h = Mr(i), b = h[0][l] - h[1][l], E = h[0][c] - h[1][c];
      return (0, Je.default)(b, E);
    };
    var ar = {};
    function Nr(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Nr, "Nr");
    u(Nr, "q");
    function Vr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Vr, "Vr");
    u(Vr, "G"), Object.defineProperty(ar, "__esModule", { value: true }), ar.BaseEvent = void 0;
    var _n = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Vr(this, "immediatePropagationStopped", false), Vr(this, "propagationStopped", false), this._interaction = c;
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Nr(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    ar.BaseEvent = _n, Object.defineProperty(_n.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Pe = {};
    Object.defineProperty(Pe, "__esModule", { value: true }), Pe.remove = Pe.merge = Pe.from = Pe.findIndex = Pe.find = Pe.contains = void 0, Pe.contains = function(i, o) {
      return i.indexOf(o) !== -1;
    }, Pe.remove = function(i, o) {
      return i.splice(i.indexOf(o), 1);
    };
    var Ln = u(function(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        i.push(c);
      }
      return i;
    }, "K");
    Pe.merge = Ln, Pe.from = function(i) {
      return Ln([], i);
    };
    var Gn = u(function(i, o) {
      for (var l = 0; l < i.length; l++)
        if (o(i[l], l, i))
          return l;
      return -1;
    }, "Z");
    Pe.findIndex = Gn, Pe.find = function(i, o) {
      return i[Gn(i, o)];
    };
    var Nt = {};
    function Yr(i) {
      return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Yr(i);
    }
    __name(Yr, "Yr");
    u(Yr, "Q");
    function wi(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(wi, "wi");
    u(wi, "tt");
    function fn(i, o) {
      return fn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, fn(i, o);
    }
    __name(fn, "fn");
    u(fn, "et");
    function Ir(i, o) {
      if (o && (Yr(o) === "object" || typeof o == "function"))
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
    function _r(i) {
      return _r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, _r(i);
    }
    __name(_r, "_r");
    u(_r, "ot");
    function Jt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Jt, "Jt");
    u(Jt, "it"), Object.defineProperty(Nt, "__esModule", { value: true }), Nt.DropEvent = void 0;
    var jn = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && fn(y, x);
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
        var y, x = _r(c);
        if (h) {
          var O = _r(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Ir(this, y);
      });
      function E(y, x, O) {
        var I;
        (function(D, F) {
          if (!(D instanceof F))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Jt(Mt(I = b.call(this, x._interaction)), "dropzone", void 0), Jt(Mt(I), "dragEvent", void 0), Jt(Mt(I), "relatedTarget", void 0), Jt(Mt(I), "draggable", void 0), Jt(Mt(I), "propagationStopped", false), Jt(Mt(I), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? y.prev : y.cur, N = P.element, j = P.dropzone;
        return I.type = O, I.target = N, I.currentTarget = N, I.dropzone = j, I.dragEvent = x, I.relatedTarget = x.target, I.draggable = x.interactable, I.timeStamp = x.timeStamp, I;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (l = [{ key: "reject", value: function() {
        var y = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = x.activeDrops, I = Pe.findIndex(O, function(N) {
              var j = N.dropzone, D = N.element;
              return j === y.dropzone && D === y.target;
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
      } }]) && wi(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(ar.BaseEvent);
    Nt.DropEvent = jn;
    var Xr = {};
    function Hn(i, o) {
      for (var l = 0; l < i.slice().length; l++) {
        var c = i.slice()[l], h = c.dropzone, b = c.element;
        o.dropzone = h, o.target = b, h.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(Hn, "Hn");
    u(Hn, "lt");
    function hn(i, o) {
      for (var l = function(b, E) {
        for (var y = b.interactables, x = [], O = 0; O < y.list.length; O++) {
          var I = y.list[O];
          if (I.options.drop.enabled) {
            var P = I.options.drop.accept;
            if (!(a.default.element(P) && P !== E || a.default.string(P) && !z.matchesSelector(E, P) || a.default.func(P) && !P({ dropzone: I, draggableElement: E })))
              for (var N = a.default.string(I.target) ? I._context.querySelectorAll(I.target) : a.default.array(I.target) ? I.target : [I.target], j = 0; j < N.length; j++) {
                var D = N[j];
                D !== E && x.push({ dropzone: I, element: D, rect: I.getRect(D) });
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
    __name(hn, "hn");
    u(hn, "ut");
    function $n(i, o, l) {
      for (var c = i.dropState, h = i.interactable, b = i.element, E = [], y = 0; y < c.activeDrops.length; y++) {
        var x = c.activeDrops[y], O = x.dropzone, I = x.element, P = x.rect;
        E.push(O.dropCheck(o, l, h, b, I, P) ? I : null);
      }
      var N = z.indexOfDeepestElement(E);
      return c.activeDrops[N] || null;
    }
    __name($n, "$n");
    u($n, "ct");
    function oo(i, o, l) {
      var c = i.dropState, h = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return l.type === "dragstart" && (h.activate = new Nt.DropEvent(c, l, "dropactivate"), h.activate.target = null, h.activate.dropzone = null), l.type === "dragend" && (h.deactivate = new Nt.DropEvent(c, l, "dropdeactivate"), h.deactivate.target = null, h.deactivate.dropzone = null), c.rejected || (c.cur.element !== c.prev.element && (c.prev.dropzone && (h.leave = new Nt.DropEvent(c, l, "dragleave"), l.dragLeave = h.leave.target = c.prev.element, l.prevDropzone = h.leave.dropzone = c.prev.dropzone), c.cur.dropzone && (h.enter = new Nt.DropEvent(c, l, "dragenter"), l.dragEnter = c.cur.element, l.dropzone = c.cur.dropzone)), l.type === "dragend" && c.cur.dropzone && (h.drop = new Nt.DropEvent(c, l, "drop"), l.dropzone = c.cur.dropzone, l.relatedTarget = c.cur.element), l.type === "dragmove" && c.cur.dropzone && (h.move = new Nt.DropEvent(c, l, "dropmove"), h.move.dragmove = l, l.dropzone = c.cur.dropzone)), h;
    }
    __name(oo, "oo");
    u(oo, "ft");
    function ao(i, o) {
      var l = i.dropState, c = l.activeDrops, h = l.cur, b = l.prev;
      o.leave && b.dropzone.fire(o.leave), o.enter && h.dropzone.fire(o.enter), o.move && h.dropzone.fire(o.move), o.drop && h.dropzone.fire(o.drop), o.deactivate && Hn(c, o.deactivate), l.prev.dropzone = h.dropzone, l.prev.element = h.element;
    }
    __name(ao, "ao");
    u(ao, "dt");
    function ga(i, o) {
      var l = i.interaction, c = i.iEvent, h = i.event;
      if (c.type === "dragmove" || c.type === "dragend") {
        var b = l.dropState;
        o.dynamicDrop && (b.activeDrops = hn(o, l.element));
        var E = c, y = $n(l, E, h);
        b.rejected = b.rejected && !!y && y.dropzone === b.cur.dropzone && y.element === b.cur.element, b.cur.dropzone = y && y.dropzone, b.cur.element = y && y.element, b.events = oo(l, 0, E);
      }
    }
    __name(ga, "ga");
    u(ga, "pt"), Object.defineProperty(Xr, "__esModule", { value: true }), Xr.default = void 0;
    var ba = { id: "actions/drop", install: function(i) {
      var o = i.actions, l = i.interactStatic, c = i.Interactable, h = i.defaults;
      i.usePlugin(f.default), c.prototype.dropzone = function(b) {
        return function(E, y) {
          if (a.default.object(y)) {
            if (E.options.drop.enabled = y.enabled !== false, y.listeners) {
              var x = (0, Ae.default)(y.listeners), O = Object.keys(x).reduce(function(I, P) {
                return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], I;
              }, {});
              E.off(E.options.drop.listeners), E.on(O), E.options.drop.listeners = O;
            }
            return a.default.func(y.ondrop) && E.on("drop", y.ondrop), a.default.func(y.ondropactivate) && E.on("dropactivate", y.ondropactivate), a.default.func(y.ondropdeactivate) && E.on("dropdeactivate", y.ondropdeactivate), a.default.func(y.ondragenter) && E.on("dragenter", y.ondragenter), a.default.func(y.ondragleave) && E.on("dragleave", y.ondragleave), a.default.func(y.ondropmove) && E.on("dropmove", y.ondropmove), /^(pointer|center)$/.test(y.overlap) ? E.options.drop.overlap = y.overlap : a.default.number(y.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, y.overlap), 0)), "accept" in y && (E.options.drop.accept = y.accept), "checker" in y && (E.options.drop.checker = y.checker), E;
          }
          return a.default.bool(y) ? (E.options.drop.enabled = y, E) : E.options.drop;
        }(this, b);
      }, c.prototype.dropCheck = function(b, E, y, x, O, I) {
        return function(P, N, j, D, F, Z, W) {
          var ne = false;
          if (!(W = W || P.getRect(Z)))
            return !!P.options.drop.checker && P.options.drop.checker(N, j, ne, P, Z, D, F);
          var ae = P.options.drop.overlap;
          if (ae === "pointer") {
            var ye = (0, ze.default)(D, F, "drag"), De = J.getPageXY(N);
            De.x += ye.x, De.y += ye.y;
            var qe = De.x > W.left && De.x < W.right, Se = De.y > W.top && De.y < W.bottom;
            ne = qe && Se;
          }
          var $e = D.getRect(F);
          if ($e && ae === "center") {
            var yr = $e.left + $e.width / 2, Qr = $e.top + $e.height / 2;
            ne = yr >= W.left && yr <= W.right && Qr >= W.top && Qr <= W.bottom;
          }
          return $e && a.default.number(ae) && (ne = Math.max(0, Math.min(W.right, $e.right) - Math.max(W.left, $e.left)) * Math.max(0, Math.min(W.bottom, $e.bottom) - Math.max(W.top, $e.top)) / ($e.width * $e.height) >= ae), P.options.drop.checker && (ne = P.options.drop.checker(N, j, ne, P, Z, D, F)), ne;
        }(this, b, E, y, x, O, I);
      }, l.dynamicDrop = function(b) {
        return a.default.bool(b) ? (i.dynamicDrop = b, l) : i.dynamicDrop;
      }, (0, q.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", i.dynamicDrop = false, h.actions.drop = ba.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o = i.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o) {
      var l = i.interaction, c = (i.event, i.iEvent);
      if (l.prepared.name === "drag") {
        var h = l.dropState;
        h.activeDrops = null, h.events = null, h.activeDrops = hn(o, l.element), h.events = oo(l, 0, c), h.events.activate && (Hn(h.activeDrops, h.events.activate), o.fire("actions/drop:start", { interaction: l, dragEvent: c }));
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
    } }, getActiveDrops: hn, getDrop: $n, getDropEvents: oo, fireDropEvents: ao, defaults: { enabled: false, accept: null, overlap: "pointer" } }, gl = ba;
    Xr.default = gl;
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
          var I = x >= 0 ? b.top : b.bottom;
          return l.y < I + E;
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
    function _t(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.resizeAxes) {
        var c = o;
        l.interactable.options.resize.square ? (l.resizeAxes === "y" ? c.delta.x = c.delta.y : c.delta.y = c.delta.x, c.axes = "xy") : (c.axes = l.resizeAxes, l.resizeAxes === "x" ? c.delta.y = 0 : l.resizeAxes === "y" && (c.delta.x = 0));
      }
    }
    __name(_t, "_t");
    u(_t, "_t"), Object.defineProperty(xe, "__esModule", { value: true }), xe.default = void 0;
    var It = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o = i.actions, l = i.browser, c = i.Interactable, h = i.defaults;
      It.cursors = function(b) {
        return b.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(l), It.defaultMargin = l.supportsTouch || l.supportsPointerEvent ? 20 : 10, c.prototype.resizable = function(b) {
        return function(E, y, x) {
          return a.default.object(y) ? (E.options.resize.enabled = y.enabled !== false, E.setPerAction("resize", y), E.setOnEvents("resize", y), a.default.string(y.axis) && /^x$|^y$|^xy$/.test(y.axis) ? E.options.resize.axis = y.axis : y.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), a.default.bool(y.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = y.preserveAspectRatio : a.default.bool(y.square) && (E.options.resize.square = y.square), E) : a.default.bool(y) ? (E.options.resize.enabled = y, E) : E.options.resize;
        }(this, b, i);
      }, o.map.resize = It, o.methodDict.resize = "resizable", h.actions.resize = It.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o) {
        var l = o.iEvent, c = o.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var h = l, b = c.rect;
          c._rects = { start: (0, q.default)({}, b), corrected: (0, q.default)({}, b), previous: (0, q.default)({}, b), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, h.edges = c.prepared.edges, h.rect = c._rects.corrected, h.deltaRect = c._rects.delta;
        }
      })(i), _t(i);
    }, "interactions:action-move": function(i) {
      (function(o) {
        var l = o.iEvent, c = o.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var h = l, b = c.interactable.options.resize.invert, E = b === "reposition" || b === "negate", y = c.rect, x = c._rects, O = x.start, I = x.corrected, P = x.delta, N = x.previous;
          if ((0, q.default)(N, I), E) {
            if ((0, q.default)(I, y), b === "reposition") {
              if (I.top > I.bottom) {
                var j = I.top;
                I.top = I.bottom, I.bottom = j;
              }
              if (I.left > I.right) {
                var D = I.left;
                I.left = I.right, I.right = D;
              }
            }
          } else
            I.top = Math.min(y.top, O.bottom), I.bottom = Math.max(y.bottom, O.top), I.left = Math.min(y.left, O.right), I.right = Math.max(y.right, O.left);
          for (var F in I.width = I.right - I.left, I.height = I.bottom - I.top, I)
            P[F] = I[F] - N[F];
          h.edges = c.prepared.edges, h.rect = I, h.deltaRect = P;
        }
      })(i), _t(i);
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
              x[O] = xt(O, y.edges[O], E, o._latestPointer.eventTarget, c, h, y.margin || It.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (i.action = { name: "resize", edges: x });
          } else {
            var I = y.axis !== "y" && E.x > h.right - It.defaultMargin, P = y.axis !== "x" && E.y > h.bottom - It.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o = i.edges, l = i.axis, c = i.name, h = It.cursors, b = null;
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
    }, defaultMargin: null }, ya = It;
    xe.default = ya;
    var gr = {};
    Object.defineProperty(gr, "__esModule", { value: true }), gr.default = void 0;
    var so = { id: "actions", install: function(i) {
      i.usePlugin(G.default), i.usePlugin(xe.default), i.usePlugin(f.default), i.usePlugin(Xr.default);
    } };
    gr.default = so;
    var At = {};
    Object.defineProperty(At, "__esModule", { value: true }), At.default = void 0;
    var Pt, Zr, xi = 0, Ei = { request: function(i) {
      return Pt(i);
    }, cancel: function(i) {
      return Zr(i);
    }, init: function(i) {
      if (Pt = i.requestAnimationFrame, Zr = i.cancelAnimationFrame, !Pt)
        for (var o = ["ms", "moz", "webkit", "o"], l = 0; l < o.length; l++) {
          var c = o[l];
          Pt = i["".concat(c, "RequestAnimationFrame")], Zr = i["".concat(c, "CancelAnimationFrame")] || i["".concat(c, "CancelRequestAnimationFrame")];
        }
      Pt = Pt && Pt.bind(i), Zr = Zr && Zr.bind(i), Pt || (Pt = u(function(h) {
        var b = Date.now(), E = Math.max(0, 16 - (b - xi)), y = i.setTimeout(function() {
          h(b + E);
        }, E);
        return xi = b + E, y;
      }, "jt"), Zr = u(function(h) {
        return clearTimeout(h);
      }, "Mt"));
    } };
    At.default = Ei;
    var mn = {};
    Object.defineProperty(mn, "__esModule", { value: true }), mn.default = void 0, mn.getContainer = wa, mn.getScroll = lo, mn.getScrollSize = function(i) {
      return a.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, mn.getScrollSizeDelta = function(i, o) {
      var l = i.interaction, c = i.element, h = l && l.interactable.options[l.prepared.name].autoScroll;
      if (!h || !h.enabled)
        return o(), { x: 0, y: 0 };
      var b = wa(h.container, l.interactable, c), E = lo(b);
      o();
      var y = lo(b);
      return { x: y.x - E.x, y: y.y - E.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, At.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = At.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), At.default.cancel(ce.i);
    }, scroll: function() {
      var i = ce.interaction, o = i.interactable, l = i.element, c = i.prepared.name, h = o.options[c].autoScroll, b = wa(h.container, o, l), E = ce.now(), y = (E - ce.prevTime) / 1e3, x = h.speed * y;
      if (x >= 1) {
        var O = { x: ce.x * x, y: ce.y * x };
        if (O.x || O.y) {
          var I = lo(b);
          a.default.window(b) ? b.scrollBy(O.x, O.y) : b && (b.scrollLeft += O.x, b.scrollTop += O.y);
          var P = lo(b), N = { x: P.x - I.x, y: P.y - I.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: l, interactable: o, delta: N, interaction: i, container: b });
        }
        ce.prevTime = E;
      }
      ce.isScrolling && (At.default.cancel(ce.i), ce.i = At.default.request(ce.scroll));
    }, check: function(i, o) {
      var l;
      return (l = i.options[o].autoScroll) == null ? void 0 : l.enabled;
    }, onInteractionMove: function(i) {
      var o = i.interaction, l = i.pointer;
      if (o.interacting() && ce.check(o.interactable, o.prepared.name))
        if (o.simulation)
          ce.x = ce.y = 0;
        else {
          var c, h, b, E, y = o.interactable, x = o.element, O = o.prepared.name, I = y.options[O].autoScroll, P = wa(I.container, y, x);
          if (a.default.window(P))
            E = l.clientX < ce.margin, c = l.clientY < ce.margin, h = l.clientX > P.innerWidth - ce.margin, b = l.clientY > P.innerHeight - ce.margin;
          else {
            var N = z.getElementClientRect(P);
            E = l.clientX < N.left + ce.margin, c = l.clientY < N.top + ce.margin, h = l.clientX > N.right - ce.margin, b = l.clientY > N.bottom - ce.margin;
          }
          ce.x = h ? 1 : E ? -1 : 0, ce.y = b ? 1 : c ? -1 : 0, ce.isScrolling || (ce.margin = I.margin, ce.speed = I.speed, ce.start(o));
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
    var Cm = { id: "auto-scroll", install: function(i) {
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
    } } }, Om = Cm;
    mn.default = Om;
    var sr = {};
    Object.defineProperty(sr, "__esModule", { value: true }), sr.copyAction = function(i, o) {
      return i.name = o.name, i.axis = o.axis, i.edges = o.edges, i;
    }, sr.sign = void 0, sr.warnOnce = function(i, o) {
      var l = false;
      return function() {
        return l || (r.window.console.warn(o), l = true), i.apply(this, arguments);
      };
    }, sr.sign = function(i) {
      return i >= 0 ? 1 : -1;
    };
    var xa = {};
    function Mm(i) {
      return a.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(Mm, "Mm");
    u(Mm, "Yt");
    function Im(i) {
      return a.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Im, "Im");
    u(Im, "Wt"), Object.defineProperty(xa, "__esModule", { value: true }), xa.default = void 0;
    var Am = { id: "auto-start/interactableMethods", install: function(i) {
      var o = i.Interactable;
      o.prototype.getAction = function(l, c, h, b) {
        var E = function(y, x, O, I, P) {
          var N = y.getRect(I), j = { action: null, interactable: y, interaction: O, element: I, rect: N, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", j), j.action;
        }(this, c, h, b, i);
        return this.options.actionChecker ? this.options.actionChecker(l, c, E, this, b, h) : E;
      }, o.prototype.ignoreFrom = (0, sr.warnOnce)(function(l) {
        return this._backCompatOption("ignoreFrom", l);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, sr.warnOnce)(function(l) {
        return this._backCompatOption("allowFrom", l);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Im, o.prototype.styleCursor = Mm;
    } };
    xa.default = Am;
    var Si = {};
    function Mc(i, o, l, c, h) {
      return o.testIgnoreAllow(o.options[i.name], l, c) && o.options[i.name].enabled && Ea(o, l, i, h) ? i : null;
    }
    __name(Mc, "Mc");
    u(Mc, "Vt");
    function Pm(i, o, l, c, h, b, E) {
      for (var y = 0, x = c.length; y < x; y++) {
        var O = c[y], I = h[y], P = O.getAction(o, l, i, I);
        if (P) {
          var N = Mc(P, O, I, b, E);
          if (N)
            return { action: N, interactable: O, element: I };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Pm, "Pm");
    u(Pm, "Nt");
    function Ic(i, o, l, c, h) {
      var b = [], E = [], y = c;
      function x(I) {
        b.push(I), E.push(y);
      }
      __name(x, "x");
      for (u(x, "u"); a.default.element(y); ) {
        b = [], E = [], h.interactables.forEachMatch(y, x);
        var O = Pm(i, o, l, b, E, c, h);
        if (O.action && !O.interactable.options[O.action.name].manualStart)
          return O;
        y = z.parentNode(y);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Ic, "Ic");
    u(Ic, "qt");
    function Ac(i, o, l) {
      var c = o.action, h = o.interactable, b = o.element;
      c = c || { name: null }, i.interactable = h, i.element = b, (0, sr.copyAction)(i.prepared, c), i.rect = h && c.name ? h.getRect(b) : null, zc(i, l), l.fire("autoStart:prepared", { interaction: i });
    }
    __name(Ac, "Ac");
    u(Ac, "Gt");
    function Ea(i, o, l, c) {
      var h = i.options, b = h[l.name].max, E = h[l.name].maxPerElement, y = c.autoStart.maxInteractions, x = 0, O = 0, I = 0;
      if (!(b && E && y))
        return false;
      for (var P = 0; P < c.interactions.list.length; P++) {
        var N = c.interactions.list[P], j = N.prepared.name;
        if (N.interacting() && (++x >= y || N.interactable === i && ((O += j === l.name ? 1 : 0) >= b || N.element === o && (I++, j === l.name && I >= E))))
          return false;
      }
      return y > 0;
    }
    __name(Ea, "Ea");
    u(Ea, "$t");
    function Pc(i, o) {
      return a.default.number(i) ? (o.autoStart.maxInteractions = i, this) : o.autoStart.maxInteractions;
    }
    __name(Pc, "Pc");
    u(Pc, "Ht");
    function bl(i, o, l) {
      var c = l.autoStart.cursorElement;
      c && c !== i && (c.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o, i.style.cursor = o, l.autoStart.cursorElement = o ? i : null;
    }
    __name(bl, "bl");
    u(bl, "Kt");
    function zc(i, o) {
      var l = i.interactable, c = i.element, h = i.prepared;
      if (i.pointerType === "mouse" && l && l.options.styleCursor) {
        var b = "";
        if (h.name) {
          var E = l.options[h.name].cursorChecker;
          b = a.default.func(E) ? E(h, l, c, i._interacting) : o.actions.map[h.name].getCursor(h);
        }
        bl(i.element, b || "", o);
      } else
        o.autoStart.cursorElement && bl(o.autoStart.cursorElement, "", o);
    }
    __name(zc, "zc");
    u(zc, "Zt"), Object.defineProperty(Si, "__esModule", { value: true }), Si.default = void 0;
    var zm = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o = i.interactStatic, l = i.defaults;
      i.usePlugin(xa.default), l.base.actionChecker = null, l.base.styleCursor = true, (0, q.default)(l.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(c) {
        return Pc(c, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: Ea, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget;
      l.interacting() || Ac(l, Ic(l, c, h, b, o), o);
    }, "interactions:move": function(i, o) {
      (function(l, c) {
        var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget;
        h.pointerType !== "mouse" || h.pointerIsDown || h.interacting() || Ac(h, Ic(h, b, E, y, c), c);
      })(i, o), function(l, c) {
        var h = l.interaction;
        if (h.pointerIsDown && !h.interacting() && h.pointerWasMoved && h.prepared.name) {
          c.fire("autoStart:before-start", l);
          var b = h.interactable, E = h.prepared.name;
          E && b && (b.options[E].manualStart || !Ea(b, h.element, h.prepared, c) ? h.stop() : (h.start(h.prepared, b, h.element), zc(h, c)));
        }
      }(i, o);
    }, "interactions:stop": function(i, o) {
      var l = i.interaction, c = l.interactable;
      c && c.options.styleCursor && bl(l.element, "", o);
    } }, maxInteractions: Pc, withinInteractionLimit: Ea, validateAction: Mc }, Rm = zm;
    Si.default = Rm;
    var Sa = {};
    Object.defineProperty(Sa, "__esModule", { value: true }), Sa.default = void 0;
    var Dm = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o) {
      var l = i.interaction, c = i.eventTarget, h = i.dx, b = i.dy;
      if (l.prepared.name === "drag") {
        var E = Math.abs(h), y = Math.abs(b), x = l.interactable.options.drag, O = x.startAxis, I = E > y ? "x" : E < y ? "y" : "xy";
        if (l.prepared.axis = x.lockAxis === "start" ? I[0] : x.lockAxis, I !== "xy" && O !== "xy" && O !== I) {
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
                }(I, D) && Si.default.validateAction(Z, D, P, c, o))
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
    Sa.default = Dm;
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
    } }, getHoldDuration: yl }, Nm = km;
    Ta.default = Nm;
    var Ca = {};
    Object.defineProperty(Ca, "__esModule", { value: true }), Ca.default = void 0;
    var _m = { id: "auto-start", install: function(i) {
      i.usePlugin(Si.default), i.usePlugin(Ta.default), i.usePlugin(Sa.default);
    } };
    Ca.default = _m;
    var Ti = {};
    function Lm(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : a.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Lm, "Lm");
    u(Lm, "ue");
    function Gm(i) {
      var o = i.interaction, l = i.event;
      o.interactable && o.interactable.checkAndPreventDefault(l);
    }
    __name(Gm, "Gm");
    u(Gm, "ce");
    function Rc(i) {
      var o = i.Interactable;
      o.prototype.preventDefault = Lm, o.prototype.checkAndPreventDefault = function(l) {
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
    __name(Rc, "Rc");
    u(Rc, "fe"), Object.defineProperty(Ti, "__esModule", { value: true }), Ti.default = void 0, Ti.install = Rc;
    var jm = { id: "core/interactablePreventDefault", install: Rc, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o) {
      return i["interactions:".concat(o)] = Gm, i;
    }, {}) };
    Ti.default = jm;
    var wl = {};
    Object.defineProperty(wl, "__esModule", { value: true }), wl.default = void 0, wl.default = {};
    var uo, xl = {};
    Object.defineProperty(xl, "__esModule", { value: true }), xl.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(uo || (uo = {})), uo.touchAction, uo.boxSizing, uo.noListeners;
    var Hm = { id: "dev-tools", install: function() {
    } };
    xl.default = Hm;
    var Bn = {};
    Object.defineProperty(Bn, "__esModule", { value: true }), Bn.default = u(/* @__PURE__ */ __name(function i(o) {
      var l = {};
      for (var c in o) {
        var h = o[c];
        a.default.plainObject(h) ? l[c] = i(h) : a.default.array(h) ? l[c] = Pe.from(h) : l[c] = h;
      }
      return l;
    }, "i"), "t");
    var qn = {};
    function Dc(i, o) {
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
          } catch (I) {
            O = true, E = I;
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
            return kc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? kc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Dc, "Dc");
    u(Dc, "be");
    function kc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(kc, "kc");
    u(kc, "xe");
    function $m(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name($m, "$m");
    u($m, "we");
    function Fn(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Fn, "Fn");
    u(Fn, "_e"), Object.defineProperty(qn, "__esModule", { value: true }), qn.default = void 0, qn.getRectOffset = Nc;
    var Bm = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Fn(this, "states", []), Fn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), Fn(this, "startDelta", void 0), Fn(this, "result", void 0), Fn(this, "endResult", void 0), Fn(this, "edges", void 0), Fn(this, "interaction", void 0), this.interaction = c, this.result = Oa();
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(c, h) {
        var b = c.phase, E = this.interaction, y = function(O) {
          var I = O.interactable.options[O.prepared.name], P = I.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var j = I[N];
            return j && j.enabled && { options: j, methods: j._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(E);
        this.prepareStates(y), this.edges = (0, q.default)({}, E.edges), this.startOffset = Nc(E.rect, h), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: b, pageCoords: h, preEnd: false });
        return this.result = Oa(), this.startAll(x), this.result = this.setAll(x);
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
        for (var x = E ? this.states.slice(E) : this.states, O = Oa(c.coords, c.rect), I = 0; I < x.length; I++) {
          var P, N = x[I], j = N.options, D = (0, q.default)({}, c.coords), F = null;
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
        var h = this.interaction, b = c.phase, E = h.coords.cur, y = h.coords.start, x = this.result, O = this.startDelta, I = x.delta;
        b === "start" && (0, q.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[y, O], [E, I]].length; P++) {
          var N = Dc([[y, O], [E, I]][P], 2), j = N[0], D = N[1];
          j.page.x += D.x, j.page.y += D.y, j.client.x += D.x, j.client.y += D.y;
        }
        var F = this.result.rectDelta, Z = c.rect || h.rect;
        Z.left += F.left, Z.right += F.right, Z.top += F.top, Z.bottom += F.bottom, Z.width = Z.right - Z.left, Z.height = Z.bottom - Z.top;
      } }, { key: "setAndApply", value: function(c) {
        var h = this.interaction, b = c.phase, E = c.preEnd, y = c.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: b, pageCoords: c.modifiedCoords || h.coords.cur.page }));
        if (this.result = x, !x.changed && (!y || y < this.states.length) && h.interacting())
          return false;
        if (c.modifiedCoords) {
          var O = h.coords.cur.page, I = { x: c.modifiedCoords.x - O.x, y: c.modifiedCoords.y - O.y };
          x.coords.x += I.x, x.coords.y += I.y, x.delta.x += I.x, x.delta.y += I.y;
        }
        this.applyToInteraction(c);
      } }, { key: "beforeEnd", value: function(c) {
        var h = c.interaction, b = c.event, E = this.states;
        if (E && E.length) {
          for (var y = false, x = 0; x < E.length; x++) {
            var O = E[x];
            c.state = O;
            var I = O.options, P = O.methods, N = P.beforeEnd && P.beforeEnd(c);
            if (N)
              return this.endResult = N, false;
            y = y || !y && this.shouldDo(I, true, c.phase, true);
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
          for (var x = y.startDelta, O = y.result, I = O.delta, P = O.rectDelta, N = [[b.start, x], [b.cur, I]], j = 0; j < N.length; j++) {
            var D = Dc(N[j], 2), F = D[0], Z = D[1];
            F.page.x -= Z.x, F.page.y -= Z.y, F.client.x -= Z.x, F.client.y -= Z.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(c, h, b, E) {
        return !(!c || c.enabled === false || E && !c.endOnly || c.endOnly && !h || b === "start" && !c.setStart);
      } }, { key: "copyFrom", value: function(c) {
        this.startOffset = c.startOffset, this.startDelta = c.startDelta, this.edges = c.edges, this.states = c.states.map(function(h) {
          return (0, Bn.default)(h);
        }), this.result = Oa((0, q.default)({}, c.result.coords), (0, q.default)({}, c.result.rect));
      } }, { key: "destroy", value: function() {
        for (var c in this)
          this[c] = null;
      } }]) && $m(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function Oa(i, o) {
      return { rect: o, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Oa, "Oa");
    u(Oa, "Oe");
    function Nc(i, o) {
      return i ? { left: o.x - i.left, top: o.y - i.top, right: i.right - o.x, bottom: i.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Nc, "Nc");
    u(Nc, "Ee"), qn.default = Bm;
    var Et = {};
    function Ma(i) {
      var o = i.iEvent, l = i.interaction.modification.result;
      l && (o.modifiers = l.eventProps);
    }
    __name(Ma, "Ma");
    u(Ma, "Te"), Object.defineProperty(Et, "__esModule", { value: true }), Et.addEventModifiers = Ma, Et.default = void 0, Et.makeModifier = function(i, o) {
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
    var qm = { id: "modifiers/base", before: ["actions"], install: function(i) {
      i.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.modification = new qn.default(o);
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
    } } }, Fm = qm;
    Et.default = Fm;
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
    function Um(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Um, "Um");
    u(Um, "Ae");
    function Sl(i, o) {
      return Sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Sl(i, o);
    }
    __name(Sl, "Sl");
    u(Sl, "ze");
    function Wm(i, o) {
      if (o && (El(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return He(i);
    }
    __name(Wm, "Wm");
    u(Wm, "Ce");
    function He(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(He, "He");
    u(He, "Re");
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
    var _c = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && Sl(y, x);
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
        var y, x = Ia(c);
        if (h) {
          var O = Ia(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Wm(this, y);
      });
      function E(y, x, O, I, P, N, j) {
        var D;
        (function(qe, Se) {
          if (!(qe instanceof Se))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Ve(He(D = b.call(this, y)), "relatedTarget", null), Ve(He(D), "screenX", void 0), Ve(He(D), "screenY", void 0), Ve(He(D), "button", void 0), Ve(He(D), "buttons", void 0), Ve(He(D), "ctrlKey", void 0), Ve(He(D), "shiftKey", void 0), Ve(He(D), "altKey", void 0), Ve(He(D), "metaKey", void 0), Ve(He(D), "page", void 0), Ve(He(D), "client", void 0), Ve(He(D), "delta", void 0), Ve(He(D), "rect", void 0), Ve(He(D), "x0", void 0), Ve(He(D), "y0", void 0), Ve(He(D), "t0", void 0), Ve(He(D), "dt", void 0), Ve(He(D), "duration", void 0), Ve(He(D), "clientX0", void 0), Ve(He(D), "clientY0", void 0), Ve(He(D), "velocity", void 0), Ve(He(D), "speed", void 0), Ve(He(D), "swipe", void 0), Ve(He(D), "axes", void 0), Ve(He(D), "preEnd", void 0), P = P || y.element;
        var F = y.interactable, Z = (F && F.options || co.defaults).deltaSource, W = (0, ze.default)(F, P, O), ne = I === "start", ae = I === "end", ye = ne ? He(D) : y.prevEvent, De = ne ? y.coords.start : ae ? { page: ye.page, client: ye.client, timeStamp: y.coords.cur.timeStamp } : y.coords.cur;
        return D.page = (0, q.default)({}, De.page), D.client = (0, q.default)({}, De.client), D.rect = (0, q.default)({}, y.rect), D.timeStamp = De.timeStamp, ae || (D.page.x -= W.x, D.page.y -= W.y, D.client.x -= W.x, D.client.y -= W.y), D.ctrlKey = x.ctrlKey, D.altKey = x.altKey, D.shiftKey = x.shiftKey, D.metaKey = x.metaKey, D.button = x.button, D.buttons = x.buttons, D.target = P, D.currentTarget = P, D.preEnd = N, D.type = j || O + (I || ""), D.interactable = F, D.t0 = ne ? y.pointers[y.pointers.length - 1].downTime : ye.t0, D.x0 = y.coords.start.page.x - W.x, D.y0 = y.coords.start.page.y - W.y, D.clientX0 = y.coords.start.client.x - W.x, D.clientY0 = y.coords.start.client.y - W.y, D.delta = ne || ae ? { x: 0, y: 0 } : { x: D[Z].x - ye[Z].x, y: D[Z].y - ye[Z].y }, D.dt = y.coords.delta.timeStamp, D.duration = D.timeStamp - D.t0, D.velocity = (0, q.default)({}, y.coords.velocity[Z]), D.speed = (0, Je.default)(D.velocity.x, D.velocity.y), D.swipe = ae || I === "inertiastart" ? D.getSwipe() : null, D;
      }
      __name(E, "E");
      return u(E, "a"), o = E, (l = [{ key: "getSwipe", value: function() {
        var y = this._interaction;
        if (y.prevEvent.speed < 600 || this.timeStamp - y.prevEvent.timeStamp > 150)
          return null;
        var x = 180 * Math.atan2(y.prevEvent.velocityY, y.prevEvent.velocityX) / Math.PI;
        x < 0 && (x += 360);
        var O = 112.5 <= x && x < 247.5, I = 202.5 <= x && x < 337.5;
        return { up: I, down: !I && 22.5 <= x && x < 157.5, left: O, right: !O && (292.5 <= x || x < 67.5), angle: x, speed: y.prevEvent.speed, velocity: { x: y.prevEvent.velocityX, y: y.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && Um(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(ar.BaseEvent);
    po.InteractEvent = _c, Object.defineProperties(_c.prototype, { pageX: { get: function() {
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
    function Lc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Lc, "Lc");
    u(Lc, "We");
    function Vm(i, o, l) {
      return o && Lc(i.prototype, o), l && Lc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Vm, "Vm");
    u(Vm, "Le");
    function ho(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(ho, "ho");
    u(ho, "Ue"), Object.defineProperty(fo, "__esModule", { value: true }), fo.PointerInfo = void 0;
    var Ym = Vm(u(/* @__PURE__ */ __name(function i(o, l, c, h, b) {
      (function(E, y) {
        if (!(E instanceof y))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), ho(this, "id", void 0), ho(this, "pointer", void 0), ho(this, "event", void 0), ho(this, "downTime", void 0), ho(this, "downTarget", void 0), this.id = o, this.pointer = l, this.event = c, this.downTime = h, this.downTarget = b;
    }, "i"), "t"));
    fo.PointerInfo = Ym;
    var Aa, Pa, Qt = {};
    function Xm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Xm, "Xm");
    u(Xm, "$e");
    function Ke(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ke, "Ke");
    u(Ke, "He"), Object.defineProperty(Qt, "__esModule", { value: true }), Qt.Interaction = void 0, Object.defineProperty(Qt, "PointerInfo", { enumerable: true, get: function() {
      return fo.PointerInfo;
    } }), Qt.default = Qt._ProxyValues = Qt._ProxyMethods = void 0, Qt._ProxyValues = Aa, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(Aa || (Qt._ProxyValues = Aa = {})), Qt._ProxyMethods = Pa, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(Pa || (Qt._ProxyMethods = Pa = {}));
    var Zm = 0, Gc = function() {
      function i(c) {
        var h = this, b = c.pointerType, E = c.scopeFire;
        (function(N, j) {
          if (!(N instanceof j))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ke(this, "interactable", null), Ke(this, "element", null), Ke(this, "rect", null), Ke(this, "_rects", void 0), Ke(this, "edges", null), Ke(this, "_scopeFire", void 0), Ke(this, "prepared", { name: null, axis: null, edges: null }), Ke(this, "pointerType", void 0), Ke(this, "pointers", []), Ke(this, "downEvent", null), Ke(this, "downPointer", {}), Ke(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ke(this, "prevEvent", null), Ke(this, "pointerIsDown", false), Ke(this, "pointerWasMoved", false), Ke(this, "_interacting", false), Ke(this, "_ending", false), Ke(this, "_stopped", true), Ke(this, "_proxy", null), Ke(this, "simulation", null), Ke(this, "doMove", (0, sr.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ke(this, "coords", { start: J.newCoords(), prev: J.newCoords(), cur: J.newCoords(), delta: J.newCoords(), velocity: J.newCoords() }), Ke(this, "_id", Zm++), this._scopeFire = E, this.pointerType = b;
        var y = this;
        this._proxy = {};
        var x = u(function(N) {
          Object.defineProperty(h._proxy, N, { get: function() {
            return y[N];
          } });
        }, "a");
        for (var O in Aa)
          x(O);
        var I = u(function(N) {
          Object.defineProperty(h._proxy, N, { value: function() {
            return y[N].apply(y, arguments);
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
      } }, { key: "pointerDown", value: function(c, h, b) {
        var E = this.updatePointer(c, h, b, true), y = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: c, event: h, eventTarget: b, pointerIndex: E, pointerInfo: y, type: "down", interaction: this });
      } }, { key: "start", value: function(c, h, b) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (c.name === "gesture" ? 2 : 1) || !h.options[c.name].enabled) && ((0, sr.copyAction)(this.prepared, c), this.interactable = h, this.element = b, this.rect = h.getRect(b), this.edges = this.prepared.edges ? (0, q.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(c, h, b) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(c, h, b, false);
        var E, y, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, y = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Je.default)(E, y) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(c), I = { pointer: c, pointerIndex: O, pointerInfo: this.pointers[O], event: h, type: "move", eventTarget: b, dx: E, dy: y, duplicate: x, interaction: this };
        x || J.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), x || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && J.copyCoords(this.coords.prev, this.coords.cur));
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
        return E = E !== false && (E || /(down|start)$/i.test(h.type)), O ? O.pointer = c : (O = new fo.PointerInfo(y, c, h, null, null), x = this.pointers.length, this.pointers.push(O)), J.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
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
        return new po.InteractEvent(this, c, this.prepared.name, h, this.element, b, E);
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
      } }], l && Xm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Qt.Interaction = Gc;
    var Km = Gc;
    Qt.default = Km;
    var Un = {};
    function jc(i) {
      i.pointerIsDown && (Cl(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(jc, "jc");
    u(jc, "tn");
    function Hc(i) {
      Tl(i.interaction);
    }
    __name(Hc, "Hc");
    u(Hc, "en");
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
    function Jm(i) {
      var o = i.x, l = i.y;
      this.offset.pending.x += o, this.offset.pending.y += l, this.offset.total.x += o, this.offset.total.y += l;
    }
    __name(Jm, "Jm");
    u(Jm, "rn");
    function Cl(i, o) {
      var l = i.page, c = i.client, h = o.x, b = o.y;
      l.x += h, l.y += b, c.x += h, c.y += b;
    }
    __name(Cl, "Cl");
    u(Cl, "on"), Object.defineProperty(Un, "__esModule", { value: true }), Un.addTotal = jc, Un.applyPending = Tl, Un.default = void 0, Qt._ProxyMethods.offsetBy = "";
    var Qm = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = Jm;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return jc(i.interaction);
    }, "interactions:before-action-start": Hc, "interactions:before-action-move": Hc, "interactions:before-action-end": function(i) {
      var o = i.interaction;
      if (Tl(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, ev = Qm;
    Un.default = ev;
    var Ci = {};
    function tv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(tv, "tv");
    u(tv, "un");
    function gt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(gt, "gt");
    u(gt, "cn"), Object.defineProperty(Ci, "__esModule", { value: true }), Ci.default = Ci.InertiaState = void 0;
    var $c = function() {
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
        var h = this.interaction, b = za(h);
        if (!b || !b.enabled)
          return false;
        var E = h.coords.velocity.client, y = (0, Je.default)(E.x, E.y), x = this.modification || (this.modification = new qn.default(h));
        if (x.copyFrom(h.modification), this.t0 = h._now(), this.allowResume = b.allowResume, this.v0 = y, this.currentOffset = { x: 0, y: 0 }, this.startCoords = h.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - h.coords.cur.timeStamp < 50 && y > b.minSpeed && y > b.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return h.modification.result.rect = null, h.offsetBy(this.targetOffset), h._doPhase({ interaction: h, event: c, phase: "inertiastart" }), h.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), h.modification.result.rect = null, this.active = true, h.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var c = this, h = this.interaction.coords.velocity.client, b = za(this.interaction), E = b.resistance, y = -Math.log(b.endSpeed / this.v0) / E;
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
        this.timeout = At.default.request(function() {
          h.active && c();
        });
      } }, { key: "inertiaTick", value: function() {
        var c, h, b, E, y, x = this, O = this.interaction, I = za(O).resistance, P = (O._now() - this.t0) / 1e3;
        if (P < this.te) {
          var N, j = 1 - (Math.exp(-I * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (c = this.targetOffset.x, h = this.targetOffset.y, b = this.modifiedOffset.x, E = this.modifiedOffset.y, N = { x: Bc(y = j, 0, c, b), y: Bc(y, 0, h, E) }) : N = { x: this.targetOffset.x * j, y: this.targetOffset.y * j };
          var D = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += D.x, this.currentOffset.y += D.y, O.offsetBy(D), O.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          O.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var c = this, h = this.interaction, b = h._now() - this.t0, E = za(h).smoothEndDuration;
        if (b < E) {
          var y = { x: qc(b, 0, this.targetOffset.x, E), y: qc(b, 0, this.targetOffset.y, E) }, x = { x: y.x - this.currentOffset.x, y: y.y - this.currentOffset.y };
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
        this.active = this.smoothEnd = false, this.interaction.simulation = null, At.default.cancel(this.timeout);
      } }]) && tv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function za(i) {
      var o = i.interactable, l = i.prepared;
      return o && o.options && l.name && o.options[l.name].inertia;
    }
    __name(za, "za");
    u(za, "dn"), Ci.InertiaState = $c;
    var rv = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o = i.defaults;
      i.usePlugin(Un.default), i.usePlugin(Et.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.inertia = new $c(o);
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
    function Bc(i, o, l, c) {
      var h = 1 - i;
      return h * h * o + 2 * h * i * l + i * i * c;
    }
    __name(Bc, "Bc");
    u(Bc, "vn");
    function qc(i, o, l, c) {
      return -l * (i /= c) * (i - 2) + o;
    }
    __name(qc, "qc");
    u(qc, "hn");
    var nv = rv;
    Ci.default = nv;
    var mo = {};
    function iv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(iv, "iv");
    u(iv, "mn");
    function vo(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(vo, "vo");
    u(vo, "bn");
    function Fc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        if (i.immediatePropagationStopped)
          break;
        c(i);
      }
    }
    __name(Fc, "Fc");
    u(Fc, "xn"), Object.defineProperty(mo, "__esModule", { value: true }), mo.Eventable = void 0;
    var ov = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), vo(this, "options", void 0), vo(this, "types", {}), vo(this, "propagationStopped", false), vo(this, "immediatePropagationStopped", false), vo(this, "global", void 0), this.options = (0, q.default)({}, c || {});
      }
      __name(i, "i");
      u(i, "t");
      var o, l;
      return o = i, (l = [{ key: "fire", value: function(c) {
        var h, b = this.global;
        (h = this.types[c.type]) && Fc(c, h), !c.propagationStopped && b && (h = b[c.type]) && Fc(c, h);
      } }, { key: "on", value: function(c, h) {
        var b = (0, Ae.default)(c, h);
        for (c in b)
          this.types[c] = Pe.merge(this.types[c] || [], b[c]);
      } }, { key: "off", value: function(c, h) {
        var b = (0, Ae.default)(c, h);
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
      } }]) && iv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    mo.Eventable = ov;
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
      var o = u(/* @__PURE__ */ __name(function l(c, h) {
        var b = i.interactables.get(c, h);
        return b || ((b = i.interactables.new(c, h)).events.global = l.globalEvents), b;
      }, "l"), "e");
      return o.getPointerAverage = J.pointerAverage, o.getTouchBBox = J.touchBBox, o.getTouchDistance = J.touchDistance, o.getTouchAngle = J.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = i, o.use = function(l, c) {
        return this.scope.usePlugin(l, c), this;
      }, o.isSet = function(l, c) {
        return !!this.scope.interactables.get(l, c && c.context);
      }, o.on = (0, sr.warnOnce)(function(l, c, h) {
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
        return (0, go.default)(l, this.scope.actions) ? this.globalEvents[l] ? this.globalEvents[l].push(c) : this.globalEvents[l] = [c] : this.scope.events.add(this.scope.document, l, c, { options: h }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, sr.warnOnce)(function(l, c, h) {
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
        return (0, go.default)(l, this.scope.actions) ? l in this.globalEvents && (x = this.globalEvents[l].indexOf(c)) !== -1 && this.globalEvents[l].splice(x, 1) : this.scope.events.remove(this.scope.document, l, c, h), this;
      }, "The interact.off() method is being deprecated"), o.debug = function() {
        return this.scope;
      }, o.supportsTouch = function() {
        return B.default.supportsTouch;
      }, o.supportsPointerEvent = function() {
        return B.default.supportsPointerEvent;
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
    function av(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(av, "av");
    u(av, "En");
    function Kr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Kr, "Kr");
    u(Kr, "Sn"), Object.defineProperty(Ra, "__esModule", { value: true }), Ra.Interactable = void 0;
    var sv = function() {
      function i(c, h, b, E) {
        (function(y, x) {
          if (!(y instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Kr(this, "options", void 0), Kr(this, "_actions", void 0), Kr(this, "target", void 0), Kr(this, "events", new mo.Eventable()), Kr(this, "_context", void 0), Kr(this, "_win", void 0), Kr(this, "_doc", void 0), Kr(this, "_scopeEvents", void 0), Kr(this, "_rectChecker", void 0), this._actions = h.actions, this.target = c, this._context = h.context || b, this._win = (0, r.getWindow)((0, z.trySelector)(c) ? this._context : c), this._doc = this._win.document, this._scopeEvents = E, this.set(h);
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
          y === "listeners" && this.updatePerActionListeners(c, x.listeners, O), a.default.array(O) ? x[y] = Pe.from(O) : a.default.plainObject(O) ? (x[y] = (0, q.default)(x[y] || {}, (0, Bn.default)(O)), a.default.object(b.perAction[y]) && "enabled" in b.perAction[y] && (x[y].enabled = O.enabled !== false)) : a.default.bool(O) && a.default.object(b.perAction[y]) ? x[y].enabled = O : x[y] = O;
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
        var y = c === "on" ? "add" : "remove", x = (0, Ae.default)(h, b);
        for (var O in x) {
          O === "wheel" && (O = B.default.wheelEvent);
          for (var I = 0; I < x[O].length; I++) {
            var P = x[O][I];
            (0, go.default)(O, this._actions) ? this.events[c](O, P) : a.default.string(this.target) ? this._scopeEvents["".concat(y, "Delegate")](this.target, this._context, O, P, E) : this._scopeEvents[y](this.target, O, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(c, h, b) {
        return this._onOff("on", c, h, b);
      } }, { key: "off", value: function(c, h, b) {
        return this._onOff("off", c, h, b);
      } }, { key: "set", value: function(c) {
        var h = this._defaults;
        for (var b in a.default.object(c) || (c = {}), this.options = (0, Bn.default)(h.base), this._actions.methodDict) {
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
              for (var I = O.length - 1; I >= 0; I--)
                this._scopeEvents.removeDelegate(this.target, this._context, c, O[I][0], O[I][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && av(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Ra.Interactable = sv;
    var Da = {};
    function lv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(lv, "lv");
    u(lv, "Mn");
    function Ml(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ml, "Ml");
    u(Ml, "kn"), Object.defineProperty(Da, "__esModule", { value: true }), Da.InteractableSet = void 0;
    var uv = function() {
      function i(c) {
        var h = this;
        (function(b, E) {
          if (!(b instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ml(this, "list", []), Ml(this, "selectorMap", {}), Ml(this, "scope", void 0), this.scope = c, c.addListeners({ "interactable:unset": function(b) {
          var E = b.interactable, y = E.target, x = E._context, O = a.default.string(y) ? h.selectorMap[y] : y[h.scope.id], I = Pe.findIndex(O, function(P) {
            return P.context === x;
          });
          O[I] && (O[I].context = null, O[I].interactable = null), O.splice(I, 1);
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
      } }]) && lv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Da.InteractableSet = uv;
    var ka = {};
    function cv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(cv, "cv");
    u(cv, "An");
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
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var b, E, y = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (b = h.next()).done) && (y.push(b.value), !c || y.length !== c); x = true)
              ;
          } catch (I) {
            O = true, E = I;
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
            return Uc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Uc(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Al, "Al");
    u(Al, "Cn");
    function Uc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Uc, "Uc");
    u(Uc, "Rn"), Object.defineProperty(ka, "__esModule", { value: true }), ka.default = void 0;
    var pv = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
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
      } }]) && cv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function bo(i) {
      if (!a.default.object(i))
        return { capture: !!i, passive: false };
      var o = (0, q.default)({}, i);
      return o.capture = !!i.capture, o.passive = !!i.passive, o;
    }
    __name(bo, "bo");
    u(bo, "Xn");
    var dv = { id: "events", install: function(i) {
      var o, l = [], c = {}, h = [], b = { add: E, remove: y, addDelegate: function(I, P, N, j, D) {
        var F = bo(D);
        if (!c[N]) {
          c[N] = [];
          for (var Z = 0; Z < h.length; Z++) {
            var W = h[Z];
            E(W, N, x), E(W, N, O, true);
          }
        }
        var ne = c[N], ae = Pe.find(ne, function(ye) {
          return ye.selector === I && ye.context === P;
        });
        ae || (ae = { selector: I, context: P, listeners: [] }, ne.push(ae)), ae.listeners.push([j, F]);
      }, removeDelegate: function(I, P, N, j, D) {
        var F, Z = bo(D), W = c[N], ne = false;
        if (W)
          for (F = W.length - 1; F >= 0; F--) {
            var ae = W[F];
            if (ae.selector === I && ae.context === P) {
              for (var ye = ae.listeners, De = ye.length - 1; De >= 0; De--) {
                var qe = Al(ye[De], 2), Se = qe[0], $e = qe[1], yr = $e.capture, Qr = $e.passive;
                if (Se === j && yr === Z.capture && Qr === Z.passive) {
                  ye.splice(De, 1), ye.length || (W.splice(F, 1), y(P, N, x), y(P, N, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: O, delegatedEvents: c, documents: h, targets: l, supportsOptions: false, supportsPassive: false };
      function E(I, P, N, j) {
        var D = bo(j), F = Pe.find(l, function(Z) {
          return Z.eventTarget === I;
        });
        F || (F = { eventTarget: I, events: {} }, l.push(F)), F.events[P] || (F.events[P] = []), I.addEventListener && !Pe.contains(F.events[P], N) && (I.addEventListener(P, N, b.supportsOptions ? D : D.capture), F.events[P].push(N));
      }
      __name(E, "E");
      u(E, "s");
      function y(I, P, N, j) {
        var D = bo(j), F = Pe.findIndex(l, function(De) {
          return De.eventTarget === I;
        }), Z = l[F];
        if (Z && Z.events)
          if (P !== "all") {
            var W = false, ne = Z.events[P];
            if (ne) {
              if (N === "all") {
                for (var ae = ne.length - 1; ae >= 0; ae--)
                  y(I, P, ne[ae], D);
                return;
              }
              for (var ye = 0; ye < ne.length; ye++)
                if (ne[ye] === N) {
                  I.removeEventListener(P, N, b.supportsOptions ? D : D.capture), ne.splice(ye, 1), ne.length === 0 && (delete Z.events[P], W = true);
                  break;
                }
            }
            W && !Object.keys(Z.events).length && l.splice(F, 1);
          } else
            for (P in Z.events)
              Z.events.hasOwnProperty(P) && y(I, P, "all");
      }
      __name(y, "y");
      u(y, "l");
      function x(I, P) {
        for (var N = bo(P), j = new pv(I), D = c[I.type], F = Al(J.getEventTargets(I), 1)[0], Z = F; a.default.element(Z); ) {
          for (var W = 0; W < D.length; W++) {
            var ne = D[W], ae = ne.selector, ye = ne.context;
            if (z.matchesSelector(Z, ae) && z.nodeContains(ye, F) && z.nodeContains(ye, Z)) {
              var De = ne.listeners;
              j.currentTarget = Z;
              for (var qe = 0; qe < De.length; qe++) {
                var Se = Al(De[qe], 2), $e = Se[0], yr = Se[1], Qr = yr.capture, Xl = yr.passive;
                Qr === N.capture && Xl === N.passive && $e(j);
              }
            }
          }
          Z = z.parentNode(Z);
        }
      }
      __name(x, "x");
      u(x, "u");
      function O(I) {
        return x(I, true);
      }
      __name(O, "O");
      return u(O, "c"), (o = i.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return b.supportsOptions = true;
      }, get passive() {
        return b.supportsPassive = true;
      } }), i.events = b, b;
    } };
    ka.default = dv;
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
          if (y.simulation && !Wc(y, l))
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
        if (Wc(h, o))
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
    function Wc(i, o) {
      return i.pointers.some(function(l) {
        return l.id === o;
      });
    }
    __name(Wc, "Wc");
    u(Wc, "Ln");
    var fv = _a;
    Na.default = fv;
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
    function Vc(i, o) {
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
          } catch (I) {
            O = true, E = I;
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
    __name(Vc, "Vc");
    u(Vc, "qn");
    function Yc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(Yc, "Yc");
    u(Yc, "Gn");
    function hv(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(hv, "hv");
    u(hv, "$n");
    function mv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(mv, "mv");
    u(mv, "Hn");
    function zl(i, o) {
      return zl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, zl(i, o);
    }
    __name(zl, "zl");
    u(zl, "Kn");
    function vv(i, o) {
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
    __name(vv, "vv");
    u(vv, "Zn");
    function Ga(i) {
      return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ga(i);
    }
    __name(Ga, "Ga");
    u(Ga, "Jn"), Object.defineProperty(La, "__esModule", { value: true }), La.default = void 0;
    var Rl = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Xc(i, o) {
      return function(l) {
        var c = o.interactions.list, h = J.getPointerType(l), b = Vc(J.getEventTargets(l), 2), E = b[0], y = b[1], x = [];
        if (/^touch/.test(l.type)) {
          o.prevTouchTime = o.now();
          for (var O = 0; O < l.changedTouches.length; O++) {
            var I = l.changedTouches[O], P = { pointer: I, pointerId: J.getPointerId(I), pointerType: h, eventType: l.type, eventTarget: E, curEventTarget: y, scope: o }, N = Zc(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, N]);
          }
        } else {
          var j = false;
          if (!B.default.supportsPointerEvent && /mouse/.test(l.type)) {
            for (var D = 0; D < c.length && !j; D++)
              j = c[D].pointerType !== "mouse" && c[D].pointerIsDown;
            j = j || o.now() - o.prevTouchTime < 500 || l.timeStamp === 0;
          }
          if (!j) {
            var F = { pointer: l, pointerId: J.getPointerId(l), pointerType: h, eventType: l.type, curEventTarget: y, eventTarget: E, scope: o }, Z = Zc(F);
            x.push([F.pointer, F.eventTarget, F.curEventTarget, Z]);
          }
        }
        for (var W = 0; W < x.length; W++) {
          var ne = Vc(x[W], 4), ae = ne[0], ye = ne[1], De = ne[2];
          ne[3][i](ae, l, ye, De);
        }
      };
    }
    __name(Xc, "Xc");
    u(Xc, "tr");
    function Zc(i) {
      var o = i.pointerType, l = i.scope, c = { interaction: Na.default.search(i), searchDetails: i };
      return l.fire("interactions:find", c), c.interaction || l.interactions.new({ pointerType: o });
    }
    __name(Zc, "Zc");
    u(Zc, "er");
    function Dl(i, o) {
      var l = i.doc, c = i.scope, h = i.options, b = c.interactions.docEvents, E = c.events, y = E[o];
      for (var x in c.browser.isIOS && !h.events && (h.events = { passive: false }), E.delegatedEvents)
        y(l, x, E.delegateListener), y(l, x, E.delegateUseCapture, true);
      for (var O = h && h.events, I = 0; I < b.length; I++) {
        var P = b[I];
        y(l, P.type, P.listener, O);
      }
    }
    __name(Dl, "Dl");
    u(Dl, "nr");
    var gv = { id: "core/interactions", install: function(i) {
      for (var o = {}, l = 0; l < Rl.length; l++) {
        var c = Rl[l];
        o[c] = Xc(c, i);
      }
      var h, b = B.default.pEventTypes;
      function E() {
        for (var y = 0; y < i.interactions.list.length; y++) {
          var x = i.interactions.list[y];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var O = function() {
              var P = x.pointers[I];
              i.documents.some(function(N) {
                var j = N.doc;
                return (0, z.nodeContains)(j, P.downTarget);
              }) || x.removePointer(P.pointer, P.event);
            }, I = 0; I < x.pointers.length; I++)
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
          D.prototype = Object.create(F && F.prototype, { constructor: { value: D, writable: true, configurable: true } }), Object.defineProperty(D, "prototype", { writable: false }), F && zl(D, F);
        })(j, y);
        var x, O, I, P, N = (I = j, P = function() {
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
          var D, F = Ga(I);
          if (P) {
            var Z = Ga(this).constructor;
            D = Reflect.construct(F, arguments, Z);
          } else
            D = F.apply(this, arguments);
          return vv(this, D);
        });
        function j() {
          return hv(this, j), N.apply(this, arguments);
        }
        __name(j, "j");
        return u(j, "s"), x = j, (O = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(D) {
          i.interactions.pointerMoveTolerance = D;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && mv(x.prototype, O), Object.defineProperty(x, "prototype", { writable: false }), j;
      }(Qt.default), i.interactions = { list: [], new: function(y) {
        y.scopeFire = function(O, I) {
          return i.fire(O, I);
        };
        var x = new i.Interaction(y);
        return i.interactions.list.push(x), x;
      }, listeners: o, docEvents: h, pointerMoveTolerance: 1 }, i.usePlugin(Ti.default);
    }, listeners: { "scope:add-document": function(i) {
      return Dl(i, "add");
    }, "scope:remove-document": function(i) {
      return Dl(i, "remove");
    }, "interactable:unset": function(i, o) {
      for (var l = i.interactable, c = o.interactions.list.length - 1; c >= 0; c--) {
        var h = o.interactions.list[c];
        h.interactable === l && (h.stop(), o.fire("interactions:destroy", { interaction: h }), h.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(c, 1));
      }
    } }, onDocSignal: Dl, doOnInteractions: Xc, methodNames: Rl }, bv = gv;
    La.default = bv;
    var yo = {};
    function kl(i) {
      return kl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, kl(i);
    }
    __name(kl, "kl");
    u(kl, "ar");
    function wo() {
      return wo = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, o, l) {
        var c = yv(i, o);
        if (c) {
          var h = Object.getOwnPropertyDescriptor(c, o);
          return h.get ? h.get.call(arguments.length < 3 ? i : l) : h.value;
        }
      }, wo.apply(this, arguments);
    }
    __name(wo, "wo");
    u(wo, "sr");
    function yv(i, o) {
      for (; !Object.prototype.hasOwnProperty.call(i, o) && (i = vn(i)) !== null; )
        ;
      return i;
    }
    __name(yv, "yv");
    u(yv, "lr");
    function Nl(i, o) {
      return Nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Nl(i, o);
    }
    __name(Nl, "Nl");
    u(Nl, "ur");
    function wv(i, o) {
      if (o && (kl(o) === "object" || typeof o == "function"))
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
    u(wv, "cr");
    function vn(i) {
      return vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, vn(i);
    }
    __name(vn, "vn");
    u(vn, "fr");
    function Kc(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Kc, "Kc");
    u(Kc, "dr");
    function Jc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Jc, "Jc");
    u(Jc, "pr");
    function Qc(i, o, l) {
      return o && Jc(i.prototype, o), l && Jc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Qc, "Qc");
    u(Qc, "vr");
    function St(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(St, "St");
    u(St, "hr"), Object.defineProperty(yo, "__esModule", { value: true }), yo.Scope = void 0, yo.initScope = ep;
    var xv = function() {
      function i() {
        var o = this;
        Kc(this, i), St(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), St(this, "isInitialized", false), St(this, "listenerMaps", []), St(this, "browser", B.default), St(this, "defaults", (0, Bn.default)(co.defaults)), St(this, "Eventable", mo.Eventable), St(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), St(this, "interactStatic", (0, Ol.createInteractStatic)(this)), St(this, "InteractEvent", po.InteractEvent), St(this, "Interactable", void 0), St(this, "interactables", new Da.InteractableSet(this)), St(this, "_win", void 0), St(this, "document", void 0), St(this, "window", void 0), St(this, "documents", []), St(this, "_plugins", { list: [], map: {} }), St(this, "onWindowUnload", function(c) {
          return o.removeDocument(c.target);
        });
        var l = this;
        this.Interactable = function(c) {
          (function(x, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(O && O.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), O && Nl(x, O);
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
            var x, O = vn(h);
            if (b) {
              var I = vn(this).constructor;
              x = Reflect.construct(O, arguments, I);
            } else
              x = O.apply(this, arguments);
            return wv(this, x);
          });
          function y() {
            return Kc(this, y), E.apply(this, arguments);
          }
          __name(y, "y");
          return u(y, "i"), Qc(y, [{ key: "_defaults", get: function() {
            return l.defaults;
          } }, { key: "set", value: function(x) {
            return wo(vn(y.prototype), "set", this).call(this, x), l.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            wo(vn(y.prototype), "unset", this).call(this);
            var x = l.interactables.list.indexOf(this);
            x < 0 || (wo(vn(y.prototype), "unset", this).call(this), l.interactables.list.splice(x, 1), l.fire("interactable:unset", { interactable: this }));
          } }]), y;
        }(Ra.Interactable);
      }
      __name(i, "i");
      return u(i, "t"), Qc(i, [{ key: "addListeners", value: function(o, l) {
        this.listenerMaps.push({ id: l, map: o });
      } }, { key: "fire", value: function(o, l) {
        for (var c = 0; c < this.listenerMaps.length; c++) {
          var h = this.listenerMaps[c].map[o];
          if (h && h(l, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : ep(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, l) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, l), o.listeners && o.before) {
          for (var c = 0, h = this.listenerMaps.length, b = o.before.reduce(function(y, x) {
            return y[x] = true, y[tp(x)] = true, y;
          }, {}); c < h; c++) {
            var E = this.listenerMaps[c].id;
            if (b[E] || b[tp(E)])
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
    function ep(i, o) {
      return i.isInitialized = true, a.default.window(o) && r.init(o), C.default.init(o), B.default.init(o), At.default.init(o), i.window = o, i.document = o.document, i.usePlugin(La.default), i.usePlugin(ka.default), i;
    }
    __name(ep, "ep");
    u(ep, "yr");
    function tp(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(tp, "tp");
    u(tp, "mr"), yo.Scope = xv;
    var _l = {}, dt = {};
    Object.defineProperty(dt, "__esModule", { value: true });
    var Ev = {};
    dt.default = void 0, Object.keys(_l).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(Ev, i) || i in dt && dt[i] === _l[i] || Object.defineProperty(dt, i, { enumerable: true, get: function() {
        return _l[i];
      } }));
    });
    var rp = new yo.Scope(), Sv = rp.interactStatic;
    dt.default = Sv;
    var Tv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    rp.init(Tv);
    var ja = {};
    Object.defineProperty(ja, "__esModule", { value: true }), ja.default = void 0, ja.default = function() {
    };
    var Ha = {};
    Object.defineProperty(Ha, "__esModule", { value: true }), Ha.default = void 0, Ha.default = function() {
    };
    var $a = {};
    function np(i, o) {
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
          } catch (I) {
            O = true, E = I;
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
            return ip(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? ip(l, c) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(np, "np");
    u(np, "jr");
    function ip(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(ip, "ip");
    u(ip, "Mr"), Object.defineProperty($a, "__esModule", { value: true }), $a.default = void 0, $a.default = function(i) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(c) {
        var h = np(c, 2), b = h[0], E = h[1];
        return b in i || E in i;
      }), l = u(function(c, h) {
        for (var b = i.range, E = i.limits, y = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = i.offset, O = x === void 0 ? { x: 0, y: 0 } : x, I = { range: b, grid: i, x: null, y: null }, P = 0; P < o.length; P++) {
          var N = np(o[P], 2), j = N[0], D = N[1], F = Math.round((c - O.x) / i[j]), Z = Math.round((h - O.y) / i[D]);
          I[j] = Math.max(y.left, Math.min(y.right, F * i[j] + O.x)), I[D] = Math.max(y.top, Math.min(y.bottom, Z * i[D] + O.y));
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
      return $a.default;
    } });
    var Ba = {};
    Object.defineProperty(Ba, "__esModule", { value: true }), Ba.default = void 0;
    var Cv = { id: "snappers", install: function(i) {
      var o = i.interactStatic;
      o.snappers = (0, q.default)(o.snappers || {}, xo), o.createSnapGrid = o.snappers.grid;
    } }, Ov = Cv;
    Ba.default = Ov;
    var Oi = {};
    function op(i, o) {
      var l = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(i);
        o && (c = c.filter(function(h) {
          return Object.getOwnPropertyDescriptor(i, h).enumerable;
        })), l.push.apply(l, c);
      }
      return l;
    }
    __name(op, "op");
    u(op, "Cr");
    function Ll(i) {
      for (var o = 1; o < arguments.length; o++) {
        var l = arguments[o] != null ? arguments[o] : {};
        o % 2 ? op(Object(l), true).forEach(function(c) {
          Mv(i, c, l[c]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : op(Object(l)).forEach(function(c) {
          Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(l, c));
        });
      }
      return i;
    }
    __name(Ll, "Ll");
    u(Ll, "Rr");
    function Mv(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Mv, "Mv");
    u(Mv, "Fr"), Object.defineProperty(Oi, "__esModule", { value: true }), Oi.default = Oi.aspectRatio = void 0;
    var ap = { start: function(i) {
      var o = i.state, l = i.rect, c = i.edges, h = i.pageCoords, b = o.options.ratio, E = o.options, y = E.equalDelta, x = E.modifiers;
      b === "preserve" && (b = l.width / l.height), o.startCoords = (0, q.default)({}, h), o.startRect = (0, q.default)({}, l), o.ratio = b, o.equalDelta = y;
      var O = o.linkedEdges = { top: c.top || c.left && !c.bottom, left: c.left || c.top && !c.right, bottom: c.bottom || c.right && !c.top, right: c.right || c.bottom && !c.left };
      if (o.xIsPrimaryAxis = !(!c.left && !c.right), o.equalDelta) {
        var I = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        o.edgeSign = { x: I, y: I };
      } else
        o.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, q.default)(i.edges, O), x && x.length) {
        var P = new qn.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(Ll({}, i));
      }
    }, set: function(i) {
      var o = i.state, l = i.rect, c = i.coords, h = (0, q.default)({}, c), b = o.equalDelta ? Iv : Av;
      if (b(o, o.xIsPrimaryAxis, c, l), !o.subModification)
        return null;
      var E = (0, q.default)({}, l);
      (0, oe.addEdges)(o.linkedEdges, E, { x: c.x - h.x, y: c.y - h.y });
      var y = o.subModification.setAll(Ll(Ll({}, i), {}, { rect: E, edges: o.linkedEdges, pageCoords: c, prevCoords: c, prevRect: E })), x = y.delta;
      return y.changed && (b(o, Math.abs(x.x) > Math.abs(x.y), y.coords, y.rect), (0, q.default)(c, y.coords)), y.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Iv(i, o, l) {
      var c = i.startCoords, h = i.edgeSign;
      o ? l.y = c.y + (l.x - c.x) * h.y : l.x = c.x + (l.y - c.y) * h.x;
    }
    __name(Iv, "Iv");
    u(Iv, "Br");
    function Av(i, o, l, c) {
      var h = i.startRect, b = i.startCoords, E = i.ratio, y = i.edgeSign;
      if (o) {
        var x = c.width / E;
        l.y = b.y + (x - h.height) * y.y;
      } else {
        var O = c.height * E;
        l.x = b.x + (O - h.width) * y.x;
      }
    }
    __name(Av, "Av");
    u(Av, "Yr"), Oi.aspectRatio = ap;
    var Pv = (0, Et.makeModifier)(ap, "aspectRatio");
    Oi.default = Pv;
    var Wn = {};
    Object.defineProperty(Wn, "__esModule", { value: true }), Wn.default = void 0;
    var sp = u(function() {
    }, "Ur");
    sp._defaults = {};
    var zv = sp;
    Wn.default = zv;
    var Gl = {};
    Object.defineProperty(Gl, "__esModule", { value: true }), Object.defineProperty(Gl, "default", { enumerable: true, get: function() {
      return Wn.default;
    } });
    var Lt = {};
    function jl(i, o, l) {
      return a.default.func(i) ? oe.resolveRectLike(i, o.interactable, o.element, [l.x, l.y, o]) : oe.resolveRectLike(i, o.interactable, o.element);
    }
    __name(jl, "jl");
    u(jl, "Gr"), Object.defineProperty(Lt, "__esModule", { value: true }), Lt.default = void 0, Lt.getRestrictionRect = jl, Lt.restrict = void 0;
    var lp = { start: function(i) {
      var o = i.rect, l = i.startOffset, c = i.state, h = i.interaction, b = i.pageCoords, E = c.options, y = E.elementRect, x = (0, q.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && y) {
        var O = jl(E.restriction, h, b);
        if (O) {
          var I = O.right - O.left - o.width, P = O.bottom - O.top - o.height;
          I < 0 && (x.left += I, x.right += I), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += l.left - o.width * y.left, x.top += l.top - o.height * y.top, x.right += l.right - o.width * (1 - y.right), x.bottom += l.bottom - o.height * (1 - y.bottom);
      }
      c.offset = x;
    }, set: function(i) {
      var o = i.coords, l = i.interaction, c = i.state, h = c.options, b = c.offset, E = jl(h.restriction, l, o);
      if (E) {
        var y = oe.xywhToTlbr(E);
        o.x = Math.max(Math.min(y.right - b.right, o.x), y.left + b.left), o.y = Math.max(Math.min(y.bottom - b.bottom, o.y), y.top + b.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Lt.restrict = lp;
    var Rv = (0, Et.makeModifier)(lp, "restrict");
    Lt.default = Rv;
    var Lr = {};
    Object.defineProperty(Lr, "__esModule", { value: true }), Lr.restrictEdges = Lr.default = void 0;
    var up = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, cp = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function pp(i, o) {
      for (var l = ["top", "left", "bottom", "right"], c = 0; c < l.length; c++) {
        var h = l[c];
        h in i || (i[h] = o[h]);
      }
      return i;
    }
    __name(pp, "pp");
    u(pp, "Qr");
    var dp = { noInner: up, noOuter: cp, start: function(i) {
      var o, l = i.interaction, c = i.startOffset, h = i.state, b = h.options;
      if (b) {
        var E = (0, Lt.getRestrictionRect)(b.offset, l, l.coords.start.page);
        o = oe.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, h.offset = { top: o.y + c.top, left: o.x + c.left, bottom: o.y - c.bottom, right: o.x - c.right };
    }, set: function(i) {
      var o = i.coords, l = i.edges, c = i.interaction, h = i.state, b = h.offset, E = h.options;
      if (l) {
        var y = (0, q.default)({}, o), x = (0, Lt.getRestrictionRect)(E.inner, c, y) || {}, O = (0, Lt.getRestrictionRect)(E.outer, c, y) || {};
        pp(x, up), pp(O, cp), l.top ? o.y = Math.min(Math.max(O.top + b.top, y.y), x.top + b.top) : l.bottom && (o.y = Math.max(Math.min(O.bottom + b.bottom, y.y), x.bottom + b.bottom)), l.left ? o.x = Math.min(Math.max(O.left + b.left, y.x), x.left + b.left) : l.right && (o.x = Math.max(Math.min(O.right + b.right, y.x), x.right + b.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Lr.restrictEdges = dp;
    var Dv = (0, Et.makeModifier)(dp, "restrictEdges");
    Lr.default = Dv;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.restrictRect = Mi.default = void 0;
    var kv = (0, q.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Lt.restrict.defaults), fp = { start: Lt.restrict.start, set: Lt.restrict.set, defaults: kv };
    Mi.restrictRect = fp;
    var Nv = (0, Et.makeModifier)(fp, "restrictRect");
    Mi.default = Nv;
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.restrictSize = Ii.default = void 0;
    var _v = { width: -1 / 0, height: -1 / 0 }, Lv = { width: 1 / 0, height: 1 / 0 }, hp = { start: function(i) {
      return Lr.restrictEdges.start(i);
    }, set: function(i) {
      var o = i.interaction, l = i.state, c = i.rect, h = i.edges, b = l.options;
      if (h) {
        var E = oe.tlbrToXywh((0, Lt.getRestrictionRect)(b.min, o, i.coords)) || _v, y = oe.tlbrToXywh((0, Lt.getRestrictionRect)(b.max, o, i.coords)) || Lv;
        l.options = { endOnly: b.endOnly, inner: (0, q.default)({}, Lr.restrictEdges.noInner), outer: (0, q.default)({}, Lr.restrictEdges.noOuter) }, h.top ? (l.options.inner.top = c.bottom - E.height, l.options.outer.top = c.bottom - y.height) : h.bottom && (l.options.inner.bottom = c.top + E.height, l.options.outer.bottom = c.top + y.height), h.left ? (l.options.inner.left = c.right - E.width, l.options.outer.left = c.right - y.width) : h.right && (l.options.inner.right = c.left + E.width, l.options.outer.right = c.left + y.width), Lr.restrictEdges.set(i), l.options = b;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Ii.restrictSize = hp;
    var Gv = (0, Et.makeModifier)(hp, "restrictSize");
    Ii.default = Gv;
    var Hl = {};
    Object.defineProperty(Hl, "__esModule", { value: true }), Object.defineProperty(Hl, "default", { enumerable: true, get: function() {
      return Wn.default;
    } });
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.snap = gn.default = void 0;
    var mp = { start: function(i) {
      var o, l = i.interaction, c = i.interactable, h = i.element, b = i.rect, E = i.state, y = i.startOffset, x = E.options, O = x.offsetWithOrigin ? function(N) {
        var j = N.interaction.element;
        return (0, oe.rectToXY)((0, oe.resolveRectLike)(N.state.options.origin, null, null, [j])) || (0, ze.default)(N.interactable, j, N.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: l.coords.start.page.x, y: l.coords.start.page.y };
      else {
        var I = (0, oe.resolveRectLike)(x.offset, c, h, [l]);
        (o = (0, oe.rectToXY)(I) || { x: 0, y: 0 }).x += O.x, o.y += O.y;
      }
      var P = x.relativePoints;
      E.offsets = b && P && P.length ? P.map(function(N, j) {
        return { index: j, relativePoint: N, x: y.left - b.width * N.x + o.x, y: y.top - b.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(i) {
      var o = i.interaction, l = i.coords, c = i.state, h = c.options, b = c.offsets, E = (0, ze.default)(o.interactable, o.element, o.prepared.name), y = (0, q.default)({}, l), x = [];
      h.offsetWithOrigin || (y.x -= E.x, y.y -= E.y);
      for (var O = 0; O < b.length; O++)
        for (var I = b[O], P = y.x - I.x, N = y.y - I.y, j = 0, D = h.targets.length; j < D; j++) {
          var F, Z = h.targets[j];
          (F = a.default.func(Z) ? Z(P, N, o._proxy, I, j) : Z) && x.push({ x: (a.default.number(F.x) ? F.x : P) + I.x, y: (a.default.number(F.y) ? F.y : N) + I.y, range: a.default.number(F.range) ? F.range : h.range, source: Z, index: j, offset: I });
        }
      for (var W = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < x.length; ne++) {
        var ae = x[ne], ye = ae.range, De = ae.x - y.x, qe = ae.y - y.y, Se = (0, Je.default)(De, qe), $e = Se <= ye;
        ye === 1 / 0 && W.inRange && W.range !== 1 / 0 && ($e = false), W.target && !($e ? W.inRange && ye !== 1 / 0 ? Se / ye < W.distance / W.range : ye === 1 / 0 && W.range !== 1 / 0 || Se < W.distance : !W.inRange && Se < W.distance) || (W.target = ae, W.distance = Se, W.range = ye, W.inRange = $e, W.delta.x = De, W.delta.y = qe);
      }
      return W.inRange && (l.x = W.target.x, l.y = W.target.y), c.closest = W, W;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    gn.snap = mp;
    var jv = (0, Et.makeModifier)(mp, "snap");
    gn.default = jv;
    var Jr = {};
    function vp(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, c = Array(o); l < o; l++)
        c[l] = i[l];
      return c;
    }
    __name(vp, "vp");
    u(vp, "yo"), Object.defineProperty(Jr, "__esModule", { value: true }), Jr.snapSize = Jr.default = void 0;
    var gp = { start: function(i) {
      var o = i.state, l = i.edges, c = o.options;
      if (!l)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }], offset: c.offset || "self", origin: { x: 0, y: 0 }, range: c.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], gn.snap.start(i), o.offsets = i.state.offsets, i.state = o;
    }, set: function(i) {
      var o, l, c = i.interaction, h = i.state, b = i.coords, E = h.options, y = h.offsets, x = { x: b.x - y[0].x, y: b.y - y[0].y };
      h.options = (0, q.default)({}, E), h.options.targets = [];
      for (var O = 0; O < (E.targets || []).length; O++) {
        var I = (E.targets || [])[O], P = void 0;
        if (P = a.default.func(I) ? I(x.x, x.y, c) : I) {
          for (var N = 0; N < h.targetFields.length; N++) {
            var j = (o = h.targetFields[N], l = 2, function(W) {
              if (Array.isArray(W))
                return W;
            }(o) || function(W, ne) {
              var ae = W == null ? null : typeof Symbol != "undefined" && W[Symbol.iterator] || W["@@iterator"];
              if (ae != null) {
                var ye, De, qe = [], Se = true, $e = false;
                try {
                  for (ae = ae.call(W); !(Se = (ye = ae.next()).done) && (qe.push(ye.value), !ne || qe.length !== ne); Se = true)
                    ;
                } catch (yr) {
                  $e = true, De = yr;
                } finally {
                  try {
                    Se || ae.return == null || ae.return();
                  } finally {
                    if ($e)
                      throw De;
                  }
                }
                return qe;
              }
            }(o, l) || function(W, ne) {
              if (W) {
                if (typeof W == "string")
                  return vp(W, ne);
                var ae = Object.prototype.toString.call(W).slice(8, -1);
                return ae === "Object" && W.constructor && (ae = W.constructor.name), ae === "Map" || ae === "Set" ? Array.from(W) : ae === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? vp(W, ne) : void 0;
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
      var Z = gn.snap.set(i);
      return h.options = E, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Jr.snapSize = gp;
    var Hv = (0, Et.makeModifier)(gp, "snapSize");
    Jr.default = Hv;
    var Ai = {};
    Object.defineProperty(Ai, "__esModule", { value: true }), Ai.snapEdges = Ai.default = void 0;
    var bp = { start: function(i) {
      var o = i.edges;
      return o ? (i.state.targetFields = i.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Jr.snapSize.start(i)) : null;
    }, set: Jr.snapSize.set, defaults: (0, q.default)((0, Bn.default)(Jr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Ai.snapEdges = bp;
    var $v = (0, Et.makeModifier)(bp, "snapEdges");
    Ai.default = $v;
    var $l = {};
    Object.defineProperty($l, "__esModule", { value: true }), Object.defineProperty($l, "default", { enumerable: true, get: function() {
      return Wn.default;
    } });
    var Bl = {};
    Object.defineProperty(Bl, "__esModule", { value: true }), Object.defineProperty(Bl, "default", { enumerable: true, get: function() {
      return Wn.default;
    } });
    var Pi = {};
    Object.defineProperty(Pi, "__esModule", { value: true }), Pi.default = void 0;
    var Bv = { aspectRatio: Oi.default, restrictEdges: Lr.default, restrict: Lt.default, restrictRect: Mi.default, restrictSize: Ii.default, snapEdges: Ai.default, snap: gn.default, snapSize: Jr.default, spring: $l.default, avoid: Gl.default, transform: Bl.default, rubberband: Hl.default };
    Pi.default = Bv;
    var qa = {};
    Object.defineProperty(qa, "__esModule", { value: true }), qa.default = void 0;
    var qv = { id: "modifiers", install: function(i) {
      var o = i.interactStatic;
      for (var l in i.usePlugin(Et.default), i.usePlugin(Ba.default), o.modifiers = Pi.default, Pi.default) {
        var c = Pi.default[l], h = c._defaults, b = c._methods;
        h._methods = b, i.defaults.perAction[l] = h;
      }
    } }, Fv = qv;
    qa.default = Fv;
    var Vn = {};
    function ql(i) {
      return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ql(i);
    }
    __name(ql, "ql");
    u(ql, "Io");
    function Uv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var c = o[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Uv, "Uv");
    u(Uv, "Do");
    function Fl(i, o) {
      return Fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Fl(i, o);
    }
    __name(Fl, "Fl");
    u(Fl, "Ao");
    function Wv(i, o) {
      if (o && (ql(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ul(i);
    }
    __name(Wv, "Wv");
    u(Wv, "zo");
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
    u(Fa, "Ro"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = Vn.PointerEvent = void 0;
    var Vv = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && Fl(y, x);
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
        var y, x = Fa(c);
        if (h) {
          var O = Fa(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Wv(this, y);
      });
      function E(y, x, O, I, P, N) {
        var j;
        if (function(Z, W) {
          if (!(Z instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), j = b.call(this, P), J.pointerExtend(Ul(j), O), O !== x && J.pointerExtend(Ul(j), x), j.timeStamp = N, j.originalEvent = O, j.type = y, j.pointerId = J.getPointerId(x), j.pointerType = J.getPointerType(x), j.target = I, j.currentTarget = null, y === "tap") {
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
      } }]) && Uv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(ar.BaseEvent);
    Vn.PointerEvent = Vn.default = Vv;
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
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget;
      i.duplicate || l.pointerIsDown && !l.pointerWasMoved || (l.pointerIsDown && Wl(i), bn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "move" }, o));
    }, "interactions:down": function(i, o) {
      (function(l, c) {
        for (var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget, x = l.pointerIndex, O = h.pointers[x].hold, I = z.getPath(y), P = { interaction: h, pointer: b, event: E, eventTarget: y, type: "hold", targets: [], path: I, node: null }, N = 0; N < I.length; N++) {
          var j = I[N];
          P.node = j, c.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var D = 1 / 0, F = 0; F < P.targets.length; F++) {
            var Z = P.targets[F].eventable.options.holdDuration;
            Z < D && (D = Z);
          }
          O.duration = D, O.timeout = setTimeout(function() {
            bn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "hold" }, c);
          }, D);
        }
      })(i, o), bn(i, o);
    }, "interactions:up": function(i, o) {
      Wl(i), bn(i, o), function(l, c) {
        var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget;
        h.pointerWasMoved || bn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "tap" }, c);
      }(i, o);
    }, "interactions:cancel": function(i, o) {
      Wl(i), bn(i, o);
    } }, PointerEvent: Vn.PointerEvent, fire: bn, collectEventTargets: yp, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function bn(i, o) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget, E = i.type, y = i.targets, x = y === void 0 ? yp(i, o) : y, O = new Vn.PointerEvent(E, c, h, b, l, o.now());
      o.fire("pointerEvents:new", { pointerEvent: O });
      for (var I = { interaction: l, pointer: c, event: h, eventTarget: b, targets: x, type: E, pointerEvent: O }, P = 0; P < x.length; P++) {
        var N = x[P];
        for (var j in N.props || {})
          O[j] = N.props[j];
        var D = (0, ze.default)(N.eventable, N.node);
        if (O._subtractOrigin(D), O.eventable = N.eventable, O.currentTarget = N.node, N.eventable.fire(O), O._addOrigin(D), O.immediatePropagationStopped || O.propagationStopped && P + 1 < x.length && x[P + 1].node !== O.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", I), E === "tap") {
        var F = O.double ? bn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "doubletap" }, o) : O;
        l.prevTap = F, l.tapTime = F.timeStamp;
      }
      return O;
    }
    __name(bn, "bn");
    u(bn, "Yo");
    function yp(i, o) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget, E = i.type, y = l.getPointerIndex(c), x = l.pointers[y];
      if (E === "tap" && (l.pointerWasMoved || !x || x.downTarget !== b))
        return [];
      for (var O = z.getPath(b), I = { interaction: l, pointer: c, event: h, eventTarget: b, type: E, path: O, targets: [], node: null }, P = 0; P < O.length; P++) {
        var N = O[P];
        I.node = N, o.fire("pointerEvents:collect-targets", I);
      }
      return E === "hold" && (I.targets = I.targets.filter(function(j) {
        var D;
        return j.eventable.options.holdDuration === ((D = l.pointers[y]) == null ? void 0 : D.hold.duration);
      })), I.targets;
    }
    __name(yp, "yp");
    u(yp, "Wo");
    function Wl(i) {
      var o = i.interaction, l = i.pointerIndex, c = o.pointers[l].hold;
      c && c.timeout && (clearTimeout(c.timeout), c.timeout = null);
    }
    __name(Wl, "Wl");
    u(Wl, "Lo");
    var Yv = Ua;
    Eo.default = Yv;
    var Wa = {};
    function Xv(i) {
      var o = i.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Xv, "Xv");
    u(Xv, "No"), Object.defineProperty(Wa, "__esModule", { value: true }), Wa.default = void 0;
    var Zv = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(Eo.default);
      var o = i.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o) {
      return i["pointerEvents:".concat(o)] = Xv, i;
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
    } }) }, Kv = Zv;
    Wa.default = Kv;
    var Va = {};
    function Jv(i) {
      return (0, q.default)(this.events.options, i), this;
    }
    __name(Jv, "Jv");
    u(Jv, "Ho"), Object.defineProperty(Va, "__esModule", { value: true }), Va.default = void 0;
    var Qv = { id: "pointer-events/interactableTargets", install: function(i) {
      var o = i.Interactable;
      o.prototype.pointerEvents = Jv;
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
    } } }, eg = Qv;
    Va.default = eg;
    var Ya = {};
    Object.defineProperty(Ya, "__esModule", { value: true }), Ya.default = void 0;
    var tg = { id: "pointer-events", install: function(i) {
      i.usePlugin(Eo), i.usePlugin(Wa.default), i.usePlugin(Va.default);
    } }, rg = tg;
    Ya.default = rg;
    var So = {};
    function wp(i) {
      var o = i.Interactable;
      i.actions.phases.reflow = true, o.prototype.reflow = function(l) {
        return function(c, h, b) {
          for (var E = a.default.string(c.target) ? Pe.from(c._context.querySelectorAll(c.target)) : [c.target], y = b.window.Promise, x = y ? [] : null, O = function() {
            var P = E[I], N = c.getRect(P);
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
              D = function(ne, ae, ye, De, qe) {
                var Se = ne.interactions.new({ pointerType: "reflow" }), $e = { interaction: Se, event: qe, pointer: qe, eventTarget: ye, phase: "reflow" };
                Se.interactable = ae, Se.element = ye, Se.prevEvent = qe, Se.updatePointer(qe, qe, ye, true), J.setZeroCoords(Se.coords.delta), (0, sr.copyAction)(Se.prepared, De), Se._doPhase($e);
                var yr = ne.window.Promise, Qr = yr ? new yr(function(Xl) {
                  Se._reflowResolve = Xl;
                }) : void 0;
                return Se._reflowPromise = Qr, Se.start(De, ae, ye), Se._interacting ? (Se.move($e), Se.end(qe)) : (Se.stop(), Se._reflowResolve()), Se.removePointer(qe, qe), Qr;
              }(b, c, P, h, W);
            }
            x && x.push(D);
          }, I = 0; I < E.length && O() !== "break"; I++)
            ;
          return x && y.all(x).then(function() {
            return c;
          });
        }(this, l, i);
      };
    }
    __name(wp, "wp");
    u(wp, "ni"), Object.defineProperty(So, "__esModule", { value: true }), So.default = void 0, So.install = wp;
    var ng = { id: "reflow", install: wp, listeners: { "interactions:stop": function(i, o) {
      var l = i.interaction;
      l.pointerType === "reflow" && (l._reflowResolve && l._reflowResolve(), Pe.remove(o.interactions.list, l));
    } } }, ig = ng;
    So.default = ig;
    var br = { exports: {} };
    function Vl(i) {
      return Vl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Vl(i);
    }
    __name(Vl, "Vl");
    u(Vl, "ai"), Object.defineProperty(br.exports, "__esModule", { value: true }), br.exports.default = void 0, dt.default.use(Ti.default), dt.default.use(Un.default), dt.default.use(Ya.default), dt.default.use(Ci.default), dt.default.use(qa.default), dt.default.use(Ca.default), dt.default.use(gr.default), dt.default.use(mn.default), dt.default.use(So.default);
    var og = dt.default;
    if (br.exports.default = og, Vl(br) === "object" && br)
      try {
        br.exports = dt.default;
      } catch (i) {
      }
    dt.default.default = dt.default, br = br.exports;
    var Yn = { exports: {} };
    function Yl(i) {
      return Yl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Yl(i);
    }
    __name(Yl, "Yl");
    u(Yl, "ui"), Object.defineProperty(Yn.exports, "__esModule", { value: true }), Yn.exports.default = void 0;
    var ag = br.default;
    if (Yn.exports.default = ag, Yl(Yn) === "object" && Yn)
      try {
        Yn.exports = br.default;
      } catch (i) {
      }
    return br.default.default = br.default, Yn.exports;
  });
});
var fm = Tt((dm, Cc) => {
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
    }) : typeof Cc == "object" && (Cc.exports = m);
  })(typeof window != "undefined" ? window : dm);
});
var gm = Tt((Oc, vm) => {
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
    }) : typeof Oc == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, vm.exports = m) : t.Complex = m;
  })(Oc);
});
var wn = er(Ip());
function Kl(t, r, e, n) {
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
__name(Kl, "Kl");
u(Kl, "__awaiter");
function Jl(t, r) {
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
__name(Jl, "Jl");
u(Jl, "__generator");
function Ja(t, r) {
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
__name(Ja, "Ja");
u(Ja, "__read");
function Kn(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, s = r.length, a; n < s; n++)
      (a || !(n in r)) && (a || (a = Array.prototype.slice.call(r, 0, n)), a[n] = r[n]);
  return t.concat(a || Array.prototype.slice.call(r));
}
__name(Kn, "Kn");
u(Kn, "__spreadArray");
var dg = { withStackTrace: false };
var Pp = u(function(t, r, e) {
  e === void 0 && (e = dg);
  var n = r.isOk() ? { type: "Ok", value: r.value } : { type: "Err", value: r.error }, s = e.withStackTrace ? new Error().stack : void 0;
  return { data: n, message: t, stack: s };
}, "createNeverThrowError");
var zi = function() {
  function t(r) {
    this._promise = r;
  }
  __name(t, "t");
  return u(t, "ResultAsync"), t.fromSafePromise = function(r) {
    var e = r.then(function(n) {
      return new Xn(n);
    });
    return new t(e);
  }, t.fromPromise = function(r, e) {
    var n = r.then(function(s) {
      return new Xn(s);
    }).catch(function(s) {
      return new Zn(e(s));
    });
    return new t(n);
  }, t.combine = function(r) {
    return hg(r);
  }, t.combineWithAllErrors = function(r) {
    return mg(r);
  }, t.prototype.map = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Kl(e, void 0, void 0, function() {
        var s;
        return Jl(this, function(a) {
          switch (a.label) {
            case 0:
              return n.isErr() ? [2, new Zn(n.error)] : (s = Xn.bind, [4, r(n.value)]);
            case 1:
              return [2, new (s.apply(Xn, [void 0, a.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.mapErr = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Kl(e, void 0, void 0, function() {
        var s;
        return Jl(this, function(a) {
          switch (a.label) {
            case 0:
              return n.isOk() ? [2, new Xn(n.value)] : (s = Zn.bind, [4, r(n.error)]);
            case 1:
              return [2, new (s.apply(Zn, [void 0, a.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.andThen = function(r) {
    return new t(this._promise.then(function(e) {
      if (e.isErr())
        return new Zn(e.error);
      var n = r(e.value);
      return n instanceof t ? n._promise : n;
    }));
  }, t.prototype.orElse = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Kl(e, void 0, void 0, function() {
        return Jl(this, function(s) {
          return n.isErr() ? [2, r(n.error)] : [2, new Xn(n.value)];
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
var Ap = u(function(t) {
  return new zi(Promise.resolve(new Zn(t)));
}, "errAsync");
var j0 = zi.fromPromise;
var H0 = zi.fromSafePromise;
var fg = u(function(t) {
  return function(r) {
    return Kn(Kn([], Ja(r), false), [t], false);
  };
}, "appendValueToEndOfList");
var zp = u(function(t) {
  return t.reduce(function(r, e) {
    return r.isOk() ? e.isErr() ? tn(e.error) : r.map(fg(e.value)) : r;
  }, en([]));
}, "combineResultList");
var hg = u(function(t) {
  return zi.fromSafePromise(Promise.all(t)).andThen(zp);
}, "combineResultAsyncList");
var Rp = u(function(t) {
  return t.reduce(function(r, e) {
    return e.isErr() ? r.isErr() ? tn(Kn(Kn([], Ja(r.error), false), [e.error], false)) : tn([e.error]) : r.isErr() ? r : en(Kn(Kn([], Ja(r.value), false), [e.value], false));
  }, en([]));
}, "combineResultListWithAllErrors");
var mg = u(function(t) {
  return zi.fromSafePromise(Promise.all(t)).andThen(Rp);
}, "combineResultAsyncListWithAllErrors");
var Co;
(function(t) {
  function r(s, a) {
    return function() {
      for (var p = [], v = 0; v < arguments.length; v++)
        p[v] = arguments[v];
      try {
        var m = s.apply(void 0, Kn([], Ja(p), false));
        return en(m);
      } catch (d) {
        return tn(a ? a(d) : d);
      }
    };
  }
  __name(r, "r");
  u(r, "fromThrowable"), t.fromThrowable = r;
  function e(s) {
    return zp(s);
  }
  __name(e, "e");
  u(e, "combine"), t.combine = e;
  function n(s) {
    return Rp(s);
  }
  __name(n, "n");
  u(n, "combineWithAllErrors"), t.combineWithAllErrors = n;
})(Co || (Co = {}));
var en = u(function(t) {
  return new Xn(t);
}, "ok");
var tn = u(function(t) {
  return new Zn(t);
}, "err");
var Xn = function() {
  function t(r) {
    this.value = r;
  }
  __name(t, "t");
  return u(t, "Ok"), t.prototype.isOk = function() {
    return true;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return en(r(this.value));
  }, t.prototype.mapErr = function(r) {
    return en(this.value);
  }, t.prototype.andThen = function(r) {
    return r(this.value);
  }, t.prototype.orElse = function(r) {
    return en(this.value);
  }, t.prototype.asyncAndThen = function(r) {
    return r(this.value);
  }, t.prototype.asyncMap = function(r) {
    return zi.fromSafePromise(r(this.value));
  }, t.prototype.unwrapOr = function(r) {
    return this.value;
  }, t.prototype.match = function(r, e) {
    return r(this.value);
  }, t.prototype._unsafeUnwrap = function(r) {
    return this.value;
  }, t.prototype._unsafeUnwrapErr = function(r) {
    throw Pp("Called `_unsafeUnwrapErr` on an Ok", this, r);
  }, t;
}();
var Zn = function() {
  function t(r) {
    this.error = r;
  }
  __name(t, "t");
  return u(t, "Err"), t.prototype.isOk = function() {
    return false;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return tn(this.error);
  }, t.prototype.mapErr = function(r) {
    return tn(r(this.error));
  }, t.prototype.andThen = function(r) {
    return tn(this.error);
  }, t.prototype.orElse = function(r) {
    return r(this.error);
  }, t.prototype.asyncAndThen = function(r) {
    return Ap(this.error);
  }, t.prototype.asyncMap = function(r) {
    return Ap(this.error);
  }, t.prototype.unwrapOr = function(r) {
    return r;
  }, t.prototype.match = function(r, e) {
    return e(this.error);
  }, t.prototype._unsafeUnwrap = function(r) {
    throw Pp("Called `_unsafeUnwrap` on an Err", this, r);
  }, t.prototype._unsafeUnwrapErr = function(r) {
    return this.error;
  }, t;
}();
var $0 = Co.fromThrowable;
function kp(t) {
  let r = xn(t);
  return new wn.default(r).valueOf() * Math.PI;
}
__name(kp, "kp");
u(kp, "C");
function Mo(t) {
  let r = xn(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(Mo, "Mo");
u(Mo, "w");
function Np(t, r) {
  return new wn.default(xn(t)).valueOf() < new wn.default(xn(r)).valueOf();
}
__name(Np, "Np");
u(Np, "G");
function _p(t, r) {
  return new wn.default(xn(t)).valueOf() > new wn.default(xn(r)).valueOf();
}
__name(_p, "_p");
u(_p, "E");
function Lp(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let r = xn(t);
    return new wn.default(r).valueOf(), true;
  } catch (r) {
    return false;
  }
}
__name(Lp, "Lp");
u(Lp, "R");
function xn(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(xn, "xn");
u(xn, "l");
function Gp(t) {
  try {
    let r = xn(t), e = new wn.default(r).toFraction().split("/"), n;
    return e[0] === "0" ? n = "0" : e[0] === "1" ? n = "\u03C0" : e[0] === "-1" ? n = "-\u03C0" : n = `${e[0]}\u03C0`, e.length === 1 ? n : `${n}/${e[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(Gp, "Gp");
u(Gp, "F");
var jp = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var lr;
var yn = (lr = class {
  static {
    __name(this, "lr");
  }
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -lr.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(lr.parseFloat(r.substr(1)));
    let e = lr.matchUnicodeFraction((s) => s.character === r);
    if (e !== void 0)
      return e.value;
    let n = parseFloat(r);
    if (isNaN(n))
      throw new Error(`Not a number: '${r}'`);
    return n;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -lr.simplifyByRounding(-r, e);
    let n = r % 1;
    if (n <= e || 1 - n <= e)
      return Math.round(r);
    let s = lr.matchUnicodeFraction((p) => Math.abs(p.value - r) <= e);
    if (s !== void 0)
      return s.value;
    let a = lr.matchUnicodeFraction((p) => Math.abs(Math.sqrt(p.value) - r) <= e);
    return a !== void 0 ? Math.sqrt(a.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of jp)
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
    let s = lr.matchUnicodeFraction((p) => Math.abs(p.value - r) <= e);
    if (s !== void 0)
      return s.character;
    let a = lr.matchUnicodeFraction((p) => Math.abs(Math.sqrt(p.value) - r) <= e);
    return a !== void 0 ? `\u221A${a.character}` : r % 1 !== 0 && n !== void 0 ? r.toFixed(n) : r.toString();
  }
}, u(lr, "o"), lr);
yn.CONSISTENT = new yn(false, 0, 2, ", "), yn.EXACT = new yn(true, 0, void 0, ", "), yn.MINIFIED = new yn(true, 0, void 0, ","), yn.SIMPLIFIED = new yn(true, 5e-4, 3, ", ");
var Qn;
var Dp = (Qn = class {
  static {
    __name(this, "Qn");
  }
  static matchUnicodeFraction(r) {
    for (let e of jp)
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
    let s = Qn.matchUnicodeFraction((p) => Math.abs(p.value - r) <= e);
    if (s !== void 0)
      return s.character;
    let a = Qn.matchUnicodeFraction((p) => Math.abs(Math.sqrt(p.value) - r) <= e);
    return a !== void 0 ? `\u221A${a.character}` : r % 1 !== 0 && n !== void 0 ? r.toFixed(n) : r.toString();
  }
}, u(Qn, "n"), Qn);
var Oo = { allowAbbreviation: true, maxAbbreviationError: 0, fixedDigits: void 0 };
var Fe;
var Jn = (Fe = class {
  static {
    __name(this, "Fe");
  }
  constructor(r, e) {
    this.isEqualTo = this.eq.bind(this), this.isApproximatelyEqualTo = this.nearlyEq.bind(this), this.conj = this.conjugate.bind(this), this.plus = this.add.bind(this), this.subtract = this.sub.bind(this), this.minus = this.sub.bind(this), this.multiply = this.mult.bind(this), this.times = this.mult.bind(this), this.dividedBy = this.div.bind(this), this.magnitude = this.abs.bind(this), this.norm2 = this.abs2.bind(this), this.angle = this.arg.bind(this), this.phase = this.arg.bind(this), this.real = r, this.imag = e, this.isApproximatelyEqualTo = this.nearlyEq, this.isEqualTo = this.eq, this.conj = this.conjugate, this.plus = this.add, this.subtract = this.sub, this.minus = this.sub, this.multiply = this.mult, this.times = this.mult, this.dividedBy = this.div, this.magnitude = this.abs, this.norm2 = this.abs2, this.angle = this.arg, this.phase = this.arg;
  }
  static from(r) {
    return typeof r == "number" ? new Fe(r, 0) : r;
  }
  static real(r) {
    return typeof r == "number" ? r : r.real;
  }
  static imag(r) {
    return typeof r == "number" ? 0 : r.imag;
  }
  static polar(r, e) {
    let [n, s] = this.cosAndSin(e);
    return new Fe(r * n, r * s);
  }
  static cosAndSin(r) {
    let e = Math.PI / 4, n = Math.round(r / e);
    if (n * e === r) {
      let s = Math.sqrt(0.5);
      return [[1, 0], [s, s], [0, 1], [-s, s], [-1, 0], [-s, -s], [0, -1], [s, -s]][n & 7];
    }
    return [Math.cos(r), Math.sin(r)];
  }
  eq(r) {
    return typeof r == "number" ? this.real === r && this.imag === 0 : r instanceof Fe ? this.real === r.real && this.imag === r.imag : false;
  }
  nearlyEq(r, e) {
    if (typeof r == "number" || r instanceof Fe) {
      let n = this.sub(Fe.from(r));
      return Math.abs(n.real) <= e && Math.abs(n.imag) <= e && n.abs() <= e;
    }
    return false;
  }
  conjugate() {
    return new Fe(this.real, -this.imag);
  }
  neg() {
    return new Fe(-this.real, -this.imag);
  }
  add(r) {
    let e = Fe.from(r);
    return new Fe(this.real + e.real, this.imag + e.imag);
  }
  sub(r) {
    let e = Fe.from(r);
    return new Fe(this.real - e.real, this.imag - e.imag);
  }
  mult(r) {
    let e = Fe.from(r);
    return new Fe(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  div(r) {
    let e = Fe.from(r), n = e.abs2();
    if (n === 0)
      return tn(Error("Division by Zero"));
    let s = this.mult(e.conjugate());
    return en(new Fe(s.real / n, s.imag / n));
  }
  abs() {
    return Math.sqrt(this.abs2());
  }
  abs2() {
    return this.real * this.real + this.imag * this.imag;
  }
  arg() {
    return Math.atan2(this.imag, this.real);
  }
  pow(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new Fe(Math.sqrt(this.real), 0) : this.eq(Fe.ZERO) ? Fe.ZERO : this.ln().mult(Fe.from(r)).exp();
  }
  exp() {
    return Fe.polar(Math.exp(this.real), this.imag);
  }
  format(r = Oo) {
    let e = new Dp(r.allowAbbreviation === void 0 ? Oo.allowAbbreviation : r.allowAbbreviation, r.maxAbbreviationError || 0, r.fixedDigits);
    return e.allowAbbreviation ? this.toStringAllowSingleValue(e) : this.toStringBothValues(e);
  }
  toString() {
    let r = new Dp(Oo.allowAbbreviation, Oo.maxAbbreviationError, Oo.fixedDigits);
    return this.toStringAllowSingleValue(r);
  }
  ln() {
    return new Fe(Math.log(this.abs()), this.arg());
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
}, u(Fe, "a"), Fe);
Jn.ZERO = new Jn(0, 0), Jn.ONE = new Jn(1, 0), Jn.I = new Jn(0, 1);
var Io = Jn;
var Ao = { MAX_QUBIT_COUNT: 16 };
function fe(t, r = {}, e = document) {
  let n = new CustomEvent(t, { bubbles: true, cancelable: true, detail: r });
  return e.dispatchEvent(n);
}
__name(fe, "fe");
u(fe, "$");
var Hp = u((t) => typeof t == "number" && 1 <= t && t <= Ao.MAX_QUBIT_COUNT, "L");
var vg = u(() => ({ message: "Parse Error" }), "z");
var Ri;
var $p = (Ri = class {
  static {
    __name(this, "Ri");
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
    Ri.need(r != null, "notNull");
  }
  static get urlJson() {
    let r = new URL(location.href, window.location.origin), e = decodeURIComponent(r.pathname), n = e.lastIndexOf("/");
    return e.substring(n + 1);
  }
}, u(Ri, "b"), Ri);
$p.safeJsonParse = Co.fromThrowable(JSON.parse, vg);
var $ = $p;
var Ql = "\u25E6";
var eu = "Bloch";
var tu = "\u2022";
var Qa = "H";
var es = "Measure";
var ts = "P";
var ru = "QFT\u2020";
var nu = "QFT";
var rs = "X^\xBD";
var ns = "Rx";
var is = "Ry";
var os = "Rz";
var as = "S\u2020";
var ss = "S";
var iu = "\u2026";
var ou = "Swap";
var ls = "T\u2020";
var us = "T";
var Bp = "|0>";
var qp = "|1>";
var cs = "X";
var ps = "Y";
var ds = "Z";
var au = /* @__PURE__ */ new WeakSet();
function lu(t) {
  au.add(t), t.shadowRoot && uu(t.shadowRoot), pu(t), cu(t.ownerDocument);
}
__name(lu, "lu");
u(lu, "bind");
function uu(t) {
  pu(t), cu(t);
}
__name(uu, "uu");
u(uu, "bindShadow");
var fs = /* @__PURE__ */ new WeakMap();
function cu(t = document) {
  if (fs.has(t))
    return fs.get(t);
  let r = false, e = new MutationObserver((s) => {
    for (let a of s)
      if (a.type === "attributes" && a.target instanceof Element)
        su(a.target);
      else if (a.type === "childList" && a.addedNodes.length)
        for (let p of a.addedNodes)
          p instanceof Element && pu(p);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, fs.delete(t), e.disconnect();
  } };
  return fs.set(t, n), n;
}
__name(cu, "cu");
u(cu, "listenForBind");
function pu(t) {
  for (let r of t.querySelectorAll("[data-action]"))
    su(r);
  t instanceof Element && t.hasAttribute("data-action") && su(t);
}
__name(pu, "pu");
u(pu, "bindElements");
function gg(t) {
  let r = t.currentTarget;
  for (let e of Fp(r))
    if (t.type === e.type) {
      let n = r.closest(e.tag);
      au.has(n) && typeof n[e.method] == "function" && n[e.method](t);
      let s = r.getRootNode();
      if (s instanceof ShadowRoot && au.has(s.host) && s.host.matches(e.tag)) {
        let a = s.host;
        typeof a[e.method] == "function" && a[e.method](t);
      }
    }
}
__name(gg, "gg");
u(gg, "handleEvent");
function* Fp(t) {
  for (let r of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, e), tag: r.slice(e + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(Fp, "Fp");
u(Fp, "bindings");
function su(t) {
  for (let r of Fp(t))
    t.addEventListener(r.type, gg);
}
__name(su, "su");
u(su, "bindActions");
function du(t) {
  let r = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[t.name] = t, window.customElements.define(r, t));
}
__name(du, "du");
u(du, "register");
function fu(t, r) {
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
__name(fu, "fu");
u(fu, "findTarget");
function hu(t, r) {
  let e = t.tagName.toLowerCase(), n = [];
  if (t.shadowRoot)
    for (let s of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${r}"]`))
      s.closest(e) || n.push(s);
  for (let s of t.querySelectorAll(`[data-targets~="${e}.${r}"]`))
    s.closest(e) === t && n.push(s);
  return n;
}
__name(hu, "hu");
u(hu, "findTargets");
function Oe(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return fu(this, r);
  } });
}
__name(Oe, "Oe");
u(Oe, "target");
function ft(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return hu(this, r);
  } });
}
__name(ft, "ft");
u(ft, "targets");
function mu(t) {
  for (let r of t.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === t && t.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(mu, "mu");
u(mu, "autoShadowRoot");
var hs = /* @__PURE__ */ new WeakMap();
function k(t, r) {
  hs.has(t) || hs.set(t, []), hs.get(t).push(r);
}
__name(k, "k");
u(k, "attr");
function vu(t, r) {
  r || (r = Up(Object.getPrototypeOf(t)));
  for (let e of r) {
    let n = t[e], s = Wp(e), a = { configurable: true, get() {
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
__name(vu, "vu");
u(vu, "initializeAttrs");
function Up(t) {
  let r = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let n = hs.get(e) || [];
    for (let s of n)
      r.add(s);
    e = Object.getPrototypeOf(e);
  }
  return r;
}
__name(Up, "Up");
u(Up, "getAttrNames");
function Wp(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Wp, "Wp");
u(Wp, "attrToAttributeName");
function gu(t) {
  let r = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...Up(t.prototype)].map(Wp).concat(r);
  }, set(e) {
    r = e;
  } });
}
__name(gu, "gu");
u(gu, "defineObservedAttributes");
var bg = /* @__PURE__ */ new WeakSet();
function Vp(t, r) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), bg.add(t), mu(t), vu(t), lu(t), r && r.call(t), t.shadowRoot && uu(t.shadowRoot);
}
__name(Vp, "Vp");
u(Vp, "initializeInstance");
function Yp(t) {
  gu(t), du(t);
}
__name(Yp, "Yp");
u(Yp, "initializeClass");
function X(t) {
  let r = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    Vp(this, r);
  }, Yp(t);
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
var ei = u((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function En(t) {
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
__name(En, "En");
u(En, "AngleableMixin");
var Po = u((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
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
function Di(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      r.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (e[n[s]] = t[n[s]]);
  return e;
}
__name(Di, "Di");
u(Di, "__rest");
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
var rn;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(rn || (rn = {}));
var zo = Ne.Start;
var ki = Ne.Stop;
var Sn = Ne.Raise;
var ti = Ne.Send;
var ms = Ne.Cancel;
var Xp = Ne.NullEvent;
var bu = Ne.Assign;
var Hw = Ne.After;
var $w = Ne.DoneState;
var vs = Ne.Log;
var Zp = Ne.Init;
var Ro = Ne.Invoke;
var Bw = Ne.ErrorExecution;
var yu = Ne.ErrorPlatform;
var wu = Ne.ErrorCustom;
var Do = Ne.Update;
var Kp = Ne.Choose;
var Jp = Ne.Pure;
var gs = ".";
var xu = {};
var bs = "xstate.guard";
var Qp = "";
var Ge = true;
var ys;
function No(t, r, e) {
  e === void 0 && (e = gs);
  var n = Ni(t, e), s = Ni(r, e);
  return Te(s) ? Te(n) ? s === n : false : Te(n) ? n in s : Object.keys(n).every(function(a) {
    return a in s ? No(n[a], s[a]) : false;
  });
}
__name(No, "No");
u(No, "matchesState");
function ws(t) {
  try {
    return Te(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(ws, "ws");
u(ws, "getEventType");
function xs(t, r) {
  try {
    return nn(t) ? t : t.toString().split(r);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(xs, "xs");
u(xs, "toStatePath");
function yg(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(yg, "yg");
u(yg, "isStateLike");
function Ni(t, r) {
  if (yg(t))
    return t.value;
  if (nn(t))
    return ko(t);
  if (typeof t != "string")
    return t;
  var e = xs(t, r);
  return ko(e);
}
__name(Ni, "Ni");
u(Ni, "toStateValue");
function ko(t) {
  if (t.length === 1)
    return t[0];
  for (var r = {}, e = r, n = 0; n < t.length - 1; n++)
    n === t.length - 2 ? e[t[n]] = t[n + 1] : (e[t[n]] = {}, e = e[t[n]]);
  return r;
}
__name(ko, "ko");
u(ko, "pathToStateValue");
function _i(t, r) {
  for (var e = {}, n = Object.keys(t), s = 0; s < n.length; s++) {
    var a = n[s];
    e[a] = r(t[a], a, t, s);
  }
  return e;
}
__name(_i, "_i");
u(_i, "mapValues");
function Eu(t, r, e) {
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
__name(Eu, "Eu");
u(Eu, "mapFilterValues");
var ed = u(function(t) {
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
function td(t, r) {
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
__name(td, "td");
u(td, "nestedPath");
function _o(t) {
  if (!t)
    return [[]];
  if (Te(t))
    return [[t]];
  var r = Be(Object.keys(t).map(function(e) {
    var n = t[e];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[e]] : _o(t[e]).map(function(s) {
      return [e].concat(s);
    });
  }));
  return r;
}
__name(_o, "_o");
u(_o, "toStatePaths");
function Be(t) {
  var r;
  return (r = []).concat.apply(r, ke([], Ee(t), false));
}
__name(Be, "Be");
u(Be, "flatten");
function rd(t) {
  return nn(t) ? t : [t];
}
__name(rd, "rd");
u(rd, "toArrayStrict");
function ur(t) {
  return t === void 0 ? [] : rd(t);
}
__name(ur, "ur");
u(ur, "toArray");
function ri(t, r, e) {
  var n, s;
  if (Ie(t))
    return t(r, e.data);
  var a = {};
  try {
    for (var p = we(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      Ie(d) ? a[m] = d(r, e.data) : a[m] = d;
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
__name(ri, "ri");
u(ri, "mapContext");
function nd(t) {
  return /^(done|error)\./.test(t);
}
__name(nd, "nd");
u(nd, "isBuiltInEvent");
function Su(t) {
  return !!(t instanceof Promise || t !== null && (Ie(t) || typeof t == "object") && Ie(t.then));
}
__name(Su, "Su");
u(Su, "isPromiseLike");
function id(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(id, "id");
u(id, "isBehavior");
function od(t, r) {
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
__name(od, "od");
u(od, "partition");
function ad(t, r) {
  return _i(t.states, function(e, n) {
    if (e) {
      var s = (Te(r) ? void 0 : r[n]) || (e ? e.current : void 0);
      if (s)
        return { current: s, states: ad(e, s) };
    }
  });
}
__name(ad, "ad");
u(ad, "updateHistoryStates");
function sd(t, r) {
  return { current: r, states: ad(t, r) };
}
__name(sd, "sd");
u(sd, "updateHistoryValue");
function Tu(t, r, e, n) {
  Ge || nt(!!t, "Attempting to update undefined context");
  var s = t && e.reduce(function(a, p) {
    var v, m, d = p.assignment, f = { state: n, action: p, _event: r }, g = {};
    if (Ie(d))
      g = d(a, r.data, f);
    else
      try {
        for (var w = we(Object.keys(d)), S = w.next(); !S.done; S = w.next()) {
          var T = S.value, C = d[T];
          g[T] = Ie(C) ? C(a, r.data, f) : C;
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
__name(Tu, "Tu");
u(Tu, "updateContext");
var nt = u(function() {
}, "warn");
Ge || (nt = u(function(t, r) {
  var e = t instanceof Error ? t : void 0;
  if (!(!e && t) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    e && n.push(e), console.warn.apply(console, n);
  }
}, "warn"));
function nn(t) {
  return Array.isArray(t);
}
__name(nn, "nn");
u(nn, "isArray");
function Ie(t) {
  return typeof t == "function";
}
__name(Ie, "Ie");
u(Ie, "isFunction");
function Te(t) {
  return typeof t == "string";
}
__name(Te, "Te");
u(Te, "isString");
function Es(t, r) {
  if (t)
    return Te(t) ? { type: bs, name: t, predicate: r ? r[t] : void 0 } : Ie(t) ? { type: bs, name: t.name, predicate: t } : t;
}
__name(Es, "Es");
u(Es, "toGuard");
function ld(t) {
  try {
    return "subscribe" in t && Ie(t.subscribe);
  } catch (r) {
    return false;
  }
}
__name(ld, "ld");
u(ld, "isObservable");
var Gr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Kw = (ys = {}, ys[Gr] = function() {
  return this;
}, ys[Symbol.observable] = function() {
  return this;
}, ys);
function jr(t) {
  return !!t && "__xstatenode" in t;
}
__name(jr, "jr");
u(jr, "isMachine");
function ud(t) {
  return !!t && typeof t.send == "function";
}
__name(ud, "ud");
u(ud, "isActor");
function Li(t, r) {
  return Te(t) || typeof t == "number" ? V({ type: t }, r) : t;
}
__name(Li, "Li");
u(Li, "toEventObject");
function st(t, r) {
  if (!Te(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = Li(t);
  return V({ name: e.type, data: e, $$type: "scxml", type: "external" }, r);
}
__name(st, "st");
u(st, "toSCXMLEvent");
function ni(t, r) {
  var e = rd(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || jr(n) ? { target: n, event: t } : V(V({}, n), { event: t });
  });
  return e;
}
__name(ni, "ni");
u(ni, "toTransitionConfigArray");
function cd(t) {
  if (!(t === void 0 || t === Qp))
    return ur(t);
}
__name(cd, "cd");
u(cd, "normalizeTarget");
function pd(t, r, e) {
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
__name(pd, "pd");
u(pd, "reportUnhandledExceptionOnInvocation");
function Ss(t, r, e, n, s) {
  var a = t.options.guards, p = { state: s, cond: r, _event: n };
  if (r.type === bs)
    return ((a == null ? void 0 : a[r.name]) || r.predicate)(e, n.data, p);
  var v = a == null ? void 0 : a[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
  return v(e, n.data, p);
}
__name(Ss, "Ss");
u(Ss, "evaluateGuard");
function Ts(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name(Ts, "Ts");
u(Ts, "toInvokeSource");
function Gi(t, r, e) {
  var n = u(function() {
  }, "noop"), s = typeof t == "object", a = s ? t : null;
  return { next: ((s ? t.next : t) || n).bind(a), error: ((s ? t.error : r) || n).bind(a), complete: ((s ? t.complete : e) || n).bind(a) };
}
__name(Gi, "Gi");
u(Gi, "toObserver");
function Lo(t, r) {
  return "".concat(t, ":invocation[").concat(r, "]");
}
__name(Lo, "Lo");
u(Lo, "createInvokeId");
function Go(t) {
  return (t.type === Sn || t.type === ti && t.to === rn.Internal) && typeof t.delay != "number";
}
__name(Go, "Go");
u(Go, "isRaisableAction");
var on = st({ type: Zp });
function Cs(t, r) {
  return r && r[t] || void 0;
}
__name(Cs, "Cs");
u(Cs, "getActionFunction");
function Hi(t, r) {
  var e;
  if (Te(t) || typeof t == "number") {
    var n = Cs(t, r);
    Ie(n) ? e = { type: t, exec: n } : n ? e = n : e = { type: t, exec: void 0 };
  } else if (Ie(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var n = Cs(t.type, r);
    if (Ie(n))
      e = V(V({}, t), { exec: n });
    else if (n) {
      var s = n.type || t.type;
      e = V(V(V({}, n), t), { type: s });
    } else
      e = t;
  }
  return e;
}
__name(Hi, "Hi");
u(Hi, "toActionObject");
var Hr = u(function(t, r) {
  if (!t)
    return [];
  var e = nn(t) ? t : [t];
  return e.map(function(n) {
    return Hi(n, r);
  });
}, "toActionObjects");
function Os(t) {
  var r = Hi(t);
  return V(V({ id: Te(t) ? t : r.id }, r), { type: r.type });
}
__name(Os, "Os");
u(Os, "toActivityDefinition");
function dd(t, r) {
  return { type: Sn, event: typeof t == "function" ? t : Li(t), delay: r ? r.delay : void 0, id: r == null ? void 0 : r.id };
}
__name(dd, "dd");
u(dd, "raise");
function wg(t, r, e, n) {
  var s = { _event: e }, a = st(Ie(t.event) ? t.event(r, e.data, s) : t.event), p;
  if (Te(t.delay)) {
    var v = n && n[t.delay];
    p = Ie(v) ? v(r, e.data, s) : v;
  } else
    p = Ie(t.delay) ? t.delay(r, e.data, s) : t.delay;
  return V(V({}, t), { type: Sn, _event: a, delay: p });
}
__name(wg, "wg");
u(wg, "resolveRaise");
function fd(t, r) {
  return { to: r ? r.to : void 0, type: ti, event: Ie(t) ? t : Li(t), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Ie(t) ? t.name : ws(t) };
}
__name(fd, "fd");
u(fd, "send");
function xg(t, r, e, n) {
  var s = { _event: e }, a = st(Ie(t.event) ? t.event(r, e.data, s) : t.event), p;
  if (Te(t.delay)) {
    var v = n && n[t.delay];
    p = Ie(v) ? v(r, e.data, s) : v;
  } else
    p = Ie(t.delay) ? t.delay(r, e.data, s) : t.delay;
  var m = Ie(t.to) ? t.to(r, e.data, s) : t.to;
  return V(V({}, t), { to: m, _event: a, event: a.data, delay: p });
}
__name(xg, "xg");
u(xg, "resolveSend");
var Eg = u(function(t, r, e) {
  return V(V({}, t), { value: Te(t.expr) ? t.expr : t.expr(r, e.data, { _event: e }) });
}, "resolveLog");
var hd = u(function(t) {
  return { type: ms, sendId: t };
}, "cancel");
function md(t) {
  var r = Os(t);
  return { type: Ne.Start, activity: r, exec: void 0 };
}
__name(md, "md");
u(md, "start");
function vd(t) {
  var r = Ie(t) ? t : Os(t);
  return { type: Ne.Stop, activity: r, exec: void 0 };
}
__name(vd, "vd");
u(vd, "stop");
function Sg(t, r, e) {
  var n = Ie(t.activity) ? t.activity(r, e.data) : t.activity, s = typeof n == "string" ? { id: n } : n, a = { type: Ne.Stop, activity: s };
  return a;
}
__name(Sg, "Sg");
u(Sg, "resolveStop");
function gd(t, r) {
  var e = r ? "#".concat(r) : "";
  return "".concat(Ne.After, "(").concat(t, ")").concat(e);
}
__name(gd, "gd");
u(gd, "after");
function jo(t, r) {
  var e = "".concat(Ne.DoneState, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(jo, "jo");
u(jo, "done");
function $i(t, r) {
  var e = "".concat(Ne.DoneInvoke, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name($i, "$i");
u($i, "doneInvoke");
function ii(t, r) {
  var e = "".concat(Ne.ErrorPlatform, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(ii, "ii");
u(ii, "error");
var Tg = u(function(t) {
  var r, e, n = [];
  try {
    for (var s = we(t), a = s.next(); !a.done; a = s.next())
      for (var p = a.value, v = 0; v < p.actions.length; ) {
        if (p.actions[v].type === bu) {
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
function ji(t, r, e, n, s, a, p) {
  p === void 0 && (p = false);
  var v = p ? [] : Tg(s), m = v.length ? Tu(e, n, v, r) : e, d = p ? [e] : void 0, f = [];
  function g(T, C) {
    var R;
    switch (C.type) {
      case Sn: {
        var _ = wg(C, m, n, t.options.delays);
        return a && typeof _.delay == "number" && a(_, m, n), _;
      }
      case ti:
        var L = xg(C, m, n, t.options.delays);
        if (!Ge) {
          var B = C.delay;
          nt(!Te(B) || typeof L.delay == "number", "No delay reference for delay expression '".concat(B, "' was found on machine '").concat(t.id, "'"));
        }
        return a && L.to !== rn.Internal && (T === "entry" ? f.push(L) : a(L, m, n)), L;
      case vs: {
        var A = Eg(C, m, n);
        return a == null || a(A, m, n), A;
      }
      case Kp: {
        var ee = C, z = (R = ee.conds.find(function(ze) {
          var Ae = Es(ze.cond, t.options.guards);
          return !Ae || Ss(t, Ae, m, n, a ? void 0 : r);
        })) === null || R === void 0 ? void 0 : R.actions;
        if (!z)
          return [];
        var H = Ee(ji(t, r, m, n, [{ type: T, actions: Hr(ur(z), t.options.actions) }], a, p), 2), te = H[0], Q = H[1];
        return m = Q, d == null || d.push(m), te;
      }
      case Jp: {
        var z = C.get(m, n.data);
        if (!z)
          return [];
        var ue = Ee(ji(t, r, m, n, [{ type: T, actions: Hr(ur(z), t.options.actions) }], a, p), 2), K = ue[0], ie = ue[1];
        return m = ie, d == null || d.push(m), K;
      }
      case ki: {
        var A = Sg(C, m, n);
        return a == null || a(A, e, n), A;
      }
      case bu: {
        m = Tu(m, n, [C], a ? void 0 : r), d == null || d.push(m);
        break;
      }
      default:
        var q = Hi(C, t.options.actions), oe = q.exec;
        if (a)
          a(q, m, n);
        else if (oe && d) {
          var tt = d.length - 1, Ze = V(V({}, q), { exec: function(ze) {
            for (var Ae = [], We = 1; We < arguments.length; We++)
              Ae[We - 1] = arguments[We];
            oe.apply(void 0, ke([d[tt]], Ee(Ae), false));
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
      for (var L = we(T.actions), B = L.next(); !B.done; B = L.next()) {
        var A = B.value, ee = g(T.type, A);
        ee && (_ = _.concat(ee));
      }
    } catch (z) {
      C = { error: z };
    } finally {
      try {
        B && !B.done && (R = L.return) && R.call(L);
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
  var S = Be(s.map(w));
  return [S, m];
}
__name(ji, "ji");
u(ji, "resolveActions");
var bd = [];
var Tn = u(function(t, r) {
  bd.push(t);
  var e = r(t);
  return bd.pop(), e;
}, "provide");
function yd(t) {
  var r;
  return r = { id: t, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: t };
  } }, r[Gr] = function() {
    return this;
  }, r;
}
__name(yd, "yd");
u(yd, "createNullActor");
function wd(t, r, e, n) {
  var s, a = Ts(t.src), p = (s = r == null ? void 0 : r.options.services) === null || s === void 0 ? void 0 : s[a.type], v = t.data ? ri(t.data, e, n) : void 0, m = p ? Cu(p, t.id, v) : yd(t.id);
  return m.meta = t, m;
}
__name(wd, "wd");
u(wd, "createInvocableActor");
function Cu(t, r, e) {
  var n = yd(r);
  if (n.deferred = true, jr(t)) {
    var s = n.state = Tn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    n.getSnapshot = function() {
      return s;
    };
  }
  return n;
}
__name(Cu, "Cu");
u(Cu, "createDeferredActor");
function Cg(t) {
  try {
    return typeof t.send == "function";
  } catch (r) {
    return false;
  }
}
__name(Cg, "Cg");
u(Cg, "isActor");
function xd(t) {
  return Cg(t) && "id" in t;
}
__name(xd, "xd");
u(xd, "isSpawnedActor");
function Ed(t) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[Gr] = function() {
    return this;
  }, r), t);
}
__name(Ed, "Ed");
u(Ed, "toActorRef");
var Ho = u(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function Mu(t) {
  return Object.keys(t.states).map(function(r) {
    return t.states[r];
  });
}
__name(Mu, "Mu");
u(Mu, "getAllChildren");
function Bi(t) {
  return Mu(t).filter(function(r) {
    return r.type !== "history";
  });
}
__name(Bi, "Bi");
u(Bi, "getChildren");
function Iu(t) {
  var r = [t];
  return Ho(t) ? r : r.concat(Be(Bi(t).map(Iu)));
}
__name(Iu, "Iu");
u(Iu, "getAllStateNodes");
function qi(t, r) {
  var e, n, s, a, p, v, m, d, f = new Set(t), g = Ou(f), w = new Set(r);
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
  var _ = Ou(w);
  try {
    for (var L = we(w), B = L.next(); !B.done; B = L.next()) {
      var C = B.value;
      if (C.type === "compound" && (!_.get(C) || !_.get(C).length))
        g.get(C) ? g.get(C).forEach(function(ue) {
          return w.add(ue);
        }) : C.initialStateNodes.forEach(function(ue) {
          return w.add(ue);
        });
      else if (C.type === "parallel")
        try {
          for (var A = (p = void 0, we(Bi(C))), ee = A.next(); !ee.done; ee = A.next()) {
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
      B && !B.done && (a = L.return) && a.call(L);
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
__name(qi, "qi");
u(qi, "getConfiguration");
function Sd(t, r) {
  var e = r.get(t);
  if (!e)
    return {};
  if (t.type === "compound") {
    var n = e[0];
    if (n) {
      if (Ho(n))
        return n.key;
    } else
      return {};
  }
  var s = {};
  return e.forEach(function(a) {
    s[a.key] = Sd(a, r);
  }), s;
}
__name(Sd, "Sd");
u(Sd, "getValueFromAdj");
function Ou(t) {
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
__name(Ou, "Ou");
u(Ou, "getAdjList");
function Td(t, r) {
  var e = qi([t], r);
  return Sd(t, Ou(e));
}
__name(Td, "Td");
u(Td, "getValue");
function Fi(t, r) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === r;
  }) : t instanceof Set ? t.has(r) : false;
}
__name(Fi, "Fi");
u(Fi, "has");
function Cd(t) {
  return ke([], Ee(new Set(Be(ke([], Ee(t.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(Cd, "Cd");
u(Cd, "nextEvents");
function $o(t, r) {
  return r.type === "compound" ? Bi(r).some(function(e) {
    return e.type === "final" && Fi(t, e);
  }) : r.type === "parallel" ? Bi(r).every(function(e) {
    return $o(t, e);
  }) : false;
}
__name($o, "$o");
u($o, "isInFinalState");
function Od(t) {
  return t === void 0 && (t = []), t.reduce(function(r, e) {
    return e.meta !== void 0 && (r[e.id] = e.meta), r;
  }, {});
}
__name(Od, "Od");
u(Od, "getMeta");
function Au(t) {
  return new Set(Be(t.map(function(r) {
    return r.tags;
  })));
}
__name(Au, "Au");
u(Au, "getTagsFromConfiguration");
function Pu(t, r) {
  if (t === r)
    return true;
  if (t === void 0 || r === void 0)
    return false;
  if (Te(t) || Te(r))
    return t === r;
  var e = Object.keys(t), n = Object.keys(r);
  return e.length === n.length && e.every(function(s) {
    return Pu(t[s], r[s]);
  });
}
__name(Pu, "Pu");
u(Pu, "stateValuesEqual");
function Md(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(Md, "Md");
u(Md, "isStateConfig");
function Id(t, r) {
  var e = t.exec, n = V(V({}, t), { exec: e !== void 0 ? function() {
    return e(r.context, r.event, { action: t, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(Id, "Id");
u(Id, "bindActionToState");
var wr = function() {
  function t(r) {
    var e = this, n;
    this.actions = [], this.activities = xu, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || xu, this.meta = Od(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Cd(e.configuration);
    } });
  }
  __name(t, "t");
  return u(t, "State"), t.from = function(r, e) {
    if (r instanceof t)
      return r.context !== e ? new t({ value: r.value, context: e, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = on;
    return new t({ value: r, context: e, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, t.create = function(r) {
    return new t(r);
  }, t.inert = function(r, e) {
    if (r instanceof t) {
      if (!r.actions.length)
        return r;
      var n = on;
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
    var n = Di(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(e) });
  }, t.prototype.matches = function(r) {
    return No(r, this.value);
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
var Og = { deferEvents: false };
var zu = function() {
  function t(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Og), r);
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
var Ru = /* @__PURE__ */ new Map();
var Mg = 0;
var Ui = { bookId: function() {
  return "x:".concat(Mg++);
}, register: function(t, r) {
  return Ru.set(t, r), t;
}, get: function(t) {
  return Ru.get(t);
}, free: function(t) {
  Ru.delete(t);
} };
function Ms() {
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
__name(Ms, "Ms");
u(Ms, "getGlobal");
function Ig() {
  var t = Ms();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name(Ig, "Ig");
u(Ig, "getDevTools");
function Ad(t) {
  if (Ms()) {
    var r = Ig();
    r && r.register(t);
  }
}
__name(Ad, "Ad");
u(Ad, "registerService");
function Pd(t, r) {
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
  }, "flush"), v = Ed({ id: r.id, send: function(d) {
    s.push(d), p();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(d, f, g) {
    var w = Gi(d, f, g);
    return n.add(w), w.next(e), { unsubscribe: function() {
      n.delete(w);
    } };
  } }), m = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return e = t.start ? t.start(m) : e, v;
}
__name(Pd, "Pd");
u(Pd, "spawnBehavior");
var Ag = { sync: false, autoForward: false };
var lt;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(lt || (lt = {}));
var zd = function() {
  function t(r, e) {
    e === void 0 && (e = t.defaultOptions);
    var n = this;
    this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = lt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(f, g) {
      if (nn(f))
        return n.batch(f), n.state;
      var w = st(Li(f, g));
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
      var S = n.parent && (g === rn.Parent || n.parent.id === g), T = S ? n.parent : Te(g) ? g === rn.Internal ? n : n.children.get(g) || Ui.get(g) : ud(g) ? g : void 0;
      if (!T) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(g, "' from service '").concat(n.id, "'."));
        Ge || nt(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(f.type));
        return;
      }
      if ("machine" in T) {
        if (n.status !== lt.Stopped || n.parent !== T || n.state.done) {
          var C = V(V({}, f), { name: f.name === wu ? "".concat(ii(n.id)) : f.name, origin: n.sessionId });
          !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, C]) : T.send(C);
        }
      } else
        !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, f.data]) : T.send(f.data);
    }, this._exec = function(f, g, w, S) {
      S === void 0 && (S = n.machine.options.actions);
      var T = f.exec || Cs(f.type, S), C = Ie(T) ? T : T ? T.exec : f.exec;
      if (C)
        try {
          return C(g, w.data, n.machine.config.predictableActionArguments ? { action: f, _event: w } : { action: f, state: n.state, _event: w });
        } catch (oe) {
          throw n.parent && n.parent.send({ type: "xstate.error", data: oe }), oe;
        }
      switch (f.type) {
        case Sn: {
          var R = f;
          n.defer(R);
          break;
        }
        case ti:
          var _ = f;
          if (typeof _.delay == "number") {
            n.defer(_);
            return;
          } else
            _.to ? n.sendTo(_._event, _.to, w === on) : n.send(_._event);
          break;
        case ms:
          n.cancel(f.sendId);
          break;
        case zo: {
          if (n.status !== lt.Running)
            return;
          var L = f.activity;
          if (!n.machine.config.predictableActionArguments && !n.state.activities[L.id || L.type])
            break;
          if (L.type === Ne.Invoke) {
            var B = Ts(L.src), A = n.machine.options.services ? n.machine.options.services[B.type] : void 0, ee = L.id, z = L.data;
            Ge || nt(!("forward" in L), "`forward` property is deprecated (found in invocation of '".concat(L.src, "' in in machine '").concat(n.machine.id, "'). ") + "Please use `autoForward` instead.");
            var H = "autoForward" in L ? L.autoForward : !!L.forward;
            if (!A) {
              Ge || nt(false, "No service found for invocation '".concat(L.src, "' in machine '").concat(n.machine.id, "'."));
              return;
            }
            var te = z ? ri(z, g, w) : void 0;
            if (typeof A == "string")
              return;
            var Q = Ie(A) ? A(g, w.data, { data: te, src: B, meta: L.meta }) : A;
            if (!Q)
              return;
            var ue = void 0;
            jr(Q) && (Q = te ? Q.withContext(te) : Q, ue = { autoForward: H }), n.spawn(Q, ee, ue);
          } else
            n.spawnActivity(L);
          break;
        }
        case ki: {
          n.stopChild(f.activity.id);
          break;
        }
        case vs:
          var K = f, ie = K.label, q = K.value;
          ie ? n.logger(ie, q) : n.logger(q);
          break;
        default:
          Ge || nt(false, "No implementation found for action type '".concat(f.type, "'"));
          break;
      }
    };
    var s = V(V({}, t.defaultOptions), e), a = s.clock, p = s.logger, v = s.parent, m = s.id, d = m !== void 0 ? m : r.id;
    this.id = d, this.logger = p, this.clock = a, this.parent = v, this.options = s, this.scheduler = new zu({ deferEvents: this.options.deferEvents }), this.sessionId = Ui.bookId();
  }
  __name(t, "t");
  return u(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : Tn(this, function() {
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
    if (r._sessionid = this.sessionId, this._state = r, (!this.machine.config.predictableActionArguments || e === on) && this.options.execute)
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
      for (var L = we(this.contextListeners), B = L.next(); !B.done; B = L.next()) {
        var A = B.value;
        A(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (Q) {
      v = { error: Q };
    } finally {
      try {
        B && !B.done && (m = L.return) && m.call(L);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (this.state.done) {
      var ee = r.configuration.find(function(Q) {
        return Q.type === "final" && Q.parent === g.machine;
      }), z = ee && ee.doneData ? ri(ee.doneData, r.context, e) : void 0;
      this._doneEvent = $i(this.id, z);
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
      this._stop(), this._stopChildren(), Ui.free(this.sessionId);
    }
  }, t.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === lt.Running && r(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(r, e, n) {
    var s = this, a = Gi(r, e, n);
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
    this.machine._init(), Ui.register(this.sessionId, this), this.initialized = true, this.status = lt.Running;
    var n = r === void 0 ? this.initialState : Tn(this, function() {
      return Md(r) ? e.machine.resolveState(r) : e.machine.resolveState(wr.from(r, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(n, on);
    }), this;
  }, t.prototype._stopChildren = function() {
    this.children.forEach(function(r) {
      Ie(r.stop) && r.stop();
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
      for (var L = we(this.doneListeners), B = L.next(); !B.done; B = L.next()) {
        var S = B.value;
        this.doneListeners.delete(S);
      }
    } catch (H) {
      v = { error: H };
    } finally {
      try {
        B && !B.done && (m = L.return) && m.call(L);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    this.initialized = false, this.status = lt.Stopped, this._initialState = void 0;
    try {
      for (var A = we(Object.keys(this.delayedEventsMap)), ee = A.next(); !ee.done; ee = A.next()) {
        var z = ee.value;
        this.clock.clearTimeout(this.delayedEventsMap[z]);
      }
    } catch (H) {
      d = { error: H };
    } finally {
      try {
        ee && !ee.done && (f = A.return) && f.call(A);
      } finally {
        if (d)
          throw d.error;
      }
    }
    this.scheduler.clear(), this.scheduler = new zu({ deferEvents: this.options.deferEvents });
  }, t.prototype.stop = function() {
    var r = this, e = this.scheduler;
    return this._stop(), e.schedule(function() {
      var n = st({ type: "xstate.stop" }), s = Tn(r, function() {
        var a = Be(ke([], Ee(r.state.configuration), false).sort(function(f, g) {
          return g.order - f.order;
        }).map(function(f) {
          return Hr(f.onExit, r.machine.options.actions);
        })), p = Ee(ji(r.machine, r.state, r.state.context, n, [{ type: "exit", actions: a }], r.machine.config.predictableActionArguments ? r._exec : void 0, r.machine.config.predictableActionArguments || r.machine.config.preserveActionOrder), 2), v = p[0], m = p[1], d = new wr({ value: r.state.value, context: m, _event: n, _sessionid: r.sessionId, historyValue: void 0, history: r.state, actions: v.filter(function(f) {
          return !Go(f);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: r.state.done, tags: r.state.tags, machine: r.machine });
        return d.changed = true, d;
      });
      r.update(s, n), r._stopChildren(), Ui.free(r.sessionId);
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
          e.forward(T), p = Tn(e, function() {
            return e.machine.transition(p, T, void 0, n || void 0);
          }), m.push.apply(m, ke([], Ee(e.machine.config.predictableActionArguments ? p.actions : p.actions.map(function(C) {
            return Id(C, p);
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
    if (s.name.indexOf(yu) === 0 && !this.state.nextEvents.some(function(p) {
      return p.indexOf(yu) === 0;
    }))
      throw s.data.data;
    var a = Tn(this, function() {
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
    e && (this.removeChild(r), Ie(e.stop) && e.stop());
  }, t.prototype.spawn = function(r, e, n) {
    if (this.status !== lt.Running)
      return Cu(r, e);
    if (Su(r))
      return this.spawnPromise(Promise.resolve(r), e);
    if (Ie(r))
      return this.spawnCallback(r, e);
    if (xd(r))
      return this.spawnActor(r, e);
    if (ld(r))
      return this.spawnObservable(r, e);
    if (jr(r))
      return this.spawnMachine(r, V(V({}, n), { id: e }));
    if (id(r))
      return this.spawnBehavior(r, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof r, '".'));
  }, t.prototype.spawnMachine = function(r, e) {
    var n = this;
    e === void 0 && (e = {});
    var s = new t(r, V(V({}, this.options), { parent: this, id: e.id || r.id })), a = V(V({}, Ag), e);
    a.sync && s.onTransition(function(v) {
      n.send(Do, { state: v, id: s.id });
    });
    var p = s;
    return this.children.set(s.id, p), a.autoForward && this.forwardTo.add(s.id), s.onDone(function(v) {
      n.removeChild(s.id), n.send(st(v, { origin: s.id }));
    }).start(), p;
  }, t.prototype.spawnBehavior = function(r, e) {
    var n = Pd(r, { id: e, parent: this });
    return this.children.set(e, n), n;
  }, t.prototype.spawnPromise = function(r, e) {
    var n, s = this, a = false, p;
    r.then(function(m) {
      a || (p = m, s.removeChild(e), s.send(st($i(e, m), { origin: e })));
    }, function(m) {
      if (!a) {
        s.removeChild(e);
        var d = ii(e, m);
        try {
          s.send(st(d, { origin: e }));
        } catch (f) {
          pd(m, f, e), s.devTools && s.devTools.send(d, s.state), s.machine.strict && s.stop();
        }
      }
    });
    var v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      var g = Gi(m, d, f), w = false;
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
    } }, n[Gr] = function() {
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
      this.send(ii(e, w));
    }
    if (Su(f))
      return this.spawnPromise(f, e);
    var g = (n = { id: e, send: function(w) {
      return p.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = Gi(w);
      return v.add(S.next), { unsubscribe: function() {
        v.delete(S.next);
      } };
    }, stop: function() {
      a = true, Ie(f) && f();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return m;
    } }, n[Gr] = function() {
      return this;
    }, n);
    return this.children.set(e, g), g;
  }, t.prototype.spawnObservable = function(r, e) {
    var n, s = this, a, p = r.subscribe(function(m) {
      a = m, s.send(st(m, { origin: e }));
    }, function(m) {
      s.removeChild(e), s.send(st(ii(e, m), { origin: e }));
    }, function() {
      s.removeChild(e), s.send(st($i(e), { origin: e }));
    }), v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      return r.subscribe(m, d, f);
    }, stop: function() {
      return p.unsubscribe();
    }, getSnapshot: function() {
      return a;
    }, toJSON: function() {
      return { id: e };
    } }, n[Gr] = function() {
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
    } }, n[Gr] = function() {
      return this;
    }, n));
  }, t.prototype.attachDev = function() {
    var r = Ms();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, e), { features: V({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      Ad(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[Gr] = function() {
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
  var e = new zd(t, r);
  return e;
}
__name(ut, "ut");
u(ut, "interpret");
function Pg(t) {
  if (typeof t == "string") {
    var r = { type: t };
    return r.toString = function() {
      return t;
    }, r;
  }
  return t;
}
__name(Pg, "Pg");
u(Pg, "toInvokeSource");
function Bo(t) {
  return V(V({ type: Ro }, t), { toJSON: function() {
    t.onDone, t.onError;
    var r = Di(t, ["onDone", "onError"]);
    return V(V({}, r), { type: Ro, src: Pg(t.src) });
  } });
}
__name(Bo, "Bo");
u(Bo, "toInvokeDefinition");
var Yi = "";
var Du = "#";
var qo = "*";
var Wi = {};
var Vi = u(function(t) {
  return t[0] === Du;
}, "isStateId");
var zg = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Rg = u(function(t, r, e) {
  var n = e.slice(0, -1).some(function(a) {
    return !("cond" in a) && !("in" in a) && (Te(a.target) || jr(a.target));
  }), s = r === Yi ? "the transient event" : "event '".concat(r, "'");
  nt(!n, "One or more transitions for ".concat(s, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Rd = function() {
  function t(r, e, n, s) {
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var a = this, p;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(zg(), e), this.parent = s == null ? void 0 : s.parent, this.key = this.config.key || (s == null ? void 0 : s.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : gs), this.id = this.config.id || ke([this.machine.key], Ee(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (p = this.config.schema) !== null && p !== void 0 ? p : {}, this.description = this.config.description, Ge || nt(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? _i(this.config.states, function(d, f) {
      var g, w = new t(d, {}, void 0, { parent: a, key: f });
      return Object.assign(a.idMap, V((g = {}, g[w.id] = w, g), w.idMap)), w;
    }) : Wi;
    var v = 0;
    function m(d) {
      var f, g;
      d.order = v++;
      try {
        for (var w = we(Mu(d)), S = w.next(); !S.done; S = w.next()) {
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
      return f === Yi;
    }) : Yi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = ur(this.config.entry || this.config.onEntry).map(function(d) {
      return Hi(d);
    }), this.onExit = ur(this.config.exit || this.config.onExit).map(function(d) {
      return Hi(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = ur(this.config.invoke).map(function(d, f) {
      var g, w;
      if (jr(d)) {
        var S = Lo(a.id, f);
        return a.machine.options.services = V((g = {}, g[S] = d, g), a.machine.options.services), Bo({ src: S, id: S });
      } else if (Te(d.src)) {
        var S = d.id || Lo(a.id, f);
        return Bo(V(V({}, d), { id: S, src: d.src }));
      } else if (jr(d.src) || Ie(d.src)) {
        var S = d.id || Lo(a.id, f);
        return a.machine.options.services = V((w = {}, w[S] = d.src, w), a.machine.options.services), Bo(V(V({ id: S }, d), { src: S }));
      } else {
        var T = d.src;
        return Bo(V(V({ id: Lo(a.id, f) }, d), { src: T }));
      }
    }), this.activities = ur(this.config.activities).concat(this.invoke).map(function(d) {
      return Os(d);
    }), this.transition = this.transition.bind(this), this.tags = ur(this.config.tags);
  }
  __name(t, "t");
  return u(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Iu(this).forEach(function(r) {
      return r.on;
    });
  }, t.prototype.withConfig = function(r, e) {
    var n = this.options, s = n.actions, a = n.activities, p = n.guards, v = n.services, m = n.delays;
    return new t(this.config, { actions: V(V({}, s), r.actions), activities: V(V({}, a), r.activities), guards: V(V({}, p), r.guards), services: V(V({}, v), r.services), delays: V(V({}, m), r.delays) }, e != null ? e : this.context);
  }, t.prototype.withContext = function(r) {
    return new t(this.config, this.options, r);
  }, Object.defineProperty(t.prototype, "context", { get: function() {
    return Ie(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: _i(this.states, function(r) {
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
    var e = r === Yi, n = this.transitions.filter(function(s) {
      var a = s.eventType === r;
      return e ? a : a || s.eventType === qo;
    });
    return this.__cache.candidates[r] = n, n;
  }, t.prototype.getDelayedTransitions = function() {
    var r = this, e = this.config.after;
    if (!e)
      return [];
    var n = u(function(a, p) {
      var v = Ie(a) ? "".concat(r.id, ":delay[").concat(p, "]") : a, m = gd(v, r.id);
      return r.onEntry.push(fd(m, { delay: a })), r.onExit.push(hd(m)), m;
    }, "mutateEntryExit"), s = nn(e) ? e.map(function(a, p) {
      var v = n(a.delay, p);
      return V(V({}, a), { event: v });
    }) : Be(Object.keys(e).map(function(a, p) {
      var v = e[a], m = Te(v) ? { target: v } : v, d = isNaN(+a) ? a : +a, f = n(d, p);
      return ur(m).map(function(g) {
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
    var s = r instanceof wr ? r.value : Ni(r, this.delimiter);
    if (Te(s)) {
      var a = this.getStateNode(s).initial;
      return a !== void 0 ? this.getStateNodes((e = {}, e[s] = a, e)) : [this, this.states[s]];
    }
    var p = Object.keys(s), v = [this];
    return v.push.apply(v, ke([], Ee(Be(p.map(function(m) {
      return n.getStateNode(m).getStateNodes(s[m]);
    }))), false)), v;
  }, t.prototype.handles = function(r) {
    var e = ws(r);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(r) {
    var e = r instanceof wr ? r : wr.create(r), n = Array.from(qi([], this.getStateNodes(e.value)));
    return new wr(V(V({}, e), { value: this.resolve(e.value), configuration: n, done: $o(n, this), tags: Au(n), machine: this.machine }));
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
    }), T = Be(S.map(function(_) {
      return _.transitions;
    })), C = S.some(function(_) {
      return _.transitions.length > 0;
    });
    if (!C)
      return this.next(e, n);
    var R = Be(Object.keys(p).map(function(_) {
      return p[_].configuration;
    }));
    return { transitions: T, exitSet: Be(S.map(function(_) {
      return _.exitSet;
    })), configuration: R, source: e, actions: Be(Object.keys(p).map(function(_) {
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
        var w = g.value, S = w.cond, T = w.in, C = r.context, R = T ? Te(T) && Vi(T) ? r.matches(Ni(this.getStateNodeById(T).path, this.delimiter)) : No(Ni(T, this.delimiter), ed(this.path.slice(0, -2))(r.value)) : true, _ = false;
        try {
          _ = !S || Ss(this.machine, S, C, e, r);
        } catch (A) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(p, "' in state node '").concat(this.id, `':
`).concat(A.message));
        }
        if (_ && R) {
          w.target !== void 0 && (m = w.target), v.push.apply(v, ke([], Ee(w.actions), false)), d = w;
          break;
        }
      }
    } catch (A) {
      n = { error: A };
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
      var L = Be(m.map(function(A) {
        return a.getRelativeStateNodes(A, r.historyValue);
      })), B = !!d.internal;
      return { transitions: [d], exitSet: B ? [] : Be(m.map(function(A) {
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
    var m, d, f, g, w = this, S = p ? qi([], this.getStateNodes(p.value)) : [], T = /* @__PURE__ */ new Set();
    try {
      for (var C = we(Array.from(r).sort(function(K, ie) {
        return K.order - ie.order;
      })), R = C.next(); !R.done; R = C.next()) {
        var _ = R.value;
        (!Fi(S, _) || Fi(n.exitSet, _) || _.parent && T.has(_.parent)) && T.add(_);
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
      for (var L = we(S), B = L.next(); !B.done; B = L.next()) {
        var _ = B.value;
        (!Fi(r, _) || Fi(n.exitSet, _.parent)) && n.exitSet.push(_);
      }
    } catch (K) {
      f = { error: K };
    } finally {
      try {
        B && !B.done && (g = L.return) && g.call(L);
      } finally {
        if (f)
          throw f.error;
      }
    }
    n.exitSet.sort(function(K, ie) {
      return ie.order - K.order;
    });
    var A = Array.from(T).sort(function(K, ie) {
      return K.order - ie.order;
    }), ee = new Set(n.exitSet), z = Be(A.map(function(K) {
      var ie = [];
      if (K.type !== "final")
        return ie;
      var q = K.parent;
      if (!q.parent)
        return ie;
      ie.push(jo(K.id, K.doneData), jo(q.id, K.doneData ? ri(K.doneData, s, a) : void 0));
      var oe = q.parent;
      return oe.type === "parallel" && Bi(oe).every(function(tt) {
        return $o(n.configuration, tt);
      }) && ie.push(jo(oe.id)), ie;
    })), H = A.map(function(K) {
      var ie = K.onEntry, q = K.activities.map(function(oe) {
        return md(oe);
      });
      return { type: "entry", actions: Hr(v ? ke(ke([], Ee(ie), false), Ee(q), false) : ke(ke([], Ee(q), false), Ee(ie), false), w.machine.options.actions) };
    }).concat({ type: "state_done", actions: z.map(function(K) {
      return dd(K);
    }) }), te = Array.from(ee).map(function(K) {
      return { type: "exit", actions: Hr(ke(ke([], Ee(K.onExit), false), Ee(K.activities.map(function(ie) {
        return vd(ie);
      })), false), w.machine.options.actions) };
    }), Q = te.concat({ type: "transition", actions: Hr(n.actions, this.machine.options.actions) }).concat(H);
    if (e) {
      var ue = Hr(Be(ke([], Ee(r), false).sort(function(K, ie) {
        return ie.order - K.order;
      }).map(function(K) {
        return K.onExit;
      })), this.machine.options.actions).filter(function(K) {
        return !Go(K);
      });
      return Q.concat({ type: "stop", actions: ue });
    }
    return Q;
  }, t.prototype.transition = function(r, e, n, s) {
    r === void 0 && (r = this.initialState);
    var a = st(e), p;
    if (r instanceof wr)
      p = n === void 0 ? r : this.resolveState(wr.from(r, n));
    else {
      var v = Te(r) ? this.resolve(ko(this.getResolvedPath(r))) : this.resolve(r), m = n != null ? n : this.machine.context;
      p = this.resolveState(wr.from(v, m));
    }
    if (!Ge && a.name === qo)
      throw new Error("An event cannot have the wildcard type ('".concat(qo, "')"));
    if (this.strict && !this.events.includes(a.name) && !nd(a.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(a.name, "'"));
    var d = this._transition(p.value, p, a) || { transitions: [], configuration: [], exitSet: [], source: p, actions: [] }, f = qi([], this.getStateNodes(p.value)), g = d.configuration.length ? qi(f, d.configuration) : f;
    return d.configuration = ke([], Ee(g), false), this.resolveTransition(d, p, p.context, s, a);
  }, t.prototype.resolveRaisedTransition = function(r, e, n, s) {
    var a, p = r.actions;
    return r = this.transition(r, e, void 0, s), r._event = n, r.event = n.data, (a = r.actions).unshift.apply(a, ke([], Ee(p), false)), r;
  }, t.prototype.resolveTransition = function(r, e, n, s, a) {
    var p, v, m, d, f = this;
    a === void 0 && (a = on);
    var g = r.configuration, w = !e || r.transitions.length > 0, S = w ? r.configuration : e ? e.configuration : [], T = $o(S, this), C = w ? Td(this.machine, g) : void 0, R = e ? e.historyValue ? e.historyValue : r.source ? this.machine.historyValue(e.value) : void 0 : void 0, _ = this.getActions(new Set(S), T, r, n, a, e, s), L = e ? V({}, e.activities) : {};
    try {
      for (var B = we(_), A = B.next(); !A.done; A = B.next()) {
        var ee = A.value;
        try {
          for (var z = (m = void 0, we(ee.actions)), H = z.next(); !H.done; H = z.next()) {
            var te = H.value;
            te.type === zo ? L[te.activity.id || te.activity.type] = te : te.type === ki && (L[te.activity.id || te.activity.type] = false);
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
        A && !A.done && (v = B.return) && v.call(B);
      } finally {
        if (p)
          throw p.error;
      }
    }
    var Q = Ee(ji(this, e, n, a, _, s, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), ue = Q[0], K = Q[1], ie = Ee(od(ue, Go), 2), q = ie[0], oe = ie[1], tt = ue.filter(function(je) {
      var rt;
      return je.type === zo && ((rt = je.activity) === null || rt === void 0 ? void 0 : rt.type) === Ro;
    }), Ze = tt.reduce(function(je, rt) {
      return je[rt.activity.id] = wd(rt.activity, f.machine, K, a), je;
    }, e ? V({}, e.children) : {}), ze = new wr({ value: C || e.value, context: K, _event: a, _sessionid: e ? e._sessionid : null, historyValue: C ? R ? sd(R, C) : void 0 : e ? e.historyValue : void 0, history: !C || r.source ? e : void 0, actions: C ? oe : [], activities: C ? L : e ? e.activities : {}, events: [], configuration: S, transitions: r.transitions, children: Ze, done: T, tags: Au(S), machine: this }), Ae = n !== K;
    ze.changed = a.name === Do || Ae;
    var We = ze.history;
    We && delete We.history;
    var Je = !T && (this._transient || g.some(function(je) {
      return je._transient;
    }));
    if (!w && (!Je || a.name === Yi))
      return ze;
    var Ye = ze;
    if (!T)
      for (Je && (Ye = this.resolveRaisedTransition(Ye, { type: Xp }, a, s)); q.length; ) {
        var J = q.shift();
        Ye = this.resolveRaisedTransition(Ye, J._event, a, s);
      }
    var or = Ye.changed || (We ? !!Ye.actions.length || Ae || typeof We.value != typeof Ye.value || !Pu(Ye.value, We.value) : void 0);
    return Ye.changed = or, Ye.history = We, Ye;
  }, t.prototype.getStateNode = function(r) {
    if (Vi(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[r];
    if (!e)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, t.prototype.getStateNodeById = function(r) {
    var e = Vi(r) ? r.slice(Du.length) : r;
    if (e === this.id)
      return this;
    var n = this.machine.idMap[e];
    if (!n)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, t.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && Vi(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (a) {
      }
    for (var e = xs(r, this.delimiter).slice(), n = this; e.length; ) {
      var s = e.shift();
      if (!s.length)
        break;
      n = n.getStateNode(s);
    }
    return n;
  }, t.prototype.resolve = function(r) {
    var e, n = this;
    if (!r)
      return this.initialStateValue || Wi;
    switch (this.type) {
      case "parallel":
        return _i(this.initialStateValue, function(a, p) {
          return a ? n.getStateNode(p).resolve(r[p] || a) : Wi;
        });
      case "compound":
        if (Te(r)) {
          var s = this.getStateNode(r);
          return s.type === "parallel" || s.type === "compound" ? (e = {}, e[r] = s.initialStateValue, e) : r;
        }
        return Object.keys(r).length ? _i(r, function(a, p) {
          return a ? n.getStateNode(p).resolve(a) : Wi;
        }) : this.initialStateValue || {};
      default:
        return r || Wi;
    }
  }, t.prototype.getResolvedPath = function(r) {
    if (Vi(r)) {
      var e = this.machine.idMap[r.slice(Du.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return e.path;
    }
    return xs(r, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = Eu(this.states, function(n) {
        return n.initialStateValue || Wi;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = Ho(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
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
      Te(e.target) ? r = Vi(e.target) ? ko(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : r = e.target;
    }
    return r;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(r, e, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(e) : r.initialStateNodes : [r];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (Ho(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Ge || nt(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = _o(this.initialStateValue);
    return Be(e.map(function(n) {
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
      return { current: r || this.initialStateValue, states: Eu(this.states, function(e, n) {
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
      return s ? Be(_o(s).map(function(p) {
        return n.getFromRelativePath(p);
      })) : n.initialStateNodes;
    }
    var a = td(n.path, "states")(r).current;
    return Te(a) ? [n.getStateNode(a)] : Be(_o(a).map(function(p) {
      return e.history === "deep" ? n.getFromRelativePath(p) : [n.states[p[0]]];
    }));
  }, Object.defineProperty(t.prototype, "stateIds", { get: function() {
    var r = this, e = Be(Object.keys(this.states).map(function(n) {
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
    var e = this, n = cd(r.target), s = "internal" in r ? r.internal : n ? n.some(function(m) {
      return Te(m) && m[0] === e.delimiter;
    }) : true, a = this.machine.options.guards, p = this.resolveTarget(n), v = V(V({}, r), { actions: Hr(ur(r.actions)), cond: Es(r.cond, a), target: p, source: this, internal: s, eventType: r.event, toJSON: function() {
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
      var a = this.config.on, p = qo, v = a[p], m = v === void 0 ? [] : v, d = Di(a, [typeof p == "symbol" ? p : p + ""]);
      s = Be(Object.keys(d).map(function(L) {
        !Ge && L === Yi && nt(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var B = ni(L, d[L]);
        return Ge || Rg(n, L, B), B;
      }).concat(ni(qo, m)));
    }
    var f = this.config.always ? ni("", this.config.always) : [], g = this.config.onDone ? ni(String(jo(this.id)), this.config.onDone) : [];
    Ge || nt(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = Be(this.invoke.map(function(L) {
      var B = [];
      return L.onDone && B.push.apply(B, ke([], Ee(ni(String($i(L.id)), L.onDone)), false)), L.onError && B.push.apply(B, ke([], Ee(ni(String(ii(L.id)), L.onError)), false)), B;
    })), S = this.after, T = Be(ke(ke(ke(ke([], Ee(g), false), Ee(w), false), Ee(s), false), Ee(f), false).map(function(L) {
      return ur(L).map(function(B) {
        return n.formatTransition(B);
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
var Dd = false;
function ht(t, r) {
  return !Ge && !("predictableActionArguments" in t) && !Dd && (Dd = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new Rd(t, r);
}
__name(ht, "ht");
u(ht, "createMachine");
var Lf = er(Rn(), 1);
var Xo = er(Yo(), 1);
var Us = u((t) => t != null && typeof t.draggable == "boolean", "isDraggable");
var Fs = u((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Uu = u((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
        $.need(p.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let v = (0, Xo.default)(this);
        v.styleCursor(false), v.pointerEvents({ ignoreFrom: ".resize-handle" }), v.on("down", this.grab.bind(this)), v.on("up", this.release.bind(this)), v.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let m = this.dropzone;
        Fs(m) ? this.snappedDropzone = m : this.snappedDropzone = null;
      }, grab: (a, p) => {
        $.need(p.type === "GRAB", "event type must be GRAB"), p.type === "GRAB" && (this.grabbed = true, fe("draggable:grab", {}, this), Uu(this.dropzone) && (this.snapped = false, this.moveByOffset(p.x, p.y), this.classList.remove("qpu-operation-xl")));
      }, release: (a, p) => {
        $.need(p.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, fe("draggable:release", {}, this);
      }, startDragging: (a, p) => {
        $.need(p.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (a, p) => {
        $.need(p.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, fe("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, fe("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && fe("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        this.snapped && (this.moveTo(0, 0), fe("draggable:drop", {}, this));
      }, delete: () => {
        (0, Xo.default)(this).unset(), fe("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => Fs(this.dropzone), isOnPaletteDropzone: () => Uu(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Fs(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = ut(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${(0, Lf.format)(a.value)}`);
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
      return $.notNull(a), !Uu(a) && !Fs(a) ? null : a;
    }
    set snapTargets(a) {
      (0, Xo.default)(this).draggable({ modifiers: [Xo.default.modifiers.snap({ targets: a, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
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
var si = u((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function Gf(t) {
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
__name(Gf, "Gf");
u(Gf, "FlaggableMixin");
var Qe = "top";
var mt = "bottom";
var ct = "right";
var it = "left";
var Ws = "auto";
var Dn = [Qe, mt, ct, it];
var sn = "start";
var li = "end";
var jf = "clippingParents";
var Vs = "viewport";
var Ji = "popper";
var Hf = "reference";
var Wu = Dn.reduce(function(t, r) {
  return t.concat([r + "-" + sn, r + "-" + li]);
}, []);
var Ys = [].concat(Dn, [Ws]).reduce(function(t, r) {
  return t.concat([r, r + "-" + sn, r + "-" + li]);
}, []);
var ry = "beforeRead";
var ny = "read";
var iy = "afterRead";
var oy = "beforeMain";
var ay = "main";
var sy = "afterMain";
var ly = "beforeWrite";
var uy = "write";
var cy = "afterWrite";
var $f = [ry, ny, iy, oy, ay, sy, ly, uy, cy];
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
function Xs(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = ot(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
__name(Xs, "Xs");
u(Xs, "isShadowRoot");
function py(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function(e) {
    var n = r.styles[e] || {}, s = r.attributes[e] || {}, a = r.elements[e];
    !vt(a) || !bt(a) || (Object.assign(a.style, n), Object.keys(s).forEach(function(p) {
      var v = s[p];
      v === false ? a.removeAttribute(p) : a.setAttribute(p, v === true ? "" : v);
    }));
  });
}
__name(py, "py");
u(py, "applyStyles");
function dy(t) {
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
__name(dy, "dy");
u(dy, "effect");
var Zo = { name: "applyStyles", enabled: true, phase: "write", fn: py, effect: dy, requires: ["computeStyles"] };
function yt(t) {
  return t.split("-")[0];
}
__name(yt, "yt");
u(yt, "getBasePlacement");
var Ar = Math.max;
var ui = Math.min;
var ln = Math.round;
function Sr(t, r) {
  r === void 0 && (r = false);
  var e = t.getBoundingClientRect(), n = 1, s = 1;
  if (vt(t) && r) {
    var a = t.offsetHeight, p = t.offsetWidth;
    p > 0 && (n = ln(e.width) / p || 1), a > 0 && (s = ln(e.height) / a || 1);
  }
  return { width: e.width / n, height: e.height / s, top: e.top / s, right: e.right / n, bottom: e.bottom / s, left: e.left / n, x: e.left / n, y: e.top / s };
}
__name(Sr, "Sr");
u(Sr, "getBoundingClientRect");
function ci(t) {
  var r = Sr(t), e = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(r.width - e) <= 1 && (e = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: n };
}
__name(ci, "ci");
u(ci, "getLayoutRect");
function Ko(t, r) {
  var e = r.getRootNode && r.getRootNode();
  if (t.contains(r))
    return true;
  if (e && Xs(e)) {
    var n = r;
    do {
      if (n && t.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name(Ko, "Ko");
u(Ko, "contains");
function Gt(t) {
  return ot(t).getComputedStyle(t);
}
__name(Gt, "Gt");
u(Gt, "getComputedStyle");
function Vu(t) {
  return ["table", "td", "th"].indexOf(bt(t)) >= 0;
}
__name(Vu, "Vu");
u(Vu, "isTableElement");
function Ct(t) {
  return (($r(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(Ct, "Ct");
u(Ct, "getDocumentElement");
function un(t) {
  return bt(t) === "html" ? t : t.assignedSlot || t.parentNode || (Xs(t) ? t.host : null) || Ct(t);
}
__name(un, "un");
u(un, "getParentNode");
function Bf(t) {
  return !vt(t) || Gt(t).position === "fixed" ? null : t.offsetParent;
}
__name(Bf, "Bf");
u(Bf, "getTrueOffsetParent");
function fy(t) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && vt(t)) {
    var n = Gt(t);
    if (n.position === "fixed")
      return null;
  }
  for (var s = un(t); vt(s) && ["html", "body"].indexOf(bt(s)) < 0; ) {
    var a = Gt(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || r && a.willChange === "filter" || r && a.filter && a.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
__name(fy, "fy");
u(fy, "getContainingBlock");
function Pr(t) {
  for (var r = ot(t), e = Bf(t); e && Vu(e) && Gt(e).position === "static"; )
    e = Bf(e);
  return e && (bt(e) === "html" || bt(e) === "body" && Gt(e).position === "static") ? r : e || fy(t) || r;
}
__name(Pr, "Pr");
u(Pr, "getOffsetParent");
function pi(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
__name(pi, "pi");
u(pi, "getMainAxisFromPlacement");
function di(t, r, e) {
  return Ar(t, ui(r, e));
}
__name(di, "di");
u(di, "within");
function qf(t, r, e) {
  var n = di(t, r, e);
  return n > e ? e : n;
}
__name(qf, "qf");
u(qf, "withinMaxClamp");
function Jo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(Jo, "Jo");
u(Jo, "getFreshSideObject");
function Qo(t) {
  return Object.assign({}, Jo(), t);
}
__name(Qo, "Qo");
u(Qo, "mergePaddingObject");
function ea(t, r) {
  return r.reduce(function(e, n) {
    return e[n] = t, e;
  }, {});
}
__name(ea, "ea");
u(ea, "expandToHashMap");
var hy = u(function(r, e) {
  return r = typeof r == "function" ? r(Object.assign({}, e.rects, { placement: e.placement })) : r, Qo(typeof r != "number" ? r : ea(r, Dn));
}, "toPaddingObject");
function my(t) {
  var r, e = t.state, n = t.name, s = t.options, a = e.elements.arrow, p = e.modifiersData.popperOffsets, v = yt(e.placement), m = pi(v), d = [it, ct].indexOf(v) >= 0, f = d ? "height" : "width";
  if (!(!a || !p)) {
    var g = hy(s.padding, e), w = ci(a), S = m === "y" ? Qe : it, T = m === "y" ? mt : ct, C = e.rects.reference[f] + e.rects.reference[m] - p[m] - e.rects.popper[f], R = p[m] - e.rects.reference[m], _ = Pr(a), L = _ ? m === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, B = C / 2 - R / 2, A = g[S], ee = L - w[f] - g[T], z = L / 2 - w[f] / 2 + B, H = di(A, z, ee), te = m;
    e.modifiersData[n] = (r = {}, r[te] = H, r.centerOffset = H - z, r);
  }
}
__name(my, "my");
u(my, "arrow");
function vy(t) {
  var r = t.state, e = t.options, n = e.element, s = n === void 0 ? "[data-popper-arrow]" : n;
  s != null && (typeof s == "string" && (s = r.elements.popper.querySelector(s), !s) || Ko(r.elements.popper, s) && (r.elements.arrow = s));
}
__name(vy, "vy");
u(vy, "effect");
var Ff = { name: "arrow", enabled: true, phase: "main", fn: my, effect: vy, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Tr(t) {
  return t.split("-")[1];
}
__name(Tr, "Tr");
u(Tr, "getVariation");
var gy = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function by(t) {
  var r = t.x, e = t.y, n = window, s = n.devicePixelRatio || 1;
  return { x: ln(r * s) / s || 0, y: ln(e * s) / s || 0 };
}
__name(by, "by");
u(by, "roundOffsetsByDPR");
function Uf(t) {
  var r, e = t.popper, n = t.popperRect, s = t.placement, a = t.variation, p = t.offsets, v = t.position, m = t.gpuAcceleration, d = t.adaptive, f = t.roundOffsets, g = t.isFixed, w = p.x, S = w === void 0 ? 0 : w, T = p.y, C = T === void 0 ? 0 : T, R = typeof f == "function" ? f({ x: S, y: C }) : { x: S, y: C };
  S = R.x, C = R.y;
  var _ = p.hasOwnProperty("x"), L = p.hasOwnProperty("y"), B = it, A = Qe, ee = window;
  if (d) {
    var z = Pr(e), H = "clientHeight", te = "clientWidth";
    if (z === ot(e) && (z = Ct(e), Gt(z).position !== "static" && v === "absolute" && (H = "scrollHeight", te = "scrollWidth")), z = z, s === Qe || (s === it || s === ct) && a === li) {
      A = mt;
      var Q = g && ee.visualViewport ? ee.visualViewport.height : z[H];
      C -= Q - n.height, C *= m ? 1 : -1;
    }
    if (s === it || (s === Qe || s === mt) && a === li) {
      B = ct;
      var ue = g && ee.visualViewport ? ee.visualViewport.width : z[te];
      S -= ue - n.width, S *= m ? 1 : -1;
    }
  }
  var K = Object.assign({ position: v }, d && gy), ie = f === true ? by({ x: S, y: C }) : { x: S, y: C };
  if (S = ie.x, C = ie.y, m) {
    var q;
    return Object.assign({}, K, (q = {}, q[A] = L ? "0" : "", q[B] = _ ? "0" : "", q.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + C + "px)" : "translate3d(" + S + "px, " + C + "px, 0)", q));
  }
  return Object.assign({}, K, (r = {}, r[A] = L ? C + "px" : "", r[B] = _ ? S + "px" : "", r.transform = "", r));
}
__name(Uf, "Uf");
u(Uf, "mapToStyles");
function yy(t) {
  var r = t.state, e = t.options, n = e.gpuAcceleration, s = n === void 0 ? true : n, a = e.adaptive, p = a === void 0 ? true : a, v = e.roundOffsets, m = v === void 0 ? true : v;
  if (false)
    var d;
  var f = { placement: yt(r.placement), variation: Tr(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: s, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Uf(Object.assign({}, f, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: p, roundOffsets: m })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Uf(Object.assign({}, f, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(yy, "yy");
u(yy, "computeStyles");
var Wf = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: yy, data: {} };
var Zs = { passive: true };
function wy(t) {
  var r = t.state, e = t.instance, n = t.options, s = n.scroll, a = s === void 0 ? true : s, p = n.resize, v = p === void 0 ? true : p, m = ot(r.elements.popper), d = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return a && d.forEach(function(f) {
    f.addEventListener("scroll", e.update, Zs);
  }), v && m.addEventListener("resize", e.update, Zs), function() {
    a && d.forEach(function(f) {
      f.removeEventListener("scroll", e.update, Zs);
    }), v && m.removeEventListener("resize", e.update, Zs);
  };
}
__name(wy, "wy");
u(wy, "effect");
var Vf = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: wy, data: {} };
var xy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qi(t) {
  return t.replace(/left|right|bottom|top/g, function(r) {
    return xy[r];
  });
}
__name(Qi, "Qi");
u(Qi, "getOppositePlacement");
var Ey = { start: "end", end: "start" };
function Ks(t) {
  return t.replace(/start|end/g, function(r) {
    return Ey[r];
  });
}
__name(Ks, "Ks");
u(Ks, "getOppositeVariationPlacement");
function fi(t) {
  var r = ot(t), e = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: e, scrollTop: n };
}
__name(fi, "fi");
u(fi, "getWindowScroll");
function hi(t) {
  return Sr(Ct(t)).left + fi(t).scrollLeft;
}
__name(hi, "hi");
u(hi, "getWindowScrollBarX");
function Yu(t) {
  var r = ot(t), e = Ct(t), n = r.visualViewport, s = e.clientWidth, a = e.clientHeight, p = 0, v = 0;
  return n && (s = n.width, a = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = n.offsetLeft, v = n.offsetTop)), { width: s, height: a, x: p + hi(t), y: v };
}
__name(Yu, "Yu");
u(Yu, "getViewportRect");
function Xu(t) {
  var r, e = Ct(t), n = fi(t), s = (r = t.ownerDocument) == null ? void 0 : r.body, a = Ar(e.scrollWidth, e.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), p = Ar(e.scrollHeight, e.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), v = -n.scrollLeft + hi(t), m = -n.scrollTop;
  return Gt(s || e).direction === "rtl" && (v += Ar(e.clientWidth, s ? s.clientWidth : 0) - a), { width: a, height: p, x: v, y: m };
}
__name(Xu, "Xu");
u(Xu, "getDocumentRect");
function mi(t) {
  var r = Gt(t), e = r.overflow, n = r.overflowX, s = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + s + n);
}
__name(mi, "mi");
u(mi, "isScrollParent");
function Js(t) {
  return ["html", "body", "#document"].indexOf(bt(t)) >= 0 ? t.ownerDocument.body : vt(t) && mi(t) ? t : Js(un(t));
}
__name(Js, "Js");
u(Js, "getScrollParent");
function kn(t, r) {
  var e;
  r === void 0 && (r = []);
  var n = Js(t), s = n === ((e = t.ownerDocument) == null ? void 0 : e.body), a = ot(n), p = s ? [a].concat(a.visualViewport || [], mi(n) ? n : []) : n, v = r.concat(p);
  return s ? v : v.concat(kn(un(p)));
}
__name(kn, "kn");
u(kn, "listScrollParents");
function eo(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(eo, "eo");
u(eo, "rectToClientRect");
function Sy(t) {
  var r = Sr(t);
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(Sy, "Sy");
u(Sy, "getInnerBoundingClientRect");
function Yf(t, r) {
  return r === Vs ? eo(Yu(t)) : $r(r) ? Sy(r) : eo(Xu(Ct(t)));
}
__name(Yf, "Yf");
u(Yf, "getClientRectFromMixedType");
function Ty(t) {
  var r = kn(un(t)), e = ["absolute", "fixed"].indexOf(Gt(t).position) >= 0, n = e && vt(t) ? Pr(t) : t;
  return $r(n) ? r.filter(function(s) {
    return $r(s) && Ko(s, n) && bt(s) !== "body";
  }) : [];
}
__name(Ty, "Ty");
u(Ty, "getClippingParents");
function Zu(t, r, e) {
  var n = r === "clippingParents" ? Ty(t) : [].concat(r), s = [].concat(n, [e]), a = s[0], p = s.reduce(function(v, m) {
    var d = Yf(t, m);
    return v.top = Ar(d.top, v.top), v.right = ui(d.right, v.right), v.bottom = ui(d.bottom, v.bottom), v.left = Ar(d.left, v.left), v;
  }, Yf(t, a));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
__name(Zu, "Zu");
u(Zu, "getClippingRect");
function ta(t) {
  var r = t.reference, e = t.element, n = t.placement, s = n ? yt(n) : null, a = n ? Tr(n) : null, p = r.x + r.width / 2 - e.width / 2, v = r.y + r.height / 2 - e.height / 2, m;
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
  var d = s ? pi(s) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (a) {
      case sn:
        m[d] = m[d] - (r[f] / 2 - e[f] / 2);
        break;
      case li:
        m[d] = m[d] + (r[f] / 2 - e[f] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(ta, "ta");
u(ta, "computeOffsets");
function zr(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, s = n === void 0 ? t.placement : n, a = e.boundary, p = a === void 0 ? jf : a, v = e.rootBoundary, m = v === void 0 ? Vs : v, d = e.elementContext, f = d === void 0 ? Ji : d, g = e.altBoundary, w = g === void 0 ? false : g, S = e.padding, T = S === void 0 ? 0 : S, C = Qo(typeof T != "number" ? T : ea(T, Dn)), R = f === Ji ? Hf : Ji, _ = t.rects.popper, L = t.elements[w ? R : f], B = Zu($r(L) ? L : L.contextElement || Ct(t.elements.popper), p, m), A = Sr(t.elements.reference), ee = ta({ reference: A, element: _, strategy: "absolute", placement: s }), z = eo(Object.assign({}, _, ee)), H = f === Ji ? z : A, te = { top: B.top - H.top + C.top, bottom: H.bottom - B.bottom + C.bottom, left: B.left - H.left + C.left, right: H.right - B.right + C.right }, Q = t.modifiersData.offset;
  if (f === Ji && Q) {
    var ue = Q[s];
    Object.keys(te).forEach(function(K) {
      var ie = [ct, mt].indexOf(K) >= 0 ? 1 : -1, q = [Qe, mt].indexOf(K) >= 0 ? "y" : "x";
      te[K] += ue[q] * ie;
    });
  }
  return te;
}
__name(zr, "zr");
u(zr, "detectOverflow");
function Ku(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, s = e.boundary, a = e.rootBoundary, p = e.padding, v = e.flipVariations, m = e.allowedAutoPlacements, d = m === void 0 ? Ys : m, f = Tr(n), g = f ? v ? Wu : Wu.filter(function(T) {
    return Tr(T) === f;
  }) : Dn, w = g.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  w.length === 0 && (w = g);
  var S = w.reduce(function(T, C) {
    return T[C] = zr(t, { placement: C, boundary: s, rootBoundary: a, padding: p })[yt(C)], T;
  }, {});
  return Object.keys(S).sort(function(T, C) {
    return S[T] - S[C];
  });
}
__name(Ku, "Ku");
u(Ku, "computeAutoPlacement");
function Cy(t) {
  if (yt(t) === Ws)
    return [];
  var r = Qi(t);
  return [Ks(t), r, Ks(r)];
}
__name(Cy, "Cy");
u(Cy, "getExpandedFallbackPlacements");
function Oy(t) {
  var r = t.state, e = t.options, n = t.name;
  if (!r.modifiersData[n]._skip) {
    for (var s = e.mainAxis, a = s === void 0 ? true : s, p = e.altAxis, v = p === void 0 ? true : p, m = e.fallbackPlacements, d = e.padding, f = e.boundary, g = e.rootBoundary, w = e.altBoundary, S = e.flipVariations, T = S === void 0 ? true : S, C = e.allowedAutoPlacements, R = r.options.placement, _ = yt(R), L = _ === R, B = m || (L || !T ? [Qi(R)] : Cy(R)), A = [R].concat(B).reduce(function(je, rt) {
      return je.concat(yt(rt) === Ws ? Ku(r, { placement: rt, boundary: f, rootBoundary: g, padding: d, flipVariations: T, allowedAutoPlacements: C }) : rt);
    }, []), ee = r.rects.reference, z = r.rects.popper, H = /* @__PURE__ */ new Map(), te = true, Q = A[0], ue = 0; ue < A.length; ue++) {
      var K = A[ue], ie = yt(K), q = Tr(K) === sn, oe = [Qe, mt].indexOf(ie) >= 0, tt = oe ? "width" : "height", Ze = zr(r, { placement: K, boundary: f, rootBoundary: g, altBoundary: w, padding: d }), ze = oe ? q ? ct : it : q ? mt : Qe;
      ee[tt] > z[tt] && (ze = Qi(ze));
      var Ae = Qi(ze), We = [];
      if (a && We.push(Ze[ie] <= 0), v && We.push(Ze[ze] <= 0, Ze[Ae] <= 0), We.every(function(je) {
        return je;
      })) {
        Q = K, te = false;
        break;
      }
      H.set(K, We);
    }
    if (te)
      for (var Je = T ? 3 : 1, Ye = u(function(rt) {
        var mr = A.find(function(Mr) {
          var vr = H.get(Mr);
          if (vr)
            return vr.slice(0, rt).every(function(ar) {
              return ar;
            });
        });
        if (mr)
          return Q = mr, "break";
      }, "_loop"), J = Je; J > 0; J--) {
        var or = Ye(J);
        if (or === "break")
          break;
      }
    r.placement !== Q && (r.modifiersData[n]._skip = true, r.placement = Q, r.reset = true);
  }
}
__name(Oy, "Oy");
u(Oy, "flip");
var Xf = { name: "flip", enabled: true, phase: "main", fn: Oy, requiresIfExists: ["offset"], data: { _skip: false } };
function Zf(t, r, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - r.height - e.y, right: t.right - r.width + e.x, bottom: t.bottom - r.height + e.y, left: t.left - r.width - e.x };
}
__name(Zf, "Zf");
u(Zf, "getSideOffsets");
function Kf(t) {
  return [Qe, ct, mt, it].some(function(r) {
    return t[r] >= 0;
  });
}
__name(Kf, "Kf");
u(Kf, "isAnySideFullyClipped");
function My(t) {
  var r = t.state, e = t.name, n = r.rects.reference, s = r.rects.popper, a = r.modifiersData.preventOverflow, p = zr(r, { elementContext: "reference" }), v = zr(r, { altBoundary: true }), m = Zf(p, n), d = Zf(v, s, a), f = Kf(m), g = Kf(d);
  r.modifiersData[e] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: f, hasPopperEscaped: g }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": g });
}
__name(My, "My");
u(My, "hide");
var Jf = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: My };
function Iy(t, r, e) {
  var n = yt(t), s = [it, Qe].indexOf(n) >= 0 ? -1 : 1, a = typeof e == "function" ? e(Object.assign({}, r, { placement: t })) : e, p = a[0], v = a[1];
  return p = p || 0, v = (v || 0) * s, [it, ct].indexOf(n) >= 0 ? { x: v, y: p } : { x: p, y: v };
}
__name(Iy, "Iy");
u(Iy, "distanceAndSkiddingToXY");
function Ay(t) {
  var r = t.state, e = t.options, n = t.name, s = e.offset, a = s === void 0 ? [0, 0] : s, p = Ys.reduce(function(f, g) {
    return f[g] = Iy(g, r.rects, a), f;
  }, {}), v = p[r.placement], m = v.x, d = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m, r.modifiersData.popperOffsets.y += d), r.modifiersData[n] = p;
}
__name(Ay, "Ay");
u(Ay, "offset");
var Qf = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Ay };
function Py(t) {
  var r = t.state, e = t.name;
  r.modifiersData[e] = ta({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(Py, "Py");
u(Py, "popperOffsets");
var eh = { name: "popperOffsets", enabled: true, phase: "read", fn: Py, data: {} };
function Ju(t) {
  return t === "x" ? "y" : "x";
}
__name(Ju, "Ju");
u(Ju, "getAltAxis");
function zy(t) {
  var r = t.state, e = t.options, n = t.name, s = e.mainAxis, a = s === void 0 ? true : s, p = e.altAxis, v = p === void 0 ? false : p, m = e.boundary, d = e.rootBoundary, f = e.altBoundary, g = e.padding, w = e.tether, S = w === void 0 ? true : w, T = e.tetherOffset, C = T === void 0 ? 0 : T, R = zr(r, { boundary: m, rootBoundary: d, padding: g, altBoundary: f }), _ = yt(r.placement), L = Tr(r.placement), B = !L, A = pi(_), ee = Ju(A), z = r.modifiersData.popperOffsets, H = r.rects.reference, te = r.rects.popper, Q = typeof C == "function" ? C(Object.assign({}, r.rects, { placement: r.placement })) : C, ue = typeof Q == "number" ? { mainAxis: Q, altAxis: Q } : Object.assign({ mainAxis: 0, altAxis: 0 }, Q), K = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, ie = { x: 0, y: 0 };
  if (z) {
    if (a) {
      var q, oe = A === "y" ? Qe : it, tt = A === "y" ? mt : ct, Ze = A === "y" ? "height" : "width", ze = z[A], Ae = ze + R[oe], We = ze - R[tt], Je = S ? -te[Ze] / 2 : 0, Ye = L === sn ? H[Ze] : te[Ze], J = L === sn ? -te[Ze] : -H[Ze], or = r.elements.arrow, je = S && or ? ci(or) : { width: 0, height: 0 }, rt = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : Jo(), mr = rt[oe], Mr = rt[tt], vr = di(0, H[Ze], je[Ze]), ar = B ? H[Ze] / 2 - Je - vr - mr - ue.mainAxis : Ye - vr - mr - ue.mainAxis, Nr = B ? -H[Ze] / 2 + Je + vr + Mr + ue.mainAxis : J + vr + Mr + ue.mainAxis, Vr = r.elements.arrow && Pr(r.elements.arrow), _n = Vr ? A === "y" ? Vr.clientTop || 0 : Vr.clientLeft || 0 : 0, Pe = (q = K == null ? void 0 : K[A]) != null ? q : 0, Ln = ze + ar - Pe - _n, Gn = ze + Nr - Pe, Nt = di(S ? ui(Ae, Ln) : Ae, ze, S ? Ar(We, Gn) : We);
      z[A] = Nt, ie[A] = Nt - ze;
    }
    if (v) {
      var Yr, wi = A === "x" ? Qe : it, fn = A === "x" ? mt : ct, Ir = z[ee], Mt = ee === "y" ? "height" : "width", _r = Ir + R[wi], Jt = Ir - R[fn], jn = [Qe, it].indexOf(_) !== -1, Xr = (Yr = K == null ? void 0 : K[ee]) != null ? Yr : 0, Hn = jn ? _r : Ir - H[Mt] - te[Mt] - Xr + ue.altAxis, hn = jn ? Ir + H[Mt] + te[Mt] - Xr - ue.altAxis : Jt, $n = S && jn ? qf(Hn, Ir, hn) : di(S ? Hn : _r, Ir, S ? hn : Jt);
      z[ee] = $n, ie[ee] = $n - Ir;
    }
    r.modifiersData[n] = ie;
  }
}
__name(zy, "zy");
u(zy, "preventOverflow");
var th = { name: "preventOverflow", enabled: true, phase: "main", fn: zy, requiresIfExists: ["offset"] };
function Qu(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(Qu, "Qu");
u(Qu, "getHTMLElementScroll");
function ec(t) {
  return t === ot(t) || !vt(t) ? fi(t) : Qu(t);
}
__name(ec, "ec");
u(ec, "getNodeScroll");
function Ry(t) {
  var r = t.getBoundingClientRect(), e = ln(r.width) / t.offsetWidth || 1, n = ln(r.height) / t.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
__name(Ry, "Ry");
u(Ry, "isElementScaled");
function tc(t, r, e) {
  e === void 0 && (e = false);
  var n = vt(r), s = vt(r) && Ry(r), a = Ct(r), p = Sr(t, s), v = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (n || !n && !e) && ((bt(r) !== "body" || mi(a)) && (v = ec(r)), vt(r) ? (m = Sr(r, true), m.x += r.clientLeft, m.y += r.clientTop) : a && (m.x = hi(a))), { x: p.left + v.scrollLeft - m.x, y: p.top + v.scrollTop - m.y, width: p.width, height: p.height };
}
__name(tc, "tc");
u(tc, "getCompositeRect");
function Dy(t) {
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
__name(Dy, "Dy");
u(Dy, "order");
function rc(t) {
  var r = Dy(t);
  return $f.reduce(function(e, n) {
    return e.concat(r.filter(function(s) {
      return s.phase === n;
    }));
  }, []);
}
__name(rc, "rc");
u(rc, "orderModifiers");
function nc(t) {
  var r;
  return function() {
    return r || (r = new Promise(function(e) {
      Promise.resolve().then(function() {
        r = void 0, e(t());
      });
    })), r;
  };
}
__name(nc, "nc");
u(nc, "debounce");
function ic(t) {
  var r = t.reduce(function(e, n) {
    var s = e[n.name];
    return e[n.name] = s ? Object.assign({}, s, n, { options: Object.assign({}, s.options, n.options), data: Object.assign({}, s.data, n.data) }) : n, e;
  }, {});
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}
__name(ic, "ic");
u(ic, "mergeByName");
var rh = { placement: "bottom", modifiers: [], strategy: "absolute" };
function nh() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(nh, "nh");
u(nh, "areValidElements");
function ih(t) {
  t === void 0 && (t = {});
  var r = t, e = r.defaultModifiers, n = e === void 0 ? [] : e, s = r.defaultOptions, a = s === void 0 ? rh : s;
  return u(function(v, m, d) {
    d === void 0 && (d = a);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, rh, a), modifiersData: {}, elements: { reference: v, popper: m }, attributes: {}, styles: {} }, g = [], w = false, S = { state: f, setOptions: u(function(_) {
      var L = typeof _ == "function" ? _(f.options) : _;
      C(), f.options = Object.assign({}, a, f.options, L), f.scrollParents = { reference: $r(v) ? kn(v) : v.contextElement ? kn(v.contextElement) : [], popper: kn(m) };
      var B = rc(ic([].concat(n, f.options.modifiers)));
      if (f.orderedModifiers = B.filter(function(K) {
        return K.enabled;
      }), false) {
        var A;
        if (getBasePlacement(f.options.placement) === auto)
          var ee;
        var z, H, te, Q, ue;
      }
      return T(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!w) {
        var _ = f.elements, L = _.reference, B = _.popper;
        if (nh(L, B)) {
          f.rects = { reference: tc(L, Pr(B), f.options.strategy === "fixed"), popper: ci(B) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(K) {
            return f.modifiersData[K.name] = Object.assign({}, K.data);
          });
          for (var A = 0, ee = 0; ee < f.orderedModifiers.length; ee++) {
            if (f.reset === true) {
              f.reset = false, ee = -1;
              continue;
            }
            var z = f.orderedModifiers[ee], H = z.fn, te = z.options, Q = te === void 0 ? {} : te, ue = z.name;
            typeof H == "function" && (f = H({ state: f, options: Q, name: ue, instance: S }) || f);
          }
        }
      }
    }, "forceUpdate"), update: nc(function() {
      return new Promise(function(R) {
        S.forceUpdate(), R(f);
      });
    }), destroy: u(function() {
      C(), w = true;
    }, "destroy") };
    if (!nh(v, m))
      return S;
    S.setOptions(d).then(function(R) {
      !w && d.onFirstUpdate && d.onFirstUpdate(R);
    });
    function T() {
      f.orderedModifiers.forEach(function(R) {
        var _ = R.name, L = R.options, B = L === void 0 ? {} : L, A = R.effect;
        if (typeof A == "function") {
          var ee = A({ state: f, name: _, instance: S, options: B }), z = u(function() {
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
__name(ih, "ih");
u(ih, "popperGenerator");
var ky = [Vf, eh, Wf, Zo, Qf, Xf, th, Ff, Jf];
var oc = ih({ defaultModifiers: ky });
var Ny = "tippy-box";
var hh = "tippy-content";
var _y = "tippy-backdrop";
var mh = "tippy-arrow";
var vh = "tippy-svg-arrow";
var vi = { passive: true, capture: true };
var gh = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function ac(t, r, e) {
  if (Array.isArray(t)) {
    var n = t[r];
    return n == null ? Array.isArray(e) ? e[r] : e : n;
  }
  return t;
}
__name(ac, "ac");
u(ac, "getValueAtIndexOrReturn");
function dc(t, r) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(r + "]") > -1;
}
__name(dc, "dc");
u(dc, "isType");
function bh(t, r) {
  return typeof t == "function" ? t.apply(void 0, r) : t;
}
__name(bh, "bh");
u(bh, "invokeWithArgsOrReturn");
function oh(t, r) {
  if (r === 0)
    return t;
  var e;
  return function(n) {
    clearTimeout(e), e = setTimeout(function() {
      t(n);
    }, r);
  };
}
__name(oh, "oh");
u(oh, "debounce");
function Ly(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(Ly, "Ly");
u(Ly, "splitBySpaces");
function to(t) {
  return [].concat(t);
}
__name(to, "to");
u(to, "normalizeToArray");
function ah(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
__name(ah, "ah");
u(ah, "pushIfUnique");
function Gy(t) {
  return t.filter(function(r, e) {
    return t.indexOf(r) === e;
  });
}
__name(Gy, "Gy");
u(Gy, "unique");
function jy(t) {
  return t.split("-")[0];
}
__name(jy, "jy");
u(jy, "getBasePlacement");
function el(t) {
  return [].slice.call(t);
}
__name(el, "el");
u(el, "arrayFrom");
function sh(t) {
  return Object.keys(t).reduce(function(r, e) {
    return t[e] !== void 0 && (r[e] = t[e]), r;
  }, {});
}
__name(sh, "sh");
u(sh, "removeUndefinedProps");
function ra() {
  return document.createElement("div");
}
__name(ra, "ra");
u(ra, "div");
function tl(t) {
  return ["Element", "Fragment"].some(function(r) {
    return dc(t, r);
  });
}
__name(tl, "tl");
u(tl, "isElement");
function Hy(t) {
  return dc(t, "NodeList");
}
__name(Hy, "Hy");
u(Hy, "isNodeList");
function $y(t) {
  return dc(t, "MouseEvent");
}
__name($y, "$y");
u($y, "isMouseEvent");
function By(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(By, "By");
u(By, "isReferenceElement");
function qy(t) {
  return tl(t) ? [t] : Hy(t) ? el(t) : Array.isArray(t) ? t : el(document.querySelectorAll(t));
}
__name(qy, "qy");
u(qy, "getArrayOfElements");
function sc(t, r) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = r + "ms");
  });
}
__name(sc, "sc");
u(sc, "setTransitionDuration");
function lh(t, r) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", r);
  });
}
__name(lh, "lh");
u(lh, "setVisibilityState");
function Fy(t) {
  var r, e = to(t), n = e[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(Fy, "Fy");
u(Fy, "getOwnerDocument");
function Uy(t, r) {
  var e = r.clientX, n = r.clientY;
  return t.every(function(s) {
    var a = s.popperRect, p = s.popperState, v = s.props, m = v.interactiveBorder, d = jy(p.placement), f = p.modifiersData.offset;
    if (!f)
      return true;
    var g = d === "bottom" ? f.top.y : 0, w = d === "top" ? f.bottom.y : 0, S = d === "right" ? f.left.x : 0, T = d === "left" ? f.right.x : 0, C = a.top - n + g > m, R = n - a.bottom - w > m, _ = a.left - e + S > m, L = e - a.right - T > m;
    return C || R || _ || L;
  });
}
__name(Uy, "Uy");
u(Uy, "isCursorOutsideInteractiveBorder");
function lc(t, r, e) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(s) {
    t[n](s, e);
  });
}
__name(lc, "lc");
u(lc, "updateTransitionEndListener");
function uh(t, r) {
  for (var e = r; e; ) {
    var n;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (n = e.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(uh, "uh");
u(uh, "actualContains");
var Br = { isTouch: false };
var ch = 0;
function Wy() {
  Br.isTouch || (Br.isTouch = true, window.performance && document.addEventListener("mousemove", yh));
}
__name(Wy, "Wy");
u(Wy, "onDocumentTouchStart");
function yh() {
  var t = performance.now();
  t - ch < 20 && (Br.isTouch = false, document.removeEventListener("mousemove", yh)), ch = t;
}
__name(yh, "yh");
u(yh, "onDocumentMouseMove");
function Vy() {
  var t = document.activeElement;
  if (By(t)) {
    var r = t._tippy;
    t.blur && !r.state.isVisible && t.blur();
  }
}
__name(Vy, "Vy");
u(Vy, "onWindowBlur");
function Yy() {
  document.addEventListener("touchstart", Wy, vi), window.addEventListener("blur", Vy);
}
__name(Yy, "Yy");
u(Yy, "bindGlobalEventListeners");
var Xy = typeof window != "undefined" && typeof document != "undefined";
var Zy = Xy ? !!window.msCrypto : false;
var Ky = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Jy = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Rr = Object.assign({ appendTo: gh, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Ky, Jy);
var Qy = Object.keys(Rr);
var e0 = u(function(r) {
  var e = Object.keys(r);
  e.forEach(function(n) {
    Rr[n] = r[n];
  });
}, "setDefaultProps");
function wh(t) {
  var r = t.plugins || [], e = r.reduce(function(n, s) {
    var a = s.name, p = s.defaultValue;
    if (a) {
      var v;
      n[a] = t[a] !== void 0 ? t[a] : (v = Rr[a]) != null ? v : p;
    }
    return n;
  }, {});
  return Object.assign({}, t, e);
}
__name(wh, "wh");
u(wh, "getExtendedPassedProps");
function t0(t, r) {
  var e = r ? Object.keys(wh(Object.assign({}, Rr, { plugins: r }))) : Qy, n = e.reduce(function(s, a) {
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
__name(t0, "t0");
u(t0, "getDataAttributeProps");
function ph(t, r) {
  var e = Object.assign({}, r, { content: bh(r.content, [t]) }, r.ignoreAttributes ? {} : t0(t, r.plugins));
  return e.aria = Object.assign({}, Rr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? r.interactive : e.aria.expanded, content: e.aria.content === "auto" ? r.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(ph, "ph");
u(ph, "evaluateProps");
var r0 = u(function() {
  return "innerHTML";
}, "innerHTML");
function cc(t, r) {
  t[r0()] = r;
}
__name(cc, "cc");
u(cc, "dangerouslySetInnerHTML");
function dh(t) {
  var r = ra();
  return t === true ? r.className = mh : (r.className = vh, tl(t) ? r.appendChild(t) : cc(r, t)), r;
}
__name(dh, "dh");
u(dh, "createArrowElement");
function fh(t, r) {
  tl(r.content) ? (cc(t, ""), t.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? cc(t, r.content) : t.textContent = r.content);
}
__name(fh, "fh");
u(fh, "setContent");
function pc(t) {
  var r = t.firstElementChild, e = el(r.children);
  return { box: r, content: e.find(function(n) {
    return n.classList.contains(hh);
  }), arrow: e.find(function(n) {
    return n.classList.contains(mh) || n.classList.contains(vh);
  }), backdrop: e.find(function(n) {
    return n.classList.contains(_y);
  }) };
}
__name(pc, "pc");
u(pc, "getChildren");
function xh(t) {
  var r = ra(), e = ra();
  e.className = Ny, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var n = ra();
  n.className = hh, n.setAttribute("data-state", "hidden"), fh(n, t.props), r.appendChild(e), e.appendChild(n), s(t.props, t.props);
  function s(a, p) {
    var v = pc(r), m = v.box, d = v.content, f = v.arrow;
    p.theme ? m.setAttribute("data-theme", p.theme) : m.removeAttribute("data-theme"), typeof p.animation == "string" ? m.setAttribute("data-animation", p.animation) : m.removeAttribute("data-animation"), p.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? m.setAttribute("role", p.role) : m.removeAttribute("role"), (a.content !== p.content || a.allowHTML !== p.allowHTML) && fh(d, t.props), p.arrow ? f ? a.arrow !== p.arrow && (m.removeChild(f), m.appendChild(dh(p.arrow))) : m.appendChild(dh(p.arrow)) : f && m.removeChild(f);
  }
  __name(s, "s");
  return u(s, "onUpdate"), { popper: r, onUpdate: s };
}
__name(xh, "xh");
u(xh, "render");
xh.$$tippy = true;
var n0 = 1;
var Qs = [];
var uc = [];
function i0(t, r) {
  var e = ph(t, Object.assign({}, Rr, wh(sh(r)))), n, s, a, p = false, v = false, m = false, d = false, f, g, w, S = [], T = oh(Ln, e.interactiveDebounce), C, R = n0++, _ = null, L = Gy(e.plugins), B = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: R, reference: t, popper: ra(), popperInstance: _, props: e, state: B, plugins: L, clearDelayTimeouts: Hn, setProps: hn, setContent: $n, show: oo, hide: ao, hideWithInteractivity: ga, enable: jn, disable: Xr, unmount: ba, destroy: gl };
  if (!e.render)
    return A;
  var ee = e.render(A), z = ee.popper, H = ee.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + A.id, A.popper = z, t._tippy = A, z._tippy = A;
  var te = L.map(function(G) {
    return G.fn(A);
  }), Q = t.hasAttribute("aria-expanded");
  return Vr(), Je(), ze(), Ae("onCreate", [A]), e.showOnCreate && _r(), z.addEventListener("mouseenter", function() {
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
    return G ? Fy(G) : document;
  }
  __name(oe, "oe");
  u(oe, "getDocument");
  function tt() {
    return pc(z);
  }
  __name(tt, "tt");
  u(tt, "getDefaultTemplateChildren");
  function Ze(G) {
    return A.state.isMounted && !A.state.isVisible || Br.isTouch || f && f.type === "focus" ? 0 : ac(A.props.delay, G ? 0 : 1, Rr.delay);
  }
  __name(Ze, "Ze");
  u(Ze, "getDelay");
  function ze(G) {
    G === void 0 && (G = false), z.style.pointerEvents = A.props.interactive && !G ? "" : "none", z.style.zIndex = "" + A.props.zIndex;
  }
  __name(ze, "ze");
  u(ze, "handleStyles");
  function Ae(G, re, le) {
    if (le === void 0 && (le = true), te.forEach(function(xe) {
      xe[G] && xe[G].apply(xe, re);
    }), le) {
      var Re;
      (Re = A.props)[G].apply(Re, re);
    }
  }
  __name(Ae, "Ae");
  u(Ae, "invokeHook");
  function We() {
    var G = A.props.aria;
    if (G.content) {
      var re = "aria-" + G.content, le = z.id, Re = to(A.props.triggerTarget || t);
      Re.forEach(function(xe) {
        var xt = xe.getAttribute(re);
        if (A.state.isVisible)
          xe.setAttribute(re, xt ? xt + " " + le : le);
        else {
          var _t = xt && xt.replace(le, "").trim();
          _t ? xe.setAttribute(re, _t) : xe.removeAttribute(re);
        }
      });
    }
  }
  __name(We, "We");
  u(We, "handleAriaContentAttribute");
  function Je() {
    if (!(Q || !A.props.aria.expanded)) {
      var G = to(A.props.triggerTarget || t);
      G.forEach(function(re) {
        A.props.interactive ? re.setAttribute("aria-expanded", A.state.isVisible && re === q() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Je, "Je");
  u(Je, "handleAriaExpandedAttribute");
  function Ye() {
    oe().removeEventListener("mousemove", T), Qs = Qs.filter(function(G) {
      return G !== T;
    });
  }
  __name(Ye, "Ye");
  u(Ye, "cleanupInteractiveMouseListeners");
  function J(G) {
    if (!(Br.isTouch && (m || G.type === "mousedown"))) {
      var re = G.composedPath && G.composedPath()[0] || G.target;
      if (!(A.props.interactive && uh(z, re))) {
        if (to(A.props.triggerTarget || t).some(function(le) {
          return uh(le, re);
        })) {
          if (Br.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Ae("onClickOutside", [A, G]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), v = true, setTimeout(function() {
          v = false;
        }), A.state.isMounted || mr());
      }
    }
  }
  __name(J, "J");
  u(J, "onDocumentPress");
  function or() {
    m = true;
  }
  __name(or, "or");
  u(or, "onTouchMove");
  function je() {
    m = false;
  }
  __name(je, "je");
  u(je, "onTouchStart");
  function rt() {
    var G = oe();
    G.addEventListener("mousedown", J, true), G.addEventListener("touchend", J, vi), G.addEventListener("touchstart", je, vi), G.addEventListener("touchmove", or, vi);
  }
  __name(rt, "rt");
  u(rt, "addDocumentPress");
  function mr() {
    var G = oe();
    G.removeEventListener("mousedown", J, true), G.removeEventListener("touchend", J, vi), G.removeEventListener("touchstart", je, vi), G.removeEventListener("touchmove", or, vi);
  }
  __name(mr, "mr");
  u(mr, "removeDocumentPress");
  function Mr(G, re) {
    ar(G, function() {
      !A.state.isVisible && z.parentNode && z.parentNode.contains(z) && re();
    });
  }
  __name(Mr, "Mr");
  u(Mr, "onTransitionedOut");
  function vr(G, re) {
    ar(G, re);
  }
  __name(vr, "vr");
  u(vr, "onTransitionedIn");
  function ar(G, re) {
    var le = tt().box;
    function Re(xe) {
      xe.target === le && (lc(le, "remove", Re), re());
    }
    __name(Re, "Re");
    if (u(Re, "listener"), G === 0)
      return re();
    lc(le, "remove", g), lc(le, "add", Re), g = Re;
  }
  __name(ar, "ar");
  u(ar, "onTransitionEnd");
  function Nr(G, re, le) {
    le === void 0 && (le = false);
    var Re = to(A.props.triggerTarget || t);
    Re.forEach(function(xe) {
      xe.addEventListener(G, re, le), S.push({ node: xe, eventType: G, handler: re, options: le });
    });
  }
  __name(Nr, "Nr");
  u(Nr, "on");
  function Vr() {
    K() && (Nr("touchstart", Pe, { passive: true }), Nr("touchend", Gn, { passive: true })), Ly(A.props.trigger).forEach(function(G) {
      if (G !== "manual")
        switch (Nr(G, Pe), G) {
          case "mouseenter":
            Nr("mouseleave", Gn);
            break;
          case "focus":
            Nr(Zy ? "focusout" : "blur", Nt);
            break;
          case "focusin":
            Nr("focusout", Nt);
            break;
        }
    });
  }
  __name(Vr, "Vr");
  u(Vr, "addListeners");
  function _n() {
    S.forEach(function(G) {
      var re = G.node, le = G.eventType, Re = G.handler, xe = G.options;
      re.removeEventListener(le, Re, xe);
    }), S = [];
  }
  __name(_n, "_n");
  u(_n, "removeListeners");
  function Pe(G) {
    var re, le = false;
    if (!(!A.state.isEnabled || Yr(G) || v)) {
      var Re = ((re = f) == null ? void 0 : re.type) === "focus";
      f = G, C = G.currentTarget, Je(), !A.state.isVisible && $y(G) && Qs.forEach(function(xe) {
        return xe(G);
      }), G.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || p) && A.props.hideOnClick !== false && A.state.isVisible ? le = true : _r(G), G.type === "click" && (p = !le), le && !Re && Jt(G);
    }
  }
  __name(Pe, "Pe");
  u(Pe, "onTrigger");
  function Ln(G) {
    var re = G.target, le = q().contains(re) || z.contains(re);
    if (!(G.type === "mousemove" && le)) {
      var Re = Mt().concat(z).map(function(xe) {
        var xt, _t = xe._tippy, It = (xt = _t.popperInstance) == null ? void 0 : xt.state;
        return It ? { popperRect: xe.getBoundingClientRect(), popperState: It, props: e } : null;
      }).filter(Boolean);
      Uy(Re, G) && (Ye(), Jt(G));
    }
  }
  __name(Ln, "Ln");
  u(Ln, "onMouseMove");
  function Gn(G) {
    var re = Yr(G) || A.props.trigger.indexOf("click") >= 0 && p;
    if (!re) {
      if (A.props.interactive) {
        A.hideWithInteractivity(G);
        return;
      }
      Jt(G);
    }
  }
  __name(Gn, "Gn");
  u(Gn, "onMouseLeave");
  function Nt(G) {
    A.props.trigger.indexOf("focusin") < 0 && G.target !== q() || A.props.interactive && G.relatedTarget && z.contains(G.relatedTarget) || Jt(G);
  }
  __name(Nt, "Nt");
  u(Nt, "onBlurOrFocusOut");
  function Yr(G) {
    return Br.isTouch ? K() !== G.type.indexOf("touch") >= 0 : false;
  }
  __name(Yr, "Yr");
  u(Yr, "isEventListenerStopped");
  function wi() {
    fn();
    var G = A.props, re = G.popperOptions, le = G.placement, Re = G.offset, xe = G.getReferenceClientRect, xt = G.moveTransition, _t = ie() ? pc(z).arrow : null, It = xe ? { getBoundingClientRect: xe, contextElement: xe.contextElement || q() } : t, ya = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(At) {
      var Pt = At.state;
      if (ie()) {
        var Zr = tt(), xi = Zr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ei) {
          Ei === "placement" ? xi.setAttribute("data-placement", Pt.placement) : Pt.attributes.popper["data-popper-" + Ei] ? xi.setAttribute("data-" + Ei, "") : xi.removeAttribute("data-" + Ei);
        }), Pt.attributes.popper = {};
      }
    }, "fn") }, gr = [{ name: "offset", options: { offset: Re } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !xt } }, ya];
    ie() && _t && gr.push({ name: "arrow", options: { element: _t, padding: 3 } }), gr.push.apply(gr, (re == null ? void 0 : re.modifiers) || []), A.popperInstance = oc(It, z, Object.assign({}, re, { placement: le, onFirstUpdate: w, modifiers: gr }));
  }
  __name(wi, "wi");
  u(wi, "createPopperInstance");
  function fn() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(fn, "fn");
  u(fn, "destroyPopperInstance");
  function Ir() {
    var G = A.props.appendTo, re, le = q();
    A.props.interactive && G === gh || G === "parent" ? re = le.parentNode : re = bh(G, [le]), re.contains(z) || re.appendChild(z), A.state.isMounted = true, wi();
  }
  __name(Ir, "Ir");
  u(Ir, "mount");
  function Mt() {
    return el(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(Mt, "Mt");
  u(Mt, "getNestedPopperTree");
  function _r(G) {
    A.clearDelayTimeouts(), G && Ae("onTrigger", [A, G]), rt();
    var re = Ze(true), le = ue(), Re = le[0], xe = le[1];
    Br.isTouch && Re === "hold" && xe && (re = xe), re ? n = setTimeout(function() {
      A.show();
    }, re) : A.show();
  }
  __name(_r, "_r");
  u(_r, "scheduleShow");
  function Jt(G) {
    if (A.clearDelayTimeouts(), Ae("onUntrigger", [A, G]), !A.state.isVisible) {
      mr();
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
  __name(Jt, "Jt");
  u(Jt, "scheduleHide");
  function jn() {
    A.state.isEnabled = true;
  }
  __name(jn, "jn");
  u(jn, "enable");
  function Xr() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(Xr, "Xr");
  u(Xr, "disable");
  function Hn() {
    clearTimeout(n), clearTimeout(s), cancelAnimationFrame(a);
  }
  __name(Hn, "Hn");
  u(Hn, "clearDelayTimeouts");
  function hn(G) {
    if (!A.state.isDestroyed) {
      Ae("onBeforeUpdate", [A, G]), _n();
      var re = A.props, le = ph(t, Object.assign({}, re, sh(G), { ignoreAttributes: true }));
      A.props = le, Vr(), re.interactiveDebounce !== le.interactiveDebounce && (Ye(), T = oh(Ln, le.interactiveDebounce)), re.triggerTarget && !le.triggerTarget ? to(re.triggerTarget).forEach(function(Re) {
        Re.removeAttribute("aria-expanded");
      }) : le.triggerTarget && t.removeAttribute("aria-expanded"), Je(), ze(), H && H(re, le), A.popperInstance && (wi(), Mt().forEach(function(Re) {
        requestAnimationFrame(Re._tippy.popperInstance.forceUpdate);
      })), Ae("onAfterUpdate", [A, G]);
    }
  }
  __name(hn, "hn");
  u(hn, "setProps");
  function $n(G) {
    A.setProps({ content: G });
  }
  __name($n, "$n");
  u($n, "setContent");
  function oo() {
    var G = A.state.isVisible, re = A.state.isDestroyed, le = !A.state.isEnabled, Re = Br.isTouch && !A.props.touch, xe = ac(A.props.duration, 0, Rr.duration);
    if (!(G || re || le || Re) && !q().hasAttribute("disabled") && (Ae("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, ie() && (z.style.visibility = "visible"), ze(), rt(), A.state.isMounted || (z.style.transition = "none"), ie()) {
        var xt = tt(), _t = xt.box, It = xt.content;
        sc([_t, It], 0);
      }
      w = u(function() {
        var gr;
        if (!(!A.state.isVisible || d)) {
          if (d = true, z.offsetHeight, z.style.transition = A.props.moveTransition, ie() && A.props.animation) {
            var so = tt(), At = so.box, Pt = so.content;
            sc([At, Pt], xe), lh([At, Pt], "visible");
          }
          We(), Je(), ah(uc, A), (gr = A.popperInstance) == null || gr.forceUpdate(), Ae("onMount", [A]), A.props.animation && ie() && vr(xe, function() {
            A.state.isShown = true, Ae("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), Ir();
    }
  }
  __name(oo, "oo");
  u(oo, "show");
  function ao() {
    var G = !A.state.isVisible, re = A.state.isDestroyed, le = !A.state.isEnabled, Re = ac(A.props.duration, 1, Rr.duration);
    if (!(G || re || le) && (Ae("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, d = false, p = false, ie() && (z.style.visibility = "hidden"), Ye(), mr(), ze(true), ie()) {
        var xe = tt(), xt = xe.box, _t = xe.content;
        A.props.animation && (sc([xt, _t], Re), lh([xt, _t], "hidden"));
      }
      We(), Je(), A.props.animation ? ie() && Mr(Re, A.unmount) : A.unmount();
    }
  }
  __name(ao, "ao");
  u(ao, "hide");
  function ga(G) {
    oe().addEventListener("mousemove", T), ah(Qs, T), T(G);
  }
  __name(ga, "ga");
  u(ga, "hideWithInteractivity");
  function ba() {
    A.state.isVisible && A.hide(), A.state.isMounted && (fn(), Mt().forEach(function(G) {
      G._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), uc = uc.filter(function(G) {
      return G !== A;
    }), A.state.isMounted = false, Ae("onHidden", [A]));
  }
  __name(ba, "ba");
  u(ba, "unmount");
  function gl() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), _n(), delete t._tippy, A.state.isDestroyed = true, Ae("onDestroy", [A]));
  }
  __name(gl, "gl");
  u(gl, "destroy");
}
__name(i0, "i0");
u(i0, "createTippy");
function na(t, r) {
  r === void 0 && (r = {});
  var e = Rr.plugins.concat(r.plugins || []);
  Yy();
  var n = Object.assign({}, r, { plugins: e }), s = qy(t);
  if (false)
    var a, p;
  var v = s.reduce(function(m, d) {
    var f = d && i0(d, n);
    return f && m.push(f), m;
  }, []);
  return tl(t) ? v[0] : v;
}
__name(na, "na");
u(na, "tippy");
na.defaultProps = Rr;
na.setDefaultProps = e0;
na.currentInput = Br;
var q1 = Object.assign({}, Zo, { effect: u(function(r) {
  var e = r.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
}, "effect") });
na.setDefaultProps({ render: xh });
var zt = na;
var Eh = er(Rn(), 1);
var fc = u((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
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
        a !== null && (this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(p) {
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
        this.debugHelpable && console.log(`helpable: ${(0, Eh.format)(a.value)}`);
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
var rl = /* @__PURE__ */ new Map();
function nl(t) {
  if (rl.has(t))
    return rl.get(t);
  let r = t.length, e = 0, n = 0, s = 0, a = [];
  for (let p = 0; p < r; p += 1) {
    let v = t[p], m = t[p + 1], d = t[p - 1];
    v === "{" && m === "{" && d !== "\\" ? (s += 1, s === 1 && (n = p), p += 1) : v === "}" && m === "}" && d !== "\\" && s && (s -= 1, s === 0 && (n > e && (a.push(Object.freeze({ type: "string", start: e, end: n, value: t.slice(e, n) })), e = n), a.push(Object.freeze({ type: "part", start: n, end: p + 2, value: t.slice(e + 2, p).trim() })), p += 1, e = p + 1));
  }
  return e < r && a.push(Object.freeze({ type: "string", start: e, end: r, value: t.slice(e, r) })), rl.set(t, Object.freeze(a)), rl.get(t);
}
__name(nl, "nl");
u(nl, "parse");
var gi = /* @__PURE__ */ new WeakMap();
var Sh = /* @__PURE__ */ new WeakMap();
var hc = class hc2 {
  static {
    __name(this, "hc");
  }
  constructor(r, e) {
    this.expression = e, gi.set(this, r), r.updateParent("");
  }
  get attributeName() {
    return gi.get(this).attr.name;
  }
  get attributeNamespace() {
    return gi.get(this).attr.namespaceURI;
  }
  get value() {
    return Sh.get(this);
  }
  set value(r) {
    Sh.set(this, r || ""), gi.get(this).updateParent(r);
  }
  get element() {
    return gi.get(this).element;
  }
  get booleanValue() {
    return gi.get(this).booleanValue;
  }
  set booleanValue(r) {
    gi.get(this).booleanValue = r;
  }
};
u(hc, "AttributeTemplatePart");
var cn = hc;
var mc = class mc2 {
  static {
    __name(this, "mc");
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
u(mc, "AttributeValueSetter");
var ia = mc;
var Nn = /* @__PURE__ */ new WeakMap();
var vc = class vc2 {
  static {
    __name(this, "vc");
  }
  constructor(r, e) {
    this.expression = e, Nn.set(this, [r]), r.textContent = "";
  }
  get value() {
    return Nn.get(this).map((r) => r.textContent).join("");
  }
  set value(r) {
    this.replace(r);
  }
  get previousSibling() {
    return Nn.get(this)[0].previousSibling;
  }
  get nextSibling() {
    return Nn.get(this)[Nn.get(this).length - 1].nextSibling;
  }
  replace(...r) {
    let e = r.map((n) => typeof n == "string" ? new Text(n) : n);
    e.length || e.push(new Text("")), Nn.get(this)[0].before(...e);
    for (let n of Nn.get(this))
      n.remove();
    Nn.set(this, e);
  }
};
u(vc, "NodeTemplatePart");
var jt = vc;
function oa(t) {
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
__name(oa, "oa");
u(oa, "createProcessor");
function aa(t, r) {
  t.value = String(r);
}
__name(aa, "aa");
u(aa, "processPropertyIdentity");
function il(t, r) {
  return typeof r == "boolean" && t instanceof cn && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = r, true) : false;
}
__name(il, "il");
u(il, "processBooleanAttribute");
var gc = oa(aa);
var o0 = oa((t, r) => {
  il(t, r) || aa(t, r);
});
function* a0(t) {
  let r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = r.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let n = 0; n < e.attributes.length; n += 1) {
        let s = e.attributes.item(n);
        if (s && s.value.includes("{{")) {
          let a = new ia(e, s);
          for (let p of nl(s.value))
            if (p.type === "string")
              a.append(p.value);
            else {
              let v = new cn(a, p.value);
              a.append(v), yield v;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{")) {
      let n = nl(e.textContent);
      for (let s = 0; s < n.length; s += 1) {
        let a = n[s];
        a.end < e.textContent.length && e.splitText(a.end), a.type === "part" && (yield new jt(e, a.value));
        break;
      }
    }
}
__name(a0, "a0");
u(a0, "collectParts");
var ol = /* @__PURE__ */ new WeakMap();
var al = /* @__PURE__ */ new WeakMap();
var sa = class sa2 extends DocumentFragment {
  static {
    __name(this, "sa");
  }
  constructor(r, e, n = gc) {
    var s, a;
    super(), Object.getPrototypeOf(this) !== sa2.prototype && Object.setPrototypeOf(this, sa2.prototype), this.appendChild(r.content.cloneNode(true)), al.set(this, Array.from(a0(this))), ol.set(this, n), (a = (s = ol.get(this)).createCallback) === null || a === void 0 || a.call(s, this, al.get(this), e), ol.get(this).processCallback(this, al.get(this), e);
  }
  update(r) {
    ol.get(this).processCallback(this, al.get(this), r);
  }
};
u(sa, "TemplateInstance");
var la = sa;
var bc = /* @__PURE__ */ new WeakMap();
var Th = /* @__PURE__ */ new WeakMap();
var Ch = /* @__PURE__ */ new WeakMap();
var ua = class ua2 {
  static {
    __name(this, "ua");
  }
  constructor(r, e, n) {
    this.strings = r, this.values = e, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    ua2.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, e;
    if (bc.has(this.strings))
      return bc.get(this.strings);
    {
      let n = document.createElement("template"), s = this.strings.length - 1, a = this.strings.reduce((v, m, d) => v + m + (d < s ? `{{ ${d} }}` : ""), ""), p = (e = (r = ua2.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(a)) !== null && e !== void 0 ? e : a;
      return n.innerHTML = p, bc.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let e = this.template;
    if (Th.get(r) !== e) {
      Th.set(r, e);
      let n = new la(e, this.values, this.processor);
      Ch.set(r, n), r instanceof jt ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    Ch.get(r).update(this.values);
  }
};
u(ua, "TemplateResult");
var Cr = ua;
Cr.cspTrustedTypesPolicy = null;
function Y(t, r) {
  t.renderInto(r);
}
__name(Y, "Y");
u(Y, "render");
var Oh = /* @__PURE__ */ new WeakSet();
function Mh(t) {
  return Oh.has(t);
}
__name(Mh, "Mh");
u(Mh, "isDirective");
function Ih(t, r) {
  return Mh(r) ? (r(t), true) : false;
}
__name(Ih, "Ih");
u(Ih, "processDirective");
function ca(t) {
  return (...r) => {
    let e = t(...r);
    return Oh.add(e), e;
  };
}
__name(ca, "ca");
u(ca, "directive");
var pa = /* @__PURE__ */ new WeakMap();
var sl = class sl2 {
  static {
    __name(this, "sl");
  }
  constructor(r, e) {
    this.element = r, this.type = e, this.element.addEventListener(this.type, this), pa.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), pa.get(this.element).delete(this.type));
  }
  static for(r) {
    pa.has(r.element) || pa.set(r.element, /* @__PURE__ */ new Map());
    let e = r.attributeName.slice(2), n = pa.get(r.element);
    return n.has(e) ? n.get(e) : new sl2(r.element, e);
  }
};
u(sl, "EventHandler");
var yc = sl;
function Ah(t, r) {
  return t instanceof cn && t.attributeName.startsWith("on") ? (yc.for(t).set(r), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(Ah, "Ah");
u(Ah, "processEvent");
function s0(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(s0, "s0");
u(s0, "isIterable");
function Ph(t, r) {
  if (!s0(r))
    return false;
  if (t instanceof jt) {
    let e = [];
    for (let n of r)
      if (n instanceof Cr) {
        let s = document.createDocumentFragment();
        n.renderInto(s), e.push(...s.childNodes);
      } else
        n instanceof DocumentFragment ? e.push(...n.childNodes) : e.push(String(n));
    return e.length && t.replace(...e), true;
  } else
    return t.value = Array.from(r).join(" "), true;
}
__name(Ph, "Ph");
u(Ph, "processIterable");
function zh(t, r) {
  return r instanceof DocumentFragment && t instanceof jt ? (r.childNodes.length && t.replace(...r.childNodes), true) : false;
}
__name(zh, "zh");
u(zh, "processDocumentFragment");
function Rh(t, r) {
  return r instanceof Cr && t instanceof jt ? (r.renderInto(t), true) : false;
}
__name(Rh, "Rh");
u(Rh, "processSubTemplate");
function ll(t, r) {
  Ih(t, r) || il(t, r) || Ah(t, r) || Rh(t, r) || zh(t, r) || Ph(t, r) || aa(t, r);
}
__name(ll, "ll");
u(ll, "processPart");
var wc = oa(ll);
function U(t, ...r) {
  return new Cr(t, r, wc);
}
__name(U, "U");
u(U, "html");
var xc = /* @__PURE__ */ new WeakMap();
var l0 = ca((...t) => (r) => {
  xc.has(r) || xc.set(r, { i: t.length });
  let e = xc.get(r);
  for (let n = 0; n < t.length; n += 1)
    t[n] instanceof Promise ? Promise.resolve(t[n]).then((s) => {
      n < e.i && (e.i = n, ll(r, s));
    }) : n <= e.i && (e.i = n, ll(r, t[n]));
});
var u0 = ca((t) => (r) => {
  var e, n;
  if (!(r instanceof jt))
    return;
  let s = document.createElement("template"), a = (n = (e = Cr.cspTrustedTypesPolicy) === null || e === void 0 ? void 0 : e.createHTML(t)) !== null && n !== void 0 ? n : t;
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
var pn = u((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
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
var ul = u((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
function ge(t) {
  let e = class e extends t {
    static {
      __name(this, "e");
    }
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      if (pn(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-if]");
        $.notNull(v), v.disabled = false, this.ifTooltip = v._tippy, this.ifTooltip === void 0 && (this.ifTooltip = zt(v, { animation: false, content: "Set `if' Conditional" }), v.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (ei(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-angle]");
        $.notNull(v), v.disabled = false, this.angleTooltip = v._tippy, this.angleTooltip === void 0 && (this.angleTooltip = zt(v, { animation: false, content: "Change Angle" }), v.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (si(a.reference)) {
        let v = a.popper.querySelector("button[data-operation-menu-flag]");
        $.notNull(v), v.disabled = false, this.flagTooltip = v._tippy, this.flagTooltip === void 0 && (this.flagTooltip = zt(v, { animation: false, content: "Set Condifitonal Flag" }), v.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let p = a.popper.querySelector("[data-operation-menu-delete]");
      $.notNull(p), this.deleteTooltip = p._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = zt(p, { animation: false, content: "Delete" })), p.addEventListener("mousedown", this.destroyMenu.bind(this)), p.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
var Dh = er(Rn(), 1);
var cl = er(Yo(), 1);
var cr = u((t) => t != null && typeof t.resizeable == "boolean", "isResizeable");
function pl(t) {
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
        $.need(p.type === "SET_INTERACT", "event type must be SET_INTERACT"), $.notNull(this.resizeHandle);
        let v = (0, cl.default)(this.resizeHandle);
        v.styleCursor(false), v.on("down", this.grabResizeHandle.bind(this)), v.on("up", this.releaseResizeHandle.bind(this)), v.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (a, p) => {
        $.need(p.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, fe("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (a, p) => {
        $.need(p.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, fe("resizeable:release-resize-handle", {}, this);
      }, startResizing: (a, p) => {
        $.need(p.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (a, p) => {
        $.need(p.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), fe("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), fe("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = ut(this.resizeableMachine).onTransition((a) => {
        this.debugResizeable && console.log(`resizeable: ${(0, Dh.format)(a.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(a) {
      a ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(a) {
      (0, cl.default)(this.resizeHandle).draggable({ modifiers: [cl.default.modifiers.snap({ targets: a, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
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
__name(pl, "pl");
u(pl, "ResizeableMixin");
var kh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var pr = class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "pr");
  }
  get operationType() {
    return Ql;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(kh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ql}"`;
  }
};
u(pr, "AntiControlGateElement"), pr = M([X], pr);
function Nh(t) {
  return /^-?\d+$/.test(t);
}
__name(Nh, "Nh");
u(Nh, "isNumeric");
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
    return eu;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if ($.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this.popup;
    e && e.destroy();
    let n = this.blochInspectorPopupContent();
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(s) {
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
    return `"${eu}"`;
  }
  updateBlochVector() {
    var n;
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`), (n = this.popup) == null || n.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return $.notNull(e), parseFloat(e);
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
    return $.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return $.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    return 180 * Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x))) / Math.PI;
  }
};
u(et, "BlochDisplayElement"), M([Oe], et.prototype, "body", 2), M([Oe], et.prototype, "vectorLine", 2), M([Oe], et.prototype, "vectorEnd", 2), M([Oe], et.prototype, "vector", 2), M([ft], et.prototype, "vectorEndCircles", 2), M([k], et.prototype, "x", 2), M([k], et.prototype, "y", 2), M([k], et.prototype, "z", 2), et = M([X], et);
var _h = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Rt = class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "Rt");
  }
  get operationType() {
    return tu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(_h)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${tu}"`;
  }
};
u(Rt, "ControlGateElement"), Rt = M([X], Rt);
var Lh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ht = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Ht");
  }
  get operationType() {
    return Qa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Lh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Qa}<${this.if}"` : `"${Qa}"`;
  }
};
u(Ht, "HGateElement"), Ht = M([X], Ht);
var Gh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var $t = class extends ge(ve(Gf(me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "$t");
  }
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return es;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml(Gh)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${es}"` : `"${es}>${this.flag}"`;
  }
};
u($t, "MeasurementGateElement"), M([k], $t.prototype, "value", 2), $t = M([X], $t);
var jh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Bt = class extends ge(ve(Ue(Le(En(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Bt");
  }
  get operationType() {
    return ts;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(jh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ts}"` : `"${ts}(${this.angle.replace("/", "_")})"`;
  }
};
u(Bt, "PhaseGateElement"), Bt = M([X], Bt);
var dl = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var Hh = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var dr = class extends ge(ve(pl(me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "dr");
  }
  get operationType() {
    return ru;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml(Hh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(dl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${ru}${this.span}"`;
  }
};
u(dr, "QftDaggerGateElement"), dr = M([X], dr);
var $h = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var fr = class extends ge(ve(pl(me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "fr");
  }
  get operationType() {
    return nu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml($h)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(dl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${nu}${this.span}"`;
  }
};
u(fr, "QftGateElement"), fr = M([X], fr);
var Bh = `<svg
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
var qt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "qt");
  }
  get operationType() {
    return rs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Bh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${rs}<${this.if}"` : `"${rs}"`;
  }
};
u(qt, "RnotGateElement"), qt = M([X], qt);
var qh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ft = class extends ge(ve(Ue(Le(En(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Ft");
  }
  get operationType() {
    return ns;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(qh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ns}"` : `"${ns}(${this.angle.replace("/", "_")})"`;
  }
};
u(Ft, "RxGateElement"), Ft = M([X], Ft);
var Fh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ut = class extends ge(ve(Ue(Le(En(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Ut");
  }
  get operationType() {
    return is;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Fh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${is}"` : `"${is}(${this.angle.replace("/", "_")})"`;
  }
};
u(Ut, "RyGateElement"), Ut = M([X], Ut);
var Uh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Wt = class extends ge(ve(Ue(Le(En(me(Me(be(he(pe(HTMLElement)))))))))) {
  static {
    __name(this, "Wt");
  }
  get operationType() {
    return os;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Uh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${os}"` : `"${os}(${this.angle.replace("/", "_")})"`;
  }
};
u(Wt, "RzGateElement"), Wt = M([X], Wt);
var Wh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "rr");
  }
  get operationType() {
    return as;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Wh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${as}<${this.if}"` : `"${as}"`;
  }
};
u(rr, "SDaggerGateElement"), rr = M([X], rr);
var Vh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "nr");
  }
  get operationType() {
    return ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Vh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ss}<${this.if}"` : `"${ss}"`;
  }
};
u(nr, "SGateElement"), nr = M([X], nr);
var Yh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var hr = class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  static {
    __name(this, "hr");
  }
  get operationType() {
    return iu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Yh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${iu}"`;
  }
};
u(hr, "SpacerGateElement"), hr = M([X], hr);
var Xh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = class extends ge(ve(Le(me(Me(be(he(pe(HTMLElement)))))))) {
  static {
    __name(this, "Vt");
  }
  get operationType() {
    return ou;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Xh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${ou}"`;
  }
};
u(Vt, "SwapGateElement"), Vt = M([X], Vt);
var Zh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var ir = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "ir");
  }
  get operationType() {
    return ls;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Zh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ls}<${this.if}"` : `"${ls}"`;
  }
};
u(ir, "TDaggerGateElement"), ir = M([X], ir);
var Kh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Yt");
  }
  get operationType() {
    return us;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Kh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${us}<${this.if}"` : `"${us}"`;
  }
};
u(Yt, "TGateElement"), Yt = M([X], Yt);
var Jh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Dt = class extends ge(ve(me(be(he(pe(HTMLElement)))))) {
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
        return Bp;
      case "1":
        return qp;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml(Jh)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
};
u(Dt, "WriteGateElement"), M([k], Dt.prototype, "value", 2), Dt = M([X], Dt);
var Qh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var Xt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Xt");
  }
  get operationType() {
    return cs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Qh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${cs}<${this.if}"` : `"${cs}"`;
  }
};
u(Xt, "XGateElement"), Xt = M([X], Xt);
var em = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Zt");
  }
  get operationType() {
    return ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(em)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ps}<${this.if}"` : `"${ps}"`;
  }
};
u(Zt, "YGateElement"), Zt = M([X], Zt);
var tm = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  static {
    __name(this, "Kt");
  }
  get operationType() {
    return ds;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(tm)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ds}<${this.if}"` : `"${ds}"`;
  }
};
u(Kt, "ZGateElement"), Kt = M([X], Kt);
var Xe = u((t) => t instanceof pr || t instanceof et || t instanceof Rt || t instanceof Ht || t instanceof $t || t instanceof Bt || t instanceof dr || t instanceof fr || t instanceof qt || t instanceof Ft || t instanceof Ut || t instanceof Wt || t instanceof rr || t instanceof nr || t instanceof hr || t instanceof Vt || t instanceof ir || t instanceof Yt || t instanceof Dt || t instanceof Xt || t instanceof Zt || t instanceof Kt, "isOperation");
var rm = u((t) => t != null && t instanceof Ht, "isHGateElement");
var nm = u((t) => t != null && t instanceof Xt, "isXGateElement");
var im = u((t) => t != null && t instanceof Zt, "isYGateElement");
var om = u((t) => t != null && t instanceof Kt, "isZGateElement");
var da = u((t) => t != null && t instanceof Bt, "isPhaseGateElement");
var am = u((t) => t != null && t instanceof Yt, "isTGateElement");
var tD = u((t) => t != null && t instanceof ir, "isTDaggerGateElement");
var sm = u((t) => t != null && t instanceof qt, "isRnotGateElement");
var fl = u((t) => t != null && t instanceof Ft, "isRxGateElement");
var hl = u((t) => t != null && t instanceof Ut, "isRyGateElement");
var ml = u((t) => t != null && t instanceof Wt, "isRzGateElement");
var rD = u((t) => t != null && t instanceof nr, "isSGateElement");
var nD = u((t) => t != null && t instanceof rr, "isSDaggerGateElement");
var iD = u((t) => t != null && t instanceof hr, "isSpacerGateElement");
var lm = u((t) => t != null && t instanceof Vt, "isSwapGateElement");
var Ec = u((t) => t != null && t instanceof Rt, "isControlGateElement");
var Sc = u((t) => t != null && t instanceof pr, "isAntiControlGateElement");
var um = u((t) => t != null && t instanceof et, "isBlochDisplayElement");
var oD = u((t) => t != null && t instanceof Dt, "isWriteGateElement");
var cm = u((t) => t != null && t instanceof $t, "isMeasurementGateElement");
var pm = er(Rn(), 1);
var fa = er(Yo(), 1);
var Tc = u((t) => t !== null && t instanceof Or, "isAngleSliderElement");
var Or = class extends HTMLElement {
  static {
    __name(this, "Or");
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
        throw new Error(`Bad denominator: ${this.denominator}`);
    }, setDenominatorByAngle: (e, n) => {
      n.type === "SET_ANGLE" && (this.denominator = Mo(this.angle));
    }, setAngleInRadian: (e, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, s] = this.findSnapAngle(this.radian);
      this.angle = s;
    }, setRadianInAngle: (e, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [s] = this.findSnapAngle(kp(this.angle));
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
      this.debug && console.log(`circuit-step: ${(0, pm.format)(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, n, s) {
    n !== s && s !== null && (e === "data-angle" && s !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, fa.default)(this).unset();
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
    (0, fa.default)(this).draggable({ origin: "self", modifiers: [fa.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let n = fa.default.getElementRect(e.target).width, s = e.pageX / n;
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
    return $.notNull(s), $.notNull(a), [s, a];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
};
u(Or, "AngleSliderElement"), M([k], Or.prototype, "angle", 2), M([k], Or.prototype, "radian", 2), M([k], Or.prototype, "denominator", 2), M([k], Or.prototype, "disabled", 2), M([k], Or.prototype, "debug", 2), Or = M([X], Or);
var bi = class extends HTMLElement {
  static {
    __name(this, "bi");
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let n = e.currentTarget;
    $.notNull(n);
    for (let s of this.buttons)
      s.removeAttribute("data-active");
    n.setAttribute("data-active", "");
  }
};
u(bi, "ButtonGroupElement"), M([ft], bi.prototype, "buttons", 2), bi = M([X], bi);
var ro = er(fm(), 1);
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
    n !== s && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && ($.notNull(s), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new Error(`unsupported qubit count: ${this.qubitCount}`);
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
          throw new Error(`unsupported qubit count: ${this.qubitCount}`);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let n = e.getAttribute("data-ket");
      return $.notNull(n), parseInt(n);
    }), $.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    ro.default.mutate(() => {
      for (let n of this.qubitCircles) {
        let s = n.getAttribute("data-ket");
        $.notNull(s);
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
        throw new Error(`unsupported qubit count: ${this.qubitCount}`);
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
        throw new Error(`unsupported qubit count: ${this.qubitCount}`);
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
        throw new Error(`unsupported qubit count: ${this.qubitCount}`);
    }
  }
  drawQubitCircles() {
    $.notNull(this.window), $.notNull(this.innerContainer), this.qubitCount !== 0 && ro.default.mutate(() => {
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
    this.window !== void 0 && this.innerContainer !== void 0 && (ro.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, n = this.overscanColEndIndex, s = this.overscanRowStartIndex, a = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === n && this.lastRowStartIndex === s && this.lastRowEndIndex === a)) {
        for (let p = s; p <= a; p++)
          for (let v = e; v <= n; v++)
            (v < this.lastColStartIndex || this.lastColEndIndex < v || p < this.lastRowStartIndex || this.lastRowEndIndex < p) && this.qubitCirclePositions.push({ col: v, row: p });
        this.lastColStartIndex = e, this.lastColEndIndex = n, this.lastRowStartIndex = s, this.lastRowEndIndex = a;
      }
    }), ro.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let n of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(n);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    ro.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let n = e.getAttribute("data-col"), s = e.getAttribute("data-row");
        $.notNull(n), $.notNull(s);
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
        throw new Error(`unsupported qubit count: ${this.qubitCount}`);
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
    $.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let s = zt(n, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let a = n.getAttribute("data-ket");
    $.notNull(a);
    let p = n.getAttribute("data-amplitude-real");
    $.notNull(p);
    let v = n.getAttribute("data-amplitude-imag");
    $.notNull(v);
    let m = parseInt(a), d = parseFloat(p), f = parseFloat(v), g = new Io(d, f), w = g.abs(), S = g.phase() / Math.PI * 180, T = document.importNode(this.qubitCirclePopupTemplate.content, true), C = T.getElementById("qubit-circle-popup--ket-binary-value"), R = T.getElementById("qubit-circle-popup--ket-decimal-value"), _ = T.getElementById("qubit-circle-popup--amplitude"), L = T.getElementById("qubit-circle-popup--amplitude-real-value"), B = T.getElementById("qubit-circle-popup--amplitude-imag-value"), A = T.getElementById("qubit-circle-popup--probability"), ee = T.getElementById("qubit-circle-popup--probability-value"), z = T.getElementById("qubit-circle-popup--phase"), H = T.getElementById("qubit-circle-popup--phase-value");
    $.notNull(_), $.notNull(L), $.notNull(B), $.notNull(A), $.notNull(ee), $.notNull(z), $.notNull(H), C && (C.textContent = m.toString(2).padStart(this.qubitCount, "0")), R && (R.textContent = m.toString()), this.showQubitCirclePopupAmplitude ? (L.textContent = Ot(g.real, 5), B.textContent = `${Ot(g.imag, 5)}i`) : _.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Ot(w * w * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? H.textContent = `${Ot(S, 2)}\xB0` : z.style.display = "none";
    let te = document.createElement("div");
    te.appendChild(T), s.setContent(te.innerHTML), s.show();
  }
  hideQubitCirclePopup(e) {
    let n = e.target;
    $.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let s = n._tippy;
    $.notNull(s), s.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
};
u(at, "CircleNotationElement"), M([k], at.prototype, "qubitCount", 2), M([k], at.prototype, "qubitCircleSize", 2), M([k], at.prototype, "colCount", 2), M([k], at.prototype, "rowCount", 2), M([k], at.prototype, "paddingX", 2), M([k], at.prototype, "paddingY", 2), M([k], at.prototype, "overscanCount", 2), M([k], at.prototype, "colorPhase", 2), M([k], at.prototype, "qubitCirclePopupTemplateId", 2), M([k], at.prototype, "showQubitCirclePopupAmplitude", 2), M([k], at.prototype, "showQubitCirclePopupProbability", 2), M([k], at.prototype, "showQubitCirclePopupPhase", 2), M([Oe], at.prototype, "window", 2), M([Oe], at.prototype, "innerContainer", 2), M([ft], at.prototype, "qubitCircles", 2), at = M([X], at);
var yi = class extends HTMLElement {
  static {
    __name(this, "yi");
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
u(yi, "CircleNotationPanelElement"), M([Oe], yi.prototype, "circleNotation", 2), yi = M([X], yi);
var hm = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var mm = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            ${this.iconHtml(hm)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(mm)}
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
    $.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), $.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
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
    return $.notNull(e), e;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((e) => {
      let n = e.children.item(0);
      return $.need(Xe(n), `${n} must be an operation.`), n;
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
      $.need(e < 4, "#popinGates must be < 4");
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
u(Dr, "GateCarouselElement"), M([k], Dr.prototype, "currentGateSetIndex", 2), M([Oe], Dr.prototype, "contentClipper", 2), M([ft], Dr.prototype, "gateSets", 2), M([ft], Dr.prototype, "dots", 2), M([ft], Dr.prototype, "popinAnimationGates", 2), Dr = M([X], Dr);
var no = class extends HTMLElement {
  static {
    __name(this, "no");
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
    return $.notNull(e), e;
  }
  initPopup() {
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
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
    $.notNull(e);
    let n = e.content.cloneNode(true), s = document.createDocumentFragment();
    return Y(U`${n}`, s), s;
  }
};
u(no, "InspectorButtonElement"), no = M([X], no);
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
    return Gp(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), pn(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), ei(e)) {
      let n = Mo(e.angle);
      da(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (fl(e) || hl(e) || ml(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    si(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    if (!Tc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let n = e.target;
    if (!Tc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    $.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Lp(e)) {
      let n, s = Mo(e);
      this.denominatorInput.value = s.toString(), this.denominatorLabel.textContent = s.toString(), this.backupCurrentDenominator(), Np(e, "-2\u03C0") ? (n = `-${s * 2}\u03C0/${s}`, this.angleInput.value = n) : _p(e, "2\u03C0") ? (n = `${s * 2}\u03C0/${s}`, this.angleInput.value = n) : n = e, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    $.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Nh(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
};
u(wt, "OperationInspectorElement"), M([Oe], wt.prototype, "ifInput", 2), M([Oe], wt.prototype, "angleInputLabel", 2), M([Oe], wt.prototype, "angleInput", 2), M([Oe], wt.prototype, "angleSlider", 2), M([Oe], wt.prototype, "denominatorInput", 2), M([Oe], wt.prototype, "denominatorVariableLabel", 2), M([Oe], wt.prototype, "denominatorLabel", 2), M([Oe], wt.prototype, "reduceAngleFractionCheckbox", 2), M([Oe], wt.prototype, "flagInput", 2), M([k], wt.prototype, "conditionalGatePaneDisabled", 2), M([k], wt.prototype, "anglePaneDisabled", 2), M([k], wt.prototype, "conditionalFlagPaneDisabled", 2), wt = M([X], wt);
var vl = er(gm(), 1);
var kt = class extends HTMLElement {
  static {
    __name(this, "kt");
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
    let e = zt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let n = document.importNode(this.popupTemplate.content, true), s = new vl.default(this.amplitude), a = n.getElementById("qubit-circle-popup--header"), p = n.getElementById("qubit-circle-popup--ket-binary-value"), v = n.getElementById("qubit-circle-popup--ket-decimal-value"), m = n.getElementById("qubit-circle-popup--amplitude"), d = n.getElementById("qubit-circle-popup--amplitude-real-value"), f = n.getElementById("qubit-circle-popup--amplitude-imag-value"), g = n.getElementById("qubit-circle-popup--probability"), w = n.getElementById("qubit-circle-popup--probability-value"), S = n.getElementById("qubit-circle-popup--phase"), T = n.getElementById("qubit-circle-popup--phase-value");
    $.notNull(a), $.notNull(p), $.notNull(v), $.notNull(m), $.notNull(d), $.notNull(f), $.notNull(g), $.notNull(w), $.notNull(S), $.notNull(T), this.showPopupHeader ? (p.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), v.textContent = this.ket.toString()) : a.style.display = "none", this.showPopupAmplitude ? (d.textContent = Ot(s.re, 5), f.textContent = `${Ot(s.im, 5)}i`) : m.style.display = "none", this.showPopupProbability ? w.textContent = `${Ot(this.magnitude * this.magnitude * 100, 4)}%` : g.style.display = "none", this.showPopupPhase ? T.textContent = `${Ot(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(n), e.setContent(C.innerHTML), e.show();
  }
  get magnitude() {
    return new vl.default(this.amplitude).abs();
  }
  get phase() {
    return new vl.default(this.amplitude).arg();
  }
  get phaseDeg() {
    return this.phase / Math.PI * 180;
  }
  get cssPhaseDeg() {
    return -1 * this.phaseDeg;
  }
  hidePopup() {
    let e = this._tippy;
    $.notNull(e), e.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
};
u(kt, "QubitCircleElement"), M([k], kt.prototype, "ket", 2), M([k], kt.prototype, "qubitCount", 2), M([k], kt.prototype, "amplitude", 2), M([k], kt.prototype, "hidePhase", 2), M([k], kt.prototype, "popupTemplateId", 2), M([k], kt.prototype, "showPopupHeader", 2), M([k], kt.prototype, "showPopupAmplitude", 2), M([k], kt.prototype, "showPopupProbability", 2), M([k], kt.prototype, "showPopupPhase", 2), M([k], kt.prototype, "darkMode", 2), kt = M([X], kt);
var wm = er(Rn(), 1);
var bm = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ym = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var qr = class extends HTMLElement {
  static {
    __name(this, "qr");
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
      this.debug && console.log(`run-circuit-button: ${(0, wm.format)(e.value)}`);
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
    return U([bm]);
  }
  get tailSpinIcon() {
    return U([ym]);
  }
};
u(qr, "RunCircuitButtonElement"), M([k], qr.prototype, "running", 2), M([k], qr.prototype, "debug", 2), M([Oe], qr.prototype, "body", 2), M([Oe], qr.prototype, "ripple", 2), qr = M([X], qr);
var kr = class extends HTMLElement {
  static {
    __name(this, "kr");
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
u(kr, "SlideInElement"), M([k], kr.prototype, "direction", 2), M([k], kr.prototype, "directionDesktop", 2), M([k], kr.prototype, "duration", 2), M([k], kr.prototype, "marginTop", 2), M([k], kr.prototype, "marginBottom", 2), kr = M([X], kr);
var Fr = class extends HTMLElement {
  static {
    __name(this, "Fr");
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
u(Fr, "CircuitBlockElement"), M([k], Fr.prototype, "comment", 2), M([k], Fr.prototype, "finalized", 2), Fr = M([X], Fr);
var xm = er(Rn(), 1);
var Ur = u((t) => t != null && t instanceof pt, "isCircuitStepElement");
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
      $.notNull(s.operation), s.operation.bit = a;
    }, updateResizeableSpanDropzones: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "UNSNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE" || n.type === "DELETE_OPERATION" || n.type === "RESIZE_OPERATION"))
        return;
      let s = 1;
      for (let a of this.dropzones) {
        let p = a.operation;
        if (cr(p)) {
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
      this.debug && console.log(`circuit-step: ${(0, xm.format)(e.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let e = 0;
    for (let [n, s] of Object.entries(this.dropzones)) {
      if (!s.occupied)
        continue;
      let a = parseInt(n, 10) + 1;
      if (a > e && (e = a), cr(s.operation)) {
        let p = a + s.operation.span - 1;
        p > e && (e = p);
      }
    }
    return $.need(0 <= e && e <= Ao.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
      Po(p.operation) && (p.operation.controls = [], p.operation.antiControls = []);
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
        if (!da(v.operation))
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
      if (!Po(T.operation))
        throw new Error(`${T.operation} isn't controllable.`);
      T.operation.controls = this.controlBits(T, m, e), T.operation.antiControls = d, T.connectTop = S.some((C) => C < this.bit(T)), T.connectBottom = S.some((C) => C > this.bit(T));
    }
  }
  updateFreeDropzoneConnections(e) {
    let n = this.controllableDropzones(e), s = this.controlGateDropzones.filter((f) => Ec(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), a = this.antiControlGateDropzones.filter((f) => Sc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), p = n.map((f) => this.bit(f)), v = s.concat(a).concat(p), m = Math.min(...v), d = Math.max(...v);
    for (let f of this.freeDropzones)
      m < this.bit(f) && this.bit(f) < d && (f.connectTop = true, f.connectBottom = true);
  }
  controlBits(e, n, s) {
    let a = n;
    return s && (s.maxChControlGates > 0 && e.operationName === "h-gate" ? a = n.slice(0, s.maxChControlGates) : s.maxCnotControlGates > 0 && e.operationName === "x-gate" ? a = n.slice(0, s.maxCnotControlGates) : s.maxCyControlGates > 0 && e.operationName === "y-gate" ? a = n.slice(0, s.maxCyControlGates) : s.maxCzControlGates > 0 && e.operationName === "z-gate" ? a = n.slice(0, s.maxCzControlGates) : s.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? a = n.slice(0, s.maxCphaseControlGates) : s.maxCtControlGates > 0 && e.operationName === "t-gate" ? a = n.slice(0, s.maxCtControlGates) : s.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? a = n.slice(0, s.maxCrnotControlGates) : s.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? a = n.slice(0, s.maxCrxControlGates) : s.maxCryControlGates > 0 && e.operationName === "ry-gate" ? a = n.slice(0, s.maxCryControlGates) : s.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? a = n.slice(0, s.maxCrzControlGates) : s.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (a = n.slice(0, s.maxCswapControlGates))), a;
  }
  bit(e) {
    let n = this.dropzones.indexOf(e);
    return $.need(n !== -1, "circuit-dropzone not found."), n;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => e.operation === null);
  }
  dropzoneAt(e) {
    let n = this.dropzones[e];
    return $.notNull(n), n;
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
    return this.occupiedDropzones.filter((e) => Ec(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => Sc(e.operation));
  }
  numControlGateDropzones(e, n) {
    if (e === void 0)
      return null;
    let s = 0;
    return n.includes("h-gate") && !e.disableCh && e.maxChControlGates > s && (s = e.maxChControlGates), n.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > s && (s = e.maxCnotControlGates), n.includes("y-gate") && !e.disableCy && e.maxCyControlGates > s && (s = e.maxCyControlGates), n.includes("z-gate") && !e.disableCz && e.maxCzControlGates > s && (s = e.maxCzControlGates), n.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > s && (s = e.maxCphaseControlGates), n.includes("t-gate") && !e.disableCt && e.maxCtControlGates > s && (s = e.maxCtControlGates), n.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > s && (s = e.maxCrnotControlGates), n.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > s && (s = e.maxCrxControlGates), n.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > s && (s = e.maxCryControlGates), n.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > s && (s = e.maxCrzControlGates), n.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > s && (s = e.maxCswapControlGates), s === 0 ? null : s;
  }
  controllableDropzones(e) {
    let n = 0, s = 0, a = 0, p = 0, v = 0, m = 0, d = 0, f = 0, g = 0, w = 0;
    return this.occupiedDropzones.filter((S) => Po(S.operation)).filter((S) => e === void 0 ? true : rm(S.operation) ? (n += 1, e.maxChTargetGates !== 0 && n > e.maxChTargetGates ? false : !e.disableCh) : nm(S.operation) ? (s += 1, e.maxCnotTargetGates !== 0 && s > e.maxCnotTargetGates ? false : !e.disableCnot) : im(S.operation) ? (a += 1, e.maxCyTargetGates !== 0 && a > e.maxCyTargetGates ? false : !e.disableCy) : om(S.operation) ? (p += 1, e.maxCzTargetGates !== 0 && p > e.maxCzTargetGates ? false : !e.disableCz) : da(S.operation) ? (v += 1, e.maxCphaseTargetGates !== 0 && v > e.maxCphaseTargetGates ? false : !e.disableCphase) : am(S.operation) ? (m += 1, e.maxCtTargetGates !== 0 && m > e.maxCtTargetGates ? false : !e.disableCt) : sm(S.operation) ? (d += 1, e.maxCrnotTargetGates !== 0 && d > e.maxCrnotTargetGates ? false : !e.disableCrnot) : fl(S.operation) ? (f += 1, e.maxCrxTargetGates !== 0 && f > e.maxCrxTargetGates ? false : !e.disableCrx) : hl(S.operation) ? (g += 1, e.maxCryTargetGates !== 0 && g > e.maxCryTargetGates ? false : !e.disableCry) : ml(S.operation) ? (w += 1, e.maxCrzTargetGates !== 0 && w > e.maxCrzTargetGates ? false : !e.disableCrz) : lm(S.operation) ? !e.disableCswap : true);
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
        case Ht: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Xt: {
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
        case Kt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Bt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((R) => R.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
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
        case rr: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Yt: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
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
        case qt: {
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
        case Ut: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((R) => R.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
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
        case hr: {
          let a = s, p = a[0].operationType, v = a.map((d) => d.bit), m = { type: p, targets: v };
          e.push(m);
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
        case dr: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), g = { type: d, span: p, targets: f };
            e.push(g);
          }
          break;
        }
        case Vt: {
          let a = s.filter((d) => !d.disabled);
          if (a.length !== 2)
            break;
          let p = a[0].operationType, v = a[0].controls, m = { type: p, targets: [a[0].bit, a[1].bit] };
          v !== void 0 && v.length > 0 && (m.controls = v), e.push(m);
          break;
        }
        case Rt: {
          let a = s.filter((v) => !v.disabled);
          if (a.length < 2 || this.operations.some((v) => Po(v) && v.controls.length > 0))
            break;
          let p = a.map((v) => v.bit);
          e.push({ type: a[0].operationType, targets: p });
          break;
        }
        case pr:
          break;
        case et: {
          let a = s, p = s.map((v) => v.bit);
          e.push({ type: a[0].operationType, targets: p });
          break;
        }
        case Dt: {
          let a = s;
          for (let [, p] of Ce(a, (v) => v.value)) {
            let v = p.map((m) => m.bit);
            e.push({ type: p[0].operationType, targets: v });
          }
          break;
        }
        case $t: {
          let a = s;
          for (let [p, v] of Ce(a, (m) => m.flag)) {
            let m = v.map((g) => g.bit), f = { type: v[0].operationType, targets: m };
            p !== "" && (f.flag = p), e.push(f);
          }
          break;
        }
        default:
          throw new Error(`Unrecognized operation: ${n}`);
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
var Sm = er(Yo(), 1);
var Em = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var ma = u((t) => t != null && t instanceof de, "isCircuitDropzoneElement");
var ha;
var de = class extends HTMLElement {
  static {
    __name(this, "de");
  }
  constructor() {
    super(...arguments);
    Za(this, ha, null);
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
      $.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      $.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, fe("circuit-dropzone:qpu-operation-snap", {}, this);
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
    let { signal: e } = Ka(this, ha, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Xa(this, ha)) == null || e.abort();
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
    return $.notNull(e), Ur(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, Sm.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!cr(n))
      throw new Error(`${n} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([Em]);
  }
};
ha = /* @__PURE__ */ new WeakMap(), u(de, "CircuitDropzoneElement"), M([k], de.prototype, "occupied", 2), M([k], de.prototype, "operationName", 2), M([k], de.prototype, "inputWireQuantum", 2), M([k], de.prototype, "outputWireQuantum", 2), M([k], de.prototype, "connectTop", 2), M([k], de.prototype, "connectBottom", 2), M([k], de.prototype, "shadow", 2), M([k], de.prototype, "targets", 2), M([k], de.prototype, "debug", 2), de = M([X], de);
var Tm = er(Rn(), 1);
var dn = class extends HTMLElement {
  static {
    __name(this, "dn");
  }
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ht({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let s = n.operation;
      ul(s) && s.menu && s.hideMenu();
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
        $.notNull(p);
        let v = this.circuit.addShadowStepAfter(p), m = v.dropzones[a.wireIndex];
        $.notNull(m), m.append(s), m.operationName = s.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(v.dropzones);
      } else
        a.dropzone.append(s);
    }, snapResizeHandleIntoDropzone: (e, n) => {
      if (n.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let s = n.operation;
      if (!cr(s))
        throw new Error(`${s} is not resizeable`);
      let a = s.dropzone;
      if (!ma(a))
        throw new Error(`${a} is not a circuit dropzone`);
      $.notNull(a.circuitStep);
      let p = a.circuitStep.dropzones.indexOf(a), m = this.circuit.resizeHandleSnapTargetAt(n.x, n.y).wireIndex - p + 1;
      if (!Hp(m))
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
      this.circuit.wireCount < Ao.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      ul(s) && s.initMenu();
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
      this.debug && console.log(`circuit-editor: ${(0, Tm.format)(e.value)}`);
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
    if (Us(n))
      n.draggable = true;
    else
      throw new Error(`Not a draggable element: ${n}`);
  }
  enableResizing(e) {
    let n = e.target;
    if (cr(n))
      n.resizeable = true;
    else
      throw new Error(`Not a resizeable element: ${n}`);
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let s of this.circuit.operations)
        ul(s) && s.initMenu();
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
    if (!pn(n))
      throw new Error(`${n} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: n });
  }
  showOperationInspectorAngle(e) {
    let n = e.target;
    if (!ei(n))
      throw new Error(`${n} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: n });
  }
  showOperationInspectorFlag(e) {
    let n = e.target;
    if (!si(n))
      throw new Error(`${n} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: n });
  }
  setOperationIf(e) {
    let n = e.target, s = this.activeOperation;
    if (!pn(s))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: s, if: n.if });
  }
  setOperationAngle(e) {
    let n = e.target, s = this.activeOperation;
    if ($.notNull(s), !ei(s))
      throw new Error(`${s.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: s, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let n = e.target, s = this.activeOperation;
    if (!si(s))
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
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: n });
  }
  snapStep(e) {
    let n = e.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: n });
  }
  unsnapStep(e) {
    let n = e.target;
    if (!Ur(n))
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
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: n });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let n = e.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: n });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
};
u(dn, "CircuitEditorElement"), M([k], dn.prototype, "debug", 2), M([Oe], dn.prototype, "circuit", 2), M([Oe], dn.prototype, "inspectorButton", 2), dn = M([X], dn);
var va;
var io = class extends HTMLElement {
  static {
    __name(this, "io");
  }
  constructor() {
    super(...arguments);
    Za(this, va, null);
  }
  connectedCallback() {
    let { signal: e } = Ka(this, va, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Xa(this, va)) == null || e.abort();
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
    Us(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), cr(e) && (e.resizeable = true), fc(e) && e.initHelp();
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
    this.assertOperation(s), fc(n) && n.disableHelp(), this.prepend(s), this.initOperation(s);
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
va = /* @__PURE__ */ new WeakMap(), u(io, "PaletteDropzoneElement"), io = M([X], io);
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
    return $.need(n !== -1, `circuit-step index of ${e} not found.`), n;
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
    return $.notNull(n), n;
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
      $.notNull(s.parentElement), s.parentElement.insertBefore(n, s.nextSibling);
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
      let e = $.urlJson;
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
      let a = new Ht();
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
      let a = new Xt();
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
      let a = new Zt();
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
      let a = new Kt();
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
      let v = new Bt();
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
      let a = new nr();
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
      let a = new rr();
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
      let a = new Yt();
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
      let a = new ir();
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
      let a = new qt();
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
      let a = new Ft();
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
      let a = new Ut();
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
      let a = new Wt();
      return s && a.disable(), a;
    }, ...n), this;
  }
  qft(e, ...n) {
    let s;
    return typeof n[0] == "number" ? s = n : s = n[0].targets, this.applyOperationToTargets(() => {
      let a = new fr();
      return a.span = e, a;
    }, ...s), this.resize(), this;
  }
  qftDagger(e, ...n) {
    let s;
    return typeof n[0] == "number" ? s = n : s = n[0].targets, this.applyOperationToTargets(() => {
      let a = new dr();
      return a.span = e, a;
    }, ...s), this.resize(), this;
  }
  swap(...e) {
    let n = this.applyOperationToTargets(() => new Vt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  control(...e) {
    let n = this.applyOperationToTargets(() => new Rt(), ...e);
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
    return this.applyOperationToTargets(() => new $t(), ...e), this.resize(), this;
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
    return this.controlledU(Ht, e, n), this;
  }
  cnot(e, n) {
    return this.controlledU(Xt, e, n), this.resize(), this;
  }
  cy(e, n) {
    return this.controlledU(Zt, e, n), this;
  }
  cz(e, n) {
    return this.controlledU(Kt, e, n), this;
  }
  cphase(e, n) {
    return this.controlledU(Bt, e, n), this;
  }
  ct(e, n) {
    return this.controlledU(Yt, e, n), this;
  }
  crnot(e, n) {
    return this.controlledU(qt, e, n), this;
  }
  crx(e, n) {
    return this.controlledU(Ft, e, n), this;
  }
  cry(e, n) {
    return this.controlledU(Ut, e, n), this;
  }
  crz(e, n) {
    return this.controlledU(Wt, e, n), this;
  }
  cswap(e, n) {
    return this.controlledU(Vt, e, n), this;
  }
  cc(...e) {
    let n = Math.max(...e) + 1, s = this.appendStepWithDropzones(n);
    for (let a of e)
      s.dropzoneAt(a).put(new Rt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(s), this;
  }
  controlledU(e, n, s) {
    let a = [].concat(n), p = [].concat(s), v = a.concat(p), m = Math.max(...v) + 1, d = this.appendStepWithDropzones(m);
    for (let f of a)
      d.dropzoneAt(f).put(new Rt());
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
    let s = null, a = $.safeJsonParse(e);
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
            let g = new Dt();
            g.value = "0", d.push(g), m.append(new de());
            break;
          }
          case /^\|1>$/.test(f): {
            let g = new Dt();
            g.value = "1", d.push(g), m.append(new de());
            break;
          }
          case /^H/.test(f): {
            let g = new Ht();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case (/^X$/.test(f) || /^X<(.+)$/.test(f)): {
            let g = new Xt();
            g.if = f.slice(2).trim(), d.push(g), m.append(new de());
            break;
          }
          case /^Y/.test(f): {
            let g = new Zt();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^Z/.test(f): {
            let g = new Kt();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^P/.test(f): {
            let g = new Bt();
            g.angle = this.angleParameter(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^T†/.test(f): {
            let g = new ir();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^T/.test(f): {
            let g = new Yt();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^X\^½/.test(f): {
            let g = new qt();
            g.if = this.ifVariable(f.slice(3)), d.push(g), m.append(new de());
            break;
          }
          case /^Rx/.test(f): {
            let g = new Ft();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^Ry/.test(f): {
            let g = new Ut();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^Rz/.test(f): {
            let g = new Wt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^…/.test(f): {
            let g = new hr();
            d.push(g), m.append(new de());
            break;
          }
          case /^QFT\d/.test(f): {
            let g = new fr(), w = parseInt(f.slice(3), 10);
            g.span = w, d.push(g);
            for (let S = 0; S < w; S++)
              m.append(new de());
            break;
          }
          case /^QFT†\d/.test(f): {
            let g = new dr(), w = parseInt(f.slice(4), 10);
            g.span = w, d.push(g), m.append(new de());
            for (let S = 0; S < w; S++)
              m.append(new de());
            break;
          }
          case /^Swap$/.test(f): {
            let g = new Vt();
            d.push(g), m.append(new de());
            break;
          }
          case /^S†/.test(f): {
            let g = new rr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^S/.test(f): {
            let g = new nr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^•$/.test(f): {
            let g = new Rt();
            d.push(g), m.append(new de());
            break;
          }
          case /^◦$/.test(f): {
            let g = new pr();
            d.push(g), m.append(new de());
            break;
          }
          case /^Bloch$/.test(f): {
            let g = new et();
            d.push(g), m.append(new de());
            break;
          }
          case /^Measure/.test(f): {
            let g = new $t(), w = ((/^>(.+)$/.exec(f.slice(7)) || [])[1] || "").trim();
            g.flag = w, d.push(g), m.append(new de());
            break;
          }
          case /^[[{](.+)$/.test(f): {
            let g = f.slice(1);
            m.remove(), n = new Fr(), n.comment = g, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
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
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let s = e.detail.dropzone;
    if (!ma(s))
      throw new Error(`${s} isn't a circuit-dropzone.`);
    let a = n.dropzones.indexOf(s);
    $.need(a !== -1, "circuit-dropzone not found."), this.updateWire(a);
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
    cr(e) && (s = e.span);
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
            $.notNull(_), n.push(_.snapTarget);
          }
        }
        let C = S + e.snapRange * 0.75;
        v.dropzones[g + s - 1] !== void 0 && (this.isVertical ? n.push({ x: T, y: C }) : n.push({ x: C, y: T })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][T] === void 0 && (this.snapTargets[C][T] = { dropzone: null, stepIndex: m, wireIndex: g }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][T] === void 0 && (this.snapTargets[S][T] = { dropzone: f, stepIndex: null, wireIndex: g });
      }
    }
    e.snapTargets = n;
  }
  setResizeHandleSnapTargets(e) {
    if (!cr(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!ma(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let n = e.dropzone.circuitStep;
    $.notNull(n);
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
          $.notNull(C), p.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[f] === void 0 && (this.resizeHandleSnapTargets[f] = {}), this.resizeHandleSnapTargets[f][g] === void 0 && (this.resizeHandleSnapTargets[f][g] = { dropzone: m, stepIndex: null, wireIndex: w });
    }
    e.resizeHandleSnapTargets = p;
  }
  updateSnapTargets(e) {
    let n = e[0];
    $.notNull(n);
    let s = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [a, p] of Object.entries(this.snapTargets))
      if (!(parseInt(a) <= s))
        for (let v in p) {
          let m = p[v];
          m.stepIndex !== null && (m.stepIndex += 1);
        }
    for (let [a, p] of Object.entries(e)) {
      let v = p.snapTarget, m = this.isVertical ? v.y : v.x, d = this.isVertical ? v.x : v.y;
      $.notNull(this.snapTargets[m]), this.snapTargets[m][d] = { dropzone: p, stepIndex: null, wireIndex: parseInt(a) };
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
var Wr = class extends HTMLElement {
  static {
    __name(this, "Wr");
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
          if (um(d)) {
            let f = n.blochVectors[m];
            d.x = f.x, d.y = f.y, d.z = f.z;
          }
        }
        if (n.measuredBits) {
          let v = n.measuredBits;
          for (let m in v) {
            let d = parseInt(m), f = p.dropzoneAt(d).operation;
            cm(f) && (f.value = v[d].toString());
          }
        }
        for (let v of p.dropzones) {
          let m = v.operation;
          pn(m) && m.if !== "" && (m.disabled = !n.flags[m.if]);
        }
        if (s === n.step) {
          let v = {};
          for (let m in n.amplitudes) {
            let d = n.amplitudes[m];
            v[m] = new Io(d[0], d[1]);
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
        throw new Error(`Unknown service worker message: ${n}`);
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
    $.need(s.length > 0, "non-zero step length");
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
    $.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
};
u(Wr, "QuantumSimulatorElement"), M([k], Wr.prototype, "updateUrl", 2), M([Oe], Wr.prototype, "circuit", 2), M([Oe], Wr.prototype, "circleNotation", 2), M([ft], Wr.prototype, "runCircuitButtons", 2), Wr = M([X], Wr);

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
  Io as Complex
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
