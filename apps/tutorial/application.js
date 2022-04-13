var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module, copyDefault, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
};

// ../../node_modules/fraction.js/fraction.js
var require_fraction = __commonJS({
  "../../node_modules/fraction.js/fraction.js"(exports, module) {
    (function(root) {
      "use strict";
      var MAX_CYCLE_LEN = 2e3;
      var P = {
        "s": 1,
        "n": 0,
        "d": 1
      };
      function createError(name) {
        function errorConstructor() {
          var temp = Error.apply(this, arguments);
          temp["name"] = this["name"] = name;
          this["stack"] = temp["stack"];
          this["message"] = temp["message"];
        }
        __name(errorConstructor, "errorConstructor");
        function IntermediateInheritor() {
        }
        __name(IntermediateInheritor, "IntermediateInheritor");
        IntermediateInheritor.prototype = Error.prototype;
        errorConstructor.prototype = new IntermediateInheritor();
        return errorConstructor;
      }
      __name(createError, "createError");
      var DivisionByZero = Fraction["DivisionByZero"] = createError("DivisionByZero");
      var InvalidParameter = Fraction["InvalidParameter"] = createError("InvalidParameter");
      function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) {
          throwInvalidParam();
        }
        return n * s;
      }
      __name(assign, "assign");
      function throwInvalidParam() {
        throw new InvalidParameter();
      }
      __name(throwInvalidParam, "throwInvalidParam");
      function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while (s <= n) {
          while (n % i === 0) {
            n /= i;
            factors[i] = (factors[i] || 0) + 1;
          }
          s += 1 + 2 * i++;
        }
        if (n !== num) {
          if (n > 1)
            factors[n] = (factors[n] || 0) + 1;
        } else {
          factors[num] = (factors[num] || 0) + 1;
        }
        return factors;
      }
      __name(factorize, "factorize");
      var parse = /* @__PURE__ */ __name(function(p1, p2) {
        var n = 0, d2 = 1, s = 1;
        var v = 0, w2 = 0, x = 0, y = 1, z2 = 1;
        var A2 = 0, B = 1;
        var C = 1, D2 = 1;
        var N2 = 1e7;
        var M2;
        if (p1 === void 0 || p1 === null) {
        } else if (p2 !== void 0) {
          n = p1;
          d2 = p2;
          s = n * d2;
        } else
          switch (typeof p1) {
            case "object": {
              if ("d" in p1 && "n" in p1) {
                n = p1["n"];
                d2 = p1["d"];
                if ("s" in p1)
                  n *= p1["s"];
              } else if (0 in p1) {
                n = p1[0];
                if (1 in p1)
                  d2 = p1[1];
              } else {
                throwInvalidParam();
              }
              s = n * d2;
              break;
            }
            case "number": {
              if (p1 < 0) {
                s = p1;
                p1 = -p1;
              }
              if (p1 % 1 === 0) {
                n = p1;
              } else if (p1 > 0) {
                if (p1 >= 1) {
                  z2 = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                  p1 /= z2;
                }
                while (B <= N2 && D2 <= N2) {
                  M2 = (A2 + C) / (B + D2);
                  if (p1 === M2) {
                    if (B + D2 <= N2) {
                      n = A2 + C;
                      d2 = B + D2;
                    } else if (D2 > B) {
                      n = C;
                      d2 = D2;
                    } else {
                      n = A2;
                      d2 = B;
                    }
                    break;
                  } else {
                    if (p1 > M2) {
                      A2 += C;
                      B += D2;
                    } else {
                      C += A2;
                      D2 += B;
                    }
                    if (B > N2) {
                      n = C;
                      d2 = D2;
                    } else {
                      n = A2;
                      d2 = B;
                    }
                  }
                }
                n *= z2;
              } else if (isNaN(p1) || isNaN(p2)) {
                d2 = n = NaN;
              }
              break;
            }
            case "string": {
              B = p1.match(/\d+|./g);
              if (B === null)
                throwInvalidParam();
              if (B[A2] === "-") {
                s = -1;
                A2++;
              } else if (B[A2] === "+") {
                A2++;
              }
              if (B.length === A2 + 1) {
                w2 = assign(B[A2++], s);
              } else if (B[A2 + 1] === "." || B[A2] === ".") {
                if (B[A2] !== ".") {
                  v = assign(B[A2++], s);
                }
                A2++;
                if (A2 + 1 === B.length || B[A2 + 1] === "(" && B[A2 + 3] === ")" || B[A2 + 1] === "'" && B[A2 + 3] === "'") {
                  w2 = assign(B[A2], s);
                  y = Math.pow(10, B[A2].length);
                  A2++;
                }
                if (B[A2] === "(" && B[A2 + 2] === ")" || B[A2] === "'" && B[A2 + 2] === "'") {
                  x = assign(B[A2 + 1], s);
                  z2 = Math.pow(10, B[A2 + 1].length) - 1;
                  A2 += 3;
                }
              } else if (B[A2 + 1] === "/" || B[A2 + 1] === ":") {
                w2 = assign(B[A2], s);
                y = assign(B[A2 + 2], 1);
                A2 += 3;
              } else if (B[A2 + 3] === "/" && B[A2 + 1] === " ") {
                v = assign(B[A2], s);
                w2 = assign(B[A2 + 2], s);
                y = assign(B[A2 + 4], 1);
                A2 += 5;
              }
              if (B.length <= A2) {
                d2 = y * z2;
                s = n = x + d2 * v + z2 * w2;
                break;
              }
            }
            default:
              throwInvalidParam();
          }
        if (d2 === 0) {
          throw new DivisionByZero();
        }
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d2);
      }, "parse");
      function modpow(b, e, m2) {
        var r = 1;
        for (; e > 0; b = b * b % m2, e >>= 1) {
          if (e & 1) {
            r = r * b % m2;
          }
        }
        return r;
      }
      __name(modpow, "modpow");
      function cycleLen(n, d2) {
        for (; d2 % 2 === 0; d2 /= 2) {
        }
        for (; d2 % 5 === 0; d2 /= 5) {
        }
        if (d2 === 1)
          return 0;
        var rem = 10 % d2;
        var t = 1;
        for (; rem !== 1; t++) {
          rem = rem * 10 % d2;
          if (t > MAX_CYCLE_LEN)
            return 0;
        }
        return t;
      }
      __name(cycleLen, "cycleLen");
      function cycleStart(n, d2, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d2);
        for (var t = 0; t < 300; t++) {
          if (rem1 === rem2)
            return t;
          rem1 = rem1 * 10 % d2;
          rem2 = rem2 * 10 % d2;
        }
        return 0;
      }
      __name(cycleStart, "cycleStart");
      function gcd(a, b) {
        if (!a)
          return b;
        if (!b)
          return a;
        while (1) {
          a %= b;
          if (!a)
            return b;
          b %= a;
          if (!b)
            return a;
        }
      }
      __name(gcd, "gcd");
      ;
      function Fraction(a, b) {
        if (!(this instanceof Fraction)) {
          return new Fraction(a, b);
        }
        parse(a, b);
        a = gcd(P["d"], P["n"]);
        this["s"] = P["s"];
        this["n"] = P["n"] / a;
        this["d"] = P["d"] / a;
      }
      __name(Fraction, "Fraction");
      Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        "abs": function() {
          return new Fraction(this["n"], this["d"]);
        },
        "neg": function() {
          return new Fraction(-this["s"] * this["n"], this["d"]);
        },
        "add": function(a, b) {
          parse(a, b);
          return new Fraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        "sub": function(a, b) {
          parse(a, b);
          return new Fraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        "mul": function(a, b) {
          parse(a, b);
          return new Fraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        "div": function(a, b) {
          parse(a, b);
          return new Fraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        "clone": function() {
          return new Fraction(this);
        },
        "mod": function(a, b) {
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          if (a === void 0) {
            return new Fraction(this["s"] * this["n"] % this["d"], 1);
          }
          parse(a, b);
          if (P["n"] === 0 && this["d"] === 0) {
            Fraction(0, 0);
          }
          return new Fraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        "gcd": function(a, b) {
          parse(a, b);
          return new Fraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        "lcm": function(a, b) {
          parse(a, b);
          if (P["n"] === 0 && this["n"] === 0) {
            return new Fraction();
          }
          return new Fraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        "ceil": function(places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return new Fraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        "floor": function(places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return new Fraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        "round": function(places) {
          places = Math.pow(10, places || 0);
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return new Fraction(NaN);
          }
          return new Fraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        "inverse": function() {
          return new Fraction(this["s"] * this["d"], this["n"]);
        },
        "pow": function(a, b) {
          parse(a, b);
          if (P["d"] === 1) {
            if (P["s"] < 0) {
              return new Fraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
            } else {
              return new Fraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
            }
          }
          if (this["s"] < 0)
            return null;
          var N2 = factorize(this["n"]);
          var D2 = factorize(this["d"]);
          var n = 1;
          var d2 = 1;
          for (var k2 in N2) {
            if (k2 === "1")
              continue;
            if (k2 === "0") {
              n = 0;
              break;
            }
            N2[k2] *= P["n"];
            if (N2[k2] % P["d"] === 0) {
              N2[k2] /= P["d"];
            } else
              return null;
            n *= Math.pow(k2, N2[k2]);
          }
          for (var k2 in D2) {
            if (k2 === "1")
              continue;
            D2[k2] *= P["n"];
            if (D2[k2] % P["d"] === 0) {
              D2[k2] /= P["d"];
            } else
              return null;
            d2 *= Math.pow(k2, D2[k2]);
          }
          if (P["s"] < 0) {
            return new Fraction(d2, n);
          }
          return new Fraction(n, d2);
        },
        "equals": function(a, b) {
          parse(a, b);
          return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"];
        },
        "compare": function(a, b) {
          parse(a, b);
          var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
          return (0 < t) - (t < 0);
        },
        "simplify": function(eps) {
          if (isNaN(this["n"]) || isNaN(this["d"])) {
            return this;
          }
          var cont = this["abs"]()["toContinued"]();
          eps = eps || 1e-3;
          function rec(a) {
            if (a.length === 1)
              return new Fraction(a[0]);
            return rec(a.slice(1))["inverse"]()["add"](a[0]);
          }
          __name(rec, "rec");
          for (var i = 0; i < cont.length; i++) {
            var tmp = rec(cont.slice(0, i + 1));
            if (tmp["sub"](this["abs"]())["abs"]().valueOf() < eps) {
              return tmp["mul"](this["s"]);
            }
          }
          return this;
        },
        "divisible": function(a, b) {
          parse(a, b);
          return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        "valueOf": function() {
          return this["s"] * this["n"] / this["d"];
        },
        "toFraction": function(excludeWhole) {
          var whole, str = "";
          var n = this["n"];
          var d2 = this["d"];
          if (this["s"] < 0) {
            str += "-";
          }
          if (d2 === 1) {
            str += n;
          } else {
            if (excludeWhole && (whole = Math.floor(n / d2)) > 0) {
              str += whole;
              str += " ";
              n %= d2;
            }
            str += n;
            str += "/";
            str += d2;
          }
          return str;
        },
        "toLatex": function(excludeWhole) {
          var whole, str = "";
          var n = this["n"];
          var d2 = this["d"];
          if (this["s"] < 0) {
            str += "-";
          }
          if (d2 === 1) {
            str += n;
          } else {
            if (excludeWhole && (whole = Math.floor(n / d2)) > 0) {
              str += whole;
              n %= d2;
            }
            str += "\\frac{";
            str += n;
            str += "}{";
            str += d2;
            str += "}";
          }
          return str;
        },
        "toContinued": function() {
          var t;
          var a = this["n"];
          var b = this["d"];
          var res = [];
          if (isNaN(a) || isNaN(b)) {
            return res;
          }
          do {
            res.push(Math.floor(a / b));
            t = a % b;
            a = b;
            b = t;
          } while (a !== 1);
          return res;
        },
        "toString": function(dec) {
          var g;
          var N2 = this["n"];
          var D2 = this["d"];
          if (isNaN(N2) || isNaN(D2)) {
            return "NaN";
          }
          dec = dec || 15;
          var cycLen = cycleLen(N2, D2);
          var cycOff = cycleStart(N2, D2, cycLen);
          var str = this["s"] === -1 ? "-" : "";
          str += N2 / D2 | 0;
          N2 %= D2;
          N2 *= 10;
          if (N2)
            str += ".";
          if (cycLen) {
            for (var i = cycOff; i--; ) {
              str += N2 / D2 | 0;
              N2 %= D2;
              N2 *= 10;
            }
            str += "(";
            for (var i = cycLen; i--; ) {
              str += N2 / D2 | 0;
              N2 %= D2;
              N2 *= 10;
            }
            str += ")";
          } else {
            for (var i = dec; N2 && i--; ) {
              str += N2 / D2 | 0;
              N2 %= D2;
              N2 *= 10;
            }
          }
          return str;
        }
      };
      if (typeof define === "function" && define["amd"]) {
        define([], function() {
          return Fraction;
        });
      } else if (typeof exports === "object") {
        Object.defineProperty(Fraction, "__esModule", { "value": true });
        Fraction["default"] = Fraction;
        Fraction["Fraction"] = Fraction;
        module["exports"] = Fraction;
      } else {
        root["Fraction"] = Fraction;
      }
    })(exports);
  }
});

// ../../packages/common/dist/index.js
var import_fraction = __toESM(require_fraction());
var A = Object.prototype.toString.call({});
var I = "!recursion-limit!";
var z = 10;
function c(t, e = z) {
  return M(t) || O(t, e) || F(t, e);
}
__name(c, "c");
function M(t) {
  if (t === null)
    return "null";
  if (t === void 0)
    return "undefined";
  if (typeof t == "string")
    return `"${t}"`;
  if (typeof t == "number")
    return String(t);
}
__name(M, "M");
function O(t, e) {
  if (e === 0)
    return I;
  if (t instanceof Map)
    return G(t, e);
  if (t instanceof Set)
    return R(t, e);
  if (((n) => n[Symbol.iterator] !== void 0)(t))
    return N(t, e);
}
__name(O, "O");
function F(t, e) {
  let r = String(t);
  return r !== A ? r : q(t, e);
}
__name(F, "F");
function G(t, e) {
  let r = [];
  for (let [n, i] of t.entries()) {
    if (r.length > 1e3) {
      r.push("[...]");
      break;
    }
    let a = c(n, e - 1), s = c(i, e - 1);
    r.push(`${a}: ${s}`);
  }
  return `Map{${r.join(", ")}}`;
}
__name(G, "G");
function R(t, e) {
  let r = [];
  for (let n of t) {
    if (r.length > 1e3) {
      r.push("[...]");
      break;
    }
    r.push(c(n, e - 1));
  }
  return `Set{${r.join(", ")}}`;
}
__name(R, "R");
function N(t, e) {
  let r = [];
  for (let i of t) {
    if (r.length > 1e3) {
      r.push("[...]");
      break;
    }
    r.push(c(i, e - 1));
  }
  return `${Array.isArray(t) ? "" : t.constructor.name}[${r.join(", ")}]`;
}
__name(N, "N");
function q(t, e) {
  let r = [];
  for (let a in t) {
    if (!Object.prototype.hasOwnProperty.call(t, a))
      continue;
    if (r.length > 1e3) {
      r.push("[...]");
      break;
    }
    let s = t[a], x = c(a, e - 1), C = c(s, e - 1);
    r.push(`${x}: ${C}`);
  }
  let n = t.constructor.name;
  return `${n === {}.constructor.name ? "" : `(Type: ${n})`}{${r.join(", ")}}`;
}
__name(q, "q");
var w = 0;
var d = /* @__PURE__ */ __name(class extends Error {
  constructor(e, r) {
    super(e);
    this.detailsObj = r, this.name = "Error", this.message = e, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), w++;
    try {
      this.details = w === 1 ? c(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (n) {
      console.error(n), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      w--;
    }
  }
}, "d");
var D = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var u = /* @__PURE__ */ __name(class {
  static parseFloat(e) {
    if (e.length === 0)
      throw new Error(`Not a number: '${e}'`);
    if (e[0] === "-")
      return -u.parseFloat(e.substr(1));
    if (e[0] === "\u221A")
      return Math.sqrt(u.parseFloat(e.substr(1)));
    let r = u.matchUnicodeFraction((i) => i.character === e);
    if (r !== void 0)
      return r.value;
    let n = parseFloat(e);
    if (isNaN(n))
      throw new Error(`Not a number: '${e}'`);
    return n;
  }
  static simplifyByRounding(e, r) {
    if (e < 0)
      return -u.simplifyByRounding(-e, r);
    let n = e % 1;
    if (n <= r || 1 - n <= r)
      return Math.round(e);
    let i = u.matchUnicodeFraction((s) => Math.abs(s.value - e) <= r);
    if (i !== void 0)
      return i.value;
    let a = u.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - e) <= r);
    return a !== void 0 ? Math.sqrt(a.value) : e;
  }
  static matchUnicodeFraction(e) {
    for (let r of D)
      if (e(r))
        return r;
  }
  constructor(e, r, n, i) {
    this.allowAbbreviation = e, this.maxAbbreviationError = r, this.fixedDigits = n, this.itemSeparator = i;
  }
  formatFloat(e) {
    return this.allowAbbreviation ? this.abbreviateFloat(e, this.maxAbbreviationError, this.fixedDigits) : this.fixedDigits !== void 0 ? e.toFixed(this.fixedDigits) : String(e);
  }
  abbreviateFloat(e, r = 0, n = void 0) {
    if (Math.abs(e) < r)
      return "0";
    if (e < 0)
      return `-${this.abbreviateFloat(-e, r, n)}`;
    let i = u.matchUnicodeFraction((s) => Math.abs(s.value - e) <= r);
    if (i !== void 0)
      return i.character;
    let a = u.matchUnicodeFraction((s) => Math.abs(Math.sqrt(s.value) - e) <= r);
    return a !== void 0 ? `\u221A${a.character}` : e % 1 !== 0 && n !== void 0 ? e.toFixed(n) : e.toString();
  }
}, "u");
var p = u;
p.CONSISTENT = new u(false, 0, 2, ", "), p.EXACT = new u(true, 0, void 0, ", "), p.MINIFIED = new u(true, 0, void 0, ","), p.SIMPLIFIED = new u(true, 5e-4, 3, ", ");
var m = /* @__PURE__ */ __name(class {
  static need(e, r, n) {
    if (e !== true) {
      let i = n === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(n).join(", ")}]`, s = `Precondition failed

Message: ${r === void 0 ? "(not provided)" : r}

Args: ${i}`;
      throw new Error(s);
    }
  }
  static notNull(e) {
    m.need(e != null, "notNull");
  }
  static snappedCosSin(e) {
    let r = Math.PI / 4, n = Math.round(e / r);
    if (n * r === e) {
      let i = Math.sqrt(0.5);
      return [[1, 0], [i, i], [0, 1], [-i, i], [-1, 0], [-i, -i], [0, -1], [i, -i]][n & 7];
    }
    return [Math.cos(e), Math.sin(e)];
  }
}, "m");
var o = /* @__PURE__ */ __name(class {
  static from(e) {
    if (e instanceof o)
      return e;
    if (typeof e == "number")
      return new o(e, 0);
    throw new d("Unrecognized value type.", { v: e });
  }
  static polar(e, r) {
    let [n, i] = m.snappedCosSin(r);
    return new o(e * n, e * i);
  }
  static realPartOf(e) {
    if (e instanceof o)
      return e.real;
    if (typeof e == "number")
      return e;
    throw new d("Unrecognized value type.", { v: e });
  }
  static imagPartOf(e) {
    if (e instanceof o)
      return e.imag;
    if (typeof e == "number")
      return 0;
    throw new d("Unrecognized value type.", { v: e });
  }
  constructor(e, r) {
    this.real = e, this.imag = r;
  }
  static rootsOfQuadratic(e, r, n) {
    if (e = o.from(e), r = o.from(r), n = o.from(n), e.isEqualTo(0)) {
      if (!r.isEqualTo(0))
        return [n.times(-1).dividedBy(r)];
      if (!n.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let i = r.times(r).minus(e.times(n).times(4)).sqrts(), a = r.times(-1), s = e.times(2);
    return i.map((x) => a.minus(x).dividedBy(s));
  }
  isEqualTo(e) {
    return e instanceof o ? this.real === e.real && this.imag === e.imag : typeof e == "number" ? this.real === e && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(e, r) {
    if (e instanceof o || typeof e == "number") {
      let n = this.minus(o.from(e));
      return Math.abs(n.real) <= r && Math.abs(n.imag) <= r && n.abs() <= r;
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
    return e < 1e-5 ? o.polar(1, this.phase()) : this.dividedBy(Math.sqrt(e));
  }
  plus(e) {
    let r = o.from(e);
    return new o(this.real + r.real, this.imag + r.imag);
  }
  minus(e) {
    let r = o.from(e);
    return new o(this.real - r.real, this.imag - r.imag);
  }
  times(e) {
    let r = o.from(e);
    return new o(this.real * r.real - this.imag * r.imag, this.real * r.imag + this.imag * r.real);
  }
  dividedBy(e) {
    let r = o.from(e), n = r.norm2();
    if (n === 0)
      throw new Error("Division by Zero");
    let i = this.times(r.conjugate());
    return new o(i.real / n, i.imag / n);
  }
  sqrts() {
    let [e, r] = [this.real, this.imag], n = Math.sqrt(Math.sqrt(e * e + r * r));
    if (n === 0)
      return [o.ZERO];
    if (r === 0 && e < 0)
      return [new o(0, n), new o(0, -n)];
    let i = this.phase() / 2, a = o.polar(n, i);
    return [a, a.times(-1)];
  }
  conjugate() {
    return new o(this.real, -this.imag);
  }
  toString(e) {
    return e = e || p.EXACT, e.allowAbbreviation ? this.toStringAllowSingleValue(e) : this.toStringBothValues(e);
  }
  neg() {
    return new o(-this.real, -this.imag);
  }
  raisedTo(e) {
    return e === 0.5 && this.imag === 0 && this.real >= 0 ? new o(Math.sqrt(this.real), 0) : o.ZERO.isEqualTo(e) ? o.ONE : this.isEqualTo(o.ZERO) ? o.ZERO : this.ln().times(o.from(e)).exp();
  }
  exp() {
    return o.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let e = this.times(o.I);
    return e.exp().plus(e.neg().exp()).times(0.5);
  }
  sin() {
    let e = this.times(o.I);
    return e.exp().minus(e.neg().exp()).dividedBy(new o(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new o(Math.log(this.abs()), this.phase());
  }
  phase() {
    return Math.atan2(this.imag, this.real);
  }
  toStringAllowSingleValue(e) {
    return Math.abs(this.imag) <= e.maxAbbreviationError ? e.formatFloat(this.real) : Math.abs(this.real) <= e.maxAbbreviationError ? Math.abs(this.imag - 1) <= e.maxAbbreviationError ? "i" : Math.abs(this.imag + 1) <= e.maxAbbreviationError ? "-i" : `${e.formatFloat(this.imag)}i` : this.toStringBothValues(e);
  }
  toStringBothValues(e) {
    let r = this.imag >= 0 ? "+" : "-", n = e.allowAbbreviation && Math.abs(Math.abs(this.imag) - 1) <= e.maxAbbreviationError ? "" : e.formatFloat(Math.abs(this.imag));
    return `${(e.allowAbbreviation || e.fixedDigits === void 0 || this.real < 0 ? "" : "+") + e.formatFloat(this.real) + r + n}i`;
  }
}, "o");
var h = o;
h.ZERO = new o(0, 0), h.ONE = new o(1, 0), h.I = new o(0, 1);

// ../../packages/elements/dist/index.js
var yf = Object.create;
var Gi = Object.defineProperty;
var _u = Object.getOwnPropertyDescriptor;
var xf = Object.getOwnPropertyNames;
var wf = Object.getPrototypeOf;
var Ef = Object.prototype.hasOwnProperty;
var Sf = /* @__PURE__ */ __name((r) => Gi(r, "__esModule", { value: true }), "Sf");
var u2 = /* @__PURE__ */ __name((r, e) => Gi(r, "name", { value: e, configurable: true }), "u");
var Mu = /* @__PURE__ */ __name((r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports), "Mu");
var Tf = /* @__PURE__ */ __name((r, e, t, i) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let l of xf(e))
      !Ef.call(r, l) && (t || l !== "default") && Gi(r, l, { get: () => e[l], enumerable: !(i = _u(e, l)) || i.enumerable });
  return r;
}, "Tf");
var Xo = /* @__PURE__ */ __name((r, e) => Tf(Sf(Gi(r != null ? yf(wf(r)) : {}, "default", !e && r && r.__esModule ? { get: () => r.default, enumerable: true } : { value: r, enumerable: true })), r), "Xo");
var k = /* @__PURE__ */ __name((r, e, t, i) => {
  for (var l = i > 1 ? void 0 : i ? _u(e, t) : e, c2 = r.length - 1, d2; c2 >= 0; c2--)
    (d2 = r[c2]) && (l = (i ? d2(e, t, l) : d2(l)) || l);
  return i && l && Gi(e, t, l), l;
}, "k");
var xc = Mu((Bs, yc) => {
  (function(r) {
    "use strict";
    var e = 2e3, t = { s: 1, n: 0, d: 1 };
    function i(S) {
      function _() {
        var I2 = Error.apply(this, arguments);
        I2.name = this.name = S, this.stack = I2.stack, this.message = I2.message;
      }
      __name(_, "_");
      u2(_, "errorConstructor");
      function P() {
      }
      __name(P, "P");
      return u2(P, "IntermediateInheritor"), P.prototype = Error.prototype, _.prototype = new P(), _;
    }
    __name(i, "i");
    u2(i, "createError");
    var l = R2.DivisionByZero = i("DivisionByZero"), c2 = R2.InvalidParameter = i("InvalidParameter");
    function d2(S, _) {
      return isNaN(S = parseInt(S, 10)) && v(), S * _;
    }
    __name(d2, "d");
    u2(d2, "assign");
    function v() {
      throw new c2();
    }
    __name(v, "v");
    u2(v, "throwInvalidParam");
    function b(S) {
      for (var _ = {}, P = S, I2 = 2, L = 4; L <= P; ) {
        for (; P % I2 === 0; )
          P /= I2, _[I2] = (_[I2] || 0) + 1;
        L += 1 + 2 * I2++;
      }
      return P !== S ? P > 1 && (_[P] = (_[P] || 0) + 1) : _[S] = (_[S] || 0) + 1, _;
    }
    __name(b, "b");
    u2(b, "factorize");
    var y = u2(function(S, _) {
      var P = 0, I2 = 1, L = 1, E = 0, B = 0, z2 = 0, X = 1, V = 1, $ = 0, U = 1, re = 1, ie = 1, W = 1e7, ce;
      if (S != null)
        if (_ !== void 0)
          P = S, I2 = _, L = P * I2;
        else
          switch (typeof S) {
            case "object": {
              "d" in S && "n" in S ? (P = S.n, I2 = S.d, "s" in S && (P *= S.s)) : 0 in S ? (P = S[0], 1 in S && (I2 = S[1])) : v(), L = P * I2;
              break;
            }
            case "number": {
              if (S < 0 && (L = S, S = -S), S % 1 === 0)
                P = S;
              else if (S > 0) {
                for (S >= 1 && (V = Math.pow(10, Math.floor(1 + Math.log(S) / Math.LN10)), S /= V); U <= W && ie <= W; )
                  if (ce = ($ + re) / (U + ie), S === ce) {
                    U + ie <= W ? (P = $ + re, I2 = U + ie) : ie > U ? (P = re, I2 = ie) : (P = $, I2 = U);
                    break;
                  } else
                    S > ce ? ($ += re, U += ie) : (re += $, ie += U), U > W ? (P = re, I2 = ie) : (P = $, I2 = U);
                P *= V;
              } else
                (isNaN(S) || isNaN(_)) && (I2 = P = NaN);
              break;
            }
            case "string":
              if (U = S.match(/\d+|./g), U === null && v(), U[$] === "-" ? (L = -1, $++) : U[$] === "+" && $++, U.length === $ + 1 ? B = d2(U[$++], L) : U[$ + 1] === "." || U[$] === "." ? (U[$] !== "." && (E = d2(U[$++], L)), $++, ($ + 1 === U.length || U[$ + 1] === "(" && U[$ + 3] === ")" || U[$ + 1] === "'" && U[$ + 3] === "'") && (B = d2(U[$], L), X = Math.pow(10, U[$].length), $++), (U[$] === "(" && U[$ + 2] === ")" || U[$] === "'" && U[$ + 2] === "'") && (z2 = d2(U[$ + 1], L), V = Math.pow(10, U[$ + 1].length) - 1, $ += 3)) : U[$ + 1] === "/" || U[$ + 1] === ":" ? (B = d2(U[$], L), X = d2(U[$ + 2], 1), $ += 3) : U[$ + 3] === "/" && U[$ + 1] === " " && (E = d2(U[$], L), B = d2(U[$ + 2], L), X = d2(U[$ + 4], 1), $ += 5), U.length <= $) {
                I2 = X * V, L = P = z2 + I2 * E + V * B;
                break;
              }
            default:
              v();
          }
      if (I2 === 0)
        throw new l();
      t.s = L < 0 ? -1 : 1, t.n = Math.abs(P), t.d = Math.abs(I2);
    }, "parse");
    function w2(S, _, P) {
      for (var I2 = 1; _ > 0; S = S * S % P, _ >>= 1)
        _ & 1 && (I2 = I2 * S % P);
      return I2;
    }
    __name(w2, "w");
    u2(w2, "modpow");
    function A2(S, _) {
      for (; _ % 2 === 0; _ /= 2)
        ;
      for (; _ % 5 === 0; _ /= 5)
        ;
      if (_ === 1)
        return 0;
      for (var P = 10 % _, I2 = 1; P !== 1; I2++)
        if (P = P * 10 % _, I2 > e)
          return 0;
      return I2;
    }
    __name(A2, "A");
    u2(A2, "cycleLen");
    function O2(S, _, P) {
      for (var I2 = 1, L = w2(10, P, _), E = 0; E < 300; E++) {
        if (I2 === L)
          return E;
        I2 = I2 * 10 % _, L = L * 10 % _;
      }
      return 0;
    }
    __name(O2, "O");
    u2(O2, "cycleStart");
    function M2(S, _) {
      if (!S)
        return _;
      if (!_)
        return S;
      for (; ; ) {
        if (S %= _, !S)
          return _;
        if (_ %= S, !_)
          return S;
      }
    }
    __name(M2, "M");
    u2(M2, "gcd");
    function R2(S, _) {
      if (!(this instanceof R2))
        return new R2(S, _);
      y(S, _), S = M2(t.d, t.n), this.s = t.s, this.n = t.n / S, this.d = t.d / S;
    }
    __name(R2, "R");
    u2(R2, "Fraction"), R2.prototype = { s: 1, n: 0, d: 1, abs: function() {
      return new R2(this.n, this.d);
    }, neg: function() {
      return new R2(-this.s * this.n, this.d);
    }, add: function(S, _) {
      return y(S, _), new R2(this.s * this.n * t.d + t.s * this.d * t.n, this.d * t.d);
    }, sub: function(S, _) {
      return y(S, _), new R2(this.s * this.n * t.d - t.s * this.d * t.n, this.d * t.d);
    }, mul: function(S, _) {
      return y(S, _), new R2(this.s * t.s * this.n * t.n, this.d * t.d);
    }, div: function(S, _) {
      return y(S, _), new R2(this.s * t.s * this.n * t.d, this.d * t.n);
    }, clone: function() {
      return new R2(this);
    }, mod: function(S, _) {
      return isNaN(this.n) || isNaN(this.d) ? new R2(NaN) : S === void 0 ? new R2(this.s * this.n % this.d, 1) : (y(S, _), t.n === 0 && this.d === 0 && R2(0, 0), new R2(this.s * (t.d * this.n) % (t.n * this.d), t.d * this.d));
    }, gcd: function(S, _) {
      return y(S, _), new R2(M2(t.n, this.n) * M2(t.d, this.d), t.d * this.d);
    }, lcm: function(S, _) {
      return y(S, _), t.n === 0 && this.n === 0 ? new R2() : new R2(t.n * this.n, M2(t.n, this.n) * M2(t.d, this.d));
    }, ceil: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new R2(NaN) : new R2(Math.ceil(S * this.s * this.n / this.d), S);
    }, floor: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new R2(NaN) : new R2(Math.floor(S * this.s * this.n / this.d), S);
    }, round: function(S) {
      return S = Math.pow(10, S || 0), isNaN(this.n) || isNaN(this.d) ? new R2(NaN) : new R2(Math.round(S * this.s * this.n / this.d), S);
    }, inverse: function() {
      return new R2(this.s * this.d, this.n);
    }, pow: function(S, _) {
      if (y(S, _), t.d === 1)
        return t.s < 0 ? new R2(Math.pow(this.s * this.d, t.n), Math.pow(this.n, t.n)) : new R2(Math.pow(this.s * this.n, t.n), Math.pow(this.d, t.n));
      if (this.s < 0)
        return null;
      var P = b(this.n), I2 = b(this.d), L = 1, E = 1;
      for (var B in P)
        if (B !== "1") {
          if (B === "0") {
            L = 0;
            break;
          }
          if (P[B] *= t.n, P[B] % t.d === 0)
            P[B] /= t.d;
          else
            return null;
          L *= Math.pow(B, P[B]);
        }
      for (var B in I2)
        if (B !== "1") {
          if (I2[B] *= t.n, I2[B] % t.d === 0)
            I2[B] /= t.d;
          else
            return null;
          E *= Math.pow(B, I2[B]);
        }
      return t.s < 0 ? new R2(E, L) : new R2(L, E);
    }, equals: function(S, _) {
      return y(S, _), this.s * this.n * t.d === t.s * t.n * this.d;
    }, compare: function(S, _) {
      y(S, _);
      var P = this.s * this.n * t.d - t.s * t.n * this.d;
      return (0 < P) - (P < 0);
    }, simplify: function(S) {
      if (isNaN(this.n) || isNaN(this.d))
        return this;
      var _ = this.abs().toContinued();
      S = S || 1e-3;
      function P(E) {
        return E.length === 1 ? new R2(E[0]) : P(E.slice(1)).inverse().add(E[0]);
      }
      __name(P, "P");
      u2(P, "rec");
      for (var I2 = 0; I2 < _.length; I2++) {
        var L = P(_.slice(0, I2 + 1));
        if (L.sub(this.abs()).abs().valueOf() < S)
          return L.mul(this.s);
      }
      return this;
    }, divisible: function(S, _) {
      return y(S, _), !(!(t.n * this.d) || this.n * t.d % (t.n * this.d));
    }, valueOf: function() {
      return this.s * this.n / this.d;
    }, toFraction: function(S) {
      var _, P = "", I2 = this.n, L = this.d;
      return this.s < 0 && (P += "-"), L === 1 ? P += I2 : (S && (_ = Math.floor(I2 / L)) > 0 && (P += _, P += " ", I2 %= L), P += I2, P += "/", P += L), P;
    }, toLatex: function(S) {
      var _, P = "", I2 = this.n, L = this.d;
      return this.s < 0 && (P += "-"), L === 1 ? P += I2 : (S && (_ = Math.floor(I2 / L)) > 0 && (P += _, I2 %= L), P += "\\frac{", P += I2, P += "}{", P += L, P += "}"), P;
    }, toContinued: function() {
      var S, _ = this.n, P = this.d, I2 = [];
      if (isNaN(_) || isNaN(P))
        return I2;
      do
        I2.push(Math.floor(_ / P)), S = _ % P, _ = P, P = S;
      while (_ !== 1);
      return I2;
    }, toString: function(S) {
      var _, P = this.n, I2 = this.d;
      if (isNaN(P) || isNaN(I2))
        return "NaN";
      S = S || 15;
      var L = A2(P, I2), E = O2(P, I2, L), B = this.s === -1 ? "-" : "";
      if (B += P / I2 | 0, P %= I2, P *= 10, P && (B += "."), L) {
        for (var z2 = E; z2--; )
          B += P / I2 | 0, P %= I2, P *= 10;
        B += "(";
        for (var z2 = L; z2--; )
          B += P / I2 | 0, P %= I2, P *= 10;
        B += ")";
      } else
        for (var z2 = S; P && z2--; )
          B += P / I2 | 0, P %= I2, P *= 10;
      return B;
    } }, typeof define == "function" && define.amd ? define([], function() {
      return R2;
    }) : typeof Bs == "object" ? (Object.defineProperty(R2, "__esModule", { value: true }), R2.default = R2, R2.Fraction = R2, yc.exports = R2) : r.Fraction = R2;
  })(Bs);
});
var Ta = Mu((Mc, Ws) => {
  (function(r) {
    typeof Mc == "object" && typeof Ws != "undefined" ? Ws.exports = r() : typeof define == "function" && define.amd ? define([], r) : (typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this).interact = r();
  })(function() {
    var r = {};
    Object.defineProperty(r, "__esModule", { value: true }), r.default = void 0, r.default = function(n) {
      return !(!n || !n.Window) && n instanceof n.Window;
    };
    var e = {};
    Object.defineProperty(e, "__esModule", { value: true }), e.init = l, e.getWindow = function(n) {
      return (0, r.default)(n) ? n : (n.ownerDocument || n).defaultView || i.window;
    }, e.window = e.realWindow = void 0;
    var t = void 0;
    e.realWindow = t;
    var i = void 0;
    function l(n) {
      e.realWindow = t = n;
      var o2 = n.document.createTextNode("");
      o2.ownerDocument !== n.document && typeof n.wrap == "function" && n.wrap(o2) === o2 && (n = n.wrap(n)), e.window = i = n;
    }
    __name(l, "l");
    u2(l, "o"), e.window = i, typeof window != "undefined" && window && l(window);
    var c2 = {};
    function d2(n) {
      return (d2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(d2, "d");
    u2(d2, "a"), Object.defineProperty(c2, "__esModule", { value: true }), c2.default = void 0;
    var v = u2(function(n) {
      return !!n && d2(n) === "object";
    }, "s"), b = u2(function(n) {
      return typeof n == "function";
    }, "l"), y = { window: function(n) {
      return n === e.window || (0, r.default)(n);
    }, docFrag: function(n) {
      return v(n) && n.nodeType === 11;
    }, object: v, func: b, number: function(n) {
      return typeof n == "number";
    }, bool: function(n) {
      return typeof n == "boolean";
    }, string: function(n) {
      return typeof n == "string";
    }, element: function(n) {
      if (!n || d2(n) !== "object")
        return false;
      var o2 = e.getWindow(n) || e.window;
      return /object|function/.test(d2(o2.Element)) ? n instanceof o2.Element : n.nodeType === 1 && typeof n.nodeName == "string";
    }, plainObject: function(n) {
      return v(n) && !!n.constructor && /function Object\b/.test(n.constructor.toString());
    }, array: function(n) {
      return v(n) && n.length !== void 0 && b(n.splice);
    } };
    c2.default = y;
    var w2 = {};
    function A2(n) {
      var o2 = n.interaction;
      if (o2.prepared.name === "drag") {
        var a = o2.prepared.axis;
        a === "x" ? (o2.coords.cur.page.y = o2.coords.start.page.y, o2.coords.cur.client.y = o2.coords.start.client.y, o2.coords.velocity.client.y = 0, o2.coords.velocity.page.y = 0) : a === "y" && (o2.coords.cur.page.x = o2.coords.start.page.x, o2.coords.cur.client.x = o2.coords.start.client.x, o2.coords.velocity.client.x = 0, o2.coords.velocity.page.x = 0);
      }
    }
    __name(A2, "A");
    u2(A2, "f");
    function O2(n) {
      var o2 = n.iEvent, a = n.interaction;
      if (a.prepared.name === "drag") {
        var s = a.prepared.axis;
        if (s === "x" || s === "y") {
          var p2 = s === "x" ? "y" : "x";
          o2.page[p2] = a.coords.start.page[p2], o2.client[p2] = a.coords.start.client[p2], o2.delta[p2] = 0;
        }
      }
    }
    __name(O2, "O");
    u2(O2, "d"), Object.defineProperty(w2, "__esModule", { value: true }), w2.default = void 0;
    var M2 = { id: "actions/drag", install: function(n) {
      var o2 = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.draggable = M2.draggable, o2.map.drag = M2, o2.methodDict.drag = "draggable", s.actions.drag = M2.defaults;
    }, listeners: { "interactions:before-action-move": A2, "interactions:action-resume": A2, "interactions:action-move": O2, "auto-start:check": function(n) {
      var o2 = n.interaction, a = n.interactable, s = n.buttons, p2 = a.options.drag;
      if (p2 && p2.enabled && (!o2.pointerIsDown || !/mouse|pointer/.test(o2.pointerType) || (s & a.options.drag.mouseButtons) != 0))
        return n.action = { name: "drag", axis: p2.lockAxis === "start" ? p2.startAxis : p2.lockAxis }, false;
    } }, draggable: function(n) {
      return c2.default.object(n) ? (this.options.drag.enabled = n.enabled !== false, this.setPerAction("drag", n), this.setOnEvents("drag", n), /^(xy|x|y|start)$/.test(n.lockAxis) && (this.options.drag.lockAxis = n.lockAxis), /^(xy|x|y)$/.test(n.startAxis) && (this.options.drag.startAxis = n.startAxis), this) : c2.default.bool(n) ? (this.options.drag.enabled = n, this) : this.options.drag;
    }, beforeMove: A2, move: O2, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    } }, R2 = M2;
    w2.default = R2;
    var S = {};
    Object.defineProperty(S, "__esModule", { value: true }), S.default = void 0;
    var _ = { init: function(n) {
      var o2 = n;
      _.document = o2.document, _.DocumentFragment = o2.DocumentFragment || P, _.SVGElement = o2.SVGElement || P, _.SVGSVGElement = o2.SVGSVGElement || P, _.SVGElementInstance = o2.SVGElementInstance || P, _.Element = o2.Element || P, _.HTMLElement = o2.HTMLElement || _.Element, _.Event = o2.Event, _.Touch = o2.Touch || P, _.PointerEvent = o2.PointerEvent || o2.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function P() {
    }
    __name(P, "P");
    u2(P, "y");
    var I2 = _;
    S.default = I2;
    var L = {};
    Object.defineProperty(L, "__esModule", { value: true }), L.default = void 0;
    var E = { init: function(n) {
      var o2 = S.default.Element, a = n.navigator || {};
      E.supportsTouch = "ontouchstart" in n || c2.default.func(n.DocumentTouch) && S.default.document instanceof n.DocumentTouch, E.supportsPointerEvent = a.pointerEnabled !== false && !!S.default.PointerEvent, E.isIOS = /iP(hone|od|ad)/.test(a.platform), E.isIOS7 = /iP(hone|od|ad)/.test(a.platform) && /OS 7[^\d]/.test(a.appVersion), E.isIe9 = /MSIE 9/.test(a.userAgent), E.isOperaMobile = a.appName === "Opera" && E.supportsTouch && /Presto/.test(a.userAgent), E.prefixedMatchesSelector = "matches" in o2.prototype ? "matches" : "webkitMatchesSelector" in o2.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in o2.prototype ? "mozMatchesSelector" : "oMatchesSelector" in o2.prototype ? "oMatchesSelector" : "msMatchesSelector", E.pEventTypes = E.supportsPointerEvent ? S.default.PointerEvent === n.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, E.wheelEvent = S.default.document && "onmousewheel" in S.default.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, B = E;
    L.default = B;
    var z2 = {};
    function X(n) {
      var o2 = n.parentNode;
      if (c2.default.docFrag(o2)) {
        for (; (o2 = o2.host) && c2.default.docFrag(o2); )
          ;
        return o2;
      }
      return o2;
    }
    __name(X, "X");
    u2(X, "P");
    function V(n, o2) {
      return e.window !== e.realWindow && (o2 = o2.replace(/\/deep\//g, " ")), n[L.default.prefixedMatchesSelector](o2);
    }
    __name(V, "V");
    u2(V, "O"), Object.defineProperty(z2, "__esModule", { value: true }), z2.nodeContains = function(n, o2) {
      if (n.contains)
        return n.contains(o2);
      for (; o2; ) {
        if (o2 === n)
          return true;
        o2 = o2.parentNode;
      }
      return false;
    }, z2.closest = function(n, o2) {
      for (; c2.default.element(n); ) {
        if (V(n, o2))
          return n;
        n = X(n);
      }
      return null;
    }, z2.parentNode = X, z2.matchesSelector = V, z2.indexOfDeepestElement = function(n) {
      for (var o2, a = [], s = 0; s < n.length; s++) {
        var p2 = n[s], f2 = n[o2];
        if (p2 && s !== o2)
          if (f2) {
            var m2 = $(p2), h2 = $(f2);
            if (m2 !== p2.ownerDocument)
              if (h2 !== p2.ownerDocument)
                if (m2 !== h2) {
                  a = a.length ? a : U(f2);
                  var g = void 0;
                  if (f2 instanceof S.default.HTMLElement && p2 instanceof S.default.SVGElement && !(p2 instanceof S.default.SVGSVGElement)) {
                    if (p2 === h2)
                      continue;
                    g = p2.ownerSVGElement;
                  } else
                    g = p2;
                  for (var x = U(g, f2.ownerDocument), T = 0; x[T] && x[T] === a[T]; )
                    T++;
                  var C = [x[T - 1], x[T], a[T]];
                  if (C[0])
                    for (var N2 = C[0].lastChild; N2; ) {
                      if (N2 === C[1]) {
                        o2 = s, a = x;
                        break;
                      }
                      if (N2 === C[2])
                        break;
                      N2 = N2.previousSibling;
                    }
                } else
                  G2 = p2, D2 = f2, (parseInt(e.getWindow(G2).getComputedStyle(G2).zIndex, 10) || 0) >= (parseInt(e.getWindow(D2).getComputedStyle(D2).zIndex, 10) || 0) && (o2 = s);
              else
                o2 = s;
          } else
            o2 = s;
      }
      var G2, D2;
      return o2;
    }, z2.matchesUpTo = function(n, o2, a) {
      for (; c2.default.element(n); ) {
        if (V(n, o2))
          return true;
        if ((n = X(n)) === a)
          return V(n, o2);
      }
      return false;
    }, z2.getActualElement = function(n) {
      return n.correspondingUseElement || n;
    }, z2.getScrollXY = re, z2.getElementClientRect = ie, z2.getElementRect = function(n) {
      var o2 = ie(n);
      if (!L.default.isIOS7 && o2) {
        var a = re(e.getWindow(n));
        o2.left += a.x, o2.right += a.x, o2.top += a.y, o2.bottom += a.y;
      }
      return o2;
    }, z2.getPath = function(n) {
      for (var o2 = []; n; )
        o2.push(n), n = X(n);
      return o2;
    }, z2.trySelector = function(n) {
      return !!c2.default.string(n) && (S.default.document.querySelector(n), true);
    };
    var $ = u2(function(n) {
      return n.parentNode || n.host;
    }, "S");
    function U(n, o2) {
      for (var a, s = [], p2 = n; (a = $(p2)) && p2 !== o2 && a !== p2.ownerDocument; )
        s.unshift(p2), p2 = a;
      return s;
    }
    __name(U, "U");
    u2(U, "E");
    function re(n) {
      return { x: (n = n || e.window).scrollX || n.document.documentElement.scrollLeft, y: n.scrollY || n.document.documentElement.scrollTop };
    }
    __name(re, "re");
    u2(re, "T");
    function ie(n) {
      var o2 = n instanceof S.default.SVGElement ? n.getBoundingClientRect() : n.getClientRects()[0];
      return o2 && { left: o2.left, right: o2.right, top: o2.top, bottom: o2.bottom, width: o2.width || o2.right - o2.left, height: o2.height || o2.bottom - o2.top };
    }
    __name(ie, "ie");
    u2(ie, "M");
    var W = {};
    Object.defineProperty(W, "__esModule", { value: true }), W.default = function(n, o2) {
      for (var a in o2)
        n[a] = o2[a];
      return n;
    };
    var ce = {};
    function Pe(n, o2) {
      (o2 == null || o2 > n.length) && (o2 = n.length);
      for (var a = 0, s = Array(o2); a < o2; a++)
        s[a] = n[a];
      return s;
    }
    __name(Pe, "Pe");
    u2(Pe, "I");
    function Ue(n, o2, a) {
      return n === "parent" ? (0, z2.parentNode)(a) : n === "self" ? o2.getRect(a) : (0, z2.closest)(a, n);
    }
    __name(Ue, "Ue");
    u2(Ue, "D"), Object.defineProperty(ce, "__esModule", { value: true }), ce.getStringOptionResult = Ue, ce.resolveRectLike = function(n, o2, a, s) {
      var p2, f2 = n;
      return c2.default.string(f2) ? f2 = Ue(f2, o2, a) : c2.default.func(f2) && (f2 = f2.apply(void 0, function(m2) {
        if (Array.isArray(m2))
          return Pe(m2);
      }(p2 = s) || function(m2) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(m2))
          return Array.from(m2);
      }(p2) || function(m2, h2) {
        if (m2) {
          if (typeof m2 == "string")
            return Pe(m2, h2);
          var g = Object.prototype.toString.call(m2).slice(8, -1);
          return g === "Object" && m2.constructor && (g = m2.constructor.name), g === "Map" || g === "Set" ? Array.from(m2) : g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g) ? Pe(m2, h2) : void 0;
        }
      }(p2) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }())), c2.default.element(f2) && (f2 = (0, z2.getElementRect)(f2)), f2;
    }, ce.rectToXY = function(n) {
      return n && { x: "x" in n ? n.x : n.left, y: "y" in n ? n.y : n.top };
    }, ce.xywhToTlbr = function(n) {
      return !n || "left" in n && "top" in n || ((n = (0, W.default)({}, n)).left = n.x || 0, n.top = n.y || 0, n.right = n.right || n.left + n.width, n.bottom = n.bottom || n.top + n.height), n;
    }, ce.tlbrToXywh = function(n) {
      return !n || "x" in n && "y" in n || ((n = (0, W.default)({}, n)).x = n.left || 0, n.y = n.top || 0, n.width = n.width || (n.right || 0) - n.x, n.height = n.height || (n.bottom || 0) - n.y), n;
    }, ce.addEdges = function(n, o2, a) {
      n.left && (o2.left += a.x), n.right && (o2.right += a.x), n.top && (o2.top += a.y), n.bottom && (o2.bottom += a.y), o2.width = o2.right - o2.left, o2.height = o2.bottom - o2.top;
    };
    var Ge = {};
    Object.defineProperty(Ge, "__esModule", { value: true }), Ge.default = function(n, o2, a) {
      var s = n.options[a], p2 = s && s.origin || n.options.origin, f2 = (0, ce.resolveRectLike)(p2, n, o2, [n && o2]);
      return (0, ce.rectToXY)(f2) || { x: 0, y: 0 };
    };
    var fe = {};
    function Ze(n) {
      return n.trim().split(/ +/);
    }
    __name(Ze, "Ze");
    u2(Ze, "z"), Object.defineProperty(fe, "__esModule", { value: true }), fe.default = u2(/* @__PURE__ */ __name(function n(o2, a, s) {
      if (s = s || {}, c2.default.string(o2) && o2.search(" ") !== -1 && (o2 = Ze(o2)), c2.default.array(o2))
        return o2.reduce(function(g, x) {
          return (0, W.default)(g, n(x, a, s));
        }, s);
      if (c2.default.object(o2) && (a = o2, o2 = ""), c2.default.func(a))
        s[o2] = s[o2] || [], s[o2].push(a);
      else if (c2.default.array(a))
        for (var p2 = 0; p2 < a.length; p2++) {
          var f2;
          f2 = a[p2], n(o2, f2, s);
        }
      else if (c2.default.object(a))
        for (var m2 in a) {
          var h2 = Ze(m2).map(function(g) {
            return "".concat(o2).concat(g);
          });
          n(h2, a[m2], s);
        }
      return s;
    }, "n"), "t");
    var et = {};
    Object.defineProperty(et, "__esModule", { value: true }), et.default = void 0, et.default = function(n, o2) {
      return Math.sqrt(n * n + o2 * o2);
    };
    var Dt = {};
    function Ot(n, o2) {
      for (var a in o2) {
        var s = Ot.prefixedPropREs, p2 = false;
        for (var f2 in s)
          if (a.indexOf(f2) === 0 && s[f2].test(a)) {
            p2 = true;
            break;
          }
        p2 || typeof o2[a] == "function" || (n[a] = o2[a]);
      }
      return n;
    }
    __name(Ot, "Ot");
    u2(Ot, "X"), Object.defineProperty(Dt, "__esModule", { value: true }), Dt.default = void 0, Ot.prefixedPropREs = { webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/, moz: /(Pressure)$/ };
    var Cr = Ot;
    Dt.default = Cr;
    var K = {};
    function xt(n) {
      return n instanceof S.default.Event || n instanceof S.default.Touch;
    }
    __name(xt, "xt");
    u2(xt, "W");
    function wt(n, o2, a) {
      return n = n || "page", (a = a || {}).x = o2[n + "X"], a.y = o2[n + "Y"], a;
    }
    __name(wt, "wt");
    u2(wt, "L");
    function _r(n, o2) {
      return o2 = o2 || { x: 0, y: 0 }, L.default.isOperaMobile && xt(n) ? (wt("screen", n, o2), o2.x += window.scrollX, o2.y += window.scrollY) : wt("page", n, o2), o2;
    }
    __name(_r, "_r");
    u2(_r, "U");
    function $t(n, o2) {
      return o2 = o2 || {}, L.default.isOperaMobile && xt(n) ? wt("screen", n, o2) : wt("client", n, o2), o2;
    }
    __name($t, "$t");
    u2($t, "V");
    function lr(n) {
      var o2 = [];
      return c2.default.array(n) ? (o2[0] = n[0], o2[1] = n[1]) : n.type === "touchend" ? n.touches.length === 1 ? (o2[0] = n.touches[0], o2[1] = n.changedTouches[0]) : n.touches.length === 0 && (o2[0] = n.changedTouches[0], o2[1] = n.changedTouches[1]) : (o2[0] = n.touches[0], o2[1] = n.touches[1]), o2;
    }
    __name(lr, "lr");
    u2(lr, "N");
    function ur(n) {
      for (var o2 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, a = 0; a < n.length; a++) {
        var s = n[a];
        for (var p2 in o2)
          o2[p2] += s[p2];
      }
      for (var f2 in o2)
        o2[f2] /= n.length;
      return o2;
    }
    __name(ur, "ur");
    u2(ur, "q"), Object.defineProperty(K, "__esModule", { value: true }), K.copyCoords = function(n, o2) {
      n.page = n.page || {}, n.page.x = o2.page.x, n.page.y = o2.page.y, n.client = n.client || {}, n.client.x = o2.client.x, n.client.y = o2.client.y, n.timeStamp = o2.timeStamp;
    }, K.setCoordDeltas = function(n, o2, a) {
      n.page.x = a.page.x - o2.page.x, n.page.y = a.page.y - o2.page.y, n.client.x = a.client.x - o2.client.x, n.client.y = a.client.y - o2.client.y, n.timeStamp = a.timeStamp - o2.timeStamp;
    }, K.setCoordVelocity = function(n, o2) {
      var a = Math.max(o2.timeStamp / 1e3, 1e-3);
      n.page.x = o2.page.x / a, n.page.y = o2.page.y / a, n.client.x = o2.client.x / a, n.client.y = o2.client.y / a, n.timeStamp = a;
    }, K.setZeroCoords = function(n) {
      n.page.x = 0, n.page.y = 0, n.client.x = 0, n.client.y = 0;
    }, K.isNativePointer = xt, K.getXY = wt, K.getPageXY = _r, K.getClientXY = $t, K.getPointerId = function(n) {
      return c2.default.number(n.pointerId) ? n.pointerId : n.identifier;
    }, K.setCoords = function(n, o2, a) {
      var s = o2.length > 1 ? ur(o2) : o2[0];
      _r(s, n.page), $t(s, n.client), n.timeStamp = a;
    }, K.getTouchPair = lr, K.pointerAverage = ur, K.touchBBox = function(n) {
      if (!n.length)
        return null;
      var o2 = lr(n), a = Math.min(o2[0].pageX, o2[1].pageX), s = Math.min(o2[0].pageY, o2[1].pageY), p2 = Math.max(o2[0].pageX, o2[1].pageX), f2 = Math.max(o2[0].pageY, o2[1].pageY);
      return { x: a, y: s, left: a, top: s, right: p2, bottom: f2, width: p2 - a, height: f2 - s };
    }, K.touchDistance = function(n, o2) {
      var a = o2 + "X", s = o2 + "Y", p2 = lr(n), f2 = p2[0][a] - p2[1][a], m2 = p2[0][s] - p2[1][s];
      return (0, et.default)(f2, m2);
    }, K.touchAngle = function(n, o2) {
      var a = o2 + "X", s = o2 + "Y", p2 = lr(n), f2 = p2[1][a] - p2[0][a], m2 = p2[1][s] - p2[0][s];
      return 180 * Math.atan2(m2, f2) / Math.PI;
    }, K.getPointerType = function(n) {
      return c2.default.string(n.pointerType) ? n.pointerType : c2.default.number(n.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][n.pointerType] : /touch/.test(n.type || "") || n instanceof S.default.Touch ? "touch" : "mouse";
    }, K.getEventTargets = function(n) {
      var o2 = c2.default.func(n.composedPath) ? n.composedPath() : n.path;
      return [z2.getActualElement(o2 ? o2[0] : n.target), z2.getActualElement(n.currentTarget)];
    }, K.newCoords = function() {
      return { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 };
    }, K.coordsToEvent = function(n) {
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
    }, Object.defineProperty(K, "pointerExtend", { enumerable: true, get: function() {
      return Dt.default;
    } });
    var Rt = {};
    function Hn(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Hn, "Hn");
    u2(Hn, "G");
    function Ct(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(Ct, "Ct");
    u2(Ct, "H"), Object.defineProperty(Rt, "__esModule", { value: true }), Rt.BaseEvent = void 0;
    var ln = function() {
      function n(s) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ct(this, "type", void 0), Ct(this, "target", void 0), Ct(this, "currentTarget", void 0), Ct(this, "interactable", void 0), Ct(this, "_interaction", void 0), Ct(this, "timeStamp", void 0), Ct(this, "immediatePropagationStopped", false), Ct(this, "propagationStopped", false), this._interaction = s;
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && Hn(o2.prototype, a), n;
    }();
    Rt.BaseEvent = ln, Object.defineProperty(ln.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var xe = {};
    Object.defineProperty(xe, "__esModule", { value: true }), xe.find = xe.findIndex = xe.from = xe.merge = xe.remove = xe.contains = void 0, xe.contains = function(n, o2) {
      return n.indexOf(o2) !== -1;
    }, xe.remove = function(n, o2) {
      return n.splice(n.indexOf(o2), 1);
    };
    var Fr = u2(function(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        n.push(s);
      }
      return n;
    }, "J");
    xe.merge = Fr, xe.from = function(n) {
      return Fr([], n);
    };
    var Ur = u2(function(n, o2) {
      for (var a = 0; a < n.length; a++)
        if (o2(n[a], a, n))
          return a;
      return -1;
    }, "Q");
    xe.findIndex = Ur, xe.find = function(n, o2) {
      return n[Ur(n, o2)];
    };
    var _t = {};
    function un(n) {
      return (un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(un, "un");
    u2(un, "et");
    function cr(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(cr, "cr");
    u2(cr, "nt");
    function pr(n, o2) {
      return (pr = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o2);
    }
    __name(pr, "pr");
    u2(pr, "rt");
    function cn(n, o2) {
      return !o2 || un(o2) !== "object" && typeof o2 != "function" ? ct(n) : o2;
    }
    __name(cn, "cn");
    u2(cn, "ot");
    function ct(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(ct, "ct");
    u2(ct, "it");
    function Mr(n) {
      return (Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(n);
    }
    __name(Mr, "Mr");
    u2(Mr, "at");
    function zt(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(zt, "zt");
    u2(zt, "st"), Object.defineProperty(_t, "__esModule", { value: true }), _t.DropEvent = void 0;
    var Fn = function(n) {
      (function(h2, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h2.prototype = Object.create(g && g.prototype, { constructor: { value: h2, writable: true, configurable: true } }), g && pr(h2, g);
      })(m2, n);
      var o2, a, s, p2, f2 = (s = m2, p2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h2) {
          return false;
        }
      }(), function() {
        var h2, g = Mr(s);
        if (p2) {
          var x = Mr(this).constructor;
          h2 = Reflect.construct(g, arguments, x);
        } else
          h2 = g.apply(this, arguments);
        return cn(this, h2);
      });
      function m2(h2, g, x) {
        var T;
        (function(D2, H) {
          if (!(D2 instanceof H))
            throw new TypeError("Cannot call a class as a function");
        })(this, m2), zt(ct(T = f2.call(this, g._interaction)), "target", void 0), zt(ct(T), "dropzone", void 0), zt(ct(T), "dragEvent", void 0), zt(ct(T), "relatedTarget", void 0), zt(ct(T), "draggable", void 0), zt(ct(T), "timeStamp", void 0), zt(ct(T), "propagationStopped", false), zt(ct(T), "immediatePropagationStopped", false);
        var C = x === "dragleave" ? h2.prev : h2.cur, N2 = C.element, G2 = C.dropzone;
        return T.type = x, T.target = N2, T.currentTarget = N2, T.dropzone = G2, T.dragEvent = g, T.relatedTarget = g.target, T.draggable = g.interactable, T.timeStamp = g.timeStamp, T;
      }
      __name(m2, "m");
      return u2(m2, "a"), o2 = m2, (a = [{ key: "reject", value: function() {
        var h2 = this, g = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && g.cur.dropzone === this.dropzone && g.cur.element === this.target)
          if (g.prev.dropzone = this.dropzone, g.prev.element = this.target, g.rejected = true, g.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var x = g.activeDrops, T = xe.findIndex(x, function(N2) {
              var G2 = N2.dropzone, D2 = N2.element;
              return G2 === h2.dropzone && D2 === h2.target;
            });
            g.activeDrops.splice(T, 1);
            var C = new m2(g, this.dragEvent, "dropdeactivate");
            C.dropzone = this.dropzone, C.target = this.target, this.dropzone.fire(C);
          } else
            this.dropzone.fire(new m2(g, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]) && cr(o2.prototype, a), m2;
    }(Rt.BaseEvent);
    _t.DropEvent = Fn;
    var Ar = {};
    function pn(n, o2) {
      for (var a = 0; a < n.slice().length; a++) {
        var s = n.slice()[a], p2 = s.dropzone, f2 = s.element;
        o2.dropzone = p2, o2.target = f2, p2.fire(o2), o2.propagationStopped = o2.immediatePropagationStopped = false;
      }
    }
    __name(pn, "pn");
    u2(pn, "ct");
    function bi(n, o2) {
      for (var a = function(f2, m2) {
        for (var h2 = f2.interactables, g = [], x = 0; x < h2.list.length; x++) {
          var T = h2.list[x];
          if (T.options.drop.enabled) {
            var C = T.options.drop.accept;
            if (!(c2.default.element(C) && C !== m2 || c2.default.string(C) && !z2.matchesSelector(m2, C) || c2.default.func(C) && !C({ dropzone: T, draggableElement: m2 })))
              for (var N2 = c2.default.string(T.target) ? T._context.querySelectorAll(T.target) : c2.default.array(T.target) ? T.target : [T.target], G2 = 0; G2 < N2.length; G2++) {
                var D2 = N2[G2];
                D2 !== m2 && g.push({ dropzone: T, element: D2, rect: T.getRect(D2) });
              }
          }
        }
        return g;
      }(n, o2), s = 0; s < a.length; s++) {
        var p2 = a[s];
        p2.rect = p2.dropzone.getRect(p2.element);
      }
      return a;
    }
    __name(bi, "bi");
    u2(bi, "ft");
    function xo(n, o2, a) {
      for (var s = n.dropState, p2 = n.interactable, f2 = n.element, m2 = [], h2 = 0; h2 < s.activeDrops.length; h2++) {
        var g = s.activeDrops[h2], x = g.dropzone, T = g.element, C = g.rect;
        m2.push(x.dropCheck(o2, a, p2, f2, T, C) ? T : null);
      }
      var N2 = z2.indexOfDeepestElement(m2);
      return s.activeDrops[N2] || null;
    }
    __name(xo, "xo");
    u2(xo, "dt");
    function yi(n, o2, a) {
      var s = n.dropState, p2 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return a.type === "dragstart" && (p2.activate = new _t.DropEvent(s, a, "dropactivate"), p2.activate.target = null, p2.activate.dropzone = null), a.type === "dragend" && (p2.deactivate = new _t.DropEvent(s, a, "dropdeactivate"), p2.deactivate.target = null, p2.deactivate.dropzone = null), s.rejected || (s.cur.element !== s.prev.element && (s.prev.dropzone && (p2.leave = new _t.DropEvent(s, a, "dragleave"), a.dragLeave = p2.leave.target = s.prev.element, a.prevDropzone = p2.leave.dropzone = s.prev.dropzone), s.cur.dropzone && (p2.enter = new _t.DropEvent(s, a, "dragenter"), a.dragEnter = s.cur.element, a.dropzone = s.cur.dropzone)), a.type === "dragend" && s.cur.dropzone && (p2.drop = new _t.DropEvent(s, a, "drop"), a.dropzone = s.cur.dropzone, a.relatedTarget = s.cur.element), a.type === "dragmove" && s.cur.dropzone && (p2.move = new _t.DropEvent(s, a, "dropmove"), p2.move.dragmove = a, a.dropzone = s.cur.dropzone)), p2;
    }
    __name(yi, "yi");
    u2(yi, "pt");
    function xi(n, o2) {
      var a = n.dropState, s = a.activeDrops, p2 = a.cur, f2 = a.prev;
      o2.leave && f2.dropzone.fire(o2.leave), o2.enter && p2.dropzone.fire(o2.enter), o2.move && p2.dropzone.fire(o2.move), o2.drop && p2.dropzone.fire(o2.drop), o2.deactivate && pn(s, o2.deactivate), a.prev.dropzone = p2.dropzone, a.prev.element = p2.element;
    }
    __name(xi, "xi");
    u2(xi, "vt");
    function wo(n, o2) {
      var a = n.interaction, s = n.iEvent, p2 = n.event;
      if (s.type === "dragmove" || s.type === "dragend") {
        var f2 = a.dropState;
        o2.dynamicDrop && (f2.activeDrops = bi(o2, a.element));
        var m2 = s, h2 = xo(a, m2, p2);
        f2.rejected = f2.rejected && !!h2 && h2.dropzone === f2.cur.dropzone && h2.element === f2.cur.element, f2.cur.dropzone = h2 && h2.dropzone, f2.cur.element = h2 && h2.element, f2.events = yi(a, 0, m2);
      }
    }
    __name(wo, "wo");
    u2(wo, "ht"), Object.defineProperty(Ar, "__esModule", { value: true }), Ar.default = void 0;
    var q2 = { id: "actions/drop", install: function(n) {
      var o2 = n.actions, a = n.interactStatic, s = n.Interactable, p2 = n.defaults;
      n.usePlugin(w2.default), s.prototype.dropzone = function(f2) {
        return function(m2, h2) {
          if (c2.default.object(h2)) {
            if (m2.options.drop.enabled = h2.enabled !== false, h2.listeners) {
              var g = (0, fe.default)(h2.listeners), x = Object.keys(g).reduce(function(T, C) {
                return T[/^(enter|leave)/.test(C) ? "drag".concat(C) : /^(activate|deactivate|move)/.test(C) ? "drop".concat(C) : C] = g[C], T;
              }, {});
              m2.off(m2.options.drop.listeners), m2.on(x), m2.options.drop.listeners = x;
            }
            return c2.default.func(h2.ondrop) && m2.on("drop", h2.ondrop), c2.default.func(h2.ondropactivate) && m2.on("dropactivate", h2.ondropactivate), c2.default.func(h2.ondropdeactivate) && m2.on("dropdeactivate", h2.ondropdeactivate), c2.default.func(h2.ondragenter) && m2.on("dragenter", h2.ondragenter), c2.default.func(h2.ondragleave) && m2.on("dragleave", h2.ondragleave), c2.default.func(h2.ondropmove) && m2.on("dropmove", h2.ondropmove), /^(pointer|center)$/.test(h2.overlap) ? m2.options.drop.overlap = h2.overlap : c2.default.number(h2.overlap) && (m2.options.drop.overlap = Math.max(Math.min(1, h2.overlap), 0)), "accept" in h2 && (m2.options.drop.accept = h2.accept), "checker" in h2 && (m2.options.drop.checker = h2.checker), m2;
          }
          return c2.default.bool(h2) ? (m2.options.drop.enabled = h2, m2) : m2.options.drop;
        }(this, f2);
      }, s.prototype.dropCheck = function(f2, m2, h2, g, x, T) {
        return function(C, N2, G2, D2, H, Z, F2) {
          var ee = false;
          if (!(F2 = F2 || C.getRect(Z)))
            return !!C.options.drop.checker && C.options.drop.checker(N2, G2, ee, C, Z, D2, H);
          var se = C.options.drop.overlap;
          if (se === "pointer") {
            var pe = (0, Ge.default)(D2, H, "drag"), we = K.getPageXY(N2);
            we.x += pe.x, we.y += pe.y;
            var qe = we.x > F2.left && we.x < F2.right, be = we.y > F2.top && we.y < F2.bottom;
            ee = qe && be;
          }
          var De = D2.getRect(H);
          if (De && se === "center") {
            var Ut = De.left + De.width / 2, Rr = De.top + De.height / 2;
            ee = Ut >= F2.left && Ut <= F2.right && Rr >= F2.top && Rr <= F2.bottom;
          }
          return De && c2.default.number(se) && (ee = Math.max(0, Math.min(F2.right, De.right) - Math.max(F2.left, De.left)) * Math.max(0, Math.min(F2.bottom, De.bottom) - Math.max(F2.top, De.top)) / (De.width * De.height) >= se), C.options.drop.checker && (ee = C.options.drop.checker(N2, G2, ee, C, Z, D2, H)), ee;
        }(this, f2, m2, h2, g, x, T);
      }, a.dynamicDrop = function(f2) {
        return c2.default.bool(f2) ? (n.dynamicDrop = f2, a) : n.dynamicDrop;
      }, (0, W.default)(o2.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), o2.methodDict.drop = "dropzone", n.dynamicDrop = false, p2.actions.drop = q2.defaults;
    }, listeners: { "interactions:before-action-start": function(n) {
      var o2 = n.interaction;
      o2.prepared.name === "drag" && (o2.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(n, o2) {
      var a = n.interaction, s = (n.event, n.iEvent);
      if (a.prepared.name === "drag") {
        var p2 = a.dropState;
        p2.activeDrops = null, p2.events = null, p2.activeDrops = bi(o2, a.element), p2.events = yi(a, 0, s), p2.events.activate && (pn(p2.activeDrops, p2.events.activate), o2.fire("actions/drop:start", { interaction: a, dragEvent: s }));
      }
    }, "interactions:action-move": wo, "interactions:after-action-move": function(n, o2) {
      var a = n.interaction, s = n.iEvent;
      a.prepared.name === "drag" && (xi(a, a.dropState.events), o2.fire("actions/drop:move", { interaction: a, dragEvent: s }), a.dropState.events = {});
    }, "interactions:action-end": function(n, o2) {
      if (n.interaction.prepared.name === "drag") {
        var a = n.interaction, s = n.iEvent;
        wo(n, o2), xi(a, a.dropState.events), o2.fire("actions/drop:end", { interaction: a, dragEvent: s });
      }
    }, "interactions:stop": function(n) {
      var o2 = n.interaction;
      if (o2.prepared.name === "drag") {
        var a = o2.dropState;
        a && (a.activeDrops = null, a.events = null, a.cur.dropzone = null, a.cur.element = null, a.prev.dropzone = null, a.prev.element = null, a.rejected = false);
      }
    } }, getActiveDrops: bi, getDrop: xo, getDropEvents: yi, fireDropEvents: xi, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Q = q2;
    Ar.default = Q;
    var oe = {};
    function ye(n) {
      var o2 = n.interaction, a = n.iEvent, s = n.phase;
      if (o2.prepared.name === "gesture") {
        var p2 = o2.pointers.map(function(x) {
          return x.pointer;
        }), f2 = s === "start", m2 = s === "end", h2 = o2.interactable.options.deltaSource;
        if (a.touches = [p2[0], p2[1]], f2)
          a.distance = K.touchDistance(p2, h2), a.box = K.touchBBox(p2), a.scale = 1, a.ds = 0, a.angle = K.touchAngle(p2, h2), a.da = 0, o2.gesture.startDistance = a.distance, o2.gesture.startAngle = a.angle;
        else if (m2) {
          var g = o2.prevEvent;
          a.distance = g.distance, a.box = g.box, a.scale = g.scale, a.ds = 0, a.angle = g.angle, a.da = 0;
        } else
          a.distance = K.touchDistance(p2, h2), a.box = K.touchBBox(p2), a.scale = a.distance / o2.gesture.startDistance, a.angle = K.touchAngle(p2, h2), a.ds = a.scale - o2.gesture.scale, a.da = a.angle - o2.gesture.angle;
        o2.gesture.distance = a.distance, o2.gesture.angle = a.angle, c2.default.number(a.scale) && a.scale !== 1 / 0 && !isNaN(a.scale) && (o2.gesture.scale = a.scale);
      }
    }
    __name(ye, "ye");
    u2(ye, "bt"), Object.defineProperty(oe, "__esModule", { value: true }), oe.default = void 0;
    var he = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(n) {
      var o2 = n.actions, a = n.Interactable, s = n.defaults;
      a.prototype.gesturable = function(p2) {
        return c2.default.object(p2) ? (this.options.gesture.enabled = p2.enabled !== false, this.setPerAction("gesture", p2), this.setOnEvents("gesture", p2), this) : c2.default.bool(p2) ? (this.options.gesture.enabled = p2, this) : this.options.gesture;
      }, o2.map.gesture = he, o2.methodDict.gesture = "gesturable", s.actions.gesture = he.defaults;
    }, listeners: { "interactions:action-start": ye, "interactions:action-move": ye, "interactions:action-end": ye, "interactions:new": function(n) {
      n.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(n) {
      if (!(n.interaction.pointers.length < 2)) {
        var o2 = n.interactable.options.gesture;
        if (o2 && o2.enabled)
          return n.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    } }, pt = he;
    oe.default = pt;
    var dt = {};
    function Wr(n, o2, a, s, p2, f2, m2) {
      if (!o2)
        return false;
      if (o2 === true) {
        var h2 = c2.default.number(f2.width) ? f2.width : f2.right - f2.left, g = c2.default.number(f2.height) ? f2.height : f2.bottom - f2.top;
        if (m2 = Math.min(m2, Math.abs((n === "left" || n === "right" ? h2 : g) / 2)), h2 < 0 && (n === "left" ? n = "right" : n === "right" && (n = "left")), g < 0 && (n === "top" ? n = "bottom" : n === "bottom" && (n = "top")), n === "left")
          return a.x < (h2 >= 0 ? f2.left : f2.right) + m2;
        if (n === "top")
          return a.y < (g >= 0 ? f2.top : f2.bottom) + m2;
        if (n === "right")
          return a.x > (h2 >= 0 ? f2.right : f2.left) - m2;
        if (n === "bottom")
          return a.y > (g >= 0 ? f2.bottom : f2.top) - m2;
      }
      return !!c2.default.element(s) && (c2.default.element(o2) ? o2 === s : z2.matchesUpTo(s, o2, p2));
    }
    __name(Wr, "Wr");
    u2(Wr, "Pt");
    function wi(n) {
      var o2 = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.resizeAxes) {
        var s = o2;
        a.interactable.options.resize.square ? (a.resizeAxes === "y" ? s.delta.x = s.delta.y : s.delta.y = s.delta.x, s.axes = "xy") : (s.axes = a.resizeAxes, a.resizeAxes === "x" ? s.delta.y = 0 : a.resizeAxes === "y" && (s.delta.x = 0));
      }
    }
    __name(wi, "wi");
    u2(wi, "Ot"), Object.defineProperty(dt, "__esModule", { value: true }), dt.default = void 0;
    var ft = { id: "actions/resize", before: ["actions/drag"], install: function(n) {
      var o2 = n.actions, a = n.browser, s = n.Interactable, p2 = n.defaults;
      ft.cursors = function(f2) {
        return f2.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(a), ft.defaultMargin = a.supportsTouch || a.supportsPointerEvent ? 20 : 10, s.prototype.resizable = function(f2) {
        return function(m2, h2, g) {
          return c2.default.object(h2) ? (m2.options.resize.enabled = h2.enabled !== false, m2.setPerAction("resize", h2), m2.setOnEvents("resize", h2), c2.default.string(h2.axis) && /^x$|^y$|^xy$/.test(h2.axis) ? m2.options.resize.axis = h2.axis : h2.axis === null && (m2.options.resize.axis = g.defaults.actions.resize.axis), c2.default.bool(h2.preserveAspectRatio) ? m2.options.resize.preserveAspectRatio = h2.preserveAspectRatio : c2.default.bool(h2.square) && (m2.options.resize.square = h2.square), m2) : c2.default.bool(h2) ? (m2.options.resize.enabled = h2, m2) : m2.options.resize;
        }(this, f2, n);
      }, o2.map.resize = ft, o2.methodDict.resize = "resizable", p2.actions.resize = ft.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(n) {
      (function(o2) {
        var a = o2.iEvent, s = o2.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p2 = a, f2 = s.rect;
          s._rects = { start: (0, W.default)({}, f2), corrected: (0, W.default)({}, f2), previous: (0, W.default)({}, f2), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, p2.edges = s.prepared.edges, p2.rect = s._rects.corrected, p2.deltaRect = s._rects.delta;
        }
      })(n), wi(n);
    }, "interactions:action-move": function(n) {
      (function(o2) {
        var a = o2.iEvent, s = o2.interaction;
        if (s.prepared.name === "resize" && s.prepared.edges) {
          var p2 = a, f2 = s.interactable.options.resize.invert, m2 = f2 === "reposition" || f2 === "negate", h2 = s.rect, g = s._rects, x = g.start, T = g.corrected, C = g.delta, N2 = g.previous;
          if ((0, W.default)(N2, T), m2) {
            if ((0, W.default)(T, h2), f2 === "reposition") {
              if (T.top > T.bottom) {
                var G2 = T.top;
                T.top = T.bottom, T.bottom = G2;
              }
              if (T.left > T.right) {
                var D2 = T.left;
                T.left = T.right, T.right = D2;
              }
            }
          } else
            T.top = Math.min(h2.top, x.bottom), T.bottom = Math.max(h2.bottom, x.top), T.left = Math.min(h2.left, x.right), T.right = Math.max(h2.right, x.left);
          for (var H in T.width = T.right - T.left, T.height = T.bottom - T.top, T)
            C[H] = T[H] - N2[H];
          p2.edges = s.prepared.edges, p2.rect = T, p2.deltaRect = C;
        }
      })(n), wi(n);
    }, "interactions:action-end": function(n) {
      var o2 = n.iEvent, a = n.interaction;
      if (a.prepared.name === "resize" && a.prepared.edges) {
        var s = o2;
        s.edges = a.prepared.edges, s.rect = a._rects.corrected, s.deltaRect = a._rects.delta;
      }
    }, "auto-start:check": function(n) {
      var o2 = n.interaction, a = n.interactable, s = n.element, p2 = n.rect, f2 = n.buttons;
      if (p2) {
        var m2 = (0, W.default)({}, o2.coords.cur.page), h2 = a.options.resize;
        if (h2 && h2.enabled && (!o2.pointerIsDown || !/mouse|pointer/.test(o2.pointerType) || (f2 & h2.mouseButtons) != 0)) {
          if (c2.default.object(h2.edges)) {
            var g = { left: false, right: false, top: false, bottom: false };
            for (var x in g)
              g[x] = Wr(x, h2.edges[x], m2, o2._latestPointer.eventTarget, s, p2, h2.margin || ft.defaultMargin);
            g.left = g.left && !g.right, g.top = g.top && !g.bottom, (g.left || g.right || g.top || g.bottom) && (n.action = { name: "resize", edges: g });
          } else {
            var T = h2.axis !== "y" && m2.x > p2.right - ft.defaultMargin, C = h2.axis !== "x" && m2.y > p2.bottom - ft.defaultMargin;
            (T || C) && (n.action = { name: "resize", axes: (T ? "x" : "") + (C ? "y" : "") });
          }
          return !n.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(n) {
      var o2 = n.edges, a = n.axis, s = n.name, p2 = ft.cursors, f2 = null;
      if (a)
        f2 = p2[s + a];
      else if (o2) {
        for (var m2 = "", h2 = ["top", "bottom", "left", "right"], g = 0; g < h2.length; g++) {
          var x = h2[g];
          o2[x] && (m2 += x);
        }
        f2 = p2[m2];
      }
      return f2;
    }, defaultMargin: null }, Ei = ft;
    dt.default = Ei;
    var Pr = {};
    Object.defineProperty(Pr, "__esModule", { value: true }), Pr.default = void 0;
    var Vr = { id: "actions", install: function(n) {
      n.usePlugin(oe.default), n.usePlugin(dt.default), n.usePlugin(w2.default), n.usePlugin(Ar.default);
    } };
    Pr.default = Vr;
    var kt = {};
    Object.defineProperty(kt, "__esModule", { value: true }), kt.default = void 0;
    var Nt, Ht, Sl = 0, Kp = { request: function(n) {
      return Nt(n);
    }, cancel: function(n) {
      return Ht(n);
    }, init: function(n) {
      if (Nt = n.requestAnimationFrame, Ht = n.cancelAnimationFrame, !Nt)
        for (var o2 = ["ms", "moz", "webkit", "o"], a = 0; a < o2.length; a++) {
          var s = o2[a];
          Nt = n["".concat(s, "RequestAnimationFrame")], Ht = n["".concat(s, "CancelAnimationFrame")] || n["".concat(s, "CancelRequestAnimationFrame")];
        }
      Nt = Nt && Nt.bind(n), Ht = Ht && Ht.bind(n), Nt || (Nt = u2(function(p2) {
        var f2 = Date.now(), m2 = Math.max(0, 16 - (f2 - Sl)), h2 = n.setTimeout(function() {
          p2(f2 + m2);
        }, m2);
        return Sl = f2 + m2, h2;
      }, "kt"), Ht = u2(function(p2) {
        return clearTimeout(p2);
      }, "It"));
    } };
    kt.default = Kp;
    var Xr = {};
    Object.defineProperty(Xr, "__esModule", { value: true }), Xr.getContainer = Eo, Xr.getScroll = Si, Xr.getScrollSize = function(n) {
      return c2.default.window(n) && (n = window.document.body), { x: n.scrollWidth, y: n.scrollHeight };
    }, Xr.getScrollSizeDelta = function(n, o2) {
      var a = n.interaction, s = n.element, p2 = a && a.interactable.options[a.prepared.name].autoScroll;
      if (!p2 || !p2.enabled)
        return o2(), { x: 0, y: 0 };
      var f2 = Eo(p2.container, a.interactable, s), m2 = Si(f2);
      o2();
      var h2 = Si(f2);
      return { x: h2.x - m2.x, y: h2.y - m2.y };
    }, Xr.default = void 0;
    var le = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(n) {
      le.isScrolling = true, kt.default.cancel(le.i), n.autoScroll = le, le.interaction = n, le.prevTime = le.now(), le.i = kt.default.request(le.scroll);
    }, stop: function() {
      le.isScrolling = false, le.interaction && (le.interaction.autoScroll = null), kt.default.cancel(le.i);
    }, scroll: function() {
      var n = le.interaction, o2 = n.interactable, a = n.element, s = n.prepared.name, p2 = o2.options[s].autoScroll, f2 = Eo(p2.container, o2, a), m2 = le.now(), h2 = (m2 - le.prevTime) / 1e3, g = p2.speed * h2;
      if (g >= 1) {
        var x = { x: le.x * g, y: le.y * g };
        if (x.x || x.y) {
          var T = Si(f2);
          c2.default.window(f2) ? f2.scrollBy(x.x, x.y) : f2 && (f2.scrollLeft += x.x, f2.scrollTop += x.y);
          var C = Si(f2), N2 = { x: C.x - T.x, y: C.y - T.y };
          (N2.x || N2.y) && o2.fire({ type: "autoscroll", target: a, interactable: o2, delta: N2, interaction: n, container: f2 });
        }
        le.prevTime = m2;
      }
      le.isScrolling && (kt.default.cancel(le.i), le.i = kt.default.request(le.scroll));
    }, check: function(n, o2) {
      var a;
      return (a = n.options[o2].autoScroll) == null ? void 0 : a.enabled;
    }, onInteractionMove: function(n) {
      var o2 = n.interaction, a = n.pointer;
      if (o2.interacting() && le.check(o2.interactable, o2.prepared.name))
        if (o2.simulation)
          le.x = le.y = 0;
        else {
          var s, p2, f2, m2, h2 = o2.interactable, g = o2.element, x = o2.prepared.name, T = h2.options[x].autoScroll, C = Eo(T.container, h2, g);
          if (c2.default.window(C))
            m2 = a.clientX < le.margin, s = a.clientY < le.margin, p2 = a.clientX > C.innerWidth - le.margin, f2 = a.clientY > C.innerHeight - le.margin;
          else {
            var N2 = z2.getElementClientRect(C);
            m2 = a.clientX < N2.left + le.margin, s = a.clientY < N2.top + le.margin, p2 = a.clientX > N2.right - le.margin, f2 = a.clientY > N2.bottom - le.margin;
          }
          le.x = p2 ? 1 : m2 ? -1 : 0, le.y = f2 ? 1 : s ? -1 : 0, le.isScrolling || (le.margin = T.margin, le.speed = T.speed, le.start(o2));
        }
    } };
    function Eo(n, o2, a) {
      return (c2.default.string(n) ? (0, ce.getStringOptionResult)(n, o2, a) : n) || (0, e.getWindow)(a);
    }
    __name(Eo, "Eo");
    u2(Eo, "Ct");
    function Si(n) {
      return c2.default.window(n) && (n = window.document.body), { x: n.scrollLeft, y: n.scrollTop };
    }
    __name(Si, "Si");
    u2(Si, "Ft");
    var Qp = { id: "auto-scroll", install: function(n) {
      var o2 = n.defaults, a = n.actions;
      n.autoScroll = le, le.now = function() {
        return n.now();
      }, a.phaselessTypes.autoscroll = true, o2.perAction.autoScroll = le.defaults;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoScroll = null;
    }, "interactions:destroy": function(n) {
      n.interaction.autoScroll = null, le.stop(), le.interaction && (le.interaction = null);
    }, "interactions:stop": le.stop, "interactions:action-move": function(n) {
      return le.onInteractionMove(n);
    } } };
    Xr.default = Qp;
    var Gt = {};
    Object.defineProperty(Gt, "__esModule", { value: true }), Gt.warnOnce = function(n, o2) {
      var a = false;
      return function() {
        return a || (e.window.console.warn(o2), a = true), n.apply(this, arguments);
      };
    }, Gt.copyAction = function(n, o2) {
      return n.name = o2.name, n.axis = o2.axis, n.edges = o2.edges, n;
    }, Gt.sign = void 0, Gt.sign = function(n) {
      return n >= 0 ? 1 : -1;
    };
    var So = {};
    function ed(n) {
      return c2.default.bool(n) ? (this.options.styleCursor = n, this) : n === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    __name(ed, "ed");
    u2(ed, "Wt");
    function td(n) {
      return c2.default.func(n) ? (this.options.actionChecker = n, this) : n === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    __name(td, "td");
    u2(td, "Lt"), Object.defineProperty(So, "__esModule", { value: true }), So.default = void 0;
    var rd = { id: "auto-start/interactableMethods", install: function(n) {
      var o2 = n.Interactable;
      o2.prototype.getAction = function(a, s, p2, f2) {
        var m2 = function(h2, g, x, T, C) {
          var N2 = h2.getRect(T), G2 = { action: null, interactable: h2, interaction: x, element: T, rect: N2, buttons: g.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[g.button] };
          return C.fire("auto-start:check", G2), G2.action;
        }(this, s, p2, f2, n);
        return this.options.actionChecker ? this.options.actionChecker(a, s, m2, this, f2, p2) : m2;
      }, o2.prototype.ignoreFrom = (0, Gt.warnOnce)(function(a) {
        return this._backCompatOption("ignoreFrom", a);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), o2.prototype.allowFrom = (0, Gt.warnOnce)(function(a) {
        return this._backCompatOption("allowFrom", a);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), o2.prototype.actionChecker = td, o2.prototype.styleCursor = ed;
    } };
    So.default = rd;
    var Un = {};
    function Tl(n, o2, a, s, p2) {
      return o2.testIgnoreAllow(o2.options[n.name], a, s) && o2.options[n.name].enabled && To(o2, a, n, p2) ? n : null;
    }
    __name(Tl, "Tl");
    u2(Tl, "Nt");
    function nd(n, o2, a, s, p2, f2, m2) {
      for (var h2 = 0, g = s.length; h2 < g; h2++) {
        var x = s[h2], T = p2[h2], C = x.getAction(o2, a, n, T);
        if (C) {
          var N2 = Tl(C, x, T, f2, m2);
          if (N2)
            return { action: N2, interactable: x, element: T };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    __name(nd, "nd");
    u2(nd, "qt");
    function Ol(n, o2, a, s, p2) {
      var f2 = [], m2 = [], h2 = s;
      function g(T) {
        f2.push(T), m2.push(h2);
      }
      __name(g, "g");
      for (u2(g, "u"); c2.default.element(h2); ) {
        f2 = [], m2 = [], p2.interactables.forEachMatch(h2, g);
        var x = nd(n, o2, a, f2, m2, s, p2);
        if (x.action && !x.interactable.options[x.action.name].manualStart)
          return x;
        h2 = z2.parentNode(h2);
      }
      return { action: null, interactable: null, element: null };
    }
    __name(Ol, "Ol");
    u2(Ol, "$t");
    function Cl(n, o2, a) {
      var s = o2.action, p2 = o2.interactable, f2 = o2.element;
      s = s || { name: null }, n.interactable = p2, n.element = f2, (0, Gt.copyAction)(n.prepared, s), n.rect = p2 && s.name ? p2.getRect(f2) : null, Ml(n, a), a.fire("autoStart:prepared", { interaction: n });
    }
    __name(Cl, "Cl");
    u2(Cl, "Gt");
    function To(n, o2, a, s) {
      var p2 = n.options, f2 = p2[a.name].max, m2 = p2[a.name].maxPerElement, h2 = s.autoStart.maxInteractions, g = 0, x = 0, T = 0;
      if (!(f2 && m2 && h2))
        return false;
      for (var C = 0; C < s.interactions.list.length; C++) {
        var N2 = s.interactions.list[C], G2 = N2.prepared.name;
        if (N2.interacting() && (++g >= h2 || N2.interactable === n && ((x += G2 === a.name ? 1 : 0) >= f2 || N2.element === o2 && (T++, G2 === a.name && T >= m2))))
          return false;
      }
      return h2 > 0;
    }
    __name(To, "To");
    u2(To, "Ht");
    function _l(n, o2) {
      return c2.default.number(n) ? (o2.autoStart.maxInteractions = n, this) : o2.autoStart.maxInteractions;
    }
    __name(_l, "_l");
    u2(_l, "Kt");
    function Ua(n, o2, a) {
      var s = a.autoStart.cursorElement;
      s && s !== n && (s.style.cursor = ""), n.ownerDocument.documentElement.style.cursor = o2, n.style.cursor = o2, a.autoStart.cursorElement = o2 ? n : null;
    }
    __name(Ua, "Ua");
    u2(Ua, "Zt");
    function Ml(n, o2) {
      var a = n.interactable, s = n.element, p2 = n.prepared;
      if (n.pointerType === "mouse" && a && a.options.styleCursor) {
        var f2 = "";
        if (p2.name) {
          var m2 = a.options[p2.name].cursorChecker;
          f2 = c2.default.func(m2) ? m2(p2, a, s, n._interacting) : o2.actions.map[p2.name].getCursor(p2);
        }
        Ua(n.element, f2 || "", o2);
      } else
        o2.autoStart.cursorElement && Ua(o2.autoStart.cursorElement, "", o2);
    }
    __name(Ml, "Ml");
    u2(Ml, "Jt"), Object.defineProperty(Un, "__esModule", { value: true }), Un.default = void 0;
    var id = { id: "auto-start/base", before: ["actions"], install: function(n) {
      var o2 = n.interactStatic, a = n.defaults;
      n.usePlugin(So.default), a.base.actionChecker = null, a.base.styleCursor = true, (0, W.default)(a.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), o2.maxInteractions = function(s) {
        return _l(s, n);
      }, n.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: To, cursorElement: null };
    }, listeners: { "interactions:down": function(n, o2) {
      var a = n.interaction, s = n.pointer, p2 = n.event, f2 = n.eventTarget;
      a.interacting() || Cl(a, Ol(a, s, p2, f2, o2), o2);
    }, "interactions:move": function(n, o2) {
      (function(a, s) {
        var p2 = a.interaction, f2 = a.pointer, m2 = a.event, h2 = a.eventTarget;
        p2.pointerType !== "mouse" || p2.pointerIsDown || p2.interacting() || Cl(p2, Ol(p2, f2, m2, h2, s), s);
      })(n, o2), function(a, s) {
        var p2 = a.interaction;
        if (p2.pointerIsDown && !p2.interacting() && p2.pointerWasMoved && p2.prepared.name) {
          s.fire("autoStart:before-start", a);
          var f2 = p2.interactable, m2 = p2.prepared.name;
          m2 && f2 && (f2.options[m2].manualStart || !To(f2, p2.element, p2.prepared, s) ? p2.stop() : (p2.start(p2.prepared, f2, p2.element), Ml(p2, s)));
        }
      }(n, o2);
    }, "interactions:stop": function(n, o2) {
      var a = n.interaction, s = a.interactable;
      s && s.options.styleCursor && Ua(a.element, "", o2);
    } }, maxInteractions: _l, withinInteractionLimit: To, validateAction: Tl };
    Un.default = id;
    var Oo = {};
    Object.defineProperty(Oo, "__esModule", { value: true }), Oo.default = void 0;
    var od = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(n, o2) {
      var a = n.interaction, s = n.eventTarget, p2 = n.dx, f2 = n.dy;
      if (a.prepared.name === "drag") {
        var m2 = Math.abs(p2), h2 = Math.abs(f2), g = a.interactable.options.drag, x = g.startAxis, T = m2 > h2 ? "x" : m2 < h2 ? "y" : "xy";
        if (a.prepared.axis = g.lockAxis === "start" ? T[0] : g.lockAxis, T !== "xy" && x !== "xy" && x !== T) {
          a.prepared.name = null;
          for (var C = s, N2 = function(D2) {
            if (D2 !== a.interactable) {
              var H = a.interactable.options.drag;
              if (!H.manualStart && D2.testIgnoreAllow(H, C, s)) {
                var Z = D2.getAction(a.downPointer, a.downEvent, a, C);
                if (Z && Z.name === "drag" && function(F2, ee) {
                  if (!ee)
                    return false;
                  var se = ee.options.drag.startAxis;
                  return F2 === "xy" || se === "xy" || se === F2;
                }(T, D2) && Un.default.validateAction(Z, D2, C, s, o2))
                  return D2;
              }
            }
          }; c2.default.element(C); ) {
            var G2 = o2.interactables.forEachMatch(C, N2);
            if (G2) {
              a.prepared.name = "drag", a.interactable = G2, a.element = C;
              break;
            }
            C = (0, z2.parentNode)(C);
          }
        }
      }
    } } };
    Oo.default = od;
    var Co = {};
    function Wa(n) {
      var o2 = n.prepared && n.prepared.name;
      if (!o2)
        return null;
      var a = n.interactable.options;
      return a[o2].hold || a[o2].delay;
    }
    __name(Wa, "Wa");
    u2(Wa, "re"), Object.defineProperty(Co, "__esModule", { value: true }), Co.default = void 0;
    var ad = { id: "auto-start/hold", install: function(n) {
      var o2 = n.defaults;
      n.usePlugin(Un.default), o2.perAction.hold = 0, o2.perAction.delay = 0;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(n) {
      var o2 = n.interaction, a = Wa(o2);
      a > 0 && (o2.autoStartHoldTimer = setTimeout(function() {
        o2.start(o2.prepared, o2.interactable, o2.element);
      }, a));
    }, "interactions:move": function(n) {
      var o2 = n.interaction, a = n.duplicate;
      o2.autoStartHoldTimer && o2.pointerWasMoved && !a && (clearTimeout(o2.autoStartHoldTimer), o2.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(n) {
      var o2 = n.interaction;
      Wa(o2) > 0 && (o2.prepared.name = null);
    } }, getHoldDuration: Wa };
    Co.default = ad;
    var _o = {};
    Object.defineProperty(_o, "__esModule", { value: true }), _o.default = void 0;
    var sd = { id: "auto-start", install: function(n) {
      n.usePlugin(Un.default), n.usePlugin(Co.default), n.usePlugin(Oo.default);
    } };
    _o.default = sd;
    var Wn = {};
    function ld(n) {
      return /^(always|never|auto)$/.test(n) ? (this.options.preventDefault = n, this) : c2.default.bool(n) ? (this.options.preventDefault = n ? "always" : "never", this) : this.options.preventDefault;
    }
    __name(ld, "ld");
    u2(ld, "le");
    function ud(n) {
      var o2 = n.interaction, a = n.event;
      o2.interactable && o2.interactable.checkAndPreventDefault(a);
    }
    __name(ud, "ud");
    u2(ud, "ue");
    function Al(n) {
      var o2 = n.Interactable;
      o2.prototype.preventDefault = ld, o2.prototype.checkAndPreventDefault = function(a) {
        return function(s, p2, f2) {
          var m2 = s.options.preventDefault;
          if (m2 !== "never")
            if (m2 !== "always") {
              if (p2.events.supportsPassive && /^touch(start|move)$/.test(f2.type)) {
                var h2 = (0, e.getWindow)(f2.target).document, g = p2.getDocOptions(h2);
                if (!g || !g.events || g.events.passive !== false)
                  return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(f2.type) || c2.default.element(f2.target) && (0, z2.matchesSelector)(f2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || f2.preventDefault();
            } else
              f2.preventDefault();
        }(this, n, a);
      }, n.interactions.docEvents.push({ type: "dragstart", listener: function(a) {
        for (var s = 0; s < n.interactions.list.length; s++) {
          var p2 = n.interactions.list[s];
          if (p2.element && (p2.element === a.target || (0, z2.nodeContains)(p2.element, a.target)))
            return void p2.interactable.checkAndPreventDefault(a);
        }
      } });
    }
    __name(Al, "Al");
    u2(Al, "ce"), Object.defineProperty(Wn, "__esModule", { value: true }), Wn.install = Al, Wn.default = void 0;
    var cd = { id: "core/interactablePreventDefault", install: Al, listeners: ["down", "move", "up", "cancel"].reduce(function(n, o2) {
      return n["interactions:".concat(o2)] = ud, n;
    }, {}) };
    Wn.default = cd;
    var Va = {};
    Object.defineProperty(Va, "__esModule", { value: true }), Va.default = void 0, Va.default = {};
    var Ti, Xa = {};
    Object.defineProperty(Xa, "__esModule", { value: true }), Xa.default = void 0, function(n) {
      n.touchAction = "touchAction", n.boxSizing = "boxSizing", n.noListeners = "noListeners";
    }(Ti || (Ti = {})), Ti.touchAction, Ti.boxSizing, Ti.noListeners;
    var pd = { id: "dev-tools", install: function() {
    } };
    Xa.default = pd;
    var dn = {};
    Object.defineProperty(dn, "__esModule", { value: true }), dn.default = u2(/* @__PURE__ */ __name(function n(o2) {
      var a = {};
      for (var s in o2) {
        var p2 = o2[s];
        c2.default.plainObject(p2) ? a[s] = n(p2) : c2.default.array(p2) ? a[s] = xe.from(p2) : a[s] = p2;
      }
      return a;
    }, "n"), "t");
    var fn = {};
    function Pl(n, o2) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p2 = [], f2 = true, m2 = false, h2 = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f2 = (g = x.next()).done) && (p2.push(g.value), !s || p2.length !== s); f2 = true)
              ;
          } catch (T) {
            m2 = true, h2 = T;
          } finally {
            try {
              f2 || x.return == null || x.return();
            } finally {
              if (m2)
                throw h2;
            }
          }
          return p2;
        }
      }(n, o2) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Il(a, s);
          var p2 = Object.prototype.toString.call(a).slice(8, -1);
          return p2 === "Object" && a.constructor && (p2 = a.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(a) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? Il(a, s) : void 0;
        }
      }(n, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Pl, "Pl");
    u2(Pl, "me");
    function Il(n, o2) {
      (o2 == null || o2 > n.length) && (o2 = n.length);
      for (var a = 0, s = Array(o2); a < o2; a++)
        s[a] = n[a];
      return s;
    }
    __name(Il, "Il");
    u2(Il, "be");
    function dd(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(dd, "dd");
    u2(dd, "xe");
    function hn(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(hn, "hn");
    u2(hn, "we"), Object.defineProperty(fn, "__esModule", { value: true }), fn.getRectOffset = Dl, fn.default = void 0;
    var fd = function() {
      function n(s) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), hn(this, "states", []), hn(this, "startOffset", { left: 0, right: 0, top: 0, bottom: 0 }), hn(this, "startDelta", void 0), hn(this, "result", void 0), hn(this, "endResult", void 0), hn(this, "edges", void 0), hn(this, "interaction", void 0), this.interaction = s, this.result = Mo();
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "start", value: function(s, p2) {
        var f2 = s.phase, m2 = this.interaction, h2 = function(x) {
          var T = x.interactable.options[x.prepared.name], C = T.modifiers;
          return C && C.length ? C : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(N2) {
            var G2 = T[N2];
            return G2 && G2.enabled && { options: G2, methods: G2._methods };
          }).filter(function(N2) {
            return !!N2;
          });
        }(m2);
        this.prepareStates(h2), this.edges = (0, W.default)({}, m2.edges), this.startOffset = Dl(m2.rect, p2), this.startDelta = { x: 0, y: 0 };
        var g = this.fillArg({ phase: f2, pageCoords: p2, preEnd: false });
        return this.result = Mo(), this.startAll(g), this.result = this.setAll(g);
      } }, { key: "fillArg", value: function(s) {
        var p2 = this.interaction;
        return s.interaction = p2, s.interactable = p2.interactable, s.element = p2.element, s.rect = s.rect || p2.rect, s.edges = this.edges, s.startOffset = this.startOffset, s;
      } }, { key: "startAll", value: function(s) {
        for (var p2 = 0; p2 < this.states.length; p2++) {
          var f2 = this.states[p2];
          f2.methods.start && (s.state = f2, f2.methods.start(s));
        }
      } }, { key: "setAll", value: function(s) {
        var p2 = s.phase, f2 = s.preEnd, m2 = s.skipModifiers, h2 = s.rect;
        s.coords = (0, W.default)({}, s.pageCoords), s.rect = (0, W.default)({}, h2);
        for (var g = m2 ? this.states.slice(m2) : this.states, x = Mo(s.coords, s.rect), T = 0; T < g.length; T++) {
          var C, N2 = g[T], G2 = N2.options, D2 = (0, W.default)({}, s.coords), H = null;
          (C = N2.methods) != null && C.set && this.shouldDo(G2, f2, p2) && (s.state = N2, H = N2.methods.set(s), ce.addEdges(this.interaction.edges, s.rect, { x: s.coords.x - D2.x, y: s.coords.y - D2.y })), x.eventProps.push(H);
        }
        x.delta.x = s.coords.x - s.pageCoords.x, x.delta.y = s.coords.y - s.pageCoords.y, x.rectDelta.left = s.rect.left - h2.left, x.rectDelta.right = s.rect.right - h2.right, x.rectDelta.top = s.rect.top - h2.top, x.rectDelta.bottom = s.rect.bottom - h2.bottom;
        var Z = this.result.coords, F2 = this.result.rect;
        if (Z && F2) {
          var ee = x.rect.left !== F2.left || x.rect.right !== F2.right || x.rect.top !== F2.top || x.rect.bottom !== F2.bottom;
          x.changed = ee || Z.x !== x.coords.x || Z.y !== x.coords.y;
        }
        return x;
      } }, { key: "applyToInteraction", value: function(s) {
        var p2 = this.interaction, f2 = s.phase, m2 = p2.coords.cur, h2 = p2.coords.start, g = this.result, x = this.startDelta, T = g.delta;
        f2 === "start" && (0, W.default)(this.startDelta, g.delta);
        for (var C = 0; C < [[h2, x], [m2, T]].length; C++) {
          var N2 = Pl([[h2, x], [m2, T]][C], 2), G2 = N2[0], D2 = N2[1];
          G2.page.x += D2.x, G2.page.y += D2.y, G2.client.x += D2.x, G2.client.y += D2.y;
        }
        var H = this.result.rectDelta, Z = s.rect || p2.rect;
        Z.left += H.left, Z.right += H.right, Z.top += H.top, Z.bottom += H.bottom, Z.width = Z.right - Z.left, Z.height = Z.bottom - Z.top;
      } }, { key: "setAndApply", value: function(s) {
        var p2 = this.interaction, f2 = s.phase, m2 = s.preEnd, h2 = s.skipModifiers, g = this.setAll(this.fillArg({ preEnd: m2, phase: f2, pageCoords: s.modifiedCoords || p2.coords.cur.page }));
        if (this.result = g, !g.changed && (!h2 || h2 < this.states.length) && p2.interacting())
          return false;
        if (s.modifiedCoords) {
          var x = p2.coords.cur.page, T = { x: s.modifiedCoords.x - x.x, y: s.modifiedCoords.y - x.y };
          g.coords.x += T.x, g.coords.y += T.y, g.delta.x += T.x, g.delta.y += T.y;
        }
        this.applyToInteraction(s);
      } }, { key: "beforeEnd", value: function(s) {
        var p2 = s.interaction, f2 = s.event, m2 = this.states;
        if (m2 && m2.length) {
          for (var h2 = false, g = 0; g < m2.length; g++) {
            var x = m2[g];
            s.state = x;
            var T = x.options, C = x.methods, N2 = C.beforeEnd && C.beforeEnd(s);
            if (N2)
              return this.endResult = N2, false;
            h2 = h2 || !h2 && this.shouldDo(T, true, s.phase, true);
          }
          h2 && p2.move({ event: f2, preEnd: true });
        }
      } }, { key: "stop", value: function(s) {
        var p2 = s.interaction;
        if (this.states && this.states.length) {
          var f2 = (0, W.default)({ states: this.states, interactable: p2.interactable, element: p2.element, rect: null }, s);
          this.fillArg(f2);
          for (var m2 = 0; m2 < this.states.length; m2++) {
            var h2 = this.states[m2];
            f2.state = h2, h2.methods.stop && h2.methods.stop(f2);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(s) {
        this.states = [];
        for (var p2 = 0; p2 < s.length; p2++) {
          var f2 = s[p2], m2 = f2.options, h2 = f2.methods, g = f2.name;
          this.states.push({ options: m2, methods: h2, index: p2, name: g });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(s) {
        var p2 = s.interaction, f2 = p2.coords, m2 = p2.rect, h2 = p2.modification;
        if (h2.result) {
          for (var g = h2.startDelta, x = h2.result, T = x.delta, C = x.rectDelta, N2 = [[f2.start, g], [f2.cur, T]], G2 = 0; G2 < N2.length; G2++) {
            var D2 = Pl(N2[G2], 2), H = D2[0], Z = D2[1];
            H.page.x -= Z.x, H.page.y -= Z.y, H.client.x -= Z.x, H.client.y -= Z.y;
          }
          m2.left -= C.left, m2.right -= C.right, m2.top -= C.top, m2.bottom -= C.bottom;
        }
      } }, { key: "shouldDo", value: function(s, p2, f2, m2) {
        return !(!s || s.enabled === false || m2 && !s.endOnly || s.endOnly && !p2 || f2 === "start" && !s.setStart);
      } }, { key: "copyFrom", value: function(s) {
        this.startOffset = s.startOffset, this.startDelta = s.startDelta, this.edges = s.edges, this.states = s.states.map(function(p2) {
          return (0, dn.default)(p2);
        }), this.result = Mo((0, W.default)({}, s.result.coords), (0, W.default)({}, s.result.rect));
      } }, { key: "destroy", value: function() {
        for (var s in this)
          this[s] = null;
      } }]) && dd(o2.prototype, a), n;
    }();
    function Mo(n, o2) {
      return { rect: o2, coords: n, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    __name(Mo, "Mo");
    u2(Mo, "Pe");
    function Dl(n, o2) {
      return n ? { left: o2.x - n.left, top: o2.y - n.top, right: n.right - o2.x, bottom: n.bottom - o2.y } : { left: 0, top: 0, right: 0, bottom: 0 };
    }
    __name(Dl, "Dl");
    u2(Dl, "Oe"), fn.default = fd;
    var ht = {};
    function Ao(n) {
      var o2 = n.iEvent, a = n.interaction.modification.result;
      a && (o2.modifiers = a.eventProps);
    }
    __name(Ao, "Ao");
    u2(Ao, "Ee"), Object.defineProperty(ht, "__esModule", { value: true }), ht.makeModifier = function(n, o2) {
      var a = n.defaults, s = { start: n.start, set: n.set, beforeEnd: n.beforeEnd, stop: n.stop }, p2 = u2(function(f2) {
        var m2 = f2 || {};
        for (var h2 in m2.enabled = m2.enabled !== false, a)
          h2 in m2 || (m2[h2] = a[h2]);
        var g = { options: m2, methods: s, name: o2, enable: function() {
          return m2.enabled = true, g;
        }, disable: function() {
          return m2.enabled = false, g;
        } };
        return g;
      }, "o");
      return o2 && typeof o2 == "string" && (p2._defaults = a, p2._methods = s), p2;
    }, ht.addEventModifiers = Ao, ht.default = void 0;
    var hd = { id: "modifiers/base", before: ["actions"], install: function(n) {
      n.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(n) {
      var o2 = n.interaction;
      o2.modification = new fn.default(o2);
    }, "interactions:before-action-start": function(n) {
      var o2 = n.interaction.modification;
      o2.start(n, n.interaction.coords.start.page), n.interaction.edges = o2.edges, o2.applyToInteraction(n);
    }, "interactions:before-action-move": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:before-action-end": function(n) {
      return n.interaction.modification.beforeEnd(n);
    }, "interactions:action-start": Ao, "interactions:action-move": Ao, "interactions:action-end": Ao, "interactions:after-action-start": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-move": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:stop": function(n) {
      return n.interaction.modification.stop(n);
    } } };
    ht.default = hd;
    var Oi = {};
    Object.defineProperty(Oi, "__esModule", { value: true }), Oi.defaults = void 0, Oi.defaults = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} };
    var Ci = {};
    function Rl(n) {
      return (Rl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(Rl, "Rl");
    u2(Rl, "ke");
    function vd(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(vd, "vd");
    u2(vd, "Ie");
    function zl(n, o2) {
      return (zl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o2);
    }
    __name(zl, "zl");
    u2(zl, "De");
    function md(n, o2) {
      return !o2 || Rl(o2) !== "object" && typeof o2 != "function" ? Te(n) : o2;
    }
    __name(md, "md");
    u2(md, "Ae");
    function Te(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(Te, "Te");
    u2(Te, "Re");
    function Ya(n) {
      return (Ya = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(n);
    }
    __name(Ya, "Ya");
    u2(Ya, "ze");
    function Ie(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(Ie, "Ie");
    u2(Ie, "Ce"), Object.defineProperty(Ci, "__esModule", { value: true }), Ci.InteractEvent = void 0;
    var kl = function(n) {
      (function(h2, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h2.prototype = Object.create(g && g.prototype, { constructor: { value: h2, writable: true, configurable: true } }), g && zl(h2, g);
      })(m2, n);
      var o2, a, s, p2, f2 = (s = m2, p2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h2) {
          return false;
        }
      }(), function() {
        var h2, g = Ya(s);
        if (p2) {
          var x = Ya(this).constructor;
          h2 = Reflect.construct(g, arguments, x);
        } else
          h2 = g.apply(this, arguments);
        return md(this, h2);
      });
      function m2(h2, g, x, T, C, N2, G2) {
        var D2;
        (function(qe, be) {
          if (!(qe instanceof be))
            throw new TypeError("Cannot call a class as a function");
        })(this, m2), Ie(Te(D2 = f2.call(this, h2)), "target", void 0), Ie(Te(D2), "currentTarget", void 0), Ie(Te(D2), "relatedTarget", null), Ie(Te(D2), "screenX", void 0), Ie(Te(D2), "screenY", void 0), Ie(Te(D2), "button", void 0), Ie(Te(D2), "buttons", void 0), Ie(Te(D2), "ctrlKey", void 0), Ie(Te(D2), "shiftKey", void 0), Ie(Te(D2), "altKey", void 0), Ie(Te(D2), "metaKey", void 0), Ie(Te(D2), "page", void 0), Ie(Te(D2), "client", void 0), Ie(Te(D2), "delta", void 0), Ie(Te(D2), "rect", void 0), Ie(Te(D2), "x0", void 0), Ie(Te(D2), "y0", void 0), Ie(Te(D2), "t0", void 0), Ie(Te(D2), "dt", void 0), Ie(Te(D2), "duration", void 0), Ie(Te(D2), "clientX0", void 0), Ie(Te(D2), "clientY0", void 0), Ie(Te(D2), "velocity", void 0), Ie(Te(D2), "speed", void 0), Ie(Te(D2), "swipe", void 0), Ie(Te(D2), "timeStamp", void 0), Ie(Te(D2), "axes", void 0), Ie(Te(D2), "preEnd", void 0), C = C || h2.element;
        var H = h2.interactable, Z = (H && H.options || Oi.defaults).deltaSource, F2 = (0, Ge.default)(H, C, x), ee = T === "start", se = T === "end", pe = ee ? Te(D2) : h2.prevEvent, we = ee ? h2.coords.start : se ? { page: pe.page, client: pe.client, timeStamp: h2.coords.cur.timeStamp } : h2.coords.cur;
        return D2.page = (0, W.default)({}, we.page), D2.client = (0, W.default)({}, we.client), D2.rect = (0, W.default)({}, h2.rect), D2.timeStamp = we.timeStamp, se || (D2.page.x -= F2.x, D2.page.y -= F2.y, D2.client.x -= F2.x, D2.client.y -= F2.y), D2.ctrlKey = g.ctrlKey, D2.altKey = g.altKey, D2.shiftKey = g.shiftKey, D2.metaKey = g.metaKey, D2.button = g.button, D2.buttons = g.buttons, D2.target = C, D2.currentTarget = C, D2.preEnd = N2, D2.type = G2 || x + (T || ""), D2.interactable = H, D2.t0 = ee ? h2.pointers[h2.pointers.length - 1].downTime : pe.t0, D2.x0 = h2.coords.start.page.x - F2.x, D2.y0 = h2.coords.start.page.y - F2.y, D2.clientX0 = h2.coords.start.client.x - F2.x, D2.clientY0 = h2.coords.start.client.y - F2.y, D2.delta = ee || se ? { x: 0, y: 0 } : { x: D2[Z].x - pe[Z].x, y: D2[Z].y - pe[Z].y }, D2.dt = h2.coords.delta.timeStamp, D2.duration = D2.timeStamp - D2.t0, D2.velocity = (0, W.default)({}, h2.coords.velocity[Z]), D2.speed = (0, et.default)(D2.velocity.x, D2.velocity.y), D2.swipe = se || T === "inertiastart" ? D2.getSwipe() : null, D2;
      }
      __name(m2, "m");
      return u2(m2, "a"), o2 = m2, (a = [{ key: "getSwipe", value: function() {
        var h2 = this._interaction;
        if (h2.prevEvent.speed < 600 || this.timeStamp - h2.prevEvent.timeStamp > 150)
          return null;
        var g = 180 * Math.atan2(h2.prevEvent.velocityY, h2.prevEvent.velocityX) / Math.PI;
        g < 0 && (g += 360);
        var x = 112.5 <= g && g < 247.5, T = 202.5 <= g && g < 337.5;
        return { up: T, down: !T && 22.5 <= g && g < 157.5, left: x, right: !x && (292.5 <= g || g < 67.5), angle: g, speed: h2.prevEvent.speed, velocity: { x: h2.prevEvent.velocityX, y: h2.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]) && vd(o2.prototype, a), m2;
    }(Rt.BaseEvent);
    Ci.InteractEvent = kl, Object.defineProperties(kl.prototype, { pageX: { get: function() {
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
    var _i = {};
    function Mi(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(Mi, "Mi");
    u2(Mi, "Ye"), Object.defineProperty(_i, "__esModule", { value: true }), _i.PointerInfo = void 0, _i.PointerInfo = u2(/* @__PURE__ */ __name(function n(o2, a, s, p2, f2) {
      (function(m2, h2) {
        if (!(m2 instanceof h2))
          throw new TypeError("Cannot call a class as a function");
      })(this, n), Mi(this, "id", void 0), Mi(this, "pointer", void 0), Mi(this, "event", void 0), Mi(this, "downTime", void 0), Mi(this, "downTarget", void 0), this.id = o2, this.pointer = a, this.event = s, this.downTime = p2, this.downTarget = f2;
    }, "n"), "t");
    var Po, Io, Mt = {};
    function gd(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(gd, "gd");
    u2(gd, "Ue");
    function $e(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name($e, "$e");
    u2($e, "Ve"), Object.defineProperty(Mt, "__esModule", { value: true }), Object.defineProperty(Mt, "PointerInfo", { enumerable: true, get: function() {
      return _i.PointerInfo;
    } }), Mt.default = Mt.Interaction = Mt._ProxyMethods = Mt._ProxyValues = void 0, Mt._ProxyValues = Po, function(n) {
      n.interactable = "", n.element = "", n.prepared = "", n.pointerIsDown = "", n.pointerWasMoved = "", n._proxy = "";
    }(Po || (Mt._ProxyValues = Po = {})), Mt._ProxyMethods = Io, function(n) {
      n.start = "", n.move = "", n.end = "", n.stop = "", n.interacting = "";
    }(Io || (Mt._ProxyMethods = Io = {}));
    var bd = 0, Nl = function() {
      function n(s) {
        var p2 = this, f2 = s.pointerType, m2 = s.scopeFire;
        (function(N2, G2) {
          if (!(N2 instanceof G2))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), $e(this, "interactable", null), $e(this, "element", null), $e(this, "rect", void 0), $e(this, "_rects", void 0), $e(this, "edges", void 0), $e(this, "_scopeFire", void 0), $e(this, "prepared", { name: null, axis: null, edges: null }), $e(this, "pointerType", void 0), $e(this, "pointers", []), $e(this, "downEvent", null), $e(this, "downPointer", {}), $e(this, "_latestPointer", { pointer: null, event: null, eventTarget: null }), $e(this, "prevEvent", null), $e(this, "pointerIsDown", false), $e(this, "pointerWasMoved", false), $e(this, "_interacting", false), $e(this, "_ending", false), $e(this, "_stopped", true), $e(this, "_proxy", null), $e(this, "simulation", null), $e(this, "doMove", (0, Gt.warnOnce)(function(N2) {
          this.move(N2);
        }, "The interaction.doMove() method has been renamed to interaction.move()")), $e(this, "coords", { start: K.newCoords(), prev: K.newCoords(), cur: K.newCoords(), delta: K.newCoords(), velocity: K.newCoords() }), $e(this, "_id", bd++), this._scopeFire = m2, this.pointerType = f2;
        var h2 = this;
        this._proxy = {};
        var g = u2(function(N2) {
          Object.defineProperty(p2._proxy, N2, { get: function() {
            return h2[N2];
          } });
        }, "a");
        for (var x in Po)
          g(x);
        var T = u2(function(N2) {
          Object.defineProperty(p2._proxy, N2, { value: function() {
            return h2[N2].apply(h2, arguments);
          } });
        }, "l");
        for (var C in Io)
          T(C);
        this._scopeFire("interactions:new", { interaction: this });
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(s, p2, f2) {
        var m2 = this.updatePointer(s, p2, f2, true), h2 = this.pointers[m2];
        this._scopeFire("interactions:down", { pointer: s, event: p2, eventTarget: f2, pointerIndex: m2, pointerInfo: h2, type: "down", interaction: this });
      } }, { key: "start", value: function(s, p2, f2) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (s.name === "gesture" ? 2 : 1) || !p2.options[s.name].enabled) && ((0, Gt.copyAction)(this.prepared, s), this.interactable = p2, this.element = f2, this.rect = p2.getRect(f2), this.edges = this.prepared.edges ? (0, W.default)({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(s, p2, f2) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(s, p2, f2, false);
        var m2, h2, g = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (m2 = this.coords.cur.client.x - this.coords.start.client.x, h2 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = (0, et.default)(m2, h2) > this.pointerMoveTolerance);
        var x = this.getPointerIndex(s), T = { pointer: s, pointerIndex: x, pointerInfo: this.pointers[x], event: p2, type: "move", eventTarget: f2, dx: m2, dy: h2, duplicate: g, interaction: this };
        g || K.setCoordVelocity(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", T), g || this.simulation || (this.interacting() && (T.type = null, this.move(T)), this.pointerWasMoved && K.copyCoords(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(s) {
        s && s.event || K.setZeroCoords(this.coords.delta), (s = (0, W.default)({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, s || {})).phase = "move", this._doPhase(s);
      } }, { key: "pointerUp", value: function(s, p2, f2, m2) {
        var h2 = this.getPointerIndex(s);
        h2 === -1 && (h2 = this.updatePointer(s, p2, f2, false));
        var g = /cancel$/i.test(p2.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(g), { pointer: s, pointerIndex: h2, pointerInfo: this.pointers[h2], event: p2, eventTarget: f2, type: g, curEventTarget: m2, interaction: this }), this.simulation || this.end(p2), this.removePointer(s, p2);
      } }, { key: "documentBlur", value: function(s) {
        this.end(s), this._scopeFire("interactions:blur", { event: s, type: "blur", interaction: this });
      } }, { key: "end", value: function(s) {
        var p2;
        this._ending = true, s = s || this._latestPointer.event, this.interacting() && (p2 = this._doPhase({ event: s, interaction: this, phase: "end" })), this._ending = false, p2 === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(s) {
        var p2 = K.getPointerId(s);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : xe.findIndex(this.pointers, function(f2) {
          return f2.id === p2;
        });
      } }, { key: "getPointerInfo", value: function(s) {
        return this.pointers[this.getPointerIndex(s)];
      } }, { key: "updatePointer", value: function(s, p2, f2, m2) {
        var h2 = K.getPointerId(s), g = this.getPointerIndex(s), x = this.pointers[g];
        return m2 = m2 !== false && (m2 || /(down|start)$/i.test(p2.type)), x ? x.pointer = s : (x = new _i.PointerInfo(h2, s, p2, null, null), g = this.pointers.length, this.pointers.push(x)), K.setCoords(this.coords.cur, this.pointers.map(function(T) {
          return T.pointer;
        }), this._now()), K.setCoordDeltas(this.coords.delta, this.coords.prev, this.coords.cur), m2 && (this.pointerIsDown = true, x.downTime = this.coords.cur.timeStamp, x.downTarget = f2, K.pointerExtend(this.downPointer, s), this.interacting() || (K.copyCoords(this.coords.start, this.coords.cur), K.copyCoords(this.coords.prev, this.coords.cur), this.downEvent = p2, this.pointerWasMoved = false)), this._updateLatestPointer(s, p2, f2), this._scopeFire("interactions:update-pointer", { pointer: s, event: p2, eventTarget: f2, down: m2, pointerInfo: x, pointerIndex: g, interaction: this }), g;
      } }, { key: "removePointer", value: function(s, p2) {
        var f2 = this.getPointerIndex(s);
        if (f2 !== -1) {
          var m2 = this.pointers[f2];
          this._scopeFire("interactions:remove-pointer", { pointer: s, event: p2, eventTarget: null, pointerIndex: f2, pointerInfo: m2, interaction: this }), this.pointers.splice(f2, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(s, p2, f2) {
        this._latestPointer.pointer = s, this._latestPointer.event = p2, this._latestPointer.eventTarget = f2;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(s, p2, f2, m2) {
        return new Ci.InteractEvent(this, s, this.prepared.name, p2, this.element, f2, m2);
      } }, { key: "_fireEvent", value: function(s) {
        this.interactable.fire(s), (!this.prevEvent || s.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = s);
      } }, { key: "_doPhase", value: function(s) {
        var p2 = s.event, f2 = s.phase, m2 = s.preEnd, h2 = s.type, g = this.rect;
        if (g && f2 === "move" && (ce.addEdges(this.edges, g, this.coords.delta[this.interactable.options.deltaSource]), g.width = g.right - g.left, g.height = g.bottom - g.top), this._scopeFire("interactions:before-action-".concat(f2), s) === false)
          return false;
        var x = s.iEvent = this._createPreparedEvent(p2, f2, m2, h2);
        return this._scopeFire("interactions:action-".concat(f2), s), f2 === "start" && (this.prevEvent = x), this._fireEvent(x), this._scopeFire("interactions:after-action-".concat(f2), s), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]) && gd(o2.prototype, a), n;
    }();
    Mt.Interaction = Nl;
    var yd = Nl;
    Mt.default = yd;
    var vn = {};
    function Gl(n) {
      n.pointerIsDown && (Ja(n.coords.cur, n.offset.total), n.offset.pending.x = 0, n.offset.pending.y = 0);
    }
    __name(Gl, "Gl");
    u2(Gl, "He");
    function Ll(n) {
      Za(n.interaction);
    }
    __name(Ll, "Ll");
    u2(Ll, "Ke");
    function Za(n) {
      if (!function(a) {
        return !(!a.offset.pending.x && !a.offset.pending.y);
      }(n))
        return false;
      var o2 = n.offset.pending;
      return Ja(n.coords.cur, o2), Ja(n.coords.delta, o2), ce.addEdges(n.edges, n.rect, o2), o2.x = 0, o2.y = 0, true;
    }
    __name(Za, "Za");
    u2(Za, "Ze");
    function xd(n) {
      var o2 = n.x, a = n.y;
      this.offset.pending.x += o2, this.offset.pending.y += a, this.offset.total.x += o2, this.offset.total.y += a;
    }
    __name(xd, "xd");
    u2(xd, "Je");
    function Ja(n, o2) {
      var a = n.page, s = n.client, p2 = o2.x, f2 = o2.y;
      a.x += p2, a.y += f2, s.x += p2, s.y += f2;
    }
    __name(Ja, "Ja");
    u2(Ja, "Qe"), Object.defineProperty(vn, "__esModule", { value: true }), vn.addTotal = Gl, vn.applyPending = Za, vn.default = void 0, Mt._ProxyMethods.offsetBy = "";
    var wd = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(n) {
      n.Interaction.prototype.offsetBy = xd;
    }, listeners: { "interactions:new": function(n) {
      n.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(n) {
      return Gl(n.interaction);
    }, "interactions:before-action-start": Ll, "interactions:before-action-move": Ll, "interactions:before-action-end": function(n) {
      var o2 = n.interaction;
      if (Za(o2))
        return o2.move({ offset: true }), o2.end(), false;
    }, "interactions:stop": function(n) {
      var o2 = n.interaction;
      o2.offset.total.x = 0, o2.offset.total.y = 0, o2.offset.pending.x = 0, o2.offset.pending.y = 0;
    } } };
    vn.default = wd;
    var Vn = {};
    function Ed(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Ed, "Ed");
    u2(Ed, "nn");
    function st(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(st, "st");
    u2(st, "rn"), Object.defineProperty(Vn, "__esModule", { value: true }), Vn.default = Vn.InertiaState = void 0;
    var ql = function() {
      function n(s) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), st(this, "active", false), st(this, "isModified", false), st(this, "smoothEnd", false), st(this, "allowResume", false), st(this, "modification", void 0), st(this, "modifierCount", 0), st(this, "modifierArg", void 0), st(this, "startCoords", void 0), st(this, "t0", 0), st(this, "v0", 0), st(this, "te", 0), st(this, "targetOffset", void 0), st(this, "modifiedOffset", void 0), st(this, "currentOffset", void 0), st(this, "lambda_v0", 0), st(this, "one_ve_v0", 0), st(this, "timeout", void 0), st(this, "interaction", void 0), this.interaction = s;
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "start", value: function(s) {
        var p2 = this.interaction, f2 = Do(p2);
        if (!f2 || !f2.enabled)
          return false;
        var m2 = p2.coords.velocity.client, h2 = (0, et.default)(m2.x, m2.y), g = this.modification || (this.modification = new fn.default(p2));
        if (g.copyFrom(p2.modification), this.t0 = p2._now(), this.allowResume = f2.allowResume, this.v0 = h2, this.currentOffset = { x: 0, y: 0 }, this.startCoords = p2.coords.cur.page, this.modifierArg = g.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - p2.coords.cur.timeStamp < 50 && h2 > f2.minSpeed && h2 > f2.endSpeed)
          this.startInertia();
        else {
          if (g.result = g.setAll(this.modifierArg), !g.result.changed)
            return false;
          this.startSmoothEnd();
        }
        return p2.modification.result.rect = null, p2.offsetBy(this.targetOffset), p2._doPhase({ interaction: p2, event: s, phase: "inertiastart" }), p2.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), p2.modification.result.rect = null, this.active = true, p2.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var s = this, p2 = this.interaction.coords.velocity.client, f2 = Do(this.interaction), m2 = f2.resistance, h2 = -Math.log(f2.endSpeed / this.v0) / m2;
        this.targetOffset = { x: (p2.x - h2) / m2, y: (p2.y - h2) / m2 }, this.te = h2, this.lambda_v0 = m2 / this.v0, this.one_ve_v0 = 1 - f2.endSpeed / this.v0;
        var g = this.modification, x = this.modifierArg;
        x.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, g.result = g.setAll(x), g.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + g.result.delta.x, y: this.targetOffset.y + g.result.delta.y }), this.onNextFrame(function() {
          return s.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var s = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return s.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(s) {
        var p2 = this;
        this.timeout = kt.default.request(function() {
          p2.active && s();
        });
      } }, { key: "inertiaTick", value: function() {
        var s, p2, f2, m2, h2, g = this, x = this.interaction, T = Do(x).resistance, C = (x._now() - this.t0) / 1e3;
        if (C < this.te) {
          var N2, G2 = 1 - (Math.exp(-T * C) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (s = this.targetOffset.x, p2 = this.targetOffset.y, f2 = this.modifiedOffset.x, m2 = this.modifiedOffset.y, N2 = { x: jl(h2 = G2, 0, s, f2), y: jl(h2, 0, p2, m2) }) : N2 = { x: this.targetOffset.x * G2, y: this.targetOffset.y * G2 };
          var D2 = { x: N2.x - this.currentOffset.x, y: N2.y - this.currentOffset.y };
          this.currentOffset.x += D2.x, this.currentOffset.y += D2.y, x.offsetBy(D2), x.move(), this.onNextFrame(function() {
            return g.inertiaTick();
          });
        } else
          x.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var s = this, p2 = this.interaction, f2 = p2._now() - this.t0, m2 = Do(p2).smoothEndDuration;
        if (f2 < m2) {
          var h2 = { x: Bl(f2, 0, this.targetOffset.x, m2), y: Bl(f2, 0, this.targetOffset.y, m2) }, g = { x: h2.x - this.currentOffset.x, y: h2.y - this.currentOffset.y };
          this.currentOffset.x += g.x, this.currentOffset.y += g.y, p2.offsetBy(g), p2.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return s.smoothEndTick();
          });
        } else
          p2.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(s) {
        var p2 = s.pointer, f2 = s.event, m2 = s.eventTarget, h2 = this.interaction;
        h2.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), h2.updatePointer(p2, f2, m2, true), h2._doPhase({ interaction: h2, event: f2, phase: "resume" }), (0, K.copyCoords)(h2.coords.prev, h2.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, kt.default.cancel(this.timeout);
      } }]) && Ed(o2.prototype, a), n;
    }();
    function Do(n) {
      var o2 = n.interactable, a = n.prepared;
      return o2 && o2.options && a.name && o2.options[a.name].inertia;
    }
    __name(Do, "Do");
    u2(Do, "an");
    function jl(n, o2, a, s) {
      var p2 = 1 - n;
      return p2 * p2 * o2 + 2 * p2 * n * a + n * n * s;
    }
    __name(jl, "jl");
    u2(jl, "sn");
    function Bl(n, o2, a, s) {
      return -a * (n /= s) * (n - 2) + o2;
    }
    __name(Bl, "Bl");
    u2(Bl, "ln"), Vn.InertiaState = ql;
    var Sd = { id: "inertia", before: ["modifiers", "actions"], install: function(n) {
      var o2 = n.defaults;
      n.usePlugin(vn.default), n.usePlugin(ht.default), n.actions.phases.inertiastart = true, n.actions.phases.resume = true, o2.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(n) {
      var o2 = n.interaction;
      o2.inertia = new ql(o2);
    }, "interactions:before-action-end": function(n) {
      var o2 = n.interaction, a = n.event;
      return (!o2._interacting || o2.simulation || !o2.inertia.start(a)) && null;
    }, "interactions:down": function(n) {
      var o2 = n.interaction, a = n.eventTarget, s = o2.inertia;
      if (s.active)
        for (var p2 = a; c2.default.element(p2); ) {
          if (p2 === o2.element) {
            s.resume(n);
            break;
          }
          p2 = z2.parentNode(p2);
        }
    }, "interactions:stop": function(n) {
      var o2 = n.interaction.inertia;
      o2.active && o2.stop();
    }, "interactions:before-action-resume": function(n) {
      var o2 = n.interaction.modification;
      o2.stop(n), o2.start(n, n.interaction.coords.cur.page), o2.applyToInteraction(n);
    }, "interactions:before-action-inertiastart": function(n) {
      return n.interaction.modification.setAndApply(n);
    }, "interactions:action-resume": ht.addEventModifiers, "interactions:action-inertiastart": ht.addEventModifiers, "interactions:after-action-inertiastart": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    }, "interactions:after-action-resume": function(n) {
      return n.interaction.modification.restoreInteractionCoords(n);
    } } };
    Vn.default = Sd;
    var Ai = {};
    function Td(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Td, "Td");
    u2(Td, "fn");
    function Pi(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(Pi, "Pi");
    u2(Pi, "dn");
    function $l(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        if (n.immediatePropagationStopped)
          break;
        s(n);
      }
    }
    __name($l, "$l");
    u2($l, "pn"), Object.defineProperty(Ai, "__esModule", { value: true }), Ai.Eventable = void 0;
    var Od = function() {
      function n(s) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Pi(this, "options", void 0), Pi(this, "types", {}), Pi(this, "propagationStopped", false), Pi(this, "immediatePropagationStopped", false), Pi(this, "global", void 0), this.options = (0, W.default)({}, s || {});
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "fire", value: function(s) {
        var p2, f2 = this.global;
        (p2 = this.types[s.type]) && $l(s, p2), !s.propagationStopped && f2 && (p2 = f2[s.type]) && $l(s, p2);
      } }, { key: "on", value: function(s, p2) {
        var f2 = (0, fe.default)(s, p2);
        for (s in f2)
          this.types[s] = xe.merge(this.types[s] || [], f2[s]);
      } }, { key: "off", value: function(s, p2) {
        var f2 = (0, fe.default)(s, p2);
        for (s in f2) {
          var m2 = this.types[s];
          if (m2 && m2.length)
            for (var h2 = 0; h2 < f2[s].length; h2++) {
              var g = f2[s][h2], x = m2.indexOf(g);
              x !== -1 && m2.splice(x, 1);
            }
        }
      } }, { key: "getRect", value: function(s) {
        return null;
      } }]) && Td(o2.prototype, a), n;
    }();
    Ai.Eventable = Od;
    var Ii = {};
    Object.defineProperty(Ii, "__esModule", { value: true }), Ii.default = function(n, o2) {
      if (o2.phaselessTypes[n])
        return true;
      for (var a in o2.map)
        if (n.indexOf(a) === 0 && n.substr(a.length) in o2.phases)
          return true;
      return false;
    };
    var Ka = {};
    Object.defineProperty(Ka, "__esModule", { value: true }), Ka.createInteractStatic = function(n) {
      var o2 = u2(/* @__PURE__ */ __name(function a(s, p2) {
        var f2 = n.interactables.get(s, p2);
        return f2 || ((f2 = n.interactables.new(s, p2)).events.global = a.globalEvents), f2;
      }, "a"), "e");
      return o2.getPointerAverage = K.pointerAverage, o2.getTouchBBox = K.touchBBox, o2.getTouchDistance = K.touchDistance, o2.getTouchAngle = K.touchAngle, o2.getElementRect = z2.getElementRect, o2.getElementClientRect = z2.getElementClientRect, o2.matchesSelector = z2.matchesSelector, o2.closest = z2.closest, o2.globalEvents = {}, o2.version = "1.10.11", o2.scope = n, o2.use = function(a, s) {
        return this.scope.usePlugin(a, s), this;
      }, o2.isSet = function(a, s) {
        return !!this.scope.interactables.get(a, s && s.context);
      }, o2.on = (0, Gt.warnOnce)(function(a, s, p2) {
        if (c2.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c2.default.array(a)) {
          for (var f2 = 0; f2 < a.length; f2++) {
            var m2 = a[f2];
            this.on(m2, s, p2);
          }
          return this;
        }
        if (c2.default.object(a)) {
          for (var h2 in a)
            this.on(h2, a[h2], s);
          return this;
        }
        return (0, Ii.default)(a, this.scope.actions) ? this.globalEvents[a] ? this.globalEvents[a].push(s) : this.globalEvents[a] = [s] : this.scope.events.add(this.scope.document, a, s, { options: p2 }), this;
      }, "The interact.on() method is being deprecated"), o2.off = (0, Gt.warnOnce)(function(a, s, p2) {
        if (c2.default.string(a) && a.search(" ") !== -1 && (a = a.trim().split(/ +/)), c2.default.array(a)) {
          for (var f2 = 0; f2 < a.length; f2++) {
            var m2 = a[f2];
            this.off(m2, s, p2);
          }
          return this;
        }
        if (c2.default.object(a)) {
          for (var h2 in a)
            this.off(h2, a[h2], s);
          return this;
        }
        var g;
        return (0, Ii.default)(a, this.scope.actions) ? a in this.globalEvents && (g = this.globalEvents[a].indexOf(s)) !== -1 && this.globalEvents[a].splice(g, 1) : this.scope.events.remove(this.scope.document, a, s, p2), this;
      }, "The interact.off() method is being deprecated"), o2.debug = function() {
        return this.scope;
      }, o2.supportsTouch = function() {
        return L.default.supportsTouch;
      }, o2.supportsPointerEvent = function() {
        return L.default.supportsPointerEvent;
      }, o2.stop = function() {
        for (var a = 0; a < this.scope.interactions.list.length; a++)
          this.scope.interactions.list[a].stop();
        return this;
      }, o2.pointerMoveTolerance = function(a) {
        return c2.default.number(a) ? (this.scope.interactions.pointerMoveTolerance = a, this) : this.scope.interactions.pointerMoveTolerance;
      }, o2.addDocument = function(a, s) {
        this.scope.addDocument(a, s);
      }, o2.removeDocument = function(a) {
        this.scope.removeDocument(a);
      }, o2;
    };
    var Ro = {};
    function Cd(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Cd, "Cd");
    u2(Cd, "mn");
    function Ir(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(Ir, "Ir");
    u2(Ir, "bn"), Object.defineProperty(Ro, "__esModule", { value: true }), Ro.Interactable = void 0;
    var _d = function() {
      function n(s, p2, f2, m2) {
        (function(h2, g) {
          if (!(h2 instanceof g))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Ir(this, "options", void 0), Ir(this, "_actions", void 0), Ir(this, "target", void 0), Ir(this, "events", new Ai.Eventable()), Ir(this, "_context", void 0), Ir(this, "_win", void 0), Ir(this, "_doc", void 0), Ir(this, "_scopeEvents", void 0), Ir(this, "_rectChecker", void 0), this._actions = p2.actions, this.target = s, this._context = p2.context || f2, this._win = (0, e.getWindow)((0, z2.trySelector)(s) ? this._context : s), this._doc = this._win.document, this._scopeEvents = m2, this.set(p2);
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(s, p2) {
        return c2.default.func(p2.onstart) && this.on("".concat(s, "start"), p2.onstart), c2.default.func(p2.onmove) && this.on("".concat(s, "move"), p2.onmove), c2.default.func(p2.onend) && this.on("".concat(s, "end"), p2.onend), c2.default.func(p2.oninertiastart) && this.on("".concat(s, "inertiastart"), p2.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(s, p2, f2) {
        (c2.default.array(p2) || c2.default.object(p2)) && this.off(s, p2), (c2.default.array(f2) || c2.default.object(f2)) && this.on(s, f2);
      } }, { key: "setPerAction", value: function(s, p2) {
        var f2 = this._defaults;
        for (var m2 in p2) {
          var h2 = m2, g = this.options[s], x = p2[h2];
          h2 === "listeners" && this.updatePerActionListeners(s, g.listeners, x), c2.default.array(x) ? g[h2] = xe.from(x) : c2.default.plainObject(x) ? (g[h2] = (0, W.default)(g[h2] || {}, (0, dn.default)(x)), c2.default.object(f2.perAction[h2]) && "enabled" in f2.perAction[h2] && (g[h2].enabled = x.enabled !== false)) : c2.default.bool(x) && c2.default.object(f2.perAction[h2]) ? g[h2].enabled = x : g[h2] = x;
        }
      } }, { key: "getRect", value: function(s) {
        return s = s || (c2.default.element(this.target) ? this.target : null), c2.default.string(this.target) && (s = s || this._context.querySelector(this.target)), (0, z2.getElementRect)(s);
      } }, { key: "rectChecker", value: function(s) {
        var p2 = this;
        return c2.default.func(s) ? (this._rectChecker = s, this.getRect = function(f2) {
          var m2 = (0, W.default)({}, p2._rectChecker(f2));
          return "width" in m2 || (m2.width = m2.right - m2.left, m2.height = m2.bottom - m2.top), m2;
        }, this) : s === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(s, p2) {
        if ((0, z2.trySelector)(p2) || c2.default.object(p2)) {
          for (var f2 in this.options[s] = p2, this._actions.map)
            this.options[f2][s] = p2;
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
        return this._context === s.ownerDocument || (0, z2.nodeContains)(this._context, s);
      } }, { key: "testIgnoreAllow", value: function(s, p2, f2) {
        return !this.testIgnore(s.ignoreFrom, p2, f2) && this.testAllow(s.allowFrom, p2, f2);
      } }, { key: "testAllow", value: function(s, p2, f2) {
        return !s || !!c2.default.element(f2) && (c2.default.string(s) ? (0, z2.matchesUpTo)(f2, s, p2) : !!c2.default.element(s) && (0, z2.nodeContains)(s, f2));
      } }, { key: "testIgnore", value: function(s, p2, f2) {
        return !(!s || !c2.default.element(f2)) && (c2.default.string(s) ? (0, z2.matchesUpTo)(f2, s, p2) : !!c2.default.element(s) && (0, z2.nodeContains)(s, f2));
      } }, { key: "fire", value: function(s) {
        return this.events.fire(s), this;
      } }, { key: "_onOff", value: function(s, p2, f2, m2) {
        c2.default.object(p2) && !c2.default.array(p2) && (m2 = f2, f2 = null);
        var h2 = s === "on" ? "add" : "remove", g = (0, fe.default)(p2, f2);
        for (var x in g) {
          x === "wheel" && (x = L.default.wheelEvent);
          for (var T = 0; T < g[x].length; T++) {
            var C = g[x][T];
            (0, Ii.default)(x, this._actions) ? this.events[s](x, C) : c2.default.string(this.target) ? this._scopeEvents["".concat(h2, "Delegate")](this.target, this._context, x, C, m2) : this._scopeEvents[h2](this.target, x, C, m2);
          }
        }
        return this;
      } }, { key: "on", value: function(s, p2, f2) {
        return this._onOff("on", s, p2, f2);
      } }, { key: "off", value: function(s, p2, f2) {
        return this._onOff("off", s, p2, f2);
      } }, { key: "set", value: function(s) {
        var p2 = this._defaults;
        for (var f2 in c2.default.object(s) || (s = {}), this.options = (0, dn.default)(p2.base), this._actions.methodDict) {
          var m2 = f2, h2 = this._actions.methodDict[m2];
          this.options[m2] = {}, this.setPerAction(m2, (0, W.default)((0, W.default)({}, p2.perAction), p2.actions[m2])), this[h2](s[m2]);
        }
        for (var g in s)
          c2.default.func(this[g]) && this[g](s[g]);
        return this;
      } }, { key: "unset", value: function() {
        if (c2.default.string(this.target))
          for (var s in this._scopeEvents.delegatedEvents)
            for (var p2 = this._scopeEvents.delegatedEvents[s], f2 = p2.length - 1; f2 >= 0; f2--) {
              var m2 = p2[f2], h2 = m2.selector, g = m2.context, x = m2.listeners;
              h2 === this.target && g === this._context && p2.splice(f2, 1);
              for (var T = x.length - 1; T >= 0; T--)
                this._scopeEvents.removeDelegate(this.target, this._context, s, x[T][0], x[T][1]);
            }
        else
          this._scopeEvents.remove(this.target, "all");
      } }]) && Cd(o2.prototype, a), n;
    }();
    Ro.Interactable = _d;
    var zo = {};
    function Md(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Md, "Md");
    u2(Md, "_n");
    function Qa(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(Qa, "Qa");
    u2(Qa, "Pn"), Object.defineProperty(zo, "__esModule", { value: true }), zo.InteractableSet = void 0;
    var Ad = function() {
      function n(s) {
        var p2 = this;
        (function(f2, m2) {
          if (!(f2 instanceof m2))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), Qa(this, "list", []), Qa(this, "selectorMap", {}), Qa(this, "scope", void 0), this.scope = s, s.addListeners({ "interactable:unset": function(f2) {
          var m2 = f2.interactable, h2 = m2.target, g = m2._context, x = c2.default.string(h2) ? p2.selectorMap[h2] : h2[p2.scope.id], T = xe.findIndex(x, function(C) {
            return C.context === g;
          });
          x[T] && (x[T].context = null, x[T].interactable = null), x.splice(T, 1);
        } });
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "new", value: function(s, p2) {
        p2 = (0, W.default)(p2 || {}, { actions: this.scope.actions });
        var f2 = new this.scope.Interactable(s, p2, this.scope.document, this.scope.events), m2 = { context: f2._context, interactable: f2 };
        return this.scope.addDocument(f2._doc), this.list.push(f2), c2.default.string(s) ? (this.selectorMap[s] || (this.selectorMap[s] = []), this.selectorMap[s].push(m2)) : (f2.target[this.scope.id] || Object.defineProperty(s, this.scope.id, { value: [], configurable: true }), s[this.scope.id].push(m2)), this.scope.fire("interactable:new", { target: s, options: p2, interactable: f2, win: this.scope._win }), f2;
      } }, { key: "get", value: function(s, p2) {
        var f2 = p2 && p2.context || this.scope.document, m2 = c2.default.string(s), h2 = m2 ? this.selectorMap[s] : s[this.scope.id];
        if (!h2)
          return null;
        var g = xe.find(h2, function(x) {
          return x.context === f2 && (m2 || x.interactable.inContext(s));
        });
        return g && g.interactable;
      } }, { key: "forEachMatch", value: function(s, p2) {
        for (var f2 = 0; f2 < this.list.length; f2++) {
          var m2 = this.list[f2], h2 = void 0;
          if ((c2.default.string(m2.target) ? c2.default.element(s) && z2.matchesSelector(s, m2.target) : s === m2.target) && m2.inContext(s) && (h2 = p2(m2)), h2 !== void 0)
            return h2;
        }
      } }]) && Md(o2.prototype, a), n;
    }();
    zo.InteractableSet = Ad;
    var ko = {};
    function Pd(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(Pd, "Pd");
    u2(Pd, "En");
    function es(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(es, "es");
    u2(es, "Tn");
    function ts(n, o2) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p2 = [], f2 = true, m2 = false, h2 = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f2 = (g = x.next()).done) && (p2.push(g.value), !s || p2.length !== s); f2 = true)
              ;
          } catch (T) {
            m2 = true, h2 = T;
          } finally {
            try {
              f2 || x.return == null || x.return();
            } finally {
              if (m2)
                throw h2;
            }
          }
          return p2;
        }
      }(n, o2) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Hl(a, s);
          var p2 = Object.prototype.toString.call(a).slice(8, -1);
          return p2 === "Object" && a.constructor && (p2 = a.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(a) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? Hl(a, s) : void 0;
        }
      }(n, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ts, "ts");
    u2(ts, "Mn");
    function Hl(n, o2) {
      (o2 == null || o2 > n.length) && (o2 = n.length);
      for (var a = 0, s = Array(o2); a < o2; a++)
        s[a] = n[a];
      return s;
    }
    __name(Hl, "Hl");
    u2(Hl, "jn"), Object.defineProperty(ko, "__esModule", { value: true }), ko.default = void 0;
    var Id = function() {
      function n(s) {
        (function(p2, f2) {
          if (!(p2 instanceof f2))
            throw new TypeError("Cannot call a class as a function");
        })(this, n), es(this, "currentTarget", void 0), es(this, "originalEvent", void 0), es(this, "type", void 0), this.originalEvent = s, (0, Dt.default)(this, s);
      }
      __name(n, "n");
      u2(n, "t");
      var o2, a;
      return o2 = n, (a = [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]) && Pd(o2.prototype, a), n;
    }();
    function Di(n) {
      if (!c2.default.object(n))
        return { capture: !!n, passive: false };
      var o2 = (0, W.default)({}, n);
      return o2.capture = !!n.capture, o2.passive = !!n.passive, o2;
    }
    __name(Di, "Di");
    u2(Di, "In");
    var Dd = { id: "events", install: function(n) {
      var o2, a = [], s = {}, p2 = [], f2 = { add: m2, remove: h2, addDelegate: function(T, C, N2, G2, D2) {
        var H = Di(D2);
        if (!s[N2]) {
          s[N2] = [];
          for (var Z = 0; Z < p2.length; Z++) {
            var F2 = p2[Z];
            m2(F2, N2, g), m2(F2, N2, x, true);
          }
        }
        var ee = s[N2], se = xe.find(ee, function(pe) {
          return pe.selector === T && pe.context === C;
        });
        se || (se = { selector: T, context: C, listeners: [] }, ee.push(se)), se.listeners.push([G2, H]);
      }, removeDelegate: function(T, C, N2, G2, D2) {
        var H, Z = Di(D2), F2 = s[N2], ee = false;
        if (F2)
          for (H = F2.length - 1; H >= 0; H--) {
            var se = F2[H];
            if (se.selector === T && se.context === C) {
              for (var pe = se.listeners, we = pe.length - 1; we >= 0; we--) {
                var qe = ts(pe[we], 2), be = qe[0], De = qe[1], Ut = De.capture, Rr = De.passive;
                if (be === G2 && Ut === Z.capture && Rr === Z.passive) {
                  pe.splice(we, 1), pe.length || (F2.splice(H, 1), h2(C, N2, g), h2(C, N2, x, true)), ee = true;
                  break;
                }
              }
              if (ee)
                break;
            }
          }
      }, delegateListener: g, delegateUseCapture: x, delegatedEvents: s, documents: p2, targets: a, supportsOptions: false, supportsPassive: false };
      function m2(T, C, N2, G2) {
        var D2 = Di(G2), H = xe.find(a, function(Z) {
          return Z.eventTarget === T;
        });
        H || (H = { eventTarget: T, events: {} }, a.push(H)), H.events[C] || (H.events[C] = []), T.addEventListener && !xe.contains(H.events[C], N2) && (T.addEventListener(C, N2, f2.supportsOptions ? D2 : D2.capture), H.events[C].push(N2));
      }
      __name(m2, "m");
      u2(m2, "s");
      function h2(T, C, N2, G2) {
        var D2 = Di(G2), H = xe.findIndex(a, function(we) {
          return we.eventTarget === T;
        }), Z = a[H];
        if (Z && Z.events)
          if (C !== "all") {
            var F2 = false, ee = Z.events[C];
            if (ee) {
              if (N2 === "all") {
                for (var se = ee.length - 1; se >= 0; se--)
                  h2(T, C, ee[se], D2);
                return;
              }
              for (var pe = 0; pe < ee.length; pe++)
                if (ee[pe] === N2) {
                  T.removeEventListener(C, N2, f2.supportsOptions ? D2 : D2.capture), ee.splice(pe, 1), ee.length === 0 && (delete Z.events[C], F2 = true);
                  break;
                }
            }
            F2 && !Object.keys(Z.events).length && a.splice(H, 1);
          } else
            for (C in Z.events)
              Z.events.hasOwnProperty(C) && h2(T, C, "all");
      }
      __name(h2, "h");
      u2(h2, "l");
      function g(T, C) {
        for (var N2 = Di(C), G2 = new Id(T), D2 = s[T.type], H = ts(K.getEventTargets(T), 1)[0], Z = H; c2.default.element(Z); ) {
          for (var F2 = 0; F2 < D2.length; F2++) {
            var ee = D2[F2], se = ee.selector, pe = ee.context;
            if (z2.matchesSelector(Z, se) && z2.nodeContains(pe, H) && z2.nodeContains(pe, Z)) {
              var we = ee.listeners;
              G2.currentTarget = Z;
              for (var qe = 0; qe < we.length; qe++) {
                var be = ts(we[qe], 2), De = be[0], Ut = be[1], Rr = Ut.capture, hs = Ut.passive;
                Rr === N2.capture && hs === N2.passive && De(G2);
              }
            }
          }
          Z = z2.parentNode(Z);
        }
      }
      __name(g, "g");
      u2(g, "u");
      function x(T) {
        return g(T, true);
      }
      __name(x, "x");
      return u2(x, "c"), (o2 = n.document) == null || o2.createElement("div").addEventListener("test", null, { get capture() {
        return f2.supportsOptions = true;
      }, get passive() {
        return f2.supportsPassive = true;
      } }), n.events = f2, f2;
    } };
    ko.default = Dd;
    var No = {};
    Object.defineProperty(No, "__esModule", { value: true }), No.default = void 0;
    var Go = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(n) {
      for (var o2 = 0; o2 < Go.methodOrder.length; o2++) {
        var a;
        a = Go.methodOrder[o2];
        var s = Go[a](n);
        if (s)
          return s;
      }
      return null;
    }, simulationResume: function(n) {
      var o2 = n.pointerType, a = n.eventType, s = n.eventTarget, p2 = n.scope;
      if (!/down|start/i.test(a))
        return null;
      for (var f2 = 0; f2 < p2.interactions.list.length; f2++) {
        var m2 = p2.interactions.list[f2], h2 = s;
        if (m2.simulation && m2.simulation.allowResume && m2.pointerType === o2)
          for (; h2; ) {
            if (h2 === m2.element)
              return m2;
            h2 = z2.parentNode(h2);
          }
      }
      return null;
    }, mouseOrPen: function(n) {
      var o2, a = n.pointerId, s = n.pointerType, p2 = n.eventType, f2 = n.scope;
      if (s !== "mouse" && s !== "pen")
        return null;
      for (var m2 = 0; m2 < f2.interactions.list.length; m2++) {
        var h2 = f2.interactions.list[m2];
        if (h2.pointerType === s) {
          if (h2.simulation && !Fl(h2, a))
            continue;
          if (h2.interacting())
            return h2;
          o2 || (o2 = h2);
        }
      }
      if (o2)
        return o2;
      for (var g = 0; g < f2.interactions.list.length; g++) {
        var x = f2.interactions.list[g];
        if (!(x.pointerType !== s || /down/i.test(p2) && x.simulation))
          return x;
      }
      return null;
    }, hasPointer: function(n) {
      for (var o2 = n.pointerId, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p2 = a.interactions.list[s];
        if (Fl(p2, o2))
          return p2;
      }
      return null;
    }, idle: function(n) {
      for (var o2 = n.pointerType, a = n.scope, s = 0; s < a.interactions.list.length; s++) {
        var p2 = a.interactions.list[s];
        if (p2.pointers.length === 1) {
          var f2 = p2.interactable;
          if (f2 && (!f2.options.gesture || !f2.options.gesture.enabled))
            continue;
        } else if (p2.pointers.length >= 2)
          continue;
        if (!p2.interacting() && o2 === p2.pointerType)
          return p2;
      }
      return null;
    } };
    function Fl(n, o2) {
      return n.pointers.some(function(a) {
        return a.id === o2;
      });
    }
    __name(Fl, "Fl");
    u2(Fl, "zn");
    var Rd = Go;
    No.default = Rd;
    var Lo = {};
    function Ul(n) {
      return (Ul = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(Ul, "Ul");
    u2(Ul, "Xn");
    function Wl(n, o2) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p2 = [], f2 = true, m2 = false, h2 = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f2 = (g = x.next()).done) && (p2.push(g.value), !s || p2.length !== s); f2 = true)
              ;
          } catch (T) {
            m2 = true, h2 = T;
          } finally {
            try {
              f2 || x.return == null || x.return();
            } finally {
              if (m2)
                throw h2;
            }
          }
          return p2;
        }
      }(n, o2) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return Vl(a, s);
          var p2 = Object.prototype.toString.call(a).slice(8, -1);
          return p2 === "Object" && a.constructor && (p2 = a.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(a) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? Vl(a, s) : void 0;
        }
      }(n, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(Wl, "Wl");
    u2(Wl, "Yn");
    function Vl(n, o2) {
      (o2 == null || o2 > n.length) && (o2 = n.length);
      for (var a = 0, s = Array(o2); a < o2; a++)
        s[a] = n[a];
      return s;
    }
    __name(Vl, "Vl");
    u2(Vl, "Bn");
    function zd(n, o2) {
      if (!(n instanceof o2))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(zd, "zd");
    u2(zd, "Wn");
    function kd(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(kd, "kd");
    u2(kd, "Ln");
    function Xl(n, o2) {
      return (Xl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o2);
    }
    __name(Xl, "Xl");
    u2(Xl, "Un");
    function Nd(n, o2) {
      return !o2 || Ul(o2) !== "object" && typeof o2 != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o2;
    }
    __name(Nd, "Nd");
    u2(Nd, "Vn");
    function rs(n) {
      return (rs = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(n);
    }
    __name(rs, "rs");
    u2(rs, "Nn"), Object.defineProperty(Lo, "__esModule", { value: true }), Lo.default = void 0;
    var ns = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function Yl(n, o2) {
      return function(a) {
        var s = o2.interactions.list, p2 = K.getPointerType(a), f2 = Wl(K.getEventTargets(a), 2), m2 = f2[0], h2 = f2[1], g = [];
        if (/^touch/.test(a.type)) {
          o2.prevTouchTime = o2.now();
          for (var x = 0; x < a.changedTouches.length; x++) {
            var T = a.changedTouches[x], C = { pointer: T, pointerId: K.getPointerId(T), pointerType: p2, eventType: a.type, eventTarget: m2, curEventTarget: h2, scope: o2 }, N2 = Zl(C);
            g.push([C.pointer, C.eventTarget, C.curEventTarget, N2]);
          }
        } else {
          var G2 = false;
          if (!L.default.supportsPointerEvent && /mouse/.test(a.type)) {
            for (var D2 = 0; D2 < s.length && !G2; D2++)
              G2 = s[D2].pointerType !== "mouse" && s[D2].pointerIsDown;
            G2 = G2 || o2.now() - o2.prevTouchTime < 500 || a.timeStamp === 0;
          }
          if (!G2) {
            var H = { pointer: a, pointerId: K.getPointerId(a), pointerType: p2, eventType: a.type, curEventTarget: h2, eventTarget: m2, scope: o2 }, Z = Zl(H);
            g.push([H.pointer, H.eventTarget, H.curEventTarget, Z]);
          }
        }
        for (var F2 = 0; F2 < g.length; F2++) {
          var ee = Wl(g[F2], 4), se = ee[0], pe = ee[1], we = ee[2];
          ee[3][n](se, a, pe, we);
        }
      };
    }
    __name(Yl, "Yl");
    u2(Yl, "$n");
    function Zl(n) {
      var o2 = n.pointerType, a = n.scope, s = { interaction: No.default.search(n), searchDetails: n };
      return a.fire("interactions:find", s), s.interaction || a.interactions.new({ pointerType: o2 });
    }
    __name(Zl, "Zl");
    u2(Zl, "Gn");
    function is(n, o2) {
      var a = n.doc, s = n.scope, p2 = n.options, f2 = s.interactions.docEvents, m2 = s.events, h2 = m2[o2];
      for (var g in s.browser.isIOS && !p2.events && (p2.events = { passive: false }), m2.delegatedEvents)
        h2(a, g, m2.delegateListener), h2(a, g, m2.delegateUseCapture, true);
      for (var x = p2 && p2.events, T = 0; T < f2.length; T++) {
        var C = f2[T];
        h2(a, C.type, C.listener, x);
      }
    }
    __name(is, "is");
    u2(is, "Hn");
    var Gd = { id: "core/interactions", install: function(n) {
      for (var o2 = {}, a = 0; a < ns.length; a++) {
        var s = ns[a];
        o2[s] = Yl(s, n);
      }
      var p2, f2 = L.default.pEventTypes;
      function m2() {
        for (var h2 = 0; h2 < n.interactions.list.length; h2++) {
          var g = n.interactions.list[h2];
          if (g.pointerIsDown && g.pointerType === "touch" && !g._interacting)
            for (var x = function() {
              var C = g.pointers[T];
              n.documents.some(function(N2) {
                var G2 = N2.doc;
                return (0, z2.nodeContains)(G2, C.downTarget);
              }) || g.removePointer(C.pointer, C.event);
            }, T = 0; T < g.pointers.length; T++)
              x();
        }
      }
      __name(m2, "m");
      u2(m2, "a"), (p2 = S.default.PointerEvent ? [{ type: f2.down, listener: m2 }, { type: f2.down, listener: o2.pointerDown }, { type: f2.move, listener: o2.pointerMove }, { type: f2.up, listener: o2.pointerUp }, { type: f2.cancel, listener: o2.pointerUp }] : [{ type: "mousedown", listener: o2.pointerDown }, { type: "mousemove", listener: o2.pointerMove }, { type: "mouseup", listener: o2.pointerUp }, { type: "touchstart", listener: m2 }, { type: "touchstart", listener: o2.pointerDown }, { type: "touchmove", listener: o2.pointerMove }, { type: "touchend", listener: o2.pointerUp }, { type: "touchcancel", listener: o2.pointerUp }]).push({ type: "blur", listener: function(h2) {
        for (var g = 0; g < n.interactions.list.length; g++)
          n.interactions.list[g].documentBlur(h2);
      } }), n.prevTouchTime = 0, n.Interaction = function(h2) {
        (function(D2, H) {
          if (typeof H != "function" && H !== null)
            throw new TypeError("Super expression must either be null or a function");
          D2.prototype = Object.create(H && H.prototype, { constructor: { value: D2, writable: true, configurable: true } }), H && Xl(D2, H);
        })(G2, h2);
        var g, x, T, C, N2 = (T = G2, C = function() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch (D2) {
            return false;
          }
        }(), function() {
          var D2, H = rs(T);
          if (C) {
            var Z = rs(this).constructor;
            D2 = Reflect.construct(H, arguments, Z);
          } else
            D2 = H.apply(this, arguments);
          return Nd(this, D2);
        });
        function G2() {
          return zd(this, G2), N2.apply(this, arguments);
        }
        __name(G2, "G");
        return u2(G2, "s"), g = G2, (x = [{ key: "pointerMoveTolerance", get: function() {
          return n.interactions.pointerMoveTolerance;
        }, set: function(D2) {
          n.interactions.pointerMoveTolerance = D2;
        } }, { key: "_now", value: function() {
          return n.now();
        } }]) && kd(g.prototype, x), G2;
      }(Mt.default), n.interactions = { list: [], new: function(h2) {
        h2.scopeFire = function(x, T) {
          return n.fire(x, T);
        };
        var g = new n.Interaction(h2);
        return n.interactions.list.push(g), g;
      }, listeners: o2, docEvents: p2, pointerMoveTolerance: 1 }, n.usePlugin(Wn.default);
    }, listeners: { "scope:add-document": function(n) {
      return is(n, "add");
    }, "scope:remove-document": function(n) {
      return is(n, "remove");
    }, "interactable:unset": function(n, o2) {
      for (var a = n.interactable, s = o2.interactions.list.length - 1; s >= 0; s--) {
        var p2 = o2.interactions.list[s];
        p2.interactable === a && (p2.stop(), o2.fire("interactions:destroy", { interaction: p2 }), p2.destroy(), o2.interactions.list.length > 2 && o2.interactions.list.splice(s, 1));
      }
    } }, onDocSignal: is, doOnInteractions: Yl, methodNames: ns };
    Lo.default = Gd;
    var Ri = {};
    function Jl(n) {
      return (Jl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(Jl, "Jl");
    u2(Jl, "Jn");
    function os(n, o2, a) {
      return (os = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(s, p2, f2) {
        var m2 = function(g, x) {
          for (; !Object.prototype.hasOwnProperty.call(g, x) && (g = Xn(g)) !== null; )
            ;
          return g;
        }(s, p2);
        if (m2) {
          var h2 = Object.getOwnPropertyDescriptor(m2, p2);
          return h2.get ? h2.get.call(f2) : h2.value;
        }
      })(n, o2, a || n);
    }
    __name(os, "os");
    u2(os, "Qn");
    function Kl(n, o2) {
      return (Kl = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o2);
    }
    __name(Kl, "Kl");
    u2(Kl, "tr");
    function Ld(n, o2) {
      return !o2 || Jl(o2) !== "object" && typeof o2 != "function" ? function(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }(n) : o2;
    }
    __name(Ld, "Ld");
    u2(Ld, "er");
    function Xn(n) {
      return (Xn = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(n);
    }
    __name(Xn, "Xn");
    u2(Xn, "nr");
    function Ql(n, o2) {
      if (!(n instanceof o2))
        throw new TypeError("Cannot call a class as a function");
    }
    __name(Ql, "Ql");
    u2(Ql, "rr");
    function eu(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(eu, "eu");
    u2(eu, "or");
    function tu(n, o2, a) {
      return o2 && eu(n.prototype, o2), a && eu(n, a), n;
    }
    __name(tu, "tu");
    u2(tu, "ir");
    function vt(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(vt, "vt");
    u2(vt, "ar"), Object.defineProperty(Ri, "__esModule", { value: true }), Ri.initScope = ru, Ri.Scope = void 0;
    var qd = function() {
      function n() {
        var o2 = this;
        Ql(this, n), vt(this, "id", "__interact_scope_".concat(Math.floor(100 * Math.random()))), vt(this, "isInitialized", false), vt(this, "listenerMaps", []), vt(this, "browser", L.default), vt(this, "defaults", (0, dn.default)(Oi.defaults)), vt(this, "Eventable", Ai.Eventable), vt(this, "actions", { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }), vt(this, "interactStatic", (0, Ka.createInteractStatic)(this)), vt(this, "InteractEvent", Ci.InteractEvent), vt(this, "Interactable", void 0), vt(this, "interactables", new zo.InteractableSet(this)), vt(this, "_win", void 0), vt(this, "document", void 0), vt(this, "window", void 0), vt(this, "documents", []), vt(this, "_plugins", { list: [], map: {} }), vt(this, "onWindowUnload", function(s) {
          return o2.removeDocument(s.target);
        });
        var a = this;
        this.Interactable = function(s) {
          (function(g, x) {
            if (typeof x != "function" && x !== null)
              throw new TypeError("Super expression must either be null or a function");
            g.prototype = Object.create(x && x.prototype, { constructor: { value: g, writable: true, configurable: true } }), x && Kl(g, x);
          })(h2, s);
          var p2, f2, m2 = (p2 = h2, f2 = function() {
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
            var g, x = Xn(p2);
            if (f2) {
              var T = Xn(this).constructor;
              g = Reflect.construct(x, arguments, T);
            } else
              g = x.apply(this, arguments);
            return Ld(this, g);
          });
          function h2() {
            return Ql(this, h2), m2.apply(this, arguments);
          }
          __name(h2, "h");
          return u2(h2, "i"), tu(h2, [{ key: "_defaults", get: function() {
            return a.defaults;
          } }, { key: "set", value: function(g) {
            return os(Xn(h2.prototype), "set", this).call(this, g), a.fire("interactable:set", { options: g, interactable: this }), this;
          } }, { key: "unset", value: function() {
            os(Xn(h2.prototype), "unset", this).call(this), a.interactables.list.splice(a.interactables.list.indexOf(this), 1), a.fire("interactable:unset", { interactable: this });
          } }]), h2;
        }(Ro.Interactable);
      }
      __name(n, "n");
      return u2(n, "t"), tu(n, [{ key: "addListeners", value: function(o2, a) {
        this.listenerMaps.push({ id: a, map: o2 });
      } }, { key: "fire", value: function(o2, a) {
        for (var s = 0; s < this.listenerMaps.length; s++) {
          var p2 = this.listenerMaps[s].map[o2];
          if (p2 && p2(a, this, o2) === false)
            return false;
        }
      } }, { key: "init", value: function(o2) {
        return this.isInitialized ? this : ru(this, o2);
      } }, { key: "pluginIsInstalled", value: function(o2) {
        return this._plugins.map[o2.id] || this._plugins.list.indexOf(o2) !== -1;
      } }, { key: "usePlugin", value: function(o2, a) {
        if (!this.isInitialized)
          return this;
        if (this.pluginIsInstalled(o2))
          return this;
        if (o2.id && (this._plugins.map[o2.id] = o2), this._plugins.list.push(o2), o2.install && o2.install(this, a), o2.listeners && o2.before) {
          for (var s = 0, p2 = this.listenerMaps.length, f2 = o2.before.reduce(function(h2, g) {
            return h2[g] = true, h2[nu(g)] = true, h2;
          }, {}); s < p2; s++) {
            var m2 = this.listenerMaps[s].id;
            if (f2[m2] || f2[nu(m2)])
              break;
          }
          this.listenerMaps.splice(s, 0, { id: o2.id, map: o2.listeners });
        } else
          o2.listeners && this.listenerMaps.push({ id: o2.id, map: o2.listeners });
        return this;
      } }, { key: "addDocument", value: function(o2, a) {
        if (this.getDocIndex(o2) !== -1)
          return false;
        var s = e.getWindow(o2);
        a = a ? (0, W.default)({}, a) : {}, this.documents.push({ doc: o2, options: a }), this.events.documents.push(o2), o2 !== this.document && this.events.add(s, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: o2, window: s, scope: this, options: a });
      } }, { key: "removeDocument", value: function(o2) {
        var a = this.getDocIndex(o2), s = e.getWindow(o2), p2 = this.documents[a].options;
        this.events.remove(s, "unload", this.onWindowUnload), this.documents.splice(a, 1), this.events.documents.splice(a, 1), this.fire("scope:remove-document", { doc: o2, window: s, scope: this, options: p2 });
      } }, { key: "getDocIndex", value: function(o2) {
        for (var a = 0; a < this.documents.length; a++)
          if (this.documents[a].doc === o2)
            return a;
        return -1;
      } }, { key: "getDocOptions", value: function(o2) {
        var a = this.getDocIndex(o2);
        return a === -1 ? null : this.documents[a].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), n;
    }();
    function ru(n, o2) {
      return n.isInitialized = true, c2.default.window(o2) && e.init(o2), S.default.init(o2), L.default.init(o2), kt.default.init(o2), n.window = o2, n.document = o2.document, n.usePlugin(Lo.default), n.usePlugin(ko.default), n;
    }
    __name(ru, "ru");
    u2(ru, "lr");
    function nu(n) {
      return n && n.replace(/\/.*$/, "");
    }
    __name(nu, "nu");
    u2(nu, "ur"), Ri.Scope = qd;
    var gt = {};
    Object.defineProperty(gt, "__esModule", { value: true }), gt.default = void 0;
    var iu = new Ri.Scope(), jd = iu.interactStatic;
    gt.default = jd;
    var Bd = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : void 0;
    iu.init(Bd);
    var qo = {};
    Object.defineProperty(qo, "__esModule", { value: true }), qo.default = void 0, qo.default = function() {
    };
    var jo = {};
    Object.defineProperty(jo, "__esModule", { value: true }), jo.default = void 0, jo.default = function() {
    };
    var Bo = {};
    function ou(n, o2) {
      return function(a) {
        if (Array.isArray(a))
          return a;
      }(n) || function(a, s) {
        if (typeof Symbol != "undefined" && Symbol.iterator in Object(a)) {
          var p2 = [], f2 = true, m2 = false, h2 = void 0;
          try {
            for (var g, x = a[Symbol.iterator](); !(f2 = (g = x.next()).done) && (p2.push(g.value), !s || p2.length !== s); f2 = true)
              ;
          } catch (T) {
            m2 = true, h2 = T;
          } finally {
            try {
              f2 || x.return == null || x.return();
            } finally {
              if (m2)
                throw h2;
            }
          }
          return p2;
        }
      }(n, o2) || function(a, s) {
        if (a) {
          if (typeof a == "string")
            return au(a, s);
          var p2 = Object.prototype.toString.call(a).slice(8, -1);
          return p2 === "Object" && a.constructor && (p2 = a.constructor.name), p2 === "Map" || p2 === "Set" ? Array.from(a) : p2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p2) ? au(a, s) : void 0;
        }
      }(n, o2) || function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    __name(ou, "ou");
    u2(ou, "yr");
    function au(n, o2) {
      (o2 == null || o2 > n.length) && (o2 = n.length);
      for (var a = 0, s = Array(o2); a < o2; a++)
        s[a] = n[a];
      return s;
    }
    __name(au, "au");
    u2(au, "mr"), Object.defineProperty(Bo, "__esModule", { value: true }), Bo.default = void 0, Bo.default = function(n) {
      var o2 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(s) {
        var p2 = ou(s, 2), f2 = p2[0], m2 = p2[1];
        return f2 in n || m2 in n;
      }), a = u2(function(s, p2) {
        for (var f2 = n.range, m2 = n.limits, h2 = m2 === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : m2, g = n.offset, x = g === void 0 ? { x: 0, y: 0 } : g, T = { range: f2, grid: n, x: null, y: null }, C = 0; C < o2.length; C++) {
          var N2 = ou(o2[C], 2), G2 = N2[0], D2 = N2[1], H = Math.round((s - x.x) / n[G2]), Z = Math.round((p2 - x.y) / n[D2]);
          T[G2] = Math.max(h2.left, Math.min(h2.right, H * n[G2] + x.x)), T[D2] = Math.max(h2.top, Math.min(h2.bottom, Z * n[D2] + x.y));
        }
        return T;
      }, "n");
      return a.grid = n, a.coordFields = o2, a;
    };
    var zi = {};
    Object.defineProperty(zi, "__esModule", { value: true }), Object.defineProperty(zi, "edgeTarget", { enumerable: true, get: function() {
      return qo.default;
    } }), Object.defineProperty(zi, "elements", { enumerable: true, get: function() {
      return jo.default;
    } }), Object.defineProperty(zi, "grid", { enumerable: true, get: function() {
      return Bo.default;
    } });
    var $o = {};
    Object.defineProperty($o, "__esModule", { value: true }), $o.default = void 0;
    var $d = { id: "snappers", install: function(n) {
      var o2 = n.interactStatic;
      o2.snappers = (0, W.default)(o2.snappers || {}, zi), o2.createSnapGrid = o2.snappers.grid;
    } };
    $o.default = $d;
    var Yn = {};
    function su(n, o2) {
      var a = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(n);
        o2 && (s = s.filter(function(p2) {
          return Object.getOwnPropertyDescriptor(n, p2).enumerable;
        })), a.push.apply(a, s);
      }
      return a;
    }
    __name(su, "su");
    u2(su, "Pr");
    function as(n) {
      for (var o2 = 1; o2 < arguments.length; o2++) {
        var a = arguments[o2] != null ? arguments[o2] : {};
        o2 % 2 ? su(Object(a), true).forEach(function(s) {
          Hd(n, s, a[s]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : su(Object(a)).forEach(function(s) {
          Object.defineProperty(n, s, Object.getOwnPropertyDescriptor(a, s));
        });
      }
      return n;
    }
    __name(as, "as");
    u2(as, "Or");
    function Hd(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(Hd, "Hd");
    u2(Hd, "Sr"), Object.defineProperty(Yn, "__esModule", { value: true }), Yn.aspectRatio = Yn.default = void 0;
    var lu = { start: function(n) {
      var o2 = n.state, a = n.rect, s = n.edges, p2 = n.pageCoords, f2 = o2.options.ratio, m2 = o2.options, h2 = m2.equalDelta, g = m2.modifiers;
      f2 === "preserve" && (f2 = a.width / a.height), o2.startCoords = (0, W.default)({}, p2), o2.startRect = (0, W.default)({}, a), o2.ratio = f2, o2.equalDelta = h2;
      var x = o2.linkedEdges = { top: s.top || s.left && !s.bottom, left: s.left || s.top && !s.right, bottom: s.bottom || s.right && !s.top, right: s.right || s.bottom && !s.left };
      if (o2.xIsPrimaryAxis = !(!s.left && !s.right), o2.equalDelta)
        o2.edgeSign = (x.left ? 1 : -1) * (x.top ? 1 : -1);
      else {
        var T = o2.xIsPrimaryAxis ? x.top : x.left;
        o2.edgeSign = T ? -1 : 1;
      }
      if ((0, W.default)(n.edges, x), g && g.length) {
        var C = new fn.default(n.interaction);
        C.copyFrom(n.interaction.modification), C.prepareStates(g), o2.subModification = C, C.startAll(as({}, n));
      }
    }, set: function(n) {
      var o2 = n.state, a = n.rect, s = n.coords, p2 = (0, W.default)({}, s), f2 = o2.equalDelta ? Fd : Ud;
      if (f2(o2, o2.xIsPrimaryAxis, s, a), !o2.subModification)
        return null;
      var m2 = (0, W.default)({}, a);
      (0, ce.addEdges)(o2.linkedEdges, m2, { x: s.x - p2.x, y: s.y - p2.y });
      var h2 = o2.subModification.setAll(as(as({}, n), {}, { rect: m2, edges: o2.linkedEdges, pageCoords: s, prevCoords: s, prevRect: m2 })), g = h2.delta;
      return h2.changed && (f2(o2, Math.abs(g.x) > Math.abs(g.y), h2.coords, h2.rect), (0, W.default)(s, h2.coords)), h2.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function Fd(n, o2, a) {
      var s = n.startCoords, p2 = n.edgeSign;
      o2 ? a.y = s.y + (a.x - s.x) * p2 : a.x = s.x + (a.y - s.y) * p2;
    }
    __name(Fd, "Fd");
    u2(Fd, "Tr");
    function Ud(n, o2, a, s) {
      var p2 = n.startRect, f2 = n.startCoords, m2 = n.ratio, h2 = n.edgeSign;
      if (o2) {
        var g = s.width / m2;
        a.y = f2.y + (g - p2.height) * h2;
      } else {
        var x = s.height * m2;
        a.x = f2.x + (x - p2.width) * h2;
      }
    }
    __name(Ud, "Ud");
    u2(Ud, "Mr"), Yn.aspectRatio = lu;
    var Wd = (0, ht.makeModifier)(lu, "aspectRatio");
    Yn.default = Wd;
    var mn = {};
    Object.defineProperty(mn, "__esModule", { value: true }), mn.default = void 0;
    var uu = u2(function() {
    }, "Ir");
    uu._defaults = {};
    var Vd = uu;
    mn.default = Vd;
    var ss = {};
    Object.defineProperty(ss, "__esModule", { value: true }), Object.defineProperty(ss, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var Et = {};
    function ls(n, o2, a) {
      return c2.default.func(n) ? ce.resolveRectLike(n, o2.interactable, o2.element, [a.x, a.y, o2]) : ce.resolveRectLike(n, o2.interactable, o2.element);
    }
    __name(ls, "ls");
    u2(ls, "zr"), Object.defineProperty(Et, "__esModule", { value: true }), Et.getRestrictionRect = ls, Et.restrict = Et.default = void 0;
    var cu = { start: function(n) {
      var o2 = n.rect, a = n.startOffset, s = n.state, p2 = n.interaction, f2 = n.pageCoords, m2 = s.options, h2 = m2.elementRect, g = (0, W.default)({ left: 0, top: 0, right: 0, bottom: 0 }, m2.offset || {});
      if (o2 && h2) {
        var x = ls(m2.restriction, p2, f2);
        if (x) {
          var T = x.right - x.left - o2.width, C = x.bottom - x.top - o2.height;
          T < 0 && (g.left += T, g.right += T), C < 0 && (g.top += C, g.bottom += C);
        }
        g.left += a.left - o2.width * h2.left, g.top += a.top - o2.height * h2.top, g.right += a.right - o2.width * (1 - h2.right), g.bottom += a.bottom - o2.height * (1 - h2.bottom);
      }
      s.offset = g;
    }, set: function(n) {
      var o2 = n.coords, a = n.interaction, s = n.state, p2 = s.options, f2 = s.offset, m2 = ls(p2.restriction, a, o2);
      if (m2) {
        var h2 = ce.xywhToTlbr(m2);
        o2.x = Math.max(Math.min(h2.right - f2.right, o2.x), h2.left + f2.left), o2.y = Math.max(Math.min(h2.bottom - f2.bottom, o2.y), h2.top + f2.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } };
    Et.restrict = cu;
    var Xd = (0, ht.makeModifier)(cu, "restrict");
    Et.default = Xd;
    var yr = {};
    Object.defineProperty(yr, "__esModule", { value: true }), yr.restrictEdges = yr.default = void 0;
    var pu = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, du = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function fu(n, o2) {
      for (var a = ["top", "left", "bottom", "right"], s = 0; s < a.length; s++) {
        var p2 = a[s];
        p2 in n || (n[p2] = o2[p2]);
      }
      return n;
    }
    __name(fu, "fu");
    u2(fu, "Wr");
    var hu = { noInner: pu, noOuter: du, start: function(n) {
      var o2, a = n.interaction, s = n.startOffset, p2 = n.state, f2 = p2.options;
      if (f2) {
        var m2 = (0, Et.getRestrictionRect)(f2.offset, a, a.coords.start.page);
        o2 = ce.rectToXY(m2);
      }
      o2 = o2 || { x: 0, y: 0 }, p2.offset = { top: o2.y + s.top, left: o2.x + s.left, bottom: o2.y - s.bottom, right: o2.x - s.right };
    }, set: function(n) {
      var o2 = n.coords, a = n.edges, s = n.interaction, p2 = n.state, f2 = p2.offset, m2 = p2.options;
      if (a) {
        var h2 = (0, W.default)({}, o2), g = (0, Et.getRestrictionRect)(m2.inner, s, h2) || {}, x = (0, Et.getRestrictionRect)(m2.outer, s, h2) || {};
        fu(g, pu), fu(x, du), a.top ? o2.y = Math.min(Math.max(x.top + f2.top, h2.y), g.top + f2.top) : a.bottom && (o2.y = Math.max(Math.min(x.bottom + f2.bottom, h2.y), g.bottom + f2.bottom)), a.left ? o2.x = Math.min(Math.max(x.left + f2.left, h2.x), g.left + f2.left) : a.right && (o2.x = Math.max(Math.min(x.right + f2.right, h2.x), g.right + f2.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } };
    yr.restrictEdges = hu;
    var Yd = (0, ht.makeModifier)(hu, "restrictEdges");
    yr.default = Yd;
    var Zn = {};
    Object.defineProperty(Zn, "__esModule", { value: true }), Zn.restrictRect = Zn.default = void 0;
    var Zd = (0, W.default)({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(n) {
    } }, Et.restrict.defaults), vu = { start: Et.restrict.start, set: Et.restrict.set, defaults: Zd };
    Zn.restrictRect = vu;
    var Jd = (0, ht.makeModifier)(vu, "restrictRect");
    Zn.default = Jd;
    var Jn = {};
    Object.defineProperty(Jn, "__esModule", { value: true }), Jn.restrictSize = Jn.default = void 0;
    var Kd = { width: -1 / 0, height: -1 / 0 }, Qd = { width: 1 / 0, height: 1 / 0 }, mu = { start: function(n) {
      return yr.restrictEdges.start(n);
    }, set: function(n) {
      var o2 = n.interaction, a = n.state, s = n.rect, p2 = n.edges, f2 = a.options;
      if (p2) {
        var m2 = ce.tlbrToXywh((0, Et.getRestrictionRect)(f2.min, o2, n.coords)) || Kd, h2 = ce.tlbrToXywh((0, Et.getRestrictionRect)(f2.max, o2, n.coords)) || Qd;
        a.options = { endOnly: f2.endOnly, inner: (0, W.default)({}, yr.restrictEdges.noInner), outer: (0, W.default)({}, yr.restrictEdges.noOuter) }, p2.top ? (a.options.inner.top = s.bottom - m2.height, a.options.outer.top = s.bottom - h2.height) : p2.bottom && (a.options.inner.bottom = s.top + m2.height, a.options.outer.bottom = s.top + h2.height), p2.left ? (a.options.inner.left = s.right - m2.width, a.options.outer.left = s.right - h2.width) : p2.right && (a.options.inner.right = s.left + m2.width, a.options.outer.right = s.left + h2.width), yr.restrictEdges.set(n), a.options = f2;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } };
    Jn.restrictSize = mu;
    var ef = (0, ht.makeModifier)(mu, "restrictSize");
    Jn.default = ef;
    var us = {};
    Object.defineProperty(us, "__esModule", { value: true }), Object.defineProperty(us, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var Yr = {};
    Object.defineProperty(Yr, "__esModule", { value: true }), Yr.snap = Yr.default = void 0;
    var gu = { start: function(n) {
      var o2, a = n.interaction, s = n.interactable, p2 = n.element, f2 = n.rect, m2 = n.state, h2 = n.startOffset, g = m2.options, x = g.offsetWithOrigin ? function(N2) {
        var G2 = N2.interaction.element;
        return (0, ce.rectToXY)((0, ce.resolveRectLike)(N2.state.options.origin, null, null, [G2])) || (0, Ge.default)(N2.interactable, G2, N2.interaction.prepared.name);
      }(n) : { x: 0, y: 0 };
      if (g.offset === "startCoords")
        o2 = { x: a.coords.start.page.x, y: a.coords.start.page.y };
      else {
        var T = (0, ce.resolveRectLike)(g.offset, s, p2, [a]);
        (o2 = (0, ce.rectToXY)(T) || { x: 0, y: 0 }).x += x.x, o2.y += x.y;
      }
      var C = g.relativePoints;
      m2.offsets = f2 && C && C.length ? C.map(function(N2, G2) {
        return { index: G2, relativePoint: N2, x: h2.left - f2.width * N2.x + o2.x, y: h2.top - f2.height * N2.y + o2.y };
      }) : [{ index: 0, relativePoint: null, x: o2.x, y: o2.y }];
    }, set: function(n) {
      var o2 = n.interaction, a = n.coords, s = n.state, p2 = s.options, f2 = s.offsets, m2 = (0, Ge.default)(o2.interactable, o2.element, o2.prepared.name), h2 = (0, W.default)({}, a), g = [];
      p2.offsetWithOrigin || (h2.x -= m2.x, h2.y -= m2.y);
      for (var x = 0; x < f2.length; x++)
        for (var T = f2[x], C = h2.x - T.x, N2 = h2.y - T.y, G2 = 0, D2 = p2.targets.length; G2 < D2; G2++) {
          var H, Z = p2.targets[G2];
          (H = c2.default.func(Z) ? Z(C, N2, o2._proxy, T, G2) : Z) && g.push({ x: (c2.default.number(H.x) ? H.x : C) + T.x, y: (c2.default.number(H.y) ? H.y : N2) + T.y, range: c2.default.number(H.range) ? H.range : p2.range, source: Z, index: G2, offset: T });
        }
      for (var F2 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, ee = 0; ee < g.length; ee++) {
        var se = g[ee], pe = se.range, we = se.x - h2.x, qe = se.y - h2.y, be = (0, et.default)(we, qe), De = be <= pe;
        pe === 1 / 0 && F2.inRange && F2.range !== 1 / 0 && (De = false), F2.target && !(De ? F2.inRange && pe !== 1 / 0 ? be / pe < F2.distance / F2.range : pe === 1 / 0 && F2.range !== 1 / 0 || be < F2.distance : !F2.inRange && be < F2.distance) || (F2.target = se, F2.distance = be, F2.range = pe, F2.inRange = De, F2.delta.x = we, F2.delta.y = qe);
      }
      return F2.inRange && (a.x = F2.target.x, a.y = F2.target.y), s.closest = F2, F2;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } };
    Yr.snap = gu;
    var tf = (0, ht.makeModifier)(gu, "snap");
    Yr.default = tf;
    var Dr = {};
    function bu(n, o2) {
      (o2 == null || o2 > n.length) && (o2 = n.length);
      for (var a = 0, s = Array(o2); a < o2; a++)
        s[a] = n[a];
      return s;
    }
    __name(bu, "bu");
    u2(bu, "oo"), Object.defineProperty(Dr, "__esModule", { value: true }), Dr.snapSize = Dr.default = void 0;
    var yu = { start: function(n) {
      var o2 = n.state, a = n.edges, s = o2.options;
      if (!a)
        return null;
      n.state = { options: { targets: null, relativePoints: [{ x: a.left ? 0 : 1, y: a.top ? 0 : 1 }], offset: s.offset || "self", origin: { x: 0, y: 0 }, range: s.range } }, o2.targetFields = o2.targetFields || [["width", "height"], ["x", "y"]], Yr.snap.start(n), o2.offsets = n.state.offsets, n.state = o2;
    }, set: function(n) {
      var o2, a, s = n.interaction, p2 = n.state, f2 = n.coords, m2 = p2.options, h2 = p2.offsets, g = { x: f2.x - h2[0].x, y: f2.y - h2[0].y };
      p2.options = (0, W.default)({}, m2), p2.options.targets = [];
      for (var x = 0; x < (m2.targets || []).length; x++) {
        var T = (m2.targets || [])[x], C = void 0;
        if (C = c2.default.func(T) ? T(g.x, g.y, s) : T) {
          for (var N2 = 0; N2 < p2.targetFields.length; N2++) {
            var G2 = (o2 = p2.targetFields[N2], a = 2, function(F2) {
              if (Array.isArray(F2))
                return F2;
            }(o2) || function(F2, ee) {
              if (typeof Symbol != "undefined" && Symbol.iterator in Object(F2)) {
                var se = [], pe = true, we = false, qe = void 0;
                try {
                  for (var be, De = F2[Symbol.iterator](); !(pe = (be = De.next()).done) && (se.push(be.value), !ee || se.length !== ee); pe = true)
                    ;
                } catch (Ut) {
                  we = true, qe = Ut;
                } finally {
                  try {
                    pe || De.return == null || De.return();
                  } finally {
                    if (we)
                      throw qe;
                  }
                }
                return se;
              }
            }(o2, a) || function(F2, ee) {
              if (F2) {
                if (typeof F2 == "string")
                  return bu(F2, ee);
                var se = Object.prototype.toString.call(F2).slice(8, -1);
                return se === "Object" && F2.constructor && (se = F2.constructor.name), se === "Map" || se === "Set" ? Array.from(F2) : se === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(se) ? bu(F2, ee) : void 0;
              }
            }(o2, a) || function() {
              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
            }()), D2 = G2[0], H = G2[1];
            if (D2 in C || H in C) {
              C.x = C[D2], C.y = C[H];
              break;
            }
          }
          p2.options.targets.push(C);
        }
      }
      var Z = Yr.snap.set(n);
      return p2.options = m2, Z;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } };
    Dr.snapSize = yu;
    var rf = (0, ht.makeModifier)(yu, "snapSize");
    Dr.default = rf;
    var Kn = {};
    Object.defineProperty(Kn, "__esModule", { value: true }), Kn.snapEdges = Kn.default = void 0;
    var xu = { start: function(n) {
      var o2 = n.edges;
      return o2 ? (n.state.targetFields = n.state.targetFields || [[o2.left ? "left" : "right", o2.top ? "top" : "bottom"]], Dr.snapSize.start(n)) : null;
    }, set: Dr.snapSize.set, defaults: (0, W.default)((0, dn.default)(Dr.snapSize.defaults), { targets: null, range: null, offset: { x: 0, y: 0 } }) };
    Kn.snapEdges = xu;
    var nf = (0, ht.makeModifier)(xu, "snapEdges");
    Kn.default = nf;
    var cs = {};
    Object.defineProperty(cs, "__esModule", { value: true }), Object.defineProperty(cs, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var ps = {};
    Object.defineProperty(ps, "__esModule", { value: true }), Object.defineProperty(ps, "default", { enumerable: true, get: function() {
      return mn.default;
    } });
    var Qn = {};
    Object.defineProperty(Qn, "__esModule", { value: true }), Qn.default = void 0;
    var of = { aspectRatio: Yn.default, restrictEdges: yr.default, restrict: Et.default, restrictRect: Zn.default, restrictSize: Jn.default, snapEdges: Kn.default, snap: Yr.default, snapSize: Dr.default, spring: cs.default, avoid: ss.default, transform: ps.default, rubberband: us.default };
    Qn.default = of;
    var Ho = {};
    Object.defineProperty(Ho, "__esModule", { value: true }), Ho.default = void 0;
    var af = { id: "modifiers", install: function(n) {
      var o2 = n.interactStatic;
      for (var a in n.usePlugin(ht.default), n.usePlugin($o.default), o2.modifiers = Qn.default, Qn.default) {
        var s = Qn.default[a], p2 = s._defaults, f2 = s._methods;
        p2._methods = f2, n.defaults.perAction[a] = p2;
      }
    } };
    Ho.default = af;
    var gn = {};
    function wu(n) {
      return (wu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(wu, "wu");
    u2(wu, "mo");
    function sf(n, o2) {
      for (var a = 0; a < o2.length; a++) {
        var s = o2[a];
        s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(n, s.key, s);
      }
    }
    __name(sf, "sf");
    u2(sf, "bo");
    function Eu(n, o2) {
      return (Eu = Object.setPrototypeOf || function(a, s) {
        return a.__proto__ = s, a;
      })(n, o2);
    }
    __name(Eu, "Eu");
    u2(Eu, "xo");
    function lf(n, o2) {
      return !o2 || wu(o2) !== "object" && typeof o2 != "function" ? At(n) : o2;
    }
    __name(lf, "lf");
    u2(lf, "wo");
    function At(n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return n;
    }
    __name(At, "At");
    u2(At, "_o");
    function ds(n) {
      return (ds = Object.setPrototypeOf ? Object.getPrototypeOf : function(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      })(n);
    }
    __name(ds, "ds");
    u2(ds, "Po");
    function dr(n, o2, a) {
      return o2 in n ? Object.defineProperty(n, o2, { value: a, enumerable: true, configurable: true, writable: true }) : n[o2] = a, n;
    }
    __name(dr, "dr");
    u2(dr, "Oo"), Object.defineProperty(gn, "__esModule", { value: true }), gn.PointerEvent = gn.default = void 0;
    var uf = function(n) {
      (function(h2, g) {
        if (typeof g != "function" && g !== null)
          throw new TypeError("Super expression must either be null or a function");
        h2.prototype = Object.create(g && g.prototype, { constructor: { value: h2, writable: true, configurable: true } }), g && Eu(h2, g);
      })(m2, n);
      var o2, a, s, p2, f2 = (s = m2, p2 = function() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
          return false;
        if (typeof Proxy == "function")
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (h2) {
          return false;
        }
      }(), function() {
        var h2, g = ds(s);
        if (p2) {
          var x = ds(this).constructor;
          h2 = Reflect.construct(g, arguments, x);
        } else
          h2 = g.apply(this, arguments);
        return lf(this, h2);
      });
      function m2(h2, g, x, T, C, N2) {
        var G2;
        if (function(Z, F2) {
          if (!(Z instanceof F2))
            throw new TypeError("Cannot call a class as a function");
        }(this, m2), dr(At(G2 = f2.call(this, C)), "type", void 0), dr(At(G2), "originalEvent", void 0), dr(At(G2), "pointerId", void 0), dr(At(G2), "pointerType", void 0), dr(At(G2), "double", void 0), dr(At(G2), "pageX", void 0), dr(At(G2), "pageY", void 0), dr(At(G2), "clientX", void 0), dr(At(G2), "clientY", void 0), dr(At(G2), "dt", void 0), dr(At(G2), "eventable", void 0), K.pointerExtend(At(G2), x), x !== g && K.pointerExtend(At(G2), g), G2.timeStamp = N2, G2.originalEvent = x, G2.type = h2, G2.pointerId = K.getPointerId(g), G2.pointerType = K.getPointerType(g), G2.target = T, G2.currentTarget = null, h2 === "tap") {
          var D2 = C.getPointerIndex(g);
          G2.dt = G2.timeStamp - C.pointers[D2].downTime;
          var H = G2.timeStamp - C.tapTime;
          G2.double = !!(C.prevTap && C.prevTap.type !== "doubletap" && C.prevTap.target === G2.target && H < 500);
        } else
          h2 === "doubletap" && (G2.dt = g.timeStamp - C.tapTime);
        return G2;
      }
      __name(m2, "m");
      return u2(m2, "a"), o2 = m2, (a = [{ key: "_subtractOrigin", value: function(h2) {
        var g = h2.x, x = h2.y;
        return this.pageX -= g, this.pageY -= x, this.clientX -= g, this.clientY -= x, this;
      } }, { key: "_addOrigin", value: function(h2) {
        var g = h2.x, x = h2.y;
        return this.pageX += g, this.pageY += x, this.clientX += g, this.clientY += x, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]) && sf(o2.prototype, a), m2;
    }(Rt.BaseEvent);
    gn.PointerEvent = gn.default = uf;
    var ki = {};
    Object.defineProperty(ki, "__esModule", { value: true }), ki.default = void 0;
    var Fo = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(n) {
      n.pointerEvents = Fo, n.defaults.actions.pointerEvents = Fo.defaults, (0, W.default)(n.actions.phaselessTypes, Fo.types);
    }, listeners: { "interactions:new": function(n) {
      var o2 = n.interaction;
      o2.prevTap = null, o2.tapTime = 0;
    }, "interactions:update-pointer": function(n) {
      var o2 = n.down, a = n.pointerInfo;
      !o2 && a.hold || (a.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(n, o2) {
      var a = n.interaction, s = n.pointer, p2 = n.event, f2 = n.eventTarget;
      n.duplicate || a.pointerIsDown && !a.pointerWasMoved || (a.pointerIsDown && fs(n), Zr({ interaction: a, pointer: s, event: p2, eventTarget: f2, type: "move" }, o2));
    }, "interactions:down": function(n, o2) {
      (function(a, s) {
        for (var p2 = a.interaction, f2 = a.pointer, m2 = a.event, h2 = a.eventTarget, g = a.pointerIndex, x = p2.pointers[g].hold, T = z2.getPath(h2), C = { interaction: p2, pointer: f2, event: m2, eventTarget: h2, type: "hold", targets: [], path: T, node: null }, N2 = 0; N2 < T.length; N2++) {
          var G2 = T[N2];
          C.node = G2, s.fire("pointerEvents:collect-targets", C);
        }
        if (C.targets.length) {
          for (var D2 = 1 / 0, H = 0; H < C.targets.length; H++) {
            var Z = C.targets[H].eventable.options.holdDuration;
            Z < D2 && (D2 = Z);
          }
          x.duration = D2, x.timeout = setTimeout(function() {
            Zr({ interaction: p2, eventTarget: h2, pointer: f2, event: m2, type: "hold" }, s);
          }, D2);
        }
      })(n, o2), Zr(n, o2);
    }, "interactions:up": function(n, o2) {
      fs(n), Zr(n, o2), function(a, s) {
        var p2 = a.interaction, f2 = a.pointer, m2 = a.event, h2 = a.eventTarget;
        p2.pointerWasMoved || Zr({ interaction: p2, eventTarget: h2, pointer: f2, event: m2, type: "tap" }, s);
      }(n, o2);
    }, "interactions:cancel": function(n, o2) {
      fs(n), Zr(n, o2);
    } }, PointerEvent: gn.PointerEvent, fire: Zr, collectEventTargets: Su, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function Zr(n, o2) {
      var a = n.interaction, s = n.pointer, p2 = n.event, f2 = n.eventTarget, m2 = n.type, h2 = n.targets, g = h2 === void 0 ? Su(n, o2) : h2, x = new gn.PointerEvent(m2, s, p2, f2, a, o2.now());
      o2.fire("pointerEvents:new", { pointerEvent: x });
      for (var T = { interaction: a, pointer: s, event: p2, eventTarget: f2, targets: g, type: m2, pointerEvent: x }, C = 0; C < g.length; C++) {
        var N2 = g[C];
        for (var G2 in N2.props || {})
          x[G2] = N2.props[G2];
        var D2 = (0, Ge.default)(N2.eventable, N2.node);
        if (x._subtractOrigin(D2), x.eventable = N2.eventable, x.currentTarget = N2.node, N2.eventable.fire(x), x._addOrigin(D2), x.immediatePropagationStopped || x.propagationStopped && C + 1 < g.length && g[C + 1].node !== x.currentTarget)
          break;
      }
      if (o2.fire("pointerEvents:fired", T), m2 === "tap") {
        var H = x.double ? Zr({ interaction: a, pointer: s, event: p2, eventTarget: f2, type: "doubletap" }, o2) : x;
        a.prevTap = H, a.tapTime = H.timeStamp;
      }
      return x;
    }
    __name(Zr, "Zr");
    u2(Zr, "Mo");
    function Su(n, o2) {
      var a = n.interaction, s = n.pointer, p2 = n.event, f2 = n.eventTarget, m2 = n.type, h2 = a.getPointerIndex(s), g = a.pointers[h2];
      if (m2 === "tap" && (a.pointerWasMoved || !g || g.downTarget !== f2))
        return [];
      for (var x = z2.getPath(f2), T = { interaction: a, pointer: s, event: p2, eventTarget: f2, type: m2, path: x, targets: [], node: null }, C = 0; C < x.length; C++) {
        var N2 = x[C];
        T.node = N2, o2.fire("pointerEvents:collect-targets", T);
      }
      return m2 === "hold" && (T.targets = T.targets.filter(function(G2) {
        var D2;
        return G2.eventable.options.holdDuration === ((D2 = a.pointers[h2]) == null ? void 0 : D2.hold.duration);
      })), T.targets;
    }
    __name(Su, "Su");
    u2(Su, "jo");
    function fs(n) {
      var o2 = n.interaction, a = n.pointerIndex, s = o2.pointers[a].hold;
      s && s.timeout && (clearTimeout(s.timeout), s.timeout = null);
    }
    __name(fs, "fs");
    u2(fs, "ko");
    var cf = Fo;
    ki.default = cf;
    var Uo = {};
    function pf(n) {
      var o2 = n.interaction;
      o2.holdIntervalHandle && (clearInterval(o2.holdIntervalHandle), o2.holdIntervalHandle = null);
    }
    __name(pf, "pf");
    u2(pf, "Ao"), Object.defineProperty(Uo, "__esModule", { value: true }), Uo.default = void 0;
    var df = { id: "pointer-events/holdRepeat", install: function(n) {
      n.usePlugin(ki.default);
      var o2 = n.pointerEvents;
      o2.defaults.holdRepeatInterval = 0, o2.types.holdrepeat = n.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(n, o2) {
      return n["pointerEvents:".concat(o2)] = pf, n;
    }, { "pointerEvents:new": function(n) {
      var o2 = n.pointerEvent;
      o2.type === "hold" && (o2.count = (o2.count || 0) + 1);
    }, "pointerEvents:fired": function(n, o2) {
      var a = n.interaction, s = n.pointerEvent, p2 = n.eventTarget, f2 = n.targets;
      if (s.type === "hold" && f2.length) {
        var m2 = f2[0].eventable.options.holdRepeatInterval;
        m2 <= 0 || (a.holdIntervalHandle = setTimeout(function() {
          o2.pointerEvents.fire({ interaction: a, eventTarget: p2, type: "hold", pointer: s, event: s }, o2);
        }, m2));
      }
    } }) };
    Uo.default = df;
    var Wo = {};
    function ff(n) {
      return (0, W.default)(this.events.options, n), this;
    }
    __name(ff, "ff");
    u2(ff, "Co"), Object.defineProperty(Wo, "__esModule", { value: true }), Wo.default = void 0;
    var hf = { id: "pointer-events/interactableTargets", install: function(n) {
      var o2 = n.Interactable;
      o2.prototype.pointerEvents = ff;
      var a = o2.prototype._backCompatOption;
      o2.prototype._backCompatOption = function(s, p2) {
        var f2 = a.call(this, s, p2);
        return f2 === this && (this.events.options[s] = p2), f2;
      };
    }, listeners: { "pointerEvents:collect-targets": function(n, o2) {
      var a = n.targets, s = n.node, p2 = n.type, f2 = n.eventTarget;
      o2.interactables.forEachMatch(s, function(m2) {
        var h2 = m2.events, g = h2.options;
        h2.types[p2] && h2.types[p2].length && m2.testIgnoreAllow(g, s, f2) && a.push({ node: s, eventable: h2, props: { interactable: m2 } });
      });
    }, "interactable:new": function(n) {
      var o2 = n.interactable;
      o2.events.getRect = function(a) {
        return o2.getRect(a);
      };
    }, "interactable:set": function(n, o2) {
      var a = n.interactable, s = n.options;
      (0, W.default)(a.events.options, o2.pointerEvents.defaults), (0, W.default)(a.events.options, s.pointerEvents || {});
    } } };
    Wo.default = hf;
    var Vo = {};
    Object.defineProperty(Vo, "__esModule", { value: true }), Vo.default = void 0;
    var vf = { id: "pointer-events", install: function(n) {
      n.usePlugin(ki), n.usePlugin(Uo.default), n.usePlugin(Wo.default);
    } };
    Vo.default = vf;
    var Ni = {};
    function Tu(n) {
      var o2 = n.Interactable;
      n.actions.phases.reflow = true, o2.prototype.reflow = function(a) {
        return function(s, p2, f2) {
          for (var m2 = c2.default.string(s.target) ? xe.from(s._context.querySelectorAll(s.target)) : [s.target], h2 = f2.window.Promise, g = h2 ? [] : null, x = function() {
            var C = m2[T], N2 = s.getRect(C);
            if (!N2)
              return "break";
            var G2 = xe.find(f2.interactions.list, function(ee) {
              return ee.interacting() && ee.interactable === s && ee.element === C && ee.prepared.name === p2.name;
            }), D2 = void 0;
            if (G2)
              G2.move(), g && (D2 = G2._reflowPromise || new h2(function(ee) {
                G2._reflowResolve = ee;
              }));
            else {
              var H = (0, ce.tlbrToXywh)(N2), Z = { page: { x: H.x, y: H.y }, client: { x: H.x, y: H.y }, timeStamp: f2.now() }, F2 = K.coordsToEvent(Z);
              D2 = function(ee, se, pe, we, qe) {
                var be = ee.interactions.new({ pointerType: "reflow" }), De = { interaction: be, event: qe, pointer: qe, eventTarget: pe, phase: "reflow" };
                be.interactable = se, be.element = pe, be.prevEvent = qe, be.updatePointer(qe, qe, pe, true), K.setZeroCoords(be.coords.delta), (0, Gt.copyAction)(be.prepared, we), be._doPhase(De);
                var Ut = ee.window.Promise, Rr = Ut ? new Ut(function(hs) {
                  be._reflowResolve = hs;
                }) : void 0;
                return be._reflowPromise = Rr, be.start(we, se, pe), be._interacting ? (be.move(De), be.end(qe)) : (be.stop(), be._reflowResolve()), be.removePointer(qe, qe), Rr;
              }(f2, s, C, p2, F2);
            }
            g && g.push(D2);
          }, T = 0; T < m2.length && x() !== "break"; T++)
            ;
          return g && h2.all(g).then(function() {
            return s;
          });
        }(this, a, n);
      };
    }
    __name(Tu, "Tu");
    u2(Tu, "Wo"), Object.defineProperty(Ni, "__esModule", { value: true }), Ni.install = Tu, Ni.default = void 0;
    var mf = { id: "reflow", install: Tu, listeners: { "interactions:stop": function(n, o2) {
      var a = n.interaction;
      a.pointerType === "reflow" && (a._reflowResolve && a._reflowResolve(), xe.remove(o2.interactions.list, a));
    } } };
    Ni.default = mf;
    var Ft = { exports: {} };
    function Ou(n) {
      return (Ou = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(Ou, "Ou");
    u2(Ou, "Vo"), Object.defineProperty(Ft.exports, "__esModule", { value: true }), Ft.exports.default = void 0, gt.default.use(Wn.default), gt.default.use(vn.default), gt.default.use(Vo.default), gt.default.use(Vn.default), gt.default.use(Ho.default), gt.default.use(_o.default), gt.default.use(Pr.default), gt.default.use(Xr.default), gt.default.use(Ni.default);
    var gf = gt.default;
    if (Ft.exports.default = gf, Ou(Ft) === "object" && Ft)
      try {
        Ft.exports = gt.default;
      } catch (n) {
      }
    gt.default.default = gt.default, Ft = Ft.exports;
    var bn = { exports: {} };
    function Cu(n) {
      return (Cu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && typeof Symbol == "function" && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      })(n);
    }
    __name(Cu, "Cu");
    u2(Cu, "$o"), Object.defineProperty(bn.exports, "__esModule", { value: true }), bn.exports.default = void 0;
    var bf = Ft.default;
    if (bn.exports.default = bf, Cu(bn) === "object" && bn)
      try {
        bn.exports = Ft.default;
      } catch (n) {
      }
    return Ft.default.default = Ft.default, bn.exports;
  });
});
function Oe(r) {
  class e extends r {
    get active() {
      return this.hasAttribute("data-active");
    }
    set active(i) {
      i ? this.activate() : this.deactivate();
    }
    activate() {
      this.setAttribute("data-active", ""), this.dispatchEvent(new Event("operation-active", { bubbles: true }));
    }
    deactivate() {
      this.removeAttribute("data-active");
    }
  }
  __name(e, "e");
  return u2(e, "ActivateableMixinClass"), e;
}
__name(Oe, "Oe");
u2(Oe, "ActivateableMixin");
var vs = /* @__PURE__ */ new WeakSet();
function gs(r) {
  vs.add(r), r.shadowRoot && bs(r.shadowRoot), xs(r), ys(r.ownerDocument);
}
__name(gs, "gs");
u2(gs, "bind");
function bs(r) {
  xs(r), ys(r);
}
__name(bs, "bs");
u2(bs, "bindShadow");
var Yo = /* @__PURE__ */ new WeakMap();
function ys(r = document) {
  if (Yo.has(r))
    return Yo.get(r);
  let e = false, t = new MutationObserver((l) => {
    for (let c2 of l)
      if (c2.type === "attributes" && c2.target instanceof Element)
        ms(c2.target);
      else if (c2.type === "childList" && c2.addedNodes.length)
        for (let d2 of c2.addedNodes)
          d2 instanceof Element && xs(d2);
  });
  t.observe(r, { childList: true, subtree: true, attributeFilter: ["data-action"] });
  let i = { get closed() {
    return e;
  }, unsubscribe() {
    e = true, Yo.delete(r), t.disconnect();
  } };
  return Yo.set(r, i), i;
}
__name(ys, "ys");
u2(ys, "listenForBind");
function xs(r) {
  for (let e of r.querySelectorAll("[data-action]"))
    ms(e);
  r instanceof Element && r.hasAttribute("data-action") && ms(r);
}
__name(xs, "xs");
u2(xs, "bindElements");
function Of(r) {
  let e = r.currentTarget;
  for (let t of Au(e))
    if (r.type === t.type) {
      let i = e.closest(t.tag);
      vs.has(i) && typeof i[t.method] == "function" && i[t.method](r);
      let l = e.getRootNode();
      if (l instanceof ShadowRoot && vs.has(l.host) && l.host.matches(t.tag)) {
        let c2 = l.host;
        typeof c2[t.method] == "function" && c2[t.method](r);
      }
    }
}
__name(Of, "Of");
u2(Of, "handleEvent");
function* Au(r) {
  for (let e of (r.getAttribute("data-action") || "").trim().split(/\s+/)) {
    let t = e.lastIndexOf(":"), i = Math.max(0, e.lastIndexOf("#")) || e.length;
    yield { type: e.slice(0, t), tag: e.slice(t + 1, i), method: e.slice(i + 1) || "handleEvent" };
  }
}
__name(Au, "Au");
u2(Au, "bindings");
function ms(r) {
  for (let e of Au(r))
    r.addEventListener(e.type, Of);
}
__name(ms, "ms");
u2(ms, "bindActions");
function ws(r) {
  let e = r.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
  window.customElements.get(e) || (window[r.name] = r, window.customElements.define(e, r));
}
__name(ws, "ws");
u2(ws, "register");
function Es(r, e) {
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
__name(Es, "Es");
u2(Es, "findTarget");
function Ss(r, e) {
  let t = r.tagName.toLowerCase(), i = [];
  if (r.shadowRoot)
    for (let l of r.shadowRoot.querySelectorAll(`[data-targets~="${t}.${e}"]`))
      l.closest(t) || i.push(l);
  for (let l of r.querySelectorAll(`[data-targets~="${t}.${e}"]`))
    l.closest(t) === r && i.push(l);
  return i;
}
__name(Ss, "Ss");
u2(Ss, "findTargets");
function je(r, e) {
  Object.defineProperty(r, e, { configurable: true, get() {
    return Es(this, e);
  } });
}
__name(je, "je");
u2(je, "target");
function fr(r, e) {
  Object.defineProperty(r, e, { configurable: true, get() {
    return Ss(this, e);
  } });
}
__name(fr, "fr");
u2(fr, "targets");
function Ts(r) {
  for (let e of r.querySelectorAll("template[data-shadowroot]"))
    e.parentElement === r && r.attachShadow({ mode: e.getAttribute("data-shadowroot") === "closed" ? "closed" : "open" }).append(e.content.cloneNode(true));
}
__name(Ts, "Ts");
u2(Ts, "autoShadowRoot");
var Zo = /* @__PURE__ */ new WeakMap();
function j(r, e) {
  Zo.has(r) || Zo.set(r, []), Zo.get(r).push(e);
}
__name(j, "j");
u2(j, "attr");
var Pu = /* @__PURE__ */ new WeakSet();
function Jo(r, e) {
  if (!Pu.has(r)) {
    Pu.add(r), e || (e = Iu(Object.getPrototypeOf(r)));
    for (let t of e) {
      let i = r[t], l = Du(t), c2 = { configurable: true, get() {
        return this.getAttribute(l) || "";
      }, set(d2) {
        this.setAttribute(l, d2 || "");
      } };
      typeof i == "number" ? c2 = { configurable: true, get() {
        return Number(this.getAttribute(l) || 0);
      }, set(d2) {
        this.setAttribute(l, d2);
      } } : typeof i == "boolean" && (c2 = { configurable: true, get() {
        return this.hasAttribute(l);
      }, set(d2) {
        this.toggleAttribute(l, d2);
      } }), Object.defineProperty(r, t, c2), t in r && !r.hasAttribute(l) && c2.set.call(r, i);
    }
  }
}
__name(Jo, "Jo");
u2(Jo, "initializeAttrs");
function Iu(r) {
  let e = /* @__PURE__ */ new Set(), t = r;
  for (; t && t !== HTMLElement; ) {
    let i = Zo.get(t) || [];
    for (let l of i)
      e.add(l);
    t = Object.getPrototypeOf(t);
  }
  return e;
}
__name(Iu, "Iu");
u2(Iu, "getAttrNames");
function Du(r) {
  return `data-${r.replace(/([A-Z]($|[a-z]))/g, "-$1")}`.replace(/--/g, "-").toLowerCase();
}
__name(Du, "Du");
u2(Du, "attrToAttributeName");
function Os(r) {
  let e = r.observedAttributes || [];
  Object.defineProperty(r, "observedAttributes", { configurable: true, get() {
    return [...Iu(r.prototype)].map(Du).concat(e);
  }, set(t) {
    e = t;
  } });
}
__name(Os, "Os");
u2(Os, "defineObservedAttributes");
var Cf = /* @__PURE__ */ new WeakSet();
function Ru(r, e) {
  r.toggleAttribute("data-catalyst", true), customElements.upgrade(r), Cf.add(r), Ts(r), Jo(r), gs(r), e && e.call(r), r.shadowRoot && bs(r.shadowRoot);
}
__name(Ru, "Ru");
u2(Ru, "initializeInstance");
function zu(r, e, t, i, l) {
  Jo(r), e !== "data-catalyst" && l && l.call(r, e, t, i);
}
__name(zu, "zu");
u2(zu, "initializeAttributeChanged");
function ku(r) {
  Os(r), ws(r);
}
__name(ku, "ku");
u2(ku, "initializeClass");
function ne(r) {
  let e = r.prototype.connectedCallback;
  r.prototype.connectedCallback = function() {
    Ru(this, e);
  };
  let t = r.prototype.attributeChangedCallback;
  r.prototype.attributeChangedCallback = function(i, l, c2) {
    zu(this, i, l, c2, t);
  }, ku(r);
}
__name(ne, "ne");
u2(ne, "controller");
var yn = u2((r) => typeof r == "object" && r !== null && typeof r.angle == "string" && typeof r.reducedAngle == "string", "isAngleable");
function Jr(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.angle = "";
      this.reducedAngle = "";
    }
  }
  __name(e, "e");
  return u2(e, "AngleableMixinClass"), k([j], e.prototype, "angle", 2), k([j], e.prototype, "reducedAngle", 2), e;
}
__name(Jr, "Jr");
u2(Jr, "AngleableMixin");
var xn = u2((r) => typeof r == "object" && r !== null && typeof r.controls == "object", "isControllable");
function He(r) {
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
  return u2(e, "ControllableMixinClass"), e;
}
__name(He, "He");
u2(He, "ControllableMixin");
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
  return u2(e, "DisableableMixinClass"), k([j], e.prototype, "disabled", 2), e;
}
__name(Be, "Be");
u2(Be, "DisableableMixin");
var Y = u2(function() {
  return Y = Object.assign || u2(function(e) {
    for (var t, i = 1, l = arguments.length; i < l; i++) {
      t = arguments[i];
      for (var c2 in t)
        Object.prototype.hasOwnProperty.call(t, c2) && (e[c2] = t[c2]);
    }
    return e;
  }, "__assign"), Y.apply(this, arguments);
}, "__assign");
function ei(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) && e.indexOf(i) < 0 && (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var l = 0, i = Object.getOwnPropertySymbols(r); l < i.length; l++)
      e.indexOf(i[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, i[l]) && (t[i[l]] = r[i[l]]);
  return t;
}
__name(ei, "ei");
u2(ei, "__rest");
function ve(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t)
    return t.call(r);
  if (r && typeof r.length == "number")
    return { next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    } };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
__name(ve, "ve");
u2(ve, "__values");
function me(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t)
    return r;
  var i = t.call(r), l, c2 = [], d2;
  try {
    for (; (e === void 0 || e-- > 0) && !(l = i.next()).done; )
      c2.push(l.value);
  } catch (v) {
    d2 = { error: v };
  } finally {
    try {
      l && !l.done && (t = i.return) && t.call(i);
    } finally {
      if (d2)
        throw d2.error;
    }
  }
  return c2;
}
__name(me, "me");
u2(me, "__read");
function Re(r, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, l = e.length, c2; i < l; i++)
      (c2 || !(i in e)) && (c2 || (c2 = Array.prototype.slice.call(e, 0, i)), c2[i] = e[i]);
  return r.concat(c2 || Array.prototype.slice.call(e));
}
__name(Re, "Re");
u2(Re, "__spreadArray");
var Ee;
(function(r) {
  r.Start = "xstate.start", r.Stop = "xstate.stop", r.Raise = "xstate.raise", r.Send = "xstate.send", r.Cancel = "xstate.cancel", r.NullEvent = "", r.Assign = "xstate.assign", r.After = "xstate.after", r.DoneState = "done.state", r.DoneInvoke = "done.invoke", r.Log = "xstate.log", r.Init = "xstate.init", r.Invoke = "xstate.invoke", r.ErrorExecution = "error.execution", r.ErrorCommunication = "error.communication", r.ErrorPlatform = "error.platform", r.ErrorCustom = "xstate.error", r.Update = "xstate.update", r.Pure = "xstate.pure", r.Choose = "xstate.choose";
})(Ee || (Ee = {}));
var Kr;
(function(r) {
  r.Parent = "#_parent", r.Internal = "#_internal";
})(Kr || (Kr = {}));
var Li = Ee.Start;
var ti = Ee.Stop;
var ri = Ee.Raise;
var wn = Ee.Send;
var Ko = Ee.Cancel;
var Nu = Ee.NullEvent;
var Cs = Ee.Assign;
var am = Ee.After;
var sm = Ee.DoneState;
var Qo = Ee.Log;
var Gu = Ee.Init;
var qi = Ee.Invoke;
var lm = Ee.ErrorExecution;
var _s = Ee.ErrorPlatform;
var Ms = Ee.ErrorCustom;
var ji = Ee.Update;
var Lu = Ee.Choose;
var qu = Ee.Pure;
var ea = ".";
var As = {};
var ta = "xstate.guard";
var ju = "";
var Le = true;
var ra;
function $i(r, e, t) {
  t === void 0 && (t = ea);
  var i = ni(r, t), l = ni(e, t);
  return ge(l) ? ge(i) ? l === i : false : ge(i) ? i in l : Object.keys(i).every(function(c2) {
    return c2 in l ? $i(i[c2], l[c2]) : false;
  });
}
__name($i, "$i");
u2($i, "matchesState");
function na(r) {
  try {
    return ge(r) || typeof r == "number" ? "".concat(r) : r.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
__name(na, "na");
u2(na, "getEventType");
function ia(r, e) {
  try {
    return zr(r) ? r : r.toString().split(e);
  } catch (t) {
    throw new Error("'".concat(r, "' is not a valid state path."));
  }
}
__name(ia, "ia");
u2(ia, "toStatePath");
function _f(r) {
  return typeof r == "object" && "value" in r && "context" in r && "event" in r && "_event" in r;
}
__name(_f, "_f");
u2(_f, "isStateLike");
function ni(r, e) {
  if (_f(r))
    return r.value;
  if (zr(r))
    return Bi(r);
  if (typeof r != "string")
    return r;
  var t = ia(r, e);
  return Bi(t);
}
__name(ni, "ni");
u2(ni, "toStateValue");
function Bi(r) {
  if (r.length === 1)
    return r[0];
  for (var e = {}, t = e, i = 0; i < r.length - 1; i++)
    i === r.length - 2 ? t[r[i]] = r[i + 1] : (t[r[i]] = {}, t = t[r[i]]);
  return e;
}
__name(Bi, "Bi");
u2(Bi, "pathToStateValue");
function ii(r, e) {
  for (var t = {}, i = Object.keys(r), l = 0; l < i.length; l++) {
    var c2 = i[l];
    t[c2] = e(r[c2], c2, r, l);
  }
  return t;
}
__name(ii, "ii");
u2(ii, "mapValues");
function Ps(r, e, t) {
  var i, l, c2 = {};
  try {
    for (var d2 = ve(Object.keys(r)), v = d2.next(); !v.done; v = d2.next()) {
      var b = v.value, y = r[b];
      !t(y) || (c2[b] = e(y, b, r));
    }
  } catch (w2) {
    i = { error: w2 };
  } finally {
    try {
      v && !v.done && (l = d2.return) && l.call(d2);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c2;
}
__name(Ps, "Ps");
u2(Ps, "mapFilterValues");
var Bu = u2(function(r) {
  return function(e) {
    var t, i, l = e;
    try {
      for (var c2 = ve(r), d2 = c2.next(); !d2.done; d2 = c2.next()) {
        var v = d2.value;
        l = l[v];
      }
    } catch (b) {
      t = { error: b };
    } finally {
      try {
        d2 && !d2.done && (i = c2.return) && i.call(c2);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return l;
  };
}, "path");
function $u(r, e) {
  return function(t) {
    var i, l, c2 = t;
    try {
      for (var d2 = ve(r), v = d2.next(); !v.done; v = d2.next()) {
        var b = v.value;
        c2 = c2[e][b];
      }
    } catch (y) {
      i = { error: y };
    } finally {
      try {
        v && !v.done && (l = d2.return) && l.call(d2);
      } finally {
        if (i)
          throw i.error;
      }
    }
    return c2;
  };
}
__name($u, "$u");
u2($u, "nestedPath");
function Hi(r) {
  if (!r)
    return [[]];
  if (ge(r))
    return [[r]];
  var e = ke(Object.keys(r).map(function(t) {
    var i = r[t];
    return typeof i != "string" && (!i || !Object.keys(i).length) ? [[t]] : Hi(r[t]).map(function(l) {
      return [t].concat(l);
    });
  }));
  return e;
}
__name(Hi, "Hi");
u2(Hi, "toStatePaths");
function ke(r) {
  var e;
  return (e = []).concat.apply(e, Re([], me(r), false));
}
__name(ke, "ke");
u2(ke, "flatten");
function Hu(r) {
  return zr(r) ? r : [r];
}
__name(Hu, "Hu");
u2(Hu, "toArrayStrict");
function Lt(r) {
  return r === void 0 ? [] : Hu(r);
}
__name(Lt, "Lt");
u2(Lt, "toArray");
function En(r, e, t) {
  var i, l;
  if (Se(r))
    return r(e, t.data);
  var c2 = {};
  try {
    for (var d2 = ve(Object.keys(r)), v = d2.next(); !v.done; v = d2.next()) {
      var b = v.value, y = r[b];
      Se(y) ? c2[b] = y(e, t.data) : c2[b] = y;
    }
  } catch (w2) {
    i = { error: w2 };
  } finally {
    try {
      v && !v.done && (l = d2.return) && l.call(d2);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return c2;
}
__name(En, "En");
u2(En, "mapContext");
function Fu(r) {
  return /^(done|error)\./.test(r);
}
__name(Fu, "Fu");
u2(Fu, "isBuiltInEvent");
function Is(r) {
  return !!(r instanceof Promise || r !== null && (Se(r) || typeof r == "object") && Se(r.then));
}
__name(Is, "Is");
u2(Is, "isPromiseLike");
function Uu(r) {
  return r !== null && typeof r == "object" && "transition" in r && typeof r.transition == "function";
}
__name(Uu, "Uu");
u2(Uu, "isBehavior");
function oa(r, e) {
  var t, i, l = me([[], []], 2), c2 = l[0], d2 = l[1];
  try {
    for (var v = ve(r), b = v.next(); !b.done; b = v.next()) {
      var y = b.value;
      e(y) ? c2.push(y) : d2.push(y);
    }
  } catch (w2) {
    t = { error: w2 };
  } finally {
    try {
      b && !b.done && (i = v.return) && i.call(v);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return [c2, d2];
}
__name(oa, "oa");
u2(oa, "partition");
function Wu(r, e) {
  return ii(r.states, function(t, i) {
    if (!!t) {
      var l = (ge(e) ? void 0 : e[i]) || (t ? t.current : void 0);
      if (!!l)
        return { current: l, states: Wu(t, l) };
    }
  });
}
__name(Wu, "Wu");
u2(Wu, "updateHistoryStates");
function Vu(r, e) {
  return { current: e, states: Wu(r, e) };
}
__name(Vu, "Vu");
u2(Vu, "updateHistoryValue");
function Ds(r, e, t, i) {
  Le || We(!!r, "Attempting to update undefined context");
  var l = r && t.reduce(function(c2, d2) {
    var v, b, y = d2.assignment, w2 = { state: i, action: d2, _event: e }, A2 = {};
    if (Se(y))
      A2 = y(c2, e.data, w2);
    else
      try {
        for (var O2 = ve(Object.keys(y)), M2 = O2.next(); !M2.done; M2 = O2.next()) {
          var R2 = M2.value, S = y[R2];
          A2[R2] = Se(S) ? S(c2, e.data, w2) : S;
        }
      } catch (_) {
        v = { error: _ };
      } finally {
        try {
          M2 && !M2.done && (b = O2.return) && b.call(O2);
        } finally {
          if (v)
            throw v.error;
        }
      }
    return Object.assign({}, c2, A2);
  }, r);
  return l;
}
__name(Ds, "Ds");
u2(Ds, "updateContext");
var We = u2(function() {
}, "warn");
Le || (We = u2(function(r, e) {
  var t = r instanceof Error ? r : void 0;
  if (!(!t && r) && console !== void 0) {
    var i = ["Warning: ".concat(e)];
    t && i.push(t), console.warn.apply(console, i);
  }
}, "warn"));
function zr(r) {
  return Array.isArray(r);
}
__name(zr, "zr");
u2(zr, "isArray");
function Se(r) {
  return typeof r == "function";
}
__name(Se, "Se");
u2(Se, "isFunction");
function ge(r) {
  return typeof r == "string";
}
__name(ge, "ge");
u2(ge, "isString");
function aa(r, e) {
  if (!!r)
    return ge(r) ? { type: ta, name: r, predicate: e ? e[r] : void 0 } : Se(r) ? { type: ta, name: r.name, predicate: r } : r;
}
__name(aa, "aa");
u2(aa, "toGuard");
function Xu(r) {
  try {
    return "subscribe" in r && Se(r.subscribe);
  } catch (e) {
    return false;
  }
}
__name(Xu, "Xu");
u2(Xu, "isObservable");
var xr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
var vm = (ra = {}, ra[xr] = function() {
  return this;
}, ra[Symbol.observable] = function() {
  return this;
}, ra);
function wr(r) {
  return !!r && "__xstatenode" in r;
}
__name(wr, "wr");
u2(wr, "isMachine");
function Yu(r) {
  return !!r && typeof r.send == "function";
}
__name(Yu, "Yu");
u2(Yu, "isActor");
function Fi(r, e) {
  return ge(r) || typeof r == "number" ? Y({ type: r }, e) : r;
}
__name(Fi, "Fi");
u2(Fi, "toEventObject");
function tt(r, e) {
  if (!ge(r) && "$$type" in r && r.$$type === "scxml")
    return r;
  var t = Fi(r);
  return Y({ name: t.type, data: t, $$type: "scxml", type: "external" }, e);
}
__name(tt, "tt");
u2(tt, "toSCXMLEvent");
function Sn(r, e) {
  var t = Hu(e).map(function(i) {
    return typeof i == "undefined" || typeof i == "string" || wr(i) ? { target: i, event: r } : Y(Y({}, i), { event: r });
  });
  return t;
}
__name(Sn, "Sn");
u2(Sn, "toTransitionConfigArray");
function Zu(r) {
  if (!(r === void 0 || r === ju))
    return Lt(r);
}
__name(Zu, "Zu");
u2(Zu, "normalizeTarget");
function Ju(r, e, t) {
  if (!Le) {
    var i = r.stack ? " Stacktrace was '".concat(r.stack, "'") : "";
    if (r === e)
      console.error("Missing onError handler for invocation '".concat(t, "', error was '").concat(r, "'.").concat(i));
    else {
      var l = e.stack ? " Stacktrace was '".concat(e.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(t, "'. ") + "Original error: '".concat(r, "'. ").concat(i, " Current error is '").concat(e, "'.").concat(l));
    }
  }
}
__name(Ju, "Ju");
u2(Ju, "reportUnhandledExceptionOnInvocation");
function sa(r, e, t, i, l) {
  var c2 = r.options.guards, d2 = { state: l, cond: e, _event: i };
  if (e.type === ta)
    return ((c2 == null ? void 0 : c2[e.name]) || e.predicate)(t, i.data, d2);
  var v = c2 == null ? void 0 : c2[e.type];
  if (!v)
    throw new Error("Guard '".concat(e.type, "' is not implemented on machine '").concat(r.id, "'."));
  return v(t, i.data, d2);
}
__name(sa, "sa");
u2(sa, "evaluateGuard");
function la(r) {
  return typeof r == "string" ? { type: r } : r;
}
__name(la, "la");
u2(la, "toInvokeSource");
function Ui(r, e, t) {
  if (typeof r == "object")
    return r;
  var i = u2(function() {
  }, "noop");
  return { next: r, error: e || i, complete: t || i };
}
__name(Ui, "Ui");
u2(Ui, "toObserver");
function Wi(r, e) {
  return "".concat(r, ":invocation[").concat(e, "]");
}
__name(Wi, "Wi");
u2(Wi, "createInvokeId");
var Tn = tt({ type: Gu });
function ua(r, e) {
  return e && e[r] || void 0;
}
__name(ua, "ua");
u2(ua, "getActionFunction");
function oi(r, e) {
  var t;
  if (ge(r) || typeof r == "number") {
    var i = ua(r, e);
    Se(i) ? t = { type: r, exec: i } : i ? t = i : t = { type: r, exec: void 0 };
  } else if (Se(r))
    t = { type: r.name || r.toString(), exec: r };
  else {
    var i = ua(r.type, e);
    if (Se(i))
      t = Y(Y({}, r), { exec: i });
    else if (i) {
      var l = i.type || r.type;
      t = Y(Y(Y({}, i), r), { type: l });
    } else
      t = r;
  }
  return t;
}
__name(oi, "oi");
u2(oi, "toActionObject");
var Vi = u2(function(r, e) {
  if (!r)
    return [];
  var t = zr(r) ? r : [r];
  return t.map(function(i) {
    return oi(i, e);
  });
}, "toActionObjects");
function pa(r) {
  var e = oi(r);
  return Y(Y({ id: ge(r) ? r : e.id }, e), { type: e.type });
}
__name(pa, "pa");
u2(pa, "toActivityDefinition");
function Ku(r) {
  return ge(r) ? { type: ri, event: r } : Rs(r, { to: Kr.Internal });
}
__name(Ku, "Ku");
u2(Ku, "raise");
function Mf(r) {
  return { type: ri, _event: tt(r.event) };
}
__name(Mf, "Mf");
u2(Mf, "resolveRaise");
function Rs(r, e) {
  return { to: e ? e.to : void 0, type: wn, event: Se(r) ? r : Fi(r), delay: e ? e.delay : void 0, id: e && e.id !== void 0 ? e.id : Se(r) ? r.name : na(r) };
}
__name(Rs, "Rs");
u2(Rs, "send");
function Af(r, e, t, i) {
  var l = { _event: t }, c2 = tt(Se(r.event) ? r.event(e, t.data, l) : r.event), d2;
  if (ge(r.delay)) {
    var v = i && i[r.delay];
    d2 = Se(v) ? v(e, t.data, l) : v;
  } else
    d2 = Se(r.delay) ? r.delay(e, t.data, l) : r.delay;
  var b = Se(r.to) ? r.to(e, t.data, l) : r.to;
  return Y(Y({}, r), { to: b, _event: c2, event: c2.data, delay: d2 });
}
__name(Af, "Af");
u2(Af, "resolveSend");
var Pf = u2(function(r, e, t) {
  return Y(Y({}, r), { value: ge(r.expr) ? r.expr : r.expr(e, t.data, { _event: t }) });
}, "resolveLog");
var Qu = u2(function(r) {
  return { type: Ko, sendId: r };
}, "cancel");
function ec(r) {
  var e = pa(r);
  return { type: Ee.Start, activity: e, exec: void 0 };
}
__name(ec, "ec");
u2(ec, "start");
function tc(r) {
  var e = Se(r) ? r : pa(r);
  return { type: Ee.Stop, activity: e, exec: void 0 };
}
__name(tc, "tc");
u2(tc, "stop");
function If(r, e, t) {
  var i = Se(r.activity) ? r.activity(e, t.data) : r.activity, l = typeof i == "string" ? { id: i } : i, c2 = { type: Ee.Stop, activity: l };
  return c2;
}
__name(If, "If");
u2(If, "resolveStop");
function rc(r, e) {
  var t = e ? "#".concat(e) : "";
  return "".concat(Ee.After, "(").concat(r, ")").concat(t);
}
__name(rc, "rc");
u2(rc, "after");
function Xi(r, e) {
  var t = "".concat(Ee.DoneState, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(Xi, "Xi");
u2(Xi, "done");
function ai(r, e) {
  var t = "".concat(Ee.DoneInvoke, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(ai, "ai");
u2(ai, "doneInvoke");
function On(r, e) {
  var t = "".concat(Ee.ErrorPlatform, ".").concat(r), i = { type: t, data: e };
  return i.toString = function() {
    return t;
  }, i;
}
__name(On, "On");
u2(On, "error");
function ca(r, e, t, i, l, c2) {
  c2 === void 0 && (c2 = false);
  var d2 = me(c2 ? [[], l] : oa(l, function(O2) {
    return O2.type === Cs;
  }), 2), v = d2[0], b = d2[1], y = v.length ? Ds(t, i, v, e) : t, w2 = c2 ? [t] : void 0, A2 = ke(b.map(function(O2) {
    var M2;
    switch (O2.type) {
      case ri:
        return Mf(O2);
      case wn:
        var R2 = Af(O2, y, i, r.options.delays);
        return Le || We(!ge(O2.delay) || typeof R2.delay == "number", "No delay reference for delay expression '".concat(O2.delay, "' was found on machine '").concat(r.id, "'")), R2;
      case Qo:
        return Pf(O2, y, i);
      case Lu: {
        var S = O2, _ = (M2 = S.conds.find(function(U) {
          var re = aa(U.cond, r.options.guards);
          return !re || sa(r, re, y, i, e);
        })) === null || M2 === void 0 ? void 0 : M2.actions;
        if (!_)
          return [];
        var P = me(ca(r, e, y, i, Vi(Lt(_), r.options.actions), c2), 2), I2 = P[0], L = P[1];
        return y = L, w2 == null || w2.push(y), I2;
      }
      case qu: {
        var _ = O2.get(y, i.data);
        if (!_)
          return [];
        var E = me(ca(r, e, y, i, Vi(Lt(_), r.options.actions), c2), 2), B = E[0], z2 = E[1];
        return y = z2, w2 == null || w2.push(y), B;
      }
      case ti:
        return If(O2, y, i);
      case Cs: {
        y = Ds(y, i, [O2], e), w2 == null || w2.push(y);
        break;
      }
      default:
        var X = oi(O2, r.options.actions), V = X.exec;
        if (V && w2) {
          var $ = w2.length - 1;
          X = Y(Y({}, X), { exec: function(U) {
            for (var re = [], ie = 1; ie < arguments.length; ie++)
              re[ie - 1] = arguments[ie];
            V.apply(void 0, Re([w2[$]], me(re), false));
          } });
        }
        return X;
    }
  }).filter(function(O2) {
    return !!O2;
  }));
  return [A2, y];
}
__name(ca, "ca");
u2(ca, "resolveActions");
var nc = [];
var Cn = u2(function(r, e) {
  nc.push(r);
  var t = e(r);
  return nc.pop(), t;
}, "provide");
function ic(r) {
  var e;
  return e = { id: r, send: function() {
  }, subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, getSnapshot: function() {
  }, toJSON: function() {
    return { id: r };
  } }, e[xr] = function() {
    return this;
  }, e;
}
__name(ic, "ic");
u2(ic, "createNullActor");
function oc(r, e, t, i) {
  var l, c2 = la(r.src), d2 = (l = e == null ? void 0 : e.options.services) === null || l === void 0 ? void 0 : l[c2.type], v = r.data ? En(r.data, t, i) : void 0, b = d2 ? ac(d2, r.id, v) : ic(r.id);
  return b.meta = r, b;
}
__name(oc, "oc");
u2(oc, "createInvocableActor");
function ac(r, e, t) {
  var i = ic(e);
  if (i.deferred = true, wr(r)) {
    var l = i.state = Cn(void 0, function() {
      return (t ? r.withContext(t) : r).initialState;
    });
    i.getSnapshot = function() {
      return l;
    };
  }
  return i;
}
__name(ac, "ac");
u2(ac, "createDeferredActor");
function Df(r) {
  try {
    return typeof r.send == "function";
  } catch (e) {
    return false;
  }
}
__name(Df, "Df");
u2(Df, "isActor");
function sc(r) {
  return Df(r) && "id" in r;
}
__name(sc, "sc");
u2(sc, "isSpawnedActor");
function lc(r) {
  var e;
  return Y((e = { subscribe: function() {
    return { unsubscribe: function() {
    } };
  }, id: "anonymous", getSnapshot: function() {
  } }, e[xr] = function() {
    return this;
  }, e), r);
}
__name(lc, "lc");
u2(lc, "toActorRef");
var Yi = u2(function(r) {
  return r.type === "atomic" || r.type === "final";
}, "isLeafNode");
function _n(r) {
  return Object.keys(r.states).map(function(e) {
    return r.states[e];
  });
}
__name(_n, "_n");
u2(_n, "getChildren");
function ks(r) {
  var e = [r];
  return Yi(r) ? e : e.concat(ke(_n(r).map(ks)));
}
__name(ks, "ks");
u2(ks, "getAllStateNodes");
function Mn(r, e) {
  var t, i, l, c2, d2, v, b, y, w2 = new Set(r), A2 = zs(w2), O2 = new Set(e);
  try {
    for (var M2 = ve(O2), R2 = M2.next(); !R2.done; R2 = M2.next())
      for (var S = R2.value, _ = S.parent; _ && !O2.has(_); )
        O2.add(_), _ = _.parent;
  } catch ($) {
    t = { error: $ };
  } finally {
    try {
      R2 && !R2.done && (i = M2.return) && i.call(M2);
    } finally {
      if (t)
        throw t.error;
    }
  }
  var P = zs(O2);
  try {
    for (var I2 = ve(O2), L = I2.next(); !L.done; L = I2.next()) {
      var S = L.value;
      if (S.type === "compound" && (!P.get(S) || !P.get(S).length))
        A2.get(S) ? A2.get(S).forEach(function(U) {
          return O2.add(U);
        }) : S.initialStateNodes.forEach(function(U) {
          return O2.add(U);
        });
      else if (S.type === "parallel")
        try {
          for (var E = (d2 = void 0, ve(_n(S))), B = E.next(); !B.done; B = E.next()) {
            var z2 = B.value;
            z2.type !== "history" && (O2.has(z2) || (O2.add(z2), A2.get(z2) ? A2.get(z2).forEach(function(U) {
              return O2.add(U);
            }) : z2.initialStateNodes.forEach(function(U) {
              return O2.add(U);
            })));
          }
        } catch (U) {
          d2 = { error: U };
        } finally {
          try {
            B && !B.done && (v = E.return) && v.call(E);
          } finally {
            if (d2)
              throw d2.error;
          }
        }
    }
  } catch ($) {
    l = { error: $ };
  } finally {
    try {
      L && !L.done && (c2 = I2.return) && c2.call(I2);
    } finally {
      if (l)
        throw l.error;
    }
  }
  try {
    for (var X = ve(O2), V = X.next(); !V.done; V = X.next())
      for (var S = V.value, _ = S.parent; _ && !O2.has(_); )
        O2.add(_), _ = _.parent;
  } catch ($) {
    b = { error: $ };
  } finally {
    try {
      V && !V.done && (y = X.return) && y.call(X);
    } finally {
      if (b)
        throw b.error;
    }
  }
  return O2;
}
__name(Mn, "Mn");
u2(Mn, "getConfiguration");
function uc(r, e) {
  var t = e.get(r);
  if (!t)
    return {};
  if (r.type === "compound") {
    var i = t[0];
    if (i) {
      if (Yi(i))
        return i.key;
    } else
      return {};
  }
  var l = {};
  return t.forEach(function(c2) {
    l[c2.key] = uc(c2, e);
  }), l;
}
__name(uc, "uc");
u2(uc, "getValueFromAdj");
function zs(r) {
  var e, t, i = /* @__PURE__ */ new Map();
  try {
    for (var l = ve(r), c2 = l.next(); !c2.done; c2 = l.next()) {
      var d2 = c2.value;
      i.has(d2) || i.set(d2, []), d2.parent && (i.has(d2.parent) || i.set(d2.parent, []), i.get(d2.parent).push(d2));
    }
  } catch (v) {
    e = { error: v };
  } finally {
    try {
      c2 && !c2.done && (t = l.return) && t.call(l);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return i;
}
__name(zs, "zs");
u2(zs, "getAdjList");
function cc(r, e) {
  var t = Mn([r], e);
  return uc(r, zs(t));
}
__name(cc, "cc");
u2(cc, "getValue");
function Zi(r, e) {
  return Array.isArray(r) ? r.some(function(t) {
    return t === e;
  }) : r instanceof Set ? r.has(e) : false;
}
__name(Zi, "Zi");
u2(Zi, "has");
function pc(r) {
  return Re([], me(new Set(ke(Re([], me(r.map(function(e) {
    return e.ownEvents;
  })), false)))), false);
}
__name(pc, "pc");
u2(pc, "nextEvents");
function An(r, e) {
  return e.type === "compound" ? _n(e).some(function(t) {
    return t.type === "final" && Zi(r, t);
  }) : e.type === "parallel" ? _n(e).every(function(t) {
    return An(r, t);
  }) : false;
}
__name(An, "An");
u2(An, "isInFinalState");
function dc(r) {
  return r === void 0 && (r = []), r.reduce(function(e, t) {
    return t.meta !== void 0 && (e[t.id] = t.meta), e;
  }, {});
}
__name(dc, "dc");
u2(dc, "getMeta");
function Ns(r) {
  return new Set(ke(r.map(function(e) {
    return e.tags;
  })));
}
__name(Ns, "Ns");
u2(Ns, "getTagsFromConfiguration");
function Gs(r, e) {
  if (r === e)
    return true;
  if (r === void 0 || e === void 0)
    return false;
  if (ge(r) || ge(e))
    return r === e;
  var t = Object.keys(r), i = Object.keys(e);
  return t.length === i.length && t.every(function(l) {
    return Gs(r[l], e[l]);
  });
}
__name(Gs, "Gs");
u2(Gs, "stateValuesEqual");
function fc(r) {
  return typeof r != "object" || r === null ? false : "value" in r && "_event" in r;
}
__name(fc, "fc");
u2(fc, "isStateConfig");
function hc(r, e) {
  var t = r.exec, i = Y(Y({}, r), { exec: t !== void 0 ? function() {
    return t(e.context, e.event, { action: r, state: e, _event: e._event });
  } : void 0 });
  return i;
}
__name(hc, "hc");
u2(hc, "bindActionToState");
var hr = function() {
  function r(e) {
    var t = this, i;
    this.actions = [], this.activities = As, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || As, this.meta = dc(e.configuration), this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, this.tags = (i = Array.isArray(e.tags) ? new Set(e.tags) : e.tags) !== null && i !== void 0 ? i : /* @__PURE__ */ new Set(), this.machine = e.machine, Object.defineProperty(this, "nextEvents", { get: function() {
      return pc(t.configuration);
    } });
  }
  __name(r, "r");
  return u2(r, "State"), r.from = function(e, t) {
    if (e instanceof r)
      return e.context !== t ? new r({ value: e.value, context: t, _event: e._event, _sessionid: null, historyValue: e.historyValue, history: e.history, actions: [], activities: e.activities, meta: {}, events: [], configuration: [], transitions: [], children: {} }) : e;
    var i = Tn;
    return new r({ value: e, context: t, _event: i, _sessionid: null, historyValue: void 0, history: void 0, actions: [], activities: void 0, meta: void 0, events: [], configuration: [], transitions: [], children: {} });
  }, r.create = function(e) {
    return new r(e);
  }, r.inert = function(e, t) {
    if (e instanceof r) {
      if (!e.actions.length)
        return e;
      var i = Tn;
      return new r({ value: e.value, context: t, _event: i, _sessionid: null, historyValue: e.historyValue, history: e.history, activities: e.activities, configuration: e.configuration, transitions: [], children: {} });
    }
    return r.from(e, t);
  }, r.prototype.toStrings = function(e, t) {
    var i = this;
    if (e === void 0 && (e = this.value), t === void 0 && (t = "."), ge(e))
      return [e];
    var l = Object.keys(e);
    return l.concat.apply(l, Re([], me(l.map(function(c2) {
      return i.toStrings(e[c2], t).map(function(d2) {
        return c2 + t + d2;
      });
    })), false));
  }, r.prototype.toJSON = function() {
    var e = this;
    e.configuration, e.transitions;
    var t = e.tags;
    e.machine;
    var i = ei(e, ["configuration", "transitions", "tags", "machine"]);
    return Y(Y({}, i), { tags: Array.from(t) });
  }, r.prototype.matches = function(e) {
    return $i(e, this.value);
  }, r.prototype.hasTag = function(e) {
    return this.tags.has(e);
  }, r.prototype.can = function(e) {
    var t;
    Le && We(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
    var i = (t = this.machine) === null || t === void 0 ? void 0 : t.getTransitionData(this, e);
    return !!(i == null ? void 0 : i.transitions.length) && i.transitions.some(function(l) {
      return l.target !== void 0 || l.actions.length;
    });
  }, r;
}();
var Rf = { deferEvents: false };
var Ls = function() {
  function r(e) {
    this.processingEvent = false, this.queue = [], this.initialized = false, this.options = Y(Y({}, Rf), e);
  }
  __name(r, "r");
  return u2(r, "Scheduler"), r.prototype.initialize = function(e) {
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
var qs = /* @__PURE__ */ new Map();
var zf = 0;
var Ji = { bookId: function() {
  return "x:".concat(zf++);
}, register: function(r, e) {
  return qs.set(r, e), r;
}, get: function(r) {
  return qs.get(r);
}, free: function(r) {
  qs.delete(r);
} };
function da() {
  if (typeof globalThis != "undefined")
    return globalThis;
  if (typeof self != "undefined")
    return self;
  if (typeof window != "undefined")
    return window;
  if (typeof global != "undefined")
    return global;
  Le || console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
}
__name(da, "da");
u2(da, "getGlobal");
function kf() {
  var r = da();
  if (r && "__xstate__" in r)
    return r.__xstate__;
}
__name(kf, "kf");
u2(kf, "getDevTools");
function vc(r) {
  if (!!da()) {
    var e = kf();
    e && e.register(r);
  }
}
__name(vc, "vc");
u2(vc, "registerService");
function mc(r, e) {
  e === void 0 && (e = {});
  var t = r.initialState, i = /* @__PURE__ */ new Set(), l = [], c2 = false, d2 = u2(function() {
    if (!c2) {
      for (c2 = true; l.length > 0; ) {
        var y = l.shift();
        t = r.transition(t, y, b), i.forEach(function(w2) {
          return w2.next(t);
        });
      }
      c2 = false;
    }
  }, "flush"), v = lc({ id: e.id, send: function(y) {
    l.push(y), d2();
  }, getSnapshot: function() {
    return t;
  }, subscribe: function(y, w2, A2) {
    var O2 = Ui(y, w2, A2);
    return i.add(O2), O2.next(t), { unsubscribe: function() {
      i.delete(O2);
    } };
  } }), b = { parent: e.parent, self: v, id: e.id || "anonymous", observers: i };
  return t = r.start ? r.start(b) : t, v;
}
__name(mc, "mc");
u2(mc, "spawnBehavior");
var Nf = { sync: false, autoForward: false };
var bt;
(function(r) {
  r[r.NotStarted = 0] = "NotStarted", r[r.Running = 1] = "Running", r[r.Stopped = 2] = "Stopped";
})(bt || (bt = {}));
var gc = function() {
  function r(e, t) {
    var i = this;
    t === void 0 && (t = r.defaultOptions), this.machine = e, this.scheduler = new Ls(), this.delayedEventsMap = {}, this.listeners = /* @__PURE__ */ new Set(), this.contextListeners = /* @__PURE__ */ new Set(), this.stopListeners = /* @__PURE__ */ new Set(), this.doneListeners = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Set(), this.sendListeners = /* @__PURE__ */ new Set(), this.initialized = false, this.status = bt.NotStarted, this.children = /* @__PURE__ */ new Map(), this.forwardTo = /* @__PURE__ */ new Set(), this.init = this.start, this.send = function(w2, A2) {
      if (zr(w2))
        return i.batch(w2), i.state;
      var O2 = tt(Fi(w2, A2));
      if (i.status === bt.Stopped)
        return Le || We(false, 'Event "'.concat(O2.name, '" was sent to stopped service "').concat(i.machine.id, `". This service has already reached its final state, and will not transition.
Event: `).concat(JSON.stringify(O2.data))), i.state;
      if (i.status !== bt.Running && !i.options.deferEvents)
        throw new Error('Event "'.concat(O2.name, '" was sent to uninitialized service "').concat(i.machine.id, `". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.
Event: `).concat(JSON.stringify(O2.data)));
      return i.scheduler.schedule(function() {
        i.forward(O2);
        var M2 = i.nextState(O2);
        i.update(M2, O2);
      }), i._state;
    }, this.sendTo = function(w2, A2) {
      var O2 = i.parent && (A2 === Kr.Parent || i.parent.id === A2), M2 = O2 ? i.parent : ge(A2) ? i.children.get(A2) || Ji.get(A2) : Yu(A2) ? A2 : void 0;
      if (!M2) {
        if (!O2)
          throw new Error("Unable to send event to child '".concat(A2, "' from service '").concat(i.id, "'."));
        Le || We(false, "Service '".concat(i.id, "' has no parent: unable to send event ").concat(w2.type));
        return;
      }
      "machine" in M2 ? M2.send(Y(Y({}, w2), { name: w2.name === Ms ? "".concat(On(i.id)) : w2.name, origin: i.sessionId })) : M2.send(w2.data);
    };
    var l = Y(Y({}, r.defaultOptions), t), c2 = l.clock, d2 = l.logger, v = l.parent, b = l.id, y = b !== void 0 ? b : e.id;
    this.id = y, this.logger = d2, this.clock = c2, this.parent = v, this.options = l, this.scheduler = new Ls({ deferEvents: this.options.deferEvents }), this.sessionId = Ji.bookId();
  }
  __name(r, "r");
  return u2(r, "Interpreter"), Object.defineProperty(r.prototype, "initialState", { get: function() {
    var e = this;
    return this._initialState ? this._initialState : Cn(this, function() {
      return e._initialState = e.machine.initialState, e._initialState;
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "state", { get: function() {
    return Le || We(this.status !== bt.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first.")), this._state;
  }, enumerable: false, configurable: true }), r.prototype.execute = function(e, t) {
    var i, l;
    try {
      for (var c2 = ve(e.actions), d2 = c2.next(); !d2.done; d2 = c2.next()) {
        var v = d2.value;
        this.exec(v, e, t);
      }
    } catch (b) {
      i = { error: b };
    } finally {
      try {
        d2 && !d2.done && (l = c2.return) && l.call(c2);
      } finally {
        if (i)
          throw i.error;
      }
    }
  }, r.prototype.update = function(e, t) {
    var i, l, c2, d2, v, b, y, w2, A2 = this;
    if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.children.forEach(function($) {
      A2.state.children[$.id] = $;
    }), this.devTools && this.devTools.send(t.data, e), e.event)
      try {
        for (var O2 = ve(this.eventListeners), M2 = O2.next(); !M2.done; M2 = O2.next()) {
          var R2 = M2.value;
          R2(e.event);
        }
      } catch ($) {
        i = { error: $ };
      } finally {
        try {
          M2 && !M2.done && (l = O2.return) && l.call(O2);
        } finally {
          if (i)
            throw i.error;
        }
      }
    try {
      for (var S = ve(this.listeners), _ = S.next(); !_.done; _ = S.next()) {
        var R2 = _.value;
        R2(e, e.event);
      }
    } catch ($) {
      c2 = { error: $ };
    } finally {
      try {
        _ && !_.done && (d2 = S.return) && d2.call(S);
      } finally {
        if (c2)
          throw c2.error;
      }
    }
    try {
      for (var P = ve(this.contextListeners), I2 = P.next(); !I2.done; I2 = P.next()) {
        var L = I2.value;
        L(this.state.context, this.state.history ? this.state.history.context : void 0);
      }
    } catch ($) {
      v = { error: $ };
    } finally {
      try {
        I2 && !I2.done && (b = P.return) && b.call(P);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var E = An(e.configuration || [], this.machine);
    if (this.state.configuration && E) {
      var B = e.configuration.find(function($) {
        return $.type === "final" && $.parent === A2.machine;
      }), z2 = B && B.doneData ? En(B.doneData, e.context, t) : void 0;
      try {
        for (var X = ve(this.doneListeners), V = X.next(); !V.done; V = X.next()) {
          var R2 = V.value;
          R2(ai(this.id, z2));
        }
      } catch ($) {
        y = { error: $ };
      } finally {
        try {
          V && !V.done && (w2 = X.return) && w2.call(X);
        } finally {
          if (y)
            throw y.error;
        }
      }
      this.stop();
    }
  }, r.prototype.onTransition = function(e) {
    return this.listeners.add(e), this.status === bt.Running && e(this.state, this.state.event), this;
  }, r.prototype.subscribe = function(e, t, i) {
    var l = this;
    if (!e)
      return { unsubscribe: function() {
      } };
    var c2, d2 = i;
    return typeof e == "function" ? c2 = e : (c2 = e.next.bind(e), d2 = e.complete.bind(e)), this.listeners.add(c2), this.status === bt.Running && c2(this.state), d2 && this.onDone(d2), { unsubscribe: function() {
      c2 && l.listeners.delete(c2), d2 && l.doneListeners.delete(d2);
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
    if (this.status === bt.Running)
      return this;
    this.machine._init(), Ji.register(this.sessionId, this), this.initialized = true, this.status = bt.Running;
    var i = e === void 0 ? this.initialState : Cn(this, function() {
      return fc(e) ? t.machine.resolveState(e) : t.machine.resolveState(hr.from(e, t.machine.context));
    });
    return this.options.devTools && this.attachDev(), this.scheduler.initialize(function() {
      t.update(i, Tn);
    }), this;
  }, r.prototype.stop = function() {
    var e, t, i, l, c2, d2, v, b, y, w2, A2 = this;
    try {
      for (var O2 = ve(this.listeners), M2 = O2.next(); !M2.done; M2 = O2.next()) {
        var R2 = M2.value;
        this.listeners.delete(R2);
      }
    } catch (V) {
      e = { error: V };
    } finally {
      try {
        M2 && !M2.done && (t = O2.return) && t.call(O2);
      } finally {
        if (e)
          throw e.error;
      }
    }
    try {
      for (var S = ve(this.stopListeners), _ = S.next(); !_.done; _ = S.next()) {
        var R2 = _.value;
        R2(), this.stopListeners.delete(R2);
      }
    } catch (V) {
      i = { error: V };
    } finally {
      try {
        _ && !_.done && (l = S.return) && l.call(S);
      } finally {
        if (i)
          throw i.error;
      }
    }
    try {
      for (var P = ve(this.contextListeners), I2 = P.next(); !I2.done; I2 = P.next()) {
        var R2 = I2.value;
        this.contextListeners.delete(R2);
      }
    } catch (V) {
      c2 = { error: V };
    } finally {
      try {
        I2 && !I2.done && (d2 = P.return) && d2.call(P);
      } finally {
        if (c2)
          throw c2.error;
      }
    }
    try {
      for (var L = ve(this.doneListeners), E = L.next(); !E.done; E = L.next()) {
        var R2 = E.value;
        this.doneListeners.delete(R2);
      }
    } catch (V) {
      v = { error: V };
    } finally {
      try {
        E && !E.done && (b = L.return) && b.call(L);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (!this.initialized)
      return this;
    Re([], me(this.state.configuration), false).sort(function(V, $) {
      return $.order - V.order;
    }).forEach(function(V) {
      var $, U;
      try {
        for (var re = ve(V.definition.exit), ie = re.next(); !ie.done; ie = re.next()) {
          var W = ie.value;
          A2.exec(W, A2.state);
        }
      } catch (ce) {
        $ = { error: ce };
      } finally {
        try {
          ie && !ie.done && (U = re.return) && U.call(re);
        } finally {
          if ($)
            throw $.error;
        }
      }
    }), this.children.forEach(function(V) {
      Se(V.stop) && V.stop();
    });
    try {
      for (var B = ve(Object.keys(this.delayedEventsMap)), z2 = B.next(); !z2.done; z2 = B.next()) {
        var X = z2.value;
        this.clock.clearTimeout(this.delayedEventsMap[X]);
      }
    } catch (V) {
      y = { error: V };
    } finally {
      try {
        z2 && !z2.done && (w2 = B.return) && w2.call(B);
      } finally {
        if (y)
          throw y.error;
      }
    }
    return this.scheduler.clear(), this.initialized = false, this.status = bt.Stopped, Ji.free(this.sessionId), this;
  }, r.prototype.batch = function(e) {
    var t = this;
    if (this.status === bt.NotStarted && this.options.deferEvents)
      Le || We(false, "".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, `" and are deferred. Make sure .start() is called for this service.
Event: `).concat(JSON.stringify(event)));
    else if (this.status !== bt.Running)
      throw new Error("".concat(e.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.'));
    this.scheduler.schedule(function() {
      var i, l, c2 = t.state, d2 = false, v = [], b = u2(function(O2) {
        var M2 = tt(O2);
        t.forward(M2), c2 = Cn(t, function() {
          return t.machine.transition(c2, M2);
        }), v.push.apply(v, Re([], me(c2.actions.map(function(R2) {
          return hc(R2, c2);
        })), false)), d2 = d2 || !!c2.changed;
      }, "_loop_1");
      try {
        for (var y = ve(e), w2 = y.next(); !w2.done; w2 = y.next()) {
          var A2 = w2.value;
          b(A2);
        }
      } catch (O2) {
        i = { error: O2 };
      } finally {
        try {
          w2 && !w2.done && (l = y.return) && l.call(y);
        } finally {
          if (i)
            throw i.error;
        }
      }
      c2.changed = d2, c2.actions = v, t.update(c2, tt(e[e.length - 1]));
    });
  }, r.prototype.sender = function(e) {
    return this.send.bind(this, e);
  }, r.prototype.nextState = function(e) {
    var t = this, i = tt(e);
    if (i.name.indexOf(_s) === 0 && !this.state.nextEvents.some(function(c2) {
      return c2.indexOf(_s) === 0;
    }))
      throw i.data.data;
    var l = Cn(this, function() {
      return t.machine.transition(t.state, i);
    });
    return l;
  }, r.prototype.forward = function(e) {
    var t, i;
    try {
      for (var l = ve(this.forwardTo), c2 = l.next(); !c2.done; c2 = l.next()) {
        var d2 = c2.value, v = this.children.get(d2);
        if (!v)
          throw new Error("Unable to forward event '".concat(e, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(d2, "'."));
        v.send(e);
      }
    } catch (b) {
      t = { error: b };
    } finally {
      try {
        c2 && !c2.done && (i = l.return) && i.call(l);
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
    var l = t.context, c2 = t._event, d2 = e.exec || ua(e.type, i), v = Se(d2) ? d2 : d2 ? d2.exec : e.exec;
    if (v)
      try {
        return v(l, c2.data, { action: e, state: this.state, _event: c2 });
      } catch (E) {
        throw this.parent && this.parent.send({ type: "xstate.error", data: E }), E;
      }
    switch (e.type) {
      case wn:
        var b = e;
        if (typeof b.delay == "number") {
          this.defer(b);
          return;
        } else
          b.to ? this.sendTo(b._event, b.to) : this.send(b._event);
        break;
      case Ko:
        this.cancel(e.sendId);
        break;
      case Li: {
        if (this.status !== bt.Running)
          return;
        var y = e.activity;
        if (!this.state.activities[y.id || y.type])
          break;
        if (y.type === Ee.Invoke) {
          var w2 = la(y.src), A2 = this.machine.options.services ? this.machine.options.services[w2.type] : void 0, O2 = y.id, M2 = y.data;
          Le || We(!("forward" in y), "`forward` property is deprecated (found in invocation of '".concat(y.src, "' in in machine '").concat(this.machine.id, "'). ") + "Please use `autoForward` instead.");
          var R2 = "autoForward" in y ? y.autoForward : !!y.forward;
          if (!A2) {
            Le || We(false, "No service found for invocation '".concat(y.src, "' in machine '").concat(this.machine.id, "'."));
            return;
          }
          var S = M2 ? En(M2, l, c2) : void 0;
          if (typeof A2 == "string")
            return;
          var _ = Se(A2) ? A2(l, c2.data, { data: S, src: w2, meta: y.meta }) : A2;
          if (!_)
            return;
          var P = void 0;
          wr(_) && (_ = S ? _.withContext(S) : _, P = { autoForward: R2 }), this.spawn(_, O2, P);
        } else
          this.spawnActivity(y);
        break;
      }
      case ti: {
        this.stopChild(e.activity.id);
        break;
      }
      case Qo:
        var I2 = e.label, L = e.value;
        I2 ? this.logger(I2, L) : this.logger(L);
        break;
      default:
        Le || We(false, "No implementation found for action type '".concat(e.type, "'"));
        break;
    }
  }, r.prototype.removeChild = function(e) {
    var t;
    this.children.delete(e), this.forwardTo.delete(e), (t = this.state) === null || t === void 0 || delete t.children[e];
  }, r.prototype.stopChild = function(e) {
    var t = this.children.get(e);
    !t || (this.removeChild(e), Se(t.stop) && t.stop());
  }, r.prototype.spawn = function(e, t, i) {
    if (Is(e))
      return this.spawnPromise(Promise.resolve(e), t);
    if (Se(e))
      return this.spawnCallback(e, t);
    if (sc(e))
      return this.spawnActor(e, t);
    if (Xu(e))
      return this.spawnObservable(e, t);
    if (wr(e))
      return this.spawnMachine(e, Y(Y({}, i), { id: t }));
    if (Uu(e))
      return this.spawnBehavior(e, t);
    throw new Error('Unable to spawn entity "'.concat(t, '" of type "').concat(typeof e, '".'));
  }, r.prototype.spawnMachine = function(e, t) {
    var i = this;
    t === void 0 && (t = {});
    var l = new r(e, Y(Y({}, this.options), { parent: this, id: t.id || e.id })), c2 = Y(Y({}, Nf), t);
    c2.sync && l.onTransition(function(v) {
      i.send(ji, { state: v, id: l.id });
    });
    var d2 = l;
    return this.children.set(l.id, d2), c2.autoForward && this.forwardTo.add(l.id), l.onDone(function(v) {
      i.removeChild(l.id), i.send(tt(v, { origin: l.id }));
    }).start(), d2;
  }, r.prototype.spawnBehavior = function(e, t) {
    var i = mc(e, { id: t, parent: this });
    return this.children.set(t, i), i;
  }, r.prototype.spawnPromise = function(e, t) {
    var i, l = this, c2 = false, d2;
    e.then(function(b) {
      c2 || (d2 = b, l.removeChild(t), l.send(tt(ai(t, b), { origin: t })));
    }, function(b) {
      if (!c2) {
        l.removeChild(t);
        var y = On(t, b);
        try {
          l.send(tt(y, { origin: t }));
        } catch (w2) {
          Ju(b, w2, t), l.devTools && l.devTools.send(y, l.state), l.machine.strict && l.stop();
        }
      }
    });
    var v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w2) {
      var A2 = Ui(b, y, w2), O2 = false;
      return e.then(function(M2) {
        O2 || (A2.next(M2), !O2 && A2.complete());
      }, function(M2) {
        O2 || A2.error(M2);
      }), { unsubscribe: function() {
        return O2 = true;
      } };
    }, stop: function() {
      c2 = true;
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return d2;
    } }, i[xr] = function() {
      return this;
    }, i);
    return this.children.set(t, v), v;
  }, r.prototype.spawnCallback = function(e, t) {
    var i, l = this, c2 = false, d2 = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), b, y = u2(function(O2) {
      b = O2, v.forEach(function(M2) {
        return M2(O2);
      }), !c2 && l.send(tt(O2, { origin: t }));
    }, "receive"), w2;
    try {
      w2 = e(y, function(O2) {
        d2.add(O2);
      });
    } catch (O2) {
      this.send(On(t, O2));
    }
    if (Is(w2))
      return this.spawnPromise(w2, t);
    var A2 = (i = { id: t, send: function(O2) {
      return d2.forEach(function(M2) {
        return M2(O2);
      });
    }, subscribe: function(O2) {
      var M2 = Ui(O2);
      return v.add(M2.next), { unsubscribe: function() {
        v.delete(M2.next);
      } };
    }, stop: function() {
      c2 = true, Se(w2) && w2();
    }, toJSON: function() {
      return { id: t };
    }, getSnapshot: function() {
      return b;
    } }, i[xr] = function() {
      return this;
    }, i);
    return this.children.set(t, A2), A2;
  }, r.prototype.spawnObservable = function(e, t) {
    var i, l = this, c2, d2 = e.subscribe(function(b) {
      c2 = b, l.send(tt(b, { origin: t }));
    }, function(b) {
      l.removeChild(t), l.send(tt(On(t, b), { origin: t }));
    }, function() {
      l.removeChild(t), l.send(tt(ai(t), { origin: t }));
    }), v = (i = { id: t, send: function() {
    }, subscribe: function(b, y, w2) {
      return e.subscribe(b, y, w2);
    }, stop: function() {
      return d2.unsubscribe();
    }, getSnapshot: function() {
      return c2;
    }, toJSON: function() {
      return { id: t };
    } }, i[xr] = function() {
      return this;
    }, i);
    return this.children.set(t, v), v;
  }, r.prototype.spawnActor = function(e, t) {
    return this.children.set(t, e), e;
  }, r.prototype.spawnActivity = function(e) {
    var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
    if (!t) {
      Le || We(false, "No implementation found for activity '".concat(e.type, "'"));
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
    } }, i[xr] = function() {
      return this;
    }, i));
  }, r.prototype.attachDev = function() {
    var e = da();
    if (this.options.devTools && e) {
      if (e.__REDUX_DEVTOOLS_EXTENSION__) {
        var t = typeof this.options.devTools == "object" ? this.options.devTools : void 0;
        this.devTools = e.__REDUX_DEVTOOLS_EXTENSION__.connect(Y(Y({ name: this.id, autoPause: true, stateSanitizer: function(i) {
          return { value: i.value, context: i.context, actions: i.actions };
        } }, t), { features: Y({ jump: false, skip: false }, t ? t.features : void 0) }), this.machine), this.devTools.init(this.state);
      }
      vc(this);
    }
  }, r.prototype.toJSON = function() {
    return { id: this.id };
  }, r.prototype[xr] = function() {
    return this;
  }, r.prototype.getSnapshot = function() {
    return this.status === bt.NotStarted ? this.initialState : this._state;
  }, r.defaultOptions = { execute: true, deferEvents: true, clock: { setTimeout: function(e, t) {
    return setTimeout(e, t);
  }, clearTimeout: function(e) {
    return clearTimeout(e);
  } }, logger: console.log.bind(console), devTools: false }, r.interpret = Je, r;
}();
function Je(r, e) {
  var t = new gc(r, e);
  return t;
}
__name(Je, "Je");
u2(Je, "interpret");
function Gf(r) {
  if (typeof r == "string") {
    var e = { type: r };
    return e.toString = function() {
      return r;
    }, e;
  }
  return r;
}
__name(Gf, "Gf");
u2(Gf, "toInvokeSource");
function Ki(r) {
  return Y(Y({ type: qi }, r), { toJSON: function() {
    r.onDone, r.onError;
    var e = ei(r, ["onDone", "onError"]);
    return Y(Y({}, e), { type: qi, src: Gf(r.src) });
  } });
}
__name(Ki, "Ki");
u2(Ki, "toInvokeDefinition");
var ui = "";
var js = "#";
var Qi = "*";
var si = {};
var li = u2(function(r) {
  return r[0] === js;
}, "isStateId");
var Lf = u2(function() {
  return { actions: {}, guards: {}, services: {}, activities: {}, delays: {} };
}, "createDefaultOptions");
var qf = u2(function(r, e, t) {
  var i = t.slice(0, -1).some(function(c2) {
    return !("cond" in c2) && !("in" in c2) && (ge(c2.target) || wr(c2.target));
  }), l = e === ui ? "the transient event" : "event '".concat(e, "'");
  We(!i, "One or more transitions for ".concat(l, " on state '").concat(r.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
}, "validateArrayifiedTransitions");
var bc = function() {
  function r(e, t, i, l) {
    var c2 = this;
    i === void 0 && (i = "context" in e ? e.context : void 0);
    var d2;
    this.config = e, this._context = i, this.order = -1, this.__xstatenode = true, this.__cache = { events: void 0, relativeValue: /* @__PURE__ */ new Map(), initialStateValue: void 0, initialState: void 0, on: void 0, transitions: void 0, candidates: {}, delayedTransitions: void 0 }, this.idMap = {}, this.tags = [], this.options = Object.assign(Lf(), t), this.parent = l == null ? void 0 : l.parent, this.key = this.config.key || (l == null ? void 0 : l.key) || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : ea), this.id = this.config.id || Re([this.machine.key], me(this.path), false).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.schema = this.parent ? this.machine.schema : (d2 = this.config.schema) !== null && d2 !== void 0 ? d2 : {}, this.description = this.config.description, Le || We(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead.")), this.initial = this.config.initial, this.states = this.config.states ? ii(this.config.states, function(y, w2) {
      var A2, O2 = new r(y, {}, void 0, { parent: c2, key: w2 });
      return Object.assign(c2.idMap, Y((A2 = {}, A2[O2.id] = O2, A2), O2.idMap)), O2;
    }) : si;
    var v = 0;
    function b(y) {
      var w2, A2;
      y.order = v++;
      try {
        for (var O2 = ve(_n(y)), M2 = O2.next(); !M2.done; M2 = O2.next()) {
          var R2 = M2.value;
          b(R2);
        }
      } catch (S) {
        w2 = { error: S };
      } finally {
        try {
          M2 && !M2.done && (A2 = O2.return) && A2.call(O2);
        } finally {
          if (w2)
            throw w2.error;
        }
      }
    }
    __name(b, "b");
    u2(b, "dfs"), b(this), this.history = this.config.history === true ? "shallow" : this.config.history || false, this._transient = !!this.config.always || (this.config.on ? Array.isArray(this.config.on) ? this.config.on.some(function(y) {
      var w2 = y.event;
      return w2 === ui;
    }) : ui in this.config.on : false), this.strict = !!this.config.strict, this.onEntry = Lt(this.config.entry || this.config.onEntry).map(function(y) {
      return oi(y);
    }), this.onExit = Lt(this.config.exit || this.config.onExit).map(function(y) {
      return oi(y);
    }), this.meta = this.config.meta, this.doneData = this.type === "final" ? this.config.data : void 0, this.invoke = Lt(this.config.invoke).map(function(y, w2) {
      var A2, O2;
      if (wr(y)) {
        var M2 = Wi(c2.id, w2);
        return c2.machine.options.services = Y((A2 = {}, A2[M2] = y, A2), c2.machine.options.services), Ki({ src: M2, id: M2 });
      } else if (ge(y.src)) {
        var M2 = y.id || Wi(c2.id, w2);
        return Ki(Y(Y({}, y), { id: M2, src: y.src }));
      } else if (wr(y.src) || Se(y.src)) {
        var M2 = y.id || Wi(c2.id, w2);
        return c2.machine.options.services = Y((O2 = {}, O2[M2] = y.src, O2), c2.machine.options.services), Ki(Y(Y({ id: M2 }, y), { src: M2 }));
      } else {
        var R2 = y.src;
        return Ki(Y(Y({ id: Wi(c2.id, w2) }, y), { src: R2 }));
      }
    }), this.activities = Lt(this.config.activities).concat(this.invoke).map(function(y) {
      return pa(y);
    }), this.transition = this.transition.bind(this), this.tags = Lt(this.config.tags);
  }
  __name(r, "r");
  return u2(r, "StateNode"), r.prototype._init = function() {
    this.__cache.transitions || ks(this).forEach(function(e) {
      return e.on;
    });
  }, r.prototype.withConfig = function(e, t) {
    var i = this.options, l = i.actions, c2 = i.activities, d2 = i.guards, v = i.services, b = i.delays;
    return new r(this.config, { actions: Y(Y({}, l), e.actions), activities: Y(Y({}, c2), e.activities), guards: Y(Y({}, d2), e.guards), services: Y(Y({}, v), e.services), delays: Y(Y({}, b), e.delays) }, t != null ? t : this.context);
  }, r.prototype.withContext = function(e) {
    return new r(this.config, this.options, e);
  }, Object.defineProperty(r.prototype, "context", { get: function() {
    return Se(this._context) ? this._context() : this._context;
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "definition", { get: function() {
    return { id: this.id, key: this.key, version: this.version, context: this.context, type: this.type, initial: this.initial, history: this.history, states: ii(this.states, function(e) {
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
    var t = e === ui, i = this.transitions.filter(function(l) {
      var c2 = l.eventType === e;
      return t ? c2 : c2 || l.eventType === Qi;
    });
    return this.__cache.candidates[e] = i, i;
  }, r.prototype.getDelayedTransitions = function() {
    var e = this, t = this.config.after;
    if (!t)
      return [];
    var i = u2(function(c2, d2) {
      var v = Se(c2) ? "".concat(e.id, ":delay[").concat(d2, "]") : c2, b = rc(v, e.id);
      return e.onEntry.push(Rs(b, { delay: c2 })), e.onExit.push(Qu(b)), b;
    }, "mutateEntryExit"), l = zr(t) ? t.map(function(c2, d2) {
      var v = i(c2.delay, d2);
      return Y(Y({}, c2), { event: v });
    }) : ke(Object.keys(t).map(function(c2, d2) {
      var v = t[c2], b = ge(v) ? { target: v } : v, y = isNaN(+c2) ? c2 : +c2, w2 = i(y, d2);
      return Lt(b).map(function(A2) {
        return Y(Y({}, A2), { event: w2, delay: y });
      });
    }));
    return l.map(function(c2) {
      var d2 = c2.delay;
      return Y(Y({}, e.formatTransition(c2)), { delay: d2 });
    });
  }, r.prototype.getStateNodes = function(e) {
    var t, i = this;
    if (!e)
      return [];
    var l = e instanceof hr ? e.value : ni(e, this.delimiter);
    if (ge(l)) {
      var c2 = this.getStateNode(l).initial;
      return c2 !== void 0 ? this.getStateNodes((t = {}, t[l] = c2, t)) : [this, this.states[l]];
    }
    var d2 = Object.keys(l), v = [this];
    return v.push.apply(v, Re([], me(ke(d2.map(function(b) {
      return i.getStateNode(b).getStateNodes(l[b]);
    }))), false)), v;
  }, r.prototype.handles = function(e) {
    var t = na(e);
    return this.events.includes(t);
  }, r.prototype.resolveState = function(e) {
    var t = e instanceof hr ? e : hr.create(e), i = Array.from(Mn([], this.getStateNodes(t.value)));
    return new hr(Y(Y({}, t), { value: this.resolve(t.value), configuration: i, done: An(i, this), tags: Ns(i), machine: this.machine }));
  }, r.prototype.transitionLeafNode = function(e, t, i) {
    var l = this.getStateNode(e), c2 = l.next(t, i);
    return !c2 || !c2.transitions.length ? this.next(t, i) : c2;
  }, r.prototype.transitionCompoundNode = function(e, t, i) {
    var l = Object.keys(e), c2 = this.getStateNode(l[0]), d2 = c2._transition(e[l[0]], t, i);
    return !d2 || !d2.transitions.length ? this.next(t, i) : d2;
  }, r.prototype.transitionParallelNode = function(e, t, i) {
    var l, c2, d2 = {};
    try {
      for (var v = ve(Object.keys(e)), b = v.next(); !b.done; b = v.next()) {
        var y = b.value, w2 = e[y];
        if (!!w2) {
          var A2 = this.getStateNode(y), O2 = A2._transition(w2, t, i);
          O2 && (d2[y] = O2);
        }
      }
    } catch (I2) {
      l = { error: I2 };
    } finally {
      try {
        b && !b.done && (c2 = v.return) && c2.call(v);
      } finally {
        if (l)
          throw l.error;
      }
    }
    var M2 = Object.keys(d2).map(function(I2) {
      return d2[I2];
    }), R2 = ke(M2.map(function(I2) {
      return I2.transitions;
    })), S = M2.some(function(I2) {
      return I2.transitions.length > 0;
    });
    if (!S)
      return this.next(t, i);
    var _ = ke(M2.map(function(I2) {
      return I2.entrySet;
    })), P = ke(Object.keys(d2).map(function(I2) {
      return d2[I2].configuration;
    }));
    return { transitions: R2, entrySet: _, exitSet: ke(M2.map(function(I2) {
      return I2.exitSet;
    })), configuration: P, source: t, actions: ke(Object.keys(d2).map(function(I2) {
      return d2[I2].actions;
    })) };
  }, r.prototype._transition = function(e, t, i) {
    return ge(e) ? this.transitionLeafNode(e, t, i) : Object.keys(e).length === 1 ? this.transitionCompoundNode(e, t, i) : this.transitionParallelNode(e, t, i);
  }, r.prototype.getTransitionData = function(e, t) {
    return this._transition(e.value, e, tt(t));
  }, r.prototype.next = function(e, t) {
    var i, l, c2 = this, d2 = t.name, v = [], b = [], y;
    try {
      for (var w2 = ve(this.getCandidates(d2)), A2 = w2.next(); !A2.done; A2 = w2.next()) {
        var O2 = A2.value, M2 = O2.cond, R2 = O2.in, S = e.context, _ = R2 ? ge(R2) && li(R2) ? e.matches(ni(this.getStateNodeById(R2).path, this.delimiter)) : $i(ni(R2, this.delimiter), Bu(this.path.slice(0, -2))(e.value)) : true, P = false;
        try {
          P = !M2 || sa(this.machine, M2, S, t, e);
        } catch (B) {
          throw new Error("Unable to evaluate guard '".concat(M2.name || M2.type, "' in transition for event '").concat(d2, "' in state node '").concat(this.id, `':
`).concat(B.message));
        }
        if (P && _) {
          O2.target !== void 0 && (b = O2.target), v.push.apply(v, Re([], me(O2.actions), false)), y = O2;
          break;
        }
      }
    } catch (B) {
      i = { error: B };
    } finally {
      try {
        A2 && !A2.done && (l = w2.return) && l.call(w2);
      } finally {
        if (i)
          throw i.error;
      }
    }
    if (!!y) {
      if (!b.length)
        return { transitions: [y], entrySet: [], exitSet: [], configuration: e.value ? [this] : [], source: e, actions: v };
      var I2 = ke(b.map(function(B) {
        return c2.getRelativeStateNodes(B, e.historyValue);
      })), L = !!y.internal, E = L ? [] : ke(I2.map(function(B) {
        return c2.nodesFromChild(B);
      }));
      return { transitions: [y], entrySet: E, exitSet: L ? [] : [this], configuration: I2, source: e, actions: v };
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
    var c2, d2, v, b, y = Mn([], l ? this.getStateNodes(l.value) : [this]), w2 = e.configuration.length ? Mn(y, e.configuration) : y;
    try {
      for (var A2 = ve(w2), O2 = A2.next(); !O2.done; O2 = A2.next()) {
        var M2 = O2.value;
        Zi(y, M2) || e.entrySet.push(M2);
      }
    } catch (X) {
      c2 = { error: X };
    } finally {
      try {
        O2 && !O2.done && (d2 = A2.return) && d2.call(A2);
      } finally {
        if (c2)
          throw c2.error;
      }
    }
    try {
      for (var R2 = ve(y), S = R2.next(); !S.done; S = R2.next()) {
        var M2 = S.value;
        (!Zi(w2, M2) || Zi(e.exitSet, M2.parent)) && e.exitSet.push(M2);
      }
    } catch (X) {
      v = { error: X };
    } finally {
      try {
        S && !S.done && (b = R2.return) && b.call(R2);
      } finally {
        if (v)
          throw v.error;
      }
    }
    var _ = ke(e.entrySet.map(function(X) {
      var V = [];
      if (X.type !== "final")
        return V;
      var $ = X.parent;
      if (!$.parent)
        return V;
      V.push(Xi(X.id, X.doneData), Xi($.id, X.doneData ? En(X.doneData, t, i) : void 0));
      var U = $.parent;
      return U.type === "parallel" && _n(U).every(function(re) {
        return An(e.configuration, re);
      }) && V.push(Xi(U.id)), V;
    }));
    e.exitSet.sort(function(X, V) {
      return V.order - X.order;
    }), e.entrySet.sort(function(X, V) {
      return X.order - V.order;
    });
    var P = new Set(e.entrySet), I2 = new Set(e.exitSet), L = me([ke(Array.from(P).map(function(X) {
      return Re(Re([], me(X.activities.map(function(V) {
        return ec(V);
      })), false), me(X.onEntry), false);
    })).concat(_.map(Ku)), ke(Array.from(I2).map(function(X) {
      return Re(Re([], me(X.onExit), false), me(X.activities.map(function(V) {
        return tc(V);
      })), false);
    }))], 2), E = L[0], B = L[1], z2 = Vi(B.concat(e.actions).concat(E), this.machine.options.actions);
    return z2;
  }, r.prototype.transition = function(e, t, i) {
    e === void 0 && (e = this.initialState);
    var l = tt(t), c2;
    if (e instanceof hr)
      c2 = i === void 0 ? e : this.resolveState(hr.from(e, i));
    else {
      var d2 = ge(e) ? this.resolve(Bi(this.getResolvedPath(e))) : this.resolve(e), v = i != null ? i : this.machine.context;
      c2 = this.resolveState(hr.from(d2, v));
    }
    if (!Le && l.name === Qi)
      throw new Error("An event cannot have the wildcard type ('".concat(Qi, "')"));
    if (this.strict && !this.events.includes(l.name) && !Fu(l.name))
      throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(l.name, "'"));
    var b = this._transition(c2.value, c2, l) || { transitions: [], configuration: [], entrySet: [], exitSet: [], source: c2, actions: [] }, y = Mn([], this.getStateNodes(c2.value)), w2 = b.configuration.length ? Mn(y, b.configuration) : y;
    return b.configuration = Re([], me(w2), false), this.resolveTransition(b, c2, c2.context, l);
  }, r.prototype.resolveRaisedTransition = function(e, t, i) {
    var l, c2 = e.actions;
    return e = this.transition(e, t), e._event = i, e.event = i.data, (l = e.actions).unshift.apply(l, Re([], me(c2), false)), e;
  }, r.prototype.resolveTransition = function(e, t, i, l) {
    var c2, d2, v = this;
    l === void 0 && (l = Tn);
    var b = e.configuration, y = !t || e.transitions.length > 0, w2 = y ? cc(this.machine, b) : void 0, A2 = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0, O2 = this.getActions(e, i, l, t), M2 = t ? Y({}, t.activities) : {};
    try {
      for (var R2 = ve(O2), S = R2.next(); !S.done; S = R2.next()) {
        var _ = S.value;
        _.type === Li ? M2[_.activity.id || _.activity.type] = _ : _.type === ti && (M2[_.activity.id || _.activity.type] = false);
      }
    } catch (fe) {
      c2 = { error: fe };
    } finally {
      try {
        S && !S.done && (d2 = R2.return) && d2.call(R2);
      } finally {
        if (c2)
          throw c2.error;
      }
    }
    var P = me(ca(this, t, i, l, O2, this.machine.config.preserveActionOrder), 2), I2 = P[0], L = P[1], E = me(oa(I2, function(fe) {
      return fe.type === ri || fe.type === wn && fe.to === Kr.Internal;
    }), 2), B = E[0], z2 = E[1], X = I2.filter(function(fe) {
      var Ze;
      return fe.type === Li && ((Ze = fe.activity) === null || Ze === void 0 ? void 0 : Ze.type) === qi;
    }), V = X.reduce(function(fe, Ze) {
      return fe[Ze.activity.id] = oc(Ze.activity, v.machine, L, l), fe;
    }, t ? Y({}, t.children) : {}), $ = y ? e.configuration : t ? t.configuration : [], U = An($, this), re = new hr({ value: w2 || t.value, context: L, _event: l, _sessionid: t ? t._sessionid : null, historyValue: w2 ? A2 ? Vu(A2, w2) : void 0 : t ? t.historyValue : void 0, history: !w2 || e.source ? t : void 0, actions: w2 ? z2 : [], activities: w2 ? M2 : t ? t.activities : {}, events: [], configuration: $, transitions: e.transitions, children: V, done: U, tags: t == null ? void 0 : t.tags, machine: this }), ie = i !== L;
    re.changed = l.name === ji || ie;
    var W = re.history;
    W && delete W.history;
    var ce = !U && (this._transient || b.some(function(fe) {
      return fe._transient;
    }));
    if (!y && (!ce || l.name === ui))
      return re;
    var Pe = re;
    if (!U)
      for (ce && (Pe = this.resolveRaisedTransition(Pe, { type: Nu }, l)); B.length; ) {
        var Ue = B.shift();
        Pe = this.resolveRaisedTransition(Pe, Ue._event, l);
      }
    var Ge = Pe.changed || (W ? !!Pe.actions.length || ie || typeof W.value != typeof Pe.value || !Gs(Pe.value, W.value) : void 0);
    return Pe.changed = Ge, Pe.history = W, Pe.tags = Ns(Pe.configuration), Pe;
  }, r.prototype.getStateNode = function(e) {
    if (li(e))
      return this.machine.getStateNodeById(e);
    if (!this.states)
      throw new Error("Unable to retrieve child state '".concat(e, "' from '").concat(this.id, "'; no child states exist."));
    var t = this.states[e];
    if (!t)
      throw new Error("Child state '".concat(e, "' does not exist on '").concat(this.id, "'"));
    return t;
  }, r.prototype.getStateNodeById = function(e) {
    var t = li(e) ? e.slice(js.length) : e;
    if (t === this.id)
      return this;
    var i = this.machine.idMap[t];
    if (!i)
      throw new Error("Child state node '#".concat(t, "' does not exist on machine '").concat(this.id, "'"));
    return i;
  }, r.prototype.getStateNodeByPath = function(e) {
    if (typeof e == "string" && li(e))
      try {
        return this.getStateNodeById(e.slice(1));
      } catch (c2) {
      }
    for (var t = ia(e, this.delimiter).slice(), i = this; t.length; ) {
      var l = t.shift();
      if (!l.length)
        break;
      i = i.getStateNode(l);
    }
    return i;
  }, r.prototype.resolve = function(e) {
    var t, i = this;
    if (!e)
      return this.initialStateValue || si;
    switch (this.type) {
      case "parallel":
        return ii(this.initialStateValue, function(c2, d2) {
          return c2 ? i.getStateNode(d2).resolve(e[d2] || c2) : si;
        });
      case "compound":
        if (ge(e)) {
          var l = this.getStateNode(e);
          return l.type === "parallel" || l.type === "compound" ? (t = {}, t[e] = l.initialStateValue, t) : e;
        }
        return Object.keys(e).length ? ii(e, function(c2, d2) {
          return c2 ? i.getStateNode(d2).resolve(c2) : si;
        }) : this.initialStateValue || {};
      default:
        return e || si;
    }
  }, r.prototype.getResolvedPath = function(e) {
    if (li(e)) {
      var t = this.machine.idMap[e.slice(js.length)];
      if (!t)
        throw new Error("Unable to find state node '".concat(e, "'"));
      return t.path;
    }
    return ia(e, this.delimiter);
  }, Object.defineProperty(r.prototype, "initialStateValue", { get: function() {
    var e;
    if (this.__cache.initialStateValue)
      return this.__cache.initialStateValue;
    var t;
    if (this.type === "parallel")
      t = Ps(this.states, function(i) {
        return i.initialStateValue || si;
      }, function(i) {
        return i.type !== "history";
      });
    else if (this.initial !== void 0) {
      if (!this.states[this.initial])
        throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
      t = Yi(this.states[this.initial]) ? this.initial : (e = {}, e[this.initial] = this.states[this.initial].initialStateValue, e);
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
      ge(t.target) ? e = li(t.target) ? Bi(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target : e = t.target;
    }
    return e;
  }, enumerable: false, configurable: true }), r.prototype.getRelativeStateNodes = function(e, t, i) {
    return i === void 0 && (i = true), i ? e.type === "history" ? e.resolveHistory(t) : e.initialStateNodes : [e];
  }, Object.defineProperty(r.prototype, "initialStateNodes", { get: function() {
    var e = this;
    if (Yi(this))
      return [this];
    if (this.type === "compound" && !this.initial)
      return Le || We(false, "Compound state node '".concat(this.id, "' has no initial state.")), [this];
    var t = Hi(this.initialStateValue);
    return ke(t.map(function(i) {
      return e.getFromRelativePath(i);
    }));
  }, enumerable: false, configurable: true }), r.prototype.getFromRelativePath = function(e) {
    if (!e.length)
      return [this];
    var t = me(e), i = t[0], l = t.slice(1);
    if (!this.states)
      throw new Error("Cannot retrieve subPath '".concat(i, "' from node with no states"));
    var c2 = this.getStateNode(i);
    if (c2.type === "history")
      return c2.resolveHistory();
    if (!this.states[i])
      throw new Error("Child state '".concat(i, "' does not exist on '").concat(this.id, "'"));
    return this.states[i].getFromRelativePath(l);
  }, r.prototype.historyValue = function(e) {
    if (!!Object.keys(this.states).length)
      return { current: e || this.initialStateValue, states: Ps(this.states, function(t, i) {
        if (!e)
          return t.historyValue();
        var l = ge(e) ? void 0 : e[i];
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
      return l ? ke(Hi(l).map(function(d2) {
        return i.getFromRelativePath(d2);
      })) : i.initialStateNodes;
    }
    var c2 = $u(i.path, "states")(e).current;
    return ge(c2) ? [i.getStateNode(c2)] : ke(Hi(c2).map(function(d2) {
      return t.history === "deep" ? i.getFromRelativePath(d2) : [i.states[d2[0]]];
    }));
  }, Object.defineProperty(r.prototype, "stateIds", { get: function() {
    var e = this, t = ke(Object.keys(this.states).map(function(i) {
      return e.states[i].stateIds;
    }));
    return [this.id].concat(t);
  }, enumerable: false, configurable: true }), Object.defineProperty(r.prototype, "events", { get: function() {
    var e, t, i, l;
    if (this.__cache.events)
      return this.__cache.events;
    var c2 = this.states, d2 = new Set(this.ownEvents);
    if (c2)
      try {
        for (var v = ve(Object.keys(c2)), b = v.next(); !b.done; b = v.next()) {
          var y = b.value, w2 = c2[y];
          if (w2.states)
            try {
              for (var A2 = (i = void 0, ve(w2.events)), O2 = A2.next(); !O2.done; O2 = A2.next()) {
                var M2 = O2.value;
                d2.add("".concat(M2));
              }
            } catch (R2) {
              i = { error: R2 };
            } finally {
              try {
                O2 && !O2.done && (l = A2.return) && l.call(A2);
              } finally {
                if (i)
                  throw i.error;
              }
            }
        }
      } catch (R2) {
        e = { error: R2 };
      } finally {
        try {
          b && !b.done && (t = v.return) && t.call(v);
        } finally {
          if (e)
            throw e.error;
        }
      }
    return this.__cache.events = Array.from(d2);
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
        if (!ge(i))
          return i;
        var l = i[0] === t.delimiter;
        if (l && !t.parent)
          return t.getStateNodeByPath(i.slice(1));
        var c2 = l ? t.key + i : i;
        if (t.parent)
          try {
            var d2 = t.parent.getStateNodeByPath(c2);
            return d2;
          } catch (v) {
            throw new Error("Invalid transition definition for state node '".concat(t.id, `':
`).concat(v.message));
          }
        else
          return t.getStateNodeByPath(c2);
      });
  }, r.prototype.formatTransition = function(e) {
    var t = this, i = Zu(e.target), l = "internal" in e ? e.internal : i ? i.some(function(b) {
      return ge(b) && b[0] === t.delimiter;
    }) : true, c2 = this.machine.options.guards, d2 = this.resolveTarget(i), v = Y(Y({}, e), { actions: Vi(Lt(e.actions)), cond: aa(e.cond, c2), target: d2, source: this, internal: l, eventType: e.event, toJSON: function() {
      return Y(Y({}, v), { target: v.target ? v.target.map(function(b) {
        return "#".concat(b.id);
      }) : void 0, source: "#".concat(t.id) });
    } });
    return v;
  }, r.prototype.formatTransitions = function() {
    var e, t, i = this, l;
    if (!this.config.on)
      l = [];
    else if (Array.isArray(this.config.on))
      l = this.config.on;
    else {
      var c2 = this.config.on, d2 = Qi, v = c2[d2], b = v === void 0 ? [] : v, y = ei(c2, [typeof d2 == "symbol" ? d2 : d2 + ""]);
      l = ke(Object.keys(y).map(function(I2) {
        !Le && I2 === ui && We(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(i.id, '".'));
        var L = Sn(I2, y[I2]);
        return Le || qf(i, I2, L), L;
      }).concat(Sn(Qi, b)));
    }
    var w2 = this.config.always ? Sn("", this.config.always) : [], A2 = this.config.onDone ? Sn(String(Xi(this.id)), this.config.onDone) : [];
    Le || We(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
    var O2 = ke(this.invoke.map(function(I2) {
      var L = [];
      return I2.onDone && L.push.apply(L, Re([], me(Sn(String(ai(I2.id)), I2.onDone)), false)), I2.onError && L.push.apply(L, Re([], me(Sn(String(On(I2.id)), I2.onError)), false)), L;
    })), M2 = this.after, R2 = ke(Re(Re(Re(Re([], me(A2), false), me(O2), false), me(l), false), me(w2), false).map(function(I2) {
      return Lt(I2).map(function(L) {
        return i.formatTransition(L);
      });
    }));
    try {
      for (var S = ve(M2), _ = S.next(); !_.done; _ = S.next()) {
        var P = _.value;
        R2.push(P);
      }
    } catch (I2) {
      e = { error: I2 };
    } finally {
      try {
        _ && !_.done && (t = S.return) && t.call(S);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return R2;
  }, r;
}();
function rt(r, e) {
  return new bc(r, e);
}
__name(rt, "rt");
u2(rt, "createMachine");
var Qr = Xo(xc());
function wc(r) {
  let e = en(r);
  return new Qr.default(e).valueOf() * Math.PI;
}
__name(wc, "wc");
u2(wc, "V");
function to(r) {
  let e = en(r).split("/");
  if (e.length === 1)
    return 1;
  if (e.length === 2)
    return parseInt(e[1]);
  throw new Error(`Failed to parse angle '${r}'`);
}
__name(to, "to");
u2(to, "X");
function Ec(r, e) {
  return new Qr.default(en(r)).valueOf() < new Qr.default(en(e)).valueOf();
}
__name(Ec, "Ec");
u2(Ec, "W");
function Sc(r, e) {
  return new Qr.default(en(r)).valueOf() > new Qr.default(en(e)).valueOf();
}
__name(Sc, "Sc");
u2(Sc, "H");
function Tc(r) {
  if (r === "0")
    return true;
  if (!/π/.test(r))
    return false;
  try {
    let e = en(r);
    return new Qr.default(e).valueOf(), true;
  } catch (e) {
    return false;
  }
}
__name(Tc, "Tc");
u2(Tc, "Q");
function en(r) {
  return r.replace(/(\d+)π/g, "$1").replace(/π/g, "1");
}
__name(en, "en");
u2(en, "l");
function Oc(r) {
  try {
    let e = en(r), t = new Qr.default(e).toFraction().split("/"), i;
    return t[0] === "0" ? i = "0" : t[0] === "1" ? i = "\u03C0" : t[0] === "-1" ? i = "-\u03C0" : i = `${t[0]}\u03C0`, t.length === 1 ? i : `${i}/${t[1]}`;
  } catch (e) {
    throw new Error(`Failed to parse angle '${r}'`);
  }
}
__name(Oc, "Oc");
u2(Oc, "J");
var jf = Object.prototype.toString.call({});
var Bf = "!recursion-limit!";
var $f = 10;
function nt(r, e = $f) {
  return Hf(r) || Ff(r, e) || Uf(r, e);
}
__name(nt, "nt");
u2(nt, "c");
function Hf(r) {
  if (r === null)
    return "null";
  if (r === void 0)
    return "undefined";
  if (typeof r == "string")
    return `"${r}"`;
  if (typeof r == "number")
    return String(r);
}
__name(Hf, "Hf");
u2(Hf, "M");
function Ff(r, e) {
  if (e === 0)
    return Bf;
  if (r instanceof Map)
    return Wf(r, e);
  if (r instanceof Set)
    return Vf(r, e);
  if (((t) => t[Symbol.iterator] !== void 0)(r))
    return Xf(r, e);
}
__name(Ff, "Ff");
u2(Ff, "O");
function Uf(r, e) {
  let t = String(r);
  return t !== jf ? t : Yf(r, e);
}
__name(Uf, "Uf");
u2(Uf, "F");
function Wf(r, e) {
  let t = [];
  for (let [i, l] of r.entries()) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c2 = nt(i, e - 1), d2 = nt(l, e - 1);
    t.push(`${c2}: ${d2}`);
  }
  return `Map{${t.join(", ")}}`;
}
__name(Wf, "Wf");
u2(Wf, "G");
function Vf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(nt(i, e - 1));
  }
  return `Set{${t.join(", ")}}`;
}
__name(Vf, "Vf");
u2(Vf, "R");
function Xf(r, e) {
  let t = [];
  for (let i of r) {
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    t.push(nt(i, e - 1));
  }
  return `${Array.isArray(r) ? "" : r.constructor.name}[${t.join(", ")}]`;
}
__name(Xf, "Xf");
u2(Xf, "N");
function Yf(r, e) {
  let t = [];
  for (let l in r) {
    if (!Object.prototype.hasOwnProperty.call(r, l))
      continue;
    if (t.length > 1e3) {
      t.push("[...]");
      break;
    }
    let c2 = r[l], d2 = nt(l, e - 1), v = nt(c2, e - 1);
    t.push(`${d2}: ${v}`);
  }
  let i = r.constructor.name;
  return `${i === {}.constructor.name ? "" : `(Type: ${i})`}{${t.join(", ")}}`;
}
__name(Yf, "Yf");
u2(Yf, "q");
var $s = 0;
var kr = u2(class extends Error {
  constructor(r, e) {
    super(r);
    this.detailsObj = e, this.name = "Error", this.message = r, this.stack = new Error().stack, this.stack !== void 0 && (this.stack = this.stack.replace(/^Error\n\s+at new DetailedError (\S+)\s?\n\s+at /, `
    `)), $s++;
    try {
      this.details = $s === 1 ? nt(this.detailsObj) : "(failed to describe detailsObj due to possibly re-entrancy)";
    } catch (t) {
      console.error(t), this.details = "(failed to describe detailsObj, see the console for details)";
    } finally {
      $s--;
    }
  }
}, "d");
var Zf = [{ character: "\xBD", ref: "\xBD", expanded: "1/2", value: 0.5 }, { character: "\xBC", ref: "\xBC", expanded: "1/4", value: 0.25 }, { character: "\xBE", ref: "\xBE", expanded: "3/4", value: 0.75 }, { character: "\u2153", ref: "\u2153", expanded: "1/3", value: 0.3333333333333333 }, { character: "\u2154", ref: "\u2154", expanded: "2/3", value: 0.6666666666666666 }, { character: "\u2155", ref: "\u2155", expanded: "1/5", value: 0.2 }, { character: "\u2156", ref: "\u2156", expanded: "2/5", value: 0.4 }, { character: "\u2157", ref: "\u2157", expanded: "3/5", value: 0.6 }, { character: "\u2158", ref: "\u2158", expanded: "4/5", value: 0.8 }, { character: "\u2159", ref: "\u2159", expanded: "1/6", value: 0.16666666666666666 }, { character: "\u215A", ref: "\u215A", expanded: "5/6", value: 0.8333333333333334 }, { character: "\u2150", ref: "\u2150", expanded: "1/7", value: 0.14285714285714285 }, { character: "\u215B", ref: "\u215B", expanded: "1/8", value: 0.125 }, { character: "\u215C", ref: "\u215C", expanded: "3/8", value: 0.375 }, { character: "\u215D", ref: "\u215D", expanded: "5/8", value: 0.625 }, { character: "\u215E", ref: "\u215E", expanded: "7/8", value: 0.875 }, { character: "\u2151", ref: "\u2151", expanded: "1/9", value: 0.1111111111111111 }, { character: "\u2152", ref: "\u2152", expanded: "1/10", value: 0.1 }];
var qt = u2(class {
  static parseFloat(r) {
    if (r.length === 0)
      throw new Error(`Not a number: '${r}'`);
    if (r[0] === "-")
      return -qt.parseFloat(r.substr(1));
    if (r[0] === "\u221A")
      return Math.sqrt(qt.parseFloat(r.substr(1)));
    let e = qt.matchUnicodeFraction((i) => i.character === r);
    if (e !== void 0)
      return e.value;
    let t = parseFloat(r);
    if (isNaN(t))
      throw new Error(`Not a number: '${r}'`);
    return t;
  }
  static simplifyByRounding(r, e) {
    if (r < 0)
      return -qt.simplifyByRounding(-r, e);
    let t = r % 1;
    if (t <= e || 1 - t <= e)
      return Math.round(r);
    let i = qt.matchUnicodeFraction((c2) => Math.abs(c2.value - r) <= e);
    if (i !== void 0)
      return i.value;
    let l = qt.matchUnicodeFraction((c2) => Math.abs(Math.sqrt(c2.value) - r) <= e);
    return l !== void 0 ? Math.sqrt(l.value) : r;
  }
  static matchUnicodeFraction(r) {
    for (let e of Zf)
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
    let i = qt.matchUnicodeFraction((c2) => Math.abs(c2.value - r) <= e);
    if (i !== void 0)
      return i.character;
    let l = qt.matchUnicodeFraction((c2) => Math.abs(Math.sqrt(c2.value) - r) <= e);
    return l !== void 0 ? `\u221A${l.character}` : r % 1 !== 0 && t !== void 0 ? r.toFixed(t) : r.toString();
  }
}, "u");
var eo = qt;
eo.CONSISTENT = new qt(false, 0, 2, ", "), eo.EXACT = new qt(true, 0, void 0, ", "), eo.MINIFIED = new qt(true, 0, void 0, ","), eo.SIMPLIFIED = new qt(true, 5e-4, 3, ", ");
var ue = u2(class {
  static need(r, e, t) {
    if (r !== true) {
      let i = t === void 0 ? "(not provided)" : `[${Array.prototype.slice.call(t).join(", ")}]`, l = `Precondition failed

Message: ${e === void 0 ? "(not provided)" : e}

Args: ${i}`;
      throw new Error(l);
    }
  }
  static notNull(r) {
    ue.need(r != null, "notNull");
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
var de = u2(class {
  static from(r) {
    if (r instanceof de)
      return r;
    if (typeof r == "number")
      return new de(r, 0);
    throw new kr("Unrecognized value type.", { v: r });
  }
  static polar(r, e) {
    let [t, i] = ue.snappedCosSin(e);
    return new de(r * t, r * i);
  }
  static realPartOf(r) {
    if (r instanceof de)
      return r.real;
    if (typeof r == "number")
      return r;
    throw new kr("Unrecognized value type.", { v: r });
  }
  static imagPartOf(r) {
    if (r instanceof de)
      return r.imag;
    if (typeof r == "number")
      return 0;
    throw new kr("Unrecognized value type.", { v: r });
  }
  constructor(r, e) {
    this.real = r, this.imag = e;
  }
  static rootsOfQuadratic(r, e, t) {
    if (r = de.from(r), e = de.from(e), t = de.from(t), r.isEqualTo(0)) {
      if (!e.isEqualTo(0))
        return [t.times(-1).dividedBy(e)];
      if (!t.isEqualTo(0))
        return [];
      throw Error("Degenerate");
    }
    let i = e.times(e).minus(r.times(t).times(4)).sqrts(), l = e.times(-1), c2 = r.times(2);
    return i.map((d2) => l.minus(d2).dividedBy(c2));
  }
  isEqualTo(r) {
    return r instanceof de ? this.real === r.real && this.imag === r.imag : typeof r == "number" ? this.real === r && this.imag === 0 : false;
  }
  isApproximatelyEqualTo(r, e) {
    if (r instanceof de || typeof r == "number") {
      let t = this.minus(de.from(r));
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
    return r < 1e-5 ? de.polar(1, this.phase()) : this.dividedBy(Math.sqrt(r));
  }
  plus(r) {
    let e = de.from(r);
    return new de(this.real + e.real, this.imag + e.imag);
  }
  minus(r) {
    let e = de.from(r);
    return new de(this.real - e.real, this.imag - e.imag);
  }
  times(r) {
    let e = de.from(r);
    return new de(this.real * e.real - this.imag * e.imag, this.real * e.imag + this.imag * e.real);
  }
  dividedBy(r) {
    let e = de.from(r), t = e.norm2();
    if (t === 0)
      throw new Error("Division by Zero");
    let i = this.times(e.conjugate());
    return new de(i.real / t, i.imag / t);
  }
  sqrts() {
    let [r, e] = [this.real, this.imag], t = Math.sqrt(Math.sqrt(r * r + e * e));
    if (t === 0)
      return [de.ZERO];
    if (e === 0 && r < 0)
      return [new de(0, t), new de(0, -t)];
    let i = this.phase() / 2, l = de.polar(t, i);
    return [l, l.times(-1)];
  }
  conjugate() {
    return new de(this.real, -this.imag);
  }
  toString(r) {
    return r = r || eo.EXACT, r.allowAbbreviation ? this.toStringAllowSingleValue(r) : this.toStringBothValues(r);
  }
  neg() {
    return new de(-this.real, -this.imag);
  }
  raisedTo(r) {
    return r === 0.5 && this.imag === 0 && this.real >= 0 ? new de(Math.sqrt(this.real), 0) : de.ZERO.isEqualTo(r) ? de.ONE : this.isEqualTo(de.ZERO) ? de.ZERO : this.ln().times(de.from(r)).exp();
  }
  exp() {
    return de.polar(Math.exp(this.real), this.imag);
  }
  cos() {
    let r = this.times(de.I);
    return r.exp().plus(r.neg().exp()).times(0.5);
  }
  sin() {
    let r = this.times(de.I);
    return r.exp().minus(r.neg().exp()).dividedBy(new de(0, 2));
  }
  tan() {
    return this.sin().dividedBy(this.cos());
  }
  ln() {
    return new de(Math.log(this.abs()), this.phase());
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
var Nr = de;
Nr.ZERO = new de(0, 0), Nr.ONE = new de(1, 0), Nr.I = new de(0, 1);
var fa = "H";
var ha = "X";
var va = "Y";
var ma = "Z";
var ga = "P";
var ba = "T";
var ya = "X^\xBD";
var xa = "Rx";
var wa = "Ry";
var Ea = "Rz";
var Hs = "Swap";
var Fs = "\u2022";
var Us = "Bloch";
var Cc = "|0>";
var _c = "|1>";
var Sa = "Measure";
var ro = Xo(Ta(), 1);
var Oa = u2((r) => r != null && r.tagName === "CIRCUIT-DROPZONE", "isCircuitDropzoneElement");
var Vs = u2((r) => r != null && r.tagName === "PALETTE-DROPZONE", "isPaletteDropzoneElement");
function Ce(r) {
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
      this.draggableMachine = rt({ id: "draggable", initial: "idle", states: { idle: { on: { SET_INTERACT: { target: "grabbable", actions: ["setInteract"] } } }, grabbable: { on: { GRAB: { target: "grabbed", actions: ["grab"] }, UNSET_INTERACT: { target: "idle" } } }, grabbed: { on: { START_DRAGGING: { target: "dragging", actions: ["startDragging"] }, UNGRAB: [{ target: "grabbable", actions: ["unGrab"], cond: "isOnCircuitDropzone" }, { target: "deleted", actions: ["unGrab"], cond: "isOnPaletteDropzone" }] } }, dragging: { type: "compound", initial: "unknown", on: { END_DRAGGING: { target: "dropped", actions: ["endDragging"] } }, states: { unknown: { always: [{ target: "snapped", cond: "isOnCircuitDropzone" }, { target: "unsnapped", cond: "isOnPaletteDropzone" }] }, snapped: { entry: ["snap"], on: { UNSNAP: { target: "unsnapped" } } }, unsnapped: { entry: ["unsnap"], on: { SNAP: { target: "snapped" } } } } }, dropped: { entry: ["drop"], always: [{ target: "grabbable", cond: "droppedOnCircuitDropzone" }, { target: "deleted", cond: "trashed" }] }, deleted: { type: "final", entry: "delete" } } }, { actions: { setInteract: () => {
        let i = (0, ro.default)(this);
        i.styleCursor(false), i.on("down", this.grab.bind(this)), i.on("up", this.unGrab.bind(this)), i.draggable({ onstart: this.startDragging.bind(this), onmove: this.dragMove.bind(this), onend: this.endDragging.bind(this) });
        let l = this.dropzone;
        Oa(l) ? this.snappedDropzone = l : this.snappedDropzone = null;
      }, grab: (i, l) => {
        l.type === "GRAB" && (this.grabbed = true, this.dispatchEvent(new Event("operation-grab", { bubbles: true })), Vs(this.dropzone) && (this.snapped = false, this.moveByOffset(l.x, l.y)));
      }, unGrab: () => {
        this.grabbed = false, this.dispatchEvent(new Event("operation-ungrab", { bubbles: true }));
      }, startDragging: () => {
        this.dragging = true;
      }, endDragging: () => {
        this.grabbed = false, this.dragging = false, this.dispatchEvent(new Event("operation-end-dragging", { bubbles: true }));
      }, snap: () => {
        this.snapped = true, this.snappedDropzone = this.dropzone, this.dispatchEvent(new Event("operation-snap", { bubbles: true }));
      }, unsnap: () => {
        this.snapped = false, this.snappedDropzone && this.snappedDropzone.dispatchEvent(new Event("operation-unsnap", { bubbles: true }));
      }, drop: () => {
        !this.snapped || (this.moveTo(0, 0), this.dispatchEvent(new Event("operation-drop", { bubbles: true })));
      }, delete: () => {
        (0, ro.default)(this).unset(), this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
      } }, guards: { isOnCircuitDropzone: () => Oa(this.dropzone), isOnPaletteDropzone: () => Vs(this.dropzone), droppedOnCircuitDropzone: () => this.snapped && Oa(this.dropzone), trashed: () => !this.snapped } });
    }
    set draggable(i) {
      this.maybeInitStateMachine(), i ? this.draggableService.send({ type: "SET_INTERACT" }) : this.draggableService.send({ type: "UNSET_INTERACT" });
    }
    get dropzone() {
      let i = this.parentElement;
      return ue.notNull(i), !Vs(i) && !Oa(i) ? null : i;
    }
    maybeInitStateMachine() {
      this.draggableService === void 0 && (this.draggableService = Je(this.draggableMachine).onTransition((i) => {
        this.debugDraggable && console.log(`draggable: ${nt(i.value)}`);
      }).start());
    }
    set snapTargets(i) {
      (0, ro.default)(this).draggable({ modifiers: [ro.default.modifiers.snap({ targets: i, range: this.snapRange, relativePoints: [{ x: 0.5, y: 0.5 }] })], listeners: { move: this.moveEventListener.bind(this) } });
    }
    get snapRange() {
      return this.offsetWidth;
    }
    moveEventListener(i) {
      let l = i.modifiers[0];
      if (l.inRange) {
        let c2 = l.target.source;
        this.dispatchEvent(new CustomEvent("operation-in-snap-range", { detail: { snapTargetInfo: c2 }, bubbles: true })), this.moveTo(0, 0), this.snappedDropzone && this.snappedDropzone !== this.dropzone && this.draggableService.send({ type: "UNSNAP" }), this.draggableService.send({ type: "SNAP" });
      } else
        this.snapped && this.draggableService.send({ type: "UNSNAP" });
    }
    grab(i) {
      this.draggableService.send({ type: "GRAB", x: i.offsetX, y: i.offsetY });
    }
    unGrab() {
      this.draggableService.send({ type: "UNGRAB" });
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
      let c2 = this.operationX + i, d2 = this.operationY + l;
      this.moveTo(c2, d2);
    }
    moveTo(i, l) {
      this.operationX = i, this.operationY = l, this.style.transform = `translate(${i}px, ${l}px)`;
    }
    moveByOffset(i, l) {
      let c2 = i - this.clientWidth / 2, d2 = l - this.clientHeight / 2;
      this.move(c2, d2);
    }
  }
  __name(e, "e");
  return u2(e, "DraggableMixinClass"), k([j], e.prototype, "operationX", 2), k([j], e.prototype, "operationY", 2), k([j], e.prototype, "grabbed", 2), k([j], e.prototype, "dragging", 2), k([j], e.prototype, "snapped", 2), k([j], e.prototype, "bit", 2), k([j], e.prototype, "debugDraggable", 2), e;
}
__name(Ce, "Ce");
u2(Ce, "DraggableMixin");
var Pn = u2((r) => typeof r == "object" && r !== null && typeof r.flag == "string", "isFlaggable");
function Ac(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.flag = "";
    }
  }
  __name(e, "e");
  return u2(e, "FlaggableMixinClass"), k([j], e.prototype, "flag", 2), e;
}
__name(Ac, "Ac");
u2(Ac, "FlaggableMixin");
var Fe = "top";
var it = "bottom";
var Ke = "right";
var Ve = "left";
var Ca = "auto";
var tn = [Fe, it, Ke, Ve];
var Gr = "start";
var In = "end";
var Pc = "clippingParents";
var _a = "viewport";
var ci = "popper";
var Ic = "reference";
var Xs = tn.reduce(function(r, e) {
  return r.concat([e + "-" + Gr, e + "-" + In]);
}, []);
var Ma = [].concat(tn, [Ca]).reduce(function(r, e) {
  return r.concat([e, e + "-" + Gr, e + "-" + In]);
}, []);
var Jf = "beforeRead";
var Kf = "read";
var Qf = "afterRead";
var eh = "beforeMain";
var th = "main";
var rh = "afterMain";
var nh = "beforeWrite";
var ih = "write";
var oh = "afterWrite";
var Dc = [Jf, Kf, Qf, eh, th, rh, nh, ih, oh];
function lt(r) {
  return r ? (r.nodeName || "").toLowerCase() : null;
}
__name(lt, "lt");
u2(lt, "getNodeName");
function Xe(r) {
  if (r == null)
    return window;
  if (r.toString() !== "[object Window]") {
    var e = r.ownerDocument;
    return e && e.defaultView || window;
  }
  return r;
}
__name(Xe, "Xe");
u2(Xe, "getWindow");
function Er(r) {
  var e = Xe(r).Element;
  return r instanceof e || r instanceof Element;
}
__name(Er, "Er");
u2(Er, "isElement");
function ot(r) {
  var e = Xe(r).HTMLElement;
  return r instanceof e || r instanceof HTMLElement;
}
__name(ot, "ot");
u2(ot, "isHTMLElement");
function Aa(r) {
  if (typeof ShadowRoot == "undefined")
    return false;
  var e = Xe(r).ShadowRoot;
  return r instanceof e || r instanceof ShadowRoot;
}
__name(Aa, "Aa");
u2(Aa, "isShadowRoot");
function ah(r) {
  var e = r.state;
  Object.keys(e.elements).forEach(function(t) {
    var i = e.styles[t] || {}, l = e.attributes[t] || {}, c2 = e.elements[t];
    !ot(c2) || !lt(c2) || (Object.assign(c2.style, i), Object.keys(l).forEach(function(d2) {
      var v = l[d2];
      v === false ? c2.removeAttribute(d2) : c2.setAttribute(d2, v === true ? "" : v);
    }));
  });
}
__name(ah, "ah");
u2(ah, "applyStyles");
function sh(r) {
  var e = r.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var l = e.elements[i], c2 = e.attributes[i] || {}, d2 = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : t[i]), v = d2.reduce(function(b, y) {
        return b[y] = "", b;
      }, {});
      !ot(l) || !lt(l) || (Object.assign(l.style, v), Object.keys(c2).forEach(function(b) {
        l.removeAttribute(b);
      }));
    });
  };
}
__name(sh, "sh");
u2(sh, "effect");
var no = { name: "applyStyles", enabled: true, phase: "write", fn: ah, effect: sh, requires: ["computeStyles"] };
function ut(r) {
  return r.split("-")[0];
}
__name(ut, "ut");
u2(ut, "getBasePlacement");
var vr = Math.max;
var Dn = Math.min;
var Lr = Math.round;
function Wt(r, e) {
  e === void 0 && (e = false);
  var t = r.getBoundingClientRect(), i = 1, l = 1;
  if (ot(r) && e) {
    var c2 = r.offsetHeight, d2 = r.offsetWidth;
    d2 > 0 && (i = Lr(t.width) / d2 || 1), c2 > 0 && (l = Lr(t.height) / c2 || 1);
  }
  return { width: t.width / i, height: t.height / l, top: t.top / l, right: t.right / i, bottom: t.bottom / l, left: t.left / i, x: t.left / i, y: t.top / l };
}
__name(Wt, "Wt");
u2(Wt, "getBoundingClientRect");
function Rn(r) {
  var e = Wt(r), t = r.offsetWidth, i = r.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: r.offsetLeft, y: r.offsetTop, width: t, height: i };
}
__name(Rn, "Rn");
u2(Rn, "getLayoutRect");
function io(r, e) {
  var t = e.getRootNode && e.getRootNode();
  if (r.contains(e))
    return true;
  if (t && Aa(t)) {
    var i = e;
    do {
      if (i && r.isSameNode(i))
        return true;
      i = i.parentNode || i.host;
    } while (i);
  }
  return false;
}
__name(io, "io");
u2(io, "contains");
function St(r) {
  return Xe(r).getComputedStyle(r);
}
__name(St, "St");
u2(St, "getComputedStyle");
function Ys(r) {
  return ["table", "td", "th"].indexOf(lt(r)) >= 0;
}
__name(Ys, "Ys");
u2(Ys, "isTableElement");
function mt(r) {
  return ((Er(r) ? r.ownerDocument : r.document) || window.document).documentElement;
}
__name(mt, "mt");
u2(mt, "getDocumentElement");
function qr(r) {
  return lt(r) === "html" ? r : r.assignedSlot || r.parentNode || (Aa(r) ? r.host : null) || mt(r);
}
__name(qr, "qr");
u2(qr, "getParentNode");
function Rc(r) {
  return !ot(r) || St(r).position === "fixed" ? null : r.offsetParent;
}
__name(Rc, "Rc");
u2(Rc, "getTrueOffsetParent");
function lh(r) {
  var e = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, t = navigator.userAgent.indexOf("Trident") !== -1;
  if (t && ot(r)) {
    var i = St(r);
    if (i.position === "fixed")
      return null;
  }
  for (var l = qr(r); ot(l) && ["html", "body"].indexOf(lt(l)) < 0; ) {
    var c2 = St(l);
    if (c2.transform !== "none" || c2.perspective !== "none" || c2.contain === "paint" || ["transform", "perspective"].indexOf(c2.willChange) !== -1 || e && c2.willChange === "filter" || e && c2.filter && c2.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
__name(lh, "lh");
u2(lh, "getContainingBlock");
function mr(r) {
  for (var e = Xe(r), t = Rc(r); t && Ys(t) && St(t).position === "static"; )
    t = Rc(t);
  return t && (lt(t) === "html" || lt(t) === "body" && St(t).position === "static") ? e : t || lh(r) || e;
}
__name(mr, "mr");
u2(mr, "getOffsetParent");
function zn(r) {
  return ["top", "bottom"].indexOf(r) >= 0 ? "x" : "y";
}
__name(zn, "zn");
u2(zn, "getMainAxisFromPlacement");
function kn(r, e, t) {
  return vr(r, Dn(e, t));
}
__name(kn, "kn");
u2(kn, "within");
function zc(r, e, t) {
  var i = kn(r, e, t);
  return i > t ? t : i;
}
__name(zc, "zc");
u2(zc, "withinMaxClamp");
function oo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
__name(oo, "oo");
u2(oo, "getFreshSideObject");
function ao(r) {
  return Object.assign({}, oo(), r);
}
__name(ao, "ao");
u2(ao, "mergePaddingObject");
function so(r, e) {
  return e.reduce(function(t, i) {
    return t[i] = r, t;
  }, {});
}
__name(so, "so");
u2(so, "expandToHashMap");
var uh = u2(function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ao(typeof e != "number" ? e : so(e, tn));
}, "toPaddingObject");
function ch(r) {
  var e, t = r.state, i = r.name, l = r.options, c2 = t.elements.arrow, d2 = t.modifiersData.popperOffsets, v = ut(t.placement), b = zn(v), y = [Ve, Ke].indexOf(v) >= 0, w2 = y ? "height" : "width";
  if (!(!c2 || !d2)) {
    var A2 = uh(l.padding, t), O2 = Rn(c2), M2 = b === "y" ? Fe : Ve, R2 = b === "y" ? it : Ke, S = t.rects.reference[w2] + t.rects.reference[b] - d2[b] - t.rects.popper[w2], _ = d2[b] - t.rects.reference[b], P = mr(c2), I2 = P ? b === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0, L = S / 2 - _ / 2, E = A2[M2], B = I2 - O2[w2] - A2[R2], z2 = I2 / 2 - O2[w2] / 2 + L, X = kn(E, z2, B), V = b;
    t.modifiersData[i] = (e = {}, e[V] = X, e.centerOffset = X - z2, e);
  }
}
__name(ch, "ch");
u2(ch, "arrow");
function ph(r) {
  var e = r.state, t = r.options, i = t.element, l = i === void 0 ? "[data-popper-arrow]" : i;
  l != null && (typeof l == "string" && (l = e.elements.popper.querySelector(l), !l) || !io(e.elements.popper, l) || (e.elements.arrow = l));
}
__name(ph, "ph");
u2(ph, "effect");
var kc = { name: "arrow", enabled: true, phase: "main", fn: ch, effect: ph, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Vt(r) {
  return r.split("-")[1];
}
__name(Vt, "Vt");
u2(Vt, "getVariation");
var dh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function fh(r) {
  var e = r.x, t = r.y, i = window, l = i.devicePixelRatio || 1;
  return { x: Lr(e * l) / l || 0, y: Lr(t * l) / l || 0 };
}
__name(fh, "fh");
u2(fh, "roundOffsetsByDPR");
function Nc(r) {
  var e, t = r.popper, i = r.popperRect, l = r.placement, c2 = r.variation, d2 = r.offsets, v = r.position, b = r.gpuAcceleration, y = r.adaptive, w2 = r.roundOffsets, A2 = r.isFixed, O2 = d2.x, M2 = O2 === void 0 ? 0 : O2, R2 = d2.y, S = R2 === void 0 ? 0 : R2, _ = typeof w2 == "function" ? w2({ x: M2, y: S }) : { x: M2, y: S };
  M2 = _.x, S = _.y;
  var P = d2.hasOwnProperty("x"), I2 = d2.hasOwnProperty("y"), L = Ve, E = Fe, B = window;
  if (y) {
    var z2 = mr(t), X = "clientHeight", V = "clientWidth";
    if (z2 === Xe(t) && (z2 = mt(t), St(z2).position !== "static" && v === "absolute" && (X = "scrollHeight", V = "scrollWidth")), z2 = z2, l === Fe || (l === Ve || l === Ke) && c2 === In) {
      E = it;
      var $ = A2 && B.visualViewport ? B.visualViewport.height : z2[X];
      S -= $ - i.height, S *= b ? 1 : -1;
    }
    if (l === Ve || (l === Fe || l === it) && c2 === In) {
      L = Ke;
      var U = A2 && B.visualViewport ? B.visualViewport.width : z2[V];
      M2 -= U - i.width, M2 *= b ? 1 : -1;
    }
  }
  var re = Object.assign({ position: v }, y && dh), ie = w2 === true ? fh({ x: M2, y: S }) : { x: M2, y: S };
  if (M2 = ie.x, S = ie.y, b) {
    var W;
    return Object.assign({}, re, (W = {}, W[E] = I2 ? "0" : "", W[L] = P ? "0" : "", W.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + M2 + "px, " + S + "px)" : "translate3d(" + M2 + "px, " + S + "px, 0)", W));
  }
  return Object.assign({}, re, (e = {}, e[E] = I2 ? S + "px" : "", e[L] = P ? M2 + "px" : "", e.transform = "", e));
}
__name(Nc, "Nc");
u2(Nc, "mapToStyles");
function hh(r) {
  var e = r.state, t = r.options, i = t.gpuAcceleration, l = i === void 0 ? true : i, c2 = t.adaptive, d2 = c2 === void 0 ? true : c2, v = t.roundOffsets, b = v === void 0 ? true : v;
  if (false)
    var y;
  var w2 = { placement: ut(e.placement), variation: Vt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: l, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Nc(Object.assign({}, w2, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: d2, roundOffsets: b })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Nc(Object.assign({}, w2, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: b })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
__name(hh, "hh");
u2(hh, "computeStyles");
var Gc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: hh, data: {} };
var Pa = { passive: true };
function vh(r) {
  var e = r.state, t = r.instance, i = r.options, l = i.scroll, c2 = l === void 0 ? true : l, d2 = i.resize, v = d2 === void 0 ? true : d2, b = Xe(e.elements.popper), y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return c2 && y.forEach(function(w2) {
    w2.addEventListener("scroll", t.update, Pa);
  }), v && b.addEventListener("resize", t.update, Pa), function() {
    c2 && y.forEach(function(w2) {
      w2.removeEventListener("scroll", t.update, Pa);
    }), v && b.removeEventListener("resize", t.update, Pa);
  };
}
__name(vh, "vh");
u2(vh, "effect");
var Lc = { name: "eventListeners", enabled: true, phase: "write", fn: u2(function() {
}, "fn"), effect: vh, data: {} };
var mh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function pi(r) {
  return r.replace(/left|right|bottom|top/g, function(e) {
    return mh[e];
  });
}
__name(pi, "pi");
u2(pi, "getOppositePlacement");
var gh = { start: "end", end: "start" };
function Ia(r) {
  return r.replace(/start|end/g, function(e) {
    return gh[e];
  });
}
__name(Ia, "Ia");
u2(Ia, "getOppositeVariationPlacement");
function Nn(r) {
  var e = Xe(r), t = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: t, scrollTop: i };
}
__name(Nn, "Nn");
u2(Nn, "getWindowScroll");
function Gn(r) {
  return Wt(mt(r)).left + Nn(r).scrollLeft;
}
__name(Gn, "Gn");
u2(Gn, "getWindowScrollBarX");
function Zs(r) {
  var e = Xe(r), t = mt(r), i = e.visualViewport, l = t.clientWidth, c2 = t.clientHeight, d2 = 0, v = 0;
  return i && (l = i.width, c2 = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (d2 = i.offsetLeft, v = i.offsetTop)), { width: l, height: c2, x: d2 + Gn(r), y: v };
}
__name(Zs, "Zs");
u2(Zs, "getViewportRect");
function Js(r) {
  var e, t = mt(r), i = Nn(r), l = (e = r.ownerDocument) == null ? void 0 : e.body, c2 = vr(t.scrollWidth, t.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), d2 = vr(t.scrollHeight, t.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), v = -i.scrollLeft + Gn(r), b = -i.scrollTop;
  return St(l || t).direction === "rtl" && (v += vr(t.clientWidth, l ? l.clientWidth : 0) - c2), { width: c2, height: d2, x: v, y: b };
}
__name(Js, "Js");
u2(Js, "getDocumentRect");
function Ln(r) {
  var e = St(r), t = e.overflow, i = e.overflowX, l = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + l + i);
}
__name(Ln, "Ln");
u2(Ln, "isScrollParent");
function Da(r) {
  return ["html", "body", "#document"].indexOf(lt(r)) >= 0 ? r.ownerDocument.body : ot(r) && Ln(r) ? r : Da(qr(r));
}
__name(Da, "Da");
u2(Da, "getScrollParent");
function rn(r, e) {
  var t;
  e === void 0 && (e = []);
  var i = Da(r), l = i === ((t = r.ownerDocument) == null ? void 0 : t.body), c2 = Xe(i), d2 = l ? [c2].concat(c2.visualViewport || [], Ln(i) ? i : []) : i, v = e.concat(d2);
  return l ? v : v.concat(rn(qr(d2)));
}
__name(rn, "rn");
u2(rn, "listScrollParents");
function di(r) {
  return Object.assign({}, r, { left: r.x, top: r.y, right: r.x + r.width, bottom: r.y + r.height });
}
__name(di, "di");
u2(di, "rectToClientRect");
function bh(r) {
  var e = Wt(r);
  return e.top = e.top + r.clientTop, e.left = e.left + r.clientLeft, e.bottom = e.top + r.clientHeight, e.right = e.left + r.clientWidth, e.width = r.clientWidth, e.height = r.clientHeight, e.x = e.left, e.y = e.top, e;
}
__name(bh, "bh");
u2(bh, "getInnerBoundingClientRect");
function qc(r, e) {
  return e === _a ? di(Zs(r)) : Er(e) ? bh(e) : di(Js(mt(r)));
}
__name(qc, "qc");
u2(qc, "getClientRectFromMixedType");
function yh(r) {
  var e = rn(qr(r)), t = ["absolute", "fixed"].indexOf(St(r).position) >= 0, i = t && ot(r) ? mr(r) : r;
  return Er(i) ? e.filter(function(l) {
    return Er(l) && io(l, i) && lt(l) !== "body";
  }) : [];
}
__name(yh, "yh");
u2(yh, "getClippingParents");
function Ks(r, e, t) {
  var i = e === "clippingParents" ? yh(r) : [].concat(e), l = [].concat(i, [t]), c2 = l[0], d2 = l.reduce(function(v, b) {
    var y = qc(r, b);
    return v.top = vr(y.top, v.top), v.right = Dn(y.right, v.right), v.bottom = Dn(y.bottom, v.bottom), v.left = vr(y.left, v.left), v;
  }, qc(r, c2));
  return d2.width = d2.right - d2.left, d2.height = d2.bottom - d2.top, d2.x = d2.left, d2.y = d2.top, d2;
}
__name(Ks, "Ks");
u2(Ks, "getClippingRect");
function lo(r) {
  var e = r.reference, t = r.element, i = r.placement, l = i ? ut(i) : null, c2 = i ? Vt(i) : null, d2 = e.x + e.width / 2 - t.width / 2, v = e.y + e.height / 2 - t.height / 2, b;
  switch (l) {
    case Fe:
      b = { x: d2, y: e.y - t.height };
      break;
    case it:
      b = { x: d2, y: e.y + e.height };
      break;
    case Ke:
      b = { x: e.x + e.width, y: v };
      break;
    case Ve:
      b = { x: e.x - t.width, y: v };
      break;
    default:
      b = { x: e.x, y: e.y };
  }
  var y = l ? zn(l) : null;
  if (y != null) {
    var w2 = y === "y" ? "height" : "width";
    switch (c2) {
      case Gr:
        b[y] = b[y] - (e[w2] / 2 - t[w2] / 2);
        break;
      case In:
        b[y] = b[y] + (e[w2] / 2 - t[w2] / 2);
        break;
      default:
    }
  }
  return b;
}
__name(lo, "lo");
u2(lo, "computeOffsets");
function gr(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = i === void 0 ? r.placement : i, c2 = t.boundary, d2 = c2 === void 0 ? Pc : c2, v = t.rootBoundary, b = v === void 0 ? _a : v, y = t.elementContext, w2 = y === void 0 ? ci : y, A2 = t.altBoundary, O2 = A2 === void 0 ? false : A2, M2 = t.padding, R2 = M2 === void 0 ? 0 : M2, S = ao(typeof R2 != "number" ? R2 : so(R2, tn)), _ = w2 === ci ? Ic : ci, P = r.rects.popper, I2 = r.elements[O2 ? _ : w2], L = Ks(Er(I2) ? I2 : I2.contextElement || mt(r.elements.popper), d2, b), E = Wt(r.elements.reference), B = lo({ reference: E, element: P, strategy: "absolute", placement: l }), z2 = di(Object.assign({}, P, B)), X = w2 === ci ? z2 : E, V = { top: L.top - X.top + S.top, bottom: X.bottom - L.bottom + S.bottom, left: L.left - X.left + S.left, right: X.right - L.right + S.right }, $ = r.modifiersData.offset;
  if (w2 === ci && $) {
    var U = $[l];
    Object.keys(V).forEach(function(re) {
      var ie = [Ke, it].indexOf(re) >= 0 ? 1 : -1, W = [Fe, it].indexOf(re) >= 0 ? "y" : "x";
      V[re] += U[W] * ie;
    });
  }
  return V;
}
__name(gr, "gr");
u2(gr, "detectOverflow");
function Qs(r, e) {
  e === void 0 && (e = {});
  var t = e, i = t.placement, l = t.boundary, c2 = t.rootBoundary, d2 = t.padding, v = t.flipVariations, b = t.allowedAutoPlacements, y = b === void 0 ? Ma : b, w2 = Vt(i), A2 = w2 ? v ? Xs : Xs.filter(function(R2) {
    return Vt(R2) === w2;
  }) : tn, O2 = A2.filter(function(R2) {
    return y.indexOf(R2) >= 0;
  });
  O2.length === 0 && (O2 = A2);
  var M2 = O2.reduce(function(R2, S) {
    return R2[S] = gr(r, { placement: S, boundary: l, rootBoundary: c2, padding: d2 })[ut(S)], R2;
  }, {});
  return Object.keys(M2).sort(function(R2, S) {
    return M2[R2] - M2[S];
  });
}
__name(Qs, "Qs");
u2(Qs, "computeAutoPlacement");
function xh(r) {
  if (ut(r) === Ca)
    return [];
  var e = pi(r);
  return [Ia(r), e, Ia(e)];
}
__name(xh, "xh");
u2(xh, "getExpandedFallbackPlacements");
function wh(r) {
  var e = r.state, t = r.options, i = r.name;
  if (!e.modifiersData[i]._skip) {
    for (var l = t.mainAxis, c2 = l === void 0 ? true : l, d2 = t.altAxis, v = d2 === void 0 ? true : d2, b = t.fallbackPlacements, y = t.padding, w2 = t.boundary, A2 = t.rootBoundary, O2 = t.altBoundary, M2 = t.flipVariations, R2 = M2 === void 0 ? true : M2, S = t.allowedAutoPlacements, _ = e.options.placement, P = ut(_), I2 = P === _, L = b || (I2 || !R2 ? [pi(_)] : xh(_)), E = [_].concat(L).reduce(function(K, xt) {
      return K.concat(ut(xt) === Ca ? Qs(e, { placement: xt, boundary: w2, rootBoundary: A2, padding: y, flipVariations: R2, allowedAutoPlacements: S }) : xt);
    }, []), B = e.rects.reference, z2 = e.rects.popper, X = /* @__PURE__ */ new Map(), V = true, $ = E[0], U = 0; U < E.length; U++) {
      var re = E[U], ie = ut(re), W = Vt(re) === Gr, ce = [Fe, it].indexOf(ie) >= 0, Pe = ce ? "width" : "height", Ue = gr(e, { placement: re, boundary: w2, rootBoundary: A2, altBoundary: O2, padding: y }), Ge = ce ? W ? Ke : Ve : W ? it : Fe;
      B[Pe] > z2[Pe] && (Ge = pi(Ge));
      var fe = pi(Ge), Ze = [];
      if (c2 && Ze.push(Ue[ie] <= 0), v && Ze.push(Ue[Ge] <= 0, Ue[fe] <= 0), Ze.every(function(K) {
        return K;
      })) {
        $ = re, V = false;
        break;
      }
      X.set(re, Ze);
    }
    if (V)
      for (var et = R2 ? 3 : 1, Dt = u2(function(xt) {
        var wt = E.find(function(_r) {
          var $t = X.get(_r);
          if ($t)
            return $t.slice(0, xt).every(function(lr) {
              return lr;
            });
        });
        if (wt)
          return $ = wt, "break";
      }, "_loop"), Ot = et; Ot > 0; Ot--) {
        var Cr = Dt(Ot);
        if (Cr === "break")
          break;
      }
    e.placement !== $ && (e.modifiersData[i]._skip = true, e.placement = $, e.reset = true);
  }
}
__name(wh, "wh");
u2(wh, "flip");
var jc = { name: "flip", enabled: true, phase: "main", fn: wh, requiresIfExists: ["offset"], data: { _skip: false } };
function Bc(r, e, t) {
  return t === void 0 && (t = { x: 0, y: 0 }), { top: r.top - e.height - t.y, right: r.right - e.width + t.x, bottom: r.bottom - e.height + t.y, left: r.left - e.width - t.x };
}
__name(Bc, "Bc");
u2(Bc, "getSideOffsets");
function $c(r) {
  return [Fe, Ke, it, Ve].some(function(e) {
    return r[e] >= 0;
  });
}
__name($c, "$c");
u2($c, "isAnySideFullyClipped");
function Eh(r) {
  var e = r.state, t = r.name, i = e.rects.reference, l = e.rects.popper, c2 = e.modifiersData.preventOverflow, d2 = gr(e, { elementContext: "reference" }), v = gr(e, { altBoundary: true }), b = Bc(d2, i), y = Bc(v, l, c2), w2 = $c(b), A2 = $c(y);
  e.modifiersData[t] = { referenceClippingOffsets: b, popperEscapeOffsets: y, isReferenceHidden: w2, hasPopperEscaped: A2 }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": w2, "data-popper-escaped": A2 });
}
__name(Eh, "Eh");
u2(Eh, "hide");
var Hc = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Eh };
function Sh(r, e, t) {
  var i = ut(r), l = [Ve, Fe].indexOf(i) >= 0 ? -1 : 1, c2 = typeof t == "function" ? t(Object.assign({}, e, { placement: r })) : t, d2 = c2[0], v = c2[1];
  return d2 = d2 || 0, v = (v || 0) * l, [Ve, Ke].indexOf(i) >= 0 ? { x: v, y: d2 } : { x: d2, y: v };
}
__name(Sh, "Sh");
u2(Sh, "distanceAndSkiddingToXY");
function Th(r) {
  var e = r.state, t = r.options, i = r.name, l = t.offset, c2 = l === void 0 ? [0, 0] : l, d2 = Ma.reduce(function(w2, A2) {
    return w2[A2] = Sh(A2, e.rects, c2), w2;
  }, {}), v = d2[e.placement], b = v.x, y = v.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += b, e.modifiersData.popperOffsets.y += y), e.modifiersData[i] = d2;
}
__name(Th, "Th");
u2(Th, "offset");
var Fc = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Th };
function Oh(r) {
  var e = r.state, t = r.name;
  e.modifiersData[t] = lo({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
}
__name(Oh, "Oh");
u2(Oh, "popperOffsets");
var Uc = { name: "popperOffsets", enabled: true, phase: "read", fn: Oh, data: {} };
function el(r) {
  return r === "x" ? "y" : "x";
}
__name(el, "el");
u2(el, "getAltAxis");
function Ch(r) {
  var e = r.state, t = r.options, i = r.name, l = t.mainAxis, c2 = l === void 0 ? true : l, d2 = t.altAxis, v = d2 === void 0 ? false : d2, b = t.boundary, y = t.rootBoundary, w2 = t.altBoundary, A2 = t.padding, O2 = t.tether, M2 = O2 === void 0 ? true : O2, R2 = t.tetherOffset, S = R2 === void 0 ? 0 : R2, _ = gr(e, { boundary: b, rootBoundary: y, padding: A2, altBoundary: w2 }), P = ut(e.placement), I2 = Vt(e.placement), L = !I2, E = zn(P), B = el(E), z2 = e.modifiersData.popperOffsets, X = e.rects.reference, V = e.rects.popper, $ = typeof S == "function" ? S(Object.assign({}, e.rects, { placement: e.placement })) : S, U = typeof $ == "number" ? { mainAxis: $, altAxis: $ } : Object.assign({ mainAxis: 0, altAxis: 0 }, $), re = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ie = { x: 0, y: 0 };
  if (!!z2) {
    if (c2) {
      var W, ce = E === "y" ? Fe : Ve, Pe = E === "y" ? it : Ke, Ue = E === "y" ? "height" : "width", Ge = z2[E], fe = Ge + _[ce], Ze = Ge - _[Pe], et = M2 ? -V[Ue] / 2 : 0, Dt = I2 === Gr ? X[Ue] : V[Ue], Ot = I2 === Gr ? -V[Ue] : -X[Ue], Cr = e.elements.arrow, K = M2 && Cr ? Rn(Cr) : { width: 0, height: 0 }, xt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : oo(), wt = xt[ce], _r = xt[Pe], $t = kn(0, X[Ue], K[Ue]), lr = L ? X[Ue] / 2 - et - $t - wt - U.mainAxis : Dt - $t - wt - U.mainAxis, ur = L ? -X[Ue] / 2 + et + $t + _r + U.mainAxis : Ot + $t + _r + U.mainAxis, Rt = e.elements.arrow && mr(e.elements.arrow), Hn = Rt ? E === "y" ? Rt.clientTop || 0 : Rt.clientLeft || 0 : 0, Ct = (W = re == null ? void 0 : re[E]) != null ? W : 0, ln = Ge + lr - Ct - Hn, xe = Ge + ur - Ct, Fr = kn(M2 ? Dn(fe, ln) : fe, Ge, M2 ? vr(Ze, xe) : Ze);
      z2[E] = Fr, ie[E] = Fr - Ge;
    }
    if (v) {
      var Ur, _t = E === "x" ? Fe : Ve, un = E === "x" ? it : Ke, cr = z2[B], pr = B === "y" ? "height" : "width", cn = cr + _[_t], ct = cr - _[un], Mr = [Fe, Ve].indexOf(P) !== -1, zt = (Ur = re == null ? void 0 : re[B]) != null ? Ur : 0, Fn = Mr ? cn : cr - X[pr] - V[pr] - zt + U.altAxis, Ar = Mr ? cr + X[pr] + V[pr] - zt - U.altAxis : ct, pn = M2 && Mr ? zc(Fn, cr, Ar) : kn(M2 ? Fn : cn, cr, M2 ? Ar : ct);
      z2[B] = pn, ie[B] = pn - cr;
    }
    e.modifiersData[i] = ie;
  }
}
__name(Ch, "Ch");
u2(Ch, "preventOverflow");
var Wc = { name: "preventOverflow", enabled: true, phase: "main", fn: Ch, requiresIfExists: ["offset"] };
function tl(r) {
  return { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop };
}
__name(tl, "tl");
u2(tl, "getHTMLElementScroll");
function rl(r) {
  return r === Xe(r) || !ot(r) ? Nn(r) : tl(r);
}
__name(rl, "rl");
u2(rl, "getNodeScroll");
function _h(r) {
  var e = r.getBoundingClientRect(), t = Lr(e.width) / r.offsetWidth || 1, i = Lr(e.height) / r.offsetHeight || 1;
  return t !== 1 || i !== 1;
}
__name(_h, "_h");
u2(_h, "isElementScaled");
function nl(r, e, t) {
  t === void 0 && (t = false);
  var i = ot(e), l = ot(e) && _h(e), c2 = mt(e), d2 = Wt(r, l), v = { scrollLeft: 0, scrollTop: 0 }, b = { x: 0, y: 0 };
  return (i || !i && !t) && ((lt(e) !== "body" || Ln(c2)) && (v = rl(e)), ot(e) ? (b = Wt(e, true), b.x += e.clientLeft, b.y += e.clientTop) : c2 && (b.x = Gn(c2))), { x: d2.left + v.scrollLeft - b.x, y: d2.top + v.scrollTop - b.y, width: d2.width, height: d2.height };
}
__name(nl, "nl");
u2(nl, "getCompositeRect");
function Mh(r) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), i = [];
  r.forEach(function(c2) {
    e.set(c2.name, c2);
  });
  function l(c2) {
    t.add(c2.name);
    var d2 = [].concat(c2.requires || [], c2.requiresIfExists || []);
    d2.forEach(function(v) {
      if (!t.has(v)) {
        var b = e.get(v);
        b && l(b);
      }
    }), i.push(c2);
  }
  __name(l, "l");
  return u2(l, "sort"), r.forEach(function(c2) {
    t.has(c2.name) || l(c2);
  }), i;
}
__name(Mh, "Mh");
u2(Mh, "order");
function il(r) {
  var e = Mh(r);
  return Dc.reduce(function(t, i) {
    return t.concat(e.filter(function(l) {
      return l.phase === i;
    }));
  }, []);
}
__name(il, "il");
u2(il, "orderModifiers");
function ol(r) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(r());
      });
    })), e;
  };
}
__name(ol, "ol");
u2(ol, "debounce");
function al(r) {
  var e = r.reduce(function(t, i) {
    var l = t[i.name];
    return t[i.name] = l ? Object.assign({}, l, i, { options: Object.assign({}, l.options, i.options), data: Object.assign({}, l.data, i.data) }) : i, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
__name(al, "al");
u2(al, "mergeByName");
var Vc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xc() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
__name(Xc, "Xc");
u2(Xc, "areValidElements");
function Yc(r) {
  r === void 0 && (r = {});
  var e = r, t = e.defaultModifiers, i = t === void 0 ? [] : t, l = e.defaultOptions, c2 = l === void 0 ? Vc : l;
  return u2(function(v, b, y) {
    y === void 0 && (y = c2);
    var w2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Vc, c2), modifiersData: {}, elements: { reference: v, popper: b }, attributes: {}, styles: {} }, A2 = [], O2 = false, M2 = { state: w2, setOptions: u2(function(P) {
      var I2 = typeof P == "function" ? P(w2.options) : P;
      S(), w2.options = Object.assign({}, c2, w2.options, I2), w2.scrollParents = { reference: Er(v) ? rn(v) : v.contextElement ? rn(v.contextElement) : [], popper: rn(b) };
      var L = il(al([].concat(i, w2.options.modifiers)));
      if (w2.orderedModifiers = L.filter(function(re) {
        return re.enabled;
      }), false) {
        var E;
        if (getBasePlacement(w2.options.placement) === auto)
          var B;
        var z2, X, V, $, U;
      }
      return R2(), M2.update();
    }, "setOptions"), forceUpdate: u2(function() {
      if (!O2) {
        var P = w2.elements, I2 = P.reference, L = P.popper;
        if (!!Xc(I2, L)) {
          w2.rects = { reference: nl(I2, mr(L), w2.options.strategy === "fixed"), popper: Rn(L) }, w2.reset = false, w2.placement = w2.options.placement, w2.orderedModifiers.forEach(function(re) {
            return w2.modifiersData[re.name] = Object.assign({}, re.data);
          });
          for (var E = 0, B = 0; B < w2.orderedModifiers.length; B++) {
            if (w2.reset === true) {
              w2.reset = false, B = -1;
              continue;
            }
            var z2 = w2.orderedModifiers[B], X = z2.fn, V = z2.options, $ = V === void 0 ? {} : V, U = z2.name;
            typeof X == "function" && (w2 = X({ state: w2, options: $, name: U, instance: M2 }) || w2);
          }
        }
      }
    }, "forceUpdate"), update: ol(function() {
      return new Promise(function(_) {
        M2.forceUpdate(), _(w2);
      });
    }), destroy: u2(function() {
      S(), O2 = true;
    }, "destroy") };
    if (!Xc(v, b))
      return M2;
    M2.setOptions(y).then(function(_) {
      !O2 && y.onFirstUpdate && y.onFirstUpdate(_);
    });
    function R2() {
      w2.orderedModifiers.forEach(function(_) {
        var P = _.name, I2 = _.options, L = I2 === void 0 ? {} : I2, E = _.effect;
        if (typeof E == "function") {
          var B = E({ state: w2, name: P, instance: M2, options: L }), z2 = u2(function() {
          }, "noopFn");
          A2.push(B || z2);
        }
      });
    }
    __name(R2, "R");
    u2(R2, "runModifierEffects");
    function S() {
      A2.forEach(function(_) {
        return _();
      }), A2 = [];
    }
    __name(S, "S");
    return u2(S, "cleanupModifierEffects"), M2;
  }, "createPopper");
}
__name(Yc, "Yc");
u2(Yc, "popperGenerator");
var Ah = [Lc, Uc, Gc, no, Fc, jc, Wc, kc, Hc];
var sl = Yc({ defaultModifiers: Ah });
var jr = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var Ph = "tippy-box";
var op = "tippy-content";
var Ih = "tippy-backdrop";
var ap = "tippy-arrow";
var sp = "tippy-svg-arrow";
var qn = { passive: true, capture: true };
var lp = u2(function() {
  return document.body;
}, "TIPPY_DEFAULT_APPEND_TO");
function ll(r, e, t) {
  if (Array.isArray(r)) {
    var i = r[e];
    return i == null ? Array.isArray(t) ? t[e] : t : i;
  }
  return r;
}
__name(ll, "ll");
u2(ll, "getValueAtIndexOrReturn");
function hl(r, e) {
  var t = {}.toString.call(r);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
__name(hl, "hl");
u2(hl, "isType");
function up(r, e) {
  return typeof r == "function" ? r.apply(void 0, e) : r;
}
__name(up, "up");
u2(up, "invokeWithArgsOrReturn");
function Zc(r, e) {
  if (e === 0)
    return r;
  var t;
  return function(i) {
    clearTimeout(t), t = setTimeout(function() {
      r(i);
    }, e);
  };
}
__name(Zc, "Zc");
u2(Zc, "debounce");
function Dh(r, e) {
  var t = Object.assign({}, r);
  return e.forEach(function(i) {
    delete t[i];
  }), t;
}
__name(Dh, "Dh");
u2(Dh, "removeProperties");
function Rh(r) {
  return r.split(/\s+/).filter(Boolean);
}
__name(Rh, "Rh");
u2(Rh, "splitBySpaces");
function jn(r) {
  return [].concat(r);
}
__name(jn, "jn");
u2(jn, "normalizeToArray");
function Jc(r, e) {
  r.indexOf(e) === -1 && r.push(e);
}
__name(Jc, "Jc");
u2(Jc, "pushIfUnique");
function zh(r) {
  return r.filter(function(e, t) {
    return r.indexOf(e) === t;
  });
}
__name(zh, "zh");
u2(zh, "unique");
function kh(r) {
  return r.split("-")[0];
}
__name(kh, "kh");
u2(kh, "getBasePlacement");
function za(r) {
  return [].slice.call(r);
}
__name(za, "za");
u2(za, "arrayFrom");
function Kc(r) {
  return Object.keys(r).reduce(function(e, t) {
    return r[t] !== void 0 && (e[t] = r[t]), e;
  }, {});
}
__name(Kc, "Kc");
u2(Kc, "removeUndefinedProps");
function fi() {
  return document.createElement("div");
}
__name(fi, "fi");
u2(fi, "div");
function ka(r) {
  return ["Element", "Fragment"].some(function(e) {
    return hl(r, e);
  });
}
__name(ka, "ka");
u2(ka, "isElement");
function Nh(r) {
  return hl(r, "NodeList");
}
__name(Nh, "Nh");
u2(Nh, "isNodeList");
function Gh(r) {
  return hl(r, "MouseEvent");
}
__name(Gh, "Gh");
u2(Gh, "isMouseEvent");
function Lh(r) {
  return !!(r && r._tippy && r._tippy.reference === r);
}
__name(Lh, "Lh");
u2(Lh, "isReferenceElement");
function qh(r) {
  return ka(r) ? [r] : Nh(r) ? za(r) : Array.isArray(r) ? r : za(document.querySelectorAll(r));
}
__name(qh, "qh");
u2(qh, "getArrayOfElements");
function ul(r, e) {
  r.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
__name(ul, "ul");
u2(ul, "setTransitionDuration");
function Qc(r, e) {
  r.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
__name(Qc, "Qc");
u2(Qc, "setVisibilityState");
function jh(r) {
  var e, t = jn(r), i = t[0];
  return i != null && (e = i.ownerDocument) != null && e.body ? i.ownerDocument : document;
}
__name(jh, "jh");
u2(jh, "getOwnerDocument");
function Bh(r, e) {
  var t = e.clientX, i = e.clientY;
  return r.every(function(l) {
    var c2 = l.popperRect, d2 = l.popperState, v = l.props, b = v.interactiveBorder, y = kh(d2.placement), w2 = d2.modifiersData.offset;
    if (!w2)
      return true;
    var A2 = y === "bottom" ? w2.top.y : 0, O2 = y === "top" ? w2.bottom.y : 0, M2 = y === "right" ? w2.left.x : 0, R2 = y === "left" ? w2.right.x : 0, S = c2.top - i + A2 > b, _ = i - c2.bottom - O2 > b, P = c2.left - t + M2 > b, I2 = t - c2.right - R2 > b;
    return S || _ || P || I2;
  });
}
__name(Bh, "Bh");
u2(Bh, "isCursorOutsideInteractiveBorder");
function cl(r, e, t) {
  var i = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(l) {
    r[i](l, t);
  });
}
__name(cl, "cl");
u2(cl, "updateTransitionEndListener");
function ep(r, e) {
  for (var t = e; t; ) {
    var i;
    if (r.contains(t))
      return true;
    t = t.getRootNode == null || (i = t.getRootNode()) == null ? void 0 : i.host;
  }
  return false;
}
__name(ep, "ep");
u2(ep, "actualContains");
var Sr = { isTouch: false };
var tp = 0;
function $h() {
  Sr.isTouch || (Sr.isTouch = true, window.performance && document.addEventListener("mousemove", cp));
}
__name($h, "$h");
u2($h, "onDocumentTouchStart");
function cp() {
  var r = performance.now();
  r - tp < 20 && (Sr.isTouch = false, document.removeEventListener("mousemove", cp)), tp = r;
}
__name(cp, "cp");
u2(cp, "onDocumentMouseMove");
function Hh() {
  var r = document.activeElement;
  if (Lh(r)) {
    var e = r._tippy;
    r.blur && !e.state.isVisible && r.blur();
  }
}
__name(Hh, "Hh");
u2(Hh, "onWindowBlur");
function Fh() {
  document.addEventListener("touchstart", $h, qn), window.addEventListener("blur", Hh);
}
__name(Fh, "Fh");
u2(Fh, "bindGlobalEventListeners");
var Uh = typeof window != "undefined" && typeof document != "undefined";
var Wh = Uh ? !!window.msCrypto : false;
var Vh = { animateFill: false, followCursor: false, inlinePositioning: false, sticky: false };
var Xh = { allowHTML: false, animation: "fade", arrow: true, content: "", inertia: false, maxWidth: 350, role: "tooltip", theme: "", zIndex: 9999 };
var br = Object.assign({ appendTo: lp, aria: { content: "auto", expanded: "auto" }, delay: 0, duration: [300, 250], getReferenceClientRect: null, hideOnClick: true, ignoreAttributes: false, interactive: false, interactiveBorder: 2, interactiveDebounce: 0, moveTransition: "", offset: [0, 10], onAfterUpdate: u2(function() {
}, "onAfterUpdate"), onBeforeUpdate: u2(function() {
}, "onBeforeUpdate"), onCreate: u2(function() {
}, "onCreate"), onDestroy: u2(function() {
}, "onDestroy"), onHidden: u2(function() {
}, "onHidden"), onHide: u2(function() {
}, "onHide"), onMount: u2(function() {
}, "onMount"), onShow: u2(function() {
}, "onShow"), onShown: u2(function() {
}, "onShown"), onTrigger: u2(function() {
}, "onTrigger"), onUntrigger: u2(function() {
}, "onUntrigger"), onClickOutside: u2(function() {
}, "onClickOutside"), placement: "top", plugins: [], popperOptions: {}, render: null, showOnCreate: false, touch: true, trigger: "mouseenter focus", triggerTarget: null }, Vh, Xh);
var Yh = Object.keys(br);
var Zh = u2(function(e) {
  var t = Object.keys(e);
  t.forEach(function(i) {
    br[i] = e[i];
  });
}, "setDefaultProps");
function pp(r) {
  var e = r.plugins || [], t = e.reduce(function(i, l) {
    var c2 = l.name, d2 = l.defaultValue;
    if (c2) {
      var v;
      i[c2] = r[c2] !== void 0 ? r[c2] : (v = br[c2]) != null ? v : d2;
    }
    return i;
  }, {});
  return Object.assign({}, r, t);
}
__name(pp, "pp");
u2(pp, "getExtendedPassedProps");
function Jh(r, e) {
  var t = e ? Object.keys(pp(Object.assign({}, br, { plugins: e }))) : Yh, i = t.reduce(function(l, c2) {
    var d2 = (r.getAttribute("data-tippy-" + c2) || "").trim();
    if (!d2)
      return l;
    if (c2 === "content")
      l[c2] = d2;
    else
      try {
        l[c2] = JSON.parse(d2);
      } catch (v) {
        l[c2] = d2;
      }
    return l;
  }, {});
  return i;
}
__name(Jh, "Jh");
u2(Jh, "getDataAttributeProps");
function rp(r, e) {
  var t = Object.assign({}, e, { content: up(e.content, [r]) }, e.ignoreAttributes ? {} : Jh(r, e.plugins));
  return t.aria = Object.assign({}, br.aria, t.aria), t.aria = { expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded, content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content }, t;
}
__name(rp, "rp");
u2(rp, "evaluateProps");
var Kh = u2(function() {
  return "innerHTML";
}, "innerHTML");
function dl(r, e) {
  r[Kh()] = e;
}
__name(dl, "dl");
u2(dl, "dangerouslySetInnerHTML");
function np(r) {
  var e = fi();
  return r === true ? e.className = ap : (e.className = sp, ka(r) ? e.appendChild(r) : dl(e, r)), e;
}
__name(np, "np");
u2(np, "createArrowElement");
function ip(r, e) {
  ka(e.content) ? (dl(r, ""), r.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? dl(r, e.content) : r.textContent = e.content);
}
__name(ip, "ip");
u2(ip, "setContent");
function fl(r) {
  var e = r.firstElementChild, t = za(e.children);
  return { box: e, content: t.find(function(i) {
    return i.classList.contains(op);
  }), arrow: t.find(function(i) {
    return i.classList.contains(ap) || i.classList.contains(sp);
  }), backdrop: t.find(function(i) {
    return i.classList.contains(Ih);
  }) };
}
__name(fl, "fl");
u2(fl, "getChildren");
function dp(r) {
  var e = fi(), t = fi();
  t.className = Ph, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var i = fi();
  i.className = op, i.setAttribute("data-state", "hidden"), ip(i, r.props), e.appendChild(t), t.appendChild(i), l(r.props, r.props);
  function l(c2, d2) {
    var v = fl(e), b = v.box, y = v.content, w2 = v.arrow;
    d2.theme ? b.setAttribute("data-theme", d2.theme) : b.removeAttribute("data-theme"), typeof d2.animation == "string" ? b.setAttribute("data-animation", d2.animation) : b.removeAttribute("data-animation"), d2.inertia ? b.setAttribute("data-inertia", "") : b.removeAttribute("data-inertia"), b.style.maxWidth = typeof d2.maxWidth == "number" ? d2.maxWidth + "px" : d2.maxWidth, d2.role ? b.setAttribute("role", d2.role) : b.removeAttribute("role"), (c2.content !== d2.content || c2.allowHTML !== d2.allowHTML) && ip(y, r.props), d2.arrow ? w2 ? c2.arrow !== d2.arrow && (b.removeChild(w2), b.appendChild(np(d2.arrow))) : b.appendChild(np(d2.arrow)) : w2 && b.removeChild(w2);
  }
  __name(l, "l");
  return u2(l, "onUpdate"), { popper: e, onUpdate: l };
}
__name(dp, "dp");
u2(dp, "render");
dp.$$tippy = true;
var Qh = 1;
var Ra = [];
var pl = [];
function ev(r, e) {
  var t = rp(r, Object.assign({}, br, pp(Kc(e)))), i, l, c2, d2 = false, v = false, b = false, y = false, w2, A2, O2, M2 = [], R2 = Zc(ln, t.interactiveDebounce), S, _ = Qh++, P = null, I2 = zh(t.plugins), L = { isEnabled: true, isVisible: false, isDestroyed: false, isMounted: false, isShown: false }, E = { id: _, reference: r, popper: fi(), popperInstance: P, props: t, state: L, plugins: I2, clearDelayTimeouts: Fn, setProps: Ar, setContent: pn, show: bi, hide: xo, hideWithInteractivity: yi, enable: Mr, disable: zt, unmount: xi, destroy: wo };
  if (!t.render)
    return E;
  var B = t.render(E), z2 = B.popper, X = B.onUpdate;
  z2.setAttribute("data-tippy-root", ""), z2.id = "tippy-" + E.id, E.popper = z2, r._tippy = E, z2._tippy = E;
  var V = I2.map(function(q2) {
    return q2.fn(E);
  }), $ = r.hasAttribute("aria-expanded");
  return Rt(), et(), Ge(), fe("onCreate", [E]), t.showOnCreate && cn(), z2.addEventListener("mouseenter", function() {
    E.props.interactive && E.state.isVisible && E.clearDelayTimeouts();
  }), z2.addEventListener("mouseleave", function() {
    E.props.interactive && E.props.trigger.indexOf("mouseenter") >= 0 && ce().addEventListener("mousemove", R2);
  }), E;
  function U() {
    var q2 = E.props.touch;
    return Array.isArray(q2) ? q2 : [q2, 0];
  }
  __name(U, "U");
  u2(U, "getNormalizedTouchSettings");
  function re() {
    return U()[0] === "hold";
  }
  __name(re, "re");
  u2(re, "getIsCustomTouchBehavior");
  function ie() {
    var q2;
    return !!((q2 = E.props.render) != null && q2.$$tippy);
  }
  __name(ie, "ie");
  u2(ie, "getIsDefaultRenderFn");
  function W() {
    return S || r;
  }
  __name(W, "W");
  u2(W, "getCurrentTarget");
  function ce() {
    var q2 = W().parentNode;
    return q2 ? jh(q2) : document;
  }
  __name(ce, "ce");
  u2(ce, "getDocument");
  function Pe() {
    return fl(z2);
  }
  __name(Pe, "Pe");
  u2(Pe, "getDefaultTemplateChildren");
  function Ue(q2) {
    return E.state.isMounted && !E.state.isVisible || Sr.isTouch || w2 && w2.type === "focus" ? 0 : ll(E.props.delay, q2 ? 0 : 1, br.delay);
  }
  __name(Ue, "Ue");
  u2(Ue, "getDelay");
  function Ge(q2) {
    q2 === void 0 && (q2 = false), z2.style.pointerEvents = E.props.interactive && !q2 ? "" : "none", z2.style.zIndex = "" + E.props.zIndex;
  }
  __name(Ge, "Ge");
  u2(Ge, "handleStyles");
  function fe(q2, Q, oe) {
    if (oe === void 0 && (oe = true), V.forEach(function(he) {
      he[q2] && he[q2].apply(he, Q);
    }), oe) {
      var ye;
      (ye = E.props)[q2].apply(ye, Q);
    }
  }
  __name(fe, "fe");
  u2(fe, "invokeHook");
  function Ze() {
    var q2 = E.props.aria;
    if (!!q2.content) {
      var Q = "aria-" + q2.content, oe = z2.id, ye = jn(E.props.triggerTarget || r);
      ye.forEach(function(he) {
        var pt = he.getAttribute(Q);
        if (E.state.isVisible)
          he.setAttribute(Q, pt ? pt + " " + oe : oe);
        else {
          var dt = pt && pt.replace(oe, "").trim();
          dt ? he.setAttribute(Q, dt) : he.removeAttribute(Q);
        }
      });
    }
  }
  __name(Ze, "Ze");
  u2(Ze, "handleAriaContentAttribute");
  function et() {
    if (!($ || !E.props.aria.expanded)) {
      var q2 = jn(E.props.triggerTarget || r);
      q2.forEach(function(Q) {
        E.props.interactive ? Q.setAttribute("aria-expanded", E.state.isVisible && Q === W() ? "true" : "false") : Q.removeAttribute("aria-expanded");
      });
    }
  }
  __name(et, "et");
  u2(et, "handleAriaExpandedAttribute");
  function Dt() {
    ce().removeEventListener("mousemove", R2), Ra = Ra.filter(function(q2) {
      return q2 !== R2;
    });
  }
  __name(Dt, "Dt");
  u2(Dt, "cleanupInteractiveMouseListeners");
  function Ot(q2) {
    if (!(Sr.isTouch && (b || q2.type === "mousedown"))) {
      var Q = q2.composedPath && q2.composedPath()[0] || q2.target;
      if (!(E.props.interactive && ep(z2, Q))) {
        if (jn(E.props.triggerTarget || r).some(function(oe) {
          return ep(oe, Q);
        })) {
          if (Sr.isTouch || E.state.isVisible && E.props.trigger.indexOf("click") >= 0)
            return;
        } else
          fe("onClickOutside", [E, q2]);
        E.props.hideOnClick === true && (E.clearDelayTimeouts(), E.hide(), v = true, setTimeout(function() {
          v = false;
        }), E.state.isMounted || wt());
      }
    }
  }
  __name(Ot, "Ot");
  u2(Ot, "onDocumentPress");
  function Cr() {
    b = true;
  }
  __name(Cr, "Cr");
  u2(Cr, "onTouchMove");
  function K() {
    b = false;
  }
  __name(K, "K");
  u2(K, "onTouchStart");
  function xt() {
    var q2 = ce();
    q2.addEventListener("mousedown", Ot, true), q2.addEventListener("touchend", Ot, qn), q2.addEventListener("touchstart", K, qn), q2.addEventListener("touchmove", Cr, qn);
  }
  __name(xt, "xt");
  u2(xt, "addDocumentPress");
  function wt() {
    var q2 = ce();
    q2.removeEventListener("mousedown", Ot, true), q2.removeEventListener("touchend", Ot, qn), q2.removeEventListener("touchstart", K, qn), q2.removeEventListener("touchmove", Cr, qn);
  }
  __name(wt, "wt");
  u2(wt, "removeDocumentPress");
  function _r(q2, Q) {
    lr(q2, function() {
      !E.state.isVisible && z2.parentNode && z2.parentNode.contains(z2) && Q();
    });
  }
  __name(_r, "_r");
  u2(_r, "onTransitionedOut");
  function $t(q2, Q) {
    lr(q2, Q);
  }
  __name($t, "$t");
  u2($t, "onTransitionedIn");
  function lr(q2, Q) {
    var oe = Pe().box;
    function ye(he) {
      he.target === oe && (cl(oe, "remove", ye), Q());
    }
    __name(ye, "ye");
    if (u2(ye, "listener"), q2 === 0)
      return Q();
    cl(oe, "remove", A2), cl(oe, "add", ye), A2 = ye;
  }
  __name(lr, "lr");
  u2(lr, "onTransitionEnd");
  function ur(q2, Q, oe) {
    oe === void 0 && (oe = false);
    var ye = jn(E.props.triggerTarget || r);
    ye.forEach(function(he) {
      he.addEventListener(q2, Q, oe), M2.push({ node: he, eventType: q2, handler: Q, options: oe });
    });
  }
  __name(ur, "ur");
  u2(ur, "on");
  function Rt() {
    re() && (ur("touchstart", Ct, { passive: true }), ur("touchend", xe, { passive: true })), Rh(E.props.trigger).forEach(function(q2) {
      if (q2 !== "manual")
        switch (ur(q2, Ct), q2) {
          case "mouseenter":
            ur("mouseleave", xe);
            break;
          case "focus":
            ur(Wh ? "focusout" : "blur", Fr);
            break;
          case "focusin":
            ur("focusout", Fr);
            break;
        }
    });
  }
  __name(Rt, "Rt");
  u2(Rt, "addListeners");
  function Hn() {
    M2.forEach(function(q2) {
      var Q = q2.node, oe = q2.eventType, ye = q2.handler, he = q2.options;
      Q.removeEventListener(oe, ye, he);
    }), M2 = [];
  }
  __name(Hn, "Hn");
  u2(Hn, "removeListeners");
  function Ct(q2) {
    var Q, oe = false;
    if (!(!E.state.isEnabled || Ur(q2) || v)) {
      var ye = ((Q = w2) == null ? void 0 : Q.type) === "focus";
      w2 = q2, S = q2.currentTarget, et(), !E.state.isVisible && Gh(q2) && Ra.forEach(function(he) {
        return he(q2);
      }), q2.type === "click" && (E.props.trigger.indexOf("mouseenter") < 0 || d2) && E.props.hideOnClick !== false && E.state.isVisible ? oe = true : cn(q2), q2.type === "click" && (d2 = !oe), oe && !ye && ct(q2);
    }
  }
  __name(Ct, "Ct");
  u2(Ct, "onTrigger");
  function ln(q2) {
    var Q = q2.target, oe = W().contains(Q) || z2.contains(Q);
    if (!(q2.type === "mousemove" && oe)) {
      var ye = pr().concat(z2).map(function(he) {
        var pt, dt = he._tippy, Wr = (pt = dt.popperInstance) == null ? void 0 : pt.state;
        return Wr ? { popperRect: he.getBoundingClientRect(), popperState: Wr, props: t } : null;
      }).filter(Boolean);
      Bh(ye, q2) && (Dt(), ct(q2));
    }
  }
  __name(ln, "ln");
  u2(ln, "onMouseMove");
  function xe(q2) {
    var Q = Ur(q2) || E.props.trigger.indexOf("click") >= 0 && d2;
    if (!Q) {
      if (E.props.interactive) {
        E.hideWithInteractivity(q2);
        return;
      }
      ct(q2);
    }
  }
  __name(xe, "xe");
  u2(xe, "onMouseLeave");
  function Fr(q2) {
    E.props.trigger.indexOf("focusin") < 0 && q2.target !== W() || E.props.interactive && q2.relatedTarget && z2.contains(q2.relatedTarget) || ct(q2);
  }
  __name(Fr, "Fr");
  u2(Fr, "onBlurOrFocusOut");
  function Ur(q2) {
    return Sr.isTouch ? re() !== q2.type.indexOf("touch") >= 0 : false;
  }
  __name(Ur, "Ur");
  u2(Ur, "isEventListenerStopped");
  function _t() {
    un();
    var q2 = E.props, Q = q2.popperOptions, oe = q2.placement, ye = q2.offset, he = q2.getReferenceClientRect, pt = q2.moveTransition, dt = ie() ? fl(z2).arrow : null, Wr = he ? { getBoundingClientRect: he, contextElement: he.contextElement || W() } : r, wi = { name: "$$tippy", enabled: true, phase: "beforeWrite", requires: ["computeStyles"], fn: u2(function(Pr) {
      var Vr = Pr.state;
      if (ie()) {
        var kt = Pe(), Nt = kt.box;
        ["placement", "reference-hidden", "escaped"].forEach(function(Ht) {
          Ht === "placement" ? Nt.setAttribute("data-placement", Vr.placement) : Vr.attributes.popper["data-popper-" + Ht] ? Nt.setAttribute("data-" + Ht, "") : Nt.removeAttribute("data-" + Ht);
        }), Vr.attributes.popper = {};
      }
    }, "fn") }, ft = [{ name: "offset", options: { offset: ye } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5 } }, { name: "computeStyles", options: { adaptive: !pt } }, wi];
    ie() && dt && ft.push({ name: "arrow", options: { element: dt, padding: 3 } }), ft.push.apply(ft, (Q == null ? void 0 : Q.modifiers) || []), E.popperInstance = sl(Wr, z2, Object.assign({}, Q, { placement: oe, onFirstUpdate: O2, modifiers: ft }));
  }
  __name(_t, "_t");
  u2(_t, "createPopperInstance");
  function un() {
    E.popperInstance && (E.popperInstance.destroy(), E.popperInstance = null);
  }
  __name(un, "un");
  u2(un, "destroyPopperInstance");
  function cr() {
    var q2 = E.props.appendTo, Q, oe = W();
    E.props.interactive && q2 === lp || q2 === "parent" ? Q = oe.parentNode : Q = up(q2, [oe]), Q.contains(z2) || Q.appendChild(z2), E.state.isMounted = true, _t();
  }
  __name(cr, "cr");
  u2(cr, "mount");
  function pr() {
    return za(z2.querySelectorAll("[data-tippy-root]"));
  }
  __name(pr, "pr");
  u2(pr, "getNestedPopperTree");
  function cn(q2) {
    E.clearDelayTimeouts(), q2 && fe("onTrigger", [E, q2]), xt();
    var Q = Ue(true), oe = U(), ye = oe[0], he = oe[1];
    Sr.isTouch && ye === "hold" && he && (Q = he), Q ? i = setTimeout(function() {
      E.show();
    }, Q) : E.show();
  }
  __name(cn, "cn");
  u2(cn, "scheduleShow");
  function ct(q2) {
    if (E.clearDelayTimeouts(), fe("onUntrigger", [E, q2]), !E.state.isVisible) {
      wt();
      return;
    }
    if (!(E.props.trigger.indexOf("mouseenter") >= 0 && E.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(q2.type) >= 0 && d2)) {
      var Q = Ue(false);
      Q ? l = setTimeout(function() {
        E.state.isVisible && E.hide();
      }, Q) : c2 = requestAnimationFrame(function() {
        E.hide();
      });
    }
  }
  __name(ct, "ct");
  u2(ct, "scheduleHide");
  function Mr() {
    E.state.isEnabled = true;
  }
  __name(Mr, "Mr");
  u2(Mr, "enable");
  function zt() {
    E.hide(), E.state.isEnabled = false;
  }
  __name(zt, "zt");
  u2(zt, "disable");
  function Fn() {
    clearTimeout(i), clearTimeout(l), cancelAnimationFrame(c2);
  }
  __name(Fn, "Fn");
  u2(Fn, "clearDelayTimeouts");
  function Ar(q2) {
    if (!E.state.isDestroyed) {
      fe("onBeforeUpdate", [E, q2]), Hn();
      var Q = E.props, oe = rp(r, Object.assign({}, Q, Kc(q2), { ignoreAttributes: true }));
      E.props = oe, Rt(), Q.interactiveDebounce !== oe.interactiveDebounce && (Dt(), R2 = Zc(ln, oe.interactiveDebounce)), Q.triggerTarget && !oe.triggerTarget ? jn(Q.triggerTarget).forEach(function(ye) {
        ye.removeAttribute("aria-expanded");
      }) : oe.triggerTarget && r.removeAttribute("aria-expanded"), et(), Ge(), X && X(Q, oe), E.popperInstance && (_t(), pr().forEach(function(ye) {
        requestAnimationFrame(ye._tippy.popperInstance.forceUpdate);
      })), fe("onAfterUpdate", [E, q2]);
    }
  }
  __name(Ar, "Ar");
  u2(Ar, "setProps");
  function pn(q2) {
    E.setProps({ content: q2 });
  }
  __name(pn, "pn");
  u2(pn, "setContent");
  function bi() {
    var q2 = E.state.isVisible, Q = E.state.isDestroyed, oe = !E.state.isEnabled, ye = Sr.isTouch && !E.props.touch, he = ll(E.props.duration, 0, br.duration);
    if (!(q2 || Q || oe || ye) && !W().hasAttribute("disabled") && (fe("onShow", [E], false), E.props.onShow(E) !== false)) {
      if (E.state.isVisible = true, ie() && (z2.style.visibility = "visible"), Ge(), xt(), E.state.isMounted || (z2.style.transition = "none"), ie()) {
        var pt = Pe(), dt = pt.box, Wr = pt.content;
        ul([dt, Wr], 0);
      }
      O2 = u2(function() {
        var ft;
        if (!(!E.state.isVisible || y)) {
          if (y = true, z2.offsetHeight, z2.style.transition = E.props.moveTransition, ie() && E.props.animation) {
            var Ei = Pe(), Pr = Ei.box, Vr = Ei.content;
            ul([Pr, Vr], he), Qc([Pr, Vr], "visible");
          }
          Ze(), et(), Jc(pl, E), (ft = E.popperInstance) == null || ft.forceUpdate(), fe("onMount", [E]), E.props.animation && ie() && $t(he, function() {
            E.state.isShown = true, fe("onShown", [E]);
          });
        }
      }, "onFirstUpdate"), cr();
    }
  }
  __name(bi, "bi");
  u2(bi, "show");
  function xo() {
    var q2 = !E.state.isVisible, Q = E.state.isDestroyed, oe = !E.state.isEnabled, ye = ll(E.props.duration, 1, br.duration);
    if (!(q2 || Q || oe) && (fe("onHide", [E], false), E.props.onHide(E) !== false)) {
      if (E.state.isVisible = false, E.state.isShown = false, y = false, d2 = false, ie() && (z2.style.visibility = "hidden"), Dt(), wt(), Ge(true), ie()) {
        var he = Pe(), pt = he.box, dt = he.content;
        E.props.animation && (ul([pt, dt], ye), Qc([pt, dt], "hidden"));
      }
      Ze(), et(), E.props.animation ? ie() && _r(ye, E.unmount) : E.unmount();
    }
  }
  __name(xo, "xo");
  u2(xo, "hide");
  function yi(q2) {
    ce().addEventListener("mousemove", R2), Jc(Ra, R2), R2(q2);
  }
  __name(yi, "yi");
  u2(yi, "hideWithInteractivity");
  function xi() {
    E.state.isVisible && E.hide(), !!E.state.isMounted && (un(), pr().forEach(function(q2) {
      q2._tippy.unmount();
    }), z2.parentNode && z2.parentNode.removeChild(z2), pl = pl.filter(function(q2) {
      return q2 !== E;
    }), E.state.isMounted = false, fe("onHidden", [E]));
  }
  __name(xi, "xi");
  u2(xi, "unmount");
  function wo() {
    E.state.isDestroyed || (E.clearDelayTimeouts(), E.unmount(), Hn(), delete r._tippy, E.state.isDestroyed = true, fe("onDestroy", [E]));
  }
  __name(wo, "wo");
  u2(wo, "destroy");
}
__name(ev, "ev");
u2(ev, "createTippy");
function hi(r, e) {
  e === void 0 && (e = {});
  var t = br.plugins.concat(e.plugins || []);
  Fh();
  var i = Object.assign({}, e, { plugins: t }), l = qh(r);
  if (false)
    var c2, d2;
  var v = l.reduce(function(b, y) {
    var w2 = y && ev(y, i);
    return w2 && b.push(w2), b;
  }, []);
  return ka(r) ? v[0] : v;
}
__name(hi, "hi");
u2(hi, "tippy");
hi.defaultProps = br;
hi.setDefaultProps = Zh;
hi.currentInput = Sr;
var tv = Object.assign({}, no, { effect: u2(function(e) {
  var t = e.state, i = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow);
}, "effect") });
var fp = u2(function(e, t) {
  var i;
  t === void 0 && (t = {});
  var l = e, c2 = [], d2 = [], v, b = t.overrides, y = [], w2 = false;
  function A2() {
    d2 = l.map(function(E) {
      return jn(E.props.triggerTarget || E.reference);
    }).reduce(function(E, B) {
      return E.concat(B);
    }, []);
  }
  __name(A2, "A");
  u2(A2, "setTriggerTargets");
  function O2() {
    c2 = l.map(function(E) {
      return E.reference;
    });
  }
  __name(O2, "O");
  u2(O2, "setReferences");
  function M2(E) {
    l.forEach(function(B) {
      E ? B.enable() : B.disable();
    });
  }
  __name(M2, "M");
  u2(M2, "enableInstances");
  function R2(E) {
    return l.map(function(B) {
      var z2 = B.setProps;
      return B.setProps = function(X) {
        z2(X), B.reference === v && E.setProps(X);
      }, function() {
        B.setProps = z2;
      };
    });
  }
  __name(R2, "R");
  u2(R2, "interceptSetProps");
  function S(E, B) {
    var z2 = d2.indexOf(B);
    if (B !== v) {
      v = B;
      var X = (b || []).concat("content").reduce(function(V, $) {
        return V[$] = l[z2].props[$], V;
      }, {});
      E.setProps(Object.assign({}, X, { getReferenceClientRect: typeof X.getReferenceClientRect == "function" ? X.getReferenceClientRect : function() {
        var V;
        return (V = c2[z2]) == null ? void 0 : V.getBoundingClientRect();
      } }));
    }
  }
  __name(S, "S");
  u2(S, "prepareInstance"), M2(false), O2(), A2();
  var _ = { fn: u2(function() {
    return { onDestroy: u2(function() {
      M2(true);
    }, "onDestroy"), onHidden: u2(function() {
      v = null;
    }, "onHidden"), onClickOutside: u2(function(z2) {
      z2.props.showOnCreate && !w2 && (w2 = true, v = null);
    }, "onClickOutside"), onShow: u2(function(z2) {
      z2.props.showOnCreate && !w2 && (w2 = true, S(z2, c2[0]));
    }, "onShow"), onTrigger: u2(function(z2, X) {
      S(z2, X.currentTarget);
    }, "onTrigger") };
  }, "fn") }, P = hi(fi(), Object.assign({}, Dh(t, ["overrides"]), { plugins: [_].concat(t.plugins || []), triggerTarget: d2, popperOptions: Object.assign({}, t.popperOptions, { modifiers: [].concat(((i = t.popperOptions) == null ? void 0 : i.modifiers) || [], [tv]) }) })), I2 = P.show;
  P.show = function(E) {
    if (I2(), !v && E == null)
      return S(P, c2[0]);
    if (!(v && E == null)) {
      if (typeof E == "number")
        return c2[E] && S(P, c2[E]);
      if (l.indexOf(E) >= 0) {
        var B = E.reference;
        return S(P, B);
      }
      if (c2.indexOf(E) >= 0)
        return S(P, E);
    }
  }, P.showNext = function() {
    var E = c2[0];
    if (!v)
      return P.show(0);
    var B = c2.indexOf(v);
    P.show(c2[B + 1] || E);
  }, P.showPrevious = function() {
    var E = c2[c2.length - 1];
    if (!v)
      return P.show(E);
    var B = c2.indexOf(v), z2 = c2[B - 1] || E;
    P.show(z2);
  };
  var L = P.setProps;
  return P.setProps = function(E) {
    b = E.overrides || b, L(E);
  }, P.setInstances = function(E) {
    M2(true), y.forEach(function(B) {
      return B();
    }), l = E, M2(false), O2(), A2(), y = R2(P), P.setProps({ triggerTarget: d2 });
  }, y = R2(P), P;
}, "createSingleton");
hi.setDefaultProps({ render: dp });
var Pt = hi;
var vl = u2((r) => typeof r == "object" && r !== null && typeof r.initHelp == "function", "isHelpable");
function _e(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.help = true;
      this.helpId = "";
      this.debugHelpable = false;
      this.helpableMachine = rt({ id: "helpable", initial: "idle", states: { idle: { on: { INIT: { target: "initialized", actions: ["init"] } } }, initialized: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "enabled", cond: "isEnabled" }, { target: "disabled", cond: "isDisabled" }] }, enabled: { on: { SHOW: { target: "enabled", actions: ["show"] }, DISABLE: { target: "disabled", actions: ["disable", "destroy"] } } }, disabled: { on: { ENABLE: { target: "enabled", actions: ["init", "enable"] } } } } } } }, { guards: { isEnabled: () => this.help, isDisabled: () => !this.help }, actions: { init: () => {
        let i = this.helpContent;
        i !== null && (this.popup = Pt(this, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, placement: "auto", theme: "qni", onShow(l) {
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
    }
    initHelp() {
      this.helpableService = Je(this.helpableMachine).onTransition((i) => {
        this.debugHelpable && console.log(`helpable: ${nt(i.value)}`);
      }).start(), this.helpableService.send("INIT");
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
  return u2(e, "HelpableMixinClass"), k([j], e.prototype, "help", 2), k([j], e.prototype, "helpId", 2), k([j], e.prototype, "debugHelpable", 2), e;
}
__name(_e, "_e");
u2(_e, "HelpableMixin");
function Me(r) {
  class e extends r {
    get hoverable() {
      return this.hasAttribute("data-hoverable");
    }
    set hoverable(i) {
      i ? this.setAttribute("data-hoverable", "") : this.removeAttribute("data-hoverable");
    }
  }
  __name(e, "e");
  return u2(e, "HoverableMixinClass"), e;
}
__name(Me, "Me");
u2(Me, "HoverableMixin");
function* Na(r) {
  let e = "", t = 0, i = false;
  for (let l = 0; l < r.length; l += 1)
    r[l] === "{" && r[l + 1] === "{" && r[l - 1] !== "\\" && !i ? (i = true, e && (yield { type: "string", start: t, end: l, value: e }), e = "{{", t = l, l += 2) : r[l] === "}" && r[l + 1] === "}" && r[l - 1] !== "\\" && i && (i = false, yield { type: "part", start: t, end: l + 2, value: e.slice(2).trim() }, e = "", l += 2, t = l), e += r[l] || "";
  e && (yield { type: "string", start: t, end: r.length, value: e });
}
__name(Na, "Na");
u2(Na, "parse");
var hp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "hp");
var nn = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "nn");
var Tr;
var Ga;
var Br = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Tr.set(this, void 0), Ga.set(this, ""), hp(this, Tr, e, "f"), nn(this, Tr, "f").updateParent("");
  }
  get attributeName() {
    return nn(this, Tr, "f").attr.name;
  }
  get attributeNamespace() {
    return nn(this, Tr, "f").attr.namespaceURI;
  }
  get value() {
    return nn(this, Ga, "f");
  }
  set value(e) {
    hp(this, Ga, e || "", "f"), nn(this, Tr, "f").updateParent(e);
  }
  get element() {
    return nn(this, Tr, "f").element;
  }
  get booleanValue() {
    return nn(this, Tr, "f").booleanValue;
  }
  set booleanValue(e) {
    nn(this, Tr, "f").booleanValue = e;
  }
}, "Br");
u2(Br, "AttributeTemplatePart");
Tr = /* @__PURE__ */ new WeakMap(), Ga = /* @__PURE__ */ new WeakMap();
var uo = /* @__PURE__ */ __name(class {
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
}, "uo");
u2(uo, "AttributeValueSetter");
var vp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "vp");
var vi = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "vi");
var Or;
var Xt = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.expression = t, Or.set(this, void 0), vp(this, Or, [e], "f"), e.textContent = "";
  }
  get value() {
    return vi(this, Or, "f").map((e) => e.textContent).join("");
  }
  set value(e) {
    this.replace(e);
  }
  get previousSibling() {
    return vi(this, Or, "f")[0].previousSibling;
  }
  get nextSibling() {
    return vi(this, Or, "f")[vi(this, Or, "f").length - 1].nextSibling;
  }
  replace(...e) {
    let t = e.map((i) => typeof i == "string" ? new Text(i) : i);
    t.length || t.push(new Text("")), vi(this, Or, "f")[0].before(...t);
    for (let i of vi(this, Or, "f"))
      i.remove();
    vp(this, Or, t, "f");
  }
}, "Xt");
u2(Xt, "NodeTemplatePart");
Or = /* @__PURE__ */ new WeakMap();
function co(r) {
  return { createCallback(e, t, i) {
    this.processCallback(e, t, i);
  }, processCallback(e, t, i) {
    var l;
    if (!(typeof i != "object" || !i)) {
      for (let c2 of t)
        if (c2.expression in i) {
          let d2 = (l = i[c2.expression]) !== null && l !== void 0 ? l : "";
          r(c2, d2);
        }
    }
  } };
}
__name(co, "co");
u2(co, "createProcessor");
function po(r, e) {
  r.value = String(e);
}
__name(po, "po");
u2(po, "processPropertyIdentity");
function La(r, e) {
  return typeof e == "boolean" && r instanceof Br && typeof r.element[r.attributeName] == "boolean" ? (r.booleanValue = e, true) : false;
}
__name(La, "La");
u2(La, "processBooleanAttribute");
var ml = co(po);
var rv = co((r, e) => {
  La(r, e) || po(r, e);
});
var mp = /* @__PURE__ */ __name(function(r, e, t, i, l) {
  if (i === "m")
    throw new TypeError("Private method is not writable");
  if (i === "a" && !l)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? r !== e || !l : !e.has(r))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return i === "a" ? l.call(r, t) : l ? l.value = t : e.set(r, t), t;
}, "mp");
var qa = /* @__PURE__ */ __name(function(r, e, t, i) {
  if (t === "a" && !i)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? r !== e || !i : !e.has(r))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t === "m" ? i : t === "a" ? i.call(r) : i ? i.value : e.get(r);
}, "qa");
var fo;
var ho;
function* nv(r) {
  let e = r.ownerDocument.createTreeWalker(r, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, false), t;
  for (; t = e.nextNode(); )
    if (t instanceof Element && t.hasAttributes())
      for (let i = 0; i < t.attributes.length; i += 1) {
        let l = t.attributes.item(i);
        if (l && l.value.includes("{{")) {
          let c2 = new uo(t, l);
          for (let d2 of Na(l.value))
            if (d2.type === "string")
              c2.append(d2.value);
            else {
              let v = new Br(c2, d2.value);
              c2.append(v), yield v;
            }
        }
      }
    else if (t instanceof Text && t.textContent && t.textContent.includes("{{"))
      for (let i of Na(t.textContent)) {
        i.end < t.textContent.length && t.splitText(i.end), i.type === "part" && (yield new Xt(t, i.value));
        break;
      }
}
__name(nv, "nv");
u2(nv, "collectParts");
var on = /* @__PURE__ */ __name(class extends DocumentFragment {
  constructor(e, t, i = ml) {
    var l, c2;
    super();
    fo.set(this, void 0), ho.set(this, void 0), Object.getPrototypeOf(this) !== on.prototype && Object.setPrototypeOf(this, on.prototype), this.appendChild(e.content.cloneNode(true)), mp(this, ho, Array.from(nv(this)), "f"), mp(this, fo, i, "f"), (c2 = (l = qa(this, fo, "f")).createCallback) === null || c2 === void 0 || c2.call(l, this, qa(this, ho, "f"), t);
  }
  update(e) {
    qa(this, fo, "f").processCallback(this, qa(this, ho, "f"), e);
  }
}, "on");
u2(on, "TemplateInstance");
fo = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap();
var gp = /* @__PURE__ */ new WeakSet();
function bp(r) {
  return gp.has(r);
}
__name(bp, "bp");
u2(bp, "isDirective");
function yp(r, e) {
  return bp(e) ? (e(r), true) : false;
}
__name(yp, "yp");
u2(yp, "processDirective");
function vo(r) {
  return (...e) => {
    let t = r(...e);
    return gp.add(t), t;
  };
}
__name(vo, "vo");
u2(vo, "directive");
var mo = /* @__PURE__ */ new WeakMap();
var go = /* @__PURE__ */ __name(class {
  constructor(e, t) {
    this.element = e, this.type = t, this.element.addEventListener(this.type, this), mo.get(this.element).set(this.type, this);
  }
  set(e) {
    typeof e == "function" ? this.handleEvent = e.bind(this.element) : typeof e == "object" && typeof e.handleEvent == "function" ? this.handleEvent = e.handleEvent.bind(e) : (this.element.removeEventListener(this.type, this), mo.get(this.element).delete(this.type));
  }
  static for(e) {
    mo.has(e.element) || mo.set(e.element, /* @__PURE__ */ new Map());
    let t = e.attributeName.slice(2), i = mo.get(e.element);
    return i.has(t) ? i.get(t) : new go(e.element, t);
  }
}, "go");
u2(go, "EventHandler");
function xp(r, e) {
  return r instanceof Br && r.attributeName.startsWith("on") ? (go.for(r).set(e), r.element.removeAttributeNS(r.attributeNamespace, r.attributeName), true) : false;
}
__name(xp, "xp");
u2(xp, "processEvent");
function iv(r, e) {
  return e instanceof mi && r instanceof Xt ? (e.renderInto(r), true) : false;
}
__name(iv, "iv");
u2(iv, "processSubTemplate");
function ov(r, e) {
  return e instanceof DocumentFragment && r instanceof Xt ? (e.childNodes.length && r.replace(...e.childNodes), true) : false;
}
__name(ov, "ov");
u2(ov, "processDocumentFragment");
function av(r) {
  return typeof r == "object" && Symbol.iterator in r;
}
__name(av, "av");
u2(av, "isIterable");
function sv(r, e) {
  if (!av(e))
    return false;
  if (r instanceof Xt) {
    let t = [];
    for (let i of e)
      if (i instanceof mi) {
        let l = document.createDocumentFragment();
        i.renderInto(l), t.push(...l.childNodes);
      } else
        i instanceof DocumentFragment ? t.push(...i.childNodes) : t.push(String(i));
    return t.length && r.replace(...t), true;
  } else
    return r.value = Array.from(e).join(" "), true;
}
__name(sv, "sv");
u2(sv, "processIterable");
function ja(r, e) {
  yp(r, e) || La(r, e) || xp(r, e) || iv(r, e) || ov(r, e) || sv(r, e) || po(r, e);
}
__name(ja, "ja");
u2(ja, "processPart");
var gl = /* @__PURE__ */ new WeakMap();
var wp = /* @__PURE__ */ new WeakMap();
var Ep = /* @__PURE__ */ new WeakMap();
var mi = /* @__PURE__ */ __name(class {
  constructor(e, t, i) {
    this.strings = e, this.values = t, this.processor = i;
  }
  get template() {
    if (gl.has(this.strings))
      return gl.get(this.strings);
    {
      let e = document.createElement("template"), t = this.strings.length - 1;
      return e.innerHTML = this.strings.reduce((i, l, c2) => i + l + (c2 < t ? `{{ ${c2} }}` : ""), ""), gl.set(this.strings, e), e;
    }
  }
  renderInto(e) {
    let t = this.template;
    if (wp.get(e) !== t) {
      wp.set(e, t);
      let i = new on(t, this.values, this.processor);
      Ep.set(e, i), e instanceof Xt ? e.replace(...i.children) : e.appendChild(i);
      return;
    }
    Ep.get(e).update(this.values);
  }
}, "mi");
u2(mi, "TemplateResult");
var lv = co(ja);
function J(r, ...e) {
  return new mi(r, e, lv);
}
__name(J, "J");
u2(J, "html");
function te(r, e) {
  r.renderInto(e);
}
__name(te, "te");
u2(te, "render");
var bl = /* @__PURE__ */ new WeakMap();
var uv = vo((...r) => (e) => {
  bl.has(e) || bl.set(e, { i: r.length });
  let t = bl.get(e);
  for (let i = 0; i < r.length; i += 1)
    r[i] instanceof Promise ? Promise.resolve(r[i]).then((l) => {
      i < t.i && (t.i = i, ja(e, l));
    }) : i <= t.i && (t.i = i, ja(e, r[i]));
});
var cv = vo((r) => (e) => {
  if (!(e instanceof Xt))
    return;
  let t = document.createElement("template");
  t.innerHTML = r;
  let i = document.importNode(t.content, true);
  e.replace(...i.childNodes);
});
function ze(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.icon = "";
    }
    iconHtml(i) {
      return J`${this.iconStyle}
        <div id="icon" part="icon">${this.iconSvg(i)}</div>`;
    }
    iconSvg(i) {
      if (this.icon === "")
        return J([i]);
      let l = document.getElementById(this.icon);
      return l === null ? null : l.content.cloneNode(true);
    }
    get iconStyle() {
      return J`<style>
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
  return u2(e, "IconableMixinClass"), k([j], e.prototype, "icon", 2), e;
}
__name(ze, "ze");
u2(ze, "IconableMixin");
var $r = u2((r) => typeof r == "object" && r !== null && typeof r.if == "string", "isIfable");
function Qe(r) {
  class e extends r {
    constructor() {
      super(...arguments);
      this.if = "";
    }
  }
  __name(e, "e");
  return u2(e, "IfableMixinClass"), k([j], e.prototype, "if", 2), e;
}
__name(Qe, "Qe");
u2(Qe, "IfableMixin");
var Sp = u2((r) => typeof r == "object" && r !== null && typeof r.initMenu == "function", "isMenuable");
function Ae(r) {
  class e extends r {
    initMenu() {
      this._tippy || (this.addEventListener("click", this.dispatchShowMenuEvent), this.menu = Pt(this, { allowHTML: true, animation: false, arrow: false, content: this.menuContent, interactive: true, appendTo: document.body, offset: [0, 16], placement: "top", theme: "operation-menu", trigger: "manual", onShow: this.initMenuItems.bind(this), onHide: () => {
        var l, c2, d2, v;
        (l = this.ifTooltip) == null || l.hide(), (c2 = this.angleTooltip) == null || c2.hide(), (d2 = this.flagTooltip) == null || d2.hide(), (v = this.deleteTooltip) == null || v.hide();
      } }));
    }
    showMenu() {
      this.menu.show();
    }
    hideMenu() {
      this.menu.hide();
    }
    destroyMenu() {
      let i = this._tippy;
      i == null || i.destroy();
    }
    dispatchShowMenuEvent() {
      this.dispatchEvent(new Event("operation-show-menu", { bubbles: true }));
    }
    get menuContent() {
      let i = document.getElementById("operation-menu");
      ue.notNull(i);
      let l = i.content.cloneNode(true), c2 = document.createDocumentFragment();
      return te(J`${l}`, c2), c2;
    }
    initMenuItems(i) {
      if ($r(i.reference)) {
        let c2 = i.popper.querySelector("button[data-operation-menu-if]");
        ue.notNull(c2), c2.disabled = false, this.ifTooltip = c2._tippy, this.ifTooltip === void 0 && (this.ifTooltip = Pt(c2, { animation: false, content: "Set `if' Conditional" }), c2.addEventListener("mousedown", this.showIfInspector.bind(this)));
      }
      if (yn(i.reference)) {
        let c2 = i.popper.querySelector("button[data-operation-menu-angle]");
        ue.notNull(c2), c2.disabled = false, this.angleTooltip = c2._tippy, this.angleTooltip === void 0 && (this.angleTooltip = Pt(c2, { animation: false, content: "Change Angle" }), c2.addEventListener("mousedown", this.showAngleInspector.bind(this)));
      }
      if (Pn(i.reference)) {
        let c2 = i.popper.querySelector("button[data-operation-menu-flag]");
        ue.notNull(c2), c2.disabled = false, this.flagTooltip = c2._tippy, this.flagTooltip === void 0 && (this.flagTooltip = Pt(c2, { animation: false, content: "Set Condifitonal Flag" }), c2.addEventListener("mousedown", this.showFlagInspector.bind(this)));
      }
      let l = i.popper.querySelector("[data-operation-menu-delete]");
      ue.notNull(l), this.deleteTooltip = l._tippy, this.deleteTooltip === void 0 && (this.deleteTooltip = Pt(l, { animation: false, content: "Delete" })), l.addEventListener("mousedown", this.destroyMenu.bind(this)), l.addEventListener("mousedown", this.dispatchOperationDeleteEvent.bind(this));
    }
    showIfInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-if", { bubbles: true }));
    }
    showAngleInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-angle", { bubbles: true }));
    }
    showFlagInspector() {
      this.hideMenu(), this.dispatchEvent(new Event("operation-menu-flag", { bubbles: true }));
    }
    dispatchOperationDeleteEvent() {
      this.dispatchEvent(new Event("operation-delete", { bubbles: true }));
    }
  }
  __name(e, "e");
  return u2(e, "MenuableMixinClass"), e;
}
__name(Ae, "Ae");
u2(Ae, "MenuableMixin");
var at = /* @__PURE__ */ __name(class extends Ae(_e(Ce(Oe(Me(HTMLElement))))) {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
  get operationType() {
    return Us;
  }
  showPopup() {
    this.showInspector();
  }
  showInspector() {
    if (ue.notNull(this.parentElement), this.parentElement.tagName === "PALETTE-DROPZONE")
      return;
    let e = this._tippy;
    e && e.destroy();
    let t = this.blochInspectorPopupContent();
    Pt(this, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, placement: "auto", theme: "qni", onShow(l) {
      l.setContent(t);
    } }).show();
  }
  blochInspectorPopupContent() {
    let e = document.createDocumentFragment();
    return te(J`
        <div class="bloch-display__inspector">
          <header>
            <h1>Local State</h1>
          </header>

          <section>
            r:
            <span class="bloch-display__inspector-d">${this.forceSigned(this.d)}</span>, ϕ:
            <span class="bloch-display__inspector-phi">${this.forceSigned(this.phi, 2)}</span>, θ:
            <span class="bloch-display__inspector-theta">${this.forceSigned(this.theta, 2)}</span>
          </section>
          <section>
            x:
            <span class="bloch-display__inspector-x">${this.forceSigned(this.x)}</span>, y:
            <span class="bloch-display__inspector-y">${this.forceSigned(this.y)}</span>, z:
            <span class="bloch-display__inspector-z">${this.forceSigned(this.z)}</span>
          </section>
        </div>
      `, e), e;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.updateBlochVector(), this.addEventListener("mouseenter", this.showInspector));
  }
  disconnectedCallback() {
    let e = this._tippy;
    e == null || e.destroy();
  }
  attributeChangedCallback(e, t, i) {
    !this.body || t !== i && i !== null && (e === "data-x" && (this.x = parseFloat(i)), e === "data-y" && (this.y = parseFloat(i)), e === "data-z" && (this.z = parseFloat(i)), this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian(), this.updateBlochVector());
  }
  update() {
    this.d = this.vectorLength(), this.phi = this.phiRadian(), this.theta = this.thetaRadian();
    let e = u2((i) => J`<div part="vector-line-rect" class="vector-line-rect" style="transform: rotateY(${i}deg)"></div>`, "vectorLineRect"), t = u2((i, l) => J`<div
        part="vector-end-circle"
        class="vector-end-circle"
        style="transform: rotate${l}(${i}deg)"
        data-targets="bloch-display.vectorEndCircles"
      ></div>`, "vectorEndCircle");
    te(J`<style>
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
        </div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Us}"`;
  }
  updateBlochVector() {
    let e = this.vectorEndCircles[0].offsetWidth;
    this.vectorLine.style.height = `calc(${100 * this.d / 2}% - ${e / 2}px)`, this.vectorEnd.style.bottom = `calc(50% + ${100 * this.d / 2}% + ${e / 2}px)`, this.d !== 0 && (this.vector.style.transform = `rotateY(${this.phi}deg) rotateX(${-this.theta}deg)`);
    let t = this._tippy;
    t == null || t.setContent(this.blochInspectorPopupContent());
  }
  get d() {
    let e = this.getAttribute("data-d");
    return ue.notNull(e), parseFloat(e);
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
    return ue.notNull(e), parseFloat(e);
  }
  phiRadian() {
    return Math.atan2(this.y, this.x) * 180 / Math.PI;
  }
  set theta(e) {
    this.setAttribute("data-theta", e.toString());
  }
  get theta() {
    let e = this.getAttribute("data-theta");
    return ue.notNull(e), parseFloat(e);
  }
  thetaRadian() {
    let e = Math.max(0, Math.PI / 2 - Math.atan2(this.z, Math.sqrt(this.y * this.y + this.x * this.x)));
    return 180 * e / Math.PI;
  }
  forceSigned(e, t = 4) {
    return (e >= 0 ? "+" : "") + e.toFixed(t);
  }
}, "at");
u2(at, "BlochDisplayElement"), k([je], at.prototype, "body", 2), k([je], at.prototype, "vectorLine", 2), k([je], at.prototype, "vectorEnd", 2), k([je], at.prototype, "vector", 2), k([fr], at.prototype, "vectorEndCircles", 2), k([j], at.prototype, "x", 2), k([j], at.prototype, "y", 2), k([j], at.prototype, "z", 2);
ne(at);
var Tp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z" fill="currentColor"/>
</svg>
`;
var jt = /* @__PURE__ */ __name(class extends Ae(_e(Ce(Be(ze(Oe(Me(HTMLElement))))))) {
  get operationType() {
    return Fs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Tp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Fs}"`;
  }
}, "jt");
u2(jt, "ControlGateElement");
ne(jt);
var Op = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13V35M17 24H31M31 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var Yt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return fa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Op)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${fa}<${this.if}"` : `"${fa}"`;
  }
}, "Yt");
u2(Yt, "HGateElement");
ne(Yt);
var Cp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 35C8 30.7565 9.68571 26.6869 12.6863 23.6863C15.6869 20.6857 19.7565 19 24 19C28.2435 19 32.3131 20.6857 35.3137 23.6863C38.3143 26.6869 40 30.7565 40 35" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 33L35 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 34.5C25.3284 34.5 26 33.8284 26 33C26 32.1716 25.3284 31.5 24.5 31.5C23.6716 31.5 23 32.1716 23 33C23 33.8284 23.6716 34.5 24.5 34.5Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Zt = /* @__PURE__ */ __name(class extends Ae(_e(Ac(Ce(ze(Oe(Me(HTMLElement))))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    return Sa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">
        ${this.iconHtml(Cp)}
        <div id="value" part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return this.flag === "" ? `"${Sa}"` : `"${Sa}>${this.flag}"`;
  }
}, "Zt");
u2(Zt, "MeasurementGateElement"), k([j], Zt.prototype, "value", 2);
ne(Zt);
var _p = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
>
  <path d="M17 24A7 7 0 1 0 31 24A7 7 0 1 0 17 24M19 34L29 13" />
</svg>
`;
var Jt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Jr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return ga;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(_p)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${ga}"` : `"${ga}(${this.angle.replace("/", "_")})"`;
  }
}, "Jt");
u2(Jt, "PhaseGateElement");
ne(Jt);
var Mp = `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M10 24L13 24L14 36L17 36L18 12L38 12" />
  <path d="M24 32L34 18M34 32L24 18" />
</svg>
`;
var Kt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return ya;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Mp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ya}<${this.if}"` : `"${ya}"`;
  }
}, "Kt");
u2(Kt, "RnotGateElement");
ne(Kt);
var Ap = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L24.7475 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.8187 13.0016L34.6093 35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Qt = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Jr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return xa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Ap)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${xa}"` : `"${xa}(${this.angle.replace("/", "_")})"`;
  }
}, "Qt");
u2(Qt, "RxGateElement");
ne(Qt);
var Pp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M34.6093 13.0016L29.5 23.5V35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13L29.5 23.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var er = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Jr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return wa;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Pp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${wa}"` : `"${wa}(${this.angle.replace("/", "_")})"`;
  }
}, "er");
u2(er, "RyGateElement");
ne(er);
var Ip = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.3214 35V24M18 24.5L21.7303 35M12.3214 24V13C21 13 22 15.5 22 18.5C22 21.5 21 24 12.3214 24Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24.5 13H34.5L24.5 35H34.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var tr = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Jr(Ce(Be(ze(Oe(Me(HTMLElement)))))))))) {
  get operationType() {
    return Ea;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Ip)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.angle === "" ? `"${Ea}"` : `"${Ea}(${this.angle.replace("/", "_")})"`;
  }
}, "tr");
u2(tr, "RzGateElement");
ne(tr);
var Dp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 36L36 12M12 12L36 36" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var rr = /* @__PURE__ */ __name(class extends Ae(_e(He(Ce(Be(ze(Oe(Me(HTMLElement)))))))) {
  get operationType() {
    return Hs;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Dp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return `"${Hs}"`;
  }
}, "rr");
u2(rr, "SwapGateElement");
ne(rr);
var Rp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 13H33M24 13V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var nr = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return ba;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Rp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ba}<${this.if}"` : `"${ba}"`;
  }
}, "nr");
u2(nr, "TGateElement");
ne(nr);
var zp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 10V40M34 10L40 24L34 40" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var Bt = /* @__PURE__ */ __name(class extends Ae(_e(Ce(ze(Oe(Me(HTMLElement)))))) {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  get operationType() {
    switch (this.value) {
      case "0":
        return Cc;
      case "1":
        return _c;
      default:
        throw new Error(`Invalid write value: ${this.value}`);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">
        ${this.iconHtml(zp)}
        <div part="value"></div>
      </div>`, this.shadowRoot);
  }
  toJson() {
    return `"|${this.value}>"`;
  }
}, "Bt");
u2(Bt, "WriteGateElement"), k([j], Bt.prototype, "value", 2);
ne(Bt);
var kp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 24H33M24 15V33" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var ir = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return ha;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(kp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ha}<${this.if}"` : `"${ha}"`;
  }
}, "ir");
u2(ir, "XGateElement");
ne(ir);
var Np = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 13L24 24M24 24L31 13M24 24V35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;
var or = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return va;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Np)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${va}<${this.if}"` : `"${va}"`;
  }
}, "or");
u2(or, "YGateElement");
ne(or);
var Gp = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.5 13H31L17.5 35H31" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
var ar = /* @__PURE__ */ __name(class extends Ae(_e(Qe(He(Ce(Be(ze(Oe(Me(HTMLElement))))))))) {
  get operationType() {
    return ma;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update());
  }
  update() {
    te(J`<div part="body">${this.iconHtml(Gp)}</div>`, this.shadowRoot);
  }
  toJson() {
    return this.if !== "" ? `"${ma}<${this.if}"` : `"${ma}"`;
  }
}, "ar");
u2(ar, "ZGateElement");
ne(ar);
var Ye = u2((r) => r instanceof Yt || r instanceof ir || r instanceof or || r instanceof ar || r instanceof Jt || r instanceof nr || r instanceof Kt || r instanceof Qt || r instanceof er || r instanceof tr || r instanceof rr || r instanceof jt || r instanceof at || r instanceof Bt || r instanceof Zt, "isOperation");
var Lp = u2((r) => r != null && r instanceof Yt, "isHGateElement");
var qp = u2((r) => r != null && r instanceof ir, "isXGateElement");
var jp = u2((r) => r != null && r instanceof or, "isYGateElement");
var Bp = u2((r) => r != null && r instanceof ar, "isZGateElement");
var bo = u2((r) => r != null && r instanceof Jt, "isPhaseGateElement");
var $p = u2((r) => r != null && r instanceof nr, "isTGateElement");
var Hp = u2((r) => r != null && r instanceof Kt, "isRnotGateElement");
var Ba = u2((r) => r != null && r instanceof Qt, "isRxGateElement");
var $a = u2((r) => r != null && r instanceof er, "isRyGateElement");
var Ha = u2((r) => r != null && r instanceof tr, "isRzGateElement");
var Fp = u2((r) => r != null && r instanceof rr, "isSwapGateElement");
var yl = u2((r) => r != null && r instanceof jt, "isControlGateElement");
var Up = u2((r) => r != null && r instanceof at, "isBlochDisplayElement");
var vT = u2((r) => r != null && r instanceof Bt, "isWriteGateElement");
var Wp = u2((r) => r != null && r instanceof Zt, "isMeasurementGateElement");
function Vp(r) {
  return /^-?\d+$/.test(r);
}
__name(Vp, "Vp");
u2(Vp, "isNumeric");
var xl = /* @__PURE__ */ __name(class extends HTMLElement {
  get isInspectorShown() {
    return this.popup.state.isVisible;
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initPopup(), this.addEventListener("mousedown", this.showPopup), document.addEventListener("click", this.maybeHidePopup.bind(this)));
  }
  update() {
    te(J`<slot></slot>`, this.shadowRoot);
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
    return ue.notNull(e), e;
  }
  initPopup() {
    this.popup = Pt(this, { allowHTML: true, animation: false, arrow: false, content: this.popupContent, interactive: true, offset: [0, 4], placement: "bottom", theme: "operation-inspector", trigger: "manual", hideOnClick: false });
  }
  showPopup() {
    this.popup.show(), this.inspector.disableAllPanes();
  }
  maybeHidePopup(e) {
    let t = e.target;
    !this.popup.popper.contains(t) && !this.popup.reference.contains(t) && !Ye(t) && this.popup.hide();
  }
  get popupContent() {
    let e = document.querySelector("#operation-inspector-template");
    ue.notNull(e);
    let t = e.content.cloneNode(true), i = document.createDocumentFragment();
    return te(J`${t}`, i), i;
  }
}, "xl");
u2(xl, "InspectorButtonElement");
ne(xl);
var yo = Xo(Ta(), 1);
var wl = u2((r) => r !== null && r instanceof Hr, "isAngleSliderElement");
var Hr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.angle = "";
    this.radian = 0;
    this.denominator = 0;
    this.disabled = false;
    this.debug = false;
    this.snapAngles = {};
    this.angleSliderMachine = rt({ id: "angle-slider", initial: "idle", states: { idle: { on: { START_MOVE: { target: "moving" }, SET_ANGLE: { target: "idle", actions: ["setDenominatorByAngle", "updateSnapAngles", "setRadianInAngle", "updateHandlePosition", "dispatchUpdateEvent"] }, SET_DENOMINATOR: { target: "idle", actions: ["validateDenominator", "updateSnapAngles", "setAngleInRadian"] } } }, moving: { on: { SET_ANGLE: { target: "moving", actions: ["dispatchChangeEvent"] }, END_MOVE: { target: "idle", actions: ["dispatchUpdateEvent"] } } } } }, { actions: { validateDenominator: () => {
      if (!Number.isInteger(this.denominator) || this.denominator <= 0)
        throw new kr("Bad denominator", this.denominator);
    }, setDenominatorByAngle: (e, t) => {
      t.type === "SET_ANGLE" && (this.denominator = to(this.angle));
    }, setAngleInRadian: (e, t) => {
      if (t.type !== "SET_DENOMINATOR")
        return;
      let [, i] = this.findSnapAngle(this.radian);
      this.angle = i;
    }, setRadianInAngle: (e, t) => {
      if (t.type !== "SET_ANGLE")
        return;
      let [i] = this.findSnapAngle(wc(this.angle));
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
  }
  attributeChangedCallback(e, t, i) {
    t !== i && i !== null && (e === "data-angle" && i !== "" && this.angleSliderService.send({ type: "SET_ANGLE" }), e === "data-denominator" && this.angleSliderService !== void 0 && this.angleSliderService.send({ type: "SET_DENOMINATOR" }));
  }
  connectedCallback() {
    this.angleSliderService = Je(this.angleSliderMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${nt(e.value)}`);
    }).start(), this.shadowRoot === null && this.attachShadow({ mode: "open" }), this.update(), this.updateSnapAngles(), this.initInteraction();
  }
  disconnectedCallback() {
    (0, yo.default)(this).unset();
  }
  update() {
    te(J`<style>
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
    (0, yo.default)(this).draggable({ origin: "self", modifiers: [yo.default.modifiers.restrict({ restriction: "self" })], listeners: { start: this.startMove.bind(this), move: this.move.bind(this), end: this.endMove.bind(this) } });
  }
  startMove() {
    this.angleSliderService.send({ type: "START_MOVE" });
  }
  move(e) {
    let t = yo.default.getElementRect(e.target).width, i = e.pageX / t;
    this.left = i;
    let l = this.proportionToRadian(i);
    this.setAttribute("data-radian", l.toString());
    let [, c2] = this.findSnapAngle(l);
    this.angle !== c2 && (this.angle = c2);
  }
  endMove() {
    this.angleSliderService.send({ type: "END_MOVE" });
  }
  updateSnapAngles() {
    if (this.denominator === 0)
      return;
    let e = -2 * this.denominator, t = 2 * this.denominator, i = new Array(t - e + 1).fill(null).map((l, c2) => c2 + e);
    this.snapAngles = {};
    for (let l of i)
      this.denominator === 1 ? l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI] = "\u03C0" : l === -1 ? this.snapAngles[-1 * Math.PI] = "-\u03C0" : this.snapAngles[l * Math.PI] = `${l}\u03C0` : l === 0 ? this.snapAngles[0] = "0" : l === 1 ? this.snapAngles[Math.PI / this.denominator] = `\u03C0/${this.denominator}` : l === -1 ? this.snapAngles[-1 * Math.PI / this.denominator] = `-\u03C0/${this.denominator}` : this.snapAngles[l * Math.PI / this.denominator] = `${l}\u03C0/${this.denominator}`;
  }
  findSnapAngle(e) {
    let t = null, i = null, l = null;
    for (let c2 in this.snapAngles) {
      let d2 = Math.abs(parseFloat(c2) - e);
      (t === null || d2 < t) && (t = d2, i = parseFloat(c2), l = this.snapAngles[c2]);
    }
    return ue.notNull(i), ue.notNull(l), [i, l];
  }
  proportionToRadian(e) {
    return (e - 0.5) * Math.PI * 4;
  }
  set left(e) {
    this.style.paddingLeft = `${e * 100}%`;
  }
}, "Hr");
u2(Hr, "AngleSliderElement"), k([j], Hr.prototype, "angle", 2), k([j], Hr.prototype, "radian", 2), k([j], Hr.prototype, "denominator", 2), k([j], Hr.prototype, "disabled", 2), k([j], Hr.prototype, "debug", 2);
ne(Hr);
var Tt = /* @__PURE__ */ __name(class extends HTMLElement {
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
    return Oc(this.angleInput.value);
  }
  get reduceAngleFraction() {
    return this.reduceAngleFractionCheckbox.checked;
  }
  get flag() {
    return this.flagInput.value;
  }
  set operation(e) {
    if (this.clear(), this.disableAllPanes(), $r(e) && (this.conditionalGatePaneDisabled = false, this.ifInput.value = e.if), yn(e)) {
      let t = to(e.angle);
      bo(e) ? (this.angleInputLabel.textContent = "\u{1D711}", this.denominatorVariableLabel.textContent = "\u{1D711}") : (Ba(e) || $a(e) || Ha(e)) && (this.angleInputLabel.textContent = "\u{1D6F3}", this.denominatorVariableLabel.textContent = "\u{1D6F3}"), this.anglePaneDisabled = false, this.angleInput.value = e.angle, this.backupCurrentPhi(), this.angleSlider.angle = e.angle, this.denominatorInput.value = t.toString(), this.denominatorLabel.textContent = t.toString(), this.backupCurrentDenominator(), this.reduceAngleFractionCheckbox.checked = e.reducedAngle !== "";
    }
    Pn(e) && (this.conditionalFlagPaneDisabled = false, this.flagInput.value = e.flag);
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
    te(J`<slot></slot>`, this.shadowRoot);
  }
  changeAngle(e) {
    let t = e.target;
    if (!wl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-change", { bubbles: true }));
  }
  updateAngle(e) {
    let t = e.target;
    if (!wl(t))
      throw new Error(`${t} isn't an angle-slider`);
    this.angleInput.value = t.angle, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
  backupCurrentPhi() {
    this.angleInput.setAttribute("data-original-value", this.angleInput.value);
  }
  restoreOriginalPhi() {
    let e = this.angleInput.getAttribute("data-original-value");
    ue.notNull(e), this.angleInput.value = e;
  }
  changeIf() {
    this.dispatchEvent(new Event("operation-inspector-if-change", { bubbles: true }));
  }
  updateAngleInput() {
    let e = this.angleInput.value;
    if (Tc(e)) {
      let t, i = to(e);
      this.denominatorInput.value = i.toString(), this.denominatorLabel.textContent = i.toString(), this.backupCurrentDenominator(), Ec(e, "-2\u03C0") ? (t = `-${i * 2}\u03C0/${i}`, this.angleInput.value = t) : Sc(e, "2\u03C0") ? (t = `${i * 2}\u03C0/${i}`, this.angleInput.value = t) : t = e, this.backupCurrentPhi(), this.angleSlider.angle = t, this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
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
    ue.notNull(e), this.denominatorInput.value = e, this.denominatorLabel.textContent = e;
  }
  changeDenominator() {
    let e = this.denominatorInput.value;
    Vp(e) && parseInt(e) > 1 ? (this.denominatorLabel.textContent = e, this.angleSlider.denominator = parseInt(e), this.angleInput.value = this.angleSlider.angle) : this.restoreOriginalDenominator();
  }
  changeReduceSetting() {
    this.dispatchEvent(new Event("operation-inspector-angle-update", { bubbles: true }));
  }
}, "Tt");
u2(Tt, "OperationInspectorElement"), k([je], Tt.prototype, "ifInput", 2), k([je], Tt.prototype, "angleInputLabel", 2), k([je], Tt.prototype, "angleInput", 2), k([je], Tt.prototype, "angleSlider", 2), k([je], Tt.prototype, "denominatorInput", 2), k([je], Tt.prototype, "denominatorVariableLabel", 2), k([je], Tt.prototype, "denominatorLabel", 2), k([je], Tt.prototype, "reduceAngleFractionCheckbox", 2), k([je], Tt.prototype, "flagInput", 2), k([j], Tt.prototype, "conditionalGatePaneDisabled", 2), k([j], Tt.prototype, "anglePaneDisabled", 2), k([j], Tt.prototype, "conditionalFlagPaneDisabled", 2);
ne(Tt);
var sr = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.qubitCount = 1;
    this.size = "";
    this.magnitudes = "1.0";
    this.phases = "";
    this.multiQubits = false;
    this.showKets = false;
  }
  setAmplitudes(e) {
    let t = this.qubitCircles;
    for (let [i, l] of Object.entries(e)) {
      let c2 = t[parseInt(i)];
      ue.notNull(c2);
      let d2 = Nr.from(l);
      c2.setAttribute("data-amplitude-real", d2.real.toString()), c2.setAttribute("data-amplitude-imag", d2.imag.toString());
      let v = d2.abs();
      if (this.setRoundedMagnitude(c2, v), v === 0)
        continue;
      let b = d2.phase() / Math.PI * 180;
      this.setRoundedPhase(c2, b);
    }
  }
  connectedCallback() {
    this.shadowRoot === null && (this.attachShadow({ mode: "open" }), this.update(), this.initQubitCirclePopup(this.qubitCircles), this.hasAttribute("data-multi-qubits") && (this.startQubitCircleVisibilityObserver(), this.dispatchLoadEvent()));
  }
  dispatchLoadEvent() {
    this.dispatchEvent(new Event("circle-notation.load", { bubbles: true }));
  }
  attributeChangedCallback(e, t, i) {
    this.shadowRoot !== null && t !== i && e === "data-qubit-count" && this.dispatchVisibilityChangedEvent();
  }
  startQubitCircleVisibilityObserver() {
    let e = { root: this, threshold: [0, 0.2] }, t = u2((l) => {
      for (let c2 of l) {
        let d2 = c2.target;
        c2.intersectionRatio >= 0.2 ? (d2.setAttribute("data-targets", "circle-notation.qubitCircleGroups circle-notation.visibleQubitCircleGroups"), this.dispatchVisibilityChangedEvent()) : c2.intersectionRatio === 0 && d2.setAttribute("data-targets", "circle-notation.qubitCircleGroups");
      }
    }, "callback"), i = new IntersectionObserver(t, e);
    for (let l of this.qubitCircleGroups)
      i.observe(l);
  }
  dispatchVisibilityChangedEvent() {
    this.dispatchEvent(new CustomEvent("circle-notation-visibility-change", { detail: this.visibleQubitCircleKets, bubbles: true }));
  }
  get visibleQubitCircleKets() {
    let e = 2 ** this.qubitCount;
    return this.visibleQubitCircles.map((t) => parseInt(t.getAttribute("data-ket"))).filter((t) => t < e);
  }
  get visibleQubitCircles() {
    let e = this.visibleQubitCircleGroups.map((t) => Array.from(t.querySelectorAll(".qubit-circle")));
    return [].concat(...e);
  }
  update() {
    te(J`<style>
          @media (min-width: 768px) {
            :host([data-qubit-count='8']),
            :host([data-qubit-count='9']),
            :host([data-qubit-count='10']) {
              height: 10rem !important;
            }
          }

          .qubit-circle-group--size4 {
            display: flex;
            flex-direction: row;
          }

          .qubit-circle-group--size8 {
            display: flex;
            flex-direction: row;
          }

          :host([data-qubit-count='3']) .qubit-circle-group--size8 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='3']) .qubit-circle-group--size8 {
              flex-direction: row;
            }
          }

          .qubit-circle-group--size16 {
            display: flex;
            flex-direction: row;
          }

          @media (min-width: 768px) {
            .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size16 .qubit-circle-group--size8:last-child {
            margin-left: 0;
            margin-top: 0;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 {
            flex-direction: column;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 {
              flex-direction: row;
            }
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
            margin-left: 0;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle-group--size16 .qubit-circle-group--size8:nth-child(even) {
              margin-left: 0;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: column;
            }
            :host([data-qubit-count='7']) .qubit-circle-group--size32,
            :host([data-qubit-count='8']) .qubit-circle-group--size32,
            :host([data-qubit-count='9']) .qubit-circle-group--size32,
            :host([data-qubit-count='10']) .qubit-circle-group--size32 {
              display: flex;
              flex-direction: row;
            }
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle-group--size64,
            :host([data-qubit-count='7']) .qubit-circle-group--size64,
            :host([data-qubit-count='8']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='9']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }

            :host([data-qubit-count='10']) .qubit-circle-group--size64 {
              display: flex;
              flex-direction: column;
            }
          }

          :host([data-qubit-count='1']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='1']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='1']) .qubit-circle:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='2']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='2']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size8:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle-group--size4:nth-of-type(2),
          :host([data-qubit-count='2']) .qubit-circle:nth-of-type(n + 5) {
            display: none;
          }

          :host([data-qubit-count='3']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='3']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size16:nth-of-type(2),
          :host([data-qubit-count='3']) .qubit-circle-group--size8:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='4']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='4']) .qubit-circle-group--size32:nth-of-type(2),
          :host([data-qubit-count='4']) .qubit-circle-group--size16:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='5']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size64:nth-of-type(n + 2),
          :host([data-qubit-count='5']) .qubit-circle-group--size32:nth-of-type(2) {
            display: none;
          }

          :host([data-qubit-count='6']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='6']) .qubit-circle-group--size64:nth-of-type(n + 2) {
            display: none;
          }

          :host([data-qubit-count='7']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size128:nth-of-type(n + 2),
          :host([data-qubit-count='7']) .qubit-circle-group--size64:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='8']) .qubit-circle-group--size256:nth-of-type(n + 2),
          :host([data-qubit-count='8']) .qubit-circle-group--size128:nth-of-type(n + 3) {
            display: none;
          }

          :host([data-qubit-count='9']) .qubit-circle-group--size256:nth-of-type(n + 3) {
            display: none;
          }

          #body {
            display: flex;
            flex-direction: row;
          }

          :host([data-multi-qubits]) #body {
            display: inline-block;
            margin-top: auto;
            margin-bottom: auto;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          @media (min-width: 768px) {
            :host([data-multi-qubits]) #body {
              display: inline-block;
              padding-left: 1rem;
              padding-right: 1rem;
              padding-top: 1.25rem;
              padding-bottom: 1.25rem;
            }
          }

          .qubit-circle {
            position: relative;
            height: 32px;
            width: 32px;
          }

          :host([data-size='xs']) .qubit-circle {
            height: 17px !important;
            width: 17px !important;
          }

          :host([data-size='sm']) .qubit-circle {
            height: 25px !important;
            width: 25px !important;
          }

          :host([data-size='base']) .qubit-circle {
            height: 32px !important;
            width: 32px !important;
          }

          :host([data-size='lg']) .qubit-circle {
            height: 48px !important;
            width: 48px !important;
          }

          :host([data-size='xl']) .qubit-circle {
            height: 64px !important;
            width: 64px !important;
          }

          :host([data-qubit-count='1']:not([data-multi-qubits])) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          :host([data-qubit-count='1']) .qubit-circle,
          :host([data-qubit-count='2']) .qubit-circle {
            height: 64px;
            width: 64px;
          }

          :host([data-qubit-count='3']) .qubit-circle {
            height: 48px;
            width: 48px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='3']) .qubit-circle {
              height: 64px;
              width: 64px;
            }
          }

          :host([data-qubit-count='4']) .qubit-circle {
            height: 32px;
            width: 32px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='4']) .qubit-circle {
              height: 48px;
              width: 48px;
            }
          }

          :host([data-qubit-count='5']) .qubit-circle {
            height: 23px;
            width: 23px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle {
              height: 32px;
              width: 32px;
            }
          }

          :host([data-qubit-count='6']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='6']) .qubit-circle {
              height: 25px;
              width: 25px;
            }
          }

          :host([data-qubit-count='7']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='7']) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-qubit-count='8']) .qubit-circle,
          :host([data-qubit-count='9']) .qubit-circle,
          :host([data-qubit-count='10']) .qubit-circle {
            height: 15px;
            width: 15px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='8']) .qubit-circle,
            :host([data-qubit-count='9']) .qubit-circle,
            :host([data-qubit-count='10']) .qubit-circle {
              height: 17px;
              width: 17px;
            }
          }

          :host([data-show-kets]) .qubit-circle::before {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            white-space: nowrap;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
              monospace;
            font-size: 0.75rem;
            color: var(--colors-wolf, #777777);
            margin-bottom: -18px;
            content: '|' attr(data-ket) '⟩';
          }

          .qubit-circle__magnitude {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #e5e5e5;
            border-style: solid;
          }

          .qubit-circle:hover > .qubit-circle__magnitude {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size='xs']) .qubit-circle__magnitude,
          :host([data-size='sm']) .qubit-circle__magnitude {
            border-width: 1px;
          }
          :host([data-size='base']) .qubit-circle__magnitude,
          :host([data-size='lg']) .qubit-circle__magnitude,
          :host([data-size='xl']) .qubit-circle__magnitude {
            border-width: 2px;
          }

          :host([data-qubit-count='5']) .qubit-circle__magnitude,
          :host([data-qubit-count='6']) .qubit-circle__magnitude,
          :host([data-qubit-count='7']) .qubit-circle__magnitude,
          :host([data-qubit-count='8']) .qubit-circle__magnitude,
          :host([data-qubit-count='9']) .qubit-circle__magnitude,
          :host([data-qubit-count='10']) .qubit-circle__magnitude {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__magnitude {
              border-width: 2px;
            }
          }

          .qubit-circle__magnitude::after {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: 9999px;
            content: '';
            background-color: #1cb0f6;
            transform: scaleX(0) scaleY(0);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__magnitude::after {
            background-color: var(--colors-fox, #ff9600);
          }

          .qubit-circle[data-rounded-magnitude='0.1'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.1) scaleY(0.1);
          }

          .qubit-circle[data-rounded-magnitude='0.2'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.2) scaleY(0.2);
          }

          .qubit-circle[data-rounded-magnitude='0.3'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.3) scaleY(0.3);
          }

          .qubit-circle[data-rounded-magnitude='0.4'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.4) scaleY(0.4);
          }

          .qubit-circle[data-rounded-magnitude='0.5'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.5) scaleY(0.5);
          }

          .qubit-circle[data-rounded-magnitude='0.6'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.6) scaleY(0.6);
          }

          .qubit-circle[data-rounded-magnitude='0.7'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.7) scaleY(0.7);
          }

          .qubit-circle[data-rounded-magnitude='0.8'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.8) scaleY(0.8);
          }

          .qubit-circle[data-rounded-magnitude='0.9'] > .qubit-circle__magnitude::after {
            transform: scaleX(0.9) scaleY(0.9);
          }

          .qubit-circle[data-rounded-magnitude='1'] > .qubit-circle__magnitude::after {
            transform: scaleX(1) scaleY(1);
          }

          .qubit-circle__phase {
            border-width: 2px;
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            border-radius: 9999px;
            border-color: #777777;
            border-style: solid;
            transform: rotate(0deg);
            transform-origin: center;
          }

          .qubit-circle:hover > .qubit-circle__phase {
            border-color: var(--colors-cardinal, #ff4b4b);
          }

          :host([data-size='xs']) .qubit-circle__phase,
          :host([data-size='sm']) .qubit-circle__phase {
            border-width: 1px;
          }
          :host([data-size='base']) .qubit-circle__phase,
          :host([data-size='lg']) .qubit-circle__phase,
          :host([data-size='xl']) .qubit-circle__phase {
            border-width: 2px;
          }

          :host([data-qubit-count='5']) .qubit-circle__phase,
          :host([data-qubit-count='6']) .qubit-circle__phase,
          :host([data-qubit-count='7']) .qubit-circle__phase,
          :host([data-qubit-count='8']) .qubit-circle__phase,
          :host([data-qubit-count='9']) .qubit-circle__phase,
          :host([data-qubit-count='10']) .qubit-circle__phase {
            border-width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__phase {
              border-width: 2px;
            }
          }

          .qubit-circle:not([data-rounded-magnitude]) > .qubit-circle__phase,
          .qubit-circle[data-rounded-magnitude='0'] > .qubit-circle__phase {
            transform: scaleX(0) scaleY(0) !important;
          }

          .qubit-circle[data-rounded-phase='10'] > .qubit-circle__phase {
            transform: rotate(-10deg);
          }

          .qubit-circle[data-rounded-phase='20'] > .qubit-circle__phase {
            transform: rotate(-20deg);
          }

          .qubit-circle[data-rounded-phase='30'] > .qubit-circle__phase {
            transform: rotate(-30deg);
          }

          .qubit-circle[data-rounded-phase='40'] > .qubit-circle__phase {
            transform: rotate(-40deg);
          }

          .qubit-circle[data-rounded-phase='50'] > .qubit-circle__phase {
            transform: rotate(-50deg);
          }

          .qubit-circle[data-rounded-phase='60'] > .qubit-circle__phase {
            transform: rotate(-60deg);
          }

          .qubit-circle[data-rounded-phase='70'] > .qubit-circle__phase {
            transform: rotate(-70deg);
          }

          .qubit-circle[data-rounded-phase='80'] > .qubit-circle__phase {
            transform: rotate(-80deg);
          }

          .qubit-circle[data-rounded-phase='90'] > .qubit-circle__phase {
            transform: rotate(-90deg);
          }

          .qubit-circle[data-rounded-phase='100'] > .qubit-circle__phase {
            transform: rotate(-100deg);
          }

          .qubit-circle[data-rounded-phase='110'] > .qubit-circle__phase {
            transform: rotate(-110deg);
          }

          .qubit-circle[data-rounded-phase='120'] > .qubit-circle__phase {
            transform: rotate(-120deg);
          }

          .qubit-circle[data-rounded-phase='130'] > .qubit-circle__phase {
            transform: rotate(-130deg);
          }

          .qubit-circle[data-rounded-phase='140'] > .qubit-circle__phase {
            transform: rotate(-140deg);
          }

          .qubit-circle[data-rounded-phase='150'] > .qubit-circle__phase {
            transform: rotate(-150deg);
          }

          .qubit-circle[data-rounded-phase='160'] > .qubit-circle__phase {
            transform: rotate(-160deg);
          }

          .qubit-circle[data-rounded-phase='170'] > .qubit-circle__phase {
            transform: rotate(-170deg);
          }

          .qubit-circle[data-rounded-phase='180'] > .qubit-circle__phase {
            transform: rotate(-180deg);
          }

          .qubit-circle[data-rounded-phase='190'] > .qubit-circle__phase {
            transform: rotate(-190deg);
          }

          .qubit-circle[data-rounded-phase='200'] > .qubit-circle__phase {
            transform: rotate(-200deg);
          }

          .qubit-circle[data-rounded-phase='210'] > .qubit-circle__phase {
            transform: rotate(-210deg);
          }

          .qubit-circle[data-rounded-phase='220'] > .qubit-circle__phase {
            transform: rotate(-220deg);
          }

          .qubit-circle[data-rounded-phase='230'] > .qubit-circle__phase {
            transform: rotate(-230deg);
          }

          .qubit-circle[data-rounded-phase='240'] > .qubit-circle__phase {
            transform: rotate(-240deg);
          }

          .qubit-circle[data-rounded-phase='250'] > .qubit-circle__phase {
            transform: rotate(-250deg);
          }

          .qubit-circle[data-rounded-phase='260'] > .qubit-circle__phase {
            transform: rotate(-260deg);
          }

          .qubit-circle[data-rounded-phase='270'] > .qubit-circle__phase {
            transform: rotate(-270deg);
          }

          .qubit-circle[data-rounded-phase='280'] > .qubit-circle__phase {
            transform: rotate(-280deg);
          }

          .qubit-circle[data-rounded-phase='290'] > .qubit-circle__phase {
            transform: rotate(-290deg);
          }

          .qubit-circle[data-rounded-phase='300'] > .qubit-circle__phase {
            transform: rotate(-300deg);
          }

          .qubit-circle[data-rounded-phase='310'] > .qubit-circle__phase {
            transform: rotate(-310deg);
          }

          .qubit-circle[data-rounded-phase='320'] > .qubit-circle__phase {
            transform: rotate(-320deg);
          }

          .qubit-circle[data-rounded-phase='330'] > .qubit-circle__phase {
            transform: rotate(-330deg);
          }

          .qubit-circle[data-rounded-phase='340'] > .qubit-circle__phase {
            transform: rotate(-340deg);
          }

          .qubit-circle[data-rounded-phase='350'] > .qubit-circle__phase {
            transform: rotate(-350deg);
          }

          .qubit-circle[data-rounded-phase='360'] > .qubit-circle__phase {
            transform: rotate(-360deg);
          }

          .qubit-circle__phase::after {
            width: 2px;
            position: absolute;
            top: 0px;
            right: 0px;
            left: 0px;
            background-color: #4b4b4b;
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
            content: '';
          }

          :host([data-qubit-count='5']) .qubit-circle__phase::after,
          :host([data-qubit-count='6']) .qubit-circle__phase::after,
          :host([data-qubit-count='7']) .qubit-circle__phase::after,
          :host([data-qubit-count='8']) .qubit-circle__phase::after,
          :host([data-qubit-count='9']) .qubit-circle__phase::after,
          :host([data-qubit-count='10']) .qubit-circle__phase::after {
            width: 1px;
          }

          @media (min-width: 768px) {
            :host([data-qubit-count='5']) .qubit-circle__phase::after {
              width: 2px;
            }
          }

          :host([data-size='xs']) .qubit-circle__phase::after,
          :host([data-size='sm']) .qubit-circle__phase::after {
            width: 1px;
          }
          :host([data-size='base']) .qubit-circle__phase::after,
          :host([data-size='lg']) .qubit-circle__phase::after,
          :host([data-size='xl']) .qubit-circle__phase::after {
            width: 2px;
          }
        </style>

        <div id="body">${this.qubitCirclesHtml}</div>`, this.shadowRoot);
    for (let [e, t] of (this.getAttribute("data-magnitudes") || "1.0").split(",").entries())
      this.setRoundedMagnitude(this.qubitCircles[e], parseFloat(t));
    for (let [e, t] of (this.getAttribute("data-phases") || "").split(",").entries()) {
      let i = this.qubitCircles[e], l = t ? parseFloat(t) : 0;
      this.setRoundedPhase(i, l);
      let c2 = i.querySelector(".qubit-circle__phase");
      c2.style.transform = `rotate(${-l}deg)`;
    }
  }
  setRoundedMagnitude(e, t) {
    if (e === null || e === void 0)
      return;
    let i = Math.round(t * 100);
    i = i < 10 ? i === 0 ? 0 : 10 : Math.round(i / 10) * 10, i = i / 100, e.setAttribute("data-magnitude", t.toString()), e.setAttribute("data-rounded-magnitude", i.toString());
  }
  setRoundedPhase(e, t) {
    if (e === null || e === void 0)
      return;
    let i = Math.round(t / 10) * 10;
    i < 0 && (i = 360 + i), e.setAttribute("data-phase", t.toString()), e.setAttribute("data-rounded-phase", i.toString());
  }
  get qubitCirclesHtml() {
    return this.hasAttribute("data-multi-qubits") ? this.stateVectorHtml(10) : J`${this.qubitCircleHtml(0)} ${this.qubitCircleHtml(1)}`;
  }
  qubitCircleHtml(e) {
    return J`<div
      class="qubit-circle"
      data-ket="${e}"
      data-action="mouseenter:circle-notation#setPopupContent"
      data-targets="circle-notation.qubitCircles"
    >
      <div class="qubit-circle__magnitude"></div>
      <div class="qubit-circle__phase"></div>
    </div>`;
  }
  stateVectorHtml(e) {
    let t = J``, i = this.qubitCircleGroup([...Array(2 ** e).keys()], (l) => this.qubitCircleGroup(l, (c2) => this.qubitCircleGroup(c2, (d2) => this.qubitCircleGroup(d2, (v) => this.qubitCircleGroup(v, (b) => this.qubitCircleGroup(b, (y) => this.qubitCircleGroup(y)))))), 256);
    for (let l of i)
      t = J`${t} ${l}`;
    return t;
  }
  qubitCircleGroup(e, t, i = e.length / 2) {
    return u2((c2, d2 = 1) => c2.reduce((v, b, y) => y % d2 ? v : [...v, c2.slice(y, y + d2)], []), "arrayChunk")(e, i).map((c2) => {
      let d2 = J``;
      if (t)
        for (let v of t(c2))
          d2 = J`${d2} ${v}`;
      else
        for (let v of c2)
          d2 = J`${d2} ${this.qubitCircleHtml(v)}`;
      return i === 64 ? J`<div class="qubit-circle-group--size${i}" data-targets="circle-notation.qubitCircleGroups">
          ${d2}
        </div>` : J`<div class="qubit-circle-group--size${i}">${d2}</div>`;
    });
  }
  initQubitCirclePopup(e) {
    let t = Pt(e);
    fp(t, { allowHTML: true, animation: false, arrow: jr + jr, delay: 0, theme: "qni" });
  }
  setPopupContent(e) {
    if (this.popupEl === null)
      return;
    let t = e.target, i = this.ketDecimal(t), l = t.getAttribute("data-amplitude-real"), c2 = t.getAttribute("data-amplitude-imag"), d2 = t.getAttribute("data-magnitude"), v = t.getAttribute("data-phase"), b;
    l === null || c2 === null ? b = Nr.ZERO : b = new Nr(parseFloat(l), parseFloat(c2));
    let y;
    d2 && parseFloat(d2) === 0 ? y = 0 : y = v ? parseFloat(v) : 0, this.setQubitCirclePopupContent(this.popupEl.content, t, i, b, d2 ? parseFloat(d2) : 0, y, this.qubitCount);
  }
  setQubitCirclePopupContent(e, t, i, l, c2, d2, v) {
    t._tippy.setContent(this.popupContent(e, i, l, c2, d2, v));
  }
  popupContent(e, t, i, l, c2, d2) {
    let v = e.querySelector(".circle-notation-popup__ket-binary"), b = e.querySelector(".circle-notation-popup__ket-decimal"), y = e.querySelector(".circle-notation-popup__amplitude-real"), w2 = e.querySelector(".circle-notation-popup__amplitude-imag"), A2 = e.querySelector(".circle-notation-popup__probability"), O2 = e.querySelector(".circle-notation-popup__phase");
    v && (v.textContent = t.toString(2).padStart(d2, "0")), b && (b.textContent = t.toString()), y && (y.textContent = this.forceSigned(i.real, 5)), w2 && (w2.textContent = `${this.forceSigned(i.imag, 5)}i`), A2 && (A2.textContent = `${this.forceSigned(l * l * 100, 4)}%`), O2 && (O2.textContent = `${this.forceSigned(c2, 2)}\xB0`);
    let M2 = document.createElement("div");
    return M2.appendChild(e.cloneNode(true)), M2.innerHTML;
  }
  get popupEl() {
    return document.getElementById("circle-notation-popup");
  }
  forceSigned(e, t) {
    return (e >= 0 ? "+" : "") + e.toFixed(t);
  }
  ketDecimal(e) {
    let t = e.getAttribute("data-ket");
    return parseInt(t);
  }
}, "sr");
u2(sr, "CircleNotationElement"), k([j], sr.prototype, "qubitCount", 2), k([j], sr.prototype, "size", 2), k([j], sr.prototype, "magnitudes", 2), k([j], sr.prototype, "phases", 2), k([j], sr.prototype, "multiQubits", 2), k([j], sr.prototype, "showKets", 2), k([fr], sr.prototype, "qubitCircles", 2), k([fr], sr.prototype, "qubitCircleGroups", 2), k([fr], sr.prototype, "visibleQubitCircleGroups", 2);
ne(sr);
var Xp = `<svg part="reload-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
</svg>
`;
var Yp = `<svg part="tail-spin-icon" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
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
var Bn = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.running = false;
    this.debug = false;
    this.runCircuitButtonMachine = rt({ id: "run-circuit-button", initial: "unknown", states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "running", cond: "isRunning" }] }, idle: { on: { CLICK: { target: "running", actions: ["ripple", "setRunningTrue", "dispatchClickEvent"] } } }, running: { on: { FINISH: { target: "idle", actions: ["setRunningFalse"] } } } } }, { actions: { setRunningFalse: () => {
      this.running = false;
    }, setRunningTrue: () => {
      this.running = true;
    }, ripple: (e, t) => {
      if (t.type !== "CLICK")
        return;
      this.ripple && this.ripple.remove();
      let i = document.createElement("span");
      i.id = "ripple";
      let l = Math.max(this.clientWidth, this.clientHeight), c2 = l / 2, d2 = this.getBoundingClientRect(), v = d2.left + window.pageXOffset, b = d2.top + window.pageYOffset;
      i.setAttribute("part", "ripple"), i.setAttribute("data-target", "run-circuit-button.ripple"), i.style.width = i.style.height = `${l}px`, i.style.left = `${t.clientX - (v + c2)}px`, i.style.top = `${t.clientY - (b + c2)}px`, this.body.appendChild(i);
    }, dispatchClickEvent: () => {
      this.dispatchEvent(new Event("run-circuit-button-click", { bubbles: true }));
    } }, guards: { isIdle: () => !this.running, isRunning: () => this.running } });
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.update(), this.runCircuitButtonService = Je(this.runCircuitButtonMachine).onTransition((e) => {
      this.debug && console.log(`run-circuit-button: ${nt(e.value)}`);
    }).start(), this.addEventListener("click", this.handleClickEvent);
  }
  attributeChangedCallback(e, t, i) {
    t !== i && e === "data-running" && i !== null && this.runCircuitButtonService.send({ type: "FINISH" });
  }
  update() {
    te(J`<style>
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
    return J([Xp]);
  }
  get tailSpinIcon() {
    return J([Yp]);
  }
}, "Bn");
u2(Bn, "RunCircuitButtonElement"), k([j], Bn.prototype, "running", 2), k([j], Bn.prototype, "debug", 2), k([je], Bn.prototype, "body", 2), k([je], Bn.prototype, "ripple", 2);
ne(Bn);
var an = /* @__PURE__ */ __name(class extends HTMLElement {
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
    te(J`<style>
          :host {
            position: relative;
          }
          :host::before,
          :host::after {
            position: absolute;
            display: flex;
            justify-content: center;
            color: var(--colors-magnitude, #1cb0f6);
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
            border-color: var(--colors-magnitude, #1cb0f6);
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
}, "an");
u2(an, "CircuitBlockElement"), k([j], an.prototype, "comment", 2), k([j], an.prototype, "finalized", 2), an = k([ne], an);
var Jp = Xo(Ta(), 1);
var Zp = `<svg part="wires" width="48" height="48" viewBox="0 0 48 48" preserveAspectRatio="none">
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
var El = u2((r) => r != null && r instanceof yt, "isCircuitDropzoneElement");
var yt = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.operationName = "";
    this.inputWireQuantum = false;
    this.outputWireQuantum = false;
    this.connectTop = false;
    this.connectBottom = false;
    this.shadow = false;
    this.debug = false;
    this.circuitDropzoneMachine = rt({ id: "circuit-dropzone", initial: "empty", states: { empty: { on: { INIT_OPERATION: { target: "occupied", actions: ["initOperation"] }, SNAP_OPERATION: { target: "snapped", actions: ["snapOperation"] }, PUT_OPERATION: { target: "occupied", actions: ["putOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } }, snapped: { on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DROP_OPERATION: { target: "occupied", actions: ["dropOperation"] } } }, occupied: { entry: "dispatchOccupiedEvent", on: { UNSNAP_OPERATION: { target: "empty", actions: ["unsnapOperation"] }, DELETE_OPERATION: { target: "empty", actions: ["deleteOperation", "dispatchDeleteOperationEvent"] } } } } }, { actions: { snapOperation: () => {
      ue.notNull(this.operation), this.operationName = this.operation.tagName.toLocaleLowerCase(), this.dispatchEvent(new Event("circuit-dropzone-snap", { bubbles: true }));
    }, unsnapOperation: () => {
      this.operationName = "", this.dispatchEvent(new Event("circuit-dropzone-unsnap", { bubbles: true }));
    }, dropOperation: () => {
      this.dispatchEvent(new Event("circuit-dropzone-drop", { bubbles: true }));
    }, putOperation: (e, t) => {
      t.type === "PUT_OPERATION" && (this.append(t.operation), this.operationName = t.operation.tagName.toLocaleLowerCase(), t.operation.snapped = true);
    }, initOperation: (e, t) => {
      t.type === "INIT_OPERATION" && (t.operation.snapped = true);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && (this.operationName = "", this.removeChild(t.operation));
    }, dispatchOccupiedEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-occupy", { bubbles: true }));
    }, dispatchDeleteOperationEvent: () => {
      this.dispatchEvent(new Event("circuit-dropzone-operation-delete", { bubbles: true }));
    } } });
  }
  get noConnections() {
    return !this.connectTop && !this.connectBottom;
  }
  get occupied() {
    return this.operationName !== "";
  }
  get operation() {
    let t = Array.from(this.children).filter((i) => Ye(i));
    switch (t.length) {
      case 0:
        return null;
      case 1:
        return t[0];
      default:
        throw new Error("circuit-dropzone cannot hold multiple operations.");
    }
  }
  get snapTarget() {
    let e = this.getBoundingClientRect();
    return { x: window.pageXOffset + e.left + this.clientWidth / 2, y: window.pageYOffset + e.top + this.clientHeight / 2 };
  }
  toJson() {
    let e = this.operation;
    return e === null ? "1" : e.toJson();
  }
  connectedCallback() {
    this.circuitDropzoneService = Je(this.circuitDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`circuit-dropzone: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.operation !== null && this.initOperation(this.operation), this.initDropzone(), this.addEventListener("operation-snap", this.snapOperation), this.addEventListener("operation-unsnap", this.unsnapOperation), this.addEventListener("operation-end-dragging", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    te(J`<style>
          #body {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
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

        <div id="body"><slot></slot>${this.wireSvg}</div>`, this.shadowRoot);
  }
  put(e) {
    this.circuitDropzoneService.send({ type: "PUT_OPERATION", operation: e });
  }
  initOperation(e) {
    this.circuitDropzoneService.send({ type: "INIT_OPERATION", operation: e });
  }
  initDropzone() {
    this.operation !== null && (this.operationName = this.operation.tagName.toLocaleLowerCase()), (0, Jp.default)(this).dropzone({ accept: "[data-draggable]", overlap: "center" });
  }
  snapOperation() {
    this.circuitDropzoneService.send({ type: "SNAP_OPERATION" });
  }
  unsnapOperation() {
    this.circuitDropzoneService.send({ type: "UNSNAP_OPERATION" });
  }
  dropOperation() {
    this.circuitDropzoneService.send({ type: "DROP_OPERATION" });
  }
  deleteOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} isn't an Operation.`);
    this.circuitDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
  get wireSvg() {
    return J([Zp]);
  }
}, "yt");
u2(yt, "CircuitDropzoneElement"), k([j], yt.prototype, "operationName", 2), k([j], yt.prototype, "inputWireQuantum", 2), k([j], yt.prototype, "outputWireQuantum", 2), k([j], yt.prototype, "connectTop", 2), k([j], yt.prototype, "connectBottom", 2), k([j], yt.prototype, "shadow", 2), k([j], yt.prototype, "debug", 2);
ne(yt);
var sn = u2((r) => r != null && r instanceof It, "isCircuitStepElement");
var Ne = u2((r, e) => Array.from(r.reduce((t, i, l, c2) => {
  let d2 = e(i, l, c2), v = t.get(d2);
  return v ? v.push(i) : t.set(d2, [i]), t;
}, /* @__PURE__ */ new Map())), "groupBy");
var It = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.breakpoint = false;
    this.shadow = false;
    this.keep = false;
    this.debug = false;
    this.circuitStepMachine = rt({ id: "circuit-step", initial: "unknown", states: { unknown: { always: [{ target: "shadow", cond: "isShadow" }, { target: "visible", cond: "isVisible" }] }, shadow: { type: "compound", initial: "unknown", on: { SNAP_DROPZONE: { target: "shadow", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "shadow", actions: ["dispatchUnsnapEvent"] }, UNSHADOW: { target: "visible", actions: ["unshadow"] } }, states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, visible: { type: "parallel", on: { SNAP_DROPZONE: { target: "visible", actions: ["setOperationBit", "dispatchSnapEvent"] }, UNSNAP_DROPZONE: { target: "visible", actions: ["dispatchUnsnapEvent"] }, OCCUPY_DROPZONE: { target: "visible", actions: ["setOperationBit"] }, DELETE_OPERATION: { target: "visible", actions: ["dispatchDeleteOperationEvent"] } }, states: { activatable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "inactive", cond: "isInactive" }, { target: "active", cond: "isActive" }] }, inactive: { on: { ACTIVATE: { target: "active" } } }, active: { on: { DEACTIVATE: { target: "inactive" } } } } }, breakpointable: { type: "compound", initial: "unknown", states: { unknown: { always: [{ target: "breakpointOn", cond: "isBreakpointOn" }, { target: "breakpointOff", cond: "isBreakpointOff" }] }, breakpointOn: { on: { UNSET_BREAKPOINT: { target: "breakpointOff" } } }, breakpointOff: { on: { SET_BREAKPOINT: { target: "breakpointOn" } } } } } } } } }, { actions: { setOperationBit: (e, t) => {
      if (t.type !== "SNAP_DROPZONE" && t.type !== "OCCUPY_DROPZONE")
        return;
      let i = t.dropzone, l = this.bit(i);
      ue.notNull(i.operation), i.operation.bit = l;
    }, dispatchSnapEvent: (e, t) => {
      t.type === "SNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-snap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchUnsnapEvent: (e, t) => {
      t.type === "UNSNAP_DROPZONE" && this.dispatchEvent(new CustomEvent("circuit-step-unsnap", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, dispatchDeleteOperationEvent: (e, t) => {
      t.type === "DELETE_OPERATION" && this.dispatchEvent(new CustomEvent("circuit-step-delete-operation", { detail: { dropzone: t.dropzone }, bubbles: true }));
    }, unshadow: () => {
      this.shadow = false;
    } }, guards: { isShadow: () => this.shadow, isVisible: () => !this.shadow, isActive: () => this.active, isInactive: () => !this.active, isBreakpointOn: () => this.breakpoint, isBreakpointOff: () => !this.breakpoint } });
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
    this.circuitStepService = Je(this.circuitStepMachine).onTransition((e) => {
      this.debug && console.log(`circuit-step: ${nt(e.value)}`);
    }).start(), this.addEventListener("mouseenter", this.dispatchMouseenterEvent), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("click", this.maybeDispatchClickEvent), this.addEventListener("circuit-dropzone-snap", this.snapDropzone), this.addEventListener("circuit-dropzone-unsnap", this.unsnapDropzone), this.addEventListener("circuit-dropzone-operation-delete", this.deleteOperation), this.addEventListener("circuit-dropzone-drop", this.unshadow), this.addEventListener("circuit-dropzone-occupy", this.occupyDropzone), this.attachShadow({ mode: "open" }), this.updateOperationAttributes(), this.update();
  }
  attributeChangedCallback(e, t, i) {
    if (t !== i && (e === "data-active" && (i !== null ? this.circuitStepService.send({ type: "ACTIVATE" }) : this.circuitStepService.send({ type: "DEACTIVATE" })), e === "data-breakpoint" && (i !== null ? this.circuitStepService.send({ type: "SET_BREAKPOINT" }) : this.circuitStepService.send({ type: "UNSET_BREAKPOINT" })), e === "data-shadow"))
      for (let l of this.dropzones)
        i !== null ? l.shadow = true : l.shadow = false;
  }
  update() {
    te(J`<slot></slot>`, this.shadowRoot), this.dispatchUpdateEvent();
  }
  updateOperationAttributes(e) {
    for (let l of this.dropzones)
      l.connectTop = false, l.connectBottom = false;
    let t = this.controlGateDropzones, i = this.controllableDropzones(e);
    for (let l of i)
      xn(l.operation) && (l.operation.controls = []);
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
      for (let c2 of i)
        c2.operation.enable(), c2.connectTop = i.some((v) => this.bit(v) < this.bit(c2)), c2.connectBottom = i.some((v) => this.bit(v) > this.bit(c2));
      let l = i.map((c2) => this.bit(c2));
      for (let c2 of this.freeDropzones) {
        let d2 = Math.min(...l), v = Math.max(...l);
        d2 < this.bit(c2) && this.bit(c2) < v && (c2.connectTop = true, c2.connectBottom = true);
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
      let c2 = t.filter((d2) => {
        if (!bo(d2.operation))
          throw new Error(`${d2.operation} isn't a phase-gate element.`);
        return l.angle === d2.operation.angle;
      }).map((d2) => this.bit(d2));
      e !== void 0 && e.maxPhasePhaseTargetGates > 1 && (c2 = c2.slice(0, e.maxPhasePhaseTargetGates)), !!c2.includes(this.bit(i)) && (i.connectTop = c2.some((d2) => d2 < this.bit(i)), i.connectBottom = c2.some((d2) => d2 > this.bit(i)));
    }
    for (let i of this.freeDropzones) {
      let c2 = this.phaseGateDropzones.filter((b) => b.connectTop || b.connectBottom).map((b) => this.bit(b)), d2 = Math.min(...c2), v = Math.max(...c2);
      d2 < this.bit(i) && this.bit(i) < v && (i.connectTop = true, i.connectBottom = true);
    }
  }
  updateControlControlConnections(e) {
    let t = this.controlGateDropzones, i = t.map((c2) => this.bit(c2)), l = 0;
    e !== void 0 && (e.maxControlControlTargetGates === 1 ? i = [] : e.maxControlControlTargetGates > 1 && (i = i.slice(0, e.maxControlControlTargetGates)));
    for (let c2 of t) {
      l += 1;
      let d2 = c2.operation;
      (e == null ? void 0 : e.disableControlControl) || e !== void 0 && (e.maxControlControlTargetGates === 1 || e.maxControlControlTargetGates > 0 && l > e.maxControlControlTargetGates) ? d2.disable() : (d2.enable(), c2.connectTop = i.some((v) => this.bit(c2) > v), c2.connectBottom = i.some((v) => this.bit(c2) < v));
    }
  }
  updateControlledUConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones, l = [...new Set(t.map((w2) => w2.operationName))], c2 = this.numControlGateDropzones(e, l), d2 = i.map((w2) => this.bit(w2)), v = c2 === null ? d2 : d2.slice(0, c2), b = t.map((w2) => this.bit(w2)), y = v.concat(b);
    for (let [w2, A2] of Object.entries(i)) {
      let O2 = A2.operation;
      A2.connectBottom = y.some((M2) => this.bit(A2) < M2), A2.connectTop = y.some((M2) => this.bit(A2) > M2), c2 === null || c2 !== null && parseInt(w2) < c2 ? O2.enable() : (A2.connectTop = Math.max(...y) > this.bit(A2), O2.disable());
    }
    for (let w2 of t) {
      if (!xn(w2.operation))
        throw new Error(`${w2.operation} isn't controllable.`);
      w2.operation.controls = this.controlBits(w2, d2, e), w2.connectTop = y.some((A2) => A2 < this.bit(w2)), w2.connectBottom = y.some((A2) => A2 > this.bit(w2));
    }
  }
  updateFreeDropzoneConnections(e) {
    let t = this.controllableDropzones(e), i = this.controlGateDropzones.filter((b) => yl(b.operation) && !b.operation.disabled).map((b) => this.bit(b)), l = t.map((b) => this.bit(b)), c2 = i.concat(l), d2 = Math.min(...c2), v = Math.max(...c2);
    for (let b of this.freeDropzones)
      d2 < this.bit(b) && this.bit(b) < v && (b.connectTop = true, b.connectBottom = true);
  }
  controlBits(e, t, i) {
    let l = t;
    return i && (i.maxChControlGates > 0 && e.operationName === "h-gate" ? l = t.slice(0, i.maxChControlGates) : i.maxCnotControlGates > 0 && e.operationName === "x-gate" ? l = t.slice(0, i.maxCnotControlGates) : i.maxCyControlGates > 0 && e.operationName === "y-gate" ? l = t.slice(0, i.maxCyControlGates) : i.maxCzControlGates > 0 && e.operationName === "z-gate" ? l = t.slice(0, i.maxCzControlGates) : i.maxCphaseControlGates > 0 && e.operationName === "phase-gate" ? l = t.slice(0, i.maxCphaseControlGates) : i.maxCtControlGates > 0 && e.operationName === "t-gate" ? l = t.slice(0, i.maxCtControlGates) : i.maxCrnotControlGates > 0 && e.operationName === "rnot-gate" ? l = t.slice(0, i.maxCrnotControlGates) : i.maxCrxControlGates > 0 && e.operationName === "rx-gate" ? l = t.slice(0, i.maxCrxControlGates) : i.maxCryControlGates > 0 && e.operationName === "ry-gate" ? l = t.slice(0, i.maxCryControlGates) : i.maxCrzControlGates > 0 && e.operationName === "rz-gate" ? l = t.slice(0, i.maxCrzControlGates) : i.maxCswapControlGates > 0 && e.operationName === "swap-gate" && (l = t.slice(0, i.maxCswapControlGates))), l;
  }
  bit(e) {
    let t = this.dropzones.indexOf(e);
    return ue.need(t !== -1, "circuit-dropzone not found."), t;
  }
  get isEmpty() {
    return this.keep ? false : this.dropzones.every((e) => !e.occupied);
  }
  dropzoneAt(e) {
    let t = this.dropzones[e];
    return ue.notNull(t), t;
  }
  get dropzones() {
    return Array.from(this.querySelectorAll("circuit-dropzone"));
  }
  get freeDropzones() {
    return this.dropzones.filter((e) => !e.occupied);
  }
  get lastDropzone() {
    return this.dropzones[this.wireCount - 1];
  }
  appendDropzone() {
    let e = new yt();
    return e.shadow = this.shadow, this.append(e), e;
  }
  appendOperation(e) {
    let t = new yt();
    this.append(t), t.put(e);
  }
  get swapGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "swap-gate");
  }
  get phaseGateDropzones() {
    return this.dropzones.filter((e) => e.occupied).filter((e) => e.operationName === "phase-gate");
  }
  get controlGateDropzones() {
    return this.dropzones.filter((e) => e.occupied && yl(e.operation));
  }
  numControlGateDropzones(e, t) {
    if (e === void 0)
      return null;
    let i = 0;
    return t.includes("h-gate") && !e.disableCh && e.maxChControlGates > i && (i = e.maxChControlGates), t.includes("x-gate") && !e.disableCnot && e.maxCnotControlGates > i && (i = e.maxCnotControlGates), t.includes("y-gate") && !e.disableCy && e.maxCyControlGates > i && (i = e.maxCyControlGates), t.includes("z-gate") && !e.disableCz && e.maxCzControlGates > i && (i = e.maxCzControlGates), t.includes("phase-gate") && !e.disableCphase && e.maxCphaseControlGates > i && (i = e.maxCphaseControlGates), t.includes("t-gate") && !e.disableCt && e.maxCtControlGates > i && (i = e.maxCtControlGates), t.includes("rnot-gate") && !e.disableCrnot && e.maxCrnotControlGates > i && (i = e.maxCrnotControlGates), t.includes("rx-gate") && !e.disableCrx && e.maxCrxControlGates > i && (i = e.maxCrxControlGates), t.includes("ry-gate") && !e.disableCry && e.maxCryControlGates > i && (i = e.maxCryControlGates), t.includes("rz-gate") && !e.disableCrz && e.maxCrzControlGates > i && (i = e.maxCrzControlGates), t.includes("swap-gate") && !e.disableCswap && e.maxCswapControlGates > i && (i = e.maxCswapControlGates), i === 0 ? null : i;
  }
  controllableDropzones(e) {
    let t = 0, i = 0, l = 0, c2 = 0, d2 = 0, v = 0, b = 0, y = 0, w2 = 0, A2 = 0;
    return this.dropzones.filter((O2) => O2.occupied).filter((O2) => xn(O2.operation)).filter((O2) => e === void 0 ? true : Lp(O2.operation) ? (t += 1, e.maxChTargetGates !== 0 && t > e.maxChTargetGates ? false : !e.disableCh) : qp(O2.operation) ? (i += 1, e.maxCnotTargetGates !== 0 && i > e.maxCnotTargetGates ? false : !e.disableCnot) : jp(O2.operation) ? (l += 1, e.maxCyTargetGates !== 0 && l > e.maxCyTargetGates ? false : !e.disableCy) : Bp(O2.operation) ? (c2 += 1, e.maxCzTargetGates !== 0 && c2 > e.maxCzTargetGates ? false : !e.disableCz) : bo(O2.operation) ? (d2 += 1, e.maxCphaseTargetGates !== 0 && d2 > e.maxCphaseTargetGates ? false : !e.disableCphase) : $p(O2.operation) ? (v += 1, e.maxCtTargetGates !== 0 && v > e.maxCtTargetGates ? false : !e.disableCt) : Hp(O2.operation) ? (b += 1, e.maxCrnotTargetGates !== 0 && b > e.maxCrnotTargetGates ? false : !e.disableCrnot) : Ba(O2.operation) ? (y += 1, e.maxCrxTargetGates !== 0 && y > e.maxCrxTargetGates ? false : !e.disableCrx) : $a(O2.operation) ? (w2 += 1, e.maxCryTargetGates !== 0 && w2 > e.maxCryTargetGates ? false : !e.disableCry) : Ha(O2.operation) ? (A2 += 1, e.maxCrzTargetGates !== 0 && A2 > e.maxCrzTargetGates ? false : !e.disableCrz) : Fp(O2.operation) ? !e.disableCswap : true);
  }
  dispatchUpdateEvent() {
    this.dispatchEvent(new Event("circuit-step-update", { bubbles: true }));
  }
  deleteOperation(e) {
    let t = e.target;
    this.circuitStepService.send({ type: "DELETE_OPERATION", dropzone: t });
  }
  dispatchMouseenterEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseenter", { bubbles: true }));
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("circuit-step-mouseleave", { bubbles: true }));
  }
  maybeDispatchClickEvent(e) {
    Ye(e.target) || this.dispatchEvent(new Event("circuit-step-click", { bubbles: true }));
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
    for (let [t, i] of Ne(this.operations, (l) => l.constructor))
      switch (t) {
        case Yt: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d2, (y) => y.controls.toString())) {
              let y = b[0], w2 = y.operationType, A2 = b.map((M2) => M2.bit), O2 = { type: w2, targets: A2 };
              c2 !== "" && (O2.if = c2), v !== "" && (O2.controls = y.controls), e.push(O2);
            }
          break;
        }
        case ir: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d2, (y) => y.controls.toString())) {
              let y = b[0], w2 = y.operationType, A2 = b.map((M2) => M2.bit), O2 = { type: w2, targets: A2 };
              c2 !== "" && (O2.if = c2), v !== "" && (O2.controls = y.controls), e.push(O2);
            }
          break;
        }
        case or: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d2, (y) => y.controls.toString())) {
              let y = b[0], w2 = y.operationType, A2 = b.map((M2) => M2.bit), O2 = { type: w2, targets: A2 };
              c2 !== "" && (O2.if = c2), v !== "" && (O2.controls = y.controls), e.push(O2);
            }
          break;
        }
        case ar: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d2, (y) => y.controls.toString())) {
              let y = b[0], w2 = y.operationType, A2 = b.map((M2) => M2.bit), O2 = { type: w2, targets: A2 };
              c2 !== "" && (O2.if = c2), v !== "" && (O2.controls = y.controls), e.push(O2);
            }
          break;
        }
        case Jt: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d2, (y) => y.if))
              for (let [y, w2] of Ne(b, (A2) => A2.controls.toString())) {
                let A2 = w2[0], O2 = A2.operationType, M2 = w2.map((S) => S.bit), R2 = { type: O2, targets: M2 };
                v !== "" && (R2.if = v), c2 !== "" && (R2.angle = c2), y !== "" && (R2.controls = A2.controls), e.push(R2);
              }
          break;
        }
        case nr: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d2, (y) => y.controls.toString())) {
              let y = b[0], w2 = y.operationType, A2 = b.map((M2) => M2.bit), O2 = { type: w2, targets: A2 };
              c2 !== "" && (O2.if = c2), v !== "" && (O2.controls = y.controls), e.push(O2);
            }
          break;
        }
        case Kt: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.if))
            for (let [v, b] of Ne(d2, (y) => y.controls.toString())) {
              let y = b[0], w2 = y.operationType, A2 = b.map((M2) => M2.bit), O2 = { type: w2, targets: A2 };
              c2 !== "" && (O2.if = c2), v !== "" && (O2.controls = y.controls), e.push(O2);
            }
          break;
        }
        case Qt: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d2, (y) => y.if))
              for (let [y, w2] of Ne(b, (A2) => A2.controls.toString())) {
                let A2 = w2[0], O2 = A2.operationType, M2 = w2.map((S) => S.bit), R2 = { type: O2, targets: M2 };
                v !== "" && (R2.if = v), c2 !== "" && (R2.angle = c2), y !== "" && (R2.controls = A2.controls), e.push(R2);
              }
          break;
        }
        case er: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d2, (y) => y.if))
              for (let [y, w2] of Ne(b, (A2) => A2.controls.toString())) {
                let A2 = w2[0], O2 = A2.operationType, M2 = w2.map((S) => S.bit), R2 = { type: O2, targets: M2 };
                v !== "" && (R2.if = v), c2 !== "" && (R2.angle = c2), y !== "" && (R2.controls = A2.controls), e.push(R2);
              }
          break;
        }
        case tr: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.angle))
            for (let [v, b] of Ne(d2, (y) => y.if))
              for (let [y, w2] of Ne(b, (A2) => A2.controls.toString())) {
                let A2 = w2[0], O2 = A2.operationType, M2 = w2.map((S) => S.bit), R2 = { type: O2, targets: M2 };
                v !== "" && (R2.if = v), c2 !== "" && (R2.angle = c2), y !== "" && (R2.controls = A2.controls), e.push(R2);
              }
          break;
        }
        case rr: {
          let l = i.filter((b) => !b.disabled);
          if (l.length !== 2)
            break;
          let c2 = l[0].operationType, d2 = l[0].controls, v = { type: c2, targets: [l[0].bit, l[1].bit] };
          d2 !== void 0 && d2.length > 0 && (v.controls = d2), e.push(v);
          break;
        }
        case jt: {
          let l = i.filter((d2) => !d2.disabled);
          if (l.length < 2 || this.operations.some((d2) => xn(d2) && d2.controls.length > 0))
            break;
          let c2 = l.map((d2) => d2.bit);
          e.push({ type: l[0].operationType, targets: c2 });
          break;
        }
        case at: {
          let l = i, c2 = i.map((d2) => d2.bit);
          e.push({ type: l[0].operationType, targets: c2 });
          break;
        }
        case Bt: {
          let l = i;
          for (let [, c2] of Ne(l, (d2) => d2.value)) {
            let d2 = c2.map((v) => v.bit);
            e.push({ type: c2[0].operationType, targets: d2 });
          }
          break;
        }
        case Zt: {
          let l = i;
          for (let [c2, d2] of Ne(l, (v) => v.flag)) {
            let v = d2.map((w2) => w2.bit), y = { type: d2[0].operationType, targets: v };
            c2 !== "" && (y.flag = c2), e.push(y);
          }
          break;
        }
        default:
          throw new kr("Unrecognized operation", { klass: t });
      }
    return e;
  }
  get operations() {
    return this.dropzones.filter((e) => e.occupied).map((e) => e.operation).filter((e) => e !== null);
  }
  toJson() {
    let e = this.dropzones.map((t) => t.toJson());
    for (; e.length > 0 && e[e.length - 1] === "1"; )
      e.pop();
    return e.length === 0 ? "[1]" : `[${e.join(",")}]`;
  }
}, "It");
u2(It, "CircuitStepElement"), k([j], It.prototype, "active", 2), k([j], It.prototype, "breakpoint", 2), k([j], It.prototype, "shadow", 2), k([j], It.prototype, "keep", 2), k([j], It.prototype, "debug", 2);
ne(It);
var gi = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.circuitEditorMachine = rt({ id: "circuit-editor", initial: "inspectable", states: { inspectable: { type: "compound", initial: "unknown", on: { DROP_OPERATION: { target: "inspectable", actions: ["initOperationMenu", "resizeCircuit"] }, ACTIVATE_OPERATION: { target: "inspectable", actions: ["maybeUpdateOperationInspector"] }, DELETE_OPERATION: { target: "inspectable", actions: ["resizeCircuit"] } }, states: { unknown: { always: [{ target: "idle", cond: "isIdle" }, { target: "editing", cond: "isEditing" }] }, idle: { entry: "enableDragging", on: { GRAB_OPERATION: { target: "editing", actions: ["startCircuitEdit", "setOperationActive", "addDocumentCursorGrabbingStyle", "maybeAppendCircuitWire", "setSnapTargets"] }, CLICK_STEP: { target: "idle", actions: ["setBreakpoint"] }, MOUSE_ENTER_STEP: { target: "idle", actions: ["activateStep"] }, MOUSE_LEAVE_STEP: { target: "idle", actions: ["deactivateStep"] }, MOUSE_LEAVE_CIRCUIT: { target: "idle", actions: ["deactivateAllSteps"] }, SHOW_OPERATION_MENU: { target: "idle", actions: ["showOperationMenu"] }, SHOW_OPERATION_INSPECTOR_IF: { target: "idle", actions: ["showOperationInspectorIf"] }, SHOW_OPERATION_INSPECTOR_ANGLE: { target: "idle", actions: ["showOperationInspectorAngle"] }, SHOW_OPERATION_INSPECTOR_FLAG: { target: "idle", actions: ["showOperationInspectorFlag"] }, SET_OPERATION_IF: { target: "idle", actions: ["setOperationIf"] }, SET_OPERATION_ANGLE: { target: "idle", actions: ["setOperationAngle"] }, SET_OPERATION_FLAG: { target: "idle", actions: ["setOperationFlag"] } } }, editing: { on: { OPERATION_IN_SNAP_RANGE: { target: "editing", actions: ["snapOperationIntoDropzone"] }, SNAP_STEP: { target: "editing", actions: ["activateStep"] }, UNSNAP_STEP: { target: "editing", actions: ["deactivateStep"] }, UNGRAB_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit"] }, END_DRAGGING_OPERATION: { target: "idle", actions: ["maybeRemoveLastEmptyWires", "removeDocumentCursorGrabbingStyle", "endCircuitEdit", "maybeDisableAllInspectorPanes"] } } } } } } }, { guards: { isIdle: () => !this.circuit.editing, isEditing: () => this.circuit.editing }, actions: { enableDragging: () => {
      this.circuit.draggable = true;
    }, startCircuitEdit: () => {
      this.circuit.editing = true;
    }, endCircuitEdit: () => {
      this.circuit.editing = false;
    }, setOperationActive: (e, t) => {
      t.type === "GRAB_OPERATION" && this.circuit.activateOperation(t.operation);
    }, snapOperationIntoDropzone: (e, t) => {
      if (t.type !== "OPERATION_IN_SNAP_RANGE")
        return;
      let i = t.operation, l = this.circuit.snapTargetAt(t.x, t.y);
      if (i.snapped = true, l.dropzone === null) {
        let c2 = l.stepIndex;
        ue.notNull(c2);
        let d2 = this.circuit.addShadowStepAfter(c2), v = d2.dropzones[l.wireIndex];
        ue.notNull(v), v.append(i), v.operationName = i.tagName.toLocaleLowerCase(), this.circuit.updateSnapTargets(d2.dropzones);
      } else
        l.dropzone.append(i);
    }, addDocumentCursorGrabbingStyle: () => {
      document.documentElement.setAttribute("data-grabbing", "");
    }, removeDocumentCursorGrabbingStyle: () => {
      document.documentElement.removeAttribute("data-grabbing");
    }, maybeAppendCircuitWire: () => {
      this.circuit.wireCount < this.circuit.maxWireCount && this.circuit.appendWire();
    }, maybeRemoveLastEmptyWires: () => {
      this.circuit.removeLastEmptyWires();
    }, resizeCircuit: () => {
      this.circuit.resize();
    }, setSnapTargets: (e, t) => {
      t.type === "GRAB_OPERATION" && this.circuit.setSnapTargets(t.operation);
    }, setBreakpoint: (e, t) => {
      t.type === "CLICK_STEP" && this.circuit.setBreakpoint(t.step);
    }, activateStep: (e, t) => {
      t.type !== "MOUSE_ENTER_STEP" && t.type !== "SNAP_STEP" || (t.step.active = true);
    }, deactivateStep: (e, t) => {
      t.type !== "MOUSE_LEAVE_STEP" && t.type !== "UNSNAP_STEP" || (t.step.active = false);
    }, deactivateAllSteps: () => {
      this.circuit.deactivateAllSteps();
    }, maybeDisableAllInspectorPanes: (e, t) => {
      t.type !== "END_DRAGGING_OPERATION" || t.operation.snapped || !this.inspectorButton.isInspectorShown || this.inspectorButton.inspector.disableAllPanes();
    }, initOperationMenu: (e, t) => {
      if (t.type !== "DROP_OPERATION")
        return;
      let i = t.operation;
      Sp(i) && i.initMenu();
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
      if (t.type !== "ACTIVATE_OPERATION")
        return;
      let i = t.operation;
      this.inspectorButton.isInspectorShown && this.inspectorButton.showInspector(i);
    } } });
  }
  connectedCallback() {
    this.circuitEditorService = Je(this.circuitEditorMachine).onTransition((e) => {
      this.debug && console.log(`circuit-editor: ${nt(e.value)}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), document.addEventListener("click", this.maybeDeactivateOperation.bind(this)), this.addEventListener("operation-active", this.activateOperation), this.addEventListener("operation-show-menu", this.showOperationMenu), this.addEventListener("operation-menu-if", this.showOperationInspectorIf), this.addEventListener("operation-menu-angle", this.showOperationInspectorAngle), this.addEventListener("operation-menu-flag", this.showOperationInspectorFlag), this.addEventListener("operation-inspector-if-change", this.setOperationIf), this.addEventListener("operation-inspector-angle-change", this.setOperationAngle), this.addEventListener("operation-inspector-angle-update", this.setOperationAngle), this.addEventListener("operation-inspector-flag-change", this.setOperationFlag), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-ungrab", this.ungrabOperation), this.addEventListener("operation-end-dragging", this.endDraggingOperation), this.addEventListener("operation-drop", this.dropOperation), this.addEventListener("operation-delete", this.deleteOperation), this.addEventListener("circuit-step-click", this.clickStep), this.addEventListener("circuit-step-snap", this.snapStep), this.addEventListener("circuit-step-unsnap", this.unsnapStep), this.addEventListener("operation-in-snap-range", this.operationInSnapRange), this.addEventListener("circuit-step-mouseenter", this.mouseEnterStep), this.addEventListener("circuit-step-mouseleave", this.mouseLeaveStep), this.addEventListener("quantum-circuit-mouseleave", this.mouseLeaveCircuit), this.addEventListener("quantum-circuit-init", () => {
      for (let e of this.circuit.operations)
        e.initMenu();
    });
  }
  update() {
    te(J`<slot></slot>`, this.shadowRoot);
  }
  get activeOperation() {
    return this.circuit.querySelector("circuit-dropzone > [data-active]");
  }
  maybeDeactivateOperation(e) {
    let t = e.target;
    !Ye(t) && !this.inspectorButton.popup.popper.contains(t) && !this.inspectorButton.popup.reference.contains(t) && this.activeOperation !== null && (this.activeOperation.active = false);
  }
  activateOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "ACTIVATE_OPERATION", operation: t });
  }
  showOperationMenu(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_MENU", operation: t });
  }
  showOperationInspectorIf(e) {
    let t = e.target;
    if (!$r(t))
      throw new Error(`${t} isn't an Ifable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_IF", operation: t });
  }
  showOperationInspectorAngle(e) {
    let t = e.target;
    if (!yn(t))
      throw new Error(`${t} isn't an Angleable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_ANGLE", operation: t });
  }
  showOperationInspectorFlag(e) {
    let t = e.target;
    if (!Pn(t))
      throw new Error(`${t} isn't a Flaggable Operation.`);
    this.circuitEditorService.send({ type: "SHOW_OPERATION_INSPECTOR_FLAG", operation: t });
  }
  setOperationIf(e) {
    let t = e.target, i = this.activeOperation;
    if (!$r(i))
      throw new Error("[data-if] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_IF", operation: i, if: t.if });
  }
  setOperationAngle(e) {
    let t = e.target, i = this.activeOperation;
    if (ue.notNull(i), !yn(i))
      throw new Error(`${i.outerHTML}: [data-angle] not found.`);
    this.circuitEditorService.send({ type: "SET_OPERATION_ANGLE", operation: i, angle: t.angle, reducedAngle: t.reduceAngleFraction ? t.reducedAngle : "" });
  }
  setOperationFlag(e) {
    let t = e.target, i = this.activeOperation;
    if (!Pn(i))
      throw new Error("[data-flag] not found.");
    this.circuitEditorService.send({ type: "SET_OPERATION_FLAG", operation: i, flag: t.flag });
  }
  grabOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "GRAB_OPERATION", operation: t });
  }
  ungrabOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "UNGRAB_OPERATION", operation: t });
  }
  endDraggingOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "END_DRAGGING_OPERATION", operation: t });
  }
  dropOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} must be an Operation.`);
    this.circuitEditorService.send({ type: "DROP_OPERATION", operation: t });
  }
  deleteOperation() {
    this.circuitEditorService.send({ type: "DELETE_OPERATION" });
  }
  clickStep(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "CLICK_STEP", step: t });
  }
  snapStep(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "SNAP_STEP", step: t });
  }
  unsnapStep(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "UNSNAP_STEP", step: t });
  }
  operationInSnapRange(e) {
    let t = e.target;
    if (!Ye(t))
      throw new Error(`${t} must be an Operation.`);
    let l = e.detail.snapTargetInfo, c2 = l.x, d2 = l.y;
    this.circuitEditorService.send({ type: "OPERATION_IN_SNAP_RANGE", operation: t, x: c2, y: d2 });
  }
  mouseEnterStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_ENTER_STEP", step: t });
  }
  mouseLeaveStep(e) {
    if (this.circuit.editing)
      return;
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_STEP", step: t });
  }
  mouseLeaveCircuit() {
    this.circuitEditorService.send({ type: "MOUSE_LEAVE_CIRCUIT" });
  }
}, "gi");
u2(gi, "CircuitEditorElement"), k([j], gi.prototype, "debug", 2), k([je], gi.prototype, "circuit", 2), k([je], gi.prototype, "inspectorButton", 2);
ne(gi);
var Fa = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.debug = false;
    this.paletteDropzoneMachine = rt({ id: "palette-dropzone", initial: "idle", states: { idle: { on: { GRAB_OPERATION: { target: "idle", actions: ["newOperation"] }, DELETE_OPERATION: { target: "idle", actions: ["deleteOperation"] } } } } }, { actions: { newOperation: (e, t) => {
      if (t.type !== "GRAB_OPERATION")
        return;
      let i = t.operation, l = i.cloneNode(false);
      if (!Ye(l))
        throw new TypeError(`${l} isn't an operation.`);
      vl(i) && i.disableHelp(), this.prepend(l), this.initOperation(l);
    }, deleteOperation: (e, t) => {
      t.type === "DELETE_OPERATION" && this.removeChild(t.operation);
    } } });
  }
  connectedCallback() {
    this.paletteDropzoneService = Je(this.paletteDropzoneMachine).onTransition((e) => {
      this.debug && console.log(`palette-dropzone: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.initOperation(this.operation), this.addEventListener("operation-grab", this.grabOperation), this.addEventListener("operation-delete", this.deleteOperation);
  }
  update() {
    te(J`<style>
          ::slotted(*) {
            position: absolute !important;
          }
        </style>

        <slot></slot>`, this.shadowRoot);
  }
  initOperation(e) {
    e.draggable = true, e.snapped = true, e.grabbed = false, vl(e) && e.initHelp();
  }
  get operation() {
    let t = Array.from(this.children).filter((i) => Ye(i));
    if (t.length === 0)
      throw new Error("palette-dropzone must have an operation.");
    if (t.length === 1)
      return t[0];
    throw new Error("palette-dropzone cannot hold multiple operations.");
  }
  grabOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new TypeError(`${t} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "GRAB_OPERATION", operation: t });
  }
  deleteOperation(e) {
    let t = e.target;
    if (!Ye(t))
      throw new TypeError(`${t} isn't an operation.`);
    this.paletteDropzoneService.send({ type: "DELETE_OPERATION", operation: t });
  }
}, "Fa");
u2(Fa, "PaletteDropzoneElement"), k([j], Fa.prototype, "debug", 2);
ne(Fa);
var ae = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.minStepCount = 1;
    this.minWireCount = 1;
    this.maxWireCount = 10;
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
    this.quantumCircuitMachine = rt({ id: "quantum-circuit", initial: "idle", states: { idle: { on: { EDIT: { target: "editing" } } }, editing: { on: { EDIT_DONE: { target: "idle" } } } } });
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
    return ue.need(t !== -1, `circuit-step index of ${e} not found.`), t;
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
      this.append(new It());
  }
  stepAt(e) {
    let t = this.steps[e];
    return ue.notNull(t), t;
  }
  addShadowStepAfter(e) {
    let t = new It();
    t.shadow = true;
    for (let i = 0; i < this.wireCount; i++)
      t.appendDropzone();
    if (e === -1)
      this.prepend(t);
    else {
      let i = this.steps[e];
      ue.notNull(i.parentElement), i.parentElement.insertBefore(t, i.nextSibling);
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
    if (this.quantumCircuitService = Je(this.quantumCircuitMachine).onTransition((e) => {
      this.debug && console.log(`quantum-circuit: ${e.value}`);
    }).start(), this.attachShadow({ mode: "open" }), this.update(), this.hasAttribute("data-update-url")) {
      let e = this.urlJson;
      this.loadFromJson(e);
    }
    this.appendMinimumSteps(), this.appendMinimumWires(), this.updateAllWires(), this.addEventListener("mouseleave", this.dispatchMouseleaveEvent), this.addEventListener("circuit-step-update", this.updateStep), this.addEventListener("circuit-step-snap", this.updateStep), this.addEventListener("circuit-step-snap", this.updateChangedWire), this.addEventListener("circuit-step-unsnap", this.updateStep), this.addEventListener("circuit-step-unsnap", this.updateChangedWire), this.addEventListener("circuit-step-delete-operation", this.updateStep), this.addEventListener("circuit-step-delete-operation", this.updateChangedWire), this.dispatchEvent(new Event("quantum-circuit-init", { bubbles: true }));
  }
  attributeChangedCallback(e, t, i) {
    t !== i && (e === "data-editing" && (i !== null ? this.quantumCircuitService.send({ type: "EDIT" }) : this.quantumCircuitService.send({ type: "EDIT_DONE" })), e === "data-json" && i !== "" && this.loadFromJson(i));
  }
  update() {
    te(J`<slot></slot>`, this.shadowRoot);
  }
  updateStep(e) {
    let t = e.target;
    this.updateStepOperationAttributes(t);
  }
  updateStepOperationAttributes(e) {
    e.updateOperationAttributes({ disableCh: this.chDisabled, maxChControlGates: this.chMaxControlGates, maxChTargetGates: this.chMaxTargetGates, disableCnot: this.cnotDisabled, maxCnotControlGates: this.cnotMaxControlGates, maxCnotTargetGates: this.cnotMaxTargetGates, disableCy: this.cyDisabled, maxCyControlGates: this.cyMaxControlGates, maxCyTargetGates: this.cyMaxTargetGates, disableCz: this.czDisabled, maxCzControlGates: this.czMaxControlGates, maxCzTargetGates: this.czMaxTargetGates, disableCphase: this.cphaseDisabled, maxCphaseControlGates: this.cphaseMaxControlGates, maxCphaseTargetGates: this.cphaseMaxTargetGates, disableCt: this.ctDisabled, maxCtControlGates: this.ctMaxControlGates, maxCtTargetGates: this.ctMaxTargetGates, disableCrnot: this.crnotDisabled, maxCrnotControlGates: this.crnotMaxControlGates, maxCrnotTargetGates: this.crnotMaxTargetGates, disableCrx: this.crxDisabled, maxCrxControlGates: this.crxMaxControlGates, maxCrxTargetGates: this.crxMaxTargetGates, disableCry: this.cryDisabled, maxCryControlGates: this.cryMaxControlGates, maxCryTargetGates: this.cryMaxTargetGates, disableCrz: this.crzDisabled, maxCrzControlGates: this.crzMaxControlGates, maxCrzTargetGates: this.crzMaxTargetGates, disableCswap: this.cswapDisabled, maxCswapControlGates: this.cswapMaxControlGates, disableSwap: this.swapDisabled, disableControlControl: this.controlControlDisabled, maxControlControlTargetGates: this.controlControlMaxTargetGates, disablePhasePhase: this.phasePhaseDisabled, maxPhasePhaseTargetGates: this.phasePhaseMaxTargetGates });
  }
  dispatchMouseleaveEvent() {
    this.dispatchEvent(new Event("quantum-circuit-mouseleave", { bubbles: true }));
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
      let l = new Yt();
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
      let l = new ir();
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
      let l = new or();
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
      let l = new ar();
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
      let d2 = e[0];
      i = d2.targets, l = d2.disabled;
    }
    let c2 = this.applyOperationToTargets(() => {
      let d2 = new Jt();
      return d2.angle = t, l && d2.disable(), d2;
    }, ...i);
    return i.length > 1 && this.updateStepOperationAttributes(c2), this;
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
      let l = new nr();
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
      let l = new Kt();
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
      let l = new Qt();
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
      let l = new er();
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
      let l = new tr();
      return i && l.disable(), l;
    }, ...t), this;
  }
  swap(...e) {
    let t = this.applyOperationToTargets(() => new rr(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  control(...e) {
    let t = this.applyOperationToTargets(() => new jt(), ...e);
    return this.updateStepOperationAttributes(t), this;
  }
  bloch(...e) {
    return this.applyOperationToTargets(() => new at(), ...e), this;
  }
  write(e, ...t) {
    return this.applyOperationToTargets(() => {
      let i = new Bt();
      return i.value = e, i;
    }, ...t), this.resize(), this;
  }
  measure(...e) {
    return this.applyOperationToTargets(() => new Zt(), ...e), this.resize(), this;
  }
  applyOperationToTargets(e, ...t) {
    let i = Math.max(...t) + 1, l = this.appendStepWithDropzones(i);
    for (let c2 of t) {
      let d2 = e();
      l.dropzoneAt(c2).put(d2);
    }
    return l;
  }
  ch(e, t) {
    return this.controlledU(Yt, e, t), this;
  }
  cnot(e, t) {
    return this.controlledU(ir, e, t), this.resize(), this;
  }
  cy(e, t) {
    return this.controlledU(or, e, t), this;
  }
  cz(e, t) {
    return this.controlledU(ar, e, t), this;
  }
  cphase(e, t) {
    return this.controlledU(Jt, e, t), this;
  }
  ct(e, t) {
    return this.controlledU(nr, e, t), this;
  }
  crnot(e, t) {
    return this.controlledU(Kt, e, t), this;
  }
  crx(e, t) {
    return this.controlledU(Qt, e, t), this;
  }
  cry(e, t) {
    return this.controlledU(er, e, t), this;
  }
  crz(e, t) {
    return this.controlledU(tr, e, t), this;
  }
  cswap(e, t) {
    return this.controlledU(rr, e, t), this;
  }
  cc(...e) {
    let t = Math.max(...e) + 1, i = this.appendStepWithDropzones(t);
    for (let l of e)
      i.dropzoneAt(l).put(new jt());
    return this.appendMinimumWires(), this.updateStepOperationAttributes(i), this;
  }
  controlledU(e, t, i) {
    let l = [].concat(t), c2 = [].concat(i), d2 = l.concat(c2), v = Math.max(...d2) + 1, b = this.appendStepWithDropzones(v);
    for (let y of l)
      b.dropzoneAt(y).put(new jt());
    for (let y of c2)
      b.dropzoneAt(y).put(new e());
    this.appendMinimumWires(), this.updateStepOperationAttributes(b);
  }
  appendStep() {
    let e = new It(), t = this.blocks.slice(-1)[0] || null;
    return t === null || t.finalized ? this.append(e) : t.append(e), e;
  }
  appendStepWithDropzones(e) {
    let t = new It();
    this.append(t);
    for (let i = 0; i < e; i++) {
      let l = new yt();
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
    for (; this.steps.every((e) => e.wireCount > this.minWireCount && !e.lastDropzone.occupied); )
      for (let e of this.steps)
        e.lastDropzone.remove();
  }
  removeEmptySteps() {
    for (let e of this.emptySteps)
      e.remove();
  }
  loadFromJson(e) {
    console.log("loadFromJson"), this.innerHTML = "";
    let t = null;
    if (e === "") {
      this.hasAttribute("data-update-url") && this.resize();
      return;
    }
    let i = JSON.parse(e);
    this.circuitTitle = (i.title || "").trim();
    for (let l of i.cols) {
      let c2 = this.appendStep();
      for (let d2 of l) {
        switch (true) {
          case /^\|0>$/.test(d2): {
            let v = new Bt();
            v.hoverable = true, v.value = "0", c2.appendOperation(v);
            break;
          }
          case /^\|1>$/.test(d2): {
            let v = new Bt();
            v.hoverable = true, v.value = "1", c2.appendOperation(v);
            break;
          }
          case /^H/.test(d2): {
            let v = new Yt();
            v.hoverable = true, v.if = this.ifVariable(d2.slice(1)), c2.appendOperation(v);
            break;
          }
          case (/^X$/.test(d2) || /^X<(.+)$/.test(d2)): {
            let v = new ir();
            v.hoverable = true, v.if = d2.slice(2).trim(), c2.appendOperation(v);
            break;
          }
          case /^Y/.test(d2): {
            let v = new or();
            v.hoverable = true, v.if = this.ifVariable(d2.slice(1)), c2.appendOperation(v);
            break;
          }
          case /^Z/.test(d2): {
            let v = new ar();
            v.hoverable = true, v.if = this.ifVariable(d2.slice(1)), c2.appendOperation(v);
            break;
          }
          case /^P/.test(d2): {
            let v = new Jt();
            v.hoverable = true, v.angle = this.angleParameter(d2.slice(1)), c2.appendOperation(v);
            break;
          }
          case /^T/.test(d2): {
            let v = new nr();
            v.hoverable = true, v.if = this.ifVariable(d2.slice(1)), c2.appendOperation(v);
            break;
          }
          case /^X\^½/.test(d2): {
            let v = new Kt();
            v.hoverable = true, v.if = this.ifVariable(d2.slice(3)), c2.appendOperation(v);
            break;
          }
          case /^Rx/.test(d2): {
            let v = new Qt();
            v.hoverable = true, v.angle = this.angleParameter(d2.slice(2)), c2.appendOperation(v);
            break;
          }
          case /^Ry/.test(d2): {
            let v = new er();
            v.hoverable = true, v.angle = this.angleParameter(d2.slice(2)), c2.appendOperation(v);
            break;
          }
          case /^Rz/.test(d2): {
            let v = new tr();
            v.hoverable = true, v.angle = this.angleParameter(d2.slice(2)), c2.appendOperation(v);
            break;
          }
          case /^Swap$/.test(d2): {
            let v = new rr();
            v.hoverable = true, c2.appendOperation(v);
            break;
          }
          case /^•$/.test(d2): {
            let v = new jt();
            v.hoverable = true, c2.appendOperation(v);
            break;
          }
          case /^Bloch$/.test(d2): {
            let v = new at();
            v.hoverable = true, c2.appendOperation(v);
            break;
          }
          case /^Measure/.test(d2): {
            let v = new Zt(), b = ((/^>(.+)$/.exec(d2.slice(7)) || [])[1] || "").trim();
            v.hoverable = true, v.flag = b, c2.appendOperation(v);
            break;
          }
          case /^[[{](.+)$/.test(d2): {
            let v = d2.slice(1);
            c2.remove(), t = new an(), t.comment = v, t.setAttribute("data-targets", "quantum-circuit.blocks"), this.append(t);
            break;
          }
          case /^[\]}]$/.test(d2): {
            c2.remove(), t.finalize();
            break;
          }
          default: {
            if (d2 === 1)
              c2.dropzones.length === c2.freeDropzones.length ? c2.keep = true : c2.keep = false;
            else
              throw new Error(`Unknown operation: ${d2}`);
            c2.appendDropzone();
          }
        }
        c2.updateOperationAttributes();
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
      for (let c2 = 0; c2 < l; c2++)
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
        let c2 = i.dropzones.filter((d2) => d2.operationName === "swap-gate");
        if (c2.length === 2) {
          let d2 = c2.map((w2) => i.bit(w2)), v = i.bit(l), b = d2[0] === v ? d2[1] : d2[0], y = i.dropzoneAt(b);
          l.inputWireQuantum = t, l.outputWireQuantum = y.inputWireQuantum, t = y.inputWireQuantum;
        } else
          l.inputWireQuantum = t, l.outputWireQuantum = t;
      } else
        l.inputWireQuantum = t, l.outputWireQuantum = t;
    }
  }
  updateChangedWire(e) {
    let t = e.target;
    if (!sn(t))
      throw new Error(`${t} isn't a circuit-step.`);
    let i = e.detail.dropzone;
    if (!El(i))
      throw new Error(`${i} isn't a circuit-dropzone.`);
    let l = t.dropzones.indexOf(i);
    ue.need(l !== -1, "circuit-dropzone not found."), this.updateWire(l);
  }
  set draggable(e) {
    for (let t of this.operations)
      t.draggable = e;
  }
  snapTargetAt(e, t) {
    return this.isVertical ? this.snapTargets[t][e] : this.snapTargets[e][t];
  }
  setSnapTargets(e) {
    let t = this.dropzones.filter((c2) => !c2.occupied), i = [];
    this.snapTargets = {};
    let l = e.dropzone;
    El(l) && t.push(l);
    for (let [c2, d2] of Object.entries(this.dropzones)) {
      let v = d2.snapTarget, b = this.isVertical ? v.y : v.x, y = this.isVertical ? v.x : v.y, w2 = parseInt(c2) % this.wireCount, A2 = b - e.snapRange * 0.75, O2 = b + e.snapRange * 0.75;
      parseInt(c2) < this.wireCount && (this.isVertical ? i.push({ x: y, y: A2 }) : i.push({ x: A2, y }), this.snapTargets[A2] === void 0 && (this.snapTargets[A2] = {}), this.snapTargets[A2][y] === void 0 && (this.snapTargets[A2][y] = { dropzone: null, stepIndex: -1, wireIndex: w2 })), this.isVertical ? i.push({ x: y, y: O2 }) : i.push({ x: O2, y }), this.snapTargets[O2] === void 0 && (this.snapTargets[O2] = {}), this.snapTargets[O2][y] === void 0 && (this.snapTargets[O2][y] = { dropzone: null, stepIndex: Math.floor(parseInt(c2) / this.wireCount), wireIndex: w2 }), (!d2.occupied || d2 === l) && i.push(v), this.snapTargets[b] === void 0 && (this.snapTargets[b] = {}), this.snapTargets[b][y] === void 0 && (this.snapTargets[b][y] = { dropzone: d2, stepIndex: null, wireIndex: w2 });
    }
    e.snapTargets = i;
  }
  updateSnapTargets(e) {
    let t = e[0];
    ue.notNull(t);
    let i = this.isVertical ? t.snapTarget.y : t.snapTarget.x;
    for (let [l, c2] of Object.entries(this.snapTargets))
      if (!(parseInt(l) <= i))
        for (let d2 in c2) {
          let v = c2[d2];
          v.stepIndex !== null && (v.stepIndex += 1);
        }
    for (let [l, c2] of Object.entries(e)) {
      let d2 = c2.snapTarget, v = this.isVertical ? d2.y : d2.x, b = this.isVertical ? d2.x : d2.y;
      ue.notNull(this.snapTargets[v]), this.snapTargets[v][b] = { dropzone: c2, stepIndex: null, wireIndex: parseInt(l) };
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
}, "ae");
u2(ae, "QuantumCircuitElement"), k([j], ae.prototype, "minStepCount", 2), k([j], ae.prototype, "minWireCount", 2), k([j], ae.prototype, "maxWireCount", 2), k([j], ae.prototype, "editing", 2), k([j], ae.prototype, "updateUrl", 2), k([j], ae.prototype, "json", 2), k([j], ae.prototype, "circuitTitle", 2), k([j], ae.prototype, "debug", 2), k([j], ae.prototype, "chDisabled", 2), k([j], ae.prototype, "chMaxControlGates", 2), k([j], ae.prototype, "chMaxTargetGates", 2), k([j], ae.prototype, "cnotDisabled", 2), k([j], ae.prototype, "cnotMaxControlGates", 2), k([j], ae.prototype, "cnotMaxTargetGates", 2), k([j], ae.prototype, "cyDisabled", 2), k([j], ae.prototype, "cyMaxControlGates", 2), k([j], ae.prototype, "cyMaxTargetGates", 2), k([j], ae.prototype, "czDisabled", 2), k([j], ae.prototype, "czMaxControlGates", 2), k([j], ae.prototype, "czMaxTargetGates", 2), k([j], ae.prototype, "cphaseDisabled", 2), k([j], ae.prototype, "cphaseMaxControlGates", 2), k([j], ae.prototype, "cphaseMaxTargetGates", 2), k([j], ae.prototype, "ctDisabled", 2), k([j], ae.prototype, "ctMaxControlGates", 2), k([j], ae.prototype, "ctMaxTargetGates", 2), k([j], ae.prototype, "crnotDisabled", 2), k([j], ae.prototype, "crnotMaxControlGates", 2), k([j], ae.prototype, "crnotMaxTargetGates", 2), k([j], ae.prototype, "crxDisabled", 2), k([j], ae.prototype, "crxMaxControlGates", 2), k([j], ae.prototype, "crxMaxTargetGates", 2), k([j], ae.prototype, "cryDisabled", 2), k([j], ae.prototype, "cryMaxControlGates", 2), k([j], ae.prototype, "cryMaxTargetGates", 2), k([j], ae.prototype, "crzDisabled", 2), k([j], ae.prototype, "crzMaxControlGates", 2), k([j], ae.prototype, "crzMaxTargetGates", 2), k([j], ae.prototype, "cswapDisabled", 2), k([j], ae.prototype, "cswapMaxControlGates", 2), k([j], ae.prototype, "swapDisabled", 2), k([j], ae.prototype, "controlControlDisabled", 2), k([j], ae.prototype, "controlControlMaxTargetGates", 2), k([j], ae.prototype, "phasePhaseDisabled", 2), k([j], ae.prototype, "phasePhaseMaxTargetGates", 2), k([fr], ae.prototype, "blocks", 2);
ne(ae);
var $n = /* @__PURE__ */ __name(class extends HTMLElement {
  constructor() {
    super(...arguments);
    this.updateUrl = false;
  }
  connectedCallback() {
    this.worker = new Worker("./serviceworker.js"), this.visibleQubitCircleKets = [], this.worker.addEventListener("message", this.handleServiceWorkerMessage.bind(this)), this.addEventListener("operation-inspector-if-change", this.run), this.addEventListener("operation-inspector-angle-change", this.run), this.addEventListener("operation-inspector-angle-update", this.maybeUpdateUrl), this.addEventListener("operation-inspector-flag-change", this.run), this.addEventListener("circuit-step-mouseenter", this.runUnlessEditing), this.addEventListener("circuit-step-mouseleave", this.runUnlessEditing), this.addEventListener("circuit-step-snap", this.run), this.addEventListener("circuit-step-unsnap", this.run), this.addEventListener("circuit-step-update", this.run), this.addEventListener("circle-notation-visibility-change", this.updateVisibleQubitCircleKets), this.addEventListener("circle-notation-visibility-change", this.run), this.addEventListener("run-circuit-button-click", this.run), this.addEventListener("circuit-step-snap", this.maybeUpdateUrl), this.addEventListener("circuit-step-unsnap", this.maybeUpdateUrl), this.attachShadow({ mode: "open" }), this.update(), this.maybeUpdateUrl(), this.circuit.setBreakpoint(this.circuit.stepAt(0)), this.run();
  }
  update() {
    te(J`<slot></slot>`, this.shadowRoot);
  }
  clearCircuit() {
    this.circuit.clear();
  }
  handleServiceWorkerMessage(e) {
    var l;
    let t = e.data, i = this.activeStepIndex;
    switch (t.type) {
      case "step": {
        let c2 = this.circuit.stepAt(t.step);
        for (let d2 in t.blochVectors) {
          let v = parseInt(d2), b = c2.dropzoneAt(v).operation;
          if (Up(b)) {
            let y = t.blochVectors[v];
            b.x = y[0], b.y = y[1], b.z = y[2];
          }
        }
        if (t.measuredBits) {
          let d2 = t.measuredBits;
          for (let v in d2) {
            let b = parseInt(v), y = c2.dropzoneAt(b).operation;
            Wp(y) && (y.value = d2[b].toString());
          }
        }
        for (let d2 of c2.dropzones) {
          let v = d2.operation;
          !$r(v) || v.if !== "" && (v.disabled = !t.flags[v.if]);
        }
        if (i === t.step) {
          let d2 = {};
          for (let v in t.amplitudes) {
            let b = t.amplitudes[v];
            d2[v] = new Nr(b[0], b[1]);
          }
          (l = this.circleNotation) == null || l.setAmplitudes(d2);
        }
        break;
      }
      case "finish": {
        for (let c2 of this.runCircuitButtons)
          c2.running = false;
        break;
      }
      default:
        throw new kr("Unknown service worker message", { data: t });
    }
  }
  run() {
    if (this.circleNotation === null)
      return;
    let e = this.activeStepIndex, t = this.circuit.serialize();
    ue.need(t.length > 0, "non-zero step length");
    let i = Math.max(...t.map((c2) => Math.max(...c2.map((d2) => {
      let v = [];
      return xn(d2) && (v = d2.controls), Math.max(...d2.targets.concat(v));
    })))), l = i >= 0 ? i + 1 : 1;
    this.circleNotation.qubitCount = l, this.worker.postMessage({ qubitCount: l, stepIndex: e, steps: t, targets: this.visibleQubitCircleKets });
  }
  runUnlessEditing() {
    this.circuit.editing || this.run();
  }
  get activeStepIndex() {
    let e = this.circuit.activeStep, t = this.circuit.breakpoint, i = e || t;
    return i === null && (i = this.circuit.stepAt(0), this.circuit.setBreakpoint(i)), this.circuit.fetchStepIndex(i);
  }
  updateVisibleQubitCircleKets(e) {
    let t = e.detail;
    ue.notNull(t), this.visibleQubitCircleKets = t;
  }
  maybeUpdateUrl() {
    if (!this.updateUrl)
      return;
    ue.notNull(this.circuit);
    let e = this.circuit.toJson();
    history.pushState("", "", encodeURIComponent(e));
  }
}, "$n");
u2($n, "QuantumSimulatorElement"), k([j], $n.prototype, "updateUrl", 2), k([je], $n.prototype, "circuit", 2), k([je], $n.prototype, "circleNotation", 2), k([fr], $n.prototype, "runCircuitButtons", 2);
ne($n);

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
  h as Complex
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
 * @license Fraction.js v4.1.2 23/05/2021
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/
//# sourceMappingURL=application.js.map
