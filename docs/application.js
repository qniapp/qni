var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// ../../packages/elements/dist/index.js
var Pv = Object.create;
var vo = Object.defineProperty;
var ep = Object.getOwnPropertyDescriptor;
var _v = Object.getOwnPropertyNames;
var Qc = Object.getOwnPropertySymbols;
var zv = Object.getPrototypeOf;
var tp = Object.prototype.hasOwnProperty;
var Rv = Object.prototype.propertyIsEnumerable;
var Jc = /* @__PURE__ */ __name((e, r, t) => r in e ? vo(e, r, { enumerable: true, configurable: true, writable: true, value: t }) : e[r] = t, "Jc");
var rp = /* @__PURE__ */ __name((e, r) => {
  for (var t in r || (r = {}))
    tp.call(r, t) && Jc(e, t, r[t]);
  if (Qc)
    for (var t of Qc(r))
      Rv.call(r, t) && Jc(e, t, r[t]);
  return e;
}, "rp");
var c = /* @__PURE__ */ __name((e, r) => vo(e, "name", { value: r, configurable: true }), "c");
var Ct = /* @__PURE__ */ __name((e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), "Ct");
var Dv = /* @__PURE__ */ __name((e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of _v(r))
      !tp.call(e, a) && a !== t && vo(e, a, { get: () => r[a], enumerable: !(n = ep(r, a)) || n.enumerable });
  return e;
}, "Dv");
var zt = /* @__PURE__ */ __name((e, r, t) => (t = e != null ? Pv(zv(e)) : {}, Dv(r || !e || !e.__esModule ? vo(t, "default", { value: e, enumerable: true }) : t, e)), "zt");
var M = /* @__PURE__ */ __name((e, r, t, n) => {
  for (var a = n > 1 ? void 0 : n ? ep(r, t) : r, s = e.length - 1, p; s >= 0; s--)
    (p = e[s]) && (a = (n ? p(r, t, a) : p(a)) || a);
  return n && a && vo(r, t, a), a;
}, "M");
var np = /* @__PURE__ */ __name((e, r, t) => {
  if (!r.has(e))
    throw TypeError("Cannot " + t);
}, "np");
var La = /* @__PURE__ */ __name((e, r, t) => (np(e, r, "read from private field"), t ? t.call(e) : r.get(e)), "La");
var Ga = /* @__PURE__ */ __name((e, r, t) => {
  if (r.has(e))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(e) : r.set(e, t);
}, "Ga");
var ja = /* @__PURE__ */ __name((e, r, t, n) => (np(e, r, "write to private field"), n ? n.call(e, t) : r.set(e, t), t), "ja");
var op = Ct((zl, ip) => {
  (function(e) {
    "use strict";
    var r = 2e3, t = { s: 1, n: 0, d: 1 };
    function n(x, S) {
      if (isNaN(x = parseInt(x, 10)))
        throw y.InvalidParameter;
      return x * S;
    }
    __name(n, "n");
    c(n, "assign");
    function a(x, S) {
      if (S === 0)
        throw y.DivisionByZero;
      var C = Object.create(y.prototype);
      C.s = x < 0 ? -1 : 1, x = x < 0 ? -x : x;
      var T = h(x, S);
      return C.n = x / T, C.d = S / T, C;
    }
    __name(a, "a");
    c(a, "newFraction");
    function s(x) {
      for (var S = {}, C = x, T = 2, _ = 4; _ <= C; ) {
        for (; C % T === 0; )
          C /= T, S[T] = (S[T] || 0) + 1;
        _ += 1 + 2 * T++;
      }
      return C !== x ? C > 1 && (S[C] = (S[C] || 0) + 1) : S[x] = (S[x] || 0) + 1, S;
    }
    __name(s, "s");
    c(s, "factorize");
    var p = c(function(x, S) {
      var C = 0, T = 1, _ = 1, N = 0, j = 0, $ = 0, A = 1, ee = 1, z = 0, B = 1, J = 1, te = 1, le = 1e7, Y;
      if (x != null)
        if (S !== void 0) {
          if (C = x, T = S, _ = C * T, C % 1 !== 0 || T % 1 !== 0)
            throw y.NonIntegerParameter;
        } else
          switch (typeof x) {
            case "object": {
              if ("d" in x && "n" in x)
                C = x.n, T = x.d, "s" in x && (C *= x.s);
              else if (0 in x)
                C = x[0], 1 in x && (T = x[1]);
              else
                throw y.InvalidParameter;
              _ = C * T;
              break;
            }
            case "number": {
              if (x < 0 && (_ = x, x = -x), x % 1 === 0)
                C = x;
              else if (x > 0) {
                for (x >= 1 && (ee = Math.pow(10, Math.floor(1 + Math.log(x) / Math.LN10)), x /= ee); B <= le && te <= le; )
                  if (Y = (z + J) / (B + te), x === Y) {
                    B + te <= le ? (C = z + J, T = B + te) : te > B ? (C = J, T = te) : (C = z, T = B);
                    break;
                  } else
                    x > Y ? (z += J, B += te) : (J += z, te += B), B > le ? (C = J, T = te) : (C = z, T = B);
                C *= ee;
              } else
                (isNaN(x) || isNaN(S)) && (T = C = NaN);
              break;
            }
            case "string": {
              if (B = x.match(/\d+|./g), B === null)
                throw y.InvalidParameter;
              if (B[z] === "-" ? (_ = -1, z++) : B[z] === "+" && z++, B.length === z + 1 ? j = n(B[z++], _) : B[z + 1] === "." || B[z] === "." ? (B[z] !== "." && (N = n(B[z++], _)), z++, (z + 1 === B.length || B[z + 1] === "(" && B[z + 3] === ")" || B[z + 1] === "'" && B[z + 3] === "'") && (j = n(B[z], _), A = Math.pow(10, B[z].length), z++), (B[z] === "(" && B[z + 2] === ")" || B[z] === "'" && B[z + 2] === "'") && ($ = n(B[z + 1], _), ee = Math.pow(10, B[z + 1].length) - 1, z += 3)) : B[z + 1] === "/" || B[z + 1] === ":" ? (j = n(B[z], _), A = n(B[z + 2], 1), z += 3) : B[z + 3] === "/" && B[z + 1] === " " && (N = n(B[z], _), j = n(B[z + 2], _), A = n(B[z + 4], 1), z += 5), B.length <= z) {
                T = A * ee, _ = C = $ + T * N + ee * j;
                break;
              }
            }
            default:
              throw y.InvalidParameter;
          }
      if (T === 0)
        throw y.DivisionByZero;
      t.s = _ < 0 ? -1 : 1, t.n = Math.abs(C), t.d = Math.abs(T);
    }, "parse");
    function v(x, S, C) {
      for (var T = 1; S > 0; x = x * x % C, S >>= 1)
        S & 1 && (T = T * x % C);
      return T;
    }
    __name(v, "v");
    c(v, "modpow");
    function m(x, S) {
      for (; S % 2 === 0; S /= 2)
        ;
      for (; S % 5 === 0; S /= 5)
        ;
      if (S === 1)
        return 0;
      for (var C = 10 % S, T = 1; C !== 1; T++)
        if (C = C * 10 % S, T > r)
          return 0;
      return T;
    }
    __name(m, "m");
    c(m, "cycleLen");
    function d(x, S, C) {
      for (var T = 1, _ = v(10, C, S), N = 0; N < 300; N++) {
        if (T === _)
          return N;
        T = T * 10 % S, _ = _ * 10 % S;
      }
      return 0;
    }
    __name(d, "d");
    c(d, "cycleStart");
    function h(x, S) {
      if (!x)
        return S;
      if (!S)
        return x;
      for (; ; ) {
        if (x %= S, !x)
          return S;
        if (S %= x, !S)
          return x;
      }
    }
    __name(h, "h");
    c(h, "gcd");
    function y(x, S) {
      if (p(x, S), this instanceof y)
        x = h(t.d, t.n), this.s = t.s, this.n = t.n / x, this.d = t.d / x;
      else
        return a(t.s * t.n, t.d);
    }
    __name(y, "y");
    c(y, "Fraction"), y.DivisionByZero = new Error("Division by Zero"), y.InvalidParameter = new Error("Invalid argument"), y.NonIntegerParameter = new Error("Parameters must be integer"), y.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return a(this.n, this.d);
    }, neg: function() {
      return a(-this.s * this.n, this.d);
    }, add: function(x, S) {
      return p(x, S), a(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(x, S) {
      return p(x, S), a(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(x, S) {
      return p(x, S), a(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(x, S) {
      return p(x, S), a(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return a(this.s * this.n, this.d);
    }, mod: function(x, S) {
      if (isNaN(this.n) || isNaN(this.d))
        return new y(NaN);
      if (x === void 0)
        return a(this.s * this.n % this.d, 1);
      if (p(x, S), t.n === 0 && this.d === 0)
        throw y.DivisionByZero;
      return a(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d);
    }, gcd: function(x, S) {
      return p(x, S), a(h(t.n, this.n) * h(t.d, this.d), t.d * this.d);
    }, lcm: function(x, S) {
      return p(x, S), t.n === 0 && this.n === 0 ? a(0, 1) : a(t.n * this.n, h(t.n, this.n) * h(t.d, this.d));
    }, ceil: function(x) {
      return x = Math.pow(10, x || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.ceil(x * this.s * this.n / this.d), x);
    }, floor: function(x) {
      return x = Math.pow(10, x || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.floor(x * this.s * this.n / this.d), x);
    }, round: function(x) {
      return x = Math.pow(10, x || 0), isNaN(this.n) || isNaN(this.d) ? new y(NaN) : a(Math.round(x * this.s * this.n / this.d), x);
    }, inverse: function() {
      return a(this.s * this.d, this.n);
    }, pow: function(x, S) {
      if (p(x, S), t.d === 1)
        return t.s < 0 ? a(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : a(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var C = s(this.n), T = s(this.d), _ = 1, N = 1;
      for (var j in C)
        if (j !== "1") {
          if (j === "0") {
            _ = 0;
            break;
          }
          if (C[j] *= t.n, C[j] % t.d === 0)
            C[j] /= t.d;
          else
            return null;
          _ *= Math.pow(j, C[j]);
        }
      for (var j in T)
        if (j !== "1") {
          if (T[j] *= t.n, T[j] % t.d === 0)
            T[j] /= t.d;
          else
            return null;
          N *= Math.pow(j, T[j]);
        }
      return t.s < 0 ? a(N, _) : a(_, N);
    }, equals: function(x, S) {
      return p(x, S), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(x, S) {
      p(x, S);
      var C = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < C) - (C < 0);
    }, simplify: function(x) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      x = x || 1e-3;
      for (var S = this.abs(), C = S.toContinued(), T = 1; T < C.length; T++) {
        for (var _ = a(C[T - 1], 1), N = T - 2; N >= 0; N--)
          _ = _.inverse().add(C[N]);
        if (_.sub(S).abs().valueOf() < x)
          return _.mul(this.s);
      }
      return this;
    }, divisible: function(x, S) {
      return p(x, S), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(x) {
      var S, C = "", T = this.n, _ = this.d;
      return this.s < 0 && (C += "-"), _ === 1 ? C += T : (x && (S = Math.floor(T / _)) > 0 && (C += S, C += " ", T %= _), C += T, C += "/", C += _), C;
    }, toLatex: function(x) {
      var S, C = "", T = this.n, _ = this.d;
      return this.s < 0 && (C += "-"), _ === 1 ? C += T : (x && (S = Math.floor(T / _)) > 0 && (C += S, T %= _), C += "\\frac{", C += T, C += "}{", C += _, C += "}"), C;
    }, toContinued: function() {
      var x, S = this.n, C = this.d, T = [];
      if (isNaN(S) || isNaN(C))
        return T;
      do
        T.push(Math.floor(S / C)), x = S % C, S = C, C = x;
      while (S !== 1);
      return T;
    }, toString: function(x) {
      var S = this.n, C = this.d;
      if (isNaN(S) || isNaN(C))
        return "NaN";
      x = x || 15;
      var T = m(S, C), _ = d(S, C, T), N = this.s < 0 ? "-" : "";
      if (N += S / C | 0, S %= C, S *= 10, S && (N += "."), T) {
        for (var j = _; j--; )
          N += S / C | 0, S %= C, S *= 10;
        N += "(";
        for (var j = T; j--; )
          N += S / C | 0, S %= C, S *= 10;
        N += ")";
      } else
        for (var j = x; S && j--; )
          N += S / C | 0, S %= C, S *= 10;
      return N;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return y;
    }) : typeof zl == "object" ? (Object.defineProperty(y, "__esModule", { value: true }), y.default = y, y.Fraction = y, ip.exports = y) : e.Fraction = y;
  })(zl);
});
var up = Ct((i0, lp) => {
  "use strict";
  var ap = c((e = 0) => (r) => `\x1B[${38 + e};5;${r}m`, "wrapAnsi256"), sp = c((e = 0) => (r, t, n) => `\x1B[${38 + e};2;${r};${t};${n}m`, "wrapAnsi16m");
  function Nv() {
    let e = /* @__PURE__ */ new Map(), r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    r.color.gray = r.color.blackBright, r.bgColor.bgGray = r.bgColor.bgBlackBright, r.color.grey = r.color.blackBright, r.bgColor.bgGrey = r.bgColor.bgBlackBright;
    for (let [t, n] of Object.entries(r)) {
      for (let [a, s] of Object.entries(n))
        r[a] = { open: `\x1B[${s[0]}m`, close: `\x1B[${s[1]}m` }, n[a] = r[a], e.set(s[0], s[1]);
      Object.defineProperty(r, t, { value: n, enumerable: false });
    }
    return Object.defineProperty(r, "codes", { value: e, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi256 = ap(), r.color.ansi16m = sp(), r.bgColor.ansi256 = ap(10), r.bgColor.ansi16m = sp(10), Object.defineProperties(r, { rgbToAnsi256: { value: (t, n, a) => t === n && n === a ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(a / 255 * 5), enumerable: false }, hexToRgb: { value: (t) => {
      let n = new RegExp("(?<colorString>[a-f\\d]{6}|[a-f\\d]{3})", "i").exec(t.toString(16));
      if (!n)
        return [0, 0, 0];
      let { colorString: a } = n.groups;
      a.length === 3 && (a = a.split("").map((p) => p + p).join(""));
      let s = Number.parseInt(a, 16);
      return [s >> 16 & 255, s >> 8 & 255, s & 255];
    }, enumerable: false }, hexToAnsi256: { value: (t) => r.rgbToAnsi256(...r.hexToRgb(t)), enumerable: false } }), r;
  }
  __name(Nv, "Nv");
  c(Nv, "assembleStyles");
  Object.defineProperty(lp, "exports", { enumerable: true, get: Nv });
});
var go = Ct((Si) => {
  "use strict";
  Object.defineProperty(Si, "__esModule", { value: true });
  Si.printIteratorEntries = Lv;
  Si.printIteratorValues = Gv;
  Si.printListItems = jv;
  Si.printObjectProperties = Bv;
  var kv = c((e, r) => {
    let t = Object.keys(e), n = r !== null ? t.sort(r) : t;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach((a) => {
      Object.getOwnPropertyDescriptor(e, a).enumerable && n.push(a);
    }), n;
  }, "getKeysOfEnumerableProperties");
  function Lv(e, r, t, n, a, s, p = ": ") {
    let v = "", m = 0, d = e.next();
    if (!d.done) {
      v += r.spacingOuter;
      let h = t + r.indent;
      for (; !d.done; ) {
        if (v += h, m++ === r.maxWidth) {
          v += "\u2026";
          break;
        }
        let y = s(d.value[0], r, h, n, a), x = s(d.value[1], r, h, n, a);
        v += y + p + x, d = e.next(), d.done ? r.min || (v += ",") : v += `,${r.spacingInner}`;
      }
      v += r.spacingOuter + t;
    }
    return v;
  }
  __name(Lv, "Lv");
  c(Lv, "printIteratorEntries");
  function Gv(e, r, t, n, a, s) {
    let p = "", v = 0, m = e.next();
    if (!m.done) {
      p += r.spacingOuter;
      let d = t + r.indent;
      for (; !m.done; ) {
        if (p += d, v++ === r.maxWidth) {
          p += "\u2026";
          break;
        }
        p += s(m.value, r, d, n, a), m = e.next(), m.done ? r.min || (p += ",") : p += `,${r.spacingInner}`;
      }
      p += r.spacingOuter + t;
    }
    return p;
  }
  __name(Gv, "Gv");
  c(Gv, "printIteratorValues");
  function jv(e, r, t, n, a, s) {
    let p = "";
    if (e.length) {
      p += r.spacingOuter;
      let v = t + r.indent;
      for (let m = 0; m < e.length; m++) {
        if (p += v, m === r.maxWidth) {
          p += "\u2026";
          break;
        }
        m in e && (p += s(e[m], r, v, n, a)), m < e.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + t;
    }
    return p;
  }
  __name(jv, "jv");
  c(jv, "printListItems");
  function Bv(e, r, t, n, a, s) {
    let p = "", v = kv(e, r.compareKeys);
    if (v.length) {
      p += r.spacingOuter;
      let m = t + r.indent;
      for (let d = 0; d < v.length; d++) {
        let h = v[d], y = s(h, r, m, n, a), x = s(e[h], r, m, n, a);
        p += `${m + y}: ${x}`, d < v.length - 1 ? p += `,${r.spacingInner}` : r.min || (p += ",");
      }
      p += r.spacingOuter + t;
    }
    return p;
  }
  __name(Bv, "Bv");
  c(Bv, "printObjectProperties");
});
var fp = Ct((bn) => {
  "use strict";
  Object.defineProperty(bn, "__esModule", { value: true });
  bn.test = bn.serialize = bn.default = void 0;
  var cp = go(), Rl = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, Hv = typeof Rl == "function" && Rl.for ? Rl.for("jest.asymmetricMatcher") : 1267621, Ba = " ", pp = c((e, r, t, n, a, s) => {
    let p = e.toString();
    if (p === "ArrayContaining" || p === "ArrayNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Ba}[${(0, cp.printListItems)(e.sample, r, t, n, a, s)}]`;
    if (p === "ObjectContaining" || p === "ObjectNotContaining")
      return ++n > r.maxDepth ? `[${p}]` : `${p + Ba}{${(0, cp.printObjectProperties)(e.sample, r, t, n, a, s)}}`;
    if (p === "StringMatching" || p === "StringNotMatching" || p === "StringContaining" || p === "StringNotContaining")
      return p + Ba + s(e.sample, r, t, n, a);
    if (typeof e.toAsymmetricMatcher != "function")
      throw new Error(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);
    return e.toAsymmetricMatcher();
  }, "serialize");
  bn.serialize = pp;
  var dp = c((e) => e && e.$$typeof === Hv, "test");
  bn.test = dp;
  var $v = { serialize: pp, test: dp }, qv = $v;
  bn.default = qv;
});
var bp = Ct((yn) => {
  "use strict";
  Object.defineProperty(yn, "__esModule", { value: true });
  yn.test = yn.serialize = yn.default = void 0;
  var hp = go(), Fv = " ", mp = ["DOMStringMap", "NamedNodeMap"], Uv = /^(HTML\w*Collection|NodeList)$/, Wv = c((e) => mp.indexOf(e) !== -1 || Uv.test(e), "testName"), vp = c((e) => e && e.constructor && !!e.constructor.name && Wv(e.constructor.name), "test");
  yn.test = vp;
  var Vv = c((e) => e.constructor.name === "NamedNodeMap", "isNamedNodeMap"), gp = c((e, r, t, n, a, s) => {
    let p = e.constructor.name;
    return ++n > r.maxDepth ? `[${p}]` : (r.min ? "" : p + Fv) + (mp.indexOf(p) !== -1 ? `{${(0, hp.printObjectProperties)(Vv(e) ? Array.from(e).reduce((v, m) => (v[m.name] = m.value, v), {}) : rp({}, e), r, t, n, a, s)}}` : `[${(0, hp.printListItems)(Array.from(e), r, t, n, a, s)}]`);
  }, "serialize");
  yn.serialize = gp;
  var Yv = { serialize: gp, test: vp }, Xv = Yv;
  yn.default = Xv;
});
var yp = Ct((Dl) => {
  "use strict";
  Object.defineProperty(Dl, "__esModule", { value: true });
  Dl.default = Zv;
  function Zv(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  __name(Zv, "Zv");
  c(Zv, "escapeHTML");
});
var Ha = Ct((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: true });
  Ut.printText = Ut.printProps = Ut.printElementAsLeaf = Ut.printElement = Ut.printComment = Ut.printChildren = void 0;
  var xp = Kv(yp());
  function Kv(e) {
    return e && e.__esModule ? e : { default: e };
  }
  __name(Kv, "Kv");
  c(Kv, "_interopRequireDefault");
  var Qv = c((e, r, t, n, a, s, p) => {
    let v = n + t.indent, m = t.colors;
    return e.map((d) => {
      let h = r[d], y = p(h, t, v, a, s);
      return typeof h != "string" && (y.indexOf(`
`) !== -1 && (y = t.spacingOuter + v + y + t.spacingOuter + n), y = `{${y}}`), `${t.spacingInner + n + m.prop.open + d + m.prop.close}=${m.value.open}${y}${m.value.close}`;
    }).join("");
  }, "printProps");
  Ut.printProps = Qv;
  var Jv = c((e, r, t, n, a, s) => e.map((p) => r.spacingOuter + t + (typeof p == "string" ? wp(p, r) : s(p, r, t, n, a))).join(""), "printChildren");
  Ut.printChildren = Jv;
  var wp = c((e, r) => {
    let t = r.colors.content;
    return t.open + (0, xp.default)(e) + t.close;
  }, "printText");
  Ut.printText = wp;
  var eg = c((e, r) => {
    let t = r.colors.comment;
    return `${t.open}<!--${(0, xp.default)(e)}-->${t.close}`;
  }, "printComment");
  Ut.printComment = eg;
  var tg = c((e, r, t, n, a) => {
    let s = n.colors.tag;
    return `${s.open}<${e}${r && s.close + r + n.spacingOuter + a + s.open}${t ? `>${s.close}${t}${n.spacingOuter}${a}${s.open}</${e}` : `${r && !n.min ? "" : " "}/`}>${s.close}`;
  }, "printElement");
  Ut.printElement = tg;
  var rg = c((e, r) => {
    let t = r.colors.tag;
    return `${t.open}<${e}${t.close} \u2026${t.open} />${t.close}`;
  }, "printElementAsLeaf");
  Ut.printElementAsLeaf = rg;
});
var Mp = Ct((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: true });
  xn.test = xn.serialize = xn.default = void 0;
  var Ci = Ha(), ng = 1, Ep = 3, Sp = 8, Cp = 11, ig = /^((HTML|SVG)\w*)?Element$/, og = c((e) => {
    try {
      return typeof e.hasAttribute == "function" && e.hasAttribute("is");
    } catch (r) {
      return false;
    }
  }, "testHasAttribute"), ag = c((e) => {
    let r = e.constructor.name, { nodeType: t, tagName: n } = e, a = typeof n == "string" && n.includes("-") || og(e);
    return t === ng && (ig.test(r) || a) || t === Ep && r === "Text" || t === Sp && r === "Comment" || t === Cp && r === "DocumentFragment";
  }, "testNode"), Tp = c((e) => {
    var r;
    return ((r = e == null ? void 0 : e.constructor) == null ? void 0 : r.name) && ag(e);
  }, "test");
  xn.test = Tp;
  function sg(e) {
    return e.nodeType === Ep;
  }
  __name(sg, "sg");
  c(sg, "nodeIsText");
  function lg(e) {
    return e.nodeType === Sp;
  }
  __name(lg, "lg");
  c(lg, "nodeIsComment");
  function Nl(e) {
    return e.nodeType === Cp;
  }
  __name(Nl, "Nl");
  c(Nl, "nodeIsFragment");
  var Op = c((e, r, t, n, a, s) => {
    if (sg(e))
      return (0, Ci.printText)(e.data, r);
    if (lg(e))
      return (0, Ci.printComment)(e.data, r);
    let p = Nl(e) ? "DocumentFragment" : e.tagName.toLowerCase();
    return ++n > r.maxDepth ? (0, Ci.printElementAsLeaf)(p, r) : (0, Ci.printElement)(p, (0, Ci.printProps)(Nl(e) ? [] : Array.from(e.attributes).map((v) => v.name).sort(), Nl(e) ? {} : Array.from(e.attributes).reduce((v, m) => (v[m.name] = m.value, v), {}), r, t + r.indent, n, a, s), (0, Ci.printChildren)(Array.prototype.slice.call(e.childNodes || e.children), r, t + r.indent, n, a, s), r, t);
  }, "serialize");
  xn.serialize = Op;
  var ug = { serialize: Op, test: Tp }, cg = ug;
  xn.default = cg;
});
var zp = Ct((wn) => {
  "use strict";
  Object.defineProperty(wn, "__esModule", { value: true });
  wn.test = wn.serialize = wn.default = void 0;
  var bo = go(), pg = "@@__IMMUTABLE_ITERABLE__@@", dg = "@@__IMMUTABLE_LIST__@@", fg = "@@__IMMUTABLE_KEYED__@@", hg = "@@__IMMUTABLE_MAP__@@", Ip = "@@__IMMUTABLE_ORDERED__@@", mg = "@@__IMMUTABLE_RECORD__@@", vg = "@@__IMMUTABLE_SEQ__@@", gg = "@@__IMMUTABLE_SET__@@", bg = "@@__IMMUTABLE_STACK__@@", Ti = c((e) => `Immutable.${e}`, "getImmutableName"), $a = c((e) => `[${e}]`, "printAsLeaf"), yo = " ", Ap = "\u2026", yg = c((e, r, t, n, a, s, p) => ++n > r.maxDepth ? $a(Ti(p)) : `${Ti(p) + yo}{${(0, bo.printIteratorEntries)(e.entries(), r, t, n, a, s)}}`, "printImmutableEntries");
  function xg(e) {
    let r = 0;
    return { next() {
      if (r < e._keys.length) {
        let t = e._keys[r++];
        return { done: false, value: [t, e.get(t)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  __name(xg, "xg");
  c(xg, "getRecordEntries");
  var wg = c((e, r, t, n, a, s) => {
    let p = Ti(e._name || "Record");
    return ++n > r.maxDepth ? $a(p) : `${p + yo}{${(0, bo.printIteratorEntries)(xg(e), r, t, n, a, s)}}`;
  }, "printImmutableRecord"), Eg = c((e, r, t, n, a, s) => {
    let p = Ti("Seq");
    return ++n > r.maxDepth ? $a(p) : e[fg] ? `${p + yo}{${e._iter || e._object ? (0, bo.printIteratorEntries)(e.entries(), r, t, n, a, s) : Ap}}` : `${p + yo}[${e._iter || e._array || e._collection || e._iterable ? (0, bo.printIteratorValues)(e.values(), r, t, n, a, s) : Ap}]`;
  }, "printImmutableSeq"), kl = c((e, r, t, n, a, s, p) => ++n > r.maxDepth ? $a(Ti(p)) : `${Ti(p) + yo}[${(0, bo.printIteratorValues)(e.values(), r, t, n, a, s)}]`, "printImmutableValues"), Pp = c((e, r, t, n, a, s) => e[hg] ? yg(e, r, t, n, a, s, e[Ip] ? "OrderedMap" : "Map") : e[dg] ? kl(e, r, t, n, a, s, "List") : e[gg] ? kl(e, r, t, n, a, s, e[Ip] ? "OrderedSet" : "Set") : e[bg] ? kl(e, r, t, n, a, s, "Stack") : e[vg] ? Eg(e, r, t, n, a, s) : wg(e, r, t, n, a, s), "serialize");
  wn.serialize = Pp;
  var _p = c((e) => e && (e[pg] === true || e[mg] === true), "test");
  wn.test = _p;
  var Sg = { serialize: Pp, test: _p }, Cg = Sg;
  wn.default = Cg;
});
var Dp = Ct((Ne) => {
  "use strict";
  var Ll = Symbol.for("react.element"), Gl = Symbol.for("react.portal"), qa = Symbol.for("react.fragment"), Fa = Symbol.for("react.strict_mode"), Ua = Symbol.for("react.profiler"), Wa = Symbol.for("react.provider"), Va = Symbol.for("react.context"), Tg = Symbol.for("react.server_context"), Ya = Symbol.for("react.forward_ref"), Xa = Symbol.for("react.suspense"), Za = Symbol.for("react.suspense_list"), Ka = Symbol.for("react.memo"), Qa = Symbol.for("react.lazy"), Og = Symbol.for("react.offscreen"), Rp;
  Rp = Symbol.for("react.module.reference");
  function mr(e) {
    if (typeof e == "object" && e !== null) {
      var r = e.$$typeof;
      switch (r) {
        case Ll:
          switch (e = e.type, e) {
            case qa:
            case Ua:
            case Fa:
            case Xa:
            case Za:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Tg:
                case Va:
                case Ya:
                case Qa:
                case Ka:
                case Wa:
                  return e;
                default:
                  return r;
              }
          }
        case Gl:
          return r;
      }
    }
  }
  __name(mr, "mr");
  c(mr, "v");
  Ne.ContextConsumer = Va;
  Ne.ContextProvider = Wa;
  Ne.Element = Ll;
  Ne.ForwardRef = Ya;
  Ne.Fragment = qa;
  Ne.Lazy = Qa;
  Ne.Memo = Ka;
  Ne.Portal = Gl;
  Ne.Profiler = Ua;
  Ne.StrictMode = Fa;
  Ne.Suspense = Xa;
  Ne.SuspenseList = Za;
  Ne.isAsyncMode = function() {
    return false;
  };
  Ne.isConcurrentMode = function() {
    return false;
  };
  Ne.isContextConsumer = function(e) {
    return mr(e) === Va;
  };
  Ne.isContextProvider = function(e) {
    return mr(e) === Wa;
  };
  Ne.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ll;
  };
  Ne.isForwardRef = function(e) {
    return mr(e) === Ya;
  };
  Ne.isFragment = function(e) {
    return mr(e) === qa;
  };
  Ne.isLazy = function(e) {
    return mr(e) === Qa;
  };
  Ne.isMemo = function(e) {
    return mr(e) === Ka;
  };
  Ne.isPortal = function(e) {
    return mr(e) === Gl;
  };
  Ne.isProfiler = function(e) {
    return mr(e) === Ua;
  };
  Ne.isStrictMode = function(e) {
    return mr(e) === Fa;
  };
  Ne.isSuspense = function(e) {
    return mr(e) === Xa;
  };
  Ne.isSuspenseList = function(e) {
    return mr(e) === Za;
  };
  Ne.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === qa || e === Ua || e === Fa || e === Xa || e === Za || e === Og || typeof e == "object" && e !== null && (e.$$typeof === Qa || e.$$typeof === Ka || e.$$typeof === Wa || e.$$typeof === Va || e.$$typeof === Ya || e.$$typeof === Rp || e.getModuleId !== void 0);
  };
  Ne.typeOf = mr;
});
var kp = Ct((E0, Np) => {
  "use strict";
  Np.exports = Dp();
});
var $p = Ct((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: true });
  En.test = En.serialize = En.default = void 0;
  var Yn = Mg(kp()), Ja = Ha();
  function Gp(e) {
    if (typeof WeakMap != "function")
      return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (Gp = c(function(n) {
      return n ? t : r;
    }, "_getRequireWildcardCache"))(e);
  }
  __name(Gp, "Gp");
  c(Gp, "_getRequireWildcardCache");
  function Mg(e, r) {
    if (!r && e && e.__esModule)
      return e;
    if (e === null || typeof e != "object" && typeof e != "function")
      return { default: e };
    var t = Gp(r);
    if (t && t.has(e))
      return t.get(e);
    var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var s in e)
      if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
        var p = a ? Object.getOwnPropertyDescriptor(e, s) : null;
        p && (p.get || p.set) ? Object.defineProperty(n, s, p) : n[s] = e[s];
      }
    return n.default = e, t && t.set(e, n), n;
  }
  __name(Mg, "Mg");
  c(Mg, "_interopRequireWildcard");
  var jp = c((e, r = []) => (Array.isArray(e) ? e.forEach((t) => {
    jp(t, r);
  }) : e != null && e !== false && r.push(e), r), "getChildren"), Lp = c((e) => {
    let r = e.type;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r.displayName || r.name || "Unknown";
    if (Yn.isFragment(e))
      return "React.Fragment";
    if (Yn.isSuspense(e))
      return "React.Suspense";
    if (typeof r == "object" && r !== null) {
      if (Yn.isContextProvider(e))
        return "Context.Provider";
      if (Yn.isContextConsumer(e))
        return "Context.Consumer";
      if (Yn.isForwardRef(e)) {
        if (r.displayName)
          return r.displayName;
        let t = r.render.displayName || r.render.name || "";
        return t !== "" ? `ForwardRef(${t})` : "ForwardRef";
      }
      if (Yn.isMemo(e)) {
        let t = r.displayName || r.type.displayName || r.type.name || "";
        return t !== "" ? `Memo(${t})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, "getType"), Ig = c((e) => {
    let { props: r } = e;
    return Object.keys(r).filter((t) => t !== "children" && r[t] !== void 0).sort();
  }, "getPropKeys"), Bp = c((e, r, t, n, a, s) => ++n > r.maxDepth ? (0, Ja.printElementAsLeaf)(Lp(e), r) : (0, Ja.printElement)(Lp(e), (0, Ja.printProps)(Ig(e), e.props, r, t + r.indent, n, a, s), (0, Ja.printChildren)(jp(e.props.children), r, t + r.indent, n, a, s), r, t), "serialize");
  En.serialize = Bp;
  var Hp = c((e) => e != null && Yn.isElement(e), "test");
  En.test = Hp;
  var Ag = { serialize: Bp, test: Hp }, Pg = Ag;
  En.default = Pg;
});
var Up = Ct((Sn) => {
  "use strict";
  Object.defineProperty(Sn, "__esModule", { value: true });
  Sn.test = Sn.serialize = Sn.default = void 0;
  var es = Ha(), jl = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, _g = typeof jl == "function" && jl.for ? jl.for("react.test.json") : 245830487, zg = c((e) => {
    let { props: r } = e;
    return r ? Object.keys(r).filter((t) => r[t] !== void 0).sort() : [];
  }, "getPropKeys"), qp = c((e, r, t, n, a, s) => ++n > r.maxDepth ? (0, es.printElementAsLeaf)(e.type, r) : (0, es.printElement)(e.type, e.props ? (0, es.printProps)(zg(e), e.props, r, t + r.indent, n, a, s) : "", e.children ? (0, es.printChildren)(e.children, r, t + r.indent, n, a, s) : "", r, t), "serialize");
  Sn.serialize = qp;
  var Fp = c((e) => e && e.$$typeof === _g, "test");
  Sn.test = Fp;
  var Rg = { serialize: qp, test: Fp }, Dg = Rg;
  Sn.default = Dg;
});
var Nr = Ct((Qr) => {
  "use strict";
  Object.defineProperty(Qr, "__esModule", { value: true });
  Qr.default = Qr.DEFAULT_OPTIONS = void 0;
  Qr.format = ad;
  Qr.plugins = void 0;
  var Ng = Xn(up()), xo = go(), kg = Xn(fp()), Lg = Xn(bp()), Gg = Xn(Mp()), jg = Xn(zp()), Bg = Xn($p()), Hg = Xn(Up());
  function Xn(e) {
    return e && e.__esModule ? e : { default: e };
  }
  __name(Xn, "Xn");
  c(Xn, "_interopRequireDefault");
  var Kp = Object.prototype.toString, $g = Date.prototype.toISOString, qg = Error.prototype.toString, Wp = RegExp.prototype.toString, Bl = c((e) => typeof e.constructor == "function" && e.constructor.name || "Object", "getConstructorName"), Fg = c((e) => typeof window != "undefined" && e === window, "isWindow"), Ug = /^Symbol\((.*)\)(.*)$/, Wg = /\n/gi, wo = /* @__PURE__ */ __name(class extends Error {
    constructor(r, t) {
      super(r), this.stack = t, this.name = this.constructor.name;
    }
  }, "wo");
  c(wo, "PrettyFormatPluginError");
  function Vg(e) {
    return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
  }
  __name(Vg, "Vg");
  c(Vg, "isToStringedArrayType");
  function Yg(e) {
    return Object.is(e, -0) ? "-0" : String(e);
  }
  __name(Yg, "Yg");
  c(Yg, "printNumber");
  function Xg(e) {
    return String(`${e}n`);
  }
  __name(Xg, "Xg");
  c(Xg, "printBigInt");
  function Vp(e, r) {
    return r ? `[Function ${e.name || "anonymous"}]` : "[Function]";
  }
  __name(Vp, "Vp");
  c(Vp, "printFunction");
  function Yp(e) {
    return String(e).replace(Ug, "Symbol($1)");
  }
  __name(Yp, "Yp");
  c(Yp, "printSymbol");
  function Xp(e) {
    return `[${qg.call(e)}]`;
  }
  __name(Xp, "Xp");
  c(Xp, "printError");
  function Qp(e, r, t, n) {
    if (e === true || e === false)
      return `${e}`;
    if (e === void 0)
      return "undefined";
    if (e === null)
      return "null";
    let a = typeof e;
    if (a === "number")
      return Yg(e);
    if (a === "bigint")
      return Xg(e);
    if (a === "string")
      return n ? `"${e.replace(/"|\\/g, "\\$&")}"` : `"${e}"`;
    if (a === "function")
      return Vp(e, r);
    if (a === "symbol")
      return Yp(e);
    let s = Kp.call(e);
    return s === "[object WeakMap]" ? "WeakMap {}" : s === "[object WeakSet]" ? "WeakSet {}" : s === "[object Function]" || s === "[object GeneratorFunction]" ? Vp(e, r) : s === "[object Symbol]" ? Yp(e) : s === "[object Date]" ? isNaN(+e) ? "Date { NaN }" : $g.call(e) : s === "[object Error]" ? Xp(e) : s === "[object RegExp]" ? t ? Wp.call(e).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : Wp.call(e) : e instanceof Error ? Xp(e) : null;
  }
  __name(Qp, "Qp");
  c(Qp, "printBasicValue");
  function Jp(e, r, t, n, a, s) {
    if (a.indexOf(e) !== -1)
      return "[Circular]";
    a = a.slice(), a.push(e);
    let p = ++n > r.maxDepth, v = r.min;
    if (r.callToJSON && !p && e.toJSON && typeof e.toJSON == "function" && !s)
      return Cn(e.toJSON(), r, t, n, a, true);
    let m = Kp.call(e);
    return m === "[object Arguments]" ? p ? "[Arguments]" : `${v ? "" : "Arguments "}[${(0, xo.printListItems)(e, r, t, n, a, Cn)}]` : Vg(m) ? p ? `[${e.constructor.name}]` : `${v || !r.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${(0, xo.printListItems)(e, r, t, n, a, Cn)}]` : m === "[object Map]" ? p ? "[Map]" : `Map {${(0, xo.printIteratorEntries)(e.entries(), r, t, n, a, Cn, " => ")}}` : m === "[object Set]" ? p ? "[Set]" : `Set {${(0, xo.printIteratorValues)(e.values(), r, t, n, a, Cn)}}` : p || Fg(e) ? `[${Bl(e)}]` : `${v || !r.printBasicPrototype && Bl(e) === "Object" ? "" : `${Bl(e)} `}{${(0, xo.printObjectProperties)(e, r, t, n, a, Cn)}}`;
  }
  __name(Jp, "Jp");
  c(Jp, "printComplexValue");
  function Zg(e) {
    return e.serialize != null;
  }
  __name(Zg, "Zg");
  c(Zg, "isNewPlugin");
  function ed(e, r, t, n, a, s) {
    let p;
    try {
      p = Zg(e) ? e.serialize(r, t, n, a, s, Cn) : e.print(r, (v) => Cn(v, t, n, a, s), (v) => {
        let m = n + t.indent;
        return m + v.replace(Wg, `
${m}`);
      }, { edgeSpacing: t.spacingOuter, min: t.min, spacing: t.spacingInner }, t.colors);
    } catch (v) {
      throw new wo(v.message, v.stack);
    }
    if (typeof p != "string")
      throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof p}".`);
    return p;
  }
  __name(ed, "ed");
  c(ed, "printPlugin");
  function td(e, r) {
    for (let t = 0; t < e.length; t++)
      try {
        if (e[t].test(r))
          return e[t];
      } catch (n) {
        throw new wo(n.message, n.stack);
      }
    return null;
  }
  __name(td, "td");
  c(td, "findPlugin");
  function Cn(e, r, t, n, a, s) {
    let p = td(r.plugins, e);
    if (p !== null)
      return ed(p, e, r, t, n, a);
    let v = Qp(e, r.printFunctionName, r.escapeRegex, r.escapeString);
    return v !== null ? v : Jp(e, r, t, n, a, s);
  }
  __name(Cn, "Cn");
  c(Cn, "printer");
  var Hl = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, rd = Object.keys(Hl), Kg = c((e) => e, "toOptionsSubtype"), vr = Kg({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: Hl });
  Qr.DEFAULT_OPTIONS = vr;
  function Qg(e) {
    if (Object.keys(e).forEach((r) => {
      if (!Object.prototype.hasOwnProperty.call(vr, r))
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
  __name(Qg, "Qg");
  c(Qg, "validateOptions");
  var Jg = c((e) => rd.reduce((r, t) => {
    let n = e.theme && e.theme[t] !== void 0 ? e.theme[t] : Hl[t], a = n && Ng.default[n];
    if (a && typeof a.close == "string" && typeof a.open == "string")
      r[t] = a;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${t}" whose value "${n}" is undefined in ansi-styles.`);
    return r;
  }, /* @__PURE__ */ Object.create(null)), "getColorsHighlight"), eb = c(() => rd.reduce((e, r) => (e[r] = { close: "", open: "" }, e), /* @__PURE__ */ Object.create(null)), "getColorsEmpty"), nd = c((e) => {
    var r;
    return (r = e == null ? void 0 : e.printFunctionName) != null ? r : vr.printFunctionName;
  }, "getPrintFunctionName"), id = c((e) => {
    var r;
    return (r = e == null ? void 0 : e.escapeRegex) != null ? r : vr.escapeRegex;
  }, "getEscapeRegex"), od = c((e) => {
    var r;
    return (r = e == null ? void 0 : e.escapeString) != null ? r : vr.escapeString;
  }, "getEscapeString"), Zp = c((e) => {
    var r, t, n, a, s, p, v;
    return { callToJSON: (r = e == null ? void 0 : e.callToJSON) != null ? r : vr.callToJSON, colors: e != null && e.highlight ? Jg(e) : eb(), compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : vr.compareKeys, escapeRegex: id(e), escapeString: od(e), indent: e != null && e.min ? "" : tb((t = e == null ? void 0 : e.indent) != null ? t : vr.indent), maxDepth: (n = e == null ? void 0 : e.maxDepth) != null ? n : vr.maxDepth, maxWidth: (a = e == null ? void 0 : e.maxWidth) != null ? a : vr.maxWidth, min: (s = e == null ? void 0 : e.min) != null ? s : vr.min, plugins: (p = e == null ? void 0 : e.plugins) != null ? p : vr.plugins, printBasicPrototype: (v = e == null ? void 0 : e.printBasicPrototype) != null ? v : true, printFunctionName: nd(e), spacingInner: e != null && e.min ? " " : `
`, spacingOuter: e != null && e.min ? "" : `
` };
  }, "getConfig");
  function tb(e) {
    return new Array(e + 1).join(" ");
  }
  __name(tb, "tb");
  c(tb, "createIndent");
  function ad(e, r) {
    if (r && (Qg(r), r.plugins)) {
      let n = td(r.plugins, e);
      if (n !== null)
        return ed(n, e, Zp(r), "", 0, []);
    }
    let t = Qp(e, nd(r), id(r), od(r));
    return t !== null ? t : Jp(e, Zp(r), "", 0, []);
  }
  __name(ad, "ad");
  c(ad, "format");
  var rb = { AsymmetricMatcher: kg.default, DOMCollection: Lg.default, DOMElement: Gg.default, Immutable: jg.default, ReactElement: Bg.default, ReactTestComponent: Hg.default };
  Qr.plugins = rb;
  var nb = ad;
  Qr.default = nb;
});
var Go = Ct((lf, Tu) => {
  (function(e) {
    typeof lf == "object" && typeof Tu != "undefined" ? Tu.exports = e() : typeof define == "function" && define.amd ? define([], e) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = e();
  })(function() {
    var e = {};
    Object.defineProperty(e, "__esModule", { value: true }), e.default = void 0, e.default = function(i) {
      return !(!i || !i.Window) && i instanceof i.Window;
    };
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.getWindow = function(i) {
      return (0, e.default)(i) ? i : (i.ownerDocument || i).defaultView || n.window;
    }, r.init = a, r.window = r.realWindow = void 0;
    var t = void 0;
    r.realWindow = t;
    var n = void 0;
    function a(i) {
      r.realWindow = t = i;
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
      var o = r.getWindow(i) || r.window;
      return /object|function/.test(typeof Element == "undefined" ? "undefined" : p(Element)) ? i instanceof Element || i instanceof o.Element : i.nodeType === 1 && typeof i.nodeName == "string";
    }, plainObject: function(i) {
      return v(i) && !!i.constructor && /function Object\b/.test(i.constructor.toString());
    }, array: function(i) {
      return v(i) && i.length !== void 0 && m(i.splice);
    } };
    s.default = d;
    var h = {};
    function y(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.prepared.axis;
        l === "x" ? (o.coords.cur.page.y = o.coords.start.page.y, o.coords.cur.client.y = o.coords.start.client.y, o.coords.velocity.client.y = 0, o.coords.velocity.page.y = 0) : l === "y" && (o.coords.cur.page.x = o.coords.start.page.x, o.coords.cur.client.x = o.coords.start.client.x, o.coords.velocity.client.x = 0, o.coords.velocity.page.x = 0);
      }
    }
    __name(y, "y");
    c(y, "f");
    function x(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "drag") {
        var u = l.prepared.axis;
        if (u === "x" || u === "y") {
          var f = u === "x" ? "y" : "x";
          o.page[f] = l.coords.start.page[f], o.client[f] = l.coords.start.client[f], o.delta[f] = 0;
        }
      }
    }
    __name(x, "x");
    c(x, "d"), Object.defineProperty(h, "__esModule", { value: true }), h.default = void 0;
    var S = { id: "actions/drag", install: function(i) {
      var o = i.actions, l = i.Interactable, u = i.defaults;
      l.prototype.draggable = S.draggable, o.map.drag = S, o.methodDict.drag = "draggable", u.actions.drag = S.defaults;
    }, listeners: { "interactions:before-action-move": y, "interactions:action-resume": y, "interactions:action-move": x, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, u = i.buttons, f = l.options.drag;
      if (f && f.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || u & l.options.drag.mouseButtons))
        return i.action = { name: "drag", axis: f.lockAxis === "start" ? f.startAxis : f.lockAxis }, false;
    } }, draggable: function(i) {
      return s.default.object(i) ? (this.options.drag.enabled = i.enabled !== false, this.setPerAction("drag", i), this.setOnEvents("drag", i), /^(xy|x|y|start)$/.test(i.lockAxis) && (this.options.drag.lockAxis = i.lockAxis), /^(xy|x|y)$/.test(i.startAxis) && (this.options.drag.startAxis = i.startAxis), this) : s.default.bool(i) ? (this.options.drag.enabled = i, this) : this.options.drag;
    }, beforeMove: y, move: x, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, C = S;
    h.default = C;
    var T = {};
    Object.defineProperty(T, "__esModule", { value: true }), T.default = void 0;
    var _ = { init: function(i) {
      var o = i;
      _.document = o.document, _.DocumentFragment = o.DocumentFragment || N, _.SVGElement = o.SVGElement || N, _.SVGSVGElement = o.SVGSVGElement || N, _.SVGElementInstance = o.SVGElementInstance || N, _.Element = o.Element || N, _.HTMLElement = o.HTMLElement || _.Element, _.Event = o.Event, _.Touch = o.Touch || N, _.PointerEvent = o.PointerEvent || o.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function N() {
    }
    __name(N, "N");
    c(N, "y");
    var j = _;
    T.default = j;
    var $ = {};
    Object.defineProperty($, "__esModule", { value: true }), $.default = void 0;
    var A = { init: function(i) {
      var o = T.default.Element, l = i.navigator || {};
      A.supportsTouch = "ontouchstart" in i || s.default.func(i.DocumentTouch) && T.default.document instanceof i.DocumentTouch, A.supportsPointerEvent = l.pointerEnabled !== false && !!T.default.PointerEvent, A.isIOS = /iP(hone|od|ad)/.test(l.platform), A.isIOS7 = /iP(hone|od|ad)/.test(l.platform) && /OS 7[^\d]/.test(l.appVersion), A.isIe9 = /MSIE 9/.test(l.userAgent), A.isOperaMobile = l.appName === "Opera" && A.supportsTouch && /Presto/.test(l.userAgent), A.prefixedMatchesSelector = "matches" in o.prototype ? "matches" : "webkitMatchesSelector" in o.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o.prototype ? "oMatchesSelector" : "msMatchesSelector", A.pEventTypes = A.supportsPointerEvent ? T.default.PointerEvent === i.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, A.wheelEvent = T.default.document && "onmousewheel" in T.default.document ? "mousewheel" : "wheel";
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
        var l = Y(r.getWindow(i));
        o.left += l.x, o.right += l.x, o.top += l.y, o.bottom += l.y;
      }
      return o;
    }, z.getPath = function(i) {
      for (var o = []; i; )
        o.push(i), i = B(i);
      return o;
    }, z.getScrollXY = Y, z.indexOfDeepestElement = function(i) {
      for (var o, l = [], u = 0; u < i.length; u++) {
        var f = i[u], g = i[o];
        if (f && u !== o)
          if (g) {
            var E = te(f), b = te(g);
            if (E !== f.ownerDocument)
              if (b !== f.ownerDocument)
                if (E !== b) {
                  l = l.length ? l : le(g);
                  var w = void 0;
                  if (g instanceof T.default.HTMLElement && f instanceof T.default.SVGElement && !(f instanceof T.default.SVGSVGElement)) {
                    if (f === b)
                      continue;
                    w = f.ownerSVGElement;
                  } else
                    w = f;
                  for (var O = le(w, g.ownerDocument), I = 0; O[I] && O[I] === l[I]; )
                    I++;
                  var P = [O[I - 1], O[I], l[I]];
                  if (P[0])
                    for (var k = P[0].lastChild; k; ) {
                      if (k === P[1]) {
                        o = u, l = O;
                        break;
                      }
                      if (k === P[2])
                        break;
                      k = k.previousSibling;
                    }
                } else
                  G = f, R = g, (parseInt(r.getWindow(G).getComputedStyle(G).zIndex, 10) || 0) >= (parseInt(r.getWindow(R).getComputedStyle(R).zIndex, 10) || 0) && (o = u);
              else
                o = u;
          } else
            o = u;
      }
      var G, R;
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
      return !!s.default.string(i) && (T.default.document.querySelector(i), true);
    };
    var te = c(function(i) {
      return i.parentNode || i.host;
    }, "E");
    function le(i, o) {
      for (var l, u = [], f = i; (l = te(f)) && f !== o && l !== f.ownerDocument; )
        u.unshift(f), f = l;
      return u;
    }
    __name(le, "le");
    c(le, "S");
    function Y(i) {
      return { x: (i = i || r.window).scrollX || i.document.documentElement.scrollLeft, y: i.scrollY || i.document.documentElement.scrollTop };
    }
    __name(Y, "Y");
    c(Y, "T");
    function ie(i) {
      var o = i instanceof T.default.SVGElement ? i.getBoundingClientRect() : i.getClientRects()[0];
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
    function Ue(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Ue, "Ue");
    c(Ue, "I");
    function qe(i, o, l) {
      return i === "parent" ? (0, z.parentNode)(l) : i === "self" ? o.getRect(l) : (0, z.closest)(l, i);
    }
    __name(qe, "qe");
    c(qe, "D"), Object.defineProperty(ue, "__esModule", { value: true }), ue.addEdges = function(i, o, l) {
      i.left && (o.left += l.x), i.right && (o.right += l.x), i.top && (o.top += l.y), i.bottom && (o.bottom += l.y), o.width = o.right - o.left, o.height = o.bottom - o.top;
    }, ue.getStringOptionResult = qe, ue.rectToXY = function(i) {
      return i && { x: "x" in i ? i.x : i.left, y: "y" in i ? i.y : i.top };
    }, ue.resolveRectLike = function(i, o, l, u) {
      var f, g = i;
      return s.default.string(g) ? g = qe(g, o, l) : s.default.func(g) && (g = g.apply(void 0, function(E) {
        if (Array.isArray(E))
          return Ue(E);
      }(f = u) || function(E) {
        if (typeof Symbol != "undefined" && E[Symbol.iterator] != null || E["@@iterator"] != null)
          return Array.from(E);
      }(f) || function(E, b) {
        if (E) {
          if (typeof E == "string")
            return Ue(E, b);
          var w = Object.prototype.toString.call(E).slice(8, -1);
          return w === "Object" && E.constructor && (w = E.constructor.name), w === "Map" || w === "Set" ? Array.from(E) : w === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w) ? Ue(E, b) : void 0;
        }
      }(f) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), s.default.element(g) && (g = (0, z.getElementRect)(g)), g;
    }, ue.tlbrToXywh = function(i) {
      return !i || "x" in i && "y" in i || ((i = (0, W.default)({}, i)).x = i.left || 0, i.y = i.top || 0, i.width = i.width || (i.right || 0) - i.x, i.height = i.height || (i.bottom || 0) - i.y), i;
    }, ue.xywhToTlbr = function(i) {
      return !i || "left" in i && "top" in i || ((i = (0, W.default)({}, i)).left = i.x || 0, i.top = i.y || 0, i.right = i.right || i.left + i.width, i.bottom = i.bottom || i.top + i.height), i;
    };
    var De = {};
    Object.defineProperty(De, "__esModule", { value: true }), De.default = function(i, o, l) {
      var u = i.options[l], f = u && u.origin || i.options.origin, g = (0, ue.resolveRectLike)(f, i, o, [i && o]);
      return (0, ue.rectToXY)(g) || { x: 0, y: 0 };
    };
    var je = {};
    function it(i) {
      return i.trim().split(/ +/);
    }
    __name(it, "it");
    c(it, "C"), Object.defineProperty(je, "__esModule", { value: true }), je.default = c(/* @__PURE__ */ __name(function i(o, l, u) {
      if (u = u || {}, s.default.string(o) && o.search(" ") !== -1 && (o = it(o)), s.default.array(o))
        return o.reduce(function(w, O) {
          return (0, W.default)(w, i(O, l, u));
        }, u);
      if (s.default.object(o) && (l = o, o = ""), s.default.func(l))
        u[o] = u[o] || [], u[o].push(l);
      else if (s.default.array(l))
        for (var f = 0; f < l.length; f++) {
          var g;
          g = l[f], i(o, g, u);
        }
      else if (s.default.object(l))
        for (var E in l) {
          var b = it(E).map(function(w) {
            return "".concat(o).concat(w);
          });
          i(b, l[E], u);
        }
      return u;
    }, "i"), "t");
    var Ze = {};
    Object.defineProperty(Ze, "__esModule", { value: true }), Ze.default = void 0, Ze.default = function(i, o) {
      return Math.sqrt(i * i + o * o);
    };
    var Ve = {};
    Object.defineProperty(Ve, "__esModule", { value: true }), Ve.default = function(i, o) {
      i.__set || (i.__set = {});
      var l = c(function(f) {
        typeof i[f] != "function" && f !== "__set" && Object.defineProperty(i, f, { get: function() {
          return f in i.__set ? i.__set[f] : i.__set[f] = o[f];
        }, set: function(g) {
          i.__set[f] = g;
        }, configurable: true });
      }, "n");
      for (var u in o)
        l(u);
      return i;
    };
    var Q = {};
    function ir(i) {
      return i instanceof T.default.Event || i instanceof T.default.Touch;
    }
    __name(ir, "ir");
    c(ir, "B");
    function Ie(i, o, l) {
      return i = i || "page", (l = l || {}).x = o[i + "X"], l.y = o[i + "Y"], l;
    }
    __name(Ie, "Ie");
    c(Ie, "Y");
    function Je(i, o) {
      return o = o || { x: 0, y: 0 }, $.default.isOperaMobile && ir(i) ? (Ie("screen", i, o), o.x += window.scrollX, o.y += window.scrollY) : Ie("page", i, o), o;
    }
    __name(Je, "Je");
    c(Je, "W");
    function cr(i, o) {
      return o = o || {}, $.default.isOperaMobile && ir(i) ? Ie("screen", i, o) : Ie("client", i, o), o;
    }
    __name(cr, "cr");
    c(cr, "L");
    function Cr(i) {
      var o = [];
      return s.default.array(i) ? (o[0] = i[0], o[1] = i[1]) : i.type === "touchend" ? i.touches.length === 1 ? (o[0] = i.touches[0], o[1] = i.changedTouches[0]) : i.touches.length === 0 && (o[0] = i.changedTouches[0], o[1] = i.changedTouches[1]) : (o[0] = i.touches[0], o[1] = i.touches[1]), o;
    }
    __name(Cr, "Cr");
    c(Cr, "U");
    function pr(i) {
      for (var o = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, l = 0; l < i.length; l++) {
        var u = i[l];
        for (var f in o)
          o[f] += u[f];
      }
      for (var g in o)
        o[g] /= i.length;
      return o;
    }
    __name(pr, "pr");
    c(pr, "V"), Object.defineProperty(Q, "__esModule", { value: true }), Q.coordsToEvent = function(i) {
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
    }, Q.copyCoords = function(i, o) {
      i.page = i.page || {}, i.page.x = o.page.x, i.page.y = o.page.y, i.client = i.client || {}, i.client.x = o.client.x, i.client.y = o.client.y, i.timeStamp = o.timeStamp;
    }, Q.getClientXY = cr, Q.getEventTargets = function(i) {
      var o = s.default.func(i.composedPath) ? i.composedPath() : i.path;
      return [z.getActualElement(o ? o[0] : i.target), z.getActualElement(i.currentTarget)];
    }, Q.getPageXY = Je, Q.getPointerId = function(i) {
      return s.default.number(i.pointerId) ? i.pointerId : i.identifier;
    }, Q.getPointerType = function(i) {
      return s.default.string(i.pointerType) ? i.pointerType : s.default.number(i.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][i.pointerType] : /touch/.test(i.type || "") || i instanceof T.default.Touch ? "touch" : "mouse";
    }, Q.getTouchPair = Cr, Q.getXY = Ie, Q.isNativePointer = ir, Q.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, Q.pointerAverage = pr, Object.defineProperty(Q, "pointerExtend", { enumerable: true, get: function() {
      return Ve.default;
    } }), Q.setCoordDeltas = function(i, o, l) {
      i.page.x = l.page.x - o.page.x, i.page.y = l.page.y - o.page.y, i.client.x = l.client.x - o.client.x, i.client.y = l.client.y - o.client.y, i.timeStamp = l.timeStamp - o.timeStamp;
    }, Q.setCoordVelocity = function(i, o) {
      var l = Math.max(o.timeStamp / 1e3, 1e-3);
      i.page.x = o.page.x / l, i.page.y = o.page.y / l, i.client.x = o.client.x / l, i.client.y = o.client.y / l, i.timeStamp = l;
    }, Q.setCoords = function(i, o, l) {
      var u = o.length > 1 ? pr(o) : o[0];
      Je(u, i.page), cr(u, i.client), i.timeStamp = l;
    }, Q.setZeroCoords = function(i) {
      i.page.x = 0, i.page.y = 0, i.client.x = 0, i.client.y = 0;
    }, Q.touchAngle = function(i, o) {
      var l = o + "X", u = o + "Y", f = Cr(i), g = f[1][l] - f[0][l], E = f[1][u] - f[0][u];
      return 180 * Math.atan2(E, g) / Math.PI;
    }, Q.touchBBox = function(i) {
      if (!i.length)
        return null;
      var o = Cr(i), l = Math.min(o[0].pageX, o[1].pageX), u = Math.min(o[0].pageY, o[1].pageY), f = Math.max(o[0].pageX, o[1].pageX), g = Math.max(o[0].pageY, o[1].pageY);
      return { x: l, y: u, left: l, top: u, right: f, bottom: g, width: f - l, height: g - u };
    }, Q.touchDistance = function(i, o) {
      var l = o + "X", u = o + "Y", f = Cr(i), g = f[0][l] - f[1][l], E = f[0][u] - f[1][u];
      return (0, Ze.default)(g, E);
    };
    var or = {};
    function zr(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(zr, "zr");
    c(zr, "q");
    function Ur(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Ur, "Ur");
    c(Ur, "G"), Object.defineProperty(or, "__esModule", { value: true }), or.BaseEvent = void 0;
    var Nn = function() {
      function i(u) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Ur(this, "immediatePropagationStopped", false), Ur(this, "propagationStopped", false), this._interaction = u;
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && zr(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    or.BaseEvent = Nn, Object.defineProperty(Nn.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Me = {};
    Object.defineProperty(Me, "__esModule", { value: true }), Me.remove = Me.merge = Me.from = Me.findIndex = Me.find = Me.contains = void 0, Me.contains = function(i, o) {
      return i.indexOf(o) !== -1;
    }, Me.remove = function(i, o) {
      return i.splice(i.indexOf(o), 1);
    };
    var kn = c(function(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        i.push(u);
      }
      return i;
    }, "K");
    Me.merge = kn, Me.from = function(i) {
      return kn([], i);
    };
    var Ln = c(function(i, o) {
      for (var l = 0; l < i.length; l++)
        if (o(i[l], l, i))
          return l;
      return -1;
    }, "Z");
    Me.findIndex = Ln, Me.find = function(i, o) {
      return i[Ln(i, o)];
    };
    var kt = {};
    function Wr(i) {
      return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Wr(i);
    }
    __name(Wr, "Wr");
    c(Wr, "Q");
    function di(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(di, "di");
    c(di, "tt");
    function dn(i, o) {
      return dn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, dn(i, o);
    }
    __name(dn, "dn");
    c(dn, "et");
    function Tr(i, o) {
      if (o && (Wr(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return It(i);
    }
    __name(Tr, "Tr");
    c(Tr, "nt");
    function It(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(It, "It");
    c(It, "rt");
    function Rr(i) {
      return Rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Rr(i);
    }
    __name(Rr, "Rr");
    c(Rr, "ot");
    function qt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(qt, "qt");
    c(qt, "it"), Object.defineProperty(kt, "__esModule", { value: true }), kt.DropEvent = void 0;
    var Gn = function(i) {
      (function(b, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), w && dn(b, w);
      })(E, i);
      var o, l, u, f, g = (u = E, f = function() {
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
        var b, w = Rr(u);
        if (f) {
          var O = Rr(this).constructor;
          b = Reflect.construct(w, arguments, O);
        } else
          b = w.apply(this, arguments);
        return Tr(this, b);
      });
      function E(b, w, O) {
        var I;
        (function(R, q) {
          if (!(R instanceof q))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), qt(It(I = g.call(this, w._interaction)), "dropzone", void 0), qt(It(I), "dragEvent", void 0), qt(It(I), "relatedTarget", void 0), qt(It(I), "draggable", void 0), qt(It(I), "propagationStopped", false), qt(It(I), "immediatePropagationStopped", false);
        var P = O === "dragleave" ? b.prev : b.cur, k = P.element, G = P.dropzone;
        return I.type = O, I.target = k, I.currentTarget = k, I.dropzone = G, I.dragEvent = w, I.relatedTarget = w.target, I.draggable = w.interactable, I.timeStamp = w.timeStamp, I;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (l = [{ key: "reject", value: function() {
        var b = this, w = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && w.cur.dropzone === this.dropzone && w.cur.element === this.target)
          if (w.prev.dropzone = this.dropzone, w.prev.element = this.target, w.rejected = true, w.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var O = w.activeDrops, I = Me.findIndex(O, function(k) {
              var G = k.dropzone, R = k.element;
              return G === b.dropzone && R === b.target;
            });
            w.activeDrops.splice(I, 1);
            var P = new E(w, this.dragEvent, "dropdeactivate");
            P.dropzone = this.dropzone, P.target = this.target, this.dropzone.fire(P);
          } else
            this.dropzone.fire(new E(w, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && di(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    kt.DropEvent = Gn;
    var Vr = {};
    function jn(i, o) {
      for (var l = 0; l < i.slice().length; l++) {
        var u = i.slice()[l], f = u.dropzone, g = u.element;
        o.dropzone = f, o.target = g, f.fire(o), o.propagationStopped = o.immediatePropagationStopped = false;
      }
    }
    __name(jn, "jn");
    c(jn, "lt");
    function fn(i, o) {
      for (var l = function(g, E) {
        for (var b = g.interactables, w = [], O = 0; O < b.list.length; O++) {
          var I = b.list[O];
          if (I.options.drop.enabled) {
            var P = I.options.drop.accept;
            if (!(s.default.element(P) && P !== E || s.default.string(P) && !z.matchesSelector(E, P) || s.default.func(P) && !P({ dropzone: I, draggableElement: E })))
              for (var k = s.default.string(I.target) ? I._context.querySelectorAll(I.target) : s.default.array(I.target) ? I.target : [I.target], G = 0; G < k.length; G++) {
                var R = k[G];
                R !== E && w.push({ dropzone: I, element: R, rect: I.getRect(R) });
              }
          }
        }
        return w;
      }(i, o), u = 0; u < l.length; u++) {
        var f = l[u];
        f.rect = f.dropzone.getRect(f.element);
      }
      return l;
    }
    __name(fn, "fn");
    c(fn, "ut");
    function Bn(i, o, l) {
      for (var u = i.dropState, f = i.interactable, g = i.element, E = [], b = 0; b < u.activeDrops.length; b++) {
        var w = u.activeDrops[b], O = w.dropzone, I = w.element, P = w.rect;
        E.push(O.dropCheck(o, l, f, g, I, P) ? I : null);
      }
      var k = z.indexOfDeepestElement(E);
      return u.activeDrops[k] || null;
    }
    __name(Bn, "Bn");
    c(Bn, "ct");
    function Ki(i, o, l) {
      var u = i.dropState, f = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return l.type === "dragstart" && (f.activate = new kt.DropEvent(u, l, "dropactivate"), f.activate.target = null, f.activate.dropzone = null), l.type === "dragend" && (f.deactivate = new kt.DropEvent(u, l, "dropdeactivate"), f.deactivate.target = null, f.deactivate.dropzone = null), u.rejected || (u.cur.element !== u.prev.element && (u.prev.dropzone && (f.leave = new kt.DropEvent(u, l, "dragleave"), l.dragLeave = f.leave.target = u.prev.element, l.prevDropzone = f.leave.dropzone = u.prev.dropzone), u.cur.dropzone && (f.enter = new kt.DropEvent(u, l, "dragenter"), l.dragEnter = u.cur.element, l.dropzone = u.cur.dropzone)), l.type === "dragend" && u.cur.dropzone && (f.drop = new kt.DropEvent(u, l, "drop"), l.dropzone = u.cur.dropzone, l.relatedTarget = u.cur.element), l.type === "dragmove" && u.cur.dropzone && (f.move = new kt.DropEvent(u, l, "dropmove"), f.move.dragmove = l, l.dropzone = u.cur.dropzone)), f;
    }
    __name(Ki, "Ki");
    c(Ki, "ft");
    function Qi(i, o) {
      var l = i.dropState, u = l.activeDrops, f = l.cur, g = l.prev;
      o.leave && g.dropzone.fire(o.leave), o.enter && f.dropzone.fire(o.enter), o.move && f.dropzone.fire(o.move), o.drop && f.dropzone.fire(o.drop), o.deactivate && jn(u, o.deactivate), l.prev.dropzone = f.dropzone, l.prev.element = f.element;
    }
    __name(Qi, "Qi");
    c(Qi, "dt");
    function oa(i, o) {
      var l = i.interaction, u = i.iEvent, f = i.event;
      if (u.type === "dragmove" || u.type === "dragend") {
        var g = l.dropState;
        o.dynamicDrop && (g.activeDrops = fn(o, l.element));
        var E = u, b = Bn(l, E, f);
        g.rejected = g.rejected && !!b && b.dropzone === g.cur.dropzone && b.element === g.cur.element, g.cur.dropzone = b && b.dropzone, g.cur.element = b && b.element, g.events = Ki(l, 0, E);
      }
    }
    __name(oa, "oa");
    c(oa, "pt"), Object.defineProperty(Vr, "__esModule", { value: true }), Vr.default = void 0;
    var aa = { id: "actions/drop", install: function(i) {
      var o = i.actions, l = i.interactStatic, u = i.Interactable, f = i.defaults;
      i.usePlugin(h.default), u.prototype.dropzone = function(g) {
        return function(E, b) {
          if (s.default.object(b)) {
            if (E.options.drop.enabled = b.enabled !== false, b.listeners) {
              var w = (0, je.default)(b.listeners), O = Object.keys(w).reduce(function(I, P) {
                return I[/^(enter|leave)/.test(P) ? "drag".concat(P) : /^(activate|deactivate|move)/.test(P) ? "drop".concat(P) : P] = w[P], I;
              }, {});
              E.off(E.options.drop.listeners), E.on(O), E.options.drop.listeners = O;
            }
            return s.default.func(b.ondrop) && E.on("drop", b.ondrop), s.default.func(b.ondropactivate) && E.on("dropactivate", b.ondropactivate), s.default.func(b.ondropdeactivate) && E.on("dropdeactivate", b.ondropdeactivate), s.default.func(b.ondragenter) && E.on("dragenter", b.ondragenter), s.default.func(b.ondragleave) && E.on("dragleave", b.ondragleave), s.default.func(b.ondropmove) && E.on("dropmove", b.ondropmove), /^(pointer|center)$/.test(b.overlap) ? E.options.drop.overlap = b.overlap : s.default.number(b.overlap) && (E.options.drop.overlap = Math.max(Math.min(1, b.overlap), 0)), "accept" in b && (E.options.drop.accept = b.accept), "checker" in b && (E.options.drop.checker = b.checker), E;
          }
          return s.default.bool(b) ? (E.options.drop.enabled = b, E) : E.options.drop;
        }(this, g);
      }, u.prototype.dropCheck = function(g, E, b, w, O, I) {
        return function(P, k, G, R, q, X, F) {
          var ne = false;
          if (!(F = F || P.getRect(X)))
            return !!P.options.drop.checker && P.options.drop.checker(k, G, ne, P, X, R, q);
          var oe = P.options.drop.overlap;
          if (oe === "pointer") {
            var fe = (0, De.default)(R, q, "drag"), Pe = Q.getPageXY(k);
            Pe.x += fe.x, Pe.y += fe.y;
            var Fe = Pe.x > F.left && Pe.x < F.right, Se = Pe.y > F.top && Pe.y < F.bottom;
            ne = Fe && Se;
          }
          var He = R.getRect(q);
          if (He && oe === "center") {
            var hr = He.left + He.width / 2, Kr = He.top + He.height / 2;
            ne = hr >= F.left && hr <= F.right && Kr >= F.top && Kr <= F.bottom;
          }
          return He && s.default.number(oe) && (ne = Math.max(0, Math.min(F.right, He.right) - Math.max(F.left, He.left)) * Math.max(0, Math.min(F.bottom, He.bottom) - Math.max(F.top, He.top)) / (He.width * He.height) >= oe), P.options.drop.checker && (ne = P.options.drop.checker(k, G, ne, P, X, R, q)), ne;
        }(this, g, E, b, w, O, I);
      }, l.dynamicDrop = function(g) {
        return s.default.bool(g) ? (i.dynamicDrop = g, l) : i.dynamicDrop;
      }, (0, W.default)(o.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o.methodDict.drop = "dropzone", i.dynamicDrop = false, f.actions.drop = aa.defaults;
    }, listeners: { "interactions:before-action-start": function(i) {
      var o = i.interaction;
      o.prepared.name === "drag" && (o.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(i, o) {
      var l = i.interaction, u = (i.event, i.iEvent);
      if (l.prepared.name === "drag") {
        var f = l.dropState;
        f.activeDrops = null, f.events = null, f.activeDrops = fn(o, l.element), f.events = Ki(l, 0, u), f.events.activate && (jn(f.activeDrops, f.events.activate), o.fire("actions/drop:start", { interaction: l, dragEvent: u }));
      }
    }, "interactions:action-move": oa, "interactions:after-action-move": function(i, o) {
      var l = i.interaction, u = i.iEvent;
      l.prepared.name === "drag" && (Qi(l, l.dropState.events), o.fire("actions/drop:move", { interaction: l, dragEvent: u }), l.dropState.events = {});
    }, "interactions:action-end": function(i, o) {
      if (i.interaction.prepared.name === "drag") {
        var l = i.interaction, u = i.iEvent;
        oa(i, o), Qi(l, l.dropState.events), o.fire("actions/drop:end", { interaction: l, dragEvent: u });
      }
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      if (o.prepared.name === "drag") {
        var l = o.dropState;
        l && (l.activeDrops = null, l.events = null, l.cur.dropzone = null, l.cur.element = null, l.prev.dropzone = null, l.prev.element = null, l.rejected = false);
      }
    } }, getActiveDrops: fn, getDrop: Bn, getDropEvents: Ki, fireDropEvents: Qi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Js = aa;
    Vr.default = Js;
    var L = {};
    function re(i) {
      var o = i.interaction, l = i.iEvent, u = i.phase;
      if (o.prepared.name === "gesture") {
        var f = o.pointers.map(function(O) {
          return O.pointer;
        }), g = u === "start", E = u === "end", b = o.interactable.options.deltaSource;
        if (l.touches = [f[0], f[1]], g)
          l.distance = Q.touchDistance(f, b), l.box = Q.touchBBox(f), l.scale = 1, l.ds = 0, l.angle = Q.touchAngle(f, b), l.da = 0, o.gesture.startDistance = l.distance, o.gesture.startAngle = l.angle;
        else if (E) {
          var w = o.prevEvent;
          l.distance = w.distance, l.box = w.box, l.scale = w.scale, l.ds = 0, l.angle = w.angle, l.da = 0;
        } else
          l.distance = Q.touchDistance(f, b), l.box = Q.touchBBox(f), l.scale = l.distance / o.gesture.startDistance, l.angle = Q.touchAngle(f, b), l.ds = l.scale - o.gesture.scale, l.da = l.angle - o.gesture.angle;
        o.gesture.distance = l.distance, o.gesture.angle = l.angle, s.default.number(l.scale) && l.scale !== 1 / 0 && !isNaN(l.scale) && (o.gesture.scale = l.scale);
      }
    }
    __name(re, "re");
    c(re, "yt"), Object.defineProperty(L, "__esModule", { value: true }), L.default = void 0;
    var ae = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(i) {
      var o = i.actions, l = i.Interactable, u = i.defaults;
      l.prototype.gesturable = function(f) {
        return s.default.object(f) ? (this.options.gesture.enabled = f.enabled !== false, this.setPerAction("gesture", f), this.setOnEvents("gesture", f), this) : s.default.bool(f) ? (this.options.gesture.enabled = f, this) : this.options.gesture;
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
    } }, Ae = ae;
    L.default = Ae;
    var ge = {};
    function wt(i, o, l, u, f, g, E) {
      if (!o)
        return false;
      if (o === true) {
        var b = s.default.number(g.width) ? g.width : g.right - g.left, w = s.default.number(g.height) ? g.height : g.bottom - g.top;
        if (E = Math.min(E, Math.abs((i === "left" || i === "right" ? b : w) / 2)), b < 0 && (i === "left" ? i = "right" : i === "right" && (i = "left")), w < 0 && (i === "top" ? i = "bottom" : i === "bottom" && (i = "top")), i === "left") {
          var O = b >= 0 ? g.left : g.right;
          return l.x < O + E;
        }
        if (i === "top") {
          var I = w >= 0 ? g.top : g.bottom;
          return l.y < I + E;
        }
        if (i === "right")
          return l.x > (b >= 0 ? g.right : g.left) - E;
        if (i === "bottom")
          return l.y > (w >= 0 ? g.bottom : g.top) - E;
      }
      return !!s.default.element(u) && (s.default.element(o) ? o === u : z.matchesUpTo(u, o, f));
    }
    __name(wt, "wt");
    c(wt, "wt");
    function Lt(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.resizeAxes) {
        var u = o;
        l.interactable.options.resize.square ? (l.resizeAxes === "y" ? u.delta.x = u.delta.y : u.delta.y = u.delta.x, u.axes = "xy") : (u.axes = l.resizeAxes, l.resizeAxes === "x" ? u.delta.y = 0 : l.resizeAxes === "y" && (u.delta.x = 0));
      }
    }
    __name(Lt, "Lt");
    c(Lt, "_t"), Object.defineProperty(ge, "__esModule", { value: true }), ge.default = void 0;
    var At = { id: "actions/resize", before: ["actions/drag"], install: function(i) {
      var o = i.actions, l = i.browser, u = i.Interactable, f = i.defaults;
      At.cursors = function(g) {
        return g.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(l), At.defaultMargin = l.supportsTouch || l.supportsPointerEvent ? 20 : 10, u.prototype.resizable = function(g) {
        return function(E, b, w) {
          return s.default.object(b) ? (E.options.resize.enabled = b.enabled !== false, E.setPerAction("resize", b), E.setOnEvents("resize", b), s.default.string(b.axis) && /^x$|^y$|^xy$/.test(b.axis) ? E.options.resize.axis = b.axis : b.axis === null && (E.options.resize.axis = w.defaults.actions.resize.axis), s.default.bool(b.preserveAspectRatio) ? E.options.resize.preserveAspectRatio = b.preserveAspectRatio : s.default.bool(b.square) && (E.options.resize.square = b.square), E) : s.default.bool(b) ? (E.options.resize.enabled = b, E) : E.options.resize;
        }(this, g, i);
      }, o.map.resize = At, o.methodDict.resize = "resizable", f.actions.resize = At.defaults;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(i) {
      (function(o) {
        var l = o.iEvent, u = o.interaction;
        if (u.prepared.name === "resize" && u.prepared.edges) {
          var f = l, g = u.rect;
          u._rects = { start: (0, W.default)({}, g), corrected: (0, W.default)({}, g), previous: (0, W.default)({}, g), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, f.edges = u.prepared.edges, f.rect = u._rects.corrected, f.deltaRect = u._rects.delta;
        }
      })(i), Lt(i);
    }, "interactions:action-move": function(i) {
      (function(o) {
        var l = o.iEvent, u = o.interaction;
        if (u.prepared.name === "resize" && u.prepared.edges) {
          var f = l, g = u.interactable.options.resize.invert, E = g === "reposition" || g === "negate", b = u.rect, w = u._rects, O = w.start, I = w.corrected, P = w.delta, k = w.previous;
          if ((0, W.default)(k, I), E) {
            if ((0, W.default)(I, b), g === "reposition") {
              if (I.top > I.bottom) {
                var G = I.top;
                I.top = I.bottom, I.bottom = G;
              }
              if (I.left > I.right) {
                var R = I.left;
                I.left = I.right, I.right = R;
              }
            }
          } else
            I.top = Math.min(b.top, O.bottom), I.bottom = Math.max(b.bottom, O.top), I.left = Math.min(b.left, O.right), I.right = Math.max(b.right, O.left);
          for (var q in I.width = I.right - I.left, I.height = I.bottom - I.top, I)
            P[q] = I[q] - k[q];
          f.edges = u.prepared.edges, f.rect = I, f.deltaRect = P;
        }
      })(i), Lt(i);
    }, "interactions:action-end": function(i) {
      var o = i.iEvent, l = i.interaction;
      if (l.prepared.name === "resize" && l.prepared.edges) {
        var u = o;
        u.edges = l.prepared.edges, u.rect = l._rects.corrected, u.deltaRect = l._rects.delta;
      }
    }, "auto-start:check": function(i) {
      var o = i.interaction, l = i.interactable, u = i.element, f = i.rect, g = i.buttons;
      if (f) {
        var E = (0, W.default)({}, o.coords.cur.page), b = l.options.resize;
        if (b && b.enabled && (!o.pointerIsDown || !/mouse|pointer/.test(o.pointerType) || g & b.mouseButtons)) {
          if (s.default.object(b.edges)) {
            var w = { left: false, right: false, top: false, bottom: false };
            for (var O in w)
              w[O] = wt(O, b.edges[O], E, o._latestPointer.eventTarget, u, f, b.margin || At.defaultMargin);
            w.left = w.left && !w.right, w.top = w.top && !w.bottom, (w.left || w.right || w.top || w.bottom) && (i.action = { name: "resize", edges: w });
          } else {
            var I = b.axis !== "y" && E.x > f.right - At.defaultMargin, P = b.axis !== "x" && E.y > f.bottom - At.defaultMargin;
            (I || P) && (i.action = { name: "resize", axes: (I ? "x" : "") + (P ? "y" : "") });
          }
          return !i.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(i) {
      var o = i.edges, l = i.axis, u = i.name, f = At.cursors, g = null;
      if (l)
        g = f[u + l];
      else if (o) {
        for (var E = "", b = ["top", "bottom", "left", "right"], w = 0; w < b.length; w++) {
          var O = b[w];
          o[O] && (E += O);
        }
        g = f[E];
      }
      return g;
    }, defaultMargin: null }, sa = At;
    ge.default = sa;
    var dr = {};
    Object.defineProperty(dr, "__esModule", { value: true }), dr.default = void 0;
    var Ji = { id: "actions", install: function(i) {
      i.usePlugin(L.default), i.usePlugin(ge.default), i.usePlugin(h.default), i.usePlugin(Vr.default);
    } };
    dr.default = Ji;
    var Pt = {};
    Object.defineProperty(Pt, "__esModule", { value: true }), Pt.default = void 0;
    var _t, Yr, fi = 0, hi = { request: function(i) {
      return _t(i);
    }, cancel: function(i) {
      return Yr(i);
    }, init: function(i) {
      if (_t = i.requestAnimationFrame, Yr = i.cancelAnimationFrame, !_t)
        for (var o = ["ms", "moz", "webkit", "o"], l = 0; l < o.length; l++) {
          var u = o[l];
          _t = i["".concat(u, "RequestAnimationFrame")], Yr = i["".concat(u, "CancelAnimationFrame")] || i["".concat(u, "CancelRequestAnimationFrame")];
        }
      _t = _t && _t.bind(i), Yr = Yr && Yr.bind(i), _t || (_t = c(function(f) {
        var g = Date.now(), E = Math.max(0, 16 - (g - fi)), b = i.setTimeout(function() {
          f(g + E);
        }, E);
        return fi = g + E, b;
      }, "jt"), Yr = c(function(f) {
        return clearTimeout(f);
      }, "Mt"));
    } };
    Pt.default = hi;
    var hn = {};
    Object.defineProperty(hn, "__esModule", { value: true }), hn.default = void 0, hn.getContainer = la, hn.getScroll = eo, hn.getScrollSize = function(i) {
      return s.default.window(i) && (i = window.document.body), { x: i.scrollWidth, y: i.scrollHeight };
    }, hn.getScrollSizeDelta = function(i, o) {
      var l = i.interaction, u = i.element, f = l && l.interactable.options[l.prepared.name].autoScroll;
      if (!f || !f.enabled)
        return o(), { x: 0, y: 0 };
      var g = la(f.container, l.interactable, u), E = eo(g);
      o();
      var b = eo(g);
      return { x: b.x - E.x, y: b.y - E.y };
    };
    var ce = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(i) {
      ce.isScrolling = true, Pt.default.cancel(ce.i), i.autoScroll = ce, ce.interaction = i, ce.prevTime = ce.now(), ce.i = Pt.default.request(ce.scroll);
    }, stop: function() {
      ce.isScrolling = false, ce.interaction && (ce.interaction.autoScroll = null), Pt.default.cancel(ce.i);
    }, scroll: function() {
      var i = ce.interaction, o = i.interactable, l = i.element, u = i.prepared.name, f = o.options[u].autoScroll, g = la(f.container, o, l), E = ce.now(), b = (E - ce.prevTime) / 1e3, w = f.speed * b;
      if (w >= 1) {
        var O = { x: ce.x * w, y: ce.y * w };
        if (O.x || O.y) {
          var I = eo(g);
          s.default.window(g) ? g.scrollBy(O.x, O.y) : g && (g.scrollLeft += O.x, g.scrollTop += O.y);
          var P = eo(g), k = { x: P.x - I.x, y: P.y - I.y };
          (k.x || k.y) && o.fire({ type: "autoscroll", target: l, interactable: o, delta: k, interaction: i, container: g });
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
          var u, f, g, E, b = o.interactable, w = o.element, O = o.prepared.name, I = b.options[O].autoScroll, P = la(I.container, b, w);
          if (s.default.window(P))
            E = l.clientX < ce.margin, u = l.clientY < ce.margin, f = l.clientX > P.innerWidth - ce.margin, g = l.clientY > P.innerHeight - ce.margin;
          else {
            var k = z.getElementClientRect(P);
            E = l.clientX < k.left + ce.margin, u = l.clientY < k.top + ce.margin, f = l.clientX > k.right - ce.margin, g = l.clientY > k.bottom - ce.margin;
          }
          ce.x = f ? 1 : E ? -1 : 0, ce.y = g ? 1 : u ? -1 : 0, ce.isScrolling || (ce.margin = I.margin, ce.speed = I.speed, ce.start(o));
        }
    } };
    function la(i, o, l) {
      return (s.default.string(i) ? (0, ue.getStringOptionResult)(i, o, l) : i) || (0, r.getWindow)(l);
    }
    __name(la, "la");
    c(la, "zt");
    function eo(i) {
      return s.default.window(i) && (i = window.document.body), { x: i.scrollLeft, y: i.scrollTop };
    }
    __name(eo, "eo");
    c(eo, "Ct");
    var Yh = { id: "auto-scroll", install: function(i) {
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
    } } }, Xh = Yh;
    hn.default = Xh;
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
    var ua = {};
    function Zh(i) {
      return s.default.bool(i) ? (this.options.styleCursor = i, this) : i === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(Zh, "Zh");
    c(Zh, "Yt");
    function Kh(i) {
      return s.default.func(i) ? (this.options.actionChecker = i, this) : i === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(Kh, "Kh");
    c(Kh, "Wt"), Object.defineProperty(ua, "__esModule", { value: true }), ua.default = void 0;
    var Qh = { id: "auto-start/interactableMethods", install: function(i) {
      var o = i.Interactable;
      o.prototype.getAction = function(l, u, f, g) {
        var E = function(b, w, O, I, P) {
          var k = b.getRect(I), G = { action: null, interactable: b, interaction: O, element: I, rect: k, buttons: w.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[w.button] };
          return P.fire("auto-start:check", G), G.action;
        }(this, u, f, g, i);
        return this.options.actionChecker ? this.options.actionChecker(l, u, E, this, g, f) : E;
      }, o.prototype.ignoreFrom = (0, ar.warnOnce)(function(l) {
        return this._backCompatOption("ignoreFrom", l);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o.prototype.allowFrom = (0, ar.warnOnce)(function(l) {
        return this._backCompatOption("allowFrom", l);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o.prototype.actionChecker = Kh, o.prototype.styleCursor = Zh;
    } };
    ua.default = Qh;
    var mi = {};
    function ic(i, o, l, u, f) {
      return o.testIgnoreAllow(o.options[i.name], l, u) && o.options[i.name].enabled && ca(o, l, i, f) ? i : null;
    }
    __name(ic, "ic");
    c(ic, "Vt");
    function Jh(i, o, l, u, f, g, E) {
      for (var b = 0, w = u.length; b < w; b++) {
        var O = u[b], I = f[b], P = O.getAction(o, l, i, I);
        if (P) {
          var k = ic(P, O, I, g, E);
          if (k)
            return { action: k, interactable: O, element: I };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Jh, "Jh");
    c(Jh, "Nt");
    function oc(i, o, l, u, f) {
      var g = [], E = [], b = u;
      function w(I) {
        g.push(I), E.push(b);
      }
      __name(w, "w");
      for (c(w, "u"); s.default.element(b); ) {
        g = [], E = [], f.interactables.forEachMatch(b, w);
        var O = Jh(i, o, l, g, E, u, f);
        if (O.action && !O.interactable.options[O.action.name].manualStart)
          return O;
        b = z.parentNode(b);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(oc, "oc");
    c(oc, "qt");
    function ac(i, o, l) {
      var u = o.action, f = o.interactable, g = o.element;
      u = u || { name: null }, i.interactable = f, i.element = g, (0, ar.copyAction)(i.prepared, u), i.rect = f && u.name ? f.getRect(g) : null, lc(i, l), l.fire("autoStart:prepared", { interaction: i });
    }
    __name(ac, "ac");
    c(ac, "Gt");
    function ca(i, o, l, u) {
      var f = i.options, g = f[l.name].max, E = f[l.name].maxPerElement, b = u.autoStart.maxInteractions, w = 0, O = 0, I = 0;
      if (!(g && E && b))
        return false;
      for (var P = 0; P < u.interactions.list.length; P++) {
        var k = u.interactions.list[P], G = k.prepared.name;
        if (k.interacting() && (++w >= b || k.interactable === i && ((O += G === l.name ? 1 : 0) >= g || k.element === o && (I++, G === l.name && I >= E))))
          return false;
      }
      return b > 0;
    }
    __name(ca, "ca");
    c(ca, "$t");
    function sc(i, o) {
      return s.default.number(i) ? (o.autoStart.maxInteractions = i, this) : o.autoStart.maxInteractions;
    }
    __name(sc, "sc");
    c(sc, "Ht");
    function el(i, o, l) {
      var u = l.autoStart.cursorElement;
      u && u !== i && (u.style.cursor = ""), i.ownerDocument.documentElement.style.cursor = o, i.style.cursor = o, l.autoStart.cursorElement = o ? i : null;
    }
    __name(el, "el");
    c(el, "Kt");
    function lc(i, o) {
      var l = i.interactable, u = i.element, f = i.prepared;
      if (i.pointerType === "mouse" && l && l.options.styleCursor) {
        var g = "";
        if (f.name) {
          var E = l.options[f.name].cursorChecker;
          g = s.default.func(E) ? E(f, l, u, i._interacting) : o.actions.map[f.name].getCursor(f);
        }
        el(i.element, g || "", o);
      } else
        o.autoStart.cursorElement && el(o.autoStart.cursorElement, "", o);
    }
    __name(lc, "lc");
    c(lc, "Zt"), Object.defineProperty(mi, "__esModule", { value: true }), mi.default = void 0;
    var em = { id: "auto-start/base", before: ["actions"], install: function(i) {
      var o = i.interactStatic, l = i.defaults;
      i.usePlugin(ua.default), l.base.actionChecker = null, l.base.styleCursor = true, (0, W.default)(l.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o.maxInteractions = function(u) {
        return sc(u, i);
      }, i.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: ca, cursorElement: null };
    }, listeners: { "interactions:down": function(i, o) {
      var l = i.interaction, u = i.pointer, f = i.event, g = i.eventTarget;
      l.interacting() || ac(l, oc(l, u, f, g, o), o);
    }, "interactions:move": function(i, o) {
      (function(l, u) {
        var f = l.interaction, g = l.pointer, E = l.event, b = l.eventTarget;
        f.pointerType !== "mouse" || f.pointerIsDown || f.interacting() || ac(f, oc(f, g, E, b, u), u);
      })(i, o), function(l, u) {
        var f = l.interaction;
        if (f.pointerIsDown && !f.interacting() && f.pointerWasMoved && f.prepared.name) {
          u.fire("autoStart:before-start", l);
          var g = f.interactable, E = f.prepared.name;
          E && g && (g.options[E].manualStart || !ca(g, f.element, f.prepared, u) ? f.stop() : (f.start(f.prepared, g, f.element), lc(f, u)));
        }
      }(i, o);
    }, "interactions:stop": function(i, o) {
      var l = i.interaction, u = l.interactable;
      u && u.options.styleCursor && el(l.element, "", o);
    } }, maxInteractions: sc, withinInteractionLimit: ca, validateAction: ic }, tm = em;
    mi.default = tm;
    var pa = {};
    Object.defineProperty(pa, "__esModule", { value: true }), pa.default = void 0;
    var rm = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(i, o) {
      var l = i.interaction, u = i.eventTarget, f = i.dx, g = i.dy;
      if (l.prepared.name === "drag") {
        var E = Math.abs(f), b = Math.abs(g), w = l.interactable.options.drag, O = w.startAxis, I = E > b ? "x" : E < b ? "y" : "xy";
        if (l.prepared.axis = w.lockAxis === "start" ? I[0] : w.lockAxis, I !== "xy" && O !== "xy" && O !== I) {
          l.prepared.name = null;
          for (var P = u, k = function(R) {
            if (R !== l.interactable) {
              var q = l.interactable.options.drag;
              if (!q.manualStart && R.testIgnoreAllow(q, P, u)) {
                var X = R.getAction(l.downPointer, l.downEvent, l, P);
                if (X && X.name === "drag" && function(F, ne) {
                  if (!ne)
                    return false;
                  var oe = ne.options.drag.startAxis;
                  return F === "xy" || oe === "xy" || oe === F;
                }(I, R) && mi.default.validateAction(X, R, P, u, o))
                  return R;
              }
            }
          }; s.default.element(P); ) {
            var G = o.interactables.forEachMatch(P, k);
            if (G) {
              l.prepared.name = "drag", l.interactable = G, l.element = P;
              break;
            }
            P = (0, z.parentNode)(P);
          }
        }
      }
    } } };
    pa.default = rm;
    var da = {};
    function tl(i) {
      var o = i.prepared && i.prepared.name;
      if (!o)
        return null;
      var l = i.interactable.options;
      return l[o].hold || l[o].delay;
    }
    __name(tl, "tl");
    c(tl, "re"), Object.defineProperty(da, "__esModule", { value: true }), da.default = void 0;
    var nm = { id: "auto-start/hold", install: function(i) {
      var o = i.defaults;
      i.usePlugin(mi.default), o.perAction.hold = 0, o.perAction.delay = 0;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(i) {
      var o = i.interaction, l = tl(o);
      l > 0 && (o.autoStartHoldTimer = setTimeout(function() {
        o.start(o.prepared, o.interactable, o.element);
      }, l));
    }, "interactions:move": function(i) {
      var o = i.interaction, l = i.duplicate;
      o.autoStartHoldTimer && o.pointerWasMoved && !l && (clearTimeout(o.autoStartHoldTimer), o.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(i) {
      var o = i.interaction;
      tl(o) > 0 && (o.prepared.name = null);
    } }, getHoldDuration: tl }, im = nm;
    da.default = im;
    var fa = {};
    Object.defineProperty(fa, "__esModule", { value: true }), fa.default = void 0;
    var om = { id: "auto-start", install: function(i) {
      i.usePlugin(mi.default), i.usePlugin(da.default), i.usePlugin(pa.default);
    } };
    fa.default = om;
    var vi = {};
    function am(i) {
      return /^(always|never|auto)$/.test(i) ? (this.options.preventDefault = i, this) : s.default.bool(i) ? (this.options.preventDefault = i ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(am, "am");
    c(am, "ue");
    function sm(i) {
      var o = i.interaction, l = i.event;
      o.interactable && o.interactable.checkAndPreventDefault(l);
    }
    __name(sm, "sm");
    c(sm, "ce");
    function uc(i) {
      var o = i.Interactable;
      o.prototype.preventDefault = am, o.prototype.checkAndPreventDefault = function(l) {
        return function(u, f, g) {
          var E = u.options.preventDefault;
          if (E !== "never")
            if (E !== "always") {
              if (f.events.supportsPassive && /^touch(start|move)$/.test(g.type)) {
                var b = (0, r.getWindow)(g.target).document, w = f.getDocOptions(b);
                if (!w || !w.events || w.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(g.type) || s.default.element(g.target) && (0, z.matchesSelector)(g.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || g.preventDefault();
            } else
              g.preventDefault();
        }(this, i, l);
      }, i.interactions.docEvents.push({ type: "dragstart", listener: function(l) {
        for (var u = 0; u < i.interactions.list.length; u++) {
          var f = i.interactions.list[u];
          if (f.element && (f.element === l.target || (0, z.nodeContains)(f.element, l.target)))
            return void f.interactable.checkAndPreventDefault(l);
        }
      } });
    }
    __name(uc, "uc");
    c(uc, "fe"), Object.defineProperty(vi, "__esModule", { value: true }), vi.default = void 0, vi.install = uc;
    var lm = { id: "core/interactablePreventDefault", install: uc, listeners: ["down", "move", "up", "cancel"].reduce(function(i, o) {
      return i["interactions:".concat(o)] = sm, i;
    }, {}) };
    vi.default = lm;
    var rl = {};
    Object.defineProperty(rl, "__esModule", { value: true }), rl.default = void 0, rl.default = {};
    var to, nl = {};
    Object.defineProperty(nl, "__esModule", { value: true }), nl.default = void 0, function(i) {
      i.touchAction = "touchAction", i.boxSizing = "boxSizing", i.noListeners = "noListeners";
    }(to || (to = {})), to.touchAction, to.boxSizing, to.noListeners;
    var um = { id: "dev-tools", install: function() {
    } };
    nl.default = um;
    var Hn = {};
    Object.defineProperty(Hn, "__esModule", { value: true }), Hn.default = c(/* @__PURE__ */ __name(function i(o) {
      var l = {};
      for (var u in o) {
        var f = o[u];
        s.default.plainObject(f) ? l[u] = i(f) : s.default.array(f) ? l[u] = Me.from(f) : l[u] = f;
      }
      return l;
    }, "i"), "t");
    var $n = {};
    function cc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, E, b = [], w = true, O = false;
          try {
            for (f = f.call(l); !(w = (g = f.next()).done) && (b.push(g.value), !u || b.length !== u); w = true)
              ;
          } catch (I) {
            O = true, E = I;
          } finally {
            try {
              w || f.return == null || f.return();
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
            return pc(l, u);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? pc(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(cc, "cc");
    c(cc, "be");
    function pc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(pc, "pc");
    c(pc, "xe");
    function cm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(cm, "cm");
    c(cm, "we");
    function qn(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(qn, "qn");
    c(qn, "_e"), Object.defineProperty($n, "__esModule", { value: true }), $n.default = void 0, $n.getRectOffset = dc;
    var pm = function() {
      function i(u) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), qn(this, "states", []), qn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), qn(this, "startDelta", void 0), qn(this, "result", void 0), qn(this, "endResult", void 0), qn(this, "edges", void 0), qn(this, "interaction", void 0), this.interaction = u, this.result = ha();
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(u, f) {
        var g = u.phase, E = this.interaction, b = function(O) {
          var I = O.interactable.options[O.prepared.name], P = I.modifiers;
          return P && P.length ? P : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(k) {
            var G = I[k];
            return G && G.enabled && { options: G, methods: G._methods };
          }).filter(function(k) {
            return !!k;
          });
        }(E);
        this.prepareStates(b), this.edges = (0, W.default)({}, E.edges), this.startOffset = dc(E.rect, f), this.startDelta = { x: 0, y: 0 };
        var w = this.fillArg({ phase: g, pageCoords: f, preEnd: false });
        return this.result = ha(), this.startAll(w), this.result = this.setAll(w);
      } }, { key: "fillArg", value: function(u) {
        var f = this.interaction;
        return u.interaction = f, u.interactable = f.interactable, u.element = f.element, u.rect = u.rect || f.rect, u.edges = this.edges, u.startOffset = this.startOffset, u;
      } }, { key: "startAll", value: function(u) {
        for (var f = 0; f < this.states.length; f++) {
          var g = this.states[f];
          g.methods.start && (u.state = g, g.methods.start(u));
        }
      } }, { key: "setAll", value: function(u) {
        var f = u.phase, g = u.preEnd, E = u.skipModifiers, b = u.rect;
        u.coords = (0, W.default)({}, u.pageCoords), u.rect = (0, W.default)({}, b);
        for (var w = E ? this.states.slice(E) : this.states, O = ha(u.coords, u.rect), I = 0; I < w.length; I++) {
          var P, k = w[I], G = k.options, R = (0, W.default)({}, u.coords), q = null;
          (P = k.methods) != null && P.set && this.shouldDo(G, g, f) && (u.state = k, q = k.methods.set(u), ue.addEdges(this.interaction.edges, u.rect, { x: u.coords.x - R.x, y: u.coords.y - R.y })), O.eventProps.push(q);
        }
        O.delta.x = u.coords.x - u.pageCoords.x, O.delta.y = u.coords.y - u.pageCoords.y, O.rectDelta.left = u.rect.left - b.left, O.rectDelta.right = u.rect.right - b.right, O.rectDelta.top = u.rect.top - b.top, O.rectDelta.bottom = u.rect.bottom - b.bottom;
        var X = this.result.coords, F = this.result.rect;
        if (X && F) {
          var ne = O.rect.left !== F.left || O.rect.right !== F.right || O.rect.top !== F.top || O.rect.bottom !== F.bottom;
          O.changed = ne || X.x !== O.coords.x || X.y !== O.coords.y;
        }
        return O;
      } }, { key: "applyToInteraction", value: function(u) {
        var f = this.interaction, g = u.phase, E = f.coords.cur, b = f.coords.start, w = this.result, O = this.startDelta, I = w.delta;
        g === "start" && (0, W.default)(this.startDelta, w.delta);
        for (var P = 0; P < [[b, O], [E, I]].length; P++) {
          var k = cc([[b, O], [E, I]][P], 2), G = k[0], R = k[1];
          G.page.x += R.x, G.page.y += R.y, G.client.x += R.x, G.client.y += R.y;
        }
        var q = this.result.rectDelta, X = u.rect || f.rect;
        X.left += q.left, X.right += q.right, X.top += q.top, X.bottom += q.bottom, X.width = X.right - X.left, X.height = X.bottom - X.top;
      } }, { key: "setAndApply", value: function(u) {
        var f = this.interaction, g = u.phase, E = u.preEnd, b = u.skipModifiers, w = this.setAll(this.fillArg({ preEnd: E, phase: g, pageCoords: u.modifiedCoords || f.coords.cur.page }));
        if (this.result = w, !w.changed && (!b || b < this.states.length) && f.interacting())
          return false;
        if (u.modifiedCoords) {
          var O = f.coords.cur.page, I = { x: u.modifiedCoords.x - O.x, y: u.modifiedCoords.y - O.y };
          w.coords.x += I.x, w.coords.y += I.y, w.delta.x += I.x, w.delta.y += I.y;
        }
        this.applyToInteraction(u);
      } }, { key: "beforeEnd", value: function(u) {
        var f = u.interaction, g = u.event, E = this.states;
        if (E && E.length) {
          for (var b = false, w = 0; w < E.length; w++) {
            var O = E[w];
            u.state = O;
            var I = O.options, P = O.methods, k = P.beforeEnd && P.beforeEnd(u);
            if (k)
              return this.endResult = k, false;
            b = b || !b && this.shouldDo(I, true, u.phase, true);
          }
          b && f.move({ event: g, preEnd: true });
        }
      } }, { key: "stop", value: function(u) {
        var f = u.interaction;
        if (this.states && this.states.length) {
          var g = (0, W.default)({ states: this.states, interactable: f.interactable, element: f.element, rect: null }, u);
          this.fillArg(g);
          for (var E = 0; E < this.states.length; E++) {
            var b = this.states[E];
            g.state = b, b.methods.stop && b.methods.stop(g);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(u) {
        this.states = [];
        for (var f = 0; f < u.length; f++) {
          var g = u[f], E = g.options, b = g.methods, w = g.name;
          this.states.push({ options: E, methods: b, index: f, name: w });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(u) {
        var f = u.interaction, g = f.coords, E = f.rect, b = f.modification;
        if (b.result) {
          for (var w = b.startDelta, O = b.result, I = O.delta, P = O.rectDelta, k = [[g.start, w], [g.cur, I]], G = 0; G < k.length; G++) {
            var R = cc(k[G], 2), q = R[0], X = R[1];
            q.page.x -= X.x, q.page.y -= X.y, q.client.x -= X.x, q.client.y -= X.y;
          }
          E.left -= P.left, E.right -= P.right, E.top -= P.top, E.bottom -= P.bottom;
        }
      } }, { key: "shouldDo", value: function(u, f, g, E) {
        return !(!u || u.enabled === false || E && !u.endOnly || u.endOnly && !f || g === "start" && !u.setStart);
      } }, { key: "copyFrom", value: function(u) {
        this.startOffset = u.startOffset, this.startDelta = u.startDelta, this.edges = u.edges, this.states = u.states.map(function(f) {
          return (0, Hn.default)(f);
        }), this.result = ha((0, W.default)({}, u.result.coords), (0, W.default)({}, u.result.rect));
      } }, { key: "destroy", value: function() {
        for (var u in this)
          this[u] = null;
      } }]) && cm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function ha(i, o) {
      return { rect: o, coords: i, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(ha, "ha");
    c(ha, "Oe");
    function dc(i, o) {
      return i ? { left: o.x - i.left, top: o.y - i.top, right: i.right - o.x, bottom: i.bottom - o.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(dc, "dc");
    c(dc, "Ee"), $n.default = pm;
    var Et = {};
    function ma(i) {
      var o = i.iEvent, l = i.interaction.modification.result;
      l && (o.modifiers = l.eventProps);
    }
    __name(ma, "ma");
    c(ma, "Te"), Object.defineProperty(Et, "__esModule", { value: true }), Et.addEventModifiers = ma, Et.default = void 0, Et.makeModifier = function(i, o) {
      var l = i.defaults, u = { start: i.start, set: i.set, beforeEnd: i.beforeEnd, stop: i.stop }, f = c(function(g) {
        var E = g || {};
        for (var b in E.enabled = E.enabled !== false, l)
          b in E || (E[b] = l[b]);
        var w = { options: E, methods: u, name: o, enable: function() {
          return E.enabled = true, w;
        }, disable: function() {
          return E.enabled = false, w;
        } };
        return w;
      }, "o");
      return o && typeof o == "string" && (f._defaults = l, f._methods = u), f;
    };
    var dm = { id: "modifiers/base", before: ["actions"], install: function(i) {
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
    }, "interactions:action-start": ma, "interactions:action-move": ma, "interactions:action-end": ma, "interactions:after-action-start": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-move": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:stop": function(i) {
      return i.interaction.modification.stop(i);
    } } }, fm = dm;
    Et.default = fm;
    var ro = {};
    Object.defineProperty(ro, "__esModule", { value: true }), ro.defaults = void 0, ro.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var no = {};
    function il(i) {
      return il = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, il(i);
    }
    __name(il, "il");
    c(il, "De");
    function hm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(hm, "hm");
    c(hm, "Ae");
    function ol(i, o) {
      return ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, ol(i, o);
    }
    __name(ol, "ol");
    c(ol, "ze");
    function mm(i, o) {
      if (o && (il(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Be(i);
    }
    __name(mm, "mm");
    c(mm, "Ce");
    function Be(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Be, "Be");
    c(Be, "Re");
    function va(i) {
      return va = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, va(i);
    }
    __name(va, "va");
    c(va, "Fe");
    function We(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(We, "We");
    c(We, "Xe"), Object.defineProperty(no, "__esModule", { value: true }), no.InteractEvent = void 0;
    var fc = function(i) {
      (function(b, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), w && ol(b, w);
      })(E, i);
      var o, l, u, f, g = (u = E, f = function() {
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
        var b, w = va(u);
        if (f) {
          var O = va(this).constructor;
          b = Reflect.construct(w, arguments, O);
        } else
          b = w.apply(this, arguments);
        return mm(this, b);
      });
      function E(b, w, O, I, P, k, G) {
        var R;
        (function(Fe, Se) {
          if (!(Fe instanceof Se))
            throw new TypeError("Cannot call a class as a function");
        })(this, E), We(Be(R = g.call(this, b)), "relatedTarget", null), We(Be(R), "screenX", void 0), We(Be(R), "screenY", void 0), We(Be(R), "button", void 0), We(Be(R), "buttons", void 0), We(Be(R), "ctrlKey", void 0), We(Be(R), "shiftKey", void 0), We(Be(R), "altKey", void 0), We(Be(R), "metaKey", void 0), We(Be(R), "page", void 0), We(Be(R), "client", void 0), We(Be(R), "delta", void 0), We(Be(R), "rect", void 0), We(Be(R), "x0", void 0), We(Be(R), "y0", void 0), We(Be(R), "t0", void 0), We(Be(R), "dt", void 0), We(Be(R), "duration", void 0), We(Be(R), "clientX0", void 0), We(Be(R), "clientY0", void 0), We(Be(R), "velocity", void 0), We(Be(R), "speed", void 0), We(Be(R), "swipe", void 0), We(Be(R), "axes", void 0), We(Be(R), "preEnd", void 0), P = P || b.element;
        var q = b.interactable, X = (q && q.options || ro.defaults).deltaSource, F = (0, De.default)(q, P, O), ne = I === "start", oe = I === "end", fe = ne ? Be(R) : b.prevEvent, Pe = ne ? b.coords.start : oe ? { page: fe.page, client: fe.client, timeStamp: b.coords.cur.timeStamp } : b.coords.cur;
        return R.page = (0, W.default)({}, Pe.page), R.client = (0, W.default)({}, Pe.client), R.rect = (0, W.default)({}, b.rect), R.timeStamp = Pe.timeStamp, oe || (R.page.x -= F.x, R.page.y -= F.y, R.client.x -= F.x, R.client.y -= F.y), R.ctrlKey = w.ctrlKey, R.altKey = w.altKey, R.shiftKey = w.shiftKey, R.metaKey = w.metaKey, R.button = w.button, R.buttons = w.buttons, R.target = P, R.currentTarget = P, R.preEnd = k, R.type = G || O + (I || ""), R.interactable = q, R.t0 = ne ? b.pointers[b.pointers.length - 1].downTime : fe.t0, R.x0 = b.coords.start.page.x - F.x, R.y0 = b.coords.start.page.y - F.y, R.clientX0 = b.coords.start.client.x - F.x, R.clientY0 = b.coords.start.client.y - F.y, R.delta = ne || oe ? { x: 0, y: 0 } : { x: R[X].x - fe[X].x, y: R[X].y - fe[X].y }, R.dt = b.coords.delta.timeStamp, R.duration = R.timeStamp - R.t0, R.velocity = (0, W.default)({}, b.coords.velocity[X]), R.speed = (0, Ze.default)(R.velocity.x, R.velocity.y), R.swipe = oe || I === "inertiastart" ? R.getSwipe() : null, R;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (l = [{ key: "getSwipe", value: function() {
        var b = this._interaction;
        if (b.prevEvent.speed < 600 || this.timeStamp - b.prevEvent.timeStamp > 150)
          return null;
        var w = 180 * Math.atan2(b.prevEvent.velocityY, b.prevEvent.velocityX) / Math.PI;
        w < 0 && (w += 360);
        var O = 112.5 <= w && w < 247.5, I = 202.5 <= w && w < 337.5;
        return { up: I, down: !I && 22.5 <= w && w < 157.5, left: O, right: !O && (292.5 <= w || w < 67.5), angle: w, speed: b.prevEvent.speed, velocity: { x: b.prevEvent.velocityX, y: b.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && hm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    no.InteractEvent = fc, Object.defineProperties(fc.prototype, { pageX: { get: function() {
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
    function hc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(hc, "hc");
    c(hc, "We");
    function vm(i, o, l) {
      return o && hc(i.prototype, o), l && hc(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(vm, "vm");
    c(vm, "Le");
    function oo(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(oo, "oo");
    c(oo, "Ue"), Object.defineProperty(io, "__esModule", { value: true }), io.PointerInfo = void 0;
    var gm = vm(c(/* @__PURE__ */ __name(function i(o, l, u, f, g) {
      (function(E, b) {
        if (!(E instanceof b))
          throw new TypeError("Cannot call a class as a function");
      })(this, i), oo(this, "id", void 0), oo(this, "pointer", void 0), oo(this, "event", void 0), oo(this, "downTime", void 0), oo(this, "downTarget", void 0), this.id = o, this.pointer = l, this.event = u, this.downTime = f, this.downTarget = g;
    }, "i"), "t"));
    io.PointerInfo = gm;
    var ga, ba, Ft = {};
    function bm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(bm, "bm");
    c(bm, "$e");
    function Xe(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Xe, "Xe");
    c(Xe, "He"), Object.defineProperty(Ft, "__esModule", { value: true }), Ft.Interaction = void 0, Object.defineProperty(Ft, "PointerInfo", { enumerable: true, get: function() {
      return io.PointerInfo;
    } }), Ft.default = Ft._ProxyValues = Ft._ProxyMethods = void 0, Ft._ProxyValues = ga, function(i) {
      i.interactable = "", i.element = "", i.prepared = "", i.pointerIsDown = "", i.pointerWasMoved = "", i._proxy = "";
    }(ga || (Ft._ProxyValues = ga = {})), Ft._ProxyMethods = ba, function(i) {
      i.start = "", i.move = "", i.end = "", i.stop = "", i.interacting = "";
    }(ba || (Ft._ProxyMethods = ba = {}));
    var ym = 0, mc = function() {
      function i(u) {
        var f = this, g = u.pointerType, E = u.scopeFire;
        (function(k, G) {
          if (!(k instanceof G))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Xe(this, "interactable", null), Xe(this, "element", null), Xe(this, "rect", null), Xe(this, "_rects", void 0), Xe(this, "edges", null), Xe(this, "_scopeFire", void 0), Xe(this, "prepared", { name: null, axis: null, edges: null }), Xe(this, "pointerType", void 0), Xe(this, "pointers", []), Xe(this, "downEvent", null), Xe(this, "downPointer", {}), Xe(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), Xe(this, "prevEvent", null), Xe(this, "pointerIsDown", false), Xe(this, "pointerWasMoved", false), Xe(this, "_interacting", false), Xe(this, "_ending", false), Xe(this, "_stopped", true), Xe(this, "_proxy", null), Xe(this, "simulation", null), Xe(this, "doMove", (0, ar.warnOnce)(function(k) {
          this.move(k);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), Xe(this, "coords", { start: Q.newCoords(), prev: Q.newCoords(), cur: Q.newCoords(), delta: Q.newCoords(), velocity: Q.newCoords() }), Xe(this, "_id", ym++), this._scopeFire = E, this.pointerType = g;
        var b = this;
        this._proxy = {};
        var w = c(function(k) {
          Object.defineProperty(f._proxy, k, { get: function() {
            return b[k];
          } });
        }, "a");
        for (var O in ga)
          w(O);
        var I = c(function(k) {
          Object.defineProperty(f._proxy, k, { value: function() {
            return b[k].apply(b, arguments);
          } });
        }, "l");
        for (var P in ba)
          I(P);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, l = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(u, f, g) {
        var E = this.updatePointer(u, f, g, true), b = this.pointers[E];
        this._scopeFire("interactions:down", { pointer: u, event: f, eventTarget: g, pointerIndex: E, pointerInfo: b, type: "down", interaction: this });
      } }, { key: "start", value: function(u, f, g) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (u.name === "gesture" ? 2 : 1) || !f.options[u.name].enabled) && ((0, ar.copyAction)(this.prepared, u), this.interactable = f, this.element = g, this.rect = f.getRect(g), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(u, f, g) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(u, f, g, false);
        var E, b, w = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (E = this.coords.cur.client.x - this.coords.start.client.x, b = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, Ze.default)(E, b) > this.pointerMoveTolerance);
        var O = this.getPointerIndex(u), I = { pointer: u, pointerIndex: O, pointerInfo: this.pointers[O], event: f, type: "move", eventTarget: g, dx: E, dy: b, duplicate: w, interaction: this };
        w || Q.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", I), w || this.simulation || (this.interacting() && (I.type = null, this.move(I)), this.pointerWasMoved && Q.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(u) {
        u && u.event || Q.setZeroCoords(this.coords.delta), (u = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, u || {})).phase = "move", this._doPhase(u);
      } }, { key: "pointerUp", value: function(u, f, g, E) {
        var b = this.getPointerIndex(u);
        b === -1 && (b = this.updatePointer(u, f, g, false));
        var w = /cancel$/i.test(f.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(w), { pointer: u, pointerIndex: b, pointerInfo: this.pointers[b], event: f, eventTarget: g, type: w, curEventTarget: E, interaction: this }), this.simulation || this.end(f), this.removePointer(u, f);
      } }, { key: "documentBlur", value: function(u) {
        this.end(u), this._scopeFire("interactions:blur", { event: u, type: "blur", interaction: this });
      } }, { key: "end", value: function(u) {
        var f;
        this._ending = true, u = u || this._latestPointer.event, this.interacting() && (f = this._doPhase({ event: u, interaction: this, phase: "end" })), this._ending = false, f === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(u) {
        var f = Q.getPointerId(u);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Me.findIndex(this.pointers, function(g) {
          return g.id === f;
        });
      } }, { key: "getPointerInfo", value: function(u) {
        return this.pointers[this.getPointerIndex(u)];
      } }, { key: "updatePointer", value: function(u, f, g, E) {
        var b = Q.getPointerId(u), w = this.getPointerIndex(u), O = this.pointers[w];
        return E = E !== false && (E || /(down|start)$/i.test(f.type)), O ? O.pointer = u : (O = new io.PointerInfo(b, u, f, null, null), w = this.pointers.length, this.pointers.push(O)), Q.setCoords(this.coords.cur, this.pointers.map(function(I) {
          return I.pointer;
        }), this._now()), Q.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), E && (this.pointerIsDown = true, O.downTime = this.coords.cur.timeStamp, O.downTarget = g, Q.pointerExtend(this.downPointer, u), this.interacting() || (Q.copyCoords(this.coords.start, this.coords.cur), Q.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = f, this.pointerWasMoved = false)), this._updateLatestPointer(u, f, g), this._scopeFire("interactions:update-pointer", { pointer: u, event: f, eventTarget: g, down: E, pointerInfo: O, pointerIndex: w, interaction: this }), w;
      } }, { key: "removePointer", value: function(u, f) {
        var g = this.getPointerIndex(u);
        if (g !== -1) {
          var E = this.pointers[g];
          this._scopeFire("interactions:remove-pointer", { pointer: u, event: f, eventTarget: null, pointerIndex: g, pointerInfo: E, interaction: this }), this.pointers.splice(g, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(u, f, g) {
        this._latestPointer.pointer = u, this._latestPointer.event = f, this._latestPointer.eventTarget = g;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(u, f, g, E) {
        return new no.InteractEvent(this, u, this.prepared.name, f, this.element, g, E);
      } }, { key: "_fireEvent", value: function(u) {
        var f;
        (f = this.interactable) == null || f.fire(u), (!this.prevEvent || u.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = u);
      } }, { key: "_doPhase", value: function(u) {
        var f = u.event, g = u.phase, E = u.preEnd, b = u.type, w = this.rect;
        if (w && g === "move" && (ue.addEdges(this.edges, w, this.coords.delta[this.interactable.options.deltaSource]), w.width = w.right - w.left, w.height = w.bottom - w.top), this._scopeFire("interactions:before-action-".concat(g), u) === false)
          return false;
        var O = u.iEvent = this._createPreparedEvent(f, g, E, b);
        return this._scopeFire("interactions:action-".concat(g), u), g === "start" && (this.prevEvent = O), this._fireEvent(O), this._scopeFire("interactions:after-action-".concat(g), u), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }], l && bm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    Ft.Interaction = mc;
    var xm = mc;
    Ft.default = xm;
    var Fn = {};
    function vc(i) {
      i.pointerIsDown && (sl(i.coords.cur, i.offset.total), i.offset.pending.x = 0, i.offset.pending.y = 0);
    }
    __name(vc, "vc");
    c(vc, "tn");
    function gc(i) {
      al(i.interaction);
    }
    __name(gc, "gc");
    c(gc, "en");
    function al(i) {
      if (!function(l) {
        return !(!l.offset.pending.x && !l.offset.pending.y);
      }(i))
        return false;
      var o = i.offset.pending;
      return sl(i.coords.cur, o), sl(i.coords.delta, o), ue.addEdges(i.edges, i.rect, o), o.x = 0, o.y = 0, true;
    }
    __name(al, "al");
    c(al, "nn");
    function wm(i) {
      var o = i.x, l = i.y;
      this.offset.pending.x += o, this.offset.pending.y += l, this.offset.total.x += o, this.offset.total.y += l;
    }
    __name(wm, "wm");
    c(wm, "rn");
    function sl(i, o) {
      var l = i.page, u = i.client, f = o.x, g = o.y;
      l.x += f, l.y += g, u.x += f, u.y += g;
    }
    __name(sl, "sl");
    c(sl, "on"), Object.defineProperty(Fn, "__esModule", { value: true }), Fn.addTotal = vc, Fn.applyPending = al, Fn.default = void 0, Ft._ProxyMethods.offsetBy = "";
    var Em = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(i) {
      i.Interaction.prototype.offsetBy = wm;
    }, listeners: { "interactions:new": function(i) {
      i.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(i) {
      return vc(i.interaction);
    }, "interactions:before-action-start": gc, "interactions:before-action-move": gc, "interactions:before-action-end": function(i) {
      var o = i.interaction;
      if (al(o))
        return o.move({ offset: true }), o.end(), false;
    }, "interactions:stop": function(i) {
      var o = i.interaction;
      o.offset.total.x = 0, o.offset.total.y = 0, o.offset.pending.x = 0, o.offset.pending.y = 0;
    } } }, Sm = Em;
    Fn.default = Sm;
    var gi = {};
    function Cm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Cm, "Cm");
    c(Cm, "un");
    function bt(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(bt, "bt");
    c(bt, "cn"), Object.defineProperty(gi, "__esModule", { value: true }), gi.default = gi.InertiaState = void 0;
    var bc = function() {
      function i(u) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), bt(this, "active", false), bt(this, "isModified", false), bt(this, "smoothEnd", false), bt(this, "allowResume", false), bt(this, "modification", void 0), bt(this, "modifierCount", 0), bt(this, "modifierArg", void 0), bt(this, "startCoords", void 0), bt(this, "t0", 0), bt(this, "v0", 0), bt(this, "te", 0), bt(this, "targetOffset", void 0), bt(this, "modifiedOffset", void 0), bt(this, "currentOffset", void 0), bt(this, "lambda_v0", 0), bt(this, "one_ve_v0", 0), bt(this, "timeout", void 0), bt(this, "interaction", void 0), this.interaction = u;
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "start", value: function(u) {
        var f = this.interaction, g = ya(f);
        if (!g || !g.enabled)
          return false;
        var E = f.coords.velocity.client, b = (0, Ze.default)(E.x, E.y), w = this.modification || (this.modification = new $n.default(f));
        if (w.copyFrom(f.modification), this.t0 = f._now(), this.allowResume = g.allowResume, this.v0 = b, this.currentOffset = { x: 0, y: 0 }, this.startCoords = f.coords.cur.page, this.modifierArg = w.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - f.coords.cur.timeStamp < 50 && b > g.minSpeed && b > g.endSpeed)
          this.startInertia();
        else {
          if (w.result = w.setAll(this.modifierArg), !w.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return f.modification.result.rect = null, f.offsetBy(this.targetOffset), f._doPhase({ interaction: f, event: u, phase: "inertiastart" }), f.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), f.modification.result.rect = null, this.active = true, f.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var u = this, f = this.interaction.coords.velocity.client, g = ya(this.interaction), E = g.resistance, b = -Math.log(g.endSpeed / this.v0) / E;
        this.targetOffset = { x: (f.x - b) / E, y: (f.y - b) / E }, this.te = b, this.lambda_v0 = E / this.v0, this.one_ve_v0 = 1 - g.endSpeed / this.v0;
        var w = this.modification, O = this.modifierArg;
        O.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, w.result = w.setAll(O), w.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + w.result.delta.x, y: this.targetOffset.y + w.result.delta.y }), this.onNextFrame(function() {
          return u.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var u = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return u.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(u) {
        var f = this;
        this.timeout = Pt.default.request(function() {
          f.active && u();
        });
      } }, { key: "inertiaTick", value: function() {
        var u, f, g, E, b, w = this, O = this.interaction, I = ya(O).resistance, P = (O._now() - this.t0) / 1e3;
        if (P < this.te) {
          var k, G = 1 - (Math.exp(-I * P) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (u = this.targetOffset.x, f = this.targetOffset.y, g = this.modifiedOffset.x, E = this.modifiedOffset.y, k = { x: yc(b = G, 0, u, g), y: yc(b, 0, f, E) }) : k = { x: this.targetOffset.x * G, y: this.targetOffset.y * G };
          var R = { x: k.x - this.currentOffset.x, y: k.y - this.currentOffset.y };
          this.currentOffset.x += R.x, this.currentOffset.y += R.y, O.offsetBy(R), O.move(), this.onNextFrame(function() {
            return w.inertiaTick();
          });
        } else
          O.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var u = this, f = this.interaction, g = f._now() - this.t0, E = ya(f).smoothEndDuration;
        if (g < E) {
          var b = { x: xc(g, 0, this.targetOffset.x, E), y: xc(g, 0, this.targetOffset.y, E) }, w = { x: b.x - this.currentOffset.x, y: b.y - this.currentOffset.y };
          this.currentOffset.x += w.x, this.currentOffset.y += w.y, f.offsetBy(w), f.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return u.smoothEndTick();
          });
        } else
          f.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(u) {
        var f = u.pointer, g = u.event, E = u.eventTarget, b = this.interaction;
        b.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), b.updatePointer(f, g, E, true), b._doPhase({ interaction: b, event: g, phase: "resume" }), (0, Q.copyCoords)(b.coords.prev, b.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, Pt.default.cancel(this.timeout);
      } }]) && Cm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function ya(i) {
      var o = i.interactable, l = i.prepared;
      return o && o.options && l.name && o.options[l.name].inertia;
    }
    __name(ya, "ya");
    c(ya, "dn"), gi.InertiaState = bc;
    var Tm = { id: "inertia", before: ["modifiers", "actions"], install: function(i) {
      var o = i.defaults;
      i.usePlugin(Fn.default), i.usePlugin(Et.default), i.actions.phases.inertiastart = true, i.actions.phases.resume = true, o.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.inertia = new bc(o);
    }, "interactions:before-action-end": function(i) {
      var o = i.interaction, l = i.event;
      return (!o._interacting || o.simulation || !o.inertia.start(l)) && null;
    }, "interactions:down": function(i) {
      var o = i.interaction, l = i.eventTarget, u = o.inertia;
      if (u.active)
        for (var f = l; s.default.element(f); ) {
          if (f === o.element) {
            u.resume(i);
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
    }, "interactions:action-resume": Et.addEventModifiers, "interactions:action-inertiastart": Et.addEventModifiers, "interactions:after-action-inertiastart": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    }, "interactions:after-action-resume": function(i) {
      return i.interaction.modification.restoreInteractionCoords(i);
    } } };
    function yc(i, o, l, u) {
      var f = 1 - i;
      return f * f * o + 2 * f * i * l + i * i * u;
    }
    __name(yc, "yc");
    c(yc, "vn");
    function xc(i, o, l, u) {
      return -l * (i /= u) * (i - 2) + o;
    }
    __name(xc, "xc");
    c(xc, "hn");
    var Om = Tm;
    gi.default = Om;
    var ao = {};
    function Mm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Mm, "Mm");
    c(Mm, "mn");
    function so(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(so, "so");
    c(so, "bn");
    function wc(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        if (i.immediatePropagationStopped)
          break;
        u(i);
      }
    }
    __name(wc, "wc");
    c(wc, "xn"), Object.defineProperty(ao, "__esModule", { value: true }), ao.Eventable = void 0;
    var Im = function() {
      function i(u) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), so(this, "options", void 0), so(this, "types", {}), so(this, "propagationStopped", false), so(this, "immediatePropagationStopped", false), so(this, "global", void 0), this.options = (0, W.default)({}, u || {});
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "fire", value: function(u) {
        var f, g = this.global;
        (f = this.types[u.type]) && wc(u, f), !u.propagationStopped && g && (f = g[u.type]) && wc(u, f);
      } }, { key: "on", value: function(u, f) {
        var g = (0, je.default)(u, f);
        for (u in g)
          this.types[u] = Me.merge(this.types[u] || [], g[u]);
      } }, { key: "off", value: function(u, f) {
        var g = (0, je.default)(u, f);
        for (u in g) {
          var E = this.types[u];
          if (E && E.length)
            for (var b = 0; b < g[u].length; b++) {
              var w = g[u][b], O = E.indexOf(w);
              O !== -1 && E.splice(O, 1);
            }
        }
      } }, { key: "getRect", value: function(u) {
        return null;
      } }]) && Mm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    ao.Eventable = Im;
    var lo = {};
    Object.defineProperty(lo, "__esModule", { value: true }), lo.default = function(i, o) {
      if (o.phaselessTypes[i])
        return true;
      for (var l in o.map)
        if (i.indexOf(l) === 0 && i.substr(l.length) in o.phases)
          return true;
      return false;
    };
    var ll = {};
    Object.defineProperty(ll, "__esModule", { value: true }), ll.createInteractStatic = function(i) {
      var o = c(/* @__PURE__ */ __name(function l(u, f) {
        var g = i.interactables.get(u, f);
        return g || ((g = i.interactables.new(u, f)).events.global = l.globalEvents), g;
      }, "l"), "e");
      return o.getPointerAverage = Q.pointerAverage, o.getTouchBBox = Q.touchBBox, o.getTouchDistance = Q.touchDistance, o.getTouchAngle = Q.touchAngle, o.getElementRect = z.getElementRect, o.getElementClientRect = z.getElementClientRect, o.matchesSelector = z.matchesSelector, o.closest = z.closest, o.globalEvents = {}, o.version = "1.10.14", o.scope = i, o.use = function(l, u) {
        return this.scope.usePlugin(l, u), this;
      }, o.isSet = function(l, u) {
        return !!this.scope.interactables.get(l, u && u.context);
      }, o.on = (0, ar.warnOnce)(function(l, u, f) {
        if (s.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), s.default.array(l)) {
          for (var g = 0; g < l.length; g++) {
            var E = l[g];
            this.on(E, u, f);
          }
          return this;
        }
        if (s.default.object(l)) {
          for (var b in l)
            this.on(b, l[b], u);
          return this;
        }
        return (0, lo.default)(l, this.scope.actions) ? this.globalEvents[l] ? this.globalEvents[l].push(u) : this.globalEvents[l] = [u] : this.scope.events.add(this.scope.document, l, u, { options: f }), this;
      }, "The interact.on() method is being deprecated"), o.off = (0, ar.warnOnce)(function(l, u, f) {
        if (s.default.string(l) && l.search(" ") !== -1 && (l = l.trim().split(/ +/)), s.default.array(l)) {
          for (var g = 0; g < l.length; g++) {
            var E = l[g];
            this.off(E, u, f);
          }
          return this;
        }
        if (s.default.object(l)) {
          for (var b in l)
            this.off(b, l[b], u);
          return this;
        }
        var w;
        return (0, lo.default)(l, this.scope.actions) ? l in this.globalEvents && (w = this.globalEvents[l].indexOf(u)) !== -1 && this.globalEvents[l].splice(w, 1) : this.scope.events.remove(this.scope.document, l, u, f), this;
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
    function Am(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Am, "Am");
    c(Am, "En");
    function Xr(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Xr, "Xr");
    c(Xr, "Sn"), Object.defineProperty(xa, "__esModule", { value: true }), xa.Interactable = void 0;
    var Pm = function() {
      function i(u, f, g, E) {
        (function(b, w) {
          if (!(b instanceof w))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), Xr(this, "options", void 0), Xr(this, "_actions", void 0), Xr(this, "target", void 0), Xr(this, "events", new ao.Eventable()), Xr(this, "_context", void 0), Xr(this, "_win", void 0), Xr(this, "_doc", void 0), Xr(this, "_scopeEvents", void 0), Xr(this, "_rectChecker", void 0), this._actions = f.actions, this.target = u, this._context = f.context || g, this._win = (0, r.getWindow)((0, z.trySelector)(u) ? this._context : u), this._doc = this._win.document, this._scopeEvents = E, this.set(f);
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(u, f) {
        return s.default.func(f.onstart) && this.on("".concat(u, "start"), f.onstart), s.default.func(f.onmove) && this.on("".concat(u, "move"), f.onmove), s.default.func(f.onend) && this.on("".concat(u, "end"), f.onend), s.default.func(f.oninertiastart) && this.on("".concat(u, "inertiastart"), f.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(u, f, g) {
        (s.default.array(f) || s.default.object(f)) && this.off(u, f), (s.default.array(g) || s.default.object(g)) && this.on(u, g);
      } }, { key: "setPerAction", value: function(u, f) {
        var g = this._defaults;
        for (var E in f) {
          var b = E, w = this.options[u], O = f[b];
          b === "listeners" && this.updatePerActionListeners(u, w.listeners, O), s.default.array(O) ? w[b] = Me.from(O) : s.default.plainObject(O) ? (w[b] = (0, W.default)(w[b] || {}, (0, Hn.default)(O)), s.default.object(g.perAction[b]) && "enabled" in g.perAction[b] && (w[b].enabled = O.enabled !== false)) : s.default.bool(O) && s.default.object(g.perAction[b]) ? w[b].enabled = O : w[b] = O;
        }
      } }, { key: "getRect", value: function(u) {
        return u = u || (s.default.element(this.target) ? this.target : null), s.default.string(this.target) && (u = u || this._context.querySelector(this.target)), (0, z.getElementRect)(u);
      } }, { key: "rectChecker", value: function(u) {
        var f = this;
        return s.default.func(u) ? (this._rectChecker = u, this.getRect = function(g) {
          var E = (0, W.default)({}, f._rectChecker(g));
          return "width" in E || (E.width = E.right - E.left, E.height = E.bottom - E.top), E;
        }, this) : u === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(u, f) {
        if ((0, z.trySelector)(f) || s.default.object(f)) {
          for (var g in this.options[u] = f, this._actions.map)
            this.options[g][u] = f;
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
      } }, { key: "testIgnoreAllow", value: function(u, f, g) {
        return !this.testIgnore(u.ignoreFrom, f, g) && this.testAllow(u.allowFrom, f, g);
      } }, { key: "testAllow", value: function(u, f, g) {
        return !u || !!s.default.element(g) && (s.default.string(u) ? (0, z.matchesUpTo)(g, u, f) : !!s.default.element(u) && (0, z.nodeContains)(u, g));
      } }, { key: "testIgnore", value: function(u, f, g) {
        return !(!u || !s.default.element(g)) && (s.default.string(u) ? (0, z.matchesUpTo)(g, u, f) : !!s.default.element(u) && (0, z.nodeContains)(u, g));
      } }, { key: "fire", value: function(u) {
        return this.events.fire(u), this;
      } }, { key: "_onOff", value: function(u, f, g, E) {
        s.default.object(f) && !s.default.array(f) && (E = g, g = null);
        var b = u === "on" ? "add" : "remove", w = (0, je.default)(f, g);
        for (var O in w) {
          O === "wheel" && (O = $.default.wheelEvent);
          for (var I = 0; I < w[O].length; I++) {
            var P = w[O][I];
            (0, lo.default)(O, this._actions) ? this.events[u](O, P) : s.default.string(this.target) ? this._scopeEvents["".concat(b, "Delegate")](this.target, this._context, O, P, E) : this._scopeEvents[b](this.target, O, P, E);
          }
        }
        return this;
      } }, { key: "on", value: function(u, f, g) {
        return this._onOff("on", u, f, g);
      } }, { key: "off", value: function(u, f, g) {
        return this._onOff("off", u, f, g);
      } }, { key: "set", value: function(u) {
        var f = this._defaults;
        for (var g in s.default.object(u) || (u = {}), this.options = (0, Hn.default)(f.base), this._actions.methodDict) {
          var E = g, b = this._actions.methodDict[E];
          this.options[E] = {}, this.setPerAction(E, (0, W.default)((0, W.default)({}, f.perAction), f.actions[E])), this[b](u[E]);
        }
        for (var w in u)
          s.default.func(this[w]) && this[w](u[w]);
        return this;
      } }, { key: "unset", value: function() {
        if (s.default.string(this.target))
          for (var u in this._scopeEvents.delegatedEvents)
            for (var f = this._scopeEvents.delegatedEvents[u], g = f.length - 1; g >= 0; g--) {
              var E = f[g], b = E.selector, w = E.context, O = E.listeners;
              b === this.target && w === this._context && f.splice(g, 1);
              for (var I = O.length - 1; I >= 0; I--)
                this._scopeEvents.removeDelegate(this.target, this._context, u, O[I][0], O[I][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Am(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    xa.Interactable = Pm;
    var wa = {};
    function _m(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(_m, "_m");
    c(_m, "Mn");
    function ul(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(ul, "ul");
    c(ul, "kn"), Object.defineProperty(wa, "__esModule", { value: true }), wa.InteractableSet = void 0;
    var zm = function() {
      function i(u) {
        var f = this;
        (function(g, E) {
          if (!(g instanceof E))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), ul(this, "list", []), ul(this, "selectorMap", {}), ul(this, "scope", void 0), this.scope = u, u.addListeners({ "interactable:unset": function(g) {
          var E = g.interactable, b = E.target, w = E._context, O = s.default.string(b) ? f.selectorMap[b] : b[f.scope.id], I = Me.findIndex(O, function(P) {
            return P.context === w;
          });
          O[I] && (O[I].context = null, O[I].interactable = null), O.splice(I, 1);
        } });
      }
      __name(i, "i");
      c(i, "t");
      var o, l;
      return o = i, (l = [{ key: "new", value: function(u, f) {
        f = (0, W.default)(f || {}, { actions: this.scope.actions });
        var g = new this.scope.Interactable(u, f, this.scope.document, this.scope.events), E = { context: g._context, interactable: g };
        return this.scope.addDocument(g._doc), this.list.push(g), s.default.string(u) ? (this.selectorMap[u] || (this.selectorMap[u] = []), this.selectorMap[u].push(E)) : (g.target[this.scope.id] || Object.defineProperty(u, this.scope.id, { value: [], configurable: true }), u[this.scope.id].push(E)), this.scope.fire("interactable:new", { target: u, options: f, interactable: g, win: this.scope._win }), g;
      } }, { key: "get", value: function(u, f) {
        var g = f && f.context || this.scope.document, E = s.default.string(u), b = E ? this.selectorMap[u] : u[this.scope.id];
        if (!b)
          return null;
        var w = Me.find(b, function(O) {
          return O.context === g && (E || O.interactable.inContext(u));
        });
        return w && w.interactable;
      } }, { key: "forEachMatch", value: function(u, f) {
        for (var g = 0; g < this.list.length; g++) {
          var E = this.list[g], b = void 0;
          if ((s.default.string(E.target) ? s.default.element(u) && z.matchesSelector(u, E.target) : u === E.target) && E.inContext(u) && (b = f(E)), b !== void 0)
            return b;
        }
      } }]) && _m(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    wa.InteractableSet = zm;
    var Ea = {};
    function Rm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Rm, "Rm");
    c(Rm, "An");
    function cl(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(cl, "cl");
    c(cl, "zn");
    function pl(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, E, b = [], w = true, O = false;
          try {
            for (f = f.call(l); !(w = (g = f.next()).done) && (b.push(g.value), !u || b.length !== u); w = true)
              ;
          } catch (I) {
            O = true, E = I;
          } finally {
            try {
              w || f.return == null || f.return();
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
            return Ec(l, u);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? Ec(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(pl, "pl");
    c(pl, "Cn");
    function Ec(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Ec, "Ec");
    c(Ec, "Rn"), Object.defineProperty(Ea, "__esModule", { value: true }), Ea.default = void 0;
    var Dm = function() {
      function i(u) {
        (function(f, g) {
          if (!(f instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, i), cl(this, "currentTarget", void 0), cl(this, "originalEvent", void 0), cl(this, "type", void 0), this.originalEvent = u, (0, Ve.default)(this, u);
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
      } }]) && Rm(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), i;
    }();
    function uo(i) {
      if (!s.default.object(i))
        return { capture: !!i, passive: false };
      var o = (0, W.default)({}, i);
      return o.capture = !!i.capture, o.passive = !!i.passive, o;
    }
    __name(uo, "uo");
    c(uo, "Xn");
    var Nm = { id: "events", install: function(i) {
      var o, l = [], u = {}, f = [], g = { add: E, remove: b, addDelegate: function(I, P, k, G, R) {
        var q = uo(R);
        if (!u[k]) {
          u[k] = [];
          for (var X = 0; X < f.length; X++) {
            var F = f[X];
            E(F, k, w), E(F, k, O, true);
          }
        }
        var ne = u[k], oe = Me.find(ne, function(fe) {
          return fe.selector === I && fe.context === P;
        });
        oe || (oe = { selector: I, context: P, listeners: [] }, ne.push(oe)), oe.listeners.push([G, q]);
      }, removeDelegate: function(I, P, k, G, R) {
        var q, X = uo(R), F = u[k], ne = false;
        if (F)
          for (q = F.length - 1; q >= 0; q--) {
            var oe = F[q];
            if (oe.selector === I && oe.context === P) {
              for (var fe = oe.listeners, Pe = fe.length - 1; Pe >= 0; Pe--) {
                var Fe = pl(fe[Pe], 2), Se = Fe[0], He = Fe[1], hr = He.capture, Kr = He.passive;
                if (Se === G && hr === X.capture && Kr === X.passive) {
                  fe.splice(Pe, 1), fe.length || (F.splice(q, 1), b(P, k, w), b(P, k, O, true)), ne = true;
                  break;
                }
              }
              if (ne)
                break;
            }
          }
      }, delegateListener: w, delegateUseCapture: O, delegatedEvents: u, documents: f, targets: l, supportsOptions: false, supportsPassive: false };
      function E(I, P, k, G) {
        var R = uo(G), q = Me.find(l, function(X) {
          return X.eventTarget === I;
        });
        q || (q = { eventTarget: I, events: {} }, l.push(q)), q.events[P] || (q.events[P] = []), I.addEventListener && !Me.contains(q.events[P], k) && (I.addEventListener(P, k, g.supportsOptions ? R : R.capture), q.events[P].push(k));
      }
      __name(E, "E");
      c(E, "s");
      function b(I, P, k, G) {
        var R = uo(G), q = Me.findIndex(l, function(Pe) {
          return Pe.eventTarget === I;
        }), X = l[q];
        if (X && X.events)
          if (P !== "all") {
            var F = false, ne = X.events[P];
            if (ne) {
              if (k === "all") {
                for (var oe = ne.length - 1; oe >= 0; oe--)
                  b(I, P, ne[oe], R);
                return;
              }
              for (var fe = 0; fe < ne.length; fe++)
                if (ne[fe] === k) {
                  I.removeEventListener(P, k, g.supportsOptions ? R : R.capture), ne.splice(fe, 1), ne.length === 0 && (delete X.events[P], F = true);
                  break;
                }
            }
            F && !Object.keys(X.events).length && l.splice(q, 1);
          } else
            for (P in X.events)
              X.events.hasOwnProperty(P) && b(I, P, "all");
      }
      __name(b, "b");
      c(b, "l");
      function w(I, P) {
        for (var k = uo(P), G = new Dm(I), R = u[I.type], q = pl(Q.getEventTargets(I), 1)[0], X = q; s.default.element(X); ) {
          for (var F = 0; F < R.length; F++) {
            var ne = R[F], oe = ne.selector, fe = ne.context;
            if (z.matchesSelector(X, oe) && z.nodeContains(fe, q) && z.nodeContains(fe, X)) {
              var Pe = ne.listeners;
              G.currentTarget = X;
              for (var Fe = 0; Fe < Pe.length; Fe++) {
                var Se = pl(Pe[Fe], 2), He = Se[0], hr = Se[1], Kr = hr.capture, _l = hr.passive;
                Kr === k.capture && _l === k.passive && He(G);
              }
            }
          }
          X = z.parentNode(X);
        }
      }
      __name(w, "w");
      c(w, "u");
      function O(I) {
        return w(I, true);
      }
      __name(O, "O");
      return c(O, "c"), (o = i.document) == null || o.createElement("div").addEventListener("test", null, { get capture() {
        return g.supportsOptions = true;
      }, get passive() {
        return g.supportsPassive = true;
      } }), i.events = g, g;
    } };
    Ea.default = Nm;
    var Sa = {};
    Object.defineProperty(Sa, "__esModule", { value: true }), Sa.default = void 0;
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
      var o = i.pointerType, l = i.eventType, u = i.eventTarget, f = i.scope;
      if (!/down|start/i.test(l))
        return null;
      for (var g = 0; g < f.interactions.list.length; g++) {
        var E = f.interactions.list[g], b = u;
        if (E.simulation && E.simulation.allowResume && E.pointerType === o)
          for (; b; ) {
            if (b === E.element)
              return E;
            b = z.parentNode(b);
          }
      }
      return null;
    }, mouseOrPen: function(i) {
      var o, l = i.pointerId, u = i.pointerType, f = i.eventType, g = i.scope;
      if (u !== "mouse" && u !== "pen")
        return null;
      for (var E = 0; E < g.interactions.list.length; E++) {
        var b = g.interactions.list[E];
        if (b.pointerType === u) {
          if (b.simulation && !Sc(b, l))
            continue;
          if (b.interacting())
            return b;
          o || (o = b);
        }
      }
      if (o)
        return o;
      for (var w = 0; w < g.interactions.list.length; w++) {
        var O = g.interactions.list[w];
        if (!(O.pointerType !== u || /down/i.test(f) && O.simulation))
          return O;
      }
      return null;
    }, hasPointer: function(i) {
      for (var o = i.pointerId, l = i.scope, u = 0; u < l.interactions.list.length; u++) {
        var f = l.interactions.list[u];
        if (Sc(f, o))
          return f;
      }
      return null;
    }, idle: function(i) {
      for (var o = i.pointerType, l = i.scope, u = 0; u < l.interactions.list.length; u++) {
        var f = l.interactions.list[u];
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
    function Sc(i, o) {
      return i.pointers.some(function(l) {
        return l.id === o;
      });
    }
    __name(Sc, "Sc");
    c(Sc, "Ln");
    var km = Ca;
    Sa.default = km;
    var Ta = {};
    function dl(i) {
      return dl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, dl(i);
    }
    __name(dl, "dl");
    c(dl, "Nn");
    function Cc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, E, b = [], w = true, O = false;
          try {
            for (f = f.call(l); !(w = (g = f.next()).done) && (b.push(g.value), !u || b.length !== u); w = true)
              ;
          } catch (I) {
            O = true, E = I;
          } finally {
            try {
              w || f.return == null || f.return();
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
            return Tc(l, u);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? Tc(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Cc, "Cc");
    c(Cc, "qn");
    function Tc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Tc, "Tc");
    c(Tc, "Gn");
    function Lm(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Lm, "Lm");
    c(Lm, "$n");
    function Gm(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Gm, "Gm");
    c(Gm, "Hn");
    function fl(i, o) {
      return fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, fl(i, o);
    }
    __name(fl, "fl");
    c(fl, "Kn");
    function jm(i, o) {
      if (o && (dl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(l) {
        if (l === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return l;
      }(i);
    }
    __name(jm, "jm");
    c(jm, "Zn");
    function Oa(i) {
      return Oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, Oa(i);
    }
    __name(Oa, "Oa");
    c(Oa, "Jn"), Object.defineProperty(Ta, "__esModule", { value: true }), Ta.default = void 0;
    var hl = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Oc(i, o) {
      return function(l) {
        var u = o.interactions.list, f = Q.getPointerType(l), g = Cc(Q.getEventTargets(l), 2), E = g[0], b = g[1], w = [];
        if (/^touch/.test(l.type)) {
          o.prevTouchTime = o.now();
          for (var O = 0; O < l.changedTouches.length; O++) {
            var I = l.changedTouches[O], P = { pointer: I, pointerId: Q.getPointerId(I), pointerType: f, eventType: l.type, eventTarget: E, curEventTarget: b, scope: o }, k = Mc(P);
            w.push([P.pointer, P.eventTarget, P.curEventTarget, k]);
          }
        } else {
          var G = false;
          if (!$.default.supportsPointerEvent && /mouse/.test(l.type)) {
            for (var R = 0; R < u.length && !G; R++)
              G = u[R].pointerType !== "mouse" && u[R].pointerIsDown;
            G = G || o.now() - o.prevTouchTime < 500 || l.timeStamp === 0;
          }
          if (!G) {
            var q = { pointer: l, pointerId: Q.getPointerId(l), pointerType: f, eventType: l.type, curEventTarget: b, eventTarget: E, scope: o }, X = Mc(q);
            w.push([q.pointer, q.eventTarget, q.curEventTarget, X]);
          }
        }
        for (var F = 0; F < w.length; F++) {
          var ne = Cc(w[F], 4), oe = ne[0], fe = ne[1], Pe = ne[2];
          ne[3][i](oe, l, fe, Pe);
        }
      };
    }
    __name(Oc, "Oc");
    c(Oc, "tr");
    function Mc(i) {
      var o = i.pointerType, l = i.scope, u = { interaction: Sa.default.search(i), searchDetails: i };
      return l.fire("interactions:find", u), u.interaction || l.interactions.new({ pointerType: o });
    }
    __name(Mc, "Mc");
    c(Mc, "er");
    function ml(i, o) {
      var l = i.doc, u = i.scope, f = i.options, g = u.interactions.docEvents, E = u.events, b = E[o];
      for (var w in u.browser.isIOS && !f.events && (f.events = { passive: false }), E.delegatedEvents)
        b(l, w, E.delegateListener), b(l, w, E.delegateUseCapture, true);
      for (var O = f && f.events, I = 0; I < g.length; I++) {
        var P = g[I];
        b(l, P.type, P.listener, O);
      }
    }
    __name(ml, "ml");
    c(ml, "nr");
    var Bm = { id: "core/interactions", install: function(i) {
      for (var o = {}, l = 0; l < hl.length; l++) {
        var u = hl[l];
        o[u] = Oc(u, i);
      }
      var f, g = $.default.pEventTypes;
      function E() {
        for (var b = 0; b < i.interactions.list.length; b++) {
          var w = i.interactions.list[b];
          if (w.pointerIsDown && w.pointerType === "touch" && !w._interacting)
            for (var O = function() {
              var P = w.pointers[I];
              i.documents.some(function(k) {
                var G = k.doc;
                return (0, z.nodeContains)(G, P.downTarget);
              }) || w.removePointer(P.pointer, P.event);
            }, I = 0; I < w.pointers.length; I++)
              O();
        }
      }
      __name(E, "E");
      c(E, "a"), (f = T.default.PointerEvent ? [{ type: g.down, listener: E }, { type: g.down, listener: o.pointerDown }, { type: g.move, listener: o.pointerMove }, { type: g.up, listener: o.pointerUp }, { type: g.cancel, listener: o.pointerUp }] : [{ type: "mousedown", listener: o.pointerDown }, { type: "mousemove", listener: o.pointerMove }, { type: "mouseup", listener: o.pointerUp }, { type: "touchstart", listener: E }, { type: "touchstart", listener: o.pointerDown }, { type: "touchmove", listener: o.pointerMove }, { type: "touchend", listener: o.pointerUp }, { type: "touchcancel", listener: o.pointerUp }]).push({ type: "blur", listener: function(b) {
        for (var w = 0; w < i.interactions.list.length; w++)
          i.interactions.list[w].documentBlur(b);
      } }), i.prevTouchTime = 0, i.Interaction = function(b) {
        (function(R, q) {
          if (typeof q != "function" && q !== null)
            throw new TypeError("Super expression must either be null or a function");
          R.prototype = Object.create(q && q.prototype, { constructor: { value: R, writable: true, configurable: true } }), Object.defineProperty(R, "prototype", { writable: false }), q && fl(R, q);
        })(G, b);
        var w, O, I, P, k = (I = G, P = function() {
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
          var R, q = Oa(I);
          if (P) {
            var X = Oa(this).constructor;
            R = Reflect.construct(q, arguments, X);
          } else
            R = q.apply(this, arguments);
          return jm(this, R);
        });
        function G() {
          return Lm(this, G), k.apply(this, arguments);
        }
        __name(G, "G");
        return c(G, "s"), w = G, (O = [{ key: "pointerMoveTolerance", get: function() {
          return i.interactions.pointerMoveTolerance;
        }, set: function(R) {
          i.interactions.pointerMoveTolerance = R;
        } }, { key: "_now", value: function() {
          return i.now();
        } }]) && Gm(w.prototype, O), Object.defineProperty(w, "prototype", { writable: false }), G;
      }(Ft.default), i.interactions = { list: [], new: function(b) {
        b.scopeFire = function(O, I) {
          return i.fire(O, I);
        };
        var w = new i.Interaction(b);
        return i.interactions.list.push(w), w;
      }, listeners: o, docEvents: f, pointerMoveTolerance: 1 }, i.usePlugin(vi.default);
    }, listeners: { "scope:add-document": function(i) {
      return ml(i, "add");
    }, "scope:remove-document": function(i) {
      return ml(i, "remove");
    }, "interactable:unset": function(i, o) {
      for (var l = i.interactable, u = o.interactions.list.length - 1; u >= 0; u--) {
        var f = o.interactions.list[u];
        f.interactable === l && (f.stop(), o.fire("interactions:destroy", { interaction: f }), f.destroy(), o.interactions.list.length > 2 && o.interactions.list.splice(u, 1));
      }
    } }, onDocSignal: ml, doOnInteractions: Oc, methodNames: hl }, Hm = Bm;
    Ta.default = Hm;
    var co = {};
    function vl(i) {
      return vl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, vl(i);
    }
    __name(vl, "vl");
    c(vl, "ar");
    function po() {
      return po = typeof Reflect != "undefined" && Reflect.get ? Reflect.get.bind() : function(i, o, l) {
        var u = $m(i, o);
        if (u) {
          var f = Object.getOwnPropertyDescriptor(u, o);
          return f.get ? f.get.call(arguments.length < 3 ? i : l) : f.value;
        }
      }, po.apply(this, arguments);
    }
    __name(po, "po");
    c(po, "sr");
    function $m(i, o) {
      for (; !Object.prototype.hasOwnProperty.call(i, o) && (i = mn(i)) !== null; )
        ;
      return i;
    }
    __name($m, "$m");
    c($m, "lr");
    function gl(i, o) {
      return gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, gl(i, o);
    }
    __name(gl, "gl");
    c(gl, "ur");
    function qm(i, o) {
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
    __name(qm, "qm");
    c(qm, "cr");
    function mn(i) {
      return mn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, mn(i);
    }
    __name(mn, "mn");
    c(mn, "fr");
    function Ic(i, o) {
      if (!(i instanceof o))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Ic, "Ic");
    c(Ic, "dr");
    function Ac(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(Ac, "Ac");
    c(Ac, "pr");
    function Pc(i, o, l) {
      return o && Ac(i.prototype, o), l && Ac(i, l), Object.defineProperty(i, "prototype", { writable: false }), i;
    }
    __name(Pc, "Pc");
    c(Pc, "vr");
    function St(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(St, "St");
    c(St, "hr"), Object.defineProperty(co, "__esModule", { value: true }), co.Scope = void 0, co.initScope = _c;
    var Fm = function() {
      function i() {
        var o = this;
        Ic(this, i), St(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), St(this, "isInitialized", false), St(this, "listenerMaps", []), St(this, "browser", $.default), St(this, "defaults", (0, Hn.default)(ro.defaults)), St(this, "Eventable", ao.Eventable), St(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), St(this, "interactStatic", (0, ll.createInteractStatic)(this)), St(this, "InteractEvent", no.InteractEvent), St(this, "Interactable", void 0), St(this, "interactables", new wa.InteractableSet(this)), St(this, "_win", void 0), St(this, "document", void 0), St(this, "window", void 0), St(this, "documents", []), St(this, "_plugins", { list: [], map: {} }), St(this, "onWindowUnload", function(u) {
          return o.removeDocument(u.target);
        });
        var l = this;
        this.Interactable = function(u) {
          (function(w, O) {
            if (typeof O != "function" && O !== null)
              throw new TypeError("Super expression must either be null or a function");
            w.prototype = Object.create(O && O.prototype, { constructor: { value: w, writable: true, configurable: true } }), Object.defineProperty(w, "prototype", { writable: false }), O && gl(w, O);
          })(b, u);
          var f, g, E = (f = b, g = function() {
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
            var w, O = mn(f);
            if (g) {
              var I = mn(this).constructor;
              w = Reflect.construct(O, arguments, I);
            } else
              w = O.apply(this, arguments);
            return qm(this, w);
          });
          function b() {
            return Ic(this, b), E.apply(this, arguments);
          }
          __name(b, "b");
          return c(b, "i"), Pc(b, [{ key: "_defaults", get: function() {
            return l.defaults;
          } }, { key: "set", value: function(w) {
            return po(mn(b.prototype), "set", this).call(this, w), l.fire("interactable:set", { options: w, interactable: this }), this;
          } }, { key: "unset", value: function() {
            po(mn(b.prototype), "unset", this).call(this);
            var w = l.interactables.list.indexOf(this);
            w < 0 || (po(mn(b.prototype), "unset", this).call(this), l.interactables.list.splice(w, 1), l.fire("interactable:unset", { interactable: this }));
          } }]), b;
        }(xa.Interactable);
      }
      __name(i, "i");
      return c(i, "t"), Pc(i, [{ key: "addListeners", value: function(o, l) {
        this.listenerMaps.push({ id: l, map: o });
      } }, { key: "fire", value: function(o, l) {
        for (var u = 0; u < this.listenerMaps.length; u++) {
          var f = this.listenerMaps[u].map[o];
          if (f && f(l, this, o) === false)
            return false;
        }
      } }, { key: "init", value: function(o) {
        return this.isInitialized ? this : _c(this, o);
      } }, { key: "pluginIsInstalled", value: function(o) {
        return this._plugins.map[o.id] || this._plugins.list.indexOf(o) !== -1;
      } }, { key: "usePlugin", value: function(o, l) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o))
          return this;
        if (o.id && (this._plugins.map[o.id] = o), this._plugins.list.push(o), o.install && o.install(this, l), o.listeners && o.before) {
          for (var u = 0, f = this.listenerMaps.length, g = o.before.reduce(function(b, w) {
            return b[w] = true, b[zc(w)] = true, b;
          }, {}); u < f; u++) {
            var E = this.listenerMaps[u].id;
            if (g[E] || g[zc(E)])
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
        var l = this.getDocIndex(o), u = r.getWindow(o), f = this.documents[l].options;
        this.events.remove(u, "unload", this.onWindowUnload), this.documents.splice(l, 1), this.events.documents.splice(l, 1), this.fire("scope:remove-document", { doc: o, window: u, scope: this, options: f });
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
    function _c(i, o) {
      return i.isInitialized = true, s.default.window(o) && r.init(o), T.default.init(o), $.default.init(o), Pt.default.init(o), i.window = o, i.document = o.document, i.usePlugin(Ta.default), i.usePlugin(Ea.default), i;
    }
    __name(_c, "_c");
    c(_c, "yr");
    function zc(i) {
      return i && i.replace(/\/.*$/, "");
    }
    __name(zc, "zc");
    c(zc, "mr"), co.Scope = Fm;
    var bl = {}, ct = {};
    Object.defineProperty(ct, "__esModule", { value: true });
    var Um = {};
    ct.default = void 0, Object.keys(bl).forEach(function(i) {
      i !== "default" && i !== "__esModule" && (Object.prototype.hasOwnProperty.call(Um, i) || i in ct && ct[i] === bl[i] || Object.defineProperty(ct, i, { enumerable: true, get: function() {
        return bl[i];
      } }));
    });
    var Rc = new co.Scope(), Wm = Rc.interactStatic;
    ct.default = Wm;
    var Vm = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    Rc.init(Vm);
    var Ma = {};
    Object.defineProperty(Ma, "__esModule", { value: true }), Ma.default = void 0, Ma.default = function() {
    };
    var Ia = {};
    Object.defineProperty(Ia, "__esModule", { value: true }), Ia.default = void 0, Ia.default = function() {
    };
    var Aa = {};
    function Dc(i, o) {
      return function(l) {
        if (Array.isArray(l))
          return l;
      }(i) || function(l, u) {
        var f = l == null ? null : typeof Symbol != "undefined" && l[Symbol.iterator] || l["@@iterator"];
        if (f != null) {
          var g, E, b = [], w = true, O = false;
          try {
            for (f = f.call(l); !(w = (g = f.next()).done) && (b.push(g.value), !u || b.length !== u); w = true)
              ;
          } catch (I) {
            O = true, E = I;
          } finally {
            try {
              w || f.return == null || f.return();
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
            return Nc(l, u);
          var f = Object.prototype.toString.call(l).slice(8, -1);
          return f === "Object" && l.constructor && (f = l.constructor.name), f === "Map" || f === "Set" ? Array.from(l) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? Nc(l, u) : void 0;
        }
      }(i, o) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Dc, "Dc");
    c(Dc, "jr");
    function Nc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Nc, "Nc");
    c(Nc, "Mr"), Object.defineProperty(Aa, "__esModule", { value: true }), Aa.default = void 0, Aa.default = function(i) {
      var o = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(u) {
        var f = Dc(u, 2), g = f[0], E = f[1];
        return g in i || E in i;
      }), l = c(function(u, f) {
        for (var g = i.range, E = i.limits, b = E === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : E, w = i.offset, O = w === void 0 ? { x: 0, y: 0 } : w, I = { range: g, grid: i, x: null, y: null }, P = 0; P < o.length; P++) {
          var k = Dc(o[P], 2), G = k[0], R = k[1], q = Math.round((u - O.x) / i[G]), X = Math.round((f - O.y) / i[R]);
          I[G] = Math.max(b.left, Math.min(b.right, q * i[G] + O.x)), I[R] = Math.max(b.top, Math.min(b.bottom, X * i[R] + O.y));
        }
        return I;
      }, "n");
      return l.grid = i, l.coordFields = o, l;
    };
    var fo = {};
    Object.defineProperty(fo, "__esModule", { value: true }), Object.defineProperty(fo, "edgeTarget", { enumerable: true, get: function() {
      return Ma.default;
    } }), Object.defineProperty(fo, "elements", { enumerable: true, get: function() {
      return Ia.default;
    } }), Object.defineProperty(fo, "grid", { enumerable: true, get: function() {
      return Aa.default;
    } });
    var Pa = {};
    Object.defineProperty(Pa, "__esModule", { value: true }), Pa.default = void 0;
    var Ym = { id: "snappers", install: function(i) {
      var o = i.interactStatic;
      o.snappers = (0, W.default)(o.snappers || {}, fo), o.createSnapGrid = o.snappers.grid;
    } }, Xm = Ym;
    Pa.default = Xm;
    var bi = {};
    function kc(i, o) {
      var l = Object.keys(i);
      if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(i);
        o && (u = u.filter(function(f) {
          return Object.getOwnPropertyDescriptor(i, f).enumerable;
        })), l.push.apply(l, u);
      }
      return l;
    }
    __name(kc, "kc");
    c(kc, "Cr");
    function yl(i) {
      for (var o = 1; o < arguments.length; o++) {
        var l = arguments[o] != null ? arguments[o] : {};
        o % 2 ? kc(Object(l), true).forEach(function(u) {
          Zm(i, u, l[u]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : kc(Object(l)).forEach(function(u) {
          Object.defineProperty(i, u, Object.getOwnPropertyDescriptor(l, u));
        });
      }
      return i;
    }
    __name(yl, "yl");
    c(yl, "Rr");
    function Zm(i, o, l) {
      return o in i ? Object.defineProperty(i, o, { value: l, enumerable: true, configurable: true, writable: true }) : i[o] = l, i;
    }
    __name(Zm, "Zm");
    c(Zm, "Fr"), Object.defineProperty(bi, "__esModule", { value: true }), bi.default = bi.aspectRatio = void 0;
    var Lc = { start: function(i) {
      var o = i.state, l = i.rect, u = i.edges, f = i.pageCoords, g = o.options.ratio, E = o.options, b = E.equalDelta, w = E.modifiers;
      g === "preserve" && (g = l.width / l.height), o.startCoords = (0, W.default)({}, f), o.startRect = (0, W.default)({}, l), o.ratio = g, o.equalDelta = b;
      var O = o.linkedEdges = { top: u.top || u.left && !u.bottom, left: u.left || u.top && !u.right, bottom: u.bottom || u.right && !u.top, right: u.right || u.bottom && !u.left };
      if (o.xIsPrimaryAxis = !(!u.left && !u.right), o.equalDelta) {
        var I = (O.left ? 1 : -1) * (O.top ? 1 : -1);
        o.edgeSign = { x: I, y: I };
      } else
        o.edgeSign = { x: O.left ? -1 : 1, y: O.top ? -1 : 1 };
      if ((0, W.default)(i.edges, O), w && w.length) {
        var P = new $n.default(i.interaction);
        P.copyFrom(i.interaction.modification), P.prepareStates(w), o.subModification = P, P.startAll(yl({}, i));
      }
    }, set: function(i) {
      var o = i.state, l = i.rect, u = i.coords, f = (0, W.default)({}, u), g = o.equalDelta ? Km : Qm;
      if (g(o, o.xIsPrimaryAxis, u, l), !o.subModification)
        return null;
      var E = (0, W.default)({}, l);
      (0, ue.addEdges)(o.linkedEdges, E, { x: u.x - f.x, y: u.y - f.y });
      var b = o.subModification.setAll(yl(yl({}, i), {}, { rect: E, edges: o.linkedEdges, pageCoords: u, prevCoords: u, prevRect: E })), w = b.delta;
      return b.changed && (g(o, Math.abs(w.x) > Math.abs(w.y), b.coords, b.rect), (0, W.default)(u, b.coords)), b.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Km(i, o, l) {
      var u = i.startCoords, f = i.edgeSign;
      o ? l.y = u.y + (l.x - u.x) * f.y : l.x = u.x + (l.y - u.y) * f.x;
    }
    __name(Km, "Km");
    c(Km, "Br");
    function Qm(i, o, l, u) {
      var f = i.startRect, g = i.startCoords, E = i.ratio, b = i.edgeSign;
      if (o) {
        var w = u.width / E;
        l.y = g.y + (w - f.height) * b.y;
      } else {
        var O = u.height * E;
        l.x = g.x + (O - f.width) * b.x;
      }
    }
    __name(Qm, "Qm");
    c(Qm, "Yr"), bi.aspectRatio = Lc;
    var Jm = (0, Et.makeModifier)(Lc, "aspectRatio");
    bi.default = Jm;
    var Un = {};
    Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0;
    var Gc = c(function() {
    }, "Ur");
    Gc._defaults = {};
    var ev = Gc;
    Un.default = ev;
    var xl = {};
    Object.defineProperty(xl, "__esModule", { value: true }), Object.defineProperty(xl, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var Gt = {};
    function wl(i, o, l) {
      return s.default.func(i) ? ue.resolveRectLike(i, o.interactable, o.element, [l.x, l.y, o]) : ue.resolveRectLike(i, o.interactable, o.element);
    }
    __name(wl, "wl");
    c(wl, "Gr"), Object.defineProperty(Gt, "__esModule", { value: true }), Gt.default = void 0, Gt.getRestrictionRect = wl, Gt.restrict = void 0;
    var jc = { start: function(i) {
      var o = i.rect, l = i.startOffset, u = i.state, f = i.interaction, g = i.pageCoords, E = u.options, b = E.elementRect, w = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, E.offset || {});
      if (o && b) {
        var O = wl(E.restriction, f, g);
        if (O) {
          var I = O.right - O.left - o.width, P = O.bottom - O.top - o.height;
          I < 0 && (w.left += I, w.right += I), P < 0 && (w.top += P, w.bottom += P);
        }
        w.left += l.left - o.width * b.left, w.top += l.top - o.height * b.top, w.right += l.right - o.width * (1 - b.right), w.bottom += l.bottom - o.height * (1 - b.bottom);
      }
      u.offset = w;
    }, set: function(i) {
      var o = i.coords, l = i.interaction, u = i.state, f = u.options, g = u.offset, E = wl(f.restriction, l, o);
      if (E) {
        var b = ue.xywhToTlbr(E);
        o.x = Math.max(Math.min(b.right - g.right, o.x), b.left + g.left), o.y = Math.max(Math.min(b.bottom - g.bottom, o.y), b.top + g.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Gt.restrict = jc;
    var tv = (0, Et.makeModifier)(jc, "restrict");
    Gt.default = tv;
    var Dr = {};
    Object.defineProperty(Dr, "__esModule", { value: true }), Dr.restrictEdges = Dr.default = void 0;
    var Bc = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, Hc = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function $c(i, o) {
      for (var l = ["top", "left", "bottom", "right"], u = 0; u < l.length; u++) {
        var f = l[u];
        f in i || (i[f] = o[f]);
      }
      return i;
    }
    __name($c, "$c");
    c($c, "Qr");
    var qc = { noInner: Bc, noOuter: Hc, start: function(i) {
      var o, l = i.interaction, u = i.startOffset, f = i.state, g = f.options;
      if (g) {
        var E = (0, Gt.getRestrictionRect)(g.offset, l, l.coords.start.page);
        o = ue.rectToXY(E);
      }
      o = o || { x: 0, y: 0 }, f.offset = { top: o.y + u.top, left: o.x + u.left, bottom: o.y - u.bottom, right: o.x - u.right };
    }, set: function(i) {
      var o = i.coords, l = i.edges, u = i.interaction, f = i.state, g = f.offset, E = f.options;
      if (l) {
        var b = (0, W.default)({}, o), w = (0, Gt.getRestrictionRect)(E.inner, u, b) || {}, O = (0, Gt.getRestrictionRect)(E.outer, u, b) || {};
        $c(w, Bc), $c(O, Hc), l.top ? o.y = Math.min(Math.max(O.top + g.top, b.y), w.top + g.top) : l.bottom && (o.y = Math.max(Math.min(O.bottom + g.bottom, b.y), w.bottom + g.bottom)), l.left ? o.x = Math.min(Math.max(O.left + g.left, b.x), w.left + g.left) : l.right && (o.x = Math.max(Math.min(O.right + g.right, b.x), w.right + g.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    Dr.restrictEdges = qc;
    var rv = (0, Et.makeModifier)(qc, "restrictEdges");
    Dr.default = rv;
    var yi = {};
    Object.defineProperty(yi, "__esModule", { value: true }), yi.restrictRect = yi.default = void 0;
    var nv = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(i) {
    } }, Gt.restrict.defaults), Fc = { start: Gt.restrict.start, set: Gt.restrict.set, defaults: nv };
    yi.restrictRect = Fc;
    var iv = (0, Et.makeModifier)(Fc, "restrictRect");
    yi.default = iv;
    var xi = {};
    Object.defineProperty(xi, "__esModule", { value: true }), xi.restrictSize = xi.default = void 0;
    var ov = { width: -1 / 0, height: -1 / 0 }, av = { width: 1 / 0, height: 1 / 0 }, Uc = { start: function(i) {
      return Dr.restrictEdges.start(i);
    }, set: function(i) {
      var o = i.interaction, l = i.state, u = i.rect, f = i.edges, g = l.options;
      if (f) {
        var E = ue.tlbrToXywh((0, Gt.getRestrictionRect)(g.min, o, i.coords)) || ov, b = ue.tlbrToXywh((0, Gt.getRestrictionRect)(g.max, o, i.coords)) || av;
        l.options = { endOnly: g.endOnly, inner: (0, W.default)({}, Dr.restrictEdges.noInner), outer: (0, W.default)({}, Dr.restrictEdges.noOuter) }, f.top ? (l.options.inner.top = u.bottom - E.height, l.options.outer.top = u.bottom - b.height) : f.bottom && (l.options.inner.bottom = u.top + E.height, l.options.outer.bottom = u.top + b.height), f.left ? (l.options.inner.left = u.right - E.width, l.options.outer.left = u.right - b.width) : f.right && (l.options.inner.right = u.left + E.width, l.options.outer.right = u.left + b.width), Dr.restrictEdges.set(i), l.options = g;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    xi.restrictSize = Uc;
    var sv = (0, Et.makeModifier)(Uc, "restrictSize");
    xi.default = sv;
    var El = {};
    Object.defineProperty(El, "__esModule", { value: true }), Object.defineProperty(El, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var vn = {};
    Object.defineProperty(vn, "__esModule", { value: true }), vn.snap = vn.default = void 0;
    var Wc = { start: function(i) {
      var o, l = i.interaction, u = i.interactable, f = i.element, g = i.rect, E = i.state, b = i.startOffset, w = E.options, O = w.offsetWithOrigin ? function(k) {
        var G = k.interaction.element;
        return (0, ue.rectToXY)((0, ue.resolveRectLike)(k.state.options.origin, null, null, [G])) || (0, De.default)(k.interactable, G, k.interaction.prepared.name);
      }(i) : { x: 0, y: 0 };
      if (w.offset === "startCoords")
        o = { x: l.coords.start.page.x, y: l.coords.start.page.y };
      else {
        var I = (0, ue.resolveRectLike)(w.offset, u, f, [l]);
        (o = (0, ue.rectToXY)(I) || { x: 0, y: 0 }).x += O.x, o.y += O.y;
      }
      var P = w.relativePoints;
      E.offsets = g && P && P.length ? P.map(function(k, G) {
        return { index: G, relativePoint: k, x: b.left - g.width * k.x + o.x, y: b.top - g.height * k.y + o.y };
      }) : [{ index: 0, relativePoint: null, x: o.x, y: o.y }];
    }, set: function(i) {
      var o = i.interaction, l = i.coords, u = i.state, f = u.options, g = u.offsets, E = (0, De.default)(o.interactable, o.element, o.prepared.name), b = (0, W.default)({}, l), w = [];
      f.offsetWithOrigin || (b.x -= E.x, b.y -= E.y);
      for (var O = 0; O < g.length; O++)
        for (var I = g[O], P = b.x - I.x, k = b.y - I.y, G = 0, R = f.targets.length; G < R; G++) {
          var q, X = f.targets[G];
          (q = s.default.func(X) ? X(P, k, o._proxy, I, G) : X) && w.push({ x: (s.default.number(q.x) ? q.x : P) + I.x, y: (s.default.number(q.y) ? q.y : k) + I.y, range: s.default.number(q.range) ? q.range : f.range, source: X, index: G, offset: I });
        }
      for (var F = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ne = 0; ne < w.length; ne++) {
        var oe = w[ne], fe = oe.range, Pe = oe.x - b.x, Fe = oe.y - b.y, Se = (0, Ze.default)(Pe, Fe), He = Se <= fe;
        fe === 1 / 0 && F.inRange && F.range !== 1 / 0 && (He = false), F.target && !(He ? F.inRange && fe !== 1 / 0 ? Se / fe < F.distance / F.range : fe === 1 / 0 && F.range !== 1 / 0 || Se < F.distance : !F.inRange && Se < F.distance) || (F.target = oe, F.distance = Se, F.range = fe, F.inRange = He, F.delta.x = Pe, F.delta.y = Fe);
      }
      return F.inRange && (l.x = F.target.x, l.y = F.target.y), u.closest = F, F;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    vn.snap = Wc;
    var lv = (0, Et.makeModifier)(Wc, "snap");
    vn.default = lv;
    var Zr = {};
    function Vc(i, o) {
      (o == null || o > i.length) && (o = i.length);
      for (var l = 0, u = Array(o); l < o; l++)
        u[l] = i[l];
      return u;
    }
    __name(Vc, "Vc");
    c(Vc, "yo"), Object.defineProperty(Zr, "__esModule", { value: true }), Zr.snapSize = Zr.default = void 0;
    var Yc = { start: function(i) {
      var o = i.state, l = i.edges, u = o.options;
      if (!l)
        return null;
      i.state = { options: { targets: null, relativePoints: [{ x: l.left ? 0 : 1, y: l.top ? 0 : 1 }], offset: u.offset || "self", origin: { x: 0, y: 0 }, range: u.range } }, o.targetFields = o.targetFields || [["width", "height"], ["x", "y"]], vn.snap.start(i), o.offsets = i.state.offsets, i.state = o;
    }, set: function(i) {
      var o, l, u = i.interaction, f = i.state, g = i.coords, E = f.options, b = f.offsets, w = { x: g.x - b[0].x, y: g.y - b[0].y };
      f.options = (0, W.default)({}, E), f.options.targets = [];
      for (var O = 0; O < (E.targets || []).length; O++) {
        var I = (E.targets || [])[O], P = void 0;
        if (P = s.default.func(I) ? I(w.x, w.y, u) : I) {
          for (var k = 0; k < f.targetFields.length; k++) {
            var G = (o = f.targetFields[k], l = 2, function(F) {
              if (Array.isArray(F))
                return F;
            }(o) || function(F, ne) {
              var oe = F == null ? null : typeof Symbol != "undefined" && F[Symbol.iterator] || F["@@iterator"];
              if (oe != null) {
                var fe, Pe, Fe = [], Se = true, He = false;
                try {
                  for (oe = oe.call(F); !(Se = (fe = oe.next()).done) && (Fe.push(fe.value), !ne || Fe.length !== ne); Se = true)
                    ;
                } catch (hr) {
                  He = true, Pe = hr;
                } finally {
                  try {
                    Se || oe.return == null || oe.return();
                  } finally {
                    if (He)
                      throw Pe;
                  }
                }
                return Fe;
              }
            }(o, l) || function(F, ne) {
              if (F) {
                if (typeof F == "string")
                  return Vc(F, ne);
                var oe = Object.prototype.toString.call(F).slice(8, -1);
                return oe === "Object" && F.constructor && (oe = F.constructor.name), oe === "Map" || oe === "Set" ? Array.from(F) : oe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(oe) ? Vc(F, ne) : void 0;
              }
            }(o, l) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), R = G[0], q = G[1];
            if (R in P || q in P) {
              P.x = P[R], P.y = P[q];
              break;
            }
          }
          f.options.targets.push(P);
        }
      }
      var X = vn.snap.set(i);
      return f.options = E, X;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Zr.snapSize = Yc;
    var uv = (0, Et.makeModifier)(Yc, "snapSize");
    Zr.default = uv;
    var wi = {};
    Object.defineProperty(wi, "__esModule", { value: true }), wi.snapEdges = wi.default = void 0;
    var Xc = { start: function(i) {
      var o = i.edges;
      return o ? (i.state.targetFields = i.state.targetFields || [[o.left ? "left" : "right", o.top ? "top" : "bottom"]], Zr.snapSize.start(i)) : null;
    }, set: Zr.snapSize.set, defaults: (0, W.default)((0, Hn.default)(Zr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    wi.snapEdges = Xc;
    var cv = (0, Et.makeModifier)(Xc, "snapEdges");
    wi.default = cv;
    var Sl = {};
    Object.defineProperty(Sl, "__esModule", { value: true }), Object.defineProperty(Sl, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var Cl = {};
    Object.defineProperty(Cl, "__esModule", { value: true }), Object.defineProperty(Cl, "default", { enumerable: true, get: function() {
      return Un.default;
    } });
    var Ei = {};
    Object.defineProperty(Ei, "__esModule", { value: true }), Ei.default = void 0;
    var pv = { aspectRatio: bi.default, restrictEdges: Dr.default, restrict: Gt.default, restrictRect: yi.default, restrictSize: xi.default, snapEdges: wi.default, snap: vn.default, snapSize: Zr.default, spring: Sl.default, avoid: xl.default, transform: Cl.default, rubberband: El.default };
    Ei.default = pv;
    var _a = {};
    Object.defineProperty(_a, "__esModule", { value: true }), _a.default = void 0;
    var dv = { id: "modifiers", install: function(i) {
      var o = i.interactStatic;
      for (var l in i.usePlugin(Et.default), i.usePlugin(Pa.default), o.modifiers = Ei.default, Ei.default) {
        var u = Ei.default[l], f = u._defaults, g = u._methods;
        f._methods = g, i.defaults.perAction[l] = f;
      }
    } }, fv = dv;
    _a.default = fv;
    var Wn = {};
    function Tl(i) {
      return Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Tl(i);
    }
    __name(Tl, "Tl");
    c(Tl, "Io");
    function hv(i, o) {
      for (var l = 0; l < o.length; l++) {
        var u = o[l];
        u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(i, u.key, u);
      }
    }
    __name(hv, "hv");
    c(hv, "Do");
    function Ol(i, o) {
      return Ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, u) {
        return l.__proto__ = u, l;
      }, Ol(i, o);
    }
    __name(Ol, "Ol");
    c(Ol, "Ao");
    function mv(i, o) {
      if (o && (Tl(o) === "object" || typeof o == "function"))
        return o;
      if (o !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ml(i);
    }
    __name(mv, "mv");
    c(mv, "zo");
    function Ml(i) {
      if (i === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return i;
    }
    __name(Ml, "Ml");
    c(Ml, "Co");
    function za(i) {
      return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      }, za(i);
    }
    __name(za, "za");
    c(za, "Ro"), Object.defineProperty(Wn, "__esModule", { value: true }), Wn.default = Wn.PointerEvent = void 0;
    var vv = function(i) {
      (function(b, w) {
        if (typeof w != "function" && w !== null)
          throw new TypeError("Super expression must either be null or a function");
        b.prototype = Object.create(w && w.prototype, { constructor: { value: b, writable: true, configurable: true } }), Object.defineProperty(b, "prototype", { writable: false }), w && Ol(b, w);
      })(E, i);
      var o, l, u, f, g = (u = E, f = function() {
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
        var b, w = za(u);
        if (f) {
          var O = za(this).constructor;
          b = Reflect.construct(w, arguments, O);
        } else
          b = w.apply(this, arguments);
        return mv(this, b);
      });
      function E(b, w, O, I, P, k) {
        var G;
        if (function(X, F) {
          if (!(X instanceof F))
            throw new TypeError("Cannot call a class as a function");
        }(this, E), G = g.call(this, P), Q.pointerExtend(Ml(G), O), O !== w && Q.pointerExtend(Ml(G), w), G.timeStamp = k, G.originalEvent = O, G.type = b, G.pointerId = Q.getPointerId(w), G.pointerType = Q.getPointerType(w), G.target = I, G.currentTarget = null, b === "tap") {
          var R = P.getPointerIndex(w);
          G.dt = G.timeStamp - P.pointers[R].downTime;
          var q = G.timeStamp - P.tapTime;
          G.double = !!P.prevTap && P.prevTap.type !== "doubletap" && P.prevTap.target === G.target && q < 500;
        } else
          b === "doubletap" && (G.dt = w.timeStamp - P.tapTime, G.double = true);
        return G;
      }
      __name(E, "E");
      return c(E, "a"), o = E, (l = [{ key: "_subtractOrigin", value: function(b) {
        var w = b.x, O = b.y;
        return this.pageX -= w, this.pageY -= O, this.clientX -= w, this.clientY -= O, this;
      } }, { key: "_addOrigin", value: function(b) {
        var w = b.x, O = b.y;
        return this.pageX += w, this.pageY += O, this.clientX += w, this.clientY += O, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && hv(o.prototype, l), Object.defineProperty(o, "prototype", { writable: false }), E;
    }(or.BaseEvent);
    Wn.PointerEvent = Wn.default = vv;
    var ho = {};
    Object.defineProperty(ho, "__esModule", { value: true }), ho.default = void 0;
    var Ra = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(i) {
      i.pointerEvents = Ra, i.defaults.actions.pointerEvents = Ra.defaults, (0, W.default)(i.actions.phaselessTypes, Ra.types);
    }, listeners: { "interactions:new": function(i) {
      var o = i.interaction;
      o.prevTap = null, o.tapTime = 0;
    }, "interactions:update-pointer": function(i) {
      var o = i.down, l = i.pointerInfo;
      !o && l.hold || (l.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(i, o) {
      var l = i.interaction, u = i.pointer, f = i.event, g = i.eventTarget;
      i.duplicate || l.pointerIsDown && !l.pointerWasMoved || (l.pointerIsDown && Il(i), gn({ interaction: l, pointer: u, event: f, eventTarget: g, type: "move" }, o));
    }, "interactions:down": function(i, o) {
      (function(l, u) {
        for (var f = l.interaction, g = l.pointer, E = l.event, b = l.eventTarget, w = l.pointerIndex, O = f.pointers[w].hold, I = z.getPath(b), P = { interaction: f, pointer: g, event: E, eventTarget: b, type: "hold", targets: [], path: I, node: null }, k = 0; k < I.length; k++) {
          var G = I[k];
          P.node = G, u.fire("pointerEvents:collect-targets", P);
        }
        if (P.targets.length) {
          for (var R = 1 / 0, q = 0; q < P.targets.length; q++) {
            var X = P.targets[q].eventable.options.holdDuration;
            X < R && (R = X);
          }
          O.duration = R, O.timeout = setTimeout(function() {
            gn({ interaction: f, eventTarget: b, pointer: g, event: E, type: "hold" }, u);
          }, R);
        }
      })(i, o), gn(i, o);
    }, "interactions:up": function(i, o) {
      Il(i), gn(i, o), function(l, u) {
        var f = l.interaction, g = l.pointer, E = l.event, b = l.eventTarget;
        f.pointerWasMoved || gn({ interaction: f, eventTarget: b, pointer: g, event: E, type: "tap" }, u);
      }(i, o);
    }, "interactions:cancel": function(i, o) {
      Il(i), gn(i, o);
    } }, PointerEvent: Wn.PointerEvent, fire: gn, collectEventTargets: Zc, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function gn(i, o) {
      var l = i.interaction, u = i.pointer, f = i.event, g = i.eventTarget, E = i.type, b = i.targets, w = b === void 0 ? Zc(i, o) : b, O = new Wn.PointerEvent(E, u, f, g, l, o.now());
      o.fire("pointerEvents:new", { pointerEvent: O });
      for (var I = { interaction: l, pointer: u, event: f, eventTarget: g, targets: w, type: E, pointerEvent: O }, P = 0; P < w.length; P++) {
        var k = w[P];
        for (var G in k.props || {})
          O[G] = k.props[G];
        var R = (0, De.default)(k.eventable, k.node);
        if (O._subtractOrigin(R), O.eventable = k.eventable, O.currentTarget = k.node, k.eventable.fire(O), O._addOrigin(R), O.immediatePropagationStopped || O.propagationStopped && P + 1 < w.length && w[P + 1].node !== O.currentTarget)
          break;
      }
      if (o.fire("pointerEvents:fired", I), E === "tap") {
        var q = O.double ? gn({ interaction: l, pointer: u, event: f, eventTarget: g, type: "doubletap" }, o) : O;
        l.prevTap = q, l.tapTime = q.timeStamp;
      }
      return O;
    }
    __name(gn, "gn");
    c(gn, "Yo");
    function Zc(i, o) {
      var l = i.interaction, u = i.pointer, f = i.event, g = i.eventTarget, E = i.type, b = l.getPointerIndex(u), w = l.pointers[b];
      if (E === "tap" && (l.pointerWasMoved || !w || w.downTarget !== g))
        return [];
      for (var O = z.getPath(g), I = { interaction: l, pointer: u, event: f, eventTarget: g, type: E, path: O, targets: [], node: null }, P = 0; P < O.length; P++) {
        var k = O[P];
        I.node = k, o.fire("pointerEvents:collect-targets", I);
      }
      return E === "hold" && (I.targets = I.targets.filter(function(G) {
        var R;
        return G.eventable.options.holdDuration === ((R = l.pointers[b]) == null ? void 0 : R.hold.duration);
      })), I.targets;
    }
    __name(Zc, "Zc");
    c(Zc, "Wo");
    function Il(i) {
      var o = i.interaction, l = i.pointerIndex, u = o.pointers[l].hold;
      u && u.timeout && (clearTimeout(u.timeout), u.timeout = null);
    }
    __name(Il, "Il");
    c(Il, "Lo");
    var gv = Ra;
    ho.default = gv;
    var Da = {};
    function bv(i) {
      var o = i.interaction;
      o.holdIntervalHandle && (clearInterval(o.holdIntervalHandle), o.holdIntervalHandle = null);
    }
    __name(bv, "bv");
    c(bv, "No"), Object.defineProperty(Da, "__esModule", { value: true }), Da.default = void 0;
    var yv = { id: "pointer-events/holdRepeat", install: function(i) {
      i.usePlugin(ho.default);
      var o = i.pointerEvents;
      o.defaults.holdRepeatInterval = 0, o.types.holdrepeat = i.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(i, o) {
      return i["pointerEvents:".concat(o)] = bv, i;
    }, { "pointerEvents:new": function(i) {
      var o = i.pointerEvent;
      o.type === "hold" && (o.count = (o.count || 0) + 1);
    }, "pointerEvents:fired": function(i, o) {
      var l = i.interaction, u = i.pointerEvent, f = i.eventTarget, g = i.targets;
      if (u.type === "hold" && g.length) {
        var E = g[0].eventable.options.holdRepeatInterval;
        E <= 0 || (l.holdIntervalHandle = setTimeout(function() {
          o.pointerEvents.fire({ interaction: l, eventTarget: f, type: "hold", pointer: u, event: u }, o);
        }, E));
      }
    } }) }, xv = yv;
    Da.default = xv;
    var Na = {};
    function wv(i) {
      return (0, W.default)(this.events.options, i), this;
    }
    __name(wv, "wv");
    c(wv, "Ho"), Object.defineProperty(Na, "__esModule", { value: true }), Na.default = void 0;
    var Ev = { id: "pointer-events/interactableTargets", install: function(i) {
      var o = i.Interactable;
      o.prototype.pointerEvents = wv;
      var l = o.prototype._backCompatOption;
      o.prototype._backCompatOption = function(u, f) {
        var g = l.call(this, u, f);
        return g === this && (this.events.options[u] = f), g;
      };
    }, listeners: { "pointerEvents:collect-targets": function(i, o) {
      var l = i.targets, u = i.node, f = i.type, g = i.eventTarget;
      o.interactables.forEachMatch(u, function(E) {
        var b = E.events, w = b.options;
        b.types[f] && b.types[f].length && E.testIgnoreAllow(w, u, g) && l.push({ node: u, eventable: b, props: { interactable: E } });
      });
    }, "interactable:new": function(i) {
      var o = i.interactable;
      o.events.getRect = function(l) {
        return o.getRect(l);
      };
    }, "interactable:set": function(i, o) {
      var l = i.interactable, u = i.options;
      (0, W.default)(l.events.options, o.pointerEvents.defaults), (0, W.default)(l.events.options, u.pointerEvents || {});
    } } }, Sv = Ev;
    Na.default = Sv;
    var ka = {};
    Object.defineProperty(ka, "__esModule", { value: true }), ka.default = void 0;
    var Cv = { id: "pointer-events", install: function(i) {
      i.usePlugin(ho), i.usePlugin(Da.default), i.usePlugin(Na.default);
    } }, Tv = Cv;
    ka.default = Tv;
    var mo = {};
    function Kc(i) {
      var o = i.Interactable;
      i.actions.phases.reflow = true, o.prototype.reflow = function(l) {
        return function(u, f, g) {
          for (var E = s.default.string(u.target) ? Me.from(u._context.querySelectorAll(u.target)) : [u.target], b = g.window.Promise, w = b ? [] : null, O = function() {
            var P = E[I], k = u.getRect(P);
            if (!k)
              return "break";
            var G = Me.find(g.interactions.list, function(ne) {
              return ne.interacting() && ne.interactable === u && ne.element === P && ne.prepared.name === f.name;
            }), R = void 0;
            if (G)
              G.move(), w && (R = G._reflowPromise || new b(function(ne) {
                G._reflowResolve = ne;
              }));
            else {
              var q = (0, ue.tlbrToXywh)(k), X = { page: { x: q.x, y: q.y }, client: { x: q.x, y: q.y }, timeStamp: g.now() }, F = Q.coordsToEvent(X);
              R = function(ne, oe, fe, Pe, Fe) {
                var Se = ne.interactions.new({ pointerType: "reflow" }), He = { interaction: Se, event: Fe, pointer: Fe, eventTarget: fe, phase: "reflow" };
                Se.interactable = oe, Se.element = fe, Se.prevEvent = Fe, Se.updatePointer(Fe, Fe, fe, true), Q.setZeroCoords(Se.coords.delta), (0, ar.copyAction)(Se.prepared, Pe), Se._doPhase(He);
                var hr = ne.window.Promise, Kr = hr ? new hr(function(_l) {
                  Se._reflowResolve = _l;
                }) : void 0;
                return Se._reflowPromise = Kr, Se.start(Pe, oe, fe), Se._interacting ? (Se.move(He), Se.end(Fe)) : (Se.stop(), Se._reflowResolve()), Se.removePointer(Fe, Fe), Kr;
              }(g, u, P, f, F);
            }
            w && w.push(R);
          }, I = 0; I < E.length && O() !== "break"; I++)
            ;
          return w && b.all(w).then(function() {
            return u;
          });
        }(this, l, i);
      };
    }
    __name(Kc, "Kc");
    c(Kc, "ni"), Object.defineProperty(mo, "__esModule", { value: true }), mo.default = void 0, mo.install = Kc;
    var Ov = { id: "reflow", install: Kc, listeners: { "interactions:stop": function(i, o) {
      var l = i.interaction;
      l.pointerType === "reflow" && (l._reflowResolve && l._reflowResolve(), Me.remove(o.interactions.list, l));
    } } }, Mv = Ov;
    mo.default = Mv;
    var fr = { exports: {} };
    function Al(i) {
      return Al = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Al(i);
    }
    __name(Al, "Al");
    c(Al, "ai"), Object.defineProperty(fr.exports, "__esModule", { value: true }), fr.exports.default = void 0, ct.default.use(vi.default), ct.default.use(Fn.default), ct.default.use(ka.default), ct.default.use(gi.default), ct.default.use(_a.default), ct.default.use(fa.default), ct.default.use(dr.default), ct.default.use(hn.default), ct.default.use(mo.default);
    var Iv = ct.default;
    if (fr.exports.default = Iv, Al(fr) === "object" && fr)
      try {
        fr.exports = ct.default;
      } catch (i) {
      }
    ct.default.default = ct.default, fr = fr.exports;
    var Vn = { exports: {} };
    function Pl(i) {
      return Pl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, Pl(i);
    }
    __name(Pl, "Pl");
    c(Pl, "ui"), Object.defineProperty(Vn.exports, "__esModule", { value: true }), Vn.exports.default = void 0;
    var Av = fr.default;
    if (Vn.exports.default = Av, Pl(Vn) === "object" && Vn)
      try {
        Vn.exports = fr.default;
      } catch (i) {
      }
    return fr.default.default = fr.default, Vn.exports;
  });
});
var kh = Ct((Nh, rc) => {
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
    c(n, "FastDom"), n.prototype = { constructor: n, runTasks: function(d) {
      r("run tasks");
      for (var h; h = d.shift(); )
        h();
    }, measure: function(d, h) {
      r("measure");
      var y = h ? d.bind(h) : d;
      return this.reads.push(y), a(this), y;
    }, mutate: function(d, h) {
      r("mutate");
      var y = h ? d.bind(h) : d;
      return this.writes.push(y), a(this), y;
    }, clear: function(d) {
      return r("clear", d), p(this.reads, d) || p(this.writes, d);
    }, extend: function(d) {
      if (r("extend", d), typeof d != "object")
        throw new Error("expected object");
      var h = Object.create(this);
      return v(h, d), h.fastdom = this, h.initialize && h.initialize(), h;
    }, catch: null };
    function a(d) {
      d.scheduled || (d.scheduled = true, d.raf(s.bind(null, d)), r("flush scheduled"));
    }
    __name(a, "a");
    c(a, "scheduleFlush");
    function s(d) {
      r("flush");
      var h = d.writes, y = d.reads, x;
      try {
        r("flushing reads", y.length), d.runTasks(y), r("flushing writes", h.length), d.runTasks(h);
      } catch (S) {
        x = S;
      }
      if (d.scheduled = false, (y.length || h.length) && a(d), x)
        if (r("task errored", x.message), d.catch)
          d.catch(x);
        else
          throw x;
    }
    __name(s, "s");
    c(s, "flush");
    function p(d, h) {
      var y = d.indexOf(h);
      return !!~y && !!d.splice(y, 1);
    }
    __name(p, "p");
    c(p, "remove");
    function v(d, h) {
      for (var y in h)
        h.hasOwnProperty(y) && (d[y] = h[y]);
    }
    __name(v, "v");
    c(v, "mixin");
    var m = e.fastdom = e.fastdom || new n();
    typeof define == "function" ? define(function() {
      return m;
    }) : typeof rc == "object" && (rc.exports = m);
  })(typeof window != "undefined" ? window : Nh);
});
var Bh = Ct((nc, jh) => {
  (function(e) {
    "use strict";
    var r = Math.cosh || function(d) {
      return Math.abs(d) < 1e-9 ? 1 - d : (Math.exp(d) + Math.exp(-d)) * 0.5;
    }, t = Math.sinh || function(d) {
      return Math.abs(d) < 1e-9 ? d : (Math.exp(d) - Math.exp(-d)) * 0.5;
    }, n = c(function(d) {
      var h = Math.PI / 4;
      if (-h > d || d > h)
        return Math.cos(d) - 1;
      var y = d * d;
      return y * (y * (y * (y * (y * (y * (y * (y / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
    }, "cosm1"), a = c(function(d, h) {
      var y = Math.abs(d), x = Math.abs(h);
      return y < 3e3 && x < 3e3 ? Math.sqrt(y * y + x * x) : (y < x ? (y = x, x = d / h) : x = h / d, y * Math.sqrt(1 + x * x));
    }, "hypot"), s = c(function() {
      throw SyntaxError("Invalid Param");
    }, "parser_exit");
    function p(d, h) {
      var y = Math.abs(d), x = Math.abs(h);
      return d === 0 ? Math.log(x) : h === 0 ? Math.log(y) : y < 3e3 && x < 3e3 ? Math.log(d * d + h * h) * 0.5 : (d = d / 2, h = h / 2, 0.5 * Math.log(d * d + h * h) + Math.LN2);
    }
    __name(p, "p");
    c(p, "logHypot");
    var v = c(function(d, h) {
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
              d.length === 2 ? (y.re = d[0], y.im = d[1]) : s();
            break;
          case "string":
            y.im = y.re = 0;
            var x = d.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), S = 1, C = 0;
            x === null && s();
            for (var T = 0; T < x.length; T++) {
              var _ = x[T];
              _ === " " || _ === "	" || _ === `
` || (_ === "+" ? S++ : _ === "-" ? C++ : _ === "i" || _ === "I" ? (S + C === 0 && s(), x[T + 1] !== " " && !isNaN(x[T + 1]) ? (y.im += parseFloat((C % 2 ? "-" : "") + x[T + 1]), T++) : y.im += parseFloat((C % 2 ? "-" : "") + "1"), S = C = 0) : ((S + C === 0 || isNaN(_)) && s(), x[T + 1] === "i" || x[T + 1] === "I" ? (y.im += parseFloat((C % 2 ? "-" : "") + _), T++) : y.re += parseFloat((C % 2 ? "-" : "") + _), S = C = 0));
            }
            S + C > 0 && s();
            break;
          case "number":
            y.im = 0, y.re = d;
            break;
          default:
            s();
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
    c(m, "Complex"), m.prototype = { re: 0, im: 0, sign: function() {
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
      var x = y.re, S = y.im, C, T;
      return S === 0 ? new m(d / x, h / x) : Math.abs(x) < Math.abs(S) ? (T = x / S, C = x * T + S, new m((d * T + h) / C, (h * T - d) / C)) : (T = S / x, C = S * T + x, new m((d + h * T) / C, (h - d * T) / C));
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
      var x = Math.atan2(h, d), S = p(d, h);
      return d = Math.exp(y.re * S - y.im * x), h = y.im * S + y.re * x, new m(d * Math.cos(h), d * Math.sin(h));
    }, sqrt: function() {
      var d = this.re, h = this.im, y = this.abs(), x, S;
      if (d >= 0) {
        if (h === 0)
          return new m(Math.sqrt(d), 0);
        x = 0.5 * Math.sqrt(2 * (y + d));
      } else
        x = Math.abs(h) / Math.sqrt(2 * (y - d));
      return d <= 0 ? S = 0.5 * Math.sqrt(2 * (y - d)) : S = Math.abs(h) / Math.sqrt(2 * (y + d)), new m(x, h < 0 ? -S : S);
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
      return a(this.re, this.im);
    }, arg: function() {
      return Math.atan2(this.im, this.re);
    }, sin: function() {
      var d = this.re, h = this.im;
      return new m(Math.sin(d) * r(h), Math.cos(d) * t(h));
    }, cos: function() {
      var d = this.re, h = this.im;
      return new m(Math.cos(d) * r(h), -Math.sin(d) * t(h));
    }, tan: function() {
      var d = 2 * this.re, h = 2 * this.im, y = Math.cos(d) + r(h);
      return new m(Math.sin(d) / y, t(h) / y);
    }, cot: function() {
      var d = 2 * this.re, h = 2 * this.im, y = Math.cos(d) - r(h);
      return new m(-Math.sin(d) / y, t(h) / y);
    }, sec: function() {
      var d = this.re, h = this.im, y = 0.5 * r(2 * h) + 0.5 * Math.cos(2 * d);
      return new m(Math.cos(d) * r(h) / y, Math.sin(d) * t(h) / y);
    }, csc: function() {
      var d = this.re, h = this.im, y = 0.5 * r(2 * h) - 0.5 * Math.cos(2 * d);
      return new m(Math.sin(d) * r(h) / y, -Math.cos(d) * t(h) / y);
    }, asin: function() {
      var d = this.re, h = this.im, y = new m(h * h - d * d + 1, -2 * d * h).sqrt(), x = new m(y.re - h, y.im + d).log();
      return new m(x.im, -x.re);
    }, acos: function() {
      var d = this.re, h = this.im, y = new m(h * h - d * d + 1, -2 * d * h).sqrt(), x = new m(y.re - h, y.im + d).log();
      return new m(Math.PI / 2 - x.im, x.re);
    }, atan: function() {
      var d = this.re, h = this.im;
      if (d === 0) {
        if (h === 1)
          return new m(0, 1 / 0);
        if (h === -1)
          return new m(0, -1 / 0);
      }
      var y = d * d + (1 - h) * (1 - h), x = new m((1 - h * h - d * d) / y, -2 * d / y).log();
      return new m(-0.5 * x.im, 0.5 * x.re);
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
      return new m(t(d) * Math.cos(h), r(d) * Math.sin(h));
    }, cosh: function() {
      var d = this.re, h = this.im;
      return new m(r(d) * Math.cos(h), t(d) * Math.sin(h));
    }, tanh: function() {
      var d = 2 * this.re, h = 2 * this.im, y = r(d) + Math.cos(h);
      return new m(t(d) / y, Math.sin(h) / y);
    }, coth: function() {
      var d = 2 * this.re, h = 2 * this.im, y = r(d) - Math.cos(h);
      return new m(t(d) / y, -Math.sin(h) / y);
    }, csch: function() {
      var d = this.re, h = this.im, y = Math.cos(2 * h) - r(2 * d);
      return new m(-2 * t(d) * Math.cos(h) / y, 2 * r(d) * Math.sin(h) / y);
    }, sech: function() {
      var d = this.re, h = this.im, y = Math.cos(2 * h) + r(2 * d);
      return new m(2 * r(d) * Math.cos(h) / y, -2 * t(d) * Math.sin(h) / y);
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
      var d = this.re, h = this.im, y = d > 1 && h === 0, x = 1 - d, S = 1 + d, C = x * x + h * h, T = C !== 0 ? new m((S * x - h * h) / C, (h * x + S * h) / C) : new m(d !== -1 ? d / 0 : 0, h !== 0 ? h / 0 : 0), _ = T.re;
      return T.re = p(T.re, T.im) / 2, T.im = Math.atan2(T.im, _) / 2, y && (T.im = -T.im), T;
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
    }) : typeof nc == "object" ? (Object.defineProperty(m, "__esModule", { value: true }), m.default = m, m.Complex = m, jh.exports = m) : e.Complex = m;
  })(nc);
});
var Mn = zt(op());
var dd = zt(Nr());
var Tn = zt(Nr());
function sd(e) {
  let r = In(e);
  return new Mn.default(r).valueOf() * Math.PI;
}
__name(sd, "sd");
c(sd, "L");
function Eo(e) {
  let r = In(e).split("/");
  if (r.length === 1)
    return 1;
  if (r.length === 2)
    return parseInt(r[1]);
  throw new Error(`Failed to parse angle '${e}'`);
}
__name(Eo, "Eo");
c(Eo, "Z");
function ld(e, r) {
  return new Mn.default(In(e)).valueOf() < new Mn.default(In(r)).valueOf();
}
__name(ld, "ld");
c(ld, "W");
function ud(e, r) {
  return new Mn.default(In(e)).valueOf() > new Mn.default(In(r)).valueOf();
}
__name(ud, "ud");
c(ud, "H");
function cd(e) {
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
__name(cd, "cd");
c(cd, "K");
function In(e) {
  return e.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(In, "In");
c(In, "f");
function pd(e) {
  try {
    let r = In(e), t = new Mn.default(r).toFraction().split("/"), n;
    return t[0] === "0" ? n = "0" : t[0] === "1" ? n = "\u03C0" : t[0] === "-1" ? n = "-\u03C0" : n = `${t[0]}\u03C0`, t.length === 1 ? n : `${n}/${t[1]}`;
  } catch (r) {
    throw new Error(`Failed to parse angle '${e}'`);
  }
}
__name(pd, "pd");
c(pd, "Y");
var $l = 0;
var pt = c(class extends Error {
  constructor(e, r) {
    super(e), this.detailsObj = r, this.name = "Error", this.message = e, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), $l++;
    try {
      this.details = $l === 1 ? (0, dd.format)(this.detailsObj) : "(failed to prettyFormat detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to prettyFormat detailsObj, see the console for details)";
    } finally {
      $l--;
    }
  }
}, "m");
var fd = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var sr = c(class {
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
    let a = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - e) <= r);
    return a !== void 0 ? Math.sqrt(a.value) : e;
  }
  static matchUnicodeFraction(e) {
    for (let r of fd)
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
    let a = sr.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - e) <= r);
    return a !== void 0 ? `\u221A${a.character}` : e % 1 !== 0 && t !== void 0 ? e.toFixed(t) : e.toString();
  }
}, "u");
var Zn = sr;
Zn.CONSISTENT = new sr(false, 0, 2, ", "), Zn.EXACT = new sr(true, 0, void 0, ", "), Zn.MINIFIED = new sr(true, 0, void 0, ","), Zn.SIMPLIFIED = new sr(true, 5e-4, 3, ", ");
var H = c(class {
  static need(e, r, t) {
    if (e !== true) {
      let n = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, a = `Precondition failed

Message: ${r === void 0 ? "(not provided)" : r}

Args: ${n}`;
      throw new Error(a);
    }
  }
  static notNull(e) {
    H.need(e != null, "notNull");
  }
  static snappedCosSin(e) {
    let r = Math.PI / 4, t = Math.round(e / r);
    if (t * r === e) {
      let n = Math.sqrt(0.5);
      return [[1, 0], [n, n], [0, 1], [-n, n], [-1, 0], [-n, -n], [0, -1], [n, -n]][t & 7];
    }
    return [Math.cos(e), Math.sin(e)];
  }
}, "h");
function Oi(e) {
  for (let r of fd)
    if (e(r))
      return r;
}
__name(Oi, "Oi");
c(Oi, "g");
var ib = c((e) => typeof e == "object" && e !== null && typeof e.real == "number" && typeof e.imag == "number", "S");
function ob(e, r, t) {
  if (Math.abs(e.imag) <= r) {
    let n = Oi((a) => Math.abs(a.value - e.real) <= r);
    return n !== void 0 ? n.character : (0, Tn.format)(e.real);
  }
  return Math.abs(e.real) <= r ? Math.abs(e.imag - 1) <= r ? "i" : Math.abs(e.imag + 1) <= r ? "-i" : `${(0, Tn.format)(e.imag)}i` : ab(e, true, 0, t);
}
__name(ob, "ob");
c(ob, "M");
function ab(e, r, t, n) {
  let a;
  if (r && Math.abs(Math.abs(e.imag) - 1) <= t)
    a = "";
  else {
    if (e.imag < 0) {
      let m = Oi((d) => Math.abs(d.value + e.imag) <= t);
      m !== void 0 && (a = m.character);
    } else {
      let m = Oi((d) => Math.abs(d.value - e.imag) <= t);
      m !== void 0 && (a = m.character);
    }
    a || (!r && n !== void 0 ? a = Math.abs(e.imag).toFixed(n) : a = (0, Tn.format)(Math.abs(e.imag)));
  }
  let s = r || n === void 0 || e.real < 0 ? "" : "+", p = e.imag >= 0 ? "+" : "-", v;
  return r ? v = hd(e.real, t, n) : n !== void 0 ? v = e.real.toFixed(n) : v = String(e.real), `${s + v + p + a}i`;
}
__name(ab, "ab");
c(ab, "E");
function hd(e, r = 0, t = void 0) {
  if (Math.abs(e) < r)
    return "0";
  if (e < 0)
    return `-${hd(-e, r, t)}`;
  let n = Zn.matchUnicodeFraction((s) => Math.abs(s.value - e) <= r);
  if (n !== void 0)
    return n.character;
  let a = Zn.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - e) <= r);
  return a !== void 0 ? `\u221A${a.character}` : e % 1 !== 0 && t !== void 0 ? e.toFixed(t) : e.toString();
}
__name(hd, "hd");
c(hd, "G");
var sb = { test: ib, serialize(e, r, t, n, a, s) {
  return ob(e, 0, void 0);
} };
var he = c(class {
  static from(e) {
    if (e instanceof he)
      return e;
    if (typeof e == "number")
      return new he(e, 0);
    throw new pt("Unrecognized value type.", { v: e });
  }
  static polar(e, r) {
    let [t, n] = H.snappedCosSin(r);
    return new he(e * t, e * n);
  }
  static realPartOf(e) {
    if (e instanceof he)
      return e.real;
    if (typeof e == "number")
      return e;
    throw new pt("Unrecognized value type.", { v: e });
  }
  static imagPartOf(e) {
    if (e instanceof he)
      return e.imag;
    if (typeof e == "number")
      return 0;
    throw new pt("Unrecognized value type.", { v: e });
  }
  constructor(e, r) {
    this.real = e, this.imag = r;
  }
  static rootsOfQuadratic(e, r, t) {
    if (e = he.from(e), r = he.from(r), t = he.from(t), e.isEqualTo(0)) {
      if (!r.isEqualTo(0))
        return [t.times(-1).dividedBy(r)];
      if (!t.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let n = r.times(r).minus(e.times(t).times(4)).sqrts(), a = r.times(-1), s = e.times(2);
    return n.map((p) => a.minus(p).dividedBy(s));
  }
  isEqualTo(e) {
    return e instanceof he ? this.real === e.real && this.imag === e.imag : typeof e == "number" ? this.real === e && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(e, r) {
    if (e instanceof he || typeof e == "number") {
      let t = this.minus(he.from(e));
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
    return e < 1e-5 ? he.polar(1, this.phase()) : this.dividedBy(Math.sqrt(e));
  }
  plus(e) {
    let r = he.from(e);
    return new he(this.real + r.real, this.imag + r.imag);
  }
  minus(e) {
    let r = he.from(e);
    return new he(this.real - r.real, this.imag - r.imag);
  }
  times(e) {
    let r = he.from(e);
    return new he(this.real * r.real - this.imag * r.imag, this.real * r.imag + this.imag * r.real);
  }
  dividedBy(e) {
    let r = he.from(e), t = r.norm2();
    if (t === 0)
      throw new Error("Division by Zero");
    let n = this.times(r.conjugate());
    return new he(n.real / t, n.imag / t);
  }
  sqrts() {
    let [e, r] = [this.real, this.imag], t = Math.sqrt(Math.sqrt(e * e + r * r));
    if (t === 0)
      return [he.ZERO];
    if (r === 0 && e < 0)
      return [new he(0, t), new he(0, -t)];
    let n = this.phase() / 2, a = he.polar(t, n);
    return [a, a.times(-1)];
  }
  conjugate() {
    return new he(this.real, -this.imag);
  }
  toStr(e) {
    return e = e || sb, (0, Tn.format)(this, { plugins: [e] });
  }
  toString(e) {
    return e = e || Zn.EXACT, e.allowAbbreviation ? this.toStringAllowSingleValue(e) : this.toStringBothValues(e);
  }
  neg() {
    return new he(-this.real, -this.imag);
  }
  raisedTo(e) {
    return e === 0.5 && this.imag === 0 && this.real >= 0 ? new he(Math.sqrt(this.real), 0) : he.ZERO.isEqualTo(e) ? he.ONE : this.isEqualTo(he.ZERO) ? he.ZERO : this.ln().times(he.from(e)).exp();
  }
  exp() {
    return he.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let e = this.times(he.I);
    return e.exp().plus(e.neg().exp()).times(0.5);
  }
  sin() {
    let e = this.times(he.I);
    return e.exp().minus(e.neg().exp()).dividedBy(new he(0, 2));
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
  toStringAllowSingleValue(e) {
    if (Math.abs(this.imag) <= e.maxAbbreviationError) {
      let r = Oi((t) => Math.abs(t.value - this.real) <= e.maxAbbreviationError);
      return r !== void 0 ? r.character : (0, Tn.format)(this.real);
    }
    return Math.abs(this.real) <= e.maxAbbreviationError ? Math.abs(this.imag - 1) <= e.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= e.maxAbbreviationError ? "-i" : `${(0, Tn.format)(this.imag)}i` : this.toStringBothValues(e);
  }
  toStringBothValues(e) {
    let r;
    if (e.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= e.maxAbbreviationError)
      r = "";
    else {
      if (this.imag < 0) {
        let a = Oi((s) => Math.abs(s.value + this.imag) <= e.maxAbbreviationError);
        a !== void 0 && (r = a.character);
      } else {
        let a = Oi((s) => Math.abs(s.value - this.imag) <= e.maxAbbreviationError);
        a !== void 0 && (r = a.character);
      }
      r || (!e.allowAbbreviation && e.fixedDigits !== void 0 ? r = Math.abs(this.imag).toFixed(e.fixedDigits) : r = (0, Tn.format)(Math.abs(this.imag)));
    }
    let t = e.allowAbbreviation || e.fixedDigits === void 0 || this.real < 0 ? "" : "+", n = this.imag >= 0 ? "+" : "-";
    return `${t + e.formatFloat(this.real) + n + r}i`;
  }
}, "a");
var On = he;
On.ZERO = new he(0, 0), On.ONE = new he(1, 0), On.I = new he(0, 1);
var So = { MAX_QUBIT_COUNT: 16 };
function pe(e, r = {}, t = document) {
  let n = new CustomEvent(e, { bubbles: true, cancelable: true, detail: r });
  return t.dispatchEvent(n);
}
__name(pe, "pe");
c(pe, "he");
var md = c((e) => typeof e == "number" && 1 <= e && e <= So.MAX_QUBIT_COUNT, "xe");
var ql = "\u25E6";
var Fl = "Bloch";
var Ul = "\u2022";
var ts = "H";
var rs = "Measure";
var ns = "P";
var Wl = "QFT\u2020";
var Vl = "QFT";
var is = "X^\xBD";
var os = "Rx";
var as = "Ry";
var ss = "Rz";
var Yl = "\u2026";
var Xl = "Swap";
var ls = "T";
var vd = "|0>";
var gd = "|1>";
var us = "X";
var cs = "Y";
var ps = "Z";
var Zl = /* @__PURE__ */ new WeakSet();
function Ql(e) {
  Zl.add(e), e.shadowRoot && Jl(e.shadowRoot), tu(e), eu(e.ownerDocument);
}
__name(Ql, "Ql");
c(Ql, "bind");
function Jl(e) {
  tu(e), eu(e);
}
__name(Jl, "Jl");
c(Jl, "bindShadow");
var ds = /* @__PURE__ */ new WeakMap();
function eu(e = document) {
  if (ds.has(e))
    return ds.get(e);
  let r = false, t = new MutationObserver((a) => {
    for (let s of a)
      if (s.type === "attributes" && s.target instanceof Element)
        Kl(s.target);
      else if (s.type === "childList" && s.addedNodes.length)
        for (let p of s.addedNodes)
          p instanceof Element && tu(p);
  });
  t.observe(e, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let n = { get closed() {
    return r;
  }, unsubscribe() {
    r = true, ds.delete(e), t.disconnect();
  } };
  return ds.set(e, n), n;
}
__name(eu, "eu");
c(eu, "listenForBind");
function tu(e) {
  for (let r of e.querySelectorAll("[data-action]"))
    Kl(r);
  e instanceof Element && e.hasAttribute("data-action") && Kl(e);
}
__name(tu, "tu");
c(tu, "bindElements");
function lb(e) {
  let r = e.currentTarget;
  for (let t of bd(r))
    if (e.type === t.type) {
      let n = r.closest(t.tag);
      Zl.has(n) && typeof n[t.method] == "function" && n[t.method](e);
      let a = r.getRootNode();
      if (a instanceof ShadowRoot && Zl.has(a.host) && a.host.matches(t.tag)) {
        let s = a.host;
        typeof s[t.method] == "function" && s[t.method](e);
      }
    }
}
__name(lb, "lb");
c(lb, "handleEvent");
function* bd(e) {
  for (let r of (e.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = r.lastIndexOf(":"), n = Math.max(0, r.lastIndexOf("#")) || r.length;
    yield { type: r.slice(0, t), tag: r.slice(t + 1, n), method: r.slice(n + 1) || "handleEvent" };
  }
}
__name(bd, "bd");
c(bd, "bindings");
function Kl(e) {
  for (let r of bd(e))
    e.addEventListener(r.type, lb);
}
__name(Kl, "Kl");
c(Kl, "bindActions");
function ru(e) {
  let r = e.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(r) || (window[e.name] = e, window.customElements.define(r, e));
}
__name(ru, "ru");
c(ru, "register");
function nu(e, r) {
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
__name(nu, "nu");
c(nu, "findTarget");
function iu(e, r) {
  let t = e.tagName.toLowerCase(), n = [];
  if (e.shadowRoot)
    for (let a of e.shadowRoot.querySelectorAll(`[data-targets~="${t}.${r}"]`))
      a.closest(t) || n.push(a);
  for (let a of e.querySelectorAll(`[data-targets~="${t}.${r}"]`))
    a.closest(t) === e && n.push(a);
  return n;
}
__name(iu, "iu");
c(iu, "findTargets");
function Oe(e, r) {
  return Object.defineProperty(e, r, { configurable: true, get() {
    return nu(this, r);
  } });
}
__name(Oe, "Oe");
c(Oe, "target");
function dt(e, r) {
  return Object.defineProperty(e, r, { configurable: true, get() {
    return iu(this, r);
  } });
}
__name(dt, "dt");
c(dt, "targets");
function ou(e) {
  for (let r of e.querySelectorAll("template[data-shadowroot]"))
    r.parentElement === e && e.attachShadow({ mode: r.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(r.content.cloneNode(true));
}
__name(ou, "ou");
c(ou, "autoShadowRoot");
var fs = /* @__PURE__ */ new WeakMap();
function D(e, r) {
  fs.has(e) || fs.set(e, []), fs.get(e).push(r);
}
__name(D, "D");
c(D, "attr");
function au(e, r) {
  r || (r = yd(Object.getPrototypeOf(e)));
  for (let t of r) {
    let n = e[t], a = xd(t), s = { configurable: true, get() {
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
    } }), Object.defineProperty(e, t, s), t in e && !e.hasAttribute(a) && s.set.call(e, n);
  }
}
__name(au, "au");
c(au, "initializeAttrs");
function yd(e) {
  let r = /* @__PURE__ */ new Set(), t = e;
  for (; t && t !== HTMLElement; ) {
    let n = fs.get(t) || [];
    for (let a of n)
      r.add(a);
    t = Object.getPrototypeOf(t);
  }
  return r;
}
__name(yd, "yd");
c(yd, "getAttrNames");
function xd(e) {
  return `data-${e.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(xd, "xd");
c(xd, "attrToAttributeName");
function su(e) {
  let r = e.observedAttributes || [];
  Object.defineProperty(e, "observedAttributes", { configurable: true, get() {
    return [...yd(e.prototype)].map(xd).concat(r);
  }, set(t) {
    r = t;
  } });
}
__name(su, "su");
c(su, "defineObservedAttributes");
var ub = /* @__PURE__ */ new WeakSet();
function wd(e, r) {
  e.toggleAttribute("data-catalyst", true), customElements.upgrade(e), ub.add(e), ou(e), au(e), Ql(e), r && r.call(e), e.shadowRoot && Jl(e.shadowRoot);
}
__name(wd, "wd");
c(wd, "initializeInstance");
function Ed(e) {
  su(e), ru(e);
}
__name(Ed, "Ed");
c(Ed, "initializeClass");
function K(e) {
  let r = e.prototype.connectedCallback;
  e.prototype.connectedCallback = function() {
    wd(this, r);
  }, Ed(e);
}
__name(K, "K");
c(K, "controller");
function be(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.active = false;
    }
    activate() {
      this.active = true, pe("activateable:active", {}, this);
    }
    deactivate() {
      this.active = false;
    }
  }
  __name(r, "r");
  return c(r, "ActivateableMixinClass"), M([D], r.prototype, "active", 2), r;
}
__name(be, "be");
c(be, "ActivateableMixin");
var Kn = c((e) => typeof e == "object" && e !== null && typeof e.angle == "string" && typeof e.reducedAngle == "string", "isAngleable");
function An(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(r, "r");
  return c(r, "AngleableMixinClass"), M([D], r.prototype, "angle", 2), M([D], r.prototype, "reducedAngle", 2), r;
}
__name(An, "An");
c(An, "AngleableMixin");
var Co = c((e) => typeof e == "object" && e !== null && typeof e.controls == "object", "isControllable");
function Ke(e) {
  class r extends e {
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
__name(Ke, "Ke");
c(Ke, "ControllableMixin");
function Le(e) {
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
  return c(r, "DisableableMixinClass"), M([D], r.prototype, "disabled", 2), r;
}
__name(Le, "Le");
c(Le, "DisableableMixin");
var V = c(function() {
  return V = Object.assign || c(function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (r[s] = t[s]);
    }
    return r;
  }, "__assign"), V.apply(this, arguments);
}, "__assign");
function Mi(e, r) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      r.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (t[n[a]] = e[n[a]]);
  return t;
}
__name(Mi, "Mi");
c(Mi, "__rest");
function me(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return { next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    } };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(me, "me");
c(me, "__values");
function ye(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), a, s = [], p;
  try {
    for (; (r === void 0 || r-- > 0) && !(a = n.next()).done; )
      s.push(a.value);
  } catch (v) {
    p = { error: v };
  } finally {
    try {
      a && !a.done && (t = n.return) && t.call(n);
    } finally {
      if (p)
        throw p.error;
    }
  }
  return s;
}
__name(ye, "ye");
c(ye, "__read");
function _e(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, a = r.length, s; n < a; n++)
      (s || !(n in r)) && (s || (s = Array.prototype.slice.call(r, 0, n)), s[n] = r[n]);
  return e.concat(s || Array.prototype.slice.call(r));
}
__name(_e, "_e");
c(_e, "__spreadArray");
var ze;
(function(e) {
  e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure", e.Choose = "xstate.choose";
})(ze || (ze = {}));
var Or;
(function(e) {
  e.Parent = "#_parent", e.Internal = "#_internal";
})(Or || (Or = {}));
var To = ze.Start;
var Ii = ze.Stop;
var Jr = ze.Raise;
var en = ze.Send;
var hs = ze.Cancel;
var Sd = ze.NullEvent;
var lu = ze.Assign;
var Mx = ze.After;
var Ix = ze.DoneState;
var ms = ze.Log;
var Cd = ze.Init;
var Oo = ze.Invoke;
var Ax = ze.ErrorExecution;
var uu = ze.ErrorPlatform;
var cu = ze.ErrorCustom;
var Mo = ze.Update;
var Td = ze.Choose;
var Od = ze.Pure;
var vs = ".";
var pu = {};
var gs = "xstate.guard";
var Md = "";
var Ge = true;
var bs;
function Ao(e, r, t) {
  t === void 0 && (t = vs);
  var n = Ai(e, t), a = Ai(r, t);
  return Ce(a) ? Ce(n) ? a === n : false : Ce(n) ? n in a : Object.keys(n).every(function(s) {
    return s in a ? Ao(n[s], a[s]) : false;
  });
}
__name(Ao, "Ao");
c(Ao, "matchesState");
function ys(e) {
  try {
    return Ce(e) || typeof e == "number" ? "".concat(e) : e.type;
  } catch (r) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(ys, "ys");
c(ys, "getEventType");
function xs(e, r) {
  try {
    return tn(e) ? e : e.toString().split(r);
  } catch (t) {
    throw new Error("'".concat(e, "' is not a valid state path."));
  }
}
__name(xs, "xs");
c(xs, "toStatePath");
function cb(e) {
  return typeof e == "object" && "value" in e && "context" in e && "event" in e && "_event" in e;
}
__name(cb, "cb");
c(cb, "isStateLike");
function Ai(e, r) {
  if (cb(e))
    return e.value;
  if (tn(e))
    return Io(e);
  if (typeof e != "string")
    return e;
  var t = xs(e, r);
  return Io(t);
}
__name(Ai, "Ai");
c(Ai, "toStateValue");
function Io(e) {
  if (e.length === 1)
    return e[0];
  for (var r = {}, t = r, n = 0; n < e.length - 1; n++)
    n === e.length - 2 ? t[e[n]] = e[n + 1] : (t[e[n]] = {}, t = t[e[n]]);
  return r;
}
__name(Io, "Io");
c(Io, "pathToStateValue");
function Pi(e, r) {
  for (var t = {}, n = Object.keys(e), a = 0; a < n.length; a++) {
    var s = n[a];
    t[s] = r(e[s], s, e, a);
  }
  return t;
}
__name(Pi, "Pi");
c(Pi, "mapValues");
function du(e, r, t) {
  var n, a, s = {};
  try {
    for (var p = me(Object.keys(e)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = e[m];
      t(d) && (s[m] = r(d, m, e));
    }
  } catch (h) {
    n = { error: h };
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
__name(du, "du");
c(du, "mapFilterValues");
var Id = c(function(e) {
  return function(r) {
    var t, n, a = r;
    try {
      for (var s = me(e), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        a = a[v];
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
    return a;
  };
}, "path");
function Ad(e, r) {
  return function(t) {
    var n, a, s = t;
    try {
      for (var p = me(e), v = p.next(); !v.done; v = p.next()) {
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
__name(Ad, "Ad");
c(Ad, "nestedPath");
function Po(e) {
  if (!e)
    return [[]];
  if (Ce(e))
    return [[e]];
  var r = $e(Object.keys(e).map(function(t) {
    var n = e[t];
    return typeof n != "string" && (!n || !Object.keys(n).length) ? [[t]] : Po(e[t]).map(function(a) {
      return [t].concat(a);
    });
  }));
  return r;
}
__name(Po, "Po");
c(Po, "toStatePaths");
function $e(e) {
  var r;
  return (r = []).concat.apply(r, _e([], ye(e), false));
}
__name($e, "$e");
c($e, "flatten");
function Pd(e) {
  return tn(e) ? e : [e];
}
__name(Pd, "Pd");
c(Pd, "toArrayStrict");
function lr(e) {
  return e === void 0 ? [] : Pd(e);
}
__name(lr, "lr");
c(lr, "toArray");
function Qn(e, r, t) {
  var n, a;
  if (Re(e))
    return e(r, t.data);
  var s = {};
  try {
    for (var p = me(Object.keys(e)), v = p.next(); !v.done; v = p.next()) {
      var m = v.value, d = e[m];
      Re(d) ? s[m] = d(r, t.data) : s[m] = d;
    }
  } catch (h) {
    n = { error: h };
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
__name(Qn, "Qn");
c(Qn, "mapContext");
function _d(e) {
  return /^(done|error)\./.test(e);
}
__name(_d, "_d");
c(_d, "isBuiltInEvent");
function fu(e) {
  return !!(e instanceof Promise || e !== null && (Re(e) || typeof e == "object") && Re(e.then));
}
__name(fu, "fu");
c(fu, "isPromiseLike");
function zd(e) {
  return e !== null && typeof e == "object" && "transition" in e && typeof e.transition == "function";
}
__name(zd, "zd");
c(zd, "isBehavior");
function Rd(e, r) {
  var t, n, a = ye([[], []], 2), s = a[0], p = a[1];
  try {
    for (var v = me(e), m = v.next(); !m.done; m = v.next()) {
      var d = m.value;
      r(d) ? s.push(d) : p.push(d);
    }
  } catch (h) {
    t = { error: h };
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
__name(Rd, "Rd");
c(Rd, "partition");
function Dd(e, r) {
  return Pi(e.states, function(t, n) {
    if (t) {
      var a = (Ce(r) ? void 0 : r[n]) || (t ? t.current : void 0);
      if (a)
        return { current: a, states: Dd(t, a) };
    }
  });
}
__name(Dd, "Dd");
c(Dd, "updateHistoryStates");
function Nd(e, r) {
  return { current: r, states: Dd(e, r) };
}
__name(Nd, "Nd");
c(Nd, "updateHistoryValue");
function hu(e, r, t, n) {
  Ge || et(!!e, "Attempting to update undefined context");
  var a = e && t.reduce(function(s, p) {
    var v, m, d = p.assignment, h = { state: n, action: p, _event: r }, y = {};
    if (Re(d))
      y = d(s, r.data, h);
    else
      try {
        for (var x = me(Object.keys(d)), S = x.next(); !S.done; S = x.next()) {
          var C = S.value, T = d[C];
          y[C] = Re(T) ? T(s, r.data, h) : T;
        }
      } catch (_) {
        v = { error: _ };
      } finally {
        try {
          S && !S.done && (m = x.return) && m.call(x);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, s, y);
  }, e);
  return a;
}
__name(hu, "hu");
c(hu, "updateContext");
var et = c(function() {
}, "warn");
Ge || (et = c(function(e, r) {
  var t = e instanceof Error ? e : void 0;
  if (!(!t && e) && console !== void 0) {
    var n = ["Warning: ".concat(r)];
    t && n.push(t), console.warn.apply(console, n);
  }
}, "warn"));
function tn(e) {
  return Array.isArray(e);
}
__name(tn, "tn");
c(tn, "isArray");
function Re(e) {
  return typeof e == "function";
}
__name(Re, "Re");
c(Re, "isFunction");
function Ce(e) {
  return typeof e == "string";
}
__name(Ce, "Ce");
c(Ce, "isString");
function ws(e, r) {
  if (e)
    return Ce(e) ? { type: gs, name: e, predicate: r ? r[e] : void 0 } : Re(e) ? { type: gs, name: e.name, predicate: e } : e;
}
__name(ws, "ws");
c(ws, "toGuard");
function kd(e) {
  try {
    return "subscribe" in e && Re(e.subscribe);
  } catch (r) {
    return false;
  }
}
__name(kd, "kd");
c(kd, "isObservable");
var kr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var kx = (bs = {}, bs[kr] = function() {
  return this;
}, bs[Symbol.observable] = function() {
  return this;
}, bs);
function Lr(e) {
  return !!e && "__xstatenode" in e;
}
__name(Lr, "Lr");
c(Lr, "isMachine");
function Ld(e) {
  return !!e && typeof e.send == "function";
}
__name(Ld, "Ld");
c(Ld, "isActor");
function _o(e, r) {
  return Ce(e) || typeof e == "number" ? V({ type: e }, r) : e;
}
__name(_o, "_o");
c(_o, "toEventObject");
function ot(e, r) {
  if (!Ce(e) && "$$type" in e && e.$$type === "scxml")
    return e;
  var t = _o(e);
  return V({ name: t.type, data: t, $$type: "scxml", type: "external" }, r);
}
__name(ot, "ot");
c(ot, "toSCXMLEvent");
function Jn(e, r) {
  var t = Pd(r).map(function(n) {
    return typeof n == "undefined" || typeof n == "string" || Lr(n) ? { target: n, event: e } : V(V({}, n), { event: e });
  });
  return t;
}
__name(Jn, "Jn");
c(Jn, "toTransitionConfigArray");
function Gd(e) {
  if (!(e === void 0 || e === Md))
    return lr(e);
}
__name(Gd, "Gd");
c(Gd, "normalizeTarget");
function jd(e, r, t) {
  if (!Ge) {
    var n = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
    if (e === r)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(e, "'.").concat(n));
    else {
      var a = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(e, "'. ").concat(n, " Current error is '").concat(r, "'.").concat(a));
    }
  }
}
__name(jd, "jd");
c(jd, "reportUnhandledExceptionOnInvocation");
function Es(e, r, t, n, a) {
  var s = e.options.guards, p = { state: a, cond: r, _event: n };
  if (r.type === gs)
    return ((s == null ? void 0 : s[r.name]) || r.predicate)(t, n.data, p);
  var v = s == null ? void 0 : s[r.type];
  if (!v)
    throw new Error("Guard '".concat(r.type, "' is not implemented on machine '").concat(e.id, "'."));
  return v(t, n.data, p);
}
__name(Es, "Es");
c(Es, "evaluateGuard");
function Ss(e) {
  return typeof e == "string" ? { type: e } : e;
}
__name(Ss, "Ss");
c(Ss, "toInvokeSource");
function _i(e, r, t) {
  var n = c(function() {
  }, "noop"), a = typeof e == "object", s = a ? e : null;
  return { next: ((a ? e.next : e) || n).bind(s), error: ((a ? e.error : r) || n).bind(s), complete: ((a ? e.complete : t) || n).bind(s) };
}
__name(_i, "_i");
c(_i, "toObserver");
function zo(e, r) {
  return "".concat(e, ":invocation[").concat(r, "]");
}
__name(zo, "zo");
c(zo, "createInvokeId");
var rn = ot({ type: Cd });
function Cs(e, r) {
  return r && r[e] || void 0;
}
__name(Cs, "Cs");
c(Cs, "getActionFunction");
function Ri(e, r) {
  var t;
  if (Ce(e) || typeof e == "number") {
    var n = Cs(e, r);
    Re(n) ? t = { type: e, exec: n } : n ? t = n : t = { type: e, exec: void 0 };
  } else if (Re(e))
    t = { type: e.name || e.toString(), exec: e };
  else {
    var n = Cs(e.type, r);
    if (Re(n))
      t = V(V({}, e), { exec: n });
    else if (n) {
      var a = n.type || e.type;
      t = V(V(V({}, n), e), { type: a });
    } else
      t = e;
  }
  return t;
}
__name(Ri, "Ri");
c(Ri, "toActionObject");
var Gr = c(function(e, r) {
  if (!e)
    return [];
  var t = tn(e) ? e : [e];
  return t.map(function(n) {
    return Ri(n, r);
  });
}, "toActionObjects");
function Ts(e) {
  var r = Ri(e);
  return V(V({ id: Ce(e) ? e : r.id }, r), { type: r.type });
}
__name(Ts, "Ts");
c(Ts, "toActivityDefinition");
function Bd(e) {
  return Ce(e) ? { type: Jr, event: e } : mu(e, { to: Or.Internal });
}
__name(Bd, "Bd");
c(Bd, "raise");
function pb(e) {
  return { type: Jr, _event: ot(e.event) };
}
__name(pb, "pb");
c(pb, "resolveRaise");
function mu(e, r) {
  return { to: r ? r.to : void 0, type: en, event: Re(e) ? e : _o(e), delay: r ? r.delay : void 0, id: r && r.id !== void 0 ? r.id : Re(e) ? e.name : ys(e) };
}
__name(mu, "mu");
c(mu, "send");
function db(e, r, t, n) {
  var a = { _event: t }, s = ot(Re(e.event) ? e.event(r, t.data, a) : e.event), p;
  if (Ce(e.delay)) {
    var v = n && n[e.delay];
    p = Re(v) ? v(r, t.data, a) : v;
  } else
    p = Re(e.delay) ? e.delay(r, t.data, a) : e.delay;
  var m = Re(e.to) ? e.to(r, t.data, a) : e.to;
  return V(V({}, e), { to: m, _event: s, event: s.data, delay: p });
}
__name(db, "db");
c(db, "resolveSend");
var fb = c(function(e, r, t) {
  return V(V({}, e), { value: Ce(e.expr) ? e.expr : e.expr(r, t.data, { _event: t }) });
}, "resolveLog");
var Hd = c(function(e) {
  return { type: hs, sendId: e };
}, "cancel");
function $d(e) {
  var r = Ts(e);
  return { type: ze.Start, activity: r, exec: void 0 };
}
__name($d, "$d");
c($d, "start");
function qd(e) {
  var r = Re(e) ? e : Ts(e);
  return { type: ze.Stop, activity: r, exec: void 0 };
}
__name(qd, "qd");
c(qd, "stop");
function hb(e, r, t) {
  var n = Re(e.activity) ? e.activity(r, t.data) : e.activity, a = typeof n == "string" ? { id: n } : n, s = { type: ze.Stop, activity: a };
  return s;
}
__name(hb, "hb");
c(hb, "resolveStop");
function Fd(e, r) {
  var t = r ? "#".concat(r) : "";
  return "".concat(ze.After, "(").concat(e, ")").concat(t);
}
__name(Fd, "Fd");
c(Fd, "after");
function Ro(e, r) {
  var t = "".concat(ze.DoneState, ".").concat(e), n = { type: t, data: r };
  return n.toString = function() {
    return t;
  }, n;
}
__name(Ro, "Ro");
c(Ro, "done");
function Di(e, r) {
  var t = "".concat(ze.DoneInvoke, ".").concat(e), n = { type: t, data: r };
  return n.toString = function() {
    return t;
  }, n;
}
__name(Di, "Di");
c(Di, "doneInvoke");
function ei(e, r) {
  var t = "".concat(ze.ErrorPlatform, ".").concat(e), n = { type: t, data: r };
  return n.toString = function() {
    return t;
  }, n;
}
__name(ei, "ei");
c(ei, "error");
var mb = c(function(e) {
  var r, t, n = [];
  try {
    for (var a = me(e), s = a.next(); !s.done; s = a.next())
      for (var p = s.value, v = 0; v < p.actions.length; ) {
        if (p.actions[v].type === lu) {
          n.push(p.actions[v]), p.actions.splice(v, 1);
          continue;
        }
        v++;
      }
  } catch (m) {
    r = { error: m };
  } finally {
    try {
      s && !s.done && (t = a.return) && t.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}, "pluckAssigns");
function zi(e, r, t, n, a, s, p) {
  p === void 0 && (p = false);
  var v = p ? [] : mb(a), m = v.length ? hu(t, n, v, r) : t, d = p ? [t] : void 0, h = [];
  function y(C, T) {
    var _;
    switch (T.type) {
      case Jr:
        return pb(T);
      case en:
        var N = db(T, m, n, e.options.delays);
        return Ge || et(!Ce(T.delay) || typeof N.delay == "number", "No delay reference for delay expression '".concat(T.delay, "' was found on machine '").concat(e.id, "'")), s && N.to !== Or.Internal && (C === "entry" ? h.push(N) : s == null || s(N, m, n)), N;
      case ms: {
        var j = fb(T, m, n);
        return s == null || s(j, m, n), j;
      }
      case Td: {
        var $ = T, A = (_ = $.conds.find(function(ue) {
          var Ue = ws(ue.cond, e.options.guards);
          return !Ue || Es(e, Ue, m, n, s ? void 0 : r);
        })) === null || _ === void 0 ? void 0 : _.actions;
        if (!A)
          return [];
        var ee = ye(zi(e, r, m, n, [{ type: C, actions: Gr(lr(A), e.options.actions) }], s, p), 2), z = ee[0], B = ee[1];
        return m = B, d == null || d.push(m), z;
      }
      case Od: {
        var A = T.get(m, n.data);
        if (!A)
          return [];
        var J = ye(zi(e, r, m, n, [{ type: C, actions: Gr(lr(A), e.options.actions) }], s, p), 2), te = J[0], le = J[1];
        return m = le, d == null || d.push(m), te;
      }
      case Ii: {
        var j = hb(T, m, n);
        return s == null || s(j, t, n), j;
      }
      case lu: {
        m = hu(m, n, [T], s ? void 0 : r), d == null || d.push(m);
        break;
      }
      default:
        var Y = Ri(T, e.options.actions), ie = Y.exec;
        if (s)
          s(Y, m, n);
        else if (ie && d) {
          var W = d.length - 1;
          Y = V(V({}, Y), { exec: function(ue) {
            for (var Ue = [], qe = 1; qe < arguments.length; qe++)
              Ue[qe - 1] = arguments[qe];
            ie.apply(void 0, _e([d[W]], ye(Ue), false));
          } });
        }
        return Y;
    }
  }
  __name(y, "y");
  c(y, "handleAction");
  function x(C) {
    var T, _, N = [];
    try {
      for (var j = me(C.actions), $ = j.next(); !$.done; $ = j.next()) {
        var A = $.value, ee = y(C.type, A);
        ee && (N = N.concat(ee));
      }
    } catch (z) {
      T = { error: z };
    } finally {
      try {
        $ && !$.done && (_ = j.return) && _.call(j);
      } finally {
        if (T)
          throw T.error;
      }
    }
    return h.forEach(function(z) {
      s(z, m, n);
    }), h.length = 0, N;
  }
  __name(x, "x");
  c(x, "processBlock");
  var S = $e(a.map(x));
  return [S, m];
}
__name(zi, "zi");
c(zi, "resolveActions");
var Ud = [];
var Pn = c(function(e, r) {
  Ud.push(e);
  var t = r(e);
  return Ud.pop(), t;
}, "provide");
function Wd(e) {
  var r;
  return r = { id: e, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: e };
  } }, r[kr] = function() {
    return this;
  }, r;
}
__name(Wd, "Wd");
c(Wd, "createNullActor");
function Vd(e, r, t, n) {
  var a, s = Ss(e.src), p = (a = r == null ? void 0 : r.options.services) === null || a === void 0 ? void 0 : a[s.type], v = e.data ? Qn(e.data, t, n) : void 0, m = p ? vu(p, e.id, v) : Wd(e.id);
  return m.meta = e, m;
}
__name(Vd, "Vd");
c(Vd, "createInvocableActor");
function vu(e, r, t) {
  var n = Wd(r);
  if (n.deferred = true, Lr(e)) {
    var a = n.state = Pn(void 0, function() {
      return (t ? e.withContext(t) : e).initialState;
    });
    n.getSnapshot = function() {
      return a;
    };
  }
  return n;
}
__name(vu, "vu");
c(vu, "createDeferredActor");
function vb(e) {
  try {
    return typeof e.send == "function";
  } catch (r) {
    return false;
  }
}
__name(vb, "vb");
c(vb, "isActor");
function Yd(e) {
  return vb(e) && "id" in e;
}
__name(Yd, "Yd");
c(Yd, "isSpawnedActor");
function Xd(e) {
  var r;
  return V((r = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, r[kr] = function() {
    return this;
  }, r), e);
}
__name(Xd, "Xd");
c(Xd, "toActorRef");
var Do = c(function(e) {
  return e.type === "atomic" || e.type === "final";
}, "isLeafNode");
function bu(e) {
  return Object.keys(e.states).map(function(r) {
    return e.states[r];
  });
}
__name(bu, "bu");
c(bu, "getAllChildren");
function Ni(e) {
  return bu(e).filter(function(r) {
    return r.type !== "history";
  });
}
__name(Ni, "Ni");
c(Ni, "getChildren");
function yu(e) {
  var r = [e];
  return Do(e) ? r : r.concat($e(Ni(e).map(yu)));
}
__name(yu, "yu");
c(yu, "getAllStateNodes");
function ki(e, r) {
  var t, n, a, s, p, v, m, d, h = new Set(e), y = gu(h), x = new Set(r);
  try {
    for (var S = me(x), C = S.next(); !C.done; C = S.next())
      for (var T = C.value, _ = T.parent; _ && !x.has(_); )
        x.add(_), _ = _.parent;
  } catch (te) {
    t = { error: te };
  } finally {
    try {
      C && !C.done && (n = S.return) && n.call(S);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var N = gu(x);
  try {
    for (var j = me(x), $ = j.next(); !$.done; $ = j.next()) {
      var T = $.value;
      if (T.type === "compound" && (!N.get(T) || !N.get(T).length))
        y.get(T) ? y.get(T).forEach(function(le) {
          return x.add(le);
        }) : T.initialStateNodes.forEach(function(le) {
          return x.add(le);
        });
      else if (T.type === "parallel")
        try {
          for (var A = (p = void 0, me(Ni(T))), ee = A.next(); !ee.done; ee = A.next()) {
            var z = ee.value;
            x.has(z) || (x.add(z), y.get(z) ? y.get(z).forEach(function(le) {
              return x.add(le);
            }) : z.initialStateNodes.forEach(function(le) {
              return x.add(le);
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
    for (var B = me(x), J = B.next(); !J.done; J = B.next())
      for (var T = J.value, _ = T.parent; _ && !x.has(_); )
        x.add(_), _ = _.parent;
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
  return x;
}
__name(ki, "ki");
c(ki, "getConfiguration");
function Zd(e, r) {
  var t = r.get(e);
  if (!t)
    return {};
  if (e.type === "compound") {
    var n = t[0];
    if (n) {
      if (Do(n))
        return n.key;
    } else
      return {};
  }
  var a = {};
  return t.forEach(function(s) {
    a[s.key] = Zd(s, r);
  }), a;
}
__name(Zd, "Zd");
c(Zd, "getValueFromAdj");
function gu(e) {
  var r, t, n = /* @__PURE__ */ new Map();
  try {
    for (var a = me(e), s = a.next(); !s.done; s = a.next()) {
      var p = s.value;
      n.has(p) || n.set(p, []), p.parent && (n.has(p.parent) || n.set(p.parent, []), n.get(p.parent).push(p));
    }
  } catch (v) {
    r = { error: v };
  } finally {
    try {
      s && !s.done && (t = a.return) && t.call(a);
    } finally {
      if (r)
        throw r.error;
    }
  }
  return n;
}
__name(gu, "gu");
c(gu, "getAdjList");
function Kd(e, r) {
  var t = ki([e], r);
  return Zd(e, gu(t));
}
__name(Kd, "Kd");
c(Kd, "getValue");
function Li(e, r) {
  return Array.isArray(e) ? e.some(function(t) {
    return t === r;
  }) : e instanceof Set ? e.has(r) : false;
}
__name(Li, "Li");
c(Li, "has");
function Qd(e) {
  return _e([], ye(new Set($e(_e([], ye(e.map(function(r) {
    return r.ownEvents;
  })), false)))), false);
}
__name(Qd, "Qd");
c(Qd, "nextEvents");
function No(e, r) {
  return r.type === "compound" ? Ni(r).some(function(t) {
    return t.type === "final" && Li(e, t);
  }) : r.type === "parallel" ? Ni(r).every(function(t) {
    return No(e, t);
  }) : false;
}
__name(No, "No");
c(No, "isInFinalState");
function Jd(e) {
  return e === void 0 && (e = []), e.reduce(function(r, t) {
    return t.meta !== void 0 && (r[t.id] = t.meta), r;
  }, {});
}
__name(Jd, "Jd");
c(Jd, "getMeta");
function xu(e) {
  return new Set($e(e.map(function(r) {
    return r.tags;
  })));
}
__name(xu, "xu");
c(xu, "getTagsFromConfiguration");
function wu(e, r) {
  if (e === r)
    return true;
  if (e === void 0 || r === void 0)
    return false;
  if (Ce(e) || Ce(r))
    return e === r;
  var t = Object.keys(e), n = Object.keys(r);
  return t.length === n.length && t.every(function(a) {
    return wu(e[a], r[a]);
  });
}
__name(wu, "wu");
c(wu, "stateValuesEqual");
function ef(e) {
  return typeof e != "object" || e === null ? false : "value" in e && "_event" in e;
}
__name(ef, "ef");
c(ef, "isStateConfig");
function tf(e, r) {
  var t = e.exec, n = V(V({}, e), { exec: t !== void 0 ? function() {
    return t(r.context, r.event, { action: e, state: r, _event: r._event });
  } : void 0 });
  return n;
}
__name(tf, "tf");
c(tf, "bindActionToState");
var gr = function() {
  function e(r) {
    var t = this, n;
    this.actions = [], this.activities = pu, this.meta = {}, this.events = [], this.value = r.value, this.context = r.context, this._event = r._event, this._sessionid = r._sessionid, this.event = this._event.data, this.historyValue = r.historyValue, this.history = r.history, this.actions = r.actions || [], this.activities = r.activities || pu, this.meta = Jd(r.configuration), this.events = r.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = r.configuration, this.transitions = r.transitions, this.children = r.children, this.done = !!r.done, this.tags = (n = Array.isArray(r.tags) ? new Set(r.tags) : r.tags) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), this.machine = r.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return Qd(t.configuration);
    } });
  }
  __name(e, "e");
  return c(e, "State"), e.from = function(r, t) {
    if (r instanceof e)
      return r.context !== t ? new e({ value: r.value, context: t, _event: r._event, _sessionid: null, historyValue: r.historyValue, history: r.history, actions: [], activities: r.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : r;
    var n = rn;
    return new e({ value: r, context: t, _event: n, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, e.create = function(r) {
    return new e(r);
  }, e.inert = function(r, t) {
    if (r instanceof e) {
      if (!r.actions.length)
        return r;
      var n = rn;
      return new e({ value: r.value, context: t, _event: n, _sessionid: null, historyValue: r.historyValue, history: r.history, activities: r.activities, configuration: r.configuration, transitions: [], children: {} });
    }
    return e.from(r, t);
  }, e.prototype.toStrings = function(r, t) {
    var n = this;
    if (r === void 0 && (r = this.value), t === void 0 && (t = "."), Ce(r))
      return [r];
    var a = Object.keys(r);
    return a.concat.apply(a, _e([], ye(a.map(function(s) {
      return n.toStrings(r[s], t).map(function(p) {
        return s + t + p;
      });
    })), false));
  }, e.prototype.toJSON = function() {
    var r = this;
    r.configuration, r.transitions;
    var t = r.tags;
    r.machine;
    var n = Mi(r, ["configuration", "transitions", "tags", "machine"]);
    return V(V({}, n), { tags: Array.from(t) });
  }, e.prototype.matches = function(r) {
    return Ao(r, this.value);
  }, e.prototype.hasTag = function(r) {
    return this.tags.has(r);
  }, e.prototype.can = function(r) {
    var t;
    Ge && et(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var n = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, r);
    return !!(n != null && n.transitions.length) && n.transitions.some(function(a) {
      return a.target !== void 0 || a.actions.length;
    });
  }, e;
}();
var gb = { deferEvents: false };
var Eu = function() {
  function e(r) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = V(V({}, gb), r);
  }
  __name(e, "e");
  return c(e, "Scheduler"), e.prototype.initialize = function(r) {
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
var Su = /* @__PURE__ */ new Map();
var bb = 0;
var Gi = { bookId: function() {
  return "x:".concat(bb++);
}, register: function(e, r) {
  return Su.set(e, r), e;
}, get: function(e) {
  return Su.get(e);
}, free: function(e) {
  Su.delete(e);
} };
function Os() {
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
__name(Os, "Os");
c(Os, "getGlobal");
function yb() {
  var e = Os();
  if (e && "__xstate__" in e)
    return e.__xstate__;
}
__name(yb, "yb");
c(yb, "getDevTools");
function rf(e) {
  if (Os()) {
    var r = yb();
    r && r.register(e);
  }
}
__name(rf, "rf");
c(rf, "registerService");
function nf(e, r) {
  r === void 0 && (r = {});
  var t = e.initialState, n = /* @__PURE__ */ new Set(), a = [], s = false, p = c(function() {
    if (!s) {
      for (s = true; a.length > 0; ) {
        var d = a.shift();
        t = e.transition(t, d, m), n.forEach(function(h) {
          return h.next(t);
        });
      }
      s = false;
    }
  }, "flush"), v = Xd({ id: r.id, send: function(d) {
    a.push(d), p();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(d, h, y) {
    var x = _i(d, h, y);
    return n.add(x), x.next(t), { unsubscribe: function() {
      n.delete(x);
    } };
  } }), m = { parent: r.parent, self: v, id: r.id || "anonymous", observers: n };
  return t = e.start ? e.start(m) : t, v;
}
__name(nf, "nf");
c(nf, "spawnBehavior");
var xb = { sync: false, autoForward: false };
var ft;
(function(e) {
  e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped";
})(ft || (ft = {}));
var of = function() {
  function e(r, t) {
    t === void 0 && (t = e.defaultOptions);
    var n = this;
    this.machine = r, this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = ft.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this._outgoingQueue = [], this.init = this.start, this.send = function(h, y) {
      if (tn(h))
        return n.batch(h), n.state;
      var x = ot(_o(h, y));
      if (n.status === ft.Stopped)
        return Ge || et(false, 'Event "'.concat(x.name, '" was sent to stopped service "').concat(n.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(x.data))), n.state;
      if (n.status !== ft.Running && !n.options.deferEvents)
        throw new Error('Event "'.concat(x.name, '" was sent to uninitialized service "').concat(n.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(x.data)));
      return n.scheduler.schedule(function() {
        n.forward(x);
        var S = n._nextState(x);
        n.update(S, x);
      }), n._state;
    }, this.sendTo = function(h, y, x) {
      var S = n.parent && (y === Or.Parent || n.parent.id === y), C = S ? n.parent : Ce(y) ? n.children.get(y) || Gi.get(y) : Ld(y) ? y : void 0;
      if (!C) {
        if (!S)
          throw new Error("Unable to send event to child '".concat(y, "' from service '").concat(n.id, "'."));
        Ge || et(false, "Service '".concat(n.id, "' has no parent: unable to send event ").concat(h.type));
        return;
      }
      if ("machine" in C) {
        if (n.status !== ft.Stopped || n.parent !== C || n.state.done) {
          var T = V(V({}, h), { name: h.name === cu ? "".concat(ei(n.id)) : h.name, origin: n.sessionId });
          !x && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([C, T]) : C.send(T);
        }
      } else
        !x && n.machine.config.predictableActionArguments ? n._outgoingQueue.push([C, h.data]) : C.send(h.data);
    }, this._exec = function(h, y, x, S) {
      S === void 0 && (S = n.machine.options.actions);
      var C = h.exec || Cs(h.type, S), T = Re(C) ? C : C ? C.exec : h.exec;
      if (T)
        try {
          return T(y, x.data, n.machine.config.predictableActionArguments ? { action: h, _event: x } : { action: h, state: n.state, _event: x });
        } catch (ie) {
          throw n.parent && n.parent.send({ type: "xstate.error", data: ie }), ie;
        }
      switch (h.type) {
        case en:
          var _ = h;
          if (typeof _.delay == "number") {
            n.defer(_);
            return;
          } else
            _.to ? n.sendTo(_._event, _.to, x === rn) : n.send(_._event);
          break;
        case hs:
          n.cancel(h.sendId);
          break;
        case To: {
          if (n.status !== ft.Running)
            return;
          var N = h.activity;
          if (!n.machine.config.predictableActionArguments && !n.state.activities[N.id || N.type])
            break;
          if (N.type === ze.Invoke) {
            var j = Ss(N.src), $ = n.machine.options.services ? n.machine.options.services[j.type] : void 0, A = N.id, ee = N.data;
            Ge || et(!("forward" in N), "`forward` property is deprecated (found in invocation of '".concat(N.src, "' in in machine '").concat(n.machine.id, "'). ") + "Please use `autoForward` instead.");
            var z = "autoForward" in N ? N.autoForward : !!N.forward;
            if (!$) {
              Ge || et(false, "No service found for invocation '".concat(N.src, "' in machine '").concat(n.machine.id, "'."));
              return;
            }
            var B = ee ? Qn(ee, y, x) : void 0;
            if (typeof $ == "string")
              return;
            var J = Re($) ? $(y, x.data, { data: B, src: j, meta: N.meta }) : $;
            if (!J)
              return;
            var te = void 0;
            Lr(J) && (J = B ? J.withContext(B) : J, te = { autoForward: z }), n.spawn(J, A, te);
          } else
            n.spawnActivity(N);
          break;
        }
        case Ii: {
          n.stopChild(h.activity.id);
          break;
        }
        case ms:
          var le = h.label, Y = h.value;
          le ? n.logger(le, Y) : n.logger(Y);
          break;
        default:
          Ge || et(false, "No implementation found for action type '".concat(h.type, "'"));
          break;
      }
    };
    var a = V(V({}, e.defaultOptions), t), s = a.clock, p = a.logger, v = a.parent, m = a.id, d = m !== void 0 ? m : r.id;
    this.id = d, this.logger = p, this.clock = s, this.parent = v, this.options = a, this.scheduler = new Eu({ deferEvents: this.options.deferEvents }), this.sessionId = Gi.bookId();
  }
  __name(e, "e");
  return c(e, "Interpreter"), Object.defineProperty(e.prototype, "initialState", { get: function() {
    var r = this;
    return this._initialState ? this._initialState : Pn(this, function() {
      return r._initialState = r.machine.initialState, r._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "state", { get: function() {
    return Ge || et(this.status !== ft.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), e.prototype.execute = function(r, t) {
    var n, a;
    try {
      for (var s = me(r.actions), p = s.next(); !p.done; p = s.next()) {
        var v = p.value;
        this.exec(v, r, t);
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
  }, e.prototype.update = function(r, t) {
    var n, a, s, p, v, m, d, h, y = this;
    if (r._sessionid = this.sessionId, this._state = r, (!this.machine.config.predictableActionArguments || t === rn) && this.options.execute)
      this.execute(this.state);
    else
      for (var x = void 0; x = this._outgoingQueue.shift(); )
        x[0].send(x[1]);
    if (this.children.forEach(function(te) {
      y.state.children[te.id] = te;
    }), this.devTools && this.devTools.send(t.data, r), r.event)
      try {
        for (var S = me(this.eventListeners), C = S.next(); !C.done; C = S.next()) {
          var T = C.value;
          T(r.event);
        }
      } catch (te) {
        n = { error: te };
      } finally {
        try {
          C && !C.done && (a = S.return) && a.call(S);
        } finally {
          if (n)
            throw n.error;
        }
      }
    try {
      for (var _ = me(this.listeners), N = _.next(); !N.done; N = _.next()) {
        var T = N.value;
        T(r, r.event);
      }
    } catch (te) {
      s = { error: te };
    } finally {
      try {
        N && !N.done && (p = _.return) && p.call(_);
      } finally {
        if (s)
          throw s.error;
      }
    }
    try {
      for (var j = me(this.contextListeners), $ = j.next(); !$.done; $ = j.next()) {
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
      }), z = ee && ee.doneData ? Qn(ee.doneData, r.context, t) : void 0;
      try {
        for (var B = me(this.doneListeners), J = B.next(); !J.done; J = B.next()) {
          var T = J.value;
          T(Di(this.id, z));
        }
      } catch (te) {
        d = { error: te };
      } finally {
        try {
          J && !J.done && (h = B.return) && h.call(B);
        } finally {
          if (d)
            throw d.error;
        }
      }
      this._stop(), this._stopChildren(), Gi.free(this.sessionId);
    }
  }, e.prototype.onTransition = function(r) {
    return this.listeners.add(r), this.status === ft.Running && r(this.state, this.state.event), this;
  }, e.prototype.subscribe = function(r, t, n) {
    var a = this, s = _i(r, t, n);
    this.listeners.add(s.next), this.status !== ft.NotStarted && s.next(this.state);
    var p = c(function() {
      a.doneListeners.delete(p), a.stopListeners.delete(p), s.complete();
    }, "completeOnce");
    return this.status === ft.Stopped ? s.complete() : (this.onDone(p), this.onStop(p)), { unsubscribe: function() {
      a.listeners.delete(s.next), a.doneListeners.delete(p), a.stopListeners.delete(p);
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
    return this.doneListeners.add(r), this;
  }, e.prototype.off = function(r) {
    return this.listeners.delete(r), this.eventListeners.delete(r), this.sendListeners.delete(r), this.stopListeners.delete(r), this.doneListeners.delete(r), this.contextListeners.delete(r), this;
  }, e.prototype.start = function(r) {
    var t = this;
    if (this.status === ft.Running)
      return this;
    this.machine._init(), Gi.register(this.sessionId, this), this.initialized = true, this.status = ft.Running;
    var n = r === void 0 ? this.initialState : Pn(this, function() {
      return ef(r) ? t.machine.resolveState(r) : t.machine.resolveState(gr.from(r, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(n, rn);
    }), this;
  }, e.prototype._stopChildren = function() {
    this.children.forEach(function(r) {
      Re(r.stop) && r.stop();
    }), this.children.clear();
  }, e.prototype._stop = function() {
    var r, t, n, a, s, p, v, m, d, h;
    try {
      for (var y = me(this.listeners), x = y.next(); !x.done; x = y.next()) {
        var S = x.value;
        this.listeners.delete(S);
      }
    } catch (B) {
      r = { error: B };
    } finally {
      try {
        x && !x.done && (t = y.return) && t.call(y);
      } finally {
        if (r)
          throw r.error;
      }
    }
    try {
      for (var C = me(this.stopListeners), T = C.next(); !T.done; T = C.next()) {
        var S = T.value;
        S(), this.stopListeners.delete(S);
      }
    } catch (B) {
      n = { error: B };
    } finally {
      try {
        T && !T.done && (a = C.return) && a.call(C);
      } finally {
        if (n)
          throw n.error;
      }
    }
    try {
      for (var _ = me(this.contextListeners), N = _.next(); !N.done; N = _.next()) {
        var S = N.value;
        this.contextListeners.delete(S);
      }
    } catch (B) {
      s = { error: B };
    } finally {
      try {
        N && !N.done && (p = _.return) && p.call(_);
      } finally {
        if (s)
          throw s.error;
      }
    }
    try {
      for (var j = me(this.doneListeners), $ = j.next(); !$.done; $ = j.next()) {
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
      for (var A = me(Object.keys(this.delayedEventsMap)), ee = A.next(); !ee.done; ee = A.next()) {
        var z = ee.value;
        this.clock.clearTimeout(this.delayedEventsMap[z]);
      }
    } catch (B) {
      d = { error: B };
    } finally {
      try {
        ee && !ee.done && (h = A.return) && h.call(A);
      } finally {
        if (d)
          throw d.error;
      }
    }
    this.scheduler.clear(), this.scheduler = new Eu({ deferEvents: this.options.deferEvents });
  }, e.prototype.stop = function() {
    var r = this, t = this.scheduler;
    return this._stop(), t.schedule(function() {
      var n = ot({ type: "xstate.stop" }), a = Pn(r, function() {
        var s = $e(_e([], ye(r.state.configuration), false).sort(function(h, y) {
          return y.order - h.order;
        }).map(function(h) {
          return Gr(h.onExit, r.machine.options.actions);
        })), p = ye(zi(r.machine, r.state, r.state.context, n, [{ type: "exit", actions: s }], r.machine.config.predictableActionArguments ? r._exec : void 0, r.machine.config.predictableActionArguments || r.machine.config.preserveActionOrder), 2), v = p[0], m = p[1], d = new gr({ value: r.state.value, context: m, _event: n, _sessionid: r.sessionId, historyValue: void 0, history: r.state, actions: v.filter(function(h) {
          return h.type !== Jr && (h.type !== en || !!h.to && h.to !== Or.Internal);
        }), activities: {}, events: [], configuration: [], transitions: [], children: {}, done: r.state.done, tags: r.state.tags, machine: r.machine });
        return d.changed = true, d;
      });
      r.update(a, n), r._stopChildren(), Gi.free(r.sessionId);
    }), this;
  }, e.prototype.batch = function(r) {
    var t = this;
    if (this.status === ft.NotStarted && this.options.deferEvents)
      Ge || et(false, "".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== ft.Running)
      throw new Error("".concat(r.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    if (r.length) {
      var n = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var a, s, p = t.state, v = false, m = [], d = c(function(S) {
          var C = ot(S);
          t.forward(C), p = Pn(t, function() {
            return t.machine.transition(p, C, void 0, n || void 0);
          }), m.push.apply(m, _e([], ye(t.machine.config.predictableActionArguments ? p.actions : p.actions.map(function(T) {
            return tf(T, p);
          })), false)), v = v || !!p.changed;
        }, "_loop_1");
        try {
          for (var h = me(r), y = h.next(); !y.done; y = h.next()) {
            var x = y.value;
            d(x);
          }
        } catch (S) {
          a = { error: S };
        } finally {
          try {
            y && !y.done && (s = h.return) && s.call(h);
          } finally {
            if (a)
              throw a.error;
          }
        }
        p.changed = v, p.actions = m, t.update(p, ot(r[r.length - 1]));
      });
    }
  }, e.prototype.sender = function(r) {
    return this.send.bind(this, r);
  }, e.prototype._nextState = function(r, t) {
    var n = this;
    t === void 0 && (t = !!this.machine.config.predictableActionArguments && this._exec);
    var a = ot(r);
    if (a.name.indexOf(uu) === 0 && !this.state.nextEvents.some(function(p) {
      return p.indexOf(uu) === 0;
    }))
      throw a.data.data;
    var s = Pn(this, function() {
      return n.machine.transition(n.state, a, void 0, t || void 0);
    });
    return s;
  }, e.prototype.nextState = function(r) {
    return this._nextState(r, false);
  }, e.prototype.forward = function(r) {
    var t, n;
    try {
      for (var a = me(this.forwardTo), s = a.next(); !s.done; s = a.next()) {
        var p = s.value, v = this.children.get(p);
        if (!v)
          throw new Error("Unable to forward event '".concat(r, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(p, "'."));
        v.send(r);
      }
    } catch (m) {
      t = { error: m };
    } finally {
      try {
        s && !s.done && (n = a.return) && n.call(a);
      } finally {
        if (t)
          throw t.error;
      }
    }
  }, e.prototype.defer = function(r) {
    var t = this;
    this.delayedEventsMap[r.id] = this.clock.setTimeout(function() {
      r.to ? t.sendTo(r._event, r.to, true) : t.send(r._event);
    }, r.delay);
  }, e.prototype.cancel = function(r) {
    this.clock.clearTimeout(this.delayedEventsMap[r]), delete this.delayedEventsMap[r];
  }, e.prototype.exec = function(r, t, n) {
    n === void 0 && (n = this.machine.options.actions), this._exec(r, t.context, t._event, n);
  }, e.prototype.removeChild = function(r) {
    var t;
    this.children.delete(r), this.forwardTo.delete(r), (t = this.state) === null || t === void 0 || delete t.children[r];
  }, e.prototype.stopChild = function(r) {
    var t = this.children.get(r);
    t && (this.removeChild(r), Re(t.stop) && t.stop());
  }, e.prototype.spawn = function(r, t, n) {
    if (this.status !== ft.Running)
      return vu(r, t);
    if (fu(r))
      return this.spawnPromise(Promise.resolve(r), t);
    if (Re(r))
      return this.spawnCallback(r, t);
    if (Yd(r))
      return this.spawnActor(r, t);
    if (kd(r))
      return this.spawnObservable(r, t);
    if (Lr(r))
      return this.spawnMachine(r, V(V({}, n), { id: t }));
    if (zd(r))
      return this.spawnBehavior(r, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof r, '".'));
  }, e.prototype.spawnMachine = function(r, t) {
    var n = this;
    t === void 0 && (t = {});
    var a = new e(r, V(V({}, this.options), { parent: this, id: t.id || r.id })), s = V(V({}, xb), t);
    s.sync && a.onTransition(function(v) {
      n.send(Mo, { state: v, id: a.id });
    });
    var p = a;
    return this.children.set(a.id, p), s.autoForward && this.forwardTo.add(a.id), a.onDone(function(v) {
      n.removeChild(a.id), n.send(ot(v, { origin: a.id }));
    }).start(), p;
  }, e.prototype.spawnBehavior = function(r, t) {
    var n = nf(r, { id: t, parent: this });
    return this.children.set(t, n), n;
  }, e.prototype.spawnPromise = function(r, t) {
    var n, a = this, s = false, p;
    r.then(function(m) {
      s || (p = m, a.removeChild(t), a.send(ot(Di(t, m), { origin: t })));
    }, function(m) {
      if (!s) {
        a.removeChild(t);
        var d = ei(t, m);
        try {
          a.send(ot(d, { origin: t }));
        } catch (h) {
          jd(m, h, t), a.devTools && a.devTools.send(d, a.state), a.machine.strict && a.stop();
        }
      }
    });
    var v = (n = { id: t, send: function() {
    }, subscribe: function(m, d, h) {
      var y = _i(m, d, h), x = false;
      return r.then(function(S) {
        x || (y.next(S), !x && y.complete());
      }, function(S) {
        x || y.error(S);
      }), { unsubscribe: function() {
        return x = true;
      } };
    }, stop: function() {
      s = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return p;
    } }, n[kr] = function() {
      return this;
    }, n);
    return this.children.set(t, v), v;
  }, e.prototype.spawnCallback = function(r, t) {
    var n, a = this, s = false, p = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), m, d = c(function(x) {
      m = x, v.forEach(function(S) {
        return S(x);
      }), !s && a.send(ot(x, { origin: t }));
    }, "receive"), h;
    try {
      h = r(d, function(x) {
        p.add(x);
      });
    } catch (x) {
      this.send(ei(t, x));
    }
    if (fu(h))
      return this.spawnPromise(h, t);
    var y = (n = { id: t, send: function(x) {
      return p.forEach(function(S) {
        return S(x);
      });
    }, subscribe: function(x) {
      var S = _i(x);
      return v.add(S.next), { unsubscribe: function() {
        v.delete(S.next);
      } };
    }, stop: function() {
      s = true, Re(h) && h();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return m;
    } }, n[kr] = function() {
      return this;
    }, n);
    return this.children.set(t, y), y;
  }, e.prototype.spawnObservable = function(r, t) {
    var n, a = this, s, p = r.subscribe(function(m) {
      s = m, a.send(ot(m, { origin: t }));
    }, function(m) {
      a.removeChild(t), a.send(ot(ei(t, m), { origin: t }));
    }, function() {
      a.removeChild(t), a.send(ot(Di(t), { origin: t }));
    }), v = (n = { id: t, send: function() {
    }, subscribe: function(m, d, h) {
      return r.subscribe(m, d, h);
    }, stop: function() {
      return p.unsubscribe();
    }, getSnapshot: function() {
      return s;
    }, toJSON: function() {
      return { id: t };
    } }, n[kr] = function() {
      return this;
    }, n);
    return this.children.set(t, v), v;
  }, e.prototype.spawnActor = function(r, t) {
    return this.children.set(t, r), r;
  }, e.prototype.spawnActivity = function(r) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[r.type] : void 0;
    if (!t) {
      Ge || et(false, "No implementation found for activity '".concat(r.type, "'"));
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
    } }, n[kr] = function() {
      return this;
    }, n));
  }, e.prototype.attachDev = function() {
    var r = Os();
    if (this.options.devTools && r) {
      if (r.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = r.__REDUX_DEVTOOLS_EXTENSION__.connect(V(V({ name: this.id, autoPause: true, stateSanitizer: function(n) {
          return { value: n.value, context: n.context, actions: n.actions };
        } }, t), { features: V({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      rf(this);
    }
  }, e.prototype.toJSON = function() {
    return { id: this.id };
  }, e.prototype[kr] = function() {
    return this;
  }, e.prototype.getSnapshot = function() {
    return this.status === ft.NotStarted ? this.initialState : this._state;
  }, e.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(r, t) {
    return setTimeout(r, t);
  }, clearTimeout: function(r) {
    return clearTimeout(r);
  } }, logger: console.log.bind(console), devTools: false }, e.interpret = at, e;
}();
function at(e, r) {
  var t = new of(e, r);
  return t;
}
__name(at, "at");
c(at, "interpret");
function wb(e) {
  if (typeof e == "string") {
    var r = { type: e };
    return r.toString = function() {
      return e;
    }, r;
  }
  return e;
}
__name(wb, "wb");
c(wb, "toInvokeSource");
function ko(e) {
  return V(V({ type: Oo }, e), { toJSON: function() {
    e.onDone, e.onError;
    var r = Mi(e, ["onDone", "onError"]);
    return V(V({}, r), { type: Oo, src: wb(e.src) });
  } });
}
__name(ko, "ko");
c(ko, "toInvokeDefinition");
var Hi = "";
var Cu = "#";
var Lo = "*";
var ji = {};
var Bi = c(function(e) {
  return e[0] === Cu;
}, "isStateId");
var Eb = c(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var Sb = c(function(e, r, t) {
  var n = t.slice(0, -1).some(function(s) {
    return !("cond" in s) && !("in" in s) && (Ce(s.target) || Lr(s.target));
  }), a = r === Hi ? "the transient event" : "event '".concat(r, "'");
  et(!n, "One or more transitions for ".concat(a, " on state '").concat(e.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var af = function() {
  function e(r, t, n, a) {
    n === void 0 && (n = "context" in r ? r.context : void 0);
    var s = this, p;
    this.config = r, this._context = n, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Eb(), t), this.parent = a == null ? void 0 : a.parent, this.key = this.config.key || (a == null ? void 0 : a.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : vs), this.id = this.config.id || _e([this.machine.key], ye(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (p = this.config.schema) !== null && p !== void 0 ? p : {}, this.description = this.config.description, Ge || et(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? Pi(this.config.states, function(d, h) {
      var y, x = new e(d, {}, void 0, { parent: s, key: h });
      return Object.assign(s.idMap, V((y = {}, y[x.id] = x, y), x.idMap)), x;
    }) : ji;
    var v = 0;
    function m(d) {
      var h, y;
      d.order = v++;
      try {
        for (var x = me(bu(d)), S = x.next(); !S.done; S = x.next()) {
          var C = S.value;
          m(C);
        }
      } catch (T) {
        h = { error: T };
      } finally {
        try {
          S && !S.done && (y = x.return) && y.call(x);
        } finally {
          if (h)
            throw h.error;
        }
      }
    }
    __name(m, "m");
    c(m, "dfs"), m(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(d) {
      var h = d.event;
      return h === Hi;
    }) : Hi in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = lr(this.config.entry || this.config.onEntry).map(function(d) {
      return Ri(d);
    }), this.onExit = lr(this.config.exit || this.config.onExit).map(function(d) {
      return Ri(d);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = lr(this.config.invoke).map(function(d, h) {
      var y, x;
      if (Lr(d)) {
        var S = zo(s.id, h);
        return s.machine.options.services = V((y = {}, y[S] = d, y), s.machine.options.services), ko({ src: S, id: S });
      } else if (Ce(d.src)) {
        var S = d.id || zo(s.id, h);
        return ko(V(V({}, d), { id: S, src: d.src }));
      } else if (Lr(d.src) || Re(d.src)) {
        var S = d.id || zo(s.id, h);
        return s.machine.options.services = V((x = {}, x[S] = d.src, x), s.machine.options.services), ko(V(V({ id: S }, d), { src: S }));
      } else {
        var C = d.src;
        return ko(V(V({ id: zo(s.id, h) }, d), { src: C }));
      }
    }), this.activities = lr(this.config.activities).concat(this.invoke).map(function(d) {
      return Ts(d);
    }), this.transition = this.transition.bind(this), this.tags = lr(this.config.tags);
  }
  __name(e, "e");
  return c(e, "StateNode"), e.prototype._init = function() {
    this.__cache.transitions || yu(this).forEach(function(r) {
      return r.on;
    });
  }, e.prototype.withConfig = function(r, t) {
    var n = this.options, a = n.actions, s = n.activities, p = n.guards, v = n.services, m = n.delays;
    return new e(this.config, { actions: V(V({}, a), r.actions), activities: V(V({}, s), r.activities), guards: V(V({}, p), r.guards), services: V(V({}, v), r.services), delays: V(V({}, m), r.delays) }, t != null ? t : this.context);
  }, e.prototype.withContext = function(r) {
    return new e(this.config, this.options, r);
  }, Object.defineProperty(e.prototype, "context", { get: function() {
    return Re(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: Pi(this.states, function(r) {
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
    var t = r === Hi, n = this.transitions.filter(function(a) {
      var s = a.eventType === r;
      return t ? s : s || a.eventType === Lo;
    });
    return this.__cache.candidates[r] = n, n;
  }, e.prototype.getDelayedTransitions = function() {
    var r = this, t = this.config.after;
    if (!t)
      return [];
    var n = c(function(s, p) {
      var v = Re(s) ? "".concat(r.id, ":delay[").concat(p, "]") : s, m = Fd(v, r.id);
      return r.onEntry.push(mu(m, { delay: s })), r.onExit.push(Hd(m)), m;
    }, "mutateEntryExit"), a = tn(t) ? t.map(function(s, p) {
      var v = n(s.delay, p);
      return V(V({}, s), { event: v });
    }) : $e(Object.keys(t).map(function(s, p) {
      var v = t[s], m = Ce(v) ? { target: v } : v, d = isNaN(+s) ? s : +s, h = n(d, p);
      return lr(m).map(function(y) {
        return V(V({}, y), { event: h, delay: d });
      });
    }));
    return a.map(function(s) {
      var p = s.delay;
      return V(V({}, r.formatTransition(s)), { delay: p });
    });
  }, e.prototype.getStateNodes = function(r) {
    var t, n = this;
    if (!r)
      return [];
    var a = r instanceof gr ? r.value : Ai(r, this.delimiter);
    if (Ce(a)) {
      var s = this.getStateNode(a).initial;
      return s !== void 0 ? this.getStateNodes((t = {}, t[a] = s, t)) : [this, this.states[a]];
    }
    var p = Object.keys(a), v = [this];
    return v.push.apply(v, _e([], ye($e(p.map(function(m) {
      return n.getStateNode(m).getStateNodes(a[m]);
    }))), false)), v;
  }, e.prototype.handles = function(r) {
    var t = ys(r);
    return this.events.includes(t);
  }, e.prototype.resolveState = function(r) {
    var t = r instanceof gr ? r : gr.create(r), n = Array.from(ki([], this.getStateNodes(t.value)));
    return new gr(V(V({}, t), { value: this.resolve(t.value), configuration: n, done: No(n, this), tags: xu(n), machine: this.machine }));
  }, e.prototype.transitionLeafNode = function(r, t, n) {
    var a = this.getStateNode(r), s = a.next(t, n);
    return !s || !s.transitions.length ? this.next(t, n) : s;
  }, e.prototype.transitionCompoundNode = function(r, t, n) {
    var a = Object.keys(r), s = this.getStateNode(a[0]), p = s._transition(r[a[0]], t, n);
    return !p || !p.transitions.length ? this.next(t, n) : p;
  }, e.prototype.transitionParallelNode = function(r, t, n) {
    var a, s, p = {};
    try {
      for (var v = me(Object.keys(r)), m = v.next(); !m.done; m = v.next()) {
        var d = m.value, h = r[d];
        if (h) {
          var y = this.getStateNode(d), x = y._transition(h, t, n);
          x && (p[d] = x);
        }
      }
    } catch (N) {
      a = { error: N };
    } finally {
      try {
        m && !m.done && (s = v.return) && s.call(v);
      } finally {
        if (a)
          throw a.error;
      }
    }
    var S = Object.keys(p).map(function(N) {
      return p[N];
    }), C = $e(S.map(function(N) {
      return N.transitions;
    })), T = S.some(function(N) {
      return N.transitions.length > 0;
    });
    if (!T)
      return this.next(t, n);
    var _ = $e(Object.keys(p).map(function(N) {
      return p[N].configuration;
    }));
    return { transitions: C, exitSet: $e(S.map(function(N) {
      return N.exitSet;
    })), configuration: _, source: t, actions: $e(Object.keys(p).map(function(N) {
      return p[N].actions;
    })) };
  }, e.prototype._transition = function(r, t, n) {
    return Ce(r) ? this.transitionLeafNode(r, t, n) : Object.keys(r).length === 1 ? this.transitionCompoundNode(r, t, n) : this.transitionParallelNode(r, t, n);
  }, e.prototype.getTransitionData = function(r, t) {
    return this._transition(r.value, r, ot(t));
  }, e.prototype.next = function(r, t) {
    var n, a, s = this, p = t.name, v = [], m = [], d;
    try {
      for (var h = me(this.getCandidates(p)), y = h.next(); !y.done; y = h.next()) {
        var x = y.value, S = x.cond, C = x.in, T = r.context, _ = C ? Ce(C) && Bi(C) ? r.matches(Ai(this.getStateNodeById(C).path, this.delimiter)) : Ao(Ai(C, this.delimiter), Id(this.path.slice(0, -2))(r.value)) : true, N = false;
        try {
          N = !S || Es(this.machine, S, T, t, r);
        } catch (A) {
          throw new Error("Unable to evaluate guard '".concat(S.name || S.type, "' in transition for event '").concat(p, "' in state node '").concat(this.id, `':
`).concat(A.message));
        }
        if (N && _) {
          x.target !== void 0 && (m = x.target), v.push.apply(v, _e([], ye(x.actions), false)), d = x;
          break;
        }
      }
    } catch (A) {
      n = { error: A };
    } finally {
      try {
        y && !y.done && (a = h.return) && a.call(h);
      } finally {
        if (n)
          throw n.error;
      }
    }
    if (d) {
      if (!m.length)
        return { transitions: [d], exitSet: [], configuration: r.value ? [this] : [], source: r, actions: v };
      var j = $e(m.map(function(A) {
        return s.getRelativeStateNodes(A, r.historyValue);
      })), $ = !!d.internal;
      return { transitions: [d], exitSet: $ ? [] : $e(m.map(function(A) {
        return s.getPotentiallyReenteringNodes(A);
      })), configuration: j, source: r, actions: v };
    }
  }, e.prototype.getPotentiallyReenteringNodes = function(r) {
    if (this.order < r.order)
      return [this];
    for (var t = [], n = this, a = r; n && n !== a; )
      t.push(n), n = n.parent;
    return n !== a ? [] : (t.push(a), t);
  }, e.prototype.getActions = function(r, t, n, a, s, p, v) {
    var m, d, h, y, x = this, S = p ? ki([], this.getStateNodes(p.value)) : [], C = /* @__PURE__ */ new Set();
    try {
      for (var T = me(Array.from(r).sort(function(Y, ie) {
        return Y.order - ie.order;
      })), _ = T.next(); !_.done; _ = T.next()) {
        var N = _.value;
        (!Li(S, N) || Li(n.exitSet, N) || N.parent && C.has(N.parent)) && C.add(N);
      }
    } catch (Y) {
      m = { error: Y };
    } finally {
      try {
        _ && !_.done && (d = T.return) && d.call(T);
      } finally {
        if (m)
          throw m.error;
      }
    }
    try {
      for (var j = me(S), $ = j.next(); !$.done; $ = j.next()) {
        var N = $.value;
        (!Li(r, N) || Li(n.exitSet, N.parent)) && n.exitSet.push(N);
      }
    } catch (Y) {
      h = { error: Y };
    } finally {
      try {
        $ && !$.done && (y = j.return) && y.call(j);
      } finally {
        if (h)
          throw h.error;
      }
    }
    n.exitSet.sort(function(Y, ie) {
      return ie.order - Y.order;
    });
    var A = Array.from(C).sort(function(Y, ie) {
      return Y.order - ie.order;
    }), ee = new Set(n.exitSet), z = $e(A.map(function(Y) {
      var ie = [];
      if (Y.type !== "final")
        return ie;
      var W = Y.parent;
      if (!W.parent)
        return ie;
      ie.push(Ro(Y.id, Y.doneData), Ro(W.id, Y.doneData ? Qn(Y.doneData, a, s) : void 0));
      var ue = W.parent;
      return ue.type === "parallel" && Ni(ue).every(function(Ue) {
        return No(n.configuration, Ue);
      }) && ie.push(Ro(ue.id)), ie;
    })), B = A.map(function(Y) {
      var ie = Y.onEntry, W = Y.activities.map(function(ue) {
        return $d(ue);
      });
      return { type: "entry", actions: Gr(v ? _e(_e([], ye(ie), false), ye(W), false) : _e(_e([], ye(W), false), ye(ie), false), x.machine.options.actions) };
    }).concat({ type: "state_done", actions: z.map(Bd) }), J = Array.from(ee).map(function(Y) {
      return { type: "exit", actions: Gr(_e(_e([], ye(Y.onExit), false), ye(Y.activities.map(function(ie) {
        return qd(ie);
      })), false), x.machine.options.actions) };
    }), te = J.concat({ type: "transition", actions: Gr(n.actions, this.machine.options.actions) }).concat(B);
    if (t) {
      var le = Gr($e(_e([], ye(r), false).sort(function(Y, ie) {
        return ie.order - Y.order;
      }).map(function(Y) {
        return Y.onExit;
      })), this.machine.options.actions).filter(function(Y) {
        return Y.type !== Jr && (Y.type !== en || !!Y.to && Y.to !== Or.Internal);
      });
      return te.concat({ type: "stop", actions: le });
    }
    return te;
  }, e.prototype.transition = function(r, t, n, a) {
    r === void 0 && (r = this.initialState);
    var s = ot(t), p;
    if (r instanceof gr)
      p = n === void 0 ? r : this.resolveState(gr.from(r, n));
    else {
      var v = Ce(r) ? this.resolve(Io(this.getResolvedPath(r))) : this.resolve(r), m = n != null ? n : this.machine.context;
      p = this.resolveState(gr.from(v, m));
    }
    if (!Ge && s.name === Lo)
      throw new Error("An event cannot have the wildcard type ('".concat(Lo, "')"));
    if (this.strict && !this.events.includes(s.name) && !_d(s.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(s.name, "'"));
    var d = this._transition(p.value, p, s) || { transitions: [], configuration: [], exitSet: [], source: p, actions: [] }, h = ki([], this.getStateNodes(p.value)), y = d.configuration.length ? ki(h, d.configuration) : h;
    return d.configuration = _e([], ye(y), false), this.resolveTransition(d, p, p.context, a, s);
  }, e.prototype.resolveRaisedTransition = function(r, t, n, a) {
    var s, p = r.actions;
    return r = this.transition(r, t, void 0, a), r._event = n, r.event = n.data, (s = r.actions).unshift.apply(s, _e([], ye(p), false)), r;
  }, e.prototype.resolveTransition = function(r, t, n, a, s) {
    var p, v, m, d, h = this;
    s === void 0 && (s = rn);
    var y = r.configuration, x = !t || r.transitions.length > 0, S = x ? r.configuration : t ? t.configuration : [], C = No(S, this), T = x ? Kd(this.machine, y) : void 0, _ = t ? t.historyValue ? t.historyValue : r.source ? this.machine.historyValue(t.value) : void 0 : void 0, N = this.getActions(new Set(S), C, r, n, s, t, a), j = t ? V({}, t.activities) : {};
    try {
      for (var $ = me(N), A = $.next(); !A.done; A = $.next()) {
        var ee = A.value;
        try {
          for (var z = (m = void 0, me(ee.actions)), B = z.next(); !B.done; B = z.next()) {
            var J = B.value;
            J.type === To ? j[J.activity.id || J.activity.type] = J : J.type === Ii && (j[J.activity.id || J.activity.type] = false);
          }
        } catch (Ie) {
          m = { error: Ie };
        } finally {
          try {
            B && !B.done && (d = z.return) && d.call(z);
          } finally {
            if (m)
              throw m.error;
          }
        }
      }
    } catch (Ie) {
      p = { error: Ie };
    } finally {
      try {
        A && !A.done && (v = $.return) && v.call($);
      } finally {
        if (p)
          throw p.error;
      }
    }
    var te = ye(zi(this, t, n, s, N, a, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), le = te[0], Y = te[1], ie = ye(Rd(le, function(Ie) {
      return Ie.type === Jr || Ie.type === en && Ie.to === Or.Internal;
    }), 2), W = ie[0], ue = ie[1], Ue = le.filter(function(Ie) {
      var Je;
      return Ie.type === To && ((Je = Ie.activity) === null || Je === void 0 ? void 0 : Je.type) === Oo;
    }), qe = Ue.reduce(function(Ie, Je) {
      return Ie[Je.activity.id] = Vd(Je.activity, h.machine, Y, s), Ie;
    }, t ? V({}, t.children) : {}), De = new gr({ value: T || t.value, context: Y, _event: s, _sessionid: t ? t._sessionid : null, historyValue: T ? _ ? Nd(_, T) : void 0 : t ? t.historyValue : void 0, history: !T || r.source ? t : void 0, actions: T ? ue : [], activities: T ? j : t ? t.activities : {}, events: [], configuration: S, transitions: r.transitions, children: qe, done: C, tags: xu(S), machine: this }), je = n !== Y;
    De.changed = s.name === Mo || je;
    var it = De.history;
    it && delete it.history;
    var Ze = !C && (this._transient || y.some(function(Ie) {
      return Ie._transient;
    }));
    if (!x && (!Ze || s.name === Hi))
      return De;
    var Ve = De;
    if (!C)
      for (Ze && (Ve = this.resolveRaisedTransition(Ve, { type: Sd }, s, a)); W.length; ) {
        var Q = W.shift();
        Ve = this.resolveRaisedTransition(Ve, Q._event, s, a);
      }
    var ir = Ve.changed || (it ? !!Ve.actions.length || je || typeof it.value != typeof Ve.value || !wu(Ve.value, it.value) : void 0);
    return Ve.changed = ir, Ve.history = it, Ve;
  }, e.prototype.getStateNode = function(r) {
    if (Bi(r))
      return this.machine.getStateNodeById(r);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(r, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[r];
    if (!t)
      throw new Error("Child state '".concat(r, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, e.prototype.getStateNodeById = function(r) {
    var t = Bi(r) ? r.slice(Cu.length) : r;
    if (t === this.id)
      return this;
    var n = this.machine.idMap[t];
    if (!n)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return n;
  }, e.prototype.getStateNodeByPath = function(r) {
    if (typeof r == "string" && Bi(r))
      try {
        return this.getStateNodeById(r.slice(1));
      } catch (s) {
      }
    for (var t = xs(r, this.delimiter).slice(), n = this; t.length; ) {
      var a = t.shift();
      if (!a.length)
        break;
      n = n.getStateNode(a);
    }
    return n;
  }, e.prototype.resolve = function(r) {
    var t, n = this;
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
          return a.type === "parallel" || a.type === "compound" ? (t = {}, t[r] = a.initialStateValue, t) : r;
        }
        return Object.keys(r).length ? Pi(r, function(s, p) {
          return s ? n.getStateNode(p).resolve(s) : ji;
        }) : this.initialStateValue || {};
      default:
        return r || ji;
    }
  }, e.prototype.getResolvedPath = function(r) {
    if (Bi(r)) {
      var t = this.machine.idMap[r.slice(Cu.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(r, "'"));
      return t.path;
    }
    return xs(r, this.delimiter);
  }, Object.defineProperty(e.prototype, "initialStateValue", { get: function() {
    var r;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = du(this.states, function(n) {
        return n.initialStateValue || ji;
      }, function(n) {
        return n.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = Do(this.states[this.initial]) ? this.initial : (r = {}, r[this.initial] = this.states[this.initial].initialStateValue, r);
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
      Ce(t.target) ? r = Bi(t.target) ? Io(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : r = t.target;
    }
    return r;
  }, enumerable: false, configurable: true }), e.prototype.getRelativeStateNodes = function(r, t, n) {
    return n === void 0 && (n = true), n ? r.type === "history" ? r.resolveHistory(t) : r.initialStateNodes : [r];
  }, Object.defineProperty(e.prototype, "initialStateNodes", { get: function() {
    var r = this;
    if (Do(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Ge || et(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Po(this.initialStateValue);
    return $e(t.map(function(n) {
      return r.getFromRelativePath(n);
    }));
  }, enumerable: false, configurable: true }), e.prototype.getFromRelativePath = function(r) {
    if (!r.length)
      return [this];
    var t = ye(r), n = t[0], a = t.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(n, "' from node with no states"));
    var s = this.getStateNode(n);
    if (s.type === "history")
      return s.resolveHistory();
    if (!this.states[n])
      throw new Error("Child state '".concat(n, "' does not exist on '").concat(this.id, "'"));
    return this.states[n].getFromRelativePath(a);
  }, e.prototype.historyValue = function(r) {
    if (Object.keys(this.states).length)
      return { current: r || this.initialStateValue, states: du(this.states, function(t, n) {
        if (!r)
          return t.historyValue();
        var a = Ce(r) ? void 0 : r[n];
        return t.historyValue(a || t.initialStateValue);
      }, function(t) {
        return !t.history;
      }) };
  }, e.prototype.resolveHistory = function(r) {
    var t = this;
    if (this.type !== "history")
      return [this];
    var n = this.parent;
    if (!r) {
      var a = this.target;
      return a ? $e(Po(a).map(function(p) {
        return n.getFromRelativePath(p);
      })) : n.initialStateNodes;
    }
    var s = Ad(n.path, "states")(r).current;
    return Ce(s) ? [n.getStateNode(s)] : $e(Po(s).map(function(p) {
      return t.history === "deep" ? n.getFromRelativePath(p) : [n.states[p[0]]];
    }));
  }, Object.defineProperty(e.prototype, "stateIds", { get: function() {
    var r = this, t = $e(Object.keys(this.states).map(function(n) {
      return r.states[n].stateIds;
    }));
    return [this.id].concat(t);
  }, enumerable: false, configurable: true }), Object.defineProperty(e.prototype, "events", { get: function() {
    var r, t, n, a;
    if (this.__cache.events)
      return this.__cache.events;
    var s = this.states, p = new Set(this.ownEvents);
    if (s)
      try {
        for (var v = me(Object.keys(s)), m = v.next(); !m.done; m = v.next()) {
          var d = m.value, h = s[d];
          if (h.states)
            try {
              for (var y = (n = void 0, me(h.events)), x = y.next(); !x.done; x = y.next()) {
                var S = x.value;
                p.add("".concat(S));
              }
            } catch (C) {
              n = { error: C };
            } finally {
              try {
                x && !x.done && (a = y.return) && a.call(y);
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
        var a = n[0] === t.delimiter;
        if (a && !t.parent)
          return t.getStateNodeByPath(n.slice(1));
        var s = a ? t.key + n : n;
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
    var t = this, n = Gd(r.target), a = "internal" in r ? r.internal : n ? n.some(function(m) {
      return Ce(m) && m[0] === t.delimiter;
    }) : true, s = this.machine.options.guards, p = this.resolveTarget(n), v = V(V({}, r), { actions: Gr(lr(r.actions)), cond: ws(r.cond, s), target: p, source: this, internal: a, eventType: r.event, toJSON: function() {
      return V(V({}, v), { target: v.target ? v.target.map(function(m) {
        return "#".concat(m.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return v;
  }, e.prototype.formatTransitions = function() {
    var r, t, n = this, a;
    if (!this.config.on)
      a = [];
    else if (Array.isArray(this.config.on))
      a = this.config.on;
    else {
      var s = this.config.on, p = Lo, v = s[p], m = v === void 0 ? [] : v, d = Mi(s, [typeof p == "symbol" ? p : p + ""]);
      a = $e(Object.keys(d).map(function(j) {
        !Ge && j === Hi && et(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(n.id, '".'));
        var $ = Jn(j, d[j]);
        return Ge || Sb(n, j, $), $;
      }).concat(Jn(Lo, m)));
    }
    var h = this.config.always ? Jn("", this.config.always) : [], y = this.config.onDone ? Jn(String(Ro(this.id)), this.config.onDone) : [];
    Ge || et(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var x = $e(this.invoke.map(function(j) {
      var $ = [];
      return j.onDone && $.push.apply($, _e([], ye(Jn(String(Di(j.id)), j.onDone)), false)), j.onError && $.push.apply($, _e([], ye(Jn(String(ei(j.id)), j.onError)), false)), $;
    })), S = this.after, C = $e(_e(_e(_e(_e([], ye(y), false), ye(x), false), ye(a), false), ye(h), false).map(function(j) {
      return lr(j).map(function($) {
        return n.formatTransition($);
      });
    }));
    try {
      for (var T = me(S), _ = T.next(); !_.done; _ = T.next()) {
        var N = _.value;
        C.push(N);
      }
    } catch (j) {
      r = { error: j };
    } finally {
      try {
        _ && !_.done && (t = T.return) && t.call(T);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return C;
  }, e;
}();
var sf = false;
function ht(e, r) {
  return !Ge && !("predictableActionArguments" in e) && !sf && (sf = true, console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html")), new af(e, r);
}
__name(ht, "ht");
c(ht, "createMachine");
var uf = zt(Nr(), 1);
var jo = zt(Go(), 1);
var Is = c((e) => e != null && typeof e.draggable == "boolean", "isDraggable");
var Ms = c((e) => e != null && e.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Ou = c((e) => e != null && e.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function xe(e) {
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
        pe("draggable:init", {}, this);
      }, setInteract: (a, s) => {
        H.need(s.type === "SET_INTERACT", "event type must be SET_INTERACT");
        let p = (0, jo.default)(this);
        p.styleCursor(false), p.pointerEvents({ ignoreFrom: ".resize-handle" }), p.on("down", this.grab.bind(this)), p.on("up", this.release.bind(this)), p.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this), ignoreFrom: ".resize-handle" });
        let v = this.dropzone;
        Ms(v) ? this.snappedDropzone = v : this.snappedDropzone = null;
      }, grab: (a, s) => {
        H.need(s.type === "GRAB", "event type must be GRAB"), s.type === "GRAB" && (this.grabbed = true, pe("draggable:grab", {}, this), Ou(this.dropzone) && (this.snapped = false, this.moveByOffset(s.x, s.y), this.classList.remove("qpu-operation-xl")));
      }, release: (a, s) => {
        H.need(s.type === "RELEASE", "event type must be RELEASE"), this.grabbed = false, pe("draggable:release", {}, this);
      }, startDragging: (a, s) => {
        H.need(s.type === "START_DRAGGING", "event type must be START_DRAGGING"), this.dragging = true;
      }, endDragging: (a, s) => {
        H.need(s.type === "END_DRAGGING", "event type must be END_DRAGGING"), this.grabbed = false, this.dragging = false, pe("draggable:end-dragging", {}, this);
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, pe("draggable:snap-to-dropzone", {}, this);
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && pe("draggable:unsnap", {}, this.snappedDropzone);
      }, drop: () => {
        this.snapped && (this.moveTo(0, 0), pe("draggable:drop", {}, this));
      }, delete: () => {
        (0, jo.default)(this).unset(), pe("draggable:delete", {}, this);
      } }, guards: { isOnCircuitDropzone: () => Ms(this.dropzone), isOnPaletteDropzone: () => Ou(this.dropzone), isDroppedOnCircuitDropzone: () => this.snapped && Ms(this.dropzone), isTrashed: () => !this.snapped } });
      this.draggableService = at(this.draggableMachine).onTransition((a) => {
        this.debugDraggable && console.log(`draggable: ${(0, uf.format)(a.value)}`);
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
      return H.notNull(a), !Ou(a) && !Ms(a) ? null : a;
    }
    set snapTargets(a) {
      (0, jo.default)(this).draggable({ modifiers: [jo.default.modifiers.snap({ targets: a, range: this.snapRange })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return 32;
    }
    moveEventListener(a) {
      let s = a.modifiers[0];
      if (s.inRange) {
        let p = s.target.source;
        pe("draggable:in-snap-range", { snapTargetInfo: p }, this), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
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
__name(xe, "xe");
c(xe, "DraggableMixin");
var ti = c((e) => typeof e == "object" && e !== null && typeof e.flag == "string", "isFlaggable");
function cf(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(r, "r");
  return c(r, "FlaggableMixinClass"), M([D], r.prototype, "flag", 2), r;
}
__name(cf, "cf");
c(cf, "FlaggableMixin");
var Qe = "top";
var mt = "bottom";
var st = "right";
var tt = "left";
var As = "auto";
var _n = [Qe, mt, st, tt];
var nn = "start";
var ri = "end";
var pf = "clippingParents";
var Ps = "viewport";
var $i = "popper";
var df = "reference";
var Mu = _n.reduce(function(e, r) {
  return e.concat([r + "-" + nn, r + "-" + ri]);
}, []);
var _s = [].concat(_n, [As]).reduce(function(e, r) {
  return e.concat([r, r + "-" + nn, r + "-" + ri]);
}, []);
var Cb = "beforeRead";
var Tb = "read";
var Ob = "afterRead";
var Mb = "beforeMain";
var Ib = "main";
var Ab = "afterMain";
var Pb = "beforeWrite";
var _b = "write";
var zb = "afterWrite";
var ff = [Cb, Tb, Ob, Mb, Ib, Ab, Pb, _b, zb];
function yt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
__name(yt, "yt");
c(yt, "getNodeName");
function rt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var r = e.ownerDocument;
    return r && r.defaultView || window;
  }
  return e;
}
__name(rt, "rt");
c(rt, "getWindow");
function jr(e) {
  var r = rt(e).Element;
  return e instanceof r || e instanceof Element;
}
__name(jr, "jr");
c(jr, "isElement");
function vt(e) {
  var r = rt(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
__name(vt, "vt");
c(vt, "isHTMLElement");
function zs(e) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var r = rt(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
__name(zs, "zs");
c(zs, "isShadowRoot");
function Rb(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(t) {
    var n = r.styles[t] || {}, a = r.attributes[t] || {}, s = r.elements[t];
    !vt(s) || !yt(s) || (Object.assign(s.style, n), Object.keys(a).forEach(function(p) {
      var v = a[p];
      v === false ? s.removeAttribute(p) : s.setAttribute(p, v === true ? "" : v);
    }));
  });
}
__name(Rb, "Rb");
c(Rb, "applyStyles");
function Db(e) {
  var r = e.state, t = { popper: { position: r.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(r.elements.popper.style, t.popper), r.styles = t, r.elements.arrow && Object.assign(r.elements.arrow.style, t.arrow), function() {
    Object.keys(r.elements).forEach(function(n) {
      var a = r.elements[n], s = r.attributes[n] || {}, p = Object.keys(r.styles.hasOwnProperty(n) ? r.styles[n] : t[n]), v = p.reduce(function(m, d) {
        return m[d] = "", m;
      }, {});
      !vt(a) || !yt(a) || (Object.assign(a.style, v), Object.keys(s).forEach(function(m) {
        a.removeAttribute(m);
      }));
    });
  };
}
__name(Db, "Db");
c(Db, "effect");
var Bo = { name: "applyStyles", enabled: true, phase: "write", fn: Rb, effect: Db, requires: ["computeStyles"] };
function xt(e) {
  return e.split("-")[0];
}
__name(xt, "xt");
c(xt, "getBasePlacement");
var Mr = Math.max;
var ni = Math.min;
var on = Math.round;
function br(e, r) {
  r === void 0 && (r = false);
  var t = e.getBoundingClientRect(), n = 1, a = 1;
  if (vt(e) && r) {
    var s = e.offsetHeight, p = e.offsetWidth;
    p > 0 && (n = on(t.width) / p || 1), s > 0 && (a = on(t.height) / s || 1);
  }
  return { width: t.width / n, height: t.height / a, top: t.top / a, right: t.right / n, bottom: t.bottom / a, left: t.left / n, x: t.left / n, y: t.top / a };
}
__name(br, "br");
c(br, "getBoundingClientRect");
function ii(e) {
  var r = br(e), t = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(r.width - t) <= 1 && (t = r.width), Math.abs(r.height - n) <= 1 && (n = r.height), { x: e.offsetLeft, y: e.offsetTop, width: t, height: n };
}
__name(ii, "ii");
c(ii, "getLayoutRect");
function Ho(e, r) {
  var t = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return true;
  if (t && zs(t)) {
    var n = r;
    do {
      if (n && e.isSameNode(n))
        return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
__name(Ho, "Ho");
c(Ho, "contains");
function jt(e) {
  return rt(e).getComputedStyle(e);
}
__name(jt, "jt");
c(jt, "getComputedStyle");
function Iu(e) {
  return ["table", "td", "th"].indexOf(yt(e)) >= 0;
}
__name(Iu, "Iu");
c(Iu, "isTableElement");
function Tt(e) {
  return ((jr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
__name(Tt, "Tt");
c(Tt, "getDocumentElement");
function an(e) {
  return yt(e) === "html" ? e : e.assignedSlot || e.parentNode || (zs(e) ? e.host : null) || Tt(e);
}
__name(an, "an");
c(an, "getParentNode");
function hf(e) {
  return !vt(e) || jt(e).position === "fixed" ? null : e.offsetParent;
}
__name(hf, "hf");
c(hf, "getTrueOffsetParent");
function Nb(e) {
  var r = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && vt(e)) {
    var n = jt(e);
    if (n.position === "fixed")
      return null;
  }
  for (var a = an(e); vt(a) && ["html", "body"].indexOf(yt(a)) < 0; ) {
    var s = jt(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || r && s.willChange === "filter" || r && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
__name(Nb, "Nb");
c(Nb, "getContainingBlock");
function Ir(e) {
  for (var r = rt(e), t = hf(e); t && Iu(t) && jt(t).position === "static"; )
    t = hf(t);
  return t && (yt(t) === "html" || yt(t) === "body" && jt(t).position === "static") ? r : t || Nb(e) || r;
}
__name(Ir, "Ir");
c(Ir, "getOffsetParent");
function oi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
__name(oi, "oi");
c(oi, "getMainAxisFromPlacement");
function ai(e, r, t) {
  return Mr(e, ni(r, t));
}
__name(ai, "ai");
c(ai, "within");
function mf(e, r, t) {
  var n = ai(e, r, t);
  return n > t ? t : n;
}
__name(mf, "mf");
c(mf, "withinMaxClamp");
function $o() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name($o, "$o");
c($o, "getFreshSideObject");
function qo(e) {
  return Object.assign({}, $o(), e);
}
__name(qo, "qo");
c(qo, "mergePaddingObject");
function Fo(e, r) {
  return r.reduce(function(t, n) {
    return t[n] = e, t;
  }, {});
}
__name(Fo, "Fo");
c(Fo, "expandToHashMap");
var kb = c(function(r, t) {
  return r = typeof r == "function" ? r(Object.assign({}, t.rects, { placement: t.placement })) : r, qo(typeof r != "number" ? r : Fo(r, _n));
}, "toPaddingObject");
function Lb(e) {
  var r, t = e.state, n = e.name, a = e.options, s = t.elements.arrow, p = t.modifiersData.popperOffsets, v = xt(t.placement), m = oi(v), d = [tt, st].indexOf(v) >= 0, h = d ? "height" : "width";
  if (!(!s || !p)) {
    var y = kb(a.padding, t), x = ii(s), S = m === "y" ? Qe : tt, C = m === "y" ? mt : st, T = t.rects.reference[h] + t.rects.reference[m] - p[m] - t.rects.popper[h], _ = p[m] - t.rects.reference[m], N = Ir(s), j = N ? m === "y" ? N.clientHeight || 0 : N.clientWidth || 0 : 0, $ = T / 2 - _ / 2, A = y[S], ee = j - x[h] - y[C], z = j / 2 - x[h] / 2 + $, B = ai(A, z, ee), J = m;
    t.modifiersData[n] = (r = {}, r[J] = B, r.centerOffset = B - z, r);
  }
}
__name(Lb, "Lb");
c(Lb, "arrow");
function Gb(e) {
  var r = e.state, t = e.options, n = t.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = r.elements.popper.querySelector(a), !a) || Ho(r.elements.popper, a) && (r.elements.arrow = a));
}
__name(Gb, "Gb");
c(Gb, "effect");
var vf = { name: "arrow", enabled: true, phase: "main", fn: Lb, effect: Gb, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function yr(e) {
  return e.split("-")[1];
}
__name(yr, "yr");
c(yr, "getVariation");
var jb = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Bb(e) {
  var r = e.x, t = e.y, n = window, a = n.devicePixelRatio || 1;
  return { x: on(r * a) / a || 0, y: on(t * a) / a || 0 };
}
__name(Bb, "Bb");
c(Bb, "roundOffsetsByDPR");
function gf(e) {
  var r, t = e.popper, n = e.popperRect, a = e.placement, s = e.variation, p = e.offsets, v = e.position, m = e.gpuAcceleration, d = e.adaptive, h = e.roundOffsets, y = e.isFixed, x = p.x, S = x === void 0 ? 0 : x, C = p.y, T = C === void 0 ? 0 : C, _ = typeof h == "function" ? h({ x: S, y: T }) : { x: S, y: T };
  S = _.x, T = _.y;
  var N = p.hasOwnProperty("x"), j = p.hasOwnProperty("y"), $ = tt, A = Qe, ee = window;
  if (d) {
    var z = Ir(t), B = "clientHeight", J = "clientWidth";
    if (z === rt(t) && (z = Tt(t), jt(z).position !== "static" && v === "absolute" && (B = "scrollHeight", J = "scrollWidth")), z = z, a === Qe || (a === tt || a === st) && s === ri) {
      A = mt;
      var te = y && ee.visualViewport ? ee.visualViewport.height : z[B];
      T -= te - n.height, T *= m ? 1 : -1;
    }
    if (a === tt || (a === Qe || a === mt) && s === ri) {
      $ = st;
      var le = y && ee.visualViewport ? ee.visualViewport.width : z[J];
      S -= le - n.width, S *= m ? 1 : -1;
    }
  }
  var Y = Object.assign({ position: v }, d && jb), ie = h === true ? Bb({ x: S, y: T }) : { x: S, y: T };
  if (S = ie.x, T = ie.y, m) {
    var W;
    return Object.assign({}, Y, (W = {}, W[A] = j ? "0" : "", W[$] = N ? "0" : "", W.transform = (ee.devicePixelRatio || 1) <= 1 ? "translate(" + S + "px, " + T + "px)" : "translate3d(" + S + "px, " + T + "px, 0)", W));
  }
  return Object.assign({}, Y, (r = {}, r[A] = j ? T + "px" : "", r[$] = N ? S + "px" : "", r.transform = "", r));
}
__name(gf, "gf");
c(gf, "mapToStyles");
function Hb(e) {
  var r = e.state, t = e.options, n = t.gpuAcceleration, a = n === void 0 ? true : n, s = t.adaptive, p = s === void 0 ? true : s, v = t.roundOffsets, m = v === void 0 ? true : v;
  if (false)
    var d;
  var h = { placement: xt(r.placement), variation: yr(r.placement), popper: r.elements.popper, popperRect: r.rects.popper, gpuAcceleration: a, isFixed: r.options.strategy === "fixed" };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, gf(Object.assign({}, h, { offsets: r.modifiersData.popperOffsets, position: r.options.strategy, adaptive: p, roundOffsets: m })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, gf(Object.assign({}, h, { offsets: r.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: m })))), r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-placement": r.placement });
}
__name(Hb, "Hb");
c(Hb, "computeStyles");
var bf = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Hb, data: {} };
var Rs = { passive: true };
function $b(e) {
  var r = e.state, t = e.instance, n = e.options, a = n.scroll, s = a === void 0 ? true : a, p = n.resize, v = p === void 0 ? true : p, m = rt(r.elements.popper), d = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return s && d.forEach(function(h) {
    h.addEventListener("scroll", t.update, Rs);
  }), v && m.addEventListener("resize", t.update, Rs), function() {
    s && d.forEach(function(h) {
      h.removeEventListener("scroll", t.update, Rs);
    }), v && m.removeEventListener("resize", t.update, Rs);
  };
}
__name($b, "$b");
c($b, "effect");
var yf = { name: "eventListeners", enabled: true, phase: "write", fn: c(function() {
}, "fn"), effect: $b, data: {} };
var qb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function qi(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return qb[r];
  });
}
__name(qi, "qi");
c(qi, "getOppositePlacement");
var Fb = { start: "end", end: "start" };
function Ds(e) {
  return e.replace(/start|end/g, function(r) {
    return Fb[r];
  });
}
__name(Ds, "Ds");
c(Ds, "getOppositeVariationPlacement");
function si(e) {
  var r = rt(e), t = r.pageXOffset, n = r.pageYOffset;
  return { scrollLeft: t, scrollTop: n };
}
__name(si, "si");
c(si, "getWindowScroll");
function li(e) {
  return br(Tt(e)).left + si(e).scrollLeft;
}
__name(li, "li");
c(li, "getWindowScrollBarX");
function Au(e) {
  var r = rt(e), t = Tt(e), n = r.visualViewport, a = t.clientWidth, s = t.clientHeight, p = 0, v = 0;
  return n && (a = n.width, s = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (p = n.offsetLeft, v = n.offsetTop)), { width: a, height: s, x: p + li(e), y: v };
}
__name(Au, "Au");
c(Au, "getViewportRect");
function Pu(e) {
  var r, t = Tt(e), n = si(e), a = (r = e.ownerDocument) == null ? void 0 : r.body, s = Mr(t.scrollWidth, t.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), p = Mr(t.scrollHeight, t.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), v = -n.scrollLeft + li(e), m = -n.scrollTop;
  return jt(a || t).direction === "rtl" && (v += Mr(t.clientWidth, a ? a.clientWidth : 0) - s), { width: s, height: p, x: v, y: m };
}
__name(Pu, "Pu");
c(Pu, "getDocumentRect");
function ui(e) {
  var r = jt(e), t = r.overflow, n = r.overflowX, a = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + a + n);
}
__name(ui, "ui");
c(ui, "isScrollParent");
function Ns(e) {
  return ["html", "body", "#document"].indexOf(yt(e)) >= 0 ? e.ownerDocument.body : vt(e) && ui(e) ? e : Ns(an(e));
}
__name(Ns, "Ns");
c(Ns, "getScrollParent");
function zn(e, r) {
  var t;
  r === void 0 && (r = []);
  var n = Ns(e), a = n === ((t = e.ownerDocument) == null ? void 0 : t.body), s = rt(n), p = a ? [s].concat(s.visualViewport || [], ui(n) ? n : []) : n, v = r.concat(p);
  return a ? v : v.concat(zn(an(p)));
}
__name(zn, "zn");
c(zn, "listScrollParents");
function Fi(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
__name(Fi, "Fi");
c(Fi, "rectToClientRect");
function Ub(e) {
  var r = br(e);
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
__name(Ub, "Ub");
c(Ub, "getInnerBoundingClientRect");
function xf(e, r) {
  return r === Ps ? Fi(Au(e)) : jr(r) ? Ub(r) : Fi(Pu(Tt(e)));
}
__name(xf, "xf");
c(xf, "getClientRectFromMixedType");
function Wb(e) {
  var r = zn(an(e)), t = ["absolute", "fixed"].indexOf(jt(e).position) >= 0, n = t && vt(e) ? Ir(e) : e;
  return jr(n) ? r.filter(function(a) {
    return jr(a) && Ho(a, n) && yt(a) !== "body";
  }) : [];
}
__name(Wb, "Wb");
c(Wb, "getClippingParents");
function _u(e, r, t) {
  var n = r === "clippingParents" ? Wb(e) : [].concat(r), a = [].concat(n, [t]), s = a[0], p = a.reduce(function(v, m) {
    var d = xf(e, m);
    return v.top = Mr(d.top, v.top), v.right = ni(d.right, v.right), v.bottom = ni(d.bottom, v.bottom), v.left = Mr(d.left, v.left), v;
  }, xf(e, s));
  return p.width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p;
}
__name(_u, "_u");
c(_u, "getClippingRect");
function Uo(e) {
  var r = e.reference, t = e.element, n = e.placement, a = n ? xt(n) : null, s = n ? yr(n) : null, p = r.x + r.width / 2 - t.width / 2, v = r.y + r.height / 2 - t.height / 2, m;
  switch (a) {
    case Qe:
      m = { x: p, y: r.y - t.height };
      break;
    case mt:
      m = { x: p, y: r.y + r.height };
      break;
    case st:
      m = { x: r.x + r.width, y: v };
      break;
    case tt:
      m = { x: r.x - t.width, y: v };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  var d = a ? oi(a) : null;
  if (d != null) {
    var h = d === "y" ? "height" : "width";
    switch (s) {
      case nn:
        m[d] = m[d] - (r[h] / 2 - t[h] / 2);
        break;
      case ri:
        m[d] = m[d] + (r[h] / 2 - t[h] / 2);
        break;
      default:
    }
  }
  return m;
}
__name(Uo, "Uo");
c(Uo, "computeOffsets");
function Ar(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.placement, a = n === void 0 ? e.placement : n, s = t.boundary, p = s === void 0 ? pf : s, v = t.rootBoundary, m = v === void 0 ? Ps : v, d = t.elementContext, h = d === void 0 ? $i : d, y = t.altBoundary, x = y === void 0 ? false : y, S = t.padding, C = S === void 0 ? 0 : S, T = qo(typeof C != "number" ? C : Fo(C, _n)), _ = h === $i ? df : $i, N = e.rects.popper, j = e.elements[x ? _ : h], $ = _u(jr(j) ? j : j.contextElement || Tt(e.elements.popper), p, m), A = br(e.elements.reference), ee = Uo({ reference: A, element: N, strategy: "absolute", placement: a }), z = Fi(Object.assign({}, N, ee)), B = h === $i ? z : A, J = { top: $.top - B.top + T.top, bottom: B.bottom - $.bottom + T.bottom, left: $.left - B.left + T.left, right: B.right - $.right + T.right }, te = e.modifiersData.offset;
  if (h === $i && te) {
    var le = te[a];
    Object.keys(J).forEach(function(Y) {
      var ie = [st, mt].indexOf(Y) >= 0 ? 1 : -1, W = [Qe, mt].indexOf(Y) >= 0 ? "y" : "x";
      J[Y] += le[W] * ie;
    });
  }
  return J;
}
__name(Ar, "Ar");
c(Ar, "detectOverflow");
function zu(e, r) {
  r === void 0 && (r = {});
  var t = r, n = t.placement, a = t.boundary, s = t.rootBoundary, p = t.padding, v = t.flipVariations, m = t.allowedAutoPlacements, d = m === void 0 ? _s : m, h = yr(n), y = h ? v ? Mu : Mu.filter(function(C) {
    return yr(C) === h;
  }) : _n, x = y.filter(function(C) {
    return d.indexOf(C) >= 0;
  });
  x.length === 0 && (x = y);
  var S = x.reduce(function(C, T) {
    return C[T] = Ar(e, { placement: T, boundary: a, rootBoundary: s, padding: p })[xt(T)], C;
  }, {});
  return Object.keys(S).sort(function(C, T) {
    return S[C] - S[T];
  });
}
__name(zu, "zu");
c(zu, "computeAutoPlacement");
function Vb(e) {
  if (xt(e) === As)
    return [];
  var r = qi(e);
  return [Ds(e), r, Ds(r)];
}
__name(Vb, "Vb");
c(Vb, "getExpandedFallbackPlacements");
function Yb(e) {
  var r = e.state, t = e.options, n = e.name;
  if (!r.modifiersData[n]._skip) {
    for (var a = t.mainAxis, s = a === void 0 ? true : a, p = t.altAxis, v = p === void 0 ? true : p, m = t.fallbackPlacements, d = t.padding, h = t.boundary, y = t.rootBoundary, x = t.altBoundary, S = t.flipVariations, C = S === void 0 ? true : S, T = t.allowedAutoPlacements, _ = r.options.placement, N = xt(_), j = N === _, $ = m || (j || !C ? [qi(_)] : Vb(_)), A = [_].concat($).reduce(function(Ie, Je) {
      return Ie.concat(xt(Je) === As ? zu(r, { placement: Je, boundary: h, rootBoundary: y, padding: d, flipVariations: C, allowedAutoPlacements: T }) : Je);
    }, []), ee = r.rects.reference, z = r.rects.popper, B = /* @__PURE__ */ new Map(), J = true, te = A[0], le = 0; le < A.length; le++) {
      var Y = A[le], ie = xt(Y), W = yr(Y) === nn, ue = [Qe, mt].indexOf(ie) >= 0, Ue = ue ? "width" : "height", qe = Ar(r, { placement: Y, boundary: h, rootBoundary: y, altBoundary: x, padding: d }), De = ue ? W ? st : tt : W ? mt : Qe;
      ee[Ue] > z[Ue] && (De = qi(De));
      var je = qi(De), it = [];
      if (s && it.push(qe[ie] <= 0), v && it.push(qe[De] <= 0, qe[je] <= 0), it.every(function(Ie) {
        return Ie;
      })) {
        te = Y, J = false;
        break;
      }
      B.set(Y, it);
    }
    if (J)
      for (var Ze = C ? 3 : 1, Ve = c(function(Je) {
        var cr = A.find(function(Cr) {
          var pr = B.get(Cr);
          if (pr)
            return pr.slice(0, Je).every(function(or) {
              return or;
            });
        });
        if (cr)
          return te = cr, "break";
      }, "_loop"), Q = Ze; Q > 0; Q--) {
        var ir = Ve(Q);
        if (ir === "break")
          break;
      }
    r.placement !== te && (r.modifiersData[n]._skip = true, r.placement = te, r.reset = true);
  }
}
__name(Yb, "Yb");
c(Yb, "flip");
var wf = { name: "flip", enabled: true, phase: "main", fn: Yb, requiresIfExists: ["offset"], data: { _skip: false } };
function Ef(e, r, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: e.top - r.height - t.y, right: e.right - r.width + t.x, bottom: e.bottom - r.height + t.y, left: e.left - r.width - t.x };
}
__name(Ef, "Ef");
c(Ef, "getSideOffsets");
function Sf(e) {
  return [Qe, st, mt, tt].some(function(r) {
    return e[r] >= 0;
  });
}
__name(Sf, "Sf");
c(Sf, "isAnySideFullyClipped");
function Xb(e) {
  var r = e.state, t = e.name, n = r.rects.reference, a = r.rects.popper, s = r.modifiersData.preventOverflow, p = Ar(r, { elementContext: "reference" }), v = Ar(r, { altBoundary: true }), m = Ef(p, n), d = Ef(v, a, s), h = Sf(m), y = Sf(d);
  r.modifiersData[t] = { referenceClippingOffsets: m, popperEscapeOffsets: d, isReferenceHidden: h, hasPopperEscaped: y }, r.attributes.popper = Object.assign({}, r.attributes.popper, { "data-popper-reference-hidden": h, "data-popper-escaped": y });
}
__name(Xb, "Xb");
c(Xb, "hide");
var Cf = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Xb };
function Zb(e, r, t) {
  var n = xt(e), a = [tt, Qe].indexOf(n) >= 0 ? -1 : 1, s = typeof t == "function" ? t(Object.assign({}, r, { placement: e })) : t, p = s[0], v = s[1];
  return p = p || 0, v = (v || 0) * a, [tt, st].indexOf(n) >= 0 ? { x: v, y: p } : { x: p, y: v };
}
__name(Zb, "Zb");
c(Zb, "distanceAndSkiddingToXY");
function Kb(e) {
  var r = e.state, t = e.options, n = e.name, a = t.offset, s = a === void 0 ? [0, 0] : a, p = _s.reduce(function(h, y) {
    return h[y] = Zb(y, r.rects, s), h;
  }, {}), v = p[r.placement], m = v.x, d = v.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += m, r.modifiersData.popperOffsets.y += d), r.modifiersData[n] = p;
}
__name(Kb, "Kb");
c(Kb, "offset");
var Tf = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Kb };
function Qb(e) {
  var r = e.state, t = e.name;
  r.modifiersData[t] = Uo({ reference: r.rects.reference, element: r.rects.popper, strategy: "absolute", placement: r.placement });
}
__name(Qb, "Qb");
c(Qb, "popperOffsets");
var Of = { name: "popperOffsets", enabled: true, phase: "read", fn: Qb, data: {} };
function Ru(e) {
  return e === "x" ? "y" : "x";
}
__name(Ru, "Ru");
c(Ru, "getAltAxis");
function Jb(e) {
  var r = e.state, t = e.options, n = e.name, a = t.mainAxis, s = a === void 0 ? true : a, p = t.altAxis, v = p === void 0 ? false : p, m = t.boundary, d = t.rootBoundary, h = t.altBoundary, y = t.padding, x = t.tether, S = x === void 0 ? true : x, C = t.tetherOffset, T = C === void 0 ? 0 : C, _ = Ar(r, { boundary: m, rootBoundary: d, padding: y, altBoundary: h }), N = xt(r.placement), j = yr(r.placement), $ = !j, A = oi(N), ee = Ru(A), z = r.modifiersData.popperOffsets, B = r.rects.reference, J = r.rects.popper, te = typeof T == "function" ? T(Object.assign({}, r.rects, { placement: r.placement })) : T, le = typeof te == "number" ? { mainAxis: te, altAxis: te } : Object.assign({ mainAxis: 0, altAxis: 0 }, te), Y = r.modifiersData.offset ? r.modifiersData.offset[r.placement] : null, ie = { x: 0, y: 0 };
  if (z) {
    if (s) {
      var W, ue = A === "y" ? Qe : tt, Ue = A === "y" ? mt : st, qe = A === "y" ? "height" : "width", De = z[A], je = De + _[ue], it = De - _[Ue], Ze = S ? -J[qe] / 2 : 0, Ve = j === nn ? B[qe] : J[qe], Q = j === nn ? -J[qe] : -B[qe], ir = r.elements.arrow, Ie = S && ir ? ii(ir) : { width: 0, height: 0 }, Je = r.modifiersData["arrow#persistent"] ? r.modifiersData["arrow#persistent"].padding : $o(), cr = Je[ue], Cr = Je[Ue], pr = ai(0, B[qe], Ie[qe]), or = $ ? B[qe] / 2 - Ze - pr - cr - le.mainAxis : Ve - pr - cr - le.mainAxis, zr = $ ? -B[qe] / 2 + Ze + pr + Cr + le.mainAxis : Q + pr + Cr + le.mainAxis, Ur = r.elements.arrow && Ir(r.elements.arrow), Nn = Ur ? A === "y" ? Ur.clientTop || 0 : Ur.clientLeft || 0 : 0, Me = (W = Y == null ? void 0 : Y[A]) != null ? W : 0, kn = De + or - Me - Nn, Ln = De + zr - Me, kt = ai(S ? ni(je, kn) : je, De, S ? Mr(it, Ln) : it);
      z[A] = kt, ie[A] = kt - De;
    }
    if (v) {
      var Wr, di = A === "x" ? Qe : tt, dn = A === "x" ? mt : st, Tr = z[ee], It = ee === "y" ? "height" : "width", Rr = Tr + _[di], qt = Tr - _[dn], Gn = [Qe, tt].indexOf(N) !== -1, Vr = (Wr = Y == null ? void 0 : Y[ee]) != null ? Wr : 0, jn = Gn ? Rr : Tr - B[It] - J[It] - Vr + le.altAxis, fn = Gn ? Tr + B[It] + J[It] - Vr - le.altAxis : qt, Bn = S && Gn ? mf(jn, Tr, fn) : ai(S ? jn : Rr, Tr, S ? fn : qt);
      z[ee] = Bn, ie[ee] = Bn - Tr;
    }
    r.modifiersData[n] = ie;
  }
}
__name(Jb, "Jb");
c(Jb, "preventOverflow");
var Mf = { name: "preventOverflow", enabled: true, phase: "main", fn: Jb, requiresIfExists: ["offset"] };
function Du(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
__name(Du, "Du");
c(Du, "getHTMLElementScroll");
function Nu(e) {
  return e === rt(e) || !vt(e) ? si(e) : Du(e);
}
__name(Nu, "Nu");
c(Nu, "getNodeScroll");
function ey(e) {
  var r = e.getBoundingClientRect(), t = on(r.width) / e.offsetWidth || 1, n = on(r.height) / e.offsetHeight || 1;
  return t !== 1 || n !== 1;
}
__name(ey, "ey");
c(ey, "isElementScaled");
function ku(e, r, t) {
  t === void 0 && (t = false);
  var n = vt(r), a = vt(r) && ey(r), s = Tt(r), p = br(e, a), v = { scrollLeft: 0, scrollTop: 0 }, m = { x: 0, y: 0 };
  return (n || !n && !t) && ((yt(r) !== "body" || ui(s)) && (v = Nu(r)), vt(r) ? (m = br(r, true), m.x += r.clientLeft, m.y += r.clientTop) : s && (m.x = li(s))), { x: p.left + v.scrollLeft - m.x, y: p.top + v.scrollTop - m.y, width: p.width, height: p.height };
}
__name(ku, "ku");
c(ku, "getCompositeRect");
function ty(e) {
  var r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    r.set(s.name, s);
  });
  function a(s) {
    t.add(s.name);
    var p = [].concat(s.requires || [], s.requiresIfExists || []);
    p.forEach(function(v) {
      if (!t.has(v)) {
        var m = r.get(v);
        m && a(m);
      }
    }), n.push(s);
  }
  __name(a, "a");
  return c(a, "sort"), e.forEach(function(s) {
    t.has(s.name) || a(s);
  }), n;
}
__name(ty, "ty");
c(ty, "order");
function Lu(e) {
  var r = ty(e);
  return ff.reduce(function(t, n) {
    return t.concat(r.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
__name(Lu, "Lu");
c(Lu, "orderModifiers");
function Gu(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(t) {
      Promise.resolve().then(function() {
        r = void 0, t(e());
      });
    })), r;
  };
}
__name(Gu, "Gu");
c(Gu, "debounce");
function ju(e) {
  var r = e.reduce(function(t, n) {
    var a = t[n.name];
    return t[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, t;
  }, {});
  return Object.keys(r).map(function(t) {
    return r[t];
  });
}
__name(ju, "ju");
c(ju, "mergeByName");
var If = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Af() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return !r.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
__name(Af, "Af");
c(Af, "areValidElements");
function Pf(e) {
  e === void 0 && (e = {});
  var r = e, t = r.defaultModifiers, n = t === void 0 ? [] : t, a = r.defaultOptions, s = a === void 0 ? If : a;
  return c(function(v, m, d) {
    d === void 0 && (d = s);
    var h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, If, s), modifiersData: {}, elements: { reference: v, popper: m }, attributes: {}, styles: {} }, y = [], x = false, S = { state: h, setOptions: c(function(N) {
      var j = typeof N == "function" ? N(h.options) : N;
      T(), h.options = Object.assign({}, s, h.options, j), h.scrollParents = { reference: jr(v) ? zn(v) : v.contextElement ? zn(v.contextElement) : [], popper: zn(m) };
      var $ = Lu(ju([].concat(n, h.options.modifiers)));
      if (h.orderedModifiers = $.filter(function(Y) {
        return Y.enabled;
      }), false) {
        var A;
        if (getBasePlacement(h.options.placement) === auto)
          var ee;
        var z, B, J, te, le;
      }
      return C(), S.update();
    }, "setOptions"), forceUpdate: c(function() {
      if (!x) {
        var N = h.elements, j = N.reference, $ = N.popper;
        if (Af(j, $)) {
          h.rects = { reference: ku(j, Ir($), h.options.strategy === "fixed"), popper: ii($) }, h.reset = false, h.placement = h.options.placement, h.orderedModifiers.forEach(function(Y) {
            return h.modifiersData[Y.name] = Object.assign({}, Y.data);
          });
          for (var A = 0, ee = 0; ee < h.orderedModifiers.length; ee++) {
            if (h.reset === true) {
              h.reset = false, ee = -1;
              continue;
            }
            var z = h.orderedModifiers[ee], B = z.fn, J = z.options, te = J === void 0 ? {} : J, le = z.name;
            typeof B == "function" && (h = B({ state: h, options: te, name: le, instance: S }) || h);
          }
        }
      }
    }, "forceUpdate"), update: Gu(function() {
      return new Promise(function(_) {
        S.forceUpdate(), _(h);
      });
    }), destroy: c(function() {
      T(), x = true;
    }, "destroy") };
    if (!Af(v, m))
      return S;
    S.setOptions(d).then(function(_) {
      !x && d.onFirstUpdate && d.onFirstUpdate(_);
    });
    function C() {
      h.orderedModifiers.forEach(function(_) {
        var N = _.name, j = _.options, $ = j === void 0 ? {} : j, A = _.effect;
        if (typeof A == "function") {
          var ee = A({ state: h, name: N, instance: S, options: $ }), z = c(function() {
          }, "noopFn");
          y.push(ee || z);
        }
      });
    }
    __name(C, "C");
    c(C, "runModifierEffects");
    function T() {
      y.forEach(function(_) {
        return _();
      }), y = [];
    }
    __name(T, "T");
    return c(T, "cleanupModifierEffects"), S;
  }, "createPopper");
}
__name(Pf, "Pf");
c(Pf, "popperGenerator");
var ry = [yf, Of, bf, Bo, Tf, wf, Mf, vf, Cf];
var Bu = Pf({ defaultModifiers: ry });
var ny = "tippy-box";
var Bf = "tippy-content";
var iy = "tippy-backdrop";
var Hf = "tippy-arrow";
var $f = "tippy-svg-arrow";
var ci = { passive: true, capture: true };
var qf = c(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function Hu(e, r, t) {
  if (Array.isArray(e)) {
    var n = e[r];
    return n == null ? Array.isArray(t) ? t[r] : t : n;
  }
  return e;
}
__name(Hu, "Hu");
c(Hu, "getValueAtIndexOrReturn");
function Vu(e, r) {
  var t = {}.toString.call(e);
  return t.indexOf("[object") === 0 && t.indexOf(r + "]") > -1;
}
__name(Vu, "Vu");
c(Vu, "isType");
function Ff(e, r) {
  return typeof e == "function" ? e.apply(void 0, r) : e;
}
__name(Ff, "Ff");
c(Ff, "invokeWithArgsOrReturn");
function _f(e, r) {
  if (r === 0)
    return e;
  var t;
  return function(n) {
    clearTimeout(t), t = setTimeout(function() {
      e(n);
    }, r);
  };
}
__name(_f, "_f");
c(_f, "debounce");
function oy(e) {
  return e.split(/\s+/).filter(Boolean);
}
__name(oy, "oy");
c(oy, "splitBySpaces");
function Ui(e) {
  return [].concat(e);
}
__name(Ui, "Ui");
c(Ui, "normalizeToArray");
function zf(e, r) {
  e.indexOf(r) === -1 && e.push(r);
}
__name(zf, "zf");
c(zf, "pushIfUnique");
function ay(e) {
  return e.filter(function(r, t) {
    return e.indexOf(r) === t;
  });
}
__name(ay, "ay");
c(ay, "unique");
function sy(e) {
  return e.split("-")[0];
}
__name(sy, "sy");
c(sy, "getBasePlacement");
function Ls(e) {
  return [].slice.call(e);
}
__name(Ls, "Ls");
c(Ls, "arrayFrom");
function Rf(e) {
  return Object.keys(e).reduce(function(r, t) {
    return e[t] !== void 0 && (r[t] = e[t]), r;
  }, {});
}
__name(Rf, "Rf");
c(Rf, "removeUndefinedProps");
function Wo() {
  return document.createElement("div");
}
__name(Wo, "Wo");
c(Wo, "div");
function Gs(e) {
  return ["Element", "Fragment"].some(function(r) {
    return Vu(e, r);
  });
}
__name(Gs, "Gs");
c(Gs, "isElement");
function ly(e) {
  return Vu(e, "NodeList");
}
__name(ly, "ly");
c(ly, "isNodeList");
function uy(e) {
  return Vu(e, "MouseEvent");
}
__name(uy, "uy");
c(uy, "isMouseEvent");
function cy(e) {
  return !!(e && e._tippy && e._tippy.reference === e);
}
__name(cy, "cy");
c(cy, "isReferenceElement");
function py(e) {
  return Gs(e) ? [e] : ly(e) ? Ls(e) : Array.isArray(e) ? e : Ls(document.querySelectorAll(e));
}
__name(py, "py");
c(py, "getArrayOfElements");
function $u(e, r) {
  e.forEach(function(t) {
    t && (t.style.transitionDuration = r + "ms");
  });
}
__name($u, "$u");
c($u, "setTransitionDuration");
function Df(e, r) {
  e.forEach(function(t) {
    t && t.setAttribute("data-state", r);
  });
}
__name(Df, "Df");
c(Df, "setVisibilityState");
function dy(e) {
  var r, t = Ui(e), n = t[0];
  return n != null && (r = n.ownerDocument) != null && r.body ? n.ownerDocument : document;
}
__name(dy, "dy");
c(dy, "getOwnerDocument");
function fy(e, r) {
  var t = r.clientX, n = r.clientY;
  return e.every(function(a) {
    var s = a.popperRect, p = a.popperState, v = a.props, m = v.interactiveBorder, d = sy(p.placement), h = p.modifiersData.offset;
    if (!h)
      return true;
    var y = d === "bottom" ? h.top.y : 0, x = d === "top" ? h.bottom.y : 0, S = d === "right" ? h.left.x : 0, C = d === "left" ? h.right.x : 0, T = s.top - n + y > m, _ = n - s.bottom - x > m, N = s.left - t + S > m, j = t - s.right - C > m;
    return T || _ || N || j;
  });
}
__name(fy, "fy");
c(fy, "isCursorOutsideInteractiveBorder");
function qu(e, r, t) {
  var n = r + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(a) {
    e[n](a, t);
  });
}
__name(qu, "qu");
c(qu, "updateTransitionEndListener");
function Nf(e, r) {
  for (var t = r; t; ) {
    var n;
    if (e.contains(t))
      return true;
    t = t.getRootNode == null || (n = t.getRootNode()) == null ? void 0 : n.host;
  }
  return false;
}
__name(Nf, "Nf");
c(Nf, "actualContains");
var Br = { isTouch: false };
var kf = 0;
function hy() {
  Br.isTouch || (Br.isTouch = true, window.performance && document.addEventListener("mousemove", Uf));
}
__name(hy, "hy");
c(hy, "onDocumentTouchStart");
function Uf() {
  var e = performance.now();
  e - kf < 20 && (Br.isTouch = false, document.removeEventListener("mousemove", Uf)), kf = e;
}
__name(Uf, "Uf");
c(Uf, "onDocumentMouseMove");
function my() {
  var e = document.activeElement;
  if (cy(e)) {
    var r = e._tippy;
    e.blur && !r.state.isVisible && e.blur();
  }
}
__name(my, "my");
c(my, "onWindowBlur");
function vy() {
  document.addEventListener("touchstart", hy, ci), window.addEventListener("blur", my);
}
__name(vy, "vy");
c(vy, "bindGlobalEventListeners");
var gy = typeof window != "undefined" && typeof document != "undefined";
var by = gy ? !!window.msCrypto : false;
var yy = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var xy = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var Pr = Object.assign({ appendTo: qf, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: c(function() {
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
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, yy, xy);
var wy = Object.keys(Pr);
var Ey = c(function(r) {
  var t = Object.keys(r);
  t.forEach(function(n) {
    Pr[n] = r[n];
  });
}, "setDefaultProps");
function Wf(e) {
  var r = e.plugins || [], t = r.reduce(function(n, a) {
    var s = a.name, p = a.defaultValue;
    if (s) {
      var v;
      n[s] = e[s] !== void 0 ? e[s] : (v = Pr[s]) != null ? v : p;
    }
    return n;
  }, {});
  return Object.assign({}, e, t);
}
__name(Wf, "Wf");
c(Wf, "getExtendedPassedProps");
function Sy(e, r) {
  var t = r ? Object.keys(Wf(Object.assign({}, Pr, { plugins: r }))) : wy, n = t.reduce(function(a, s) {
    var p = (e.getAttribute("data-tippy-" + s) || "").trim();
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
__name(Sy, "Sy");
c(Sy, "getDataAttributeProps");
function Lf(e, r) {
  var t = Object.assign({}, r, { content: Ff(r.content, [e]) }, r.ignoreAttributes ? {} : Sy(e, r.plugins));
  return t.aria = Object.assign({}, Pr.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? r.interactive : t.aria.expanded, content: t.aria.content === "auto" ? r.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(Lf, "Lf");
c(Lf, "evaluateProps");
var Cy = c(function() {
  return "innerHTML";
}, "innerHTML");
function Uu(e, r) {
  e[Cy()] = r;
}
__name(Uu, "Uu");
c(Uu, "dangerouslySetInnerHTML");
function Gf(e) {
  var r = Wo();
  return e === true ? r.className = Hf : (r.className = $f, Gs(e) ? r.appendChild(e) : Uu(r, e)), r;
}
__name(Gf, "Gf");
c(Gf, "createArrowElement");
function jf(e, r) {
  Gs(r.content) ? (Uu(e, ""), e.appendChild(r.content)) : typeof r.content != "function" && (r.allowHTML ? Uu(e, r.content) : e.textContent = r.content);
}
__name(jf, "jf");
c(jf, "setContent");
function Wu(e) {
  var r = e.firstElementChild, t = Ls(r.children);
  return { box: r, content: t.find(function(n) {
    return n.classList.contains(Bf);
  }), arrow: t.find(function(n) {
    return n.classList.contains(Hf) || n.classList.contains($f);
  }), backdrop: t.find(function(n) {
    return n.classList.contains(iy);
  }) };
}
__name(Wu, "Wu");
c(Wu, "getChildren");
function Vf(e) {
  var r = Wo(), t = Wo();
  t.className = ny, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var n = Wo();
  n.className = Bf, n.setAttribute("data-state", "hidden"), jf(n, e.props), r.appendChild(t), t.appendChild(n), a(e.props, e.props);
  function a(s, p) {
    var v = Wu(r), m = v.box, d = v.content, h = v.arrow;
    p.theme ? m.setAttribute("data-theme", p.theme) : m.removeAttribute("data-theme"), typeof p.animation == "string" ? m.setAttribute("data-animation", p.animation) : m.removeAttribute("data-animation"), p.inertia ? m.setAttribute("data-inertia", "") : m.removeAttribute("data-inertia"), m.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? m.setAttribute("role", p.role) : m.removeAttribute("role"), (s.content !== p.content || s.allowHTML !== p.allowHTML) && jf(d, e.props), p.arrow ? h ? s.arrow !== p.arrow && (m.removeChild(h), m.appendChild(Gf(p.arrow))) : m.appendChild(Gf(p.arrow)) : h && m.removeChild(h);
  }
  __name(a, "a");
  return c(a, "onUpdate"), { popper: r, onUpdate: a };
}
__name(Vf, "Vf");
c(Vf, "render");
Vf.$$tippy = true;
var Ty = 1;
var ks = [];
var Fu = [];
function Oy(e, r) {
  var t = Lf(e, Object.assign({}, Pr, Wf(Rf(r)))), n, a, s, p = false, v = false, m = false, d = false, h, y, x, S = [], C = _f(kn, t.interactiveDebounce), T, _ = Ty++, N = null, j = ay(t.plugins), $ = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, A = { id: _, reference: e, popper: Wo(), popperInstance: N, props: t, state: $, plugins: j, clearDelayTimeouts: jn, setProps: fn, setContent: Bn, show: Ki, hide: Qi, hideWithInteractivity: oa, enable: Gn, disable: Vr, unmount: aa, destroy: Js };
  if (!t.render)
    return A;
  var ee = t.render(A), z = ee.popper, B = ee.onUpdate;
  z.setAttribute("data-tippy-root", ""), z.id = "tippy-" + A.id, A.popper = z, e._tippy = A, z._tippy = A;
  var J = j.map(function(L) {
    return L.fn(A);
  }), te = e.hasAttribute("aria-expanded");
  return Ur(), Ze(), De(), je("onCreate", [A]), t.showOnCreate && Rr(), z.addEventListener("mouseenter", function() {
    A.props.interactive && A.state.isVisible && A.clearDelayTimeouts();
  }), z.addEventListener("mouseleave", function() {
    A.props.interactive && A.props.trigger.indexOf("mouseenter") >= 0 && ue().addEventListener("mousemove", C);
  }), A;
  function le() {
    var L = A.props.touch;
    return Array.isArray(L) ? L : [L, 0];
  }
  __name(le, "le");
  c(le, "getNormalizedTouchSettings");
  function Y() {
    return le()[0] === "hold";
  }
  __name(Y, "Y");
  c(Y, "getIsCustomTouchBehavior");
  function ie() {
    var L;
    return !!((L = A.props.render) != null && L.$$tippy);
  }
  __name(ie, "ie");
  c(ie, "getIsDefaultRenderFn");
  function W() {
    return T || e;
  }
  __name(W, "W");
  c(W, "getCurrentTarget");
  function ue() {
    var L = W().parentNode;
    return L ? dy(L) : document;
  }
  __name(ue, "ue");
  c(ue, "getDocument");
  function Ue() {
    return Wu(z);
  }
  __name(Ue, "Ue");
  c(Ue, "getDefaultTemplateChildren");
  function qe(L) {
    return A.state.isMounted && !A.state.isVisible || Br.isTouch || h && h.type === "focus" ? 0 : Hu(A.props.delay, L ? 0 : 1, Pr.delay);
  }
  __name(qe, "qe");
  c(qe, "getDelay");
  function De(L) {
    L === void 0 && (L = false), z.style.pointerEvents = A.props.interactive && !L ? "" : "none", z.style.zIndex = "" + A.props.zIndex;
  }
  __name(De, "De");
  c(De, "handleStyles");
  function je(L, re, ae) {
    if (ae === void 0 && (ae = true), J.forEach(function(ge) {
      ge[L] && ge[L].apply(ge, re);
    }), ae) {
      var Ae;
      (Ae = A.props)[L].apply(Ae, re);
    }
  }
  __name(je, "je");
  c(je, "invokeHook");
  function it() {
    var L = A.props.aria;
    if (L.content) {
      var re = "aria-" + L.content, ae = z.id, Ae = Ui(A.props.triggerTarget || e);
      Ae.forEach(function(ge) {
        var wt = ge.getAttribute(re);
        if (A.state.isVisible)
          ge.setAttribute(re, wt ? wt + " " + ae : ae);
        else {
          var Lt = wt && wt.replace(ae, "").trim();
          Lt ? ge.setAttribute(re, Lt) : ge.removeAttribute(re);
        }
      });
    }
  }
  __name(it, "it");
  c(it, "handleAriaContentAttribute");
  function Ze() {
    if (!(te || !A.props.aria.expanded)) {
      var L = Ui(A.props.triggerTarget || e);
      L.forEach(function(re) {
        A.props.interactive ? re.setAttribute("aria-expanded", A.state.isVisible && re === W() ? "true" : "false") : re.removeAttribute("aria-expanded");
      });
    }
  }
  __name(Ze, "Ze");
  c(Ze, "handleAriaExpandedAttribute");
  function Ve() {
    ue().removeEventListener("mousemove", C), ks = ks.filter(function(L) {
      return L !== C;
    });
  }
  __name(Ve, "Ve");
  c(Ve, "cleanupInteractiveMouseListeners");
  function Q(L) {
    if (!(Br.isTouch && (m || L.type === "mousedown"))) {
      var re = L.composedPath && L.composedPath()[0] || L.target;
      if (!(A.props.interactive && Nf(z, re))) {
        if (Ui(A.props.triggerTarget || e).some(function(ae) {
          return Nf(ae, re);
        })) {
          if (Br.isTouch || A.state.isVisible && A.props.trigger.indexOf("click") >= 0)
            return;
        } else
          je("onClickOutside", [A, L]);
        A.props.hideOnClick === true && (A.clearDelayTimeouts(), A.hide(), v = true, setTimeout(function() {
          v = false;
        }), A.state.isMounted || cr());
      }
    }
  }
  __name(Q, "Q");
  c(Q, "onDocumentPress");
  function ir() {
    m = true;
  }
  __name(ir, "ir");
  c(ir, "onTouchMove");
  function Ie() {
    m = false;
  }
  __name(Ie, "Ie");
  c(Ie, "onTouchStart");
  function Je() {
    var L = ue();
    L.addEventListener("mousedown", Q, true), L.addEventListener("touchend", Q, ci), L.addEventListener("touchstart", Ie, ci), L.addEventListener("touchmove", ir, ci);
  }
  __name(Je, "Je");
  c(Je, "addDocumentPress");
  function cr() {
    var L = ue();
    L.removeEventListener("mousedown", Q, true), L.removeEventListener("touchend", Q, ci), L.removeEventListener("touchstart", Ie, ci), L.removeEventListener("touchmove", ir, ci);
  }
  __name(cr, "cr");
  c(cr, "removeDocumentPress");
  function Cr(L, re) {
    or(L, function() {
      !A.state.isVisible && z.parentNode && z.parentNode.contains(z) && re();
    });
  }
  __name(Cr, "Cr");
  c(Cr, "onTransitionedOut");
  function pr(L, re) {
    or(L, re);
  }
  __name(pr, "pr");
  c(pr, "onTransitionedIn");
  function or(L, re) {
    var ae = Ue().box;
    function Ae(ge) {
      ge.target === ae && (qu(ae, "remove", Ae), re());
    }
    __name(Ae, "Ae");
    if (c(Ae, "listener"), L === 0)
      return re();
    qu(ae, "remove", y), qu(ae, "add", Ae), y = Ae;
  }
  __name(or, "or");
  c(or, "onTransitionEnd");
  function zr(L, re, ae) {
    ae === void 0 && (ae = false);
    var Ae = Ui(A.props.triggerTarget || e);
    Ae.forEach(function(ge) {
      ge.addEventListener(L, re, ae), S.push({ node: ge, eventType: L, handler: re, options: ae });
    });
  }
  __name(zr, "zr");
  c(zr, "on");
  function Ur() {
    Y() && (zr("touchstart", Me, { passive: true }), zr("touchend", Ln, { passive: true })), oy(A.props.trigger).forEach(function(L) {
      if (L !== "manual")
        switch (zr(L, Me), L) {
          case "mouseenter":
            zr("mouseleave", Ln);
            break;
          case "focus":
            zr(by ? "focusout" : "blur", kt);
            break;
          case "focusin":
            zr("focusout", kt);
            break;
        }
    });
  }
  __name(Ur, "Ur");
  c(Ur, "addListeners");
  function Nn() {
    S.forEach(function(L) {
      var re = L.node, ae = L.eventType, Ae = L.handler, ge = L.options;
      re.removeEventListener(ae, Ae, ge);
    }), S = [];
  }
  __name(Nn, "Nn");
  c(Nn, "removeListeners");
  function Me(L) {
    var re, ae = false;
    if (!(!A.state.isEnabled || Wr(L) || v)) {
      var Ae = ((re = h) == null ? void 0 : re.type) === "focus";
      h = L, T = L.currentTarget, Ze(), !A.state.isVisible && uy(L) && ks.forEach(function(ge) {
        return ge(L);
      }), L.type === "click" && (A.props.trigger.indexOf("mouseenter") < 0 || p) && A.props.hideOnClick !== false && A.state.isVisible ? ae = true : Rr(L), L.type === "click" && (p = !ae), ae && !Ae && qt(L);
    }
  }
  __name(Me, "Me");
  c(Me, "onTrigger");
  function kn(L) {
    var re = L.target, ae = W().contains(re) || z.contains(re);
    if (!(L.type === "mousemove" && ae)) {
      var Ae = It().concat(z).map(function(ge) {
        var wt, Lt = ge._tippy, At = (wt = Lt.popperInstance) == null ? void 0 : wt.state;
        return At ? { popperRect: ge.getBoundingClientRect(), popperState: At, props: t } : null;
      }).filter(Boolean);
      fy(Ae, L) && (Ve(), qt(L));
    }
  }
  __name(kn, "kn");
  c(kn, "onMouseMove");
  function Ln(L) {
    var re = Wr(L) || A.props.trigger.indexOf("click") >= 0 && p;
    if (!re) {
      if (A.props.interactive) {
        A.hideWithInteractivity(L);
        return;
      }
      qt(L);
    }
  }
  __name(Ln, "Ln");
  c(Ln, "onMouseLeave");
  function kt(L) {
    A.props.trigger.indexOf("focusin") < 0 && L.target !== W() || A.props.interactive && L.relatedTarget && z.contains(L.relatedTarget) || qt(L);
  }
  __name(kt, "kt");
  c(kt, "onBlurOrFocusOut");
  function Wr(L) {
    return Br.isTouch ? Y() !== L.type.indexOf("touch") >= 0 : false;
  }
  __name(Wr, "Wr");
  c(Wr, "isEventListenerStopped");
  function di() {
    dn();
    var L = A.props, re = L.popperOptions, ae = L.placement, Ae = L.offset, ge = L.getReferenceClientRect, wt = L.moveTransition, Lt = ie() ? Wu(z).arrow : null, At = ge ? { getBoundingClientRect: ge, contextElement: ge.contextElement || W() } : e, sa = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: c(function(Pt) {
      var _t = Pt.state;
      if (ie()) {
        var Yr = Ue(), fi = Yr.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(hi) {
          hi === "placement" ? fi.setAttribute("data-placement", _t.placement) : _t.attributes.popper["data-popper-" + hi] ? fi.setAttribute("data-" + hi, "") : fi.removeAttribute("data-" + hi);
        }), _t.attributes.popper = {};
      }
    }, "fn") }, dr = [{ name: "offset", options: { offset: Ae } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !wt } }, sa];
    ie() && Lt && dr.push({ name: "arrow", options: { element: Lt, padding: 3 } }), dr.push.apply(dr, (re == null ? void 0 : re.modifiers) || []), A.popperInstance = Bu(At, z, Object.assign({}, re, { placement: ae, onFirstUpdate: x, modifiers: dr }));
  }
  __name(di, "di");
  c(di, "createPopperInstance");
  function dn() {
    A.popperInstance && (A.popperInstance.destroy(), A.popperInstance = null);
  }
  __name(dn, "dn");
  c(dn, "destroyPopperInstance");
  function Tr() {
    var L = A.props.appendTo, re, ae = W();
    A.props.interactive && L === qf || L === "parent" ? re = ae.parentNode : re = Ff(L, [ae]), re.contains(z) || re.appendChild(z), A.state.isMounted = true, di();
  }
  __name(Tr, "Tr");
  c(Tr, "mount");
  function It() {
    return Ls(z.querySelectorAll("[data-tippy-root]"));
  }
  __name(It, "It");
  c(It, "getNestedPopperTree");
  function Rr(L) {
    A.clearDelayTimeouts(), L && je("onTrigger", [A, L]), Je();
    var re = qe(true), ae = le(), Ae = ae[0], ge = ae[1];
    Br.isTouch && Ae === "hold" && ge && (re = ge), re ? n = setTimeout(function() {
      A.show();
    }, re) : A.show();
  }
  __name(Rr, "Rr");
  c(Rr, "scheduleShow");
  function qt(L) {
    if (A.clearDelayTimeouts(), je("onUntrigger", [A, L]), !A.state.isVisible) {
      cr();
      return;
    }
    if (!(A.props.trigger.indexOf("mouseenter") >= 0 && A.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(L.type) >= 0 && p)) {
      var re = qe(false);
      re ? a = setTimeout(function() {
        A.state.isVisible && A.hide();
      }, re) : s = requestAnimationFrame(function() {
        A.hide();
      });
    }
  }
  __name(qt, "qt");
  c(qt, "scheduleHide");
  function Gn() {
    A.state.isEnabled = true;
  }
  __name(Gn, "Gn");
  c(Gn, "enable");
  function Vr() {
    A.hide(), A.state.isEnabled = false;
  }
  __name(Vr, "Vr");
  c(Vr, "disable");
  function jn() {
    clearTimeout(n), clearTimeout(a), cancelAnimationFrame(s);
  }
  __name(jn, "jn");
  c(jn, "clearDelayTimeouts");
  function fn(L) {
    if (!A.state.isDestroyed) {
      je("onBeforeUpdate", [A, L]), Nn();
      var re = A.props, ae = Lf(e, Object.assign({}, re, Rf(L), { ignoreAttributes: true }));
      A.props = ae, Ur(), re.interactiveDebounce !== ae.interactiveDebounce && (Ve(), C = _f(kn, ae.interactiveDebounce)), re.triggerTarget && !ae.triggerTarget ? Ui(re.triggerTarget).forEach(function(Ae) {
        Ae.removeAttribute("aria-expanded");
      }) : ae.triggerTarget && e.removeAttribute("aria-expanded"), Ze(), De(), B && B(re, ae), A.popperInstance && (di(), It().forEach(function(Ae) {
        requestAnimationFrame(Ae._tippy.popperInstance.forceUpdate);
      })), je("onAfterUpdate", [A, L]);
    }
  }
  __name(fn, "fn");
  c(fn, "setProps");
  function Bn(L) {
    A.setProps({ content: L });
  }
  __name(Bn, "Bn");
  c(Bn, "setContent");
  function Ki() {
    var L = A.state.isVisible, re = A.state.isDestroyed, ae = !A.state.isEnabled, Ae = Br.isTouch && !A.props.touch, ge = Hu(A.props.duration, 0, Pr.duration);
    if (!(L || re || ae || Ae) && !W().hasAttribute("disabled") && (je("onShow", [A], false), A.props.onShow(A) !== false)) {
      if (A.state.isVisible = true, ie() && (z.style.visibility = "visible"), De(), Je(), A.state.isMounted || (z.style.transition = "none"), ie()) {
        var wt = Ue(), Lt = wt.box, At = wt.content;
        $u([Lt, At], 0);
      }
      x = c(function() {
        var dr;
        if (!(!A.state.isVisible || d)) {
          if (d = true, z.offsetHeight, z.style.transition = A.props.moveTransition, ie() && A.props.animation) {
            var Ji = Ue(), Pt = Ji.box, _t = Ji.content;
            $u([Pt, _t], ge), Df([Pt, _t], "visible");
          }
          it(), Ze(), zf(Fu, A), (dr = A.popperInstance) == null || dr.forceUpdate(), je("onMount", [A]), A.props.animation && ie() && pr(ge, function() {
            A.state.isShown = true, je("onShown", [A]);
          });
        }
      }, "onFirstUpdate"), Tr();
    }
  }
  __name(Ki, "Ki");
  c(Ki, "show");
  function Qi() {
    var L = !A.state.isVisible, re = A.state.isDestroyed, ae = !A.state.isEnabled, Ae = Hu(A.props.duration, 1, Pr.duration);
    if (!(L || re || ae) && (je("onHide", [A], false), A.props.onHide(A) !== false)) {
      if (A.state.isVisible = false, A.state.isShown = false, d = false, p = false, ie() && (z.style.visibility = "hidden"), Ve(), cr(), De(true), ie()) {
        var ge = Ue(), wt = ge.box, Lt = ge.content;
        A.props.animation && ($u([wt, Lt], Ae), Df([wt, Lt], "hidden"));
      }
      it(), Ze(), A.props.animation ? ie() && Cr(Ae, A.unmount) : A.unmount();
    }
  }
  __name(Qi, "Qi");
  c(Qi, "hide");
  function oa(L) {
    ue().addEventListener("mousemove", C), zf(ks, C), C(L);
  }
  __name(oa, "oa");
  c(oa, "hideWithInteractivity");
  function aa() {
    A.state.isVisible && A.hide(), A.state.isMounted && (dn(), It().forEach(function(L) {
      L._tippy.unmount();
    }), z.parentNode && z.parentNode.removeChild(z), Fu = Fu.filter(function(L) {
      return L !== A;
    }), A.state.isMounted = false, je("onHidden", [A]));
  }
  __name(aa, "aa");
  c(aa, "unmount");
  function Js() {
    A.state.isDestroyed || (A.clearDelayTimeouts(), A.unmount(), Nn(), delete e._tippy, A.state.isDestroyed = true, je("onDestroy", [A]));
  }
  __name(Js, "Js");
  c(Js, "destroy");
}
__name(Oy, "Oy");
c(Oy, "createTippy");
function Vo(e, r) {
  r === void 0 && (r = {});
  var t = Pr.plugins.concat(r.plugins || []);
  vy();
  var n = Object.assign({}, r, { plugins: t }), a = py(e);
  if (false)
    var s, p;
  var v = a.reduce(function(m, d) {
    var h = d && Oy(d, n);
    return h && m.push(h), m;
  }, []);
  return Gs(e) ? v[0] : v;
}
__name(Vo, "Vo");
c(Vo, "tippy");
Vo.defaultProps = Pr;
Vo.setDefaultProps = Ey;
Vo.currentInput = Br;
var i1 = Object.assign({}, Bo, { effect: c(function(r) {
  var t = r.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow);
}, "effect") });
Vo.setDefaultProps({ render: Vf });
var Rt = Vo;
var Yf = zt(Nr(), 1);
var Yu = c((e) => typeof e == "object" && e !== null && typeof e.initHelp == "function", "isHelpable");
function we(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = ht({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let a = this.helpContent;
        a !== null && (this.popup = Rt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(s) {
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
      this.helpableService = at(this.helpableMachine).onTransition((a) => {
        this.debugHelpable && console.log(`helpable: ${(0, Yf.format)(a.value)}`);
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
__name(we, "we");
c(we, "HelpableMixin");
function ve(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.hoverable = false;
    }
  }
  __name(r, "r");
  return c(r, "HoverableMixinClass"), M([D], r.prototype, "hoverable", 2), r;
}
__name(ve, "ve");
c(ve, "HoverableMixin");
var js = /* @__PURE__ */ new Map();
function Bs(e) {
  if (js.has(e))
    return js.get(e);
  let r = e.length, t = 0, n = 0, a = 0, s = [];
  for (let p = 0; p < r; p += 1) {
    let v = e[p], m = e[p + 1], d = e[p - 1];
    v === "{" && m === "{" && d !== "\\" ? (a += 1, a === 1 && (n = p), p += 1) : v === "}" && m === "}" && d !== "\\" && a && (a -= 1, a === 0 && (n > t && (s.push(Object.freeze({ type: "string", start: t, end: n, value: e.slice(t, n) })), t = n), s.push(Object.freeze({ type: "part", start: n, end: p + 2, value: e.slice(t + 2, p).trim() })), p += 1, t = p + 1));
  }
  return t < r && s.push(Object.freeze({ type: "string", start: t, end: r, value: e.slice(t, r) })), js.set(e, Object.freeze(s)), js.get(e);
}
__name(Bs, "Bs");
c(Bs, "parse");
var pi = /* @__PURE__ */ new WeakMap();
var Xf = /* @__PURE__ */ new WeakMap();
var Hr = /* @__PURE__ */ __name(class {
  constructor(r, t) {
    this.expression = t, pi.set(this, r), r.updateParent("");
  }
  get attributeName() {
    return pi.get(this).attr.name;
  }
  get attributeNamespace() {
    return pi.get(this).attr.namespaceURI;
  }
  get value() {
    return Xf.get(this);
  }
  set value(r) {
    Xf.set(this, r || ""), pi.get(this).updateParent(r);
  }
  get element() {
    return pi.get(this).element;
  }
  get booleanValue() {
    return pi.get(this).booleanValue;
  }
  set booleanValue(r) {
    pi.get(this).booleanValue = r;
  }
}, "Hr");
c(Hr, "AttributeTemplatePart");
var Wi = /* @__PURE__ */ __name(class {
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
}, "Wi");
c(Wi, "AttributeValueSetter");
var Rn = /* @__PURE__ */ new WeakMap();
var Dt = /* @__PURE__ */ __name(class {
  constructor(r, t) {
    this.expression = t, Rn.set(this, [r]), r.textContent = "";
  }
  get value() {
    return Rn.get(this).map((r) => r.textContent).join("");
  }
  set value(r) {
    this.replace(r);
  }
  get previousSibling() {
    return Rn.get(this)[0].previousSibling;
  }
  get nextSibling() {
    return Rn.get(this)[Rn.get(this).length - 1].nextSibling;
  }
  replace(...r) {
    let t = r.map((n) => typeof n == "string" ? new Text(n) : n);
    t.length || t.push(new Text("")), Rn.get(this)[0].before(...t);
    for (let n of Rn.get(this))
      n.remove();
    Rn.set(this, t);
  }
}, "Dt");
c(Dt, "NodeTemplatePart");
function Yo(e) {
  return { processCallback(r, t, n) {
    var a;
    if (!(typeof n != "object" || !n)) {
      for (let s of t)
        if (s.expression in n) {
          let p = (a = n[s.expression]) !== null && a !== void 0 ? a : "";
          e(s, p);
        }
    }
  } };
}
__name(Yo, "Yo");
c(Yo, "createProcessor");
function Xo(e, r) {
  e.value = String(r);
}
__name(Xo, "Xo");
c(Xo, "processPropertyIdentity");
function Hs(e, r) {
  return typeof r == "boolean" && e instanceof Hr && typeof e.element[e.attributeName] == "boolean" ? (e.booleanValue = r, true) : false;
}
__name(Hs, "Hs");
c(Hs, "processBooleanAttribute");
var Xu = Yo(Xo);
var My = Yo((e, r) => {
  Hs(e, r) || Xo(e, r);
});
function* Iy(e) {
  let r = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = r.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let n = 0; n < t.attributes.length; n += 1) {
        let a = t.attributes.item(n);
        if (a && a.value.includes("{{")) {
          let s = new Wi(t, a);
          for (let p of Bs(a.value))
            if (p.type === "string")
              s.append(p.value);
            else {
              let v = new Hr(s, p.value);
              s.append(v), yield v;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{")) {
      let n = Bs(t.textContent);
      for (let a = 0; a < n.length; a += 1) {
        let s = n[a];
        s.end < t.textContent.length && t.splitText(s.end), s.type === "part" && (yield new Dt(t, s.value));
        break;
      }
    }
}
__name(Iy, "Iy");
c(Iy, "collectParts");
var $s = /* @__PURE__ */ new WeakMap();
var qs = /* @__PURE__ */ new WeakMap();
var sn = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(r, t, n = Xu) {
    var a, s;
    super(), Object.getPrototypeOf(this) !== sn.prototype && Object.setPrototypeOf(this, sn.prototype), this.appendChild(r.content.cloneNode(true)), qs.set(this, Array.from(Iy(this))), $s.set(this, n), (s = (a = $s.get(this)).createCallback) === null || s === void 0 || s.call(a, this, qs.get(this), t), $s.get(this).processCallback(this, qs.get(this), t);
  }
  update(r) {
    $s.get(this).processCallback(this, qs.get(this), r);
  }
}, "sn");
c(sn, "TemplateInstance");
var Zu = /* @__PURE__ */ new WeakMap();
var Zf = /* @__PURE__ */ new WeakMap();
var Kf = /* @__PURE__ */ new WeakMap();
var Nt = /* @__PURE__ */ __name(class {
  constructor(r, t, n) {
    this.strings = r, this.values = t, this.processor = n;
  }
  static setCSPTrustedTypesPolicy(r) {
    Nt.cspTrustedTypesPolicy = r;
  }
  get template() {
    var r, t;
    if (Zu.has(this.strings))
      return Zu.get(this.strings);
    {
      let n = document.createElement("template"), a = this.strings.length - 1, s = this.strings.reduce((v, m, d) => v + m + (d < a ? `{{ ${d} }}` : ""), ""), p = (t = (r = Nt.cspTrustedTypesPolicy) === null || r === void 0 ? void 0 : r.createHTML(s)) !== null && t !== void 0 ? t : s;
      return n.innerHTML = p, Zu.set(this.strings, n), n;
    }
  }
  renderInto(r) {
    let t = this.template;
    if (Zf.get(r) !== t) {
      Zf.set(r, t);
      let n = new sn(t, this.values, this.processor);
      Kf.set(r, n), r instanceof Dt ? r.replace(...n.children) : r.appendChild(n);
      return;
    }
    Kf.get(r).update(this.values);
  }
}, "Nt");
c(Nt, "TemplateResult");
Nt.cspTrustedTypesPolicy = null;
function Z(e, r) {
  e.renderInto(r);
}
__name(Z, "Z");
c(Z, "render");
var Qf = /* @__PURE__ */ new WeakSet();
function Jf(e) {
  return Qf.has(e);
}
__name(Jf, "Jf");
c(Jf, "isDirective");
function eh(e, r) {
  return Jf(r) ? (r(e), true) : false;
}
__name(eh, "eh");
c(eh, "processDirective");
function Zo(e) {
  return (...r) => {
    let t = e(...r);
    return Qf.add(t), t;
  };
}
__name(Zo, "Zo");
c(Zo, "directive");
var Ko = /* @__PURE__ */ new WeakMap();
var Vi = /* @__PURE__ */ __name(class {
  constructor(r, t) {
    this.element = r, this.type = t, this.element.addEventListener(this.type, this), Ko.get(this.element).set(this.type, this);
  }
  set(r) {
    typeof r == "function" ? this.handleEvent = r.bind(this.element) : typeof r == "object" && typeof r.handleEvent == "function" ? this.handleEvent = r.handleEvent.bind(r) : (this.element.removeEventListener(this.type, this), Ko.get(this.element).delete(this.type));
  }
  static for(r) {
    Ko.has(r.element) || Ko.set(r.element, /* @__PURE__ */ new Map());
    let t = r.attributeName.slice(2), n = Ko.get(r.element);
    return n.has(t) ? n.get(t) : new Vi(r.element, t);
  }
}, "Vi");
c(Vi, "EventHandler");
function th(e, r) {
  return e instanceof Hr && e.attributeName.startsWith("on") ? (Vi.for(e).set(r), e.element.removeAttributeNS(e.attributeNamespace, e.attributeName), true) : false;
}
__name(th, "th");
c(th, "processEvent");
function Ay(e) {
  return typeof e == "object" && Symbol.iterator in e;
}
__name(Ay, "Ay");
c(Ay, "isIterable");
function rh(e, r) {
  if (!Ay(r))
    return false;
  if (e instanceof Dt) {
    let t = [];
    for (let n of r)
      if (n instanceof Nt) {
        let a = document.createDocumentFragment();
        n.renderInto(a), t.push(...a.childNodes);
      } else
        n instanceof DocumentFragment ? t.push(...n.childNodes) : t.push(String(n));
    return t.length && e.replace(...t), true;
  } else
    return e.value = Array.from(r).join(" "), true;
}
__name(rh, "rh");
c(rh, "processIterable");
function nh(e, r) {
  return r instanceof DocumentFragment && e instanceof Dt ? (r.childNodes.length && e.replace(...r.childNodes), true) : false;
}
__name(nh, "nh");
c(nh, "processDocumentFragment");
function ih(e, r) {
  return r instanceof Nt && e instanceof Dt ? (r.renderInto(e), true) : false;
}
__name(ih, "ih");
c(ih, "processSubTemplate");
function Fs(e, r) {
  eh(e, r) || Hs(e, r) || th(e, r) || ih(e, r) || nh(e, r) || rh(e, r) || Xo(e, r);
}
__name(Fs, "Fs");
c(Fs, "processPart");
var Ku = Yo(Fs);
function U(e, ...r) {
  return new Nt(e, r, Ku);
}
__name(U, "U");
c(U, "html");
var Qu = /* @__PURE__ */ new WeakMap();
var Py = Zo((...e) => (r) => {
  Qu.has(r) || Qu.set(r, { i: e.length });
  let t = Qu.get(r);
  for (let n = 0; n < e.length; n += 1)
    e[n] instanceof Promise ? Promise.resolve(e[n]).then((a) => {
      n < t.i && (t.i = n, Fs(r, a));
    }) : n <= t.i && (t.i = n, Fs(r, e[n]));
});
var _y = Zo((e) => (r) => {
  var t, n;
  if (!(r instanceof Dt))
    return;
  let a = document.createElement("template"), s = (n = (t = Nt.cspTrustedTypesPolicy) === null || t === void 0 ? void 0 : t.createHTML(e)) !== null && n !== void 0 ? n : e;
  a.innerHTML = s;
  let p = document.importNode(a.content, true);
  r.replace(...p.childNodes);
});
function Te(e) {
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
  return c(r, "IconableMixinClass"), r;
}
__name(Te, "Te");
c(Te, "IconableMixin");
var ln = c((e) => typeof e == "object" && e !== null && typeof e.if == "string", "isIfable");
function lt(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(r, "r");
  return c(r, "IfableMixinClass"), M([D], r.prototype, "if", 2), r;
}
__name(lt, "lt");
c(lt, "IfableMixin");
var Us = c((e) => typeof e == "object" && e !== null && typeof e.initMenu == "function", "isMenuable");
function Ee(e) {
  class r extends e {
    initMenu() {
      this.menu || this.menuContent !== null && (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = Rt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
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
      pe("menuable:show-menu", {}, this);
    }
    get menuContent() {
      let a = document.getElementById("operation-menu");
      if (a === null || a.content === void 0)
        return null;
      let s = a.content.cloneNode(true), p = document.createDocumentFragment();
      return Z(U`${s}`, p), p;
    }
    initMenuItems(a) {
      if (ln(a.reference)) {
        let p = a.popper.querySelector("button[data-operation-menu-if]");
        H.notNull(p), p.disabled = false, this.ifTooltip = p._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Rt(p, { animation: false, content: "Set `if' Conditional" }), p.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (Kn(a.reference)) {
        let p = a.popper.querySelector("button[data-operation-menu-angle]");
        H.notNull(p), p.disabled = false, this.angleTooltip = p._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Rt(p, { animation: false, content: "Change Angle" }), p.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (ti(a.reference)) {
        let p = a.popper.querySelector("button[data-operation-menu-flag]");
        H.notNull(p), p.disabled = false, this.flagTooltip = p._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Rt(p, { animation: false, content: "Set Condifitonal Flag" }), p.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let s = a.popper.querySelector("[data-operation-menu-delete]");
      H.notNull(s), this.deleteTooltip = s._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Rt(s, { animation: false, content: "Delete" })), s.addEventListener("mousedown", this.destroyMenu.bind(this)), s.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
    }
    showIfInspector() {
      this.hideMenu(), pe("menuable:menu-if", {}, this);
    }
    showAngleInspector() {
      this.hideMenu(), pe("menuable:menu-angle", {}, this);
    }
    showFlagInspector() {
      this.hideMenu(), pe("menuable:menu-flag", {}, this);
    }
    dispatchOperationDeleteEvent() {
      pe("menuable:menu-delete", {}, this);
    }
  }
  __name(r, "r");
  return c(r, "MenuableMixinClass"), r;
}
__name(Ee, "Ee");
c(Ee, "MenuableMixin");
var oh = zt(Nr(), 1);
var Ws = zt(Go(), 1);
var ur = c((e) => e != null && typeof e.resizeable == "boolean", "isResizeable");
function Vs(e) {
  class r extends e {
    constructor() {
      super(...arguments);
      this.span = 1;
      this.resizeHandleX = 0;
      this.resizeHandleY = 0;
      this.debugResizeable = false;
      this.resizing = false;
      this.resizeableMachine = ht({ id: "resizeable", initial: "idle", states: { idle: { entry: ["init"], on: { SET_INTERACT: { target: "resizeHandleGrabbable", actions: ["setInteract"] } } }, resizeHandleGrabbable: { on: { GRAB_RESIZE_HANDLE: { target: "resizeHandleGrabbed", actions: ["grabResizeHandle"] }, UNSET_INTERACT: { target: "idle" } } }, resizeHandleGrabbed: { on: { START_RESIZING: { target: "resizeStart", actions: ["startResizing"] }, RELEASE_RESIZE_HANDLE: { target: "resizeHandleGrabbable", actions: ["releaseResizeHandle"] } } }, resizeStart: { always: [{ target: "resizing" }] }, resizing: { on: { RESIZE_HANDLE_SNAP: { target: "resizing", actions: ["emitResizeEvent"] }, END_RESIZING: { target: "resizeEnd" } } }, resizeEnd: { entry: ["endResizing"], always: [{ target: "resizeHandleGrabbable" }] } } }, { actions: { init: () => {
        pe("resizeable:init", {}, this);
      }, setInteract: (a, s) => {
        H.need(s.type === "SET_INTERACT", "event type must be SET_INTERACT"), H.notNull(this.resizeHandle);
        let p = (0, Ws.default)(this.resizeHandle);
        p.styleCursor(false), p.on("down", this.grabResizeHandle.bind(this)), p.on("up", this.releaseResizeHandle.bind(this)), p.draggable({ onstart: this.startResizing.bind(this), onmove: this.moveResizeHandle.bind(this), onend: this.endResizing.bind(this) });
      }, grabResizeHandle: (a, s) => {
        H.need(s.type === "GRAB_RESIZE_HANDLE", "event type must be GRAB_RESIZE_HANDLE"), this.resizing = true, pe("resizeable:grab-resize-handle", {}, this);
      }, releaseResizeHandle: (a, s) => {
        H.need(s.type === "RELEASE_RESIZE_HANDLE", "event type must be RELEASE_RESIZE_HANDLE"), this.resizing = false, pe("resizeable:release-resize-handle", {}, this);
      }, startResizing: (a, s) => {
        H.need(s.type === "START_RESIZING", "event type must be START_RESIZING"), this.resizing = true;
      }, emitResizeEvent: (a, s) => {
        H.need(s.type === "RESIZE_HANDLE_SNAP", "event type must be RESIZE_HANDLE_SNAP"), pe("resizeable:resize", {}, this);
      }, endResizing: () => {
        this.resizing = false, this.moveResizeHandleTo(0, 0), pe("resizeable:end-resizing", {}, this);
      } } });
      this.resizeableService = at(this.resizeableMachine).onTransition((a) => {
        this.debugResizeable && console.log(`resizeable: ${(0, oh.format)(a.value)}`);
      });
    }
    get resizeable() {
      return this.resizeableService.state !== void 0;
    }
    set resizeable(a) {
      a ? this.resizeableService.send({ type: "SET_INTERACT" }) : this.resizeableService.send({ type: "UNSET_INTERACT" });
    }
    set resizeHandleSnapTargets(a) {
      (0, Ws.default)(this.resizeHandle).draggable({ modifiers: [Ws.default.modifiers.snap({ targets: a, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.resizeHandleMoveEventListener.bind(this) } });
    }
    initResizeable() {
      this.resizeableService.state === void 0 && this.resizeableService.start();
    }
    resizeHandleMoveEventListener(a) {
      let s = a.modifiers[0];
      if (!s.inRange)
        return;
      let p = s.target.source;
      pe("resizeable:resize-handle-in-snap-range", { snapTargetInfo: p }, this), this.moveResizeHandleTo(0, 0), this.resizeableService.send({ type: "RESIZE_HANDLE_SNAP" });
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
  return c(r, "ResizeableMixinClass"), M([D], r.prototype, "span", 2), M([D], r.prototype, "resizeHandleX", 2), M([D], r.prototype, "resizeHandleY", 2), M([D], r.prototype, "debugResizeable", 2), M([D], r.prototype, "resizing", 2), M([Oe], r.prototype, "resizeHandle", 2), r;
}
__name(Vs, "Vs");
c(Vs, "ResizeableMixin");
var ah = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 24C31 27.866 27.866 31 24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24Z" stroke="currentColor" stroke-width="3"/>
</svg>
`;
var xr = /* @__PURE__ */ __name(class extends Ee(we(xe(Le(Te(be(ve(HTMLElement))))))) {
  get operationType() {
    return ql;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ah)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${ql}"`;
  }
}, "xr");
c(xr, "AntiControlGateElement"), xr = M([K], xr);
function sh(e) {
  return /^-?\d+$/.test(e);
}
__name(sh, "sh");
c(sh, "isNumeric");
function Ot(e, r = 4) {
  return (e >= 0 ? "+" : "") + e.toFixed(r);
}
__name(Ot, "Ot");
c(Ot, "forceSigned");
var nt = /* @__PURE__ */ __name(class extends Ee(we(xe(be(ve(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Fl;
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
    this.popup = Rt(this, { allowHTML: true, animation: false, arrow: true, delay: 0, placement: "auto", theme: "tooltip", onShow(a) {
      a.setContent(n);
    } }), this.popup.show();
  }
  blochInspectorPopupContent() {
    let t = document.createDocumentFragment();
    return Z(U`
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
  attributeChangedCallback(t, n, a) {
    this.body && n !== a && a !== null && (t === "data-x" && (this.x = parseFloat(a)), t === "data-y" && (this.y = parseFloat(a)), t === "data-z" && (this.z = parseFloat(a)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let t = c((a) => U`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${a}deg)"></div>`, "vectorLineRect"), n = c((a, s) => U`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${s}(${a}deg)"
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
    return `"${Fl}"`;
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
}, "nt");
c(nt, "BlochDisplayElement"), M([Oe], nt.prototype, "body", 2), M([Oe], nt.prototype, "vectorLine", 2), M([Oe], nt.prototype, "vectorEnd", 2), M([Oe], nt.prototype, "vector", 2), M([dt], nt.prototype, "vectorEndCircles", 2), M([D], nt.prototype, "x", 2), M([D], nt.prototype, "y", 2), M([D], nt.prototype, "z", 2), nt = M([K], nt);
var lh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var Bt = /* @__PURE__ */ __name(class extends Ee(we(xe(Le(Te(be(ve(HTMLElement))))))) {
  get operationType() {
    return Ul;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(lh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Ul}"`;
  }
}, "Bt");
c(Bt, "ControlGateElement"), Bt = M([K], Bt);
var uh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Wt = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(xe(Le(Te(be(ve(HTMLElement))))))))) {
  get operationType() {
    return ts;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(uh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ts}<${this.if}"` : `"${ts}"`;
  }
}, "Wt");
c(Wt, "HGateElement"), Wt = M([K], Wt);
var ch = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 36C4 30.6957 6.10714 25.6086 9.85786 21.8579C13.6086 18.1071 18.6957 16 24 16C29.3043 16 34.3914 18.1071 38.1421 21.8579C41.8929 25.6086 44 30.6957 44 36" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 33.5L37.75 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.625 35.375C25.6605 35.375 26.5 34.5355 26.5 33.5C26.5 32.4645 25.6605 31.625 24.625 31.625C23.5895 31.625 22.75 32.4645 22.75 33.5C22.75 34.5355 23.5895 35.375 24.625 35.375Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Vt = /* @__PURE__ */ __name(class extends Ee(we(cf(xe(Te(be(ve(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return rs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">
          ${this.iconHtml(ch)}
          <div id="value" part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${rs}"` : `"${rs}>${this.flag}"`;
  }
}, "Vt");
c(Vt, "MeasurementGateElement"), M([D], Vt.prototype, "value", 2), Vt = M([K], Vt);
var ph = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18.2857 36L29.7143 12M16 24.5714C16 25.622 16.2069 26.6623 16.609 27.6329C17.011 28.6035 17.6003 29.4854 18.3431 30.2283C19.086 30.9712 19.9679 31.5604 20.9385 31.9625C21.9091 32.3645 22.9494 32.5714 24 32.5714C25.0506 32.5714 26.0909 32.3645 27.0615 31.9625C28.0321 31.5604 28.914 30.9712 29.6569 30.2283C30.3997 29.4854 30.989 28.6035 31.391 27.6329C31.7931 26.6623 32 25.622 32 24.5714C32 23.5209 31.7931 22.4806 31.391 21.51C30.989 20.5394 30.3997 19.6574 29.6569 18.9146C28.914 18.1717 28.0321 17.5824 27.0615 17.1804C26.0909 16.7784 25.0506 16.5714 24 16.5714C22.9494 16.5714 21.9091 16.7784 20.9385 17.1804C19.9679 17.5824 19.086 18.1717 18.3431 18.9146C17.6003 19.6574 17.011 20.5394 16.609 21.51C16.2069 22.4806 16 23.5209 16 24.5714Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(An(xe(Le(Te(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return ns;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(ph)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ns}"` : `"${ns}(${this.angle.replace("/", "_")})"`;
  }
}, "Yt");
c(Yt, "PhaseGateElement"), Yt = M([K], Yt);
var Ys = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7 15L12 20L17 15M7 9L12 4L17 9"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
`;
var dh = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
var wr = /* @__PURE__ */ __name(class extends Ee(we(Vs(xe(Te(be(ve(HTMLElement))))))) {
  get operationType() {
    return Wl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(dh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-dagger-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(Ys)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Wl}${this.span}"`;
  }
}, "wr");
c(wr, "QftDaggerGateElement"), wr = M([K], wr);
var fh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="32" y1="17" x2="42" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="37" y1="18" x2="37" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="21" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="17" x2="28" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="21" y1="23" x2="27" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <line x1="13.3868" y1="27.2774" x2="16.2773" y2="31.6132" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
  <path d="M17 23.5C17 27.229 14.408 30 11.5 30C8.59199 30 6 27.229 6 23.5C6 19.771 8.59199 17 11.5 17C14.408 17 17 19.771 17 23.5Z" stroke="currentColor" stroke-width="2" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Er = /* @__PURE__ */ __name(class extends Ee(we(Vs(xe(Te(be(ve(HTMLElement))))))) {
  get operationType() {
    return Vl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable(), this.initResizeable());
  }
  update() {
    Z(U`<div part="layout">
          <div part="body">${this.iconHtml(fh)}</div>
          <div class="resize-handle" part="resize-handle" data-target="qft-gate.resizeHandle">
            <div part="resize-handle-icon">${this.iconHtml(Ys)}</div>
          </div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Vl}${this.span}"`;
  }
}, "Er");
c(Er, "QftGateElement"), Er = M([K], Er);
var hh = `<svg
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
var Xt = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(xe(Le(Te(be(ve(HTMLElement))))))))) {
  get operationType() {
    return is;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(hh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${is}<${this.if}"` : `"${is}"`;
  }
}, "Xt");
c(Xt, "RnotGateElement"), Xt = M([K], Xt);
var mh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(An(xe(Le(Te(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return os;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(mh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${os}"` : `"${os}(${this.angle.replace("/", "_")})"`;
  }
}, "Zt");
c(Zt, "RxGateElement"), Zt = M([K], Zt);
var vh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(An(xe(Le(Te(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return as;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(vh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${as}"` : `"${as}(${this.angle.replace("/", "_")})"`;
  }
}, "Kt");
c(Kt, "RyGateElement"), Kt = M([K], Kt);
var gh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(An(xe(Le(Te(be(ve(HTMLElement)))))))))) {
  get operationType() {
    return ss;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(gh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ss}"` : `"${ss}(${this.angle.replace("/", "_")})"`;
  }
}, "Qt");
c(Qt, "RzGateElement"), Qt = M([K], Qt);
var bh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 21H39V27H33V21Z" fill="currentColor"/>
  <path d="M21 21H27V27H21V21Z" fill="currentColor"/>
  <path d="M9 21H15V27H9V21Z" fill="currentColor"/>
</svg>
`;
var Sr = /* @__PURE__ */ __name(class extends Ee(we(xe(Le(Te(be(ve(HTMLElement))))))) {
  get operationType() {
    return Yl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(bh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Yl}"`;
  }
}, "Sr");
c(Sr, "SpacerGateElement"), Sr = M([K], Sr);
var yh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Jt = /* @__PURE__ */ __name(class extends Ee(we(Ke(xe(Le(Te(be(ve(HTMLElement)))))))) {
  get operationType() {
    return Xl;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(yh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Xl}"`;
  }
}, "Jt");
c(Jt, "SwapGateElement"), Jt = M([K], Jt);
var xh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(xe(Le(Te(be(ve(HTMLElement))))))))) {
  get operationType() {
    return ls;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(xh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ls}<${this.if}"` : `"${ls}"`;
  }
}, "er");
c(er, "TGateElement"), er = M([K], er);
var wh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 5V43M37.4516 5L43.5 24L37.4516 43" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var Ht = /* @__PURE__ */ __name(class extends Ee(we(xe(Te(be(ve(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return vd;
      case "1":
        return gd;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">
          ${this.iconHtml(wh)}
          <div part="value"></div>
        </div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Ht");
c(Ht, "WriteGateElement"), M([D], Ht.prototype, "value", 2), Ht = M([K], Ht);
var Eh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/ vector-effect="non-scaling-stroke">
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(xe(Le(Te(be(ve(HTMLElement))))))))) {
  get operationType() {
    return us;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Eh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${us}<${this.if}"` : `"${us}"`;
  }
}, "tr");
c(tr, "XGateElement"), tr = M([K], tr);
var Sh = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(xe(Le(Te(be(ve(HTMLElement))))))))) {
  get operationType() {
    return cs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Sh)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${cs}<${this.if}"` : `"${cs}"`;
  }
}, "rr");
c(rr, "YGateElement"), rr = M([K], rr);
var Ch = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends Ee(we(lt(Ke(xe(Le(Te(be(ve(HTMLElement))))))))) {
  get operationType() {
    return ps;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initDraggable());
  }
  update() {
    Z(U`<div part="body">${this.iconHtml(Ch)}</div>
        <div part="outline"></div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ps}<${this.if}"` : `"${ps}"`;
  }
}, "nr");
c(nr, "ZGateElement"), nr = M([K], nr);
var Ye = c((e) => e instanceof xr || e instanceof nt || e instanceof Bt || e instanceof Wt || e instanceof Vt || e instanceof Yt || e instanceof wr || e instanceof Er || e instanceof Xt || e instanceof Zt || e instanceof Kt || e instanceof Qt || e instanceof Sr || e instanceof Jt || e instanceof er || e instanceof Ht || e instanceof tr || e instanceof rr || e instanceof nr, "isOperation");
var Th = c((e) => e != null && e instanceof Wt, "isHGateElement");
var Oh = c((e) => e != null && e instanceof tr, "isXGateElement");
var Mh = c((e) => e != null && e instanceof rr, "isYGateElement");
var Ih = c((e) => e != null && e instanceof nr, "isZGateElement");
var Qo = c((e) => e != null && e instanceof Yt, "isPhaseGateElement");
var Ah = c((e) => e != null && e instanceof er, "isTGateElement");
var Ph = c((e) => e != null && e instanceof Xt, "isRnotGateElement");
var Xs = c((e) => e != null && e instanceof Zt, "isRxGateElement");
var Zs = c((e) => e != null && e instanceof Kt, "isRyGateElement");
var Ks = c((e) => e != null && e instanceof Qt, "isRzGateElement");
var B_ = c((e) => e != null && e instanceof Sr, "isSpacerGateElement");
var _h = c((e) => e != null && e instanceof Jt, "isSwapGateElement");
var Ju = c((e) => e != null && e instanceof Bt, "isControlGateElement");
var ec = c((e) => e != null && e instanceof xr, "isAntiControlGateElement");
var zh = c((e) => e != null && e instanceof nt, "isBlochDisplayElement");
var H_ = c((e) => e != null && e instanceof Ht, "isWriteGateElement");
var Rh = c((e) => e != null && e instanceof Vt, "isMeasurementGateElement");
var Dh = zt(Nr(), 1);
var Jo = zt(Go(), 1);
var tc = c((e) => e !== null && e instanceof _r, "isAngleSliderElement");
var _r = /* @__PURE__ */ __name(class extends HTMLElement {
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
    }, setDenominatorByAngle: (t, n) => {
      n.type === "SET_ANGLE" && (this.denominator = Eo(this.angle));
    }, setAngleInRadian: (t, n) => {
      if (n.type !== "SET_DENOMINATOR")
        return;
      let [, a] = this.findSnapAngle(this.radian);
      this.angle = a;
    }, setRadianInAngle: (t, n) => {
      if (n.type !== "SET_ANGLE")
        return;
      let [a] = this.findSnapAngle(sd(this.angle));
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
    this.angleSliderService = at(this.angleSliderMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${(0, Dh.format)(t.value)}`);
    }).start();
  }
  attributeChangedCallback(t, n, a) {
    n !== a && a !== null && (t === "data-angle" && a !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), t === "data-denominator" && this.shadowRoot !== null && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, Jo.default)(this).unset();
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
    (0, Jo.default)(this).draggable({ origin: "self", modifiers: [Jo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(t) {
    let n = Jo.default.getElementRect(t.target).width, a = t.pageX / n;
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
    let t = -2 * this.denominator, n = 2 * this.denominator, a = new Array(n - t + 1).fill(null).map((s, p) => p + t);
    this.snapAngles = {};
    for (let s of a)
      this.denominator === 1 ? s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI] = "\u03C0" : s === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[s * Math.PI] = `${s}\u03C0` : s === 0 ? this.snapAngles[0] = "0" : s === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : s === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[s * Math.PI / this.denominator] = `${s}\u03C0/${this.denominator}`;
  }
  findSnapAngle(t) {
    let n = null, a = null, s = null;
    for (let p in this.snapAngles) {
      let v = Math.abs(parseFloat(p) - t);
      (n === null || v < n) && (n = v, a = parseFloat(p), s = this.snapAngles[p]);
    }
    return H.notNull(a), H.notNull(s), [a, s];
  }
  proportionToRadian(t) {
    return (t - 0.5) * Math.PI * 4;
  }
  set left(t) {
    this.style.paddingLeft = `${t * 100}%`;
  }
}, "_r");
c(_r, "AngleSliderElement"), M([D], _r.prototype, "angle", 2), M([D], _r.prototype, "radian", 2), M([D], _r.prototype, "denominator", 2), M([D], _r.prototype, "disabled", 2), M([D], _r.prototype, "debug", 2), _r = M([K], _r);
var Yi = /* @__PURE__ */ __name(class extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  activateButton(t) {
    let n = t.currentTarget;
    H.notNull(n);
    for (let a of this.buttons)
      a.removeAttribute("data-active");
    n.setAttribute("data-active", "");
  }
}, "Yi");
c(Yi, "ButtonGroupElement"), M([dt], Yi.prototype, "buttons", 2), Yi = M([K], Yi);
var Xi = zt(kh(), 1);
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
  attributeChangedCallback(t, n, a) {
    n !== a && (t === "data-qubit-count" && this.window !== void 0 && this.innerContainer !== void 0 && (H.notNull(a), this.updateQubitCircleSize(), this.updateDimension(), this.resizeWindow(), this.resizeInnerContainer(), this.drawQubitCircles()), t === "data-color-phase" && this.drawQubitCircles());
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
    this.visibleQubitCircleKets = this.qubitCircles.map((t) => {
      let n = t.getAttribute("data-ket");
      return H.notNull(n), parseInt(n);
    }), H.need(this.visibleQubitCircleKets.length <= 2 ** this.qubitCount, `visibleQubitCircleKets.length (= ${this.visibleQubitCircleKets.length}) must be <= 2^${this.qubitCount}`), this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  setAmplitudes(t) {
    Xi.default.mutate(() => {
      for (let n of this.qubitCircles) {
        let a = n.getAttribute("data-ket");
        H.notNull(a);
        let s = parseInt(a), p = t[s];
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
        throw new pt("unsupported qubit count", this.qubitCount);
    }
  }
  drawQubitCircles() {
    H.notNull(this.window), H.notNull(this.innerContainer), this.qubitCount !== 0 && Xi.default.mutate(() => {
      this.style.setProperty("--width", `${this.qubitCircleSizePx}px`), this.style.setProperty("--height", `${this.qubitCircleSizePx}px`), this.style.setProperty("--magnitude", "0"), this.style.setProperty("--magnitude-color", "rgb(14 165 233)"), this.style.setProperty("--border-width", `${this.qubitCircleLineWidth}px`), this.style.setProperty("--phase-width", `${this.qubitCircleLineWidth}px`);
      let t = [];
      this.lastColStartIndex = this.visibleColStartIndex, this.lastColEndIndex = this.visibleColEndIndex, this.lastRowStartIndex = this.visibleRowStartIndex, this.lastRowEndIndex = this.visibleRowEndIndex;
      for (let a = this.lastRowStartIndex; a <= this.lastRowEndIndex; a++)
        for (let s = this.lastColStartIndex; s <= this.lastColEndIndex; s++)
          t.push({ col: s, row: a });
      let n = document.createDocumentFragment();
      for (let a of this.allQubitCircleElements(t))
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
      let t = this.overscanColStartIndex, n = this.overscanColEndIndex, a = this.overscanRowStartIndex, s = this.overscanRowEndIndex;
      if (!(this.lastColStartIndex === t && this.lastColEndIndex === n && this.lastRowStartIndex === a && this.lastRowEndIndex === s)) {
        for (let p = a; p <= s; p++)
          for (let v = t; v <= n; v++)
            (v < this.lastColStartIndex || this.lastColEndIndex < v || p < this.lastRowStartIndex || this.lastRowEndIndex < p) && this.qubitCirclePositions.push({ col: v, row: p });
        this.lastColStartIndex = t, this.lastColEndIndex = n, this.lastRowStartIndex = a, this.lastRowEndIndex = s;
      }
    }), Xi.default.mutate(() => {
      let t = document.createDocumentFragment();
      for (let n of this.allQubitCircleElements(this.qubitCirclePositions))
        t.appendChild(n);
      this.innerContainer.appendChild(t), this.qubitCirclePositions.length !== 0 && this.updateVisibleQubitCircleKets();
    }));
  }
  removeInvisibleQubitCircles() {
    Xi.default.mutate(() => {
      for (let t of this.qubitCircles) {
        let n = t.getAttribute("data-col"), a = t.getAttribute("data-row");
        H.notNull(n), H.notNull(a);
        let s = parseInt(n), p = parseInt(a);
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
    let n = t.col + t.row * this.colCount, a = this.qubitCircleSizePx * t.row + t.row * this.gap + this.paddingY, s = this.qubitCircleSizePx * t.col + t.col * this.gap + this.paddingX, p = document.createElement("div");
    p.className = "qubit-circle magnitude-0", p.setAttribute("data-col", t.col.toString()), p.setAttribute("data-row", t.row.toString()), p.setAttribute("data-ket", n.toString()), p.setAttribute("data-targets", "circle-notation.qubitCircles"), p.setAttribute("data-amplitude-real", "0"), p.setAttribute("data-amplitude-imag", "0"), p.setAttribute("data-action", "mouseenter:circle-notation#showQubitCirclePopup mouseleave:circle-notation#hideQubitCirclePopup"), p.style.setProperty("top", `${a}px`), p.style.setProperty("left", `${s}px`);
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
    let a = Rt(n, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.qubitCirclePopupTemplate === null)
      return;
    let s = n.getAttribute("data-ket");
    H.notNull(s);
    let p = n.getAttribute("data-amplitude-real");
    H.notNull(p);
    let v = n.getAttribute("data-amplitude-imag");
    H.notNull(v);
    let m = parseInt(s), d = parseFloat(p), h = parseFloat(v), y = new On(d, h), x = y.abs(), S = y.phase() / Math.PI * 180, C = document.importNode(this.qubitCirclePopupTemplate.content, true), T = C.getElementById("qubit-circle-popup--ket-binary-value"), _ = C.getElementById("qubit-circle-popup--ket-decimal-value"), N = C.getElementById("qubit-circle-popup--amplitude"), j = C.getElementById("qubit-circle-popup--amplitude-real-value"), $ = C.getElementById("qubit-circle-popup--amplitude-imag-value"), A = C.getElementById("qubit-circle-popup--probability"), ee = C.getElementById("qubit-circle-popup--probability-value"), z = C.getElementById("qubit-circle-popup--phase"), B = C.getElementById("qubit-circle-popup--phase-value");
    H.notNull(N), H.notNull(j), H.notNull($), H.notNull(A), H.notNull(ee), H.notNull(z), H.notNull(B), T && (T.textContent = m.toString(2).padStart(this.qubitCount, "0")), _ && (_.textContent = m.toString()), this.showQubitCirclePopupAmplitude ? (j.textContent = Ot(y.real, 5), $.textContent = `${Ot(y.imag, 5)}i`) : N.style.display = "none", this.showQubitCirclePopupProbability ? ee.textContent = `${Ot(x * x * 100, 4)}%` : A.style.display = "none", this.showQubitCirclePopupPhase ? B.textContent = `${Ot(S, 2)}\xB0` : z.style.display = "none";
    let J = document.createElement("div");
    J.appendChild(C), a.setContent(J.innerHTML), a.show();
  }
  hideQubitCirclePopup(t) {
    let n = t.target;
    H.need(n.classList.contains("qubit-circle"), "not a qubit-circle");
    let a = n._tippy;
    H.notNull(a), a.destroy();
  }
  get qubitCirclePopupTemplate() {
    return document.getElementById(this.qubitCirclePopupTemplateId);
  }
}, "ut");
c(ut, "CircleNotationElement"), M([D], ut.prototype, "qubitCount", 2), M([D], ut.prototype, "qubitCircleSize", 2), M([D], ut.prototype, "colCount", 2), M([D], ut.prototype, "rowCount", 2), M([D], ut.prototype, "paddingX", 2), M([D], ut.prototype, "paddingY", 2), M([D], ut.prototype, "overscanCount", 2), M([D], ut.prototype, "colorPhase", 2), M([D], ut.prototype, "qubitCirclePopupTemplateId", 2), M([D], ut.prototype, "showQubitCirclePopupAmplitude", 2), M([D], ut.prototype, "showQubitCirclePopupProbability", 2), M([D], ut.prototype, "showQubitCirclePopupPhase", 2), M([Oe], ut.prototype, "window", 2), M([Oe], ut.prototype, "innerContainer", 2), M([dt], ut.prototype, "qubitCircles", 2), ut = M([K], ut);
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
    Z(U`<slot></slot>`, this.shadowRoot);
  }
}, "Zi");
c(Zi, "CircleNotationPanelElement"), M([Oe], Zi.prototype, "circleNotation", 2), Zi = M([K], Zi);
var Lh = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var Gh = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9 18L15 12L9 6"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
</svg>
`;
var $r = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.currentGateSetIndex = 0;
  }
  connectedCallback() {
    window.addEventListener("load", this.startAnimation.bind(this)), this.startBreakpointChangeEventListener(this.startAnimation.bind(this)), this.attachShadow({ mode: "open" }), this.update();
  }
  attributeChangedCallback(t, n, a) {
    n !== a && a !== null && t === "data-current-gate-set-index" && (this.validateCurrentGateSetIndex(), this.toggleGateSets(), this.toggleDots());
  }
  startBreakpointChangeEventListener(t) {
    window.matchMedia("(max-width: 639px)").addEventListener("change", t);
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
            ${this.iconHtml(Lh)}
          </button>
          <button
            id="next-button"
            type="button"
            aria-label="next gate set"
            data-action="click:gate-carousel#nextGateSet"
            style="right: 0"
          >
            ${this.iconHtml(Gh)}
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
      return H.need(Ye(n), `${n} must be an operation.`), n;
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
      let a = 0;
      t === 0 ? a = 500 : t === 1 ? a = 600 : t === 2 ? a = 700 : t === 3 && (a = 800);
      let s = n.animate([{ transform: "translateY(0px)", offset: 0 }, { transform: "translateY(0px)", offset: 0.2 }, { transform: "translateY(-88px)", offset: 0.6 }, { transform: "translateY(-72px)", offset: 1 }], { duration: a, fill: "forwards", easing: "ease-out" });
      s.onfinish = () => {
        n === this.popinAnimationGates[this.popinAnimationGates.length - 1] && (this.removePopinAnimationGates(), this.makeAllGateSetsVisible(), this.disableContentClipping());
      };
    }
  }
  toggleDots() {
    for (let [t, n] of this.dots.entries())
      t === this.currentGateSetIndex ? n.classList.add("dot--active") : n.classList.remove("dot--active");
  }
}, "$r");
c($r, "GateCarouselElement"), M([D], $r.prototype, "currentGateSetIndex", 2), M([Oe], $r.prototype, "contentClipper", 2), M([dt], $r.prototype, "gateSets", 2), M([dt], $r.prototype, "dots", 2), M([dt], $r.prototype, "popinAnimationGates", 2), $r = M([K], $r);
var ea = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
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
    this.popup = Rt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(t) {
    let n = t.target;
    !this.popup.popper.contains(n) && !this.popup.reference.contains(n) && !Ye(n) && this.popup.hide();
  }
  get popupContent() {
    let t = document.querySelector("#operation-inspector-template");
    H.notNull(t);
    let n = t.content.cloneNode(true), a = document.createDocumentFragment();
    return Z(U`${n}`, a), a;
  }
}, "ea");
c(ea, "InspectorButtonElement"), ea = M([K], ea);
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
    return pd(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(t) {
    if (this.clear(), this.disableAllPanes(), ln(t) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = t.if), Kn(t)) {
      let n = Eo(t.angle);
      Qo(t) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Xs(t) || Zs(t) || Ks(t)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = t.angle, this.backupCurrentPhi(), this.angleSlider.angle = t.angle, this.denominatorInput.value = n.toString(), this.denominatorLabel.textContent = n.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = t.reducedAngle !== "";
    }
    ti(t) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = t.flag);
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
  changeAngle(t) {
    let n = t.target;
    if (!tc(n))
      throw new Error(`${n} isn't an angle-slider`);
    this.angleInput.value = n.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(t) {
    let n = t.target;
    if (!tc(n))
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
    if (cd(t)) {
      let n, a = Eo(t);
      this.denominatorInput.value = a.toString(), this.denominatorLabel.textContent = a.toString(), this.backupCurrentDenominator(), ld(t, "-2\u03C0") ? (n = `-${a * 2}\u03C0/${a}`, this.angleInput.value = n) : ud(t, "2\u03C0") ? (n = `${a * 2}\u03C0/${a}`, this.angleInput.value = n) : n = t, this.backupCurrentPhi(), this.angleSlider.angle = n, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    sh(t) && parseInt(t) > 1 ? (this.denominatorLabel.textContent = t, this.angleSlider.denominator = parseInt(t), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Mt");
c(Mt, "OperationInspectorElement"), M([Oe], Mt.prototype, "ifInput", 2), M([Oe], Mt.prototype, "angleInputLabel", 2), M([Oe], Mt.prototype, "angleInput", 2), M([Oe], Mt.prototype, "angleSlider", 2), M([Oe], Mt.prototype, "denominatorInput", 2), M([Oe], Mt.prototype, "denominatorVariableLabel", 2), M([Oe], Mt.prototype, "denominatorLabel", 2), M([Oe], Mt.prototype, "reduceAngleFractionCheckbox", 2), M([Oe], Mt.prototype, "flagInput", 2), M([D], Mt.prototype, "conditionalGatePaneDisabled", 2), M([D], Mt.prototype, "anglePaneDisabled", 2), M([D], Mt.prototype, "conditionalFlagPaneDisabled", 2), Mt = M([K], Mt);
var Qs = zt(Bh(), 1);
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
    let t = Rt(this, { allowHTML: true, animation: false, delay: 0, theme: "tooltip" });
    if (this.popupTemplate === null)
      return;
    let n = document.importNode(this.popupTemplate.content, true), a = new Qs.default(this.amplitude), s = n.getElementById("qubit-circle-popup--header"), p = n.getElementById("qubit-circle-popup--ket-binary-value"), v = n.getElementById("qubit-circle-popup--ket-decimal-value"), m = n.getElementById("qubit-circle-popup--amplitude"), d = n.getElementById("qubit-circle-popup--amplitude-real-value"), h = n.getElementById("qubit-circle-popup--amplitude-imag-value"), y = n.getElementById("qubit-circle-popup--probability"), x = n.getElementById("qubit-circle-popup--probability-value"), S = n.getElementById("qubit-circle-popup--phase"), C = n.getElementById("qubit-circle-popup--phase-value");
    H.notNull(s), H.notNull(p), H.notNull(v), H.notNull(m), H.notNull(d), H.notNull(h), H.notNull(y), H.notNull(x), H.notNull(S), H.notNull(C), this.showPopupHeader ? (p.textContent = this.ket.toString(2).padStart(this.qubitCount, "0"), v.textContent = this.ket.toString()) : s.style.display = "none", this.showPopupAmplitude ? (d.textContent = Ot(a.re, 5), h.textContent = `${Ot(a.im, 5)}i`) : m.style.display = "none", this.showPopupProbability ? x.textContent = `${Ot(this.magnitude * this.magnitude * 100, 4)}%` : y.style.display = "none", this.showPopupPhase ? C.textContent = `${Ot(this.phaseDeg, 2)}\xB0` : S.style.display = "none";
    let T = document.createElement("div");
    T.appendChild(n), t.setContent(T.innerHTML), t.show();
  }
  get magnitude() {
    return new Qs.default(this.amplitude).abs();
  }
  get phase() {
    return new Qs.default(this.amplitude).arg();
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
c($t, "QubitCircleElement"), M([D], $t.prototype, "ket", 2), M([D], $t.prototype, "qubitCount", 2), M([D], $t.prototype, "amplitude", 2), M([D], $t.prototype, "hidePhase", 2), M([D], $t.prototype, "popupTemplateId", 2), M([D], $t.prototype, "showPopupHeader", 2), M([D], $t.prototype, "showPopupAmplitude", 2), M([D], $t.prototype, "showPopupProbability", 2), M([D], $t.prototype, "showPopupPhase", 2), M([D], $t.prototype, "darkMode", 2), $t = M([K], $t);
var qh = zt(Nr(), 1);
var Hh = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10C2 10 4.00498 7.26822 5.63384 5.63824C7.26269 4.00827 9.5136 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.89691 21 4.43511 18.2543 3.35177 14.5M2 10V4M2 10H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var $h = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var un = /* @__PURE__ */ __name(class extends HTMLElement {
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
      let a = document.createElement("span");
      a.id = "ripple";
      let s = Math.max(this.clientWidth, this.clientHeight), p = s / 2, v = this.getBoundingClientRect(), m = v.left + window.pageXOffset, d = v.top + window.pageYOffset;
      a.setAttribute("part", "ripple"), a.setAttribute("data-target", "run-circuit-button.ripple"), a.style.width = a.style.height = `${s}px`, a.style.left = `${n.clientX - (m + p)}px`, a.style.top = `${n.clientY - (d + p)}px`, this.body.appendChild(a);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
    this.runCircuitButtonService = at(this.runCircuitButtonMachine).onTransition((t) => {
      this.debug && console.log(`run-circuit-button: ${(0, qh.format)(t.value)}`);
    });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService.start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(t, n, a) {
    n !== a && t === "data-running" && a !== null && this.runCircuitButtonService.send({ type: "FINISH" });
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
  handleClickEvent(t) {
    this.runCircuitButtonService.send({ type: "CLICK", clientX: t.clientX, clientY: t.clientY });
  }
  get reloadIcon() {
    return U([Hh]);
  }
  get tailSpinIcon() {
    return U([$h]);
  }
}, "un");
c(un, "RunCircuitButtonElement"), M([D], un.prototype, "running", 2), M([D], un.prototype, "debug", 2), M([Oe], un.prototype, "body", 2), M([Oe], un.prototype, "ripple", 2), un = M([K], un);
var qr = /* @__PURE__ */ __name(class extends HTMLElement {
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
    Z(U`<slot></slot>`, this.shadowRoot);
  }
}, "qr");
c(qr, "SlideInElement"), M([D], qr.prototype, "direction", 2), M([D], qr.prototype, "directionDesktop", 2), M([D], qr.prototype, "duration", 2), M([D], qr.prototype, "marginTop", 2), M([D], qr.prototype, "marginBottom", 2), qr = M([K], qr);
var cn = /* @__PURE__ */ __name(class extends HTMLElement {
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
}, "cn");
c(cn, "CircuitBlockElement"), M([D], cn.prototype, "comment", 2), M([D], cn.prototype, "finalized", 2), cn = M([K], cn);
var Fh = zt(Nr(), 1);
var Fr = c((e) => e != null && e instanceof gt, "isCircuitStepElement");
var ke = c((e, r) => Array.from(e.reduce((t, n, a, s) => {
  let p = r(n, a, s), v = t.get(p);
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
      let a = n.dropzone, s = this.bit(a);
      H.notNull(a.operation), a.operation.bit = s;
    }, updateResizeableSpanDropzones: (t, n) => {
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
    }, dispatchSnapEvent: (t, n) => {
      n.type === "SNAP_DROPZONE" && pe("circuit-step:qpu-operation-snap", { dropzone: n.dropzone }, this);
    }, dispatchUnsnapEvent: (t, n) => {
      n.type === "UNSNAP_DROPZONE" && pe("circuit-step:qpu-operation-unsnap", { dropzone: n.dropzone }, this);
    }, dispatchDeleteOperationEvent: (t, n) => {
      n.type === "DELETE_OPERATION" && pe("circuit-step:delete-qpu-operation", { dropzone: n.dropzone }, this);
    }, dispatchResizeOperationEvent: (t, n) => {
      n.type === "RESIZE_OPERATION" && pe("circuit-step:resize-qpu-operation", { dropzone: n.dropzone }, this);
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
    this.circuitStepService = at(this.circuitStepMachine).onTransition((t) => {
      this.debug && console.log(`circuit-step: ${(0, Fh.format)(t.value)}`);
    });
  }
  get maxOccupiedDropzoneBit() {
    let t = 0;
    for (let [n, a] of Object.entries(this.dropzones)) {
      if (!a.occupied)
        continue;
      let s = parseInt(n, 10) + 1;
      if (s > t && (t = s), ur(a.operation)) {
        let p = s + a.operation.span - 1;
        p > t && (t = p);
      }
    }
    return H.need(0 <= t && t <= So.MAX_QUBIT_COUNT, "invalid number of qubits in use"), t;
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
  attributeChangedCallback(t, n, a) {
    if (n !== a && (t === "data-active" && (a !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), t === "data-breakpoint" && (a !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), t === "data-shadow"))
      for (let s of this.dropzones)
        a !== null ? s.shadow = true : s.shadow = false;
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(t) {
    for (let p of this.dropzones)
      p.connectTop = false, p.connectBottom = false;
    let n = this.controlGateDropzones, a = this.antiControlGateDropzones, s = this.controllableDropzones(t);
    for (let p of s)
      Co(p.operation) && (p.operation.controls = [], p.operation.antiControls = []);
    if (this.updateSwapConnections(t), this.updatePhasePhaseConnections(t), n.length === 1 && s.length === 0) {
      n[0].operation.disable();
      return;
    }
    if (a.length === 1 && s.length === 0) {
      a[0].operation.disable();
      return;
    }
    n.length === 0 && a.length === 0 || (s.length === 0 ? this.updateControlControlConnections(t) : this.updateControlledUConnections(t), this.updateFreeDropzoneConnections(t));
  }
  updateSwapConnections(t) {
    let n = t == null ? void 0 : t.disableSwap, a = this.swapGateDropzones;
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
  updatePhasePhaseConnections(t) {
    if (t != null && t.disablePhasePhase)
      return;
    let n = this.phaseGateDropzones;
    for (let a of n) {
      let s = a.operation;
      if (s.angle === "" || t !== void 0 && t.maxPhasePhaseTargetGates === 1)
        continue;
      let p = n.filter((v) => {
        if (!Qo(v.operation))
          throw new Error(`${v.operation} isn't a phase-gate element.`);
        return s.angle === v.operation.angle;
      }).map((v) => this.bit(v));
      t !== void 0 && t.maxPhasePhaseTargetGates > 1 && (p = p.slice(0, t.maxPhasePhaseTargetGates)), p.includes(this.bit(a)) && (a.connectTop = p.some((v) => v < this.bit(a)), a.connectBottom = p.some((v) => v > this.bit(a)));
    }
    for (let a of this.freeDropzones) {
      let p = this.phaseGateDropzones.filter((d) => d.connectTop || d.connectBottom).map((d) => this.bit(d)), v = Math.min(...p), m = Math.max(...p);
      v < this.bit(a) && this.bit(a) < m && (a.connectTop = true, a.connectBottom = true);
    }
  }
  updateControlControlConnections(t) {
    let n = this.controlGateDropzones, a = n.map((p) => this.bit(p)), s = 0;
    t !== void 0 && (t.maxControlControlTargetGates === 1 ? a = [] : t.maxControlControlTargetGates > 1 && (a = a.slice(0, t.maxControlControlTargetGates)));
    for (let p of n) {
      s += 1;
      let v = p.operation;
      t != null && t.disableControlControl || t !== void 0 && (t.maxControlControlTargetGates === 1 || t.maxControlControlTargetGates > 0 && s > t.maxControlControlTargetGates) ? v.disable() : (v.enable(), p.connectTop = a.some((m) => this.bit(p) > m), p.connectBottom = a.some((m) => this.bit(p) < m));
    }
  }
  updateControlledUConnections(t) {
    let n = this.controllableDropzones(t), a = this.controlGateDropzones, s = this.antiControlGateDropzones, p = [...new Set(n.map((C) => C.operationName))], v = this.numControlGateDropzones(t, p), m = a.map((C) => this.bit(C)), d = s.map((C) => this.bit(C)), h = m.concat(d), y = v === null ? h : h.slice(0, v), x = n.map((C) => this.bit(C)), S = y.concat(x);
    for (let [C, T] of Object.entries(a)) {
      let _ = T.operation;
      T.connectBottom = S.some((N) => this.bit(T) < N), T.connectTop = S.some((N) => this.bit(T) > N), v === null || v !== null && parseInt(C) < v ? _.enable() : (T.connectTop = Math.max(...S) > this.bit(T), _.disable());
    }
    for (let [C, T] of Object.entries(s)) {
      let _ = T.operation;
      T.connectBottom = S.some((N) => this.bit(T) < N), T.connectTop = S.some((N) => this.bit(T) > N), v === null || v !== null && parseInt(C) < v ? _.enable() : (T.connectTop = Math.max(...S) > this.bit(T), _.disable());
    }
    for (let C of n) {
      if (!Co(C.operation))
        throw new Error(`${C.operation} isn't controllable.`);
      C.operation.controls = this.controlBits(C, m, t), C.operation.antiControls = d, C.connectTop = S.some((T) => T < this.bit(C)), C.connectBottom = S.some((T) => T > this.bit(C));
    }
  }
  updateFreeDropzoneConnections(t) {
    let n = this.controllableDropzones(t), a = this.controlGateDropzones.filter((h) => Ju(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), s = this.antiControlGateDropzones.filter((h) => ec(h.operation) && !h.operation.disabled).map((h) => this.bit(h)), p = n.map((h) => this.bit(h)), v = a.concat(s).concat(p), m = Math.min(...v), d = Math.max(...v);
    for (let h of this.freeDropzones)
      m < this.bit(h) && this.bit(h) < d && (h.connectTop = true, h.connectBottom = true);
  }
  controlBits(t, n, a) {
    let s = n;
    return a && (a.maxChControlGates > 0 && t.operationName === "h-gate" ? s = n.slice(0, a.maxChControlGates) : a.maxCnotControlGates > 0 && t.operationName === "x-gate" ? s = n.slice(0, a.maxCnotControlGates) : a.maxCyControlGates > 0 && t.operationName === "y-gate" ? s = n.slice(0, a.maxCyControlGates) : a.maxCzControlGates > 0 && t.operationName === "z-gate" ? s = n.slice(0, a.maxCzControlGates) : a.maxCphaseControlGates > 0 && t.operationName === "phase-gate" ? s = n.slice(0, a.maxCphaseControlGates) : a.maxCtControlGates > 0 && t.operationName === "t-gate" ? s = n.slice(0, a.maxCtControlGates) : a.maxCrnotControlGates > 0 && t.operationName === "rnot-gate" ? s = n.slice(0, a.maxCrnotControlGates) : a.maxCrxControlGates > 0 && t.operationName === "rx-gate" ? s = n.slice(0, a.maxCrxControlGates) : a.maxCryControlGates > 0 && t.operationName === "ry-gate" ? s = n.slice(0, a.maxCryControlGates) : a.maxCrzControlGates > 0 && t.operationName === "rz-gate" ? s = n.slice(0, a.maxCrzControlGates) : a.maxCswapControlGates > 0 && t.operationName === "swap-gate" && (s = n.slice(0, a.maxCswapControlGates))), s;
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
    return this.occupiedDropzones.filter((t) => Ju(t.operation));
  }
  get antiControlGateDropzones() {
    return this.occupiedDropzones.filter((t) => ec(t.operation));
  }
  numControlGateDropzones(t, n) {
    if (t === void 0)
      return null;
    let a = 0;
    return n.includes("h-gate") && !t.disableCh && t.maxChControlGates > a && (a = t.maxChControlGates), n.includes("x-gate") && !t.disableCnot && t.maxCnotControlGates > a && (a = t.maxCnotControlGates), n.includes("y-gate") && !t.disableCy && t.maxCyControlGates > a && (a = t.maxCyControlGates), n.includes("z-gate") && !t.disableCz && t.maxCzControlGates > a && (a = t.maxCzControlGates), n.includes("phase-gate") && !t.disableCphase && t.maxCphaseControlGates > a && (a = t.maxCphaseControlGates), n.includes("t-gate") && !t.disableCt && t.maxCtControlGates > a && (a = t.maxCtControlGates), n.includes("rnot-gate") && !t.disableCrnot && t.maxCrnotControlGates > a && (a = t.maxCrnotControlGates), n.includes("rx-gate") && !t.disableCrx && t.maxCrxControlGates > a && (a = t.maxCrxControlGates), n.includes("ry-gate") && !t.disableCry && t.maxCryControlGates > a && (a = t.maxCryControlGates), n.includes("rz-gate") && !t.disableCrz && t.maxCrzControlGates > a && (a = t.maxCrzControlGates), n.includes("swap-gate") && !t.disableCswap && t.maxCswapControlGates > a && (a = t.maxCswapControlGates), a === 0 ? null : a;
  }
  controllableDropzones(t) {
    let n = 0, a = 0, s = 0, p = 0, v = 0, m = 0, d = 0, h = 0, y = 0, x = 0;
    return this.occupiedDropzones.filter((S) => Co(S.operation)).filter((S) => t === void 0 ? true : Th(S.operation) ? (n += 1, t.maxChTargetGates !== 0 && n > t.maxChTargetGates ? false : !t.disableCh) : Oh(S.operation) ? (a += 1, t.maxCnotTargetGates !== 0 && a > t.maxCnotTargetGates ? false : !t.disableCnot) : Mh(S.operation) ? (s += 1, t.maxCyTargetGates !== 0 && s > t.maxCyTargetGates ? false : !t.disableCy) : Ih(S.operation) ? (p += 1, t.maxCzTargetGates !== 0 && p > t.maxCzTargetGates ? false : !t.disableCz) : Qo(S.operation) ? (v += 1, t.maxCphaseTargetGates !== 0 && v > t.maxCphaseTargetGates ? false : !t.disableCphase) : Ah(S.operation) ? (m += 1, t.maxCtTargetGates !== 0 && m > t.maxCtTargetGates ? false : !t.disableCt) : Ph(S.operation) ? (d += 1, t.maxCrnotTargetGates !== 0 && d > t.maxCrnotTargetGates ? false : !t.disableCrnot) : Xs(S.operation) ? (h += 1, t.maxCrxTargetGates !== 0 && h > t.maxCrxTargetGates ? false : !t.disableCrx) : Zs(S.operation) ? (y += 1, t.maxCryTargetGates !== 0 && y > t.maxCryTargetGates ? false : !t.disableCry) : Ks(S.operation) ? (x += 1, t.maxCrzTargetGates !== 0 && x > t.maxCrzTargetGates ? false : !t.disableCrz) : _h(S.operation) ? !t.disableCswap : true);
  }
  dispatchUpdateEvent() {
    pe("circuit-step:update", {}, this);
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
    pe("circuit-step:mouseenter", {}, this);
  }
  dispatchMouseleaveEvent() {
    pe("circuit-step:mouseleave", {}, this);
  }
  maybeDispatchClickEvent(t) {
    Ye(t.target) || pe("circuit-step:click", {}, this);
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
    for (let [n, a] of ke(this.operations, (s) => s.constructor))
      switch (n) {
        case Wt: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.if))
            for (let [m, d] of ke(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, x = d.map((C) => C.bit), S = { type: y, targets: x };
              p !== "" && (S.if = p), m !== "" && (S.controls = h.controls), h.antiControls.length > 0 && (S.antiControls = h.antiControls), t.push(S);
            }
          break;
        }
        case tr: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.if))
            for (let [m, d] of ke(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, x = d.map((C) => C.bit), S = { type: y, targets: x };
              p !== "" && (S.if = p), m !== "" && (S.controls = h.controls), h.antiControls.length > 0 && (S.antiControls = h.antiControls), t.push(S);
            }
          break;
        }
        case rr: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.if))
            for (let [m, d] of ke(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, x = d.map((C) => C.bit), S = { type: y, targets: x };
              p !== "" && (S.if = p), m !== "" && (S.controls = h.controls), h.antiControls.length > 0 && (S.antiControls = h.antiControls), t.push(S);
            }
          break;
        }
        case nr: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.if))
            for (let [m, d] of ke(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, x = d.map((C) => C.bit), S = { type: y, targets: x };
              p !== "" && (S.if = p), m !== "" && (S.controls = h.controls), h.antiControls.length > 0 && (S.antiControls = h.antiControls), t.push(S);
            }
          break;
        }
        case Yt: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.angle))
            for (let [m, d] of ke(v, (h) => h.if))
              for (let [h, y] of ke(d, (x) => x.controls.toString())) {
                let x = y[0], S = x.operationType, C = y.map((_) => _.bit), T = { type: S, targets: C };
                m !== "" && (T.if = m), p !== "" && (T.angle = p), h !== "" && (T.controls = x.controls), x.antiControls.length > 0 && (T.antiControls = x.antiControls), t.push(T);
              }
          break;
        }
        case er: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.if))
            for (let [m, d] of ke(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, x = d.map((C) => C.bit), S = { type: y, targets: x };
              p !== "" && (S.if = p), m !== "" && (S.controls = h.controls), h.antiControls.length > 0 && (S.antiControls = h.antiControls), t.push(S);
            }
          break;
        }
        case Xt: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.if))
            for (let [m, d] of ke(v, (h) => h.controls.toString())) {
              let h = d[0], y = h.operationType, x = d.map((C) => C.bit), S = { type: y, targets: x };
              p !== "" && (S.if = p), m !== "" && (S.controls = h.controls), h.antiControls.length > 0 && (S.antiControls = h.antiControls), t.push(S);
            }
          break;
        }
        case Zt: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.angle))
            for (let [m, d] of ke(v, (h) => h.if))
              for (let [h, y] of ke(d, (x) => x.controls.toString())) {
                let x = y[0], S = x.operationType, C = y.map((_) => _.bit), T = { type: S, targets: C };
                m !== "" && (T.if = m), p !== "" && (T.angle = p), h !== "" && (T.controls = x.controls), x.antiControls.length > 0 && (T.antiControls = x.antiControls), t.push(T);
              }
          break;
        }
        case Kt: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.angle))
            for (let [m, d] of ke(v, (h) => h.if))
              for (let [h, y] of ke(d, (x) => x.controls.toString())) {
                let x = y[0], S = x.operationType, C = y.map((_) => _.bit), T = { type: S, targets: C };
                m !== "" && (T.if = m), p !== "" && (T.angle = p), h !== "" && (T.controls = x.controls), x.antiControls.length > 0 && (T.antiControls = x.antiControls), t.push(T);
              }
          break;
        }
        case Qt: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.angle))
            for (let [m, d] of ke(v, (h) => h.if))
              for (let [h, y] of ke(d, (x) => x.controls.toString())) {
                let x = y[0], S = x.operationType, C = y.map((_) => _.bit), T = { type: S, targets: C };
                m !== "" && (T.if = m), p !== "" && (T.angle = p), h !== "" && (T.controls = x.controls), x.antiControls.length > 0 && (T.antiControls = x.antiControls), t.push(T);
              }
          break;
        }
        case Sr: {
          let s = a, p = s[0].operationType, v = s.map((d) => d.bit), m = { type: p, targets: v };
          t.push(m);
          break;
        }
        case Er: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.span)) {
            let d = v[0].operationType, h = v.map((x) => x.bit), y = { type: d, span: p, targets: h };
            t.push(y);
          }
          break;
        }
        case wr: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.span)) {
            let d = v[0].operationType, h = v.map((x) => x.bit), y = { type: d, span: p, targets: h };
            t.push(y);
          }
          break;
        }
        case Jt: {
          let s = a.filter((d) => !d.disabled);
          if (s.length !== 2)
            break;
          let p = s[0].operationType, v = s[0].controls, m = { type: p, targets: [s[0].bit, s[1].bit] };
          v !== void 0 && v.length > 0 && (m.controls = v), t.push(m);
          break;
        }
        case Bt: {
          let s = a.filter((v) => !v.disabled);
          if (s.length < 2 || this.operations.some((v) => Co(v) && v.controls.length > 0))
            break;
          let p = s.map((v) => v.bit);
          t.push({ type: s[0].operationType, targets: p });
          break;
        }
        case xr:
          break;
        case nt: {
          let s = a, p = a.map((v) => v.bit);
          t.push({ type: s[0].operationType, targets: p });
          break;
        }
        case Ht: {
          let s = a;
          for (let [, p] of ke(s, (v) => v.value)) {
            let v = p.map((m) => m.bit);
            t.push({ type: p[0].operationType, targets: v });
          }
          break;
        }
        case Vt: {
          let s = a;
          for (let [p, v] of ke(s, (m) => m.flag)) {
            let m = v.map((y) => y.bit), h = { type: v[0].operationType, targets: m };
            p !== "" && (h.flag = p), t.push(h);
          }
          break;
        }
        default:
          throw new pt("Unrecognized operation", { klass: n });
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
c(gt, "CircuitStepElement"), M([D], gt.prototype, "active", 2), M([D], gt.prototype, "breakpoint", 2), M([D], gt.prototype, "shadow", 2), M([D], gt.prototype, "keep", 2), M([D], gt.prototype, "debug", 2), M([dt], gt.prototype, "dropzones", 2), M([dt], gt.prototype, "freeDropzones", 2), M([dt], gt.prototype, "occupiedDropzones", 2), gt = M([K], gt);
var Wh = zt(Go(), 1);
var Uh = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var ra = c((e) => e != null && e instanceof de, "isCircuitDropzoneElement");
var ta;
var de = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    Ga(this, ta, null);
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
      H.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true, pe("circuit-dropzone:qpu-operation-snap", {}, this);
    }, unsnapOperation: () => {
      this.removeAttribute("data-operation-name"), this.occupied = false, pe("circuit-dropzone:qpu-operation-unsnap", {}, this);
    }, dropOperation: () => {
      pe("circuit-dropzone:qpu-operation-drop", {}, this);
    }, putOperation: (t, n) => {
      n.type === "PUT_OPERATION" && (this.append(n.operation), this.operationName = n.operation.tagName.toLocaleLowerCase(), this.occupied = true, n.operation.snapped = true);
    }, deleteOperation: (t, n) => {
      n.type === "DELETE_OPERATION" && (this.removeAttribute("data-operation-name"), this.occupied = false, this.removeChild(n.operation));
    }, resizeOperation: () => {
      pe("circuit-dropzone:qpu-operation-resize", {}, this);
    }, dispatchOccupiedEvent: () => {
      pe("circuit-dropzone:occupied", {}, this);
    }, dispatchDeleteOperationEvent: () => {
      pe("circuit-dropzone:qpu-operation-delete", {}, this);
    } }, guards: { isEmpty: () => this.operation === null, isOccupied: () => this.operation !== null } });
    this.circuitDropzoneService = at(this.circuitDropzoneMachine).onTransition((t) => {
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
    let { signal: t } = ja(this, ta, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initDropzone(), this.circuitDropzoneService.start(), this.addEventListener("draggable:snap-to-dropzone", this.snap, { signal: t }), this.addEventListener("draggable:unsnap", this.unsnap, { signal: t }), this.addEventListener("draggable:end-dragging", this.dropOperation, { signal: t }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: t }), this.addEventListener("menuable:menu-delete", this.deleteOperation, { signal: t }), this.addEventListener("resizeable:resize", this.resizeOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = La(this, ta)) == null || t.abort();
  }
  attributeChangedCallback(t, n, a) {
    n !== a && t === "data-occupied" && (a !== null ? this.targets = "circuit-step.dropzones circuit-step.occupiedDropzones" : this.targets = "circuit-step.dropzones circuit-step.freeDropzones");
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
  put(t) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: t });
  }
  get circuitStep() {
    let t = this.parentElement;
    return H.notNull(t), Fr(t) ? t : null;
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase(), this.occupied = true), (0, Wh.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
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
    if (!Ye(n))
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
    return U([Uh]);
  }
}, "de");
c(de, "CircuitDropzoneElement"), ta = /* @__PURE__ */ new WeakMap(), M([D], de.prototype, "occupied", 2), M([D], de.prototype, "operationName", 2), M([D], de.prototype, "inputWireQuantum", 2), M([D], de.prototype, "outputWireQuantum", 2), M([D], de.prototype, "connectTop", 2), M([D], de.prototype, "connectBottom", 2), M([D], de.prototype, "shadow", 2), M([D], de.prototype, "targets", 2), M([D], de.prototype, "debug", 2), de = M([K], de);
var Vh = zt(Nr(), 1);
var Dn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = ht({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { on: { GRAB_OPERATION: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, GRAB_RESIZE_HANDLE: { target: "editing", actions: ["maybeHideOperationMenu", "startCircuitEdit", "setOperationActive", "addDocumentCursorResizingStyle", "maybeAppendCircuitWire", "setResizeHandleSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["deactivateAllSteps", "setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["deactivateAllSteps", "activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, RESIZE_HANDLE_IN_SNAP_RANGE: { target: "editing", actions: ["snapResizeHandleIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["deactivateAllSteps", "activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, RELEASE_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_RESIZE: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorResizingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { maybeHideOperationMenu: (t, n) => {
      if (n.type !== "GRAB_OPERATION")
        return;
      let a = n.operation;
      Us(a) && a.menu && a.hideMenu();
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (t, n) => {
      n.type !== "GRAB_OPERATION" && n.type !== "GRAB_RESIZE_HANDLE" || this.circuit.activateOperation(n.operation);
    }, snapOperationIntoDropzone: (t, n) => {
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
    }, snapResizeHandleIntoDropzone: (t, n) => {
      if (n.type !== "RESIZE_HANDLE_IN_SNAP_RANGE")
        return;
      let a = n.operation;
      if (!ur(a))
        throw new Error(`${a} is not resizeable`);
      let s = a.dropzone;
      if (!ra(s))
        throw new Error(`${s} is not a circuit dropzone`);
      H.notNull(s.circuitStep);
      let p = s.circuitStep.dropzones.indexOf(s), m = this.circuit.resizeHandleSnapTargetAt(n.x, n.y).wireIndex - p + 1;
      if (!md(m))
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
      this.circuit.wireCount < So.MAX_QUBIT_COUNT && this.circuit.appendWire();
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
      let a = n.operation;
      Us(a) && a.initMenu();
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
      let a = n.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(a);
    } } });
    this.circuitEditorService = at(this.circuitEditorMachine).onTransition((t) => {
      this.debug && console.log(`circuit-editor: ${(0, Vh.format)(t.value)}`);
    });
  }
  connectedCallback() {
    document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("draggable:init", this.enableDragging), this.addEventListener("resizeable:init", this.enableResizing), this.addEventListener("activateable:active", this.activateOperation), this.addEventListener("menuable:show-menu", this.showOperationMenu), this.addEventListener("menuable:menu-if", this.showOperationInspectorIf), this.addEventListener("menuable:menu-angle", this.showOperationInspectorAngle), this.addEventListener("menuable:menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("draggable:grab", this.grabOperation), this.addEventListener("resizeable:grab-resize-handle", this.grabResizeHandle), this.addEventListener("resizeable:release-resize-handle", this.releaseResizeHandle), this.addEventListener("draggable:release", this.releaseOperation), this.addEventListener("resizeable:end-resizing", this.resizeEnd), this.addEventListener("draggable:end-dragging", this.endDraggingOperation), this.addEventListener("draggable:drop", this.dropOperation), this.addEventListener("draggable:delete", this.deleteOperation), this.addEventListener("menuable:menu-delete", this.deleteOperation), this.addEventListener("circuit-step:click", this.clickStep), this.addEventListener("circuit-step:qpu-operation-snap", this.snapStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.unsnapStep), this.addEventListener("draggable:in-snap-range", this.operationInSnapRange), this.addEventListener("resizeable:resize-handle-in-snap-range", this.resizeHandleInSnapRange), this.addEventListener("circuit-step:mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step:mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit:mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit:init", this.makeCircuitHoverable), this.circuitEditorService.start(), this.attachShadow({ mode: "open" }), this.update();
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  enableDragging(t) {
    let n = t.target;
    if (Is(n))
      n.draggable = true;
    else
      throw new pt("Not a draggable element.", { el: n });
  }
  enableResizing(t) {
    let n = t.target;
    if (ur(n))
      n.resizeable = true;
    else
      throw new pt("Not a resizeable element.", { el: n });
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  makeCircuitHoverable(t) {
    if (t.target === this.circuit) {
      this.circuit.hoverable = true;
      for (let a of this.circuit.operations)
        Us(a) && a.initMenu();
    }
  }
  maybeDeactivateOperation(t) {
    var a;
    let n = t.target;
    !Ye(n) && this.inspectorButton && !((a = this.inspectorButton) != null && a.popup.popper.contains(n)) && !this.inspectorButton.popup.reference.contains(n) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: n });
  }
  showOperationMenu(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: n });
  }
  showOperationInspectorIf(t) {
    let n = t.target;
    if (!ln(n))
      throw new Error(`${n} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: n });
  }
  showOperationInspectorAngle(t) {
    let n = t.target;
    if (!Kn(n))
      throw new Error(`${n} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: n });
  }
  showOperationInspectorFlag(t) {
    let n = t.target;
    if (!ti(n))
      throw new Error(`${n} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: n });
  }
  setOperationIf(t) {
    let n = t.target, a = this.activeOperation;
    if (!ln(a))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: a, if: n.if });
  }
  setOperationAngle(t) {
    let n = t.target, a = this.activeOperation;
    if (H.notNull(a), !Kn(a))
      throw new Error(`${a.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: a, angle: n.angle, reducedAngle: n.reduceAngleFraction ? n.reducedAngle : "" });
  }
  setOperationFlag(t) {
    let n = t.target, a = this.activeOperation;
    if (!ti(a))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: a, flag: n.flag });
  }
  grabOperation(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: n });
  }
  grabResizeHandle(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_RESIZE_HANDLE", operation: n });
  }
  releaseResizeHandle(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  releaseOperation(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "RELEASE_OPERATION", operation: n });
  }
  resizeEnd(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_RESIZE", operation: n });
  }
  endDraggingOperation(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: n });
  }
  dropOperation(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: n });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(t) {
    let n = t.target;
    if (!Fr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: n });
  }
  snapStep(t) {
    let n = t.target;
    if (!Fr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: n });
  }
  unsnapStep(t) {
    let n = t.target;
    if (!Fr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: n });
  }
  operationInSnapRange(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    let s = t.detail.snapTargetInfo, p = s.x, v = s.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  resizeHandleInSnapRange(t) {
    let n = t.target;
    if (!Ye(n))
      throw new Error(`${n} must be an Operation.`);
    let s = t.detail.snapTargetInfo, p = s.x, v = s.y;
    this.circuitEditorService.send({ type: "RESIZE_HANDLE_IN_SNAP_RANGE", operation: n, x: p, y: v });
  }
  mouseEnterStep(t) {
    if (this.circuit.editing)
      return;
    let n = t.target;
    if (!Fr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: n });
  }
  mouseLeaveStep(t) {
    if (this.circuit.editing)
      return;
    let n = t.target;
    if (!Fr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: n });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "Dn");
c(Dn, "CircuitEditorElement"), M([D], Dn.prototype, "debug", 2), M([Oe], Dn.prototype, "circuit", 2), M([Oe], Dn.prototype, "inspectorButton", 2), Dn = M([K], Dn);
var ia;
var na = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    Ga(this, ia, null);
  }
  connectedCallback() {
    let { signal: t } = ja(this, ia, new AbortController());
    this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("draggable:grab", this.newOperation, { signal: t }), this.addEventListener("draggable:delete", this.deleteOperation, { signal: t });
  }
  disconnectedCallback() {
    var t;
    (t = La(this, ia)) == null || t.abort();
  }
  update() {
    Z(U`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(t) {
    Is(t) && (t.draggable = true, t.grabbed = false, t.snapped = true), ur(t) && (t.resizeable = true), Yu(t) && t.initHelp();
  }
  get operation() {
    if (this.operations.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (this.operations.length === 1)
      return this.operations[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  get operations() {
    return Array.from(this.children).filter((t) => Ye(t));
  }
  newOperation(t) {
    let n = t.target;
    this.assertOperation(n);
    let a = n.cloneNode(false);
    this.assertOperation(a), Yu(n) && n.disableHelp(), this.prepend(a), this.initOperation(a);
  }
  deleteOperation(t) {
    let n = t.target;
    this.assertOperation(n), this.removeChild(n);
  }
  assertOperation(t) {
    if (!Ye(t))
      throw new TypeError(`${t} isn't an operation.`);
  }
}, "na");
c(na, "PaletteDropzoneElement"), ia = /* @__PURE__ */ new WeakMap(), na = M([K], na);
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
    this.quantumCircuitMachine = ht({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
    this.quantumCircuitService = at(this.quantumCircuitMachine).onTransition((t) => {
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
    for (let a of this.steps)
      a.wireCount > 0 && a.wireCount > n && (t = a, n = a.wireCount);
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
    for (let a = 0; a < this.wireCount; a++)
      n.appendDropzone();
    if (t === -1)
      this.prepend(n);
    else {
      let a = this.steps[t];
      H.notNull(a.parentElement), a.parentElement.insertBefore(n, a.nextSibling);
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
      let t = this.urlJson;
      this.loadFromJson(t);
    }
    this.hoverable && this.makeOperationsHoverable(), this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step:update", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-snap", this.updateChangedWire), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateStep), this.addEventListener("circuit-step:qpu-operation-unsnap", this.updateChangedWire), this.addEventListener("circuit-step:delete-qpu-operation", this.updateStep), this.addEventListener("circuit-step:delete-qpu-operation", this.updateChangedWire), this.addEventListener("circuit-step:resize-qpu-operation", this.updateStep), pe("quantum-circuit:init", {}, this);
  }
  attributeChangedCallback(t, n, a) {
    n !== a && (t === "data-editing" && (a !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), t === "data-hoverable" && a !== null && this.makeOperationsHoverable(), t === "data-json" && a !== "" && a !== null && (this.loadFromJson(a), this.hoverable && this.makeOperationsHoverable()));
  }
  makeOperationsHoverable() {
    for (let t of this.operations)
      t.hoverable = true;
  }
  update() {
    Z(U`<slot></slot>`, this.shadowRoot);
  }
  updateStep(t) {
    let n = t.target;
    this.updateStepOperationAttributes(n);
  }
  updateStepOperationAttributes(t) {
    t.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    pe("quantum-circuit:mouseleave", {}, this);
  }
  resize() {
    this.removeEmptySteps(), this.appendMinimumSteps(), this.appendMinimumWires(), this.removeLastEmptyWires(), this.updateAllWires();
  }
  h(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Wt();
      return a && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  x(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new tr();
      return a && s.disable(), s;
    }, ...n), this;
  }
  y(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new rr();
      return a && s.disable(), s;
    }, ...n), this;
  }
  z(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new nr();
      return a && s.disable(), s;
    }, ...n), this;
  }
  phase(...t) {
    let n = "", a, s;
    if (typeof t[0] == "number")
      a = t;
    else if (typeof t[0] == "string")
      n = t[0], a = t.slice(1);
    else {
      let v = t[0];
      a = v.targets, s = v.disabled;
    }
    let p = this.applyOperationToTargets(() => {
      let v = new Yt();
      return v.angle = n, s && v.disable(), v;
    }, ...a);
    return a.length > 1 && this.updateStepOperationAttributes(p), this;
  }
  t(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new er();
      return a && s.disable(), s;
    }, ...n), this.resize(), this;
  }
  rnot(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Xt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  rx(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Zt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  ry(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Kt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  rz(...t) {
    let n, a;
    if (typeof t[0] == "number")
      n = t;
    else {
      let s = t[0];
      n = s.targets, a = s.disabled;
    }
    return this.applyOperationToTargets(() => {
      let s = new Qt();
      return a && s.disable(), s;
    }, ...n), this;
  }
  qft(t, ...n) {
    let a;
    return typeof n[0] == "number" ? a = n : a = n[0].targets, this.applyOperationToTargets(() => {
      let s = new Er();
      return s.span = t, s;
    }, ...a), this.resize(), this;
  }
  qftDagger(t, ...n) {
    let a;
    return typeof n[0] == "number" ? a = n : a = n[0].targets, this.applyOperationToTargets(() => {
      let s = new wr();
      return s.span = t, s;
    }, ...a), this.resize(), this;
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
    return this.applyOperationToTargets(() => new nt(), ...t), this;
  }
  write(t, ...n) {
    return this.applyOperationToTargets(() => {
      let a = new Ht();
      return a.value = t, a;
    }, ...n), this.resize(), this;
  }
  measure(...t) {
    return this.applyOperationToTargets(() => new Vt(), ...t), this.resize(), this;
  }
  applyOperationToTargets(t, ...n) {
    let a = Math.max(...n) + 1, s = this.appendStepWithDropzones(a);
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
    return this.controlledU(Kt, t, n), this;
  }
  crz(t, n) {
    return this.controlledU(Qt, t, n), this;
  }
  cswap(t, n) {
    return this.controlledU(Jt, t, n), this;
  }
  cc(...t) {
    let n = Math.max(...t) + 1, a = this.appendStepWithDropzones(n);
    for (let s of t)
      a.dropzoneAt(s).put(new Bt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(a), this;
  }
  controlledU(t, n, a) {
    let s = [].concat(n), p = [].concat(a), v = s.concat(p), m = Math.max(...v) + 1, d = this.appendStepWithDropzones(m);
    for (let h of s)
      d.dropzoneAt(h).put(new Bt());
    for (let h of p)
      d.dropzoneAt(h).put(new t());
    this.appendMinimumWires(), this.updateStepOperationAttributes(d);
  }
  appendStep() {
    let t = new gt(), n = this.blocks.slice(-1)[0] || null;
    return n === null || n.finalized ? this.append(t) : n.append(t), t;
  }
  appendStepWithDropzones(t) {
    let n = new gt();
    this.append(n);
    for (let a = 0; a < t; a++) {
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
    for (let a = 0; a < n; a++)
      this.updateWire(a);
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
    let a = JSON.parse(t);
    this.circuitTitle = (a.title || "").trim();
    let s = false;
    for (let p of a.cols) {
      let v = this.appendStep();
      s && (v.keep = true, s = false);
      let m = [];
      for (let d of p) {
        switch (true) {
          case /^\|0>$/.test(d): {
            let h = new Ht();
            h.value = "0", m.push(h), v.append(new de());
            break;
          }
          case /^\|1>$/.test(d): {
            let h = new Ht();
            h.value = "1", m.push(h), v.append(new de());
            break;
          }
          case /^H/.test(d): {
            let h = new Wt();
            h.if = this.ifVariable(d.slice(1)), m.push(h), v.append(new de());
            break;
          }
          case (/^X$/.test(d) || /^X<(.+)$/.test(d)): {
            let h = new tr();
            h.if = d.slice(2).trim(), m.push(h), v.append(new de());
            break;
          }
          case /^Y/.test(d): {
            let h = new rr();
            h.if = this.ifVariable(d.slice(1)), m.push(h), v.append(new de());
            break;
          }
          case /^Z/.test(d): {
            let h = new nr();
            h.if = this.ifVariable(d.slice(1)), m.push(h), v.append(new de());
            break;
          }
          case /^P/.test(d): {
            let h = new Yt();
            h.angle = this.angleParameter(d.slice(1)), m.push(h), v.append(new de());
            break;
          }
          case /^T/.test(d): {
            let h = new er();
            h.if = this.ifVariable(d.slice(1)), m.push(h), v.append(new de());
            break;
          }
          case /^X\^½/.test(d): {
            let h = new Xt();
            h.if = this.ifVariable(d.slice(3)), m.push(h), v.append(new de());
            break;
          }
          case /^Rx/.test(d): {
            let h = new Zt();
            h.angle = this.angleParameter(d.slice(2)), m.push(h), v.append(new de());
            break;
          }
          case /^Ry/.test(d): {
            let h = new Kt();
            h.angle = this.angleParameter(d.slice(2)), m.push(h), v.append(new de());
            break;
          }
          case /^Rz/.test(d): {
            let h = new Qt();
            h.angle = this.angleParameter(d.slice(2)), m.push(h), v.append(new de());
            break;
          }
          case /^…/.test(d): {
            let h = new Sr();
            m.push(h), v.append(new de());
            break;
          }
          case /^QFT\d/.test(d): {
            let h = new Er(), y = parseInt(d.slice(3), 10);
            h.span = y, m.push(h);
            for (let x = 0; x < y; x++)
              v.append(new de());
            break;
          }
          case /^QFT†\d/.test(d): {
            let h = new wr(), y = parseInt(d.slice(4), 10);
            h.span = y, m.push(h), v.append(new de());
            for (let x = 0; x < y; x++)
              v.append(new de());
            break;
          }
          case /^Swap$/.test(d): {
            let h = new Jt();
            m.push(h), v.append(new de());
            break;
          }
          case /^•$/.test(d): {
            let h = new Bt();
            m.push(h), v.append(new de());
            break;
          }
          case /^◦$/.test(d): {
            let h = new xr();
            m.push(h), v.append(new de());
            break;
          }
          case /^Bloch$/.test(d): {
            let h = new nt();
            m.push(h), v.append(new de());
            break;
          }
          case /^Measure/.test(d): {
            let h = new Vt(), y = ((/^>(.+)$/.exec(d.slice(7)) || [])[1] || "").trim();
            h.flag = y, m.push(h), v.append(new de());
            break;
          }
          case /^[[{](.+)$/.test(d): {
            let h = d.slice(1);
            v.remove(), n = new cn(), n.comment = h, n.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(n);
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
        for (let [h, y] of Object.entries(m))
          y !== null && v.dropzoneAt(parseInt(h)).put(y);
        v.updateOperationAttributes();
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
    for (let a of this.steps) {
      let s = n - a.wireCount;
      for (let p = 0; p < s; p++)
        a.appendDropzone();
    }
  }
  updateWire(t) {
    let n = false;
    for (let a of this.steps) {
      let s = a.dropzoneAt(t);
      if (s.inputWireQuantum = n, s.operationName === "write-gate")
        s.inputWireQuantum = n, s.outputWireQuantum = true, n = true;
      else if (s.operationName === "measurement-gate")
        s.inputWireQuantum = n, s.outputWireQuantum = false, n = false;
      else if (s.operationName === "swap-gate") {
        let p = a.dropzones.filter((v) => v.operationName === "swap-gate");
        if (p.length === 2) {
          let v = p.map((y) => a.bit(y)), m = a.bit(s), d = v[0] === m ? v[1] : v[0], h = a.dropzoneAt(d);
          s.inputWireQuantum = n, s.outputWireQuantum = h.inputWireQuantum, n = h.inputWireQuantum;
        } else
          s.inputWireQuantum = n, s.outputWireQuantum = n;
      } else
        s.inputWireQuantum = n, s.outputWireQuantum = n;
    }
  }
  updateChangedWire(t) {
    let n = t.target;
    if (!Fr(n))
      throw new Error(`${n} isn't a circuit-step.`);
    let a = t.detail.dropzone;
    if (!ra(a))
      throw new Error(`${a} isn't a circuit-dropzone.`);
    let s = n.dropzones.indexOf(a);
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
    let a = 1;
    ur(t) && (a = t.span);
    let s = t.dropzone;
    for (let [p, v] of Object.entries(this.steps)) {
      let m = parseInt(p);
      for (let [d, h] of Object.entries(v.dropzones)) {
        let y = parseInt(d), x = h.snapTarget, S = this.isVertical ? x.y : x.x, C = this.isVertical ? x.x : x.y;
        if (m === 0 && v.dropzones[y + a - 1] !== void 0) {
          let _ = S - t.snapRange * 0.75;
          this.isVertical ? n.push({ x: C, y: _ }) : n.push({ x: _, y: C }), this.snapTargets[_] === void 0 && (this.snapTargets[_] = {}), this.snapTargets[_][C] === void 0 && (this.snapTargets[_][C] = { dropzone: null, stepIndex: -1, wireIndex: y });
        }
        if (a === 1)
          (h === s || !h.occupied) && n.push(x);
        else if (!h.occupied && y + a <= v.dropzones.length && n.push(x), h === s) {
          n.push(x);
          for (let _ = 1; _ < a && y + _ < v.dropzones.length; _++) {
            let N = v.dropzones[y + _];
            H.notNull(N), n.push(N.snapTarget);
          }
        }
        let T = S + t.snapRange * 0.75;
        v.dropzones[y + a - 1] !== void 0 && (this.isVertical ? n.push({ x: C, y: T }) : n.push({ x: T, y: C })), this.snapTargets[T] === void 0 && (this.snapTargets[T] = {}), this.snapTargets[T][C] === void 0 && (this.snapTargets[T][C] = { dropzone: null, stepIndex: m, wireIndex: y }), this.snapTargets[S] === void 0 && (this.snapTargets[S] = {}), this.snapTargets[S][C] === void 0 && (this.snapTargets[S][C] = { dropzone: h, stepIndex: null, wireIndex: y });
      }
    }
    t.snapTargets = n;
  }
  setResizeHandleSnapTargets(t) {
    if (!ur(t))
      throw new Error(`${t} isn't a resizeable operation.`);
    if (!ra(t == null ? void 0 : t.dropzone))
      throw new Error(`${t.dropzone} isn't a circuit-dropzone.`);
    let n = t.dropzone.circuitStep;
    H.notNull(n);
    let a = n.freeDropzones, s = t.dropzone;
    a.push(s);
    let p = [];
    this.resizeHandleSnapTargets = {};
    for (let [v, m] of Object.entries(n.dropzones)) {
      let d = m.resizeHandleSnapTarget, h = this.isVertical ? d.y : d.x, y = this.isVertical ? d.x : d.y, x = parseInt(v) % this.wireCount;
      if (m.occupied || p.push(d), m === s) {
        p.push(d);
        let S = t.span;
        for (let C = 1; C < S; C++) {
          let T = n.dropzones[parseInt(v) + C];
          H.notNull(T), p.push(T.resizeHandleSnapTarget);
        }
      }
      this.resizeHandleSnapTargets[h] === void 0 && (this.resizeHandleSnapTargets[h] = {}), this.resizeHandleSnapTargets[h][y] === void 0 && (this.resizeHandleSnapTargets[h][y] = { dropzone: m, stepIndex: null, wireIndex: x });
    }
    t.resizeHandleSnapTargets = p;
  }
  updateSnapTargets(t) {
    let n = t[0];
    H.notNull(n);
    let a = this.isVertical ? n.snapTarget.y : n.snapTarget.x;
    for (let [s, p] of Object.entries(this.snapTargets))
      if (!(parseInt(s) <= a))
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
  get urlJson() {
    let t = window.location.href.toString().split(window.location.host)[1].slice(1);
    return decodeURIComponent(t);
  }
  clear() {
    history.pushState("", "", encodeURIComponent('{"cols":[]}')), location.reload();
  }
  toJson() {
    let t = false, n = [];
    for (let a of this.nonEmptySteps) {
      if (a.isInBlock) {
        if (!t) {
          let s = a.block;
          n.push(`["[${s.comment}"]`), t = true;
        }
      } else
        t && (n.push('["]"]'), t = false);
      n.push(a.toJson());
    }
    return t && n.push('["]"]'), this.circuitTitle !== "" ? `{"cols":[${n.join(",")}],"title":"${this.circuitTitle}"}` : `{"cols":[${n.join(",")}]}`;
  }
}, "se");
c(se, "QuantumCircuitElement"), M([D], se.prototype, "minStepCount", 2), M([D], se.prototype, "minWireCount", 2), M([D], se.prototype, "editing", 2), M([D], se.prototype, "updateUrl", 2), M([D], se.prototype, "json", 2), M([D], se.prototype, "circuitTitle", 2), M([D], se.prototype, "debug", 2), M([D], se.prototype, "chDisabled", 2), M([D], se.prototype, "chMaxControlGates", 2), M([D], se.prototype, "chMaxTargetGates", 2), M([D], se.prototype, "cnotDisabled", 2), M([D], se.prototype, "cnotMaxControlGates", 2), M([D], se.prototype, "cnotMaxTargetGates", 2), M([D], se.prototype, "cyDisabled", 2), M([D], se.prototype, "cyMaxControlGates", 2), M([D], se.prototype, "cyMaxTargetGates", 2), M([D], se.prototype, "czDisabled", 2), M([D], se.prototype, "czMaxControlGates", 2), M([D], se.prototype, "czMaxTargetGates", 2), M([D], se.prototype, "cphaseDisabled", 2), M([D], se.prototype, "cphaseMaxControlGates", 2), M([D], se.prototype, "cphaseMaxTargetGates", 2), M([D], se.prototype, "ctDisabled", 2), M([D], se.prototype, "ctMaxControlGates", 2), M([D], se.prototype, "ctMaxTargetGates", 2), M([D], se.prototype, "crnotDisabled", 2), M([D], se.prototype, "crnotMaxControlGates", 2), M([D], se.prototype, "crnotMaxTargetGates", 2), M([D], se.prototype, "crxDisabled", 2), M([D], se.prototype, "crxMaxControlGates", 2), M([D], se.prototype, "crxMaxTargetGates", 2), M([D], se.prototype, "cryDisabled", 2), M([D], se.prototype, "cryMaxControlGates", 2), M([D], se.prototype, "cryMaxTargetGates", 2), M([D], se.prototype, "crzDisabled", 2), M([D], se.prototype, "crzMaxControlGates", 2), M([D], se.prototype, "crzMaxTargetGates", 2), M([D], se.prototype, "cswapDisabled", 2), M([D], se.prototype, "cswapMaxControlGates", 2), M([D], se.prototype, "swapDisabled", 2), M([D], se.prototype, "controlControlDisabled", 2), M([D], se.prototype, "controlControlMaxTargetGates", 2), M([D], se.prototype, "phasePhaseDisabled", 2), M([D], se.prototype, "phasePhaseMaxTargetGates", 2), M([dt], se.prototype, "blocks", 2), se = M([K], se);
var pn = /* @__PURE__ */ __name(class extends HTMLElement {
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
  handleServiceWorkerMessage(t) {
    var s;
    let n = t.data, a = this.activeStepIndex;
    switch (n.type) {
      case "step": {
        let p = this.circuit.stepAt(n.step);
        for (let v in n.blochVectors) {
          let m = parseInt(v), d = p.dropzoneAt(m).operation;
          if (zh(d)) {
            let h = n.blochVectors[m];
            d.x = h[0], d.y = h[1], d.z = h[2];
          }
        }
        if (n.measuredBits) {
          let v = n.measuredBits;
          for (let m in v) {
            let d = parseInt(m), h = p.dropzoneAt(d).operation;
            Rh(h) && (h.value = v[d].toString());
          }
        }
        for (let v of p.dropzones) {
          let m = v.operation;
          ln(m) && m.if !== "" && (m.disabled = !n.flags[m.if]);
        }
        if (a === n.step) {
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
        throw new pt("Unknown service worker message", { data: n });
    }
  }
  run() {
    this._run(false);
  }
  freshRun() {
    this._run(true);
  }
  _run(t) {
    let n = this.activeStepIndex, a = this.circuit.serialize();
    H.need(a.length > 0, "non-zero step length");
    let s = this.circuit.toJson(), p = this.setCircleNotationQubitCount();
    this.worker.postMessage({ qubitCount: p, stepIndex: n, circuitJson: s, invalidateCaches: t, steps: a, targets: this.circleNotation.visibleQubitCircleKets, debug: window.debugServiceworker });
  }
  setCircleNotationQubitCount() {
    let t = Math.max(...this.circuit.steps.map((n) => n.maxOccupiedDropzoneBit));
    return t === 0 && (t = 1), this.circleNotation.qubitCount = t, t;
  }
  runUnlessEditing() {
    this.circuit.editing || this._run(false);
  }
  get activeStepIndex() {
    let t = this.circuit.activeStep, n = this.circuit.breakpoint, a = t || n;
    return a === null && (a = this.circuit.stepAt(0), this.circuit.setBreakpoint(a)), this.circuit.fetchStepIndex(a);
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    H.notNull(this.circuit);
    let t = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(t));
  }
}, "pn");
c(pn, "QuantumSimulatorElement"), M([D], pn.prototype, "updateUrl", 2), M([Oe], pn.prototype, "circuit", 2), M([Oe], pn.prototype, "circleNotation", 2), M([dt], pn.prototype, "runCircuitButtons", 2), pn = M([K], pn);

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
