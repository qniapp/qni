var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var Qv = Object.create;
var So = Object.defineProperty;
var hp = Object.getOwnPropertyDescriptor;
var Kv = Object.getOwnPropertyNames;
var dp = Object.getOwnPropertySymbols;
var Jv = Object.getPrototypeOf;
var mp = Object.prototype.hasOwnProperty;
var eg = Object.prototype.propertyIsEnumerable;
var fp = /* @__PURE__ */ __name((e, r, t) => r in e ? So(e, r, { enumerable: true, configurable: true, writable: true, value: t }) : e[r] = t, "fp");
var vp = /* @__PURE__ */ __name((e, r) => {
  for (var t in r || (r = {}))
    mp.call(r, t) && fp(e, t, r[t]);
  if (dp)
    for (var t of dp(r))
      eg.call(r, t) && fp(e, t, r[t]);
  return e;
}, "vp");
var u = /* @__PURE__ */ __name((e, r) => So(e, "name", { value: r, configurable: true }), "u");
var Tt = /* @__PURE__ */ __name((e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), "Tt");
var tg = /* @__PURE__ */ __name((e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let o of Kv(r))
      !mp.call(e, o) && o !== t && So(e, o, { get: () => r[o], enumerable: !(n = hp(r, o)) || n.enumerable });
  return e;
}, "tg");
var Lt = /* @__PURE__ */ __name((e, r, t) => (t = e != null ? Qv(Jv(e)) : {}, tg(r || !e || !e.__esModule ? So(t, "default", { value: e, enumerable: true }) : t, e)), "Lt");
var M = /* @__PURE__ */ __name((e, r, t, n) => {
  for (var o = n > 1 ? void 0 : n ? hp(r, t) : r, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (o = (n ? p(r, t, o) : p(o)) || o);
  return n && o && So(r, t, o), o;
}, "M");
var gp = /* @__PURE__ */ __name((e, r, t) => {
  if (!r.has(e))
    throw TypeError("Cannot " + t);
}, "gp");
var Wa = /* @__PURE__ */ __name((e, r, t) => (gp(e, r, "read from private field"), t ? t.call(e) : r.get(e)), "Wa");
var Va = /* @__PURE__ */ __name((e, r, t) => {
  if (r.has(e))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(e) : r.set(e, t);
}, "Va");
var Ya = /* @__PURE__ */ __name((e, r, t, n) => (gp(e, r, "write to private field"), n ? n.call(e, t) : r.set(e, t), t), "Ya");
var yp = Tt((Ul, bp) => {
  (function(e) {
    "use strict";
    var r = 2e3, t = { s: 1, n: 0, d: 1 };
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
      var T = 0, C = 1, z = 1, N = 0, G = 0, $ = 0, A = 1, ee = 1, _ = 0, B = 1, te = 1, J = 1, ue = 1e7, Q;
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
                  if (Q = (_ + te) / (B + J), w === Q) {
                    B + J <= ue ? (T = _ + te, C = B + J) : J > B ? (T = te, C = J) : (T = _, C = B);
                    break;
                  } else
                    w > Q ? (_ += te, B += J) : (te += _, J += B), B > ue ? (T = te, C = J) : (T = _, C = B);
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
      t.s = z < 0 ? -1 : 1, t.n = Math.abs(T), t.d = Math.abs(C);
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
        w = f(t.d, t.n), this.s = t.s, this.n = t.n / w, this.d = t.d / w;
      else
        return o(t.s * t.n, t.d);
    }
    __name(g, "g");
    u(g, "Fraction"), g.DivisionByZero = new Error("Division by Zero"), g.InvalidParameter = new Error("Invalid argument"), g.NonIntegerParameter = new Error("Parameters must be integer"), g.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return o(this.n, this.d);
    }, neg: function() {
      return o(-this.s * this.n, this.d);
    }, add: function(w, S) {
      return p(w, S), o(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(w, S) {
      return p(w, S), o(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(w, S) {
      return p(w, S), o(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(w, S) {
      return p(w, S), o(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return o(this.s * this.n, this.d);
    }, mod: function(w, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new g(NaN);
      if (w === void 0)
        return o(this.s * this.n % this.d, 1);
      if (p(w, S), t.n === 0 && this.d === 0)
        throw g.DivisionByZero;
      return o(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d);
    }, gcd: function(w, S) {
      return p(w, S), o(f(t.n, this.n) * f(t.d, this.d), t.d * this.d);
    }, lcm: function(w, S) {
      return p(w, S), t.n === 0 && this.n === 0 ? o(0, 1) : o(t.n * this.n, f(t.n, this.n) * f(t.d, this.d));
    }, ceil: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : o(Math.ceil(w * this.s * this.n / this.d), w);
    }, floor: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : o(Math.floor(w * this.s * this.n / this.d), w);
    }, round: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new g(NaN) : o(Math.round(w * this.s * this.n / this.d), w);
    }, inverse: function() {
      return o(this.s * this.d, this.n);
    }, pow: function(w, S) {
      if (p(w, S), t.d === 1)
        return t.s < 0 ? o(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : o(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var T = s(this.n), C = s(this.d), z = 1, N = 1;
      for (var G in T)
        if (G !== "1") {
          if (G === "0") {
            z = 0;
            break;
          }
          if (T[G] *= t.n, T[G] % t.d === 0)
            T[G] /= t.d;
          else
            return null;
          z *= Math.pow(G, T[G]);
        }
      for (var G in C)
        if (G !== "1") {
          if (C[G] *= t.n, C[G] % t.d === 0)
            C[G] /= t.d;
          else
            return null;
          N *= Math.pow(G, C[G]);
        }
      return t.s < 0 ? o(N, z) : o(z, N);
    }, equals: function(w, S) {
      return p(w, S), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(w, S) {
      p(w, S);
      var T = this.s * this.n * t.d - t.s * t.n * this.d;
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
      return p(w, S), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
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
    }) : typeof Ul == "object" ? (Object.defineProperty(g, "__esModule", { value: true }), g.default = g, g.Fraction = g, bp.exports = g) : e.Fraction = g;
  })(Ul);
});
var Sp = Tt((P0, Ep) => {
  "use strict";
  var wp = u((e = 0) => (r) => `\x1B[${38 + e};5;${r}m`, "wrapAnsi256"), xp = u((e = 0) => (r, t, n) => `\x1B[${38 + e};2;${r};${t};${n}m`, "wrapAnsi16m");
  function rg() {
    let e = /* @__PURE__ */ new Map(), r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    r.color.gray = r.color.blackBright, r.bgColor.bgGray = r.bgColor.bgBlackBright, r.color.grey = r.color.blackBright, r.bgColor.bgGrey = r.bgColor.bgBlackBright;
    for (let [t, n] of Object.entries(r)) {
      for (let [o, s] of Object.entries(n))
        r[o] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, n[o] = r[o], e.set(s[0], s[1]);
      Object.defineProperty(r, t, { value: n, enumerable: false });
    }
    return Object.defineProperty(r, "codes", { value: e, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi256 = wp(), r.color.ansi16m = xp(), r.bgColor.ansi256 = wp(10), r.bgColor.ansi16m = xp(10), Object.defineProperties(r, { rgbToAnsi256: { value: (t, n, o) => t === n && n === o ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(o / 255 * 5), enumerable: false }, hexToRgb: { value: (t) => {
      let n = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(t.toString(16));
      if (!n)
        return [0, 0, 0];
      let { colorString: o } = n.groups;
      o.length === 3 && (o = o.split("").map((p) => p + p).join(""));
      let s = Number.parseInt(o, 16);
      return [s >> 16 & 255, s >> 8 & 255, s & 255];
    }, enumerable: false }, hexToAnsi256: { value: (t) => r.rgbToAnsi256(...r.hexToRgb(t)), enumerable: false } }), r;
  }
  __name(rg, "rg");
  u(rg, "assembleStyles");
  Object.defineProperty(Ep, "exports", { enumerable: true, get: rg });
});
var To = Tt((Ai) => {
  "use strict";
  Object.defineProperty(Ai, "__esModule", { value: true });
  Ai.printIteratorEntries = ig;
  Ai.printIteratorValues = og;
  Ai.printListItems = ag;
  Ai.printObjectProperties = sg;
  var ng = u((e, r) => {
    let t = Object.keys(e), n = r !== null ? t.sort(r) : t;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((o) => {
      Object.getOwnPropertyDescriptor(e, o).enumerable && n.push(o);
    }), n;
  }, "getKeysOfEnumerableProperties");
  function ig(e, r, t, n, o, s, p = ": ") {
    let v = "", m = 0, d = e.next();
    if (!d.done) {
      v += r.spacingOuter;
      let f = t + r.indent;
      for (; !d.done; ) {
        if (v += f, m++ === r.maxWidth) {
          v += "\u2026";
          break;
        }
        let g = s(d.value[0], r, f, n, o), w = s(d.value[1], r, f, n, o);
        v += g + p + w, d = e.next(), d.done ? r.min || (v += ",") : v += `,${r.spacingInner}`;
      }
      v += r.spacingOuter + t;
    }
    return v;
  }
  __name(ig, "ig");
  u(ig, "printIteratorEntries");
  function og(e, r, t, n, o, s) {
    let p = "", v = 0, m = e.next();
    if (!m.done) {
      p += r.spacingOuter;
      let d = t + r.indent;
      for (; !m.done; ) {
        if (p += d, v++ === r.maxWidth) {
          p += "\u2026";
          break;
        }
        p += s(m.value, r, d, n, o), m = e.next(), m.done ? r.min || (p += ",") : p += `,${r.spacingInner}`;
      }
      p += r.spacingOuter + t;
    }
    return p;
  }
  __name(og, "og");
  u(og, "printIteratorValues");
  function ag(e, r, t, n, o, s) {
    let p = "";
    if (e.length) {
      p += r.spacingOuter;
      let v = t + r.indent;
      for (let m = 0; m < e.length; m++) {
        if (p += v, m === r.maxWidth) {
          p += "\u2026";
          break;
        }
        m in e && (p += s(e[m], r, v, n, o)), m < e.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + t;
    }
    return p;
  }
  __name(ag, "ag");
  u(ag, "printListItems");
  function sg(e, r, t, n, o, s) {
    let p = "", v = ng(e, r.compareKeys);
    if (v.length) {
      p += r.spacingOuter;
      let m = t + r.indent;
      for (let d = 0; d < v.length; d++) {
        let f = v[d], g = s(f, r, m, n, o), w = s(e[f], r, m, n, o);
        p += `${m + g}: ${w}`, d < v.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + t;
    }
    return p;
  }
  __name(sg, "sg");
  u(sg, "printObjectProperties");
});
var Mp = Tt((yn) => {
  "use strict";
  Object.defineProperty(yn, "__esModule", { value: true });
  yn.test = yn.serialize = yn.default = void 0;
  var Tp = To(), Wl = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, lg = typeof Wl == "function" && Wl.for ? Wl.for("jest.asymmetricMatcher") : 1267621, Xa = " ", Cp = u((e, r, t, n, o, s) => {
    let p = e.toString();
    if (p === "ArrayContaining" || p === "ArrayNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Xa}[${(0, Tp.printListItems)(e.sample, r, t, n, o, s)}]`;
    if (p === "ObjectContaining" || p === "ObjectNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Xa}{${(0, Tp.printObjectProperties)(e.sample, r, t, n, o, s)}}`;
    if (p === "StringMatching" || p === "StringNotMatching" || p === "StringContaining" || p === "StringNotContaining")
      return p + Xa + s(e.sample, r, t, n, o);
    if (typeof e.toAsymmetricMatcher != "function")
      throw new Error(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);
    return e.toAsymmetricMatcher();
  }, "serialize");
  yn.serialize = Cp;
  var Op = u((e) => e && e.$$typeof === lg, "test");
  yn.test = Op;
  var ug = { serialize: Cp, test: Op }, cg = ug;
  yn.default = cg;
});
var zp = Tt((wn) => {
  "use strict";
  Object.defineProperty(wn, "__esModule", { value: true });
  wn.test = wn.serialize = wn.default = void 0;
  var Ip = To(), pg = " ", Ap = ["DOMStringMap", "NamedNodeMap"], dg = /^(HTML\w*Collection|NodeList)$/, fg = u((e) => Ap.indexOf(e) !== -1 || dg.test(e), "testName"), Pp = u((e) => e && e.constructor && !!e.constructor.name && fg(e.constructor.name), "test");
  wn.test = Pp;
  var hg = u((e) => e.constructor.name === "NamedNodeMap", "isNamedNodeMap"), _p = u((e, r, t, n, o, s) => {
    let p = e.constructor.name;
    return ++n > r.maxDepth ? `[${p}]` : (r.min ? "" : p + pg) + (Ap.indexOf(p) !== -1 ? `{${(0, Ip.printObjectProperties)(hg(e) ? Array.from(e).reduce((v, m) => (v[m.name] = m.value, v), {}) : vp({}, e), r, t, n, o, s)}}` : `[${(0, Ip.printListItems)(Array.from(e), r, t, n, o, s)}]`);
  }, "serialize");
  wn.serialize = _p;
  var mg = { serialize: _p, test: Pp }, vg = mg;
  wn.default = vg;
});
var Rp = Tt((Vl) => {
  "use strict";
  Object.defineProperty(Vl, "__esModule", { value: true });
  Vl.default = gg;
  function gg(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  __name(gg, "gg");
  u(gg, "escapeHTML");
});
var Za = Tt((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: true });
  Ut.printText = Ut.printProps = Ut.printElementAsLeaf = Ut.printElement = Ut.printComment = Ut.printChildren = void 0;
  var Dp = bg(Rp());
  function bg(e) {
    return e && e.__esModule ? e : { default: e };
  }
  __name(bg, "bg");
  u(bg, "_interopRequireDefault");
  var yg = u((e, r, t, n, o, s, p) => {
    let v = n + t.indent, m = t.colors;
    return e.map((d) => {
      let f = r[d], g = p(f, t, v, o, s);
      return typeof f != "string" && (g.indexOf(`
`) !== -1 && (g = t.spacingOuter + v + g + t.spacingOuter + n), g = `{${g}}`), `${t.spacingInner + n + m.prop.open + d + m.prop.close}=${m.value.open}${g}${m.value.close}`;
    }).join("");
  }, "printProps");
  Ut.printProps = yg;
  var wg = u((e, r, t, n, o, s) => e.map((p) => r.spacingOuter + t + (typeof p == "string" ? kp(p, r) : s(p, r, t, n, o))).join(""), "printChildren");
  Ut.printChildren = wg;
  var kp = u((e, r) => {
    let t = r.colors.content;
    return t.open + (0, Dp.default)(e) + t.close;
  }, "printText");
  Ut.printText = kp;
  var xg = u((e, r) => {
    let t = r.colors.comment;
    return `${t.open}<!--${(0, Dp.default)(e)}-->${t.close}`;
  }, "printComment");
  Ut.printComment = xg;
  var Eg = u((e, r, t, n, o) => {
    let s = n.colors.tag;
    return `${s.open}<${e}${r && s.close + r + n.spacingOuter + o + s.open}${t ? `>${s.close}${t}${n.spacingOuter}${o}${s.open}</${e}` : `${r && !n.min ? "" : " "}/`}>${s.close}`;
  }, "printElement");
  Ut.printElement = Eg;
  var Sg = u((e, r) => {
    let t = r.colors.tag;
    return `${t.open}<${e}${t.close} \u2026${t.open} />${t.close}`;
  }, "printElementAsLeaf");
  Ut.printElementAsLeaf = Sg;
});
var Hp = Tt((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.test = xn.serialize = xn.default = void 0;
  var Pi = Za(), Tg = 1, Np = 3, Gp = 8, Lp = 11, Cg = /^((HTML|SVG)\w*)?Element$/, Og = u((e) => {
    try {
      return typeof e.hasAttribute == "function" && e.hasAttribute("is");
    } catch (r) {
      return false;
    }
  }, "testHasAttribute"), Mg = u((e) => {
    let r = e.constructor.name, { nodeType: t, tagName: n } = e, o = typeof n == "string" && n.includes("-") || Og(e);
    return t === Tg && (Cg.test(r) || o) || t === Np && r === "Text" || t === Gp && r === "Comment" || t === Lp && r === "DocumentFragment";
  }, "testNode"), jp = u((e) => {
    var r;
    return ((r = e == null ? void 0 : e.constructor) == null ? void 0 : r.name) && Mg(e);
  }, "test");
  xn.test = jp;
  function Ig(e) {
    return e.nodeType === Np;
  }
  __name(Ig, "Ig");
  u(Ig, "nodeIsText");
  function Ag(e) {
    return e.nodeType === Gp;
  }
  __name(Ag, "Ag");
  u(Ag, "nodeIsComment");
  function Yl(e) {
    return e.nodeType === Lp;
  }
  __name(Yl, "Yl");
  u(Yl, "nodeIsFragment");
  var Bp = u((e, r, t, n, o, s) => {
    if (Ig(e))
      return (0, Pi.printText)(e.data, r);
    if (Ag(e))
      return (0, Pi.printComment)(e.data, r);
    let p = Yl(e) ? "DocumentFragment" : e.tagName.toLowerCase();
    return ++n > r.maxDepth ? (0, Pi.printElementAsLeaf)(p, r) : (0, Pi.printElement)(p, (0, Pi.printProps)(Yl(e) ? [] : Array.from(e.attributes).map((v) => v.name).sort(), Yl(e) ? {} : Array.from(e.attributes).reduce((v, m) => (v[m.name] = m.value, v), {}), r, t + r.indent, n, o, s), (0, Pi.printChildren)(Array.prototype.slice.call(e.childNodes || e.children), r, t + r.indent, n, o, s), r, t);
  }, "serialize");
  xn.serialize = Bp;
  var Pg = { serialize: Bp, test: jp }, _g = Pg;
  xn.default = _g;
});
var Wp = Tt((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: true });
  En.test = En.serialize = En.default = void 0;
  var Co = To(), zg = "@@__IMMUTABLE_ITERABLE__@@", Rg = "@@__IMMUTABLE_LIST__@@", Dg = "@@__IMMUTABLE_KEYED__@@", kg = "@@__IMMUTABLE_MAP__@@", $p = "@@__IMMUTABLE_ORDERED__@@", Ng = "@@__IMMUTABLE_RECORD__@@", Gg = "@@__IMMUTABLE_SEQ__@@", Lg = "@@__IMMUTABLE_SET__@@", jg = "@@__IMMUTABLE_STACK__@@", _i = u((e) => `Immutable.${e}`, "getImmutableName"), Qa = u((e) => `[${e}]`, "printAsLeaf"), Oo = " ", qp = "\u2026", Bg = u((e, r, t, n, o, s, p) => ++n > r.maxDepth ? Qa(_i(p)) : `${_i(p) + Oo}{${(0, Co.printIteratorEntries)(e.entries(), r, t, n, o, s)}}`, "printImmutableEntries");
  function Hg(e) {
    let r = 0;
    return { next() {
      if (r < e._keys.length) {
        let t = e._keys[r++];
        return { done: false, value: [t, e.get(t)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  __name(Hg, "Hg");
  u(Hg, "getRecordEntries");
  var $g = u((e, r, t, n, o, s) => {
    let p = _i(e._name || "Record");
    return ++n > r.maxDepth ? Qa(p) : `${p + Oo}{${(0, Co.printIteratorEntries)(Hg(e), r, t, n, o, s)}}`;
  }, "printImmutableRecord"), qg = u((e, r, t, n, o, s) => {
    let p = _i("Seq");
    return ++n > r.maxDepth ? Qa(p) : e[Dg] ? `${p + Oo}{${e._iter || e._object ? (0, Co.printIteratorEntries)(e.entries(), r, t, n, o, s) : qp}}` : `${p + Oo}[${e._iter || e._array || e._collection || e._iterable ? (0, Co.printIteratorValues)(e.values(), r, t, n, o, s) : qp}]`;
  }, "printImmutableSeq"), Xl = u((e, r, t, n, o, s, p) => ++n > r.maxDepth ? Qa(_i(p)) : `${_i(p) + Oo}[${(0, Co.printIteratorValues)(e.values(), r, t, n, o, s)}]`, "printImmutableValues"), Fp = u((e, r, t, n, o, s) => e[kg] ? Bg(e, r, t, n, o, s, e[$p] ? "OrderedMap" : "Map") : e[Rg] ? Xl(e, r, t, n, o, s, "List") : e[Lg] ? Xl(e, r, t, n, o, s, e[$p] ? "OrderedSet" : "Set") : e[jg] ? Xl(e, r, t, n, o, s, "Stack") : e[Gg] ? qg(e, r, t, n, o, s) : $g(e, r, t, n, o, s), "serialize");
  En.serialize = Fp;
  var Up = u((e) => e && (e[zg] === true || e[Ng] === true), "test");
  En.test = Up;
  var Fg = { serialize: Fp, test: Up }, Ug = Fg;
  En.default = Ug;
});
var Yp = Tt((Ge) => {
  "use strict";
  var Zl = Symbol.for("react.element"), Ql = Symbol.for("react.portal"), Ka = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"), es = Symbol.for("react.profiler"), ts = Symbol.for("react.provider"), rs = Symbol.for("react.context"), Wg = Symbol.for("react.server_context"), ns = Symbol.for("react.forward_ref"), is = Symbol.for("react.suspense"), os = Symbol.for("react.suspense_list"), as = Symbol.for("react.memo"), ss = Symbol.for("react.lazy"), Vg = Symbol.for("react.offscreen"), Vp;
  Vp = Symbol.for("react.module.reference");
  function br(e) {
    if (typeof e == "object" && e !== null) {
      var r = e.$$typeof;
      switch (r) {
        case Zl:
          switch (e = e.type, e) {
            case Ka:
            case es:
            case Ja:
            case is:
            case os:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Wg:
                case rs:
                case ns:
                case ss:
                case as:
                case ts:
                  return e;
                default:
                  return r;
              }
          }
        case Ql:
          return r;
      }
    }
  }
  __name(br, "br");
  u(br, "v");
  Ge.ContextConsumer = rs;
  Ge.ContextProvider = ts;
  Ge.Element = Zl;
  Ge.ForwardRef = ns;
  Ge.Fragment = Ka;
  Ge.Lazy = ss;
  Ge.Memo = as;
  Ge.Portal = Ql;
  Ge.Profiler = es;
  Ge.StrictMode = Ja;
  Ge.Suspense = is;
  Ge.SuspenseList = os;
  Ge.isAsyncMode = function() {
    return false;
  };
  Ge.isConcurrentMode = function() {
    return false;
  };
  Ge.isContextConsumer = function(e) {
    return br(e) === rs;
  };
  Ge.isContextProvider = function(e) {
    return br(e) === ts;
  };
  Ge.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zl;
  };
  Ge.isForwardRef = function(e) {
    return br(e) === ns;
  };
  Ge.isFragment = function(e) {
    return br(e) === Ka;
  };
  Ge.isLazy = function(e) {
    return br(e) === ss;
  };
  Ge.isMemo = function(e) {
    return br(e) === as;
  };
  Ge.isPortal = function(e) {
    return br(e) === Ql;
  };
  Ge.isProfiler = function(e) {
    return br(e) === es;
  };
  Ge.isStrictMode = function(e) {
    return br(e) === Ja;
  };
  Ge.isSuspense = function(e) {
    return br(e) === is;
  };
  Ge.isSuspenseList = function(e) {
    return br(e) === os;
  };
  Ge.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Ka || e === es || e === Ja || e === is || e === os || e === Vg || typeof e == "object" && e !== null && (e.$$typeof === ss || e.$$typeof === as || e.$$typeof === ts || e.$$typeof === rs || e.$$typeof === ns || e.$$typeof === Vp || e.getModuleId !== void 0);
  };
  Ge.typeOf = br;
});
var Zp = Tt((Y0, Xp) => {
  "use strict";
  Xp.exports = Yp();
});
var rd = Tt((Sn) => {
  "use strict";
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.test = Sn.serialize = Sn.default = void 0;
  var Xn = Yg(Zp()), ls = Za();
  function Kp(e) {
    if (typeof WeakMap != "function")
      return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (Kp = u(function(n) {
      return n ? t : r;
    }, "_getRequireWildcardCache"))(e);
  }
  __name(Kp, "Kp");
  u(Kp, "_getRequireWildcardCache");
  function Yg(e, r) {
    if (!r && e && e.__esModule)
      return e;
    if (e === null || typeof e != "object" && typeof e != "function")
      return { default: e };
    var t = Kp(r);
    if (t && t.has(e))
      return t.get(e);
    var n = {}, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in e)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
        var p = o ? Object.getOwnPropertyDescriptor(e, s) : null;
        p && (p.get || p.set) ? Object.defineProperty(n, s, p) : n[s] = e[s];
      }
    return n.default = e, t && t.set(e, n), n;
  }
  __name(Yg, "Yg");
  u(Yg, "_interopRequireWildcard");
  var Jp = u((e, r = []) => (Array.isArray(e) ? e.forEach((t) => {
    Jp(t, r);
  }) : e != null && e !== false && r.push(e), r), "getChildren"), Qp = u((e) => {
    let r = e.type;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r.displayName || r.name || "Unknown";
    if (Xn.isFragment(e))
      return "React.Fragment";
    if (Xn.isSuspense(e))
      return "React.Suspense";
    if (typeof r == "object" && r !== null) {
      if (Xn.isContextProvider(e))
        return "Context.Provider";
      if (Xn.isContextConsumer(e))
        return "Context.Consumer";
      if (Xn.isForwardRef(e)) {
        if (r.displayName)
          return r.displayName;
        let t = r.render.displayName || r.render.name || "";
        return t !== "" ? `ForwardRef(${t})` : "ForwardRef";
      }
      if (Xn.isMemo(e)) {
        let t = r.displayName || r.type.displayName || r.type.name || "";
        return t !== "" ? `Memo(${t})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, "getType"), Xg = u((e) => {
    let { props: r } = e;
    return Object.keys(r).filter((t) => t !== "children" && r[t] !== void 0).sort();
  }, "getPropKeys"), ed = u((e, r, t, n, o, s) => ++n > r.maxDepth ? (0, ls.printElementAsLeaf)(Qp(e), r) : (0, ls.printElement)(Qp(e), (0, ls.printProps)(Xg(e), e.props, r, t + r.indent, n, o, s), (0, ls.printChildren)(Jp(e.props.children), r, t + r.indent, n, o, s), r, t), "serialize");
  Sn.serialize = ed;
  var td = u((e) => e != null && Xn.isElement(e), "test");
  Sn.test = td;
  var Zg = { serialize: ed, test: td }, Qg = Zg;
  Sn.default = Qg;
});
var od = Tt((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.test = Tn.serialize = Tn.default = void 0;
  var us = Za(), Kl = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, Kg = typeof Kl == "function" && Kl.for ? Kl.for("react.test.json") : 245830487, Jg = u((e) => {
    let { props: r } = e;
    return r ? Object.keys(r).filter((t) => r[t] !== void 0).sort() : [];
  }, "getPropKeys"), nd = u((e, r, t, n, o, s) => ++n > r.maxDepth ? (0, us.printElementAsLeaf)(e.type, r) : (0, us.printElement)(e.type, e.props ? (0, us.printProps)(Jg(e), e.props, r, t + r.indent, n, o, s) : "", e.children ? (0, us.printChildren)(e.children, r, t + r.indent, n, o, s) : "", r, t), "serialize");
  Tn.serialize = nd;
  var id = u((e) => e && e.$$typeof === Kg, "test");
  Tn.test = id;
  var eb = { serialize: nd, test: id }, tb = eb;
  Tn.default = tb;
});
var en = Tt((Jr) => {
  "use strict";
  Object.defineProperty(Jr, "__esModule", { value: true });
  Jr.default = Jr.DEFAULT_OPTIONS = void 0;
  Jr.format = wd;
  Jr.plugins = void 0;
  var rb = Zn(Sp()), Mo = To(), nb = Zn(Mp()), ib = Zn(zp()), ob = Zn(Hp()), ab = Zn(Wp()), sb = Zn(rd()), lb = Zn(od());
  function Zn(e) {
    return e && e.__esModule ? e : { default: e };
  }
  __name(Zn, "Zn");
  u(Zn, "_interopRequireDefault");
  var pd = Object.prototype.toString, ub = Date.prototype.toISOString, cb = Error.prototype.toString, ad = RegExp.prototype.toString, Jl = u((e) => typeof e.constructor == "function" && e.constructor.name || "Object", "getConstructorName"), pb = u((e) => typeof window != "undefined" && e === window, "isWindow"), db = /^Symbol\((.*)\)(.*)$/, fb = /\n/gi, Io = /* @__PURE__ */ __name(class extends Error {
    constructor(r, t) {
      super(r), this.stack = t, this.name = this.constructor.name;
    }
  }, "Io");
  u(Io, "PrettyFormatPluginError");
  function hb(e) {
    return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
  }
  __name(hb, "hb");
  u(hb, "isToStringedArrayType");
  function mb(e) {
    return Object.is(e, -0) ? "-0" : String(e);
  }
  __name(mb, "mb");
  u(mb, "printNumber");
  function vb(e) {
    return String(`${e}n`);
  }
  __name(vb, "vb");
  u(vb, "printBigInt");
  function sd(e, r) {
    return r ? `[Function ${e.name || "anonymous"}]` : "[Function]";
  }
  __name(sd, "sd");
  u(sd, "printFunction");
  function ld(e) {
    return String(e).replace(db, "Symbol($1)");
  }
  __name(ld, "ld");
  u(ld, "printSymbol");
  function ud(e) {
    return `[${cb.call(e)}]`;
  }
  __name(ud, "ud");
  u(ud, "printError");
  function dd(e, r, t, n) {
    if (e === true || e === false)
      return `${e}`;
    if (e === void 0)
      return "undefined";
    if (e === null)
      return "null";
    let o = typeof e;
    if (o === "number")
      return mb(e);
    if (o === "bigint")
      return vb(e);
    if (o === "string")
      return n ? `"${e.replace(/"|\\/g, "\\$&")}"` : `"${e}"`;
    if (o === "function")
      return sd(e, r);
    if (o === "symbol")
      return ld(e);
    let s = pd.call(e);
    return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? sd(e, r) : s === "[object Symbol]" ? ld(e) : s === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : ub.call(e) : s === "[object Error]" ? ud(e) : s === "[object RegExp]" ? t ? ad.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : ad.call(e) : e instanceof Error ? ud(e) : null;
  }
  __name(dd, "dd");
  u(dd, "printBasicValue");
  function fd(e, r, t, n, o, s) {
    if (o.indexOf(e) !== -1)
      return "[Circular]";
    o = o.slice(), o.push(e);
    let p = ++n > r.maxDepth, v = r.min;
    if (r.callToJSON && !p && e.toJSON && typeof e.toJSON == "function" && !s)
      return Cn(e.toJSON(), r, t, n, o, true);
    let m = pd.call(e);
    return m === "[object Arguments]" ? p ? "[Arguments]" : `${v ? "" : "Arguments "}[${(0, Mo.printListItems)(e, r, t, n, o, Cn)}]` : hb(m) ? p ? `[${e.constructor.name}]` : `${v || !r.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${(0, Mo.printListItems)(e, r, t, n, o, Cn)}]` : m === "[object Map]" ? p ? "[Map]" : `Map {${(0, Mo.printIteratorEntries)(e.entries(), r, t, n, o, Cn, " => ")}}` : m === "[object Set]" ? p ? "[Set]" : `Set {${(0, Mo.printIteratorValues)(e.values(), r, t, n, o, Cn)}}` : p || pb(e) ? `[${Jl(e)}]` : `${v || !r.printBasicPrototype && Jl(e) === "Object" ? "" : `${Jl(e)} `}{${(0, Mo.printObjectProperties)(e, r, t, n, o, Cn)}}`;
  }
  __name(fd, "fd");
  u(fd, "printComplexValue");
  function gb(e) {
    return e.serialize != null;
  }
  __name(gb, "gb");
  u(gb, "isNewPlugin");
  function hd(e, r, t, n, o, s) {
    let p;
    try {
      p = gb(e) ? e.serialize(r, t, n, o, s, Cn) : e.print(r, (v) => Cn(v, t, n, o, s), (v) => {
        let m = n + t.indent;
        return m + v.replace(fb, `
${m}`);
      }, { edgeSpacing: t.spacingOuter, min: t.min, spacing: t.spacingInner }, t.colors);
    } catch (v) {
      throw new Io(v.message, v.stack);
    }
    if (typeof p != "string")
      throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);
    return p;
  }
  __name(hd, "hd");
  u(hd, "printPlugin");
  function md(e, r) {
    for (let t = 0; t < e.length; t++)
      try {
        if (e[t].test(r))
          return e[t];
      } catch (n) {
        throw new Io(n.message, n.stack);
      }
    return null;
  }
  __name(md, "md");
  u(md, "findPlugin");
  function Cn(e, r, t, n, o, s) {
    let p = md(r.plugins, e);
    if (p !== null)
      return hd(p, e, r, t, n, o);
    let v = dd(e, r.printFunctionName, r.escapeRegex, r.escapeString);
    return v !== null ? v : fd(e, r, t, n, o, s);
  }
  __name(Cn, "Cn");
  u(Cn, "printer");
  var eu = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, vd = Object.keys(eu), bb = u((e) => e, "toOptionsSubtype"), yr = bb({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: eu });
  Jr.DEFAULT_OPTIONS = yr;
  function yb(e) {
    if (Object.keys(e).forEach((r) => {
      if (!Object.prototype.hasOwnProperty.call(yr, r))
        throw new Error(`pretty-format: Unknown option "${r}".`);
    }), e.min && e.indent !== void 0 && e.indent !== 0)
      throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
    if (e.theme !== void 0) {
      if (e.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof e.theme != "object")
        throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`);
    }
  }
  __name(yb, "yb");
  u(yb, "validateOptions");
  var wb = u((e) => vd.reduce((r, t) => {
    let n = e.theme && e.theme[t] !== void 0 ? e.theme[t] : eu[t], o = n && rb.default[n];
    if (o && typeof o.close == "string" && typeof o.open == "string")
      r[t] = o;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${t}" whose value "${n}" is undefined in ansi-styles.`);
    return r;
  }, /* @__PURE__ */ Object.create(null)), "getColorsHighlight"), xb = u(() => vd.reduce((e, r) => (e[r] = { close: "", open: "" }, e), /* @__PURE__ */ Object.create(null)), "getColorsEmpty"), gd = u((e) => {
    var r;
    return (r = e == null ? void 0 : e.printFunctionName) != null ? r : yr.printFunctionName;
  }, "getPrintFunctionName"), bd = u((e) => {
    var r;
    return (r = e == null ? void 0 : e.escapeRegex) != null ? r : yr.escapeRegex;
  }, "getEscapeRegex"), yd = u((e) => {
    var r;
    return (r = e == null ? void 0 : e.escapeString) != null ? r : yr.escapeString;
  }, "getEscapeString"), cd = u((e) => {
    var r, t, n, o, s, p, v;
    return { callToJSON: (r = e == null ? void 0 : e.callToJSON) != null ? r : yr.callToJSON, colors: e != null && e.highlight ? wb(e) : xb(), compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : yr.compareKeys, escapeRegex: bd(e), escapeString: yd(e), indent: e != null && e.min ? "" : Eb((t = e == null ? void 0 : e.indent) != null ? t : yr.indent), maxDepth: (n = e == null ? void 0 : e.maxDepth) != null ? n : yr.maxDepth, maxWidth: (o = e == null ? void 0 : e.maxWidth) != null ? o : yr.maxWidth, min: (s = e == null ? void 0 : e.min) != null ? s : yr.min, plugins: (p = e == null ? void 0 : e.plugins) != null ? p : yr.plugins, printBasicPrototype: (v = e == null ? void 0 : e.printBasicPrototype) != null ? v : true, printFunctionName: gd(e), spacingInner: e != null && e.min ? " " : `
`, spacingOuter: e != null && e.min ? "" : `
` };
  }, "getConfig");
  function Eb(e) {
    return new Array(e + 1).join(" ");
  }
  __name(Eb, "Eb");
  u(Eb, "createIndent");
  function wd(e, r) {
    if (r && (yb(r), r.plugins)) {
      let n = md(r.plugins, e);
      if (n !== null)
        return hd(n, e, cd(r), "", 0, []);
    }
    let t = dd(e, gd(r), bd(r), yd(r));
    return t !== null ? t : fd(e, cd(r), "", 0, []);
  }
  __name(wd, "wd");
  u(wd, "format");
  var Sb = { AsymmetricMatcher: nb.default, DOMCollection: ib.default, DOMElement: ob.default, Immutable: ab.default, ReactElement: sb.default, ReactTestComponent: lb.default };
  Jr.plugins = Sb;
  var Tb = wd;
  Jr.default = Tb;
});
var Vo = Tt((Of, ju) => {
  (function(e) {
    typeof Of == "object" && typeof ju != "undefined" ? ju.exports = e() : typeof define == "function" && define.amd ? define([], e) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = e();
  })(function() {
    var e = {};
    Object.defineProperty(e, "__esModule", { value: true }), e.default = void 0, e.default = function(i) {
      return !(!i || !i.Window) && i instanceof i.Window;
    };
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.getWindow = function(i) {
      return (0, e.default)(i) ? i : (i.ownerDocument || i).defaultView || n.window;
    }, r.init = o, r.window = r.realWindow = void 0;
    var t = void 0;
    r.realWindow = t;
    var n = void 0;
    function o(i) {
      r.realWindow = t = i;
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
      return i === r.window || (0, e.default)(i);
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
        var l = Q(r.getWindow(i));
        a.left += l.x, a.right += l.x, a.top += l.y, a.bottom += l.y;
      }
      return a;
    }, _.getPath = function(i) {
      for (var a = []; i; )
        a.push(i), i = B(i);
      return a;
    }, _.getScrollXY = Q, _.indexOfDeepestElement = function(i) {
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
    function Q(i) {
      return { x: (i = i || r.window).scrollX || i.document.documentElement.scrollLeft, y: i.scrollY || i.document.documentElement.scrollTop };
    }
    __name(Q, "Q");
    u(Q, "T");
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
    var ze = {};
    Object.defineProperty(ze, "__esModule", { value: true }), ze.default = function(i, a, l) {
      var c = i.options[l], h = c && c.origin || i.options.origin, b = (0, oe.resolveRectLike)(h, i, a, [i && a]);
      return (0, oe.rectToXY)(b) || { x: 0, y: 0 };
    };
    var Pe = {};
    function We(i) {
      return i.trim().split(/ +/);
    }
    __name(We, "We");
    u(We, "C"), Object.defineProperty(Pe, "__esModule", { value: true }), Pe.default = u(/* @__PURE__ */ __name(function i(a, l, c) {
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
    var Ke = {};
    Object.defineProperty(Ke, "__esModule", { value: true }), Ke.default = void 0, Ke.default = function(i, a) {
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
    var K = {};
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
    u(hr, "V"), Object.defineProperty(K, "__esModule", { value: true }), K.coordsToEvent = function(i) {
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
    }, K.copyCoords = function(i, a) {
      i.page = i.page || {}, i.page.x = a.page.x, i.page.y = a.page.y, i.client = i.client || {}, i.client.x = a.client.x, i.client.y = a.client.y, i.timeStamp = a.timeStamp;
    }, K.getClientXY = fr, K.getEventTargets = function(i) {
      var a = s.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [_.getActualElement(a ? a[0] : i.target), _.getActualElement(i.currentTarget)];
    }, K.getPageXY = tt, K.getPointerId = function(i) {
      return s.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, K.getPointerType = function(i) {
      return s.default.string(i.pointerType) ? i.pointerType : s.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof C.default.Touch ? "touch" : "mouse";
    }, K.getTouchPair = Mr, K.getXY = Be, K.isNativePointer = ir, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.pointerAverage = hr, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return Ye.default;
    } }), K.setCoordDeltas = function(i, a, l) {
      i.page.x = l.page.x - a.page.x, i.page.y = l.page.y - a.page.y, i.client.x = l.client.x - a.client.x, i.client.y = l.client.y - a.client.y, i.timeStamp = l.timeStamp - a.timeStamp;
    }, K.setCoordVelocity = function(i, a) {
      var l = Math.max(a.timeStamp / 1e3, 1e-3);
      i.page.x = a.page.x / l, i.page.y = a.page.y / l, i.client.x = a.client.x / l, i.client.y = a.client.y / l, i.timeStamp = l;
    }, K.setCoords = function(i, a, l) {
      var c = a.length > 1 ? hr(a) : a[0];
      tt(c, i.page), fr(c, i.client), i.timeStamp = l;
    }, K.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, K.touchAngle = function(i, a) {
      var l = a + "X", c = a + "Y", h = Mr(i), b = h[1][l] - h[0][l], E = h[1][c] - h[0][c];
      return 180 * Math.atan2(E, b) / Math.PI;
    }, K.touchBBox = function(i) {
      if (!i.length)
        return null;
      var a = Mr(i), l = Math.min(a[0].pageX, a[1].pageX), c = Math.min(a[0].pageY, a[1].pageY), h = Math.max(a[0].pageX, a[1].pageX), b = Math.max(a[0].pageY, a[1].pageY);
      return { x: l, y: c, left: l, top: c, right: h, bottom: b, width: h - l, height: b - c };
    }, K.touchDistance = function(i, a) {
      var l = a + "X", c = a + "Y", h = Mr(i), b = h[0][l] - h[1][l], E = h[0][c] - h[1][c];
      return (0, Ke.default)(b, E);
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
    var Nn = function() {
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
    or.BaseEvent = Nn, Object.defineProperty(Nn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var _e = {};
    Object.defineProperty(_e, "__esModule", { value: true }), _e.remove = _e.merge = _e.from = _e.findIndex = _e.find = _e.contains = void 0, _e.contains = function(i, a) {
      return i.indexOf(a) !== -1;
    }, _e.remove = function(i, a) {
      return i.splice(i.indexOf(a), 1);
    };
    var Gn = u(function(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        i.push(c);
      }
      return i;
    }, "K");
    _e.merge = Gn, _e.from = function(i) {
      return Gn([], i);
    };
    var Ln = u(function(i, a) {
      for (var l = 0; l < i.length; l++)
        if (a(i[l], l, i))
          return l;
      return -1;
    }, "Z");
    _e.findIndex = Ln, _e.find = function(i, a) {
      return i[Ln(i, a)];
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
    function fn(i, a) {
      return fn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, c) {
        return l.__proto__ = c, l;
      }, fn(i, a);
    }
    __name(fn, "fn");
    u(fn, "et");
    function Ir(i, a) {
      if (a && (Vr(a) === "object" || typeof a == "function"))
        return a;
      if (a !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return It(i);
    }
    __name(Ir, "Ir");
    u(Ir, "nt");
    function It(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(It, "It");
    u(It, "rt");
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
    var jn = function(i) {
      (function(y, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        y.prototype = Object.create(x && x.prototype, { constructor: { value: y, writable: true, configurable: true } }), Object.defineProperty(y, "prototype", { writable: false }), x && fn(y, x);
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
        })(this, E), qt(It(I = b.call(this, x._interaction)), "dropzone", void 0), qt(It(I), "dragEvent", void 0), qt(It(I), "relatedTarget", void 0), qt(It(I), "draggable", void 0), qt(It(I), "propagationStopped", false), qt(It(I), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? y.prev : y.cur, k = P.element, j = P.dropzone;
        return I.type = O, I.target = k, I.currentTarget = k, I.dropzone = j, I.dragEvent = x, I.relatedTarget = x.target, I.draggable = x.interactable, I.timeStamp = x.timeStamp, I;
      }
      __name(E, "E");
      return u(E, "a"), a = E, (l = [{ key: "reject", value: function() {
        var y = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = x.activeDrops, I = _e.findIndex(O, function(k) {
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
    kt.DropEvent = jn;
    var Yr = {};
    function Bn(i, a) {
      for (var l = 0; l < i.slice().length; l++) {
        var c = i.slice()[l], h = c.dropzone, b = c.element;
        a.dropzone = h, a.target = b, h.fire(a), a.propagationStopped = a.immediatePropagationStopped = false;
      }
    }
    __name(Bn, "Bn");
    u(Bn, "lt");
    function hn(i, a) {
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
    __name(hn, "hn");
    u(hn, "ut");
    function Hn(i, a, l) {
      for (var c = i.dropState, h = i.interactable, b = i.element, E = [], y = 0; y < c.activeDrops.length; y++) {
        var x = c.activeDrops[y], O = x.dropzone, I = x.element, P = x.rect;
        E.push(O.dropCheck(a, l, h, b, I, P) ? I : null);
      }
      var k = _.indexOfDeepestElement(E);
      return c.activeDrops[k] || null;
    }
    __name(Hn, "Hn");
    u(Hn, "ct");
    function io(i, a, l) {
      var c = i.dropState, h = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return l.type === "dragstart" && (h.activate = new kt.DropEvent(c, l, "dropactivate"), h.activate.target = null, h.activate.dropzone = null), l.type === "dragend" && (h.deactivate = new kt.DropEvent(c, l, "dropdeactivate"), h.deactivate.target = null, h.deactivate.dropzone = null), c.rejected || (c.cur.element !== c.prev.element && (c.prev.dropzone && (h.leave = new kt.DropEvent(c, l, "dragleave"), l.dragLeave = h.leave.target = c.prev.element, l.prevDropzone = h.leave.dropzone = c.prev.dropzone), c.cur.dropzone && (h.enter = new kt.DropEvent(c, l, "dragenter"), l.dragEnter = c.cur.element, l.dropzone = c.cur.dropzone)), l.type === "dragend" && c.cur.dropzone && (h.drop = new kt.DropEvent(c, l, "drop"), l.dropzone = c.cur.dropzone, l.relatedTarget = c.cur.element), l.type === "dragmove" && c.cur.dropzone && (h.move = new kt.DropEvent(c, l, "dropmove"), h.move.dragmove = l, l.dropzone = c.cur.dropzone)), h;
    }
    __name(io, "io");
    u(io, "ft");
    function oo(i, a) {
      var l = i.dropState, c = l.activeDrops, h = l.cur, b = l.prev;
      a.leave && b.dropzone.fire(a.leave), a.enter && h.dropzone.fire(a.enter), a.move && h.dropzone.fire(a.move), a.drop && h.dropzone.fire(a.drop), a.deactivate && Bn(c, a.deactivate), l.prev.dropzone = h.dropzone, l.prev.element = h.element;
    }
    __name(oo, "oo");
    u(oo, "dt");
    function ha(i, a) {
      var l = i.interaction, c = i.iEvent, h = i.event;
      if (c.type === "dragmove" || c.type === "dragend") {
        var b = l.dropState;
        a.dynamicDrop && (b.activeDrops = hn(a, l.element));
        var E = c, y = Hn(l, E, h);
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
              var x = (0, Pe.default)(y.listeners), O = Object.keys(x).reduce(function(I, P) {
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
            var ye = (0, ze.default)(R, F, "drag"), De = K.getPageXY(k);
            De.x += ye.x, De.y += ye.y;
            var Fe = De.x > W.left && De.x < W.right, Te = De.y > W.top && De.y < W.bottom;
            ne = Fe && Te;
          }
          var $e = R.getRect(F);
          if ($e && ae === "center") {
            var gr = $e.left + $e.width / 2, Kr = $e.top + $e.height / 2;
            ne = gr >= W.left && gr <= W.right && Kr >= W.top && Kr <= W.bottom;
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
        h.activeDrops = null, h.events = null, h.activeDrops = hn(a, l.element), h.events = io(l, 0, c), h.events.activate && (Bn(h.activeDrops, h.events.activate), a.fire("actions/drop:start", { interaction: l, dragEvent: c }));
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
    } }, getActiveDrops: hn, getDrop: Hn, getDropEvents: io, fireDropEvents: oo, defaults: { enabled: false, accept: null, overlap: "pointer" } }, dl = ma;
    Yr.default = dl;
    var L = {};
    function re(i) {
      var a = i.interaction, l = i.iEvent, c = i.phase;
      if (a.prepared.name === "gesture") {
        var h = a.pointers.map(function(O) {
          return O.pointer;
        }), b = c === "start", E = c === "end", y = a.interactable.options.deltaSource;
        if (l.touches = [h[0], h[1]], b)
          l.distance = K.touchDistance(h, y), l.box = K.touchBBox(h), l.scale = 1, l.ds = 0, l.angle = K.touchAngle(h, y), l.da = 0, a.gesture.startDistance = l.distance, a.gesture.startAngle = l.angle;
        else if (E) {
          var x = a.prevEvent;
          l.distance = x.distance, l.box = x.box, l.scale = x.scale, l.ds = 0, l.angle = x.angle, l.da = 0;
        } else
          l.distance = K.touchDistance(h, y), l.box = K.touchBBox(h), l.scale = l.distance / a.gesture.startDistance, l.angle = K.touchAngle(h, y), l.ds = l.scale - a.gesture.scale, l.da = l.angle - a.gesture.angle;
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
    } }, Re = se;
    L.default = Re;
    var Ee = {};
    function xt(i, a, l, c, h, b, E) {
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
    __name(xt, "xt");
    u(xt, "wt");
    function Nt(i) {
      var a = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.resizeAxes) {
        var c = a;
        l.interactable.options.resize.square ? (l.resizeAxes === "y" ? c.delta.x = c.delta.y : c.delta.y = c.delta.x, c.axes = "xy") : (c.axes = l.resizeAxes, l.resizeAxes === "x" ? c.delta.y = 0 : l.resizeAxes === "y" && (c.delta.x = 0));
      }
    }
    __name(Nt, "Nt");
    u(Nt, "_t"), Object.defineProperty(Ee, "__esModule", { value: true }), Ee.default = void 0;
    var At = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var a = i.actions, l = i.browser, c = i.Interactable, h = i.defaults;
      At.cursors = function(b) {
        return b.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(l), At.defaultMargin = l.supportsTouch || l.supportsPointerEvent ? 20 : 10, c.prototype.resizable = function(b) {
        return function(E, y, x) {
          return s.default.object(y) ? (E.options.resize.enabled = y.enabled !== false, E.setPerAction("resize", y), E.setOnEvents("resize", y), s.default.string(y.axis) && /^x$|^y$|^xy$/.test(y.axis) ? E.options.resize.axis = y.axis : y.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), s.default.bool(y.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = y.preserveAspectRatio : s.default.bool(y.square) && (E.options.resize.square = y.square), E) : s.default.bool(y) ? (E.options.resize.enabled = y, E) : E.options.resize;
        }(this, b, i);
      }, a.map.resize = At, a.methodDict.resize = "resizable", h.actions.resize = At.defaults;
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
              x[O] = xt(O, y.edges[O], E, a._latestPointer.eventTarget, c, h, y.margin || At.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (i.action = { name: "resize", edges: x });
          } else {
            var I = y.axis !== "y" && E.x > h.right - At.defaultMargin, P = y.axis !== "x" && E.y > h.bottom - At.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var a = i.edges, l = i.axis, c = i.name, h = At.cursors, b = null;
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
    }, defaultMargin: null }, va = At;
    Ee.default = va;
    var mr = {};
    Object.defineProperty(mr, "__esModule", { value: true }), mr.default = void 0;
    var ao = { id: "actions", install: function(i) {
      i.usePlugin(L.default), i.usePlugin(Ee.default), i.usePlugin(f.default), i.usePlugin(Yr.default);
    } };
    mr.default = ao;
    var Pt = {};
    Object.defineProperty(Pt, "__esModule", { value: true }), Pt.default = void 0;
    var _t, Xr, yi = 0, wi = { request: function(i) {
      return _t(i);
    }, cancel: function(i) {
      return Xr(i);
    }, init: function(i) {
      if (_t = i.requestAnimationFrame, Xr = i.cancelAnimationFrame, !_t)
        for (var a = ["ms", "moz", "webkit", "o"], l = 0; l < a.length; l++) {
          var c = a[l];
          _t = i["".concat(c, "RequestAnimationFrame")], Xr = i["".concat(c, "CancelAnimationFrame")] || i["".concat(c, "CancelRequestAnimationFrame")];
        }
      _t = _t && _t.bind(i), Xr = Xr && Xr.bind(i), _t || (_t = u(function(h) {
        var b = Date.now(), E = Math.max(0, 16 - (b - yi)), y = i.setTimeout(function() {
          h(b + E);
        }, E);
        return yi = b + E, y;
      }, "jt"), Xr = u(function(h) {
        return clearTimeout(h);
      }, "Mt"));
    } };
    Pt.default = wi;
    var mn = {};
    Object.defineProperty(mn, "__esModule", { value: true }), mn.default = void 0, mn.getContainer = ga, mn.getScroll = so, mn.getScrollSize = function(i) {
      return s.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, mn.getScrollSizeDelta = function(i, a) {
      var l = i.interaction, c = i.element, h = l && l.interactable.options[l.prepared.name].autoScroll;
      if (!h || !h.enabled)
        return a(), { x: 0, y: 0 };
      var b = ga(h.container, l.interactable, c), E = so(b);
      a();
      var y = so(b);
      return { x: y.x - E.x, y: y.y - E.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, Pt.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = Pt.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), Pt.default.cancel(ce.i);
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
      ce.isScrolling && (Pt.default.cancel(ce.i), ce.i = Pt.default.request(ce.scroll));
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
    mn.default = vm;
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
    var $n = {};
    Object.defineProperty($n, "__esModule", { value: true }), $n.default = u(/* @__PURE__ */ __name(function i(a) {
      var l = {};
      for (var c in a) {
        var h = a[c];
        s.default.plainObject(h) ? l[c] = i(h) : s.default.array(h) ? l[c] = _e.from(h) : l[c] = h;
      }
      return l;
    }, "i"), "t");
    var qn = {};
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
    function Fn(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Fn, "Fn");
    u(Fn, "_e"), Object.defineProperty(qn, "__esModule", { value: true }), qn.default = void 0, qn.getRectOffset = Oc;
    var zm = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Fn(this, "states", []), Fn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), Fn(this, "startDelta", void 0), Fn(this, "result", void 0), Fn(this, "endResult", void 0), Fn(this, "edges", void 0), Fn(this, "interaction", void 0), this.interaction = c, this.result = Sa();
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
          return (0, $n.default)(h);
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
    u(Oc, "Ee"), qn.default = zm;
    var Et = {};
    function Ta(i) {
      var a = i.iEvent, l = i.interaction.modification.result;
      l && (a.modifiers = l.eventProps);
    }
    __name(Ta, "Ta");
    u(Ta, "Te"), Object.defineProperty(Et, "__esModule", { value: true }), Et.addEventModifiers = Ta, Et.default = void 0, Et.makeModifier = function(i, a) {
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
      a.modification = new qn.default(a);
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
    Et.default = Dm;
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
        (function(Fe, Te) {
          if (!(Fe instanceof Te))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Ve(He(R = b.call(this, y)), "relatedTarget", null), Ve(He(R), "screenX", void 0), Ve(He(R), "screenY", void 0), Ve(He(R), "button", void 0), Ve(He(R), "buttons", void 0), Ve(He(R), "ctrlKey", void 0), Ve(He(R), "shiftKey", void 0), Ve(He(R), "altKey", void 0), Ve(He(R), "metaKey", void 0), Ve(He(R), "page", void 0), Ve(He(R), "client", void 0), Ve(He(R), "delta", void 0), Ve(He(R), "rect", void 0), Ve(He(R), "x0", void 0), Ve(He(R), "y0", void 0), Ve(He(R), "t0", void 0), Ve(He(R), "dt", void 0), Ve(He(R), "duration", void 0), Ve(He(R), "clientX0", void 0), Ve(He(R), "clientY0", void 0), Ve(He(R), "velocity", void 0), Ve(He(R), "speed", void 0), Ve(He(R), "swipe", void 0), Ve(He(R), "axes", void 0), Ve(He(R), "preEnd", void 0), P = P || y.element;
        var F = y.interactable, Z = (F && F.options || uo.defaults).deltaSource, W = (0, ze.default)(F, P, O), ne = I === "start", ae = I === "end", ye = ne ? He(R) : y.prevEvent, De = ne ? y.coords.start : ae ? { page: ye.page, client: ye.client, timeStamp: y.coords.cur.timeStamp } : y.coords.cur;
        return R.page = (0, q.default)({}, De.page), R.client = (0, q.default)({}, De.client), R.rect = (0, q.default)({}, y.rect), R.timeStamp = De.timeStamp, ae || (R.page.x -= W.x, R.page.y -= W.y, R.client.x -= W.x, R.client.y -= W.y), R.ctrlKey = x.ctrlKey, R.altKey = x.altKey, R.shiftKey = x.shiftKey, R.metaKey = x.metaKey, R.button = x.button, R.buttons = x.buttons, R.target = P, R.currentTarget = P, R.preEnd = k, R.type = j || O + (I || ""), R.interactable = F, R.t0 = ne ? y.pointers[y.pointers.length - 1].downTime : ye.t0, R.x0 = y.coords.start.page.x - W.x, R.y0 = y.coords.start.page.y - W.y, R.clientX0 = y.coords.start.client.x - W.x, R.clientY0 = y.coords.start.client.y - W.y, R.delta = ne || ae ? { x: 0, y: 0 } : { x: R[Z].x - ye[Z].x, y: R[Z].y - ye[Z].y }, R.dt = y.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, q.default)({}, y.coords.velocity[Z]), R.speed = (0, Ke.default)(R.velocity.x, R.velocity.y), R.swipe = ae || I === "inertiastart" ? R.getSwipe() : null, R;
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
    function Qe(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(Qe, "Qe");
    u(Qe, "He"), Object.defineProperty(Ft, "__esModule", { value: true }), Ft.Interaction = void 0, Object.defineProperty(Ft, "PointerInfo", { enumerable: true, get: function() {
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
        })(this, i), Qe(this, "interactable", null), Qe(this, "element", null), Qe(this, "rect", null), Qe(this, "_rects", void 0), Qe(this, "edges", null), Qe(this, "_scopeFire", void 0), Qe(this, "prepared", { name: null, axis: null, edges: null }), Qe(this, "pointerType", void 0), Qe(this, "pointers", []), Qe(this, "downEvent", null), Qe(this, "downPointer", {}), Qe(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Qe(this, "prevEvent", null), Qe(this, "pointerIsDown", false), Qe(this, "pointerWasMoved", false), Qe(this, "_interacting", false), Qe(this, "_ending", false), Qe(this, "_stopped", true), Qe(this, "_proxy", null), Qe(this, "simulation", null), Qe(this, "doMove", (0, ar.warnOnce)(function(k) {
          this.move(k);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Qe(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), Qe(this, "_id", Bm++), this._scopeFire = E, this.pointerType = b;
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
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, y = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Ke.default)(E, y) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(c), I = { pointer: c, pointerIndex: O, pointerInfo: this.pointers[O], event: h, type: "move", eventTarget: b, dx: E, dy: y, duplicate: x, interaction: this };
        x || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), x || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(c) {
        c && c.event || K.setZeroCoords(this.coords.delta), (c = (0, q.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, c || {})).phase = "move", this._doPhase(c);
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
        var h = K.getPointerId(c);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : _e.findIndex(this.pointers, function(b) {
          return b.id === h;
        });
      } }, { key: "getPointerInfo", value: function(c) {
        return this.pointers[this.getPointerIndex(c)];
      } }, { key: "updatePointer", value: function(c, h, b, E) {
        var y = K.getPointerId(c), x = this.getPointerIndex(c), O = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(h.type)), O ? O.pointer = c : (O = new po.PointerInfo(y, c, h, null, null), x = this.pointers.length, this.pointers.push(O)), K.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, O.downTime = this.coords.cur.timeStamp, O.downTarget = b, K.pointerExtend(this.downPointer, c), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = h, this.pointerWasMoved = false)), this._updateLatestPointer(c, h, b), this._scopeFire("interactions:update-pointer", { pointer: c, event: h, eventTarget: b, down: E, pointerInfo: O, pointerIndex: x, interaction: this }), x;
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
    var Un = {};
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
    u(wl, "on"), Object.defineProperty(Un, "__esModule", { value: true }), Un.addTotal = Pc, Un.applyPending = yl, Un.default = void 0, Ft._ProxyMethods.offsetBy = "";
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
    Un.default = Fm;
    var Si = {};
    function Um(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Um, "Um");
    u(Um, "un");
    function bt(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(bt, "bt");
    u(bt, "cn"), Object.defineProperty(Si, "__esModule", { value: true }), Si.default = Si.InertiaState = void 0;
    var zc = function() {
      function i(c) {
        (function(h, b) {
          if (!(h instanceof b))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), bt(this, "active", false), bt(this, "isModified", false), bt(this, "smoothEnd", false), bt(this, "allowResume", false), bt(this, "modification", void 0), bt(this, "modifierCount", 0), bt(this, "modifierArg", void 0), bt(this, "startCoords", void 0), bt(this, "t0", 0), bt(this, "v0", 0), bt(this, "te", 0), bt(this, "targetOffset", void 0), bt(this, "modifiedOffset", void 0), bt(this, "currentOffset", void 0), bt(this, "lambda_v0", 0), bt(this, "one_ve_v0", 0), bt(this, "timeout", void 0), bt(this, "interaction", void 0), this.interaction = c;
      }
      __name(i, "i");
      u(i, "t");
      var a, l;
      return a = i, (l = [{ key: "start", value: function(c) {
        var h = this.interaction, b = Ia(h);
        if (!b || !b.enabled)
          return false;
        var E = h.coords.velocity.client, y = (0, Ke.default)(E.x, E.y), x = this.modification || (this.modification = new qn.default(h));
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
        this.timeout = Pt.default.request(function() {
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
        y.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), y.updatePointer(h, b, E, true), y._doPhase({ interaction: y, event: b, phase: "resume" }), (0, K.copyCoords)(y.coords.prev, y.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Pt.default.cancel(this.timeout);
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
      i.usePlugin(Un.default), i.usePlugin(Et.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, a.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
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
    }, "interactions:action-resume": Et.addEventModifiers, "interactions:action-inertiastart": Et.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
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
        var b = (0, Pe.default)(c, h);
        for (c in b)
          this.types[c] = _e.merge(this.types[c] || [], b[c]);
      } }, { key: "off", value: function(c, h) {
        var b = (0, Pe.default)(c, h);
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
      return a.getPointerAverage = K.pointerAverage, a.getTouchBBox = K.touchBBox, a.getTouchDistance = K.touchDistance, a.getTouchAngle = K.touchAngle, a.getElementRect = _.getElementRect, a.getElementClientRect = _.getElementClientRect, a.matchesSelector = _.matchesSelector, a.closest = _.closest, a.globalEvents = {}, a.version = "1.10.14", a.scope = i, a.use = function(l, c) {
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
    var Qm = function() {
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
          y === "listeners" && this.updatePerActionListeners(c, x.listeners, O), s.default.array(O) ? x[y] = _e.from(O) : s.default.plainObject(O) ? (x[y] = (0, q.default)(x[y] || {}, (0, $n.default)(O)), s.default.object(b.perAction[y]) && "enabled" in b.perAction[y] && (x[y].enabled = O.enabled !== false)) : s.default.bool(O) && s.default.object(b.perAction[y]) ? x[y].enabled = O : x[y] = O;
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
        var y = c === "on" ? "add" : "remove", x = (0, Pe.default)(h, b);
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
        for (var b in s.default.object(c) || (c = {}), this.options = (0, $n.default)(h.base), this._actions.methodDict) {
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
    Aa.Interactable = Qm;
    var Pa = {};
    function Km(i, a) {
      for (var l = 0; l < a.length; l++) {
        var c = a[l];
        c.enumerable = c.enumerable || false, c.configurable = true, "value" in c && (c.writable = true), Object.defineProperty(i, c.key, c);
      }
    }
    __name(Km, "Km");
    u(Km, "Mn");
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
          var E = b.interactable, y = E.target, x = E._context, O = s.default.string(y) ? h.selectorMap[y] : y[h.scope.id], I = _e.findIndex(O, function(P) {
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
        var x = _e.find(y, function(O) {
          return O.context === b && (E || O.interactable.inContext(c));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(c, h) {
        for (var b = 0; b < this.list.length; b++) {
          var E = this.list[b], y = void 0;
          if ((s.default.string(E.target) ? s.default.element(c) && _.matchesSelector(c, E.target) : c === E.target) && E.inContext(c) && (y = h(E)), y !== void 0)
            return y;
        }
      } }]) && Km(a.prototype, l), Object.defineProperty(a, "prototype", { writable: false }), i;
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
        var ne = c[k], ae = _e.find(ne, function(ye) {
          return ye.selector === I && ye.context === P;
        });
        ae || (ae = { selector: I, context: P, listeners: [] }, ne.push(ae)), ae.listeners.push([j, F]);
      }, removeDelegate: function(I, P, k, j, R) {
        var F, Z = go(R), W = c[k], ne = false;
        if (W)
          for (F = W.length - 1; F >= 0; F--) {
            var ae = W[F];
            if (ae.selector === I && ae.context === P) {
              for (var ye = ae.listeners, De = ye.length - 1; De >= 0; De--) {
                var Fe = Tl(ye[De], 2), Te = Fe[0], $e = Fe[1], gr = $e.capture, Kr = $e.passive;
                if (Te === j && gr === Z.capture && Kr === Z.passive) {
                  ye.splice(De, 1), ye.length || (W.splice(F, 1), y(P, k, x), y(P, k, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: O, delegatedEvents: c, documents: h, targets: l, supportsOptions: false, supportsPassive: false };
      function E(I, P, k, j) {
        var R = go(j), F = _e.find(l, function(Z) {
          return Z.eventTarget === I;
        });
        F || (F = { eventTarget: I, events: {} }, l.push(F)), F.events[P] || (F.events[P] = []), I.addEventListener && !_e.contains(F.events[P], k) && (I.addEventListener(P, k, b.supportsOptions ? R : R.capture), F.events[P].push(k));
      }
      __name(E, "E");
      u(E, "s");
      function y(I, P, k, j) {
        var R = go(j), F = _e.findIndex(l, function(De) {
          return De.eventTarget === I;
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
        for (var k = go(P), j = new tv(I), R = c[I.type], F = Tl(K.getEventTargets(I), 1)[0], Z = F; s.default.element(Z); ) {
          for (var W = 0; W < R.length; W++) {
            var ne = R[W], ae = ne.selector, ye = ne.context;
            if (_.matchesSelector(Z, ae) && _.nodeContains(ye, F) && _.nodeContains(ye, Z)) {
              var De = ne.listeners;
              j.currentTarget = Z;
              for (var Fe = 0; Fe < De.length; Fe++) {
                var Te = Tl(De[Fe], 2), $e = Te[0], gr = Te[1], Kr = gr.capture, Fl = gr.passive;
                Kr === k.capture && Fl === k.passive && $e(j);
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
        var c = a.interactions.list, h = K.getPointerType(l), b = Lc(K.getEventTargets(l), 2), E = b[0], y = b[1], x = [];
        if (/^touch/.test(l.type)) {
          a.prevTouchTime = a.now();
          for (var O = 0; O < l.changedTouches.length; O++) {
            var I = l.changedTouches[O], P = { pointer: I, pointerId: K.getPointerId(I), pointerType: h, eventType: l.type, eventTarget: E, curEventTarget: y, scope: a }, k = Hc(P);
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
            var F = { pointer: l, pointerId: K.getPointerId(l), pointerType: h, eventType: l.type, curEventTarget: y, eventTarget: E, scope: a }, Z = Hc(F);
            x.push([F.pointer, F.eventTarget, F.curEventTarget, Z]);
          }
        }
        for (var W = 0; W < x.length; W++) {
          var ne = Lc(x[W], 4), ae = ne[0], ye = ne[1], De = ne[2];
          ne[3][i](ae, l, ye, De);
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
      for (; !Object.prototype.hasOwnProperty.call(i, a) && (i = vn(i)) !== null; )
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
    function vn(i) {
      return vn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, vn(i);
    }
    __name(vn, "vn");
    u(vn, "fr");
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
    function St(i, a, l) {
      return a in i ? Object.defineProperty(i, a, { value: l, enumerable: true, configurable: true, writable: true }) : i[a] = l, i;
    }
    __name(St, "St");
    u(St, "hr"), Object.defineProperty(bo, "__esModule", { value: true }), bo.Scope = void 0, bo.initScope = Uc;
    var pv = function() {
      function i() {
        var a = this;
        $c(this, i), St(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), St(this, "isInitialized", false), St(this, "listenerMaps", []), St(this, "browser", $.default), St(this, "defaults", (0, $n.default)(uo.defaults)), St(this, "Eventable", ho.Eventable), St(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), St(this, "interactStatic", (0, xl.createInteractStatic)(this)), St(this, "InteractEvent", co.InteractEvent), St(this, "Interactable", void 0), St(this, "interactables", new Pa.InteractableSet(this)), St(this, "_win", void 0), St(this, "document", void 0), St(this, "window", void 0), St(this, "documents", []), St(this, "_plugins", { list: [], map: {} }), St(this, "onWindowUnload", function(c) {
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
            var x, O = vn(h);
            if (b) {
              var I = vn(this).constructor;
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
            return yo(vn(y.prototype), "set", this).call(this, x), l.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            yo(vn(y.prototype), "unset", this).call(this);
            var x = l.interactables.list.indexOf(this);
            x < 0 || (yo(vn(y.prototype), "unset", this).call(this), l.interactables.list.splice(x, 1), l.fire("interactable:unset", { interactable: this }));
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
      return i.isInitialized = true, s.default.window(a) && r.init(a), C.default.init(a), $.default.init(a), Pt.default.init(a), i.window = a, i.document = a.document, i.usePlugin(Da.default), i.usePlugin(_a.default), i;
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
    var Qc = { start: function(i) {
      var a = i.state, l = i.rect, c = i.edges, h = i.pageCoords, b = a.options.ratio, E = a.options, y = E.equalDelta, x = E.modifiers;
      b === "preserve" && (b = l.width / l.height), a.startCoords = (0, q.default)({}, h), a.startRect = (0, q.default)({}, l), a.ratio = b, a.equalDelta = y;
      var O = a.linkedEdges = { top: c.top || c.left && !c.bottom, left: c.left || c.top && !c.right, bottom: c.bottom || c.right && !c.top, right: c.right || c.bottom && !c.left };
      if (a.xIsPrimaryAxis = !(!c.left && !c.right), a.equalDelta) {
        var I = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        a.edgeSign = { x: I, y: I };
      } else
        a.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, q.default)(i.edges, O), x && x.length) {
        var P = new qn.default(i.interaction);
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
    u(yv, "Yr"), Ti.aspectRatio = Qc;
    var wv = (0, Et.makeModifier)(Qc, "aspectRatio");
    Ti.default = wv;
    var Wn = {};
    Object.defineProperty(Wn, "__esModule", { value: true }), Wn.default = void 0;
    var Kc = u(function() {
    }, "Ur");
    Kc._defaults = {};
    var xv = Kc;
    Wn.default = xv;
    var Rl = {};
    Object.defineProperty(Rl, "__esModule", { value: true }), Object.defineProperty(Rl, "default", { enumerable: true, get: function() {
      return Wn.default;
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
    var Ev = (0, Et.makeModifier)(Jc, "restrict");
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
    var Sv = (0, Et.makeModifier)(np, "restrictEdges");
    Nr.default = Sv;
    var Ci = {};
    Object.defineProperty(Ci, "__esModule", { value: true }), Ci.restrictRect = Ci.default = void 0;
    var Tv = (0, q.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Gt.restrict.defaults), ip = { start: Gt.restrict.start, set: Gt.restrict.set, defaults: Tv };
    Ci.restrictRect = ip;
    var Cv = (0, Et.makeModifier)(ip, "restrictRect");
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
    var Iv = (0, Et.makeModifier)(op, "restrictSize");
    Oi.default = Iv;
    var kl = {};
    Object.defineProperty(kl, "__esModule", { value: true }), Object.defineProperty(kl, "default", { enumerable: true, get: function() {
      return Wn.default;
    } });
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.snap = gn.default = void 0;
    var ap = { start: function(i) {
      var a, l = i.interaction, c = i.interactable, h = i.element, b = i.rect, E = i.state, y = i.startOffset, x = E.options, O = x.offsetWithOrigin ? function(k) {
        var j = k.interaction.element;
        return (0, oe.rectToXY)((0, oe.resolveRectLike)(k.state.options.origin, null, null, [j])) || (0, ze.default)(k.interactable, j, k.interaction.prepared.name);
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
      var a = i.interaction, l = i.coords, c = i.state, h = c.options, b = c.offsets, E = (0, ze.default)(a.interactable, a.element, a.prepared.name), y = (0, q.default)({}, l), x = [];
      h.offsetWithOrigin || (y.x -= E.x, y.y -= E.y);
      for (var O = 0; O < b.length; O++)
        for (var I = b[O], P = y.x - I.x, k = y.y - I.y, j = 0, R = h.targets.length; j < R; j++) {
          var F, Z = h.targets[j];
          (F = s.default.func(Z) ? Z(P, k, a._proxy, I, j) : Z) && x.push({ x: (s.default.number(F.x) ? F.x : P) + I.x, y: (s.default.number(F.y) ? F.y : k) + I.y, range: s.default.number(F.range) ? F.range : h.range, source: Z, index: j, offset: I });
        }
      for (var W = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < x.length; ne++) {
        var ae = x[ne], ye = ae.range, De = ae.x - y.x, Fe = ae.y - y.y, Te = (0, Ke.default)(De, Fe), $e = Te <= ye;
        ye === 1 / 0 && W.inRange && W.range !== 1 / 0 && ($e = false), W.target && !($e ? W.inRange && ye !== 1 / 0 ? Te / ye < W.distance / W.range : ye === 1 / 0 && W.range !== 1 / 0 || Te < W.distance : !W.inRange && Te < W.distance) || (W.target = ae, W.distance = Te, W.range = ye, W.inRange = $e, W.delta.x = De, W.delta.y = Fe);
      }
      return W.inRange && (l.x = W.target.x, l.y = W.target.y), c.closest = W, W;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    gn.snap = ap;
    var Av = (0, Et.makeModifier)(ap, "snap");
    gn.default = Av;
    var Qr = {};
    function sp(i, a) {
      (a == null || a > i.length) && (a = i.length);
      for (var l = 0, c = Array(a); l < a; l++)
        c[l] = i[l];
      return c;
    }
    __name(sp, "sp");
    u(sp, "yo"), Object.defineProperty(Qr, "__esModule", { value: true }), Qr.snapSize = Qr.default = void 0;
    var lp = { start: function(i) {
      var a = i.state, l = i.edges, c = a.options;
      if (!l)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }], offset: c.offset || "self", origin: { x: 0, y: 0 }, range: c.range } }, a.targetFields = a.targetFields || [["width", "height"], ["x", "y"]], gn.snap.start(i), a.offsets = i.state.offsets, i.state = a;
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
                var ye, De, Fe = [], Te = true, $e = false;
                try {
                  for (ae = ae.call(W); !(Te = (ye = ae.next()).done) && (Fe.push(ye.value), !ne || Fe.length !== ne); Te = true)
                    ;
                } catch (gr) {
                  $e = true, De = gr;
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
      var Z = gn.snap.set(i);
      return h.options = E, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Qr.snapSize = lp;
    var Pv = (0, Et.makeModifier)(lp, "snapSize");
    Qr.default = Pv;
    var Mi = {};
    Object.defineProperty(Mi, "__esModule", { value: true }), Mi.snapEdges = Mi.default = void 0;
    var up = { start: function(i) {
      var a = i.edges;
      return a ? (i.state.targetFields = i.state.targetFields || [[a.left ? "left" : "right", a.top ? "top" : "bottom"]], Qr.snapSize.start(i)) : null;
    }, set: Qr.snapSize.set, defaults: (0, q.default)((0, $n.default)(Qr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Mi.snapEdges = up;
    var _v = (0, Et.makeModifier)(up, "snapEdges");
    Mi.default = _v;
    var Nl = {};
    Object.defineProperty(Nl, "__esModule", { value: true }), Object.defineProperty(Nl, "default", { enumerable: true, get: function() {
      return Wn.default;
    } });
    var Gl = {};
    Object.defineProperty(Gl, "__esModule", { value: true }), Object.defineProperty(Gl, "default", { enumerable: true, get: function() {
      return Wn.default;
    } });
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.default = void 0;
    var zv = { aspectRatio: Ti.default, restrictEdges: Nr.default, restrict: Gt.default, restrictRect: Ci.default, restrictSize: Oi.default, snapEdges: Mi.default, snap: gn.default, snapSize: Qr.default, spring: Nl.default, avoid: Rl.default, transform: Gl.default, rubberband: kl.default };
    Ii.default = zv;
    var Ba = {};
    Object.defineProperty(Ba, "__esModule", { value: true }), Ba.default = void 0;
    var Rv = { id: "modifiers", install: function(i) {
      var a = i.interactStatic;
      for (var l in i.usePlugin(Et.default), i.usePlugin(ja.default), a.modifiers = Ii.default, Ii.default) {
        var c = Ii.default[l], h = c._defaults, b = c._methods;
        h._methods = b, i.defaults.perAction[l] = h;
      }
    } }, Dv = Rv;
    Ba.default = Dv;
    var Vn = {};
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
    u(Ha, "Ro"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = Vn.PointerEvent = void 0;
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
        }(this, E), j = b.call(this, P), K.pointerExtend(Bl(j), O), O !== x && K.pointerExtend(Bl(j), x), j.timeStamp = k, j.originalEvent = O, j.type = y, j.pointerId = K.getPointerId(x), j.pointerType = K.getPointerType(x), j.target = I, j.currentTarget = null, y === "tap") {
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
    Vn.PointerEvent = Vn.default = Gv;
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
      i.duplicate || l.pointerIsDown && !l.pointerWasMoved || (l.pointerIsDown && Hl(i), bn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "move" }, a));
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
            bn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "hold" }, c);
          }, R);
        }
      })(i, a), bn(i, a);
    }, "interactions:up": function(i, a) {
      Hl(i), bn(i, a), function(l, c) {
        var h = l.interaction, b = l.pointer, E = l.event, y = l.eventTarget;
        h.pointerWasMoved || bn({ interaction: h, eventTarget: y, pointer: b, event: E, type: "tap" }, c);
      }(i, a);
    }, "interactions:cancel": function(i, a) {
      Hl(i), bn(i, a);
    } }, PointerEvent: Vn.PointerEvent, fire: bn, collectEventTargets: cp, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function bn(i, a) {
      var l = i.interaction, c = i.pointer, h = i.event, b = i.eventTarget, E = i.type, y = i.targets, x = y === void 0 ? cp(i, a) : y, O = new Vn.PointerEvent(E, c, h, b, l, a.now());
      a.fire("pointerEvents:new", { pointerEvent: O });
      for (var I = { interaction: l, pointer: c, event: h, eventTarget: b, targets: x, type: E, pointerEvent: O }, P = 0; P < x.length; P++) {
        var k = x[P];
        for (var j in k.props || {})
          O[j] = k.props[j];
        var R = (0, ze.default)(k.eventable, k.node);
        if (O._subtractOrigin(R), O.eventable = k.eventable, O.currentTarget = k.node, k.eventable.fire(O), O._addOrigin(R), O.immediatePropagationStopped || O.propagationStopped && P + 1 < x.length && x[P + 1].node !== O.currentTarget)
          break;
      }
      if (a.fire("pointerEvents:fired", I), E === "tap") {
        var F = O.double ? bn({ interaction: l, pointer: c, event: h, eventTarget: b, type: "doubletap" }, a) : O;
        l.prevTap = F, l.tapTime = F.timeStamp;
      }
      return O;
    }
    __name(bn, "bn");
    u(bn, "Yo");
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
          for (var E = s.default.string(c.target) ? _e.from(c._context.querySelectorAll(c.target)) : [c.target], y = b.window.Promise, x = y ? [] : null, O = function() {
            var P = E[I], k = c.getRect(P);
            if (!k)
              return "break";
            var j = _e.find(b.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === c && ne.element === P && ne.prepared.name === h.name;
            }), R = void 0;
            if (j)
              j.move(), x && (R = j._reflowPromise || new y(function(ne) {
                j._reflowResolve = ne;
              }));
            else {
              var F = (0, oe.tlbrToXywh)(k), Z = { page: { x: F.x, y: F.y }, client: { x: F.x, y: F.y }, timeStamp: b.now() }, W = K.coordsToEvent(Z);
              R = function(ne, ae, ye, De, Fe) {
                var Te = ne.interactions.new({ pointerType: "reflow" }), $e = { interaction: Te, event: Fe, pointer: Fe, eventTarget: ye, phase: "reflow" };
                Te.interactable = ae, Te.element = ye, Te.prevEvent = Fe, Te.updatePointer(Fe, Fe, ye, true), K.setZeroCoords(Te.coords.delta), (0, ar.copyAction)(Te.prepared, De), Te._doPhase($e);
                var gr = ne.window.Promise, Kr = gr ? new gr(function(Fl) {
                  Te._reflowResolve = Fl;
                }) : void 0;
                return Te._reflowPromise = Kr, Te.start(De, ae, ye), Te._interacting ? (Te.move($e), Te.end(Fe)) : (Te.stop(), Te._reflowResolve()), Te.removePointer(Fe, Fe), Kr;
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
      l.pointerType === "reflow" && (l._reflowResolve && l._reflowResolve(), _e.remove(a.interactions.list, l));
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
    u($l, "ai"), Object.defineProperty(vr.exports, "__esModule", { value: true }), vr.exports.default = void 0, pt.default.use(Ei.default), pt.default.use(Un.default), pt.default.use(Ua.default), pt.default.use(Si.default), pt.default.use(Ba.default), pt.default.use(Ea.default), pt.default.use(mr.default), pt.default.use(mn.default), pt.default.use(Eo.default);
    var Xv = pt.default;
    if (vr.exports.default = Xv, $l(vr) === "object" && vr)
      try {
        vr.exports = pt.default;
      } catch (i) {
      }
    pt.default.default = pt.default, vr = vr.exports;
    var Yn = { exports: {} };
    function ql(i) {
      return ql = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
        return typeof a;
      } : function(a) {
        return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
      }, ql(i);
    }
    __name(ql, "ql");
    u(ql, "ui"), Object.defineProperty(Yn.exports, "__esModule", { value: true }), Yn.exports.default = void 0;
    var Zv = vr.default;
    if (Yn.exports.default = Zv, ql(Yn) === "object" && Yn)
      try {
        Yn.exports = vr.default;
      } catch (i) {
      }
    return vr.default.default = vr.default, Yn.exports;
  });
});
var nm = Tt((rm, vc) => {
  (function(e) {
    "use strict";
    var r = /* @__PURE__ */ __name(function() {
    }, "r"), t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function(d) {
      return setTimeout(d, 16);
    };
    function n() {
      var d = this;
      d.reads = [], d.writes = [], d.raf = t.bind(e), r("initialized", d);
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
    var m = e.fastdom = e.fastdom || new n();
    typeof define == "function" ? define(function() {
      return m;
    }) : typeof vc == "object" && (vc.exports = m);
  })(typeof window != "undefined" ? window : rm);
});
var sm = Tt((gc, am) => {
  (function(e) {
    "use strict";
    var r = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, t = Math.sinh || function(d) {
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
      return new m(Math.sin(d) * r(f), Math.cos(d) * t(f));
    }, cos: function() {
      var d = this.re, f = this.im;
      return new m(Math.cos(d) * r(f), -Math.sin(d) * t(f));
    }, tan: function() {
      var d = 2 * this.re, f = 2 * this.im, g = Math.cos(d) + r(f);
      return new m(Math.sin(d) / g, t(f) / g);
    }, cot: function() {
      var d = 2 * this.re, f = 2 * this.im, g = Math.cos(d) - r(f);
      return new m(-Math.sin(d) / g, t(f) / g);
    }, sec: function() {
      var d = this.re, f = this.im, g = 0.5 * r(2 * f) + 0.5 * Math.cos(2 * d);
      return new m(Math.cos(d) * r(f) / g, Math.sin(d) * t(f) / g);
    }, csc: function() {
      var d = this.re, f = this.im, g = 0.5 * r(2 * f) - 0.5 * Math.cos(2 * d);
      return new m(Math.sin(d) * r(f) / g, -Math.cos(d) * t(f) / g);
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
      return new m(t(d) * Math.cos(f), r(d) * Math.sin(f));
    }, cosh: function() {
      var d = this.re, f = this.im;
      return new m(r(d) * Math.cos(f), t(d) * Math.sin(f));
    }, tanh: function() {
      var d = 2 * this.re, f = 2 * this.im, g = r(d) + Math.cos(f);
      return new m(t(d) / g, Math.sin(f) / g);
    }, coth: function() {
      var d = 2 * this.re, f = 2 * this.im, g = r(d) - Math.cos(f);
      return new m(t(d) / g, -Math.sin(f) / g);
    }, csch: function() {
      var d = this.re, f = this.im, g = Math.cos(2 * f) - r(2 * d);
      return new m(-2 * t(d) * Math.cos(f) / g, 2 * r(d) * Math.sin(f) / g);
    }, sech: function() {
      var d = this.re, f = this.im, g = Math.cos(2 * f) + r(2 * d);
      return new m(2 * r(d) * Math.cos(f) / g, -2 * t(d) * Math.sin(f) / g);
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
    }) : typeof gc == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, am.exports = m) : e.Complex = m;
  })(gc);
});
var Mn = Lt(yp());
var Pd = Lt(en());
function tu(e, r, t, n) {
  function o(s) {
    return s instanceof t ? s : new t(function(p) {
      p(s);
    });
  }
  __name(o, "o");
  return u(o, "adopt"), new (t || (t = Promise))(function(s, p) {
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
    u(d, "step"), d((n = n.apply(e, r || [])).next());
  });
}
__name(tu, "tu");
u(tu, "__awaiter");
function ru(e, r) {
  var t = { label: 0, sent: function() {
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
    for (; t; )
      try {
        if (n = 1, o && (s = d[0] & 2 ? o.return : d[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, d[1])).done)
          return s;
        switch (o = 0, s && (d = [d[0] & 2, s.value]), d[0]) {
          case 0:
          case 1:
            s = d;
            break;
          case 4:
            return t.label++, { value: d[1], done: false };
          case 5:
            t.label++, o = d[1], d = [0];
            continue;
          case 7:
            d = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (d[0] === 6 || d[0] === 2)) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!s || d[1] > s[0] && d[1] < s[3])) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < s[1]) {
              t.label = s[1], s = d;
              break;
            }
            if (s && t.label < s[2]) {
              t.label = s[2], t.ops.push(d);
              break;
            }
            s[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        d = r.call(e, t);
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
__name(ru, "ru");
u(ru, "__generator");
function cs(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), o, s = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
      s.push(o.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return s;
}
__name(cs, "cs");
u(cs, "__read");
function Jn(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, o = r.length, s; n < o; n++)
      (s || !(n in r)) && (s || (s = Array.prototype.slice.call(r, 0, n)), s[n] = r[n]);
  return e.concat(s || Array.prototype.slice.call(r));
}
__name(Jn, "Jn");
u(Jn, "__spreadArray");
var Cb = { withStackTrace: false };
var Ed = u(function(e, r, t) {
  t === void 0 && (t = Cb);
  var n = r.isOk() ? { type: "Ok", value: r.value } : { type: "Err", value: r.error }, o = t.withStackTrace ? new Error().stack : void 0;
  return { data: n, message: e, stack: o };
}, "createNeverThrowError");
var zi = function() {
  function e(r) {
    this._promise = r;
  }
  __name(e, "e");
  return u(e, "ResultAsync"), e.fromSafePromise = function(r) {
    var t = r.then(function(n) {
      return new Qn(n);
    });
    return new e(t);
  }, e.fromPromise = function(r, t) {
    var n = r.then(function(o) {
      return new Qn(o);
    }).catch(function(o) {
      return new Kn(t(o));
    });
    return new e(n);
  }, e.combine = function(r) {
    return Mb(r);
  }, e.combineWithAllErrors = function(r) {
    return Ib(r);
  }, e.prototype.map = function(r) {
    var t = this;
    return new e(this._promise.then(function(n) {
      return tu(t, void 0, void 0, function() {
        var o;
        return ru(this, function(s) {
          switch (s.label) {
            case 0:
              return n.isErr() ? [2, new Kn(n.error)] : (o = Qn.bind, [4, r(n.value)]);
            case 1:
              return [2, new (o.apply(Qn, [void 0, s.sent()]))()];
          }
        });
      });
    }));
  }, e.prototype.mapErr = function(r) {
    var t = this;
    return new e(this._promise.then(function(n) {
      return tu(t, void 0, void 0, function() {
        var o;
        return ru(this, function(s) {
          switch (s.label) {
            case 0:
              return n.isOk() ? [2, new Qn(n.value)] : (o = Kn.bind, [4, r(n.error)]);
            case 1:
              return [2, new (o.apply(Kn, [void 0, s.sent()]))()];
          }
        });
      });
    }));
  }, e.prototype.andThen = function(r) {
    return new e(this._promise.then(function(t) {
      if (t.isErr())
        return new Kn(t.error);
      var n = r(t.value);
      return n instanceof e ? n._promise : n;
    }));
  }, e.prototype.orElse = function(r) {
    var t = this;
    return new e(this._promise.then(function(n) {
      return tu(t, void 0, void 0, function() {
        return ru(this, function(o) {
          return n.isErr() ? [2, r(n.error)] : [2, new Qn(n.value)];
        });
      });
    }));
  }, e.prototype.match = function(r, t) {
    return this._promise.then(function(n) {
      return n.match(r, t);
    });
  }, e.prototype.unwrapOr = function(r) {
    return this._promise.then(function(t) {
      return t.unwrapOr(r);
    });
  }, e.prototype.then = function(r, t) {
    return this._promise.then(r, t);
  }, e;
}();
var xd = u(function(e) {
  return new zi(Promise.resolve(new Kn(e)));
}, "errAsync");
var tw = zi.fromPromise;
var rw = zi.fromSafePromise;
var Ob = u(function(e) {
  return function(r) {
    return Jn(Jn([], cs(r), false), [e], false);
  };
}, "appendValueToEndOfList");
var Sd = u(function(e) {
  return e.reduce(function(r, t) {
    return r.isOk() ? t.isErr() ? ti(t.error) : r.map(Ob(t.value)) : r;
  }, ei([]));
}, "combineResultList");
var Mb = u(function(e) {
  return zi.fromSafePromise(Promise.all(e)).andThen(Sd);
}, "combineResultAsyncList");
var Td = u(function(e) {
  return e.reduce(function(r, t) {
    return t.isErr() ? r.isErr() ? ti(Jn(Jn([], cs(r.error), false), [t.error], false)) : ti([t.error]) : r.isErr() ? r : ei(Jn(Jn([], cs(r.value), false), [t.value], false));
  }, ei([]));
}, "combineResultListWithAllErrors");
var Ib = u(function(e) {
  return zi.fromSafePromise(Promise.all(e)).andThen(Td);
}, "combineResultAsyncListWithAllErrors");
var Ao;
(function(e) {
  function r(o, s) {
    return function() {
      for (var p = [], v = 0; v < arguments.length; v++)
        p[v] = arguments[v];
      try {
        var m = o.apply(void 0, Jn([], cs(p), false));
        return ei(m);
      } catch (d) {
        return ti(s ? s(d) : d);
      }
    };
  }
  __name(r, "r");
  u(r, "fromThrowable"), e.fromThrowable = r;
  function t(o) {
    return Sd(o);
  }
  __name(t, "t");
  u(t, "combine"), e.combine = t;
  function n(o) {
    return Td(o);
  }
  __name(n, "n");
  u(n, "combineWithAllErrors"), e.combineWithAllErrors = n;
})(Ao || (Ao = {}));
var ei = u(function(e) {
  return new Qn(e);
}, "ok");
var ti = u(function(e) {
  return new Kn(e);
}, "err");
var Qn = function() {
  function e(r) {
    this.value = r;
  }
  __name(e, "e");
  return u(e, "Ok"), e.prototype.isOk = function() {
    return true;
  }, e.prototype.isErr = function() {
    return !this.isOk();
  }, e.prototype.map = function(r) {
    return ei(r(this.value));
  }, e.prototype.mapErr = function(r) {
    return ei(this.value);
  }, e.prototype.andThen = function(r) {
    return r(this.value);
  }, e.prototype.orElse = function(r) {
    return ei(this.value);
  }, e.prototype.asyncAndThen = function(r) {
    return r(this.value);
  }, e.prototype.asyncMap = function(r) {
    return zi.fromSafePromise(r(this.value));
  }, e.prototype.unwrapOr = function(r) {
    return this.value;
  }, e.prototype.match = function(r, t) {
    return r(this.value);
  }, e.prototype._unsafeUnwrap = function(r) {
    return this.value;
  }, e.prototype._unsafeUnwrapErr = function(r) {
    throw Ed("Called `_unsafeUnwrapErr` on an Ok", this, r);
  }, e;
}();
var Kn = function() {
  function e(r) {
    this.error = r;
  }
  __name(e, "e");
  return u(e, "Err"), e.prototype.isOk = function() {
    return false;
  }, e.prototype.isErr = function() {
    return !this.isOk();
  }, e.prototype.map = function(r) {
    return ti(this.error);
  }, e.prototype.mapErr = function(r) {
    return ti(r(this.error));
  }, e.prototype.andThen = function(r) {
    return ti(this.error);
  }, e.prototype.orElse = function(r) {
    return r(this.error);
  }, e.prototype.asyncAndThen = function(r) {
    return xd(this.error);
  }, e.prototype.asyncMap = function(r) {
    return xd(this.error);
  }, e.prototype.unwrapOr = function(r) {
    return r;
  }, e.prototype.match = function(r, t) {
    return t(this.error);
  }, e.prototype._unsafeUnwrap = function(r) {
    throw Ed("Called `_unsafeUnwrap` on an Err", this, r);
  }, e.prototype._unsafeUnwrapErr = function(r) {
    return this.error;
  }, e;
}();
var nw = Ao.fromThrowable;
function Cd(e) {
  let r = In(e);
  return new Mn.default(r).valueOf() * Math.PI;
}
__name(Cd, "Cd");
u(Cd, "U");
function _o(e) {
  let r = In(e).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${e}'`);
}
__name(_o, "_o");
u(_o, "B");
function Od(e, r) {
  return new Mn.default(In(e)).valueOf() < new Mn.default(In(r)).valueOf();
}
__name(Od, "Od");
u(Od, "$");
function Md(e, r) {
  return new Mn.default(In(e)).valueOf() > new Mn.default(In(r)).valueOf();
}
__name(Md, "Md");
u(Md, "X");
function Id(e) {
  if (e === "0")
    return true;
  if (!/π/.test(e))
    return false;
  try {
    let r = In(e);
    return new Mn.default(r).valueOf(), true;
  } catch (r) {
    return false;
  }
}
__name(Id, "Id");
u(Id, "Q");
function In(e) {
  return e.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(In, "In");
u(In, "l");
function Ad(e) {
  try {
    let r = In(e), t = new Mn.default(r).toFraction().split("/"), n;
    return t[0] === "0" ? n = "0" : t[0] === "1" ? n = "\u03C0" : t[0] === "-1" ? n = "-\u03C0" : n = `${t[0]}\u03C0`, t.length === 1 ? n : `${n}/${t[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${e}'`);
  }
}
__name(Ad, "Ad");
u(Ad, "L");
var nu = 0;
var dt = u(class extends Error {
  constructor(e, r) {
    super(e), this.detailsObj = r, this.name = "Error", this.message = e, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), nu++;
    try {
      this.details = nu === 1 ? (0, Pd.format)(this.detailsObj) : "(failed to prettyFormat detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to prettyFormat detailsObj, see the console for details)";
    } finally {
      nu--;
    }
  }
}, "c");
var Ab = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var sr = u(class {
  static parseFloat(e) {
    if (e.length === 0)
      throw new Error(`Not a number: '${e}'`);
    if (e[0] === "-")
      return -sr.parseFloat(e.substr(1));
    if (e[0] === "\u221A")
      return Math.sqrt(sr.parseFloat(e.substr(1)));
    let r = sr.matchUnicodeFraction((n) => n.character === e);
    if (r !== void 0)
      return r.value;
    let t = parseFloat(e);
    if (isNaN(t))
      throw new Error(`Not a number: '${e}'`);
    return t;
  }
  static simplifyByRounding(e, r) {
    if (e < 0)
      return -sr.simplifyByRounding(-e, r);
    let t = e % 1;
    if (t <= r || 1 - t <= r)
      return Math.round(e);
    let n = sr.matchUnicodeFraction((s) => Math.abs(s.value - e) <= r);
    if (n !== void 0)
      return n.value;
    let o = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - e) <= r);
    return o !== void 0 ? Math.sqrt(o.value) : e;
  }
  static matchUnicodeFraction(e) {
    for (let r of Ab)
      if (e(r))
        return r;
  }
  constructor(e, r, t, n) {
    this.allowAbbreviation = e, this.maxAbbreviationError = r, this.fixedDigits = t, this.itemSeparator = n;
  }
  formatFloat(e) {
    return this.allowAbbreviation ? this.abbreviateFloat(e, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? e.toFixed(this.fixedDigits) : String(e);
  }
  abbreviateFloat(e, r = 0, t = void 0) {
    if (Math.abs(e) < r)
      return "0";
    if (e < 0)
      return `-${this.abbreviateFloat(-e, r, t)}`;
    let n = sr.matchUnicodeFraction((s) => Math.abs(s.value - e) <= r);
    if (n !== void 0)
      return n.character;
    let o = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - e) <= r);
    return o !== void 0 ? `\u221A${o.character}` : e % 1 !== 0 && t !== void 0 ? e.toFixed(t) : e.toString();
  }
}, "s");
var Po = sr;
Po.CONSISTENT = new sr(false, 0, 2, ", "), Po.EXACT = new sr(true, 0, void 0, ", "), Po.MINIFIED = new sr(true, 0, void 0, ","), Po.SIMPLIFIED = new sr(true, 5e-4, 3, ", ");
var Pb = u(() => ({ message: "Parse Error" }), "I");
var _d = u(class {
  static need(e, r, t) {
    if (e !== true) {
      let n = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, o = `Precondition failed

Message: ${r === void 0 ? "(not provided)" : r}

Args: ${n}`;
      throw new Error(o);
    }
  }
  static notNull(e) {
    _d.need(e != null, "notNull");
  }
  static snappedCosSin(e) {
    let r = Math.PI / 4, t = Math.round(e / r);
    if (t * r === e) {
      let n = Math.sqrt(0.5);
      return [[1, 0], [n, n], [0, 1], [-n, n], [-1, 0], [-n, -n], [0, -1], [n, -n]][t & 7];
    }
    return [Math.cos(e), Math.sin(e)];
  }
  static get urlJson() {
    let e = new URL(location.href, window.location.origin), r = decodeURIComponent(e.pathname), t = r.lastIndexOf("/");
    return r.substring(t + 1);
  }
}, "x");
var H = _d;
H.safeJsonParse = Ao.fromThrowable(JSON.parse, Pb);
var we = u(class {
  static from(e) {
    if (e instanceof we)
      return e;
    if (typeof e == "number")
      return new we(e, 0);
    throw new dt("Unrecognized value type.", { v: e });
  }
  static polar(e, r) {
    let [t, n] = H.snappedCosSin(r);
    return new we(e * t, e * n);
  }
  static realPartOf(e) {
    if (e instanceof we)
      return e.real;
    if (typeof e == "number")
      return e;
    throw new dt("Unrecognized value type.", { v: e });
  }
  static imagPartOf(e) {
    if (e instanceof we)
      return e.imag;
    if (typeof e == "number")
      return 0;
    throw new dt("Unrecognized value type.", { v: e });
  }
  constructor(e, r) {
    this.real = e, this.imag = r;
  }
  static rootsOfQuadratic(e, r, t) {
    if (e = we.from(e), r = we.from(r), t = we.from(t), e.isEqualTo(0)) {
      if (!r.isEqualTo(0))
        return [t.times(-1).dividedBy(r)];
      if (!t.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let n = r.times(r).minus(e.times(t).times(4)).sqrts(), o = r.times(-1), s = e.times(2);
    return n.map((p) => o.minus(p).dividedBy(s));
  }
  isEqualTo(e) {
    return e instanceof we ? this.real === e.real && this.imag === e.imag : typeof e == "number" ? this.real === e && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(e, r) {
    if (e instanceof we || typeof e == "number") {
      let t = this.minus(we.from(e));
      return Math.abs(t.real) <= r && Math.abs(t.imag) <= r && t.abs() <= r;
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
    let e = this.norm2();
    return e < 1e-5 ? we.polar(1, this.phase()) : this.dividedBy(Math.sqrt(e));
  }
  plus(e) {
    let r = we.from(e);
    return new we(this.real + r.real, this.imag + r.imag);
  }
  minus(e) {
    let r = we.from(e);
    return new we(this.real - r.real, this.imag - r.imag);
  }
  times(e) {
    let r = we.from(e);
    return new we(this.real * r.real - this.imag * r.imag, this.real * r.imag + this.imag * r.real);
  }
  dividedBy(e) {
    let r = we.from(e), t = r.norm2();
    if (t === 0)
      throw new Error("Division by Zero");
    let n = this.times(r.conjugate());
    return new we(n.real / t, n.imag / t);
  }
  sqrts() {
    let [e, r] = [this.real, this.imag], t = Math.sqrt(Math.sqrt(e * e + r * r));
    if (t === 0)
      return [we.ZERO];
    if (r === 0 && e < 0)
      return [new we(0, t), new we(0, -t)];
    let n = this.phase() / 2, o = we.polar(t, n);
    return [o, o.times(-1)];
  }
  conjugate() {
    return new we(this.real, -this.imag);
  }
  toString(e) {
    return e = e || Po.EXACT, e.allowAbbreviation ? this.toStringAllowSingleValue(e) : this.toStringBothValues(e);
  }
  neg() {
    return new we(-this.real, -this.imag);
  }
  raisedTo(e) {
    return e === 0.5 && this.imag === 0 && this.real >= 0 ? new we(Math.sqrt(this.real), 0) : we.ZERO.isEqualTo(e) ? we.ONE : this.isEqualTo(we.ZERO) ? we.ZERO : this.ln().times(we.from(e)).exp();
  }
  exp() {
    return we.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let e = this.times(we.I);
    return e.exp().plus(e.neg().exp()).times(0.5);
  }
  sin() {
    let e = this.times(we.I);
    return e.exp().minus(e.neg().exp()).dividedBy(new we(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new we(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(e) {
    return Math.abs(this.imag) <= e.maxAbbreviationError ? e.formatFloat(this.real) : Math.abs(this.real) <= e.maxAbbreviationError ? Math.abs(this.imag - 1) <= e.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= e.maxAbbreviationError ? "-i" : `${e.formatFloat(this.imag)}i` : this.toStringBothValues(e);
  }
  toStringBothValues(e) {
    let r = this.imag >= 0 ? "+" : "-", t = e.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= e.maxAbbreviationError ? "" : e.formatFloat(Math.abs(this.imag));
    return `${(e.allowAbbreviation || e.fixedDigits === void 0 || this.real < 0 ? "" : "+") + e.formatFloat(this.real) + r + t}i`;
  }
}, "a");
var On = we;
On.ZERO = new we(0, 0), On.ONE = new we(1, 0), On.I = new we(0, 1);
var zo = { MAX_QUBIT_COUNT: 16 };
function fe(e, r = {}, t = document) {
  let n = new CustomEvent(e, { bubbles: true, cancelable: true, detail: r });
  return t.dispatchEvent(n);
}
__name(fe, "fe");
u(fe, "re");
var zd = u((e) => typeof e == "number" && 1 <= e && e <= zo.MAX_QUBIT_COUNT, "oe");
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
function fu(e) {
  pu.add(e), e.shadowRoot && hu(e.shadowRoot), vu(e), mu(e.ownerDocument);
}
__name(fu, "fu");
u(fu, "bind");
function hu(e) {
  vu(e), mu(e);
}
__name(hu, "hu");
u(hu, "bindShadow");
var Cs = /* @__PURE__ */ new WeakMap();
function mu(e = document) {
  if (Cs.has(e))
    return Cs.get(e);
  let r = false, t = new MutationObserver((o) => {
    for (let s of o)
      if (s.type === "attributes" && s.target instanceof Element)
        du(s.target);
      else if (s.type === "childList" && s.addedNodes.length)
        for (let p of s.addedNodes)
          p instanceof Element && vu(p);
  });
  t.observe(e, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, Cs.delete(e), t.disconnect();
  } };
  return Cs.set(e, n), n;
}
__name(mu, "mu");
u(mu, "listenForBind");
function vu(e) {
  for (let r of e.querySelectorAll("[data-action]"))
    du(r);
  e instanceof Element && e.hasAttribute("data-action") && du(e);
}
__name(vu, "vu");
u(vu, "bindElements");
function _b(e) {
  let r = e.currentTarget;
  for (let t of kd(r))
    if (e.type === t.type) {
      let n = r.closest(t.tag);
      pu.has(n) && typeof n[t.method] == "function" && n[t.method](e);
      let o = r.getRootNode();
      if (o instanceof ShadowRoot && pu.has(o.host) && o.host.matches(t.tag)) {
        let s = o.host;
        typeof s[t.method] == "function" && s[t.method](e);
      }
    }
}
__name(_b, "_b");
u(_b, "handleEvent");
function* kd(e) {
  for (let r of (e.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, t), tag: r.slice(t + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(kd, "kd");
u(kd, "bindings");
function du(e) {
  for (let r of kd(e))
    e.addEventListener(r.type, _b);
}
__name(du, "du");
u(du, "bindActions");
function gu(e) {
  let r = e.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[e.name] = e, window.customElements.define(r, e));
}
__name(gu, "gu");
u(gu, "register");
function bu(e, r) {
  let t = e.tagName.toLowerCase();
  if (e.shadowRoot) {
    for (let n of e.shadowRoot.querySelectorAll(`[data-target~="${t}.${r}"]`))
      if (!n.closest(t))
        return n;
  }
  for (let n of e.querySelectorAll(`[data-target~="${t}.${r}"]`))
    if (n.closest(t) === e)
      return n;
}
__name(bu, "bu");
u(bu, "findTarget");
function yu(e, r) {
  let t = e.tagName.toLowerCase(), n = [];
  if (e.shadowRoot)
    for (let o of e.shadowRoot.querySelectorAll(`[data-targets~="${t}.${r}"]`))
      o.closest(t) || n.push(o);
  for (let o of e.querySelectorAll(`[data-targets~="${t}.${r}"]`))
    o.closest(t) === e && n.push(o);
  return n;
}
__name(yu, "yu");
u(yu, "findTargets");
function Me(e, r) {
  return Object.defineProperty(e, r, { configurable: true, get() {
    return bu(this, r);
  } });
}
__name(Me, "Me");
u(Me, "target");
function ft(e, r) {
  return Object.defineProperty(e, r, { configurable: true, get() {
    return yu(this, r);
  } });
}
__name(ft, "ft");
u(ft, "targets");
function wu(e) {
  for (let r of e.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === e && e.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(wu, "wu");
u(wu, "autoShadowRoot");
var Os = /* @__PURE__ */ new WeakMap();
function D(e, r) {
  Os.has(e) || Os.set(e, []), Os.get(e).push(r);
}
__name(D, "D");
u(D, "attr");
function xu(e, r) {
  r || (r = Nd(Object.getPrototypeOf(e)));
  for (let t of r) {
    let n = e[t], o = Gd(t), s = { configurable: true, get() {
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
    } }), Object.defineProperty(e, t, s), t in e && !e.hasAttribute(o) && s.set.call(e, n);
  }
}
__name(xu, "xu");
u(xu, "initializeAttrs");
function Nd(e) {
  let r = /* @__PURE__ */ new Set(), t = e;
  for (; t && t !== HTMLElement; ) {
    let n = Os.get(t) || [];
    for (let o of n)
      r.add(o);
    t = Object.getPrototypeOf(t);
  }
  return r;
}
__name(Nd, "Nd");
u(Nd, "getAttrNames");
function Gd(e) {
  return `data-${e.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Gd, "Gd");
u(Gd, "attrToAttributeName");
function Eu(e) {
  let r = e.observedAttributes || [];
  Object.defineProperty(e, "observedAttributes", { configurable: true, get() {
    return [...Nd(e.prototype)].map(Gd).concat(r);
  }, set(t) {
    r = t;
  } });
}
__name(Eu, "Eu");
u(Eu, "defineObservedAttributes");
var zb = /* @__PURE__ */ new WeakSet();
function Ld(e, r) {
  e.toggleAttribute("data-catalyst", true), customElements.upgrade(e), zb.add(e), wu(e), xu(e), fu(e), r && r.call(e), e.shadowRoot && hu(e.shadowRoot);
}
__name(Ld, "Ld");
u(Ld, "initializeInstance");
function jd(e) {
  Eu(e), gu(e);
}
__name(jd, "jd");
u(jd, "initializeClass");
function X(e) {
  let r = e.prototype.connectedCallback;
  e.prototype.connectedCallback = function() {
    Ld(this, r);
  }, jd(e);
}
__name(X, "X");
u(X, "controller");
function he(e) {
  class r extends e {
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
var ri = u((e) => typeof e == "object" && e !== null && typeof e.angle == "string" && typeof e.reducedAngle == "string", "isAngleable");
function An(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(r, "r");
  return u(r, "AngleableMixinClass"), M([D], r.prototype, "angle", 2), M([D], r.prototype, "reducedAngle", 2), r;
}
__name(An, "An");
u(An, "AngleableMixin");
var Ro = u((e) => typeof e == "object" && e !== null && typeof e.controls == "object", "isControllable");
function Le(e) {
  class r extends e {
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
function Ie(e) {
  class r extends e {
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
__name(Ie, "Ie");
u(Ie, "DisableableMixin");
var V = u(function() {
  return V = Object.assign || u(function(r) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function Ri(e, r) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
}
__name(Ri, "Ri");
u(Ri, "__rest");
function xe(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return { next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    } };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(xe, "xe");
u(xe, "__values");
function Se(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), o, s = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
      s.push(o.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return s;
}
__name(Se, "Se");
u(Se, "__read");
function ke(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, o = r.length, s; n < o; n++)
      (s || !(n in r)) && (s || (s = Array.prototype.slice.call(r, 0, n)), s[n] = r[n]);
  return e.concat(s || Array.prototype.slice.call(r));
}
__name(ke, "ke");
u(ke, "__spreadArray");
var Ne;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(Ne || (Ne = {}));
var tn;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(tn || (tn = {}));
var Do = Ne.Start;
var Di = Ne.Stop;
var Pn = Ne.Raise;
var ni = Ne.Send;
var Ms = Ne.Cancel;
var Bd = Ne.NullEvent;
var Su = Ne.Assign;
var ox = Ne.After;
var ax = Ne.DoneState;
var Is = Ne.Log;
var Hd = Ne.Init;
var ko = Ne.Invoke;
var sx = Ne.ErrorExecution;
var Tu = Ne.ErrorPlatform;
var Cu = Ne.ErrorCustom;
var No = Ne.Update;
var $d = Ne.Choose;
var qd = Ne.Pure;
var As = ".";
var Ou = {};
var Ps = "xstate.guard";
var Fd = "";
var je = true;
var _s;
function Lo(e, r, t) {
  t === void 0 && (t = As);
  var n = ki(e, t), o = ki(r, t);
  return Ce(o) ? Ce(n) ? o === n : false : Ce(n) ? n in o : Object.keys(n).every(function(s) {
    return s in o ? Lo(n[s], o[s]) : false;
  });
}
__name(Lo, "Lo");
u(Lo, "matchesState");
function zs(e) {
  try {
    return Ce(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(zs, "zs");
u(zs, "getEventType");
function Rs(e, r) {
  try {
    return rn(e) ? e : e.toString().split(r);
  } catch (t) {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
__name(Rs, "Rs");
u(Rs, "toStatePath");
function Rb(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
__name(Rb, "Rb");
u(Rb, "isStateLike");
function ki(e, r) {
  if (Rb(e))
    return e.value;
  if (rn(e))
    return Go(e);
  if (typeof e != "string")
    return e;
  var t = Rs(e, r);
  return Go(t);
}
__name(ki, "ki");
u(ki, "toStateValue");
function Go(e) {
  if (e.length === 1)
    return e[0];
  for (var r = {}, t = r, n = 0; n < e.length - 1; n++)
    n === e.length - 2 ? t[e[n]] = e[n + 1] : (t[e[n]] = {}, t = t[e[n]]);
  return r;
}
__name(Go, "Go");
u(Go, "pathToStateValue");
function Ni(e, r) {
  for (var t = {}, n = Object.keys(e), o = 0; o < n.length; o++) {
    var s = n[o];
    t[s] = r(e[s], s, e, o);
  }
  return t;
}
__name(Ni, "Ni");
u(Ni, "mapValues");
function Mu(e, r, t) {
  var n, o, s = {};
  try {
    for (var p = xe(Object.keys(e)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = e[m];
      t(d) && (s[m] = r(d, m, e));
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
var Ud = u(function(e) {
  return function(r) {
    var t, n, o = r;
    try {
      for (var s = xe(e), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        o = o[v];
      }
    } catch (m) {
      t = { error: m };
    } finally {
      try {
        p && !p.done && (n = s.return) && n.call(s);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return o;
  };
}, "path");
function Wd(e, r) {
  return function(t) {
    var n, o, s = t;
    try {
      for (var p = xe(e), v = p.next(); !v.done; v = p.next()) {
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
function jo(e) {
  if (!e)
    return [[]];
  if (Ce(e))
    return [[e]];
  var r = qe(Object.keys(e).map(function(t) {
    var n = e[t];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[t]] : jo(e[t]).map(function(o) {
      return [t].concat(o);
    });
  }));
  return r;
}
__name(jo, "jo");
u(jo, "toStatePaths");
function qe(e) {
  var r;
  return (r = []).concat.apply(r, ke([], Se(e), false));
}
__name(qe, "qe");
u(qe, "flatten");
function Vd(e) {
  return rn(e) ? e : [e];
}
__name(Vd, "Vd");
u(Vd, "toArrayStrict");
function lr(e) {
  return e === void 0 ? [] : Vd(e);
}
__name(lr, "lr");
u(lr, "toArray");
function ii(e, r, t) {
  var n, o;
  if (Ae(e))
    return e(r, t.data);
  var s = {};
  try {
    for (var p = xe(Object.keys(e)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = e[m];
      Ae(d) ? s[m] = d(r, t.data) : s[m] = d;
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
function Yd(e) {
  return /^(done|error)\./.test(e);
}
__name(Yd, "Yd");
u(Yd, "isBuiltInEvent");
function Iu(e) {
  return !!(e instanceof Promise || e !== null && (Ae(e) || typeof e == "object") && Ae(e.then));
}
__name(Iu, "Iu");
u(Iu, "isPromiseLike");
function Xd(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
__name(Xd, "Xd");
u(Xd, "isBehavior");
function Zd(e, r) {
  var t, n, o = Se([[], []], 2), s = o[0], p = o[1];
  try {
    for (var v = xe(e), m = v.next(); !m.done; m = v.next()) {
      var d = m.value;
      r(d) ? s.push(d) : p.push(d);
    }
  } catch (f) {
    t = { error: f };
  } finally {
    try {
      m && !m.done && (n = v.return) && n.call(v);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [s, p];
}
__name(Zd, "Zd");
u(Zd, "partition");
function Qd(e, r) {
  return Ni(e.states, function(t, n) {
    if (t) {
      var o = (Ce(r) ? void 0 : r[n]) || (t ? t.current : void 0);
      if (o)
        return { current: o, states: Qd(t, o) };
    }
  });
}
__name(Qd, "Qd");
u(Qd, "updateHistoryStates");
function Kd(e, r) {
  return { current: r, states: Qd(e, r) };
}
__name(Kd, "Kd");
u(Kd, "updateHistoryValue");
function Au(e, r, t, n) {
  je || rt(!!e, "Attempting to update undefined context");
  var o = e && t.reduce(function(s, p) {
    var v, m, d = p.assignment, f = { state: n, action: p, _event: r }, g = {};
    if (Ae(d))
      g = d(s, r.data, f);
    else
      try {
        for (var w = xe(Object.keys(d)), S = w.next(); !S.done; S = w.next()) {
          var T = S.value, C = d[T];
          g[T] = Ae(C) ? C(s, r.data, f) : C;
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
  }, e);
  return o;
}
__name(Au, "Au");
u(Au, "updateContext");
var rt = u(function() {
}, "warn");
je || (rt = u(function(e, r) {
  var t = e instanceof Error ? e : void 0;
  if (!(!t && e) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    t && n.push(t), console.warn.apply(console, n);
  }
}, "warn"));
function rn(e) {
  return Array.isArray(e);
}
__name(rn, "rn");
u(rn, "isArray");
function Ae(e) {
  return typeof e == "function";
}
__name(Ae, "Ae");
u(Ae, "isFunction");
function Ce(e) {
  return typeof e == "string";
}
__name(Ce, "Ce");
u(Ce, "isString");
function Ds(e, r) {
  if (e)
    return Ce(e) ? { type: Ps, name: e, predicate: r ? r[e] : void 0 } : Ae(e) ? { type: Ps, name: e.name, predicate: e } : e;
}
__name(Ds, "Ds");
u(Ds, "toGuard");
function Jd(e) {
  try {
    return "subscribe" in e && Ae(e.subscribe);
  } catch (r) {
    return false;
  }
}
__name(Jd, "Jd");
u(Jd, "isObservable");
var Gr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var vx = (_s = {}, _s[Gr] = function() {
  return this;
}, _s[Symbol.observable] = function() {
  return this;
}, _s);
function Lr(e) {
  return !!e && "__xstatenode" in e;
}
__name(Lr, "Lr");
u(Lr, "isMachine");
function ef(e) {
  return !!e && typeof e.send == "function";
}
__name(ef, "ef");
u(ef, "isActor");
function Gi(e, r) {
  return Ce(e) || typeof e == "number" ? V({ type: e }, r) : e;
}
__name(Gi, "Gi");
u(Gi, "toEventObject");
function at(e, r) {
  if (!Ce(e) && "$$type" in e && e.$$type === "scxml")
    return e;
  var t = Gi(e);
  return V({ name: t.type, data: t, $$type: "scxml", type: "external" }, r);
}
__name(at, "at");
u(at, "toSCXMLEvent");
function oi(e, r) {
  var t = Vd(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || Lr(n) ? { target: n, event: e } : V(V({}, n), { event: e });
  });
  return t;
}
__name(oi, "oi");
u(oi, "toTransitionConfigArray");
function tf(e) {
  if (!(e === void 0 || e === Fd))
    return lr(e);
}
__name(tf, "tf");
u(tf, "normalizeTarget");
function rf(e, r, t) {
  if (!je) {
    var n = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
    if (e === r)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(e, "'.").concat(n));
    else {
      var o = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(e, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(o));
    }
  }
}
__name(rf, "rf");
u(rf, "reportUnhandledExceptionOnInvocation");
function ks(e, r, t, n, o) {
  var s = e.options.guards, p = { state: o, cond: r, _event: n };
  if (r.type === Ps)
    return ((s == null ? void 0 : s[r.name]) || r.predicate)(t, n.data, p);
  var v = s == null ? void 0 : s[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(e.id, "'."));
  return v(t, n.data, p);
}
__name(ks, "ks");
u(ks, "evaluateGuard");
function Ns(e) {
  return typeof e == "string" ? { type: e } : e;
}
__name(Ns, "Ns");
u(Ns, "toInvokeSource");
function Li(e, r, t) {
  var n = u(function() {
  }, "noop"), o = typeof e == "object", s = o ? e : null;
  return { next: ((o ? e.next : e) || n).bind(s), error: ((o ? e.error : r) || n).bind(s), complete: ((o ? e.complete : t) || n).bind(s) };
}
__name(Li, "Li");
u(Li, "toObserver");
function Bo(e, r) {
  return "".concat(e, ":invocation[").concat(r, "]");
}
__name(Bo, "Bo");
u(Bo, "createInvokeId");
function Ho(e) {
  return (e.type === Pn || e.type === ni && e.to === tn.Internal) && typeof e.delay != "number";
}
__name(Ho, "Ho");
u(Ho, "isRaisableAction");
var nn = at({ type: Hd });
function Gs(e, r) {
  return r && r[e] || void 0;
}
__name(Gs, "Gs");
u(Gs, "getActionFunction");
function Bi(e, r) {
  var t;
  if (Ce(e) || typeof e == "number") {
    var n = Gs(e, r);
    Ae(n) ? t = { type: e, exec: n } : n ? t = n : t = { type: e, exec: void 0 };
  } else if (Ae(e))
    t = { type: e.name || e.toString(), exec: e };
  else {
    var n = Gs(e.type, r);
    if (Ae(n))
      t = V(V({}, e), { exec: n });
    else if (n) {
      var o = n.type || e.type;
      t = V(V(V({}, n), e), { type: o });
    } else
      t = e;
  }
  return t;
}
__name(Bi, "Bi");
u(Bi, "toActionObject");
var jr = u(function(e, r) {
  if (!e)
    return [];
  var t = rn(e) ? e : [e];
  return t.map(function(n) {
    return Bi(n, r);
  });
}, "toActionObjects");
function Ls(e) {
  var r = Bi(e);
  return V(V({ id: Ce(e) ? e : r.id }, r), { type: r.type });
}
__name(Ls, "Ls");
u(Ls, "toActivityDefinition");
function nf(e, r) {
  return { type: Pn, event: typeof e == "function" ? e : Gi(e), delay: r ? r.delay : void 0, id: r == null ? void 0 : r.id };
}
__name(nf, "nf");
u(nf, "raise");
function Db(e, r, t, n) {
  var o = { _event: t }, s = at(Ae(e.event) ? e.event(r, t.data, o) : e.event), p;
  if (Ce(e.delay)) {
    var v = n && n[e.delay];
    p = Ae(v) ? v(r, t.data, o) : v;
  } else
    p = Ae(e.delay) ? e.delay(r, t.data, o) : e.delay;
  return V(V({}, e), { type: Pn, _event: s, delay: p });
}
__name(Db, "Db");
u(Db, "resolveRaise");
function of(e, r) {
  return { to: r ? r.to : void 0, type: ni, event: Ae(e) ? e : Gi(e), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Ae(e) ? e.name : zs(e) };
}
__name(of, "of");
u(of, "send");
function kb(e, r, t, n) {
  var o = { _event: t }, s = at(Ae(e.event) ? e.event(r, t.data, o) : e.event), p;
  if (Ce(e.delay)) {
    var v = n && n[e.delay];
    p = Ae(v) ? v(r, t.data, o) : v;
  } else
    p = Ae(e.delay) ? e.delay(r, t.data, o) : e.delay;
  var m = Ae(e.to) ? e.to(r, t.data, o) : e.to;
  return V(V({}, e), { to: m, _event: s, event: s.data, delay: p });
}
__name(kb, "kb");
u(kb, "resolveSend");
var Nb = u(function(e, r, t) {
  return V(V({}, e), { value: Ce(e.expr) ? e.expr : e.expr(r, t.data, { _event: t }) });
}, "resolveLog");
var af = u(function(e) {
  return { type: Ms, sendId: e };
}, "cancel");
function sf(e) {
  var r = Ls(e);
  return { type: Ne.Start, activity: r, exec: void 0 };
}
__name(sf, "sf");
u(sf, "start");
function lf(e) {
  var r = Ae(e) ? e : Ls(e);
  return { type: Ne.Stop, activity: r, exec: void 0 };
}
__name(lf, "lf");
u(lf, "stop");
function Gb(e, r, t) {
  var n = Ae(e.activity) ? e.activity(r, t.data) : e.activity, o = typeof n == "string" ? { id: n } : n, s = { type: Ne.Stop, activity: o };
  return s;
}
__name(Gb, "Gb");
u(Gb, "resolveStop");
function uf(e, r) {
  var t = r ? "#".concat(r) : "";
  return "".concat(Ne.After, "(").concat(e, ")").concat(t);
}
__name(uf, "uf");
u(uf, "after");
function $o(e, r) {
  var t = "".concat(Ne.DoneState, ".").concat(e), n = { type: t, data: r };
  return n.toString = function() {
    return t;
  }, n;
}
__name($o, "$o");
u($o, "done");
function Hi(e, r) {
  var t = "".concat(Ne.DoneInvoke, ".").concat(e), n = { type: t, data: r };
  return n.toString = function() {
    return t;
  }, n;
}
__name(Hi, "Hi");
u(Hi, "doneInvoke");
function ai(e, r) {
  var t = "".concat(Ne.ErrorPlatform, ".").concat(e), n = { type: t, data: r };
  return n.toString = function() {
    return t;
  }, n;
}
__name(ai, "ai");
u(ai, "error");
var Lb = u(function(e) {
  var r, t, n = [];
  try {
    for (var o = xe(e), s = o.next(); !s.done; s = o.next())
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
      s && !s.done && (t = o.return) && t.call(o);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}, "pluckAssigns");
function ji(e, r, t, n, o, s, p) {
  p === void 0 && (p = false);
  var v = p ? [] : Lb(o), m = v.length ? Au(t, n, v, r) : t, d = p ? [t] : void 0, f = [];
  function g(T, C) {
    var z;
    switch (C.type) {
      case Pn: {
        var N = Db(C, m, n, e.options.delays);
        return s && typeof N.delay == "number" && s(N, m, n), N;
      }
      case ni:
        var G = kb(C, m, n, e.options.delays);
        if (!je) {
          var $ = C.delay;
          rt(!Ce($) || typeof G.delay == "number", "No delay reference for delay expression '".concat($, "' was found on machine '").concat(e.id, "'"));
        }
        return s && G.to !== tn.Internal && (T === "entry" ? f.push(G) : s(G, m, n)), G;
      case Is: {
        var A = Nb(C, m, n);
        return s == null || s(A, m, n), A;
      }
      case $d: {
        var ee = C, _ = (z = ee.conds.find(function(ze) {
          var Pe = Ds(ze.cond, e.options.guards);
          return !Pe || ks(e, Pe, m, n, s ? void 0 : r);
        })) === null || z === void 0 ? void 0 : z.actions;
        if (!_)
          return [];
        var B = Se(ji(e, r, m, n, [{ type: T, actions: jr(lr(_), e.options.actions) }], s, p), 2), te = B[0], J = B[1];
        return m = J, d == null || d.push(m), te;
      }
      case qd: {
        var _ = C.get(m, n.data);
        if (!_)
          return [];
        var ue = Se(ji(e, r, m, n, [{ type: T, actions: jr(lr(_), e.options.actions) }], s, p), 2), Q = ue[0], ie = ue[1];
        return m = ie, d == null || d.push(m), Q;
      }
      case Di: {
        var A = Gb(C, m, n);
        return s == null || s(A, t, n), A;
      }
      case Su: {
        m = Au(m, n, [C], s ? void 0 : r), d == null || d.push(m);
        break;
      }
      default:
        var q = Bi(C, e.options.actions), oe = q.exec;
        if (s)
          s(q, m, n);
        else if (oe && d) {
          var et = d.length - 1, Ze = V(V({}, q), { exec: function(ze) {
            for (var Pe = [], We = 1; We < arguments.length; We++)
              Pe[We - 1] = arguments[We];
            oe.apply(void 0, ke([d[et]], Se(Pe), false));
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
      for (var G = xe(T.actions), $ = G.next(); !$.done; $ = G.next()) {
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
var _n = u(function(e, r) {
  cf.push(e);
  var t = r(e);
  return cf.pop(), t;
}, "provide");
function pf(e) {
  var r;
  return r = { id: e, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: e };
  } }, r[Gr] = function() {
    return this;
  }, r;
}
__name(pf, "pf");
u(pf, "createNullActor");
function df(e, r, t, n) {
  var o, s = Ns(e.src), p = (o = r == null ? void 0 : r.options.services) === null || o === void 0 ? void 0 : o[s.type], v = e.data ? ii(e.data, t, n) : void 0, m = p ? Pu(p, e.id, v) : pf(e.id);
  return m.meta = e, m;
}
__name(df, "df");
u(df, "createInvocableActor");
function Pu(e, r, t) {
  var n = pf(r);
  if (n.deferred = true, Lr(e)) {
    var o = n.state = _n(void 0, function() {
      return (t ? e.withContext(t) : e).initialState;
    });
    n.getSnapshot = function() {
      return o;
    };
  }
  return n;
}
__name(Pu, "Pu");
u(Pu, "createDeferredActor");
function jb(e) {
  try {
    return typeof e.send == "function";
  } catch (r) {
    return false;
  }
}
__name(jb, "jb");
u(jb, "isActor");
function ff(e) {
  return jb(e) && "id" in e;
}
__name(ff, "ff");
u(ff, "isSpawnedActor");
function hf(e) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[Gr] = function() {
    return this;
  }, r), e);
}
__name(hf, "hf");
u(hf, "toActorRef");
var qo = u(function(e) {
  return e.type === "atomic" || e.type === "final";
}, "isLeafNode");
function zu(e) {
  return Object.keys(e.states).map(function(r) {
    return e.states[r];
  });
}
__name(zu, "zu");
u(zu, "getAllChildren");
function $i(e) {
  return zu(e).filter(function(r) {
    return r.type !== "history";
  });
}
__name($i, "$i");
u($i, "getChildren");
function Ru(e) {
  var r = [e];
  return qo(e) ? r : r.concat(qe($i(e).map(Ru)));
}
__name(Ru, "Ru");
u(Ru, "getAllStateNodes");
function qi(e, r) {
  var t, n, o, s, p, v, m, d, f = new Set(e), g = _u(f), w = new Set(r);
  try {
    for (var S = xe(w), T = S.next(); !T.done; T = S.next())
      for (var C = T.value, z = C.parent; z && !w.has(z); )
        w.add(z), z = z.parent;
  } catch (J) {
    t = { error: J };
  } finally {
    try {
      T && !T.done && (n = S.return) && n.call(S);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var N = _u(w);
  try {
    for (var G = xe(w), $ = G.next(); !$.done; $ = G.next()) {
      var C = $.value;
      if (C.type === "compound" && (!N.get(C) || !N.get(C).length))
        g.get(C) ? g.get(C).forEach(function(ue) {
          return w.add(ue);
        }) : C.initialStateNodes.forEach(function(ue) {
          return w.add(ue);
        });
      else if (C.type === "parallel")
        try {
          for (var A = (p = void 0, xe($i(C))), ee = A.next(); !ee.done; ee = A.next()) {
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
    for (var B = xe(w), te = B.next(); !te.done; te = B.next())
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
function mf(e, r) {
  var t = r.get(e);
  if (!t)
    return {};
  if (e.type === "compound") {
    var n = t[0];
    if (n) {
      if (qo(n))
        return n.key;
    } else
      return {};
  }
  var o = {};
  return t.forEach(function(s) {
    o[s.key] = mf(s, r);
  }), o;
}
__name(mf, "mf");
u(mf, "getValueFromAdj");
function _u(e) {
  var r, t, n = /* @__PURE__ */ new Map();
  try {
    for (var o = xe(e), s = o.next(); !s.done; s = o.next()) {
      var p = s.value;
      n.has(p) || n.set(p, []), p.parent && (n.has(p.parent) || n.set(p.parent, []), n.get(p.parent).push(p));
    }
  } catch (v) {
    r = { error: v };
  } finally {
    try {
      s && !s.done && (t = o.return) && t.call(o);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}
__name(_u, "_u");
u(_u, "getAdjList");
function vf(e, r) {
  var t = qi([e], r);
  return mf(e, _u(t));
}
__name(vf, "vf");
u(vf, "getValue");
function Fi(e, r) {
  return Array.isArray(e) ? e.some(function(t) {
    return t === r;
  }) : e instanceof Set ? e.has(r) : false;
}
__name(Fi, "Fi");
u(Fi, "has");
function gf(e) {
  return ke([], Se(new Set(qe(ke([], Se(e.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(gf, "gf");
u(gf, "nextEvents");
function Fo(e, r) {
  return r.type === "compound" ? $i(r).some(function(t) {
    return t.type === "final" && Fi(e, t);
  }) : r.type === "parallel" ? $i(r).every(function(t) {
    return Fo(e, t);
  }) : false;
}
__name(Fo, "Fo");
u(Fo, "isInFinalState");
function bf(e) {
  return e === void 0 && (e = []), e.reduce(function(r, t) {
    return t.meta !== void 0 && (r[t.id] = t.meta), r;
  }, {});
}
__name(bf, "bf");
u(bf, "getMeta");
function Du(e) {
  return new Set(qe(e.map(function(r) {
    return r.tags;
  })));
}
__name(Du, "Du");
u(Du, "getTagsFromConfiguration");
function ku(e, r) {
  if (e === r)
    return true;
  if (e === void 0 || r === void 0)
    return false;
  if (Ce(e) || Ce(r))
    return e === r;
  var t = Object.keys(e), n = Object.keys(r);
  return t.length === n.length && t.every(function(o) {
    return ku(e[o], r[o]);
  });
}
__name(ku, "ku");
u(ku, "stateValuesEqual");
function yf(e) {
  return typeof e != "object" || e === null ? false : "value" in e && "_event" in e;
}
__name(yf, "yf");
u(yf, "isStateConfig");
function wf(e, r) {
  var t = e.exec, n = V(V({}, e), { exec: t !== void 0 ? function() {
    return t(r.context, r.event, { action: e, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(wf, "wf");
u(wf, "bindActionToState");
var wr = function() {
  function e(r) {
    var t = this, n;
    this.actions = [], this.activities = Ou, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || Ou, this.meta = bf(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return gf(t.configuration);
    } });
  }
  __name(e, "e");
  return u(e, "State"), e.from = function(r, t) {
    if (r instanceof e)
      return r.context !== t ? new e({ value: r.value, context: t, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = nn;
    return new e({ value: r, context: t, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, e.create = function(r) {
    return new e(r);
  }, e.inert = function(r, t) {
    if (r instanceof e) {
      if (!r.actions.length)
        return r;
      var n = nn;
      return new e({ value: r.value, context: t, _event: n, _sessionid: null, historyValue: r.historyValue, history: r.history, activities: r.activities, configuration: r.configuration, transitions: [], children: {} });
    }
    return e.from(r, t);
  }, e.prototype.toStrings = function(r, t) {
    var n = this;
    if (r === void 0 && (r = this.value), t === void 0 && (t = "."), Ce(r))
      return [r];
    var o = Object.keys(r);
    return o.concat.apply(o, ke([], Se(o.map(function(s) {
      return n.toStrings(r[s], t).map(function(p) {
        return s + t + p;
      });
    })), false));
  }, e.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var t = r.tags;
    r.machine;
    var n = Ri(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(t) });
  }, e.prototype.matches = function(r) {
    return Lo(r, this.value);
  }, e.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, e.prototype.can = function(r) {
    var t;
    je && rt(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(o) {
      return o.target !== void 0 || o.actions.length;
    });
  }, e;
}();
var Bb = { deferEvents: false };
var Nu = function() {
  function e(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, Bb), r);
  }
  __name(e, "e");
  return u(e, "Scheduler"), e.prototype.initialize = function(r) {
    if (this.initialized = true, r) {
      if (!this.options.deferEvents) {
        this.schedule(r);
        return;
      }
      this.process(r);
    }
    this.flushEvents();
  }, e.prototype.schedule = function(r) {
    if (!this.initialized || this.processingEvent) {
      this.queue.push(r);
      return;
    }
    if (this.queue.length !== 0)
      throw new Error("Event queue should be empty when it is not processing events");
    this.process(r), this.flushEvents();
  }, e.prototype.clear = function() {
    this.queue = [];
  }, e.prototype.flushEvents = function() {
    for (var r = this.queue.shift(); r; )
      this.process(r), r = this.queue.shift();
  }, e.prototype.process = function(r) {
    this.processingEvent = true;
    try {
      r();
    } catch (t) {
      throw this.clear(), t;
    } finally {
      this.processingEvent = false;
    }
  }, e;
}();
var Gu = /* @__PURE__ */ new Map();
var Hb = 0;
var Ui = { bookId: function() {
  return "x:".concat(Hb++);
}, register: function(e, r) {
  return Gu.set(e, r), e;
}, get: function(e) {
  return Gu.get(e);
}, free: function(e) {
  Gu.delete(e);
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
  var e = js();
  if (e && "__xstate__" in e)
    return e.__xstate__;
}
__name($b, "$b");
u($b, "getDevTools");
function xf(e) {
  if (js()) {
    var r = $b();
    r && r.register(e);
  }
}
__name(xf, "xf");
u(xf, "registerService");
function Ef(e, r) {
  r === void 0 && (r = {});
  var t = e.initialState, n = /* @__PURE__ */ new Set(), o = [], s = false, p = u(function() {
    if (!s) {
      for (s = true; o.length > 0; ) {
        var d = o.shift();
        t = e.transition(t, d, m), n.forEach(function(f) {
          return f.next(t);
        });
      }
      s = false;
    }
  }, "flush"), v = hf({ id: r.id, send: function(d) {
    o.push(d), p();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(d, f, g) {
    var w = Li(d, f, g);
    return n.add(w), w.next(t), { unsubscribe: function() {
      n.delete(w);
    } };
  } }), m = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return t = e.start ? e.start(m) : t, v;
}
__name(Ef, "Ef");
u(Ef, "spawnBehavior");
var qb = { sync: false, autoForward: false };
var st;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(st || (st = {}));
var Sf = function() {
  function e(r, t) {
    t === void 0 && (t = e.defaultOptions);
    var n = this;
    this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = st.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(f, g) {
      if (rn(f))
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
      var S = n.parent && (g === tn.Parent || n.parent.id === g), T = S ? n.parent : Ce(g) ? g === tn.Internal ? n : n.children.get(g) || Ui.get(g) : ef(g) ? g : void 0;
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
      var T = f.exec || Gs(f.type, S), C = Ae(T) ? T : T ? T.exec : f.exec;
      if (C)
        try {
          return C(g, w.data, n.machine.config.predictableActionArguments ? { action: f, _event: w } : { action: f, state: n.state, _event: w });
        } catch (oe) {
          throw n.parent && n.parent.send({ type: "xstate.error", data: oe }), oe;
        }
      switch (f.type) {
        case Pn: {
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
            N.to ? n.sendTo(N._event, N.to, w === nn) : n.send(N._event);
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
          if (G.type === Ne.Invoke) {
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
            var J = Ae(A) ? A(g, w.data, { data: te, src: $, meta: G.meta }) : A;
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
          var Q = f, ie = Q.label, q = Q.value;
          ie ? n.logger(ie, q) : n.logger(q);
          break;
        default:
          je || rt(false, "No implementation found for action type '".concat(f.type, "'"));
          break;
      }
    };
    var o = V(V({}, e.defaultOptions), t), s = o.clock, p = o.logger, v = o.parent, m = o.id, d = m !== void 0 ? m : r.id;
    this.id = d, this.logger = p, this.clock = s, this.parent = v, this.options = o, this.scheduler = new Nu({ deferEvents: this.options.deferEvents }), this.sessionId = Ui.bookId();
  }
  __name(e, "e");
  return u(e, "Interpreter"), Object.defineProperty(e.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : _n(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "state", { get: function() {
    return je || rt(this.status !== st.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), e.prototype.execute = function(r, t) {
    var n, o;
    try {
      for (var s = xe(r.actions), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        this.exec(v, r, t);
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
  }, e.prototype.update = function(r, t) {
    var n, o, s, p, v, m, d, f, g = this;
    if (r._sessionid = this.sessionId, this._state = r, (!this.machine.config.predictableActionArguments || t === nn) && this.options.execute)
      this.execute(this.state);
    else
      for (var w = void 0; w = this._outgoingQueue.shift(); )
        w[0].send(w[1]);
    if (this.children.forEach(function(J) {
      g.state.children[J.id] = J;
    }), this.devTools && this.devTools.send(t.data, r), r.event)
      try {
        for (var S = xe(this.eventListeners), T = S.next(); !T.done; T = S.next()) {
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
      for (var z = xe(this.listeners), N = z.next(); !N.done; N = z.next()) {
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
      for (var G = xe(this.contextListeners), $ = G.next(); !$.done; $ = G.next()) {
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
      }), _ = ee && ee.doneData ? ii(ee.doneData, r.context, t) : void 0;
      this._doneEvent = Hi(this.id, _);
      try {
        for (var B = xe(this.doneListeners), te = B.next(); !te.done; te = B.next()) {
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
  }, e.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === st.Running && r(this.state, this.state.event), this;
  }, e.prototype.subscribe = function(r, t, n) {
    var o = this, s = Li(r, t, n);
    this.listeners.add(s.next), this.status !== st.NotStarted && s.next(this.state);
    var p = u(function() {
      o.doneListeners.delete(p), o.stopListeners.delete(p), s.complete();
    }, "completeOnce");
    return this.status === st.Stopped ? s.complete() : (this.onDone(p), this.onStop(p)), { unsubscribe: function() {
      o.listeners.delete(s.next), o.doneListeners.delete(p), o.stopListeners.delete(p);
    } };
  }, e.prototype.onEvent = function(r) {
    return this.eventListeners.add(r), this;
  }, e.prototype.onSend = function(r) {
    return this.sendListeners.add(r), this;
  }, e.prototype.onChange = function(r) {
    return this.contextListeners.add(r), this;
  }, e.prototype.onStop = function(r) {
    return this.stopListeners.add(r), this;
  }, e.prototype.onDone = function(r) {
    return this.status === st.Stopped && this._doneEvent ? r(this._doneEvent) : this.doneListeners.add(r), this;
  }, e.prototype.off = function(r) {
    return this.listeners.delete(r), this.eventListeners.delete(r), this.sendListeners.delete(r), this.stopListeners.delete(r), this.doneListeners.delete(r), this.contextListeners.delete(r), this;
  }, e.prototype.start = function(r) {
    var t = this;
    if (this.status === st.Running)
      return this;
    this.machine._init(), Ui.register(this.sessionId, this), this.initialized = true, this.status = st.Running;
    var n = r === void 0 ? this.initialState : _n(this, function() {
      return yf(r) ? t.machine.resolveState(r) : t.machine.resolveState(wr.from(r, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(n, nn);
    }), this;
  }, e.prototype._stopChildren = function() {
    this.children.forEach(function(r) {
      Ae(r.stop) && r.stop();
    }), this.children.clear();
  }, e.prototype._stop = function() {
    var r, t, n, o, s, p, v, m, d, f;
    try {
      for (var g = xe(this.listeners), w = g.next(); !w.done; w = g.next()) {
        var S = w.value;
        this.listeners.delete(S);
      }
    } catch (B) {
      r = { error: B };
    } finally {
      try {
        w && !w.done && (t = g.return) && t.call(g);
      } finally {
        if (r)
          throw r.error;
      }
    }
    try {
      for (var T = xe(this.stopListeners), C = T.next(); !C.done; C = T.next()) {
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
      for (var z = xe(this.contextListeners), N = z.next(); !N.done; N = z.next()) {
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
      for (var G = xe(this.doneListeners), $ = G.next(); !$.done; $ = G.next()) {
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
      for (var A = xe(Object.keys(this.delayedEventsMap)), ee = A.next(); !ee.done; ee = A.next()) {
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
  }, e.prototype.stop = function() {
    var r = this, t = this.scheduler;
    return this._stop(), t.schedule(function() {
      var n = at({ type: "xstate.stop" }), o = _n(r, function() {
        var s = qe(ke([], Se(r.state.configuration), false).sort(function(f, g) {
          return g.order - f.order;
        }).map(function(f) {
          return jr(f.onExit, r.machine.options.actions);
        })), p = Se(ji(r.machine, r.state, r.state.context, n, [{ type: "exit", actions: s }], r.machine.config.predictableActionArguments ? r._exec : void 0, r.machine.config.predictableActionArguments || r.machine.config.preserveActionOrder), 2), v = p[0], m = p[1], d = new wr({ value: r.state.value, context: m, _event: n, _sessionid: r.sessionId, historyValue: void 0, history: r.state, actions: v.filter(function(f) {
          return !Ho(f);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: r.state.done, tags: r.state.tags, machine: r.machine });
        return d.changed = true, d;
      });
      r.update(o, n), r._stopChildren(), Ui.free(r.sessionId);
    }), this;
  }, e.prototype.batch = function(r) {
    var t = this;
    if (this.status === st.NotStarted && this.options.deferEvents)
      je || rt(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== st.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (r.length) {
      var n = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var o, s, p = t.state, v = false, m = [], d = u(function(S) {
          var T = at(S);
          t.forward(T), p = _n(t, function() {
            return t.machine.transition(p, T, void 0, n || void 0);
          }), m.push.apply(m, ke([], Se(t.machine.config.predictableActionArguments ? p.actions : p.actions.map(function(C) {
            return wf(C, p);
          })), false)), v = v || !!p.changed;
        }, "_loop_1");
        try {
          for (var f = xe(r), g = f.next(); !g.done; g = f.next()) {
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
        p.changed = v, p.actions = m, t.update(p, at(r[r.length - 1]));
      });
    }
  }, e.prototype.sender = function(r) {
    return this.send.bind(this, r);
  }, e.prototype._nextState = function(r, t) {
    var n = this;
    t === void 0 && (t = !!this.machine.config.predictableActionArguments && this._exec);
    var o = at(r);
    if (o.name.indexOf(Tu) === 0 && !this.state.nextEvents.some(function(p) {
      return p.indexOf(Tu) === 0;
    }))
      throw o.data.data;
    var s = _n(this, function() {
      return n.machine.transition(n.state, o, void 0, t || void 0);
    });
    return s;
  }, e.prototype.nextState = function(r) {
    return this._nextState(r, false);
  }, e.prototype.forward = function(r) {
    var t, n;
    try {
      for (var o = xe(this.forwardTo), s = o.next(); !s.done; s = o.next()) {
        var p = s.value, v = this.children.get(p);
        if (!v)
          throw new Error("Unable to forward event '".concat(r, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(p, "'."));
        v.send(r);
      }
    } catch (m) {
      t = { error: m };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (t)
          throw t.error;
      }
    }
  }, e.prototype.defer = function(r) {
    var t = this, n = this.clock.setTimeout(function() {
      "to" in r && r.to ? t.sendTo(r._event, r.to, true) : t.send(r._event);
    }, r.delay);
    r.id && (this.delayedEventsMap[r.id] = n);
  }, e.prototype.cancel = function(r) {
    this.clock.clearTimeout(this.delayedEventsMap[r]), delete this.delayedEventsMap[r];
  }, e.prototype.exec = function(r, t, n) {
    n === void 0 && (n = this.machine.options.actions), this._exec(r, t.context, t._event, n);
  }, e.prototype.removeChild = function(r) {
    var t;
    this.children.delete(r), this.forwardTo.delete(r), (t = this.state) === null || t === void 0 || delete t.children[r];
  }, e.prototype.stopChild = function(r) {
    var t = this.children.get(r);
    t && (this.removeChild(r), Ae(t.stop) && t.stop());
  }, e.prototype.spawn = function(r, t, n) {
    if (this.status !== st.Running)
      return Pu(r, t);
    if (Iu(r))
      return this.spawnPromise(Promise.resolve(r), t);
    if (Ae(r))
      return this.spawnCallback(r, t);
    if (ff(r))
      return this.spawnActor(r, t);
    if (Jd(r))
      return this.spawnObservable(r, t);
    if (Lr(r))
      return this.spawnMachine(r, V(V({}, n), { id: t }));
    if (Xd(r))
      return this.spawnBehavior(r, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof r, '".'));
  }, e.prototype.spawnMachine = function(r, t) {
    var n = this;
    t === void 0 && (t = {});
    var o = new e(r, V(V({}, this.options), { parent: this, id: t.id || r.id })), s = V(V({}, qb), t);
    s.sync && o.onTransition(function(v) {
      n.send(No, { state: v, id: o.id });
    });
    var p = o;
    return this.children.set(o.id, p), s.autoForward && this.forwardTo.add(o.id), o.onDone(function(v) {
      n.removeChild(o.id), n.send(at(v, { origin: o.id }));
    }).start(), p;
  }, e.prototype.spawnBehavior = function(r, t) {
    var n = Ef(r, { id: t, parent: this });
    return this.children.set(t, n), n;
  }, e.prototype.spawnPromise = function(r, t) {
    var n, o = this, s = false, p;
    r.then(function(m) {
      s || (p = m, o.removeChild(t), o.send(at(Hi(t, m), { origin: t })));
    }, function(m) {
      if (!s) {
        o.removeChild(t);
        var d = ai(t, m);
        try {
          o.send(at(d, { origin: t }));
        } catch (f) {
          rf(m, f, t), o.devTools && o.devTools.send(d, o.state), o.machine.strict && o.stop();
        }
      }
    });
    var v = (n = { id: t, send: function() {
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
      return { id: t };
    }, getSnapshot: function() {
      return p;
    } }, n[Gr] = function() {
      return this;
    }, n);
    return this.children.set(t, v), v;
  }, e.prototype.spawnCallback = function(r, t) {
    var n, o = this, s = false, p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m, d = u(function(w) {
      m = w, v.forEach(function(S) {
        return S(w);
      }), !s && o.send(at(w, { origin: t }));
    }, "receive"), f;
    try {
      f = r(d, function(w) {
        p.add(w);
      });
    } catch (w) {
      this.send(ai(t, w));
    }
    if (Iu(f))
      return this.spawnPromise(f, t);
    var g = (n = { id: t, send: function(w) {
      return p.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = Li(w);
      return v.add(S.next), { unsubscribe: function() {
        v.delete(S.next);
      } };
    }, stop: function() {
      s = true, Ae(f) && f();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return m;
    } }, n[Gr] = function() {
      return this;
    }, n);
    return this.children.set(t, g), g;
  }, e.prototype.spawnObservable = function(r, t) {
    var n, o = this, s, p = r.subscribe(function(m) {
      s = m, o.send(at(m, { origin: t }));
    }, function(m) {
      o.removeChild(t), o.send(at(ai(t, m), { origin: t }));
    }, function() {
      o.removeChild(t), o.send(at(Hi(t), { origin: t }));
    }), v = (n = { id: t, send: function() {
    }, subscribe: function(m, d, f) {
      return r.subscribe(m, d, f);
    }, stop: function() {
      return p.unsubscribe();
    }, getSnapshot: function() {
      return s;
    }, toJSON: function() {
      return { id: t };
    } }, n[Gr] = function() {
      return this;
    }, n);
    return this.children.set(t, v), v;
  }, e.prototype.spawnActor = function(r, t) {
    return this.children.set(t, r), r;
  }, e.prototype.spawnActivity = function(r) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[r.type] : void 0;
    if (!t) {
      je || rt(false, "No implementation found for activity '".concat(r.type, "'"));
      return;
    }
    var n = t(this.state.context, r);
    this.spawnEffect(r.id, n);
  }, e.prototype.spawnEffect = function(r, t) {
    var n;
    this.children.set(r, (n = { id: r, send: function() {
    }, subscribe: function() {
      return { unsubscribe: function() {
      } };
    }, stop: t || void 0, getSnapshot: function() {
    }, toJSON: function() {
      return { id: r };
    } }, n[Gr] = function() {
      return this;
    }, n));
  }, e.prototype.attachDev = function() {
    var r = js();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, t), { features: V({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      xf(this);
    }
  }, e.prototype.toJSON = function() {
    return { id: this.id };
  }, e.prototype[Gr] = function() {
    return this;
  }, e.prototype.getSnapshot = function() {
    return this.status === st.NotStarted ? this.initialState : this._state;
  }, e.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(r, t) {
    return setTimeout(r, t);
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  } }, logger: console.log.bind(console), devTools: false }, e.interpret = lt, e;
}();
function lt(e, r) {
  var t = new Sf(e, r);
  return t;
}
__name(lt, "lt");
u(lt, "interpret");
function Fb(e) {
  if (typeof e == "string") {
    var r = { type: e };
    return r.toString = function() {
      return e;
    }, r;
  }
  return e;
}
__name(Fb, "Fb");
u(Fb, "toInvokeSource");
function Uo(e) {
  return V(V({ type: ko }, e), { toJSON: function() {
    e.onDone, e.onError;
    var r = Ri(e, ["onDone", "onError"]);
    return V(V({}, r), { type: ko, src: Fb(e.src) });
  } });
}
__name(Uo, "Uo");
u(Uo, "toInvokeDefinition");
var Yi = "";
var Lu = "#";
var Wo = "*";
var Wi = {};
var Vi = u(function(e) {
  return e[0] === Lu;
}, "isStateId");
var Ub = u(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Wb = u(function(e, r, t) {
  var n = t.slice(0, -1).some(function(s) {
    return !("cond" in s) && !("in" in s) && (Ce(s.target) || Lr(s.target));
  }), o = r === Yi ? "the transient event" : "event '".concat(r, "'");
  rt(!n, "One or more transitions for ".concat(o, " on state '").concat(e.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var Tf = function() {
  function e(r, t, n, o) {
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var s = this, p;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Ub(), t), this.parent = o == null ? void 0 : o.parent, this.key = this.config.key || (o == null ? void 0 : o.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : As), this.id = this.config.id || ke([this.machine.key], Se(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (p = this.config.schema) !== null && p !== void 0 ? p : {}, this.description = this.config.description, je || rt(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? Ni(this.config.states, function(d, f) {
      var g, w = new e(d, {}, void 0, { parent: s, key: f });
      return Object.assign(s.idMap, V((g = {}, g[w.id] = w, g), w.idMap)), w;
    }) : Wi;
    var v = 0;
    function m(d) {
      var f, g;
      d.order = v++;
      try {
        for (var w = xe(zu(d)), S = w.next(); !S.done; S = w.next()) {
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
      } else if (Ce(d.src)) {
        var S = d.id || Bo(s.id, f);
        return Uo(V(V({}, d), { id: S, src: d.src }));
      } else if (Lr(d.src) || Ae(d.src)) {
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
  __name(e, "e");
  return u(e, "StateNode"), e.prototype._init = function() {
    this.__cache.transitions || Ru(this).forEach(function(r) {
      return r.on;
    });
  }, e.prototype.withConfig = function(r, t) {
    var n = this.options, o = n.actions, s = n.activities, p = n.guards, v = n.services, m = n.delays;
    return new e(this.config, { actions: V(V({}, o), r.actions), activities: V(V({}, s), r.activities), guards: V(V({}, p), r.guards), services: V(V({}, v), r.services), delays: V(V({}, m), r.delays) }, t != null ? t : this.context);
  }, e.prototype.withContext = function(r) {
    return new e(this.config, this.options, r);
  }, Object.defineProperty(e.prototype, "context", { get: function() {
    return Ae(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: Ni(this.states, function(r) {
      return r.definition;
    }), on: this.on, transitions: this.transitions, entry: this.onEntry, exit: this.onExit, activities: this.activities || [], meta: this.meta, order: this.order || -1, data: this.doneData, invoke: this.invoke, description: this.description, tags: this.tags };
  }, enumerable: false, configurable: true }), e.prototype.toJSON = function() {
    return this.definition;
  }, Object.defineProperty(e.prototype, "on", { get: function() {
    if (this.__cache.on)
      return this.__cache.on;
    var r = this.transitions;
    return this.__cache.on = r.reduce(function(t, n) {
      return t[n.eventType] = t[n.eventType] || [], t[n.eventType].push(n), t;
    }, {});
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "after", { get: function() {
    return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "transitions", { get: function() {
    return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
  }, enumerable: false, configurable: true }), e.prototype.getCandidates = function(r) {
    if (this.__cache.candidates[r])
      return this.__cache.candidates[r];
    var t = r === Yi, n = this.transitions.filter(function(o) {
      var s = o.eventType === r;
      return t ? s : s || o.eventType === Wo;
    });
    return this.__cache.candidates[r] = n, n;
  }, e.prototype.getDelayedTransitions = function() {
    var r = this, t = this.config.after;
    if (!t)
      return [];
    var n = u(function(s, p) {
      var v = Ae(s) ? "".concat(r.id, ":delay[").concat(p, "]") : s, m = uf(v, r.id);
      return r.onEntry.push(of(m, { delay: s })), r.onExit.push(af(m)), m;
    }, "mutateEntryExit"), o = rn(t) ? t.map(function(s, p) {
      var v = n(s.delay, p);
      return V(V({}, s), { event: v });
    }) : qe(Object.keys(t).map(function(s, p) {
      var v = t[s], m = Ce(v) ? { target: v } : v, d = isNaN(+s) ? s : +s, f = n(d, p);
      return lr(m).map(function(g) {
        return V(V({}, g), { event: f, delay: d });
      });
    }));
    return o.map(function(s) {
      var p = s.delay;
      return V(V({}, r.formatTransition(s)), { delay: p });
    });
  }, e.prototype.getStateNodes = function(r) {
    var t, n = this;
    if (!r)
      return [];
    var o = r instanceof wr ? r.value : ki(r, this.delimiter);
    if (Ce(o)) {
      var s = this.getStateNode(o).initial;
      return s !== void 0 ? this.getStateNodes((t = {}, t[o] = s, t)) : [this, this.states[o]];
    }
    var p = Object.keys(o), v = [this];
    return v.push.apply(v, ke([], Se(qe(p.map(function(m) {
      return n.getStateNode(m).getStateNodes(o[m]);
    }))), false)), v;
  }, e.prototype.handles = function(r) {
    var t = zs(r);
    return this.events.includes(t);
  }, e.prototype.resolveState = function(r) {
    var t = r instanceof wr ? r : wr.create(r), n = Array.from(qi([], this.getStateNodes(t.value)));
    return new wr(V(V({}, t), { value: this.resolve(t.value), configuration: n, done: Fo(n, this), tags: Du(n), machine: this.machine }));
  }, e.prototype.transitionLeafNode = function(r, t, n) {
    var o = this.getStateNode(r), s = o.next(t, n);
    return !s || !s.transitions.length ? this.next(t, n) : s;
  }, e.prototype.transitionCompoundNode = function(r, t, n) {
    var o = Object.keys(r), s = this.getStateNode(o[0]), p = s._transition(r[o[0]], t, n);
    return !p || !p.transitions.length ? this.next(t, n) : p;
  }, e.prototype.transitionParallelNode = function(r, t, n) {
    var o, s, p = {};
    try {
      for (var v = xe(Object.keys(r)), m = v.next(); !m.done; m = v.next()) {
        var d = m.value, f = r[d];
        if (f) {
          var g = this.getStateNode(d), w = g._transition(f, t, n);
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
      return this.next(t, n);
    var z = qe(Object.keys(p).map(function(N) {
      return p[N].configuration;
    }));
    return { transitions: T, exitSet: qe(S.map(function(N) {
      return N.exitSet;
    })), configuration: z, source: t, actions: qe(Object.keys(p).map(function(N) {
      return p[N].actions;
    })) };
  }, e.prototype._transition = function(r, t, n) {
    return Ce(r) ? this.transitionLeafNode(r, t, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, t, n) : this.transitionParallelNode(r, t, n);
  }, e.prototype.getTransitionData = function(r, t) {
    return this._transition(r.value, r, at(t));
  }, e.prototype.next = function(r, t) {
    var n, o, s = this, p = t.name, v = [], m = [], d;
    try {
      for (var f = xe(this.getCandidates(p)), g = f.next(); !g.done; g = f.next()) {
        var w = g.value, S = w.cond, T = w.in, C = r.context, z = T ? Ce(T) && Vi(T) ? r.matches(ki(this.getStateNodeById(T).path, this.delimiter)) : Lo(ki(T, this.delimiter), Ud(this.path.slice(0, -2))(r.value)) : true, N = false;
        try {
          N = !S || ks(this.machine, S, C, t, r);
        } catch (A) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(p, "' in state node '").concat(this.id, `':
`).concat(A.message));
        }
        if (N && z) {
          w.target !== void 0 && (m = w.target), v.push.apply(v, ke([], Se(w.actions), false)), d = w;
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
  }, e.prototype.getPotentiallyReenteringNodes = function(r) {
    if (this.order < r.order)
      return [this];
    for (var t = [], n = this, o = r; n && n !== o; )
      t.push(n), n = n.parent;
    return n !== o ? [] : (t.push(o), t);
  }, e.prototype.getActions = function(r, t, n, o, s, p, v) {
    var m, d, f, g, w = this, S = p ? qi([], this.getStateNodes(p.value)) : [], T = /* @__PURE__ */ new Set();
    try {
      for (var C = xe(Array.from(r).sort(function(Q, ie) {
        return Q.order - ie.order;
      })), z = C.next(); !z.done; z = C.next()) {
        var N = z.value;
        (!Fi(S, N) || Fi(n.exitSet, N) || N.parent && T.has(N.parent)) && T.add(N);
      }
    } catch (Q) {
      m = { error: Q };
    } finally {
      try {
        z && !z.done && (d = C.return) && d.call(C);
      } finally {
        if (m)
          throw m.error;
      }
    }
    try {
      for (var G = xe(S), $ = G.next(); !$.done; $ = G.next()) {
        var N = $.value;
        (!Fi(r, N) || Fi(n.exitSet, N.parent)) && n.exitSet.push(N);
      }
    } catch (Q) {
      f = { error: Q };
    } finally {
      try {
        $ && !$.done && (g = G.return) && g.call(G);
      } finally {
        if (f)
          throw f.error;
      }
    }
    n.exitSet.sort(function(Q, ie) {
      return ie.order - Q.order;
    });
    var A = Array.from(T).sort(function(Q, ie) {
      return Q.order - ie.order;
    }), ee = new Set(n.exitSet), _ = qe(A.map(function(Q) {
      var ie = [];
      if (Q.type !== "final")
        return ie;
      var q = Q.parent;
      if (!q.parent)
        return ie;
      ie.push($o(Q.id, Q.doneData), $o(q.id, Q.doneData ? ii(Q.doneData, o, s) : void 0));
      var oe = q.parent;
      return oe.type === "parallel" && $i(oe).every(function(et) {
        return Fo(n.configuration, et);
      }) && ie.push($o(oe.id)), ie;
    })), B = A.map(function(Q) {
      var ie = Q.onEntry, q = Q.activities.map(function(oe) {
        return sf(oe);
      });
      return { type: "entry", actions: jr(v ? ke(ke([], Se(ie), false), Se(q), false) : ke(ke([], Se(q), false), Se(ie), false), w.machine.options.actions) };
    }).concat({ type: "state_done", actions: _.map(function(Q) {
      return nf(Q);
    }) }), te = Array.from(ee).map(function(Q) {
      return { type: "exit", actions: jr(ke(ke([], Se(Q.onExit), false), Se(Q.activities.map(function(ie) {
        return lf(ie);
      })), false), w.machine.options.actions) };
    }), J = te.concat({ type: "transition", actions: jr(n.actions, this.machine.options.actions) }).concat(B);
    if (t) {
      var ue = jr(qe(ke([], Se(r), false).sort(function(Q, ie) {
        return ie.order - Q.order;
      }).map(function(Q) {
        return Q.onExit;
      })), this.machine.options.actions).filter(function(Q) {
        return !Ho(Q);
      });
      return J.concat({ type: "stop", actions: ue });
    }
    return J;
  }, e.prototype.transition = function(r, t, n, o) {
    r === void 0 && (r = this.initialState);
    var s = at(t), p;
    if (r instanceof wr)
      p = n === void 0 ? r : this.resolveState(wr.from(r, n));
    else {
      var v = Ce(r) ? this.resolve(Go(this.getResolvedPath(r))) : this.resolve(r), m = n != null ? n : this.machine.context;
      p = this.resolveState(wr.from(v, m));
    }
    if (!je && s.name === Wo)
      throw new Error("An event cannot have the wildcard type ('".concat(Wo, "')"));
    if (this.strict && !this.events.includes(s.name) && !Yd(s.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(s.name, "'"));
    var d = this._transition(p.value, p, s) || { transitions: [], configuration: [], exitSet: [], source: p, actions: [] }, f = qi([], this.getStateNodes(p.value)), g = d.configuration.length ? qi(f, d.configuration) : f;
    return d.configuration = ke([], Se(g), false), this.resolveTransition(d, p, p.context, o, s);
  }, e.prototype.resolveRaisedTransition = function(r, t, n, o) {
    var s, p = r.actions;
    return r = this.transition(r, t, void 0, o), r._event = n, r.event = n.data, (s = r.actions).unshift.apply(s, ke([], Se(p), false)), r;
  }, e.prototype.resolveTransition = function(r, t, n, o, s) {
    var p, v, m, d, f = this;
    s === void 0 && (s = nn);
    var g = r.configuration, w = !t || r.transitions.length > 0, S = w ? r.configuration : t ? t.configuration : [], T = Fo(S, this), C = w ? vf(this.machine, g) : void 0, z = t ? t.historyValue ? t.historyValue : r.source ? this.machine.historyValue(t.value) : void 0 : void 0, N = this.getActions(new Set(S), T, r, n, s, t, o), G = t ? V({}, t.activities) : {};
    try {
      for (var $ = xe(N), A = $.next(); !A.done; A = $.next()) {
        var ee = A.value;
        try {
          for (var _ = (m = void 0, xe(ee.actions)), B = _.next(); !B.done; B = _.next()) {
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
    var J = Se(ji(this, t, n, s, N, o, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), ue = J[0], Q = J[1], ie = Se(Zd(ue, Ho), 2), q = ie[0], oe = ie[1], et = ue.filter(function(Be) {
      var tt;
      return Be.type === Do && ((tt = Be.activity) === null || tt === void 0 ? void 0 : tt.type) === ko;
    }), Ze = et.reduce(function(Be, tt) {
      return Be[tt.activity.id] = df(tt.activity, f.machine, Q, s), Be;
    }, t ? V({}, t.children) : {}), ze = new wr({ value: C || t.value, context: Q, _event: s, _sessionid: t ? t._sessionid : null, historyValue: C ? z ? Kd(z, C) : void 0 : t ? t.historyValue : void 0, history: !C || r.source ? t : void 0, actions: C ? oe : [], activities: C ? G : t ? t.activities : {}, events: [], configuration: S, transitions: r.transitions, children: Ze, done: T, tags: Du(S), machine: this }), Pe = n !== Q;
    ze.changed = s.name === No || Pe;
    var We = ze.history;
    We && delete We.history;
    var Ke = !T && (this._transient || g.some(function(Be) {
      return Be._transient;
    }));
    if (!w && (!Ke || s.name === Yi))
      return ze;
    var Ye = ze;
    if (!T)
      for (Ke && (Ye = this.resolveRaisedTransition(Ye, { type: Bd }, s, o)); q.length; ) {
        var K = q.shift();
        Ye = this.resolveRaisedTransition(Ye, K._event, s, o);
      }
    var ir = Ye.changed || (We ? !!Ye.actions.length || Pe || typeof We.value != typeof Ye.value || !ku(Ye.value, We.value) : void 0);
    return Ye.changed = ir, Ye.history = We, Ye;
  }, e.prototype.getStateNode = function(r) {
    if (Vi(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[r];
    if (!t)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, e.prototype.getStateNodeById = function(r) {
    var t = Vi(r) ? r.slice(Lu.length) : r;
    if (t === this.id)
      return this;
    var n = this.machine.idMap[t];
    if (!n)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, e.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && Vi(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (s) {
      }
    for (var t = Rs(r, this.delimiter).slice(), n = this; t.length; ) {
      var o = t.shift();
      if (!o.length)
        break;
      n = n.getStateNode(o);
    }
    return n;
  }, e.prototype.resolve = function(r) {
    var t, n = this;
    if (!r)
      return this.initialStateValue || Wi;
    switch (this.type) {
      case "parallel":
        return Ni(this.initialStateValue, function(s, p) {
          return s ? n.getStateNode(p).resolve(r[p] || s) : Wi;
        });
      case "compound":
        if (Ce(r)) {
          var o = this.getStateNode(r);
          return o.type === "parallel" || o.type === "compound" ? (t = {}, t[r] = o.initialStateValue, t) : r;
        }
        return Object.keys(r).length ? Ni(r, function(s, p) {
          return s ? n.getStateNode(p).resolve(s) : Wi;
        }) : this.initialStateValue || {};
      default:
        return r || Wi;
    }
  }, e.prototype.getResolvedPath = function(r) {
    if (Vi(r)) {
      var t = this.machine.idMap[r.slice(Lu.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return t.path;
    }
    return Rs(r, this.delimiter);
  }, Object.defineProperty(e.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = Mu(this.states, function(n) {
        return n.initialStateValue || Wi;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = qo(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
    } else
      t = {};
    return this.__cache.initialStateValue = t, this.__cache.initialStateValue;
  }, enumerable: false, configurable: true }), e.prototype.getInitialState = function(r, t) {
    this._init();
    var n = this.getStateNodes(r);
    return this.resolveTransition({ configuration: n, exitSet: [], transitions: [], source: void 0, actions: [] }, void 0, t != null ? t : this.machine.context, void 0);
  }, Object.defineProperty(e.prototype, "initialState", { get: function() {
    var r = this.initialStateValue;
    if (!r)
      throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
    return this.getInitialState(r);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "target", { get: function() {
    var r;
    if (this.type === "history") {
      var t = this.config;
      Ce(t.target) ? r = Vi(t.target) ? Go(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : r = t.target;
    }
    return r;
  }, enumerable: false, configurable: true }), e.prototype.getRelativeStateNodes = function(r, t, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(t) : r.initialStateNodes : [r];
  }, Object.defineProperty(e.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (qo(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return je || rt(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = jo(this.initialStateValue);
    return qe(t.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), e.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var t = Se(r), n = t[0], o = t.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var s = this.getStateNode(n);
    if (s.type === "history")
      return s.resolveHistory();
    if (!this.states[n])
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(o);
  }, e.prototype.historyValue = function(r) {
    if (Object.keys(this.states).length)
      return { current: r || this.initialStateValue, states: Mu(this.states, function(t, n) {
        if (!r)
          return t.historyValue();
        var o = Ce(r) ? void 0 : r[n];
        return t.historyValue(o || t.initialStateValue);
      }, function(t) {
        return !t.history;
      }) };
  }, e.prototype.resolveHistory = function(r) {
    var t = this;
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
    return Ce(s) ? [n.getStateNode(s)] : qe(jo(s).map(function(p) {
      return t.history === "deep" ? n.getFromRelativePath(p) : [n.states[p[0]]];
    }));
  }, Object.defineProperty(e.prototype, "stateIds", { get: function() {
    var r = this, t = qe(Object.keys(this.states).map(function(n) {
      return r.states[n].stateIds;
    }));
    return [this.id].concat(t);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "events", { get: function() {
    var r, t, n, o;
    if (this.__cache.events)
      return this.__cache.events;
    var s = this.states, p = new Set(this.ownEvents);
    if (s)
      try {
        for (var v = xe(Object.keys(s)), m = v.next(); !m.done; m = v.next()) {
          var d = m.value, f = s[d];
          if (f.states)
            try {
              for (var g = (n = void 0, xe(f.events)), w = g.next(); !w.done; w = g.next()) {
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
          m && !m.done && (t = v.return) && t.call(v);
        } finally {
          if (r)
            throw r.error;
        }
      }
    return this.__cache.events = Array.from(p);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "ownEvents", { get: function() {
    var r = new Set(this.transitions.filter(function(t) {
      return !(!t.target && !t.actions.length && t.internal);
    }).map(function(t) {
      return t.eventType;
    }));
    return Array.from(r);
  }, enumerable: false, configurable: true }), e.prototype.resolveTarget = function(r) {
    var t = this;
    if (r !== void 0)
      return r.map(function(n) {
        if (!Ce(n))
          return n;
        var o = n[0] === t.delimiter;
        if (o && !t.parent)
          return t.getStateNodeByPath(n.slice(1));
        var s = o ? t.key + n : n;
        if (t.parent)
          try {
            var p = t.parent.getStateNodeByPath(s);
            return p;
          } catch (v) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(v.message));
          }
        else
          return t.getStateNodeByPath(s);
      });
  }, e.prototype.formatTransition = function(r) {
    var t = this, n = tf(r.target), o = "internal" in r ? r.internal : n ? n.some(function(m) {
      return Ce(m) && m[0] === t.delimiter;
    }) : true, s = this.machine.options.guards, p = this.resolveTarget(n), v = V(V({}, r), { actions: jr(lr(r.actions)), cond: Ds(r.cond, s), target: p, source: this, internal: o, eventType: r.event, toJSON: function() {
      return V(V({}, v), { target: v.target ? v.target.map(function(m) {
        return "#".concat(m.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return v;
  }, e.prototype.formatTransitions = function() {
    var r, t, n = this, o;
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
      return G.onDone && $.push.apply($, ke([], Se(oi(String(Hi(G.id)), G.onDone)), false)), G.onError && $.push.apply($, ke([], Se(oi(String(ai(G.id)), G.onError)), false)), $;
    })), S = this.after, T = qe(ke(ke(ke(ke([], Se(g), false), Se(w), false), Se(o), false), Se(f), false).map(function(G) {
      return lr(G).map(function($) {
        return n.formatTransition($);
      });
    }));
    try {
      for (var C = xe(S), z = C.next(); !z.done; z = C.next()) {
        var N = z.value;
        T.push(N);
      }
    } catch (G) {
      r = { error: G };
    } finally {
      try {
        z && !z.done && (t = C.return) && t.call(C);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return T;
  }, e;
}();
var Cf = false;
function ht(e, r) {
  return !je && !("predictableActionArguments" in e) && !Cf && (Cf = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new Tf(e, r);
}
__name(ht, "ht");
u(ht, "createMachine");
var Mf = Lt(en(), 1);
var Yo = Lt(Vo(), 1);
var Hs = u((e) => e != null && typeof e.draggable == "boolean", "isDraggable");
var Bs = u((e) => e != null && e.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Bu = u((e) => e != null && e.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function me(e) {
  class r extends e {
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
var si = u((e) => typeof e == "object" && e !== null && typeof e.flag == "string", "isFlaggable");
function If(e) {
  class r extends e {
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
var mt = "bottom";
var ut = "right";
var nt = "left";
var $s = "auto";
var zn = [Je, mt, ut, nt];
var on = "start";
var li = "end";
var Af = "clippingParents";
var qs = "viewport";
var Xi = "popper";
var Pf = "reference";
var Hu = zn.reduce(function(e, r) {
  return e.concat([r + "-" + on, r + "-" + li]);
}, []);
var Fs = [].concat(zn, [$s]).reduce(function(e, r) {
  return e.concat([r, r + "-" + on, r + "-" + li]);
}, []);
var Vb = "beforeRead";
var Yb = "read";
var Xb = "afterRead";
var Zb = "beforeMain";
var Qb = "main";
var Kb = "afterMain";
var Jb = "beforeWrite";
var ey = "write";
var ty = "afterWrite";
var _f = [Vb, Yb, Xb, Zb, Qb, Kb, Jb, ey, ty];
function yt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
__name(yt, "yt");
u(yt, "getNodeName");
function it(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var r = e.ownerDocument;
    return r && r.defaultView || window;
  }
  return e;
}
__name(it, "it");
u(it, "getWindow");
function Br(e) {
  var r = it(e).Element;
  return e instanceof r || e instanceof Element;
}
__name(Br, "Br");
u(Br, "isElement");
function vt(e) {
  var r = it(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
__name(vt, "vt");
u(vt, "isHTMLElement");
function Us(e) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = it(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
__name(Us, "Us");
u(Us, "isShadowRoot");
function ry(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(t) {
    var n = r.styles[t] || {}, o = r.attributes[t] || {}, s = r.elements[t];
    !vt(s) || !yt(s) || (Object.assign(s.style, n), Object.keys(o).forEach(function(p) {
      var v = o[p];
      v === false ? s.removeAttribute(p) : s.setAttribute(p, v === true ? "" : v);
    }));
  });
}
__name(ry, "ry");
u(ry, "applyStyles");
function ny(e) {
  var r = e.state, t = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, t.popper), r.styles = t, r.elements.arrow && Object.assign(r.elements.arrow.style, t.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var o = r.elements[n], s = r.attributes[n] || {}, p = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : t[n]), v = p.reduce(function(m, d) {
        return m[d] = "", m;
      }, {});
      !vt(o) || !yt(o) || (Object.assign(o.style, v), Object.keys(s).forEach(function(m) {
        o.removeAttribute(m);
      }));
    });
  };
}
__name(ny, "ny");
u(ny, "effect");
var Xo = { name: "applyStyles", enabled: true, phase: "write", fn: ry, effect: ny, requires: ["computeStyles"] };
function wt(e) {
  return e.split("-")[0];
}
__name(wt, "wt");
u(wt, "getBasePlacement");
var Ar = Math.max;
var ui = Math.min;
var an = Math.round;
function xr(e, r) {
  r === void 0 && (r = false);
  var t = e.getBoundingClientRect(), n = 1, o = 1;
  if (vt(e) && r) {
    var s = e.offsetHeight, p = e.offsetWidth;
    p > 0 && (n = an(t.width) / p || 1), s > 0 && (o = an(t.height) / s || 1);
  }
  return { width: t.width / n, height: t.height / o, top: t.top / o, right: t.right / n, bottom: t.bottom / o, left: t.left / n, x: t.left / n, y: t.top / o };
}
__name(xr, "xr");
u(xr, "getBoundingClientRect");
function ci(e) {
  var r = xr(e), t = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(r.width - t) <= 1 && (t = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: e.offsetLeft, y: e.offsetTop, width: t, height: n };
}
__name(ci, "ci");
u(ci, "getLayoutRect");
function Zo(e, r) {
  var t = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return true;
  if (t && Us(t)) {
    var n = r;
    do {
      if (n && e.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name(Zo, "Zo");
u(Zo, "contains");
function jt(e) {
  return it(e).getComputedStyle(e);
}
__name(jt, "jt");
u(jt, "getComputedStyle");
function $u(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
__name($u, "$u");
u($u, "isTableElement");
function Ct(e) {
  return ((Br(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
__name(Ct, "Ct");
u(Ct, "getDocumentElement");
function sn(e) {
  return yt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Us(e) ? e.host : null) || Ct(e);
}
__name(sn, "sn");
u(sn, "getParentNode");
function zf(e) {
  return !vt(e) || jt(e).position === "fixed" ? null : e.offsetParent;
}
__name(zf, "zf");
u(zf, "getTrueOffsetParent");
function iy(e) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && vt(e)) {
    var n = jt(e);
    if (n.position === "fixed")
      return null;
  }
  for (var o = sn(e); vt(o) && ["html", "body"].indexOf(yt(o)) < 0; ) {
    var s = jt(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || r && s.willChange === "filter" || r && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
__name(iy, "iy");
u(iy, "getContainingBlock");
function Pr(e) {
  for (var r = it(e), t = zf(e); t && $u(t) && jt(t).position === "static"; )
    t = zf(t);
  return t && (yt(t) === "html" || yt(t) === "body" && jt(t).position === "static") ? r : t || iy(e) || r;
}
__name(Pr, "Pr");
u(Pr, "getOffsetParent");
function pi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
__name(pi, "pi");
u(pi, "getMainAxisFromPlacement");
function di(e, r, t) {
  return Ar(e, ui(r, t));
}
__name(di, "di");
u(di, "within");
function Rf(e, r, t) {
  var n = di(e, r, t);
  return n > t ? t : n;
}
__name(Rf, "Rf");
u(Rf, "withinMaxClamp");
function Qo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(Qo, "Qo");
u(Qo, "getFreshSideObject");
function Ko(e) {
  return Object.assign({}, Qo(), e);
}
__name(Ko, "Ko");
u(Ko, "mergePaddingObject");
function Jo(e, r) {
  return r.reduce(function(t, n) {
    return t[n] = e, t;
  }, {});
}
__name(Jo, "Jo");
u(Jo, "expandToHashMap");
var oy = u(function(r, t) {
  return r = typeof r == "function" ? r(Object.assign({}, t.rects, { placement: t.placement })) : r, Ko(typeof r != "number" ? r : Jo(r, zn));
}, "toPaddingObject");
function ay(e) {
  var r, t = e.state, n = e.name, o = e.options, s = t.elements.arrow, p = t.modifiersData.popperOffsets, v = wt(t.placement), m = pi(v), d = [nt, ut].indexOf(v) >= 0, f = d ? "height" : "width";
  if (!(!s || !p)) {
    var g = oy(o.padding, t), w = ci(s), S = m === "y" ? Je : nt, T = m === "y" ? mt : ut, C = t.rects.reference[f] + t.rects.reference[m] - p[m] - t.rects.popper[f], z = p[m] - t.rects.reference[m], N = Pr(s), G = N ? m === "y" ? N.clientHeight || 0 : N.clientWidth || 0 : 0, $ = C / 2 - z / 2, A = g[S], ee = G - w[f] - g[T], _ = G / 2 - w[f] / 2 + $, B = di(A, _, ee), te = m;
    t.modifiersData[n] = (r = {}, r[te] = B, r.centerOffset = B - _, r);
  }
}
__name(ay, "ay");
u(ay, "arrow");
function sy(e) {
  var r = e.state, t = e.options, n = t.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = r.elements.popper.querySelector(o), !o) || Zo(r.elements.popper, o) && (r.elements.arrow = o));
}
__name(sy, "sy");
u(sy, "effect");
var Df = { name: "arrow", enabled: true, phase: "main", fn: ay, effect: sy, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Er(e) {
  return e.split("-")[1];
}
__name(Er, "Er");
u(Er, "getVariation");
var ly = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function uy(e) {
  var r = e.x, t = e.y, n = window, o = n.devicePixelRatio || 1;
  return { x: an(r * o) / o || 0, y: an(t * o) / o || 0 };
}
__name(uy, "uy");
u(uy, "roundOffsetsByDPR");
function kf(e) {
  var r, t = e.popper, n = e.popperRect, o = e.placement, s = e.variation, p = e.offsets, v = e.position, m = e.gpuAcceleration, d = e.adaptive, f = e.roundOffsets, g = e.isFixed, w = p.x, S = w === void 0 ? 0 : w, T = p.y, C = T === void 0 ? 0 : T, z = typeof f == "function" ? f({ x: S, y: C }) : { x: S, y: C };
  S = z.x, C = z.y;
  var N = p.hasOwnProperty("x"), G = p.hasOwnProperty("y"), $ = nt, A = Je, ee = window;
  if (d) {
    var _ = Pr(t), B = "clientHeight", te = "clientWidth";
    if (_ === it(t) && (_ = Ct(t), jt(_).position !== "static" && v === "absolute" && (B = "scrollHeight", te = "scrollWidth")), _ = _, o === Je || (o === nt || o === ut) && s === li) {
      A = mt;
      var J = g && ee.visualViewport ? ee.visualViewport.height : _[B];
      C -= J - n.height, C *= m ? 1 : -1;
    }
    if (o === nt || (o === Je || o === mt) && s === li) {
      $ = ut;
      var ue = g && ee.visualViewport ? ee.visualViewport.width : _[te];
      S -= ue - n.width, S *= m ? 1 : -1;
    }
  }
  var Q = Object.assign({ position: v }, d && ly), ie = f === true ? uy({ x: S, y: C }) : { x: S, y: C };
  if (S = ie.x, C = ie.y, m) {
    var q;
    return Object.assign({}, Q, (q = {}, q[A] = G ? "0" : "", q[$] = N ? "0" : "", q.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + C + "px)" : "translate3d(" + S + "px, " + C + "px, 0)", q));
  }
  return Object.assign({}, Q, (r = {}, r[A] = G ? C + "px" : "", r[$] = N ? S + "px" : "", r.transform = "", r));
}
__name(kf, "kf");
u(kf, "mapToStyles");
function cy(e) {
  var r = e.state, t = e.options, n = t.gpuAcceleration, o = n === void 0 ? true : n, s = t.adaptive, p = s === void 0 ? true : s, v = t.roundOffsets, m = v === void 0 ? true : v;
  if (false)
    var d;
  var f = { placement: wt(r.placement), variation: Er(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: o, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, kf(Object.assign({}, f, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: p, roundOffsets: m })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, kf(Object.assign({}, f, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(cy, "cy");
u(cy, "computeStyles");
var Nf = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: cy, data: {} };
var Ws = { passive: true };
function py(e) {
  var r = e.state, t = e.instance, n = e.options, o = n.scroll, s = o === void 0 ? true : o, p = n.resize, v = p === void 0 ? true : p, m = it(r.elements.popper), d = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return s && d.forEach(function(f) {
    f.addEventListener("scroll", t.update, Ws);
  }), v && m.addEventListener("resize", t.update, Ws), function() {
    s && d.forEach(function(f) {
      f.removeEventListener("scroll", t.update, Ws);
    }), v && m.removeEventListener("resize", t.update, Ws);
  };
}
__name(py, "py");
u(py, "effect");
var Gf = { name: "eventListeners", enabled: true, phase: "write", fn: u(function() {
}, "fn"), effect: py, data: {} };
var dy = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Zi(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return dy[r];
  });
}
__name(Zi, "Zi");
u(Zi, "getOppositePlacement");
var fy = { start: "end", end: "start" };
function Vs(e) {
  return e.replace(/start|end/g, function(r) {
    return fy[r];
  });
}
__name(Vs, "Vs");
u(Vs, "getOppositeVariationPlacement");
function fi(e) {
  var r = it(e), t = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: t, scrollTop: n };
}
__name(fi, "fi");
u(fi, "getWindowScroll");
function hi(e) {
  return xr(Ct(e)).left + fi(e).scrollLeft;
}
__name(hi, "hi");
u(hi, "getWindowScrollBarX");
function qu(e) {
  var r = it(e), t = Ct(e), n = r.visualViewport, o = t.clientWidth, s = t.clientHeight, p = 0, v = 0;
  return n && (o = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = n.offsetLeft, v = n.offsetTop)), { width: o, height: s, x: p + hi(e), y: v };
}
__name(qu, "qu");
u(qu, "getViewportRect");
function Fu(e) {
  var r, t = Ct(e), n = fi(e), o = (r = e.ownerDocument) == null ? void 0 : r.body, s = Ar(t.scrollWidth, t.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), p = Ar(t.scrollHeight, t.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), v = -n.scrollLeft + hi(e), m = -n.scrollTop;
  return jt(o || t).direction === "rtl" && (v += Ar(t.clientWidth, o ? o.clientWidth : 0) - s), { width: s, height: p, x: v, y: m };
}
__name(Fu, "Fu");
u(Fu, "getDocumentRect");
function mi(e) {
  var r = jt(e), t = r.overflow, n = r.overflowX, o = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + o + n);
}
__name(mi, "mi");
u(mi, "isScrollParent");
function Ys(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : vt(e) && mi(e) ? e : Ys(sn(e));
}
__name(Ys, "Ys");
u(Ys, "getScrollParent");
function Rn(e, r) {
  var t;
  r === void 0 && (r = []);
  var n = Ys(e), o = n === ((t = e.ownerDocument) == null ? void 0 : t.body), s = it(n), p = o ? [s].concat(s.visualViewport || [], mi(n) ? n : []) : n, v = r.concat(p);
  return o ? v : v.concat(Rn(sn(p)));
}
__name(Rn, "Rn");
u(Rn, "listScrollParents");
function Qi(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
__name(Qi, "Qi");
u(Qi, "rectToClientRect");
function hy(e) {
  var r = xr(e);
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(hy, "hy");
u(hy, "getInnerBoundingClientRect");
function Lf(e, r) {
  return r === qs ? Qi(qu(e)) : Br(r) ? hy(r) : Qi(Fu(Ct(e)));
}
__name(Lf, "Lf");
u(Lf, "getClientRectFromMixedType");
function my(e) {
  var r = Rn(sn(e)), t = ["absolute", "fixed"].indexOf(jt(e).position) >= 0, n = t && vt(e) ? Pr(e) : e;
  return Br(n) ? r.filter(function(o) {
    return Br(o) && Zo(o, n) && yt(o) !== "body";
  }) : [];
}
__name(my, "my");
u(my, "getClippingParents");
function Uu(e, r, t) {
  var n = r === "clippingParents" ? my(e) : [].concat(r), o = [].concat(n, [t]), s = o[0], p = o.reduce(function(v, m) {
    var d = Lf(e, m);
    return v.top = Ar(d.top, v.top), v.right = ui(d.right, v.right), v.bottom = ui(d.bottom, v.bottom), v.left = Ar(d.left, v.left), v;
  }, Lf(e, s));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
__name(Uu, "Uu");
u(Uu, "getClippingRect");
function ea(e) {
  var r = e.reference, t = e.element, n = e.placement, o = n ? wt(n) : null, s = n ? Er(n) : null, p = r.x + r.width / 2 - t.width / 2, v = r.y + r.height / 2 - t.height / 2, m;
  switch (o) {
    case Je:
      m = { x: p, y: r.y - t.height };
      break;
    case mt:
      m = { x: p, y: r.y + r.height };
      break;
    case ut:
      m = { x: r.x + r.width, y: v };
      break;
    case nt:
      m = { x: r.x - t.width, y: v };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  var d = o ? pi(o) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (s) {
      case on:
        m[d] = m[d] - (r[f] / 2 - t[f] / 2);
        break;
      case li:
        m[d] = m[d] + (r[f] / 2 - t[f] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(ea, "ea");
u(ea, "computeOffsets");
function _r(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.placement, o = n === void 0 ? e.placement : n, s = t.boundary, p = s === void 0 ? Af : s, v = t.rootBoundary, m = v === void 0 ? qs : v, d = t.elementContext, f = d === void 0 ? Xi : d, g = t.altBoundary, w = g === void 0 ? false : g, S = t.padding, T = S === void 0 ? 0 : S, C = Ko(typeof T != "number" ? T : Jo(T, zn)), z = f === Xi ? Pf : Xi, N = e.rects.popper, G = e.elements[w ? z : f], $ = Uu(Br(G) ? G : G.contextElement || Ct(e.elements.popper), p, m), A = xr(e.elements.reference), ee = ea({ reference: A, element: N, strategy: "absolute", placement: o }), _ = Qi(Object.assign({}, N, ee)), B = f === Xi ? _ : A, te = { top: $.top - B.top + C.top, bottom: B.bottom - $.bottom + C.bottom, left: $.left - B.left + C.left, right: B.right - $.right + C.right }, J = e.modifiersData.offset;
  if (f === Xi && J) {
    var ue = J[o];
    Object.keys(te).forEach(function(Q) {
      var ie = [ut, mt].indexOf(Q) >= 0 ? 1 : -1, q = [Je, mt].indexOf(Q) >= 0 ? "y" : "x";
      te[Q] += ue[q] * ie;
    });
  }
  return te;
}
__name(_r, "_r");
u(_r, "detectOverflow");
function Wu(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.placement, o = t.boundary, s = t.rootBoundary, p = t.padding, v = t.flipVariations, m = t.allowedAutoPlacements, d = m === void 0 ? Fs : m, f = Er(n), g = f ? v ? Hu : Hu.filter(function(T) {
    return Er(T) === f;
  }) : zn, w = g.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  w.length === 0 && (w = g);
  var S = w.reduce(function(T, C) {
    return T[C] = _r(e, { placement: C, boundary: o, rootBoundary: s, padding: p })[wt(C)], T;
  }, {});
  return Object.keys(S).sort(function(T, C) {
    return S[T] - S[C];
  });
}
__name(Wu, "Wu");
u(Wu, "computeAutoPlacement");
function vy(e) {
  if (wt(e) === $s)
    return [];
  var r = Zi(e);
  return [Vs(e), r, Vs(r)];
}
__name(vy, "vy");
u(vy, "getExpandedFallbackPlacements");
function gy(e) {
  var r = e.state, t = e.options, n = e.name;
  if (!r.modifiersData[n]._skip) {
    for (var o = t.mainAxis, s = o === void 0 ? true : o, p = t.altAxis, v = p === void 0 ? true : p, m = t.fallbackPlacements, d = t.padding, f = t.boundary, g = t.rootBoundary, w = t.altBoundary, S = t.flipVariations, T = S === void 0 ? true : S, C = t.allowedAutoPlacements, z = r.options.placement, N = wt(z), G = N === z, $ = m || (G || !T ? [Zi(z)] : vy(z)), A = [z].concat($).reduce(function(Be, tt) {
      return Be.concat(wt(tt) === $s ? Wu(r, { placement: tt, boundary: f, rootBoundary: g, padding: d, flipVariations: T, allowedAutoPlacements: C }) : tt);
    }, []), ee = r.rects.reference, _ = r.rects.popper, B = /* @__PURE__ */ new Map(), te = true, J = A[0], ue = 0; ue < A.length; ue++) {
      var Q = A[ue], ie = wt(Q), q = Er(Q) === on, oe = [Je, mt].indexOf(ie) >= 0, et = oe ? "width" : "height", Ze = _r(r, { placement: Q, boundary: f, rootBoundary: g, altBoundary: w, padding: d }), ze = oe ? q ? ut : nt : q ? mt : Je;
      ee[et] > _[et] && (ze = Zi(ze));
      var Pe = Zi(ze), We = [];
      if (s && We.push(Ze[ie] <= 0), v && We.push(Ze[ze] <= 0, Ze[Pe] <= 0), We.every(function(Be) {
        return Be;
      })) {
        J = Q, te = false;
        break;
      }
      B.set(Q, We);
    }
    if (te)
      for (var Ke = T ? 3 : 1, Ye = u(function(tt) {
        var fr = A.find(function(Mr) {
          var hr = B.get(Mr);
          if (hr)
            return hr.slice(0, tt).every(function(or) {
              return or;
            });
        });
        if (fr)
          return J = fr, "break";
      }, "_loop"), K = Ke; K > 0; K--) {
        var ir = Ye(K);
        if (ir === "break")
          break;
      }
    r.placement !== J && (r.modifiersData[n]._skip = true, r.placement = J, r.reset = true);
  }
}
__name(gy, "gy");
u(gy, "flip");
var jf = { name: "flip", enabled: true, phase: "main", fn: gy, requiresIfExists: ["offset"], data: { _skip: false } };
function Bf(e, r, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: e.top - r.height - t.y, right: e.right - r.width + t.x, bottom: e.bottom - r.height + t.y, left: e.left - r.width - t.x };
}
__name(Bf, "Bf");
u(Bf, "getSideOffsets");
function Hf(e) {
  return [Je, ut, mt, nt].some(function(r) {
    return e[r] >= 0;
  });
}
__name(Hf, "Hf");
u(Hf, "isAnySideFullyClipped");
function by(e) {
  var r = e.state, t = e.name, n = r.rects.reference, o = r.rects.popper, s = r.modifiersData.preventOverflow, p = _r(r, { elementContext: "reference" }), v = _r(r, { altBoundary: true }), m = Bf(p, n), d = Bf(v, o, s), f = Hf(m), g = Hf(d);
  r.modifiersData[t] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: f, hasPopperEscaped: g }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": g });
}
__name(by, "by");
u(by, "hide");
var $f = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: by };
function yy(e, r, t) {
  var n = wt(e), o = [nt, Je].indexOf(n) >= 0 ? -1 : 1, s = typeof t == "function" ? t(Object.assign({}, r, { placement: e })) : t, p = s[0], v = s[1];
  return p = p || 0, v = (v || 0) * o, [nt, ut].indexOf(n) >= 0 ? { x: v, y: p } : { x: p, y: v };
}
__name(yy, "yy");
u(yy, "distanceAndSkiddingToXY");
function wy(e) {
  var r = e.state, t = e.options, n = e.name, o = t.offset, s = o === void 0 ? [0, 0] : o, p = Fs.reduce(function(f, g) {
    return f[g] = yy(g, r.rects, s), f;
  }, {}), v = p[r.placement], m = v.x, d = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m, r.modifiersData.popperOffsets.y += d), r.modifiersData[n] = p;
}
__name(wy, "wy");
u(wy, "offset");
var qf = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: wy };
function xy(e) {
  var r = e.state, t = e.name;
  r.modifiersData[t] = ea({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(xy, "xy");
u(xy, "popperOffsets");
var Ff = { name: "popperOffsets", enabled: true, phase: "read", fn: xy, data: {} };
function Vu(e) {
  return e === "x" ? "y" : "x";
}
__name(Vu, "Vu");
u(Vu, "getAltAxis");
function Ey(e) {
  var r = e.state, t = e.options, n = e.name, o = t.mainAxis, s = o === void 0 ? true : o, p = t.altAxis, v = p === void 0 ? false : p, m = t.boundary, d = t.rootBoundary, f = t.altBoundary, g = t.padding, w = t.tether, S = w === void 0 ? true : w, T = t.tetherOffset, C = T === void 0 ? 0 : T, z = _r(r, { boundary: m, rootBoundary: d, padding: g, altBoundary: f }), N = wt(r.placement), G = Er(r.placement), $ = !G, A = pi(N), ee = Vu(A), _ = r.modifiersData.popperOffsets, B = r.rects.reference, te = r.rects.popper, J = typeof C == "function" ? C(Object.assign({}, r.rects, { placement: r.placement })) : C, ue = typeof J == "number" ? { mainAxis: J, altAxis: J } : Object.assign({ mainAxis: 0, altAxis: 0 }, J), Q = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, ie = { x: 0, y: 0 };
  if (_) {
    if (s) {
      var q, oe = A === "y" ? Je : nt, et = A === "y" ? mt : ut, Ze = A === "y" ? "height" : "width", ze = _[A], Pe = ze + z[oe], We = ze - z[et], Ke = S ? -te[Ze] / 2 : 0, Ye = G === on ? B[Ze] : te[Ze], K = G === on ? -te[Ze] : -B[Ze], ir = r.elements.arrow, Be = S && ir ? ci(ir) : { width: 0, height: 0 }, tt = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : Qo(), fr = tt[oe], Mr = tt[et], hr = di(0, B[Ze], Be[Ze]), or = $ ? B[Ze] / 2 - Ke - hr - fr - ue.mainAxis : Ye - hr - fr - ue.mainAxis, Dr = $ ? -B[Ze] / 2 + Ke + hr + Mr + ue.mainAxis : K + hr + Mr + ue.mainAxis, Wr = r.elements.arrow && Pr(r.elements.arrow), Nn = Wr ? A === "y" ? Wr.clientTop || 0 : Wr.clientLeft || 0 : 0, _e = (q = Q == null ? void 0 : Q[A]) != null ? q : 0, Gn = ze + or - _e - Nn, Ln = ze + Dr - _e, kt = di(S ? ui(Pe, Gn) : Pe, ze, S ? Ar(We, Ln) : We);
      _[A] = kt, ie[A] = kt - ze;
    }
    if (v) {
      var Vr, bi = A === "x" ? Je : nt, fn = A === "x" ? mt : ut, Ir = _[ee], It = ee === "y" ? "height" : "width", kr = Ir + z[bi], qt = Ir - z[fn], jn = [Je, nt].indexOf(N) !== -1, Yr = (Vr = Q == null ? void 0 : Q[ee]) != null ? Vr : 0, Bn = jn ? kr : Ir - B[It] - te[It] - Yr + ue.altAxis, hn = jn ? Ir + B[It] + te[It] - Yr - ue.altAxis : qt, Hn = S && jn ? Rf(Bn, Ir, hn) : di(S ? Bn : kr, Ir, S ? hn : qt);
      _[ee] = Hn, ie[ee] = Hn - Ir;
    }
    r.modifiersData[n] = ie;
  }
}
__name(Ey, "Ey");
u(Ey, "preventOverflow");
var Uf = { name: "preventOverflow", enabled: true, phase: "main", fn: Ey, requiresIfExists: ["offset"] };
function Yu(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
__name(Yu, "Yu");
u(Yu, "getHTMLElementScroll");
function Xu(e) {
  return e === it(e) || !vt(e) ? fi(e) : Yu(e);
}
__name(Xu, "Xu");
u(Xu, "getNodeScroll");
function Sy(e) {
  var r = e.getBoundingClientRect(), t = an(r.width) / e.offsetWidth || 1, n = an(r.height) / e.offsetHeight || 1;
  return t !== 1 || n !== 1;
}
__name(Sy, "Sy");
u(Sy, "isElementScaled");
function Zu(e, r, t) {
  t === void 0 && (t = false);
  var n = vt(r), o = vt(r) && Sy(r), s = Ct(r), p = xr(e, o), v = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (n || !n && !t) && ((yt(r) !== "body" || mi(s)) && (v = Xu(r)), vt(r) ? (m = xr(r, true), m.x += r.clientLeft, m.y += r.clientTop) : s && (m.x = hi(s))), { x: p.left + v.scrollLeft - m.x, y: p.top + v.scrollTop - m.y, width: p.width, height: p.height };
}
__name(Zu, "Zu");
u(Zu, "getCompositeRect");
function Ty(e) {
  var r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    r.set(s.name, s);
  });
  function o(s) {
    t.add(s.name);
    var p = [].concat(s.requires || [], s.requiresIfExists || []);
    p.forEach(function(v) {
      if (!t.has(v)) {
        var m = r.get(v);
        m && o(m);
      }
    }), n.push(s);
  }
  __name(o, "o");
  return u(o, "sort"), e.forEach(function(s) {
    t.has(s.name) || o(s);
  }), n;
}
__name(Ty, "Ty");
u(Ty, "order");
function Qu(e) {
  var r = Ty(e);
  return _f.reduce(function(t, n) {
    return t.concat(r.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
__name(Qu, "Qu");
u(Qu, "orderModifiers");
function Ku(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(t) {
      Promise.resolve().then(function() {
        r = void 0, t(e());
      });
    })), r;
  };
}
__name(Ku, "Ku");
u(Ku, "debounce");
function Ju(e) {
  var r = e.reduce(function(t, n) {
    var o = t[n.name];
    return t[n.name] = o ? Object.assign({}, o, n, { options: Object.assign({}, o.options, n.options), data: Object.assign({}, o.data, n.data) }) : n, t;
  }, {});
  return Object.keys(r).map(function(t) {
    return r[t];
  });
}
__name(Ju, "Ju");
u(Ju, "mergeByName");
var Wf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Vf() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(Vf, "Vf");
u(Vf, "areValidElements");
function Yf(e) {
  e === void 0 && (e = {});
  var r = e, t = r.defaultModifiers, n = t === void 0 ? [] : t, o = r.defaultOptions, s = o === void 0 ? Wf : o;
  return u(function(v, m, d) {
    d === void 0 && (d = s);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Wf, s), modifiersData: {}, elements: { reference: v, popper: m }, attributes: {}, styles: {} }, g = [], w = false, S = { state: f, setOptions: u(function(N) {
      var G = typeof N == "function" ? N(f.options) : N;
      C(), f.options = Object.assign({}, s, f.options, G), f.scrollParents = { reference: Br(v) ? Rn(v) : v.contextElement ? Rn(v.contextElement) : [], popper: Rn(m) };
      var $ = Qu(Ju([].concat(n, f.options.modifiers)));
      if (f.orderedModifiers = $.filter(function(Q) {
        return Q.enabled;
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
          f.rects = { reference: Zu(G, Pr($), f.options.strategy === "fixed"), popper: ci($) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(Q) {
            return f.modifiersData[Q.name] = Object.assign({}, Q.data);
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
    }, "forceUpdate"), update: Ku(function() {
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
function tc(e, r, t) {
  if (Array.isArray(e)) {
    var n = e[r];
    return n == null ? Array.isArray(t) ? t[r] : t : n;
  }
  return e;
}
__name(tc, "tc");
u(tc, "getValueAtIndexOrReturn");
function sc(e, r) {
  var t = {}.toString.call(e);
  return t.indexOf("[object") === 0 && t.indexOf(r + "]") > -1;
}
__name(sc, "sc");
u(sc, "isType");
function lh(e, r) {
  return typeof e == "function" ? e.apply(void 0, r) : e;
}
__name(lh, "lh");
u(lh, "invokeWithArgsOrReturn");
function Xf(e, r) {
  if (r === 0)
    return e;
  var t;
  return function(n) {
    clearTimeout(t), t = setTimeout(function() {
      e(n);
    }, r);
  };
}
__name(Xf, "Xf");
u(Xf, "debounce");
function Iy(e) {
  return e.split(/\s+/).filter(Boolean);
}
__name(Iy, "Iy");
u(Iy, "splitBySpaces");
function Ki(e) {
  return [].concat(e);
}
__name(Ki, "Ki");
u(Ki, "normalizeToArray");
function Zf(e, r) {
  e.indexOf(r) === -1 && e.push(r);
}
__name(Zf, "Zf");
u(Zf, "pushIfUnique");
function Ay(e) {
  return e.filter(function(r, t) {
    return e.indexOf(r) === t;
  });
}
__name(Ay, "Ay");
u(Ay, "unique");
function Py(e) {
  return e.split("-")[0];
}
__name(Py, "Py");
u(Py, "getBasePlacement");
function Zs(e) {
  return [].slice.call(e);
}
__name(Zs, "Zs");
u(Zs, "arrayFrom");
function Qf(e) {
  return Object.keys(e).reduce(function(r, t) {
    return e[t] !== void 0 && (r[t] = e[t]), r;
  }, {});
}
__name(Qf, "Qf");
u(Qf, "removeUndefinedProps");
function ta() {
  return document.createElement("div");
}
__name(ta, "ta");
u(ta, "div");
function Qs(e) {
  return ["Element", "Fragment"].some(function(r) {
    return sc(e, r);
  });
}
__name(Qs, "Qs");
u(Qs, "isElement");
function _y(e) {
  return sc(e, "NodeList");
}
__name(_y, "_y");
u(_y, "isNodeList");
function zy(e) {
  return sc(e, "MouseEvent");
}
__name(zy, "zy");
u(zy, "isMouseEvent");
function Ry(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
__name(Ry, "Ry");
u(Ry, "isReferenceElement");
function Dy(e) {
  return Qs(e) ? [e] : _y(e) ? Zs(e) : Array.isArray(e) ? e : Zs(document.querySelectorAll(e));
}
__name(Dy, "Dy");
u(Dy, "getArrayOfElements");
function rc(e, r) {
  e.forEach(function(t) {
    t && (t.style.transitionDuration = r + "ms");
  });
}
__name(rc, "rc");
u(rc, "setTransitionDuration");
function Kf(e, r) {
  e.forEach(function(t) {
    t && t.setAttribute("data-state", r);
  });
}
__name(Kf, "Kf");
u(Kf, "setVisibilityState");
function ky(e) {
  var r, t = Ki(e), n = t[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(ky, "ky");
u(ky, "getOwnerDocument");
function Ny(e, r) {
  var t = r.clientX, n = r.clientY;
  return e.every(function(o) {
    var s = o.popperRect, p = o.popperState, v = o.props, m = v.interactiveBorder, d = Py(p.placement), f = p.modifiersData.offset;
    if (!f)
      return true;
    var g = d === "bottom" ? f.top.y : 0, w = d === "top" ? f.bottom.y : 0, S = d === "right" ? f.left.x : 0, T = d === "left" ? f.right.x : 0, C = s.top - n + g > m, z = n - s.bottom - w > m, N = s.left - t + S > m, G = t - s.right - T > m;
    return C || z || N || G;
  });
}
__name(Ny, "Ny");
u(Ny, "isCursorOutsideInteractiveBorder");
function nc(e, r, t) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(o) {
    e[n](o, t);
  });
}
__name(nc, "nc");
u(nc, "updateTransitionEndListener");
function Jf(e, r) {
  for (var t = r; t; ) {
    var n;
    if (e.contains(t))
      return true;
    t = t.getRootNode == null || (n = t.getRootNode()) == null ? void 0 : n.host;
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
  var e = performance.now();
  e - eh < 20 && (Hr.isTouch = false, document.removeEventListener("mousemove", uh)), eh = e;
}
__name(uh, "uh");
u(uh, "onDocumentMouseMove");
function Ly() {
  var e = document.activeElement;
  if (Ry(e)) {
    var r = e._tippy;
    e.blur && !r.state.isVisible && e.blur();
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
  var t = Object.keys(r);
  t.forEach(function(n) {
    zr[n] = r[n];
  });
}, "setDefaultProps");
function ch(e) {
  var r = e.plugins || [], t = r.reduce(function(n, o) {
    var s = o.name, p = o.defaultValue;
    if (s) {
      var v;
      n[s] = e[s] !== void 0 ? e[s] : (v = zr[s]) != null ? v : p;
    }
    return n;
  }, {});
  return Object.assign({}, e, t);
}
__name(ch, "ch");
u(ch, "getExtendedPassedProps");
function Wy(e, r) {
  var t = r ? Object.keys(ch(Object.assign({}, zr, { plugins: r }))) : Fy, n = t.reduce(function(o, s) {
    var p = (e.getAttribute("data-tippy-" + s) || "").trim();
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
function th(e, r) {
  var t = Object.assign({}, r, { content: lh(r.content, [e]) }, r.ignoreAttributes ? {} : Wy(e, r.plugins));
  return t.aria = Object.assign({}, zr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? r.interactive : t.aria.expanded, content: t.aria.content === "auto" ? r.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(th, "th");
u(th, "evaluateProps");
var Vy = u(function() {
  return "innerHTML";
}, "innerHTML");
function oc(e, r) {
  e[Vy()] = r;
}
__name(oc, "oc");
u(oc, "dangerouslySetInnerHTML");
function rh(e) {
  var r = ta();
  return e === true ? r.className = oh : (r.className = ah, Qs(e) ? r.appendChild(e) : oc(r, e)), r;
}
__name(rh, "rh");
u(rh, "createArrowElement");
function nh(e, r) {
  Qs(r.content) ? (oc(e, ""), e.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? oc(e, r.content) : e.textContent = r.content);
}
__name(nh, "nh");
u(nh, "setContent");
function ac(e) {
  var r = e.firstElementChild, t = Zs(r.children);
  return { box: r, content: t.find(function(n) {
    return n.classList.contains(ih);
  }), arrow: t.find(function(n) {
    return n.classList.contains(oh) || n.classList.contains(ah);
  }), backdrop: t.find(function(n) {
    return n.classList.contains(My);
  }) };
}
__name(ac, "ac");
u(ac, "getChildren");
function ph(e) {
  var r = ta(), t = ta();
  t.className = Oy, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var n = ta();
  n.className = ih, n.setAttribute("data-state", "hidden"), nh(n, e.props), r.appendChild(t), t.appendChild(n), o(e.props, e.props);
  function o(s, p) {
    var v = ac(r), m = v.box, d = v.content, f = v.arrow;
    p.theme ? m.setAttribute("data-theme", p.theme) : m.removeAttribute("data-theme"), typeof p.animation == "string" ? m.setAttribute("data-animation", p.animation) : m.removeAttribute("data-animation"), p.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? m.setAttribute("role", p.role) : m.removeAttribute("role"), (s.content !== p.content || s.allowHTML !== p.allowHTML) && nh(d, e.props), p.arrow ? f ? s.arrow !== p.arrow && (m.removeChild(f), m.appendChild(rh(p.arrow))) : m.appendChild(rh(p.arrow)) : f && m.removeChild(f);
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
function Xy(e, r) {
  var t = th(e, Object.assign({}, zr, ch(Qf(r)))), n, o, s, p = false, v = false, m = false, d = false, f, g, w, S = [], T = Xf(Gn, t.interactiveDebounce), C, z = Yy++, N = null, G = Ay(t.plugins), $ = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: z, reference: e, popper: ta(), popperInstance: N, props: t, state: $, plugins: G, clearDelayTimeouts: Bn, setProps: hn, setContent: Hn, show: io, hide: oo, hideWithInteractivity: ha, enable: jn, disable: Yr, unmount: ma, destroy: dl };
  if (!t.render)
    return A;
  var ee = t.render(A), _ = ee.popper, B = ee.onUpdate;
  _.setAttribute("data-tippy-root", ""), _.id = "tippy-" + A.id, A.popper = _, e._tippy = A, _._tippy = A;
  var te = G.map(function(L) {
    return L.fn(A);
  }), J = e.hasAttribute("aria-expanded");
  return Wr(), Ke(), ze(), Pe("onCreate", [A]), t.showOnCreate && kr(), _.addEventListener("mouseenter", function() {
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
  function Q() {
    return ue()[0] === "hold";
  }
  __name(Q, "Q");
  u(Q, "getIsCustomTouchBehavior");
  function ie() {
    var L;
    return !!((L = A.props.render) != null && L.$$tippy);
  }
  __name(ie, "ie");
  u(ie, "getIsDefaultRenderFn");
  function q() {
    return C || e;
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
  function ze(L) {
    L === void 0 && (L = false), _.style.pointerEvents = A.props.interactive && !L ? "" : "none", _.style.zIndex = "" + A.props.zIndex;
  }
  __name(ze, "ze");
  u(ze, "handleStyles");
  function Pe(L, re, se) {
    if (se === void 0 && (se = true), te.forEach(function(Ee) {
      Ee[L] && Ee[L].apply(Ee, re);
    }), se) {
      var Re;
      (Re = A.props)[L].apply(Re, re);
    }
  }
  __name(Pe, "Pe");
  u(Pe, "invokeHook");
  function We() {
    var L = A.props.aria;
    if (L.content) {
      var re = "aria-" + L.content, se = _.id, Re = Ki(A.props.triggerTarget || e);
      Re.forEach(function(Ee) {
        var xt = Ee.getAttribute(re);
        if (A.state.isVisible)
          Ee.setAttribute(re, xt ? xt + " " + se : se);
        else {
          var Nt = xt && xt.replace(se, "").trim();
          Nt ? Ee.setAttribute(re, Nt) : Ee.removeAttribute(re);
        }
      });
    }
  }
  __name(We, "We");
  u(We, "handleAriaContentAttribute");
  function Ke() {
    if (!(J || !A.props.aria.expanded)) {
      var L = Ki(A.props.triggerTarget || e);
      L.forEach(function(re) {
        A.props.interactive ? re.setAttribute("aria-expanded", A.state.isVisible && re === q() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Ke, "Ke");
  u(Ke, "handleAriaExpandedAttribute");
  function Ye() {
    oe().removeEventListener("mousemove", T), Xs = Xs.filter(function(L) {
      return L !== T;
    });
  }
  __name(Ye, "Ye");
  u(Ye, "cleanupInteractiveMouseListeners");
  function K(L) {
    if (!(Hr.isTouch && (m || L.type === "mousedown"))) {
      var re = L.composedPath && L.composedPath()[0] || L.target;
      if (!(A.props.interactive && Jf(_, re))) {
        if (Ki(A.props.triggerTarget || e).some(function(se) {
          return Jf(se, re);
        })) {
          if (Hr.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Pe("onClickOutside", [A, L]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), v = true, setTimeout(function() {
          v = false;
        }), A.state.isMounted || fr());
      }
    }
  }
  __name(K, "K");
  u(K, "onDocumentPress");
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
    L.addEventListener("mousedown", K, true), L.addEventListener("touchend", K, vi), L.addEventListener("touchstart", Be, vi), L.addEventListener("touchmove", ir, vi);
  }
  __name(tt, "tt");
  u(tt, "addDocumentPress");
  function fr() {
    var L = oe();
    L.removeEventListener("mousedown", K, true), L.removeEventListener("touchend", K, vi), L.removeEventListener("touchstart", Be, vi), L.removeEventListener("touchmove", ir, vi);
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
    function Re(Ee) {
      Ee.target === se && (nc(se, "remove", Re), re());
    }
    __name(Re, "Re");
    if (u(Re, "listener"), L === 0)
      return re();
    nc(se, "remove", g), nc(se, "add", Re), g = Re;
  }
  __name(or, "or");
  u(or, "onTransitionEnd");
  function Dr(L, re, se) {
    se === void 0 && (se = false);
    var Re = Ki(A.props.triggerTarget || e);
    Re.forEach(function(Ee) {
      Ee.addEventListener(L, re, se), S.push({ node: Ee, eventType: L, handler: re, options: se });
    });
  }
  __name(Dr, "Dr");
  u(Dr, "on");
  function Wr() {
    Q() && (Dr("touchstart", _e, { passive: true }), Dr("touchend", Ln, { passive: true })), Iy(A.props.trigger).forEach(function(L) {
      if (L !== "manual")
        switch (Dr(L, _e), L) {
          case "mouseenter":
            Dr("mouseleave", Ln);
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
  function Nn() {
    S.forEach(function(L) {
      var re = L.node, se = L.eventType, Re = L.handler, Ee = L.options;
      re.removeEventListener(se, Re, Ee);
    }), S = [];
  }
  __name(Nn, "Nn");
  u(Nn, "removeListeners");
  function _e(L) {
    var re, se = false;
    if (!(!A.state.isEnabled || Vr(L) || v)) {
      var Re = ((re = f) == null ? void 0 : re.type) === "focus";
      f = L, C = L.currentTarget, Ke(), !A.state.isVisible && zy(L) && Xs.forEach(function(Ee) {
        return Ee(L);
      }), L.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || p) && A.props.hideOnClick !== false && A.state.isVisible ? se = true : kr(L), L.type === "click" && (p = !se), se && !Re && qt(L);
    }
  }
  __name(_e, "_e");
  u(_e, "onTrigger");
  function Gn(L) {
    var re = L.target, se = q().contains(re) || _.contains(re);
    if (!(L.type === "mousemove" && se)) {
      var Re = It().concat(_).map(function(Ee) {
        var xt, Nt = Ee._tippy, At = (xt = Nt.popperInstance) == null ? void 0 : xt.state;
        return At ? { popperRect: Ee.getBoundingClientRect(), popperState: At, props: t } : null;
      }).filter(Boolean);
      Ny(Re, L) && (Ye(), qt(L));
    }
  }
  __name(Gn, "Gn");
  u(Gn, "onMouseMove");
  function Ln(L) {
    var re = Vr(L) || A.props.trigger.indexOf("click") >= 0 && p;
    if (!re) {
      if (A.props.interactive) {
        A.hideWithInteractivity(L);
        return;
      }
      qt(L);
    }
  }
  __name(Ln, "Ln");
  u(Ln, "onMouseLeave");
  function kt(L) {
    A.props.trigger.indexOf("focusin") < 0 && L.target !== q() || A.props.interactive && L.relatedTarget && _.contains(L.relatedTarget) || qt(L);
  }
  __name(kt, "kt");
  u(kt, "onBlurOrFocusOut");
  function Vr(L) {
    return Hr.isTouch ? Q() !== L.type.indexOf("touch") >= 0 : false;
  }
  __name(Vr, "Vr");
  u(Vr, "isEventListenerStopped");
  function bi() {
    fn();
    var L = A.props, re = L.popperOptions, se = L.placement, Re = L.offset, Ee = L.getReferenceClientRect, xt = L.moveTransition, Nt = ie() ? ac(_).arrow : null, At = Ee ? { getBoundingClientRect: Ee, contextElement: Ee.contextElement || q() } : e, va = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u(function(Pt) {
      var _t = Pt.state;
      if (ie()) {
        var Xr = et(), yi = Xr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(wi) {
          wi === "placement" ? yi.setAttribute("data-placement", _t.placement) : _t.attributes.popper["data-popper-" + wi] ? yi.setAttribute("data-" + wi, "") : yi.removeAttribute("data-" + wi);
        }), _t.attributes.popper = {};
      }
    }, "fn") }, mr = [{ name: "offset", options: { offset: Re } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !xt } }, va];
    ie() && Nt && mr.push({ name: "arrow", options: { element: Nt, padding: 3 } }), mr.push.apply(mr, (re == null ? void 0 : re.modifiers) || []), A.popperInstance = ec(At, _, Object.assign({}, re, { placement: se, onFirstUpdate: w, modifiers: mr }));
  }
  __name(bi, "bi");
  u(bi, "createPopperInstance");
  function fn() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(fn, "fn");
  u(fn, "destroyPopperInstance");
  function Ir() {
    var L = A.props.appendTo, re, se = q();
    A.props.interactive && L === sh || L === "parent" ? re = se.parentNode : re = lh(L, [se]), re.contains(_) || re.appendChild(_), A.state.isMounted = true, bi();
  }
  __name(Ir, "Ir");
  u(Ir, "mount");
  function It() {
    return Zs(_.querySelectorAll("[data-tippy-root]"));
  }
  __name(It, "It");
  u(It, "getNestedPopperTree");
  function kr(L) {
    A.clearDelayTimeouts(), L && Pe("onTrigger", [A, L]), tt();
    var re = Ze(true), se = ue(), Re = se[0], Ee = se[1];
    Hr.isTouch && Re === "hold" && Ee && (re = Ee), re ? n = setTimeout(function() {
      A.show();
    }, re) : A.show();
  }
  __name(kr, "kr");
  u(kr, "scheduleShow");
  function qt(L) {
    if (A.clearDelayTimeouts(), Pe("onUntrigger", [A, L]), !A.state.isVisible) {
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
  function jn() {
    A.state.isEnabled = true;
  }
  __name(jn, "jn");
  u(jn, "enable");
  function Yr() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(Yr, "Yr");
  u(Yr, "disable");
  function Bn() {
    clearTimeout(n), clearTimeout(o), cancelAnimationFrame(s);
  }
  __name(Bn, "Bn");
  u(Bn, "clearDelayTimeouts");
  function hn(L) {
    if (!A.state.isDestroyed) {
      Pe("onBeforeUpdate", [A, L]), Nn();
      var re = A.props, se = th(e, Object.assign({}, re, Qf(L), { ignoreAttributes: true }));
      A.props = se, Wr(), re.interactiveDebounce !== se.interactiveDebounce && (Ye(), T = Xf(Gn, se.interactiveDebounce)), re.triggerTarget && !se.triggerTarget ? Ki(re.triggerTarget).forEach(function(Re) {
        Re.removeAttribute("aria-expanded");
      }) : se.triggerTarget && e.removeAttribute("aria-expanded"), Ke(), ze(), B && B(re, se), A.popperInstance && (bi(), It().forEach(function(Re) {
        requestAnimationFrame(Re._tippy.popperInstance.forceUpdate);
      })), Pe("onAfterUpdate", [A, L]);
    }
  }
  __name(hn, "hn");
  u(hn, "setProps");
  function Hn(L) {
    A.setProps({ content: L });
  }
  __name(Hn, "Hn");
  u(Hn, "setContent");
  function io() {
    var L = A.state.isVisible, re = A.state.isDestroyed, se = !A.state.isEnabled, Re = Hr.isTouch && !A.props.touch, Ee = tc(A.props.duration, 0, zr.duration);
    if (!(L || re || se || Re) && !q().hasAttribute("disabled") && (Pe("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, ie() && (_.style.visibility = "visible"), ze(), tt(), A.state.isMounted || (_.style.transition = "none"), ie()) {
        var xt = et(), Nt = xt.box, At = xt.content;
        rc([Nt, At], 0);
      }
      w = u(function() {
        var mr;
        if (!(!A.state.isVisible || d)) {
          if (d = true, _.offsetHeight, _.style.transition = A.props.moveTransition, ie() && A.props.animation) {
            var ao = et(), Pt = ao.box, _t = ao.content;
            rc([Pt, _t], Ee), Kf([Pt, _t], "visible");
          }
          We(), Ke(), Zf(ic, A), (mr = A.popperInstance) == null || mr.forceUpdate(), Pe("onMount", [A]), A.props.animation && ie() && hr(Ee, function() {
            A.state.isShown = true, Pe("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), Ir();
    }
  }
  __name(io, "io");
  u(io, "show");
  function oo() {
    var L = !A.state.isVisible, re = A.state.isDestroyed, se = !A.state.isEnabled, Re = tc(A.props.duration, 1, zr.duration);
    if (!(L || re || se) && (Pe("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, d = false, p = false, ie() && (_.style.visibility = "hidden"), Ye(), fr(), ze(true), ie()) {
        var Ee = et(), xt = Ee.box, Nt = Ee.content;
        A.props.animation && (rc([xt, Nt], Re), Kf([xt, Nt], "hidden"));
      }
      We(), Ke(), A.props.animation ? ie() && Mr(Re, A.unmount) : A.unmount();
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
    A.state.isVisible && A.hide(), A.state.isMounted && (fn(), It().forEach(function(L) {
      L._tippy.unmount();
    }), _.parentNode && _.parentNode.removeChild(_), ic = ic.filter(function(L) {
      return L !== A;
    }), A.state.isMounted = false, Pe("onHidden", [A]));
  }
  __name(ma, "ma");
  u(ma, "unmount");
  function dl() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), Nn(), delete e._tippy, A.state.isDestroyed = true, Pe("onDestroy", [A]));
  }
  __name(dl, "dl");
  u(dl, "destroy");
}
__name(Xy, "Xy");
u(Xy, "createTippy");
function ra(e, r) {
  r === void 0 && (r = {});
  var t = zr.plugins.concat(r.plugins || []);
  jy();
  var n = Object.assign({}, r, { plugins: t }), o = Dy(e);
  if (false)
    var s, p;
  var v = o.reduce(function(m, d) {
    var f = d && Xy(d, n);
    return f && m.push(f), m;
  }, []);
  return Qs(e) ? v[0] : v;
}
__name(ra, "ra");
u(ra, "tippy");
ra.defaultProps = zr;
ra.setDefaultProps = Uy;
ra.currentInput = Hr;
var G1 = Object.assign({}, Xo, { effect: u(function(r) {
  var t = r.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
}, "effect") });
ra.setDefaultProps({ render: ph });
var zt = ra;
var dh = Lt(en(), 1);
var lc = u((e) => typeof e == "object" && e !== null && typeof e.initHelp == "function", "isHelpable");
function ve(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = ht({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
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
function pe(e) {
  class r extends e {
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
var Ks = /* @__PURE__ */ new Map();
function Js(e) {
  if (Ks.has(e))
    return Ks.get(e);
  let r = e.length, t = 0, n = 0, o = 0, s = [];
  for (let p = 0; p < r; p += 1) {
    let v = e[p], m = e[p + 1], d = e[p - 1];
    v === "{" && m === "{" && d !== "\\" ? (o += 1, o === 1 && (n = p), p += 1) : v === "}" && m === "}" && d !== "\\" && o && (o -= 1, o === 0 && (n > t && (s.push(Object.freeze({ type: "string", start: t, end: n, value: e.slice(t, n) })), t = n), s.push(Object.freeze({ type: "part", start: n, end: p + 2, value: e.slice(t + 2, p).trim() })), p += 1, t = p + 1));
  }
  return t < r && s.push(Object.freeze({ type: "string", start: t, end: r, value: e.slice(t, r) })), Ks.set(e, Object.freeze(s)), Ks.get(e);
}
__name(Js, "Js");
u(Js, "parse");
var gi = /* @__PURE__ */ new WeakMap();
var fh = /* @__PURE__ */ new WeakMap();
var $r = /* @__PURE__ */ __name(class {
  constructor(r, t) {
    this.expression = t, gi.set(this, r), r.updateParent("");
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
  constructor(r, t) {
    this.element = r, this.attr = t, this.partList = [];
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
      let t = this.partList.map((n) => typeof n == "string" ? n : n.value).join("");
      this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, t);
    }
  }
}, "Ji");
u(Ji, "AttributeValueSetter");
var Dn = /* @__PURE__ */ new WeakMap();
var Rt = /* @__PURE__ */ __name(class {
  constructor(r, t) {
    this.expression = t, Dn.set(this, [r]), r.textContent = "";
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
    let t = r.map((n) => typeof n == "string" ? new Text(n) : n);
    t.length || t.push(new Text("")), Dn.get(this)[0].before(...t);
    for (let n of Dn.get(this))
      n.remove();
    Dn.set(this, t);
  }
}, "Rt");
u(Rt, "NodeTemplatePart");
function na(e) {
  return { processCallback(r, t, n) {
    var o;
    if (!(typeof n != "object" || !n)) {
      for (let s of t)
        if (s.expression in n) {
          let p = (o = n[s.expression]) !== null && o !== void 0 ? o : "";
          e(s, p);
        }
    }
  } };
}
__name(na, "na");
u(na, "createProcessor");
function ia(e, r) {
  e.value = String(r);
}
__name(ia, "ia");
u(ia, "processPropertyIdentity");
function el(e, r) {
  return typeof r == "boolean" && e instanceof $r && typeof e.element[e.attributeName] == "boolean" ? (e.booleanValue = r, true) : false;
}
__name(el, "el");
u(el, "processBooleanAttribute");
var uc = na(ia);
var Zy = na((e, r) => {
  el(e, r) || ia(e, r);
});
function* Qy(e) {
  let r = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = r.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let n = 0; n < t.attributes.length; n += 1) {
        let o = t.attributes.item(n);
        if (o && o.value.includes("{{")) {
          let s = new Ji(t, o);
          for (let p of Js(o.value))
            if (p.type === "string")
              s.append(p.value);
            else {
              let v = new $r(s, p.value);
              s.append(v), yield v;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{")) {
      let n = Js(t.textContent);
      for (let o = 0; o < n.length; o += 1) {
        let s = n[o];
        s.end < t.textContent.length && t.splitText(s.end), s.type === "part" && (yield new Rt(t, s.value));
        break;
      }
    }
}
__name(Qy, "Qy");
u(Qy, "collectParts");
var tl = /* @__PURE__ */ new WeakMap();
var rl = /* @__PURE__ */ new WeakMap();
var ln = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(r, t, n = uc) {
    var o, s;
    super(), Object.getPrototypeOf(this) !== ln.prototype && Object.setPrototypeOf(this, ln.prototype), this.appendChild(r.content.cloneNode(true)), rl.set(this, Array.from(Qy(this))), tl.set(this, n), (s = (o = tl.get(this)).createCallback) === null || s === void 0 || s.call(o, this, rl.get(this), t), tl.get(this).processCallback(this, rl.get(this), t);
  }
  update(r) {
    tl.get(this).processCallback(this, rl.get(this), r);
  }
}, "ln");
u(ln, "TemplateInstance");
var cc = /* @__PURE__ */ new WeakMap();
var hh = /* @__PURE__ */ new WeakMap();
var mh = /* @__PURE__ */ new WeakMap();
var Dt = /* @__PURE__ */ __name(class {
  constructor(r, t, n) {
    this.strings = r, this.values = t, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    Dt.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, t;
    if (cc.has(this.strings))
      return cc.get(this.strings);
    {
      let n = document.createElement("template"), o = this.strings.length - 1, s = this.strings.reduce((v, m, d) => v + m + (d < o ? `{{ ${d} }}` : ""), ""), p = (t = (r = Dt.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(s)) !== null && t !== void 0 ? t : s;
      return n.innerHTML = p, cc.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let t = this.template;
    if (hh.get(r) !== t) {
      hh.set(r, t);
      let n = new ln(t, this.values, this.processor);
      mh.set(r, n), r instanceof Rt ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    mh.get(r).update(this.values);
  }
}, "Dt");
u(Dt, "TemplateResult");
Dt.cspTrustedTypesPolicy = null;
function Y(e, r) {
  e.renderInto(r);
}
__name(Y, "Y");
u(Y, "render");
var vh = /* @__PURE__ */ new WeakSet();
function gh(e) {
  return vh.has(e);
}
__name(gh, "gh");
u(gh, "isDirective");
function bh(e, r) {
  return gh(r) ? (r(e), true) : false;
}
__name(bh, "bh");
u(bh, "processDirective");
function oa(e) {
  return (...r) => {
    let t = e(...r);
    return vh.add(t), t;
  };
}
__name(oa, "oa");
u(oa, "directive");
var aa = /* @__PURE__ */ new WeakMap();
var eo = /* @__PURE__ */ __name(class {
  constructor(r, t) {
    this.element = r, this.type = t, this.element.addEventListener(this.type, this), aa.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), aa.get(this.element).delete(this.type));
  }
  static for(r) {
    aa.has(r.element) || aa.set(r.element, /* @__PURE__ */ new Map());
    let t = r.attributeName.slice(2), n = aa.get(r.element);
    return n.has(t) ? n.get(t) : new eo(r.element, t);
  }
}, "eo");
u(eo, "EventHandler");
function yh(e, r) {
  return e instanceof $r && e.attributeName.startsWith("on") ? (eo.for(e).set(r), e.element.removeAttributeNS(e.attributeNamespace, e.attributeName), true) : false;
}
__name(yh, "yh");
u(yh, "processEvent");
function Ky(e) {
  return typeof e == "object" && Symbol.iterator in e;
}
__name(Ky, "Ky");
u(Ky, "isIterable");
function wh(e, r) {
  if (!Ky(r))
    return false;
  if (e instanceof Rt) {
    let t = [];
    for (let n of r)
      if (n instanceof Dt) {
        let o = document.createDocumentFragment();
        n.renderInto(o), t.push(...o.childNodes);
      } else
        n instanceof DocumentFragment ? t.push(...n.childNodes) : t.push(String(n));
    return t.length && e.replace(...t), true;
  } else
    return e.value = Array.from(r).join(" "), true;
}
__name(wh, "wh");
u(wh, "processIterable");
function xh(e, r) {
  return r instanceof DocumentFragment && e instanceof Rt ? (r.childNodes.length && e.replace(...r.childNodes), true) : false;
}
__name(xh, "xh");
u(xh, "processDocumentFragment");
function Eh(e, r) {
  return r instanceof Dt && e instanceof Rt ? (r.renderInto(e), true) : false;
}
__name(Eh, "Eh");
u(Eh, "processSubTemplate");
function nl(e, r) {
  bh(e, r) || el(e, r) || yh(e, r) || Eh(e, r) || xh(e, r) || wh(e, r) || ia(e, r);
}
__name(nl, "nl");
u(nl, "processPart");
var pc = na(nl);
function U(e, ...r) {
  return new Dt(e, r, pc);
}
__name(U, "U");
u(U, "html");
var dc = /* @__PURE__ */ new WeakMap();
var Jy = oa((...e) => (r) => {
  dc.has(r) || dc.set(r, { i: e.length });
  let t = dc.get(r);
  for (let n = 0; n < e.length; n += 1)
    e[n] instanceof Promise ? Promise.resolve(e[n]).then((o) => {
      n < t.i && (t.i = n, nl(r, o));
    }) : n <= t.i && (t.i = n, nl(r, e[n]));
});
var e0 = oa((e) => (r) => {
  var t, n;
  if (!(r instanceof Rt))
    return;
  let o = document.createElement("template"), s = (n = (t = Dt.cspTrustedTypesPolicy) === null || t === void 0 ? void 0 : t.createHTML(e)) !== null && n !== void 0 ? n : e;
  o.innerHTML = s;
  let p = document.importNode(o.content, true);
  r.replace(...p.childNodes);
});
function be(e) {
  class r extends e {
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
var un = u((e) => typeof e == "object" && e !== null && typeof e.if == "string", "isIfable");
function Ue(e) {
  class r extends e {
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
var il = u((e) => typeof e == "object" && e !== null && typeof e.initMenu == "function", "isMenuable");
function ge(e) {
  class r extends e {
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
      if (un(o.reference)) {
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
var Sh = Lt(en(), 1);
var ol = Lt(Vo(), 1);
var ur = u((e) => e != null && typeof e.resizeable == "boolean", "isResizeable");
function al(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = ht({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
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
  return u(r, "ResizeableMixinClass"), M([D], r.prototype, "span", 2), M([D], r.prototype, "resizeHandleX", 2), M([D], r.prototype, "resizeHandleY", 2), M([D], r.prototype, "debugResizeable", 2), M([D], r.prototype, "resizing", 2), M([Me], r.prototype, "resizeHandle", 2), r;
}
__name(al, "al");
u(al, "ResizeableMixin");
var Th = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var Sr = /* @__PURE__ */ __name(class extends ge(ve(me(Ie(be(he(pe(HTMLElement))))))) {
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
function Ch(e) {
  return /^-?\d+$/.test(e);
}
__name(Ch, "Ch");
u(Ch, "isNumeric");
function Ot(e, r = 4) {
  return (e >= 0 ? "+" : "") + e.toFixed(r);
}
__name(Ot, "Ot");
u(Ot, "forceSigned");
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
    let t = this.popup;
    t && t.destroy();
    let n = this.blochInspectorPopupContent();
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(o) {
      o.setContent(n);
    } }), this.popup.show();
  }
  blochInspectorPopupContent() {
    let t = document.createDocumentFragment();
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
      `, t), t;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
  }
  disconnectedCallback() {
    let t = this.popup;
    t == null || t.destroy();
  }
  attributeChangedCallback(t, n, o) {
    this.body && n !== o && o !== null && (t === "data-x" && (this.x = parseFloat(o)), t === "data-y" && (this.y = parseFloat(o)), t === "data-z" && (this.z = parseFloat(o)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let t = u((o) => U`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${o}deg)"></div>`, "vectorLineRect"), n = u((o, s) => U`<div
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
                  ${t(0)} ${t(20)} ${t(40)} ${t(60)}
                  ${t(80)} ${t(100)} ${t(120)} ${t(140)}
                  ${t(160)}
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
    let t = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${t / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${t / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`), (n = this.popup) == null || n.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let t = this.getAttribute("data-d");
    return H.notNull(t), parseFloat(t);
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
    return H.notNull(t), parseFloat(t);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(t) {
    this.setAttribute("data-theta", t.toString());
  }
  get theta() {
    let t = this.getAttribute("data-theta");
    return H.notNull(t), parseFloat(t);
  }
  thetaRadian() {
    return 180 * Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x))) / Math.PI;
  }
}, "ot");
u(ot, "BlochDisplayElement"), M([Me], ot.prototype, "body", 2), M([Me], ot.prototype, "vectorLine", 2), M([Me], ot.prototype, "vectorEnd", 2), M([Me], ot.prototype, "vector", 2), M([ft], ot.prototype, "vectorEndCircles", 2), M([D], ot.prototype, "x", 2), M([D], ot.prototype, "y", 2), M([D], ot.prototype, "z", 2), ot = M([X], ot);
var Oh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Bt = /* @__PURE__ */ __name(class extends ge(ve(me(Ie(be(he(pe(HTMLElement))))))) {
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
var Wt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var Yt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(An(me(Ie(be(he(pe(HTMLElement)))))))))) {
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
var Xt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var Zt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(An(me(Ie(be(he(pe(HTMLElement)))))))))) {
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
var Qt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(An(me(Ie(be(he(pe(HTMLElement)))))))))) {
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
}, "Qt");
u(Qt, "RyGateElement"), Qt = M([X], Qt);
var kh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(An(me(Ie(be(he(pe(HTMLElement)))))))))) {
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
}, "Kt");
u(Kt, "RzGateElement"), Kt = M([X], Kt);
var Nh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var pr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var Or = /* @__PURE__ */ __name(class extends ge(ve(me(Ie(be(he(pe(HTMLElement))))))) {
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
var Jt = /* @__PURE__ */ __name(class extends ge(ve(Le(me(Ie(be(he(pe(HTMLElement)))))))) {
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
var dr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var er = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var tr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var rr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var nr = /* @__PURE__ */ __name(class extends ge(ve(Ue(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
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
var Xe = u((e) => e instanceof Sr || e instanceof ot || e instanceof Bt || e instanceof Wt || e instanceof Vt || e instanceof Yt || e instanceof Tr || e instanceof Cr || e instanceof Xt || e instanceof Zt || e instanceof Qt || e instanceof Kt || e instanceof cr || e instanceof pr || e instanceof Or || e instanceof Jt || e instanceof dr || e instanceof er || e instanceof Ht || e instanceof tr || e instanceof rr || e instanceof nr, "isOperation");
var Wh = u((e) => e != null && e instanceof Wt, "isHGateElement");
var Vh = u((e) => e != null && e instanceof tr, "isXGateElement");
var Yh = u((e) => e != null && e instanceof rr, "isYGateElement");
var Xh = u((e) => e != null && e instanceof nr, "isZGateElement");
var sa = u((e) => e != null && e instanceof Yt, "isPhaseGateElement");
var Zh = u((e) => e != null && e instanceof er, "isTGateElement");
var Xz = u((e) => e != null && e instanceof dr, "isTDaggerGateElement");
var Qh = u((e) => e != null && e instanceof Xt, "isRnotGateElement");
var ll = u((e) => e != null && e instanceof Zt, "isRxGateElement");
var ul = u((e) => e != null && e instanceof Qt, "isRyGateElement");
var cl = u((e) => e != null && e instanceof Kt, "isRzGateElement");
var Zz = u((e) => e != null && e instanceof pr, "isSGateElement");
var Qz = u((e) => e != null && e instanceof cr, "isSDaggerGateElement");
var Kz = u((e) => e != null && e instanceof Or, "isSpacerGateElement");
var Kh = u((e) => e != null && e instanceof Jt, "isSwapGateElement");
var fc = u((e) => e != null && e instanceof Bt, "isControlGateElement");
var hc = u((e) => e != null && e instanceof Sr, "isAntiControlGateElement");
var Jh = u((e) => e != null && e instanceof ot, "isBlochDisplayElement");
var Jz = u((e) => e != null && e instanceof Ht, "isWriteGateElement");
var em = u((e) => e != null && e instanceof Vt, "isMeasurementGateElement");
var tm = Lt(en(), 1);
var la = Lt(Vo(), 1);
var mc = u((e) => e !== null && e instanceof Rr, "isAngleSliderElement");
var Rr = /* @__PURE__ */ __name(class extends HTMLElement {
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
        throw new dt("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (t, n) => {
      n.type === "SET_ANGLE" && (this.denominator = _o(this.angle));
    }, setAngleInRadian: (t, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, o] = this.findSnapAngle(this.radian);
      this.angle = o;
    }, setRadianInAngle: (t, n) => {
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
    this.angleSliderService = lt(this.angleSliderMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${(0, tm.format)(t.value)}`);
    }).start();
  }
  attributeChangedCallback(t, n, o) {
    n !== o && o !== null && (t === "data-angle" && o !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), t === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
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
  move(t) {
    let n = la.default.getElementRect(t.target).width, o = t.pageX / n;
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
    let t = -2 * this.denominator, n = 2 * this.denominator, o = new Array(n - t + 1).fill(null).map((s, p) => p + t);
    this.snapAngles = {};
    for (let s of o)
      this.denominator === 1 ? s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI] = "\u03C0" : s === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[s * Math.PI] = `${s}\u03C0` : s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : s === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[s * Math.PI / this.denominator] = `${s}\u03C0/${this.denominator}`;
  }
  findSnapAngle(t) {
    let n = null, o = null, s = null;
    for (let p in this.snapAngles) {
      let v = Math.abs(parseFloat(p) - t);
      (n === null || v < n) && (n = v, o = parseFloat(p), s = this.snapAngles[p]);
    }
    return H.notNull(o), H.notNull(s), [o, s];
  }
  proportionToRadian(t) {
    return (t - 0.5) * Math.PI * 4;
  }
  set left(t) {
    this.style.paddingLeft = `${t * 100}%`;
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
  activateButton(t) {
    let n = t.currentTarget;
    H.notNull(n);
    for (let o of this.buttons)
      o.removeAttribute("data-active");
    n.setAttribute("data-active", "");
  }
}, "to");
u(to, "ButtonGroupElement"), M([ft], to.prototype, "buttons", 2), to = M([X], to);
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
  handleViewSizeChange(t) {
    let n = this.mobile !== null && this.mobile !== t.matches;
    this.mobile = t.matches, n && (this.mobile || this.style.removeProperty("top"), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.drawQubitCircles());
  }
  startBasicCircleNotationMode() {
    this.colorPhase = false;
  }
  startColorPhaseMode() {
    this.colorPhase = true;
  }
  attributeChangedCallback(t, n, o) {
    n !== o && (t === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (H.notNull(o), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), t === "data-color-phase" && this.drawQubitCircles());
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
          throw new dt("unsupported qubit count", this.qubitCount);
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
          throw new dt("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((t) => {
      let n = t.getAttribute("data-ket");
      return H.notNull(n), parseInt(n);
    }), H.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(t) {
    ro.default.mutate(() => {
      for (let n of this.qubitCircles) {
        let o = n.getAttribute("data-ket");
        H.notNull(o);
        let s = parseInt(o), p = t[s];
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
        throw new dt("unsupported qubit count", this.qubitCount);
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
        throw new dt("unsupported qubit count", this.qubitCount);
    }
  }
  get windowHeight() {
    if (this.qubitCount === 0)
      return 0;
    let t = this.qubitCirclesAreaHeight + this.paddingY * 2;
    if (this.mobile) {
      let n = this.clientHeight;
      return this.rowCount > 4 && n < t ? n : t;
    } else
      return t;
  }
  get windowWidth() {
    if (this.qubitCount === 0)
      return 0;
    let t = this.qubitCirclesAreaWidth + this.paddingX * 2;
    if (this.mobile) {
      let n = this.clientWidth;
      return this.colCount >= 16 && n < t ? n : t;
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
        throw new dt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    H.notNull(this.window), H.notNull(this.innerContainer), this.qubitCount !== 0 && ro.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let t = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let o = this.lastRowStartIndex; o <= this.lastRowEndIndex; o++)
        for (let s = this.lastColStartIndex; s <= this.lastColEndIndex; s++)
          t.push({ col: s, row: o });
      let n = document.createDocumentFragment();
      for (let o of this.allQubitCircleElements(t))
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
      let t = this.overscanColStartIndex, n = this.overscanColEndIndex, o = this.overscanRowStartIndex, s = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === t && this.lastColEndIndex === n && this.lastRowStartIndex === o && this.lastRowEndIndex === s)) {
        for (let p = o; p <= s; p++)
          for (let v = t; v <= n; v++)
            (v < this.lastColStartIndex || this.lastColEndIndex < v || p < this.lastRowStartIndex || this.lastRowEndIndex < p) && this.qubitCirclePositions.push({ col: v, row: p });
        this.lastColStartIndex = t, this.lastColEndIndex = n, this.lastRowStartIndex = o, this.lastRowEndIndex = s;
      }
    }), ro.default.mutate(() => {
      let t = document.createDocumentFragment();
      for (let n of this.allQubitCircleElements(this.qubitCirclePositions))
        t.appendChild(n);
      this.innerContainer.appendChild(t), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    ro.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let n = t.getAttribute("data-col"), o = t.getAttribute("data-row");
        H.notNull(n), H.notNull(o);
        let s = parseInt(n), p = parseInt(o);
        if (s < this.lastColStartIndex || this.lastColEndIndex < s || p < this.lastRowStartIndex || this.lastRowEndIndex < p) {
          let v = t._tippy;
          v !== void 0 && v.destroy(), t.remove();
        }
      }
    });
  }
  allQubitCircleElements(t) {
    return t.map(this.qubitCircleElement.bind(this));
  }
  qubitCircleElement(t) {
    let n = t.col + t.row * this.colCount, o = this.qubitCircleSizePx * t.row + t.row * this.gap + this.paddingY, s = this.qubitCircleSizePx * t.col + t.col * this.gap + this.paddingX, p = document.createElement("div");
    p.className = "qubit-circle magnitude-0", p.setAttribute("data-col", t.col.toString()), p.setAttribute("data-row", t.row.toString()), p.setAttribute("data-ket", n.toString()), p.setAttribute("data-targets", "circle-notation.qubitCircles"), p.setAttribute("data-amplitude-real", "0"), p.setAttribute("data-amplitude-imag", "0"), p.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), p.style.setProperty("top", `${o}px`), p.style.setProperty("left", `${s}px`);
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
        throw new dt("unsupported qubit count", this.qubitCount);
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
    let n = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, n;
  }
  get visibleColEndIndex() {
    let t = this.windowWidth + this.windowScrollLeft - this.paddingX, n = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, Math.min(this.colCount - 1, n);
  }
  get visibleRowStartIndex() {
    let t = this.windowScrollTop - this.paddingY;
    if (t < 0)
      return 0;
    let n = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, n;
  }
  get visibleRowEndIndex() {
    let t = this.windowHeight + this.windowScrollTop - this.paddingY, n = Math.floor(t / (this.qubitCircleSizePx + this.gap));
    return t % this.qubitCircleSizePx > this.qubitCircleSizePx && n++, Math.min(this.rowCount - 1, n);
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
    let n = t.target;
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
    let m = parseInt(s), d = parseFloat(p), f = parseFloat(v), g = new On(d, f), w = g.abs(), S = g.phase() / Math.PI * 180, T = document.importNode(this.qubitCirclePopupTemplate.content, true), C = T.getElementById("qubit-circle-popup--ket-binary-value"), z = T.getElementById("qubit-circle-popup--ket-decimal-value"), N = T.getElementById("qubit-circle-popup--amplitude"), G = T.getElementById("qubit-circle-popup--amplitude-real-value"), $ = T.getElementById("qubit-circle-popup--amplitude-imag-value"), A = T.getElementById("qubit-circle-popup--probability"), ee = T.getElementById("qubit-circle-popup--probability-value"), _ = T.getElementById("qubit-circle-popup--phase"), B = T.getElementById("qubit-circle-popup--phase-value");
    H.notNull(N), H.notNull(G), H.notNull($), H.notNull(A), H.notNull(ee), H.notNull(_), H.notNull(B), C && (C.textContent = m.toString(2).padStart(this.qubitCount, "0")), z && (z.textContent = m.toString()), this.showQubitCirclePopupAmplitude ? (G.textContent = Ot(g.real, 5), $.textContent = `${Ot(g.imag, 5)}i`) : N.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Ot(w * w * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? B.textContent = `${Ot(S, 2)}\xB0` : _.style.display = "none";
    let te = document.createElement("div");
    te.appendChild(T), o.setContent(te.innerHTML), o.show();
  }
  hideQubitCirclePopup(t) {
    let n = t.target;
    H.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let o = n._tippy;
    H.notNull(o), o.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "ct");
u(ct, "CircleNotationElement"), M([D], ct.prototype, "qubitCount", 2), M([D], ct.prototype, "qubitCircleSize", 2), M([D], ct.prototype, "colCount", 2), M([D], ct.prototype, "rowCount", 2), M([D], ct.prototype, "paddingX", 2), M([D], ct.prototype, "paddingY", 2), M([D], ct.prototype, "overscanCount", 2), M([D], ct.prototype, "colorPhase", 2), M([D], ct.prototype, "qubitCirclePopupTemplateId", 2), M([D], ct.prototype, "showQubitCirclePopupAmplitude", 2), M([D], ct.prototype, "showQubitCirclePopupProbability", 2), M([D], ct.prototype, "showQubitCirclePopupPhase", 2), M([Me], ct.prototype, "window", 2), M([Me], ct.prototype, "innerContainer", 2), M([ft], ct.prototype, "qubitCircles", 2), ct = M([X], ct);
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
u(no, "CircleNotationPanelElement"), M([Me], no.prototype, "circleNotation", 2), no = M([X], no);
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
  attributeChangedCallback(t, n, o) {
    n !== o && o !== null && t === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
  }
  startBreakpointChangeEventListener(t) {
    window.matchMedia("(max-width: 639px)").addEventListener("change", t);
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
  iconHtml(t) {
    return U([t]);
  }
  dotsHtml() {
    let t = U``;
    for (let n = 0; n < this.gateSets.length; n++)
      t = U`${t}
        <div class="dot" data-targets="gate-carousel.dots"></div>`;
    return t;
  }
  enableContentClipping() {
    this.contentClipper.style.overflow = "hidden";
  }
  disableContentClipping() {
    this.contentClipper.style.overflow = "visible";
  }
  removePopinAnimationGates() {
    var t;
    for (let n of this.popinAnimationGates)
      (t = n.parentElement) == null || t.removeChild(n);
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
    for (let [t, n] of this.gateSets.entries())
      t === this.currentGateSetIndex ? n.classList.remove("hidden") : n.classList.add("hidden");
  }
  makeAllGateSetsVisible() {
    for (let t of this.gateSets)
      t.classList.remove("invisible");
  }
  makeAllGateSetsInvisible() {
    for (let t of this.gateSets)
      t.classList.add("invisible");
  }
  get activeGateSet() {
    let t = this.gateSets[this.currentGateSetIndex];
    return H.notNull(t), t;
  }
  get gatesInActiveGateSet() {
    return Array.from(this.activeGateSet.children).map((t) => {
      let n = t.children.item(0);
      return H.need(Xe(n), `${n} must be an operation.`), n;
    });
  }
  createPopinAnimationGates() {
    for (let t of this.gatesInActiveGateSet) {
      let n = t.cloneNode(false);
      n.setAttribute("data-targets", "gate-carousel.popinAnimationGates"), n.style.position = "absolute", n.style.top = `${this.offsetHeight}px`, n.style.left = `${t.offsetLeft}px`, this.append(n);
    }
  }
  animatePopinAnimationGates() {
    for (let [t, n] of this.popinAnimationGates.entries()) {
      H.need(t < 4, "#popinGates must be < 4");
      let o = 0;
      t === 0 ? o = 500 : t === 1 ? o = 600 : t === 2 ? o = 700 : t === 3 && (o = 800);
      let s = n.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: o, fill: "forwards", easing: "ease-out" });
      s.onfinish = () => {
        n === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [t, n] of this.dots.entries())
      t === this.currentGateSetIndex ? n.classList.add("dot--active") : n.classList.remove("dot--active");
  }
}, "qr");
u(qr, "GateCarouselElement"), M([D], qr.prototype, "currentGateSetIndex", 2), M([Me], qr.prototype, "contentClipper", 2), M([ft], qr.prototype, "gateSets", 2), M([ft], qr.prototype, "dots", 2), M([ft], qr.prototype, "popinAnimationGates", 2), qr = M([X], qr);
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
    return H.notNull(t), t;
  }
  initPopup() {
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(t) {
    let n = t.target;
    !this.popup.popper.contains(n) && !this.popup.reference.contains(n) && !Xe(n) && this.popup.hide();
  }
  get popupContent() {
    let t = document.querySelector("#operation-inspector-template");
    H.notNull(t);
    let n = t.content.cloneNode(true), o = document.createDocumentFragment();
    return Y(U`${n}`, o), o;
  }
}, "ua");
u(ua, "InspectorButtonElement"), ua = M([X], ua);
var Mt = /* @__PURE__ */ __name(class extends HTMLElement {
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
  set operation(t) {
    if (this.clear(), this.disableAllPanes(), un(t) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = t.if), ri(t)) {
      let n = _o(t.angle);
      sa(t) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (ll(t) || ul(t) || cl(t)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = t.angle, this.backupCurrentPhi(), this.angleSlider.angle = t.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = t.reducedAngle !== "";
    }
    si(t) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = t.flag);
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
  changeAngle(t) {
    let n = t.target;
    if (!mc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(t) {
    let n = t.target;
    if (!mc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let t = this.angleInput.getAttribute("data-original-value");
    H.notNull(t), this.angleInput.value = t;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let t = this.angleInput.value;
    if (Id(t)) {
      let n, o = _o(t);
      this.denominatorInput.value = o.toString(), this.denominatorLabel.textContent = o.toString(), this.backupCurrentDenominator(), Od(t, "-2\u03C0") ? (n = `-${o * 2}\u03C0/${o}`, this.angleInput.value = n) : Md(t, "2\u03C0") ? (n = `${o * 2}\u03C0/${o}`, this.angleInput.value = n) : n = t, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    H.notNull(t), this.denominatorInput.value = t, this.denominatorLabel.textContent = t;
  }
  changeDenominator() {
    let t = this.denominatorInput.value;
    Ch(t) && parseInt(t) > 1 ? (this.denominatorLabel.textContent = t, this.angleSlider.denominator = parseInt(t), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Mt");
u(Mt, "OperationInspectorElement"), M([Me], Mt.prototype, "ifInput", 2), M([Me], Mt.prototype, "angleInputLabel", 2), M([Me], Mt.prototype, "angleInput", 2), M([Me], Mt.prototype, "angleSlider", 2), M([Me], Mt.prototype, "denominatorInput", 2), M([Me], Mt.prototype, "denominatorVariableLabel", 2), M([Me], Mt.prototype, "denominatorLabel", 2), M([Me], Mt.prototype, "reduceAngleFractionCheckbox", 2), M([Me], Mt.prototype, "flagInput", 2), M([D], Mt.prototype, "conditionalGatePaneDisabled", 2), M([D], Mt.prototype, "anglePaneDisabled", 2), M([D], Mt.prototype, "conditionalFlagPaneDisabled", 2), Mt = M([X], Mt);
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
    let t = zt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let n = document.importNode(this.popupTemplate.content, true), o = new pl.default(this.amplitude), s = n.getElementById("qubit-circle-popup--header"), p = n.getElementById("qubit-circle-popup--ket-binary-value"), v = n.getElementById("qubit-circle-popup--ket-decimal-value"), m = n.getElementById("qubit-circle-popup--amplitude"), d = n.getElementById("qubit-circle-popup--amplitude-real-value"), f = n.getElementById("qubit-circle-popup--amplitude-imag-value"), g = n.getElementById("qubit-circle-popup--probability"), w = n.getElementById("qubit-circle-popup--probability-value"), S = n.getElementById("qubit-circle-popup--phase"), T = n.getElementById("qubit-circle-popup--phase-value");
    H.notNull(s), H.notNull(p), H.notNull(v), H.notNull(m), H.notNull(d), H.notNull(f), H.notNull(g), H.notNull(w), H.notNull(S), H.notNull(T), this.showPopupHeader ? (p.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), v.textContent = this.ket.toString()) : s.style.display = "none", this.showPopupAmplitude ? (d.textContent = Ot(o.re, 5), f.textContent = `${Ot(o.im, 5)}i`) : m.style.display = "none", this.showPopupProbability ? w.textContent = `${Ot(this.magnitude * this.magnitude * 100, 4)}%` : g.style.display = "none", this.showPopupPhase ? T.textContent = `${Ot(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(n), t.setContent(C.innerHTML), t.show();
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
    let t = this._tippy;
    H.notNull(t), t.destroy();
  }
  get popupTemplate() {
    return document.getElementById(this.popupTemplateId);
  }
}, "$t");
u($t, "QubitCircleElement"), M([D], $t.prototype, "ket", 2), M([D], $t.prototype, "qubitCount", 2), M([D], $t.prototype, "amplitude", 2), M([D], $t.prototype, "hidePhase", 2), M([D], $t.prototype, "popupTemplateId", 2), M([D], $t.prototype, "showPopupHeader", 2), M([D], $t.prototype, "showPopupAmplitude", 2), M([D], $t.prototype, "showPopupProbability", 2), M([D], $t.prototype, "showPopupPhase", 2), M([D], $t.prototype, "darkMode", 2), $t = M([X], $t);
var cm = Lt(en(), 1);
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
var cn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = ht({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (t, n) => {
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
    this.runCircuitButtonService = lt(this.runCircuitButtonMachine).onTransition((t) => {
      this.debug && console.log(`run-circuit-button: ${(0, cm.format)(t.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(t, n, o) {
    n !== o && t === "data-running" && o !== null && this.runCircuitButtonService.send({ type: "FINISH" });
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
  handleClickEvent(t) {
    this.runCircuitButtonService.send({ type: "CLICK", clientX: t.clientX, clientY: t.clientY });
  }
  get reloadIcon() {
    return U([lm]);
  }
  get tailSpinIcon() {
    return U([um]);
  }
}, "cn");
u(cn, "RunCircuitButtonElement"), M([D], cn.prototype, "running", 2), M([D], cn.prototype, "debug", 2), M([Me], cn.prototype, "body", 2), M([Me], cn.prototype, "ripple", 2), cn = M([X], cn);
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
      let t = window.getComputedStyle(this);
      this.marginTop = parseFloat(t.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(t.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
    }), this.attachShadow({ mode: "open" }), this.renderShadowRoot(), this.startViewSizeChangeEventListener();
  }
  startViewSizeChangeEventListener() {
    let t = window.matchMedia("(max-width: 639px)");
    t.addEventListener("change", () => this.handleViewSizeChange(t)), this.setMobileBreakpointFlag(t);
  }
  handleViewSizeChange(t) {
    this.setMobileBreakpointFlag(t);
    let n = window.getComputedStyle(this);
    this.marginTop = parseFloat(n.getPropertyValue("margin-top")) || 0, this.marginBottom = parseFloat(n.getPropertyValue("margin-bottom")) || 0, this.prepareAnimation(), this.startAnimation();
  }
  setMobileBreakpointFlag(t) {
    this.mobile = t.matches;
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
}, "pn");
u(pn, "CircuitBlockElement"), M([D], pn.prototype, "comment", 2), M([D], pn.prototype, "finalized", 2), pn = M([X], pn);
var pm = Lt(en(), 1);
var Ur = u((e) => e != null && e instanceof gt, "isCircuitStepElement");
var Oe = u((e, r) => Array.from(e.reduce((t, n, o, s) => {
  let p = r(n, o, s), v = t.get(p);
  return v ? v.push(n) : t.set(p, [n]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var gt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = ht({ id: "circuit-step", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit", "updateResizeableSpanDropzones"] }, DELETE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "visible", actions: ["updateResizeableSpanDropzones", "dispatchResizeOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (t, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE"))
        return;
      let o = n.dropzone, s = this.bit(o);
      H.notNull(o.operation), o.operation.bit = s;
    }, updateResizeableSpanDropzones: (t, n) => {
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
    }, dispatchSnapEvent: (t, n) => {
      n.type === "SNAP_DROPZONE" && fe("circuit-step:qpu-operation-snap", { dropzone: n.dropzone }, this);
    }, dispatchUnsnapEvent: (t, n) => {
      n.type === "UNSNAP_DROPZONE" && fe("circuit-step:qpu-operation-unsnap", { dropzone: n.dropzone }, this);
    }, dispatchDeleteOperationEvent: (t, n) => {
      n.type === "DELETE_OPERATION" && fe("circuit-step:delete-qpu-operation", { dropzone: n.dropzone }, this);
    }, dispatchResizeOperationEvent: (t, n) => {
      n.type === "RESIZE_OPERATION" && fe("circuit-step:resize-qpu-operation", { dropzone: n.dropzone }, this);
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = lt(this.circuitStepMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${(0, pm.format)(t.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let t = 0;
    for (let [n, o] of Object.entries(this.dropzones)) {
      if (!o.occupied)
        continue;
      let s = parseInt(n, 10) + 1;
      if (s > t && (t = s), ur(o.operation)) {
        let p = s + o.operation.span - 1;
        p > t && (t = p);
      }
    }
    return H.need(0 <= t && t <= zo.MAX_QUBIT_COUNT, "invalid number of qubits in use"), t;
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
  attributeChangedCallback(t, n, o) {
    if (n !== o && (t === "data-active" && (o !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), t === "data-breakpoint" && (o !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), t === "data-shadow"))
      for (let s of this.dropzones)
        o !== null ? s.shadow = true : s.shadow = false;
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(t) {
    for (let p of this.dropzones)
      p.connectTop = false, p.connectBottom = false;
    let n = this.controlGateDropzones, o = this.antiControlGateDropzones, s = this.controllableDropzones(t);
    for (let p of s)
      Ro(p.operation) && (p.operation.controls = [], p.operation.antiControls = []);
    if (this.updateSwapConnections(t), this.updatePhasePhaseConnections(t), n.length === 1 && s.length === 0) {
      n[0].operation.disable();
      return;
    }
    if (o.length === 1 && s.length === 0) {
      o[0].operation.disable();
      return;
    }
    n.length === 0 && o.length === 0 || (s.length === 0 ? this.updateControlControlConnections(t) : this.updateControlledUConnections(t), this.updateFreeDropzoneConnections(t));
  }
  updateSwapConnections(t) {
    let n = t == null ? void 0 : t.disableSwap, o = this.swapGateDropzones;
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
  updatePhasePhaseConnections(t) {
    if (t != null && t.disablePhasePhase)
      return;
    let n = this.phaseGateDropzones;
    for (let o of n) {
      let s = o.operation;
      if (s.angle === "" || t !== void 0 && t.maxPhasePhaseTargetGates === 1)
        continue;
      let p = n.filter((v) => {
        if (!sa(v.operation))
          throw new Error(`${v.operation} isn't a phase-gate element.`);
        return s.angle === v.operation.angle;
      }).map((v) => this.bit(v));
      t !== void 0 && t.maxPhasePhaseTargetGates > 1 && (p = p.slice(0, t.maxPhasePhaseTargetGates)), p.includes(this.bit(o)) && (o.connectTop = p.some((v) => v < this.bit(o)), o.connectBottom = p.some((v) => v > this.bit(o)));
    }
    for (let o of this.freeDropzones) {
      let p = this.phaseGateDropzones.filter((d) => d.connectTop || d.connectBottom).map((d) => this.bit(d)), v = Math.min(...p), m = Math.max(...p);
      v < this.bit(o) && this.bit(o) < m && (o.connectTop = true, o.connectBottom = true);
    }
  }
  updateControlControlConnections(t) {
    let n = this.controlGateDropzones, o = n.map((p) => this.bit(p)), s = 0;
    t !== void 0 && (t.maxControlControlTargetGates === 1 ? o = [] : t.maxControlControlTargetGates > 1 && (o = o.slice(0, t.maxControlControlTargetGates)));
    for (let p of n) {
      s += 1;
      let v = p.operation;
      t != null && t.disableControlControl || t !== void 0 && (t.maxControlControlTargetGates === 1 || t.maxControlControlTargetGates > 0 && s > t.maxControlControlTargetGates) ? v.disable() : (v.enable(), p.connectTop = o.some((m) => this.bit(p) > m), p.connectBottom = o.some((m) => this.bit(p) < m));
    }
  }
  updateControlledUConnections(t) {
    let n = this.controllableDropzones(t), o = this.controlGateDropzones, s = this.antiControlGateDropzones, p = [...new Set(n.map((T) => T.operationName))], v = this.numControlGateDropzones(t, p), m = o.map((T) => this.bit(T)), d = s.map((T) => this.bit(T)), f = m.concat(d), g = v === null ? f : f.slice(0, v), w = n.map((T) => this.bit(T)), S = g.concat(w);
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
      T.operation.controls = this.controlBits(T, m, t), T.operation.antiControls = d, T.connectTop = S.some((C) => C < this.bit(T)), T.connectBottom = S.some((C) => C > this.bit(T));
    }
  }
  updateFreeDropzoneConnections(t) {
    let n = this.controllableDropzones(t), o = this.controlGateDropzones.filter((f) => fc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), s = this.antiControlGateDropzones.filter((f) => hc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), p = n.map((f) => this.bit(f)), v = o.concat(s).concat(p), m = Math.min(...v), d = Math.max(...v);
    for (let f of this.freeDropzones)
      m < this.bit(f) && this.bit(f) < d && (f.connectTop = true, f.connectBottom = true);
  }
  controlBits(t, n, o) {
    let s = n;
    return o && (o.maxChControlGates > 0 && t.operationName === "h-gate" ? s = n.slice(0, o.maxChControlGates) : o.maxCnotControlGates > 0 && t.operationName === "x-gate" ? s = n.slice(0, o.maxCnotControlGates) : o.maxCyControlGates > 0 && t.operationName === "y-gate" ? s = n.slice(0, o.maxCyControlGates) : o.maxCzControlGates > 0 && t.operationName === "z-gate" ? s = n.slice(0, o.maxCzControlGates) : o.maxCphaseControlGates > 0 && t.operationName === "phase-gate" ? s = n.slice(0, o.maxCphaseControlGates) : o.maxCtControlGates > 0 && t.operationName === "t-gate" ? s = n.slice(0, o.maxCtControlGates) : o.maxCrnotControlGates > 0 && t.operationName === "rnot-gate" ? s = n.slice(0, o.maxCrnotControlGates) : o.maxCrxControlGates > 0 && t.operationName === "rx-gate" ? s = n.slice(0, o.maxCrxControlGates) : o.maxCryControlGates > 0 && t.operationName === "ry-gate" ? s = n.slice(0, o.maxCryControlGates) : o.maxCrzControlGates > 0 && t.operationName === "rz-gate" ? s = n.slice(0, o.maxCrzControlGates) : o.maxCswapControlGates > 0 && t.operationName === "swap-gate" && (s = n.slice(0, o.maxCswapControlGates))), s;
  }
  bit(t) {
    let n = this.dropzones.indexOf(t);
    return H.need(n !== -1, "circuit-dropzone not found."), n;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((t) => t.operation === null);
  }
  dropzoneAt(t) {
    let n = this.dropzones[t];
    return H.notNull(n), n;
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let t = new de();
    return t.shadow = this.shadow, this.append(t), t;
  }
  appendOperation(t) {
    let n = new de();
    this.append(n), n.put(t);
  }
  get swapGateDropzones() {
    return this.occupiedDropzones.filter((t) => t.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.occupiedDropzones.filter((t) => t.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.occupiedDropzones.filter((t) => fc(t.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((t) => hc(t.operation));
  }
  numControlGateDropzones(t, n) {
    if (t === void 0)
      return null;
    let o = 0;
    return n.includes("h-gate") && !t.disableCh && t.maxChControlGates > o && (o = t.maxChControlGates), n.includes("x-gate") && !t.disableCnot && t.maxCnotControlGates > o && (o = t.maxCnotControlGates), n.includes("y-gate") && !t.disableCy && t.maxCyControlGates > o && (o = t.maxCyControlGates), n.includes("z-gate") && !t.disableCz && t.maxCzControlGates > o && (o = t.maxCzControlGates), n.includes("phase-gate") && !t.disableCphase && t.maxCphaseControlGates > o && (o = t.maxCphaseControlGates), n.includes("t-gate") && !t.disableCt && t.maxCtControlGates > o && (o = t.maxCtControlGates), n.includes("rnot-gate") && !t.disableCrnot && t.maxCrnotControlGates > o && (o = t.maxCrnotControlGates), n.includes("rx-gate") && !t.disableCrx && t.maxCrxControlGates > o && (o = t.maxCrxControlGates), n.includes("ry-gate") && !t.disableCry && t.maxCryControlGates > o && (o = t.maxCryControlGates), n.includes("rz-gate") && !t.disableCrz && t.maxCrzControlGates > o && (o = t.maxCrzControlGates), n.includes("swap-gate") && !t.disableCswap && t.maxCswapControlGates > o && (o = t.maxCswapControlGates), o === 0 ? null : o;
  }
  controllableDropzones(t) {
    let n = 0, o = 0, s = 0, p = 0, v = 0, m = 0, d = 0, f = 0, g = 0, w = 0;
    return this.occupiedDropzones.filter((S) => Ro(S.operation)).filter((S) => t === void 0 ? true : Wh(S.operation) ? (n += 1, t.maxChTargetGates !== 0 && n > t.maxChTargetGates ? false : !t.disableCh) : Vh(S.operation) ? (o += 1, t.maxCnotTargetGates !== 0 && o > t.maxCnotTargetGates ? false : !t.disableCnot) : Yh(S.operation) ? (s += 1, t.maxCyTargetGates !== 0 && s > t.maxCyTargetGates ? false : !t.disableCy) : Xh(S.operation) ? (p += 1, t.maxCzTargetGates !== 0 && p > t.maxCzTargetGates ? false : !t.disableCz) : sa(S.operation) ? (v += 1, t.maxCphaseTargetGates !== 0 && v > t.maxCphaseTargetGates ? false : !t.disableCphase) : Zh(S.operation) ? (m += 1, t.maxCtTargetGates !== 0 && m > t.maxCtTargetGates ? false : !t.disableCt) : Qh(S.operation) ? (d += 1, t.maxCrnotTargetGates !== 0 && d > t.maxCrnotTargetGates ? false : !t.disableCrnot) : ll(S.operation) ? (f += 1, t.maxCrxTargetGates !== 0 && f > t.maxCrxTargetGates ? false : !t.disableCrx) : ul(S.operation) ? (g += 1, t.maxCryTargetGates !== 0 && g > t.maxCryTargetGates ? false : !t.disableCry) : cl(S.operation) ? (w += 1, t.maxCrzTargetGates !== 0 && w > t.maxCrzTargetGates ? false : !t.disableCrz) : Kh(S.operation) ? !t.disableCswap : true);
  }
  dispatchUpdateEvent() {
    fe("circuit-step:update", {}, this);
  }
  deleteOperation(t) {
    let n = t.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: n });
  }
  resizeOperation(t) {
    let n = t.target;
    this.circuitStepService.send({ type: "RESIZE_OPERATION", dropzone: n });
  }
  dispatchMouseenterEvent() {
    fe("circuit-step:mouseenter", {}, this);
  }
  dispatchMouseleaveEvent() {
    fe("circuit-step:mouseleave", {}, this);
  }
  maybeDispatchClickEvent(t) {
    Xe(t.target) || fe("circuit-step:click", {}, this);
  }
  snapDropzone(t) {
    let n = t.target;
    this.circuitStepService.send({ type: "SNAP_DROPZONE", dropzone: n });
  }
  unsnapDropzone(t) {
    let n = t.target;
    this.circuitStepService.send({ type: "UNSNAP_DROPZONE", dropzone: n });
  }
  unshadow() {
    this.circuitStepService.send({ type: "UNSHADOW" });
  }
  occupyDropzone(t) {
    let n = t.target;
    this.circuitStepService.send({ type: "OCCUPY_DROPZONE", dropzone: n });
  }
  serialize() {
    let t = [];
    for (let [n, o] of Oe(this.operations, (s) => s.constructor))
      switch (n) {
        case Wt: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case tr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case rr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case nr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case Yt: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, g] of Oe(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), t.push(C);
              }
          break;
        }
        case pr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case cr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case er: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case dr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case Xt: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], g = f.operationType, w = d.map((T) => T.bit), S = { type: g, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), t.push(S);
            }
          break;
        }
        case Zt: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, g] of Oe(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), t.push(C);
              }
          break;
        }
        case Qt: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, g] of Oe(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), t.push(C);
              }
          break;
        }
        case Kt: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, g] of Oe(d, (w) => w.controls.toString())) {
                let w = g[0], S = w.operationType, T = g.map((z) => z.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), t.push(C);
              }
          break;
        }
        case Or: {
          let s = o, p = s[0].operationType, v = s.map((d) => d.bit), m = { type: p, targets: v };
          t.push(m);
          break;
        }
        case Cr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), g = { type: d, span: p, targets: f };
            t.push(g);
          }
          break;
        }
        case Tr: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), g = { type: d, span: p, targets: f };
            t.push(g);
          }
          break;
        }
        case Jt: {
          let s = o.filter((d) => !d.disabled);
          if (s.length !== 2)
            break;
          let p = s[0].operationType, v = s[0].controls, m = { type: p, targets: [s[0].bit, s[1].bit] };
          v !== void 0 && v.length > 0 && (m.controls = v), t.push(m);
          break;
        }
        case Bt: {
          let s = o.filter((v) => !v.disabled);
          if (s.length < 2 || this.operations.some((v) => Ro(v) && v.controls.length > 0))
            break;
          let p = s.map((v) => v.bit);
          t.push({ type: s[0].operationType, targets: p });
          break;
        }
        case Sr:
          break;
        case ot: {
          let s = o, p = o.map((v) => v.bit);
          t.push({ type: s[0].operationType, targets: p });
          break;
        }
        case Ht: {
          let s = o;
          for (let [, p] of Oe(s, (v) => v.value)) {
            let v = p.map((m) => m.bit);
            t.push({ type: p[0].operationType, targets: v });
          }
          break;
        }
        case Vt: {
          let s = o;
          for (let [p, v] of Oe(s, (m) => m.flag)) {
            let m = v.map((g) => g.bit), f = { type: v[0].operationType, targets: m };
            p !== "" && (f.flag = p), t.push(f);
          }
          break;
        }
        default:
          throw new dt("Unrecognized operation", { klass: n });
      }
    return t;
  }
  get operations() {
    return this.occupiedDropzones.map((t) => t.operation).filter((t) => t !== null);
  }
  toJson() {
    let t = this.dropzones.map((n) => n.toJson());
    for (; t.length > 0 && t[t.length - 1] === "1"; )
      t.pop();
    return t.length === 0 ? "[1]" : `[${t.join(",")}]`;
  }
}, "gt");
u(gt, "CircuitStepElement"), M([D], gt.prototype, "active", 2), M([D], gt.prototype, "breakpoint", 2), M([D], gt.prototype, "shadow", 2), M([D], gt.prototype, "keep", 2), M([D], gt.prototype, "debug", 2), M([ft], gt.prototype, "dropzones", 2), M([ft], gt.prototype, "freeDropzones", 2), M([ft], gt.prototype, "occupiedDropzones", 2), gt = M([X], gt);
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
var pa = u((e) => e != null && e instanceof de, "isCircuitDropzoneElement");
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
    this.circuitDropzoneMachine = ht({ id: "circuit-dropzone", initial: "unknown", strict: true, states: { unknown: { always: [{ target: "empty", cond: "isEmpty" }, { target: "occupied", cond: "isOccupied", actions: ["initOperation"] }] }, empty: { on: { SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] }, RESIZE_OPERATION: { target: "occupied", actions: ["resizeOperation"] } } } } }, { actions: { initOperation: () => {
      H.notNull(this.operation), this.operation.snapped = true;
    }, snapOperation: () => {
      H.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, fe("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.removeAttribute("data-operation-name"), this.occupied = false, fe("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      fe("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (t, n) => {
      n.type === "PUT_OPERATION" && (this.append(n.operation), this.operationName = n.operation.tagName.toLocaleLowerCase(), this.occupied = true, n.operation.snapped = true);
    }, deleteOperation: (t, n) => {
      n.type === "DELETE_OPERATION" && (this.removeAttribute("data-operation-name"), this.occupied = false, this.removeChild(n.operation));
    }, resizeOperation: () => {
      fe("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      fe("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      fe("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = lt(this.circuitDropzoneMachine).onTransition((t) => {
      this.debug && console.log(`circuit-dropzone: ${t.value}`);
    });
  }
  get noConnections() {
    return !this.connectTop && !this.connectBottom;
  }
  get operation() {
    return this.firstElementChild;
  }
  get snapTarget() {
    let t = this.getBoundingClientRect();
    return { x: window.pageXOffset + t.left + this.clientWidth / 2, y: window.pageYOffset + t.top + this.clientHeight / 2 };
  }
  get resizeHandleSnapTarget() {
    let t = this.getBoundingClientRect();
    return { x: window.pageXOffset + t.left + this.clientWidth / 2, y: window.pageYOffset + t.top + this.clientHeight + 4 };
  }
  toJson() {
    let t = this.operation;
    return t === null ? "1" : t.toJson();
  }
  connectedCallback() {
    let { signal: t } = Ya(this, ca, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: t }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: t }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: t }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: t }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: t }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = Wa(this, ca)) == null || t.abort();
  }
  attributeChangedCallback(t, n, o) {
    n !== o && t === "data-occupied" && (o !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
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
  put(t) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: t });
  }
  get circuitStep() {
    let t = this.parentElement;
    return H.notNull(t), Ur(t) ? t : null;
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
  deleteOperation(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: n });
  }
  resizeOperation(t) {
    let n = t.target;
    if (!ur(n))
      throw new Error(`${n} isn't a Resizeable.`);
    this.circuitDropzoneService.send({ type: "RESIZE_OPERATION" });
  }
  get wireSvg() {
    return U([dm]);
  }
}, "de");
u(de, "CircuitDropzoneElement"), ca = /* @__PURE__ */ new WeakMap(), M([D], de.prototype, "occupied", 2), M([D], de.prototype, "operationName", 2), M([D], de.prototype, "inputWireQuantum", 2), M([D], de.prototype, "outputWireQuantum", 2), M([D], de.prototype, "connectTop", 2), M([D], de.prototype, "connectBottom", 2), M([D], de.prototype, "shadow", 2), M([D], de.prototype, "targets", 2), M([D], de.prototype, "debug", 2), de = M([X], de);
var hm = Lt(en(), 1);
var kn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ht({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (t, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let o = n.operation;
      il(o) && o.menu && o.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (t, n) => {
      n.type !== "GRAB_OPERATION" && n.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(n.operation);
    }, snapOperationIntoDropzone: (t, n) => {
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
    }, snapResizeHandleIntoDropzone: (t, n) => {
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
      if (!zd(m))
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
    }, setSnapTargets: (t, n) => {
      n.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(n.operation);
    }, setResizeHandleSnapTargets: (t, n) => {
      n.type === "GRAB_RESIZE_HANDLE" && this.circuit.setResizeHandleSnapTargets(n.operation);
    }, setBreakpoint: (t, n) => {
      n.type === "CLICK_STEP" && this.circuit.setBreakpoint(n.step);
    }, activateStep: (t, n) => {
      n.type !== "MOUSE_ENTER_STEP" && n.type !== "SNAP_STEP" || (n.step.active = true);
    }, deactivateStep: (t, n) => {
      n.type !== "MOUSE_LEAVE_STEP" && n.type !== "UNSNAP_STEP" || (n.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (t, n) => {
      n.type !== "END_DRAGGING_OPERATION" || n.operation.snapped || this.inspectorButton !== void 0 && this.inspectorButton.isInspectorShown && this.inspectorButton.inspector.disableAllPanes();
    }, initOperationMenu: (t, n) => {
      if (n.type !== "DROP_OPERATION")
        return;
      let o = n.operation;
      il(o) && o.initMenu();
    }, showOperationMenu: (t, n) => {
      n.type === "SHOW_OPERATION_MENU" && (this.inspectorButton.isInspectorShown || n.operation.showMenu());
    }, showOperationInspectorIf: (t, n) => {
      n.type === "SHOW_OPERATION_INSPECTOR_IF" && this.inspectorButton.showIfInspector(n.operation);
    }, showOperationInspectorAngle: (t, n) => {
      n.type === "SHOW_OPERATION_INSPECTOR_ANGLE" && this.inspectorButton.showAngleInspector(n.operation);
    }, showOperationInspectorFlag: (t, n) => {
      n.type === "SHOW_OPERATION_INSPECTOR_FLAG" && this.inspectorButton.showFlagInspector(n.operation);
    }, setOperationIf: (t, n) => {
      n.type === "SET_OPERATION_IF" && (n.operation.if = n.if);
    }, setOperationAngle: (t, n) => {
      n.type === "SET_OPERATION_ANGLE" && (n.operation.angle = n.angle, n.operation.reducedAngle = n.reducedAngle);
    }, setOperationFlag: (t, n) => {
      n.type === "SET_OPERATION_FLAG" && (n.operation.flag = n.flag);
    }, maybeUpdateOperationInspector: (t, n) => {
      if (n.type !== "ACTIVATE_OPERATION" || this.inspectorButton === void 0)
        return;
      let o = n.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(o);
    } } });
    this.circuitEditorService = lt(this.circuitEditorMachine).onTransition((t) => {
      this.debug && console.log(`circuit-editor: ${(0, hm.format)(t.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("menuable:show-menu", this.showOperationMenu), this.addEventListener("menuable:menu-if", this.showOperationInspectorIf), this.addEventListener("menuable:menu-angle", this.showOperationInspectorAngle), this.addEventListener("menuable:menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("resizeable:release-resize-handle", this.releaseResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("menuable:menu-delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(t) {
    let n = t.target;
    if (Hs(n))
      n.draggable = true;
    else
      throw new dt("Not a draggable element.", { el: n });
  }
  enableResizing(t) {
    let n = t.target;
    if (ur(n))
      n.resizeable = true;
    else
      throw new dt("Not a resizeable element.", { el: n });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(t) {
    if (t.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let o of this.circuit.operations)
        il(o) && o.initMenu();
    }
  }
  maybeDeactivateOperation(t) {
    var o;
    let n = t.target;
    !Xe(n) && this.inspectorButton && !((o = this.inspectorButton) != null && o.popup.popper.contains(n)) && !this.inspectorButton.popup.reference.contains(n) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: n });
  }
  showOperationMenu(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: n });
  }
  showOperationInspectorIf(t) {
    let n = t.target;
    if (!un(n))
      throw new Error(`${n} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: n });
  }
  showOperationInspectorAngle(t) {
    let n = t.target;
    if (!ri(n))
      throw new Error(`${n} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: n });
  }
  showOperationInspectorFlag(t) {
    let n = t.target;
    if (!si(n))
      throw new Error(`${n} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: n });
  }
  setOperationIf(t) {
    let n = t.target, o = this.activeOperation;
    if (!un(o))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: o, if: n.if });
  }
  setOperationAngle(t) {
    let n = t.target, o = this.activeOperation;
    if (H.notNull(o), !ri(o))
      throw new Error(`${o.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: o, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(t) {
    let n = t.target, o = this.activeOperation;
    if (!si(o))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: o, flag: n.flag });
  }
  grabOperation(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: n });
  }
  grabResizeHandle(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: n });
  }
  releaseResizeHandle(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  releaseOperation(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: n });
  }
  resizeEnd(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  endDraggingOperation(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: n });
  }
  dropOperation(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: n });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(t) {
    let n = t.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: n });
  }
  snapStep(t) {
    let n = t.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: n });
  }
  unsnapStep(t) {
    let n = t.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: n });
  }
  operationInSnapRange(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    let s = t.detail.snapTargetInfo, p = s.x, v = s.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  resizeHandleInSnapRange(t) {
    let n = t.target;
    if (!Xe(n))
      throw new Error(`${n} must be an Operation.`);
    let s = t.detail.snapTargetInfo, p = s.x, v = s.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  mouseEnterStep(t) {
    if (this.circuit.editing)
      return;
    let n = t.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: n });
  }
  mouseLeaveStep(t) {
    if (this.circuit.editing)
      return;
    let n = t.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: n });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "kn");
u(kn, "CircuitEditorElement"), M([D], kn.prototype, "debug", 2), M([Me], kn.prototype, "circuit", 2), M([Me], kn.prototype, "inspectorButton", 2), kn = M([X], kn);
var fa;
var da = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    Va(this, fa, null);
  }
  connectedCallback() {
    let { signal: t } = Ya(this, fa, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: t }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = Wa(this, fa)) == null || t.abort();
  }
  update() {
    Y(U`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(t) {
    Hs(t) && (t.draggable = true, t.grabbed = false, t.snapped = true), ur(t) && (t.resizeable = true), lc(t) && t.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((t) => Xe(t));
  }
  newOperation(t) {
    let n = t.target;
    this.assertOperation(n);
    let o = n.cloneNode(false);
    this.assertOperation(o), lc(n) && n.disableHelp(), this.prepend(o), this.initOperation(o);
  }
  deleteOperation(t) {
    let n = t.target;
    this.assertOperation(n), this.removeChild(n);
  }
  assertOperation(t) {
    if (!Xe(t))
      throw new TypeError(`${t} isn't an operation.`);
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
    this.quantumCircuitMachine = ht({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = lt(this.quantumCircuitMachine).onTransition((t) => {
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
    return this.steps.find((n) => n.active) || null;
  }
  fetchStepIndex(t) {
    let n = this.steps.indexOf(t);
    return H.need(n !== -1, `circuit-step index of ${t} not found.`), n;
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
    let t = null, n = 0;
    for (let o of this.steps)
      o.wireCount > 0 && o.wireCount > n && (t = o, n = o.wireCount);
    return t;
  }
  appendMinimumSteps() {
    let t = this.minStepCount - this.steps.length;
    for (let n = 0; n < t; n++)
      this.append(new gt());
  }
  stepAt(t) {
    let n = this.steps[t];
    return H.notNull(n), n;
  }
  addShadowStepAfter(t) {
    let n = new gt();
    n.shadow = true;
    for (let o = 0; o < this.wireCount; o++)
      n.appendDropzone();
    if (t === -1)
      this.prepend(n);
    else {
      let o = this.steps[t];
      H.notNull(o.parentElement), o.parentElement.insertBefore(n, o.nextSibling);
    }
    return n;
  }
  activateStep(t) {
    t.active = true;
  }
  deactivateAllSteps() {
    for (let t of this.steps)
      t.active = false;
  }
  setBreakpoint(t) {
    for (let n of this.steps)
      n.breakpoint = false;
    t.breakpoint = true;
  }
  get breakpoint() {
    return this.steps.find((n) => n.breakpoint) || null;
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
      let t = H.urlJson;
      this.loadFromJson(t);
    }
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step:update", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateChangedWire), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateChangedWire), this.addEventListener("circuit-step:delete-qpu-operation", this.updateStep), this.addEventListener("circuit-step:delete-qpu-operation", this.updateChangedWire), this.addEventListener("circuit-step:resize-qpu-operation", this.updateStep), fe("quantum-circuit:init", {}, this);
  }
  attributeChangedCallback(t, n, o) {
    n !== o && (t === "data-editing" && (o !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), t === "data-hoverable" && o !== null && this.makeOperationsHoverable(), t === "data-json" && o !== "" && o !== null && (this.loadFromJson(o), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let t of this.operations)
      t.hoverable = true;
  }
  update() {
    Y(U`<slot></slot>`, this.shadowRoot);
  }
  updateStep(t) {
    let n = t.target;
    this.updateStepOperationAttributes(n);
  }
  updateStepOperationAttributes(t) {
    t.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    fe("quantum-circuit:mouseleave", {}, this);
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Wt();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  x(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new tr();
      return o && s.disable(), s;
    }, ...n), this;
  }
  y(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new rr();
      return o && s.disable(), s;
    }, ...n), this;
  }
  z(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new nr();
      return o && s.disable(), s;
    }, ...n), this;
  }
  phase(...t) {
    let n = "", o, s;
    if (typeof t[0] == "number")
      o = t;
    else if (typeof t[0] == "string")
      n = t[0], o = t.slice(1);
    else {
      let v = t[0];
      o = v.targets, s = v.disabled;
    }
    let p = this.applyOperationToTargets(() => {
      let v = new Yt();
      return v.angle = n, s && v.disable(), v;
    }, ...o);
    return o.length > 1 && this.updateStepOperationAttributes(p), this;
  }
  s(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new pr();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  sDagger(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new cr();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  t(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new er();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  tDagger(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new dr();
      return o && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  rnot(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Xt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  rx(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Zt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  ry(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Qt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  rz(...t) {
    let n, o;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, o = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Kt();
      return o && s.disable(), s;
    }, ...n), this;
  }
  qft(t, ...n) {
    let o;
    return typeof n[0] == "number" ? o = n : o = n[0].targets, this.applyOperationToTargets(() => {
      let s = new Cr();
      return s.span = t, s;
    }, ...o), this.resize(), this;
  }
  qftDagger(t, ...n) {
    let o;
    return typeof n[0] == "number" ? o = n : o = n[0].targets, this.applyOperationToTargets(() => {
      let s = new Tr();
      return s.span = t, s;
    }, ...o), this.resize(), this;
  }
  swap(...t) {
    let n = this.applyOperationToTargets(() => new Jt(), ...t);
    return this.updateStepOperationAttributes(n), this;
  }
  control(...t) {
    let n = this.applyOperationToTargets(() => new Bt(), ...t);
    return this.updateStepOperationAttributes(n), this;
  }
  bloch(...t) {
    return this.applyOperationToTargets(() => new ot(), ...t), this;
  }
  write(t, ...n) {
    return this.applyOperationToTargets(() => {
      let o = new Ht();
      return o.value = t, o;
    }, ...n), this.resize(), this;
  }
  measure(...t) {
    return this.applyOperationToTargets(() => new Vt(), ...t), this.resize(), this;
  }
  applyOperationToTargets(t, ...n) {
    let o = Math.max(...n) + 1, s = this.appendStepWithDropzones(o);
    for (let p of n) {
      let v = t();
      s.dropzoneAt(p).put(v);
    }
    return s;
  }
  ch(t, n) {
    return this.controlledU(Wt, t, n), this;
  }
  cnot(t, n) {
    return this.controlledU(tr, t, n), this.resize(), this;
  }
  cy(t, n) {
    return this.controlledU(rr, t, n), this;
  }
  cz(t, n) {
    return this.controlledU(nr, t, n), this;
  }
  cphase(t, n) {
    return this.controlledU(Yt, t, n), this;
  }
  ct(t, n) {
    return this.controlledU(er, t, n), this;
  }
  crnot(t, n) {
    return this.controlledU(Xt, t, n), this;
  }
  crx(t, n) {
    return this.controlledU(Zt, t, n), this;
  }
  cry(t, n) {
    return this.controlledU(Qt, t, n), this;
  }
  crz(t, n) {
    return this.controlledU(Kt, t, n), this;
  }
  cswap(t, n) {
    return this.controlledU(Jt, t, n), this;
  }
  cc(...t) {
    let n = Math.max(...t) + 1, o = this.appendStepWithDropzones(n);
    for (let s of t)
      o.dropzoneAt(s).put(new Bt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(o), this;
  }
  controlledU(t, n, o) {
    let s = [].concat(n), p = [].concat(o), v = s.concat(p), m = Math.max(...v) + 1, d = this.appendStepWithDropzones(m);
    for (let f of s)
      d.dropzoneAt(f).put(new Bt());
    for (let f of p)
      d.dropzoneAt(f).put(new t());
    this.appendMinimumWires(), this.updateStepOperationAttributes(d);
  }
  appendStep() {
    let t = new gt(), n = this.blocks.slice(-1)[0] || null;
    return n === null || n.finalized ? this.append(t) : n.append(t), t;
  }
  appendStepWithDropzones(t) {
    let n = new gt();
    this.append(n);
    for (let o = 0; o < t; o++) {
      let s = new de();
      n.append(s);
    }
    return n;
  }
  updateAllWires() {
    let t = this.steps[0];
    if (t === void 0)
      return;
    let n = t.dropzones.length;
    for (let o = 0; o < n; o++)
      this.updateWire(o);
  }
  activateOperation(t) {
    for (let n of this.operations)
      n.active = false;
    t.active = true;
  }
  appendWire() {
    for (let t of this.steps)
      t.appendDropzone();
  }
  removeLastEmptyWires() {
    for (; this.steps.every((t) => t.wireCount > t.maxOccupiedDropzoneBit && t.wireCount > this.minWireCount && !t.lastDropzone.occupied); )
      for (let t of this.steps)
        t.lastDropzone.remove();
  }
  removeEmptySteps() {
    for (let t of this.emptySteps)
      t.remove();
  }
  loadFromJson(t) {
    this.innerHTML = "";
    let n = null;
    if (t === "") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let o = null, s = H.safeJsonParse(t);
    if (s.isOk())
      o = s.value;
    else {
      console.error(s.error.message), console.error(t);
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
            let g = new Qt();
            g.angle = this.angleParameter(f.slice(2)), d.push(g), m.append(new de());
            break;
          }
          case /^Rz/.test(f): {
            let g = new Kt();
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
            m.remove(), n = new pn(), n.comment = g, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
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
  ifVariable(t) {
    return ((/^<(.+)$/.exec(t) || [])[1] || "").trim();
  }
  angleParameter(t) {
    return ((/^\((.+)\)$/.exec(t) || [])[1] || "").trim().replace("_", "/");
  }
  appendMinimumWires() {
    let t = this.largestStep, n = t && t.wireCount > this.minWireCount ? t.wireCount : this.minWireCount;
    for (let o of this.steps) {
      let s = n - o.wireCount;
      for (let p = 0; p < s; p++)
        o.appendDropzone();
    }
  }
  updateWire(t) {
    let n = false;
    for (let o of this.steps) {
      let s = o.dropzoneAt(t);
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
  updateChangedWire(t) {
    let n = t.target;
    if (!Ur(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let o = t.detail.dropzone;
    if (!pa(o))
      throw new Error(`${o} isn't a circuit-dropzone.`);
    let s = n.dropzones.indexOf(o);
    H.need(s !== -1, "circuit-dropzone not found."), this.updateWire(s);
  }
  snapTargetAt(t, n) {
    return this.isVertical ? this.snapTargets[n][t] : this.snapTargets[t][n];
  }
  resizeHandleSnapTargetAt(t, n) {
    return this.isVertical ? this.resizeHandleSnapTargets[n][t] : this.resizeHandleSnapTargets[t][n];
  }
  setSnapTargets(t) {
    let n = [];
    this.snapTargets = {};
    let o = 1;
    ur(t) && (o = t.span);
    let s = t.dropzone;
    for (let [p, v] of Object.entries(this.steps)) {
      let m = parseInt(p);
      for (let [d, f] of Object.entries(v.dropzones)) {
        let g = parseInt(d), w = f.snapTarget, S = this.isVertical ? w.y : w.x, T = this.isVertical ? w.x : w.y;
        if (m === 0 && v.dropzones[g + o - 1] !== void 0) {
          let z = S - t.snapRange * 0.75;
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
        let C = S + t.snapRange * 0.75;
        v.dropzones[g + o - 1] !== void 0 && (this.isVertical ? n.push({ x: T, y: C }) : n.push({ x: C, y: T })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][T] === void 0 && (this.snapTargets[C][T] = { dropzone: null, stepIndex: m, wireIndex: g }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][T] === void 0 && (this.snapTargets[S][T] = { dropzone: f, stepIndex: null, wireIndex: g });
      }
    }
    t.snapTargets = n;
  }
  setResizeHandleSnapTargets(t) {
    if (!ur(t))
      throw new Error(`${t} isn't a resizeable operation.`);
    if (!pa(t == null ? void 0 : t.dropzone))
      throw new Error(`${t.dropzone} isn't a circuit-dropzone.`);
    let n = t.dropzone.circuitStep;
    H.notNull(n);
    let o = n.freeDropzones, s = t.dropzone;
    o.push(s);
    let p = [];
    this.resizeHandleSnapTargets = {};
    for (let [v, m] of Object.entries(n.dropzones)) {
      let d = m.resizeHandleSnapTarget, f = this.isVertical ? d.y : d.x, g = this.isVertical ? d.x : d.y, w = parseInt(v) % this.wireCount;
      if (m.occupied || p.push(d), m === s) {
        p.push(d);
        let S = t.span;
        for (let T = 1; T < S; T++) {
          let C = n.dropzones[parseInt(v) + T];
          H.notNull(C), p.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[f] === void 0 && (this.resizeHandleSnapTargets[f] = {}), this.resizeHandleSnapTargets[f][g] === void 0 && (this.resizeHandleSnapTargets[f][g] = { dropzone: m, stepIndex: null, wireIndex: w });
    }
    t.resizeHandleSnapTargets = p;
  }
  updateSnapTargets(t) {
    let n = t[0];
    H.notNull(n);
    let o = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [s, p] of Object.entries(this.snapTargets))
      if (!(parseInt(s) <= o))
        for (let v in p) {
          let m = p[v];
          m.stepIndex !== null && (m.stepIndex += 1);
        }
    for (let [s, p] of Object.entries(t)) {
      let v = p.snapTarget, m = this.isVertical ? v.y : v.x, d = this.isVertical ? v.x : v.y;
      H.notNull(this.snapTargets[m]), this.snapTargets[m][d] = { dropzone: p, stepIndex: null, wireIndex: parseInt(s) };
    }
  }
  serialize() {
    return this.steps.map((t) => t.serialize());
  }
  clear() {
    history.pushState("", "", encodeURIComponent('{"cols":[]}')), location.reload();
  }
  toJson() {
    let t = false, n = [];
    for (let o of this.nonEmptySteps) {
      if (o.isInBlock) {
        if (!t) {
          let s = o.block;
          n.push(`["[${s.comment}"]`), t = true;
        }
      } else
        t && (n.push('["]"]'), t = false);
      n.push(o.toJson());
    }
    return t && n.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${n.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${n.join(",")}]}`;
  }
}, "le");
u(le, "QuantumCircuitElement"), M([D], le.prototype, "minStepCount", 2), M([D], le.prototype, "minWireCount", 2), M([D], le.prototype, "editing", 2), M([D], le.prototype, "updateUrl", 2), M([D], le.prototype, "json", 2), M([D], le.prototype, "circuitTitle", 2), M([D], le.prototype, "debug", 2), M([D], le.prototype, "chDisabled", 2), M([D], le.prototype, "chMaxControlGates", 2), M([D], le.prototype, "chMaxTargetGates", 2), M([D], le.prototype, "cnotDisabled", 2), M([D], le.prototype, "cnotMaxControlGates", 2), M([D], le.prototype, "cnotMaxTargetGates", 2), M([D], le.prototype, "cyDisabled", 2), M([D], le.prototype, "cyMaxControlGates", 2), M([D], le.prototype, "cyMaxTargetGates", 2), M([D], le.prototype, "czDisabled", 2), M([D], le.prototype, "czMaxControlGates", 2), M([D], le.prototype, "czMaxTargetGates", 2), M([D], le.prototype, "cphaseDisabled", 2), M([D], le.prototype, "cphaseMaxControlGates", 2), M([D], le.prototype, "cphaseMaxTargetGates", 2), M([D], le.prototype, "ctDisabled", 2), M([D], le.prototype, "ctMaxControlGates", 2), M([D], le.prototype, "ctMaxTargetGates", 2), M([D], le.prototype, "crnotDisabled", 2), M([D], le.prototype, "crnotMaxControlGates", 2), M([D], le.prototype, "crnotMaxTargetGates", 2), M([D], le.prototype, "crxDisabled", 2), M([D], le.prototype, "crxMaxControlGates", 2), M([D], le.prototype, "crxMaxTargetGates", 2), M([D], le.prototype, "cryDisabled", 2), M([D], le.prototype, "cryMaxControlGates", 2), M([D], le.prototype, "cryMaxTargetGates", 2), M([D], le.prototype, "crzDisabled", 2), M([D], le.prototype, "crzMaxControlGates", 2), M([D], le.prototype, "crzMaxTargetGates", 2), M([D], le.prototype, "cswapDisabled", 2), M([D], le.prototype, "cswapMaxControlGates", 2), M([D], le.prototype, "swapDisabled", 2), M([D], le.prototype, "controlControlDisabled", 2), M([D], le.prototype, "controlControlMaxTargetGates", 2), M([D], le.prototype, "phasePhaseDisabled", 2), M([D], le.prototype, "phasePhaseMaxTargetGates", 2), M([ft], le.prototype, "blocks", 2), le = M([X], le);
var dn = /* @__PURE__ */ __name(class extends HTMLElement {
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
  handleServiceWorkerMessage(t) {
    var s;
    let n = t.data, o = this.activeStepIndex;
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
          un(m) && m.if !== "" && (m.disabled = !n.flags[m.if]);
        }
        if (o === n.step) {
          let v = {};
          for (let m in n.amplitudes) {
            let d = n.amplitudes[m];
            v[m] = new On(d[0], d[1]);
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
        throw new dt("Unknown service worker message", { data: n });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(t) {
    let n = this.activeStepIndex, o = this.circuit.serialize();
    H.need(o.length > 0, "non-zero step length");
    let s = this.circuit.toJson(), p = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: p, stepIndex: n, circuitJson: s, invalidateCaches: t, steps: o, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let t = Math.max(...this.circuit.steps.map((n) => n.maxOccupiedDropzoneBit));
    return t === 0 && (t = 1), this.circleNotation.qubitCount = t, t;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let t = this.circuit.activeStep, n = this.circuit.breakpoint, o = t || n;
    return o === null && (o = this.circuit.stepAt(0), this.circuit.setBreakpoint(o)), this.circuit.fetchStepIndex(o);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    H.notNull(this.circuit);
    let t = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(t));
  }
}, "dn");
u(dn, "QuantumSimulatorElement"), M([D], dn.prototype, "updateUrl", 2), M([Me], dn.prototype, "circuit", 2), M([Me], dn.prototype, "circleNotation", 2), M([ft], dn.prototype, "runCircuitButtons", 2), dn = M([X], dn);

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
  On as Complex
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
