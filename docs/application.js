var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var kv = Object.create;
var vo = Object.defineProperty;
var ip = Object.getOwnPropertyDescriptor;
var Nv = Object.getOwnPropertyNames;
var rp = Object.getOwnPropertySymbols;
var Gv = Object.getPrototypeOf;
var op = Object.prototype.hasOwnProperty;
var Lv = Object.prototype.propertyIsEnumerable;
var np = /* @__PURE__ */ __name((t, r, e) => r in t ? vo(t, r, { enumerable: true, configurable: true, writable: true, value: e }) : t[r] = e, "np");
var ap = /* @__PURE__ */ __name((t, r) => {
  for (var e in r || (r = {}))
    op.call(r, e) && np(t, e, r[e]);
  if (rp)
    for (var e of rp(r))
      Lv.call(r, e) && np(t, e, r[e]);
  return t;
}, "ap");
var c = /* @__PURE__ */ __name((t, r) => vo(t, "name", { value: r, configurable: true }), "c");
var Tt = /* @__PURE__ */ __name((t, r) => () => (r || t((r = { exports: {} }).exports, r), r.exports), "Tt");
var jv = /* @__PURE__ */ __name((t, r, e, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of Nv(r))
      !op.call(t, a) && a !== e && vo(t, a, { get: () => r[a], enumerable: !(n = ip(r, a)) || n.enumerable });
  return t;
}, "jv");
var Lt = /* @__PURE__ */ __name((t, r, e) => (e = t != null ? kv(Gv(t)) : {}, jv(r || !t || !t.__esModule ? vo(e, "default", { value: t, enumerable: true }) : e, t)), "Lt");
var M = /* @__PURE__ */ __name((t, r, e, n) => {
  for (var a = n > 1 ? void 0 : n ? ip(r, e) : r, s = t.length - 1, p; s >= 0; s--)
    (p = t[s]) && (a = (n ? p(r, e, a) : p(a)) || a);
  return n && a && vo(r, e, a), a;
}, "M");
var sp = /* @__PURE__ */ __name((t, r, e) => {
  if (!r.has(t))
    throw TypeError("Cannot " + e);
}, "sp");
var La = /* @__PURE__ */ __name((t, r, e) => (sp(t, r, "read from private field"), e ? e.call(t) : r.get(t)), "La");
var ja = /* @__PURE__ */ __name((t, r, e) => {
  if (r.has(t))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(t) : r.set(t, e);
}, "ja");
var Ba = /* @__PURE__ */ __name((t, r, e, n) => (sp(t, r, "write to private field"), n ? n.call(t, e) : r.set(t, e), e), "Ba");
var up = Tt((Nl, lp) => {
  (function(t) {
    "use strict";
    var r = 2e3, e = { s: 1, n: 0, d: 1 };
    function n(w, S) {
      if (isNaN(w = parseInt(w, 10)))
        throw y.InvalidParameter;
      return w * S;
    }
    __name(n, "n");
    c(n, "assign");
    function a(w, S) {
      if (S === 0)
        throw y.DivisionByZero;
      var T = Object.create(y.prototype);
      T.s = w < 0 ? -1 : 1, w = w < 0 ? -w : w;
      var C = f(w, S);
      return T.n = w / C, T.d = S / C, T;
    }
    __name(a, "a");
    c(a, "newFraction");
    function s(w) {
      for (var S = {}, T = w, C = 2, _ = 4; _ <= T; ) {
        for (; T % C === 0; )
          T /= C, S[C] = (S[C] || 0) + 1;
        _ += 1 + 2 * C++;
      }
      return T !== w ? T > 1 && (S[T] = (S[T] || 0) + 1) : S[w] = (S[w] || 0) + 1, S;
    }
    __name(s, "s");
    c(s, "factorize");
    var p = c(function(w, S) {
      var T = 0, C = 1, _ = 1, k = 0, j = 0, $ = 0, A = 1, ee = 1, z = 0, B = 1, J = 1, te = 1, le = 1e7, X;
      if (w != null)
        if (S !== void 0) {
          if (T = w, C = S, _ = T * C, T % 1 !== 0 || C % 1 !== 0)
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
              _ = T * C;
              break;
            }
            case "number": {
              if (w < 0 && (_ = w, w = -w), w % 1 === 0)
                T = w;
              else if (w > 0) {
                for (w >= 1 && (ee = Math.pow(10, Math.floor(1 + Math.log(w) / Math.LN10)), w /= ee); B <= le && te <= le; )
                  if (X = (z + J) / (B + te), w === X) {
                    B + te <= le ? (T = z + J, C = B + te) : te > B ? (T = J, C = te) : (T = z, C = B);
                    break;
                  } else
                    w > X ? (z += J, B += te) : (J += z, te += B), B > le ? (T = J, C = te) : (T = z, C = B);
                T *= ee;
              } else
                (isNaN(w) || isNaN(S)) && (C = T = NaN);
              break;
            }
            case "string": {
              if (B = w.match(/\d+|./g), B === null)
                throw y.InvalidParameter;
              if (B[z] === "-" ? (_ = -1, z++) : B[z] === "+" && z++, B.length === z + 1 ? j = n(B[z++], _) : B[z + 1] === "." || B[z] === "." ? (B[z] !== "." && (k = n(B[z++], _)), z++, (z + 1 === B.length || B[z + 1] === "(" && B[z + 3] === ")" || B[z + 1] === "'" && B[z + 3] === "'") && (j = n(B[z], _), A = Math.pow(10, B[z].length), z++), (B[z] === "(" && B[z + 2] === ")" || B[z] === "'" && B[z + 2] === "'") && ($ = n(B[z + 1], _), ee = Math.pow(10, B[z + 1].length) - 1, z += 3)) : B[z + 1] === "/" || B[z + 1] === ":" ? (j = n(B[z], _), A = n(B[z + 2], 1), z += 3) : B[z + 3] === "/" && B[z + 1] === " " && (k = n(B[z], _), j = n(B[z + 2], _), A = n(B[z + 4], 1), z += 5), B.length <= z) {
                C = A * ee, _ = T = $ + C * k + ee * j;
                break;
              }
            }
            default:
              throw y.InvalidParameter;
          }
      if (C === 0)
        throw y.DivisionByZero;
      e.s = _ < 0 ? -1 : 1, e.n = Math.abs(T), e.d = Math.abs(C);
    }, "parse");
    function v(w, S, T) {
      for (var C = 1; S > 0; w = w * w % T, S >>= 1)
        S & 1 && (C = C * w % T);
      return C;
    }
    __name(v, "v");
    c(v, "modpow");
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
    c(m, "cycleLen");
    function d(w, S, T) {
      for (var C = 1, _ = v(10, T, S), k = 0; k < 300; k++) {
        if (C === _)
          return k;
        C = C * 10 % S, _ = _ * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    c(d, "cycleStart");
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
    c(f, "gcd");
    function y(w, S) {
      if (p(w, S), this instanceof y)
        w = f(e.d, e.n), this.s = e.s, this.n = e.n / w, this.d = e.d / w;
      else
        return a(e.s * e.n, e.d);
    }
    __name(y, "y");
    c(y, "Fraction"), y.DivisionByZero = new Error("Division by Zero"), y.InvalidParameter = new Error("Invalid argument"), y.NonIntegerParameter = new Error("Parameters must be integer"), y.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return a(this.n, this.d);
    }, neg: function() {
      return a(-this.s * this.n, this.d);
    }, add: function(w, S) {
      return p(w, S), a(this.s * this.n * e.d + e.s * this.d * e.n, this.d * e.d);
    }, sub: function(w, S) {
      return p(w, S), a(this.s * this.n * e.d - e.s * this.d * e.n, this.d * e.d);
    }, mul: function(w, S) {
      return p(w, S), a(this.s * e.s * this.n * e.n, this.d * e.d);
    }, div: function(w, S) {
      return p(w, S), a(this.s * e.s * this.n * e.d, this.d * e.n);
    }, clone: function() {
      return a(this.s * this.n, this.d);
    }, mod: function(w, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new y(NaN);
      if (w === void 0)
        return a(this.s * this.n % this.d, 1);
      if (p(w, S), e.n === 0 && this.d === 0)
        throw y.DivisionByZero;
      return a(this.s * (e.d * this.n) % (e.n * this.d), e.d * this.d);
    }, gcd: function(w, S) {
      return p(w, S), a(f(e.n, this.n) * f(e.d, this.d), e.d * this.d);
    }, lcm: function(w, S) {
      return p(w, S), e.n === 0 && this.n === 0 ? a(0, 1) : a(e.n * this.n, f(e.n, this.n) * f(e.d, this.d));
    }, ceil: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.ceil(w * this.s * this.n / this.d), w);
    }, floor: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.floor(w * this.s * this.n / this.d), w);
    }, round: function(w) {
      return w = Math.pow(10, w || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.round(w * this.s * this.n / this.d), w);
    }, inverse: function() {
      return a(this.s * this.d, this.n);
    }, pow: function(w, S) {
      if (p(w, S), e.d === 1)
        return e.s < 0 ? a(Math.pow(this.s * this.d, e.n), Math.pow(this.n, e.n)) : a(Math.pow(this.s * this.n, e.n), Math.pow(this.d, e.n));
      if (this.s < 0)
        return null;
      var T = s(this.n), C = s(this.d), _ = 1, k = 1;
      for (var j in T)
        if (j !== "1") {
          if (j === "0") {
            _ = 0;
            break;
          }
          if (T[j] *= e.n, T[j] % e.d === 0)
            T[j] /= e.d;
          else
            return null;
          _ *= Math.pow(j, T[j]);
        }
      for (var j in C)
        if (j !== "1") {
          if (C[j] *= e.n, C[j] % e.d === 0)
            C[j] /= e.d;
          else
            return null;
          k *= Math.pow(j, C[j]);
        }
      return e.s < 0 ? a(k, _) : a(_, k);
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
        for (var _ = a(T[C - 1], 1), k = C - 2; k >= 0; k--)
          _ = _.inverse().add(T[k]);
        if (_.sub(S).abs().valueOf() < w)
          return _.mul(this.s);
      }
      return this;
    }, divisible: function(w, S) {
      return p(w, S), !(!(e.n * this.d) || this.n * e.d % (e.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(w) {
      var S, T = "", C = this.n, _ = this.d;
      return this.s < 0 && (T += "-"), _ === 1 ? T += C : (w && (S = Math.floor(C / _)) > 0 && (T += S, T += " ", C %= _), T += C, T += "/", T += _), T;
    }, toLatex: function(w) {
      var S, T = "", C = this.n, _ = this.d;
      return this.s < 0 && (T += "-"), _ === 1 ? T += C : (w && (S = Math.floor(C / _)) > 0 && (T += S, C %= _), T += "\\frac{", T += C, T += "}{", T += _, T += "}"), T;
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
      var C = m(S, T), _ = d(S, T, C), k = this.s < 0 ? "-" : "";
      if (k += S / T | 0, S %= T, S *= 10, S && (k += "."), C) {
        for (var j = _; j--; )
          k += S / T | 0, S %= T, S *= 10;
        k += "(";
        for (var j = C; j--; )
          k += S / T | 0, S %= T, S *= 10;
        k += ")";
      } else
        for (var j = w; S && j--; )
          k += S / T | 0, S %= T, S *= 10;
      return k;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return y;
    }) : typeof Nl == "object" ? (Object.defineProperty(y, "__esModule", { value: true }), y.default = y, y.Fraction = y, lp.exports = y) : t.Fraction = y;
  })(Nl);
});
var fp = Tt((u0, dp) => {
  "use strict";
  var cp = c((t = 0) => (r) => `\x1B[${38 + t};5;${r}m`, "wrapAnsi256"), pp = c((t = 0) => (r, e, n) => `\x1B[${38 + t};2;${r};${e};${n}m`, "wrapAnsi16m");
  function Bv() {
    let t = /* @__PURE__ */ new Map(), r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    r.color.gray = r.color.blackBright, r.bgColor.bgGray = r.bgColor.bgBlackBright, r.color.grey = r.color.blackBright, r.bgColor.bgGrey = r.bgColor.bgBlackBright;
    for (let [e, n] of Object.entries(r)) {
      for (let [a, s] of Object.entries(n))
        r[a] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, n[a] = r[a], t.set(s[0], s[1]);
      Object.defineProperty(r, e, { value: n, enumerable: false });
    }
    return Object.defineProperty(r, "codes", { value: t, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi256 = cp(), r.color.ansi16m = pp(), r.bgColor.ansi256 = cp(10), r.bgColor.ansi16m = pp(10), Object.defineProperties(r, { rgbToAnsi256: { value: (e, n, a) => e === n && n === a ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(a / 255 * 5), enumerable: false }, hexToRgb: { value: (e) => {
      let n = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(e.toString(16));
      if (!n)
        return [0, 0, 0];
      let { colorString: a } = n.groups;
      a.length === 3 && (a = a.split("").map((p) => p + p).join(""));
      let s = Number.parseInt(a, 16);
      return [s >> 16 & 255, s >> 8 & 255, s & 255];
    }, enumerable: false }, hexToAnsi256: { value: (e) => r.rgbToAnsi256(...r.hexToRgb(e)), enumerable: false } }), r;
  }
  __name(Bv, "Bv");
  c(Bv, "assembleStyles");
  Object.defineProperty(dp, "exports", { enumerable: true, get: Bv });
});
var go = Tt((Ti) => {
  "use strict";
  Object.defineProperty(Ti, "__esModule", { value: true });
  Ti.printIteratorEntries = $v;
  Ti.printIteratorValues = qv;
  Ti.printListItems = Fv;
  Ti.printObjectProperties = Uv;
  var Hv = c((t, r) => {
    let e = Object.keys(t), n = r !== null ? e.sort(r) : e;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((a) => {
      Object.getOwnPropertyDescriptor(t, a).enumerable && n.push(a);
    }), n;
  }, "getKeysOfEnumerableProperties");
  function $v(t, r, e, n, a, s, p = ": ") {
    let v = "", m = 0, d = t.next();
    if (!d.done) {
      v += r.spacingOuter;
      let f = e + r.indent;
      for (; !d.done; ) {
        if (v += f, m++ === r.maxWidth) {
          v += "\u2026";
          break;
        }
        let y = s(d.value[0], r, f, n, a), w = s(d.value[1], r, f, n, a);
        v += y + p + w, d = t.next(), d.done ? r.min || (v += ",") : v += `,${r.spacingInner}`;
      }
      v += r.spacingOuter + e;
    }
    return v;
  }
  __name($v, "$v");
  c($v, "printIteratorEntries");
  function qv(t, r, e, n, a, s) {
    let p = "", v = 0, m = t.next();
    if (!m.done) {
      p += r.spacingOuter;
      let d = e + r.indent;
      for (; !m.done; ) {
        if (p += d, v++ === r.maxWidth) {
          p += "\u2026";
          break;
        }
        p += s(m.value, r, d, n, a), m = t.next(), m.done ? r.min || (p += ",") : p += `,${r.spacingInner}`;
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(qv, "qv");
  c(qv, "printIteratorValues");
  function Fv(t, r, e, n, a, s) {
    let p = "";
    if (t.length) {
      p += r.spacingOuter;
      let v = e + r.indent;
      for (let m = 0; m < t.length; m++) {
        if (p += v, m === r.maxWidth) {
          p += "\u2026";
          break;
        }
        m in t && (p += s(t[m], r, v, n, a)), m < t.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(Fv, "Fv");
  c(Fv, "printListItems");
  function Uv(t, r, e, n, a, s) {
    let p = "", v = Hv(t, r.compareKeys);
    if (v.length) {
      p += r.spacingOuter;
      let m = e + r.indent;
      for (let d = 0; d < v.length; d++) {
        let f = v[d], y = s(f, r, m, n, a), w = s(t[f], r, m, n, a);
        p += `${m + y}: ${w}`, d < v.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + e;
    }
    return p;
  }
  __name(Uv, "Uv");
  c(Uv, "printObjectProperties");
});
var gp = Tt((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.test = xn.serialize = xn.default = void 0;
  var hp = go(), Gl = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, Wv = typeof Gl == "function" && Gl.for ? Gl.for("jest.asymmetricMatcher") : 1267621, Ha = " ", mp = c((t, r, e, n, a, s) => {
    let p = t.toString();
    if (p === "ArrayContaining" || p === "ArrayNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Ha}[${(0, hp.printListItems)(t.sample, r, e, n, a, s)}]`;
    if (p === "ObjectContaining" || p === "ObjectNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Ha}{${(0, hp.printObjectProperties)(t.sample, r, e, n, a, s)}}`;
    if (p === "StringMatching" || p === "StringNotMatching" || p === "StringContaining" || p === "StringNotContaining")
      return p + Ha + s(t.sample, r, e, n, a);
    if (typeof t.toAsymmetricMatcher != "function")
      throw new Error(`Asymmetric matcher ${t.constructor.name} does not implement toAsymmetricMatcher()`);
    return t.toAsymmetricMatcher();
  }, "serialize");
  xn.serialize = mp;
  var vp = c((t) => t && t.$$typeof === Wv, "test");
  xn.test = vp;
  var Vv = { serialize: mp, test: vp }, Yv = Vv;
  xn.default = Yv;
});
var Ep = Tt((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: true });
  En.test = En.serialize = En.default = void 0;
  var bp = go(), Xv = " ", yp = ["DOMStringMap", "NamedNodeMap"], Zv = /^(HTML\w*Collection|NodeList)$/, Qv = c((t) => yp.indexOf(t) !== -1 || Zv.test(t), "testName"), wp = c((t) => t && t.constructor && !!t.constructor.name && Qv(t.constructor.name), "test");
  En.test = wp;
  var Kv = c((t) => t.constructor.name === "NamedNodeMap", "isNamedNodeMap"), xp = c((t, r, e, n, a, s) => {
    let p = t.constructor.name;
    return ++n > r.maxDepth ? `[${p}]` : (r.min ? "" : p + Xv) + (yp.indexOf(p) !== -1 ? `{${(0, bp.printObjectProperties)(Kv(t) ? Array.from(t).reduce((v, m) => (v[m.name] = m.value, v), {}) : ap({}, t), r, e, n, a, s)}}` : `[${(0, bp.printListItems)(Array.from(t), r, e, n, a, s)}]`);
  }, "serialize");
  En.serialize = xp;
  var Jv = { serialize: xp, test: wp }, eg = Jv;
  En.default = eg;
});
var Sp = Tt((Ll) => {
  "use strict";
  Object.defineProperty(Ll, "__esModule", { value: true });
  Ll.default = tg;
  function tg(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  __name(tg, "tg");
  c(tg, "escapeHTML");
});
var $a = Tt((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: true });
  Ut.printText = Ut.printProps = Ut.printElementAsLeaf = Ut.printElement = Ut.printComment = Ut.printChildren = void 0;
  var Tp = rg(Sp());
  function rg(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(rg, "rg");
  c(rg, "_interopRequireDefault");
  var ng = c((t, r, e, n, a, s, p) => {
    let v = n + e.indent, m = e.colors;
    return t.map((d) => {
      let f = r[d], y = p(f, e, v, a, s);
      return typeof f != "string" && (y.indexOf(`
`) !== -1 && (y = e.spacingOuter + v + y + e.spacingOuter + n), y = `{${y}}`), `${e.spacingInner + n + m.prop.open + d + m.prop.close}=${m.value.open}${y}${m.value.close}`;
    }).join("");
  }, "printProps");
  Ut.printProps = ng;
  var ig = c((t, r, e, n, a, s) => t.map((p) => r.spacingOuter + e + (typeof p == "string" ? Cp(p, r) : s(p, r, e, n, a))).join(""), "printChildren");
  Ut.printChildren = ig;
  var Cp = c((t, r) => {
    let e = r.colors.content;
    return e.open + (0, Tp.default)(t) + e.close;
  }, "printText");
  Ut.printText = Cp;
  var og = c((t, r) => {
    let e = r.colors.comment;
    return `${e.open}<!--${(0, Tp.default)(t)}-->${e.close}`;
  }, "printComment");
  Ut.printComment = og;
  var ag = c((t, r, e, n, a) => {
    let s = n.colors.tag;
    return `${s.open}<${t}${r && s.close + r + n.spacingOuter + a + s.open}${e ? `>${s.close}${e}${n.spacingOuter}${a}${s.open}</${t}` : `${r && !n.min ? "" : " "}/`}>${s.close}`;
  }, "printElement");
  Ut.printElement = ag;
  var sg = c((t, r) => {
    let e = r.colors.tag;
    return `${e.open}<${t}${e.close} \u2026${e.open} />${e.close}`;
  }, "printElementAsLeaf");
  Ut.printElementAsLeaf = sg;
});
var _p = Tt((Sn) => {
  "use strict";
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.test = Sn.serialize = Sn.default = void 0;
  var Ci = $a(), lg = 1, Op = 3, Mp = 8, Ip = 11, ug = /^((HTML|SVG)\w*)?Element$/, cg = c((t) => {
    try {
      return typeof t.hasAttribute == "function" && t.hasAttribute("is");
    } catch (r) {
      return false;
    }
  }, "testHasAttribute"), pg = c((t) => {
    let r = t.constructor.name, { nodeType: e, tagName: n } = t, a = typeof n == "string" && n.includes("-") || cg(t);
    return e === lg && (ug.test(r) || a) || e === Op && r === "Text" || e === Mp && r === "Comment" || e === Ip && r === "DocumentFragment";
  }, "testNode"), Ap = c((t) => {
    var r;
    return ((r = t == null ? void 0 : t.constructor) == null ? void 0 : r.name) && pg(t);
  }, "test");
  Sn.test = Ap;
  function dg(t) {
    return t.nodeType === Op;
  }
  __name(dg, "dg");
  c(dg, "nodeIsText");
  function fg(t) {
    return t.nodeType === Mp;
  }
  __name(fg, "fg");
  c(fg, "nodeIsComment");
  function jl(t) {
    return t.nodeType === Ip;
  }
  __name(jl, "jl");
  c(jl, "nodeIsFragment");
  var Pp = c((t, r, e, n, a, s) => {
    if (dg(t))
      return (0, Ci.printText)(t.data, r);
    if (fg(t))
      return (0, Ci.printComment)(t.data, r);
    let p = jl(t) ? "DocumentFragment" : t.tagName.toLowerCase();
    return ++n > r.maxDepth ? (0, Ci.printElementAsLeaf)(p, r) : (0, Ci.printElement)(p, (0, Ci.printProps)(jl(t) ? [] : Array.from(t.attributes).map((v) => v.name).sort(), jl(t) ? {} : Array.from(t.attributes).reduce((v, m) => (v[m.name] = m.value, v), {}), r, e + r.indent, n, a, s), (0, Ci.printChildren)(Array.prototype.slice.call(t.childNodes || t.children), r, e + r.indent, n, a, s), r, e);
  }, "serialize");
  Sn.serialize = Pp;
  var hg = { serialize: Pp, test: Ap }, mg = hg;
  Sn.default = mg;
});
var Np = Tt((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: true });
  Tn.test = Tn.serialize = Tn.default = void 0;
  var bo = go(), vg = "@@__IMMUTABLE_ITERABLE__@@", gg = "@@__IMMUTABLE_LIST__@@", bg = "@@__IMMUTABLE_KEYED__@@", yg = "@@__IMMUTABLE_MAP__@@", zp = "@@__IMMUTABLE_ORDERED__@@", wg = "@@__IMMUTABLE_RECORD__@@", xg = "@@__IMMUTABLE_SEQ__@@", Eg = "@@__IMMUTABLE_SET__@@", Sg = "@@__IMMUTABLE_STACK__@@", Oi = c((t) => `Immutable.${t}`, "getImmutableName"), qa = c((t) => `[${t}]`, "printAsLeaf"), yo = " ", Rp = "\u2026", Tg = c((t, r, e, n, a, s, p) => ++n > r.maxDepth ? qa(Oi(p)) : `${Oi(p) + yo}{${(0, bo.printIteratorEntries)(t.entries(), r, e, n, a, s)}}`, "printImmutableEntries");
  function Cg(t) {
    let r = 0;
    return { next() {
      if (r < t._keys.length) {
        let e = t._keys[r++];
        return { done: false, value: [e, t.get(e)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  __name(Cg, "Cg");
  c(Cg, "getRecordEntries");
  var Og = c((t, r, e, n, a, s) => {
    let p = Oi(t._name || "Record");
    return ++n > r.maxDepth ? qa(p) : `${p + yo}{${(0, bo.printIteratorEntries)(Cg(t), r, e, n, a, s)}}`;
  }, "printImmutableRecord"), Mg = c((t, r, e, n, a, s) => {
    let p = Oi("Seq");
    return ++n > r.maxDepth ? qa(p) : t[bg] ? `${p + yo}{${t._iter || t._object ? (0, bo.printIteratorEntries)(t.entries(), r, e, n, a, s) : Rp}}` : `${p + yo}[${t._iter || t._array || t._collection || t._iterable ? (0, bo.printIteratorValues)(t.values(), r, e, n, a, s) : Rp}]`;
  }, "printImmutableSeq"), Bl = c((t, r, e, n, a, s, p) => ++n > r.maxDepth ? qa(Oi(p)) : `${Oi(p) + yo}[${(0, bo.printIteratorValues)(t.values(), r, e, n, a, s)}]`, "printImmutableValues"), Dp = c((t, r, e, n, a, s) => t[yg] ? Tg(t, r, e, n, a, s, t[zp] ? "OrderedMap" : "Map") : t[gg] ? Bl(t, r, e, n, a, s, "List") : t[Eg] ? Bl(t, r, e, n, a, s, t[zp] ? "OrderedSet" : "Set") : t[Sg] ? Bl(t, r, e, n, a, s, "Stack") : t[xg] ? Mg(t, r, e, n, a, s) : Og(t, r, e, n, a, s), "serialize");
  Tn.serialize = Dp;
  var kp = c((t) => t && (t[vg] === true || t[wg] === true), "test");
  Tn.test = kp;
  var Ig = { serialize: Dp, test: kp }, Ag = Ig;
  Tn.default = Ag;
});
var Lp = Tt((Ge) => {
  "use strict";
  var Hl = Symbol.for("react.element"), $l = Symbol.for("react.portal"), Fa = Symbol.for("react.fragment"), Ua = Symbol.for("react.strict_mode"), Wa = Symbol.for("react.profiler"), Va = Symbol.for("react.provider"), Ya = Symbol.for("react.context"), Pg = Symbol.for("react.server_context"), Xa = Symbol.for("react.forward_ref"), Za = Symbol.for("react.suspense"), Qa = Symbol.for("react.suspense_list"), Ka = Symbol.for("react.memo"), Ja = Symbol.for("react.lazy"), _g = Symbol.for("react.offscreen"), Gp;
  Gp = Symbol.for("react.module.reference");
  function br(t) {
    if (typeof t == "object" && t !== null) {
      var r = t.$$typeof;
      switch (r) {
        case Hl:
          switch (t = t.type, t) {
            case Fa:
            case Wa:
            case Ua:
            case Za:
            case Qa:
              return t;
            default:
              switch (t = t && t.$$typeof, t) {
                case Pg:
                case Ya:
                case Xa:
                case Ja:
                case Ka:
                case Va:
                  return t;
                default:
                  return r;
              }
          }
        case $l:
          return r;
      }
    }
  }
  __name(br, "br");
  c(br, "v");
  Ge.ContextConsumer = Ya;
  Ge.ContextProvider = Va;
  Ge.Element = Hl;
  Ge.ForwardRef = Xa;
  Ge.Fragment = Fa;
  Ge.Lazy = Ja;
  Ge.Memo = Ka;
  Ge.Portal = $l;
  Ge.Profiler = Wa;
  Ge.StrictMode = Ua;
  Ge.Suspense = Za;
  Ge.SuspenseList = Qa;
  Ge.isAsyncMode = function() {
    return false;
  };
  Ge.isConcurrentMode = function() {
    return false;
  };
  Ge.isContextConsumer = function(t) {
    return br(t) === Ya;
  };
  Ge.isContextProvider = function(t) {
    return br(t) === Va;
  };
  Ge.isElement = function(t) {
    return typeof t == "object" && t !== null && t.$$typeof === Hl;
  };
  Ge.isForwardRef = function(t) {
    return br(t) === Xa;
  };
  Ge.isFragment = function(t) {
    return br(t) === Fa;
  };
  Ge.isLazy = function(t) {
    return br(t) === Ja;
  };
  Ge.isMemo = function(t) {
    return br(t) === Ka;
  };
  Ge.isPortal = function(t) {
    return br(t) === $l;
  };
  Ge.isProfiler = function(t) {
    return br(t) === Wa;
  };
  Ge.isStrictMode = function(t) {
    return br(t) === Ua;
  };
  Ge.isSuspense = function(t) {
    return br(t) === Za;
  };
  Ge.isSuspenseList = function(t) {
    return br(t) === Qa;
  };
  Ge.isValidElementType = function(t) {
    return typeof t == "string" || typeof t == "function" || t === Fa || t === Wa || t === Ua || t === Za || t === Qa || t === _g || typeof t == "object" && t !== null && (t.$$typeof === Ja || t.$$typeof === Ka || t.$$typeof === Va || t.$$typeof === Ya || t.$$typeof === Xa || t.$$typeof === Gp || t.getModuleId !== void 0);
  };
  Ge.typeOf = br;
});
var Bp = Tt((M0, jp) => {
  "use strict";
  jp.exports = Lp();
});
var Wp = Tt((Cn) => {
  "use strict";
  Object.defineProperty(Cn, "__esModule", { value: true });
  Cn.test = Cn.serialize = Cn.default = void 0;
  var Zn = zg(Bp()), es = $a();
  function $p(t) {
    if (typeof WeakMap != "function")
      return null;
    var r = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
    return ($p = c(function(n) {
      return n ? e : r;
    }, "_getRequireWildcardCache"))(t);
  }
  __name($p, "$p");
  c($p, "_getRequireWildcardCache");
  function zg(t, r) {
    if (!r && t && t.__esModule)
      return t;
    if (t === null || typeof t != "object" && typeof t != "function")
      return { default: t };
    var e = $p(r);
    if (e && e.has(t))
      return e.get(t);
    var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in t)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(t, s)) {
        var p = a ? Object.getOwnPropertyDescriptor(t, s) : null;
        p && (p.get || p.set) ? Object.defineProperty(n, s, p) : n[s] = t[s];
      }
    return n.default = t, e && e.set(t, n), n;
  }
  __name(zg, "zg");
  c(zg, "_interopRequireWildcard");
  var qp = c((t, r = []) => (Array.isArray(t) ? t.forEach((e) => {
    qp(e, r);
  }) : t != null && t !== false && r.push(t), r), "getChildren"), Hp = c((t) => {
    let r = t.type;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r.displayName || r.name || "Unknown";
    if (Zn.isFragment(t))
      return "React.Fragment";
    if (Zn.isSuspense(t))
      return "React.Suspense";
    if (typeof r == "object" && r !== null) {
      if (Zn.isContextProvider(t))
        return "Context.Provider";
      if (Zn.isContextConsumer(t))
        return "Context.Consumer";
      if (Zn.isForwardRef(t)) {
        if (r.displayName)
          return r.displayName;
        let e = r.render.displayName || r.render.name || "";
        return e !== "" ? `ForwardRef(${e})` : "ForwardRef";
      }
      if (Zn.isMemo(t)) {
        let e = r.displayName || r.type.displayName || r.type.name || "";
        return e !== "" ? `Memo(${e})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, "getType"), Rg = c((t) => {
    let { props: r } = t;
    return Object.keys(r).filter((e) => e !== "children" && r[e] !== void 0).sort();
  }, "getPropKeys"), Fp = c((t, r, e, n, a, s) => ++n > r.maxDepth ? (0, es.printElementAsLeaf)(Hp(t), r) : (0, es.printElement)(Hp(t), (0, es.printProps)(Rg(t), t.props, r, e + r.indent, n, a, s), (0, es.printChildren)(qp(t.props.children), r, e + r.indent, n, a, s), r, e), "serialize");
  Cn.serialize = Fp;
  var Up = c((t) => t != null && Zn.isElement(t), "test");
  Cn.test = Up;
  var Dg = { serialize: Fp, test: Up }, kg = Dg;
  Cn.default = kg;
});
var Xp = Tt((On) => {
  "use strict";
  Object.defineProperty(On, "__esModule", { value: true });
  On.test = On.serialize = On.default = void 0;
  var ts = $a(), ql = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, Ng = typeof ql == "function" && ql.for ? ql.for("react.test.json") : 245830487, Gg = c((t) => {
    let { props: r } = t;
    return r ? Object.keys(r).filter((e) => r[e] !== void 0).sort() : [];
  }, "getPropKeys"), Vp = c((t, r, e, n, a, s) => ++n > r.maxDepth ? (0, ts.printElementAsLeaf)(t.type, r) : (0, ts.printElement)(t.type, t.props ? (0, ts.printProps)(Gg(t), t.props, r, e + r.indent, n, a, s) : "", t.children ? (0, ts.printChildren)(t.children, r, e + r.indent, n, a, s) : "", r, e), "serialize");
  On.serialize = Vp;
  var Yp = c((t) => t && t.$$typeof === Ng, "test");
  On.test = Yp;
  var Lg = { serialize: Vp, test: Yp }, jg = Lg;
  On.default = jg;
});
var tn = Tt((en) => {
  "use strict";
  Object.defineProperty(en, "__esModule", { value: true });
  en.default = en.DEFAULT_OPTIONS = void 0;
  en.format = cd;
  en.plugins = void 0;
  var Bg = Qn(fp()), wo = go(), Hg = Qn(gp()), $g = Qn(Ep()), qg = Qn(_p()), Fg = Qn(Np()), Ug = Qn(Wp()), Wg = Qn(Xp());
  function Qn(t) {
    return t && t.__esModule ? t : { default: t };
  }
  __name(Qn, "Qn");
  c(Qn, "_interopRequireDefault");
  var td = Object.prototype.toString, Vg = Date.prototype.toISOString, Yg = Error.prototype.toString, Zp = RegExp.prototype.toString, Fl = c((t) => typeof t.constructor == "function" && t.constructor.name || "Object", "getConstructorName"), Xg = c((t) => typeof window != "undefined" && t === window, "isWindow"), Zg = /^Symbol\((.*)\)(.*)$/, Qg = /\n/gi, xo = /* @__PURE__ */ __name(class extends Error {
    constructor(r, e) {
      super(r), this.stack = e, this.name = this.constructor.name;
    }
  }, "xo");
  c(xo, "PrettyFormatPluginError");
  function Kg(t) {
    return t === "[object Array]" || t === "[object ArrayBuffer]" || t === "[object DataView]" || t === "[object Float32Array]" || t === "[object Float64Array]" || t === "[object Int8Array]" || t === "[object Int16Array]" || t === "[object Int32Array]" || t === "[object Uint8Array]" || t === "[object Uint8ClampedArray]" || t === "[object Uint16Array]" || t === "[object Uint32Array]";
  }
  __name(Kg, "Kg");
  c(Kg, "isToStringedArrayType");
  function Jg(t) {
    return Object.is(t, -0) ? "-0" : String(t);
  }
  __name(Jg, "Jg");
  c(Jg, "printNumber");
  function eb(t) {
    return String(`${t}n`);
  }
  __name(eb, "eb");
  c(eb, "printBigInt");
  function Qp(t, r) {
    return r ? `[Function ${t.name || "anonymous"}]` : "[Function]";
  }
  __name(Qp, "Qp");
  c(Qp, "printFunction");
  function Kp(t) {
    return String(t).replace(Zg, "Symbol($1)");
  }
  __name(Kp, "Kp");
  c(Kp, "printSymbol");
  function Jp(t) {
    return `[${Yg.call(t)}]`;
  }
  __name(Jp, "Jp");
  c(Jp, "printError");
  function rd(t, r, e, n) {
    if (t === true || t === false)
      return `${t}`;
    if (t === void 0)
      return "undefined";
    if (t === null)
      return "null";
    let a = typeof t;
    if (a === "number")
      return Jg(t);
    if (a === "bigint")
      return eb(t);
    if (a === "string")
      return n ? `"${t.replace(/"|\\/g, "\\$&")}"` : `"${t}"`;
    if (a === "function")
      return Qp(t, r);
    if (a === "symbol")
      return Kp(t);
    let s = td.call(t);
    return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? Qp(t, r) : s === "[object Symbol]" ? Kp(t) : s === "[object Date]" ? isNaN(+t) ? "Date { NaN }" : Vg.call(t) : s === "[object Error]" ? Jp(t) : s === "[object RegExp]" ? e ? Zp.call(t).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Zp.call(t) : t instanceof Error ? Jp(t) : null;
  }
  __name(rd, "rd");
  c(rd, "printBasicValue");
  function nd(t, r, e, n, a, s) {
    if (a.indexOf(t) !== -1)
      return "[Circular]";
    a = a.slice(), a.push(t);
    let p = ++n > r.maxDepth, v = r.min;
    if (r.callToJSON && !p && t.toJSON && typeof t.toJSON == "function" && !s)
      return Mn(t.toJSON(), r, e, n, a, true);
    let m = td.call(t);
    return m === "[object Arguments]" ? p ? "[Arguments]" : `${v ? "" : "Arguments "}[${(0, wo.printListItems)(t, r, e, n, a, Mn)}]` : Kg(m) ? p ? `[${t.constructor.name}]` : `${v || !r.printBasicPrototype && t.constructor.name === "Array" ? "" : `${t.constructor.name} `}[${(0, wo.printListItems)(t, r, e, n, a, Mn)}]` : m === "[object Map]" ? p ? "[Map]" : `Map {${(0, wo.printIteratorEntries)(t.entries(), r, e, n, a, Mn, " => ")}}` : m === "[object Set]" ? p ? "[Set]" : `Set {${(0, wo.printIteratorValues)(t.values(), r, e, n, a, Mn)}}` : p || Xg(t) ? `[${Fl(t)}]` : `${v || !r.printBasicPrototype && Fl(t) === "Object" ? "" : `${Fl(t)} `}{${(0, wo.printObjectProperties)(t, r, e, n, a, Mn)}}`;
  }
  __name(nd, "nd");
  c(nd, "printComplexValue");
  function tb(t) {
    return t.serialize != null;
  }
  __name(tb, "tb");
  c(tb, "isNewPlugin");
  function id(t, r, e, n, a, s) {
    let p;
    try {
      p = tb(t) ? t.serialize(r, e, n, a, s, Mn) : t.print(r, (v) => Mn(v, e, n, a, s), (v) => {
        let m = n + e.indent;
        return m + v.replace(Qg, `
${m}`);
      }, { edgeSpacing: e.spacingOuter, min: e.min, spacing: e.spacingInner }, e.colors);
    } catch (v) {
      throw new xo(v.message, v.stack);
    }
    if (typeof p != "string")
      throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);
    return p;
  }
  __name(id, "id");
  c(id, "printPlugin");
  function od(t, r) {
    for (let e = 0; e < t.length; e++)
      try {
        if (t[e].test(r))
          return t[e];
      } catch (n) {
        throw new xo(n.message, n.stack);
      }
    return null;
  }
  __name(od, "od");
  c(od, "findPlugin");
  function Mn(t, r, e, n, a, s) {
    let p = od(r.plugins, t);
    if (p !== null)
      return id(p, t, r, e, n, a);
    let v = rd(t, r.printFunctionName, r.escapeRegex, r.escapeString);
    return v !== null ? v : nd(t, r, e, n, a, s);
  }
  __name(Mn, "Mn");
  c(Mn, "printer");
  var Ul = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, ad = Object.keys(Ul), rb = c((t) => t, "toOptionsSubtype"), yr = rb({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: Ul });
  en.DEFAULT_OPTIONS = yr;
  function nb(t) {
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
  __name(nb, "nb");
  c(nb, "validateOptions");
  var ib = c((t) => ad.reduce((r, e) => {
    let n = t.theme && t.theme[e] !== void 0 ? t.theme[e] : Ul[e], a = n && Bg.default[n];
    if (a && typeof a.close == "string" && typeof a.open == "string")
      r[e] = a;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${e}" whose value "${n}" is undefined in ansi-styles.`);
    return r;
  }, /* @__PURE__ */ Object.create(null)), "getColorsHighlight"), ob = c(() => ad.reduce((t, r) => (t[r] = { close: "", open: "" }, t), /* @__PURE__ */ Object.create(null)), "getColorsEmpty"), sd = c((t) => {
    var r;
    return (r = t == null ? void 0 : t.printFunctionName) != null ? r : yr.printFunctionName;
  }, "getPrintFunctionName"), ld = c((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeRegex) != null ? r : yr.escapeRegex;
  }, "getEscapeRegex"), ud = c((t) => {
    var r;
    return (r = t == null ? void 0 : t.escapeString) != null ? r : yr.escapeString;
  }, "getEscapeString"), ed = c((t) => {
    var r, e, n, a, s, p, v;
    return { callToJSON: (r = t == null ? void 0 : t.callToJSON) != null ? r : yr.callToJSON, colors: t != null && t.highlight ? ib(t) : ob(), compareKeys: typeof (t == null ? void 0 : t.compareKeys) == "function" || (t == null ? void 0 : t.compareKeys) === null ? t.compareKeys : yr.compareKeys, escapeRegex: ld(t), escapeString: ud(t), indent: t != null && t.min ? "" : ab((e = t == null ? void 0 : t.indent) != null ? e : yr.indent), maxDepth: (n = t == null ? void 0 : t.maxDepth) != null ? n : yr.maxDepth, maxWidth: (a = t == null ? void 0 : t.maxWidth) != null ? a : yr.maxWidth, min: (s = t == null ? void 0 : t.min) != null ? s : yr.min, plugins: (p = t == null ? void 0 : t.plugins) != null ? p : yr.plugins, printBasicPrototype: (v = t == null ? void 0 : t.printBasicPrototype) != null ? v : true, printFunctionName: sd(t), spacingInner: t != null && t.min ? " " : `
`, spacingOuter: t != null && t.min ? "" : `
` };
  }, "getConfig");
  function ab(t) {
    return new Array(t + 1).join(" ");
  }
  __name(ab, "ab");
  c(ab, "createIndent");
  function cd(t, r) {
    if (r && (nb(r), r.plugins)) {
      let n = od(r.plugins, t);
      if (n !== null)
        return id(n, t, ed(r), "", 0, []);
    }
    let e = rd(t, sd(r), ld(r), ud(r));
    return e !== null ? e : nd(t, ed(r), "", 0, []);
  }
  __name(cd, "cd");
  c(cd, "format");
  var sb = { AsymmetricMatcher: Hg.default, DOMCollection: $g.default, DOMElement: qg.default, Immutable: Fg.default, ReactElement: Ug.default, ReactTestComponent: Wg.default };
  en.plugins = sb;
  var lb = cd;
  en.default = lb;
});
var jo = Tt((cf, Au) => {
  (function(t) {
    typeof cf == "object" && typeof Au != "undefined" ? Au.exports = t() : typeof define == "function" && define.amd ? define([], t) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = t();
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
    var s = {};
    function p(i) {
      return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, p(i);
    }
    __name(p, "p");
    c(p, "a"), Object.defineProperty(s, "__esModule", { value: true }), s.default = void 0;
    var v = c(function(i) {
      return !!i && p(i) === "object";
    }, "s"), m = c(function(i) {
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
    s.default = d;
    var f = {};
    function y(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.prepared.axis;
        l === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : l === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(y, "y");
    c(y, "f");
    function w(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "drag") {
        var u = l.prepared.axis;
        if (u === "x" || u === "y") {
          var h = u === "x" ? "y" : "x";
          o.page[h] = l.coords.start.page[h], o.client[h] = l.coords.start.client[h], o.delta[h] = 0;
        }
      }
    }
    __name(w, "w");
    c(w, "d"), Object.defineProperty(f, "__esModule", { value: true }), f.default = void 0;
    var S = { id: "actions/drag", install: function(i) {
      var o = i.actions, l = i.Interactable, u = i.defaults;
      l.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", u.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": y, "interactions:action-resume": y, "interactions:action-move": w, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, u = i.buttons, h = l.options.drag;
      if (h && h.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || u & l.options.drag.mouseButtons))
        return i.action = { name: "drag", axis: h.lockAxis === "start" ? h.startAxis : h.lockAxis }, false;
    } }, draggable: function(i) {
      return s.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : s.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: y, move: w, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, T = S;
    f.default = T;
    var C = {};
    Object.defineProperty(C, "__esModule", { value: true }), C.default = void 0;
    var _ = { init: function(i) {
      var o = i;
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || k, _.SVGElement = o.SVGElement || k, _.SVGSVGElement = o.SVGSVGElement || k, _.SVGElementInstance = o.SVGElementInstance || k, _.Element = o.Element || k, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || k, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function k() {
    }
    __name(k, "k");
    c(k, "y");
    var j = _;
    C.default = j;
    var $ = {};
    Object.defineProperty($, "__esModule", { value: true }), $.default = void 0;
    var A = { init: function(i) {
      var o = C.default.Element, l = i.navigator || {};
      A.supportsTouch = "ontouchstart" in i || s.default.func(i.DocumentTouch) && C.default.document instanceof i.DocumentTouch, A.supportsPointerEvent = l.pointerEnabled !== false && !!C.default.PointerEvent, A.isIOS = /iP(hone|od|ad)/.test(l.platform), A.isIOS7 = /iP(hone|od|ad)/.test(l.platform) && /OS 7[^\d]/.test(l.appVersion), A.isIe9 = /MSIE 9/.test(l.userAgent), A.isOperaMobile = l.appName === "Opera" && A.supportsTouch && /Presto/.test(l.userAgent), A.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", A.pEventTypes = A.supportsPointerEvent ? C.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, A.wheelEvent = C.default.document && "onmousewheel" in C.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, ee = A;
    $.default = ee;
    var z = {};
    function B(i) {
      var o = i.parentNode;
      if (s.default.docFrag(o)) {
        for (; (o = o.host) && s.default.docFrag(o); )
          ;
        return o;
      }
      return o;
    }
    __name(B, "B");
    c(B, "P");
    function J(i, o) {
      return r.window !== r.realWindow && (o = o.replace(/\/deep\//g, " ")), i[$.default.prefixedMatchesSelector](o);
    }
    __name(J, "J");
    c(J, "O"), Object.defineProperty(z, "__esModule", { value: true }), z.closest = function(i, o) {
      for (; s.default.element(i); ) {
        if (J(i, o))
          return i;
        i = B(i);
      }
      return null;
    }, z.getActualElement = function(i) {
      return i.correspondingUseElement || i;
    }, z.getElementClientRect = ie, z.getElementRect = function(i) {
      var o = ie(i);
      if (!$.default.isIOS7 && o) {
        var l = X(r.getWindow(i));
        o.left += l.x, o.right += l.x, o.top += l.y, o.bottom += l.y;
      }
      return o;
    }, z.getPath = function(i) {
      for (var o = []; i; )
        o.push(i), i = B(i);
      return o;
    }, z.getScrollXY = X, z.indexOfDeepestElement = function(i) {
      for (var o, l = [], u = 0; u < i.length; u++) {
        var h = i[u], g = i[o];
        if (h && u !== o)
          if (g) {
            var E = te(h), b = te(g);
            if (E !== h.ownerDocument)
              if (b !== h.ownerDocument)
                if (E !== b) {
                  l = l.length ? l : le(g);
                  var x = void 0;
                  if (g instanceof C.default.HTMLElement && h instanceof C.default.SVGElement && !(h instanceof C.default.SVGSVGElement)) {
                    if (h === b)
                      continue;
                    x = h.ownerSVGElement;
                  } else
                    x = h;
                  for (var O = le(x, g.ownerDocument), I = 0; O[I] && O[I] === l[I]; )
                    I++;
                  var P = [O[I - 1], O[I], l[I]];
                  if (P[0])
                    for (var N = P[0].lastChild; N; ) {
                      if (N === P[1]) {
                        o = u, l = O;
                        break;
                      }
                      if (N === P[2])
                        break;
                      N = N.previousSibling;
                    }
                } else
                  L = h, R = g, (parseInt(r.getWindow(L).getComputedStyle(L).zIndex, 10) || 0) >= (parseInt(r.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (o = u);
              else
                o = u;
          } else
            o = u;
      }
      var L, R;
      return o;
    }, z.matchesSelector = J, z.matchesUpTo = function(i, o, l) {
      for (; s.default.element(i); ) {
        if (J(i, o))
          return true;
        if ((i = B(i)) === l)
          return J(i, o);
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
    }, z.parentNode = B, z.trySelector = function(i) {
      return !!s.default.string(i) && (C.default.document.querySelector(i), true);
    };
    var te = c(function(i) {
      return i.parentNode || i.host;
    }, "E");
    function le(i, o) {
      for (var l, u = [], h = i; (l = te(h)) && h !== o && l !== h.ownerDocument; )
        u.unshift(h), h = l;
      return u;
    }
    __name(le, "le");
    c(le, "S");
    function X(i) {
      return { x: (i = i || r.window).scrollX || i.document.documentElement.scrollLeft, y: i.scrollY || i.document.documentElement.scrollTop };
    }
    __name(X, "X");
    c(X, "T");
    function ie(i) {
      var o = i instanceof C.default.SVGElement ? i.getBoundingClientRect() : i.getClientRects()[0];
      return o && { left: o.left, right: o.right, top: o.top, bottom: o.bottom, width: o.width || o.right - o.left, height: o.height || o.bottom - o.top };
    }
    __name(ie, "ie");
    c(ie, "j");
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = function(i, o) {
      for (var l in o)
        i[l] = o[l];
      return i;
    };
    var ue = {};
    function Ve(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Ve, "Ve");
    c(Ve, "I");
    function Fe(i, o, l) {
      return i === "parent" ? (0, z.parentNode)(l) : i === "self" ? o.getRect(l) : (0, z.closest)(l, i);
    }
    __name(Fe, "Fe");
    c(Fe, "D"), Object.defineProperty(ue, "__esModule", { value: true }), ue.addEdges = function(i, o, l) {
      i.left && (o.left += l.x), i.right && (o.right += l.x), i.top && (o.top += l.y), i.bottom && (o.bottom += l.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ue.getStringOptionResult = Fe, ue.rectToXY = function(i) {
      return i && { x: "x" in i ? i.x : i.left, y: "y" in i ? i.y : i.top };
    }, ue.resolveRectLike = function(i, o, l, u) {
      var h, g = i;
      return s.default.string(g) ? g = Fe(g, o, l) : s.default.func(g) && (g = g.apply(void 0, function(E) {
        if (Array.isArray(E))
          return Ve(E);
      }(h = u) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(h) || function(E, b) {
        if (E) {
          if (typeof E == "string")
            return Ve(E, b);
          var x = Object.prototype.toString.call(E).slice(8, -1);
          return x === "Object" && E.constructor && (x = E.constructor.name), x === "Map" || x === "Set" ? Array.from(E) : x === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? Ve(E, b) : void 0;
        }
      }(h) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), s.default.element(g) && (g = (0, z.getElementRect)(g)), g;
    }, ue.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, W.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, ue.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, W.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    };
    var Ne = {};
    Object.defineProperty(Ne, "__esModule", { value: true }), Ne.default = function(i, o, l) {
      var u = i.options[l], h = u && u.origin || i.options.origin, g = (0, ue.resolveRectLike)(h, i, o, [i && o]);
      return (0, ue.rectToXY)(g) || { x: 0, y: 0 };
    };
    var Be = {};
    function ot(i) {
      return i.trim().split(/ +/);
    }
    __name(ot, "ot");
    c(ot, "C"), Object.defineProperty(Be, "__esModule", { value: true }), Be.default = c(/* @__PURE__ */ __name(function i(o, l, u) {
      if (u = u || {}, s.default.string(o) && o.search(" ") !== -1 && (o = ot(o)), s.default.array(o))
        return o.reduce(function(x, O) {
          return (0, W.default)(x, i(O, l, u));
        }, u);
      if (s.default.object(o) && (l = o, o = ""), s.default.func(l))
        u[o] = u[o] || [], u[o].push(l);
      else if (s.default.array(l))
        for (var h = 0; h < l.length; h++) {
          var g;
          g = l[h], i(o, g, u);
        }
      else if (s.default.object(l))
        for (var E in l) {
          var b = ot(E).map(function(x) {
            return "".concat(o).concat(x);
          });
          i(b, l[E], u);
        }
      return u;
    }, "i"), "t");
    var Ke = {};
    Object.defineProperty(Ke, "__esModule", { value: true }), Ke.default = void 0, Ke.default = function(i, o) {
      return Math.sqrt(i * i + o * o);
    };
    var Xe = {};
    Object.defineProperty(Xe, "__esModule", { value: true }), Xe.default = function(i, o) {
      i.__set || (i.__set = {});
      var l = c(function(h) {
        typeof i[h] != "function" && h !== "__set" && Object.defineProperty(i, h, { get: function() {
          return h in i.__set ? i.__set[h] : i.__set[h] = o[h];
        }, set: function(g) {
          i.__set[h] = g;
        }, configurable: true });
      }, "n");
      for (var u in o)
        l(u);
      return i;
    };
    var K = {};
    function ir(i) {
      return i instanceof C.default.Event || i instanceof C.default.Touch;
    }
    __name(ir, "ir");
    c(ir, "B");
    function Pe(i, o, l) {
      return i = i || "page", (l = l || {}).x = o[i + "X"], l.y = o[i + "Y"], l;
    }
    __name(Pe, "Pe");
    c(Pe, "Y");
    function et(i, o) {
      return o = o || { x: 0, y: 0 }, $.default.isOperaMobile && ir(i) ? (Pe("screen", i, o), o.x += window.scrollX, o.y += window.scrollY) : Pe("page", i, o), o;
    }
    __name(et, "et");
    c(et, "W");
    function fr(i, o) {
      return o = o || {}, $.default.isOperaMobile && ir(i) ? Pe("screen", i, o) : Pe("client", i, o), o;
    }
    __name(fr, "fr");
    c(fr, "L");
    function Mr(i) {
      var o = [];
      return s.default.array(i) ? (o[0] = i[0], o[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o[0] = i.touches[0], o[1] = i.changedTouches[0]) : i.touches.length === 0 && (o[0] = i.changedTouches[0], o[1] = i.changedTouches[1]) : (o[0] = i.touches[0], o[1] = i.touches[1]), o;
    }
    __name(Mr, "Mr");
    c(Mr, "U");
    function hr(i) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, l = 0; l < i.length; l++) {
        var u = i[l];
        for (var h in o)
          o[h] += u[h];
      }
      for (var g in o)
        o[g] /= i.length;
      return o;
    }
    __name(hr, "hr");
    c(hr, "V"), Object.defineProperty(K, "__esModule", { value: true }), K.coordsToEvent = function(i) {
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
    }, K.getClientXY = fr, K.getEventTargets = function(i) {
      var o = s.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [z.getActualElement(o ? o[0] : i.target), z.getActualElement(i.currentTarget)];
    }, K.getPageXY = et, K.getPointerId = function(i) {
      return s.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, K.getPointerType = function(i) {
      return s.default.string(i.pointerType) ? i.pointerType : s.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof C.default.Touch ? "touch" : "mouse";
    }, K.getTouchPair = Mr, K.getXY = Pe, K.isNativePointer = ir, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.pointerAverage = hr, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return Xe.default;
    } }), K.setCoordDeltas = function(i, o, l) {
      i.page.x = l.page.x - o.page.x, i.page.y = l.page.y - o.page.y, i.client.x = l.client.x - o.client.x, i.client.y = l.client.y - o.client.y, i.timeStamp = l.timeStamp - o.timeStamp;
    }, K.setCoordVelocity = function(i, o) {
      var l = Math.max(o.timeStamp / 1e3, 1e-3);
      i.page.x = o.page.x / l, i.page.y = o.page.y / l, i.client.x = o.client.x / l, i.client.y = o.client.y / l, i.timeStamp = l;
    }, K.setCoords = function(i, o, l) {
      var u = o.length > 1 ? hr(o) : o[0];
      et(u, i.page), fr(u, i.client), i.timeStamp = l;
    }, K.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, K.touchAngle = function(i, o) {
      var l = o + "X", u = o + "Y", h = Mr(i), g = h[1][l] - h[0][l], E = h[1][u] - h[0][u];
      return 180 * Math.atan2(E, g) / Math.PI;
    }, K.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o = Mr(i), l = Math.min(o[0].pageX, o[1].pageX), u = Math.min(o[0].pageY, o[1].pageY), h = Math.max(o[0].pageX, o[1].pageX), g = Math.max(o[0].pageY, o[1].pageY);
      return { x: l, y: u, left: l, top: u, right: h, bottom: g, width: h - l, height: g - u };
    }, K.touchDistance = function(i, o) {
      var l = o + "X", u = o + "Y", h = Mr(i), g = h[0][l] - h[1][l], E = h[0][u] - h[1][u];
      return (0, Ke.default)(g, E);
    };
    var or = {};
    function kr(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(kr, "kr");
    c(kr, "q");
    function Vr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Vr, "Vr");
    c(Vr, "G"), Object.defineProperty(or, "__esModule", { value: true }), or.BaseEvent = void 0;
    var Gn = function() {
      function i(u) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Vr(this, "immediatePropagationStopped", false), Vr(this, "propagationStopped", false), this._interaction = u;
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && kr(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    or.BaseEvent = Gn, Object.defineProperty(Gn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Ae = {};
    Object.defineProperty(Ae, "__esModule", { value: true }), Ae.remove = Ae.merge = Ae.from = Ae.findIndex = Ae.find = Ae.contains = void 0, Ae.contains = function(i, o) {
      return i.indexOf(o) !== -1;
    }, Ae.remove = function(i, o) {
      return i.splice(i.indexOf(o), 1);
    };
    var Ln = c(function(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        i.push(u);
      }
      return i;
    }, "K");
    Ae.merge = Ln, Ae.from = function(i) {
      return Ln([], i);
    };
    var jn = c(function(i, o) {
      for (var l = 0; l < i.length; l++)
        if (o(i[l], l, i))
          return l;
      return -1;
    }, "Z");
    Ae.findIndex = jn, Ae.find = function(i, o) {
      return i[jn(i, o)];
    };
    var kt = {};
    function Yr(i) {
      return Yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Yr(i);
    }
    __name(Yr, "Yr");
    c(Yr, "Q");
    function fi(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(fi, "fi");
    c(fi, "tt");
    function mn(i, o) {
      return mn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, mn(i, o);
    }
    __name(mn, "mn");
    c(mn, "et");
    function Ir(i, o) {
      if (o && (Yr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return It(i);
    }
    __name(Ir, "Ir");
    c(Ir, "nt");
    function It(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(It, "It");
    c(It, "rt");
    function Nr(i) {
      return Nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Nr(i);
    }
    __name(Nr, "Nr");
    c(Nr, "ot");
    function qt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(qt, "qt");
    c(qt, "it"), Object.defineProperty(kt, "__esModule", { value: true }), kt.DropEvent = void 0;
    var Bn = function(i) {
      (function(b, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(x && x.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), x && mn(b, x);
      })(E, i);
      var o, l, u, h, g = (u = E, h = function() {
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
        var b, x = Nr(u);
        if (h) {
          var O = Nr(this).constructor;
          b = Reflect.construct(x, arguments, O);
        } else
          b = x.apply(this, arguments);
        return Ir(this, b);
      });
      function E(b, x, O) {
        var I;
        (function(R, q) {
          if (!(R instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), qt(It(I = g.call(this, x._interaction)), "dropzone", void 0), qt(It(I), "dragEvent", void 0), qt(It(I), "relatedTarget", void 0), qt(It(I), "draggable", void 0), qt(It(I), "propagationStopped", false), qt(It(I), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? b.prev : b.cur, N = P.element, L = P.dropzone;
        return I.type = O, I.target = N, I.currentTarget = N, I.dropzone = L, I.dragEvent = x, I.relatedTarget = x.target, I.draggable = x.interactable, I.timeStamp = x.timeStamp, I;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (l = [{ key: "reject", value: function() {
        var b = this, x = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && x.cur.dropzone === this.dropzone && x.cur.element === this.target)
          if (x.prev.dropzone = this.dropzone, x.prev.element = this.target, x.rejected = true, x.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = x.activeDrops, I = Ae.findIndex(O, function(N) {
              var L = N.dropzone, R = N.element;
              return L === b.dropzone && R === b.target;
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
      } }]) && fi(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    kt.DropEvent = Bn;
    var Xr = {};
    function Hn(i, o) {
      for (var l = 0; l < i.slice().length; l++) {
        var u = i.slice()[l], h = u.dropzone, g = u.element;
        o.dropzone = h, o.target = g, h.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(Hn, "Hn");
    c(Hn, "lt");
    function vn(i, o) {
      for (var l = function(g, E) {
        for (var b = g.interactables, x = [], O = 0; O < b.list.length; O++) {
          var I = b.list[O];
          if (I.options.drop.enabled) {
            var P = I.options.drop.accept;
            if (!(s.default.element(P) && P !== E || s.default.string(P) && !z.matchesSelector(E, P) || s.default.func(P) && !P({ dropzone: I, draggableElement: E })))
              for (var N = s.default.string(I.target) ? I._context.querySelectorAll(I.target) : s.default.array(I.target) ? I.target : [I.target], L = 0; L < N.length; L++) {
                var R = N[L];
                R !== E && x.push({ dropzone: I, element: R, rect: I.getRect(R) });
              }
          }
        }
        return x;
      }(i, o), u = 0; u < l.length; u++) {
        var h = l[u];
        h.rect = h.dropzone.getRect(h.element);
      }
      return l;
    }
    __name(vn, "vn");
    c(vn, "ut");
    function $n(i, o, l) {
      for (var u = i.dropState, h = i.interactable, g = i.element, E = [], b = 0; b < u.activeDrops.length; b++) {
        var x = u.activeDrops[b], O = x.dropzone, I = x.element, P = x.rect;
        E.push(O.dropCheck(o, l, h, g, I, P) ? I : null);
      }
      var N = z.indexOfDeepestElement(E);
      return u.activeDrops[N] || null;
    }
    __name($n, "$n");
    c($n, "ct");
    function Qi(i, o, l) {
      var u = i.dropState, h = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return l.type === "dragstart" && (h.activate = new kt.DropEvent(u, l, "dropactivate"), h.activate.target = null, h.activate.dropzone = null), l.type === "dragend" && (h.deactivate = new kt.DropEvent(u, l, "dropdeactivate"), h.deactivate.target = null, h.deactivate.dropzone = null), u.rejected || (u.cur.element !== u.prev.element && (u.prev.dropzone && (h.leave = new kt.DropEvent(u, l, "dragleave"), l.dragLeave = h.leave.target = u.prev.element, l.prevDropzone = h.leave.dropzone = u.prev.dropzone), u.cur.dropzone && (h.enter = new kt.DropEvent(u, l, "dragenter"), l.dragEnter = u.cur.element, l.dropzone = u.cur.dropzone)), l.type === "dragend" && u.cur.dropzone && (h.drop = new kt.DropEvent(u, l, "drop"), l.dropzone = u.cur.dropzone, l.relatedTarget = u.cur.element), l.type === "dragmove" && u.cur.dropzone && (h.move = new kt.DropEvent(u, l, "dropmove"), h.move.dragmove = l, l.dropzone = u.cur.dropzone)), h;
    }
    __name(Qi, "Qi");
    c(Qi, "ft");
    function Ki(i, o) {
      var l = i.dropState, u = l.activeDrops, h = l.cur, g = l.prev;
      o.leave && g.dropzone.fire(o.leave), o.enter && h.dropzone.fire(o.enter), o.move && h.dropzone.fire(o.move), o.drop && h.dropzone.fire(o.drop), o.deactivate && Hn(u, o.deactivate), l.prev.dropzone = h.dropzone, l.prev.element = h.element;
    }
    __name(Ki, "Ki");
    c(Ki, "dt");
    function aa(i, o) {
      var l = i.interaction, u = i.iEvent, h = i.event;
      if (u.type === "dragmove" || u.type === "dragend") {
        var g = l.dropState;
        o.dynamicDrop && (g.activeDrops = vn(o, l.element));
        var E = u, b = $n(l, E, h);
        g.rejected = g.rejected && !!b && b.dropzone === g.cur.dropzone && b.element === g.cur.element, g.cur.dropzone = b && b.dropzone, g.cur.element = b && b.element, g.events = Qi(l, 0, E);
      }
    }
    __name(aa, "aa");
    c(aa, "pt"), Object.defineProperty(Xr, "__esModule", { value: true }), Xr.default = void 0;
    var sa = { id: "actions/drop", install: function(i) {
      var o = i.actions, l = i.interactStatic, u = i.Interactable, h = i.defaults;
      i.usePlugin(f.default), u.prototype.dropzone = function(g) {
        return function(E, b) {
          if (s.default.object(b)) {
            if (E.options.drop.enabled = b.enabled !== false, b.listeners) {
              var x = (0, Be.default)(b.listeners), O = Object.keys(x).reduce(function(I, P) {
                return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = x[P], I;
              }, {});
              E.off(E.options.drop.listeners), E.on(O), E.options.drop.listeners = O;
            }
            return s.default.func(b.ondrop) && E.on("drop", b.ondrop), s.default.func(b.ondropactivate) && E.on("dropactivate", b.ondropactivate), s.default.func(b.ondropdeactivate) && E.on("dropdeactivate", b.ondropdeactivate), s.default.func(b.ondragenter) && E.on("dragenter", b.ondragenter), s.default.func(b.ondragleave) && E.on("dragleave", b.ondragleave), s.default.func(b.ondropmove) && E.on("dropmove", b.ondropmove), /^(pointer|center)$/.test(b.overlap) ? E.options.drop.overlap = b.overlap : s.default.number(b.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, b.overlap), 0)), "accept" in b && (E.options.drop.accept = b.accept), "checker" in b && (E.options.drop.checker = b.checker), E;
          }
          return s.default.bool(b) ? (E.options.drop.enabled = b, E) : E.options.drop;
        }(this, g);
      }, u.prototype.dropCheck = function(g, E, b, x, O, I) {
        return function(P, N, L, R, q, Q, U) {
          var ne = false;
          if (!(U = U || P.getRect(Q)))
            return !!P.options.drop.checker && P.options.drop.checker(N, L, ne, P, Q, R, q);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var ye = (0, Ne.default)(R, q, "drag"), ze = K.getPageXY(N);
            ze.x += ye.x, ze.y += ye.y;
            var Ue = ze.x > U.left && ze.x < U.right, Te = ze.y > U.top && ze.y < U.bottom;
            ne = Ue && Te;
          }
          var $e = R.getRect(q);
          if ($e && oe === "center") {
            var gr = $e.left + $e.width / 2, Jr = $e.top + $e.height / 2;
            ne = gr >= U.left && gr <= U.right && Jr >= U.top && Jr <= U.bottom;
          }
          return $e && s.default.number(oe) && (ne = Math.max(0, Math.min(U.right, $e.right) - Math.max(U.left, $e.left)) * Math.max(0, Math.min(U.bottom, $e.bottom) - Math.max(U.top, $e.top)) / ($e.width * $e.height) >= oe), P.options.drop.checker && (ne = P.options.drop.checker(N, L, ne, P, Q, R, q)), ne;
        }(this, g, E, b, x, O, I);
      }, l.dynamicDrop = function(g) {
        return s.default.bool(g) ? (i.dynamicDrop = g, l) : i.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", i.dynamicDrop = false, h.actions.drop = sa.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o = i.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o) {
      var l = i.interaction, u = (i.event, i.iEvent);
      if (l.prepared.name === "drag") {
        var h = l.dropState;
        h.activeDrops = null, h.events = null, h.activeDrops = vn(o, l.element), h.events = Qi(l, 0, u), h.events.activate && (Hn(h.activeDrops, h.events.activate), o.fire("actions/drop:start", { interaction: l, dragEvent: u }));
      }
    }, "interactions:action-move": aa, "interactions:after-action-move": function(i, o) {
      var l = i.interaction, u = i.iEvent;
      l.prepared.name === "drag" && (Ki(l, l.dropState.events), o.fire("actions/drop:move", { interaction: l, dragEvent: u }), l.dropState.events = {});
    }, "interactions:action-end": function(i, o) {
      if (i.interaction.prepared.name === "drag") {
        var l = i.interaction, u = i.iEvent;
        aa(i, o), Ki(l, l.dropState.events), o.fire("actions/drop:end", { interaction: l, dragEvent: u });
      }
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.dropState;
        l && (l.activeDrops = null, l.events = null, l.cur.dropzone = null, l.cur.element = null, l.prev.dropzone = null, l.prev.element = null, l.rejected = false);
      }
    } }, getActiveDrops: vn, getDrop: $n, getDropEvents: Qi, fireDropEvents: Ki, defaults: { enabled: false, accept: null, overlap: "pointer" } }, nl = sa;
    Xr.default = nl;
    var G = {};
    function re(i) {
      var o = i.interaction, l = i.iEvent, u = i.phase;
      if (o.prepared.name === "gesture") {
        var h = o.pointers.map(function(O) {
          return O.pointer;
        }), g = u === "start", E = u === "end", b = o.interactable.options.deltaSource;
        if (l.touches = [h[0], h[1]], g)
          l.distance = K.touchDistance(h, b), l.box = K.touchBBox(h), l.scale = 1, l.ds = 0, l.angle = K.touchAngle(h, b), l.da = 0, o.gesture.startDistance = l.distance, o.gesture.startAngle = l.angle;
        else if (E) {
          var x = o.prevEvent;
          l.distance = x.distance, l.box = x.box, l.scale = x.scale, l.ds = 0, l.angle = x.angle, l.da = 0;
        } else
          l.distance = K.touchDistance(h, b), l.box = K.touchBBox(h), l.scale = l.distance / o.gesture.startDistance, l.angle = K.touchAngle(h, b), l.ds = l.scale - o.gesture.scale, l.da = l.angle - o.gesture.angle;
        o.gesture.distance = l.distance, o.gesture.angle = l.angle, s.default.number(l.scale) && l.scale !== 1 / 0 && !isNaN(l.scale) && (o.gesture.scale = l.scale);
      }
    }
    __name(re, "re");
    c(re, "yt"), Object.defineProperty(G, "__esModule", { value: true }), G.default = void 0;
    var ae = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var o = i.actions, l = i.Interactable, u = i.defaults;
      l.prototype.gesturable = function(h) {
        return s.default.object(h) ? (this.options.gesture.enabled = h.enabled !== false, this.setPerAction("gesture", h), this.setOnEvents("gesture", h), this) : s.default.bool(h) ? (this.options.gesture.enabled = h, this) : this.options.gesture;
      }, o.map.gesture = ae, o.methodDict.gesture = "gesturable", u.actions.gesture = ae.defaults;
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
    } }, _e = ae;
    G.default = _e;
    var Ee = {};
    function xt(i, o, l, u, h, g, E) {
      if (!o)
        return false;
      if (o === true) {
        var b = s.default.number(g.width) ? g.width : g.right - g.left, x = s.default.number(g.height) ? g.height : g.bottom - g.top;
        if (E = Math.min(E, Math.abs((i === "left" || i === "right" ? b : x) / 2)), b < 0 && (i === "left" ? i = "right" : i === "right" && (i = "left")), x < 0 && (i === "top" ? i = "bottom" : i === "bottom" && (i = "top")), i === "left") {
          var O = b >= 0 ? g.left : g.right;
          return l.x < O + E;
        }
        if (i === "top") {
          var I = x >= 0 ? g.top : g.bottom;
          return l.y < I + E;
        }
        if (i === "right")
          return l.x > (b >= 0 ? g.right : g.left) - E;
        if (i === "bottom")
          return l.y > (x >= 0 ? g.bottom : g.top) - E;
      }
      return !!s.default.element(u) && (s.default.element(o) ? o === u : z.matchesUpTo(u, o, h));
    }
    __name(xt, "xt");
    c(xt, "wt");
    function Nt(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.resizeAxes) {
        var u = o;
        l.interactable.options.resize.square ? (l.resizeAxes === "y" ? u.delta.x = u.delta.y : u.delta.y = u.delta.x, u.axes = "xy") : (u.axes = l.resizeAxes, l.resizeAxes === "x" ? u.delta.y = 0 : l.resizeAxes === "y" && (u.delta.x = 0));
      }
    }
    __name(Nt, "Nt");
    c(Nt, "_t"), Object.defineProperty(Ee, "__esModule", { value: true }), Ee.default = void 0;
    var At = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o = i.actions, l = i.browser, u = i.Interactable, h = i.defaults;
      At.cursors = function(g) {
        return g.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(l), At.defaultMargin = l.supportsTouch || l.supportsPointerEvent ? 20 : 10, u.prototype.resizable = function(g) {
        return function(E, b, x) {
          return s.default.object(b) ? (E.options.resize.enabled = b.enabled !== false, E.setPerAction("resize", b), E.setOnEvents("resize", b), s.default.string(b.axis) && /^x$|^y$|^xy$/.test(b.axis) ? E.options.resize.axis = b.axis : b.axis === null && (E.options.resize.axis = x.defaults.actions.resize.axis), s.default.bool(b.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = b.preserveAspectRatio : s.default.bool(b.square) && (E.options.resize.square = b.square), E) : s.default.bool(b) ? (E.options.resize.enabled = b, E) : E.options.resize;
        }(this, g, i);
      }, o.map.resize = At, o.methodDict.resize = "resizable", h.actions.resize = At.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o) {
        var l = o.iEvent, u = o.interaction;
        if (u.prepared.name === "resize" && u.prepared.edges) {
          var h = l, g = u.rect;
          u._rects = { start: (0, W.default)({}, g), corrected: (0, W.default)({}, g), previous: (0, W.default)({}, g), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, h.edges = u.prepared.edges, h.rect = u._rects.corrected, h.deltaRect = u._rects.delta;
        }
      })(i), Nt(i);
    }, "interactions:action-move": function(i) {
      (function(o) {
        var l = o.iEvent, u = o.interaction;
        if (u.prepared.name === "resize" && u.prepared.edges) {
          var h = l, g = u.interactable.options.resize.invert, E = g === "reposition" || g === "negate", b = u.rect, x = u._rects, O = x.start, I = x.corrected, P = x.delta, N = x.previous;
          if ((0, W.default)(N, I), E) {
            if ((0, W.default)(I, b), g === "reposition") {
              if (I.top > I.bottom) {
                var L = I.top;
                I.top = I.bottom, I.bottom = L;
              }
              if (I.left > I.right) {
                var R = I.left;
                I.left = I.right, I.right = R;
              }
            }
          } else
            I.top = Math.min(b.top, O.bottom), I.bottom = Math.max(b.bottom, O.top), I.left = Math.min(b.left, O.right), I.right = Math.max(b.right, O.left);
          for (var q in I.width = I.right - I.left, I.height = I.bottom - I.top, I)
            P[q] = I[q] - N[q];
          h.edges = u.prepared.edges, h.rect = I, h.deltaRect = P;
        }
      })(i), Nt(i);
    }, "interactions:action-end": function(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.prepared.edges) {
        var u = o;
        u.edges = l.prepared.edges, u.rect = l._rects.corrected, u.deltaRect = l._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, u = i.element, h = i.rect, g = i.buttons;
      if (h) {
        var E = (0, W.default)({}, o.coords.cur.page), b = l.options.resize;
        if (b && b.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || g & b.mouseButtons)) {
          if (s.default.object(b.edges)) {
            var x = { left: false, right: false, top: false, bottom: false };
            for (var O in x)
              x[O] = xt(O, b.edges[O], E, o._latestPointer.eventTarget, u, h, b.margin || At.defaultMargin);
            x.left = x.left && !x.right, x.top = x.top && !x.bottom, (x.left || x.right || x.top || x.bottom) && (i.action = { name: "resize", edges: x });
          } else {
            var I = b.axis !== "y" && E.x > h.right - At.defaultMargin, P = b.axis !== "x" && E.y > h.bottom - At.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o = i.edges, l = i.axis, u = i.name, h = At.cursors, g = null;
      if (l)
        g = h[u + l];
      else if (o) {
        for (var E = "", b = ["top", "bottom", "left", "right"], x = 0; x < b.length; x++) {
          var O = b[x];
          o[O] && (E += O);
        }
        g = h[E];
      }
      return g;
    }, defaultMargin: null }, la = At;
    Ee.default = la;
    var mr = {};
    Object.defineProperty(mr, "__esModule", { value: true }), mr.default = void 0;
    var Ji = { id: "actions", install: function(i) {
      i.usePlugin(G.default), i.usePlugin(Ee.default), i.usePlugin(f.default), i.usePlugin(Xr.default);
    } };
    mr.default = Ji;
    var Pt = {};
    Object.defineProperty(Pt, "__esModule", { value: true }), Pt.default = void 0;
    var _t, Zr, hi = 0, mi = { request: function(i) {
      return _t(i);
    }, cancel: function(i) {
      return Zr(i);
    }, init: function(i) {
      if (_t = i.requestAnimationFrame, Zr = i.cancelAnimationFrame, !_t)
        for (var o = ["ms", "moz", "webkit", "o"], l = 0; l < o.length; l++) {
          var u = o[l];
          _t = i["".concat(u, "RequestAnimationFrame")], Zr = i["".concat(u, "CancelAnimationFrame")] || i["".concat(u, "CancelRequestAnimationFrame")];
        }
      _t = _t && _t.bind(i), Zr = Zr && Zr.bind(i), _t || (_t = c(function(h) {
        var g = Date.now(), E = Math.max(0, 16 - (g - hi)), b = i.setTimeout(function() {
          h(g + E);
        }, E);
        return hi = g + E, b;
      }, "jt"), Zr = c(function(h) {
        return clearTimeout(h);
      }, "Mt"));
    } };
    Pt.default = mi;
    var gn = {};
    Object.defineProperty(gn, "__esModule", { value: true }), gn.default = void 0, gn.getContainer = ua, gn.getScroll = eo, gn.getScrollSize = function(i) {
      return s.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, gn.getScrollSizeDelta = function(i, o) {
      var l = i.interaction, u = i.element, h = l && l.interactable.options[l.prepared.name].autoScroll;
      if (!h || !h.enabled)
        return o(), { x: 0, y: 0 };
      var g = ua(h.container, l.interactable, u), E = eo(g);
      o();
      var b = eo(g);
      return { x: b.x - E.x, y: b.y - E.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, Pt.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = Pt.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), Pt.default.cancel(ce.i);
    }, scroll: function() {
      var i = ce.interaction, o = i.interactable, l = i.element, u = i.prepared.name, h = o.options[u].autoScroll, g = ua(h.container, o, l), E = ce.now(), b = (E - ce.prevTime) / 1e3, x = h.speed * b;
      if (x >= 1) {
        var O = { x: ce.x * x, y: ce.y * x };
        if (O.x || O.y) {
          var I = eo(g);
          s.default.window(g) ? g.scrollBy(O.x, O.y) : g && (g.scrollLeft += O.x, g.scrollTop += O.y);
          var P = eo(g), N = { x: P.x - I.x, y: P.y - I.y };
          (N.x || N.y) && o.fire({ type: "autoscroll", target: l, interactable: o, delta: N, interaction: i, container: g });
        }
        ce.prevTime = E;
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
          var u, h, g, E, b = o.interactable, x = o.element, O = o.prepared.name, I = b.options[O].autoScroll, P = ua(I.container, b, x);
          if (s.default.window(P))
            E = l.clientX < ce.margin, u = l.clientY < ce.margin, h = l.clientX > P.innerWidth - ce.margin, g = l.clientY > P.innerHeight - ce.margin;
          else {
            var N = z.getElementClientRect(P);
            E = l.clientX < N.left + ce.margin, u = l.clientY < N.top + ce.margin, h = l.clientX > N.right - ce.margin, g = l.clientY > N.bottom - ce.margin;
          }
          ce.x = h ? 1 : E ? -1 : 0, ce.y = g ? 1 : u ? -1 : 0, ce.isScrolling || (ce.margin = I.margin, ce.speed = I.speed, ce.start(o));
        }
    } };
    function ua(i, o, l) {
      return (s.default.string(i) ? (0, ue.getStringOptionResult)(i, o, l) : i) || (0, r.getWindow)(l);
    }
    __name(ua, "ua");
    c(ua, "zt");
    function eo(i) {
      return s.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(eo, "eo");
    c(eo, "Ct");
    var Jh = { id: "auto-scroll", install: function(i) {
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
    } } }, em = Jh;
    gn.default = em;
    var ar = {};
    Object.defineProperty(ar, "__esModule", { value: true }), ar.copyAction = function(i, o) {
      return i.name = o.name, i.axis = o.axis, i.edges = o.edges, i;
    }, ar.sign = void 0, ar.warnOnce = function(i, o) {
      var l = false;
      return function() {
        return l || (r.window.console.warn(o), l = true), i.apply(this, arguments);
      };
    }, ar.sign = function(i) {
      return i >= 0 ? 1 : -1;
    };
    var ca = {};
    function tm(i) {
      return s.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(tm, "tm");
    c(tm, "Yt");
    function rm(i) {
      return s.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(rm, "rm");
    c(rm, "Wt"), Object.defineProperty(ca, "__esModule", { value: true }), ca.default = void 0;
    var nm = { id: "auto-start/interactableMethods", install: function(i) {
      var o = i.Interactable;
      o.prototype.getAction = function(l, u, h, g) {
        var E = function(b, x, O, I, P) {
          var N = b.getRect(I), L = { action: null, interactable: b, interaction: O, element: I, rect: N, buttons: x.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[x.button] };
          return P.fire("auto-start:check", L), L.action;
        }(this, u, h, g, i);
        return this.options.actionChecker ? this.options.actionChecker(l, u, E, this, g, h) : E;
      }, o.prototype.ignoreFrom = (0, ar.warnOnce)(function(l) {
        return this._backCompatOption("ignoreFrom", l);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, ar.warnOnce)(function(l) {
        return this._backCompatOption("allowFrom", l);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = rm, o.prototype.styleCursor = tm;
    } };
    ca.default = nm;
    var vi = {};
    function lc(i, o, l, u, h) {
      return o.testIgnoreAllow(o.options[i.name], l, u) && o.options[i.name].enabled && pa(o, l, i, h) ? i : null;
    }
    __name(lc, "lc");
    c(lc, "Vt");
    function im(i, o, l, u, h, g, E) {
      for (var b = 0, x = u.length; b < x; b++) {
        var O = u[b], I = h[b], P = O.getAction(o, l, i, I);
        if (P) {
          var N = lc(P, O, I, g, E);
          if (N)
            return { action: N, interactable: O, element: I };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(im, "im");
    c(im, "Nt");
    function uc(i, o, l, u, h) {
      var g = [], E = [], b = u;
      function x(I) {
        g.push(I), E.push(b);
      }
      __name(x, "x");
      for (c(x, "u"); s.default.element(b); ) {
        g = [], E = [], h.interactables.forEachMatch(b, x);
        var O = im(i, o, l, g, E, u, h);
        if (O.action && !O.interactable.options[O.action.name].manualStart)
          return O;
        b = z.parentNode(b);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(uc, "uc");
    c(uc, "qt");
    function cc(i, o, l) {
      var u = o.action, h = o.interactable, g = o.element;
      u = u || { name: null }, i.interactable = h, i.element = g, (0, ar.copyAction)(i.prepared, u), i.rect = h && u.name ? h.getRect(g) : null, dc(i, l), l.fire("autoStart:prepared", { interaction: i });
    }
    __name(cc, "cc");
    c(cc, "Gt");
    function pa(i, o, l, u) {
      var h = i.options, g = h[l.name].max, E = h[l.name].maxPerElement, b = u.autoStart.maxInteractions, x = 0, O = 0, I = 0;
      if (!(g && E && b))
        return false;
      for (var P = 0; P < u.interactions.list.length; P++) {
        var N = u.interactions.list[P], L = N.prepared.name;
        if (N.interacting() && (++x >= b || N.interactable === i && ((O += L === l.name ? 1 : 0) >= g || N.element === o && (I++, L === l.name && I >= E))))
          return false;
      }
      return b > 0;
    }
    __name(pa, "pa");
    c(pa, "$t");
    function pc(i, o) {
      return s.default.number(i) ? (o.autoStart.maxInteractions = i, this) : o.autoStart.maxInteractions;
    }
    __name(pc, "pc");
    c(pc, "Ht");
    function il(i, o, l) {
      var u = l.autoStart.cursorElement;
      u && u !== i && (u.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o, i.style.cursor = o, l.autoStart.cursorElement = o ? i : null;
    }
    __name(il, "il");
    c(il, "Kt");
    function dc(i, o) {
      var l = i.interactable, u = i.element, h = i.prepared;
      if (i.pointerType === "mouse" && l && l.options.styleCursor) {
        var g = "";
        if (h.name) {
          var E = l.options[h.name].cursorChecker;
          g = s.default.func(E) ? E(h, l, u, i._interacting) : o.actions.map[h.name].getCursor(h);
        }
        il(i.element, g || "", o);
      } else
        o.autoStart.cursorElement && il(o.autoStart.cursorElement, "", o);
    }
    __name(dc, "dc");
    c(dc, "Zt"), Object.defineProperty(vi, "__esModule", { value: true }), vi.default = void 0;
    var om = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o = i.interactStatic, l = i.defaults;
      i.usePlugin(ca.default), l.base.actionChecker = null, l.base.styleCursor = true, (0, W.default)(l.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(u) {
        return pc(u, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: pa, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o) {
      var l = i.interaction, u = i.pointer, h = i.event, g = i.eventTarget;
      l.interacting() || cc(l, uc(l, u, h, g, o), o);
    }, "interactions:move": function(i, o) {
      (function(l, u) {
        var h = l.interaction, g = l.pointer, E = l.event, b = l.eventTarget;
        h.pointerType !== "mouse" || h.pointerIsDown || h.interacting() || cc(h, uc(h, g, E, b, u), u);
      })(i, o), function(l, u) {
        var h = l.interaction;
        if (h.pointerIsDown && !h.interacting() && h.pointerWasMoved && h.prepared.name) {
          u.fire("autoStart:before-start", l);
          var g = h.interactable, E = h.prepared.name;
          E && g && (g.options[E].manualStart || !pa(g, h.element, h.prepared, u) ? h.stop() : (h.start(h.prepared, g, h.element), dc(h, u)));
        }
      }(i, o);
    }, "interactions:stop": function(i, o) {
      var l = i.interaction, u = l.interactable;
      u && u.options.styleCursor && il(l.element, "", o);
    } }, maxInteractions: pc, withinInteractionLimit: pa, validateAction: lc }, am = om;
    vi.default = am;
    var da = {};
    Object.defineProperty(da, "__esModule", { value: true }), da.default = void 0;
    var sm = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o) {
      var l = i.interaction, u = i.eventTarget, h = i.dx, g = i.dy;
      if (l.prepared.name === "drag") {
        var E = Math.abs(h), b = Math.abs(g), x = l.interactable.options.drag, O = x.startAxis, I = E > b ? "x" : E < b ? "y" : "xy";
        if (l.prepared.axis = x.lockAxis === "start" ? I[0] : x.lockAxis, I !== "xy" && O !== "xy" && O !== I) {
          l.prepared.name = null;
          for (var P = u, N = function(R) {
            if (R !== l.interactable) {
              var q = l.interactable.options.drag;
              if (!q.manualStart && R.testIgnoreAllow(q, P, u)) {
                var Q = R.getAction(l.downPointer, l.downEvent, l, P);
                if (Q && Q.name === "drag" && function(U, ne) {
                  if (!ne)
                    return false;
                  var oe = ne.options.drag.startAxis;
                  return U === "xy" || oe === "xy" || oe === U;
                }(I, R) && vi.default.validateAction(Q, R, P, u, o))
                  return R;
              }
            }
          }; s.default.element(P); ) {
            var L = o.interactables.forEachMatch(P, N);
            if (L) {
              l.prepared.name = "drag", l.interactable = L, l.element = P;
              break;
            }
            P = (0, z.parentNode)(P);
          }
        }
      }
    } } };
    da.default = sm;
    var fa = {};
    function ol(i) {
      var o = i.prepared && i.prepared.name;
      if (!o)
        return null;
      var l = i.interactable.options;
      return l[o].hold || l[o].delay;
    }
    __name(ol, "ol");
    c(ol, "re"), Object.defineProperty(fa, "__esModule", { value: true }), fa.default = void 0;
    var lm = { id: "auto-start/hold", install: function(i) {
      var o = i.defaults;
      i.usePlugin(vi.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var o = i.interaction, l = ol(o);
      l > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, l));
    }, "interactions:move": function(i) {
      var o = i.interaction, l = i.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !l && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var o = i.interaction;
      ol(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: ol }, um = lm;
    fa.default = um;
    var ha = {};
    Object.defineProperty(ha, "__esModule", { value: true }), ha.default = void 0;
    var cm = { id: "auto-start", install: function(i) {
      i.usePlugin(vi.default), i.usePlugin(fa.default), i.usePlugin(da.default);
    } };
    ha.default = cm;
    var gi = {};
    function pm(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : s.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(pm, "pm");
    c(pm, "ue");
    function dm(i) {
      var o = i.interaction, l = i.event;
      o.interactable && o.interactable.checkAndPreventDefault(l);
    }
    __name(dm, "dm");
    c(dm, "ce");
    function fc(i) {
      var o = i.Interactable;
      o.prototype.preventDefault = pm, o.prototype.checkAndPreventDefault = function(l) {
        return function(u, h, g) {
          var E = u.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (h.events.supportsPassive && /^touch(start|move)$/.test(g.type)) {
                var b = (0, r.getWindow)(g.target).document, x = h.getDocOptions(b);
                if (!x || !x.events || x.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(g.type) || s.default.element(g.target) && (0, z.matchesSelector)(g.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || g.preventDefault();
            } else
              g.preventDefault();
        }(this, i, l);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(l) {
        for (var u = 0; u < i.interactions.list.length; u++) {
          var h = i.interactions.list[u];
          if (h.element && (h.element === l.target || (0, z.nodeContains)(h.element, l.target)))
            return void h.interactable.checkAndPreventDefault(l);
        }
      } });
    }
    __name(fc, "fc");
    c(fc, "fe"), Object.defineProperty(gi, "__esModule", { value: true }), gi.default = void 0, gi.install = fc;
    var fm = { id: "core/interactablePreventDefault", install: fc, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o) {
      return i["interactions:".concat(o)] = dm, i;
    }, {}) };
    gi.default = fm;
    var al = {};
    Object.defineProperty(al, "__esModule", { value: true }), al.default = void 0, al.default = {};
    var to, sl = {};
    Object.defineProperty(sl, "__esModule", { value: true }), sl.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(to || (to = {})), to.touchAction, to.boxSizing, to.noListeners;
    var hm = { id: "dev-tools", install: function() {
    } };
    sl.default = hm;
    var qn = {};
    Object.defineProperty(qn, "__esModule", { value: true }), qn.default = c(/* @__PURE__ */ __name(function i(o) {
      var l = {};
      for (var u in o) {
        var h = o[u];
        s.default.plainObject(h) ? l[u] = i(h) : s.default.array(h) ? l[u] = Ae.from(h) : l[u] = h;
      }
      return l;
    }, "i"), "t");
    var Fn = {};
    function hc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var g, E, b = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (g = h.next()).done) && (b.push(g.value), !u || b.length !== u); x = true)
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
          return b;
        }
      }(i, o) || function(l, u) {
        if (l) {
          if (typeof l == "string")
            return mc(l, u);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? mc(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(hc, "hc");
    c(hc, "be");
    function mc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(mc, "mc");
    c(mc, "xe");
    function mm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(mm, "mm");
    c(mm, "we");
    function Un(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Un, "Un");
    c(Un, "_e"), Object.defineProperty(Fn, "__esModule", { value: true }), Fn.default = void 0, Fn.getRectOffset = vc;
    var vm = function() {
      function i(u) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Un(this, "states", []), Un(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), Un(this, "startDelta", void 0), Un(this, "result", void 0), Un(this, "endResult", void 0), Un(this, "edges", void 0), Un(this, "interaction", void 0), this.interaction = u, this.result = ma();
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(u, h) {
        var g = u.phase, E = this.interaction, b = function(O) {
          var I = O.interactable.options[O.prepared.name], P = I.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N) {
            var L = I[N];
            return L && L.enabled && { options: L, methods: L._methods };
          }).filter(function(N) {
            return !!N;
          });
        }(E);
        this.prepareStates(b), this.edges = (0, W.default)({}, E.edges), this.startOffset = vc(E.rect, h), this.startDelta = { x: 0, y: 0 };
        var x = this.fillArg({ phase: g, pageCoords: h, preEnd: false });
        return this.result = ma(), this.startAll(x), this.result = this.setAll(x);
      } }, { key: "fillArg", value: function(u) {
        var h = this.interaction;
        return u.interaction = h, u.interactable = h.interactable, u.element = h.element, u.rect = u.rect || h.rect, u.edges = this.edges, u.startOffset = this.startOffset, u;
      } }, { key: "startAll", value: function(u) {
        for (var h = 0; h < this.states.length; h++) {
          var g = this.states[h];
          g.methods.start && (u.state = g, g.methods.start(u));
        }
      } }, { key: "setAll", value: function(u) {
        var h = u.phase, g = u.preEnd, E = u.skipModifiers, b = u.rect;
        u.coords = (0, W.default)({}, u.pageCoords), u.rect = (0, W.default)({}, b);
        for (var x = E ? this.states.slice(E) : this.states, O = ma(u.coords, u.rect), I = 0; I < x.length; I++) {
          var P, N = x[I], L = N.options, R = (0, W.default)({}, u.coords), q = null;
          (P = N.methods) != null && P.set && this.shouldDo(L, g, h) && (u.state = N, q = N.methods.set(u), ue.addEdges(this.interaction.edges, u.rect, { x: u.coords.x - R.x, y: u.coords.y - R.y })), O.eventProps.push(q);
        }
        O.delta.x = u.coords.x - u.pageCoords.x, O.delta.y = u.coords.y - u.pageCoords.y, O.rectDelta.left = u.rect.left - b.left, O.rectDelta.right = u.rect.right - b.right, O.rectDelta.top = u.rect.top - b.top, O.rectDelta.bottom = u.rect.bottom - b.bottom;
        var Q = this.result.coords, U = this.result.rect;
        if (Q && U) {
          var ne = O.rect.left !== U.left || O.rect.right !== U.right || O.rect.top !== U.top || O.rect.bottom !== U.bottom;
          O.changed = ne || Q.x !== O.coords.x || Q.y !== O.coords.y;
        }
        return O;
      } }, { key: "applyToInteraction", value: function(u) {
        var h = this.interaction, g = u.phase, E = h.coords.cur, b = h.coords.start, x = this.result, O = this.startDelta, I = x.delta;
        g === "start" && (0, W.default)(this.startDelta, x.delta);
        for (var P = 0; P < [[b, O], [E, I]].length; P++) {
          var N = hc([[b, O], [E, I]][P], 2), L = N[0], R = N[1];
          L.page.x += R.x, L.page.y += R.y, L.client.x += R.x, L.client.y += R.y;
        }
        var q = this.result.rectDelta, Q = u.rect || h.rect;
        Q.left += q.left, Q.right += q.right, Q.top += q.top, Q.bottom += q.bottom, Q.width = Q.right - Q.left, Q.height = Q.bottom - Q.top;
      } }, { key: "setAndApply", value: function(u) {
        var h = this.interaction, g = u.phase, E = u.preEnd, b = u.skipModifiers, x = this.setAll(this.fillArg({ preEnd: E, phase: g, pageCoords: u.modifiedCoords || h.coords.cur.page }));
        if (this.result = x, !x.changed && (!b || b < this.states.length) && h.interacting())
          return false;
        if (u.modifiedCoords) {
          var O = h.coords.cur.page, I = { x: u.modifiedCoords.x - O.x, y: u.modifiedCoords.y - O.y };
          x.coords.x += I.x, x.coords.y += I.y, x.delta.x += I.x, x.delta.y += I.y;
        }
        this.applyToInteraction(u);
      } }, { key: "beforeEnd", value: function(u) {
        var h = u.interaction, g = u.event, E = this.states;
        if (E && E.length) {
          for (var b = false, x = 0; x < E.length; x++) {
            var O = E[x];
            u.state = O;
            var I = O.options, P = O.methods, N = P.beforeEnd && P.beforeEnd(u);
            if (N)
              return this.endResult = N, false;
            b = b || !b && this.shouldDo(I, true, u.phase, true);
          }
          b && h.move({ event: g, preEnd: true });
        }
      } }, { key: "stop", value: function(u) {
        var h = u.interaction;
        if (this.states && this.states.length) {
          var g = (0, W.default)({ states: this.states, interactable: h.interactable, element: h.element, rect: null }, u);
          this.fillArg(g);
          for (var E = 0; E < this.states.length; E++) {
            var b = this.states[E];
            g.state = b, b.methods.stop && b.methods.stop(g);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(u) {
        this.states = [];
        for (var h = 0; h < u.length; h++) {
          var g = u[h], E = g.options, b = g.methods, x = g.name;
          this.states.push({ options: E, methods: b, index: h, name: x });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(u) {
        var h = u.interaction, g = h.coords, E = h.rect, b = h.modification;
        if (b.result) {
          for (var x = b.startDelta, O = b.result, I = O.delta, P = O.rectDelta, N = [[g.start, x], [g.cur, I]], L = 0; L < N.length; L++) {
            var R = hc(N[L], 2), q = R[0], Q = R[1];
            q.page.x -= Q.x, q.page.y -= Q.y, q.client.x -= Q.x, q.client.y -= Q.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(u, h, g, E) {
        return !(!u || u.enabled === false || E && !u.endOnly || u.endOnly && !h || g === "start" && !u.setStart);
      } }, { key: "copyFrom", value: function(u) {
        this.startOffset = u.startOffset, this.startDelta = u.startDelta, this.edges = u.edges, this.states = u.states.map(function(h) {
          return (0, qn.default)(h);
        }), this.result = ma((0, W.default)({}, u.result.coords), (0, W.default)({}, u.result.rect));
      } }, { key: "destroy", value: function() {
        for (var u in this)
          this[u] = null;
      } }]) && mm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function ma(i, o) {
      return { rect: o, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(ma, "ma");
    c(ma, "Oe");
    function vc(i, o) {
      return i ? { left: o.x - i.left, top: o.y - i.top, right: i.right - o.x, bottom: i.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(vc, "vc");
    c(vc, "Ee"), Fn.default = vm;
    var Et = {};
    function va(i) {
      var o = i.iEvent, l = i.interaction.modification.result;
      l && (o.modifiers = l.eventProps);
    }
    __name(va, "va");
    c(va, "Te"), Object.defineProperty(Et, "__esModule", { value: true }), Et.addEventModifiers = va, Et.default = void 0, Et.makeModifier = function(i, o) {
      var l = i.defaults, u = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, h = c(function(g) {
        var E = g || {};
        for (var b in E.enabled = E.enabled !== false, l)
          b in E || (E[b] = l[b]);
        var x = { options: E, methods: u, name: o, enable: function() {
          return E.enabled = true, x;
        }, disable: function() {
          return E.enabled = false, x;
        } };
        return x;
      }, "o");
      return o && typeof o == "string" && (h._defaults = l, h._methods = u), h;
    };
    var gm = { id: "modifiers/base", before: ["actions"], install: function(i) {
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
    }, "interactions:action-start": va, "interactions:action-move": va, "interactions:action-end": va, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } }, bm = gm;
    Et.default = bm;
    var ro = {};
    Object.defineProperty(ro, "__esModule", { value: true }), ro.defaults = void 0, ro.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var no = {};
    function ll(i) {
      return ll = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, ll(i);
    }
    __name(ll, "ll");
    c(ll, "De");
    function ym(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(ym, "ym");
    c(ym, "Ae");
    function ul(i, o) {
      return ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, ul(i, o);
    }
    __name(ul, "ul");
    c(ul, "ze");
    function wm(i, o) {
      if (o && (ll(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return He(i);
    }
    __name(wm, "wm");
    c(wm, "Ce");
    function He(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(He, "He");
    c(He, "Re");
    function ga(i) {
      return ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, ga(i);
    }
    __name(ga, "ga");
    c(ga, "Fe");
    function Ye(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ye, "Ye");
    c(Ye, "Xe"), Object.defineProperty(no, "__esModule", { value: true }), no.InteractEvent = void 0;
    var gc = function(i) {
      (function(b, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(x && x.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), x && ul(b, x);
      })(E, i);
      var o, l, u, h, g = (u = E, h = function() {
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
        var b, x = ga(u);
        if (h) {
          var O = ga(this).constructor;
          b = Reflect.construct(x, arguments, O);
        } else
          b = x.apply(this, arguments);
        return wm(this, b);
      });
      function E(b, x, O, I, P, N, L) {
        var R;
        (function(Ue, Te) {
          if (!(Ue instanceof Te))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), Ye(He(R = g.call(this, b)), "relatedTarget", null), Ye(He(R), "screenX", void 0), Ye(He(R), "screenY", void 0), Ye(He(R), "button", void 0), Ye(He(R), "buttons", void 0), Ye(He(R), "ctrlKey", void 0), Ye(He(R), "shiftKey", void 0), Ye(He(R), "altKey", void 0), Ye(He(R), "metaKey", void 0), Ye(He(R), "page", void 0), Ye(He(R), "client", void 0), Ye(He(R), "delta", void 0), Ye(He(R), "rect", void 0), Ye(He(R), "x0", void 0), Ye(He(R), "y0", void 0), Ye(He(R), "t0", void 0), Ye(He(R), "dt", void 0), Ye(He(R), "duration", void 0), Ye(He(R), "clientX0", void 0), Ye(He(R), "clientY0", void 0), Ye(He(R), "velocity", void 0), Ye(He(R), "speed", void 0), Ye(He(R), "swipe", void 0), Ye(He(R), "axes", void 0), Ye(He(R), "preEnd", void 0), P = P || b.element;
        var q = b.interactable, Q = (q && q.options || ro.defaults).deltaSource, U = (0, Ne.default)(q, P, O), ne = I === "start", oe = I === "end", ye = ne ? He(R) : b.prevEvent, ze = ne ? b.coords.start : oe ? { page: ye.page, client: ye.client, timeStamp: b.coords.cur.timeStamp } : b.coords.cur;
        return R.page = (0, W.default)({}, ze.page), R.client = (0, W.default)({}, ze.client), R.rect = (0, W.default)({}, b.rect), R.timeStamp = ze.timeStamp, oe || (R.page.x -= U.x, R.page.y -= U.y, R.client.x -= U.x, R.client.y -= U.y), R.ctrlKey = x.ctrlKey, R.altKey = x.altKey, R.shiftKey = x.shiftKey, R.metaKey = x.metaKey, R.button = x.button, R.buttons = x.buttons, R.target = P, R.currentTarget = P, R.preEnd = N, R.type = L || O + (I || ""), R.interactable = q, R.t0 = ne ? b.pointers[b.pointers.length - 1].downTime : ye.t0, R.x0 = b.coords.start.page.x - U.x, R.y0 = b.coords.start.page.y - U.y, R.clientX0 = b.coords.start.client.x - U.x, R.clientY0 = b.coords.start.client.y - U.y, R.delta = ne || oe ? { x: 0, y: 0 } : { x: R[Q].x - ye[Q].x, y: R[Q].y - ye[Q].y }, R.dt = b.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, W.default)({}, b.coords.velocity[Q]), R.speed = (0, Ke.default)(R.velocity.x, R.velocity.y), R.swipe = oe || I === "inertiastart" ? R.getSwipe() : null, R;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (l = [{ key: "getSwipe", value: function() {
        var b = this._interaction;
        if (b.prevEvent.speed < 600 || this.timeStamp - b.prevEvent.timeStamp > 150)
          return null;
        var x = 180 * Math.atan2(b.prevEvent.velocityY, b.prevEvent.velocityX) / Math.PI;
        x < 0 && (x += 360);
        var O = 112.5 <= x && x < 247.5, I = 202.5 <= x && x < 337.5;
        return { up: I, down: !I && 22.5 <= x && x < 157.5, left: O, right: !O && (292.5 <= x || x < 67.5), angle: x, speed: b.prevEvent.speed, velocity: { x: b.prevEvent.velocityX, y: b.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && ym(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    no.InteractEvent = gc, Object.defineProperties(gc.prototype, { pageX: { get: function() {
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
    var io = {};
    function bc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(bc, "bc");
    c(bc, "We");
    function xm(i, o, l) {
      return o && bc(i.prototype, o), l && bc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(xm, "xm");
    c(xm, "Le");
    function oo(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(oo, "oo");
    c(oo, "Ue"), Object.defineProperty(io, "__esModule", { value: true }), io.PointerInfo = void 0;
    var Em = xm(c(/* @__PURE__ */ __name(function i(o, l, u, h, g) {
      (function(E, b) {
        if (!(E instanceof b))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), oo(this, "id", void 0), oo(this, "pointer", void 0), oo(this, "event", void 0), oo(this, "downTime", void 0), oo(this, "downTarget", void 0), this.id = o, this.pointer = l, this.event = u, this.downTime = h, this.downTarget = g;
    }, "i"), "t"));
    io.PointerInfo = Em;
    var ba, ya, Ft = {};
    function Sm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Sm, "Sm");
    c(Sm, "$e");
    function Qe(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Qe, "Qe");
    c(Qe, "He"), Object.defineProperty(Ft, "__esModule", { value: true }), Ft.Interaction = void 0, Object.defineProperty(Ft, "PointerInfo", { enumerable: true, get: function() {
      return io.PointerInfo;
    } }), Ft.default = Ft._ProxyValues = Ft._ProxyMethods = void 0, Ft._ProxyValues = ba, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(ba || (Ft._ProxyValues = ba = {})), Ft._ProxyMethods = ya, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(ya || (Ft._ProxyMethods = ya = {}));
    var Tm = 0, yc = function() {
      function i(u) {
        var h = this, g = u.pointerType, E = u.scopeFire;
        (function(N, L) {
          if (!(N instanceof L))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Qe(this, "interactable", null), Qe(this, "element", null), Qe(this, "rect", null), Qe(this, "_rects", void 0), Qe(this, "edges", null), Qe(this, "_scopeFire", void 0), Qe(this, "prepared", { name: null, axis: null, edges: null }), Qe(this, "pointerType", void 0), Qe(this, "pointers", []), Qe(this, "downEvent", null), Qe(this, "downPointer", {}), Qe(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Qe(this, "prevEvent", null), Qe(this, "pointerIsDown", false), Qe(this, "pointerWasMoved", false), Qe(this, "_interacting", false), Qe(this, "_ending", false), Qe(this, "_stopped", true), Qe(this, "_proxy", null), Qe(this, "simulation", null), Qe(this, "doMove", (0, ar.warnOnce)(function(N) {
          this.move(N);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Qe(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), Qe(this, "_id", Tm++), this._scopeFire = E, this.pointerType = g;
        var b = this;
        this._proxy = {};
        var x = c(function(N) {
          Object.defineProperty(h._proxy, N, { get: function() {
            return b[N];
          } });
        }, "a");
        for (var O in ba)
          x(O);
        var I = c(function(N) {
          Object.defineProperty(h._proxy, N, { value: function() {
            return b[N].apply(b, arguments);
          } });
        }, "l");
        for (var P in ya)
          I(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, l = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(u, h, g) {
        var E = this.updatePointer(u, h, g, true), b = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: u, event: h, eventTarget: g, pointerIndex: E, pointerInfo: b, type: "down", interaction: this });
      } }, { key: "start", value: function(u, h, g) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (u.name === "gesture" ? 2 : 1) || !h.options[u.name].enabled) && ((0, ar.copyAction)(this.prepared, u), this.interactable = h, this.element = g, this.rect = h.getRect(g), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(u, h, g) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(u, h, g, false);
        var E, b, x = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, b = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Ke.default)(E, b) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(u), I = { pointer: u, pointerIndex: O, pointerInfo: this.pointers[O], event: h, type: "move", eventTarget: g, dx: E, dy: b, duplicate: x, interaction: this };
        x || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), x || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(u) {
        u && u.event || K.setZeroCoords(this.coords.delta), (u = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, u || {})).phase = "move", this._doPhase(u);
      } }, { key: "pointerUp", value: function(u, h, g, E) {
        var b = this.getPointerIndex(u);
        b === -1 && (b = this.updatePointer(u, h, g, false));
        var x = /cancel$/i.test(h.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(x), { pointer: u, pointerIndex: b, pointerInfo: this.pointers[b], event: h, eventTarget: g, type: x, curEventTarget: E, interaction: this }), this.simulation || this.end(h), this.removePointer(u, h);
      } }, { key: "documentBlur", value: function(u) {
        this.end(u), this._scopeFire("interactions:blur", { event: u, type: "blur", interaction: this });
      } }, { key: "end", value: function(u) {
        var h;
        this._ending = true, u = u || this._latestPointer.event, this.interacting() && (h = this._doPhase({ event: u, interaction: this, phase: "end" })), this._ending = false, h === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(u) {
        var h = K.getPointerId(u);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Ae.findIndex(this.pointers, function(g) {
          return g.id === h;
        });
      } }, { key: "getPointerInfo", value: function(u) {
        return this.pointers[this.getPointerIndex(u)];
      } }, { key: "updatePointer", value: function(u, h, g, E) {
        var b = K.getPointerId(u), x = this.getPointerIndex(u), O = this.pointers[x];
        return E = E !== false && (E || /(down|start)$/i.test(h.type)), O ? O.pointer = u : (O = new io.PointerInfo(b, u, h, null, null), x = this.pointers.length, this.pointers.push(O)), K.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, O.downTime = this.coords.cur.timeStamp, O.downTarget = g, K.pointerExtend(this.downPointer, u), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = h, this.pointerWasMoved = false)), this._updateLatestPointer(u, h, g), this._scopeFire("interactions:update-pointer", { pointer: u, event: h, eventTarget: g, down: E, pointerInfo: O, pointerIndex: x, interaction: this }), x;
      } }, { key: "removePointer", value: function(u, h) {
        var g = this.getPointerIndex(u);
        if (g !== -1) {
          var E = this.pointers[g];
          this._scopeFire("interactions:remove-pointer", { pointer: u, event: h, eventTarget: null, pointerIndex: g, pointerInfo: E, interaction: this }), this.pointers.splice(g, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(u, h, g) {
        this._latestPointer.pointer = u, this._latestPointer.event = h, this._latestPointer.eventTarget = g;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(u, h, g, E) {
        return new no.InteractEvent(this, u, this.prepared.name, h, this.element, g, E);
      } }, { key: "_fireEvent", value: function(u) {
        var h;
        (h = this.interactable) == null || h.fire(u), (!this.prevEvent || u.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = u);
      } }, { key: "_doPhase", value: function(u) {
        var h = u.event, g = u.phase, E = u.preEnd, b = u.type, x = this.rect;
        if (x && g === "move" && (ue.addEdges(this.edges, x, this.coords.delta[this.interactable.options.deltaSource]), x.width = x.right - x.left, x.height = x.bottom - x.top), this._scopeFire("interactions:before-action-".concat(g), u) === false)
          return false;
        var O = u.iEvent = this._createPreparedEvent(h, g, E, b);
        return this._scopeFire("interactions:action-".concat(g), u), g === "start" && (this.prevEvent = O), this._fireEvent(O), this._scopeFire("interactions:after-action-".concat(g), u), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], l && Sm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Ft.Interaction = yc;
    var Cm = yc;
    Ft.default = Cm;
    var Wn = {};
    function wc(i) {
      i.pointerIsDown && (pl(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(wc, "wc");
    c(wc, "tn");
    function xc(i) {
      cl(i.interaction);
    }
    __name(xc, "xc");
    c(xc, "en");
    function cl(i) {
      if (!function(l) {
        return !(!l.offset.pending.x && !l.offset.pending.y);
      }(i))
        return false;
      var o = i.offset.pending;
      return pl(i.coords.cur, o), pl(i.coords.delta, o), ue.addEdges(i.edges, i.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(cl, "cl");
    c(cl, "nn");
    function Om(i) {
      var o = i.x, l = i.y;
      this.offset.pending.x += o, this.offset.pending.y += l, this.offset.total.x += o, this.offset.total.y += l;
    }
    __name(Om, "Om");
    c(Om, "rn");
    function pl(i, o) {
      var l = i.page, u = i.client, h = o.x, g = o.y;
      l.x += h, l.y += g, u.x += h, u.y += g;
    }
    __name(pl, "pl");
    c(pl, "on"), Object.defineProperty(Wn, "__esModule", { value: true }), Wn.addTotal = wc, Wn.applyPending = cl, Wn.default = void 0, Ft._ProxyMethods.offsetBy = "";
    var Mm = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = Om;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return wc(i.interaction);
    }, "interactions:before-action-start": xc, "interactions:before-action-move": xc, "interactions:before-action-end": function(i) {
      var o = i.interaction;
      if (cl(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, Im = Mm;
    Wn.default = Im;
    var bi = {};
    function Am(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Am, "Am");
    c(Am, "un");
    function bt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(bt, "bt");
    c(bt, "cn"), Object.defineProperty(bi, "__esModule", { value: true }), bi.default = bi.InertiaState = void 0;
    var Ec = function() {
      function i(u) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), bt(this, "active", false), bt(this, "isModified", false), bt(this, "smoothEnd", false), bt(this, "allowResume", false), bt(this, "modification", void 0), bt(this, "modifierCount", 0), bt(this, "modifierArg", void 0), bt(this, "startCoords", void 0), bt(this, "t0", 0), bt(this, "v0", 0), bt(this, "te", 0), bt(this, "targetOffset", void 0), bt(this, "modifiedOffset", void 0), bt(this, "currentOffset", void 0), bt(this, "lambda_v0", 0), bt(this, "one_ve_v0", 0), bt(this, "timeout", void 0), bt(this, "interaction", void 0), this.interaction = u;
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(u) {
        var h = this.interaction, g = wa(h);
        if (!g || !g.enabled)
          return false;
        var E = h.coords.velocity.client, b = (0, Ke.default)(E.x, E.y), x = this.modification || (this.modification = new Fn.default(h));
        if (x.copyFrom(h.modification), this.t0 = h._now(), this.allowResume = g.allowResume, this.v0 = b, this.currentOffset = { x: 0, y: 0 }, this.startCoords = h.coords.cur.page, this.modifierArg = x.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - h.coords.cur.timeStamp < 50 && b > g.minSpeed && b > g.endSpeed)
          this.startInertia();
        else {
          if (x.result = x.setAll(this.modifierArg), !x.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return h.modification.result.rect = null, h.offsetBy(this.targetOffset), h._doPhase({ interaction: h, event: u, phase: "inertiastart" }), h.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), h.modification.result.rect = null, this.active = true, h.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var u = this, h = this.interaction.coords.velocity.client, g = wa(this.interaction), E = g.resistance, b = -Math.log(g.endSpeed / this.v0) / E;
        this.targetOffset = { x: (h.x - b) / E, y: (h.y - b) / E }, this.te = b, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - g.endSpeed / this.v0;
        var x = this.modification, O = this.modifierArg;
        O.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, x.result = x.setAll(O), x.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + x.result.delta.x, y: this.targetOffset.y + x.result.delta.y }), this.onNextFrame(function() {
          return u.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var u = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return u.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(u) {
        var h = this;
        this.timeout = Pt.default.request(function() {
          h.active && u();
        });
      } }, { key: "inertiaTick", value: function() {
        var u, h, g, E, b, x = this, O = this.interaction, I = wa(O).resistance, P = (O._now() - this.t0) / 1e3;
        if (P < this.te) {
          var N, L = 1 - (Math.exp(-I * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (u = this.targetOffset.x, h = this.targetOffset.y, g = this.modifiedOffset.x, E = this.modifiedOffset.y, N = { x: Sc(b = L, 0, u, g), y: Sc(b, 0, h, E) }) : N = { x: this.targetOffset.x * L, y: this.targetOffset.y * L };
          var R = { x: N.x - this.currentOffset.x, y: N.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, O.offsetBy(R), O.move(), this.onNextFrame(function() {
            return x.inertiaTick();
          });
        } else
          O.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var u = this, h = this.interaction, g = h._now() - this.t0, E = wa(h).smoothEndDuration;
        if (g < E) {
          var b = { x: Tc(g, 0, this.targetOffset.x, E), y: Tc(g, 0, this.targetOffset.y, E) }, x = { x: b.x - this.currentOffset.x, y: b.y - this.currentOffset.y };
          this.currentOffset.x += x.x, this.currentOffset.y += x.y, h.offsetBy(x), h.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return u.smoothEndTick();
          });
        } else
          h.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(u) {
        var h = u.pointer, g = u.event, E = u.eventTarget, b = this.interaction;
        b.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), b.updatePointer(h, g, E, true), b._doPhase({ interaction: b, event: g, phase: "resume" }), (0, K.copyCoords)(b.coords.prev, b.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Pt.default.cancel(this.timeout);
      } }]) && Am(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function wa(i) {
      var o = i.interactable, l = i.prepared;
      return o && o.options && l.name && o.options[l.name].inertia;
    }
    __name(wa, "wa");
    c(wa, "dn"), bi.InertiaState = Ec;
    var Pm = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o = i.defaults;
      i.usePlugin(Wn.default), i.usePlugin(Et.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.inertia = new Ec(o);
    }, "interactions:before-action-end": function(i) {
      var o = i.interaction, l = i.event;
      return (!o._interacting || o.simulation || !o.inertia.start(l)) && null;
    }, "interactions:down": function(i) {
      var o = i.interaction, l = i.eventTarget, u = o.inertia;
      if (u.active)
        for (var h = l; s.default.element(h); ) {
          if (h === o.element) {
            u.resume(i);
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
    function Sc(i, o, l, u) {
      var h = 1 - i;
      return h * h * o + 2 * h * i * l + i * i * u;
    }
    __name(Sc, "Sc");
    c(Sc, "vn");
    function Tc(i, o, l, u) {
      return -l * (i /= u) * (i - 2) + o;
    }
    __name(Tc, "Tc");
    c(Tc, "hn");
    var _m = Pm;
    bi.default = _m;
    var ao = {};
    function zm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(zm, "zm");
    c(zm, "mn");
    function so(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(so, "so");
    c(so, "bn");
    function Cc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        if (i.immediatePropagationStopped)
          break;
        u(i);
      }
    }
    __name(Cc, "Cc");
    c(Cc, "xn"), Object.defineProperty(ao, "__esModule", { value: true }), ao.Eventable = void 0;
    var Rm = function() {
      function i(u) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), so(this, "options", void 0), so(this, "types", {}), so(this, "propagationStopped", false), so(this, "immediatePropagationStopped", false), so(this, "global", void 0), this.options = (0, W.default)({}, u || {});
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "fire", value: function(u) {
        var h, g = this.global;
        (h = this.types[u.type]) && Cc(u, h), !u.propagationStopped && g && (h = g[u.type]) && Cc(u, h);
      } }, { key: "on", value: function(u, h) {
        var g = (0, Be.default)(u, h);
        for (u in g)
          this.types[u] = Ae.merge(this.types[u] || [], g[u]);
      } }, { key: "off", value: function(u, h) {
        var g = (0, Be.default)(u, h);
        for (u in g) {
          var E = this.types[u];
          if (E && E.length)
            for (var b = 0; b < g[u].length; b++) {
              var x = g[u][b], O = E.indexOf(x);
              O !== -1 && E.splice(O, 1);
            }
        }
      } }, { key: "getRect", value: function(u) {
        return null;
      } }]) && zm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    ao.Eventable = Rm;
    var lo = {};
    Object.defineProperty(lo, "__esModule", { value: true }), lo.default = function(i, o) {
      if (o.phaselessTypes[i])
        return true;
      for (var l in o.map)
        if (i.indexOf(l) === 0 && i.substr(l.length) in o.phases)
          return true;
      return false;
    };
    var dl = {};
    Object.defineProperty(dl, "__esModule", { value: true }), dl.createInteractStatic = function(i) {
      var o = c(/* @__PURE__ */ __name(function l(u, h) {
        var g = i.interactables.get(u, h);
        return g || ((g = i.interactables.new(u, h)).events.global = l.globalEvents), g;
      }, "l"), "e");
      return o.getPointerAverage = K.pointerAverage, o.getTouchBBox = K.touchBBox, o.getTouchDistance = K.touchDistance, o.getTouchAngle = K.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = i, o.use = function(l, u) {
        return this.scope.usePlugin(l, u), this;
      }, o.isSet = function(l, u) {
        return !!this.scope.interactables.get(l, u && u.context);
      }, o.on = (0, ar.warnOnce)(function(l, u, h) {
        if (s.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), s.default.array(l)) {
          for (var g = 0; g < l.length; g++) {
            var E = l[g];
            this.on(E, u, h);
          }
          return this;
        }
        if (s.default.object(l)) {
          for (var b in l)
            this.on(b, l[b], u);
          return this;
        }
        return (0, lo.default)(l, this.scope.actions) ? this.globalEvents[l] ? this.globalEvents[l].push(u) : this.globalEvents[l] = [u] : this.scope.events.add(this.scope.document, l, u, { options: h }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, ar.warnOnce)(function(l, u, h) {
        if (s.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), s.default.array(l)) {
          for (var g = 0; g < l.length; g++) {
            var E = l[g];
            this.off(E, u, h);
          }
          return this;
        }
        if (s.default.object(l)) {
          for (var b in l)
            this.off(b, l[b], u);
          return this;
        }
        var x;
        return (0, lo.default)(l, this.scope.actions) ? l in this.globalEvents && (x = this.globalEvents[l].indexOf(u)) !== -1 && this.globalEvents[l].splice(x, 1) : this.scope.events.remove(this.scope.document, l, u, h), this;
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
        return s.default.number(l) ? (this.scope.interactions.pointerMoveTolerance = l, this) : this.scope.interactions.pointerMoveTolerance;
      }, o.addDocument = function(l, u) {
        this.scope.addDocument(l, u);
      }, o.removeDocument = function(l) {
        this.scope.removeDocument(l);
      }, o;
    };
    var xa = {};
    function Dm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Dm, "Dm");
    c(Dm, "En");
    function Qr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Qr, "Qr");
    c(Qr, "Sn"), Object.defineProperty(xa, "__esModule", { value: true }), xa.Interactable = void 0;
    var km = function() {
      function i(u, h, g, E) {
        (function(b, x) {
          if (!(b instanceof x))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Qr(this, "options", void 0), Qr(this, "_actions", void 0), Qr(this, "target", void 0), Qr(this, "events", new ao.Eventable()), Qr(this, "_context", void 0), Qr(this, "_win", void 0), Qr(this, "_doc", void 0), Qr(this, "_scopeEvents", void 0), Qr(this, "_rectChecker", void 0), this._actions = h.actions, this.target = u, this._context = h.context || g, this._win = (0, r.getWindow)((0, z.trySelector)(u) ? this._context : u), this._doc = this._win.document, this._scopeEvents = E, this.set(h);
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(u, h) {
        return s.default.func(h.onstart) && this.on("".concat(u, "start"), h.onstart), s.default.func(h.onmove) && this.on("".concat(u, "move"), h.onmove), s.default.func(h.onend) && this.on("".concat(u, "end"), h.onend), s.default.func(h.oninertiastart) && this.on("".concat(u, "inertiastart"), h.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(u, h, g) {
        (s.default.array(h) || s.default.object(h)) && this.off(u, h), (s.default.array(g) || s.default.object(g)) && this.on(u, g);
      } }, { key: "setPerAction", value: function(u, h) {
        var g = this._defaults;
        for (var E in h) {
          var b = E, x = this.options[u], O = h[b];
          b === "listeners" && this.updatePerActionListeners(u, x.listeners, O), s.default.array(O) ? x[b] = Ae.from(O) : s.default.plainObject(O) ? (x[b] = (0, W.default)(x[b] || {}, (0, qn.default)(O)), s.default.object(g.perAction[b]) && "enabled" in g.perAction[b] && (x[b].enabled = O.enabled !== false)) : s.default.bool(O) && s.default.object(g.perAction[b]) ? x[b].enabled = O : x[b] = O;
        }
      } }, { key: "getRect", value: function(u) {
        return u = u || (s.default.element(this.target) ? this.target : null), s.default.string(this.target) && (u = u || this._context.querySelector(this.target)), (0, z.getElementRect)(u);
      } }, { key: "rectChecker", value: function(u) {
        var h = this;
        return s.default.func(u) ? (this._rectChecker = u, this.getRect = function(g) {
          var E = (0, W.default)({}, h._rectChecker(g));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : u === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(u, h) {
        if ((0, z.trySelector)(h) || s.default.object(h)) {
          for (var g in this.options[u] = h, this._actions.map)
            this.options[g][u] = h;
          return this;
        }
        return this.options[u];
      } }, { key: "origin", value: function(u) {
        return this._backCompatOption("origin", u);
      } }, { key: "deltaSource", value: function(u) {
        return u === "page" || u === "client" ? (this.options.deltaSource = u, this) : this.options.deltaSource;
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(u) {
        return this._context === u.ownerDocument || (0, z.nodeContains)(this._context, u);
      } }, { key: "testIgnoreAllow", value: function(u, h, g) {
        return !this.testIgnore(u.ignoreFrom, h, g) && this.testAllow(u.allowFrom, h, g);
      } }, { key: "testAllow", value: function(u, h, g) {
        return !u || !!s.default.element(g) && (s.default.string(u) ? (0, z.matchesUpTo)(g, u, h) : !!s.default.element(u) && (0, z.nodeContains)(u, g));
      } }, { key: "testIgnore", value: function(u, h, g) {
        return !(!u || !s.default.element(g)) && (s.default.string(u) ? (0, z.matchesUpTo)(g, u, h) : !!s.default.element(u) && (0, z.nodeContains)(u, g));
      } }, { key: "fire", value: function(u) {
        return this.events.fire(u), this;
      } }, { key: "_onOff", value: function(u, h, g, E) {
        s.default.object(h) && !s.default.array(h) && (E = g, g = null);
        var b = u === "on" ? "add" : "remove", x = (0, Be.default)(h, g);
        for (var O in x) {
          O === "wheel" && (O = $.default.wheelEvent);
          for (var I = 0; I < x[O].length; I++) {
            var P = x[O][I];
            (0, lo.default)(O, this._actions) ? this.events[u](O, P) : s.default.string(this.target) ? this._scopeEvents["".concat(b, "Delegate")](this.target, this._context, O, P, E) : this._scopeEvents[b](this.target, O, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(u, h, g) {
        return this._onOff("on", u, h, g);
      } }, { key: "off", value: function(u, h, g) {
        return this._onOff("off", u, h, g);
      } }, { key: "set", value: function(u) {
        var h = this._defaults;
        for (var g in s.default.object(u) || (u = {}), this.options = (0, qn.default)(h.base), this._actions.methodDict) {
          var E = g, b = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, W.default)((0, W.default)({}, h.perAction), h.actions[E])), this[b](u[E]);
        }
        for (var x in u)
          s.default.func(this[x]) && this[x](u[x]);
        return this;
      } }, { key: "unset", value: function() {
        if (s.default.string(this.target))
          for (var u in this._scopeEvents.delegatedEvents)
            for (var h = this._scopeEvents.delegatedEvents[u], g = h.length - 1; g >= 0; g--) {
              var E = h[g], b = E.selector, x = E.context, O = E.listeners;
              b === this.target && x === this._context && h.splice(g, 1);
              for (var I = O.length - 1; I >= 0; I--)
                this._scopeEvents.removeDelegate(this.target, this._context, u, O[I][0], O[I][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Dm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    xa.Interactable = km;
    var Ea = {};
    function Nm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Nm, "Nm");
    c(Nm, "Mn");
    function fl(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(fl, "fl");
    c(fl, "kn"), Object.defineProperty(Ea, "__esModule", { value: true }), Ea.InteractableSet = void 0;
    var Gm = function() {
      function i(u) {
        var h = this;
        (function(g, E) {
          if (!(g instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), fl(this, "list", []), fl(this, "selectorMap", {}), fl(this, "scope", void 0), this.scope = u, u.addListeners({ "interactable:unset": function(g) {
          var E = g.interactable, b = E.target, x = E._context, O = s.default.string(b) ? h.selectorMap[b] : b[h.scope.id], I = Ae.findIndex(O, function(P) {
            return P.context === x;
          });
          O[I] && (O[I].context = null, O[I].interactable = null), O.splice(I, 1);
        } });
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "new", value: function(u, h) {
        h = (0, W.default)(h || {}, { actions: this.scope.actions });
        var g = new this.scope.Interactable(u, h, this.scope.document, this.scope.events), E = { context: g._context, interactable: g };
        return this.scope.addDocument(g._doc), this.list.push(g), s.default.string(u) ? (this.selectorMap[u] || (this.selectorMap[u] = []), this.selectorMap[u].push(E)) : (g.target[this.scope.id] || Object.defineProperty(u, this.scope.id, { value: [], configurable: true }), u[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: u, options: h, interactable: g, win: this.scope._win }), g;
      } }, { key: "get", value: function(u, h) {
        var g = h && h.context || this.scope.document, E = s.default.string(u), b = E ? this.selectorMap[u] : u[this.scope.id];
        if (!b)
          return null;
        var x = Ae.find(b, function(O) {
          return O.context === g && (E || O.interactable.inContext(u));
        });
        return x && x.interactable;
      } }, { key: "forEachMatch", value: function(u, h) {
        for (var g = 0; g < this.list.length; g++) {
          var E = this.list[g], b = void 0;
          if ((s.default.string(E.target) ? s.default.element(u) && z.matchesSelector(u, E.target) : u === E.target) && E.inContext(u) && (b = h(E)), b !== void 0)
            return b;
        }
      } }]) && Nm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Ea.InteractableSet = Gm;
    var Sa = {};
    function Lm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Lm, "Lm");
    c(Lm, "An");
    function hl(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(hl, "hl");
    c(hl, "zn");
    function ml(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var g, E, b = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (g = h.next()).done) && (b.push(g.value), !u || b.length !== u); x = true)
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
          return b;
        }
      }(i, o) || function(l, u) {
        if (l) {
          if (typeof l == "string")
            return Oc(l, u);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Oc(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ml, "ml");
    c(ml, "Cn");
    function Oc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Oc, "Oc");
    c(Oc, "Rn"), Object.defineProperty(Sa, "__esModule", { value: true }), Sa.default = void 0;
    var jm = function() {
      function i(u) {
        (function(h, g) {
          if (!(h instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), hl(this, "currentTarget", void 0), hl(this, "originalEvent", void 0), hl(this, "type", void 0), this.originalEvent = u, (0, Xe.default)(this, u);
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Lm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function uo(i) {
      if (!s.default.object(i))
        return { capture: !!i, passive: false };
      var o = (0, W.default)({}, i);
      return o.capture = !!i.capture, o.passive = !!i.passive, o;
    }
    __name(uo, "uo");
    c(uo, "Xn");
    var Bm = { id: "events", install: function(i) {
      var o, l = [], u = {}, h = [], g = { add: E, remove: b, addDelegate: function(I, P, N, L, R) {
        var q = uo(R);
        if (!u[N]) {
          u[N] = [];
          for (var Q = 0; Q < h.length; Q++) {
            var U = h[Q];
            E(U, N, x), E(U, N, O, true);
          }
        }
        var ne = u[N], oe = Ae.find(ne, function(ye) {
          return ye.selector === I && ye.context === P;
        });
        oe || (oe = { selector: I, context: P, listeners: [] }, ne.push(oe)), oe.listeners.push([L, q]);
      }, removeDelegate: function(I, P, N, L, R) {
        var q, Q = uo(R), U = u[N], ne = false;
        if (U)
          for (q = U.length - 1; q >= 0; q--) {
            var oe = U[q];
            if (oe.selector === I && oe.context === P) {
              for (var ye = oe.listeners, ze = ye.length - 1; ze >= 0; ze--) {
                var Ue = ml(ye[ze], 2), Te = Ue[0], $e = Ue[1], gr = $e.capture, Jr = $e.passive;
                if (Te === L && gr === Q.capture && Jr === Q.passive) {
                  ye.splice(ze, 1), ye.length || (U.splice(q, 1), b(P, N, x), b(P, N, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: x, delegateUseCapture: O, delegatedEvents: u, documents: h, targets: l, supportsOptions: false, supportsPassive: false };
      function E(I, P, N, L) {
        var R = uo(L), q = Ae.find(l, function(Q) {
          return Q.eventTarget === I;
        });
        q || (q = { eventTarget: I, events: {} }, l.push(q)), q.events[P] || (q.events[P] = []), I.addEventListener && !Ae.contains(q.events[P], N) && (I.addEventListener(P, N, g.supportsOptions ? R : R.capture), q.events[P].push(N));
      }
      __name(E, "E");
      c(E, "s");
      function b(I, P, N, L) {
        var R = uo(L), q = Ae.findIndex(l, function(ze) {
          return ze.eventTarget === I;
        }), Q = l[q];
        if (Q && Q.events)
          if (P !== "all") {
            var U = false, ne = Q.events[P];
            if (ne) {
              if (N === "all") {
                for (var oe = ne.length - 1; oe >= 0; oe--)
                  b(I, P, ne[oe], R);
                return;
              }
              for (var ye = 0; ye < ne.length; ye++)
                if (ne[ye] === N) {
                  I.removeEventListener(P, N, g.supportsOptions ? R : R.capture), ne.splice(ye, 1), ne.length === 0 && (delete Q.events[P], U = true);
                  break;
                }
            }
            U && !Object.keys(Q.events).length && l.splice(q, 1);
          } else
            for (P in Q.events)
              Q.events.hasOwnProperty(P) && b(I, P, "all");
      }
      __name(b, "b");
      c(b, "l");
      function x(I, P) {
        for (var N = uo(P), L = new jm(I), R = u[I.type], q = ml(K.getEventTargets(I), 1)[0], Q = q; s.default.element(Q); ) {
          for (var U = 0; U < R.length; U++) {
            var ne = R[U], oe = ne.selector, ye = ne.context;
            if (z.matchesSelector(Q, oe) && z.nodeContains(ye, q) && z.nodeContains(ye, Q)) {
              var ze = ne.listeners;
              L.currentTarget = Q;
              for (var Ue = 0; Ue < ze.length; Ue++) {
                var Te = ml(ze[Ue], 2), $e = Te[0], gr = Te[1], Jr = gr.capture, kl = gr.passive;
                Jr === N.capture && kl === N.passive && $e(L);
              }
            }
          }
          Q = z.parentNode(Q);
        }
      }
      __name(x, "x");
      c(x, "u");
      function O(I) {
        return x(I, true);
      }
      __name(O, "O");
      return c(O, "c"), (o = i.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return g.supportsOptions = true;
      }, get passive() {
        return g.supportsPassive = true;
      } }), i.events = g, g;
    } };
    Sa.default = Bm;
    var Ta = {};
    Object.defineProperty(Ta, "__esModule", { value: true }), Ta.default = void 0;
    var Ca = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(i) {
      for (var o = 0; o < Ca.methodOrder.length; o++) {
        var l;
        l = Ca.methodOrder[o];
        var u = Ca[l](i);
        if (u)
          return u;
      }
      return null;
    }, simulationResume: function(i) {
      var o = i.pointerType, l = i.eventType, u = i.eventTarget, h = i.scope;
      if (!/down|start/i.test(l))
        return null;
      for (var g = 0; g < h.interactions.list.length; g++) {
        var E = h.interactions.list[g], b = u;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; b; ) {
            if (b === E.element)
              return E;
            b = z.parentNode(b);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var o, l = i.pointerId, u = i.pointerType, h = i.eventType, g = i.scope;
      if (u !== "mouse" && u !== "pen")
        return null;
      for (var E = 0; E < g.interactions.list.length; E++) {
        var b = g.interactions.list[E];
        if (b.pointerType === u) {
          if (b.simulation && !Mc(b, l))
            continue;
          if (b.interacting())
            return b;
          o || (o = b);
        }
      }
      if (o)
        return o;
      for (var x = 0; x < g.interactions.list.length; x++) {
        var O = g.interactions.list[x];
        if (!(O.pointerType !== u || /down/i.test(h) && O.simulation))
          return O;
      }
      return null;
    }, hasPointer: function(i) {
      for (var o = i.pointerId, l = i.scope, u = 0; u < l.interactions.list.length; u++) {
        var h = l.interactions.list[u];
        if (Mc(h, o))
          return h;
      }
      return null;
    }, idle: function(i) {
      for (var o = i.pointerType, l = i.scope, u = 0; u < l.interactions.list.length; u++) {
        var h = l.interactions.list[u];
        if (h.pointers.length === 1) {
          var g = h.interactable;
          if (g && (!g.options.gesture || !g.options.gesture.enabled))
            continue;
        } else if (h.pointers.length >= 2)
          continue;
        if (!h.interacting() && o === h.pointerType)
          return h;
      }
      return null;
    } };
    function Mc(i, o) {
      return i.pointers.some(function(l) {
        return l.id === o;
      });
    }
    __name(Mc, "Mc");
    c(Mc, "Ln");
    var Hm = Ca;
    Ta.default = Hm;
    var Oa = {};
    function vl(i) {
      return vl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, vl(i);
    }
    __name(vl, "vl");
    c(vl, "Nn");
    function Ic(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var g, E, b = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (g = h.next()).done) && (b.push(g.value), !u || b.length !== u); x = true)
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
          return b;
        }
      }(i, o) || function(l, u) {
        if (l) {
          if (typeof l == "string")
            return Ac(l, u);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? Ac(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Ic, "Ic");
    c(Ic, "qn");
    function Ac(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Ac, "Ac");
    c(Ac, "Gn");
    function $m(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name($m, "$m");
    c($m, "$n");
    function qm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(qm, "qm");
    c(qm, "Hn");
    function gl(i, o) {
      return gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, gl(i, o);
    }
    __name(gl, "gl");
    c(gl, "Kn");
    function Fm(i, o) {
      if (o && (vl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(Fm, "Fm");
    c(Fm, "Zn");
    function Ma(i) {
      return Ma = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ma(i);
    }
    __name(Ma, "Ma");
    c(Ma, "Jn"), Object.defineProperty(Oa, "__esModule", { value: true }), Oa.default = void 0;
    var bl = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Pc(i, o) {
      return function(l) {
        var u = o.interactions.list, h = K.getPointerType(l), g = Ic(K.getEventTargets(l), 2), E = g[0], b = g[1], x = [];
        if (/^touch/.test(l.type)) {
          o.prevTouchTime = o.now();
          for (var O = 0; O < l.changedTouches.length; O++) {
            var I = l.changedTouches[O], P = { pointer: I, pointerId: K.getPointerId(I), pointerType: h, eventType: l.type, eventTarget: E, curEventTarget: b, scope: o }, N = _c(P);
            x.push([P.pointer, P.eventTarget, P.curEventTarget, N]);
          }
        } else {
          var L = false;
          if (!$.default.supportsPointerEvent && /mouse/.test(l.type)) {
            for (var R = 0; R < u.length && !L; R++)
              L = u[R].pointerType !== "mouse" && u[R].pointerIsDown;
            L = L || o.now() - o.prevTouchTime < 500 || l.timeStamp === 0;
          }
          if (!L) {
            var q = { pointer: l, pointerId: K.getPointerId(l), pointerType: h, eventType: l.type, curEventTarget: b, eventTarget: E, scope: o }, Q = _c(q);
            x.push([q.pointer, q.eventTarget, q.curEventTarget, Q]);
          }
        }
        for (var U = 0; U < x.length; U++) {
          var ne = Ic(x[U], 4), oe = ne[0], ye = ne[1], ze = ne[2];
          ne[3][i](oe, l, ye, ze);
        }
      };
    }
    __name(Pc, "Pc");
    c(Pc, "tr");
    function _c(i) {
      var o = i.pointerType, l = i.scope, u = { interaction: Ta.default.search(i), searchDetails: i };
      return l.fire("interactions:find", u), u.interaction || l.interactions.new({ pointerType: o });
    }
    __name(_c, "_c");
    c(_c, "er");
    function yl(i, o) {
      var l = i.doc, u = i.scope, h = i.options, g = u.interactions.docEvents, E = u.events, b = E[o];
      for (var x in u.browser.isIOS && !h.events && (h.events = { passive: false }), E.delegatedEvents)
        b(l, x, E.delegateListener), b(l, x, E.delegateUseCapture, true);
      for (var O = h && h.events, I = 0; I < g.length; I++) {
        var P = g[I];
        b(l, P.type, P.listener, O);
      }
    }
    __name(yl, "yl");
    c(yl, "nr");
    var Um = { id: "core/interactions", install: function(i) {
      for (var o = {}, l = 0; l < bl.length; l++) {
        var u = bl[l];
        o[u] = Pc(u, i);
      }
      var h, g = $.default.pEventTypes;
      function E() {
        for (var b = 0; b < i.interactions.list.length; b++) {
          var x = i.interactions.list[b];
          if (x.pointerIsDown && x.pointerType === "touch" && !x._interacting)
            for (var O = function() {
              var P = x.pointers[I];
              i.documents.some(function(N) {
                var L = N.doc;
                return (0, z.nodeContains)(L, P.downTarget);
              }) || x.removePointer(P.pointer, P.event);
            }, I = 0; I < x.pointers.length; I++)
              O();
        }
      }
      __name(E, "E");
      c(E, "a"), (h = C.default.PointerEvent ? [{ type: g.down, listener: E }, { type: g.down, listener: o.pointerDown }, { type: g.move, listener: o.pointerMove }, { type: g.up, listener: o.pointerUp }, { type: g.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(b) {
        for (var x = 0; x < i.interactions.list.length; x++)
          i.interactions.list[x].documentBlur(b);
      } }), i.prevTouchTime = 0, i.Interaction = function(b) {
        (function(R, q) {
          if (typeof q != "function" && q !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(q && q.prototype, { constructor: { value: R, writable: true, configurable: true } }), Object.defineProperty(R, "prototype", { writable: false }), q && gl(R, q);
        })(L, b);
        var x, O, I, P, N = (I = L, P = function() {
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
          var R, q = Ma(I);
          if (P) {
            var Q = Ma(this).constructor;
            R = Reflect.construct(q, arguments, Q);
          } else
            R = q.apply(this, arguments);
          return Fm(this, R);
        });
        function L() {
          return $m(this, L), N.apply(this, arguments);
        }
        __name(L, "L");
        return c(L, "s"), x = L, (O = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(R) {
          i.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && qm(x.prototype, O), Object.defineProperty(x, "prototype", { writable: false }), L;
      }(Ft.default), i.interactions = { list: [], new: function(b) {
        b.scopeFire = function(O, I) {
          return i.fire(O, I);
        };
        var x = new i.Interaction(b);
        return i.interactions.list.push(x), x;
      }, listeners: o, docEvents: h, pointerMoveTolerance: 1 }, i.usePlugin(gi.default);
    }, listeners: { "scope:add-document": function(i) {
      return yl(i, "add");
    }, "scope:remove-document": function(i) {
      return yl(i, "remove");
    }, "interactable:unset": function(i, o) {
      for (var l = i.interactable, u = o.interactions.list.length - 1; u >= 0; u--) {
        var h = o.interactions.list[u];
        h.interactable === l && (h.stop(), o.fire("interactions:destroy", { interaction: h }), h.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(u, 1));
      }
    } }, onDocSignal: yl, doOnInteractions: Pc, methodNames: bl }, Wm = Um;
    Oa.default = Wm;
    var co = {};
    function wl(i) {
      return wl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, wl(i);
    }
    __name(wl, "wl");
    c(wl, "ar");
    function po() {
      return po = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, o, l) {
        var u = Vm(i, o);
        if (u) {
          var h = Object.getOwnPropertyDescriptor(u, o);
          return h.get ? h.get.call(arguments.length < 3 ? i : l) : h.value;
        }
      }, po.apply(this, arguments);
    }
    __name(po, "po");
    c(po, "sr");
    function Vm(i, o) {
      for (; !Object.prototype.hasOwnProperty.call(i, o) && (i = bn(i)) !== null; )
        ;
      return i;
    }
    __name(Vm, "Vm");
    c(Vm, "lr");
    function xl(i, o) {
      return xl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, xl(i, o);
    }
    __name(xl, "xl");
    c(xl, "ur");
    function Ym(i, o) {
      if (o && (wl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(Ym, "Ym");
    c(Ym, "cr");
    function bn(i) {
      return bn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, bn(i);
    }
    __name(bn, "bn");
    c(bn, "fr");
    function zc(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(zc, "zc");
    c(zc, "dr");
    function Rc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Rc, "Rc");
    c(Rc, "pr");
    function Dc(i, o, l) {
      return o && Rc(i.prototype, o), l && Rc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Dc, "Dc");
    c(Dc, "vr");
    function St(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(St, "St");
    c(St, "hr"), Object.defineProperty(co, "__esModule", { value: true }), co.Scope = void 0, co.initScope = kc;
    var Xm = function() {
      function i() {
        var o = this;
        zc(this, i), St(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), St(this, "isInitialized", false), St(this, "listenerMaps", []), St(this, "browser", $.default), St(this, "defaults", (0, qn.default)(ro.defaults)), St(this, "Eventable", ao.Eventable), St(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), St(this, "interactStatic", (0, dl.createInteractStatic)(this)), St(this, "InteractEvent", no.InteractEvent), St(this, "Interactable", void 0), St(this, "interactables", new Ea.InteractableSet(this)), St(this, "_win", void 0), St(this, "document", void 0), St(this, "window", void 0), St(this, "documents", []), St(this, "_plugins", { list: [], map: {} }), St(this, "onWindowUnload", function(u) {
          return o.removeDocument(u.target);
        });
        var l = this;
        this.Interactable = function(u) {
          (function(x, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function");
            x.prototype = Object.create(O && O.prototype, { constructor: { value: x, writable: true, configurable: true } }), Object.defineProperty(x, "prototype", { writable: false }), O && xl(x, O);
          })(b, u);
          var h, g, E = (h = b, g = function() {
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
            if (g) {
              var I = bn(this).constructor;
              x = Reflect.construct(O, arguments, I);
            } else
              x = O.apply(this, arguments);
            return Ym(this, x);
          });
          function b() {
            return zc(this, b), E.apply(this, arguments);
          }
          __name(b, "b");
          return c(b, "i"), Dc(b, [{ key: "_defaults", get: function() {
            return l.defaults;
          } }, { key: "set", value: function(x) {
            return po(bn(b.prototype), "set", this).call(this, x), l.fire("interactable:set", { options: x, interactable: this }), this;
          } }, { key: "unset", value: function() {
            po(bn(b.prototype), "unset", this).call(this);
            var x = l.interactables.list.indexOf(this);
            x < 0 || (po(bn(b.prototype), "unset", this).call(this), l.interactables.list.splice(x, 1), l.fire("interactable:unset", { interactable: this }));
          } }]), b;
        }(xa.Interactable);
      }
      __name(i, "i");
      return c(i, "t"), Dc(i, [{ key: "addListeners", value: function(o, l) {
        this.listenerMaps.push({ id: l, map: o });
      } }, { key: "fire", value: function(o, l) {
        for (var u = 0; u < this.listenerMaps.length; u++) {
          var h = this.listenerMaps[u].map[o];
          if (h && h(l, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : kc(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, l) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, l), o.listeners && o.before) {
          for (var u = 0, h = this.listenerMaps.length, g = o.before.reduce(function(b, x) {
            return b[x] = true, b[Nc(x)] = true, b;
          }, {}); u < h; u++) {
            var E = this.listenerMaps[u].id;
            if (g[E] || g[Nc(E)])
              break;
          }
          this.listenerMaps.splice(u, 0, { id: o.id, map: o.listeners });
        } else
          o.listeners && this.listenerMaps.push({ id: o.id, map: o.listeners });
        return this;
      } }, { key: "addDocument", value: function(o, l) {
        if (this.getDocIndex(o) !== -1)
          return false;
        var u = r.getWindow(o);
        l = l ? (0, W.default)({}, l) : {}, this.documents.push({ doc: o, options: l }), this.events.documents.push(o), o !== this.document && this.events.add(u, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o, window: u, scope: this, options: l });
      } }, { key: "removeDocument", value: function(o) {
        var l = this.getDocIndex(o), u = r.getWindow(o), h = this.documents[l].options;
        this.events.remove(u, "unload", this.onWindowUnload), this.documents.splice(l, 1), this.events.documents.splice(l, 1), this.fire("scope:remove-document", { doc: o, window: u, scope: this, options: h });
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
    function kc(i, o) {
      return i.isInitialized = true, s.default.window(o) && r.init(o), C.default.init(o), $.default.init(o), Pt.default.init(o), i.window = o, i.document = o.document, i.usePlugin(Oa.default), i.usePlugin(Sa.default), i;
    }
    __name(kc, "kc");
    c(kc, "yr");
    function Nc(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(Nc, "Nc");
    c(Nc, "mr"), co.Scope = Xm;
    var El = {}, ct = {};
    Object.defineProperty(ct, "__esModule", { value: true });
    var Zm = {};
    ct.default = void 0, Object.keys(El).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(Zm, i) || i in ct && ct[i] === El[i] || Object.defineProperty(ct, i, { enumerable: true, get: function() {
        return El[i];
      } }));
    });
    var Gc = new co.Scope(), Qm = Gc.interactStatic;
    ct.default = Qm;
    var Km = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Gc.init(Km);
    var Ia = {};
    Object.defineProperty(Ia, "__esModule", { value: true }), Ia.default = void 0, Ia.default = function() {
    };
    var Aa = {};
    Object.defineProperty(Aa, "__esModule", { value: true }), Aa.default = void 0, Aa.default = function() {
    };
    var Pa = {};
    function Lc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var h = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (h != null) {
          var g, E, b = [], x = true, O = false;
          try {
            for (h = h.call(l); !(x = (g = h.next()).done) && (b.push(g.value), !u || b.length !== u); x = true)
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
          return b;
        }
      }(i, o) || function(l, u) {
        if (l) {
          if (typeof l == "string")
            return jc(l, u);
          var h = Object.prototype.toString.call(l).slice(8, -1);
          return h === "Object" && l.constructor && (h = l.constructor.name), h === "Map" || h === "Set" ? Array.from(l) : h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h) ? jc(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Lc, "Lc");
    c(Lc, "jr");
    function jc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(jc, "jc");
    c(jc, "Mr"), Object.defineProperty(Pa, "__esModule", { value: true }), Pa.default = void 0, Pa.default = function(i) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(u) {
        var h = Lc(u, 2), g = h[0], E = h[1];
        return g in i || E in i;
      }), l = c(function(u, h) {
        for (var g = i.range, E = i.limits, b = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, x = i.offset, O = x === void 0 ? { x: 0, y: 0 } : x, I = { range: g, grid: i, x: null, y: null }, P = 0; P < o.length; P++) {
          var N = Lc(o[P], 2), L = N[0], R = N[1], q = Math.round((u - O.x) / i[L]), Q = Math.round((h - O.y) / i[R]);
          I[L] = Math.max(b.left, Math.min(b.right, q * i[L] + O.x)), I[R] = Math.max(b.top, Math.min(b.bottom, Q * i[R] + O.y));
        }
        return I;
      }, "n");
      return l.grid = i, l.coordFields = o, l;
    };
    var fo = {};
    Object.defineProperty(fo, "__esModule", { value: true }), Object.defineProperty(fo, "edgeTarget", { enumerable: true, get: function() {
      return Ia.default;
    } }), Object.defineProperty(fo, "elements", { enumerable: true, get: function() {
      return Aa.default;
    } }), Object.defineProperty(fo, "grid", { enumerable: true, get: function() {
      return Pa.default;
    } });
    var _a = {};
    Object.defineProperty(_a, "__esModule", { value: true }), _a.default = void 0;
    var Jm = { id: "snappers", install: function(i) {
      var o = i.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, fo), o.createSnapGrid = o.snappers.grid;
    } }, ev = Jm;
    _a.default = ev;
    var yi = {};
    function Bc(i, o) {
      var l = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(i);
        o && (u = u.filter(function(h) {
          return Object.getOwnPropertyDescriptor(i, h).enumerable;
        })), l.push.apply(l, u);
      }
      return l;
    }
    __name(Bc, "Bc");
    c(Bc, "Cr");
    function Sl(i) {
      for (var o = 1; o < arguments.length; o++) {
        var l = arguments[o] != null ? arguments[o] : {};
        o % 2 ? Bc(Object(l), true).forEach(function(u) {
          tv(i, u, l[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : Bc(Object(l)).forEach(function(u) {
          Object.defineProperty(i, u, Object.getOwnPropertyDescriptor(l, u));
        });
      }
      return i;
    }
    __name(Sl, "Sl");
    c(Sl, "Rr");
    function tv(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(tv, "tv");
    c(tv, "Fr"), Object.defineProperty(yi, "__esModule", { value: true }), yi.default = yi.aspectRatio = void 0;
    var Hc = { start: function(i) {
      var o = i.state, l = i.rect, u = i.edges, h = i.pageCoords, g = o.options.ratio, E = o.options, b = E.equalDelta, x = E.modifiers;
      g === "preserve" && (g = l.width / l.height), o.startCoords = (0, W.default)({}, h), o.startRect = (0, W.default)({}, l), o.ratio = g, o.equalDelta = b;
      var O = o.linkedEdges = { top: u.top || u.left && !u.bottom, left: u.left || u.top && !u.right, bottom: u.bottom || u.right && !u.top, right: u.right || u.bottom && !u.left };
      if (o.xIsPrimaryAxis = !(!u.left && !u.right), o.equalDelta) {
        var I = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        o.edgeSign = { x: I, y: I };
      } else
        o.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, W.default)(i.edges, O), x && x.length) {
        var P = new Fn.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(x), o.subModification = P, P.startAll(Sl({}, i));
      }
    }, set: function(i) {
      var o = i.state, l = i.rect, u = i.coords, h = (0, W.default)({}, u), g = o.equalDelta ? rv : nv;
      if (g(o, o.xIsPrimaryAxis, u, l), !o.subModification)
        return null;
      var E = (0, W.default)({}, l);
      (0, ue.addEdges)(o.linkedEdges, E, { x: u.x - h.x, y: u.y - h.y });
      var b = o.subModification.setAll(Sl(Sl({}, i), {}, { rect: E, edges: o.linkedEdges, pageCoords: u, prevCoords: u, prevRect: E })), x = b.delta;
      return b.changed && (g(o, Math.abs(x.x) > Math.abs(x.y), b.coords, b.rect), (0, W.default)(u, b.coords)), b.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function rv(i, o, l) {
      var u = i.startCoords, h = i.edgeSign;
      o ? l.y = u.y + (l.x - u.x) * h.y : l.x = u.x + (l.y - u.y) * h.x;
    }
    __name(rv, "rv");
    c(rv, "Br");
    function nv(i, o, l, u) {
      var h = i.startRect, g = i.startCoords, E = i.ratio, b = i.edgeSign;
      if (o) {
        var x = u.width / E;
        l.y = g.y + (x - h.height) * b.y;
      } else {
        var O = u.height * E;
        l.x = g.x + (O - h.width) * b.x;
      }
    }
    __name(nv, "nv");
    c(nv, "Yr"), yi.aspectRatio = Hc;
    var iv = (0, Et.makeModifier)(Hc, "aspectRatio");
    yi.default = iv;
    var Vn = {};
    Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = void 0;
    var $c = c(function() {
    }, "Ur");
    $c._defaults = {};
    var ov = $c;
    Vn.default = ov;
    var Tl = {};
    Object.defineProperty(Tl, "__esModule", { value: true }), Object.defineProperty(Tl, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var Gt = {};
    function Cl(i, o, l) {
      return s.default.func(i) ? ue.resolveRectLike(i, o.interactable, o.element, [l.x, l.y, o]) : ue.resolveRectLike(i, o.interactable, o.element);
    }
    __name(Cl, "Cl");
    c(Cl, "Gr"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0, Gt.getRestrictionRect = Cl, Gt.restrict = void 0;
    var qc = { start: function(i) {
      var o = i.rect, l = i.startOffset, u = i.state, h = i.interaction, g = i.pageCoords, E = u.options, b = E.elementRect, x = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && b) {
        var O = Cl(E.restriction, h, g);
        if (O) {
          var I = O.right - O.left - o.width, P = O.bottom - O.top - o.height;
          I < 0 && (x.left += I, x.right += I), P < 0 && (x.top += P, x.bottom += P);
        }
        x.left += l.left - o.width * b.left, x.top += l.top - o.height * b.top, x.right += l.right - o.width * (1 - b.right), x.bottom += l.bottom - o.height * (1 - b.bottom);
      }
      u.offset = x;
    }, set: function(i) {
      var o = i.coords, l = i.interaction, u = i.state, h = u.options, g = u.offset, E = Cl(h.restriction, l, o);
      if (E) {
        var b = ue.xywhToTlbr(E);
        o.x = Math.max(Math.min(b.right - g.right, o.x), b.left + g.left), o.y = Math.max(Math.min(b.bottom - g.bottom, o.y), b.top + g.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Gt.restrict = qc;
    var av = (0, Et.makeModifier)(qc, "restrict");
    Gt.default = av;
    var Gr = {};
    Object.defineProperty(Gr, "__esModule", { value: true }), Gr.restrictEdges = Gr.default = void 0;
    var Fc = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Uc = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function Wc(i, o) {
      for (var l = ["top", "left", "bottom", "right"], u = 0; u < l.length; u++) {
        var h = l[u];
        h in i || (i[h] = o[h]);
      }
      return i;
    }
    __name(Wc, "Wc");
    c(Wc, "Qr");
    var Vc = { noInner: Fc, noOuter: Uc, start: function(i) {
      var o, l = i.interaction, u = i.startOffset, h = i.state, g = h.options;
      if (g) {
        var E = (0, Gt.getRestrictionRect)(g.offset, l, l.coords.start.page);
        o = ue.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, h.offset = { top: o.y + u.top, left: o.x + u.left, bottom: o.y - u.bottom, right: o.x - u.right };
    }, set: function(i) {
      var o = i.coords, l = i.edges, u = i.interaction, h = i.state, g = h.offset, E = h.options;
      if (l) {
        var b = (0, W.default)({}, o), x = (0, Gt.getRestrictionRect)(E.inner, u, b) || {}, O = (0, Gt.getRestrictionRect)(E.outer, u, b) || {};
        Wc(x, Fc), Wc(O, Uc), l.top ? o.y = Math.min(Math.max(O.top + g.top, b.y), x.top + g.top) : l.bottom && (o.y = Math.max(Math.min(O.bottom + g.bottom, b.y), x.bottom + g.bottom)), l.left ? o.x = Math.min(Math.max(O.left + g.left, b.x), x.left + g.left) : l.right && (o.x = Math.max(Math.min(O.right + g.right, b.x), x.right + g.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Gr.restrictEdges = Vc;
    var sv = (0, Et.makeModifier)(Vc, "restrictEdges");
    Gr.default = sv;
    var wi = {};
    Object.defineProperty(wi, "__esModule", { value: true }), wi.restrictRect = wi.default = void 0;
    var lv = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Gt.restrict.defaults), Yc = { start: Gt.restrict.start, set: Gt.restrict.set, defaults: lv };
    wi.restrictRect = Yc;
    var uv = (0, Et.makeModifier)(Yc, "restrictRect");
    wi.default = uv;
    var xi = {};
    Object.defineProperty(xi, "__esModule", { value: true }), xi.restrictSize = xi.default = void 0;
    var cv = { width: -1 / 0, height: -1 / 0 }, pv = { width: 1 / 0, height: 1 / 0 }, Xc = { start: function(i) {
      return Gr.restrictEdges.start(i);
    }, set: function(i) {
      var o = i.interaction, l = i.state, u = i.rect, h = i.edges, g = l.options;
      if (h) {
        var E = ue.tlbrToXywh((0, Gt.getRestrictionRect)(g.min, o, i.coords)) || cv, b = ue.tlbrToXywh((0, Gt.getRestrictionRect)(g.max, o, i.coords)) || pv;
        l.options = { endOnly: g.endOnly, inner: (0, W.default)({}, Gr.restrictEdges.noInner), outer: (0, W.default)({}, Gr.restrictEdges.noOuter) }, h.top ? (l.options.inner.top = u.bottom - E.height, l.options.outer.top = u.bottom - b.height) : h.bottom && (l.options.inner.bottom = u.top + E.height, l.options.outer.bottom = u.top + b.height), h.left ? (l.options.inner.left = u.right - E.width, l.options.outer.left = u.right - b.width) : h.right && (l.options.inner.right = u.left + E.width, l.options.outer.right = u.left + b.width), Gr.restrictEdges.set(i), l.options = g;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    xi.restrictSize = Xc;
    var dv = (0, Et.makeModifier)(Xc, "restrictSize");
    xi.default = dv;
    var Ol = {};
    Object.defineProperty(Ol, "__esModule", { value: true }), Object.defineProperty(Ol, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var yn = {};
    Object.defineProperty(yn, "__esModule", { value: true }), yn.snap = yn.default = void 0;
    var Zc = { start: function(i) {
      var o, l = i.interaction, u = i.interactable, h = i.element, g = i.rect, E = i.state, b = i.startOffset, x = E.options, O = x.offsetWithOrigin ? function(N) {
        var L = N.interaction.element;
        return (0, ue.rectToXY)((0, ue.resolveRectLike)(N.state.options.origin, null, null, [L])) || (0, Ne.default)(N.interactable, L, N.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (x.offset === "startCoords")
        o = { x: l.coords.start.page.x, y: l.coords.start.page.y };
      else {
        var I = (0, ue.resolveRectLike)(x.offset, u, h, [l]);
        (o = (0, ue.rectToXY)(I) || { x: 0, y: 0 }).x += O.x, o.y += O.y;
      }
      var P = x.relativePoints;
      E.offsets = g && P && P.length ? P.map(function(N, L) {
        return { index: L, relativePoint: N, x: b.left - g.width * N.x + o.x, y: b.top - g.height * N.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(i) {
      var o = i.interaction, l = i.coords, u = i.state, h = u.options, g = u.offsets, E = (0, Ne.default)(o.interactable, o.element, o.prepared.name), b = (0, W.default)({}, l), x = [];
      h.offsetWithOrigin || (b.x -= E.x, b.y -= E.y);
      for (var O = 0; O < g.length; O++)
        for (var I = g[O], P = b.x - I.x, N = b.y - I.y, L = 0, R = h.targets.length; L < R; L++) {
          var q, Q = h.targets[L];
          (q = s.default.func(Q) ? Q(P, N, o._proxy, I, L) : Q) && x.push({ x: (s.default.number(q.x) ? q.x : P) + I.x, y: (s.default.number(q.y) ? q.y : N) + I.y, range: s.default.number(q.range) ? q.range : h.range, source: Q, index: L, offset: I });
        }
      for (var U = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < x.length; ne++) {
        var oe = x[ne], ye = oe.range, ze = oe.x - b.x, Ue = oe.y - b.y, Te = (0, Ke.default)(ze, Ue), $e = Te <= ye;
        ye === 1 / 0 && U.inRange && U.range !== 1 / 0 && ($e = false), U.target && !($e ? U.inRange && ye !== 1 / 0 ? Te / ye < U.distance / U.range : ye === 1 / 0 && U.range !== 1 / 0 || Te < U.distance : !U.inRange && Te < U.distance) || (U.target = oe, U.distance = Te, U.range = ye, U.inRange = $e, U.delta.x = ze, U.delta.y = Ue);
      }
      return U.inRange && (l.x = U.target.x, l.y = U.target.y), u.closest = U, U;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    yn.snap = Zc;
    var fv = (0, Et.makeModifier)(Zc, "snap");
    yn.default = fv;
    var Kr = {};
    function Qc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Qc, "Qc");
    c(Qc, "yo"), Object.defineProperty(Kr, "__esModule", { value: true }), Kr.snapSize = Kr.default = void 0;
    var Kc = { start: function(i) {
      var o = i.state, l = i.edges, u = o.options;
      if (!l)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }], offset: u.offset || "self", origin: { x: 0, y: 0 }, range: u.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], yn.snap.start(i), o.offsets = i.state.offsets, i.state = o;
    }, set: function(i) {
      var o, l, u = i.interaction, h = i.state, g = i.coords, E = h.options, b = h.offsets, x = { x: g.x - b[0].x, y: g.y - b[0].y };
      h.options = (0, W.default)({}, E), h.options.targets = [];
      for (var O = 0; O < (E.targets || []).length; O++) {
        var I = (E.targets || [])[O], P = void 0;
        if (P = s.default.func(I) ? I(x.x, x.y, u) : I) {
          for (var N = 0; N < h.targetFields.length; N++) {
            var L = (o = h.targetFields[N], l = 2, function(U) {
              if (Array.isArray(U))
                return U;
            }(o) || function(U, ne) {
              var oe = U == null ? null : typeof Symbol != "undefined" && U[Symbol.iterator] || U["@@iterator"];
              if (oe != null) {
                var ye, ze, Ue = [], Te = true, $e = false;
                try {
                  for (oe = oe.call(U); !(Te = (ye = oe.next()).done) && (Ue.push(ye.value), !ne || Ue.length !== ne); Te = true)
                    ;
                } catch (gr) {
                  $e = true, ze = gr;
                } finally {
                  try {
                    Te || oe.return == null || oe.return();
                  } finally {
                    if ($e)
                      throw ze;
                  }
                }
                return Ue;
              }
            }(o, l) || function(U, ne) {
              if (U) {
                if (typeof U == "string")
                  return Qc(U, ne);
                var oe = Object.prototype.toString.call(U).slice(8, -1);
                return oe === "Object" && U.constructor && (oe = U.constructor.name), oe === "Map" || oe === "Set" ? Array.from(U) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Qc(U, ne) : void 0;
              }
            }(o, l) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = L[0], q = L[1];
            if (R in P || q in P) {
              P.x = P[R], P.y = P[q];
              break;
            }
          }
          h.options.targets.push(P);
        }
      }
      var Q = yn.snap.set(i);
      return h.options = E, Q;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Kr.snapSize = Kc;
    var hv = (0, Et.makeModifier)(Kc, "snapSize");
    Kr.default = hv;
    var Ei = {};
    Object.defineProperty(Ei, "__esModule", { value: true }), Ei.snapEdges = Ei.default = void 0;
    var Jc = { start: function(i) {
      var o = i.edges;
      return o ? (i.state.targetFields = i.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Kr.snapSize.start(i)) : null;
    }, set: Kr.snapSize.set, defaults: (0, W.default)((0, qn.default)(Kr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Ei.snapEdges = Jc;
    var mv = (0, Et.makeModifier)(Jc, "snapEdges");
    Ei.default = mv;
    var Ml = {};
    Object.defineProperty(Ml, "__esModule", { value: true }), Object.defineProperty(Ml, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var Il = {};
    Object.defineProperty(Il, "__esModule", { value: true }), Object.defineProperty(Il, "default", { enumerable: true, get: function() {
      return Vn.default;
    } });
    var Si = {};
    Object.defineProperty(Si, "__esModule", { value: true }), Si.default = void 0;
    var vv = { aspectRatio: yi.default, restrictEdges: Gr.default, restrict: Gt.default, restrictRect: wi.default, restrictSize: xi.default, snapEdges: Ei.default, snap: yn.default, snapSize: Kr.default, spring: Ml.default, avoid: Tl.default, transform: Il.default, rubberband: Ol.default };
    Si.default = vv;
    var za = {};
    Object.defineProperty(za, "__esModule", { value: true }), za.default = void 0;
    var gv = { id: "modifiers", install: function(i) {
      var o = i.interactStatic;
      for (var l in i.usePlugin(Et.default), i.usePlugin(_a.default), o.modifiers = Si.default, Si.default) {
        var u = Si.default[l], h = u._defaults, g = u._methods;
        h._methods = g, i.defaults.perAction[l] = h;
      }
    } }, bv = gv;
    za.default = bv;
    var Yn = {};
    function Al(i) {
      return Al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Al(i);
    }
    __name(Al, "Al");
    c(Al, "Io");
    function yv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(yv, "yv");
    c(yv, "Do");
    function Pl(i, o) {
      return Pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, Pl(i, o);
    }
    __name(Pl, "Pl");
    c(Pl, "Ao");
    function wv(i, o) {
      if (o && (Al(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return _l(i);
    }
    __name(wv, "wv");
    c(wv, "zo");
    function _l(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(_l, "_l");
    c(_l, "Co");
    function Ra(i) {
      return Ra = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Ra(i);
    }
    __name(Ra, "Ra");
    c(Ra, "Ro"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.default = Yn.PointerEvent = void 0;
    var xv = function(i) {
      (function(b, x) {
        if (typeof x != "function" && x !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(x && x.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), x && Pl(b, x);
      })(E, i);
      var o, l, u, h, g = (u = E, h = function() {
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
        var b, x = Ra(u);
        if (h) {
          var O = Ra(this).constructor;
          b = Reflect.construct(x, arguments, O);
        } else
          b = x.apply(this, arguments);
        return wv(this, b);
      });
      function E(b, x, O, I, P, N) {
        var L;
        if (function(Q, U) {
          if (!(Q instanceof U))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), L = g.call(this, P), K.pointerExtend(_l(L), O), O !== x && K.pointerExtend(_l(L), x), L.timeStamp = N, L.originalEvent = O, L.type = b, L.pointerId = K.getPointerId(x), L.pointerType = K.getPointerType(x), L.target = I, L.currentTarget = null, b === "tap") {
          var R = P.getPointerIndex(x);
          L.dt = L.timeStamp - P.pointers[R].downTime;
          var q = L.timeStamp - P.tapTime;
          L.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === L.target && q < 500;
        } else
          b === "doubletap" && (L.dt = x.timeStamp - P.tapTime, L.double = true);
        return L;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (l = [{ key: "_subtractOrigin", value: function(b) {
        var x = b.x, O = b.y;
        return this.pageX -= x, this.pageY -= O, this.clientX -= x, this.clientY -= O, this;
      } }, { key: "_addOrigin", value: function(b) {
        var x = b.x, O = b.y;
        return this.pageX += x, this.pageY += O, this.clientX += x, this.clientY += O, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && yv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    Yn.PointerEvent = Yn.default = xv;
    var ho = {};
    Object.defineProperty(ho, "__esModule", { value: true }), ho.default = void 0;
    var Da = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = Da, i.defaults.actions.pointerEvents = Da.defaults, (0, W.default)(i.actions.phaselessTypes, Da.types);
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var o = i.down, l = i.pointerInfo;
      !o && l.hold || (l.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, o) {
      var l = i.interaction, u = i.pointer, h = i.event, g = i.eventTarget;
      i.duplicate || l.pointerIsDown && !l.pointerWasMoved || (l.pointerIsDown && zl(i), wn({ interaction: l, pointer: u, event: h, eventTarget: g, type: "move" }, o));
    }, "interactions:down": function(i, o) {
      (function(l, u) {
        for (var h = l.interaction, g = l.pointer, E = l.event, b = l.eventTarget, x = l.pointerIndex, O = h.pointers[x].hold, I = z.getPath(b), P = { interaction: h, pointer: g, event: E, eventTarget: b, type: "hold", targets: [], path: I, node: null }, N = 0; N < I.length; N++) {
          var L = I[N];
          P.node = L, u.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var R = 1 / 0, q = 0; q < P.targets.length; q++) {
            var Q = P.targets[q].eventable.options.holdDuration;
            Q < R && (R = Q);
          }
          O.duration = R, O.timeout = setTimeout(function() {
            wn({ interaction: h, eventTarget: b, pointer: g, event: E, type: "hold" }, u);
          }, R);
        }
      })(i, o), wn(i, o);
    }, "interactions:up": function(i, o) {
      zl(i), wn(i, o), function(l, u) {
        var h = l.interaction, g = l.pointer, E = l.event, b = l.eventTarget;
        h.pointerWasMoved || wn({ interaction: h, eventTarget: b, pointer: g, event: E, type: "tap" }, u);
      }(i, o);
    }, "interactions:cancel": function(i, o) {
      zl(i), wn(i, o);
    } }, PointerEvent: Yn.PointerEvent, fire: wn, collectEventTargets: ep, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function wn(i, o) {
      var l = i.interaction, u = i.pointer, h = i.event, g = i.eventTarget, E = i.type, b = i.targets, x = b === void 0 ? ep(i, o) : b, O = new Yn.PointerEvent(E, u, h, g, l, o.now());
      o.fire("pointerEvents:new", { pointerEvent: O });
      for (var I = { interaction: l, pointer: u, event: h, eventTarget: g, targets: x, type: E, pointerEvent: O }, P = 0; P < x.length; P++) {
        var N = x[P];
        for (var L in N.props || {})
          O[L] = N.props[L];
        var R = (0, Ne.default)(N.eventable, N.node);
        if (O._subtractOrigin(R), O.eventable = N.eventable, O.currentTarget = N.node, N.eventable.fire(O), O._addOrigin(R), O.immediatePropagationStopped || O.propagationStopped && P + 1 < x.length && x[P + 1].node !== O.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", I), E === "tap") {
        var q = O.double ? wn({ interaction: l, pointer: u, event: h, eventTarget: g, type: "doubletap" }, o) : O;
        l.prevTap = q, l.tapTime = q.timeStamp;
      }
      return O;
    }
    __name(wn, "wn");
    c(wn, "Yo");
    function ep(i, o) {
      var l = i.interaction, u = i.pointer, h = i.event, g = i.eventTarget, E = i.type, b = l.getPointerIndex(u), x = l.pointers[b];
      if (E === "tap" && (l.pointerWasMoved || !x || x.downTarget !== g))
        return [];
      for (var O = z.getPath(g), I = { interaction: l, pointer: u, event: h, eventTarget: g, type: E, path: O, targets: [], node: null }, P = 0; P < O.length; P++) {
        var N = O[P];
        I.node = N, o.fire("pointerEvents:collect-targets", I);
      }
      return E === "hold" && (I.targets = I.targets.filter(function(L) {
        var R;
        return L.eventable.options.holdDuration === ((R = l.pointers[b]) == null ? void 0 : R.hold.duration);
      })), I.targets;
    }
    __name(ep, "ep");
    c(ep, "Wo");
    function zl(i) {
      var o = i.interaction, l = i.pointerIndex, u = o.pointers[l].hold;
      u && u.timeout && (clearTimeout(u.timeout), u.timeout = null);
    }
    __name(zl, "zl");
    c(zl, "Lo");
    var Ev = Da;
    ho.default = Ev;
    var ka = {};
    function Sv(i) {
      var o = i.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(Sv, "Sv");
    c(Sv, "No"), Object.defineProperty(ka, "__esModule", { value: true }), ka.default = void 0;
    var Tv = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(ho.default);
      var o = i.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o) {
      return i["pointerEvents:".concat(o)] = Sv, i;
    }, { "pointerEvents:new": function(i) {
      var o = i.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(i, o) {
      var l = i.interaction, u = i.pointerEvent, h = i.eventTarget, g = i.targets;
      if (u.type === "hold" && g.length) {
        var E = g[0].eventable.options.holdRepeatInterval;
        E <= 0 || (l.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: l, eventTarget: h, type: "hold", pointer: u, event: u }, o);
        }, E));
      }
    } }) }, Cv = Tv;
    ka.default = Cv;
    var Na = {};
    function Ov(i) {
      return (0, W.default)(this.events.options, i), this;
    }
    __name(Ov, "Ov");
    c(Ov, "Ho"), Object.defineProperty(Na, "__esModule", { value: true }), Na.default = void 0;
    var Mv = { id: "pointer-events/interactableTargets", install: function(i) {
      var o = i.Interactable;
      o.prototype.pointerEvents = Ov;
      var l = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(u, h) {
        var g = l.call(this, u, h);
        return g === this && (this.events.options[u] = h), g;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, o) {
      var l = i.targets, u = i.node, h = i.type, g = i.eventTarget;
      o.interactables.forEachMatch(u, function(E) {
        var b = E.events, x = b.options;
        b.types[h] && b.types[h].length && E.testIgnoreAllow(x, u, g) && l.push({ node: u, eventable: b, props: { interactable: E } });
      });
    }, "interactable:new": function(i) {
      var o = i.interactable;
      o.events.getRect = function(l) {
        return o.getRect(l);
      };
    }, "interactable:set": function(i, o) {
      var l = i.interactable, u = i.options;
      (0, W.default)(l.events.options, o.pointerEvents.defaults), (0, W.default)(l.events.options, u.pointerEvents || {});
    } } }, Iv = Mv;
    Na.default = Iv;
    var Ga = {};
    Object.defineProperty(Ga, "__esModule", { value: true }), Ga.default = void 0;
    var Av = { id: "pointer-events", install: function(i) {
      i.usePlugin(ho), i.usePlugin(ka.default), i.usePlugin(Na.default);
    } }, Pv = Av;
    Ga.default = Pv;
    var mo = {};
    function tp(i) {
      var o = i.Interactable;
      i.actions.phases.reflow = true, o.prototype.reflow = function(l) {
        return function(u, h, g) {
          for (var E = s.default.string(u.target) ? Ae.from(u._context.querySelectorAll(u.target)) : [u.target], b = g.window.Promise, x = b ? [] : null, O = function() {
            var P = E[I], N = u.getRect(P);
            if (!N)
              return "break";
            var L = Ae.find(g.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === u && ne.element === P && ne.prepared.name === h.name;
            }), R = void 0;
            if (L)
              L.move(), x && (R = L._reflowPromise || new b(function(ne) {
                L._reflowResolve = ne;
              }));
            else {
              var q = (0, ue.tlbrToXywh)(N), Q = { page: { x: q.x, y: q.y }, client: { x: q.x, y: q.y }, timeStamp: g.now() }, U = K.coordsToEvent(Q);
              R = function(ne, oe, ye, ze, Ue) {
                var Te = ne.interactions.new({ pointerType: "reflow" }), $e = { interaction: Te, event: Ue, pointer: Ue, eventTarget: ye, phase: "reflow" };
                Te.interactable = oe, Te.element = ye, Te.prevEvent = Ue, Te.updatePointer(Ue, Ue, ye, true), K.setZeroCoords(Te.coords.delta), (0, ar.copyAction)(Te.prepared, ze), Te._doPhase($e);
                var gr = ne.window.Promise, Jr = gr ? new gr(function(kl) {
                  Te._reflowResolve = kl;
                }) : void 0;
                return Te._reflowPromise = Jr, Te.start(ze, oe, ye), Te._interacting ? (Te.move($e), Te.end(Ue)) : (Te.stop(), Te._reflowResolve()), Te.removePointer(Ue, Ue), Jr;
              }(g, u, P, h, U);
            }
            x && x.push(R);
          }, I = 0; I < E.length && O() !== "break"; I++)
            ;
          return x && b.all(x).then(function() {
            return u;
          });
        }(this, l, i);
      };
    }
    __name(tp, "tp");
    c(tp, "ni"), Object.defineProperty(mo, "__esModule", { value: true }), mo.default = void 0, mo.install = tp;
    var _v = { id: "reflow", install: tp, listeners: { "interactions:stop": function(i, o) {
      var l = i.interaction;
      l.pointerType === "reflow" && (l._reflowResolve && l._reflowResolve(), Ae.remove(o.interactions.list, l));
    } } }, zv = _v;
    mo.default = zv;
    var vr = { exports: {} };
    function Rl(i) {
      return Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Rl(i);
    }
    __name(Rl, "Rl");
    c(Rl, "ai"), Object.defineProperty(vr.exports, "__esModule", { value: true }), vr.exports.default = void 0, ct.default.use(gi.default), ct.default.use(Wn.default), ct.default.use(Ga.default), ct.default.use(bi.default), ct.default.use(za.default), ct.default.use(ha.default), ct.default.use(mr.default), ct.default.use(gn.default), ct.default.use(mo.default);
    var Rv = ct.default;
    if (vr.exports.default = Rv, Rl(vr) === "object" && vr)
      try {
        vr.exports = ct.default;
      } catch (i) {
      }
    ct.default.default = ct.default, vr = vr.exports;
    var Xn = { exports: {} };
    function Dl(i) {
      return Dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Dl(i);
    }
    __name(Dl, "Dl");
    c(Dl, "ui"), Object.defineProperty(Xn.exports, "__esModule", { value: true }), Xn.exports.default = void 0;
    var Dv = vr.default;
    if (Xn.exports.default = Dv, Dl(Xn) === "object" && Xn)
      try {
        Xn.exports = vr.default;
      } catch (i) {
      }
    return vr.default.default = vr.default, Xn.exports;
  });
});
var Hh = Tt((Bh, ac) => {
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
    c(n, "FastDom"), n.prototype = { constructor: n, runTasks: function(d) {
      r("run tasks");
      for (var f; f = d.shift(); )
        f();
    }, measure: function(d, f) {
      r("measure");
      var y = f ? d.bind(f) : d;
      return this.reads.push(y), a(this), y;
    }, mutate: function(d, f) {
      r("mutate");
      var y = f ? d.bind(f) : d;
      return this.writes.push(y), a(this), y;
    }, clear: function(d) {
      return r("clear", d), p(this.reads, d) || p(this.writes, d);
    }, extend: function(d) {
      if (r("extend", d), typeof d != "object")
        throw new Error("expected object");
      var f = Object.create(this);
      return v(f, d), f.fastdom = this, f.initialize && f.initialize(), f;
    }, catch: null };
    function a(d) {
      d.scheduled || (d.scheduled = true, d.raf(s.bind(null, d)), r("flush scheduled"));
    }
    __name(a, "a");
    c(a, "scheduleFlush");
    function s(d) {
      r("flush");
      var f = d.writes, y = d.reads, w;
      try {
        r("flushing reads", y.length), d.runTasks(y), r("flushing writes", f.length), d.runTasks(f);
      } catch (S) {
        w = S;
      }
      if (d.scheduled = false, (y.length || f.length) && a(d), w)
        if (r("task errored", w.message), d.catch)
          d.catch(w);
        else
          throw w;
    }
    __name(s, "s");
    c(s, "flush");
    function p(d, f) {
      var y = d.indexOf(f);
      return !!~y && !!d.splice(y, 1);
    }
    __name(p, "p");
    c(p, "remove");
    function v(d, f) {
      for (var y in f)
        f.hasOwnProperty(y) && (d[y] = f[y]);
    }
    __name(v, "v");
    c(v, "mixin");
    var m = t.fastdom = t.fastdom || new n();
    typeof define == "function" ? define(function() {
      return m;
    }) : typeof ac == "object" && (ac.exports = m);
  })(typeof window != "undefined" ? window : Bh);
});
var Uh = Tt((sc, Fh) => {
  (function(t) {
    "use strict";
    var r = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, e = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, n = c(function(d) {
      var f = Math.PI / 4;
      if (-f > d || d > f)
        return Math.cos(d) - 1;
      var y = d * d;
      return y * (y * (y * (y * (y * (y * (y * (y / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), a = c(function(d, f) {
      var y = Math.abs(d), w = Math.abs(f);
      return y < 3e3 && w < 3e3 ? Math.sqrt(y * y + w * w) : (y < w ? (y = w, w = d / f) : w = f / d, y * Math.sqrt(1 + w * w));
    }, "hypot"), s = c(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function p(d, f) {
      var y = Math.abs(d), w = Math.abs(f);
      return d === 0 ? Math.log(w) : f === 0 ? Math.log(y) : y < 3e3 && w < 3e3 ? Math.log(d * d + f * f) * 0.5 : (d = d / 2, f = f / 2, 0.5 * Math.log(d * d + f * f) + Math.LN2);
    }
    __name(p, "p");
    c(p, "logHypot");
    var v = c(function(d, f) {
      var y = { re: 0, im: 0 };
      if (d == null)
        y.re = y.im = 0;
      else if (f !== void 0)
        y.re = d, y.im = f;
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
              d.length === 2 ? (y.re = d[0], y.im = d[1]) : s();
            break;
          case "string":
            y.im = y.re = 0;
            var w = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, T = 0;
            w === null && s();
            for (var C = 0; C < w.length; C++) {
              var _ = w[C];
              _ === " " || _ === "	" || _ === `
` || (_ === "+" ? S++ : _ === "-" ? T++ : _ === "i" || _ === "I" ? (S + T === 0 && s(), w[C + 1] !== " " && !isNaN(w[C + 1]) ? (y.im += parseFloat((T % 2 ? "-" : "") + w[C + 1]), C++) : y.im += parseFloat((T % 2 ? "-" : "") + "1"), S = T = 0) : ((S + T === 0 || isNaN(_)) && s(), w[C + 1] === "i" || w[C + 1] === "I" ? (y.im += parseFloat((T % 2 ? "-" : "") + _), C++) : y.re += parseFloat((T % 2 ? "-" : "") + _), S = T = 0));
            }
            S + T > 0 && s();
            break;
          case "number":
            y.im = 0, y.re = d;
            break;
          default:
            s();
        }
      return isNaN(y.re) || isNaN(y.im), y;
    }, "parse");
    function m(d, f) {
      if (!(this instanceof m))
        return new m(d, f);
      var y = v(d, f);
      this.re = y.re, this.im = y.im;
    }
    __name(m, "m");
    c(m, "Complex"), m.prototype = { re: 0, im: 0, sign: function() {
      var d = this.abs();
      return new m(this.re / d, this.im / d);
    }, add: function(d, f) {
      var y = new m(d, f);
      return this.isInfinite() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : new m(this.re + y.re, this.im + y.im);
    }, sub: function(d, f) {
      var y = new m(d, f);
      return this.isInfinite() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : new m(this.re - y.re, this.im - y.im);
    }, mul: function(d, f) {
      var y = new m(d, f);
      return this.isInfinite() && y.isZero() || this.isZero() && y.isInfinite() ? m.NAN : this.isInfinite() || y.isInfinite() ? m.INFINITY : y.im === 0 && this.im === 0 ? new m(this.re * y.re, 0) : new m(this.re * y.re - this.im * y.im, this.re * y.im + this.im * y.re);
    }, div: function(d, f) {
      var y = new m(d, f);
      if (this.isZero() && y.isZero() || this.isInfinite() && y.isInfinite())
        return m.NAN;
      if (this.isInfinite() || y.isZero())
        return m.INFINITY;
      if (this.isZero() || y.isInfinite())
        return m.ZERO;
      d = this.re, f = this.im;
      var w = y.re, S = y.im, T, C;
      return S === 0 ? new m(d / w, f / w) : Math.abs(w) < Math.abs(S) ? (C = w / S, T = w * C + S, new m((d * C + f) / T, (f * C - d) / T)) : (C = S / w, T = S * C + w, new m((d + f * C) / T, (f - d * C) / T));
    }, pow: function(d, f) {
      var y = new m(d, f);
      if (d = this.re, f = this.im, y.isZero())
        return m.ONE;
      if (y.im === 0) {
        if (f === 0 && d > 0)
          return new m(Math.pow(d, y.re), 0);
        if (d === 0)
          switch ((y.re % 4 + 4) % 4) {
            case 0:
              return new m(Math.pow(f, y.re), 0);
            case 1:
              return new m(0, Math.pow(f, y.re));
            case 2:
              return new m(-Math.pow(f, y.re), 0);
            case 3:
              return new m(0, -Math.pow(f, y.re));
          }
      }
      if (d === 0 && f === 0 && y.re > 0 && y.im >= 0)
        return m.ZERO;
      var w = Math.atan2(f, d), S = p(d, f);
      return d = Math.exp(y.re * S - y.im * w), f = y.im * S + y.re * w, new m(d * Math.cos(f), d * Math.sin(f));
    }, sqrt: function() {
      var d = this.re, f = this.im, y = this.abs(), w, S;
      if (d >= 0) {
        if (f === 0)
          return new m(Math.sqrt(d), 0);
        w = 0.5 * Math.sqrt(2 * (y + d));
      } else
        w = Math.abs(f) / Math.sqrt(2 * (y - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (y - d)) : S = Math.abs(f) / Math.sqrt(2 * (y + d)), new m(w, f < 0 ? -S : S);
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
      return a(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, f = this.im;
      return new m(Math.sin(d) * r(f), Math.cos(d) * e(f));
    }, cos: function() {
      var d = this.re, f = this.im;
      return new m(Math.cos(d) * r(f), -Math.sin(d) * e(f));
    }, tan: function() {
      var d = 2 * this.re, f = 2 * this.im, y = Math.cos(d) + r(f);
      return new m(Math.sin(d) / y, e(f) / y);
    }, cot: function() {
      var d = 2 * this.re, f = 2 * this.im, y = Math.cos(d) - r(f);
      return new m(-Math.sin(d) / y, e(f) / y);
    }, sec: function() {
      var d = this.re, f = this.im, y = 0.5 * r(2 * f) + 0.5 * Math.cos(2 * d);
      return new m(Math.cos(d) * r(f) / y, Math.sin(d) * e(f) / y);
    }, csc: function() {
      var d = this.re, f = this.im, y = 0.5 * r(2 * f) - 0.5 * Math.cos(2 * d);
      return new m(Math.sin(d) * r(f) / y, -Math.cos(d) * e(f) / y);
    }, asin: function() {
      var d = this.re, f = this.im, y = new m(f * f - d * d + 1, -2 * d * f).sqrt(), w = new m(y.re - f, y.im + d).log();
      return new m(w.im, -w.re);
    }, acos: function() {
      var d = this.re, f = this.im, y = new m(f * f - d * d + 1, -2 * d * f).sqrt(), w = new m(y.re - f, y.im + d).log();
      return new m(Math.PI / 2 - w.im, w.re);
    }, atan: function() {
      var d = this.re, f = this.im;
      if (d === 0) {
        if (f === 1)
          return new m(0, 1 / 0);
        if (f === -1)
          return new m(0, -1 / 0);
      }
      var y = d * d + (1 - f) * (1 - f), w = new m((1 - f * f - d * d) / y, -2 * d / y).log();
      return new m(-0.5 * w.im, 0.5 * w.re);
    }, acot: function() {
      var d = this.re, f = this.im;
      if (f === 0)
        return new m(Math.atan2(1, d), 0);
      var y = d * d + f * f;
      return y !== 0 ? new m(d / y, -f / y).atan() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).atan();
    }, asec: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new m(0, 1 / 0);
      var y = d * d + f * f;
      return y !== 0 ? new m(d / y, -f / y).acos() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).acos();
    }, acsc: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new m(Math.PI / 2, 1 / 0);
      var y = d * d + f * f;
      return y !== 0 ? new m(d / y, -f / y).asin() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).asin();
    }, sinh: function() {
      var d = this.re, f = this.im;
      return new m(e(d) * Math.cos(f), r(d) * Math.sin(f));
    }, cosh: function() {
      var d = this.re, f = this.im;
      return new m(r(d) * Math.cos(f), e(d) * Math.sin(f));
    }, tanh: function() {
      var d = 2 * this.re, f = 2 * this.im, y = r(d) + Math.cos(f);
      return new m(e(d) / y, Math.sin(f) / y);
    }, coth: function() {
      var d = 2 * this.re, f = 2 * this.im, y = r(d) - Math.cos(f);
      return new m(e(d) / y, -Math.sin(f) / y);
    }, csch: function() {
      var d = this.re, f = this.im, y = Math.cos(2 * f) - r(2 * d);
      return new m(-2 * e(d) * Math.cos(f) / y, 2 * r(d) * Math.sin(f) / y);
    }, sech: function() {
      var d = this.re, f = this.im, y = Math.cos(2 * f) + r(2 * d);
      return new m(2 * r(d) * Math.cos(f) / y, -2 * e(d) * Math.sin(f) / y);
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
      var d = this.re, f = this.im, y = d > 1 && f === 0, w = 1 - d, S = 1 + d, T = w * w + f * f, C = T !== 0 ? new m((S * w - f * f) / T, (f * w + S * f) / T) : new m(d !== -1 ? d / 0 : 0, f !== 0 ? f / 0 : 0), _ = C.re;
      return C.re = p(C.re, C.im) / 2, C.im = Math.atan2(C.im, _) / 2, y && (C.im = -C.im), C;
    }, acoth: function() {
      var d = this.re, f = this.im;
      if (d === 0 && f === 0)
        return new m(0, Math.PI / 2);
      var y = d * d + f * f;
      return y !== 0 ? new m(d / y, -f / y).atanh() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).atanh();
    }, acsch: function() {
      var d = this.re, f = this.im;
      if (f === 0)
        return new m(d !== 0 ? Math.log(d + Math.sqrt(d * d + 1)) : 1 / 0, 0);
      var y = d * d + f * f;
      return y !== 0 ? new m(d / y, -f / y).asinh() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).asinh();
    }, asech: function() {
      var d = this.re, f = this.im;
      if (this.isZero())
        return m.INFINITY;
      var y = d * d + f * f;
      return y !== 0 ? new m(d / y, -f / y).acosh() : new m(d !== 0 ? d / 0 : 0, f !== 0 ? -f / 0 : 0).acosh();
    }, inverse: function() {
      if (this.isZero())
        return m.INFINITY;
      if (this.isInfinite())
        return m.ZERO;
      var d = this.re, f = this.im, y = d * d + f * f;
      return new m(d / y, -f / y);
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
      var y = new m(d, f);
      return Math.abs(y.re - this.re) <= m.EPSILON && Math.abs(y.im - this.im) <= m.EPSILON;
    }, clone: function() {
      return new m(this.re, this.im);
    }, toString: function() {
      var d = this.re, f = this.im, y = "";
      return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(d) < m.EPSILON && (d = 0), Math.abs(f) < m.EPSILON && (f = 0), f === 0 ? y + d : (d !== 0 ? (y += d, y += " ", f < 0 ? (f = -f, y += "-") : y += "+", y += " ") : f < 0 && (f = -f, y += "-"), f !== 1 && (y += f), y + "i"));
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
    }) : typeof sc == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, Fh.exports = m) : t.Complex = m;
  })(sc);
});
var An = Lt(up());
var vd = Lt(tn());
function pd(t) {
  let r = Pn(t);
  return new An.default(r).valueOf() * Math.PI;
}
__name(pd, "pd");
c(pd, "D");
function So(t) {
  let r = Pn(t).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${t}'`);
}
__name(So, "So");
c(So, "q");
function dd(t, r) {
  return new An.default(Pn(t)).valueOf() < new An.default(Pn(r)).valueOf();
}
__name(dd, "dd");
c(dd, "U");
function fd(t, r) {
  return new An.default(Pn(t)).valueOf() > new An.default(Pn(r)).valueOf();
}
__name(fd, "fd");
c(fd, "B");
function hd(t) {
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
__name(hd, "hd");
c(hd, "$");
function Pn(t) {
  return t.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(Pn, "Pn");
c(Pn, "l");
function md(t) {
  try {
    let r = Pn(t), e = new An.default(r).toFraction().split("/"), n;
    return e[0] === "0" ? n = "0" : e[0] === "1" ? n = "\u03C0" : e[0] === "-1" ? n = "-\u03C0" : n = `${e[0]}\u03C0`, e.length === 1 ? n : `${n}/${e[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${t}'`);
  }
}
__name(md, "md");
c(md, "P");
var Wl = 0;
var pt = c(class extends Error {
  constructor(t, r) {
    super(t), this.detailsObj = r, this.name = "Error", this.message = t, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), Wl++;
    try {
      this.details = Wl === 1 ? (0, vd.format)(this.detailsObj) : "(failed to prettyFormat detailsObj due to possibly re-entrancy)";
    } catch (e) {
      console.error(e), this.details = "(failed to prettyFormat detailsObj, see the console for details)";
    } finally {
      Wl--;
    }
  }
}, "c");
var ub = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var sr = c(class {
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
    let a = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= r);
    return a !== void 0 ? Math.sqrt(a.value) : t;
  }
  static matchUnicodeFraction(t) {
    for (let r of ub)
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
    let a = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - t) <= r);
    return a !== void 0 ? `\u221A${a.character}` : t % 1 !== 0 && e !== void 0 ? t.toFixed(e) : t.toString();
  }
}, "s");
var Eo = sr;
Eo.CONSISTENT = new sr(false, 0, 2, ", "), Eo.EXACT = new sr(true, 0, void 0, ", "), Eo.MINIFIED = new sr(true, 0, void 0, ","), Eo.SIMPLIFIED = new sr(true, 5e-4, 3, ", ");
var H = c(class {
  static need(t, r, e) {
    if (t !== true) {
      let n = e === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(e).join(", ")}]`, a = `Precondition failed

Message: ${r === void 0 ? "(not provided)" : r}

Args: ${n}`;
      throw new Error(a);
    }
  }
  static notNull(t) {
    H.need(t != null, "notNull");
  }
  static snappedCosSin(t) {
    let r = Math.PI / 4, e = Math.round(t / r);
    if (e * r === t) {
      let n = Math.sqrt(0.5);
      return [[1, 0], [n, n], [0, 1], [-n, n], [-1, 0], [-n, -n], [0, -1], [n, -n]][e & 7];
    }
    return [Math.cos(t), Math.sin(t)];
  }
}, "m");
var we = c(class {
  static from(t) {
    if (t instanceof we)
      return t;
    if (typeof t == "number")
      return new we(t, 0);
    throw new pt("Unrecognized value type.", { v: t });
  }
  static polar(t, r) {
    let [e, n] = H.snappedCosSin(r);
    return new we(t * e, t * n);
  }
  static realPartOf(t) {
    if (t instanceof we)
      return t.real;
    if (typeof t == "number")
      return t;
    throw new pt("Unrecognized value type.", { v: t });
  }
  static imagPartOf(t) {
    if (t instanceof we)
      return t.imag;
    if (typeof t == "number")
      return 0;
    throw new pt("Unrecognized value type.", { v: t });
  }
  constructor(t, r) {
    this.real = t, this.imag = r;
  }
  static rootsOfQuadratic(t, r, e) {
    if (t = we.from(t), r = we.from(r), e = we.from(e), t.isEqualTo(0)) {
      if (!r.isEqualTo(0))
        return [e.times(-1).dividedBy(r)];
      if (!e.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let n = r.times(r).minus(t.times(e).times(4)).sqrts(), a = r.times(-1), s = t.times(2);
    return n.map((p) => a.minus(p).dividedBy(s));
  }
  isEqualTo(t) {
    return t instanceof we ? this.real === t.real && this.imag === t.imag : typeof t == "number" ? this.real === t && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(t, r) {
    if (t instanceof we || typeof t == "number") {
      let e = this.minus(we.from(t));
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
    return t < 1e-5 ? we.polar(1, this.phase()) : this.dividedBy(Math.sqrt(t));
  }
  plus(t) {
    let r = we.from(t);
    return new we(this.real + r.real, this.imag + r.imag);
  }
  minus(t) {
    let r = we.from(t);
    return new we(this.real - r.real, this.imag - r.imag);
  }
  times(t) {
    let r = we.from(t);
    return new we(this.real * r.real - this.imag * r.imag, this.real * r.imag + this.imag * r.real);
  }
  dividedBy(t) {
    let r = we.from(t), e = r.norm2();
    if (e === 0)
      throw new Error("Division by Zero");
    let n = this.times(r.conjugate());
    return new we(n.real / e, n.imag / e);
  }
  sqrts() {
    let [t, r] = [this.real, this.imag], e = Math.sqrt(Math.sqrt(t * t + r * r));
    if (e === 0)
      return [we.ZERO];
    if (r === 0 && t < 0)
      return [new we(0, e), new we(0, -e)];
    let n = this.phase() / 2, a = we.polar(e, n);
    return [a, a.times(-1)];
  }
  conjugate() {
    return new we(this.real, -this.imag);
  }
  toString(t) {
    return t = t || Eo.EXACT, t.allowAbbreviation ? this.toStringAllowSingleValue(t) : this.toStringBothValues(t);
  }
  neg() {
    return new we(-this.real, -this.imag);
  }
  raisedTo(t) {
    return t === 0.5 && this.imag === 0 && this.real >= 0 ? new we(Math.sqrt(this.real), 0) : we.ZERO.isEqualTo(t) ? we.ONE : this.isEqualTo(we.ZERO) ? we.ZERO : this.ln().times(we.from(t)).exp();
  }
  exp() {
    return we.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let t = this.times(we.I);
    return t.exp().plus(t.neg().exp()).times(0.5);
  }
  sin() {
    let t = this.times(we.I);
    return t.exp().minus(t.neg().exp()).dividedBy(new we(0, 2));
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
  toStringAllowSingleValue(t) {
    return Math.abs(this.imag) <= t.maxAbbreviationError ? t.formatFloat(this.real) : Math.abs(this.real) <= t.maxAbbreviationError ? Math.abs(this.imag - 1) <= t.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= t.maxAbbreviationError ? "-i" : `${t.formatFloat(this.imag)}i` : this.toStringBothValues(t);
  }
  toStringBothValues(t) {
    let r = this.imag >= 0 ? "+" : "-", e = t.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= t.maxAbbreviationError ? "" : t.formatFloat(Math.abs(this.imag));
    return `${(t.allowAbbreviation || t.fixedDigits === void 0 || this.real < 0 ? "" : "+") + t.formatFloat(this.real) + r + e}i`;
  }
}, "a");
var In = we;
In.ZERO = new we(0, 0), In.ONE = new we(1, 0), In.I = new we(0, 1);
var To = { MAX_QUBIT_COUNT: 16 };
function fe(t, r = {}, e = document) {
  let n = new CustomEvent(t, { bubbles: true, cancelable: true, detail: r });
  return e.dispatchEvent(n);
}
__name(fe, "fe");
c(fe, "j");
var gd = c((t) => typeof t == "number" && 1 <= t && t <= To.MAX_QUBIT_COUNT, "re");
var Vl = "\u25E6";
var Yl = "Bloch";
var Xl = "\u2022";
var rs = "H";
var ns = "Measure";
var is = "P";
var Zl = "QFT\u2020";
var Ql = "QFT";
var os = "X^\xBD";
var as = "Rx";
var ss = "Ry";
var ls = "Rz";
var us = "S\u2020";
var cs = "S";
var Kl = "\u2026";
var Jl = "Swap";
var ps = "T\u2020";
var ds = "T";
var bd = "|0>";
var yd = "|1>";
var fs = "X";
var hs = "Y";
var ms = "Z";
var eu = /* @__PURE__ */ new WeakSet();
function ru(t) {
  eu.add(t), t.shadowRoot && nu(t.shadowRoot), ou(t), iu(t.ownerDocument);
}
__name(ru, "ru");
c(ru, "bind");
function nu(t) {
  ou(t), iu(t);
}
__name(nu, "nu");
c(nu, "bindShadow");
var vs = /* @__PURE__ */ new WeakMap();
function iu(t = document) {
  if (vs.has(t))
    return vs.get(t);
  let r = false, e = new MutationObserver((a) => {
    for (let s of a)
      if (s.type === "attributes" && s.target instanceof Element)
        tu(s.target);
      else if (s.type === "childList" && s.addedNodes.length)
        for (let p of s.addedNodes)
          p instanceof Element && ou(p);
  });
  e.observe(t, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, vs.delete(t), e.disconnect();
  } };
  return vs.set(t, n), n;
}
__name(iu, "iu");
c(iu, "listenForBind");
function ou(t) {
  for (let r of t.querySelectorAll("[data-action]"))
    tu(r);
  t instanceof Element && t.hasAttribute("data-action") && tu(t);
}
__name(ou, "ou");
c(ou, "bindElements");
function cb(t) {
  let r = t.currentTarget;
  for (let e of wd(r))
    if (t.type === e.type) {
      let n = r.closest(e.tag);
      eu.has(n) && typeof n[e.method] == "function" && n[e.method](t);
      let a = r.getRootNode();
      if (a instanceof ShadowRoot && eu.has(a.host) && a.host.matches(e.tag)) {
        let s = a.host;
        typeof s[e.method] == "function" && s[e.method](t);
      }
    }
}
__name(cb, "cb");
c(cb, "handleEvent");
function* wd(t) {
  for (let r of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let e = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, e), tag: r.slice(e + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(wd, "wd");
c(wd, "bindings");
function tu(t) {
  for (let r of wd(t))
    t.addEventListener(r.type, cb);
}
__name(tu, "tu");
c(tu, "bindActions");
function au(t) {
  let r = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[t.name] = t, window.customElements.define(r, t));
}
__name(au, "au");
c(au, "register");
function su(t, r) {
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
__name(su, "su");
c(su, "findTarget");
function lu(t, r) {
  let e = t.tagName.toLowerCase(), n = [];
  if (t.shadowRoot)
    for (let a of t.shadowRoot.querySelectorAll(`[data-targets~="${e}.${r}"]`))
      a.closest(e) || n.push(a);
  for (let a of t.querySelectorAll(`[data-targets~="${e}.${r}"]`))
    a.closest(e) === t && n.push(a);
  return n;
}
__name(lu, "lu");
c(lu, "findTargets");
function Me(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return su(this, r);
  } });
}
__name(Me, "Me");
c(Me, "target");
function dt(t, r) {
  return Object.defineProperty(t, r, { configurable: true, get() {
    return lu(this, r);
  } });
}
__name(dt, "dt");
c(dt, "targets");
function uu(t) {
  for (let r of t.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === t && t.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(uu, "uu");
c(uu, "autoShadowRoot");
var gs = /* @__PURE__ */ new WeakMap();
function D(t, r) {
  gs.has(t) || gs.set(t, []), gs.get(t).push(r);
}
__name(D, "D");
c(D, "attr");
function cu(t, r) {
  r || (r = xd(Object.getPrototypeOf(t)));
  for (let e of r) {
    let n = t[e], a = Ed(e), s = { configurable: true, get() {
      return this.getAttribute(a) || "";
    }, set(p) {
      this.setAttribute(a, p || "");
    } };
    typeof n == "number" ? s = { configurable: true, get() {
      return Number(this.getAttribute(a) || 0);
    }, set(p) {
      this.setAttribute(a, p);
    } } : typeof n == "boolean" && (s = { configurable: true, get() {
      return this.hasAttribute(a);
    }, set(p) {
      this.toggleAttribute(a, p);
    } }), Object.defineProperty(t, e, s), e in t && !t.hasAttribute(a) && s.set.call(t, n);
  }
}
__name(cu, "cu");
c(cu, "initializeAttrs");
function xd(t) {
  let r = /* @__PURE__ */ new Set(), e = t;
  for (; e && e !== HTMLElement; ) {
    let n = gs.get(e) || [];
    for (let a of n)
      r.add(a);
    e = Object.getPrototypeOf(e);
  }
  return r;
}
__name(xd, "xd");
c(xd, "getAttrNames");
function Ed(t) {
  return `data-${t.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Ed, "Ed");
c(Ed, "attrToAttributeName");
function pu(t) {
  let r = t.observedAttributes || [];
  Object.defineProperty(t, "observedAttributes", { configurable: true, get() {
    return [...xd(t.prototype)].map(Ed).concat(r);
  }, set(e) {
    r = e;
  } });
}
__name(pu, "pu");
c(pu, "defineObservedAttributes");
var pb = /* @__PURE__ */ new WeakSet();
function Sd(t, r) {
  t.toggleAttribute("data-catalyst", true), customElements.upgrade(t), pb.add(t), uu(t), cu(t), ru(t), r && r.call(t), t.shadowRoot && nu(t.shadowRoot);
}
__name(Sd, "Sd");
c(Sd, "initializeInstance");
function Td(t) {
  pu(t), au(t);
}
__name(Td, "Td");
c(Td, "initializeClass");
function Z(t) {
  let r = t.prototype.connectedCallback;
  t.prototype.connectedCallback = function() {
    Sd(this, r);
  }, Td(t);
}
__name(Z, "Z");
c(Z, "controller");
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
  return c(r, "ActivateableMixinClass"), M([D], r.prototype, "active", 2), r;
}
__name(he, "he");
c(he, "ActivateableMixin");
var Kn = c((t) => typeof t == "object" && t !== null && typeof t.angle == "string" && typeof t.reducedAngle == "string", "isAngleable");
function _n(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(r, "r");
  return c(r, "AngleableMixinClass"), M([D], r.prototype, "angle", 2), M([D], r.prototype, "reducedAngle", 2), r;
}
__name(_n, "_n");
c(_n, "AngleableMixin");
var Co = c((t) => typeof t == "object" && t !== null && typeof t.controls == "object", "isControllable");
function Le(t) {
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
__name(Le, "Le");
c(Le, "ControllableMixin");
function Ie(t) {
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
  return c(r, "DisableableMixinClass"), M([D], r.prototype, "disabled", 2), r;
}
__name(Ie, "Ie");
c(Ie, "DisableableMixin");
var V = c(function() {
  return V = Object.assign || c(function(r) {
    for (var e, n = 1, a = arguments.length; n < a; n++) {
      e = arguments[n];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s]);
    }
    return r;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function Mi(t, r) {
  var e = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (e[n[a]] = t[n[a]]);
  return e;
}
__name(Mi, "Mi");
c(Mi, "__rest");
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
c(xe, "__values");
function Se(t, r) {
  var e = typeof Symbol == "function" && t[Symbol.iterator];
  if (!e)
    return t;
  var n = e.call(t), a, s = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = n.next()).done; )
      s.push(a.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      a && !a.done && (e = n.return) && e.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return s;
}
__name(Se, "Se");
c(Se, "__read");
function Re(t, r, e) {
  if (e || arguments.length === 2)
    for (var n = 0, a = r.length, s; n < a; n++)
      (s || !(n in r)) && (s || (s = Array.prototype.slice.call(r, 0, n)), s[n] = r[n]);
  return t.concat(s || Array.prototype.slice.call(r));
}
__name(Re, "Re");
c(Re, "__spreadArray");
var De;
(function(t) {
  t.Start = "xstate.start", t.Stop = "xstate.stop", t.Raise = "xstate.raise", t.Send = "xstate.send", t.Cancel = "xstate.cancel", t.NullEvent = "", t.Assign = "xstate.assign", t.After = "xstate.after", t.DoneState = "done.state", t.DoneInvoke = "done.invoke", t.Log = "xstate.log", t.Init = "xstate.init", t.Invoke = "xstate.invoke", t.ErrorExecution = "error.execution", t.ErrorCommunication = "error.communication", t.ErrorPlatform = "error.platform", t.ErrorCustom = "xstate.error", t.Update = "xstate.update", t.Pure = "xstate.pure", t.Choose = "xstate.choose";
})(De || (De = {}));
var Ar;
(function(t) {
  t.Parent = "#_parent", t.Internal = "#_internal";
})(Ar || (Ar = {}));
var Oo = De.Start;
var Ii = De.Stop;
var rn = De.Raise;
var nn = De.Send;
var bs = De.Cancel;
var Cd = De.NullEvent;
var du = De.Assign;
var zw = De.After;
var Rw = De.DoneState;
var ys = De.Log;
var Od = De.Init;
var Mo = De.Invoke;
var Dw = De.ErrorExecution;
var fu = De.ErrorPlatform;
var hu = De.ErrorCustom;
var Io = De.Update;
var Md = De.Choose;
var Id = De.Pure;
var ws = ".";
var mu = {};
var xs = "xstate.guard";
var Ad = "";
var je = true;
var Es;
function Po(t, r, e) {
  e === void 0 && (e = ws);
  var n = Ai(t, e), a = Ai(r, e);
  return Ce(a) ? Ce(n) ? a === n : false : Ce(n) ? n in a : Object.keys(n).every(function(s) {
    return s in a ? Po(n[s], a[s]) : false;
  });
}
__name(Po, "Po");
c(Po, "matchesState");
function Ss(t) {
  try {
    return Ce(t) || typeof t == "number" ? "".concat(t) : t.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(Ss, "Ss");
c(Ss, "getEventType");
function Ts(t, r) {
  try {
    return on(t) ? t : t.toString().split(r);
  } catch (e) {
    throw new Error("'".concat(t, "' is not a valid state path."));
  }
}
__name(Ts, "Ts");
c(Ts, "toStatePath");
function db(t) {
  return typeof t == "object" && "value" in t && "context" in t && "event" in t && "_event" in t;
}
__name(db, "db");
c(db, "isStateLike");
function Ai(t, r) {
  if (db(t))
    return t.value;
  if (on(t))
    return Ao(t);
  if (typeof t != "string")
    return t;
  var e = Ts(t, r);
  return Ao(e);
}
__name(Ai, "Ai");
c(Ai, "toStateValue");
function Ao(t) {
  if (t.length === 1)
    return t[0];
  for (var r = {}, e = r, n = 0; n < t.length - 1; n++)
    n === t.length - 2 ? e[t[n]] = t[n + 1] : (e[t[n]] = {}, e = e[t[n]]);
  return r;
}
__name(Ao, "Ao");
c(Ao, "pathToStateValue");
function Pi(t, r) {
  for (var e = {}, n = Object.keys(t), a = 0; a < n.length; a++) {
    var s = n[a];
    e[s] = r(t[s], s, t, a);
  }
  return e;
}
__name(Pi, "Pi");
c(Pi, "mapValues");
function vu(t, r, e) {
  var n, a, s = {};
  try {
    for (var p = xe(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      e(d) && (s[m] = r(d, m, t));
    }
  } catch (f) {
    n = { error: f };
  } finally {
    try {
      v && !v.done && (a = p.return) && a.call(p);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return s;
}
__name(vu, "vu");
c(vu, "mapFilterValues");
var Pd = c(function(t) {
  return function(r) {
    var e, n, a = r;
    try {
      for (var s = xe(t), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        a = a[v];
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
    return a;
  };
}, "path");
function _d(t, r) {
  return function(e) {
    var n, a, s = e;
    try {
      for (var p = xe(t), v = p.next(); !v.done; v = p.next()) {
        var m = v.value;
        s = s[r][m];
      }
    } catch (d) {
      n = { error: d };
    } finally {
      try {
        v && !v.done && (a = p.return) && a.call(p);
      } finally {
        if (n)
          throw n.error;
      }
    }
    return s;
  };
}
__name(_d, "_d");
c(_d, "nestedPath");
function _o(t) {
  if (!t)
    return [[]];
  if (Ce(t))
    return [[t]];
  var r = qe(Object.keys(t).map(function(e) {
    var n = t[e];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[e]] : _o(t[e]).map(function(a) {
      return [e].concat(a);
    });
  }));
  return r;
}
__name(_o, "_o");
c(_o, "toStatePaths");
function qe(t) {
  var r;
  return (r = []).concat.apply(r, Re([], Se(t), false));
}
__name(qe, "qe");
c(qe, "flatten");
function zd(t) {
  return on(t) ? t : [t];
}
__name(zd, "zd");
c(zd, "toArrayStrict");
function lr(t) {
  return t === void 0 ? [] : zd(t);
}
__name(lr, "lr");
c(lr, "toArray");
function Jn(t, r, e) {
  var n, a;
  if (ke(t))
    return t(r, e.data);
  var s = {};
  try {
    for (var p = xe(Object.keys(t)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = t[m];
      ke(d) ? s[m] = d(r, e.data) : s[m] = d;
    }
  } catch (f) {
    n = { error: f };
  } finally {
    try {
      v && !v.done && (a = p.return) && a.call(p);
    } finally {
      if (n)
        throw n.error;
    }
  }
  return s;
}
__name(Jn, "Jn");
c(Jn, "mapContext");
function Rd(t) {
  return /^(done|error)\./.test(t);
}
__name(Rd, "Rd");
c(Rd, "isBuiltInEvent");
function gu(t) {
  return !!(t instanceof Promise || t !== null && (ke(t) || typeof t == "object") && ke(t.then));
}
__name(gu, "gu");
c(gu, "isPromiseLike");
function Dd(t) {
  return t !== null && typeof t == "object" && "transition" in t && typeof t.transition == "function";
}
__name(Dd, "Dd");
c(Dd, "isBehavior");
function kd(t, r) {
  var e, n, a = Se([[], []], 2), s = a[0], p = a[1];
  try {
    for (var v = xe(t), m = v.next(); !m.done; m = v.next()) {
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
__name(kd, "kd");
c(kd, "partition");
function Nd(t, r) {
  return Pi(t.states, function(e, n) {
    if (e) {
      var a = (Ce(r) ? void 0 : r[n]) || (e ? e.current : void 0);
      if (a)
        return { current: a, states: Nd(e, a) };
    }
  });
}
__name(Nd, "Nd");
c(Nd, "updateHistoryStates");
function Gd(t, r) {
  return { current: r, states: Nd(t, r) };
}
__name(Gd, "Gd");
c(Gd, "updateHistoryValue");
function bu(t, r, e, n) {
  je || tt(!!t, "Attempting to update undefined context");
  var a = t && e.reduce(function(s, p) {
    var v, m, d = p.assignment, f = { state: n, action: p, _event: r }, y = {};
    if (ke(d))
      y = d(s, r.data, f);
    else
      try {
        for (var w = xe(Object.keys(d)), S = w.next(); !S.done; S = w.next()) {
          var T = S.value, C = d[T];
          y[T] = ke(C) ? C(s, r.data, f) : C;
        }
      } catch (_) {
        v = { error: _ };
      } finally {
        try {
          S && !S.done && (m = w.return) && m.call(w);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, s, y);
  }, t);
  return a;
}
__name(bu, "bu");
c(bu, "updateContext");
var tt = c(function() {
}, "warn");
je || (tt = c(function(t, r) {
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
c(on, "isArray");
function ke(t) {
  return typeof t == "function";
}
__name(ke, "ke");
c(ke, "isFunction");
function Ce(t) {
  return typeof t == "string";
}
__name(Ce, "Ce");
c(Ce, "isString");
function Cs(t, r) {
  if (t)
    return Ce(t) ? { type: xs, name: t, predicate: r ? r[t] : void 0 } : ke(t) ? { type: xs, name: t.name, predicate: t } : t;
}
__name(Cs, "Cs");
c(Cs, "toGuard");
function Ld(t) {
  try {
    return "subscribe" in t && ke(t.subscribe);
  } catch (r) {
    return false;
  }
}
__name(Ld, "Ld");
c(Ld, "isObservable");
var Lr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var Hw = (Es = {}, Es[Lr] = function() {
  return this;
}, Es[Symbol.observable] = function() {
  return this;
}, Es);
function jr(t) {
  return !!t && "__xstatenode" in t;
}
__name(jr, "jr");
c(jr, "isMachine");
function jd(t) {
  return !!t && typeof t.send == "function";
}
__name(jd, "jd");
c(jd, "isActor");
function zo(t, r) {
  return Ce(t) || typeof t == "number" ? V({ type: t }, r) : t;
}
__name(zo, "zo");
c(zo, "toEventObject");
function at(t, r) {
  if (!Ce(t) && "$$type" in t && t.$$type === "scxml")
    return t;
  var e = zo(t);
  return V({ name: e.type, data: e, $$type: "scxml", type: "external" }, r);
}
__name(at, "at");
c(at, "toSCXMLEvent");
function ei(t, r) {
  var e = zd(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || jr(n) ? { target: n, event: t } : V(V({}, n), { event: t });
  });
  return e;
}
__name(ei, "ei");
c(ei, "toTransitionConfigArray");
function Bd(t) {
  if (!(t === void 0 || t === Ad))
    return lr(t);
}
__name(Bd, "Bd");
c(Bd, "normalizeTarget");
function Hd(t, r, e) {
  if (!je) {
    var n = t.stack ? " Stacktrace was '".concat(t.stack, "'") : "";
    if (t === r)
      console.error("Missing onError handler for invocation '".concat(e, "', error was '").concat(t, "'.").concat(n));
    else {
      var a = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(e, "'. ") + "Original error: '".concat(t, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(a));
    }
  }
}
__name(Hd, "Hd");
c(Hd, "reportUnhandledExceptionOnInvocation");
function Os(t, r, e, n, a) {
  var s = t.options.guards, p = { state: a, cond: r, _event: n };
  if (r.type === xs)
    return ((s == null ? void 0 : s[r.name]) || r.predicate)(e, n.data, p);
  var v = s == null ? void 0 : s[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(t.id, "'."));
  return v(e, n.data, p);
}
__name(Os, "Os");
c(Os, "evaluateGuard");
function Ms(t) {
  return typeof t == "string" ? { type: t } : t;
}
__name(Ms, "Ms");
c(Ms, "toInvokeSource");
function _i(t, r, e) {
  var n = c(function() {
  }, "noop"), a = typeof t == "object", s = a ? t : null;
  return { next: ((a ? t.next : t) || n).bind(s), error: ((a ? t.error : r) || n).bind(s), complete: ((a ? t.complete : e) || n).bind(s) };
}
__name(_i, "_i");
c(_i, "toObserver");
function Ro(t, r) {
  return "".concat(t, ":invocation[").concat(r, "]");
}
__name(Ro, "Ro");
c(Ro, "createInvokeId");
var an = at({ type: Od });
function Is(t, r) {
  return r && r[t] || void 0;
}
__name(Is, "Is");
c(Is, "getActionFunction");
function Ri(t, r) {
  var e;
  if (Ce(t) || typeof t == "number") {
    var n = Is(t, r);
    ke(n) ? e = { type: t, exec: n } : n ? e = n : e = { type: t, exec: void 0 };
  } else if (ke(t))
    e = { type: t.name || t.toString(), exec: t };
  else {
    var n = Is(t.type, r);
    if (ke(n))
      e = V(V({}, t), { exec: n });
    else if (n) {
      var a = n.type || t.type;
      e = V(V(V({}, n), t), { type: a });
    } else
      e = t;
  }
  return e;
}
__name(Ri, "Ri");
c(Ri, "toActionObject");
var Br = c(function(t, r) {
  if (!t)
    return [];
  var e = on(t) ? t : [t];
  return e.map(function(n) {
    return Ri(n, r);
  });
}, "toActionObjects");
function As(t) {
  var r = Ri(t);
  return V(V({ id: Ce(t) ? t : r.id }, r), { type: r.type });
}
__name(As, "As");
c(As, "toActivityDefinition");
function $d(t) {
  return Ce(t) ? { type: rn, event: t } : yu(t, { to: Ar.Internal });
}
__name($d, "$d");
c($d, "raise");
function fb(t) {
  return { type: rn, _event: at(t.event) };
}
__name(fb, "fb");
c(fb, "resolveRaise");
function yu(t, r) {
  return { to: r ? r.to : void 0, type: nn, event: ke(t) ? t : zo(t), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : ke(t) ? t.name : Ss(t) };
}
__name(yu, "yu");
c(yu, "send");
function hb(t, r, e, n) {
  var a = { _event: e }, s = at(ke(t.event) ? t.event(r, e.data, a) : t.event), p;
  if (Ce(t.delay)) {
    var v = n && n[t.delay];
    p = ke(v) ? v(r, e.data, a) : v;
  } else
    p = ke(t.delay) ? t.delay(r, e.data, a) : t.delay;
  var m = ke(t.to) ? t.to(r, e.data, a) : t.to;
  return V(V({}, t), { to: m, _event: s, event: s.data, delay: p });
}
__name(hb, "hb");
c(hb, "resolveSend");
var mb = c(function(t, r, e) {
  return V(V({}, t), { value: Ce(t.expr) ? t.expr : t.expr(r, e.data, { _event: e }) });
}, "resolveLog");
var qd = c(function(t) {
  return { type: bs, sendId: t };
}, "cancel");
function Fd(t) {
  var r = As(t);
  return { type: De.Start, activity: r, exec: void 0 };
}
__name(Fd, "Fd");
c(Fd, "start");
function Ud(t) {
  var r = ke(t) ? t : As(t);
  return { type: De.Stop, activity: r, exec: void 0 };
}
__name(Ud, "Ud");
c(Ud, "stop");
function vb(t, r, e) {
  var n = ke(t.activity) ? t.activity(r, e.data) : t.activity, a = typeof n == "string" ? { id: n } : n, s = { type: De.Stop, activity: a };
  return s;
}
__name(vb, "vb");
c(vb, "resolveStop");
function Wd(t, r) {
  var e = r ? "#".concat(r) : "";
  return "".concat(De.After, "(").concat(t, ")").concat(e);
}
__name(Wd, "Wd");
c(Wd, "after");
function Do(t, r) {
  var e = "".concat(De.DoneState, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(Do, "Do");
c(Do, "done");
function Di(t, r) {
  var e = "".concat(De.DoneInvoke, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(Di, "Di");
c(Di, "doneInvoke");
function ti(t, r) {
  var e = "".concat(De.ErrorPlatform, ".").concat(t), n = { type: e, data: r };
  return n.toString = function() {
    return e;
  }, n;
}
__name(ti, "ti");
c(ti, "error");
var gb = c(function(t) {
  var r, e, n = [];
  try {
    for (var a = xe(t), s = a.next(); !s.done; s = a.next())
      for (var p = s.value, v = 0; v < p.actions.length; ) {
        if (p.actions[v].type === du) {
          n.push(p.actions[v]), p.actions.splice(v, 1);
          continue;
        }
        v++;
      }
  } catch (m) {
    r = { error: m };
  } finally {
    try {
      s && !s.done && (e = a.return) && e.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}, "pluckAssigns");
function zi(t, r, e, n, a, s, p) {
  p === void 0 && (p = false);
  var v = p ? [] : gb(a), m = v.length ? bu(e, n, v, r) : e, d = p ? [e] : void 0, f = [];
  function y(T, C) {
    var _;
    switch (C.type) {
      case rn:
        return fb(C);
      case nn:
        var k = hb(C, m, n, t.options.delays);
        return je || tt(!Ce(C.delay) || typeof k.delay == "number", "No delay reference for delay expression '".concat(C.delay, "' was found on machine '").concat(t.id, "'")), s && k.to !== Ar.Internal && (T === "entry" ? f.push(k) : s == null || s(k, m, n)), k;
      case ys: {
        var j = mb(C, m, n);
        return s == null || s(j, m, n), j;
      }
      case Md: {
        var $ = C, A = (_ = $.conds.find(function(ue) {
          var Ve = Cs(ue.cond, t.options.guards);
          return !Ve || Os(t, Ve, m, n, s ? void 0 : r);
        })) === null || _ === void 0 ? void 0 : _.actions;
        if (!A)
          return [];
        var ee = Se(zi(t, r, m, n, [{ type: T, actions: Br(lr(A), t.options.actions) }], s, p), 2), z = ee[0], B = ee[1];
        return m = B, d == null || d.push(m), z;
      }
      case Id: {
        var A = C.get(m, n.data);
        if (!A)
          return [];
        var J = Se(zi(t, r, m, n, [{ type: T, actions: Br(lr(A), t.options.actions) }], s, p), 2), te = J[0], le = J[1];
        return m = le, d == null || d.push(m), te;
      }
      case Ii: {
        var j = vb(C, m, n);
        return s == null || s(j, e, n), j;
      }
      case du: {
        m = bu(m, n, [C], s ? void 0 : r), d == null || d.push(m);
        break;
      }
      default:
        var X = Ri(C, t.options.actions), ie = X.exec;
        if (s)
          s(X, m, n);
        else if (ie && d) {
          var W = d.length - 1;
          X = V(V({}, X), { exec: function(ue) {
            for (var Ve = [], Fe = 1; Fe < arguments.length; Fe++)
              Ve[Fe - 1] = arguments[Fe];
            ie.apply(void 0, Re([d[W]], Se(Ve), false));
          } });
        }
        return X;
    }
  }
  __name(y, "y");
  c(y, "handleAction");
  function w(T) {
    var C, _, k = [];
    try {
      for (var j = xe(T.actions), $ = j.next(); !$.done; $ = j.next()) {
        var A = $.value, ee = y(T.type, A);
        ee && (k = k.concat(ee));
      }
    } catch (z) {
      C = { error: z };
    } finally {
      try {
        $ && !$.done && (_ = j.return) && _.call(j);
      } finally {
        if (C)
          throw C.error;
      }
    }
    return f.forEach(function(z) {
      s(z, m, n);
    }), f.length = 0, k;
  }
  __name(w, "w");
  c(w, "processBlock");
  var S = qe(a.map(w));
  return [S, m];
}
__name(zi, "zi");
c(zi, "resolveActions");
var Vd = [];
var zn = c(function(t, r) {
  Vd.push(t);
  var e = r(t);
  return Vd.pop(), e;
}, "provide");
function Yd(t) {
  var r;
  return r = { id: t, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: t };
  } }, r[Lr] = function() {
    return this;
  }, r;
}
__name(Yd, "Yd");
c(Yd, "createNullActor");
function Xd(t, r, e, n) {
  var a, s = Ms(t.src), p = (a = r == null ? void 0 : r.options.services) === null || a === void 0 ? void 0 : a[s.type], v = t.data ? Jn(t.data, e, n) : void 0, m = p ? wu(p, t.id, v) : Yd(t.id);
  return m.meta = t, m;
}
__name(Xd, "Xd");
c(Xd, "createInvocableActor");
function wu(t, r, e) {
  var n = Yd(r);
  if (n.deferred = true, jr(t)) {
    var a = n.state = zn(void 0, function() {
      return (e ? t.withContext(e) : t).initialState;
    });
    n.getSnapshot = function() {
      return a;
    };
  }
  return n;
}
__name(wu, "wu");
c(wu, "createDeferredActor");
function bb(t) {
  try {
    return typeof t.send == "function";
  } catch (r) {
    return false;
  }
}
__name(bb, "bb");
c(bb, "isActor");
function Zd(t) {
  return bb(t) && "id" in t;
}
__name(Zd, "Zd");
c(Zd, "isSpawnedActor");
function Qd(t) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[Lr] = function() {
    return this;
  }, r), t);
}
__name(Qd, "Qd");
c(Qd, "toActorRef");
var ko = c(function(t) {
  return t.type === "atomic" || t.type === "final";
}, "isLeafNode");
function Eu(t) {
  return Object.keys(t.states).map(function(r) {
    return t.states[r];
  });
}
__name(Eu, "Eu");
c(Eu, "getAllChildren");
function ki(t) {
  return Eu(t).filter(function(r) {
    return r.type !== "history";
  });
}
__name(ki, "ki");
c(ki, "getChildren");
function Su(t) {
  var r = [t];
  return ko(t) ? r : r.concat(qe(ki(t).map(Su)));
}
__name(Su, "Su");
c(Su, "getAllStateNodes");
function Ni(t, r) {
  var e, n, a, s, p, v, m, d, f = new Set(t), y = xu(f), w = new Set(r);
  try {
    for (var S = xe(w), T = S.next(); !T.done; T = S.next())
      for (var C = T.value, _ = C.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (te) {
    e = { error: te };
  } finally {
    try {
      T && !T.done && (n = S.return) && n.call(S);
    } finally {
      if (e)
        throw e.error;
    }
  }
  var k = xu(w);
  try {
    for (var j = xe(w), $ = j.next(); !$.done; $ = j.next()) {
      var C = $.value;
      if (C.type === "compound" && (!k.get(C) || !k.get(C).length))
        y.get(C) ? y.get(C).forEach(function(le) {
          return w.add(le);
        }) : C.initialStateNodes.forEach(function(le) {
          return w.add(le);
        });
      else if (C.type === "parallel")
        try {
          for (var A = (p = void 0, xe(ki(C))), ee = A.next(); !ee.done; ee = A.next()) {
            var z = ee.value;
            w.has(z) || (w.add(z), y.get(z) ? y.get(z).forEach(function(le) {
              return w.add(le);
            }) : z.initialStateNodes.forEach(function(le) {
              return w.add(le);
            }));
          }
        } catch (le) {
          p = { error: le };
        } finally {
          try {
            ee && !ee.done && (v = A.return) && v.call(A);
          } finally {
            if (p)
              throw p.error;
          }
        }
    }
  } catch (te) {
    a = { error: te };
  } finally {
    try {
      $ && !$.done && (s = j.return) && s.call(j);
    } finally {
      if (a)
        throw a.error;
    }
  }
  try {
    for (var B = xe(w), J = B.next(); !J.done; J = B.next())
      for (var C = J.value, _ = C.parent; _ && !w.has(_); )
        w.add(_), _ = _.parent;
  } catch (te) {
    m = { error: te };
  } finally {
    try {
      J && !J.done && (d = B.return) && d.call(B);
    } finally {
      if (m)
        throw m.error;
    }
  }
  return w;
}
__name(Ni, "Ni");
c(Ni, "getConfiguration");
function Kd(t, r) {
  var e = r.get(t);
  if (!e)
    return {};
  if (t.type === "compound") {
    var n = e[0];
    if (n) {
      if (ko(n))
        return n.key;
    } else
      return {};
  }
  var a = {};
  return e.forEach(function(s) {
    a[s.key] = Kd(s, r);
  }), a;
}
__name(Kd, "Kd");
c(Kd, "getValueFromAdj");
function xu(t) {
  var r, e, n = /* @__PURE__ */ new Map();
  try {
    for (var a = xe(t), s = a.next(); !s.done; s = a.next()) {
      var p = s.value;
      n.has(p) || n.set(p, []), p.parent && (n.has(p.parent) || n.set(p.parent, []), n.get(p.parent).push(p));
    }
  } catch (v) {
    r = { error: v };
  } finally {
    try {
      s && !s.done && (e = a.return) && e.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}
__name(xu, "xu");
c(xu, "getAdjList");
function Jd(t, r) {
  var e = Ni([t], r);
  return Kd(t, xu(e));
}
__name(Jd, "Jd");
c(Jd, "getValue");
function Gi(t, r) {
  return Array.isArray(t) ? t.some(function(e) {
    return e === r;
  }) : t instanceof Set ? t.has(r) : false;
}
__name(Gi, "Gi");
c(Gi, "has");
function ef(t) {
  return Re([], Se(new Set(qe(Re([], Se(t.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(ef, "ef");
c(ef, "nextEvents");
function No(t, r) {
  return r.type === "compound" ? ki(r).some(function(e) {
    return e.type === "final" && Gi(t, e);
  }) : r.type === "parallel" ? ki(r).every(function(e) {
    return No(t, e);
  }) : false;
}
__name(No, "No");
c(No, "isInFinalState");
function tf(t) {
  return t === void 0 && (t = []), t.reduce(function(r, e) {
    return e.meta !== void 0 && (r[e.id] = e.meta), r;
  }, {});
}
__name(tf, "tf");
c(tf, "getMeta");
function Tu(t) {
  return new Set(qe(t.map(function(r) {
    return r.tags;
  })));
}
__name(Tu, "Tu");
c(Tu, "getTagsFromConfiguration");
function Cu(t, r) {
  if (t === r)
    return true;
  if (t === void 0 || r === void 0)
    return false;
  if (Ce(t) || Ce(r))
    return t === r;
  var e = Object.keys(t), n = Object.keys(r);
  return e.length === n.length && e.every(function(a) {
    return Cu(t[a], r[a]);
  });
}
__name(Cu, "Cu");
c(Cu, "stateValuesEqual");
function rf(t) {
  return typeof t != "object" || t === null ? false : "value" in t && "_event" in t;
}
__name(rf, "rf");
c(rf, "isStateConfig");
function nf(t, r) {
  var e = t.exec, n = V(V({}, t), { exec: e !== void 0 ? function() {
    return e(r.context, r.event, { action: t, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(nf, "nf");
c(nf, "bindActionToState");
var wr = function() {
  function t(r) {
    var e = this, n;
    this.actions = [], this.activities = mu, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || mu, this.meta = tf(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return ef(e.configuration);
    } });
  }
  __name(t, "t");
  return c(t, "State"), t.from = function(r, e) {
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
    if (r === void 0 && (r = this.value), e === void 0 && (e = "."), Ce(r))
      return [r];
    var a = Object.keys(r);
    return a.concat.apply(a, Re([], Se(a.map(function(s) {
      return n.toStrings(r[s], e).map(function(p) {
        return s + e + p;
      });
    })), false));
  }, t.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var e = r.tags;
    r.machine;
    var n = Mi(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(e) });
  }, t.prototype.matches = function(r) {
    return Po(r, this.value);
  }, t.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, t.prototype.can = function(r) {
    var e;
    je && tt(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (e = this.machine) === null || e === void 0 ? void 0 : e.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(a) {
      return a.target !== void 0 || a.actions.length;
    });
  }, t;
}();
var yb = { deferEvents: false };
var Ou = function() {
  function t(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, yb), r);
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
var Mu = /* @__PURE__ */ new Map();
var wb = 0;
var Li = { bookId: function() {
  return "x:".concat(wb++);
}, register: function(t, r) {
  return Mu.set(t, r), t;
}, get: function(t) {
  return Mu.get(t);
}, free: function(t) {
  Mu.delete(t);
} };
function Ps() {
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
__name(Ps, "Ps");
c(Ps, "getGlobal");
function xb() {
  var t = Ps();
  if (t && "__xstate__" in t)
    return t.__xstate__;
}
__name(xb, "xb");
c(xb, "getDevTools");
function of(t) {
  if (Ps()) {
    var r = xb();
    r && r.register(t);
  }
}
__name(of, "of");
c(of, "registerService");
function af(t, r) {
  r === void 0 && (r = {});
  var e = t.initialState, n = /* @__PURE__ */ new Set(), a = [], s = false, p = c(function() {
    if (!s) {
      for (s = true; a.length > 0; ) {
        var d = a.shift();
        e = t.transition(e, d, m), n.forEach(function(f) {
          return f.next(e);
        });
      }
      s = false;
    }
  }, "flush"), v = Qd({ id: r.id, send: function(d) {
    a.push(d), p();
  }, getSnapshot: function() {
    return e;
  }, subscribe: function(d, f, y) {
    var w = _i(d, f, y);
    return n.add(w), w.next(e), { unsubscribe: function() {
      n.delete(w);
    } };
  } }), m = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return e = t.start ? t.start(m) : e, v;
}
__name(af, "af");
c(af, "spawnBehavior");
var Eb = { sync: false, autoForward: false };
var ft;
(function(t) {
  t[t.NotStarted = 0] = "NotStarted", t[t.Running = 1] = "Running", t[t.Stopped = 2] = "Stopped";
})(ft || (ft = {}));
var sf = function() {
  function t(r, e) {
    e === void 0 && (e = t.defaultOptions);
    var n = this;
    this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = ft.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(f, y) {
      if (on(f))
        return n.batch(f), n.state;
      var w = at(zo(f, y));
      if (n.status === ft.Stopped)
        return je || tt(false, 'Event "'.concat(w.name, '" was sent to stopped service "').concat(n.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(w.data))), n.state;
      if (n.status !== ft.Running && !n.options.deferEvents)
        throw new Error('Event "'.concat(w.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(w.data)));
      return n.scheduler.schedule(function() {
        n.forward(w);
        var S = n._nextState(w);
        n.update(S, w);
      }), n._state;
    }, this.sendTo = function(f, y, w) {
      var S = n.parent && (y === Ar.Parent || n.parent.id === y), T = S ? n.parent : Ce(y) ? n.children.get(y) || Li.get(y) : jd(y) ? y : void 0;
      if (!T) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(y, "' from service '").concat(n.id, "'."));
        je || tt(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(f.type));
        return;
      }
      if ("machine" in T) {
        if (n.status !== ft.Stopped || n.parent !== T || n.state.done) {
          var C = V(V({}, f), { name: f.name === hu ? "".concat(ti(n.id)) : f.name, origin: n.sessionId });
          !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, C]) : T.send(C);
        }
      } else
        !w && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([T, f.data]) : T.send(f.data);
    }, this._exec = function(f, y, w, S) {
      S === void 0 && (S = n.machine.options.actions);
      var T = f.exec || Is(f.type, S), C = ke(T) ? T : T ? T.exec : f.exec;
      if (C)
        try {
          return C(y, w.data, n.machine.config.predictableActionArguments ? { action: f, _event: w } : { action: f, state: n.state, _event: w });
        } catch (ie) {
          throw n.parent && n.parent.send({ type: "xstate.error", data: ie }), ie;
        }
      switch (f.type) {
        case nn:
          var _ = f;
          if (typeof _.delay == "number") {
            n.defer(_);
            return;
          } else
            _.to ? n.sendTo(_._event, _.to, w === an) : n.send(_._event);
          break;
        case bs:
          n.cancel(f.sendId);
          break;
        case Oo: {
          if (n.status !== ft.Running)
            return;
          var k = f.activity;
          if (!n.machine.config.predictableActionArguments && !n.state.activities[k.id || k.type])
            break;
          if (k.type === De.Invoke) {
            var j = Ms(k.src), $ = n.machine.options.services ? n.machine.options.services[j.type] : void 0, A = k.id, ee = k.data;
            je || tt(!("forward" in k), "`forward` property is deprecated (found in invocation of '".concat(k.src, "' in in machine '").concat(n.machine.id, "'). ") + "Please use `autoForward` instead.");
            var z = "autoForward" in k ? k.autoForward : !!k.forward;
            if (!$) {
              je || tt(false, "No service found for invocation '".concat(k.src, "' in machine '").concat(n.machine.id, "'."));
              return;
            }
            var B = ee ? Jn(ee, y, w) : void 0;
            if (typeof $ == "string")
              return;
            var J = ke($) ? $(y, w.data, { data: B, src: j, meta: k.meta }) : $;
            if (!J)
              return;
            var te = void 0;
            jr(J) && (J = B ? J.withContext(B) : J, te = { autoForward: z }), n.spawn(J, A, te);
          } else
            n.spawnActivity(k);
          break;
        }
        case Ii: {
          n.stopChild(f.activity.id);
          break;
        }
        case ys:
          var le = f.label, X = f.value;
          le ? n.logger(le, X) : n.logger(X);
          break;
        default:
          je || tt(false, "No implementation found for action type '".concat(f.type, "'"));
          break;
      }
    };
    var a = V(V({}, t.defaultOptions), e), s = a.clock, p = a.logger, v = a.parent, m = a.id, d = m !== void 0 ? m : r.id;
    this.id = d, this.logger = p, this.clock = s, this.parent = v, this.options = a, this.scheduler = new Ou({ deferEvents: this.options.deferEvents }), this.sessionId = Li.bookId();
  }
  __name(t, "t");
  return c(t, "Interpreter"), Object.defineProperty(t.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : zn(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "state", { get: function() {
    return je || tt(this.status !== ft.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), t.prototype.execute = function(r, e) {
    var n, a;
    try {
      for (var s = xe(r.actions), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        this.exec(v, r, e);
      }
    } catch (m) {
      n = { error: m };
    } finally {
      try {
        p && !p.done && (a = s.return) && a.call(s);
      } finally {
        if (n)
          throw n.error;
      }
    }
  }, t.prototype.update = function(r, e) {
    var n, a, s, p, v, m, d, f, y = this;
    if (r._sessionid = this.sessionId, this._state = r, (!this.machine.config.predictableActionArguments || e === an) && this.options.execute)
      this.execute(this.state);
    else
      for (var w = void 0; w = this._outgoingQueue.shift(); )
        w[0].send(w[1]);
    if (this.children.forEach(function(te) {
      y.state.children[te.id] = te;
    }), this.devTools && this.devTools.send(e.data, r), r.event)
      try {
        for (var S = xe(this.eventListeners), T = S.next(); !T.done; T = S.next()) {
          var C = T.value;
          C(r.event);
        }
      } catch (te) {
        n = { error: te };
      } finally {
        try {
          T && !T.done && (a = S.return) && a.call(S);
        } finally {
          if (n)
            throw n.error;
        }
      }
    try {
      for (var _ = xe(this.listeners), k = _.next(); !k.done; k = _.next()) {
        var C = k.value;
        C(r, r.event);
      }
    } catch (te) {
      s = { error: te };
    } finally {
      try {
        k && !k.done && (p = _.return) && p.call(_);
      } finally {
        if (s)
          throw s.error;
      }
    }
    try {
      for (var j = xe(this.contextListeners), $ = j.next(); !$.done; $ = j.next()) {
        var A = $.value;
        A(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch (te) {
      v = { error: te };
    } finally {
      try {
        $ && !$.done && (m = j.return) && m.call(j);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (this.state.done) {
      var ee = r.configuration.find(function(te) {
        return te.type === "final" && te.parent === y.machine;
      }), z = ee && ee.doneData ? Jn(ee.doneData, r.context, e) : void 0;
      try {
        for (var B = xe(this.doneListeners), J = B.next(); !J.done; J = B.next()) {
          var C = J.value;
          C(Di(this.id, z));
        }
      } catch (te) {
        d = { error: te };
      } finally {
        try {
          J && !J.done && (f = B.return) && f.call(B);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this._stop(), this._stopChildren(), Li.free(this.sessionId);
    }
  }, t.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === ft.Running && r(this.state, this.state.event), this;
  }, t.prototype.subscribe = function(r, e, n) {
    var a = this, s = _i(r, e, n);
    this.listeners.add(s.next), this.status !== ft.NotStarted && s.next(this.state);
    var p = c(function() {
      a.doneListeners.delete(p), a.stopListeners.delete(p), s.complete();
    }, "completeOnce");
    return this.status === ft.Stopped ? s.complete() : (this.onDone(p), this.onStop(p)), { unsubscribe: function() {
      a.listeners.delete(s.next), a.doneListeners.delete(p), a.stopListeners.delete(p);
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
    if (this.status === ft.Running)
      return this;
    this.machine._init(), Li.register(this.sessionId, this), this.initialized = true, this.status = ft.Running;
    var n = r === void 0 ? this.initialState : zn(this, function() {
      return rf(r) ? e.machine.resolveState(r) : e.machine.resolveState(wr.from(r, e.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      e.update(n, an);
    }), this;
  }, t.prototype._stopChildren = function() {
    this.children.forEach(function(r) {
      ke(r.stop) && r.stop();
    }), this.children.clear();
  }, t.prototype._stop = function() {
    var r, e, n, a, s, p, v, m, d, f;
    try {
      for (var y = xe(this.listeners), w = y.next(); !w.done; w = y.next()) {
        var S = w.value;
        this.listeners.delete(S);
      }
    } catch (B) {
      r = { error: B };
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
        var S = C.value;
        S(), this.stopListeners.delete(S);
      }
    } catch (B) {
      n = { error: B };
    } finally {
      try {
        C && !C.done && (a = T.return) && a.call(T);
      } finally {
        if (n)
          throw n.error;
      }
    }
    try {
      for (var _ = xe(this.contextListeners), k = _.next(); !k.done; k = _.next()) {
        var S = k.value;
        this.contextListeners.delete(S);
      }
    } catch (B) {
      s = { error: B };
    } finally {
      try {
        k && !k.done && (p = _.return) && p.call(_);
      } finally {
        if (s)
          throw s.error;
      }
    }
    try {
      for (var j = xe(this.doneListeners), $ = j.next(); !$.done; $ = j.next()) {
        var S = $.value;
        this.doneListeners.delete(S);
      }
    } catch (B) {
      v = { error: B };
    } finally {
      try {
        $ && !$.done && (m = j.return) && m.call(j);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    this.initialized = false, this.status = ft.Stopped, this._initialState = void 0;
    try {
      for (var A = xe(Object.keys(this.delayedEventsMap)), ee = A.next(); !ee.done; ee = A.next()) {
        var z = ee.value;
        this.clock.clearTimeout(this.delayedEventsMap[z]);
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
    this.scheduler.clear(), this.scheduler = new Ou({ deferEvents: this.options.deferEvents });
  }, t.prototype.stop = function() {
    var r = this, e = this.scheduler;
    return this._stop(), e.schedule(function() {
      var n = at({ type: "xstate.stop" }), a = zn(r, function() {
        var s = qe(Re([], Se(r.state.configuration), false).sort(function(f, y) {
          return y.order - f.order;
        }).map(function(f) {
          return Br(f.onExit, r.machine.options.actions);
        })), p = Se(zi(r.machine, r.state, r.state.context, n, [{ type: "exit", actions: s }], r.machine.config.predictableActionArguments ? r._exec : void 0, r.machine.config.predictableActionArguments || r.machine.config.preserveActionOrder), 2), v = p[0], m = p[1], d = new wr({ value: r.state.value, context: m, _event: n, _sessionid: r.sessionId, historyValue: void 0, history: r.state, actions: v.filter(function(f) {
          return f.type !== rn && (f.type !== nn || !!f.to && f.to !== Ar.Internal);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: r.state.done, tags: r.state.tags, machine: r.machine });
        return d.changed = true, d;
      });
      r.update(a, n), r._stopChildren(), Li.free(r.sessionId);
    }), this;
  }, t.prototype.batch = function(r) {
    var e = this;
    if (this.status === ft.NotStarted && this.options.deferEvents)
      je || tt(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== ft.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (r.length) {
      var n = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var a, s, p = e.state, v = false, m = [], d = c(function(S) {
          var T = at(S);
          e.forward(T), p = zn(e, function() {
            return e.machine.transition(p, T, void 0, n || void 0);
          }), m.push.apply(m, Re([], Se(e.machine.config.predictableActionArguments ? p.actions : p.actions.map(function(C) {
            return nf(C, p);
          })), false)), v = v || !!p.changed;
        }, "_loop_1");
        try {
          for (var f = xe(r), y = f.next(); !y.done; y = f.next()) {
            var w = y.value;
            d(w);
          }
        } catch (S) {
          a = { error: S };
        } finally {
          try {
            y && !y.done && (s = f.return) && s.call(f);
          } finally {
            if (a)
              throw a.error;
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
    var a = at(r);
    if (a.name.indexOf(fu) === 0 && !this.state.nextEvents.some(function(p) {
      return p.indexOf(fu) === 0;
    }))
      throw a.data.data;
    var s = zn(this, function() {
      return n.machine.transition(n.state, a, void 0, e || void 0);
    });
    return s;
  }, t.prototype.nextState = function(r) {
    return this._nextState(r, false);
  }, t.prototype.forward = function(r) {
    var e, n;
    try {
      for (var a = xe(this.forwardTo), s = a.next(); !s.done; s = a.next()) {
        var p = s.value, v = this.children.get(p);
        if (!v)
          throw new Error("Unable to forward event '".concat(r, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(p, "'."));
        v.send(r);
      }
    } catch (m) {
      e = { error: m };
    } finally {
      try {
        s && !s.done && (n = a.return) && n.call(a);
      } finally {
        if (e)
          throw e.error;
      }
    }
  }, t.prototype.defer = function(r) {
    var e = this;
    this.delayedEventsMap[r.id] = this.clock.setTimeout(function() {
      r.to ? e.sendTo(r._event, r.to, true) : e.send(r._event);
    }, r.delay);
  }, t.prototype.cancel = function(r) {
    this.clock.clearTimeout(this.delayedEventsMap[r]), delete this.delayedEventsMap[r];
  }, t.prototype.exec = function(r, e, n) {
    n === void 0 && (n = this.machine.options.actions), this._exec(r, e.context, e._event, n);
  }, t.prototype.removeChild = function(r) {
    var e;
    this.children.delete(r), this.forwardTo.delete(r), (e = this.state) === null || e === void 0 || delete e.children[r];
  }, t.prototype.stopChild = function(r) {
    var e = this.children.get(r);
    e && (this.removeChild(r), ke(e.stop) && e.stop());
  }, t.prototype.spawn = function(r, e, n) {
    if (this.status !== ft.Running)
      return wu(r, e);
    if (gu(r))
      return this.spawnPromise(Promise.resolve(r), e);
    if (ke(r))
      return this.spawnCallback(r, e);
    if (Zd(r))
      return this.spawnActor(r, e);
    if (Ld(r))
      return this.spawnObservable(r, e);
    if (jr(r))
      return this.spawnMachine(r, V(V({}, n), { id: e }));
    if (Dd(r))
      return this.spawnBehavior(r, e);
    throw new Error('Unable to spawn entity "'.concat(e, '" of type "').concat(typeof r, '".'));
  }, t.prototype.spawnMachine = function(r, e) {
    var n = this;
    e === void 0 && (e = {});
    var a = new t(r, V(V({}, this.options), { parent: this, id: e.id || r.id })), s = V(V({}, Eb), e);
    s.sync && a.onTransition(function(v) {
      n.send(Io, { state: v, id: a.id });
    });
    var p = a;
    return this.children.set(a.id, p), s.autoForward && this.forwardTo.add(a.id), a.onDone(function(v) {
      n.removeChild(a.id), n.send(at(v, { origin: a.id }));
    }).start(), p;
  }, t.prototype.spawnBehavior = function(r, e) {
    var n = af(r, { id: e, parent: this });
    return this.children.set(e, n), n;
  }, t.prototype.spawnPromise = function(r, e) {
    var n, a = this, s = false, p;
    r.then(function(m) {
      s || (p = m, a.removeChild(e), a.send(at(Di(e, m), { origin: e })));
    }, function(m) {
      if (!s) {
        a.removeChild(e);
        var d = ti(e, m);
        try {
          a.send(at(d, { origin: e }));
        } catch (f) {
          Hd(m, f, e), a.devTools && a.devTools.send(d, a.state), a.machine.strict && a.stop();
        }
      }
    });
    var v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      var y = _i(m, d, f), w = false;
      return r.then(function(S) {
        w || (y.next(S), !w && y.complete());
      }, function(S) {
        w || y.error(S);
      }), { unsubscribe: function() {
        return w = true;
      } };
    }, stop: function() {
      s = true;
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return p;
    } }, n[Lr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnCallback = function(r, e) {
    var n, a = this, s = false, p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m, d = c(function(w) {
      m = w, v.forEach(function(S) {
        return S(w);
      }), !s && a.send(at(w, { origin: e }));
    }, "receive"), f;
    try {
      f = r(d, function(w) {
        p.add(w);
      });
    } catch (w) {
      this.send(ti(e, w));
    }
    if (gu(f))
      return this.spawnPromise(f, e);
    var y = (n = { id: e, send: function(w) {
      return p.forEach(function(S) {
        return S(w);
      });
    }, subscribe: function(w) {
      var S = _i(w);
      return v.add(S.next), { unsubscribe: function() {
        v.delete(S.next);
      } };
    }, stop: function() {
      s = true, ke(f) && f();
    }, toJSON: function() {
      return { id: e };
    }, getSnapshot: function() {
      return m;
    } }, n[Lr] = function() {
      return this;
    }, n);
    return this.children.set(e, y), y;
  }, t.prototype.spawnObservable = function(r, e) {
    var n, a = this, s, p = r.subscribe(function(m) {
      s = m, a.send(at(m, { origin: e }));
    }, function(m) {
      a.removeChild(e), a.send(at(ti(e, m), { origin: e }));
    }, function() {
      a.removeChild(e), a.send(at(Di(e), { origin: e }));
    }), v = (n = { id: e, send: function() {
    }, subscribe: function(m, d, f) {
      return r.subscribe(m, d, f);
    }, stop: function() {
      return p.unsubscribe();
    }, getSnapshot: function() {
      return s;
    }, toJSON: function() {
      return { id: e };
    } }, n[Lr] = function() {
      return this;
    }, n);
    return this.children.set(e, v), v;
  }, t.prototype.spawnActor = function(r, e) {
    return this.children.set(e, r), r;
  }, t.prototype.spawnActivity = function(r) {
    var e = this.machine.options && this.machine.options.activities ? this.machine.options.activities[r.type] : void 0;
    if (!e) {
      je || tt(false, "No implementation found for activity '".concat(r.type, "'"));
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
    } }, n[Lr] = function() {
      return this;
    }, n));
  }, t.prototype.attachDev = function() {
    var r = Ps();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var e = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, e), { features: V({ jump: false, skip: false }, e ? e.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      of(this);
    }
  }, t.prototype.toJSON = function() {
    return { id: this.id };
  }, t.prototype[Lr] = function() {
    return this;
  }, t.prototype.getSnapshot = function() {
    return this.status === ft.NotStarted ? this.initialState : this._state;
  }, t.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(r, e) {
    return setTimeout(r, e);
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  } }, logger: console.log.bind(console), devTools: false }, t.interpret = st, t;
}();
function st(t, r) {
  var e = new sf(t, r);
  return e;
}
__name(st, "st");
c(st, "interpret");
function Sb(t) {
  if (typeof t == "string") {
    var r = { type: t };
    return r.toString = function() {
      return t;
    }, r;
  }
  return t;
}
__name(Sb, "Sb");
c(Sb, "toInvokeSource");
function Go(t) {
  return V(V({ type: Mo }, t), { toJSON: function() {
    t.onDone, t.onError;
    var r = Mi(t, ["onDone", "onError"]);
    return V(V({}, r), { type: Mo, src: Sb(t.src) });
  } });
}
__name(Go, "Go");
c(Go, "toInvokeDefinition");
var Hi = "";
var Iu = "#";
var Lo = "*";
var ji = {};
var Bi = c(function(t) {
  return t[0] === Iu;
}, "isStateId");
var Tb = c(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Cb = c(function(t, r, e) {
  var n = e.slice(0, -1).some(function(s) {
    return !("cond" in s) && !("in" in s) && (Ce(s.target) || jr(s.target));
  }), a = r === Hi ? "the transient event" : "event '".concat(r, "'");
  tt(!n, "One or more transitions for ".concat(a, " on state '").concat(t.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var lf = function() {
  function t(r, e, n, a) {
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var s = this, p;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Tb(), e), this.parent = a == null ? void 0 : a.parent, this.key = this.config.key || (a == null ? void 0 : a.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ws), this.id = this.config.id || Re([this.machine.key], Se(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (p = this.config.schema) !== null && p !== void 0 ? p : {}, this.description = this.config.description, je || tt(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? Pi(this.config.states, function(d, f) {
      var y, w = new t(d, {}, void 0, { parent: s, key: f });
      return Object.assign(s.idMap, V((y = {}, y[w.id] = w, y), w.idMap)), w;
    }) : ji;
    var v = 0;
    function m(d) {
      var f, y;
      d.order = v++;
      try {
        for (var w = xe(Eu(d)), S = w.next(); !S.done; S = w.next()) {
          var T = S.value;
          m(T);
        }
      } catch (C) {
        f = { error: C };
      } finally {
        try {
          S && !S.done && (y = w.return) && y.call(w);
        } finally {
          if (f)
            throw f.error;
        }
      }
    }
    __name(m, "m");
    c(m, "dfs"), m(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var f = d.event;
      return f === Hi;
    }) : Hi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = lr(this.config.entry || this.config.onEntry).map(function(d) {
      return Ri(d);
    }), this.onExit = lr(this.config.exit || this.config.onExit).map(function(d) {
      return Ri(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = lr(this.config.invoke).map(function(d, f) {
      var y, w;
      if (jr(d)) {
        var S = Ro(s.id, f);
        return s.machine.options.services = V((y = {}, y[S] = d, y), s.machine.options.services), Go({ src: S, id: S });
      } else if (Ce(d.src)) {
        var S = d.id || Ro(s.id, f);
        return Go(V(V({}, d), { id: S, src: d.src }));
      } else if (jr(d.src) || ke(d.src)) {
        var S = d.id || Ro(s.id, f);
        return s.machine.options.services = V((w = {}, w[S] = d.src, w), s.machine.options.services), Go(V(V({ id: S }, d), { src: S }));
      } else {
        var T = d.src;
        return Go(V(V({ id: Ro(s.id, f) }, d), { src: T }));
      }
    }), this.activities = lr(this.config.activities).concat(this.invoke).map(function(d) {
      return As(d);
    }), this.transition = this.transition.bind(this), this.tags = lr(this.config.tags);
  }
  __name(t, "t");
  return c(t, "StateNode"), t.prototype._init = function() {
    this.__cache.transitions || Su(this).forEach(function(r) {
      return r.on;
    });
  }, t.prototype.withConfig = function(r, e) {
    var n = this.options, a = n.actions, s = n.activities, p = n.guards, v = n.services, m = n.delays;
    return new t(this.config, { actions: V(V({}, a), r.actions), activities: V(V({}, s), r.activities), guards: V(V({}, p), r.guards), services: V(V({}, v), r.services), delays: V(V({}, m), r.delays) }, e != null ? e : this.context);
  }, t.prototype.withContext = function(r) {
    return new t(this.config, this.options, r);
  }, Object.defineProperty(t.prototype, "context", { get: function() {
    return ke(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: Pi(this.states, function(r) {
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
    var e = r === Hi, n = this.transitions.filter(function(a) {
      var s = a.eventType === r;
      return e ? s : s || a.eventType === Lo;
    });
    return this.__cache.candidates[r] = n, n;
  }, t.prototype.getDelayedTransitions = function() {
    var r = this, e = this.config.after;
    if (!e)
      return [];
    var n = c(function(s, p) {
      var v = ke(s) ? "".concat(r.id, ":delay[").concat(p, "]") : s, m = Wd(v, r.id);
      return r.onEntry.push(yu(m, { delay: s })), r.onExit.push(qd(m)), m;
    }, "mutateEntryExit"), a = on(e) ? e.map(function(s, p) {
      var v = n(s.delay, p);
      return V(V({}, s), { event: v });
    }) : qe(Object.keys(e).map(function(s, p) {
      var v = e[s], m = Ce(v) ? { target: v } : v, d = isNaN(+s) ? s : +s, f = n(d, p);
      return lr(m).map(function(y) {
        return V(V({}, y), { event: f, delay: d });
      });
    }));
    return a.map(function(s) {
      var p = s.delay;
      return V(V({}, r.formatTransition(s)), { delay: p });
    });
  }, t.prototype.getStateNodes = function(r) {
    var e, n = this;
    if (!r)
      return [];
    var a = r instanceof wr ? r.value : Ai(r, this.delimiter);
    if (Ce(a)) {
      var s = this.getStateNode(a).initial;
      return s !== void 0 ? this.getStateNodes((e = {}, e[a] = s, e)) : [this, this.states[a]];
    }
    var p = Object.keys(a), v = [this];
    return v.push.apply(v, Re([], Se(qe(p.map(function(m) {
      return n.getStateNode(m).getStateNodes(a[m]);
    }))), false)), v;
  }, t.prototype.handles = function(r) {
    var e = Ss(r);
    return this.events.includes(e);
  }, t.prototype.resolveState = function(r) {
    var e = r instanceof wr ? r : wr.create(r), n = Array.from(Ni([], this.getStateNodes(e.value)));
    return new wr(V(V({}, e), { value: this.resolve(e.value), configuration: n, done: No(n, this), tags: Tu(n), machine: this.machine }));
  }, t.prototype.transitionLeafNode = function(r, e, n) {
    var a = this.getStateNode(r), s = a.next(e, n);
    return !s || !s.transitions.length ? this.next(e, n) : s;
  }, t.prototype.transitionCompoundNode = function(r, e, n) {
    var a = Object.keys(r), s = this.getStateNode(a[0]), p = s._transition(r[a[0]], e, n);
    return !p || !p.transitions.length ? this.next(e, n) : p;
  }, t.prototype.transitionParallelNode = function(r, e, n) {
    var a, s, p = {};
    try {
      for (var v = xe(Object.keys(r)), m = v.next(); !m.done; m = v.next()) {
        var d = m.value, f = r[d];
        if (f) {
          var y = this.getStateNode(d), w = y._transition(f, e, n);
          w && (p[d] = w);
        }
      }
    } catch (k) {
      a = { error: k };
    } finally {
      try {
        m && !m.done && (s = v.return) && s.call(v);
      } finally {
        if (a)
          throw a.error;
      }
    }
    var S = Object.keys(p).map(function(k) {
      return p[k];
    }), T = qe(S.map(function(k) {
      return k.transitions;
    })), C = S.some(function(k) {
      return k.transitions.length > 0;
    });
    if (!C)
      return this.next(e, n);
    var _ = qe(Object.keys(p).map(function(k) {
      return p[k].configuration;
    }));
    return { transitions: T, exitSet: qe(S.map(function(k) {
      return k.exitSet;
    })), configuration: _, source: e, actions: qe(Object.keys(p).map(function(k) {
      return p[k].actions;
    })) };
  }, t.prototype._transition = function(r, e, n) {
    return Ce(r) ? this.transitionLeafNode(r, e, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, e, n) : this.transitionParallelNode(r, e, n);
  }, t.prototype.getTransitionData = function(r, e) {
    return this._transition(r.value, r, at(e));
  }, t.prototype.next = function(r, e) {
    var n, a, s = this, p = e.name, v = [], m = [], d;
    try {
      for (var f = xe(this.getCandidates(p)), y = f.next(); !y.done; y = f.next()) {
        var w = y.value, S = w.cond, T = w.in, C = r.context, _ = T ? Ce(T) && Bi(T) ? r.matches(Ai(this.getStateNodeById(T).path, this.delimiter)) : Po(Ai(T, this.delimiter), Pd(this.path.slice(0, -2))(r.value)) : true, k = false;
        try {
          k = !S || Os(this.machine, S, C, e, r);
        } catch (A) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(p, "' in state node '").concat(this.id, `':
`).concat(A.message));
        }
        if (k && _) {
          w.target !== void 0 && (m = w.target), v.push.apply(v, Re([], Se(w.actions), false)), d = w;
          break;
        }
      }
    } catch (A) {
      n = { error: A };
    } finally {
      try {
        y && !y.done && (a = f.return) && a.call(f);
      } finally {
        if (n)
          throw n.error;
      }
    }
    if (d) {
      if (!m.length)
        return { transitions: [d], exitSet: [], configuration: r.value ? [this] : [], source: r, actions: v };
      var j = qe(m.map(function(A) {
        return s.getRelativeStateNodes(A, r.historyValue);
      })), $ = !!d.internal;
      return { transitions: [d], exitSet: $ ? [] : qe(m.map(function(A) {
        return s.getPotentiallyReenteringNodes(A);
      })), configuration: j, source: r, actions: v };
    }
  }, t.prototype.getPotentiallyReenteringNodes = function(r) {
    if (this.order < r.order)
      return [this];
    for (var e = [], n = this, a = r; n && n !== a; )
      e.push(n), n = n.parent;
    return n !== a ? [] : (e.push(a), e);
  }, t.prototype.getActions = function(r, e, n, a, s, p, v) {
    var m, d, f, y, w = this, S = p ? Ni([], this.getStateNodes(p.value)) : [], T = /* @__PURE__ */ new Set();
    try {
      for (var C = xe(Array.from(r).sort(function(X, ie) {
        return X.order - ie.order;
      })), _ = C.next(); !_.done; _ = C.next()) {
        var k = _.value;
        (!Gi(S, k) || Gi(n.exitSet, k) || k.parent && T.has(k.parent)) && T.add(k);
      }
    } catch (X) {
      m = { error: X };
    } finally {
      try {
        _ && !_.done && (d = C.return) && d.call(C);
      } finally {
        if (m)
          throw m.error;
      }
    }
    try {
      for (var j = xe(S), $ = j.next(); !$.done; $ = j.next()) {
        var k = $.value;
        (!Gi(r, k) || Gi(n.exitSet, k.parent)) && n.exitSet.push(k);
      }
    } catch (X) {
      f = { error: X };
    } finally {
      try {
        $ && !$.done && (y = j.return) && y.call(j);
      } finally {
        if (f)
          throw f.error;
      }
    }
    n.exitSet.sort(function(X, ie) {
      return ie.order - X.order;
    });
    var A = Array.from(T).sort(function(X, ie) {
      return X.order - ie.order;
    }), ee = new Set(n.exitSet), z = qe(A.map(function(X) {
      var ie = [];
      if (X.type !== "final")
        return ie;
      var W = X.parent;
      if (!W.parent)
        return ie;
      ie.push(Do(X.id, X.doneData), Do(W.id, X.doneData ? Jn(X.doneData, a, s) : void 0));
      var ue = W.parent;
      return ue.type === "parallel" && ki(ue).every(function(Ve) {
        return No(n.configuration, Ve);
      }) && ie.push(Do(ue.id)), ie;
    })), B = A.map(function(X) {
      var ie = X.onEntry, W = X.activities.map(function(ue) {
        return Fd(ue);
      });
      return { type: "entry", actions: Br(v ? Re(Re([], Se(ie), false), Se(W), false) : Re(Re([], Se(W), false), Se(ie), false), w.machine.options.actions) };
    }).concat({ type: "state_done", actions: z.map($d) }), J = Array.from(ee).map(function(X) {
      return { type: "exit", actions: Br(Re(Re([], Se(X.onExit), false), Se(X.activities.map(function(ie) {
        return Ud(ie);
      })), false), w.machine.options.actions) };
    }), te = J.concat({ type: "transition", actions: Br(n.actions, this.machine.options.actions) }).concat(B);
    if (e) {
      var le = Br(qe(Re([], Se(r), false).sort(function(X, ie) {
        return ie.order - X.order;
      }).map(function(X) {
        return X.onExit;
      })), this.machine.options.actions).filter(function(X) {
        return X.type !== rn && (X.type !== nn || !!X.to && X.to !== Ar.Internal);
      });
      return te.concat({ type: "stop", actions: le });
    }
    return te;
  }, t.prototype.transition = function(r, e, n, a) {
    r === void 0 && (r = this.initialState);
    var s = at(e), p;
    if (r instanceof wr)
      p = n === void 0 ? r : this.resolveState(wr.from(r, n));
    else {
      var v = Ce(r) ? this.resolve(Ao(this.getResolvedPath(r))) : this.resolve(r), m = n != null ? n : this.machine.context;
      p = this.resolveState(wr.from(v, m));
    }
    if (!je && s.name === Lo)
      throw new Error("An event cannot have the wildcard type ('".concat(Lo, "')"));
    if (this.strict && !this.events.includes(s.name) && !Rd(s.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(s.name, "'"));
    var d = this._transition(p.value, p, s) || { transitions: [], configuration: [], exitSet: [], source: p, actions: [] }, f = Ni([], this.getStateNodes(p.value)), y = d.configuration.length ? Ni(f, d.configuration) : f;
    return d.configuration = Re([], Se(y), false), this.resolveTransition(d, p, p.context, a, s);
  }, t.prototype.resolveRaisedTransition = function(r, e, n, a) {
    var s, p = r.actions;
    return r = this.transition(r, e, void 0, a), r._event = n, r.event = n.data, (s = r.actions).unshift.apply(s, Re([], Se(p), false)), r;
  }, t.prototype.resolveTransition = function(r, e, n, a, s) {
    var p, v, m, d, f = this;
    s === void 0 && (s = an);
    var y = r.configuration, w = !e || r.transitions.length > 0, S = w ? r.configuration : e ? e.configuration : [], T = No(S, this), C = w ? Jd(this.machine, y) : void 0, _ = e ? e.historyValue ? e.historyValue : r.source ? this.machine.historyValue(e.value) : void 0 : void 0, k = this.getActions(new Set(S), T, r, n, s, e, a), j = e ? V({}, e.activities) : {};
    try {
      for (var $ = xe(k), A = $.next(); !A.done; A = $.next()) {
        var ee = A.value;
        try {
          for (var z = (m = void 0, xe(ee.actions)), B = z.next(); !B.done; B = z.next()) {
            var J = B.value;
            J.type === Oo ? j[J.activity.id || J.activity.type] = J : J.type === Ii && (j[J.activity.id || J.activity.type] = false);
          }
        } catch (Pe) {
          m = { error: Pe };
        } finally {
          try {
            B && !B.done && (d = z.return) && d.call(z);
          } finally {
            if (m)
              throw m.error;
          }
        }
      }
    } catch (Pe) {
      p = { error: Pe };
    } finally {
      try {
        A && !A.done && (v = $.return) && v.call($);
      } finally {
        if (p)
          throw p.error;
      }
    }
    var te = Se(zi(this, e, n, s, k, a, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), le = te[0], X = te[1], ie = Se(kd(le, function(Pe) {
      return Pe.type === rn || Pe.type === nn && Pe.to === Ar.Internal;
    }), 2), W = ie[0], ue = ie[1], Ve = le.filter(function(Pe) {
      var et;
      return Pe.type === Oo && ((et = Pe.activity) === null || et === void 0 ? void 0 : et.type) === Mo;
    }), Fe = Ve.reduce(function(Pe, et) {
      return Pe[et.activity.id] = Xd(et.activity, f.machine, X, s), Pe;
    }, e ? V({}, e.children) : {}), Ne = new wr({ value: C || e.value, context: X, _event: s, _sessionid: e ? e._sessionid : null, historyValue: C ? _ ? Gd(_, C) : void 0 : e ? e.historyValue : void 0, history: !C || r.source ? e : void 0, actions: C ? ue : [], activities: C ? j : e ? e.activities : {}, events: [], configuration: S, transitions: r.transitions, children: Fe, done: T, tags: Tu(S), machine: this }), Be = n !== X;
    Ne.changed = s.name === Io || Be;
    var ot = Ne.history;
    ot && delete ot.history;
    var Ke = !T && (this._transient || y.some(function(Pe) {
      return Pe._transient;
    }));
    if (!w && (!Ke || s.name === Hi))
      return Ne;
    var Xe = Ne;
    if (!T)
      for (Ke && (Xe = this.resolveRaisedTransition(Xe, { type: Cd }, s, a)); W.length; ) {
        var K = W.shift();
        Xe = this.resolveRaisedTransition(Xe, K._event, s, a);
      }
    var ir = Xe.changed || (ot ? !!Xe.actions.length || Be || typeof ot.value != typeof Xe.value || !Cu(Xe.value, ot.value) : void 0);
    return Xe.changed = ir, Xe.history = ot, Xe;
  }, t.prototype.getStateNode = function(r) {
    if (Bi(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var e = this.states[r];
    if (!e)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return e;
  }, t.prototype.getStateNodeById = function(r) {
    var e = Bi(r) ? r.slice(Iu.length) : r;
    if (e === this.id)
      return this;
    var n = this.machine.idMap[e];
    if (!n)
      throw new Error("Child state node '#".concat(e, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, t.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && Bi(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (s) {
      }
    for (var e = Ts(r, this.delimiter).slice(), n = this; e.length; ) {
      var a = e.shift();
      if (!a.length)
        break;
      n = n.getStateNode(a);
    }
    return n;
  }, t.prototype.resolve = function(r) {
    var e, n = this;
    if (!r)
      return this.initialStateValue || ji;
    switch (this.type) {
      case "parallel":
        return Pi(this.initialStateValue, function(s, p) {
          return s ? n.getStateNode(p).resolve(r[p] || s) : ji;
        });
      case "compound":
        if (Ce(r)) {
          var a = this.getStateNode(r);
          return a.type === "parallel" || a.type === "compound" ? (e = {}, e[r] = a.initialStateValue, e) : r;
        }
        return Object.keys(r).length ? Pi(r, function(s, p) {
          return s ? n.getStateNode(p).resolve(s) : ji;
        }) : this.initialStateValue || {};
      default:
        return r || ji;
    }
  }, t.prototype.getResolvedPath = function(r) {
    if (Bi(r)) {
      var e = this.machine.idMap[r.slice(Iu.length)];
      if (!e)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return e.path;
    }
    return Ts(r, this.delimiter);
  }, Object.defineProperty(t.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var e;
    if (this.type === "parallel")
      e = vu(this.states, function(n) {
        return n.initialStateValue || ji;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      e = ko(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
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
      Ce(e.target) ? r = Bi(e.target) ? Ao(this.machine.getStateNodeById(e.target).path.slice(this.path.length - 1)) : e.target : r = e.target;
    }
    return r;
  }, enumerable: false, configurable: true }), t.prototype.getRelativeStateNodes = function(r, e, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(e) : r.initialStateNodes : [r];
  }, Object.defineProperty(t.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (ko(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return je || tt(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var e = _o(this.initialStateValue);
    return qe(e.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), t.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var e = Se(r), n = e[0], a = e.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var s = this.getStateNode(n);
    if (s.type === "history")
      return s.resolveHistory();
    if (!this.states[n])
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(a);
  }, t.prototype.historyValue = function(r) {
    if (Object.keys(this.states).length)
      return { current: r || this.initialStateValue, states: vu(this.states, function(e, n) {
        if (!r)
          return e.historyValue();
        var a = Ce(r) ? void 0 : r[n];
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
      return a ? qe(_o(a).map(function(p) {
        return n.getFromRelativePath(p);
      })) : n.initialStateNodes;
    }
    var s = _d(n.path, "states")(r).current;
    return Ce(s) ? [n.getStateNode(s)] : qe(_o(s).map(function(p) {
      return e.history === "deep" ? n.getFromRelativePath(p) : [n.states[p[0]]];
    }));
  }, Object.defineProperty(t.prototype, "stateIds", { get: function() {
    var r = this, e = qe(Object.keys(this.states).map(function(n) {
      return r.states[n].stateIds;
    }));
    return [this.id].concat(e);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "events", { get: function() {
    var r, e, n, a;
    if (this.__cache.events)
      return this.__cache.events;
    var s = this.states, p = new Set(this.ownEvents);
    if (s)
      try {
        for (var v = xe(Object.keys(s)), m = v.next(); !m.done; m = v.next()) {
          var d = m.value, f = s[d];
          if (f.states)
            try {
              for (var y = (n = void 0, xe(f.events)), w = y.next(); !w.done; w = y.next()) {
                var S = w.value;
                p.add("".concat(S));
              }
            } catch (T) {
              n = { error: T };
            } finally {
              try {
                w && !w.done && (a = y.return) && a.call(y);
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
        var a = n[0] === e.delimiter;
        if (a && !e.parent)
          return e.getStateNodeByPath(n.slice(1));
        var s = a ? e.key + n : n;
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
    var e = this, n = Bd(r.target), a = "internal" in r ? r.internal : n ? n.some(function(m) {
      return Ce(m) && m[0] === e.delimiter;
    }) : true, s = this.machine.options.guards, p = this.resolveTarget(n), v = V(V({}, r), { actions: Br(lr(r.actions)), cond: Cs(r.cond, s), target: p, source: this, internal: a, eventType: r.event, toJSON: function() {
      return V(V({}, v), { target: v.target ? v.target.map(function(m) {
        return "#".concat(m.id);
      }) : void 0, source: "#".concat(e.id) });
    } });
    return v;
  }, t.prototype.formatTransitions = function() {
    var r, e, n = this, a;
    if (!this.config.on)
      a = [];
    else if (Array.isArray(this.config.on))
      a = this.config.on;
    else {
      var s = this.config.on, p = Lo, v = s[p], m = v === void 0 ? [] : v, d = Mi(s, [typeof p == "symbol" ? p : p + ""]);
      a = qe(Object.keys(d).map(function(j) {
        !je && j === Hi && tt(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var $ = ei(j, d[j]);
        return je || Cb(n, j, $), $;
      }).concat(ei(Lo, m)));
    }
    var f = this.config.always ? ei("", this.config.always) : [], y = this.config.onDone ? ei(String(Do(this.id)), this.config.onDone) : [];
    je || tt(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var w = qe(this.invoke.map(function(j) {
      var $ = [];
      return j.onDone && $.push.apply($, Re([], Se(ei(String(Di(j.id)), j.onDone)), false)), j.onError && $.push.apply($, Re([], Se(ei(String(ti(j.id)), j.onError)), false)), $;
    })), S = this.after, T = qe(Re(Re(Re(Re([], Se(y), false), Se(w), false), Se(a), false), Se(f), false).map(function(j) {
      return lr(j).map(function($) {
        return n.formatTransition($);
      });
    }));
    try {
      for (var C = xe(S), _ = C.next(); !_.done; _ = C.next()) {
        var k = _.value;
        T.push(k);
      }
    } catch (j) {
      r = { error: j };
    } finally {
      try {
        _ && !_.done && (e = C.return) && e.call(C);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return T;
  }, t;
}();
var uf = false;
function ht(t, r) {
  return !je && !("predictableActionArguments" in t) && !uf && (uf = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new lf(t, r);
}
__name(ht, "ht");
c(ht, "createMachine");
var pf = Lt(tn(), 1);
var Bo = Lt(jo(), 1);
var zs = c((t) => t != null && typeof t.draggable == "boolean", "isDraggable");
var _s = c((t) => t != null && t.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Pu = c((t) => t != null && t.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
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
      this.draggableMachine = ht({ id: "draggable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, RELEASE: [{ target: "grabbable", actions: ["release"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["release"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "isDroppedOnCircuitDropzone" }, { target: "deleted", cond: "isTrashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { init: () => {
        fe("draggable:init", {}, this);
      }, setInteract: (a, s) => {
        H.need(s.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let p = (0, Bo.default)(this);
        p.styleCursor(false), p.pointerEvents({ ignoreFrom: ".resize-handle" }), p.on("down", this.grab.bind(this)), p.on("up", this.release.bind(this)), p.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let v = this.dropzone;
        _s(v) ? this.snappedDropzone = v : this.snappedDropzone = null;
      }, grab: (a, s) => {
        H.need(s.type === "GRAB", "event type must be GRAB"), s.type === "GRAB" && (this.grabbed = true, fe("draggable:grab", {}, this), Pu(this.dropzone) && (this.snapped = false, this.moveByOffset(s.x, s.y), this.classList.remove("qpu-operation-xl")));
      }, release: (a, s) => {
        H.need(s.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, fe("draggable:release", {}, this);
      }, startDragging: (a, s) => {
        H.need(s.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (a, s) => {
        H.need(s.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, fe("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, fe("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && fe("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        this.snapped && (this.moveTo(0, 0), fe("draggable:drop", {}, this));
      }, delete: () => {
        (0, Bo.default)(this).unset(), fe("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => _s(this.dropzone), isOnPaletteDropzone: () => Pu(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && _s(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = st(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${(0, pf.format)(a.value)}`);
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
      return H.notNull(a), !Pu(a) && !_s(a) ? null : a;
    }
    set snapTargets(a) {
      (0, Bo.default)(this).draggable({ modifiers: [Bo.default.modifiers.snap({ targets: a, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(a) {
      let s = a.modifiers[0];
      if (s.inRange) {
        let p = s.target.source;
        fe("draggable:in-snap-range", { snapTargetInfo: p }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
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
    move(a, s) {
      let p = this.operationX + a, v = this.operationY + s;
      this.moveTo(p, v);
    }
    moveTo(a, s) {
      this.operationX = a, this.operationY = s, this.style.transform = `translate(${a}px, ${s}px)`;
    }
    moveByOffset(a, s) {
      let p = a - this.clientWidth / 2, v = s - this.clientHeight / 2;
      this.move(p, v);
    }
  }
  __name(r, "r");
  return c(r, "DraggableMixinClass"), M([D], r.prototype, "operationX", 2), M([D], r.prototype, "operationY", 2), M([D], r.prototype, "grabbed", 2), M([D], r.prototype, "dragging", 2), M([D], r.prototype, "snapped", 2), M([D], r.prototype, "bit", 2), M([D], r.prototype, "debugDraggable", 2), r;
}
__name(me, "me");
c(me, "DraggableMixin");
var ri = c((t) => typeof t == "object" && t !== null && typeof t.flag == "string", "isFlaggable");
function df(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(r, "r");
  return c(r, "FlaggableMixinClass"), M([D], r.prototype, "flag", 2), r;
}
__name(df, "df");
c(df, "FlaggableMixin");
var Je = "top";
var mt = "bottom";
var lt = "right";
var rt = "left";
var Rs = "auto";
var Rn = [Je, mt, lt, rt];
var sn = "start";
var ni = "end";
var ff = "clippingParents";
var Ds = "viewport";
var $i = "popper";
var hf = "reference";
var _u = Rn.reduce(function(t, r) {
  return t.concat([r + "-" + sn, r + "-" + ni]);
}, []);
var ks = [].concat(Rn, [Rs]).reduce(function(t, r) {
  return t.concat([r, r + "-" + sn, r + "-" + ni]);
}, []);
var Ob = "beforeRead";
var Mb = "read";
var Ib = "afterRead";
var Ab = "beforeMain";
var Pb = "main";
var _b = "afterMain";
var zb = "beforeWrite";
var Rb = "write";
var Db = "afterWrite";
var mf = [Ob, Mb, Ib, Ab, Pb, _b, zb, Rb, Db];
function yt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
__name(yt, "yt");
c(yt, "getNodeName");
function nt(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var r = t.ownerDocument;
    return r && r.defaultView || window;
  }
  return t;
}
__name(nt, "nt");
c(nt, "getWindow");
function Hr(t) {
  var r = nt(t).Element;
  return t instanceof r || t instanceof Element;
}
__name(Hr, "Hr");
c(Hr, "isElement");
function vt(t) {
  var r = nt(t).HTMLElement;
  return t instanceof r || t instanceof HTMLElement;
}
__name(vt, "vt");
c(vt, "isHTMLElement");
function Ns(t) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = nt(t).ShadowRoot;
  return t instanceof r || t instanceof ShadowRoot;
}
__name(Ns, "Ns");
c(Ns, "isShadowRoot");
function kb(t) {
  var r = t.state;
  Object.keys(r.elements).forEach(function(e) {
    var n = r.styles[e] || {}, a = r.attributes[e] || {}, s = r.elements[e];
    !vt(s) || !yt(s) || (Object.assign(s.style, n), Object.keys(a).forEach(function(p) {
      var v = a[p];
      v === false ? s.removeAttribute(p) : s.setAttribute(p, v === true ? "" : v);
    }));
  });
}
__name(kb, "kb");
c(kb, "applyStyles");
function Nb(t) {
  var r = t.state, e = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, e.popper), r.styles = e, r.elements.arrow && Object.assign(r.elements.arrow.style, e.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var a = r.elements[n], s = r.attributes[n] || {}, p = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : e[n]), v = p.reduce(function(m, d) {
        return m[d] = "", m;
      }, {});
      !vt(a) || !yt(a) || (Object.assign(a.style, v), Object.keys(s).forEach(function(m) {
        a.removeAttribute(m);
      }));
    });
  };
}
__name(Nb, "Nb");
c(Nb, "effect");
var Ho = { name: "applyStyles", enabled: true, phase: "write", fn: kb, effect: Nb, requires: ["computeStyles"] };
function wt(t) {
  return t.split("-")[0];
}
__name(wt, "wt");
c(wt, "getBasePlacement");
var Pr = Math.max;
var ii = Math.min;
var ln = Math.round;
function xr(t, r) {
  r === void 0 && (r = false);
  var e = t.getBoundingClientRect(), n = 1, a = 1;
  if (vt(t) && r) {
    var s = t.offsetHeight, p = t.offsetWidth;
    p > 0 && (n = ln(e.width) / p || 1), s > 0 && (a = ln(e.height) / s || 1);
  }
  return { width: e.width / n, height: e.height / a, top: e.top / a, right: e.right / n, bottom: e.bottom / a, left: e.left / n, x: e.left / n, y: e.top / a };
}
__name(xr, "xr");
c(xr, "getBoundingClientRect");
function oi(t) {
  var r = xr(t), e = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(r.width - e) <= 1 && (e = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: t.offsetLeft, y: t.offsetTop, width: e, height: n };
}
__name(oi, "oi");
c(oi, "getLayoutRect");
function $o(t, r) {
  var e = r.getRootNode && r.getRootNode();
  if (t.contains(r))
    return true;
  if (e && Ns(e)) {
    var n = r;
    do {
      if (n && t.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name($o, "$o");
c($o, "contains");
function jt(t) {
  return nt(t).getComputedStyle(t);
}
__name(jt, "jt");
c(jt, "getComputedStyle");
function zu(t) {
  return ["table", "td", "th"].indexOf(yt(t)) >= 0;
}
__name(zu, "zu");
c(zu, "isTableElement");
function Ct(t) {
  return ((Hr(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
__name(Ct, "Ct");
c(Ct, "getDocumentElement");
function un(t) {
  return yt(t) === "html" ? t : t.assignedSlot || t.parentNode || (Ns(t) ? t.host : null) || Ct(t);
}
__name(un, "un");
c(un, "getParentNode");
function vf(t) {
  return !vt(t) || jt(t).position === "fixed" ? null : t.offsetParent;
}
__name(vf, "vf");
c(vf, "getTrueOffsetParent");
function Gb(t) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, e = navigator.userAgent.indexOf("Trident") !== -1;
  if (e && vt(t)) {
    var n = jt(t);
    if (n.position === "fixed")
      return null;
  }
  for (var a = un(t); vt(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var s = jt(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || r && s.willChange === "filter" || r && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
__name(Gb, "Gb");
c(Gb, "getContainingBlock");
function _r(t) {
  for (var r = nt(t), e = vf(t); e && zu(e) && jt(e).position === "static"; )
    e = vf(e);
  return e && (yt(e) === "html" || yt(e) === "body" && jt(e).position === "static") ? r : e || Gb(t) || r;
}
__name(_r, "_r");
c(_r, "getOffsetParent");
function ai(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
__name(ai, "ai");
c(ai, "getMainAxisFromPlacement");
function si(t, r, e) {
  return Pr(t, ii(r, e));
}
__name(si, "si");
c(si, "within");
function gf(t, r, e) {
  var n = si(t, r, e);
  return n > e ? e : n;
}
__name(gf, "gf");
c(gf, "withinMaxClamp");
function qo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(qo, "qo");
c(qo, "getFreshSideObject");
function Fo(t) {
  return Object.assign({}, qo(), t);
}
__name(Fo, "Fo");
c(Fo, "mergePaddingObject");
function Uo(t, r) {
  return r.reduce(function(e, n) {
    return e[n] = t, e;
  }, {});
}
__name(Uo, "Uo");
c(Uo, "expandToHashMap");
var Lb = c(function(r, e) {
  return r = typeof r == "function" ? r(Object.assign({}, e.rects, { placement: e.placement })) : r, Fo(typeof r != "number" ? r : Uo(r, Rn));
}, "toPaddingObject");
function jb(t) {
  var r, e = t.state, n = t.name, a = t.options, s = e.elements.arrow, p = e.modifiersData.popperOffsets, v = wt(e.placement), m = ai(v), d = [rt, lt].indexOf(v) >= 0, f = d ? "height" : "width";
  if (!(!s || !p)) {
    var y = Lb(a.padding, e), w = oi(s), S = m === "y" ? Je : rt, T = m === "y" ? mt : lt, C = e.rects.reference[f] + e.rects.reference[m] - p[m] - e.rects.popper[f], _ = p[m] - e.rects.reference[m], k = _r(s), j = k ? m === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, $ = C / 2 - _ / 2, A = y[S], ee = j - w[f] - y[T], z = j / 2 - w[f] / 2 + $, B = si(A, z, ee), J = m;
    e.modifiersData[n] = (r = {}, r[J] = B, r.centerOffset = B - z, r);
  }
}
__name(jb, "jb");
c(jb, "arrow");
function Bb(t) {
  var r = t.state, e = t.options, n = e.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = r.elements.popper.querySelector(a), !a) || $o(r.elements.popper, a) && (r.elements.arrow = a));
}
__name(Bb, "Bb");
c(Bb, "effect");
var bf = { name: "arrow", enabled: true, phase: "main", fn: jb, effect: Bb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Er(t) {
  return t.split("-")[1];
}
__name(Er, "Er");
c(Er, "getVariation");
var Hb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function $b(t) {
  var r = t.x, e = t.y, n = window, a = n.devicePixelRatio || 1;
  return { x: ln(r * a) / a || 0, y: ln(e * a) / a || 0 };
}
__name($b, "$b");
c($b, "roundOffsetsByDPR");
function yf(t) {
  var r, e = t.popper, n = t.popperRect, a = t.placement, s = t.variation, p = t.offsets, v = t.position, m = t.gpuAcceleration, d = t.adaptive, f = t.roundOffsets, y = t.isFixed, w = p.x, S = w === void 0 ? 0 : w, T = p.y, C = T === void 0 ? 0 : T, _ = typeof f == "function" ? f({ x: S, y: C }) : { x: S, y: C };
  S = _.x, C = _.y;
  var k = p.hasOwnProperty("x"), j = p.hasOwnProperty("y"), $ = rt, A = Je, ee = window;
  if (d) {
    var z = _r(e), B = "clientHeight", J = "clientWidth";
    if (z === nt(e) && (z = Ct(e), jt(z).position !== "static" && v === "absolute" && (B = "scrollHeight", J = "scrollWidth")), z = z, a === Je || (a === rt || a === lt) && s === ni) {
      A = mt;
      var te = y && ee.visualViewport ? ee.visualViewport.height : z[B];
      C -= te - n.height, C *= m ? 1 : -1;
    }
    if (a === rt || (a === Je || a === mt) && s === ni) {
      $ = lt;
      var le = y && ee.visualViewport ? ee.visualViewport.width : z[J];
      S -= le - n.width, S *= m ? 1 : -1;
    }
  }
  var X = Object.assign({ position: v }, d && Hb), ie = f === true ? $b({ x: S, y: C }) : { x: S, y: C };
  if (S = ie.x, C = ie.y, m) {
    var W;
    return Object.assign({}, X, (W = {}, W[A] = j ? "0" : "", W[$] = k ? "0" : "", W.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + C + "px)" : "translate3d(" + S + "px, " + C + "px, 0)", W));
  }
  return Object.assign({}, X, (r = {}, r[A] = j ? C + "px" : "", r[$] = k ? S + "px" : "", r.transform = "", r));
}
__name(yf, "yf");
c(yf, "mapToStyles");
function qb(t) {
  var r = t.state, e = t.options, n = e.gpuAcceleration, a = n === void 0 ? true : n, s = e.adaptive, p = s === void 0 ? true : s, v = e.roundOffsets, m = v === void 0 ? true : v;
  if (false)
    var d;
  var f = { placement: wt(r.placement), variation: Er(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: a, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, yf(Object.assign({}, f, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: p, roundOffsets: m })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, yf(Object.assign({}, f, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(qb, "qb");
c(qb, "computeStyles");
var wf = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: qb, data: {} };
var Gs = { passive: true };
function Fb(t) {
  var r = t.state, e = t.instance, n = t.options, a = n.scroll, s = a === void 0 ? true : a, p = n.resize, v = p === void 0 ? true : p, m = nt(r.elements.popper), d = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return s && d.forEach(function(f) {
    f.addEventListener("scroll", e.update, Gs);
  }), v && m.addEventListener("resize", e.update, Gs), function() {
    s && d.forEach(function(f) {
      f.removeEventListener("scroll", e.update, Gs);
    }), v && m.removeEventListener("resize", e.update, Gs);
  };
}
__name(Fb, "Fb");
c(Fb, "effect");
var xf = { name: "eventListeners", enabled: true, phase: "write", fn: c(function() {
}, "fn"), effect: Fb, data: {} };
var Ub = { left: "right", right: "left", bottom: "top", top: "bottom" };
function qi(t) {
  return t.replace(/left|right|bottom|top/g, function(r) {
    return Ub[r];
  });
}
__name(qi, "qi");
c(qi, "getOppositePlacement");
var Wb = { start: "end", end: "start" };
function Ls(t) {
  return t.replace(/start|end/g, function(r) {
    return Wb[r];
  });
}
__name(Ls, "Ls");
c(Ls, "getOppositeVariationPlacement");
function li(t) {
  var r = nt(t), e = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: e, scrollTop: n };
}
__name(li, "li");
c(li, "getWindowScroll");
function ui(t) {
  return xr(Ct(t)).left + li(t).scrollLeft;
}
__name(ui, "ui");
c(ui, "getWindowScrollBarX");
function Ru(t) {
  var r = nt(t), e = Ct(t), n = r.visualViewport, a = e.clientWidth, s = e.clientHeight, p = 0, v = 0;
  return n && (a = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = n.offsetLeft, v = n.offsetTop)), { width: a, height: s, x: p + ui(t), y: v };
}
__name(Ru, "Ru");
c(Ru, "getViewportRect");
function Du(t) {
  var r, e = Ct(t), n = li(t), a = (r = t.ownerDocument) == null ? void 0 : r.body, s = Pr(e.scrollWidth, e.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), p = Pr(e.scrollHeight, e.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), v = -n.scrollLeft + ui(t), m = -n.scrollTop;
  return jt(a || e).direction === "rtl" && (v += Pr(e.clientWidth, a ? a.clientWidth : 0) - s), { width: s, height: p, x: v, y: m };
}
__name(Du, "Du");
c(Du, "getDocumentRect");
function ci(t) {
  var r = jt(t), e = r.overflow, n = r.overflowX, a = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + a + n);
}
__name(ci, "ci");
c(ci, "isScrollParent");
function js(t) {
  return ["html", "body", "#document"].indexOf(yt(t)) >= 0 ? t.ownerDocument.body : vt(t) && ci(t) ? t : js(un(t));
}
__name(js, "js");
c(js, "getScrollParent");
function Dn(t, r) {
  var e;
  r === void 0 && (r = []);
  var n = js(t), a = n === ((e = t.ownerDocument) == null ? void 0 : e.body), s = nt(n), p = a ? [s].concat(s.visualViewport || [], ci(n) ? n : []) : n, v = r.concat(p);
  return a ? v : v.concat(Dn(un(p)));
}
__name(Dn, "Dn");
c(Dn, "listScrollParents");
function Fi(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
__name(Fi, "Fi");
c(Fi, "rectToClientRect");
function Vb(t) {
  var r = xr(t);
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(Vb, "Vb");
c(Vb, "getInnerBoundingClientRect");
function Ef(t, r) {
  return r === Ds ? Fi(Ru(t)) : Hr(r) ? Vb(r) : Fi(Du(Ct(t)));
}
__name(Ef, "Ef");
c(Ef, "getClientRectFromMixedType");
function Yb(t) {
  var r = Dn(un(t)), e = ["absolute", "fixed"].indexOf(jt(t).position) >= 0, n = e && vt(t) ? _r(t) : t;
  return Hr(n) ? r.filter(function(a) {
    return Hr(a) && $o(a, n) && yt(a) !== "body";
  }) : [];
}
__name(Yb, "Yb");
c(Yb, "getClippingParents");
function ku(t, r, e) {
  var n = r === "clippingParents" ? Yb(t) : [].concat(r), a = [].concat(n, [e]), s = a[0], p = a.reduce(function(v, m) {
    var d = Ef(t, m);
    return v.top = Pr(d.top, v.top), v.right = ii(d.right, v.right), v.bottom = ii(d.bottom, v.bottom), v.left = Pr(d.left, v.left), v;
  }, Ef(t, s));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
__name(ku, "ku");
c(ku, "getClippingRect");
function Wo(t) {
  var r = t.reference, e = t.element, n = t.placement, a = n ? wt(n) : null, s = n ? Er(n) : null, p = r.x + r.width / 2 - e.width / 2, v = r.y + r.height / 2 - e.height / 2, m;
  switch (a) {
    case Je:
      m = { x: p, y: r.y - e.height };
      break;
    case mt:
      m = { x: p, y: r.y + r.height };
      break;
    case lt:
      m = { x: r.x + r.width, y: v };
      break;
    case rt:
      m = { x: r.x - e.width, y: v };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  var d = a ? ai(a) : null;
  if (d != null) {
    var f = d === "y" ? "height" : "width";
    switch (s) {
      case sn:
        m[d] = m[d] - (r[f] / 2 - e[f] / 2);
        break;
      case ni:
        m[d] = m[d] + (r[f] / 2 - e[f] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(Wo, "Wo");
c(Wo, "computeOffsets");
function zr(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, a = n === void 0 ? t.placement : n, s = e.boundary, p = s === void 0 ? ff : s, v = e.rootBoundary, m = v === void 0 ? Ds : v, d = e.elementContext, f = d === void 0 ? $i : d, y = e.altBoundary, w = y === void 0 ? false : y, S = e.padding, T = S === void 0 ? 0 : S, C = Fo(typeof T != "number" ? T : Uo(T, Rn)), _ = f === $i ? hf : $i, k = t.rects.popper, j = t.elements[w ? _ : f], $ = ku(Hr(j) ? j : j.contextElement || Ct(t.elements.popper), p, m), A = xr(t.elements.reference), ee = Wo({ reference: A, element: k, strategy: "absolute", placement: a }), z = Fi(Object.assign({}, k, ee)), B = f === $i ? z : A, J = { top: $.top - B.top + C.top, bottom: B.bottom - $.bottom + C.bottom, left: $.left - B.left + C.left, right: B.right - $.right + C.right }, te = t.modifiersData.offset;
  if (f === $i && te) {
    var le = te[a];
    Object.keys(J).forEach(function(X) {
      var ie = [lt, mt].indexOf(X) >= 0 ? 1 : -1, W = [Je, mt].indexOf(X) >= 0 ? "y" : "x";
      J[X] += le[W] * ie;
    });
  }
  return J;
}
__name(zr, "zr");
c(zr, "detectOverflow");
function Nu(t, r) {
  r === void 0 && (r = {});
  var e = r, n = e.placement, a = e.boundary, s = e.rootBoundary, p = e.padding, v = e.flipVariations, m = e.allowedAutoPlacements, d = m === void 0 ? ks : m, f = Er(n), y = f ? v ? _u : _u.filter(function(T) {
    return Er(T) === f;
  }) : Rn, w = y.filter(function(T) {
    return d.indexOf(T) >= 0;
  });
  w.length === 0 && (w = y);
  var S = w.reduce(function(T, C) {
    return T[C] = zr(t, { placement: C, boundary: a, rootBoundary: s, padding: p })[wt(C)], T;
  }, {});
  return Object.keys(S).sort(function(T, C) {
    return S[T] - S[C];
  });
}
__name(Nu, "Nu");
c(Nu, "computeAutoPlacement");
function Xb(t) {
  if (wt(t) === Rs)
    return [];
  var r = qi(t);
  return [Ls(t), r, Ls(r)];
}
__name(Xb, "Xb");
c(Xb, "getExpandedFallbackPlacements");
function Zb(t) {
  var r = t.state, e = t.options, n = t.name;
  if (!r.modifiersData[n]._skip) {
    for (var a = e.mainAxis, s = a === void 0 ? true : a, p = e.altAxis, v = p === void 0 ? true : p, m = e.fallbackPlacements, d = e.padding, f = e.boundary, y = e.rootBoundary, w = e.altBoundary, S = e.flipVariations, T = S === void 0 ? true : S, C = e.allowedAutoPlacements, _ = r.options.placement, k = wt(_), j = k === _, $ = m || (j || !T ? [qi(_)] : Xb(_)), A = [_].concat($).reduce(function(Pe, et) {
      return Pe.concat(wt(et) === Rs ? Nu(r, { placement: et, boundary: f, rootBoundary: y, padding: d, flipVariations: T, allowedAutoPlacements: C }) : et);
    }, []), ee = r.rects.reference, z = r.rects.popper, B = /* @__PURE__ */ new Map(), J = true, te = A[0], le = 0; le < A.length; le++) {
      var X = A[le], ie = wt(X), W = Er(X) === sn, ue = [Je, mt].indexOf(ie) >= 0, Ve = ue ? "width" : "height", Fe = zr(r, { placement: X, boundary: f, rootBoundary: y, altBoundary: w, padding: d }), Ne = ue ? W ? lt : rt : W ? mt : Je;
      ee[Ve] > z[Ve] && (Ne = qi(Ne));
      var Be = qi(Ne), ot = [];
      if (s && ot.push(Fe[ie] <= 0), v && ot.push(Fe[Ne] <= 0, Fe[Be] <= 0), ot.every(function(Pe) {
        return Pe;
      })) {
        te = X, J = false;
        break;
      }
      B.set(X, ot);
    }
    if (J)
      for (var Ke = T ? 3 : 1, Xe = c(function(et) {
        var fr = A.find(function(Mr) {
          var hr = B.get(Mr);
          if (hr)
            return hr.slice(0, et).every(function(or) {
              return or;
            });
        });
        if (fr)
          return te = fr, "break";
      }, "_loop"), K = Ke; K > 0; K--) {
        var ir = Xe(K);
        if (ir === "break")
          break;
      }
    r.placement !== te && (r.modifiersData[n]._skip = true, r.placement = te, r.reset = true);
  }
}
__name(Zb, "Zb");
c(Zb, "flip");
var Sf = { name: "flip", enabled: true, phase: "main", fn: Zb, requiresIfExists: ["offset"], data: { _skip: false } };
function Tf(t, r, e) {
  return e === void 0 && (e = { x: 0, y: 0 }), { top: t.top - r.height - e.y, right: t.right - r.width + e.x, bottom: t.bottom - r.height + e.y, left: t.left - r.width - e.x };
}
__name(Tf, "Tf");
c(Tf, "getSideOffsets");
function Cf(t) {
  return [Je, lt, mt, rt].some(function(r) {
    return t[r] >= 0;
  });
}
__name(Cf, "Cf");
c(Cf, "isAnySideFullyClipped");
function Qb(t) {
  var r = t.state, e = t.name, n = r.rects.reference, a = r.rects.popper, s = r.modifiersData.preventOverflow, p = zr(r, { elementContext: "reference" }), v = zr(r, { altBoundary: true }), m = Tf(p, n), d = Tf(v, a, s), f = Cf(m), y = Cf(d);
  r.modifiersData[e] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: f, hasPopperEscaped: y }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": y });
}
__name(Qb, "Qb");
c(Qb, "hide");
var Of = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Qb };
function Kb(t, r, e) {
  var n = wt(t), a = [rt, Je].indexOf(n) >= 0 ? -1 : 1, s = typeof e == "function" ? e(Object.assign({}, r, { placement: t })) : e, p = s[0], v = s[1];
  return p = p || 0, v = (v || 0) * a, [rt, lt].indexOf(n) >= 0 ? { x: v, y: p } : { x: p, y: v };
}
__name(Kb, "Kb");
c(Kb, "distanceAndSkiddingToXY");
function Jb(t) {
  var r = t.state, e = t.options, n = t.name, a = e.offset, s = a === void 0 ? [0, 0] : a, p = ks.reduce(function(f, y) {
    return f[y] = Kb(y, r.rects, s), f;
  }, {}), v = p[r.placement], m = v.x, d = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m, r.modifiersData.popperOffsets.y += d), r.modifiersData[n] = p;
}
__name(Jb, "Jb");
c(Jb, "offset");
var Mf = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Jb };
function ey(t) {
  var r = t.state, e = t.name;
  r.modifiersData[e] = Wo({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(ey, "ey");
c(ey, "popperOffsets");
var If = { name: "popperOffsets", enabled: true, phase: "read", fn: ey, data: {} };
function Gu(t) {
  return t === "x" ? "y" : "x";
}
__name(Gu, "Gu");
c(Gu, "getAltAxis");
function ty(t) {
  var r = t.state, e = t.options, n = t.name, a = e.mainAxis, s = a === void 0 ? true : a, p = e.altAxis, v = p === void 0 ? false : p, m = e.boundary, d = e.rootBoundary, f = e.altBoundary, y = e.padding, w = e.tether, S = w === void 0 ? true : w, T = e.tetherOffset, C = T === void 0 ? 0 : T, _ = zr(r, { boundary: m, rootBoundary: d, padding: y, altBoundary: f }), k = wt(r.placement), j = Er(r.placement), $ = !j, A = ai(k), ee = Gu(A), z = r.modifiersData.popperOffsets, B = r.rects.reference, J = r.rects.popper, te = typeof C == "function" ? C(Object.assign({}, r.rects, { placement: r.placement })) : C, le = typeof te == "number" ? { mainAxis: te, altAxis: te } : Object.assign({ mainAxis: 0, altAxis: 0 }, te), X = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, ie = { x: 0, y: 0 };
  if (z) {
    if (s) {
      var W, ue = A === "y" ? Je : rt, Ve = A === "y" ? mt : lt, Fe = A === "y" ? "height" : "width", Ne = z[A], Be = Ne + _[ue], ot = Ne - _[Ve], Ke = S ? -J[Fe] / 2 : 0, Xe = j === sn ? B[Fe] : J[Fe], K = j === sn ? -J[Fe] : -B[Fe], ir = r.elements.arrow, Pe = S && ir ? oi(ir) : { width: 0, height: 0 }, et = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : qo(), fr = et[ue], Mr = et[Ve], hr = si(0, B[Fe], Pe[Fe]), or = $ ? B[Fe] / 2 - Ke - hr - fr - le.mainAxis : Xe - hr - fr - le.mainAxis, kr = $ ? -B[Fe] / 2 + Ke + hr + Mr + le.mainAxis : K + hr + Mr + le.mainAxis, Vr = r.elements.arrow && _r(r.elements.arrow), Gn = Vr ? A === "y" ? Vr.clientTop || 0 : Vr.clientLeft || 0 : 0, Ae = (W = X == null ? void 0 : X[A]) != null ? W : 0, Ln = Ne + or - Ae - Gn, jn = Ne + kr - Ae, kt = si(S ? ii(Be, Ln) : Be, Ne, S ? Pr(ot, jn) : ot);
      z[A] = kt, ie[A] = kt - Ne;
    }
    if (v) {
      var Yr, fi = A === "x" ? Je : rt, mn = A === "x" ? mt : lt, Ir = z[ee], It = ee === "y" ? "height" : "width", Nr = Ir + _[fi], qt = Ir - _[mn], Bn = [Je, rt].indexOf(k) !== -1, Xr = (Yr = X == null ? void 0 : X[ee]) != null ? Yr : 0, Hn = Bn ? Nr : Ir - B[It] - J[It] - Xr + le.altAxis, vn = Bn ? Ir + B[It] + J[It] - Xr - le.altAxis : qt, $n = S && Bn ? gf(Hn, Ir, vn) : si(S ? Hn : Nr, Ir, S ? vn : qt);
      z[ee] = $n, ie[ee] = $n - Ir;
    }
    r.modifiersData[n] = ie;
  }
}
__name(ty, "ty");
c(ty, "preventOverflow");
var Af = { name: "preventOverflow", enabled: true, phase: "main", fn: ty, requiresIfExists: ["offset"] };
function Lu(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
__name(Lu, "Lu");
c(Lu, "getHTMLElementScroll");
function ju(t) {
  return t === nt(t) || !vt(t) ? li(t) : Lu(t);
}
__name(ju, "ju");
c(ju, "getNodeScroll");
function ry(t) {
  var r = t.getBoundingClientRect(), e = ln(r.width) / t.offsetWidth || 1, n = ln(r.height) / t.offsetHeight || 1;
  return e !== 1 || n !== 1;
}
__name(ry, "ry");
c(ry, "isElementScaled");
function Bu(t, r, e) {
  e === void 0 && (e = false);
  var n = vt(r), a = vt(r) && ry(r), s = Ct(r), p = xr(t, a), v = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (n || !n && !e) && ((yt(r) !== "body" || ci(s)) && (v = ju(r)), vt(r) ? (m = xr(r, true), m.x += r.clientLeft, m.y += r.clientTop) : s && (m.x = ui(s))), { x: p.left + v.scrollLeft - m.x, y: p.top + v.scrollTop - m.y, width: p.width, height: p.height };
}
__name(Bu, "Bu");
c(Bu, "getCompositeRect");
function ny(t) {
  var r = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(s) {
    r.set(s.name, s);
  });
  function a(s) {
    e.add(s.name);
    var p = [].concat(s.requires || [], s.requiresIfExists || []);
    p.forEach(function(v) {
      if (!e.has(v)) {
        var m = r.get(v);
        m && a(m);
      }
    }), n.push(s);
  }
  __name(a, "a");
  return c(a, "sort"), t.forEach(function(s) {
    e.has(s.name) || a(s);
  }), n;
}
__name(ny, "ny");
c(ny, "order");
function Hu(t) {
  var r = ny(t);
  return mf.reduce(function(e, n) {
    return e.concat(r.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
__name(Hu, "Hu");
c(Hu, "orderModifiers");
function $u(t) {
  var r;
  return function() {
    return r || (r = new Promise(function(e) {
      Promise.resolve().then(function() {
        r = void 0, e(t());
      });
    })), r;
  };
}
__name($u, "$u");
c($u, "debounce");
function qu(t) {
  var r = t.reduce(function(e, n) {
    var a = e[n.name];
    return e[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, e;
  }, {});
  return Object.keys(r).map(function(e) {
    return r[e];
  });
}
__name(qu, "qu");
c(qu, "mergeByName");
var Pf = { placement: "bottom", modifiers: [], strategy: "absolute" };
function _f() {
  for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
    r[e] = arguments[e];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(_f, "_f");
c(_f, "areValidElements");
function zf(t) {
  t === void 0 && (t = {});
  var r = t, e = r.defaultModifiers, n = e === void 0 ? [] : e, a = r.defaultOptions, s = a === void 0 ? Pf : a;
  return c(function(v, m, d) {
    d === void 0 && (d = s);
    var f = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Pf, s), modifiersData: {}, elements: { reference: v, popper: m }, attributes: {}, styles: {} }, y = [], w = false, S = { state: f, setOptions: c(function(k) {
      var j = typeof k == "function" ? k(f.options) : k;
      C(), f.options = Object.assign({}, s, f.options, j), f.scrollParents = { reference: Hr(v) ? Dn(v) : v.contextElement ? Dn(v.contextElement) : [], popper: Dn(m) };
      var $ = Hu(qu([].concat(n, f.options.modifiers)));
      if (f.orderedModifiers = $.filter(function(X) {
        return X.enabled;
      }), false) {
        var A;
        if (getBasePlacement(f.options.placement) === auto)
          var ee;
        var z, B, J, te, le;
      }
      return T(), S.update();
    }, "setOptions"), forceUpdate: c(function() {
      if (!w) {
        var k = f.elements, j = k.reference, $ = k.popper;
        if (_f(j, $)) {
          f.rects = { reference: Bu(j, _r($), f.options.strategy === "fixed"), popper: oi($) }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(X) {
            return f.modifiersData[X.name] = Object.assign({}, X.data);
          });
          for (var A = 0, ee = 0; ee < f.orderedModifiers.length; ee++) {
            if (f.reset === true) {
              f.reset = false, ee = -1;
              continue;
            }
            var z = f.orderedModifiers[ee], B = z.fn, J = z.options, te = J === void 0 ? {} : J, le = z.name;
            typeof B == "function" && (f = B({ state: f, options: te, name: le, instance: S }) || f);
          }
        }
      }
    }, "forceUpdate"), update: $u(function() {
      return new Promise(function(_) {
        S.forceUpdate(), _(f);
      });
    }), destroy: c(function() {
      C(), w = true;
    }, "destroy") };
    if (!_f(v, m))
      return S;
    S.setOptions(d).then(function(_) {
      !w && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function T() {
      f.orderedModifiers.forEach(function(_) {
        var k = _.name, j = _.options, $ = j === void 0 ? {} : j, A = _.effect;
        if (typeof A == "function") {
          var ee = A({ state: f, name: k, instance: S, options: $ }), z = c(function() {
          }, "noopFn");
          y.push(ee || z);
        }
      });
    }
    __name(T, "T");
    c(T, "runModifierEffects");
    function C() {
      y.forEach(function(_) {
        return _();
      }), y = [];
    }
    __name(C, "C");
    return c(C, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(zf, "zf");
c(zf, "popperGenerator");
var iy = [xf, If, wf, Ho, Mf, Sf, Af, bf, Of];
var Fu = zf({ defaultModifiers: iy });
var oy = "tippy-box";
var $f = "tippy-content";
var ay = "tippy-backdrop";
var qf = "tippy-arrow";
var Ff = "tippy-svg-arrow";
var pi = { passive: true, capture: true };
var Uf = c(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function Uu(t, r, e) {
  if (Array.isArray(t)) {
    var n = t[r];
    return n == null ? Array.isArray(e) ? e[r] : e : n;
  }
  return t;
}
__name(Uu, "Uu");
c(Uu, "getValueAtIndexOrReturn");
function Qu(t, r) {
  var e = {}.toString.call(t);
  return e.indexOf("[object") === 0 && e.indexOf(r + "]") > -1;
}
__name(Qu, "Qu");
c(Qu, "isType");
function Wf(t, r) {
  return typeof t == "function" ? t.apply(void 0, r) : t;
}
__name(Wf, "Wf");
c(Wf, "invokeWithArgsOrReturn");
function Rf(t, r) {
  if (r === 0)
    return t;
  var e;
  return function(n) {
    clearTimeout(e), e = setTimeout(function() {
      t(n);
    }, r);
  };
}
__name(Rf, "Rf");
c(Rf, "debounce");
function sy(t) {
  return t.split(/\s+/).filter(Boolean);
}
__name(sy, "sy");
c(sy, "splitBySpaces");
function Ui(t) {
  return [].concat(t);
}
__name(Ui, "Ui");
c(Ui, "normalizeToArray");
function Df(t, r) {
  t.indexOf(r) === -1 && t.push(r);
}
__name(Df, "Df");
c(Df, "pushIfUnique");
function ly(t) {
  return t.filter(function(r, e) {
    return t.indexOf(r) === e;
  });
}
__name(ly, "ly");
c(ly, "unique");
function uy(t) {
  return t.split("-")[0];
}
__name(uy, "uy");
c(uy, "getBasePlacement");
function Hs(t) {
  return [].slice.call(t);
}
__name(Hs, "Hs");
c(Hs, "arrayFrom");
function kf(t) {
  return Object.keys(t).reduce(function(r, e) {
    return t[e] !== void 0 && (r[e] = t[e]), r;
  }, {});
}
__name(kf, "kf");
c(kf, "removeUndefinedProps");
function Vo() {
  return document.createElement("div");
}
__name(Vo, "Vo");
c(Vo, "div");
function $s(t) {
  return ["Element", "Fragment"].some(function(r) {
    return Qu(t, r);
  });
}
__name($s, "$s");
c($s, "isElement");
function cy(t) {
  return Qu(t, "NodeList");
}
__name(cy, "cy");
c(cy, "isNodeList");
function py(t) {
  return Qu(t, "MouseEvent");
}
__name(py, "py");
c(py, "isMouseEvent");
function dy(t) {
  return !!(t && t._tippy && t._tippy.reference === t);
}
__name(dy, "dy");
c(dy, "isReferenceElement");
function fy(t) {
  return $s(t) ? [t] : cy(t) ? Hs(t) : Array.isArray(t) ? t : Hs(document.querySelectorAll(t));
}
__name(fy, "fy");
c(fy, "getArrayOfElements");
function Wu(t, r) {
  t.forEach(function(e) {
    e && (e.style.transitionDuration = r + "ms");
  });
}
__name(Wu, "Wu");
c(Wu, "setTransitionDuration");
function Nf(t, r) {
  t.forEach(function(e) {
    e && e.setAttribute("data-state", r);
  });
}
__name(Nf, "Nf");
c(Nf, "setVisibilityState");
function hy(t) {
  var r, e = Ui(t), n = e[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(hy, "hy");
c(hy, "getOwnerDocument");
function my(t, r) {
  var e = r.clientX, n = r.clientY;
  return t.every(function(a) {
    var s = a.popperRect, p = a.popperState, v = a.props, m = v.interactiveBorder, d = uy(p.placement), f = p.modifiersData.offset;
    if (!f)
      return true;
    var y = d === "bottom" ? f.top.y : 0, w = d === "top" ? f.bottom.y : 0, S = d === "right" ? f.left.x : 0, T = d === "left" ? f.right.x : 0, C = s.top - n + y > m, _ = n - s.bottom - w > m, k = s.left - e + S > m, j = e - s.right - T > m;
    return C || _ || k || j;
  });
}
__name(my, "my");
c(my, "isCursorOutsideInteractiveBorder");
function Vu(t, r, e) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
    t[n](a, e);
  });
}
__name(Vu, "Vu");
c(Vu, "updateTransitionEndListener");
function Gf(t, r) {
  for (var e = r; e; ) {
    var n;
    if (t.contains(e))
      return true;
    e = e.getRootNode == null || (n = e.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(Gf, "Gf");
c(Gf, "actualContains");
var $r = { isTouch: false };
var Lf = 0;
function vy() {
  $r.isTouch || ($r.isTouch = true, window.performance && document.addEventListener("mousemove", Vf));
}
__name(vy, "vy");
c(vy, "onDocumentTouchStart");
function Vf() {
  var t = performance.now();
  t - Lf < 20 && ($r.isTouch = false, document.removeEventListener("mousemove", Vf)), Lf = t;
}
__name(Vf, "Vf");
c(Vf, "onDocumentMouseMove");
function gy() {
  var t = document.activeElement;
  if (dy(t)) {
    var r = t._tippy;
    t.blur && !r.state.isVisible && t.blur();
  }
}
__name(gy, "gy");
c(gy, "onWindowBlur");
function by() {
  document.addEventListener("touchstart", vy, pi), window.addEventListener("blur", gy);
}
__name(by, "by");
c(by, "bindGlobalEventListeners");
var yy = typeof window != "undefined" && typeof document != "undefined";
var wy = yy ? !!window.msCrypto : false;
var xy = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Ey = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Rr = Object.assign({ appendTo: Uf, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: c(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, xy, Ey);
var Sy = Object.keys(Rr);
var Ty = c(function(r) {
  var e = Object.keys(r);
  e.forEach(function(n) {
    Rr[n] = r[n];
  });
}, "setDefaultProps");
function Yf(t) {
  var r = t.plugins || [], e = r.reduce(function(n, a) {
    var s = a.name, p = a.defaultValue;
    if (s) {
      var v;
      n[s] = t[s] !== void 0 ? t[s] : (v = Rr[s]) != null ? v : p;
    }
    return n;
  }, {});
  return Object.assign({}, t, e);
}
__name(Yf, "Yf");
c(Yf, "getExtendedPassedProps");
function Cy(t, r) {
  var e = r ? Object.keys(Yf(Object.assign({}, Rr, { plugins: r }))) : Sy, n = e.reduce(function(a, s) {
    var p = (t.getAttribute("data-tippy-" + s) || "").trim();
    if (!p)
      return a;
    if (s === "content")
      a[s] = p;
    else
      try {
        a[s] = JSON.parse(p);
      } catch (v) {
        a[s] = p;
      }
    return a;
  }, {});
  return n;
}
__name(Cy, "Cy");
c(Cy, "getDataAttributeProps");
function jf(t, r) {
  var e = Object.assign({}, r, { content: Wf(r.content, [t]) }, r.ignoreAttributes ? {} : Cy(t, r.plugins));
  return e.aria = Object.assign({}, Rr.aria, e.aria), e.aria = { expanded: e.aria.expanded === "auto" ? r.interactive : e.aria.expanded, content: e.aria.content === "auto" ? r.interactive ? null : "describedby" : e.aria.content }, e;
}
__name(jf, "jf");
c(jf, "evaluateProps");
var Oy = c(function() {
  return "innerHTML";
}, "innerHTML");
function Xu(t, r) {
  t[Oy()] = r;
}
__name(Xu, "Xu");
c(Xu, "dangerouslySetInnerHTML");
function Bf(t) {
  var r = Vo();
  return t === true ? r.className = qf : (r.className = Ff, $s(t) ? r.appendChild(t) : Xu(r, t)), r;
}
__name(Bf, "Bf");
c(Bf, "createArrowElement");
function Hf(t, r) {
  $s(r.content) ? (Xu(t, ""), t.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? Xu(t, r.content) : t.textContent = r.content);
}
__name(Hf, "Hf");
c(Hf, "setContent");
function Zu(t) {
  var r = t.firstElementChild, e = Hs(r.children);
  return { box: r, content: e.find(function(n) {
    return n.classList.contains($f);
  }), arrow: e.find(function(n) {
    return n.classList.contains(qf) || n.classList.contains(Ff);
  }), backdrop: e.find(function(n) {
    return n.classList.contains(ay);
  }) };
}
__name(Zu, "Zu");
c(Zu, "getChildren");
function Xf(t) {
  var r = Vo(), e = Vo();
  e.className = oy, e.setAttribute("data-state", "hidden"), e.setAttribute("tabindex", "-1");
  var n = Vo();
  n.className = $f, n.setAttribute("data-state", "hidden"), Hf(n, t.props), r.appendChild(e), e.appendChild(n), a(t.props, t.props);
  function a(s, p) {
    var v = Zu(r), m = v.box, d = v.content, f = v.arrow;
    p.theme ? m.setAttribute("data-theme", p.theme) : m.removeAttribute("data-theme"), typeof p.animation == "string" ? m.setAttribute("data-animation", p.animation) : m.removeAttribute("data-animation"), p.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? m.setAttribute("role", p.role) : m.removeAttribute("role"), (s.content !== p.content || s.allowHTML !== p.allowHTML) && Hf(d, t.props), p.arrow ? f ? s.arrow !== p.arrow && (m.removeChild(f), m.appendChild(Bf(p.arrow))) : m.appendChild(Bf(p.arrow)) : f && m.removeChild(f);
  }
  __name(a, "a");
  return c(a, "onUpdate"), { popper: r, onUpdate: a };
}
__name(Xf, "Xf");
c(Xf, "render");
Xf.$$tippy = true;
var My = 1;
var Bs = [];
var Yu = [];
function Iy(t, r) {
  var e = jf(t, Object.assign({}, Rr, Yf(kf(r)))), n, a, s, p = false, v = false, m = false, d = false, f, y, w, S = [], T = Rf(Ln, e.interactiveDebounce), C, _ = My++, k = null, j = ly(e.plugins), $ = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: _, reference: t, popper: Vo(), popperInstance: k, props: e, state: $, plugins: j, clearDelayTimeouts: Hn, setProps: vn, setContent: $n, show: Qi, hide: Ki, hideWithInteractivity: aa, enable: Bn, disable: Xr, unmount: sa, destroy: nl };
  if (!e.render)
    return A;
  var ee = e.render(A), z = ee.popper, B = ee.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + A.id, A.popper = z, t._tippy = A, z._tippy = A;
  var J = j.map(function(G) {
    return G.fn(A);
  }), te = t.hasAttribute("aria-expanded");
  return Vr(), Ke(), Ne(), Be("onCreate", [A]), e.showOnCreate && Nr(), z.addEventListener("mouseenter", function() {
    A.props.interactive && A.state.isVisible && A.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    A.props.interactive && A.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", T);
  }), A;
  function le() {
    var G = A.props.touch;
    return Array.isArray(G) ? G : [G, 0];
  }
  __name(le, "le");
  c(le, "getNormalizedTouchSettings");
  function X() {
    return le()[0] === "hold";
  }
  __name(X, "X");
  c(X, "getIsCustomTouchBehavior");
  function ie() {
    var G;
    return !!((G = A.props.render) != null && G.$$tippy);
  }
  __name(ie, "ie");
  c(ie, "getIsDefaultRenderFn");
  function W() {
    return C || t;
  }
  __name(W, "W");
  c(W, "getCurrentTarget");
  function ue() {
    var G = W().parentNode;
    return G ? hy(G) : document;
  }
  __name(ue, "ue");
  c(ue, "getDocument");
  function Ve() {
    return Zu(z);
  }
  __name(Ve, "Ve");
  c(Ve, "getDefaultTemplateChildren");
  function Fe(G) {
    return A.state.isMounted && !A.state.isVisible || $r.isTouch || f && f.type === "focus" ? 0 : Uu(A.props.delay, G ? 0 : 1, Rr.delay);
  }
  __name(Fe, "Fe");
  c(Fe, "getDelay");
  function Ne(G) {
    G === void 0 && (G = false), z.style.pointerEvents = A.props.interactive && !G ? "" : "none", z.style.zIndex = "" + A.props.zIndex;
  }
  __name(Ne, "Ne");
  c(Ne, "handleStyles");
  function Be(G, re, ae) {
    if (ae === void 0 && (ae = true), J.forEach(function(Ee) {
      Ee[G] && Ee[G].apply(Ee, re);
    }), ae) {
      var _e;
      (_e = A.props)[G].apply(_e, re);
    }
  }
  __name(Be, "Be");
  c(Be, "invokeHook");
  function ot() {
    var G = A.props.aria;
    if (G.content) {
      var re = "aria-" + G.content, ae = z.id, _e = Ui(A.props.triggerTarget || t);
      _e.forEach(function(Ee) {
        var xt = Ee.getAttribute(re);
        if (A.state.isVisible)
          Ee.setAttribute(re, xt ? xt + " " + ae : ae);
        else {
          var Nt = xt && xt.replace(ae, "").trim();
          Nt ? Ee.setAttribute(re, Nt) : Ee.removeAttribute(re);
        }
      });
    }
  }
  __name(ot, "ot");
  c(ot, "handleAriaContentAttribute");
  function Ke() {
    if (!(te || !A.props.aria.expanded)) {
      var G = Ui(A.props.triggerTarget || t);
      G.forEach(function(re) {
        A.props.interactive ? re.setAttribute("aria-expanded", A.state.isVisible && re === W() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Ke, "Ke");
  c(Ke, "handleAriaExpandedAttribute");
  function Xe() {
    ue().removeEventListener("mousemove", T), Bs = Bs.filter(function(G) {
      return G !== T;
    });
  }
  __name(Xe, "Xe");
  c(Xe, "cleanupInteractiveMouseListeners");
  function K(G) {
    if (!($r.isTouch && (m || G.type === "mousedown"))) {
      var re = G.composedPath && G.composedPath()[0] || G.target;
      if (!(A.props.interactive && Gf(z, re))) {
        if (Ui(A.props.triggerTarget || t).some(function(ae) {
          return Gf(ae, re);
        })) {
          if ($r.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Be("onClickOutside", [A, G]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), v = true, setTimeout(function() {
          v = false;
        }), A.state.isMounted || fr());
      }
    }
  }
  __name(K, "K");
  c(K, "onDocumentPress");
  function ir() {
    m = true;
  }
  __name(ir, "ir");
  c(ir, "onTouchMove");
  function Pe() {
    m = false;
  }
  __name(Pe, "Pe");
  c(Pe, "onTouchStart");
  function et() {
    var G = ue();
    G.addEventListener("mousedown", K, true), G.addEventListener("touchend", K, pi), G.addEventListener("touchstart", Pe, pi), G.addEventListener("touchmove", ir, pi);
  }
  __name(et, "et");
  c(et, "addDocumentPress");
  function fr() {
    var G = ue();
    G.removeEventListener("mousedown", K, true), G.removeEventListener("touchend", K, pi), G.removeEventListener("touchstart", Pe, pi), G.removeEventListener("touchmove", ir, pi);
  }
  __name(fr, "fr");
  c(fr, "removeDocumentPress");
  function Mr(G, re) {
    or(G, function() {
      !A.state.isVisible && z.parentNode && z.parentNode.contains(z) && re();
    });
  }
  __name(Mr, "Mr");
  c(Mr, "onTransitionedOut");
  function hr(G, re) {
    or(G, re);
  }
  __name(hr, "hr");
  c(hr, "onTransitionedIn");
  function or(G, re) {
    var ae = Ve().box;
    function _e(Ee) {
      Ee.target === ae && (Vu(ae, "remove", _e), re());
    }
    __name(_e, "_e");
    if (c(_e, "listener"), G === 0)
      return re();
    Vu(ae, "remove", y), Vu(ae, "add", _e), y = _e;
  }
  __name(or, "or");
  c(or, "onTransitionEnd");
  function kr(G, re, ae) {
    ae === void 0 && (ae = false);
    var _e = Ui(A.props.triggerTarget || t);
    _e.forEach(function(Ee) {
      Ee.addEventListener(G, re, ae), S.push({ node: Ee, eventType: G, handler: re, options: ae });
    });
  }
  __name(kr, "kr");
  c(kr, "on");
  function Vr() {
    X() && (kr("touchstart", Ae, { passive: true }), kr("touchend", jn, { passive: true })), sy(A.props.trigger).forEach(function(G) {
      if (G !== "manual")
        switch (kr(G, Ae), G) {
          case "mouseenter":
            kr("mouseleave", jn);
            break;
          case "focus":
            kr(wy ? "focusout" : "blur", kt);
            break;
          case "focusin":
            kr("focusout", kt);
            break;
        }
    });
  }
  __name(Vr, "Vr");
  c(Vr, "addListeners");
  function Gn() {
    S.forEach(function(G) {
      var re = G.node, ae = G.eventType, _e = G.handler, Ee = G.options;
      re.removeEventListener(ae, _e, Ee);
    }), S = [];
  }
  __name(Gn, "Gn");
  c(Gn, "removeListeners");
  function Ae(G) {
    var re, ae = false;
    if (!(!A.state.isEnabled || Yr(G) || v)) {
      var _e = ((re = f) == null ? void 0 : re.type) === "focus";
      f = G, C = G.currentTarget, Ke(), !A.state.isVisible && py(G) && Bs.forEach(function(Ee) {
        return Ee(G);
      }), G.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || p) && A.props.hideOnClick !== false && A.state.isVisible ? ae = true : Nr(G), G.type === "click" && (p = !ae), ae && !_e && qt(G);
    }
  }
  __name(Ae, "Ae");
  c(Ae, "onTrigger");
  function Ln(G) {
    var re = G.target, ae = W().contains(re) || z.contains(re);
    if (!(G.type === "mousemove" && ae)) {
      var _e = It().concat(z).map(function(Ee) {
        var xt, Nt = Ee._tippy, At = (xt = Nt.popperInstance) == null ? void 0 : xt.state;
        return At ? { popperRect: Ee.getBoundingClientRect(), popperState: At, props: e } : null;
      }).filter(Boolean);
      my(_e, G) && (Xe(), qt(G));
    }
  }
  __name(Ln, "Ln");
  c(Ln, "onMouseMove");
  function jn(G) {
    var re = Yr(G) || A.props.trigger.indexOf("click") >= 0 && p;
    if (!re) {
      if (A.props.interactive) {
        A.hideWithInteractivity(G);
        return;
      }
      qt(G);
    }
  }
  __name(jn, "jn");
  c(jn, "onMouseLeave");
  function kt(G) {
    A.props.trigger.indexOf("focusin") < 0 && G.target !== W() || A.props.interactive && G.relatedTarget && z.contains(G.relatedTarget) || qt(G);
  }
  __name(kt, "kt");
  c(kt, "onBlurOrFocusOut");
  function Yr(G) {
    return $r.isTouch ? X() !== G.type.indexOf("touch") >= 0 : false;
  }
  __name(Yr, "Yr");
  c(Yr, "isEventListenerStopped");
  function fi() {
    mn();
    var G = A.props, re = G.popperOptions, ae = G.placement, _e = G.offset, Ee = G.getReferenceClientRect, xt = G.moveTransition, Nt = ie() ? Zu(z).arrow : null, At = Ee ? { getBoundingClientRect: Ee, contextElement: Ee.contextElement || W() } : t, la = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: c(function(Pt) {
      var _t = Pt.state;
      if (ie()) {
        var Zr = Ve(), hi = Zr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(mi) {
          mi === "placement" ? hi.setAttribute("data-placement", _t.placement) : _t.attributes.popper["data-popper-" + mi] ? hi.setAttribute("data-" + mi, "") : hi.removeAttribute("data-" + mi);
        }), _t.attributes.popper = {};
      }
    }, "fn") }, mr = [{ name: "offset", options: { offset: _e } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !xt } }, la];
    ie() && Nt && mr.push({ name: "arrow", options: { element: Nt, padding: 3 } }), mr.push.apply(mr, (re == null ? void 0 : re.modifiers) || []), A.popperInstance = Fu(At, z, Object.assign({}, re, { placement: ae, onFirstUpdate: w, modifiers: mr }));
  }
  __name(fi, "fi");
  c(fi, "createPopperInstance");
  function mn() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(mn, "mn");
  c(mn, "destroyPopperInstance");
  function Ir() {
    var G = A.props.appendTo, re, ae = W();
    A.props.interactive && G === Uf || G === "parent" ? re = ae.parentNode : re = Wf(G, [ae]), re.contains(z) || re.appendChild(z), A.state.isMounted = true, fi();
  }
  __name(Ir, "Ir");
  c(Ir, "mount");
  function It() {
    return Hs(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(It, "It");
  c(It, "getNestedPopperTree");
  function Nr(G) {
    A.clearDelayTimeouts(), G && Be("onTrigger", [A, G]), et();
    var re = Fe(true), ae = le(), _e = ae[0], Ee = ae[1];
    $r.isTouch && _e === "hold" && Ee && (re = Ee), re ? n = setTimeout(function() {
      A.show();
    }, re) : A.show();
  }
  __name(Nr, "Nr");
  c(Nr, "scheduleShow");
  function qt(G) {
    if (A.clearDelayTimeouts(), Be("onUntrigger", [A, G]), !A.state.isVisible) {
      fr();
      return;
    }
    if (!(A.props.trigger.indexOf("mouseenter") >= 0 && A.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(G.type) >= 0 && p)) {
      var re = Fe(false);
      re ? a = setTimeout(function() {
        A.state.isVisible && A.hide();
      }, re) : s = requestAnimationFrame(function() {
        A.hide();
      });
    }
  }
  __name(qt, "qt");
  c(qt, "scheduleHide");
  function Bn() {
    A.state.isEnabled = true;
  }
  __name(Bn, "Bn");
  c(Bn, "enable");
  function Xr() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(Xr, "Xr");
  c(Xr, "disable");
  function Hn() {
    clearTimeout(n), clearTimeout(a), cancelAnimationFrame(s);
  }
  __name(Hn, "Hn");
  c(Hn, "clearDelayTimeouts");
  function vn(G) {
    if (!A.state.isDestroyed) {
      Be("onBeforeUpdate", [A, G]), Gn();
      var re = A.props, ae = jf(t, Object.assign({}, re, kf(G), { ignoreAttributes: true }));
      A.props = ae, Vr(), re.interactiveDebounce !== ae.interactiveDebounce && (Xe(), T = Rf(Ln, ae.interactiveDebounce)), re.triggerTarget && !ae.triggerTarget ? Ui(re.triggerTarget).forEach(function(_e) {
        _e.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && t.removeAttribute("aria-expanded"), Ke(), Ne(), B && B(re, ae), A.popperInstance && (fi(), It().forEach(function(_e) {
        requestAnimationFrame(_e._tippy.popperInstance.forceUpdate);
      })), Be("onAfterUpdate", [A, G]);
    }
  }
  __name(vn, "vn");
  c(vn, "setProps");
  function $n(G) {
    A.setProps({ content: G });
  }
  __name($n, "$n");
  c($n, "setContent");
  function Qi() {
    var G = A.state.isVisible, re = A.state.isDestroyed, ae = !A.state.isEnabled, _e = $r.isTouch && !A.props.touch, Ee = Uu(A.props.duration, 0, Rr.duration);
    if (!(G || re || ae || _e) && !W().hasAttribute("disabled") && (Be("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, ie() && (z.style.visibility = "visible"), Ne(), et(), A.state.isMounted || (z.style.transition = "none"), ie()) {
        var xt = Ve(), Nt = xt.box, At = xt.content;
        Wu([Nt, At], 0);
      }
      w = c(function() {
        var mr;
        if (!(!A.state.isVisible || d)) {
          if (d = true, z.offsetHeight, z.style.transition = A.props.moveTransition, ie() && A.props.animation) {
            var Ji = Ve(), Pt = Ji.box, _t = Ji.content;
            Wu([Pt, _t], Ee), Nf([Pt, _t], "visible");
          }
          ot(), Ke(), Df(Yu, A), (mr = A.popperInstance) == null || mr.forceUpdate(), Be("onMount", [A]), A.props.animation && ie() && hr(Ee, function() {
            A.state.isShown = true, Be("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), Ir();
    }
  }
  __name(Qi, "Qi");
  c(Qi, "show");
  function Ki() {
    var G = !A.state.isVisible, re = A.state.isDestroyed, ae = !A.state.isEnabled, _e = Uu(A.props.duration, 1, Rr.duration);
    if (!(G || re || ae) && (Be("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, d = false, p = false, ie() && (z.style.visibility = "hidden"), Xe(), fr(), Ne(true), ie()) {
        var Ee = Ve(), xt = Ee.box, Nt = Ee.content;
        A.props.animation && (Wu([xt, Nt], _e), Nf([xt, Nt], "hidden"));
      }
      ot(), Ke(), A.props.animation ? ie() && Mr(_e, A.unmount) : A.unmount();
    }
  }
  __name(Ki, "Ki");
  c(Ki, "hide");
  function aa(G) {
    ue().addEventListener("mousemove", T), Df(Bs, T), T(G);
  }
  __name(aa, "aa");
  c(aa, "hideWithInteractivity");
  function sa() {
    A.state.isVisible && A.hide(), A.state.isMounted && (mn(), It().forEach(function(G) {
      G._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), Yu = Yu.filter(function(G) {
      return G !== A;
    }), A.state.isMounted = false, Be("onHidden", [A]));
  }
  __name(sa, "sa");
  c(sa, "unmount");
  function nl() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), Gn(), delete t._tippy, A.state.isDestroyed = true, Be("onDestroy", [A]));
  }
  __name(nl, "nl");
  c(nl, "destroy");
}
__name(Iy, "Iy");
c(Iy, "createTippy");
function Yo(t, r) {
  r === void 0 && (r = {});
  var e = Rr.plugins.concat(r.plugins || []);
  by();
  var n = Object.assign({}, r, { plugins: e }), a = fy(t);
  if (false)
    var s, p;
  var v = a.reduce(function(m, d) {
    var f = d && Iy(d, n);
    return f && m.push(f), m;
  }, []);
  return $s(t) ? v[0] : v;
}
__name(Yo, "Yo");
c(Yo, "tippy");
Yo.defaultProps = Rr;
Yo.setDefaultProps = Ty;
Yo.currentInput = $r;
var u1 = Object.assign({}, Ho, { effect: c(function(r) {
  var e = r.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow);
}, "effect") });
Yo.setDefaultProps({ render: Xf });
var zt = Yo;
var Zf = Lt(tn(), 1);
var Ku = c((t) => typeof t == "object" && t !== null && typeof t.initHelp == "function", "isHelpable");
function ve(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = ht({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let a = this.helpContent;
        a !== null && (this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(s) {
          s.setContent(a);
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
      this.helpableService = st(this.helpableMachine).onTransition((a) => {
        this.debugHelpable && console.log(`helpable: ${(0, Zf.format)(a.value)}`);
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
      let s = document.getElementById(a);
      return s === null ? null : s.content.cloneNode(true);
    }
  }
  __name(r, "r");
  return c(r, "HelpableMixinClass"), M([D], r.prototype, "help", 2), M([D], r.prototype, "helpId", 2), M([D], r.prototype, "debugHelpable", 2), r;
}
__name(ve, "ve");
c(ve, "HelpableMixin");
function pe(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(r, "r");
  return c(r, "HoverableMixinClass"), M([D], r.prototype, "hoverable", 2), r;
}
__name(pe, "pe");
c(pe, "HoverableMixin");
var qs = /* @__PURE__ */ new Map();
function Fs(t) {
  if (qs.has(t))
    return qs.get(t);
  let r = t.length, e = 0, n = 0, a = 0, s = [];
  for (let p = 0; p < r; p += 1) {
    let v = t[p], m = t[p + 1], d = t[p - 1];
    v === "{" && m === "{" && d !== "\\" ? (a += 1, a === 1 && (n = p), p += 1) : v === "}" && m === "}" && d !== "\\" && a && (a -= 1, a === 0 && (n > e && (s.push(Object.freeze({ type: "string", start: e, end: n, value: t.slice(e, n) })), e = n), s.push(Object.freeze({ type: "part", start: n, end: p + 2, value: t.slice(e + 2, p).trim() })), p += 1, e = p + 1));
  }
  return e < r && s.push(Object.freeze({ type: "string", start: e, end: r, value: t.slice(e, r) })), qs.set(t, Object.freeze(s)), qs.get(t);
}
__name(Fs, "Fs");
c(Fs, "parse");
var di = /* @__PURE__ */ new WeakMap();
var Qf = /* @__PURE__ */ new WeakMap();
var qr = /* @__PURE__ */ __name(class {
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
    return Qf.get(this);
  }
  set value(r) {
    Qf.set(this, r || ""), di.get(this).updateParent(r);
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
}, "qr");
c(qr, "AttributeTemplatePart");
var Wi = /* @__PURE__ */ __name(class {
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
}, "Wi");
c(Wi, "AttributeValueSetter");
var kn = /* @__PURE__ */ new WeakMap();
var Rt = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.expression = e, kn.set(this, [r]), r.textContent = "";
  }
  get value() {
    return kn.get(this).map((r) => r.textContent).join("");
  }
  set value(r) {
    this.replace(r);
  }
  get previousSibling() {
    return kn.get(this)[0].previousSibling;
  }
  get nextSibling() {
    return kn.get(this)[kn.get(this).length - 1].nextSibling;
  }
  replace(...r) {
    let e = r.map((n) => typeof n == "string" ? new Text(n) : n);
    e.length || e.push(new Text("")), kn.get(this)[0].before(...e);
    for (let n of kn.get(this))
      n.remove();
    kn.set(this, e);
  }
}, "Rt");
c(Rt, "NodeTemplatePart");
function Xo(t) {
  return { processCallback(r, e, n) {
    var a;
    if (!(typeof n != "object" || !n)) {
      for (let s of e)
        if (s.expression in n) {
          let p = (a = n[s.expression]) !== null && a !== void 0 ? a : "";
          t(s, p);
        }
    }
  } };
}
__name(Xo, "Xo");
c(Xo, "createProcessor");
function Zo(t, r) {
  t.value = String(r);
}
__name(Zo, "Zo");
c(Zo, "processPropertyIdentity");
function Us(t, r) {
  return typeof r == "boolean" && t instanceof qr && typeof t.element[t.attributeName] == "boolean" ? (t.booleanValue = r, true) : false;
}
__name(Us, "Us");
c(Us, "processBooleanAttribute");
var Ju = Xo(Zo);
var Ay = Xo((t, r) => {
  Us(t, r) || Zo(t, r);
});
function* Py(t) {
  let r = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), e;
  for (; e = r.nextNode(); )
    if (e instanceof Element && e.hasAttributes())
      for (let n = 0; n < e.attributes.length; n += 1) {
        let a = e.attributes.item(n);
        if (a && a.value.includes("{{")) {
          let s = new Wi(e, a);
          for (let p of Fs(a.value))
            if (p.type === "string")
              s.append(p.value);
            else {
              let v = new qr(s, p.value);
              s.append(v), yield v;
            }
        }
      }
    else if (e instanceof Text && e.textContent && e.textContent.includes("{{")) {
      let n = Fs(e.textContent);
      for (let a = 0; a < n.length; a += 1) {
        let s = n[a];
        s.end < e.textContent.length && e.splitText(s.end), s.type === "part" && (yield new Rt(e, s.value));
        break;
      }
    }
}
__name(Py, "Py");
c(Py, "collectParts");
var Ws = /* @__PURE__ */ new WeakMap();
var Vs = /* @__PURE__ */ new WeakMap();
var cn = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(r, e, n = Ju) {
    var a, s;
    super(), Object.getPrototypeOf(this) !== cn.prototype && Object.setPrototypeOf(this, cn.prototype), this.appendChild(r.content.cloneNode(true)), Vs.set(this, Array.from(Py(this))), Ws.set(this, n), (s = (a = Ws.get(this)).createCallback) === null || s === void 0 || s.call(a, this, Vs.get(this), e), Ws.get(this).processCallback(this, Vs.get(this), e);
  }
  update(r) {
    Ws.get(this).processCallback(this, Vs.get(this), r);
  }
}, "cn");
c(cn, "TemplateInstance");
var ec = /* @__PURE__ */ new WeakMap();
var Kf = /* @__PURE__ */ new WeakMap();
var Jf = /* @__PURE__ */ new WeakMap();
var Dt = /* @__PURE__ */ __name(class {
  constructor(r, e, n) {
    this.strings = r, this.values = e, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    Dt.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, e;
    if (ec.has(this.strings))
      return ec.get(this.strings);
    {
      let n = document.createElement("template"), a = this.strings.length - 1, s = this.strings.reduce((v, m, d) => v + m + (d < a ? `{{ ${d} }}` : ""), ""), p = (e = (r = Dt.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(s)) !== null && e !== void 0 ? e : s;
      return n.innerHTML = p, ec.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let e = this.template;
    if (Kf.get(r) !== e) {
      Kf.set(r, e);
      let n = new cn(e, this.values, this.processor);
      Jf.set(r, n), r instanceof Rt ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    Jf.get(r).update(this.values);
  }
}, "Dt");
c(Dt, "TemplateResult");
Dt.cspTrustedTypesPolicy = null;
function Y(t, r) {
  t.renderInto(r);
}
__name(Y, "Y");
c(Y, "render");
var eh = /* @__PURE__ */ new WeakSet();
function th(t) {
  return eh.has(t);
}
__name(th, "th");
c(th, "isDirective");
function rh(t, r) {
  return th(r) ? (r(t), true) : false;
}
__name(rh, "rh");
c(rh, "processDirective");
function Qo(t) {
  return (...r) => {
    let e = t(...r);
    return eh.add(e), e;
  };
}
__name(Qo, "Qo");
c(Qo, "directive");
var Ko = /* @__PURE__ */ new WeakMap();
var Vi = /* @__PURE__ */ __name(class {
  constructor(r, e) {
    this.element = r, this.type = e, this.element.addEventListener(this.type, this), Ko.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), Ko.get(this.element).delete(this.type));
  }
  static for(r) {
    Ko.has(r.element) || Ko.set(r.element, /* @__PURE__ */ new Map());
    let e = r.attributeName.slice(2), n = Ko.get(r.element);
    return n.has(e) ? n.get(e) : new Vi(r.element, e);
  }
}, "Vi");
c(Vi, "EventHandler");
function nh(t, r) {
  return t instanceof qr && t.attributeName.startsWith("on") ? (Vi.for(t).set(r), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), true) : false;
}
__name(nh, "nh");
c(nh, "processEvent");
function _y(t) {
  return typeof t == "object" && Symbol.iterator in t;
}
__name(_y, "_y");
c(_y, "isIterable");
function ih(t, r) {
  if (!_y(r))
    return false;
  if (t instanceof Rt) {
    let e = [];
    for (let n of r)
      if (n instanceof Dt) {
        let a = document.createDocumentFragment();
        n.renderInto(a), e.push(...a.childNodes);
      } else
        n instanceof DocumentFragment ? e.push(...n.childNodes) : e.push(String(n));
    return e.length && t.replace(...e), true;
  } else
    return t.value = Array.from(r).join(" "), true;
}
__name(ih, "ih");
c(ih, "processIterable");
function oh(t, r) {
  return r instanceof DocumentFragment && t instanceof Rt ? (r.childNodes.length && t.replace(...r.childNodes), true) : false;
}
__name(oh, "oh");
c(oh, "processDocumentFragment");
function ah(t, r) {
  return r instanceof Dt && t instanceof Rt ? (r.renderInto(t), true) : false;
}
__name(ah, "ah");
c(ah, "processSubTemplate");
function Ys(t, r) {
  rh(t, r) || Us(t, r) || nh(t, r) || ah(t, r) || oh(t, r) || ih(t, r) || Zo(t, r);
}
__name(Ys, "Ys");
c(Ys, "processPart");
var tc = Xo(Ys);
function F(t, ...r) {
  return new Dt(t, r, tc);
}
__name(F, "F");
c(F, "html");
var rc = /* @__PURE__ */ new WeakMap();
var zy = Qo((...t) => (r) => {
  rc.has(r) || rc.set(r, { i: t.length });
  let e = rc.get(r);
  for (let n = 0; n < t.length; n += 1)
    t[n] instanceof Promise ? Promise.resolve(t[n]).then((a) => {
      n < e.i && (e.i = n, Ys(r, a));
    }) : n <= e.i && (e.i = n, Ys(r, t[n]));
});
var Ry = Qo((t) => (r) => {
  var e, n;
  if (!(r instanceof Rt))
    return;
  let a = document.createElement("template"), s = (n = (e = Dt.cspTrustedTypesPolicy) === null || e === void 0 ? void 0 : e.createHTML(t)) !== null && n !== void 0 ? n : t;
  a.innerHTML = s;
  let p = document.importNode(a.content, true);
  r.replace(...p.childNodes);
});
function be(t) {
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
__name(be, "be");
c(be, "IconableMixin");
var pn = c((t) => typeof t == "object" && t !== null && typeof t.if == "string", "isIfable");
function We(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(r, "r");
  return c(r, "IfableMixinClass"), M([D], r.prototype, "if", 2), r;
}
__name(We, "We");
c(We, "IfableMixin");
var Xs = c((t) => typeof t == "object" && t !== null && typeof t.initMenu == "function", "isMenuable");
function ge(t) {
  class r extends t {
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = zt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var a, s, p, v;
        (a = this.ifTooltip) == null || a.hide(), (s = this.angleTooltip) == null || s.hide(), (p = this.flagTooltip) == null || p.hide(), (v = this.deleteTooltip) == null || v.hide();
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
      let s = a.content.cloneNode(true), p = document.createDocumentFragment();
      return Y(F`${s}`, p), p;
    }
    initMenuItems(a) {
      if (pn(a.reference)) {
        let p = a.popper.querySelector("button[data-operation-menu-if]");
        H.notNull(p), p.disabled = false, this.ifTooltip = p._tippy, this.ifTooltip === void 0 && (this.ifTooltip = zt(p, { animation: false, content: "Set `if' Conditional" }), p.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Kn(a.reference)) {
        let p = a.popper.querySelector("button[data-operation-menu-angle]");
        H.notNull(p), p.disabled = false, this.angleTooltip = p._tippy, this.angleTooltip === void 0 && (this.angleTooltip = zt(p, { animation: false, content: "Change Angle" }), p.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (ri(a.reference)) {
        let p = a.popper.querySelector("button[data-operation-menu-flag]");
        H.notNull(p), p.disabled = false, this.flagTooltip = p._tippy, this.flagTooltip === void 0 && (this.flagTooltip = zt(p, { animation: false, content: "Set Condifitonal Flag" }), p.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let s = a.popper.querySelector("[data-operation-menu-delete]");
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
  return c(r, "MenuableMixinClass"), r;
}
__name(ge, "ge");
c(ge, "MenuableMixin");
var sh = Lt(tn(), 1);
var Zs = Lt(jo(), 1);
var ur = c((t) => t != null && typeof t.resizeable == "boolean", "isResizeable");
function Qs(t) {
  class r extends t {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = ht({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        fe("resizeable:init", {}, this);
      }, setInteract: (a, s) => {
        H.need(s.type === "SET_INTERACT", "event type must be SET_INTERACT"), H.notNull(this.resizeHandle);
        let p = (0, Zs.default)(this.resizeHandle);
        p.styleCursor(false), p.on("down", this.grabResizeHandle.bind(this)), p.on("up", this.releaseResizeHandle.bind(this)), p.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (a, s) => {
        H.need(s.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, fe("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (a, s) => {
        H.need(s.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, fe("resizeable:release-resize-handle", {}, this);
      }, startResizing: (a, s) => {
        H.need(s.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (a, s) => {
        H.need(s.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), fe("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), fe("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = st(this.resizeableMachine).onTransition((a) => {
        this.debugResizeable && console.log(`resizeable: ${(0, sh.format)(a.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(a) {
      a ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(a) {
      (0, Zs.default)(this.resizeHandle).draggable({ modifiers: [Zs.default.modifiers.snap({ targets: a, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(a) {
      let s = a.modifiers[0];
      if (!s.inRange)
        return;
      let p = s.target.source;
      fe("resizeable:resize-handle-in-snap-range", { snapTargetInfo: p }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
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
      let s = this.resizeHandleX + a.dx, p = this.resizeHandleY + a.dy;
      this.moveResizeHandleTo(s, p);
    }
    moveResizeHandleTo(a, s) {
      this.resizeHandleX = a, this.resizeHandleY = s, this.resizeHandle.style.transform = `translate(${a}px, ${s}px)`;
    }
    endResizing() {
      this.resizeableService.send({ type: "END_RESIZING" });
    }
  }
  __name(r, "r");
  return c(r, "ResizeableMixinClass"), M([D], r.prototype, "span", 2), M([D], r.prototype, "resizeHandleX", 2), M([D], r.prototype, "resizeHandleY", 2), M([D], r.prototype, "debugResizeable", 2), M([D], r.prototype, "resizing", 2), M([Me], r.prototype, "resizeHandle", 2), r;
}
__name(Qs, "Qs");
c(Qs, "ResizeableMixin");
var lh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var Sr = /* @__PURE__ */ __name(class extends ge(ve(me(Ie(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return Vl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(lh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Vl}"`;
  }
}, "Sr");
c(Sr, "AntiControlGateElement"), Sr = M([Z], Sr);
function uh(t) {
  return /^-?\d+$/.test(t);
}
__name(uh, "uh");
c(uh, "isNumeric");
function Ot(t, r = 4) {
  return (t >= 0 ? "+" : "") + t.toFixed(r);
}
__name(Ot, "Ot");
c(Ot, "forceSigned");
var it = /* @__PURE__ */ __name(class extends ge(ve(me(he(pe(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Yl;
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
    this.popup = zt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(a) {
      a.setContent(n);
    } }), this.popup.show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return Y(F`
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
  attributeChangedCallback(e, n, a) {
    this.body && n !== a && a !== null && (e === "data-x" && (this.x = parseFloat(a)), e === "data-y" && (this.y = parseFloat(a)), e === "data-z" && (this.z = parseFloat(a)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = c((a) => F`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${a}deg)"></div>`, "vectorLineRect"), n = c((a, s) => F`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${s}(${a}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    Y(F`<style>
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
    return `"${Yl}"`;
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
}, "it");
c(it, "BlochDisplayElement"), M([Me], it.prototype, "body", 2), M([Me], it.prototype, "vectorLine", 2), M([Me], it.prototype, "vectorEnd", 2), M([Me], it.prototype, "vector", 2), M([dt], it.prototype, "vectorEndCircles", 2), M([D], it.prototype, "x", 2), M([D], it.prototype, "y", 2), M([D], it.prototype, "z", 2), it = M([Z], it);
var ch = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Bt = /* @__PURE__ */ __name(class extends ge(ve(me(Ie(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return Xl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(ch)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Xl}"`;
  }
}, "Bt");
c(Bt, "ControlGateElement"), Bt = M([Z], Bt);
var ph = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Wt = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return rs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(ph)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${rs}<${this.if}"` : `"${rs}"`;
  }
}, "Wt");
c(Wt, "HGateElement"), Wt = M([Z], Wt);
var dh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = /* @__PURE__ */ __name(class extends ge(ve(df(me(be(he(pe(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return ns;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">
          ${this.iconHtml(dh)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${ns}"` : `"${ns}>${this.flag}"`;
  }
}, "Vt");
c(Vt, "MeasurementGateElement"), M([D], Vt.prototype, "value", 2), Vt = M([Z], Vt);
var fh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends ge(ve(We(Le(_n(me(Ie(be(he(pe(HTMLElement)))))))))) {
  get operationType() {
    return is;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(fh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${is}"` : `"${is}(${this.angle.replace("/", "_")})"`;
  }
}, "Yt");
c(Yt, "PhaseGateElement"), Yt = M([Z], Yt);
var Ks = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var hh = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var Tr = /* @__PURE__ */ __name(class extends ge(ve(Qs(me(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return Zl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(F`<div part="layout">
          <div part="body">${this.iconHtml(hh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(Ks)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Zl}${this.span}"`;
  }
}, "Tr");
c(Tr, "QftDaggerGateElement"), Tr = M([Z], Tr);
var mh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Cr = /* @__PURE__ */ __name(class extends ge(ve(Qs(me(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return Ql;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Y(F`<div part="layout">
          <div part="body">${this.iconHtml(mh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(Ks)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ql}${this.span}"`;
  }
}, "Cr");
c(Cr, "QftGateElement"), Cr = M([Z], Cr);
var vh = `<svg
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
var Xt = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return os;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(vh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${os}<${this.if}"` : `"${os}"`;
  }
}, "Xt");
c(Xt, "RnotGateElement"), Xt = M([Z], Xt);
var gh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends ge(ve(We(Le(_n(me(Ie(be(he(pe(HTMLElement)))))))))) {
  get operationType() {
    return as;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(gh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${as}"` : `"${as}(${this.angle.replace("/", "_")})"`;
  }
}, "Zt");
c(Zt, "RxGateElement"), Zt = M([Z], Zt);
var bh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends ge(ve(We(Le(_n(me(Ie(be(he(pe(HTMLElement)))))))))) {
  get operationType() {
    return ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(bh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ss}"` : `"${ss}(${this.angle.replace("/", "_")})"`;
  }
}, "Qt");
c(Qt, "RyGateElement"), Qt = M([Z], Qt);
var yh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends ge(ve(We(Le(_n(me(Ie(be(he(pe(HTMLElement)))))))))) {
  get operationType() {
    return ls;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(yh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ls}"` : `"${ls}(${this.angle.replace("/", "_")})"`;
  }
}, "Kt");
c(Kt, "RzGateElement"), Kt = M([Z], Kt);
var wh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var cr = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return us;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(wh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${us}<${this.if}"` : `"${us}"`;
  }
}, "cr");
c(cr, "SDaggerGateElement"), cr = M([Z], cr);
var xh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 15.5982C30 15.5982 29 13.5893 25 13.3512C21.5 13.1429 16.5 13.8029 17 19.1515C17.5 24.5001 31 23.1432 31 29.035C31 34.9268 25.5934 35.2343 21.5 34.9268C19.0063 34.7396 17 33.2578 17 33.2578" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var pr = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return cs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(xh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${cs}<${this.if}"` : `"${cs}"`;
  }
}, "pr");
c(pr, "SGateElement"), pr = M([Z], pr);
var Eh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var Or = /* @__PURE__ */ __name(class extends ge(ve(me(Ie(be(he(pe(HTMLElement))))))) {
  get operationType() {
    return Kl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(Eh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Kl}"`;
  }
}, "Or");
c(Or, "SpacerGateElement"), Or = M([Z], Or);
var Sh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Jt = /* @__PURE__ */ __name(class extends ge(ve(Le(me(Ie(be(he(pe(HTMLElement)))))))) {
  get operationType() {
    return Jl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(Sh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Jl}"`;
  }
}, "Jt");
c(Jt, "SwapGateElement"), Jt = M([Z], Jt);
var Th = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M37 10H43M40 6V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var dr = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(Th)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ps}<${this.if}"` : `"${ps}"`;
  }
}, "dr");
c(dr, "TDaggerGateElement"), dr = M([Z], dr);
var Ch = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return ds;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(Ch)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ds}<${this.if}"` : `"${ds}"`;
  }
}, "er");
c(er, "TGateElement"), er = M([Z], er);
var Oh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        return bd;
      case "1":
        return yd;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">
          ${this.iconHtml(Oh)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Ht");
c(Ht, "WriteGateElement"), M([D], Ht.prototype, "value", 2), Ht = M([Z], Ht);
var Mh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return fs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(Mh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${fs}<${this.if}"` : `"${fs}"`;
  }
}, "tr");
c(tr, "XGateElement"), tr = M([Z], tr);
var Ih = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return hs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(Ih)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${hs}<${this.if}"` : `"${hs}"`;
  }
}, "rr");
c(rr, "YGateElement"), rr = M([Z], rr);
var Ah = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends ge(ve(We(Le(me(Ie(be(he(pe(HTMLElement))))))))) {
  get operationType() {
    return ms;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Y(F`<div part="body">${this.iconHtml(Ah)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ms}<${this.if}"` : `"${ms}"`;
  }
}, "nr");
c(nr, "ZGateElement"), nr = M([Z], nr);
var Ze = c((t) => t instanceof Sr || t instanceof it || t instanceof Bt || t instanceof Wt || t instanceof Vt || t instanceof Yt || t instanceof Tr || t instanceof Cr || t instanceof Xt || t instanceof Zt || t instanceof Qt || t instanceof Kt || t instanceof cr || t instanceof pr || t instanceof Or || t instanceof Jt || t instanceof dr || t instanceof er || t instanceof Ht || t instanceof tr || t instanceof rr || t instanceof nr, "isOperation");
var Ph = c((t) => t != null && t instanceof Wt, "isHGateElement");
var _h = c((t) => t != null && t instanceof tr, "isXGateElement");
var zh = c((t) => t != null && t instanceof rr, "isYGateElement");
var Rh = c((t) => t != null && t instanceof nr, "isZGateElement");
var Jo = c((t) => t != null && t instanceof Yt, "isPhaseGateElement");
var Dh = c((t) => t != null && t instanceof er, "isTGateElement");
var xz = c((t) => t != null && t instanceof dr, "isTDaggerGateElement");
var kh = c((t) => t != null && t instanceof Xt, "isRnotGateElement");
var Js = c((t) => t != null && t instanceof Zt, "isRxGateElement");
var el = c((t) => t != null && t instanceof Qt, "isRyGateElement");
var tl = c((t) => t != null && t instanceof Kt, "isRzGateElement");
var Ez = c((t) => t != null && t instanceof pr, "isSGateElement");
var Sz = c((t) => t != null && t instanceof cr, "isSDaggerGateElement");
var Tz = c((t) => t != null && t instanceof Or, "isSpacerGateElement");
var Nh = c((t) => t != null && t instanceof Jt, "isSwapGateElement");
var nc = c((t) => t != null && t instanceof Bt, "isControlGateElement");
var ic = c((t) => t != null && t instanceof Sr, "isAntiControlGateElement");
var Gh = c((t) => t != null && t instanceof it, "isBlochDisplayElement");
var Cz = c((t) => t != null && t instanceof Ht, "isWriteGateElement");
var Lh = c((t) => t != null && t instanceof Vt, "isMeasurementGateElement");
var jh = Lt(tn(), 1);
var ea = Lt(jo(), 1);
var oc = c((t) => t !== null && t instanceof Dr, "isAngleSliderElement");
var Dr = /* @__PURE__ */ __name(class extends HTMLElement {
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
        throw new pt("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, n) => {
      n.type === "SET_ANGLE" && (this.denominator = So(this.angle));
    }, setAngleInRadian: (e, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, a] = this.findSnapAngle(this.radian);
      this.angle = a;
    }, setRadianInAngle: (e, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [a] = this.findSnapAngle(pd(this.angle));
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
    this.angleSliderService = st(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${(0, jh.format)(e.value)}`);
    }).start();
  }
  attributeChangedCallback(e, n, a) {
    n !== a && a !== null && (e === "data-angle" && a !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, ea.default)(this).unset();
  }
  update() {
    Y(F`<style>
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
    (0, ea.default)(this).draggable({ origin: "self", modifiers: [ea.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let n = ea.default.getElementRect(e.target).width, a = e.pageX / n;
    this.left = a;
    let s = this.proportionToRadian(a);
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
    let e = -2 * this.denominator, n = 2 * this.denominator, a = new Array(n - e + 1).fill(null).map((s, p) => p + e);
    this.snapAngles = {};
    for (let s of a)
      this.denominator === 1 ? s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI] = "\u03C0" : s === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[s * Math.PI] = `${s}\u03C0` : s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : s === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[s * Math.PI / this.denominator] = `${s}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let n = null, a = null, s = null;
    for (let p in this.snapAngles) {
      let v = Math.abs(parseFloat(p) - e);
      (n === null || v < n) && (n = v, a = parseFloat(p), s = this.snapAngles[p]);
    }
    return H.notNull(a), H.notNull(s), [a, s];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Dr");
c(Dr, "AngleSliderElement"), M([D], Dr.prototype, "angle", 2), M([D], Dr.prototype, "radian", 2), M([D], Dr.prototype, "denominator", 2), M([D], Dr.prototype, "disabled", 2), M([D], Dr.prototype, "debug", 2), Dr = M([Z], Dr);
var Yi = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Y(F`<slot></slot>`, this.shadowRoot);
  }
  activateButton(e) {
    let n = e.currentTarget;
    H.notNull(n);
    for (let a of this.buttons)
      a.removeAttribute("data-active");
    n.setAttribute("data-active", "");
  }
}, "Yi");
c(Yi, "ButtonGroupElement"), M([dt], Yi.prototype, "buttons", 2), Yi = M([Z], Yi);
var Xi = Lt(Hh(), 1);
var ut = /* @__PURE__ */ __name(class extends HTMLElement {
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
    n !== a && (e === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (H.notNull(a), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), e === "data-color-phase" && this.drawQubitCircles());
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
          throw new pt("unsupported qubit count", this.qubitCount);
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
          throw new pt("unsupported qubit count", this.qubitCount);
      }
  }
  updateVisibleQubitCircleKets() {
    this.visibleQubitCircleKets = this.qubitCircles.map((e) => {
      let n = e.getAttribute("data-ket");
      return H.notNull(n), parseInt(n);
    }), H.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(e) {
    Xi.default.mutate(() => {
      for (let n of this.qubitCircles) {
        let a = n.getAttribute("data-ket");
        H.notNull(a);
        let s = parseInt(a), p = e[s];
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
    Y(F`<style>
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
        throw new pt("unsupported qubit count", this.qubitCount);
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
        throw new pt("unsupported qubit count", this.qubitCount);
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
        throw new pt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    H.notNull(this.window), H.notNull(this.innerContainer), this.qubitCount !== 0 && Xi.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let e = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let a = this.lastRowStartIndex; a <= this.lastRowEndIndex; a++)
        for (let s = this.lastColStartIndex; s <= this.lastColEndIndex; s++)
          e.push({ col: s, row: a });
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
    this.window !== void 0 && this.innerContainer !== void 0 && (Xi.default.measure(() => {
      this.qubitCirclePositions = [];
      let e = this.overscanColStartIndex, n = this.overscanColEndIndex, a = this.overscanRowStartIndex, s = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === e && this.lastColEndIndex === n && this.lastRowStartIndex === a && this.lastRowEndIndex === s)) {
        for (let p = a; p <= s; p++)
          for (let v = e; v <= n; v++)
            (v < this.lastColStartIndex || this.lastColEndIndex < v || p < this.lastRowStartIndex || this.lastRowEndIndex < p) && this.qubitCirclePositions.push({ col: v, row: p });
        this.lastColStartIndex = e, this.lastColEndIndex = n, this.lastRowStartIndex = a, this.lastRowEndIndex = s;
      }
    }), Xi.default.mutate(() => {
      let e = document.createDocumentFragment();
      for (let n of this.allQubitCircleElements(this.qubitCirclePositions))
        e.appendChild(n);
      this.innerContainer.appendChild(e), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    Xi.default.mutate(() => {
      for (let e of this.qubitCircles) {
        let n = e.getAttribute("data-col"), a = e.getAttribute("data-row");
        H.notNull(n), H.notNull(a);
        let s = parseInt(n), p = parseInt(a);
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
    let n = e.col + e.row * this.colCount, a = this.qubitCircleSizePx * e.row + e.row * this.gap + this.paddingY, s = this.qubitCircleSizePx * e.col + e.col * this.gap + this.paddingX, p = document.createElement("div");
    p.className = "qubit-circle magnitude-0", p.setAttribute("data-col", e.col.toString()), p.setAttribute("data-row", e.row.toString()), p.setAttribute("data-ket", n.toString()), p.setAttribute("data-targets", "circle-notation.qubitCircles"), p.setAttribute("data-amplitude-real", "0"), p.setAttribute("data-amplitude-imag", "0"), p.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), p.style.setProperty("top", `${a}px`), p.style.setProperty("left", `${s}px`);
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
        throw new pt("unsupported qubit count", this.qubitCount);
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
    let a = zt(n, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let s = n.getAttribute("data-ket");
    H.notNull(s);
    let p = n.getAttribute("data-amplitude-real");
    H.notNull(p);
    let v = n.getAttribute("data-amplitude-imag");
    H.notNull(v);
    let m = parseInt(s), d = parseFloat(p), f = parseFloat(v), y = new In(d, f), w = y.abs(), S = y.phase() / Math.PI * 180, T = document.importNode(this.qubitCirclePopupTemplate.content, true), C = T.getElementById("qubit-circle-popup--ket-binary-value"), _ = T.getElementById("qubit-circle-popup--ket-decimal-value"), k = T.getElementById("qubit-circle-popup--amplitude"), j = T.getElementById("qubit-circle-popup--amplitude-real-value"), $ = T.getElementById("qubit-circle-popup--amplitude-imag-value"), A = T.getElementById("qubit-circle-popup--probability"), ee = T.getElementById("qubit-circle-popup--probability-value"), z = T.getElementById("qubit-circle-popup--phase"), B = T.getElementById("qubit-circle-popup--phase-value");
    H.notNull(k), H.notNull(j), H.notNull($), H.notNull(A), H.notNull(ee), H.notNull(z), H.notNull(B), C && (C.textContent = m.toString(2).padStart(this.qubitCount, "0")), _ && (_.textContent = m.toString()), this.showQubitCirclePopupAmplitude ? (j.textContent = Ot(y.real, 5), $.textContent = `${Ot(y.imag, 5)}i`) : k.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Ot(w * w * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? B.textContent = `${Ot(S, 2)}\xB0` : z.style.display = "none";
    let J = document.createElement("div");
    J.appendChild(T), a.setContent(J.innerHTML), a.show();
  }
  hideQubitCirclePopup(e) {
    let n = e.target;
    H.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let a = n._tippy;
    H.notNull(a), a.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "ut");
c(ut, "CircleNotationElement"), M([D], ut.prototype, "qubitCount", 2), M([D], ut.prototype, "qubitCircleSize", 2), M([D], ut.prototype, "colCount", 2), M([D], ut.prototype, "rowCount", 2), M([D], ut.prototype, "paddingX", 2), M([D], ut.prototype, "paddingY", 2), M([D], ut.prototype, "overscanCount", 2), M([D], ut.prototype, "colorPhase", 2), M([D], ut.prototype, "qubitCirclePopupTemplateId", 2), M([D], ut.prototype, "showQubitCirclePopupAmplitude", 2), M([D], ut.prototype, "showQubitCirclePopupProbability", 2), M([D], ut.prototype, "showQubitCirclePopupPhase", 2), M([Me], ut.prototype, "window", 2), M([Me], ut.prototype, "innerContainer", 2), M([dt], ut.prototype, "qubitCircles", 2), ut = M([Z], ut);
var Zi = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Y(F`<slot></slot>`, this.shadowRoot);
  }
}, "Zi");
c(Zi, "CircleNotationPanelElement"), M([Me], Zi.prototype, "circleNotation", 2), Zi = M([Z], Zi);
var $h = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var qh = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Fr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Y(F`
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
            ${this.iconHtml($h)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(qh)}
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
      return H.need(Ze(n), `${n} must be an operation.`), n;
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
      let a = 0;
      e === 0 ? a = 500 : e === 1 ? a = 600 : e === 2 ? a = 700 : e === 3 && (a = 800);
      let s = n.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: a, fill: "forwards", easing: "ease-out" });
      s.onfinish = () => {
        n === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [e, n] of this.dots.entries())
      e === this.currentGateSetIndex ? n.classList.add("dot--active") : n.classList.remove("dot--active");
  }
}, "Fr");
c(Fr, "GateCarouselElement"), M([D], Fr.prototype, "currentGateSetIndex", 2), M([Me], Fr.prototype, "contentClipper", 2), M([dt], Fr.prototype, "gateSets", 2), M([dt], Fr.prototype, "dots", 2), M([dt], Fr.prototype, "popinAnimationGates", 2), Fr = M([Z], Fr);
var ta = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Y(F`<slot></slot>`, this.shadowRoot);
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
    !this.popup.popper.contains(n) && !this.popup.reference.contains(n) && !Ze(n) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    H.notNull(e);
    let n = e.content.cloneNode(true), a = document.createDocumentFragment();
    return Y(F`${n}`, a), a;
  }
}, "ta");
c(ta, "InspectorButtonElement"), ta = M([Z], ta);
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
    return md(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), pn(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), Kn(e)) {
      let n = So(e.angle);
      Jo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Js(e) || el(e) || tl(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
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
    Y(F`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let n = e.target;
    if (!oc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let n = e.target;
    if (!oc(n))
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
    if (hd(e)) {
      let n, a = So(e);
      this.denominatorInput.value = a.toString(), this.denominatorLabel.textContent = a.toString(), this.backupCurrentDenominator(), dd(e, "-2\u03C0") ? (n = `-${a * 2}\u03C0/${a}`, this.angleInput.value = n) : fd(e, "2\u03C0") ? (n = `${a * 2}\u03C0/${a}`, this.angleInput.value = n) : n = e, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    uh(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Mt");
c(Mt, "OperationInspectorElement"), M([Me], Mt.prototype, "ifInput", 2), M([Me], Mt.prototype, "angleInputLabel", 2), M([Me], Mt.prototype, "angleInput", 2), M([Me], Mt.prototype, "angleSlider", 2), M([Me], Mt.prototype, "denominatorInput", 2), M([Me], Mt.prototype, "denominatorVariableLabel", 2), M([Me], Mt.prototype, "denominatorLabel", 2), M([Me], Mt.prototype, "reduceAngleFractionCheckbox", 2), M([Me], Mt.prototype, "flagInput", 2), M([D], Mt.prototype, "conditionalGatePaneDisabled", 2), M([D], Mt.prototype, "anglePaneDisabled", 2), M([D], Mt.prototype, "conditionalFlagPaneDisabled", 2), Mt = M([Z], Mt);
var rl = Lt(Uh(), 1);
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
    Y(F`<style>
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
    let n = document.importNode(this.popupTemplate.content, true), a = new rl.default(this.amplitude), s = n.getElementById("qubit-circle-popup--header"), p = n.getElementById("qubit-circle-popup--ket-binary-value"), v = n.getElementById("qubit-circle-popup--ket-decimal-value"), m = n.getElementById("qubit-circle-popup--amplitude"), d = n.getElementById("qubit-circle-popup--amplitude-real-value"), f = n.getElementById("qubit-circle-popup--amplitude-imag-value"), y = n.getElementById("qubit-circle-popup--probability"), w = n.getElementById("qubit-circle-popup--probability-value"), S = n.getElementById("qubit-circle-popup--phase"), T = n.getElementById("qubit-circle-popup--phase-value");
    H.notNull(s), H.notNull(p), H.notNull(v), H.notNull(m), H.notNull(d), H.notNull(f), H.notNull(y), H.notNull(w), H.notNull(S), H.notNull(T), this.showPopupHeader ? (p.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), v.textContent = this.ket.toString()) : s.style.display = "none", this.showPopupAmplitude ? (d.textContent = Ot(a.re, 5), f.textContent = `${Ot(a.im, 5)}i`) : m.style.display = "none", this.showPopupProbability ? w.textContent = `${Ot(this.magnitude * this.magnitude * 100, 4)}%` : y.style.display = "none", this.showPopupPhase ? T.textContent = `${Ot(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let C = document.createElement("div");
    C.appendChild(n), e.setContent(C.innerHTML), e.show();
  }
  get magnitude() {
    return new rl.default(this.amplitude).abs();
  }
  get phase() {
    return new rl.default(this.amplitude).arg();
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
c($t, "QubitCircleElement"), M([D], $t.prototype, "ket", 2), M([D], $t.prototype, "qubitCount", 2), M([D], $t.prototype, "amplitude", 2), M([D], $t.prototype, "hidePhase", 2), M([D], $t.prototype, "popupTemplateId", 2), M([D], $t.prototype, "showPopupHeader", 2), M([D], $t.prototype, "showPopupAmplitude", 2), M([D], $t.prototype, "showPopupProbability", 2), M([D], $t.prototype, "showPopupPhase", 2), M([D], $t.prototype, "darkMode", 2), $t = M([Z], $t);
var Yh = Lt(tn(), 1);
var Wh = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Vh = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
    this.runCircuitButtonMachine = ht({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, n) => {
      if (n.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let a = document.createElement("span");
      a.id = "ripple";
      let s = Math.max(this.clientWidth, this.clientHeight), p = s / 2, v = this.getBoundingClientRect(), m = v.left + window.pageXOffset, d = v.top + window.pageYOffset;
      a.setAttribute("part", "ripple"), a.setAttribute("data-target", "run-circuit-button.ripple"), a.style.width = a.style.height = `${s}px`, a.style.left = `${n.clientX - (m + p)}px`, a.style.top = `${n.clientY - (d + p)}px`, this.body.appendChild(a);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = st(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${(0, Yh.format)(e.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, n, a) {
    n !== a && e === "data-running" && a !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    Y(F`<style>
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
    return F([Wh]);
  }
  get tailSpinIcon() {
    return F([Vh]);
  }
}, "dn");
c(dn, "RunCircuitButtonElement"), M([D], dn.prototype, "running", 2), M([D], dn.prototype, "debug", 2), M([Me], dn.prototype, "body", 2), M([Me], dn.prototype, "ripple", 2), dn = M([Z], dn);
var Ur = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Y(F`<slot></slot>`, this.shadowRoot);
  }
}, "Ur");
c(Ur, "SlideInElement"), M([D], Ur.prototype, "direction", 2), M([D], Ur.prototype, "directionDesktop", 2), M([D], Ur.prototype, "duration", 2), M([D], Ur.prototype, "marginTop", 2), M([D], Ur.prototype, "marginBottom", 2), Ur = M([Z], Ur);
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
    Y(F`<style>
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
c(fn, "CircuitBlockElement"), M([D], fn.prototype, "comment", 2), M([D], fn.prototype, "finalized", 2), fn = M([Z], fn);
var Xh = Lt(tn(), 1);
var Wr = c((t) => t != null && t instanceof gt, "isCircuitStepElement");
var Oe = c((t, r) => Array.from(t.reduce((e, n, a, s) => {
  let p = r(n, a, s), v = e.get(p);
  return v ? v.push(n) : e.set(p, [n]), e;
}, /* @__PURE__ */ new Map())), "groupBy");
var gt = /* @__PURE__ */ __name(class extends HTMLElement {
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
      let a = n.dropzone, s = this.bit(a);
      H.notNull(a.operation), a.operation.bit = s;
    }, updateResizeableSpanDropzones: (e, n) => {
      if (!(n.type === "SNAP_DROPZONE" || n.type === "UNSNAP_DROPZONE" || n.type === "OCCUPY_DROPZONE" || n.type === "DELETE_OPERATION" || n.type === "RESIZE_OPERATION"))
        return;
      let a = 1;
      for (let s of this.dropzones) {
        let p = s.operation;
        if (ur(p)) {
          a = p.span;
          continue;
        }
        p === null && (a > 1 ? (s.occupied = true, a -= 1) : s.occupied = false);
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
    this.circuitStepService = st(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${(0, Xh.format)(e.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let e = 0;
    for (let [n, a] of Object.entries(this.dropzones)) {
      if (!a.occupied)
        continue;
      let s = parseInt(n, 10) + 1;
      if (s > e && (e = s), ur(a.operation)) {
        let p = s + a.operation.span - 1;
        p > e && (e = p);
      }
    }
    return H.need(0 <= e && e <= To.MAX_QUBIT_COUNT, "invalid number of qubits in use"), e;
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
      for (let s of this.dropzones)
        a !== null ? s.shadow = true : s.shadow = false;
  }
  update() {
    Y(F`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let p of this.dropzones)
      p.connectTop = false, p.connectBottom = false;
    let n = this.controlGateDropzones, a = this.antiControlGateDropzones, s = this.controllableDropzones(e);
    for (let p of s)
      Co(p.operation) && (p.operation.controls = [], p.operation.antiControls = []);
    if (this.updateSwapConnections(e), this.updatePhasePhaseConnections(e), n.length === 1 && s.length === 0) {
      n[0].operation.disable();
      return;
    }
    if (a.length === 1 && s.length === 0) {
      a[0].operation.disable();
      return;
    }
    n.length === 0 && a.length === 0 || (s.length === 0 ? this.updateControlControlConnections(e) : this.updateControlledUConnections(e), this.updateFreeDropzoneConnections(e));
  }
  updateSwapConnections(e) {
    let n = e == null ? void 0 : e.disableSwap, a = this.swapGateDropzones;
    if (a.length !== 2 || n)
      for (let s of a)
        s.operation.disable();
    else {
      for (let p of a)
        p.operation.enable(), p.connectTop = a.some((m) => this.bit(m) < this.bit(p)), p.connectBottom = a.some((m) => this.bit(m) > this.bit(p));
      let s = a.map((p) => this.bit(p));
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
    for (let a of n) {
      let s = a.operation;
      if (s.angle === "" || e !== void 0 && e.maxPhasePhaseTargetGates === 1)
        continue;
      let p = n.filter((v) => {
        if (!Jo(v.operation))
          throw new Error(`${v.operation} isn't a phase-gate element.`);
        return s.angle === v.operation.angle;
      }).map((v) => this.bit(v));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (p = p.slice(0, e.maxPhasePhaseTargetGates)), p.includes(this.bit(a)) && (a.connectTop = p.some((v) => v < this.bit(a)), a.connectBottom = p.some((v) => v > this.bit(a)));
    }
    for (let a of this.freeDropzones) {
      let p = this.phaseGateDropzones.filter((d) => d.connectTop || d.connectBottom).map((d) => this.bit(d)), v = Math.min(...p), m = Math.max(...p);
      v < this.bit(a) && this.bit(a) < m && (a.connectTop = true, a.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let n = this.controlGateDropzones, a = n.map((p) => this.bit(p)), s = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? a = [] : e.maxControlControlTargetGates > 1 && (a = a.slice(0, e.maxControlControlTargetGates)));
    for (let p of n) {
      s += 1;
      let v = p.operation;
      e != null && e.disableControlControl || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && s > e.maxControlControlTargetGates) ? v.disable() : (v.enable(), p.connectTop = a.some((m) => this.bit(p) > m), p.connectBottom = a.some((m) => this.bit(p) < m));
    }
  }
  updateControlledUConnections(e) {
    let n = this.controllableDropzones(e), a = this.controlGateDropzones, s = this.antiControlGateDropzones, p = [...new Set(n.map((T) => T.operationName))], v = this.numControlGateDropzones(e, p), m = a.map((T) => this.bit(T)), d = s.map((T) => this.bit(T)), f = m.concat(d), y = v === null ? f : f.slice(0, v), w = n.map((T) => this.bit(T)), S = y.concat(w);
    for (let [T, C] of Object.entries(a)) {
      let _ = C.operation;
      C.connectBottom = S.some((k) => this.bit(C) < k), C.connectTop = S.some((k) => this.bit(C) > k), v === null || v !== null && parseInt(T) < v ? _.enable() : (C.connectTop = Math.max(...S) > this.bit(C), _.disable());
    }
    for (let [T, C] of Object.entries(s)) {
      let _ = C.operation;
      C.connectBottom = S.some((k) => this.bit(C) < k), C.connectTop = S.some((k) => this.bit(C) > k), v === null || v !== null && parseInt(T) < v ? _.enable() : (C.connectTop = Math.max(...S) > this.bit(C), _.disable());
    }
    for (let T of n) {
      if (!Co(T.operation))
        throw new Error(`${T.operation} isn't controllable.`);
      T.operation.controls = this.controlBits(T, m, e), T.operation.antiControls = d, T.connectTop = S.some((C) => C < this.bit(T)), T.connectBottom = S.some((C) => C > this.bit(T));
    }
  }
  updateFreeDropzoneConnections(e) {
    let n = this.controllableDropzones(e), a = this.controlGateDropzones.filter((f) => nc(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), s = this.antiControlGateDropzones.filter((f) => ic(f.operation) && !f.operation.disabled).map((f) => this.bit(f)), p = n.map((f) => this.bit(f)), v = a.concat(s).concat(p), m = Math.min(...v), d = Math.max(...v);
    for (let f of this.freeDropzones)
      m < this.bit(f) && this.bit(f) < d && (f.connectTop = true, f.connectBottom = true);
  }
  controlBits(e, n, a) {
    let s = n;
    return a && (a.maxChControlGates > 0 && e.operationName === "h-gate" ? s = n.slice(0, a.maxChControlGates) : a.maxCnotControlGates > 0 && e.operationName === "x-gate" ? s = n.slice(0, a.maxCnotControlGates) : a.maxCyControlGates > 0 && e.operationName === "y-gate" ? s = n.slice(0, a.maxCyControlGates) : a.maxCzControlGates > 0 && e.operationName === "z-gate" ? s = n.slice(0, a.maxCzControlGates) : a.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? s = n.slice(0, a.maxCphaseControlGates) : a.maxCtControlGates > 0 && e.operationName === "t-gate" ? s = n.slice(0, a.maxCtControlGates) : a.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? s = n.slice(0, a.maxCrnotControlGates) : a.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? s = n.slice(0, a.maxCrxControlGates) : a.maxCryControlGates > 0 && e.operationName === "ry-gate" ? s = n.slice(0, a.maxCryControlGates) : a.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? s = n.slice(0, a.maxCrzControlGates) : a.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (s = n.slice(0, a.maxCswapControlGates))), s;
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
    return this.occupiedDropzones.filter((e) => nc(e.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((e) => ic(e.operation));
  }
  numControlGateDropzones(e, n) {
    if (e === void 0)
      return null;
    let a = 0;
    return n.includes("h-gate") && !e.disableCh && e.maxChControlGates > a && (a = e.maxChControlGates), n.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > a && (a = e.maxCnotControlGates), n.includes("y-gate") && !e.disableCy && e.maxCyControlGates > a && (a = e.maxCyControlGates), n.includes("z-gate") && !e.disableCz && e.maxCzControlGates > a && (a = e.maxCzControlGates), n.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > a && (a = e.maxCphaseControlGates), n.includes("t-gate") && !e.disableCt && e.maxCtControlGates > a && (a = e.maxCtControlGates), n.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > a && (a = e.maxCrnotControlGates), n.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > a && (a = e.maxCrxControlGates), n.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > a && (a = e.maxCryControlGates), n.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > a && (a = e.maxCrzControlGates), n.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > a && (a = e.maxCswapControlGates), a === 0 ? null : a;
  }
  controllableDropzones(e) {
    let n = 0, a = 0, s = 0, p = 0, v = 0, m = 0, d = 0, f = 0, y = 0, w = 0;
    return this.occupiedDropzones.filter((S) => Co(S.operation)).filter((S) => e === void 0 ? true : Ph(S.operation) ? (n += 1, e.maxChTargetGates !== 0 && n > e.maxChTargetGates ? false : !e.disableCh) : _h(S.operation) ? (a += 1, e.maxCnotTargetGates !== 0 && a > e.maxCnotTargetGates ? false : !e.disableCnot) : zh(S.operation) ? (s += 1, e.maxCyTargetGates !== 0 && s > e.maxCyTargetGates ? false : !e.disableCy) : Rh(S.operation) ? (p += 1, e.maxCzTargetGates !== 0 && p > e.maxCzTargetGates ? false : !e.disableCz) : Jo(S.operation) ? (v += 1, e.maxCphaseTargetGates !== 0 && v > e.maxCphaseTargetGates ? false : !e.disableCphase) : Dh(S.operation) ? (m += 1, e.maxCtTargetGates !== 0 && m > e.maxCtTargetGates ? false : !e.disableCt) : kh(S.operation) ? (d += 1, e.maxCrnotTargetGates !== 0 && d > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Js(S.operation) ? (f += 1, e.maxCrxTargetGates !== 0 && f > e.maxCrxTargetGates ? false : !e.disableCrx) : el(S.operation) ? (y += 1, e.maxCryTargetGates !== 0 && y > e.maxCryTargetGates ? false : !e.disableCry) : tl(S.operation) ? (w += 1, e.maxCrzTargetGates !== 0 && w > e.maxCrzTargetGates ? false : !e.disableCrz) : Nh(S.operation) ? !e.disableCswap : true);
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
    Ze(e.target) || fe("circuit-step:click", {}, this);
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
    for (let [n, a] of Oe(this.operations, (s) => s.constructor))
      switch (n) {
        case Wt: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case tr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case rr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case nr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Yt: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], S = w.operationType, T = y.map((_) => _.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case pr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case cr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case er: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case dr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Xt: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.if))
            for (let [m, d] of Oe(v, (f) => f.controls.toString())) {
              let f = d[0], y = f.operationType, w = d.map((T) => T.bit), S = { type: y, targets: w };
              p !== "" && (S.if = p), m !== "" && (S.controls = f.controls), f.antiControls.length > 0 && (S.antiControls = f.antiControls), e.push(S);
            }
          break;
        }
        case Zt: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], S = w.operationType, T = y.map((_) => _.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Qt: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], S = w.operationType, T = y.map((_) => _.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Kt: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.angle))
            for (let [m, d] of Oe(v, (f) => f.if))
              for (let [f, y] of Oe(d, (w) => w.controls.toString())) {
                let w = y[0], S = w.operationType, T = y.map((_) => _.bit), C = { type: S, targets: T };
                m !== "" && (C.if = m), p !== "" && (C.angle = p), f !== "" && (C.controls = w.controls), w.antiControls.length > 0 && (C.antiControls = w.antiControls), e.push(C);
              }
          break;
        }
        case Or: {
          let s = a, p = s[0].operationType, v = s.map((d) => d.bit), m = { type: p, targets: v };
          e.push(m);
          break;
        }
        case Cr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), y = { type: d, span: p, targets: f };
            e.push(y);
          }
          break;
        }
        case Tr: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.span)) {
            let d = v[0].operationType, f = v.map((w) => w.bit), y = { type: d, span: p, targets: f };
            e.push(y);
          }
          break;
        }
        case Jt: {
          let s = a.filter((d) => !d.disabled);
          if (s.length !== 2)
            break;
          let p = s[0].operationType, v = s[0].controls, m = { type: p, targets: [s[0].bit, s[1].bit] };
          v !== void 0 && v.length > 0 && (m.controls = v), e.push(m);
          break;
        }
        case Bt: {
          let s = a.filter((v) => !v.disabled);
          if (s.length < 2 || this.operations.some((v) => Co(v) && v.controls.length > 0))
            break;
          let p = s.map((v) => v.bit);
          e.push({ type: s[0].operationType, targets: p });
          break;
        }
        case Sr:
          break;
        case it: {
          let s = a, p = a.map((v) => v.bit);
          e.push({ type: s[0].operationType, targets: p });
          break;
        }
        case Ht: {
          let s = a;
          for (let [, p] of Oe(s, (v) => v.value)) {
            let v = p.map((m) => m.bit);
            e.push({ type: p[0].operationType, targets: v });
          }
          break;
        }
        case Vt: {
          let s = a;
          for (let [p, v] of Oe(s, (m) => m.flag)) {
            let m = v.map((y) => y.bit), f = { type: v[0].operationType, targets: m };
            p !== "" && (f.flag = p), e.push(f);
          }
          break;
        }
        default:
          throw new pt("Unrecognized operation", { klass: n });
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
}, "gt");
c(gt, "CircuitStepElement"), M([D], gt.prototype, "active", 2), M([D], gt.prototype, "breakpoint", 2), M([D], gt.prototype, "shadow", 2), M([D], gt.prototype, "keep", 2), M([D], gt.prototype, "debug", 2), M([dt], gt.prototype, "dropzones", 2), M([dt], gt.prototype, "freeDropzones", 2), M([dt], gt.prototype, "occupiedDropzones", 2), gt = M([Z], gt);
var Qh = Lt(jo(), 1);
var Zh = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var na = c((t) => t != null && t instanceof de, "isCircuitDropzoneElement");
var ra;
var de = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ja(this, ra, null);
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
    this.circuitDropzoneService = st(this.circuitDropzoneMachine).onTransition((e) => {
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
    let { signal: e } = Ba(this, ra, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: e }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: e }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: e }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = La(this, ra)) == null || e.abort();
  }
  attributeChangedCallback(e, n, a) {
    n !== a && e === "data-occupied" && (a !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
  }
  update() {
    Y(F`<style>
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
    return H.notNull(e), Wr(e) ? e : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, Qh.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!Ze(n))
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
    return F([Zh]);
  }
}, "de");
c(de, "CircuitDropzoneElement"), ra = /* @__PURE__ */ new WeakMap(), M([D], de.prototype, "occupied", 2), M([D], de.prototype, "operationName", 2), M([D], de.prototype, "inputWireQuantum", 2), M([D], de.prototype, "outputWireQuantum", 2), M([D], de.prototype, "connectTop", 2), M([D], de.prototype, "connectBottom", 2), M([D], de.prototype, "shadow", 2), M([D], de.prototype, "targets", 2), M([D], de.prototype, "debug", 2), de = M([Z], de);
var Kh = Lt(tn(), 1);
var Nn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ht({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (e, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let a = n.operation;
      Xs(a) && a.menu && a.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, n) => {
      n.type !== "GRAB_OPERATION" && n.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(n.operation);
    }, snapOperationIntoDropzone: (e, n) => {
      if (n.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let a = n.operation, s = this.circuit.snapTargetAt(n.x, n.y);
      if (a.snapped = true, s.dropzone === null) {
        let p = s.stepIndex;
        H.notNull(p);
        let v = this.circuit.addShadowStepAfter(p), m = v.dropzones[s.wireIndex];
        H.notNull(m), m.append(a), m.operationName = a.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(v.dropzones);
      } else
        s.dropzone.append(a);
    }, snapResizeHandleIntoDropzone: (e, n) => {
      if (n.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let a = n.operation;
      if (!ur(a))
        throw new Error(`${a} is not resizeable`);
      let s = a.dropzone;
      if (!na(s))
        throw new Error(`${s} is not a circuit dropzone`);
      H.notNull(s.circuitStep);
      let p = s.circuitStep.dropzones.indexOf(s), m = this.circuit.resizeHandleSnapTargetAt(n.x, n.y).wireIndex - p + 1;
      if (!gd(m))
        throw new Error(`Invalid span: ${m}`);
      a.span = m;
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, addDocumentCursorResizingStyle: () => {
      document.documentElement.setAttribute("data-resizing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, removeDocumentCursorResizingStyle: () => {
      document.documentElement.removeAttribute("data-resizing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < To.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      Xs(a) && a.initMenu();
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
    this.circuitEditorService = st(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${(0, Kh.format)(e.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("menuable:show-menu", this.showOperationMenu), this.addEventListener("menuable:menu-if", this.showOperationInspectorIf), this.addEventListener("menuable:menu-angle", this.showOperationInspectorAngle), this.addEventListener("menuable:menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("resizeable:release-resize-handle", this.releaseResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("menuable:menu-delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Y(F`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(e) {
    let n = e.target;
    if (zs(n))
      n.draggable = true;
    else
      throw new pt("Not a draggable element.", { el: n });
  }
  enableResizing(e) {
    let n = e.target;
    if (ur(n))
      n.resizeable = true;
    else
      throw new pt("Not a resizeable element.", { el: n });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(e) {
    if (e.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let a of this.circuit.operations)
        Xs(a) && a.initMenu();
    }
  }
  maybeDeactivateOperation(e) {
    var a;
    let n = e.target;
    !Ze(n) && this.inspectorButton && !((a = this.inspectorButton) != null && a.popup.popper.contains(n)) && !this.inspectorButton.popup.reference.contains(n) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: n });
  }
  showOperationMenu(e) {
    let n = e.target;
    if (!Ze(n))
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
    let n = e.target, a = this.activeOperation;
    if (!pn(a))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: a, if: n.if });
  }
  setOperationAngle(e) {
    let n = e.target, a = this.activeOperation;
    if (H.notNull(a), !Kn(a))
      throw new Error(`${a.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: a, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let n = e.target, a = this.activeOperation;
    if (!ri(a))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: a, flag: n.flag });
  }
  grabOperation(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: n });
  }
  grabResizeHandle(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: n });
  }
  releaseResizeHandle(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  releaseOperation(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: n });
  }
  resizeEnd(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  endDraggingOperation(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: n });
  }
  dropOperation(e) {
    let n = e.target;
    if (!Ze(n))
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
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    let s = e.detail.snapTargetInfo, p = s.x, v = s.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  resizeHandleInSnapRange(e) {
    let n = e.target;
    if (!Ze(n))
      throw new Error(`${n} must be an Operation.`);
    let s = e.detail.snapTargetInfo, p = s.x, v = s.y;
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
}, "Nn");
c(Nn, "CircuitEditorElement"), M([D], Nn.prototype, "debug", 2), M([Me], Nn.prototype, "circuit", 2), M([Me], Nn.prototype, "inspectorButton", 2), Nn = M([Z], Nn);
var oa;
var ia = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    ja(this, oa, null);
  }
  connectedCallback() {
    let { signal: e } = Ba(this, oa, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: e }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: e });
  }
  disconnectedCallback() {
    var e;
    (e = La(this, oa)) == null || e.abort();
  }
  update() {
    Y(F`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    zs(e) && (e.draggable = true, e.grabbed = false, e.snapped = true), ur(e) && (e.resizeable = true), Ku(e) && e.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((e) => Ze(e));
  }
  newOperation(e) {
    let n = e.target;
    this.assertOperation(n);
    let a = n.cloneNode(false);
    this.assertOperation(a), Ku(n) && n.disableHelp(), this.prepend(a), this.initOperation(a);
  }
  deleteOperation(e) {
    let n = e.target;
    this.assertOperation(n), this.removeChild(n);
  }
  assertOperation(e) {
    if (!Ze(e))
      throw new TypeError(`${e} isn't an operation.`);
  }
}, "ia");
c(ia, "PaletteDropzoneElement"), oa = /* @__PURE__ */ new WeakMap(), ia = M([Z], ia);
var se = /* @__PURE__ */ __name(class extends pe(HTMLElement) {
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
    for (let a of this.steps)
      a.wireCount > 0 && a.wireCount > n && (e = a, n = a.wireCount);
    return e;
  }
  appendMinimumSteps() {
    let e = this.minStepCount - this.steps.length;
    for (let n = 0; n < e; n++)
      this.append(new gt());
  }
  stepAt(e) {
    let n = this.steps[e];
    return H.notNull(n), n;
  }
  addShadowStepAfter(e) {
    let n = new gt();
    n.shadow = true;
    for (let a = 0; a < this.wireCount; a++)
      n.appendDropzone();
    if (e === -1)
      this.prepend(n);
    else {
      let a = this.steps[e];
      H.notNull(a.parentElement), a.parentElement.insertBefore(n, a.nextSibling);
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
  attributeChangedCallback(e, n, a) {
    n !== a && (e === "data-editing" && (a !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-hoverable" && a !== null && this.makeOperationsHoverable(), e === "data-json" && a !== "" && a !== null && (this.loadFromJson(a), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let e of this.operations)
      e.hoverable = true;
  }
  update() {
    Y(F`<slot></slot>`, this.shadowRoot);
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
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Wt();
      return a && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  x(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new tr();
      return a && s.disable(), s;
    }, ...n), this;
  }
  y(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new rr();
      return a && s.disable(), s;
    }, ...n), this;
  }
  z(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new nr();
      return a && s.disable(), s;
    }, ...n), this;
  }
  phase(...e) {
    let n = "", a, s;
    if (typeof e[0] == "number")
      a = e;
    else if (typeof e[0] == "string")
      n = e[0], a = e.slice(1);
    else {
      let v = e[0];
      a = v.targets, s = v.disabled;
    }
    let p = this.applyOperationToTargets(() => {
      let v = new Yt();
      return v.angle = n, s && v.disable(), v;
    }, ...a);
    return a.length > 1 && this.updateStepOperationAttributes(p), this;
  }
  s(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new pr();
      return a && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  sDagger(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new cr();
      return a && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  t(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new er();
      return a && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  tDagger(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new dr();
      return a && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  rnot(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Xt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  rx(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Zt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  ry(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Qt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  rz(...e) {
    let n, a;
    if (typeof e[0] == "number")
      n = e;
    else {
      let s = e[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Kt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  qft(e, ...n) {
    let a;
    return typeof n[0] == "number" ? a = n : a = n[0].targets, this.applyOperationToTargets(() => {
      let s = new Cr();
      return s.span = e, s;
    }, ...a), this.resize(), this;
  }
  qftDagger(e, ...n) {
    let a;
    return typeof n[0] == "number" ? a = n : a = n[0].targets, this.applyOperationToTargets(() => {
      let s = new Tr();
      return s.span = e, s;
    }, ...a), this.resize(), this;
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
    return this.applyOperationToTargets(() => new it(), ...e), this;
  }
  write(e, ...n) {
    return this.applyOperationToTargets(() => {
      let a = new Ht();
      return a.value = e, a;
    }, ...n), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Vt(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...n) {
    let a = Math.max(...n) + 1, s = this.appendStepWithDropzones(a);
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
    return this.controlledU(Qt, e, n), this;
  }
  crz(e, n) {
    return this.controlledU(Kt, e, n), this;
  }
  cswap(e, n) {
    return this.controlledU(Jt, e, n), this;
  }
  cc(...e) {
    let n = Math.max(...e) + 1, a = this.appendStepWithDropzones(n);
    for (let s of e)
      a.dropzoneAt(s).put(new Bt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(a), this;
  }
  controlledU(e, n, a) {
    let s = [].concat(n), p = [].concat(a), v = s.concat(p), m = Math.max(...v) + 1, d = this.appendStepWithDropzones(m);
    for (let f of s)
      d.dropzoneAt(f).put(new Bt());
    for (let f of p)
      d.dropzoneAt(f).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(d);
  }
  appendStep() {
    let e = new gt(), n = this.blocks.slice(-1)[0] || null;
    return n === null || n.finalized ? this.append(e) : n.append(e), e;
  }
  appendStepWithDropzones(e) {
    let n = new gt();
    this.append(n);
    for (let a = 0; a < e; a++) {
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
    let s = false;
    for (let p of a.cols) {
      let v = this.appendStep();
      s && (v.keep = true, s = false);
      let m = [];
      for (let d of p) {
        switch (true) {
          case /^\|0>$/.test(d): {
            let f = new Ht();
            f.value = "0", m.push(f), v.append(new de());
            break;
          }
          case /^\|1>$/.test(d): {
            let f = new Ht();
            f.value = "1", m.push(f), v.append(new de());
            break;
          }
          case /^H/.test(d): {
            let f = new Wt();
            f.if = this.ifVariable(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case (/^X$/.test(d) || /^X<(.+)$/.test(d)): {
            let f = new tr();
            f.if = d.slice(2).trim(), m.push(f), v.append(new de());
            break;
          }
          case /^Y/.test(d): {
            let f = new rr();
            f.if = this.ifVariable(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case /^Z/.test(d): {
            let f = new nr();
            f.if = this.ifVariable(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case /^P/.test(d): {
            let f = new Yt();
            f.angle = this.angleParameter(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case /^T†/.test(d): {
            let f = new dr();
            f.if = this.ifVariable(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case /^T/.test(d): {
            let f = new er();
            f.if = this.ifVariable(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case /^X\^½/.test(d): {
            let f = new Xt();
            f.if = this.ifVariable(d.slice(3)), m.push(f), v.append(new de());
            break;
          }
          case /^Rx/.test(d): {
            let f = new Zt();
            f.angle = this.angleParameter(d.slice(2)), m.push(f), v.append(new de());
            break;
          }
          case /^Ry/.test(d): {
            let f = new Qt();
            f.angle = this.angleParameter(d.slice(2)), m.push(f), v.append(new de());
            break;
          }
          case /^Rz/.test(d): {
            let f = new Kt();
            f.angle = this.angleParameter(d.slice(2)), m.push(f), v.append(new de());
            break;
          }
          case /^…/.test(d): {
            let f = new Or();
            m.push(f), v.append(new de());
            break;
          }
          case /^QFT\d/.test(d): {
            let f = new Cr(), y = parseInt(d.slice(3), 10);
            f.span = y, m.push(f);
            for (let w = 0; w < y; w++)
              v.append(new de());
            break;
          }
          case /^QFT†\d/.test(d): {
            let f = new Tr(), y = parseInt(d.slice(4), 10);
            f.span = y, m.push(f), v.append(new de());
            for (let w = 0; w < y; w++)
              v.append(new de());
            break;
          }
          case /^Swap$/.test(d): {
            let f = new Jt();
            m.push(f), v.append(new de());
            break;
          }
          case /^S†/.test(d): {
            let f = new cr();
            f.if = this.ifVariable(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case /^S/.test(d): {
            let f = new pr();
            f.if = this.ifVariable(d.slice(1)), m.push(f), v.append(new de());
            break;
          }
          case /^•$/.test(d): {
            let f = new Bt();
            m.push(f), v.append(new de());
            break;
          }
          case /^◦$/.test(d): {
            let f = new Sr();
            m.push(f), v.append(new de());
            break;
          }
          case /^Bloch$/.test(d): {
            let f = new it();
            m.push(f), v.append(new de());
            break;
          }
          case /^Measure/.test(d): {
            let f = new Vt(), y = ((/^>(.+)$/.exec(d.slice(7)) || [])[1] || "").trim();
            f.flag = y, m.push(f), v.append(new de());
            break;
          }
          case /^[[{](.+)$/.test(d): {
            let f = d.slice(1);
            v.remove(), n = new fn(), n.comment = f, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
            break;
          }
          case /^[\]}]$/.test(d): {
            v.remove(), n.finalize(), s = true;
            break;
          }
          default: {
            if (d !== 1)
              throw new Error(`Unknown operation: ${d}`);
            v.append(new de()), m.push(null);
          }
        }
        for (let [f, y] of Object.entries(m))
          y !== null && v.dropzoneAt(parseInt(f)).put(y);
        v.updateOperationAttributes();
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
      let s = n - a.wireCount;
      for (let p = 0; p < s; p++)
        a.appendDropzone();
    }
  }
  updateWire(e) {
    let n = false;
    for (let a of this.steps) {
      let s = a.dropzoneAt(e);
      if (s.inputWireQuantum = n, s.operationName === "write-gate")
        s.inputWireQuantum = n, s.outputWireQuantum = true, n = true;
      else if (s.operationName === "measurement-gate")
        s.inputWireQuantum = n, s.outputWireQuantum = false, n = false;
      else if (s.operationName === "swap-gate") {
        let p = a.dropzones.filter((v) => v.operationName === "swap-gate");
        if (p.length === 2) {
          let v = p.map((y) => a.bit(y)), m = a.bit(s), d = v[0] === m ? v[1] : v[0], f = a.dropzoneAt(d);
          s.inputWireQuantum = n, s.outputWireQuantum = f.inputWireQuantum, n = f.inputWireQuantum;
        } else
          s.inputWireQuantum = n, s.outputWireQuantum = n;
      } else
        s.inputWireQuantum = n, s.outputWireQuantum = n;
    }
  }
  updateChangedWire(e) {
    let n = e.target;
    if (!Wr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let a = e.detail.dropzone;
    if (!na(a))
      throw new Error(`${a} isn't a circuit-dropzone.`);
    let s = n.dropzones.indexOf(a);
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
    let a = 1;
    ur(e) && (a = e.span);
    let s = e.dropzone;
    for (let [p, v] of Object.entries(this.steps)) {
      let m = parseInt(p);
      for (let [d, f] of Object.entries(v.dropzones)) {
        let y = parseInt(d), w = f.snapTarget, S = this.isVertical ? w.y : w.x, T = this.isVertical ? w.x : w.y;
        if (m === 0 && v.dropzones[y + a - 1] !== void 0) {
          let _ = S - e.snapRange * 0.75;
          this.isVertical ? n.push({ x: T, y: _ }) : n.push({ x: _, y: T }), this.snapTargets[_] === void 0 && (this.snapTargets[_] = {}), this.snapTargets[_][T] === void 0 && (this.snapTargets[_][T] = { dropzone: null, stepIndex: -1, wireIndex: y });
        }
        if (a === 1)
          (f === s || !f.occupied) && n.push(w);
        else if (!f.occupied && y + a <= v.dropzones.length && n.push(w), f === s) {
          n.push(w);
          for (let _ = 1; _ < a && y + _ < v.dropzones.length; _++) {
            let k = v.dropzones[y + _];
            H.notNull(k), n.push(k.snapTarget);
          }
        }
        let C = S + e.snapRange * 0.75;
        v.dropzones[y + a - 1] !== void 0 && (this.isVertical ? n.push({ x: T, y: C }) : n.push({ x: C, y: T })), this.snapTargets[C] === void 0 && (this.snapTargets[C] = {}), this.snapTargets[C][T] === void 0 && (this.snapTargets[C][T] = { dropzone: null, stepIndex: m, wireIndex: y }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][T] === void 0 && (this.snapTargets[S][T] = { dropzone: f, stepIndex: null, wireIndex: y });
      }
    }
    e.snapTargets = n;
  }
  setResizeHandleSnapTargets(e) {
    if (!ur(e))
      throw new Error(`${e} isn't a resizeable operation.`);
    if (!na(e == null ? void 0 : e.dropzone))
      throw new Error(`${e.dropzone} isn't a circuit-dropzone.`);
    let n = e.dropzone.circuitStep;
    H.notNull(n);
    let a = n.freeDropzones, s = e.dropzone;
    a.push(s);
    let p = [];
    this.resizeHandleSnapTargets = {};
    for (let [v, m] of Object.entries(n.dropzones)) {
      let d = m.resizeHandleSnapTarget, f = this.isVertical ? d.y : d.x, y = this.isVertical ? d.x : d.y, w = parseInt(v) % this.wireCount;
      if (m.occupied || p.push(d), m === s) {
        p.push(d);
        let S = e.span;
        for (let T = 1; T < S; T++) {
          let C = n.dropzones[parseInt(v) + T];
          H.notNull(C), p.push(C.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[f] === void 0 && (this.resizeHandleSnapTargets[f] = {}), this.resizeHandleSnapTargets[f][y] === void 0 && (this.resizeHandleSnapTargets[f][y] = { dropzone: m, stepIndex: null, wireIndex: w });
    }
    e.resizeHandleSnapTargets = p;
  }
  updateSnapTargets(e) {
    let n = e[0];
    H.notNull(n);
    let a = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [s, p] of Object.entries(this.snapTargets))
      if (!(parseInt(s) <= a))
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
          let s = a.block;
          n.push(`["[${s.comment}"]`), e = true;
        }
      } else
        e && (n.push('["]"]'), e = false);
      n.push(a.toJson());
    }
    return e && n.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${n.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${n.join(",")}]}`;
  }
}, "se");
c(se, "QuantumCircuitElement"), M([D], se.prototype, "minStepCount", 2), M([D], se.prototype, "minWireCount", 2), M([D], se.prototype, "editing", 2), M([D], se.prototype, "updateUrl", 2), M([D], se.prototype, "json", 2), M([D], se.prototype, "circuitTitle", 2), M([D], se.prototype, "debug", 2), M([D], se.prototype, "chDisabled", 2), M([D], se.prototype, "chMaxControlGates", 2), M([D], se.prototype, "chMaxTargetGates", 2), M([D], se.prototype, "cnotDisabled", 2), M([D], se.prototype, "cnotMaxControlGates", 2), M([D], se.prototype, "cnotMaxTargetGates", 2), M([D], se.prototype, "cyDisabled", 2), M([D], se.prototype, "cyMaxControlGates", 2), M([D], se.prototype, "cyMaxTargetGates", 2), M([D], se.prototype, "czDisabled", 2), M([D], se.prototype, "czMaxControlGates", 2), M([D], se.prototype, "czMaxTargetGates", 2), M([D], se.prototype, "cphaseDisabled", 2), M([D], se.prototype, "cphaseMaxControlGates", 2), M([D], se.prototype, "cphaseMaxTargetGates", 2), M([D], se.prototype, "ctDisabled", 2), M([D], se.prototype, "ctMaxControlGates", 2), M([D], se.prototype, "ctMaxTargetGates", 2), M([D], se.prototype, "crnotDisabled", 2), M([D], se.prototype, "crnotMaxControlGates", 2), M([D], se.prototype, "crnotMaxTargetGates", 2), M([D], se.prototype, "crxDisabled", 2), M([D], se.prototype, "crxMaxControlGates", 2), M([D], se.prototype, "crxMaxTargetGates", 2), M([D], se.prototype, "cryDisabled", 2), M([D], se.prototype, "cryMaxControlGates", 2), M([D], se.prototype, "cryMaxTargetGates", 2), M([D], se.prototype, "crzDisabled", 2), M([D], se.prototype, "crzMaxControlGates", 2), M([D], se.prototype, "crzMaxTargetGates", 2), M([D], se.prototype, "cswapDisabled", 2), M([D], se.prototype, "cswapMaxControlGates", 2), M([D], se.prototype, "swapDisabled", 2), M([D], se.prototype, "controlControlDisabled", 2), M([D], se.prototype, "controlControlMaxTargetGates", 2), M([D], se.prototype, "phasePhaseDisabled", 2), M([D], se.prototype, "phasePhaseMaxTargetGates", 2), M([dt], se.prototype, "blocks", 2), se = M([Z], se);
var hn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("draggable:delete", this.maybeUpdateUrl), this.addEventListener("draggable:delete", this.freshRun), this.addEventListener("menuable:menu-delete", this.maybeUpdateUrl), this.addEventListener("menuable:menu-delete", this.freshRun), this.addEventListener("operation-inspector-if-change", this.freshRun), this.addEventListener("operation-inspector-angle-change", this.freshRun), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.freshRun), this.addEventListener("circuit-step:mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step:mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step:qpu-operation-snap", this.freshRun), this.addEventListener("circuit-step:qpu-operation-unsnap", this.freshRun), this.addEventListener("circuit-step:update", this.freshRun), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.freshRun), this.addEventListener("circuit-step:qpu-operation-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step:qpu-operation-unsnap", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.maybeUpdateUrl), this.addEventListener("circuit-step:resize-qpu-operation", this.freshRun), this.addEventListener("circuit-editor-resize", this.freshRun), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.setCircleNotationQubitCount();
  }
  update() {
    Y(F`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(e) {
    var s;
    let n = e.data, a = this.activeStepIndex;
    switch (n.type) {
      case "step": {
        let p = this.circuit.stepAt(n.step);
        for (let v in n.blochVectors) {
          let m = parseInt(v), d = p.dropzoneAt(m).operation;
          if (Gh(d)) {
            let f = n.blochVectors[m];
            d.x = f[0], d.y = f[1], d.z = f[2];
          }
        }
        if (n.measuredBits) {
          let v = n.measuredBits;
          for (let m in v) {
            let d = parseInt(m), f = p.dropzoneAt(d).operation;
            Lh(f) && (f.value = v[d].toString());
          }
        }
        for (let v of p.dropzones) {
          let m = v.operation;
          pn(m) && m.if !== "" && (m.disabled = !n.flags[m.if]);
        }
        if (a === n.step) {
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
        throw new pt("Unknown service worker message", { data: n });
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
    H.need(a.length > 0, "non-zero step length");
    let s = this.circuit.toJson(), p = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: p, stepIndex: n, circuitJson: s, invalidateCaches: e, steps: a, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
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
    H.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "hn");
c(hn, "QuantumSimulatorElement"), M([D], hn.prototype, "updateUrl", 2), M([Me], hn.prototype, "circuit", 2), M([Me], hn.prototype, "circleNotation", 2), M([dt], hn.prototype, "runCircuitButtons", 2), hn = M([Z], hn);

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
