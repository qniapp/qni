var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var Kv = Object.create;
var So = Object.defineProperty;
var hp = Object.getOwnPropertyDescriptor;
var Qv = Object.getOwnPropertyNames;
var dp = Object.getOwnPropertySymbols;
var Jv = Object.getPrototypeOf;
var mp = Object.prototype.hasOwnProperty;
var eg = Object.prototype.propertyIsEnumerable;
var fp = /* @__PURE__ */ __name((t, r, e) => r in t ? So(t, r, { enumerable: true, configurable: true, writable: true, value: e }) : t[r] = e, "fp");
var vp = /* @__PURE__ */ __name((t, r) => {
  for (var e in r || (r = {}))
    mp.call(r, e) && fp(t, e, r[e]);
  if (dp)
    for (var e of dp(r))
      eg.call(r, e) && fp(t, e, r[e]);
  return t;
}, "vp");
var u = /* @__PURE__ */ __name((t, r) => So(t, "name", { value: r, configurable: true }), "u");
var St = /* @__PURE__ */ __name((t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports), "St");
var tg = /* @__PURE__ */ __name((t, r, e, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let o of Qv(r))
      !mp.call(t, o) && o !== e && So(t, o, { get: () => r[o], enumerable: !(n = hp(r, o)) || n.enumerable });
  return t;
}, "tg");
var Lt = /* @__PURE__ */ __name((t, r, e) => (e = t != null ? Kv(Jv(t)) : {}, tg(r || !t || !t.__esModule ? So(e, "default", { value: t, enumerable: true }) : e, t)), "Lt");
var M = /* @__PURE__ */ __name((t, r, e, n) => {
  for (var o = n > 1 ? void 0 : n ? hp(r, e) : r, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (o = (n ? p(r, e, o) : p(o)) || o);
  return n && o && So(r, e, o), o;
}, "M");
var gp = /* @__PURE__ */ __name((t, r, e) => {
  if (!r.has(t))
    throw TypeError("Cannot " + e);
}, "gp");
var Wa = /* @__PURE__ */ __name((t, r, e) => (gp(t, r, "read from private field"), e ? e.call(t) : r.get(t)), "Wa");
var Va = /* @__PURE__ */ __name((t, r, e) => {
  if (r.has(t))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(t) : r.set(t, e);
}, "Va");
var Ya = /* @__PURE__ */ __name((t, r, e, n) => (gp(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e), "Ya");
var yp = St((Ul, bp) => {
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
    function o(w, S) {
      if (S === 0)
        throw g.DivisionByZero;
      var T = Object.create(g.prototype);
      T.s = w < 0 ? -1 : 1, w = w < 0 ? -w : w;
      var C = f(w, S);
      return T.n = w / C, T.d = S / C, T;
    }
    __name(o, "o");
    u(o, "newFraction");
    function s(w) {
      for (var S = {}, T = w, C = 2, z = 4; z <= T; ) {
        for (; T % C === 0; )
          T /= C, S[C] = (S[C] || 0) + 1;
        z += 1 + 2 * C++;
      }
      return T !== w ? T > 1 && (S[T] = (S[T] || 0) + 1) : S[w] = (S[w] || 0) + 1, S;
    }
    __name(s, "s");
    u(s, "factorize");
    var p = u(function(w, S) {
      var T = 0, C = 1, z = 1, N = 0, G = 0, $ = 0, A = 1, ee = 1, _ = 0, B = 1, te = 1, J = 1, ue = 1e7, K;
      if (w != null)
        if (S !== void 0) {
          if (T = w, C = S, z = T * C, T % 1 !== 0 || C % 1 !== 0)
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
              z = T * C;
              break;
            }
            case "number": {
              if (w < 0 && (z = w, w = -w), w % 1 === 0)
                T = w;
              else if (w > 0) {
                for (w >= 1 && (ee = Math.pow(10, Math.floor(1 + Math.log(w) / Math.LN10)), w /= ee); B <= ue && J <= ue; )
                  if (K = (_ + te) / (B + J), w === K) {
                    B + J <= ue ? (T = _ + te, C = B + J) : J > B ? (T = te, C = J) : (T = _, C = B);
                    break;
                  } else
                    w > K ? (_ += te, B += J) : (te += _, J += B), B > ue ? (T = te, C = J) : (T = _, C = B);
                T *= ee;
              } else
                (isNaN(w) || isNaN(S)) && (C = T = NaN);
              break;
            }
            case "string": {
              if (B = w.match(/\d+|./g), B === null)
                throw g.InvalidParameter;
              if (B[_] === "-" ? (z = -1, _++) : B[_] === "+" && _++, B.length === _ + 1 ? G = n(B[_++], z) : B[_ + 1] === "." || B[_] === "." ? (B[_] !== "." && (N = n(B[_++], z)), _++, (_ + 1 === B.length || B[_ + 1] === "(" && B[_ + 3] === ")" || B[_ + 1] === "'" && B[_ + 3] === "'") && (G = n(B[_], z), A = Math.pow(10, B[_].length), _++), (B[_] === "(" && B[_ + 2] === ")" || B[_] === "'" && B[_ + 2] === "'") && ($ = n(B[_ + 1], z), ee = Math.pow(10, B[_ + 1].length) - 1, _ += 3)) : B[_ + 1] === "/" || B[_ + 1] === ":" ? (G = n(B[_], z), A = n(B[_ + 2], 1), _ += 3) : B[_ + 3] === "/" && B[_ + 1] === " " && (N = n(B[_], z), G = n(B[_ + 2], z), A = n(B[_ + 4], 1), _ += 5), B.length <= _) {
                C = A * ee, z = T = $ + C * N + ee * G;
                break;
              }
            }
            default:
              throw g.InvalidParameter;
          }
      if (C === 0)
        throw g.DivisionByZero;
      e.s = z < 0 ? -1 : 1, e.n = Math.abs(T), e.d = Math.abs(C);
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
      for (var C = 1, z = v(10, T, S), N = 0; N < 300; N++) {
        if (C === z)
          return N;
        C = C * 10 % S, z = z * 10 % S;
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
        return o(e.s * e.n, e.d);
    }
    __name(g, "g");
    u(g, "Fraction"), g.DivisionByZero = new Error("Division by Zero"), g.InvalidParameter = new Error("Invalid argument"), g.NonIntegerParameter = new Error("Parameters must be integer"), g.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return o(this.n, this.d);
    }, neg: function() {
      return o(-this.s * this.n, this.d);
    }, add: function(w, S) {
      return p(w, S), o(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(w, S) {
      return p(w, S), o(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(w, S) {
      return p(w, S), o(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(w, S) {
      return p(w, S), o(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return o(this.s * this.n, this.d);
    }, mod: function(w, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new g(NaN);
      if (w === void 0)
        return o(this.s * this.n % this.d, 1);
      if (p(w, S), e.n === 0 && this.d === 0)
        throw g.DivisionByZero;
      return o(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(w, S) {
      return p(w, S), o(f(e.n, this.n) * f(e.d, this.d), e.d * this.d);
    }, lcm: function(w, S) {
      return p(w, S), e.n === 0 && this.n === 0 ? o(0, 1) : o(e.n * this.n, f(e.n, this.n) * f(e.d, this.d));
    }, ceil: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : o(Math.ceil(w * this.s * this.n / this.d), w);
    }, floor: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : o(Math.floor(w * this.s * this.n / this.d), w);
    }, round: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : o(Math.round(w * this.s * this.n / this.d), w);
    }, inverse: function() {
      return o(this.s * this.d, this.n);
    }, pow: function(w, S) {
      if (p(w, S), e.d === 1)
        return e.s < 0 ? o(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : o(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var T = s(this.n), C = s(this.d), z = 1, N = 1;
      for (var G in T)
        if (G !== "1") {
          if (G === "0") {
            z = 0;
            break;
          }
          if (T[G] *= e.n, T[G] % e.d === 0)
            T[G] /= e.d;
          else
            return null;
          z *= Math.pow(G, T[G]);
        }
      for (var G in C)
        if (G !== "1") {
          if (C[G] *= e.n, C[G] % e.d === 0)
            C[G] /= e.d;
          else
            return null;
          N *= Math.pow(G, C[G]);
        }
      return e.s < 0 ? o(N, z) : o(z, N);
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
        for (var z = o(T[C - 1], 1), N = C - 2; N >= 0; N--)
          z = z.inverse().add(T[N]);
        if (z.sub(S).abs().valueOf() < w)
          return z.mul(this.s);
      }
      return this;
    }, divisible: function(w, S) {
      return p(w, S), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(w) {
      var S, T = "", C = this.n, z = this.d;
      return this.s < 0 && (T += "-"), z === 1 ? T += C : (w && (S = Math.floor(C / z)) > 0 && (T += S, T += " ", C %= z), T += C, T += "/", T += z), T;
    }, toLatex: function(w) {
      var S, T = "", C = this.n, z = this.d;
      return this.s < 0 && (T += "-"), z === 1 ? T += C : (w && (S = Math.floor(C / z)) > 0 && (T += S, C %= z), T += "\\frac{", T += C, T += "}{", T += z, T += "}"), T;
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
      var C = m(S, T), z = d(S, T, C), N = this.s < 0 ? "-" : "";
      if (N += S / T | 0, S %= T, S *= 10, S && (N += "."), C) {
        for (var G = z; G--; )
          N += S / T | 0, S %= T, S *= 10;
        N += "(";
        for (var G = C; G--; )
          N += S / T | 0, S %= T, S *= 10;
        N += ")";
      } else
        for (var G = w; S && G--; )
          N += S / T | 0, S %= T, S *= 10;
      return N;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return g;
    }) : typeof Ul == "object" ? (Object.defineProperty(g, "__esModule", { value: true }), g.default = g, g.Fraction = g, bp.exports = g) : t.Fraction = g;
  })(Ul);
});
var Mp = St((k0, Op) => {
  "use strict";
  var Tp = u((t = 0) => (r) => `\x1B[${38 + t};5;${r}m`, "wrapAnsi256"), Cp = u((t = 0) => (r, e, n) => `\x1B[${38 + t};2;${r};${e};${n}m`, "wrapAnsi16m");
  function ag() {
    let t = /* @__PURE__ */ new Map(), r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    r.color.gray = r.color.blackBright, r.bgColor.bgGray = r.bgColor.bgBlackBright, r.color.grey = r.color.blackBright, r.bgColor.bgGrey = r.bgColor.bgBlackBright;
    for (let [e, n] of Object.entries(r)) {
      for (let [o, s] of Object.entries(n))
        r[o] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, n[o] = r[o], t.set(s[0], s[1]);
      Object.defineProperty(r, e, { value: n, enumerable: false });
    }
    return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi256 = Tp(), r.color.ansi16m = Cp(), r.bgColor.ansi256 = Tp(10), r.bgColor.ansi16m = Cp(10), Object.defineProperties(r, { rgbToAnsi256: { value: (e, n, o) => e === n && n === o ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(o / 255 * 5), enumerable: false }, hexToRgb: { value: (e) => {
      let n = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(e.toString(16));
      if (!n)
        return [0, 0, 0];
      let { colorString: o } = n.groups;
      o.length === 3 && (o = o.split("").map((p) => p + p).join(""));
      let s = Number.parseInt(o, 16);
      return [s >> 16 & 255, s >> 8 & 255, s & 255];
    }, enumerable: false }, hexToAnsi256: { value: (e) => r.rgbToAnsi256(...r.hexToRgb(e)), enumerable: false } }), r;
  }
  __name(ag, "ag");
  u(ag, "assembleStyles");
  Object.defineProperty(Op, "exports", { enumerable: true, get: ag });
});
var Co = St((Pi) => {
  "use strict";
  Object.defineProperty(Pi, "__esModule", { value: true });
  Pi.printIteratorEntries = lg;
  Pi.printIteratorValues = ug;
  Pi.printListItems = cg;
  Pi.printObjectProperties = pg;
  var sg = u((t, r) => {
    let e = Object.keys(t), n = r !== null ? e.sort(r) : e;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((o) => {
      Object.getOwnPropertyDescriptor(t, o).enumerable && n.push(o);
    }), n;
  }, "getKeysOfEnumerableProperties");
  function lg(t, r, e, n, o, s, p = ": ") {
    let v = "", m = 0, d = t.next();
    if (!d.done) {
      v += r.spacingOuter;
      let f = e + r.indent;
      for (; !d.done; ) {
        if (v += f, m++ === r.maxWidth) {
          v += "\u2026";
          break;
        }
        let g = s(d.value[0], r, f, n, o), w = s(d.value[1], r, f, n, o);
        v += g + p + w, d = t.next(), d.done ? r.min || (v += ",") : v += `,${r.spacingInner}`;
      }
      v += r.spacingOuter + e;
    }
    return v;
  }
  __name(lg, "lg");
  u(lg, "printIteratorEntries");
  function ug(t, r, e, n, o, s) {
    let p = "", v = 0, m = t.next();
    if (!m.done) {
      p += r.spacingOuter;
      let d = e + r.indent;
      for (; !m.done; ) {
        if (p += d, v++ === r.maxWidth) {
          p += "\u2026";
          break;
        }
        p += s(m.value, r, d, n, o), m = t.next(), m.done ? r.min || (p += ",") : p += `,${r.spacingInner}`;
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(ug, "ug");
  u(ug, "printIteratorValues");
  function cg(t, r, e, n, o, s) {
    let p = "";
    if (t.length) {
      p += r.spacingOuter;
      let v = e + r.indent;
      for (let m = 0; m < t.length; m++) {
        if (p += v, m === r.maxWidth) {
          p += "\u2026";
          break;
        }
        m in t && (p += s(t[m], r, v, n, o)), m < t.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(cg, "cg");
  u(cg, "printListItems");
  function pg(t, r, e, n, o, s) {
    let p = "", v = sg(t, r.compareKeys);
    if (v.length) {
      p += r.spacingOuter;
      let m = e + r.indent;
      for (let d = 0; d < v.length; d++) {
        let f = v[d], g = s(f, r, m, n, o), w = s(t[f], r, m, n, o);
        p += `${m + g}: ${w}`, d < v.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(pg, "pg");
  u(pg, "printObjectProperties");
});
var _p = St((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.test = xn.serialize = xn.default = void 0;
  var Ip = Co(), Yl = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, dg = typeof Yl == "function" && Yl.for ? Yl.for("jest.asymmetricMatcher") : 1267621, Za = " ", Ap = u((t, r, e, n, o, s) => {
    let p = t.toString();
    if (p === "ArrayContaining" || p === "ArrayNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Za}[${(0, Ip.printListItems)(t.sample, r, e, n, o, s)}]`;
    if (p === "ObjectContaining" || p === "ObjectNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Za}{${(0, Ip.printObjectProperties)(t.sample, r, e, n, o, s)}}`;
    if (p === "StringMatching" || p === "StringNotMatching" || p === "StringContaining" || p === "StringNotContaining")
      return p + Za + s(t.sample, r, e, n, o);
    if (typeof t.toAsymmetricMatcher != "function")
      throw new Error(`Asymmetric matcher ${t.constructor.name} does not implement toAsymmetricMatcher()`);
    return t.toAsymmetricMatcher();
  }, "serialize");
  xn.serialize = Ap;
  var Pp = u((t) => t && t.$$typeof === dg, "test");
  xn.test = Pp;
  var fg = { serialize: Ap, test: Pp }, hg = fg;
  xn.default = hg;
});
var Np = St((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: true });
  En.test = En.serialize = En.default = void 0;
  var zp = Co(), mg = " ", Rp = ["DOMStringMap", "NamedNodeMap"], vg = /^(HTML\w*Collection|NodeList)$/, gg = u((t) => Rp.indexOf(t) !== -1 || vg.test(t), "testName"), Dp = u((t) => t && t.constructor && !!t.constructor.name && gg(t.constructor.name), "test");
  En.test = Dp;
  var bg = u((t) => t.constructor.name === "NamedNodeMap", "isNamedNodeMap"), kp = u((t, r, e, n, o, s) => {
    let p = t.constructor.name;
    return ++n > r.maxDepth ? `[${p}]` : (r.min ? "" : p + mg) + (Rp.indexOf(p) !== -1 ? `{${(0, zp.printObjectProperties)(bg(t) ? Array.from(t).reduce((v, m) => (v[m.name] = m.value, v), {}) : vp({}, t), r, e, n, o, s)}}` : `[${(0, zp.printListItems)(Array.from(t), r, e, n, o, s)}]`);
  }, "serialize");
  En.serialize = kp;
  var yg = { serialize: kp, test: Dp }, wg = yg;
  En.default = wg;
});
var Gp = St((Xl) => {
  "use strict";
  Object.defineProperty(Xl, "__esModule", { value: true });
  Xl.default = xg;
  function xg(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  __name(xg, "xg");
  u(xg, "escapeHTML");
});
var Ka = St((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: true });
  Ut.printText = Ut.printProps = Ut.printElementAsLeaf = Ut.printElement = Ut.printComment = Ut.printChildren = void 0;
  var Lp = Eg(Gp());
  function Eg(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(Eg, "Eg");
  u(Eg, "_interopRequireDefault");
  var Sg = u((t, r, e, n, o, s, p) => {
    let v = n + e.indent, m = e.colors;
    return t.map((d) => {
      let f = r[d], g = p(f, e, v, o, s);
      return typeof f != "string" && (g.indexOf(`
`) !== -1 && (g = e.spacingOuter + v + g + e.spacingOuter + n), g = `{${g}}`), `${e.spacingInner + n + m.prop.open + d + m.prop.close}=${m.value.open}${g}${m.value.close}`;
    }).join("");
  }, "printProps");
  Ut.printProps = Sg;
  var Tg = u((t, r, e, n, o, s) => t.map((p) => r.spacingOuter + e + (typeof p == "string" ? jp(p, r) : s(p, r, e, n, o))).join(""), "printChildren");
  Ut.printChildren = Tg;
  var jp = u((t, r) => {
    let e = r.colors.content;
    return e.open + (0, Lp.default)(t) + e.close;
  }, "printText");
  Ut.printText = jp;
  var Cg = u((t, r) => {
    let e = r.colors.comment;
    return `${e.open}<!--${(0, Lp.default)(t)}-->${e.close}`;
  }, "printComment");
  Ut.printComment = Cg;
  var Og = u((t, r, e, n, o) => {
    let s = n.colors.tag;
    return `${s.open}<${t}${r && s.close + r + n.spacingOuter + o + s.open}${e ? `>${s.close}${e}${n.spacingOuter}${o}${s.open}</${t}` : `${r && !n.min ? "" : " "}/`}>${s.close}`;
  }, "printElement");
  Ut.printElement = Og;
  var Mg = u((t, r) => {
    let e = r.colors.tag;
    return `${e.open}<${t}${e.close} \u2026${e.open} />${e.close}`;
  }, "printElementAsLeaf");
  Ut.printElementAsLeaf = Mg;
});
var Up = St((Sn) => {
  "use strict";
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.test = Sn.serialize = Sn.default = void 0;
  var _i = Ka(), Ig = 1, Bp = 3, Hp = 8, $p = 11, Ag = /^((HTML|SVG)\w*)?Element$/, Pg = u((t) => {
    try {
      return typeof t.hasAttribute == "function" && t.hasAttribute("is");
    } catch (r) {
      return false;
    }
  }, "testHasAttribute"), _g = u((t) => {
    let r = t.constructor.name, { nodeType: e, tagName: n } = t, o = typeof n == "string" && n.includes("-") || Pg(t);
    return e === Ig && (Ag.test(r) || o) || e === Bp && r === "Text" || e === Hp && r === "Comment" || e === $p && r === "DocumentFragment";
  }, "testNode"), qp = u((t) => {
    var r;
    return ((r = t == null ? void 0 : t.constructor) == null ? void 0 : r.name) && _g(t);
  }, "test");
  Sn.test = qp;
  function zg(t) {
    return t.nodeType === Bp;
  }
  __name(zg, "zg");
  u(zg, "nodeIsText");
  function Rg(t) {
    return t.nodeType === Hp;
  }
  __name(Rg, "Rg");
  u(Rg, "nodeIsComment");
  function Zl(t) {
    return t.nodeType === $p;
  }
  __name(Zl, "Zl");
  u(Zl, "nodeIsFragment");
  var Fp = u((t, r, e, n, o, s) => {
    if (zg(t))
      return (0, _i.printText)(t.data, r);
    if (Rg(t))
      return (0, _i.printComment)(t.data, r);
    let p = Zl(t) ? "DocumentFragment" : t.tagName.toLowerCase();
    return ++n > r.maxDepth ? (0, _i.printElementAsLeaf)(p, r) : (0, _i.printElement)(p, (0, _i.printProps)(Zl(t) ? [] : Array.from(t.attributes).map((v) => v.name).sort(), Zl(t) ? {} : Array.from(t.attributes).reduce((v, m) => (v[m.name] = m.value, v), {}), r, e + r.indent, n, o, s), (0, _i.printChildren)(Array.prototype.slice.call(t.childNodes || t.children), r, e + r.indent, n, o, s), r, e);
  }, "serialize");
  Sn.serialize = Fp;
  var Dg = { serialize: Fp, test: qp }, kg = Dg;
  Sn.default = kg;
});
var Zp = St((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.test = Tn.serialize = Tn.default = void 0;
  var Oo = Co(), Ng = "@@__IMMUTABLE_ITERABLE__@@", Gg = "@@__IMMUTABLE_LIST__@@", Lg = "@@__IMMUTABLE_KEYED__@@", jg = "@@__IMMUTABLE_MAP__@@", Wp = "@@__IMMUTABLE_ORDERED__@@", Bg = "@@__IMMUTABLE_RECORD__@@", Hg = "@@__IMMUTABLE_SEQ__@@", $g = "@@__IMMUTABLE_SET__@@", qg = "@@__IMMUTABLE_STACK__@@", zi = u((t) => `Immutable.${t}`, "getImmutableName"), Qa = u((t) => `[${t}]`, "printAsLeaf"), Mo = " ", Vp = "\u2026", Fg = u((t, r, e, n, o, s, p) => ++n > r.maxDepth ? Qa(zi(p)) : `${zi(p) + Mo}{${(0, Oo.printIteratorEntries)(t.entries(), r, e, n, o, s)}}`, "printImmutableEntries");
  function Ug(t) {
    let r = 0;
    return { next() {
      if (r < t._keys.length) {
        let e = t._keys[r++];
        return { done: false, value: [e, t.get(e)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  __name(Ug, "Ug");
  u(Ug, "getRecordEntries");
  var Wg = u((t, r, e, n, o, s) => {
    let p = zi(t._name || "Record");
    return ++n > r.maxDepth ? Qa(p) : `${p + Mo}{${(0, Oo.printIteratorEntries)(Ug(t), r, e, n, o, s)}}`;
  }, "printImmutableRecord"), Vg = u((t, r, e, n, o, s) => {
    let p = zi("Seq");
    return ++n > r.maxDepth ? Qa(p) : t[Lg] ? `${p + Mo}{${t._iter || t._object ? (0, Oo.printIteratorEntries)(t.entries(), r, e, n, o, s) : Vp}}` : `${p + Mo}[${t._iter || t._array || t._collection || t._iterable ? (0, Oo.printIteratorValues)(t.values(), r, e, n, o, s) : Vp}]`;
  }, "printImmutableSeq"), Kl = u((t, r, e, n, o, s, p) => ++n > r.maxDepth ? Qa(zi(p)) : `${zi(p) + Mo}[${(0, Oo.printIteratorValues)(t.values(), r, e, n, o, s)}]`, "printImmutableValues"), Yp = u((t, r, e, n, o, s) => t[jg] ? Fg(t, r, e, n, o, s, t[Wp] ? "OrderedMap" : "Map") : t[Gg] ? Kl(t, r, e, n, o, s, "List") : t[$g] ? Kl(t, r, e, n, o, s, t[Wp] ? "OrderedSet" : "Set") : t[qg] ? Kl(t, r, e, n, o, s, "Stack") : t[Hg] ? Vg(t, r, e, n, o, s) : Wg(t, r, e, n, o, s), "serialize");
  Tn.serialize = Yp;
  var Xp = u((t) => t && (t[Ng] === true || t[Bg] === true), "test");
  Tn.test = Xp;
  var Yg = { serialize: Yp, test: Xp }, Xg = Yg;
  Tn.default = Xg;
});
var Qp = St((Ne) => {
  "use strict";
  var Ql = Symbol.for("react.element"), Jl = Symbol.for("react.portal"), Ja = Symbol.for("react.fragment"), es = Symbol.for("react.strict_mode"), ts = Symbol.for("react.profiler"), rs = Symbol.for("react.provider"), ns = Symbol.for("react.context"), Zg = Symbol.for("react.server_context"), is = Symbol.for("react.forward_ref"), os = Symbol.for("react.suspense"), as = Symbol.for("react.suspense_list"), ss = Symbol.for("react.memo"), ls = Symbol.for("react.lazy"), Kg = Symbol.for("react.offscreen"), Kp;
  Kp = Symbol.for("react.module.reference");
  function br(t) {
    if (typeof t == "object" && t !== null) {
      var r = t.$$typeof;
      switch (r) {
        case Ql:
          switch (t = t.type, t) {
            case Ja:
            case ts:
            case es:
            case os:
            case as:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case Zg:
                case ns:
                case is:
                case ls:
                case ss:
                case rs:
                  return t;
                default:
                  return r;
              }
          }
        case Jl:
          return r;
      }
    }
  }
  __name(br, "br");
  u(br, "v");
  Ne.ContextConsumer = ns;
  Ne.ContextProvider = rs;
  Ne.Element = Ql;
  Ne.ForwardRef = is;
  Ne.Fragment = Ja;
  Ne.Lazy = ls;
  Ne.Memo = ss;
  Ne.Portal = Jl;
  Ne.Profiler = ts;
  Ne.StrictMode = es;
  Ne.Suspense = os;
  Ne.SuspenseList = as;
  Ne.isAsyncMode = function() {
    return false;
  };
  Ne.isConcurrentMode = function() {
    return false;
  };
  Ne.isContextConsumer = function(t) {
    return br(t) === ns;
  };
  Ne.isContextProvider = function(t) {
    return br(t) === rs;
  };
  Ne.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Ql;
  };
  Ne.isForwardRef = function(t) {
    return br(t) === is;
  };
  Ne.isFragment = function(t) {
    return br(t) === Ja;
  };
  Ne.isLazy = function(t) {
    return br(t) === ls;
  };
  Ne.isMemo = function(t) {
    return br(t) === ss;
  };
  Ne.isPortal = function(t) {
    return br(t) === Jl;
  };
  Ne.isProfiler = function(t) {
    return br(t) === ts;
  };
  Ne.isStrictMode = function(t) {
    return br(t) === es;
  };
  Ne.isSuspense = function(t) {
    return br(t) === os;
  };
  Ne.isSuspenseList = function(t) {
    return br(t) === as;
  };
  Ne.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === Ja || t === ts || t === es || t === os || t === as || t === Kg || typeof t == "object" && t !== null && (t.$$typeof === ls || t.$$typeof === ss || t.$$typeof === rs || t.$$typeof === ns || t.$$typeof === is || t.$$typeof === Kp || t.getModuleId !== void 0);
  };
  Ne.typeOf = br;
});
var ed = St((J0, Jp) => {
  "use strict";
  Jp.exports = Qp();
});
var ad = St((Cn) => {
  "use strict";
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.test = Cn.serialize = Cn.default = void 0;
  var ei = Qg(ed()), us = Ka();
  function rd(t) {
    if (typeof WeakMap != "function")
      return null;
    var r = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
    return (rd = u(function(n) {
      return n ? e : r;
    }, "_getRequireWildcardCache"))(t);
  }
  __name(rd, "rd");
  u(rd, "_getRequireWildcardCache");
  function Qg(t, r) {
    if (!r && t && t.__esModule)
      return t;
    if (t === null || typeof t != "object" && typeof t != "function")
      return { default: t };
    var e = rd(r);
    if (e && e.has(t))
      return e.get(t);
    var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in t)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(t, s)) {
        var p = o ? Object.getOwnPropertyDescriptor(t, s) : null;
        p && (p.get || p.set) ? Object.defineProperty(n, s, p) : n[s] = t[s];
      }
    return n.default = t, e && e.set(t, n), n;
  }
  __name(Qg, "Qg");
  u(Qg, "_interopRequireWildcard");
  var nd = u((t, r = []) => (Array.isArray(t) ? t.forEach((e) => {
    nd(e, r);
  }) : t != null && t !== false && r.push(t), r), "getChildren"), td = u((t) => {
    let r = t.type;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r.displayName || r.name || "Unknown";
    if (ei.isFragment(t))
      return "React.Fragment";
    if (ei.isSuspense(t))
      return "React.Suspense";
    if (typeof r == "object" && r !== null) {
      if (ei.isContextProvider(t))
        return "Context.Provider";
      if (ei.isContextConsumer(t))
        return "Context.Consumer";
      if (ei.isForwardRef(t)) {
        if (r.displayName)
          return r.displayName;
        let e = r.render.displayName || r.render.name || "";
        return e !== "" ? `ForwardRef(${e})` : "ForwardRef";
      }
      if (ei.isMemo(t)) {
        let e = r.displayName || r.type.displayName || r.type.name || "";
        return e !== "" ? `Memo(${e})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, "getType"), Jg = u((t) => {
    let { props: r } = t;
    return Object.keys(r).filter((e) => e !== "children" && r[e] !== void 0).sort();
  }, "getPropKeys"), id = u((t, r, e, n, o, s) => ++n > r.maxDepth ? (0, us.printElementAsLeaf)(td(t), r) : (0, us.printElement)(td(t), (0, us.printProps)(Jg(t), t.props, r, e + r.indent, n, o, s), (0, us.printChildren)(nd(t.props.children), r, e + r.indent, n, o, s), r, e), "serialize");
  Cn.serialize = id;
  var od = u((t) => t != null && ei.isElement(t), "test");
  Cn.test = od;
  var eb = { serialize: id, test: od }, tb = eb;
  Cn.default = tb;
});
var ud = St((On) => {
  "use strict";
  Object.defineProperty(On, "__esModule", { value: true });
  On.test = On.serialize = On.default = void 0;
  var cs = Ka(), eu = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, rb = typeof eu == "function" && eu.for ? eu.for("react.test.json") : 245830487, nb = u((t) => {
    let { props: r } = t;
    return r ? Object.keys(r).filter((e) => r[e] !== void 0).sort() : [];
  }, "getPropKeys"), sd = u((t, r, e, n, o, s) => ++n > r.maxDepth ? (0, cs.printElementAsLeaf)(t.type, r) : (0, cs.printElement)(t.type, t.props ? (0, cs.printProps)(nb(t), t.props, r, e + r.indent, n, o, s) : "", t.children ? (0, cs.printChildren)(t.children, r, e + r.indent, n, o, s) : "", r, e), "serialize");
  On.serialize = sd;
  var ld = u((t) => t && t.$$typeof === rb, "test");
  On.test = ld;
  var ib = { serialize: sd, test: ld }, ob = ib;
  On.default = ob;
});
var rn = St((tn) => {
  "use strict";
  Object.defineProperty(tn, "__esModule", { value: true });
  tn.default = tn.DEFAULT_OPTIONS = void 0;
  tn.format = Td;
  tn.plugins = void 0;
  var ab = ti(Mp()), Io = Co(), sb = ti(_p()), lb = ti(Np()), ub = ti(Up()), cb = ti(Zp()), pb = ti(ad()), db = ti(ud());
  function ti(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(ti, "ti");
  u(ti, "_interopRequireDefault");
  var md = Object.prototype.toString, fb = Date.prototype.toISOString, hb = Error.prototype.toString, cd = RegExp.prototype.toString, tu = u((t) => typeof t.constructor == "function" && t.constructor.name || "Object", "getConstructorName"), mb = u((t) => typeof window != "undefined" && t === window, "isWindow"), vb = /^Symbol\((.*)\)(.*)$/, gb = /\n/gi, Ao = /* @__PURE__ */ __name(class extends Error {
    constructor(r, e) {
      super(r), this.stack = e, this.name = this.constructor.name;
    }
  }, "Ao");
  u(Ao, "PrettyFormatPluginError");
  function bb(t) {
    return t === "[object Array]" || t === "[object ArrayBuffer]" || t === "[object DataView]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object Int8Array]" || t === "[object Int16Array]" || t === "[object Int32Array]" || t === "[object Uint8Array]" || t === "[object Uint8ClampedArray]" || t === "[object Uint16Array]" || t === "[object Uint32Array]";
  }
  __name(bb, "bb");
  u(bb, "isToStringedArrayType");
  function yb(t) {
    return Object.is(t, -0) ? "-0" : String(t);
  }
  __name(yb, "yb");
  u(yb, "printNumber");
  function wb(t) {
    return String(`${t}n`);
  }
  __name(wb, "wb");
  u(wb, "printBigInt");
  function pd(t, r) {
    return r ? `[Function ${t.name || "anonymous"}]` : "[Function]";
  }
  __name(pd, "pd");
  u(pd, "printFunction");
  function dd(t) {
    return String(t).replace(vb, "Symbol($1)");
  }
  __name(dd, "dd");
  u(dd, "printSymbol");
  function fd(t) {
    return `[${hb.call(t)}]`;
  }
  __name(fd, "fd");
  u(fd, "printError");
  function vd(t, r, e, n) {
    if (t === true || t === false)
      return `${t}`;
    if (t === void 0)
      return "undefined";
    if (t === null)
      return "null";
    let o = typeof t;
    if (o === "number")
      return yb(t);
    if (o === "bigint")
      return wb(t);
    if (o === "string")
      return n ? `"${t.replace(/"|\\/g, "\\$&")}"` : `"${t}"`;
    if (o === "function")
      return pd(t, r);
    if (o === "symbol")
      return dd(t);
    let s = md.call(t);
    return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? pd(t, r) : s === "[object Symbol]" ? dd(t) : s === "[object Date]" ? isNaN(+t) ? "Date { NaN }" : fb.call(t) : s === "[object Error]" ? fd(t) : s === "[object RegExp]" ? e ? cd.call(t).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : cd.call(t) : t instanceof Error ? fd(t) : null;
  }
  __name(vd, "vd");
  u(vd, "printBasicValue");
  function gd(t, r, e, n, o, s) {
    if (o.indexOf(t) !== -1)
      return "[Circular]";
    o = o.slice(), o.push(t);
    let p = ++n > r.maxDepth, v = r.min;
    if (r.callToJSON && !p && t.toJSON && typeof t.toJSON == "function" && !s)
      return Mn(t.toJSON(), r, e, n, o, true);
    let m = md.call(t);
    return m === "[object Arguments]" ? p ? "[Arguments]" : `${v ? "" : "Arguments "}[${(0, Io.printListItems)(t, r, e, n, o, Mn)}]` : bb(m) ? p ? `[${t.constructor.name}]` : `${v || !r.printBasicPrototype && t.constructor.name === "Array" ? "" : `${t.constructor.name} `}[${(0, Io.printListItems)(t, r, e, n, o, Mn)}]` : m === "[object Map]" ? p ? "[Map]" : `Map {${(0, Io.printIteratorEntries)(t.entries(), r, e, n, o, Mn, " => ")}}` : m === "[object Set]" ? p ? "[Set]" : `Set {${(0, Io.printIteratorValues)(t.values(), r, e, n, o, Mn)}}` : p || mb(t) ? `[${tu(t)}]` : `${v || !r.printBasicPrototype && tu(t) === "Object" ? "" : `${tu(t)} `}{${(0, Io.printObjectProperties)(t, r, e, n, o, Mn)}}`;
  }
  __name(gd, "gd");
  u(gd, "printComplexValue");
  function xb(t) {
    return t.serialize != null;
  }
  __name(xb, "xb");
  u(xb, "isNewPlugin");
  function bd(t, r, e, n, o, s) {
    let p;
    try {
      p = xb(t) ? t.serialize(r, e, n, o, s, Mn) : t.print(r, (v) => Mn(v, e, n, o, s), (v) => {
        let m = n + e.indent;
        return m + v.replace(gb, `
${m}`);
      }, { edgeSpacing: e.spacingOuter, min: e.min, spacing: e.spacingInner }, e.colors);
    } catch (v) {
      throw new Ao(v.message, v.stack);
    }
    if (typeof p != "string")
      throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);
    return p;
  }
  __name(bd, "bd");
  u(bd, "printPlugin");
  function yd(t, r) {
    for (let e = 0; e < t.length; e++)
      try {
        if (t[e].test(r))
          return t[e];
      } catch (n) {
        throw new Ao(n.message, n.stack);
      }
    return null;
  }
  __name(yd, "yd");
  u(yd, "findPlugin");
  function Mn(t, r, e, n, o, s) {
    let p = yd(r.plugins, t);
    if (p !== null)
      return bd(p, t, r, e, n, o);
    let v = vd(t, r.printFunctionName, r.escapeRegex, r.escapeString);
    return v !== null ? v : gd(t, r, e, n, o, s);
  }
  __name(Mn, "Mn");
  u(Mn, "printer");
  var ru = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, wd = Object.keys(ru), Eb = u((t) => t, "toOptionsSubtype"), yr = Eb({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: ru });
  tn.DEFAULT_OPTIONS = yr;
  function Sb(t) {
    if (Object.keys(t).forEach((r) => {
      if (!Object.prototype.hasOwnProperty.call(yr, r))
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
  __name(Sb, "Sb");
  u(Sb, "validateOptions");
  var Tb = u((t) => wd.reduce((r, e) => {
    let n = t.theme && t.theme[e] !== void 0 ? t.theme[e] : ru[e], o = n && ab.default[n];
    if (o && typeof o.close == "string" && typeof o.open == "string")
      r[e] = o;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${e}" whose value "${n}" is undefined in ansi-styles.`);
    return r;
  }, /* @__PURE__ */ Object.create(null)), "getColorsHighlight"), Cb = u(() => wd.reduce((t, r) => (t[r] = { close: "", open: "" }, t), /* @__PURE__ */ Object.create(null)), "getColorsEmpty"), xd = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.printFunctionName) != null ? r : yr.printFunctionName;
  }, "getPrintFunctionName"), Ed = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeRegex) != null ? r : yr.escapeRegex;
  }, "getEscapeRegex"), Sd = u((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeString) != null ? r : yr.escapeString;
  }, "getEscapeString"), hd = u((t) => {
    var r, e, n, o, s, p, v;
    return { callToJSON: (r = t == null ? void 0 : t.callToJSON) != null ? r : yr.callToJSON, colors: t != null && t.highlight ? Tb(t) : Cb(), compareKeys: typeof (t == null ? void 0 : t.compareKeys) == "function" || (t == null ? void 0 : t.compareKeys) === null ? t.compareKeys : yr.compareKeys, escapeRegex: Ed(t), escapeString: Sd(t), indent: t != null && t.min ? "" : Ob((e = t == null ? void 0 : t.indent) != null ? e : yr.indent), maxDepth: (n = t == null ? void 0 : t.maxDepth) != null ? n : yr.maxDepth, maxWidth: (o = t == null ? void 0 : t.maxWidth) != null ? o : yr.maxWidth, min: (s = t == null ? void 0 : t.min) != null ? s : yr.min, plugins: (p = t == null ? void 0 : t.plugins) != null ? p : yr.plugins, printBasicPrototype: (v = t == null ? void 0 : t.printBasicPrototype) != null ? v : true, printFunctionName: xd(t), spacingInner: t != null && t.min ? " " : `
`, spacingOuter: t != null && t.min ? "" : `
` };
  }, "getConfig");
  function Ob(t) {
    return new Array(t + 1).join(" ");
  }
  __name(Ob, "Ob");
  u(Ob, "createIndent");
  function Td(t, r) {
    if (r && (Sb(r), r.plugins)) {
      let n = yd(r.plugins, t);
      if (n !== null)
        return bd(n, t, hd(r), "", 0, []);
    }
    let e = vd(t, xd(r), Ed(r), Sd(r));
    return e !== null ? e : gd(t, hd(r), "", 0, []);
  }
  __name(Td, "Td");
  u(Td, "format");
  var Mb = { AsymmetricMatcher: sb.default, DOMCollection: lb.default, DOMElement: ub.default, Immutable: cb.default, ReactElement: pb.default, ReactTestComponent: db.default };
  tn.plugins = Mb;
  var Ib = Td;
  tn.default = Ib;
});
var Vo = St((Of, ju) => {
  (function(t) {
    typeof Of == "object" && typeof ju != "undefined" ? ju.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
  })(function() {
    var t = {};
    Object.defineProperty(t, "__esModule", { value: true }), t.default = void 0, t.default = function(i) {
      return !(!i || !i.Window) && i instanceof i.Window;
    };
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.getWindow = function(i) {
      return (0, t.default)(i) ? i : (i.ownerDocument || i).defaultView || n.window;
    }, r.init = o, r.window = r.realWindow = void 0;
    var e = void 0;
    r.realWindow = e;
    var n = void 0;
    function o(i) {
      r.realWindow = e = i;
      var a = i.document.createTextNode("");
      a.ownerDocument !== i.document && typeof i.wrap == "function" && i.wrap(a) === a && (i = i.wrap(i)), r.window = n = i;
    }
    __name(o, "o");
    u(o, "o"), r.window = n, typeof window != "undefined" && window && o(window);
    var s = {};
    function p(i) {
      return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, p(i);
    }
    __name(p, "p");
    u(p, "a"), Object.defineProperty(s, "__esModule", { value: true }), s.default = void 0;
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
      var a = r.getWindow(i) || r.window;
      return /object|function/.test(typeof Element == "undefined" ? "undefined" : p(Element)) ? i instanceof Element || i instanceof a.Element : i.nodeType === 1 && typeof i.nodeName == "string";
    }, plainObject: function(i) {
      return v(i) && !!i.constructor && /function Object\b/.test(i.constructor.toString());
    }, array: function(i) {
      return v(i) && i.length !== void 0 && m(i.splice);
    } };
    s.default = d;
    var f = {};
    function g(i) {
      var a = i.interaction;
      if (a.prepared.name === "drag") {
        var l = a.prepared.axis;
        l === "x" ? (a.coords.cur.page.y = a.coords.start.page.y, a.coords.cur.client.y = a.coords.start.client.y, a.coords.velocity.client.y = 0, a.coords.velocity.page.y = 0) : l === "y" && (a.coords.cur.page.x = a.coords.start.page.x, a.coords.cur.client.x = a.coords.start.client.x, a.coords.velocity.client.x = 0, a.coords.velocity.page.x = 0);
      }
    }
    __name(g, "g");
    u(g, "f");
    function w(i) {
      var a = i.iEvent, l = i.interaction;
      if (l.prepared.name === "drag") {
        var c = l.prepared.axis;
        if (c === "x" || c === "y") {
          var h = c === "x" ? "y" : "x";
          a.page[h] = l.coords.start.page[h], a.client[h] = l.coords.start.client[h], a.delta[h] = 0;
        }
      }
    }
    __name(w, "w");
    u(w, "d"), Object.defineProperty(f, "__esModule", { value: true }), f.default = void 0;
    var S = { id: "actions/drag", install: function(i) {
      var a = i.actions, l = i.Interactable, c = i.defaults;
      l.prototype.draggable = S.draggable, a.map.drag = S, a.methodDict.drag = "draggable", c.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": g, "interactions:action-resume": g, "interactions:action-move": w, "auto-start:check": function(i) {
      var a = i.interaction, l = i.interactable, c = i.buttons, h = l.options.drag;
      if (h && h.enabled && (!a.pointerIsDown || !/mouse|pointer/.test(a.pointerType) || c & l.options.drag.mouseButtons))
        return i.action = { name: "drag", axis: h.lockAxis === "start" ? h.startAxis : h.lockAxis }, false;
    } }, draggable: function(i) {
      return s.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : s.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: g, move: w, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, T = S;
    f.default = T;
    var C = {};
    Object.defineProperty(C, "__esModule", { value: true }), C.default = void 0;
    var z = { init: function(i) {
      var a = i;
      z.document = a.document, z.DocumentFragment = a.DocumentFragment || N, z.SVGElement = a.SVGElement || N, z.SVGSVGElement = a.SVGSVGElement || N, z.SVGElementInstance = a.SVGElementInstance || N, z.Element = a.Element || N, z.HTMLElement = a.HTMLElement || z.Element, z.Event = a.Event, z.Touch = a.Touch || N, z.PointerEvent = a.PointerEvent || a.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function N() {
    }
    __name(N, "N");
    u(N, "y");
    var G = z;
    C.default = G;
    var $ = {};
    Object.defineProperty($, "__esModule", { value: true }), $.default = void 0;
    var A = { init: function(i) {
      var a = C.default.Element, l = i.navigator || {};
      A.supportsTouch = "ontouchstart" in i || s.default.func(i.DocumentTouch) && C.default.document instanceof i.DocumentTouch, A.supportsPointerEvent = l.pointerEnabled !== false && !!C.default.PointerEvent, A.isIOS = /iP(hone|od|ad)/.test(l.platform), A.isIOS7 = /iP(hone|od|ad)/.test(l.platform) && /OS 7[^\d]/.test(l.appVersion), A.isIe9 = /MSIE 9/.test(l.userAgent), A.isOperaMobile = l.appName === "Opera" && A.supportsTouch && /Presto/.test(l.userAgent), A.prefixedMatchesSelector = "matches" in a.prototype ? "matches" : "webkitMatchesSelector" in a.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in a.prototype ? "mozMatchesSelector" : "oMatchesSelector" in a.prototype ? "oMatchesSelector" : "msMatchesSelector", A.pEventTypes = A.supportsPointerEvent ? C.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, A.wheelEvent = C.default.document && "onmousewheel" in C.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ee = A;
    $.default = ee;
    var _ = {};
    function B(i) {
      var a = i.parentNode;
      if (s.default.docFrag(a)) {
        for (; (a = a.host) && s.default.docFrag(a); )
          ;
        return a;
      }
      return a;
    }
    __name(B, "B");
    u(B, "P");
    function te(i, a) {
      return r.window !== r.realWindow && (a = a.replace(/\/deep\//g, " ")), i[$.default.prefixedMatchesSelector](a);
    }
    __name(te, "te");
    u(te, "O"), Object.defineProperty(_, "__esModule", { value: true }), _.closest = function(i, a) {
      for (; s.default.element(i); ) {
        if (te(i, a))
          return i;
        i = B(i);
      }
      return null;
    }, _.getActualElement = function(i) {
      return i.correspondingUseElement || i;
    }, _.getElementClientRect = ie, _.getElementRect = function(i) {
      var a = ie(i);
      if (!$.default.isIOS7 && a) {
        var l = K(r.getWindow(i));
        a.left += l.x, a.right += l.x, a.top += l.y, a.bottom += l.y;
      }
      return a;
    }, _.getPath = function(i) {
      for (var a = []; i; )
        a.push(i), i = B(i);
      return a;
    }, _.getScrollXY = K, _.indexOfDeepestElement = function(i) {
      for (var a, l = [], c = 0; c < i.length; c++) {
        var h = i[c], b = i[a];
        if (h && c !== a)
          if (b) {
            var E = J(h), y = J(b);
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
                    for (var k = P[0].lastChild; k; ) {
                      if (k === P[1]) {
                        a = c, l = O;
                        break;
                      }
                      if (k === P[2])
                        break;
                      k = k.previousSibling;
                    }
                } else
                  j = h, R = b, (parseInt(r.getWindow(j).getComputedStyle(j).zIndex, 10) || 0) >= (parseInt(r.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (a = c);
              else
                a = c;
          } else
            a = c;
      }
      var j, R;
      return a;
    }, _.matchesSelector = te, _.matchesUpTo = function(i, a, l) {
      for (; s.default.element(i); ) {
        if (te(i, a))
          return true;
        if ((i = B(i)) === l)
          return te(i, a);
      }
      return false;
    }, _.nodeContains = function(i, a) {
      if (i.contains)
        return i.contains(a);
      for (; a; ) {
        if (a === i)
          return true;
        a = a.parentNode;
      }
      return false;
    }, _.parentNode = B, _.trySelector = function(i) {
      return !!s.default.string(i) && (C.default.document.querySelector(i), true);
    };
    var J = u(function(i) {
      return i.parentNode || i.host;
    }, "E");
    function ue(i, a) {
      for (var l, c = [], h = i; (l = J(h)) && h !== a && l !== h.ownerDocument; )
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
      var a = i instanceof C.default.SVGElement ? i.getBoundingClientRect() : i.getClientRects()[0];
      return a && { left: a.left, right: a.right, top: a.top, bottom: a.bottom, width: a.width || a.right - a.left, height: a.height || a.bottom - a.top };
    }
    __name(ie, "ie");
    u(ie, "j");
    var q = {};
    Object.defineProperty(q, "__esModule", { value: true }), q.default = function(i, a) {
      for (var l in a)
        i[l] = a[l];
      return i;
    };
    var oe = {};
    function et(i, a) {
      (a == null || a > i.length) && (a = i.length);
      for (var l = 0, c = Array(a); l < a; l++)
        c[l] = i[l];
      return c;
    }
    __name(et, "et");
    u(et, "I");
    function Ze(i, a, l) {
      return i === "parent" ? (0, _.parentNode)(l) : i === "self" ? a.getRect(l) : (0, _.closest)(l, i);
    }
    __name(Ze, "Ze");
    u(Ze, "D"), Object.defineProperty(oe, "__esModule", { value: true }), oe.addEdges = function(i, a, l) {
      i.left && (a.left += l.x), i.right && (a.right += l.x), i.top && (a.top += l.y), i.bottom && (a.bottom += l.y), a.width = a.right - a.left, a.height = a.bottom - a.top;
    }, oe.getStringOptionResult = Ze, oe.rectToXY = function(i) {
      return i && { x: "x" in i ? i.x : i.left, y: "y" in i ? i.y : i.top };
    }, oe.resolveRectLike = function(i, a, l, c) {
      var h, b = i;
      return s.default.string(b) ? b = Ze(b, a, l) : s.default.func(b) && (b = b.apply(void 0, function(E) {
        if (Array.isArray(E))
          return et(E);
      }(h = c) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(h) || function(E, y) {
        if (E) {
          if (typeof E == "string")
            return et(E, y);
          var x = Object.prototype.toString.call(E).slice(8, -1);
          return x === "Object" && E.constructor && (x = E.constructor.name), x === "Map" || x === "Set" ? Array.from(E) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? et(E, y) : void 0;
        }
      }(h) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), s.default.element(b) && (b = (0, _.getElementRect)(b)), b;
    }, oe.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, q.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, oe.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, q.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    };
    var _e = {};
    Object.defineProperty(_e, "__esModule", { value: true }), _e.default = function(i, a, l) {
      var c = i.options[l], h = c && c.origin || i.options.origin, b = (0, oe.resolveRectLike)(h, i, a, [i && a]);
      return (0, oe.rectToXY)(b) || { x: 0, y: 0 };
    };
    var Ae = {};
    function We(i) {
      return i.trim().split(/ +/);
    }
    __name(We, "We");
    u(We, "C"), Object.defineProperty(Ae, "__esModule", { value: true }), Ae.default = u(/* @__PURE__ */ __name(function i(a, l, c) {
      if (c = c || {}, s.default.string(a) && a.search(" ") !== -1 && (a = We(a)), s.default.array(a))
        return a.reduce(function(x, O) {
          return (0, q.default)(x, i(O, l, c));
        }, c);
      if (s.default.object(a) && (l = a, a = ""), s.default.func(l))
        c[a] = c[a] || [], c[a].push(l);
      else if (s.default.array(l))
        for (var h = 0; h < l.length; h++) {
          var b;
          b = l[h], i(a, b, c);
        }
      else if (s.default.object(l))
        for (var E in l) {
          var y = We(E).map(function(x) {
            return "".concat(a).concat(x);
          });
          i(y, l[E], c);
        }
      return c;
    }, "i"), "t");
    var Qe = {};
    Object.defineProperty(Qe, "__esModule", { value: true }), Qe.default = void 0, Qe.default = function(i, a) {
      return Math.sqrt(i * i + a * a);
    };
    var Ye = {};
    Object.defineProperty(Ye, "__esModule", { value: true }), Ye.default = function(i, a) {
      i.__set || (i.__set = {});
      var l = u(function(h) {
        typeof i[h] != "function" && h !== "__set" && Object.defineProperty(i, h, { get: function() {
          return h in i.__set ? i.__set[h] : i.__set[h] = a[h];
        }, set: function(b) {
          i.__set[h] = b;
        }, configurable: true });
      }, "n");
      for (var c in a)
        l(c);
      return i;
    };
    var Q = {};
    function ir(i) {
      return i instanceof C.default.Event || i instanceof C.default.Touch;
    }
    __name(ir, "ir");
    u(ir, "B");
    function Be(i, a, l) {
      return i = i || "page", (l = l || {}).x = a[i + "X"], l.y = a[i + "Y"], l;
    }
    __name(Be, "Be");
    u(Be, "Y");
    function tt(i, a) {
      return a = a || { x: 0, y: 0 }, $.default.isOperaMobile && ir(i) ? (Be("screen", i, a), a.x += window.scrollX, a.y += window.scrollY) : Be("page", i, a), a;
    }
    __name(tt, "tt");
    u(tt, "W");
    function fr(i, a) {
      return a = a || {}, $.default.isOperaMobile && ir(i) ? Be("screen", i, a) : Be("client", i, a), a;
    }
    __name(fr, "fr");
    u(fr, "L");
    function Mr(i) {
      var a = [];
      return s.default.array(i) ? (a[0] = i[0], a[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (a[0] = i.touches[0], a[1] = i.changedTouches[0]) : i.touches.length === 0 && (a[0] = i.changedTouches[0], a[1] = i.changedTouches[1]) : (a[0] = i.touches[0], a[1] = i.touches[1]), a;
    }
    __name(Mr, "Mr");
    u(Mr, "U");
    function hr(i) {
      for (var a = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, l = 0; l < i.length; l++) {
        var c = i[l];
        for (var h in a)
          a[h] += c[h];
      }
      for (var b in a)
        a[b] /= i.length;
      return a;
    }
    __name(hr, "hr");
    u(hr, "V"), Object.defineProperty(Q, "__esModule", { value: true }), Q.coordsToEvent = function(i) {
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
    }, Q.copyCoords = function(i, a) {
      i.page = i.page || {}, i.page.x = a.page.x, i.page.y = a.page.y, i.client = i.client || {}, i.client.x = a.client.x, i.client.y = a.client.y, i.timeStamp = a.timeStamp;
    }, Q.getClientXY = fr, Q.getEventTargets = function(i) {
      var a = s.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [_.getActualElement(a ? a[0] : i.target), _.getActualElement(i.currentTarget)];
    }, Q.getPageXY = tt, Q.getPointerId = function(i) {
      return s.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, Q.getPointerType = function(i) {
      return s.default.string(i.pointerType) ? i.pointerType : s.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof C.default.Touch ? "touch" : "mouse";
    }, Q.getTouchPair = Mr, Q.getXY = Be, Q.isNativePointer = ir, Q.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, Q.pointerAverage = hr, Object.defineProperty(Q, "pointerExtend", { enumerable: true, get: function() {
      return Ye.default;
    } }), Q.setCoordDeltas = function(i, a, l) {
      i.page.x = l.page.x - a.page.x, i.page.y = l.page.y - a.page.y, i.client.x = l.client.x - a.client.x, i.client.y = l.client.y - a.client.y, i.timeStamp = l.timeStamp - a.timeStamp;
    }, Q.setCoordVelocity = function(i, a) {
      var l = Math.max(a.timeStamp / 1e3, 1e-3);
      i.page.x = a.page.x / l, i.page.y = a.page.y / l, i.client.x = a.client.x / l, i.client.y = a.client.y / l, i.timeStamp = l;
    }, Q.setCoords = function(i, a, l) {
      var c = a.length > 1 ? hr(a) : a[0];
      tt(c, i.page), fr(c, i.client), i.timeStamp = l;
    }, Q.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, Q.touchAngle = function(i, a) {
      var l = a + "X", c = a + "Y", h = Mr(i), b = h[1][l] - h[0][l], E = h[1][c] - h[0][c];
      return 180 * Math.atan2(E, b) / Math.PI;
    }, Q.touchBBox = function(i) {
      if (!i.length)
        return null;
      var a = Mr(i), l = Math.min(a[0].pageX, a[1].pageX), c = Math.min(a[0].pageY, a[1].pageY), h = Math.max(a[0].pageX, a[1].pageX), b = Math.max(a[0].pageY, a[1].pageY);
      return { x: l, y: c, left: l, top: c, right: h, bottom: b, width: h - l, height: b - c };
    }, Q.touchDistance = function(i, a) {
      var l = a + "X", c = a + "Y", h = Mr(i), b = h[0][l] - h[1][l], E = h[0][c] - h[1][c];
      return (0, Qe.default)(b, E);
    };
    var or = {};
    function Dr(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Dr, "Dr");
    u(Dr, "q");
    function Wr(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Wr, "Wr");
    u(Wr, "G"), Object.defineProperty(or, "__esModule", { value: true }), or.BaseEvent = void 0;
    var Ln = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Wr(this, "immediatePropagationStopped", false), Wr(this, "propagationStopped", false), this._interaction = c;
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Dr(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    or.BaseEvent = Ln, Object.defineProperty(Ln.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Pe = {};
    Object.defineProperty(Pe, "__esModule", { value: true }), Pe.remove = Pe.merge = Pe.from = Pe.findIndex = Pe.find = Pe.contains = void 0, Pe.contains = function(i, a) {
      return i.indexOf(a) !== -1;
    }, Pe.remove = function(i, a) {
      return i.splice(i.indexOf(a), 1);
    };
    var jn = u(function(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        i.push(c);
      }
      return i;
    }, "K");
    Pe.merge = jn, Pe.from = function(i) {
      return jn([], i);
    };
    var Bn = u(function(i, a) {
      for (var l = 0; l < i.length; l++)
        if (a(i[l], l, i))
          return l;
      return -1;
    }, "Z");
    Pe.findIndex = Bn, Pe.find = function(i, a) {
      return i[Bn(i, a)];
    };
    var kt = {};
    function Vr(i) {
      return Vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Vr(i);
    }
    __name(Vr, "Vr");
    u(Vr, "Q");
    function bi(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(bi, "bi");
    u(bi, "tt");
    function mn(i, a) {
      return mn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, mn(i, a);
    }
    __name(mn, "mn");
    u(mn, "et");
    function Ir(i, a) {
      if (a && (Vr(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
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
    function kr(i) {
      return kr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, kr(i);
    }
    __name(kr, "kr");
    u(kr, "ot");
    function qt(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(qt, "qt");
    u(qt, "it"), Object.defineProperty(kt, "__esModule", { value: true }), kt.DropEvent = void 0;
    var Hn = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && mn(y, x);
      })(E, i);
      var a, l, c, h, b = (c = E, h = function() {
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
        var y, x = kr(c);
        if (h) {
          var O = kr(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Ir(this, y);
      });
      function E(y, x, O) {
        var I;
        (function(R, F) {
          if (!(R instanceof F))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), qt(Mt(I = b.call(this, x._interaction)), "dropzone", void 0), qt(Mt(I), "dragEvent", void 0), qt(Mt(I), "relatedTarget", void 0), qt(Mt(I), "draggable", void 0), qt(Mt(I), "propagationStopped", false), qt(Mt(I), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? y.prev : y.cur, k = P.element, j = P.dropzone;
        return I.type = O, I.target = k, I.currentTarget = k, I.dropzone = j, I.dragEvent = x, I.relatedTarget = x.target, I.draggable = x.interactable, I.timeStamp = x.timeStamp, I;
      }
      __name(E, "E");
      return u(E, "a"), a = E, (l = [{ key: "reject", value: function() {
        var y = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = x.activeDrops, I = Pe.findIndex(O, function(k) {
              var j = k.dropzone, R = k.element;
              return j === y.dropzone && R === y.target;
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
      } }]) && bi(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    kt.DropEvent = Hn;
    var Yr = {};
    function $n(i, a) {
      for (var l = 0; l < i.slice().length; l++) {
        var c = i.slice()[l], h = c.dropzone, b = c.element;
        a.dropzone = h, a.target = b, h.fire(a), a.propagationStopped = a.immediatePropagationStopped = false;
      }
    }
    __name($n, "$n");
    u($n, "lt");
    function vn(i, a) {
      for (var l = function(b, E) {
        for (var y = b.interactables, x = [], O = 0; O < y.list.length; O++) {
          var I = y.list[O];
          if (I.options.drop.enabled) {
            var P = I.options.drop.accept;
            if (!(s.default.element(P) && P !== E || s.default.string(P) && !_.matchesSelector(E, P) || s.default.func(P) && !P({ dropzone: I, draggableElement: E })))
              for (var k = s.default.string(I.target) ? I._context.querySelectorAll(I.target) : s.default.array(I.target) ? I.target : [I.target], j = 0; j < k.length; j++) {
                var R = k[j];
                R !== E && x.push({ dropzone: I, element: R, rect: I.getRect(R) });
              }
          }
        }
        return x;
      }(i, a), c = 0; c < l.length; c++) {
        var h = l[c];
        h.rect = h.dropzone.getRect(h.element);
      }
      return l;
    }
    __name(vn, "vn");
    u(vn, "ut");
    function qn(i, a, l) {
      for (var c = i.dropState, h = i.interactable, b = i.element, E = [], y = 0; y < c.activeDrops.length; y++) {
        var x = c.activeDrops[y], O = x.dropzone, I = x.element, P = x.rect;
        E.push(O.dropCheck(a, l, h, b, I, P) ? I : null);
      }
      var k = _.indexOfDeepestElement(E);
      return c.activeDrops[k] || null;
    }
    __name(qn, "qn");
    u(qn, "ct");
    function io(i, a, l) {
      var c = i.dropState, h = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return l.type === "dragstart" && (h.activate = new kt.DropEvent(c, l, "dropactivate"), h.activate.target = null, h.activate.dropzone = null), l.type === "dragend" && (h.deactivate = new kt.DropEvent(c, l, "dropdeactivate"), h.deactivate.target = null, h.deactivate.dropzone = null), c.rejected || (c.cur.element !== c.prev.element && (c.prev.dropzone && (h.leave = new kt.DropEvent(c, l, "dragleave"), l.dragLeave = h.leave.target = c.prev.element, l.prevDropzone = h.leave.dropzone = c.prev.dropzone), c.cur.dropzone && (h.enter = new kt.DropEvent(c, l, "dragenter"), l.dragEnter = c.cur.element, l.dropzone = c.cur.dropzone)), l.type === "dragend" && c.cur.dropzone && (h.drop = new kt.DropEvent(c, l, "drop"), l.dropzone = c.cur.dropzone, l.relatedTarget = c.cur.element), l.type === "dragmove" && c.cur.dropzone && (h.move = new kt.DropEvent(c, l, "dropmove"), h.move.dragmove = l, l.dropzone = c.cur.dropzone)), h;
    }
    __name(io, "io");
    u(io, "ft");
    function oo(i, a) {
      var l = i.dropState, c = l.activeDrops, h = l.cur, b = l.prev;
      a.leave && b.dropzone.fire(a.leave), a.enter && h.dropzone.fire(a.enter), a.move && h.dropzone.fire(a.move), a.drop && h.dropzone.fire(a.drop), a.deactivate && $n(c, a.deactivate), l.prev.dropzone = h.dropzone, l.prev.element = h.element;
    }
    __name(oo, "oo");
    u(oo, "dt");
    function ha(i, a) {
      var l = i.interaction, c = i.iEvent, h = i.event;
      if (c.type === "dragmove" || c.type === "dragend") {
        var b = l.dropState;
        a.dynamicDrop && (b.activeDrops = vn(a, l.element));
        var E = c, y = qn(l, E, h);
        b.rejected = b.rejected && !!y && y.dropzone === b.cur.dropzone && y.element === b.cur.element, b.cur.dropzone = y && y.dropzone, b.cur.element = y && y.element, b.events = io(l, 0, E);
      }
    }
    __name(ha, "ha");
    u(ha, "pt"), Object.defineProperty(Yr, "__esModule", { value: true }), Yr.default = void 0;
    var ma = { id: "actions/drop", install: function(i) {
      var a = i.actions, l = i.interactStatic, c = i.Interactable, h = i.defaults;
      i.usePlugin(f.default), c.prototype.dropzone = function(b) {
        return function(E, y) {
          if (s.default.object(y)) {
            if (E.options.drop.enabled = y.enabled !== false, y.listeners) {
              var x = (0, Ae.default)(y.listeners), O = Object.keys(x).reduce(function(I, P) {
                return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], I;
              }, {});
              E.off(E.options.drop.listeners), E.on(O), E.options.drop.listeners = O;
            }
            return s.default.func(y.ondrop) && E.on("drop", y.ondrop), s.default.func(y.ondropactivate) && E.on("dropactivate", y.ondropactivate), s.default.func(y.ondropdeactivate) && E.on("dropdeactivate", y.ondropdeactivate), s.default.func(y.ondragenter) && E.on("dragenter", y.ondragenter), s.default.func(y.ondragleave) && E.on("dragleave", y.ondragleave), s.default.func(y.ondropmove) && E.on("dropmove", y.ondropmove), /^(pointer|center)$/.test(y.overlap) ? E.options.drop.overlap = y.overlap : s.default.number(y.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, y.overlap), 0)), "accept" in y && (E.options.drop.accept = y.accept), "checker" in y && (E.options.drop.checker = y.checker), E;
          }
          return s.default.bool(y) ? (E.options.drop.enabled = y, E) : E.options.drop;
        }(this, b);
      }, c.prototype.dropCheck = function(b, E, y, x, O, I) {
        return function(P, k, j, R, F, Z, W) {
          var ne = false;
          if (!(W = W || P.getRect(Z)))
            return !!P.options.drop.checker && P.options.drop.checker(k, j, ne, P, Z, R, F);
          var ae = P.options.drop.overlap;
          if (ae === "pointer") {
            var ye = (0, _e.default)(R, F, "drag"), Re = Q.getPageXY(k);
            Re.x += ye.x, Re.y += ye.y;
            var Fe = Re.x > W.left && Re.x < W.right, Se = Re.y > W.top && Re.y < W.bottom;
            ne = Fe && Se;
          }
          var $e = R.getRect(F);
          if ($e && ae === "center") {
            var gr = $e.left + $e.width / 2, Qr = $e.top + $e.height / 2;
            ne = gr >= W.left && gr <= W.right && Qr >= W.top && Qr <= W.bottom;
          }
          return $e && s.default.number(ae) && (ne = Math.max(0, Math.min(W.right, $e.right) - Math.max(W.left, $e.left)) * Math.max(0, Math.min(W.bottom, $e.bottom) - Math.max(W.top, $e.top)) / ($e.width * $e.height) >= ae), P.options.drop.checker && (ne = P.options.drop.checker(k, j, ne, P, Z, R, F)), ne;
        }(this, b, E, y, x, O, I);
      }, l.dynamicDrop = function(b) {
        return s.default.bool(b) ? (i.dynamicDrop = b, l) : i.dynamicDrop;
      }, (0, q.default)(a.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), a.methodDict.drop = "dropzone", i.dynamicDrop = false, h.actions.drop = ma.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var a = i.interaction;
      a.prepared.name === "drag" && (a.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, a) {
      var l = i.interaction, c = (i.event, i.iEvent);
      if (l.prepared.name === "drag") {
        var h = l.dropState;
        h.activeDrops = null, h.events = null, h.activeDrops = vn(a, l.element), h.events = io(l, 0, c), h.events.activate && ($n(h.activeDrops, h.events.activate), a.fire("actions/drop:start", { interaction: l, dragEvent: c }));
      }
    }, "interactions:action-move": ha, "interactions:after-action-move": function(i, a) {
      var l = i.interaction, c = i.iEvent;
      l.prepared.name === "drag" && (oo(l, l.dropState.events), a.fire("actions/drop:move", { interaction: l, dragEvent: c }), l.dropState.events = {});
    }, "interactions:action-end": function(i, a) {
      if (i.interaction.prepared.name === "drag") {
        var l = i.interaction, c = i.iEvent;
        ha(i, a), oo(l, l.dropState.events), a.fire("actions/drop:end", { interaction: l, dragEvent: c });
      }
    }, "interactions:stop": function(i) {
      var a = i.interaction;
      if (a.prepared.name === "drag") {
        var l = a.dropState;
        l && (l.activeDrops = null, l.events = null, l.cur.dropzone = null, l.cur.element = null, l.prev.dropzone = null, l.prev.element = null, l.rejected = false);
      }
    } }, getActiveDrops: vn, getDrop: qn, getDropEvents: io, fireDropEvents: oo, defaults: { enabled: false, accept: null, overlap: "pointer" } }, dl = ma;
    Yr.default = dl;
    var L = {};
    function re(i) {
      var a = i.interaction, l = i.iEvent, c = i.phase;
      if (a.prepared.name === "gesture") {
        var h = a.pointers.map(function(O) {
          return O.pointer;
        }), b = c === "start", E = c === "end", y = a.interactable.options.deltaSource;
        if (l.touches = [h[0], h[1]], b)
          l.distance = Q.touchDistance(h, y), l.box = Q.touchBBox(h), l.scale = 1, l.ds = 0, l.angle = Q.touchAngle(h, y), l.da = 0, a.gesture.startDistance = l.distance, a.gesture.startAngle = l.angle;
        else if (E) {
          var x = a.prevEvent;
          l.distance = x.distance, l.box = x.box, l.scale = x.scale, l.ds = 0, l.angle = x.angle, l.da = 0;
        } else
          l.distance = Q.touchDistance(h, y), l.box = Q.touchBBox(h), l.scale = l.distance / a.gesture.startDistance, l.angle = Q.touchAngle(h, y), l.ds = l.scale - a.gesture.scale, l.da = l.angle - a.gesture.angle;
        a.gesture.distance = l.distance, a.gesture.angle = l.angle, s.default.number(l.scale) && l.scale !== 1 / 0 && !isNaN(l.scale) && (a.gesture.scale = l.scale);
      }
    }
    __name(re, "re");
    u(re, "yt"), Object.defineProperty(L, "__esModule", { value: true }), L.default = void 0;
    var se = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var a = i.actions, l = i.Interactable, c = i.defaults;
      l.prototype.gesturable = function(h) {
        return s.default.object(h) ? (this.options.gesture.enabled = h.enabled !== false, this.setPerAction("gesture", h), this.setOnEvents("gesture", h), this) : s.default.bool(h) ? (this.options.gesture.enabled = h, this) : this.options.gesture;
      }, a.map.gesture = se, a.methodDict.gesture = "gesturable", c.actions.gesture = se.defaults;
    }, listeners: { "interactions:action-start": re, "interactions:action-move": re, "interactions:action-end": re, "interactions:new": function(i) {
      i.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(i) {
      if (!(i.interaction.pointers.length < 2)) {
        var a = i.interactable.options.gesture;
        if (a && a.enabled)
          return i.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, ze = se;
    L.default = ze;
    var xe = {};
    function wt(i, a, l, c, h, b, E) {
      if (!a)
        return false;
      if (a === true) {
        var y = s.default.number(b.width) ? b.width : b.right - b.left, x = s.default.number(b.height) ? b.height : b.bottom - b.top;
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
      return !!s.default.element(c) && (s.default.element(a) ? a === c : _.matchesUpTo(c, a, h));
    }
    __name(wt, "wt");
    u(wt, "wt");
    function Nt(i) {
      var a = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.resizeAxes) {
        var c = a;
        l.interactable.options.resize.square ? (l.resizeAxes === "y" ? c.delta.x = c.delta.y : c.delta.y = c.delta.x, c.axes = "xy") : (c.axes = l.resizeAxes, l.resizeAxes === "x" ? c.delta.y = 0 : l.resizeAxes === "y" && (c.delta.x = 0));
      }
    }
    __name(Nt, "Nt");
    u(Nt, "_t"), Object.defineProperty(xe, "__esModule", { value: true }), xe.default = void 0;
    var It = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var a = i.actions, l = i.browser, c = i.Interactable, h = i.defaults;
      It.cursors = function(b) {
        return b.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(l), It.defaultMargin = l.supportsTouch || l.supportsPointerEvent ? 20 : 10, c.prototype.resizable = function(b) {
        return function(E, y, x) {
          return s.default.object(y) ? (E.options.resize.enabled = y.enabled !== false, E.setPerAction("resize", y), E.setOnEvents("resize", y), s.default.string(y.axis) && /^x$|^y$|^xy$/.test(y.axis) ? E.options.resize.axis = y.axis : y.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), s.default.bool(y.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = y.preserveAspectRatio : s.default.bool(y.square) && (E.options.resize.square = y.square), E) : s.default.bool(y) ? (E.options.resize.enabled = y, E) : E.options.resize;
        }(this, b, i);
      }, a.map.resize = It, a.methodDict.resize = "resizable", h.actions.resize = It.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(a) {
        var l = a.iEvent, c = a.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var h = l, b = c.rect;
          c._rects = { start: (0, q.default)({}, b), corrected: (0, q.default)({}, b), previous: (0, q.default)({}, b), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, h.edges = c.prepared.edges, h.rect = c._rects.corrected, h.deltaRect = c._rects.delta;
        }
      })(i), Nt(i);
    }, "interactions:action-move": function(i) {
      (function(a) {
        var l = a.iEvent, c = a.interaction;
        if (c.prepared.name === "resize" && c.prepared.edges) {
          var h = l, b = c.interactable.options.resize.invert, E = b === "reposition" || b === "negate", y = c.rect, x = c._rects, O = x.start, I = x.corrected, P = x.delta, k = x.previous;
          if ((0, q.default)(k, I), E) {
            if ((0, q.default)(I, y), b === "reposition") {
              if (I.top > I.bottom) {
                var j = I.top;
                I.top = I.bottom, I.bottom = j;
              }
              if (I.left > I.right) {
                var R = I.left;
                I.left = I.right, I.right = R;
              }
            }
          } else
            I.top = Math.min(y.top, O.bottom), I.bottom = Math.max(y.bottom, O.top), I.left = Math.min(y.left, O.right), I.right = Math.max(y.right, O.left);
          for (var F in I.width = I.right - I.left, I.height = I.bottom - I.top, I)
            P[F] = I[F] - k[F];
          h.edges = c.prepared.edges, h.rect = I, h.deltaRect = P;
        }
      })(i), Nt(i);
    }, "interactions:action-end": function(i) {
      var a = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.prepared.edges) {
        var c = a;
        c.edges = l.prepared.edges, c.rect = l._rects.corrected, c.deltaRect = l._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var a = i.interaction, l = i.interactable, c = i.element, h = i.rect, b = i.buttons;
      if (h) {
        var E = (0, q.default)({}, a.coords.cur.page), y = l.options.resize;
        if (y && y.enabled && (!a.pointerIsDown || !/mouse|pointer/.test(a.pointerType) || b & y.mouseButtons)) {
          if (s.default.object(y.edges)) {
            var x = { left: false, right: false, top: false, bottom: false };
            for (var O in x)
              x[O] = wt(O, y.edges[O], E, a._latestPointer.eventTarget, c, h, y.margin || It.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (i.action = { name: "resize", edges: x });
          } else {
            var I = y.axis !== "y" && E.x > h.right - It.defaultMargin, P = y.axis !== "x" && E.y > h.bottom - It.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var a = i.edges, l = i.axis, c = i.name, h = It.cursors, b = null;
      if (l)
        b = h[c + l];
      else if (a) {
        for (var E = "", y = ["top", "bottom", "left", "right"], x = 0; x < y.length; x++) {
          var O = y[x];
          a[O] && (E += O);
        }
        b = h[E];
      }
      return b;
    }, defaultMargin: null }, va = It;
    xe.default = va;
    var mr = {};
    Object.defineProperty(mr, "__esModule", { value: true }), mr.default = void 0;
    var ao = { id: "actions", install: function(i) {
      i.usePlugin(L.default), i.usePlugin(xe.default), i.usePlugin(f.default), i.usePlugin(Yr.default);
    } };
    mr.default = ao;
    var At = {};
    Object.defineProperty(At, "__esModule", { value: true }), At.default = void 0;
    var Pt, Xr, yi = 0, wi = { request: function(i) {
      return Pt(i);
    }, cancel: function(i) {
      return Xr(i);
    }, init: function(i) {
      if (Pt = i.requestAnimationFrame, Xr = i.cancelAnimationFrame, !Pt)
        for (var a = ["ms", "moz", "webkit", "o"], l = 0; l < a.length; l++) {
          var c = a[l];
          Pt = i["".concat(c, "RequestAnimationFrame")], Xr = i["".concat(c, "CancelAnimationFrame")] || i["".concat(c, "CancelRequestAnimationFrame")];
        }
      Pt = Pt && Pt.bind(i), Xr = Xr && Xr.bind(i), Pt || (Pt = u(function(h) {
        var b = Date.now(), E = Math.max(0, 16 - (b - yi)), y = i.setTimeout(function() {
          h(b + E);
        }, E);
        return yi = b + E, y;
      }, "jt"), Xr = u(function(h) {
        return clearTimeout(h);
      }, "Mt"));
    } };
    At.default = wi;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = void 0, gn.getContainer = ga, gn.getScroll = so, gn.getScrollSize = function(i) {
      return s.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, gn.getScrollSizeDelta = function(i, a) {
      var l = i.interaction, c = i.element, h = l && l.interactable.options[l.prepared.name].autoScroll;
      if (!h || !h.enabled)
        return a(), { x: 0, y: 0 };
      var b = ga(h.container, l.interactable, c), E = so(b);
      a();
      var y = so(b);
      return { x: y.x - E.x, y: y.y - E.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, At.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = At.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), At.default.cancel(ce.i);
    }, scroll: function() {
      var i = ce.interaction, a = i.interactable, l = i.element, c = i.prepared.name, h = a.options[c].autoScroll, b = ga(h.container, a, l), E = ce.now(), y = (E - ce.prevTime) / 1e3, x = h.speed * y;
      if (x >= 1) {
        var O = { x: ce.x * x, y: ce.y * x };
        if (O.x || O.y) {
          var I = so(b);
          s.default.window(b) ? b.scrollBy(O.x, O.y) : b && (b.scrollLeft += O.x, b.scrollTop += O.y);
          var P = so(b), k = { x: P.x - I.x, y: P.y - I.y };
          (k.x || k.y) && a.fire({ type: "autoscroll", target: l, interactable: a, delta: k, interaction: i, container: b });
        }
        ce.prevTime = E;
      }
      ce.isScrolling && (At.default.cancel(ce.i), ce.i = At.default.request(ce.scroll));
    }, check: function(i, a) {
      var l;
      return (l = i.options[a].autoScroll) == null ? void 0 : l.enabled;
    }, onInteractionMove: function(i) {
      var a = i.interaction, l = i.pointer;
      if (a.interacting() && ce.check(a.interactable, a.prepared.name))
        if (a.simulation)
          ce.x = ce.y = 0;
        else {
          var c, h, b, E, y = a.interactable, x = a.element, O = a.prepared.name, I = y.options[O].autoScroll, P = ga(I.container, y, x);
          if (s.default.window(P))
            E = l.clientX < ce.margin, c = l.clientY < ce.margin, h = l.clientX > P.innerWidth - ce.margin, b = l.clientY > P.innerHeight - ce.margin;
          else {
            var k = _.getElementClientRect(P);
            E = l.clientX < k.left + ce.margin, c = l.clientY < k.top + ce.margin, h = l.clientX > k.right - ce.margin, b = l.clientY > k.bottom - ce.margin;
          }
          ce.x = h ? 1 : E ? -1 : 0, ce.y = b ? 1 : c ? -1 : 0, ce.isScrolling || (ce.margin = I.margin, ce.speed = I.speed, ce.start(a));
        }
    } };
    function ga(i, a, l) {
      return (s.default.string(i) ? (0, oe.getStringOptionResult)(i, a, l) : i) || (0, r.getWindow)(l);
    }
    __name(ga, "ga");
    u(ga, "zt");
    function so(i) {
      return s.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(so, "so");
    u(so, "Ct");
    var mm = { id: "auto-scroll", install: function(i) {
      var a = i.defaults, l = i.actions;
      i.autoScroll = ce, ce.now = function() {
        return i.now();
      }, l.phaselessTypes.autoscroll = true, a.perAction.autoScroll = ce.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoScroll = null;
    }, "interactions:destroy": function(i) {
      i.interaction.autoScroll = null, ce.stop(), ce.interaction && (ce.interaction = null);
    }, "interactions:stop": ce.stop, "interactions:action-move": function(i) {
      return ce.onInteractionMove(i);
    } } }, vm = mm;
    gn.default = vm;
    var ar = {};
    Object.defineProperty(ar, "__esModule", { value: true }), ar.copyAction = function(i, a) {
      return i.name = a.name, i.axis = a.axis, i.edges = a.edges, i;
    }, ar.sign = void 0, ar.warnOnce = function(i, a) {
      var l = false;
      return function() {
        return l || (r.window.console.warn(a), l = true), i.apply(this, arguments);
      };
    }, ar.sign = function(i) {
      return i >= 0 ? 1 : -1;
    };
    var ba = {};
    function gm(i) {
      return s.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(gm, "gm");
    u(gm, "Yt");
    function bm(i) {
      return s.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(bm, "bm");
    u(bm, "Wt"), Object.defineProperty(ba, "__esModule", { value: true }), ba.default = void 0;
    var ym = { id: "auto-start/interactableMethods", install: function(i) {
      var a = i.Interactable;
      a.prototype.getAction = function(l, c, h, b) {
        var E = function(y, x, O, I, P) {
          var k = y.getRect(I), j = { action: null, interactable: y, interaction: O, element: I, rect: k, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", j), j.action;
        }(this, c, h, b, i);
        return this.options.actionChecker ? this.options.actionChecker(l, c, E, this, b, h) : E;
      }, a.prototype.ignoreFrom = (0, ar.warnOnce)(function(l) {
        return this._backCompatOption("ignoreFrom", l);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), a.prototype.allowFrom = (0, ar.warnOnce)(function(l) {
        return this._backCompatOption("allowFrom", l);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), a.prototype.actionChecker = bm, a.prototype.styleCursor = gm;
    } };
    ba.default = ym;
    var xi = {};
    function bc(i, a, l, c, h) {
      return a.testIgnoreAllow(a.options[i.name], l, c) && a.options[i.name].enabled && ya(a, l, i, h) ? i : null;
    }
    __name(bc, "bc");
    u(bc, "Vt");
    function wm(i, a, l, c, h, b, E) {
      for (var y = 0, x = c.length; y < x; y++) {
        var O = c[y], I = h[y], P = O.getAction(a, l, i, I);
        if (P) {
          var k = bc(P, O, I, b, E);
          if (k)
            return { action: k, interactable: O, element: I };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(wm, "wm");
    u(wm, "Nt");
    function yc(i, a, l, c, h) {
      var b = [], E = [], y = c;
      function x(I) {
        b.push(I), E.push(y);
      }
      __name(x, "x");
      for (u(x, "u"); s.default.element(y); ) {
        b = [], E = [], h.interactables.forEachMatch(y, x);
        var O = wm(i, a, l, b, E, c, h);
        if (O.action && !O.interactable.options[O.action.name].manualStart)
          return O;
        y = _.parentNode(y);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(yc, "yc");
    u(yc, "qt");
    function wc(i, a, l) {
      var c = a.action, h = a.interactable, b = a.element;
      c = c || { name: null }, i.interactable = h, i.element = b, (0, ar.copyAction)(i.prepared, c), i.rect = h && c.name ? h.getRect(b) : null, Ec(i, l), l.fire("autoStart:prepared", { interaction: i });
    }
    __name(wc, "wc");
    u(wc, "Gt");
    function ya(i, a, l, c) {
      var h = i.options, b = h[l.name].max, E = h[l.name].maxPerElement, y = c.autoStart.maxInteractions, x = 0, O = 0, I = 0;
      if (!(b && E && y))
        return false;
      for (var P = 0; P < c.interactions.list.length; P++) {
        var k = c.interactions.list[P], j = k.prepared.name;
        if (k.interacting() && (++x >= y || k.interactable === i && ((O += j === l.name ? 1 : 0) >= b || k.element === a && (I++, j === l.name && I >= E))))
          return false;
      }
      return y > 0;
    }
    __name(ya, "ya");
    u(ya, "$t");
    function xc(i, a) {
      return s.default.number(i) ? (a.autoStart.maxInteractions = i, this) : a.autoStart.maxInteractions;
    }
    __name(xc, "xc");
    u(xc, "Ht");
    function fl(i, a, l) {
      var c = l.autoStart.cursorElement;
      c && c !== i && (c.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = a, i.style.cursor = a, l.autoStart.cursorElement = a ? i : null;
    }
    __name(fl, "fl");
    u(fl, "Kt");
    function Ec(i, a) {
      var l = i.interactable, c = i.element, h = i.prepared;
      if (i.pointerType === "mouse" && l && l.options.styleCursor) {
        var b = "";
        if (h.name) {
          var E = l.options[h.name].cursorChecker;
          b = s.default.func(E) ? E(h, l, c, i._interacting) : a.actions.map[h.name].getCursor(h);
        }
        fl(i.element, b || "", a);
      } else
        a.autoStart.cursorElement && fl(a.autoStart.cursorElement, "", a);
    }
    __name(Ec, "Ec");
    u(Ec, "Zt"), Object.defineProperty(xi, "__esModule", { value: true }), xi.default = void 0;
    var xm = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var a = i.interactStatic, l = i.defaults;
      i.usePlugin(ba.default), l.base.actionChecker = null, l.base.styleCursor = true, (0, q.default)(l.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), a.maxInteractions = function(c) {
        return xc(c, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: ya, cursorElement: null };
    }, listeners: { "interactions:down": function(i, a) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget;
      l.interacting() || wc(l, yc(l, c, h, b, a), a);
    }, "interactions:move": function(i, a) {
      (function(l, c) {
        var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget;
        h.pointerType !== "mouse" || h.pointerIsDown || h.interacting() || wc(h, yc(h, b, E, y, c), c);
      })(i, a), function(l, c) {
        var h = l.interaction;
        if (h.pointerIsDown && !h.interacting() && h.pointerWasMoved && h.prepared.name) {
          c.fire("autoStart:before-start", l);
          var b = h.interactable, E = h.prepared.name;
          E && b && (b.options[E].manualStart || !ya(b, h.element, h.prepared, c) ? h.stop() : (h.start(h.prepared, b, h.element), Ec(h, c)));
        }
      }(i, a);
    }, "interactions:stop": function(i, a) {
      var l = i.interaction, c = l.interactable;
      c && c.options.styleCursor && fl(l.element, "", a);
    } }, maxInteractions: xc, withinInteractionLimit: ya, validateAction: bc }, Em = xm;
    xi.default = Em;
    var wa = {};
    Object.defineProperty(wa, "__esModule", { value: true }), wa.default = void 0;
    var Sm = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, a) {
      var l = i.interaction, c = i.eventTarget, h = i.dx, b = i.dy;
      if (l.prepared.name === "drag") {
        var E = Math.abs(h), y = Math.abs(b), x = l.interactable.options.drag, O = x.startAxis, I = E > y ? "x" : E < y ? "y" : "xy";
        if (l.prepared.axis = x.lockAxis === "start" ? I[0] : x.lockAxis, I !== "xy" && O !== "xy" && O !== I) {
          l.prepared.name = null;
          for (var P = c, k = function(R) {
            if (R !== l.interactable) {
              var F = l.interactable.options.drag;
              if (!F.manualStart && R.testIgnoreAllow(F, P, c)) {
                var Z = R.getAction(l.downPointer, l.downEvent, l, P);
                if (Z && Z.name === "drag" && function(W, ne) {
                  if (!ne)
                    return false;
                  var ae = ne.options.drag.startAxis;
                  return W === "xy" || ae === "xy" || ae === W;
                }(I, R) && xi.default.validateAction(Z, R, P, c, a))
                  return R;
              }
            }
          }; s.default.element(P); ) {
            var j = a.interactables.forEachMatch(P, k);
            if (j) {
              l.prepared.name = "drag", l.interactable = j, l.element = P;
              break;
            }
            P = (0, _.parentNode)(P);
          }
        }
      }
    } } };
    wa.default = Sm;
    var xa = {};
    function hl(i) {
      var a = i.prepared && i.prepared.name;
      if (!a)
        return null;
      var l = i.interactable.options;
      return l[a].hold || l[a].delay;
    }
    __name(hl, "hl");
    u(hl, "re"), Object.defineProperty(xa, "__esModule", { value: true }), xa.default = void 0;
    var Tm = { id: "auto-start/hold", install: function(i) {
      var a = i.defaults;
      i.usePlugin(xi.default), a.perAction.hold = 0, a.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var a = i.interaction, l = hl(a);
      l > 0 && (a.autoStartHoldTimer = setTimeout(function() {
        a.start(a.prepared, a.interactable, a.element);
      }, l));
    }, "interactions:move": function(i) {
      var a = i.interaction, l = i.duplicate;
      a.autoStartHoldTimer && a.pointerWasMoved && !l && (clearTimeout(a.autoStartHoldTimer), a.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var a = i.interaction;
      hl(a) > 0 && (a.prepared.name = null);
    } }, getHoldDuration: hl }, Cm = Tm;
    xa.default = Cm;
    var Ea = {};
    Object.defineProperty(Ea, "__esModule", { value: true }), Ea.default = void 0;
    var Om = { id: "auto-start", install: function(i) {
      i.usePlugin(xi.default), i.usePlugin(xa.default), i.usePlugin(wa.default);
    } };
    Ea.default = Om;
    var Ei = {};
    function Mm(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : s.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(Mm, "Mm");
    u(Mm, "ue");
    function Im(i) {
      var a = i.interaction, l = i.event;
      a.interactable && a.interactable.checkAndPreventDefault(l);
    }
    __name(Im, "Im");
    u(Im, "ce");
    function Sc(i) {
      var a = i.Interactable;
      a.prototype.preventDefault = Mm, a.prototype.checkAndPreventDefault = function(l) {
        return function(c, h, b) {
          var E = c.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (h.events.supportsPassive && /^touch(start|move)$/.test(b.type)) {
                var y = (0, r.getWindow)(b.target).document, x = h.getDocOptions(y);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(b.type) || s.default.element(b.target) && (0, _.matchesSelector)(b.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || b.preventDefault();
            } else
              b.preventDefault();
        }(this, i, l);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(l) {
        for (var c = 0; c < i.interactions.list.length; c++) {
          var h = i.interactions.list[c];
          if (h.element && (h.element === l.target || (0, _.nodeContains)(h.element, l.target)))
            return void h.interactable.checkAndPreventDefault(l);
        }
      } });
    }
    __name(Sc, "Sc");
    u(Sc, "fe"), Object.defineProperty(Ei, "__esModule", { value: true }), Ei.default = void 0, Ei.install = Sc;
    var Am = { id: "core/interactablePreventDefault", install: Sc, listeners: ["down", "move", "up", "cancel"].reduce(function(i, a) {
      return i["interactions:".concat(a)] = Im, i;
    }, {}) };
    Ei.default = Am;
    var ml = {};
    Object.defineProperty(ml, "__esModule", { value: true }), ml.default = void 0, ml.default = {};
    var lo, vl = {};
    Object.defineProperty(vl, "__esModule", { value: true }), vl.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(lo || (lo = {})), lo.touchAction, lo.boxSizing, lo.noListeners;
    var Pm = { id: "dev-tools", install: function() {
    } };
    vl.default = Pm;
    var Fn = {};
    Object.defineProperty(Fn, "__esModule", { value: true }), Fn.default = u(/* @__PURE__ */ __name(function i(a) {
      var l = {};
      for (var c in a) {
        var h = a[c];
        s.default.plainObject(h) ? l[c] = i(h) : s.default.array(h) ? l[c] = Pe.from(h) : l[c] = h;
      }
      return l;
    }, "i"), "t");
    var Un = {};
    function Tc(i, a) {
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
      }(i, a) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Cc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Cc(l, c) : void 0;
        }
      }(i, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Tc, "Tc");
    u(Tc, "be");
    function Cc(i, a) {
      (a == null || a > i.length) && (a = i.length);
      for (var l = 0, c = Array(a); l < a; l++)
        c[l] = i[l];
      return c;
    }
    __name(Cc, "Cc");
    u(Cc, "xe");
    function _m(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(_m, "_m");
    u(_m, "we");
    function Wn(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Wn, "Wn");
    u(Wn, "_e"), Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0, Un.getRectOffset = Oc;
    var zm = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Wn(this, "states", []), Wn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), Wn(this, "startDelta", void 0), Wn(this, "result", void 0), Wn(this, "endResult", void 0), Wn(this, "edges", void 0), Wn(this, "interaction", void 0), this.interaction = c, this.result = Sa();
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "start", value: function(c, h) {
        var b = c.phase, E = this.interaction, y = function(O) {
          var I = O.interactable.options[O.prepared.name], P = I.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(k) {
            var j = I[k];
            return j && j.enabled && { options: j, methods: j._methods };
          }).filter(function(k) {
            return !!k;
          });
        }(E);
        this.prepareStates(y), this.edges = (0, q.default)({}, E.edges), this.startOffset = Oc(E.rect, h), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: b, pageCoords: h, preEnd: false });
        return this.result = Sa(), this.startAll(x), this.result = this.setAll(x);
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
        for (var x = E ? this.states.slice(E) : this.states, O = Sa(c.coords, c.rect), I = 0; I < x.length; I++) {
          var P, k = x[I], j = k.options, R = (0, q.default)({}, c.coords), F = null;
          (P = k.methods) != null && P.set && this.shouldDo(j, b, h) && (c.state = k, F = k.methods.set(c), oe.addEdges(this.interaction.edges, c.rect, { x: c.coords.x - R.x, y: c.coords.y - R.y })), O.eventProps.push(F);
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
          var k = Tc([[y, O], [E, I]][P], 2), j = k[0], R = k[1];
          j.page.x += R.x, j.page.y += R.y, j.client.x += R.x, j.client.y += R.y;
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
            var I = O.options, P = O.methods, k = P.beforeEnd && P.beforeEnd(c);
            if (k)
              return this.endResult = k, false;
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
          for (var x = y.startDelta, O = y.result, I = O.delta, P = O.rectDelta, k = [[b.start, x], [b.cur, I]], j = 0; j < k.length; j++) {
            var R = Tc(k[j], 2), F = R[0], Z = R[1];
            F.page.x -= Z.x, F.page.y -= Z.y, F.client.x -= Z.x, F.client.y -= Z.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(c, h, b, E) {
        return !(!c || c.enabled === false || E && !c.endOnly || c.endOnly && !h || b === "start" && !c.setStart);
      } }, { key: "copyFrom", value: function(c) {
        this.startOffset = c.startOffset, this.startDelta = c.startDelta, this.edges = c.edges, this.states = c.states.map(function(h) {
          return (0, Fn.default)(h);
        }), this.result = Sa((0, q.default)({}, c.result.coords), (0, q.default)({}, c.result.rect));
      } }, { key: "destroy", value: function() {
        for (var c in this)
          this[c] = null;
      } }]) && _m(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    function Sa(i, a) {
      return { rect: a, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Sa, "Sa");
    u(Sa, "Oe");
    function Oc(i, a) {
      return i ? { left: a.x - i.left, top: a.y - i.top, right: i.right - a.x, bottom: i.bottom - a.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Oc, "Oc");
    u(Oc, "Ee"), Un.default = zm;
    var xt = {};
    function Ta(i) {
      var a = i.iEvent, l = i.interaction.modification.result;
      l && (a.modifiers = l.eventProps);
    }
    __name(Ta, "Ta");
    u(Ta, "Te"), Object.defineProperty(xt, "__esModule", { value: true }), xt.addEventModifiers = Ta, xt.default = void 0, xt.makeModifier = function(i, a) {
      var l = i.defaults, c = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, h = u(function(b) {
        var E = b || {};
        for (var y in E.enabled = E.enabled !== false, l)
          y in E || (E[y] = l[y]);
        var x = { options: E, methods: c, name: a, enable: function() {
          return E.enabled = true, x;
        }, disable: function() {
          return E.enabled = false, x;
        } };
        return x;
      }, "o");
      return a && typeof a == "string" && (h._defaults = l, h._methods = c), h;
    };
    var Rm = { id: "modifiers/base", before: ["actions"], install: function(i) {
      i.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(i) {
      var a = i.interaction;
      a.modification = new Un.default(a);
    }, "interactions:before-action-start": function(i) {
      var a = i.interaction.modification;
      a.start(i, i.interaction.coords.start.page), i.interaction.edges = a.edges, a.applyToInteraction(i);
    }, "interactions:before-action-move": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:before-action-end": function(i) {
      return i.interaction.modification.beforeEnd(i);
    }, "interactions:action-start": Ta, "interactions:action-move": Ta, "interactions:action-end": Ta, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } }, Dm = Rm;
    xt.default = Dm;
    var uo = {};
    Object.defineProperty(uo, "__esModule", { value: true }), uo.defaults = void 0, uo.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var co = {};
    function gl(i) {
      return gl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, gl(i);
    }
    __name(gl, "gl");
    u(gl, "De");
    function km(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(km, "km");
    u(km, "Ae");
    function bl(i, a) {
      return bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, bl(i, a);
    }
    __name(bl, "bl");
    u(bl, "ze");
    function Nm(i, a) {
      if (a && (gl(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return He(i);
    }
    __name(Nm, "Nm");
    u(Nm, "Ce");
    function He(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(He, "He");
    u(He, "Re");
    function Ca(i) {
      return Ca = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, Ca(i);
    }
    __name(Ca, "Ca");
    u(Ca, "Fe");
    function Ve(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Ve, "Ve");
    u(Ve, "Xe"), Object.defineProperty(co, "__esModule", { value: true }), co.InteractEvent = void 0;
    var Mc = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && bl(y, x);
      })(E, i);
      var a, l, c, h, b = (c = E, h = function() {
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
        var y, x = Ca(c);
        if (h) {
          var O = Ca(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Nm(this, y);
      });
      function E(y, x, O, I, P, k, j) {
        var R;
        (function(Fe, Se) {
          if (!(Fe instanceof Se))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Ve(He(R = b.call(this, y)), "relatedTarget", null), Ve(He(R), "screenX", void 0), Ve(He(R), "screenY", void 0), Ve(He(R), "button", void 0), Ve(He(R), "buttons", void 0), Ve(He(R), "ctrlKey", void 0), Ve(He(R), "shiftKey", void 0), Ve(He(R), "altKey", void 0), Ve(He(R), "metaKey", void 0), Ve(He(R), "page", void 0), Ve(He(R), "client", void 0), Ve(He(R), "delta", void 0), Ve(He(R), "rect", void 0), Ve(He(R), "x0", void 0), Ve(He(R), "y0", void 0), Ve(He(R), "t0", void 0), Ve(He(R), "dt", void 0), Ve(He(R), "duration", void 0), Ve(He(R), "clientX0", void 0), Ve(He(R), "clientY0", void 0), Ve(He(R), "velocity", void 0), Ve(He(R), "speed", void 0), Ve(He(R), "swipe", void 0), Ve(He(R), "axes", void 0), Ve(He(R), "preEnd", void 0), P = P || y.element;
        var F = y.interactable, Z = (F && F.options || uo.defaults).deltaSource, W = (0, _e.default)(F, P, O), ne = I === "start", ae = I === "end", ye = ne ? He(R) : y.prevEvent, Re = ne ? y.coords.start : ae ? { page: ye.page, client: ye.client, timeStamp: y.coords.cur.timeStamp } : y.coords.cur;
        return R.page = (0, q.default)({}, Re.page), R.client = (0, q.default)({}, Re.client), R.rect = (0, q.default)({}, y.rect), R.timeStamp = Re.timeStamp, ae || (R.page.x -= W.x, R.page.y -= W.y, R.client.x -= W.x, R.client.y -= W.y), R.ctrlKey = x.ctrlKey, R.altKey = x.altKey, R.shiftKey = x.shiftKey, R.metaKey = x.metaKey, R.button = x.button, R.buttons = x.buttons, R.target = P, R.currentTarget = P, R.preEnd = k, R.type = j || O + (I || ""), R.interactable = F, R.t0 = ne ? y.pointers[y.pointers.length - 1].downTime : ye.t0, R.x0 = y.coords.start.page.x - W.x, R.y0 = y.coords.start.page.y - W.y, R.clientX0 = y.coords.start.client.x - W.x, R.clientY0 = y.coords.start.client.y - W.y, R.delta = ne || ae ? { x: 0, y: 0 } : { x: R[Z].x - ye[Z].x, y: R[Z].y - ye[Z].y }, R.dt = y.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, q.default)({}, y.coords.velocity[Z]), R.speed = (0, Qe.default)(R.velocity.x, R.velocity.y), R.swipe = ae || I === "inertiastart" ? R.getSwipe() : null, R;
      }
      __name(E, "E");
      return u(E, "a"), a = E, (l = [{ key: "getSwipe", value: function() {
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
      } }]) && km(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    co.InteractEvent = Mc, Object.defineProperties(Mc.prototype, { pageX: { get: function() {
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
    var po = {};
    function Ic(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Ic, "Ic");
    u(Ic, "We");
    function Gm(i, a, l) {
      return a && Ic(i.prototype, a), l && Ic(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Gm, "Gm");
    u(Gm, "Le");
    function fo(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(fo, "fo");
    u(fo, "Ue"), Object.defineProperty(po, "__esModule", { value: true }), po.PointerInfo = void 0;
    var Lm = Gm(u(/* @__PURE__ */ __name(function i(a, l, c, h, b) {
      (function(E, y) {
        if (!(E instanceof y))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), fo(this, "id", void 0), fo(this, "pointer", void 0), fo(this, "event", void 0), fo(this, "downTime", void 0), fo(this, "downTarget", void 0), this.id = a, this.pointer = l, this.event = c, this.downTime = h, this.downTarget = b;
    }, "i"), "t"));
    po.PointerInfo = Lm;
    var Oa, Ma, Ft = {};
    function jm(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(jm, "jm");
    u(jm, "$e");
    function Ke(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Ke, "Ke");
    u(Ke, "He"), Object.defineProperty(Ft, "__esModule", { value: true }), Ft.Interaction = void 0, Object.defineProperty(Ft, "PointerInfo", { enumerable: true, get: function() {
      return po.PointerInfo;
    } }), Ft.default = Ft._ProxyValues = Ft._ProxyMethods = void 0, Ft._ProxyValues = Oa, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(Oa || (Ft._ProxyValues = Oa = {})), Ft._ProxyMethods = Ma, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(Ma || (Ft._ProxyMethods = Ma = {}));
    var Bm = 0, Ac = function() {
      function i(c) {
        var h = this, b = c.pointerType, E = c.scopeFire;
        (function(k, j) {
          if (!(k instanceof j))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ke(this, "interactable", null), Ke(this, "element", null), Ke(this, "rect", null), Ke(this, "_rects", void 0), Ke(this, "edges", null), Ke(this, "_scopeFire", void 0), Ke(this, "prepared", { name: null, axis: null, edges: null }), Ke(this, "pointerType", void 0), Ke(this, "pointers", []), Ke(this, "downEvent", null), Ke(this, "downPointer", {}), Ke(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Ke(this, "prevEvent", null), Ke(this, "pointerIsDown", false), Ke(this, "pointerWasMoved", false), Ke(this, "_interacting", false), Ke(this, "_ending", false), Ke(this, "_stopped", true), Ke(this, "_proxy", null), Ke(this, "simulation", null), Ke(this, "doMove", (0, ar.warnOnce)(function(k) {
          this.move(k);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Ke(this, "coords", { start: Q.newCoords(), prev: Q.newCoords(), cur: Q.newCoords(), delta: Q.newCoords(), velocity: Q.newCoords() }), Ke(this, "_id", Bm++), this._scopeFire = E, this.pointerType = b;
        var y = this;
        this._proxy = {};
        var x = u(function(k) {
          Object.defineProperty(h._proxy, k, { get: function() {
            return y[k];
          } });
        }, "a");
        for (var O in Oa)
          x(O);
        var I = u(function(k) {
          Object.defineProperty(h._proxy, k, { value: function() {
            return y[k].apply(y, arguments);
          } });
        }, "l");
        for (var P in Ma)
          I(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, l = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(c, h, b) {
        var E = this.updatePointer(c, h, b, true), y = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: c, event: h, eventTarget: b, pointerIndex: E, pointerInfo: y, type: "down", interaction: this });
      } }, { key: "start", value: function(c, h, b) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (c.name === "gesture" ? 2 : 1) || !h.options[c.name].enabled) && ((0, ar.copyAction)(this.prepared, c), this.interactable = h, this.element = b, this.rect = h.getRect(b), this.edges = this.prepared.edges ? (0, q.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(c, h, b) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(c, h, b, false);
        var E, y, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, y = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Qe.default)(E, y) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(c), I = { pointer: c, pointerIndex: O, pointerInfo: this.pointers[O], event: h, type: "move", eventTarget: b, dx: E, dy: y, duplicate: x, interaction: this };
        x || Q.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), x || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && Q.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(c) {
        c && c.event || Q.setZeroCoords(this.coords.delta), (c = (0, q.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, c || {})).phase = "move", this._doPhase(c);
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
        var h = Q.getPointerId(c);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Pe.findIndex(this.pointers, function(b) {
          return b.id === h;
        });
      } }, { key: "getPointerInfo", value: function(c) {
        return this.pointers[this.getPointerIndex(c)];
      } }, { key: "updatePointer", value: function(c, h, b, E) {
        var y = Q.getPointerId(c), x = this.getPointerIndex(c), O = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(h.type)), O ? O.pointer = c : (O = new po.PointerInfo(y, c, h, null, null), x = this.pointers.length, this.pointers.push(O)), Q.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
        }), this._now()), Q.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, O.downTime = this.coords.cur.timeStamp, O.downTarget = b, Q.pointerExtend(this.downPointer, c), this.interacting() || (Q.copyCoords(this.coords.start, this.coords.cur), Q.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = h, this.pointerWasMoved = false)), this._updateLatestPointer(c, h, b), this._scopeFire("interactions:update-pointer", { pointer: c, event: h, eventTarget: b, down: E, pointerInfo: O, pointerIndex: x, interaction: this }), x;
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
        return new co.InteractEvent(this, c, this.prepared.name, h, this.element, b, E);
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
      } }], l && jm(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    Ft.Interaction = Ac;
    var Hm = Ac;
    Ft.default = Hm;
    var Vn = {};
    function Pc(i) {
      i.pointerIsDown && (wl(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(Pc, "Pc");
    u(Pc, "tn");
    function _c(i) {
      yl(i.interaction);
    }
    __name(_c, "_c");
    u(_c, "en");
    function yl(i) {
      if (!function(l) {
        return !(!l.offset.pending.x && !l.offset.pending.y);
      }(i))
        return false;
      var a = i.offset.pending;
      return wl(i.coords.cur, a), wl(i.coords.delta, a), oe.addEdges(i.edges, i.rect, a), a.x = 0, a.y = 0, true;
    }
    __name(yl, "yl");
    u(yl, "nn");
    function $m(i) {
      var a = i.x, l = i.y;
      this.offset.pending.x += a, this.offset.pending.y += l, this.offset.total.x += a, this.offset.total.y += l;
    }
    __name($m, "$m");
    u($m, "rn");
    function wl(i, a) {
      var l = i.page, c = i.client, h = a.x, b = a.y;
      l.x += h, l.y += b, c.x += h, c.y += b;
    }
    __name(wl, "wl");
    u(wl, "on"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.addTotal = Pc, Vn.applyPending = yl, Vn.default = void 0, Ft._ProxyMethods.offsetBy = "";
    var qm = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = $m;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return Pc(i.interaction);
    }, "interactions:before-action-start": _c, "interactions:before-action-move": _c, "interactions:before-action-end": function(i) {
      var a = i.interaction;
      if (yl(a))
        return a.move({ offset: true }), a.end(), false;
    }, "interactions:stop": function(i) {
      var a = i.interaction;
      a.offset.total.x = 0, a.offset.total.y = 0, a.offset.pending.x = 0, a.offset.pending.y = 0;
    } } }, Fm = qm;
    Vn.default = Fm;
    var Si = {};
    function Um(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Um, "Um");
    u(Um, "un");
    function gt(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(gt, "gt");
    u(gt, "cn"), Object.defineProperty(Si, "__esModule", { value: true }), Si.default = Si.InertiaState = void 0;
    var zc = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), gt(this, "active", false), gt(this, "isModified", false), gt(this, "smoothEnd", false), gt(this, "allowResume", false), gt(this, "modification", void 0), gt(this, "modifierCount", 0), gt(this, "modifierArg", void 0), gt(this, "startCoords", void 0), gt(this, "t0", 0), gt(this, "v0", 0), gt(this, "te", 0), gt(this, "targetOffset", void 0), gt(this, "modifiedOffset", void 0), gt(this, "currentOffset", void 0), gt(this, "lambda_v0", 0), gt(this, "one_ve_v0", 0), gt(this, "timeout", void 0), gt(this, "interaction", void 0), this.interaction = c;
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "start", value: function(c) {
        var h = this.interaction, b = Ia(h);
        if (!b || !b.enabled)
          return false;
        var E = h.coords.velocity.client, y = (0, Qe.default)(E.x, E.y), x = this.modification || (this.modification = new Un.default(h));
        if (x.copyFrom(h.modification), this.t0 = h._now(), this.allowResume = b.allowResume, this.v0 = y, this.currentOffset = { x: 0, y: 0 }, this.startCoords = h.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - h.coords.cur.timeStamp < 50 && y > b.minSpeed && y > b.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return h.modification.result.rect = null, h.offsetBy(this.targetOffset), h._doPhase({ interaction: h, event: c, phase: "inertiastart" }), h.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), h.modification.result.rect = null, this.active = true, h.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var c = this, h = this.interaction.coords.velocity.client, b = Ia(this.interaction), E = b.resistance, y = -Math.log(b.endSpeed / this.v0) / E;
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
        var c, h, b, E, y, x = this, O = this.interaction, I = Ia(O).resistance, P = (O._now() - this.t0) / 1e3;
        if (P < this.te) {
          var k, j = 1 - (Math.exp(-I * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (c = this.targetOffset.x, h = this.targetOffset.y, b = this.modifiedOffset.x, E = this.modifiedOffset.y, k = { x: Rc(y = j, 0, c, b), y: Rc(y, 0, h, E) }) : k = { x: this.targetOffset.x * j, y: this.targetOffset.y * j };
          var R = { x: k.x - this.currentOffset.x, y: k.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, O.offsetBy(R), O.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          O.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var c = this, h = this.interaction, b = h._now() - this.t0, E = Ia(h).smoothEndDuration;
        if (b < E) {
          var y = { x: Dc(b, 0, this.targetOffset.x, E), y: Dc(b, 0, this.targetOffset.y, E) }, x = { x: y.x - this.currentOffset.x, y: y.y - this.currentOffset.y };
          this.currentOffset.x += x.x, this.currentOffset.y += x.y, h.offsetBy(x), h.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return c.smoothEndTick();
          });
        } else
          h.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(c) {
        var h = c.pointer, b = c.event, E = c.eventTarget, y = this.interaction;
        y.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), y.updatePointer(h, b, E, true), y._doPhase({ interaction: y, event: b, phase: "resume" }), (0, Q.copyCoords)(y.coords.prev, y.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, At.default.cancel(this.timeout);
      } }]) && Um(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    function Ia(i) {
      var a = i.interactable, l = i.prepared;
      return a && a.options && l.name && a.options[l.name].inertia;
    }
    __name(Ia, "Ia");
    u(Ia, "dn"), Si.InertiaState = zc;
    var Wm = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var a = i.defaults;
      i.usePlugin(Vn.default), i.usePlugin(xt.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, a.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var a = i.interaction;
      a.inertia = new zc(a);
    }, "interactions:before-action-end": function(i) {
      var a = i.interaction, l = i.event;
      return (!a._interacting || a.simulation || !a.inertia.start(l)) && null;
    }, "interactions:down": function(i) {
      var a = i.interaction, l = i.eventTarget, c = a.inertia;
      if (c.active)
        for (var h = l; s.default.element(h); ) {
          if (h === a.element) {
            c.resume(i);
            break;
          }
          h = _.parentNode(h);
        }
    }, "interactions:stop": function(i) {
      var a = i.interaction.inertia;
      a.active && a.stop();
    }, "interactions:before-action-resume": function(i) {
      var a = i.interaction.modification;
      a.stop(i), a.start(i, i.interaction.coords.cur.page), a.applyToInteraction(i);
    }, "interactions:before-action-inertiastart": function(i) {
      return i.interaction.modification.setAndApply(i);
    }, "interactions:action-resume": xt.addEventModifiers, "interactions:action-inertiastart": xt.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-resume": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    } } };
    function Rc(i, a, l, c) {
      var h = 1 - i;
      return h * h * a + 2 * h * i * l + i * i * c;
    }
    __name(Rc, "Rc");
    u(Rc, "vn");
    function Dc(i, a, l, c) {
      return -l * (i /= c) * (i - 2) + a;
    }
    __name(Dc, "Dc");
    u(Dc, "hn");
    var Vm = Wm;
    Si.default = Vm;
    var ho = {};
    function Ym(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Ym, "Ym");
    u(Ym, "mn");
    function mo(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(mo, "mo");
    u(mo, "bn");
    function kc(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (i.immediatePropagationStopped)
          break;
        c(i);
      }
    }
    __name(kc, "kc");
    u(kc, "xn"), Object.defineProperty(ho, "__esModule", { value: true }), ho.Eventable = void 0;
    var Xm = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), mo(this, "options", void 0), mo(this, "types", {}), mo(this, "propagationStopped", false), mo(this, "immediatePropagationStopped", false), mo(this, "global", void 0), this.options = (0, q.default)({}, c || {});
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "fire", value: function(c) {
        var h, b = this.global;
        (h = this.types[c.type]) && kc(c, h), !c.propagationStopped && b && (h = b[c.type]) && kc(c, h);
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
      } }]) && Ym(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    ho.Eventable = Xm;
    var vo = {};
    Object.defineProperty(vo, "__esModule", { value: true }), vo.default = function(i, a) {
      if (a.phaselessTypes[i])
        return true;
      for (var l in a.map)
        if (i.indexOf(l) === 0 && i.substr(l.length) in a.phases)
          return true;
      return false;
    };
    var xl = {};
    Object.defineProperty(xl, "__esModule", { value: true }), xl.createInteractStatic = function(i) {
      var a = u(/* @__PURE__ */ __name(function l(c, h) {
        var b = i.interactables.get(c, h);
        return b || ((b = i.interactables.new(c, h)).events.global = l.globalEvents), b;
      }, "l"), "e");
      return a.getPointerAverage = Q.pointerAverage, a.getTouchBBox = Q.touchBBox, a.getTouchDistance = Q.touchDistance, a.getTouchAngle = Q.touchAngle, a.getElementRect = _.getElementRect, a.getElementClientRect = _.getElementClientRect, a.matchesSelector = _.matchesSelector, a.closest = _.closest, a.globalEvents = {}, a.version = "1.10.14", a.scope = i, a.use = function(l, c) {
        return this.scope.usePlugin(l, c), this;
      }, a.isSet = function(l, c) {
        return !!this.scope.interactables.get(l, c && c.context);
      }, a.on = (0, ar.warnOnce)(function(l, c, h) {
        if (s.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), s.default.array(l)) {
          for (var b = 0; b < l.length; b++) {
            var E = l[b];
            this.on(E, c, h);
          }
          return this;
        }
        if (s.default.object(l)) {
          for (var y in l)
            this.on(y, l[y], c);
          return this;
        }
        return (0, vo.default)(l, this.scope.actions) ? this.globalEvents[l] ? this.globalEvents[l].push(c) : this.globalEvents[l] = [c] : this.scope.events.add(this.scope.document, l, c, { options: h }), this;
      }, "The interact.on() method is being deprecated"), a.off = (0, ar.warnOnce)(function(l, c, h) {
        if (s.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), s.default.array(l)) {
          for (var b = 0; b < l.length; b++) {
            var E = l[b];
            this.off(E, c, h);
          }
          return this;
        }
        if (s.default.object(l)) {
          for (var y in l)
            this.off(y, l[y], c);
          return this;
        }
        var x;
        return (0, vo.default)(l, this.scope.actions) ? l in this.globalEvents && (x = this.globalEvents[l].indexOf(c)) !== -1 && this.globalEvents[l].splice(x, 1) : this.scope.events.remove(this.scope.document, l, c, h), this;
      }, "The interact.off() method is being deprecated"), a.debug = function() {
        return this.scope;
      }, a.supportsTouch = function() {
        return $.default.supportsTouch;
      }, a.supportsPointerEvent = function() {
        return $.default.supportsPointerEvent;
      }, a.stop = function() {
        for (var l = 0; l < this.scope.interactions.list.length; l++)
          this.scope.interactions.list[l].stop();
        return this;
      }, a.pointerMoveTolerance = function(l) {
        return s.default.number(l) ? (this.scope.interactions.pointerMoveTolerance = l, this) : this.scope.interactions.pointerMoveTolerance;
      }, a.addDocument = function(l, c) {
        this.scope.addDocument(l, c);
      }, a.removeDocument = function(l) {
        this.scope.removeDocument(l);
      }, a;
    };
    var Aa = {};
    function Zm(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Zm, "Zm");
    u(Zm, "En");
    function Zr(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Zr, "Zr");
    u(Zr, "Sn"), Object.defineProperty(Aa, "__esModule", { value: true }), Aa.Interactable = void 0;
    var Km = function() {
      function i(c, h, b, E) {
        (function(y, x) {
          if (!(y instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Zr(this, "options", void 0), Zr(this, "_actions", void 0), Zr(this, "target", void 0), Zr(this, "events", new ho.Eventable()), Zr(this, "_context", void 0), Zr(this, "_win", void 0), Zr(this, "_doc", void 0), Zr(this, "_scopeEvents", void 0), Zr(this, "_rectChecker", void 0), this._actions = h.actions, this.target = c, this._context = h.context || b, this._win = (0, r.getWindow)((0, _.trySelector)(c) ? this._context : c), this._doc = this._win.document, this._scopeEvents = E, this.set(h);
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(c, h) {
        return s.default.func(h.onstart) && this.on("".concat(c, "start"), h.onstart), s.default.func(h.onmove) && this.on("".concat(c, "move"), h.onmove), s.default.func(h.onend) && this.on("".concat(c, "end"), h.onend), s.default.func(h.oninertiastart) && this.on("".concat(c, "inertiastart"), h.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(c, h, b) {
        (s.default.array(h) || s.default.object(h)) && this.off(c, h), (s.default.array(b) || s.default.object(b)) && this.on(c, b);
      } }, { key: "setPerAction", value: function(c, h) {
        var b = this._defaults;
        for (var E in h) {
          var y = E, x = this.options[c], O = h[y];
          y === "listeners" && this.updatePerActionListeners(c, x.listeners, O), s.default.array(O) ? x[y] = Pe.from(O) : s.default.plainObject(O) ? (x[y] = (0, q.default)(x[y] || {}, (0, Fn.default)(O)), s.default.object(b.perAction[y]) && "enabled" in b.perAction[y] && (x[y].enabled = O.enabled !== false)) : s.default.bool(O) && s.default.object(b.perAction[y]) ? x[y].enabled = O : x[y] = O;
        }
      } }, { key: "getRect", value: function(c) {
        return c = c || (s.default.element(this.target) ? this.target : null), s.default.string(this.target) && (c = c || this._context.querySelector(this.target)), (0, _.getElementRect)(c);
      } }, { key: "rectChecker", value: function(c) {
        var h = this;
        return s.default.func(c) ? (this._rectChecker = c, this.getRect = function(b) {
          var E = (0, q.default)({}, h._rectChecker(b));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : c === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(c, h) {
        if ((0, _.trySelector)(h) || s.default.object(h)) {
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
        return this._context === c.ownerDocument || (0, _.nodeContains)(this._context, c);
      } }, { key: "testIgnoreAllow", value: function(c, h, b) {
        return !this.testIgnore(c.ignoreFrom, h, b) && this.testAllow(c.allowFrom, h, b);
      } }, { key: "testAllow", value: function(c, h, b) {
        return !c || !!s.default.element(b) && (s.default.string(c) ? (0, _.matchesUpTo)(b, c, h) : !!s.default.element(c) && (0, _.nodeContains)(c, b));
      } }, { key: "testIgnore", value: function(c, h, b) {
        return !(!c || !s.default.element(b)) && (s.default.string(c) ? (0, _.matchesUpTo)(b, c, h) : !!s.default.element(c) && (0, _.nodeContains)(c, b));
      } }, { key: "fire", value: function(c) {
        return this.events.fire(c), this;
      } }, { key: "_onOff", value: function(c, h, b, E) {
        s.default.object(h) && !s.default.array(h) && (E = b, b = null);
        var y = c === "on" ? "add" : "remove", x = (0, Ae.default)(h, b);
        for (var O in x) {
          O === "wheel" && (O = $.default.wheelEvent);
          for (var I = 0; I < x[O].length; I++) {
            var P = x[O][I];
            (0, vo.default)(O, this._actions) ? this.events[c](O, P) : s.default.string(this.target) ? this._scopeEvents["".concat(y, "Delegate")](this.target, this._context, O, P, E) : this._scopeEvents[y](this.target, O, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(c, h, b) {
        return this._onOff("on", c, h, b);
      } }, { key: "off", value: function(c, h, b) {
        return this._onOff("off", c, h, b);
      } }, { key: "set", value: function(c) {
        var h = this._defaults;
        for (var b in s.default.object(c) || (c = {}), this.options = (0, Fn.default)(h.base), this._actions.methodDict) {
          var E = b, y = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, q.default)((0, q.default)({}, h.perAction), h.actions[E])), this[y](c[E]);
        }
        for (var x in c)
          s.default.func(this[x]) && this[x](c[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (s.default.string(this.target))
          for (var c in this._scopeEvents.delegatedEvents)
            for (var h = this._scopeEvents.delegatedEvents[c], b = h.length - 1; b >= 0; b--) {
              var E = h[b], y = E.selector, x = E.context, O = E.listeners;
              y === this.target && x === this._context && h.splice(b, 1);
              for (var I = O.length - 1; I >= 0; I--)
                this._scopeEvents.removeDelegate(this.target, this._context, c, O[I][0], O[I][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Zm(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    Aa.Interactable = Km;
    var Pa = {};
    function Qm(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Qm, "Qm");
    u(Qm, "Mn");
    function El(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(El, "El");
    u(El, "kn"), Object.defineProperty(Pa, "__esModule", { value: true }), Pa.InteractableSet = void 0;
    var Jm = function() {
      function i(c) {
        var h = this;
        (function(b, E) {
          if (!(b instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), El(this, "list", []), El(this, "selectorMap", {}), El(this, "scope", void 0), this.scope = c, c.addListeners({ "interactable:unset": function(b) {
          var E = b.interactable, y = E.target, x = E._context, O = s.default.string(y) ? h.selectorMap[y] : y[h.scope.id], I = Pe.findIndex(O, function(P) {
            return P.context === x;
          });
          O[I] && (O[I].context = null, O[I].interactable = null), O.splice(I, 1);
        } });
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "new", value: function(c, h) {
        h = (0, q.default)(h || {}, { actions: this.scope.actions });
        var b = new this.scope.Interactable(c, h, this.scope.document, this.scope.events), E = { context: b._context, interactable: b };
        return this.scope.addDocument(b._doc), this.list.push(b), s.default.string(c) ? (this.selectorMap[c] || (this.selectorMap[c] = []), this.selectorMap[c].push(E)) : (b.target[this.scope.id] || Object.defineProperty(c, this.scope.id, { value: [], configurable: true }), c[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: c, options: h, interactable: b, win: this.scope._win }), b;
      } }, { key: "get", value: function(c, h) {
        var b = h && h.context || this.scope.document, E = s.default.string(c), y = E ? this.selectorMap[c] : c[this.scope.id];
        if (!y)
          return null;
        var x = Pe.find(y, function(O) {
          return O.context === b && (E || O.interactable.inContext(c));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(c, h) {
        for (var b = 0; b < this.list.length; b++) {
          var E = this.list[b], y = void 0;
          if ((s.default.string(E.target) ? s.default.element(c) && _.matchesSelector(c, E.target) : c === E.target) && E.inContext(c) && (y = h(E)), y !== void 0)
            return y;
        }
      } }]) && Qm(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    Pa.InteractableSet = Jm;
    var _a = {};
    function ev(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(ev, "ev");
    u(ev, "An");
    function Sl(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Sl, "Sl");
    u(Sl, "zn");
    function Tl(i, a) {
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
      }(i, a) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Nc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Nc(l, c) : void 0;
        }
      }(i, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Tl, "Tl");
    u(Tl, "Cn");
    function Nc(i, a) {
      (a == null || a > i.length) && (a = i.length);
      for (var l = 0, c = Array(a); l < a; l++)
        c[l] = i[l];
      return c;
    }
    __name(Nc, "Nc");
    u(Nc, "Rn"), Object.defineProperty(_a, "__esModule", { value: true }), _a.default = void 0;
    var tv = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Sl(this, "currentTarget", void 0), Sl(this, "originalEvent", void 0), Sl(this, "type", void 0), this.originalEvent = c, (0, Ye.default)(this, c);
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && ev(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
    }();
    function go(i) {
      if (!s.default.object(i))
        return { capture: !!i, passive: false };
      var a = (0, q.default)({}, i);
      return a.capture = !!i.capture, a.passive = !!i.passive, a;
    }
    __name(go, "go");
    u(go, "Xn");
    var rv = { id: "events", install: function(i) {
      var a, l = [], c = {}, h = [], b = { add: E, remove: y, addDelegate: function(I, P, k, j, R) {
        var F = go(R);
        if (!c[k]) {
          c[k] = [];
          for (var Z = 0; Z < h.length; Z++) {
            var W = h[Z];
            E(W, k, x), E(W, k, O, true);
          }
        }
        var ne = c[k], ae = Pe.find(ne, function(ye) {
          return ye.selector === I && ye.context === P;
        });
        ae || (ae = { selector: I, context: P, listeners: [] }, ne.push(ae)), ae.listeners.push([j, F]);
      }, removeDelegate: function(I, P, k, j, R) {
        var F, Z = go(R), W = c[k], ne = false;
        if (W)
          for (F = W.length - 1; F >= 0; F--) {
            var ae = W[F];
            if (ae.selector === I && ae.context === P) {
              for (var ye = ae.listeners, Re = ye.length - 1; Re >= 0; Re--) {
                var Fe = Tl(ye[Re], 2), Se = Fe[0], $e = Fe[1], gr = $e.capture, Qr = $e.passive;
                if (Se === j && gr === Z.capture && Qr === Z.passive) {
                  ye.splice(Re, 1), ye.length || (W.splice(F, 1), y(P, k, x), y(P, k, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: O, delegatedEvents: c, documents: h, targets: l, supportsOptions: false, supportsPassive: false };
      function E(I, P, k, j) {
        var R = go(j), F = Pe.find(l, function(Z) {
          return Z.eventTarget === I;
        });
        F || (F = { eventTarget: I, events: {} }, l.push(F)), F.events[P] || (F.events[P] = []), I.addEventListener && !Pe.contains(F.events[P], k) && (I.addEventListener(P, k, b.supportsOptions ? R : R.capture), F.events[P].push(k));
      }
      __name(E, "E");
      u(E, "s");
      function y(I, P, k, j) {
        var R = go(j), F = Pe.findIndex(l, function(Re) {
          return Re.eventTarget === I;
        }), Z = l[F];
        if (Z && Z.events)
          if (P !== "all") {
            var W = false, ne = Z.events[P];
            if (ne) {
              if (k === "all") {
                for (var ae = ne.length - 1; ae >= 0; ae--)
                  y(I, P, ne[ae], R);
                return;
              }
              for (var ye = 0; ye < ne.length; ye++)
                if (ne[ye] === k) {
                  I.removeEventListener(P, k, b.supportsOptions ? R : R.capture), ne.splice(ye, 1), ne.length === 0 && (delete Z.events[P], W = true);
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
        for (var k = go(P), j = new tv(I), R = c[I.type], F = Tl(Q.getEventTargets(I), 1)[0], Z = F; s.default.element(Z); ) {
          for (var W = 0; W < R.length; W++) {
            var ne = R[W], ae = ne.selector, ye = ne.context;
            if (_.matchesSelector(Z, ae) && _.nodeContains(ye, F) && _.nodeContains(ye, Z)) {
              var Re = ne.listeners;
              j.currentTarget = Z;
              for (var Fe = 0; Fe < Re.length; Fe++) {
                var Se = Tl(Re[Fe], 2), $e = Se[0], gr = Se[1], Qr = gr.capture, Fl = gr.passive;
                Qr === k.capture && Fl === k.passive && $e(j);
              }
            }
          }
          Z = _.parentNode(Z);
        }
      }
      __name(x, "x");
      u(x, "u");
      function O(I) {
        return x(I, true);
      }
      __name(O, "O");
      return u(O, "c"), (a = i.document) == null || a.createElement("div").addEventListener("test", null, { get capture() {
        return b.supportsOptions = true;
      }, get passive() {
        return b.supportsPassive = true;
      } }), i.events = b, b;
    } };
    _a.default = rv;
    var za = {};
    Object.defineProperty(za, "__esModule", { value: true }), za.default = void 0;
    var Ra = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(i) {
      for (var a = 0; a < Ra.methodOrder.length; a++) {
        var l;
        l = Ra.methodOrder[a];
        var c = Ra[l](i);
        if (c)
          return c;
      }
      return null;
    }, simulationResume: function(i) {
      var a = i.pointerType, l = i.eventType, c = i.eventTarget, h = i.scope;
      if (!/down|start/i.test(l))
        return null;
      for (var b = 0; b < h.interactions.list.length; b++) {
        var E = h.interactions.list[b], y = c;
        if (E.simulation && E.simulation.allowResume && E.pointerType === a)
          for (; y; ) {
            if (y === E.element)
              return E;
            y = _.parentNode(y);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var a, l = i.pointerId, c = i.pointerType, h = i.eventType, b = i.scope;
      if (c !== "mouse" && c !== "pen")
        return null;
      for (var E = 0; E < b.interactions.list.length; E++) {
        var y = b.interactions.list[E];
        if (y.pointerType === c) {
          if (y.simulation && !Gc(y, l))
            continue;
          if (y.interacting())
            return y;
          a || (a = y);
        }
      }
      if (a)
        return a;
      for (var x = 0; x < b.interactions.list.length; x++) {
        var O = b.interactions.list[x];
        if (!(O.pointerType !== c || /down/i.test(h) && O.simulation))
          return O;
      }
      return null;
    }, hasPointer: function(i) {
      for (var a = i.pointerId, l = i.scope, c = 0; c < l.interactions.list.length; c++) {
        var h = l.interactions.list[c];
        if (Gc(h, a))
          return h;
      }
      return null;
    }, idle: function(i) {
      for (var a = i.pointerType, l = i.scope, c = 0; c < l.interactions.list.length; c++) {
        var h = l.interactions.list[c];
        if (h.pointers.length === 1) {
          var b = h.interactable;
          if (b && (!b.options.gesture || !b.options.gesture.enabled))
            continue;
        } else if (h.pointers.length >= 2)
          continue;
        if (!h.interacting() && a === h.pointerType)
          return h;
      }
      return null;
    } };
    function Gc(i, a) {
      return i.pointers.some(function(l) {
        return l.id === a;
      });
    }
    __name(Gc, "Gc");
    u(Gc, "Ln");
    var nv = Ra;
    za.default = nv;
    var Da = {};
    function Cl(i) {
      return Cl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Cl(i);
    }
    __name(Cl, "Cl");
    u(Cl, "Nn");
    function Lc(i, a) {
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
      }(i, a) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return jc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? jc(l, c) : void 0;
        }
      }(i, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Lc, "Lc");
    u(Lc, "qn");
    function jc(i, a) {
      (a == null || a > i.length) && (a = i.length);
      for (var l = 0, c = Array(a); l < a; l++)
        c[l] = i[l];
      return c;
    }
    __name(jc, "jc");
    u(jc, "Gn");
    function iv(i, a) {
      if (!(i instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(iv, "iv");
    u(iv, "$n");
    function ov(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(ov, "ov");
    u(ov, "Hn");
    function Ol(i, a) {
      return Ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Ol(i, a);
    }
    __name(Ol, "Ol");
    u(Ol, "Kn");
    function av(i, a) {
      if (a && (Cl(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(av, "av");
    u(av, "Zn");
    function ka(i) {
      return ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, ka(i);
    }
    __name(ka, "ka");
    u(ka, "Jn"), Object.defineProperty(Da, "__esModule", { value: true }), Da.default = void 0;
    var Ml = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Bc(i, a) {
      return function(l) {
        var c = a.interactions.list, h = Q.getPointerType(l), b = Lc(Q.getEventTargets(l), 2), E = b[0], y = b[1], x = [];
        if (/^touch/.test(l.type)) {
          a.prevTouchTime = a.now();
          for (var O = 0; O < l.changedTouches.length; O++) {
            var I = l.changedTouches[O], P = { pointer: I, pointerId: Q.getPointerId(I), pointerType: h, eventType: l.type, eventTarget: E, curEventTarget: y, scope: a }, k = Hc(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, k]);
          }
        } else {
          var j = false;
          if (!$.default.supportsPointerEvent && /mouse/.test(l.type)) {
            for (var R = 0; R < c.length && !j; R++)
              j = c[R].pointerType !== "mouse" && c[R].pointerIsDown;
            j = j || a.now() - a.prevTouchTime < 500 || l.timeStamp === 0;
          }
          if (!j) {
            var F = { pointer: l, pointerId: Q.getPointerId(l), pointerType: h, eventType: l.type, curEventTarget: y, eventTarget: E, scope: a }, Z = Hc(F);
            x.push([F.pointer, F.eventTarget, F.curEventTarget, Z]);
          }
        }
        for (var W = 0; W < x.length; W++) {
          var ne = Lc(x[W], 4), ae = ne[0], ye = ne[1], Re = ne[2];
          ne[3][i](ae, l, ye, Re);
        }
      };
    }
    __name(Bc, "Bc");
    u(Bc, "tr");
    function Hc(i) {
      var a = i.pointerType, l = i.scope, c = { interaction: za.default.search(i), searchDetails: i };
      return l.fire("interactions:find", c), c.interaction || l.interactions.new({ pointerType: a });
    }
    __name(Hc, "Hc");
    u(Hc, "er");
    function Il(i, a) {
      var l = i.doc, c = i.scope, h = i.options, b = c.interactions.docEvents, E = c.events, y = E[a];
      for (var x in c.browser.isIOS && !h.events && (h.events = { passive: false }), E.delegatedEvents)
        y(l, x, E.delegateListener), y(l, x, E.delegateUseCapture, true);
      for (var O = h && h.events, I = 0; I < b.length; I++) {
        var P = b[I];
        y(l, P.type, P.listener, O);
      }
    }
    __name(Il, "Il");
    u(Il, "nr");
    var sv = { id: "core/interactions", install: function(i) {
      for (var a = {}, l = 0; l < Ml.length; l++) {
        var c = Ml[l];
        a[c] = Bc(c, i);
      }
      var h, b = $.default.pEventTypes;
      function E() {
        for (var y = 0; y < i.interactions.list.length; y++) {
          var x = i.interactions.list[y];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var O = function() {
              var P = x.pointers[I];
              i.documents.some(function(k) {
                var j = k.doc;
                return (0, _.nodeContains)(j, P.downTarget);
              }) || x.removePointer(P.pointer, P.event);
            }, I = 0; I < x.pointers.length; I++)
              O();
        }
      }
      __name(E, "E");
      u(E, "a"), (h = C.default.PointerEvent ? [{ type: b.down, listener: E }, { type: b.down, listener: a.pointerDown }, { type: b.move, listener: a.pointerMove }, { type: b.up, listener: a.pointerUp }, { type: b.cancel, listener: a.pointerUp }] : [{ type: "mousedown", listener: a.pointerDown }, { type: "mousemove", listener: a.pointerMove }, { type: "mouseup", listener: a.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: a.pointerDown }, { type: "touchmove", listener: a.pointerMove }, { type: "touchend", listener: a.pointerUp }, { type: "touchcancel", listener: a.pointerUp }]).push({ type: "blur", listener: function(y) {
        for (var x = 0; x < i.interactions.list.length; x++)
          i.interactions.list[x].documentBlur(y);
      } }), i.prevTouchTime = 0, i.Interaction = function(y) {
        (function(R, F) {
          if (typeof F != "function" && F !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(F && F.prototype, { constructor: { value: R, writable: true, configurable: true } }), Object.defineProperty(R, "prototype", { writable: false }), F && Ol(R, F);
        })(j, y);
        var x, O, I, P, k = (I = j, P = function() {
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
          var R, F = ka(I);
          if (P) {
            var Z = ka(this).constructor;
            R = Reflect.construct(F, arguments, Z);
          } else
            R = F.apply(this, arguments);
          return av(this, R);
        });
        function j() {
          return iv(this, j), k.apply(this, arguments);
        }
        __name(j, "j");
        return u(j, "s"), x = j, (O = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(R) {
          i.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && ov(x.prototype, O), Object.defineProperty(x, "prototype", { writable: false }), j;
      }(Ft.default), i.interactions = { list: [], new: function(y) {
        y.scopeFire = function(O, I) {
          return i.fire(O, I);
        };
        var x = new i.Interaction(y);
        return i.interactions.list.push(x), x;
      }, listeners: a, docEvents: h, pointerMoveTolerance: 1 }, i.usePlugin(Ei.default);
    }, listeners: { "scope:add-document": function(i) {
      return Il(i, "add");
    }, "scope:remove-document": function(i) {
      return Il(i, "remove");
    }, "interactable:unset": function(i, a) {
      for (var l = i.interactable, c = a.interactions.list.length - 1; c >= 0; c--) {
        var h = a.interactions.list[c];
        h.interactable === l && (h.stop(), a.fire("interactions:destroy", { interaction: h }), h.destroy(), a.interactions.list.length > 2 && a.interactions.list.splice(c, 1));
      }
    } }, onDocSignal: Il, doOnInteractions: Bc, methodNames: Ml }, lv = sv;
    Da.default = lv;
    var bo = {};
    function Al(i) {
      return Al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Al(i);
    }
    __name(Al, "Al");
    u(Al, "ar");
    function yo() {
      return yo = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, a, l) {
        var c = uv(i, a);
        if (c) {
          var h = Object.getOwnPropertyDescriptor(c, a);
          return h.get ? h.get.call(arguments.length < 3 ? i : l) : h.value;
        }
      }, yo.apply(this, arguments);
    }
    __name(yo, "yo");
    u(yo, "sr");
    function uv(i, a) {
      for (; !Object.prototype.hasOwnProperty.call(i, a) && (i = bn(i)) !== null; )
        ;
      return i;
    }
    __name(uv, "uv");
    u(uv, "lr");
    function Pl(i, a) {
      return Pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, Pl(i, a);
    }
    __name(Pl, "Pl");
    u(Pl, "ur");
    function cv(i, a) {
      if (a && (Al(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(cv, "cv");
    u(cv, "cr");
    function bn(i) {
      return bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, bn(i);
    }
    __name(bn, "bn");
    u(bn, "fr");
    function $c(i, a) {
      if (!(i instanceof a))
        throw new TypeError("Cannot call a class as a function");
    }
    __name($c, "$c");
    u($c, "dr");
    function qc(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(qc, "qc");
    u(qc, "pr");
    function Fc(i, a, l) {
      return a && qc(i.prototype, a), l && qc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Fc, "Fc");
    u(Fc, "vr");
    function Et(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Et, "Et");
    u(Et, "hr"), Object.defineProperty(bo, "__esModule", { value: true }), bo.Scope = void 0, bo.initScope = Uc;
    var pv = function() {
      function i() {
        var a = this;
        $c(this, i), Et(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), Et(this, "isInitialized", false), Et(this, "listenerMaps", []), Et(this, "browser", $.default), Et(this, "defaults", (0, Fn.default)(uo.defaults)), Et(this, "Eventable", ho.Eventable), Et(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), Et(this, "interactStatic", (0, xl.createInteractStatic)(this)), Et(this, "InteractEvent", co.InteractEvent), Et(this, "Interactable", void 0), Et(this, "interactables", new Pa.InteractableSet(this)), Et(this, "_win", void 0), Et(this, "document", void 0), Et(this, "window", void 0), Et(this, "documents", []), Et(this, "_plugins", { list: [], map: {} }), Et(this, "onWindowUnload", function(c) {
          return a.removeDocument(c.target);
        });
        var l = this;
        this.Interactable = function(c) {
          (function(x, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(O && O.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), O && Pl(x, O);
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
              var I = bn(this).constructor;
              x = Reflect.construct(O, arguments, I);
            } else
              x = O.apply(this, arguments);
            return cv(this, x);
          });
          function y() {
            return $c(this, y), E.apply(this, arguments);
          }
          __name(y, "y");
          return u(y, "i"), Fc(y, [{ key: "_defaults", get: function() {
            return l.defaults;
          } }, { key: "set", value: function(x) {
            return yo(bn(y.prototype), "set", this).call(this, x), l.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            yo(bn(y.prototype), "unset", this).call(this);
            var x = l.interactables.list.indexOf(this);
            x < 0 || (yo(bn(y.prototype), "unset", this).call(this), l.interactables.list.splice(x, 1), l.fire("interactable:unset", { interactable: this }));
          } }]), y;
        }(Aa.Interactable);
      }
      __name(i, "i");
      return u(i, "t"), Fc(i, [{ key: "addListeners", value: function(a, l) {
        this.listenerMaps.push({ id: l, map: a });
      } }, { key: "fire", value: function(a, l) {
        for (var c = 0; c < this.listenerMaps.length; c++) {
          var h = this.listenerMaps[c].map[a];
          if (h && h(l, this, a) === false)
            return false;
        }
      } }, { key: "init", value: function(a) {
        return this.isInitialized ? this : Uc(this, a);
      } }, { key: "pluginIsInstalled", value: function(a) {
        return this._plugins.map[a.id] || this._plugins.list.indexOf(a) !== -1;
      } }, { key: "usePlugin", value: function(a, l) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(a))
          return this;
        if (a.id && (this._plugins.map[a.id] = a), this._plugins.list.push(a), a.install && a.install(this, l), a.listeners && a.before) {
          for (var c = 0, h = this.listenerMaps.length, b = a.before.reduce(function(y, x) {
            return y[x] = true, y[Wc(x)] = true, y;
          }, {}); c < h; c++) {
            var E = this.listenerMaps[c].id;
            if (b[E] || b[Wc(E)])
              break;
          }
          this.listenerMaps.splice(c, 0, { id: a.id, map: a.listeners });
        } else
          a.listeners && this.listenerMaps.push({ id: a.id, map: a.listeners });
        return this;
      } }, { key: "addDocument", value: function(a, l) {
        if (this.getDocIndex(a) !== -1)
          return false;
        var c = r.getWindow(a);
        l = l ? (0, q.default)({}, l) : {}, this.documents.push({ doc: a, options: l }), this.events.documents.push(a), a !== this.document && this.events.add(c, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: a, window: c, scope: this, options: l });
      } }, { key: "removeDocument", value: function(a) {
        var l = this.getDocIndex(a), c = r.getWindow(a), h = this.documents[l].options;
        this.events.remove(c, "unload", this.onWindowUnload), this.documents.splice(l, 1), this.events.documents.splice(l, 1), this.fire("scope:remove-document", { doc: a, window: c, scope: this, options: h });
      } }, { key: "getDocIndex", value: function(a) {
        for (var l = 0; l < this.documents.length; l++)
          if (this.documents[l].doc === a)
            return l;
        return -1;
      } }, { key: "getDocOptions", value: function(a) {
        var l = this.getDocIndex(a);
        return l === -1 ? null : this.documents[l].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), i;
    }();
    function Uc(i, a) {
      return i.isInitialized = true, s.default.window(a) && r.init(a), C.default.init(a), $.default.init(a), At.default.init(a), i.window = a, i.document = a.document, i.usePlugin(Da.default), i.usePlugin(_a.default), i;
    }
    __name(Uc, "Uc");
    u(Uc, "yr");
    function Wc(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(Wc, "Wc");
    u(Wc, "mr"), bo.Scope = pv;
    var _l = {}, pt = {};
    Object.defineProperty(pt, "__esModule", { value: true });
    var dv = {};
    pt.default = void 0, Object.keys(_l).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(dv, i) || i in pt && pt[i] === _l[i] || Object.defineProperty(pt, i, { enumerable: true, get: function() {
        return _l[i];
      } }));
    });
    var Vc = new bo.Scope(), fv = Vc.interactStatic;
    pt.default = fv;
    var hv = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Vc.init(hv);
    var Na = {};
    Object.defineProperty(Na, "__esModule", { value: true }), Na.default = void 0, Na.default = function() {
    };
    var Ga = {};
    Object.defineProperty(Ga, "__esModule", { value: true }), Ga.default = void 0, Ga.default = function() {
    };
    var La = {};
    function Yc(i, a) {
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
      }(i, a) || function(l, c) {
        if (l) {
          if (typeof l == "string")
            return Xc(l, c);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Xc(l, c) : void 0;
        }
      }(i, a) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Yc, "Yc");
    u(Yc, "jr");
    function Xc(i, a) {
      (a == null || a > i.length) && (a = i.length);
      for (var l = 0, c = Array(a); l < a; l++)
        c[l] = i[l];
      return c;
    }
    __name(Xc, "Xc");
    u(Xc, "Mr"), Object.defineProperty(La, "__esModule", { value: true }), La.default = void 0, La.default = function(i) {
      var a = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(c) {
        var h = Yc(c, 2), b = h[0], E = h[1];
        return b in i || E in i;
      }), l = u(function(c, h) {
        for (var b = i.range, E = i.limits, y = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = i.offset, O = x === void 0 ? { x: 0, y: 0 } : x, I = { range: b, grid: i, x: null, y: null }, P = 0; P < a.length; P++) {
          var k = Yc(a[P], 2), j = k[0], R = k[1], F = Math.round((c - O.x) / i[j]), Z = Math.round((h - O.y) / i[R]);
          I[j] = Math.max(y.left, Math.min(y.right, F * i[j] + O.x)), I[R] = Math.max(y.top, Math.min(y.bottom, Z * i[R] + O.y));
        }
        return I;
      }, "n");
      return l.grid = i, l.coordFields = a, l;
    };
    var wo = {};
    Object.defineProperty(wo, "__esModule", { value: true }), Object.defineProperty(wo, "edgeTarget", { enumerable: true, get: function() {
      return Na.default;
    } }), Object.defineProperty(wo, "elements", { enumerable: true, get: function() {
      return Ga.default;
    } }), Object.defineProperty(wo, "grid", { enumerable: true, get: function() {
      return La.default;
    } });
    var ja = {};
    Object.defineProperty(ja, "__esModule", { value: true }), ja.default = void 0;
    var mv = { id: "snappers", install: function(i) {
      var a = i.interactStatic;
      a.snappers = (0, q.default)(a.snappers || {}, wo), a.createSnapGrid = a.snappers.grid;
    } }, vv = mv;
    ja.default = vv;
    var Ti = {};
    function Zc(i, a) {
      var l = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(i);
        a && (c = c.filter(function(h) {
          return Object.getOwnPropertyDescriptor(i, h).enumerable;
        })), l.push.apply(l, c);
      }
      return l;
    }
    __name(Zc, "Zc");
    u(Zc, "Cr");
    function zl(i) {
      for (var a = 1; a < arguments.length; a++) {
        var l = arguments[a] != null ? arguments[a] : {};
        a % 2 ? Zc(Object(l), true).forEach(function(c) {
          gv(i, c, l[c]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : Zc(Object(l)).forEach(function(c) {
          Object.defineProperty(i, c, Object.getOwnPropertyDescriptor(l, c));
        });
      }
      return i;
    }
    __name(zl, "zl");
    u(zl, "Rr");
    function gv(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(gv, "gv");
    u(gv, "Fr"), Object.defineProperty(Ti, "__esModule", { value: true }), Ti.default = Ti.aspectRatio = void 0;
    var Kc = { start: function(i) {
      var a = i.state, l = i.rect, c = i.edges, h = i.pageCoords, b = a.options.ratio, E = a.options, y = E.equalDelta, x = E.modifiers;
      b === "preserve" && (b = l.width / l.height), a.startCoords = (0, q.default)({}, h), a.startRect = (0, q.default)({}, l), a.ratio = b, a.equalDelta = y;
      var O = a.linkedEdges = { top: c.top || c.left && !c.bottom, left: c.left || c.top && !c.right, bottom: c.bottom || c.right && !c.top, right: c.right || c.bottom && !c.left };
      if (a.xIsPrimaryAxis = !(!c.left && !c.right), a.equalDelta) {
        var I = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        a.edgeSign = { x: I, y: I };
      } else
        a.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, q.default)(i.edges, O), x && x.length) {
        var P = new Un.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(x), a.subModification = P, P.startAll(zl({}, i));
      }
    }, set: function(i) {
      var a = i.state, l = i.rect, c = i.coords, h = (0, q.default)({}, c), b = a.equalDelta ? bv : yv;
      if (b(a, a.xIsPrimaryAxis, c, l), !a.subModification)
        return null;
      var E = (0, q.default)({}, l);
      (0, oe.addEdges)(a.linkedEdges, E, { x: c.x - h.x, y: c.y - h.y });
      var y = a.subModification.setAll(zl(zl({}, i), {}, { rect: E, edges: a.linkedEdges, pageCoords: c, prevCoords: c, prevRect: E })), x = y.delta;
      return y.changed && (b(a, Math.abs(x.x) > Math.abs(x.y), y.coords, y.rect), (0, q.default)(c, y.coords)), y.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function bv(i, a, l) {
      var c = i.startCoords, h = i.edgeSign;
      a ? l.y = c.y + (l.x - c.x) * h.y : l.x = c.x + (l.y - c.y) * h.x;
    }
    __name(bv, "bv");
    u(bv, "Br");
    function yv(i, a, l, c) {
      var h = i.startRect, b = i.startCoords, E = i.ratio, y = i.edgeSign;
      if (a) {
        var x = c.width / E;
        l.y = b.y + (x - h.height) * y.y;
      } else {
        var O = c.height * E;
        l.x = b.x + (O - h.width) * y.x;
      }
    }
    __name(yv, "yv");
    u(yv, "Yr"), Ti.aspectRatio = Kc;
    var wv = (0, xt.makeModifier)(Kc, "aspectRatio");
    Ti.default = wv;
    var Yn = {};
    Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = void 0;
    var Qc = u(function() {
    }, "Ur");
    Qc._defaults = {};
    var xv = Qc;
    Yn.default = xv;
    var Rl = {};
    Object.defineProperty(Rl, "__esModule", { value: true }), Object.defineProperty(Rl, "default", { enumerable: true, get: function() {
      return Yn.default;
    } });
    var Gt = {};
    function Dl(i, a, l) {
      return s.default.func(i) ? oe.resolveRectLike(i, a.interactable, a.element, [l.x, l.y, a]) : oe.resolveRectLike(i, a.interactable, a.element);
    }
    __name(Dl, "Dl");
    u(Dl, "Gr"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0, Gt.getRestrictionRect = Dl, Gt.restrict = void 0;
    var Jc = { start: function(i) {
      var a = i.rect, l = i.startOffset, c = i.state, h = i.interaction, b = i.pageCoords, E = c.options, y = E.elementRect, x = (0, q.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (a && y) {
        var O = Dl(E.restriction, h, b);
        if (O) {
          var I = O.right - O.left - a.width, P = O.bottom - O.top - a.height;
          I < 0 && (x.left += I, x.right += I), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += l.left - a.width * y.left, x.top += l.top - a.height * y.top, x.right += l.right - a.width * (1 - y.right), x.bottom += l.bottom - a.height * (1 - y.bottom);
      }
      c.offset = x;
    }, set: function(i) {
      var a = i.coords, l = i.interaction, c = i.state, h = c.options, b = c.offset, E = Dl(h.restriction, l, a);
      if (E) {
        var y = oe.xywhToTlbr(E);
        a.x = Math.max(Math.min(y.right - b.right, a.x), y.left + b.left), a.y = Math.max(Math.min(y.bottom - b.bottom, a.y), y.top + b.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Gt.restrict = Jc;
    var Ev = (0, xt.makeModifier)(Jc, "restrict");
    Gt.default = Ev;
    var Nr = {};
    Object.defineProperty(Nr, "__esModule", { value: true }), Nr.restrictEdges = Nr.default = void 0;
    var ep = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, tp = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function rp(i, a) {
      for (var l = ["top", "left", "bottom", "right"], c = 0; c < l.length; c++) {
        var h = l[c];
        h in i || (i[h] = a[h]);
      }
      return i;
    }
    __name(rp, "rp");
    u(rp, "Qr");
    var np = { noInner: ep, noOuter: tp, start: function(i) {
      var a, l = i.interaction, c = i.startOffset, h = i.state, b = h.options;
      if (b) {
        var E = (0, Gt.getRestrictionRect)(b.offset, l, l.coords.start.page);
        a = oe.rectToXY(E);
      }
      a = a || { x: 0, y: 0 }, h.offset = { top: a.y + c.top, left: a.x + c.left, bottom: a.y - c.bottom, right: a.x - c.right };
    }, set: function(i) {
      var a = i.coords, l = i.edges, c = i.interaction, h = i.state, b = h.offset, E = h.options;
      if (l) {
        var y = (0, q.default)({}, a), x = (0, Gt.getRestrictionRect)(E.inner, c, y) || {}, O = (0, Gt.getRestrictionRect)(E.outer, c, y) || {};
        rp(x, ep), rp(O, tp), l.top ? a.y = Math.min(Math.max(O.top + b.top, y.y), x.top + b.top) : l.bottom && (a.y = Math.max(Math.min(O.bottom + b.bottom, y.y), x.bottom + b.bottom)), l.left ? a.x = Math.min(Math.max(O.left + b.left, y.x), x.left + b.left) : l.right && (a.x = Math.max(Math.min(O.right + b.right, y.x), x.right + b.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Nr.restrictEdges = np;
    var Sv = (0, xt.makeModifier)(np, "restrictEdges");
    Nr.default = Sv;
    var Ci = {};
    Object.defineProperty(Ci, "__esModule", { value: true }), Ci.restrictRect = Ci.default = void 0;
    var Tv = (0, q.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Gt.restrict.defaults), ip = { start: Gt.restrict.start, set: Gt.restrict.set, defaults: Tv };
    Ci.restrictRect = ip;
    var Cv = (0, xt.makeModifier)(ip, "restrictRect");
    Ci.default = Cv;
    var Oi = {};
    Object.defineProperty(Oi, "__esModule", { value: true }), Oi.restrictSize = Oi.default = void 0;
    var Ov = { width: -1 / 0, height: -1 / 0 }, Mv = { width: 1 / 0, height: 1 / 0 }, op = { start: function(i) {
      return Nr.restrictEdges.start(i);
    }, set: function(i) {
      var a = i.interaction, l = i.state, c = i.rect, h = i.edges, b = l.options;
      if (h) {
        var E = oe.tlbrToXywh((0, Gt.getRestrictionRect)(b.min, a, i.coords)) || Ov, y = oe.tlbrToXywh((0, Gt.getRestrictionRect)(b.max, a, i.coords)) || Mv;
        l.options = { endOnly: b.endOnly, inner: (0, q.default)({}, Nr.restrictEdges.noInner), outer: (0, q.default)({}, Nr.restrictEdges.noOuter) }, h.top ? (l.options.inner.top = c.bottom - E.height, l.options.outer.top = c.bottom - y.height) : h.bottom && (l.options.inner.bottom = c.top + E.height, l.options.outer.bottom = c.top + y.height), h.left ? (l.options.inner.left = c.right - E.width, l.options.outer.left = c.right - y.width) : h.right && (l.options.inner.right = c.left + E.width, l.options.outer.right = c.left + y.width), Nr.restrictEdges.set(i), l.options = b;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Oi.restrictSize = op;
    var Iv = (0, xt.makeModifier)(op, "restrictSize");
    Oi.default = Iv;
    var kl = {};
    Object.defineProperty(kl, "__esModule", { value: true }), Object.defineProperty(kl, "default", { enumerable: true, get: function() {
      return Yn.default;
    } });
    var yn = {};
    Object.defineProperty(yn, "__esModule", { value: true }), yn.snap = yn.default = void 0;
    var ap = { start: function(i) {
      var a, l = i.interaction, c = i.interactable, h = i.element, b = i.rect, E = i.state, y = i.startOffset, x = E.options, O = x.offsetWithOrigin ? function(k) {
        var j = k.interaction.element;
        return (0, oe.rectToXY)((0, oe.resolveRectLike)(k.state.options.origin, null, null, [j])) || (0, _e.default)(k.interactable, j, k.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        a = { x: l.coords.start.page.x, y: l.coords.start.page.y };
      else {
        var I = (0, oe.resolveRectLike)(x.offset, c, h, [l]);
        (a = (0, oe.rectToXY)(I) || { x: 0, y: 0 }).x += O.x, a.y += O.y;
      }
      var P = x.relativePoints;
      E.offsets = b && P && P.length ? P.map(function(k, j) {
        return { index: j, relativePoint: k, x: y.left - b.width * k.x + a.x, y: y.top - b.height * k.y + a.y };
      }) : [{ index: 0, relativePoint: null, x: a.x, y: a.y }];
    }, set: function(i) {
      var a = i.interaction, l = i.coords, c = i.state, h = c.options, b = c.offsets, E = (0, _e.default)(a.interactable, a.element, a.prepared.name), y = (0, q.default)({}, l), x = [];
      h.offsetWithOrigin || (y.x -= E.x, y.y -= E.y);
      for (var O = 0; O < b.length; O++)
        for (var I = b[O], P = y.x - I.x, k = y.y - I.y, j = 0, R = h.targets.length; j < R; j++) {
          var F, Z = h.targets[j];
          (F = s.default.func(Z) ? Z(P, k, a._proxy, I, j) : Z) && x.push({ x: (s.default.number(F.x) ? F.x : P) + I.x, y: (s.default.number(F.y) ? F.y : k) + I.y, range: s.default.number(F.range) ? F.range : h.range, source: Z, index: j, offset: I });
        }
      for (var W = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < x.length; ne++) {
        var ae = x[ne], ye = ae.range, Re = ae.x - y.x, Fe = ae.y - y.y, Se = (0, Qe.default)(Re, Fe), $e = Se <= ye;
        ye === 1 / 0 && W.inRange && W.range !== 1 / 0 && ($e = false), W.target && !($e ? W.inRange && ye !== 1 / 0 ? Se / ye < W.distance / W.range : ye === 1 / 0 && W.range !== 1 / 0 || Se < W.distance : !W.inRange && Se < W.distance) || (W.target = ae, W.distance = Se, W.range = ye, W.inRange = $e, W.delta.x = Re, W.delta.y = Fe);
      }
      return W.inRange && (l.x = W.target.x, l.y = W.target.y), c.closest = W, W;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    yn.snap = ap;
    var Av = (0, xt.makeModifier)(ap, "snap");
    yn.default = Av;
    var Kr = {};
    function sp(i, a) {
      (a == null || a > i.length) && (a = i.length);
      for (var l = 0, c = Array(a); l < a; l++)
        c[l] = i[l];
      return c;
    }
    __name(sp, "sp");
    u(sp, "yo"), Object.defineProperty(Kr, "__esModule", { value: true }), Kr.snapSize = Kr.default = void 0;
    var lp = { start: function(i) {
      var a = i.state, l = i.edges, c = a.options;
      if (!l)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }], offset: c.offset || "self", origin: { x: 0, y: 0 }, range: c.range } }, a.targetFields = a.targetFields || [["width", "height"], ["x", "y"]], yn.snap.start(i), a.offsets = i.state.offsets, i.state = a;
    }, set: function(i) {
      var a, l, c = i.interaction, h = i.state, b = i.coords, E = h.options, y = h.offsets, x = { x: b.x - y[0].x, y: b.y - y[0].y };
      h.options = (0, q.default)({}, E), h.options.targets = [];
      for (var O = 0; O < (E.targets || []).length; O++) {
        var I = (E.targets || [])[O], P = void 0;
        if (P = s.default.func(I) ? I(x.x, x.y, c) : I) {
          for (var k = 0; k < h.targetFields.length; k++) {
            var j = (a = h.targetFields[k], l = 2, function(W) {
              if (Array.isArray(W))
                return W;
            }(a) || function(W, ne) {
              var ae = W == null ? null : typeof Symbol != "undefined" && W[Symbol.iterator] || W["@@iterator"];
              if (ae != null) {
                var ye, Re, Fe = [], Se = true, $e = false;
                try {
                  for (ae = ae.call(W); !(Se = (ye = ae.next()).done) && (Fe.push(ye.value), !ne || Fe.length !== ne); Se = true)
                    ;
                } catch (gr) {
                  $e = true, Re = gr;
                } finally {
                  try {
                    Se || ae.return == null || ae.return();
                  } finally {
                    if ($e)
                      throw Re;
                  }
                }
                return Fe;
              }
            }(a, l) || function(W, ne) {
              if (W) {
                if (typeof W == "string")
                  return sp(W, ne);
                var ae = Object.prototype.toString.call(W).slice(8, -1);
                return ae === "Object" && W.constructor && (ae = W.constructor.name), ae === "Map" || ae === "Set" ? Array.from(W) : ae === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? sp(W, ne) : void 0;
              }
            }(a, l) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = j[0], F = j[1];
            if (R in P || F in P) {
              P.x = P[R], P.y = P[F];
              break;
            }
          }
          h.options.targets.push(P);
        }
      }
      var Z = yn.snap.set(i);
      return h.options = E, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Kr.snapSize = lp;
    var Pv = (0, xt.makeModifier)(lp, "snapSize");
    Kr.default = Pv;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.snapEdges = Mi.default = void 0;
    var up = { start: function(i) {
      var a = i.edges;
      return a ? (i.state.targetFields = i.state.targetFields || [[a.left ? "left" : "right", a.top ? "top" : "bottom"]], Kr.snapSize.start(i)) : null;
    }, set: Kr.snapSize.set, defaults: (0, q.default)((0, Fn.default)(Kr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Mi.snapEdges = up;
    var _v = (0, xt.makeModifier)(up, "snapEdges");
    Mi.default = _v;
    var Nl = {};
    Object.defineProperty(Nl, "__esModule", { value: true }), Object.defineProperty(Nl, "default", { enumerable: true, get: function() {
      return Yn.default;
    } });
    var Gl = {};
    Object.defineProperty(Gl, "__esModule", { value: true }), Object.defineProperty(Gl, "default", { enumerable: true, get: function() {
      return Yn.default;
    } });
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.default = void 0;
    var zv = { aspectRatio: Ti.default, restrictEdges: Nr.default, restrict: Gt.default, restrictRect: Ci.default, restrictSize: Oi.default, snapEdges: Mi.default, snap: yn.default, snapSize: Kr.default, spring: Nl.default, avoid: Rl.default, transform: Gl.default, rubberband: kl.default };
    Ii.default = zv;
    var Ba = {};
    Object.defineProperty(Ba, "__esModule", { value: true }), Ba.default = void 0;
    var Rv = { id: "modifiers", install: function(i) {
      var a = i.interactStatic;
      for (var l in i.usePlugin(xt.default), i.usePlugin(ja.default), a.modifiers = Ii.default, Ii.default) {
        var c = Ii.default[l], h = c._defaults, b = c._methods;
        h._methods = b, i.defaults.perAction[l] = h;
      }
    } }, Dv = Rv;
    Ba.default = Dv;
    var Xn = {};
    function Ll(i) {
      return Ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, Ll(i);
    }
    __name(Ll, "Ll");
    u(Ll, "Io");
    function kv(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(kv, "kv");
    u(kv, "Do");
    function jl(i, a) {
      return jl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, jl(i, a);
    }
    __name(jl, "jl");
    u(jl, "Ao");
    function Nv(i, a) {
      if (a && (Ll(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Bl(i);
    }
    __name(Nv, "Nv");
    u(Nv, "zo");
    function Bl(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Bl, "Bl");
    u(Bl, "Co");
    function Ha(i) {
      return Ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, Ha(i);
    }
    __name(Ha, "Ha");
    u(Ha, "Ro"), Object.defineProperty(Xn, "__esModule", { value: true }), Xn.default = Xn.PointerEvent = void 0;
    var Gv = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && jl(y, x);
      })(E, i);
      var a, l, c, h, b = (c = E, h = function() {
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
        var y, x = Ha(c);
        if (h) {
          var O = Ha(this).constructor;
          y = Reflect.construct(x, arguments, O);
        } else
          y = x.apply(this, arguments);
        return Nv(this, y);
      });
      function E(y, x, O, I, P, k) {
        var j;
        if (function(Z, W) {
          if (!(Z instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), j = b.call(this, P), Q.pointerExtend(Bl(j), O), O !== x && Q.pointerExtend(Bl(j), x), j.timeStamp = k, j.originalEvent = O, j.type = y, j.pointerId = Q.getPointerId(x), j.pointerType = Q.getPointerType(x), j.target = I, j.currentTarget = null, y === "tap") {
          var R = P.getPointerIndex(x);
          j.dt = j.timeStamp - P.pointers[R].downTime;
          var F = j.timeStamp - P.tapTime;
          j.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === j.target && F < 500;
        } else
          y === "doubletap" && (j.dt = x.timeStamp - P.tapTime, j.double = true);
        return j;
      }
      __name(E, "E");
      return u(E, "a"), a = E, (l = [{ key: "_subtractOrigin", value: function(y) {
        var x = y.x, O = y.y;
        return this.pageX -= x, this.pageY -= O, this.clientX -= x, this.clientY -= O, this;
      } }, { key: "_addOrigin", value: function(y) {
        var x = y.x, O = y.y;
        return this.pageX += x, this.pageY += O, this.clientX += x, this.clientY += O, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && kv(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    Xn.PointerEvent = Xn.default = Gv;
    var xo = {};
    Object.defineProperty(xo, "__esModule", { value: true }), xo.default = void 0;
    var $a = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = $a, i.defaults.actions.pointerEvents = $a.defaults, (0, q.default)(i.actions.phaselessTypes, $a.types);
    }, listeners: { "interactions:new": function(i) {
      var a = i.interaction;
      a.prevTap = null, a.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var a = i.down, l = i.pointerInfo;
      !a && l.hold || (l.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, a) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget;
      i.duplicate || l.pointerIsDown && !l.pointerWasMoved || (l.pointerIsDown && Hl(i), wn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "move" }, a));
    }, "interactions:down": function(i, a) {
      (function(l, c) {
        for (var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget, x = l.pointerIndex, O = h.pointers[x].hold, I = _.getPath(y), P = { interaction: h, pointer: b, event: E, eventTarget: y, type: "hold", targets: [], path: I, node: null }, k = 0; k < I.length; k++) {
          var j = I[k];
          P.node = j, c.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var R = 1 / 0, F = 0; F < P.targets.length; F++) {
            var Z = P.targets[F].eventable.options.holdDuration;
            Z < R && (R = Z);
          }
          O.duration = R, O.timeout = setTimeout(function() {
            wn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "hold" }, c);
          }, R);
        }
      })(i, a), wn(i, a);
    }, "interactions:up": function(i, a) {
      Hl(i), wn(i, a), function(l, c) {
        var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget;
        h.pointerWasMoved || wn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "tap" }, c);
      }(i, a);
    }, "interactions:cancel": function(i, a) {
      Hl(i), wn(i, a);
    } }, PointerEvent: Xn.PointerEvent, fire: wn, collectEventTargets: cp, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function wn(i, a) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget, E = i.type, y = i.targets, x = y === void 0 ? cp(i, a) : y, O = new Xn.PointerEvent(E, c, h, b, l, a.now());
      a.fire("pointerEvents:new", { pointerEvent: O });
      for (var I = { interaction: l, pointer: c, event: h, eventTarget: b, targets: x, type: E, pointerEvent: O }, P = 0; P < x.length; P++) {
        var k = x[P];
        for (var j in k.props || {})
          O[j] = k.props[j];
        var R = (0, _e.default)(k.eventable, k.node);
        if (O._subtractOrigin(R), O.eventable = k.eventable, O.currentTarget = k.node, k.eventable.fire(O), O._addOrigin(R), O.immediatePropagationStopped || O.propagationStopped && P + 1 < x.length && x[P + 1].node !== O.currentTarget)
          break;
      }
      if (a.fire("pointerEvents:fired", I), E === "tap") {
        var F = O.double ? wn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "doubletap" }, a) : O;
        l.prevTap = F, l.tapTime = F.timeStamp;
      }
      return O;
    }
    __name(wn, "wn");
    u(wn, "Yo");
    function cp(i, a) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget, E = i.type, y = l.getPointerIndex(c), x = l.pointers[y];
      if (E === "tap" && (l.pointerWasMoved || !x || x.downTarget !== b))
        return [];
      for (var O = _.getPath(b), I = { interaction: l, pointer: c, event: h, eventTarget: b, type: E, path: O, targets: [], node: null }, P = 0; P < O.length; P++) {
        var k = O[P];
        I.node = k, a.fire("pointerEvents:collect-targets", I);
      }
      return E === "hold" && (I.targets = I.targets.filter(function(j) {
        var R;
        return j.eventable.options.holdDuration === ((R = l.pointers[y]) == null ? void 0 : R.hold.duration);
      })), I.targets;
    }
    __name(cp, "cp");
    u(cp, "Wo");
    function Hl(i) {
      var a = i.interaction, l = i.pointerIndex, c = a.pointers[l].hold;
      c && c.timeout && (clearTimeout(c.timeout), c.timeout = null);
    }
    __name(Hl, "Hl");
    u(Hl, "Lo");
    var Lv = $a;
    xo.default = Lv;
    var qa = {};
    function jv(i) {
      var a = i.interaction;
      a.holdIntervalHandle && (clearInterval(a.holdIntervalHandle), a.holdIntervalHandle = null);
    }
    __name(jv, "jv");
    u(jv, "No"), Object.defineProperty(qa, "__esModule", { value: true }), qa.default = void 0;
    var Bv = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(xo.default);
      var a = i.pointerEvents;
      a.defaults.holdRepeatInterval = 0, a.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, a) {
      return i["pointerEvents:".concat(a)] = jv, i;
    }, { "pointerEvents:new": function(i) {
      var a = i.pointerEvent;
      a.type === "hold" && (a.count = (a.count || 0) + 1);
    }, "pointerEvents:fired": function(i, a) {
      var l = i.interaction, c = i.pointerEvent, h = i.eventTarget, b = i.targets;
      if (c.type === "hold" && b.length) {
        var E = b[0].eventable.options.holdRepeatInterval;
        E <= 0 || (l.holdIntervalHandle = setTimeout(function() {
          a.pointerEvents.fire({ interaction: l, eventTarget: h, type: "hold", pointer: c, event: c }, a);
        }, E));
      }
    } }) }, Hv = Bv;
    qa.default = Hv;
    var Fa = {};
    function $v(i) {
      return (0, q.default)(this.events.options, i), this;
    }
    __name($v, "$v");
    u($v, "Ho"), Object.defineProperty(Fa, "__esModule", { value: true }), Fa.default = void 0;
    var qv = { id: "pointer-events/interactableTargets", install: function(i) {
      var a = i.Interactable;
      a.prototype.pointerEvents = $v;
      var l = a.prototype._backCompatOption;
      a.prototype._backCompatOption = function(c, h) {
        var b = l.call(this, c, h);
        return b === this && (this.events.options[c] = h), b;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, a) {
      var l = i.targets, c = i.node, h = i.type, b = i.eventTarget;
      a.interactables.forEachMatch(c, function(E) {
        var y = E.events, x = y.options;
        y.types[h] && y.types[h].length && E.testIgnoreAllow(x, c, b) && l.push({ node: c, eventable: y, props: { interactable: E } });
      });
    }, "interactable:new": function(i) {
      var a = i.interactable;
      a.events.getRect = function(l) {
        return a.getRect(l);
      };
    }, "interactable:set": function(i, a) {
      var l = i.interactable, c = i.options;
      (0, q.default)(l.events.options, a.pointerEvents.defaults), (0, q.default)(l.events.options, c.pointerEvents || {});
    } } }, Fv = qv;
    Fa.default = Fv;
    var Ua = {};
    Object.defineProperty(Ua, "__esModule", { value: true }), Ua.default = void 0;
    var Uv = { id: "pointer-events", install: function(i) {
      i.usePlugin(xo), i.usePlugin(qa.default), i.usePlugin(Fa.default);
    } }, Wv = Uv;
    Ua.default = Wv;
    var Eo = {};
    function pp(i) {
      var a = i.Interactable;
      i.actions.phases.reflow = true, a.prototype.reflow = function(l) {
        return function(c, h, b) {
          for (var E = s.default.string(c.target) ? Pe.from(c._context.querySelectorAll(c.target)) : [c.target], y = b.window.Promise, x = y ? [] : null, O = function() {
            var P = E[I], k = c.getRect(P);
            if (!k)
              return "break";
            var j = Pe.find(b.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === c && ne.element === P && ne.prepared.name === h.name;
            }), R = void 0;
            if (j)
              j.move(), x && (R = j._reflowPromise || new y(function(ne) {
                j._reflowResolve = ne;
              }));
            else {
              var F = (0, oe.tlbrToXywh)(k), Z = { page: { x: F.x, y: F.y }, client: { x: F.x, y: F.y }, timeStamp: b.now() }, W = Q.coordsToEvent(Z);
              R = function(ne, ae, ye, Re, Fe) {
                var Se = ne.interactions.new({ pointerType: "reflow" }), $e = { interaction: Se, event: Fe, pointer: Fe, eventTarget: ye, phase: "reflow" };
                Se.interactable = ae, Se.element = ye, Se.prevEvent = Fe, Se.updatePointer(Fe, Fe, ye, true), Q.setZeroCoords(Se.coords.delta), (0, ar.copyAction)(Se.prepared, Re), Se._doPhase($e);
                var gr = ne.window.Promise, Qr = gr ? new gr(function(Fl) {
                  Se._reflowResolve = Fl;
                }) : void 0;
                return Se._reflowPromise = Qr, Se.start(Re, ae, ye), Se._interacting ? (Se.move($e), Se.end(Fe)) : (Se.stop(), Se._reflowResolve()), Se.removePointer(Fe, Fe), Qr;
              }(b, c, P, h, W);
            }
            x && x.push(R);
          }, I = 0; I < E.length && O() !== "break"; I++)
            ;
          return x && y.all(x).then(function() {
            return c;
          });
        }(this, l, i);
      };
    }
    __name(pp, "pp");
    u(pp, "ni"), Object.defineProperty(Eo, "__esModule", { value: true }), Eo.default = void 0, Eo.install = pp;
    var Vv = { id: "reflow", install: pp, listeners: { "interactions:stop": function(i, a) {
      var l = i.interaction;
      l.pointerType === "reflow" && (l._reflowResolve && l._reflowResolve(), Pe.remove(a.interactions.list, l));
    } } }, Yv = Vv;
    Eo.default = Yv;
    var vr = { exports: {} };
    function $l(i) {
      return $l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, $l(i);
    }
    __name($l, "$l");
    u($l, "ai"), Object.defineProperty(vr.exports, "__esModule", { value: true }), vr.exports.default = void 0, pt.default.use(Ei.default), pt.default.use(Vn.default), pt.default.use(Ua.default), pt.default.use(Si.default), pt.default.use(Ba.default), pt.default.use(Ea.default), pt.default.use(mr.default), pt.default.use(gn.default), pt.default.use(Eo.default);
    var Xv = pt.default;
    if (vr.exports.default = Xv, $l(vr) === "object" && vr)
      try {
        vr.exports = pt.default;
      } catch (i) {
      }
    pt.default.default = pt.default, vr = vr.exports;
    var Zn = { exports: {} };
    function ql(i) {
      return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, ql(i);
    }
    __name(ql, "ql");
    u(ql, "ui"), Object.defineProperty(Zn.exports, "__esModule", { value: true }), Zn.exports.default = void 0;
    var Zv = vr.default;
    if (Zn.exports.default = Zv, ql(Zn) === "object" && Zn)
      try {
        Zn.exports = vr.default;
      } catch (i) {
      }
    return vr.default.default = vr.default, Zn.exports;
  });
});
var nm = St((rm, vc) => {
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
      return this.reads.push(g), o(this), g;
    }, mutate: function(d, f) {
      r("mutate");
      var g = f ? d.bind(f) : d;
      return this.writes.push(g), o(this), g;
    }, clear: function(d) {
      return r("clear", d), p(this.reads, d) || p(this.writes, d);
    }, extend: function(d) {
      if (r("extend", d), typeof d != "object")
        throw new Error("expected object");
      var f = Object.create(this);
      return v(f, d), f.fastdom = this, f.initialize && f.initialize(), f;
    }, catch: null };
    function o(d) {
      d.scheduled || (d.scheduled = true, d.raf(s.bind(null, d)), r("flush scheduled"));
    }
    __name(o, "o");
    u(o, "scheduleFlush");
    function s(d) {
      r("flush");
      var f = d.writes, g = d.reads, w;
      try {
        r("flushing reads", g.length), d.runTasks(g), r("flushing writes", f.length), d.runTasks(f);
      } catch (S) {
        w = S;
      }
      if (d.scheduled = false, (g.length || f.length) && o(d), w)
        if (r("task errored", w.message), d.catch)
          d.catch(w);
        else
          throw w;
    }
    __name(s, "s");
    u(s, "flush");
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
    }) : typeof vc == "object" && (vc.exports = m);
  })(typeof window != "undefined" ? window : rm);
});
var sm = St((gc, am) => {
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
    }, "cosm1"), o = u(function(d, f) {
      var g = Math.abs(d), w = Math.abs(f);
      return g < 3e3 && w < 3e3 ? Math.sqrt(g * g + w * w) : (g < w ? (g = w, w = d / f) : w = f / d, g * Math.sqrt(1 + w * w));
    }, "hypot"), s = u(function() {
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
              d.length === 2 ? (g.re = d[0], g.im = d[1]) : s();
            break;
          case "string":
            g.im = g.re = 0;
            var w = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, T = 0;
            w === null && s();
            for (var C = 0; C < w.length; C++) {
              var z = w[C];
              z === " " || z === "	" || z === `
` || (z === "+" ? S++ : z === "-" ? T++ : z === "i" || z === "I" ? (S + T === 0 && s(), w[C + 1] !== " " && !isNaN(w[C + 1]) ? (g.im += parseFloat((T % 2 ? "-" : "") + w[C + 1]), C++) : g.im += parseFloat((T % 2 ? "-" : "") + "1"), S = T = 0) : ((S + T === 0 || isNaN(z)) && s(), w[C + 1] === "i" || w[C + 1] === "I" ? (g.im += parseFloat((T % 2 ? "-" : "") + z), C++) : g.re += parseFloat((T % 2 ? "-" : "") + z), S = T = 0));
            }
            S + T > 0 && s();
            break;
          case "number":
            g.im = 0, g.re = d;
            break;
          default:
            s();
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
      return o(this.re, this.im);
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
      var d = this.re, f = this.im, g = d > 1 && f === 0, w = 1 - d, S = 1 + d, T = w * w + f * f, C = T !== 0 ? new m((S * w - f * f) / T, (f * w + S * f) / T) : new m(d !== -1 ? d / 0 : 0, f !== 0 ? f / 0 : 0), z = C.re;
      return C.re = p(C.re, C.im) / 2, C.im = Math.atan2(C.im, z) / 2, g && (C.im = -C.im), C;
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
    }) : typeof gc == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, am.exports = m) : t.Complex = m;
  })(gc);
});
var An = Lt(yp());
function Wl(t, r, e, n) {
  function o(s) {
    return s instanceof e ? s : new e(function(p) {
      p(s);
    });
  }
  __name(o, "o");
  return u(o, "adopt"), new (e || (e = Promise))(function(s, p) {
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
      f.done ? s(f.value) : o(f.value).then(v, m);
    }
    __name(d, "d");
    u(d, "step"), d((n = n.apply(t, r || [])).next());
  });
}
__name(Wl, "Wl");
u(Wl, "__awaiter");
function Vl(t, r) {
  var e = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, o, s, p;
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
        if (n = 1, o && (s = d[0] & 2 ? o.return : d[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, d[1])).done)
          return s;
        switch (o = 0, s && (d = [d[0] & 2, s.value]), d[0]) {
          case 0:
          case 1:
            s = d;
            break;
          case 4:
            return e.label++, { value: d[1], done: false };
          case 5:
            e.label++, o = d[1], d = [0];
            continue;
          case 7:
            d = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (s = e.trys, !(s = s.length > 0 && s[s.length - 1]) && (d[0] === 6 || d[0] === 2)) {
              e = 0;
              continue;
            }
            if (d[0] === 3 && (!s || d[1] > s[0] && d[1] < s[3])) {
              e.label = d[1];
              break;
            }
            if (d[0] === 6 && e.label < s[1]) {
              e.label = s[1], s = d;
              break;
            }
            if (s && e.label < s[2]) {
              e.label = s[2], e.ops.push(d);
              break;
            }
            s[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        d = r.call(t, e);
      } catch (f) {
        d = [6, f], o = 0;
      } finally {
        n = s = 0;
      }
    if (d[0] & 5)
      throw d[1];
    return { value: d[0] ? d[1] : void 0, done: true };
  }
  __name(m, "m");
}
__name(Vl, "Vl");
u(Vl, "__generator");
function Xa(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), o, s = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
      s.push(o.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      o && !o.done && (e = n.return) && e.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return s;
}
__name(Xa, "Xa");
u(Xa, "__read");
function Jn(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, o = r.length, s; n < o; n++)
      (s || !(n in r)) && (s || (s = Array.prototype.slice.call(r, 0, n)), s[n] = r[n]);
  return t.concat(s || Array.prototype.slice.call(r));
}
__name(Jn, "Jn");
u(Jn, "__spreadArray");
var rg = { withStackTrace: false };
var xp = u(function(t, r, e) {
  e === void 0 && (e = rg);
  var n = r.isOk() ? { type: "Ok", value: r.value } : { type: "Err", value: r.error }, o = e.withStackTrace ? new Error().stack : void 0;
  return { data: n, message: t, stack: o };
}, "createNeverThrowError");
var Ai = function() {
  function t(r) {
    this._promise = r;
  }
  __name(t, "t");
  return u(t, "ResultAsync"), t.fromSafePromise = function(r) {
    var e = r.then(function(n) {
      return new Kn(n);
    });
    return new t(e);
  }, t.fromPromise = function(r, e) {
    var n = r.then(function(o) {
      return new Kn(o);
    }).catch(function(o) {
      return new Qn(e(o));
    });
    return new t(n);
  }, t.combine = function(r) {
    return ig(r);
  }, t.combineWithAllErrors = function(r) {
    return og(r);
  }, t.prototype.map = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Wl(e, void 0, void 0, function() {
        var o;
        return Vl(this, function(s) {
          switch (s.label) {
            case 0:
              return n.isErr() ? [2, new Qn(n.error)] : (o = Kn.bind, [4, r(n.value)]);
            case 1:
              return [2, new (o.apply(Kn, [void 0, s.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.mapErr = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Wl(e, void 0, void 0, function() {
        var o;
        return Vl(this, function(s) {
          switch (s.label) {
            case 0:
              return n.isOk() ? [2, new Kn(n.value)] : (o = Qn.bind, [4, r(n.error)]);
            case 1:
              return [2, new (o.apply(Qn, [void 0, s.sent()]))()];
          }
        });
      });
    }));
  }, t.prototype.andThen = function(r) {
    return new t(this._promise.then(function(e) {
      if (e.isErr())
        return new Qn(e.error);
      var n = r(e.value);
      return n instanceof t ? n._promise : n;
    }));
  }, t.prototype.orElse = function(r) {
    var e = this;
    return new t(this._promise.then(function(n) {
      return Wl(e, void 0, void 0, function() {
        return Vl(this, function(o) {
          return n.isErr() ? [2, r(n.error)] : [2, new Kn(n.value)];
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
var wp = u(function(t) {
  return new Ai(Promise.resolve(new Qn(t)));
}, "errAsync");
var P0 = Ai.fromPromise;
var _0 = Ai.fromSafePromise;
var ng = u(function(t) {
  return function(r) {
    return Jn(Jn([], Xa(r), false), [t], false);
  };
}, "appendValueToEndOfList");
var Ep = u(function(t) {
  return t.reduce(function(r, e) {
    return r.isOk() ? e.isErr() ? en(e.error) : r.map(ng(e.value)) : r;
  }, Jr([]));
}, "combineResultList");
var ig = u(function(t) {
  return Ai.fromSafePromise(Promise.all(t)).andThen(Ep);
}, "combineResultAsyncList");
var Sp = u(function(t) {
  return t.reduce(function(r, e) {
    return e.isErr() ? r.isErr() ? en(Jn(Jn([], Xa(r.error), false), [e.error], false)) : en([e.error]) : r.isErr() ? r : Jr(Jn(Jn([], Xa(r.value), false), [e.value], false));
  }, Jr([]));
}, "combineResultListWithAllErrors");
var og = u(function(t) {
  return Ai.fromSafePromise(Promise.all(t)).andThen(Sp);
}, "combineResultAsyncListWithAllErrors");
var To;
(function(t) {
  function r(o, s) {
    return function() {
      for (var p = [], v = 0; v < arguments.length; v++)
        p[v] = arguments[v];
      try {
        var m = o.apply(void 0, Jn([], Xa(p), false));
        return Jr(m);
      } catch (d) {
        return en(s ? s(d) : d);
      }
    };
  }
  __name(r, "r");
  u(r, "fromThrowable"), t.fromThrowable = r;
  function e(o) {
    return Ep(o);
  }
  __name(e, "e");
  u(e, "combine"), t.combine = e;
  function n(o) {
    return Sp(o);
  }
  __name(n, "n");
  u(n, "combineWithAllErrors"), t.combineWithAllErrors = n;
})(To || (To = {}));
var Jr = u(function(t) {
  return new Kn(t);
}, "ok");
var en = u(function(t) {
  return new Qn(t);
}, "err");
var Kn = function() {
  function t(r) {
    this.value = r;
  }
  __name(t, "t");
  return u(t, "Ok"), t.prototype.isOk = function() {
    return true;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return Jr(r(this.value));
  }, t.prototype.mapErr = function(r) {
    return Jr(this.value);
  }, t.prototype.andThen = function(r) {
    return r(this.value);
  }, t.prototype.orElse = function(r) {
    return Jr(this.value);
  }, t.prototype.asyncAndThen = function(r) {
    return r(this.value);
  }, t.prototype.asyncMap = function(r) {
    return Ai.fromSafePromise(r(this.value));
  }, t.prototype.unwrapOr = function(r) {
    return this.value;
  }, t.prototype.match = function(r, e) {
    return r(this.value);
  }, t.prototype._unsafeUnwrap = function(r) {
    return this.value;
  }, t.prototype._unsafeUnwrapErr = function(r) {
    throw xp("Called `_unsafeUnwrapErr` on an Ok", this, r);
  }, t;
}();
var Qn = function() {
  function t(r) {
    this.error = r;
  }
  __name(t, "t");
  return u(t, "Err"), t.prototype.isOk = function() {
    return false;
  }, t.prototype.isErr = function() {
    return !this.isOk();
  }, t.prototype.map = function(r) {
    return en(this.error);
  }, t.prototype.mapErr = function(r) {
    return en(r(this.error));
  }, t.prototype.andThen = function(r) {
    return en(this.error);
  }, t.prototype.orElse = function(r) {
    return r(this.error);
  }, t.prototype.asyncAndThen = function(r) {
    return wp(this.error);
  }, t.prototype.asyncMap = function(r) {
    return wp(this.error);
  }, t.prototype.unwrapOr = function(r) {
    return r;
  }, t.prototype.match = function(r, e) {
    return e(this.error);
  }, t.prototype._unsafeUnwrap = function(r) {
    throw xp("Called `_unsafeUnwrap` on an Err", this, r);
  }, t.prototype._unsafeUnwrapErr = function(r) {
    return this.error;
  }, t;
}();
var z0 = To.fromThrowable;
var Pd = Lt(rn());
function Cd(t) {
  let r = Pn(t);
  return new An.default(r).valueOf() * Math.PI;
}
__name(Cd, "Cd");
u(Cd, "P");
function _o(t) {
  let r = Pn(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(_o, "_o");
u(_o, "B");
function Od(t, r) {
  return new An.default(Pn(t)).valueOf() < new An.default(Pn(r)).valueOf();
}
__name(Od, "Od");
u(Od, "X");
function Md(t, r) {
  return new An.default(Pn(t)).valueOf() > new An.default(Pn(r)).valueOf();
}
__name(Md, "Md");
u(Md, "L");
function Id(t) {
  if (t === "0")
    return true;
  if (!/π/.test(t))
    return false;
  try {
    let r = Pn(t);
    return new An.default(r).valueOf(), true;
  } catch (r) {
    return false;
  }
}
__name(Id, "Id");
u(Id, "Q");
function Pn(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(Pn, "Pn");
u(Pn, "l");
function Ad(t) {
  try {
    let r = Pn(t), e = new An.default(r).toFraction().split("/"), n;
    return e[0] === "0" ? n = "0" : e[0] === "1" ? n = "\u03C0" : e[0] === "-1" ? n = "-\u03C0" : n = `${e[0]}\u03C0`, e.length === 1 ? n : `${n}/${e[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(Ad, "Ad");
u(Ad, "Z");
var Ab = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var sr = u(class {
  static parseFloat(t) {
    if (t.length === 0)
      throw new Error(`Not a number: '${t}'`);
    if (t[0] === "-")
      return -sr.parseFloat(t.substr(1));
    if (t[0] === "\u221A")
      return Math.sqrt(sr.parseFloat(t.substr(1)));
    let r = sr.matchUnicodeFraction((n) => n.character === t);
    if (r !== void 0)
      return r.value;
    let e = parseFloat(t);
    if (isNaN(e))
      throw new Error(`Not a number: '${t}'`);
    return e;
  }
  static simplifyByRounding(t, r) {
    if (t < 0)
      return -sr.simplifyByRounding(-t, r);
    let e = t % 1;
    if (e <= r || 1 - e <= r)
      return Math.round(t);
    let n = sr.matchUnicodeFraction((s) => Math.abs(s.value - t) <= r);
    if (n !== void 0)
      return n.value;
    let o = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= r);
    return o !== void 0 ? Math.sqrt(o.value) : t;
  }
  static matchUnicodeFraction(t) {
    for (let r of Ab)
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
    let n = sr.matchUnicodeFraction((s) => Math.abs(s.value - t) <= r);
    if (n !== void 0)
      return n.character;
    let o = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= r);
    return o !== void 0 ? `\u221A${o.character}` : t % 1 !== 0 && e !== void 0 ? t.toFixed(e) : t.toString();
  }
}, "o");
var Po = sr;
Po.CONSISTENT = new sr(false, 0, 2, ", "), Po.EXACT = new sr(true, 0, void 0, ", "), Po.MINIFIED = new sr(true, 0, void 0, ","), Po.SIMPLIFIED = new sr(true, 5e-4, 3, ", ");
var Ge = u(class {
  static from(t) {
    return typeof t == "number" ? new Ge(t, 0) : t;
  }
  static realPartOf(t) {
    return typeof t == "number" ? t : t.real;
  }
  static imagPartOf(t) {
    return typeof t == "number" ? 0 : t.imag;
  }
  static polar(t, r) {
    let [e, n] = this.snappedCosSin(r);
    return new Ge(t * e, t * n);
  }
  static snappedCosSin(t) {
    let r = Math.PI / 4, e = Math.round(t / r);
    if (e * r === t) {
      let n = Math.sqrt(0.5);
      return [[1, 0], [n, n], [0, 1], [-n, n], [-1, 0], [-n, -n], [0, -1], [n, -n]][e & 7];
    }
    return [Math.cos(t), Math.sin(t)];
  }
  constructor(t, r) {
    this.real = t, this.imag = r;
  }
  isEqualTo(t) {
    return typeof t == "number" ? this.real === t && this.imag === 0 : t instanceof Ge ? this.real === t.real && this.imag === t.imag : false;
  }
  isApproximatelyEqualTo(t, r) {
    if (typeof t == "number" || t instanceof Ge) {
      let e = this.minus(Ge.from(t));
      return Math.abs(e.real) <= r && Math.abs(e.imag) <= r && e.abs() <= r;
    }
    return false;
  }
  conjugate() {
    return new Ge(this.real, -this.imag);
  }
  neg() {
    return new Ge(-this.real, -this.imag);
  }
  plus(t) {
    let r = Ge.from(t);
    return new Ge(this.real + r.real, this.imag + r.imag);
  }
  minus(t) {
    let r = Ge.from(t);
    return new Ge(this.real - r.real, this.imag - r.imag);
  }
  times(t) {
    let r = Ge.from(t);
    return new Ge(this.real * r.real - this.imag * r.imag, this.real * r.imag + this.imag * r.real);
  }
  dividedBy(t) {
    let r = Ge.from(t), e = r.norm2();
    if (e === 0)
      return en(Error("Division by Zero"));
    let n = this.times(r.conjugate());
    return Jr(new Ge(n.real / e, n.imag / e));
  }
  norm2() {
    return this.real * this.real + this.imag * this.imag;
  }
  abs() {
    return Math.sqrt(this.norm2());
  }
  unit() {
    let t = this.norm2();
    return t < 1e-5 ? Ge.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t))._unsafeUnwrap();
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  raisedTo(t) {
    return t === 0.5 && this.imag === 0 && this.real >= 0 ? new Ge(Math.sqrt(this.real), 0) : Ge.ZERO.isEqualTo(t) ? Ge.ONE : this.isEqualTo(Ge.ZERO) ? Ge.ZERO : this.ln().times(Ge.from(t)).exp();
  }
  toString(t) {
    return t = t || Po.EXACT, t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t);
  }
  exp() {
    return Ge.polar(Math.exp(this.real), this.imag);
  }
  ln() {
    return new Ge(Math.log(this.abs()), this.phase());
  }
  toStringAllowSingleValue(t) {
    return Math.abs(this.imag) <= t.maxAbbreviationError ? t.formatFloat(this.real) : Math.abs(this.real) <= t.maxAbbreviationError ? Math.abs(this.imag - 1) <= t.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= t.maxAbbreviationError ? "-i" : `${t.formatFloat(this.imag)}i` : this.toStringBothValues(t);
  }
  toStringBothValues(t) {
    let r = this.imag >= 0 ? "+" : "-", e = t.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= t.maxAbbreviationError ? "" : t.formatFloat(Math.abs(this.imag));
    return `${(t.allowAbbreviation || t.fixedDigits === void 0 || this.real < 0 ? "" : "+") + t.formatFloat(this.real) + r + e}i`;
  }
}, "i");
var In = Ge;
In.ZERO = new Ge(0, 0), In.ONE = new Ge(1, 0), In.I = new Ge(0, 1);
var zo = { MAX_QUBIT_COUNT: 16 };
var nu = 0;
var _t = u(class extends Error {
  constructor(t, r) {
    super(t), this.detailsObj = r, this.name = "Error", this.message = t, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), nu++;
    try {
      this.details = nu === 1 ? (0, Pd.format)(this.detailsObj) : "(failed to prettyFormat detailsObj due to possibly re-entrancy)";
    } catch (e) {
      console.error(e), this.details = "(failed to prettyFormat detailsObj, see the console for details)";
    } finally {
      nu--;
    }
  }
}, "S");
function fe(t, r = {}, e = document) {
  let n = new CustomEvent(t, { bubbles: true, cancelable: true, detail: r });
  return e.dispatchEvent(n);
}
__name(fe, "fe");
u(fe, "re");
var _d = u((t) => typeof t == "number" && 1 <= t && t <= zo.MAX_QUBIT_COUNT, "ie");
var Pb = u(() => ({ message: "Parse Error" }), "q");
var zd = u(class {
  static need(t, r, e) {
    if (t !== true) {
      let n = e === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(e).join(", ")}]`, o = `Precondition failed

Message: ${r === void 0 ? "(not provided)" : r}

Args: ${n}`;
      throw new Error(o);
    }
  }
  static notNull(t) {
    zd.need(t != null, "notNull");
  }
  static get urlJson() {
    let t = new URL(location.href, window.location.origin), r = decodeURIComponent(t.pathname), e = r.lastIndexOf("/");
    return r.substring(e + 1);
  }
}, "h");
var H = zd;
H.safeJsonParse = To.fromThrowable(JSON.parse, Pb);
var iu = "\u25E6";
var ou = "Bloch";
var au = "\u2022";
var ps = "H";
var ds = "Measure";
var fs = "P";
var su = "QFT\u2020";
var lu = "QFT";
var hs = "X^\xBD";
var ms = "Rx";
var vs = "Ry";
var gs = "Rz";
var bs = "S\u2020";
var ys = "S";
var uu = "\u2026";
var cu = "Swap";
var ws = "T\u2020";
var xs = "T";
var Rd = "|0>";
var Dd = "|1>";
var Es = "X";
var Ss = "Y";
var Ts = "Z";
var pu = /* @__PURE__ */ new WeakSet();
function fu(t) {
  pu.add(t), t.shadowRoot && hu(t.shadowRoot), vu(t), mu(t.ownerDocument);
}
__name(fu, "fu");
u(fu, "bind");
function hu(t) {
  vu(t), mu(t);
}
__name(hu, "hu");
u(hu, "bindShadow");
var Cs = /* @__PURE__ */ new WeakMap();
function mu(t = document) {
  if (Cs.has(t))
    return Cs.get(t);
  let r = false, e = new MutationObserver((o) => {
    for (let s of o)
      if (s.type === "attributes" && s.target instanceof Element)
        du(s.target);
      else if (s.type === "childList" && s.addedNodes.length)
        for (let p of s.addedNodes)
          p instanceof Element && vu(p);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, Cs.delete(t), e.disconnect();
  } };
  return Cs.set(t, n), n;
}
__name(mu, "mu");
u(mu, "listenForBind");
function vu(t) {
  for (let r of t.querySelectorAll("[data-action]"))
    du(r);
  t instanceof Element && t.hasAttribute("data-action") && du(t);
}
__name(vu, "vu");
u(vu, "bindElements");
function _b(t) {
  let r = t.currentTarget;
  for (let e of kd(r))
    if (t.type === e.type) {
      let n = r.closest(e.tag);
      pu.has(n) && typeof n[e.method] == "function" && n[e.method](t);
      let o = r.getRootNode();
      if (o instanceof ShadowRoot && pu.has(o.host) && o.host.matches(e.tag)) {
        let s = o.host;
        typeof s[e.method] == "function" && s[e.method](t);
      }
    }
}
__name(_b, "_b");
u(_b, "handleEvent");
function* kd(t) {
  for (let r of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, e), tag: r.slice(e + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(kd, "kd");
u(kd, "bindings");
function du(t) {
  for (let r of kd(t))
    t.addEventListener(r.type, _b);
}
__name(du, "du");
u(du, "bindActions");
function gu(t) {
  let r = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[t.name] = t, window.customElements.define(r, t));
}
__name(gu, "gu");
u(gu, "register");
function bu(t, r) {
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
__name(bu, "bu");
u(bu, "findTarget");
function yu(t, r) {
  let e = t.tagName.toLowerCase(), n = [];
  if (t.shadowRoot)
    for (let o of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${r}"]`))
      o.closest(e) || n.push(o);
  for (let o of t.querySelectorAll(`[data-targets~="${e}.${r}"]`))
    o.closest(e) === t && n.push(o);
  return n;
}
__name(yu, "yu");
u(yu, "findTargets");
function Oe(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return bu(this, r);
  } });
}
__name(Oe, "Oe");
u(Oe, "target");
function dt(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return yu(this, r);
  } });
}
__name(dt, "dt");
u(dt, "targets");
function wu(t) {
  for (let r of t.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === t && t.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(wu, "wu");
u(wu, "autoShadowRoot");
var Os = /* @__PURE__ */ new WeakMap();
function D(t, r) {
  Os.has(t) || Os.set(t, []), Os.get(t).push(r);
}
__name(D, "D");
u(D, "attr");
function xu(t, r) {
  r || (r = Nd(Object.getPrototypeOf(t)));
  for (let e of r) {
    let n = t[e], o = Gd(e), s = { configurable: true, get() {
      return this.getAttribute(o) || "";
    }, set(p) {
      this.setAttribute(o, p || "");
    } };
    typeof n == "number" ? s = { configurable: true, get() {
      return Number(this.getAttribute(o) || 0);
    }, set(p) {
      this.setAttribute(o, p);
    } } : typeof n == "boolean" && (s = { configurable: true, get() {
      return this.hasAttribute(o);
    }, set(p) {
      this.toggleAttribute(o, p);
    } }), Object.defineProperty(t, e, s), e in t && !t.hasAttribute(o) && s.set.call(t, n);
  }
}
__name(xu, "xu");
u(xu, "initializeAttrs");
function Nd(t) {
  let r = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let n = Os.get(e) || [];
    for (let o of n)
      r.add(o);
    e = Object.getPrototypeOf(e);
  }
  return r;
}
__name(Nd, "Nd");
u(Nd, "getAttrNames");
function Gd(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Gd, "Gd");
u(Gd, "attrToAttributeName");
function Eu(t) {
  let r = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...Nd(t.prototype)].map(Gd).concat(r);
  }, set(e) {
    r = e;
  } });
}
__name(Eu, "Eu");
u(Eu, "defineObservedAttributes");
var zb = /* @__PURE__ */ new WeakSet();
function Ld(t, r) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), zb.add(t), wu(t), xu(t), fu(t), r && r.call(t), t.shadowRoot && hu(t.shadowRoot);
}
__name(Ld, "Ld");
u(Ld, "initializeInstance");
function jd(t) {
  Eu(t), gu(t);
}
__name(jd, "jd");
u(jd, "initializeClass");
function X(t) {
  let r = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    Ld(this, r);
  }, jd(t);
}
__name(X, "X");
u(X, "controller");
function he(t) {
  class r extends t {
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
  }
  __name(r, "r");
  return u(r, "ActivateableMixinClass"), M([D], r.prototype, "active", 2), r;
}
__name(he, "he");
u(he, "ActivateableMixin");
var ri = u((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function _n(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(r, "r");
  return u(r, "AngleableMixinClass"), M([D], r.prototype, "angle", 2), M([D], r.prototype, "reducedAngle", 2), r;
}
__name(_n, "_n");
u(_n, "AngleableMixin");
var Ro = u((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
function Le(t) {
  class r extends t {
    get controls() {
      let n = this.getAttribute("data-controls");
      return n === null ? [] : n === "" ? [] : n.split(",").map((o) => parseInt(o)).sort();
    }
    set controls(n) {
      this.setAttribute("data-controls", n.sort().join());
    }
    get antiControls() {
      let n = this.getAttribute("data-anti-controls");
      return n === null ? [] : n === "" ? [] : n.split(",").map((o) => parseInt(o)).sort();
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
  return u(r, "ControllableMixinClass"), r;
}
__name(Le, "Le");
u(Le, "ControllableMixin");
function Me(t) {
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
  return u(r, "DisableableMixinClass"), M([D], r.prototype, "disabled", 2), r;
}
__name(Me, "Me");
u(Me, "DisableableMixin");
var V = u(function() {
  return V = Object.assign || u(function(r) {
    for (var e, n = 1, o = arguments.length; n < o; n++) {
      e = arguments[n];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s]);
    }
    return r;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function Ri(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (e[n[o]] = t[n[o]]);
  return e;
}
__name(Ri, "Ri");
u(Ri, "__rest");
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
  var n = e.call(t), o, s = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
      s.push(o.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      o && !o.done && (e = n.return) && e.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return s;
}
__name(Ee, "Ee");
u(Ee, "__read");
function De(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, o = r.length, s; n < o; n++)
      (s || !(n in r)) && (s || (s = Array.prototype.slice.call(r, 0, n)), s[n] = r[n]);
  return t.concat(s || Array.prototype.slice.call(r));
}
__name(De, "De");
u(De, "__spreadArray");
var ke;
(function(t) {
  t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
})(ke || (ke = {}));
var nn;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(nn || (nn = {}));
var Do = ke.Start;
var Di = ke.Stop;
var zn = ke.Raise;
var ni = ke.Send;
var Ms = ke.Cancel;
var Bd = ke.NullEvent;
var Su = ke.Assign;
var ax = ke.After;
var sx = ke.DoneState;
var Is = ke.Log;
var Hd = ke.Init;
var ko = ke.Invoke;
var lx = ke.ErrorExecution;
var Tu = ke.ErrorPlatform;
var Cu = ke.ErrorCustom;
var No = ke.Update;
var $d = ke.Choose;
var qd = ke.Pure;
var As = ".";
var Ou = {};
var Ps = "xstate.guard";
var Fd = "";
var je = true;
var _s;
function Lo(t, r, e) {
  e === void 0 && (e = As);
  var n = ki(t, e), o = ki(r, e);
  return Te(o) ? Te(n) ? o === n : false : Te(n) ? n in o : Object.keys(n).every(function(s) {
    return s in o ? Lo(n[s], o[s]) : false;
  });
}
__name(Lo, "Lo");
u(Lo, "matchesState");
function zs(t) {
  try {
    return Te(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(zs, "zs");
u(zs, "getEventType");
function Rs(t, r) {
  try {
    return on(t) ? t : t.toString().split(r);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(Rs, "Rs");
u(Rs, "toStatePath");
function Rb(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(Rb, "Rb");
u(Rb, "isStateLike");
function ki(t, r) {
  if (Rb(t))
    return t.value;
  if (on(t))
    return Go(t);
  if (typeof t != "string")
    return t;
  var e = Rs(t, r);
  return Go(e);
}
__name(ki, "ki");
u(ki, "toStateValue");
function Go(t) {
  if (t.length === 1)
    return t[0];
  for (var r = {}, e = r, n = 0; n < t.length - 1; n++)
    n === t.length - 2 ? e[t[n]] = t[n + 1] : (e[t[n]] = {}, e = e[t[n]]);
  return r;
}
__name(Go, "Go");
u(Go, "pathToStateValue");
function Ni(t, r) {
  for (var e = {}, n = Object.keys(t), o = 0; o < n.length; o++) {
    var s = n[o];
    e[s] = r(t[s], s, t, o);
  }
  return e;
}
__name(Ni, "Ni");
u(Ni, "mapValues");
function Mu(t, r, e) {
  var n, o, s = {};
  try {
    for (var p = we(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      e(d) && (s[m] = r(d, m, t));
    }
  } catch (f) {
    n = { error: f };
  } finally {
    try {
      v && !v.done && (o = p.return) && o.call(p);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return s;
}
__name(Mu, "Mu");
u(Mu, "mapFilterValues");
var Ud = u(function(t) {
  return function(r) {
    var e, n, o = r;
    try {
      for (var s = we(t), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        o = o[v];
      }
    } catch (m) {
      e = { error: m };
    } finally {
      try {
        p && !p.done && (n = s.return) && n.call(s);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return o;
  };
}, "path");
function Wd(t, r) {
  return function(e) {
    var n, o, s = e;
    try {
      for (var p = we(t), v = p.next(); !v.done; v = p.next()) {
        var m = v.value;
        s = s[r][m];
      }
    } catch (d) {
      n = { error: d };
    } finally {
      try {
        v && !v.done && (o = p.return) && o.call(p);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return s;
  };
}
__name(Wd, "Wd");
u(Wd, "nestedPath");
function jo(t) {
  if (!t)
    return [[]];
  if (Te(t))
    return [[t]];
  var r = qe(Object.keys(t).map(function(e) {
    var n = t[e];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[e]] : jo(t[e]).map(function(o) {
      return [e].concat(o);
    });
  }));
  return r;
}
__name(jo, "jo");
u(jo, "toStatePaths");
function qe(t) {
  var r;
  return (r = []).concat.apply(r, De([], Ee(t), false));
}
__name(qe, "qe");
u(qe, "flatten");
function Vd(t) {
  return on(t) ? t : [t];
}
__name(Vd, "Vd");
u(Vd, "toArrayStrict");
function lr(t) {
  return t === void 0 ? [] : Vd(t);
}
__name(lr, "lr");
u(lr, "toArray");
function ii(t, r, e) {
  var n, o;
  if (Ie(t))
    return t(r, e.data);
  var s = {};
  try {
    for (var p = we(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      Ie(d) ? s[m] = d(r, e.data) : s[m] = d;
    }
  } catch (f) {
    n = { error: f };
  } finally {
    try {
      v && !v.done && (o = p.return) && o.call(p);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return s;
}
__name(ii, "ii");
u(ii, "mapContext");
function Yd(t) {
  return /^(done|error)\./.test(t);
}
__name(Yd, "Yd");
u(Yd, "isBuiltInEvent");
function Iu(t) {
  return !!(t instanceof Promise || t !== null && (Ie(t) || typeof t == "object") && Ie(t.then));
}
__name(Iu, "Iu");
u(Iu, "isPromiseLike");
function Xd(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(Xd, "Xd");
u(Xd, "isBehavior");
function Zd(t, r) {
  var e, n, o = Ee([[], []], 2), s = o[0], p = o[1];
  try {
    for (var v = we(t), m = v.next(); !m.done; m = v.next()) {
      var d = m.value;
      r(d) ? s.push(d) : p.push(d);
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
  return [s, p];
}
__name(Zd, "Zd");
u(Zd, "partition");
function Kd(t, r) {
  return Ni(t.states, function(e, n) {
    if (e) {
      var o = (Te(r) ? void 0 : r[n]) || (e ? e.current : void 0);
      if (o)
        return { current: o, states: Kd(e, o) };
    }
  });
}
__name(Kd, "Kd");
u(Kd, "updateHistoryStates");
function Qd(t, r) {
  return { current: r, states: Kd(t, r) };
}
__name(Qd, "Qd");
u(Qd, "updateHistoryValue");
function Au(t, r, e, n) {
  je || rt(!!t, "Attempting to update undefined context");
  var o = t && e.reduce(function(s, p) {
    var v, m, d = p.assignment, f = { state: n, action: p, _event: r }, g = {};
    if (Ie(d))
      g = d(s, r.data, f);
    else
      try {
        for (var w = we(Object.keys(d)), S = w.next(); !S.done; S = w.next()) {
          var T = S.value, C = d[T];
          g[T] = Ie(C) ? C(s, r.data, f) : C;
        }
      } catch (z) {
        v = { error: z };
      } finally {
        try {
          S && !S.done && (m = w.return) && m.call(w);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, s, g);
  }, t);
  return o;
}
__name(Au, "Au");
u(Au, "updateContext");
var rt = u(function() {
}, "warn");
je || (rt = u(function(t, r) {
  var e = t instanceof Error ? t : void 0;
  if (!(!e && t) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    e && n.push(e), console.warn.apply(console, n);
  }
}, "warn"));
function on(t) {
  return Array.isArray(t);
}
__name(on, "on");
u(on, "isArray");
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
function Ds(t, r) {
  if (t)
    return Te(t) ? { type: Ps, name: t, predicate: r ? r[t] : void 0 } : Ie(t) ? { type: Ps, name: t.name, predicate: t } : t;
}
__name(Ds, "Ds");
u(Ds, "toGuard");
function Jd(t) {
  try {
    return "subscribe" in t && Ie(t.subscribe);
  } catch (r) {
    return false;
  }
}
__name(Jd, "Jd");
u(Jd, "isObservable");
var Gr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var gx = (_s = {}, _s[Gr] = function() {
  return this;
}, _s[Symbol.observable] = function() {
  return this;
}, _s);
function Lr(t) {
  return !!t && "__xstatenode" in t;
}
__name(Lr, "Lr");
u(Lr, "isMachine");
function ef(t) {
  return !!t && typeof t.send == "function";
}
__name(ef, "ef");
u(ef, "isActor");
function Gi(t, r) {
  return Te(t) || typeof t == "number" ? V({ type: t }, r) : t;
}
__name(Gi, "Gi");
u(Gi, "toEventObject");
function at(t, r) {
  if (!Te(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = Gi(t);
  return V({ name: e.type, data: e, $$type: "scxml", type: "external" }, r);
}
__name(at, "at");
u(at, "toSCXMLEvent");
function oi(t, r) {
  var e = Vd(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || Lr(n) ? { target: n, event: t } : V(V({}, n), { event: t });
  });
  return e;
}
__name(oi, "oi");
u(oi, "toTransitionConfigArray");
function tf(t) {
  if (!(t === void 0 || t === Fd))
    return lr(t);
}
__name(tf, "tf");
u(tf, "normalizeTarget");
function rf(t, r, e) {
  if (!je) {
    var n = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
    if (t === r)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(n));
    else {
      var o = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(o));
    }
  }
}
__name(rf, "rf");
u(rf, "reportUnhandledExceptionOnInvocation");
function ks(t, r, e, n, o) {
  var s = t.options.guards, p = { state: o, cond: r, _event: n };
  if (r.type === Ps)
    return ((s == null ? void 0 : s[r.name]) || r.predicate)(e, n.data, p);
  var v = s == null ? void 0 : s[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
  return v(e, n.data, p);
}
__name(ks, "ks");
u(ks, "evaluateGuard");
function Ns(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name(Ns, "Ns");
u(Ns, "toInvokeSource");
function Li(t, r, e) {
  var n = u(function() {
  }, "noop"), o = typeof t == "object", s = o ? t : null;
  return { next: ((o ? t.next : t) || n).bind(s), error: ((o ? t.error : r) || n).bind(s), complete: ((o ? t.complete : e) || n).bind(s) };
}
__name(Li, "Li");
u(Li, "toObserver");
function Bo(t, r) {
  return "".concat(t, ":invocation[").concat(r, "]");
}
__name(Bo, "Bo");
u(Bo, "createInvokeId");
function Ho(t) {
  return (t.type === zn || t.type === ni && t.to === nn.Internal) && typeof t.delay != "number";
}
__name(Ho, "Ho");
u(Ho, "isRaisableAction");
var an = at({ type: Hd });
function Gs(t, r) {
  return r && r[t] || void 0;
}
__name(Gs, "Gs");
u(Gs, "getActionFunction");
function Bi(t, r) {
  var e;
  if (Te(t) || typeof t == "number") {
    var n = Gs(t, r);
    Ie(n) ? e = { type: t, exec: n } : n ? e = n : e = { type: t, exec: void 0 };
  } else if (Ie(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var n = Gs(t.type, r);
    if (Ie(n))
      e = V(V({}, t), { exec: n });
    else if (n) {
      var o = n.type || t.type;
      e = V(V(V({}, n), t), { type: o });
    } else
      e = t;
  }
  return e;
}
__name(Bi, "Bi");
u(Bi, "toActionObject");
var jr = u(function(t, r) {
  if (!t)
    return [];
  var e = on(t) ? t : [t];
  return e.map(function(n) {
    return Bi(n, r);
  });
}, "toActionObjects");
function Ls(t) {
  var r = Bi(t);
  return V(V({ id: Te(t) ? t : r.id }, r), { type: r.type });
}
__name(Ls, "Ls");
u(Ls, "toActivityDefinition");
function nf(t, r) {
  return { type: zn, event: typeof t == "function" ? t : Gi(t), delay: r ? r.delay : void 0, id: r == null ? void 0 : r.id };
}
__name(nf, "nf");
u(nf, "raise");
function Db(t, r, e, n) {
  var o = { _event: e }, s = at(Ie(t.event) ? t.event(r, e.data, o) : t.event), p;
  if (Te(t.delay)) {
    var v = n && n[t.delay];
    p = Ie(v) ? v(r, e.data, o) : v;
  } else
    p = Ie(t.delay) ? t.delay(r, e.data, o) : t.delay;
  return V(V({}, t), { type: zn, _event: s, delay: p });
}
__name(Db, "Db");
u(Db, "resolveRaise");
function of(t, r) {
  return { to: r ? r.to : void 0, type: ni, event: Ie(t) ? t : Gi(t), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Ie(t) ? t.name : zs(t) };
}
__name(of, "of");
u(of, "send");
function kb(t, r, e, n) {
  var o = { _event: e }, s = at(Ie(t.event) ? t.event(r, e.data, o) : t.event), p;
  if (Te(t.delay)) {
    var v = n && n[t.delay];
    p = Ie(v) ? v(r, e.data, o) : v;
  } else
    p = Ie(t.delay) ? t.delay(r, e.data, o) : t.delay;
  var m = Ie(t.to) ? t.to(r, e.data, o) : t.to;
  return V(V({}, t), { to: m, _event: s, event: s.data, delay: p });
}
__name(kb, "kb");
u(kb, "resolveSend");
var Nb = u(function(t, r, e) {
  return V(V({}, t), { value: Te(t.expr) ? t.expr : t.expr(r, e.data, { _event: e }) });
}, "resolveLog");
var af = u(function(t) {
  return { type: Ms, sendId: t };
}, "cancel");
function sf(t) {
  var r = Ls(t);
  return { type: ke.Start, activity: r, exec: void 0 };
}
__name(sf, "sf");
u(sf, "start");
function lf(t) {
  var r = Ie(t) ? t : Ls(t);
  return { type: ke.Stop, activity: r, exec: void 0 };
}
__name(lf, "lf");
u(lf, "stop");
function Gb(t, r, e) {
  var n = Ie(t.activity) ? t.activity(r, e.data) : t.activity, o = typeof n == "string" ? { id: n } : n, s = { type: ke.Stop, activity: o };
  return s;
}
__name(Gb, "Gb");
u(Gb, "resolveStop");
function uf(t, r) {
  var e = r ? "#".concat(r) : "";
  return "".concat(ke.After, "(").concat(t, ")").concat(e);
}
__name(uf, "uf");
u(uf, "after");
function $o(t, r) {
  var e = "".concat(ke.DoneState, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name($o, "$o");
u($o, "done");
function Hi(t, r) {
  var e = "".concat(ke.DoneInvoke, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(Hi, "Hi");
u(Hi, "doneInvoke");
function ai(t, r) {
  var e = "".concat(ke.ErrorPlatform, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(ai, "ai");
u(ai, "error");
var Lb = u(function(t) {
  var r, e, n = [];
  try {
    for (var o = we(t), s = o.next(); !s.done; s = o.next())
      for (var p = s.value, v = 0; v < p.actions.length; ) {
        if (p.actions[v].type === Su) {
          n.push(p.actions[v]), p.actions.splice(v, 1);
          continue;
        }
        v++;
      }
  } catch (m) {
    r = { error: m };
  } finally {
    try {
      s && !s.done && (e = o.return) && e.call(o);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}, "pluckAssigns");
function ji(t, r, e, n, o, s, p) {
  p === void 0 && (p = false);
  var v = p ? [] : Lb(o), m = v.length ? Au(e, n, v, r) : e, d = p ? [e] : void 0, f = [];
  function g(T, C) {
    var z;
    switch (C.type) {
      case zn: {
        var N = Db(C, m, n, t.options.delays);
        return s && typeof N.delay == "number" && s(N, m, n), N;
      }
      case ni:
        var G = kb(C, m, n, t.options.delays);
        if (!je) {
          var $ = C.delay;
          rt(!Te($) || typeof G.delay == "number", "No delay reference for delay expression '".concat($, "' was found on machine '").concat(t.id, "'"));
        }
        return s && G.to !== nn.Internal && (T === "entry" ? f.push(G) : s(G, m, n)), G;
      case Is: {
        var A = Nb(C, m, n);
        return s == null || s(A, m, n), A;
      }
      case $d: {
        var ee = C, _ = (z = ee.conds.find(function(_e) {
          var Ae = Ds(_e.cond, t.options.guards);
          return !Ae || ks(t, Ae, m, n, s ? void 0 : r);
        })) === null || z === void 0 ? void 0 : z.actions;
        if (!_)
          return [];
        var B = Ee(ji(t, r, m, n, [{ type: T, actions: jr(lr(_), t.options.actions) }], s, p), 2), te = B[0], J = B[1];
        return m = J, d == null || d.push(m), te;
      }
      case qd: {
        var _ = C.get(m, n.data);
        if (!_)
          return [];
        var ue = Ee(ji(t, r, m, n, [{ type: T, actions: jr(lr(_), t.options.actions) }], s, p), 2), K = ue[0], ie = ue[1];
        return m = ie, d == null || d.push(m), K;
      }
      case Di: {
        var A = Gb(C, m, n);
        return s == null || s(A, e, n), A;
      }
      case Su: {
        m = Au(m, n, [C], s ? void 0 : r), d == null || d.push(m);
        break;
      }
      default:
        var q = Bi(C, t.options.actions), oe = q.exec;
        if (s)
          s(q, m, n);
        else if (oe && d) {
          var et = d.length - 1, Ze = V(V({}, q), { exec: function(_e) {
            for (var Ae = [], We = 1; We < arguments.length; We++)
              Ae[We - 1] = arguments[We];
            oe.apply(void 0, De([d[et]], Ee(Ae), false));
          } });
          q = Ze;
        }
        return q;
    }
  }
  __name(g, "g");
  u(g, "handleAction");
  function w(T) {
    var C, z, N = [];
    try {
      for (var G = we(T.actions), $ = G.next(); !$.done; $ = G.next()) {
        var A = $.value, ee = g(T.type, A);
        ee && (N = N.concat(ee));
      }
    } catch (_) {
      C = { error: _ };
    } finally {
      try {
        $ && !$.done && (z = G.return) && z.call(G);
      } finally {
        if (C)
          throw C.error;
      }
    }
    return f.forEach(function(_) {
      s(_, m, n);
    }), f.length = 0, N;
  }
  __name(w, "w");
  u(w, "processBlock");
  var S = qe(o.map(w));
  return [S, m];
}
__name(ji, "ji");
u(ji, "resolveActions");
var cf = [];
var Rn = u(function(t, r) {
  cf.push(t);
  var e = r(t);
  return cf.pop(), e;
}, "provide");
function pf(t) {
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
__name(pf, "pf");
u(pf, "createNullActor");
function df(t, r, e, n) {
  var o, s = Ns(t.src), p = (o = r == null ? void 0 : r.options.services) === null || o === void 0 ? void 0 : o[s.type], v = t.data ? ii(t.data, e, n) : void 0, m = p ? Pu(p, t.id, v) : pf(t.id);
  return m.meta = t, m;
}
__name(df, "df");
u(df, "createInvocableActor");
function Pu(t, r, e) {
  var n = pf(r);
  if (n.deferred = true, Lr(t)) {
    var o = n.state = Rn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    n.getSnapshot = function() {
      return o;
    };
  }
  return n;
}
__name(Pu, "Pu");
u(Pu, "createDeferredActor");
function jb(t) {
  try {
    return typeof t.send == "function";
  } catch (r) {
    return false;
  }
}
__name(jb, "jb");
u(jb, "isActor");
function ff(t) {
  return jb(t) && "id" in t;
}
__name(ff, "ff");
u(ff, "isSpawnedActor");
function hf(t) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[Gr] = function() {
    return this;
  }, r), t);
}
__name(hf, "hf");
u(hf, "toActorRef");
var qo = u(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function zu(t) {
  return Object.keys(t.states).map(function(r) {
    return t.states[r];
  });
}
__name(zu, "zu");
u(zu, "getAllChildren");
function $i(t) {
  return zu(t).filter(function(r) {
    return r.type !== "history";
  });
}
__name($i, "$i");
u($i, "getChildren");
function Ru(t) {
  var r = [t];
  return qo(t) ? r : r.concat(qe($i(t).map(Ru)));
}
__name(Ru, "Ru");
u(Ru, "getAllStateNodes");
function qi(t, r) {
  var e, n, o, s, p, v, m, d, f = new Set(t), g = _u(f), w = new Set(r);
  try {
    for (var S = we(w), T = S.next(); !T.done; T = S.next())
      for (var C = T.value, z = C.parent; z && !w.has(z); )
        w.add(z), z = z.parent;
  } catch (J) {
    e = { error: J };
  } finally {
    try {
      T && !T.done && (n = S.return) && n.call(S);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var N = _u(w);
  try {
    for (var G = we(w), $ = G.next(); !$.done; $ = G.next()) {
      var C = $.value;
      if (C.type === "compound" && (!N.get(C) || !N.get(C).length))
        g.get(C) ? g.get(C).forEach(function(ue) {
          return w.add(ue);
        }) : C.initialStateNodes.forEach(function(ue) {
          return w.add(ue);
        });
      else if (C.type === "parallel")
        try {
          for (var A = (p = void 0, we($i(C))), ee = A.next(); !ee.done; ee = A.next()) {
            var _ = ee.value;
            w.has(_) || (w.add(_), g.get(_) ? g.get(_).forEach(function(ue) {
              return w.add(ue);
            }) : _.initialStateNodes.forEach(function(ue) {
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
  } catch (J) {
    o = { error: J };
  } finally {
    try {
      $ && !$.done && (s = G.return) && s.call(G);
    } finally {
      if (o)
        throw o.error;
    }
  }
  try {
    for (var B = we(w), te = B.next(); !te.done; te = B.next())
      for (var C = te.value, z = C.parent; z && !w.has(z); )
        w.add(z), z = z.parent;
  } catch (J) {
    m = { error: J };
  } finally {
    try {
      te && !te.done && (d = B.return) && d.call(B);
    } finally {
      if (m)
        throw m.error;
    }
  }
  return w;
}
__name(qi, "qi");
u(qi, "getConfiguration");
function mf(t, r) {
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
  var o = {};
  return e.forEach(function(s) {
    o[s.key] = mf(s, r);
  }), o;
}
__name(mf, "mf");
u(mf, "getValueFromAdj");
function _u(t) {
  var r, e, n = /* @__PURE__ */ new Map();
  try {
    for (var o = we(t), s = o.next(); !s.done; s = o.next()) {
      var p = s.value;
      n.has(p) || n.set(p, []), p.parent && (n.has(p.parent) || n.set(p.parent, []), n.get(p.parent).push(p));
    }
  } catch (v) {
    r = { error: v };
  } finally {
    try {
      s && !s.done && (e = o.return) && e.call(o);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}
__name(_u, "_u");
u(_u, "getAdjList");
function vf(t, r) {
  var e = qi([t], r);
  return mf(t, _u(e));
}
__name(vf, "vf");
u(vf, "getValue");
function Fi(t, r) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === r;
  }) : t instanceof Set ? t.has(r) : false;
}
__name(Fi, "Fi");
u(Fi, "has");
function gf(t) {
  return De([], Ee(new Set(qe(De([], Ee(t.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(gf, "gf");
u(gf, "nextEvents");
function Fo(t, r) {
  return r.type === "compound" ? $i(r).some(function(e) {
    return e.type === "final" && Fi(t, e);
  }) : r.type === "parallel" ? $i(r).every(function(e) {
    return Fo(t, e);
  }) : false;
}
__name(Fo, "Fo");
u(Fo, "isInFinalState");
function bf(t) {
  return t === void 0 && (t = []), t.reduce(function(r, e) {
    return e.meta !== void 0 && (r[e.id] = e.meta), r;
  }, {});
}
__name(bf, "bf");
u(bf, "getMeta");
function Du(t) {
  return new Set(qe(t.map(function(r) {
    return r.tags;
  })));
}
__name(Du, "Du");
u(Du, "getTagsFromConfiguration");
function ku(t, r) {
  if (t === r)
    return true;
  if (t === void 0 || r === void 0)
    return false;
  if (Te(t) || Te(r))
    return t === r;
  var e = Object.keys(t), n = Object.keys(r);
  return e.length === n.length && e.every(function(o) {
    return ku(t[o], r[o]);
  });
}
__name(ku, "ku");
u(ku, "stateValuesEqual");
function yf(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(yf, "yf");
u(yf, "isStateConfig");
function wf(t, r) {
  var e = t.exec, n = V(V({}, t), { exec: e !== void 0 ? function() {
    return e(r.context, r.event, { action: t, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(wf, "wf");
u(wf, "bindActionToState");
var wr = function() {
  function t(r) {
    var e = this, n;
    this.actions = [], this.activities = Ou, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || Ou, this.meta = bf(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return gf(e.configuration);
    } });
  }
  __name(t, "t");
  return u(t, "State"), t.from = function(r, e) {
    if (r instanceof t)
      return r.context !== e ? new t({ value: r.value, context: e, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = an;
    return new t({ value: r, context: e, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, t.create = function(r) {
    return new t(r);
  }, t.inert = function(r, e) {
    if (r instanceof t) {
      if (!r.actions.length)
        return r;
      var n = an;
      return new t({ value: r.value, context: e, _event: n, _sessionid: null, historyValue: r.historyValue, history: r.history, activities: r.activities, configuration: r.configuration, transitions: [], children: {} });
    }
    return t.from(r, e);
  }, t.prototype.toStrings = function(r, e) {
    var n = this;
    if (r === void 0 && (r = this.value), e === void 0 && (e = "."), Te(r))
      return [r];
    var o = Object.keys(r);
    return o.concat.apply(o, De([], Ee(o.map(function(s) {
      return n.toStrings(r[s], e).map(function(p) {
        return s + e + p;
      });
    })), false));
  }, t.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var e = r.tags;
    r.machine;
    var n = Ri(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(e) });
  }, t.prototype.matches = function(r) {
    return Lo(r, this.value);
  }, t.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, t.prototype.can = function(r) {
    var e;
    je && rt(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(o) {
      return o.target !== void 0 || o.actions.length;
    });
  }, t;
}();
var Bb = { deferEvents: false };
var Nu = function() {
  function t(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Bb), r);
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
var Gu = /* @__PURE__ */ new Map();
var Hb = 0;
var Ui = { bookId: function() {
  return "x:".concat(Hb++);
}, register: function(t, r) {
  return Gu.set(t, r), t;
}, get: function(t) {
  return Gu.get(t);
}, free: function(t) {
  Gu.delete(t);
} };
function js() {
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
__name(js, "js");
u(js, "getGlobal");
function $b() {
  var t = js();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name($b, "$b");
u($b, "getDevTools");
function xf(t) {
  if (js()) {
    var r = $b();
    r && r.register(t);
  }
}
__name(xf, "xf");
u(xf, "registerService");
function Ef(t, r) {
  r === void 0 && (r = {});
  var e = t.initialState, n = /* @__PURE__ */ new Set(), o = [], s = false, p = u(function() {
    if (!s) {
      for (s = true; o.length > 0; ) {
        var d = o.shift();
        e = t.transition(e, d, m), n.forEach(function(f) {
          return f.next(e);
        });
      }
      s = false;
    }
  }, "flush"), v = hf({ id: r.id, send: function(d) {
    o.push(d), p();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(d, f, g) {
    var w = Li(d, f, g);
    return n.add(w), w.next(e), { unsubscribe: function() {
      n.delete(w);
    } };
  } }), m = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return e = t.start ? t.start(m) : e, v;
}
__name(Ef, "Ef");
u(Ef, "spawnBehavior");
var qb = { sync: false, autoForward: false };
var st;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(st || (st = {}));
var Sf = function() {
  function t(r, e) {
    e === void 0 && (e = t.defaultOptions);
    var n = this;
    this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = st.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(f, g) {
      if (on(f))
        return n.batch(f), n.state;
      var w = at(Gi(f, g));
      if (n.status === st.Stopped)
        return je || rt(false, 'Event "'.concat(w.name, '" was sent to stopped service "').concat(n.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(w.data))), n.state;
      if (n.status !== st.Running && !n.options.deferEvents)
        throw new Error('Event "'.concat(w.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(w.data)));
      return n.scheduler.schedule(function() {
        n.forward(w);
        var S = n._nextState(w);
        n.update(S, w);
      }), n._state;
    }, this.sendTo = function(f, g, w) {
      var S = n.parent && (g === nn.Parent || n.parent.id === g), T = S ? n.parent : Te(g) ? g === nn.Internal ? n : n.children.get(g) || Ui.get(g) : ef(g) ? g : void 0;
      if (!T) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(g, "' from service '").concat(n.id, "'."));
        je || rt(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(f.type));
        return;
      }
      if ("machine" in T) {
        if (n.status !== st.Stopped || n.parent !== T || n.state.done) {
          var C = V(V({}, f), { name: f.name === Cu ? "".concat(ai(n.id)) : f.name, origin: n.sessionId });
          !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, C]) : T.send(C);
        }
      } else
        !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, f.data]) : T.send(f.data);
    }, this._exec = function(f, g, w, S) {
      S === void 0 && (S = n.machine.options.actions);
      var T = f.exec || Gs(f.type, S), C = Ie(T) ? T : T ? T.exec : f.exec;
      if (C)
        try {
          return C(g, w.data, n.machine.config.predictableActionArguments ? { action: f, _event: w } : { action: f, state: n.state, _event: w });
        } catch (oe) {
          throw n.parent && n.parent.send({ type: "xstate.error", data: oe }), oe;
        }
      switch (f.type) {
        case zn: {
          var z = f;
          n.defer(z);
          break;
        }
        case ni:
          var N = f;
          if (typeof N.delay == "number") {
            n.defer(N);
            return;
          } else
            N.to ? n.sendTo(N._event, N.to, w === an) : n.send(N._event);
          break;
        case Ms:
          n.cancel(f.sendId);
          break;
        case Do: {
          if (n.status !== st.Running)
            return;
          var G = f.activity;
          if (!n.machine.config.predictableActionArguments && !n.state.activities[G.id || G.type])
            break;
          if (G.type === ke.Invoke) {
            var $ = Ns(G.src), A = n.machine.options.services ? n.machine.options.services[$.type] : void 0, ee = G.id, _ = G.data;
            je || rt(!("forward" in G), "`forward` property is deprecated (found in invocation of '".concat(G.src, "' in in machine '").concat(n.machine.id, "'). ") + "Please use `autoForward` instead.");
            var B = "autoForward" in G ? G.autoForward : !!G.forward;
            if (!A) {
              je || rt(false, "No service found for invocation '".concat(G.src, "' in machine '").concat(n.machine.id, "'."));
              return;
            }
            var te = _ ? ii(_, g, w) : void 0;
            if (typeof A == "string")
              return;
            var J = Ie(A) ? A(g, w.data, { data: te, src: $, meta: G.meta }) : A;
            if (!J)
              return;
            var ue = void 0;
            Lr(J) && (J = te ? J.withContext(te) : J, ue = { autoForward: B }), n.spawn(J, ee, ue);
          } else
            n.spawnActivity(G);
          break;
        }
        case Di: {
          n.stopChild(f.activity.id);
          break;
        }
        case Is:
          var K = f, ie = K.label, q = K.value;
          ie ? n.logger(ie, q) : n.logger(q);
          break;
        default:
          je || rt(false, "No implementation found for action type '".concat(f.type, "'"));
          break;
      }
    };
    var o = V(V({}, t.defaultOptions), e), s = o.clock, p = o.logger, v = o.parent, m = o.id, d = m !== void 0 ? m : r.id;
    this.id = d, this.logger = p, this.clock = s, this.parent = v, this.options = o, this.scheduler = new Nu({ deferEvents: this.options.deferEvents }), this.sessionId = Ui.bookId();
  }
  __name(t, "t");
  return u(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : Rn(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "state", { get: function() {
    return je || rt(this.status !== st.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), t.prototype.execute = function(r, e) {
    var n, o;
    try {
      for (var s = we(r.actions), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        this.exec(v, r, e);
      }
    } catch (m) {
      n = { error: m };
    } finally {
      try {
        p && !p.done && (o = s.return) && o.call(s);
      } finally {
        if (n)
          throw n.error;
      }
    }
  }, t.prototype.update = function(r, e) {
    var n, o, s, p, v, m, d, f, g = this;
    if (r._sessionid = this.sessionId, this._state = r, (!this.machine.config.predictableActionArguments || e === an) && this.options.execute)
      this.execute(this.state);
    else
      for (var w = void 0; w = this._outgoingQueue.shift(); )
        w[0].send(w[1]);
    if (this.children.forEach(function(J) {
      g.state.children[J.id] = J;
    }), this.devTools && this.devTools.send(e.data, r), r.event)
      try {
        for (var S = we(this.eventListeners), T = S.next(); !T.done; T = S.next()) {
          var C = T.value;
          C(r.event);
        }
      } catch (J) {
        n = { error: J };
      } finally {
        try {
          T && !T.done && (o = S.return) && o.call(S);
        } finally {
          if (n)
            throw n.error;
        }
      }
    try {
      for (var z = we(this.listeners), N = z.next(); !N.done; N = z.next()) {
        var C = N.value;
        C(r, r.event);
      }
    } catch (J) {
      s = { error: J };
    } finally {
      try {
        N && !N.done && (p = z.return) && p.call(z);
      } finally {
        if (s)
          throw s.error;
      }
    }
    try {
      for (var G = we(this.contextListeners), $ = G.next(); !$.done; $ = G.next()) {
        var A = $.value;
        A(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (J) {
      v = { error: J };
    } finally {
      try {
        $ && !$.done && (m = G.return) && m.call(G);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (this.state.done) {
      var ee = r.configuration.find(function(J) {
        return J.type === "final" && J.parent === g.machine;
      }), _ = ee && ee.doneData ? ii(ee.doneData, r.context, e) : void 0;
      this._doneEvent = Hi(this.id, _);
      try {
        for (var B = we(this.doneListeners), te = B.next(); !te.done; te = B.next()) {
          var C = te.value;
          C(this._doneEvent);
        }
      } catch (J) {
        d = { error: J };
      } finally {
        try {
          te && !te.done && (f = B.return) && f.call(B);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this._stop(), this._stopChildren(), Ui.free(this.sessionId);
    }
  }, t.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === st.Running && r(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(r, e, n) {
    var o = this, s = Li(r, e, n);
    this.listeners.add(s.next), this.status !== st.NotStarted && s.next(this.state);
    var p = u(function() {
      o.doneListeners.delete(p), o.stopListeners.delete(p), s.complete();
    }, "completeOnce");
    return this.status === st.Stopped ? s.complete() : (this.onDone(p), this.onStop(p)), { unsubscribe: function() {
      o.listeners.delete(s.next), o.doneListeners.delete(p), o.stopListeners.delete(p);
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
    return this.status === st.Stopped && this._doneEvent ? r(this._doneEvent) : this.doneListeners.add(r), this;
  }, t.prototype.off = function(r) {
    return this.listeners.delete(r), this.eventListeners.delete(r), this.sendListeners.delete(r), this.stopListeners.delete(r), this.doneListeners.delete(r), this.contextListeners.delete(r), this;
  }, t.prototype.start = function(r) {
    var e = this;
    if (this.status === st.Running)
      return this;
    this.machine._init(), Ui.register(this.sessionId, this), this.initialized = true, this.status = st.Running;
    var n = r === void 0 ? this.initialState : Rn(this, function() {
      return yf(r) ? e.machine.resolveState(r) : e.machine.resolveState(wr.from(r, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(n, an);
    }), this;
  }, t.prototype._stopChildren = function() {
    this.children.forEach(function(r) {
      Ie(r.stop) && r.stop();
    }), this.children.clear();
  }, t.prototype._stop = function() {
    var r, e, n, o, s, p, v, m, d, f;
    try {
      for (var g = we(this.listeners), w = g.next(); !w.done; w = g.next()) {
        var S = w.value;
        this.listeners.delete(S);
      }
    } catch (B) {
      r = { error: B };
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
    } catch (B) {
      n = { error: B };
    } finally {
      try {
        C && !C.done && (o = T.return) && o.call(T);
      } finally {
        if (n)
          throw n.error;
      }
    }
    try {
      for (var z = we(this.contextListeners), N = z.next(); !N.done; N = z.next()) {
        var S = N.value;
        this.contextListeners.delete(S);
      }
    } catch (B) {
      s = { error: B };
    } finally {
      try {
        N && !N.done && (p = z.return) && p.call(z);
      } finally {
        if (s)
          throw s.error;
      }
    }
    try {
      for (var G = we(this.doneListeners), $ = G.next(); !$.done; $ = G.next()) {
        var S = $.value;
        this.doneListeners.delete(S);
      }
    } catch (B) {
      v = { error: B };
    } finally {
      try {
        $ && !$.done && (m = G.return) && m.call(G);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    this.initialized = false, this.status = st.Stopped, this._initialState = void 0;
    try {
      for (var A = we(Object.keys(this.delayedEventsMap)), ee = A.next(); !ee.done; ee = A.next()) {
        var _ = ee.value;
        this.clock.clearTimeout(this.delayedEventsMap[_]);
      }
    } catch (B) {
      d = { error: B };
    } finally {
      try {
        ee && !ee.done && (f = A.return) && f.call(A);
      } finally {
        if (d)
          throw d.error;
      }
    }
    this.scheduler.clear(), this.scheduler = new Nu({ deferEvents: this.options.deferEvents });
  }, t.prototype.stop = function() {
    var r = this, e = this.scheduler;
    return this._stop(), e.schedule(function() {
      var n = at({ type: "xstate.stop" }), o = Rn(r, function() {
        var s = qe(De([], Ee(r.state.configuration), false).sort(function(f, g) {
          return g.order - f.order;
        }).map(function(f) {
          return jr(f.onExit, r.machine.options.actions);
        })), p = Ee(ji(r.machine, r.state, r.state.context, n, [{ type: "exit", actions: s }], r.machine.config.predictableActionArguments ? r._exec : void 0, r.machine.config.predictableActionArguments || r.machine.config.preserveActionOrder), 2), v = p[0], m = p[1], d = new wr({ value: r.state.value, context: m, _event: n, _sessionid: r.sessionId, historyValue: void 0, history: r.state, actions: v.filter(function(f) {
          return !Ho(f);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: r.state.done, tags: r.state.tags, machine: r.machine });
        return d.changed = true, d;
      });
      r.update(o, n), r._stopChildren(), Ui.free(r.sessionId);
    }), this;
  }, t.prototype.batch = function(r) {
    var e = this;
    if (this.status === st.NotStarted && this.options.deferEvents)
      je || rt(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== st.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (r.length) {
      var n = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var o, s, p = e.state, v = false, m = [], d = u(function(S) {
          var T = at(S);
          e.forward(T), p = Rn(e, function() {
            return e.machine.transition(p, T, void 0, n || void 0);
          }), m.push.apply(m, De([], Ee(e.machine.config.predictableActionArguments ? p.actions : p.actions.map(function(C) {
            return wf(C, p);
          })), false)), v = v || !!p.changed;
        }, "_loop_1");
        try {
          for (var f = we(r), g = f.next(); !g.done; g = f.next()) {
            var w = g.value;
            d(w);
          }
        } catch (S) {
          o = { error: S };
        } finally {
          try {
            g && !g.done && (s = f.return) && s.call(f);
          } finally {
            if (o)
              throw o.error;
          }
        }
        p.changed = v, p.actions = m, e.update(p, at(r[r.length - 1]));
      });
    }
  }, t.prototype.sender = function(r) {
    return this.send.bind(this, r);
  }, t.prototype._nextState = function(r, e) {
    var n = this;
    e === void 0 && (e = !!this.machine.config.predictableActionArguments && this._exec);
    var o = at(r);
    if (o.name.indexOf(Tu) === 0 && !this.state.nextEvents.some(function(p) {
      return p.indexOf(Tu) === 0;
    }))
      throw o.data.data;
    var s = Rn(this, function() {
      return n.machine.transition(n.state, o, void 0, e || void 0);
    });
    return s;
  }, t.prototype.nextState = function(r) {
    return this._nextState(r, false);
  }, t.prototype.forward = function(r) {
    var e, n;
    try {
      for (var o = we(this.forwardTo), s = o.next(); !s.done; s = o.next()) {
        var p = s.value, v = this.children.get(p);
        if (!v)
          throw new Error("Unable to forward event '".concat(r, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(p, "'."));
        v.send(r);
      }
    } catch (m) {
      e = { error: m };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
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
    if (this.status !== st.Running)
      return Pu(r, e);
    if (Iu(r))
      return this.spawnPromise(Promise.resolve(r), e);
    if (Ie(r))
      return this.spawnCallback(r, e);
    if (ff(r))
      return this.spawnActor(r, e);
    if (Jd(r))
      return this.spawnObservable(r, e);
    if (Lr(r))
      return this.spawnMachine(r, V(V({}, n), { id: e }));
    if (Xd(r))
      return this.spawnBehavior(r, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof r, '".'));
  }, t.prototype.spawnMachine = function(r, e) {
    var n = this;
    e === void 0 && (e = {});
    var o = new t(r, V(V({}, this.options), { parent: this, id: e.id || r.id })), s = V(V({}, qb), e);
    s.sync && o.onTransition(function(v) {
      n.send(No, { state: v, id: o.id });
    });
    var p = o;
    return this.children.set(o.id, p), s.autoForward && this.forwardTo.add(o.id), o.onDone(function(v) {
      n.removeChild(o.id), n.send(at(v, { origin: o.id }));
    }).start(), p;
  }, t.prototype.spawnBehavior = function(r, e) {
    var n = Ef(r, { id: e, parent: this });
    return this.children.set(e, n), n;
  }, t.prototype.spawnPromise = function(r, e) {
    var n, o = this, s = false, p;
    r.then(function(m) {
      s || (p = m, o.removeChild(e), o.send(at(Hi(e, m), { origin: e })));
    }, function(m) {
      if (!s) {
        o.removeChild(e);
        var d = ai(e, m);
        try {
          o.send(at(d, { origin: e }));
        } catch (f) {
          rf(m, f, e), o.devTools && o.devTools.send(d, o.state), o.machine.strict && o.stop();
        }
      }
    });
    var v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      var g = Li(m, d, f), w = false;
      return r.then(function(S) {
        w || (g.next(S), !w && g.complete());
      }, function(S) {
        w || g.error(S);
      }), { unsubscribe: function() {
        return w = true;
      } };
    }, stop: function() {
      s = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return p;
    } }, n[Gr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnCallback = function(r, e) {
    var n, o = this, s = false, p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m, d = u(function(w) {
      m = w, v.forEach(function(S) {
        return S(w);
      }), !s && o.send(at(w, { origin: e }));
    }, "receive"), f;
    try {
      f = r(d, function(w) {
        p.add(w);
      });
    } catch (w) {
      this.send(ai(e, w));
    }
    if (Iu(f))
      return this.spawnPromise(f, e);
    var g = (n = { id: e, send: function(w) {
      return p.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = Li(w);
      return v.add(S.next), { unsubscribe: function() {
        v.delete(S.next);
      } };
    }, stop: function() {
      s = true, Ie(f) && f();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return m;
    } }, n[Gr] = function() {
      return this;
    }, n);
    return this.children.set(e, g), g;
  }, t.prototype.spawnObservable = function(r, e) {
    var n, o = this, s, p = r.subscribe(function(m) {
      s = m, o.send(at(m, { origin: e }));
    }, function(m) {
      o.removeChild(e), o.send(at(ai(e, m), { origin: e }));
    }, function() {
      o.removeChild(e), o.send(at(Hi(e), { origin: e }));
    }), v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      return r.subscribe(m, d, f);
    }, stop: function() {
      return p.unsubscribe();
    }, getSnapshot: function() {
      return s;
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
      je || rt(false, "No implementation found for activity '".concat(r.type, "'"));
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
    var r = js();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, e), { features: V({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      xf(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[Gr] = function() {
    return this;
  }, t.prototype.getSnapshot = function() {
    return this.status === st.NotStarted ? this.initialState : this._state;
  }, t.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(r, e) {
    return setTimeout(r, e);
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  } }, logger: console.log.bind(console), devTools: false }, t.interpret = lt, t;
}();
function lt(t, r) {
  var e = new Sf(t, r);
  return e;
}
__name(lt, "lt");
u(lt, "interpret");
function Fb(t) {
  if (typeof t == "string") {
    var r = { type: t };
    return r.toString = function() {
      return t;
    }, r;
  }
  return t;
}
__name(Fb, "Fb");
u(Fb, "toInvokeSource");
function Uo(t) {
  return V(V({ type: ko }, t), { toJSON: function() {
    t.onDone, t.onError;
    var r = Ri(t, ["onDone", "onError"]);
    return V(V({}, r), { type: ko, src: Fb(t.src) });
  } });
}
__name(Uo, "Uo");
u(Uo, "toInvokeDefinition");
var Yi = "";
var Lu = "#";
var Wo = "*";
var Wi = {};
var Vi = u(function(t) {
  return t[0] === Lu;
}, "isStateId");
var Ub = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Wb = u(function(t, r, e) {
  var n = e.slice(0, -1).some(function(s) {
    return !("cond" in s) && !("in" in s) && (Te(s.target) || Lr(s.target));
  }), o = r === Yi ? "the transient event" : "event '".concat(r, "'");
  rt(!n, "One or more transitions for ".concat(o, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Tf = function() {
  function t(r, e, n, o) {
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var s = this, p;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Ub(), e), this.parent = o == null ? void 0 : o.parent, this.key = this.config.key || (o == null ? void 0 : o.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : As), this.id = this.config.id || De([this.machine.key], Ee(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (p = this.config.schema) !== null && p !== void 0 ? p : {}, this.description = this.config.description, je || rt(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? Ni(this.config.states, function(d, f) {
      var g, w = new t(d, {}, void 0, { parent: s, key: f });
      return Object.assign(s.idMap, V((g = {}, g[w.id] = w, g), w.idMap)), w;
    }) : Wi;
    var v = 0;
    function m(d) {
      var f, g;
      d.order = v++;
      try {
        for (var w = we(zu(d)), S = w.next(); !S.done; S = w.next()) {
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
    }) : Yi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = lr(this.config.entry || this.config.onEntry).map(function(d) {
      return Bi(d);
    }), this.onExit = lr(this.config.exit || this.config.onExit).map(function(d) {
      return Bi(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = lr(this.config.invoke).map(function(d, f) {
      var g, w;
      if (Lr(d)) {
        var S = Bo(s.id, f);
        return s.machine.options.services = V((g = {}, g[S] = d, g), s.machine.options.services), Uo({ src: S, id: S });
      } else if (Te(d.src)) {
        var S = d.id || Bo(s.id, f);
        return Uo(V(V({}, d), { id: S, src: d.src }));
      } else if (Lr(d.src) || Ie(d.src)) {
        var S = d.id || Bo(s.id, f);
        return s.machine.options.services = V((w = {}, w[S] = d.src, w), s.machine.options.services), Uo(V(V({ id: S }, d), { src: S }));
      } else {
        var T = d.src;
        return Uo(V(V({ id: Bo(s.id, f) }, d), { src: T }));
      }
    }), this.activities = lr(this.config.activities).concat(this.invoke).map(function(d) {
      return Ls(d);
    }), this.transition = this.transition.bind(this), this.tags = lr(this.config.tags);
  }
  __name(t, "t");
  return u(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Ru(this).forEach(function(r) {
      return r.on;
    });
  }, t.prototype.withConfig = function(r, e) {
    var n = this.options, o = n.actions, s = n.activities, p = n.guards, v = n.services, m = n.delays;
    return new t(this.config, { actions: V(V({}, o), r.actions), activities: V(V({}, s), r.activities), guards: V(V({}, p), r.guards), services: V(V({}, v), r.services), delays: V(V({}, m), r.delays) }, e != null ? e : this.context);
  }, t.prototype.withContext = function(r) {
    return new t(this.config, this.options, r);
  }, Object.defineProperty(t.prototype, "context", { get: function() {
    return Ie(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: Ni(this.states, function(r) {
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
    var e = r === Yi, n = this.transitions.filter(function(o) {
      var s = o.eventType === r;
      return e ? s : s || o.eventType === Wo;
    });
    return this.__cache.candidates[r] = n, n;
  }, t.prototype.getDelayedTransitions = function() {
    var r = this, e = this.config.after;
    if (!e)
      return [];
    var n = u(function(s, p) {
      var v = Ie(s) ? "".concat(r.id, ":delay[").concat(p, "]") : s, m = uf(v, r.id);
      return r.onEntry.push(of(m, { delay: s })), r.onExit.push(af(m)), m;
    }, "mutateEntryExit"), o = on(e) ? e.map(function(s, p) {
      var v = n(s.delay, p);
      return V(V({}, s), { event: v });
    }) : qe(Object.keys(e).map(function(s, p) {
      var v = e[s], m = Te(v) ? { target: v } : v, d = isNaN(+s) ? s : +s, f = n(d, p);
      return lr(m).map(function(g) {
        return V(V({}, g), { event: f, delay: d });
      });
    }));
    return o.map(function(s) {
      var p = s.delay;
      return V(V({}, r.formatTransition(s)), { delay: p });
    });
  }, t.prototype.getStateNodes = function(r) {
    var e, n = this;
    if (!r)
      return [];
    var o = r instanceof wr ? r.value : ki(r, this.delimiter);
    if (Te(o)) {
      var s = this.getStateNode(o).initial;
      return s !== void 0 ? this.getStateNodes((e = {}, e[o] = s, e)) : [this, this.states[o]];
    }
    var p = Object.keys(o), v = [this];
    return v.push.apply(v, De([], Ee(qe(p.map(function(m) {
      return n.getStateNode(m).getStateNodes(o[m]);
    }))), false)), v;
  }, t.prototype.handles = function(r) {
    var e = zs(r);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(r) {
    var e = r instanceof wr ? r : wr.create(r), n = Array.from(qi([], this.getStateNodes(e.value)));
    return new wr(V(V({}, e), { value: this.resolve(e.value), configuration: n, done: Fo(n, this), tags: Du(n), machine: this.machine }));
  }, t.prototype.transitionLeafNode = function(r, e, n) {
    var o = this.getStateNode(r), s = o.next(e, n);
    return !s || !s.transitions.length ? this.next(e, n) : s;
  }, t.prototype.transitionCompoundNode = function(r, e, n) {
    var o = Object.keys(r), s = this.getStateNode(o[0]), p = s._transition(r[o[0]], e, n);
    return !p || !p.transitions.length ? this.next(e, n) : p;
  }, t.prototype.transitionParallelNode = function(r, e, n) {
    var o, s, p = {};
    try {
      for (var v = we(Object.keys(r)), m = v.next(); !m.done; m = v.next()) {
        var d = m.value, f = r[d];
        if (f) {
          var g = this.getStateNode(d), w = g._transition(f, e, n);
          w && (p[d] = w);
        }
      }
    } catch (N) {
      o = { error: N };
    } finally {
      try {
        m && !m.done && (s = v.return) && s.call(v);
      } finally {
        if (o)
          throw o.error;
      }
    }
    var S = Object.keys(p).map(function(N) {
      return p[N];
    }), T = qe(S.map(function(N) {
      return N.transitions;
    })), C = S.some(function(N) {
      return N.transitions.length > 0;
    });
    if (!C)
      return this.next(e, n);
    var z = qe(Object.keys(p).map(function(N) {
      return p[N].configuration;
    }));
    return { transitions: T, exitSet: qe(S.map(function(N) {
      return N.exitSet;
    })), configuration: z, source: e, actions: qe(Object.keys(p).map(function(N) {
      return p[N].actions;
    })) };
  }, t.prototype._transition = function(r, e, n) {
    return Te(r) ? this.transitionLeafNode(r, e, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, e, n) : this.transitionParallelNode(r, e, n);
  }, t.prototype.getTransitionData = function(r, e) {
    return this._transition(r.value, r, at(e));
  }, t.prototype.next = function(r, e) {
    var n, o, s = this, p = e.name, v = [], m = [], d;
    try {
      for (var f = we(this.getCandidates(p)), g = f.next(); !g.done; g = f.next()) {
        var w = g.value, S = w.cond, T = w.in, C = r.context, z = T ? Te(T) && Vi(T) ? r.matches(ki(this.getStateNodeById(T).path, this.delimiter)) : Lo(ki(T, this.delimiter), Ud(this.path.slice(0, -2))(r.value)) : true, N = false;
        try {
          N = !S || ks(this.machine, S, C, e, r);
        } catch (A) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(p, "' in state node '").concat(this.id, `':
`).concat(A.message));
        }
        if (N && z) {
          w.target !== void 0 && (m = w.target), v.push.apply(v, De([], Ee(w.actions), false)), d = w;
          break;
        }
      }
    } catch (A) {
      n = { error: A };
    } finally {
      try {
        g && !g.done && (o = f.return) && o.call(f);
      } finally {
        if (n)
          throw n.error;
      }
    }
    if (d) {
      if (!m.length)
        return { transitions: [d], exitSet: [], configuration: r.value ? [this] : [], source: r, actions: v };
      var G = qe(m.map(function(A) {
        return s.getRelativeStateNodes(A, r.historyValue);
      })), $ = !!d.internal;
      return { transitions: [d], exitSet: $ ? [] : qe(m.map(function(A) {
        return s.getPotentiallyReenteringNodes(A);
      })), configuration: G, source: r, actions: v };
    }
  }, t.prototype.getPotentiallyReenteringNodes = function(r) {
    if (this.order < r.order)
      return [this];
    for (var e = [], n = this, o = r; n && n !== o; )
      e.push(n), n = n.parent;
    return n !== o ? [] : (e.push(o), e);
  }, t.prototype.getActions = function(r, e, n, o, s, p, v) {
    var m, d, f, g, w = this, S = p ? qi([], this.getStateNodes(p.value)) : [], T = /* @__PURE__ */ new Set();
    try {
      for (var C = we(Array.from(r).sort(function(K, ie) {
        return K.order - ie.order;
      })), z = C.next(); !z.done; z = C.next()) {
        var N = z.value;
        (!Fi(S, N) || Fi(n.exitSet, N) || N.parent && T.has(N.parent)) && T.add(N);
      }
    } catch (K) {
      m = { error: K };
    } finally {
      try {
        z && !z.done && (d = C.return) && d.call(C);
      } finally {
        if (m)
          throw m.error;
      }
    }
    try {
      for (var G = we(S), $ = G.next(); !$.done; $ = G.next()) {
        var N = $.value;
        (!Fi(r, N) || Fi(n.exitSet, N.parent)) && n.exitSet.push(N);
      }
    } catch (K) {
      f = { error: K };
    } finally {
      try {
        $ && !$.done && (g = G.return) && g.call(G);
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
    }), ee = new Set(n.exitSet), _ = qe(A.map(function(K) {
      var ie = [];
      if (K.type !== "final")
        return ie;
      var q = K.parent;
      if (!q.parent)
        return ie;
      ie.push($o(K.id, K.doneData), $o(q.id, K.doneData ? ii(K.doneData, o, s) : void 0));
      var oe = q.parent;
      return oe.type === "parallel" && $i(oe).every(function(et) {
        return Fo(n.configuration, et);
      }) && ie.push($o(oe.id)), ie;
    })), B = A.map(function(K) {
      var ie = K.onEntry, q = K.activities.map(function(oe) {
        return sf(oe);
      });
      return { type: "entry", actions: jr(v ? De(De([], Ee(ie), false), Ee(q), false) : De(De([], Ee(q), false), Ee(ie), false), w.machine.options.actions) };
    }).concat({ type: "state_done", actions: _.map(function(K) {
      return nf(K);
    }) }), te = Array.from(ee).map(function(K) {
      return { type: "exit", actions: jr(De(De([], Ee(K.onExit), false), Ee(K.activities.map(function(ie) {
        return lf(ie);
      })), false), w.machine.options.actions) };
    }), J = te.concat({ type: "transition", actions: jr(n.actions, this.machine.options.actions) }).concat(B);
    if (e) {
      var ue = jr(qe(De([], Ee(r), false).sort(function(K, ie) {
        return ie.order - K.order;
      }).map(function(K) {
        return K.onExit;
      })), this.machine.options.actions).filter(function(K) {
        return !Ho(K);
      });
      return J.concat({ type: "stop", actions: ue });
    }
    return J;
  }, t.prototype.transition = function(r, e, n, o) {
    r === void 0 && (r = this.initialState);
    var s = at(e), p;
    if (r instanceof wr)
      p = n === void 0 ? r : this.resolveState(wr.from(r, n));
    else {
      var v = Te(r) ? this.resolve(Go(this.getResolvedPath(r))) : this.resolve(r), m = n != null ? n : this.machine.context;
      p = this.resolveState(wr.from(v, m));
    }
    if (!je && s.name === Wo)
      throw new Error("An event cannot have the wildcard type ('".concat(Wo, "')"));
    if (this.strict && !this.events.includes(s.name) && !Yd(s.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(s.name, "'"));
    var d = this._transition(p.value, p, s) || { transitions: [], configuration: [], exitSet: [], source: p, actions: [] }, f = qi([], this.getStateNodes(p.value)), g = d.configuration.length ? qi(f, d.configuration) : f;
    return d.configuration = De([], Ee(g), false), this.resolveTransition(d, p, p.context, o, s);
  }, t.prototype.resolveRaisedTransition = function(r, e, n, o) {
    var s, p = r.actions;
    return r = this.transition(r, e, void 0, o), r._event = n, r.event = n.data, (s = r.actions).unshift.apply(s, De([], Ee(p), false)), r;
  }, t.prototype.resolveTransition = function(r, e, n, o, s) {
    var p, v, m, d, f = this;
    s === void 0 && (s = an);
    var g = r.configuration, w = !e || r.transitions.length > 0, S = w ? r.configuration : e ? e.configuration : [], T = Fo(S, this), C = w ? vf(this.machine, g) : void 0, z = e ? e.historyValue ? e.historyValue : r.source ? this.machine.historyValue(e.value) : void 0 : void 0, N = this.getActions(new Set(S), T, r, n, s, e, o), G = e ? V({}, e.activities) : {};
    try {
      for (var $ = we(N), A = $.next(); !A.done; A = $.next()) {
        var ee = A.value;
        try {
          for (var _ = (m = void 0, we(ee.actions)), B = _.next(); !B.done; B = _.next()) {
            var te = B.value;
            te.type === Do ? G[te.activity.id || te.activity.type] = te : te.type === Di && (G[te.activity.id || te.activity.type] = false);
          }
        } catch (Be) {
          m = { error: Be };
        } finally {
          try {
            B && !B.done && (d = _.return) && d.call(_);
          } finally {
            if (m)
              throw m.error;
          }
        }
      }
    } catch (Be) {
      p = { error: Be };
    } finally {
      try {
        A && !A.done && (v = $.return) && v.call($);
      } finally {
        if (p)
          throw p.error;
      }
    }
    var J = Ee(ji(this, e, n, s, N, o, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), ue = J[0], K = J[1], ie = Ee(Zd(ue, Ho), 2), q = ie[0], oe = ie[1], et = ue.filter(function(Be) {
      var tt;
      return Be.type === Do && ((tt = Be.activity) === null || tt === void 0 ? void 0 : tt.type) === ko;
    }), Ze = et.reduce(function(Be, tt) {
      return Be[tt.activity.id] = df(tt.activity, f.machine, K, s), Be;
    }, e ? V({}, e.children) : {}), _e = new wr({ value: C || e.value, context: K, _event: s, _sessionid: e ? e._sessionid : null, historyValue: C ? z ? Qd(z, C) : void 0 : e ? e.historyValue : void 0, history: !C || r.source ? e : void 0, actions: C ? oe : [], activities: C ? G : e ? e.activities : {}, events: [], configuration: S, transitions: r.transitions, children: Ze, done: T, tags: Du(S), machine: this }), Ae = n !== K;
    _e.changed = s.name === No || Ae;
    var We = _e.history;
    We && delete We.history;
    var Qe = !T && (this._transient || g.some(function(Be) {
      return Be._transient;
    }));
    if (!w && (!Qe || s.name === Yi))
      return _e;
    var Ye = _e;
    if (!T)
      for (Qe && (Ye = this.resolveRaisedTransition(Ye, { type: Bd }, s, o)); q.length; ) {
        var Q = q.shift();
        Ye = this.resolveRaisedTransition(Ye, Q._event, s, o);
      }
    var ir = Ye.changed || (We ? !!Ye.actions.length || Ae || typeof We.value != typeof Ye.value || !ku(Ye.value, We.value) : void 0);
    return Ye.changed = ir, Ye.history = We, Ye;
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
    var e = Vi(r) ? r.slice(Lu.length) : r;
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
      } catch (s) {
      }
    for (var e = Rs(r, this.delimiter).slice(), n = this; e.length; ) {
      var o = e.shift();
      if (!o.length)
        break;
      n = n.getStateNode(o);
    }
    return n;
  }, t.prototype.resolve = function(r) {
    var e, n = this;
    if (!r)
      return this.initialStateValue || Wi;
    switch (this.type) {
      case "parallel":
        return Ni(this.initialStateValue, function(s, p) {
          return s ? n.getStateNode(p).resolve(r[p] || s) : Wi;
        });
      case "compound":
        if (Te(r)) {
          var o = this.getStateNode(r);
          return o.type === "parallel" || o.type === "compound" ? (e = {}, e[r] = o.initialStateValue, e) : r;
        }
        return Object.keys(r).length ? Ni(r, function(s, p) {
          return s ? n.getStateNode(p).resolve(s) : Wi;
        }) : this.initialStateValue || {};
      default:
        return r || Wi;
    }
  }, t.prototype.getResolvedPath = function(r) {
    if (Vi(r)) {
      var e = this.machine.idMap[r.slice(Lu.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return e.path;
    }
    return Rs(r, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = Mu(this.states, function(n) {
        return n.initialStateValue || Wi;
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
      Te(e.target) ? r = Vi(e.target) ? Go(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : r = e.target;
    }
    return r;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(r, e, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(e) : r.initialStateNodes : [r];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (qo(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return je || rt(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = jo(this.initialStateValue);
    return qe(e.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), t.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var e = Ee(r), n = e[0], o = e.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var s = this.getStateNode(n);
    if (s.type === "history")
      return s.resolveHistory();
    if (!this.states[n])
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(o);
  }, t.prototype.historyValue = function(r) {
    if (Object.keys(this.states).length)
      return { current: r || this.initialStateValue, states: Mu(this.states, function(e, n) {
        if (!r)
          return e.historyValue();
        var o = Te(r) ? void 0 : r[n];
        return e.historyValue(o || e.initialStateValue);
      }, function(e) {
        return !e.history;
      }) };
  }, t.prototype.resolveHistory = function(r) {
    var e = this;
    if (this.type !== "history")
      return [this];
    var n = this.parent;
    if (!r) {
      var o = this.target;
      return o ? qe(jo(o).map(function(p) {
        return n.getFromRelativePath(p);
      })) : n.initialStateNodes;
    }
    var s = Wd(n.path, "states")(r).current;
    return Te(s) ? [n.getStateNode(s)] : qe(jo(s).map(function(p) {
      return e.history === "deep" ? n.getFromRelativePath(p) : [n.states[p[0]]];
    }));
  }, Object.defineProperty(t.prototype, "stateIds", { get: function() {
    var r = this, e = qe(Object.keys(this.states).map(function(n) {
      return r.states[n].stateIds;
    }));
    return [this.id].concat(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "events", { get: function() {
    var r, e, n, o;
    if (this.__cache.events)
      return this.__cache.events;
    var s = this.states, p = new Set(this.ownEvents);
    if (s)
      try {
        for (var v = we(Object.keys(s)), m = v.next(); !m.done; m = v.next()) {
          var d = m.value, f = s[d];
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
                w && !w.done && (o = g.return) && o.call(g);
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
        var o = n[0] === e.delimiter;
        if (o && !e.parent)
          return e.getStateNodeByPath(n.slice(1));
        var s = o ? e.key + n : n;
        if (e.parent)
          try {
            var p = e.parent.getStateNodeByPath(s);
            return p;
          } catch (v) {
            throw new Error("Invalid transition definition for state node '".concat(e.id, `':
`).concat(v.message));
          }
        else
          return e.getStateNodeByPath(s);
      });
  }, t.prototype.formatTransition = function(r) {
    var e = this, n = tf(r.target), o = "internal" in r ? r.internal : n ? n.some(function(m) {
      return Te(m) && m[0] === e.delimiter;
    }) : true, s = this.machine.options.guards, p = this.resolveTarget(n), v = V(V({}, r), { actions: jr(lr(r.actions)), cond: Ds(r.cond, s), target: p, source: this, internal: o, eventType: r.event, toJSON: function() {
      return V(V({}, v), { target: v.target ? v.target.map(function(m) {
        return "#".concat(m.id);
      }) : void 0, source: "#".concat(e.id) });
    } });
    return v;
  }, t.prototype.formatTransitions = function() {
    var r, e, n = this, o;
    if (!this.config.on)
      o = [];
    else if (Array.isArray(this.config.on))
      o = this.config.on;
    else {
      var s = this.config.on, p = Wo, v = s[p], m = v === void 0 ? [] : v, d = Ri(s, [typeof p == "symbol" ? p : p + ""]);
      o = qe(Object.keys(d).map(function(G) {
        !je && G === Yi && rt(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var $ = oi(G, d[G]);
        return je || Wb(n, G, $), $;
      }).concat(oi(Wo, m)));
    }
    var f = this.config.always ? oi("", this.config.always) : [], g = this.config.onDone ? oi(String($o(this.id)), this.config.onDone) : [];
    je || rt(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = qe(this.invoke.map(function(G) {
      var $ = [];
      return G.onDone && $.push.apply($, De([], Ee(oi(String(Hi(G.id)), G.onDone)), false)), G.onError && $.push.apply($, De([], Ee(oi(String(ai(G.id)), G.onError)), false)), $;
    })), S = this.after, T = qe(De(De(De(De([], Ee(g), false), Ee(w), false), Ee(o), false), Ee(f), false).map(function(G) {
      return lr(G).map(function($) {
        return n.formatTransition($);
      });
    }));
    try {
      for (var C = we(S), z = C.next(); !z.done; z = C.next()) {
        var N = z.value;
        T.push(N);
      }
    } catch (G) {
      r = { error: G };
    } finally {
      try {
        z && !z.done && (e = C.return) && e.call(C);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return T;
  }, t;
}();
var Cf = false;
function ft(t, r) {
  return !je && !("predictableActionArguments" in t) && !Cf && (Cf = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new Tf(t, r);
}
__name(ft, "ft");
u(ft, "createMachine");
var Mf = Lt(rn(), 1);
var Yo = Lt(Vo(), 1);
var Hs = u((t) => t != null && typeof t.draggable == "boolean", "isDraggable");
var Bs = u((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Bu = u((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function me(t) {
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
      this.draggableMachine = ft({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        fe("draggable:init", {}, this);
      }, setInteract: (o, s) => {
        H.need(s.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let p = (0, Yo.default)(this);
        p.styleCursor(false), p.pointerEvents({ ignoreFrom: ".resize-handle" }), p.on("down", this.grab.bind(this)), p.on("up", this.release.bind(this)), p.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let v = this.dropzone;
        Bs(v) ? this.snappedDropzone = v : this.snappedDropzone = null;
      }, grab: (o, s) => {
        H.need(s.type === "GRAB", "event type must be GRAB"), s.type === "GRAB" && (this.grabbed = true, fe("draggable:grab", {}, this), Bu(this.dropzone) && (this.snapped = false, this.moveByOffset(s.x, s.y), this.classList.remove("qpu-operation-xl")));
      }, release: (o, s) => {
        H.need(s.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, fe("draggable:release", {}, this);
      }, startDragging: (o, s) => {
        H.need(s.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (o, s) => {
        H.need(s.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, fe("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, fe("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && fe("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        this.snapped && (this.moveTo(0, 0), fe("draggable:drop", {}, this));
      }, delete: () => {
        (0, Yo.default)(this).unset(), fe("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => Bs(this.dropzone), isOnPaletteDropzone: () => Bu(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Bs(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = lt(this.draggableMachine).onTransition((o) => {
        this.debugDraggable && console.log(`draggable: ${(0, Mf.format)(o.value)}`);
      });
    }
    get draggable() {
      return this.draggableService.state !== void 0;
    }
    set draggable(o) {
      o ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    initDraggable() {
      this.draggableService.state === void 0 && this.draggableService.start();
    }
    get dropzone() {
      let o = this.parentElement;
      return H.notNull(o), !Bu(o) && !Bs(o) ? null : o;
    }
    set snapTargets(o) {
      (0, Yo.default)(this).draggable({ modifiers: [Yo.default.modifiers.snap({ targets: o, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(o) {
      let s = o.modifiers[0];
      if (s.inRange) {
        let p = s.target.source;
        fe("draggable:in-snap-range", { snapTargetInfo: p }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
      } else
        this.snapped && this.draggableService.send({ type: "UNSNAP" });
    }
    grab(o) {
      this.draggableService.send({ type: "GRAB", x: o.offsetX, y: o.offsetY });
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
    dragMove(o) {
      this.move(o.dx, o.dy);
    }
    move(o, s) {
      let p = this.operationX + o, v = this.operationY + s;
      this.moveTo(p, v);
    }
    moveTo(o, s) {
      this.operationX = o, this.operationY = s, this.style.transform = `translate(${o}px, ${s}px)`;
    }
    moveByOffset(o, s) {
      let p = o - this.clientWidth / 2, v = s - this.clientHeight / 2;
      this.move(p, v);
    }
  }
  __name(r, "r");
  return u(r, "DraggableMixinClass"), M([D], r.prototype, "operationX", 2), M([D], r.prototype, "operationY", 2), M([D], r.prototype, "grabbed", 2), M([D], r.prototype, "dragging", 2), M([D], r.prototype, "snapped", 2), M([D], r.prototype, "bit", 2), M([D], r.prototype, "debugDraggable", 2), r;
}
__name(me, "me");
u(me, "DraggableMixin");
var si = u((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function If(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(r, "r");
  return u(r, "FlaggableMixinClass"), M([D], r.prototype, "flag", 2), r;
}
__name(If, "If");
u(If, "FlaggableMixin");
var Je = "top";
var ht = "bottom";
var ut = "right";
var nt = "left";
var $s = "auto";
var Dn = [Je, ht, ut, nt];
var sn = "start";
var li = "end";
var Af = "clippingParents";
var qs = "viewport";
var Xi = "popper";
var Pf = "reference";
var Hu = Dn.reduce(function(t, r) {
  return t.concat([r + "-" + sn, r + "-" + li]);
}, []);
var Fs = [].concat(Dn, [$s]).reduce(function(t, r) {
  return t.concat([r, r + "-" + sn, r + "-" + li]);
}, []);
var Vb = "beforeRead";
var Yb = "read";
var Xb = "afterRead";
var Zb = "beforeMain";
var Kb = "main";
var Qb = "afterMain";
var Jb = "beforeWrite";
var ey = "write";
var ty = "afterWrite";
var _f = [Vb, Yb, Xb, Zb, Kb, Qb, Jb, ey, ty];
function bt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
__name(bt, "bt");
u(bt, "getNodeName");
function it(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var r = t.ownerDocument;
    return r && r.defaultView || window;
  }
  return t;
}
__name(it, "it");
u(it, "getWindow");
function Br(t) {
  var r = it(t).Element;
  return t instanceof r || t instanceof Element;
}
__name(Br, "Br");
u(Br, "isElement");
function mt(t) {
  var r = it(t).HTMLElement;
  return t instanceof r || t instanceof HTMLElement;
}
__name(mt, "mt");
u(mt, "isHTMLElement");
function Us(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = it(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
__name(Us, "Us");
u(Us, "isShadowRoot");
function ry(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function(e) {
    var n = r.styles[e] || {}, o = r.attributes[e] || {}, s = r.elements[e];
    !mt(s) || !bt(s) || (Object.assign(s.style, n), Object.keys(o).forEach(function(p) {
      var v = o[p];
      v === false ? s.removeAttribute(p) : s.setAttribute(p, v === true ? "" : v);
    }));
  });
}
__name(ry, "ry");
u(ry, "applyStyles");
function ny(t) {
  var r = t.state, e = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, e.popper), r.styles = e, r.elements.arrow && Object.assign(r.elements.arrow.style, e.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var o = r.elements[n], s = r.attributes[n] || {}, p = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : e[n]), v = p.reduce(function(m, d) {
        return m[d] = "", m;
      }, {});
      !mt(o) || !bt(o) || (Object.assign(o.style, v), Object.keys(s).forEach(function(m) {
        o.removeAttribute(m);
      }));
    });
  };
}
__name(ny, "ny");
u(ny, "effect");
var Xo = { name: "applyStyles", enabled: true, phase: "write", fn: ry, effect: ny, requires: ["computeStyles"] };
function yt(t) {
  return t.split("-")[0];
}
__name(yt, "yt");
u(yt, "getBasePlacement");
var Ar = Math.max;
var ui = Math.min;
var ln = Math.round;
function xr(t, r) {
  r === void 0 && (r = false);
  var e = t.getBoundingClientRect(), n = 1, o = 1;
  if (mt(t) && r) {
    var s = t.offsetHeight, p = t.offsetWidth;
    p > 0 && (n = ln(e.width) / p || 1), s > 0 && (o = ln(e.height) / s || 1);
  }
  return { width: e.width / n, height: e.height / o, top: e.top / o, right: e.right / n, bottom: e.bottom / o, left: e.left / n, x: e.left / n, y: e.top / o };
}
__name(xr, "xr");
u(xr, "getBoundingClientRect");
function ci(t) {
  var r = xr(t), e = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(r.width - e) <= 1 && (e = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: n };
}
__name(ci, "ci");
u(ci, "getLayoutRect");
function Zo(t, r) {
  var e = r.getRootNode && r.getRootNode();
  if (t.contains(r))
    return true;
  if (e && Us(e)) {
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
function jt(t) {
  return it(t).getComputedStyle(t);
}
__name(jt, "jt");
u(jt, "getComputedStyle");
function $u(t) {
  return ["table", "td", "th"].indexOf(bt(t)) >= 0;
}
__name($u, "$u");
u($u, "isTableElement");
function Tt(t) {
  return ((Br(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(Tt, "Tt");
u(Tt, "getDocumentElement");
function un(t) {
  return bt(t) === "html" ? t : t.assignedSlot || t.parentNode || (Us(t) ? t.host : null) || Tt(t);
}
__name(un, "un");
u(un, "getParentNode");
function zf(t) {
  return !mt(t) || jt(t).position === "fixed" ? null : t.offsetParent;
}
__name(zf, "zf");
u(zf, "getTrueOffsetParent");
function iy(t) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && mt(t)) {
    var n = jt(t);
    if (n.position === "fixed")
      return null;
  }
  for (var o = un(t); mt(o) && ["html", "body"].indexOf(bt(o)) < 0; ) {
    var s = jt(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || r && s.willChange === "filter" || r && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
__name(iy, "iy");
u(iy, "getContainingBlock");
function Pr(t) {
  for (var r = it(t), e = zf(t); e && $u(e) && jt(e).position === "static"; )
    e = zf(e);
  return e && (bt(e) === "html" || bt(e) === "body" && jt(e).position === "static") ? r : e || iy(t) || r;
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
function Rf(t, r, e) {
  var n = di(t, r, e);
  return n > e ? e : n;
}
__name(Rf, "Rf");
u(Rf, "withinMaxClamp");
function Ko() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(Ko, "Ko");
u(Ko, "getFreshSideObject");
function Qo(t) {
  return Object.assign({}, Ko(), t);
}
__name(Qo, "Qo");
u(Qo, "mergePaddingObject");
function Jo(t, r) {
  return r.reduce(function(e, n) {
    return e[n] = t, e;
  }, {});
}
__name(Jo, "Jo");
u(Jo, "expandToHashMap");
var oy = u(function(r, e) {
  return r = typeof r == "function" ? r(Object.assign({}, e.rects, { placement: e.placement })) : r, Qo(typeof r != "number" ? r : Jo(r, Dn));
}, "toPaddingObject");
function ay(t) {
  var r, e = t.state, n = t.name, o = t.options, s = e.elements.arrow, p = e.modifiersData.popperOffsets, v = yt(e.placement), m = pi(v), d = [nt, ut].indexOf(v) >= 0, f = d ? "height" : "width";
  if (!(!s || !p)) {
    var g = oy(o.padding, e), w = ci(s), S = m === "y" ? Je : nt, T = m === "y" ? ht : ut, C = e.rects.reference[f] + e.rects.reference[m] - p[m] - e.rects.popper[f], z = p[m] - e.rects.reference[m], N = Pr(s), G = N ? m === "y" ? N.clientHeight || 0 : N.clientWidth || 0 : 0, $ = C / 2 - z / 2, A = g[S], ee = G - w[f] - g[T], _ = G / 2 - w[f] / 2 + $, B = di(A, _, ee), te = m;
    e.modifiersData[n] = (r = {}, r[te] = B, r.centerOffset = B - _, r);
  }
}
__name(ay, "ay");
u(ay, "arrow");
function sy(t) {
  var r = t.state, e = t.options, n = e.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = r.elements.popper.querySelector(o), !o) || Zo(r.elements.popper, o) && (r.elements.arrow = o));
}
__name(sy, "sy");
u(sy, "effect");
var Df = { name: "arrow", enabled: true, phase: "main", fn: ay, effect: sy, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Er(t) {
  return t.split("-")[1];
}
__name(Er, "Er");
u(Er, "getVariation");
var ly = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function uy(t) {
  var r = t.x, e = t.y, n = window, o = n.devicePixelRatio || 1;
  return { x: ln(r * o) / o || 0, y: ln(e * o) / o || 0 };
}
__name(uy, "uy");
u(uy, "roundOffsetsByDPR");
function kf(t) {
  var r, e = t.popper, n = t.popperRect, o = t.placement, s = t.variation, p = t.offsets, v = t.position, m = t.gpuAcceleration, d = t.adaptive, f = t.roundOffsets, g = t.isFixed, w = p.x, S = w === void 0 ? 0 : w, T = p.y, C = T === void 0 ? 0 : T, z = typeof f == "function" ? f({ x: S, y: C }) : { x: S, y: C };
  S = z.x, C = z.y;
  var N = p.hasOwnProperty("x"), G = p.hasOwnProperty("y"), $ = nt, A = Je, ee = window;
  if (d) {
    var _ = Pr(e), B = "clientHeight", te = "clientWidth";
    if (_ === it(e) && (_ = Tt(e), jt(_).position !== "static" && v === "absolute" && (B = "scrollHeight", te = "scrollWidth")), _ = _, o === Je || (o === nt || o === ut) && s === li) {
      A = ht;
      var J = g && ee.visualViewport ? ee.visualViewport.height : _[B];
      C -= J - n.height, C *= m ? 1 : -1;
    }
    if (o === nt || (o === Je || o === ht) && s === li) {
      $ = ut;
      var ue = g && ee.visualViewport ? ee.visualViewport.width : _[te];
      S -= ue - n.width, S *= m ? 1 : -1;
    }
  }
  var K = Object.assign({ position: v }, d && ly), ie = f === true ? uy({ x: S, y: C }) : { x: S, y: C };
  if (S = ie.x, C = ie.y, m) {
    var q;
    return Object.assign({}, K, (q = {}, q[A] = G ? "0" : "", q[$] = N ? "0" : "", q.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + C + "px)" : "translate3d(" + S + "px, " + C + "px, 0)", q));
  }
  return Object.assign({}, K, (r = {}, r[A] = G ? C + "px" : "", r[$] = N ? S + "px" : "", r.transform = "", r));
}
__name(kf, "kf");
u(kf, "mapToStyles");
function cy(t) {
  var r = t.state, e = t.options, n = e.gpuAcceleration, o = n === void 0 ? true : n, s = e.adaptive, p = s === void 0 ? true : s, v = e.roundOffsets, m = v === void 0 ? true : v;
  if (false)
    var d;
  var f = { placement: yt(r.placement), variation: Er(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: o, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, kf(Object.assign({}, f, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: p, roundOffsets: m })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, kf(Object.assign({}, f, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(cy, "cy");
u(cy, "computeStyles");
var Nf = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: cy, data: {} };
var Ws = { passive: true };
function py(t) {
  var r = t.state, e = t.instance, n = t.options, o = n.scroll, s = o === void 0 ? true : o, p = n.resize, v = p === void 0 ? true : p, m = it(r.elements.popper), d = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return s && d.forEach(function(f) {
    f.addEventListener("scroll", e.update, Ws);
  }), v && m.addEventListener("resize", e.update, Ws), function() {
    s && d.forEach(function(f) {
      f.removeEventListener("scroll", e.update, Ws);
    }), v && m.removeEventListener("resize", e.update, Ws);
  };
}
__name(py, "py");
u(py, "effect");
var Gf = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: py, data: {} };
var dy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Zi(t) {
  return t.replace(/left|right|bottom|top/g, function(r) {
    return dy[r];
  });
}
__name(Zi, "Zi");
u(Zi, "getOppositePlacement");
var fy = { start: "end", end: "start" };
function Vs(t) {
  return t.replace(/start|end/g, function(r) {
    return fy[r];
  });
}
__name(Vs, "Vs");
u(Vs, "getOppositeVariationPlacement");
function fi(t) {
  var r = it(t), e = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: e, scrollTop: n };
}
__name(fi, "fi");
u(fi, "getWindowScroll");
function hi(t) {
  return xr(Tt(t)).left + fi(t).scrollLeft;
}
__name(hi, "hi");
u(hi, "getWindowScrollBarX");
function qu(t) {
  var r = it(t), e = Tt(t), n = r.visualViewport, o = e.clientWidth, s = e.clientHeight, p = 0, v = 0;
  return n && (o = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = n.offsetLeft, v = n.offsetTop)), { width: o, height: s, x: p + hi(t), y: v };
}
__name(qu, "qu");
u(qu, "getViewportRect");
function Fu(t) {
  var r, e = Tt(t), n = fi(t), o = (r = t.ownerDocument) == null ? void 0 : r.body, s = Ar(e.scrollWidth, e.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), p = Ar(e.scrollHeight, e.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), v = -n.scrollLeft + hi(t), m = -n.scrollTop;
  return jt(o || e).direction === "rtl" && (v += Ar(e.clientWidth, o ? o.clientWidth : 0) - s), { width: s, height: p, x: v, y: m };
}
__name(Fu, "Fu");
u(Fu, "getDocumentRect");
function mi(t) {
  var r = jt(t), e = r.overflow, n = r.overflowX, o = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + o + n);
}
__name(mi, "mi");
u(mi, "isScrollParent");
function Ys(t) {
  return ["html", "body", "#document"].indexOf(bt(t)) >= 0 ? t.ownerDocument.body : mt(t) && mi(t) ? t : Ys(un(t));
}
__name(Ys, "Ys");
u(Ys, "getScrollParent");
function kn(t, r) {
  var e;
  r === void 0 && (r = []);
  var n = Ys(t), o = n === ((e = t.ownerDocument) == null ? void 0 : e.body), s = it(n), p = o ? [s].concat(s.visualViewport || [], mi(n) ? n : []) : n, v = r.concat(p);
  return o ? v : v.concat(kn(un(p)));
}
__name(kn, "kn");
u(kn, "listScrollParents");
function Ki(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(Ki, "Ki");
u(Ki, "rectToClientRect");
function hy(t) {
  var r = xr(t);
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(hy, "hy");
u(hy, "getInnerBoundingClientRect");
function Lf(t, r) {
  return r === qs ? Ki(qu(t)) : Br(r) ? hy(r) : Ki(Fu(Tt(t)));
}
__name(Lf, "Lf");
u(Lf, "getClientRectFromMixedType");
function my(t) {
  var r = kn(un(t)), e = ["absolute", "fixed"].indexOf(jt(t).position) >= 0, n = e && mt(t) ? Pr(t) : t;
  return Br(n) ? r.filter(function(o) {
    return Br(o) && Zo(o, n) && bt(o) !== "body";
  }) : [];
}
__name(my, "my");
u(my, "getClippingParents");
function Uu(t, r, e) {
  var n = r === "clippingParents" ? my(t) : [].concat(r), o = [].concat(n, [e]), s = o[0], p = o.reduce(function(v, m) {
    var d = Lf(t, m);
    return v.top = Ar(d.top, v.top), v.right = ui(d.right, v.right), v.bottom = ui(d.bottom, v.bottom), v.left = Ar(d.left, v.left), v;
  }, Lf(t, s));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
__name(Uu, "Uu");
u(Uu, "getClippingRect");
function ea(t) {
  var r = t.reference, e = t.element, n = t.placement, o = n ? yt(n) : null, s = n ? Er(n) : null, p = r.x + r.width / 2 - e.width / 2, v = r.y + r.height / 2 - e.height / 2, m;
  switch (o) {
    case Je:
      m = { x: p, y: r.y - e.height };
      break;
    case ht:
      m = { x: p, y: r.y + r.height };
      break;
    case ut:
      m = { x: r.x + r.width, y: v };
      break;
    case nt:
      m = { x: r.x - e.width, y: v };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  var d = o ? pi(o) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (s) {
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
__name(ea, "ea");
u(ea, "computeOffsets");
function _r(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, o = n === void 0 ? t.placement : n, s = e.boundary, p = s === void 0 ? Af : s, v = e.rootBoundary, m = v === void 0 ? qs : v, d = e.elementContext, f = d === void 0 ? Xi : d, g = e.altBoundary, w = g === void 0 ? false : g, S = e.padding, T = S === void 0 ? 0 : S, C = Qo(typeof T != "number" ? T : Jo(T, Dn)), z = f === Xi ? Pf : Xi, N = t.rects.popper, G = t.elements[w ? z : f], $ = Uu(Br(G) ? G : G.contextElement || Tt(t.elements.popper), p, m), A = xr(t.elements.reference), ee = ea({ reference: A, element: N, strategy: "absolute", placement: o }), _ = Ki(Object.assign({}, N, ee)), B = f === Xi ? _ : A, te = { top: $.top - B.top + C.top, bottom: B.bottom - $.bottom + C.bottom, left: $.left - B.left + C.left, right: B.right - $.right + C.right }, J = t.modifiersData.offset;
  if (f === Xi && J) {
    var ue = J[o];
    Object.keys(te).forEach(function(K) {
      var ie = [ut, ht].indexOf(K) >= 0 ? 1 : -1, q = [Je, ht].indexOf(K) >= 0 ? "y" : "x";
      te[K] += ue[q] * ie;
    });
  }
  return te;
}
__name(_r, "_r");
u(_r, "detectOverflow");
function Wu(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, o = e.boundary, s = e.rootBoundary, p = e.padding, v = e.flipVariations, m = e.allowedAutoPlacements, d = m === void 0 ? Fs : m, f = Er(n), g = f ? v ? Hu : Hu.filter(function(T) {
    return Er(T) === f;
  }) : Dn, w = g.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  w.length === 0 && (w = g);
  var S = w.reduce(function(T, C) {
    return T[C] = _r(t, { placement: C, boundary: o, rootBoundary: s, padding: p })[yt(C)], T;
  }, {});
  return Object.keys(S).sort(function(T, C) {
    return S[T] - S[C];
  });
}
__name(Wu, "Wu");
u(Wu, "computeAutoPlacement");
function vy(t) {
  if (yt(t) === $s)
    return [];
  var r = Zi(t);
  return [Vs(t), r, Vs(r)];
}
__name(vy, "vy");
u(vy, "getExpandedFallbackPlacements");
function gy(t) {
  var r = t.state, e = t.options, n = t.name;
  if (!r.modifiersData[n]._skip) {
    for (var o = e.mainAxis, s = o === void 0 ? true : o, p = e.altAxis, v = p === void 0 ? true : p, m = e.fallbackPlacements, d = e.padding, f = e.boundary, g = e.rootBoundary, w = e.altBoundary, S = e.flipVariations, T = S === void 0 ? true : S, C = e.allowedAutoPlacements, z = r.options.placement, N = yt(z), G = N === z, $ = m || (G || !T ? [Zi(z)] : vy(z)), A = [z].concat($).reduce(function(Be, tt) {
      return Be.concat(yt(tt) === $s ? Wu(r, { placement: tt, boundary: f, rootBoundary: g, padding: d, flipVariations: T, allowedAutoPlacements: C }) : tt);
    }, []), ee = r.rects.reference, _ = r.rects.popper, B = /* @__PURE__ */ new Map(), te = true, J = A[0], ue = 0; ue < A.length; ue++) {
      var K = A[ue], ie = yt(K), q = Er(K) === sn, oe = [Je, ht].indexOf(ie) >= 0, et = oe ? "width" : "height", Ze = _r(r, { placement: K, boundary: f, rootBoundary: g, altBoundary: w, padding: d }), _e = oe ? q ? ut : nt : q ? ht : Je;
      ee[et] > _[et] && (_e = Zi(_e));
      var Ae = Zi(_e), We = [];
      if (s && We.push(Ze[ie] <= 0), v && We.push(Ze[_e] <= 0, Ze[Ae] <= 0), We.every(function(Be) {
        return Be;
      })) {
        J = K, te = false;
        break;
      }
      B.set(K, We);
    }
    if (te)
      for (var Qe = T ? 3 : 1, Ye = u(function(tt) {
        var fr = A.find(function(Mr) {
          var hr = B.get(Mr);
          if (hr)
            return hr.slice(0, tt).every(function(or) {
              return or;
            });
        });
        if (fr)
          return J = fr, "break";
      }, "_loop"), Q = Qe; Q > 0; Q--) {
        var ir = Ye(Q);
        if (ir === "break")
          break;
      }
    r.placement !== J && (r.modifiersData[n]._skip = true, r.placement = J, r.reset = true);
  }
}
__name(gy, "gy");
u(gy, "flip");
var jf = { name: "flip", enabled: true, phase: "main", fn: gy, requiresIfExists: ["offset"], data: { _skip: false } };
function Bf(t, r, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - r.height - e.y, right: t.right - r.width + e.x, bottom: t.bottom - r.height + e.y, left: t.left - r.width - e.x };
}
__name(Bf, "Bf");
u(Bf, "getSideOffsets");
function Hf(t) {
  return [Je, ut, ht, nt].some(function(r) {
    return t[r] >= 0;
  });
}
__name(Hf, "Hf");
u(Hf, "isAnySideFullyClipped");
function by(t) {
  var r = t.state, e = t.name, n = r.rects.reference, o = r.rects.popper, s = r.modifiersData.preventOverflow, p = _r(r, { elementContext: "reference" }), v = _r(r, { altBoundary: true }), m = Bf(p, n), d = Bf(v, o, s), f = Hf(m), g = Hf(d);
  r.modifiersData[e] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: f, hasPopperEscaped: g }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": g });
}
__name(by, "by");
u(by, "hide");
var $f = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: by };
function yy(t, r, e) {
  var n = yt(t), o = [nt, Je].indexOf(n) >= 0 ? -1 : 1, s = typeof e == "function" ? e(Object.assign({}, r, { placement: t })) : e, p = s[0], v = s[1];
  return p = p || 0, v = (v || 0) * o, [nt, ut].indexOf(n) >= 0 ? { x: v, y: p } : { x: p, y: v };
}
__name(yy, "yy");
u(yy, "distanceAndSkiddingToXY");
function wy(t) {
  var r = t.state, e = t.options, n = t.name, o = e.offset, s = o === void 0 ? [0, 0] : o, p = Fs.reduce(function(f, g) {
    return f[g] = yy(g, r.rects, s), f;
  }, {}), v = p[r.placement], m = v.x, d = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m, r.modifiersData.popperOffsets.y += d), r.modifiersData[n] = p;
}
__name(wy, "wy");
u(wy, "offset");
var qf = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: wy };
function xy(t) {
  var r = t.state, e = t.name;
  r.modifiersData[e] = ea({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(xy, "xy");
u(xy, "popperOffsets");
var Ff = { name: "popperOffsets", enabled: true, phase: "read", fn: xy, data: {} };
function Vu(t) {
  return t === "x" ? "y" : "x";
}
__name(Vu, "Vu");
u(Vu, "getAltAxis");
function Ey(t) {
  var r = t.state, e = t.options, n = t.name, o = e.mainAxis, s = o === void 0 ? true : o, p = e.altAxis, v = p === void 0 ? false : p, m = e.boundary, d = e.rootBoundary, f = e.altBoundary, g = e.padding, w = e.tether, S = w === void 0 ? true : w, T = e.tetherOffset, C = T === void 0 ? 0 : T, z = _r(r, { boundary: m, rootBoundary: d, padding: g, altBoundary: f }), N = yt(r.placement), G = Er(r.placement), $ = !G, A = pi(N), ee = Vu(A), _ = r.modifiersData.popperOffsets, B = r.rects.reference, te = r.rects.popper, J = typeof C == "function" ? C(Object.assign({}, r.rects, { placement: r.placement })) : C, ue = typeof J == "number" ? { mainAxis: J, altAxis: J } : Object.assign({ mainAxis: 0, altAxis: 0 }, J), K = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, ie = { x: 0, y: 0 };
  if (_) {
    if (s) {
      var q, oe = A === "y" ? Je : nt, et = A === "y" ? ht : ut, Ze = A === "y" ? "height" : "width", _e = _[A], Ae = _e + z[oe], We = _e - z[et], Qe = S ? -te[Ze] / 2 : 0, Ye = G === sn ? B[Ze] : te[Ze], Q = G === sn ? -te[Ze] : -B[Ze], ir = r.elements.arrow, Be = S && ir ? ci(ir) : { width: 0, height: 0 }, tt = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : Ko(), fr = tt[oe], Mr = tt[et], hr = di(0, B[Ze], Be[Ze]), or = $ ? B[Ze] / 2 - Qe - hr - fr - ue.mainAxis : Ye - hr - fr - ue.mainAxis, Dr = $ ? -B[Ze] / 2 + Qe + hr + Mr + ue.mainAxis : Q + hr + Mr + ue.mainAxis, Wr = r.elements.arrow && Pr(r.elements.arrow), Ln = Wr ? A === "y" ? Wr.clientTop || 0 : Wr.clientLeft || 0 : 0, Pe = (q = K == null ? void 0 : K[A]) != null ? q : 0, jn = _e + or - Pe - Ln, Bn = _e + Dr - Pe, kt = di(S ? ui(Ae, jn) : Ae, _e, S ? Ar(We, Bn) : We);
      _[A] = kt, ie[A] = kt - _e;
    }
    if (v) {
      var Vr, bi = A === "x" ? Je : nt, mn = A === "x" ? ht : ut, Ir = _[ee], Mt = ee === "y" ? "height" : "width", kr = Ir + z[bi], qt = Ir - z[mn], Hn = [Je, nt].indexOf(N) !== -1, Yr = (Vr = K == null ? void 0 : K[ee]) != null ? Vr : 0, $n = Hn ? kr : Ir - B[Mt] - te[Mt] - Yr + ue.altAxis, vn = Hn ? Ir + B[Mt] + te[Mt] - Yr - ue.altAxis : qt, qn = S && Hn ? Rf($n, Ir, vn) : di(S ? $n : kr, Ir, S ? vn : qt);
      _[ee] = qn, ie[ee] = qn - Ir;
    }
    r.modifiersData[n] = ie;
  }
}
__name(Ey, "Ey");
u(Ey, "preventOverflow");
var Uf = { name: "preventOverflow", enabled: true, phase: "main", fn: Ey, requiresIfExists: ["offset"] };
function Yu(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(Yu, "Yu");
u(Yu, "getHTMLElementScroll");
function Xu(t) {
  return t === it(t) || !mt(t) ? fi(t) : Yu(t);
}
__name(Xu, "Xu");
u(Xu, "getNodeScroll");
function Sy(t) {
  var r = t.getBoundingClientRect(), e = ln(r.width) / t.offsetWidth || 1, n = ln(r.height) / t.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
__name(Sy, "Sy");
u(Sy, "isElementScaled");
function Zu(t, r, e) {
  e === void 0 && (e = false);
  var n = mt(r), o = mt(r) && Sy(r), s = Tt(r), p = xr(t, o), v = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (n || !n && !e) && ((bt(r) !== "body" || mi(s)) && (v = Xu(r)), mt(r) ? (m = xr(r, true), m.x += r.clientLeft, m.y += r.clientTop) : s && (m.x = hi(s))), { x: p.left + v.scrollLeft - m.x, y: p.top + v.scrollTop - m.y, width: p.width, height: p.height };
}
__name(Zu, "Zu");
u(Zu, "getCompositeRect");
function Ty(t) {
  var r = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(s) {
    r.set(s.name, s);
  });
  function o(s) {
    e.add(s.name);
    var p = [].concat(s.requires || [], s.requiresIfExists || []);
    p.forEach(function(v) {
      if (!e.has(v)) {
        var m = r.get(v);
        m && o(m);
      }
    }), n.push(s);
  }
  __name(o, "o");
  return u(o, "sort"), t.forEach(function(s) {
    e.has(s.name) || o(s);
  }), n;
}
__name(Ty, "Ty");
u(Ty, "order");
function Ku(t) {
  var r = Ty(t);
  return _f.reduce(function(e, n) {
    return e.concat(r.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
__name(Ku, "Ku");
u(Ku, "orderModifiers");
function Qu(t) {
  var r;
  return function() {
    return r || (r = new Promise(function(e) {
      Promise.resolve().then(function() {
        r = void 0, e(t());
      });
    })), r;
  };
}
__name(Qu, "Qu");
u(Qu, "debounce");
function Ju(t) {
  var r = t.reduce(function(e, n) {
    var o = e[n.name];
    return e[n.name] = o ? Object.assign({}, o, n, { options: Object.assign({}, o.options, n.options), data: Object.assign({}, o.data, n.data) }) : n, e;
  }, {});
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}
__name(Ju, "Ju");
u(Ju, "mergeByName");
var Wf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vf() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(Vf, "Vf");
u(Vf, "areValidElements");
function Yf(t) {
  t === void 0 && (t = {});
  var r = t, e = r.defaultModifiers, n = e === void 0 ? [] : e, o = r.defaultOptions, s = o === void 0 ? Wf : o;
  return u(function(v, m, d) {
    d === void 0 && (d = s);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Wf, s), modifiersData: {}, elements: { reference: v, popper: m }, attributes: {}, styles: {} }, g = [], w = false, S = { state: f, setOptions: u(function(N) {
      var G = typeof N == "function" ? N(f.options) : N;
      C(), f.options = Object.assign({}, s, f.options, G), f.scrollParents = { reference: Br(v) ? kn(v) : v.contextElement ? kn(v.contextElement) : [], popper: kn(m) };
      var $ = Ku(Ju([].concat(n, f.options.modifiers)));
      if (f.orderedModifiers = $.filter(function(K) {
        return K.enabled;
      }), false) {
        var A;
        if (getBasePlacement(f.options.placement) === auto)
          var ee;
        var _, B, te, J, ue;
      }
      return T(), S.update();
    }, "setOptions"), forceUpdate: u(function() {
      if (!w) {
        var N = f.elements, G = N.reference, $ = N.popper;
        if (Vf(G, $)) {
          f.rects = { reference: Zu(G, Pr($), f.options.strategy === "fixed"), popper: ci($) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(K) {
            return f.modifiersData[K.name] = Object.assign({}, K.data);
          });
          for (var A = 0, ee = 0; ee < f.orderedModifiers.length; ee++) {
            if (f.reset === true) {
              f.reset = false, ee = -1;
              continue;
            }
            var _ = f.orderedModifiers[ee], B = _.fn, te = _.options, J = te === void 0 ? {} : te, ue = _.name;
            typeof B == "function" && (f = B({ state: f, options: J, name: ue, instance: S }) || f);
          }
        }
      }
    }, "forceUpdate"), update: Qu(function() {
      return new Promise(function(z) {
        S.forceUpdate(), z(f);
      });
    }), destroy: u(function() {
      C(), w = true;
    }, "destroy") };
    if (!Vf(v, m))
      return S;
    S.setOptions(d).then(function(z) {
      !w && d.onFirstUpdate && d.onFirstUpdate(z);
    });
    function T() {
      f.orderedModifiers.forEach(function(z) {
        var N = z.name, G = z.options, $ = G === void 0 ? {} : G, A = z.effect;
        if (typeof A == "function") {
          var ee = A({ state: f, name: N, instance: S, options: $ }), _ = u(function() {
          }, "noopFn");
          g.push(ee || _);
        }
      });
    }
    __name(T, "T");
    u(T, "runModifierEffects");
    function C() {
      g.forEach(function(z) {
        return z();
      }), g = [];
    }
    __name(C, "C");
    return u(C, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(Yf, "Yf");
u(Yf, "popperGenerator");
var Cy = [Gf, Ff, Nf, Xo, qf, jf, Uf, Df, $f];
var ec = Yf({ defaultModifiers: Cy });
var Oy = "tippy-box";
var ih = "tippy-content";
var My = "tippy-backdrop";
var oh = "tippy-arrow";
var ah = "tippy-svg-arrow";
var vi = { passive: true, capture: true };
var sh = u(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function tc(t, r, e) {
  if (Array.isArray(t)) {
    var n = t[r];
    return n == null ? Array.isArray(e) ? e[r] : e : n;
  }
  return t;
}
__name(tc, "tc");
u(tc, "getValueAtIndexOrReturn");
function sc(t, r) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(r + "]") > -1;
}
__name(sc, "sc");
u(sc, "isType");
function lh(t, r) {
  return typeof t == "function" ? t.apply(void 0, r) : t;
}
__name(lh, "lh");
u(lh, "invokeWithArgsOrReturn");
function Xf(t, r) {
  if (r === 0)
    return t;
  var e;
  return function(n) {
    clearTimeout(e), e = setTimeout(function() {
      t(n);
    }, r);
  };
}
__name(Xf, "Xf");
u(Xf, "debounce");
function Iy(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(Iy, "Iy");
u(Iy, "splitBySpaces");
function Qi(t) {
  return [].concat(t);
}
__name(Qi, "Qi");
u(Qi, "normalizeToArray");
function Zf(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
__name(Zf, "Zf");
u(Zf, "pushIfUnique");
function Ay(t) {
  return t.filter(function(r, e) {
    return t.indexOf(r) === e;
  });
}
__name(Ay, "Ay");
u(Ay, "unique");
function Py(t) {
  return t.split("-")[0];
}
__name(Py, "Py");
u(Py, "getBasePlacement");
function Zs(t) {
  return [].slice.call(t);
}
__name(Zs, "Zs");
u(Zs, "arrayFrom");
function Kf(t) {
  return Object.keys(t).reduce(function(r, e) {
    return t[e] !== void 0 && (r[e] = t[e]), r;
  }, {});
}
__name(Kf, "Kf");
u(Kf, "removeUndefinedProps");
function ta() {
  return document.createElement("div");
}
__name(ta, "ta");
u(ta, "div");
function Ks(t) {
  return ["Element", "Fragment"].some(function(r) {
    return sc(t, r);
  });
}
__name(Ks, "Ks");
u(Ks, "isElement");
function _y(t) {
  return sc(t, "NodeList");
}
__name(_y, "_y");
u(_y, "isNodeList");
function zy(t) {
  return sc(t, "MouseEvent");
}
__name(zy, "zy");
u(zy, "isMouseEvent");
function Ry(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(Ry, "Ry");
u(Ry, "isReferenceElement");
function Dy(t) {
  return Ks(t) ? [t] : _y(t) ? Zs(t) : Array.isArray(t) ? t : Zs(document.querySelectorAll(t));
}
__name(Dy, "Dy");
u(Dy, "getArrayOfElements");
function rc(t, r) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = r + "ms");
  });
}
__name(rc, "rc");
u(rc, "setTransitionDuration");
function Qf(t, r) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", r);
  });
}
__name(Qf, "Qf");
u(Qf, "setVisibilityState");
function ky(t) {
  var r, e = Qi(t), n = e[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(ky, "ky");
u(ky, "getOwnerDocument");
function Ny(t, r) {
  var e = r.clientX, n = r.clientY;
  return t.every(function(o) {
    var s = o.popperRect, p = o.popperState, v = o.props, m = v.interactiveBorder, d = Py(p.placement), f = p.modifiersData.offset;
    if (!f)
      return true;
    var g = d === "bottom" ? f.top.y : 0, w = d === "top" ? f.bottom.y : 0, S = d === "right" ? f.left.x : 0, T = d === "left" ? f.right.x : 0, C = s.top - n + g > m, z = n - s.bottom - w > m, N = s.left - e + S > m, G = e - s.right - T > m;
    return C || z || N || G;
  });
}
__name(Ny, "Ny");
u(Ny, "isCursorOutsideInteractiveBorder");
function nc(t, r, e) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    t[n](o, e);
  });
}
__name(nc, "nc");
u(nc, "updateTransitionEndListener");
function Jf(t, r) {
  for (var e = r; e; ) {
    var n;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (n = e.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(Jf, "Jf");
u(Jf, "actualContains");
var Hr = { isTouch: false };
var eh = 0;
function Gy() {
  Hr.isTouch || (Hr.isTouch = true, window.performance && document.addEventListener("mousemove", uh));
}
__name(Gy, "Gy");
u(Gy, "onDocumentTouchStart");
function uh() {
  var t = performance.now();
  t - eh < 20 && (Hr.isTouch = false, document.removeEventListener("mousemove", uh)), eh = t;
}
__name(uh, "uh");
u(uh, "onDocumentMouseMove");
function Ly() {
  var t = document.activeElement;
  if (Ry(t)) {
    var r = t._tippy;
    t.blur && !r.state.isVisible && t.blur();
  }
}
__name(Ly, "Ly");
u(Ly, "onWindowBlur");
function jy() {
  document.addEventListener("touchstart", Gy, vi), window.addEventListener("blur", Ly);
}
__name(jy, "jy");
u(jy, "bindGlobalEventListeners");
var By = typeof window != "undefined" && typeof document != "undefined";
var Hy = By ? !!window.msCrypto : false;
var $y = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var qy = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var zr = Object.assign({ appendTo: sh, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, $y, qy);
var Fy = Object.keys(zr);
var Uy = u(function(r) {
  var e = Object.keys(r);
  e.forEach(function(n) {
    zr[n] = r[n];
  });
}, "setDefaultProps");
function ch(t) {
  var r = t.plugins || [], e = r.reduce(function(n, o) {
    var s = o.name, p = o.defaultValue;
    if (s) {
      var v;
      n[s] = t[s] !== void 0 ? t[s] : (v = zr[s]) != null ? v : p;
    }
    return n;
  }, {});
  return Object.assign({}, t, e);
}
__name(ch, "ch");
u(ch, "getExtendedPassedProps");
function Wy(t, r) {
  var e = r ? Object.keys(ch(Object.assign({}, zr, { plugins: r }))) : Fy, n = e.reduce(function(o, s) {
    var p = (t.getAttribute("data-tippy-" + s) || "").trim();
    if (!p)
      return o;
    if (s === "content")
      o[s] = p;
    else
      try {
        o[s] = JSON.parse(p);
      } catch (v) {
        o[s] = p;
      }
    return o;
  }, {});
  return n;
}
__name(Wy, "Wy");
u(Wy, "getDataAttributeProps");
function th(t, r) {
  var e = Object.assign({}, r, { content: lh(r.content, [t]) }, r.ignoreAttributes ? {} : Wy(t, r.plugins));
  return e.aria = Object.assign({}, zr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? r.interactive : e.aria.expanded, content: e.aria.content === "auto" ? r.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(th, "th");
u(th, "evaluateProps");
var Vy = u(function() {
  return "innerHTML";
}, "innerHTML");
function oc(t, r) {
  t[Vy()] = r;
}
__name(oc, "oc");
u(oc, "dangerouslySetInnerHTML");
function rh(t) {
  var r = ta();
  return t === true ? r.className = oh : (r.className = ah, Ks(t) ? r.appendChild(t) : oc(r, t)), r;
}
__name(rh, "rh");
u(rh, "createArrowElement");
function nh(t, r) {
  Ks(r.content) ? (oc(t, ""), t.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? oc(t, r.content) : t.textContent = r.content);
}
__name(nh, "nh");
u(nh, "setContent");
function ac(t) {
  var r = t.firstElementChild, e = Zs(r.children);
  return { box: r, content: e.find(function(n) {
    return n.classList.contains(ih);
  }), arrow: e.find(function(n) {
    return n.classList.contains(oh) || n.classList.contains(ah);
  }), backdrop: e.find(function(n) {
    return n.classList.contains(My);
  }) };
}
__name(ac, "ac");
u(ac, "getChildren");
function ph(t) {
  var r = ta(), e = ta();
  e.className = Oy, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var n = ta();
  n.className = ih, n.setAttribute("data-state", "hidden"), nh(n, t.props), r.appendChild(e), e.appendChild(n), o(t.props, t.props);
  function o(s, p) {
    var v = ac(r), m = v.box, d = v.content, f = v.arrow;
    p.theme ? m.setAttribute("data-theme", p.theme) : m.removeAttribute("data-theme"), typeof p.animation == "string" ? m.setAttribute("data-animation", p.animation) : m.removeAttribute("data-animation"), p.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? m.setAttribute("role", p.role) : m.removeAttribute("role"), (s.content !== p.content || s.allowHTML !== p.allowHTML) && nh(d, t.props), p.arrow ? f ? s.arrow !== p.arrow && (m.removeChild(f), m.appendChild(rh(p.arrow))) : m.appendChild(rh(p.arrow)) : f && m.removeChild(f);
  }
  __name(o, "o");
  return u(o, "onUpdate"), { popper: r, onUpdate: o };
}
__name(ph, "ph");
u(ph, "render");
ph.$$tippy = true;
var Yy = 1;
var Xs = [];
var ic = [];
function Xy(t, r) {
  var e = th(t, Object.assign({}, zr, ch(Kf(r)))), n, o, s, p = false, v = false, m = false, d = false, f, g, w, S = [], T = Xf(jn, e.interactiveDebounce), C, z = Yy++, N = null, G = Ay(e.plugins), $ = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: z, reference: t, popper: ta(), popperInstance: N, props: e, state: $, plugins: G, clearDelayTimeouts: $n, setProps: vn, setContent: qn, show: io, hide: oo, hideWithInteractivity: ha, enable: Hn, disable: Yr, unmount: ma, destroy: dl };
  if (!e.render)
    return A;
  var ee = e.render(A), _ = ee.popper, B = ee.onUpdate;
  _.setAttribute("data-tippy-root", ""), _.id = "tippy-" + A.id, A.popper = _, t._tippy = A, _._tippy = A;
  var te = G.map(function(L) {
    return L.fn(A);
  }), J = t.hasAttribute("aria-expanded");
  return Wr(), Qe(), _e(), Ae("onCreate", [A]), e.showOnCreate && kr(), _.addEventListener("mouseenter", function() {
    A.props.interactive && A.state.isVisible && A.clearDelayTimeouts();
  }), _.addEventListener("mouseleave", function() {
    A.props.interactive && A.props.trigger.indexOf("mouseenter") >= 0 && oe().addEventListener("mousemove", T);
  }), A;
  function ue() {
    var L = A.props.touch;
    return Array.isArray(L) ? L : [L, 0];
  }
  __name(ue, "ue");
  u(ue, "getNormalizedTouchSettings");
  function K() {
    return ue()[0] === "hold";
  }
  __name(K, "K");
  u(K, "getIsCustomTouchBehavior");
  function ie() {
    var L;
    return !!((L = A.props.render) != null && L.$$tippy);
  }
  __name(ie, "ie");
  u(ie, "getIsDefaultRenderFn");
  function q() {
    return C || t;
  }
  __name(q, "q");
  u(q, "getCurrentTarget");
  function oe() {
    var L = q().parentNode;
    return L ? ky(L) : document;
  }
  __name(oe, "oe");
  u(oe, "getDocument");
  function et() {
    return ac(_);
  }
  __name(et, "et");
  u(et, "getDefaultTemplateChildren");
  function Ze(L) {
    return A.state.isMounted && !A.state.isVisible || Hr.isTouch || f && f.type === "focus" ? 0 : tc(A.props.delay, L ? 0 : 1, zr.delay);
  }
  __name(Ze, "Ze");
  u(Ze, "getDelay");
  function _e(L) {
    L === void 0 && (L = false), _.style.pointerEvents = A.props.interactive && !L ? "" : "none", _.style.zIndex = "" + A.props.zIndex;
  }
  __name(_e, "_e");
  u(_e, "handleStyles");
  function Ae(L, re, se) {
    if (se === void 0 && (se = true), te.forEach(function(xe) {
      xe[L] && xe[L].apply(xe, re);
    }), se) {
      var ze;
      (ze = A.props)[L].apply(ze, re);
    }
  }
  __name(Ae, "Ae");
  u(Ae, "invokeHook");
  function We() {
    var L = A.props.aria;
    if (L.content) {
      var re = "aria-" + L.content, se = _.id, ze = Qi(A.props.triggerTarget || t);
      ze.forEach(function(xe) {
        var wt = xe.getAttribute(re);
        if (A.state.isVisible)
          xe.setAttribute(re, wt ? wt + " " + se : se);
        else {
          var Nt = wt && wt.replace(se, "").trim();
          Nt ? xe.setAttribute(re, Nt) : xe.removeAttribute(re);
        }
      });
    }
  }
  __name(We, "We");
  u(We, "handleAriaContentAttribute");
  function Qe() {
    if (!(J || !A.props.aria.expanded)) {
      var L = Qi(A.props.triggerTarget || t);
      L.forEach(function(re) {
        A.props.interactive ? re.setAttribute("aria-expanded", A.state.isVisible && re === q() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Qe, "Qe");
  u(Qe, "handleAriaExpandedAttribute");
  function Ye() {
    oe().removeEventListener("mousemove", T), Xs = Xs.filter(function(L) {
      return L !== T;
    });
  }
  __name(Ye, "Ye");
  u(Ye, "cleanupInteractiveMouseListeners");
  function Q(L) {
    if (!(Hr.isTouch && (m || L.type === "mousedown"))) {
      var re = L.composedPath && L.composedPath()[0] || L.target;
      if (!(A.props.interactive && Jf(_, re))) {
        if (Qi(A.props.triggerTarget || t).some(function(se) {
          return Jf(se, re);
        })) {
          if (Hr.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Ae("onClickOutside", [A, L]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), v = true, setTimeout(function() {
          v = false;
        }), A.state.isMounted || fr());
      }
    }
  }
  __name(Q, "Q");
  u(Q, "onDocumentPress");
  function ir() {
    m = true;
  }
  __name(ir, "ir");
  u(ir, "onTouchMove");
  function Be() {
    m = false;
  }
  __name(Be, "Be");
  u(Be, "onTouchStart");
  function tt() {
    var L = oe();
    L.addEventListener("mousedown", Q, true), L.addEventListener("touchend", Q, vi), L.addEventListener("touchstart", Be, vi), L.addEventListener("touchmove", ir, vi);
  }
  __name(tt, "tt");
  u(tt, "addDocumentPress");
  function fr() {
    var L = oe();
    L.removeEventListener("mousedown", Q, true), L.removeEventListener("touchend", Q, vi), L.removeEventListener("touchstart", Be, vi), L.removeEventListener("touchmove", ir, vi);
  }
  __name(fr, "fr");
  u(fr, "removeDocumentPress");
  function Mr(L, re) {
    or(L, function() {
      !A.state.isVisible && _.parentNode && _.parentNode.contains(_) && re();
    });
  }
  __name(Mr, "Mr");
  u(Mr, "onTransitionedOut");
  function hr(L, re) {
    or(L, re);
  }
  __name(hr, "hr");
  u(hr, "onTransitionedIn");
  function or(L, re) {
    var se = et().box;
    function ze(xe) {
      xe.target === se && (nc(se, "remove", ze), re());
    }
    __name(ze, "ze");
    if (u(ze, "listener"), L === 0)
      return re();
    nc(se, "remove", g), nc(se, "add", ze), g = ze;
  }
  __name(or, "or");
  u(or, "onTransitionEnd");
  function Dr(L, re, se) {
    se === void 0 && (se = false);
    var ze = Qi(A.props.triggerTarget || t);
    ze.forEach(function(xe) {
      xe.addEventListener(L, re, se), S.push({ node: xe, eventType: L, handler: re, options: se });
    });
  }
  __name(Dr, "Dr");
  u(Dr, "on");
  function Wr() {
    K() && (Dr("touchstart", Pe, { passive: true }), Dr("touchend", Bn, { passive: true })), Iy(A.props.trigger).forEach(function(L) {
      if (L !== "manual")
        switch (Dr(L, Pe), L) {
          case "mouseenter":
            Dr("mouseleave", Bn);
            break;
          case "focus":
            Dr(Hy ? "focusout" : "blur", kt);
            break;
          case "focusin":
            Dr("focusout", kt);
            break;
        }
    });
  }
  __name(Wr, "Wr");
  u(Wr, "addListeners");
  function Ln() {
    S.forEach(function(L) {
      var re = L.node, se = L.eventType, ze = L.handler, xe = L.options;
      re.removeEventListener(se, ze, xe);
    }), S = [];
  }
  __name(Ln, "Ln");
  u(Ln, "removeListeners");
  function Pe(L) {
    var re, se = false;
    if (!(!A.state.isEnabled || Vr(L) || v)) {
      var ze = ((re = f) == null ? void 0 : re.type) === "focus";
      f = L, C = L.currentTarget, Qe(), !A.state.isVisible && zy(L) && Xs.forEach(function(xe) {
        return xe(L);
      }), L.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || p) && A.props.hideOnClick !== false && A.state.isVisible ? se = true : kr(L), L.type === "click" && (p = !se), se && !ze && qt(L);
    }
  }
  __name(Pe, "Pe");
  u(Pe, "onTrigger");
  function jn(L) {
    var re = L.target, se = q().contains(re) || _.contains(re);
    if (!(L.type === "mousemove" && se)) {
      var ze = Mt().concat(_).map(function(xe) {
        var wt, Nt = xe._tippy, It = (wt = Nt.popperInstance) == null ? void 0 : wt.state;
        return It ? { popperRect: xe.getBoundingClientRect(), popperState: It, props: e } : null;
      }).filter(Boolean);
      Ny(ze, L) && (Ye(), qt(L));
    }
  }
  __name(jn, "jn");
  u(jn, "onMouseMove");
  function Bn(L) {
    var re = Vr(L) || A.props.trigger.indexOf("click") >= 0 && p;
    if (!re) {
      if (A.props.interactive) {
        A.hideWithInteractivity(L);
        return;
      }
      qt(L);
    }
  }
  __name(Bn, "Bn");
  u(Bn, "onMouseLeave");
  function kt(L) {
    A.props.trigger.indexOf("focusin") < 0 && L.target !== q() || A.props.interactive && L.relatedTarget && _.contains(L.relatedTarget) || qt(L);
  }
  __name(kt, "kt");
  u(kt, "onBlurOrFocusOut");
  function Vr(L) {
    return Hr.isTouch ? K() !== L.type.indexOf("touch") >= 0 : false;
  }
  __name(Vr, "Vr");
  u(Vr, "isEventListenerStopped");
  function bi() {
    mn();
    var L = A.props, re = L.popperOptions, se = L.placement, ze = L.offset, xe = L.getReferenceClientRect, wt = L.moveTransition, Nt = ie() ? ac(_).arrow : null, It = xe ? { getBoundingClientRect: xe, contextElement: xe.contextElement || q() } : t, va = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(At) {
      var Pt = At.state;
      if (ie()) {
        var Xr = et(), yi = Xr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(wi) {
          wi === "placement" ? yi.setAttribute("data-placement", Pt.placement) : Pt.attributes.popper["data-popper-" + wi] ? yi.setAttribute("data-" + wi, "") : yi.removeAttribute("data-" + wi);
        }), Pt.attributes.popper = {};
      }
    }, "fn") }, mr = [{ name: "offset", options: { offset: ze } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !wt } }, va];
    ie() && Nt && mr.push({ name: "arrow", options: { element: Nt, padding: 3 } }), mr.push.apply(mr, (re == null ? void 0 : re.modifiers) || []), A.popperInstance = ec(It, _, Object.assign({}, re, { placement: se, onFirstUpdate: w, modifiers: mr }));
  }
  __name(bi, "bi");
  u(bi, "createPopperInstance");
  function mn() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(mn, "mn");
  u(mn, "destroyPopperInstance");
  function Ir() {
    var L = A.props.appendTo, re, se = q();
    A.props.interactive && L === sh || L === "parent" ? re = se.parentNode : re = lh(L, [se]), re.contains(_) || re.appendChild(_), A.state.isMounted = true, bi();
  }
  __name(Ir, "Ir");
  u(Ir, "mount");
  function Mt() {
    return Zs(_.querySelectorAll("[data-tippy-root]"));
  }
  __name(Mt, "Mt");
  u(Mt, "getNestedPopperTree");
  function kr(L) {
    A.clearDelayTimeouts(), L && Ae("onTrigger", [A, L]), tt();
    var re = Ze(true), se = ue(), ze = se[0], xe = se[1];
    Hr.isTouch && ze === "hold" && xe && (re = xe), re ? n = setTimeout(function() {
      A.show();
    }, re) : A.show();
  }
  __name(kr, "kr");
  u(kr, "scheduleShow");
  function qt(L) {
    if (A.clearDelayTimeouts(), Ae("onUntrigger", [A, L]), !A.state.isVisible) {
      fr();
      return;
    }
    if (!(A.props.trigger.indexOf("mouseenter") >= 0 && A.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(L.type) >= 0 && p)) {
      var re = Ze(false);
      re ? o = setTimeout(function() {
        A.state.isVisible && A.hide();
      }, re) : s = requestAnimationFrame(function() {
        A.hide();
      });
    }
  }
  __name(qt, "qt");
  u(qt, "scheduleHide");
  function Hn() {
    A.state.isEnabled = true;
  }
  __name(Hn, "Hn");
  u(Hn, "enable");
  function Yr() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(Yr, "Yr");
  u(Yr, "disable");
  function $n() {
    clearTimeout(n), clearTimeout(o), cancelAnimationFrame(s);
  }
  __name($n, "$n");
  u($n, "clearDelayTimeouts");
  function vn(L) {
    if (!A.state.isDestroyed) {
      Ae("onBeforeUpdate", [A, L]), Ln();
      var re = A.props, se = th(t, Object.assign({}, re, Kf(L), { ignoreAttributes: true }));
      A.props = se, Wr(), re.interactiveDebounce !== se.interactiveDebounce && (Ye(), T = Xf(jn, se.interactiveDebounce)), re.triggerTarget && !se.triggerTarget ? Qi(re.triggerTarget).forEach(function(ze) {
        ze.removeAttribute("aria-expanded");
      }) : se.triggerTarget && t.removeAttribute("aria-expanded"), Qe(), _e(), B && B(re, se), A.popperInstance && (bi(), Mt().forEach(function(ze) {
        requestAnimationFrame(ze._tippy.popperInstance.forceUpdate);
      })), Ae("onAfterUpdate", [A, L]);
    }
  }
  __name(vn, "vn");
  u(vn, "setProps");
  function qn(L) {
    A.setProps({ content: L });
  }
  __name(qn, "qn");
  u(qn, "setContent");
  function io() {
    var L = A.state.isVisible, re = A.state.isDestroyed, se = !A.state.isEnabled, ze = Hr.isTouch && !A.props.touch, xe = tc(A.props.duration, 0, zr.duration);
    if (!(L || re || se || ze) && !q().hasAttribute("disabled") && (Ae("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, ie() && (_.style.visibility = "visible"), _e(), tt(), A.state.isMounted || (_.style.transition = "none"), ie()) {
        var wt = et(), Nt = wt.box, It = wt.content;
        rc([Nt, It], 0);
      }
      w = u(function() {
        var mr;
        if (!(!A.state.isVisible || d)) {
          if (d = true, _.offsetHeight, _.style.transition = A.props.moveTransition, ie() && A.props.animation) {
            var ao = et(), At = ao.box, Pt = ao.content;
            rc([At, Pt], xe), Qf([At, Pt], "visible");
          }
          We(), Qe(), Zf(ic, A), (mr = A.popperInstance) == null || mr.forceUpdate(), Ae("onMount", [A]), A.props.animation && ie() && hr(xe, function() {
            A.state.isShown = true, Ae("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), Ir();
    }
  }
  __name(io, "io");
  u(io, "show");
  function oo() {
    var L = !A.state.isVisible, re = A.state.isDestroyed, se = !A.state.isEnabled, ze = tc(A.props.duration, 1, zr.duration);
    if (!(L || re || se) && (Ae("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, d = false, p = false, ie() && (_.style.visibility = "hidden"), Ye(), fr(), _e(true), ie()) {
        var xe = et(), wt = xe.box, Nt = xe.content;
        A.props.animation && (rc([wt, Nt], ze), Qf([wt, Nt], "hidden"));
      }
      We(), Qe(), A.props.animation ? ie() && Mr(ze, A.unmount) : A.unmount();
    }
  }
  __name(oo, "oo");
  u(oo, "hide");
  function ha(L) {
    oe().addEventListener("mousemove", T), Zf(Xs, T), T(L);
  }
  __name(ha, "ha");
  u(ha, "hideWithInteractivity");
  function ma() {
    A.state.isVisible && A.hide(), A.state.isMounted && (mn(), Mt().forEach(function(L) {
      L._tippy.unmount();
    }), _.parentNode && _.parentNode.removeChild(_), ic = ic.filter(function(L) {
      return L !== A;
    }), A.state.isMounted = false, Ae("onHidden", [A]));
  }
  __name(ma, "ma");
  u(ma, "unmount");
  function dl() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), Ln(), delete t._tippy, A.state.isDestroyed = true, Ae("onDestroy", [A]));
  }
  __name(dl, "dl");
  u(dl, "destroy");
}
__name(Xy, "Xy");
u(Xy, "createTippy");
function ra(t, r) {
  r === void 0 && (r = {});
  var e = zr.plugins.concat(r.plugins || []);
  jy();
  var n = Object.assign({}, r, { plugins: e }), o = Dy(t);
  if (false)
    var s, p;
  var v = o.reduce(function(m, d) {
    var f = d && Xy(d, n);
    return f && m.push(f), m;
  }, []);
  return Ks(t) ? v[0] : v;
}
__name(ra, "ra");
u(ra, "tippy");
ra.defaultProps = zr;
ra.setDefaultProps = Uy;
ra.currentInput = Hr;
var L1 = Object.assign({}, Xo, { effect: u(function(r) {
  var e = r.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
}, "effect") });
ra.setDefaultProps({ render: ph });
var zt = ra;
var dh = Lt(rn(), 1);
var lc = u((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
function ve(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = ft({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let o = this.helpContent;
        o !== null && (this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(s) {
          s.setContent(o);
        } }), this.addEventListener("mouseenter", this.showHelp));
      }, show: () => {
        this.popup.show();
      }, enable: () => {
        this.popup.enable(), this.help = true;
      }, disable: () => {
        var o;
        (o = this.popup) == null || o.disable(), this.help = false;
      }, destroy: () => {
        var o;
        (o = this.popup) == null || o.destroy();
      } } });
      this.helpableService = lt(this.helpableMachine).onTransition((o) => {
        this.debugHelpable && console.log(`helpable: ${(0, dh.format)(o.value)}`);
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
      let o;
      this.helpId !== "" ? o = this.helpId : o = `${this.tagName.toLowerCase()}-help`;
      let s = document.getElementById(o);
      return s === null ? null : s.content.cloneNode(true);
    }
  }
  __name(r, "r");
  return u(r, "HelpableMixinClass"), M([D], r.prototype, "help", 2), M([D], r.prototype, "helpId", 2), M([D], r.prototype, "debugHelpable", 2), r;
}
__name(ve, "ve");
u(ve, "HelpableMixin");
function pe(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(r, "r");
  return u(r, "HoverableMixinClass"), M([D], r.prototype, "hoverable", 2), r;
}
__name(pe, "pe");
u(pe, "HoverableMixin");
var Qs = /* @__PURE__ */ new Map();
function Js(t) {
  if (Qs.has(t))
    return Qs.get(t);
  let r = t.length, e = 0, n = 0, o = 0, s = [];
  for (let p = 0; p < r; p += 1) {
    let v = t[p], m = t[p + 1], d = t[p - 1];
    v === "{" && m === "{" && d !== "\\" ? (o += 1, o === 1 && (n = p), p += 1) : v === "}" && m === "}" && d !== "\\" && o && (o -= 1, o === 0 && (n > e && (s.push(Object.freeze({ type: "string", start: e, end: n, value: t.slice(e, n) })), e = n), s.push(Object.freeze({ type: "part", start: n, end: p + 2, value: t.slice(e + 2, p).trim() })), p += 1, e = p + 1));
  }
  return e < r && s.push(Object.freeze({ type: "string", start: e, end: r, value: t.slice(e, r) })), Qs.set(t, Object.freeze(s)), Qs.get(t);
}
__name(Js, "Js");
u(Js, "parse");
var gi = /* @__PURE__ */ new WeakMap();
var fh = /* @__PURE__ */ new WeakMap();
var $r = /* @__PURE__ */ __name(class {
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
    return fh.get(this);
  }
  set value(r) {
    fh.set(this, r || ""), gi.get(this).updateParent(r);
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
}, "$r");
u($r, "AttributeTemplatePart");
var Ji = /* @__PURE__ */ __name(class {
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
}, "Ji");
u(Ji, "AttributeValueSetter");
var Nn = /* @__PURE__ */ new WeakMap();
var Rt = /* @__PURE__ */ __name(class {
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
}, "Rt");
u(Rt, "NodeTemplatePart");
function na(t) {
  return { processCallback(r, e, n) {
    var o;
    if (!(typeof n != "object" || !n)) {
      for (let s of e)
        if (s.expression in n) {
          let p = (o = n[s.expression]) !== null && o !== void 0 ? o : "";
          t(s, p);
        }
    }
  } };
}
__name(na, "na");
u(na, "createProcessor");
function ia(t, r) {
  t.value = String(r);
}
__name(ia, "ia");
u(ia, "processPropertyIdentity");
function el(t, r) {
  return typeof r == "boolean" && t instanceof $r && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = r, true) : false;
}
__name(el, "el");
u(el, "processBooleanAttribute");
var uc = na(ia);
var Zy = na((t, r) => {
  el(t, r) || ia(t, r);
});
function* Ky(t) {
  let r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = r.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let n = 0; n < e.attributes.length; n += 1) {
        let o = e.attributes.item(n);
        if (o && o.value.includes("{{")) {
          let s = new Ji(e, o);
          for (let p of Js(o.value))
            if (p.type === "string")
              s.append(p.value);
            else {
              let v = new $r(s, p.value);
              s.append(v), yield v;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{")) {
      let n = Js(e.textContent);
      for (let o = 0; o < n.length; o += 1) {
        let s = n[o];
        s.end < e.textContent.length && e.splitText(s.end), s.type === "part" && (yield new Rt(e, s.value));
        break;
      }
    }
}
__name(Ky, "Ky");
u(Ky, "collectParts");
var tl = /* @__PURE__ */ new WeakMap();
var rl = /* @__PURE__ */ new WeakMap();
var cn = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(r, e, n = uc) {
    var o, s;
    super(), Object.getPrototypeOf(this) !== cn.prototype && Object.setPrototypeOf(this, cn.prototype), this.appendChild(r.content.cloneNode(true)), rl.set(this, Array.from(Ky(this))), tl.set(this, n), (s = (o = tl.get(this)).createCallback) === null || s === void 0 || s.call(o, this, rl.get(this), e), tl.get(this).processCallback(this, rl.get(this), e);
  }
  update(r) {
    tl.get(this).processCallback(this, rl.get(this), r);
  }
}, "cn");
u(cn, "TemplateInstance");
var cc = /* @__PURE__ */ new WeakMap();
var hh = /* @__PURE__ */ new WeakMap();
var mh = /* @__PURE__ */ new WeakMap();
var Dt = /* @__PURE__ */ __name(class {
  constructor(r, e, n) {
    this.strings = r, this.values = e, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    Dt.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, e;
    if (cc.has(this.strings))
      return cc.get(this.strings);
    {
      let n = document.createElement("template"), o = this.strings.length - 1, s = this.strings.reduce((v, m, d) => v + m + (d < o ? `{{ ${d} }}` : ""), ""), p = (e = (r = Dt.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(s)) !== null && e !== void 0 ? e : s;
      return n.innerHTML = p, cc.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let e = this.template;
    if (hh.get(r) !== e) {
      hh.set(r, e);
      let n = new cn(e, this.values, this.processor);
      mh.set(r, n), r instanceof Rt ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    mh.get(r).update(this.values);
  }
}, "Dt");
u(Dt, "TemplateResult");
Dt.cspTrustedTypesPolicy = null;
function Y(t, r) {
  t.renderInto(r);
}
__name(Y, "Y");
u(Y, "render");
var vh = /* @__PURE__ */ new WeakSet();
function gh(t) {
  return vh.has(t);
}
__name(gh, "gh");
u(gh, "isDirective");
function bh(t, r) {
  return gh(r) ? (r(t), true) : false;
}
__name(bh, "bh");
u(bh, "processDirective");
function oa(t) {
  return (...r) => {
    let e = t(...r);
    return vh.add(e), e;
  };
}
__name(oa, "oa");
u(oa, "directive");
var aa = /* @__PURE__ */ new WeakMap();
var eo = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.element = r, this.type = e, this.element.addEventListener(this.type, this), aa.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), aa.get(this.element).delete(this.type));
  }
  static for(r) {
    aa.has(r.element) || aa.set(r.element, /* @__PURE__ */ new Map());
    let e = r.attributeName.slice(2), n = aa.get(r.element);
    return n.has(e) ? n.get(e) : new eo(r.element, e);
  }
}, "eo");
u(eo, "EventHandler");
function yh(t, r) {
  return t instanceof $r && t.attributeName.startsWith("on") ? (eo.for(t).set(r), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(yh, "yh");
u(yh, "processEvent");
function Qy(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(Qy, "Qy");
u(Qy, "isIterable");
function wh(t, r) {
  if (!Qy(r))
    return false;
  if (t instanceof Rt) {
    let e = [];
    for (let n of r)
      if (n instanceof Dt) {
        let o = document.createDocumentFragment();
        n.renderInto(o), e.push(...o.childNodes);
      } else
        n instanceof DocumentFragment ? e.push(...n.childNodes) : e.push(String(n));
    return e.length && t.replace(...e), true;
  } else
    return t.value = Array.from(r).join(" "), true;
}
__name(wh, "wh");
u(wh, "processIterable");
function xh(t, r) {
  return r instanceof DocumentFragment && t instanceof Rt ? (r.childNodes.length && t.replace(...r.childNodes), true) : false;
}
__name(xh, "xh");
u(xh, "processDocumentFragment");
function Eh(t, r) {
  return r instanceof Dt && t instanceof Rt ? (r.renderInto(t), true) : false;
}
__name(Eh, "Eh");
u(Eh, "processSubTemplate");
function nl(t, r) {
  bh(t, r) || el(t, r) || yh(t, r) || Eh(t, r) || xh(t, r) || wh(t, r) || ia(t, r);
}
__name(nl, "nl");
u(nl, "processPart");
var pc = na(nl);
function U(t, ...r) {
  return new Dt(t, r, pc);
}
__name(U, "U");
u(U, "html");
var dc = /* @__PURE__ */ new WeakMap();
var Jy = oa((...t) => (r) => {
  dc.has(r) || dc.set(r, { i: t.length });
  let e = dc.get(r);
  for (let n = 0; n < t.length; n += 1)
    t[n] instanceof Promise ? Promise.resolve(t[n]).then((o) => {
      n < e.i && (e.i = n, nl(r, o));
    }) : n <= e.i && (e.i = n, nl(r, t[n]));
});
var e0 = oa((t) => (r) => {
  var e, n;
  if (!(r instanceof Rt))
    return;
  let o = document.createElement("template"), s = (n = (e = Dt.cspTrustedTypesPolicy) === null || e === void 0 ? void 0 : e.createHTML(t)) !== null && n !== void 0 ? n : t;
  o.innerHTML = s;
  let p = document.importNode(o.content, true);
  r.replace(...p.childNodes);
});
function be(t) {
  class r extends t {
    iconHtml(n) {
      return U`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(n)}</div>`;
    }
    iconSvg(n) {
      return U([n]);
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
  __name(r, "r");
  return u(r, "IconableMixinClass"), r;
}
__name(be, "be");
u(be, "IconableMixin");
var pn = u((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
function Ue(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(r, "r");
  return u(r, "IfableMixinClass"), M([D], r.prototype, "if", 2), r;
}
__name(Ue, "Ue");
u(Ue, "IfableMixin");
var il = u((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
function ge(t) {
  class r extends t {
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var o, s, p, v;
        (o = this.ifTooltip) == null || o.hide(), (s = this.angleTooltip) == null || s.hide(), (p = this.flagTooltip) == null || p.hide(), (v = this.deleteTooltip) == null || v.hide();
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
      let o = document.getElementById("operation-menu");
      if (o === null || o.content === void 0)
        return null;
      let s = o.content.cloneNode(true), p = document.createDocumentFragment();
      return Y(U`${s}`, p), p;
    }
    initMenuItems(o) {
      if (pn(o.reference)) {
        let p = o.popper.querySelector("button[data-operation-menu-if]");
        H.notNull(p), p.disabled = false, this.ifTooltip = p._tippy, this.ifTooltip === void 0 && (this.ifTooltip = zt(p, { animation: false, content: "Set `if' Conditional" }), p.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (ri(o.reference)) {
        let p = o.popper.querySelector("button[data-operation-menu-angle]");
        H.notNull(p), p.disabled = false, this.angleTooltip = p._tippy, this.angleTooltip === void 0 && (this.angleTooltip = zt(p, { animation: false, content: "Change Angle" }), p.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (si(o.reference)) {
        let p = o.popper.querySelector("button[data-operation-menu-flag]");
        H.notNull(p), p.disabled = false, this.flagTooltip = p._tippy, this.flagTooltip === void 0 && (this.flagTooltip = zt(p, { animation: false, content: "Set Condifitonal Flag" }), p.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let s = o.popper.querySelector("[data-operation-menu-delete]");
      H.notNull(s), this.deleteTooltip = s._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = zt(s, { animation: false, content: "Delete" })), s.addEventListener("mousedown", this.destroyMenu.bind(this)), s.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
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
  }
  __name(r, "r");
  return u(r, "MenuableMixinClass"), r;
}
__name(ge, "ge");
u(ge, "MenuableMixin");
var Sh = Lt(rn(), 1);
var ol = Lt(Vo(), 1);
var ur = u((t) => t != null && typeof t.resizeable == "boolean", "isResizeable");
function al(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = ft({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        fe("resizeable:init", {}, this);
      }, setInteract: (o, s) => {
        H.need(s.type === "SET_INTERACT", "event type must be SET_INTERACT"), H.notNull(this.resizeHandle);
        let p = (0, ol.default)(this.resizeHandle);
        p.styleCursor(false), p.on("down", this.grabResizeHandle.bind(this)), p.on("up", this.releaseResizeHandle.bind(this)), p.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (o, s) => {
        H.need(s.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, fe("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (o, s) => {
        H.need(s.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, fe("resizeable:release-resize-handle", {}, this);
      }, startResizing: (o, s) => {
        H.need(s.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (o, s) => {
        H.need(s.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), fe("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), fe("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = lt(this.resizeableMachine).onTransition((o) => {
        this.debugResizeable && console.log(`resizeable: ${(0, Sh.format)(o.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(o) {
      o ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(o) {
      (0, ol.default)(this.resizeHandle).draggable({ modifiers: [ol.default.modifiers.snap({ targets: o, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(o) {
      let s = o.modifiers[0];
      if (!s.inRange)
        return;
      let p = s.target.source;
      fe("resizeable:resize-handle-in-snap-range", { snapTargetInfo: p }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
    }
    grabResizeHandle(o) {
      if (o.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: grabResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "GRAB_RESIZE_HANDLE", x: o.offsetX, y: o.offsetY });
    }
    releaseResizeHandle(o) {
      if (o.currentTarget !== this.resizeHandle)
        throw new Error("ResizeableMixin: releaseResizeHandle: event.currentTarget !== this.resizeHandle");
      this.resizeableService.send({ type: "RELEASE_RESIZE_HANDLE" });
    }
    startResizing() {
      this.resizeableService.send({ type: "START_RESIZING" });
    }
    moveResizeHandle(o) {
      let s = this.resizeHandleX + o.dx, p = this.resizeHandleY + o.dy;
      this.moveResizeHandleTo(s, p);
    }
    moveResizeHandleTo(o, s) {
      this.resizeHandleX = o, this.resizeHandleY = s, this.resizeHandle.style.transform = `translate(${o}px, ${s}px)`;
    }
    endResizing() {
      this.resizeableService.send({ type: "END_RESIZING" });
    }
  }
  __name(r, "r");
  return u(r, "ResizeableMixinClass"), M([D], r.prototype, "span", 2), M([D], r.prototype, "resizeHandleX", 2), M([D], r.prototype, "resizeHandleY", 2), M([D], r.prototype, "debugResizeable", 2), M([D], r.prototype, "resizing", 2), M([Oe], r.prototype, "resizeHandle", 2), r;
}
__name(al, "al");
u(al, "ResizeableMixin");
var Th = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var Sr = /* @__PURE__ */ __name(class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return iu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Th)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${iu}"`;
  }
}, "Sr");
u(Sr, "AntiControlGateElement"), Sr = M([X], Sr);
function Ch(t) {
  return /^-?\d+$/.test(t);
}
__name(Ch, "Ch");
u(Ch, "isNumeric");
function Ct(t, r = 4) {
  return (t >= 0 ? "+" : "") + t.toFixed(r);
}
__name(Ct, "Ct");
u(Ct, "forceSigned");
var ot = /* @__PURE__ */ __name(class extends ge(ve(me(he(pe(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return ou;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (H.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this.popup;
    e && e.destroy();
    let n = this.blochInspectorPopupContent();
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(o) {
      o.setContent(n);
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
            <span class="font-mono font-bold">${Ct(this.d)}</span>, ϕ:
            <span class="font-mono font-bold">${Ct(this.phi, 2)}</span>, θ:
            <span class="font-mono font-bold">${Ct(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="font-mono font-bold">${Ct(this.x)}</span>, y:
            <span class="font-mono font-bold">${Ct(this.y)}</span>, z:
            <span class="font-mono font-bold">${Ct(this.z)}</span>
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
  attributeChangedCallback(e, n, o) {
    this.body && n !== o && o !== null && (e === "data-x" && (this.x = parseFloat(o)), e === "data-y" && (this.y = parseFloat(o)), e === "data-z" && (this.z = parseFloat(o)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = u((o) => U`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${o}deg)"></div>`, "vectorLineRect"), n = u((o, s) => U`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${s}(${o}deg)"
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
    return `"${ou}"`;
  }
  updateBlochVector() {
    var n;
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`), (n = this.popup) == null || n.setContent(this.blochInspectorPopupContent());
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
    return 180 * Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x))) / Math.PI;
  }
}, "ot");
u(ot, "BlochDisplayElement"), M([Oe], ot.prototype, "body", 2), M([Oe], ot.prototype, "vectorLine", 2), M([Oe], ot.prototype, "vectorEnd", 2), M([Oe], ot.prototype, "vector", 2), M([dt], ot.prototype, "vectorEndCircles", 2), M([D], ot.prototype, "x", 2), M([D], ot.prototype, "y", 2), M([D], ot.prototype, "z", 2), ot = M([X], ot);
var Oh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Bt = /* @__PURE__ */ __name(class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return au;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Oh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${au}"`;
  }
}, "Bt");
u(Bt, "ControlGateElement"), Bt = M([X], Bt);
var Mh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Wt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Mh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ps}<${this.if}"` : `"${ps}"`;
  }
}, "Wt");
u(Wt, "HGateElement"), Wt = M([X], Wt);
var Ih = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = /* @__PURE__ */ __name(class extends ge(ve(If(me(be(he(pe(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ds;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml(Ih)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ds}"` : `"${ds}>${this.flag}"`;
  }
}, "Vt");
u(Vt, "MeasurementGateElement"), M([D], Vt.prototype, "value", 2), Vt = M([X], Vt);
var Ah = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(_n(me(Me(be(he(pe(HTMLElement)))))))))) {
  get operationType() {
    return fs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Ah)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${fs}"` : `"${fs}(${this.angle.replace("/", "_")})"`;
  }
}, "Yt");
u(Yt, "PhaseGateElement"), Yt = M([X], Yt);
var sl = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var Ph = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var Tr = /* @__PURE__ */ __name(class extends ge(ve(al(me(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return su;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml(Ph)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(sl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${su}${this.span}"`;
  }
}, "Tr");
u(Tr, "QftDaggerGateElement"), Tr = M([X], Tr);
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
var Cr = /* @__PURE__ */ __name(class extends ge(ve(al(me(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return lu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(U`<div part="layout">
          <div part="body">${this.iconHtml(_h)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(sl)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${lu}${this.span}"`;
  }
}, "Cr");
u(Cr, "QftGateElement"), Cr = M([X], Cr);
var zh = `<svg
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
var Xt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return hs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(zh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${hs}<${this.if}"` : `"${hs}"`;
  }
}, "Xt");
u(Xt, "RnotGateElement"), Xt = M([X], Xt);
var Rh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(_n(me(Me(be(he(pe(HTMLElement)))))))))) {
  get operationType() {
    return ms;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Rh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ms}"` : `"${ms}(${this.angle.replace("/", "_")})"`;
  }
}, "Zt");
u(Zt, "RxGateElement"), Zt = M([X], Zt);
var Dh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(_n(me(Me(be(he(pe(HTMLElement)))))))))) {
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
}, "Kt");
u(Kt, "RyGateElement"), Kt = M([X], Kt);
var kh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(_n(me(Me(be(he(pe(HTMLElement)))))))))) {
  get operationType() {
    return gs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(kh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${gs}"` : `"${gs}(${this.angle.replace("/", "_")})"`;
  }
}, "Qt");
u(Qt, "RzGateElement"), Qt = M([X], Qt);
var Nh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return bs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Nh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${bs}<${this.if}"` : `"${bs}"`;
  }
}, "cr");
u(cr, "SDaggerGateElement"), cr = M([X], cr);
var Gh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return ys;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Gh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ys}<${this.if}"` : `"${ys}"`;
  }
}, "pr");
u(pr, "SGateElement"), pr = M([X], pr);
var Lh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var Or = /* @__PURE__ */ __name(class extends ge(ve(me(Me(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return uu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Lh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${uu}"`;
  }
}, "Or");
u(Or, "SpacerGateElement"), Or = M([X], Or);
var jh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Jt = /* @__PURE__ */ __name(class extends ge(ve(Le(me(Me(be(he(pe(HTMLElement)))))))) {
  get operationType() {
    return cu;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(jh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${cu}"`;
  }
}, "Jt");
u(Jt, "SwapGateElement"), Jt = M([X], Jt);
var Bh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var dr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return ws;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Bh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ws}<${this.if}"` : `"${ws}"`;
  }
}, "dr");
u(dr, "TDaggerGateElement"), dr = M([X], dr);
var Hh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return xs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Hh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${xs}<${this.if}"` : `"${xs}"`;
  }
}, "er");
u(er, "TGateElement"), er = M([X], er);
var $h = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ht = /* @__PURE__ */ __name(class extends ge(ve(me(be(he(pe(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Rd;
      case "1":
        return Dd;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">
          ${this.iconHtml($h)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Ht");
u(Ht, "WriteGateElement"), M([D], Ht.prototype, "value", 2), Ht = M([X], Ht);
var qh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return Es;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(qh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Es}<${this.if}"` : `"${Es}"`;
  }
}, "tr");
u(tr, "XGateElement"), tr = M([X], tr);
var Fh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return Ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Fh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ss}<${this.if}"` : `"${Ss}"`;
  }
}, "rr");
u(rr, "YGateElement"), rr = M([X], rr);
var Uh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Me(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return Ts;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(U`<div part="body">${this.iconHtml(Uh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${Ts}<${this.if}"` : `"${Ts}"`;
  }
}, "nr");
u(nr, "ZGateElement"), nr = M([X], nr);
var Xe = u((t) => t instanceof Sr || t instanceof ot || t instanceof Bt || t instanceof Wt || t instanceof Vt || t instanceof Yt || t instanceof Tr || t instanceof Cr || t instanceof Xt || t instanceof Zt || t instanceof Kt || t instanceof Qt || t instanceof cr || t instanceof pr || t instanceof Or || t instanceof Jt || t instanceof dr || t instanceof er || t instanceof Ht || t instanceof tr || t instanceof rr || t instanceof nr, "isOperation");
var Wh = u((t) => t != null && t instanceof Wt, "isHGateElement");
var Vh = u((t) => t != null && t instanceof tr, "isXGateElement");
var Yh = u((t) => t != null && t instanceof rr, "isYGateElement");
var Xh = u((t) => t != null && t instanceof nr, "isZGateElement");
var sa = u((t) => t != null && t instanceof Yt, "isPhaseGateElement");
var Zh = u((t) => t != null && t instanceof er, "isTGateElement");
var Zz = u((t) => t != null && t instanceof dr, "isTDaggerGateElement");
var Kh = u((t) => t != null && t instanceof Xt, "isRnotGateElement");
var ll = u((t) => t != null && t instanceof Zt, "isRxGateElement");
var ul = u((t) => t != null && t instanceof Kt, "isRyGateElement");
var cl = u((t) => t != null && t instanceof Qt, "isRzGateElement");
var Kz = u((t) => t != null && t instanceof pr, "isSGateElement");
var Qz = u((t) => t != null && t instanceof cr, "isSDaggerGateElement");
var Jz = u((t) => t != null && t instanceof Or, "isSpacerGateElement");
var Qh = u((t) => t != null && t instanceof Jt, "isSwapGateElement");
var fc = u((t) => t != null && t instanceof Bt, "isControlGateElement");
var hc = u((t) => t != null && t instanceof Sr, "isAntiControlGateElement");
var Jh = u((t) => t != null && t instanceof ot, "isBlochDisplayElement");
var eR = u((t) => t != null && t instanceof Ht, "isWriteGateElement");
var em = u((t) => t != null && t instanceof Vt, "isMeasurementGateElement");
var tm = Lt(rn(), 1);
var la = Lt(Vo(), 1);
var mc = u((t) => t !== null && t instanceof Rr, "isAngleSliderElement");
var Rr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = ft({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new _t("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, n) => {
      n.type === "SET_ANGLE" && (this.denominator = _o(this.angle));
    }, setAngleInRadian: (e, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, o] = this.findSnapAngle(this.radian);
      this.angle = o;
    }, setRadianInAngle: (e, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [o] = this.findSnapAngle(Cd(this.angle));
      this.radian = o;
    }, updateSnapAngles: () => {
      this.updateSnapAngles();
    }, updateHandlePosition: () => {
      this.left = (this.radian + 2 * Math.PI) / (4 * Math.PI);
    }, dispatchChangeEvent: () => {
      this.dispatchEvent(new Event("angle-slider-change", { bubbles: true }));
    }, dispatchUpdateEvent: () => {
      this.dispatchEvent(new Event("angle-slider-update", { bubbles: true }));
    } } });
    this.angleSliderService = lt(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${(0, tm.format)(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, n, o) {
    n !== o && o !== null && (e === "data-angle" && o !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, la.default)(this).unset();
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
    (0, la.default)(this).draggable({ origin: "self", modifiers: [la.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let n = la.default.getElementRect(e.target).width, o = e.pageX / n;
    this.left = o;
    let s = this.proportionToRadian(o);
    this.setAttribute("data-radian", s.toString());
    let [, p] = this.findSnapAngle(s);
    this.angle !== p && (this.angle = p);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, n = 2 * this.denominator, o = new Array(n - e + 1).fill(null).map((s, p) => p + e);
    this.snapAngles = {};
    for (let s of o)
      this.denominator === 1 ? s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI] = "\u03C0" : s === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[s * Math.PI] = `${s}\u03C0` : s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : s === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[s * Math.PI / this.denominator] = `${s}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let n = null, o = null, s = null;
    for (let p in this.snapAngles) {
      let v = Math.abs(parseFloat(p) - e);
      (n === null || v < n) && (n = v, o = parseFloat(p), s = this.snapAngles[p]);
    }
    return H.notNull(o), H.notNull(s), [o, s];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Rr");
u(Rr, "AngleSliderElement"), M([D], Rr.prototype, "angle", 2), M([D], Rr.prototype, "radian", 2), M([D], Rr.prototype, "denominator", 2), M([D], Rr.prototype, "disabled", 2), M([D], Rr.prototype, "debug", 2), Rr = M([X], Rr);
var to = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let n = e.currentTarget;
    H.notNull(n);
    for (let o of this.buttons)
      o.removeAttribute("data-active");
    n.setAttribute("data-active", "");
  }
}, "to");
u(to, "ButtonGroupElement"), M([dt], to.prototype, "buttons", 2), to = M([X], to);
var ro = Lt(nm(), 1);
var ct = /* @__PURE__ */ __name(class extends HTMLElement {
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
  attributeChangedCallback(e, n, o) {
    n !== o && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (H.notNull(o), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new _t("unsupported qubit count", this.qubitCount);
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
          throw new _t("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let n = e.getAttribute("data-ket");
      return H.notNull(n), parseInt(n);
    }), H.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    ro.default.mutate(() => {
      for (let n of this.qubitCircles) {
        let o = n.getAttribute("data-ket");
        H.notNull(o);
        let s = parseInt(o), p = e[s];
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
        throw new _t("unsupported qubit count", this.qubitCount);
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
        throw new _t("unsupported qubit count", this.qubitCount);
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
        throw new _t("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    H.notNull(this.window), H.notNull(this.innerContainer), this.qubitCount !== 0 && ro.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let e = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let o = this.lastRowStartIndex; o <= this.lastRowEndIndex; o++)
        for (let s = this.lastColStartIndex; s <= this.lastColEndIndex; s++)
          e.push({ col: s, row: o });
      let n = document.createDocumentFragment();
      for (let o of this.allQubitCircleElements(e))
        n.appendChild(o);
      this.innerContainer.textContent = "", this.innerContainer.appendChild(n), this.updateVisibleQubitCircleKets();
    });
  }
  update() {
    this.drawNewlyVisibleQubitCircles(), this.removeInvisibleQubitCircles();
  }
  drawNewlyVisibleQubitCircles() {
    this.window !== void 0 && this.innerContainer !== void 0 && (ro.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, n = this.overscanColEndIndex, o = this.overscanRowStartIndex, s = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === n && this.lastRowStartIndex === o && this.lastRowEndIndex === s)) {
        for (let p = o; p <= s; p++)
          for (let v = e; v <= n; v++)
            (v < this.lastColStartIndex || this.lastColEndIndex < v || p < this.lastRowStartIndex || this.lastRowEndIndex < p) && this.qubitCirclePositions.push({ col: v, row: p });
        this.lastColStartIndex = e, this.lastColEndIndex = n, this.lastRowStartIndex = o, this.lastRowEndIndex = s;
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
        let n = e.getAttribute("data-col"), o = e.getAttribute("data-row");
        H.notNull(n), H.notNull(o);
        let s = parseInt(n), p = parseInt(o);
        if (s < this.lastColStartIndex || this.lastColEndIndex < s || p < this.lastRowStartIndex || this.lastRowEndIndex < p) {
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
    let n = e.col + e.row * this.colCount, o = this.qubitCircleSizePx * e.row + e.row * this.gap + this.paddingY, s = this.qubitCircleSizePx * e.col + e.col * this.gap + this.paddingX, p = document.createElement("div");
    p.className = "qubit-circle magnitude-0", p.setAttribute("data-col", e.col.toString()), p.setAttribute("data-row", e.row.toString()), p.setAttribute("data-ket", n.toString()), p.setAttribute("data-targets", "circle-notation.qubitCircles"), p.setAttribute("data-amplitude-real", "0"), p.setAttribute("data-amplitude-imag", "0"), p.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), p.style.setProperty("top", `${o}px`), p.style.setProperty("left", `${s}px`);
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
        throw new _t("unsupported qubit count", this.qubitCount);
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
    H.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let o = zt(n, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let s = n.getAttribute("data-ket");
    H.notNull(s);
    let p = n.getAttribute("data-amplitude-real");
    H.notNull(p);
    let v = n.getAttribute("data-amplitude-imag");
    H.notNull(v);
    let m = parseInt(s), d = parseFloat(p), f = parseFloat(v), g = new In(d, f), w = g.abs(), S = g.phase() / Math.PI * 180, T = document.importNode(this.qubitCirclePopupTemplate.content, true), C = T.getElementById("qubit-circle-popup--ket-binary-value"), z = T.getElementById("qubit-circle-popup--ket-decimal-value"), N = T.getElementById("qubit-circle-popup--amplitude"), G = T.getElementById("qubit-circle-popup--amplitude-real-value"), $ = T.getElementById("qubit-circle-popup--amplitude-imag-value"), A = T.getElementById("qubit-circle-popup--probability"), ee = T.getElementById("qubit-circle-popup--probability-value"), _ = T.getElementById("qubit-circle-popup--phase"), B = T.getElementById("qubit-circle-popup--phase-value");
    H.notNull(N), H.notNull(G), H.notNull($), H.notNull(A), H.notNull(ee), H.notNull(_), H.notNull(B), C && (C.textContent = m.toString(2).padStart(this.qubitCount, "0")), z && (z.textContent = m.toString()), this.showQubitCirclePopupAmplitude ? (G.textContent = Ct(g.real, 5), $.textContent = `${Ct(g.imag, 5)}i`) : N.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Ct(w * w * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? B.textContent = `${Ct(S, 2)}\xB0` : _.style.display = "none";
    let te = document.createElement("div");
    te.appendChild(T), o.setContent(te.innerHTML), o.show();
  }
  hideQubitCirclePopup(e) {
    let n = e.target;
    H.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let o = n._tippy;
    H.notNull(o), o.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "ct");
u(ct, "CircleNotationElement"), M([D], ct.prototype, "qubitCount", 2), M([D], ct.prototype, "qubitCircleSize", 2), M([D], ct.prototype, "colCount", 2), M([D], ct.prototype, "rowCount", 2), M([D], ct.prototype, "paddingX", 2), M([D], ct.prototype, "paddingY", 2), M([D], ct.prototype, "overscanCount", 2), M([D], ct.prototype, "colorPhase", 2), M([D], ct.prototype, "qubitCirclePopupTemplateId", 2), M([D], ct.prototype, "showQubitCirclePopupAmplitude", 2), M([D], ct.prototype, "showQubitCirclePopupProbability", 2), M([D], ct.prototype, "showQubitCirclePopupPhase", 2), M([Oe], ct.prototype, "window", 2), M([Oe], ct.prototype, "innerContainer", 2), M([dt], ct.prototype, "qubitCircles", 2), ct = M([X], ct);
var no = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "no");
u(no, "CircleNotationPanelElement"), M([Oe], no.prototype, "circleNotation", 2), no = M([X], no);
var im = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var om = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var qr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    window.addEventListener("load", this.startAnimation.bind(this)), this.startBreakpointChangeEventListener(this.startAnimation.bind(this)), this.attachShadow({ mode: "open" }), this.update();
  }
  attributeChangedCallback(e, n, o) {
    n !== o && o !== null && e === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
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
            ${this.iconHtml(im)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(om)}
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
    H.need(this.currentGateSetIndex >= 0, "data-current-gate-set-index must be >= 0"), H.need(this.currentGateSetIndex < this.gateSets.length, `data-current-gate-set-index must be < ${this.gateSets.length}`);
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
    return H.notNull(e), e;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((e) => {
      let n = e.children.item(0);
      return H.need(Xe(n), `${n} must be an operation.`), n;
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
      H.need(e < 4, "#popinGates must be < 4");
      let o = 0;
      e === 0 ? o = 500 : e === 1 ? o = 600 : e === 2 ? o = 700 : e === 3 && (o = 800);
      let s = n.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: o, fill: "forwards", easing: "ease-out" });
      s.onfinish = () => {
        n === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [e, n] of this.dots.entries())
      e === this.currentGateSetIndex ? n.classList.add("dot--active") : n.classList.remove("dot--active");
  }
}, "qr");
u(qr, "GateCarouselElement"), M([D], qr.prototype, "currentGateSetIndex", 2), M([Oe], qr.prototype, "contentClipper", 2), M([dt], qr.prototype, "gateSets", 2), M([dt], qr.prototype, "dots", 2), M([dt], qr.prototype, "popinAnimationGates", 2), qr = M([X], qr);
var ua = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return H.notNull(e), e;
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
    H.notNull(e);
    let n = e.content.cloneNode(true), o = document.createDocumentFragment();
    return Y(U`${n}`, o), o;
  }
}, "ua");
u(ua, "InspectorButtonElement"), ua = M([X], ua);
var Ot = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return Ad(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), pn(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), ri(e)) {
      let n = _o(e.angle);
      sa(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (ll(e) || ul(e) || cl(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
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
    if (!mc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let n = e.target;
    if (!mc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    if (Id(e)) {
      let n, o = _o(e);
      this.denominatorInput.value = o.toString(), this.denominatorLabel.textContent = o.toString(), this.backupCurrentDenominator(), Od(e, "-2\u03C0") ? (n = `-${o * 2}\u03C0/${o}`, this.angleInput.value = n) : Md(e, "2\u03C0") ? (n = `${o * 2}\u03C0/${o}`, this.angleInput.value = n) : n = e, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    Ch(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Ot");
u(Ot, "OperationInspectorElement"), M([Oe], Ot.prototype, "ifInput", 2), M([Oe], Ot.prototype, "angleInputLabel", 2), M([Oe], Ot.prototype, "angleInput", 2), M([Oe], Ot.prototype, "angleSlider", 2), M([Oe], Ot.prototype, "denominatorInput", 2), M([Oe], Ot.prototype, "denominatorVariableLabel", 2), M([Oe], Ot.prototype, "denominatorLabel", 2), M([Oe], Ot.prototype, "reduceAngleFractionCheckbox", 2), M([Oe], Ot.prototype, "flagInput", 2), M([D], Ot.prototype, "conditionalGatePaneDisabled", 2), M([D], Ot.prototype, "anglePaneDisabled", 2), M([D], Ot.prototype, "conditionalFlagPaneDisabled", 2), Ot = M([X], Ot);
var pl = Lt(sm(), 1);
var $t = /* @__PURE__ */ __name(class extends HTMLElement {
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
    let n = document.importNode(this.popupTemplate.content, true), o = new pl.default(this.amplitude), s = n.getElementById("qubit-circle-popup--header"), p = n.getElementById("qubit-circle-popup--ket-binary-value"), v = n.getElementById("qubit-circle-popup--ket-decimal-value"), m = n.getElementById("qubit-circle-popup--amplitude"), d = n.getElementById("qubit-circle-popup--amplitude-real-value"), f = n.getElementById("qubit-circle-popup--amplitude-imag-value"), g = n.getElementById("qubit-circle-popup--probability"), w = n.getElementById("qubit-circle-popup--probability-value"), S = n.getElementById("qubit-circle-popup--phase"), T = n.getElementById("qubit-circle-popup--phase-value");
    H.notNull(s), H.notNull(p), H.notNull(v), H.notNull(m), H.notNull(d), H.notNull(f), H.notNull(g), H.notNull(w), H.notNull(S), H.notNull(T), this.showPopupHeader ? (p.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), v.textContent = this.ket.toString()) : s.style.display = "none", this.showPopupAmplitude ? (d.textContent = Ct(o.re, 5), f.textContent = `${Ct(o.im, 5)}i`) : m.style.display = "none", this.showPopupProbability ? w.textContent = `${Ct(this.magnitude * this.magnitude * 100, 4)}%` : g.style.display = "none", this.showPopupPhase ? T.textContent = `${Ct(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(n), e.setContent(C.innerHTML), e.show();
  }
  get magnitude() {
    return new pl.default(this.amplitude).abs();
  }
  get phase() {
    return new pl.default(this.amplitude).arg();
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
}, "$t");
u($t, "QubitCircleElement"), M([D], $t.prototype, "ket", 2), M([D], $t.prototype, "qubitCount", 2), M([D], $t.prototype, "amplitude", 2), M([D], $t.prototype, "hidePhase", 2), M([D], $t.prototype, "popupTemplateId", 2), M([D], $t.prototype, "showPopupHeader", 2), M([D], $t.prototype, "showPopupAmplitude", 2), M([D], $t.prototype, "showPopupProbability", 2), M([D], $t.prototype, "showPopupPhase", 2), M([D], $t.prototype, "darkMode", 2), $t = M([X], $t);
var cm = Lt(rn(), 1);
var lm = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var um = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var dn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = ft({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, n) => {
      if (n.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let o = document.createElement("span");
      o.id = "ripple";
      let s = Math.max(this.clientWidth, this.clientHeight), p = s / 2, v = this.getBoundingClientRect(), m = v.left + window.pageXOffset, d = v.top + window.pageYOffset;
      o.setAttribute("part", "ripple"), o.setAttribute("data-target", "run-circuit-button.ripple"), o.style.width = o.style.height = `${s}px`, o.style.left = `${n.clientX - (m + p)}px`, o.style.top = `${n.clientY - (d + p)}px`, this.body.appendChild(o);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = lt(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${(0, cm.format)(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, n, o) {
    n !== o && e === "data-running" && o !== null && this.runCircuitButtonService.send({ type: "FINISH" });
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
    return U([lm]);
  }
  get tailSpinIcon() {
    return U([um]);
  }
}, "dn");
u(dn, "RunCircuitButtonElement"), M([D], dn.prototype, "running", 2), M([D], dn.prototype, "debug", 2), M([Oe], dn.prototype, "body", 2), M([Oe], dn.prototype, "ripple", 2), dn = M([X], dn);
var Fr = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "Fr");
u(Fr, "SlideInElement"), M([D], Fr.prototype, "direction", 2), M([D], Fr.prototype, "directionDesktop", 2), M([D], Fr.prototype, "duration", 2), M([D], Fr.prototype, "marginTop", 2), M([D], Fr.prototype, "marginBottom", 2), Fr = M([X], Fr);
var fn = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "fn");
u(fn, "CircuitBlockElement"), M([D], fn.prototype, "comment", 2), M([D], fn.prototype, "finalized", 2), fn = M([X], fn);
var pm = Lt(rn(), 1);
var Ur = u((t) => t != null && t instanceof vt, "isCircuitStepElement");
var Ce = u((t, r) => Array.from(t.reduce((e, n, o, s) => {
  let p = r(n, o, s), v = e.get(p);
  return v ? v.push(n) : e.set(p, [n]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var vt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = ft({ id: "circuit-step", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones"] }, DELETE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE"))
        return;
      let o = n.dropzone, s = this.bit(o);
      H.notNull(o.operation), o.operation.bit = s;
    }, updateResizeableSpanDropzones: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "UNSNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE" || n.type === "DELETE_OPERATION" || n.type === "RESIZE_OPERATION"))
        return;
      let o = 1;
      for (let s of this.dropzones) {
        let p = s.operation;
        if (ur(p)) {
          o = p.span;
          continue;
        }
        p === null && (o > 1 ? (s.occupied = true, o -= 1) : s.occupied = false);
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
    this.circuitStepService = lt(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${(0, pm.format)(e.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let e = 0;
    for (let [n, o] of Object.entries(this.dropzones)) {
      if (!o.occupied)
        continue;
      let s = parseInt(n, 10) + 1;
      if (s > e && (e = s), ur(o.operation)) {
        let p = s + o.operation.span - 1;
        p > e && (e = p);
      }
    }
    return H.need(0 <= e && e <= zo.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
  attributeChangedCallback(e, n, o) {
    if (n !== o && (e === "data-active" && (o !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (o !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let s of this.dropzones)
        o !== null ? s.shadow = true : s.shadow = false;
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let p of this.dropzones)
      p.connectTop = false, p.connectBottom = false;
    let n = this.controlGateDropzones, o = this.antiControlGateDropzones, s = this.controllableDropzones(e);
    for (let p of s)
      Ro(p.operation) && (p.operation.controls = [], p.operation.antiControls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), n.length === 1 && s.length === 0) {
      n[0].operation.disable();
      return;
    }
    if (o.length === 1 && s.length === 0) {
      o[0].operation.disable();
      return;
    }
    n.length === 0 && o.length === 0 || (s.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e));
  }
  updateSwapConnections(e) {
    let n = e == null ? void 0 : e.disableSwap, o = this.swapGateDropzones;
    if (o.length !== 2 || n)
      for (let s of o)
        s.operation.disable();
    else {
      for (let p of o)
        p.operation.enable(), p.connectTop = o.some((m) => this.bit(m) < this.bit(p)), p.connectBottom = o.some((m) => this.bit(m) > this.bit(p));
      let s = o.map((p) => this.bit(p));
      for (let p of this.freeDropzones) {
        let v = Math.min(...s), m = Math.max(...s);
        v < this.bit(p) && this.bit(p) < m && (p.connectTop = true, p.connectBottom = true);
      }
    }
  }
  updatePhasePhaseConnections(e) {
    if (e != null && e.disablePhasePhase)
      return;
    let n = this.phaseGateDropzones;
    for (let o of n) {
      let s = o.operation;
      if (s.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let p = n.filter((v) => {
        if (!sa(v.operation))
          throw new Error(`${v.operation} isn't a phase-gate element.`);
        return s.angle === v.operation.angle;
      }).map((v) => this.bit(v));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (p = p.slice(0, e.maxPhasePhaseTargetGates)), p.includes(this.bit(o)) && (o.connectTop = p.some((v) => v < this.bit(o)), o.connectBottom = p.some((v) => v > this.bit(o)));
    }
    for (let o of this.freeDropzones) {
      let p = this.phaseGateDropzones.filter((d) => d.connectTop || d.connectBottom).map((d) => this.bit(d)), v = Math.min(...p), m = Math.max(...p);
      v < this.bit(o) && this.bit(o) < m && (o.connectTop = true, o.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let n = this.controlGateDropzones, o = n.map((p) => this.bit(p)), s = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? o = [] : e.maxControlControlTargetGates > 1 && (o = o.slice(0, e.maxControlControlTargetGates)));
    for (let p of n) {
      s += 1;
      let v = p.operation;
      e != null && e.disableControlControl || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && s > e.maxControlControlTargetGates) ? v.disable() : (v.enable(), p.connectTop = o.some((m) => this.bit(p) > m), p.connectBottom = o.some((m) => this.bit(p) < m));
    }
  }
  updateControlledUConnections(e) {
    let n = this.controllableDropzones(e), o = this.controlGateDropzones, s = this.antiControlGateDropzones, p = [...new Set(n.map((T) => T.operationName))], v = this.numControlGateDropzones(e, p), m = o.map((T) => this.bit(T)), d = s.map((T) => this.bit(T)), f = m.concat(d), g = v === null ? f : f.slice(0, v), w = n.map((T) => this.bit(T)), S = g.concat(w);
    for (let [T, C] of Object.entries(o)) {
      let z = C.operation;
      C.connectBottom = S.some((N) => this.bit(C) < N), C.connectTop = S.some((N) => this.bit(C) > N), v === null || v !== null && parseInt(T) < v ? z.enable() : (C.connectTop = Math.max(...S) > this.bit(C), z.disable());
    }
    for (let [T, C] of Object.entries(s)) {
      let z = C.operation;
      C.connectBottom = S.some((N) => this.bit(C) < N), C.connectTop = S.some((N) => this.bit(C) > N), v === null || v !== null && parseInt(T) < v ? z.enable() : (C.connectTop = Math.max(...S) > this.bit(C), z.disable());
    }
    for (let T of n) {
      if (!Ro(T.operation))
        throw new Error(`${T.operation} isn't controllable.`);
      T.operation.controls = this.controlBits(T, m, e), T.operation.antiControls = d, T.connectTop = S.some((C) => C < this.bit(T)), T.connectBottom = S.some((C) => C > this.bit(T));
    }
  }
  updateFreeDropzoneConnections(e) {
    let n = this.controllableDropzones(e), o = this.controlGateDropzones.filter((f) => fc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), s = this.antiControlGateDropzones.filter((f) => hc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), p = n.map((f) => this.bit(f)), v = o.concat(s).concat(p), m = Math.min(...v), d = Math.max(...v);
    for (let f of this.freeDropzones)
      m < this.bit(f) && this.bit(f) < d && (f.connectTop = true, f.connectBottom = true);
  }
  controlBits(e, n, o) {
    let s = n;
    return o && (o.maxChControlGates > 0 && e.operationName === "h-gate" ? s = n.slice(0, o.maxChControlGates) : o.maxCnotControlGates > 0 && e.operationName === "x-gate" ? s = n.slice(0, o.maxCnotControlGates) : o.maxCyControlGates > 0 && e.operationName === "y-gate" ? s = n.slice(0, o.maxCyControlGates) : o.maxCzControlGates > 0 && e.operationName === "z-gate" ? s = n.slice(0, o.maxCzControlGates) : o.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? s = n.slice(0, o.maxCphaseControlGates) : o.maxCtControlGates > 0 && e.operationName === "t-gate" ? s = n.slice(0, o.maxCtControlGates) : o.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? s = n.slice(0, o.maxCrnotControlGates) : o.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? s = n.slice(0, o.maxCrxControlGates) : o.maxCryControlGates > 0 && e.operationName === "ry-gate" ? s = n.slice(0, o.maxCryControlGates) : o.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? s = n.slice(0, o.maxCrzControlGates) : o.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (s = n.slice(0, o.maxCswapControlGates))), s;
  }
  bit(e) {
    let n = this.dropzones.indexOf(e);
    return H.need(n !== -1, "circuit-dropzone not found."), n;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => e.operation === null);
  }
  dropzoneAt(e) {
    let n = this.dropzones[e];
    return H.notNull(n), n;
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
    return this.occupiedDropzones.filter((e) => fc(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => hc(e.operation));
  }
  numControlGateDropzones(e, n) {
    if (e === void 0)
      return null;
    let o = 0;
    return n.includes("h-gate") && !e.disableCh && e.maxChControlGates > o && (o = e.maxChControlGates), n.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > o && (o = e.maxCnotControlGates), n.includes("y-gate") && !e.disableCy && e.maxCyControlGates > o && (o = e.maxCyControlGates), n.includes("z-gate") && !e.disableCz && e.maxCzControlGates > o && (o = e.maxCzControlGates), n.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > o && (o = e.maxCphaseControlGates), n.includes("t-gate") && !e.disableCt && e.maxCtControlGates > o && (o = e.maxCtControlGates), n.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > o && (o = e.maxCrnotControlGates), n.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > o && (o = e.maxCrxControlGates), n.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > o && (o = e.maxCryControlGates), n.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > o && (o = e.maxCrzControlGates), n.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > o && (o = e.maxCswapControlGates), o === 0 ? null : o;
  }
  controllableDropzones(e) {
    let n = 0, o = 0, s = 0, p = 0, v = 0, m = 0, d = 0, f = 0, g = 0, w = 0;
    return this.occupiedDropzones.filter((S) => Ro(S.operation)).filter((S) => e === void 0 ? true : Wh(S.operation) ? (n += 1, e.maxChTargetGates !== 0 && n > e.maxChTargetGates ? false : !e.disableCh) : Vh(S.operation) ? (o += 1, e.maxCnotTargetGates !== 0 && o > e.maxCnotTargetGates ? false : !e.disableCnot) : Yh(S.operation) ? (s += 1, e.maxCyTargetGates !== 0 && s > e.maxCyTargetGates ? false : !e.disableCy) : Xh(S.operation) ? (p += 1, e.maxCzTargetGates !== 0 && p > e.maxCzTargetGates ? false : !e.disableCz) : sa(S.operation) ? (v += 1, e.maxCphaseTargetGates !== 0 && v > e.maxCphaseTargetGates ? false : !e.disableCphase) : Zh(S.operation) ? (m += 1, e.maxCtTargetGates !== 0 && m > e.maxCtTargetGates ? false : !e.disableCt) : Kh(S.operation) ? (d += 1, e.maxCrnotTargetGates !== 0 && d > e.maxCrnotTargetGates ? false : !e.disableCrnot) : ll(S.operation) ? (f += 1, e.maxCrxTargetGates !== 0 && f > e.maxCrxTargetGates ? false : !e.disableCrx) : ul(S.operation) ? (g += 1, e.maxCryTargetGates !== 0 && g > e.maxCryTargetGates ? false : !e.disableCry) : cl(S.operation) ? (w += 1, e.maxCrzTargetGates !== 0 && w > e.maxCrzTargetGates ? false : !e.disableCrz) : Qh(S.operation) ? !e.disableCswap : true);
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
    for (let [n, o] of Ce(this.operations, (s) => s.constructor))
      switch (n) {
        case Wt: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case tr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case rr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case nr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Yt: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case pr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case cr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case er: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case dr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Xt: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.if))
            for (let [m, d] of Ce(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Zt: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Kt: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Qt: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.angle))
            for (let [m, d] of Ce(v, (f) => f.if))
              for (let [f, g] of Ce(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Or: {
          let s = o, p = s[0].operationType, v = s.map((d) => d.bit), m = { type: p, targets: v };
          e.push(m);
          break;
        }
        case Cr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), g = { type: d, span: p, targets: f };
            e.push(g);
          }
          break;
        }
        case Tr: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), g = { type: d, span: p, targets: f };
            e.push(g);
          }
          break;
        }
        case Jt: {
          let s = o.filter((d) => !d.disabled);
          if (s.length !== 2)
            break;
          let p = s[0].operationType, v = s[0].controls, m = { type: p, targets: [s[0].bit, s[1].bit] };
          v !== void 0 && v.length > 0 && (m.controls = v), e.push(m);
          break;
        }
        case Bt: {
          let s = o.filter((v) => !v.disabled);
          if (s.length < 2 || this.operations.some((v) => Ro(v) && v.controls.length > 0))
            break;
          let p = s.map((v) => v.bit);
          e.push({ type: s[0].operationType, targets: p });
          break;
        }
        case Sr:
          break;
        case ot: {
          let s = o, p = o.map((v) => v.bit);
          e.push({ type: s[0].operationType, targets: p });
          break;
        }
        case Ht: {
          let s = o;
          for (let [, p] of Ce(s, (v) => v.value)) {
            let v = p.map((m) => m.bit);
            e.push({ type: p[0].operationType, targets: v });
          }
          break;
        }
        case Vt: {
          let s = o;
          for (let [p, v] of Ce(s, (m) => m.flag)) {
            let m = v.map((g) => g.bit), f = { type: v[0].operationType, targets: m };
            p !== "" && (f.flag = p), e.push(f);
          }
          break;
        }
        default:
          throw new _t("Unrecognized operation", { klass: n });
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
}, "vt");
u(vt, "CircuitStepElement"), M([D], vt.prototype, "active", 2), M([D], vt.prototype, "breakpoint", 2), M([D], vt.prototype, "shadow", 2), M([D], vt.prototype, "keep", 2), M([D], vt.prototype, "debug", 2), M([dt], vt.prototype, "dropzones", 2), M([dt], vt.prototype, "freeDropzones", 2), M([dt], vt.prototype, "occupiedDropzones", 2), vt = M([X], vt);
var fm = Lt(Vo(), 1);
var dm = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var pa = u((t) => t != null && t instanceof de, "isCircuitDropzoneElement");
var ca;
var de = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    Va(this, ca, null);
    this.occupied = false;
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.targets = "circuit-step.dropzones circuit-step.freeDropzones";
    this.debug = false;
    this.circuitDropzoneMachine = ft({ id: "circuit-dropzone", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
      H.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      H.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, fe("circuit-dropzone:qpu-operation-snap", {}, this);
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
    this.circuitDropzoneService = lt(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = Ya(this, ca, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Wa(this, ca)) == null || e.abort();
  }
  attributeChangedCallback(e, n, o) {
    n !== o && e === "data-occupied" && (o !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
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
    return H.notNull(e), Ur(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, fm.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!ur(n))
      throw new Error(`${n} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([dm]);
  }
}, "de");
u(de, "CircuitDropzoneElement"), ca = /* @__PURE__ */ new WeakMap(), M([D], de.prototype, "occupied", 2), M([D], de.prototype, "operationName", 2), M([D], de.prototype, "inputWireQuantum", 2), M([D], de.prototype, "outputWireQuantum", 2), M([D], de.prototype, "connectTop", 2), M([D], de.prototype, "connectBottom", 2), M([D], de.prototype, "shadow", 2), M([D], de.prototype, "targets", 2), M([D], de.prototype, "debug", 2), de = M([X], de);
var hm = Lt(rn(), 1);
var Gn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ft({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let o = n.operation;
      il(o) && o.menu && o.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, n) => {
      n.type !== "GRAB_OPERATION" && n.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(n.operation);
    }, snapOperationIntoDropzone: (e, n) => {
      if (n.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let o = n.operation, s = this.circuit.snapTargetAt(n.x, n.y);
      if (o.snapped = true, s.dropzone === null) {
        let p = s.stepIndex;
        H.notNull(p);
        let v = this.circuit.addShadowStepAfter(p), m = v.dropzones[s.wireIndex];
        H.notNull(m), m.append(o), m.operationName = o.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(v.dropzones);
      } else
        s.dropzone.append(o);
    }, snapResizeHandleIntoDropzone: (e, n) => {
      if (n.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let o = n.operation;
      if (!ur(o))
        throw new Error(`${o} is not resizeable`);
      let s = o.dropzone;
      if (!pa(s))
        throw new Error(`${s} is not a circuit dropzone`);
      H.notNull(s.circuitStep);
      let p = s.circuitStep.dropzones.indexOf(s), m = this.circuit.resizeHandleSnapTargetAt(n.x, n.y).wireIndex - p + 1;
      if (!_d(m))
        throw new Error(`Invalid span: ${m}`);
      o.span = m;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < zo.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      let o = n.operation;
      il(o) && o.initMenu();
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
      let o = n.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(o);
    } } });
    this.circuitEditorService = lt(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${(0, hm.format)(e.value)}`);
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
    if (Hs(n))
      n.draggable = true;
    else
      throw new _t("Not a draggable element.", { el: n });
  }
  enableResizing(e) {
    let n = e.target;
    if (ur(n))
      n.resizeable = true;
    else
      throw new _t("Not a resizeable element.", { el: n });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let o of this.circuit.operations)
        il(o) && o.initMenu();
    }
  }
  maybeDeactivateOperation(e) {
    var o;
    let n = e.target;
    !Xe(n) && this.inspectorButton && !((o = this.inspectorButton) != null && o.popup.popper.contains(n)) && !this.inspectorButton.popup.reference.contains(n) && this.activeOperation !== null && (this.activeOperation.active = false);
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
    if (!ri(n))
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
    let n = e.target, o = this.activeOperation;
    if (!pn(o))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: o, if: n.if });
  }
  setOperationAngle(e) {
    let n = e.target, o = this.activeOperation;
    if (H.notNull(o), !ri(o))
      throw new Error(`${o.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: o, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let n = e.target, o = this.activeOperation;
    if (!si(o))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: o, flag: n.flag });
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
    let s = e.detail.snapTargetInfo, p = s.x, v = s.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  resizeHandleInSnapRange(e) {
    let n = e.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    let s = e.detail.snapTargetInfo, p = s.x, v = s.y;
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
}, "Gn");
u(Gn, "CircuitEditorElement"), M([D], Gn.prototype, "debug", 2), M([Oe], Gn.prototype, "circuit", 2), M([Oe], Gn.prototype, "inspectorButton", 2), Gn = M([X], Gn);
var fa;
var da = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    Va(this, fa, null);
  }
  connectedCallback() {
    let { signal: e } = Ya(this, fa, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = Wa(this, fa)) == null || e.abort();
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
    Hs(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), ur(e) && (e.resizeable = true), lc(e) && e.initHelp();
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
    let o = n.cloneNode(false);
    this.assertOperation(o), lc(n) && n.disableHelp(), this.prepend(o), this.initOperation(o);
  }
  deleteOperation(e) {
    let n = e.target;
    this.assertOperation(n), this.removeChild(n);
  }
  assertOperation(e) {
    if (!Xe(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "da");
u(da, "PaletteDropzoneElement"), fa = /* @__PURE__ */ new WeakMap(), da = M([X], da);
var le = /* @__PURE__ */ __name(class extends pe(HTMLElement) {
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
    this.quantumCircuitMachine = ft({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = lt(this.quantumCircuitMachine).onTransition((e) => {
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
    return H.need(n !== -1, `circuit-step index of ${e} not found.`), n;
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
    for (let o of this.steps)
      o.wireCount > 0 && o.wireCount > n && (e = o, n = o.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let n = 0; n < e; n++)
      this.append(new vt());
  }
  stepAt(e) {
    let n = this.steps[e];
    return H.notNull(n), n;
  }
  addShadowStepAfter(e) {
    let n = new vt();
    n.shadow = true;
    for (let o = 0; o < this.wireCount; o++)
      n.appendDropzone();
    if (e === -1)
      this.prepend(n);
    else {
      let o = this.steps[e];
      H.notNull(o.parentElement), o.parentElement.insertBefore(n, o.nextSibling);
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
      let e = H.urlJson;
      this.loadFromJson(e);
    }
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step:update", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateChangedWire), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateChangedWire), this.addEventListener("circuit-step:delete-qpu-operation", this.updateStep), this.addEventListener("circuit-step:delete-qpu-operation", this.updateChangedWire), this.addEventListener("circuit-step:resize-qpu-operation", this.updateStep), fe("quantum-circuit:init", {}, this);
  }
  attributeChangedCallback(e, n, o) {
    n !== o && (e === "data-editing" && (o !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && o !== null && this.makeOperationsHoverable(), e === "data-json" && o !== "" && o !== null && (this.loadFromJson(o), this.hoverable && this.makeOperationsHoverable()));
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
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Wt();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  x(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new tr();
      return o && s.disable(), s;
    }, ...n), this;
  }
  y(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new rr();
      return o && s.disable(), s;
    }, ...n), this;
  }
  z(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new nr();
      return o && s.disable(), s;
    }, ...n), this;
  }
  phase(...e) {
    let n = "", o, s;
    if (typeof e[0] == "number")
      o = e;
    else if (typeof e[0] == "string")
      n = e[0], o = e.slice(1);
    else {
      let v = e[0];
      o = v.targets, s = v.disabled;
    }
    let p = this.applyOperationToTargets(() => {
      let v = new Yt();
      return v.angle = n, s && v.disable(), v;
    }, ...o);
    return o.length > 1 && this.updateStepOperationAttributes(p), this;
  }
  s(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new pr();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  sDagger(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new cr();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  t(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new er();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  tDagger(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new dr();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  rnot(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Xt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  rx(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Zt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  ry(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Kt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  rz(...e) {
    let n, o;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Qt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  qft(e, ...n) {
    let o;
    return typeof n[0] == "number" ? o = n : o = n[0].targets, this.applyOperationToTargets(() => {
      let s = new Cr();
      return s.span = e, s;
    }, ...o), this.resize(), this;
  }
  qftDagger(e, ...n) {
    let o;
    return typeof n[0] == "number" ? o = n : o = n[0].targets, this.applyOperationToTargets(() => {
      let s = new Tr();
      return s.span = e, s;
    }, ...o), this.resize(), this;
  }
  swap(...e) {
    let n = this.applyOperationToTargets(() => new Jt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  control(...e) {
    let n = this.applyOperationToTargets(() => new Bt(), ...e);
    return this.updateStepOperationAttributes(n), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new ot(), ...e), this;
  }
  write(e, ...n) {
    return this.applyOperationToTargets(() => {
      let o = new Ht();
      return o.value = e, o;
    }, ...n), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Vt(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...n) {
    let o = Math.max(...n) + 1, s = this.appendStepWithDropzones(o);
    for (let p of n) {
      let v = e();
      s.dropzoneAt(p).put(v);
    }
    return s;
  }
  ch(e, n) {
    return this.controlledU(Wt, e, n), this;
  }
  cnot(e, n) {
    return this.controlledU(tr, e, n), this.resize(), this;
  }
  cy(e, n) {
    return this.controlledU(rr, e, n), this;
  }
  cz(e, n) {
    return this.controlledU(nr, e, n), this;
  }
  cphase(e, n) {
    return this.controlledU(Yt, e, n), this;
  }
  ct(e, n) {
    return this.controlledU(er, e, n), this;
  }
  crnot(e, n) {
    return this.controlledU(Xt, e, n), this;
  }
  crx(e, n) {
    return this.controlledU(Zt, e, n), this;
  }
  cry(e, n) {
    return this.controlledU(Kt, e, n), this;
  }
  crz(e, n) {
    return this.controlledU(Qt, e, n), this;
  }
  cswap(e, n) {
    return this.controlledU(Jt, e, n), this;
  }
  cc(...e) {
    let n = Math.max(...e) + 1, o = this.appendStepWithDropzones(n);
    for (let s of e)
      o.dropzoneAt(s).put(new Bt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(o), this;
  }
  controlledU(e, n, o) {
    let s = [].concat(n), p = [].concat(o), v = s.concat(p), m = Math.max(...v) + 1, d = this.appendStepWithDropzones(m);
    for (let f of s)
      d.dropzoneAt(f).put(new Bt());
    for (let f of p)
      d.dropzoneAt(f).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(d);
  }
  appendStep() {
    let e = new vt(), n = this.blocks.slice(-1)[0] || null;
    return n === null || n.finalized ? this.append(e) : n.append(e), e;
  }
  appendStepWithDropzones(e) {
    let n = new vt();
    this.append(n);
    for (let o = 0; o < e; o++) {
      let s = new de();
      n.append(s);
    }
    return n;
  }
  updateAllWires() {
    let e = this.steps[0];
    if (e === void 0)
      return;
    let n = e.dropzones.length;
    for (let o = 0; o < n; o++)
      this.updateWire(o);
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
    let o = null, s = H.safeJsonParse(e);
    if (s.isOk())
      o = s.value;
    else {
      console.error(s.error.message), console.error(e);
      return;
    }
    this.circuitTitle = (o.title || "").trim();
    let p = false;
    for (let v of o.cols) {
      let m = this.appendStep();
      p && (m.keep = true, p = false);
      let d = [];
      for (let f of v) {
        switch (true) {
          case /^\|0>$/.test(f): {
            let g = new Ht();
            g.value = "0", d.push(g), m.append(new de());
            break;
          }
          case /^\|1>$/.test(f): {
            let g = new Ht();
            g.value = "1", d.push(g), m.append(new de());
            break;
          }
          case /^H/.test(f): {
            let g = new Wt();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case (/^X$/.test(f) || /^X<(.+)$/.test(f)): {
            let g = new tr();
            g.if = f.slice(2).trim(), d.push(g), m.append(new de());
            break;
          }
          case /^Y/.test(f): {
            let g = new rr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^Z/.test(f): {
            let g = new nr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^P/.test(f): {
            let g = new Yt();
            g.angle = this.angleParameter(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^T†/.test(f): {
            let g = new dr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^T/.test(f): {
            let g = new er();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^X\^½/.test(f): {
            let g = new Xt();
            g.if = this.ifVariable(f.slice(3)), d.push(g), m.append(new de());
            break;
          }
          case /^Rx/.test(f): {
            let g = new Zt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^Ry/.test(f): {
            let g = new Kt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^Rz/.test(f): {
            let g = new Qt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^…/.test(f): {
            let g = new Or();
            d.push(g), m.append(new de());
            break;
          }
          case /^QFT\d/.test(f): {
            let g = new Cr(), w = parseInt(f.slice(3), 10);
            g.span = w, d.push(g);
            for (let S = 0; S < w; S++)
              m.append(new de());
            break;
          }
          case /^QFT†\d/.test(f): {
            let g = new Tr(), w = parseInt(f.slice(4), 10);
            g.span = w, d.push(g), m.append(new de());
            for (let S = 0; S < w; S++)
              m.append(new de());
            break;
          }
          case /^Swap$/.test(f): {
            let g = new Jt();
            d.push(g), m.append(new de());
            break;
          }
          case /^S†/.test(f): {
            let g = new cr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^S/.test(f): {
            let g = new pr();
            g.if = this.ifVariable(f.slice(1)), d.push(g), m.append(new de());
            break;
          }
          case /^•$/.test(f): {
            let g = new Bt();
            d.push(g), m.append(new de());
            break;
          }
          case /^◦$/.test(f): {
            let g = new Sr();
            d.push(g), m.append(new de());
            break;
          }
          case /^Bloch$/.test(f): {
            let g = new ot();
            d.push(g), m.append(new de());
            break;
          }
          case /^Measure/.test(f): {
            let g = new Vt(), w = ((/^>(.+)$/.exec(f.slice(7)) || [])[1] || "").trim();
            g.flag = w, d.push(g), m.append(new de());
            break;
          }
          case /^[[{](.+)$/.test(f): {
            let g = f.slice(1);
            m.remove(), n = new fn(), n.comment = g, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
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
    for (let o of this.steps) {
      let s = n - o.wireCount;
      for (let p = 0; p < s; p++)
        o.appendDropzone();
    }
  }
  updateWire(e) {
    let n = false;
    for (let o of this.steps) {
      let s = o.dropzoneAt(e);
      if (s.inputWireQuantum = n, s.operationName === "write-gate")
        s.inputWireQuantum = n, s.outputWireQuantum = true, n = true;
      else if (s.operationName === "measurement-gate")
        s.inputWireQuantum = n, s.outputWireQuantum = false, n = false;
      else if (s.operationName === "swap-gate") {
        let p = o.dropzones.filter((v) => v.operationName === "swap-gate");
        if (p.length === 2) {
          let v = p.map((g) => o.bit(g)), m = o.bit(s), d = v[0] === m ? v[1] : v[0], f = o.dropzoneAt(d);
          s.inputWireQuantum = n, s.outputWireQuantum = f.inputWireQuantum, n = f.inputWireQuantum;
        } else
          s.inputWireQuantum = n, s.outputWireQuantum = n;
      } else
        s.inputWireQuantum = n, s.outputWireQuantum = n;
    }
  }
  updateChangedWire(e) {
    let n = e.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let o = e.detail.dropzone;
    if (!pa(o))
      throw new Error(`${o} isn't a circuit-dropzone.`);
    let s = n.dropzones.indexOf(o);
    H.need(s !== -1, "circuit-dropzone not found."), this.updateWire(s);
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
    let o = 1;
    ur(e) && (o = e.span);
    let s = e.dropzone;
    for (let [p, v] of Object.entries(this.steps)) {
      let m = parseInt(p);
      for (let [d, f] of Object.entries(v.dropzones)) {
        let g = parseInt(d), w = f.snapTarget, S = this.isVertical ? w.y : w.x, T = this.isVertical ? w.x : w.y;
        if (m === 0 && v.dropzones[g + o - 1] !== void 0) {
          let z = S - e.snapRange * 0.75;
          this.isVertical ? n.push({ x: T, y: z }) : n.push({ x: z, y: T }), this.snapTargets[z] === void 0 && (this.snapTargets[z] = {}), this.snapTargets[z][T] === void 0 && (this.snapTargets[z][T] = { dropzone: null, stepIndex: -1, wireIndex: g });
        }
        if (o === 1)
          (f === s || !f.occupied) && n.push(w);
        else if (!f.occupied && g + o <= v.dropzones.length && n.push(w), f === s) {
          n.push(w);
          for (let z = 1; z < o && g + z < v.dropzones.length; z++) {
            let N = v.dropzones[g + z];
            H.notNull(N), n.push(N.snapTarget);
          }
        }
        let C = S + e.snapRange * 0.75;
        v.dropzones[g + o - 1] !== void 0 && (this.isVertical ? n.push({ x: T, y: C }) : n.push({ x: C, y: T })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][T] === void 0 && (this.snapTargets[C][T] = { dropzone: null, stepIndex: m, wireIndex: g }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][T] === void 0 && (this.snapTargets[S][T] = { dropzone: f, stepIndex: null, wireIndex: g });
      }
    }
    e.snapTargets = n;
  }
  setResizeHandleSnapTargets(e) {
    if (!ur(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!pa(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let n = e.dropzone.circuitStep;
    H.notNull(n);
    let o = n.freeDropzones, s = e.dropzone;
    o.push(s);
    let p = [];
    this.resizeHandleSnapTargets = {};
    for (let [v, m] of Object.entries(n.dropzones)) {
      let d = m.resizeHandleSnapTarget, f = this.isVertical ? d.y : d.x, g = this.isVertical ? d.x : d.y, w = parseInt(v) % this.wireCount;
      if (m.occupied || p.push(d), m === s) {
        p.push(d);
        let S = e.span;
        for (let T = 1; T < S; T++) {
          let C = n.dropzones[parseInt(v) + T];
          H.notNull(C), p.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[f] === void 0 && (this.resizeHandleSnapTargets[f] = {}), this.resizeHandleSnapTargets[f][g] === void 0 && (this.resizeHandleSnapTargets[f][g] = { dropzone: m, stepIndex: null, wireIndex: w });
    }
    e.resizeHandleSnapTargets = p;
  }
  updateSnapTargets(e) {
    let n = e[0];
    H.notNull(n);
    let o = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [s, p] of Object.entries(this.snapTargets))
      if (!(parseInt(s) <= o))
        for (let v in p) {
          let m = p[v];
          m.stepIndex !== null && (m.stepIndex += 1);
        }
    for (let [s, p] of Object.entries(e)) {
      let v = p.snapTarget, m = this.isVertical ? v.y : v.x, d = this.isVertical ? v.x : v.y;
      H.notNull(this.snapTargets[m]), this.snapTargets[m][d] = { dropzone: p, stepIndex: null, wireIndex: parseInt(s) };
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
    for (let o of this.nonEmptySteps) {
      if (o.isInBlock) {
        if (!e) {
          let s = o.block;
          n.push(`["[${s.comment}"]`), e = true;
        }
      } else
        e && (n.push('["]"]'), e = false);
      n.push(o.toJson());
    }
    return e && n.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${n.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${n.join(",")}]}`;
  }
}, "le");
u(le, "QuantumCircuitElement"), M([D], le.prototype, "minStepCount", 2), M([D], le.prototype, "minWireCount", 2), M([D], le.prototype, "editing", 2), M([D], le.prototype, "updateUrl", 2), M([D], le.prototype, "json", 2), M([D], le.prototype, "circuitTitle", 2), M([D], le.prototype, "debug", 2), M([D], le.prototype, "chDisabled", 2), M([D], le.prototype, "chMaxControlGates", 2), M([D], le.prototype, "chMaxTargetGates", 2), M([D], le.prototype, "cnotDisabled", 2), M([D], le.prototype, "cnotMaxControlGates", 2), M([D], le.prototype, "cnotMaxTargetGates", 2), M([D], le.prototype, "cyDisabled", 2), M([D], le.prototype, "cyMaxControlGates", 2), M([D], le.prototype, "cyMaxTargetGates", 2), M([D], le.prototype, "czDisabled", 2), M([D], le.prototype, "czMaxControlGates", 2), M([D], le.prototype, "czMaxTargetGates", 2), M([D], le.prototype, "cphaseDisabled", 2), M([D], le.prototype, "cphaseMaxControlGates", 2), M([D], le.prototype, "cphaseMaxTargetGates", 2), M([D], le.prototype, "ctDisabled", 2), M([D], le.prototype, "ctMaxControlGates", 2), M([D], le.prototype, "ctMaxTargetGates", 2), M([D], le.prototype, "crnotDisabled", 2), M([D], le.prototype, "crnotMaxControlGates", 2), M([D], le.prototype, "crnotMaxTargetGates", 2), M([D], le.prototype, "crxDisabled", 2), M([D], le.prototype, "crxMaxControlGates", 2), M([D], le.prototype, "crxMaxTargetGates", 2), M([D], le.prototype, "cryDisabled", 2), M([D], le.prototype, "cryMaxControlGates", 2), M([D], le.prototype, "cryMaxTargetGates", 2), M([D], le.prototype, "crzDisabled", 2), M([D], le.prototype, "crzMaxControlGates", 2), M([D], le.prototype, "crzMaxTargetGates", 2), M([D], le.prototype, "cswapDisabled", 2), M([D], le.prototype, "cswapMaxControlGates", 2), M([D], le.prototype, "swapDisabled", 2), M([D], le.prototype, "controlControlDisabled", 2), M([D], le.prototype, "controlControlMaxTargetGates", 2), M([D], le.prototype, "phasePhaseDisabled", 2), M([D], le.prototype, "phasePhaseMaxTargetGates", 2), M([dt], le.prototype, "blocks", 2), le = M([X], le);
var hn = /* @__PURE__ */ __name(class extends HTMLElement {
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
    var s;
    let n = e.data, o = this.activeStepIndex;
    switch (n.type) {
      case "step": {
        let p = this.circuit.stepAt(n.step);
        for (let v in n.blochVectors) {
          let m = parseInt(v), d = p.dropzoneAt(m).operation;
          if (Jh(d)) {
            let f = n.blochVectors[m];
            d.x = f[0], d.y = f[1], d.z = f[2];
          }
        }
        if (n.measuredBits) {
          let v = n.measuredBits;
          for (let m in v) {
            let d = parseInt(m), f = p.dropzoneAt(d).operation;
            em(f) && (f.value = v[d].toString());
          }
        }
        for (let v of p.dropzones) {
          let m = v.operation;
          pn(m) && m.if !== "" && (m.disabled = !n.flags[m.if]);
        }
        if (o === n.step) {
          let v = {};
          for (let m in n.amplitudes) {
            let d = n.amplitudes[m];
            v[m] = new In(d[0], d[1]);
          }
          (s = this.circleNotation) == null || s.setAmplitudes(v);
        }
        break;
      }
      case "finish": {
        for (let p of this.runCircuitButtons)
          p.running = false;
        break;
      }
      default:
        throw new _t("Unknown service worker message", { data: n });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(e) {
    let n = this.activeStepIndex, o = this.circuit.serialize();
    H.need(o.length > 0, "non-zero step length");
    let s = this.circuit.toJson(), p = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: p, stepIndex: n, circuitJson: s, invalidateCaches: e, steps: o, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let e = Math.max(...this.circuit.steps.map((n) => n.maxOccupiedDropzoneBit));
    return e === 0 && (e = 1), this.circleNotation.qubitCount = e, e;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, n = this.circuit.breakpoint, o = e || n;
    return o === null && (o = this.circuit.stepAt(0), this.circuit.setBreakpoint(o)), this.circuit.fetchStepIndex(o);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    H.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "hn");
u(hn, "QuantumSimulatorElement"), M([D], hn.prototype, "updateUrl", 2), M([Oe], hn.prototype, "circuit", 2), M([Oe], hn.prototype, "circleNotation", 2), M([dt], hn.prototype, "runCircuitButtons", 2), hn = M([X], hn);

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
  In as Complex
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
